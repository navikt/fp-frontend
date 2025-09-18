import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';

import type { AlleKodeverk, FagsakEnkel } from '@navikt/fp-types';

import { FagsakList } from './FagsakList';
import { SearchForm } from './SearchForm';

import styles from './fagsakSearch.module.css';

interface Props {
  fagsaker: FagsakEnkel[];
  searchFagsakCallback: (params: { searchString: string }) => void;
  searchResultReceived: boolean;
  selectFagsakCallback: (saksnummer: string) => void;
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  alleKodeverk: AlleKodeverk;
}

/**
 * FagsakSearch
 *
 * Denne setter sammen de ulike komponentene i søkebildet.
 * Er søkeresultat mottatt vises enten trefflisten og relatert person, eller en tekst som viser ingen resultater.
 */
export const FagsakSearch = ({
  fagsaker,
  searchFagsakCallback,
  searchResultReceived,
  selectFagsakCallback,
  searchStarted,
  searchResultAccessDenied,
  alleKodeverk,
}: Props) => (
  <div className={styles['container']}>
    <SearchForm
      searchFagsakCallback={searchFagsakCallback}
      searchStarted={searchStarted}
      searchResultAccessDenied={searchResultAccessDenied}
    />
    {searchResultReceived && fagsaker.length === 0 && (
      <BodyShort size="small" className={styles['label']}>
        <FormattedMessage id="FagsakSearch.ZeroSearchResults" />
      </BodyShort>
    )}
    {searchResultReceived && fagsaker.length > 1 && (
      <FagsakList fagsaker={fagsaker} selectFagsakCallback={selectFagsakCallback} alleKodeverk={alleKodeverk} />
    )}
  </div>
);
