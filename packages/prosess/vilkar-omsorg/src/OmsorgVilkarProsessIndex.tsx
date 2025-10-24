import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { VilkarUtfallType } from '@navikt/fp-types';

import { ErOmsorgVilkaarOppfyltForm } from './components/ErOmsorgVilkaarOppfyltForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  status: VilkarUtfallType;
}

export const OmsorgVilkarProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <ErOmsorgVilkaarOppfyltForm {...props} />
  </RawIntlProvider>
);
