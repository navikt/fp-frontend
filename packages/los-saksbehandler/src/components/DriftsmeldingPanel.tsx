import React, { FunctionComponent } from 'react';
import { Detail } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import Driftsmelding from '../typer/driftsmeldingTsType';

import styles from './driftsmeldingPanel.module.css';

interface OwnProps {
  driftsmeldinger: Driftsmelding[];
}

/**
 * DriftsmeldingPanel
 *
 * Definerer hvordan driftsmeldinger vises.
 */
const DriftsmeldingPanel: FunctionComponent<OwnProps> = ({ driftsmeldinger }) => {
  if (driftsmeldinger === undefined || driftsmeldinger.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {driftsmeldinger.map(message => (
        <FlexContainer key={message.id}>
          <FlexRow>
            <FlexColumn>
              <ExclamationmarkTriangleFillIcon className={styles.driftsInfo} />
            </FlexColumn>
            <FlexColumn>
              <Detail className={styles.wordWrap}>{`${message.melding}`}</Detail>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      ))}
    </div>
  );
};

export default DriftsmeldingPanel;
