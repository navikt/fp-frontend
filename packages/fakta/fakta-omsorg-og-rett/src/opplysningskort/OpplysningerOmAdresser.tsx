import { useIntl } from 'react-intl';

import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import { erPersonAdresserLike, FaktaKilde, Personopplysninger } from '@navikt/fp-fakta-felles';
import { type AlleKodeverk, type Personoversikt } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort.tsx';

interface Props {
  alleKodeverk: AlleKodeverk;
  personoversikt: Personoversikt;
}

export const OpplysningerOmAdresser = ({ alleKodeverk, personoversikt: { bruker, annenPart, barn } }: Props) => {
  const intl = useIntl();
  const brukerAdresser = bruker.adresser;
  const annenpartAdresser = annenPart?.adresser ?? [];
  const barnAdresser = barn.flatMap(b => b.adresser);

  return (
    <EkspansjonsKort
      tittel={intl.formatMessage(
        { id: 'OpplysningsKort.AdresseTittel' },
        {
          adresseCountSoker: brukerAdresser.length,
          adresseCountAnnenpart: annenPart?.adresser.length ?? 'none',
          adresseCountBarn: barnAdresser.length,
        },
      )}
      kilde={FaktaKilde.FREG}
    >
      <Personopplysninger rolle="BRUKER" alleKodeverk={alleKodeverk} {...bruker} />

      {annenPart && <AvsnittSkiller dividerParagraf />}
      {annenPart && (
        <Personopplysninger
          {...annenPart}
          rolle="ANNEN_PART"
          alleKodeverk={alleKodeverk}
          harSammeAdresser={annenPart.adresser.length > 0 && erPersonAdresserLike(brukerAdresser, annenpartAdresser)}
        />
      )}

      {barn && <AvsnittSkiller dividerParagraf />}
      {barn && barn.map(b => <Personopplysninger key={b.aktoerId} {...b} alleKodeverk={alleKodeverk} rolle="BARN" />)}
    </EkspansjonsKort>
  );
};
