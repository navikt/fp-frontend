import React, { useState } from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import EventType from '@fpsak-frontend/rest-api/src/requestApi/eventType';
import HeaderWithErrorPanel from './HeaderWithErrorPanel';
import { InputErrorMessage } from './feilhandtering/ErrorFormatter';

export default {
  title: 'sak/sak-dekoratør',
  component: HeaderWithErrorPanel,
};

const Template: Story<{
  feilmeldinger?: InputErrorMessage[];
}> = ({
  feilmeldinger,
}) => {
  const [errorMessages, removeErrorMessages] = useState(feilmeldinger);
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

export const UtenFeilmeldinger = Template.bind({});

export const MedFeilmeldinger = Template.bind({});
MedFeilmeldinger.args = {
  feilmeldinger: [{
    feilmelding: 'Feilmelding 1', type: EventType.REQUEST_ERROR,
  }, {
    feilmelding: 'Spesialtegn-test: Høna &amp; egget og &#34;test1&#34; og &#39;test2&#39;', type: EventType.REQUEST_ERROR,
  }],
};

export const MedFeilmeldingDetaljer = Template.bind({});
MedFeilmeldingDetaljer.args = {
  feilmeldinger: [{
    status: 'HALTED', message: 'Feilmelding 1', type: EventType.POLLING_HALTED_OR_DELAYED,
  }],
};
