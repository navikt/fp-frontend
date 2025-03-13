import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, TilretteleggingType, UttakArbeidType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';
import {
  type ArbeidOgInntektsmelding,
  type ArbeidsforholdFodselOgTilrettelegging,
  type ArbeidsgiverOpplysningerPerId,
  SvpTilretteleggingFomKilde,
} from '@navikt/fp-types';

import { TilretteleggingFaktaIndex } from './TilretteleggingFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const TILRETTELEGGING_PERMISJON = {
  termindato: '2020-11-06',
  arbeidsforholdListe: [
    {
      tilretteleggingId: 1116961,
      tilretteleggingBehovFom: '2020-03-17',
      tilretteleggingDatoer: [
        {
          fom: '2020-03-17',
          type: 'DELVIS_TILRETTELEGGING',
          mottattDato: '2020-02-20',
          kilde: SvpTilretteleggingFomKilde.SØKNAD,
          stillingsprosent: 50,
        },
        {
          fom: '2020-08-15',
          type: 'HEL_TILRETTELEGGING',
          mottattDato: '2020-02-20',
          kilde: SvpTilretteleggingFomKilde.SØKNAD,
        },
      ],
      eksternArbeidsforholdReferanse: '23422323',
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
      stillingsprosentStartTilrettelegging: 100,
    },
  ],
  saksbehandlet: true,
};

const TILRETTELEGGING_MED_100_PROSENT_PERMISJON = {
  termindato: '2020-11-06',
  arbeidsforholdListe: [
    {
      tilretteleggingId: 1116961,
      tilretteleggingBehovFom: '2020-03-17',
      tilretteleggingDatoer: [
        {
          fom: '2020-03-17',
          type: 'DELVIS_TILRETTELEGGING',
          mottattDato: '2020-02-20',
          kilde: SvpTilretteleggingFomKilde.SØKNAD,
          stillingsprosent: 50,
        },
      ],
      eksternArbeidsforholdReferanse: '23422323',
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
          permisjonsprosent: 100.0,
          type: 'VELFERDSPERMISJON',
        },
      ],
      avklarteOppholdPerioder: [],
      stillingsprosentStartTilrettelegging: 100,
    },
    {
      tilretteleggingId: 1008654,
      tilretteleggingBehovFom: '2019-10-01',
      kanTilrettelegges: false,
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: TilretteleggingType.INGEN_TILRETTELEGGING,
          kilde: SvpTilretteleggingFomKilde.SØKNAD,
          mottattDato: '2020-02-20',
        },
      ],
      arbeidsgiverReferanse: '2',
      uttakArbeidType: 'ORDINÆRT_ARBEID',
      skalBrukes: true,
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
      eksternArbeidsforholdReferanse: '23422323',
      stillingsprosentStartTilrettelegging: 100,
    },
  ],
  saksbehandlet: true,
};

const SVANGERSKAPSPENGER_TIL_RETTELEGGING_FOR_FRILANSER = {
  termindato: '2020-02-27',
  saksbehandlet: false,
  arbeidsforholdListe: [
    {
      tilretteleggingId: 1008653,
      tilretteleggingBehovFom: '2019-10-01',
      kanTilrettelegges: false,
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: TilretteleggingType.INGEN_TILRETTELEGGING,
          kilde: SvpTilretteleggingFomKilde.SØKNAD,
          mottattDato: '2020-02-20',
        },
      ],
      arbeidsgiverReferanse: '1',
      uttakArbeidType: UttakArbeidType.ANNET,
      skalBrukes: true,
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
      eksternArbeidsforholdReferanse: '23422323',
      stillingsprosentStartTilrettelegging: 100,
    },
    {
      tilretteleggingId: 1008654,
      tilretteleggingBehovFom: '2019-10-01',
      kanTilrettelegges: false,
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: TilretteleggingType.INGEN_TILRETTELEGGING,
          kilde: SvpTilretteleggingFomKilde.SØKNAD,
          mottattDato: '2020-02-20',
        },
      ],
      arbeidsgiverReferanse: '2',
      uttakArbeidType: 'ORDINÆRT_ARBEID',
      skalBrukes: true,
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
      eksternArbeidsforholdReferanse: '23422323',
      stillingsprosentStartTilrettelegging: 100,
    },
  ] satisfies ArbeidsforholdFodselOgTilrettelegging[],
};

const DEFAULT_ARBEID_OG_INNTEKT = {
  arbeidsforhold: [
    {
      arbeidsgiverIdent: '1',
      internArbeidsforholdId: '555864629-null',
    },
  ],
} as ArbeidOgInntektsmelding;

const SPESIELL_ARBEID_OG_INNTEKT = {
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

const ARBEIDSGIVEROPPLYSNINGER_PER_ID: ArbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    referanse: '973861778',
    navn: 'Frilanser, samlet aktivitet',
  },
  2: {
    erPrivatPerson: true,
    identifikator: '12345678910',
    referanse: '123',
    fødselsdato: '1990-01-01',
    navn: 'Halvor Hansen',
  },
  3: {
    erPrivatPerson: false,
    identifikator: '973861779',
    referanse: '973861779',
    navn: 'Test',
  },
  555864629: {
    erPrivatPerson: false,
    identifikator: '555864629',
    referanse: '555864629',
    navn: 'WWW.EIENDOMSDRIFT.CC SA',
  },
  999999999: {
    erPrivatPerson: false,
    identifikator: '999999999',
    referanse: '999999999',
    navn: 'Arbeidsgiveren AS',
  },
  1111111: {
    erPrivatPerson: false,
    identifikator: '1111111',
    referanse: '1111111',
    navn: 'STATOIL',
  },
  342352362: {
    erPrivatPerson: false,
    identifikator: '342352362',
    referanse: '342352362',
    navn: 'Lagt til av saksbehandler',
  },
};

const meta = {
  title: 'fakta/fakta-tilrettelegging',
  component: TilretteleggingFaktaIndex,
  decorators: [withFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId: ARBEIDSGIVEROPPLYSNINGER_PER_ID,
    submittable: true,
    readonly: false,
  },
  render: args => <TilretteleggingFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof TilretteleggingFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TilretteleggingMedVelferdspermisjon: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FODSELTILRETTELEGGING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    svangerskapspengerTilrettelegging: TILRETTELEGGING_PERMISJON,
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const TilretteleggingMed100ProsentVelferdspermisjon: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FODSELTILRETTELEGGING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    svangerskapspengerTilrettelegging: TILRETTELEGGING_MED_100_PROSENT_PERMISJON,
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const SokerVarIkkeAnsattDaBehovetForTilretteleggingOppstod: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FODSELTILRETTELEGGING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    svangerskapspengerTilrettelegging: SVANGERSKAPSPENGER_TIL_RETTELEGGING_FOR_FRILANSER,
    arbeidOgInntekt: DEFAULT_ARBEID_OG_INNTEKT,
  },
};

export const HarOpphold: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FODSELTILRETTELEGGING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    svangerskapspengerTilrettelegging: {
      ...TILRETTELEGGING_PERMISJON,
      arbeidsforholdListe: [
        {
          tilretteleggingId: 1116961,
          tilretteleggingBehovFom: '2020-03-17',
          tilretteleggingDatoer: [
            {
              fom: '2020-03-17',
              type: 'INGEN_TILRETTELEGGING',
              kilde: SvpTilretteleggingFomKilde.SØKNAD,
              mottattDato: '2020-02-20',
            },
            {
              fom: '2020-10-15',
              type: 'HEL_TILRETTELEGGING',
              kilde: SvpTilretteleggingFomKilde.SØKNAD,
              mottattDato: '2020-02-20',
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
              oppholdKilde: 'REGISTRERT_AV_SAKSBEHANDLER',
            },
            {
              fom: '2020-09-25',
              tom: '2020-09-30',
              oppholdÅrsak: 'FERIE',
              oppholdKilde: 'INNTEKTSMELDING',
            },
          ],
          stillingsprosentStartTilrettelegging: 100,
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const ErReadonly: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FODSELTILRETTELEGGING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    svangerskapspengerTilrettelegging: {
      ...TILRETTELEGGING_PERMISJON,
      arbeidsforholdListe: [
        {
          tilretteleggingId: 1116961,
          tilretteleggingBehovFom: '2020-03-17',
          tilretteleggingDatoer: [
            {
              fom: '2020-03-17',
              type: 'INGEN_TILRETTELEGGING',
              kilde: SvpTilretteleggingFomKilde.SØKNAD,
              mottattDato: '2020-02-20',
            },
            {
              fom: '2020-10-15',
              type: 'HEL_TILRETTELEGGING',
              kilde: SvpTilretteleggingFomKilde.SØKNAD,
              mottattDato: '2020-02-20',
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
              oppholdKilde: 'REGISTRERT_AV_SAKSBEHANDLER',
            },
            {
              fom: '2020-09-25',
              tom: '2020-09-30',
              oppholdÅrsak: 'FERIE',
              oppholdKilde: 'INNTEKTSMELDING',
            },
          ],
          stillingsprosentStartTilrettelegging: 100,
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
    readonly: true,
  },
};

export const ErRevurdering: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.FODSELTILRETTELEGGING,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: true,
      },
    ],
    svangerskapspengerTilrettelegging: {
      ...TILRETTELEGGING_PERMISJON,
      arbeidsforholdListe: [
        {
          tilretteleggingId: 1116961,
          tilretteleggingBehovFom: '2020-03-17',
          tilretteleggingDatoer: [
            {
              fom: '2020-03-17',
              type: 'INGEN_TILRETTELEGGING',
              kilde: SvpTilretteleggingFomKilde.SØKNAD,
              mottattDato: '2020-02-20',
            },
            {
              fom: '2020-10-15',
              type: 'HEL_TILRETTELEGGING',
              kilde: SvpTilretteleggingFomKilde.SØKNAD,
              mottattDato: '2020-02-20',
            },
          ],
          arbeidsgiverReferanse: '999999999',
          uttakArbeidType: 'FRILANS',
          skalBrukes: true,
          kanTilrettelegges: true,
          velferdspermisjoner: [],
          avklarteOppholdPerioder: [],
          stillingsprosentStartTilrettelegging: 100,
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};
