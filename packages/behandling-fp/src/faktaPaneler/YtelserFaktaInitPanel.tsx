import React, {
  FunctionComponent,
} from 'react';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={faktaPanelCodes.YTELSER}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' })}
    skalPanelVisesIMeny={(initData) => !!initData?.inntektArbeidYtelse?.relatertTilgrensendeYtelserForSoker
      && initData.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0}
    renderPanel={(data) => <YtelserFaktaIndex {...data} />}
  />
);

export default YtelserFaktaInitPanel;
