import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  KodeverkMedNavn, SimuleringResultat, TilbakekrevingValg, Vilkar,
} from '@fpsak-frontend/types';

const tilbakekrevingMedInntrekk = (tilbakekrevingKode: string, simuleringResultat: SimuleringResultat) => tilbakekrevingKode
  === tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD
  && (simuleringResultat.simuleringResultat.sumInntrekk || simuleringResultat.simuleringResultatUtenInntrekk);

export const getTilbakekrevingText = (
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  simuleringResultat: SimuleringResultat,
  tilbakekrevingvalg?: TilbakekrevingValg,
): string => {
  if (tilbakekrevingvalg !== null && tilbakekrevingvalg !== undefined) {
    if (tilbakekrevingMedInntrekk(tilbakekrevingvalg.videreBehandling.kode, simuleringResultat)) {
      return 'VedtakForm.TilbakekrInfotrygdOgInntrekk';
    }
    const getKodeverkNavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
    return getKodeverkNavn(tilbakekrevingvalg.videreBehandling);
  }
  return '';
};

export const hasIkkeOppfyltSoknadsfristvilkar = (vilkar: Vilkar[]) => vilkar.some((v) => v.vilkarType.kode === vilkarType.SOKNADFRISTVILKARET
  && v.vilkarStatus.kode === vilkarUtfallType.IKKE_OPPFYLT);
