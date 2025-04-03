import React from 'react';

import { Link } from '@navikt/ds-react';

import { hentDokumentLenke } from '@navikt/fp-konstanter';

export const DokumentLink = ({
  saksnummer,
  journalpostId,
  dokumentId,
  dokumentTittel,
  children,
}: {
  saksnummer: string;
  journalpostId: string;
  dokumentId: string;
  dokumentTittel?: string;
  children?: React.ReactNode;
}) => {
  const target = `${journalpostId}-${dokumentId}`;
  const url = hentDokumentLenke(saksnummer, journalpostId, dokumentId);

  return (
    <Link href={url} target={target} rel="noopener noreferrer" onClick={openDocumentFromLink(dokumentTittel)}>
      {children ?? dokumentTittel}
    </Link>
  );
};

const openDocumentFromLink =
  (dokumentTittel?: string) =>
  (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    if (dokumentTittel) {
      const dokumentVindu = window.open(event.currentTarget.href, event.currentTarget.target);
      if (dokumentVindu) {
        setTimeout(() => {
          dokumentVindu.document.title = dokumentTittel;
        }, 1000);
      }
    }
  };
