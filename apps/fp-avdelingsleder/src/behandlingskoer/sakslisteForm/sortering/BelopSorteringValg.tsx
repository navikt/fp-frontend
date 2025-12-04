/* eslint-disable @typescript-eslint/no-unsafe-argument -- [JOHANNES] vent på typet form */

import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack } from '@navikt/ds-react';
import { RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteSorteringIntervall, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useDebounce } from '../useDebounce';

import styles from './sorteringVelger.module.css';

export type FormValues = {
  fraBeløp?: string;
  tilBeløp?: string;
};

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const BelopSorteringValg = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { watch, trigger, control } = useFormContext<FormValues>();
  const fraVerdi = watch('fraBeløp');
  const tilVerdi = watch('tilBeløp');

  const { mutate: lagreSakslisteSorteringTidsintervallDager } = useMutation({
    mutationFn: (valuesToStore: { fra: string | undefined; til: string | undefined }) =>
      lagreSakslisteSorteringIntervall(valgtSakslisteId, valuesToStore.fra, valuesToStore.til, valgtAvdelingEnhet),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const lagreFra = (nyFraVerdi: string) =>
    lagreSakslisteSorteringTidsintervallDager({
      fra: nyFraVerdi,
      til: tilVerdi,
    });
  const lagreTil = (nyTilVerdi: string) =>
    lagreSakslisteSorteringTidsintervallDager({
      fra: fraVerdi,
      til: nyTilVerdi,
    });

  const lagreFraDebounce = useDebounce('fraBeløp', lagreFra, trigger);
  const lagreTilDebounce = useDebounce('tilBeløp', lagreTil, trigger);

  return (
    <ArrowBox>
      <Detail>
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <HStack gap="space-16">
        <RhfTextField
          name="fraBeløp"
          control={control}
          className={styles['dato']}
          validate={[hasValidPosOrNegInteger]}
          onChange={value => lagreFraDebounce(value)}
        />
        <Detail className={styles['beløp']}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
        <RhfTextField
          name="tilBeløp"
          control={control}
          className={styles['dato']}
          validate={[hasValidPosOrNegInteger]}
          onChange={value => lagreTilDebounce(value)}
        />
        <Detail className={styles['beløp']}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
      </HStack>
    </ArrowBox>
  );
};
