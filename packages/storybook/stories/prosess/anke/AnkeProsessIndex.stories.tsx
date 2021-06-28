import React from 'react';
import { action } from '@storybook/addon-actions';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeProsessIndex from '@fpsak-frontend/prosess-anke';
import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE,
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
  title: 'prosess/anke/prosess-anke',
  component: AnkeProsessIndex,
};

export const visPanelForResultatVedStadfestYtelsesvedtak = () => (
  <AnkeProsessIndex
    {...standardProsessProps}
    isReadOnly
    ankeVurdering={{
      ankeVurderingResultat: {
        ankeVurdering: {
          kode: ankeVurdering.ANKE_OMGJOER,
          kodeverk: '',
        },
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: {
          kode: ankeOmgjorArsak.ULIK_VURDERING,
          kodeverk: '',
        },
        ankeVurderingOmgjoer: {
          kode: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
          kodeverk: '',
        },
      },
    } as AnkeVurdering}
    saveAnke={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
    behandlinger={[]}
  />
);
