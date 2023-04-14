import React, { FunctionComponent } from 'react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './datoPanel.module.css';

interface OwnProps {
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

const DatoPanel: FunctionComponent<OwnProps> = ({ opptjeningFomDato, opptjeningTomDato }) => (
  <FlexContainer>
    <FlexRow spaceBetween>
      <FlexColumn>
        <FlexContainer>
          <FlexRow>
            <FlexColumn className={styles.firstCol} />
            <FlexColumn>{opptjeningFomDato}</FlexColumn>
          </FlexRow>
        </FlexContainer>
      </FlexColumn>
      <FlexColumn className={styles.lastCol}>{opptjeningTomDato}</FlexColumn>
    </FlexRow>
  </FlexContainer>
);

export default DatoPanel;
