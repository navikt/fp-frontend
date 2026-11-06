import type { FtBeregningsgrunnlag } from '@navikt/ft-prosess-beregningsgrunnlag';

export type Beregningsvisning = 'ny' | 'gammel';

export const utledBeregningsvisning = (
  beregningsgrunnlagListe: Pick<FtBeregningsgrunnlag, 'aktivitetStatus'>[],
): Beregningsvisning => {
  const aktivitetsstatuser = beregningsgrunnlagListe.flatMap(bg => bg.aktivitetStatus);
  const erAktivitetKunAT_FL = aktivitetsstatuser.every(status => status === 'AT' || status === 'FL');
  const erAktivitetKunSN = aktivitetsstatuser.every(status => status === 'SN');

  return erAktivitetKunAT_FL || erAktivitetKunSN ? 'ny' : 'gammel';
};
