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
          dato: '2021-11-10',
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
    slettNyttArbeidsforhold={action('button-click') as (data: any) => Promise<any>}
    lagreManglendeArbeidsforhold={action('button-click') as (data: any) => Promise<any>}
    lagreManglendeInntekstmelding={action('button-click') as (data: any) => Promise<any>}
    erOverstyrer={erOverstyrer}
  />
);

export const InnhentInntektsmelding = Template.bind({});
InnhentInntektsmelding.args = {
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
        beløp: 41000,
        fom: '2021-07-01',
        tom: '2021-07-31',
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

export const InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret = Template.bind({});
InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret.args = {
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
    inntekter: [],
  },
};

export const AvklarManglendeOpplysninger = Template.bind({});
AvklarManglendeOpplysninger.args = {
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
    inntekter: [],
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

export const ArbeidsforholdErOK = Template.bind({});
ArbeidsforholdErOK.args = {
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
