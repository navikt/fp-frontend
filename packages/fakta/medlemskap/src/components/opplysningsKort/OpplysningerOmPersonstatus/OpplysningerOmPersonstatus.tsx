import { FormattedMessage } from 'react-intl';

import { Box, Detail, HGrid, Label, VStack } from '@navikt/ds-react';

import { type AlleKodeverk, type Medlemskap, type MedlemskapAvvik } from '@navikt/fp-types';

import { EkspansjonsKort } from '../../ekspansjonsKort/EkspansjonsKort';
import { relevantForPersonstatus } from '../../ekspansjonsKort/medlemsAvvik';
import { PersonstatusVisning } from './PersonstatusVisning';
import { RegionVisning } from './RegionVisning';

interface Props {
  medlemskap: Medlemskap;
  avvik: MedlemskapAvvik[];
  brukerNavn: string;
  annenpartNavn?: string;
  alleKodeverk: AlleKodeverk;
  skalViseAvvik: boolean;
}

export const OpplysningerOmPersonstatus = ({
  avvik,
  medlemskap: { regioner, personstatuser, annenpart },
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  skalViseAvvik,
}: Props) => {
  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={<FormattedMessage id="OpplysningsKort.PersonstatusTittel" values={{ harAnnenpart: !!annenpart }} />}
      kilde="FOLKEREGISTER"
      relevanteAvvik={avvik.filter(a => relevantForPersonstatus.includes(a))}
    >
      <VStack gap="space-16">
        <Detail>
          <FormattedMessage id="OpplysningerOmPersonstatus.Beskrivelse" />
        </Detail>
        <HGrid columns={{ xs: 1, lg: annenpart ? 2 : 1 }} gap="space-16">
          <Box background="neutral-moderate" padding="space-16" borderRadius="8">
            <VStack gap="space-16" aria-label={`Personstatus og statsborgerskap for ${brukerNavn}`}>
              <Label>
                <FormattedMessage id="OpplysningerOmPersonstatus.Soker" values={{ navn: brukerNavn }} />
              </Label>
              <PersonstatusVisning personstatuser={personstatuser} alleKodeverk={alleKodeverk} />
              <RegionVisning regioner={regioner} alleKodeverk={alleKodeverk} />
            </VStack>
          </Box>
          {annenpart && (
            <Box background="neutral-moderate" padding="space-16" borderRadius="8">
              <VStack gap="space-16" aria-label={`Personstatus og statsborgerskap for ${annenpartNavn}`}>
                <Label>
                  <FormattedMessage
                    id="OpplysningerOmPersonstatus.Annenpart"
                    values={{ navn: annenpartNavn ?? 'none' }}
                  />
                </Label>
                <PersonstatusVisning
                  personstatuser={annenpart.personstatuser}
                  alleKodeverk={alleKodeverk}
                  erAnnenpart
                />
                <RegionVisning regioner={annenpart.regioner} alleKodeverk={alleKodeverk} erAnnenpart />
              </VStack>
            </Box>
          )}
        </HGrid>
      </VStack>
    </EkspansjonsKort>
  );
};
