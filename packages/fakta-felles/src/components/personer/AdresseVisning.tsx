import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Label, BodyShort, VStack } from '@navikt/ds-react';
import { Personadresse } from '@navikt/fp-types';
import { AdresseType } from '@navikt/fp-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';
import { getNyesteAdresse } from '../../utils/adresseUtils';

const intl = createIntl(messages);

interface Props {
  adresser: Personadresse[];
}

export const AdresseVisning: FunctionComponent<Props> = ({ adresser }) => {
  const postadr = getNyesteAdresse(adresser, AdresseType.POSTADRESSE);
  const bostedsadr = getNyesteAdresse(adresser, AdresseType.BOSTEDSADRESSE);
  if (!postadr && !bostedsadr) {
    return null;
  }

  const adr = postadr || bostedsadr || {};

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="1">
        <Label size="small">
          <FormattedMessage id="AdresseVisning.Adresse" />
        </Label>
        <BodyShort size="small">{adr.adresselinje1}</BodyShort>
        {adr.adresselinje2 && <BodyShort size="small">{adr.adresselinje2}</BodyShort>}
        {adr.adresselinje3 && <BodyShort size="small">{adr.adresselinje3}</BodyShort>}
        <BodyShort size="small">{`${adr.postNummer} ${adr.poststed}, ${adr.land}`}</BodyShort>
      </VStack>
    </RawIntlProvider>
  );
};
