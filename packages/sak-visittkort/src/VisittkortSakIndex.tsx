import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Kodeverk, Personopplysninger, FamilieHendelseSamling, Fagsak,
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
  personopplysninger?: Personopplysninger;
  familieHendelse: FamilieHendelseSamling;
  lenkeTilAnnenPart?: string;
  alleKodeverk: {[key: string]: [Kodeverk]};
  sprakkode: Kodeverk;
}

const VisittkortSakIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  personopplysninger,
  familieHendelse,
  lenkeTilAnnenPart,
  alleKodeverk,
  sprakkode,
}) => (
  <RawIntlProvider value={intl}>
    <VisittkortPanel
      personopplysninger={personopplysninger}
      familieHendelse={familieHendelse}
      lenkeTilAnnenPart={lenkeTilAnnenPart}
      fagsak={fagsak}
      alleKodeverk={alleKodeverk}
      sprakkode={sprakkode}
    />
  </RawIntlProvider>
);

export default VisittkortSakIndex;
