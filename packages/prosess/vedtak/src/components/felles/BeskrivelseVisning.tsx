import { BodyShort, Detail } from '@navikt/ds-react';

import type { Beskrivelse } from '@navikt/fp-types';

interface Props {
  beskrivelse: Beskrivelse;
}

export const BeskrivelseVisning = ({ beskrivelse }: Props) => (
  <div>
    {beskrivelse.header && <Detail>{beskrivelse.header}</Detail>}
    {beskrivelse.kommentarer.map(kommentar => (
      <BodyShort key={kommentar} size="small" className="whitespace-pre-wrap">
        {kommentar}
      </BodyShort>
    ))}
  </div>
);
