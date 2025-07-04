import { type ReactElement, useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { Button, HStack, VStack } from '@navikt/ds-react';
import { Form, RhfDatepicker, RhfNumericField, RhfSelect } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, minValue, required } from '@navikt/ft-form-validators';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import { RelasjonsRolleType, UttakPeriodeType } from '@navikt/fp-kodeverk';
import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type { BekreftUttaksperioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

export type FormValues = {
  fom: string;
  tom: string;
  trekkonto: UttakPeriodeType;
  trekkdager: number;
};

interface Props {
  annenForelderUttakEøsPeriode?: AnnenforelderUttakEøsPeriode;
  oppdater: (data: FormValues) => void;
  slettPeriode?: () => void;
  avbryt: () => void;
}

export const UttakESFaktaDetailForm = ({ annenForelderUttakEøsPeriode, oppdater, slettPeriode, avbryt }: Props) => {
  const intl = useIntl();

  const { isReadOnly, fagsak } = usePanelDataContext<BekreftUttaksperioderAp[]>();

  const gyldigeKontotyperOption = (): ReactElement[] => {
    if (fagsak.relasjonsRolleType === RelasjonsRolleType.MOR) {
      return [
        <option key={0} value={UttakPeriodeType.FELLESPERIODE}>
          {UttakPeriodeType.FELLESPERIODE}
        </option>,
        <option key={1} value={UttakPeriodeType.FEDREKVOTE}>
          {UttakPeriodeType.FEDREKVOTE}
        </option>,
      ];
    } else {
      return [
        <option key={0} value={UttakPeriodeType.FELLESPERIODE}>
          {UttakPeriodeType.FELLESPERIODE}
        </option>,
        <option key={1} value={UttakPeriodeType.MODREKVOTE}>
          {UttakPeriodeType.MODREKVOTE}
        </option>,
      ];
    }
  };

  const formMethods = useForm<FormValues>({ defaultValues: annenForelderUttakEøsPeriode });
  const fom = formMethods.watch('fom');
  const [visSletteDialog, setVisSletteDialog] = useState(false);
  const slettUttaksperiode = () => {
    setVisSletteDialog(false);
    if (slettPeriode) {
      slettPeriode();
    }
  };

  return (
    <>
      <Form formMethods={formMethods} onSubmit={oppdater}>
        <VStack gap="8">
          <HStack gap="4" align="end">
            <RhfDatepicker
              name="fom"
              label={intl.formatMessage({ id: 'UttakEøsFaktaForm.Fom' })}
              validate={[required, hasValidDate]}
              isReadOnly={isReadOnly}
            />
            <RhfDatepicker
              name="tom"
              label={intl.formatMessage({ id: 'UttakEøsFaktaForm.Tom' })}
              validate={[required, hasValidDate, validerTomEtterFom(intl, formMethods.getValues)]}
              isReadOnly={isReadOnly}
              fromDate={dayjs(fom, ISO_DATE_FORMAT).toDate()}
            />
            {slettPeriode && !isReadOnly && (
              <Button
                size="small"
                variant="tertiary"
                type="button"
                icon={<TrashIcon />}
                onClick={() => setVisSletteDialog(true)}
              >
                <FormattedMessage id="UttakFaktaForm.Slett" />
              </Button>
            )}
          </HStack>
          <HStack gap="4">
            <RhfSelect
              name="trekkonto"
              label={intl.formatMessage({
                id: 'UttakFaktaForm.Stønadskonto',
              })}
              selectValues={gyldigeKontotyperOption()}
              readOnly={isReadOnly}
              validate={[required]}
            />
            <RhfNumericField
              name="trekkdager"
              label={intl.formatMessage({ id: 'UttakEøsFaktaForm.Trekkdager' })}
              validate={[required, minValue(0), hasValidDecimal]}
              readOnly={isReadOnly}
              forceTwoDecimalDigits
            />
          </HStack>
          <HStack gap="4">
            <Button
              size="small"
              variant="primary"
              type="submit"
              disabled={!formMethods.formState.isDirty || isReadOnly}
            >
              {slettPeriode ? (
                <FormattedMessage id="UttakEøsFaktaForm.Oppdater" />
              ) : (
                <FormattedMessage id="UttakEøsFaktaForm.LeggTil" />
              )}
            </Button>
            <Button size="small" variant="secondary" onClick={avbryt} type="button" disabled={isReadOnly}>
              <FormattedMessage id="UttakEøsFaktaForm.Avslutt" />
            </Button>
          </HStack>
        </VStack>
      </Form>
      {visSletteDialog && (
        <OkAvbrytModal
          text={intl.formatMessage({ id: 'UttakEøsFaktaForm.VilDuSlette' })}
          submit={slettUttaksperiode}
          cancel={() => setVisSletteDialog(false)}
          showModal
        />
      )}
    </>
  );
};

const validerTomEtterFom = (intl: IntlShape, getValues: UseFormGetValues<FormValues>) => (tom?: string) =>
  dayjs(tom).isBefore(getValues('fom')) ? intl.formatMessage({ id: 'UttakEøsFaktaForm.TomForFom' }) : null;
