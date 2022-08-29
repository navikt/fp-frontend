import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiHooks, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Fagsak, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { forhandsvisDokument } from '@navikt/ft-utils';

import useStandardProsessPanelProps from '../../../felles/prosess/useStandardProsessPanelProps';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelMenyData from '../../../felles/typer/prosessPanelMenyData';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const getForhandsvisFptilbakeCallback = (
  forhandsvisTilbakekrevingMelding: (params?: any, keepData?: boolean) => Promise<Behandling | undefined>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (
  mottaker: string, fritekst: string,
) => {
  const data = {
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
    varseltekst: fritekst,
  };
  return forhandsvisTilbakekrevingMelding(data).then((response) => forhandsvisDokument(response));
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_FEILUTBETALING];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.SIMULERING_RESULTAT];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.TILBAKEKREVINGVALG];
type EndepunktPanelData = {
  tilbakekrevingvalg?: TilbakekrevingValg;
}

interface OwnProps {
  menyData: ProsessPanelMenyData[];
  fagsak: Fagsak;
}

const SimuleringProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  menyData,
  fagsak,
  ...props
}) => {
  const { requestApi } = props;
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const { startRequest: forhandsvisTilbakekrevingMelding } = useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE);

  const standardPanelProps = useStandardProsessPanelProps();

  const previewFptilbakeCallback = useCallback(getForhandsvisFptilbakeCallback(forhandsvisTilbakekrevingMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.AVREGNING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' })}
      skalPanelVisesIMeny={(data, initState) => {
        const harVedtakspanel = menyData.some((d) => d.id === ProsessStegCode.VEDTAK
        && (d.status !== vilkarUtfallType.IKKE_VURDERT || d.harApentAksjonspunkt));
        return !!data?.simuleringResultat || (initState === RestApiState.SUCCESS && !harVedtakspanel);
      }}
      hentOverstyrtStatus={(data) => (data?.simuleringResultat ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT)}
      renderPanel={(data) => (
        <AvregningProsessIndex
          fagsak={fagsak}
          previewFptilbakeCallback={previewFptilbakeCallback}
          {...data}
        />
      )}
    />
  );
};

export default SimuleringProsessStegInitPanel;
