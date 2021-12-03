import React from 'react';

export function withFieldsValue(PrepComponent, props = {}) {
  const record = { ...props };

  Object.keys(props).forEach(key => {
    if (props[key] === null) {
      delete record[key];
    }
  });

  return <PrepComponent record={record} />;
}
