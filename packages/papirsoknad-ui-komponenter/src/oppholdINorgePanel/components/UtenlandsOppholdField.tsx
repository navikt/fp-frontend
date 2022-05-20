import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import classnames from 'classnames/bind';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import {
  formHooks, Datepicker, SelectField, PeriodFieldArray,
} from '@navikt/ft-form-hooks';
import landkoder from '@fpsak-frontend/kodeverk/src/landkoder';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

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
  countryCodes: KodeverkMedNavn[];
  readOnly: boolean;
}

export type FormValues = {
  land?: string;
  periodeFom: string;
  periodeTom: string;
};

/**
 * UtenlandsOppholdField
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
 * som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const UtenlandsOppholdField: FunctionComponent<OwnProps> = ({
  readOnly,
  countryCodes,
}) => {
  const intl = useIntl();

  const { control } = formHooks.useFormContext<{ fremtidigeOppholdUtenlands: FormValues[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
    control,
    name: 'fremtidigeOppholdUtenlands',
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
      {(oppholdElementFieldId, index, getRemoveButton) => (
        <Row key={oppholdElementFieldId}>
          <Column xs="12">
            <SelectField
              name={`${oppholdElementFieldId}.land`}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Country' })}
              selectValues={land}
              readOnly={readOnly}
              bredde="xl"
            />
          </Column>
          <Column xs="12">
            <Row className={classNames({ datesRowWithRemoveButton: index > 0 })}>
              <Column xs="12" sm="6">
                <Datepicker
                  name={`${oppholdElementFieldId}.periodeFom`}
                  label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeFom' })}
                  isReadOnly={readOnly}
                />
              </Column>
              <Column xs="12" sm="6">
                <Datepicker
                  name={`${oppholdElementFieldId}.periodeTom`}
                  label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeTom' })}
                  isReadOnly={readOnly}
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

/*
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
};*/

export default UtenlandsOppholdField;
