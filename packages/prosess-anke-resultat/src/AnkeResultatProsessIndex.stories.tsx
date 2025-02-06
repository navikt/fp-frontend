import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AnkeVurdering as AnkeVurderingKodeverk, AnkeVurderingOmgjoer } from '@navikt/fp-kodeverk';
import { PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import { AnkeVurdering } from '@navikt/fp-types';

import { AnkeResultatProsessIndex } from './AnkeResultatProsessIndex';

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

const meta = {
  title: 'prosess/anke/prosess-anke-resultat',
  component: AnkeResultatProsessIndex,
  decorators: [withPanelData],
  render: args => <AnkeResultatProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AnkeResultatProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ResultatVedStadfestYtelsesvedtak: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedOppheveOgHjemsende: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedOmgjør: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
        ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_UGUNST,
        ankeOmgjoerArsakNavn: 'Testårsak',
      },
    } as AnkeVurdering,
  },
};

export const ResultatVedAvvis: Story = {
  args: {
    ankeVurdering: {
      ankeVurderingResultat,
    } as AnkeVurdering,
  },
};
