import React, {
  FunctionComponent, useCallback,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Fagsak, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import {
  ProsessDefaultInitPanel, useStandardProsessPanelProps, ProsessPanelMenyData, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiSvpHooks, requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const forhandsvis = (data: any): void => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const getForhandsvisFptilbakeCallback = (
  forhandsvisTilbakekrevingMelding: (params?: any, keepData?: boolean) => Promise<Behandling>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (
  mottaker: string, brevmalkode: string, fritekst: string,
) => {
  const data = {
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
    saksnummer: fagsak.saksnummer,
    varseltekst: fritekst,
    mottaker,
    brevmalkode,
  };
  return forhandsvisTilbakekrevingMelding(data).then((response) => forhandsvis(response));
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_FEILUTBETALING];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.SIMULERING_RESULTAT];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.TILBAKEKREVINGVALG];
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
  const { startRequest: forhandsvisTilbakekrevingMelding } = restApiSvpHooks.useRestApiRunner<Behandling>(SvpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE);

  const standardPanelProps = useStandardProsessPanelProps();

  const previewFptilbakeCallback = useCallback(getForhandsvisFptilbakeCallback(forhandsvisTilbakekrevingMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestSvpApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.AVREGNING}
      prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' })}
      skalPanelVisesIMeny={(data, initState) => {
        const harVedtakspanel = menyData.some((d) => d.id === prosessStegCodes.VEDTAK
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
