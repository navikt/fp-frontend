import {
  Fagsak, FagsakPerson, KodeverkMedNavn, AksessRettigheter,
} from '@fpsak-frontend/types';

type StandardBehandlingProps = {
  behandlingId: number;
  fagsak: Fagsak;
  fagsakPerson: FagsakPerson;
  rettigheter: AksessRettigheter;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  behandlingEventHandler: {
    setHandler: (events: {[key: string]: (params: any) => Promise<any> }) => void;
    clear: () => void;
  };
  opneSokeside: () => void;
  setRequestPendingMessage: (message: string) => void;
  kodeverk?: {[key: string]: KodeverkMedNavn[]};
}

export default StandardBehandlingProps;
