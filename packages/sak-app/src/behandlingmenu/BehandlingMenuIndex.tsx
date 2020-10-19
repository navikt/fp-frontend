import React, {
  FunctionComponent, useCallback, useMemo, useEffect, useRef,
} from 'react';
import moment from 'moment';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import MenySakIndex, { MenyData } from '@fpsak-frontend/sak-meny';
import { NavAnsatt, Fagsak } from '@fpsak-frontend/types';
import MenyEndreBehandlendeEnhetIndex, { getMenytekst } from '@fpsak-frontend/sak-meny-endre-enhet';
import MenyVergeIndex, { getMenytekst as getVergeMenytekst } from '@fpsak-frontend/sak-meny-verge';
import MenyTaAvVentIndex, { getMenytekst as getTaAvVentMenytekst } from '@fpsak-frontend/sak-meny-ta-av-vent';
import MenySettPaVentIndex, { getMenytekst as getSettPaVentMenytekst } from '@fpsak-frontend/sak-meny-sett-pa-vent';
import MenyHenleggIndex, { getMenytekst as getHenleggMenytekst } from '@fpsak-frontend/sak-meny-henlegg';
import MenyApneForEndringerIndex, { getMenytekst as getApneForEndringerMenytekst } from '@fpsak-frontend/sak-meny-apne-for-endringer';
import MenyNyBehandlingIndex, { getMenytekst as getNyBehandlingMenytekst } from '@fpsak-frontend/sak-meny-ny-behandling';

import useHistory from '../app/useHistory';
import useLocation from '../app/useLocation';
import {
  fjernVerge, opprettVerge,
  nyBehandlendeEnhet, resumeBehandling, shelveBehandling, setBehandlingOnHold, openBehandlingForChanges,
} from './behandlingMenuOperations';
import BehandlingAppKontekst from '../behandling/behandlingAppKontekstTsType';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../app/paths';
import useVisForhandsvisningAvMelding from '../data/useVisForhandsvisningAvMelding';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import MenyKodeverk from './MenyKodeverk';
import SakRettigheter, { VergeBehandlingmenyValg } from './sakRettigheterTsType';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  BehandlingType.FORSTEGANGSSOKNAD,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.ANKE,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.TILBAKEKREVING_REVURDERING,
];

const findNewBehandlingId = (alleBehandlinger) => {
  const sortedBehandlinger = alleBehandlinger
    .sort((b1, b2) => moment(b2.opprettet).diff(moment(b1.opprettet)));
  return sortedBehandlinger[0].id;
};

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger = []) => {
  const behandling = behandlinger.find((b) => b.gjeldendeVedtak && b.status.kode === BehandlingStatus.AVSLUTTET
    && (b.type.kode === BehandlingType.FORSTEGANGSSOKNAD || b.type.kode === BehandlingType.REVURDERING));
  return behandling ? behandling.uuid : undefined;
};

const EMPTY_ARRAY = [];

type BehandlendeEnheter = {
  enhetId: string;
  enhetNavn: string;
}[];

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  saksnummer: number;
  behandlingId?: number;
  behandlingVersion?: number;
  sakRettigheter: SakRettigheter;
  oppfriskBehandlinger: () => void;
}

export const BehandlingMenuIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger = EMPTY_ARRAY,
  saksnummer,
  behandlingId,
  behandlingVersion,
  sakRettigheter,
  oppfriskBehandlinger,
}) => {
  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  const { push: pushLocation } = useHistory();
  const location = useLocation();

  const ref = useRef<number>();
  useEffect(() => {
    // Når antallet har endret seg er det laget en ny behandling og denne må da velges
    if (ref.current > 0) {
      const pathname = pathToBehandling(saksnummer, findNewBehandlingId(alleBehandlinger));
      pushLocation(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
    }

    ref.current = alleBehandlinger.length;
  }, [alleBehandlinger.length]);

  const {
    startRequest: sjekkTilbakeKanOpprettes, data: kanBehandlingOpprettes = false,
  } = restApiHooks.useRestApiRunner<boolean>(FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES);
  const {
    startRequest: sjekkTilbakeRevurdKanOpprettes, data: kanRevurderingOpprettes = false,
  } = restApiHooks.useRestApiRunner<boolean>(FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES);

  const navAnsatt = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);
  const behandlendeEnheter = restApiHooks.useGlobalStateRestApiData<BehandlendeEnheter>(FpsakApiKeys.BEHANDLENDE_ENHETER);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);

  const alleFpSakKodeverk = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const gaaTilSokeside = useCallback(() => pushLocation('/'), [pushLocation]);

  const { startRequest: lagNyBehandlingFpSak } = restApiHooks.useRestApiRunner<boolean>(FpsakApiKeys.NEW_BEHANDLING_FPSAK);
  const { startRequest: lagNyBehandlingFpTilbake } = restApiHooks.useRestApiRunner<boolean>(FpsakApiKeys.NEW_BEHANDLING_FPTILBAKE);
  const lagNyBehandling = useCallback((isTilbakekreving, params) => {
    const lagNy = isTilbakekreving ? lagNyBehandlingFpTilbake : lagNyBehandlingFpSak;
    lagNy(params).then(() => oppfriskBehandlinger());
  }, []);

  const uuidForSistLukkede = useMemo(() => getUuidForSisteLukkedeForsteEllerRevurd(alleBehandlinger), [alleBehandlinger]);
  const previewHenleggBehandling = useVisForhandsvisningAvMelding();

  if (navAnsatt.kanVeilede) {
    return null;
  }

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTypeKode = behandling ? behandling.type.kode : undefined;

  const behandlingOperasjoner = sakRettigheter.behandlingTillatteOperasjoner.find((op) => op.uuid === behandling?.uuid);

  const vergeMenyvalg = behandlingOperasjoner?.vergeBehandlingsmeny;
  const fjernVergeFn = vergeMenyvalg === VergeBehandlingmenyValg.FJERN
    ? fjernVerge(location, pushLocation, fagsak.saksnummer, behandlingId, behandlingVersion) : undefined;
  const opprettVergeFn = vergeMenyvalg === VergeBehandlingmenyValg.OPPRETT
    ? opprettVerge(location, pushLocation, fagsak.saksnummer, behandlingId, behandlingVersion) : undefined;
  const test = !!opprettVerge;
  return (
    <MenySakIndex
      data={[
        new MenyData(behandlingOperasjoner?.behandlingKanGjenopptas, getTaAvVentMenytekst())
          .medModal((lukkModal) => (
            <MenyTaAvVentIndex
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersion}
              taBehandlingAvVent={resumeBehandling}
              lukkModal={lukkModal}
            />
          )),
        new MenyData(behandlingOperasjoner?.behandlingKanSettesPaVent, getSettPaVentMenytekst())
          .medModal((lukkModal) => (
            <MenySettPaVentIndex
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersion}
              settBehandlingPaVent={setBehandlingOnHold}
              ventearsaker={menyKodeverk.getKodeverkForValgtBehandling(kodeverkTyper.VENT_AARSAK)}
              lukkModal={lukkModal}
              erTilbakekreving={behandlingTypeKode === BehandlingType.TILBAKEKREVING || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING}
            />
          )),
        new MenyData(behandlingOperasjoner?.behandlingKanHenlegges, getHenleggMenytekst())
          .medModal((lukkModal) => (
            <MenyHenleggIndex
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersion}
              forhandsvisHenleggBehandling={previewHenleggBehandling}
              henleggBehandling={shelveBehandling}
              ytelseType={fagsak.sakstype}
              behandlingType={behandling?.type}
              behandlingUuid={behandling?.uuid}
              behandlingResultatTyper={menyKodeverk.getKodeverkForValgtBehandling(kodeverkTyper.BEHANDLING_RESULTAT_TYPE)}
              lukkModal={lukkModal}
              gaaTilSokeside={gaaTilSokeside}
            />
          )),
        new MenyData(behandlingOperasjoner?.behandlingKanBytteEnhet, getMenytekst())
          .medModal((lukkModal) => (
            <MenyEndreBehandlendeEnhetIndex
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersion}
              behandlendeEnhetId={behandling?.behandlendeEnhetId}
              behandlendeEnhetNavn={behandling?.behandlendeEnhetNavn}
              nyBehandlendeEnhet={nyBehandlendeEnhet}
              behandlendeEnheter={behandlendeEnheter}
              lukkModal={lukkModal}
            />
          )),
        new MenyData(behandlingOperasjoner?.behandlingKanOpnesForEndringer, getApneForEndringerMenytekst())
          .medModal((lukkModal) => (
            <MenyApneForEndringerIndex
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersion}
              apneBehandlingForEndringer={openBehandlingForChanges}
              lukkModal={lukkModal}
            />
          )),
        new MenyData(!sakRettigheter.sakSkalTilInfotrygd, getNyBehandlingMenytekst())
          .medModal((lukkModal) => (
            <MenyNyBehandlingIndex
              saksnummer={saksnummer}
              behandlingId={behandlingId}
              behandlingUuid={behandling?.uuid}
              behandlingVersjon={behandlingVersion}
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
              tilbakekrevingRevurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(BehandlingType
                .TILBAKEKREVING_REVURDERING, kodeverkTyper.BEHANDLING_AARSAK)}
              revurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(BehandlingType.REVURDERING, kodeverkTyper.BEHANDLING_AARSAK)}
              ytelseType={fagsak.sakstype}
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
