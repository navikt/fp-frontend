import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FagsakYtelseType, BehandlingType, BehandlingArsakType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';
import MenyNyBehandlingIndex from './MenyNyBehandlingIndex';

export default {
  title: 'sak/sak-meny-ny-behandling',
  component: MenyNyBehandlingIndex,
};

const behandlingstyper = [
  {
    kode: BehandlingType.FORSTEGANGSSOKNAD,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Førstegangssøknad',
  },
  {
    kode: BehandlingType.REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Revurdering',
  },
  {
    kode: BehandlingType.KLAGE,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Klage',
  },
  {
    kode: BehandlingType.DOKUMENTINNSYN,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Dokumentinnsyn',
  },
  {
    kode: BehandlingType.TILBAKEKREVING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Tilbakekreving',
  },
  {
    kode: BehandlingType.TILBAKEKREVING_REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Tilbakekreving revurdering',
  },
];

const behandlingOppretting = [
  {
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    kanOppretteBehandling: true,
  },
  {
    behandlingType: BehandlingType.REVURDERING,
    kanOppretteBehandling: true,
  },
  {
    behandlingType: BehandlingType.KLAGE,
    kanOppretteBehandling: true,
  },
];

const Template: StoryFn<{
  tilbakekrevingRevurderingArsaker: KodeverkMedNavn[];
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: boolean;
    kanRevurderingOpprettes: boolean;
  };
  lagNyBehandling: () => void;
  lukkModal: () => void;
}> = ({ tilbakekrevingRevurderingArsaker, kanTilbakekrevingOpprettes, lagNyBehandling, lukkModal }) => (
  <MenyNyBehandlingIndex
    ytelseType={FagsakYtelseType.FORELDREPENGER}
    saksnummer="123"
    behandlingUuid="1"
    behandlingVersjon={2}
    lagNyBehandling={lagNyBehandling}
    behandlingstyper={behandlingstyper}
    tilbakekrevingRevurderingArsaker={tilbakekrevingRevurderingArsaker}
    revurderingArsaker={[
      {
        kode: BehandlingArsakType.KLAGE_U_INNTK,
        kodeverk: 'BEHANDLING_ARSAK_TYPE',
        navn: 'Klage uten inntekt',
      },
      {
        kode: BehandlingArsakType.FØDSEL,
        kodeverk: 'BEHANDLING_ARSAK_TYPE',
        navn: 'Fødsel',
      },
    ]}
    behandlingOppretting={behandlingOppretting}
    kanTilbakekrevingOpprettes={kanTilbakekrevingOpprettes}
    lukkModal={lukkModal}
  />
);

export const Default = Template.bind({});
Default.args = {
  lagNyBehandling: action('button-click'),
  lukkModal: action('button-click'),
  tilbakekrevingRevurderingArsaker: [],
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: false,
    kanRevurderingOpprettes: false,
  },
};

export const ForTilbakekreving = Template.bind({});
ForTilbakekreving.args = {
  lagNyBehandling: action('button-click'),
  lukkModal: action('button-click'),
  tilbakekrevingRevurderingArsaker: [
    {
      kode: BehandlingArsakType.RE_KLAGE_KA,
      kodeverk: 'BEHANDLING_ARSAK_TYPE',
      navn: 'Klage KA',
    },
    {
      kode: BehandlingArsakType.RE_KLAGE_NFP,
      kodeverk: 'BEHANDLING_ARSAK_TYPE',
      navn: 'Klage NFP',
    },
  ],
  kanTilbakekrevingOpprettes: {
    kanBehandlingOpprettes: true,
    kanRevurderingOpprettes: true,
  },
};
