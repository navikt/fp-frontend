import { expect } from 'vitest';

import type { FødselDtoGjeldendeBarn } from '@navikt/fp-types';

import { erBarnUlike, erGjeldendeBarnLike, formaterLiv } from './barnUtils';

describe('barnUtils', () => {
  describe('formaterLiv', () => {
    it('skal formatere fødselsdato', () => {
      expect(formaterLiv({ fødselsdato: '2025-05-28', dødsdato: null })).toBe('f. 28.05.2025');
    });
    it('skal formatere fødsel og dødsdato', () => {
      expect(formaterLiv({ fødselsdato: '2025-05-28', dødsdato: '2025-06-01' })).toBe('f. 28.05.2025 - d. 01.06.2025');
    });
  });

  describe('erGjeldendeBarnLike', () => {
    const barnMedDødsdatoIFreg: FødselDtoGjeldendeBarn = {
      kilde: 'FOLKEREGISTER',
      barn: {
        fødselsdato: '2025-05-28',
        dødsdato: '2025-05-28',
      },
      kanOverstyres: false,
    };

    it('skal validere tre identiske barn som like', () => {
      expect(erGjeldendeBarnLike([barnMedDødsdatoIFreg, barnMedDødsdatoIFreg, barnMedDødsdatoIFreg])).toBeTruthy();
    });

    it('skal validere barn med ulik kilde som ulike', () => {
      expect(erGjeldendeBarnLike([barnMedDødsdatoIFreg, { ...barnMedDødsdatoIFreg, kilde: 'SØKNAD' }])).toBeFalsy();
    });
    it('skal validere barn med ulik dødsdato som ulike', () => {
      expect(
        erGjeldendeBarnLike([
          barnMedDødsdatoIFreg,
          {
            ...barnMedDødsdatoIFreg,
            barn: {
              fødselsdato: '2025-05-28',
            },
          },
        ]),
      ).toBeFalsy();
    });

    it('skal validere 1 barn som like', () => {
      expect(erGjeldendeBarnLike([barnMedDødsdatoIFreg])).toBeTruthy();
    });

    it('skal validere 0 barn som ulike', () => {
      expect(erGjeldendeBarnLike([])).toBeFalsy();
    });
  });

  describe('erBarnUlike', () => {
    const barn = { fødselsdato: '2025-05-28', dødsdato: '2025-05-28' };
    it('skal validere like barn som false', () => {
      expect(erBarnUlike(barn)(barn)).toBeFalsy();
    });
    it('skal validere ulike barn som true', () => {
      expect(erBarnUlike(barn)({ fødselsdato: '2025-05-28', dødsdato: '2024-05-28' })).toBeTruthy();
    });
  });
});
