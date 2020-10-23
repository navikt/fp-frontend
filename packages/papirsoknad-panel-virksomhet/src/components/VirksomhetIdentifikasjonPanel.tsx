import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  DatepickerField, InputField, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form';
import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  dateBeforeOrEqualToToday, hasValidDate, hasValidInteger, hasValidOrgNumber, required, validPeriodeFomTom,
} from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

const countrySelectValues = (countryCodes: KodeverkMedNavn[]) => countryCodes
  .map(({
    kode,
    navn,
  }) => <option value={kode} key={kode}>{navn}</option>);

interface PureOwnProps {
  readOnly?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  form: string;
}

interface MappedOwnProps {
  virksomhetRegistrertINorge?: boolean;
}

type FormValues = {
  fom?: string;
  tom?: string;
}

interface StaticFunctions {
  validate: (values: FormValues) => any;
}

/**
 * VirksomhetIdentifikasjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetIdentifikasjonPanel: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> & StaticFunctions = ({
  virksomhetRegistrertINorge,
  readOnly,
  intl,
  alleKodeverk,
}) => {
  const sortedCountriesByName = alleKodeverk[kodeverkTyper.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <>
      <InputField
        name="navn"
        bredde="XL"
        validate={[required]}
        label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
        readOnly={readOnly}
      />
      <VerticalSpacer sixteenPx />
      <Undertekst><FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway" /></Undertekst>
      <VerticalSpacer fourPx />
      <RadioGroupField name="virksomhetRegistrertINorge" validate={[required]} readOnly={readOnly}>
        <RadioOption key="Ja" label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Yes" />} value />
        <RadioOption key="Nei" label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.No" />} value={false} />
      </RadioGroupField>
      { virksomhetRegistrertINorge
      && (
        <>
          <Row>
            <Column xs="5">
              <ArrowBox>
                <InputField
                  name="organisasjonsnummer"
                  readOnly={readOnly}
                  validate={[required, hasValidInteger, hasValidOrgNumber]}
                  label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber" />}
                />
              </ArrowBox>
            </Column>
          </Row>
          <VerticalSpacer sixteenPx />
        </>
      )}
      { !virksomhetRegistrertINorge && virksomhetRegistrertINorge !== undefined
      && (
        <>
          <ArrowBox alignOffset={57}>
            <Row>
              <Column xs="5">
                <SelectField
                  name="landJobberFra"
                  selectValues={countrySelectValues(sortedCountriesByName)}
                  validate={[required]}
                  label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.Country' })}
                />
              </Column>
            </Row>
            <Row>
              <Column xs="3">
                <DatepickerField
                  readOnly={readOnly}
                  validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                  name="fom"
                  label={{ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeFom' }}
                />
              </Column>
              <Column xs="3">
                <DatepickerField
                  readOnly={readOnly}
                  validate={[hasValidDate]}
                  name="tom"
                  label={{ id: 'Registrering.VirksomhetIdentifikasjonPanel.periodeTom' }}
                />
              </Column>
            </Row>
          </ArrowBox>
        </>
      )}
    </>
  );
};

VirksomhetIdentifikasjonPanel.defaultProps = {
  readOnly: true,
};

VirksomhetIdentifikasjonPanel.validate = (values: FormValues) => {
  const errors = {};
  if (values && values.fom && values.tom) {
    return {
      fom: validPeriodeFomTom(values.fom, values.tom),
    };
  }
  return errors;
};

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => ({
  virksomhetRegistrertINorge: formValueSelector(initialProps.form)(state, 'virksomhetRegistrertINorge'),
});

export default connect(mapStateToProps)(VirksomhetIdentifikasjonPanel);
