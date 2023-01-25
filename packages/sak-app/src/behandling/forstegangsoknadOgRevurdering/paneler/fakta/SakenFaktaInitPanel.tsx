import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Fagsak } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@navikt/fp-fakta-saken';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
  aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE, aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.UTLAND_DOK_STATUS, BehandlingFellesApiKeys.SOKNAD];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus: string;
  };
  soknad: Soknad;
}

interface OwnProps {
  fagsak: Fagsak;
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  fagsak,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.SAKEN}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'SakenFaktaPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={(data) => <SakenFaktaIndex {...data} erSvangerskapspenger={fagsak.fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER} />}
  />
);

export default SakenFaktaInitPanel;
