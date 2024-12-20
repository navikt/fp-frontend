import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import { NavAnsatt } from '@navikt/fp-types';

import { DokumentTittel } from '../../kodeverk/dokumentTittel';
import { JournalKanal } from '../../kodeverk/journalKanal';
import { OppgaveKilde } from '../../kodeverk/oppgaveKilde';
import { Journalpost } from '../../typer/journalpostTsType';
import { JournalpostDetaljer } from './JournalpostDetaljer';

import messages from '../../../i18n/nb_NO.json';

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
  ytelseType: FagsakYtelseType.FORELDREPENGER,
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
      ytelseType: FagsakYtelseType.FORELDREPENGER,
      opprettetDato: '2022-01-02',
      status: FagsakStatus.LOPENDE,
    },
    {
      saksnummer: '155462542',
      ytelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
      opprettetDato: '2022-01-02',
      status: FagsakStatus.AVSLUTTET,
    },
    {
      saksnummer: '175419131',
      ytelseType: FagsakYtelseType.FORELDREPENGER,
      opprettetDato: '2022-01-03',
      status: FagsakStatus.AVSLUTTET,
    },
  ],
} as Journalpost;

const meta = {
  title: 'journalføring/journalføring/Journalpost',
  component: JournalpostDetaljer,
  decorators: [withIntl, withQueryClient],
  args: {
    lasterBruker: false,
    submitJournalføring: action('button-click'),
    reserverOppgave: action('button-click'),
    avbrytVisningAvJournalpost: action('button-click'),
    knyttJournalpostTilBruker: action('button-click'),
    forhåndsvisBruker: action('button-click'),
    flyttTilGosys: action('button-click'),
  },
} satisfies Meta<typeof JournalpostDetaljer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisOppgaveForSubmitReservertAvMeg: Story = {
  args: {
    oppgave: { ...defaultOppgave, reservertAv: saksbehandler },
    journalpost: detaljertJournalpostMal,
    navAnsatt: navAnsattDefault,
  },
};

export const VisOppgaveReservertAvAndre: Story = {
  args: {
    ...VisOppgaveForSubmitReservertAvMeg.args,
    navAnsatt: {
      brukernavn: 'X123456',
    } as NavAnsatt,
  },
};

export const VisOppgaveIkkeReservert: Story = {
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: defaultOppgave,
  },
};

export const VisFlyttTilGosysOmKildeGosys: Story = {
  args: {
    ...VisOppgaveReservertAvAndre.args,
    oppgave: { ...defaultOppgave, kilde: OppgaveKilde.LOKAL },
  },
};
