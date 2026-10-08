import { FormattedMessage } from 'react-intl';

import { FileIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack } from '@navikt/ds-react';
import { LabeledValue } from '@navikt/ft-ui-komponenter';

import type { Dokument } from '@navikt/fp-types';

import { DokumentLink } from '../../../../ui-komponenter';

interface Props {
  saksNr: string;
  documents: ({
    fikkInnsyn: boolean;
  } & Dokument)[];
}

export const DocumentListVedtakInnsyn = ({ documents, saksNr }: Props) => {
  return (
    <LabeledValue
      size="small"
      label={<FormattedMessage id="DocumentListVedtakInnsyn.InnsynsDok" />}
      fieldType="component"
      value={
        documents.length === 0 ? (
          <BodyShort size="small">
            <FormattedMessage id="DocumentListVedtakInnsyn.NoDocuments" />
          </BodyShort>
        ) : (
          <ul>
            {documents.map(document => (
              <li key={Number.parseInt(document.dokumentId, 10)}>
                <DokumentLink
                  saksnummer={saksNr}
                  journalpostId={document.journalpostId}
                  dokumentId={document.dokumentId}
                  dokumentTittel={document.tittel ?? undefined}
                >
                  <HStack gap="space-4" wrap={false} align="center">
                    <FileIcon fontSize="1.125rem" className="mr-1" aria-hidden />
                    <BodyShort size="small" as="span">
                      {document.tittel}
                    </BodyShort>
                  </HStack>
                </DokumentLink>
              </li>
            ))}
          </ul>
        )
      }
    />
  );
};
