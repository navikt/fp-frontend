import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { ChevronRightIcon } from '@navikt/aksel-icons';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { FagsakStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { FagsakEnkel } from '@navikt/fp-types';
import { getKodeverknavnFraKode } from '@navikt/fp-kodeverk';
import { Oppgave } from '@navikt/fp-los-felles';

import useLosKodeverk from '../../data/useLosKodeverk';
import { restApiHooks, RestApiGlobalStatePathsKeys } from '../../data/fplosSaksbehandlerRestApi';

import { Table } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

const getFagsakCallback =
  (åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void) =>
  (_event: React.KeyboardEvent | React.MouseEvent, saksnummer?: string) => {
    if (saksnummer) {
      åpneFagsak(saksnummer);
    }
  };

const sorterFagsaker = (fagsak1: FagsakEnkel, fagsak2: FagsakEnkel) => {
  if (fagsak1.status === FagsakStatus.AVSLUTTET && fagsak2.status !== FagsakStatus.AVSLUTTET) {
    return 1;
  }
  if (fagsak1.status !== FagsakStatus.AVSLUTTET && fagsak2.status === FagsakStatus.AVSLUTTET) {
    return -1;
  }
  const changeTimeFagsak1 = fagsak1.endret ? fagsak1.endret : fagsak1.opprettet;
  const changeTimeFagsak2 = fagsak2.endret ? fagsak2.endret : fagsak2.opprettet;
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
  const fagsakStatuser = useLosKodeverk(KodeverkType.FAGSAK_STATUS);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

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
            <FormattedMessage id="FagsakList.Status" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="FagsakList.BarnFodt" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" />
          <Table.HeaderCell scope="col" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sorterteFagsaker.map(fagsak => {
          const fagsakStatusType = fagsakStatuser.find(type => type.kode === fagsak.status);
          const fagsakYtelseType = fagsakYtelseTyper.find(type => type.kode === fagsak.fagsakYtelseType);

          const filtrerteOppgaver = fagsakOppgaver.filter(o => o.saksnummer.toString() === fagsak.saksnummer);
          const oppgaver = filtrerteOppgaver.map(oppgave => (
            <Table.Row
              key={oppgave.id}
              onMouseDown={() => selectOppgaveCallback(oppgave)}
              onKeyDown={() => selectOppgaveCallback(oppgave)}
            >
              <Table.DataCell />
              <Table.DataCell>
                {getKodeverknavnFraKode(alleKodeverk, KodeverkType.FAGSAK_YTELSE, oppgave.fagsakYtelseType)}
              </Table.DataCell>
              <Table.DataCell>
                {getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, oppgave.behandlingstype)}
              </Table.DataCell>
              <Table.DataCell>
                {oppgave.behandlingStatus
                  ? getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_STATUS, oppgave.behandlingStatus)
                  : ''}
              </Table.DataCell>
              <Table.DataCell>{fagsak.barnFødt ? <DateLabel dateString={fagsak.barnFødt} /> : null}</Table.DataCell>
              <Table.DataCell>
                <ChevronRightIcon />
              </Table.DataCell>
            </Table.Row>
          ));

          return (
            <Fragment key={fagsak.saksnummer}>
              <Table.Row onMouseDown={getFagsakCallback(åpneFagsak)} onKeyDown={getFagsakCallback(åpneFagsak)}>
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
