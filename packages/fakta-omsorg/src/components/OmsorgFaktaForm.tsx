import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { FieldArray } from 'redux-form';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  dateIsAfter,
  dateRangesNotOverlapping,
  dateRangesOverlappingMessage,
  invalidPeriodMessage,
  required,
} from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ArrowBox, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { Aksjonspunkt, Soknad, Ytelsefordeling } from '@fpsak-frontend/types';
import { BekreftAleneomsorgVurderingAp, BekreftOmsorgVurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';

import styles from './omsorgFaktaForm.less';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const getAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt[] => aksjonspunkter
  .filter((ap) => ap.definisjon === aksjonspunktCode);

export type FormValues = {
  aleneomsorg?: boolean;
  omsorg?: boolean;
  ikkeOmsorgPerioder?: Ytelsefordeling['ikkeOmsorgPerioder'];
}

interface PureOwnProps {
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  omsorg?: boolean;
  className?: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  aleneomsorgIsEdited?: boolean;
  omsorgIsEdited?: boolean;
  oppgittAleneomsorgSoknad: boolean;
  oppgittOmsorgSoknad: boolean;
}

interface StaticFunctions {
  buildInitialValues?: (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformAleneomsorgValues?: (values: FormValues) => BekreftAleneomsorgVurderingAp;
  transformOmsorgValues?: (values: FormValues) => BekreftOmsorgVurderingAp;
  validate?: (values: FormValues) => any;
}

const OmsorgFaktaForm: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  aksjonspunkter,
  readOnly,
  omsorg,
  className,
  aleneomsorgIsEdited,
  omsorgIsEdited,
  oppgittOmsorgSoknad,
  oppgittAleneomsorgSoknad,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <div className={className}>
      {hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter)
        && (
        <FaktaGruppe
          title={intl.formatMessage({ id: 'OmsorgFaktaForm.Aleneomsorg' })}
          withoutBorder
          merknaderFraBeslutter={alleMerknaderFraBeslutter[MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]}
        >
          <Normaltekst className={styles.paddingBottom}>
            {oppgittAleneomsorgSoknad
              ? <FormattedMessage id="OmsorgFaktaForm.OppgittAleneomsorg" />
              : (
                <FormattedMessage
                  id="OmsorgFaktaForm.OppgittIkkeAleneomsorg"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
          </Normaltekst>
          <RadioGroupField name="aleneomsorg" readOnly={readOnly} validate={[required]} isEdited={aleneomsorgIsEdited}>
            <RadioOption label={{ id: 'OmsorgFaktaForm.HarAleneomsorg' }} value />
            <RadioOption
              label={(
                <FormattedMessage
                  id="OmsorgFaktaForm.HarIkkeAleneomsorg"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
              value={false}
            />
          </RadioGroupField>
        </FaktaGruppe>
        )}
      {hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter)
        && (
        <FaktaGruppe
          title={intl.formatMessage({ id: 'OmsorgFaktaForm.Omsorg' })}
          withoutBorder
          merknaderFraBeslutter={alleMerknaderFraBeslutter[MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]}
        >
          <Normaltekst className={styles.paddingBottom}>
            {oppgittOmsorgSoknad
              ? <FormattedMessage id="OmsorgFaktaForm.OppgittOmsorg" />
              : (
                <FormattedMessage
                  id="OmsorgFaktaForm.OppgittIkkeOmsorg"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
          </Normaltekst>
          <RadioGroupField name="omsorg" readOnly={readOnly} validate={[required]} isEdited={omsorgIsEdited}>
            <RadioOption label={{ id: 'OmsorgFaktaForm.HarOmsorg' }} value />
            <RadioOption
              label={(
                <FormattedMessage
                  id="OmsorgFaktaForm.HarIkkeOmsorg"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
              value={false}
            />
          </RadioGroupField>
          {omsorg === false
            ? (
              <Row>
                <Column xs="2" />
                <Column xs="6">
                  <ArrowBox alignOffset={40}>
                    <FieldArray
                      name="ikkeOmsorgPerioder"
                      component={IkkeOmsorgPeriodeField}
                      readOnly={readOnly}
                    />
                  </ArrowBox>
                </Column>
              </Row>
            )
            : null}
        </FaktaGruppe>
        )}
    </div>
  );
};
OmsorgFaktaForm.defaultProps = {
  aleneomsorgIsEdited: false,
  omsorgIsEdited: false,
  className: styles.defaultAleneOmsorgFakta,
};

OmsorgFaktaForm.buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const aleneomsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter);
  const omsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter);
  let aleneomsorg = null;
  let omsorg = null;

  if (aleneomsorgAp.length > 0 && !isAksjonspunktOpen(aleneomsorgAp[0].status)) {
    aleneomsorg = ytelsefordeling.aleneOmsorgPerioder && ytelsefordeling.aleneOmsorgPerioder.length > 0;
  }
  if (omsorgAp.length > 0 && !isAksjonspunktOpen(omsorgAp[0].status)) {
    omsorg = !(ytelsefordeling.ikkeOmsorgPerioder && ytelsefordeling.ikkeOmsorgPerioder.length > 0);
  }

  return {
    aleneomsorg,
    omsorg,
    ikkeOmsorgPerioder: ytelsefordeling.ikkeOmsorgPerioder && ytelsefordeling.ikkeOmsorgPerioder.length > 0
      ? ytelsefordeling.ikkeOmsorgPerioder : [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
  };
};

OmsorgFaktaForm.transformAleneomsorgValues = (values: FormValues): BekreftAleneomsorgVurderingAp => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  aleneomsorg: values.aleneomsorg,
});

OmsorgFaktaForm.transformOmsorgValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
  omsorg: values.omsorg,
  ikkeOmsorgPerioder: values.ikkeOmsorgPerioder && values.ikkeOmsorgPerioder.length > 0 ? values.ikkeOmsorgPerioder : null,
});

const hasValue = (values: Ytelsefordeling['ikkeOmsorgPerioder']): boolean => values && values.length && values.length < 2 && !values[0].periodeTom;

const checkArrayErrors = (values: Ytelsefordeling['ikkeOmsorgPerioder']) => values.map(({
  periodeFom,
  periodeTom,
}, index) => {
  if (periodeFom && periodeTom) {
    return null;
  }
  let periodeFomError = required(periodeFom);
  if (periodeTom) {
    periodeFomError = moment(periodeFom).isSameOrBefore(moment(periodeTom).startOf('day')) ? null : invalidPeriodMessage();
  }
  let periodeTomError;
  if (values.length > index + 1) {
    periodeTomError = required(periodeTom);
  }
  if (periodeFomError || periodeTomError) {
    return {
      periodeFom: periodeFomError,
      periodeTom: periodeTomError,
    };
  }
  return null;
});

const checkOverlapError = (values: Ytelsefordeling['ikkeOmsorgPerioder']) => dateRangesNotOverlapping(values.reduce((result, current) => {
  if (current.periodeTom && current.periodeFom) {
    result.push([current.periodeFom, current.periodeTom]);
  }
  return result;
}, []));

const hasValidPeriodOrOnlyStartDate = (values: Ytelsefordeling['ikkeOmsorgPerioder']): any => {
  if (hasValue(values)) {
    return null;
  }

  const arrayErrors = checkArrayErrors(values);

  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }
  if (values.length > 1) {
    let overlapError = checkOverlapError(values);

    const lastEntry = values[values.length - 1];
    if (!overlapError && lastEntry.periodeFom && !lastEntry.periodeTom) {
      const arrayWithoutLast = values.slice(0, values.length - 1);
      overlapError = arrayWithoutLast.some((date) => dateIsAfter(date.periodeFom, lastEntry.periodeFom)
        || dateIsAfter(date.periodeTom, lastEntry.periodeFom))
        ? dateRangesOverlappingMessage() : null;
    }
    if (overlapError) {
      return { _error: overlapError };
    }
  }
  return null;
};

OmsorgFaktaForm.validate = (values: FormValues): any => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { omsorg, ikkeOmsorgPerioder } = values;
  if (omsorg === false) {
    return {
      ikkeOmsorgPerioder: hasValidPeriodOrOnlyStartDate(ikkeOmsorgPerioder),
    };
  }
  return errors;
};

const mapStateToProps = (_state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  aleneomsorgIsEdited: !!ownProps.ytelsefordeling.aleneOmsorgPerioder,
  omsorgIsEdited: !!ownProps.ytelsefordeling.ikkeOmsorgPerioder,
  oppgittOmsorgSoknad: ownProps.soknad.oppgittRettighet.omsorgForBarnet,
  oppgittAleneomsorgSoknad: ownProps.soknad.oppgittRettighet.aleneomsorgForBarnet,
});

export default connect(mapStateToProps)(OmsorgFaktaForm);
