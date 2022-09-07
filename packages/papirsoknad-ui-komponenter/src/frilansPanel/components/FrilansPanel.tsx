import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';

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
    <Undertittel><FormattedMessage id="Registrering.Frilans.Title" /></Undertittel>
    <VerticalSpacer sixteenPx />
    <RadioGroupPanel
      name={`${FRILANS_NAME_PREFIX}.harSokerPeriodeMedFrilans`}
      label={<FormattedMessage id="Registrering.Frilans.HarFrilansvirksomhet" />}
      validate={[required]}
      isReadOnly={readOnly}
      isTrueOrFalseSelection
      radios={[{
        label: <FormattedMessage id="Registrering.Frilans.No" />,
        value: 'false',
      }, {
        label: <FormattedMessage id="Registrering.Frilans.Yes" />,
        value: 'true',
        element: (
          <>
            <VerticalSpacer eightPx />
            <ArrowBox>
              <Undertekst><FormattedMessage id="Registrering.Frilans.OppgiPeriode" /></Undertekst>
              <VerticalSpacer eightPx />
              <FrilansPerioderFieldArray readOnly={readOnly} />
              <VerticalSpacer fourPx />
              <RadioGroupPanel
                name={`${FRILANS_NAME_PREFIX}.erNyoppstartetFrilanser`}
                label={<FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" />}
                validate={[required]}
                isReadOnly={readOnly}
                isHorizontal
                isTrueOrFalseSelection
                radios={[{
                  label: <FormattedMessage id="Registrering.Frilans.Yes" />,
                  value: 'true',
                }, {
                  label: <FormattedMessage id="Registrering.Frilans.No" />,
                  value: 'false',
                }]}
              />
              <VerticalSpacer sixteenPx />
              <RadioGroupPanel
                name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
                label={<FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" />}
                validate={[required]}
                isReadOnly={readOnly}
                isHorizontal
                isTrueOrFalseSelection
                radios={[{
                  label: <FormattedMessage id="Registrering.Frilans.Yes" />,
                  value: 'true',
                }, {
                  label: <FormattedMessage id="Registrering.Frilans.No" />,
                  value: 'false',
                }]}
              />
              <VerticalSpacer sixteenPx />
              <FrilansOppdragForFamiliePanel readOnly={readOnly} />
            </ArrowBox>
          </>
        ),
      }]}
    />
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
