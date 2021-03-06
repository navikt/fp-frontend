import React from 'react';
import { action } from '@storybook/addon-actions';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { Aksjonspunkt, Behandling, KlageVurdering } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
} as Behandling;

const avsluttedeBehandlinger = [{
  uuid: '1',
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
  avsluttet: '2017-08-02T00:54:25.455',
}];

export default {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
};

export const visFormkravPanelForAksjonspunktNfp = () => (
  <FormkravProsessIndex
    behandling={behandling}
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
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={false}
    readOnlySubmitButton={false}
    alleKodeverk={alleKodeverk as any}
    avsluttedeBehandlinger={avsluttedeBehandlinger}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP,
      },
    }] as Aksjonspunkt[]}
    alleMerknaderFraBeslutter={{}}
    status=""
    vilkar={[]}
    isAksjonspunktOpen={false}
    setFormData={() => undefined}
  />
);

export const visFormkravPanelForAksjonspunktKa = () => (
  <FormkravProsessIndex
    behandling={behandling}
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
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={false}
    readOnlySubmitButton={false}
    alleKodeverk={alleKodeverk as any}
    avsluttedeBehandlinger={avsluttedeBehandlinger}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
      },
    }] as Aksjonspunkt[]}
    alleMerknaderFraBeslutter={{}}
    status=""
    vilkar={[]}
    isAksjonspunktOpen={false}
    setFormData={() => undefined}
  />
);
