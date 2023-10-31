import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { fagsakStatus, fagsakYtelseType } from '@navikt/fp-kodeverk';
import { NavAnsatt } from '@navikt/fp-types';
import JournalpostDetaljer from './JournalpostDetaljer';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import JournalKanal from '../../kodeverk/journalKanal';
import Journalpost from '../../typer/journalpostTsType';

import messages from '../../../i18n/nb_NO.json';
import Oppgave from '../../typer/oppgaveTsType';
import DokumentTittel from '../../kodeverk/dokumentTittel';
import ReserverOppgaveType from '../../typer/reserverOppgaveType';
import OppgaveKilde from '../../kodeverk/oppgaveKilde';

const withIntl = getIntlDecorator(messages);

const saksbehandler = 'Z123343';
const journalpost = 986547336994;

const navAnsattDefault = {
  brukernavn: saksbehandler,
} as NavAnsatt;

const defaultOppgave = {
  journalpostId: journalpost.toString(),
  aktørId: '9996923456799',
  fødselsnummer: '12048714373',
  opprettetDato: '2022-01-01',
  frist: '2022-02-01',
  ytelseType: 'FP',
  enhetId: '4108',
  beskrivelse: 'Inntektsmelding',
  kilde: OppgaveKilde.GOSYS,
};

const detaljertJournalpostMal = {
  journalpostId: journalpost.toString(),
  tittel: DokumentTittel.BEKREFTELSE_ARBEIDSGIVER,
  kanal: JournalKanal.EESSI,
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
      tittel: DokumentTittel.BEKREFTELSE_ARBEIDSGIVER,
      varianter: [],
      lenke: '',
    },
    {
      dokumentId: '999999998',
      tittel: DokumentTittel.SØKNAD_FORELDREPENGER_FØDSEL,
      varianter: [],
      lenke: '',
    },
    {
      dokumentId: '999999997',
      tittel: DokumentTittel.ANNET,
      varianter: [],
      lenke: '',
    },
  ],
  fagsaker: [
    {
      saksnummer: '125416597',
      ytelseType: fagsakYtelseType.FORELDREPENGER,
      opprettetDato: '2022-01-02',
      status: fagsakStatus.LOPENDE,
    },
    {
      saksnummer: '155462542',
      ytelseType: fagsakYtelseType.SVANGERSKAPSPENGER,
      opprettetDato: '2022-01-02',
      status: fagsakStatus.AVSLUTTET,
    },
    {
      saksnummer: '175419131',
      ytelseType: fagsakYtelseType.FORELDREPENGER,
      opprettetDato: '2022-01-03',
      status: fagsakStatus.AVSLUTTET,
    },
  ],
} as Journalpost;

export default {
  title: 'journalføring/journalføring/Journalpost',
  component: JournalpostDetaljer,
  decorators: [withIntl],
};

const Template: StoryFn<{
  detaljertJournalpost: Journalpost;
  oppgave: Oppgave;
  submitJournalføring: (data: JournalførSubmitValue) => void;
  reserverOppgave: (data: ReserverOppgaveType) => void;
  navAnsatt: NavAnsatt;
}> = ({ detaljertJournalpost, oppgave, submitJournalføring, reserverOppgave, navAnsatt }) => (
  <JournalpostDetaljer
    lasterBruker={false}
    avbrytVisningAvJournalpost={action('button-click') as () => void}
    oppgave={oppgave}
    journalpost={detaljertJournalpost}
    submitJournalføring={submitJournalføring}
    knyttJournalpostTilBruker={action('button-click') as () => void}
    forhåndsvisBruker={action('button-click') as () => void}
    reserverOppgave={reserverOppgave}
    navAnsatt={navAnsatt}
    flyttTilGosys={action('button-click') as () => void}
  />
);

export const VisOppgaveForSubmitReservertAvMeg = Template.bind({});
VisOppgaveForSubmitReservertAvMeg.args = {
  oppgave: { ...defaultOppgave, reservertAv: saksbehandler },
  detaljertJournalpost: detaljertJournalpostMal,
  submitJournalføring: action('button-click') as (data: JournalførSubmitValue) => void,
  reserverOppgave: action('button-click') as (data: ReserverOppgaveType) => void,
  navAnsatt: navAnsattDefault,
};

export const VisOppgaveReservertAvAndre = Template.bind({});
VisOppgaveReservertAvAndre.args = {
  oppgave: { ...defaultOppgave, reservertAv: saksbehandler },
  detaljertJournalpost: detaljertJournalpostMal,
  submitJournalføring: action('button-click') as (data: JournalførSubmitValue) => void,
  reserverOppgave: action('button-click') as (data: ReserverOppgaveType) => void,
  navAnsatt: {
    brukernavn: 'X123456',
  } as NavAnsatt,
};

export const VisOppgaveIkkeReservert = Template.bind({});
VisOppgaveIkkeReservert.args = {
  oppgave: defaultOppgave,
  detaljertJournalpost: detaljertJournalpostMal,
  submitJournalføring: action('button-click') as (data: JournalførSubmitValue) => void,
  reserverOppgave: action('button-click') as (data: ReserverOppgaveType) => void,
  navAnsatt: {
    brukernavn: 'X123456',
  } as NavAnsatt,
};

export const VisFlyttTilGosysOmKildeGosys = Template.bind({});
VisFlyttTilGosysOmKildeGosys.args = {
  oppgave: { ...defaultOppgave, kilde: OppgaveKilde.LOKAL },
  detaljertJournalpost: detaljertJournalpostMal,
  submitJournalføring: action('button-click') as (data: JournalførSubmitValue) => void,
  reserverOppgave: action('button-click') as (data: ReserverOppgaveType) => void,
  navAnsatt: {
    brukernavn: 'X123456',
  } as NavAnsatt,
};
