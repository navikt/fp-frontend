import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import classnames from 'classnames/bind';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import {
  formHooks, Datepicker, SelectField, PeriodFieldArray,
} from '@navikt/ft-form-hooks';
import { Landkode } from '@navikt/ft-kodeverk';
import { KodeverkMedNavn } from '@navikt/ft-types';

import {
  dateAfterOrEqual, dateBeforeOrEqual, dateRangesNotOverlapping, hasValidDate, required,
} from '@navikt/ft-form-validators';
import { UseFormGetValues } from 'react-hook-form';
import moment from 'moment';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import styles from './utenlandsOppholdField.less';

const classNames = classnames.bind(styles);

const defaultUtenlandsOpphold = {
  land: '',
  periodeFom: '',
  periodeTom: '',
};

export type FormValues = {
  land?: string;
  periodeFom: string;
  periodeTom: string;
};

type Keys = 'tidligereOppholdUtenlands' | 'fremtidigeOppholdUtenlands';

const getValue = (
  getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>,
  fieldName: string,
// @ts-ignore
): string => getValues(fieldName);

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>,
  name: Keys,
) => () => {
  const perioder = getValues(name);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom !== '' && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return dateRangesNotOverlapping(periodeMap);
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .filter(({ kode }) => kode !== Landkode.NORGE)
  .map(({ kode, navn }): ReactElement => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  erTidligereOpphold: boolean;
  mottattDato?: string;
  countryCodes: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * UtenlandsOppholdField
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
 * som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const UtenlandsOppholdField: FunctionComponent<OwnProps> = ({
  erTidligereOpphold,
  mottattDato,
  readOnly,
  countryCodes,
}) => {
  const intl = useIntl();

  const name = erTidligereOpphold ? 'tidligereOppholdUtenlands' : 'fremtidigeOppholdUtenlands';

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = formHooks.useFormContext<{ [K in Keys]: FormValues[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name,
  });

  const land = useMemo(() => countrySelectValues(countryCodes), [countryCodes]);

  return (
    <PeriodFieldArray<FormValues>
      fields={fields}
      titleText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.AngiOpphold' })}
      bodyText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Add' })}
      emptyPeriodTemplate={defaultUtenlandsOpphold}
      createAddButtonInsteadOfImageLink
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => (
        <Row key={field.id}>
          <Column xs="12">
            <SelectField
              name={`${name}.${index}.land`}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Country' })}
              selectValues={land}
              readOnly={readOnly}
              bredde="xl"
              validate={[required]}
            />
          </Column>
          <Column xs="12">
            <Row className={classNames({ datesRowWithRemoveButton: index > 0 })}>
              <Column xs="12" sm="6">
                <Datepicker
                  name={`${name}.${index}.periodeFom`}
                  label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeFom' })}
                  isReadOnly={readOnly}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValue(getValues, `${name}.${index}.periodeFom`);
                      const tomVerdi = getValue(getValues, `${name}.${index}.periodeTom`);
                      return tomVerdi && fomVerdi ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : null;
                    },
                    () => {
                      const fomVerdi = getValue(getValues, `${name}.${index}.periodeFom`);
                      if (erTidligereOpphold) {
                        return dateBeforeOrEqual(moment().format(ISO_DATE_FORMAT))(fomVerdi);
                      }
                      return mottattDato ? dateAfterOrEqual(mottattDato || null)(fomVerdi) : undefined;
                    },
                    getOverlappingValidator(getValues, name),
                  ]}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </Column>
              <Column xs="12" sm="6">
                <Datepicker
                  name={`${name}.${index}.periodeTom`}
                  label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeTom' })}
                  isReadOnly={readOnly}
                  validate={[
                    required,
                    hasValidDate,
                    () => {
                      const fomVerdi = getValue(getValues, `${name}.${index}.periodeFom`);
                      const tomVerdi = getValue(getValues, `${name}.${index}.periodeTom`);
                      return tomVerdi && fomVerdi ? dateAfterOrEqual(fomVerdi)(tomVerdi) : null;
                    },
                    () => {
                      const tomVerdi = getValue(getValues, `${name}.${index}.periodeTom`);
                      if (erTidligereOpphold) {
                        return dateBeforeOrEqual(moment().format(ISO_DATE_FORMAT))(tomVerdi);
                      }
                      return mottattDato ? dateAfterOrEqual(mottattDato)(tomVerdi) : undefined;
                    },
                    getOverlappingValidator(getValues, name),
                  ]}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </Column>
            </Row>
            {getRemoveButton()}
          </Column>
        </Row>
      )}
    </PeriodFieldArray>
  );
};

export default UtenlandsOppholdField;
