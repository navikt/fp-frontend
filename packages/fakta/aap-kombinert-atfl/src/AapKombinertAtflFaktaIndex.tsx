import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Aksjonspunkt } from '@navikt/fp-types';

import { KontrollerBeregningAapKombinertPanel } from './components/KontrollerBeregningAapKombinertPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  aksjonspunkt: Aksjonspunkt;
}

export const AapKombinertAtflFaktaIndex = ({ aksjonspunkt }: Props) => (
  <RawIntlProvider value={intl}>
    <KontrollerBeregningAapKombinertPanel aksjonspunkt={aksjonspunkt} />
  </RawIntlProvider>
);
