import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { InfotrygdVedtak } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';
import { UtbetalingsdataPanel } from './components/UtbetalingsdataPanel';

const intl = createIntl(messages);

interface Props {
  søkInfotrygdVedtak: (params: { searchString: string }) => Promise<InfotrygdVedtak | undefined>;
  infotrygdVedtakState: RestApiState;
  infotrygdVedtak?: InfotrygdVedtak;
}

export const UtbetalingsdataIs15Index = (args: Props) => (
  <RawIntlProvider value={intl}>
    <UtbetalingsdataPanel {...args} />
  </RawIntlProvider>
);
