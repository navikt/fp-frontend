import { useIntl } from 'react-intl';

import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import { erPersonAdresserLike, FaktaKilde, Personopplysninger } from '@navikt/fp-fakta-felles';
import { type AlleKodeverk, type Personoversikt } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort.tsx';


interface Props {
  personoversikt: Personoversikt;
  alleKodeverk: AlleKodeverk;
}

export const OpplysningerOmAdresser = ({
                                         personoversikt: { bruker, annenPart, barn },
                                         alleKodeverk,
                                       }: Props) => {
  const intl = useIntl();

  const annenpartAdresser = annenPart?.adresser ?? [];
  const barnAdresser = barn?.flatMap(b => b.adresser) ?? [];
  return (
    <EkspansjonsKort
      tittel={intl.formatMessage(
        { id: 'OpplysningsKort.AdresseTittel' },
        {
          adresseCountSoker: bruker.adresser.length,
          adresseCountAnnenpart: annenpartAdresser.length > 0 ? annenpartAdresser.length : 'none',
          adresseCountBarn: barnAdresser.length > 0 ? barnAdresser.length : 'none',
        },
      )}
      kilde={FaktaKilde.FREG}
    >
      <Personopplysninger
        showIcon={false}
        alleKodeverk={alleKodeverk}
        rolle="BRUKER"
        navn={bruker.navn}
        adresser={bruker.adresser}
      />

      {annenPart && annenPart.adresser.length > 0 && <AvsnittSkiller dividerParagraf />}
      {annenPart && annenPart.adresser.length > 0 && (
        <Personopplysninger
          showIcon={false}
          navn={annenPart.navn}
          alleKodeverk={alleKodeverk}
          adresser={annenPart.adresser}
          rolle="ANNEN_PART"
          harSammeAdresser={erPersonAdresserLike(bruker.adresser, annenPart.adresser)}
        />
      )}
      {barn && <AvsnittSkiller dividerParagraf />}
      {barn && barn.map(b => <Personopplysninger key={b.aktoerId} {...b} alleKodeverk={alleKodeverk} rolle="BARN" />)}
    </EkspansjonsKort>
  );
};
