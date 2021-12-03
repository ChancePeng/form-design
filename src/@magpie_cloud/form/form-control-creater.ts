import { ControlOption, FormControl, ControlOptionLabels, ControlOptionType } from '../typings';

export function createFormControl(key:string, options:ControlOption):FormControl {
  const formOptions = Object.keys(options).map(k => {
    // 通过key去查找当前key代表的在表单中的name和label以及type
    // 例子：DisplayName在表单中的属性
    // {
    //    name:DisplayName,
    //    label:控件名称,  => Label[DisplayName]
    //    type:FormInput   => Type[DisplayName]
    // }
    return {
      name: k,
      label: ControlOptionLabels[k],
      type: ControlOptionType[k],
    };
  });
  return {
    key: `form-${key}`,
    options: formOptions,
  };
}
