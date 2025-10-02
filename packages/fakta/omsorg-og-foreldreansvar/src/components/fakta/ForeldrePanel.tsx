import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { formaterAdresse, getNyesteAdresse } from '@navikt/fp-fakta-felles';
import type { PersonopplysningerBasis, Personoversikt } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  personoversikt: Personoversikt;
}

export const ForeldrePanel = ({ personoversikt }: Props) => {
  const intl = useIntl();

  const beggeForeldre = [
    lagSøkerdata(personoversikt.bruker),
    ...(personoversikt.annenPart ? [lagSøkerdata(personoversikt.annenPart)] : []),
  ];

  return (
    <FaktaKort label={intl.formatMessage({ id: 'ForeldrePanel.Tittel' })}>
      <VStack gap="space-16">
        {beggeForeldre.map(forelder => (
          <VStack gap="space-8" key={`${forelder.aktoerId}`}>
            <Heading size="small" level="3">
              {forelder.navn}
            </Heading>
            {forelder.dødsdato ? (
              <ReadOnlyField
                size="medium"
                label={<FormattedMessage id="ForeldrePanel.Dødsdato" />}
                value={<DateLabel dateString={forelder.dødsdato} />}
              />
            ) : (
              <ReadOnlyField
                size="medium"
                label={<FormattedMessage id="ForeldrePanel.Address" />}
                value={forelder.adresse ? formaterAdresse(forelder.adresse) : '-'}
              />
            )}
          </VStack>
        ))}
      </VStack>
    </FaktaKort>
  );
};

const lagSøkerdata = ({ aktoerId, navn, adresser, dødsdato }: PersonopplysningerBasis) => {
  const postadr = getNyesteAdresse(adresser, 'POSTADRESSE');
  const bostedsadr = getNyesteAdresse(adresser, 'BOSTEDSADRESSE');

  return {
    aktoerId,
    navn,
    dødsdato,
    adresse: postadr ?? bostedsadr,
  };
};
