import React, { FunctionComponent } from 'react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { Heading } from '@navikt/ds-react';

import styles from './supportHeader.module.css';

type OwnProps = {
  tekst: string;
  antall?: number;
};

const SupportHeader: FunctionComponent<OwnProps> = ({ tekst, antall }) => (
  <div className={styles.header}>
    <FlexContainer>
      <FlexRow spaceBetween>
        <FlexColumn>
          <Heading size="small">{tekst}</Heading>
        </FlexColumn>
        {antall && (
          <FlexColumn>
            <div className={styles.circle}>{antall}</div>
          </FlexColumn>
        )}
      </FlexRow>
    </FlexContainer>
  </div>
);

export default SupportHeader;
