import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { AdresseType, AksjonspunktKode, AksjonspunktStatus, PersonstatusType, Region } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import { type Medlemskap, MedlemskapAvvik, type Soknad } from '@navikt/fp-types';

import { MedlemskapFaktaIndex } from './MedlemskapFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

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

const meta = {
  title: 'fakta/fakta-medlemskap-v3',
  component: MedlemskapFaktaIndex,
  decorators: [withPanelData],
  args: {
    soknad: defaultSoknad,
    submittable: true,
  },
  render: args => <MedlemskapFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof MedlemskapFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const lagMedlemskap = (override: Partial<Medlemskap>): Medlemskap => ({
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
      lovvalgsland: 'Finland',
      studieland: null,
      medlemskapType: 'AVKLARES',
      dekningType: 'OPPHOR',
      beslutningsdato: '2020-02-01',
    },

    {
      fom: '2023-01-01',
      tom: '2024-01-01',
      erMedlem: true,
      lovvalgsland: 'Norge',
      studieland: 'Sverige',
      medlemskapType: 'ENDELIG',
      dekningType: 'FULL',
      beslutningsdato: '2024-09-24',
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
      adresseType: AdresseType.BOSTEDSADRESSE,
      adresselinje1: 'Oslogata 1',
      adresselinje2: null,
      adresselinje3: null,
      poststed: 'Oslo',
      postNummer: '1234',
      land: 'Norge',
    },
    {
      fom: '2020-01-01',
      tom: '2021-01-01',
      adresseType: AdresseType.POSTADRESSE_UTLAND,
      adresselinje1: 'Mäkelänkatu 1B',
      adresselinje2: null,
      adresselinje3: null,
      poststed: 'Helsinki',
      postNummer: 'FI-00123',
      land: 'Finland',
    },
  ],
  regioner: [
    {
      fom: '2019-01-01',
      tom: '2021-01-01',
      type: Region.NORDEN,
    },
  ],
  personstatuser: [
    {
      fom: '2019-01-01',
      tom: '2022-01-01',
      type: PersonstatusType.BOSATT,
    },
    {
      fom: '2024-01-01',
      tom: TIDENES_ENDE,
      type: PersonstatusType.UTVANDRET,
    },
  ],
  annenpart: {
    adresser: [
      {
        fom: '2019-01-01',
        tom: TIDENES_ENDE,
        adresseType: AdresseType.BOSTEDSADRESSE,
        adresselinje1: 'Oslogata 1',
        adresselinje2: null,
        adresselinje3: null,
        poststed: 'Oslo',
        postNummer: '1234',
        land: 'Norge',
      },
      {
        fom: '2020-01-01',
        tom: '2021-01-01',
        adresseType: AdresseType.POSTADRESSE_UTLAND,
        adresselinje1: 'Mäkelänkatu 1B',
        adresselinje2: null,
        adresselinje3: null,
        poststed: 'Helsinki',
        postNummer: 'FI-00123',
        land: 'Finland',
      },
    ],
    regioner: [
      {
        fom: '2019-01-01',
        tom: '2021-01-01',
        type: Region.ANNET,
      },
    ],
    personstatuser: [
      {
        fom: '2019-01-01',
        tom: '2020-01-01',
        type: PersonstatusType.BOSATT,
      },
    ],
  },
  ...override,
});

export const Default: Story = {
  args: {
    medlemskap: lagMedlemskap({}),
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
  },
};

export const ForutgåendeMedlemskap: Story = {
  args: {
    medlemskap: lagMedlemskap({
      legacyManuellBehandling: null,
      manuellBehandlingResultat: null,
      avvik: [MedlemskapAvvik.BOSATT_UTENLANDSADRESSE],
    }),
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
  },
};

export const VurderingAvMedlemskapMedlemskapMedEtAvvik: Story = {
  args: {
    medlemskap: lagMedlemskap({
      legacyManuellBehandling: null,
      manuellBehandlingResultat: null,
      avvik: [MedlemskapAvvik.BOSATT_UTENLANDSADRESSE],
      adresser: [
        {
          fom: '2024-09-10',
          tom: TIDENES_ENDE,
          adresseType: AdresseType.POSTADRESSE_UTLAND,
          adresselinje1: 'Kirkeveien 1',
          adresselinje2: null,
          adresselinje3: null,
          postNummer: null,
          poststed: null,
          land: 'Guatemala',
        },
        {
          fom: '2022-09-01',
          tom: TIDENES_ENDE,
          adresseType: AdresseType.BOSTEDSADRESSE,
          adresselinje1: 'Krattstien 4',
          adresselinje2: null,
          adresselinje3: null,
          postNummer: '9515',
          poststed: 'Alta',
          land: 'Norge',
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
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: true,
      },
    ],
  },
};

export const TidligereVurderingAvMedlemskapMedEtAvvik: Story = {
  args: {
    ...VurderingAvMedlemskapMedlemskapMedEtAvvik.args.medlemskap,
    isReadOnly: true,
    medlemskap: lagMedlemskap({
      ...VurderingAvMedlemskapMedlemskapMedEtAvvik.args.medlemskap,
      manuellBehandlingResultat: {
        avslagskode: '1025',
        medlemFom: null,
        opphørFom: null,
      },
    }),
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Søker har bodd i Gautemala siden 10.09.2024 ',
        kanLoses: false,
      },
    ],
  },
};

export const LegacyVurderingAvLøpendeMedlemskap: Story = {
  args: {
    isReadOnly: true,
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
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_FORTSATT_MEDLEMSKAP,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: undefined,
        kanLoses: false,
      },
    ],
  },
};

export const LegacyVurdertInngangsvilkårMedlemskap: Story = {
  args: {
    isReadOnly: true,
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
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_OPPHOLDSRETT,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: undefined,
        kanLoses: false,
      },
    ],
  },
};
