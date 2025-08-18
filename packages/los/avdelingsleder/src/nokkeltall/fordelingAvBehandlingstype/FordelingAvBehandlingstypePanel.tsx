import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { oppgaverForAvdelingOptions } from '../../data/fplosAvdelingslederApi';
import { StoreValuesInLocalStorage } from '../../data/StoreValuesInLocalStorage';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import { FordelingAvBehandlingstypeGraf } from './FordelingAvBehandlingstypeGraf';

const finnFagsakYtelseTypeNavn = (
  fagsakYtelseTyper: LosKodeverkMedNavn<'FagsakYtelseType'>[],
  valgtFagsakYtelseType: string,
) => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

const ALLE_YTELSETYPER_VALGT = 'ALLE';

interface InitialValues {
  valgtYtelseType: string;
}

type FormValues = {
  valgtYtelseType: string;
};

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
  getValueFromLocalStorage: (key: string) => string | undefined;
}

const formName = 'fordelingAvBehandlingstype';
const formDefaultValues: InitialValues = { valgtYtelseType: ALLE_YTELSETYPER_VALGT };

export const FordelingAvBehandlingstypePanel = ({ height, valgtAvdelingEnhet, getValueFromLocalStorage }: Props) => {
  const { data: oppgaverForAvdeling } = useQuery(oppgaverForAvdelingOptions(valgtAvdelingEnhet));

  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');
  const behandlingTyper = useLosKodeverk('BehandlingType');
  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: lagredeVerdier ?? formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <RhfForm formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <VStack gap="space-8">
        <Label size="small">
          <FormattedMessage id="FordelingAvBehandlingstypePanel.Fordeling" />
        </Label>
        <RhfRadioGroupNew name="valgtYtelseType" control={formMethods.control}>
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
              <FormattedMessage id="FordelingAvBehandlingstypePanel.Alle" />
            </Radio>
          </HStack>
        </RhfRadioGroupNew>
        <FordelingAvBehandlingstypeGraf
          height={height}
          behandlingTyper={behandlingTyper}
          oppgaverForAvdeling={
            oppgaverForAvdeling
              ? oppgaverForAvdeling.filter(ofa =>
                  values.valgtYtelseType === ALLE_YTELSETYPER_VALGT
                    ? true
                    : values.valgtYtelseType === ofa.fagsakYtelseType,
                )
              : []
          }
        />
      </VStack>
    </RhfForm>
  );
};
