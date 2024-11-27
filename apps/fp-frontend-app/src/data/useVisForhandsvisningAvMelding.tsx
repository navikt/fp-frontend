import { forhandsvisDokument } from '@navikt/ft-utils';

import { BehandlingType } from '@navikt/fp-kodeverk';

import { FagsakApiKeys, restFagsakApiHooks } from './fagsakContextApi';

type ForhandsvisData = {
  behandlingUuid?: string;
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

export const useVisForhandsvisningAvMelding = (behandlingType?: string): ForhandsvisFunksjon => {
  const { startRequest: forhandsvisTilbakekrevingHenleggelse } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE,
  );
  const { startRequest: forhandsvisTilbakekreving } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING,
  );
  const { startRequest: forhandsvisMelding } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.PREVIEW_MESSAGE_MENU);

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType;

  return (erHenleggelse: boolean, data: ForhandsvisDataFormidling | ForhandsvisDataTilbakekreving): void => {
    if (erTilbakekreving && erHenleggelse) {
      forhandsvisTilbakekrevingHenleggelse(data).then(response => forhandsvisDokument(response));
    } else if (erTilbakekreving) {
      forhandsvisTilbakekreving(data).then(response => forhandsvisDokument(response));
    } else {
      forhandsvisMelding(data as ForhandsvisDataFormidling).then(response => forhandsvisDokument(response));
    }
  };
};
