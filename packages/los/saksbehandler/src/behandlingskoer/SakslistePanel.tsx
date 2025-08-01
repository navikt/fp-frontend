import { VStack } from '@navikt/ds-react';
import { useMutation } from '@tanstack/react-query';

import type { Oppgave } from '@navikt/fp-los-felles';

import { getBehandlingskøOppgaveAntall } from '../data/fplosSaksbehandlerApi';
import {
  getValueFromLocalStorage,
  removeValueFromLocalStorage,
  setValueInLocalStorage,
} from '../data/localStorageHelper';
import type { Saksliste } from '../typer/sakslisteTsType';
import { LedigOppgaveTabell } from './oppgaveTabeller/ledigOppgaveTabell/LedigOppgaveTabell';
import { ReservertOppgaveTabell } from './oppgaveTabeller/reservertOppgaveTabell/ReservertOppgaveTabell';
import { SakslisteVelgerForm } from './sakslisteVelger/SakslisteVelgerForm';

interface Props {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  sakslister: Saksliste[];
  reserverOppgave: (oppgaveId: Oppgave) => void;
  brukernavn: string;
}

export const SakslistePanel = ({
  reserverOppgave,
  sakslister,
  setValgtSakslisteId,
  valgtSakslisteId,
  brukernavn,
}: Props) => {
  const { mutate: fetchAntallOppgaver, data: antallOppgaver } = useMutation({
    mutationFn: getBehandlingskøOppgaveAntall,
  });

  return (
    <VStack gap="space-32">
      <SakslisteVelgerForm
        sakslister={sakslister}
        setValgtSakslisteId={setValgtSakslisteId}
        fetchAntallOppgaver={fetchAntallOppgaver}
        getValueFromLocalStorage={getValueFromLocalStorage}
        setValueInLocalStorage={setValueInLocalStorage}
        removeValueFromLocalStorage={removeValueFromLocalStorage}
      />
      {!!valgtSakslisteId && (
        <LedigOppgaveTabell
          reserverOppgave={reserverOppgave}
          antallOppgaver={antallOppgaver}
          valgtSakslisteId={valgtSakslisteId}
        />
      )}
      <ReservertOppgaveTabell reserverOppgave={reserverOppgave} brukernavn={brukernavn} />
    </VStack>
  );
};
