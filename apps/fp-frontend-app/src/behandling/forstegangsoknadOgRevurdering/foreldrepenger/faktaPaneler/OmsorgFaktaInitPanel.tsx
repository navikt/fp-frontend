import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { OmsorgFaktaIndex } from '@navikt/fp-fakta-omsorg';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Personoversikt, Ytelsefordeling } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.YTELSEFORDELING];
type EndepunktPanelData = {
  ytelsefordeling: Ytelsefordeling;
};

interface OwnProps {
  personoversikt: Personoversikt;
}

/**
 * OmsorgFaktaInitPanel
 */
const OmsorgFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({ personoversikt, ...props }) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORG}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OmsorgInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={() =>
      !!props.behandling.aksjonspunkt?.some(ap => AKSJONSPUNKT_KODER.some(kode => kode === ap.definisjon))
    }
    renderPanel={data => <OmsorgFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgFaktaInitPanel;
