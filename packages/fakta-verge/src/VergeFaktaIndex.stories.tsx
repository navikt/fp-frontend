import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Behandling } from '@navikt/fp-types';

import VergeFaktaIndex from './VergeFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const aksjonspunkter = [
  {
    definisjon: AksjonspunktKode.AVKLAR_VERGE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  },
];

const verge = {};

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
};

const Template: StoryFn<{
  behandling: Behandling;
  submitCallback: (aksjonspunktData: any) => Promise<void>;
}> = ({ behandling, submitCallback }) => (
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
      [AksjonspunktKode.AVKLAR_VERGE]: merknaderFraBeslutter,
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
