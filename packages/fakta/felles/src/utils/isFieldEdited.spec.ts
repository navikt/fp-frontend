import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

import { isFieldEdited } from './isFieldEdited';

const soknad = {
  soknadType: 'ST-001',
  mottattDato: '2018-07-05',
  begrunnelseForSenInnsending: null,
  antallBarn: 1,
  oppgittTilknytning: {
    oppholdNorgeNa: true,
    oppholdSistePeriode: false,
    oppholdNestePeriode: false,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittFordeling: {
    startDatoForPermisjon: '2018-07-06',
    dekningsgrader: {
      søker: {
        søknadsdato: '2018-05-17',
        dekningsgrad: 100,
      },
      annenPart: {
        søknadsdato: '2018-05-28',
        dekningsgrad: 100,
      },
    },
  },
  utstedtdato: '2018-06-25',
  termindato: '2018-07-27',
  farSokerType: undefined,
  søknadsfrist: '2018-07-27',
  fodselsdatoer: {
    1: '2018-05-30',
  } as { [key: number]: string },
} as Soknad;

describe('isFieldEdited', () => {
  describe('vilkarType', () => {
    it('skal vise endret vilkarType', () => {
      const familiehendelse = {
        vilkarType: 'Test',
      };

      const isVilkarTypeEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).vilkarType;

      expect(isVilkarTypeEdited).toBe(true);
    });
  });

  describe('adopsjonFodelsedatoer', () => {
    it('skal vise endret adopsjonFodelsedatoer', () => {
      const familiehendelse = {
        adopsjonFodelsedatoer: {
          1: '2018-01-01',
        } as Record<number, string>,
      };

      const endretDato = {
        adopsjonFodelsedatoer: {
          1: '2018-01-10',
        },
      };

      const adopsjonsSoknad = { ...soknad, ...endretDato };

      const isAdopsjonFodelsedatoerEdited = isFieldEdited(
        adopsjonsSoknad,
        familiehendelse as FamilieHendelse,
      ).adopsjonFodelsedatoer;

      expect(isAdopsjonFodelsedatoerEdited ? isAdopsjonFodelsedatoerEdited[1] : undefined).toBe(true);
    });

    it('skal ikke vise uendret adopsjonFodelsedatoer', () => {
      const familiehendelse = {
        adopsjonFodelsedatoer: {
          1: '2018-01-01',
        } as Record<number, string>,
      };

      const adopsjonsSoknad = { ...soknad, ...familiehendelse };

      const isAdopsjonFodelsedatoerEdited = isFieldEdited(
        adopsjonsSoknad,
        familiehendelse as FamilieHendelse,
      ).adopsjonFodelsedatoer;

      expect(isAdopsjonFodelsedatoerEdited ? isAdopsjonFodelsedatoerEdited[1] : undefined).toBe(false);
    });
  });

  describe('omsorgsovertakelseDato', () => {
    it('skal vise endret omsorgsovertakelseDato', () => {
      const familiehendelse = {
        omsorgsovertakelseDato: '2018-01-01',
      };

      const omsorgsSoknad = { ...soknad, omsorgsovertakelseDato: '2018-01-10' };

      const isOmsorgsovertakelseDatoEdited = isFieldEdited(
        omsorgsSoknad,
        familiehendelse as FamilieHendelse,
      ).omsorgsovertakelseDato;

      expect(isOmsorgsovertakelseDatoEdited).toBe(true);
    });

    it('skal ikke vise uendret omsorgsovertakelseDato', () => {
      const familiehendelse = {
        omsorgsovertakelseDato: '2018-01-01',
      };

      const omsorgsSoknad = { ...soknad, omsorgsovertakelseDato: '2018-01-01' };

      const isOmsorgsovertakelseDatoEdited = isFieldEdited(
        omsorgsSoknad,
        familiehendelse as FamilieHendelse,
      ).omsorgsovertakelseDato;

      expect(isOmsorgsovertakelseDatoEdited).toBe(false);
    });
  });

  describe('barnetsAnkomstTilNorgeDato', () => {
    it('skal ikke vise uendret barnetsAnkomstTilNorgeDato', () => {
      const familiehendelse = {};

      const ankomstSoknad = { ...soknad, barnetsAnkomstTilNorgeDato: '2018-01-01' };

      const isBarnetsAnkomstTilNorgeDatoEdited = isFieldEdited(
        ankomstSoknad,
        familiehendelse as FamilieHendelse,
      ).barnetsAnkomstTilNorgeDato;

      expect(isBarnetsAnkomstTilNorgeDatoEdited).toBe(false);
    });
  });

  describe('antallBarnOmsorgOgForeldreansvar', () => {
    it('skal vise endret antallBarnOmsorgOgForeldreansvar', () => {
      const familiehendelse = {
        antallBarnTilBeregning: 2,
      };

      const isAntallBarnOmsorgOgForeldreansvarEdited = isFieldEdited(
        soknad,
        familiehendelse as FamilieHendelse,
      ).antallBarnOmsorgOgForeldreansvar;

      expect(isAntallBarnOmsorgOgForeldreansvarEdited).toBe(true);
    });

    it('skal ikke vise uendret antallBarnOmsorgOgForeldreansvar', () => {
      const familiehendelse = {
        antallBarnTilBeregning: 1,
      };

      const isAntallBarnOmsorgOgForeldreansvarEdited = isFieldEdited(
        soknad,
        familiehendelse as FamilieHendelse,
      ).antallBarnOmsorgOgForeldreansvar;

      expect(isAntallBarnOmsorgOgForeldreansvarEdited).toBe(false);
    });
  });

  describe('ektefellesBarn', () => {
    it('skal vise endret ektefellesBarn', () => {
      const familiehendelse = {
        ektefellesBarn: true,
      };

      const isEktefellesBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).ektefellesBarn;

      expect(isEktefellesBarnEdited).toBe(true);
    });

    it('skal ikke vise uendret ektefellesBarn', () => {
      const familiehendelse = {};

      const isEktefellesBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).ektefellesBarn;

      expect(isEktefellesBarnEdited).toBe(false);
    });
  });

  describe('mannAdoptererAlene', () => {
    it('skal vise endret mannAdoptererAlene', () => {
      const familiehendelse = {
        mannAdoptererAlene: true,
      };

      const isMannAdoptererAleneEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).mannAdoptererAlene;

      expect(isMannAdoptererAleneEdited).toBe(true);
    });

    it('skal ikke vise uendret mannAdoptererAlene', () => {
      const familiehendelse = {};

      const isMannAdoptererAleneEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).mannAdoptererAlene;

      expect(isMannAdoptererAleneEdited).toBe(false);
    });
  });
});
