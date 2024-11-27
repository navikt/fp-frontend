import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Detail, Heading } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  FormValues as FormValuesOppdragForFamilie,
  FrilansOppdragForFamiliePanel,
} from './FrilansOppdragForFamiliePanel';
import { FormValues as PerioderFormValues,FrilansPerioderFieldArray } from './FrilansPerioderFieldArray';

export const FRILANS_NAME_PREFIX = 'frilans';

export type FormValues = {
  harSokerPeriodeMedFrilans?: boolean;
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
} & FormValuesOppdragForFamilie &
  PerioderFormValues;

interface Props {
  readOnly: boolean;
}

export const FrilansPanel = ({ readOnly }: Props) => (
  <BorderBox>
    <Heading size="small">
      <FormattedMessage id="Registrering.Frilans.Title" />
    </Heading>
    <VerticalSpacer sixteenPx />
    <RadioGroupPanel
      name={`${FRILANS_NAME_PREFIX}.harSokerPeriodeMedFrilans`}
      label={<FormattedMessage id="Registrering.Frilans.HarFrilansvirksomhet" />}
      validate={[required]}
      isReadOnly={readOnly}
      isTrueOrFalseSelection
      radios={[
        {
          label: <FormattedMessage id="Registrering.Frilans.No" />,
          value: 'false',
        },
        {
          label: <FormattedMessage id="Registrering.Frilans.Yes" />,
          value: 'true',
          element: (
            <>
              <VerticalSpacer eightPx />
              <ArrowBox>
                <Detail>
                  <FormattedMessage id="Registrering.Frilans.OppgiPeriode" />
                </Detail>
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
                  radios={[
                    {
                      label: <FormattedMessage id="Registrering.Frilans.Yes" />,
                      value: 'true',
                    },
                    {
                      label: <FormattedMessage id="Registrering.Frilans.No" />,
                      value: 'false',
                    },
                  ]}
                />
                <VerticalSpacer sixteenPx />
                <RadioGroupPanel
                  name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
                  label={<FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" />}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[
                    {
                      label: <FormattedMessage id="Registrering.Frilans.Yes" />,
                      value: 'true',
                    },
                    {
                      label: <FormattedMessage id="Registrering.Frilans.No" />,
                      value: 'false',
                    },
                  ]}
                />
                <VerticalSpacer sixteenPx />
                <FrilansOppdragForFamiliePanel readOnly={readOnly} />
              </ArrowBox>
            </>
          ),
        },
      ]}
    />
  </BorderBox>
);

FrilansPanel.buildInitialValues = (): FormValues => ({
  ...FrilansOppdragForFamiliePanel.buildInitialValues(),
  perioder: [
    {
      periodeFom: '',
      periodeTom: '',
    },
  ],
});

FrilansPanel.transformValues = (formValues: FormValues): FormValues =>
  formValues.harSokerPeriodeMedFrilans
    ? formValues
    : {
        harSokerPeriodeMedFrilans: formValues.harSokerPeriodeMedFrilans,
      };
