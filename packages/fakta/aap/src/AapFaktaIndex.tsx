import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Aksjonspunkt } from '@navikt/fp-types';

import { KontrollerBeregningAapKombinertAtflPanel } from './components/KontrollerBeregningAapKombinertAtflPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  aksjonspunkt: Aksjonspunkt;
}

export const AapFaktaIndex = ({ aksjonspunkt }: Props) => (
  <RawIntlProvider value={intl}>
    <KontrollerBeregningAapKombinertAtflPanel aksjonspunkt={aksjonspunkt} />
  </RawIntlProvider>
);
