import { BodyShort, VStack } from '@navikt/ds-react';

import type { Beskrivelse } from '@navikt/fp-types';

interface Props {
  beskrivelse: Beskrivelse;
}

export const BeskrivelseVisning = ({ beskrivelse }: Props) => {
  return (
    <VStack gap="space-4">
      {beskrivelse.header && <BodyShort size="small">{beskrivelse.header}</BodyShort>}
      {beskrivelse.kommentarer.map(kommentar => (
        <BodyShort key={kommentar} size="small">
          {kommentar}
        </BodyShort>
      ))}
    </VStack>
  );
};
