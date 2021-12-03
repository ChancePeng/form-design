import { ControlOption } from '@magpie_cloud';
import * as React from 'react';
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';

const FormDateTime:React.FC<ControlOption> = (props) => {
  const { DisplayName } = props;
  return (
    <div>
      <div className="display-name">{DisplayName}</div>
      <DatePicker locale={locale} />
    </div>
  );
};

export default FormDateTime;
