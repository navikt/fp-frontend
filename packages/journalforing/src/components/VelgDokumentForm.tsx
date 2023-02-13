import React, { FunctionComponent, useCallback } from 'react';
import { BodyShort, Label } from '@navikt/ds-react';
import { NewTab } from '@navikt/ds-icons';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
  const intl = useIntl();
  if (!dokumenter || dokumenter.length < 1) {
    return (
      <>
        <FlexRow>
          <FlexColumn>
            <Label><FormattedMessage id="ValgtOppgave.Dokument.Tittel" /></Label>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <BodyShort><FormattedMessage id="ValgtOppgave.Dokument.Ingen" /></BodyShort>
          </FlexColumn>
        </FlexRow>
      </>
    );
  }
  return (
    <>
      {dokumenter.map((dok) => (
        <>
          <FlexRow className={styles.dokumentRad}>
            <FlexColumn className={styles.dokumentTittel}><Label>{dok.tittel}</Label></FlexColumn>
            <FlexColumn><a href={dok.lenke} target="_blank" rel="noreferrer"><NewTab className={styles.newTabIcon} /></a></FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      ))}
    </>
  );
};
export default VelgDokumentForm;
