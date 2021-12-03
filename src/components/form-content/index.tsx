import * as React from 'react';
import { FormControl, generateFormControlExample } from '@magpie_cloud';
import { Form, Tabs } from 'antd';

import 'form-content/index.scss';

interface PropType {
  formData:FormControl | null | undefined,
  defaultValue:any,
  onChange?:(value:any) => void,
}

const { TabPane } = Tabs;

const FormContent:React.FC<PropType> = (props) => {
  const [form] = Form.useForm();
  const { formData, defaultValue, onChange } = props;

  React.useEffect(() => {
    form.resetFields();
    form.setFieldsValue(defaultValue);
  }, [defaultValue, form]);

  function formValueChange(changeValues) {
    onChange(changeValues);
  }

  function renderFormItem() {
    if (!formData) {
      return null;
    }
    const { options } = formData;
    return options.map(option => {
      const { name, label, type } = option;
      const formComponent = generateFormControlExample(type, defaultValue);
      return (
        <Form.Item name={name} label={label || '未知参数'} key={name}>
          {formComponent}
        </Form.Item>
      );
    });
  }

  return (
    <div className="form-content">
      <Tabs>
        <TabPane tab="控件属性" key="1">
          <Form form={form} layout="vertical" onValuesChange={formValueChange}>
            {renderFormItem()}
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FormContent;
