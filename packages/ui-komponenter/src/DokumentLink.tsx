import React from 'react';

import { Link } from '@navikt/ds-react';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { åpneVindu } from '@navikt/fp-utils';

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
      event.preventDefault();
      åpneVindu(event.currentTarget.href, event.currentTarget.target, dokumentTittel);
    }
  };
