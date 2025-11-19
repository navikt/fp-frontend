import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';

import { AnkeResultatProsessIndex } from './AnkeResultatProsessIndex';

const ankeVurderingResultat = {
  ankeVurdering: 'ANKE_AVVIS',
  ankeVurderingOmgjør: '-',
  påAnketKlageBehandlingUuid: '1',
  erAnkerIkkePart: true,
  erIkkeKonkret: true,
  erFristIkkeOverholdt: true,
  erIkkeSignert: true,
  erSubsidiartRealitetsbehandles: true,
  begrunnelse: 'Dette er en begrunnelse',

  ankeOmgjørÅrsak: '-',

  trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
  trygderettOmgjørÅrsak: '-',
  trygderettVurderingOmgjør: '-',
} as const;

const ankeVurderingDefault = {
  ankeVurderingResultat: ankeVurderingResultat,
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
      ...ankeVurderingDefault,
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
      },
    },
  },
};

export const ResultatVedOppheveOgHjemsende: Story = {
  args: {
    ankeVurdering: {
      ...ankeVurderingDefault,
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: 'ANKE_OPPHEVE_OG_HJEMSENDE',
      },
    },
  },
};

export const ResultatVedOmgjør: Story = {
  args: {
    ankeVurdering: {
      ...ankeVurderingDefault,
      ankeVurderingResultat: {
        ...ankeVurderingResultat,
        ankeVurdering: 'ANKE_OMGJOER',
        ankeVurderingOmgjør: 'ANKE_TIL_UGUNST',
      },
    },
  },
};

export const ResultatVedAvvis: Story = {
  args: {
    ankeVurdering: ankeVurderingDefault,
  },
};
