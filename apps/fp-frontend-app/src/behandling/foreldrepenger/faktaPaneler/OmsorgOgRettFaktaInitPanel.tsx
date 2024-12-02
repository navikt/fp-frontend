import React from 'react';
import { useIntl } from 'react-intl';

import { OmsorgOgRettFaktaIndex } from '@navikt/fp-fakta-omsorg-og-rett';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.YTELSEFORDELING];

type EndepunktPanelData = {
  ytelsefordeling: Ytelsefordeling;
};

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgOgRettFaktaInitPanel = ({ personoversikt, ...props }: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORG_OG_RETT}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.OmsorgOgRett' })}
    skalPanelVisesIMeny={() => AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, props.behandling.aksjonspunkt))}
    renderPanel={data => <OmsorgOgRettFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);
