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
  912745082: {
    referanse: '912745082',
    identifikator: '912745082',
    navn: 'VI-BO.NO AS',
    fødselsdato: null,
    erPrivatPerson: false,
  },
  988421472: {
    referanse: '988421472',
    identifikator: '988421472',
    navn: 'TEMP TEAM AS AVD TRONDHEIM',
    fødselsdato: null,
    erPrivatPerson: false,
  },
  918715088: {
    referanse: '918715088',
    identifikator: '918715088',
    navn: 'BRITANNIA HOTEL AS',
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
    termindato: '2022-10-07',
    fødselsdato: null,
    arbeidsforholdListe: [
      {
        tilretteleggingId: 1480603,
        tilretteleggingBehovFom: '2022-08-01',
        tilretteleggingDatoer: [
          {
            fom: '2022-08-01',
            type: 'DELVIS_TILRETTELEGGING',
            stillingsprosent: 50,
            overstyrtUtbetalingsgrad: 50,
          },
          {
            fom: '2022-08-04',
            type: 'INGEN_TILRETTELEGGING',
            stillingsprosent: null,
            overstyrtUtbetalingsgrad: null,
          },
        ],
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        arbeidsgiverReferanse: '988421472',
        opplysningerOmRisiko: null,
        opplysningerOmTilrettelegging: null,
        kopiertFraTidligereBehandling: false,
        mottattTidspunkt: '2022-08-19T07:52:47.298437',
        internArbeidsforholdReferanse: null,
        eksternArbeidsforholdReferanse: null,
        skalBrukes: true,
        kanTilrettelegges: true,
        velferdspermisjoner: [],
        begrunnelse: null,
      },
      {
        tilretteleggingId: 1480604,
        tilretteleggingBehovFom: '2022-08-01',
        tilretteleggingDatoer: [
          {
            fom: '2022-08-01',
            type: 'INGEN_TILRETTELEGGING',
            stillingsprosent: null,
            overstyrtUtbetalingsgrad: null,
          },
        ],
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        arbeidsgiverReferanse: '912745082',
        opplysningerOmRisiko: null,
        opplysningerOmTilrettelegging: null,
        kopiertFraTidligereBehandling: false,
        mottattTidspunkt: '2022-08-19T07:52:47.298437',
        internArbeidsforholdReferanse: null,
        eksternArbeidsforholdReferanse: null,
        skalBrukes: true,
        kanTilrettelegges: true,
        velferdspermisjoner: [],
        begrunnelse: null,
      },
    ],
    saksbehandlet: true,
  },
  inntektArbeidYtelse: {
    inntektsmeldinger: [
      {
        arbeidsgiverReferanse: '912745082',
        arbeidsgiver: 'VI-BO.NO AS',
        arbeidsgiverOrgnr: '912745082',
        arbeidsgiverStartdato: '2022-08-01',
        innsendingstidspunkt: '2022-09-23T09:17:57',
        utsettelsePerioder: [],
        graderingPerioder: [],
        getRefusjonBeløpPerMnd: null,
      },
      {
        arbeidsgiverReferanse: '988421472',
        arbeidsgiver: 'TEMP TEAM AS AVD TRONDHEIM',
        arbeidsgiverOrgnr: '988421472',
        arbeidsgiverStartdato: '2022-08-01',
        innsendingstidspunkt: '2022-09-20T15:35:42',
        utsettelsePerioder: [],
        graderingPerioder: [],
        getRefusjonBeløpPerMnd: {
          verdi: 0.00,
          indexKey: '0.00',
        },
      },
    ],
    relatertTilgrensendeYtelserForSoker: [
      {
        relatertYtelseType: 'FORELDREPENGER',
        tilgrensendeYtelserListe: [
          {
            relatertYtelseType: 'FORELDREPENGER',
            periodeFraDato: '2022-09-16',
            periodeTilDato: '2023-05-11',
            status: 'LØPENDE',
            saksNummer: '152170210',
          },
        ],
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
            periodeFraDato: '2021-11-17',
            periodeTilDato: '2021-11-18',
            status: 'ÅPEN',
            saksNummer: null,
          },
          {
            relatertYtelseType: 'SYKEPENGER',
            periodeFraDato: '2020-11-11',
            periodeTilDato: '2021-11-12',
            status: 'AVSLUTTET',
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
        tilgrensendeYtelserListe: [
          {
            relatertYtelseType: 'ARBEIDSAVKLARINGSPENGER',
            periodeFraDato: '2022-05-01',
            periodeTilDato: '2022-05-01',
            status: 'AVSLUTTET',
            saksNummer: '2021455546',
          },
          {
            relatertYtelseType: 'ARBEIDSAVKLARINGSPENGER',
            periodeFraDato: '2022-03-04',
            periodeTilDato: '2022-04-30',
            status: 'AVSLUTTET',
            saksNummer: '2021455546',
          },
          {
            relatertYtelseType: 'ARBEIDSAVKLARINGSPENGER',
            periodeFraDato: '2021-11-15',
            periodeTilDato: '2022-03-03',
            status: 'AVSLUTTET',
            saksNummer: '2021455546',
          },
        ],
      },
      {
        relatertYtelseType: 'SVANGERSKAPSPENGER',
        tilgrensendeYtelserListe: [
          {
            relatertYtelseType: 'SVANGERSKAPSPENGER',
            periodeFraDato: '2022-09-27',
            periodeTilDato: '2022-09-27',
            status: 'UBEH',
            saksNummer: '152163504',
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
        id: '912745082-null',
        arbeidsgiverReferanse: '912745082',
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        stillingsprosent: 40.00,
        fomDato: '2022-03-25',
        tomDato: null,
      },
      {
        id: '988421472-null',
        arbeidsgiverReferanse: '988421472',
        arbeidsforholdId: null,
        eksternArbeidsforholdId: null,
        stillingsprosent: 0.00,
        fomDato: '2022-05-02',
        tomDato: null,
      },
    ],
  },
  erOverstyrer: true,
};
