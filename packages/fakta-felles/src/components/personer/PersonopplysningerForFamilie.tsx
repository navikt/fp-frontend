import React from 'react';

import { VStack } from '@navikt/ds-react';

import { AlleKodeverk, Personoversikt } from '@navikt/fp-types';

import { Personopplysninger } from './Personopplysninger';

interface Props {
  alleKodeverk: AlleKodeverk;
  personoversikt: Personoversikt;
}

export const PersonopplysningerForFamilie = ({ personoversikt: { barn, bruker, annenPart }, alleKodeverk }: Props) => {
  return (
    <VStack gap="2">
      {barn.map(b => (
        <Personopplysninger key={b.aktoerId} {...b} alleKodeverk={alleKodeverk} rolle="BARN" />
      ))}
      <Personopplysninger rolle="BRUKER" alleKodeverk={alleKodeverk} {...bruker} />
      {annenPart && <Personopplysninger {...annenPart} rolle="ANNEN_PART" alleKodeverk={alleKodeverk} />}
    </VStack>
  );
};
