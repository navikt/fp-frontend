import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@navikt/fp-fakta-medlemskap';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Medlemskap, Soknad } from '@navikt/fp-types';

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
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
