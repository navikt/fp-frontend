import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { forhandsvisDokument } from '@fpsak-frontend/utils';

import { FpsakApiKeys, restApiHooks } from './fpsakApi';

type ForhandsvisDataFormidling = {
  ytelseType: string;
  arsakskode?: string | null;
  mottaker?: string;
  dokumentMal?: string
}
type ForhandsvisDataTilbakekreving = {
  brevmalkode: string;
}

type ForhandsvisData = {
  behandlingUuid: string;
  fritekst?: string;
  gjelderVedtak?: boolean;
} & (ForhandsvisDataFormidling | ForhandsvisDataTilbakekreving)

export type ForhandsvisFunksjon = (erHenleggelse: boolean, data: ForhandsvisData) => void;

const useVisForhandsvisningAvMelding = (behandlingType?: string): ForhandsvisFunksjon => {
  const { startRequest: forhandsvisTilbakekrevingHenleggelse } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE);
  const { startRequest: forhandsvisTilbakekreving } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING);
  const { startRequest: forhandsvisMelding } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING);

  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingType || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType;

  return (erHenleggelse: boolean, data: ForhandsvisData): void => {
    if (erTilbakekreving && erHenleggelse) {
      forhandsvisTilbakekrevingHenleggelse(data).then((response) => forhandsvisDokument(response));
    } else if (erTilbakekreving) {
      forhandsvisTilbakekreving(data).then((response) => forhandsvisDokument(response));
    } else {
      forhandsvisMelding(data).then((response) => forhandsvisDokument(response));
    }
  };
};

export default useVisForhandsvisningAvMelding;
