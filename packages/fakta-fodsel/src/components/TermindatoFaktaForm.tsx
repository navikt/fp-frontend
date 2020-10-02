import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { InjectedFormProps } from 'redux-form';

import {
  DateLabel, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import {
  DatepickerField, InputField, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import {
  hasValidDate, hasValidInteger, maxValue, minValue, required,
} from '@fpsak-frontend/utils';
import { FaktaBegrunnelseTextField, isFieldEdited } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, FamilieHendelse, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import styles from './termindatoFaktaForm.less';

const minValue1 = minValue(1);
const maxValue9 = maxValue(9);

interface OwnProps {
  readOnly: boolean;
  isTerminDatoEdited?: boolean;
  isUtstedtDatoEdited?: boolean;
  isForTidligTerminbekreftelse: boolean;
  isAntallBarnEdited?: boolean;
  fodselsdatoTps?: string;
  antallBarnTps?: number;
  isOverridden?: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  initialValues: {
    begrunnelse?: string;
  };
}

/**
 * TermindatoFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av termindato (Fødselsvilkåret).
 */
export const TermindatoFaktaForm: FunctionComponent<OwnProps & InjectedFormProps> = ({
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
      titleCode="TermindatoFaktaForm.ApplicationInformation"
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
    { fodselsdatoTps && !isOverridden
      && (
      <FaktaGruppe titleCode="TermindatoFaktaForm.OpplysningerTPS">
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

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  aksjonspunkt: Aksjonspunkt;
  personopplysninger: Personopplysninger;
  submitHandler: (values: any) => any;
}

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkt], (
  soknad, familiehendelse, aksjonspunkt,
) => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  return {
    utstedtdato: familiehendelse.utstedtdato ? familiehendelse.utstedtdato : soknad.utstedtdato,
    termindato: familiehendelse.termindato ? familiehendelse.termindato : soknad.termindato,
    antallBarn: familiehendelse.antallBarnTermin ? familiehendelse.antallBarnTermin : antallBarn,
    ...FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkt),
  };
});

const erTerminbekreftelseUtstedtForTidlig = (utstedtdato?: string, termindato?: string) => utstedtdato !== undefined && termindato !== undefined
&& !moment(utstedtdato).isAfter(moment(termindato).subtract(18, 'weeks').subtract(3, 'days'));

const transformValues = (values: any) => ({
  kode: aksjonspunktCodes.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato,
  termindato: values.termindato,
  antallBarn: values.antallBarn,
  ...FaktaBegrunnelseTextField.transformValues(values),
});

export const termindatoFaktaFormName = 'TermindatoFaktaForm';

const getEditedStatus = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
    (ownProps: PureOwnProps) => ownProps.personopplysninger],
  (soknad, familiehendelse, personopplysning) => (
    isFieldEdited(soknad, familiehendelse, personopplysning)
  ),
);

const mapStateToPropsFactory = (_initialState, staticOwnProps:PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = staticOwnProps;
  const onSubmit = (values: any) => staticOwnProps.submitHandler(transformValues(values));
  return (state: any, ownProps: PureOwnProps) => {
    const termindato = behandlingFormValueSelector(termindatoFaktaFormName, behandlingId, behandlingVersjon)(state, 'termindato');
    const utstedtdato = behandlingFormValueSelector(termindatoFaktaFormName, behandlingId, behandlingVersjon)(state, 'utstedtdato');
    const editedStatus = getEditedStatus(ownProps);
    return {
      onSubmit,
      initialValues: buildInitialValues(ownProps),
      isTerminDatoEdited: editedStatus.termindato,
      isUtstedtDatoEdited: editedStatus.utstedtdato,
      isForTidligTerminbekreftelse: erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato),
      isAntallBarnEdited: editedStatus.antallBarn,
      fodselsdatoTps: ownProps.gjeldendeFamiliehendelse.avklartBarn.length > 0 ? ownProps.gjeldendeFamiliehendelse.avklartBarn[0].fodselsdato : undefined,
      antallBarnTps: ownProps.gjeldendeFamiliehendelse.avklartBarn.length,
      isOverridden: ownProps.gjeldendeFamiliehendelse.erOverstyrt,
    };
  };
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: termindatoFaktaFormName,
})(TermindatoFaktaForm));
