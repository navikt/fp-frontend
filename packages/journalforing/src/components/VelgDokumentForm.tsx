import React, { FunctionComponent, useCallback } from 'react';
import { Select } from '@navikt/ds-react';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, useIntl } from 'react-intl';
import JournalDokument from '../typer/journalDokumentTsType';
import styles from './journalforingPanel.less';

const finnDokument = (dokumentId: string, dokumenter: JournalDokument[]): JournalDokument => {
  const res = dokumenter.find((dok) => dok.dokumentId === dokumentId);
  if (!res) {
    throw new Error(`Finner ikke dokument med id ${dokumentId}`);
  }
  return res;
};

type OwnProps = Readonly<{
  dokumenter: JournalDokument[];
  valgtDokument?: JournalDokument;
  setValgtDokument: (dok: JournalDokument) => void;
}>;

/**
 * VelgDokumentForm - Form komponent for å velge hvilket dokument som skal vises i pdfVisning
 */
const VelgDokumentForm: FunctionComponent<OwnProps> = ({
  dokumenter,
  valgtDokument,
  setValgtDokument,
}) => {
  const intl = useIntl();
  const settDokument = (dokumentId: string) => {
    if (!dokumentId) {
      setValgtDokument(undefined);
    } else {
      const nyttValgtDokument = finnDokument(dokumentId, dokumenter);
      setValgtDokument(nyttValgtDokument);
    }
  };

  const endreValg = useCallback((e: React.ChangeEvent) => {
    const tg = e.target as HTMLSelectElement;
    settDokument(tg.value);
  }, []);

  return (
    <FlexRow>
      <FlexColumn>
        <Select
          label={intl.formatMessage({ id: 'ValgtOppgave.Dokument.Velg' })}
          onChange={endreValg}
        >
          <option key="Velg dokument" value="">Velg dokument</option>
          {dokumenter.map((dok) => (
            <option key={dok.dokumentId} value={dok.dokumentId}>{dok.tittel || dok.dokumentId}</option>
          ))}
        </Select>
      </FlexColumn>
      {valgtDokument && (
        <FlexColumn className={styles.linkTekst}>
          <a href={valgtDokument.lenke} target="_blank" rel="noreferrer"><FormattedMessage id="ValgtOppgave.Dokument.ÅpneFane" /></a>
        </FlexColumn>
      )}

    </FlexRow>
  );
};
export default VelgDokumentForm;
