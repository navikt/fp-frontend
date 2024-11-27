import React from 'react';

import { StoryFn } from '@storybook/react';

import { AnkeOmgjorArsak, AnkeVurdering as AnkeVurderingKodeverk,AnkeVurderingOmgjoer } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { AnkeVurdering } from '@navikt/fp-types';

import AnkeProsessIndex from './AnkeProsessIndex';

export default {
  title: 'prosess/anke/prosess-anke',
  component: AnkeProsessIndex,
};

const Template: StoryFn<{
  ankeVurdering: AnkeVurdering;
}> = ({ ankeVurdering }) => (
  <AnkeProsessIndex ankeVurdering={ankeVurdering} behandlinger={[]} alleKodeverk={alleKodeverk as any} />
);

export const OmjørResultatTilUgunst = Template.bind({});
OmjørResultatTilUgunst.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_VURDERING,
      ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_UGUNST,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
};

export const OpphevResultat = Template.bind({});
OpphevResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
};

export const HjemsendResultat = Template.bind({});
HjemsendResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
};

export const AvvisResultat = Template.bind({});
AvvisResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_AVVIS,
      begrunnelse: 'Dette er en begrunnelse',
      ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
      erSubsidiartRealitetsbehandles: true,
      erAnkerIkkePart: true,
      erIkkeKonkret: true,
      fritekstTilBrev: 'Dette er en fritekst',
    },
  } as AnkeVurdering,
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
};

export const UnderBehandlingIKabal = Template.bind({});
UnderBehandlingIKabal.args = {
  ankeVurdering: {
    underBehandlingKabal: true,
    behandletAvKabal: false,
  } as AnkeVurdering,
};

export const ErBehandletIKabal = Template.bind({});
ErBehandletIKabal.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
      ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST,
    },
    underBehandlingKabal: false,
    behandletAvKabal: true,
  } as AnkeVurdering,
};
