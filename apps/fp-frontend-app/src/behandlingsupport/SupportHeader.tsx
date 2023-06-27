import React, { FunctionComponent, ReactNode } from 'react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { Heading } from '@navikt/ds-react';

import styles from './supportHeader.module.css';

type OwnProps = {
  tekst: string;
  antall?: number;
  children: ReactNode;
  brukPadding?: boolean;
};

const SupportHeaderAndContent: FunctionComponent<OwnProps> = ({ tekst, antall, children, brukPadding = true }) => (
  <>
    <div className={styles.header}>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Heading size="small">{tekst}</Heading>
          </FlexColumn>
          {!!antall && antall > 0 && (
            <FlexColumn>
              <div className={styles.circle}>{antall}</div>
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
    </div>
    <div className={brukPadding ? styles.container : undefined}>{children}</div>
  </>
);

export default SupportHeaderAndContent;
