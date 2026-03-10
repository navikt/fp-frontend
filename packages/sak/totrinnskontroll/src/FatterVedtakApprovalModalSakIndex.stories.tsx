import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import type { FagsakBehandlingDtoFpSak } from '@navikt/fp-types';

import { FatterVedtakTotrinnskontrollModalSakIndex } from './FatterVedtakTotrinnskontrollModalSakIndex';

const DEFAULT_BEHANDLING = {
  uuid: '1',
  versjon: 1,
  status: 'FVED',
  type: 'BT-002',
  aktivPapirsøknad: false,
  behandlendeEnhetId: '4820',
  behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Oslo 1',
  behandlingHenlagt: false,
  behandlingPåVent: false,
  behandlingTillatteOperasjoner: {
    behandlingFraBeslutter: false,
    behandlingKanBytteEnhet: false,
    behandlingKanGjenopptas: false,
    behandlingKanHenlegges: false,
    behandlingKanMerkesHaster: false,
    behandlingKanOpnesForEndringer: false,
    behandlingKanSendeMelding: false,
    behandlingKanSettesPaVent: false,
    behandlingTilGodkjenning: false,
    vergeBehandlingsmeny: 'SKJUL',
  },
  behandlingÅrsaker: [],
  brevmaler: [],
  gjeldendeVedtak: false,
  links: [],
  opprettet: '2020-01-01',
  språkkode: 'NB',
  toTrinnsBehandling: false,
  totrinnskontrollÅrsaker: [],
  ugunstAksjonspunkt: false,
  vilkår: [],
} satisfies FagsakBehandlingDtoFpSak;

const BEHANDLINGSRESULTAT_OPPHØR = {
  type: 'OPPHØR',
  harRedigertVedtaksbrev: false,
  id: 1,
  vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
} satisfies FagsakBehandlingDtoFpSak['behandlingsresultat'];

const meta = {
  title: 'sak/sak-totrinnskontroll-fatter-vedtak-modal',
  component: FatterVedtakTotrinnskontrollModalSakIndex,
  args: {
    closeEvent: action('button-click'),
  },
} satisfies Meta<typeof FatterVedtakTotrinnskontrollModalSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EtterFatterVedtakOgGodkjent: Story = {
  args: {
    behandling: DEFAULT_BEHANDLING,
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenning: Story = {
  args: {
    behandling: { ...DEFAULT_BEHANDLING, behandlingsresultat: BEHANDLINGSRESULTAT_OPPHØR },
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenningAvKlage: Story = {
  args: {
    behandling: { ...DEFAULT_BEHANDLING, type: 'BT-003', behandlingsresultat: BEHANDLINGSRESULTAT_OPPHØR },
    allAksjonspunktApproved: true,
  },
};

export const EtterTilbakesendingTilSaksbehandler: Story = {
  args: {
    behandling: { ...DEFAULT_BEHANDLING, behandlingsresultat: BEHANDLINGSRESULTAT_OPPHØR },
    allAksjonspunktApproved: false,
  },
};
