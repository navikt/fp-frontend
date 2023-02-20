import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { AksjonspunktBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import { Aksjonspunkt } from '@navikt/fp-types';
import { MerkOpptjeningUtlandAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './innhentDokOpptjeningUtlandPanel.less';

const OpptjeningIUtlandDokStatus = {
  DOKUMENTASJON_VIL_BLI_INNHENTET: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
  DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET: 'DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET',
};

const transformValues = (values: FormValues): MerkOpptjeningUtlandAp => ({
  kode: AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  ...values,
});

export type FormValues = {
  begrunnelse?: string;
  dokStatus?: string;
}

interface OwnProps {
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submittable: boolean;
  submitCallback: (data: MerkOpptjeningUtlandAp) => Promise<void>;
  aksjonspunkt: Aksjonspunkt;
  dokStatus?: string;
  formData: FormValues,
  setFormData: (data: FormValues) => void,
}

const InnhentDokOpptjeningUtlandPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  harApneAksjonspunkter,
  aksjonspunkt,
  alleMerknaderFraBeslutter,
  submittable,
  submitCallback,
  dokStatus,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      dokStatus,
      ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkt),
    },
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">
        <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.OpptjeningUtland" />
      </Heading>
      {harApneAksjonspunkter && <VerticalSpacer sixteenPx />}
      <AksjonspunktBox
        className={styles.aksjonspunktMargin}
        erAksjonspunktApent={harApneAksjonspunkter}
        erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted}
      >
        <RadioGroupPanel
          name="dokStatus"
          label={<FormattedMessage id="InnhentDokOpptjeningUtlandPanel.InnhentelseDok" />}
          validate={[required]}
          isReadOnly={readOnly}
          radios={[{
            label: <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.Innhentes" />,
            value: OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_BLI_INNHENTET,
          }, {
            label: <FormattedMessage
              id="InnhentDokOpptjeningUtlandPanel.InnhentesIkke"
              values={{
                b: (chunks: any) => <b>{chunks}</b>,
              }}
            />,
            value: OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET,
          }]}
        />
        <VerticalSpacer sixteenPx />
        <FaktaBegrunnelseTextFieldNew
          isSubmittable={submittable}
          isReadOnly={readOnly}
          hasBegrunnelse={!!begrunnelse}
          label={intl.formatMessage({ id: 'InnhentDokOpptjeningUtlandPanel.Begrunnelse' })}
        />
        <VerticalSpacer sixteenPx />
        <FaktaSubmitButtonNew
          isSubmittable={submittable}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
          isReadOnly={readOnly}
        />
      </AksjonspunktBox>
    </Form>
  );
};

export default InnhentDokOpptjeningUtlandPanel;
