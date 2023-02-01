import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { ankeOmgjorArsak, ankeVurderingOmgjoer, ankeVurdering as ankeVurderingKodeverk } from '@navikt/fp-kodeverk';
import { AnkeVurdering } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import AnkeTrygderettsbehandlingProsessIndex from './AnkeTrygderettsbehandlingProsessIndex';

export default {
  title: 'prosess/anke/prosess-anke-trygderettsbehandling',
  component: AnkeTrygderettsbehandlingProsessIndex,
};

const Template: Story<{
  ankeVurdering: AnkeVurdering;
}> = ({
  ankeVurdering,
}) => (
  <AnkeTrygderettsbehandlingProsessIndex
    ankeVurdering={ankeVurdering}
    alleKodeverk={alleKodeverk as any}
  />
);

export const ResultatVedOmgjortResultat = Template.bind({});
ResultatVedOmgjortResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      erMerknaderMottatt: true,
      merknadKommentar: 'Dette er en kommentar',
      trygderettVurdering: ankeVurderingKodeverk.ANKE_OMGJOER,
      trygderettOmgjoerArsak: ankeOmgjorArsak.NYE_OPPLYSNINGER,
      trygderettVurderingOmgjoer: ankeVurderingOmgjoer.ANKE_TIL_GUNST,
    },
  } as AnkeVurdering,
};

export const ResultatVedOpphevetResultat = Template.bind({});
ResultatVedOpphevetResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      erMerknaderMottatt: true,
      merknadKommentar: 'Dette er en kommentar',
      trygderettVurdering: ankeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
      trygderettOmgjoerArsak: ankeOmgjorArsak.NYE_OPPLYSNINGER,
    },
  } as AnkeVurdering,
};

export const ResultatVedHjemsendtResultat = Template.bind({});
ResultatVedHjemsendtResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      erMerknaderMottatt: true,
      merknadKommentar: 'Dette er en kommentar',
      trygderettVurdering: ankeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
      trygderettOmgjoerArsak: ankeOmgjorArsak.NYE_OPPLYSNINGER,
    },
  } as AnkeVurdering,
};

export const ResultatVedAvvistResultat = Template.bind({});
ResultatVedAvvistResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      erMerknaderMottatt: true,
      merknadKommentar: 'Dette er en kommentar',
      trygderettVurdering: ankeVurderingKodeverk.ANKE_AVVIS,
    },
  } as AnkeVurdering,
};

export const ResultatVedStadfestetResultat = Template.bind({});
ResultatVedStadfestetResultat.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      erMerknaderMottatt: true,
      merknadKommentar: 'Dette er en kommentar',
      trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
    },
  } as AnkeVurdering,
};

export const ErBehandletIKabel = Template.bind({});
ErBehandletIKabel.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
    },
    behandletAvKabal: true,
  } as AnkeVurdering,
};

export const ErUnderBehandlingIKabel = Template.bind({});
ErUnderBehandlingIKabel.args = {
  ankeVurdering: {
    ankeVurderingResultat: {
      trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
    },
    underBehandlingKabal: true,
  } as AnkeVurdering,
};
