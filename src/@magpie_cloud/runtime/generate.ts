import { Input, InputNumber } from 'antd';
import { FormControlType } from '../typings';
import { Switch } from '../form/component';
import { withFieldsValue } from './withFiledsValue';

const { TextArea } = Input;

export function generateFormControlExample(type, record) {
  // 表单联动
  // 需要将整个表单的数据注入进来
  switch (type) {
    case FormControlType.FormInput: return withFieldsValue(Input, record);
    case FormControlType.TextArea: return withFieldsValue(TextArea, record);
    case FormControlType.Switch: return withFieldsValue(Switch, record);
    case FormControlType.FormInputNumber: return withFieldsValue(InputNumber, record);
    default: return withFieldsValue(Input);
  }
}
