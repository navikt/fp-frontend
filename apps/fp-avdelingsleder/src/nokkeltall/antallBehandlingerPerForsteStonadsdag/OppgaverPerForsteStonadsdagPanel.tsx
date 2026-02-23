import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { oppgaverPerFørsteStønadsdagMånedOptions } from '../../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../../data/localStorageHelper';
import { OppgaverPerForsteStonadsdagGraf } from './OppgaverPerForsteStonadsdagGraf';

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

const ALLE_YTELSETYPER_VALGT = 'ALLE';

const formName = 'oppgaverPerForsteStonadsdagForm';
const formDefaultValues = { valgtYtelsetype: ALLE_YTELSETYPER_VALGT };

type FormValues = {
  valgtYtelsetype: string;
};

export const OppgaverPerForsteStonadsdagPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: oppgaverPerForsteStonadsdag } = useQuery(oppgaverPerFørsteStønadsdagMånedOptions(valgtAvdelingEnhet));

  const lagretFilter = getParsedValueFromLocalStorage<FormValues>(formName);

  const formMethods = useForm<FormValues>({
    defaultValues: lagretFilter ?? formDefaultValues,
  });

  const values = formMethods.watch();

  useStoreValuesInLocalStorage(formName, values);

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <VStack gap="space-16">
        <Label>
          <FormattedMessage id="OppgaverPerForsteStonadsdagPanel.FordeltPaForsteStonadsdag" />
        </Label>
        <OppgaverPerForsteStonadsdagGraf height={height} oppgaverPerForsteStonadsdag={oppgaverPerForsteStonadsdag} />
      </VStack>
    </RhfForm>
  );
};
