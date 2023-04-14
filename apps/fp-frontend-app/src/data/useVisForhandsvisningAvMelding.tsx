import { BehandlingType } from '@navikt/ft-kodeverk';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { FpsakApiKeys, restApiHooks } from './fpsakApi';

type ForhandsvisData = {
  behandlingUuid: string;
  fritekst?: string;
  gjelderVedtak?: boolean;
};

type ForhandsvisDataFormidling = ForhandsvisData & {
  fagsakYtelseType: string;
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

const useVisForhandsvisningAvMelding = (behandlingType?: string): ForhandsvisFunksjon => {
  const { startRequest: forhandsvisTilbakekrevingHenleggelse } = restApiHooks.useRestApiRunner(
    FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE,
  );
  const { startRequest: forhandsvisTilbakekreving } = restApiHooks.useRestApiRunner(
    FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING,
  );
  const { startRequest: forhandsvisMelding } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING);

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

export default useVisForhandsvisningAvMelding;
