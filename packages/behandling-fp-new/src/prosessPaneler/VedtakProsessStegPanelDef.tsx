import React, {
  FunctionComponent, useCallback, useEffect,
} from 'react';

import { isAvslag } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakProsessIndex from '@fpsak-frontend/prosess-vedtak';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Beregningsgrunnlag, BeregningsresultatFp, Fagsak, Medlemskap, SimuleringResultat, TilbakekrevingValg, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, MargMarkering, ProsessStegIkkeBehandletPanel } from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const hasOnlyClosedAps = (aksjonspunkter, vedtakAksjonspunkter) => aksjonspunkter
  .filter((ap) => !vedtakAksjonspunkter.some((vap) => vap.definisjon.kode === ap.definisjon.kode))
  .every((ap) => !isAksjonspunktOpen(ap.status.kode));

const hasAksjonspunkt = (ap) => (ap.definisjon.kode === aksjonspunktCodes.OVERSTYR_BEREGNING
  || ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG
  || ap.definisjon.kode === aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG
  || ap.definisjon.kode === aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER);

const isAksjonspunktOpenAndOfType = (ap) => hasAksjonspunkt(ap) && isAksjonspunktOpen(ap.status.kode);

const findStatusForVedtak = (vilkar, aksjonspunkter, vedtakAksjonspunkter, behandlingsresultat) => {
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

const forhandsvis = (data) => {
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

const aksjonspunktKoder = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
  aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
  aksjonspunktCodes.VURDERE_DOKUMENT,
  aksjonspunktCodes.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
  aksjonspunktCodes.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.TILBAKEKREVINGVALG },
  { key: FpBehandlingApiKeys.SEND_VARSEL_OM_REVURDERING },
  { key: FpBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING },
  { key: FpBehandlingApiKeys.MEDLEMSKAP },
  { key: FpBehandlingApiKeys.SIMULERING_RESULTAT },
  { key: FpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER },
  { key: FpBehandlingApiKeys.BEREGNINGSGRUNNLAG },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
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
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  fagsak: Fagsak;
  forhandsvisMelding: (params?: any, keepData?: boolean) => Promise<unknown>;
}

const VedtakProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  fagsak,
  forhandsvisMelding,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.VEDTAK,
    });
  }, []);

  const previewCallback = useCallback(getForhandsvisCallback(forhandsvisMelding, fagsak, behandling), [behandling.versjon]);

  const erPanelValgt = valgtProsessSteg === prosessStegCodes.VEDTAK;

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter);

  const skalVises = state === RestApiState.SUCCESS;

  useEffect(() => {
    if (skalVises) {
      registrerFaktaPanel({
        id: prosessStegCodes.VEDTAK,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Vedtak' }),
        erAktiv: valgtProsessSteg === prosessStegCodes.VEDTAK,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: findStatusForVedtak(
          data.vilkar, data.aksjonspunkter, filtrerteAksjonspunkter, behandling.behandlingsresultat,
        ),
      });
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (standardProps.status === vilkarUtfallType.IKKE_VURDERT) {
    // FIXME Lag ein wrapper med style rundt denne. Samme som MargMarkering?
    return <ProsessStegIkkeBehandletPanel />;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <MargMarkering
      behandlingStatus={behandling.status}
      aksjonspunkter={filtrerteAksjonspunkter}
      isReadOnly={standardProps.isReadOnly}
      visAksjonspunktMarkering
    >
      <FadingPanel>
        <VedtakProsessIndex
          behandling={behandling}
          ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
          previewCallback={previewCallback}
          {...dataEtterVisning}
          {...standardProps}
        />
      </FadingPanel>
    </MargMarkering>
  );
};

export default VedtakProsessStegPanelDef;
