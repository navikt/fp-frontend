import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { Fagsak, KodeverkMedNavn } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { ReduxWrapper } from '@fpsak-frontend/form';

import SearchForm from './SearchForm';
import FagsakList from './FagsakList';

import styles from './fagsakSearch.less';

interface OwnProps {
  fagsaker: Fagsak[];
  searchFagsakCallback: (params?: { searchString: string }) => Promise<Fagsak[]>;
  searchResultReceived: boolean;
  selectFagsakCallback: (e: React.SyntheticEvent, saksnummer: string) => void;
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * FagsakSearch
 *
 * Presentasjonskomponent. Denne setter sammen de ulike komponentene i søkebildet.
 * Er søkeresultat mottatt vises enten trefflisten og relatert person, eller en tekst som viser ingen resultater.
 */
const FagsakSearch: FunctionComponent<OwnProps> = ({
  fagsaker,
  searchFagsakCallback,
  searchResultReceived,
  selectFagsakCallback,
  searchStarted,
  searchResultAccessDenied,
  alleKodeverk,
}) => (
  <div className={styles.container}>
    <ReduxWrapper>
      <SearchForm
        onSubmit={searchFagsakCallback}
      // @ts-ignore Fiks denne!
        searchStarted={searchStarted}
        searchResultAccessDenied={searchResultAccessDenied}
      />
    </ReduxWrapper>

    {searchResultReceived && fagsaker.length === 0 && (
      <Normaltekst className={styles.label}><FormattedMessage id="FagsakSearch.ZeroSearchResults" /></Normaltekst>
    )}

    <VerticalSpacer eightPx />

    {fagsaker.length > 1 && (
      <FagsakList fagsaker={fagsaker} selectFagsakCallback={selectFagsakCallback} alleKodeverk={alleKodeverk} />
    )}
  </div>
);

export default FagsakSearch;
