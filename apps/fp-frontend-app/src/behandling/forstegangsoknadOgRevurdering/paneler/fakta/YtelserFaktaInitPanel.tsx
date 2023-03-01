import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { YtelserFaktaIndex } from '@navikt/fp-fakta-ytelser';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { InntektArbeidYtelse } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
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
