import { snarvegerErTilgjengelig } from './paths';

describe('paths', () => {
  it('skal slå av snarvegar i prod', () => {
    expect(snarvegerErTilgjengelig('fpsak.intern.nav.no')).toBe(false);
  });

  it('skal slå på snarvegar i dev', () => {
    expect(snarvegerErTilgjengelig('fpsak.intern.dev.nav.no')).toBe(true);
  });

  it('skal slå på snarvegar lokalt', () => {
    expect(snarvegerErTilgjengelig('localhost')).toBe(true);
  });
});
