import React, { FunctionComponent, ReactElement, useEffect } from 'react';
import moment from 'moment/moment';
import { UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert, Label } from '@navikt/ds-react';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, AvsnittSkiller,
} from '@navikt/ft-ui-komponenter';
import {
  dateAfterOrEqual, dateBeforeOrEqual, dateRangesNotOverlapping, hasValidDate,
  hasValidDecimal, hasValidFodselsnummer, hasValidInteger, maxLengthOrFodselsnr, maxValue, required,
} from '@navikt/ft-form-validators';
import {
  CheckboxField, Datepicker, InputField, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import arbeidskategori from '@fpsak-frontend/kodeverk/src/arbeidskategori';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

import styles from './renderGraderingPeriodeFieldArray.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const GRADERING_PERIODE_FIELD_ARRAY_NAME = 'graderingPeriode';

const maxLength9OrFodselsnr = maxLengthOrFodselsnr(9);

type GraderingPeriode = {
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}

export type FormValues = GraderingPeriode[];

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [GRADERING_PERIODE_FIELD_ARRAY_NAME]: FormValues }}>,
) => () => {
  const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const defaultGraderingPeriode: GraderingPeriode = {
  periodeFom: '',
  periodeTom: '',
  periodeForGradering: '',
  prosentandelArbeid: '',
  skalGraderes: false,
};

export const gyldigArbeidskategori = [
  arbeidskategori.ARBEIDSTAKER,
  arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE,
  arbeidskategori.FRILANSER,
];

const maxValue100 = maxValue(100);

const mapKvoter = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeUttakperioder.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

const mapArbeidskategori = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigArbeidskategori.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  graderingKvoter: KodeverkMedNavn[];
  readOnly: boolean;
  arbeidskategoriTyper: KodeverkMedNavn[];
}

/**
 * RenderGraderingPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av graderingperiode.
 */
const RenderGraderingPeriodeFieldArray: FunctionComponent<OwnProps> = ({
  graderingKvoter,
  readOnly,
  arbeidskategoriTyper,
}) => {
  const intl = useIntl();

  const {
    watch, control, getValues, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [GRADERING_PERIODE_FIELD_ARRAY_NAME]: FormValues
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`,
  });

  const graderingValues = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`);

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultGraderingPeriode);
    }
  }, []);

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultGraderingPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Gradering.LeggTilPeriode' })}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => {
        const { harSamtidigUttak, periodeFom } = graderingValues[index];
        const periodeFomForTidlig = periodeFom && moment(periodeFom, ISO_DATE_FORMAT).isBefore(moment('2019-01-01'));
        const namePart1 = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}`;
        return (
          <div key={field.id} className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
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
                    name={`${namePart1}.periodeForGradering`}
                    selectValues={mapKvoter(graderingKvoter)}
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.Gradering.Periode' })}
                    validate={[required]}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' })}
                    name={`${namePart1}.periodeFom`}
                    validate={[
                      required,
                      hasValidDate,
                      () => {
                        const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                        const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
                        return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                      },
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' })}
                    name={`${namePart1}.periodeTom`}
                    validate={[
                      required,
                      hasValidDate,
                      () => {
                        const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                        const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
                        return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                      },
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn className={styles.prosentHeader}>
                  <InputField
                    label={<FormattedMessage id="Registrering.Permisjon.Gradering.Prosentandel" />}
                    name={`${namePart1}.prosentandelArbeid`}
                    validate={[required, hasValidDecimal, maxValue100]}
                    normalizeOnBlur={(value: string) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.Orgnr' })}
                    name={`${namePart1}.arbeidsgiverIdentifikator`}
                    validate={[
                      (arbeidsgiverIdentifikator) => {
                        const arbeidsgiverIdentifikatorRequired = getValues(
                          `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.arbeidskategoriType`,
                        ) === arbeidskategori.ARBEIDSTAKER;
                        return arbeidsgiverIdentifikatorRequired ? required(arbeidsgiverIdentifikator) : undefined;
                      },
                      hasValidInteger,
                      (arbeidsgiverIdentifikator) => {
                        if (!arbeidsgiverIdentifikator) {
                          return undefined;
                        }
                        return arbeidsgiverIdentifikator.length === 11
                          ? hasValidFodselsnummer(arbeidsgiverIdentifikator) : maxLength9OrFodselsnr(arbeidsgiverIdentifikator);
                      },
                    ]}
                  />
                </FlexColumn>
              </FlexRow>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <SelectField
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.ArbeidskategoriLabel' })}
                    name={`${namePart1}.arbeidskategoriType`}
                    selectValues={mapArbeidskategori(arbeidskategoriTyper)}
                    validate={[required]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                </FlexColumn>
                <FlexColumn>
                  <div className={styles.graderesHeader}>
                    <Label size="small">
                      <FormattedMessage id="Registrering.Permisjon.Gradering.SkalGraderes" />
                    </Label>
                  </div>
                  <CheckboxField
                    name={`${namePart1}.skalGraderes`}
                    label=" "
                  />
                </FlexColumn>
                <FlexColumn>
                  <div className={styles.smalHeader}>
                    <Label size="small">
                      <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                    </Label>
                    <CheckboxField
                      readOnly={readOnly}
                      name={`${namePart1}.flerbarnsdager`}
                      label=" "
                    />
                  </div>
                </FlexColumn>
                <FlexColumn>
                  <div className={styles.smalHeader}>
                    <Label size="small">
                      <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                    </Label>
                  </div>
                  <CheckboxField
                    name={`${namePart1}.harSamtidigUttak`}
                    label=""
                  />
                </FlexColumn>
                <FlexColumn>
                  {harSamtidigUttak && (
                    <InputField
                      name={`${namePart1}.samtidigUttaksprosent`}
                      validate={[
                        required,
                        hasValidDecimal,
                        maxValue100,
                      ]}
                      label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
                    />
                  )}
                </FlexColumn>
                {getRemoveButton && (
                  <FlexColumn className={styles.placeRemoveButton}>
                    {getRemoveButton()}
                  </FlexColumn>
                )}
              </FlexRow>
              {periodeFomForTidlig && (
                <div>
                  <FlexRow wrap>
                    <Alert size="small" variant="warning">
                      <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                    </Alert>
                  </FlexRow>
                  <VerticalSpacer eightPx />
                </div>
              )}
            </FlexContainer>
          </div>
        );
      }}
    </PeriodFieldArray>
  );
};

export default RenderGraderingPeriodeFieldArray;
