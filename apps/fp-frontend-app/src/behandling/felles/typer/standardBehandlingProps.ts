import { AlleKodeverk, Fagsak, AksessRettigheter, Behandling } from '@navikt/fp-types';

export type BehandlingEventHandler = {
  setHandler: (events: { [key: string]: (params: any) => Promise<any> }) => void;
  clear: () => void;
  settBehandlingPaVent: (params: { frist?: string; ventearsak: string }) => Promise<any>;
};

type StandardBehandlingProps = {
  behandling: Behandling;
  hentOgSettBehandling: () => void;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  setBehandling: (behandling: Behandling) => void;
  opneSokeside: () => void;
  setRequestPendingMessage: (message?: string) => void;
  kodeverk: AlleKodeverk;
};

export default StandardBehandlingProps;
