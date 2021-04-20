import React, { FunctionComponent } from 'react';
import {
  FormattedMessage, injectIntl, WrappedComponentProps,
} from 'react-intl';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Undertittel, Element } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { AksjonspunktBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { required } from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { MerkOpptjeningUtlandAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './innhentDokOpptjeningUtlandPanel.less';

const OpptjeningIUtlandDokStatus = {
  DOKUMENTASJON_VIL_BLI_INNHENTET: 'DOKUMENTASJON_VIL_BLI_INNHENTET',
  DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET: 'DOKUMENTASJON_VIL_IKKE_BLI_INNHENTET',
};

type FormValues = {
  begrunnelse?: string;
  dokStatus?: string;
}

interface PureOwnProps {
  readOnly: boolean;
  harApneAksjonspunkter: boolean;
  submittable: boolean;
  submitCallback: (data: MerkOpptjeningUtlandAp) => Promise<void>;
  aksjonspunkt: Aksjonspunkt;
  dokStatus?: string;
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

export const InnhentDokOpptjeningUtlandPanel: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  readOnly,
  harApneAksjonspunkter,
  submittable,
  initialValues,
  handleSubmit,
  form,
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel>
      <FormattedMessage id="InnhentDokOpptjeningUtlandPanel.OpptjeningUtland" />
    </Undertittel>
    {harApneAksjonspunkter && <VerticalSpacer sixteenPx />}
    <AksjonspunktBox className={styles.aksjonspunktMargin} erAksjonspunktApent={harApneAksjonspunkter}>
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
      <FaktaBegrunnelseTextField
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasBegrunnelse={!!initialValues.begrunnelse}
        label={intl.formatMessage({ id: 'InnhentDokOpptjeningUtlandPanel.Begrunnelse' })}
      />
      <VerticalSpacer sixteenPx />
      <FaktaSubmitButton
        formName={form}
        isSubmittable={submittable}
        isReadOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
      />
    </AksjonspunktBox>
  </form>
);

const transformValues = (values: FormValues): MerkOpptjeningUtlandAp => ({
  kode: aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  ...values,
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  onSubmit: lagSubmitFn(ownProps),
  initialValues: {
    dokStatus: ownProps.dokStatus,
    ...FaktaBegrunnelseTextField.buildInitialValues(ownProps.aksjonspunkt),
  },
});

export default connect(mapStateToProps)(reduxForm({
  form: 'InnhentDokOpptjeningUtlandPanel',
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(injectIntl(InnhentDokOpptjeningUtlandPanel)));
