import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ArbeidsforholdFodselOgTilrettelegging, Behandling, InntektArbeidYtelse, FodselOgTilrettelegging,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { tilrettelegging as tilretteleggingPermisjon, inntektArbeidYtelse as iayPermisjon } from '../testdata/tilretteleggningMedPermisjon';

import FodselOgTilretteleggingFaktaIndex from './FodselOgTilretteleggingFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const svangerskapspengerTilretteleggingForFrilanser = {
  termindato: '2020-02-27',
  saksbehandlet: false,
  arbeidsforholdListe: [{
    tilretteleggingId: 1008653,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: tilretteleggingType.INGEN_TILRETTELEGGING,
    }],
    arbeidsgiverReferanse: '1',
    skalBrukes: true,
    velferdspermisjoner: [],
  }, {
    tilretteleggingId: 1008654,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: tilretteleggingType.INGEN_TILRETTELEGGING,
    }],
    arbeidsgiverReferanse: '2',
    uttakArbeidType: 'ORDINÆRT_ARBEID',
    skalBrukes: true,
    velferdspermisjoner: [],
  }] as ArbeidsforholdFodselOgTilrettelegging[],
};

const defaultInntektArbeidYtelse = {
  arbeidsforhold: [{
    id: '555864629-null',
    arbeidsgiverReferanse: '555864629',
    kilde: {
      navn: 'AA-Registeret',
    },
    stillingsprosent: 100.00,
    skjaeringstidspunkt: '2020-01-30',
    mottattDatoInntektsmelding: '2020-01-28',
    fomDato: '2016-01-28',
    ikkeRegistrertIAaRegister: false,
    tilVurdering: false,
    vurderOmSkalErstattes: false,
    brukArbeidsforholdet: true,
    fortsettBehandlingUtenInntektsmelding: false,
    erNyttArbeidsforhold: false,
    erEndret: false,
    brukMedJustertPeriode: false,
    lagtTilAvSaksbehandler: false,
    basertPaInntektsmelding: false,
    permisjoner: [],
    kanOppretteNyttArbforFraIM: false,
  }],
  skalKunneLeggeTilNyeArbeidsforhold: false,
} as InntektArbeidYtelse;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'Frilanser, samlet aktivitet',
  },
  2: {
    erPrivatPerson: true,
    identifikator: '973861779',
    navn: 'Selvstendig næringsdrivende',
  },
  3: {
    erPrivatPerson: false,
    identifikator: '973861779',
    navn: 'Test',
  },
  555864629: {
    erPrivatPerson: false,
    identifikator: '555864629',
    navn: 'WWW.EIENDOMSDRIFT.CC SA',
  },
  999999999: {
    erPrivatPerson: false,
    identifikator: '999999999',
    navn: 'Arbeidsgiveren AS',
  },
  1111111: {
    erPrivatPerson: false,
    identifikator: '1111111',
    navn: 'STATOIL',
  },
};

export default {
  title: 'fakta/fakta-fodsel-og-tilrettelegging',
  component: FodselOgTilretteleggingFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  inntektArbeidYtelse: InntektArbeidYtelse;
  erOverstyrer?: boolean;
}> = ({
  aksjonspunkter,
  submitCallback,
  svangerskapspengerTilrettelegging,
  inntektArbeidYtelse,
  erOverstyrer = false,
}) => (
  <FodselOgTilretteleggingFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    behandling={behandling}
    svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
    aksjonspunkter={aksjonspunkter}
    inntektArbeidYtelse={inntektArbeidYtelse}
    erOverstyrer={erOverstyrer}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
  />
);

export const TilretteleggingMedVelferdspermisjon = Template.bind({});
TilretteleggingMedVelferdspermisjon.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: tilretteleggingPermisjon,
  inntektArbeidYtelse: iayPermisjon,
};

export const AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende = Template.bind({});
AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: svangerskapspengerTilretteleggingForFrilanser,
  inntektArbeidYtelse: defaultInntektArbeidYtelse,
};

export const ErOverstyrer = Template.bind({});
ErOverstyrer.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: tilretteleggingPermisjon,
  inntektArbeidYtelse: iayPermisjon,
  erOverstyrer: true,
};
