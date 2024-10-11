import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { VStack } from '@navikt/ds-react';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import {
  PersonopplysningerForFamilie,
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
} from '@navikt/fp-fakta-felles';
import { Aksjonspunkt, Personoversikt, StandardFaktaPanelProps, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { OmsorgFaktaFields, FormValues as OmsorgFormValues } from './OmsorgFaktaFields';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = AksjonspunktCode;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts = [];
  const harOmsorgAp = aksjonspunkter.filter(ap => ap.definisjon === MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG);
  if (harOmsorgAp.length > 0) {
    helpTexts.push(<FormattedMessage key="VurderOmsorg" id="OmsorgInfoPanel.VurderOmsorg" />);
  }
  return helpTexts;
};

const buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const omsorgAp = aksjonspunkter.filter(
    ap => ap.definisjon === AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
  );
  return {
    ...OmsorgFaktaFields.buildInitialValues(ytelsefordeling, omsorgAp),
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(omsorgAp),
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

const OmsorgInfoPanel = ({
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
        <AksjonspunktHelpTextHTML>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextHTML>
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

export default OmsorgInfoPanel;
