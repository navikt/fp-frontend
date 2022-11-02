import React, {
  FunctionComponent, useCallback, useState,
} from 'react';
import { useIntl } from 'react-intl';

import { isAvslag } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakProsessIndex, { ForhandsvisData } from '@fpsak-frontend/prosess-vedtak';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Behandlingsresultat, Beregningsgrunnlag, BeregningsresultatFp, Fagsak,
  ForhåndsvisMeldingParams, Medlemskap, SimuleringResultat, TilbakekrevingValg, Vilkar,
} from '@fpsak-frontend/types';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { restApiSvpHooks } from '../data/svpBehandlingApi';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import IverksetterVedtakStatusModal from '../../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import FatterVedtakStatusModal from '../../../felles/modaler/vedtak/FatterVedtakStatusModal';
import useStandardProsessPanelProps from '../../../felles/prosess/useStandardProsessPanelProps';

const hasOnlyClosedAps = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .filter((ap) => !vedtakAksjonspunkter.some((vap) => vap.definisjon === ap.definisjon))
  .every((ap) => !isAksjonspunktOpen(ap.status));

const hasAksjonspunkt = (ap: Aksjonspunkt): boolean => (ap.definisjon === aksjonspunktCodes.OVERSTYR_BEREGNING
  || ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
  || ap.definisjon === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG
  || ap.definisjon === aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER);

const isAksjonspunktOpenAndOfType = (ap: Aksjonspunkt): boolean => hasAksjonspunkt(ap) && isAksjonspunktOpen(ap.status);

const findStatusForVedtak = (
  vilkar: Vilkar[],
  aksjonspunkter: Aksjonspunkt[],
  vedtakAksjonspunkter: Aksjonspunkt[],
  behandlingsresultat?: Behandlingsresultat,
): string => {
  if (vilkar.length === 0) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter) && vilkar.some((v) => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT)) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }

  if (vilkar.some((v) => v.vilkarStatus === vilkarUtfallType.IKKE_VURDERT) || aksjonspunkter.some(isAksjonspunktOpenAndOfType)) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (!hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter)) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (behandlingsresultat && isAvslag(behandlingsresultat.type)) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }
  return vilkarUtfallType.OPPFYLT;
};

const getForhandsvisCallback = (
  forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: ForhandsvisData) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.fagsakYtelseType,
  };

  return forhandsvisMelding(brevData).then((response) => forhandsvisDokument(response));
};

const IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
  aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
  aksjonspunktCodes.VURDERE_DOKUMENT,
  aksjonspunktCodes.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  aksjonspunktCodes.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];
const FATTER_VEDTAK_AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
];

const getLagringSideeffekter = (
  toggleIverksetterVedtakModal: (visIverksetterModal: boolean) => void,
  toggleFatterVedtakModal: (skalFatterModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
) => (aksjonspunktModels: { kode: string }[]) => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (FATTER_VEDTAK_AKSJONSPUNKT_KODER.some((kode) => kode === aksjonspunktModels[0].kode)) {
      toggleFatterVedtakModal(true);
    } else {
      toggleIverksetterVedtakModal(true);
    }
  };
};

const AKSJONSPUNKT_KODER = [
  ...IVERKSETTER_VEDTAK_AKSJONSPUNKT_KODER,
  ...FATTER_VEDTAK_AKSJONSPUNKT_KODER,
];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.TILBAKEKREVINGVALG,
  BehandlingFellesApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING,
  BehandlingFellesApiKeys.MEDLEMSKAP,
  BehandlingFellesApiKeys.SIMULERING_RESULTAT,
  BehandlingFellesApiKeys.BEREGNINGRESULTAT_FORELDREPENGER,
  BehandlingFellesApiKeys.BEREGNINGSGRUNNLAG,
];
type EndepunktPanelData = {
  tilbakekrevingvalg?: TilbakekrevingValg;
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-foreldrepenger'?: BeregningsresultatFp;
  };
  medlemskap: Medlemskap;
  simuleringResultat: SimuleringResultat;
  beregningresultatForeldrepenger?: BeregningsresultatFp;
  beregningsgrunnlag?: Beregningsgrunnlag;
}

interface OwnProps {
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  fagsak: Fagsak;
  opneSokeside: () => void;
}

const VedtakSvpProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  toggleOppdatereFagsakContext,
  fagsak,
  opneSokeside,
  ...props
}) => {
  const intl = useIntl();
  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);
  const lagringSideEffekter = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleFatterVedtakModal,
    toggleOppdatereFagsakContext);

  const standardPanelProps = useStandardProsessPanelProps();

  const { startRequest: forhandsvisMelding } = restApiSvpHooks.useRestApiRunner(BehandlingFellesApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const lukkIverksetterModal = useCallback(() => { toggleIverksetterVedtakModal(false); opneSokeside(); }, []);
  const lukkFatterModal = useCallback(() => { toggleFatterVedtakModal(false); opneSokeside(); }, []);

  const { aksjonspunkter, vilkår } = props.behandling;

  return (
    <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny={(_data, initState) => initState === RestApiState.SUCCESS}
      hentOverstyrtStatus={(_initData, standardData) => findStatusForVedtak(
        vilkår || [], aksjonspunkter || [], standardData.aksjonspunkter, standardData.behandling.behandlingsresultat,
      )}
      lagringSideEffekter={lagringSideEffekter}
      hentSkalMarkeresSomAktiv={(_initData, standardData) => !standardData.behandling.behandlingHenlagt && findStatusForVedtak(
        vilkår || [], aksjonspunkter || [], standardData.aksjonspunkter, standardData.behandling.behandlingsresultat,
      ) !== vilkarUtfallType.IKKE_VURDERT}
      renderPanel={(data) => (
        <>
          <IverksetterVedtakStatusModal
            visModal={visIverksetterVedtakModal}
            lukkModal={lukkIverksetterModal}
            behandlingsresultat={data.behandling.behandlingsresultat}
          />
          <FatterVedtakStatusModal
            visModal={visFatterVedtakModal}
            lukkModal={lukkFatterModal}
            tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.SendtBeslutter' })}
          />
          <VedtakProsessIndex
            ytelseTypeKode={fagsakYtelseType.SVANGERSKAPSPENGER}
            previewCallback={previewCallback}
            {...data}
            aksjonspunkter={aksjonspunkter}
            vilkar={vilkår}
          />
        </>
      )}
    />
  );
};

export default VedtakSvpProsessStegInitPanel;
