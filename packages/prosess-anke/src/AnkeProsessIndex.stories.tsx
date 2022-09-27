import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeOmgjorArsak from '@fpsak-frontend/kodeverk/src/ankeOmgjorArsak';
import AnkeVurderingKodeverk from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { AnkeVurdering } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import AnkeProsessIndex from './AnkeProsessIndex';

export default {
  title: 'prosess/anke/prosess-anke',
  component: AnkeProsessIndex,
};

const Template: Story<{
  ankeVurdering: AnkeVurdering;
  previewCallback: (data: any) => Promise<any>;
}> = ({
  ankeVurdering,
  previewCallback,
}) => (
  <AnkeProsessIndex
    ankeVurdering={ankeVurdering}
    previewCallback={previewCallback}
    behandlinger={[]}
    alleKodeverk={alleKodeverk as any}
  />
);

export const OmjørResultatTilUgunst = Template.bind({});
OmjørResultatTilUgunst.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: ankeOmgjorArsak.ULIK_VURDERING,
      ankeVurderingOmgjoer: ankeVurderingOmgjoer.ANKE_TIL_UGUNST,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const OpphevResultat = Template.bind({});
OpphevResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const HjemsendResultat = Template.bind({});
HjemsendResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvvisResultat = Template.bind({});
AvvisResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_AVVIS,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: ankeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
      erSubsidiartRealitetsbehandles: true,
      erAnkerIkkePart: true,
      erIkkeKonkret: true,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const StadfestResultat = Template.bind({});
StadfestResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
      begrunnelse: 'Dette er en begrunnelse',
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const UnderBehandlingIKabal = Template.bind({});
UnderBehandlingIKabal.args = {
  ankeVurdering: {
    underBehandlingKabal: true,
    behandletAvKabal: false,
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ErBehandletIKabal = Template.bind({});
ErBehandletIKabal.args = {
  ankeVurdering: {
    underBehandlingKabal: false,
    behandletAvKabal: true,
  } as AnkeVurdering,
  previewCallback: action('button-click') as (data: any) => Promise<any>,
};
