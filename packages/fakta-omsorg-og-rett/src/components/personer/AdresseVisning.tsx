import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { PersonopplysningerBasis } from '@fpsak-frontend/types';
import { OpplysningAdresseType } from '@navikt/ft-kodeverk';

interface OwnProps {
  personopplysninger: PersonopplysningerBasis;
}

const AdresseVisning: FunctionComponent<OwnProps> = ({
  personopplysninger,
}) => {
  const postadr = personopplysninger.adresser.find((adresse) => adresse.adresseType === OpplysningAdresseType.POSTADRESSE);
  const bostedsadr = personopplysninger.adresser.find((adresse) => adresse.adresseType === OpplysningAdresseType.BOSTEDSADRESSE);
  if (!postadr && !bostedsadr) {
    return null;
  }

  const adr = postadr || bostedsadr;

  return (
    <>
      <Element>
        <FormattedMessage id="PersonInfoPanel.Adresse" />
      </Element>
      <VerticalSpacer fourPx />
      <Normaltekst>
        {adr.adresselinje1}
      </Normaltekst>
      <VerticalSpacer fourPx />
      {adr.adresselinje2 && (
        <>
          <Normaltekst>
            {adr.adresselinje2}
          </Normaltekst>
          <VerticalSpacer fourPx />
        </>
      )}
      {adr.adresselinje3 && (
        <>
          <Normaltekst>
            {adr.adresselinje3}
          </Normaltekst>
          <VerticalSpacer fourPx />
        </>
      )}
      <Normaltekst>
        {`${adr.postNummer} ${adr.poststed}, ${adr.land}`}
      </Normaltekst>
    </>
  );
};

export default AdresseVisning;
