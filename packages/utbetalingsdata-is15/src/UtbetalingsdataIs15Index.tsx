import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { InfotrygdVedtak } from '@navikt/fp-types';

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
    <UtbetalingsdataPanel {...args} />
  </RawIntlProvider>
);
