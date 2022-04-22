import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import {
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
} from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import aksjonspunktStatus, { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Form, CheckboxField } from '@navikt/ft-form-hooks';
import { ManuellKontrollBesteberegningAP }
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/KontrollerBesteberegningAP';

export const buildInitialValues = (venteårsak: string, aksjonspunkt: Aksjonspunkt): FormValues => {
  if (!aksjonspunkt) {
    return null;
  }
  const apErLøst = aksjonspunkt.status === aksjonspunktStatus.UTFORT;
  return {
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
    besteberegningErKorrektValg: apErLøst ? venteårsak !== venteArsakType.VENT_PÅ_KORRIGERT_BESTEBEREGNING : null,
  };
};

export const transformValues = (values: FormValues): ManuellKontrollBesteberegningAP => ({
  kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_BESTEBEREGNING,
  begrunnelse: values.begrunnelse,
  besteberegningErKorrekt: values.besteberegningErKorrektValg,
});

export type FormValues = {
  begrunnelse?: string;
  besteberegningErKorrektValg?: boolean;
}

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: ManuellKontrollBesteberegningAP) => Promise<void>;
  venteårsak: string;
  readOnly: boolean;
  submittable: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void,
}

/**
 * KontrollerBesteberegningPanel
 *
 * Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.
 */
const KontrollerBesteberegningPanel: FunctionComponent<OwnProps> = ({
  aksjonspunkt,
  venteårsak,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  if (!aksjonspunkt) {
    return null;
  }
  const [erKnappEnabled, toggleKnapp] = useState(false);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(venteårsak, aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isAksjonspunktOpen(aksjonspunkt.status)}>
        {[<FormattedMessage key="BesteberegningAksjonspunktTekst" id="BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <CheckboxField
          name="besteberegningErKorrektValg"
          label={<FormattedMessage id="BesteberegningProsessPanel.Aksjonspunkt.Radiotekst" />}
          readOnly={readOnly}
          onChange={() => toggleKnapp(!erKnappEnabled)}
        />
        <VerticalSpacer twentyPx />
        <FaktaBegrunnelseTextFieldNew
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!begrunnelse}
          hasVurderingText
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={submittable && erKnappEnabled}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          isReadOnly={readOnly}
        />
      </Form>
    </>
  );
};

export default KontrollerBesteberegningPanel;
