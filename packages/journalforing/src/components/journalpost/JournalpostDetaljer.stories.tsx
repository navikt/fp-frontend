import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { fagsakYtelseType, fagsakStatus } from '@navikt/fp-kodeverk';
import JournalpostDetaljer from './JournalpostDetaljer';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import OppgavePrioritet from '../../kodeverk/oppgavePrioritet';
import JournalKanal from '../../kodeverk/journalKanal';
import Journalpost from '../../typer/journalpostTsType';

import messages from '../../../i18n/nb_NO.json';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import DokumentTittel from '../../kodeverk/dokumentTittel';

const withIntl = getIntlDecorator(messages);

const defaultOppgave = {
  id: 600,
  journalpostId: '12345125',
  aktørId: '9996923456799',
  fødselsnummer: '12048714373',
  opprettetDato: '2022-01-01',
  frist: '2022-02-01',
  ytelseType: 'FP',
  enhetId: '4108',
  journalpostHarMangler: false,
  prioritet: OppgavePrioritet.NORM,
  beskrivelse: 'Inntektsmelding',
};

const detaljertJournalpostMal = {
  journalpostId: '986547336994',
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
  oppgave: OppgaveOversikt;
  submitJournalføring: (data: JournalførSubmitValue) => void;
}> = ({ detaljertJournalpost, oppgave, submitJournalføring }) => (
  <JournalpostDetaljer
    avbrytVisningAvJournalpost={action('button-click') as () => void}
    oppgave={oppgave}
    journalpost={detaljertJournalpost}
    submitJournalføring={submitJournalføring}
  />
);

export const VisOppgaveForSubmit = Template.bind({});
VisOppgaveForSubmit.args = {
  oppgave: defaultOppgave,
  detaljertJournalpost: detaljertJournalpostMal,
  submitJournalføring: action('button-click') as (data: JournalførSubmitValue) => void,
};
