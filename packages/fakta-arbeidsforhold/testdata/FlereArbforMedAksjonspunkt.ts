import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

export const iay = {
  inntektsmeldinger: [
    {
      arbeidsgiverReferanse: '999999999',
      arbeidsgiverStartdato: '2019-06-03',
      innsendingstidspunkt: '2020-05-14T00:12:17',
      utsettelsePerioder: [],
      graderingPerioder: [],
      getRefusjonBeløpPerMnd: {
        verdi: 36181,
        indexKey: '36181.00',
      },
    },
    {
      arbeidsgiverReferanse: '999999998',
      arbeidsgiverStartdato: '2019-05-13',
      innsendingstidspunkt: '2019-04-19T21:30:17',
      utsettelsePerioder: [
        {
          fom: '2019-06-03',
          tom: '2019-10-11',
          utsettelseArsak: {
            kode: 'ARBEID',
            kodeverk: 'UTSETTELSE_AARSAK_TYPE',
          },
        },
        {
          fom: '2019-10-14',
          tom: '2020-02-14',
          utsettelseArsak: {
            kode: 'ARBEID',
            kodeverk: 'UTSETTELSE_AARSAK_TYPE',
          },
        },
      ],
      graderingPerioder: [
        {
          fom: '2019-05-13',
          tom: '2019-05-31',
          arbeidsprosent: 80,
        },
      ],
      getRefusjonBeløpPerMnd: {
        verdi: 36180.88,
        indexKey: '36180.88',
      },
    },
  ],
  relatertTilgrensendeYtelserForSoker: [
    {
      relatertYtelseType: 'FORELDREPENGER',
      tilgrensendeYtelserListe: [
        {
          relatertYtelseType: 'FORELDREPENGER',
          periodeFraDato: '2019-05-13',
          periodeTilDato: '2020-02-14',
          status: 'LØPENDE',
          saksNummer: '139110930',
        },
        {
          relatertYtelseType: 'FORELDREPENGER',
          periodeFraDato: '2017-02-07',
          periodeTilDato: '2018-03-16',
          status: 'AVSLUTTET',
        },
      ],
    },
    {
      relatertYtelseType: 'ENGANGSSTØNAD',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'SYKEPENGER',
      tilgrensendeYtelserListe: [
        {
          relatertYtelseType: 'SYKEPENGER',
          periodeFraDato: '2019-02-01',
          periodeTilDato: '2019-05-12',
          status: 'AVSLUTTET',
        },
        {
          relatertYtelseType: 'SYKEPENGER',
          periodeFraDato: '2018-11-07',
          periodeTilDato: '2019-01-31',
          status: 'AVSLUTTET',
        },
        {
          relatertYtelseType: 'SYKEPENGER',
          periodeFraDato: '2018-08-24',
          periodeTilDato: '2018-08-29',
          status: 'ÅPEN',
        },
        {
          relatertYtelseType: 'SYKEPENGER',
          periodeFraDato: '2018-07-23',
          periodeTilDato: '2018-07-23',
          status: 'AVSLUTTET',
        },
        {
          relatertYtelseType: 'SYKEPENGER',
          periodeFraDato: '2018-05-15',
          periodeTilDato: '2018-05-22',
          status: 'ÅPEN',
        },
      ],
    },
    {
      relatertYtelseType: 'DAGPENGER',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'ARBEIDSAVKLARINGSPENGER',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'SVANGERSKAPSPENGER',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'OMP',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'OLP',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'PSB',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'PPN',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'FRISINN',
      tilgrensendeYtelserListe: [],
    },
  ],
  relatertTilgrensendeYtelserForAnnenForelder: [
    {
      relatertYtelseType: 'FORELDREPENGER',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'ENGANGSSTØNAD',
      tilgrensendeYtelserListe: [],
    },
  ],
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [
    {
      relatertYtelseType: 'FORELDREPENGER',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseType: 'ENGANGSSTØNAD',
      tilgrensendeYtelserListe: [],
    },
  ],
  arbeidsforhold: [
    {
      id: '999999999-c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
      arbeidsgiverReferanse: '999999999',
      arbeidsforholdId: 'c14b0c78-eb1f-4d8e-b73f-7f385a5e67d2',
      eksternArbeidsforholdId: 'V999999999R50049082SS157848L0001',
      kilde: {
        navn: 'AA-Registeret',
      },
      stillingsprosent: 100,
      skjaeringstidspunkt: '2019-05-13',
      mottattDatoInntektsmelding: '2020-05-14',
      fomDato: '2019-06-03',
      harErstattetEttEllerFlere: false,
      ikkeRegistrertIAaRegister: false,
      tilVurdering: false,
      vurderOmSkalErstattes: false,
      brukArbeidsforholdet: true,
      fortsettBehandlingUtenInntektsmelding: false,
      erNyttArbeidsforhold: false,
      erEndret: false,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: false,
      basertPaInntektsmelding: false,
      permisjoner: [],
    },
    {
      id: '999999998-null',
      arbeidsgiverReferanse: '999999998',
      kilde: {
        navn: 'Inntektsmelding',
      },
      stillingsprosent: 100,
      skjaeringstidspunkt: '2019-05-13',
      mottattDatoInntektsmelding: '2019-04-19',
      fomDato: '2020-05-15',
      harErstattetEttEllerFlere: true,
      ikkeRegistrertIAaRegister: true,
      tilVurdering: true,
      vurderOmSkalErstattes: false,
      erEndret: false,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: false,
      basertPaInntektsmelding: false,
      permisjoner: [],
      kanOppretteNyttArbforFraIM: true,
    },
    {
      id: '999999999-b269bf8f-c90d-45c7-ae4f-53ae6d8b7dce',
      arbeidsgiverReferanse: '999999999',
      arbeidsforholdId: 'b269bf8f-c90d-45c7-ae4f-53ae6d8b7dce',
      kilde: {
        navn: 'AA-Registeret',
      },
      stillingsprosent: 100,
      skjaeringstidspunkt: '2019-05-13',
      fomDato: '2015-05-01',
      tomDato: '2019-06-02',
      ikkeRegistrertIAaRegister: false,
      tilVurdering: true,
      vurderOmSkalErstattes: false,
      erEndret: false,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: false,
      basertPaInntektsmelding: false,
      permisjoner: [],
    },
  ],
  skalKunneLeggeTilNyeArbeidsforhold: false,
  skalKunneLageArbeidsforholdBasertPaInntektsmelding: true,
};

export const ap = {
  definisjon: {
    kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
  kanLoses: true,
  erAktivt: true,
};
