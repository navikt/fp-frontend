import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import arbeidsforholdHandlingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdHandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import stonadskontoType from '@fpsak-frontend/kodeverk/src/stonadskontoType';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import {
  Aksjonspunkt,
  Behandling, BeregningsresultatFp, Fagsak, FamilieHendelse, FamilieHendelseSamling, Personoversikt, Soknad,
} from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const fagsak = {
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
  },
} as Fagsak;

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const familiehendelse = {
  gjeldende: {
    avklartBarn: [{
      fodselsdato: '2019-01-01',
    }],
    omsorgsovertakelseDato: '2019-01-01',
  } as FamilieHendelse,
} as FamilieHendelseSamling;

const personoversikt = {
  bruker: {
    kjønn: {
      kode: navBrukerKjonn.KVINNE,
    },
  },
} as Personoversikt;

const beregningresultat = {
  sokerErMor: true,
  perioder: [{
    andeler: [{
      uttak: {
        stonadskontoType: stonadskontoType.FELLESPERIODE,
      },
      aktivitetStatus: {
        kode: aktivitetStatus.ARBEIDSTAKER,
      },
      arbeidsforholdType: {
        kode: arbeidsforholdHandlingType.NYTT_ARBEIDSFORHOLD,
        kodeverk: kodeverkTyper.ARBEIDSFORHOLD_HANDLING_TYPE,
      },
    }],
    fom: '2019-01-01',
    tom: '2019-01-10',
    dagsats: 1000,
  }],
} as BeregningsresultatFp;

const soknad = {
  mottattDato: '2019-01-01',
  soknadType: {
    kode: soknadType.FODSEL,
  },
  omsorgsovertakelseDato: '2019-01-10',
  fodselsdatoer: {
    1: '2019-01-01',
  } as {[key: number]: string},
  adopsjonFodelsedatoer: {
    1: '2019-01-01',
  } as {[key: number]: string},
  termindato: '2019-02-01',
} as Soknad;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
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
  title: 'prosess/prosess-tilkjent-ytelse',
  component: TilkjentYtelseProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visUtenAksjonspunkt = () => (
  <TilkjentYtelseProsessIndex
    {...standardProsessProps}
    beregningresultat={beregningresultat}
    familiehendelse={familiehendelse}
    personoversikt={object('personoversikt', personoversikt)}
    soknad={soknad}
    fagsak={fagsak}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const visÅpentAksjonspunkt = () => (
  <TilkjentYtelseProsessIndex
    {...standardProsessProps}
    beregningresultat={beregningresultat}
    familiehendelse={familiehendelse}
    personoversikt={object('personoversikt', personoversikt)}
    soknad={soknad}
    fagsak={fagsak}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDER_TILBAKETREKK,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
    }] as Aksjonspunkt[]}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);
