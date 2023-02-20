import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Label, BodyShort, Heading } from '@navikt/ds-react';

import { DateLabel, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, navBrukerKjonn, opplysningAdresseType } from '@navikt/fp-kodeverk';
import { PersonopplysningerBasis, Personoversikt } from '@navikt/fp-types';

import getAddresses from '../getAddresses';

const getParentHeader = (erMor: boolean): string => (erMor ? 'ForeldrePanel.MotherDeathDate' : 'ForeldrePanel.FatherDeathDate');

const lagSøkerdata = (personopplysninger: PersonopplysningerBasis) => {
  const addresses = getAddresses(personopplysninger.adresser);

  return {
    aktorId: personopplysninger.aktoerId,
    navn: personopplysninger.navn,
    dodsdato: personopplysninger.dødsdato,
    adresse: addresses[opplysningAdresseType.POSTADRESSE] || addresses[opplysningAdresseType.BOSTEDSADRESSE],
    erMor: personopplysninger.kjønn === navBrukerKjonn.KVINNE,
  };
};

interface OwnProps {
  personoversikt: Personoversikt;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
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
      {beggeForeldre.map((foreldre) => {
        const shouldShowAdress = foreldre.adresse && !foreldre.dodsdato;
        const parentHeader = getParentHeader(foreldre.erMor);
        return (
          <div key={`${foreldre.aktorId}`}>
            <Heading size="small">{foreldre.navn}</Heading>
            <VerticalSpacer eightPx />
            <BodyShort size="small"><FormattedMessage id="ForeldrePanel.Address" /></BodyShort>
            {shouldShowAdress
              && <Label size="small">{foreldre.adresse}</Label>}
            {!shouldShowAdress
              && <BodyShort size="small"> - </BodyShort>}
            <VerticalSpacer eightPx />
            <BodyShort size="small"><FormattedMessage id={parentHeader} /></BodyShort>
            {foreldre.dodsdato
              && <Label size="small"><DateLabel dateString={foreldre.dodsdato} /></Label>}
            {!foreldre.dodsdato
              && <BodyShort size="small"> - </BodyShort>}
            <VerticalSpacer sixteenPx />
          </div>
        );
      })}
    </FaktaGruppe>
  );
};

export default ForeldrePanel;
