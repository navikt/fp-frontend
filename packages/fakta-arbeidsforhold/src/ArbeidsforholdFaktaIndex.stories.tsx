import React from 'react';
import { StoryFn } from '@storybook/react';

import { AksjonspunktÅrsak, ArbeidOgInntektsmelding, Behandling } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';

import ArbeidsforholdFaktaIndex from './ArbeidsforholdFaktaIndex';
import BekreftetPermisjonStatus from './kodeverk/bekreftetPermisjonStatus';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const fellesInntektsmeldingFelter = {
  innsendingstidspunkt: '2021-12-06T00:00:00',
  kildeSystem: 'Altinn',
  bortfalteNaturalytelser: [],
  refusjonsperioder: [],
  innsendingsårsak: 'NY' as const,
  behandlingsIdeer: [],
  tilknyttedeBehandlingIder: [],
};

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const arbeidsgiverOpplysningerPerId = {
  11212: {
    erPrivatPerson: false,
    identifikator: '23232',
    navn: 'Vy',
  },
  999999999: {
    erPrivatPerson: false,
    identifikator: '999999999',
    navn: 'KIWI',
  },
  999999998: {
    erPrivatPerson: false,
    identifikator: '999999998',
    navn: 'REMA 1000',
  },
};

export default {
  title: 'fakta/fakta-arbeidsforhold',
  component: ArbeidsforholdFaktaIndex,
};

const Template: StoryFn<{
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}> = ({ arbeidOgInntekt }) => (
  <ArbeidsforholdFaktaIndex
    submitCallback={() => Promise.resolve()}
    readOnly
    harApneAksjonspunkter={false}
    submittable={false}
    setFormData={() => undefined}
    behandling={behandling}
    arbeidOgInntekt={arbeidOgInntekt}
    aksjonspunkter={[]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{}}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const ArbeidsforholdetSkalBenyttesUtenInntektsmelding = Template.bind({});
ArbeidsforholdetSkalBenyttesUtenInntektsmelding.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2000-04-19',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2022-01-31',
  },
};

export const ManueltOpprettetArbeidsforhold = Template.bind({});
ManueltOpprettetArbeidsforhold.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        fom: '2022-01-31',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
        begrunnelse: 'Dette er en begrunnelse',
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
};

export const ArbeidsforholdetErIkkeAktivt = Template.bind({});
ArbeidsforholdetErIkkeAktivt.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK_MED_OVERSTYRT_PERIODE,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const SokerErIPermisjon = Template.bind({});
SokerErIPermisjon.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK,
        begrunnelse: 'Dette er en begrunnelse',
        permisjonOgMangel: {
          permisjonFom: '2020-01-01',
          type: 'PERMISJON',
          årsak: AksjonspunktÅrsak.PERMISJON_UTEN_SLUTTDATO,
          permisjonStatus: BekreftetPermisjonStatus.BRUK_PERMISJON,
        },
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const SokerErIkkeIPermisjon = Template.bind({});
SokerErIkkeIPermisjon.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        begrunnelse: 'Dette er en begrunnelse',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
        permisjonOgMangel: {
          permisjonFom: '2020-01-01',
          permisjonTom: '2021-01-01',
          type: 'PERMISJON',
          permisjonStatus: BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON,
        },
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger = Template.bind({});
OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const FjernArbeidsforholdet = Template.bind({});
FjernArbeidsforholdet.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const ArbeidsforholdetErOpprettetBasertPåIM = Template.bind({});
ArbeidsforholdetErOpprettetBasertPåIM.args = {
  arbeidOgInntekt: {
    inntektsmeldinger: [
      {
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 25500.0,
        refusjonPrMnd: undefined,
        arbeidsgiverIdent: '999999999',
        eksternArbeidsforholdId: undefined,
        internArbeidsforholdId: undefined,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524273715',
        dokumentId: '548466069',
        motattDato: '2022-01-19',
        begrunnelse: undefined,
        saksbehandlersVurdering: undefined,
      },
    ],
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: undefined,
        eksternArbeidsforholdId: undefined,
        fom: '2022-01-19',
        tom: '9999-12-31',
        stillingsprosent: 100.0,
        årsak: undefined,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        permisjonOgMangel: undefined,
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
};

export const IngenArbeidsforholdRegistrert = Template.bind({});
IngenArbeidsforholdRegistrert.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const FlereArbeidsforholdITabell = Template.bind({});
FlereArbeidsforholdITabell.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '999999999',
        internArbeidsforholdId: 'c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
        eksternArbeidsforholdId: 'V999999999R50049082SS157848L0001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
      },
      {
        arbeidsgiverIdent: '999999998',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-05-12',
        tom: '2019-06-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.BRUK,
        begrunnelse: 'Dette er en begrunnelse',
      },
      {
        arbeidsgiverIdent: '11212',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2020-12-06',
        tom: '2021-12-31',
        stillingsprosent: 100,
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    inntektsmeldinger: [
      {
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        refusjonPrMnd: undefined,
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
        refusjonPrMnd: undefined,
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
};
