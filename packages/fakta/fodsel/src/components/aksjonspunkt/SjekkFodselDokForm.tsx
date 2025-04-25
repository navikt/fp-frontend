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

import { type AvklarBarnFormValues, AvklartBarnFieldArray } from './AvklartBarnFieldArray';

export type FormValues = {
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
} & AvklarBarnFormValues &
  FaktaBegrunnelseFormValues;

interface Props {
  fødsel: Fødsel;
  submittable: boolean;
  aksjonspunkt: Aksjonspunkt;
}

/**
 * FodselInfoPanel
 *
 * Setter opp aksjonspunktet for avklaring av manglende fødsel (Fødselsvilkåret).
 */
export const SjekkFodselDokForm = ({ submittable, aksjonspunkt, fødsel: { gjeldende } }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<SjekkManglendeFodselAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const dokumentasjonForeliggerIsEdited = gjeldende.barn.some(b => b.kilde === 'SAKSBEHANDLER');
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(gjeldende, aksjonspunkt),
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
        <VStack gap="2">
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
                element: <AvklartBarnFieldArray readOnly={isReadOnly} />,
              },
              {
                label: <FormattedMessage id="SjekkFodselDokForm.DokumentasjonForeliggerIkke" />,
                value: 'false',
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

const buildInitialValues = (gjeldende: FødselGjeldende, aksjonspunkt: Aksjonspunkt): FormValues => ({
  dokumentasjonForeligger: gjeldende.barn.some(b => b.kilde === 'SAKSBEHANDLER') ?? undefined,
  brukAntallBarnITps: !gjeldende.barn.some(b => b.kilde !== 'FOLKEREGISTER'),
  ...AvklartBarnFieldArray.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): SjekkManglendeFodselAp => ({
  kode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger!,
  brukAntallBarnITps: false,
  ...AvklartBarnFieldArray.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
