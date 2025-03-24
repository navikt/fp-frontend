import { useIntl } from 'react-intl';

import { FileIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Link } from '@navikt/ds-react';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import type { Dokument, Fagsak } from '@navikt/fp-types';

import styles from './dokumentVisning.module.css';

interface Props {
  dokument: Dokument;
  fagsak: Fagsak;
}

export const DokumentVisning = ({ dokument, fagsak }: Props) => {
  const intl = useIntl();

  return (
    <Link
      href={hentDokumentLenke(fagsak.saksnummer, dokument.journalpostId, dokument.dokumentId)}
      className={styles.dokument}
      target="_blank"
    >
      <HStack>
        <FileIcon width="20" height="20" aria-label={intl.formatMessage({ id: 'DokumentVisning.FilIkon' })} />
        <BodyShort size="small" className={styles.dokumentTittel}>
          {dokument.tittel ? dokument.tittel : intl.formatMessage({ id: 'DokumentVisning.UkjentTittel' })}
        </BodyShort>
      </HStack>
    </Link>
  );
};
