import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fødsel, FødselGjeldende } from '@navikt/fp-types';
import type { SjekkManglendeFodselAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { ErBarnFødt, type ErBarnFødtFormValues } from '../form/ErBarnFødt';

type FormValues = ErBarnFødtFormValues & FaktaBegrunnelseFormValues;

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
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="4">
          {!isReadOnly && !finnesBarnIFReg && (
            <Alert variant="info">
              <FormattedMessage id="SjekkManglendeFødselForm.Info.IngenBarnRegistrert" />
            </Alert>
          )}
          {!isReadOnly && diffIAntallBarn && (
            <Alert variant="info">
              <FormattedMessage
                id="SjekkManglendeFødselForm.Info.ForskjelligAntallBarn"
                values={{ antallISøknad: søknad.antallBarn, antallIFreg: register.barn.length }}
              />
            </Alert>
          )}
          <ErBarnFødt
            isReadOnly={isReadOnly}
            isEdited={dokumentasjonForeliggerIsEdited}
            finnesBarnIFReg={finnesBarnIFReg}
            antallBarnISøknad={søknad.antallBarn}
          />
          <FaktaBegrunnelseTextField
            control={formMethods.control}
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
      </RhfForm>
    </FaktaKort>
  );
};

const initialValues = (gjeldende: FødselGjeldende, aksjonspunkt: Aksjonspunkt): FormValues => ({
  ...ErBarnFødt.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): SjekkManglendeFodselAp => ({
  kode: AksjonspunktKode.SJEKK_MANGLENDE_FODSEL,
  ...ErBarnFødt.transformValues(values),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
