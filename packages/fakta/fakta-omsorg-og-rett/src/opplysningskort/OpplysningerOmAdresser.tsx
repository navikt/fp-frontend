import { useIntl } from 'react-intl';

import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import { FaktaKilde, Personopplysninger } from '@navikt/fp-fakta-felles';
import { type AlleKodeverk, type Personoversikt } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort.tsx';

interface Props {
  personoversikt: Personoversikt;
  alleKodeverk: AlleKodeverk;
}

export const OpplysningerOmAdresser = ({ personoversikt: { bruker, annenPart, barn }, alleKodeverk }: Props) => {
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
        sivilstand={bruker.sivilstand}
      />

      {annenPart && annenPart.adresser.length > 0 && (
        <>
          <AvsnittSkiller dividerParagraf />
          <Personopplysninger
            showIcon={false}
            navn={annenPart.navn}
            alleKodeverk={alleKodeverk}
            adresser={annenPart.adresser}
            sivilstand={annenPart.sivilstand}
            rolle="ANNEN_PART"
          />
        </>
      )}
      {barn && <AvsnittSkiller dividerParagraf />}
      {barn?.map(b => (
        <Personopplysninger
          key={b.aktoerId}
          showIcon={false}
          navn={b.navn}
          alleKodeverk={alleKodeverk}
          adresser={b.adresser}
          rolle="BARN"
        />
      ))}
    </EkspansjonsKort>
  );
};
