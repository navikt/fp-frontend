import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';
import { AvklarVergeAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import RegistrereVergeFaktaForm, { FormValues as RegistrereFormValues } from './RegistrereVergeFaktaForm';

type FormValues = RegistrereFormValues & {
  begrunnelse?: string;
};

const buildInitialValues = (verge: Verge, aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter),
  ...RegistrereVergeFaktaForm.buildInitialValues(verge || {}),
});

const transformValues = (values: FormValues): AvklarVergeAp => ({
  ...RegistrereVergeFaktaForm.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

interface Props {
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  verge: Verge;
  submittable: boolean;
}

/**
 * RegistrereVergeInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.
 */
export const RegistrereVergeInfoPanel = ({ submittable, verge, alleKodeverk }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, submitCallback, alleMerknaderFraBeslutter, harÅpneAksjonspunkter, isReadOnly } =
    usePanelDataContext<AvklarVergeAp>();

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(verge, aksjonspunkterForPanel),
    shouldUnregister: true,
  });

  const valgtVergeType = formMethods.watch('vergeType');
  const begrunnelse = formMethods.watch('begrunnelse');

  const vergetyper = useMemo(
    () => alleKodeverk[KodeverkType.VERGE_TYPE].sort((k1, k2) => k1.navn.localeCompare(k2.navn)),
    [alleKodeverk[KodeverkType.VERGE_TYPE]],
  );

  return (
    <>
      {harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          {intl.formatMessage({ id: 'RegistrereVergeInfoPanel.CheckInformation' })}
        </AksjonspunktHelpTextHTML>
      )}
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
        setDataOnUnmount={setFormData}
      >
        <RegistrereVergeFaktaForm
          readOnly={isReadOnly || aksjonspunkterForPanel.length === 0}
          intl={intl}
          vergetyper={vergetyper}
          valgtVergeType={valgtVergeType}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        {aksjonspunkterForPanel.length !== 0 && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={!!begrunnelse}
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButton
              isSubmittable={submittable && !!valgtVergeType}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </>
        )}
      </Form>
    </>
  );
};
