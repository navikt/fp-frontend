import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { AlleKodeverk, Fagsak } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import FagsakSearch from './components/FagsakSearch';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  fagsaker?: Fagsak[];
  searchFagsakCallback: (params?: { searchString: string }, keepData?: boolean) => Promise<Fagsak[]>;
  searchResultReceived: boolean;
  selectFagsakCallback: (e: React.SyntheticEvent, saksnummer?: string) => void;
  searchStarted?: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  alleKodeverk: AlleKodeverk;
}

/*
 * NB! Denne komponenten blir kun brukt lokalt. I alle andre miljø brukes FPLOS
 */
const FagsakSokSakIndex: FunctionComponent<OwnProps> = ({
  fagsaker = [],
  searchFagsakCallback,
  searchResultReceived,
  selectFagsakCallback,
  searchStarted = false,
  searchResultAccessDenied,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <FagsakSearch
      fagsaker={fagsaker}
      searchFagsakCallback={searchFagsakCallback}
      searchResultReceived={searchResultReceived}
      selectFagsakCallback={selectFagsakCallback}
      searchStarted={searchStarted}
      searchResultAccessDenied={searchResultAccessDenied}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default FagsakSokSakIndex;
