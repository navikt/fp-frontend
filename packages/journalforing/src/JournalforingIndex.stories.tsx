import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { withRouter } from '@navikt/fp-storybook-utils';
import { NavAnsatt } from '@navikt/fp-types';

import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import fagsakStatus from '@navikt/fp-kodeverk/src/fagsakStatus';
import { RestApiPathsKeys, requestApi } from './data/fpfordelRestApi';
import JournalforingIndex from './JournalforingIndex';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';
import OppgavePrioritet from './kodeverk/oppgavePrioritet';
import Journalpost from './typer/journalpostTsType';
import JournalKanal from './kodeverk/journalKanal';

const detaljertJournalpostMal = {
  journalpostId: '986547336994',
  tittel: 'Inntektsmelding',
  kanal: JournalKanal.ALLTIN,
  bruker: {
    navn: 'Søker Søkersen',
    fnr: '12048714373',
    aktørId: '98594685464858',
  },
  avsender: {
    navn: 'Svingen sag og høvleri',
    id: '999999999',
  },
  ytelseType: fagsakYtelseType.FORELDREPENGER,
  dokumenter: [
    {
      dokumentId: '999999999',
      tittel: 'Inntektsmelding',
      varianter: [],
      lenke: '',
    },
    {
      dokumentId: '999999998',
      tittel: 'Søknad',
      varianter: [],
      lenke: '',
    },
    {
      dokumentId: '999999997',
      tittel: 'Terminbekreftelse',
      varianter: [],
      lenke: '',
    },
  ],
  fagsaker: [
    {
      saksnummer: '125416531',
      ytelseType: fagsakYtelseType.FORELDREPENGER,
      datoOpprettet: '2022-01-02',
      sistEndret: '2022-06-03',
      status: fagsakStatus.LOPENDE,
    },
  ],
} as Journalpost;

export default {
  title: 'journalføring/journalføring/JournalforingIndex',
  component: JournalforingIndex,
  decorators: [withRouter],
};

const navAnsattDefault = {
  kanOppgavestyre: true,
  kanBehandleKode6: true,
} as NavAnsatt;

const Template: Story<{ alleOppgaver?: OppgaveOversikt[], navAnsatt: NavAnsatt, detaljertJournalpost: Journalpost }> = ({
  alleOppgaver,
  detaljertJournalpost,
  navAnsatt,
}) => {
  const data = [
    { key: RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER.name, data: alleOppgaver || undefined },
    { key: RestApiPathsKeys.HENT_JOURNALPOST_DETALJER.name, data: detaljertJournalpost || undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <JournalforingIndex navAnsatt={navAnsatt} />
    </RestApiMock>
  );
};

export const ViseOppgaverIListe = Template.bind({});
ViseOppgaverIListe.args = {
  alleOppgaver: [
    {
      id: 600,
      journalpostId: '12345125',
      aktørId: '9996923456799',
      fødselsnummer: '12048714373',
      opprettetDato: '2022-01-01',
      frist: '2022-02-01',
      ytelseType: 'FP',
      journalpostHarMangler: false,
      prioritet: OppgavePrioritet.NORM,
      beskrivelse: 'Inntektsmelding',
    },
    {
      id: 700,
      journalpostId: '245745871',
      aktørId: '274572457624',
      fødselsnummer: '12018847182',
      opprettetDato: '2022-01-01',
      frist: '2022-03-01',
      ytelseType: 'SVP',
      journalpostHarMangler: false,
      prioritet: OppgavePrioritet.NORM,
      beskrivelse: 'Inntektsmelding',
    },
    {
      id: 800,
      journalpostId: '345681257',
      opprettetDato: '2022-01-01',
      frist: '2022-01-01',
      ytelseType: 'FP',
      journalpostHarMangler: true,
      prioritet: OppgavePrioritet.HØY,
      beskrivelse: 'Søknad',
    },
  ],
  detaljertJournalpost: detaljertJournalpostMal,
  navAnsatt: navAnsattDefault,
};

export const IngenOppgaver = Template.bind({});
IngenOppgaver.args = {
  alleOppgaver: [],
  navAnsatt: navAnsattDefault,
};
