import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Medlemskap, Soknad } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
  aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
  aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.MEDLEMSKAP,
  BehandlingFellesApiKeys.SOKNAD,
];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
  soknad: Soknad;
}

/**
 * MedlemskapsvilkaretFaktaInitPanel
 */
const MedlemskapsvilkaretFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  ...props
}) => (
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'MedlemskapInfoPanel.Medlemskap' })}
    skalPanelVisesIMeny={() => props.behandling.harSøknad}
    renderPanel={(data) => (
      <MedlemskapFaktaIndex {...data} />
    )}
  />
);

export default MedlemskapsvilkaretFaktaInitPanel;
