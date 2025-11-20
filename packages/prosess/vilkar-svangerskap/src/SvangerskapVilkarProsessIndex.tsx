import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FodselOgTilrettelegging } from '@navikt/fp-types';

import { SvangerskapVilkarForm } from './components/SvangerskapVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
}

export const SvangerskapVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SvangerskapVilkarForm {...props} />
  </RawIntlProvider>
);
