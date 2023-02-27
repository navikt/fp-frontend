import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { RestApiMock } from '@navikt/fp-utils-test';
import { withRouter } from '@navikt/fp-storybook-utils';
import { NavAnsatt } from '@navikt/fp-types';

import { fagsakYtelseType, fagsakStatus } from '@navikt/fp-kodeverk';
import { RestApiPathsKeys, requestApi } from './data/fpfordelRestApi';
import JournalforingIndex from './OppgaveJournalføringIndex';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';
import OppgavePrioritet from './kodeverk/oppgavePrioritet';
import Journalpost from './typer/journalpostTsType';
import JournalKanal from './kodeverk/journalKanal';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

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
      tittel: 'Artikkel 1',
      varianter: [],
      lenke: 'https://research.google.com/pubs/archive/44679.pdf',
    },
    {
      dokumentId: '999999998',
      tittel: 'Artikkel 2',
      varianter: [],
      lenke: 'https://arxiv.org/pdf/2209.14865.pdf',
    },
    {
      dokumentId: '999999997',
      tittel: 'Artikkel 3',
      varianter: [],
      lenke: 'https://research.google.com/pubs/archive/44678.pdf',
    },
  ],
  fagsaker: [
    {
      saksnummer: '125416597',
      ytelseType: fagsakYtelseType.FORELDREPENGER,
      datoOpprettet: '2022-01-02',
      sistEndret: '2022-06-03',
      status: fagsakStatus.LOPENDE,
    },
    {
      saksnummer: '155462542',
      ytelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
      datoOpprettet: '2022-01-02',
      sistEndret: '2022-06-03',
      status: fagsakStatus.AVSLUTTET,
    },
    {
      saksnummer: '175419131',
      ytelseType: fagsakYtelseType.FORELDREPENGER,
      datoOpprettet: '2022-01-02',
      sistEndret: '2022-06-03',
      status: fagsakStatus.AVSLUTTET,
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
    { key: RestApiPathsKeys.FERDIGSTILL_JOURNALFØRING.name, data: {} },
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
      enhetId: '4016',
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
      enhetId: '4008',
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
