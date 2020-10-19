import React, { FunctionComponent, ReactNode } from 'react';
import { FieldArray, FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import classnames from 'classnames/bind';
import { Column, Row } from 'nav-frontend-grid';

import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import {
  hasValidPeriodIncludingOtherErrors, hasValidValue, isRequiredMessage, required, Options,
} from '@fpsak-frontend/utils';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './utenlandsOppholdField.less';

const classNames = classnames.bind(styles);

const defaultUtenlandsOpphold = {
  land: '',
  periodeFom: '',
  periodeTom: '',
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactNode[] => countryCodes
  .filter(({ kode }) => kode !== landkoder.NORGE)
  .map(({ kode, navn }): ReactNode => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly: boolean;
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  selectValues: ReactNode[];
}

const renderUtenlandsOppholdFieldArray: FunctionComponent<OwnProps> = ({
  readOnly,
  fields,
  meta,
  selectValues,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    titleTextCode="Registrering.RegistreringOpphold.AngiOpphold"
    textCode="Registrering.RegistreringOpphold.Add"
    emptyPeriodTemplate={defaultUtenlandsOpphold}
    createAddButtonInsteadOfImageLink
    readOnly={readOnly}
  >
    {(oppholdElementFieldId, index, getRemoveButton) => (
      <Row key={oppholdElementFieldId}>
        <Column xs="12">
          <SelectField
            name={`${oppholdElementFieldId}.land`}
            label={{ id: 'Registrering.RegistreringOpphold.Country' }}
            selectValues={selectValues}
            readOnly={readOnly}
            bredde="xl"
          />
        </Column>
        <Column xs="12">
          <Row className={classNames({ datesRowWithRemoveButton: index > 0 })}>
            <Column xs="12" sm="6">
              <DatepickerField
                name={`${oppholdElementFieldId}.periodeFom`}
                label={{ id: 'Registrering.RegistreringOpphold.periodeFom' }}
                readOnly={readOnly}
              />
            </Column>
            <Column xs="12" sm="6">
              <DatepickerField
                name={`${oppholdElementFieldId}.periodeTom`}
                label={{ id: 'Registrering.RegistreringOpphold.periodeTom' }}
                readOnly={readOnly}
              />
            </Column>
          </Row>
          {getRemoveButton()}
        </Column>
      </Row>
    )}
  </PeriodFieldArray>
);

interface OwnPropsUtenlandsOppholdField {
  name: string;
  countryCodes: KodeverkMedNavn[];
  readOnly: boolean;
}

export type FormValues = {
  land: string;
  periodeFom: string;
  periodeTom: string;
};

interface StaticFunctions {
  validate?: (values: FormValues[], options?: Options) => any;
}

/**
 * UtenlandsOppholdField
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
 * som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
const UtenlandsOppholdField: FunctionComponent<OwnPropsUtenlandsOppholdField> & StaticFunctions = ({
  readOnly,
  name,
  countryCodes,
}) => (
  <FieldArray
    name={name}
    component={renderUtenlandsOppholdFieldArray}
    selectValues={countrySelectValues(countryCodes)}
    readOnly={readOnly}
  />
);

UtenlandsOppholdField.validate = (values: FormValues[], options?: Options) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = values.map(({ land }) => {
    const landError = required(land) || hasValidValue(land)(landkoder.NORGE);
    if (landError) {
      return {
        land: landError,
      };
    }
    return null;
  });

  return hasValidPeriodIncludingOtherErrors(values, otherErrors, options);
};

export default UtenlandsOppholdField;
