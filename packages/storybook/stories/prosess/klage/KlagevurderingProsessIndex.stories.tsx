import React from 'react';
import { action } from '@storybook/addon-actions';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KlagevurderingProsessIndex from '@fpsak-frontend/prosess-klagevurdering';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
} as Behandling;

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/klage/prosess-klagevurdering',
  component: KlagevurderingProsessIndex,
};

export const visPanelForKlagevurderingMedAksjonspunktNk = () => (
  <KlagevurderingProsessIndex
    {...standardProsessProps}
    klageVurdering={{
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: { kode: klageVurderingCodes.AVVIS_KLAGE, kodeverk: '' },
        fritekstTilBrev: 'test',
        godkjentAvMedunderskriver: false,
      },
      klageFormkravResultatKA: {
        avvistArsaker: [{
          navn: 'Denne er avvist fordi...',
        }],
      },
    } as KlageVurdering}
    saveKlage={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.BEHANDLE_KLAGE_NK,
      },
    }] as Aksjonspunkt[]}
  />
);

export const visPanelForKlagevurderingMedAksjonspunktNfp = () => (
  <KlagevurderingProsessIndex
    {...standardProsessProps}
    klageVurdering={{
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: { kode: klageVurderingCodes.AVVIS_KLAGE, kodeverk: '' },
        fritekstTilBrev: 'test',
        godkjentAvMedunderskriver: false,
      },
      klageFormkravResultatKA: {
        avvistArsaker: [{
          navn: 'Denne er avvist fordi...',
        }],
      },
    } as KlageVurdering}
    saveKlage={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      },
    }] as Aksjonspunkt[]}
  />
);
