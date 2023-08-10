import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import { aksjonspunktStatus, AksjonspunktCode, tilretteleggingType } from '@navikt/fp-kodeverk';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  Behandling,
  FodselOgTilrettelegging,
  ArbeidOgInntektsmelding,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import TilretteleggingFaktaIndex from './TilretteleggingFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const tilretteleggingPermisjon = {
  termindato: '2020-11-06',
  arbeidsforholdListe: [
    {
      tilretteleggingId: 1116961,
      tilretteleggingBehovFom: '2020-03-17',
      tilretteleggingDatoer: [
        {
          fom: '2020-03-17',
          tom: '2020-05-20',
          type: 'INGEN_TILRETTELEGGING',
          mottattDato: '2020-05-20',
        },
        {
          fom: '2020-10-15',
          tom: '2020-10-16',
          type: 'HEL_TILRETTELEGGING',
          mottattDato: '2020-05-20',
        },
      ],
      arbeidsgiverReferanse: '999999999',
      uttakArbeidType: 'FRILANS',
      kopiertFraTidligereBehandling: true,
      mottattTidspunkt: '2020-03-11T16:21:48.532298',
      skalBrukes: true,
      kanTilrettelegges: true,
      velferdspermisjoner: [
        {
          permisjonFom: '2020-02-17',
          permisjonTom: '2020-07-12',
          permisjonsprosent: 50.0,
          type: 'VELFERDSPERMISJON',
        },
        {
          permisjonFom: '2019-08-06',
          permisjonTom: '2019-08-06',
          permisjonsprosent: 50.0,
          type: 'VELFERDSPERMISJON',
        },
        {
          permisjonFom: '2019-10-03',
          permisjonTom: '2019-10-03',
          permisjonsprosent: 50.0,
          type: 'VELFERDSPERMISJON',
        },
      ],
      avklarteOppholdPerioder: [],
    },
  ],
  saksbehandlet: true,
};

const svangerskapspengerTilretteleggingForFrilanser = {
  termindato: '2020-02-27',
  saksbehandlet: false,
  // @ts-ignore fixme
  arbeidsforholdListe: [
    {
      tilretteleggingId: 1008653,
      tilretteleggingBehovFom: '2019-10-01',
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: tilretteleggingType.INGEN_TILRETTELEGGING,
        },
      ],
      arbeidsgiverReferanse: '1',
      skalBrukes: undefined,
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
    },
    {
      tilretteleggingId: 1008654,
      tilretteleggingBehovFom: '2019-10-01',
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: tilretteleggingType.INGEN_TILRETTELEGGING,
        },
      ],
      arbeidsgiverReferanse: '2',
      uttakArbeidType: 'ORDINÆRT_ARBEID',
      skalBrukes: undefined,
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
    },
  ] as ArbeidsforholdFodselOgTilrettelegging[],
};

const defaultArbeidOgInntekt = {
  arbeidsforhold: [
    {
      arbeidsgiverIdent: '555864629',
      internArbeidsforholdId: '555864629-null',
    },
  ],
} as ArbeidOgInntektsmelding;

const spesiellArbeidOgInntekt = {
  inntektsmeldinger: [
    {
      arbeidsgiverIdent: '999999999',
      motattDato: '2020-03-20',
      refusjonPrMnd: 5170.0,
    },
  ],
  arbeidsforhold: [
    {
      internArbeidsforholdId: '999999999-null',
      arbeidsgiverIdent: '999999999',
      fom: '2019-04-01',
      stillingsprosent: 100.0,
    },
  ],
} as ArbeidOgInntektsmelding;

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
  title: 'fakta/fakta-tilrettelegging',
  component: TilretteleggingFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  erOverstyrer?: boolean;
}> = ({ aksjonspunkter, submitCallback, svangerskapspengerTilrettelegging, arbeidOgInntekt, erOverstyrer = false }) => (
  <TilretteleggingFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    behandling={behandling}
    svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
    aksjonspunkter={aksjonspunkter}
    erOverstyrer={erOverstyrer}
    // @ts-ignore fixme
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
    arbeidOgInntekt={arbeidOgInntekt}
  />
);

export const TilretteleggingMedVelferdspermisjon = Template.bind({});
TilretteleggingMedVelferdspermisjon.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.FODSELTILRETTELEGGING,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  svangerskapspengerTilrettelegging: tilretteleggingPermisjon,
  arbeidOgInntekt: spesiellArbeidOgInntekt,
};

export const SokerVarIkkeAnsattDaBehovetForTilretteleggingOppsto = Template.bind({});
SokerVarIkkeAnsattDaBehovetForTilretteleggingOppsto.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.FODSELTILRETTELEGGING,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  svangerskapspengerTilrettelegging: svangerskapspengerTilretteleggingForFrilanser,
  arbeidOgInntekt: defaultArbeidOgInntekt,
};

export const HarOpphold = Template.bind({});
HarOpphold.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.FODSELTILRETTELEGGING,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  svangerskapspengerTilrettelegging: {
    ...tilretteleggingPermisjon,
    arbeidsforholdListe: [
      {
        tilretteleggingId: 1116961,
        tilretteleggingBehovFom: '2020-03-17',
        tilretteleggingDatoer: [
          {
            fom: '2020-03-17',
            type: 'INGEN_TILRETTELEGGING',
          },
          {
            fom: '2020-10-15',
            type: 'HEL_TILRETTELEGGING',
          },
        ],
        arbeidsgiverReferanse: '999999999',
        uttakArbeidType: 'FRILANS',
        skalBrukes: true,
        kanTilrettelegges: true,
        velferdspermisjoner: [],
        avklarteOppholdPerioder: [
          {
            fom: '2020-09-15',
            tom: '2020-09-20',
            oppholdÅrsak: 'SYKEPENGER',
            forVisning: false,
          },
          {
            fom: '2020-09-25',
            tom: '2020-09-30',
            oppholdÅrsak: 'FERIE',
            forVisning: true,
          },
        ],
      },
    ],
  },
  arbeidOgInntekt: spesiellArbeidOgInntekt,
  erOverstyrer: true,
};
