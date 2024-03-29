import React, { FunctionComponent } from 'react';

import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { FagsakEnkel, AlleKodeverk } from '@navikt/fp-types';
import { getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';

import styles from './fagsakList.module.css';

const headerTextCodes = ['FagsakList.Saksnummer', 'FagsakList.Sakstype', 'FagsakList.Status'];

interface OwnProps {
  fagsaker: FagsakEnkel[];
  selectFagsakCallback: (e: React.SyntheticEvent, saksnummer?: string) => void;
  alleKodeverk: AlleKodeverk;
}

/**
 * FagsakList
 *
 * Presentasjonskomponent. Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.
 */
const FagsakList: FunctionComponent<OwnProps> = ({ fagsaker, selectFagsakCallback, alleKodeverk }) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  return (
    <Table headerTextCodes={headerTextCodes} classNameTable={styles.table}>
      {fagsaker.map(fagsak => (
        <TableRow<string>
          key={fagsak.saksnummer}
          id={fagsak.saksnummer}
          onMouseDown={selectFagsakCallback}
          onKeyDown={selectFagsakCallback}
        >
          <TableColumn>{fagsak.saksnummer}</TableColumn>
          <TableColumn>{getKodeverknavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE)}</TableColumn>
          <TableColumn>{getKodeverknavn(fagsak.status, KodeverkType.FAGSAK_STATUS)}</TableColumn>
        </TableRow>
      ))}
    </Table>
  );
};

export default FagsakList;
