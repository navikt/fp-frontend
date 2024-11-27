import React, { useCallback } from 'react';

import { Behandling, Fagsak } from '@navikt/fp-types';

import { BehandlingContainer } from '../felles/BehandlingContainer';
import { ProsessPanelInitProps } from '../felles/typer/prosessPanelInitProps';
import { BehandleInnsynProsessStegInitPanel } from './prosessPaneler/BehandleInnsynProsessStegInitPanel';
import { InnsynVedtakProsessStegInitPanel } from './prosessPaneler/InnsynVedtakProsessStegInitPanel';

interface Props {
  behandling: Behandling;
  fagsak: Fagsak;
  valgtProsessSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  opneSokeside: () => void;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
}

const InnsynPaneler = ({
  behandling,
  fagsak,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  opneSokeside,
  setSkalOppdatereEtterBekreftelseAvAp,
}: Props) => {
  const hentProsessPaneler = useCallback(
    (props: ProsessPanelInitProps) => (
      <>
        <BehandleInnsynProsessStegInitPanel {...props} fagsak={fagsak} />
        <InnsynVedtakProsessStegInitPanel
          {...props}
          fagsak={fagsak}
          opneSokeside={opneSokeside}
          setSkalOppdatereEtterBekreftelseAvAp={setSkalOppdatereEtterBekreftelseAvAp}
        />
      </>
    ),
    [fagsak, opneSokeside, setSkalOppdatereEtterBekreftelseAvAp],
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

export default InnsynPaneler;
