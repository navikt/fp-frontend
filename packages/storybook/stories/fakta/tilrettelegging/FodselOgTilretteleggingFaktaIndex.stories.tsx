import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import tilretteleggingType from '@fpsak-frontend/kodeverk/src/tilretteleggingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Arbeidsforhold, Behandling, InntektArbeidYtelse } from '@fpsak-frontend/types';
import FodselOgTilretteleggingFaktaIndex from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging';
import ArbeidsforholdFodselOgTilrettelegging from '@fpsak-frontend/fakta-fodsel-og-tilrettelegging/src/types/arbeidsforholdFodselOgTilretteleggingTsType';
import { tilrettelegging as tilretteleggingPermisjon, inntektArbeidYtelse as iayPermisjon } from './scenario/tilretteleggningMedPermisjon';

import withReduxProvider from '../../../decorators/withRedux';

const behandling = {
  id: 1,
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
    arbeidsgiverNavn: 'WWW.EIENDOMSDRIFT.CC SA',
    arbeidsgiverIdent: '555864629',
    arbeidsgiverIdentVisning: '555864629',
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
      },
    }],
    velferdspermisjoner: [],
    arbeidsgiverNavn: 'WWW.EIENDOMSDRIFT.CC SA',
    arbeidsgiverIdent: '555864629',
    arbeidsgiverIdentVisning: '555864629',
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
      },
    }],
    arbeidsgiverNavn: 'Frilanser, samlet aktivitet',
    skalBrukes: true,
    velferdspermisjoner: [],
  }, {
    tilretteleggingId: 1008654,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: {
        kode: tilretteleggingType.INGEN_TILRETTELEGGING,
      },
    }],
    arbeidsgiverNavn: 'Selvstendig næringsdrivende',
    skalBrukes: true,
  }] as ArbeidsforholdFodselOgTilrettelegging[],
};

const inntektArbeidYtelse = {
  arbeidsforhold: [{
    id: '555864629-null',
    navn: 'WWW.EIENDOMSDRIFT.CC SA',
    arbeidsgiverIdentifikator: '555864629',
    arbeidsgiverIdentifiktorGUI: '555864629',
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

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'fakta/fakta-fodsel-og-tilrettelegging',
  component: FodselOgTilretteleggingFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const tilretteleggingMedVelferdspermisjon = () => (
  <FodselOgTilretteleggingFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    svangerskapspengerTilrettelegging={object('Tilrettelegging', tilretteleggingPermisjon)}
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
  />
);

export const visAksjonspunktForFødselstilretteleggingForArbeidsgiver = () => (
  <FodselOgTilretteleggingFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    svangerskapspengerTilrettelegging={object('Tilrettelegging', svangerskapspengerTilretteleggingForArbeidsgiver)}
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
  />
);

export const visAksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende = () => (
  <FodselOgTilretteleggingFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    svangerskapspengerTilrettelegging={object('Tilrettelegging', svangerskapspengerTilretteleggingForFrilanser)}
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
  />
);

export const visInfoDialogForVarIkkeAnsattDaBehovetForTilretteleggingOppstod = () => {
  const inntektArbeidYtelseForAnnenArbeidsgiver = {
    arbeidsforhold: [{
      ...inntektArbeidYtelse.arbeidsforhold[0],
      id: '1111111-null',
      navn: 'STATOIL',
      arbeidsgiverIdentifikator: '1111111',
      arbeidsgiverIdentifiktorGUI: '1111111',
    }] as Arbeidsforhold[],
    skalKunneLeggeTilNyeArbeidsforhold: false,
  } as InntektArbeidYtelse;

  return (
    <FodselOgTilretteleggingFaktaIndex
      {...standardFaktaProps}
      behandling={behandling}
      svangerskapspengerTilrettelegging={object('Tilrettelegging', svangerskapspengerTilretteleggingForArbeidsgiver)}
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
    />
  );
};
