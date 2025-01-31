import React, { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { CheckboxField, Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Aksjonspunkt } from '@navikt/fp-types';
import { ManuellKontrollBesteberegningAP } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

export const buildInitialValues = (aksjonspunkt: Aksjonspunkt): FormValues => {
  const apErLøst = aksjonspunkt.status === AksjonspunktStatus.UTFORT;
  return {
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    besteberegningErKorrektValg: apErLøst ? true : undefined,
  };
};

export const transformValues = (values: FormValues): ManuellKontrollBesteberegningAP => ({
  kode: AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
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
}) => {
  const [erKnappEnabled, toggleKnapp] = useState(false);

  const { formData, setFormData } = useFormData<FormValues>();

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
        <FaktaBegrunnelseTextField
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!begrunnelse}
          hasVurderingText
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButton
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
