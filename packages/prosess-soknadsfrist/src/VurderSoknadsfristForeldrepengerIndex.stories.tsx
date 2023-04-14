import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { AksjonspunktCode, aksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Soknad } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import VurderSoknadsfristForeldrepengerIndex from './VurderSoknadsfristForeldrepengerIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const soknad = {
  mottattDato: '2019-01-01',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    dagerOversittetFrist: 2,
    søknadsperiodeStart: '2019-01-01',
    søknadsperiodeSlutt: '2019-01-10',
    utledetSøknadsfrist: '2019-10-01',
  },
} as Soknad;

export default {
  title: 'prosess/prosess-soknadsfrist',
  component: VurderSoknadsfristForeldrepengerIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
}> = ({ submitCallback }) => (
  <VurderSoknadsfristForeldrepengerIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    soknad={soknad}
    aksjonspunkter={
      [
        {
          definisjon: AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER,
          status: aksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
        },
      ] as Aksjonspunkt[]
    }
  />
);

export const PanelForSoknadsfrist = Template.bind({});
PanelForSoknadsfrist.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
