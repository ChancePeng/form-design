import React from 'react';
import { Switch as SwitchBase } from 'antd';

export function Switch(props) {
  const { value = false, onChange /** record */ } = props;

  // eslint-disable-next-line no-console
  // console.log('record', record);

  function switchOnChange(state) {
    onChange(state);
  }

  return (
    <div>
      <SwitchBase defaultChecked checked={value} onChange={switchOnChange} />
    </div>
  );
}
