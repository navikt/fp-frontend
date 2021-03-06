import React, { FunctionComponent } from 'react';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { Fagsak, AlleKodeverk } from '@fpsak-frontend/types';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import styles from './fagsakList.less';

const headerTextCodes = [
  'FagsakList.Saksnummer',
  'FagsakList.Sakstype',
  'FagsakList.Status',
];

interface OwnProps {
  fagsaker: Fagsak[];
  selectFagsakCallback: (e: React.SyntheticEvent, saksnummer?: string) => void;
  alleKodeverk: AlleKodeverk;
}

/**
 * FagsakList
 *
 * Presentasjonskomponent. Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.
 */
const FagsakList: FunctionComponent<OwnProps> = ({
  fagsaker,
  selectFagsakCallback,
  alleKodeverk,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);

  return (
    <Table headerTextCodes={headerTextCodes} classNameTable={styles.table}>
      {fagsaker.map((fagsak) => (
        <TableRow<string>
          key={fagsak.saksnummer}
          id={fagsak.saksnummer}
          onMouseDown={selectFagsakCallback}
          onKeyDown={selectFagsakCallback}
        >
          <TableColumn>{fagsak.saksnummer}</TableColumn>
          <TableColumn>{getKodeverknavn(fagsak.fagsakYtelseType)}</TableColumn>
          <TableColumn>{getKodeverknavn(fagsak.status)}</TableColumn>
        </TableRow>
      ))}
    </Table>
  );
};

export default FagsakList;
