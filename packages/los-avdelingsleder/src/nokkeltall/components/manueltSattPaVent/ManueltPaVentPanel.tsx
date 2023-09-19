import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { HStack, Label } from '@navikt/ds-react';
import { Form, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FagsakYtelseType, KodeverkType } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

import OppgaverManueltPaVent from '../../../typer/oppgaverManueltPaVentTsType';
import ManueltPaVentGraf from './ManueltPaVentGraf';
import StoreValuesInLocalStorage from '../../../data/StoreValuesInLocalStorage';
import useLosKodeverk from '../../../data/useLosKodeverk';

const finnFagsakYtelseTypeNavn = (fagsakYtelseTyper: KodeverkMedNavn[], valgtFagsakYtelseType: string): string => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

export const ALLE_YTELSETYPER_VALGT = 'ALLE';
export const UKE_4 = '4';

const uker = [
  {
    kode: UKE_4,
    tekstKode: 'ManueltPaVentPanel.FireSisteUker',
  },
  {
    kode: '8',
    tekstKode: 'ManueltPaVentPanel.AtteSisteUker',
  },
];

const erDatoInnenforPeriode = (behandlingFrist: string, ukevalg: string): boolean => {
  if (ukevalg === uker[1].kode) {
    return true;
  }

  const dataOmFireUker = dayjs().add(4, 'w');
  return dayjs(behandlingFrist).isSameOrBefore(dataOmFireUker);
};

interface OwnProps {
  height: number;
  oppgaverManueltPaVent: OppgaverManueltPaVent[];
  getValueFromLocalStorage: (key: string) => string | undefined;
}

const formName = 'manueltPaVentForm';
const formDefaultValues = { valgtYtelsetype: ALLE_YTELSETYPER_VALGT, ukevalg: UKE_4 };

type FormValues = {
  ukevalg: string;
  valgtYtelsetype: string;
};

/**
 * ManueltPaVentPanel.
 */
const ManueltPaVentPanel: FunctionComponent<OwnProps> = ({
  height,
  oppgaverManueltPaVent,
  getValueFromLocalStorage,
}) => {
  const intl = useIntl();
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
        <FormattedMessage id="ManueltPaVentPanel.SattPaVent" />
      </Label>
      <VerticalSpacer sixteenPx />
      <HStack gap="4">
        <SelectField
          name="ukevalg"
          label=""
          selectValues={uker.map(u => (
            <option key={u.kode} value={u.kode}>
              {intl.formatMessage({ id: u.tekstKode })}
            </option>
          ))}
        />
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
              label: <FormattedMessage id="ManueltPaVentPanel.Alle" />,
            },
          ]}
        />
      </HStack>
      <VerticalSpacer sixteenPx />
      <ManueltPaVentGraf
        height={height}
        isFireUkerValgt={values.ukevalg === UKE_4}
        oppgaverManueltPaVent={
          oppgaverManueltPaVent &&
          oppgaverManueltPaVent
            .filter(ompv =>
              values.valgtYtelsetype === ALLE_YTELSETYPER_VALGT
                ? true
                : values.valgtYtelsetype === ompv.fagsakYtelseType,
            )
            .filter(ompv => erDatoInnenforPeriode(ompv.behandlingFrist, values.ukevalg))
        }
      />
    </Form>
  );
};

export default ManueltPaVentPanel;
