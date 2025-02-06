import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton, PersonopplysningerForFamilie } from '@navikt/fp-fakta-felles';
import { Aksjonspunkt, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

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
  submittable: boolean;
}

export const OmsorgInfoPanel = ({ personoversikt, ytelsefordeling, submittable }: Props) => {
  const {
    alleKodeverk,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpneAksjonspunkter,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<BekreftOmsorgVurderingAp>();

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || createInitialValues(ytelsefordeling, aksjonspunkterForPanel),
  });

  const harAksjonspunkt = aksjonspunkterForPanel.length > 0;

  return (
    <VStack gap="8">
      {!isReadOnly && harÅpneAksjonspunkter && (
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
              <OmsorgFaktaFields readOnly={isReadOnly} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />
            )}

            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={true}
              hasVurderingText
            />
            <div>
              <FaktaSubmitButton
                isSubmittable={submittable}
                isReadOnly={isReadOnly}
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
