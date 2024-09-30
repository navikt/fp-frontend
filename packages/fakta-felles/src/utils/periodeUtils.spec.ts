import { sorterPerioder } from './periodeUtils';

describe('sorterPerioder', () => {
  it('skal returnere sortert liste av perioder med nyeste perioder først', () => {
    const perioder = [
      { fom: '2021-03-01', tom: '2021-06-01' },
      { fom: '2022-02-02', tom: '2024-09-01' },
      { fom: '2022-06-02', tom: '2025-02-01' },
      { fom: '2022-07-01', tom: '2025-02-01' },
    ];
    expect(perioder.sort(sorterPerioder)).toStrictEqual([
      { fom: '2022-07-01', tom: '2025-02-01' },
      { fom: '2022-06-02', tom: '2025-02-01' },
      { fom: '2022-02-02', tom: '2024-09-01' },
      { fom: '2021-03-01', tom: '2021-06-01' },
    ]);
  });
});
