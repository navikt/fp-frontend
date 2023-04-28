import React, { FunctionComponent, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import JournalDokument from '../../../typer/journalDokumentTsType';
import PDFVisning from './PDFVisning';
import DokumentVelger from './DokumentVelger';
import styles from './dokumentIndex.module.css';

type OwnProps = {
  dokumenter?: JournalDokument[];
};

const DokumentIndex: FunctionComponent<OwnProps> = ({ dokumenter }) => {
  const [valgDokument, setValgtDokument] = useState<JournalDokument | undefined>();
  useEffect(() => {
    const initieltDokumnet = dokumenter && dokumenter.length > 0 ? dokumenter[0] : undefined;
    setValgtDokument(initieltDokumnet);
  }, [dokumenter]);
  if (!valgDokument || !dokumenter) {
    return (
      <div>
        <Heading size="small">
          <FormattedMessage id="ValgtOppgave.Dokumenter.Tom" />
        </Heading>
      </div>
    );
  }
  return (
    <div className={styles.pdfContainer}>
      <DokumentVelger setValgtDokument={setValgtDokument} valgtDokument={valgDokument} dokumenter={dokumenter} />
      <VerticalSpacer sixteenPx />
      <PDFVisning dokument={valgDokument} />
    </div>
  );
};

export default DokumentIndex;
