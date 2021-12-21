import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, Behandling, KlageVurdering, KlageVurderingResultat,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import VedtakKlageProsessIndex from './VedtakKlageProsessIndex';

const promiseAction = () => (...args) => {
  action('button-click')(...args);
  return Promise.resolve();
};

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

export default {
  title: 'prosess/klage/prosess-vedtak-klage',
  component: VedtakKlageProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  previewVedtakCallback: () => Promise<void>;
  klageVurdering: KlageVurdering,
}> = ({
  submitCallback,
  previewVedtakCallback,
  klageVurdering,
}) => (
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
        kode: 'IKKE_KONKRET',
        kodeverk: 'KLAGE_AVVIST_AARSAK',
      }],
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
        kode: 'IKKE_KONKRET',
        kodeverk: 'KLAGE_AVVIST_AARSAK',
      }],
    },
  } as KlageVurdering,
};
