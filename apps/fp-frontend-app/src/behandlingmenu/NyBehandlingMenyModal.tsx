import React, { FunctionComponent, useCallback, useMemo, useEffect } from 'react';
import {
  behandlingType as BehandlingType,
  behandlingStatus as BehandlingStatus,
  KodeverkType,
} from '@navikt/fp-kodeverk';

import { MenyNyBehandlingIndex, FormValues as NyBehandlingFormValues } from '@navikt/fp-sak-meny-ny-behandling';
import { BehandlingAppKontekst, Behandling } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import MenyKodeverk from './MenyKodeverk';
import FagsakData from '../fagsak/FagsakData';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  BehandlingType.FORSTEGANGSSOKNAD,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.ANKE,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.TILBAKEKREVING_REVURDERING,
];

/* const findNewBehandlingUuid = (alleBehandlinger: BehandlingAppKontekst[]): string => {
  alleBehandlinger.sort((b1, b2) => moment(b2.opprettet).diff(moment(b1.opprettet)));
  return alleBehandlinger[0].uuid;
}; */

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger: BehandlingAppKontekst[] = []): string | undefined => {
  const behandling = behandlinger.find(
    b =>
      b.gjeldendeVedtak &&
      b.status === BehandlingStatus.AVSLUTTET &&
      (b.type === BehandlingType.FORSTEGANGSSOKNAD || b.type === BehandlingType.REVURDERING),
  );
  return behandling ? behandling.uuid : undefined;
};

const sjekkOgSettBehandling = (setBehandling: (behandling: Behandling) => void) => (behandling?: Behandling) => {
  if (behandling) {
    setBehandling(behandling);
  }
};

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling) => void;
  setValgtModal: (index: number | undefined) => void;
}

const NyBehandlingMenyModal: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  setBehandling,
  setValgtModal,
}) => {
  const fagsak = fagsakData.getFagsak();
  const alleBehandlinger = fagsakData.getAlleBehandlinger();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  /* const navigate = useNavigate();
  const location = useLocation();

  const ref = useRef<number>();
  useEffect(() => {
    // Når antallet har endret seg er det laget en ny behandling og denne må da velges
    if (ref.current && ref.current > 0) {
      const pathname = pathToBehandling(fagsak.saksnummer, findNewBehandlingUuid(alleBehandlinger));
      navigate(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
    }

    ref.current = alleBehandlinger.length;
  }, [alleBehandlinger.length]); */

  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt } = initFetchData;

  const { startRequest: sjekkTilbakeKanOpprettes, data: kanBehandlingOpprettes = false } =
    restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES);
  const { startRequest: sjekkTilbakeRevurdKanOpprettes, data: kanRevurderingOpprettes = false } =
    restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);

  const alleFpSakKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const { startRequest: lagNyBehandlingFpSak } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.NEW_BEHANDLING_FPSAK,
  );
  const { startRequest: lagNyBehandlingFpTilbake } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.NEW_BEHANDLING_FPTILBAKE,
  );

  const settBehandling = sjekkOgSettBehandling(setBehandling);

  const lagNyBehandling = useCallback(
    (
      isTilbakekreving: boolean,
      params: {
        saksnummer: string;
        behandlingUuid?: string;
      } & NyBehandlingFormValues,
    ): void => {
      const lagNy = isTilbakekreving ? lagNyBehandlingFpTilbake : lagNyBehandlingFpSak;
      lagNy(params).then(settBehandling);
    },
    [],
  );

  const uuidForSistLukkede = useMemo(
    () => getUuidForSisteLukkedeForsteEllerRevurd(alleBehandlinger),
    [alleBehandlinger],
  );
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

  const lukkModal = useCallback(() => setValgtModal(undefined), []);

  return (
    <MenyNyBehandlingIndex
      saksnummer={fagsak.saksnummer}
      behandlingUuid={behandling?.uuid}
      behandlingVersjon={behandling?.versjon}
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
  );
};

export default NyBehandlingMenyModal;
