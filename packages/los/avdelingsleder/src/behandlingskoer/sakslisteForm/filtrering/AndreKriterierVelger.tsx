import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteAndreKriterier, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

import styles from './andreKriterierVelger.module.css';

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const AndreKriterierVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();
  const { setValue, watch, control } = useFormContext();

  const values = watch();

  const andreKriterierTyper = useLosKodeverk('AndreKriterierType');

  const { mutate: lagreAndreKriterier } = useMutation({
    mutationFn: (valuesToStore: { andreKriterierType: string; checked: boolean; inkluder: boolean }) =>
      lagreSakslisteAndreKriterier(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        valuesToStore.andreKriterierType,
        valuesToStore.checked,
        valuesToStore.inkluder,
      ),
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

  return (
    <VStack gap="2">
      <Label size="small">
        <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
      </Label>
      {andreKriterierTyper.map(akt => (
        <div key={akt.kode}>
          <RhfCheckbox
            key={akt.kode}
            name={akt.kode}
            control={control}
            label={akt.navn}
            onChange={isChecked => {
              setValue(`${akt.kode}_inkluder`, true);
              return lagreAndreKriterier({
                andreKriterierType: akt.kode,
                checked: isChecked,
                inkluder: true,
              });
            }}
          />
          {values[akt.kode] && (
            <div className={styles.arrowbox}>
              <ArrowBox alignOffset={30}>
                <RhfRadioGroup
                  name={`${akt.kode}_inkluder`}
                  control={control}
                  isHorizontal
                  isTrueOrFalseSelection
                  onChange={skalInkludere =>
                    lagreAndreKriterier({
                      andreKriterierType: akt.kode,
                      checked: true,
                      inkluder: skalInkludere,
                    })
                  }
                  radios={[
                    {
                      value: 'true',
                      label: <FormattedMessage id="AndreKriterierVelger.TaMed" />,
                    },
                    {
                      value: 'false',
                      label: <FormattedMessage id="AndreKriterierVelger.Fjern" />,
                    },
                  ]}
                />
              </ArrowBox>
            </div>
          )}
        </div>
      ))}
    </VStack>
  );
};
