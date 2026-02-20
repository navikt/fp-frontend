import type { SimuleringResultat, TilbakekrevingValg, TilbakekrevingVidereBehandling, Vilkår } from '@navikt/fp-types';

const tilbakekrevingMedInntrekk = (
  tilbakekrevingKode: TilbakekrevingVidereBehandling,
  simuleringResultat: SimuleringResultat,
): boolean =>
  tilbakekrevingKode === 'TILBAKEKR_OPPRETT' &&
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

export const hasIkkeOppfyltSoknadsfristvilkar = (vilkar: Vilkår[]): boolean =>
  vilkar.some(v => v.vilkarType === 'FP_VK_3' && v.vilkarStatus === 'IKKE_OPPFYLT');
