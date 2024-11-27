import React from 'react';
import { useIntl } from 'react-intl';

import { SakenFaktaIndex } from '@navikt/fp-fakta-saken';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, Fagsak, Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO,
  AksjonspunktKode.AVKLAR_DEKNINGSGRAD,
  AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO, AksjonspunktKode.OVERSTYR_DEKNINGSGRAD];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.UTLAND_DOK_STATUS, BehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus?: string;
  };
  soknad: Soknad;
};

interface Props {
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const SakenFaktaInitPanel = ({ fagsak, rettigheter, ...props }: Props & FaktaPanelInitProps) => (
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
