import React from 'react';
import { action } from '@storybook/addon-actions';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeTrygderettsbehandlingProsessIndex from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
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
  formData: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/anke/prosess-anke-trygderettsbehandling',
  component: AnkeTrygderettsbehandlingProsessIndex,
};

export const visPanelForResultatVedStadfestYtelsesvedtak = () => (
  <AnkeTrygderettsbehandlingProsessIndex
    {...standardProsessProps}
    ankeVurdering={{
      ankeVurderingResultat: {
        ankeVurdering: {
          kode: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
          kodeverk: '',
        },
        begrunnelse: 'Dette er en begrunnelse',
      },
    } as AnkeVurdering}
  />
);
