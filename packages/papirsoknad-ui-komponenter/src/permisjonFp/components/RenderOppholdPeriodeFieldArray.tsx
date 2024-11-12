import React, { ReactElement, useEffect } from 'react';
import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { Datepicker, SelectField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';
import { KodeverkMedNavn } from '@navikt/fp-types';
import { oppholdArsakType } from '@navikt/fp-kodeverk';

import styles from './renderOppholdPeriodeFieldArray.module.css';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const OPPHOLD_PERIODE_FIELD_ARRAY_NAME = 'oppholdPerioder';

type Periode = {
  periodeFom: string;
  periodeTom: string;
  årsak: string;
};

export type FormValues = Periode[];

const getOverlappingValidator =
  (
    getValues: UseFormGetValues<{
      [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: { [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: FormValues };
    }>,
  ) =>
  () => {
    const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`);
    const periodeMap = perioder
      .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
      .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
    return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
  };

const defaultOppholdPeriode: Periode = {
  periodeFom: '',
  periodeTom: '',
  årsak: '',
};

const gyldigeÅrsaker = [
  oppholdArsakType.UTTAK_MØDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FEDREKVOTE_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FELLESP_ANNEN_FORELDER,
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER,
];

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => gyldigeÅrsaker.includes(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

interface Props {
  oppholdsReasons: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * RenderOppholdPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 */
export const RenderOppholdPeriodeFieldArray = ({ oppholdsReasons, readOnly }: Props) => {
  const intl = useIntl();

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{
    [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
      [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: FormValues;
    };
  }>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append(defaultOppholdPeriode);
    }
  }, []);

  return (
    <PeriodFieldArray
      fields={fields}
      emptyPeriodTemplate={defaultOppholdPeriode}
      bodyText={intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.LeggTilPeriode' })}
      readOnly={readOnly}
      append={append}
      remove={remove}
    >
      {(field, index, getRemoveButton) => (
        <div key={field.id} className={index !== fields.length - 1 ? styles.notLastRow : ''}>
          <FlexContainer wrap>
            <FlexRow>
              <FlexColumn>
                <Datepicker
                  name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeFom' }) : ''}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValues(
                        `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`,
                      );
                      const tomVerdi = getValues(
                        `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`,
                      );
                      return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                    },
                    getOverlappingValidator(getValues),
                  ]}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </FlexColumn>
              <FlexColumn>
                <Datepicker
                  name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.periodeTom' }) : ''}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValues(
                        `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`,
                      );
                      const tomVerdi = getValues(
                        `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`,
                      );
                      return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                    },
                    getOverlappingValidator(getValues),
                  ]}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </FlexColumn>
              <FlexColumn>
                <SelectField
                  name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.årsak`}
                  label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.Arsak' }) : ''}
                  selectValues={mapTyper(oppholdsReasons)}
                  validate={[required]}
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
