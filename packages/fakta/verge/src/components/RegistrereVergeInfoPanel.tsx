import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';
import type { AvklarVergeAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
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

/**
 * TODO: fjern aksjonspunktet AVKLAR_VERGE når det ikke lenger er i bruk
 */
export const RegistrereVergeInfoPanel = ({ verge, alleKodeverk }: Props) => {
  const intl = useIntl();

  const {
    aksjonspunkterForPanel,
    submitCallback,
    isSubmittable,
    alleMerknaderFraBeslutter,
    harÅpentAksjonspunkt,
    isReadOnly,
  } = usePanelDataContext<AvklarVergeAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(verge, aksjonspunkterForPanel),
    shouldUnregister: true,
  });

  const valgtVergeType = formMethods.watch('vergeType');
  const begrunnelse = formMethods.watch('begrunnelse');

  const vergetyper = alleKodeverk['VergeType'].sort((k1, k2) => k1.navn.localeCompare(k2.navn));

  return (
    <VStack gap="space-20">
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          {intl.formatMessage({ id: 'RegistrereVergeInfoPanel.AksjonspunktTekst' })}
        </AksjonspunktHelpTextHTML>
      )}
      <RhfForm
        formMethods={formMethods}
        onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="space-24">
          <FaktaKort
            label={intl.formatMessage({ id: 'Verge.VergeFullmektig' })}
            merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_VERGE]}
          >
            <RegistrereVergeForm
              readOnly={isReadOnly || aksjonspunkterForPanel.length === 0}
              vergetyper={vergetyper}
              valgtVergeType={valgtVergeType}
            />
          </FaktaKort>
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
      </RhfForm>
    </VStack>
  );
};
