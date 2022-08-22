import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    faktaPanelKode={FaktaPanelCode.YTELSER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' })}
    skalPanelVisesIMeny={(initData) => !!initData?.inntektArbeidYtelse?.relatertTilgrensendeYtelserForSoker
      && initData.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0}
    renderPanel={(data) => (
      <YtelserFaktaIndex
        // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
        {...data}
      />
    )}
  />
);

export default YtelserFaktaInitPanel;
