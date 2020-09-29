import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import AnkeResultatProsessIndex from '@fpsak-frontend/prosess-anke-resultat';
import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';

import withReduxProvider from '../../../decorators/withRedux';

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
  ankeVurdering: ankeVurdering.ANKE_AVVIS,
  paAnketBehandlingId: 1,
  erAnkerIkkePart: true,
  erIkkeKonkret: true,
  erFristIkkeOverholdt: true,
  erIkkeSignert: true,
  erSubsidiartRealitetsbehandles: true,
  begrunnelse: 'Dette er en begrunnelse',
};

export default {
  title: 'prosess/anke/prosess-anke-resultat',
  component: AnkeResultatProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visPanelForResultatVedStadfestYtelsesvedtak = () => (
  <AnkeResultatProsessIndex
    behandling={behandling}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
      },
    } as AnkeVurdering)}
    aksjonspunkter={aksjonspunkter}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
    saveAnke={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedOppheveOgHjemsende = () => (
  <AnkeResultatProsessIndex
    behandling={behandling}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
      },
    } as AnkeVurdering)}
    aksjonspunkter={aksjonspunkter}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
    saveAnke={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedOmgjør = () => (
  <AnkeResultatProsessIndex
    behandling={behandling}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: ankeVurdering.ANKE_OMGJOER,
        ankeVurderingOmgjoer: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
        ankeOmgjoerArsakNavn: 'Testårsak',
      },
    } as AnkeVurdering)}
    aksjonspunkter={aksjonspunkter}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
    saveAnke={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedAvvis = () => (
  <AnkeResultatProsessIndex
    behandling={behandling}
    ankeVurdering={object('ankeVurdering', {
      ankeVurderingResultat,
    } as AnkeVurdering)}
    aksjonspunkter={aksjonspunkter}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    isReadOnly={boolean('isReadOnly', false)}
    readOnlySubmitButton={boolean('readOnlySubmitButton', false)}
    saveAnke={action('button-click') as (data: any) => Promise<any>}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);
