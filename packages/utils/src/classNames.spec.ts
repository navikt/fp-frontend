import { describe, expect, it } from 'vitest';

import { classNames } from './classNames';

describe('classNames', () => {
  it('skal slå saman alle sanne klassenamn med mellomrom', () => {
    expect(classNames('a', 'b', 'c')).toBe('a b c');
  });

  it('skal hoppe over falske verdiar', () => {
    expect(classNames('a', false, undefined, null, 'b')).toBe('a b');
  });

  it('skal returnere tom streng når ingen klassar er sanne', () => {
    expect(classNames(false, undefined, null)).toBe('');
  });

  it('skal støtte betinga klassar via && ', () => {
    const aktiv = true;
    const error = false;
    expect(classNames('tab', aktiv && 'aktiv', error && 'error')).toBe('tab aktiv');
  });
});
