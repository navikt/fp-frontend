import React from 'react';
import { useIntl } from 'react-intl';

import { YtelserFaktaIndex } from '@navikt/fp-fakta-ytelser';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { InntektArbeidYtelse } from '@navikt/fp-types';

import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
};

export const YtelserFaktaInitPanel = (props: FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.YTELSER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => <YtelserFaktaIndex {...data} />}
  />
);
