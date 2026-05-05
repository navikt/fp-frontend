import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { ManuellKontrollAapKombinertAtflAP } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  begrunnelse: string | undefined;
  erBeregningenKorrekt?: boolean;
};

interface Props {
  aksjonspunkt: Aksjonspunkt;
}

// TODO: Avklar med teamet hvilken løsning som er foretrukket for checkbox-tilstand:
// Alternativ 1 (nåværende): La checkboxen oppføre seg naturlig (true/false). Knappen er disabled
//   når erBeregningenKorrekt !== true, som dekker både false og undefined. Backend kaster
//   exception dersom false skulle smyge seg gjennom.
// Alternativ 2: Bruk setValue til å sette erBeregningenKorrekt til undefined når man fjerner
//   avhukingen, slik at verdien aldri kan være false — kun true eller undefined.
export const KontrollerBeregningAapKombinertPanel = ({ aksjonspunkt }: Props) => {
  const { submitCallback, isSubmittable, isReadOnly } = usePanelDataContext<ManuellKontrollAapKombinertAtflAP>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkt),
  });
  const begrunnelse = formMethods.watch('begrunnelse');
  const erBeregningenKorrekt = formMethods.watch('erBeregningenKorrekt');

  return (
    <VStack gap="space-16">
      {aksjonspunkt.status === 'OPPR' && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="AapKombinertAtfl.Aksjonspunkt.HelpText" />
        </AksjonspunktHelpTextHTML>
      )}
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="space-16">
          <RhfCheckbox
            name="erBeregningenKorrekt"
            control={formMethods.control}
            label={<FormattedMessage id="AapKombinertAtfl.Aksjonspunkt.Bekreft" />}
            readOnly={isReadOnly}
          />
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={isSubmittable && erBeregningenKorrekt === true}
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
  const erAPLøst = aksjonspunkt.status === 'UTFO';
  return {
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    erBeregningenKorrekt: erAPLøst ? true : undefined,
  };
};

const transformValues = (values: FormValues): ManuellKontrollAapKombinertAtflAP => ({
  kode: AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL,
  begrunnelse: values.begrunnelse,
  erBeregningenKorrekt: !!values.erBeregningenKorrekt,
});
