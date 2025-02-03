import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AnkeOmgjorArsak, AnkeVurdering as AnkeVurderingKodeverk, AnkeVurderingOmgjoer } from '@navikt/fp-kodeverk';
import { PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import { AnkeVurdering } from '@navikt/fp-types';

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
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_VURDERING,
        ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_UGUNST,
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const OpphevResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const HjemsendResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
        begrunnelse: 'Dette er en begrunnelse',
        ankeOmgjoerArsak: AnkeOmgjorArsak.ULIK_REGELVERKSTOLKNING,
        fritekstTilBrev: 'Dette er en fritekst',
      },
    } as AnkeVurdering,
  },
};

export const AvvisResultat: Story = {
  args: {
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
  },
};

export const StadfestResultat: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ankeVurdering: AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
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
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
        ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST,
      },
      underBehandlingKabal: false,
      behandletAvKabal: true,
    } as AnkeVurdering,
  },
};
