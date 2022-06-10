import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { Undertekst } from 'nav-frontend-typografi';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';

import FrilansPerioderFieldArray, { FormValues as PerioderFormValues } from './FrilansPerioderFieldArray';
import FrilansOppdragForFamiliePanel, { FormValues as FormValuesOppdragForFamilie } from './FrilansOppdragForFamiliePanel';

export const FRILANS_NAME_PREFIX = 'frilans';

export type FormValues = {
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie & PerioderFormValues;

interface OwnProps {
  readOnly: boolean;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  transformValues: (formValues: FormValues) => FormValues;
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
              label={<Undertekst><FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" /></Undertekst>}
              parse={(value: string) => value === 'true'}
              validate={[required]}
            >
              <RadioOption label={<FormattedMessage id="Registrering.Frilans.Yes" />} value="true" />
              <RadioOption label={<FormattedMessage id="Registrering.Frilans.No" />} value="false" />
            </RadioGroupField>
            <VerticalSpacer fourPx />
            <RadioGroupField
              name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
              readOnly={readOnly}
              label={<Undertekst><FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" /></Undertekst>}
              parse={(value: string) => value === 'true'}
              validate={[required]}
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
  ...FrilansOppdragForFamiliePanel.buildInitialValues(),
  perioder: [{
    periodeFom: '',
    periodeTom: '',
  }],
});

FrilansPanel.transformValues = (formValues) => (formValues.harSokerPeriodeMedFrilans ? formValues : {
  harSokerPeriodeMedFrilans: formValues.harSokerPeriodeMedFrilans,
});

export default FrilansPanel;
