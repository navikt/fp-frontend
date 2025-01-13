import React, { ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api';

import { ErrorBoundary } from '../app/ErrorBoundary';

import styles from './supportHeader.module.css';

type Props = {
  tekst: string;
  antall?: number;
  children: ReactNode;
  brukPadding?: boolean;
};

export const SupportHeaderAndContent = ({ tekst, antall, children, brukPadding = true }: Props) => {
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
