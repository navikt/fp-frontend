import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysningerPerId, SimuleringResultat, TilbakekrevingValg } from '@navikt/fp-types';

import { SimuleringPanel } from './components/SimuleringPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  previewFptilbakeCallback: (params: { mottaker: string; fritekst: string }) => void;
}

export const SimuleringProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <SimuleringPanel {...props} />
  </RawIntlProvider>
);
