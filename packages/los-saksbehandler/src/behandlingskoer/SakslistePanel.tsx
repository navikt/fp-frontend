import React from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { Oppgave } from '@navikt/fp-los-felles';

import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
  removeValueFromLocalStorage,
} from '../data/localStorageHelper';
import { Saksliste } from '../typer/sakslisteTsType';
import { RestApiPathsKeys, restApiHooks } from '../data/fplosSaksbehandlerRestApi';
import { SakslisteVelgerForm } from './sakslisteVelger/SakslisteVelgerForm';
import { OppgaverTabell } from './oppgaveTabell/OppgaverTabell';

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
    <>
      <SakslisteVelgerForm
        sakslister={sakslister}
        setValgtSakslisteId={setValgtSakslisteId}
        fetchAntallOppgaver={fetchAntallOppgaver}
        getValueFromLocalStorage={getValueFromLocalStorage}
        setValueInLocalStorage={setValueInLocalStorage}
        removeValueFromLocalStorage={removeValueFromLocalStorage}
      />
      <VerticalSpacer twentyPx />
      {valgtSakslisteId && (
        <OppgaverTabell
          reserverOppgave={reserverOppgave}
          antallOppgaver={antallOppgaver}
          valgtSakslisteId={valgtSakslisteId}
        />
      )}
    </>
  );
};
