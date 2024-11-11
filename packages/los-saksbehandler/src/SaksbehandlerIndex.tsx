import React from 'react';
import { createIntl } from '@navikt/ft-utils';
import { RawIntlProvider } from 'react-intl';

import { SaksbehandlerDashboard } from './SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

export const SaksbehandlerIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SaksbehandlerDashboard {...props} />
  </RawIntlProvider>
);
