import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Soknad } from '@navikt/fp-types';
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

const Template: StoryFn<{
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
          definisjon: AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: undefined,
        },
      ] as Aksjonspunkt[]
    }
    fagsak={{} as Fagsak}
  />
);

export const PanelForSoknadsfrist = Template.bind({});
PanelForSoknadsfrist.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
