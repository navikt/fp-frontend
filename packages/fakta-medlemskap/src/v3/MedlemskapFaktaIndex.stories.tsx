import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import {
  behandlingStatus,
  behandlingType,
  opplysningAdresseType as OpplysningAdresseType,
} from '@navikt/fp-kodeverk';
import { Behandling, MedlemskapV3, Soknad } from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import MedlemskapFaktaIndex from './MedlemskapFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
  behandlingPaaVent: false,
  status: behandlingStatus.BEHANDLING_UTREDES,
} as Behandling;

const soknad = {
  oppgittFordeling: {
    startDatoForPermisjon: '2019-01-01',
  },
  oppgittTilknytning: {
    oppholdNorgeNa: true,
    oppholdNestePeriode: true,
    oppholdSistePeriode: true,
    utlandsoppholdFor: [
      {
        landNavn: 'SVERIGE',
        fom: '2010-01-01',
        tom: '2011-01-01',
      },
    ],
    utlandsoppholdEtter: [
      {
        landNavn: 'DANMARK',
        fom: '2018-01-01',
        tom: '2019-01-01',
      },
    ],
  },
  termindato: '2018-01-01',
} as Soknad;

export default {
  title: 'fakta/fakta-medlemskap-v3',
  component: MedlemskapFaktaIndex,
};

const Template: StoryFn<{
  medlemskap: MedlemskapV3;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}> = ({ medlemskap, aksjonspunkter, submitCallback, alleMerknaderFraBeslutter }) => (
  <MedlemskapFaktaIndex
    behandling={behandling}
    medlemskap={medlemskap}
    soknad={soknad}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
  />
);

export const Default = Template.bind({});
Default.args = {
  medlemskap: {
    aksjonspunkt: {
      årsaker: ['OPPHOLDSRETT'],
    },
    oppholdstillatelser: [
      {
        fom: '2019-01-01',
        tom: '2021-10-13',
        oppholdstillatelseType: 'MIDLERTIDIG',
      },
      {
        fom: '2019-01-01',
        tom: '2021-01-13',
        oppholdstillatelseType: 'MIDLERTIDIG',
      },
    ],
    medlemskapsperiode: [
      {
        fom: '2019-01-01',
        tom: '2021-10-13',
        medlemskapType: 'AVKLARES',
        dekningType: 'OPPHOR',
        beslutningsdato: '2020-02-01',

      },
    ],
    utenlandsopphold: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      landkode: 'DNK'
    }],
    adresser: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      adresse: {
        adresseType: OpplysningAdresseType.BOSTEDSADRESSE,
        adresselinje1: 'Adresse 1',
        adresselinje2: 'Adresse 2',
        adresselinje3: 'Adresse 3',
        poststed: 'poststed',
        postNummer: '1234',
      }
    }],
    regioner: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      type: 'NORDEN',
    }],
    personstatuser: [{
      fom: '2019-01-01',
      tom: '2021-10-13',
      type: 'BOSATT',
    }],
  },
  aksjonspunkter: [],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
