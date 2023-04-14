import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { VurderSoknadsfristForeldrepengerIndex } from '@navikt/fp-prosess-soknadsfrist';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Soknad } from '@navikt/fp-types';

import skalViseProsessPanel from '../../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
};

const SoknadsfristProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = props => (
  <ProsessDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
    skalPanelVisesIMeny={data => skalViseProsessPanel(data.aksjonspunkter)}
    renderPanel={data => <VurderSoknadsfristForeldrepengerIndex {...data} />}
  />
);

export default SoknadsfristProsessStegInitPanel;
