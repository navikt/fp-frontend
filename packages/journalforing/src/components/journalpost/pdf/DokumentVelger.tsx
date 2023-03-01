import React, { FunctionComponent } from 'react';
import { ToggleGroup } from '@navikt/ds-react';
import JournalDokument from '../../../typer/journalDokumentTsType';
import styles from './dokumentVelger.less';

type OwnProps = {
    setValgtDokument: (dok: JournalDokument) => void;
    valgtDokument: JournalDokument;
    dokumenter: JournalDokument[];
}

const DokumentVelger: FunctionComponent<OwnProps> = ({ setValgtDokument, valgtDokument, dokumenter }) => {
  if (dokumenter.length < 2) {
    return null;
  }
  const endreValg = (valgtDokumentId: string) => {
    const nyttValg = dokumenter.find((dok) => dok.dokumentId === valgtDokumentId);
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
              {dok.tittel}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default DokumentVelger;
