import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import moment from 'moment';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Normaltekst, Undertekst, Undertittel,
} from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';

import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { DatepickerField, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import {
  dateBeforeOrEqualToToday, DDMMYYYY_DATE_FORMAT, hasValidDate, required,
} from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  ProsessStegBegrunnelseTextField, ProsessStegSubmitButton,
} from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, UttakPeriodeGrense } from '@fpsak-frontend/types';
import { VurderSoknadsfristAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import styles from './vurderSoknadsfristForeldrepengerForm.less';

const isEdited = (hasAksjonspunkt: boolean, gyldigSenFremsetting?: boolean): boolean => hasAksjonspunkt && gyldigSenFremsetting !== undefined;

type FormValues = {
  gyldigSenFremsetting?: boolean;
  ansesMottatt?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  mottattDato: string;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: VurderSoknadsfristAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
}

interface MappedOwnProps {
  gyldigSenFremsetting?: boolean;
  antallDagerSoknadLevertForSent?: number;
  hasAksjonspunkt: boolean;
  soknadsperiodeStart?: string;
  soknadsperiodeSlutt?: string;
  soknadsfristdato?: string;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * VurderSoknadsfristForeldrepengerForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
export const VurderSoknadsfristForeldrepengerFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  readOnly,
  readOnlySubmitButton,
  mottattDato,
  antallDagerSoknadLevertForSent,
  gyldigSenFremsetting,
  hasAksjonspunkt,
  soknadsperiodeStart,
  soknadsperiodeSlutt,
  soknadsfristdato,
  isApOpen,
  ...formProps
}) => (
  <>
    <Undertittel><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Soknadsfrist" /></Undertittel>
    <VerticalSpacer twentyPx />
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
      {[<FormattedMessage
        key="VurderSoknadsfristForeldrepengerForm"
        id="VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText"
        values={{
          numberOfDays: antallDagerSoknadLevertForSent,
          soknadsfristdato: soknadsfristdato ? moment(soknadsfristdato).format(DDMMYYYY_DATE_FORMAT) : '',
        }}
      />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer twentyPx />
    <Row>
      <Column xs="6">
        <Panel className={styles.panel}>
          <Element><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Vurder" /></Element>
          <ul className={styles.hyphen}>
            <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt1" /></li>
            <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt2" /></li>
            <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt3" /></li>
          </ul>
        </Panel>
      </Column>
      <Column xs="6">
        <Row className={styles.marginBottom}>
          <Column xs="6">
            <Undertekst><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadMottatt" /></Undertekst>
            {mottattDato
              && <Normaltekst>{moment(mottattDato).format(DDMMYYYY_DATE_FORMAT)}</Normaltekst>}
          </Column>
          {soknadsperiodeStart && soknadsperiodeSlutt && (
            <Column xs="6">
              <Undertekst><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadPeriode" /></Undertekst>
              <Normaltekst>
                {`${moment(soknadsperiodeStart).format(DDMMYYYY_DATE_FORMAT)} - ${moment(soknadsperiodeSlutt).format(DDMMYYYY_DATE_FORMAT)}`}
              </Normaltekst>
            </Column>
          )}
        </Row>
      </Column>
    </Row>
    <form className={styles.marginTop} onSubmit={formProps.handleSubmit}>
      <div>
        <ProsessStegBegrunnelseTextField readOnly={readOnly} />
        <VerticalSpacer sixteenPx />
        <div>
          <RadioGroupField name="gyldigSenFremsetting" validate={[required]} readOnly={readOnly} isEdited={isEdited(hasAksjonspunkt, gyldigSenFremsetting)}>
            <RadioOption value label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.GyldigGrunn" />} />
            <RadioOption value={false} label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn" />} />
          </RadioGroupField>
        </div>
        {gyldigSenFremsetting && (
          <Row>
            <Column xs="4">
              <ArrowBox>
                <DatepickerField
                  name="ansesMottatt"
                  readOnly={readOnly}
                  label={{ id: 'VurderSoknadsfristForeldrepengerForm.NyMottattDato' }}
                  validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                />
              </ArrowBox>
            </Column>
          </Row>
        )}
        <VerticalSpacer twentyPx />
        <ProsessStegSubmitButton
          formName={formProps.form}
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
        />
      </div>
    </form>
  </>
);

VurderSoknadsfristForeldrepengerFormImpl.defaultProps = {
  hasAksjonspunkt: false,
};

export const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.uttakPeriodeGrense,
    (ownProps: PureOwnProps) => ownProps.mottattDato],
  (aksjonspunkter, uttaksperiodegrense, mottattDato): FormValues => {
    const upgMottattDato = uttaksperiodegrense ? uttaksperiodegrense.mottattDato : undefined;
    return {
      gyldigSenFremsetting: isAksjonspunktOpen(aksjonspunkter[0].status.kode) ? undefined : upgMottattDato !== mottattDato,
      ansesMottatt: upgMottattDato,
      ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
    };
  },
);

const transformValues = (values: FormValues): VurderSoknadsfristAp => ({
  harGyldigGrunn: values.gyldigSenFremsetting,
  ansesMottattDato: values.ansesMottatt,
  kode: AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER,
  ...ProsessStegBegrunnelseTextField.transformValues(values),
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const formName = 'VurderSoknadsfristForeldrepengerForm';

const mapStateToPropsFactory = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const uttaksperiodegrense = ownProps.uttakPeriodeGrense;
  const { aksjonspunkter } = ownProps;
  return {
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitialValues(ownProps),
    gyldigSenFremsetting: formValueSelector(formName)(state, 'gyldigSenFremsetting'),
    antallDagerSoknadLevertForSent: uttaksperiodegrense ? uttaksperiodegrense.antallDagerLevertForSent : undefined,
    soknadsperiodeStart: uttaksperiodegrense ? uttaksperiodegrense.soknadsperiodeStart : undefined,
    soknadsperiodeSlutt: uttaksperiodegrense ? uttaksperiodegrense.soknadsperiodeSlutt : undefined,
    soknadsfristdato: uttaksperiodegrense ? uttaksperiodegrense.soknadsfristForForsteUttaksdato : undefined,
    hasAksjonspunkt: aksjonspunkter.length > 0,
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(VurderSoknadsfristForeldrepengerFormImpl));
