import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, Heading, VStack } from '@navikt/ds-react';
import { ArrowBox, BorderBox } from '@navikt/ft-ui-komponenter';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { FRILANS_NAME_PREFIX } from '../constants';
import type { FrilansFormValues } from '../types';
import { FrilansOppdragForFamiliePanel } from './FrilansOppdragForFamiliePanel';
import { FrilansPerioderFieldArray } from './FrilansPerioderFieldArray';

export const FrilansPanel = () => {
  const { control } = useFormContext<FrilansFormValues>();
  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="Registrering.Frilans.Title" />
        </Heading>

        <TrueFalseInput
          name={`${FRILANS_NAME_PREFIX}.harSøkerPeriodeMedFrilans`}
          control={control}
          label={<FormattedMessage id="Registrering.Frilans.HarFrilansvirksomhet" />}
          trueContent={
            <ArrowBox>
              <VStack gap="space-16">
                <Detail>
                  <FormattedMessage id="Registrering.Frilans.OppgiPeriode" />
                </Detail>

                <FrilansPerioderFieldArray />

                <TrueFalseInput
                  name={`${FRILANS_NAME_PREFIX}.erNyoppstartetFrilanser`}
                  control={control}
                  label={<FormattedMessage id="Registrering.Frilans.ErNyoppstartedFrilanser" />}
                />

                <TrueFalseInput
                  name={`${FRILANS_NAME_PREFIX}.harInntektFraFosterhjem`}
                  control={control}
                  label={<FormattedMessage id="Registrering.Frilans.HarInntektFraForsterhjem" />}
                />

                <FrilansOppdragForFamiliePanel />
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

FrilansPanel.transformValues = ({ frilans }: FrilansFormValues) => ({
  [FRILANS_NAME_PREFIX]:
    frilans.harSøkerPeriodeMedFrilans === false
      ? {
          harSøkerPeriodeMedFrilans: false,
        }
      : {
          harSøkerPeriodeMedFrilans: true,
          perioder: frilans.perioder,
          erNyoppstartetFrilanser: frilans.erNyoppstartetFrilanser,
          harInntektFraFosterhjem: frilans.harInntektFraFosterhjem,
          ...FrilansOppdragForFamiliePanel.transformValues(frilans),
        },
});
