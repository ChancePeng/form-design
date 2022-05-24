/**
 * 中间控件的生成，删除，移动等操作
 * 设计器的核心
 */
import * as React from 'react';
import { createControl, createFormControl, Control, FormControl } from '@magpie_cloud';
import { ControlMap } from '@design';
import loadable from 'utils/loadable';
import { DragDataKey } from '../common/typing';

import 'designer/index.less';

interface ProprType {
  pageData:Array<Control>,
  activityId:string | null | undefined,
  addControl?:(control:Control) => void,
  addFormControl?:(formControl:FormControl)=>void,
  onSelect?:(id:string) => void,
  moveControl?:(moveKey:string | null, currKey:string, controls?:{control:Control, formControl:FormControl})=>void
}

const { CONTROL_MOVE_KEY, CONTROL_MOVE_TYPE, CONTROL_TYPE, CREATE, MOVE } = DragDataKey;

const Designer:React.FC<ProprType> = (props) => {
  const [dragEnter, setDragEnter] = React.useState<string | null>(null);
  const {
    pageData,
    activityId,
    addControl = () => {},
    addFormControl = () => {},
    onSelect = () => {},
    moveControl = () => {},
  } = props;

  function onDragOver(evt) {
    evt.preventDefault();
  }

  /**
   * 生成Control和FormControl的方法
   * @param evt DragEvent
   * @returns {Control,FormControl}
   */
  function createControlAndFormControl(evt) {
    // ---------------------------生成中间控件Control------------------------------
    // 获取Control类型
    const typeStr = evt.dataTransfer.getData(CONTROL_TYPE);
    // 如果没有查询到将要申生成的Control的类型type,则什么都不做
    if (!typeStr) {
      return null;
    }
    const type = Number.parseInt(typeStr, 10);
    // 生成Control实例
    const control = createControl(type);
    // ---------------------------生成表单控件FormControl------------------------------
    const { Options, key } = control;
    // 根据生成的Control的key以及其具有的属性Option生成FormControl,FormControl的key与Control的key形成联系
    const formControl = createFormControl(key, Options);
    // 返回生成的Control和FormControl
    return { control, formControl };
  }

  /**
   * 拖拽事件在中间预览界面释放
   * @param evt DragEvent
   * @returns any
   */
  function onDrop(evt) {
    // 阻止事件冒泡
    evt.stopPropagation();
    // 生成Control和FormControl
    const controls = createControlAndFormControl(evt);
    // 生成过程没有找到Control的type
    if (!controls) {
      return;
    }
    const { control, formControl } = controls;
    setDragEnter(null); // 将悬停在下的组件key置空
    addControl(control);// 添加Control
    addFormControl(formControl); // 添加FormControl
  }

  /**
   * 控件点击事件
   * @param evt ClickEvent
   * @param id Control key
   */
  function handleClickControl(evt, id) {
    evt.stopPropagation();
    onSelect(id);// 设置当前控件被选中的回调
  }

  /**
   * 拖拽过程中在Control上悬停
   * @param evt DragEvent
   * @param key 悬停在控制器上时这个控制器的key
   */
  function onControlDragEnter(evt, key) {
    evt.stopPropagation();// 阻止事件冒泡
    setDragEnter(key);// 设置悬停在控制器的key
  }

  /**
   * 拖拽Control到已经存在的Control之上时松开鼠标的回调
   * @param evt DragEvent
   * @param key Control key 悬停在控制器上时这个控制器的key
   */
  function onControlDrop(evt, key) {
    evt.stopPropagation();// 阻止事件冒泡
    // 获取当前控件的移动类型
    const moveType = evt.dataTransfer.getData(CONTROL_MOVE_TYPE);
    // 类型为CREATE,控件从左侧控件库中拖拽释放
    if (moveType === CREATE) {
      // 创建一个Control和FormControl
      const controls = createControlAndFormControl(evt);
      // 创建完成将Control设置到拖拽的指定位置
      controls && moveControl(null, key, controls);
    }
    // 从中间已经存在的控件中移动
    if (moveType === MOVE) {
      // 获取当前移动的控件的key
      const moveKey = evt.dataTransfer.getData(CONTROL_MOVE_KEY);
      // 移动的控件释放在不是自己原来的位置时，移动控件
      if (moveKey !== key) {
        // 移动已经存在的控件
        moveControl(moveKey, key);
      }
    }
    // 将移动控件过程中产生的data置空
    evt.dataTransfer.clearData();
    setDragEnter(null);// 将悬停在控件置空
  }

  /**
   * 拖拽已经存在的Control
   * @param evt DragEvent
   * @param key Control key
   */
  function onControlDragStart(evt, key) {
    evt.stopPropagation();
    evt.dataTransfer.clearData();// 双清
    evt.dataTransfer.setData(CONTROL_MOVE_TYPE, MOVE);
    evt.dataTransfer.setData(CONTROL_MOVE_KEY, key);
  }

  /**
   * 拖拽的Control停在中间非控件区域
   * @param evt DragEvent
   */
  function onDragEnter(evt) {
    evt.stopPropagation();
    setDragEnter(null);
  }

  /**
   * Control的渲染算法
   * @returns JSX.Element
   */
  function renderPageData() {
    return pageData.map(item => {
      const { type, Options, key } = item;
      const typeValue = ControlMap[type];
      // 动态的从组件库中导入渲染
      const component = () => import(`@design/components/${typeValue}/pc`);
      const Component = loadable(component);
      return (
        <div
          className={`control ${activityId === key && 'active'} ${dragEnter === key && 'drag-enter'}`}
          key={key}
          draggable
          onDragEnter={e => onControlDragEnter(e, key)}
          onDrop={e => onControlDrop(e, key)}
          onDragStart={e => onControlDragStart(e, key)}
          onClick={e => handleClickControl(e, key)}
        >
            <Component isDesign {...Options} />
        </div>
      );
    });
  }

  return (
    <div className="designer" onDragOver={onDragOver} onDrop={onDrop} onDragEnter={onDragEnter}>
      {renderPageData()}
    </div>
  );
};

export default Designer;
