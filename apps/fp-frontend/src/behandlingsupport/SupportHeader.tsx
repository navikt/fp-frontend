import type { ReactElement, ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { Badge, Box, Heading, HStack } from '@navikt/ds-react';

import { ErrorBoundary, useRestApiErrorDispatcher } from '@navikt/fp-app-felles';

import styles from './behandlingSupportIndex.module.css';

interface Props {
  tekst: string;
  antall?: number;
  children: ReactNode;
  toggleVisUtvidetBehandlingDetaljerKnapp: ReactElement;
  headerHandlinger?: ReactNode;
}

export const SupportHeaderAndContent = ({
  tekst,
  antall,
  children,
  toggleVisUtvidetBehandlingDetaljerKnapp,
  headerHandlinger,
}: Props) => {
  const intl = useIntl();
  const { addErrorMessage } = useRestApiErrorDispatcher();

  return (
    <div className={styles['panel']}>
      <Box background="neutral-soft" borderColor="neutral-subtle" borderWidth="0 0 1 0" padding="space-20">
        <HStack justify="space-between">
          <HStack gap="space-4" align="center">
            <Heading size="small" level="2">
              {tekst}
            </Heading>
            {toggleVisUtvidetBehandlingDetaljerKnapp}
          </HStack>
          <HStack gap="space-32" align="center">
            {headerHandlinger}
            {!!antall && antall > 0 && <Badge count={antall} data-color="neutral" />}
          </HStack>
        </HStack>
      </Box>
      <div className={styles['content']}>
        <ErrorBoundary
          errorMessageCallback={addErrorMessage}
          errorMessage={intl.formatMessage({ id: 'ErrorBoundary.Error' }, { name: 'Support' })}
        >
          {children}
        </ErrorBoundary>
      </div>
    </div>
  );
};
