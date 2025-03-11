import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ErrorPage } from '@navikt/fp-sak-infosider';
import type { NavAnsatt } from '@navikt/fp-types';

import { JournalføringHeader } from './components/header/JournalføringHeader';
import { JournalføringIndex } from './components/JournalføringIndex';
import { JournalførtSubmitModal } from './components/journalpost/modal/JournalførtSubmitModal';
import {
  ferdigstillJournalføring,
  flyttOppgaveTilGosys,
  hentAlleJournalOppgaver,
  hentJournalpostDetaljer,
  knyttJournalpostTilAnnenSak,
  reserverBruker,
} from './data/fpFordelApi';
import type { JournalførSubmitValue } from './typer/ferdigstillJournalføringSubmit';
import type { Oppgave } from './typer/oppgaveTsType';
import type { ReserverOppgaveType } from './typer/reserverOppgaveType';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  navAnsatt?: NavAnsatt;
}

export const OppgaveJournalføringIndex = (props: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <JournalforingIndex {...props} />
    </RawIntlProvider>
  );
};

/**
 * Toppkomponent, orkestrerer restkall for journalføring
 */
export const JournalforingIndex = ({ navAnsatt }: Props) => {
  const [valgtOppgave, setValgtOppgave] = useState<Oppgave | undefined>(undefined);
  const [visModal, setVisModal] = useState(false);

  const {
    data: alleOppgaver,
    refetch: innhentAlleOppgaverPåNytt,
    status,
  } = useQuery(hentAlleJournalOppgaver(navAnsatt?.brukernavn));

  const {
    mutate: hentJournalpost,
    data: valgtJournalpost,
    reset: resetValgtJournalpost,
    status: hentJournalpostStatus,
  } = useMutation({
    mutationFn: hentJournalpostDetaljer,
  });

  const {
    mutate: submitJournalføringNySak,
    data: saksnumerJournalføringNySak,
    isPending: submitJournalføringIsPending,
  } = useMutation({
    mutationFn: ferdigstillJournalføring,
    onSuccess: () => {
      innhentAlleOppgaverPåNytt();
      avbrytVisningAvJournalpost();
    },
  });

  const {
    mutate: knyttTilAnnenSak,
    data: saksnummerNySakKnyttAnnenSak,
    isPending: knyttTilAnnenSakIsPending,
  } = useMutation({
    mutationFn: knyttJournalpostTilAnnenSak,
    onSuccess: () => {
      innhentAlleOppgaverPåNytt();
      avbrytVisningAvJournalpost();
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

  if (status === 'error') {
    return <ErrorPage />;
  }

  return (
    <>
      <JournalføringHeader
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        harHentetFerdigJournalpost={hentJournalpostStatus === 'success'}
        valgtJournalpost={valgtJournalpost}
        hentJournalpost={hentJournalpost}
        antallOppgaver={alleOppgaver ? alleOppgaver.length : undefined}
      />
      {visModal && (
        <JournalførtSubmitModal
          isLoading={knyttTilAnnenSakIsPending || submitJournalføringIsPending}
          lukkModal={() => {
            setVisModal(false);
          }}
          showModal={visModal}
          saksnummer={saksnumerJournalføringNySak || saksnummerNySakKnyttAnnenSak}
        />
      )}
      <JournalføringIndex
        valgtOppgave={valgtOppgave}
        valgtJournalpost={valgtJournalpost}
        navAnsatt={navAnsatt}
        velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        submitJournalføring={journalførCallback}
        reserverOppgave={reserverCallback}
        flyttTilGosys={flyttTilGosys}
      />
    </>
  );
};
