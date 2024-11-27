import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import {
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
  PersonopplysningerForFamilie,
} from '@navikt/fp-fakta-felles';
import { Aksjonspunkt, Personoversikt, StandardFaktaPanelProps, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { FormValues as OmsorgFormValues,OmsorgFaktaFields } from './OmsorgFaktaFields';

const buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  return {
    ...OmsorgFaktaFields.buildInitialValues(ytelsefordeling, aksjonspunkter),
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  ...OmsorgFaktaFields.transformOmsorgValues(values),
  begrunnelse: values.begrunnelse,
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
  formData,
  setFormData,
}: Props & StandardFaktaPanelProps) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(ytelsefordeling, aksjonspunkter),
  });

  return (
    <VStack gap="8">
      {!readOnly && harApneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="OmsorgInfoPanel.VurderOmsorg" />
        </AksjonspunktHelpTextHTML>
      )}
      <PersonopplysningerForFamilie alleKodeverk={alleKodeverk} personoversikt={personoversikt} />
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <VStack gap="6">
          <OmsorgFaktaFields
            readOnly={readOnly}
            aksjonspunkter={aksjonspunkter}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
          <FaktaBegrunnelseTextFieldNew
            isSubmittable={submittable}
            isReadOnly={readOnly}
            hasBegrunnelse={true}
            hasVurderingText
          />
          <div>
            <FaktaSubmitButtonNew
              isSubmittable={submittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </div>
        </VStack>
      </Form>
    </VStack>
  );
};
