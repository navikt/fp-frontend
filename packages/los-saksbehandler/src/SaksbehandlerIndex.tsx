import React, { useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { SaksbehandlerDashboard } from './SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const createQueryClient = (addErrorMessage: (data: any) => void) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: process.env.NODE_ENV === 'test' ? false : 3,
      },
    },
    queryCache: new QueryCache({
      onError: e => {
        // FIXME (TOR) Her må ein formatera tekst på same måte som før
        addErrorMessage(e.message);
      },
    }),
  });

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

export const SaksbehandlerIndex = (props: Props) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const queryClient = useMemo(() => createQueryClient(addErrorMessage), []);

  return (
    <RawIntlProvider value={intl}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <SaksbehandlerDashboard {...props} />
      </QueryClientProvider>
    </RawIntlProvider>
  );
};
