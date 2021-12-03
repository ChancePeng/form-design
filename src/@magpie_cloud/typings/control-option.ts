/**
 * 定义所有控件的属性
 */
export interface ControlOption {
  /**
   * 控件名称
   */
  DisplayName?:string | number,
  /**
   * 隐藏条件
   */
  ComputationRule?:any,
  /**
   * 默认值
   */
  DefaultValue?:any,
  /**
   * 格式
   */
  Format?:any,
  /**
   * 扫码
   */
  ScanCode?:any,
  /**
   * 校验
   */
  /**
   * 提示语
   */
   PlaceHolder?:any,
  /**
   * 可见行数
   */
  Rows?:number,
  /**
   * 显示格式
   */
  DateTimeMode?:string,
  /**
   * 移动端显示模式
   */
  /**
   * 选项
   */
  /**
   * 数据来源
   */
  /**
   * 文件大小设置
   */
  /**
   * 位置范围
   */
  /**
   * 描述
   */
  Description?:string|number,
  /**
   * 是否在装修系统
   */
  isDesign?:boolean
}
