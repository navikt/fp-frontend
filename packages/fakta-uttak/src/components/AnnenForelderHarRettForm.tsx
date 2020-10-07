import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';

import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm,
} from '@fpsak-frontend/form';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { Aksjonspunkt, Ytelsefordeling } from '@fpsak-frontend/types';

import styles from './annenForelderHarRettForm.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

interface OwnProps {
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  hasOpenUttakAksjonspunkter: boolean;
  aksjonspunkter: Aksjonspunkt[];
  behandlingVersjon: number;
  behandlingId: number;
}

export const AnnenForelderHarRettForm: FunctionComponent<OwnProps & InjectedFormProps> = ({
  hasOpenAksjonspunkter,
  hasOpenUttakAksjonspunkter,
  aksjonspunkter,
  behandlingId,
  behandlingVersjon,
  readOnly,
  ...formProps
}) => (
  <div className={hasOpenAksjonspunkter || !hasOpenUttakAksjonspunkter ? styles.solvedAksjonspunkt : styles.inactiveAksjonspunkt}>
    <form onSubmit={formProps.handleSubmit}>
      {!readOnly && (
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {aksjonspunkter.map((ap) => (
          <FormattedMessage
            key={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon.kode}`}
            id={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon.kode}`}
          />
        ))}
      </AksjonspunktHelpTextTemp>
      )}
      <VerticalSpacer twentyPx />
      <div className={styles.fauxColumn}>
        <RadioGroupField name="annenForelderHarRett" validate={[required]} readOnly={readOnly} isEdited={!hasOpenAksjonspunkter}>
          <RadioOption value label={{ id: 'UttakInfoPanel.AnnenForelderHarRett' }} />
          <RadioOption value={false} label={{ id: 'UttakInfoPanel.AnnenForelderHarIkkeRett' }} />
        </RadioGroupField>

        <div className={styles.textAreaStyle}>
          <TextAreaField
            name="begrunnelse"
            readOnly={readOnly}
            label={{ id: 'UttakInfoPanel.BegrunnEndringene' }}
            validate={[required, minLength3, maxLength4000, hasValidText]}
            maxLength={4000}
          />
        </div>
        <VerticalSpacer sixteenPx />
        <FaktaSubmitButton
          formName={formProps.form}
          isSubmittable={!readOnly}
          isReadOnly={readOnly}
          hasOpenAksjonspunkter={hasOpenAksjonspunkter}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
      </div>
      {formProps.error
          && (
            <span>
              {formProps.error}
            </span>
          )}
    </form>
  </div>
);

const transformValues = (values: any, aksjonspunkter: Aksjonspunkt[]) => aksjonspunkter.map((ap: Aksjonspunkt) => ({
  kode: ap.definisjon.kode,
  begrunnelse: values.begrunnelse,
  annenforelderHarRett: values.annenForelderHarRett,
}));

interface PureOwnProps {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (...args: any[]) => any;
}

const buildInitialValues = createSelector([(props: PureOwnProps) => props.ytelsefordeling], (ytelseFordeling) => {
  const annenForelderHarRett = ytelseFordeling && ytelseFordeling.annenforelderHarRettDto;
  if (ytelseFordeling) {
    return ({
      annenForelderHarRett: annenForelderHarRett ? annenForelderHarRett.annenforelderHarRett : undefined,
      begrunnelse: annenForelderHarRett ? annenForelderHarRett.begrunnelse : undefined,
    });
  }

  return undefined;
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: any) => submitCallback(transformValues(values, aksjonspunkter)));

const mapStateToProps = (_state: any, ownProps: PureOwnProps) => ({
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({
  form: 'AnnenForelderHarRettForm',
  enableReinitialize: true,
})(AnnenForelderHarRettForm));
