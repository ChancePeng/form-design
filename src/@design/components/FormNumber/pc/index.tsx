import { ControlOption } from '@magpie_cloud';
import * as React from 'react';
import { InputNumber } from 'antd';

const FormNumber:React.FC<ControlOption> = (props) => {
  const { DisplayName } = props;
  return (
    <div>
      <div className="display-name">{DisplayName}</div>
      <InputNumber />
    </div>
  );
};

export default FormNumber;
