import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';

import { AndreKriterieValgKnapp } from './AndreKriterieValgKnapp';
import { useAktuelleAndreKriterier } from './useAktuelleAndreKriterier';

export const AndreKriterierVelger = () => {
  const aktuelleKriterier = useAktuelleAndreKriterier();

  return (
    <VStack gap="space-8">
      <Label size="small">
        <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
      </Label>
      <ul className="columns-1 2xl:columns-2 list-none">
        {aktuelleKriterier.map(akt => (
          <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
        ))}
      </ul>
    </VStack>
  );
};
