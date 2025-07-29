import { Sakstype } from '../kodeverk/sakstype';

export type DokumentTittelSubmitValue = Readonly<{
  dokumentId: string;
  tittel: string;
}>;

type OpprettSakSubmitValue = Readonly<{
  ytelseType?: string;
  aktørId: string;
  sakstype: Sakstype;
}>;

export type JournalførSakSubmitValue = Readonly<{
  saksnummer?: string;
  opprettSak?: OpprettSakSubmitValue;
}>;

export type OppdaterJournalførTittlerSubmitValue = Readonly<{
  journalpostTittel?: string;
  dokumenter?: DokumentTittelSubmitValue[];
}>;

export type JournalførSubmitValue = JournalførSakSubmitValue &
  Readonly<{
    journalpostId: string;
    enhetId: string;
    oppdaterTitlerDto?: OppdaterJournalførTittlerSubmitValue;
  }>;
