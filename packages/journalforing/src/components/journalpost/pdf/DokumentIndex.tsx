import React, { FunctionComponent, useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import JournalDokument from '../../../typer/journalDokumentTsType';
import PDFVisning from './PDFVisning';
import DokumentVelger from './DokumentVelger';

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
    <div>
      <DokumentVelger setValgtDokument={setValgtDokument} valgtDokument={valgDokument} dokumenter={dokumenter} />
      <PDFVisning dokument={valgDokument} />
    </div>
  );
};

export default DokumentIndex;
