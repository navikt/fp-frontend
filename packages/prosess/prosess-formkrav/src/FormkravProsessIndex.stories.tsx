import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  KlageVurdering as klageVurderingCodes,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, KlageVurdering } from '@navikt/fp-types';

import { FormkravProsessIndex } from './FormkravProsessIndex';

const avsluttedeBehandlinger = [
  {
    uuid: '1',
    type: BehandlingType.FORSTEGANGSSOKNAD,
    avsluttet: '2017-08-02T00:54:25.455',
  },
];

const meta = {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    lagreFormkravVurdering: action('button-click') as (data: any) => Promise<void>,
    readOnlySubmitButton: false,
    avsluttedeBehandlinger,
  },
  render: args => <FormkravProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FormkravProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FormkravPanelForAksjonspunktNfp: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        fritekstTilBrev: 'test',
      },
    } as KlageVurdering,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP,
        status: AksjonspunktStatus.UTFORT,
      },
    ] as Aksjonspunkt[],
  },
};

export const FormkravPanelForAksjonspunktKaIkkePåklagd: Story = {
  args: {
    klageVurdering: {
      klageFormkravResultatKA: {
        begrunnelse: 'Dette er en begrunnelse',
        erKlagefirstOverholdt: true,
        erKlageKonkret: true,
      },
    } as KlageVurdering,
    aksjonspunkterForPanel: [],
  },
};

export const FormkravPanelForAksjonspunktKaValgtBehandling: Story = {
  args: {
    klageVurdering: {
      klageFormkravResultatKA: {
        paKlagdBehandlingUuid: '1',
        begrunnelse: 'Dette er en begrunnelse',
        erKlagerPart: true,
        erSignert: true,
      },
    } as KlageVurdering,
    aksjonspunkterForPanel: [],
  },
};
