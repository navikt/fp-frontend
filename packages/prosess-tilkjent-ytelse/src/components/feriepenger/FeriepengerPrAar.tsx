import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { Label, BodyShort } from '@navikt/ds-react';

import { ArbeidsgiverOpplysningerPerId, FeriepengegrunnlagAndel, AlleKodeverk } from '@fpsak-frontend/types';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFn } from '@fpsak-frontend/kodeverk/src/kodeverkUtils';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';

const finnAlleAndelerForOpptjeningsår = (andeler: FeriepengegrunnlagAndel[],
  opptjeningsår: number): FeriepengegrunnlagAndel[] => andeler.filter((andel) => andel.opptjeningsår === opptjeningsår);

const lagIdentifikator = (andel: FeriepengegrunnlagAndel) : string => andel.aktivitetStatus + andel.arbeidsgiverId;

const lagVisningsnavn = (ferieAndel: FeriepengegrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk) => {
  const agOpplysning = arbeidsgiverOpplysningerPerId[ferieAndel.arbeidsgiverId];
  if (agOpplysning) {
    if (agOpplysning.erPrivatPerson) {
      return agOpplysning.fødselsdato
        ? `${agOpplysning.navn} (${moment(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})`
        : agOpplysning.navn;
    }
    return agOpplysning.identifikator
      ? `${agOpplysning.navn} (${agOpplysning.identifikator})`
      : agOpplysning.navn;
  }
  return ferieAndel.aktivitetStatus ? getKodeverknavnFn(alleKodeverk)(ferieAndel.aktivitetStatus, KodeverkType.AKTIVITET_STATUS) : '';
};

type AndelerPrId = {
  identifikator: string;
  visningsnavn: string;
  utbetaltTilSøker: number;
  utbetaltIRefusjon: number;
}

const lagAndelPrId = (ferieAndel: FeriepengegrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk): AndelerPrId => ({
  identifikator: lagIdentifikator(ferieAndel),
  visningsnavn: lagVisningsnavn(ferieAndel, arbeidsgiverOpplysningerPerId, alleKodeverk),
  utbetaltTilSøker: ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0,
  utbetaltIRefusjon: !ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0,
});

const lagAndelerPrIdMap = (andeler: FeriepengegrunnlagAndel[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk): AndelerPrId[] => {
  const listeMedAndelerPrId = [];
  andeler.forEach((ferieAndel) => {
    const andelTilSøker = ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0;
    const andelTilRefusjon = !ferieAndel.erBrukerMottaker ? ferieAndel.årsbeløp : 0;
    const id = lagIdentifikator(ferieAndel);
    const eksisterendeAndelPrId = listeMedAndelerPrId.find((andel) => andel.identifikator === id) as AndelerPrId;
    if (eksisterendeAndelPrId) {
      eksisterendeAndelPrId.utbetaltTilSøker += andelTilSøker;
      eksisterendeAndelPrId.utbetaltIRefusjon += andelTilRefusjon;
    } else {
      listeMedAndelerPrId.push(lagAndelPrId(ferieAndel, arbeidsgiverOpplysningerPerId, alleKodeverk));
    }
  });
  return listeMedAndelerPrId;
};

const HEADER_TEXT_CODES = [
  'TilkjentYtelse.Feriepenger.AndelNavn',
  'TilkjentYtelse.Feriepenger.GrunnlagRefusjon',
  'TilkjentYtelse.Feriepenger.GrunnlagSøker',
];

interface OwnProps {
  alleAndeler: FeriepengegrunnlagAndel[];
  opptjeningsår: number;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const FeriepengerPrAar: FunctionComponent<OwnProps> = ({
  alleAndeler,
  opptjeningsår,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  if (!alleAndeler || alleAndeler.length < 1) {
    return null;
  }
  const alleAndelerForÅret = useMemo(() => finnAlleAndelerForOpptjeningsår(alleAndeler, opptjeningsår),
    [alleAndeler, opptjeningsår]);
  const andelerPrId = useMemo(() => lagAndelerPrIdMap(alleAndelerForÅret, arbeidsgiverOpplysningerPerId, alleKodeverk),
    [alleAndelerForÅret]);

  return (
    <>
      <Label size="small">
        <FormattedMessage id="TilkjentYtelse.Feriepenger.Opptjeningsår" values={{ år: opptjeningsår }} />
      </Label>
      <Table headerTextCodes={HEADER_TEXT_CODES}>
        {andelerPrId.map((andel) => (
          <TableRow key={andel.identifikator}>
            <TableColumn><BodyShort size="small">{andel.visningsnavn}</BodyShort></TableColumn>
            <TableColumn><BodyShort size="small">{andel.utbetaltIRefusjon}</BodyShort></TableColumn>
            <TableColumn><BodyShort size="small">{andel.utbetaltTilSøker}</BodyShort></TableColumn>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default FeriepengerPrAar;
