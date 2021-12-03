import * as React from 'react';
import { Input } from 'antd';
import { ControlOption } from '@magpie_cloud';

const { TextArea: TextAreaBase } = Input;

const TextArea:React.FC<ControlOption> = (props) => {
  const { DisplayName } = props;
  return (
    <div>
      <div className="display-name">{DisplayName}</div>
      <TextAreaBase />
    </div>
  );
};

export default TextArea;
