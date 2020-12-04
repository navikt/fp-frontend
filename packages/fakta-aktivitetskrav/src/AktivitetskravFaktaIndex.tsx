import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';

import AktivitetskravFaktaForm from './components/AktivitetskravFaktaForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  harApneAksjonspunkter: boolean;
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

const AktivitetskravFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  harApneAksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
}) => (
  <RawIntlProvider value={intl}>
    <AktivitetskravFaktaForm
      harApneAksjonspunkter={harApneAksjonspunkter}
      uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
      submitCallback={submitCallback}
    />
  </RawIntlProvider>
);

export default AktivitetskravFaktaIndex;
