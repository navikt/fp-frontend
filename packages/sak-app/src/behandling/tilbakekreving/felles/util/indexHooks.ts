import {
  useEffect, useState, useCallback,
} from 'react';
import { usePrevious } from '@navikt/ft-ui-komponenter';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { Behandling } from '@navikt/fp-types';

import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import { requestTilbakekrevingApi, restApiTilbakekrevingHooks, TilbakekrevingBehandlingApiKeys } from '../../data/tilbakekrevingBehandlingApi';
import { BehandlingEventHandler } from '../../../felles/typer/standardBehandlingProps';

export type NyBehandlendeEnhetParams = {
  behandlingUuid: string;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
  behandlingVersjon: string;
}

const useSetBehandlingVedEndring = (
  setBehandling: (behandling: Behandling) => void,
  behandling?: Behandling,
): void => {
  useEffect(() => {
    if (behandling) {
      setBehandling(behandling);
    }
  }, [behandling]);
};

const useOppdaterFagsak = (
  oppdaterBehandlingVersjon?: (versjon: number) => void,
  behandling?: Behandling,
): void => {
  const previousBehandling = usePrevious(behandling);
  useEffect(() => {
    if (oppdaterBehandlingVersjon
        && behandling && previousBehandling && behandling.versjon !== previousBehandling?.versjon) {
      oppdaterBehandlingVersjon(behandling.versjon);
    }
  }, [behandling?.versjon]);
};

export const useBehandling = (
  behandlingUuid: string,
  oppdaterBehandlingVersjon?: (versjon: number) => void,
) => {
  const [behandling, setNyBehandling] = useState<Behandling>();
  const [skalOppdatereFagsakOgBehandling, toggleOppdateringAvFagsakOgBehandling] = useState(true);

  const setBehandling = useCallback((nyBehandling) => {
    if (skalOppdatereFagsakOgBehandling) {
      requestTilbakekrevingApi.resetCache();
      requestTilbakekrevingApi.setLinks(nyBehandling.links);
      setNyBehandling(nyBehandling);
    }
  }, [skalOppdatereFagsakOgBehandling]);

  const {
    startRequest: hentBehandling, data: behandlingRes, state: behandlingState,
  } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.BEHANDLING_TILBAKE);
  useSetBehandlingVedEndring(setBehandling, behandlingRes);

  const hentBehandlingInklId = useCallback((keepData: boolean) => hentBehandling({ behandlingUuid }, keepData), []);

  useEffect(() => {
    hentBehandlingInklId(false);
  }, []);

  useOppdaterFagsak(oppdaterBehandlingVersjon, behandling);

  return {
    behandling,
    hentingHarFeilet: behandlingState === RestApiState.ERROR,
    setBehandling,
    hentBehandling: hentBehandlingInklId,
    toggleOppdateringAvFagsakOgBehandling,
  };
};

export const useLagreAksjonspunkt = (
  setBehandling: (behandling: Behandling) => void,
) => {
  const { startRequest: lagreAksjonspunkter, data: apBehandlingRes } = restApiTilbakekrevingHooks
    .useRestApiRunner(BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT);
  useSetBehandlingVedEndring(setBehandling, apBehandlingRes);
  return lagreAksjonspunkter;
};

const leggTilBehandlingIdentifikator = (behandling: Behandling, params: any) => ({
  ...params,
  behandlingUuid: behandling.uuid,
  behandlingVersjon: behandling.versjon,
});

export const useInitBehandlingHandlinger = (
  behandlingEventHandler: BehandlingEventHandler,
  hentBehandling: (keepData: boolean) => Promise<Behandling | undefined>,
  setBehandling: (behandling: Behandling) => void,
  behandling?: Behandling,
): void => {
  const { useRestApiRunner } = restApiTilbakekrevingHooks;

  const { startRequest: nyBehandlendeEnhet } = useRestApiRunner<void, NyBehandlendeEnhetParams>(BehandlingFellesApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET);
  const { startRequest: settBehandlingPaVent } = useRestApiRunner<void,
    { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>(BehandlingFellesApiKeys.BEHANDLING_ON_HOLD);
  const { startRequest: taBehandlingAvVent } = useRestApiRunner<
    Behandling, { behandlingUuid: string, behandlingVersjon: number }>(BehandlingFellesApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = useRestApiRunner<void,
    { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>(BehandlingFellesApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: opprettVerge } = useRestApiRunner<Behandling, any>(BehandlingFellesApiKeys.VERGE_OPPRETT);
  const { startRequest: fjernVerge } = useRestApiRunner<Behandling, any>(BehandlingFellesApiKeys.VERGE_FJERN);
  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = useRestApiRunner<Behandling, any>(BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT);

  useEffect(() => {
    if (behandling) {
      behandlingEventHandler.setHandler({
        endreBehandlendeEnhet: (params) => nyBehandlendeEnhet(leggTilBehandlingIdentifikator(behandling, params))
          .then(() => hentBehandling(true)),
        settBehandlingPaVent: (params) => settBehandlingPaVent(leggTilBehandlingIdentifikator(behandling, params))
          .then(() => hentBehandling(true)),
        taBehandlingAvVent: () => taBehandlingAvVent(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResTaAvVent?: Behandling) => behandlingResTaAvVent && setBehandling(behandlingResTaAvVent)),
        henleggBehandling: (params) => henleggBehandling(leggTilBehandlingIdentifikator(behandling, params)),
        opprettVerge: () => opprettVerge(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResOpprettVerge?: Behandling) => behandlingResOpprettVerge && setBehandling(behandlingResOpprettVerge)),
        fjernVerge: () => fjernVerge(leggTilBehandlingIdentifikator(behandling, {}))
          .then((behandlingResFjernVerge?: Behandling) => behandlingResFjernVerge && setBehandling(behandlingResFjernVerge)),
        lagreRisikoklassifiseringAksjonspunkt: (params) => lagreRisikoklassifiseringAksjonspunkt(leggTilBehandlingIdentifikator(behandling, params))
          .then((behandlingEtterRisikoAp?: Behandling) => behandlingEtterRisikoAp && setBehandling(behandlingEtterRisikoAp)),
      });
    }
    return () => {
      behandlingEventHandler.clear();
    };
  }, [behandling?.versjon]);
};
