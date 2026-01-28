import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { FagsakYtelseType } from '@navikt/fp-types';

import { lagreSakslisteFagsakYtelseType, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

export type FormValues = {
  [key in FagsakYtelseType]?: boolean;
};

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const FagsakYtelseTypeVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { control } = useFormContext<FormValues>();

  const { mutate: lagreFagsakYtelseType } = useMutation({
    mutationFn: (values: { sakslisteId: number; avdelingEnhet: string; fagsakYtelseType: string; checked: boolean }) =>
      lagreSakslisteFagsakYtelseType(values.sakslisteId, values.avdelingEnhet, values.fagsakYtelseType, values.checked),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const alleFagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  return (
    <VStack gap="space-4">
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
