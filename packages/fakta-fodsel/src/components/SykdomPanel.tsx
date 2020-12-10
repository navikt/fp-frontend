import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm,
} from '@fpsak-frontend/form';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { InjectedFormProps } from 'redux-form';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

type FormValues = {
  begrunnelseSykdom?: string;
  erMorForSykVedFodsel?: boolean;
}

export type TransformedValues = {
  kode: string;
  begrunnelse: string;
  erMorForSykVedFodsel: boolean;
}

interface PureOwnProps {
  aksjonspunkt: Aksjonspunkt;
  morForSykVedFodsel: boolean;
  submitHandler: (values: FormValues) => any;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => any;
}

/**
 * SykdomPanel
 */
export const SykdomPanel: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  alleMerknaderFraBeslutter,
}) => (
  <FaktaGruppe
    title={intl.formatMessage({ id: 'SykdomPanel.ApplicationInformation' })}
    merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT]}
  >
    <TextAreaField
      name="begrunnelseSykdom"
      label={{ id: 'SykdomPanel.Begrunnelse' }}
      validate={[required, minLength3, maxLength1500, hasValidText]}
      maxLength={1500}
      readOnly={readOnly}
    />
    <VerticalSpacer eightPx />
    <RadioGroupField name="erMorForSykVedFodsel" validate={[required]} bredde="XL" readOnly={readOnly} direction="vertical">
      <RadioOption value label={{ id: 'SykdomPanel.AnnenForelderForSyk' }} />
      <RadioOption
        value={false}
        label={(
          <FormattedMessage
            id="SykdomPanel.AnnenForelderIkkeForSyk"
            values={{
              b: (chunks: any) => <b>{chunks}</b>,
            }}
          />
      )}
      />
    </RadioGroupField>
  </FaktaGruppe>
);

const buildInitialValues = (aksjonspunkt: Aksjonspunkt, morForSykVedFodsel: boolean): FormValues => ({
  begrunnelseSykdom: aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : '',
  erMorForSykVedFodsel: morForSykVedFodsel,
});

const transformValues = (values: FormValues): TransformedValues => ({
  kode: aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
  begrunnelse: values.begrunnelseSykdom,
  erMorForSykVedFodsel: values.erMorForSykVedFodsel,
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitHandler],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps.aksjonspunkt, ownProps.morForSykVedFodsel),
  onSubmit: lagSubmitFn(ownProps),
});

export const sykdomPanelName = 'SykdomPanel';

export default connect(mapStateToProps)(behandlingForm({
  form: sykdomPanelName,
})(injectIntl(SykdomPanel)));
