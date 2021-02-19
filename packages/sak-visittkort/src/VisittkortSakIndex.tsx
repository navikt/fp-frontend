import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Personopplysninger, FamilieHendelseSamling, Fagsak, FagsakPerson,
} from '@fpsak-frontend/types';

import VisittkortPanel from './components/VisittkortPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  fagsak: Fagsak;
  fagsakPerson: FagsakPerson;
  personopplysninger?: Personopplysninger;
  familieHendelse?: FamilieHendelseSamling;
  lenkeTilAnnenPart?: string;
  harTilbakekrevingVerge?: boolean;
}

const VisittkortSakIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPerson,
  personopplysninger,
  familieHendelse,
  lenkeTilAnnenPart,
  harTilbakekrevingVerge,
}) => (
  <RawIntlProvider value={intl}>
    <VisittkortPanel
      personopplysninger={personopplysninger}
      familieHendelse={familieHendelse}
      lenkeTilAnnenPart={lenkeTilAnnenPart}
      fagsak={fagsak}
      fagsakPerson={fagsakPerson}
      harTilbakekrevingVerge={harTilbakekrevingVerge}
    />
  </RawIntlProvider>
);

export default VisittkortSakIndex;
