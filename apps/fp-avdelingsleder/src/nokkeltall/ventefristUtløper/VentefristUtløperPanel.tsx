import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { behandlingerFristUtløptOptions } from '../../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../../data/localStorageHelper';
import { VentefristUtløperGraf } from './VentefristUtløperGraf';

const ALLE_YTELSETYPER_VALGT = 'ALLE';

const formName = 'ventefristUtløperForm';
const formDefaultValues = { valgtYtelsetype: ALLE_YTELSETYPER_VALGT };

type FormValues = {
  valgtYtelsetype: string;
};

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const VentefristUtløperPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: behandlingerPaVent } = useQuery(behandlingerFristUtløptOptions(valgtAvdelingEnhet));

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
          <FormattedMessage id="VentefristUtløperPanel.SattPaVent" />
        </Label>
        <VentefristUtløperGraf height={height} behandlingerPaVent={behandlingerPaVent} />
      </VStack>
    </RhfForm>
  );
};
