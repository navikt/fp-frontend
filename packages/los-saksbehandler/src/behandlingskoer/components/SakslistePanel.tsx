import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { getValueFromLocalStorage, setValueInLocalStorage, removeValueFromLocalStorage } from '../../data/localStorageHelper';
import Saksliste from '../../typer/sakslisteTsType';
import Oppgave from '../../typer/oppgaveTsType';
import { RestApiPathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';
import SakslisteVelgerForm from './SakslisteVelgerForm';
import OppgaverTabell from './OppgaverTabell';

import styles from './sakslistePanel.less';

interface OwnProps {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (sakslisteId: number) => void;
  sakslister: Saksliste[];
  reserverOppgave: (oppgaveId: Oppgave) => void;
}

/**
 * SakslistePanel
 */
const SakslistePanel: FunctionComponent<OwnProps> = ({
  reserverOppgave,
  sakslister,
  setValgtSakslisteId,
  valgtSakslisteId,
}) => {
  const { startRequest: fetchAntallOppgaver, data: antallOppgaver } = restApiHooks.useRestApiRunner(RestApiPathsKeys.BEHANDLINGSKO_OPPGAVE_ANTALL);

  return (
    <>
      <Heading size="small"><FormattedMessage id="SakslistePanel.StartBehandling" /></Heading>
      <div className={styles.container}>
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
      </div>
    </>
  );
};

export default SakslistePanel;
