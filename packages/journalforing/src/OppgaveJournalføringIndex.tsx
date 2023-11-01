import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { Heading, Link } from '@navikt/ds-react';
import { ChevronLeftIcon } from '@navikt/aksel-icons';
import { NavAnsatt } from '@navikt/fp-types';
import { FlexColumn, FlexContainer, FlexRow, LoadingPanel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import JournalføringIndex from './components/JournalføringIndex';
import { requestApi, restApiHooks, RestApiPathsKeys } from './data/fpfordelRestApi';
import Oppgave from './typer/oppgaveTsType';
import styles from './oppgaveJournalføringIndex.module.css';
import JournalførSubmitValue from './typer/ferdigstillJournalføringSubmit';
import JournalførtSubmitModal from './components/journalpost/modal/JournalførtSubmitModal';
import ReserverOppgaveType from './typer/reserverOppgaveType';
import Journalpost from './typer/journalpostTsType';

const intl = createIntl(messages);
const TOM_ARRAY: Oppgave[] = [];

interface OwnProps {
  navAnsatt?: NavAnsatt;
}

/**
 * JournalforingIndex - Toppkomponent, orkestrerer restkall for journalføring
 */
const JournalforingIndex: FunctionComponent<OwnProps> = ({ navAnsatt }) => {
  const [valgtOppgave, setValgtOppgave] = useState<Oppgave | undefined>(undefined);
  const [valgtJournalpost, setValgtJournalpost] = useState<Journalpost | undefined>(undefined);
  const [visModal, setVisModal] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const avbrytVisningAvJournalpost = useCallback(() => {
    setValgtOppgave(undefined);
    setValgtJournalpost(undefined);
  }, [valgtOppgave]);

  const {
    startRequest: innhentAlleOppgaver,
    data: alleOppgaver = TOM_ARRAY,
    state: innhentOppgaverState,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER);

  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  const lukkModal = useCallback(() => {
    setVisModal(false);
  }, []);

  const {
    startRequest: hentJournalpostKall,
    data: hentetJournalpost,
    state: hentJournalpostState,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.HENT_JOURNALPOST_DETALJER);

  const { startRequest: submitJournalføring, data: saksnumerJournalføring } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.FERDIGSTILL_JOURNALFØRING,
  );

  const { startRequest: reserverOppgave } = restApiHooks.useRestApiRunner(RestApiPathsKeys.RESERVER_OPPGAVE);

  const { startRequest: flyttTilGosys } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_OPPGAVE_TIL_GOSYS);

  const reserverCallback = useCallback(
    (data: ReserverOppgaveType) => {
      reserverOppgave(data).then(() => {
        if (navAnsatt?.brukernavn) {
          innhentAlleOppgaver({ ident: navAnsatt.brukernavn }, true);
        }
      });
      if (valgtOppgave) {
        setValgtOppgave({ ...valgtOppgave, reservertAv: data.reserverFor });
      }
    },
    [valgtOppgave],
  );

  const hentJournalpost = useCallback(
    (journalpostId: string) => {
      hentJournalpostKall({ journalpostId });
    },
    [valgtJournalpost],
  );

  const velgOppgaveOgHentJournalpost = useCallback((oppgave: Oppgave) => {
    setValgtOppgave(oppgave);
    hentJournalpost(oppgave.journalpostId);
  }, []);

  const journalførCallback = useCallback(
    (data: JournalførSubmitValue) => {
      setIsLoadingSubmit(true);
      setVisModal(true);
      submitJournalføring(data).then(() => {
        if (navAnsatt?.brukernavn) {
          innhentAlleOppgaver({ ident: navAnsatt.brukernavn });
        }
        avbrytVisningAvJournalpost();
        setIsLoadingSubmit(false);
      });
    },
    [valgtOppgave],
  );

  const flyttOppgaveTilGosysCallback = useCallback(
    (data: string) => {
      flyttTilGosys({ journalpostId: data }).then(() => {
        if (navAnsatt?.brukernavn) {
          innhentAlleOppgaver({ ident: navAnsatt.brukernavn }, true);
        }
      });
    },
    [valgtOppgave],
  );

  useEffect(() => {
    if (navAnsatt) {
      innhentAlleOppgaver({ ident: navAnsatt.brukernavn });
    }
  }, [navAnsatt]);

  useEffect(() => {
    if (hentJournalpostState === RestApiState.SUCCESS) {
      setValgtJournalpost(hentetJournalpost);
    }
  }, [hentJournalpostState]);

  if (
    innhentOppgaverState === RestApiState.NOT_STARTED ||
    innhentOppgaverState === RestApiState.LOADING ||
    hentJournalpostState === RestApiState.LOADING
  ) {
    return <LoadingPanel />;
  }
  if (!navAnsatt) {
    return (
      <Heading size="medium">
        <FormattedMessage id="Journalforing.Tilgang" />
      </Heading>
    );
  }
  return (
    <RawIntlProvider value={intl}>
      <div className={styles.header}>
        {valgtJournalpost && (
          <Link onClick={avbrytVisningAvJournalpost} className={styles.link}>
            <ChevronLeftIcon />
            <FormattedMessage id="Journalforing.Oversikt" />
          </Link>
        )}
        <VerticalSpacer eightPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn className={styles.tittelKol}>
              <Heading size="medium">
                <FormattedMessage id="Journalforing.Tittel" />
              </Heading>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
      {visModal && (
        <JournalførtSubmitModal
          isLoading={isLoadingSubmit}
          lukkModal={lukkModal}
          showModal={visModal}
          saksnummer={saksnumerJournalføring}
        />
      )}
      <JournalforingPanel>
        <JournalføringIndex
          valgtOppgave={valgtOppgave}
          valgtJournalpost={valgtJournalpost}
          oppgaver={alleOppgaver}
          navAnsatt={navAnsatt}
          velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
          hentJournalpost={hentJournalpost}
          avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
          submitJournalføring={journalførCallback}
          reserverOppgave={reserverCallback}
          flyttTilGosys={flyttOppgaveTilGosysCallback}
        />
      </JournalforingPanel>
    </RawIntlProvider>
  );
};

export default JournalforingIndex;
