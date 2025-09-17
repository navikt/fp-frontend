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

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const BelopSorteringValg = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  // TODO (TOR) Manglar type
  const { watch, trigger, control } = useFormContext();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');

  const { mutate: lagreSakslisteSorteringTidsintervallDager } = useMutation({
    mutationFn: (valuesToStore: { fra: number; til: number }) =>
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

  const lagreFra = (nyFraVerdi: number) =>
    lagreSakslisteSorteringTidsintervallDager({
      fra: nyFraVerdi,
      til: tilVerdi,
    });
  const lagreTil = (nyTilVerdi: number) =>
    lagreSakslisteSorteringTidsintervallDager({
      fra: fraVerdi,
      til: nyTilVerdi,
    });

  const lagreFraDebounce = useDebounce('fra', lagreFra, trigger);
  const lagreTilDebounce = useDebounce('til', lagreTil, trigger);

  return (
    <ArrowBox>
      <Detail>
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <HStack gap="space-16">
        <RhfTextField
          name="fra"
          control={control}
          className={styles.dato}
          validate={[hasValidPosOrNegInteger]}
          onChange={value => lagreFraDebounce(value)}
        />
        <Detail className={styles.beløp}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
        <RhfTextField
          name="til"
          control={control}
          className={styles.dato}
          validate={[hasValidPosOrNegInteger]}
          onChange={value => lagreTilDebounce(value)}
        />
        <Detail className={styles.beløp}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
      </HStack>
    </ArrowBox>
  );
};
