import React, {
  FunctionComponent,
} from 'react';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={FaktaPanelCode.YTELSER}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'YtelserFaktaIndex.Ytelser' })}
    skalPanelVisesIMeny={(initData) => !!initData?.inntektArbeidYtelse?.relatertTilgrensendeYtelserForSoker
      && initData.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0}
    renderPanel={(data) => <YtelserFaktaIndex {...data} />}
  />
);

export default YtelserFaktaInitPanel;
