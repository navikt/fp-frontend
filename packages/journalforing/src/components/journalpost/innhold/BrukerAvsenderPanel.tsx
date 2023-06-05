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
import ForhåndsvisBrukerRespons from '../../../typer/forhåndsvisBrukerResponsTsType';

const finnKjønnBilde = (brukerFnr: string): ReactElement => {
  if (!brukerFnr || brukerFnr.length !== 11) {
    return <SilhouetteIcon className={styles.ikon} />;
  }
  const tall = parseInt(brukerFnr.charAt(8), 10);
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
    return finnKjønnBilde(journalpost.bruker.fnr);
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
  hentForhåndsvisningAvSøker: (fnr: string) => void;
  skalKunneEndreSøker: boolean;
  brukerTilForhåndsvisning?: ForhåndsvisBrukerRespons;
  knyttSøkerTilJournalpost: (params: OppdaterMedBruker) => void;
  lasterBruker: boolean;
}>;

/**
 * BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender
 */
const BrukerAvsenderPanel: FunctionComponent<OwnProps> = ({
  journalpost,
  hentForhåndsvisningAvSøker,
  skalKunneEndreSøker,
  brukerTilForhåndsvisning,
  knyttSøkerTilJournalpost,
  lasterBruker,
}) => {
  const intl = useIntl();
  const [søkerFeilmelding, setSøkerFeilmelding] = useState<string | undefined>(undefined);
  const [fnrSomSkalForhåndsvises, setFnrSomSkalForhåndsvises] = useState<string | undefined>(undefined);
  const brukerBilde = useMemo(() => finnKjønnBilde(journalpost.bruker?.fnr), [journalpost]);
  const avsenderBilde = useMemo(() => finnAvsenderBilde(journalpost), [journalpost]);

  const knyttSøkerTilJP = () => {
    if (fnrSomSkalForhåndsvises) {
      knyttSøkerTilJournalpost({
        journalpostId: journalpost.journalpostId,
        fødselsnummer: fnrSomSkalForhåndsvises,
      });
    }
  };

  const forhåndsvisSøker = (fnr: string | undefined) => {
    if (!fnr) {
      setSøkerFeilmelding(undefined);
    } else if (!isValidFodselsnummer(fnr)) {
      setSøkerFeilmelding(intl.formatMessage({ id: 'ValgtOppgave.Søk.BrukerFeil' }, { fødselsnummer: fnr }));
    } else {
      setFnrSomSkalForhåndsvises(fnr);
      setSøkerFeilmelding(undefined);
      hentForhåndsvisningAvSøker(fnr);
    }
  };

  const oppdaterMedBrukerKlikk = useCallback(
    (e: any) => {
      if (e.key === 'Enter') {
        const fnr = e.target?.value;
        forhåndsvisSøker(fnr);
      }
    },
    [hentForhåndsvisningAvSøker, søkerFeilmelding],
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
                onKeyDown={oppdaterMedBrukerKlikk}
                onSearchClick={forhåndsvisSøker}
                hideLabel={false}
              >
                <Search.Button type="button" loading={lasterBruker} />
              </Search>
              <VerticalSpacer eightPx />
              {søkerFeilmelding && <BodyShort className={styles.error}>{søkerFeilmelding}</BodyShort>}
              {brukerTilForhåndsvisning && (
                <>
                  {lagBrukerAvsenderRad(
                    brukerTilForhåndsvisning.navn,
                    brukerTilForhåndsvisning.fødselsnummer,
                    finnKjønnBilde(brukerTilForhåndsvisning.fødselsnummer),
                  )}
                  <VerticalSpacer sixteenPx />
                  <Button type="button" onClick={knyttSøkerTilJP}>
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
