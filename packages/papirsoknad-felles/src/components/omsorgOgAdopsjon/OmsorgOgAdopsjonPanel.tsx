import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FieldArray, formValueSelector } from 'redux-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Column, Container, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import fht from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  DatepickerField, InputField, RadioGroupField, RadioOption,
} from '@fpsak-frontend/form';
import {
  dateBeforeOrEqualToToday, hasValidDate, hasValidInteger, isDatesEqual, isRequiredMessage, maxValue, minValue, required,
} from '@fpsak-frontend/utils';

import { rettighet } from '../rettigheter/RettigheterPanel';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './omsorgOgAdopsjonPanel.less' ... Remove this comment to see the full error message
import styles from './omsorgOgAdopsjonPanel.less';

const MIN_ANTALL_BARN = 1;
const MAX_ANTALL_BARN = 10;

const adjustNumberOfFields = ({
  fields,
  antallBarn,
}: any) => {
  const antallBarnVerdi = parseInt(antallBarn, 10) || 0;
  if (fields.length < Math.min(antallBarnVerdi, MAX_ANTALL_BARN)) {
    fields.push(null);
  } else if (fields.length > Math.max(antallBarnVerdi, 0)) {
    fields.pop();
  }
};

type OwnFodselsDatoFieldsProps = {
    fields: {};
    antallBarn?: number | string;
    readOnly?: boolean;
};

type FodselsDatoFieldsProps = OwnFodselsDatoFieldsProps & typeof FodselsDatoFields.defaultProps;

/**
 * OmsorgOgAdopsjonPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */

export class FodselsDatoFields extends Component<FodselsDatoFieldsProps> {
static defaultProps = {
  readOnly: true,
  antallBarn: 0,
};

// eslint-disable-next-line camelcase
UNSAFE_componentWillMount() {
  adjustNumberOfFields(this.props);
}

// eslint-disable-next-line camelcase
UNSAFE_componentWillReceiveProps(nextProps: any) {
  adjustNumberOfFields(nextProps);
}

shouldComponentUpdate(nextProps: FodselsDatoFieldsProps) {
  if (Number.isNaN(nextProps.antallBarn)) {
    return true;
  }
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'length' does not exist on type '{}'.
  return nextProps.fields.length === nextProps.antallBarn;
}

render() {
  const { fields, readOnly } = this.props;
  return (
    <Row>
      <Column xs="6">
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'map' does not exist on type '{}'. */}
        {fields.map((name: any, index: any) => (
          <DatepickerField
            key={name}
            name={name}
            readOnly={readOnly}
            label={{ id: 'Registrering.Adopsjon.FodselsdatoBarnN', args: { n: index + 1 } }}
          />
        ))}
      </Column>
    </Row>
  );
}
}

type OwnOmsorgOgAdopsjonPanelImplProps = {
    intl: {};
    antallBarn?: number | string;
    familieHendelseType: string;
    readOnly?: boolean;
    isForeldrepenger: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'OmsorgOgAdopsjonPanelImplProps' circul... Remove this comment to see the full error message
type OmsorgOgAdopsjonPanelImplProps = OwnOmsorgOgAdopsjonPanelImplProps & typeof OmsorgOgAdopsjonPanelImpl.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'OmsorgOgAdopsjonPanelImpl' implicitly has type 'a... Remove this comment to see the full error message
export const OmsorgOgAdopsjonPanelImpl = ({
  readOnly, intl, antallBarn, familieHendelseType, isForeldrepenger,
}: OmsorgOgAdopsjonPanelImplProps) => {
  const { formatMessage } = intl;
  return (
    <BorderBox>
      <SkjemaGruppe legend={formatMessage({
        id: familieHendelseType === fht.ADOPSJON ? 'Registrering.Adopsjon.Title' : 'Registrering.Adopsjon.OmsorgTitle',
      })}
      >
        <Container fluid className={styles.formContainer}>
          {isForeldrepenger && familieHendelseType === fht.ADOPSJON
          && (
          <Row>
            <Column xs="6">
              <Undertekst>
                <FormattedMessage id="Registrering.Adopsjon.GjelderEktefellesBarn" />
              </Undertekst>
              <VerticalSpacer eightPx />
              <RadioGroupField
                name="erEktefellesBarn"
                readOnly={readOnly}
                // @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message
                validate={required}
              >
                <RadioOption
                  label={{ id: 'Registrering.Adopsjon.Ja' }}
                  value
                />
                <RadioOption
                  label={{ id: 'Registrering.Adopsjon.Nei' }}
                  value={false}
                />
              </RadioGroupField>
            </Column>
          </Row>
          )}
          <Row>
            <Column xs="6" className={styles.inputMinimumWidth}>
              <DatepickerField
                name="omsorgsovertakelsesdato"
                label={{
                  id: familieHendelseType === fht.ADOPSJON
                    ? 'Registrering.Adopsjon.DatoForOvertakelsenStebarn' : 'Registrering.Adopsjon.DatoForOvertakelsen',
                }}
                readOnly={readOnly}
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
                validate={[hasValidDate]}
              />
            </Column>
          </Row>
          <Row>
            {familieHendelseType === fht.ADOPSJON
              && (
              <Column xs="3" className={styles.inputMinimumWidth}>
                <DatepickerField
                  name="ankomstdato"
                  label={{ id: 'Registrering.Adopsjon.Ankomstdato' }}
                  readOnly={readOnly}
                  // @ts-expect-error ts-migrate(2322) FIXME: Type '(text: any) => { id: string; }[] | null' is ... Remove this comment to see the full error message
                  validate={[hasValidDate]}
                />
              </Column>
              )}
            <Column xs="6">
              <InputField
                name="antallBarn"
                label={formatMessage({ id: 'Registrering.Adopsjon.AntallBarn' })}
                readOnly={readOnly}
                parse={(value) => {
                  const parsedValue = parseInt(value, 10);
                  return Number.isNaN(parsedValue) ? value : parsedValue;
                }}
                bredde="XS"
              />
            </Column>
          </Row>
          <FieldArray
            name="foedselsDato"
            // @ts-expect-error ts-migrate(2769) FIXME: Type 'Readonly<FodselsDatoFieldsProps> & Readonly<... Remove this comment to see the full error message
            component={FodselsDatoFields}
            readOnly={readOnly}
            antallBarn={antallBarn}
          />
        </Container>
      </SkjemaGruppe>
    </BorderBox>
  );
};

OmsorgOgAdopsjonPanelImpl.defaultProps = {
  antallBarn: undefined,
  readOnly: true,
};

const mapStateToProps = (state: any, ownProps: any) => ({
  antallBarn: formValueSelector(ownProps.form)(state, ownProps.namePrefix).antallBarn,
  isForeldrepenger: ownProps.isForeldrepengerFagsak,
});

const OmsorgOgAdopsjonPanel = connect(mapStateToProps)(injectIntl(OmsorgOgAdopsjonPanelImpl));

const validateOmsorgsovertakelsesdato = (omsorgsovertakelsesdato: any, rettigheter: any) => (rettigheter === rettighet.ANNEN_FORELDER_DOED
  || rettigheter === rettighet.OVERTA_FORELDREANSVARET_ALENE
  ? required(omsorgsovertakelsesdato) || hasValidDate(omsorgsovertakelsesdato)
  : undefined);

const validateFoedselsdato = (foedselsDato: any, rettigheter: any) => {
  if (rettigheter && rettigheter !== rettighet.IKKE_RELEVANT) {
    if (!foedselsDato || !foedselsDato.length) {
      return { _errors: isRequiredMessage() };
    }
    const foedselsDatoError = foedselsDato.map((dato: any) => required(dato) || hasValidDate(dato) || dateBeforeOrEqualToToday(dato));
    if (foedselsDatoError.some((error: any) => error !== null)) {
      return foedselsDatoError;
    }
    return undefined;
  }
  if (foedselsDato) {
    const foedselsDatoError = foedselsDato.map((dato: any) => hasValidDate(dato) || dateBeforeOrEqualToToday(dato));
    if (foedselsDatoError.some((error: any) => error !== null)) {
      return foedselsDatoError;
    }
  }
  return undefined;
};

const validateIncludingRequired = (antallBarn: any) => required(antallBarn)
|| hasValidInteger(antallBarn) || minValue(MIN_ANTALL_BARN)(antallBarn) || maxValue(MAX_ANTALL_BARN)(antallBarn);

const validateExcludingRequired = (antallBarn: any) => {
  if (!antallBarn) {
    return undefined;
  }
  return hasValidInteger(antallBarn) || minValue(MIN_ANTALL_BARN)(antallBarn) || maxValue(MAX_ANTALL_BARN)(antallBarn);
};

const validateAntallBarn = (antallBarn: any, rettigheter: any) => (rettigheter && rettigheter !== rettighet.IKKE_RELEVANT
  ? validateIncludingRequired(antallBarn) : validateExcludingRequired(antallBarn));

const validateFodselsdatoer = (foedselsDato: any, otherFodselsdato: any) => {
  const hasFodselsdato1 = foedselsDato && foedselsDato.length > 0 && foedselsDato[0];
  const hasFodseldsato2 = otherFodselsdato && otherFodselsdato.length > 0 && otherFodselsdato[0];
  if (hasFodselsdato1 && hasFodseldsato2) {
    const datesError = isDatesEqual(foedselsDato[0], otherFodselsdato[0]);
    if (datesError) {
      return [datesError];
    }
  }
  return undefined;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'Connec... Remove this comment to see the full error message
OmsorgOgAdopsjonPanel.validate = (values: any, rettigheter: any, otherFodselsdato: any) => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { omsorgsovertakelsesdato, antallBarn, foedselsDato } = values;

  const omsorgsovertakelsesdatoError = validateOmsorgsovertakelsesdato(omsorgsovertakelsesdato, rettigheter);
  if (omsorgsovertakelsesdatoError) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'omsorgsovertakelsesdato' does not exist ... Remove this comment to see the full error message
    errors.omsorgsovertakelsesdato = omsorgsovertakelsesdatoError;
  }
  const antallBarnError = validateAntallBarn(antallBarn, rettigheter);
  if (antallBarnError) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'antallBarn' does not exist on type '{}'.
    errors.antallBarn = antallBarnError;
  }
  const foedselsDatoError = validateFoedselsdato(foedselsDato, rettigheter);
  if (foedselsDatoError) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'foedselsDato' does not exist on type '{}... Remove this comment to see the full error message
    errors.foedselsDato = foedselsDatoError;
  }

  const fodselsdatoCrossValidationError = validateFodselsdatoer(foedselsDato, otherFodselsdato);
  if (fodselsdatoCrossValidationError) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'foedselsDato' does not exist on type '{}... Remove this comment to see the full error message
    errors.foedselsDato = fodselsdatoCrossValidationError;
  }

  return errors;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'initialValues' does not exist on type 'C... Remove this comment to see the full error message
OmsorgOgAdopsjonPanel.initialValues = {
  antallBarn: undefined,
};

export default OmsorgOgAdopsjonPanel;
