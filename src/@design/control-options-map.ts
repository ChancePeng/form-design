/**
 * 配置文件：配置控件都应该具有哪些属性
 */
import { ControlMap } from '@design/control-map';

export const ControlOptionsMap = {
  /**
   * 单行输入
   */
  [ControlMap.Text]: [
    {
      name: 'DisplayName',
      defaultValue: '单行输入',
    }, 'Format', 'DefaultValue', 'PlaceHolder', 'ScanCode', 'Description',
  ],
  /**
   * 多行输入
   */
  [ControlMap.TextArea]: [
    {
      name: 'DisplayName',
      defaultValue: '多行文本',
    }, 'DefaultValue', 'PlaceHolder', 'Rows', 'Description',
  ],
  /**
   * 日期
   */
  [ControlMap.FormDateTime]: [
    {
      name: 'DisplayName',
      defaultValue: '日期',
    }, 'DefaultValue', 'DateTimeMode', 'Descripection',
  ],
  /**
   * 数字
   */
  [ControlMap.FormNumber]: [
    { name: 'DisplayName', defaultValue: '数字' }, 'DefaultValue',
  ],
};
