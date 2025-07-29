import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, FarSøkerType, SoknadType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { AdopsjonFaktaIndex } from './AdopsjonFaktaIndex';

const familieHendelse = {
  gjeldende: {
    adopsjonFodelsedatoer: {
      1: '2018-01-01',
      2: '2000-01-02',
    } as Record<number, string>,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as Record<number, string>,
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: SoknadType.FODSEL,
  farSokerType: FarSøkerType.ADOPTERER_ALENE,
  omsorgsovertakelseDato: '2022-09-14',
  barnetsAnkomstTilNorgeDato: '2022-09-13',
} as Soknad;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-adopsjon',
  component: AdopsjonFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    familiehendelse: familieHendelse,
    submittable: true,
    isForeldrepengerFagsak: true,
  },
  render: args => <AdopsjonFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AdopsjonFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktForAdopsjonsvilkåret: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.ADOPSJONSDOKUMENTAJON]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktForOmSøkerErMannSomAdoptererAlene: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE]: merknaderFraBeslutter,
    },
  },
};

export const AksjonspunktForOmAdopsjonGjelderEktefellesBarn: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
    },
  },
};

export const IkkeVisBarnetsAnkomstDatoForEngangsstønad: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: null,
        kanLoses: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]: merknaderFraBeslutter,
    },
    isForeldrepengerFagsak: false,
  },
};
