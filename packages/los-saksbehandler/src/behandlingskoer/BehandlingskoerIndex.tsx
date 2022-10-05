import React, {
  FunctionComponent, useState, useCallback,
} from 'react';

import { åpneFagsak } from '../utils/paths';
import Saksliste from '../typer/sakslisteTsType';
import OppgaveStatus from '../typer/oppgaveStatusTsType';
import Oppgave from '../typer/oppgaveTsType';
import OppgaveErReservertAvAnnenModal from '../components/OppgaveErReservertAvAnnenModal';
import { RestApiPathsKeys, restApiHooks } from '../data/fplosSaksbehandlerRestApi';
import SakslistePanel from './components/SakslistePanel';

const EMPTY_ARRAY: Saksliste[] = [];

const openSak = (
  oppgave: Oppgave,
  fpsakUrl: string,
) => {
  åpneFagsak(fpsakUrl, oppgave.system, oppgave.saksnummer, oppgave.behandlingId);
};

interface OwnProps {
  fpsakUrl: string;
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
}

/**
 * BehandlingskoerIndex
 */
const BehandlingskoerIndex: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  setValgtSakslisteId,
  fpsakUrl,
}) => {
  const [reservertAvAnnenSaksbehandler, setReservertAvAnnenSaksbehandler] = useState<boolean>(false);
  const [reservertOppgave, setReservertOppgave] = useState<Oppgave>();
  const [reservertOppgaveStatus, setReservertOppgaveStatus] = useState<OppgaveStatus>();

  const { data: sakslister = EMPTY_ARRAY } = restApiHooks.useRestApi(RestApiPathsKeys.SAKSLISTE);

  const { startRequest: reserverOppgave } = restApiHooks.useRestApiRunner(RestApiPathsKeys.RESERVER_OPPGAVE);

  const reserverOppgaveOgApne = useCallback((oppgave: Oppgave) => {
    if (oppgave.status.erReservert) {
      openSak(oppgave, fpsakUrl);
    } else {
      reserverOppgave({ oppgaveId: oppgave.id })
        .then((nyOppgaveStatus) => {
          if (nyOppgaveStatus && nyOppgaveStatus.erReservert && nyOppgaveStatus.erReservertAvInnloggetBruker) {
            openSak(oppgave, fpsakUrl);
          } else if (nyOppgaveStatus && nyOppgaveStatus.erReservert && !nyOppgaveStatus.erReservertAvInnloggetBruker) {
            setReservertAvAnnenSaksbehandler(true);
            setReservertOppgave(oppgave);
            setReservertOppgaveStatus(nyOppgaveStatus);
          }
        });
    }
  }, [fpsakUrl]);

  const lukkErReservertModalOgOpneOppgave = useCallback((oppgave: Oppgave) => {
    setReservertAvAnnenSaksbehandler(false);
    setReservertOppgave(undefined);
    setReservertOppgaveStatus(undefined);

    openSak(oppgave, fpsakUrl);
  }, [fpsakUrl]);

  if (sakslister.length === 0) {
    return null;
  }
  return (
    <>
      <SakslistePanel
        valgtSakslisteId={valgtSakslisteId}
        setValgtSakslisteId={setValgtSakslisteId}
        reserverOppgave={reserverOppgaveOgApne}
        sakslister={sakslister}
      />
      {reservertAvAnnenSaksbehandler && reservertOppgave && reservertOppgaveStatus && (
        <OppgaveErReservertAvAnnenModal
          lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave}
          oppgave={reservertOppgave}
          oppgaveStatus={reservertOppgaveStatus}
        />
      )}
    </>
  );
};

export default BehandlingskoerIndex;
