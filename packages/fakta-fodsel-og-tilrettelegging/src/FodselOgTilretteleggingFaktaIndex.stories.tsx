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
  342352362: {
    referanse: '342352362',
    identifikator: '342352362',
    navn: 'Lagt til av saksbehandler',
    fødselsdato: null,
    erPrivatPerson: false,
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

export const Test = Template.bind({});
Test.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: {
    termindato: '2023-01-04',
    fødselsdato: null,
    arbeidsforholdListe: [
      {
        tilretteleggingId: 1499602,
        tilretteleggingBehovFom: '2022-08-17',
        tilretteleggingDatoer: [
          {
            fom: '2022-08-17',
            type: 'DELVIS_TILRETTELEGGING',
            stillingsprosent: 45,
            overstyrtUtbetalingsgrad: null,
          },
        ],
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        arbeidsgiverReferanse: '974706490',
        opplysningerOmRisiko: null,
        opplysningerOmTilrettelegging: null,
        kopiertFraTidligereBehandling: false,
        mottattTidspunkt: '2022-10-23T19:57:42.20509',
        internArbeidsforholdReferanse: '2157ba5a-77f8-41cc-9930-8f2ebd19d0df',
        eksternArbeidsforholdReferanse: '309100000000197307007',
        skalBrukes: true,
        kanTilrettelegges: true,
        velferdspermisjoner: [
          {
            permisjonFom: '2022-01-07',
            permisjonTom: '2022-01-07',
            permisjonsprosent: 100.00,
            type: 'VELFERDSPERMISJON',
            erGyldig: true,
          },
        ],
        begrunnelse: null,
      },
    ],
    saksbehandlet: true,
  },
  inntektArbeidYtelse: {
    inntektsmeldinger: [
      {
        arbeidsgiverReferanse: '974706490',
        arbeidsgiver: 'AHUS NORDBYHAGEN SOMATIKK',
        arbeidsgiverOrgnr: '974706490',
        arbeidsgiverStartdato: '2022-08-17',
        innsendingstidspunkt: '2022-11-07T09:56:13',
        utsettelsePerioder: [],
        graderingPerioder: [],
        getRefusjonBeløpPerMnd: {
          verdi: 55413.00,
          indexKey: '55413.00',
        },
      },
    ],
    relatertTilgrensendeYtelserForSoker: [
      {
        relatertYtelseType: 'FORELDREPENGER',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'ENGANGSSTØNAD',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'SYKEPENGER',
        tilgrensendeYtelserListe: [
          {
            relatertYtelseType: 'SYKEPENGER',
            periodeFraDato: '2022-08-18',
            periodeTilDato: '2022-10-18',
            status: 'LØPENDE',
            saksNummer: null,
          },
          {
            relatertYtelseType: 'SYKEPENGER',
            periodeFraDato: '2022-02-23',
            periodeTilDato: '2022-03-04',
            status: 'ÅPEN',
            saksNummer: null,
          },
          {
            relatertYtelseType: 'SYKEPENGER',
            periodeFraDato: '2021-08-20',
            periodeTilDato: '2021-08-27',
            status: 'ÅPEN',
            saksNummer: null,
          },
        ],
      },
      {
        relatertYtelseType: 'DAGPENGER',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'ARBEIDSAVKLARINGSPENGER',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'SVANGERSKAPSPENGER',
        tilgrensendeYtelserListe: [
          {
            relatertYtelseType: 'SVANGERSKAPSPENGER',
            periodeFraDato: '2022-11-08',
            periodeTilDato: '2022-11-08',
            status: 'UBEH',
            saksNummer: '152187100',
          },
        ],
      },
      {
        relatertYtelseType: 'OMP',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'OLP',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'PSB',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'PPN',
        tilgrensendeYtelserListe: [],
      },
      {
        relatertYtelseType: 'FRISINN',
        tilgrensendeYtelserListe: [],
      },
    ],
    relatertTilgrensendeYtelserForAnnenForelder: [],
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [],
    arbeidsforhold: [
      {
        id: '974706490-2157ba5a-77f8-41cc-9930-8f2ebd19d0df',
        arbeidsgiverReferanse: '974706490',
        arbeidsforholdId: '2157ba5a-77f8-41cc-9930-8f2ebd19d0df',
        eksternArbeidsforholdId: '309100000000197307007',
        stillingsprosent: 90.00,
        fomDato: '2016-12-01',
        tomDato: null,
      },
    ],
  },
  erOverstyrer: false,
};
