import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Box, HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AndreKriterierType, LosKodeverkMedNavn } from '@navikt/fp-types';

import { lagreSakslisteAndreKriterier, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

import styles from './andreKriterierVelger.module.css';

export type FormValues = { [key in AndreKriterierType]?: boolean } & {
  [K in AndreKriterierType as `${K}_inkluder`]?: boolean;
};

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
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const andreKriterierTyper = useLosKodeverk('AndreKriterierType').filter(akt => akt.kode !== 'TIL_BESLUTTER');
  const half = Math.ceil(andreKriterierTyper.length / 2);

  return (
    <Box.New borderWidth="1" borderColor="neutral-subtle" padding="10">
      <VStack gap="space-8">
        <Label size="small">
          <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
        </Label>
        <HStack gap="space-8">
          <div>
            {andreKriterierTyper.slice(0, half).map(akt => (
              <AndreKriterierCheckbox
                key={akt.kode}
                andreKriterierType={akt}
                lagreAndreKriterier={lagreAndreKriterier}
              />
            ))}
          </div>
          <div>
            {andreKriterierTyper.slice(half).map(akt => (
              <AndreKriterierCheckbox
                key={akt.kode}
                andreKriterierType={akt}
                lagreAndreKriterier={lagreAndreKriterier}
              />
            ))}
          </div>
        </HStack>
      </VStack>
    </Box.New>
  );
};

const AndreKriterierCheckbox = ({
  andreKriterierType,
  lagreAndreKriterier,
}: {
  andreKriterierType: LosKodeverkMedNavn<'AndreKriterierType'>;
  lagreAndreKriterier: (valuesToStore: {
    andreKriterierType: AndreKriterierType;
    checked: boolean;
    inkluder: boolean;
  }) => void;
}) => {
  const { setValue, watch, control } = useFormContext<FormValues>();

  const values = watch();

  return (
    <VStack gap="space-8" key={andreKriterierType.kode}>
      <RhfCheckbox
        key={andreKriterierType.kode}
        name={andreKriterierType.kode}
        control={control}
        label={andreKriterierType.navn}
        onChange={isChecked => {
          setValue(`${andreKriterierType.kode}_inkluder`, true);
          return lagreAndreKriterier({
            andreKriterierType: andreKriterierType.kode,
            checked: isChecked,
            inkluder: true,
          });
        }}
      />
      {values[andreKriterierType.kode] && (
        <div className={styles['arrowbox']}>
          <ArrowBox alignOffset={30}>
            <RhfRadioGroup
              name={`${andreKriterierType.kode}_inkluder`}
              control={control}
              legend=""
              hideLegend
              onChange={skalInkludere =>
                lagreAndreKriterier({
                  andreKriterierType: andreKriterierType.kode,
                  checked: true,
                  inkluder: skalInkludere === true,
                })
              }
            >
              <Radio value={true} size="small">
                <FormattedMessage id="AndreKriterierVelger.TaMed" />
              </Radio>
              <Radio value={false} size="small">
                <FormattedMessage id="AndreKriterierVelger.Fjern" />
              </Radio>
            </RhfRadioGroup>
          </ArrowBox>
        </div>
      )}
    </VStack>
  );
};
