import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import AnkeVurderingKodeverk from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import { AnkeVurdering } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import AnkeResultatProsessIndex from './AnkeResultatProsessIndex';

const ankeVurderingResultat = {
  ankeVurdering: AnkeVurderingKodeverk.ANKE_AVVIS,
  påAnketKlageBehandlingUuid: '1',
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
};

const Template: Story<{
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: any) => Promise<any>;
}> = ({
  ankeVurdering,
  previewCallback,
}) => (
  <AnkeResultatProsessIndex
    alleKodeverk={alleKodeverk as any}
    ankeVurdering={ankeVurdering}
    previewCallback={previewCallback}
  />
);

export const ResultatVedStadfestYtelsesvedtak = Template.bind({});
ResultatVedStadfestYtelsesvedtak.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ...ankeVurderingResultat,
      ankeVurdering: AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ResultatVedOppheveOgHjemsende = Template.bind({});
ResultatVedOppheveOgHjemsende.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ...ankeVurderingResultat,
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ResultatVedOmgjør = Template.bind({});
ResultatVedOmgjør.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ...ankeVurderingResultat,
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
      ankeVurderingOmgjoer: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
      ankeOmgjoerArsakNavn: 'Testårsak',
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ResultatVedAvvis = Template.bind({});
ResultatVedAvvis.args = {
  ankeVurdering: {
    ankeVurderingResultat,
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};
