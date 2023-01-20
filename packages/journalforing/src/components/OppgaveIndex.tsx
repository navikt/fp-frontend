import React, { FunctionComponent, useState, useCallback } from 'react';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import OppgaveTabell from './OppgaveTabell';
import OppgaveFiltrering from './OppgaveFiltrering';
import PDFVisning from './PDFVisning';
import OppgaveDetaljertVisning from './OppgaveDetaljertVisning';
import styles from './journalforingPanel.less';

const detaljertOppgave = {
  brukerIdent: '11019216514',
  brukerNavn: 'Jonas Jonasen',
  avsenderIdent: '999888777',
  avsenderNavn: 'Svingen Bar og Høvleri',
  relaterteSaker: [
    {
      saksnummer: '159123416',
      førsteUttaksdato: '2022-02-01',
      status: 'VEDTAK FATTET',
      ytelsetype: 'FORELDREPENGER',
      søknadDato: '2022-01-12',
    },
    {
      saksnummer: '1365416456',
      førsteUttaksdato: '2023-01-10',
      status: 'UNDER BEHANDLIG',
      ytelsetype: 'FORELDREPENGER',
      søknadDato: '2023-01-01',
    },
  ],
  dokumentRessurs: 'https://www.bowerswilkins.com/-/media/files/documentmaster/bowerswilkins/pdp-documentation/headphones/pi7_manual.pdf',
  id: 640,
  tildeltEnhetsnr: '4815',
  journalpostId: '4287227',
  aktoerId: '365438761+1',
  beskrivelse: 'Journalføring',
  tema: 'SVP',
  oppgavetype: 'Journalføring',
  opprettetDato: '2022-12-01',
  frist: '2022-12-02',
  status: 'ÅPEN',
  prioritet: 'HØY',
};

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
}>;

/**
 * OppgaveIndex - Okrestrerer oppgavelisten og detaljert view av oppgavene
 */
const OppgaveIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
}) => {
  const [valgtOppgave, setValgtOppgave] = useState<OppgaveOversikt>(null);
  const avbryt = useCallback(() => {
    setValgtOppgave(null);
  }, [valgtOppgave]);
  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      <OppgaveFiltrering oppgaver={[]} />
      <VerticalSpacer sixteenPx />
      {!valgtOppgave
        && <OppgaveTabell oppgaver={oppgaver} setValgtOppgave={setValgtOppgave} />}
      {valgtOppgave
        && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn className={styles.oppgaveKolonne}>
                <OppgaveDetaljertVisning oppgave={valgtOppgave ? detaljertOppgave : null} avbrytCallback={avbryt} />
              </FlexColumn>
              <FlexColumn className={styles.pdfKolonne}>
                <PDFVisning pdfRessurs={detaljertOppgave.dokumentRessurs} />
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
    </FlexContainer>
  );
};

export default OppgaveIndex;
