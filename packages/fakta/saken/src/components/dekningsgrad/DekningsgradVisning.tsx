import { FormattedMessage } from 'react-intl';

import { Box, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { Gender, GenderIcon } from '@navikt/ft-plattform-komponenter';
import { dateFormat } from '@navikt/ft-utils';

interface PartBoxProps {
  navn: string;
  kjønn: string;
  søknadsdato: string;
  dekningsgrad: number | undefined;
}

export const DekningsgradVisning = ({ navn, kjønn, søknadsdato, dekningsgrad }: PartBoxProps) => (
  <Box background="brand-blue-moderate" padding="space-20" borderColor="neutral" borderRadius="4">
    <VStack gap="space-8">
      <HStack gap="space-16" align="center">
        <GenderIcon gender={finnIkonForKjønn(kjønn)} />
        <VStack gap="space-0">
          <Label size="medium">{navn}</Label>
          <Detail>
            <FormattedMessage
              id="DekningradAP.SøknadSendt"
              values={{ dato: dateFormat(søknadsdato, { month: 'long' }) }}
            />
          </Detail>
        </VStack>
      </HStack>
      <Label size="medium">
        <FormattedMessage id="DekningradAP.HarValgt" values={{ dekningsgrad }} />
      </Label>
    </VStack>
  </Box>
);

const finnIkonForKjønn = (kjonn: string) => {
  if (kjonn === 'K') {
    return Gender.female;
  }
  return kjonn === 'M' ? Gender.male : Gender.unknown;
};
