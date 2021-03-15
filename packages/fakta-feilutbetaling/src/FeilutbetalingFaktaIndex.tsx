import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { StandardFaktaPanelProps, FeilutbetalingFakta, KodeverkMedNavn } from '@fpsak-frontend/types';

import FeilutbetalingInfoPanel from './components/FeilutbetalingInfoPanel';
import FeilutbetalingAarsak from './types/feilutbetalingAarsakTsType';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
  fpsakKodeverk: {[key: string]: KodeverkMedNavn[]};
  fagsakYtelseTypeKode: string;
}

const FeilutbetalingFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
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
