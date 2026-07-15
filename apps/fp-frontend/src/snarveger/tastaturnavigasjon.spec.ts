import { nesteFokusIndex } from './tastaturnavigasjon';

describe('tastaturnavigasjon', () => {
  it('skal gå til neste element ved ArrowDown', () => {
    expect(nesteFokusIndex('ArrowDown', 0, 3)).toBe(1);
  });

  it('skal gå til forrige element ved ArrowUp', () => {
    expect(nesteFokusIndex('ArrowUp', 2, 3)).toBe(1);
  });

  it('skal sykle til første element når ArrowDown går forbi siste', () => {
    expect(nesteFokusIndex('ArrowDown', 2, 3)).toBe(0);
  });

  it('skal sykle til siste element når ArrowUp går forbi første', () => {
    expect(nesteFokusIndex('ArrowUp', 0, 3)).toBe(2);
  });

  it('skal lande på første element ved ArrowDown når ingen er aktive (aktivIndex -1)', () => {
    expect(nesteFokusIndex('ArrowDown', -1, 3)).toBe(0);
  });

  it('skal hoppe til første element ved Home', () => {
    expect(nesteFokusIndex('Home', 2, 3)).toBe(0);
  });

  it('skal hoppe til siste element ved End', () => {
    expect(nesteFokusIndex('End', 0, 3)).toBe(2);
  });

  it('skal returnere undefined for taster som ikke er navigasjonstaster', () => {
    expect(nesteFokusIndex('Enter', 0, 3)).toBeUndefined();
  });

  it('skal returnere undefined når lista er tom', () => {
    expect(nesteFokusIndex('ArrowDown', -1, 0)).toBeUndefined();
  });
});
