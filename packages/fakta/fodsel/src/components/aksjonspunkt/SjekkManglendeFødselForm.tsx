import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, VStack } from '@navikt/ds-react';
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
  erBarnFødt?: boolean;
} & BarnFormValues &
  FaktaBegrunnelseFormValues;

interface Props {
  fødsel: Fødsel;
  submittable: boolean;
  aksjonspunkt: Aksjonspunkt;
}

export const SjekkManglendeFødselForm = ({
  submittable,
  aksjonspunkt,
  fødsel: { gjeldende, søknad, register },
}: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<SjekkManglendeFodselAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const dokumentasjonForeliggerIsEdited = gjeldende.barn.some(b => b.kilde === 'SAKSBEHANDLER');
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues(gjeldende, aksjonspunkt),
  });

  const begrunnelse = formMethods.watch('begrunnelse');
  const finnesBarnIFReg = gjeldende.barn.some(b => b.kilde === 'FOLKEREGISTER');
  const diffIAntallBarn = register.barn.length > 0 && register.barn.length !== søknad.antallBarn;

  return (
    <FaktaKort
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]}
      label={intl.formatMessage({ id: 'SjekkManglendeFødselForm.Tittel' })}
    >
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="4">
          {!isReadOnly && !finnesBarnIFReg && (
            <Alert variant="info">
              <FormattedMessage id="SjekkManglendeFødselForm.IngenBarnRegistrertIFreg" />
            </Alert>
          )}
          {!isReadOnly && diffIAntallBarn && (
            <Alert variant="info">
              <FormattedMessage
                id="SjekkManglendeFødselForm.DiffIFreg"
                values={{ antallISøknad: søknad.antallBarn, antallIFreg: register.barn.length }}
              />
            </Alert>
          )}
          <RadioGroupPanel
            name="erBarnFødt"
            isEdited={dokumentasjonForeliggerIsEdited}
            label={intl.formatMessage({ id: 'SjekkManglendeFødselForm.Label' })}
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
  erBarnFødt: mapDokumentasjonForligger(gjeldende),
  ...BarnFieldArray.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): SjekkManglendeFodselAp => ({
  kode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  erBarnFødt: values.erBarnFødt!,
  ...BarnFieldArray.transformValues(values, !!values.erBarnFødt),
  ...FaktaBegrunnelseTextField.transformValues(values),
});

const mapDokumentasjonForligger = ({ fødselDokumetasjonStatus, barn }: FødselGjeldende) => {
  const finnesBarnIFReg = barn.some(b => b.kilde === 'FOLKEREGISTER');
  switch (fødselDokumetasjonStatus) {
    case 'DOKUMENTERT':
      return true;
    case 'IKKE_DOKUMENTERT':
      return false;
    case 'IKKE_VURDERT':
      return finnesBarnIFReg || undefined;
  }
};
