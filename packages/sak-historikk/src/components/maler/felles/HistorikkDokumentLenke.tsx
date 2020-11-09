import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { HistorikkInnslagDokumentLink } from '@fpsak-frontend/types';

import styles from '../historikkMalType.less';

const DOCUMENT_SERVER_URL = '/fpsak/api/dokument/hent-dokument';

interface OwnProps {
  dokumentLenke: HistorikkInnslagDokumentLink;
  saksnummer: number;
}

const HistorikkDokumentLenke: FunctionComponent<OwnProps> = ({
  dokumentLenke,
  saksnummer,
}) => {
  const {
    tag, journalpostId, dokumentId, utgått,
  } = dokumentLenke;

  if (utgått) {
    return (
      <span className={styles.dokumentLenke}>
        <i className={styles.dokumentIkon} title={tag} />
        <FormattedMessage id="Historikk.Utgått" values={{ tag }} />
      </span>
    );
  }
  return (
    <a
      className={styles.dokumentLenke}
      href={`${DOCUMENT_SERVER_URL}?saksnummer=${saksnummer}&journalpostId=${journalpostId}&dokumentId=${dokumentId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={styles.dokumentIkon} title={tag} />
      {tag}
    </a>
  );
};

export default HistorikkDokumentLenke;
