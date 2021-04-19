import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

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

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
  decorators: [withKnobs],
};

export const visVedtakspanelDerKlageErVurdertAvNk = () => (
  <VedtakKlageProsessIndex
    {...standardProsessProps}
    klageVurdering={object('klageVurdering', {
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
    } as KlageVurdering)}
    previewVedtakCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visVedtakspanelDerKlageErVurdertAvNfp = () => (
  <VedtakKlageProsessIndex
    {...standardProsessProps}
    klageVurdering={object('klageVurdering', {
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
    } as KlageVurdering)}
    previewVedtakCallback={action('button-click') as (data: any) => Promise<any>}
  />
);
