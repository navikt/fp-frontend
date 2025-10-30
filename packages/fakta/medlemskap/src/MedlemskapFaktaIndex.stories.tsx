import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagVilkår, type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import { type Aksjonspunkt, type Medlemskap, type Soknad } from '@navikt/fp-types';

import { MedlemskapFaktaIndex } from './MedlemskapFaktaIndex';

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

const vilkårForPanel = [
  lagVilkår('FP_VK_2_F', {
    vilkarStatus: 'OPPFYLT',
  }),
  lagVilkår('FP_VK_2', {
    vilkarStatus: 'OPPFYLT',
  }),
];

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE,
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;

const meta = {
  title: 'fakta/fakta-medlemskap-v3',
  component: MedlemskapFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad: defaultSoknad,
    vilkårForPanel,
  },
  render: args => <MedlemskapFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof MedlemskapFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const lagMedlemskap = (override: Partial<Medlemskap>): Medlemskap => ({
  avvik: [
    'BOSATT_UTENLANDSOPPHOLD',
    'BOSATT_UTENLANDSADRESSE',
    'BOSATT_MANGLENDE_BOSTEDSADRESSE',
    'BOSATT_UGYLDIG_PERSONSTATUS',
    'MEDL_PERIODER',
    'TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD',
  ],

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
      adresseType: 'BOSTEDSADRESSE',
      adresselinje1: 'Oslogata 1',

      poststed: 'Oslo',
      postNummer: '1234',
      land: 'Norge',
    },
    {
      fom: '2020-01-01',
      tom: '2021-01-01',
      adresseType: 'POSTADRESSE_UTLAND',
      adresselinje1: 'Mäkelänkatu 1B',

      poststed: 'Helsinki',
      postNummer: 'FI-00123',
      land: 'Finland',
    },
  ],
  regioner: [
    {
      fom: '2019-01-01',
      tom: '2021-01-01',
      type: 'NORDEN',
    },
  ],
  personstatuser: [
    {
      fom: '2019-01-01',
      tom: '2022-01-01',
      type: 'BOSA',
    },
    {
      fom: '2024-01-01',
      tom: TIDENES_ENDE,
      type: 'UTVA',
    },
  ],
  annenpart: {
    adresser: [
      {
        fom: '2019-01-01',
        tom: TIDENES_ENDE,
        adresseType: 'BOSTEDSADRESSE',
        adresselinje1: 'Oslogata 1',

        poststed: 'Oslo',
        postNummer: '1234',
        land: 'Norge',
      },
      {
        fom: '2020-01-01',
        tom: '2021-01-01',
        adresseType: 'POSTADRESSE_UTLAND',
        adresselinje1: 'Mäkelänkatu 1B',

        poststed: 'Helsinki',
        postNummer: 'FI-00123',
        land: 'Finland',
      },
    ],
    regioner: [
      {
        fom: '2019-01-01',
        tom: '2021-01-01',
        type: 'ANNET',
      },
    ],
    personstatuser: [
      {
        fom: '2019-01-01',
        tom: '2020-01-01',
        type: 'BOSA',
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
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
  },
};

export const ForutgåendeMedlemskap: Story = {
  args: {
    medlemskap: lagMedlemskap({
      avvik: ['BOSATT_UTENLANDSADRESSE'],
    }),
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
        status: 'OPPR',

        kanLoses: true,
      },
    ],
  },
};

export const VurderingAvMedlemskapMedlemskapMedEtAvvik: Story = {
  args: {
    medlemskap: lagMedlemskap({
      avvik: ['BOSATT_UTENLANDSADRESSE'],
      adresser: [
        {
          fom: '2024-09-10',
          tom: TIDENES_ENDE,
          adresseType: 'POSTADRESSE_UTLAND',
          adresselinje1: 'Kirkeveien 1',

          land: 'Guatemala',
        },
        {
          fom: '2022-09-01',
          tom: TIDENES_ENDE,
          adresseType: 'BOSTEDSADRESSE',
          adresselinje1: 'Krattstien 4',

          postNummer: '9515',
          poststed: 'Alta',
          land: 'Norge',
        },
      ],
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
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
        status: 'OPPR',

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
      },
    }),
    aksjonspunkterForPanel: [
      {
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
        status: 'UTFO',
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
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.UTGÅTT_5053,
        status: 'UTFO',

        kanLoses: false,
      },
    ],
  },
};

export const LegacyVurdertInngangsvilkårMedlemskap: Story = {
  args: {
    isReadOnly: true,
    medlemskap: lagMedlemskap({
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
        ...aksjonspunktDefault,
        definisjon: AksjonspunktKode.UTGÅTT_5023,
        status: 'UTFO',

        kanLoses: false,
      },
    ],
  },
};
