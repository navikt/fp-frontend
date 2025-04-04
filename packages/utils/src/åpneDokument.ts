import { hentDokumentLenke } from '@navikt/fp-konstanter';

export const åpneDokument = (
  saksnummer: string,
  journalpostId: string,
  dokumentId: string,
  dokumentTittel?: string,
): void => {
  const url = hentDokumentLenke(saksnummer, journalpostId, dokumentId);
  const target = `${journalpostId}-${dokumentId}`;
  if (dokumentTittel) {
    åpneVindu(url, target, dokumentTittel);
  }
};

export const åpneVindu = (url: string, target: string, dokumentTittel: string): void => {
  const dokumentVindu = window.open(url, target);
  if (dokumentVindu) {
    setTimeout(() => {
      dokumentVindu.document.title = dokumentTittel;
    }, 1000);
  }
};
