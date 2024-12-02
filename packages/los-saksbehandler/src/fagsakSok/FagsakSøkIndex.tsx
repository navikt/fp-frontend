import React, { useState } from 'react';

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

  const { mutateAsync: reserverOppgave } = useMutation({
    mutationFn: reserverOppgavePost,
  });

  const {
    mutateAsync: hentOppgaverForFagsaker,
    data: fagsakOppgaver = EMPTY_ARRAY_OPPGAVER,
    isPending: isHentOppgaverPending,
    isSuccess: isHentOppgaverSuccess,
  } = useMutation({
    mutationFn: getOppgaverForFagsaker,
  });

  const {
    mutateAsync: søkFagsak,
    data: fagsaker = EMPTY_ARRAY_FAGSAK,
    error: fagsakError,
    reset: resetFagsakSøk,
    isPending: isSøkFagsakPending,
    isSuccess: isSøkFagsakSuccess,
  } = useMutation({
    mutationFn: (values: SøkFormValues) => søkFagsakPost(values.searchString, values.skalReservere),
    onSuccess: async fagsakerResultat => {
      if (fagsakerResultat && fagsakerResultat.length > 0) {
        const oppgaver = await hentOppgaverForFagsaker(fagsakerResultat);
        if (oppgaver.length === 1) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          velgFagsakOperasjoner(oppgaver[0], false);
        } else if (oppgaver.length === 0 && fagsakerResultat) {
          åpneFagsak(fagsakerResultat[0].saksnummer);
        }
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

  const erSøkFerdig = isSøkFagsakSuccess && isHentOppgaverSuccess;

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
    return søkFagsak(values);
  };

  const lukkErReservertModalOgOpneOppgave = (oppgave: Oppgave) => {
    setReservertOppgave(undefined);
    setReservertAvAnnenSaksbehandler(false);
    åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
  };

  return (
    <>
      <FagsakSøk
        fagsaker={fagsaker || []}
        fagsakOppgaver={fagsakOppgaver || []}
        searchFagsakCallback={sokFagsakFn}
        searchResultReceived={erSøkFerdig}
        åpneFagsak={åpneFagsak}
        selectOppgaveCallback={reserverOppgaveOgApne}
        searchStarted={isHentOppgaverPending || isSøkFagsakPending}
        searchResultAccessDenied={searchResultAccessDenied}
        resetSearch={resetFagsakSøk}
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
