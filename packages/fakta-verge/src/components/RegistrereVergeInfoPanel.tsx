import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { Aksjonspunkt, Verge, AlleKodeverk, AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { AksjonspunktCode, KodeverkType } from '@navikt/fp-kodeverk';
import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AvklarVergeAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import RegistrereVergeFaktaForm, { FormValues as RegistrereFormValues } from './RegistrereVergeFaktaForm';

type FormValues = RegistrereFormValues & {
  begrunnelse?: string;
};

const buildInitialValues = (verge: Verge, aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  begrunnelse: FaktaBegrunnelseTextFieldNew.buildInitialValues(
    aksjonspunkter.filter(ap => ap.definisjon === AksjonspunktCode.AVKLAR_VERGE)[0],
  ).begrunnelse,
  ...RegistrereVergeFaktaForm.buildInitialValues(verge || {}),
});

const transformValues = (values: FormValues): AvklarVergeAp => ({
  ...RegistrereVergeFaktaForm.transformValues(values),
  ...{ begrunnelse: values.begrunnelse },
});

interface PureOwnProps {
  submitCallback: (aksjonspunktData: AvklarVergeAp) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  verge: Verge;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData?: any;
  setFormData: (data: any) => void;
}

/**
 * RegistrereVergeInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.
 */
const RegistrereVergeInfoPanel: FunctionComponent<PureOwnProps> = ({
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  verge,
  alleKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(verge, aksjonspunkter),
    shouldUnregister: true,
  });

  const valgtVergeType = formMethods.watch('vergeType');
  const begrunnelse = formMethods.watch('begrunnelse');

  const vergetyper = useMemo(
    () => alleKodeverk[KodeverkType.VERGE_TYPE].sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [alleKodeverk[KodeverkType.VERGE_TYPE]],
  );

  if (aksjonspunkter.length === 0) {
    return null;
  }

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {[intl.formatMessage({ id: 'RegistrereVergeInfoPanel.CheckInformation' })]}
      </AksjonspunktHelpTextTemp>
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <RegistrereVergeFaktaForm
          readOnly={readOnly}
          intl={intl}
          vergetyper={vergetyper}
          valgtVergeType={valgtVergeType}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        <VerticalSpacer twentyPx />
        <FaktaBegrunnelseTextFieldNew
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!begrunnelse}
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={submittable && !!valgtVergeType}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </Form>
    </>
  );
};

export default RegistrereVergeInfoPanel;
