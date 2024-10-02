import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Label, BodyShort, Heading, VStack } from '@navikt/ds-react';

import { DateLabel, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, navBrukerKjonn, AdresseType } from '@navikt/fp-kodeverk';
import { PersonopplysningerBasis, Personoversikt } from '@navikt/fp-types';
import { formaterAdresse } from '@navikt/fp-fakta-felles';

const lagSøkerdata = ({ aktoerId, navn, kjønn, adresser, dødsdato }: PersonopplysningerBasis) => {
  const postadr = adresser.find(adresse => adresse.adresseType === AdresseType.POSTADRESSE);
  const bostedsadr = adresser.find(adresse => adresse.adresseType === AdresseType.BOSTEDSADRESSE);

  return {
    aktorId: aktoerId,
    navn: navn,
    dodsdato: dødsdato,
    adresse: postadr || bostedsadr,
    erMor: kjønn === navBrukerKjonn.KVINNE,
  };
};

interface OwnProps {
  personoversikt: Personoversikt;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * ForeldrePanel
 *
 * Presentasjonskomponent. Brukes i tilknytning til faktapanel for omsorg.
 */
const ForeldrePanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  personoversikt,
  alleMerknaderFraBeslutter,
}) => {
  const beggeForeldre = useMemo(() => {
    const f = [lagSøkerdata(personoversikt.bruker)];
    if (personoversikt.annenPart) {
      f.push(lagSøkerdata(personoversikt.annenPart));
    }
    return f;
  }, []);

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'ForeldrePanel.Foreldre' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.OMSORGSOVERTAKELSE]}
    >
      <VStack gap="8">
        {beggeForeldre.map(foreldre => {
          return (
            <VStack gap="2" key={`${foreldre.aktorId}`}>
              <Heading size="small">{foreldre.navn}</Heading>
              <Label size="small">
                <FormattedMessage id="ForeldrePanel.Address" />
              </Label>
              <BodyShort size="small">
                {foreldre.adresse && !foreldre.dodsdato ? formaterAdresse(foreldre.adresse) : '-'}
              </BodyShort>
              {foreldre.dodsdato && (
                <>
                  <Label size="small">
                    <FormattedMessage id="ForeldrePanel.DeathDate" />
                  </Label>
                  <BodyShort size="small">
                    <DateLabel dateString={foreldre.dodsdato} />
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

export default ForeldrePanel;
