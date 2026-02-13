import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { behandlingerFristUtløptOptions } from '../../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../../data/localStorageHelper';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import { VentefristUtløperGraf } from './VentefristUtløperGraf';

const finnFagsakYtelseTypeNavn = (
  fagsakYtelseTyper: LosKodeverkMedNavn<'FagsakYtelseType'>[],
  valgtFagsakYtelseType: string,
): string => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

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

  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  const lagretFilter = getParsedValueFromLocalStorage<FormValues>(formName);

  const formMethods = useForm<FormValues>({
    defaultValues: lagretFilter ?? formDefaultValues,
  });

  const values = formMethods.watch();

  useStoreValuesInLocalStorage(formName, values);

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <VStack gap="space-16">
        <RhfRadioGroup
          name="valgtYtelsetype"
          control={formMethods.control}
          legend={<FormattedMessage id="VentefristUtløperPanel.SattPaVent" />}
        >
          <HStack gap="space-16">
            <Radio value="FP" size="small">
              {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, 'FP')}
            </Radio>
            <Radio value="ES" size="small">
              {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, 'ES')}
            </Radio>
            <Radio value="SVP" size="small">
              {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, 'SVP')}
            </Radio>
            <Radio value={ALLE_YTELSETYPER_VALGT} size="small">
              <FormattedMessage id="Label.Alle" />
            </Radio>
          </HStack>
        </RhfRadioGroup>
        <VentefristUtløperGraf
          height={height}
          behandlingerPaVent={behandlingerPaVent.filter(ompv =>
            values.valgtYtelsetype === ALLE_YTELSETYPER_VALGT ? true : values.valgtYtelsetype === ompv.fagsakYtelseType,
          )}
        />
      </VStack>
    </RhfForm>
  );
};
