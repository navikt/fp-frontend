import React, {
  FunctionComponent,
} from 'react';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const intl = createIntl(messages);

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={faktaPanelCodes.YTELSER}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'YtelserFaktaIndex.Ytelser' })}
    skalPanelVisesIMeny={(initData) => !!initData?.inntektArbeidYtelse?.relatertTilgrensendeYtelserForSoker
      && initData.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0}
    renderPanel={(data) => <YtelserFaktaIndex {...data} />}
  />
);

export default YtelserFaktaInitPanel;
