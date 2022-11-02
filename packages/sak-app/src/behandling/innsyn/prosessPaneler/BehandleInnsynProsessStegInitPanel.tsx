import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Dokument, Fagsak } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import InnsynProsessIndex from '@fpsak-frontend/prosess-innsyn';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Innsyn } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { requestInnsynApi, InnsynBehandlingApiKeys } from '../data/innsynBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_INNSYN];

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
  <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    requestApi={requestInnsynApi}
    panelEndepunkter={getEndepunkterPanelData(fagsak.saksnummer)}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.BEHANDLE_INNSYN}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Innsyn' })}
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
