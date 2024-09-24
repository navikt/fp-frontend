import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  AksjonspunktCode,
  aksjonspunktStatus,
  behandlingStatus,
  behandlingType,
  fagsakYtelseType,
  opplysningAdresseType,
  personstatusType,
  region,
} from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak, MedlemskapAvvik, MedlemskapV3, Soknad } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

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

const defaultFagsak = {
  bruker: { navn: 'Ola Nordmann' },
  annenPart: { navn: 'Kari Nordmann' },
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const defaultSoknad = {
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
} as Soknad;

export default {
  title: 'fakta/fakta-medlemskap-v3',
  component: MedlemskapFaktaIndex,
};

const Template: StoryFn<{
  medlemskap: MedlemskapV3;
  soknad: Soknad;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  fagsak: Fagsak;
  submitCallback: (aksjonspunktData: any) => Promise<void>;
}> = ({
  medlemskap,
  soknad = defaultSoknad,
  aksjonspunkter,
  readOnly = false,
  fagsak = defaultFagsak,
  submitCallback = action('button-click') as (aksjonspunktData: any) => Promise<void>,
}) => (
  <MedlemskapFaktaIndex
    behandling={behandling}
    medlemskap={medlemskap}
    soknad={soknad}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{}}
    submitCallback={submitCallback}
    readOnly={readOnly}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
    fagsak={fagsak}
  />
);

const lagMedlemskap = (override: Partial<MedlemskapV3>): MedlemskapV3 => ({
  manuellBehandlingResultat: null,
  avvik: [
    MedlemskapAvvik.BOSATT_UTENLANDSOPPHOLD,
    MedlemskapAvvik.BOSATT_UTENLANDSADRESSE,
    MedlemskapAvvik.BOSATT_MANGLENDE_BOSTEDSADRESSE,
    MedlemskapAvvik.BOSATT_UGYLDIG_PERSONSTATUS,
    MedlemskapAvvik.MEDL_PERIODER,
    MedlemskapAvvik.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD,
  ],
  legacyManuellBehandling: null,
  oppholdstillatelser: [
    {
      fom: '2021-10-13',
      tom: '2024-01-13',
      type: 'PERMANENT',
    },
  ],
  medlemskapsperioder: [
    {
      fom: '2019-01-01',
      tom: '2022-01-01',
      erMedlem: false,
      lovvalgsland: null,
      studieland: null,
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      beslutningsdato: '2020-02-01',
    },
    {
      fom: '2022-01-01',
      tom: '2024-01-01',
      erMedlem: true,
      lovvalgsland: 'Spania',
      studieland: 'Irak',
      medlemskapType: 'ENDELIG',
      dekningType: 'FULL',
      beslutningsdato: '2024-02-01',
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
      tom: TIDENES_ENDE,
      adresse: {
        adresseType: opplysningAdresseType.BOSTEDSADRESSE,
        adresselinje1: 'Oslogata 1',
        adresselinje2: null,
        adresselinje3: null,
        poststed: 'Oslo',
        postNummer: '1234',
        land: 'Norge',
      },
    },
    {
      fom: '2020-01-01',
      tom: '2021-01-01',
      adresse: {
        adresseType: opplysningAdresseType.POSTADRESSE_UTLAND,
        adresselinje1: 'Mäkelänkatu 1B',
        adresselinje2: null,
        adresselinje3: null,
        poststed: 'Helsinki',
        postNummer: 'FI-00123',
        land: 'Finland',
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
      fom: '2024-01-01',
      tom: TIDENES_ENDE,
      type: personstatusType.UTVANDRET,
    },
  ],
  annenpart: {
    adresser: [
      {
        fom: '2019-01-01',
        tom: TIDENES_ENDE,
        adresse: {
          adresseType: opplysningAdresseType.BOSTEDSADRESSE,
          adresselinje1: 'Oslogata 1',
          adresselinje2: null,
          adresselinje3: null,
          poststed: 'Oslo',
          postNummer: '1234',
          land: 'Norge',
        },
      },
      {
        fom: '2020-01-01',
        tom: '2021-01-01',
        adresse: {
          adresseType: opplysningAdresseType.POSTADRESSE_UTLAND,
          adresselinje1: 'Mäkelänkatu 1B',
          adresselinje2: null,
          adresselinje3: null,
          poststed: 'Helsinki',
          postNummer: 'FI-00123',
          land: 'Finland',
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
  medlemskap: lagMedlemskap({}),
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
};

export const VurderingAvMedlemskapMedlemskapMedEtAvvik = Template.bind({});
VurderingAvMedlemskapMedlemskapMedEtAvvik.args = {
  medlemskap: lagMedlemskap({
    legacyManuellBehandling: null,
    manuellBehandlingResultat: null,
    avvik: [MedlemskapAvvik.BOSATT_UTENLANDSADRESSE],
    adresser: [
      {
        fom: '2024-09-10',
        tom: TIDENES_ENDE,
        adresse: {
          adresseType: 'POSTADRESSE_UTLAND',
          adresselinje1: 'Kirkeveien 1',
          adresselinje2: null,
          adresselinje3: null,
          postNummer: null,
          poststed: null,
          land: 'Guatemala',
        },
      },
      {
        fom: '2022-09-01',
        tom: TIDENES_ENDE,
        adresse: {
          adresseType: 'BOSTEDSADRESSE',
          adresselinje1: 'Krattstien 4',
          adresselinje2: null,
          adresselinje3: null,
          postNummer: '9515',
          poststed: 'Alta',
          land: 'Norge',
        },
      },
    ],
    annenpart: null,
    medlemskapsperioder: [],
    oppholdstillatelser: [],
    utenlandsopphold: [],
    personstatuser: [{ fom: '2022-09-01', tom: TIDENES_ENDE, type: 'BOSA' }],
    regioner: [{ fom: '1971-09-17', tom: TIDENES_ENDE, type: 'NORDEN' }],
  }),
  soknad: {
    oppgittTilknytning: {
      oppholdNorgeNa: true,
      oppholdSistePeriode: true,
      oppholdNestePeriode: true,
      utlandsoppholdFor: [],
      utlandsoppholdEtter: [],
    } as Soknad['oppgittTilknytning'],
  } as Soknad,
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
};

export const TidligereVurderingAvMedlemskapMedEtAvvik = Template.bind({});
TidligereVurderingAvMedlemskapMedEtAvvik.args = {
  ...VurderingAvMedlemskapMedlemskapMedEtAvvik.args.medlemskap,
  readOnly: true,
  medlemskap: lagMedlemskap({
    ...VurderingAvMedlemskapMedlemskapMedEtAvvik.args.medlemskap,
    manuellBehandlingResultat: {
      avslagskode: '1025',
      medlemFom: null,
      opphørFom: null,
    },
  }),
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
      status: aksjonspunktStatus.UTFORT,
      begrunnelse: 'Søker har bodd i Gautemala siden 10.09.2024 ',
      kanLoses: false,
    },
  ],
};

export const LegacyVurderingAvLøpendeMedlemskap = Template.bind({});
LegacyVurderingAvLøpendeMedlemskap.args = {
  readOnly: true,
  medlemskap: lagMedlemskap({
    manuellBehandlingResultat: null,
    avvik: [],
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
};

export const LegacyVurdertInngangsvilkårMedlemskap = Template.bind({});
LegacyVurdertInngangsvilkårMedlemskap.args = {
  readOnly: true,
  medlemskap: lagMedlemskap({
    manuellBehandlingResultat: null,
    avvik: [],
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
};
