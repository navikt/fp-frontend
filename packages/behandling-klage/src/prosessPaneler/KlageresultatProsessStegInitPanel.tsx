import React, {
  FunctionComponent, useCallback, useState,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakKlageProsessIndex, { VedtakKlageBrevData } from '@fpsak-frontend/prosess-vedtak-klage';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, Behandling, Behandlingsresultat, Fagsak, KlageVurdering,
} from '@fpsak-frontend/types';
import {
  FatterVedtakStatusModal, useStandardProsessPanelProps, ProsessDefaultInitPanel, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { restApiKlageHooks, KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';

const intl = createIntl(messages);

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
) => (
  data: VedtakKlageBrevData,
) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const getVedtakStatus = (aksjonspunkter: Aksjonspunkt[] = [], behandlingsresultat?: Behandlingsresultat) => {
  const harApentAksjonpunkt = aksjonspunkter.some((ap) => ap.status.kode === aksjonspunktStatus.OPPRETTET);
  if (aksjonspunkter.length === 0 || harApentAksjonpunkt) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  const resultatTypeCode = behandlingsresultat?.type.kode;
  if (resultatTypeCode === behandlingResultatType.KLAGE_AVVIST || resultatTypeCode === behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }
  return vilkarUtfallType.OPPFYLT;
};

const getLagringSideeffekter = (
  toggleFatterVedtakModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    toggleFatterVedtakModal(true);
  };
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
];

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
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  opneSokeside: () => void;
}

const KlageresultatProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  toggleOppdatereFagsakContext,
  opneSokeside,
  ...props
}) => {
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const lagringSideEffekter = getLagringSideeffekter(toggleFatterVedtakModal, toggleOppdatereFagsakContext);

  const { startRequest: forhandsvisMelding } = restApiKlageHooks.useRestApiRunner(KlageBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestKlageApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.KLAGE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.ResultatKlage' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(initData, standardData) => getVedtakStatus(initData?.aksjonspunkter, standardData.behandling.behandlingsresultat)}
      lagringSideEffekter={lagringSideEffekter}
      hentSkalMarkeresSomAktiv={(initData, standardData) => getVedtakStatus(initData?.aksjonspunkter, standardData.behandling.behandlingsresultat)
        !== vilkarUtfallType.IKKE_VURDERT}
      renderPanel={(data) => (
        <>
          <FatterVedtakStatusModal
            visModal={visFatterVedtakModal}
            lukkModal={() => { toggleFatterVedtakModal(false); opneSokeside(); }}
            tekst={intl.formatMessage({
              id: (data.klageVurdering && data.klageVurdering.klageVurderingResultatNK
                && data.klageVurdering.klageVurderingResultatNK.godkjentAvMedunderskriver)
                ? 'FatterVedtakStatusModal.KlagenErFerdigbehandlet' : 'FatterVedtakStatusModal.SendtKlageResultatTilMedunderskriver',
            })}
          />
          <VedtakKlageProsessIndex
            previewVedtakCallback={previewCallback}
            {...data}
          />
        </>
      )}
    />
  );
};

export default KlageresultatProsessStegInitPanel;
