import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { PersonopplysningerBasis } from '@navikt/fp-types';
import { opplysningAdresseType } from '@navikt/fp-kodeverk';

interface OwnProps {
  personopplysninger: PersonopplysningerBasis;
}

const AdresseVisning: FunctionComponent<OwnProps> = ({ personopplysninger }) => {
  const postadr = personopplysninger.adresser.find(
    adresse => adresse.adresseType === opplysningAdresseType.POSTADRESSE,
  );
  const bostedsadr = personopplysninger.adresser.find(
    adresse => adresse.adresseType === opplysningAdresseType.BOSTEDSADRESSE,
  );
  if (!postadr && !bostedsadr) {
    return null;
  }

  const adr = postadr || bostedsadr;

  return (
    <>
      <Label size="small">
        <FormattedMessage id="PersonInfoPanel.Adresse" />
      </Label>
      <VerticalSpacer fourPx />
      <BodyShort size="small">{adr.adresselinje1}</BodyShort>
      <VerticalSpacer fourPx />
      {adr.adresselinje2 && (
        <>
          <BodyShort size="small">{adr.adresselinje2}</BodyShort>
          <VerticalSpacer fourPx />
        </>
      )}
      {adr.adresselinje3 && (
        <>
          <BodyShort size="small">{adr.adresselinje3}</BodyShort>
          <VerticalSpacer fourPx />
        </>
      )}
      <BodyShort size="small">{`${adr.postNummer} ${adr.poststed}, ${adr.land}`}</BodyShort>
    </>
  );
};

export default AdresseVisning;
