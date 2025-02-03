import { ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingResultatType,
  KlageVurdering as klageVurderingCodes,
} from '@navikt/fp-kodeverk';
import { PanelContextArgs, withPanelContext } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, KlageVurdering, KlageVurderingResultat } from '@navikt/fp-types';

import { VedtakKlageProsessIndex } from './VedtakKlageProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {
    type: BehandlingResultatType.KLAGE_AVVIST,
  },
  behandlingPaaVent: false,
} as Behandling;

const aksjonspunkterForPanel = [
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  },
] as Aksjonspunkt[];

const meta = {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  decorators: [withPanelContext],
  args: {
    previewVedtakCallback: action('button-click') as () => Promise<any>,
    behandling,
    aksjonspunkterForPanel,
  },
  render: args => <VedtakKlageProsessIndex {...args} />,
} satisfies Meta<PanelContextArgs & ComponentProps<typeof VedtakKlageProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VedtakspanelDerKlageErVurdertAvNk: Story = {
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        klageMedholdArsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test',
      } as KlageVurderingResultat,
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
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
        klageMedholdArsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test',
      } as KlageVurderingResultat,
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET'],
      },
    } as KlageVurdering,
  },
};
