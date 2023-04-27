import React, { FunctionComponent } from 'react';
import { ToggleGroup } from '@navikt/ds-react';
import JournalDokument from '../../../typer/journalDokumentTsType';
import styles from './dokumentVelger.module.css';

const FORKORTET = '...';

const lagForkortetNavn = (dok: JournalDokument): string => {
  if (!dok.tittel) {
    return 'Ukjent tittel'
  }
  if (dok.tittel.length > 10) {
    const kortNavn = dok.tittel.substring(0,9);
    return kortNavn.concat(FORKORTET);
  }
  return dok.tittel;
}

type OwnProps = {
  setValgtDokument: (dok: JournalDokument) => void;
  valgtDokument: JournalDokument;
  dokumenter: JournalDokument[];
};

const DokumentVelger: FunctionComponent<OwnProps> = ({ setValgtDokument, valgtDokument, dokumenter }) => {
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
    <div className={styles.panel}>
      <div className={styles.toggleGroup}>
        <ToggleGroup defaultValue={valgtDokument.dokumentId} onChange={endreValg}>
          {dokumenter.map((dok) => (
            <ToggleGroup.Item value={dok.dokumentId} key={dok.dokumentId}>
              {lagForkortetNavn(dok)}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default DokumentVelger;
