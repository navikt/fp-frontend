import { useIntl } from 'react-intl';

import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import { erPersonAdresserLike, Personopplysninger } from '@navikt/fp-fakta-felles';
import { type AlleKodeverk, type Medlemskap, type MedlemskapAvvik } from '@navikt/fp-types';

import { EkspansjonsKort } from '../ekspansjonsKort/EkspansjonsKort';
import { relevantForAdresser } from '../ekspansjonsKort/medlemsAvvik';

interface Props {
  medlemskap: Medlemskap;
  avvik: MedlemskapAvvik[];
  brukerNavn: string;
  annenpartNavn?: string;
  alleKodeverk: AlleKodeverk;
  skalViseAvvik: boolean;
}

export const OpplysningerOmAdresser = ({
  avvik = [],
  medlemskap: { adresser, annenpart },
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  skalViseAvvik,
}: Props) => {
  const intl = useIntl();

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
      kilde="FOLKEREGISTER"
      relevanteAvvik={avvik.filter(a => relevantForAdresser.includes(a))}
    >
      <Personopplysninger
        showIcon={false}
        alleKodeverk={alleKodeverk}
        rolle="BRUKER"
        navn={brukerNavn}
        adresser={adresser}
      />

      {annenpart && <AvsnittSkiller dividerParagraf />}
      {annenpart && (
        <Personopplysninger
          showIcon={false}
          navn={annenpartNavn}
          alleKodeverk={alleKodeverk}
          adresser={annenpart.adresser}
          rolle="ANNEN_PART"
          harSammeAdresser={annenpart.adresser.length > 0 && erPersonAdresserLike(adresser, annenpart.adresser)}
        />
      )}
    </EkspansjonsKort>
  );
};
