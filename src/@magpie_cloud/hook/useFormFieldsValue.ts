import * as React from 'react';

export const useFormFieldsValue = (value) => {
  const [formFieldsValue, setFormFieldsValue] = React.useState({});
  React.useEffect(() => {
    if (value) {
      setFormFieldsValue({ ...value });
    }
  }, [value]);
  return formFieldsValue;
};
