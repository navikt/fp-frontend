import { useLocation, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { BehandlingStatusEnum, type BehandlingType } from '@navikt/fp-kodeverk';
import { MenyNyBehandlingIndex } from '@navikt/fp-sak-meny-ny-behandling';
import type { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { ApplicationContextPath } from '../../app/ApplicationContextPath';
import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../../app/paths';
import { useGetEnabledApplikasjonContext } from '../../app/useGetEnabledApplikasjonContext';
import { initFetchOptions, useFagsakApi } from '../../data/fagsakApi';
import { useLagNyBehandling } from '../../data/polling/useLagNyBehandling';
import { FagsakData } from '../../fagsak/FagsakData';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  'BT-002',
  'BT-003',
  'BT-004',
  'BT-006',
  'BT-007',
  'BT-009',
] satisfies BehandlingType[];

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger: BehandlingAppKontekst[] = []): string | undefined => {
  const behandling = behandlinger.find(
    b =>
      b.gjeldendeVedtak && b.status === BehandlingStatusEnum.AVSLUTTET && (b.type === 'BT-002' || b.type === 'BT-004'),
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

  const erTilbakekreving = behandling?.type === 'BT-007' || behandling?.type === 'BT-009';
  const isRevurderingOpprettedAktivert =
    erTilbakekrevingAktivert && !navAnsatt.kanVeilede && erTilbakekreving && !!behandlingUuid;
  const { data: kanRevurderingOpprettes = false } = useQuery(
    api.fptilbake.kanTilbakekrevingRevurderingOpprettesOptions(isRevurderingOpprettedAktivert, behandlingUuid),
  );

  const tilbakekrevingRevurderingsårsaker = alleFpTilbakeKodeverk
    ? alleFpTilbakeKodeverk['BehandlingÅrsakType']
    : undefined;

  const revurderingsårsaker = alleFpSakKodeverk ? alleFpSakKodeverk['BehandlingÅrsakType'] : undefined;

  const behandlingstyper = notEmpty(alleFpSakKodeverk)['BehandlingType'].filter(bt =>
    BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES.some(type => type === bt.kode),
  );

  const navigate = useNavigate();
  const location = useLocation();

  const gåTilNyBehandling = (nyBehandling: Behandling) => {
    const pathname = pathToBehandling(fagsak.saksnummer, nyBehandling.uuid);
    void navigate(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
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
      behandlingstyper={behandlingstyper}
      tilbakekrevingRevurderingArsaker={tilbakekrevingRevurderingsårsaker}
      revurderingArsaker={revurderingsårsaker}
      ytelseType={fagsak.fagsakYtelseType}
      lagNyBehandling={lagNyBehandling}
      lukkModal={lukkModal}
    />
  );
};
