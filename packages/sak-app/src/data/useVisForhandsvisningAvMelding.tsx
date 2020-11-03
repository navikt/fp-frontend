import { Kodeverk } from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import { FpsakApiKeys, restApiHooks } from './fpsakApi';

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const useVisForhandsvisningAvMelding = (behandlingType?: Kodeverk) => {
  const { startRequest: forhandsvisTilbakekrevingHenleggelse } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE);
  const { startRequest: forhandsvisTilbakekreving } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING);
  const { startRequest: forhandsvisMelding } = restApiHooks.useRestApiRunner(FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING);

  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingType?.kode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingType?.kode;

  return (erHenleggelse: boolean, data: any) => {
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
