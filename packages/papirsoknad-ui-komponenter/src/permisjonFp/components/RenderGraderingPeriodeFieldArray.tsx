import React, { ReactElement, useEffect } from 'react';
import dayjs from 'dayjs';
import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert, HStack, Label, VStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  hasValidDecimal,
  hasValidFodselsnummer,
  hasValidInteger,
  maxLengthOrFodselsnr,
  maxValue,
  required,
} from '@navikt/ft-form-validators';
import {
  CheckboxField,
  Datepicker,
  InputField,
  SelectField,
  PeriodFieldArray,
  NumberField,
} from '@navikt/ft-form-hooks';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { arbeidskategori } from '@navikt/fp-kodeverk';

import { gyldigeUttakperioder } from './RenderPermisjonPeriodeFieldArray';

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
};

export type FormValues = GraderingPeriode[];

const getOverlappingValidator =
  (
    getValues: UseFormGetValues<{
      [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [GRADERING_PERIODE_FIELD_ARRAY_NAME]: FormValues };
    }>,
  ) =>
  () => {
    const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`);
    const periodeMap = perioder
      .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
      .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
    return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
  };

const getValiderFørEllerEtter =
  (
    getValues: UseFormGetValues<{ tidsromPermisjon: { [GRADERING_PERIODE_FIELD_ARRAY_NAME]: FormValues } }>,
    index: number,
    sjekkFør: boolean,
  ) =>
  () => {
    const fomVerdi = getValues(
      `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`,
    );
    const tomVerdi = getValues(
      `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`,
    );

    if (!tomVerdi || !fomVerdi) {
      return null;
    }

    return sjekkFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };

const getValiderArbeidsgiverIdNårRequired =
  (
    getValues: UseFormGetValues<{ tidsromPermisjon: { [GRADERING_PERIODE_FIELD_ARRAY_NAME]: FormValues } }>,
    index: number,
  ) =>
  (arbeidsgiverIdentifikator: string) => {
    const arbeidsgiverIdentifikatorRequired =
      getValues(
        `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}.arbeidskategoriType`,
      ) === arbeidskategori.ARBEIDSTAKER;
    return arbeidsgiverIdentifikatorRequired ? required(arbeidsgiverIdentifikator) : undefined;
  };

const validerAtArbeidsgiverIdErGyldig = (arbeidsgiverIdentifikator: string) => {
  if (!arbeidsgiverIdentifikator) {
    return undefined;
  }
  return arbeidsgiverIdentifikator.length === 11
    ? hasValidFodselsnummer(arbeidsgiverIdentifikator)
    : maxLength9OrFodselsnr(arbeidsgiverIdentifikator);
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

const mapKvoter = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeUttakperioder.includes(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

const mapArbeidskategori = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigArbeidskategori.includes(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
  graderingKvoter: KodeverkMedNavn[];
  readOnly: boolean;
  arbeidskategoriTyper: KodeverkMedNavn[];
}

/**
 * RenderGraderingPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av graderingperiode.
 */
const RenderGraderingPeriodeFieldArray = ({ graderingKvoter, readOnly, arbeidskategoriTyper }: Props) => {
  const intl = useIntl();

  const {
    watch,
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{
    [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
      [GRADERING_PERIODE_FIELD_ARRAY_NAME]: FormValues;
    };
  }>();

  const { fields, remove, append } = useFieldArray({
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
        const periodeFomForTidlig = periodeFom && dayjs(periodeFom, ISO_DATE_FORMAT).isBefore(dayjs('2019-01-01'));
        const namePart1 = `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}.${index}`;
        return (
          <React.Fragment key={field.id}>
            {index > 0 && <AvsnittSkiller />}
            <HStack wrap={false} justify="space-between" paddingBlock="4">
              <div>
                <HStack gap="4">
                  <SelectField
                    name={`${namePart1}.periodeForGradering`}
                    selectValues={mapKvoter(graderingKvoter)}
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.Gradering.Periode' })}
                    validate={[required]}
                  />
                  <Datepicker
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' })}
                    name={`${namePart1}.periodeFom`}
                    validate={[
                      required,
                      hasValidDate,
                      getValiderFørEllerEtter(getValues, index, true),
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                  <Datepicker
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' })}
                    name={`${namePart1}.periodeTom`}
                    validate={[
                      required,
                      hasValidDate,
                      getValiderFørEllerEtter(getValues, index, false),
                      getOverlappingValidator(getValues),
                    ]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                  <NumberField
                    label={<FormattedMessage id="Registrering.Permisjon.Gradering.Prosentandel" />}
                    name={`${namePart1}.prosentandelArbeid`}
                    validate={[required, hasValidDecimal, maxValue100]}
                  />
                  <InputField
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.Orgnr' })}
                    name={`${namePart1}.arbeidsgiverIdentifikator`}
                    validate={[
                      getValiderArbeidsgiverIdNårRequired(getValues, index),
                      hasValidInteger,
                      validerAtArbeidsgiverIdErGyldig,
                    ]}
                  />
                  <SelectField
                    label={intl.formatMessage({ id: 'Registrering.Permisjon.ArbeidskategoriLabel' })}
                    name={`${namePart1}.arbeidskategoriType`}
                    selectValues={mapArbeidskategori(arbeidskategoriTyper)}
                    validate={[required]}
                    onChange={() => (isSubmitted ? trigger() : undefined)}
                  />
                  <div>
                    <Label size="small">
                      <FormattedMessage id="Registrering.Permisjon.Gradering.SkalGraderes" />
                    </Label>
                    <CheckboxField name={`${namePart1}.skalGraderes`} label="" />
                  </div>
                  <div>
                    <Label size="small">
                      <FormattedMessage id="Registrering.Permisjon.Flerbarnsdager" />
                    </Label>
                    <CheckboxField readOnly={readOnly} name={`${namePart1}.flerbarnsdager`} label=" " />
                  </div>
                  <div>
                    <Label size="small">
                      <FormattedMessage id="Registrering.Permisjon.HarSamtidigUttak" />
                    </Label>
                    <CheckboxField name={`${namePart1}.harSamtidigUttak`} label="" />
                  </div>
                  {harSamtidigUttak && (
                    <NumberField
                      name={`${namePart1}.samtidigUttaksprosent`}
                      validate={[required, hasValidDecimal, maxValue100]}
                      label={intl.formatMessage({ id: 'Registrering.Permisjon.SamtidigUttaksprosent' })}
                    />
                  )}
                </HStack>
                {periodeFomForTidlig && (
                  <Alert size="small" variant="warning">
                    <FormattedMessage id="Registrering.Permisjon.PeriodeFomForTidlig" />
                  </Alert>
                )}
              </div>
              {getRemoveButton && <div>{getRemoveButton()}</div>}
            </HStack>
          </React.Fragment>
        );
      }}
    </PeriodFieldArray>
  );
};

export default RenderGraderingPeriodeFieldArray;
