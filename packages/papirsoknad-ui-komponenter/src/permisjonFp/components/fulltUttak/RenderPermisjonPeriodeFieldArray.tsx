import React, { ReactElement, useEffect } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFieldArray, useFormContext, UseFormGetValues } from 'react-hook-form';
import { Alert, Button, Label } from '@navikt/ds-react';
import { XMarkIcon } from '@navikt/aksel-icons';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, Datepicker, InputField, PeriodFieldArray, SelectField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  maxValue,
  required,
} from '@navikt/ft-form-validators';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { KodeverkType, UttakPeriodeType } from '@navikt/fp-kodeverk';

import styles from './renderPermisjonPeriodeFieldArray.module.css';
import { PermisjonFormValues, PermisjonPeriode } from '../../types';
import { PERMISJON_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';

const FA_PREFIX = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`;
const getPrefix = (index: number) => `${FA_PREFIX}.${index}` as const;

const maxValue100 = maxValue(100);

export const gyldigeUttakperioder = [
  UttakPeriodeType.FELLESPERIODE,
  UttakPeriodeType.FEDREKVOTE,
  UttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  UttakPeriodeType.FORELDREPENGER,
  UttakPeriodeType.MODREKVOTE,
];

const mapPeriodeTyper = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeUttakperioder.some(gu => gu === kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

const mapAktiviteter = (aktiviteter: KodeverkMedNavn[]): ReactElement[] =>
  aktiviteter.map(({ kode, navn }) => (
    <option value={kode} key={kode}>
      {navn}
    </option>
  ));

export const PERIODS_WITH_NO_MORS_AKTIVITET = [
  UttakPeriodeType.FEDREKVOTE,
  UttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  UttakPeriodeType.MODREKVOTE,
];

const getLabel = (erForsteRad: boolean, text: string): string => (erForsteRad ? text : '');

const erPeriodeFormFør01012019 = (periodeFom: string | undefined): boolean =>
  !!periodeFom && dayjs(periodeFom, ISO_DATE_FORMAT).isBefore(dayjs('2019-01-01'));

const getOverlappingValidator = (getValues: UseFormGetValues<PermisjonFormValues>) => () => {
  const perioder = getValues(FA_PREFIX) || [];
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return dateRangesNotOverlapping(periodeMap);
};

const getValiderFomOgTomVerdi =
  (getValues: UseFormGetValues<PermisjonFormValues>, index: number, erFør: boolean) => () => {
    const fomVerdi = getValues(`${getPrefix(index)}.periodeFom`);
    const tomVerdi = getValues(`${getPrefix(index)}.periodeTom`);
    if (!tomVerdi || !fomVerdi) {
      return null;
    }

    return erFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };

interface Props {
  readOnly: boolean;
  sokerErMor: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RenderPermisjonPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av perioder med permijon.
 */
export const RenderPermisjonPeriodeFieldArray = ({ sokerErMor, readOnly, alleKodeverk }: Props) => {
  const intl = useIntl();

  const periodeTyper = alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE];
  const morsAktivitetTyper = alleKodeverk[KodeverkType.MORS_AKTIVITET];

  if (morsAktivitetTyper.filter(({ kode }) => kode === '-').length === 0) {
    morsAktivitetTyper.unshift({ kode: '-', navn: '', kodeverk: '' });
  }

  const {
    control,
    getValues,
    trigger,
    watch,
    formState: { isSubmitted },
  } = useFormContext<PermisjonFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: FA_PREFIX,
  });

  useEffect(() => {
    if (fields.length === 0) {
      // @ts-ignore Fiks
      append({});
    }
  }, []);

  return (
    <PeriodFieldArray
      readOnly={readOnly}
      fields={fields}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.nyPeriode' })}
      emptyPeriodTemplate={{}}
      append={append}
      remove={remove}
    >
      {(field, index) => {
        const erForsteRad = index === 0;

        const periode = watch(getPrefix(index));

        const periodeFomForTidlig = erPeriodeFormFør01012019(periode.periodeFom);
        const visEllerSkulOverskriftStyle = erForsteRad ? styles.visOverskrift : styles.skjulOverskrift;

        const skalDisableMorsAktivitet =
          PERIODS_WITH_NO_MORS_AKTIVITET.some(pma => pma === periode.periodeType) || periode.periodeType === '';

        return (
          <div key={field.id}>
            <FlexContainer>
              <FlexRow wrap>
                <FlexColumn className={styles.selectFieldWidth}>
                  <SelectField
                    readOnly={readOnly}
                    name={`${getPrefix(index)}.periodeType`}
                    label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeType' }))}
                    selectValues={mapPeriodeTyper(periodeTyper)}
                    validate={[required]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${getPrefix(index)}.periodeFom`}
                    label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }))}
                    validate={[
                      required,
                      hasValidDate,
                      getValiderFomOgTomVerdi(getValues, index, true),
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    isReadOnly={readOnly}
                    name={`${getPrefix(index)}.periodeTom`}
                    label={getLabel(erForsteRad, intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }))}
                    validate={[
                      required,
                      hasValidDate,
                      getValiderFomOgTomVerdi(getValues, index, false),
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                {!sokerErMor && (
                  <FlexColumn>
                    <SelectField
                      readOnly={readOnly}
                      disabled={skalDisableMorsAktivitet}
                      name={`${getPrefix(index)}.morsAktivitet`}
                      label={getLabel(
                        erForsteRad,
                        intl.formatMessage({ id: 'Registrering.Permisjon.Fellesperiode.morsAktivitet' }),
                      )}
                      selectValues={mapAktiviteter(morsAktivitetTyper)}
                      hideValueOnDisable
                    />
                  </FlexColumn>
                )}
                <FlexColumn className={styles.smalHeader}>
                  <Label size="small" className={visEllerSkulOverskriftStyle}>
                    <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                  </Label>
                  <CheckboxField readOnly={readOnly} name={`${getPrefix(index)}.flerbarnsdager`} label=" " />
                </FlexColumn>
                <FlexColumn className={styles.smalHeader}>
                  <Label size="small" className={visEllerSkulOverskriftStyle}>
                    <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                  </Label>
                  <CheckboxField readOnly={readOnly} name={`${getPrefix(index)}.harSamtidigUttak`} label=" " />
                </FlexColumn>
                {periode.harSamtidigUttak && (
                  <FlexColumn className={erForsteRad ? '' : styles.alignSamtidigUttak}>
                    <InputField
                      name={`${getPrefix(index)}.samtidigUttaksprosent`}
                      validate={[hasValidDecimal, maxValue100]}
                      label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
                      normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value.toString()).toFixed(2))}
                    />
                  </FlexColumn>
                )}
                <FlexColumn>
                  {!readOnly && (
                    <Button
                      className={erForsteRad ? styles.buttonRemoveFirst : styles.buttonRemove}
                      type="button"
                      variant="tertiary-neutral"
                      icon={<XMarkIcon />}
                      onClick={() => {
                        remove(index);
                      }}
                    />
                  )}
                </FlexColumn>
              </FlexRow>
              {periodeFomForTidlig && (
                <>
                  <FlexRow wrap>
                    <Alert size="small" variant="warning">
                      <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                    </Alert>
                  </FlexRow>
                  <VerticalSpacer sixteenPx />
                </>
              )}
            </FlexContainer>
            <VerticalSpacer eightPx />
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

RenderPermisjonPeriodeFieldArray.transformValues = (values: PermisjonPeriode[]) =>
  values.map(value => {
    if (PERIODS_WITH_NO_MORS_AKTIVITET.some(pma => pma === value.periodeType)) {
      return {
        periodeType: value.periodeType,
        periodeFom: value.periodeFom,
        periodeTom: value.periodeTom,
        flerbarnsdager: value.flerbarnsdager ? value.flerbarnsdager : false,
        harSamtidigUttak: value.harSamtidigUttak ? value.harSamtidigUttak : false,
        samtidigUttaksprosent: value.samtidigUttaksprosent,
      };
    }
    return {
      periodeType: value.periodeType,
      periodeFom: value.periodeFom,
      periodeTom: value.periodeTom,
      morsAktivitet: value.morsAktivitet,
      flerbarnsdager: value.flerbarnsdager ? value.flerbarnsdager : false,
      harSamtidigUttak: value.harSamtidigUttak ? value.harSamtidigUttak : false,
      samtidigUttaksprosent: value.samtidigUttaksprosent,
    };
  });
