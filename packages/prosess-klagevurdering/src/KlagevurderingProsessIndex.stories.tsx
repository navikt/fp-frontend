import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KlagevurderingProsessIndex from '@fpsak-frontend/prosess-klagevurdering';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
} as Behandling;

export default {
  title: 'prosess/klage/prosess-klagevurdering',
  component: KlagevurderingProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  mellomlagre: (aksjonspunktData: any) => Promise<void>;
  forhandsvisCallback: (aksjonspunktData: any) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
}> = ({
  submitCallback,
  mellomlagre,
  forhandsvisCallback,
  aksjonspunkter,
}) => (
  <KlagevurderingProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    klageVurdering={{
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: { kode: klageVurderingCodes.AVVIS_KLAGE, kodeverk: '' },
        fritekstTilBrev: 'test',
        godkjentAvMedunderskriver: false,
      },
      klageFormkravResultatKA: {
        avvistArsaker: [{
          kode: 'IKKE_KONKRET',
          kodeverk: 'KLAGE_AVVIST_AARSAK',
        }],
      },
      aktuelleHjemler: [{
        kode: '14-17',
        kodeverk: 'KLAGE_HJEMMEL',
      }],
    } as KlageVurdering}
    saveKlage={mellomlagre}
    previewCallback={forhandsvisCallback}
    aksjonspunkter={aksjonspunkter}
  />
);

export const KlagevurderingMedAksjonspunktNk = Template.bind({});
KlagevurderingMedAksjonspunktNk.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.BEHANDLE_KLAGE_NK,
    },
  }] as Aksjonspunkt[],
};

export const KlagevurderingMedAksjonspunktNfp = Template.bind({});
KlagevurderingMedAksjonspunktNfp.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  mellomlagre: action('button-click') as (data: any) => Promise<any>,
  forhandsvisCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
    },
  }] as Aksjonspunkt[],
};
