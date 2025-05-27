import { useNavigate } from 'react-router-dom';

import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { type ForhåndsvisHenleggParams, MenyHenleggIndex } from '@navikt/fp-sak-meny-henlegg';
import type { Behandling, BehandlingAppKontekst } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../data/behandlingApi';
import { forhåndsvisTilbakekrevingHenleggelse, useFagsakApi, useFagsakBehandlingApi } from '../../data/fagsakApi';

interface Props {
  behandling: Behandling;
  behandlingAppKontekst: BehandlingAppKontekst;
  fagsakYtelseType: FagsakYtelseType;
  lukkModal: () => void;
}

export const HenleggMenyModal = ({ behandling, behandlingAppKontekst, fagsakYtelseType, lukkModal }: Props) => {
  const fagsakApi = useFagsakApi();
  const behandlingApi = useBehandlingApi(behandling);

  const { data: alleFpSakKodeverk } = useQuery(fagsakApi.kodeverkOptions());
  const { data: alleFpTilbakeKodeverk } = useQuery(fagsakApi.fptilbake.kodeverkOptions());

  const { mutateAsync: henleggBehandling } = useMutation({
    mutationFn: (values: { årsakKode: string; begrunnelse: string; fritekst?: string }) =>
      behandlingApi.henleggBehandling({
        ...values,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
      }),
  });

  const behandlingresultatTyper =
    behandling.type === BehandlingType.TILBAKEKREVING || behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING
      ? notEmpty(alleFpTilbakeKodeverk)['BehandlingResultatType']
      : notEmpty(alleFpSakKodeverk)['BehandlingResultatType'];

  const navigate = useNavigate();
  const gåTilSokeside = () => navigate('/');

  const forhåndsvisHenleggBehandling = useVisForhandsvisningAvHenleggelse(behandlingAppKontekst);

  return (
    <MenyHenleggIndex
      valgtBehandling={behandling}
      forhandsvisHenleggBehandling={forhåndsvisHenleggBehandling}
      henleggBehandling={henleggBehandling}
      ytelseType={fagsakYtelseType}
      behandlingResultatTyper={behandlingresultatTyper}
      lukkModal={lukkModal}
      gaaTilSokeside={gåTilSokeside}
    />
  );
};

const useVisForhandsvisningAvHenleggelse = (behandling: BehandlingAppKontekst) => {
  const api = useFagsakBehandlingApi(behandling);

  const { mutate: forhåndsvisFpSakHenleggelse } = useMutation({
    mutationFn: (values: ForhåndsvisHenleggParams) => api.forhåndsvisMelding(values),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const { mutate: forhandsvisFpTilbakeHenleggelse } = useMutation({
    mutationFn: (values: ForhåndsvisHenleggParams) =>
      forhåndsvisTilbakekrevingHenleggelse(values.behandlingUuid, values.fritekst ?? ''),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandling.type || BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type;

  return (data: ForhåndsvisHenleggParams): void => {
    if (erTilbakekreving) {
      forhandsvisFpTilbakeHenleggelse(data);
    } else {
      forhåndsvisFpSakHenleggelse(data);
    }
  };
};
