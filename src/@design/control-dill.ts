/**
 * 配置文件：配置所有的组件，用来在表单设计器左边展示
 */
import { ControlMap } from '@design/control-map';

export const ControlDill = [
  {
    name: '基础组件',
    controls: [
      {
        type: ControlMap.Text,
        name: '单行输入',
      },
      {
        type: ControlMap.TextArea,
        name: '多行文本',
      },
      {
        type: ControlMap.FormDateTime,
        name: '日期',
      },
      {
        type: ControlMap.FormNumber,
        name: '数字',
      },
    ],
  },
];
