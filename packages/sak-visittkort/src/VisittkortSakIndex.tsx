import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FagsakHendelse, FagsakPerson } from '@navikt/fp-types';

import { VisittkortPanel } from './components/VisittkortPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  erMor?: boolean;
  bruker: FagsakPerson;
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  lenkeTilAnnenPart?: string;
  harVerge?: boolean;
  erTilbakekreving?: boolean;
}

export const VisittkortSakIndex = ({
  bruker,
  annenPart,
  familiehendelse,
  lenkeTilAnnenPart,
  erMor = true,
  harVerge = false,
  erTilbakekreving = false,
}: Props) => (
  <RawIntlProvider value={intl}>
    <VisittkortPanel
      erMor={erMor}
      bruker={bruker}
      annenPart={annenPart}
      familiehendelse={familiehendelse}
      lenkeTilAnnenPart={lenkeTilAnnenPart}
      harVerge={harVerge}
      erTilbakekreving={erTilbakekreving}
    />
  </RawIntlProvider>
);
