import React, { FunctionComponent } from 'react';
import { Form } from '@fpsak-frontend/form-hooks';
import {
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
  FaktaBegrunnelseTextField,
} from '@fpsak-frontend/fakta-felles';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { ArbeidsgiverOpplysningerPerId, AlleKodeverk } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';

import FordelBeregningsgrunnlagAP
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/FordelBeregningsgrunnlagAP';
import { useForm } from 'react-hook-form';
import FordelingHelpText from './FordelingHelpText';
import FastsettFordeltBeregningsgrunnlag from './FastsettFordeltBeregningsgrunnlag';
import { FordelBeregningsgrunnlagMedAksjonspunktValues } from '../../types/FordelBeregningsgrunnlagPanelValues';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
} = aksjonspunktCodes;

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => aksjonspunkter
  .find((ap) => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);

export const BEGRUNNELSE_FORDELING_NAME = 'begrunnelseFordeling';

export const transformValuesFordelBeregning = (beregningsgrunnlag: Beregningsgrunnlag,
  aksjonspunkter: Aksjonspunkt[], values: FordelBeregningsgrunnlagMedAksjonspunktValues): FordelBeregningsgrunnlagAP => {
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
    // eslint-disable-next-line react/destructuring-assignment
    const begrunnelse = values[BEGRUNNELSE_FORDELING_NAME];
    return {
      kode: FORDEL_BEREGNINGSGRUNNLAG,
      begrunnelse: begrunnelse as string,
      ...FastsettFordeltBeregningsgrunnlag.transformValues(values, fordelBGPerioder, bgPerioder),
    };
  }
  return null;
};

const buildInitialValuesFordelBeregning = (beregningsgrunnlag: Beregningsgrunnlag,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
  aksjonspunkter: Aksjonspunkt[]): null | FordelBeregningsgrunnlagMedAksjonspunktValues => {
  const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  if (!hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
    return null;
  }
  return ({
    ...FaktaBegrunnelseTextField.buildInitialValues(findAksjonspunktMedBegrunnelse(aksjonspunkter), BEGRUNNELSE_FORDELING_NAME),
    ...FastsettFordeltBeregningsgrunnlag.buildInitialValues(fordelBGPerioder,
      beregningsgrunnlag,
      getKodeverknavnFn(alleKodeverk),
      arbeidsgiverOpplysningerPerId),
  });
};

interface PureOwnProps {
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  aksjonspunkter: Aksjonspunkt[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagMedAksjonspunktValues;
  setFormData: (data: FordelBeregningsgrunnlagMedAksjonspunktValues) => void,
}

/**
 * FordelingForm
 *
 * Container komponent. Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
const FordelingForm: FunctionComponent<PureOwnProps> = ({
  readOnly,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  aksjonspunkter,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const s = buildInitialValuesFordelBeregning(beregningsgrunnlag, arbeidsgiverOpplysningerPerId, alleKodeverk, aksjonspunkter);
  const formMethods = useForm<FordelBeregningsgrunnlagMedAksjonspunktValues>({
    defaultValues: formData || buildInitialValuesFordelBeregning(beregningsgrunnlag, arbeidsgiverOpplysningerPerId, alleKodeverk, aksjonspunkter),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  const relevantAp = aksjonspunkter.find((ap) => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  const isAksjonspunktClosed = !isAksjonspunktOpen(relevantAp.status);
  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values) => submitCallback(transformValuesFordelBeregning(beregningsgrunnlag, aksjonspunkter, values))}
      setDataOnUnmount={setFormData}
    >
      <FordelingHelpText
        isAksjonspunktClosed={isAksjonspunktClosed}
        alleKodeverk={alleKodeverk}
        aksjonspunkter={aksjonspunkter}
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <VerticalSpacer twentyPx />
      <FastsettFordeltBeregningsgrunnlag
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        beregningsgrunnlag={beregningsgrunnlag}
        alleKodeverk={alleKodeverk}
        behandlingType={behandlingType}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <VerticalSpacer twentyPx />
      <FaktaBegrunnelseTextFieldNew
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasBegrunnelse={!!begrunnelse}
      />
      <VerticalSpacer twentyPx />
      <FaktaSubmitButtonNew
        isSubmittable={submittable}
        isReadOnly={readOnly}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </Form>
  );
};

// export const getValidationFordelBeregning = createSelector(
//   [(ownProps: PureOwnProps) => ownProps.beregningsgrunnlag,
//     (ownProps: PureOwnProps) => ownProps.arbeidsgiverOpplysningerPerId,
//     (ownProps: PureOwnProps) => ownProps.alleKodeverk,
//     (ownProps: PureOwnProps) => ownProps.intl,
//     (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
//   (beregningsgrunnlag: Beregningsgrunnlag,
//     arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
//     alleKodeverk: AlleKodeverk,
//     intl: IntlShape,
//     aksjonspunkter: Aksjonspunkt[]) => (values: FordelBeregningsgrunnlagMedAksjonspunktValues) => {
//     const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
//     if (hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, aksjonspunkter)) {
//       return {
//         ...FastsettFordeltBeregningsgrunnlagImpl.validate(intl, values, fordelBGPerioder,
//           beregningsgrunnlag, getKodeverknavnFn(alleKodeverk), arbeidsgiverOpplysningerPerId),
//       };
//     }
//     return null;
//   },
// );

export default FordelingForm;
