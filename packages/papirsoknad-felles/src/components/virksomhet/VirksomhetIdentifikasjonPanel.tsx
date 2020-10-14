import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  DatepickerField, InputField, RadioGroupField, RadioOption, SelectField,
} from '@fpsak-frontend/form';
import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  dateBeforeOrEqualToToday, hasValidDate, hasValidInteger, hasValidOrgNumber, required, validPeriodeFomTom,
} from '@fpsak-frontend/utils';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

const countrySelectValues = (countryCodes: any) => countryCodes
  .map(({
    kode,
    navn,
  }: any) => <option value={kode} key={kode}>{navn}</option>);

type OwnVirksomhetIdentifikasjonPanelProps = {
    intl: {};
    virksomhetRegistrertINorge?: boolean;
    readOnly?: boolean;
    countryCodes: any[];
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'VirksomhetIdentifikasjonPanelProps' ci... Remove this comment to see the full error message
type VirksomhetIdentifikasjonPanelProps = OwnVirksomhetIdentifikasjonPanelProps & typeof VirksomhetIdentifikasjonPanel.defaultProps;

/**
 * VirksomhetIdentifikasjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
 * papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
 * søker.
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'VirksomhetIdentifikasjonPanel' implicitly has typ... Remove this comment to see the full error message
export const VirksomhetIdentifikasjonPanel = ({
  virksomhetRegistrertINorge, readOnly, countryCodes, intl,
}: VirksomhetIdentifikasjonPanelProps) => {
  const sortedCountriesByName = countryCodes.slice().sort((a: any, b: any) => a.navn.localeCompare(b.navn));

  return (
    <>
      <InputField
        name="navn"
        bredde="XL"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
        validate={[required]}
        label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
        readOnly={readOnly}
      />
      <Undertekst><FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway" /></Undertekst>
      <VerticalSpacer fourPx />
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message */}
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
                  // @ts-expect-error ts-migrate(2322) FIXME: Type '(value: any) => { id: string; }[] | undefine... Remove this comment to see the full error message
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
                  // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
                  validate={[required]}
                  label={intl.formatMessage({ id: 'Registrering.VirksomhetIdentifikasjonPanel.Country' })}
                />
              </Column>
            </Row>
            <Row>
              <Column xs="3">
                <DatepickerField
                  readOnly={readOnly}
                  // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type '({ id:... Remove this comment to see the full error message
                  validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                  name="fom"
                  defaultValue={null}
                  label={{ id: 'Registrering.InntektsgivendeArbeid.periodeFom' }}
                />
              </Column>
              <Column xs="3">
                <DatepickerField
                  readOnly={readOnly}
                  // @ts-expect-error ts-migrate(2322) FIXME: Type '(text: any) => { id: string; }[] | null' is ... Remove this comment to see the full error message
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
  virksomhetRegistrertINorge: undefined,
  readOnly: true,
};

VirksomhetIdentifikasjonPanel.validate = (values: any) => {
  const errors = {};
  if (values && values.fom && values.tom) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'fom' does not exist on type '{}'.
    errors.fom = validPeriodeFomTom(values.fom, values.tom);
  }
  return errors;
};

const mapStateToProps = (state: any, initialProps: any) => ({
  virksomhetRegistrertINorge: formValueSelector(initialProps.form)(state, 'virksomhetRegistrertINorge'),
  countryCodes: initialProps.alleKodeverk[kodeverkTyper.LANDKODER],
});

export default connect(mapStateToProps)(VirksomhetIdentifikasjonPanel);
