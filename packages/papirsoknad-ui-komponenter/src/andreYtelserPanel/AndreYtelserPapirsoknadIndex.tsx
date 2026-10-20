import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk } from '@navikt/fp-types';

import { AndreYtelserPanel } from './components/AndreYtelserPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  alleKodeverk: AlleKodeverk;
  kunMiliterEllerSiviltjeneste?: boolean;
}

export const AndreYtelserPapirsoknadIndex = ({ alleKodeverk, kunMiliterEllerSiviltjeneste }: Props) => (
  <RawIntlProvider value={intl}>
    <AndreYtelserPanel alleKodeverk={alleKodeverk} kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste} />
  </RawIntlProvider>
);

AndreYtelserPapirsoknadIndex.initialValues = AndreYtelserPanel.initialValues;

AndreYtelserPapirsoknadIndex.transformValues = AndreYtelserPanel.transformValues;
