import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Aksjonspunkt,
  AksjonspunktÅrsak,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { AksjonspunktCode, aksjonspunktStatus, ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import ArbeidOgInntektFaktaIndex from './ArbeidOgInntektFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const MANUELT_ORG_NR = '342352362';

const fellesInntektsmeldingFelter = {
  innsendingstidspunkt: '2021-12-06T00:00:00',
  kildeSystem: "Altinn",
  bortfalteNaturalytelser: [],
  refusjonsperioder: [],
  innsendingsårsak: "NY" as const,
  behandlingsIdeer: []
};

const promiseAction =
  () =>
  (...args: any): Promise<any> => {
    action('button-click')(...args);
    return Promise.resolve();
  };

const setFormData = () => undefined;

export default {
  title: 'fakta/fakta-arbeid-og-inntekter',
  component: ArbeidOgInntektFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter?: Aksjonspunkt[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  lagreVurdering: (data: any) => Promise<void>;
  registrerArbeidsforhold: (data: any) => Promise<void>;
  åpneForNyVurdering: (data: any) => Promise<void>;
  settBehandlingPåVentCallback: (params: { frist?: string; ventearsak: string }) => Promise<any>;
  erOverstyrer?: boolean;
  readOnly?: boolean;
}> = ({
  aksjonspunkter = [],
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  submitCallback,
  settBehandlingPåVentCallback,
  erOverstyrer = false,
  readOnly = false,
  lagreVurdering = promiseAction(),
  registrerArbeidsforhold = promiseAction(),
  åpneForNyVurdering = promiseAction(),
}) => (
  <ArbeidOgInntektFaktaIndex
    saksnummer="1234567"
    behandling={
      {
        uuid: '1223-2323-2323-22332',
      } as Behandling
    }
    aksjonspunkter={aksjonspunkter}
    submittable
    harApneAksjonspunkter
    alleMerknaderFraBeslutter={{}}
    readOnly={readOnly}
    alleKodeverk={alleKodeverk as any}
    setFormData={setFormData}
    arbeidOgInntekt={arbeidOgInntekt}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    registrerArbeidsforhold={registrerArbeidsforhold}
    lagreVurdering={lagreVurdering}
    åpneForNyVurdering={åpneForNyVurdering}
    erOverstyrer={erOverstyrer}
    submitCallback={submitCallback}
    settBehandlingPåVentCallback={settBehandlingPåVentCallback}
  />
);

export const InnhentInntektsmelding = Template.bind({});
InnhentInntektsmelding.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
};

export const InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret = Template.bind({});
InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
};

export const InnhentInntektsmeldingDerBehandlingErAvsluttet = Template.bind({});
InnhentInntektsmeldingDerBehandlingErAvsluttet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.UTFORT,
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
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
        begrunnelse: 'Vil innehente inntektsmelding fordi...',
      },
    ],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: true,
};

export const AvklarManglendeArbeidsforhold = Template.bind({});
AvklarManglendeArbeidsforhold.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
        innsendingstidspunkt: '2021-12-06T00:00:00',
        kildeSystem: "Altinn",
        bortfalteNaturalytelser: [],
        refusjonsperioder: [],
        innsendingsårsak: "NY",
        behandlingsIdeer: []
      },
    ],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet = Template.bind({});
AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.UTFORT,
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
        ...fellesInntektsmeldingFelter
      },
    ],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: true,
};

export const AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig = Template.bind({});
AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.UTFORT,
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
        ...fellesInntektsmeldingFelter
      },
    ],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: false,
  erOverstyrer: true,
};

export const IngenAksjonspunktMenTilbakehoppMuligForOverstyrer = Template.bind({});
IngenAksjonspunktMenTilbakehoppMuligForOverstyrer.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
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
        ...fellesInntektsmeldingFelter
      },
    ],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: false,
  erOverstyrer: true,
};

export const SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer =
  Template.bind({});
SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer.args =
  {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
        status: aksjonspunktStatus.OPPRETTET,
      } as Aksjonspunkt,
    ],
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10',
    },
    erOverstyrer: true,
  };

export const SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer =
  Template.bind({});
SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet = Template.bind({});
ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
};

export const ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet = Template.bind({});
ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
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
  readOnly: true,
};

export const ArbeidsforholdErOK = Template.bind({});
ArbeidsforholdErOK.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
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
        ...fellesInntektsmeldingFelter
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
};

export const ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet = Template.bind({});
ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
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
        ...fellesInntektsmeldingFelter
      },
      {
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        inntektPrMnd: 10000,
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
        kontaktpersonNavn: 'Espen Utvikler',
        kontaktpersonNummer: '41925090',
        motattDato: '2021-11-06',
        journalpostId: '1',
        dokumentId: '2',
        ...fellesInntektsmeldingFelter
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
};

export const FlereArbeidsforholdOgInntekstemeldinger = Template.bind({});
FlereArbeidsforholdOgInntekstemeldinger.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: true,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
        ...fellesInntektsmeldingFelter
      },
      {
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
        ...fellesInntektsmeldingFelter
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
};

export const ArbeidsforholdMedSammeOrgNr = Template.bind({});
ArbeidsforholdMedSammeOrgNr.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: true,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
        ...fellesInntektsmeldingFelter
      },
      {
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
        ...fellesInntektsmeldingFelter
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
};

export const ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre = Template.bind({});
ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: true,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
        ...fellesInntektsmeldingFelter
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
};

export const FoerRegisterinnhenting = Template.bind({});
FoerRegisterinnhenting.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: true,
  readOnly: true,
  aksjonspunkter: [] as Aksjonspunkt[],
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
        ...fellesInntektsmeldingFelter
      },
    ],
    arbeidsforhold: [],
    inntekter: [],
    skjæringstidspunkt: '2022-02-16',
  },
};

export const AutomatiskIgnorertInntektsmelding = Template.bind({});
AutomatiskIgnorertInntektsmelding.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: false,
  aksjonspunkter: [] as Aksjonspunkt[],
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
};

export const EtterAtEtterspurtInntektsmeldingErKommet = Template.bind({});
EtterAtEtterspurtInntektsmeldingErKommet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: false,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: aksjonspunktStatus.OPPRETTET,
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
        ...fellesInntektsmeldingFelter
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
};

export const SkalViseFødselsnummerForPrivatperson = Template.bind({});
SkalViseFødselsnummerForPrivatperson.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
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
        ...fellesInntektsmeldingFelter
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
};
