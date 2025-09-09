import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ArbeidsforholdKomplettVurderingType, PermisjonsbeskrivelseType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import { AksjonspunktÅrsak, type AoIArbeidsforhold, type ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { ArbeidsforholdFaktaIndex } from './ArbeidsforholdFaktaIndex';
import { BekreftetPermisjonStatus } from './kodeverk/bekreftetPermisjonStatus';

const fellesInntektsmeldingFelter = {
  arbeidsgiverIdent: '910909088',
  eksternArbeidsforholdId: 'ARB001-001',
  innsendingstidspunkt: '2021-12-06T00:00:00',
  kildeSystem: 'Altinn',
  bortfalteNaturalytelser: [],
  refusjonsperioder: [],
  innsendingsårsak: 'NY' as const,
  behandlingsIdeer: [],
  tilknyttedeBehandlingIder: [],
  aktiveNaturalytelser: [],
};

const defaultArbeidsforhold = {
  arbeidsgiverIdent: '',
  fom: '2019-12-06',
  stillingsprosent: 100,
  tom: '2022-12-31',
  begrunnelse: 'Dette er en begrunnelse',
  saksbehandlersVurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING',
} satisfies AoIArbeidsforhold;

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  11212: {
    erPrivatPerson: false,
    identifikator: '23232',
    referanse: '11212',
    navn: 'Vy',
  },
  999999999: {
    erPrivatPerson: false,
    identifikator: '999999999',
    referanse: '999999999',
    navn: 'KIWI',
  },
  999999998: {
    erPrivatPerson: false,
    identifikator: '999999998',
    referanse: '999999998',
    navn: 'REMA 1000',
  },
};

const meta = {
  title: 'fakta/fakta-arbeidsforhold',
  component: ArbeidsforholdFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId,
    isReadOnly: true,
  },
} satisfies Meta<PanelDataArgs & ComponentProps<typeof ArbeidsforholdFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ArbeidsforholdetSkalBenyttesUtenInntektsmelding: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2000-04-19',
          tom: '9999-12-31',
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
          begrunnelse: 'Dette er en begrunnelse 3',
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2022-01-31',
    },
  },
};

export const ManueltOpprettetArbeidsforhold: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          fom: '2022-01-31',
          tom: '9999-12-31',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
          begrunnelse: 'Dette er en begrunnelse 4',
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 40000,
          arbeidsgiverIdent: '999999999',
          kontaktpersonNavn: 'Dolly Dollesen',
          kontaktpersonNummer: '99999999',
          journalpostId: '510870400',
          motattDato: '2021-12-13',
          dokumentId: '1',
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2021-03-26',
    },
  },
};

export const ArbeidsforholdetErIkkeAktivt: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE,
          begrunnelse: 'Dette er en begrunnelse 5',
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const SokerErIPermisjon: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK,
          begrunnelse: 'Dette er en begrunnelse 6',
          permisjonOgMangel: {
            permisjonFom: '2020-01-01',
            type: PermisjonsbeskrivelseType.PERMISJON,
            årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
            permisjonStatus: BekreftetPermisjonStatus.BRUK_PERMISJON,
          },
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const SokerErIkkeIPermisjon: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          begrunnelse: 'Dette er en begrunnelse 7',
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
          permisjonOgMangel: {
            permisjonFom: '2020-01-01',
            permisjonTom: '2021-01-01',
            type: PermisjonsbeskrivelseType.PERMISJON,
            permisjonStatus: BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON,
          },
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK,
          begrunnelse: 'Dette er en begrunnelse 8',
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const FjernArbeidsforholdet: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          begrunnelse: 'Dette er en begrunnelse 9',
        },
      ],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const ArbeidsforholdetErOpprettetBasertPåIM: Story = {
  args: {
    arbeidOgInntekt: {
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 25500.0,
          arbeidsgiverIdent: '999999999',
          kontaktpersonNavn: 'Dolly Dollesen',
          kontaktpersonNummer: '99999999',
          journalpostId: '524273715',
          dokumentId: '548466069',
          motattDato: '2022-01-19',
        },
      ],
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          fom: '2022-01-19',
          tom: '9999-12-31',
          stillingsprosent: 100.0,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          begrunnelse: 'Mottatt IM',
        },
      ],
      inntekter: [
        {
          arbeidsgiverIdent: '972674818',
          inntekter: [],
        },
      ],
      skjæringstidspunkt: '2022-02-08',
    },
  },
};

export const IngenArbeidsforholdRegistrert: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};

export const FlereArbeidsforholdITabell: Story = {
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999999',
          internArbeidsforholdId: 'c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
          eksternArbeidsforholdId: 'V999999999R50049082SS157848L0001',
          fom: '2019-12-06',
          tom: '9999-12-31',
          stillingsprosent: 100,
        },
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '999999998',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2019-05-12',
          tom: '2019-06-12',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK,
          begrunnelse: 'Dette er en begrunnelse 1',
        },
        {
          ...defaultArbeidsforhold,
          arbeidsgiverIdent: '11212',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          eksternArbeidsforholdId: 'ARB001-001',
          fom: '2020-12-06',
          tom: '2021-12-31',
          stillingsprosent: 100,
          saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          begrunnelse: 'Dette er en begrunnelse 2',
        },
      ],
      inntektsmeldinger: [
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 30000,
          arbeidsgiverIdent: '999999999',
          eksternArbeidsforholdId: 'V999999999R50049082SS157848L0001',
          internArbeidsforholdId: 'c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          journalpostId: '1',
          dokumentId: '2',
          motattDato: '2021-11-06',
        },
        {
          ...fellesInntektsmeldingFelter,
          inntektPrMnd: 40000,
          arbeidsgiverIdent: '999999998',
          eksternArbeidsforholdId: 'ARB001-001',
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          kontaktpersonNavn: 'Corpolarsen',
          kontaktpersonNummer: '41925090',
          journalpostId: '1',
          dokumentId: '2',
          motattDato: '2021-12-06',
        },
      ],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
  },
};
