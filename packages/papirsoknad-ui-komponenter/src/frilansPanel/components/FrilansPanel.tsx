import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, Heading, VStack } from '@navikt/ds-react';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';

import { FrilansPerioderFieldArray } from './FrilansPerioderFieldArray';
import { FrilansOppdragForFamiliePanel } from './FrilansOppdragForFamiliePanel';

import { FrilansFormValues } from '../types';
import { FRILANS_NAME_PREFIX } from '../constants';
import { TrueFalseInput } from '../../felles/TrueFalseInput';

interface Props {
  readOnly: boolean;
}

export const FrilansPanel = ({ readOnly }: Props) => (
  <BorderBox>
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id="Registrering.Frilans.Title" />
      </Heading>

      <TrueFalseInput
        name={`${FRILANS_NAME_PREFIX}.harSokerPeriodeMedFrilans`}
        label={<FormattedMessage id="Registrering.Frilans.HarFrilansvirksomhet" />}
        readOnly={readOnly}
        trueContent={
          <ArrowBox marginTop={8}>
            <VStack gap="4">
              <Detail>
                <FormattedMessage id="Registrering.Frilans.OppgiPeriode" />
              </Detail>

              <FrilansPerioderFieldArray readOnly={readOnly} />

              <TrueFalseInput
                name={`${FRILANS_NAME_PREFIX}.erNyoppstartetFrilanser`}
                label={<FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" />}
                readOnly={readOnly}
              />

              <TrueFalseInput
                name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
                label={<FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" />}
                readOnly={readOnly}
              />

              <FrilansOppdragForFamiliePanel readOnly={readOnly} />
            </VStack>
          </ArrowBox>
        }
      />
    </VStack>
  </BorderBox>
);

FrilansPanel.initialValues = (): FrilansFormValues => ({
  [FRILANS_NAME_PREFIX]: {
    ...FrilansPerioderFieldArray.initialValues(),
    ...FrilansOppdragForFamiliePanel.initialValues(),
  },
});

FrilansPanel.transformValues = ({ frilans }: FrilansFormValues): FrilansFormValues => ({
  [FRILANS_NAME_PREFIX]:
    frilans.harSokerPeriodeMedFrilans === false
      ? {
          harSokerPeriodeMedFrilans: false,
        }
      : {
          harSokerPeriodeMedFrilans: true,
          perioder: frilans.perioder,
          erNyoppstartetFrilanser: frilans.erNyoppstartetFrilanser,
          harInntektFraFosterhjem: frilans.harInntektFraFosterhjem,
          ...FrilansOppdragForFamiliePanel.transformValues(frilans),
        },
});
