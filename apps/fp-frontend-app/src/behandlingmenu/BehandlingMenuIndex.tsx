import React, { FunctionComponent, useCallback, useMemo, useEffect, useRef } from 'react';
import moment from 'moment';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  behandlingType as BehandlingType,
  behandlingStatus as BehandlingStatus,
  KodeverkType,
} from '@navikt/fp-kodeverk';
import {
  MenySakIndex,
  MenyData,
  MenyEndreBehandlendeEnhetIndex,
  getEndreEnhetMenytekst,
  MenyVergeIndex,
  getVergeMenytekst,
  MenyTaAvVentIndex,
  getTaAvVentMenytekst,
} from '@navikt/ft-sak-meny';

import { MenySettPaVentIndex, getMenytekst as getSettPaVentMenytekst } from '@navikt/fp-sak-meny-sett-pa-vent';
import { MenyHenleggIndex, getMenytekst as getHenleggMenytekst } from '@navikt/fp-sak-meny-henlegg';
import {
  MenyApneForEndringerIndex,
  getMenytekst as getApneForEndringerMenytekst,
} from '@navikt/fp-sak-meny-apne-for-endringer';
import { MenyNyBehandlingIndex, getMenytekst as getNyBehandlingMenytekst } from '@navikt/fp-sak-meny-ny-behandling';
import { MenyEndreUtlandIndex, getMenytekst as getEndreUtlandMenytekst } from '@navikt/fp-sak-meny-endre-utland';
import { VergeBehandlingmenyValg, BehandlingAppKontekst } from '@navikt/fp-types';

import behandlingEventHandler from '../behandling/BehandlingEventHandler';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../app/paths';
import useVisForhandsvisningAvMelding from '../data/useVisForhandsvisningAvMelding';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import MenyKodeverk from './MenyKodeverk';
import FagsakData from '../fagsak/FagsakData';

import '@navikt/ft-sak-meny/dist/style.css';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  BehandlingType.FORSTEGANGSSOKNAD,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.ANKE,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.TILBAKEKREVING_REVURDERING,
];

const findNewBehandlingUuid = (alleBehandlinger: BehandlingAppKontekst[]): string => {
  alleBehandlinger.sort((b1, b2) => moment(b2.opprettet).diff(moment(b1.opprettet)));
  return alleBehandlinger[0].uuid;
};

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger: BehandlingAppKontekst[] = []): string | undefined => {
  const behandling = behandlinger.find(
    b =>
      b.gjeldendeVedtak &&
      b.status === BehandlingStatus.AVSLUTTET &&
      (b.type === BehandlingType.FORSTEGANGSSOKNAD || b.type === BehandlingType.REVURDERING),
  );
  return behandling ? behandling.uuid : undefined;
};

const skalLageVergeFn = (
  vergeType: VergeBehandlingmenyValg,
  vergeMenyvalg?: VergeBehandlingmenyValg,
  behandlingUuid?: string,
  behandlingVersjon?: number,
): boolean => vergeMenyvalg === vergeType && !!behandlingUuid && !!behandlingVersjon;

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  hentFagsakdataPåNytt: () => void;
}

const BehandlingMenuIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  behandlingVersjon,
  hentFagsakdataPåNytt,
}) => {
  const fagsak = fagsakData.getFagsak();
  const alleBehandlinger = fagsakData.getAlleBehandlinger();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const navigate = useNavigate();
  const location = useLocation();

  const ref = useRef<number>();
  useEffect(() => {
    // Når antallet har endret seg er det laget en ny behandling og denne må da velges
    if (ref.current && ref.current > 0) {
      const pathname = pathToBehandling(fagsak.saksnummer, findNewBehandlingUuid(alleBehandlinger));
      navigate(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
    }

    ref.current = alleBehandlinger.length;
  }, [alleBehandlinger.length]);

  const { startRequest: sjekkTilbakeKanOpprettes, data: kanBehandlingOpprettes = false } =
    restApiHooks.useRestApiRunner(FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES);
  const { startRequest: sjekkTilbakeRevurdKanOpprettes, data: kanRevurderingOpprettes = false } =
    restApiHooks.useRestApiRunner(FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES);

  const initFetchData = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt, behandlendeEnheter } = initFetchData;

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);

  const alleFpSakKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const gaaTilSokeside = useCallback(() => navigate('/'), [navigate]);

  const { startRequest: lagNyBehandlingFpSak } = restApiHooks.useRestApiRunner(FpsakApiKeys.NEW_BEHANDLING_FPSAK);
  const { startRequest: lagNyBehandlingFpTilbake } = restApiHooks.useRestApiRunner(
    FpsakApiKeys.NEW_BEHANDLING_FPTILBAKE,
  );
  const lagNyBehandling = useCallback((isTilbakekreving, params) => {
    const lagNy = isTilbakekreving ? lagNyBehandlingFpTilbake : lagNyBehandlingFpSak;
    lagNy(params).then(() => hentFagsakdataPåNytt());
  }, []);

  const { startRequest: endreSaksmerking } = restApiHooks.useRestApiRunner(FpsakApiKeys.ENDRE_SAK_MARKERING);
  const endreFagsakMarkering = useCallback(params => endreSaksmerking(params).then(() => hentFagsakdataPåNytt()), []);

  const uuidForSistLukkede = useMemo(
    () => getUuidForSisteLukkedeForsteEllerRevurd(alleBehandlinger),
    [alleBehandlinger],
  );
  const previewHenleggBehandling = useVisForhandsvisningAvMelding(behandling?.type);

  useEffect(() => {
    if (erTilbakekrevingAktivert && !navAnsatt.kanVeilede) {
      if (uuidForSistLukkede !== undefined) {
        sjekkTilbakeKanOpprettes({ saksnummer: fagsak.saksnummer, uuid: uuidForSistLukkede });
      }
      const erTilbakekreving =
        behandling?.type === BehandlingType.TILBAKEKREVING ||
        behandling?.type === BehandlingType.TILBAKEKREVING_REVURDERING;
      if (erTilbakekreving && behandlingUuid) {
        sjekkTilbakeRevurdKanOpprettes({ uuid: behandlingUuid });
      }
    }
  }, [fagsak.saksnummer, behandlingUuid]);

  if (navAnsatt.kanVeilede) {
    return null;
  }

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTypeKode = behandling?.type;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const vergeMenyvalg = behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const setLocation = () => {
    navigate(
      getLocationWithDefaultProsessStegAndFakta({
        ...location,
        pathname: pathToBehandling(fagsak.saksnummer, behandlingUuid),
      }),
    );
  };
  const fjernVergeFn = skalLageVergeFn(VergeBehandlingmenyValg.FJERN, vergeMenyvalg, behandlingUuid, behandlingVersjon)
    ? () => behandlingEventHandler.fjernVerge().then(setLocation)
    : undefined;
  const opprettVergeFn = skalLageVergeFn(
    VergeBehandlingmenyValg.OPPRETT,
    vergeMenyvalg,
    behandlingUuid,
    behandlingVersjon,
  )
    ? () => behandlingEventHandler.opprettVerge().then(setLocation)
    : undefined;

  return (
    <MenySakIndex
      data={[
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanGjenopptas, getTaAvVentMenytekst()).medModal(
          lukkModal => (
            <div>
              {behandling && (
                <MenyTaAvVentIndex
                  behandlingVersjon={behandling.versjon}
                  taBehandlingAvVent={behandlingEventHandler.taBehandlingAvVent}
                  lukkModal={lukkModal}
                />
              )}
            </div>
          ),
        ),
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanSettesPaVent, getSettPaVentMenytekst()).medModal(
          lukkModal => (
            <MenySettPaVentIndex
              behandlingVersjon={behandlingVersjon}
              settBehandlingPaVent={behandlingEventHandler.settBehandlingPaVent}
              ventearsaker={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.VENT_AARSAK)}
              lukkModal={lukkModal}
              erTilbakekreving={
                behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
                behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING
              }
            />
          ),
        ),
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanHenlegges, getHenleggMenytekst()).medModal(
          lukkModal => (
            <div>
              {behandling && (
                <MenyHenleggIndex
                  valgtBehandling={behandling}
                  forhandsvisHenleggBehandling={previewHenleggBehandling}
                  henleggBehandling={behandlingEventHandler.henleggBehandling}
                  ytelseType={fagsak.fagsakYtelseType}
                  behandlingResultatTyper={menyKodeverk.getKodeverkForValgtBehandling(
                    KodeverkType.BEHANDLING_RESULTAT_TYPE,
                  )}
                  lukkModal={lukkModal}
                  gaaTilSokeside={gaaTilSokeside}
                />
              )}
            </div>
          ),
        ),
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanBytteEnhet, getEndreEnhetMenytekst()).medModal(
          lukkModal => (
            <MenyEndreBehandlendeEnhetIndex
              behandlingVersjon={behandlingVersjon}
              behandlendeEnhetId={behandling?.behandlendeEnhetId}
              behandlendeEnhetNavn={behandling?.behandlendeEnhetNavn}
              nyBehandlendeEnhet={behandlingEventHandler.endreBehandlendeEnhet}
              behandlendeEnheter={behandlendeEnheter}
              lukkModal={lukkModal}
            />
          ),
        ),
        new MenyData(
          behandlingTillatteOperasjoner?.behandlingKanOpnesForEndringer,
          getApneForEndringerMenytekst(),
        ).medModal(lukkModal => (
          <MenyApneForEndringerIndex
            apneBehandlingForEndringer={behandlingEventHandler.opneBehandlingForEndringer}
            lukkModal={lukkModal}
          />
        )),
        new MenyData(!fagsak.sakSkalTilInfotrygd, getNyBehandlingMenytekst()).medModal(lukkModal => (
          <MenyNyBehandlingIndex
            saksnummer={fagsak.saksnummer}
            behandlingUuid={behandling?.uuid}
            behandlingVersjon={behandlingVersjon}
            uuidForSistLukkede={uuidForSistLukkede}
            behandlingOppretting={fagsakData.getBehandlingOppretting()}
            kanTilbakekrevingOpprettes={{
              kanBehandlingOpprettes,
              kanRevurderingOpprettes,
            }}
            behandlingstyper={menyKodeverk.getKodeverkForBehandlingstyper(
              BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES,
              KodeverkType.BEHANDLING_TYPE,
            )}
            tilbakekrevingRevurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(
              KodeverkType.BEHANDLING_AARSAK,
              BehandlingType.TILBAKEKREVING_REVURDERING,
            )}
            revurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(
              KodeverkType.BEHANDLING_AARSAK,
              BehandlingType.REVURDERING,
            )}
            ytelseType={fagsak.fagsakYtelseType}
            lagNyBehandling={lagNyBehandling}
            lukkModal={lukkModal}
          />
        )),
        new MenyData(!fagsak.sakSkalTilInfotrygd, getEndreUtlandMenytekst()).medModal(lukkModal => (
          <MenyEndreUtlandIndex
            saksnummer={fagsak.saksnummer}
            fagsakMarkering={fagsak.fagsakMarkering}
            endreFagsakMarkering={endreFagsakMarkering}
            lukkModal={lukkModal}
          />
        )),
        new MenyData(!erPaVent && (!!opprettVergeFn || !!fjernVergeFn), getVergeMenytekst(!!opprettVergeFn)).medModal(
          lukkModal => <MenyVergeIndex fjernVerge={fjernVergeFn} opprettVerge={opprettVergeFn} lukkModal={lukkModal} />,
        ),
      ]}
    />
  );
};

export default BehandlingMenuIndex;
