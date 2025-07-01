import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import {
  type FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  PersonopplysningerForFamilie,
} from '@navikt/fp-fakta-felles';
import type { Aksjonspunkt, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import type { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { type FormValues as OmsorgFormValues, OmsorgFaktaFields } from './OmsorgFaktaFields';

type FormValues = OmsorgFormValues & FaktaBegrunnelseFormValues;

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

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? createInitialValues(ytelsefordeling, aksjonspunkterForPanel),
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
          setDataOnUnmount={setMellomlagretFormData}
        >
          <VStack gap="6">
            {harAksjonspunkt && (
              <OmsorgFaktaFields readOnly={isReadOnly} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />
            )}

            <FaktaBegrunnelseTextField
              name="begrunnelse"
              control={formMethods.control}
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={true}
              hasVurderingText
            />
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </VStack>
        </Form>
      )}
    </VStack>
  );
};
