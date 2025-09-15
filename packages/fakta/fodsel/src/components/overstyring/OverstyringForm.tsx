import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, FødselGjeldende } from '@navikt/fp-types';
import type { OverstyringFaktaFødselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { ErBarnFødt, type ErBarnFødtFormValues } from '../form/ErBarnFødt';
import { Termindato, type TermindatoFormValues } from '../form/Termindato';

interface Props {
  gjeldende: FødselGjeldende;
  isReadOnly: boolean;
  avbrytOverstyring: () => void;
}

type FormValues = ErBarnFødtFormValues & TermindatoFormValues & FaktaBegrunnelseFormValues;

// TODO(siri): legg til mellomlagring når den støtter lagring av flere forms i samme panel
export const OverstyringForm = ({ gjeldende, isReadOnly, avbrytOverstyring }: Props) => {
  const intl = useIntl();
  const { aksjonspunkterForPanel, submitCallback, isSubmittable } = usePanelDataContext<OverstyringFaktaFødselAp>();

  const overstyringsAP = aksjonspunkterForPanel.find(
    a => a.definisjon === AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
  );
  const formMethods = useForm<FormValues>({
    defaultValues: initialValues(gjeldende, overstyringsAP),
  });
  const finnesBarnIFReg = gjeldende.barn.some(b => b.kilde === 'FOLKEREGISTER');
  return (
    <RhfForm formMethods={formMethods} onSubmit={values => submitCallback(transformValues(values))}>
      <VStack gap="6">
        <Termindato isReadOnly={isReadOnly} />

        <ErBarnFødt
          isReadOnly={isReadOnly}
          finnesBarnIFReg={finnesBarnIFReg}
          antallBarnISøknad={gjeldende.antallBarn.antall}
        />

        <FaktaBegrunnelseTextField
          control={formMethods.control}
          isSubmittable={isSubmittable}
          isReadOnly={isReadOnly}
          hasBegrunnelse={true}
          size="medium"
        />

        {!isReadOnly && (
          <HStack gap="2">
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              buttonText={intl.formatMessage({ id: 'OverstyringForm.Bekreft' })}
            />
            <Button variant="secondary" size="small" type="button" onClick={avbrytOverstyring}>
              <FormattedMessage id="OverstyringForm.Avbryt" />
            </Button>
          </HStack>
        )}
      </VStack>
    </RhfForm>
  );
};

const initialValues = (gjeldende: FødselGjeldende, overstyringsAP?: Aksjonspunkt) => ({
  ...Termindato.initialValues(gjeldende),
  ...ErBarnFødt.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(overstyringsAP),
});

const transformValues = (values: FormValues): OverstyringFaktaFødselAp => ({
  kode: AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
  ...Termindato.transformValues(values),
  ...ErBarnFødt.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
