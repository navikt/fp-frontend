import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { HStack, Label } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FagsakYtelseType, KodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

import BehandlingVentefrist from '../../../typer/behandlingVentefristTsType';
import StoreValuesInLocalStorage from '../../../data/StoreValuesInLocalStorage';
import useLosKodeverk from '../../../data/useLosKodeverk';
import VentefristUtløperGraf from './VentefristUtløperGraf';

const finnFagsakYtelseTypeNavn = (fagsakYtelseTyper: KodeverkMedNavn[], valgtFagsakYtelseType: string): string => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

export const ALLE_YTELSETYPER_VALGT = 'ALLE';

interface OwnProps {
  height: number;
  behandlingerPaVent: BehandlingVentefrist[];
  getValueFromLocalStorage: (key: string) => string | undefined;
}

const formName = 'ventefristUtløperForm';
const formDefaultValues = { valgtYtelsetype: ALLE_YTELSETYPER_VALGT };

type FormValues = {
  valgtYtelsetype: string;
};

/**
 * VentefristUtløperPanel.
 */
const VentefristUtløperPanel: FunctionComponent<OwnProps> = ({
  height,
  behandlingerPaVent,
  getValueFromLocalStorage,
}) => {
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);
  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: lagredeVerdier || formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <Form<FormValues> formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <Label size="small">
        <FormattedMessage id="VentefristUtløperPanel.SattPaVent" />
      </Label>
      <VerticalSpacer sixteenPx />
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
      <VerticalSpacer sixteenPx />
      <VentefristUtløperGraf
        height={height}
        behandlingerPaVent={
          behandlingerPaVent &&
          behandlingerPaVent
            .filter(ompv =>
              values.valgtYtelsetype === ALLE_YTELSETYPER_VALGT
                ? true
                : values.valgtYtelsetype === ompv.fagsakYtelseType,
            )
        }
      />
    </Form>
  );
};

export default VentefristUtløperPanel;
