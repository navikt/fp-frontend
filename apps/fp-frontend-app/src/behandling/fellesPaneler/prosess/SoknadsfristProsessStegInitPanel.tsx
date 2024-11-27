import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VurderSoknadsfristForeldrepengerIndex } from '@navikt/fp-prosess-soknadsfrist';
import { Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
};

export const SoknadsfristProsessStegInitPanel = (props: ProsessPanelInitProps) => (
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
