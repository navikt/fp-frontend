import React, { useMemo, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { QueryCache, QueryClient, QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HTTPError } from 'ky';

import { EventType } from '@navikt/fp-rest-api';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { NavAnsatt } from '@navikt/fp-types';

import { JournalføringHeader } from './components/header/JournalføringHeader';
import { JournalføringIndex } from './components/JournalføringIndex';
import { JournalforingPanel } from './components/JournalforingPanel';
import { JournalførtSubmitModal } from './components/journalpost/modal/JournalførtSubmitModal';
import {
  ferdigstillJournalføring,
  flyttOppgaveTilGosys,
  hentAlleJournalOppgaver,
  hentJournalpostDetaljer,
  knyttJournalpostTilAnnenSak,
  reserverBruker,
} from './data/fpFordelApi';
import { JournalførSubmitValue } from './typer/ferdigstillJournalføringSubmit';
import { Oppgave } from './typer/oppgaveTsType';
import { ReserverOppgaveType } from './typer/reserverOppgaveType';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);
const TOMT_ARRAY = new Array<Oppgave>();

const createQueryClient = (addErrorMessage: (data: any) => void) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: process.env.NODE_ENV === 'test' ? false : 3,
      },
    },
    queryCache: new QueryCache({
      onError: error => {
        // TODO Dette er ein forenkela kopi av dagens feilhåndtering. Refaktorer og flytt når Tanstack Query blir brukt over alt
        if (error instanceof HTTPError) {
          if (error.response.status === 403) {
            addErrorMessage({ type: EventType.REQUEST_FORBIDDEN, feilmelding: error.message });
          } else if (error.response.status === 401) {
            addErrorMessage({ type: EventType.REQUEST_UNAUTHORIZED, feilmelding: error.message });
          } else if (error.response.status === 504 || error.response.status === 404) {
            addErrorMessage({
              type: EventType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND,
              //@ts-expect-error
              location: error.response?.config?.url,
            });
          } else {
            addErrorMessage({ type: EventType.REQUEST_ERROR, feilmelding: error.message });
          }
        } else {
          addErrorMessage({ type: EventType.REQUEST_ERROR, feilmelding: error.message });
        }
      },
    }),
  });

interface Props {
  navAnsatt?: NavAnsatt;
}

export const OppgaveJournalføringIndex = (props: Props) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const queryClient = useMemo(() => createQueryClient(addErrorMessage), []);

  return (
    <RawIntlProvider value={intl}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools /> <JournalforingIndex {...props} />
      </QueryClientProvider>
    </RawIntlProvider>
  );
};

/**
 * Toppkomponent, orkestrerer restkall for journalføring
 */
export const JournalforingIndex = ({ navAnsatt }: Props) => {
  const [valgtOppgave, setValgtOppgave] = useState<Oppgave | undefined>(undefined);
  const [visModal, setVisModal] = useState(false);
  const [harSøktOgFunnetIngenMatch, setHarSøktOgFunnetIngenMatch] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const {
    data: alleOppgaver,
    refetch: innhentAlleOppgaverPåNytt,
    status,
  } = useQuery(hentAlleJournalOppgaver(navAnsatt?.brukernavn));

  const {
    mutate: hentJournalpost,
    data: valgtJournalpost,
    reset: resetValgtJournalpost,
  } = useMutation({
    mutationFn: hentJournalpostDetaljer,
    onSuccess: journalpost => {
      setHarSøktOgFunnetIngenMatch(!journalpost);
    },
  });

  const { mutate: submitJournalføringNySak, data: saksnumerJournalføringNySak } = useMutation({
    mutationFn: ferdigstillJournalføring,
    onSuccess: () => {
      innhentAlleOppgaverPåNytt();
      avbrytVisningAvJournalpost();
      setIsLoadingSubmit(false);
    },
  });

  const { mutate: knyttTilAnnenSak, data: saksnummerNySakKnyttAnnenSak } = useMutation({
    mutationFn: knyttJournalpostTilAnnenSak,
    onSuccess: () => {
      innhentAlleOppgaverPåNytt();
      avbrytVisningAvJournalpost();
      setIsLoadingSubmit(false);
    },
  });

  const { mutate: reserverOppgave } = useMutation({
    mutationFn: reserverBruker,
    onSuccess: () => {
      innhentAlleOppgaverPåNytt();
    },
  });

  const { mutate: flyttTilGosys } = useMutation({
    mutationFn: flyttOppgaveTilGosys,
    onSuccess: () => {
      innhentAlleOppgaverPåNytt();
    },
  });

  const avbrytVisningAvJournalpost = () => {
    setValgtOppgave(undefined);
    setHarSøktOgFunnetIngenMatch(false);
    resetValgtJournalpost();
  };

  const reserverCallback = (data: ReserverOppgaveType) => {
    reserverOppgave(data);
    if (valgtOppgave) {
      setValgtOppgave({ ...valgtOppgave, reservertAv: data.reserverFor });
    }
  };

  const velgOppgaveOgHentJournalpost = (oppgave: Oppgave) => {
    setValgtOppgave(oppgave);
    hentJournalpost(oppgave.journalpostId);
  };

  const journalførCallback = (data: JournalførSubmitValue, erAlleredeJournalført: boolean) => {
    setIsLoadingSubmit(true);
    setVisModal(true);
    if (erAlleredeJournalført) {
      knyttTilAnnenSak(data);
    } else {
      submitJournalføringNySak(data);
    }
  };

  if (!navAnsatt) {
    return (
      <Heading size="medium">
        <FormattedMessage id="Journalforing.Tilgang" />
      </Heading>
    );
  }

  if (status === 'pending') {
    return <LoadingPanel />;
  }

  return (
    <>
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
          lukkModal={() => {
            setVisModal(false);
          }}
          showModal={visModal}
          saksnummer={saksnumerJournalføringNySak || saksnummerNySakKnyttAnnenSak}
        />
      )}
      <JournalforingPanel>
        <JournalføringIndex
          valgtOppgave={valgtOppgave}
          valgtJournalpost={valgtJournalpost}
          oppgaver={alleOppgaver || TOMT_ARRAY}
          navAnsatt={navAnsatt}
          velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
          hentJournalpost={hentJournalpost}
          avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
          submitJournalføring={journalførCallback}
          reserverOppgave={reserverCallback}
          flyttTilGosys={flyttTilGosys}
        />
      </JournalforingPanel>
    </>
  );
};
