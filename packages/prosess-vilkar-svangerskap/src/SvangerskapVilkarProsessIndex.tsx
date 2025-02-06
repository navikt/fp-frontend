import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FodselOgTilrettelegging } from '@navikt/fp-types';

import { SvangerskapVilkarForm } from './components/SvangerskapVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  status: string;
  readOnlySubmitButton: boolean;
}

export const SvangerskapVilkarProsessIndex = ({
  status,
  readOnlySubmitButton,
  svangerskapspengerTilrettelegging,
}: Props) => (
  <RawIntlProvider value={intl}>
    <SvangerskapVilkarForm
      status={status}
      readOnlySubmitButton={readOnlySubmitButton}
      svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
    />
  </RawIntlProvider>
);
