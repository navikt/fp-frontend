import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { Aksjonspunkt, Behandling, Soknad } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';
import withReduxProvider from '../../decorators/withRedux';

const behandling = {
  id: 1,
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
  behandling: object('behandling', behandling),
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', true),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'prosess/prosess-soknadsfrist',
  component: VurderSoknadsfristForeldrepengerIndex,
  decorators: [withKnobs, withReduxProvider],
};
export const visPanelForSoknadsfrist = () => (
  <VurderSoknadsfristForeldrepengerIndex
    {...standardProsessProps}
    uttakPeriodeGrense={object('uttakPeriodeGrense', uttakPeriodeGrense)}
    soknad={object('soknad', soknad)}
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
