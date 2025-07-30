import { HStack, ToggleGroup, Tooltip } from '@navikt/ds-react';

import type { JournalDokument } from '../../../typer/journalDokumentTsType';

interface Props {
  setValgtDokument: (dok: JournalDokument) => void;
  valgtDokument: JournalDokument;
  dokumenter: JournalDokument[];
}

export const DokumentVelger = ({ setValgtDokument, valgtDokument, dokumenter }: Props) => {
  if (dokumenter.length < 2) {
    return null;
  }
  const endreValg = (valgtDokumentId: string) => {
    const nyttValg = dokumenter.find(dok => dok.dokumentId === valgtDokumentId);
    if (nyttValg) {
      setValgtDokument(nyttValg);
    }
  };
  return (
    <HStack justify="center">
      <ToggleGroup defaultValue={valgtDokument.dokumentId} onChange={endreValg}>
        {dokumenter.map(({ dokumentId, tittel }) => (
          <Tooltip key={dokumentId} content={tittel}>
            <ToggleGroup.Item value={dokumentId}>{lagForkortetNavn(tittel)}</ToggleGroup.Item>
          </Tooltip>
        ))}
      </ToggleGroup>
    </HStack>
  );
};

const lagForkortetNavn = (tittel: string): string => {
  if (!tittel) {
    return 'Ukjent tittel';
  }
  if (tittel.length > 15) {
    const kortNavn = tittel.substring(0, 14);
    return kortNavn.concat('...');
  }
  return tittel;
};
