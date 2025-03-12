import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { CheckboxField, Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { ManuellKontrollBesteberegningAP } from '@navikt/fp-types-avklar-aksjonspunkter';
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

interface Props {
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
export const KontrollerBesteberegningPanel = ({ aksjonspunkt, readOnly, submittable, submitCallback }: Props) => {
  const [erKnappEnabled, setKnappEnabled] = useState(false);

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  return (
    <VStack gap="4">
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
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <VStack gap="4">
          <CheckboxField
            name="besteberegningErKorrektValg"
            label={<FormattedMessage id="BesteberegningProsessPanel.Aksjonspunkt.Radiotekst" />}
            readOnly={readOnly}
            onChange={() => setKnappEnabled(!erKnappEnabled)}
          />
          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={!!begrunnelse}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={submittable && erKnappEnabled}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            isReadOnly={readOnly}
          />
        </VStack>
      </Form>
    </VStack>
  );
};
