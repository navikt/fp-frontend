import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, Fagsak, Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO,
  AksjonspunktCode.AVKLAR_DEKNINGSGRAD,
  AksjonspunktCode.OVERSTYR_DEKNINGSGRAD,
];

const OVERSTYRING_AP_CODES = [AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO, AksjonspunktCode.OVERSTYR_DEKNINGSGRAD];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.UTLAND_DOK_STATUS, BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus?: string;
  };
  soknad: Soknad;
};

interface OwnProps {
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({ fagsak, rettigheter, ...props }) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.SAKEN}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'SakenFaktaPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data => (
      <SakenFaktaIndex {...data} fagsak={fagsak} kanOverstyreAccess={rettigheter.kanOverstyreAccess.isEnabled} />
    )}
  />
);

export default SakenFaktaInitPanel;
