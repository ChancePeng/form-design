import React, { useState } from 'react';
import ControlList from 'control-list';
import Designer from 'designer';
import FormContent from 'form-content';
import DesignOpeate from 'design-operate';
import Previcw from 'preview';
import _remove from 'lodash/remove';
import 'home/index.less';

export default function App() {
  const [pageData, setPageData] = useState([]);// 页面所有的Control
  const [actControl, setActControl] = useState();// 被激活的Control key
  const [formData, setFormData] = useState([]);// 所有的FormControl
  const [visible, setVisible] = useState(false);// 预览页面状态

  /**
   * 拖拽添加控件的回调
   * @param {Control} control 控件
   */
  function addControl(control) {
    pageData.push(control);
    const { key } = control;
    setActControl(key);
    setPageData([...pageData]);
  }

  /**
   * 控件被选中
   * @param {string} id 控件id
   */
  function controlSelect(id) {
    setActControl(id);
  }

  /**
   * 选中控件时，找出当前控件对应的FormControl
   * @param {string} id 控件id
   * @returns 筛选之后的FromControl
   */
  function filterFormData(id) {
    const filters = formData.filter(item => item.key === `form-${id}`);
    if (!filters) {
      return null;
    }
    if (filters.length > 1) {
      throw new Error('the form controls has same key');
    }
    return filters[0];
  }

  /**
   * 查找出当前激活的控件的属性
   * @param {string} id Control key
   * @returns 选中组件的属性
   */
  function filterControlOptions(id) {
    const filters = pageData.filter(item => item.key === id);
    const { Options } = filters[0] || {};
    if (!Options) {
      return {};
    }
    return Options;
  }

  /**
   * 添加一个FormControl
   * @param {FormControl} formControl 表单控制器
   */
  function addFormControl(formControl) {
    formData.push(formControl);
    setFormData([...formData]);
  }

  /**
   * 表单数据发生变化的回调
   * @param {any} value 发生变化的属性值
   */
  function formDataOnChange(value) {
    pageData.forEach((item, index) => {
      if (item.key === actControl) {
        Object.keys(value).forEach(k => {
          pageData[index].Options[k] = value[k];
        });
      }
    });
    setPageData([...pageData]);
  }

  /**
   * 控件移动回调
   * @param {string} moveKey 移动的Control key
   * @param {string} currKey 将要移动在此key控制器之前
   * @param {{control:Control,formControl:FormControl}} controls Control 和 FormControl
   */
  function moveControl(moveKey, currKey, controls) {
    // moveKey存在，表示已经存在的控件的移动
    if (moveKey) {
      let index = -1;
      // 删除移动的组件在原来组件的位置
      const moveControlArray = _remove(pageData, (item, i) => {
        if (item.key === currKey) {
          index = i;// 找出currKey Control的索引
        }
        if (item.key === moveKey) {
          return true;
        }
        return false;
      });
      if (index < 0) {
        throw new Error(`the key of control named ${currKey} is not found`);
      } else if (moveControlArray.length !== 1) {
        throw new Error(`the control has same key named ${moveKey}`);
      } else {
        const moveControlExa = moveControlArray[0];
        // 将移动的组件插入到移动到的位置
        pageData.splice(index, 0, moveControlExa);
        // 将移动好的控件设置为激活状态
        setActControl(moveKey);
      }
    } else {
      let index = -1;
      // 找到要插入的位置
      pageData.forEach((item, i) => {
        if (item.key === currKey) {
          index = i;
        }
      });
      if (index < 0) {
        throw new Error(`the key of control named ${currKey} is not found`);
      } else {
        const { control, formControl } = controls;
        // 插入创建好的组件
        pageData.splice(index, 0, control);
        // 将创建的FormControl添加到FormData中
        formData.push(formControl);
        setPageData([...pageData]);
        setFormData([...formData]);
        const { key } = control;
        // 将移动号的控件设为激活状态
        setActControl(key);
      }
    }
  }

  function handleSave() {
    console.log('this from has operate will be saveing', pageData);
  }

  function handlePreview() {
    setVisible(true);
    console.log('hahaha');
  }

  return (
    <div className="home">
      <DesignOpeate
        onSave={handleSave}
        onPreview={handlePreview}
      />
      <div className="home-content">
        <ControlList />
        <Designer
          pageData={pageData}
          activityId={actControl}
          addControl={addControl}
          addFormControl={addFormControl}
          onSelect={controlSelect}
          moveControl={moveControl}
        />
        <FormContent
          formData={filterFormData(actControl)}
          defaultValue={filterControlOptions(actControl)}
          onChange={formDataOnChange}
        />
      </div>
      <Previcw
        visible={visible}
        pageData={pageData}
        onClose={() => setVisible(false)}
      />
    </div>
  );
}
