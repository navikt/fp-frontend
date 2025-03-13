import type { ReactElement, ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { Heading, HStack, VStack } from '@navikt/ds-react';

import { ErrorBoundary } from '../app/ErrorBoundary';
import { useRestApiErrorDispatcher } from '../data/error/RestApiErrorContext';

import styles from './supportHeader.module.css';

type Props = {
  tekst: string;
  antall?: number;
  children: ReactNode;
  brukPadding?: boolean;
  toggleVisUtvidetBehandlingSupportIndexKnapp: ReactElement;
};

export const SupportHeaderAndContent = ({
  tekst,
  antall,
  children,
  brukPadding = true,
  toggleVisUtvidetBehandlingSupportIndexKnapp,
}: Props) => {
  const intl = useIntl();
  const { addErrorMessage } = useRestApiErrorDispatcher();

  return (
    <VStack gap="4">
      <div className={styles.header}>
        <HStack justify="space-between">
          <Heading size="small">
            {tekst} {toggleVisUtvidetBehandlingSupportIndexKnapp}
          </Heading>
          {!!antall && antall > 0 && <div className={styles.circle}>{antall}</div>}
        </HStack>
      </div>
      <div className={brukPadding ? styles.container : undefined}>
        <ErrorBoundary
          errorMessageCallback={addErrorMessage}
          errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Support' })}
        >
          {children}
        </ErrorBoundary>
      </div>
    </VStack>
  );
};
