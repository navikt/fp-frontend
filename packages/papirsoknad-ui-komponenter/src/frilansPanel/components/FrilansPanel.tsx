import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Undertekst } from 'nav-frontend-typografi';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';

import FrilansPerioderFieldArray, { FormValues as PerioderFormValues } from './FrilansPerioderFieldArray';
import FrilansOppdragForFamiliePanel, { FormValues as FormValuesOppdragForFamilie } from './FrilansOppdragForFamiliePanel';

const FRILANS_NAME_PREFIX = 'frilans';

export type FormValues = {
  [FRILANS_NAME_PREFIX]: {
    harSokerPeriodeMedFrilans?: boolean;
    erNyoppstartetFrilanser?: boolean;
    harInntektFraFosterhjem?: boolean;
  } & FormValuesOppdragForFamilie & PerioderFormValues;
}

interface OwnProps {
  readOnly: boolean;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
}

const FrilansPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
}) => (
  <BorderBox>
    <SkjemaGruppe legend={<FormattedMessage id="Registrering.Frilans.Title" />}>
      <Undertekst><FormattedMessage id="Registrering.Frilans.HarFrilansvirksomhet" /></Undertekst>
      <VerticalSpacer eightPx />
      <RadioGroupField
        name={`${FRILANS_NAME_PREFIX}.harSokerPeriodeMedFrilans`}
        validate={[required]}
        direction="vertical"
        readOnly={readOnly}
        parse={(value: string) => value === 'true'}
      >
        <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value="false" />
        <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value="true">
          <ArrowBox>
            <Undertekst><FormattedMessage id="Registrering.Frilans.OppgiPeriode" /></Undertekst>
            <VerticalSpacer eightPx />
            <FrilansPerioderFieldArray readOnly={readOnly} />
            <VerticalSpacer fourPx />
            <RadioGroupField
              name={`${FRILANS_NAME_PREFIX}.erNyoppstartetFrilanser`}
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" />}
              parse={(value: string) => value === 'true'}
            >
              <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value="true" />
              <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value="false" />
            </RadioGroupField>
            <VerticalSpacer fourPx />
            <RadioGroupField
              name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
              readOnly={readOnly}
              label={<FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" />}
              parse={(value: string) => value === 'true'}
            >
              <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value="true" />
              <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value="false" />
            </RadioGroupField>
            <FrilansOppdragForFamiliePanel readOnly={readOnly} />
          </ArrowBox>
        </RadioOption>
      </RadioGroupField>
    </SkjemaGruppe>
  </BorderBox>
);

FrilansPanel.buildInitialValues = () => ({
  [FRILANS_NAME_PREFIX]: {
    ...FrilansOppdragForFamiliePanel.buildInitialValues(),
    perioder: [{
      periodeFom: '',
      periodeTom: '',
    }],
  },
});

/*
FrilansPanel.validate = (values) => {
  if (!values[FRILANS_NAME_PREFIX]) {
    return null;
  }
  return {
    [FRILANS_NAME_PREFIX]: {
      ...FrilansOppdragForFamiliePanel.validate(values[FRILANS_NAME_PREFIX]),
      perioder: FrilansPerioderFieldArray.validate(values[FRILANS_NAME_PREFIX].perioder),
    },
  };
};*/

export default FrilansPanel;
