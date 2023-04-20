import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  aksjonspunktStatus,
  behandlingResultatType,
  klageVurdering as klageVurderingCodes,
  AksjonspunktCode,
} from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, KlageVurdering, KlageVurderingResultat } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import VedtakKlageProsessIndex from './VedtakKlageProsessIndex';

const promiseAction =
  () =>
  (...args) => {
    action('button-click')(...args);
    return Promise.resolve();
  };

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {
    type: behandlingResultatType.KLAGE_AVVIST,
  },
  behandlingPaaVent: false,
} as Behandling;

const aksjonspunkter = [
  {
    definisjon: AksjonspunktCode.FORESLA_VEDTAK,
    status: aksjonspunktStatus.OPPRETTET,
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
