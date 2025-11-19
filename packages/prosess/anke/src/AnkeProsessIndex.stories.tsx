import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type { AnkeVurdering } from '@navikt/fp-types';

import { AnkeProsessIndex } from './AnkeProsessIndex';

const meta = {
  title: 'prosess/anke/prosess-anke',
  component: AnkeProsessIndex,
  decorators: [withPanelData],
  args: {
    behandlinger: [],
  },
  render: args => <AnkeProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AnkeProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const OmjørResultatTilUgunst: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: 'ANKE_OMGJOER',
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjørÅrsak: 'ULIK_VURDERING',
        ankeVurderingOmgjør: 'ANKE_TIL_UGUNST',
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const OpphevResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: 'ANKE_OPPHEVE_OG_HJEMSENDE',
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjørÅrsak: 'ULIK_REGELVERKSTOLKNING',
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const HjemsendResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: 'ANKE_HJEMSENDE_UTEN_OPPHEV',
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjørÅrsak: 'ULIK_REGELVERKSTOLKNING',
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const AvvisResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: 'ANKE_AVVIS',
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjørÅrsak: 'ULIK_REGELVERKSTOLKNING',
        erSubsidiartRealitetsbehandles: true,
        erAnkerIkkePart: true,
        erIkkeKonkret: true,
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const StadfestResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
        begrunnelse: 'Dette er en begrunnelse',
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const UnderBehandlingIKabal: Story = {
  args: {
    ankeVurdering: {
      underBehandlingKabal: true,
      behandletAvKabal: false,
    } as AnkeVurdering,
  },
};

export const ErBehandletIKabal: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: 'ANKE_OMGJOER',
        ankeVurderingOmgjør: 'ANKE_DELVIS_OMGJOERING_TIL_GUNST',
        begrunnelse: '',
        erAnkerIkkePart: false,
        erFristIkkeOverholdt: false,
        erIkkeKonkret: false,
        erIkkeSignert: false,
        erSubsidiartRealitetsbehandles: false,
      },
      underBehandlingKabal: false,
      behandletAvKabal: true,
    } as AnkeVurdering,
  },
};
