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
      permisjonOgMangel: {
        permisjonFom: '2022-10-01',
        permisjonTom: '2022-12-01',
        type: 'VELFERDSPERMISJON',
      },
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
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
      begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
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
      saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
      begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
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
    }],
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
    }],
    inntekter: [],
    skjæringstidspunkt: '2021-11-10',
  },
  readOnly: false,
  erOverstyrer: true,
};

export const SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer = Template.bind({});
SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  } as Aksjonspunkt],
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

export const ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet = Template.bind({});
ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  } as Aksjonspunkt],
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
      permisjonOgMangel: {
        permisjonFom: '2022-10-01',
        permisjonTom: '2022-12-01',
        type: 'VELFERDSPERMISJON',
      },
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      stillingsprosent: 100,
      tom: '9999-12-31',
    }, {
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-002',
      fom: '2021-12-01',
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
      stillingsprosent: 80,
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
    }, {
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-002',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 10000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
      kontaktpersonNavn: 'Espen Utvikler',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-11-06',
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
      eksternArbeidsforholdId: undefined,
      innsendingstidspunkt: '2021-12-02T10:52:13.377',
      inntektPrMnd: 10000,
      internArbeidsforholdId: undefined,
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

export const ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre = Template.bind({});
ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre.args = {
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
      eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
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
    }, {
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
    }],
    inntektsmeldinger: [{
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
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      årsak: undefined,
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
    inntektsmeldinger: [{
      inntektPrMnd: 40000.00,
      refusjonPrMnd: null,
      arbeidsgiverIdent: '947064649',
      eksternArbeidsforholdId: null,
      internArbeidsforholdId: null,
      kontaktpersonNavn: 'Dolly Dollesen',
      kontaktpersonNummer: '99999999',
      journalpostId: '524975324',
      dokumentId: '549168225',
      motattDato: '2022-02-15',
      innsendingstidspunkt: '2022-02-15T15:29:53',
      årsak: null,
      begrunnelse: null,
      saksbehandlersVurdering: null,
    }],
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
    arbeidsforhold: [{
      arbeidsgiverIdent: '947064649',
      internArbeidsforholdId: 'f98840f3-e74b-4255-ac33-b1cdcdb60311',
      eksternArbeidsforholdId: '2',
      fom: '2002-02-16',
      tom: '9999-12-31',
      stillingsprosent: 20.00,
      årsak: null,
      saksbehandlersVurdering: null,
      begrunnelse: null,
    }],
    inntekter: [],
    skjæringstidspunkt: '2022-02-05',
  },
};

export const EtterAtEtterspurtInntektsmeldingErKommet = Template.bind({});
EtterAtEtterspurtInntektsmeldingErKommet.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: false,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: {
    342352362: {
      referanse: '342352362',
      identifikator: '342352362',
      navn: 'Lagt til av saksbehandler',
      fødselsdato: null,
      erPrivatPerson: false,
    },
    947064649: {
      referanse: '947064649',
      identifikator: '947064649',
      navn: 'SJOKKERENDE ELEKTRIKER',
      fødselsdato: null,
      erPrivatPerson: false,
    },
    972674818: {
      referanse: '972674818',
      identifikator: '972674818',
      navn: 'PENGELØS SPAREBANK',
      fødselsdato: null,
      erPrivatPerson: false,
    },
  },
  arbeidOgInntekt: {
    inntektsmeldinger: [
      {
        inntektPrMnd: 20000.00,
        refusjonPrMnd: null,
        arbeidsgiverIdent: '972674818',
        eksternArbeidsforholdId: null,
        internArbeidsforholdId: null,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975527',
        dokumentId: '549168458',
        motattDato: '2022-02-16',
        innsendingstidspunkt: '2022-02-16T15:33:32',
        årsak: null,
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
        stillingsprosent: 50.00,
        årsak: 'MANGLENDE_INNTEKTSMELDING' as any,
        saksbehandlersVurdering: 'FORTSETT_UTEN_INNTEKTSMELDING',
        begrunnelse: 'her trenger jeg ikke IM. ja ja',
      },
      {
        arbeidsgiverIdent: '972674818',
        internArbeidsforholdId: '3aee54db-af17-4b18-8c9c-897be1f4d572',
        eksternArbeidsforholdId: '1',
        fom: '2000-05-13',
        tom: '9999-12-31',
        stillingsprosent: 100.00,
        årsak: null,
      },
    ],
    inntekter: [
      {
        arbeidsgiverIdent: '947064649',
        inntekter: [
          {
            beløp: 15000.00,
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
            beløp: 20000.00,
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

export const ArbeidsforholdMedSammeOrgNrDerArbeidsforholdNr2ManglerInntektsmelding = Template.bind({});
ArbeidsforholdMedSammeOrgNrDerArbeidsforholdNr2ManglerInntektsmelding.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  settBehandlingPåVentCallback: action('button-click') as (data: any) => Promise<any>,
  erOverstyrer: false,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: {
    805824352: {
      referanse: '805824352',
      identifikator: '805824352',
      navn: 'Lagt til av saksbehandler',
      fødselsdato: null,
      erPrivatPerson: false,
    },
    907670201: {
      referanse: '907670201',
      identifikator: '907670201',
      navn: 'SJOKKERENDE ELEKTRIKER',
      fødselsdato: null,
      erPrivatPerson: false,
    },
  },
  arbeidOgInntekt: {
    inntektsmeldinger: [
      {
        inntektPrMnd: 5000.00,
        refusjonPrMnd: 5000.00,
        arbeidsgiverIdent: '805824352',
        eksternArbeidsforholdId: null,
        internArbeidsforholdId: null,
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524986883',
        dokumentId: '549180589',
        motattDato: '2022-03-15',
        innsendingstidspunkt: '2022-03-15T12:55:22',
      },
      {
        inntektPrMnd: 15000.00,
        arbeidsgiverIdent: '907670201',
        eksternArbeidsforholdId: '1',
        internArbeidsforholdId: '50fd8de2-5e84-4234-b0bf-b2ef28303ae8',
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524988988',
        dokumentId: '549182744',
        motattDato: '2022-03-16',
        innsendingstidspunkt: '2022-03-16T15:18:16',
      },
    ],
    arbeidsforhold: [
      {
        arbeidsgiverIdent: '805824352',
        internArbeidsforholdId: '35437b66-cda9-45c9-a702-936e5c46ff34',
        eksternArbeidsforholdId: '2',
        fom: '2018-03-15',
        tom: '9999-12-31',
        stillingsprosent: 20.00,
      },
      {
        arbeidsgiverIdent: '907670201',
        internArbeidsforholdId: '50fd8de2-5e84-4234-b0bf-b2ef28303ae8',
        eksternArbeidsforholdId: '1',
        fom: '2002-03-07',
        tom: '9999-12-31',
        stillingsprosent: 40.00,
      },
      {
        arbeidsgiverIdent: '907670201',
        internArbeidsforholdId: '58a9aa05-d90b-40e4-a05a-70b152abc3a5',
        eksternArbeidsforholdId: '3',
        fom: '2012-02-08',
        tom: '9999-12-31',
        stillingsprosent: 20.00,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING,
      },
    ],
    inntekter: [
      {
        arbeidsgiverIdent: '805824352',
        inntekter: [{
          beløp: 5000.00,
          fom: '2021-03-01',
          tom: '2021-03-31',
          type: 'LØNN',
        }],
      },
      {
        arbeidsgiverIdent: '907670201',
        inntekter: [{
          beløp: 25000.00,
          fom: '2021-03-01',
          tom: '2021-03-31',
          type: 'LØNN',
        }],
      },
      {
        arbeidsgiverIdent: '972674818',
        inntekter: [{
          beløp: 73000.00,
          fom: '2021-03-01',
          tom: '2021-03-31',
          type: 'LØNN',
        }],
      },
    ],
    skjæringstidspunkt: '2022-03-11',
  },
};
