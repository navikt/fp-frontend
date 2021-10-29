import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import VergeFaktaIndex from '@fpsak-frontend/fakta-verge';
import { Behandling } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.AVKLAR_VERGE,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
  kanLoses: true,
  erAktivt: true,
}];

const verge = {};

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
};

const Template: Story<{
  behandling: Behandling,
  submitCallback: (aksjonspunktData: any) => Promise<void>;
}> = ({
  behandling,
  submitCallback,
}) => (
  <VergeFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
    behandling={behandling}
    verge={verge}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_VERGE]: merknaderFraBeslutter,
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  behandling: {
    uuid: '1',
    versjon: 1,
  } as Behandling,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
