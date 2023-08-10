import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt } from '@navikt/fp-types';
import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { AksjonspunktCode, aksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Form, CheckboxField } from '@navikt/ft-form-hooks';
import { ManuellKontrollBesteberegningAP } from '@navikt/fp-types-avklar-aksjonspunkter';

export const buildInitialValues = (aksjonspunkt: Aksjonspunkt): FormValues => {
  const apErLøst = aksjonspunkt.status === aksjonspunktStatus.UTFORT;
  return {
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
    besteberegningErKorrektValg: apErLøst ? true : undefined,
  };
};

export const transformValues = (values: FormValues): ManuellKontrollBesteberegningAP => ({
  kode: AksjonspunktCode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
  begrunnelse: values.begrunnelse,
  besteberegningErKorrekt: !!values.besteberegningErKorrektValg,
});

export type FormValues = {
  begrunnelse?: string;
  besteberegningErKorrektValg?: boolean;
};

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: ManuellKontrollBesteberegningAP) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * KontrollerBesteberegningPanel
 *
 * Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.
 */
const KontrollerBesteberegningPanel: FunctionComponent<OwnProps> = ({
  aksjonspunkt,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  const [erKnappEnabled, toggleKnapp] = useState(false);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  return (
    <>
      {aksjonspunkt.status === AksjonspunktStatus.OPPRETTET && (
        <AksjonspunktHelpTextHTML>
          {[
            <FormattedMessage
              key="BesteberegningAksjonspunktTekst"
              id="BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll"
            />,
          ]}
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer twentyPx />
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
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
