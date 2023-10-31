import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { RestApiMock } from '@navikt/fp-utils-test';
import { withRouter } from '@navikt/fp-storybook-utils';
import { NavAnsatt } from '@navikt/fp-types';

import { fagsakStatus, fagsakYtelseType, familieHendelseType } from '@navikt/fp-kodeverk';
import { requestApi, RestApiPathsKeys } from './data/fpfordelRestApi';
import JournalforingIndex from './OppgaveJournalføringIndex';
import Oppgave from './typer/oppgaveTsType';
import Journalpost from './typer/journalpostTsType';
import JournalKanal from './kodeverk/journalKanal';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import OppgaveKilde from './kodeverk/oppgaveKilde';

const detaljertJournalpostMal = (medBruker: boolean): Journalpost =>
  ({
    journalpostId: '986547336994',
    tittel: 'Inntektsmelding',
    kanal: JournalKanal.ALLTIN,
    bruker: medBruker
      ? {
          navn: 'Søker Søkersen',
          fnr: '15529115072',
          aktørId: '98594685464858',
        }
      : null,
    avsender: {
      navn: 'Svingen sag og høvleri',
      id: '999999999',
    },
    ytelseType: fagsakYtelseType.FORELDREPENGER,
    dokumenter: [
      {
        dokumentId: '999999999',
        tittel: 'Søknad',
        varianter: [],
        lenke: 'https://research.google.com/pubs/archive/44679.pdf',
      },
      {
        dokumentId: '999999998',
        tittel: 'Søknad om foreldrepenger',
        varianter: [],
        lenke: 'https://arxiv.org/pdf/2209.14865.pdf',
      },
      {
        dokumentId: '999999997',
        tittel: 'Inntektsbevis',
        varianter: [],
        lenke: 'https://research.google.com/pubs/archive/44678.pdf',
      },
    ],
    fagsaker: medBruker
      ? [
          {
            saksnummer: '125416592',
            ytelseType: fagsakYtelseType.FORELDREPENGER,
            opprettetDato: '2022-01-02',
            førsteUttaksdato: '2022-05-02',
            status: fagsakStatus.LOPENDE,
            familieHendelseJf: {
              familiehHendelseDato: '2022-04-15',
              familihendelseType: familieHendelseType.FODSEL,
            },
          },
          {
            saksnummer: '125416597',
            ytelseType: fagsakYtelseType.FORELDREPENGER,
            opprettetDato: '2022-01-02',
            førsteUttaksdato: '2022-05-02',
            status: fagsakStatus.UNDER_BEHANDLING,
            familieHendelseJf: {
              familiehHendelseDato: '2022-04-15',
              familihendelseType: familieHendelseType.ADOPSJON,
            },
          },
          {
            saksnummer: '155462542',
            ytelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
            datoOpprettet: '2022-03-02',
            status: fagsakStatus.AVSLUTTET,
            familieHendelseJf: {
              familiehHendelseDato: '2022-02-01',
              familihendelseType: familieHendelseType.TERMIN,
            },
          },
          {
            saksnummer: '175419131',
            ytelseType: fagsakYtelseType.FORELDREPENGER,
            datoOpprettet: '2022-01-02',
            førsteUttaksdato: '2022-02-02',
            status: fagsakStatus.OPPRETTET,
            familieHendelseJf: {
              familiehHendelseDato: '2022-03-01',
              familihendelseType: familieHendelseType.OMSORG,
            },
          },
        ]
      : [],
  } as Journalpost);

export default {
  title: 'journalføring/journalføring/JournalforingIndex',
  component: JournalforingIndex,
  decorators: [withRouter],
};

const navAnsattDefault = {
  kanOppgavestyre: true,
  kanBehandleKode6: true,
  brukernavn: 'X123456',
} as NavAnsatt;

const Template: StoryFn<{
  alleOppgaver?: Oppgave[];
  navAnsatt: NavAnsatt;
  detaljertJournalpost: Journalpost;
  responsFraBrukerSøk: Journalpost | undefined;
}> = ({ alleOppgaver, detaljertJournalpost, navAnsatt, responsFraBrukerSøk }) => {
  const responsHentBruker = responsFraBrukerSøk
    ? { navn: responsFraBrukerSøk.bruker.navn, fødselsnummer: responsFraBrukerSøk.bruker.fnr }
    : undefined;
  const data = [
    { key: RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER.name, data: alleOppgaver || undefined },
    { key: RestApiPathsKeys.HENT_JOURNALPOST_DETALJER.name, data: detaljertJournalpost || undefined },
    { key: RestApiPathsKeys.FERDIGSTILL_JOURNALFØRING.name, data: { saksnummer: '12345678' } },
    { key: RestApiPathsKeys.HENT_BRUKER.name, data: responsHentBruker },
    { key: RestApiPathsKeys.OPPDATER_MED_BRUKER.name, data: responsFraBrukerSøk },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <JournalforingIndex navAnsatt={navAnsatt} />
    </RestApiMock>
  );
};

const defaultOppgaver = [
  {
    journalpostId: '12345125',
    aktørId: '9996923456799',
    fødselsnummer: '12048714373',
    opprettetDato: '2022-01-01',
    frist: '2022-02-01',
    ytelseType: 'FP',
    enhetId: '4016',
    beskrivelse: 'Inntektsmelding',
    reservertAv: 'X123456',
    kilde: OppgaveKilde.GOSYS,
  },
  {
    journalpostId: '245745871',
    aktørId: '274572457624',
    fødselsnummer: '12018847182',
    opprettetDato: '2022-01-01',
    frist: '2022-03-01',
    ytelseType: 'SVP',
    enhetId: '4008',
    beskrivelse: 'Inntektsmelding',
    reservertAv: 'Y654321',
    kilde: OppgaveKilde.LOKAL,
  },
  {
    journalpostId: '345681257',
    opprettetDato: '2022-01-01',
    frist: '2022-01-01',
    ytelseType: 'FP',
    enhetId: '4008',
    beskrivelse: 'Søknad',
    kilde: OppgaveKilde.GOSYS,
  },
];

export const ViseOppgaverIListe = Template.bind({});
ViseOppgaverIListe.args = {
  alleOppgaver: [
    {
      journalpostId: '12345125',
      aktørId: '9996923456799',
      fødselsnummer: '12048714373',
      opprettetDato: '2022-01-01',
      frist: '2022-02-01',
      ytelseType: 'FP',
      enhetId: '4016',
      beskrivelse: 'Inntektsmelding',
      reservertAv: 'Y654321',
      kilde: OppgaveKilde.LOKAL,
    },
    {
      journalpostId: '245745871',
      aktørId: '274572457624',
      fødselsnummer: '12018847182',
      opprettetDato: '2022-01-01',
      frist: '2022-03-01',
      ytelseType: 'SVP',
      enhetId: '4008',
      beskrivelse: 'Inntektsmelding',
      kilde: OppgaveKilde.GOSYS,
    },
    {
      journalpostId: '345681257',
      opprettetDato: '2022-01-01',
      frist: '2022-01-01',
      ytelseType: 'FP',
      enhetId: '4008',
      beskrivelse: 'Søknad',
      reservertAv: 'X123456',
      kilde: OppgaveKilde.GOSYS,
    },
  ],
  detaljertJournalpost: detaljertJournalpostMal(true),
  navAnsatt: navAnsattDefault,
  responsFraBrukerSøk: detaljertJournalpostMal(true),
};

export const ViseOppgaverUtenBruker = Template.bind({});
ViseOppgaverUtenBruker.args = {
  alleOppgaver: defaultOppgaver,
  detaljertJournalpost: detaljertJournalpostMal(false),
  navAnsatt: navAnsattDefault,
  responsFraBrukerSøk: detaljertJournalpostMal(true),
};

export const IngenOppgaver = Template.bind({});
IngenOppgaver.args = {
  alleOppgaver: [],
  navAnsatt: navAnsattDefault,
  responsFraBrukerSøk: detaljertJournalpostMal(true),
};
