import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import InnsynProsessIndex from '@fpsak-frontend/prosess-innsyn';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { createIntl } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, Dokument, Fagsak, Innsyn,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';

import messages from '../../i18n/nb_NO.json';
import { requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_INNSYN];

const ENDEPUNKTER_INIT_DATA = [InnsynBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const getEndepunkterPanelData = (saksnummer: string) => [
  { key: InnsynBehandlingApiKeys.INNSYN_DOKUMENTER, params: { saksnummer } },
  { key: InnsynBehandlingApiKeys.INNSYN }];
type EndepunktPanelData = {
  innsynDokumenter?: Dokument[];
  innsyn: Innsyn;
}

interface OwnProps {
  fagsak: Fagsak;
}

const BehandleInnsynProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestInnsynApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={getEndepunkterPanelData(fagsak.saksnummer)}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={prosessStegCodes.BEHANDLE_INNSYN}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Innsyn' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={(data) => (
      <InnsynProsessIndex
        saksnummer={fagsak.saksnummer}
        alleDokumenter={data.innsynDokumenter}
        {...data}
      />
    )}
  />
);

export default BehandleInnsynProsessStegInitPanel;
