import React, {
  FunctionComponent, useCallback,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeProsessIndex, { AnkeProsessBrevData } from '@fpsak-frontend/prosess-anke';
import { AnkeVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering, ForhåndsvisMeldingParams } from '@fpsak-frontend/types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import ProsessDefaultInitPanel from '../../felles/components/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/types/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/utils/prosess/useStandardProsessPanelProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import { restApiAnkeHooks, requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const lagForhandsvisCallback = (
  forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<any>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: AnkeProsessBrevData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const saveAnkeText = (
  lagreAnkeVurdering: (params?: any, keepData?: boolean) => Promise<any>,
  behandling: Behandling,
) => (aksjonspunktModel: AnkeVurderingResultatAp) => {
  const data = {
    behandlingUuid: behandling.uuid,
    ...aksjonspunktModel,
  };

  return lagreAnkeVurdering(data);
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
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
    uuid: string;
    type: string;
    avsluttet?: string;
  }[];
}

const AnkeBehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  alleBehandlinger,
  ...props
}) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiAnkeHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
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
      prosessPanelKode={ProsessStegCode.ANKEBEHANDLING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
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
