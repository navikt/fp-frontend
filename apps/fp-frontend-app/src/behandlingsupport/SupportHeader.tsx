import React, { FunctionComponent, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { Heading } from '@navikt/ds-react';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import styles from './supportHeader.module.css';
import ErrorBoundary from '../app/ErrorBoundary';

type OwnProps = {
  tekst: string;
  antall?: number;
  children: ReactNode;
  brukPadding?: boolean;
};

const SupportHeaderAndContent: FunctionComponent<OwnProps> = ({ tekst, antall, children, brukPadding = true }) => {
  const intl = useIntl();
  const { addErrorMessage } = useRestApiErrorDispatcher();

  return (
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
      <div className={brukPadding ? styles.container : undefined}>
        <ErrorBoundary
          errorMessageCallback={addErrorMessage}
          errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Support' })}
        >
          {children}
        </ErrorBoundary>
      </div>
    </>
  );
};

export default SupportHeaderAndContent;
