import { useIntl } from 'react-intl';

import { FileIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Link } from '@navikt/ds-react';

import { hentDokumentLenke } from '@navikt/fp-konstanter';
import type { OppgaveDokument } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  dokument: OppgaveDokument;
}

export const DokumentVisning = ({ dokument }: Props) => {
  const { fagsak } = usePanelDataContext();
  const intl = useIntl();

  return (
    <Link href={hentDokumentLenke(fagsak.saksnummer, dokument.journalpostId, dokument.dokumentId)} target="_blank">
      <HStack gap="1">
        <FileIcon width="20" height="20" aria-label={intl.formatMessage({ id: 'DokumentVisning.FilIkon' })} />
        <BodyShort size="small">
          {dokument.tittel ? dokument.tittel : intl.formatMessage({ id: 'DokumentVisning.UkjentTittel' })}
        </BodyShort>
      </HStack>
    </Link>
  );
};
