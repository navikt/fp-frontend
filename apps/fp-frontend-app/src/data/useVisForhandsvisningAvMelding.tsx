import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation } from '@tanstack/react-query';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { BehandlingAppKontekst } from '@navikt/fp-types';

import { forhåndsvisTilbakekreving, forhåndsvisTilbakekrevingHenleggelse, useFagsakBehandlingApi } from './fagsakApi';

//TODO (TOR) Må gå gjennom og rydda i typane her. Trur kanskje det er best å bryta opp denne hooken

type ForhandsvisData = {
  behandlingUuid: string;
  fritekst?: string;
  gjelderVedtak?: boolean;
};

type ForhandsvisDataFormidling = ForhandsvisData & {
  fagsakYtelseType?: string;
  arsakskode?: string | null;
  mottaker?: string;
  dokumentMal?: string;
};
type ForhandsvisDataTilbakekreving = ForhandsvisData & {
  brevmalkode: string;
};

export type ForhandsvisFunksjon = (
  erHenleggelse: boolean,
  data: ForhandsvisDataFormidling | ForhandsvisDataTilbakekreving,
) => void;

export const useVisForhandsvisningAvMelding = (behandling: BehandlingAppKontekst): ForhandsvisFunksjon => {
  const api = useFagsakBehandlingApi(behandling);

  const { mutate: forhandsvisTilbakekrevingHenleggelseMelding } = useMutation({
    mutationFn: (values: ForhandsvisData) =>
      forhåndsvisTilbakekrevingHenleggelse(values.behandlingUuid, values.fritekst ?? ''),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const { mutate: forhåndsvisTilbakekrevingMelding } = useMutation({
    mutationFn: (values: ForhandsvisDataTilbakekreving) =>
      forhåndsvisTilbakekreving(values.behandlingUuid, values.brevmalkode, values.fritekst ?? ''),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const { mutate: forhåndsvisMelding } = useMutation({
    mutationFn: (values: ForhandsvisDataFormidling) => api.forhåndsvisMelding(values),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandling.type || BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type;

  return (erHenleggelse: boolean, data: ForhandsvisDataFormidling | ForhandsvisDataTilbakekreving): void => {
    if (erTilbakekreving && erHenleggelse) {
      forhandsvisTilbakekrevingHenleggelseMelding(data);
    } else if (erTilbakekreving) {
      forhåndsvisTilbakekrevingMelding(data as ForhandsvisDataTilbakekreving);
    } else {
      forhåndsvisMelding(data);
    }
  };
};
