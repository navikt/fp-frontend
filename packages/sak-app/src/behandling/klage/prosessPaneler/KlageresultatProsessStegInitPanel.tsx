import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';
import {
  Behandling, Behandlingsresultat, Fagsak, Aksjonspunkt,
} from '@navikt/ft-types';
import { VilkarUtfallType, AksjonspunktStatus, BehandlingResultatType } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakKlageProsessIndex, { VedtakKlageBrevData } from '@fpsak-frontend/prosess-vedtak-klage';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { ForhåndsvisMeldingParams, KlageVurdering } from '@fpsak-frontend/types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import { restApiKlageHooks, KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import FatterVedtakStatusModal from '../../felles/modaler/vedtak/FatterVedtakStatusModal';

const lagForhandsvisCallback = (
  forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<any>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (
  data: VedtakKlageBrevData,
) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };
  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const getVedtakStatus = (
  behandlingsresultat?: Behandlingsresultat,
  aksjonspunkter: Aksjonspunkt[] = [],
) => {
  const harApentAksjonpunkt = aksjonspunkter.some((ap) => ap.status === AksjonspunktStatus.OPPRETTET);
  if (aksjonspunkter.length === 0 || harApentAksjonpunkt) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  const resultatTypeCode = behandlingsresultat?.type;
  if (resultatTypeCode === BehandlingResultatType.HENLAGT_KLAGE_TRUKKET || resultatTypeCode === BehandlingResultatType.HENLAGT_FEILOPPRETTET) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  if (resultatTypeCode === BehandlingResultatType.KLAGE_AVVIST || resultatTypeCode === BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }
  return VilkarUtfallType.OPPFYLT;
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

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
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
  const intl = useIntl();

  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const lagringSideEffekter = getLagringSideeffekter(toggleFatterVedtakModal, toggleOppdatereFagsakContext);

  const { startRequest: forhandsvisMelding } = restApiKlageHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestKlageApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.KLAGE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.ResultatKlage' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(initData, standardData) => getVedtakStatus(standardData.behandling.behandlingsresultat, initData.aksjonspunkter)}
      lagringSideEffekter={lagringSideEffekter}
      hentSkalMarkeresSomAktiv={(initData, standardData) => getVedtakStatus(standardData.behandling.behandlingsresultat, initData.aksjonspunkter)
        !== VilkarUtfallType.IKKE_VURDERT}
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
