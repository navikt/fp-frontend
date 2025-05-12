import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { FagsakYtelseType, KodeverkLosType } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import { behandlingerFristUtløptOptions } from '../../data/fplosAvdelingslederApi';
import { StoreValuesInLocalStorage } from '../../data/StoreValuesInLocalStorage';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import { VentefristUtløperGraf } from './VentefristUtløperGraf';

const finnFagsakYtelseTypeNavn = (fagsakYtelseTyper: KodeverkMedNavn[], valgtFagsakYtelseType: string): string => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

export const ALLE_YTELSETYPER_VALGT = 'ALLE';

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

  const fagsakYtelseTyper = useLosKodeverk(KodeverkLosType.FAGSAK_YTELSE_TYPE);

  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: lagredeVerdier ?? formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <Form<FormValues> formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <VStack gap="4">
        <Label size="small">
          <FormattedMessage id="VentefristUtløperPanel.SattPaVent" />
        </Label>
        <HStack gap="4">
          <RadioGroupPanel
            name="valgtYtelsetype"
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
                label: <FormattedMessage id="VentefristUtløperPanel.Alle" />,
              },
            ]}
          />
        </HStack>
        <VentefristUtløperGraf
          height={height}
          behandlingerPaVent={behandlingerPaVent.filter(ompv =>
            values.valgtYtelsetype === ALLE_YTELSETYPER_VALGT ? true : values.valgtYtelsetype === ompv.fagsakYtelseType,
          )}
        />
      </VStack>
    </Form>
  );
};
