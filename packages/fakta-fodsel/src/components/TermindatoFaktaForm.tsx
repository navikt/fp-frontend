import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';

import { DateLabel, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { DatepickerField, InputField } from '@fpsak-frontend/form';
import {
  hasValidDate, hasValidInteger, maxValue, minValue, required,
} from '@fpsak-frontend/utils';
import { FaktaBegrunnelseTextField, isFieldEdited, FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, FamilieHendelse, Soknad } from '@fpsak-frontend/types';
import { BekreftTerminbekreftelseAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './termindatoFaktaForm.less';

const minValue1 = minValue(1);
const maxValue9 = maxValue(9);

type FormValues = {
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
  begrunnelse?: string;
};

interface PureOwnProps {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkt: Aksjonspunkt;
  submitHandler: (data: BekreftTerminbekreftelseAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  onSubmit: (values: FormValues) => any;
  initialValues: {
    begrunnelse?: string;
  };
  isTerminDatoEdited?: boolean;
  isUtstedtDatoEdited?: boolean;
  isForTidligTerminbekreftelse: boolean;
  isAntallBarnEdited?: boolean;
  fodselsdatoTps?: string;
  antallBarnTps?: number;
  isOverridden?: boolean;
}

/**
 * TermindatoFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av termindato (Fødselsvilkåret).
 */
export const TermindatoFaktaForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  isTerminDatoEdited,
  isUtstedtDatoEdited,
  isForTidligTerminbekreftelse,
  isAntallBarnEdited,
  initialValues,
  fodselsdatoTps,
  antallBarnTps,
  isOverridden,
  submittable,
  alleMerknaderFraBeslutter,
}) => (
  <>
    <FaktaGruppe
      title={intl.formatMessage({ id: 'TermindatoFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.TERMINBEKREFTELSE]}
    >
      <Row>
        <Column xs="3">
          <DatepickerField
            name="utstedtdato"
            label={{ id: 'TermindatoFaktaForm.UtstedtDato' }}
            validate={[required, hasValidDate]}
            readOnly={readOnly}
            isEdited={isUtstedtDatoEdited}
          />
        </Column>
        <Column xs="3">
          <DatepickerField
            name="termindato"
            label={{ id: 'TermindatoFaktaForm.Termindato' }}
            validate={[required, hasValidDate]}
            readOnly={readOnly}
            isEdited={isTerminDatoEdited}
          />
        </Column>
        <Column xs="6">
          <InputField
            name="antallBarn"
            label={{ id: 'TermindatoFaktaForm.AntallBarn' }}
            parse={(value) => {
              const parsedValue = parseInt(value, 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            validate={[required, hasValidInteger, minValue1, maxValue9]}
            bredde="XS"
            readOnly={readOnly}
            isEdited={isAntallBarnEdited}
          />
        </Column>
      </Row>
    </FaktaGruppe>
    {fodselsdatoTps && !isOverridden && (
      <FaktaGruppe title={intl.formatMessage({ id: 'TermindatoFaktaForm.OpplysningerTPS' })}>
        <Row>
          <Column xs="6"><Normaltekst><FormattedMessage id="TermindatoFaktaForm.FodselsdatoTps" /></Normaltekst></Column>
          <Column xs="6"><Normaltekst><FormattedMessage id="TermindatoFaktaForm.AntallBarnTps" /></Normaltekst></Column>
        </Row>
        <Row>
          <Column xs="6">
            <Normaltekst><DateLabel dateString={fodselsdatoTps} /></Normaltekst>
          </Column>
          <Column xs="6">
            <Normaltekst>{antallBarnTps}</Normaltekst>
          </Column>
        </Row>
      </FaktaGruppe>
    )}
    <VerticalSpacer sixteenPx />
    <FaktaBegrunnelseTextField isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!initialValues.begrunnelse} />
    {isForTidligTerminbekreftelse && (
      <>
        <VerticalSpacer sixteenPx />
        <AlertStripe type="advarsel" className={styles.marginBottom}>
          <FormattedMessage
            id="TermindatoFaktaForm.AdvarselForTidligUtstedtdato"
          />
        </AlertStripe>
      </>
    )}
  </>
);

TermindatoFaktaForm.defaultProps = {
  isTerminDatoEdited: false,
  isUtstedtDatoEdited: false,
  isAntallBarnEdited: false,
  antallBarnTps: 0,
  isOverridden: false,
};

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkt], (
  soknad, familiehendelse, aksjonspunkt,
): FormValues => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  return {
    utstedtdato: familiehendelse.utstedtdato ? familiehendelse.utstedtdato : soknad.utstedtdato,
    termindato: familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato,
    antallBarn: familiehendelse.antallBarnTermin ? familiehendelse.antallBarnTermin : antallBarn,
    ...FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkt),
  };
});

const erTerminbekreftelseUtstedtForTidlig = (utstedtdato?: string, termindato?: string): boolean => utstedtdato !== undefined
  && termindato !== undefined
  && !moment(utstedtdato).isAfter(moment(termindato).subtract(18, 'weeks').subtract(3, 'days'));

const transformValues = (values: FormValues): BekreftTerminbekreftelseAp => ({
  kode: aksjonspunktCodes.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato,
  termindato: values.termindato,
  antallBarn: values.antallBarn,
  ...FaktaBegrunnelseTextField.transformValues(values),
});

export const termindatoFaktaFormName = 'TermindatoFaktaForm';

const getEditedStatus = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse],
  (soknad, gjeldendeFamiliehendelse): FieldEditedInfo => (
    isFieldEdited(soknad, gjeldendeFamiliehendelse)
  ),
);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitHandler],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const { gjeldendeFamiliehendelse } = ownProps;
  const termindato = formValueSelector(termindatoFaktaFormName)(state, 'termindato');
  const utstedtdato = formValueSelector(termindatoFaktaFormName)(state, 'utstedtdato');
  const editedStatus = getEditedStatus(ownProps);
  const { avklartBarn } = gjeldendeFamiliehendelse;
  return {
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitialValues(ownProps),
    isTerminDatoEdited: editedStatus.termindato,
    isUtstedtDatoEdited: editedStatus.utstedtdato,
    isForTidligTerminbekreftelse: erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato),
    isAntallBarnEdited: editedStatus.antallBarn,
    fodselsdatoTps: avklartBarn && avklartBarn.length > 0 ? avklartBarn[0].fodselsdato : undefined,
    antallBarnTps: avklartBarn ? avklartBarn.length : 0,
    isOverridden: gjeldendeFamiliehendelse.erOverstyrt,
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: termindatoFaktaFormName,
  destroyOnUnmount: false,
})(injectIntl(TermindatoFaktaForm)));
