import { FormControlOption } from './form-control-option';

export interface FormControl {
  /**
   * form控件id
   */
  key:string,
  /**
   * form控件属性值
   */
  options:Array<FormControlOption>
}
