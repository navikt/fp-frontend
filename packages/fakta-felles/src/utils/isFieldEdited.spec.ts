import { FamilieHendelse } from '@fpsak-frontend/types';
import { expect } from 'chai';

import isFieldEdited from './isFieldEdited';

const personopplysning = {
  fnr: '24069305012',
  aktoerId: '9000000028435',
  diskresjonskode: {
    kode: 'UDEF',
    navn: 'Udefiniert',
    kodeverk: 'DISKRESJONSKODE',
  },
  nummer: null,
  navBrukerKjonn: {
    kode: 'K',
    navn: 'Kvinne',
    kodeverk: 'BRUKER_KJOENN',
  },
  statsborgerskap: {
    kode: 'NOR',
    kodeverk: 'LANDKODER',
    navn: 'Norge',
  },
  avklartPersonstatus: {
    orginalPersonstatus: null,
    overstyrtPersonstatus: {
      kode: 'BOSA',
      navn: 'Bosatt',
      kodeverk: 'PERSONSTATUS_TYPE',
    },
  },
  personstatus: {
    kode: 'BOSA',
    navn: 'Bosatt',
    kodeverk: 'PERSONSTATUS_TYPE',
  },
  sivilstand: {
    kode: 'UGIF',
    navn: 'Ugift',
    kodeverk: 'SIVILSTAND_TYPE',
  },
  navn: 'Qvspistv Vnrtm',
  dodsdato: null,
  fodselsdato: '1993-06-24',
  adresser: [
    {
      adresseType: {
        kode: 'BOSTEDSADRESSE',
        navn: 'Bostedsadresse',
        kodeverk: 'ADRESSE_TYPE',
      },
      mottakerNavn: 'Qvspistv Vnrtm',
      adresselinje1: 'Ankerv 360',
      adresselinje2: null,
      adresselinje3: null,
      postNummer: '1359',
      poststed: 'Eiksmarka',
      land: 'NOR',
    },
  ],
  region: {
    kode: 'NORDEN',
    navn: 'Nordisk',
    kodeverk: 'REGION',
  },
  annenPart: null,
  ektefelle: null,
  barn: [],
  barnSoktFor: [
    {
      fnr: null,
      aktoerId: null,
      diskresjonskode: null,
      nummer: 1,
      navBrukerKjonn: null,
      statsborgerskap: null,
      avklartPersonstatus: null,
      personstatus: null,
      sivilstand: null,
      navn: null,
      dodsdato: null,
      fodselsdato: '2018-05-30',
      adresser: [],
      region: null,
      annenPart: null,
      ektefelle: null,
      barn: [],
      barnSoktFor: [],
      barnFraTpsRelatertTilSoknad: [],
      harVerge: false,
    },
  ],
  barnFraTpsRelatertTilSoknad: [],
  harVerge: false,
};

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
  },
};

describe('isFieldEdited', () => {
  describe('termindato', () => {
    it('skal vise endret termindato', () => {
      const familiehendelse = {
        termindato: '2018-07-28',
      };

      const isTermindatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).termindato;

      expect(isTermindatoEdited).to.be.true;
    });

    it('skal ikke vise uendret termindato', () => {
      const familiehendelse = {
        termindato: '2018-07-27',
      };

      const isTermindatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).termindato;

      expect(isTermindatoEdited).to.be.false;
    });
  });

  describe('utstedtdato', () => {
    it('skal vise endret utstedtdato', () => {
      const familiehendelse = {
        utstedtdato: '2018-06-26',
      };

      const isUtstedtdatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).utstedtdato;

      expect(isUtstedtdatoEdited).to.be.true;
    });

    it('skal ikke vise uendret utstedtdato', () => {
      const familiehendelse = {
        utstedtdato: '2018-06-25',
      };

      const isUtstedtdatoEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).utstedtdato;

      expect(isUtstedtdatoEdited).to.be.false;
    });
  });

  describe('antallBarn', () => {
    it('skal vise endret antallBarn', () => {
      const familiehendelse = {
        antallBarnTermin: 2,
      };

      const isAntallBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).antallBarn;

      expect(isAntallBarnEdited).to.be.true;
    });

    it('skal ikke vise uendret antallBarn', () => {
      const familiehendelse = {
        antallBarnTermin: 1,
      };

      const isAntallBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).antallBarn;

      expect(isAntallBarnEdited).to.be.false;
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

      const isVilkarTypeEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).vilkarType;

      expect(isVilkarTypeEdited).to.be.true;
    });
  });

  describe('adopsjonFodelsedatoer', () => {
    it('skal vise endret adopsjonFodelsedatoer', () => {
      const familiehendelse = {
        adopsjonFodelsedatoer: {
          1: '2018-01-01',
        },
      };

      const endretDato = {
        adopsjonFodelsedatoer: {
          1: '2018-01-10',
        },
      };

      const adopsjonsSoknad = { ...soknad, ...endretDato };

      const isAdopsjonFodelsedatoerEdited = isFieldEdited(adopsjonsSoknad, familiehendelse as FamilieHendelse, personopplysning)
        .adopsjonFodelsedatoer;

      expect(isAdopsjonFodelsedatoerEdited[1]).to.be.true;
    });

    it('skal ikke vise uendret adopsjonFodelsedatoer', () => {
      const familiehendelse = {
        adopsjonFodelsedatoer: {
          1: '2018-01-01',
        },
      };

      const adopsjonsSoknad = { ...soknad, ...familiehendelse };

      const isAdopsjonFodelsedatoerEdited = isFieldEdited(adopsjonsSoknad, familiehendelse as FamilieHendelse, personopplysning)
        .adopsjonFodelsedatoer;

      expect(isAdopsjonFodelsedatoerEdited[1]).to.be.false;
    });
  });

  describe('omsorgsovertakelseDato', () => {
    it('skal vise endret omsorgsovertakelseDato', () => {
      const familiehendelse = {
        omsorgsovertakelseDato: '2018-01-01',
      };

      const omsorgsSoknad = { ...soknad, omsorgsovertakelseDato: '2018-01-10' };

      const isOmsorgsovertakelseDatoEdited = isFieldEdited(omsorgsSoknad, familiehendelse as FamilieHendelse, personopplysning)
        .omsorgsovertakelseDato;

      expect(isOmsorgsovertakelseDatoEdited).to.be.true;
    });

    it('skal ikke vise uendret omsorgsovertakelseDato', () => {
      const familiehendelse = {
        omsorgsovertakelseDato: '2018-01-01',
      };

      const omsorgsSoknad = { ...soknad, omsorgsovertakelseDato: '2018-01-01' };

      const isOmsorgsovertakelseDatoEdited = isFieldEdited(omsorgsSoknad, familiehendelse as FamilieHendelse, personopplysning)
        .omsorgsovertakelseDato;

      expect(isOmsorgsovertakelseDatoEdited).to.be.false;
    });
  });

  describe('barnetsAnkomstTilNorgeDato', () => {
    it('skal ikke vise uendret barnetsAnkomstTilNorgeDato', () => {
      const familiehendelse = {
      };

      const ankomstSoknad = { ...soknad, barnetsAnkomstTilNorgeDato: '2018-01-01' };

      const isBarnetsAnkomstTilNorgeDatoEdited = isFieldEdited(ankomstSoknad, familiehendelse as FamilieHendelse, personopplysning)
        .barnetsAnkomstTilNorgeDato;

      expect(isBarnetsAnkomstTilNorgeDatoEdited).to.be.false;
    });
  });

  describe('antallBarnOmsorgOgForeldreansvar', () => {
    it('skal vise endret antallBarnOmsorgOgForeldreansvar', () => {
      const familiehendelse = {
        antallBarnTilBeregning: 2,
      };

      const isAntallBarnOmsorgOgForeldreansvarEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning)
        .antallBarnOmsorgOgForeldreansvar;

      expect(isAntallBarnOmsorgOgForeldreansvarEdited).to.be.true;
    });

    it('skal ikke vise uendret antallBarnOmsorgOgForeldreansvar', () => {
      const familiehendelse = {
        antallBarnTilBeregning: 1,
      };

      const isAntallBarnOmsorgOgForeldreansvarEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning)
        .antallBarnOmsorgOgForeldreansvar;

      expect(isAntallBarnOmsorgOgForeldreansvarEdited).to.be.false;
    });
  });

  describe('fodselsdatoer', () => {
    it('skal vise endret fodselsdatoer', () => {
      const familiehendelse = {};

      const isFodselsdatoerEdited = isFieldEdited(
        { ...soknad, fodselsdatoer: { 1: '2018-06-30' } },
        familiehendelse as FamilieHendelse,
        personopplysning,
      ).fodselsdatoer;

      expect(isFodselsdatoerEdited[1]).to.be.true;
    });

    it('skal ikke vise uendret fodselsdatoer', () => {
      const familiehendelse = {};

      const isFodselsdatoerEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).fodselsdatoer;

      expect(isFodselsdatoerEdited[1]).to.be.false;
    });
  });

  describe('ektefellesBarn', () => {
    it('skal vise endret ektefellesBarn', () => {
      const familiehendelse = {
        ektefellesBarn: true,
      };

      const isEktefellesBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).ektefellesBarn;

      expect(isEktefellesBarnEdited).to.be.true;
    });

    it('skal ikke vise uendret ektefellesBarn', () => {
      const familiehendelse = {};

      const isEktefellesBarnEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning).ektefellesBarn;

      expect(isEktefellesBarnEdited).to.be.false;
    });
  });

  describe('mannAdoptererAlene', () => {
    it('skal vise endret mannAdoptererAlene', () => {
      const familiehendelse = {
        mannAdoptererAlene: true,
      };

      const isMannAdoptererAleneEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning)
        .mannAdoptererAlene;

      expect(isMannAdoptererAleneEdited).to.be.true;
    });

    it('skal ikke vise uendret mannAdoptererAlene', () => {
      const familiehendelse = {};

      const isMannAdoptererAleneEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning)
        .mannAdoptererAlene;

      expect(isMannAdoptererAleneEdited).to.be.false;
    });
  });

  describe('dokumentasjonForeligger', () => {
    it('skal vise endret dokumentasjonForeligger', () => {
      const familiehendelse = {
        dokumentasjonForeligger: true,
      };

      const isDokumentasjonForeliggerEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning)
        .dokumentasjonForeligger;

      expect(isDokumentasjonForeliggerEdited).to.be.true;
    });

    it('skal ikke vise uendret dokumentasjonForeligger', () => {
      const familiehendelse = {};

      const isDokumentasjonForeliggerEdited = isFieldEdited(soknad, familiehendelse as FamilieHendelse, personopplysning)
        .dokumentasjonForeligger;

      expect(isDokumentasjonForeliggerEdited).to.be.false;
    });
  });
});
