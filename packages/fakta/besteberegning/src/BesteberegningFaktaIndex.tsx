import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/fp-types';

import { BesteberegningPanel } from './components/BesteberegningPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
}

export const BesteberegningFaktaIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FaktaPanelTittel />
    <BesteberegningPanel {...props} />
  </RawIntlProvider>
);
