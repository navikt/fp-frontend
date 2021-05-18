import { Kodeverk } from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import { FpsakApiKeys, restApiHooks } from './fpsakApi';

type ForhandsvisDataFormidling = {
  ytelseType: Kodeverk;
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

const forhandsvis = (data: ForhandsvisData) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const useVisForhandsvisningAvMelding = (behandlingType?: Kodeverk): ForhandsvisFunksjon => {
  const { startRequest: forhandsvisTilbakekrevingHenleggelse } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE);
  const { startRequest: forhandsvisTilbakekreving } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING);
  const { startRequest: forhandsvisMelding } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING);

  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingType?.kode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType?.kode;

  return (erHenleggelse: boolean, data: ForhandsvisData): void => {
    if (erTilbakekreving && erHenleggelse) {
      forhandsvisTilbakekrevingHenleggelse(data).then((response) => forhandsvis(response));
    } else if (erTilbakekreving) {
      forhandsvisTilbakekreving(data).then((response) => forhandsvis(response));
    } else {
      forhandsvisMelding(data).then((response) => forhandsvis(response));
    }
  };
};

export default useVisForhandsvisningAvMelding;
