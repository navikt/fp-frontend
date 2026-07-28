import type { UseFormGetValues } from 'react-hook-form';

import type { PermisjonFormValues } from '../types';
import {
  getOverlappingValidator,
  getValiderFørEllerEtter,
  harOverlappMellomPeriodetypar,
  hentUtfylteTidsrom,
} from './permisjonValidering';

describe('permisjonValidering', () => {
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
      const grupper = [[['2022-05-20', '2022-06-20']], [['2022-06-10', '2022-07-10']]];

      expect(harOverlappMellomPeriodetypar(grupper)).toBe(true);
    });

    it('skal returnere false når perioder i ulike grupper ikkje overlappar i tid', () => {
      const grupper = [[['2022-05-20', '2022-06-20']], [['2022-06-21', '2022-07-21']]];

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

  describe('getValiderFørEllerEtter', () => {
    const prefix = 'tidsromPermisjon.permisjonsPerioder.0' as const;

    const lagGetValues = (fom: string | undefined, tom: string | undefined) =>
      vi.fn(() => ({ periodeFom: fom, periodeTom: tom })) as unknown as UseFormGetValues<PermisjonFormValues>;

    it('skal returnere null når periodeFom manglar', () => {
      const validator = getValiderFørEllerEtter(lagGetValues(undefined, '2022-06-20'), prefix, 'periodeFom');
      expect(validator()).toBeNull();
    });

    it('skal returnere null når periodeTom manglar', () => {
      const validator = getValiderFørEllerEtter(lagGetValues('2022-05-20', undefined), prefix, 'periodeTom');
      expect(validator()).toBeNull();
    });

    it('skal returnere null når periodeFom er før eller lik periodeTom', () => {
      const validator = getValiderFørEllerEtter(lagGetValues('2022-05-20', '2022-06-20'), prefix, 'periodeFom');
      expect(validator()).toBeNull();
    });

    it('skal returnere feilmelding når periodeFom er etter periodeTom', () => {
      const validator = getValiderFørEllerEtter(lagGetValues('2022-07-01', '2022-06-20'), prefix, 'periodeFom');
      expect(validator()).toBeTruthy();
    });

    it('skal returnere null når periodeTom er etter eller lik periodeFom', () => {
      const validator = getValiderFørEllerEtter(lagGetValues('2022-05-20', '2022-06-20'), prefix, 'periodeTom');
      expect(validator()).toBeNull();
    });

    it('skal returnere feilmelding når periodeTom er før periodeFom', () => {
      const validator = getValiderFørEllerEtter(lagGetValues('2022-06-20', '2022-05-20'), prefix, 'periodeTom');
      expect(validator()).toBeTruthy();
    });
  });

  describe('getOverlappingValidator', () => {
    const prefix = 'tidsromPermisjon.permisjonsPerioder' as const;

    const lagGetValues = (perioder: { periodeFom: string; periodeTom: string }[]) =>
      vi.fn(() => perioder) as unknown as UseFormGetValues<PermisjonFormValues>;

    it('skal returnere undefined når det ikke er noen perioder', () => {
      const validator = getOverlappingValidator(lagGetValues([]), prefix);
      expect(validator()).toBeUndefined();
    });

    it('skal returnere null når perioder ikke overlapper', () => {
      const validator = getOverlappingValidator(
        lagGetValues([
          { periodeFom: '2022-05-01', periodeTom: '2022-05-31' },
          { periodeFom: '2022-06-01', periodeTom: '2022-06-30' },
        ]),
        prefix,
      );
      expect(validator()).toBeNull();
    });

    it('skal returnere feilmelding når perioder overlapper', () => {
      const validator = getOverlappingValidator(
        lagGetValues([
          { periodeFom: '2022-05-01', periodeTom: '2022-06-15' },
          { periodeFom: '2022-06-01', periodeTom: '2022-06-30' },
        ]),
        prefix,
      );
      expect(validator()).toBeTruthy();
    });

    it('skal filtrere bort perioder med tomme strings og returnere null for gjenværende gyldig periode', () => {
      const validator = getOverlappingValidator(
        lagGetValues([
          { periodeFom: '2022-05-01', periodeTom: '2022-05-31' },
          { periodeFom: '', periodeTom: '' },
        ]),
        prefix,
      );
      expect(validator()).toBeNull();
    });
  });
});
