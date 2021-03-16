import React, {
  FunctionComponent, useCallback,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeProsessIndex, { AnkeProsessBrevData, AnkeProsessData } from '@fpsak-frontend/prosess-anke';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, AnkeVurdering, Behandling, Fagsak, Kodeverk,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, useStandardProsessPanelProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiAnkeHooks, requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const lagForhandsvisCallback = (
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<any>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: AnkeProsessBrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const saveAnkeText = (
  lagreAnkeVurdering: (params?: any, keepData?: boolean) => Promise<any>,
  behandling: Behandling,
) => (aksjonspunktModel: AnkeProsessData) => {
  const data = {
    behandlingId: behandling.id,
    ...aksjonspunktModel,
  };

  return lagreAnkeVurdering(data);
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE];

const ENDEPUNKTER_INIT_DATA = [AnkeBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
}

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: {
    id: number;
    type: Kodeverk;
    avsluttet?: string;
  }[];
}

const AnkeBehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  alleBehandlinger,
  ...props
}) => {
  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const { startRequest: lagreAnkeVurdering } = restApiAnkeHooks.useRestApiRunner(AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING);
  const saveAnke = useCallback(saveAnkeText(lagreAnkeVurdering, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.ANKEBEHANDLING}
      prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => (
        <AnkeProsessIndex
          behandlinger={alleBehandlinger}
          previewCallback={previewCallback}
          saveAnke={saveAnke}
          {...data}
        />
      )}
    />
  );
};

export default AnkeBehandlingProsessStegInitPanel;
