import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { StandardFaktaProps } from '@fpsak-frontend/fakta-felles';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

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
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const AktivitetskravFaktaIndex: FunctionComponent<OwnProps & StandardFaktaProps> = ({
  harApneAksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <AktivitetskravFaktaForm
      harApneAksjonspunkter={harApneAksjonspunkter}
      uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
      submitCallback={submitCallback}
      aktivitetskravAvklaringer={alleKodeverk[kodeverkTyper.AKTIVITETSKRAV_AVKLARING]}
    />
  </RawIntlProvider>
);

export default AktivitetskravFaktaIndex;
