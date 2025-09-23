import { TilbakekrevingVidereBehandling, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { SimuleringResultat, TilbakekrevingValg, Vilkar } from '@navikt/fp-types';

const tilbakekrevingMedInntrekk = (tilbakekrevingKode: string, simuleringResultat: SimuleringResultat): boolean =>
  tilbakekrevingKode === TilbakekrevingVidereBehandling.TILBAKEKR_OPPRETT &&
  (!!simuleringResultat.simuleringResultat.sumInntrekk || !!simuleringResultat.simuleringResultatUtenInntrekk);

export const getTilbakekrevingText = (
  simuleringResultat?: SimuleringResultat,
  tilbakekrevingvalg?: TilbakekrevingValg,
): string | undefined => {
  return tilbakekrevingvalg !== undefined &&
    simuleringResultat &&
    tilbakekrevingMedInntrekk(tilbakekrevingvalg.videreBehandling, simuleringResultat)
    ? 'VedtakForm.OpprettTilbakekrOgInntrekk'
    : undefined;
};

export const hasIkkeOppfyltSoknadsfristvilkar = (vilkar: Vilkar[]): boolean =>
  vilkar.some(v => v.vilkarType === VilkarType.SOKNADFRISTVILKARET && v.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT);
