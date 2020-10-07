import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Behandling } from '@fpsak-frontend/types';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';

import withReduxProvider from '../../decorators/withRedux';

const behandling = {
  id: 1,
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
  links: [],
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'fakta/fakta-saken',
  component: SakenFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visEndringAvUtland = () => (
  <SakenFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    harApneAksjonspunkter={boolean('harApneAksjonspunkter', false)}
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
