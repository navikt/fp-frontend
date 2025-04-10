import { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';
import { DateLabel, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { formaterAdresse, getNyesteAdresse } from '@navikt/fp-fakta-felles';
import { AdresseType, AksjonspunktKode, NavBrukerKjonn } from '@navikt/fp-kodeverk';
import type { PersonopplysningerBasis, Personoversikt } from '@navikt/fp-types';

const lagSøkerdata = ({ aktoerId, navn, kjønn, adresser, dødsdato }: PersonopplysningerBasis) => {
  const postadr = getNyesteAdresse(adresser, AdresseType.POSTADRESSE);
  const bostedsadr = getNyesteAdresse(adresser, AdresseType.BOSTEDSADRESSE);

  return {
    aktoerId,
    navn,
    dødsdato,
    adresse: postadr ?? bostedsadr,
    erMor: kjønn === NavBrukerKjonn.KVINNE,
  };
};

interface Props {
  personoversikt: Personoversikt;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * ForeldrePanel
 *
 * Presentasjonskomponent. Brukes i tilknytning til faktapanel for omsorg.
 */
export const ForeldrePanel = ({ personoversikt, alleMerknaderFraBeslutter }: Props) => {
  const intl = useIntl();
  const beggeForeldre = useMemo(() => {
    const f = [lagSøkerdata(personoversikt.bruker)];
    if (personoversikt.annenPart) {
      f.push(lagSøkerdata(personoversikt.annenPart));
    }
    return f;
  }, [personoversikt]);

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'ForeldrePanel.Foreldre' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <VStack gap="8">
        {beggeForeldre.map(foreldre => {
          return (
            <VStack gap="2" key={`${foreldre.aktoerId}`}>
              <Heading size="small">{foreldre.navn}</Heading>
              <Label size="small">
                <FormattedMessage id="ForeldrePanel.Address" />
              </Label>
              <BodyShort size="small">
                {foreldre.adresse && !foreldre.dødsdato ? formaterAdresse(foreldre.adresse) : '-'}
              </BodyShort>
              {foreldre.dødsdato && (
                <>
                  <Label size="small">
                    <FormattedMessage id="ForeldrePanel.DeathDate" />
                  </Label>
                  <BodyShort size="small">
                    <DateLabel dateString={foreldre.dødsdato} />
                  </BodyShort>
                </>
              )}
            </VStack>
          );
        })}
      </VStack>
    </FaktaGruppe>
  );
};
