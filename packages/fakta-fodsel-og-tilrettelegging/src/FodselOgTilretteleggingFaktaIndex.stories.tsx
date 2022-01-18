import React from 'react';
import { action } from '@storybook/addon-actions';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ArbeidsforholdFodselOgTilrettelegging, Arbeidsforhold, Behandling, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { tilrettelegging as tilretteleggingPermisjon, inntektArbeidYtelse as iayPermisjon } from '../testdata/tilretteleggningMedPermisjon';

import FodselOgTilretteleggingFaktaIndex from './FodselOgTilretteleggingFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const svangerskapspengerTilretteleggingForArbeidsgiver = {
  termindato: '2020-01-13',
  saksbehandlet: false,
  arbeidsforholdListe: [{
    tilretteleggingId: 1315951,
    tilretteleggingBehovFom: '2019-09-16',
    tilretteleggingDatoer: [{
      fom: '2019-09-16',
      type: {
        kode: tilretteleggingType.DELVIS_TILRETTELEGGING,
        kodeverk: '',
      },
      stillingsprosent: 30,
    }],
    velferdspermisjoner: [
      {
        permisjonFom: '2019-09-10',
        permisjonTom: null,
        permisjonsprosent: 50,
        type: { kode: 'VELFERDSPERMISJON', kodeverk: 'PERMISJONSBESKRIVELSE_TYPE' },
      },
    ],
    arbeidsgiverReferanse: '3',
    uttakArbeidType: {
      kode: 'FRILANS',
      kodeverk: 'UTTAK_ARBEID_TYPE',
    },
    internArbeidsforholdReferanse: 'c5534-6e55-4112-9645-fe52ee4950c2',
    eksternArbeidsforholdReferanse: 'T555864629R5021761S1103L5555',
    skalBrukes: true,
  }, {
    tilretteleggingId: 1315919,
    tilretteleggingBehovFom: '2019-09-16',
    tilretteleggingDatoer: [{
      fom: '2019-09-16',
      type: {
        kode: tilretteleggingType.INGEN_TILRETTELEGGING,
        kodeverk: '',
      },
    }],
    velferdspermisjoner: [],
    arbeidsgiverReferanse: '3',
    uttakArbeidType: {
      kode: 'FRILANS',
      kodeverk: 'UTTAK_ARBEID_TYPE',
    },
    internArbeidsforholdReferanse: '5gb912b7-4187-45a0-8c44-02322887d0ad',
    eksternArbeidsforholdReferanse: 'H555864629R5021761S1100L5555',
    skalBrukes: true,
  }] as ArbeidsforholdFodselOgTilrettelegging[],
};

const svangerskapspengerTilretteleggingForFrilanser = {
  termindato: '2020-02-27',
  saksbehandlet: false,
  arbeidsforholdListe: [{
    tilretteleggingId: 1008653,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: {
        kode: tilretteleggingType.INGEN_TILRETTELEGGING,
        kodeverk: '',
      },
    }],
    arbeidsgiverReferanse: '1',
    skalBrukes: true,
    velferdspermisjoner: [],
  }, {
    tilretteleggingId: 1008654,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: {
        kode: tilretteleggingType.INGEN_TILRETTELEGGING,
        kodeverk: '',
      },
    }],
    arbeidsgiverReferanse: '2',
    uttakArbeidType: {
      kode: 'ORDINÆRT_ARBEID',
      kodeverk: 'UTTAK_ARBEID_TYPE',
    },
    skalBrukes: true,
    velferdspermisjoner: [],
  }] as ArbeidsforholdFodselOgTilrettelegging[],
};

const inntektArbeidYtelse = {
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

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-fodsel-og-tilrettelegging',
  component: FodselOgTilretteleggingFaktaIndex,
};

export const tilretteleggingMedVelferdspermisjon = () => (
  <FodselOgTilretteleggingFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    svangerskapspengerTilrettelegging={tilretteleggingPermisjon}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.FODSELTILRETTELEGGING,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    inntektArbeidYtelse={iayPermisjon}
    erOverstyrer={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visAksjonspunktForFødselstilretteleggingForArbeidsgiver = () => (
  <FodselOgTilretteleggingFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    svangerskapspengerTilrettelegging={svangerskapspengerTilretteleggingForArbeidsgiver}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.FODSELTILRETTELEGGING,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    inntektArbeidYtelse={inntektArbeidYtelse}
    erOverstyrer={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visAksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende = () => (
  <FodselOgTilretteleggingFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    svangerskapspengerTilrettelegging={svangerskapspengerTilretteleggingForFrilanser}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.FODSELTILRETTELEGGING,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    inntektArbeidYtelse={inntektArbeidYtelse}
    erOverstyrer={false}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visInfoDialogForVarIkkeAnsattDaBehovetForTilretteleggingOppstod = () => {
  const inntektArbeidYtelseForAnnenArbeidsgiver = {
    arbeidsforhold: [{
      ...(inntektArbeidYtelse.arbeidsforhold ? inntektArbeidYtelse.arbeidsforhold[0] : {}),
      id: '1111111-null',
      arbeidsgiverReferanse: '1111111',
    }] as Arbeidsforhold[],
    skalKunneLeggeTilNyeArbeidsforhold: false,
  } as InntektArbeidYtelse;

  return (
    <FodselOgTilretteleggingFaktaIndex
      {...standardFaktaProps}
      behandling={behandling}
      svangerskapspengerTilrettelegging={svangerskapspengerTilretteleggingForArbeidsgiver}
      aksjonspunkter={[{
        definisjon: {
          kode: aksjonspunktCodes.FODSELTILRETTELEGGING,
          kodeverk: '',
        },
        status: {
          kode: aksjonspunktStatus.OPPRETTET,
          kodeverk: '',
        },
        begrunnelse: undefined,
        kanLoses: true,
        erAktivt: true,
      }]}
      inntektArbeidYtelse={inntektArbeidYtelseForAnnenArbeidsgiver}
      erOverstyrer={false}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      alleKodeverk={alleKodeverk as any}
    />
  );
};
