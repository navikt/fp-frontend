import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, VStack } from '@navikt/ds-react';
import { FagsakEnkel } from '@navikt/fp-types';
import { Oppgave } from '@navikt/fp-los-felles';

import { PersonInfo } from './person/PersonInfo';
import { SøkForm } from './form/SøkForm';
import { SøkResultat } from './resultat/SøkResultat';

const skalViseListe = (fagsaker: FagsakEnkel[], fagsakOppgaver: Oppgave[]): boolean => {
  if (!fagsaker) {
    return false;
  }
  return (
    fagsaker.length > 1 ||
    (fagsaker.length === 1 &&
      fagsakOppgaver.filter(oppgave => oppgave.saksnummer.toString() === fagsaker[0].saksnummer).length > 1)
  );
};

interface Props {
  fagsaker: FagsakEnkel[];
  fagsakOppgaver: Oppgave[];
  searchFagsakCallback: (values: { searchString: string; skalReservere: boolean }) => void;
  searchResultReceived: boolean;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  selectOppgaveCallback: (oppgave: Oppgave) => void;
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding?: string;
  };
  resetSearch: () => void;
  kanSaksbehandle: boolean;
}

/**
 * FagsakSøk
 *
 * Denne setter sammen de ulike komponentene i søkebildet.
 * Er søkeresultat mottatt vises enten trefflisten og relatert person, eller en tekst som viser ingen resultater.
 */
export const FagsakSøk = ({
  fagsaker,
  fagsakOppgaver,
  searchFagsakCallback,
  selectOppgaveCallback,
  searchResultReceived,
  åpneFagsak,
  searchStarted,
  searchResultAccessDenied,
  resetSearch,
  kanSaksbehandle,
}: Props) => (
  <VStack gap="4">
    <SøkForm
      onSubmit={searchFagsakCallback}
      searchStarted={searchStarted}
      searchResultAccessDenied={searchResultAccessDenied}
      resetSearch={resetSearch}
      kanSaksbehandle={kanSaksbehandle}
    />
    {searchResultReceived && fagsaker && fagsaker.length === 0 && (
      <BodyShort>
        <FormattedMessage id="FagsakSearch.ZeroSearchResults" />
      </BodyShort>
    )}
    {searchResultReceived && skalViseListe(fagsaker, fagsakOppgaver) && (
      <>
        <PersonInfo person={fagsaker[0].person} />
        <BodyShort size="small">
          <FormattedMessage id="FagsakSearch.FlereSakerEllerBehandlinger" />
        </BodyShort>
        <SøkResultat
          åpneFagsak={åpneFagsak}
          selectOppgaveCallback={selectOppgaveCallback}
          fagsaker={fagsaker}
          fagsakOppgaver={fagsakOppgaver}
        />
      </>
    )}
  </VStack>
);
