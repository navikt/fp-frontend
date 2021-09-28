import React, { ChangeEvent, useState } from 'react';

import Datepicker from './Datepicker';

export default {
  title: 'sharedComponents/Datepicker',
  component: Datepicker,
};

export const Default = () => {
  const [value, setValue] = useState('');
  const setDate = (dato: string | ChangeEvent) => {
    if (typeof dato === 'string') {
      setValue(dato);
    }
  };
  return <Datepicker value={value} onChange={setDate} onBlur={() => undefined} />;
};
