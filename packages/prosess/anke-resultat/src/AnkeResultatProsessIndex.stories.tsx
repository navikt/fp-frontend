import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AnkeVurdering as AnkeVurderingKodeverk, AnkeVurderingOmgjoer } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';

import { AnkeResultatProsessIndex } from './AnkeResultatProsessIndex';

const ankeVurderingResultat = {
  ankeVurdering: AnkeVurderingKodeverk.ANKE_AVVIS,
  ankeVurderingOmgjoer: '-',
  påAnketKlageBehandlingUuid: '1',
  erAnkerIkkePart: true,
  erIkkeKonkret: true,
  erFristIkkeOverholdt: true,
  erIkkeSignert: true,
  erSubsidiartRealitetsbehandles: true,
  begrunnelse: 'Dette er en begrunnelse',
  fritekstTilBrev: null,
  ankeOmgjoerArsak: '-',
  erMerknaderMottatt: null,
  merknadKommentar: null,
  trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK',
  trygderettOmgjoerArsak: '-',
  trygderettVurderingOmgjoer: '-',
  sendtTilTrygderettenDato: null,
} as const;

const ankeVurderingDefault = {
  ankeVurderingResultat: ankeVurderingResultat,
  underBehandlingKabal: null,
  underBehandlingKabalTrygderett: null,
  behandletAvKabal: null,
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
        ankeVurdering: AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK,
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
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
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
        ankeVurdering: AnkeVurderingKodeverk.ANKE_OMGJOER,
        ankeVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_UGUNST,
      },
    },
  },
};

export const ResultatVedAvvis: Story = {
  args: {
    ankeVurdering: ankeVurderingDefault,
  },
};
