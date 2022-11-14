import React, {
  FunctionComponent, useEffect, useState, useMemo, useCallback,
} from 'react';
import { useIntl, IntlShape } from 'react-intl';

import {
  BehandlingStatus, VilkarUtfallType, isAksjonspunktOpen,
} from '@navikt/ft-kodeverk';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { ForeldelseAksjonspunktCodes } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { VedtakAksjonspunktCode } from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { ForeldelseAksjonspunktCodes as TilbakekrevingCodes } from '@navikt/ft-prosess-tilbakekreving';
import { Aksjonspunkt, AlleKodeverkTilbakekreving } from '@navikt/ft-types';
import { Behandling, AksessRettigheter, Behandlingsresultat } from '@fpsak-frontend/types';
import VedtakResultatType from '@fpsak-frontend/kodeverk/src/vedtakResultatType';

import { erReadOnlyCurried } from '../felles/util/readOnlyPanelUtils';
import ProsessMeny, { ProsessPanelMenyData } from './ProsessMeny';
import ProsessPanelWrapper from '../felles/komponenter/ProsessPanelWrapper';
import ForeldelseProsessInitPanel from './paneler/ForeldelseProsessInitPanel';
import TilbakekrevingProsessInitPanel from './paneler/TilbakekrevingProsessInitPanel';
import VedtakTilbakekrevingProsessInitPanel from './paneler/VedtakTilbakekrevingProsessInitPanel';

import styles from './prosessIndex.less';
import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';

const DEFAULT_PANEL_VALGT = 'default';

const finnTilbakekrevingStatus = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status)) ? VilkarUtfallType.IKKE_VURDERT : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};

const getVedtakStatus = (beregningsresultat?: Behandlingsresultat): string => {
  if (!beregningsresultat) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  const { type } = beregningsresultat;

  if (type === VedtakResultatType.INGEN_TILBAKEBETALING) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }

  return type === VedtakResultatType.DELVIS_TILBAKEBETALING || type === VedtakResultatType.FULL_TILBAKEBETALING
    ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT;
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
  valgtProsessSteg?: string,
): ProsessPanelMenyData[] => {
  const apForTilbakekreving = hentAksjonspunkterFor(TilbakekrevingCodes.VURDER_TILBAKEKREVING, behandling.aksjonspunkt);

  return [
    leggTilProsessPanel(
      ProsessStegCode.FORELDELSE,
      intl.formatMessage({ id: 'Behandlingspunkt.Foreldelse' }),
      hentAksjonspunkterFor(ForeldelseAksjonspunktCodes.VURDER_FORELDELSE, behandling.aksjonspunkt),
      requestTilbakekrevingApi.hasPath(TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE.name) ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT,
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
      hentAksjonspunkterFor(VedtakAksjonspunktCode.FORESLA_VEDTAK, behandling.aksjonspunkt),
      getVedtakStatus(behandling.behandlingsresultat),
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

  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (formData) {
      setFormData({});
    }
  }, [behandling.versjon]);

  const prosessPanelerData = useMemo(() => utledProsessPaneler(intl, behandling, valgtProsessSteg),
    [behandling, valgtProsessSteg]);

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
      {aktivtProsessPanel && (
        <ProsessPanelWrapper
          erAksjonspunktOpent={aktivtProsessPanel.harApentAksjonspunkt}
          status={aktivtProsessPanel.status}
          visHenlagt={aktivtProsessPanel.id === ProsessStegCode.VEDTAK && behandling.behandlingHenlagt}
        >
          {aktivtProsessPanel.id === ProsessStegCode.FORELDELSE && (
            <ForeldelseProsessInitPanel
              behandling={behandling}
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
