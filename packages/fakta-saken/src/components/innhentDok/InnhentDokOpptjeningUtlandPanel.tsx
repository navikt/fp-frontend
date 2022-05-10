import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertittel, Element } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew } from '@fpsak-frontend/fakta-felles';
import { AksjonspunktBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupField, RadioOption, Form } from '@navikt/ft-form-hooks';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { MerkOpptjeningUtlandAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './innhentDokOpptjeningUtlandPanel.less';

const OpptjeningIUtlandDokStatus = {
  DOKUMENTASJON_VIL_BLI_INNHENTET: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
  DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET: 'DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET',
};

const transformValues = (values: FormValues): MerkOpptjeningUtlandAp => ({
  kode: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
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
      <Undertittel>
        <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.OpptjeningUtland" />
      </Undertittel>
      {harApneAksjonspunkter && <VerticalSpacer sixteenPx />}
      <AksjonspunktBox
        className={styles.aksjonspunktMargin}
        erAksjonspunktApent={harApneAksjonspunkter}
        erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted}
      >
        <Element>
          <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.InnhentelseDok" />
        </Element>
        <VerticalSpacer sixteenPx />
        <RadioGroupField name="dokStatus" validate={[required]} direction="vertical" readOnly={readOnly}>
          <RadioOption
            label={<FormattedMessage id="InnhentDokOpptjeningUtlandPanel.Innhentes" />}
            value={OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_BLI_INNHENTET}
          />
          <RadioOption
            label={(
              <FormattedMessage
                id="InnhentDokOpptjeningUtlandPanel.InnhentesIkke"
                values={{
                  b: (chunks) => <b>{chunks}</b>,
                }}
              />
            )}
            value={OpptjeningIUtlandDokStatus.DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET}
          />
        </RadioGroupField>
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
