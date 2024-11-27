import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { AlleKodeverk, FagsakEnkel } from '@navikt/fp-types';

import { FagsakSearch } from './components/FagsakSearch';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fagsaker?: FagsakEnkel[];
  searchFagsakCallback: (params?: { searchString: string }, keepData?: boolean) => Promise<FagsakEnkel[] | undefined>;
  searchResultReceived: boolean;
  selectFagsakCallback: (saksnummer: string) => void;
  searchStarted?: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  alleKodeverk: AlleKodeverk;
}

/*
 * NB! Denne komponenten blir kun brukt i Prod om LOS-backend er nede
 */
export const FagsakSokSakIndex = ({
  fagsaker = [],
  searchFagsakCallback,
  searchResultReceived,
  selectFagsakCallback,
  searchStarted = false,
  searchResultAccessDenied,
  alleKodeverk,
}: Props) => (
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
