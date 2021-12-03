import React from 'react';
import { CloseSquareOutlined, EyeOutlined, FileDoneOutlined } from '@ant-design/icons';

import 'design-operate/index.scss';

export default function DesignOperate(props) {
  const { onSave, onPreview } = props;
  return (
    <div className="design-operate">
      <span><CloseSquareOutlined />关闭</span>
      <span onClick={onSave}><FileDoneOutlined />保存</span>
      <span onClick={onPreview}><EyeOutlined />预览</span>
    </div>
  );
}
