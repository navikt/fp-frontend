import React from 'react';

import { VStack } from '@navikt/ds-react';

import { Oppgave } from '@navikt/fp-los-felles';

import { restApiHooks,RestApiPathsKeys } from '../data/fplosSaksbehandlerRestApi';
import {
  getValueFromLocalStorage,
  removeValueFromLocalStorage,
  setValueInLocalStorage,
} from '../data/localStorageHelper';
import { Saksliste } from '../typer/sakslisteTsType';
import { OppgaverTabell } from './oppgaveTabell/OppgaverTabell';
import { SakslisteVelgerForm } from './sakslisteVelger/SakslisteVelgerForm';

interface Props {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  sakslister: Saksliste[];
  reserverOppgave: (oppgaveId: Oppgave) => void;
}

export const SakslistePanel = ({ reserverOppgave, sakslister, setValgtSakslisteId, valgtSakslisteId }: Props) => {
  const { startRequest: fetchAntallOppgaver, data: antallOppgaver } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.BEHANDLINGSKO_OPPGAVE_ANTALL,
  );

  return (
    <VStack gap="8">
      <SakslisteVelgerForm
        sakslister={sakslister}
        setValgtSakslisteId={setValgtSakslisteId}
        fetchAntallOppgaver={fetchAntallOppgaver}
        getValueFromLocalStorage={getValueFromLocalStorage}
        setValueInLocalStorage={setValueInLocalStorage}
        removeValueFromLocalStorage={removeValueFromLocalStorage}
      />
      {valgtSakslisteId && (
        <OppgaverTabell
          reserverOppgave={reserverOppgave}
          antallOppgaver={antallOppgaver}
          valgtSakslisteId={valgtSakslisteId}
        />
      )}
    </VStack>
  );
};
