import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Aksjonspunkt, Behandling, KodeverkMedNavn } from '@fpsak-frontend/types';

import FeilutbetalingInfoPanel from './components/FeilutbetalingInfoPanel';
import FeilutbetalingFakta from './types/feilutbetalingFaktaTsType';
import FeilutbetalingAarsak from './types/feilutbetalingAarsakTsType';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
  aksjonspunkter: Aksjonspunkt[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  fpsakKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  fagsakYtelseTypeKode: string;
  harApneAksjonspunkter: boolean;
}

const FeilutbetalingFaktaIndex: FunctionComponent<OwnProps> = ({
  behandling,
  feilutbetalingFakta,
  feilutbetalingAarsak,
  fagsakYtelseTypeKode,
  aksjonspunkter,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  fpsakKodeverk,
  submitCallback,
  readOnly,
  harApneAksjonspunkter,
}) => (
  <RawIntlProvider value={intl}>
    <FeilutbetalingInfoPanel
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      feilutbetalingFakta={feilutbetalingFakta}
      feilutbetalingAarsak={feilutbetalingAarsak.find((a) => a.ytelseType.kode === fagsakYtelseTypeKode)}
      aksjonspunkter={aksjonspunkter}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      alleKodeverk={alleKodeverk}
      fpsakKodeverk={fpsakKodeverk}
      submitCallback={submitCallback}
      readOnly={readOnly}
      hasOpenAksjonspunkter={harApneAksjonspunkter}
    />
  </RawIntlProvider>
);

export default FeilutbetalingFaktaIndex;
