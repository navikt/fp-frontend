import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingResultatType,
  KlageVurdering as klageVurderingCodes,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, KlageVurdering, KlageVurderingResultat } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

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

export default {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  previewVedtakCallback: () => Promise<void>;
  klageVurdering: KlageVurdering;
}> = ({ submitCallback, previewVedtakCallback, klageVurdering }) => (
  <VedtakKlageProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    klageVurdering={klageVurdering}
    previewVedtakCallback={previewVedtakCallback}
    fagsak={{} as Fagsak}
  />
);

export const VedtakspanelDerKlageErVurdertAvNk = Template.bind({});
VedtakspanelDerKlageErVurdertAvNk.args = {
  submitCallback: promiseAction(),
  previewVedtakCallback: action('button-click') as () => Promise<any>,
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
};

export const VedtakspanelDerKlageErVurdertAvNfp = Template.bind({});
VedtakspanelDerKlageErVurdertAvNfp.args = {
  submitCallback: promiseAction(),
  previewVedtakCallback: action('button-click') as () => Promise<any>,
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
};
