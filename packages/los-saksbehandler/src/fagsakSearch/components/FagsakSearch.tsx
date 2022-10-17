import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FagsakEnkel } from '@fpsak-frontend/types';

import Oppgave from '../../typer/oppgaveTsType';
import PersonInfo from './person/PersonInfo';
import SearchForm from './SearchForm';
import FagsakList from './FagsakList';

import styles from './fagsakSearch.less';

interface OwnProps {
  fagsaker: FagsakEnkel[];
  fagsakOppgaver: Oppgave[];
  searchFagsakCallback: (values: { searchString: string, skalReservere: boolean }) => void;
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

const skalViseListe = (fagsaker: FagsakEnkel[], fagsakOppgaver: Oppgave[]): boolean => {
  if (!fagsaker) {
    return false;
  }
  return fagsaker.length > 1
    || (fagsaker.length === 1 && fagsakOppgaver.filter((oppgave) => oppgave.saksnummer.toString() === fagsaker[0].saksnummer).length > 1);
};

/**
 * FagsakSearch
 *
 * Presentasjonskomponent. Denne setter sammen de ulike komponentene i søkebildet.
 * Er søkeresultat mottatt vises enten trefflisten og relatert person, eller en tekst som viser ingen resultater.
 */
const FagsakSearch: FunctionComponent<OwnProps> = ({
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
}) => (
  <>
    <SearchForm
      onSubmit={searchFagsakCallback}
      searchStarted={searchStarted}
      searchResultAccessDenied={searchResultAccessDenied}
      resetSearch={resetSearch}
      kanSaksbehandle={kanSaksbehandle}
    />

    {searchResultReceived && fagsaker && fagsaker.length === 0
      && <BodyShort size="small" className={styles.label}><FormattedMessage id="FagsakSearch.ZeroSearchResults" /></BodyShort>}

    {searchResultReceived && skalViseListe(fagsaker, fagsakOppgaver) && (
      <>
        <PersonInfo person={fagsaker[0].person} />
        <VerticalSpacer sixteenPx />
        <BodyShort size="small">
          <FormattedMessage id="FagsakSearch.FlereSakerEllerBehandlinger" />
        </BodyShort>
        <FagsakList
          åpneFagsak={åpneFagsak}
          selectOppgaveCallback={selectOppgaveCallback}
          fagsaker={fagsaker}
          fagsakOppgaver={fagsakOppgaver}
        />
      </>
    )}
  </>
);

export default FagsakSearch;
