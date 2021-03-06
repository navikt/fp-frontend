import React from 'react';
import { action } from '@storybook/addon-actions';

import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakKlageProsessIndex from '@fpsak-frontend/prosess-vedtak-klage';
import {
  Aksjonspunkt, Behandling, KlageVurdering, KlageVurderingResultat,
} from '@fpsak-frontend/types';

const alleKodeverk = require('../../mocks/alleKodeverk.json'); // eslint-disable-line

const behandling = {
  uuid: '1',
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

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
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
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
};

export const visVedtakspanelDerKlageErVurdertAvNk = () => (
  <VedtakKlageProsessIndex
    {...standardProsessProps}
    klageVurdering={{
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: {
          kode: klageVurderingCodes.AVVIS_KLAGE,
          kodeverk: 'KLAGEVURDERING',
        },
        klageMedholdArsak: {
          kode: 'PROSESSUELL_FEIL',
          kodeverk: 'KLAGE_MEDHOLD_AARSAK',
        },
        fritekstTilBrev: 'test',
      } as KlageVurderingResultat,
      klageFormkravResultatKA: {
        avvistArsaker: [{
          navn: 'IKKE_KONKRET',
        }],
      },
    } as KlageVurdering}
    previewVedtakCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visVedtakspanelDerKlageErVurdertAvNfp = () => (
  <VedtakKlageProsessIndex
    {...standardProsessProps}
    klageVurdering={{
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: {
          kode: klageVurderingCodes.AVVIS_KLAGE,
          kodeverk: '',
        },
        klageMedholdArsak: {
          kode: 'PROSESSUELL_FEIL',
          kodeverk: 'KLAGE_MEDHOLD_AARSAK',
        },
        fritekstTilBrev: 'test',
      } as KlageVurderingResultat,
      klageFormkravResultatKA: {
        avvistArsaker: [{
          navn: 'IKKE_KONKRET',
        }],
      },
    } as KlageVurdering}
    previewVedtakCallback={action('button-click') as (data: any) => Promise<any>}
  />
);
