import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktBoks, AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';
import type { AvklarVergeAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { RegistrereVergeForm, type VergeFormValues } from './RegistrereVergeForm';

type FormValues = VergeFormValues & FaktaBegrunnelseFormValues;

const buildInitialValues = (verge: Verge | undefined, aksjonspunkter: Aksjonspunkt[]): FormValues | undefined =>
  verge
    ? {
        ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter),
        ...RegistrereVergeForm.buildInitialValues(verge),
      }
    : undefined;

const transformValues = (values: FormValues): AvklarVergeAp => ({
  kode: AksjonspunktKode.AVKLAR_VERGE,
  ...RegistrereVergeForm.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

interface Props {
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  verge: Verge | undefined;
}

export const RegistrereVergeInfoPanel = ({ verge, alleKodeverk }: Props) => {
  const { aksjonspunkterForPanel, submitCallback, isSubmittable, harÅpentAksjonspunkt, isReadOnly } =
    usePanelDataContext<AvklarVergeAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(verge, aksjonspunkterForPanel),
    shouldUnregister: true,
  });

  const valgtVergeType = useWatch({ control: formMethods.control, name: 'vergeType' });
  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });

  const vergetyper = alleKodeverk['VergeType'].sort((k1, k2) => k1.navn.localeCompare(k2.navn));

  return (
    <VStack gap="space-20">
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="RegistrereVergeInfoPanel.AksjonspunktTekst" />
        </AksjonspunktHelpTextHTML>
      )}
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <AksjonspunktBoks
          tittel={<FormattedMessage id="Verge.VergeFullmektig" />}
          aksjonspunkt={aksjonspunkterForPanel}
        >
          <VStack gap="space-16" maxWidth="800px">
            <RegistrereVergeForm
              readOnly={isReadOnly || aksjonspunkterForPanel.length === 0}
              vergetyper={vergetyper}
              valgtVergeType={valgtVergeType}
            />
            {aksjonspunkterForPanel.length !== 0 && (
              <>
                <FaktaBegrunnelseTextField
                  control={formMethods.control}
                  isSubmittable={isSubmittable}
                  isReadOnly={isReadOnly}
                  hasBegrunnelse={!!begrunnelse}
                />
                <FaktaSubmitButton
                  isSubmittable={isSubmittable && !!valgtVergeType}
                  isReadOnly={isReadOnly}
                  isSubmitting={formMethods.formState.isSubmitting}
                  isDirty={formMethods.formState.isDirty}
                />
              </>
            )}
          </VStack>
        </AksjonspunktBoks>
      </RhfForm>
    </VStack>
  );
};
