import React, { FC } from 'react';
import { AdressePeriode, AlleKodeverk, KodeverkMedNavn, MedlemskapAvvik, Medlemskap } from '@navikt/fp-types';
import { BodyLong, Box, Detail, Label, Table } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AvsnittSkiller, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/fp-kodeverk';
import {
  AdresseTabell,
  erPersonAdresserLike,
  FaktaKilde,
  formaterAdresse,
  Personopplysninger,
  sorterPerioder,
} from '@navikt/fp-fakta-felles';

import EkspansjonsKort from '../ekspansjonsKort/EkspansjonsKort';
import { relevantForAdresser } from '../ekspansjonsKort/medlemsAvvik';

interface Props {
  medlemskap: Medlemskap;
  avvik: MedlemskapAvvik[];
  brukerNavn: string;
  annenpartNavn?: string;
  alleKodeverk: AlleKodeverk;
  skalViseAvvik: boolean;
}

const OpplysningerOmAdresser: FC<Props> = ({
  avvik = [],
  medlemskap: { adresser, annenpart },
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  skalViseAvvik,
}) => {
  const intl = useIntl();
  const brukerAdresser = adresser.map(ap => ap.adresse);
  const annenpartAdresser = annenpart?.adresser.map(ap => ap.adresse) ?? [];

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={intl.formatMessage(
        { id: 'OpplysningsKort.AdresseTittel' },
        {
          adresseCountSoker: adresser.length,
          adresseCountAnnenpart: annenpart?.adresser.length ?? 'none',
        },
      )}
      kilde={FaktaKilde.FREG}
      relevanteAvvik={avvik.filter(a => relevantForAdresser.includes(a))}
    >
      <Personopplysninger alleKodeverk={alleKodeverk} rolle="BRUKER" navn={brukerNavn} adresser={brukerAdresser} />

      {annenpart && <AvsnittSkiller dividerParagraf />}
      {annenpart && (
<<<<<<< Updated upstream
        <>
          <Label>
            <FormattedMessage id="OpplysningerOmAdresser.Annenpart" values={{ navn: annenpartNavn ?? 'none' }} />
          </Label>
          <Detail>
            <FormattedMessage id="OpplysningerOmAdresser.Annenpart.Beskrivelse" />
          </Detail>
          <AdresseTabell
            adresseKodeverk={alleKodeverk[KodeverkType.ADRESSE_TYPE]}
            adresser={annenpart.adresser}
            erAnnenpart
            harSammeAdresser={annenpart.adresser.length > 0 && erAdressePerioderLike(adresser, annenpart.adresser)}
          />
        </>
=======
        <Personopplysninger
          navn={annenpartNavn}
          alleKodeverk={alleKodeverk}
          adresser={annenpartAdresser}
          rolle="ANNEN_PART"
          harSammeAdresser={annenpart.adresser.length > 0 && erPersonAdresserLike(brukerAdresser, annenpartAdresser)}
        />
>>>>>>> Stashed changes
      )}
    </EkspansjonsKort>
  );
};

export default OpplysningerOmAdresser;
