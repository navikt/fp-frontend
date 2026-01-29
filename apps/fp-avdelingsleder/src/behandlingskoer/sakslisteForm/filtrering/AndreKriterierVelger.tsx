import { FormattedMessage } from 'react-intl';

import { Box, HStack, Label, VStack } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AndreKriterierType } from '@navikt/fp-types';

import { lagreSakslisteAndreKriterier, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';
import { AndreKriterieValgKnapp } from './AndreKriterieValgKnapp';

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const AndreKriterierVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: lagreAndreKriterier } = useMutation({
    mutationFn: (valuesToStore: { andreKriterierType: AndreKriterierType; checked: boolean; inkluder: boolean }) =>
      lagreSakslisteAndreKriterier(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        valuesToStore.andreKriterierType,
        valuesToStore.checked,
        valuesToStore.inkluder,
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const andreKriterierTyper = useLosKodeverk('AndreKriterierType').filter(akt => akt.kode !== 'TIL_BESLUTTER');
  const half = Math.ceil(andreKriterierTyper.length / 2);

  return (
    <Box borderWidth="1" borderColor="neutral-subtle" padding="space-40">
      <VStack gap="space-8">
        <Label size="small">
          <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
        </Label>
        <HStack gap="space-8">
          <VStack gap="space-8">
            {andreKriterierTyper.slice(0, half).map(akt => (
              <AndreKriterieValgKnapp
                key={akt.kode}
                andreKriterierType={akt}
                lagreAndreKriterier={lagreAndreKriterier}
              />
            ))}
          </VStack>
          <VStack gap="space-8">
            {andreKriterierTyper.slice(half).map(akt => (
              <AndreKriterieValgKnapp
                key={akt.kode}
                andreKriterierType={akt}
                lagreAndreKriterier={lagreAndreKriterier}
              />
            ))}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
