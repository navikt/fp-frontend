import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import tilretteleggingType from '@navikt/fp-kodeverk/src/tilretteleggingType';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  Behandling,
  FodselOgTilrettelegging,
  ArbeidOgInntektsmelding,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import tilretteleggingPermisjon from '../testdata/tilretteleggningMedPermisjon';

import FodselOgTilretteleggingFaktaIndex from './FodselOgTilretteleggingFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const svangerskapspengerTilretteleggingForFrilanser = {
  termindato: '2020-02-27',
  saksbehandlet: false,
  arbeidsforholdListe: [{
    tilretteleggingId: 1008653,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: tilretteleggingType.INGEN_TILRETTELEGGING,
    }],
    arbeidsgiverReferanse: '1',
    skalBrukes: true,
    velferdspermisjoner: [],
  }, {
    tilretteleggingId: 1008654,
    tilretteleggingBehovFom: '2019-10-01',
    tilretteleggingDatoer: [{
      fom: '2019-10-01',
      type: tilretteleggingType.INGEN_TILRETTELEGGING,
    }],
    arbeidsgiverReferanse: '2',
    uttakArbeidType: 'ORDINÆRT_ARBEID',
    skalBrukes: true,
    velferdspermisjoner: [],
  }] as ArbeidsforholdFodselOgTilrettelegging[],
};

const defaultArbeidOgInntekt = {
  arbeidsforhold: [{
    arbeidsgiverIdent: '555864629',
    internArbeidsforholdId: '555864629-null',
  }],
} as ArbeidOgInntektsmelding;

const spesiellArbeidOgInntekt = {
  inntektsmeldinger: [{
    arbeidsgiverIdent: '999999999',
    motattDato: '2020-03-20',
    refusjonPrMnd: 5170.00,
  }],
  arbeidsforhold: [{
    internArbeidsforholdId: '999999999-null',
    arbeidsgiverIdent: '999999999',
    fom: '2019-04-01',
    stillingsprosent: 100.00,
  }],
} as ArbeidOgInntektsmelding;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'Frilanser, samlet aktivitet',
  },
  2: {
    erPrivatPerson: true,
    identifikator: '973861779',
    navn: 'Selvstendig næringsdrivende',
  },
  3: {
    erPrivatPerson: false,
    identifikator: '973861779',
    navn: 'Test',
  },
  555864629: {
    erPrivatPerson: false,
    identifikator: '555864629',
    navn: 'WWW.EIENDOMSDRIFT.CC SA',
  },
  999999999: {
    erPrivatPerson: false,
    identifikator: '999999999',
    navn: 'Arbeidsgiveren AS',
  },
  1111111: {
    erPrivatPerson: false,
    identifikator: '1111111',
    navn: 'STATOIL',
  },
  342352362: {
    referanse: '342352362',
    identifikator: '342352362',
    navn: 'Lagt til av saksbehandler',
    fødselsdato: null,
    erPrivatPerson: false,
  },
};

export default {
  title: 'fakta/fakta-fodsel-og-tilrettelegging',
  component: FodselOgTilretteleggingFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  erOverstyrer?: boolean;
}> = ({
  aksjonspunkter,
  submitCallback,
  svangerskapspengerTilrettelegging,
  arbeidOgInntekt,
  erOverstyrer = false,
}) => (
  <FodselOgTilretteleggingFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    behandling={behandling}
    svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
    aksjonspunkter={aksjonspunkter}
    erOverstyrer={erOverstyrer}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    alleKodeverk={alleKodeverk as any}
    arbeidOgInntekt={arbeidOgInntekt}
  />
);

export const TilretteleggingMedVelferdspermisjon = Template.bind({});
TilretteleggingMedVelferdspermisjon.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: tilretteleggingPermisjon,
  arbeidOgInntekt: spesiellArbeidOgInntekt,
};

export const AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende = Template.bind({});
AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: svangerskapspengerTilretteleggingForFrilanser,
  arbeidOgInntekt: defaultArbeidOgInntekt,
};

export const ErOverstyrer = Template.bind({});
ErOverstyrer.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.FODSELTILRETTELEGGING,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  svangerskapspengerTilrettelegging: tilretteleggingPermisjon,
  arbeidOgInntekt: spesiellArbeidOgInntekt,
  erOverstyrer: true,
};
