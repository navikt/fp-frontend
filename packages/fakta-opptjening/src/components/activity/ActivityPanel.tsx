import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
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
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import CustomOpptjeningAktivitet, { NyOpptjeningAktivitet } from '../../CustomOpptjeningAktivitet';
import ActivityDataSubPanel from './ActivityDataSubPanel';

import styles from './activityPanel.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

function erFraAvvikendeKode(atCodes: string[], oat: KodeverkMedNavn) {
  return (atCodes.includes(arbeidType.LONN_UNDER_UTDANNING) && oat.kode === opptjeningAktivitetType.VIDERE_ETTERUTDANNING)
    || (atCodes.includes(arbeidType.FRILANSER) && oat.kode === opptjeningAktivitetType.FRILANS);
}

const filterActivityType = (opptjeningAktivitetTypes: KodeverkMedNavn[], erManueltOpprettet: boolean, arbeidTypes: KodeverkMedNavn[]) => {
  if (!erManueltOpprettet) {
    return opptjeningAktivitetTypes;
  }

  const atCodes = arbeidTypes.map((at: KodeverkMedNavn) => at.kode);
  return opptjeningAktivitetTypes.filter((oat: KodeverkMedNavn) => atCodes.includes(oat.kode)
    || erFraAvvikendeKode(atCodes, oat));
};

const shouldDisablePeriodpicker = (hasAksjonspunkt: boolean, initialValues: CustomOpptjeningAktivitet | NyOpptjeningAktivitet) => {
  if (!hasAksjonspunkt) {
    return true;
  }
  return !initialValues.erManueltOpprettet && !!initialValues.erGodkjent && !initialValues.erEndret;
};

const findInYearsMonthsAndDays = (opptjeningFom: string, opptjeningTom: string) => {
  const difference = findDifferenceInMonthsAndDays(opptjeningFom, opptjeningTom);
  if (!difference) {
    return <span />;
  }
  return difference.months >= 1
    ? <FormattedMessage id="ActivityPanel.MonthsAndDays" values={{ months: difference.months, days: difference.days }} />
    : <FormattedMessage id="ActivityPanel.Days" values={{ days: difference.days }} />;
};

const isBegrunnelseRequired = (allValues: any, props: any) => {
  if (props.pristine) {
    return false;
  }
  if (allValues.erGodkjent === false) {
    return true;
  }
  return !isEqual(omit(props.initialValues, 'erGodkjent'), omit(allValues, 'erGodkjent'));
};
const requiredCustom = requiredIfCustomFunctionIsTrue(isBegrunnelseRequired);

const finnBegrunnelseLabel = (initialValues: CustomOpptjeningAktivitet | NyOpptjeningAktivitet, readOnly: boolean, hasAksjonspunkt: boolean) => (
  initialValues.erManueltOpprettet || readOnly || shouldDisablePeriodpicker(hasAksjonspunkt, initialValues)
    ? 'ActivityPanel.Begrunnelse'
    : 'ActivityPanel.BegrunnEndringene'
);

export const activityPanelName = 'ActivityPanel';

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  updateActivity: (values: any) => void
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  opptjeningAktivitetTypes: KodeverkMedNavn[];
  activity: CustomOpptjeningAktivitet | NyOpptjeningAktivitet;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
  readOnly: boolean;
  cancelSelectedOpptjeningActivity: (...args: any[]) => any;
  selectNextPeriod?: (...args: any[]) => any;
  selectPrevPeriod?: (...args: any[]) => any;
  hasAksjonspunkt: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface OwnProps {
  selectedActivityType?: Kodeverk;
  opptjeningFom?: string;
  opptjeningTom?: string;
  activityId?: number;
  initialValues: CustomOpptjeningAktivitet | NyOpptjeningAktivitet;
}

/**
 * ActivityPanel
 *
 * Presentasjonskomponent. Viser informasjon om valgt aktivitet
 */
export const ActivityPanel: FunctionComponent<PureOwnProps & OwnProps & WrappedComponentProps & InjectedFormProps> = ({
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
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              { /* @ts-ignore Fiks */}
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
          selectValues={opptjeningAktivitetTypes.map((oat: any) => <option key={oat.kode} value={oat.kode}>{oat.navn}</option>)}
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
                    b: (chunks: any) => <b>{chunks}</b>,
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
        <FlexContainer>
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

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const {
    updateActivity, alleKodeverk, opptjeningAktivitetTypes, activity,
  } = initialOwnProps;
  const onSubmit = (values: any) => updateActivity(values);
  const arbeidTyper = alleKodeverk[kodeverkTyper.ARBEID_TYPE];
  const filtrerteOpptjeningAktivitetTypes = filterActivityType(opptjeningAktivitetTypes, activity.erManueltOpprettet, arbeidTyper);

  return (state: any, ownProps: PureOwnProps) => {
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

const validateForm = (values: any, props: any) => {
  if (!values) {
    return {};
  }
  const { opptjeningFom, opptjeningTom } = values;
  // TODO (TOR) Denne valideringa bør ligga i PeriodpickerField
  const errors = {
    opptjeningFom: required(opptjeningFom) || hasValidPeriod(opptjeningFom, opptjeningTom),
    opptjeningTom: required(opptjeningTom) || hasValidPeriod(opptjeningFom, opptjeningTom),
  };

  if (!errors.opptjeningFom && !errors.opptjeningTom) {
    return {
      ...errors,
      opptjeningFom: isWithinOpptjeningsperiode(props.opptjeningFomDato, props.opptjeningTomDato)(opptjeningFom, opptjeningTom),
    };
  }

  return errors;
};

export default connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: activityPanelName,
  validate: validateForm,
  enableReinitialize: true,
})(ActivityPanel)));
