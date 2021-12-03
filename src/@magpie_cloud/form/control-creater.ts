import { ControlOptionsMap } from '@design';
import { Control } from '../typings';

function createOptions(type:number) {
  // 通过type去获取当前渲染的组件都有哪些属性
  const optionsValues = ControlOptionsMap[type];
  let options = {};
  optionsValues.forEach(item => {
    if (typeof item === 'string') {
      options[item] = null;
    } else {
      const { name, defaultValue } = item;
      options[name] = defaultValue;
    }
  });
  return options;
}

export function createControl(type:number):Control {
  // 创建属性的时候根据type字段查看当前控件都有哪些属性值
  const options = createOptions(type);
  return {
    ChildControls: null,
    key: (new Date()).getTime().toString(),
    Options: options,
    type,
  };
}
