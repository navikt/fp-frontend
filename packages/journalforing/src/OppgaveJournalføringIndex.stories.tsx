import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { FagsakStatus, FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-kodeverk';
import { withQueryClient, withRouter } from '@navikt/fp-storybook-utils';
import type { NavAnsatt } from '@navikt/fp-types';

import { FpFordelUrl } from './data/fpFordelApi';
import { OppgaveJournalføringIndex } from './OppgaveJournalføringIndex';
import type { Journalpost, JournalpostTilstand } from './typer/journalpostTsType';
import { erEndeligJournalført } from './utils/journalpostTilstandUtils';

const meta = {
  title: 'journalføring/journalføring/OppgaveJournalføringIndex',
  component: OppgaveJournalføringIndex,
  decorators: [withRouter, withQueryClient],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    navAnsatt: {
      kanOppgavestyre: true,
      kanBehandleKode6: true,
      brukernavn: 'X123456',
    } as NavAnsatt,
  },
} satisfies Meta<typeof OppgaveJournalføringIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

const getDetaljertJournalpostMal = (medBruker: boolean, tilstand: JournalpostTilstand): Journalpost => ({
  journalpostId: '986547336994',
  tittel: 'Inntektsmelding',
  kanOppretteSak: true,
  eksisterendeSaksnummer: erEndeligJournalført(tilstand) ? '125416597' : undefined,
  tilstand,
  journalførendeEnhet: erEndeligJournalført(tilstand) ? '4867' : undefined,
  kanal: 'ALTINN',
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
  ytelseType: FagsakYtelseType.FORELDREPENGER,
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
          ytelseType: FagsakYtelseType.FORELDREPENGER,
          opprettetDato: '2022-01-02',
          førsteUttaksdato: '2022-05-02',
          status: FagsakStatus.LOPENDE,
          familieHendelseJf: {
            familiehHendelseDato: '2022-04-15',
            familihendelseType: FamilieHendelseType.FODSEL,
          },
        },
        {
          saksnummer: '125416597',
          ytelseType: FagsakYtelseType.FORELDREPENGER,
          opprettetDato: '2022-01-02',
          førsteUttaksdato: '2022-05-02',
          status: FagsakStatus.UNDER_BEHANDLING,
          familieHendelseJf: {
            familiehHendelseDato: '2022-04-15',
            familihendelseType: FamilieHendelseType.ADOPSJON,
          },
        },
        {
          saksnummer: '155462542',
          ytelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
          opprettetDato: '2022-03-02',
          status: FagsakStatus.AVSLUTTET,
          familieHendelseJf: {
            familiehHendelseDato: '2022-02-01',
            familihendelseType: FamilieHendelseType.TERMIN,
          },
        },
        {
          saksnummer: '175419131',
          ytelseType: FagsakYtelseType.FORELDREPENGER,
          opprettetDato: '2022-01-02',
          førsteUttaksdato: '2022-02-02',
          status: FagsakStatus.OPPRETTET,
          familieHendelseJf: {
            familiehHendelseDato: '2022-03-01',
            familihendelseType: FamilieHendelseType.OMSORG,
          },
        },
      ]
    : [],
});

export const ViseOppgaverIListe: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FpFordelUrl.ALLE_JOURNAL_OPPGAVER, () =>
          HttpResponse.json([
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
              kilde: 'LOKAL',
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
              kilde: 'GOSYS',
            },
            {
              journalpostId: '345681257',
              opprettetDato: '2022-01-01',
              frist: '2022-01-01',
              ytelseType: 'FP',
              enhetId: '4008',
              beskrivelse: 'Søknad',
              reservertAv: 'X123456',
              kilde: 'GOSYS',
            },
          ]),
        ),
        http.get(FpFordelUrl.HENT_JOURNALPOST_DETALJER, () =>
          HttpResponse.json(getDetaljertJournalpostMal(true, 'MOTTATT')),
        ),
        http.post(FpFordelUrl.FERDIGSTILL_JOURNALFØRING, () => HttpResponse.json({ saksnummer: '12345678' })),
        http.post(FpFordelUrl.HENT_BRUKER, () =>
          HttpResponse.json({ navn: 'Søker Søkersen', fødselsnummer: '15529115072' }),
        ),
        http.post(FpFordelUrl.OPPDATER_MED_BRUKER, () =>
          HttpResponse.json(getDetaljertJournalpostMal(true, 'MOTTATT')),
        ),
      ],
    },
  },
};

export const ViseOppgaverUtenBruker: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FpFordelUrl.ALLE_JOURNAL_OPPGAVER, () =>
          HttpResponse.json([
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
              kilde: 'GOSYS',
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
              kilde: 'LOKAL',
            },
            {
              journalpostId: '345681257',
              opprettetDato: '2022-01-01',
              frist: '2022-01-01',
              ytelseType: 'FP',
              enhetId: '4008',
              beskrivelse: 'Søknad',
              kilde: 'GOSYS',
            },
          ]),
        ),
        http.get(FpFordelUrl.HENT_JOURNALPOST_DETALJER, () =>
          HttpResponse.json(getDetaljertJournalpostMal(false, 'MOTTATT')),
        ),
        http.post(FpFordelUrl.FERDIGSTILL_JOURNALFØRING, () => HttpResponse.json({ saksnummer: '12345678' })),
        http.post(FpFordelUrl.HENT_BRUKER, () =>
          HttpResponse.json({ navn: 'Søker Søkersen', fødselsnummer: '15529115072' }),
        ),
        http.post(FpFordelUrl.OPPDATER_MED_BRUKER, () =>
          HttpResponse.json(getDetaljertJournalpostMal(true, 'MOTTATT')),
        ),
      ],
    },
  },
};

export const SøkeOppJournalpostSomLiggerPåAnnenSak: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FpFordelUrl.ALLE_JOURNAL_OPPGAVER, () => HttpResponse.json([])),
        http.get(FpFordelUrl.HENT_JOURNALPOST_DETALJER, () =>
          HttpResponse.json(getDetaljertJournalpostMal(true, 'JOURNALFOERT')),
        ),
        http.post(FpFordelUrl.FERDIGSTILL_JOURNALFØRING, () => HttpResponse.json({ saksnummer: '12345678' })),
      ],
    },
  },
};

export const FinnerIkkeJournalpostVedSøkOgIngenOppgaver: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FpFordelUrl.ALLE_JOURNAL_OPPGAVER, () => HttpResponse.json([])),
        http.get(FpFordelUrl.HENT_JOURNALPOST_DETALJER, () => HttpResponse.json(undefined)),
        http.post(FpFordelUrl.FERDIGSTILL_JOURNALFØRING, () => HttpResponse.json({ saksnummer: '12345678' })),
      ],
    },
  },
};

export const IngenOppgaver: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(FpFordelUrl.ALLE_JOURNAL_OPPGAVER, () => HttpResponse.json([])),
        http.get(FpFordelUrl.HENT_JOURNALPOST_DETALJER, () => HttpResponse.json(undefined)),
        http.post(FpFordelUrl.FERDIGSTILL_JOURNALFØRING, () => HttpResponse.json({ saksnummer: '12345678' })),
        http.post(FpFordelUrl.HENT_BRUKER, () =>
          HttpResponse.json({ navn: 'Søker Søkersen', fødselsnummer: '15529115072' }),
        ),
        http.post(FpFordelUrl.OPPDATER_MED_BRUKER, () =>
          HttpResponse.json(getDetaljertJournalpostMal(true, 'MOTTATT')),
        ),
      ],
    },
  },
};
