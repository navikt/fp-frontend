import React from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { BodyShort, Box, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { AlleKodeverk, KjønnkodeEnum, Personadresse } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { createIntl, dateFormat } from '@navikt/ft-utils';

import { Gender, GenderIcon } from '@navikt/ft-plattform-komponenter';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import messages from '../../../i18n/nb_NO.json';
import { AdresseTabell } from '../adresser/AdresseTabell';

const intl = createIntl(messages);

interface Props {
  rolle?: 'BARN' | 'BRUKER' | 'ANNEN_PART';
  alleKodeverk: AlleKodeverk;
  harSammeAdresser?: boolean;
  navn?: string;
  sivilstand?: string;
  dødsdato?: string;
  fødselsdato?: string;
  adresser: Personadresse[];
  kjønn?: string;
}

const hentKjønn = (kjønn: string | undefined): Gender => {
  switch (kjønn) {
    case KjønnkodeEnum.KVINNE:
      return Gender.female;
    case KjønnkodeEnum.MANN:
      return Gender.male;
    default:
      return Gender.unknown;
  }
};

export const Personopplysninger = ({
  rolle = 'BRUKER',
  alleKodeverk,
  harSammeAdresser,
  navn,
  kjønn,
  sivilstand,
  fødselsdato,
  dødsdato,
  adresser,
}: Props) => {
  const isChild = rolle === 'BARN';
  return (
    <RawIntlProvider value={intl}>
      <Box background="bg-subtle" padding="4" borderRadius="large">
        <VStack gap="1">
          <HStack gap="5">
            <div>
              <GenderIcon gender={hentKjønn(kjønn)} isChild={isChild} />
            </div>
            <div>
              <HStack gap="4">
                <Label>
                  <FormattedMessage id="PersonPanel.RolleOgNavn" values={{ rolle, navn }} />
                </Label>
                {isChild && fødselsdato && !dødsdato && (
                  <BodyShort>
                    <FormattedMessage id="PersonPanel.Fodt" values={{ dato: dateFormat(fødselsdato) }} />
                  </BodyShort>
                )}
                {dødsdato && (
                  <BodyShort>
                    <FormattedMessage id="PersonPanel.Dod" values={{ dato: dateFormat(dødsdato) }} />
                  </BodyShort>
                )}
              </HStack>
              {!isChild && sivilstand && (
                <Detail>{alleKodeverk[KodeverkType.SIVILSTAND_TYPE].find(s => s.kode === sivilstand)?.navn}</Detail>
              )}
            </div>
          </HStack>
          <Detail>
            <FormattedMessage id="PersonPanel.Beskrivelse" values={{ rolle, navn }} />
          </Detail>
          <AdresseTabell
            harSammeAdresser={harSammeAdresser}
            adresser={adresser}
            adresseKodeverk={alleKodeverk[KodeverkType.ADRESSE_TYPE]}
          />
        </VStack>
      </Box>
    </RawIntlProvider>
  );
};
