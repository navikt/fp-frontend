import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagAksjonspunkt, type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, KlageVurdering } from '@navikt/fp-types';

import { VedtakKlageProsessIndex } from './VedtakKlageProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {
    type: 'KLAGE_AVVIST',
  },
  behandlingPåVent: false,
} as BehandlingFpSak;

const meta = {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  decorators: [withPanelData],
  args: {
    previewVedtakCallback: action('button-click'),
    behandling,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.FORESLÅ_VEDTAK)],
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
        klageVurdering: 'AVVIS_KLAGE',
        klageMedholdÅrsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test',
      },
      klageFormkravResultatKA: {
        avvistÅrsaker: ['IKKE_KONKRET'],
      },
    } as KlageVurdering,
  },
};

export const VedtakspanelDerKlageErVurdertAvNfp: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: 'AVVIS_KLAGE',
        klageMedholdÅrsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test',
      },
      klageFormkravResultatKA: {
        avvistÅrsaker: ['IKKE_KONKRET'],
      },
    } as KlageVurdering,
  },
};
