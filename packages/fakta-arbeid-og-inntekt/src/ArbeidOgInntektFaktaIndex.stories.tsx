import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  Aksjonspunkt, AksjonspunktÅrsak, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, Behandling,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidOgInntektFaktaIndex from './ArbeidOgInntektFaktaIndex';

const MANUELT_ORG_NR = '342352362';

const promiseAction = () => (...args: any): Promise<any> => {
  action('button-click')(...args);
  return Promise.resolve();
};

export default {
  title: 'fakta/fakta-arbeid-og-inntekter',
  component: ArbeidOgInntektFaktaIndex,
};

const Template: Story<{
  aksjonspunkter?: Aksjonspunkt[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  lagreVurdering: (data: any) => Promise<void>;
  registrerArbeidsforhold: (data: any) => Promise<void>;
  åpneForNyVurdering: (data: any) => Promise<void>;
  settBehandlingPåVentCallback: (params: {
    frist: string;
    ventearsak: string;
  }) => Promise<any>;
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
    behandling={{
      uuid: '1223-2323-2323-22332',
    } as Behandling}
    aksjonspunkter={aksjonspunkter}
    submittable
    harApneAksjonspunkter
    alleMerknaderFraBeslutter={{}}
    readOnly={readOnly}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
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
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  } as Aksjonspunkt],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      tom: '9999-12-31',
      stillingsprosent: 100,
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
    }],
    inntektsmeldinger: [],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 41000,
        fom: '2021-07-01',
        tom: '2021-07-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret = Template.bind({});
InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  } as Aksjonspunkt],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      tom: '9999-12-31',
      stillingsprosent: 100,
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
    }],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const InnhentInntektsmeldingDerBehandlingErAvsluttet = Template.bind({});
InnhentInntektsmeldingDerBehandlingErAvsluttet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.UTFORT,
  } as Aksjonspunkt],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      stillingsprosent: 100,
      tom: '9999-12-31',
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
      begrunnelse: 'Vil innehente inntektsmelding fordi...',
    }],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: true,
};

export const AvklarManglendeOpplysninger = Template.bind({});
AvklarManglendeOpplysninger.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  } as Aksjonspunkt],
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
    inntektsmeldinger: [{
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
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
    }],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const AvklarManglendeOpplysningerDerBehandlingErAvsluttet = Template.bind({});
AvklarManglendeOpplysningerDerBehandlingErAvsluttet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.UTFORT,
  } as Aksjonspunkt],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2021-10-06',
      tom: '2021-12-12',
      stillingsprosent: 100,
    }],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: undefined,
      journalpostId: '1',
      dokumentId: '2',
      årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
      begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
    }],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: true,
};

export const AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig = Template.bind({});
AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.UTFORT,
  } as Aksjonspunkt],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2021-10-06',
      tom: '2021-12-12',
      stillingsprosent: 100,
    }],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: undefined,
      journalpostId: '1',
      dokumentId: '2',
      årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
      begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
    }],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: false,
};

export const SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer = Template.bind({});
SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  erOverstyrer: true,
};

export const SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer = Template.bind({});
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

export const ArbeidsforholdErManueltLagtTilOgLagret = Template.bind({});
ArbeidsforholdErManueltLagtTilOgLagret.args = {
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
    arbeidsforhold: [{
      arbeidsgiverIdent: MANUELT_ORG_NR,
      fom: '2019-12-06',
      stillingsprosent: 100,
      tom: '2022-12-31',
      begrunnelse: 'Dette er en begrunnelse',
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
    }],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: MANUELT_ORG_NR,
      fom: '2019-12-06',
      stillingsprosent: 100,
      tom: '2022-12-31',
      begrunnelse: 'Dette er en begrunnelse',
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
    }],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      stillingsprosent: 100,
      tom: '9999-12-31',
    }],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: 20000,
      journalpostId: '1',
      dokumentId: '2',
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const FlereArbeidsforholdOgInntekstemeldinger = Template.bind({});
FlereArbeidsforholdOgInntekstemeldinger.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: true,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      stillingsprosent: 100,
      tom: '9999-12-31',
    }, {
      arbeidsgiverIdent: '910909090',
      eksternArbeidsforholdId: 'ARB001-002',
      fom: '2019-06-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
      stillingsprosent: 80,
      tom: '2021-12-31',
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
    }],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: 20000,
      journalpostId: '1',
      dokumentId: '2',
    }, {
      arbeidsgiverIdent: '910909092',
      eksternArbeidsforholdId: 'ARB001-003',
      innsendingstidspunkt: '2021-12-02T10:52:13.377',
      inntektPrMnd: 10000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa90',
      kontaktpersonNavn: 'Espen Utvikler',
      kontaktpersonNummer: '55599999',
      motattDato: '2021-12-06',
      refusjonPrMnd: 5000,
      journalpostId: '1',
      dokumentId: '2',
      årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }, {
      arbeidsgiverIdent: '910909090',
      inntekter: [{
        beløp: 30000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 31000,
        fom: '2021-07-01',
        tom: '2021-07-31',
        type: 'LØNN',
      }, {
        beløp: 30000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 30000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 30000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }],
    skjæringstidspunkt: '2021-11-10',
  },
};

export const ArbeidsforholdMedSammeOrgNr = Template.bind({});
ArbeidsforholdMedSammeOrgNr.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: true,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: '9374546382674846453452720241327384837356378478393893847474783',
      fom: '2019-12-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      stillingsprosent: 100,
      tom: '9999-12-31',
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
    }, {
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
      fom: '2019-06-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
      stillingsprosent: 80,
      tom: '2021-12-31',
      årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
    }],
    inntektsmeldinger: [{
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
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
    }, {
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
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: 'LØNN',
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: 'LØNN',
      }],
    }],
    skjæringstidspunkt: '2021-11-10',
  },
};
