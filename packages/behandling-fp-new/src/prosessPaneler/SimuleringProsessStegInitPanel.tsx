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
  useStandardProsessPanelProps, ProsessPanelWrapper, useProsessMenyRegistrerer, ProsessPanelMenyData, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import {
  restApiFpHooks, FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel,
} from '../data/fpBehandlingApi';

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
  mottaker: string, brevmalkode: string, fritekst: string, saksnummer: string,
) => {
  const data = {
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.sakstype,
    varseltekst: fritekst,
    mottaker,
    brevmalkode,
    saksnummer,
  };
  return forhandsvisTilbakekrevingMelding(data).then((response) => forhandsvis(response));
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_FEILUTBETALING];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.SIMULERING_RESULTAT];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.TILBAKEKREVINGVALG];
type EndepunktPanelData = {
  tilbakekrevingvalg?: TilbakekrevingValg;
}

interface OwnProps {
  menyData: ProsessPanelMenyData[];
  fagsak: Fagsak;
}

const SimuleringProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  menyData,
  fagsak,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER);

  const harVedtakspanel = menyData.some((d) => d.id === prosessStegCodes.VEDTAK
    && (d.status !== vilkarUtfallType.IKKE_VURDERT || d.harApentAksjonspunkt));
  const skalVises = initState === RestApiState.SUCCESS && !harVedtakspanel;

  const status = initData?.simuleringResultat ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.AVREGNING,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' }),
    valgtProsessSteg,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  const { startRequest: forhandsvisTilbakekrevingMelding } = restApiFpHooks.useRestApiRunner<Behandling>(FpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE);

  const previewFptilbakeCallback = useCallback(getForhandsvisFptilbakeCallback(forhandsvisTilbakekrevingMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      loadingState={panelDataState}
    >
      <AvregningProsessIndex
        fagsak={fagsak}
        previewFptilbakeCallback={previewFptilbakeCallback}
        simuleringResultat={initData?.simuleringResultat}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default SimuleringProsessStegInitPanel;
