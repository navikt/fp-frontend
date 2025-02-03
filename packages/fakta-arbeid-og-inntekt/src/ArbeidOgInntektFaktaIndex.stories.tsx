import { ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import { PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, AksjonspunktÅrsak, ArbeidOgInntektsmelding } from '@navikt/fp-types';

import { ArbeidOgInntektFaktaIndex } from './ArbeidOgInntektFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const MANUELT_ORG_NR = '342352362';

const fellesInntektsmeldingFelter = {
  innsendingstidspunkt: '2021-12-06T00:00:00',
  kildeSystem: 'Altinn',
  bortfalteNaturalytelser: [],
  refusjonsperioder: [],
  innsendingsårsak: 'NY' as const,
  behandlingsIdeer: [],
  tilknyttedeBehandlingIder: [],
  aktiveNaturalytelser: [],
};

const meta = {
  title: 'fakta/fakta-arbeid-og-inntekter',
  component: ArbeidOgInntektFaktaIndex,
  decorators: [withFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId: {},
    lagreVurdering: action('onLagreVurdering') as () => Promise<void>,
    registrerArbeidsforhold: action('onRegistrerArbeidsforhold') as () => Promise<void>,
    åpneForNyVurdering: action('onÅpneForNyVurdering'),
    submitCallback: action('onSubmit') as (data: any) => Promise<void>,
    settBehandlingPåVentCallback: action('onSettBehandlingPåVentCallback') as () => Promise<void>,
    alleMerknaderFraBeslutter: {},
    erOverstyrer: false,
  },
  render: args => <ArbeidOgInntektFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof ArbeidOgInntektFaktaIndex>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InnhentInntektsmelding: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            permisjonTom: '2022-12-01',
            type: 'VELFERDSPERMISJON',
          },
        },
      ],
      inntektsmeldinger: [],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 41000,
              fom: '2021-07-01',
              tom: '2021-07-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const InnhentInntektsmeldingDerBehandlingErAvsluttet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.UTFORT,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          stillingsprosent: 100,
          tom: '9999-12-31',
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
          saksbehandlersVurdering:
            ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
          begrunnelse: 'Vil innehente inntektsmelding fordi...',
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    } as ArbeidOgInntektsmelding,
    isReadOnly: true,
  },
};

export const AvklarManglendeArbeidsforhold: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 30000,
          refusjonPrMnd: undefined,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          journalpostId: '1',
          dokumentId: '2',
          motattDato: '2021-12-06',
          årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.UTFORT,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2021-10-06',
          tom: '2021-12-12',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: undefined,
          journalpostId: '1',
          dokumentId: '2',
          årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
    isReadOnly: true,
  },
};

export const AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.UTFORT,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2021-10-06',
          tom: '2021-12-12',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: undefined,
          journalpostId: '1',
          dokumentId: '2',
          årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
    isReadOnly: false,
    erOverstyrer: true,
  },
};

export const IngenAksjonspunktMenTilbakehoppMuligForOverstyrer: Story = {
  args: {
    aksjonspunkterForPanel: [],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2021-10-06',
          tom: '2021-12-12',
          stillingsprosent: 100,
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: undefined,
          journalpostId: '1',
          dokumentId: '2',
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
    isReadOnly: false,
    erOverstyrer: true,
  },
};

export const SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer: Story =
  {
    args: {
      aksjonspunkterForPanel: [
        {
          definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
          status: AksjonspunktStatus.OPPRETTET,
        } as Aksjonspunkt,
      ],
      arbeidsgiverOpplysningerPerId: {},
      arbeidOgInntekt: {
        arbeidsforhold: [],
        inntektsmeldinger: [],
        inntekter: [],
        skjæringstidspunkt: '2021-11-10',
      },
      erOverstyrer: true,
    },
  };

export const SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer: Story =
  {
    args: {
      arbeidOgInntekt: {
        arbeidsforhold: [],
        inntektsmeldinger: [],
        inntekter: [],
        skjæringstidspunkt: '2021-11-10',
      },
    },
  };

export const ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      [MANUELT_ORG_NR]: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: MANUELT_ORG_NR,
        navn: 'Telenor',
        referanse: MANUELT_ORG_NR,
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: MANUELT_ORG_NR,
          fom: '2019-12-06',
          stillingsprosent: 100,
          tom: '2022-12-31',
          begrunnelse: 'Dette er en begrunnelse',
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
    erOverstyrer: true,
  },
};

export const ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet: Story = {
  args: {
    arbeidsgiverOpplysningerPerId: {
      [MANUELT_ORG_NR]: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: MANUELT_ORG_NR,
        navn: 'Telenor',
        referanse: MANUELT_ORG_NR,
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: MANUELT_ORG_NR,
          fom: '2019-12-06',
          stillingsprosent: 100,
          tom: '2022-12-31',
          begrunnelse: 'Dette er en begrunnelse',
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
    erOverstyrer: true,
    isReadOnly: true,
  },
};

export const ArbeidsforholdErOK: Story = {
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          stillingsprosent: 100,
          tom: '9999-12-31',
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            permisjonTom: '2022-12-01',
            type: 'VELFERDSPERMISJON',
          },
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: 20000,
          journalpostId: '1',
          dokumentId: '2',
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-07-01',
              tom: '2020-07-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet: Story = {
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          stillingsprosent: 100,
          tom: '9999-12-31',
        },
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-002',
          fom: '2021-12-01',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
          stillingsprosent: 80,
          tom: '9999-12-31',
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: 20000,
          journalpostId: '1',
          dokumentId: '2',
        },
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-002',
          inntektPrMnd: 10000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
          kontaktpersonNavn: 'Espen Utvikler',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-11-06',
          journalpostId: '1',
          dokumentId: '2',
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-07-01',
              tom: '2020-07-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const FlereArbeidsforholdOgInntekstemeldinger: Story = {
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
      910909090: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090',
      },
      910909092: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909092',
        navn: 'DNB',
        referanse: '910909092',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          stillingsprosent: 100,
          tom: '9999-12-31',
        },
        {
          arbeidsgiverIdent: '910909090',
          eksternArbeidsforholdId: 'ARB001-002',
          fom: '2019-06-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          stillingsprosent: 80,
          tom: '2021-12-31',
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: 20000,
          journalpostId: '1',
          dokumentId: '2',
        },
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909092',
          eksternArbeidsforholdId: undefined,
          inntektPrMnd: 10000,
          internArbeidsforholdId: undefined,
          kontaktpersonNavn: 'Espen Utvikler',
          kontaktpersonNummer: '55599999',
          motattDato: '2021-12-06',
          refusjonPrMnd: 5000,
          journalpostId: '1',
          dokumentId: '2',
          årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-07-01',
              tom: '2020-07-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
        {
          arbeidsgiverIdent: '910909090',
          inntekter: [
            {
              beløp: 30000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 31000,
              fom: '2021-07-01',
              tom: '2021-07-31',
              type: 'LØNN',
            },
            {
              beløp: 30000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 30000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 30000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const ArbeidsforholdMedSammeOrgNr: Story = {
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
      910909090: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: '9374546382674846453452720241327384837356378478393893847474783',
          fom: '2019-12-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          stillingsprosent: 100,
          tom: '9999-12-31',
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        },
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId:
            '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
          fom: '2019-06-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          stillingsprosent: 80,
          tom: '2021-12-31',
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 30000,
          refusjonPrMnd: undefined,
          arbeidsgiverIdent: '910909090',
          eksternArbeidsforholdId: 'ARB001-001sdsfdsdfsdfwer',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8cwds',
          kontaktpersonNavn: 'Espen Solstråle',
          kontaktpersonNummer: '41925090',
          journalpostId: '1',
          dokumentId: '2',
          motattDato: '2021-12-06',
          årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
        },
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 30000,
          refusjonPrMnd: undefined,
          arbeidsgiverIdent: '910909090',
          eksternArbeidsforholdId: 'ARB001-001',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c8wew',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          journalpostId: '1',
          dokumentId: '2',
          motattDato: '2021-12-06',
          årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-07-01',
              tom: '2020-07-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre: Story = {
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
      910909090: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: '2433453225',
          fom: '2019-06-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          stillingsprosent: 80,
          tom: '2021-12-31',
          årsak: undefined,
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            type: 'PERMITTERING',
          },
        },
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId:
            '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
          fom: '2019-06-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d3',
          stillingsprosent: 80,
          tom: '2021-12-31',
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            permisjonTom: '2022-12-01',
            type: 'VELFERDSPERMISJON',
          },
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 30000,
          refusjonPrMnd: undefined,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: '2433453225',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          journalpostId: '1',
          dokumentId: '2',
          motattDato: '2021-12-06',
          årsak: undefined,
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-07-01',
              tom: '2020-07-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-08-01',
              tom: '2020-08-31',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2020-09-01',
              tom: '2020-09-30',
              type: 'LØNN',
            },
            {
              beløp: 40000,
              fom: '2021-11-01',
              tom: '2021-11-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const FoerRegisterinnhenting: Story = {
  args: {
    erOverstyrer: true,
    isReadOnly: true,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      947064649: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '947064649',
        navn: 'BEDRIFT AS',
        referanse: '947064649',
      },
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 40000.0,
          refusjonPrMnd: undefined,
          arbeidsgiverIdent: '947064649',
          eksternArbeidsforholdId: undefined,
          internArbeidsforholdId: undefined,
          kontaktpersonNavn: 'Dolly Dollesen',
          kontaktpersonNummer: '99999999',
          journalpostId: '524975324',
          dokumentId: '549168225',
          motattDato: '2022-02-15',
          årsak: undefined,
          begrunnelse: undefined,
          saksbehandlersVurdering: undefined,
        },
      ],
      arbeidsforhold: [],
      inntekter: [],
      skjæringstidspunkt: '2022-02-16',
    },
  },
};

export const AutomatiskIgnorertInntektsmelding: Story = {
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      947064649: {
        erPrivatPerson: false,
        fødselsdato: undefined,
        identifikator: '947064649',
        navn: 'BEDRIFT AS',
        referanse: '947064649',
      },
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [],
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '947064649',
          internArbeidsforholdId: 'f98840f3-e74b-4255-ac33-b1cdcdb60311',
          eksternArbeidsforholdId: '2',
          fom: '2002-02-16',
          tom: '9999-12-31',
          stillingsprosent: 20.0,
          årsak: undefined,
          saksbehandlersVurdering: undefined,
          begrunnelse: undefined,
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2022-02-05',
    },
  },
};

export const EtterAtEtterspurtInntektsmeldingErKommet: Story = {
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      342352362: {
        referanse: '342352362',
        identifikator: '342352362',
        navn: 'Lagt til av saksbehandler',
        fødselsdato: undefined,
        erPrivatPerson: false,
      },
      947064649: {
        referanse: '947064649',
        identifikator: '947064649',
        navn: 'SJOKKERENDE ELEKTRIKER',
        fødselsdato: undefined,
        erPrivatPerson: false,
      },
      972674818: {
        referanse: '972674818',
        identifikator: '972674818',
        navn: 'PENGELØS SPAREBANK',
        fødselsdato: undefined,
        erPrivatPerson: false,
      },
    },
    arbeidOgInntekt: {
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 20000.0,
          refusjonPrMnd: undefined,
          arbeidsgiverIdent: '972674818',
          eksternArbeidsforholdId: undefined,
          internArbeidsforholdId: undefined,
          kontaktpersonNavn: 'Dolly Dollesen',
          kontaktpersonNummer: '99999999',
          journalpostId: '524975527',
          dokumentId: '549168458',
          motattDato: '2022-02-16',
          årsak: undefined,
          begrunnelse: 'her vil jeg mase på AG',
          saksbehandlersVurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING',
        },
      ],
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '947064649',
          internArbeidsforholdId: '6e220db0-5cdf-410f-b8a0-a78ac4ff87a1',
          eksternArbeidsforholdId: '2',
          fom: '2018-10-01',
          tom: '9999-12-31',
          stillingsprosent: 50.0,
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
          saksbehandlersVurdering: 'FORTSETT_UTEN_INNTEKTSMELDING',
          begrunnelse: 'her trenger jeg ikke IM. ja ja',
        },
        {
          arbeidsgiverIdent: '972674818',
          internArbeidsforholdId: '3aee54db-af17-4b18-8c9c-897be1f4d572',
          eksternArbeidsforholdId: '1',
          fom: '2000-05-13',
          tom: '9999-12-31',
          stillingsprosent: 100.0,
          årsak: undefined,
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '947064649',
          inntekter: [
            {
              beløp: 15000.0,
              fom: '2021-10-01',
              tom: '2021-02-28',
              type: 'LØNN',
            },
          ],
        },
        {
          arbeidsgiverIdent: '972674818',
          inntekter: [
            {
              beløp: 20000.0,
              fom: '2021-10-01',
              tom: '2021-02-28',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2022-02-15',
    },
  },
};

export const SkalViseFødselsnummerForPrivatperson: Story = {
  args: {
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: true,
        fødselsdato: '2000-01-01',
        identifikator: '910909088',
        navn: 'Bettan',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          stillingsprosent: 100,
          tom: '9999-12-31',
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            permisjonTom: '2022-12-01',
            type: 'VELFERDSPERMISJON',
          },
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001',
          inntektPrMnd: 30000,
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
          refusjonPrMnd: 20000,
          journalpostId: '1',
          dokumentId: '2',
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '910909088',
          inntekter: [
            {
              beløp: 40000,
              fom: '2020-06-01',
              tom: '2020-06-30',
              type: 'LØNN',
            },
          ],
        },
      ],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};
