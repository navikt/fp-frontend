import { FileIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack } from '@navikt/ds-react';

import type { HistorikkInnslagDokumentLink } from '@navikt/fp-types';

import { DokumentLink } from '../../../../../ui-komponenter';

interface Props {
  dokumentLenke: HistorikkInnslagDokumentLink;
  saksnummer: string;
}

export const HistorikkDokumentLenke = ({
  dokumentLenke: { tag, journalpostId, dokumentId, utgått },
  saksnummer,
}: Props) => {
  const dokument = (
    <HStack align="center" gap="space-4">
      <FileIcon title={tag} width={24} height={24} />
      <BodyShort>{tag}</BodyShort>
    </HStack>
  );

  return utgått ? (
    dokument
  ) : (
    <DokumentLink saksnummer={saksnummer} journalpostId={journalpostId} dokumentId={dokumentId} dokumentTittel={tag}>
      {dokument}
    </DokumentLink>
  );
};
