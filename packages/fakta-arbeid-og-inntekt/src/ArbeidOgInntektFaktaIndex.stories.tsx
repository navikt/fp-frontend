import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, Behandling,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
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
  erOverstyrer?: boolean;
  readOnly?: boolean;
}> = ({
  aksjonspunkter = [],
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  erOverstyrer = false,
  readOnly = false,
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
    readOnly={readOnly}
    submitCallback={() => undefined}
    alleKodeverk={alleKodeverk as any}
    setFormData={() => undefined}
    arbeidOgInntekt={arbeidOgInntekt}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    lagreNyttArbeidsforhold={promiseAction()}
    slettNyttArbeidsforhold={promiseAction()}
    lagreManglendeArbeidsforhold={promiseAction()}
    lagreManglendeInntekstmelding={promiseAction()}
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

export const InnhentInntektsmeldingDerBehandlingErAvsluttet = Template.bind({});
InnhentInntektsmeldingDerBehandlingErAvsluttet.args = {
  aksjonspunkter: [{
    definisjon: {
      kode: '9998',
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
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
      begrunnelse: 'Vil innehente inntektsmelding fordi...',
      skalInnhenteInntektsmelding: true,
    }],
    inntektsmeldinger: [],
    inntekter: [],
  },
  readOnly: true,
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

export const AvklarManglendeOpplysningerDerBehandlingErAvsluttet = Template.bind({});
AvklarManglendeOpplysningerDerBehandlingErAvsluttet.args = {
  aksjonspunkter: [{
    definisjon: {
      kode: '9999',
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
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
      refusjonPrMnd: null,
      begrunnelse: 'Jeg opprettet arbeidsforhold fordi...',
    }],
    inntekter: [],
  },
  readOnly: true,
};

export const SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer = Template.bind({});
SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
  },
  erOverstyrer: true,
};

export const SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer = Template.bind({});
SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer.args = {
  arbeidOgInntekt: {
    arbeidsforhold: [],
    inntektsmeldinger: [],
    inntekter: [],
  },
};

export const ArbeidsforholdErManueltLagtTilOgLagret = Template.bind({});
ArbeidsforholdErManueltLagtTilOgLagret.args = {
  arbeidsgiverOpplysningerPerId: {
    [MANUELT_ORG_NR]: {
      erPrivatPerson: false,
      fødselsdato: null,
      identifikator: MANUELT_ORG_NR,
      navn: 'Manuelt lagt til arbeidsforholdnavn',
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
    }],
    inntektsmeldinger: [],
    inntekter: [],
  },
  erOverstyrer: true,
};

export const ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet = Template.bind({});
ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet.args = {
  arbeidsgiverOpplysningerPerId: {
    [MANUELT_ORG_NR]: {
      erPrivatPerson: false,
      fødselsdato: null,
      identifikator: MANUELT_ORG_NR,
      navn: 'Manuelt lagt til arbeidsforholdnavn',
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
    }],
    inntektsmeldinger: [],
    inntekter: [],
  },
  erOverstyrer: true,
  readOnly: true,
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
      refusjonPrMnd: 20000,
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

export const FlereArbeidsforholdOgInntekstemeldinger = Template.bind({});
FlereArbeidsforholdOgInntekstemeldinger.args = {
  aksjonspunkter: [{
    definisjon: {
      kode: '9998',
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
      kodeverk: '',
    },
  }, {
    definisjon: {
      kode: '9999',
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
      kodeverk: '',
    },
  }] as Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: {
    910909088: {
      erPrivatPerson: false,
      fødselsdato: null,
      identifikator: '910909088',
      navn: 'BEDRIFT AS',
      referanse: '910909088',
    },
    910909090: {
      erPrivatPerson: false,
      fødselsdato: null,
      identifikator: '910909090',
      navn: 'Autoservice AS',
      referanse: '910909090',
    },
    910909092: {
      erPrivatPerson: false,
      fødselsdato: null,
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
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      stillingsprosent: 100,
      tom: '9999-12-31',
    }, {
      arbeidsgiverIdent: '910909090',
      eksternArbeidsforholdId: 'ARB001-002',
      fom: '2019-06-06',
      internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
      stillingsprosent: 80,
      tom: '2021-12-31',
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
    }, {
      arbeidsgiverIdent: '910909090',
      inntekter: [{
        beløp: 30000,
        fom: '2020-06-01',
        tom: '2020-06-30',
        type: {
          kode: 'LØNN',
          kodeverk: 'INNTEKTSPOST_TYPE',
        },
      }, {
        beløp: 31000,
        fom: '2021-07-01',
        tom: '2021-07-31',
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
