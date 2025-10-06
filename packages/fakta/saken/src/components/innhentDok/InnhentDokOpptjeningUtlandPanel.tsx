import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { MerkOpptjeningUtlandAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import styles from './innhentDokOpptjeningUtlandPanel.module.css';

const OpptjeningIUtlandDokStatus = {
  DOKUMENTASJON_VIL_BLI_INNHENTET: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
  DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET: 'DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET',
};

type FormValues = {
  begrunnelse: string | undefined;
  dokStatus?: string;
};

interface Props {
  aksjonspunkt: Aksjonspunkt;
  dokStatus?: string;
}

export const InnhentDokOpptjeningUtlandPanel = ({ aksjonspunkt, dokStatus }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly, harÅpentAksjonspunkt, isSubmittable } =
    usePanelDataContext<MerkOpptjeningUtlandAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? {
      dokStatus,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-24">
        <Heading size="small" level="3">
          <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.OpptjeningUtland" />
        </Heading>
        <AksjonspunktBox
          className={styles['aksjonspunktMargin']}
          erAksjonspunktApent={harÅpentAksjonspunkt}
          erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted}
        >
          <VStack gap="space-16">
            <RhfRadioGroup
              name="dokStatus"
              control={formMethods.control}
              label={<FormattedMessage id="InnhentDokOpptjeningUtlandPanel.InnhentelseDok" />}
              validate={[required]}
              isReadOnly={isReadOnly}
            >
              <Radio value={OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_BLI_INNHENTET} size="small">
                <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.Innhentes" />
              </Radio>
              <Radio value={OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET} size="small">
                <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.InnhentesIkke" values={{ b: BTag }} />
              </Radio>
            </RhfRadioGroup>
            <FaktaBegrunnelseTextField
              control={formMethods.control}
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={!!begrunnelse}
              label={intl.formatMessage({ id: 'InnhentDokOpptjeningUtlandPanel.Begrunnelse' })}
            />
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              isReadOnly={isReadOnly}
            />
          </VStack>
        </AksjonspunktBox>
      </VStack>
    </RhfForm>
  );
};

const transformValues = (values: FormValues): MerkOpptjeningUtlandAp => ({
  kode: '5068',
  ...values,
});
