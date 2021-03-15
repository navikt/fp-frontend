import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import opptjeningAktivitetKlassifisering from '@fpsak-frontend/prosess-vilkar-opptjening/src/kodeverk/opptjeningAktivitetKlassifisering';
import { Aksjonspunkt, Behandling, Opptjening } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';
import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const opptjening = {
  fastsattOpptjening: {
    opptjeningperiode: {
      måneder: 2,
      dager: 3,
    },
    fastsattOpptjeningAktivitetList: [{
      fom: '2018-01-01',
      tom: '2018-04-04',
      klasse: {
        kode: opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT,
      },
    }],
    opptjeningFom: '2018-01-01',
    opptjeningTom: '2018-10-01',
  },
} as Opptjening;

const standardProsessProps = {
  behandling,
  aksjonspunkter: [],
  alleKodeverk: alleKodeverk as any,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'prosess/prosess-vilkar-opptjening',
  component: OpptjeningVilkarProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visPanelForÅpentAksjonspunkt = () => (
  <OpptjeningVilkarProsessIndex
    {...standardProsessProps}
    opptjening={opptjening}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.SVANGERSKAPSVILKARET,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
    status={vilkarUtfallType.IKKE_VURDERT}
    lovReferanse="§§Dette er en lovreferanse"
  />
);

export const visPanelForNårEnIkkeHarAksjonspunkt = () => (
  <OpptjeningVilkarProsessIndex
    {...standardProsessProps}
    opptjening={opptjening}
    status={vilkarUtfallType.IKKE_VURDERT}
    lovReferanse="§§Dette er en lovreferanse"
  />
);
