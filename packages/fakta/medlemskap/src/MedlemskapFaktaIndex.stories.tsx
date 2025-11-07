import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';

import { lagMedlemskap } from '../.storybook/testdata/lagMedlemskap';
import { MedlemskapFaktaIndex } from './MedlemskapFaktaIndex';

const vilkårForPanel = [
  lagVilkår('FP_VK_2_F', {
    vilkarStatus: 'OPPFYLT',
  }),
  lagVilkår('FP_VK_2', {
    vilkarStatus: 'OPPFYLT',
  }),
];

const meta = {
  title: 'fakta/fakta-medlemskap-v3',
  component: MedlemskapFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    vilkårForPanel,
  },
  render: args => <MedlemskapFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof MedlemskapFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    medlemskap: lagMedlemskap(),
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET)],
  },
};

export const ForutgåendeMedlemskap: Story = {
  args: {
    medlemskap: lagMedlemskap({
      avvik: ['BOSATT_UTENLANDSADRESSE'],
    }),
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR)],
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
      personstatuser: [{ fom: '2022-09-01', tom: TIDENES_ENDE, type: 'BOSA' }],
      regioner: [{ fom: '1971-09-17', tom: TIDENES_ENDE, type: 'NORDEN' }],
    }),
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET)],
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
      lagAksjonspunkt(AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Søker har bodd i Gautemala siden 10.09.2024 ',
      }),
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
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5053, {
        status: 'UTFO',
      }),
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
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5023, {
        status: 'UTFO',
      }),
    ],
  },
};
