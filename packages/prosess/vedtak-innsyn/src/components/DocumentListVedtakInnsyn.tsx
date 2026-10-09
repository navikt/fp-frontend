import { FormattedMessage } from 'react-intl';

import { FileIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack } from '@navikt/ds-react';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { dateTimeFormat } from '@navikt/ft-utils';

import type { Dokument, InnsynDokument } from '@navikt/fp-types';
import { DokumentLink } from '@navikt/fp-ui-komponenter';

interface Props {
  saksNr: string;
  innsynDokumenter: InnsynDokument[];
  alleDokumenter: Dokument[];
}

export const DocumentListVedtakInnsyn = ({ saksNr, innsynDokumenter, alleDokumenter }: Props) => {
  const dokumenterInnvilgetForInnsyn = getDokumenterSomFikkInnsyn(alleDokumenter, innsynDokumenter);

  return (
    <LabeledValue
      size="small"
      label={<FormattedMessage id="DocumentListVedtakInnsyn.InnsynsDok" />}
      fieldType="component"
      value={
        dokumenterInnvilgetForInnsyn.length === 0 ? (
          <BodyShort size="small">
            <FormattedMessage tagName="i" id="DocumentListVedtakInnsyn.NoDocuments" />
          </BodyShort>
        ) : (
          <ul>
            {dokumenterInnvilgetForInnsyn.map(document => (
              <BodyShort size="small" as="li" key={`${document.journalpostId}-${document.dokumentId}`}>
                <DokumentLink
                  saksnummer={saksNr}
                  journalpostId={document.journalpostId}
                  dokumentId={document.dokumentId}
                  dokumentTittel={document.tittel ?? undefined}
                >
                  <HStack gap="space-4" wrap={false} align="center">
                    <FileIcon fontSize="1.125rem" aria-hidden />
                    {document.tittel}
                    {document.tidspunkt ? ` (${dateTimeFormat(document.tidspunkt)})` : null}
                  </HStack>
                </DokumentLink>
              </BodyShort>
            ))}
          </ul>
        )
      }
    />
  );
};

const getDokumenterSomFikkInnsyn = (alleDokumenter: Dokument[], innsynDokumenter: InnsynDokument[]): Dokument[] =>
  innsynDokumenter
    .filter(dokument => dokument.fikkInnsyn)
    .flatMap(({ dokumentId, journalpostId }) => {
      const dokument = alleDokumenter.find(d => d.dokumentId === dokumentId && d.journalpostId === journalpostId);
      return dokument ? [dokument] : [];
    });
