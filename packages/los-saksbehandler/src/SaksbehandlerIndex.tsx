import React, { useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HTTPError } from 'ky';

import { EventType } from '@navikt/fp-rest-api';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { SaksbehandlerDashboard } from './SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const createQueryClient = (addErrorMessage: (data: any) => void) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: process.env.NODE_ENV === 'test' ? false : 3,
        staleTime: 100,
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
