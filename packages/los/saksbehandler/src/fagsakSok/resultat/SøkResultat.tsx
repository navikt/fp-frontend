import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronRightIcon } from '@navikt/aksel-icons';
import { Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { FagsakEnkel } from '@navikt/fp-types';

import { useLosKodeverk } from '../../data/useLosKodeverk';
import type { Oppgave } from '../../typer/oppgaveTsType';

const sorterFagsaker = (fagsak1: FagsakEnkel, fagsak2: FagsakEnkel) => {
  if (fagsak1.status === 'AVSLU' && fagsak2.status !== 'AVSLU') {
    return 1;
  }
  if (fagsak1.status !== 'AVSLU' && fagsak2.status === 'AVSLU') {
    return -1;
  }
  const changeTimeFagsak1 = fagsak1.endret ?? fagsak1.opprettet;
  const changeTimeFagsak2 = fagsak2.endret ?? fagsak2.opprettet;
  return dayjs(changeTimeFagsak1, ISO_DATE_FORMAT).diff(dayjs(changeTimeFagsak2, ISO_DATE_FORMAT));
};

interface Props {
  fagsaker: FagsakEnkel[];
  fagsakOppgaver: Oppgave[];
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  selectOppgaveCallback: (oppgave: Oppgave) => void;
}

/**
 * FagsakList
 *
 * Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.
 */
export const SøkResultat = ({ fagsaker, fagsakOppgaver, åpneFagsak, selectOppgaveCallback }: Props) => {
  const fagsakStatuser = useLosKodeverk('FagsakStatus');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');
  const behandlingTyper = useLosKodeverk('BehandlingType');

  const sorterteFagsaker = [...fagsaker].sort(sorterFagsaker);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Saksnummer" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Behandlingstype" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Stonadstype" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.Status" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.BarnFodt" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sorterteFagsaker.map(fagsak => {
          const fagsakStatusType = fagsakStatuser.find(type => type.kode === fagsak.status);
          const fagsakYtelseType = fagsakYtelseTyper.find(type => type.kode === fagsak.fagsakYtelseType);

          const filtrerteOppgaver = fagsakOppgaver.filter(o => o.saksnummer === fagsak.saksnummer);
          const oppgaver = filtrerteOppgaver.map(oppgave => (
            <Table.Row
              key={oppgave.id}
              onMouseDown={() => selectOppgaveCallback(oppgave)}
              onKeyDown={() => selectOppgaveCallback(oppgave)}
            >
              <Table.DataCell />
              <Table.DataCell>
                {fagsakYtelseTyper.find(type => type.kode === oppgave.fagsakYtelseType)?.navn}
              </Table.DataCell>
              <Table.DataCell>
                {behandlingTyper.find(type => type.kode === oppgave.behandlingstype)?.navn}
              </Table.DataCell>
              <Table.DataCell />
              <Table.DataCell>{fagsak.barnFødt ? <DateLabel dateString={fagsak.barnFødt} /> : null}</Table.DataCell>
              <Table.DataCell>
                <ChevronRightIcon />
              </Table.DataCell>
            </Table.Row>
          ));

          return (
            <Fragment key={fagsak.saksnummer}>
              <Table.Row
                onMouseDown={() => åpneFagsak(fagsak.saksnummer)}
                onKeyDown={() => åpneFagsak(fagsak.saksnummer)}
              >
                <Table.DataCell>{fagsak.saksnummer}</Table.DataCell>
                <Table.DataCell>{fagsakYtelseType ? fagsakYtelseType.navn : ''}</Table.DataCell>
                <Table.DataCell />
                <Table.DataCell>{fagsakStatusType ? fagsakStatusType.navn : ''}</Table.DataCell>
                <Table.DataCell>{fagsak.barnFødt ? <DateLabel dateString={fagsak.barnFødt} /> : null}</Table.DataCell>
                <Table.DataCell>
                  <ChevronRightIcon />
                </Table.DataCell>
              </Table.Row>
              {oppgaver.length > 0 && oppgaver}
            </Fragment>
          );
        })}
      </Table.Body>
    </Table>
  );
};
