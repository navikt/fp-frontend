import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { required } from '@fpsak-frontend/utils';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import {
  FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
} from '@fpsak-frontend/fakta-felles';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import aksjonspunktStatus, { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import KontrollerBesteberegningAP
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/KontrollerBesteberegningAP';

type OwnProps = {
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: KontrollerBesteberegningAP[]) => Promise<void>;
  venteårsak: string;
  readOnly: boolean;
  submittable: boolean;
}

type BesteBeregningFormValues = {
  besteberegningErKorrektValg: boolean;
}

type FormValues = BesteBeregningFormValues & FaktaBegrunnelseFormValues;

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => void;
}

/**
 * KontrollerBesteberegningPanel
 *
 * Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.
 */
const KontrollerBesteberegningPanel: FunctionComponent<OwnProps & InjectedFormProps & MappedOwnProps> = ({
  aksjonspunkt,
  readOnly,
  submittable,
  initialValues,
  ...formProps
}) => {
  if (!aksjonspunkt) {
    return null;
  }
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isAksjonspunktOpen(aksjonspunkt.status.kode)}>
        {[<FormattedMessage key="BesteberegningAksjonspunktTekst" id="BesteberegningProsessPanel.Aksjonspunkt.HelpText" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
      <form onSubmit={formProps.handleSubmit}>
        <RadioGroupField name="besteberegningErKorrektValg" validate={[required]} readOnly={readOnly}>
          <RadioOption label={{ id: 'BesteberegningProsessPanel.Aksjonspunkt.ErKorrekt' }} value />
          <RadioOption label={{ id: 'BesteberegningProsessPanel.Aksjonspunkt.ErFeil' }} value={false} />
        </RadioGroupField>
        <VerticalSpacer twentyPx />
        <FaktaBegrunnelseTextField
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!initialValues.begrunnelse}
          hasVurderingText
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButton
          formName={formProps.form}
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasOpenAksjonspunkter={isAksjonspunktOpen(aksjonspunkt.status.kode)}
        />
      </form>
    </>
  );
};

const buildInitialValues = createSelector([
  (ownProps: OwnProps) => ownProps.venteårsak,
  (ownProps: OwnProps) => ownProps.aksjonspunkt], (
  venteårsak, aksjonspunkt,
): FormValues => {
  if (!aksjonspunkt) {
    return null;
  }
  const apErLøst = aksjonspunkt.status.kode === aksjonspunktStatus.UTFORT;
  return {
    ...FaktaBegrunnelseTextField.buildInitialValues(aksjonspunkt),
    besteberegningErKorrektValg: apErLøst ? venteårsak !== venteArsakType.VENT_PÅ_KORRIGERT_BESTEBEREGNING : null,
  };
});

const transformValues = (values: FormValues): KontrollerBesteberegningAP => ({
  kode: aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
  begrunnelse: values.begrunnelse,
  besteberegningErKorrekt: values.besteberegningErKorrektValg,
});

const mapStateToPropsFactory = (initialState: any, initialProps: OwnProps) => {
  const onSubmit = (values) => initialProps.submitCallback([transformValues(values)]);
  return (state: any, ownProps: OwnProps): MappedOwnProps => {
    const initialValues = buildInitialValues(ownProps);
    return ({
      initialValues,
      onSubmit,
    });
  };
};

export default connect(mapStateToPropsFactory)(reduxForm({
  form: 'KontrollerAutomatiskBesteberegningForm',
  destroyOnUnmount: false,
})(KontrollerBesteberegningPanel));
