import { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import type { ReservasjonStatus } from '@navikt/fp-los-felles';

import { reserverOppgavePost, sakslisteOptions } from '../data/fplosSaksbehandlerApi';
import { OppgaveErReservertAvAnnenModal } from '../reservertAvAnnen/OppgaveErReservertAvAnnenModal';
import type { Oppgave } from '../typer/oppgaveTsType';
import type { Saksliste } from '../typer/sakslisteTsType';
import { SakslistePanel } from './SakslistePanel';

const EMPTY_ARRAY: Saksliste[] = [];

interface Props {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  brukernavn: string;
}

export const BehandlingskoerIndex = ({ valgtSakslisteId, setValgtSakslisteId, åpneFagsak, brukernavn }: Props) => {
  const [reservertAvAnnenSaksbehandler, setReservertAvAnnenSaksbehandler] = useState<boolean>(false);
  const [reservertOppgave, setReservertOppgave] = useState<Oppgave>();
  const [reservertOppgaveStatus, setReservertOppgaveStatus] = useState<ReservasjonStatus>();

  const { data: sakslister = EMPTY_ARRAY, isSuccess } = useQuery(sakslisteOptions());

  const { mutateAsync: reserverOppgave } = useMutation({
    mutationFn: reserverOppgavePost,
  });

  const reserverOppgaveOgApne = (oppgave: Oppgave) => {
    if (oppgave.reservasjonStatus.erReservert) {
      åpneFagsak(oppgave.saksnummer, oppgave.behandlingId);
    } else {
      void reserverOppgave(oppgave.id).then(nyOppgaveStatus => {
        if (nyOppgaveStatus.erReservert && nyOppgaveStatus.erReservertAvInnloggetBruker) {
          åpneFagsak(oppgave.saksnummer, oppgave.behandlingId);
        } else if (nyOppgaveStatus.erReservert && !nyOppgaveStatus.erReservertAvInnloggetBruker) {
          setReservertAvAnnenSaksbehandler(true);
          setReservertOppgave(oppgave);
          setReservertOppgaveStatus(nyOppgaveStatus);
        }
      });
    }
  };

  const lukkErReservertModalOgOpneOppgave = (oppgave: Oppgave) => {
    setReservertAvAnnenSaksbehandler(false);
    setReservertOppgave(undefined);
    setReservertOppgaveStatus(undefined);

    åpneFagsak(oppgave.saksnummer, oppgave.behandlingId);
  };

  if (!isSuccess) {
    return <LoadingPanel />;
  }

  return (
    <>
      <SakslistePanel
        valgtSakslisteId={valgtSakslisteId}
        setValgtSakslisteId={setValgtSakslisteId}
        reserverOppgave={reserverOppgaveOgApne}
        sakslister={sakslister}
        brukernavn={brukernavn}
      />
      {reservertAvAnnenSaksbehandler && reservertOppgave && reservertOppgaveStatus && (
        <OppgaveErReservertAvAnnenModal
          lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave}
          oppgave={reservertOppgave}
          reservasjonStatus={reservertOppgaveStatus}
        />
      )}
    </>
  );
};
