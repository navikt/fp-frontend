import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
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

const avsluttedeBehandlinger = [{
  id: 1,
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
  avsluttet: '2017-08-02T00:54:25.455',
}];

export default {
  title: 'prosess/klage/prosess-formkrav',
  component: FormkravProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visFormkravPanelForAksjonspunktNfp = () => (
  <FormkravProsessIndex
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
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    readOnlySubmitButton={boolean('readOnly', false)}
    alleKodeverk={alleKodeverk as any}
    avsluttedeBehandlinger={avsluttedeBehandlinger}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP,
      },
    }] as Aksjonspunkt[]}
  />
);

export const visFormkravPanelForAksjonspunktKa = () => (
  <FormkravProsessIndex
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
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    readOnlySubmitButton={boolean('readOnly', false)}
    alleKodeverk={alleKodeverk as any}
    avsluttedeBehandlinger={avsluttedeBehandlinger}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
      },
    }] as Aksjonspunkt[]}
  />
);
