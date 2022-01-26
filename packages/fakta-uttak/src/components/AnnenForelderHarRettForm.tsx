import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { InjectedFormProps, reduxForm, formValueSelector } from 'redux-form';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, TextAreaField } from '@fpsak-frontend/form';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { Aksjonspunkt, Ytelsefordeling } from '@fpsak-frontend/types';
import { AvklarAnnenforelderHarRettAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './annenForelderHarRettForm.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

type FormValues = {
  begrunnelse?: string;
  annenForelderHarRett?: boolean;
  annenforelderMottarUføretrygd?: boolean;
}

interface PureOwnProps {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkt: Aksjonspunkt;
  submitCallback: (data: AvklarAnnenforelderHarRettAp) => Promise<any>;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  hasOpenUttakAksjonspunkter: boolean;
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (values: any) => any;
  annenForelderHarRett?: boolean;
}

export const AnnenForelderHarRettForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  hasOpenAksjonspunkter,
  hasOpenUttakAksjonspunkter,
  aksjonspunkt,
  readOnly,
  ytelsefordeling,
  annenForelderHarRett,
  ...formProps
}) => (
  <div className={hasOpenAksjonspunkter || !hasOpenUttakAksjonspunkter ? styles.solvedAksjonspunkt : styles.inactiveAksjonspunkt}>
    <form onSubmit={formProps.handleSubmit}>
      {!readOnly && (
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
          {[<FormattedMessage
            key={`UttakInfoPanel.Aksjonspunkt.${aksjonspunkt.definisjon.kode}`}
            id={`UttakInfoPanel.Aksjonspunkt.${aksjonspunkt.definisjon.kode}`}
          />]}
        </AksjonspunktHelpTextTemp>
      )}
      <VerticalSpacer twentyPx />
      <div className={styles.fauxColumn}>
        <RadioGroupField
          name="annenForelderHarRett"
          label={{ id: 'UttakInfoPanel.HarRett' }}
          validate={[required]}
          readOnly={readOnly}
          isEdited={!hasOpenAksjonspunkter}
        >
          <RadioOption value label={{ id: 'UttakInfoPanel.Ja' }} />
          <RadioOption value={false} label={{ id: 'UttakInfoPanel.Nei' }} />
        </RadioGroupField>
        <VerticalSpacer fourPx />
        {(ytelsefordeling?.annenforelderHarRettDto?.avklarAnnenforelderMottarUføretrygd
          || ytelsefordeling?.annenforelderHarRettDto?.annenforelderMottarUføretrygd !== undefined)
          && annenForelderHarRett === false && (
          <RadioGroupField
            name="annenforelderMottarUføretrygd"
            label={{ id: 'UttakInfoPanel.MottarUforetrygd' }}
            validate={[required]}
            readOnly={readOnly}
            isEdited={!hasOpenAksjonspunkter}
          >
            <RadioOption value label={{ id: 'UttakInfoPanel.Ja' }} />
            <RadioOption value={false} label={{ id: 'UttakInfoPanel.Nei' }} />
          </RadioGroupField>
        )}
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

const transformValues = (values: FormValues): AvklarAnnenforelderHarRettAp => ({
  kode: aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
  begrunnelse: values.begrunnelse,
  annenforelderHarRett: values.annenForelderHarRett,
  annenforelderMottarUføretrygd: values.annenForelderHarRett === false ? values.annenforelderMottarUføretrygd : undefined,
});

const buildInitialValues = createSelector([(props: PureOwnProps) => props.ytelsefordeling], (ytelseFordeling): FormValues => {
  const annenForelderHarRett = ytelseFordeling && ytelseFordeling.annenforelderHarRettDto;
  if (ytelseFordeling) {
    return ({
      annenForelderHarRett: annenForelderHarRett ? annenForelderHarRett.annenforelderHarRett : undefined,
      annenforelderMottarUføretrygd: annenForelderHarRett ? annenForelderHarRett.annenforelderMottarUføretrygd : undefined,
      begrunnelse: annenForelderHarRett ? annenForelderHarRett.begrunnelse : undefined,
    });
  }

  return undefined;
});

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const FORM_NAME = 'AnnenForelderHarRettForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
  annenForelderHarRett: formValueSelector(FORM_NAME)(state, 'annenForelderHarRett'),
});

export default connect(mapStateToProps)(reduxForm({
  form: FORM_NAME,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(AnnenForelderHarRettForm));
