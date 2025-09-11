import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ErOmsorgVilkaarOppfyltForm } from './components/ErOmsorgVilkaarOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  status: string;
}

export const OmsorgVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <ErOmsorgVilkaarOppfyltForm {...props} />
  </RawIntlProvider>
);
