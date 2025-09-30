import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { BesteberegningAP, ManuellKontrollBesteberegningAP } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  begrunnelse: string | undefined;
  besteberegningErKorrektValg?: boolean;
};

interface Props {
  aksjonspunkt: Aksjonspunkt;
}

/**
 * KontrollerBesteberegningPanel
 *
 * Formkomponent. Lar saksbehandler vurdere om den automatiske besteberegningen er korrekt utført.
 */
export const KontrollerBesteberegningPanel = ({ aksjonspunkt }: Props) => {
  const [erKnappEnabled, setErKnappEnabled] = useState(false);

  // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
  const { submitCallback, isSubmittable, isReadOnly } = usePanelDataContext<BesteberegningAP>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  return (
    <VStack gap="space-16">
      {aksjonspunkt.status === 'OPPR' && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="BesteberegningProsessPanel.Aksjonspunkt.HelpTextKontroll" />
        </AksjonspunktHelpTextHTML>
      )}
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="space-16">
          <RhfCheckbox
            name="besteberegningErKorrektValg"
            control={formMethods.control}
            label={<FormattedMessage id="BesteberegningProsessPanel.Aksjonspunkt.Radiotekst" />}
            readOnly={isReadOnly}
            onChange={() => setErKnappEnabled(!erKnappEnabled)}
          />
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={isSubmittable && erKnappEnabled}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            isReadOnly={isReadOnly}
          />
        </VStack>
      </RhfForm>
    </VStack>
  );
};

const buildInitialValues = (aksjonspunkt: Aksjonspunkt): FormValues => {
  const apErLøst = aksjonspunkt.status === 'UTFO';
  return {
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    besteberegningErKorrektValg: apErLøst ? true : undefined,
  };
};

const transformValues = (values: FormValues): ManuellKontrollBesteberegningAP => ({
  kode: AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING,
  begrunnelse: values.begrunnelse,
  besteberegningErKorrekt: !!values.besteberegningErKorrektValg,
});
