import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingResultatType,
  KlageVurdering as klageVurderingCodes,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, KlageVurdering, KlageVurderingResultat } from '@navikt/fp-types';

import VedtakKlageProsessIndex from './VedtakKlageProsessIndex';

const promiseAction =
  () =>
  (...args: any[]) => {
    action('button-click')(...args);
    return Promise.resolve();
  };

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {
    type: BehandlingResultatType.KLAGE_AVVIST,
  },
  behandlingPaaVent: false,
} as Behandling;

const aksjonspunkter = [
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  },
] as Aksjonspunkt[];

const meta = {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  args: {
    submitCallback: promiseAction(),
    previewVedtakCallback: action('button-click') as () => Promise<any>,
    behandling,
    alleKodeverk: alleKodeverk as any,
    aksjonspunkter,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    status: '',
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof VedtakKlageProsessIndex>;
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
