import { RawIntlProvider } from 'react-intl';

import { Theme } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import type { InfotrygdVedtak } from '@navikt/fp-types';

import { UtbetalingsdataPanel } from './components/UtbetalingsdataPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  søkInfotrygdVedtak: (params: { searchString: string }) => void;
  isPending: boolean;
  isSuccess: boolean;
  infotrygdVedtak?: InfotrygdVedtak;
}

export const UtbetalingsdataIs15Index = (args: Props) => (
  <RawIntlProvider value={intl}>
    <Theme theme="light">
      <UtbetalingsdataPanel {...args} />
    </Theme>
  </RawIntlProvider>
);
