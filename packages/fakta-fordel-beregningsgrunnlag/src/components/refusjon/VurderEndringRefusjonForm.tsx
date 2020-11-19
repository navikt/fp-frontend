import React, { FunctionComponent } from 'react';
import { InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { behandlingForm } from '@fpsak-frontend/form';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import TidligereUtbetalinger from './TidligereUtbetalinger';
import VurderEndringRefusjonRad from './VurderEndringRefusjonRad';

const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';
const BEGRUNNELSE_FIELD = 'VURDER_REFUSJON_BERGRUNN_BEGRUNNELSE';

const {
  VURDER_REFUSJON_BERGRUNN,
} = aksjonspunktCodes;

const finnAksjonspunkt = (aksjonspunkter) => (aksjonspunkter ? aksjonspunkter.find((ap) => ap.definisjon.kode === VURDER_REFUSJON_BERGRUNN) : undefined);

interface MappedOwnProps {
  initialValues: any;
  onSubmit: (formValues: any) => void;
}

type OwnProps = {
    submitCallback: (...args: any[]) => any;
    readOnly: boolean;
    submittable: boolean;
    submitEnabled: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    beregningsgrunnlag?: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
};

export const VurderEndringRefusjonFormImpl: FunctionComponent<OwnProps & MappedOwnProps & InjectedFormProps> = ({
  submitEnabled,
  submittable,
  readOnly,
  behandlingId,
  behandlingVersjon,
  beregningsgrunnlag,
  aksjonspunkter,
  ...formProps
}) => {
  const { andeler } = beregningsgrunnlag.refusjonTilVurdering;
  const ap = finnAksjonspunkt(aksjonspunkter);
  const erAksjonspunktÅpent = ap ? isAksjonspunktOpen(ap.status.kode) : false;
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={erAksjonspunktÅpent}>
        {[<FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt" key="aksjonspunktText" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <form onSubmit={formProps.handleSubmit}>
        <Undertittel><FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" /></Undertittel>
        <VerticalSpacer sixteenPx />
        <TidligereUtbetalinger beregningsgrunnlag={beregningsgrunnlag} />
        { andeler.map((andel) => (
          <VurderEndringRefusjonRad
            refusjonAndel={andel}
            readOnly={readOnly}
            erAksjonspunktÅpent={erAksjonspunktÅpent}
            key={andel.arbeidsgiverNavn}
          />
        ))}
        <>
          <VerticalSpacer twentyPx />
          <FaktaBegrunnelseTextField
            name={BEGRUNNELSE_FIELD}
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={!!(ap && ap.begrunnelse)}
          />

          <VerticalSpacer twentyPx />
          <FaktaSubmitButton
            formName={formProps.form}
            isSubmittable={submittable && submitEnabled}
            isReadOnly={readOnly}
            hasOpenAksjonspunkter={erAksjonspunktÅpent}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
          />
        </>
        <VerticalSpacer sixteenPx />
      </form>
    </>
  );
};

export const buildInitialValues = (bg, aksjonspunkter) => {
  const { andeler } = bg.refusjonTilVurdering;
  let initialValues = {};
  andeler.forEach((andel) => {
    initialValues = {
      ...initialValues,
      ...VurderEndringRefusjonRad.buildInitialValues(andel),
    };
  });
  const refusjonAP = finnAksjonspunkt(aksjonspunkter);
  initialValues[BEGRUNNELSE_FIELD] = refusjonAP && refusjonAP.begrunnelse ? refusjonAP.begrunnelse : '';
  return initialValues;
};

export const transformValues = (values, bg) => {
  const { andeler } = bg.refusjonTilVurdering;
  const transformedAndeler = andeler.map((andel) => VurderEndringRefusjonRad.transformValues(values, andel));
  return {
    begrunnelse: values[BEGRUNNELSE_FIELD],
    kode: VURDER_REFUSJON_BERGRUNN,
    fastsatteAndeler: transformedAndeler,
  };
};

const mapStateToProps = (initialState, initialProps) => {
  const onSubmit = (values) => initialProps.submitCallback([transformValues(values, initialProps.beregningsgrunnlag)]);
  return (state, ownProps) => {
    const initialValues = buildInitialValues(ownProps.beregningsgrunnlag, ownProps.aksjonspunkter);
    return ({
      initialValues,
      onSubmit,
    });
  };
};

export default connect(mapStateToProps)(behandlingForm({
  form: FORM_NAME,
  enableReinitialize: true,
})(VurderEndringRefusjonFormImpl));
