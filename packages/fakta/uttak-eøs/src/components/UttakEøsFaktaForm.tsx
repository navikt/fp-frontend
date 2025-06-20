import { FormattedMessage } from 'react-intl';

import { Heading, HStack, VStack } from '@navikt/ds-react';

import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

import { UttakEøsFaktaTable } from './UttakEøsFaktaTable';

interface Props {
  annenForelderUttakEøs?: AnnenforelderUttakEøsPeriode[];
  kanOverstyre: boolean;
  submittable: boolean;
}

export const UttakESFaktaForm = ({ annenForelderUttakEøs }: Props) => {
  //const intl = useIntl();

  return (
    <VStack gap="8">
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="UttakFaktaForm.FaktaUttakEos" />
        </Heading>
      </HStack>
      {annenForelderUttakEøs && <UttakEøsFaktaTable annenForelderUttakEøs={annenForelderUttakEøs} />}
    </VStack>
  );
};
