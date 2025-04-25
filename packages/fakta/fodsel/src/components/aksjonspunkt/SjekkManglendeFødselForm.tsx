import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fødsel, FødselGjeldende } from '@navikt/fp-types';
import type { SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { BarnFieldArray, type BarnFormValues } from '../form/BarnFieldArray';

type FormValues = {
  dokumentasjonForeligger?: boolean;
} & BarnFormValues &
  FaktaBegrunnelseFormValues;

interface Props {
  fødsel: Fødsel;
  submittable: boolean;
  aksjonspunkt: Aksjonspunkt;
}

export const SjekkManglendeFødselForm = ({ submittable, aksjonspunkt, fødsel: { gjeldende } }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<SjekkManglendeFodselAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const dokumentasjonForeliggerIsEdited = gjeldende.barn.some(b => b.kilde === 'SAKSBEHANDLER');
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues(gjeldende, aksjonspunkt),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <FaktaKort
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]}
      label={intl.formatMessage({ id: 'SjekkFodselDokForm.Tittel' })}
    >
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="4">
          <RadioGroupPanel
            name="dokumentasjonForeligger"
            isEdited={dokumentasjonForeliggerIsEdited}
            label={intl.formatMessage({ id: 'SjekkFodselDokForm.FyllInnDokumenterteOpplysninger' })}
            validate={[required]}
            isReadOnly={isReadOnly}
            isHorizontal
            size="medium"
            isTrueOrFalseSelection
            radios={[
              {
                label: <FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeligger" />,
                value: 'true',
                element: <BarnFieldArray isReadOnly={isReadOnly} />,
              },
              {
                label: <FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeliggerIkke" />,
                value: 'false',
                disabled: gjeldende.barn.some(b => b.kilde === 'FOLKEREGISTER'),
              },
            ]}
          />

          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
            size="medium"
            hasVurderingText
          />

          {aksjonspunkt && !isReadOnly && (
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </Form>
    </FaktaKort>
  );
};

const initialValues = (gjeldende: FødselGjeldende, aksjonspunkt: Aksjonspunkt): FormValues => ({
  dokumentasjonForeligger: gjeldende.barn.some(b => b.kilde !== 'SØKNAD'),
  ...BarnFieldArray.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): SjekkManglendeFodselAp => ({
  kode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger!,
  uidentifiserteBarn: BarnFieldArray.transformValues(values,!!values.dokumentasjonForeligger).barn,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
