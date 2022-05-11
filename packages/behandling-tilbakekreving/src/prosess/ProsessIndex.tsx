import React, {
  FunctionComponent, useEffect, useState, useMemo, useCallback,
} from 'react';
import { useIntl, IntlShape } from 'react-intl';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingStatus, VilkarUtfallType, VedtakResultatType, isAksjonspunktOpen,
} from '@navikt/ft-kodeverk';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ForeldelseAksjonspunktCodes } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { VedtakAksjonspunktCode } from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { ForeldelseAksjonspunktCodes as TilbakekrevingCodes } from '@navikt/ft-prosess-tilbakekreving';
import {
  Aksjonspunkt,
  FeilutbetalingPerioderWrapper,
  AlleKodeverkTilbakekreving,
  Behandling,
  BeregningsresultatTilbakekreving,
} from '@navikt/ft-types';
import { AksessRettigheter } from '@fpsak-frontend/types';

import { erReadOnlyCurried } from '../felles/util/readOnlyPanelUtils';
import { restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';
import ProsessMeny, { ProsessPanelMenyData } from './ProsessMeny';
import ProsessPanelWrapper from '../felles/komponenter/ProsessPanelWrapper';
import ForeldelseProsessInitPanel from './paneler/ForeldelseProsessInitPanel';
import TilbakekrevingProsessInitPanel from './paneler/TilbakekrevingProsessInitPanel';
import VedtakTilbakekrevingProsessInitPanel from './paneler/VedtakTilbakekrevingProsessInitPanel';

import styles from './prosessIndex.less';

const DEFAULT_PANEL_VALGT = 'default';

const ENDEPUNKTER_INIT_DATA = [
  TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER,
  TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE,
  TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  beregningsresultat: BeregningsresultatTilbakekreving;
}

const finnTilbakekrevingStatus = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status)) ? VilkarUtfallType.IKKE_VURDERT : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};

const getVedtakStatus = (beregningsresultat?: BeregningsresultatTilbakekreving): string => {
  if (!beregningsresultat) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  const { vedtakResultatType } = beregningsresultat;
  return vedtakResultatType === VedtakResultatType.INGEN_TILBAKEBETALING ? VilkarUtfallType.IKKE_OPPFYLT : VilkarUtfallType.OPPFYLT;
};

const hentAksjonspunkterFor = (
  aksjonspunktKode: string,
  aksjonspunkter?: Aksjonspunkt[],
): Aksjonspunkt[] => (aksjonspunkter ? aksjonspunkter.filter((ap) => aksjonspunktKode === ap.definisjon) : []);

const leggTilProsessPanel = (
  prosessStegKode: string,
  tekst: string,
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  valgtProsessSteg?: string,
  ekstraAktivSjekk?: boolean,
): ProsessPanelMenyData => {
  const harApentAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status) && ap.kanLoses);
  const erAktiv = valgtProsessSteg === prosessStegKode || (harApentAksjonspunkt && valgtProsessSteg === DEFAULT_PANEL_VALGT) || ekstraAktivSjekk;
  return {
    id: prosessStegKode,
    tekst,
    erAktiv,
    harApentAksjonspunkt,
    status,
  };
};

const utledProsessPaneler = (
  intl: IntlShape,
  behandling: Behandling,
  initData?: EndepunktInitData,
  valgtProsessSteg?: string,
): ProsessPanelMenyData[] => {
  const apForTilbakekreving = hentAksjonspunkterFor(TilbakekrevingCodes.VURDER_TILBAKEKREVING, initData?.aksjonspunkter);

  return [
    leggTilProsessPanel(
      ProsessStegCode.FORELDELSE,
      intl.formatMessage({ id: 'Behandlingspunkt.Foreldelse' }),
      hentAksjonspunkterFor(ForeldelseAksjonspunktCodes.VURDER_FORELDELSE, initData?.aksjonspunkter),
      initData?.perioderForeldelse ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT,
      valgtProsessSteg,
    ),
    leggTilProsessPanel(
      ProsessStegCode.TILBAKEKREVING,
      intl.formatMessage({ id: 'Behandlingspunkt.Tilbakekreving' }),
      apForTilbakekreving,
      finnTilbakekrevingStatus(apForTilbakekreving),
      valgtProsessSteg,
    ),
    leggTilProsessPanel(
      ProsessStegCode.VEDTAK,
      intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' }),
      hentAksjonspunkterFor(VedtakAksjonspunktCode.FORESLA_VEDTAK, initData?.aksjonspunkter),
      getVedtakStatus(initData?.beregningsresultat),
      valgtProsessSteg,
      behandling.status === BehandlingStatus.AVSLUTTET && valgtProsessSteg === DEFAULT_PANEL_VALGT,
    ),
  ];
};

interface OwnProps {
  behandling: Behandling;
  fagsakKjønn: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  valgtProsessSteg?: string;
  oppdaterProsessPanelIUrl: (faktanavn: string) => void;
  bekreftAksjonspunkterMedSideeffekter: (
    lagringSideEffectsCallback?: (aksjonspunktModeller: any) => () => void,
  ) => (aksjonspunkter: any) => Promise<any>;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
  harApenRevurdering: boolean;
  opneSokeside: () => void;
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
}

const ProsessIndex: FunctionComponent<OwnProps> = ({
  behandling,
  fagsakKjønn,
  tilbakekrevingKodeverk,
  valgtProsessSteg,
  oppdaterProsessPanelIUrl,
  bekreftAksjonspunkterMedSideeffekter,
  rettigheter,
  hasFetchError,
  harApenRevurdering,
  opneSokeside,
  toggleOppdatereFagsakContext,
}) => {
  const intl = useIntl();

  const formaterteEndepunkter = ENDEPUNKTER_INIT_DATA.map((e) => ({ key: e }));
  const { data: initData, state } = restApiTilbakekrevingHooks
    .useMultipleRestApi<EndepunktInitData, any>(formaterteEndepunkter, {
      updateTriggers: [behandling.versjon],
      isCachingOn: true,
    });

  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (formData) {
      setFormData({});
    }
  }, [behandling.versjon]);

  const prosessPanelerData = useMemo(() => utledProsessPaneler(intl, behandling, initData, valgtProsessSteg),
    [behandling, initData, valgtProsessSteg]);

  const oppdaterProsessPanel = useCallback((index: number) => {
    const panel = prosessPanelerData[index];
    oppdaterProsessPanelIUrl(panel.erAktiv ? undefined : panel.id);
  }, [prosessPanelerData, oppdaterProsessPanelIUrl]);

  const aktivtProsessPanel = prosessPanelerData.find((d) => d.erAktiv);

  const erReadOnlyFn = useCallback(erReadOnlyCurried(behandling, rettigheter, hasFetchError),
    [behandling, rettigheter, hasFetchError]);

  const bekreftAksjonspunkter = useCallback(bekreftAksjonspunkterMedSideeffekter(), [behandling.versjon]);

  return (
    <div className={styles.container}>
      <div className={styles.meny}>
        <ProsessMeny menyData={prosessPanelerData} oppdaterProsessPanelIUrl={oppdaterProsessPanel} />
      </div>
      {state !== RestApiState.SUCCESS && (
        <LoadingPanel />
      )}
      {state === RestApiState.SUCCESS && aktivtProsessPanel && (
        <ProsessPanelWrapper
          erAksjonspunktOpent={aktivtProsessPanel.harApentAksjonspunkt}
          status={aktivtProsessPanel.status}
          visHenlagt={aktivtProsessPanel.id === ProsessStegCode.VEDTAK && behandling.behandlingHenlagt}
        >
          {aktivtProsessPanel.id === ProsessStegCode.FORELDELSE && (
            <ForeldelseProsessInitPanel
              behandling={behandling}
              aksjonspunkter={initData?.aksjonspunkter}
              perioderForeldelse={initData?.perioderForeldelse}
              navBrukerKjonn={fagsakKjønn}
              erReadOnlyFn={erReadOnlyFn}
              alleKodeverk={tilbakekrevingKodeverk}
              bekreftAksjonspunkter={bekreftAksjonspunkter}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {aktivtProsessPanel.id === ProsessStegCode.TILBAKEKREVING && (
            <TilbakekrevingProsessInitPanel
              behandling={behandling}
              perioderForeldelse={initData?.perioderForeldelse}
              aksjonspunkter={initData?.aksjonspunkter}
              navBrukerKjonn={fagsakKjønn}
              alleKodeverk={tilbakekrevingKodeverk}
              bekreftAksjonspunkter={bekreftAksjonspunkter}
              erReadOnlyFn={erReadOnlyFn}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {aktivtProsessPanel.id === ProsessStegCode.VEDTAK && !behandling.behandlingHenlagt && (
            <VedtakTilbakekrevingProsessInitPanel
              behandling={behandling}
              beregningsresultat={initData?.beregningsresultat}
              aksjonspunkter={initData?.aksjonspunkter}
              harApenRevurdering={harApenRevurdering}
              bekreftAksjonspunkterMedSideeffekter={bekreftAksjonspunkterMedSideeffekter}
              opneSokeside={opneSokeside}
              toggleOppdatereFagsakContext={toggleOppdatereFagsakContext}
              erReadOnlyFn={erReadOnlyFn}
              alleKodeverk={tilbakekrevingKodeverk}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </ProsessPanelWrapper>
      )}
    </div>
  );
};

export default ProsessIndex;
