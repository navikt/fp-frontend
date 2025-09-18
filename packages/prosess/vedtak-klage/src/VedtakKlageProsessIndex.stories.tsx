import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  BehandlingResultatType,
  KlageAvvistÅrsak,
  KlageMedholdÅrsak,
  KlageVurdering as klageVurderingCodes,
  VilkarType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling, KlageVurdering } from '@navikt/fp-types';

import { VedtakKlageProsessIndex } from './VedtakKlageProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {
    type: BehandlingResultatType.KLAGE_AVVIST,
  },
  behandlingPåVent: false,
} as Behandling;

const aksjonspunkterForPanel: Aksjonspunkt[] = [
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,

    kanLoses: true,
    toTrinnsBehandling: false,

    aksjonspunktType: AksjonspunktType.AUTOPUNKT,
    vilkarType: VilkarType.OMSORGSVILKARET,
    erAktivt: true,
  },
];

const meta = {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  decorators: [withPanelData],
  args: {
    previewVedtakCallback: action('button-click'),
    behandling,
    aksjonspunkterForPanel,
  },
  render: args => <VedtakKlageProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VedtakKlageProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VedtakspanelDerKlageErVurdertAvNk: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        klageMedholdArsak: KlageMedholdÅrsak.PROSESSUELL_FEIL,
        fritekstTilBrev: 'test',
      },
      klageFormkravResultatKA: {
        avvistArsaker: [KlageAvvistÅrsak.IKKE_KONKRET],
      },
    } as KlageVurdering,
  },
};

export const VedtakspanelDerKlageErVurdertAvNfp: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        klageMedholdArsak: KlageMedholdÅrsak.PROSESSUELL_FEIL,
        fritekstTilBrev: 'test',
      },
      klageFormkravResultatKA: {
        avvistArsaker: [KlageAvvistÅrsak.IKKE_KONKRET],
      },
    } as KlageVurdering,
  },
};
