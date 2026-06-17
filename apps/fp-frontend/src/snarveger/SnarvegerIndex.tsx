import { useIntl } from 'react-intl';

import { BodyShort, Heading, VStack } from '@navikt/ds-react';

import { SnarvegerOversikt } from './SnarvegerOversikt';

/**
 * SnarvegerIndex
 *
 * Eiga side som listar opp alle tastatursnarvegane i applikasjonen. Nåast frå
 * header-menyen, og viser same innhald som hjelp-modalen (`?`).
 */
export const SnarvegerIndex = () => {
  const intl = useIntl();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
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
