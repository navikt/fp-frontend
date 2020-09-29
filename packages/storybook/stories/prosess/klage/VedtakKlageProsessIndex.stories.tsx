import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakKlageProsessIndex from '@fpsak-frontend/prosess-vedtak-klage';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@fpsak-frontend/types';

import withReduxProvider from '../../../decorators/withRedux';

const alleKodeverk = require('../../mocks/alleKodeverk.json'); // eslint-disable-line

const behandling = {
  id: 1,
  versjon: 1,
  behandlingsresultat: {
    type: {
      kode: behandlingResultatType.KLAGE_AVVIST,
    },
  },
  behandlingPaaVent: false,
} as Behandling;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.FORESLA_VEDTAK,
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
  },
  begrunnelse: undefined,
}] as Aksjonspunkt[];

export default {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visVedtakspanelDerKlageErVurdertAvNk = () => (
  <VedtakKlageProsessIndex
    behandling={behandling}
    klageVurdering={object('klageVurdering', {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        fritekstTilBrev: 'test',
        klageMedholdArsakNavn: 'TEST',
        godkjentAvMedunderskriver: false,
      },
      klageFormkravResultatKA: {
        avvistArsaker: [{
          navn: 'IKKE_KONKRET',
        }],
      } as KlageVurdering['klageFormkravResultatKA'],
    } as KlageVurdering)}
    aksjonspunkter={aksjonspunkter}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    previewVedtakCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    alleKodeverk={alleKodeverk}
  />
);

export const visVedtakspanelDerKlageErVurdertAvNfp = () => (
  <VedtakKlageProsessIndex
    behandling={behandling}
    klageVurdering={object('klageVurdering', {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: klageVurderingCodes.AVVIS_KLAGE,
        fritekstTilBrev: 'test',
        klageMedholdArsakNavn: 'TEST',
        godkjentAvMedunderskriver: false,
      },
      klageFormkravResultatKA: {
        avvistArsaker: [{
          navn: 'IKKE_KONKRET',
        }],
      } as KlageVurdering['klageFormkravResultatKA'],
    } as KlageVurdering)}
    aksjonspunkter={aksjonspunkter}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    previewVedtakCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    alleKodeverk={alleKodeverk}
  />
);
