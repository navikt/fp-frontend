import React, { FC } from 'react';
import { AlleKodeverk, MedlemskapAvvik, MedlemskapV3 } from '@navikt/fp-types';
import { Detail, Label, VStack } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';

import { FaktaKilde } from '../../../faktaKilde';
import { relevantForPersonstatus } from '../../ekspansjonsKort/medlemsAvvik';
import EkspansjonsKort from '../../ekspansjonsKort/EkspansjonsKort';
import { getPersonstatuserSomIkkeErBosatt } from '../../../utils/personstatusUtils';
import PersonstatusVisning from './PersonstatusVisning';
import RegionVisning from './RegionVisning';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

interface Props {
  medlemskap: MedlemskapV3;
  avvik: MedlemskapAvvik[];
  brukerNavn: string;
  annenpartNavn?: string;
  alleKodeverk: AlleKodeverk;
  skalViseAvvik: boolean;
}

const OpplysningerOmPersonstatus: FC<Props> = ({
  avvik,
  medlemskap: { regioner, personstatuser, annenpart },
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  skalViseAvvik,
}) => {
  const intl = useIntl();

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={intl.formatMessage({ id: 'OpplysningsKort.PersonstatusTittel' }, { harAnnenpart: !!annenpart })}
      kilde={FaktaKilde.FREG}
      relevanteAvvik={avvik.filter(a => relevantForPersonstatus.includes(a))}
      avvikValues={{
        personstatus: getPersonstatuserSomIkkeErBosatt(personstatuser),
      }}
    >
      <VStack gap="4" aria-label={`Personstatus og statsborgerskap for ${brukerNavn}`}>
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
          <VStack gap="4" aria-label={`Personstatus og statsborgerskap for ${annenpartNavn}`}>
            <Label>
              <FormattedMessage id="OpplysningerOmPersonstatus.Annenpart" values={{ navn: annenpartNavn }} />
            </Label>
            <PersonstatusVisning personstatuser={annenpart.personstatuser} alleKodeverk={alleKodeverk} erAnnenpart />
            <RegionVisning regioner={annenpart.regioner} alleKodeverk={alleKodeverk} erAnnenpart />
          </VStack>
        </>
      )}
    </EkspansjonsKort>
  );
};

export default OpplysningerOmPersonstatus;
