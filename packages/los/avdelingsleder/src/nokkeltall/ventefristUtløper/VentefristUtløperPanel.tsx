import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { behandlingerFristUtløptOptions } from '../../data/fplosAvdelingslederApi';
import { StoreValuesInLocalStorage } from '../../data/StoreValuesInLocalStorage';
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
  getValueFromLocalStorage: (key: string) => string | undefined;
}

export const VentefristUtløperPanel = ({ height, valgtAvdelingEnhet, getValueFromLocalStorage }: Props) => {
  const { data: behandlingerPaVent } = useQuery(behandlingerFristUtløptOptions(valgtAvdelingEnhet));

  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: lagredeVerdier ?? formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <VStack gap="space-16">
        <Label size="small">
          <FormattedMessage id="VentefristUtløperPanel.SattPaVent" />
        </Label>
        <HStack gap="space-16">
          <RhfRadioGroupNew name="valgtYtelsetype" control={formMethods.control}>
            <HStack gap="space-16">
              <Radio value={FagsakYtelseType.FORELDREPENGER} size="small">
                {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.FORELDREPENGER)}
              </Radio>
              <Radio value={FagsakYtelseType.ENGANGSSTONAD} size="small">
                {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.ENGANGSSTONAD)}
              </Radio>
              <Radio value={FagsakYtelseType.SVANGERSKAPSPENGER} size="small">
                {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.SVANGERSKAPSPENGER)}
              </Radio>
              <Radio value={ALLE_YTELSETYPER_VALGT} size="small">
                <FormattedMessage id="VentefristUtløperPanel.Alle" />
              </Radio>
            </HStack>
          </RhfRadioGroupNew>
        </HStack>
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
