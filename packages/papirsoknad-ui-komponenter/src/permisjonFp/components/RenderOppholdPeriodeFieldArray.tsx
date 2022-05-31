import React, { FunctionComponent, ReactElement } from 'react';
import { UseFormGetValues } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import {
  Datepicker, SelectField, PeriodFieldArray, formHooks,
} from '@navikt/ft-form-hooks';
import { KodeverkMedNavn } from '@navikt/ft-types';
import {
  dateAfterOrEqual, dateBeforeOrEqual, dateRangesNotOverlapping, hasValidDate, required,
} from '@navikt/ft-form-validators';

import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';

import styles from './renderOppholdPeriodeFieldArray.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';
export const OPPHOLD_PERIODE_FIELD_ARRAY_NAME = 'oppholdPerioder';

type Periode = {
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}

export type FormValues = Periode[];

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {[OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: FormValues }}>,
) => () => {
  const perioder = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return dateRangesNotOverlapping(periodeMap);
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
  oppholdArsakType.UTTAK_FORELDREPENGER_ANNEN_FORELDER];

const mapTyper = (typer: KodeverkMedNavn[]): ReactElement[] => typer
  .filter(({
    kode,
  }) => gyldigeÅrsaker.includes(kode))
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  oppholdsReasons: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * RenderOppholdPeriodeFieldArray
 *
 * Viser inputfelter for dato for bestemmelse av oppholdsperiode.
 */
const RenderOppholdPeriodeFieldArray: FunctionComponent<OwnProps> = ({
  oppholdsReasons,
  readOnly,
}) => {
  const intl = useIntl();

  const {
    control, getValues, trigger, formState: { isSubmitted },
  } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: FormValues
  }}>();

  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`,
  });

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
        <Row key={field.id}>
          <Column xs="12" className={index !== (fields.length - 1) ? styles.notLastRow : ''}>
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
                        const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                        const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
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
                        const fomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeFom`);
                        const tomVerdi = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}.${index}.periodeTom`);
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
                    bredde="xl"
                    label={index === 0 ? intl.formatMessage({ id: 'Registrering.Permisjon.Opphold.Arsak' }) : ''}
                    selectValues={mapTyper(oppholdsReasons)}
                    validate={[required]}
                  />
                </FlexColumn>
                {getRemoveButton && (
                  <FlexColumn>
                    {getRemoveButton()}
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

export default RenderOppholdPeriodeFieldArray;
