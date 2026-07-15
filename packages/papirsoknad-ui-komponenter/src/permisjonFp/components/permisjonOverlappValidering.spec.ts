import { harOverlappMellomPeriodetypar, hentUtfylteTidsrom } from './permisjonOverlappValidering';

describe('permisjonOverlappValidering', () => {
  describe('hentUtfylteTidsrom', () => {
    it('skal returnere tom liste når perioder er undefined', () => {
      expect(hentUtfylteTidsrom(undefined)).toEqual([]);
    });

    it('skal berre ta med perioder der både f.o.m. og t.o.m. er utfylt', () => {
      const perioder = [
        { periodeFom: '2022-05-20', periodeTom: '2022-06-20' },
        { periodeFom: '2022-07-01', periodeTom: undefined },
        { periodeFom: undefined, periodeTom: '2022-08-01' },
        { periodeFom: '', periodeTom: '' },
      ];

      expect(hentUtfylteTidsrom(perioder)).toEqual([['2022-05-20', '2022-06-20']]);
    });
  });

  describe('harOverlappMellomPeriodetypar', () => {
    it('skal returnere false når det er berre éi gruppe', () => {
      const grupper = [
        [
          ['2022-05-20', '2022-06-20'],
          ['2022-05-25', '2022-06-25'],
        ],
      ];

      expect(harOverlappMellomPeriodetypar(grupper)).toBe(false);
    });

    it('skal returnere true når perioder i ulike grupper overlappar i tid', () => {
      const grupper = [
        [['2022-05-20', '2022-06-20']],
        [['2022-06-10', '2022-07-10']],
      ];

      expect(harOverlappMellomPeriodetypar(grupper)).toBe(true);
    });

    it('skal returnere false når perioder i ulike grupper ikkje overlappar i tid', () => {
      const grupper = [
        [['2022-05-20', '2022-06-20']],
        [['2022-06-21', '2022-07-21']],
      ];

      expect(harOverlappMellomPeriodetypar(grupper)).toBe(false);
    });

    it('skal ikkje rapportere overlapp som berre finst innanfor same gruppe', () => {
      const grupper = [
        [
          ['2022-05-20', '2022-06-20'],
          ['2022-05-25', '2022-06-25'],
        ],
        [['2022-07-01', '2022-07-10']],
      ];

      expect(harOverlappMellomPeriodetypar(grupper)).toBe(false);
    });
  });
});
