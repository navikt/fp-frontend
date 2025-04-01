import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack } from '@navikt/ds-react';
import { InputField } from '@navikt/ft-form-hooks';
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

  const { watch, trigger } = useFormContext();
  const fraVerdi = watch('fra');
  const tilVerdi = watch('til');

  const { mutate: lagreSakslisteSorteringTidsintervallDager } = useMutation({
    mutationFn: (valuesToStore: { fra: number; til: number }) =>
      lagreSakslisteSorteringIntervall(valgtSakslisteId, valuesToStore.fra, valuesToStore.til, valgtAvdelingEnhet),
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

  const lagreFraDebounce = useDebounce<number>('fra', lagreFra, trigger);
  const lagreTilDebounce = useDebounce<number>('til', lagreTil, trigger);

  return (
    <ArrowBox>
      <Detail>
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <HStack gap="4">
        <InputField
          name="fra"
          className={styles.dato}
          validate={[hasValidPosOrNegInteger]}
          onChange={lagreFraDebounce}
        />
        <Detail className={styles.beløp}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
        <InputField
          name="til"
          className={styles.dato}
          validate={[hasValidPosOrNegInteger]}
          onChange={lagreTilDebounce}
        />
        <Detail className={styles.beløp}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
      </HStack>
    </ArrowBox>
  );
};
