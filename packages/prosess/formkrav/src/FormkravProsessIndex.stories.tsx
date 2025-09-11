import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingTypeEnum,
  KlageVurdering as klageVurderingCodes,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, KlageVurdering } from '@navikt/fp-types';

import { FormkravProsessIndex } from './FormkravProsessIndex';
import type { FormkravMellomlagretDataType } from './types/FormkravMellomlagretDataType';

const avsluttedeBehandlinger = [
  {
    uuid: '1',
    type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    avsluttet: '2017-08-02T00:54:25.455',
  },
];

const meta = {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    lagreFormkravVurdering: action('button-click') as (data: FormkravMellomlagretDataType) => Promise<void>,
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
      mottattDato: '2025-08-26',
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
      mottattDato: '2025-08-26',
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
      mottattDato: '2025-08-26',
    } as KlageVurdering,
    aksjonspunkterForPanel: [],
  },
};
