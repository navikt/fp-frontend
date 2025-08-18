import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteFagsakYtelseType, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const FagsakYtelseTypeVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  // TODO (TOR) Manglar type
  const { control } = useFormContext();

  const { mutate: lagreFagsakYtelseType } = useMutation({
    mutationFn: (values: { sakslisteId: number; avdelingEnhet: string; fagsakYtelseType: string; checked: boolean }) =>
      lagreSakslisteFagsakYtelseType(values.sakslisteId, values.avdelingEnhet, values.fagsakYtelseType, values.checked),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const alleFagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  return (
    <VStack gap="space-8">
      <Label size="small">
        <FormattedMessage id="FagsakYtelseTypeVelger.Stonadstype" />
      </Label>
      {alleFagsakYtelseTyper.map(fyt => (
        <RhfCheckbox
          key={fyt.kode}
          name={fyt.kode}
          control={control}
          label={alleFagsakYtelseTyper.find(type => type.kode === fyt.kode)?.navn ?? ''}
          onChange={isChecked =>
            lagreFagsakYtelseType({
              sakslisteId: valgtSakslisteId,
              avdelingEnhet: valgtAvdelingEnhet,
              fagsakYtelseType: fyt.kode,
              checked: isChecked,
            })
          }
        />
      ))}
    </VStack>
  );
};
