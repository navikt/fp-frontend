import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { MedlemskapFaktaIndexV3 } from '@navikt/fp-fakta-medlemskap';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { MedlemskapV3, Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

// TODO: legg inn nye aksjonspunkt
const AKSJONSPUNKT_KODER: AksjonspunktCode[] = [AksjonspunktCode.AVKLAR_FORTSATT_MEDLEMSKAP];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.MEDLEMSKAP_V3, BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  medlemskap: MedlemskapV3;
  soknad: Soknad;
};

/**
 * MedlemskapsvilkaretFaktaInitPanel
 */
const MedlemskapsvilkaretFaktaInitPanelV3: FunctionComponent<FaktaPanelInitProps> = ({ ...props }) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET_V3}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'MedlemskapInfoPanel.MedlemskapV3' })}
    skalPanelVisesIMeny={erGjeldendeEnv => props.behandling.harSøknad && !erGjeldendeEnv('production')}
    renderPanel={data => <MedlemskapFaktaIndexV3 {...data} />}
  />
);

export default MedlemskapsvilkaretFaktaInitPanelV3;
