import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';
import { AvklarVergeAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

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
  submitCallback: (aksjonspunktData: AvklarVergeAp) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  verge: Verge;
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * RegistrereVergeInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.
 */
const RegistrereVergeInfoPanel = ({
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  verge,
  alleKodeverk,
  submitCallback,
}: Props) => {
  const intl = useIntl();

  const { formData, setFormData } = useFormData<FormValues>();

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

  return (
    <>
      {hasOpenAksjonspunkter && (
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
          readOnly={readOnly || aksjonspunkter.length === 0}
          intl={intl}
          vergetyper={vergetyper}
          valgtVergeType={valgtVergeType}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        {aksjonspunkter.length !== 0 && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={readOnly}
              hasBegrunnelse={!!begrunnelse}
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButton
              isSubmittable={submittable && !!valgtVergeType}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </>
        )}
      </Form>
    </>
  );
};

export default RegistrereVergeInfoPanel;
