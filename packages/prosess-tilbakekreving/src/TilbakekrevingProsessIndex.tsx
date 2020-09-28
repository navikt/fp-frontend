import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import TilbakekrevingForm from './components/TilbakekrevingForm';
import FeilutbetalingPerioderWrapper from './types/feilutbetalingPerioderTsType';
import VilkarsvurderingWrapper from './types/vilkarsVurdertePerioderTsType';
import DetaljerteFeilutbetalingsperioder from './types/detaljerteFeilutbetalingsperioderTsType';

import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsvurderingWrapper;
  navBrukerKjonn: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  beregnBelop: (data: any) => Promise<any>;
}

const TilbakekrevingProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
  behandling,
  perioderForeldelse,
  vilkarvurderingsperioder,
  vilkarvurdering,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  navBrukerKjonn,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  beregnBelop,
  aksjonspunkter,
}) => (
  <RawIntlProvider value={intl}>
    <TilbakekrevingForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      perioderForeldelse={perioderForeldelse}
      perioder={vilkarvurderingsperioder.perioder}
      rettsgebyr={vilkarvurderingsperioder.rettsgebyr}
      vilkarvurdering={vilkarvurdering}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      apCodes={aksjonspunkter.map((a) => a.definisjon.kode)}
      readOnlySubmitButton={readOnlySubmitButton}
      navBrukerKjonn={navBrukerKjonn}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      beregnBelop={beregnBelop}
    />
  </RawIntlProvider>
);

export default TilbakekrevingProsessIndex;
