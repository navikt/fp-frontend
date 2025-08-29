import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { FagsakStatusEnum } from '@navikt/fp-kodeverk';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import type { NavAnsatt } from '@navikt/fp-types';

import type { Journalpost } from '../../typer/journalpostTsType';
import type { Oppgave } from '../../typer/oppgaveTsType';
import { DokumentTittel } from '../../utils/dokumentTittel';
import { JournalpostDetaljer } from './JournalpostDetaljer';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const saksbehandler = 'Z123343';
const journalpost = 986547336994;

const navAnsattDefault = {
  brukernavn: saksbehandler,
} as NavAnsatt;

const defaultOppgave: Oppgave = {
  journalpostId: journalpost.toString(),
  aktørId: '9996923456799',
  fødselsnummer: '12048714373',
  opprettetDato: '2022-01-01',
  frist: '2022-02-01',
  ytelseType: 'FP',
  enhetId: '4108',
  beskrivelse: 'Inntektsmelding',
  kilde: 'GOSYS',
};

const detaljertJournalpostMal = {
  journalpostId: journalpost.toString(),
  tittel: DokumentTittel.BEKREFTELSE_ARBEIDSGIVER,
  kanal: 'EESSI',
  kanOppretteSak: true,
  bruker: {
    navn: 'Søker Søkersen',
    fnr: '12048714373',
    aktørId: '98594685464858',
  },
  avsender: {
    navn: 'Svingen sag og høvleri',
    id: '999999999',
  },
  ytelseType: 'FP',
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
      ytelseType: 'FP',
      opprettetDato: '2022-01-02',
      status: FagsakStatusEnum.LOPENDE,
    },
    {
      saksnummer: '155462542',
      ytelseType: 'SVP',
      opprettetDato: '2022-01-02',
      status: FagsakStatusEnum.AVSLUTTET,
    },
    {
      saksnummer: '175419131',
      ytelseType: 'FP',
      opprettetDato: '2022-01-03',
      status: FagsakStatusEnum.AVSLUTTET,
    },
  ],
} as Journalpost;

const journalpostKlage = {
  journalpostId: journalpost.toString(),
  tittel: DokumentTittel.KLAGE,
  kanal: 'SKAN_NETS',
  kanOppretteSak: false,
  bruker: {
    navn: 'Søker Søkersen',
    fnr: '12048714373',
    aktørId: '98594685464858',
  },
  avsender: {
    navn: 'Søker Søkersen',
    id: '12048714373',
  },
  ytelseType: 'FP',
  dokumenter: [
    {
      dokumentId: '999999997',
      tittel: DokumentTittel.KLAGE,
      varianter: [],
      lenke: '',
    },
  ],
  fagsaker: [
    {
      saksnummer: '125416597',
      ytelseType: 'FP',
      opprettetDato: '2022-01-02',
      status: FagsakStatusEnum.LOPENDE,
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

export const VisJournalpostKlage: Story = {
  args: {
    oppgave: { ...defaultOppgave, reservertAv: saksbehandler },
    journalpost: journalpostKlage,
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
    oppgave: { ...defaultOppgave, kilde: 'LOKAL' },
  },
};
