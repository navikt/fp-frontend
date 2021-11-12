import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
} from '@fpsak-frontend/fakta-felles';
import { RefusjonTilVurderingAndel, Beregningsgrunnlag, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { Form } from '@fpsak-frontend/form-hooks';
import VurderRefusjonBeregningsgrunnlagAP
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/VurderRefusjonBeregningsgrunnlagAP';
import { useForm } from 'react-hook-form';
import TidligereUtbetalinger from './TidligereUtbetalinger';
import VurderEndringRefusjonRad from './VurderEndringRefusjonRad';
import VurderRefusjonValues from '../../types/VurderRefusjonTsType';
import FordelBeregningsgrunnlagMedAksjonspunktValues from '../../types/FordelingTsType';

const BEGRUNNELSE_FIELD = 'VURDER_REFUSJON_BERGRUNN_BEGRUNNELSE';
const FORM_NAME = 'VURDER_REFUSJON_BERGRUNN_FORM';

const {
  VURDER_REFUSJON_BERGRUNN,
} = aksjonspunktCodes;

const finnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]) : Aksjonspunkt | undefined => (aksjonspunkter
  ? aksjonspunkter.find((ap) => ap.definisjon.kode === VURDER_REFUSJON_BERGRUNN) : undefined);

const lagRadNøkkel = (andel: RefusjonTilVurderingAndel): string => {
  if (andel.arbeidsgiver.arbeidsgiverAktørId) {
    return `${andel.arbeidsgiver.arbeidsgiverAktørId}${andel.internArbeidsforholdRef})`;
  }
  return `${andel.arbeidsgiver.arbeidsgiverOrgnr}${andel.internArbeidsforholdRef})`;
};

export const buildInitialValues = (bg: Beregningsgrunnlag, aksjonspunkter: Aksjonspunkt[]): VurderRefusjonValues => {
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

export const transformValues = (values: VurderRefusjonValues, bg: Beregningsgrunnlag): VurderRefusjonBeregningsgrunnlagAP => {
  const { andeler } = bg.refusjonTilVurdering;
  const transformedAndeler = andeler.map((andel) => VurderEndringRefusjonRad.transformValues(values, andel, bg.skjaeringstidspunktBeregning));
  return {
    begrunnelse: values[BEGRUNNELSE_FIELD],
    kode: VURDER_REFUSJON_BERGRUNN,
    fastsatteAndeler: transformedAndeler,
  };
};

type OwnProps = {
    submitCallback: (aksjonspunktData: VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
    readOnly: boolean;
    submittable: boolean;
    submitEnabled: boolean;
    beregningsgrunnlag?: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    formData?: VurderRefusjonValues;
    setFormData: (data: VurderRefusjonValues & FordelBeregningsgrunnlagMedAksjonspunktValues) => void;
};

export const VurderEndringRefusjonFormImpl: FunctionComponent<OwnProps> = ({
  submittable,
  readOnly,
  beregningsgrunnlag,
  aksjonspunkter,
  arbeidsgiverOpplysningerPerId,
  formData,
  submitCallback,
  setFormData,
}) => {
  const { andeler } = beregningsgrunnlag.refusjonTilVurdering;
  const ap = finnAksjonspunkt(aksjonspunkter);
  const erAksjonspunktÅpent = ap ? isAksjonspunktOpen(ap.status.kode) : false;
  const formMethods = useForm<VurderRefusjonValues>({
    defaultValues: formData || buildInitialValues(beregningsgrunnlag, aksjonspunkter),
  });
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={erAksjonspunktÅpent}>
        {[<FormattedMessage id="BeregningInfoPanel.RefusjonBG.Aksjonspunkt" key="aksjonspunktText" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values, beregningsgrunnlag))}
        setDataOnUnmount={setFormData}
      >
        <Undertittel><FormattedMessage id="BeregningInfoPanel.RefusjonBG.Tittel" /></Undertittel>
        <VerticalSpacer sixteenPx />
        <TidligereUtbetalinger beregningsgrunnlag={beregningsgrunnlag} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
        { andeler.map((andel) => (
          <VurderEndringRefusjonRad
            refusjonAndel={andel}
            readOnly={readOnly}
            erAksjonspunktÅpent={erAksjonspunktÅpent}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            key={lagRadNøkkel(andel)}
            skjæringstidspunkt={beregningsgrunnlag.skjaeringstidspunktBeregning}
            formName={FORM_NAME}
          />
        ))}
        <VerticalSpacer twentyPx />
        <FaktaBegrunnelseTextFieldNew
          name={BEGRUNNELSE_FIELD}
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!(ap && ap.begrunnelse)}
        />

        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={submittable}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          isReadOnly={readOnly}
        />
        <VerticalSpacer sixteenPx />
      </Form>
    </>
  );
};

export default VurderEndringRefusjonFormImpl;
