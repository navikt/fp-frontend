import React, { useRef, FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { getValueFromLocalStorage } from '../../data/localStorageHelper';
import OppgaverForAvdeling from '../../typer/oppgaverForAvdelingTsType';
import OppgaveForDato from '../../typer/oppgaverForDatoTsType';
import OppgaverForForsteStonadsdag from '../../typer/oppgaverForForsteStonadsdagTsType';
import OppgaverManueltPaVent from '../../typer/oppgaverManueltPaVentTsType';
import OppgaverSomErApneEllerPaVent from '../../typer/oppgaverSomErApneEllerPaVentTsType';
import FordelingAvBehandlingstypePanel from './fordelingAvBehandlingstype/FordelingAvBehandlingstypePanel';
import TilBehandlingPanel from './tilBehandling/TilBehandlingPanel';
import ManueltPaVentPanel from './manueltSattPaVent/ManueltPaVentPanel';
import OppgaverPerForsteStonadsdagPanel from './antallBehandlingerPerForsteStonadsdag/OppgaverPerForsteStonadsdagPanel';
import OppgaverSomErApneEllerPaVentPanel from './apneOgPaVentBehandlinger/OppgaverSomErApneEllerPaVentPanel';

interface OwnProps {
  oppgaverForAvdeling: OppgaverForAvdeling[];
  oppgaverPerDato: OppgaveForDato[];
  oppgaverManueltPaVent: OppgaverManueltPaVent[];
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[];
  oppgaverApneEllerPaVent: OppgaverSomErApneEllerPaVent[];
}

/**
 * NokkeltallPanel.
 */
const NokkeltallPanel: FunctionComponent<OwnProps> = ({
  oppgaverForAvdeling,
  oppgaverPerDato,
  oppgaverManueltPaVent,
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
      <ManueltPaVentPanel
        height={height}
        oppgaverManueltPaVent={oppgaverManueltPaVent}
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
