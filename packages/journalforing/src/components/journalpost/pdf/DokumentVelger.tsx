import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { ToggleGroup } from '@navikt/ds-react';
import JournalDokument from '../../../typer/journalDokumentTsType';
import styles from './dokumentVelger.module.css';

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
  const antallDokumenter = dokumenter.length;
  return (
    <div className={styles.panel}>
      <div className={styles.toggleGroup}>
        <ToggleGroup defaultValue={valgtDokument.dokumentId} onChange={endreValg}>
          {dokumenter.map((dok, index) => (
            <ToggleGroup.Item value={dok.dokumentId} key={dok.dokumentId}>
              <FormattedMessage
                id="ValgtOppgave.Dokument.Knapp"
                values={{ dok: index + 1, antall: antallDokumenter }}
              />
            </ToggleGroup.Item>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default DokumentVelger;
