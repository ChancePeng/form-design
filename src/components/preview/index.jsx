import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import {ControlMap} from '@design';

import 'preview/index.scss';
import loadable from 'utils/loadable';

export default function Preview(props) {
  const { visible = false, onClose, pageData = [] } = props;
  function renderPageData() {
    return pageData.map(item => {
      const { type, key, Options } = item;
      const importDir = ControlMap[type];
      const component = () => import(`@design/components/${importDir}/pc`);
      const Component = loadable(component);
      return <Component key={key} isDesign={false} {...Options} />
    });
  }
  return (
    <div className={`preview ${visible && 'show'}`}>
      <div className="close-btn" onClick={onClose}><CloseOutlined /></div>
      <div className="render-content">
        {renderPageData()}
      </div>
    </div>
  );
}
