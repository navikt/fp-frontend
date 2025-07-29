import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { LagreSoknadPanel } from './components/LagreSoknadPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  onSubmitUfullstendigsoknad: () => Promise<void>;
  submitting: boolean;
  erEndringssøknad: boolean;
}

export const LagreSoknadPapirsoknadIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <LagreSoknadPanel {...props} />
  </RawIntlProvider>
);

LagreSoknadPapirsoknadIndex.initialValues = LagreSoknadPanel.initialValues;
LagreSoknadPapirsoknadIndex.transformValues = LagreSoknadPanel.transformValues;
