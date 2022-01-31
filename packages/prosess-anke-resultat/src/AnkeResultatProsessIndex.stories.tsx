import React from 'react';
import { action } from '@storybook/addon-actions';

import ankeVurdering from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import { Aksjonspunkt, AnkeVurdering, Behandling } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import AnkeResultatProsessIndex from './AnkeResultatProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const aksjonspunkter = [{
  definisjon: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  status: aksjonspunktStatus.OPPRETTET,
  begrunnelse: undefined,
}] as Aksjonspunkt[];

const ankeVurderingResultat = {
  ankeVurdering: ankeVurdering.ANKE_AVVIS,
  påAnketKlageBehandlingUuid: '1',
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
  title: 'prosess/anke/prosess-anke-resultat',
  component: AnkeResultatProsessIndex,
};

export const visPanelForResultatVedStadfestYtelsesvedtak = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={{
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK,
      },
    } as AnkeVurdering}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedOppheveOgHjemsende = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={{
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE,
      },
    } as AnkeVurdering}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedOmgjør = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={{
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: ankeVurdering.ANKE_OMGJOER,
        ankeVurderingOmgjoer: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
        ankeOmgjoerArsakNavn: 'Testårsak',
      },
    } as AnkeVurdering}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visPanelForResultatVedAvvis = () => (
  <AnkeResultatProsessIndex
    {...standardProsessProps}
    ankeVurdering={{
      ankeVurderingResultat,
    } as AnkeVurdering}
    previewCallback={action('button-click') as (data: any) => Promise<any>}
  />
);
