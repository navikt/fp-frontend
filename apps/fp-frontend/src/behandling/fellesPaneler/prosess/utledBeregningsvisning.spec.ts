import type { FtBeregningsgrunnlag } from '@navikt/ft-prosess-beregningsgrunnlag';

import { type Beregningsvisning, utledBeregningsvisning } from './utledBeregningsvisning';

describe('utledBeregningsvisning', () => {
  it.each<{
    aktivitetStatus: FtBeregningsgrunnlag['aktivitetStatus'];
    forventetVisning: Beregningsvisning;
  }>([
    { aktivitetStatus: ['SN'], forventetVisning: 'ny' },
    { aktivitetStatus: ['AT'], forventetVisning: 'ny' },
    { aktivitetStatus: ['FL'], forventetVisning: 'ny' },
    { aktivitetStatus: ['AT', 'FL'], forventetVisning: 'ny' },
    { aktivitetStatus: ['AT', 'SN'], forventetVisning: 'gammel' },
    { aktivitetStatus: ['FL', 'SN'], forventetVisning: 'gammel' },
    { aktivitetStatus: ['AT_FL_SN'], forventetVisning: 'gammel' },
    { aktivitetStatus: ['BA'], forventetVisning: 'gammel' },
  ])('skal velge $forventetVisning visning for $aktivitetStatus', ({ aktivitetStatus, forventetVisning }) => {
    expect(utledBeregningsvisning([{ aktivitetStatus }])).toBe(forventetVisning);
  });

  it('skal vurdere aktivitetsstatuser på tvers av beregningsgrunnlag', () => {
    expect(utledBeregningsvisning([{ aktivitetStatus: ['SN'] }, { aktivitetStatus: ['SN'] }])).toBe('ny');
    expect(utledBeregningsvisning([{ aktivitetStatus: ['AT'] }, { aktivitetStatus: ['SN'] }])).toBe('gammel');
  });

  it('skal beholde ny visning når listen med beregningsgrunnlag er tom', () => {
    expect(utledBeregningsvisning([])).toBe('ny');
  });
});
