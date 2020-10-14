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

const countrySelectValues = (countryCodes: any) => countryCodes
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

interface OwnProps {
  virksomhetRegistrertINorge?: boolean;
  readOnly?: boolean;
  countryCodes: KodeverkMedNavn[];
}

/**
 * VirksomhetIdentifikasjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
export const VirksomhetIdentifikasjonPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  virksomhetRegistrertINorge,
  readOnly,
  countryCodes,
  intl,
}) => {
  const sortedCountriesByName = countryCodes.slice().sort((a: any, b: any) => a.navn.localeCompare(b.navn));

  return (
    <>
      <InputField
        name="navn"
        bredde="XL"
        validate={[required]}
        label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
        readOnly={readOnly}
      />
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
                  defaultValue={null}
                  label={{ id: 'Registrering.InntektsgivendeArbeid.periodeFom' }}
                />
              </Column>
              <Column xs="3">
                <DatepickerField
                  readOnly={readOnly}
                  validate={[hasValidDate]}
                  name="tom"
                  defaultValue={null}
                  label={{ id: 'Registrering.InntektsgivendeArbeid.periodeTom' }}
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

VirksomhetIdentifikasjonPanel.validate = (values: any) => {
  const errors = {};
  if (values && values.fom && values.tom) {
    errors.fom = validPeriodeFomTom(values.fom, values.tom);
  }
  return errors;
};

const mapStateToProps = (state: any, initialProps: any) => ({
  virksomhetRegistrertINorge: formValueSelector(initialProps.form)(state, 'virksomhetRegistrertINorge'),
  countryCodes: initialProps.alleKodeverk[kodeverkTyper.LANDKODER],
});

export default connect(mapStateToProps)(VirksomhetIdentifikasjonPanel);
