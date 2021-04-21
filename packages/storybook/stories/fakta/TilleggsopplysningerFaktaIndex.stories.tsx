import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import TilleggsopplysningerFaktaIndex from '@fpsak-frontend/fakta-tilleggsopplysninger';
import { Behandling, Soknad } from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
};

const soknad = {
  tilleggsopplysninger: 'Dette er en tilleggsopplysning',
};

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.TILLEGGSOPPLYSNINGER,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  kanLoses: true,
  erAktivt: true,
}];

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
  title: 'fakta/fakta-tilleggsopplysninger',
  component: TilleggsopplysningerFaktaIndex,
  decorators: [withKnobs],
};

export const visAksjonspunktForTilleggsopplysninger = () => (
  <TilleggsopplysningerFaktaIndex
    {...standardFaktaProps}
    behandling={behandling as Behandling}
    soknad={object('soknad', soknad as Soknad)}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
  />
);
