import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import {
  AksjonspunktCode,
  aksjonspunktStatus,
  behandlingStatus,
  behandlingType,
  opplysningAdresseType as OpplysningAdresseType,
  personstatusType,
} from '@navikt/fp-kodeverk';
import { Behandling, MedlemskapAvvik, MedlemskapV3, Soknad } from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import MedlemskapFaktaIndex from './MedlemskapFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import region from '@navikt/fp-kodeverk/src/region';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
  behandlingPaaVent: false,
  status: behandlingStatus.BEHANDLING_UTREDES,
} as Behandling;

export default {
  title: 'fakta/fakta-medlemskap-v3',
  component: MedlemskapFaktaIndex,
};

const Template: StoryFn<{
  medlemskap: MedlemskapV3;
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}> = ({ medlemskap, soknad, aksjonspunkter, submitCallback, alleMerknaderFraBeslutter }) => (
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
    brukerNavn="Ola Nordmann"
    annenpartNavn="Kari Nordmann"
  />
);

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

const lagMedlemskap = (override: Partial<MedlemskapV3>): MedlemskapV3 => ({
  manuellBehandling: {
    avvik: [
      MedlemskapAvvik.BOSATT_UTENLANDSOPPHOLD,
      MedlemskapAvvik.BOSATT_UTENLANDSADRESSE,
      MedlemskapAvvik.BOSATT_MANGLENDE_BOSTEDSADRESSE,
      MedlemskapAvvik.BOSATT_UGYLDIG_PERSONSTATUS,
      MedlemskapAvvik.MEDL_PERIODER,
      MedlemskapAvvik.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD,
      MedlemskapAvvik.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT,
    ],
    resultat: null,
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
      tom: '2021-01-01',
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      beslutningsdato: '2020-02-01',
    },
  ],
  utenlandsopphold: [
    {
      fom: '2019-01-01',
      tom: '2021-01-01',
      landkode: 'DNK',
    },
  ],
  adresser: [
    {
      fom: '2019-01-01',
      tom: '2020-01-01',
      adresse: {
        adresseType: OpplysningAdresseType.BOSTEDSADRESSE,
        adresselinje1: 'Oslogata 1',
        poststed: 'Oslo',
        postNummer: '1234',
        land: 'NOR',
      },
    },
    {
      fom: '2020-01-01',
      tom: '2021-01-01',
      adresse: {
        adresseType: OpplysningAdresseType.POSTADRESSE_UTLAND,
        adresselinje1: 'Mäkelänkatu 1 B',
        poststed: 'Helsinki',
        postNummer: 'FI-00123',
        land: 'FIN',
      },
    },
  ],
  regioner: [
    {
      fom: '2019-01-01',
      tom: '2021-01-01',
      type: region.NORDEN,
    },
  ],
  personstatuser: [
    {
      fom: '2019-01-01',
      tom: '2022-01-01',
      type: personstatusType.BOSATT,
    },
    {
      fom: '2022-01-01',
      tom: '2024-01-01',
      type: personstatusType.UTVANDRET,
    },
  ],
  annenpart: {
    adresser: [
      {
        fom: '2019-01-01',
        tom: '2020-01-01',
        adresse: {
          adresseType: OpplysningAdresseType.BOSTEDSADRESSE,
          adresselinje1: 'Oslogata 1',
          adresselinje2: undefined,
          adresselinje3: undefined,
          poststed: 'Oslo',
          postNummer: '1234',
          land: 'NOR',
        },
      },
      {
        fom: '2020-01-01',
        tom: '2021-01-01',
        adresse: {
          adresseType: OpplysningAdresseType.POSTADRESSE_UTLAND,
          adresselinje1: 'Mäkelänkatu 1 B',
          adresselinje2: undefined,
          adresselinje3: undefined,
          poststed: 'Helsinki',
          postNummer: 'FI-00123',
          land: 'FIN',
        },
      },
    ],
    regioner: [
      {
        fom: '2019-01-01',
        tom: '2021-01-01',
        type: region.ANNET,
      },
    ],
    personstatuser: [
      {
        fom: '2019-01-01',
        tom: '2020-01-01',
        type: personstatusType.BOSATT,
      },
    ],
  },
  ...override,
});

export const Default = Template.bind({});
Default.args = {
  soknad,
  medlemskap: lagMedlemskap({}),
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const LegacyVurderingAvLøpendeMedlemskap = Template.bind({});
LegacyVurderingAvLøpendeMedlemskap.args = {
  soknad,
  medlemskap: lagMedlemskap({
    manuellBehandling: null,
    legacyManuellBehandling: {
      perioder: [
        {
          vurderingsdato: '2018-01-01',
          erEosBorger: true,
          oppholdsrettVurdering: true,
          begrunnelse: 'Eøs borger og har oppholdsrett',
        },
        {
          vurderingsdato: '2018-05-01',
          erEosBorger: true,
          oppholdsrettVurdering: false,
          begrunnelse: 'Eøs borger og har ikke oppholdsrett',
        },
        {
          vurderingsdato: '2019-05-05',
          erEosBorger: false,
          lovligOppholdVurdering: true,
          begrunnelse: 'Ikke eøs borger, men har lovlig opphold',
        },
        {
          vurderingsdato: '2019-05-12',
          bosattVurdering: true,
          begrunnelse: 'Søker er vurdert til bosatt',
        },
        {
          vurderingsdato: '2019-05-23',
          medlemskapManuellVurderingType: 'MEDLEM',
          begrunnelse: 'Søker er medlem jaja',
        },
      ],
    },
  }),
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: undefined,
      kanLoses: false,
    },
  ],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const LegacyVurdertInngangsvilkårMedlemskap = Template.bind({});
LegacyVurdertInngangsvilkårMedlemskap.args = {
  soknad,
  medlemskap: lagMedlemskap({
    manuellBehandling: null,
    legacyManuellBehandling: {
      perioder: [
        {
          vurderingsdato: '2018-01-01',
          erEosBorger: true,
          oppholdsrettVurdering: true,
          begrunnelse: 'Eøs borger og har oppholdsrett',
        },
      ],
    },
  }),
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AVKLAR_OPPHOLDSRETT,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: undefined,
      kanLoses: false,
    },
  ],
  alleMerknaderFraBeslutter: {},
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
