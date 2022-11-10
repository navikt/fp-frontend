import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktInitData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.YTELSER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={(data) => (
      <YtelserFaktaIndex
        {...data}
      />
    )}
  />
);

export default YtelserFaktaInitPanel;
