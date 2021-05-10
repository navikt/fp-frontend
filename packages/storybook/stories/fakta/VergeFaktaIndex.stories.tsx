import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import VergeFaktaIndex from '@fpsak-frontend/fakta-verge';
import { Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
};

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.AVKLAR_VERGE,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
  kanLoses: true,
  erAktivt: true,
}];

const verge = {};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
  decorators: [withKnobs],
};

export const visAksjonspunktForAvklaringAvVerge = () => (
  <VergeFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    verge={verge}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_VERGE]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);
