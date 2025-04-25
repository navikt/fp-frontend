import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, HStack, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, FødselGjeldende } from '@navikt/fp-types';
import type { OverstyringFaktaFødselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { BarnFieldArray, type BarnFormValues } from '../form/BarnFieldArray';
import { Termindato, type TermindatoFormValues } from '../form/Termindato';

interface Props {
  gjeldende: FødselGjeldende;
  isReadOnly: boolean;
  submittable: boolean;
  overstyringsAP: Aksjonspunkt | undefined;
  avbrytOverstyring: () => void;
}

type FormValues = { erBarnetFødt: boolean } & TermindatoFormValues & BarnFormValues & FaktaBegrunnelseFormValues;

export const OverstyringForm = ({ gjeldende, isReadOnly, submittable, avbrytOverstyring, overstyringsAP }: Props) => {
  const { submitCallback } = usePanelDataContext();

  const formMethods = useForm<FormValues>({
    defaultValues: initialValues(gjeldende, overstyringsAP),
  });
  const finnesBarnIFReg = gjeldende.barn.some(b => b.kilde === 'FOLKEREGISTER');

  return (
    <Form formMethods={formMethods} onSubmit={values => submitCallback(transformValues(values))}>
      <VStack gap="6">
        <Termindato isReadOnly={isReadOnly} />
        <RadioGroupPanel
          name="erBarnFødt"
          label={
            <FormattedMessage
              id="SjekkManglendeFødselForm.Label"
              values={{ antallBarn: gjeldende.termin?.antallBarn }}
            />
          }
          validate={[required]}
          isReadOnly={isReadOnly}
          isHorizontal
          size="medium"
          isTrueOrFalseSelection
          radios={[
            {
              label: <FormattedMessage id="SjekkManglendeFødselForm.Ja" />,
              value: 'true',
              element: <BarnFieldArray isReadOnly={isReadOnly} />,
            },
            {
              label: <FormattedMessage id="SjekkManglendeFødselForm.Nei" />,
              value: 'false',
              disabled: finnesBarnIFReg,
            },
          ]}
        />

        <FaktaBegrunnelseTextField
          isSubmittable={submittable}
          isReadOnly={isReadOnly}
          hasBegrunnelse={true}
          size="medium"
        />

        {!isReadOnly && (
          <HStack gap="2">
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
            <Button variant="secondary" size="small" type="button" onClick={() => avbrytOverstyring()}>
              <FormattedMessage id="OverstyringForm.Avbryt" />
            </Button>
          </HStack>
        )}
      </VStack>
    </Form>
  );
};

const initialValues = (gjeldende: FødselGjeldende, overstyringsAP?: Aksjonspunkt) => ({
  termindato: gjeldende.termin?.termindato ?? '',
  erBarnetFødt: gjeldende.barn.length > 0,
  ...BarnFieldArray.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(overstyringsAP),
});

const transformValues = (values: FormValues): OverstyringFaktaFødselAp => ({
  kode: AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
  termindato: values.termindato,
  ...BarnFieldArray.transformValues(values, values.erBarnetFødt),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
