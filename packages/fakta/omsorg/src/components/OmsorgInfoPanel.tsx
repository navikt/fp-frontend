import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import {
  type FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  PersonopplysningerForFamilie,
} from '@navikt/fp-fakta-felles';
import type { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { type FormValues as OmsorgFormValues, OmsorgFaktaFields } from './OmsorgFaktaFields';

type FormValues = OmsorgFormValues & FaktaBegrunnelseFormValues;

interface Props {
  personoversikt: Personoversikt | undefined;
  ytelsefordeling: Ytelsefordeling;
}

export const OmsorgInfoPanel = ({ personoversikt, ytelsefordeling }: Props) => {
  const {
    alleKodeverk,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpentAksjonspunkt,
    isReadOnly,
    isSubmittable,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(ytelsefordeling, aksjonspunkterForPanel),
  });

  const harAksjonspunkt = aksjonspunkterForPanel.length > 0;

  return (
    <VStack gap="space-32">
      {!isReadOnly && harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="OmsorgInfoPanel.VurderOmsorg" />
        </AksjonspunktHelpTextHTML>
      )}
      {personoversikt && <PersonopplysningerForFamilie alleKodeverk={alleKodeverk} personoversikt={personoversikt} />}
      {harAksjonspunkt && (
        <RhfForm
          formMethods={formMethods}
          onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
          setDataOnUnmount={setMellomlagretFormData}
        >
          <VStack gap="space-24">
            <OmsorgFaktaFields readOnly={isReadOnly} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />

            <FaktaBegrunnelseTextField
              control={formMethods.control}
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={true}
              hasVurderingText
            />
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </VStack>
        </RhfForm>
      )}
    </VStack>
  );
};

const buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  return {
    ...OmsorgFaktaFields.initialValues(ytelsefordeling, aksjonspunkter),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG> => ({
  ...OmsorgFaktaFields.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
