import { FormattedMessage, useIntl } from 'react-intl';

import { Detail, Label, VStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import { type AlleKodeverk, type Medlemskap, MedlemskapAvvik } from '@navikt/fp-types';

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
  const intl = useIntl();

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={intl.formatMessage({ id: 'OpplysningsKort.PersonstatusTittel' }, { harAnnenpart: !!annenpart })}
      kilde="FOLKEREGISTER"
      relevanteAvvik={avvik.filter(a => relevantForPersonstatus.includes(a))}
    >
      <VStack gap="space-16" aria-label={`Personstatus og statsborgerskap for ${brukerNavn}`}>
        <Label>
          <FormattedMessage id="OpplysningerOmPersonstatus.Soker" values={{ navn: brukerNavn }} />
        </Label>
        <Detail>
          <FormattedMessage id="OpplysningerOmPersonstatus.Beskrivelse" />
        </Detail>
        <PersonstatusVisning personstatuser={personstatuser} alleKodeverk={alleKodeverk} />
        <RegionVisning regioner={regioner} alleKodeverk={alleKodeverk} />
      </VStack>

      {annenpart && (
        <>
          <AvsnittSkiller dividerParagraf />
          <VStack gap="space-16" aria-label={`Personstatus og statsborgerskap for ${annenpartNavn}`}>
            <Label>
              <FormattedMessage id="OpplysningerOmPersonstatus.Annenpart" values={{ navn: annenpartNavn ?? 'none' }} />
            </Label>
            <PersonstatusVisning personstatuser={annenpart.personstatuser} alleKodeverk={alleKodeverk} erAnnenpart />
            <RegionVisning regioner={annenpart.regioner} alleKodeverk={alleKodeverk} erAnnenpart />
          </VStack>
        </>
      )}
    </EkspansjonsKort>
  );
};
