import React, {
  FunctionComponent, useCallback, useMemo, useEffect, useRef,
} from 'react';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import MenySakIndex, { MenyData } from '@fpsak-frontend/sak-meny';
import MenyEndreBehandlendeEnhetIndex, { getMenytekst } from '@fpsak-frontend/sak-meny-endre-enhet';
import MenyVergeIndex, { getMenytekst as getVergeMenytekst } from '@fpsak-frontend/sak-meny-verge';
import MenyTaAvVentIndex, { getMenytekst as getTaAvVentMenytekst } from '@fpsak-frontend/sak-meny-ta-av-vent';
import MenySettPaVentIndex, { getMenytekst as getSettPaVentMenytekst } from '@fpsak-frontend/sak-meny-sett-pa-vent';
import MenyHenleggIndex, { getMenytekst as getHenleggMenytekst } from '@fpsak-frontend/sak-meny-henlegg';
import MenyApneForEndringerIndex, { getMenytekst as getApneForEndringerMenytekst } from '@fpsak-frontend/sak-meny-apne-for-endringer';
import MenyNyBehandlingIndex, { getMenytekst as getNyBehandlingMenytekst } from '@fpsak-frontend/sak-meny-ny-behandling';
import { Fagsak, BehandlingAppKontekst } from '@fpsak-frontend/types';

import behandlingEventHandler from '../behandling/BehandlingEventHandler';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../app/paths';
import useVisForhandsvisningAvMelding from '../data/useVisForhandsvisningAvMelding';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import MenyKodeverk from './MenyKodeverk';
import BehandlingRettigheter, { VergeBehandlingmenyValg } from '../behandling/behandlingRettigheterTsType';
import SakRettigheter from '../fagsak/sakRettigheterTsType';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  BehandlingType.FORSTEGANGSSOKNAD,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.ANKE,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.TILBAKEKREVING_REVURDERING,
];

const findNewBehandlingId = (alleBehandlinger: BehandlingAppKontekst[]): number => {
  alleBehandlinger.sort((b1, b2) => moment(b2.opprettet).diff(moment(b1.opprettet)));
  return alleBehandlinger[0].id;
};

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger: BehandlingAppKontekst[] = []): string | undefined => {
  const behandling = behandlinger.find((b) => b.gjeldendeVedtak && b.status.kode === BehandlingStatus.AVSLUTTET
    && (b.type.kode === BehandlingType.FORSTEGANGSSOKNAD || b.type.kode === BehandlingType.REVURDERING));
  return behandling ? behandling.uuid : undefined;
};

const skalLageVergeFn = (
  vergeType: VergeBehandlingmenyValg,
  vergeMenyvalg?: VergeBehandlingmenyValg,
  behandlingId?: number,
  behandlingVersjon?: number,
): boolean => vergeMenyvalg === vergeType && !!behandlingId && !!behandlingVersjon;

const EMPTY_ARRAY = [] as BehandlingAppKontekst[];

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId?: number;
  behandlingVersjon?: number;
  behandlingRettigheter?: BehandlingRettigheter;
  sakRettigheter: SakRettigheter;
  oppfriskBehandlinger: () => void;
}

export const BehandlingMenuIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger = EMPTY_ARRAY,
  behandlingId,
  behandlingVersjon,
  sakRettigheter,
  behandlingRettigheter,
  oppfriskBehandlinger,
}) => {
  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  const { push: pushLocation } = useHistory();
  const location = useLocation();

  const ref = useRef<number>();
  useEffect(() => {
    // Når antallet har endret seg er det laget en ny behandling og denne må da velges
    if (ref.current && ref.current > 0) {
      const pathname = pathToBehandling(fagsak.saksnummer, findNewBehandlingId(alleBehandlinger));
      pushLocation(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
    }

    ref.current = alleBehandlinger.length;
  }, [alleBehandlinger.length]);

  const {
    startRequest: sjekkTilbakeKanOpprettes, data: kanBehandlingOpprettes = false,
  } = restApiHooks.useRestApiRunner(FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES);
  const {
    startRequest: sjekkTilbakeRevurdKanOpprettes, data: kanRevurderingOpprettes = false,
  } = restApiHooks.useRestApiRunner(FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES);

  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);
  const behandlendeEnheter = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.BEHANDLENDE_ENHETER);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);

  const alleFpSakKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const gaaTilSokeside = useCallback(() => pushLocation('/'), [pushLocation]);

  const { startRequest: lagNyBehandlingFpSak } = restApiHooks.useRestApiRunner(FpsakApiKeys.NEW_BEHANDLING_FPSAK);
  const { startRequest: lagNyBehandlingFpTilbake } = restApiHooks.useRestApiRunner(FpsakApiKeys.NEW_BEHANDLING_FPTILBAKE);
  const lagNyBehandling = useCallback((isTilbakekreving, params) => {
    const lagNy = isTilbakekreving ? lagNyBehandlingFpTilbake : lagNyBehandlingFpSak;
    lagNy(params).then(() => oppfriskBehandlinger());
  }, []);

  const uuidForSistLukkede = useMemo(() => getUuidForSisteLukkedeForsteEllerRevurd(alleBehandlinger), [alleBehandlinger]);
  const previewHenleggBehandling = useVisForhandsvisningAvMelding(behandling?.type);

  if (navAnsatt.kanVeilede) {
    return null;
  }

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTypeKode = behandling ? behandling.type.kode : undefined;

  const vergeMenyvalg = behandlingRettigheter?.vergeBehandlingsmeny;
  const setLocation = () => {
    pushLocation(getLocationWithDefaultProsessStegAndFakta({
      ...location,
      pathname: pathToBehandling(fagsak.saksnummer, behandlingId),
    }));
  };
  const fjernVergeFn = skalLageVergeFn(VergeBehandlingmenyValg.FJERN, vergeMenyvalg, behandlingId, behandlingVersjon)
    ? () => behandlingEventHandler.fjernVerge().then(setLocation) : undefined;
  const opprettVergeFn = skalLageVergeFn(VergeBehandlingmenyValg.OPPRETT, vergeMenyvalg, behandlingId, behandlingVersjon)
    ? () => behandlingEventHandler.opprettVerge().then(setLocation) : undefined;
  return (
    <MenySakIndex
      data={[
        new MenyData(behandlingRettigheter?.behandlingKanGjenopptas, getTaAvVentMenytekst())
          .medModal((lukkModal) => (
            <>
              {behandling && (
                <MenyTaAvVentIndex
                  behandlingVersjon={behandling.versjon}
                  taBehandlingAvVent={behandlingEventHandler.taBehandlingAvVent}
                  lukkModal={lukkModal}
                />
              )}
            </>
          )),
        new MenyData(behandlingRettigheter?.behandlingKanSettesPaVent, getSettPaVentMenytekst())
          .medModal((lukkModal) => (
            <MenySettPaVentIndex
              behandlingVersjon={behandlingVersjon}
              settBehandlingPaVent={behandlingEventHandler.settBehandlingPaVent}
              ventearsaker={menyKodeverk.getKodeverkForValgtBehandling(kodeverkTyper.VENT_AARSAK)}
              lukkModal={lukkModal}
              erTilbakekreving={behandlingTypeKode === BehandlingType.TILBAKEKREVING || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING}
            />
          )),
        new MenyData(behandlingRettigheter?.behandlingKanHenlegges, getHenleggMenytekst())
          .medModal((lukkModal) => (
            <>
              {behandling && (
                <MenyHenleggIndex
                  valgtBehandling={behandling}
                  forhandsvisHenleggBehandling={previewHenleggBehandling}
                  henleggBehandling={behandlingEventHandler.henleggBehandling}
                  ytelseType={fagsak.fagsakYtelseType}
                  behandlingResultatTyper={menyKodeverk.getKodeverkForValgtBehandling(kodeverkTyper.BEHANDLING_RESULTAT_TYPE)}
                  lukkModal={lukkModal}
                  gaaTilSokeside={gaaTilSokeside}
                />
              )}
            </>
          )),
        new MenyData(behandlingRettigheter?.behandlingKanBytteEnhet, getMenytekst())
          .medModal((lukkModal) => (
            <MenyEndreBehandlendeEnhetIndex
              behandlingVersjon={behandlingVersjon}
              behandlendeEnhetId={behandling?.behandlendeEnhetId}
              behandlendeEnhetNavn={behandling?.behandlendeEnhetNavn}
              nyBehandlendeEnhet={behandlingEventHandler.endreBehandlendeEnhet}
              behandlendeEnheter={behandlendeEnheter}
              lukkModal={lukkModal}
            />
          )),
        new MenyData(behandlingRettigheter?.behandlingKanOpnesForEndringer, getApneForEndringerMenytekst())
          .medModal((lukkModal) => (
            <MenyApneForEndringerIndex
              apneBehandlingForEndringer={behandlingEventHandler.opneBehandlingForEndringer}
              lukkModal={lukkModal}
            />
          )),
        new MenyData(!sakRettigheter.sakSkalTilInfotrygd, getNyBehandlingMenytekst())
          .medModal((lukkModal) => (
            <MenyNyBehandlingIndex
              saksnummer={fagsak.saksnummer}
              behandlingId={behandlingId}
              behandlingUuid={behandling?.uuid}
              behandlingVersjon={behandlingVersjon}
              behandlingType={behandling?.type}
              uuidForSistLukkede={uuidForSistLukkede}
              behandlingOppretting={sakRettigheter.behandlingTypeKanOpprettes}
              kanTilbakekrevingOpprettes={{
                kanBehandlingOpprettes,
                kanRevurderingOpprettes,
              }}
              erTilbakekrevingAktivert={erTilbakekrevingAktivert}
              behandlingstyper={menyKodeverk
                .getKodeverkForBehandlingstyper(BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES, kodeverkTyper.BEHANDLING_TYPE)}
              tilbakekrevingRevurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(kodeverkTyper.BEHANDLING_AARSAK,
                BehandlingType.TILBAKEKREVING_REVURDERING)}
              revurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(kodeverkTyper.BEHANDLING_AARSAK, BehandlingType.REVURDERING)}
              ytelseType={fagsak.fagsakYtelseType}
              lagNyBehandling={lagNyBehandling}
              sjekkOmTilbakekrevingKanOpprettes={sjekkTilbakeKanOpprettes}
              sjekkOmTilbakekrevingRevurderingKanOpprettes={sjekkTilbakeRevurdKanOpprettes}
              lukkModal={lukkModal}
            />
          )),
        new MenyData(!erPaVent && (!!opprettVergeFn || !!fjernVergeFn), getVergeMenytekst(!!opprettVergeFn))
          .medModal((lukkModal) => (
            <MenyVergeIndex
              fjernVerge={fjernVergeFn}
              opprettVerge={opprettVergeFn}
              lukkModal={lukkModal}
            />
          )),
      ]}
    />
  );
};

export default BehandlingMenuIndex;
