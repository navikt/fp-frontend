import { Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import { Gender, GenderIcon } from '@navikt/ft-plattform-komponenter';

import type { NavBrukerKjønn, Person } from '@navikt/fp-types';

import { Aldersvisning } from './Aldersvisning';
import { MerkePanel } from './Merkepanel';

interface Props {
  person: Person;
}

export const PersonInfo = ({
  person: { kjønn, dødsdato, diskresjonskode, fødselsdato, navn, fødselsnummer },
}: Props) => (
  <HStack gap="space-16" align="center">
    <GenderIcon gender={getGender(kjønn)} size={40} />
    <HStack gap="space-16" align="baseline">
      <VStack>
        <Heading size="small" level="2">
          {navn} <Aldersvisning erDød={!!dødsdato} fødselsdato={fødselsdato} />
        </Heading>
        <Detail>{formaterFnr(fødselsnummer)}</Detail>
      </VStack>
      <MerkePanel diskresjonskode={diskresjonskode} dødsdato={dødsdato} />
    </HStack>
  </HStack>
);

const getGender = (kjønn: NavBrukerKjønn | undefined) => {
  if (kjønn === 'K') {
    return Gender.female;
  }
  return kjønn === 'M' ? Gender.male : Gender.unknown;
};

const formaterFnr = (fnr: string) => {
  return fnr.slice(0, 6) + ' ' + fnr.slice(6);
};
