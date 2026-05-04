import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagArbeidsgiver,
  lagPrivatArbeidsgiver,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import {
  type ArbeidOgInntektsmelding,
  type ArbeidsgiverOpplysningerPerId,
  type SvpArbeidsforholdDto,
  type SvpTilrettelegging,
} from '@navikt/fp-types';

import { TilretteleggingFaktaIndex } from './TilretteleggingFaktaIndex';

const TILRETTELEGGING_PERMISJON: SvpTilrettelegging = {
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
          kilde: 'SØKNAD',
          stillingsprosent: 50,
        },
        {
          fom: '2020-08-15',
          type: 'HEL_TILRETTELEGGING',
          mottattDato: '2020-02-20',
          kilde: 'SØKNAD',
        },
      ],
      eksternArbeidsforholdReferanse: '23422323',
      arbeidsgiverReferanse: '999999999',
      uttakArbeidType: 'FRILANS',
      skalBrukes: true,
      kanTilrettelegges: true,
      velferdspermisjoner: [
        {
          permisjonFom: '2020-02-17',
          permisjonTom: '2020-07-12',
          permisjonsprosent: 50,
          type: 'VELFERDSPERMISJON',
        },
        {
          permisjonFom: '2019-08-06',
          permisjonTom: '2019-08-06',
          permisjonsprosent: 50,
          type: 'VELFERDSPERMISJON',
        },
        {
          permisjonFom: '2019-10-03',
          permisjonTom: '2019-10-03',
          permisjonsprosent: 50,
          type: 'VELFERDSPERMISJON',
        },
      ],
      avklarteOppholdPerioder: [],
      stillingsprosentStartTilrettelegging: 100,
      skalVurdereSplittAvArbeidsforholdet: false,
    },
  ],
  saksbehandlet: true,
};

const TILRETTELEGGING_MED_100_PROSENT_PERMISJON: SvpTilrettelegging = {
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
          kilde: 'SØKNAD',
          stillingsprosent: 50,
        },
      ],
      eksternArbeidsforholdReferanse: '23422323',
      arbeidsgiverReferanse: '999999999',
      uttakArbeidType: 'FRILANS',
      skalBrukes: true,
      kanTilrettelegges: true,
      velferdspermisjoner: [
        {
          permisjonFom: '2020-02-17',
          permisjonTom: '2020-07-12',
          permisjonsprosent: 100,
          type: 'VELFERDSPERMISJON',
        },
      ],
      avklarteOppholdPerioder: [],
      stillingsprosentStartTilrettelegging: 100,
      skalVurdereSplittAvArbeidsforholdet: false,
    },
    {
      tilretteleggingId: 1008654,
      tilretteleggingBehovFom: '2019-10-01',
      kanTilrettelegges: false,
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: 'INGEN_TILRETTELEGGING',
          kilde: 'SØKNAD',
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
      skalVurdereSplittAvArbeidsforholdet: false,
    },
  ],
  saksbehandlet: true,
};

const SVANGERSKAPSPENGER_TIL_RETTELEGGING_FOR_FRILANSER: SvpTilrettelegging = {
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
          type: 'INGEN_TILRETTELEGGING',
          kilde: 'SØKNAD',
          mottattDato: '2020-02-20',
        },
      ],
      arbeidsgiverReferanse: '1',
      uttakArbeidType: 'ANNET',
      skalBrukes: true,
      velferdspermisjoner: [],
      avklarteOppholdPerioder: [],
      eksternArbeidsforholdReferanse: '23422323',
      stillingsprosentStartTilrettelegging: 100,
      skalVurdereSplittAvArbeidsforholdet: false,
    },
    {
      tilretteleggingId: 1008654,
      tilretteleggingBehovFom: '2019-10-01',
      kanTilrettelegges: false,
      tilretteleggingDatoer: [
        {
          fom: '2019-10-01',
          type: 'INGEN_TILRETTELEGGING',
          kilde: 'SØKNAD',
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
      skalVurdereSplittAvArbeidsforholdet: false,
    },
  ] satisfies SvpArbeidsforholdDto[],
};

const DEFAULT_ARBEID_OG_INNTEKT: ArbeidOgInntektsmelding = {
  arbeidsforhold: [
    {
      arbeidsgiverIdent: '1',
      internArbeidsforholdId: '555864629-null',
      fom: '',
      tom: '',
      stillingsprosent: 0,
      permisjoner: [],
    },
  ],
  inntektsmeldinger: [],
  inntekter: [],
  skjæringstidspunkt: '',
};

const SPESIELL_ARBEID_OG_INNTEKT: ArbeidOgInntektsmelding = {
  inntektsmeldinger: [
    {
      arbeidsgiverIdent: '999999999',
      mottattDato: '2020-03-20',
      refusjonPrMnd: 5170,
      inntektPrMnd: 0,
      kontaktpersonNavn: '',
      kontaktpersonNummer: '',
      journalpostId: '',
      dokumentId: '',
      innsendingstidspunkt: '',
      kildeSystem: '',
      aktiveNaturalytelser: [],
      refusjonsperioder: [],
      innsendingsårsak: 'NY',
      tilknyttedeBehandlingIder: [],
    },
  ],
  arbeidsforhold: [
    {
      internArbeidsforholdId: '999999999-null',
      arbeidsgiverIdent: '999999999',
      fom: '2019-04-01',
      stillingsprosent: 100,
      tom: '',
      permisjoner: [],
    },
  ],
  inntekter: [],
  skjæringstidspunkt: '',
};

const ARBEIDSGIVEROPPLYSNINGER_PER_ID: ArbeidsgiverOpplysningerPerId = {
  1: lagArbeidsgiver('1', 'Frilanser, samlet aktivitet'),
  2: lagPrivatArbeidsgiver('2', 'Halvor Hansen', '1990-01-01'),
  3: lagArbeidsgiver('3', 'Test'),
  555864629: lagArbeidsgiver('555864629', 'WWW.EIENDOMSDRIFT.CC SA'),
  999999999: lagArbeidsgiver('999999999', 'Arbeidsgiveren AS'),
  1111111: lagArbeidsgiver('1111111', 'STATOIL'),
  342352362: lagArbeidsgiver('342352362', 'Lagt til av saksbehandler'),
};

const meta = {
  title: 'fakta/fakta-tilrettelegging',
  component: TilretteleggingFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId: ARBEIDSGIVEROPPLYSNINGER_PER_ID,
    isReadOnly: false,
  },
  render: args => <TilretteleggingFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof TilretteleggingFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const defaultAksjonspunkt = lagAksjonspunkt(AksjonspunktKode.VURDER_SVP_TILRETTELEGGING);

export const TilretteleggingMedVelferdspermisjon: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    svangerskapspengerTilrettelegging: TILRETTELEGGING_PERMISJON,
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const TilretteleggingMed100ProsentVelferdspermisjon: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    svangerskapspengerTilrettelegging: TILRETTELEGGING_MED_100_PROSENT_PERMISJON,
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const SokerVarIkkeAnsattDaBehovetForTilretteleggingOppstod: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    svangerskapspengerTilrettelegging: SVANGERSKAPSPENGER_TIL_RETTELEGGING_FOR_FRILANSER,
    arbeidOgInntekt: DEFAULT_ARBEID_OG_INNTEKT,
  },
};

export const HarOpphold: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
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
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
            },
            {
              fom: '2020-10-15',
              type: 'HEL_TILRETTELEGGING',
              kilde: 'SØKNAD',
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
              fom: '2020-09-21',
              tom: '2020-09-24',
              oppholdÅrsak: 'FERIE',
              oppholdKilde: 'TIDLIGERE_VEDTAK',
            },
            {
              fom: '2020-09-25',
              tom: '2020-09-30',
              oppholdÅrsak: 'FERIE',
              oppholdKilde: 'INNTEKTSMELDING',
            },
          ],
          stillingsprosentStartTilrettelegging: 100,
          skalVurdereSplittAvArbeidsforholdet: false,
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const HarFerieOpphold: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    svangerskapspengerTilrettelegging: {
      ...TILRETTELEGGING_PERMISJON,
      arbeidsforholdListe: [
        {
          ...TILRETTELEGGING_PERMISJON.arbeidsforholdListe[0]!,
          avklarteOppholdPerioder: [
            {
              fom: '2020-07-14',
              tom: '2020-07-25',
              oppholdÅrsak: 'FERIE',
              oppholdKilde: 'INNTEKTSMELDING',
            },
          ],
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const ErReadonly: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
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
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
            },
            {
              fom: '2020-10-15',
              type: 'HEL_TILRETTELEGGING',
              kilde: 'SØKNAD',
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
          skalVurdereSplittAvArbeidsforholdet: false,
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
    isReadOnly: true,
  },
};

export const ErRevurdering: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.VURDER_SVP_TILRETTELEGGING, {
        begrunnelse: 'Dette er en begrunnelse',
      }),
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
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
            },
            {
              fom: '2020-10-15',
              type: 'HEL_TILRETTELEGGING',
              kilde: 'SØKNAD',
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
          skalVurdereSplittAvArbeidsforholdet: false,
        },
      ],
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};

export const KanSplittes: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    svangerskapspengerTilrettelegging: {
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
              kilde: 'SØKNAD',
              stillingsprosent: 50,
            },
            {
              fom: '2020-08-15',
              type: 'HEL_TILRETTELEGGING',
              mottattDato: '2020-02-20',
              kilde: 'SØKNAD',
            },
          ],
          arbeidsgiverReferanse: '999999999',
          uttakArbeidType: 'ORDINÆRT_ARBEID',
          skalBrukes: true,
          kanTilrettelegges: true,
          velferdspermisjoner: [
            {
              permisjonFom: '2020-02-17',
              permisjonTom: '2020-07-12',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
            {
              permisjonFom: '2019-08-06',
              permisjonTom: '2019-08-06',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
            {
              permisjonFom: '2019-10-03',
              permisjonTom: '2019-10-03',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
          ],
          avklarteOppholdPerioder: [],
          stillingsprosentStartTilrettelegging: 100,
        },
      ],
      saksbehandlet: true,
    },
    arbeidOgInntekt: SPESIELL_ARBEID_OG_INNTEKT,
  },
};
