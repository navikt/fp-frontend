import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import { type Aksjonspunkt, AksjonspunktÅrsak } from '@navikt/fp-types';

import { PermisjonFaktaIndex } from './PermisjonFaktaIndex';

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
  title: 'fakta/fakta-permisjon',
  component: PermisjonFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  render: args => <PermisjonFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof PermisjonFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EttArbeidsforholdUtenSluttdatoForPermisjon: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON,
        status: AksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
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
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            type: 'PERMITTERING',
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
        },
        {
          arbeidsgiverIdent: '91090909+',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5',
          eksternArbeidsforholdId: 'ARB001-002',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            permisjonTom: '2022-12-01',
            type: 'PERMITTERING',
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
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

export const FlereArbeidsforhold: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
      910909090: {
        erPrivatPerson: false,
        identifikator: '910909090',
        navn: 'Autoservice AS',
        referanse: '910909090',
      },
      910909092: {
        erPrivatPerson: false,
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
          permisjonOgMangel: {
            permisjonFom: '2022-10-02',
            type: 'PERMITTERING',
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
        },
        {
          arbeidsgiverIdent: '910909090',
          eksternArbeidsforholdId: 'ARB001-002',
          fom: '2019-06-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          stillingsprosent: 80,
          tom: '2021-12-31',
          årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
          permisjonOgMangel: {
            permisjonFom: '2021-11-07',
            type: 'PERMITTERING',
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
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

export const FlereArbeidsforholdFraSammeArbeidsgiver: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    arbeidsgiverOpplysningerPerId: {
      910909088: {
        erPrivatPerson: false,
        identifikator: '910909088',
        navn: 'BEDRIFT AS',
        referanse: '910909088',
      },
    },
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb',
          fom: '2019-12-06',
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          stillingsprosent: 100,
          tom: '9999-12-31',
          permisjonOgMangel: {
            permisjonFom: '2022-10-02',
            type: 'VELFERDSPERMISJON',
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
        },
        {
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-002',
          fom: '2019-06-06',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          stillingsprosent: 80,
          tom: '2021-12-31',
          permisjonOgMangel: {
            permisjonFom: '2021-11-07',
            type: 'PERMITTERING',
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          arbeidsgiverIdent: '910909088',
          eksternArbeidsforholdId: 'ARB001-001-asdfasdfasdf-asdfadsfertbrtynet65y454hrthfdsgfbdsfgb',
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
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          motattDato: '2021-12-06',
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
        {
          arbeidsgiverIdent: '910909090',
          inntekter: [
            {
              beløp: 30000,
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

export const VisFødselsdatoNårPrivatperson: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_PERMISJON,
        status: AksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
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
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          permisjonOgMangel: {
            permisjonFom: '2022-10-01',
            type: 'PERMITTERING',
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          },
          saksbehandlersVurdering: null,
          begrunnelse: null,
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};
