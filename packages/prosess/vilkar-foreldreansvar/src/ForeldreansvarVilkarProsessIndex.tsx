import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ErForeldreansvarVilkaarOppfyltForm } from './components/ErForeldreansvarVilkaarOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  isForeldreansvar2Ledd: boolean;
  isEngangsstonad: boolean;
  status: string;
  readOnlySubmitButton: boolean;
}

export const ForeldreansvarVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <ErForeldreansvarVilkaarOppfyltForm {...props} />
  </RawIntlProvider>
);
