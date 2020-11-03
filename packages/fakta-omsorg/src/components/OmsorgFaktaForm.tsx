import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { FieldArray } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ArrowBox, FaktaGruppe } from '@fpsak-frontend/shared-components';
import { Aksjonspunkt, Soknad, Ytelsefordeling } from '@fpsak-frontend/types';

import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';

import styles from './omsorgFaktaForm.less';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const getAksjonspunkt = (aksjonspunktCode: any, aksjonspunkter: any) => aksjonspunkter.filter((ap: any) => ap.definisjon.kode === aksjonspunktCode);

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  aleneomsorgIsEdited?: boolean;
  omsorgIsEdited?: boolean;
  omsorg?: boolean;
  className?: string;
  oppgittAleneomsorgSoknad: boolean;
  oppgittOmsorgSoknad: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]) => {
    aleneomsorg: boolean;
    omsorg: boolean;
    ikkeOmsorgPerioder: Ytelsefordeling['ikkeOmsorgPerioder'];
  },
  transformAleneomsorgValues?: (values: { aleneomsorg: boolean }) => {
    kode: string;
    aleneomsorg: boolean;
  },
  transformOmsorgValues?: (values: { omsorg: boolean; ikkeOmsorgPerioder: Ytelsefordeling['ikkeOmsorgPerioder'] }) => {
    kode: string;
    omsorg: boolean;
    ikkeOmsorgPerioder: Ytelsefordeling['ikkeOmsorgPerioder'];
  },
}

const OmsorgFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  aksjonspunkter,
  readOnly,
  omsorg,
  className,
  aleneomsorgIsEdited,
  omsorgIsEdited,
  oppgittOmsorgSoknad,
  oppgittAleneomsorgSoknad,
  alleMerknaderFraBeslutter,
}) => (
  <div className={className}>
    {hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter)
      && (
      <FaktaGruppe
        titleCode="OmsorgFaktaForm.Aleneomsorg"
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
        titleCode="OmsorgFaktaForm.Omsorg"
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

OmsorgFaktaForm.defaultProps = {
  aleneomsorgIsEdited: false,
  omsorgIsEdited: false,
  className: styles.defaultAleneOmsorgFakta,
};

interface PureOwnProps {
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
}

OmsorgFaktaForm.buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]) => {
  const aleneomsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG, aksjonspunkter);
  const omsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter);
  let aleneomsorg = null;
  let omsorg = null;

  if (aleneomsorgAp.length > 0 && !isAksjonspunktOpen(aleneomsorgAp[0].status.kode)) {
    aleneomsorg = ytelsefordeling.aleneOmsorgPerioder && ytelsefordeling.aleneOmsorgPerioder.length > 0;
  }
  if (omsorgAp.length > 0 && !isAksjonspunktOpen(omsorgAp[0].status.kode)) {
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

OmsorgFaktaForm.transformAleneomsorgValues = (values: { aleneomsorg: boolean }) => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  aleneomsorg: values.aleneomsorg,
});

OmsorgFaktaForm.transformOmsorgValues = (values: { omsorg: boolean; ikkeOmsorgPerioder: Ytelsefordeling['ikkeOmsorgPerioder'] }) => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
  omsorg: values.omsorg,
  ikkeOmsorgPerioder: values.ikkeOmsorgPerioder && values.ikkeOmsorgPerioder.length > 0 ? values.ikkeOmsorgPerioder : null,
});

const mapStateToProps = (_state: any, ownProps: PureOwnProps) => ({
  aleneomsorgIsEdited: !!ownProps.ytelsefordeling.aleneOmsorgPerioder,
  omsorgIsEdited: !!ownProps.ytelsefordeling.ikkeOmsorgPerioder,
  oppgittOmsorgSoknad: ownProps.soknad.oppgittRettighet.omsorgForBarnet,
  oppgittAleneomsorgSoknad: ownProps.soknad.oppgittRettighet.aleneomsorgForBarnet,
});

export default connect(mapStateToProps)(OmsorgFaktaForm);
