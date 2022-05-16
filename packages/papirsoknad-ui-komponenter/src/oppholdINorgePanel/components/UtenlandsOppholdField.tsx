import React, { FunctionComponent, ReactElement } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { FieldArray, FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import classnames from 'classnames/bind';
import { Column, Row } from 'nav-frontend-grid';

import { DatepickerField, SelectField, PeriodFieldArray } from '@fpsak-frontend/form';
import {
  hasValidValue, isRequiredMessage, required,
} from '@navikt/ft-form-validators';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import { hasValidPeriodIncludingOtherErrors, Options } from './validator';
import styles from './utenlandsOppholdField.less';

const classNames = classnames.bind(styles);

const defaultUtenlandsOpphold = {
  land: '',
  periodeFom: '',
  periodeTom: '',
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .filter(({ kode }) => kode !== landkoder.NORGE)
  .map(({ kode, navn }): ReactElement => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  readOnly: boolean;
  fields: FieldArrayFieldsProps<any>;
  meta: FieldArrayMetaProps;
  selectValues: ReactElement[];
}

const renderUtenlandsOppholdFieldArray: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  fields,
  meta,
  selectValues,
}) => (
  <PeriodFieldArray
    fields={fields}
    meta={meta}
    titleText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.AngiOpphold' })}
    bodyText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Add' })}
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
  land?: string;
  periodeFom: string;
  periodeTom: string;
};

interface StaticFunctions {
  validate: (values?: FormValues[], options?: Options) => any;
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
    component={injectIntl(renderUtenlandsOppholdFieldArray)}
    selectValues={countrySelectValues(countryCodes)}
    readOnly={readOnly}
  />
);

UtenlandsOppholdField.validate = (values, options) => {
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
