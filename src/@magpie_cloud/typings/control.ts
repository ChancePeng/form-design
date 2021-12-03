import { ControlOption } from './control-option';

export interface Control {
  /**
   * 控件id
   */
  key:string,
  /**
   * 子控件
   */
  ChildControls?:Array<Control> | null,
  /**
   * 控件属性值
   */
  Options:ControlOption,
  /**
   * 控件类型
   */
  type:number
}
