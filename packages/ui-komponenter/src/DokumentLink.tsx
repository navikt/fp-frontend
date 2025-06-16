import React, { type PropsWithChildren } from 'react';

import { Link } from '@navikt/ds-react';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import { åpneVindu } from '@navikt/fp-utils';

export type DokumentLinkReferanse = {
  saksnummer: string;
  journalpostId: string;
  dokumentId: string;
  dokumentTittel?: string;
};

export const DokumentLink = ({
  saksnummer,
  journalpostId,
  dokumentId,
  dokumentTittel,
  children,
}: PropsWithChildren<DokumentLinkReferanse>) => {
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
