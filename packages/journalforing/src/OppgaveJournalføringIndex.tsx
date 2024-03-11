import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { Heading } from '@navikt/ds-react';
import { NavAnsatt } from '@navikt/fp-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import messages from '../i18n/nb_NO.json';
import JournalforingPanel from './components/JournalforingPanel';
import JournalføringIndex from './components/JournalføringIndex';
import { requestApi, restApiHooks, RestApiPathsKeys } from './data/fpfordelRestApi';
import Oppgave from './typer/oppgaveTsType';
import JournalførSubmitValue from './typer/ferdigstillJournalføringSubmit';
import JournalførtSubmitModal from './components/journalpost/modal/JournalførtSubmitModal';
import ReserverOppgaveType from './typer/reserverOppgaveType';
import Journalpost from './typer/journalpostTsType';
import JournalføringHeader from './components/header/JournalføringHeader';

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
  const [harSøktOgFunnetIngenMatch, setharSøktOgFunnetIngenMatch] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const avbrytVisningAvJournalpost = useCallback(() => {
    setValgtOppgave(undefined);
    setharSøktOgFunnetIngenMatch(false);
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

  const { startRequest: submitJournalføringNySak, data: saksnumerJournalføringNySak } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.FERDIGSTILL_JOURNALFØRING,
  );

  const { startRequest: knyttTilAnnenSak, data: saksnummerNySakKnyttAnnenSak } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.KNYTT_JOURNALPOST_TIL_ANNEN_SAK,
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
    (data: JournalførSubmitValue, erAlleredeJournalført: boolean) => {
      setIsLoadingSubmit(true);
      setVisModal(true);
      if (erAlleredeJournalført) {
        knyttTilAnnenSak(data).then(() => {
          if (navAnsatt?.brukernavn) {
            innhentAlleOppgaver({ ident: navAnsatt.brukernavn });
            avbrytVisningAvJournalpost();
            setIsLoadingSubmit(false);
          }
        });
      } else {
        submitJournalføringNySak(data).then(() => {
          if (navAnsatt?.brukernavn) {
            innhentAlleOppgaver({ ident: navAnsatt.brukernavn });
            avbrytVisningAvJournalpost();
            setIsLoadingSubmit(false);
          }
        });
      }
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
      setharSøktOgFunnetIngenMatch(!valgtJournalpost);
    }
  }, [hentJournalpostState]);

  if (innhentOppgaverState === RestApiState.NOT_STARTED || innhentOppgaverState === RestApiState.LOADING) {
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
      <JournalføringHeader
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        harSøktOgFunnetIngenMatch={harSøktOgFunnetIngenMatch}
        valgtJournalpost={valgtJournalpost}
        hentJournalpost={hentJournalpost}
        antallOppgaver={alleOppgaver ? alleOppgaver.length : undefined}
      />
      {visModal && (
        <JournalførtSubmitModal
          isLoading={isLoadingSubmit}
          lukkModal={lukkModal}
          showModal={visModal}
          saksnummer={saksnumerJournalføringNySak || saksnummerNySakKnyttAnnenSak}
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
