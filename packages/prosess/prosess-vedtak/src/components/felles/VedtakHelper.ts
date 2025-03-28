import {
  getKodeverknavnFn,
  KodeverkType,
  TilbakekrevingVidereBehandling,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import type { AlleKodeverk, SimuleringResultat, TilbakekrevingValg, Vilkar } from '@navikt/fp-types';

const tilbakekrevingMedInntrekk = (tilbakekrevingKode: string, simuleringResultat: SimuleringResultat): boolean =>
  tilbakekrevingKode === TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT &&
  (!!simuleringResultat.simuleringResultat.sumInntrekk || !!simuleringResultat.simuleringResultatUtenInntrekk);

export const getTilbakekrevingText = (
  alleKodeverk: AlleKodeverk,
  simuleringResultat?: SimuleringResultat,
  tilbakekrevingvalg?: TilbakekrevingValg,
): string => {
  if (tilbakekrevingvalg !== null && tilbakekrevingvalg !== undefined && simuleringResultat) {
    if (tilbakekrevingMedInntrekk(tilbakekrevingvalg.videreBehandling, simuleringResultat)) {
      return 'VedtakForm.OpprettTilbakekrOgInntrekk';
    }
    const getKodeverkNavn = getKodeverknavnFn(alleKodeverk);
    return getKodeverkNavn(tilbakekrevingvalg.videreBehandling, KodeverkType.TILBAKEKR_VIDERE_BEH);
  }
  return '';
};

export const hasIkkeOppfyltSoknadsfristvilkar = (vilkar: Vilkar[]): boolean =>
  vilkar.some(v => v.vilkarType === VilkarType.SOKNADFRISTVILKARET && v.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT);
