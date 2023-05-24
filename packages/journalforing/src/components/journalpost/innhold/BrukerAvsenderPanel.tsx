import React, { FunctionComponent, useMemo, ReactElement, useState, useCallback } from 'react';
import { BodyShort, Heading, Search, Alert } from '@navikt/ds-react';
import { isValidFodselsnummer } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Buldings3Icon, FigureInwardIcon, SilhouetteIcon, FigureOutwardIcon } from '@navikt/aksel-icons';
import { CopyToClipboard } from '@navikt/ds-react-internal';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './brukerAvsenderPanel.module.css';
import Journalpost from '../../../typer/journalpostTsType';
import OppdaterMedBruker from '../../../typer/oppdaterBrukerTsType';

const finnKjønnBilde = (journalpost: Journalpost): ReactElement => {
  const fnr = journalpost.bruker?.fnr;
  if (!fnr || fnr.length !== 11) {
    return <SilhouetteIcon className={styles.ikon} />;
  }
  const tall = parseInt(fnr.charAt(8), 10);
  return tall % 2 === 0 ? <FigureOutwardIcon className={styles.ikon} /> : <FigureInwardIcon className={styles.ikon} />;
};

const finnAvsenderBilde = (journalpost: Journalpost): ReactElement => {
  const avsenderId = journalpost.avsender?.id;
  if (!avsenderId) {
    return <SilhouetteIcon className={styles.ikon} />;
  }
  if (avsenderId.length === 9) {
    return <Buldings3Icon className={styles.ikon} />;
  }
  if (avsenderId.length === 11) {
    return finnKjønnBilde(journalpost);
  }
  return <SilhouetteIcon className={styles.ikon} />;
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
      <FlexColumn className={styles.ikonKol}>{ikon}</FlexColumn>
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
            <CopyToClipboard size="small" copyText={id} popoverText="Kopiert" type="button" />
          </FlexColumn>
        </FlexRow>
      </FlexColumn>
    </FlexRow>
  </FlexColumn>
);

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppdaterJournalpostMedBruker: (params: OppdaterMedBruker) => void;
  skalKunneEndreSøker: boolean;
}>;

/**
 * BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender
 */
const BrukerAvsenderPanel: FunctionComponent<OwnProps> = ({
  journalpost,
  oppdaterJournalpostMedBruker,
  skalKunneEndreSøker,
}) => {
  const intl = useIntl();
  const [søkerFeilmelding, setSøkerFeilmelding] = useState<string | undefined>(undefined);
  const brukerBilde = useMemo(() => finnKjønnBilde(journalpost), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);
  const oppdaterMedSøker = useCallback(
    (e: any) => {
      if (e.key === 'Enter') {
        const fnr = e.target?.value;
        if (!fnr) {
          setSøkerFeilmelding(undefined);
        } else if (!isValidFodselsnummer(fnr)) {
          setSøkerFeilmelding(intl.formatMessage({ id: 'ValgtOppgave.Søk.BrukerFeil' }, { personnummer: fnr }));
        } else {
          setSøkerFeilmelding(undefined);
          oppdaterJournalpostMedBruker({ journalpostId: journalpost.journalpostId, fødselsnummer: e.target.value });
        }
      }
    },
    [oppdaterJournalpostMedBruker, søkerFeilmelding],
  );

  return (
    <>
      {skalKunneEndreSøker && (
        <>
          <Alert variant="warning">
            <BodyShort>
              <FormattedMessage id="ValgtOppgave.Søk.Bruker" />
            </BodyShort>
          </Alert>
          <VerticalSpacer eightPx />
          <div className={styles.searchBox}>
            <Search
              label={intl.formatMessage({ id: 'ValgtOppgave.Søk.Bruker' })}
              variant="simple"
              onKeyDown={oppdaterMedSøker}
            />
            <VerticalSpacer eightPx />
            {søkerFeilmelding && <BodyShort className={styles.error}>{søkerFeilmelding}</BodyShort>}
          </div>
        </>
      )}
      <VerticalSpacer sixteenPx />
      <div className={styles.brukerAvsenderRad}>
        {journalpost.bruker?.navn && (
          <>
            {lagBrukerAvsenderRad(journalpost.bruker.navn, journalpost.bruker.fnr, brukerBilde, 'ValgtOppgave.Bruker')}
          </>
        )}
        {journalpost.avsender?.navn && (
          <>
            {lagBrukerAvsenderRad(
              journalpost.avsender.navn,
              journalpost.avsender.id,
              avsenderBilde,
              'ValgtOppgave.Avsender',
            )}
          </>
        )}
      </div>
    </>
  );
};
export default BrukerAvsenderPanel;
