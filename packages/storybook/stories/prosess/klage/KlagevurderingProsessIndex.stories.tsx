import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KlagevurderingProsessIndex from '@fpsak-frontend/prosess-klagevurdering';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@fpsak-frontend/types';

import withReduxProvider from '../../../decorators/withRedux';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
} as Behandling;

export default {
  title: 'prosess/klage/prosess-klagevurdering',
  component: KlagevurderingProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visPanelForKlagevurderingMedAksjonspunktNk = () => (
  <KlagevurderingProsessIndex
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
          navn: 'Denne er avvist fordi...',
        }],
      },
    } as KlageVurdering)}
    saveKlage={action('button-click') as (data: any) => Promise<any>}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
    readOnlySubmitButton={boolean('readOnly', false)}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.BEHANDLE_KLAGE_NK,
      },
    }] as Aksjonspunkt[]}
  />
);

export const visPanelForKlagevurderingMedAksjonspunktNfp = () => (
  <KlagevurderingProsessIndex
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
          navn: 'Denne er avvist fordi...',
        }],
      },
    } as KlageVurdering)}
    saveKlage={action('button-click') as (data: any) => Promise<any>}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
    readOnlySubmitButton={boolean('readOnly', false)}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
      },
    }] as Aksjonspunkt[]}
  />
);
