import React, { Component, ReactElement } from 'react';
import { FormattedMessage, IntlShape } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { ArbeidsgiverOpplysningerPerId, AlleKodeverk } from '@fpsak-frontend/types';
import {
  BeregningFaktaOgOverstyringAP,
} from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import FaktaForATFLOgSNPanel, {
  getBuildInitialValuesFaktaForATFLOgSN,
  transformValuesFaktaForATFLOgSN,
  validationForVurderFakta,
} from './FaktaForATFLOgSNPanel';

import { erAvklartAktivitetEndret } from '../avklareAktiviteter/AvklareAktiviteterPanel';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { erOverstyring, erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import { FaktaOmBeregningAksjonspunktValues, FaktaOmBeregningValues } from '../../typer/FaktaBeregningTypes';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => {
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === OVERSTYRING_AV_BEREGNINGSGRUNNLAG)) {
    return aksjonspunkter
      .find((ap) => ap.definisjon.kode === OVERSTYRING_AV_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);
  }
  return aksjonspunkter
    .find((ap) => ap.definisjon.kode === VURDER_FAKTA_FOR_ATFL_SN && ap.begrunnelse !== null);
};

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

export const harIkkeEndringerIAvklarMedFlereAksjonspunkter = (verdiForAvklarAktivitetErEndret: boolean, aksjonspunkter: Aksjonspunkt[]): boolean => {
  if ((hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter))) {
    return !verdiForAvklarAktivitetErEndret;
  }
  return true;
};

const isAksjonspunktClosed = (alleAp: Aksjonspunkt[]): boolean => {
  const relevantAp = alleAp.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN
    || ap.definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);
  return relevantAp.length === 0 ? false : relevantAp.some((ap) => !isAksjonspunktOpen(ap.status.kode));
};

const lagHelpTextsForFakta = (): ReactElement[] => {
  const helpTexts = [];
  helpTexts.push(<FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />);
  return helpTexts;
};

const hasOpenAksjonspunkt = (kode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter.some((ap) => ap.definisjon.kode === kode
  && isAksjonspunktOpen(ap.status.kode));

type OwnProps = {
    intl: IntlShape,
    readOnly: boolean;
    submittable: boolean;
    beregningsgrunnlag: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
    alleKodeverk: AlleKodeverk;
    erOverstyrer: boolean;
    submitCallback: (aksjonspunktData: BeregningFaktaOgOverstyringAP) => Promise<void>;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type MappedOwnProps = {
  initialValues: FaktaOmBeregningAksjonspunktValues;
  validate: (formValues: FaktaOmBeregningAksjonspunktValues) => any;
  onSubmit: (formValues: FaktaOmBeregningAksjonspunktValues) => void;
  verdiForAvklarAktivitetErEndret: boolean,
  erOverstyrt: boolean,
  hasBegrunnelse: boolean,
}

type OwnState = {
  submitEnabled: boolean;
}

/**
 * VurderFaktaBeregningPanel
 *
 * Container komponent.. Inneholder begrunnelsefelt og komponent som innholder panelene for fakta om beregning tilfeller
 */
export class VurderFaktaBeregningPanelImpl extends Component<OwnProps & InjectedFormProps & MappedOwnProps, OwnState> {
  constructor(props: OwnProps & MappedOwnProps & InjectedFormProps) {
    super(props);
    this.state = {
      submitEnabled: false,
    };
  }

  componentDidMount() {
    const { submitEnabled } = this.state;
    if (!submitEnabled) {
      this.setState({
        submitEnabled: true,
      });
    }
  }

  render() {
    const {
      props: {
        beregningsgrunnlag,
        verdiForAvklarAktivitetErEndret,
        readOnly,
        submittable,
        hasBegrunnelse,
        aksjonspunkter,
        erOverstyrt,
        alleKodeverk,
        erOverstyrer,
        arbeidsgiverOpplysningerPerId,
        ...formProps
      },
      state: {
        submitEnabled,
      },
    } = this;

    if (!(hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter))) {
      return (
        <form onSubmit={formProps.handleSubmit}>
          {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) && (
            <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAksjonspunktClosed(aksjonspunkter)}>
              {lagHelpTextsForFakta()}
            </AksjonspunktHelpTextTemp>
          )}
          <VerticalSpacer twentyPx />
          <FaktaForATFLOgSNPanel
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed(aksjonspunkter)}
            aksjonspunkter={aksjonspunkter}
            beregningsgrunnlag={beregningsgrunnlag}
            alleKodeverk={alleKodeverk}
            erOverstyrer={erOverstyrer}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          <VerticalSpacer twentyPx />
          {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || erOverstyrt) && (
            <>
              <FaktaBegrunnelseTextField
                name={BEGRUNNELSE_FAKTA_TILFELLER_NAME}
                isSubmittable={submittable}
                isReadOnly={readOnly}
                hasBegrunnelse={hasBegrunnelse}
              />
              <VerticalSpacer twentyPx />
              <FaktaSubmitButton
                formName={formProps.form}
                isSubmittable={submittable && submitEnabled && harIkkeEndringerIAvklarMedFlereAksjonspunkter(verdiForAvklarAktivitetErEndret, aksjonspunkter)}
                isReadOnly={readOnly}
                hasOpenAksjonspunkter={!isAksjonspunktClosed(aksjonspunkter)}
              />
            </>
          )}
        </form>
      );
    }
    return null;
  }
}

export const transformValuesVurderFaktaBeregning = (values: FaktaOmBeregningAksjonspunktValues): BeregningFaktaOgOverstyringAP => {
  const { aksjonspunkter } = values;
  if (hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || erOverstyring(values)) {
    const faktaBeregningValues = values;
    const beg = faktaBeregningValues[BEGRUNNELSE_FAKTA_TILFELLER_NAME];
    return {
      kode: erOverstyring(values) ? OVERSTYRING_AV_BEREGNINGSGRUNNLAG : VURDER_FAKTA_FOR_ATFL_SN,
      begrunnelse: beg === undefined ? null : beg,
      ...transformValuesFaktaForATFLOgSN(faktaBeregningValues),
    };
  }
  return null;
};

export const buildInitialValuesVurderFaktaBeregning = createSelector(
  [(state: any, ownProps: any) => ownProps.aksjonspunkter, getBuildInitialValuesFaktaForATFLOgSN],
  (aksjonspunkter: Aksjonspunkt[], buildInitialValuesTilfeller: () => FaktaOmBeregningValues): FaktaOmBeregningAksjonspunktValues => ({
    aksjonspunkter,
    ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FAKTA_TILFELLER_NAME),
    ...buildInitialValuesTilfeller(),
  }),
);

export const validateVurderFaktaBeregning = (values: FaktaOmBeregningAksjonspunktValues, intl: IntlShape): any => {
  const { aksjonspunkter } = values;
  if (values && ((aksjonspunkter && hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)) || erOverstyring(values))) {
    return {
      ...validationForVurderFakta(values, intl),
    };
  }
  return null;
};

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FaktaOmBeregningAksjonspunktValues) => submitCallback(transformValuesVurderFaktaBeregning(values)));

const mapStateToPropsFactory = (_state: any, initialProps: OwnProps) => {
  const validate = (values) => validateVurderFaktaBeregning(values, initialProps.intl);
  return (state: any, ownProps: OwnProps): MappedOwnProps => {
    // @ts-ignore FIX reselect
    const initialValues = buildInitialValuesVurderFaktaBeregning(state, ownProps);
    return ({
      initialValues,
      validate,
      onSubmit: lagSubmitFn(ownProps),
      // @ts-ignore
      verdiForAvklarAktivitetErEndret: erAvklartAktivitetEndret(state, ownProps),
      // @ts-ignore FIX reselect
      erOverstyrt: erOverstyringAvBeregningsgrunnlag(state, ownProps),
      hasBegrunnelse: initialValues && !!initialValues[BEGRUNNELSE_FAKTA_TILFELLER_NAME],
    });
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: formNameVurderFaktaBeregning,
  enableReinitialize: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(VurderFaktaBeregningPanelImpl));
