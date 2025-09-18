import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FagsakHendelse, Person } from '@navikt/fp-types';

import { VisittkortPanel } from './components/VisittkortPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  erMor?: boolean;
  bruker: Person;
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  lenkeTilAnnenPart?: string;
  harVergeIÅpenBehandling?: boolean;
  erTilbakekreving?: boolean;
}

export const VisittkortSakIndex = ({
  bruker,
  annenPart,
  familiehendelse,
  lenkeTilAnnenPart,
  erMor = true,
  harVergeIÅpenBehandling = false,
  erTilbakekreving = false,
}: Props) => (
  <RawIntlProvider value={intl}>
    <VisittkortPanel
      erMor={erMor}
      bruker={bruker}
      annenPart={annenPart}
      familiehendelse={familiehendelse}
      lenkeTilAnnenPart={lenkeTilAnnenPart}
      harVergeIÅpenBehandling={harVergeIÅpenBehandling}
      erTilbakekreving={erTilbakekreving}
    />
  </RawIntlProvider>
);
