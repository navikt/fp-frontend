import React from 'react';
import { useIntl } from 'react-intl';

import { MedlemskapFaktaIndex } from '@navikt/fp-fakta-medlemskap';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Fagsak, Medlemskap, Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = [
  AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.MEDLEMSKAP, BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
  soknad: Soknad;
};

interface Props {
  fagsak: Fagsak;
}

export const MedlemskapsvilkaretFaktaInitPanel = ({ ...props }: FaktaPanelInitProps & Props) => (
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
