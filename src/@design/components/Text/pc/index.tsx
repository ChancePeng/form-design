import * as React from 'react';
import { ControlOption } from '@magpie_cloud';
import { Input, Tooltip } from 'antd';

import '@design/components/Text/pc/index.scss';

const Text:React.FC<ControlOption> = (props) => {
  const { DisplayName = '单行输入', DefaultValue, PlaceHolder } = props;
  if (PlaceHolder && PlaceHolder.trim() !== '') {
    return (
      <div>
        <div className="display-name">{DisplayName}</div>
        <Tooltip placement="top" title={PlaceHolder} color="#47aeda" trigger={['focus']}>
          <Input defaultValue={DefaultValue} />
        </Tooltip>
      </div>
    );
  }
  return (
    <div className="design-system form-input">
      <div className="display-name">{DisplayName}</div>
      <Input defaultValue={DefaultValue} />
    </div>
  );
};

export default Text;
