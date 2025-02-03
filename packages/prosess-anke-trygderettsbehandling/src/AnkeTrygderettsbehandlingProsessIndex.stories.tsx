import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AnkeOmgjorArsak, AnkeVurdering as ankeVurderingKodeverk, AnkeVurderingOmgjoer } from '@navikt/fp-kodeverk';
import { PanelContextArgs, withPanelContext } from '@navikt/fp-storybook-utils';
import { AnkeVurdering } from '@navikt/fp-types';

import { AnkeTrygderettsbehandlingProsessIndex } from './AnkeTrygderettsbehandlingProsessIndex';

const meta = {
  title: 'prosess/anke/prosess-anke-trygderettsbehandling',
  component: AnkeTrygderettsbehandlingProsessIndex,
  decorators: [withPanelContext],
  render: args => <AnkeTrygderettsbehandlingProsessIndex {...args} />,
} satisfies Meta<PanelContextArgs & ComponentProps<typeof AnkeTrygderettsbehandlingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ResultatVedOmgjortResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_OMGJOER,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER,
        trygderettVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_GUNST,
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedOpphevetResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER,
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedHjemsendtResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER,
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedAvvistResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_AVVIS,
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedStadfestetResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
      },
    } as AnkeVurdering,
  },
};

export const ErBehandletIKabel: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
      },
      behandletAvKabal: true,
    } as AnkeVurdering,
  },
};

export const ErUnderBehandlingIKabel: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
      },
      underBehandlingKabal: true,
    } as AnkeVurdering,
  },
};
