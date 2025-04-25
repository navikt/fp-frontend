import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { BTag } from '@navikt/ft-utils';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { MerkOpptjeningUtlandAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import styles from './innhentDokOpptjeningUtlandPanel.module.css';

const OpptjeningIUtlandDokStatus = {
  DOKUMENTASJON_VIL_BLI_INNHENTET: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
  DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET: 'DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET',
};

const transformValues = (values: FormValues): MerkOpptjeningUtlandAp => ({
  kode: AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  ...values,
});

export type FormValues = {
  begrunnelse?: string;
  dokStatus?: string;
};

interface Props {
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submittable: boolean;
  submitCallback: (data: MerkOpptjeningUtlandAp) => Promise<void>;
  aksjonspunkt: Aksjonspunkt;
  dokStatus?: string;
}

export const InnhentDokOpptjeningUtlandPanel = ({
  readOnly,
  harApneAksjonspunkter,
  aksjonspunkt,
  alleMerknaderFraBeslutter,
  submittable,
  submitCallback,
  dokStatus,
}: Props) => {
  const intl = useIntl();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? {
      dokStatus,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="6">
        <Heading size="small">
          <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.OpptjeningUtland" />
        </Heading>
        <AksjonspunktBox
          className={styles.aksjonspunktMargin}
          erAksjonspunktApent={harApneAksjonspunkter}
          erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted}
        >
          <VStack gap="4">
            <RadioGroupPanel
              name="dokStatus"
              label={<FormattedMessage id="InnhentDokOpptjeningUtlandPanel.InnhentelseDok" />}
              validate={[required]}
              isReadOnly={readOnly}
              radios={[
                {
                  label: <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.Innhentes" />,
                  value: OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_BLI_INNHENTET,
                },
                {
                  label: <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.InnhentesIkke" values={{ b: BTag }} />,
                  value: OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET,
                },
              ]}
            />
            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={readOnly}
              hasBegrunnelse={!!begrunnelse}
              label={intl.formatMessage({ id: 'InnhentDokOpptjeningUtlandPanel.Begrunnelse' })}
            />
            <FaktaSubmitButton
              isSubmittable={submittable}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
              isReadOnly={readOnly}
            />
          </VStack>
        </AksjonspunktBox>
      </VStack>
    </Form>
  );
};
