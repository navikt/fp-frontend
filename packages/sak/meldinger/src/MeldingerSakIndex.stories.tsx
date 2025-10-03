import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { BehandlingAppKontekst, DokumentMalType } from '@navikt/fp-types';

import { MeldingerSakIndex } from './MeldingerSakIndex';

const withStyleProvider: DecoratorFunction<ReactRenderer> = Story => (
  <div
    style={{
      width: '600px',
      margin: '50px',
      padding: '20px',
      backgroundColor: 'var(--ax-bg-default)',
    }}
  >
    <Story />
  </div>
);

const TEMPLATES = [
  {
    kode: 'INNOPP' satisfies DokumentMalType,
    navn: 'Innhent dokumentasjon',
    tilgjengelig: true,
  },
  {
    kode: 'VARREV' satisfies DokumentMalType,
    navn: 'Revurderingsdokumentasjon',
    tilgjengelig: true,
  },
];

const meta = {
  title: 'sak/sak-meldinger',
  component: MeldingerSakIndex,
  decorators: [withStyleProvider],
  args: {
    kanVeilede: false,
    revurderingVarslingArsak: alleKodeverk.RevurderingVarslingÅrsak,
    behandling: {
      brevmaler: TEMPLATES,
      språkkode: 'NB',
    } as BehandlingAppKontekst,
    forhåndsvisBrev: action('button-click'),
    submitCallback: action('button-click'),
    setMeldingFormData: action('button-click'),
  },
} satisfies Meta<typeof MeldingerSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fagsakYtelseType: 'FP',
    brukerManglerAdresse: false,
  },
};

export const ForSvangerskapspenger: Story = {
  args: {
    fagsakYtelseType: 'SVP',
    brukerManglerAdresse: false,
  },
};

export const BrukerManglerAdresse: Story = {
  args: {
    fagsakYtelseType: 'FP',
    brukerManglerAdresse: true,
  },
};
