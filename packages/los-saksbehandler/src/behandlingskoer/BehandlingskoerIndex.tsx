import React, { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { restApiHooks,RestApiPathsKeys } from '../data/fplosSaksbehandlerRestApi';
import { OppgaveErReservertAvAnnenModal } from '../reservertAvAnnen/OppgaveErReservertAvAnnenModal';
import { Saksliste } from '../typer/sakslisteTsType';
import { SakslistePanel } from './SakslistePanel';

const EMPTY_ARRAY: Saksliste[] = [];

interface Props {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

export const BehandlingskoerIndex = ({ valgtSakslisteId, setValgtSakslisteId, åpneFagsak }: Props) => {
  const [reservertAvAnnenSaksbehandler, setReservertAvAnnenSaksbehandler] = useState<boolean>(false);
  const [reservertOppgave, setReservertOppgave] = useState<Oppgave>();
  const [reservertOppgaveStatus, setReservertOppgaveStatus] = useState<OppgaveStatus>();

  const { data: sakslister = EMPTY_ARRAY, state: sakslisterState } = restApiHooks.useRestApi(
    RestApiPathsKeys.SAKSLISTE,
  );

  const { startRequest: reserverOppgave } = restApiHooks.useRestApiRunner(RestApiPathsKeys.RESERVER_OPPGAVE);

  const reserverOppgaveOgApne = (oppgave: Oppgave) => {
    if (oppgave.status.erReservert) {
      åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
    } else {
      reserverOppgave({ oppgaveId: oppgave.id }).then(nyOppgaveStatus => {
        if (nyOppgaveStatus && nyOppgaveStatus.erReservert && nyOppgaveStatus.erReservertAvInnloggetBruker) {
          åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
        } else if (nyOppgaveStatus && nyOppgaveStatus.erReservert && !nyOppgaveStatus.erReservertAvInnloggetBruker) {
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

    åpneFagsak(oppgave.saksnummer.toString(), oppgave.behandlingId);
  };

  if (sakslisterState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
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
