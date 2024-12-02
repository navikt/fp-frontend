import React, { useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';
import { errorOfType, ErrorTypes, getErrorResponseData } from '@navikt/fp-rest-api';
import { FagsakEnkel } from '@navikt/fp-types';

import {
  getOppgaverForFagsaker,
  getReservasjonsstatus,
  reserverOppgavePost,
  søkFagsakPost,
} from '../data/fplosSaksbehandlerApi';
import { OppgaveErReservertAvAnnenModal } from '../reservertAvAnnen/OppgaveErReservertAvAnnenModal';
import { FagsakSøk } from './FagsakSøk';
import { SøkFormValues } from './form/SøkForm';

const EMPTY_ARRAY_FAGSAK: FagsakEnkel[] = [];
const EMPTY_ARRAY_OPPGAVER: Oppgave[] = [];

type SøkValues = {
  searchString: string;
  skalReservere: boolean;
};

interface Props {
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

/**
 * FagsakSøkIndex
 *
 * Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
 * mot server og lagringen av resultatet i klientens state.
 */
export const FagsakSøkIndex = ({ åpneFagsak, kanSaksbehandle }: Props) => {
  const [skalReservere, setSkalReservere] = useState(false);
  const [reservertAvAnnenSaksbehandler, setReservertAvAnnenSaksbehandler] = useState(false);
  const [reservertOppgave, setReservertOppgave] = useState<Oppgave>();
  const [sokStartet, setSokStartet] = useState(false);
  const [sokFerdig, setSokFerdig] = useState(false);

  const { mutateAsync: reserverOppgave } = useMutation({
    mutationFn: reserverOppgavePost,
  });

  const { mutateAsync: hentOppgaverForFagsaker, data: fagsakOppgaver = EMPTY_ARRAY_OPPGAVER } = useMutation({
    mutationFn: getOppgaverForFagsaker,
    onSuccess: () => {
      setSokStartet(false);
      setSokFerdig(true);
    },
  });

  const {
    mutateAsync: søkFagsak,
    data: fagsaker = EMPTY_ARRAY_FAGSAK,
    error: fagsakError,
    reset: resetFagsakSøk,
  } = useMutation({
    mutationFn: (values: SøkFormValues) => søkFagsakPost(values.searchString, values.skalReservere),
    onSuccess: fagsakerResultat => {
      if (fagsakerResultat && fagsakerResultat.length > 0) {
        hentOppgaverForFagsaker(fagsakerResultat);
      } else {
        setSokStartet(false);
        setSokFerdig(true);
      }
    },
  });

  const { mutateAsync: hentReservasjonsstatus } = useMutation({
    mutationFn: getReservasjonsstatus,
  });

  //FIXME Feilhåndtering
  const searchResultAccessDenied =
    fagsakError && errorOfType(ErrorTypes.MANGLER_TILGANG_FEIL, fagsakError)
      ? getErrorResponseData(fagsakError)
      : undefined;

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

  useEffect(
    () => () => {
      resetFagsakSøk();
    },
    [],
  );

  const goToFagsakEllerApneModal = (oppgave: Oppgave, oppgaveStatus?: OppgaveStatus) => {
    if (
      oppgaveStatus &&
      (!oppgaveStatus.erReservert || (oppgaveStatus.erReservert && oppgaveStatus.erReservertAvInnloggetBruker))
    ) {
      åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
    } else if (oppgaveStatus?.erReservert && !oppgaveStatus.erReservertAvInnloggetBruker) {
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
        hentReservasjonsstatus(oppgave.id).then(status => {
          goToFagsakEllerApneModal(oppgave, status);
        });
      } else {
        åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
      }
    } else {
      reserverOppgave(oppgave.id).then(data => {
        goToFagsakEllerApneModal(oppgave, data);
      });
    }
  };

  const reserverOppgaveOgApne = (oppgave: Oppgave) => {
    velgFagsakOperasjoner(oppgave, true);
  };

  const sokFagsakFn = (values: SøkValues) => {
    setSkalReservere(values.skalReservere);
    setSokStartet(true);
    setSokFerdig(false);
    return søkFagsak(values);
  };

  const lukkErReservertModalOgOpneOppgave = (oppgave: Oppgave) => {
    setReservertOppgave(undefined);
    setReservertAvAnnenSaksbehandler(false);
    åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
  };

  const resetSearch = () => {
    resetFagsakSøk();
    setSokStartet(false);
    setSokFerdig(false);
  };

  return (
    <>
      <FagsakSøk
        fagsaker={fagsaker || []}
        fagsakOppgaver={fagsakOppgaver || []}
        searchFagsakCallback={sokFagsakFn}
        searchResultReceived={sokFerdig}
        åpneFagsak={åpneFagsak}
        selectOppgaveCallback={reserverOppgaveOgApne}
        searchStarted={sokStartet}
        searchResultAccessDenied={searchResultAccessDenied}
        resetSearch={resetSearch}
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
