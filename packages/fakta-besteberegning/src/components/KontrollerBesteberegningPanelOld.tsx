import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { required } from '@fpsak-frontend/utils';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import {
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
} from '@fpsak-frontend/fakta-felles';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import aksjonspunktStatus, { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { RadioGroupField, RadioOption, Form } from '@fpsak-frontend/form-hooks';
import { KontrollerBesteberegningAP } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/KontrollerBesteberegningAP';

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

export const transformValues = (values: FormValues): KontrollerBesteberegningAP => ({
  kode: aksjonspunktCodes.KONTROLLER_AUTOMATISK_BESTEBEREGNING,
  begrunnelse: values.begrunnelse,
  besteberegningErKorrekt: values.besteberegningErKorrektValg,
});

export type FormValues = {
  begrunnelse?: string;
  besteberegningErKorrektValg?: boolean;
}

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: KontrollerBesteberegningAP) => Promise<void>;
  venteårsak: string;
  readOnly: boolean;
  submittable: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void,
}

/**
 * KontrollerBesteberegningPanel
 *
 * Kan erstattes av ren readOnly komponent når alle saker er over på nytt AP.
 */
const KontrollerBesteberegningPanelOld: FunctionComponent<OwnProps> = ({
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
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(venteårsak, aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isAksjonspunktOpen(aksjonspunkt.status)}>
        {[<FormattedMessage key="BesteberegningAksjonspunktTekst" id="BesteberegningProsessPanel.Aksjonspunkt.HelpText" />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <RadioGroupField
          name="besteberegningErKorrektValg"
          direction="horizontal"
          validate={[required]}
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
        >
          <RadioOption
            label={intl.formatMessage({ id: 'BesteberegningProsessPanel.Aksjonspunkt.ErKorrekt' })}
            value="true"
          />
          <RadioOption
            label={intl.formatMessage({ id: 'BesteberegningProsessPanel.Aksjonspunkt.ErFeil' })}
            value="false"
          />
        </RadioGroupField>
        <VerticalSpacer twentyPx />
        <FaktaBegrunnelseTextFieldNew
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!begrunnelse}
          hasVurderingText
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={submittable}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          isReadOnly={readOnly}
        />
      </Form>
    </>
  );
};

export default KontrollerBesteberegningPanelOld;
