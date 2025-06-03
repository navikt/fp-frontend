import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Fødsel } from '@navikt/fp-types';

import { FodselInfoPanel } from './components/FodselInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fødsel: Fødsel;
  submittable: boolean;
}

export const FodselFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FodselInfoPanel {...props} />
  </RawIntlProvider>
);
