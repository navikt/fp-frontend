import { AlleKodeverk, Fagsak, AksessRettigheter } from '@navikt/fp-types';

export type BehandlingEventHandler = {
  setHandler: (events: { [key: string]: (params: any) => Promise<any> }) => void;
  clear: () => void;
  settBehandlingPaVent: (params: { frist?: string; ventearsak: string }) => Promise<any>;
};

type StandardBehandlingProps = {
  behandlingUuid: string;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  behandlingEventHandler: BehandlingEventHandler;
  opneSokeside: () => void;
  setRequestPendingMessage: (message?: string) => void;
  kodeverk: AlleKodeverk;
};

export default StandardBehandlingProps;
