import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Link, Table } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { RelatertTilgrensedYtelse } from '@navikt/fp-types';

interface Props {
  ytelser?: RelatertTilgrensedYtelse[];
}

const formatDateToDDMMYYYY = (date: string): string => {
  const parsedDate = dayjs(date, ISO_DATE_FORMAT, true);
  return parsedDate.isValid() ? parsedDate.format(DDMMYYYY_DATE_FORMAT) : date;
};

/**
 * PersonYtelserTable
 *
 * Viser tilgrensede ytelser.
 */
export const PersonYtelserTable = ({ ytelser }: Props) => {
  const intl = useIntl();

  const ytelseRows = ytelser
    ?.map(ytelse => {
      const ytelseNavn = ytelse.relatertYtelseNavn;

      const skalViseLenke =
        ytelse.relatertYtelseNavn === 'Engangsstonad' ||
        ytelse.relatertYtelseNavn === 'Foreldrepenger' ||
        ytelse.relatertYtelseNavn === 'Svangerskapspenger';

      if (ytelse.tilgrensendeYtelserListe.length === 0) {
        return [
          {
            navn: ytelseNavn,
            periode: intl.formatMessage({ id: 'PersonYtelserTable.Ingen' }),
            status: '',
            saksnummer: '',
            skalViseLenke,
          },
        ];
      }

      return ytelse.tilgrensendeYtelserListe.map((ytelseInfo, innerIndex) => {
        const tilDato = formatDateToDDMMYYYY(ytelseInfo.periodeTilDato) || '';
        const fraDato = formatDateToDDMMYYYY(ytelseInfo.periodeFraDato) || '';

        return {
          navn: innerIndex === 0 ? ytelseNavn : '',
          periode: `${fraDato} - ${tilDato}`,
          status: ytelseInfo.statusNavn,
          saksnummer: ytelseInfo.saksNummer,
          skalViseLenke,
        };
      });
    })
    .reduce((allRows, rows) => allRows.concat(rows), []);

  if (!ytelseRows) {
    return null;
  }

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonYtelserTable.Ytelse" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonYtelserTable.Periode" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonYtelserTable.Status" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonYtelserTable.Saksnummer" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {ytelseRows.map((ytelse, index) => (
          <Table.Row key={`index${index + 1}`}>
            <Table.DataCell>{ytelse.navn ? <BodyShort size="small">{ytelse.navn}</BodyShort> : ''}</Table.DataCell>
            <Table.DataCell>
              <BodyShort size="small">{ytelse.periode}</BodyShort>
            </Table.DataCell>
            <Table.DataCell>{ytelse.status ? <BodyShort size="small">{ytelse.status}</BodyShort> : ''}</Table.DataCell>
            <Table.DataCell>
              {ytelse.saksnummer && ytelse.skalViseLenke && (
                <BodyShort size="small">
                  <Link href={`/fagsak/${ytelse.saksnummer}`} target="_blank">
                    {ytelse.saksnummer}
                  </Link>
                </BodyShort>
              )}
              {ytelse.saksnummer && !ytelse.skalViseLenke ? (
                <BodyShort size="small">{ytelse.saksnummer}</BodyShort>
              ) : (
                ''
              )}
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
