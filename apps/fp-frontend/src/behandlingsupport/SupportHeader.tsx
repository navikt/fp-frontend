import type { ReactElement, ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { Heading, HStack, VStack } from '@navikt/ds-react';

import { ErrorBoundary } from '@navikt/fp-ui-komponenter';
import { useRestApiErrorDispatcher } from '@navikt/fp-utils';

import styles from './supportHeader.module.css';

type Props = {
  tekst: string;
  antall?: number;
  children: ReactNode;
  brukPadding?: boolean;
  toggleVisUtvidetBehandlingDetaljerKnapp: ReactElement;
};

export const SupportHeaderAndContent = ({
  tekst,
  antall,
  children,
  brukPadding = true,
  toggleVisUtvidetBehandlingDetaljerKnapp,
}: Props) => {
  const intl = useIntl();
  const { addErrorMessage } = useRestApiErrorDispatcher();

  return (
    <VStack gap="space-16">
      <div className={styles['header']}>
        <HStack justify="space-between">
          <HStack gap="space-4" align="center">
            <Heading size="small" level="2">
              {tekst}
            </Heading>
            {toggleVisUtvidetBehandlingDetaljerKnapp}
          </HStack>
          {!!antall && antall > 0 && <div className={styles['circle']}>{antall}</div>}
        </HStack>
      </div>
      <div className={brukPadding ? styles['container'] : undefined}>
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
