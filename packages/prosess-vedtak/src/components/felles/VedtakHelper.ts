import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  AlleKodeverk, SimuleringResultat, TilbakekrevingValg, Vilkar,
} from '@fpsak-frontend/types';

const tilbakekrevingMedInntrekk = (
  tilbakekrevingKode: string,
  simuleringResultat: SimuleringResultat,
): boolean => tilbakekrevingKode
  === tilbakekrevingVidereBehandling.TILBAKEKR_INFOTRYGD
  && (!!simuleringResultat.simuleringResultat.sumInntrekk || !!simuleringResultat.simuleringResultatUtenInntrekk);

export const getTilbakekrevingText = (
  alleKodeverk: AlleKodeverk,
  simuleringResultat: SimuleringResultat,
  tilbakekrevingvalg?: TilbakekrevingValg,
): string => {
  if (tilbakekrevingvalg !== null && tilbakekrevingvalg !== undefined) {
    if (tilbakekrevingMedInntrekk(tilbakekrevingvalg.videreBehandling, simuleringResultat)) {
      return 'VedtakForm.TilbakekrInfotrygdOgInntrekk';
    }
    const getKodeverkNavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
    return getKodeverkNavn(tilbakekrevingvalg.videreBehandling);
  }
  return '';
};

export const hasIkkeOppfyltSoknadsfristvilkar = (
  vilkar: Vilkar[],
): boolean => vilkar.some((v) => v.vilkarType === vilkarType.SOKNADFRISTVILKARET
  && v.vilkarstatus === vilkarUtfallType.IKKE_OPPFYLT);
