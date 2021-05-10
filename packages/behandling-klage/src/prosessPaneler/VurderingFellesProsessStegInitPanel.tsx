import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import KlagevurderingProsessIndex, { AksjonspunktVerdier, KlageVurderingBrevData } from '@fpsak-frontend/prosess-klagevurdering';
import {
  Aksjonspunkt, Behandling, Fagsak, KlageVurdering, Kodeverk,
} from '@fpsak-frontend/types';
import klageVurderingKodeverk from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { useStandardProsessPanelProps, ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';

import { restApiKlageHooks, KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';
import KlageBehandlingModal from '../modaler/KlageBehandlingModal';

const forhandsvis = (data: any) => {
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
) => (
  data: KlageVurderingBrevData,
) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const lagKlageCallback = (
  lagreKlageVurdering: (params?: any, keepData?: boolean) => Promise<any>,
  behandling: Behandling,
) => (aksjonspunktModel: AksjonspunktVerdier) => {
  const data = {
    behandlingUuid: behandling.uuid,
    ...aksjonspunktModel,
  };

  return lagreKlageVurdering(data);
};

const getLagringSideeffekter = (
  toggleKlageModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  oppdaterProsessStegOgFaktaPanelIUrl?: (punktnavn?: string, faktanavn?: string) => void,
) => (aksjonspunktModels: { kode: string, klageVurdering?: Kodeverk }[]) => {
  const skalByttTilKlageinstans = aksjonspunktModels
    .some((apValue) => apValue.kode === aksjonspunktCodes.BEHANDLE_KLAGE_NFP
    && apValue.klageVurdering?.kode === klageVurderingKodeverk.STADFESTE_YTELSESVEDTAK);

  if (skalByttTilKlageinstans) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (skalByttTilKlageinstans) {
      toggleKlageModal(true);
    } else if (oppdaterProsessStegOgFaktaPanelIUrl) {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const ENDEPUNKTER_INIT_DATA = [KlageBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [KlageBehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering: KlageVurdering;
}

interface OwnProps {
  fagsak: Fagsak;
  toggleOppdatereFagsakContext?: (skalHenteFagsak: boolean) => void,
  opneSokeside?: () => void;
  oppdaterProsessStegOgFaktaPanelIUrl?: (punktnavn?: string, faktanavn?: string) => void;
  aksjonspunktKoder: string[];
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
}

const VurderingFellesProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  toggleOppdatereFagsakContext,
  opneSokeside,
  oppdaterProsessStegOgFaktaPanelIUrl,
  aksjonspunktKoder,
  prosessPanelKode,
  prosessPanelMenyTekst,
  ...props
}) => {
  const [visModalKlageBehandling, toggleKlageModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const lagringSideEffekter = toggleOppdatereFagsakContext
    ? getLagringSideeffekter(toggleKlageModal, toggleOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl)
    : undefined;

  const { startRequest: forhandsvisMelding } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const { startRequest: lagreKlageVurdering } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.SAVE_KLAGE_VURDERING);
  const lagreKlage = useCallback(lagKlageCallback(lagreKlageVurdering, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestKlageApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={aksjonspunktKoder}
      prosessPanelKode={prosessPanelKode}
      prosessPanelMenyTekst={prosessPanelMenyTekst}
      skalPanelVisesIMeny={() => true}
      lagringSideEffekter={lagringSideEffekter}
      renderPanel={(data) => (
        <>
          <KlageBehandlingModal
            visModal={visModalKlageBehandling}
            lukkModal={() => {
              toggleKlageModal(false);
              if (opneSokeside) {
                opneSokeside();
              }
            }}
          />
          <KlagevurderingProsessIndex
            previewCallback={previewCallback}
            saveKlage={lagreKlage}
            {...data}
          />
        </>
      )}
    />
  );
};

export default VurderingFellesProsessStegInitPanel;
