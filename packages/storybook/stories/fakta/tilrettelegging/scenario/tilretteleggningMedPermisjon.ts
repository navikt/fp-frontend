export const tilrettelegging = {
  termindato: '2020-11-06',
  fødselsdato: null,
  arbeidsforholdListe: [{
    tilretteleggingId: 1116961,
    tilretteleggingBehovFom: '2020-03-17',
    tilretteleggingDatoer: [{
      fom: '2020-03-17', type: { kode: 'INGEN_TILRETTELEGGING', kodeverk: 'SVP_TILRETTELEGGING_TYPE' }, stillingsprosent: null, overstyrtUtbetalingsgrad: null,
    }, {
      fom: '2020-10-15', type: { kode: 'HEL_TILRETTELEGGING', kodeverk: 'SVP_TILRETTELEGGING_TYPE' }, stillingsprosent: null, overstyrtUtbetalingsgrad: null,
    }],
    arbeidsgiverReferanse: '999999999',
    arbeidType: {
      kode: 'FRILANSER',
      kodeverk: 'ARBEID_TYPE',
    },
    opplysningerOmRisiko: null,
    opplysningerOmTilrettelegging: null,
    kopiertFraTidligereBehandling: true,
    mottattTidspunkt: '2020-03-11T16:21:48.532298',
    internArbeidsforholdReferanse: null,
    eksternArbeidsforholdReferanse: null,
    skalBrukes: true,
    velferdspermisjoner: [{
      permisjonFom: '2020-02-17',
      permisjonTom: '2020-07-12',
      permisjonsprosent: 100.00,
      type: { kode: 'VELFERDSPERMISJON', kodeverk: 'PERMISJONSBESKRIVELSE_TYPE' },
      erGyldig: true,
    }, {
      permisjonFom: '2019-08-06',
      permisjonTom: '2019-08-06',
      permisjonsprosent: 100.00,
      type: { kode: 'VELFERDSPERMISJON', kodeverk: 'PERMISJONSBESKRIVELSE_TYPE' },
      erGyldig: true,
    }, {
      permisjonFom: '2019-10-03',
      permisjonTom: '2019-10-03',
      permisjonsprosent: 100.00,
      type: { kode: 'VELFERDSPERMISJON', kodeverk: 'PERMISJONSBESKRIVELSE_TYPE' },
      erGyldig: true,
    }],
    begrunnelse: null,
  }],
  saksbehandlet: true,
};

export const inntektArbeidYtelse = {
  inntektsmeldinger: [{
    arbeidsgiverReferanse: '999999999',
    arbeidsgiverStartdato: '2020-03-17',
    innsendingstidspunkt: '2020-03-20T16:11:18',
    utsettelsePerioder: [],
    graderingPerioder: [],
    getRefusjonBeløpPerMnd: { verdi: 5170.00, indexKey: '5170.00' },
  }],
  relatertTilgrensendeYtelserForSoker: [{
    relatertYtelseType: 'FORELDREPENGER',
    tilgrensendeYtelserListe: [{
      relatertYtelseType: 'FORELDREPENGER', periodeFraDato: '2020-10-15', periodeTilDato: '2021-06-09', status: 'LØPENDE', saksNummer: '146710139',
    }],
  }, { relatertYtelseType: 'ENGANGSSTØNAD', tilgrensendeYtelserListe: [] }, {
    relatertYtelseType: 'SYKEPENGER',
    tilgrensendeYtelserListe: [{
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2019-12-16', periodeTilDato: '2020-03-16', status: 'AVSLUTTET', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2019-11-25', periodeTilDato: '2019-12-15', status: 'AVSLUTTET', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2019-09-25', periodeTilDato: '2019-10-23', status: 'AVSLUTTET', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2019-09-10', periodeTilDato: '2019-09-12', status: 'ÅPEN', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2019-04-17', periodeTilDato: '2019-05-01', status: 'AVSLUTTET', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2019-02-05', periodeTilDato: '2019-03-12', status: 'ÅPEN', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2018-12-13', periodeTilDato: '2019-02-01', status: 'AVSLUTTET', saksNummer: null,
    }, {
      relatertYtelseType: 'SYKEPENGER', periodeFraDato: '2018-11-29', periodeTilDato: '2019-01-07', status: 'ÅPEN', saksNummer: null,
    }],
  }, { relatertYtelseType: 'DAGPENGER', tilgrensendeYtelserListe: [] }, {
    relatertYtelseType: 'ARBEIDSAVKLARINGSPENGER',
    tilgrensendeYtelserListe: [],
  }, {
    relatertYtelseType: 'SVANGERSKAPSPENGER',
    tilgrensendeYtelserListe: [{
      relatertYtelseType: 'SVANGERSKAPSPENGER', periodeFraDato: '2020-03-17', periodeTilDato: '2020-10-15', status: 'ÅPEN', saksNummer: '123456789',
    }, {
      relatertYtelseType: 'SVANGERSKAPSPENGER', periodeFraDato: '2019-10-08', periodeTilDato: '2020-03-21', status: 'ÅPEN', saksNummer: '984359034',
    }],
  }, { relatertYtelseType: 'OMP', tilgrensendeYtelserListe: [] }, { relatertYtelseType: 'OLP', tilgrensendeYtelserListe: [] },
  { relatertYtelseType: 'PSB', tilgrensendeYtelserListe: [] }, { relatertYtelseType: 'PPN', tilgrensendeYtelserListe: [] },
  { relatertYtelseType: 'FRISINN', tilgrensendeYtelserListe: [] }],
  relatertTilgrensendeYtelserForAnnenForelder: [],
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [],
  arbeidsforhold: [{
    id: '999999999-null',
    arbeidsgiverReferanse: '999999999',
    arbeidsforholdId: null,
    eksternArbeidsforholdId: null,
    begrunnelse: 'vurdert tidligere ',
    erstatterArbeidsforholdId: null,
    handlingType: null,
    kilde: { navn: 'AA-Registeret' },
    stillingsprosent: 0.00,
    skjaeringstidspunkt: '2020-03-17',
    mottattDatoInntektsmelding: '2020-03-20',
    fomDato: '2019-04-01',
    tomDato: null,
    harErstattetEttEllerFlere: true,
    ikkeRegistrertIAaRegister: false,
    tilVurdering: false,
    vurderOmSkalErstattes: false,
    brukArbeidsforholdet: true,
    fortsettBehandlingUtenInntektsmelding: false,
    erNyttArbeidsforhold: false,
    erEndret: true,
    erSlettet: null,
    brukMedJustertPeriode: false,
    lagtTilAvSaksbehandler: false,
    basertPaInntektsmelding: false,
    brukPermisjon: false,
    inntektMedTilBeregningsgrunnlag: null,
    permisjoner: [{
      permisjonFom: '2020-02-17',
      permisjonTom: '2020-07-12',
      permisjonsprosent: 100.00,
      type: {
        kode: 'VELFERDSPERMISJON',
        kodeverk: 'PERMISJONSBESKRIVELSE_TYPE',
      },
    }],
    overstyrtTom: null,
    kanOppretteNyttArbforFraIM: false,
  }],
  skalKunneLeggeTilNyeArbeidsforhold: false,
  skalKunneLageArbeidsforholdBasertPaInntektsmelding: false,
};
