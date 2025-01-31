import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton, PersonopplysningerForFamilie } from '@navikt/fp-fakta-felles';
import { Aksjonspunkt, Personoversikt, StandardFaktaPanelProps, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

import { FormValues as OmsorgFormValues, OmsorgFaktaFields } from './OmsorgFaktaFields';

const createInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  return {
    ...OmsorgFaktaFields.initialValues(ytelsefordeling, aksjonspunkter),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  ...OmsorgFaktaFields.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

type FormValues = OmsorgFormValues & {
  begrunnelse?: string;
};

interface Props {
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  submitCallback: (data: BekreftOmsorgVurderingAp) => Promise<void>;
}

export const OmsorgInfoPanel = ({
  personoversikt,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  aksjonspunkter,
  alleKodeverk,
  ytelsefordeling,
  submitCallback,
  alleMerknaderFraBeslutter,
}: Props & StandardFaktaPanelProps) => {
  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || createInitialValues(ytelsefordeling, aksjonspunkter),
  });

  const harAksjonspunkt = aksjonspunkter.length > 0;

  return (
    <VStack gap="8">
      {!readOnly && harApneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="OmsorgInfoPanel.VurderOmsorg" />
        </AksjonspunktHelpTextHTML>
      )}
      <PersonopplysningerForFamilie alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      {harAksjonspunkt && (
        <Form
          formMethods={formMethods}
          onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
          setDataOnUnmount={setFormData}
        >
          <VStack gap="6">
            {harAksjonspunkt && (
              <OmsorgFaktaFields readOnly={readOnly} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />
            )}

            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={readOnly}
              hasBegrunnelse={true}
              hasVurderingText
            />
            <div>
              <FaktaSubmitButton
                isSubmittable={submittable}
                isReadOnly={readOnly}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
            </div>
          </VStack>
        </Form>
      )}
    </VStack>
  );
};
