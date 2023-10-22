import React, { useRef, FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { getValueFromLocalStorage } from '../../data/localStorageHelper';
import OppgaverForAvdeling from '../../typer/oppgaverForAvdelingTsType';
import OppgaveForDato from '../../typer/oppgaverForDatoTsType';
import OppgaverForForsteStonadsdag from '../../typer/oppgaverForForsteStonadsdagTsType';
import BehandlingVentefrist from '../../typer/behandlingVentefristTsType';
import OppgaverSomErApneEllerPaVent from '../../typer/oppgaverSomErApneEllerPaVentTsType';
import FordelingAvBehandlingstypePanel from './fordelingAvBehandlingstype/FordelingAvBehandlingstypePanel';
import TilBehandlingPanel from './tilBehandling/TilBehandlingPanel';
import OppgaverPerForsteStonadsdagPanel from './antallBehandlingerPerForsteStonadsdag/OppgaverPerForsteStonadsdagPanel';
import OppgaverSomErApneEllerPaVentPanel from './apneOgPaVentBehandlinger/OppgaverSomErApneEllerPaVentPanel';
import VentefristUtløperPanel from "./ventefristUtløper/VentefristUtløperPanel";

interface OwnProps {
  oppgaverForAvdeling: OppgaverForAvdeling[];
  oppgaverPerDato: OppgaveForDato[];
  behandlingerPaVent: BehandlingVentefrist[];
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[];
  oppgaverApneEllerPaVent: OppgaverSomErApneEllerPaVent[];
}

/**
 * NokkeltallPanel.
 */
const NokkeltallPanel: FunctionComponent<OwnProps> = ({
  oppgaverForAvdeling,
  oppgaverPerDato,
  behandlingerPaVent,
  oppgaverPerForsteStonadsdag,
  oppgaverApneEllerPaVent,
}) => {
  const height = 300;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <TilBehandlingPanel
        height={height}
        oppgaverPerDato={oppgaverPerDato}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
      <VerticalSpacer twentyPx />
      <FordelingAvBehandlingstypePanel
        height={height}
        oppgaverForAvdeling={oppgaverForAvdeling}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
      <VerticalSpacer twentyPx />
      <VentefristUtløperPanel
        height={height}
        behandlingerPaVent={behandlingerPaVent}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
      <VerticalSpacer twentyPx />
      <OppgaverPerForsteStonadsdagPanel height={height} oppgaverPerForsteStonadsdag={oppgaverPerForsteStonadsdag} />
      <VerticalSpacer twentyPx />
      <OppgaverSomErApneEllerPaVentPanel
        height={height}
        oppgaverApneEllerPaVent={oppgaverApneEllerPaVent}
        getValueFromLocalStorage={getValueFromLocalStorage}
      />
    </div>
  );
};

export default NokkeltallPanel;
