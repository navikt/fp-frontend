import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, FeriepengegrunnlagAndel } from '@navikt/fp-types';

interface Props {
  alleAndeler: FeriepengegrunnlagAndel[];
  opptjeningsår: number;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FeriepengerPrÅr = ({ alleAndeler, opptjeningsår, alleKodeverk, arbeidsgiverOpplysningerPerId }: Props) => {
  if (!alleAndeler || alleAndeler.length < 1) {
    return null;
  }

  const alleAndelerForÅret = finnAlleAndelerForOpptjeningsår(alleAndeler, opptjeningsår);
  const andelerPrId = alleAndelerForÅret
    ? lagAndelerPrIdMap(alleAndelerForÅret, arbeidsgiverOpplysningerPerId, alleKodeverk)
    : [];

  return (
    <div>
      <Label size="small">
        <FormattedMessage id="TilkjentYtelse.Feriepenger.Opptjeningsår" values={{ år: opptjeningsår }} />
      </Label>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilkjentYtelse.Feriepenger.AndelNavn" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilkjentYtelse.Feriepenger.GrunnlagRefusjon" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="TilkjentYtelse.Feriepenger.GrunnlagSøker" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {andelerPrId.map(andel => (
            <Table.Row key={andel.identifikator}>
              <Table.DataCell>
                <BodyShort size="small">{andel.visningsnavn}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{andel.utbetaltIRefusjon}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{andel.utbetaltTilSøker}</BodyShort>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

const finnAlleAndelerForOpptjeningsår = (
  andeler: FeriepengegrunnlagAndel[],
  opptjeningsår: number,
): FeriepengegrunnlagAndel[] => andeler.filter(andel => andel.opptjeningsår === opptjeningsår);

const lagIdentifikator = (andel: FeriepengegrunnlagAndel): string => andel.aktivitetStatus + andel.arbeidsgiverId;

const lagVisningsnavn = (
  ferieAndel: FeriepengegrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
) => {
  const agOpplysning = ferieAndel.arbeidsgiverId ? arbeidsgiverOpplysningerPerId[ferieAndel.arbeidsgiverId] : undefined;
  if (agOpplysning) {
    if (agOpplysning.erPrivatPerson) {
      return `${agOpplysning.navn} (${dateFormat(agOpplysning.fødselsdato)})`;
    }
    return agOpplysning.identifikator ? `${agOpplysning.navn} (${agOpplysning.identifikator})` : agOpplysning.navn;
  }
  return ferieAndel.aktivitetStatus
    ? (alleKodeverk['AktivitetStatus'].find(({ kode }) => kode === ferieAndel.aktivitetStatus)?.navn ?? '')
    : '';
};

type AndelerPrId = {
  identifikator: string;
  visningsnavn: string;
  utbetaltTilSøker: number;
  utbetaltIRefusjon: number;
};

const lagAndelPrId = (
  ferieAndel: FeriepengegrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): AndelerPrId => ({
  identifikator: lagIdentifikator(ferieAndel),
  visningsnavn: lagVisningsnavn(ferieAndel, arbeidsgiverOpplysningerPerId, alleKodeverk),
  utbetaltTilSøker: ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0,
  utbetaltIRefusjon: !ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0,
});

const lagAndelerPrIdMap = (
  andeler: FeriepengegrunnlagAndel[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): AndelerPrId[] => {
  const listeMedAndelerPrId = new Array<AndelerPrId>();
  andeler.forEach(ferieAndel => {
    const andelTilSøker = ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0;
    const andelTilRefusjon = !ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0;
    const id = lagIdentifikator(ferieAndel);
    const eksisterendeAndelPrId = listeMedAndelerPrId.find(andel => andel.identifikator === id);
    if (eksisterendeAndelPrId) {
      eksisterendeAndelPrId.utbetaltTilSøker += andelTilSøker;
      eksisterendeAndelPrId.utbetaltIRefusjon += andelTilRefusjon;
    } else {
      listeMedAndelerPrId.push(lagAndelPrId(ferieAndel, arbeidsgiverOpplysningerPerId, alleKodeverk));
    }
  });
  return listeMedAndelerPrId;
};
