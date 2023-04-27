import React, { FunctionComponent, useMemo, ReactElement } from 'react';
import { BodyShort, Heading } from '@navikt/ds-react';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { Office1, Female, Male, Neutral } from '@navikt/ds-icons';
import { CopyToClipboard } from '@navikt/ds-react-internal';
import { FormattedMessage } from 'react-intl';
import styles from './brukerAvsenderPanel.module.css';
import Journalpost from '../../../typer/journalpostTsType';

const finnKjønnBilde = (journalpost: Journalpost): ReactElement => {
  const fnr = journalpost.bruker?.fnr;
  if (!fnr || fnr.length !== 11) {
    return <Neutral className={styles.ikon} />;
  }
  const tall = parseInt(fnr.charAt(8), 10);
  return tall % 2 === 0 ? <Female className={styles.ikon} /> : <Male className={styles.ikon} />;
};

const finnAvsenderBilde = (journalpost: Journalpost): ReactElement => {
  const avsenderId = journalpost.avsender?.id;
  if (!avsenderId) {
    return <Neutral className={styles.ikon} />;
  }
  if (avsenderId.length === 9) {
    return <Office1 className={styles.ikon} />;
  }
  if (avsenderId.length === 11) {
    return finnKjønnBilde(journalpost);
  }
  return <Neutral className={styles.ikon} />;
};

const lagBrukerAvsenderRad = (navn: string, id: string, ikon: ReactElement, title: string): ReactElement => (
  <FlexColumn className={styles.kolBredde}>
    <FlexRow>
      <FlexColumn>
        <Heading size="small">
          <FormattedMessage id={title} />
        </Heading>
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn className={styles.ikonKol}>
        {ikon}
      </FlexColumn>
      <FlexColumn>
        <FlexRow>
          <FlexColumn>
            <BodyShort>{navn}</BodyShort>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.kopiTekst}>
            <BodyShort>{id}</BodyShort>
          </FlexColumn>
          <FlexColumn className={styles.clipBoard}>
            <CopyToClipboard size="small" copyText={id} popoverText="Kopiert" type='button' />
          </FlexColumn>
        </FlexRow>
      </FlexColumn>
    </FlexRow>
  </FlexColumn>
);

type OwnProps = Readonly<{
  journalpost: Journalpost;
}>;

/**
 * BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender
 */
const BrukerAvsenderPanel: FunctionComponent<OwnProps> = ({ journalpost }) => {
  const brukerBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);
  return (
    <div className={styles.brukerAvsenderRad}>
      {journalpost.bruker?.navn && (
        <>
          {lagBrukerAvsenderRad(journalpost.bruker.navn, journalpost.bruker.fnr, brukerBilde, 'ValgtOppgave.Bruker')}
        </>
      )}
      {journalpost.avsender?.navn && (
        <>
          {lagBrukerAvsenderRad(journalpost.avsender.navn, journalpost.avsender.id, avsenderBilde, 'ValgtOppgave.Avsender')}
        </>
      )}
    </div>
  );
};
export default BrukerAvsenderPanel;
