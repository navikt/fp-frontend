import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type { AnkeVurdering } from '@navikt/fp-types';

import { AnkeTrygderettsbehandlingProsessIndex } from './AnkeTrygderettsbehandlingProsessIndex';

const meta = {
  title: 'prosess/anke/prosess-anke-trygderettsbehandling',
  component: AnkeTrygderettsbehandlingProsessIndex,
  decorators: [withPanelData],
  render: args => <AnkeTrygderettsbehandlingProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AnkeTrygderettsbehandlingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ResultatVedOmgjortResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: 'ANKE_OMGJOER',
        trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER',
        trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST',
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
        trygderettVurdering: 'ANKE_OPPHEVE_OG_HJEMSENDE',
        trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER',
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
        trygderettVurdering: 'ANKE_HJEMSENDE_UTEN_OPPHEV',
        trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER',
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
        trygderettVurdering: 'ANKE_AVVIS',
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
        trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
      },
    } as AnkeVurdering,
  },
};

export const ErBehandletIKabel: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
      },
      behandletAvKabal: true,
    } as AnkeVurdering,
  },
};

export const ErUnderBehandlingIKabel: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
      },
      underBehandlingKabal: true,
    } as AnkeVurdering,
  },
};
