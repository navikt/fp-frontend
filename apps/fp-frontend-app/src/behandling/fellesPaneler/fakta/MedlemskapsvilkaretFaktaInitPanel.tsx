import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { MedlemskapFaktaIndex } from '@navikt/fp-fakta-medlemskap';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Fagsak, Medlemskap, Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER: AksjonspunktCode[] = [
  AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
  AksjonspunktCode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.MEDLEMSKAP, BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
  soknad: Soknad;
};

interface Props {
  fagsak: Fagsak;
}

/**
 * MedlemskapsvilkaretFaktaInitPanel
 */
const MedlemskapsvilkaretFaktaInitPanel: FunctionComponent<FaktaPanelInitProps & Props> = ({ ...props }) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'MedlemskapInfoPanel.Medlemskap' })}
    skalPanelVisesIMeny={() => props.behandling.harSøknad}
    renderPanel={data => <MedlemskapFaktaIndex fagsak={props.fagsak} {...data} />}
  />
);

export default MedlemskapsvilkaretFaktaInitPanel;
