import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { fagsakYtelseType, fagsakStatus } from '@navikt/fp-kodeverk';
import OppgaveDetaljertVisning from './OppgaveDetaljertVisning';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import OppgavePrioritet from '../../kodeverk/oppgavePrioritet';
import JournalKanal from '../../kodeverk/journalKanal';
import Journalpost from '../../typer/journalpostTsType';

import messages from '../../../i18n/nb_NO.json';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';

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
      datoOpprettet: '2022-01-03',
      sistEndret: '2022-07-03',
      status: fagsakStatus.AVSLUTTET,
    },
  ],
} as Journalpost;

export default {
  title: 'journalføring/journalføring/Journalpost',
  component: OppgaveDetaljertVisning,
  decorators: [withIntl],
};

const Template: Story<{
  detaljertJournalpost: Journalpost,
  oppgave: OppgaveOversikt,
  submitJournalføring?: (data: JournalførSubmitValue) => Promise<void>
}> = ({
  detaljertJournalpost,
  oppgave,
  submitJournalføring,
}) => (
  <OppgaveDetaljertVisning
    avbrytVisningAvJournalpost={undefined}
    oppgave={oppgave}
    journalpost={detaljertJournalpost}
    submitJournalføring={submitJournalføring}
  />
);

export const VisOppgaveForSubmit = Template.bind({});
VisOppgaveForSubmit.args = {
  oppgave: defaultOppgave,
  detaljertJournalpost: detaljertJournalpostMal,
  submitJournalføring: action('button-click') as (data: any) => Promise<any>,
};
