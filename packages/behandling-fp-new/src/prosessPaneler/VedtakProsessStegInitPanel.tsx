import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { isAvslag } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakProsessIndex from '@fpsak-frontend/prosess-vedtak';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Behandlingsresultat, Beregningsgrunnlag, BeregningsresultatFp, Fagsak, Medlemskap, SimuleringResultat, TilbakekrevingValg, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, IverksetterVedtakStatusModal,
  FatterVedtakStatusModal, useProsessMenyRegistrerer, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import {
  restApiFpHooks, FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel,
} from '../data/fpBehandlingApi';

const hasOnlyClosedAps = (aksjonspunkter: Aksjonspunkt[], vedtakAksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter
  .filter((ap) => !vedtakAksjonspunkter.some((vap) => vap.definisjon.kode === ap.definisjon.kode))
  .every((ap) => !isAksjonspunktOpen(ap.status.kode));

const hasAksjonspunkt = (ap: Aksjonspunkt): boolean => (ap.definisjon.kode === aksjonspunktCodes.OVERSTYR_BEREGNING
  || ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
  || ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG
  || ap.definisjon.kode === aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER);

const isAksjonspunktOpenAndOfType = (ap: Aksjonspunkt): boolean => hasAksjonspunkt(ap) && isAksjonspunktOpen(ap.status.kode);

const findStatusForVedtak = (
  vilkar: Vilkar[],
  aksjonspunkter: Aksjonspunkt[],
  vedtakAksjonspunkter: Aksjonspunkt[],
  behandlingsresultat: Behandlingsresultat,
): string => {
  if (vilkar.length === 0) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter) && vilkar.some((v) => v.vilkarStatus.kode === vilkarUtfallType.IKKE_OPPFYLT)) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }

  if (vilkar.some((v) => v.vilkarStatus.kode === vilkarUtfallType.IKKE_VURDERT) || aksjonspunkter.some(isAksjonspunktOpenAndOfType)) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (!hasOnlyClosedAps(aksjonspunkter, vedtakAksjonspunkter)) {
    return vilkarUtfallType.IKKE_VURDERT;
  }

  if (isAvslag(behandlingsresultat.type.kode)) {
    return vilkarUtfallType.IKKE_OPPFYLT;
  }
  return vilkarUtfallType.OPPFYLT;
};

const forhandsvis = (data: any): void => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const getForhandsvisCallback = (
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<unknown>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (data: any) => {
  const brevData = {
    ...data,
    behandlingUuid: behandling.uuid,
    ytelseType: fagsak.sakstype,
  };

  return forhandsvisMelding(brevData).then((response) => forhandsvis(response));
};

const getLagringSideeffekter = (
  toggleIverksetterVedtakModal: (visIverksetterModal: boolean) => void,
  toggleFatterVedtakModal: (skalFatterModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void,
) => (aksjonspunktModels: any) => {
  const visIverksetterVedtakModal = aksjonspunktModels[0].isVedtakSubmission
    && [aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL, aksjonspunktCodes.FATTER_VEDTAK].includes(aksjonspunktModels[0].kode);
  const visFatterVedtakModal = aksjonspunktModels[0].isVedtakSubmission && aksjonspunktModels[0].kode === aksjonspunktCodes.FORESLA_VEDTAK;
  const isVedtakAp = aksjonspunktModels.some((a) => a.isVedtakSubmission);

  if (visIverksetterVedtakModal || visFatterVedtakModal || isVedtakAp) {
    toggleOppdatereFagsakContext(false);
  }

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    if (visFatterVedtakModal) {
      toggleFatterVedtakModal(true);
    } else if (visIverksetterVedtakModal) {
      toggleIverksetterVedtakModal(true);
    } else {
      oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
    }
  };
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
  aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
  aksjonspunktCodes.VURDERE_DOKUMENT,
  aksjonspunktCodes.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  aksjonspunktCodes.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.TILBAKEKREVINGVALG,
  FpBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING,
  FpBehandlingApiKeys.MEDLEMSKAP,
  FpBehandlingApiKeys.SIMULERING_RESULTAT,
  FpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER,
  FpBehandlingApiKeys.BEREGNINGSGRUNNLAG,
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
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  fagsak: Fagsak;
  opneSokeside: () => void;
}

const VedtakProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  toggleOppdatereFagsakContext,
  oppdaterProsessStegOgFaktaPanelIUrl,
  fagsak,
  opneSokeside,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);
  const lagringSideEffekter = getLagringSideeffekter(toggleIverksetterVedtakModal, toggleFatterVedtakModal,
    toggleOppdatereFagsakContext, oppdaterProsessStegOgFaktaPanelIUrl);
  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const skalVises = initState === RestApiState.SUCCESS;
  const status = useMemo(() => findStatusForVedtak(
    initData?.vilkar || [], initData?.aksjonspunkter || [], standardPanelProps.aksjonspunkter, standardPanelProps.behandling.behandlingsresultat,
  ), [initData, standardPanelProps.aksjonspunkter, standardPanelProps.behandling.behandlingsresultat]);

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.VEDTAK,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Vedtak' }),
    valgtProsessSteg,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  const { startRequest: forhandsvisMelding } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.PREVIEW_MESSAGE);
  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon]);

  const lukkIverksetterModal = useCallback(() => { toggleIverksetterVedtakModal(false); opneSokeside(); }, []);
  const lukkFatterModal = useCallback(() => { toggleFatterVedtakModal(false); opneSokeside(); }, []);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      loadingState={panelDataState}
    >
      <IverksetterVedtakStatusModal
        visModal={visIverksetterVedtakModal}
        lukkModal={lukkIverksetterModal}
        behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
      />
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal && standardPanelProps.behandling.status.kode === behandlingStatus.FATTER_VEDTAK}
        lukkModal={lukkFatterModal}
        tekstkode="FatterVedtakStatusModal.SendtBeslutter"
      />
      <VedtakProsessIndex
        ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
        previewCallback={previewCallback}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default VedtakProsessStegInitPanel;
