import { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { type OppgaveDto, type ReservasjonStatusDto, type SakslisteDto } from '@navikt/fp-types';

import { reserverOppgavePost, sakslisteOptions } from '../data/fplosSaksbehandlerApi';
import { OppgaveErReservertAvAnnenModal } from '../reservertAvAnnen/OppgaveErReservertAvAnnenModal';
import { SakslistePanel } from './SakslistePanel';

const EMPTY_ARRAY: SakslisteDto[] = [];

interface Props {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  brukernavn: string;
}

export const BehandlingskoerIndex = ({ valgtSakslisteId, setValgtSakslisteId, åpneFagsak, brukernavn }: Props) => {
  const [reservertAvAnnenSaksbehandler, setReservertAvAnnenSaksbehandler] = useState<boolean>(false);
  const [reservertOppgave, setReservertOppgave] = useState<OppgaveDto>();
  const [reservertOppgaveStatus, setReservertOppgaveStatus] = useState<ReservasjonStatusDto>();

  const { data: sakslister = EMPTY_ARRAY, isSuccess } = useQuery(sakslisteOptions());

  const { mutateAsync: reserverOppgave } = useMutation({
    mutationFn: reserverOppgavePost,
  });

  const reserverOppgaveOgApne = (oppgave: OppgaveDto) => {
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

  const lukkErReservertModalOgOpneOppgave = (oppgave: OppgaveDto) => {
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
