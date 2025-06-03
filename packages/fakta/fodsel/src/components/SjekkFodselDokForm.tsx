import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AvklartBarn, Fødsel } from '@navikt/fp-types';
import type { SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { AvklartBarnFieldArray } from './AvklartBarnFieldArray';

export type FormValues = {
  dokumentasjonForeligger?: boolean;
  brukAntallBarnITps?: boolean;
  avklartBarn?: AvklartBarn[];
} & FaktaBegrunnelseFormValues;

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
export const SjekkFodselDokForm = ({ submittable, aksjonspunkt, fødsel }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<SjekkManglendeFodselAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const dokumentasjonForeliggerIsEdited = fødsel.gjeldende.barn.some(b => b.kilde === 'SAKSBEHANDLER');
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(fødsel, aksjonspunkt),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <FaktaKort
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.SJEKK_MANGLENDE_FODSEL]}
      label={intl.formatMessage({ id: 'SjekkFodselDokForm.Tittel' })}
    >
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values, fødsel.register.barn))}
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

const lagBarn = (antallBarnFraSoknad: number): AvklartBarn[] => {
  let antallBarn = antallBarnFraSoknad;
  if (antallBarn === 0 || !antallBarn) {
    antallBarn = 1;
  }
  const childrenArray: AvklartBarn[] = [];
  while (antallBarn > 0) {
    childrenArray.push({ fodselsdato: '', dodsdato: null });
    antallBarn -= 1;
  }
  return childrenArray;
};

const ryddOppIAvklarteBarn = (avklartBarn: AvklartBarn[]): SjekkManglendeFodselAp['uidentifiserteBarn'] =>
  avklartBarn.map(ab => ({
    fodselsdato: ab.fodselsdato,
    dodsdato: ab.dodsdato === '' || ab.dodsdato === null ? undefined : ab.dodsdato,
  }));

const buildInitialValues = (fødsel: Fødsel, aksjonspunkt: Aksjonspunkt): FormValues => ({
  dokumentasjonForeligger: fødsel.gjeldende.barn.some(b => b.kilde === 'SAKSBEHANDLER') ?? undefined,
  brukAntallBarnITps: !fødsel.gjeldende.barn.some(b => b.kilde !== 'FOLKEREGISTER'),
  avklartBarn:
    fødsel.gjeldende.barn.length > 0
      ? fødsel.gjeldende.barn.map(({ barn }) => barn)
      : lagBarn(fødsel.gjeldende.antallBarn || 0),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues, avklartBarn: AvklartBarn[] | undefined = []): SjekkManglendeFodselAp => ({
  // TODO: sjekk at barn blir riktig pga dokumentasjonForeligger er true/false
  kode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  dokumentasjonForeligger: values.dokumentasjonForeligger!,
  uidentifiserteBarn: ryddOppIAvklarteBarn(values.avklartBarn!),
  brukAntallBarnITps: avklartBarn && !!avklartBarn.length ? values.brukAntallBarnITps! : false,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
