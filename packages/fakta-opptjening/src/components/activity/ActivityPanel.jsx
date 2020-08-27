import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formPropTypes } from 'redux-form';
import moment from 'moment';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import arbeidType from '@fpsak-frontend/kodeverk/src/arbeidType';
import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  findDifferenceInMonthsAndDays,
  hasValidPeriod,
  hasValidText,
  isEqual,
  isWithinOpptjeningsperiode,
  maxLength,
  minLength,
  omit,
  required,
  requiredIfCustomFunctionIsTrue,
} from '@fpsak-frontend/utils';
import {
  PeriodpickerField, RadioGroupField, RadioOption, SelectField, TextAreaField, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import { TimeLineButton } from '@fpsak-frontend/tidslinje';

import ActivityDataSubPanel from './ActivityDataSubPanel';

import styles from './activityPanel.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

function erFraAvvikendeKode(atCodes, oat) {
  return (atCodes.includes(arbeidType.LONN_UNDER_UTDANNING) && oat.kode === opptjeningAktivitetType.VIDERE_ETTERUTDANNING)
    || (atCodes.includes(arbeidType.FRILANSER) && oat.kode === opptjeningAktivitetType.FRILANS);
}

const filterActivityType = (opptjeningAktivitetTypes, erManueltOpprettet, arbeidTypes) => {
  if (!erManueltOpprettet) {
    return opptjeningAktivitetTypes;
  }

  const atCodes = arbeidTypes.map((at) => at.kode);
  return opptjeningAktivitetTypes.filter((oat) => atCodes.includes(oat.kode)
    || erFraAvvikendeKode(atCodes, oat));
};

const shouldDisablePeriodpicker = (hasAksjonspunkt, initialValues) => {
  if (!hasAksjonspunkt) {
    return true;
  }
  return !initialValues.erManueltOpprettet && !!initialValues.erGodkjent && !initialValues.erEndret;
};

const hasMerknad = (activity) => !!activity.erGodkjent && !activity.erManueltOpprettet && activity.erEndret;

const findInYearsMonthsAndDays = (opptjeningFom, opptjeningTom) => {
  const difference = findDifferenceInMonthsAndDays(opptjeningFom, opptjeningTom);
  if (!difference) {
    return <span />;
  }
  return difference.months >= 1
    ? <FormattedMessage id="ActivityPanel.MonthsAndDays" values={{ months: difference.months, days: difference.days }} />
    : <FormattedMessage id="ActivityPanel.Days" values={{ days: difference.days }} />;
};

const isBegrunnelseRequired = (allValues, props) => {
  if (props.pristine) {
    return false;
  }
  if (allValues.erGodkjent === false) {
    return true;
  }
  return !isEqual(omit(props.initialValues, 'erGodkjent'), omit(allValues, 'erGodkjent'));
};
const requiredCustom = requiredIfCustomFunctionIsTrue(isBegrunnelseRequired);

const finnBegrunnelseLabel = (initialValues, readOnly, hasAksjonspunkt) => (
  initialValues.erManueltOpprettet || readOnly || shouldDisablePeriodpicker(hasAksjonspunkt, initialValues)
    ? 'ActivityPanel.Begrunnelse'
    : 'ActivityPanel.BegrunnEndringene'
);

export const activityPanelName = 'ActivityPanel';

/**
 * ActivityPanel
 *
 * Presentasjonskomponent. Viser informasjon om valgt aktivitet
 */
export const ActivityPanel = ({
  intl,
  initialValues,
  readOnly,
  opptjeningAktivitetTypes,
  cancelSelectedOpptjeningActivity,
  selectedActivityType,
  activityId,
  opptjeningFom,
  opptjeningTom,
  selectNextPeriod,
  selectPrevPeriod,
  hasAksjonspunkt,
  opptjeningFomDato,
  opptjeningTomDato,
  alleMerknaderFraBeslutter,
  ...formProps
}) => (
  <FaktaGruppe
    className={styles.panel}
    aksjonspunktCode={hasMerknad(initialValues) ? aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING : undefined}
    merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING]}
  >
    <Row>
      <Column xs="10">
        <Element><FormattedMessage id={initialValues.id ? 'ActivityPanel.Details' : 'ActivityPanel.NewActivity'} /></Element>
      </Column>
      <Column xs="2">
        <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={selectPrevPeriod} />
        <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={selectNextPeriod} />
      </Column>
    </Row>
    <Row>
      <Column xs="7">
        <FlexContainer fluid>
          <FlexRow>
            <FlexColumn>
              <PeriodpickerField
                key={activityId}
                names={['opptjeningFom', 'opptjeningTom']}
                label={{ id: 'ActivityPanel.Period' }}
                readOnly={readOnly || shouldDisablePeriodpicker(hasAksjonspunkt, initialValues)}
                disabledDays={{ before: moment(opptjeningFomDato).toDate(), after: moment(opptjeningTomDato).toDate() }}
                isEdited={initialValues.erPeriodeEndret}
              />
            </FlexColumn>
            <FlexColumn>
              <Normaltekst className={styles.period}>
                {findInYearsMonthsAndDays(opptjeningFom, opptjeningTom)}
              </Normaltekst>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Column>
      <Column xs="5">
        <SelectField
          name="aktivitetType.kode"
          label={intl.formatMessage({ id: 'ActivityPanel.Activity' })}
          validate={[required]}
          placeholder={intl.formatMessage({ id: 'ActivityPanel.VelgAktivitet' })}
          selectValues={opptjeningAktivitetTypes.map((oat) => <option key={oat.kode} value={oat.kode}>{oat.navn}</option>)}
          readOnly={readOnly || !initialValues.erManueltOpprettet}
        />
      </Column>
    </Row>
    <ActivityDataSubPanel
      initialValues={initialValues}
      readOnly={readOnly}
      isManuallyAdded={initialValues.erManueltOpprettet}
      selectedActivityType={selectedActivityType}
    />
    { !shouldDisablePeriodpicker(hasAksjonspunkt, initialValues) && (
      <>
        <VerticalSpacer twentyPx />
        { (!initialValues.erManueltOpprettet) && (
          <RadioGroupField name="erGodkjent" validate={[required]} readOnly={readOnly} isEdited={initialValues.erEndret}>
            <RadioOption value label={{ id: 'ActivityPanel.Godkjent' }} />
            <RadioOption
              value={false}
              label={(
                <FormattedMessage
                  id="ActivityPanel.IkkeGodkjent"
                  values={{
                    b: (chunks) => <b>{chunks}</b>,
                  }}
                />
              )}
            />
          </RadioGroupField>
        )}
      </>
    )}
    <>
      <VerticalSpacer fourPx />
      <TextAreaField
        name="begrunnelse"
        textareaClass={styles.explanationTextarea}
        label={<FormattedMessage id={finnBegrunnelseLabel(initialValues, readOnly, hasAksjonspunkt)} />}
        validate={[requiredCustom, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly || shouldDisablePeriodpicker(hasAksjonspunkt, initialValues)}
      />
    </>
    { !shouldDisablePeriodpicker(hasAksjonspunkt, initialValues) && (
      <>
        <VerticalSpacer sixteenPx />
        <FlexContainer fluid>
          <FlexRow>
            <FlexColumn>
              <Hovedknapp mini htmlType="button" onClick={formProps.handleSubmit} disabled={formProps.pristine}>
                <FormattedMessage id="ActivityPanel.Oppdater" />
              </Hovedknapp>
            </FlexColumn>
            <FlexColumn>
              <Knapp mini htmlType="button" onClick={cancelSelectedOpptjeningActivity}>
                <FormattedMessage
                  id="ActivityPanel.Avbryt"
                />
              </Knapp>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </>
    )}
  </FaktaGruppe>
);

ActivityPanel.propTypes = {
  intl: PropTypes.shape().isRequired,
  readOnly: PropTypes.bool.isRequired,
  hasAksjonspunkt: PropTypes.bool.isRequired,
  opptjeningAktivitetTypes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cancelSelectedOpptjeningActivity: PropTypes.func.isRequired,
  selectedActivityType: PropTypes.shape(),
  opptjeningFom: PropTypes.string,
  opptjeningTom: PropTypes.string,
  selectNextPeriod: PropTypes.func,
  selectPrevPeriod: PropTypes.func,
  activityId: PropTypes.number,
  ...formPropTypes,
};

ActivityPanel.defaultProps = {
  selectedActivityType: {},
  opptjeningFom: undefined,
  opptjeningTom: undefined,
  selectPrevPeriod: undefined,
  selectNextPeriod: undefined,
  activityId: undefined,
};

const mapStateToPropsFactory = (initialState, initialOwnProps) => {
  const {
    updateActivity, alleKodeverk, opptjeningAktivitetTypes, activity,
  } = initialOwnProps;
  const onSubmit = (values) => updateActivity(values);
  const arbeidTyper = alleKodeverk[kodeverkTyper.ARBEID_TYPE];
  const filtrerteOpptjeningAktivitetTypes = filterActivityType(opptjeningAktivitetTypes, activity.erManueltOpprettet, arbeidTyper);

  return (state, ownProps) => {
    const { behandlingId, behandlingVersjon } = ownProps;
    return {
      onSubmit,
      initialValues: ownProps.activity,
      opptjeningAktivitetTypes: filtrerteOpptjeningAktivitetTypes,
      selectedActivityType: behandlingFormValueSelector(activityPanelName, behandlingId, behandlingVersjon)(state, 'aktivitetType'),
      opptjeningFom: behandlingFormValueSelector(activityPanelName, behandlingId, behandlingVersjon)(state, 'opptjeningFom'),
      opptjeningTom: behandlingFormValueSelector(activityPanelName, behandlingId, behandlingVersjon)(state, 'opptjeningTom'),
      activityId: behandlingFormValueSelector(activityPanelName, behandlingId, behandlingVersjon)(state, 'id'),
    };
  };
};

const validateForm = (values, props) => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { opptjeningFom, opptjeningTom } = values;
  // TODO (TOR) Denne valideringa bør ligga i PeriodpickerField
  errors.opptjeningFom = required(opptjeningFom) || hasValidPeriod(opptjeningFom, opptjeningTom);
  errors.opptjeningTom = required(opptjeningTom) || hasValidPeriod(opptjeningFom, opptjeningTom);

  if (!errors.opptjeningFom && !errors.opptjeningTom) {
    errors.opptjeningFom = isWithinOpptjeningsperiode(props.opptjeningFomDato, props.opptjeningTomDato)(opptjeningFom, opptjeningTom);
  }

  return errors;
};

export default connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: activityPanelName,
  validate: validateForm,
  enableReinitialize: true,
})(ActivityPanel)));
