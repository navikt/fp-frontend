import { action } from '@storybook/addon-actions';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { DecoratorFunction } from '@storybook/types';

import { DokumentMalType, FagsakYtelseType, UgunstAarsakType } from '@navikt/fp-kodeverk';
import type { BehandlingAppKontekst } from '@navikt/fp-types';

import { MeldingerSakIndex } from './MeldingerSakIndex';

const withStyleProvider: DecoratorFunction<ReactRenderer> = Story => (
  <div
    style={{
      width: '600px',
      margin: '50px',
      padding: '20px',
      backgroundColor: 'white',
    }}
  >
    <Story />
  </div>
);

const TEMPLATES = [
  {
    kode: DokumentMalType.INNHENTE_OPPLYSNINGER,
    navn: 'Innhent dokumentasjon',
    tilgjengelig: true,
  },
  {
    kode: DokumentMalType.VARSEL_OM_REVURDERING,
    navn: 'Revurderingsdokumentasjon',
    tilgjengelig: true,
  },
];

const REVURDERING_VARSLING_ARSAK = [
  {
    kode: UgunstAarsakType.BARN_IKKE_REGISTRERT_FOLKEREGISTER,
    navn: 'Barn ikke registrert i folkeregisteret',
    kodeverk: 'UGUNST',
  },
  {
    kode: UgunstAarsakType.ANNET,
    navn: 'Annet',
    kodeverk: 'UGUNST',
  },
];

const meta = {
  title: 'sak/sak-meldinger',
  component: MeldingerSakIndex,
  decorators: [withStyleProvider],
  args: {
    kanVeilede: false,
    revurderingVarslingArsak: REVURDERING_VARSLING_ARSAK,
    behandling: {
      brevmaler: TEMPLATES,
      språkkode: 'NB',
    } as BehandlingAppKontekst,
    previewCallback: action('button-click'),
    submitCallback: action('button-click'),
    setMeldingFormData: action('button-click'),
  },
} satisfies Meta<typeof MeldingerSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: false,
  },
};

export const ForSvangerskapspenger: Story = {
  args: {
    fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    brukerManglerAdresse: false,
  },
};

export const BrukerManglerAdresse: Story = {
  args: {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    brukerManglerAdresse: true,
  },
};
