import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { behandlingForm } from '@fpsak-frontend/form';

import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn } from '@fpsak-frontend/types';
import FaktaForATFLOgSNPanel, {
  getBuildInitialValuesFaktaForATFLOgSN,
  transformValuesFaktaForATFLOgSN,
  validationForVurderFakta,
} from './FaktaForATFLOgSNPanel';

import { erAvklartAktivitetEndret } from '../avklareAktiviteter/AvklareAktiviteterPanel';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { erOverstyring, erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

const findAksjonspunktMedBegrunnelse = (aksjonspunkter) => {
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === OVERSTYRING_AV_BEREGNINGSGRUNNLAG)) {
    return aksjonspunkter
      .find((ap) => ap.definisjon.kode === OVERSTYRING_AV_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);
  }
  return aksjonspunkter
    .find((ap) => ap.definisjon.kode === VURDER_FAKTA_FOR_ATFL_SN && ap.begrunnelse !== null);
};

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

export const harIkkeEndringerIAvklarMedFlereAksjonspunkter = (verdiForAvklarAktivitetErEndret, aksjonspunkter) => {
  if ((hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter))) {
    return !verdiForAvklarAktivitetErEndret;
  }
  return true;
};

const isAksjonspunktClosed = (alleAp) => {
  const relevantAp = alleAp.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN
    || ap.definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);
  return relevantAp.length === 0 ? false : relevantAp.some((ap) => !isAksjonspunktOpen(ap.status.kode));
};

const lagHelpTextsForFakta = () => {
  const helpTexts = [];
  helpTexts.push(<FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />);
  return helpTexts;
};

const hasOpenAksjonspunkt = (kode, aksjonspunkter) => aksjonspunkter.some((ap) => ap.definisjon.kode === kode && isAksjonspunktOpen(ap.status.kode));

type OwnProps = {
    readOnly: boolean;
    hasBegrunnelse: boolean;
    submittable: boolean;
    verdiForAvklarAktivitetErEndret: boolean;
    erOverstyrt: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    beregningsgrunnlag: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    erOverstyrer: boolean;
    submitCallback: (data: any) => Promise<any>;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type OwnState = {
  submitEnabled: boolean;
}

/**
 * VurderFaktaBeregningPanel
 *
 * Container komponent.. Inneholder begrunnelsefelt og komponent som innholder panelene for fakta om beregning tilfeller
 */
export class VurderFaktaBeregningPanelImpl extends Component<OwnProps & InjectedFormProps, OwnState> {
  constructor(props: OwnProps & InjectedFormProps) {
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
        behandlingId,
        behandlingVersjon,
        alleKodeverk,
        erOverstyrer,
        arbeidsgiverOpplysningerPerId,
        ...formProps
      },
      state: {
        submitEnabled,
      },
    } = this;
    return (
      <>
        {!(hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter)) && (
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
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
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
                behandlingId={behandlingId}
                behandlingVersjon={behandlingVersjon}
              />
            </>
          )}
        </form>
        )}
      </>
    );
  }
}

export const transformValuesVurderFaktaBeregning = (values) => {
  const { aksjonspunkter } = values;
  if (hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || erOverstyring(values)) {
    const faktaBeregningValues = values;
    const beg = faktaBeregningValues[BEGRUNNELSE_FAKTA_TILFELLER_NAME];
    return [{
      kode: erOverstyring(values) ? OVERSTYRING_AV_BEREGNINGSGRUNNLAG : VURDER_FAKTA_FOR_ATFL_SN,
      begrunnelse: beg === undefined ? null : beg,
      ...transformValuesFaktaForATFLOgSN(faktaBeregningValues, erOverstyring(values)),
    }];
  }
  return {};
};

export const buildInitialValuesVurderFaktaBeregning = createSelector(
  [(state, ownProps) => ownProps.aksjonspunkter, getBuildInitialValuesFaktaForATFLOgSN],
  (aksjonspunkter, buildInitialValuesTilfeller) => ({
    aksjonspunkter,
    ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FAKTA_TILFELLER_NAME),
    ...buildInitialValuesTilfeller(),
  }),
);

export const validateVurderFaktaBeregning = (values) => {
  const { aksjonspunkter } = values;
  if (values && ((aksjonspunkter && hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)) || erOverstyring(values))) {
    return {
      ...validationForVurderFakta(values),
    };
  }
  return null;
};

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback],
(submitCallback) => (values) => submitCallback(transformValuesVurderFaktaBeregning(values)));

const mapStateToPropsFactory = () => {
  const validate = (values) => validateVurderFaktaBeregning(values);
  return (state, ownProps) => {
    const initialValues = buildInitialValuesVurderFaktaBeregning(state, ownProps);
    return ({
      initialValues,
      validate,
      onSubmit: lagSubmitFn(ownProps),
      verdiForAvklarAktivitetErEndret: erAvklartAktivitetEndret(state, ownProps),
      erOverstyrt: erOverstyringAvBeregningsgrunnlag(state, ownProps),
      hasBegrunnelse: initialValues && !!initialValues[BEGRUNNELSE_FAKTA_TILFELLER_NAME],
    });
  };
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formNameVurderFaktaBeregning,
  enableReinitialize: true,
})(VurderFaktaBeregningPanelImpl));
