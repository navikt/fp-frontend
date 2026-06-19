import { finnNabopanelId } from './menyNavigasjon';

describe('menyNavigasjon', () => {
  const meny = [
    { id: 'a', erAktiv: false },
    { id: 'b', erAktiv: true },
    { id: 'c', erAktiv: false },
  ];

  it('skal finne neste panel', () => {
    expect(finnNabopanelId(meny, 1)).toBe('c');
  });

  it('skal finne forrige panel', () => {
    expect(finnNabopanelId(meny, -1)).toBe('a');
  });

  it('skal sykle til første panel når neste går forbi siste', () => {
    const data = [
      { id: 'a', erAktiv: false },
      { id: 'b', erAktiv: false },
      { id: 'c', erAktiv: true },
    ];
    expect(finnNabopanelId(data, 1)).toBe('a');
  });

  it('skal sykle til siste panel når forrige går forbi første', () => {
    const data = [
      { id: 'a', erAktiv: true },
      { id: 'b', erAktiv: false },
    ];
    expect(finnNabopanelId(data, -1)).toBe('b');
  });

  it('skal velge første panel som neste når ingen er aktive', () => {
    const data = [
      { id: 'a', erAktiv: false },
      { id: 'b', erAktiv: false },
    ];
    expect(finnNabopanelId(data, 1)).toBe('a');
  });

  it('skal velge siste panel som forrige når ingen er aktive', () => {
    const data = [
      { id: 'a', erAktiv: false },
      { id: 'b', erAktiv: false },
    ];
    expect(finnNabopanelId(data, -1)).toBe('b');
  });

  it('skal returnere undefined for tom meny', () => {
    expect(finnNabopanelId([], 1)).toBeUndefined();
  });
});
