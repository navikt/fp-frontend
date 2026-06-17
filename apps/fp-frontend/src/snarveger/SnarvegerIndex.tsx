import { useIntl } from 'react-intl';

import { BodyShort, Heading, VStack } from '@navikt/ds-react';

import { SnarvegerOversikt } from './SnarvegerOversikt';

import styles from './snarvegerIndex.module.css';

/**
 * SnarvegerIndex
 *
 * Eiga side som listar opp alle tastatursnarvegane i applikasjonen. Nåast frå
 * header-menyen, og viser same innhald som hjelp-modalen (`?`).
 */
export const SnarvegerIndex = () => {
  const intl = useIntl();

  return (
    <div className={styles['side']}>
      <VStack gap="space-24">
        <div>
          <Heading size="large" level="1" spacing>
            {intl.formatMessage({ id: 'Snarveger.Tittel' })}
          </Heading>
          <BodyShort>{intl.formatMessage({ id: 'Snarveger.Ingress' })}</BodyShort>
        </div>
        <SnarvegerOversikt />
      </VStack>
    </div>
  );
};
