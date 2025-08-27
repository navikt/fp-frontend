import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { type ForhandsvisData, VarselOmRevurderingForm } from './components/VarselOmRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  previewCallback: (data: ForhandsvisData) => void;
}

export const VarselOmRevurderingProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <VarselOmRevurderingForm {...props} />
  </RawIntlProvider>
);
