import React, { Fragment, FunctionComponent, useMemo } from 'react';
import { Next } from '@navikt/ds-icons';
import { getKodeverknavnFraKode } from '@navikt/ft-utils';
import {
  Table, TableRow, TableColumn, DateLabel,
} from '@navikt/ft-ui-komponenter';
import { FagsakStatus, KodeverkType } from '@navikt/ft-kodeverk';

import Oppgave from '../../typer/oppgaveTsType';
import useLosKodeverk from '../../data/useLosKodeverk';
import Fagsak from '../../typer/fagsakTsType';
import { restApiHooks, RestApiGlobalStatePathsKeys } from '../../data/fplosSaksbehandlerRestApi';

import styles from './fagsakList.less';

const headerTextCodes = [
  'FagsakList.Saksnummer',
  'FagsakList.Stonadstype',
  'FagsakList.Behandlingstype',
  'FagsakList.Status',
  'FagsakList.BarnFodt',
  'EMPTY_1',
];

interface OwnProps {
  fagsaker: Fagsak[];
  fagsakOppgaver: Oppgave[];
  åpneFagsak: (saksnummer: number, behandlingUuid?: string) => void;
  selectOppgaveCallback: (oppgave: Oppgave) => void;
}

const getSelectOppgaveCallback = (oppgave: Oppgave, selectOppgaveCallback: (oppgave: Oppgave) => void) => () => selectOppgaveCallback(oppgave);

const getFagsakCallback = (
  åpneFagsak: (saksnummer: number, behandlingUuid?: string) => void,
) => (_event: React.KeyboardEvent | React.MouseEvent, saksnummer?: number) => {
  if (saksnummer) {
    åpneFagsak(saksnummer);
  }
};

export const getSorterteFagsaker = (fagsaker: Fagsak[] = []) => fagsaker.concat().sort((fagsak1, fagsak2) => {
  if (fagsak1.status === FagsakStatus.AVSLUTTET && fagsak2.status !== FagsakStatus.AVSLUTTET) {
    return 1;
  } if (fagsak1.status !== FagsakStatus.AVSLUTTET && fagsak2.status === FagsakStatus.AVSLUTTET) {
    return -1;
  }
  const changeTimeFagsak1 = fagsak1.endret ? fagsak1.endret : fagsak1.opprettet;
  const changeTimeFagsak2 = fagsak2.endret ? fagsak2.endret : fagsak2.opprettet;
  return changeTimeFagsak1 > changeTimeFagsak2 ? 1 : -1;
});

/**
 * FagsakList
 *
 * Presentasjonskomponent. Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.
 */
const FagsakList: FunctionComponent<OwnProps> = ({
  fagsaker,
  fagsakOppgaver,
  åpneFagsak,
  selectOppgaveCallback,
}) => {
  const fagsakStatuser = useLosKodeverk(KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  const sorterteFagsaker = useMemo(() => getSorterteFagsaker(fagsaker), [fagsaker]);

  return (
    <Table headerTextCodes={headerTextCodes} classNameTable={styles.table}>
      {sorterteFagsaker.map((fagsak) => {
        const fagsakStatusType = fagsakStatuser.find((type) => type.kode === fagsak.status);
        const fagsakYtelseType = fagsakYtelseTyper.find((type) => type.kode === fagsak.fagsakYtelseType);

        const filtrerteOppgaver = fagsakOppgaver.filter((o) => o.saksnummer === fagsak.saksnummer);
        const oppgaver = filtrerteOppgaver.map((oppgave, index) => (
          <TableRow<number>
            key={`oppgave${oppgave.id}`}
            id={oppgave.id}
            onMouseDown={getSelectOppgaveCallback(oppgave, selectOppgaveCallback)}
            onKeyDown={getSelectOppgaveCallback(oppgave, selectOppgaveCallback)}
            isDashedBottomBorder={filtrerteOppgaver.length > index + 1}
          >
            <TableColumn />
            <TableColumn>{getKodeverknavnFraKode(alleKodeverk, KodeverkType.FAGSAK_YTELSE, oppgave.fagsakYtelseType)}</TableColumn>
            <TableColumn>{getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, oppgave.behandlingstype)}</TableColumn>
            <TableColumn>
              {oppgave.behandlingStatus ? getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_STATUS, oppgave.behandlingStatus) : ''}
            </TableColumn>
            <TableColumn>{fagsak.barnFødt ? <DateLabel dateString={fagsak.barnFødt} /> : null}</TableColumn>
            <TableColumn><Next /></TableColumn>
          </TableRow>
        ));

        return (
          <Fragment key={`fagsak${fagsak.saksnummer}`}>
            <TableRow<number>
              id={fagsak.saksnummer}
              onMouseDown={getFagsakCallback(åpneFagsak)}
              onKeyDown={getFagsakCallback(åpneFagsak)}
              isDashedBottomBorder={oppgaver.length > 0}
            >
              <TableColumn>{fagsak.saksnummer}</TableColumn>
              <TableColumn>{fagsakYtelseType ? fagsakYtelseType.navn : ''}</TableColumn>
              <TableColumn />
              <TableColumn>{fagsakStatusType ? fagsakStatusType.navn : ''}</TableColumn>
              <TableColumn>{fagsak.barnFødt ? <DateLabel dateString={fagsak.barnFødt} /> : null}</TableColumn>
              <TableColumn><Next /></TableColumn>
            </TableRow>
            {oppgaver.length > 0 && oppgaver}
          </Fragment>
        );
      })}
    </Table>
  );
};

export default FagsakList;
