import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';

import type { Oppgave, ReservasjonStatus } from '@navikt/fp-los-felles';
import type { FagsakEnkel } from '@navikt/fp-types';

import {
  getOppgaverForFagsaker,
  getReservasjonsstatus,
  reserverOppgavePost,
  søkFagsakPost,
} from '../data/fplosSaksbehandlerApi';
import { OppgaveErReservertAvAnnenModal } from '../reservertAvAnnen/OppgaveErReservertAvAnnenModal';
import { FagsakSøk } from './FagsakSøk';
import type { SøkFormValues } from './form/SøkForm';

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
    mutationFn: async (values: SøkFormValues) => {
      const fagsakerResultat = await søkFagsakPost(values.searchString.trim(), values.skalReservere);
      if (fagsakerResultat.length === 0) {
        return [];
      }

      const oppgaver = await hentOppgaverForFagsaker(fagsakerResultat);

      if (fagsakerResultat.length === 1) {
        if (oppgaver.length === 1) {
          velgFagsakOperasjoner(oppgaver[0], false);
        } else if (oppgaver.length === 0 && fagsakerResultat) {
          åpneFagsak(fagsakerResultat[0].saksnummer);
        }
      }

      return fagsakerResultat;
    },
  });

  const { mutateAsync: hentReservasjonsstatus } = useMutation({
    mutationFn: getReservasjonsstatus,
  });

  const searchResultAccessDenied =
    //@ts-expect-error response.data når ein refaktorerar feilhåndteringa
    fagsakError instanceof HTTPError && fagsakError.response.status === 403 ? fagsakError.response?.data : undefined;

  const erSøkFerdig = isSøkFagsakSuccess && !isHentOppgaverPending;

  const goToFagsakEllerApneModal = (oppgave: Oppgave, reservasjonStatus?: ReservasjonStatus) => {
    if (
      reservasjonStatus &&
      (!reservasjonStatus.erReservert ||
        (reservasjonStatus.erReservert && reservasjonStatus.erReservertAvInnloggetBruker))
    ) {
      åpneFagsak(oppgave.saksnummer, oppgave.behandlingId);
    } else if (reservasjonStatus?.erReservert && !reservasjonStatus.erReservertAvInnloggetBruker) {
      setReservertOppgave(oppgave);
      setReservertAvAnnenSaksbehandler(true);
    }
  };

  const velgFagsakOperasjoner = (oppgave: Oppgave, skalSjekkeOmReservert: boolean) => {
    if (oppgave.reservasjonStatus.erReservert && !oppgave.reservasjonStatus.erReservertAvInnloggetBruker) {
      setReservertOppgave(oppgave);
      setReservertAvAnnenSaksbehandler(true);
    } else if (!skalReservere) {
      if (skalSjekkeOmReservert) {
        hentReservasjonsstatus(oppgave.id).then(status => {
          goToFagsakEllerApneModal(oppgave, status);
        });
      } else {
        åpneFagsak(oppgave.saksnummer, oppgave.behandlingId);
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
    åpneFagsak(oppgave.saksnummer, oppgave.behandlingId);
  };

  return (
    <>
      <FagsakSøk
        fagsaker={fagsaker ?? []}
        fagsakOppgaver={fagsakOppgaver ?? []}
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
          reservasjonStatus={reservertOppgave.reservasjonStatus}
        />
      )}
    </>
  );
};
