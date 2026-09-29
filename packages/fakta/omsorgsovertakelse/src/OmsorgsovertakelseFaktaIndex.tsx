import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { OmsorgsovertakelseDto } from '@navikt/fp-types';

import { OmsorgsovertakelsePanel } from './components/OmsorgsovertakelsePanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const OmsorgsovertakelseFaktaIndex = ({ omsorgsovertakelse }: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgsovertakelsePanel omsorgsovertakelse={omsorgsovertakelse} />
  </RawIntlProvider>
);
