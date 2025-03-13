import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, KodeverkType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';
import type { AvklarVergeAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { RegistrereVergeForm, type VergeFormValues } from './RegistrereVergeForm';

type FormValues = VergeFormValues & {
  begrunnelse?: string;
};

const buildInitialValues = (verge: Verge | undefined, aksjonspunkter: Aksjonspunkt[]): FormValues => ({
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter),
  ...RegistrereVergeForm.buildInitialValues(verge),
});

const transformValues = (values: FormValues): AvklarVergeAp => ({
  kode: AksjonspunktKode.AVKLAR_VERGE,
  ...RegistrereVergeForm.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

interface Props {
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  verge: Verge | undefined;
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

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || buildInitialValues(verge, aksjonspunkterForPanel),
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
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="6">
          <FaktaGruppe merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_VERGE]}>
            <RegistrereVergeForm
              readOnly={isReadOnly || aksjonspunkterForPanel.length === 0}
              vergetyper={vergetyper}
              valgtVergeType={valgtVergeType}
            />
          </FaktaGruppe>
          {aksjonspunkterForPanel.length !== 0 && (
            <>
              <FaktaBegrunnelseTextField
                isSubmittable={submittable}
                isReadOnly={isReadOnly}
                hasBegrunnelse={!!begrunnelse}
              />
              <FaktaSubmitButton
                isSubmittable={submittable && !!valgtVergeType}
                isReadOnly={isReadOnly}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
            </>
          )}
        </VStack>
      </Form>
    </>
  );
};
