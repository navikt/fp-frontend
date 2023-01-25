import React, {
  useState, FunctionComponent, useEffect,
} from 'react';

import { errorOfType, ErrorTypes, getErrorResponseData } from '@navikt/fp-rest-api';
import { FagsakEnkel } from '@navikt/fp-types';
import { OppgaveStatus, Oppgave } from '@navikt/fp-los-felles';

import FagsakSearch from './components/FagsakSearch';
import { RestApiPathsKeys, restApiHooks } from '../data/fplosSaksbehandlerRestApi';
import OppgaveErReservertAvAnnenModal from '../components/OppgaveErReservertAvAnnenModal';

interface OwnProps {
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

const EMPTY_ARRAY_FAGSAK: FagsakEnkel[] = [];
const EMPTY_ARRAY_OPPGAVER: Oppgave[] = [];

/**
 * FagsakSearchIndex
 *
 * Container komponent. Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
 * mot server og lagringen av resultatet i klientens state.
 */
const FagsakSearchIndex: FunctionComponent<OwnProps> = ({
  åpneFagsak,
  kanSaksbehandle,
}) => {
  const [skalReservere, setSkalReservere] = useState(false);
  const [reservertAvAnnenSaksbehandler, setReservertAvAnnenSaksbehandler] = useState(false);
  const [reservertOppgave, setReservertOppgave] = useState<Oppgave>();
  const [sokStartet, setSokStartet] = useState(false);
  const [sokFerdig, setSokFerdig] = useState(false);

  const { startRequest: reserverOppgave } = restApiHooks.useRestApiRunner(RestApiPathsKeys.RESERVER_OPPGAVE);
  const {
    startRequest: sokFagsak, resetRequestData: resetFagsakSok, data: fagsaker = EMPTY_ARRAY_FAGSAK, error: fagsakError,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SEARCH_FAGSAK);
  const { startRequest: hentOppgaverForFagsaker, data: fagsakOppgaver = EMPTY_ARRAY_OPPGAVER } = restApiHooks
    .useRestApiRunner(RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER);
  const { startRequest: hentReservasjonsstatus } = restApiHooks.useRestApiRunner(RestApiPathsKeys.HENT_RESERVASJONSSTATUS);

  const searchResultAccessDenied = fagsakError && errorOfType(ErrorTypes.MANGLER_TILGANG_FEIL, fagsakError) ? getErrorResponseData(fagsakError) : undefined;

  useEffect(() => {
    if (sokFerdig && fagsaker.length === 1) {
      if (fagsakOppgaver.length === 1) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        velgFagsakOperasjoner(fagsakOppgaver[0], false);
      } else if (fagsakOppgaver.length === 0) {
        åpneFagsak(fagsaker[0].saksnummer);
      }
    }
  }, [sokFerdig, fagsaker, fagsakOppgaver]);

  useEffect(() => () => {
    resetFagsakSok();
  }, []);

  const goToFagsakEllerApneModal = (oppgave: Oppgave, oppgaveStatus?: OppgaveStatus) => {
    if (oppgaveStatus && (!oppgaveStatus.erReservert || (oppgaveStatus.erReservert && oppgaveStatus.erReservertAvInnloggetBruker))) {
      åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
    } else if (oppgaveStatus && oppgaveStatus.erReservert && !oppgaveStatus.erReservertAvInnloggetBruker) {
      setReservertOppgave(oppgave);
      setReservertAvAnnenSaksbehandler(true);
    }
  };

  const velgFagsakOperasjoner = (oppgave: Oppgave, skalSjekkeOmReservert: boolean) => {
    if (oppgave.status.erReservert && !oppgave.status.erReservertAvInnloggetBruker) {
      setReservertOppgave(oppgave);
      setReservertAvAnnenSaksbehandler(true);
    } else if (!skalReservere) {
      if (skalSjekkeOmReservert) {
        hentReservasjonsstatus({ oppgaveId: oppgave.id }).then((status) => {
          goToFagsakEllerApneModal(oppgave, status);
        });
      } else {
        åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
      }
    } else {
      reserverOppgave({ oppgaveId: oppgave.id }).then((data) => {
        goToFagsakEllerApneModal(oppgave, data);
      });
    }
  };

  const reserverOppgaveOgApne = (oppgave: Oppgave) => {
    velgFagsakOperasjoner(oppgave, true);
  };

  const sokFagsakFn = (values: {searchString: string; skalReservere: boolean}) => {
    setSkalReservere(values.skalReservere);
    setSokStartet(true);
    setSokFerdig(false);

    return sokFagsak(values).then((fagsakerResultat) => {
      if (fagsakerResultat && fagsakerResultat.length > 0) {
        hentOppgaverForFagsaker({ saksnummerListe: fagsakerResultat.map((fagsak) => `${fagsak.saksnummer}`).join(',') })
          .then(() => {
            setSokStartet(false);
            setSokFerdig(true);
          });
      } else {
        setSokStartet(false);
        setSokFerdig(true);
      }
    });
  };

  const lukkErReservertModalOgOpneOppgave = (oppgave: Oppgave) => {
    setReservertOppgave(undefined);
    setReservertAvAnnenSaksbehandler(false);
    åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
  };

  const resetSearchFn = () => {
    resetFagsakSok();
    setSokStartet(false);
    setSokFerdig(false);
  };

  return (
    <>
      <FagsakSearch
        fagsaker={fagsaker || []}
        fagsakOppgaver={fagsakOppgaver || []}
        searchFagsakCallback={sokFagsakFn}
        searchResultReceived={sokFerdig}
        åpneFagsak={åpneFagsak}
        selectOppgaveCallback={reserverOppgaveOgApne}
        searchStarted={sokStartet}
        searchResultAccessDenied={searchResultAccessDenied}
        resetSearch={resetSearchFn}
        kanSaksbehandle={kanSaksbehandle}
      />
      {reservertAvAnnenSaksbehandler && reservertOppgave && (
      <OppgaveErReservertAvAnnenModal
        lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave}
        oppgave={reservertOppgave}
        oppgaveStatus={reservertOppgave.status}
      />
      )}
    </>
  );
};

export default FagsakSearchIndex;
