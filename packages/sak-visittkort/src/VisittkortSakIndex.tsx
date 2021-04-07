import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Fagsak, FagsakPersoner } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import VisittkortPanel from './components/VisittkortPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge?: boolean;
  erTilbakekreving?: boolean;
}

const VisittkortSakIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersoner,
  lenkeTilAnnenPart,
  harVerge = false,
  erTilbakekreving = false,
}) => (
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

export default VisittkortSakIndex;
