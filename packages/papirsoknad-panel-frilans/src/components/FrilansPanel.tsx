import React, { FunctionComponent } from 'react';
import { FieldArray, FormSection } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Undertekst } from 'nav-frontend-typografi';

import { ArrowBox, BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { required } from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

import FrilansPerioderFieldArray from './FrilansPerioderFieldArray';
import FrilansOppdragForFamiliePanel, { FieldValues as FormValuesOppdragForFamilie } from './FrilansOppdragForFamiliePanel';

export const FRILANS_FORM_NAME_PREFIX = 'frilans';

interface OwnProps {
  readOnly: boolean;
  formName: string;
}

export type FormValues = {
  [FRILANS_FORM_NAME_PREFIX]?: FormValuesOppdragForFamilie;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  validate: (values: FormValues) => any;
}

/**
 * FrilansPanel
 *
 * Presentasjonskomponent.
 */
const FrilansPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  formName,
}) => (
  <FormSection name={FRILANS_FORM_NAME_PREFIX}>
    <BorderBox>
      <SkjemaGruppe legend={<FormattedMessage id="Registrering.Frilans.Title" />}>
        <Undertekst><FormattedMessage id="Registrering.Frilans.HarFrilansvirksomhet" /></Undertekst>
        <VerticalSpacer eightPx />
        <RadioGroupField
          name="harSokerPeriodeMedFrilans"
          validate={[required]}
          direction="vertical"
          readOnly={readOnly}
        >
          <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value={false} />
          <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value>
            <ArrowBox>
              <Undertekst><FormattedMessage id="Registrering.Frilans.OppgiPeriode" /></Undertekst>
              <VerticalSpacer eightPx />
              <FieldArray name="perioder" component={FrilansPerioderFieldArray} readOnly={readOnly} />
              <VerticalSpacer fourPx />
              <RadioGroupField
                name="erNyoppstartetFrilanser"
                readOnly={readOnly}
                label={<FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" />}
              >
                <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value />
                <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value={false} />
              </RadioGroupField>
              <VerticalSpacer fourPx />
              <RadioGroupField
                name="harInntektFraFosterhjem"
                readOnly={readOnly}
                label={<FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" />}
              >
                <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value />
                <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value={false} />
              </RadioGroupField>
              <FrilansOppdragForFamiliePanel readOnly={readOnly} formName={formName} namePrefix={FRILANS_FORM_NAME_PREFIX} />
            </ArrowBox>
          </RadioOption>
        </RadioGroupField>
      </SkjemaGruppe>
    </BorderBox>
  </FormSection>
);

FrilansPanel.buildInitialValues = () => ({
  [FRILANS_FORM_NAME_PREFIX]: {
    ...FrilansOppdragForFamiliePanel.buildInitialValues(),
    perioder: [{
      periodeFom: '',
      periodeTom: '',
    }],
  },
});

FrilansPanel.validate = (values) => {
  if (!values[FRILANS_FORM_NAME_PREFIX]) {
    return null;
  }
  return {
    [FRILANS_FORM_NAME_PREFIX]: {
      ...FrilansOppdragForFamiliePanel.validate(values[FRILANS_FORM_NAME_PREFIX]),
      perioder: FrilansPerioderFieldArray.validate(values[FRILANS_FORM_NAME_PREFIX].perioder),
    },
  };
};

export default FrilansPanel;
