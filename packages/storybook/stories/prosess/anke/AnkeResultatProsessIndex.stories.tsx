import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import AnkeResultatProsessIndex from '@fpsak-frontend/prosess-anke-resultat';
import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import alleKodeverk from '../../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
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

const ankeVurderingResultat = {
  ankeVurdering: {
    kode: ankeVurdering.ANKE_AVVIS,
    kodeverk: '',
  },
  paAnketBehandlingId: 1,
  erAnkerIkkePart: true,
  erIkkeKonkret: true,
  erFristIkkeOverholdt: true,
  erIkkeSignert: true,
  erSubsidiartRealitetsbehandles: true,
  begrunnelse: 'Dette er en begrunnelse',
};

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
  formData: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/anke/prosess-anke-resultat',
  component: AnkeResultatProsessIndex,
  decorators: [withKnobs],
};

export const visPanelForResultatVedStadfestYtelsesvedtak = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: {
          kode: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
          kodeverk: '',
        },
      },
    } as AnkeVurdering)}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedOppheveOgHjemsende = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: {
          kode: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
          kodeverk: '',
        },
      },
    } as AnkeVurdering)}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedOmgjør = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: {
          kode: ankeVurdering.ANKE_OMGJOER,
          kodeverk: '',
        },
        ankeVurderingOmgjoer: {
          kode: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
          kodeverk: '',
        },
        ankeOmgjoerArsakNavn: 'Testårsak',
      },
    } as AnkeVurdering)}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedAvvis = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat,
    } as AnkeVurdering)}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);
