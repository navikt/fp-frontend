import React, { FunctionComponent, useCallback, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  behandlingType as BehandlingType,
  behandlingStatus as BehandlingStatus,
  KodeverkType,
} from '@navikt/fp-kodeverk';

import { MenyNyBehandlingIndex, FormValues as NyBehandlingFormValues } from '@navikt/fp-sak-meny-ny-behandling';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import useGetEnabledApplikasjonContext from '../../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../../app/ApplicationContextPath';
import MenyKodeverk from '../MenyKodeverk';
import FagsakData from '../../fagsak/FagsakData';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  BehandlingType.FORSTEGANGSSOKNAD,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.TILBAKEKREVING_REVURDERING,
];

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger: BehandlingAppKontekst[] = []): string | undefined => {
  const behandling = behandlinger.find(
    b =>
      b.gjeldendeVedtak &&
      b.status === BehandlingStatus.AVSLUTTET &&
      (b.type === BehandlingType.FORSTEGANGSSOKNAD || b.type === BehandlingType.REVURDERING),
  );
  return behandling ? behandling.uuid : undefined;
};

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  lukkModal: () => void;
}

const NyBehandlingMenyModal: FunctionComponent<OwnProps> = ({ fagsakData, behandlingUuid, lukkModal }) => {
  const fagsak = fagsakData.getFagsak();
  const alleBehandlinger = fagsakData.getAlleBehandlinger();
  const behandling = fagsakData.getBehandling(behandlingUuid);

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

  const navigate = useNavigate();
  const location = useLocation();

  const lagNyBehandling = useCallback(
    (
      isTilbakekreving: boolean,
      params: {
        saksnummer: string;
        behandlingUuid?: string;
      } & NyBehandlingFormValues,
    ): void => {
      const lagNy = isTilbakekreving ? lagNyBehandlingFpTilbake : lagNyBehandlingFpSak;
      lagNy(params).then(b => {
        const pathname = pathToBehandling(fagsak.saksnummer, b?.uuid);
        navigate(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
      });
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
