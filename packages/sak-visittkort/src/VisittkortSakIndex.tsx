import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Fagsak, FagsakPersoner } from '@navikt/fp-types';

import { VisittkortPanel } from './components/VisittkortPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge?: boolean;
  erTilbakekreving?: boolean;
}

export const VisittkortSakIndex = ({
  fagsak,
  fagsakPersoner,
  lenkeTilAnnenPart,
  harVerge = false,
  erTilbakekreving = false,
}: Props) => (
  <RawIntlProvider value={intl}>
    <VisittkortPanel
      lenkeTilAnnenPart={lenkeTilAnnenPart}
      fagsak={fagsak}
      fagsakPersoner={fagsakPersoner}
      harVerge={harVerge}
      erTilbakekreving={erTilbakekreving}
    />
  </RawIntlProvider>
);
