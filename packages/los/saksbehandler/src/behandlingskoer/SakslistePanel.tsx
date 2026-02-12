import { VStack } from '@navikt/ds-react';
import { useMutation } from '@tanstack/react-query';

import type { SakslisteAvdeling } from '@navikt/fp-types';

import { getBehandlingskøOppgaveAntall } from '../data/fplosSaksbehandlerApi';
import { removeValueFromLocalStorage, setValueInLocalStorage } from '../data/localStorageHelper';
import type { Oppgave } from '../typer/oppgaveTsType';
import { LedigOppgaveTabell } from './oppgaveTabeller/ledigOppgaveTabell/LedigOppgaveTabell';
import { ReservertOppgaveTabell } from './oppgaveTabeller/reservertOppgaveTabell/ReservertOppgaveTabell';
import { SakslisteVelgerForm } from './sakslisteVelger/SakslisteVelgerForm';

interface Props {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  sakslister: SakslisteAvdeling[];
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
