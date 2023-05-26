import React, { FunctionComponent, useMemo, ReactElement, useState, useCallback } from 'react';
import { BodyShort, Heading, Search, Alert, Button } from '@navikt/ds-react';
import { isValidFodselsnummer } from '@navikt/ft-utils';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Buldings3Icon, FigureInwardIcon, SilhouetteIcon, FigureOutwardIcon } from '@navikt/aksel-icons';
import { CopyToClipboard } from '@navikt/ds-react-internal';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './brukerAvsenderPanel.module.css';
import Journalpost from '../../../typer/journalpostTsType';
import OppdaterMedBruker from '../../../typer/oppdaterBrukerTsType';
import JournalBruker from '../../../typer/journalBrukerTsType';

const finnKjønnBilde = (bruker: JournalBruker): ReactElement => {
  const fnr = bruker?.fnr;
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
    return finnKjønnBilde(journalpost.bruker);
  }
  return <SilhouetteIcon className={styles.ikon} />;
};

const lagBrukerAvsenderRad = (navn: string, id: string, ikon: ReactElement, title?: string): ReactElement => (
  <FlexColumn className={styles.kolBredde}>
    {title && (
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id={title} />
          </Heading>
        </FlexColumn>
      </FlexRow>
    )}
    <VerticalSpacer sixteenPx />
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
  hentOppdatertJournalpostMedBruker: (params: OppdaterMedBruker) => void;
  skalKunneEndreSøker: boolean;
  hentetSøker?: JournalBruker;
  knyttSøkerTilJournalpost: () => void;
}>;

/**
 * BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender
 */
const BrukerAvsenderPanel: FunctionComponent<OwnProps> = ({
  journalpost,
  hentOppdatertJournalpostMedBruker,
  skalKunneEndreSøker,
  hentetSøker,
  knyttSøkerTilJournalpost,
}) => {
  const intl = useIntl();
  const [søkerFeilmelding, setSøkerFeilmelding] = useState<string | undefined>(undefined);
  const brukerBilde = useMemo(() => finnKjønnBilde(journalpost.bruker), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);

  const oppdaterMedSøker = (fnr: string | undefined) => {
    if (!fnr) {
      setSøkerFeilmelding(undefined);
    } else if (!isValidFodselsnummer(fnr)) {
      setSøkerFeilmelding(intl.formatMessage({ id: 'ValgtOppgave.Søk.BrukerFeil' }, { fødselsnummer: fnr }));
    } else {
      setSøkerFeilmelding(undefined);
      hentOppdatertJournalpostMedBruker({
        journalpostId: journalpost.journalpostId,
        fødselsnummer: fnr,
      });
    }
  };

  const oppdaterKlikk = useCallback(
    (e: any) => {
      if (e.key === 'Enter') {
        const fnr = e.target?.value;
        oppdaterMedSøker(fnr);
      }
    },
    [hentOppdatertJournalpostMedBruker, søkerFeilmelding],
  );

  return (
    <div className={styles.brukerAvsenderRad}>
      <FlexColumn>
        {skalKunneEndreSøker && (
          <>
            <FlexRow>
              <FlexColumn>
                <Heading size="small">
                  <FormattedMessage id="ValgtOppgave.Bruker" />
                </Heading>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <Alert variant="warning">
              <BodyShort>
                <FormattedMessage id="ValgtOppgave.Søk.Bruker" />
              </BodyShort>
            </Alert>
            <VerticalSpacer sixteenPx />
            <div>
              <Search
                label={intl.formatMessage({ id: 'ValgtOppgave.Søk.FinnBruker' })}
                onKeyDown={oppdaterKlikk}
                onSearchClick={oppdaterMedSøker}
                hideLabel={false}
              >
                <Search.Button type="button" />
              </Search>
              <VerticalSpacer eightPx />
              {søkerFeilmelding && <BodyShort className={styles.error}>{søkerFeilmelding}</BodyShort>}
              {hentetSøker && (
                <>
                  {lagBrukerAvsenderRad(hentetSøker.navn, hentetSøker.fnr, finnKjønnBilde(hentetSøker), undefined)}
                  <VerticalSpacer sixteenPx />
                  <Button type="button" onClick={knyttSøkerTilJournalpost}>
                    <FormattedMessage id="ValgtOppgave.Søk.KnyttTil" />
                  </Button>
                </>
              )}
            </div>
          </>
        )}
        {journalpost.bruker?.navn && (
          <FlexRow>
            {lagBrukerAvsenderRad(journalpost.bruker.navn, journalpost.bruker.fnr, brukerBilde, 'ValgtOppgave.Bruker')}
          </FlexRow>
        )}
      </FlexColumn>
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
  );
};
export default BrukerAvsenderPanel;
