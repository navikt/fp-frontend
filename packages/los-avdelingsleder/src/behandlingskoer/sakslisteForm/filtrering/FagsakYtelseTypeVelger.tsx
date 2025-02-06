import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KodeverkType } from '@navikt/fp-kodeverk';

import { lagreSakslisteFagsakYtelseType, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const FagsakYtelseTypeVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: lagreFagsakYtelseType } = useMutation({
    mutationFn: (values: { sakslisteId: number; avdelingEnhet: string; fagsakYtelseType: string; checked: boolean }) =>
      lagreSakslisteFagsakYtelseType(values.sakslisteId, values.avdelingEnhet, values.fagsakYtelseType, values.checked),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const alleFagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);

  return (
    <VStack gap="2">
      <Label size="small">
        <FormattedMessage id="FagsakYtelseTypeVelger.Stonadstype" />
      </Label>
      {alleFagsakYtelseTyper.map(fyt => (
        <CheckboxField
          key={fyt.kode}
          name={fyt.kode}
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
