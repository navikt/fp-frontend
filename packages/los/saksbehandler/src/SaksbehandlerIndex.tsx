import { RawIntlProvider } from 'react-intl';

import { Theme } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import type { NavAnsatt } from '@navikt/fp-types';

import { SaksbehandlerDashboard } from './SaksbehandlerDashboard';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  navAnsatt: NavAnsatt;
}

export const SaksbehandlerIndex = (props: Props) => {
  return (
    <Theme theme="light">
      <RawIntlProvider value={intl}>
        <SaksbehandlerDashboard {...props} />
      </RawIntlProvider>
    </Theme>
  );
};
