import { useId } from 'react';
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
  const sokerLabelId = useId();
  const annenpartLabelId = useId();

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
        <HGrid columns="repeat(auto-fit, minmax(min(100%, 40rem), 1fr))" gap="space-16">
          <Box
            background="neutral-moderate"
            padding="space-16"
            borderRadius="8"
            className="row-span-3 grid grid-rows-subgrid"
            aria-labelledby={sokerLabelId}
          >
            <Label id={sokerLabelId}>
              <FormattedMessage id="OpplysningerOmPersonstatus.Soker" values={{ navn: brukerNavn }} />
            </Label>
            <div>
              <PersonstatusVisning personstatuser={personstatuser} alleKodeverk={alleKodeverk} />
            </div>
            <div>
              <RegionVisning regioner={regioner} alleKodeverk={alleKodeverk} />
            </div>
          </Box>
          {annenpart && (
            <Box
              background="neutral-moderate"
              padding="space-16"
              borderRadius="8"
              className="row-span-3 grid grid-rows-subgrid"
              aria-labelledby={annenpartLabelId}
            >
              <Label id={annenpartLabelId}>
                <FormattedMessage
                  id="OpplysningerOmPersonstatus.Annenpart"
                  values={{ navn: annenpartNavn ?? 'none' }}
                />
              </Label>
              <div>
                <PersonstatusVisning
                  personstatuser={annenpart.personstatuser}
                  alleKodeverk={alleKodeverk}
                  erAnnenpart
                />
              </div>
              <div>
                <RegionVisning regioner={annenpart.regioner} alleKodeverk={alleKodeverk} erAnnenpart />
              </div>
            </Box>
          )}
        </HGrid>
      </VStack>
    </EkspansjonsKort>
  );
};
