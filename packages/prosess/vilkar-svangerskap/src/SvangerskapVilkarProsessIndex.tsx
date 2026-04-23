import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { SvpTilrettelegging, VilkårUtfallType } from '@navikt/fp-types';

import { SvangerskapVilkarForm } from './components/SvangerskapVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: SvpTilrettelegging;
  status: VilkårUtfallType;
}

export const SvangerskapVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SvangerskapVilkarForm {...props} />
  </RawIntlProvider>
);
