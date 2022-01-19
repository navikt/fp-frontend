import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';

import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { getAddresses } from '@fpsak-frontend/utils';
import { DateLabel, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { PersonopplysningerBasis, Personoversikt } from '@fpsak-frontend/types';

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
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
    >
      {beggeForeldre.map((foreldre) => {
        const shouldShowAdress = foreldre.adresse && !foreldre.dodsdato;
        const parentHeader = getParentHeader(foreldre.erMor);
        return (
          <div key={`${foreldre.aktorId}`}>
            <Undertittel>{foreldre.navn}</Undertittel>
            <VerticalSpacer eightPx />
            <Normaltekst><FormattedMessage id="ForeldrePanel.Address" /></Normaltekst>
            {shouldShowAdress
              && <Element>{foreldre.adresse}</Element>}
            {!shouldShowAdress
              && <Normaltekst> - </Normaltekst>}
            <VerticalSpacer eightPx />
            <Normaltekst><FormattedMessage id={parentHeader} /></Normaltekst>
            {foreldre.dodsdato
              && <Element><DateLabel dateString={foreldre.dodsdato} /></Element>}
            {!foreldre.dodsdato
              && <Normaltekst> - </Normaltekst>}
            <VerticalSpacer sixteenPx />
          </div>
        );
      })}
    </FaktaGruppe>
  );
};

export default ForeldrePanel;
