import React from 'react';

import { useState } from '@storybook/addons';
import HeaderWithErrorPanel from './HeaderWithErrorPanel';

export default {
  title: 'sak/sak-dekoratør',
  component: HeaderWithErrorPanel,
};

export const visDekoratorUtenFeilmeldinger = () => (
  <div style={{ marginLeft: '-56px' }}>
    <HeaderWithErrorPanel
      navAnsattName="Espen Utvikler"
      removeErrorMessage={() => undefined}
      setSiteHeight={() => undefined}
      hideErrorMessages={false}
      queryStrings={{}}
    />
  </div>
);

export const visDekoratorMedFeilmeldinger = () => {
  const [errorMessages, removeErrorMessages] = useState([{ message: 'Feilmelding 1', type: '' }, { message: 'Feilmelding 2', type: '' }]);
  return (
    <div style={{ marginLeft: '-56px' }}>
      <HeaderWithErrorPanel
        navAnsattName="Espen Utvikler"
        removeErrorMessage={() => removeErrorMessages([])}
        setSiteHeight={() => undefined}
        errorMessages={errorMessages}
        hideErrorMessages={false}
        queryStrings={{}}
      />
    </div>
  );
};
