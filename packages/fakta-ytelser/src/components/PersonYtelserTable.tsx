import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { BodyShort, Link } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn, RelatertTilgrensedYtelse } from '@navikt/fp-types';
import { relatertYtelseType } from '@navikt/fp-kodeverk';

import styles from './personYtelserTable.module.css';

interface OwnProps {
  ytelser?: RelatertTilgrensedYtelse[];
  relatertYtelseTyper: KodeverkMedNavn[];
  relatertYtelseStatus: KodeverkMedNavn[];
}

const HEADER_TEXT_CODES = [
  'PersonYtelserTable.Ytelse',
  'PersonYtelserTable.Periode',
  'PersonYtelserTable.Status',
  'PersonYtelserTable.Saksnummer',
];

const formatDateToDDMMYYYY = (date: string): string => {
  const parsedDate = moment(date, ISO_DATE_FORMAT, true);
  return parsedDate.isValid() ? parsedDate.format(DDMMYYYY_DATE_FORMAT) : date;
};

/**
 * PersonYtelserTable
 *
 * Viser tilgrensede ytelser.
 */
const PersonYtelserTable: FunctionComponent<OwnProps> = ({
  ytelser,
  relatertYtelseTyper,
  relatertYtelseStatus,
}) => {
  const intl = useIntl();

  const ytelseRows = ytelser && ytelser.map((ytelse) => {
    const ytelseNavn = relatertYtelseTyper.filter((type) => type.kode === ytelse.relatertYtelseType)[0].navn;

    const skalViseLenke = ytelse.relatertYtelseType === relatertYtelseType.ENGANGSSTONAD
      || ytelse.relatertYtelseType === relatertYtelseType.FORELDREPENGER
      || ytelse.relatertYtelseType === relatertYtelseType.SVANGERSKAPSPENGER;

    if (ytelse.tilgrensendeYtelserListe.length === 0) {
      return [{
        navn: ytelseNavn,
        periode: intl.formatMessage({ id: 'PersonYtelserTable.Ingen' }),
        status: '',
        saksnummer: '',
        skalViseLenke,
      }];
    }

    return ytelse.tilgrensendeYtelserListe.map((ytelseInfo, innerIndex) => {
      const tilDato = formatDateToDDMMYYYY(ytelseInfo.periodeTilDato) || '';
      const fraDato = formatDateToDDMMYYYY(ytelseInfo.periodeFraDato) || '';

      const statusNavn = relatertYtelseStatus.filter((status) => status.kode === ytelseInfo.status)[0].navn;

      return {
        navn: innerIndex === 0 ? ytelseNavn : '',
        periode: `${fraDato} - ${tilDato}`,
        status: statusNavn,
        saksnummer: ytelseInfo.saksNummer,
        skalViseLenke,
      };
    });
  }).reduce((allRows, rows) => allRows.concat(rows), []);

  return (
    <Table headerTextCodes={HEADER_TEXT_CODES} classNameTable={styles.tableStyle} noHover>
      {ytelseRows && ytelseRows.map((ytelse, index) => (
        <TableRow key={`index${index + 1}`}>
          <TableColumn>{ytelse.navn ? <BodyShort size="small">{ytelse.navn}</BodyShort> : ''}</TableColumn>
          <TableColumn><BodyShort size="small">{ytelse.periode}</BodyShort></TableColumn>
          <TableColumn>{ytelse.status ? <BodyShort size="small">{ytelse.status}</BodyShort> : ''}</TableColumn>
          <TableColumn>
            {ytelse.saksnummer && ytelse.skalViseLenke
              && <BodyShort size="small"><Link href={`/fagsak/${ytelse.saksnummer}`} target="_blank">{ytelse.saksnummer}</Link></BodyShort>}
            {ytelse.saksnummer && !ytelse.skalViseLenke
              ? <BodyShort size="small">{ytelse.saksnummer}</BodyShort> : ''}
          </TableColumn>
        </TableRow>
      ))}
    </Table>
  );
};

export default PersonYtelserTable;
