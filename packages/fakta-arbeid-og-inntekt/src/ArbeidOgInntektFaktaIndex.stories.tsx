import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, Behandling,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import ArbeidOgInntektFaktaIndex from './ArbeidOgInntektFaktaIndex';

export default {
  title: 'fakta/fakta-arbeid-og-inntekter',
  component: ArbeidOgInntektFaktaIndex,
};

const Template: Story<{
  aksjonspunkter?: Aksjonspunkt[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  erOverstyrer?: boolean;
}> = ({
  aksjonspunkter = [],
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  erOverstyrer = false,
}) => (
  <ArbeidOgInntektFaktaIndex
    behandling={{
      behandlingsresultat: {
        skjæringstidspunkt: {
          dato: '10.10.2021',
        },
      },
    } as Behandling}
    aksjonspunkter={aksjonspunkter}
    submittable
    harApneAksjonspunkter
    alleMerknaderFraBeslutter={{}}
    readOnly={false}
    submitCallback={() => undefined}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    arbeidOgInntekt={arbeidOgInntekt}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    lagreNyttArbeidsforhold={action('button-click') as (data: any) => Promise<any>}
    lagreManglendeArbeidsforhold={action('button-click') as (data: any) => Promise<any>}
    lagreManglendeInntekstmelding={action('button-click') as (data: any) => Promise<any>}
    erOverstyrer={erOverstyrer}
  />
);

export const UtenArbeidsforholdMenMedInntektOgInnteksmelding = Template.bind({});
UtenArbeidsforholdMenMedInntektOgInnteksmelding.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: null,
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 30000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 30000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 30000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 30000,
        fom: '2020-10-01',
        tom: '2020-10-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }],
    }],
  },
};

export const MedArbeidsforholdMenUtenInntektOgInnteksmelding = Template.bind({});
MedArbeidsforholdMenUtenInntektOgInnteksmelding.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      fom: '2019-12-06',
      tom: '9999-12-31',
      internArbeidsforholdId: '1a4db434-2f9e-427e-b8b9-4b438c369b92',
      stillingsprosent: 0,
    }],
    inntektsmeldinger: [],
    inntekter: [],
  },
};

export const SkalInnhenteInntektsmelding = Template.bind({});
SkalInnhenteInntektsmelding.args = {
  aksjonspunkter: [{
    definisjon: {
      kode: '9998',
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
      kodeverk: '',
    },
  } as Aksjonspunkt],
  arbeidsgiverOpplysningerPerId: {
    910909088: {
      erPrivatPerson: false,
      fødselsdato: null,
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
    }],
    inntektsmeldinger: [],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }],
    }],
  },
};

export const SkalAvklareManglendeOpplysninger = Template.bind({});
SkalAvklareManglendeOpplysninger.args = {
  aksjonspunkter: [{
    definisjon: {
      kode: '9999',
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
      kodeverk: '',
    },
  } as Aksjonspunkt],
  arbeidsgiverOpplysningerPerId: {
    342352362: {
      erPrivatPerson: false,
      fødselsdato: null,
      identifikator: '342352362',
      navn: 'Lagt til av saksbehandler',
      referanse: '342352362',
    },
    910909088: {
      erPrivatPerson: false,
      fødselsdato: null,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
      referanse: '910909088',
    },
  },
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [{
      arbeidsgiverIdent: '910909088',
      eksternArbeidsforholdId: 'ARB001-001',
      innsendingstidspunkt: '2021-12-06T10:52:13.377',
      inntektPrMnd: 30000,
      internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      kontaktpersonNavn: 'Corpolarsen',
      kontaktpersonNummer: '41925090',
      motattDato: '2021-12-06',
      refusjonPrMnd: null,
    }],
    inntekter: [{
      arbeidsgiverIdent: '910909088',
      inntekter: [{
        beløp: 40000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2020-07-01',
        tom: '2020-07-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2020-08-01',
        tom: '2020-08-31',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2020-09-01',
        tom: '2020-09-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 40000,
        fom: '2021-11-01',
        tom: '2021-11-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }],
    }],
  },
};

export const SkalKunneLeggTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer = Template.bind({});
SkalKunneLeggTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
  },
  erOverstyrer: true,
};

export const SkalIkkeKunneLeggTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer = Template.bind({});
SkalIkkeKunneLeggTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
  },
};
