import React from 'react';
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Behandling } from '@fpsak-frontend/types';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 2,
  status: {
    kode: behandlingStatus.BEHANDLING_UTREDES,
    kodeverk: 'BEHANDLING_STATUS',
  },
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: 'BEHANDLING_TYPE',
  },
  behandlingPaaVent: false,
  behandlingHenlagt: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  alleKodeverk: alleKodeverk as any,
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
};

export const visEndringAvUtland = () => (
  <SakenFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    harApneAksjonspunkter={false}
  />
);

export const visApentAksjonspunktForInnhentingAvDokumentasjon = () => (
  <SakenFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        kodeverk: 'AP_DEF',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: 'AP_STATUS',
      },
      kanLoses: true,
      erAktivt: true,
    }]}
  />
);

export const visAtAksjonspunktIkkeErGodkjentAvBeslutter = () => (
  <SakenFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
        kodeverk: 'AP_DEF',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: 'AP_STATUS',
      },
      kanLoses: true,
      erAktivt: true,
    }]}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK]: {
        notAccepted: true,
      },
    }}
  />
);
