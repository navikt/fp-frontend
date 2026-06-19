import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, UtlandDokumentasjonStatus } from '@navikt/fp-types';
import type { MerkOpptjeningUtlandAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  dokStatus?: UtlandDokumentasjonStatus;
} & FaktaBegrunnelseFormValues;

interface Props {
  aksjonspunkt: Aksjonspunkt;
  dokStatus?: UtlandDokumentasjonStatus;
}

export const InnhentDokOpptjeningUtlandAP = ({ aksjonspunkt, dokStatus }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly, isSubmittable } =
    usePanelDataContext<MerkOpptjeningUtlandAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkt, dokStatus),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <AksjonspunktBox
      erAksjonspunktApent={aksjonspunkt.status === 'OPPR'}
      erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted}
    >
      <VStack gap="space-24">
        <Heading size="small" level="3">
          <FormattedMessage id="InnhentDokOpptjeningUtlandAP.OpptjeningUtland" />
        </Heading>
        <RhfForm
          formMethods={formMethods}
          onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
          setDataOnUnmount={setMellomlagretFormData}
        >
          <VStack gap="space-16">
            <RhfRadioGroup
              name="dokStatus"
              control={formMethods.control}
              legend={<FormattedMessage id="InnhentDokOpptjeningUtlandAP.InnhentelseDok" />}
              validate={[required]}
              readOnly={isReadOnly}
            >
              <Radio value={'DOKUMENTASJON_VIL_BLI_INNHENTET' satisfies UtlandDokumentasjonStatus} size="small">
                <FormattedMessage id="InnhentDokOpptjeningUtlandAP.Innhentes" />
              </Radio>
              <Radio value={'DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET' satisfies UtlandDokumentasjonStatus} size="small">
                <FormattedMessage id="InnhentDokOpptjeningUtlandAP.InnhentesIkke" values={{ b: BTag }} />
              </Radio>
            </RhfRadioGroup>

            <FaktaBegrunnelseTextField
              control={formMethods.control}
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
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
      </VStack>
    </AksjonspunktBox>
  );
};

const buildInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  dokStatus: UtlandDokumentasjonStatus | undefined,
): FormValues => ({
  dokStatus,
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): MerkOpptjeningUtlandAp => ({
  kode: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  dokStatus: values.dokStatus,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
