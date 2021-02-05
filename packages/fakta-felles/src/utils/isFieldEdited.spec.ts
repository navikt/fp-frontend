import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import isFieldEdited from './isFieldEdited';

const soknad = {
  soknadType: {
    kode: 'ST-001',
    kodeverk: '',
  },
  mottattDato: '2018-07-05',
  tilleggsopplysninger: null,
  begrunnelseForSenInnsending: null,
  annenPartNavn: null,
  antallBarn: 1,
  dekningsgrad: 100,
  oppgittTilknytning: {
    oppholdNorgeNa: true,
    oppholdSistePeriode: false,
    oppholdNestePeriode: false,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittRettighet: {
    omsorgForBarnet: true,
    aleneomsorgForBarnet: false,
  },
  oppgittFordeling: {
    startDatoForPermisjon: '2018-07-06',
  },
  utstedtdato: '2018-06-25',
  termindato: '2018-07-27',
  farSokerType: null,
  fodselsdatoer: {
    1: '2018-05-30',
  } as {[key: number]: string},
} as Soknad;

describe('isFieldEdited', () => {
  describe('termindato', () => {
    it('skal vise endret termindato', () => {
      const familiehendelse = {
        termindato: '2018-07-28',
      };

      const isTermindatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).termindato;

      expect(isTermindatoEdited).toBe(true);
    });

    it('skal ikke vise uendret termindato', () => {
      const familiehendelse = {
        termindato: '2018-07-27',
      };

      const isTermindatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).termindato;

      expect(isTermindatoEdited).toBe(false);
    });
  });

  describe('utstedtdato', () => {
    it('skal vise endret utstedtdato', () => {
      const familiehendelse = {
        utstedtdato: '2018-06-26',
      };

      const isUtstedtdatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).utstedtdato;

      expect(isUtstedtdatoEdited).toBe(true);
    });

    it('skal ikke vise uendret utstedtdato', () => {
      const familiehendelse = {
        utstedtdato: '2018-06-25',
      };

      const isUtstedtdatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).utstedtdato;

      expect(isUtstedtdatoEdited).toBe(false);
    });
  });

  describe('antallBarn', () => {
    it('skal vise endret antallBarn', () => {
      const familiehendelse = {
        antallBarnTermin: 2,
      };

      const isAntallBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).antallBarn;

      expect(isAntallBarnEdited).toBe(true);
    });

    it('skal ikke vise uendret antallBarn', () => {
      const familiehendelse = {
        antallBarnTermin: 1,
      };

      const isAntallBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse).antallBarn;

      expect(isAntallBarnEdited).toBe(false);
    });
  });

  describe('vilkarType', () => {
    it('skal vise endret vilkarType', () => {
      const familiehendelse = {
        vilkarType: {
          kode: 'Test',
          kodeverk: '',
        },
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

      const isAdopsjonFodelsedatoerEdited = isFieldEdited(adopsjonsSoknad, familiehendelse as FamilieHendelse)
        .adopsjonFodelsedatoer;

      expect(isAdopsjonFodelsedatoerEdited[1]).toBe(true);
    });

    it('skal ikke vise uendret adopsjonFodelsedatoer', () => {
      const familiehendelse = {
        adopsjonFodelsedatoer: {
          1: '2018-01-01',
        } as Record<number, string>,
      };

      const adopsjonsSoknad = { ...soknad, ...familiehendelse };

      const isAdopsjonFodelsedatoerEdited = isFieldEdited(adopsjonsSoknad, familiehendelse as FamilieHendelse)
        .adopsjonFodelsedatoer;

      expect(isAdopsjonFodelsedatoerEdited[1]).toBe(false);
    });
  });

  describe('omsorgsovertakelseDato', () => {
    it('skal vise endret omsorgsovertakelseDato', () => {
      const familiehendelse = {
        omsorgsovertakelseDato: '2018-01-01',
      };

      const omsorgsSoknad = { ...soknad, omsorgsovertakelseDato: '2018-01-10' };

      const isOmsorgsovertakelseDatoEdited = isFieldEdited(omsorgsSoknad, familiehendelse as FamilieHendelse)
        .omsorgsovertakelseDato;

      expect(isOmsorgsovertakelseDatoEdited).toBe(true);
    });

    it('skal ikke vise uendret omsorgsovertakelseDato', () => {
      const familiehendelse = {
        omsorgsovertakelseDato: '2018-01-01',
      };

      const omsorgsSoknad = { ...soknad, omsorgsovertakelseDato: '2018-01-01' };

      const isOmsorgsovertakelseDatoEdited = isFieldEdited(omsorgsSoknad, familiehendelse as FamilieHendelse)
        .omsorgsovertakelseDato;

      expect(isOmsorgsovertakelseDatoEdited).toBe(false);
    });
  });

  describe('barnetsAnkomstTilNorgeDato', () => {
    it('skal ikke vise uendret barnetsAnkomstTilNorgeDato', () => {
      const familiehendelse = {
      };

      const ankomstSoknad = { ...soknad, barnetsAnkomstTilNorgeDato: '2018-01-01' };

      const isBarnetsAnkomstTilNorgeDatoEdited = isFieldEdited(ankomstSoknad, familiehendelse as FamilieHendelse)
        .barnetsAnkomstTilNorgeDato;

      expect(isBarnetsAnkomstTilNorgeDatoEdited).toBe(false);
    });
  });

  describe('antallBarnOmsorgOgForeldreansvar', () => {
    it('skal vise endret antallBarnOmsorgOgForeldreansvar', () => {
      const familiehendelse = {
        antallBarnTilBeregning: 2,
      };

      const isAntallBarnOmsorgOgForeldreansvarEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse)
        .antallBarnOmsorgOgForeldreansvar;

      expect(isAntallBarnOmsorgOgForeldreansvarEdited).toBe(true);
    });

    it('skal ikke vise uendret antallBarnOmsorgOgForeldreansvar', () => {
      const familiehendelse = {
        antallBarnTilBeregning: 1,
      };

      const isAntallBarnOmsorgOgForeldreansvarEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse)
        .antallBarnOmsorgOgForeldreansvar;

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

      const isMannAdoptererAleneEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse)
        .mannAdoptererAlene;

      expect(isMannAdoptererAleneEdited).toBe(true);
    });

    it('skal ikke vise uendret mannAdoptererAlene', () => {
      const familiehendelse = {};

      const isMannAdoptererAleneEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse)
        .mannAdoptererAlene;

      expect(isMannAdoptererAleneEdited).toBe(false);
    });
  });

  describe('dokumentasjonForeligger', () => {
    it('skal vise endret dokumentasjonForeligger', () => {
      const familiehendelse = {
        dokumentasjonForeligger: true,
      };

      const isDokumentasjonForeliggerEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse)
        .dokumentasjonForeligger;

      expect(isDokumentasjonForeliggerEdited).toBe(true);
    });

    it('skal ikke vise uendret dokumentasjonForeligger', () => {
      const familiehendelse = {};

      const isDokumentasjonForeliggerEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse)
        .dokumentasjonForeligger;

      expect(isDokumentasjonForeliggerEdited).toBe(false);
    });
  });
});
