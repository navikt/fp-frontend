import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
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

export const ALLE_YTELSETYPER_VALGT = 'ALLE';

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
    <Form formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <VStack gap="2">
        <Label size="small">
          <FormattedMessage id="FordelingAvBehandlingstypePanel.Fordeling" />
        </Label>
        <RadioGroupPanel
          name="valgtYtelseType"
          isHorizontal
          radios={[
            {
              value: FagsakYtelseType.FORELDREPENGER,
              label: finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.FORELDREPENGER),
            },
            {
              value: FagsakYtelseType.ENGANGSSTONAD,
              label: finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.ENGANGSSTONAD),
            },
            {
              value: FagsakYtelseType.SVANGERSKAPSPENGER,
              label: finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.SVANGERSKAPSPENGER),
            },
            {
              value: ALLE_YTELSETYPER_VALGT,
              label: <FormattedMessage id="FordelingAvBehandlingstypePanel.Alle" />,
            },
          ]}
        />
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
    </Form>
  );
};
