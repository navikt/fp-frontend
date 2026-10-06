import { FormattedMessage } from 'react-intl';

import { BodyShort, List } from '@navikt/ds-react';
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
          <List size="small">
            {documents.map(document => (
              <List.Item key={Number.parseInt(document.dokumentId, 10)}>
                <DokumentLink
                  saksnummer={saksNr}
                  journalpostId={document.journalpostId}
                  dokumentId={document.dokumentId}
                  dokumentTittel={document.tittel ?? undefined}
                />
              </List.Item>
            ))}
          </List>
        )
      }
    />
  );
};
