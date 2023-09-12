import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { HistorikkInnslagDokumentLink } from '@navikt/fp-types';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FileIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import styles from './historikkDokumentLenke.module.css';

const DOCUMENT_SERVER_URL = '/fpsak/api/dokument/hent-dokument';

interface OwnProps {
  dokumentLenke: HistorikkInnslagDokumentLink;
  saksnummer: string;
}

const HistorikkDokumentLenke: FunctionComponent<OwnProps> = ({ dokumentLenke, saksnummer }) => {
  const { tag, journalpostId, dokumentId, utgått } = dokumentLenke;

  if (utgått) {
    return (
      <HStack>
        <FileIcon title={tag} className={styles.ikon} />
        <FormattedMessage id="Historikk.Utgått" values={{ tag }} />
      </HStack>
    );
  }
  return (
    <>
      <VerticalSpacer fourPx />
      <a
        className={styles.dokumentLenke}
        href={`${DOCUMENT_SERVER_URL}?saksnummer=${saksnummer}&journalpostId=${journalpostId}&dokumentId=${dokumentId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <HStack>
          <FileIcon title={tag} className={styles.ikon} />
          {tag}
        </HStack>
      </a>
    </>
  );
};

export default HistorikkDokumentLenke;
