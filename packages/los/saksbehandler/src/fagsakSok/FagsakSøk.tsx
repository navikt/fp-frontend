import { FormattedMessage } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';

import { type FagsakEnkel, type OppgaveDto } from '@navikt/fp-types';

import { SøkForm, type SøkFormValues } from './form/SøkForm';
import { PersonInfo } from './person/PersonInfo';
import { SøkResultat } from './resultat/SøkResultat';

const skalViseListe = (fagsaker: FagsakEnkel[], fagsakOppgaver: OppgaveDto[]): boolean => {
  return (
    fagsaker.length > 1 ||
    (fagsaker.length === 1 &&
      fagsakOppgaver.filter(oppgave => oppgave.saksnummer === fagsaker.at(0)?.saksnummer).length > 1)
  );
};

interface Props {
  fagsaker: FagsakEnkel[];
  fagsakOppgaver: OppgaveDto[];
  searchFagsakCallback: (values: SøkFormValues) => void;
  searchResultReceived: boolean;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  selectOppgaveCallback: (oppgave: OppgaveDto) => void;
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
  <VStack gap="space-16">
    <SøkForm
      onSubmit={searchFagsakCallback}
      searchStarted={searchStarted}
      searchResultAccessDenied={searchResultAccessDenied}
      resetSearch={resetSearch}
      kanSaksbehandle={kanSaksbehandle}
    />
    {searchResultReceived && fagsaker.length === 0 && (
      <BodyShort>
        <FormattedMessage id="FagsakSearch.ZeroSearchResults" />
      </BodyShort>
    )}
    {searchResultReceived && skalViseListe(fagsaker, fagsakOppgaver) && (
      <>
        <PersonInfo person={fagsaker[0]!.person} />
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
