import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { Aksjonspunkt, Behandling, Soknad } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const soknad = {
  mottattDato: '2019-01-01',
} as Soknad;

const uttakPeriodeGrense = {
  mottattDato: '2019-01-01',
  antallDagerLevertForSent: 2,
  soknadsperiodeStart: '2019-01-01',
  soknadsperiodeSlutt: '2019-01-10',
  soknadsfristForForsteUttaksdato: '2019-10-01',
};

export default {
  title: 'prosess/prosess-soknadsfrist',
  component: VurderSoknadsfristForeldrepengerIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
}> = ({
  submitCallback,
}) => (
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
    uttakPeriodeGrense={uttakPeriodeGrense}
    soknad={soknad}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
  />
);

export const PanelForSoknadsfrist = Template.bind({});
PanelForSoknadsfrist.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
