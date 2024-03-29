import React, { FunctionComponent, ReactElement, useEffect, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import { AvsnittSkiller, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Datepicker, SelectField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { KodeverkMedNavn } from '@navikt/ft-types';

import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';
import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

import styles from './renderUtsettelsePeriodeFieldArray.module.css';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const UTSETTELSE_PERIODE_FIELD_ARRAY_NAME = 'utsettelsePeriode';

type PeriodeData = {
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
};

export type FormValues = PeriodeData[];

const defaultUtsettelsePeriode: PeriodeData = {
  periodeFom: '',
  periodeTom: '',
  arsakForUtsettelse: '',
};

const getOverlappingValidator =
  (
    getValues: UseFormGetValues<{
      [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: FormValues };
    }>,
  ) =>
  () => {
    const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`);
    const periodeMap = perioder
      .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
      .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
    return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
  };

const getValiderFomTomRekkefølge =
  (
    getValues: UseFormGetValues<{
      [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: FormValues };
    }>,
    index: number,
    erFør: boolean,
  ) =>
  () => {
    const fomVerdi = getValues(
      `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`,
    );
    const tomVerdi = getValues(
      `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`,
    );
    if (!tomVerdi && !fomVerdi) {
      return null;
    }
    return erFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

const mapKvoter = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeUttakperioder.includes(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface OwnProps {
  utsettelseReasons: KodeverkMedNavn[];
  utsettelseKvoter: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * RenderUtsettelsePeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av utsettelseperiode.
 */
const RenderUtsettelsePeriodeFieldArray: FunctionComponent<OwnProps> = ({
  utsettelseReasons,
  utsettelseKvoter,
  readOnly,
}) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{
    [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
      [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: FormValues;
    };
  }>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultUtsettelsePeriode);
    }
  }, []);

  const triggerValidationOnChange = useCallback(() => (isSubmitted ? trigger() : undefined), [isSubmitted, trigger]);

  const fieldArrayName = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`;
  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultUtsettelsePeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.LeggTilPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => (
        <div key={field.id} className={index !== fields.length - 1 ? styles.notLastRow : ''}>
          {index > 0 && (
            <>
              <AvsnittSkiller />
              <VerticalSpacer sixteenPx />
            </>
          )}
          <FlexContainer wrap>
            <FlexRow>
              <FlexColumn>
                <SelectField
                  name={`${fieldArrayName}.${index}.periodeForUtsettelse`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Periode' }) : ''}
                  selectValues={mapKvoter(utsettelseKvoter)}
                  validate={[required]}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  name={`${fieldArrayName}.${index}.periodeFom`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }) : ''}
                  validate={[
                    required,
                    hasValidDate,
                    getValiderFomTomRekkefølge(getValues, index, true),
                    getOverlappingValidator(getValues),
                  ]}
                  onChange={triggerValidationOnChange}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  name={`${fieldArrayName}.${index}.periodeTom`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }) : ''}
                  validate={[
                    required,
                    hasValidDate,
                    getValiderFomTomRekkefølge(getValues, index, false),
                    getOverlappingValidator(getValues),
                  ]}
                  onChange={triggerValidationOnChange}
                />
              </FlexColumn>
              <FlexColumn>
                <SelectField
                  name={`${fieldArrayName}.${index}.arsakForUtsettelse`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Utsettelse.Arsak' }) : ''}
                  selectValues={mapTyper(utsettelseReasons)}
                  validate={[required]}
                  onChange={triggerValidationOnChange}
                />
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer eightPx />
            <FlexRow>
              <FlexColumn>
                <SelectField
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.ArbeidskategoriLabel' }) : ''}
                  name={`${fieldArrayName}.${index}.erArbeidstaker`}
                  selectValues={[
                    <option value="true" key="true">
                      {intl.formatMessage({ id: 'Registrering.Permisjon.ErArbeidstaker' })}
                    </option>,
                    <option value="false" key="false">
                      {intl.formatMessage({ id: 'Registrering.Permisjon.ErIkkeArbeidstaker' })}
                    </option>,
                  ]}
                  validate={[
                    erArbeidstaker => {
                      const typeArbeidRequired =
                        getValues(
                          `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}.${index}.arsakForUtsettelse`,
                        ) === 'ARBEID';
                      return typeArbeidRequired ? required(erArbeidstaker) : undefined;
                    },
                  ]}
                />
              </FlexColumn>
              {getRemoveButton && <FlexColumn>{getRemoveButton()}</FlexColumn>}
            </FlexRow>
          </FlexContainer>
        </div>
      )}
    </PeriodFieldArray>
  );
};

export default RenderUtsettelsePeriodeFieldArray;
