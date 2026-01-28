import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteAndreKriterier, LosUrl } from '../../../data/fplosAvdelingslederApi';

type TilBeslutterValg = 'TA_MED' | 'FJERN' | 'TA_MED_ALLE';

export type FormValues = {
  tilBeslutter: TilBeslutterValg;
};

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const TilBeslutterVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { control } = useFormContext<FormValues>();

  // TODO (TOR) Denne er midlertidig da ein skal lagra tilbeslutter adskilt frå andre kriterier.
  const { mutate: lagreAndreKriterier } = useMutation({
    mutationFn: (valuesToStore: { checked: boolean; inkluder: boolean }) =>
      lagreSakslisteAndreKriterier(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        'TIL_BESLUTTER',
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

  return (
    <RhfRadioGroup
      name="tilBeslutter"
      control={control}
      legend={<FormattedMessage id="TilBeslutterVelger.Overskrift" />}
      onChange={value =>
        lagreAndreKriterier({
          checked: value !== 'TA_MED_ALLE',
          inkluder: value === 'TA_MED',
        })
      }
    >
      <Radio value={'TA_MED_ALLE' satisfies TilBeslutterValg} size="small">
        <FormattedMessage id="TilBeslutterVelger.TaMedAlle" />
      </Radio>
      <Radio value={'TA_MED' satisfies TilBeslutterValg} size="small">
        <FormattedMessage id="TilBeslutterVelger.TaMed" />
      </Radio>
      <Radio value={'FJERN' satisfies TilBeslutterValg} size="small">
        <FormattedMessage id="TilBeslutterVelger.Fjern" />
      </Radio>
    </RhfRadioGroup>
  );
};
