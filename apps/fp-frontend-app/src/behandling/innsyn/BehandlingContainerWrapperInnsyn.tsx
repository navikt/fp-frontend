import React, { FunctionComponent, useCallback } from 'react';

import { Behandling, Fagsak } from '@navikt/fp-types';

import ProsessPanelInitProps from '../felles/typer/prosessPanelInitProps';
import BehandlingContainer from '../felles/BehandlingContainer';
import BehandleInnsynProsessStegInitPanel from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import InnsynVedtakProsessStegInitPanel from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

interface OwnProps {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  toggleOppdateringAvFagsakOgBehandling: (skalHenteFagsak: boolean) => void;
}

const BehandlingContainerWrapperInnsyn: FunctionComponent<OwnProps> = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  toggleOppdateringAvFagsakOgBehandling,
}) => {
  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <BehandleInnsynProsessStegInitPanel {...props} fagsak={fagsak} />
        <InnsynVedtakProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          toggleOppdatereFagsakContext={toggleOppdateringAvFagsakOgBehandling}
        />
      </>
    ),
    [fagsak, opneSokeside, toggleOppdateringAvFagsakOgBehandling],
  );

  return (
    <BehandlingContainer
      behandling={behandling}
      valgtProsessSteg={valgtProsessSteg}
      oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
      hentProsessPaneler={hentProsessPaneler}
    />
  );
};

export default BehandlingContainerWrapperInnsyn;
