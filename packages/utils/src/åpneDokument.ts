import { hentDokumentLenke } from '@navikt/fp-konstanter';

export const åpneDokument = (
  saksnummer: string,
  journalpostId: string,
  dokumentId: string,
  dokumentTittel?: string,
): void => {
  const url = hentDokumentLenke(saksnummer, journalpostId, dokumentId);
  const target = `${journalpostId}-${dokumentId}`;

  const dokumentVindu = window.open(url, target);
  if (dokumentTittel && dokumentVindu) {
    setTimeout(() => {
      dokumentVindu.document.title = dokumentTittel;
    }, 1000);
  }
};
