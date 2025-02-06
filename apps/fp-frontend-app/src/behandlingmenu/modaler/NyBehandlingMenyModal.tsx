import { useLocation, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { BehandlingStatus, BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { MenyNyBehandlingIndex } from '@navikt/fp-sak-meny-ny-behandling';
import type { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { ApplicationContextPath } from '../../app/ApplicationContextPath';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';
import { useGetEnabledApplikasjonContext } from '../../app/useGetEnabledApplikasjonContext';
import { initFetchOptions, useFagsakApi } from '../../data/fagsakApi';
import { useLagNyBehandling } from '../../data/polling/useLagNyBehandling';
import { FagsakData } from '../../fagsak/FagsakData';
import { MenyKodeverk } from '../MenyKodeverk';

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

interface Props {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  lukkModal: () => void;
}

export const NyBehandlingMenyModal = ({ fagsakData, behandlingUuid, lukkModal }: Props) => {
  const fagsak = fagsakData.getFagsak();
  const alleBehandlinger = fagsakData.getAlleBehandlinger();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const uuidForSistLukkede = getUuidForSisteLukkedeForsteEllerRevurd(alleBehandlinger);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);

  const api = useFagsakApi();

  const { data: alleFpSakKodeverk } = useQuery(api.kodeverkOptions());
  const { data: alleFpTilbakeKodeverk } = useQuery(api.fptilbake.kodeverkOptions());

  const initFetchQuery = useQuery(initFetchOptions());
  const { innloggetBruker: navAnsatt } = notEmpty(initFetchQuery.data);

  const isEnabled = erTilbakekrevingAktivert && !navAnsatt.kanVeilede && uuidForSistLukkede !== undefined;
  const { data: kanBehandlingOpprettes = false } = useQuery(
    api.fptilbake.kanTilbakekrevingOpprettesOptions(isEnabled, fagsak.saksnummer, uuidForSistLukkede),
  );

  const erTilbakekreving =
    behandling?.type === BehandlingType.TILBAKEKREVING ||
    behandling?.type === BehandlingType.TILBAKEKREVING_REVURDERING;
  const isRevurderingOpprettedAktivert =
    erTilbakekrevingAktivert && !navAnsatt.kanVeilede && erTilbakekreving && !!behandlingUuid;
  const { data: kanRevurderingOpprettes = false } = useQuery(
    api.fptilbake.kanTilbakekrevingRevurderingOpprettesOptions(isRevurderingOpprettedAktivert, behandlingUuid),
  );

  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(notEmpty(alleFpSakKodeverk))
    .medFpTilbakeKodeverk(notEmpty(alleFpTilbakeKodeverk));

  const navigate = useNavigate();
  const location = useLocation();

  const gåTilNyBehandling = (nyBehandling: Behandling) => {
    const pathname = pathToBehandling(fagsak.saksnummer, nyBehandling?.uuid);
    navigate(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
  };

  const { lagNyBehandling } = useLagNyBehandling(gåTilNyBehandling);

  return (
    <MenyNyBehandlingIndex
      saksnummer={fagsak.saksnummer}
      behandlingUuid={behandling?.uuid}
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
