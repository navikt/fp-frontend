import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DekningsgradVisning } from './DekningsgradVisning';

type FormValues = {
  dekningsgrad: number | undefined;
} & FaktaBegrunnelseFormValues;

interface Props {
  ytelseFordeling: Ytelsefordeling;
  aksjonspunkt: Aksjonspunkt;
}

export const DekningradAP = ({ ytelseFordeling, aksjonspunkt }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, fagsak, isReadOnly, isSubmittable } =
    usePanelDataContext<AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(ytelseFordeling, aksjonspunkt),
  });

  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });

  const { dekningsgrader } = ytelseFordeling;
  const { bruker, annenPart } = fagsak;

  return (
    <AksjonspunktBox
      erAksjonspunktApent={aksjonspunkt.status === 'OPPR'}
      erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted}
    >
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="space-16">
          <HStack gap="space-16">
            <DekningsgradVisning
              navn={bruker.navn}
              kjønn={bruker.kjønn}
              dekningsgrad={dekningsgrader.søker.dekningsgrad}
              søknadsdato={dekningsgrader.søker.søknadsdato}
            />
            {annenPart && dekningsgrader.annenPart && (
              <DekningsgradVisning
                navn={annenPart.navn}
                kjønn={annenPart.kjønn}
                dekningsgrad={dekningsgrader.annenPart.dekningsgrad}
                søknadsdato={dekningsgrader.annenPart.søknadsdato}
              />
            )}
          </HStack>

          <RhfRadioGroup
            name="dekningsgrad"
            control={formMethods.control}
            legend={
              <FormattedMessage
                id="Dekningsgrad.HvilkenDekningsgrad"
                values={{ harAnnenPart: !!ytelseFordeling.dekningsgrader.annenPart }}
              />
            }
            validate={[required]}
            readOnly={isReadOnly}
          >
            <HStack gap="space-16">
              <Radio value={80} size="small">
                <FormattedMessage id="Dekningsgrad.80" />
              </Radio>
              <Radio value={100} size="small">
                <FormattedMessage id="Dekningsgrad.100" />
              </Radio>
            </HStack>
          </RhfRadioGroup>

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isReadOnly={isReadOnly}
            isSubmittable={isSubmittable}
            hasBegrunnelse={!!begrunnelse}
            label={intl.formatMessage({ id: 'Label.Begrunnelse' })}
          />

          <FaktaSubmitButton
            isSubmittable={isSubmittable}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
            isReadOnly={isReadOnly}
          />
        </VStack>
      </RhfForm>
    </AksjonspunktBox>
  );
};

const buildInitialValues = (ytelseFordeling: Ytelsefordeling, aksjonspunkt: Aksjonspunkt): FormValues => ({
  dekningsgrad: ytelseFordeling.dekningsgrader.avklartDekningsgrad,
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD> => ({
  kode: AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  dekningsgrad: notEmpty(values.dekningsgrad),
  ...FaktaBegrunnelseTextField.transformValues(values),
});
