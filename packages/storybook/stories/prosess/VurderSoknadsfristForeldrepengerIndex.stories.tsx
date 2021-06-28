import React from 'react';
import { action } from '@storybook/addon-actions';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { Aksjonspunkt, Behandling, Soknad } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

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

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: true,
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-soknadsfrist',
  component: VurderSoknadsfristForeldrepengerIndex,
};
export const visPanelForSoknadsfrist = () => (
  <VurderSoknadsfristForeldrepengerIndex
    {...standardProsessProps}
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
