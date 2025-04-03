import { useIntl } from 'react-intl';

import { FileIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack } from '@navikt/ds-react';

import { DokumentLink } from '@navikt/fp-felles';
import type { OppgaveDokument } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  dokument: OppgaveDokument;
}

export const DokumentVisning = ({ dokument }: Props) => {
  const { fagsak } = usePanelDataContext();
  const intl = useIntl();
  const tittel = dokument.tittel ?? intl.formatMessage({ id: 'DokumentVisning.UkjentTittel' });
  return (
    <DokumentLink
      saksnummer={fagsak.saksnummer}
      journalpostId={dokument.journalpostId}
      dokumentId={dokument.dokumentId}
      dokumentTittel={tittel}
    >
      <HStack gap="1">
        <FileIcon width="20" height="20" aria-label={intl.formatMessage({ id: 'DokumentVisning.FilIkon' })} />
        <BodyShort size="small">{tittel}</BodyShort>
      </HStack>
    </DokumentLink>
  );
};
