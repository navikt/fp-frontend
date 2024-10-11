import React, { FC } from 'react';
import { AlleKodeverk, MedlemskapAvvik, Medlemskap } from '@navikt/fp-types';
import { useIntl } from 'react-intl';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import { erPersonAdresserLike, FaktaKilde, Personopplysninger } from '@navikt/fp-fakta-felles';

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
      <Personopplysninger
        showIcon={false}
        alleKodeverk={alleKodeverk}
        rolle="BRUKER"
        navn={brukerNavn}
        adresser={brukerAdresser}
      />

      {annenpart && <AvsnittSkiller dividerParagraf />}
      {annenpart && (
        <Personopplysninger
          showIcon={false}
          navn={annenpartNavn}
          alleKodeverk={alleKodeverk}
          adresser={annenpartAdresser}
          rolle="ANNEN_PART"
          harSammeAdresser={annenpart.adresser.length > 0 && erPersonAdresserLike(brukerAdresser, annenpartAdresser)}
        />
      )}
    </EkspansjonsKort>
  );
};

export default OpplysningerOmAdresser;
