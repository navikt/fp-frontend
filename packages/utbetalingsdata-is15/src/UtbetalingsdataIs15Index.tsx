import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { InfotrygdVedtak } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';
import UtbetalingsdataPanel from './components/UtbetalingsdataPanel';

const intl = createIntl(messages);

interface OwnProps {
  søkInfotrygdVedtak: (params: { searchString: string }) => Promise<InfotrygdVedtak | undefined>;
  infotrygdVedtak?: InfotrygdVedtak;
}

const UtbetalingsdataIs15Index: FunctionComponent<OwnProps> = ({ infotrygdVedtak, søkInfotrygdVedtak }) => (
  <RawIntlProvider value={intl}>
    <UtbetalingsdataPanel infotrygdVedtak={infotrygdVedtak} søkInfotrygdVedtak={søkInfotrygdVedtak} />
  </RawIntlProvider>
);

export default UtbetalingsdataIs15Index;
