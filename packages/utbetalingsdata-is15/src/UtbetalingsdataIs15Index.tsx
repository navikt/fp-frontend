import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { InfotrygdVedtak } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';
import UtbetalingsdataPanel from './components/UtbetalingsdataPanel';

const intl = createIntl(messages);

interface OwnProps {
  søkInfotrygdVedtak: (params: { searchString: string }) => Promise<InfotrygdVedtak | undefined>;
  infotrygdVedtakState: RestApiState;
  infotrygdVedtak?: InfotrygdVedtak;
}

const UtbetalingsdataIs15Index: FunctionComponent<OwnProps> = ({
  infotrygdVedtak,
  søkInfotrygdVedtak,
  infotrygdVedtakState,
}) => (
  <RawIntlProvider value={intl}>
    <UtbetalingsdataPanel
      infotrygdVedtakState={infotrygdVedtakState}
      infotrygdVedtak={infotrygdVedtak}
      søkInfotrygdVedtak={søkInfotrygdVedtak}
    />
  </RawIntlProvider>
);

export default UtbetalingsdataIs15Index;
