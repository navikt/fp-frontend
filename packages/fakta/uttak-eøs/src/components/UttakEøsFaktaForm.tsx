import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { Button, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, Form, NumberField, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, minValue, required } from '@navikt/ft-form-validators';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import { UttakPeriodeType } from '@navikt/fp-kodeverk';
import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type { BekreftUttaksperioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

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

export const UttakEøsFaktaForm = ({ annenForelderUttakEøsPeriode, oppdater, slettPeriode, avbryt }: Props) => {
  const intl = useIntl();

  const { isReadOnly } = usePanelDataContext<BekreftUttaksperioderAp[]>();

  const formMethods = useForm<FormValues>({ defaultValues: annenForelderUttakEøsPeriode });

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
            <Datepicker
              name="fom"
              label={intl.formatMessage({ id: 'UttakEøsFaktaForm.Fom' })}
              validate={[required, hasValidDate]}
              isReadOnly={isReadOnly}
            />
            <Datepicker
              name="tom"
              label={intl.formatMessage({ id: 'UttakEøsFaktaForm.Tom' })}
              validate={[required, hasValidDate]}
              isReadOnly={isReadOnly}
            />
            {slettPeriode && (
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
            <SelectField
              name="trekkonto"
              label={intl.formatMessage({
                id: 'UttakFaktaForm.Stønadskonto',
              })}
              selectValues={[
                <option key={1} value={UttakPeriodeType.MODREKVOTE}>
                  mødrekvote
                </option>,
                <option key={2} value={UttakPeriodeType.FELLESPERIODE}>
                  fellesperiode
                </option>,
              ]}
              readOnly={isReadOnly}
              validate={[required]}
            />
            <NumberField
              name="trekkdager"
              label={intl.formatMessage({ id: 'UttakEøsFaktaForm.Trekkdager' })}
              validate={[required, hasValidInteger, minValue(0)]}
              readOnly={isReadOnly}
            />
          </HStack>
          <HStack gap="4">
            <Button size="small" variant="primary" type="submit" disabled={!formMethods.formState.isDirty}>
              {slettPeriode ? (
                <FormattedMessage id="UttakEøsFaktaForm.Oppdater" />
              ) : (
                <FormattedMessage id="UttakEøsFaktaForm.LeggTil" />
              )}
            </Button>
            <Button size="small" variant="secondary" onClick={avbryt} type="button">
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
