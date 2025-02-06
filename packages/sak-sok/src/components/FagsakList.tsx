import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import { getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, FagsakEnkel } from '@navikt/fp-types';

interface Props {
  fagsaker: FagsakEnkel[];
  selectFagsakCallback: (saksnummer: string) => void;
  alleKodeverk: AlleKodeverk;
}

/**
 * FagsakList
 *
 * Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.
 */
export const FagsakList = ({ fagsaker, selectFagsakCallback, alleKodeverk }: Props) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Saksnummer" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Sakstype" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Status" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {fagsaker.map(fagsak => (
          <Table.Row
            key={fagsak.saksnummer}
            onMouseDown={() => selectFagsakCallback(fagsak.saksnummer)}
            onKeyDown={() => selectFagsakCallback(fagsak.saksnummer)}
          >
            <Table.DataCell>{fagsak.saksnummer}</Table.DataCell>
            <Table.DataCell>{getKodeverknavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE)}</Table.DataCell>
            <Table.DataCell>{getKodeverknavn(fagsak.status, KodeverkType.FAGSAK_STATUS)}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
