import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, Heading, VStack } from '@navikt/ds-react';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { FRILANS_NAME_PREFIX } from '../constants';
import type { FrilansFormValues } from '../types';
import { FrilansOppdragForFamiliePanel } from './FrilansOppdragForFamiliePanel';
import { FrilansPerioderFieldArray } from './FrilansPerioderFieldArray';

interface Props {
  readOnly: boolean;
}

export const FrilansPanel = ({ readOnly }: Props) => {
  const { control } = useFormContext<FrilansFormValues>();
  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="Registrering.Frilans.Title" />
        </Heading>

        <TrueFalseInput
          name={`${FRILANS_NAME_PREFIX}.harSokerPeriodeMedFrilans`}
          control={control}
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
                  control={control}
                  label={<FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" />}
                  readOnly={readOnly}
                />

                <TrueFalseInput
                  name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
                  control={control}
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
};

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
