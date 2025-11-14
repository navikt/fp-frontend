// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { AlleKodeverk } from '@navikt/fp-types';

export const alleKodeverk: AlleKodeverk = {
  UttakUtsettelseType: [
    {
      kode: 'SYKDOM_SKADE',
      navn: 'Avhengig av hjelp grunnet sykdom',
    },
    {
      kode: 'BARN_INNLAGT',
      navn: 'Barn er innlagt i helseinstitusjon',
    },
    {
      kode: 'FERIE',
      navn: 'Lovbestemt ferie',
    },
    {
      kode: 'ARBEID',
      navn: 'Arbeid',
    },
    {
      kode: 'SØKER_INNLAGT',
      navn: 'Søker er innlagt i helseinstitusjon',
    },
    {
      kode: 'FRI',
      navn: 'Fri utsettelse fom høst 2021',
    },
    {
      kode: 'HV_OVELSE',
      navn: 'Heimevernet',
    },
    {
      kode: 'NAV_TILTAK',
      navn: 'Tiltak i regi av Nav',
    },
  ],
  FagsakYtelseType: [
    {
      kode: 'FP',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'SVP',
      navn: 'Svangerskapspenger',
    },
    {
      kode: 'ES',
      navn: 'Engangsstønad',
    },
  ],
  StønadskontoType: [
    {
      kode: 'TETTE_SAKER_MOR',
      navn: 'Tette fødsler mor',
    },
    {
      kode: 'TILLEGG_PREMATUR',
      navn: 'Tilleggsdager ved prematur fødsel',
    },
    {
      kode: 'BARE_FAR_RETT',
      navn: 'Bare far har rett',
    },
    {
      kode: 'FLERBARNSDAGER',
      navn: 'Flerbarnsdager',
    },
    {
      kode: 'UFØREDAGER',
      navn: 'Uføredager',
    },
    {
      kode: 'FEDREKVOTE',
      navn: 'Fedrekvote',
    },
    {
      kode: 'FORELDREPENGER',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'FORELDREPENGER_FØR_FØDSEL',
      navn: 'Foreldrepenger før fødsel',
    },
    {
      kode: 'FELLESPERIODE',
      navn: 'Fellesperiode',
    },
    {
      kode: 'TILLEGG_FLERBARN',
      navn: 'Tilleggsdager ved flerbarnstilfelle',
    },
    {
      kode: 'FAR_RUNDT_FØDSEL',
      navn: 'Fars uttak ifm fødsel',
    },
    {
      kode: 'TETTE_SAKER_FAR',
      navn: 'Tette fødsler far/medmor',
    },
    {
      kode: 'MØDREKVOTE',
      navn: 'Mødrekvote',
    },
  ],
  FagsakStatus: [
    {
      kode: 'UBEH',
      navn: 'Under behandling',
    },
    {
      kode: 'AVSLU',
      navn: 'Avsluttet',
    },
    {
      kode: 'OPPR',
      navn: 'Opprettet',
    },
    {
      kode: 'LOP',
      navn: 'Løpende',
    },
  ],
  Venteårsak: [
    {
      kode: 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER',
      navn: 'Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser',
    },
    {
      kode: 'VENT_UTLAND_TRYGD',
      navn: 'Venter på utenlandsk trygdemyndighet',
    },
    {
      kode: 'VENT_PÅ_SISTE_AAP_MELDEKORT',
      navn: 'Venter på siste meldekort for AAP eller dagpenger før første uttaksdag.',
    },
    {
      kode: 'VENT_MANGLENDE_SYKEMELDING',
      navn: 'Venter på siste sykemelding for sykepenger basert på dagpenger',
    },
    {
      kode: 'VENT_BEREGNING_TILBAKE_I_TID',
      navn: 'Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda.',
    },
    {
      kode: 'VENT_TIDLIGERE_BEHANDLING',
      navn: 'Venter på iverksettelse av en tidligere behandling i denne saken',
    },
    {
      kode: 'ANKE_OVERSENDT_TIL_TRYGDERETTEN',
      navn: 'Venter på at saken blir behandlet hos Trygderetten',
    },
    {
      kode: 'VENT_DEKGRAD_REGEL',
      navn: 'Venter på 80% dekningsgrad-regel',
    },
    {
      kode: 'VENT_MANGLENDE_ARBEIDSFORHOLD',
      navn: 'Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten.',
    },
    {
      kode: 'AVV_RESPONS_REVURDERING',
      navn: 'Avventer respons på varsel om revurdering',
    },
    {
      kode: 'VENT_REGISTERINNHENTING',
      navn: 'Venter på registerinformasjon',
    },
    {
      kode: 'VENT_KABAL',
      navn: 'Klage / anke behandles av Klageinstans i egen løsning',
    },
    {
      kode: 'AVV_DOK',
      navn: 'Avventer dokumentasjon',
    },
    {
      kode: 'FOR_TIDLIG_SOKNAD',
      navn: 'Venter pga. for tidlig søknad',
    },
    {
      kode: 'OPPD_ÅPEN_BEH',
      navn: 'Venter på oppdatering av åpen behandling',
    },
    {
      kode: 'VENT_MILITÆR_OG_BG_UNDER_3G',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'ULIKE_STARTDATOER_SVP',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'VENT_SØKNAD_SENDT_INFORMASJONSBREV',
      navn: 'Sendt informasjonsbrev, og venter på søknad.',
    },
    {
      kode: 'VENT_DØDFØDSEL_80P_DEKNINGSGRAD',
      navn: 'Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel',
    },
    {
      kode: 'VENT_ØKONOMI',
      navn: 'Venter på økonomiløsningen',
    },
    {
      kode: 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER',
      navn: 'Venter på merknader fra bruker',
    },
    {
      kode: 'UTV_FRIST',
      navn: 'Utvidet frist',
    },
    {
      kode: 'FL_SN_IKKE_STOTTET_FOR_SVP',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG',
      navn: 'Mangel i løsning for oppgitt gradering der utbetaling ikke finnes',
    },
    {
      kode: 'VENT_FEIL_ENDRINGSSØKNAD',
      navn: 'Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad',
    },
    {
      kode: 'AAP_DP_SISTE_10_MND_SVP',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID',
      navn: 'Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg',
    },
    {
      kode: 'VENT_ÅPEN_BEHANDLING',
      navn: 'Søker eller den andre forelderen har en åpen behandling',
    },
    {
      kode: 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP',
      navn: 'Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP',
    },
    {
      kode: 'REFUSJON_3_MÅNEDER',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'VENT_PÅ_KORRIGERT_BESTEBEREGNING',
      navn: 'Besteberegningen er feil. Feilen må meldes og korrigeres.',
    },
    {
      kode: 'VENT_OPDT_INNTEKTSMELDING',
      navn: 'Venter på inntektsmelding',
    },
    {
      kode: 'VENT_OPPTJENING_OPPLYSNINGER',
      navn: 'Venter på opptjeningsopplysninger',
    },
    {
      kode: 'VENT_INFOTRYGD',
      navn: 'Venter på en ytelse i Infotrygd',
    },
    {
      kode: 'VENT_PÅ_BRUKERTILBAKEMELDING',
      navn: 'Venter på tilbakemelding fra bruker',
    },
    {
      kode: 'GRADERING_FLERE_ARBEIDSFORHOLD',
      navn: 'Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette.',
    },
    {
      kode: 'AVV_FODSEL',
      navn: 'Avventer fødsel',
    },
    {
      kode: 'VENT_LOVENDRING_8_41',
      navn: 'Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans',
    },
    {
      kode: 'VENT_INNTEKT_RAPPORTERINGSFRIST',
      navn: 'Inntekt rapporteringsfrist',
    },
    {
      kode: 'SCANN',
      navn: 'Venter på skanning',
    },
    {
      kode: 'AAP_DP_ENESTE_AKTIVITET_SVP',
      navn: 'Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP',
    },
  ],
  BehandlingÅrsakType: [
    {
      kode: 'RE-HENDELSE-FØDSEL',
      navn: 'Fødselsmelding',
    },
    {
      kode: 'RE-SATS-REGULERING',
      navn: 'Regulering grunnbeløp',
    },
    {
      kode: 'RE-HENDELSE-DØDFØD',
      navn: 'Dødfødsel',
    },
    {
      kode: 'KLAGE_TILBAKE',
      navn: 'Tilbakebetaling',
    },
    {
      kode: 'OPPHØR-NYTT-BARN',
      navn: 'Nytt barn/stønadsperiode',
    },
    {
      kode: 'RE-ANNET',
      navn: 'Annet',
    },
    {
      kode: 'RE-LOV',
      navn: 'Lovanvendelse',
    },
    {
      kode: 'RE-HENDELSE-DØD-F',
      navn: 'Forelder død',
    },
    {
      kode: 'KØET-BEHANDLING',
      navn: 'Køet behandling',
    },
    {
      kode: 'RE-PRSSL',
      navn: 'Prosessuell feil',
    },
    {
      kode: 'RE-OPTJ',
      navn: 'Nye opplysninger om opptjening',
    },
    {
      kode: 'RE-END-FRA-BRUKER',
      navn: 'Ny søknad',
    },
    {
      kode: 'RE-KLAG-U-INNTK',
      navn: 'Klage/Anke uendret inntekt',
    },
    {
      kode: 'RE-YTELSE',
      navn: 'Opplysninger annen ytelse',
    },
    {
      kode: 'RE-FØDSEL',
      navn: 'Fødsel',
    },
    {
      kode: 'RE-MF',
      navn: 'Mangler fødselsregistrering',
    },
    {
      kode: 'RE-REGISTEROPPL',
      navn: 'Nye registeropplysninger',
    },
    {
      kode: 'RE-HENDELSE-DØD-B',
      navn: 'Barn død',
    },
    {
      kode: 'RE-FRIST',
      navn: 'Nye opplysninger om søknadsfrist',
    },
    {
      kode: 'INFOBREV_OPPHOLD',
      navn: 'Informasjonsbrev opphold',
    },
    {
      kode: 'RE-RGLF',
      navn: 'Regelverksforståelse',
    },
    {
      kode: 'RE-UTSATT-START',
      navn: 'Senere startdato',
    },
    {
      kode: 'RE-AVAB',
      navn: 'Avvik antall barn',
    },
    {
      kode: 'RE-KLAG-M-INNTK',
      navn: 'Klage/Anke endret inntekt',
    },
    {
      kode: 'RE-END-INNTEKTSMELD',
      navn: 'Ny inntektsmelding',
    },
    {
      kode: 'RE-FRDLING',
      navn: 'Nye opplysninger om uttak',
    },
    {
      kode: 'RE-SRTB',
      navn: 'Opplysninger relasjon/barn',
    },
    {
      kode: 'RE-MDL',
      navn: 'Nye opplysninger om medlemskap',
    },
    {
      kode: 'RE-DØD',
      navn: 'Opplysninger død',
    },
    {
      kode: 'RE-HENDELSE-UTFLYTTING',
      navn: 'Utflytting',
    },
    {
      kode: 'RE-FEFAKTA',
      navn: 'Endrede opplysninger',
    },
    {
      kode: 'FEIL_PRAKSIS_UTSETTELSE',
      navn: 'Feil praksis utsettelse',
    },
    {
      kode: 'REBEREGN-FERIEPENGER',
      navn: 'Omfordel feriepenger',
    },
    {
      kode: 'RE-VEDTAK-PSB',
      navn: 'Pleiepenger',
    },
    {
      kode: 'INFOBREV_PÅMINNELSE',
      navn: 'Informasjonsbrev påminnelse',
    },
    {
      kode: 'FEIL_PRAKSIS_IVERKS_UTSET',
      navn: 'Feil iverksettelse fri utsettelse',
    },
    {
      kode: 'ETTER_KLAGE',
      navn: 'Klage/Anke',
    },
    {
      kode: 'RE-INNTK',
      navn: 'Nye opplysninger om inntekt',
    },
    {
      kode: 'RE-BER-GRUN',
      navn: 'Nye opplysninger om beregning',
    },
    {
      kode: 'RE-MFIP',
      navn: 'Mangler fødselsreg. for uke 26-29',
    },
    {
      kode: 'ENDRE-DEKNINGSGRAD',
      navn: 'Endre dekningsgrad',
    },
    {
      kode: 'BERØRT-BEHANDLING',
      navn: 'Berørt behandling',
    },
    {
      kode: 'RE-TILST-YT-OPPH',
      navn: 'Annen ytelse opphørt',
    },
    {
      kode: 'INFOBREV_BEHANDLING',
      navn: 'Informasjonsbrev',
    },
    {
      kode: 'RE-TILST-YT-INNVIL',
      navn: 'Annen ytelse innvilget',
    },
  ],
  GraderingAvslagÅrsak: [
    {
      kode: '4523',
      navn: '§14-16 første ledd: Avslag gradering - arbeid 100% eller mer',
    },
    {
      kode: '4503',
      navn: '§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor',
    },
    {
      kode: '4504',
      navn: '§14-16 andre ledd: Avslag gradering - gradering før uke 7',
    },
    {
      kode: '4502',
      navn: '§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert',
    },
    {
      kode: '4501',
      navn: '§14-16: Ikke gradering pga. for sen søknad',
    },
  ],
  AktivitetStatus: [
    {
      kode: 'AT_FL_SN',
      navn: 'Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende',
    },
    {
      kode: 'FL',
      navn: 'Frilanser',
    },
    {
      kode: 'BA',
      navn: 'Brukers andel',
    },
    {
      kode: 'MS',
      navn: 'Militær eller sivil',
    },
    {
      kode: 'AT',
      navn: 'Arbeidstaker',
    },
    {
      kode: 'KUN_YTELSE',
      navn: 'Kun ytelse',
    },
    {
      kode: 'SN',
      navn: 'Selvstendig næringsdrivende',
    },
    {
      kode: 'AAP',
      navn: 'Arbeidsavklaringspenger',
    },
    {
      kode: 'AT_SN',
      navn: 'Kombinert arbeidstaker og selvstendig næringsdrivende',
    },
    {
      kode: 'TY',
      navn: 'Tilstøtende ytelse',
    },
    {
      kode: 'VENTELØNN_VARTPENGER',
      navn: 'Ventelønn/Vartpenger',
    },
    {
      kode: 'FL_SN',
      navn: 'Kombinert frilanser og selvstendig næringsdrivende',
    },
    {
      kode: 'DP',
      navn: 'Dagpenger',
    },
    {
      kode: 'AT_FL',
      navn: 'Kombinert arbeidstaker og frilanser',
    },
  ],
  RevurderingVarslingÅrsak: [
    {
      kode: 'AKTIVITET',
      navn: 'Mors aktivitetskrav er ikke oppfylt',
    },
    {
      kode: 'JOBBUTLAND',
      navn: 'Arbeid i utlandet',
    },
    {
      kode: 'BARNIKKEREG',
      navn: 'Barn er ikke registrert i folkeregisteret',
    },
    {
      kode: 'UTVANDRET',
      navn: 'Bruker er registrert utflyttet',
    },
    {
      kode: 'JOBBFULLTID',
      navn: 'Arbeid i stønadsperioden',
    },
    {
      kode: 'JOBB6MND',
      navn: 'Opptjeningsvilkår ikke oppfylt',
    },
    {
      kode: 'IKKEOPPTJENT',
      navn: 'Beregningsgrunnlaget er under 1/2 G',
    },
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'IKKEOPPHOLD',
      navn: 'Ikke lovlig opphold',
    },
  ],
  UttakArbeidType: [
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'ORDINÆRT_ARBEID',
      navn: 'Ordinært arbeid',
    },
    {
      kode: 'FRILANS',
      navn: 'Frilans',
    },
    {
      kode: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      navn: 'Selvstendig næringsdrivende',
    },
  ],
  KonsekvensForYtelsen: [
    {
      kode: 'ENDRING_I_UTTAK',
      navn: 'Endring i uttak',
    },
    {
      kode: 'ENDRING_I_FORDELING_AV_YTELSEN',
      navn: 'Endring i fordeling av ytelsen',
    },
    {
      kode: 'INGEN_ENDRING',
      navn: 'Ingen endring',
    },
    {
      kode: 'FORELDREPENGER_OPPHØRER',
      navn: 'Foreldrepenger opphører',
    },
    {
      kode: 'ENDRING_I_BEREGNING',
      navn: 'Endring i beregning',
    },
  ],
  AktivitetskravPermisjonType: [
    {
      kode: 'FORELDREPENGER',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'UTDANNING',
      navn: 'Utdanning',
    },
    {
      kode: 'PERMITTERING',
      navn: 'Permittering',
    },
    {
      kode: 'ANNEN_PERMISJON',
      navn: 'Annen permisjon',
    },
  ],
  AdresseType: [
    {
      kode: 'POSTADRESSE_UTLAND',
      navn: 'Kontaktadresse utland',
    },
    {
      kode: 'MIDLERTIDIG_POSTADRESSE_NORGE',
      navn: 'Oppholdsadresse',
    },
    {
      kode: 'BOSTEDSADRESSE_UTLAND',
      navn: 'Bostedsadresse utland',
    },
    {
      kode: 'UKJENT_ADRESSE',
      navn: 'Ukjent adresse',
    },
    {
      kode: 'BOSTEDSADRESSE',
      navn: 'Bostedsadresse',
    },
    {
      kode: 'MIDLERTIDIG_POSTADRESSE_UTLAND',
      navn: 'Oppholdsadresse utland',
    },
    {
      kode: 'POSTADRESSE',
      navn: 'Kontaktadresse',
    },
  ],
  SivilstandType: [
    {
      kode: 'ENKE',
      navn: 'Enke/-mann',
    },
    {
      kode: 'SKPA',
      navn: 'Skilt partner',
    },
    {
      kode: 'GLAD',
      navn: 'Gift, lever adskilt',
    },
    {
      kode: 'SAMB',
      navn: 'Samboer',
    },
    {
      kode: 'SEPR',
      navn: 'Separert',
    },
    {
      kode: 'SEPA',
      navn: 'Separert partner',
    },
    {
      kode: 'GIFT',
      navn: 'Gift',
    },
    {
      kode: 'NULL',
      navn: 'Uoppgitt',
    },
    {
      kode: 'REPA',
      navn: 'Registrert partner',
    },
    {
      kode: 'SKIL',
      navn: 'Skilt',
    },
    {
      kode: 'GJPA',
      navn: 'Gjenlevende partner',
    },
    {
      kode: 'UGIF',
      navn: 'Ugift',
    },
  ],
  Inntektskategori: [
    {
      kode: 'ARBEIDSAVKLARINGSPENGER',
      navn: 'Arbeidsavklaringspenger',
    },
    {
      kode: 'FRILANSER',
      navn: 'Frilanser',
    },
    {
      kode: 'DAGPENGER',
      navn: 'Dagpenger',
    },
    {
      kode: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      navn: 'Selvstendig næringsdrivende',
    },
    {
      kode: 'FISKER',
      navn: 'Selvstendig næringsdrivende - fisker',
    },
    {
      kode: 'ARBEIDSTAKER_UTEN_FERIEPENGER',
      navn: 'Arbeidstaker uten feriepenger',
    },
    {
      kode: 'JORDBRUKER',
      navn: 'Selvstendig næringsdrivende - jordbruker',
    },
    {
      kode: 'SJØMANN',
      navn: 'Arbeidstaker - Sjømann',
    },
    {
      kode: 'DAGMAMMA',
      navn: 'Selvstendig næringsdrivende - dagmamma',
    },
    {
      kode: 'ARBEIDSTAKER',
      navn: 'Arbeidstaker',
    },
  ],
  SkjermlenkeType: [
    {
      kode: 'FAKTA_OM_VERGE',
      navn: 'Fakta om verge/fullmektig',
    },
    {
      kode: 'FAKTA_OM_OPPTJENING',
      navn: 'Fakta om opptjening',
    },
    {
      kode: 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON',
      navn: 'Fakta om arbeidsforhold med permisjon uten sluttdato',
    },
    {
      kode: 'SOEKNADSFRIST',
      navn: 'Søknadsfrist',
    },
    {
      kode: 'TILKJENT_YTELSE',
      navn: 'Tilkjent ytelse',
    },
    {
      kode: 'FAKTA_OM_MEDLEMSKAP',
      navn: 'Fakta om medlemskap',
    },
    {
      kode: 'PUNKT_FOR_FORELDREANSVAR',
      navn: 'Foreldreansvar',
    },
    {
      kode: 'FAKTA_OM_BEREGNING',
      navn: 'Fakta om beregning',
    },
    {
      kode: 'FAKTA_OMSORG_OG_RETT',
      navn: 'Fakta om omsorg og rett',
    },
    {
      kode: 'PUNKT_FOR_SVP_INNGANG',
      navn: 'Fakta om fødsel og tilrettelegging',
    },
    {
      kode: 'FAKTA_OM_UTTAK',
      navn: 'Fakta om uttak',
    },
    {
      kode: 'BEREGNING_ENGANGSSTOENAD',
      navn: 'Beregning',
    },
    {
      kode: 'FAKTA_OM_SIMULERING',
      navn: 'Simulering',
    },
    {
      kode: 'PUNKT_FOR_MEDLEMSKAP_LØPENDE',
      navn: 'Løpende medlemskap',
    },
    {
      kode: 'FORMKRAV_KLAGE_NFP',
      navn: 'Formkrav klage NFP',
    },
    {
      kode: 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR',
      navn: 'Fakta om omsorg og foreldreansvar',
    },
    {
      kode: 'OPPLYSNINGSPLIKT',
      navn: 'Opplysningsplikt',
    },
    {
      kode: 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING',
      navn: 'Fakta om arbeid og inntekt',
    },
    {
      kode: 'FAKTA_UTTAK',
      navn: 'Fakta uttak',
    },
    {
      kode: 'FAKTA_OM_UTTAK_DOKUMENTASJON',
      navn: 'Vurder dokumentasjon',
    },
    {
      kode: 'FAKTA_FOR_OMSORG',
      navn: 'Fakta om omsorg',
    },
    {
      kode: 'FORMKRAV_KLAGE_KA',
      navn: 'Formkrav klage KA',
    },
    {
      kode: 'BEREGNING_FORELDREPENGER',
      navn: 'Beregning',
    },
    {
      kode: 'PUNKT_FOR_OMSORG',
      navn: 'Omsorg',
    },
    {
      kode: 'VURDER_FARESIGNALER',
      navn: 'Vurder faresignaler',
    },
    {
      kode: 'KONTROLL_AV_SAKSOPPLYSNINGER',
      navn: 'Fakta om saken',
    },
    {
      kode: 'VEDTAK',
      navn: 'Vedtak',
    },
    {
      kode: 'PUNKT_FOR_ADOPSJON',
      navn: 'Adopsjon',
    },
    {
      kode: 'BESTEBEREGNING',
      navn: 'Besteberegning',
    },
    {
      kode: 'FAKTA_OM_ARBEIDSFORHOLD',
      navn: 'Fakta om arbeidsforhold',
    },
    {
      kode: 'PUNKT_FOR_FOEDSEL',
      navn: 'Fødsel',
    },
    {
      kode: 'KLAGE_BEH_NK',
      navn: 'Klageresultat Klageinstansen',
    },
    {
      kode: 'FAKTA_OM_FOEDSEL',
      navn: 'Fakta om fødsel',
    },
    {
      kode: 'FAKTA_OM_ADOPSJON',
      navn: 'Fakta om adopsjon',
    },
    {
      kode: 'PUNKT_FOR_MEDLEMSKAP',
      navn: 'Medlemskap',
    },
    {
      kode: 'PUNKT_FOR_OPPTJENING',
      navn: 'Opptjening',
    },
    {
      kode: 'UTLAND',
      navn: 'Endret utland',
    },
    {
      kode: 'FAKTA_OM_AKTIVITETSKRAV',
      navn: 'Fakta om aktivitetskrav',
    },
    {
      kode: 'ANKE_VURDERING',
      navn: 'Anke vurdering',
    },
    {
      kode: 'ANKE_MERKNADER',
      navn: 'Anke merknader',
    },
    {
      kode: 'KLAGE_BEH_NFP',
      navn: 'Klageresultat NFP',
    },
    {
      kode: 'PUNKT_FOR_SVANGERSKAPSPENGER',
      navn: 'Svangerskapspenger',
    },
    {
      kode: 'FAKTA_FOR_OPPTJENING',
      navn: 'Fakta om opptjening',
    },
    {
      kode: 'FAKTA_OM_FORDELING',
      navn: 'Fakta om fordeling',
    },
    {
      kode: 'UTTAK',
      navn: 'Uttak',
    },
  ],
  FaktaOmBeregningTilfelle: [
    {
      kode: 'VURDER_MOTTAR_YTELSE',
      navn: 'Vurder om søker mottar ytelse for aktivitet.',
    },
    {
      kode: 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT',
      navn: 'Vurder refusjonskrav fremsatt for sent skal være med i beregning.',
    },
    {
      kode: 'FASTSETT_BG_KUN_YTELSE',
      navn: 'Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold',
    },
    {
      kode: 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG',
      navn: 'Fastsette endring i beregningsgrunnlag',
    },
    {
      kode: 'VURDER_LØNNSENDRING',
      navn: 'Vurder lønnsendring',
    },
    {
      kode: 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING',
      navn: 'Fastsett månedslønn arbeidstaker uten inntektsmelding',
    },
    {
      kode: 'VURDER_ETTERLØNN_SLUTTPAKKE',
      navn: 'Vurder om søker har etterlønn og/eller sluttpakke',
    },
    {
      kode: 'VURDER_MILITÆR_SIVILTJENESTE',
      navn: 'Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden.',
    },
    {
      kode: 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING',
      navn: 'Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding',
    },
    {
      kode: 'VURDER_SN_NY_I_ARBEIDSLIVET',
      navn: 'Vurder om søker er SN og ny i arbeidslivet',
    },
    {
      kode: 'TILSTØTENDE_YTELSE',
      navn: 'Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse',
    },
    {
      kode: 'VURDER_BESTEBEREGNING',
      navn: 'Vurder om søker skal ha besteberegning',
    },
    {
      kode: 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON',
      navn: 'Vurder om bruker er arbeidstaker og frilanser i samme organisasjon',
    },
    {
      kode: 'VURDER_NYOPPSTARTET_FL',
      navn: 'Vurder nyoppstartet frilans',
    },
    {
      kode: 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE',
      navn: 'Fastsett besteberegning fødende kvinne',
    },
    {
      kode: 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD',
      navn: 'Vurder tidsbegrenset arbeidsforhold',
    },
    {
      kode: 'FASTSETT_ETTERLØNN_SLUTTPAKKE',
      navn: 'Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel',
    },
    {
      kode: 'FASTSETT_MAANEDSINNTEKT_FL',
      navn: 'Fastsett månedsinntekt frilans',
    },
  ],
  OppholdÅrsak: [
    {
      kode: 'UTTAK_FEDREKVOTE_ANNEN_FORELDER',
      navn: 'Annen forelder har uttak av Fedrekvote',
    },
    {
      kode: 'UTTAK_MØDREKVOTE_ANNEN_FORELDER',
      navn: 'Annen forelder har uttak av Mødrekvote',
    },
    {
      kode: 'UTTAK_FELLESP_ANNEN_FORELDER',
      navn: 'Annen forelder har uttak av Fellesperiode',
    },
    {
      kode: 'UTTAK_FORELDREPENGER_ANNEN_FORELDER',
      navn: 'Annen forelder har uttak av Foreldrepenger',
    },
  ],
  UttakPeriodeType: [
    {
      kode: 'FORELDREPENGER',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'FEDREKVOTE',
      navn: 'Fedrekvoten',
    },
    {
      kode: 'MØDREKVOTE',
      navn: 'Mødrekvoten',
    },
    {
      kode: 'FORELDREPENGER_FØR_FØDSEL',
      navn: 'Foreldrepenger før fødsel',
    },
    {
      kode: 'FELLESPERIODE',
      navn: 'Fellesperioden',
    },
  ],
  KlageAvvistÅrsak: [
    {
      kode: 'KLAGE_UGYLDIG',
      navn: 'Klagen er ugyldig',
    },
    {
      kode: 'KLAGET_FOR_SENT',
      navn: 'Bruker har klaget for sent',
    },
    {
      kode: 'IKKE_PAKLAGD_VEDTAK',
      navn: 'Ikke påklagd et vedtak',
    },
    {
      kode: 'IKKE_KONKRET',
      navn: 'Klagen er ikke konkret',
    },
    {
      kode: 'KLAGER_IKKE_PART',
      navn: 'Klager er ikke part',
    },
    {
      kode: 'IKKE_SIGNERT',
      navn: 'Klagen er ikke signert',
    },
  ],
  BehandlingResultatType: [
    {
      kode: 'KLAGE_OMGJORT_UGUNST',
      navn: 'Omgjort til ugunst',
    },
    {
      kode: 'ANKE_MEDHOLD',
      navn: 'Medhold',
    },
    {
      kode: 'IKKE_FASTSATT',
      navn: 'Ikke fastsatt',
    },
    {
      kode: 'INGEN_ENDRING',
      navn: 'Ingen endring',
    },
    {
      kode: 'FORELDREPENGER_SENERE',
      navn: 'Sak er endret',
    },
    {
      kode: 'AVSLÅTT',
      navn: 'Avslått',
    },
    {
      kode: 'HENLAGT_INNSYN_TRUKKET',
      navn: 'Henlagt, innsynskrav er trukket',
    },
    {
      kode: 'KLAGE_YTELSESVEDTAK_OPPHEVET',
      navn: 'Ytelsesvedtak opphevet',
    },
    {
      kode: 'ANKE_OPPHEVE_OG_HJEMSENDE',
      navn: 'Vedtak opphevet',
    },
    {
      kode: 'INNSYN_INNVILGET',
      navn: 'Innsynskrav er innvilget',
    },
    {
      kode: 'ANKE_DELVIS_MEDHOLD',
      navn: 'Delvis medhold',
    },
    {
      kode: 'KLAGE_YTELSESVEDTAK_STADFESTET',
      navn: 'Ytelsesvedtak stadfestet',
    },
    {
      kode: 'ANKE_AVVIST',
      navn: 'Anke er avvist',
    },
    {
      kode: 'HENLAGT_BRUKER_DØD',
      navn: 'Henlagt, brukeren er død',
    },
    {
      kode: 'INNSYN_DELVIS_INNVILGET',
      navn: 'Innsynskrav er delvis innvilget',
    },
    {
      kode: 'HENLAGT_KLAGE_TRUKKET',
      navn: 'Henlagt, klagen er trukket',
    },
    {
      kode: 'HJEMSENDE_UTEN_OPPHEVE',
      navn: 'Behandlingen er hjemsendt',
    },
    {
      kode: 'MERGET_OG_HENLAGT',
      navn: 'Mottatt ny søknad',
    },
    {
      kode: 'KLAGE_AVVIST',
      navn: 'Klage er avvist',
    },
    {
      kode: 'OPPHØR',
      navn: 'Opphør',
    },
    {
      kode: 'INNVILGET',
      navn: 'Innvilget',
    },
    {
      kode: 'INNSYN_AVVIST',
      navn: 'Innsynskrav er avvist',
    },
    {
      kode: 'ANKE_YTELSESVEDTAK_STADFESTET',
      navn: 'Vedtak stadfestet',
    },
    {
      kode: 'FORELDREPENGER_ENDRET',
      navn: 'Sak er endret',
    },
    {
      kode: 'HENLAGT_FEILOPPRETTET',
      navn: 'Henlagt, søknaden er feilopprettet',
    },
    {
      kode: 'KLAGE_DELVIS_MEDHOLD',
      navn: 'Delvis medhold',
    },
    {
      kode: 'HENLAGT_SØKNAD_TRUKKET',
      navn: 'Henlagt, søknaden er trukket',
    },
    {
      kode: 'HENLAGT_ANKE_TRUKKET',
      navn: 'Henlagt, anken er trukket',
    },
    {
      kode: 'HENLAGT_SØKNAD_MANGLER',
      navn: 'Henlagt, søknad mangler',
    },
    {
      kode: 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET',
      navn: 'Tilbakekrevingsvedtak stadfestet',
    },
    {
      kode: 'ANKE_OMGJORT_UGUNST',
      navn: 'Omgjort til ugunst',
    },
    {
      kode: 'KLAGE_MEDHOLD',
      navn: 'Medhold',
    },
    {
      kode: 'MANGLER_BEREGNINGSREGLER',
      navn: 'Mangler beregningsregler',
    },
    {
      kode: 'ANKE_HJEMSENDE_UTEN_OPPHEV',
      navn: 'Behandlingen er hjemsendt',
    },
  ],
  VergeType: [
    {
      kode: 'VOKSEN',
      navn: 'Verge for voksen',
    },
    {
      kode: 'FBARN',
      navn: 'Verge for foreldreløst barn under 18 år',
    },
    {
      kode: 'BARN',
      navn: 'Verge for barn under 18 år',
    },
    {
      kode: 'ADVOKAT',
      navn: 'Advokat/advokatfullmektig',
    },
    {
      kode: 'ANNEN_F',
      navn: 'Annen fullmektig',
    },
  ],
  OverføringÅrsak: [
    {
      kode: 'IKKE_RETT_ANNEN_FORELDER',
      navn: 'Den andre foreldren har ikke rett på foreldrepenger',
    },
    {
      kode: 'ALENEOMSORG',
      navn: 'Aleneomsorg for barnet/barna',
    },
    {
      kode: 'SYKDOM_ANNEN_FORELDER',
      navn: 'Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna',
    },
    {
      kode: 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER',
      navn: 'Den andre foreldren er innlagt i helseinstitusjon',
    },
  ],
  FamilieHendelseType: [
    {
      kode: 'OMSRGO',
      navn: 'Omsorgoverdragelse',
    },
    {
      kode: 'TERM',
      navn: 'Termin',
    },
    {
      kode: 'ADPSJN',
      navn: 'Adopsjon',
    },
    {
      kode: 'FODSL',
      navn: 'Fødsel',
    },
  ],
  KlageHjemmel: [
    {
      kode: '14-13',
      navn: '14-13 Fars uttak',
    },
    {
      kode: '8-2',
      navn: '8-2 Opptjeningstid',
    },
    {
      kode: '14-06',
      navn: '14-6 Opptjening',
    },
    {
      kode: '14-15',
      navn: '14-15 Far aleneomsorg',
    },
    {
      kode: '22-13',
      navn: '22-13 Fremsetning av krav',
    },
    {
      kode: '883-5',
      navn: 'EØS 883/2004 artikkel 5',
    },
    {
      kode: '14-10',
      navn: '14-10 Uttaksperiodene',
    },
    {
      kode: '14-04',
      navn: '14-4 Svangerskapspenger',
    },
    {
      kode: '14-09',
      navn: '14-9 Stønadsperioden',
    },
    {
      kode: '14-11',
      navn: '14-11 Utsettelse',
    },
    {
      kode: '14-12',
      navn: '14-12 Uttak av kvoter',
    },
    {
      kode: '21-3',
      navn: '21-3 Opplysningsplikt',
    },
    {
      kode: '14-05',
      navn: '14-5 Rett på foreldrepenger',
    },
    {
      kode: '14-14',
      navn: '14-14 Bare far har rett',
    },
    {
      kode: '14-07',
      navn: '14-7 Beregning',
    },
    {
      kode: '883-6',
      navn: 'EØS 883/2004 artikkel 6',
    },
    {
      kode: '14-02',
      navn: '14-2 Medlemskap',
    },
    {
      kode: '22-15',
      navn: '22-15 Tilbakekreving',
    },
    {
      kode: '14-17',
      navn: '14-17 Rett på engangsstønad',
    },
    {
      kode: '14-16',
      navn: '14-16 Gradert uttak',
    },
  ],
  VilkårType: [
    {
      kode: 'FP_VK_2',
      navn: 'Medlemskapsvilkåret',
    },
    {
      kode: 'FP_VK_3',
      navn: 'Søknadsfristvilkåret',
    },
    {
      kode: 'FP_VK_1',
      navn: 'Fødselsvilkår Mor',
    },
    {
      kode: 'FP_VK_21',
      navn: 'Opptjeningsperiode',
    },
    {
      kode: 'FP_VK_23',
      navn: 'Opptjeningsvilkåret',
    },
    {
      kode: 'FP_VK_41',
      navn: 'Beregning',
    },
    {
      kode: 'FP_VK_2_F',
      navn: 'Medlemskapsvilkåret',
    },
    {
      kode: 'SVP_VK_1',
      navn: 'Svangerskapspengervilkåret',
    },
    {
      kode: 'FP_VK_11',
      navn: 'Fødselsvilkår for far/medmor',
    },
    {
      kode: 'FP_VK_2_L',
      navn: 'Løpende medlemskapsvilkår',
    },
    {
      kode: 'FP_VK_34',
      navn: 'Søkers opplysningsplikt',
    },
  ],
  FaresignalVurdering: [
    {
      kode: 'INNVIRKNING',
      navn: 'Faresignalene vurderes som reelle',
    },
    {
      kode: 'AVSLAG_FARESIGNAL',
      navn: 'Saken er avslått på grunn av faresignalene',
    },
    {
      kode: 'AVSLAG_ANNET',
      navn: 'Saken er avslått av andre årsaker',
    },
    {
      kode: 'INGEN_INNVIRKNING',
      navn: 'Faresignalene vurderes ikke som reelle',
    },
    {
      kode: 'INNVILGET_REDUSERT',
      navn: 'Saken er innvilget med redusert beregningsgrunnlag',
    },
    {
      kode: 'INNVILGET_UENDRET',
      navn: 'Saken er innvilget uten at faresignalene påvirket utfallet',
    },
  ],
  ArbeidType: [
    {
      kode: 'FRILANSER',
      navn: 'Frilanser, samlet aktivitet',
    },
    {
      kode: 'LØNN_UNDER_UTDANNING',
      navn: 'Lønn under utdanning',
    },
    {
      kode: 'MILITÆR_ELLER_SIVILTJENESTE',
      navn: 'Militær eller siviltjeneste',
    },
    {
      kode: 'VENTELØNN_VARTPENGER',
      navn: 'Ventelønn eller vartpenger',
    },
    {
      kode: 'ETTERLØNN_SLUTTPAKKE',
      navn: 'Etterlønn eller sluttpakke',
    },
    {
      kode: 'UTENLANDSK_ARBEIDSFORHOLD',
      navn: 'Arbeid i utlandet',
    },
  ],
  KlageMedholdÅrsak: [
    {
      kode: 'ULIK_REGELVERKSTOLKNING',
      navn: 'Feil lovanvendelse',
    },
    {
      kode: 'PROSESSUELL_FEIL',
      navn: 'Saksbehandlingsfeil',
    },
    {
      kode: 'ULIK_VURDERING',
      navn: 'Ulik skjønnsvurdering',
    },
    {
      kode: 'NYE_OPPLYSNINGER',
      navn: 'Nytt faktum',
    },
  ],
  Region: [
    {
      kode: 'NORDEN',
      navn: 'Nordisk',
    },
    {
      kode: 'EOS',
      navn: 'EU/EØS',
    },
    {
      kode: 'ANNET',
      navn: '3.landsborger',
    },
  ],
  OmsorgsovertakelseVilkårType: [
    {
      kode: 'FP_VK_8F',
      navn: 'Foreldreansvar §14-5 andre ledd',
    },
    {
      kode: 'FP_VK_5',
      navn: 'Omsorg §14-17 tredje ledd',
    },
    {
      kode: 'FP_VK_8',
      navn: 'Foreldreansvar §14-17 andre ledd',
    },
    { kode: 'FP_VK_16S', navn: 'Stebarnsadopsjon §14-5 tredje ledd' },
    { kode: 'FP_VK_16', navn: 'Adopsjon §14-5 første ledd' },
    {
      kode: 'FP_VK_4',
      navn: 'Adopsjon §14-17 første ledd',
    },
    {
      kode: 'FP_VK_33',
      navn: 'Foreldreansvar §14-17 fjerde ledd',
    },
  ],
  FordelingPeriodeKilde: [
    {
      kode: 'ANDRE_NAV_VEDTAK',
      navn: 'Vedtak andre ytelser',
    },
    {
      kode: 'SØKNAD',
      navn: 'Søknad',
    },
    {
      kode: 'TIDLIGERE_VEDTAK',
      navn: 'Vedtak',
    },
    {
      kode: 'SAKSBEHANDLER',
      navn: 'Saksbehandler',
    },
  ],
  FagsakMarkering: [
    {
      kode: 'SELVSTENDIG_NÆRING',
      navn: 'Næringsdrivende',
    },
    {
      kode: 'SAMMENSATT_KONTROLL',
      navn: 'Sammensatt kontroll',
    },
    {
      kode: 'EØS_BOSATT_NORGE',
      navn: 'EØS bosatt Norge',
    },
    {
      kode: 'PRAKSIS_UTSETTELSE',
      navn: 'Praksis utsettelse',
    },
    {
      kode: 'BARE_FAR_RETT',
      navn: 'Bare far har rett',
    },
    {
      kode: 'DØD_DØDFØDSEL',
      navn: 'Død eller dødfødsel',
    },
    {
      kode: 'BOSATT_UTLAND',
      navn: 'Bosatt utland',
    },
  ],
  Arbeidskategori: [
    {
      kode: 'INAKTIV',
      navn: 'Inaktiv',
    },
    {
      kode: 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER',
      navn: 'Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker',
    },
    {
      kode: 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER',
      navn: 'Kombinasjon arbeidstaker og frilanser',
    },
    {
      kode: 'JORDBRUKER',
      navn: 'Selvstendig næringsdrivende - Jordbruker',
    },
    {
      kode: 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER',
      navn: 'Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker',
    },
    {
      kode: 'ARBEIDSTAKER',
      navn: 'Arbeidstaker',
    },
    {
      kode: 'FRILANSER',
      navn: 'Frilanser',
    },
    {
      kode: 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER',
      navn: 'Kombinasjon arbeidstaker og dagpenger',
    },
    {
      kode: 'DAGMAMMA',
      navn: 'Selvstendig næringsdrivende - Dagmamma',
    },
    {
      kode: 'SJØMANN',
      navn: 'Arbeidstaker - sjømann',
    },
    {
      kode: 'UGYLDIG',
      navn: 'Ugyldig',
    },
    {
      kode: 'DAGPENGER',
      navn: 'Tilstøtende ytelse - dagpenger',
    },
    {
      kode: 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE',
      navn: 'Kombinasjon arbeidstaker og selvstendig næringsdrivende',
    },
    {
      kode: 'SELVSTENDIG_NÆRINGSDRIVENDE',
      navn: 'Selvstendig næringsdrivende',
    },
    {
      kode: 'FISKER',
      navn: 'Selvstendig næringsdrivende - Fisker',
    },
  ],
  VurderÅrsak: [
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'FEIL_REGEL',
      navn: 'Feil regelforståelse',
    },
    {
      kode: 'UTREDNING',
      navn: 'Utredning',
    },
    {
      kode: 'FEIL_LOV',
      navn: 'Regel-/lovanvendelse',
    },
    {
      kode: 'SKJØNN',
      navn: 'Skjønn',
    },
    {
      kode: 'SAKSFLYT',
      navn: 'Saksflyt',
    },
    {
      kode: 'BEGRUNNELSE',
      navn: 'Begrunnelse',
    },
    {
      kode: 'FEIL_FAKTA',
      navn: 'Fakta',
    },
  ],
  Landkoder: [
    {
      kode: 'SGP',
      navn: 'SINGAPORE',
    },
    {
      kode: 'GNB',
      navn: 'GUINEA-BISSAU',
    },
    {
      kode: 'NCL',
      navn: 'NY-KALEDONIA',
    },
    {
      kode: 'GHA',
      navn: 'GHANA',
    },
    {
      kode: 'DEU',
      navn: 'TYSKLAND',
    },
    {
      kode: 'ANT',
      navn: 'DE NEDERLANDSKE ANTILLENE',
    },
    {
      kode: 'SPM',
      navn: 'ST-PIERRE OG MIQUELON',
    },
    {
      kode: 'CUB',
      navn: 'CUBA',
    },
    {
      kode: 'NGA',
      navn: 'NIGERIA',
    },
    {
      kode: 'UGA',
      navn: 'UGANDA',
    },
    {
      kode: 'BVT',
      navn: 'BOUVETØYA',
    },
    {
      kode: 'XXK',
      navn: 'KOSOVO',
    },
    {
      kode: 'MDG',
      navn: 'MADAGASKAR',
    },
    {
      kode: 'VAT',
      navn: 'VATIKANSTATEN',
    },
    {
      kode: 'PRK',
      navn: 'NORD-KOREA',
    },
    {
      kode: 'NZL',
      navn: 'NEW ZEALAND',
    },
    {
      kode: 'MCO',
      navn: 'MONACO',
    },
    {
      kode: 'GUF',
      navn: 'FRANSK GUYANA',
    },
    {
      kode: 'ETH',
      navn: 'ETIOPIA',
    },
    {
      kode: 'MNP',
      navn: 'NORD-MARIANENE',
    },
    {
      kode: 'BMU',
      navn: 'BERMUDA',
    },
    {
      kode: 'PSE',
      navn: 'DET PALESTINSKE OMRÅDET',
    },
    {
      kode: 'PYF',
      navn: 'FRANSK POLYNESIA',
    },
    {
      kode: 'FLK',
      navn: 'FALKLANDSØYENE',
    },
    {
      kode: 'NER',
      navn: 'NIGER',
    },
    {
      kode: 'SSD',
      navn: 'SØR-SUDAN',
    },
    {
      kode: 'PLW',
      navn: 'PALAU',
    },
    {
      kode: 'HRV',
      navn: 'KROATIA',
    },
    {
      kode: 'ALA',
      navn: 'ÅLAND',
    },
    {
      kode: 'ZWE',
      navn: 'ZIMBABWE',
    },
    {
      kode: 'SRB',
      navn: 'SERBIA',
    },
    {
      kode: 'SHN',
      navn: 'ST. HELENA',
    },
    {
      kode: 'TTO',
      navn: 'TRINIDAD OG TOBAGO',
    },
    {
      kode: 'THA',
      navn: 'THAILAND',
    },
    {
      kode: 'KGZ',
      navn: 'KIRGISISTAN',
    },
    {
      kode: 'MDV',
      navn: 'MALDIVENE',
    },
    {
      kode: 'TWN',
      navn: 'TAIWAN',
    },
    {
      kode: 'BEL',
      navn: 'BELGIA',
    },
    {
      kode: 'ARM',
      navn: 'ARMENIA',
    },
    {
      kode: 'SYR',
      navn: 'SYRIA',
    },
    {
      kode: 'WSM',
      navn: 'SAMOA',
    },
    {
      kode: 'VCT',
      navn: 'ST. VINCENT',
    },
    {
      kode: 'IND',
      navn: 'INDIA',
    },
    {
      kode: 'ITA',
      navn: 'ITALIA',
    },
    {
      kode: 'SLE',
      navn: 'SIERRA LEONE',
    },
    {
      kode: 'CHE',
      navn: 'SVEITS',
    },
    {
      kode: 'MHL',
      navn: 'MARSHALLØYENE',
    },
    {
      kode: 'URY',
      navn: 'URUGUAY',
    },
    {
      kode: 'FJI',
      navn: 'FIJI',
    },
    {
      kode: 'IMN',
      navn: 'ISLE OF MAN',
    },
    {
      kode: 'CSK',
      navn: 'TSJEKKOSLOVAKIA',
    },
    {
      kode: 'SGS',
      navn: 'SØR-GEORGIA OG SØR-SANDWICHØYE',
    },
    {
      kode: 'ASM',
      navn: 'AM. SAMOA',
    },
    {
      kode: 'BGR',
      navn: 'BULGARIA',
    },
    {
      kode: 'MYT',
      navn: 'MAYOTTE',
    },
    {
      kode: 'DNK',
      navn: 'DANMARK',
    },
    {
      kode: 'IRL',
      navn: 'IRLAND',
    },
    {
      kode: 'LSO',
      navn: 'LESOTHO',
    },
    {
      kode: 'IRN',
      navn: 'IRAN',
    },
    {
      kode: 'GLP',
      navn: 'GUADELOUPE',
    },
    {
      kode: 'ABW',
      navn: 'ARUBA',
    },
    {
      kode: 'BIH',
      navn: 'BOSNIA-HERCEGOVINA',
    },
    {
      kode: 'MTQ',
      navn: 'MARTINIQUE',
    },
    {
      kode: 'PRI',
      navn: 'PUERTO RICO',
    },
    {
      kode: 'HMD',
      navn: 'HEARD OG MCDONALD ØYENE',
    },
    {
      kode: 'IOT',
      navn: 'BRITISK-INDISKE HAV',
    },
    {
      kode: 'SLB',
      navn: 'SALOMONØYENE',
    },
    {
      kode: 'KAZ',
      navn: 'KAZAKHSTAN',
    },
    {
      kode: 'MEX',
      navn: 'MEXICO',
    },
    {
      kode: 'HKG',
      navn: 'HONGKONG',
    },
    {
      kode: 'LIE',
      navn: 'LIECHTENSTEIN',
    },
    {
      kode: 'BHS',
      navn: 'BAHAMAS',
    },
    {
      kode: 'UKR',
      navn: 'UKRAINA',
    },
    {
      kode: 'BES',
      navn: 'BONAIRE, SINT EUSTATIUS, SABA',
    },
    {
      kode: 'RWA',
      navn: 'RWANDA',
    },
    {
      kode: 'ARE',
      navn: 'DE ARABISKE EMIRATER',
    },
    {
      kode: 'EGY',
      navn: 'EGYPT',
    },
    {
      kode: 'SXM',
      navn: 'SINT MAARTEN',
    },
    {
      kode: 'GRC',
      navn: 'HELLAS',
    },
    {
      kode: 'ROU',
      navn: 'ROMANIA',
    },
    {
      kode: 'SUR',
      navn: 'SURINAM',
    },
    {
      kode: 'MYS',
      navn: 'MALAYSIA',
    },
    {
      kode: 'OMN',
      navn: 'OMAN',
    },
    {
      kode: 'LBY',
      navn: 'LIBYA',
    },
    {
      kode: 'FRO',
      navn: 'FÆRØYENE',
    },
    {
      kode: 'ISR',
      navn: 'ISRAEL',
    },
    {
      kode: 'IDN',
      navn: 'INDONESIA',
    },
    {
      kode: 'SMR',
      navn: 'SAN MARINO',
    },
    {
      kode: 'MKD',
      navn: 'MAKEDONIA',
    },
    {
      kode: 'SWZ',
      navn: 'SWAZILAND',
    },
    {
      kode: 'DZA',
      navn: 'ALGERIE',
    },
    {
      kode: 'MWI',
      navn: 'MALAWI',
    },
    {
      kode: 'STP',
      navn: 'SAO TOME OG PRINCIPE',
    },
    {
      kode: 'VIR',
      navn: 'JOMFRUØYENE AM.',
    },
    {
      kode: 'CPV',
      navn: 'KAPP VERDE',
    },
    {
      kode: 'PAK',
      navn: 'PAKISTAN',
    },
    {
      kode: 'ECU',
      navn: 'ECUADOR',
    },
    {
      kode: 'PRT',
      navn: 'PORTUGAL',
    },
    {
      kode: 'COD',
      navn: 'KONGO, DEN DEMOKR. REPUBL',
    },
    {
      kode: 'MMR',
      navn: 'MYANMAR (BURMA)',
    },
    {
      kode: 'ZAF',
      navn: 'SØR-AFRIKA',
    },
    {
      kode: 'USA',
      navn: 'USA',
    },
    {
      kode: 'SVN',
      navn: 'SLOVENIA',
    },
    {
      kode: 'FSM',
      navn: 'MIKRONESIAFØD.',
    },
    {
      kode: 'GNQ',
      navn: 'EKVATORIAL-GUINEA',
    },
    {
      kode: 'CHN',
      navn: 'REPUBLIKKEN KINA',
    },
    {
      kode: 'HTI',
      navn: 'HAITI',
    },
    {
      kode: 'NIC',
      navn: 'NICARAGUA',
    },
    {
      kode: 'NAM',
      navn: 'NAMIBIA',
    },
    {
      kode: 'SWE',
      navn: 'SVERIGE',
    },
    {
      kode: 'BRA',
      navn: 'BRASIL',
    },
    {
      kode: 'GMB',
      navn: 'GAMBIA',
    },
    {
      kode: 'WLF',
      navn: 'WALLIS/FUTUNAØYENE',
    },
    {
      kode: 'JAM',
      navn: 'JAMAICA',
    },
    {
      kode: '???',
      navn: 'UOPPGITT/UKJENT',
    },
    {
      kode: 'YEM',
      navn: 'JEMEN',
    },
    {
      kode: 'MAF',
      navn: 'SAINT MARTIN',
    },
    {
      kode: 'NRU',
      navn: 'NAURU',
    },
    {
      kode: 'TKL',
      navn: 'TOKELAU',
    },
    {
      kode: 'AND',
      navn: 'ANDORRA',
    },
    {
      kode: 'SJM',
      navn: 'SVALBARD OG JAN MAYEN',
    },
    {
      kode: 'BEN',
      navn: 'BENIN',
    },
    {
      kode: 'CHL',
      navn: 'CHILE',
    },
    {
      kode: 'SCG',
      navn: 'SERBIA OG MONTENEGRO',
    },
    {
      kode: 'KIR',
      navn: 'KIRIBATI',
    },
    {
      kode: 'VGB',
      navn: 'JOMFRUØYENE BRIT.',
    },
    {
      kode: 'MNE',
      navn: 'MONTENEGRO',
    },
    {
      kode: 'MLI',
      navn: 'MALI',
    },
    {
      kode: 'REU',
      navn: 'REUNION',
    },
    {
      kode: 'BWA',
      navn: 'BOTSWANA',
    },
    {
      kode: 'PCN',
      navn: 'PITCAIRN',
    },
    {
      kode: 'UMI',
      navn: 'MINDRE STILLEHAVSØYER',
    },
    {
      kode: 'TUV',
      navn: 'TUVALU',
    },
    {
      kode: 'LKA',
      navn: 'SRI LANKA',
    },
    {
      kode: 'BDI',
      navn: 'BURUNDI',
    },
    {
      kode: 'AGO',
      navn: 'ANGOLA',
    },
    {
      kode: 'MRT',
      navn: 'MAURITANIA',
    },
    {
      kode: 'MUS',
      navn: 'MAURITIUS',
    },
    {
      kode: 'CYP',
      navn: 'KYPROS',
    },
    {
      kode: 'SYC',
      navn: 'SEYCHELLENE',
    },
    {
      kode: 'COK',
      navn: 'COOKØYENE',
    },
    {
      kode: 'VEN',
      navn: 'VENEZUELA',
    },
    {
      kode: 'ESH',
      navn: 'VEST-SAHARA',
    },
    {
      kode: 'SUN',
      navn: 'SOVJETUNIONEN',
    },
    {
      kode: 'EST',
      navn: 'ESTLAND',
    },
    {
      kode: 'CIV',
      navn: 'ELFENBEINSKYSTEN',
    },
    {
      kode: 'HUN',
      navn: 'UNGARN',
    },
    {
      kode: 'MLT',
      navn: 'MALTA',
    },
    {
      kode: 'COM',
      navn: 'KOMORENE',
    },
    {
      kode: 'NPL',
      navn: 'NEPAL',
    },
    {
      kode: 'CRI',
      navn: 'COSTA RICA',
    },
    {
      kode: 'LVA',
      navn: 'LATVIA',
    },
    {
      kode: 'GUY',
      navn: 'GUYANA',
    },
    {
      kode: 'ALB',
      navn: 'ALBANIA',
    },
    {
      kode: 'NLD',
      navn: 'NEDERLAND',
    },
    {
      kode: 'AIA',
      navn: 'ANGUILLA',
    },
    {
      kode: 'BRN',
      navn: 'BRUNEI',
    },
    {
      kode: 'LCA',
      navn: 'ST. LUCIA',
    },
    {
      kode: 'NOR',
      navn: 'NORGE',
    },
    {
      kode: 'NIU',
      navn: 'NIUE',
    },
    {
      kode: 'DOM',
      navn: 'DEN DOMINIKANSKE REP',
    },
    {
      kode: 'GGY',
      navn: 'GUERNSEY',
    },
    {
      kode: 'BTN',
      navn: 'BHUTAN',
    },
    {
      kode: 'YUG',
      navn: 'JUGOSLAVIA',
    },
    {
      kode: 'MSR',
      navn: 'MONSERRAT',
    },
    {
      kode: 'JEY',
      navn: 'JERSEY',
    },
    {
      kode: 'TCA',
      navn: 'TURKS/CAICOSØYENE',
    },
    {
      kode: 'GRL',
      navn: 'GRØNLAND',
    },
    {
      kode: 'CAN',
      navn: 'CANADA',
    },
    {
      kode: 'TJK',
      navn: 'TADZJIKISTAN',
    },
    {
      kode: 'LUX',
      navn: 'LUXEMBOURG',
    },
    {
      kode: 'KHM',
      navn: 'KAMBODSJA',
    },
    {
      kode: 'TCD',
      navn: 'TSJAD',
    },
    {
      kode: 'FIN',
      navn: 'FINLAND',
    },
    {
      kode: 'AUT',
      navn: 'ØSTERRIKE',
    },
    {
      kode: 'BFA',
      navn: 'BURKINA FASO',
    },
    {
      kode: 'CZE',
      navn: 'DEN TSJEKKISKE REP.',
    },
    {
      kode: 'XXX',
      navn: 'STATSLØS',
    },
    {
      kode: 'CYM',
      navn: 'CAYMANØYENE',
    },
    {
      kode: 'POL',
      navn: 'POLEN',
    },
    {
      kode: 'VNM',
      navn: 'VIETNAM',
    },
    {
      kode: 'BRB',
      navn: 'BARBADOS',
    },
    {
      kode: 'SVK',
      navn: 'SLOVAKIA',
    },
    {
      kode: 'AUS',
      navn: 'AUSTRALIA',
    },
    {
      kode: 'PRY',
      navn: 'PARAGUAY',
    },
    {
      kode: 'ATG',
      navn: 'ANTIGUA OG BARBUDA',
    },
    {
      kode: 'TKM',
      navn: 'TURKMENISTAN',
    },
    {
      kode: 'LTU',
      navn: 'LITAUEN',
    },
    {
      kode: 'SAU',
      navn: 'SAUDI-ARABIA',
    },
    {
      kode: 'CAF',
      navn: 'SENTRALAFRIKA. REP.',
    },
    {
      kode: 'TON',
      navn: 'TONGA',
    },
    {
      kode: 'CMR',
      navn: 'KAMERUN',
    },
    {
      kode: 'SDN',
      navn: 'SUDAN',
    },
    {
      kode: 'PAN',
      navn: 'PANAMA',
    },
    {
      kode: 'LAO',
      navn: 'LAOS',
    },
    {
      kode: 'JOR',
      navn: 'JORDAN',
    },
    {
      kode: 'MAC',
      navn: 'MACAO',
    },
    {
      kode: 'GIB',
      navn: 'GIBRALTAR',
    },
    {
      kode: 'XUK',
      navn: 'UKJENT',
    },
    {
      kode: 'MNG',
      navn: 'MONGOLIA',
    },
    {
      kode: 'TUN',
      navn: 'TUNISIA',
    },
    {
      kode: 'UZB',
      navn: 'UZBEKISTAN',
    },
    {
      kode: 'KWT',
      navn: 'KUWAIT',
    },
    {
      kode: 'ERI',
      navn: 'ERITREA',
    },
    {
      kode: 'TGO',
      navn: 'TOGO',
    },
    {
      kode: 'VUT',
      navn: 'VANUATU',
    },
    {
      kode: 'GIN',
      navn: 'GUINEA',
    },
    {
      kode: 'SOM',
      navn: 'SOMALIA',
    },
    {
      kode: 'KOR',
      navn: 'SØR-KOREA',
    },
    {
      kode: 'PHL',
      navn: 'FILIPPINENE',
    },
    {
      kode: 'BHR',
      navn: 'BAHRAIN',
    },
    {
      kode: 'DJI',
      navn: 'DJIBOUTI',
    },
    {
      kode: 'ESP',
      navn: 'SPANIA',
    },
    {
      kode: 'GTM',
      navn: 'GUATEMALA',
    },
    {
      kode: 'GAB',
      navn: 'GABON',
    },
    {
      kode: 'KNA',
      navn: 'ST. KITTS OG NEVIS',
    },
    {
      kode: 'AFG',
      navn: 'AFGHANISTAN',
    },
    {
      kode: 'MDA',
      navn: 'MOLDOVA',
    },
    {
      kode: 'PER',
      navn: 'PERU',
    },
    {
      kode: 'ZMB',
      navn: 'ZAMBIA',
    },
    {
      kode: 'QAT',
      navn: 'QATAR',
    },
    {
      kode: 'LBR',
      navn: 'LIBERIA',
    },
    {
      kode: 'CUW',
      navn: 'CURACAO',
    },
    {
      kode: 'BLM',
      navn: 'SAINT BARTHELEMY',
    },
    {
      kode: 'BLZ',
      navn: 'BELIZE',
    },
    {
      kode: 'TZA',
      navn: 'TANZANIA',
    },
    {
      kode: 'ISL',
      navn: 'ISLAND',
    },
    {
      kode: 'TLS',
      navn: 'ØST-TIMOR',
    },
    {
      kode: 'GRD',
      navn: 'GRENADA',
    },
    {
      kode: 'ARG',
      navn: 'ARGENTINA',
    },
    {
      kode: 'COG',
      navn: 'KONGO, REPUBLIKKEN',
    },
    {
      kode: 'MOZ',
      navn: 'MOSAMBIK',
    },
    {
      kode: 'SEN',
      navn: 'SENEGAL',
    },
    {
      kode: 'BGD',
      navn: 'BANGLADESH',
    },
    {
      kode: 'IRQ',
      navn: 'IRAK',
    },
    {
      kode: 'SLV',
      navn: 'EL SALVADOR',
    },
    {
      kode: 'TUR',
      navn: 'TYRKIA',
    },
    {
      kode: 'DDR',
      navn: 'TYSKLAND (ØST)',
    },
    {
      kode: 'LBN',
      navn: 'LIBANON',
    },
    {
      kode: 'GBR',
      navn: 'STORBRITANNIA',
    },
    {
      kode: 'COL',
      navn: 'COLOMBIA',
    },
    {
      kode: 'CXR',
      navn: 'CHRISTMASØYA',
    },
    {
      kode: 'PNG',
      navn: 'PAPUA NY-GUINEA',
    },
    {
      kode: 'NFK',
      navn: 'NORFOLKØYA',
    },
    {
      kode: 'HND',
      navn: 'HONDURAS',
    },
    {
      kode: 'BOL',
      navn: 'BOLIVIA',
    },
    {
      kode: 'RUS',
      navn: 'RUSSLAND',
    },
    {
      kode: 'DMA',
      navn: 'DOMINICA',
    },
    {
      kode: 'AZE',
      navn: 'AZERBAJDZJAN',
    },
    {
      kode: 'BLR',
      navn: 'HVITERUSSLAND',
    },
    {
      kode: 'CCK',
      navn: 'KOKOSØYENE',
    },
    {
      kode: 'GEO',
      navn: 'GEORGIA',
    },
    {
      kode: 'GUM',
      navn: 'GUAM',
    },
    {
      kode: 'JPN',
      navn: 'JAPAN',
    },
    {
      kode: 'FRA',
      navn: 'FRANKRIKE',
    },
    {
      kode: 'KEN',
      navn: 'KENYA',
    },
    {
      kode: 'MAR',
      navn: 'MAROKKO',
    },
  ],
  Avslagsårsak: [
    {
      kode: '1008',
      navn: 'Søker er ikke barnets far',
    },
    {
      kode: '1025',
      navn: 'Søker er ikke bosatt',
    },
    {
      kode: '1016',
      navn: 'Søker er ikke barnets far',
    },
    {
      kode: '1060',
      navn: '§14-4 første ledd: Søker er ikke gravid kvinne',
    },
    {
      kode: '1033',
      navn: 'Engangsstønad er allerede utbetalt til far/medmor ',
    },
    {
      kode: '1005',
      navn: 'Ektefelles/samboers barn',
    },
    {
      kode: '1064',
      navn: '§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid',
    },
    {
      kode: '1023',
      navn: 'Søker har ikke lovlig opphold',
    },
    {
      kode: '1015',
      navn: 'Søker har hatt vanlig samvær med barnet',
    },
    {
      kode: '1027',
      navn: 'Ingen barn dokumentert på far/medmor',
    },
    {
      kode: '1026',
      navn: 'Fødselsdato ikke oppgitt eller registrert',
    },
    {
      kode: '1003',
      navn: 'Søker er far',
    },
    {
      kode: '1029',
      navn: 'Bruker er ikke registrert som far/medmor til barnet',
    },
    {
      kode: '1021',
      navn: 'Søker er utflyttet',
    },
    {
      kode: '1032',
      navn: 'Foreldrepenger er allerede utbetalt til mor',
    },
    {
      kode: '1006',
      navn: 'Mann adopterer ikke alene',
    },
    {
      kode: '1009',
      navn: 'Mor ikke død',
    },
    {
      kode: '1001',
      navn: 'Søkt for tidlig',
    },
    {
      kode: '1018',
      navn: 'Ikke foreldreansvar alene etter barnelova',
    },
    {
      kode: '1035',
      navn: 'Ikke tilstrekkelig opptjening',
    },
    {
      kode: '1010',
      navn: 'Mor ikke død ved fødsel/omsorg',
    },
    {
      kode: '1020',
      navn: 'Søker er ikke medlem',
    },
    {
      kode: '1051',
      navn: 'Stebarnsadopsjon ikke flere dager igjen',
    },
    {
      kode: '1028',
      navn: 'Mor fyller ikke vilkåret for sykdom',
    },
    {
      kode: '1017',
      navn: 'Omsorgsovertakelse etter 56 uker',
    },
    {
      kode: '1004',
      navn: 'Barn over 15 år',
    },
    {
      kode: '1062',
      navn: '§14-4 første ledd: Søker har mottatt sykepenger',
    },
    {
      kode: '1041',
      navn: 'For lavt brutto beregningsgrunnlag',
    },
    {
      kode: '1063',
      navn: '§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer',
    },
    {
      kode: '1065',
      navn: '§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer',
    },
    {
      kode: '1011',
      navn: 'Engangsstønad er allerede utbetalt til mor',
    },
    {
      kode: '1052',
      navn: 'Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse',
    },
    {
      kode: '1031',
      navn: 'Engangsstønad er allerede utbetalt til mor',
    },
    {
      kode: '1066',
      navn: '§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke',
    },
    {
      kode: '1007',
      navn: 'Søkt for sent',
    },
    {
      kode: '1012',
      navn: 'Far har ikke omsorg for barnet',
    },
    {
      kode: '1034',
      navn: 'Foreldrepenger er allerede utbetalt til far/medmor',
    },
    {
      kode: '1002',
      navn: 'Søker er medmor',
    },
    {
      kode: '1014',
      navn: 'Søker har ikke foreldreansvar',
    },
    {
      kode: '1019',
      navn: 'Manglende dokumentasjon',
    },
    {
      kode: '1024',
      navn: 'Søker har ikke oppholdsrett (EØS)',
    },
    {
      kode: '1061',
      navn: '§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt',
    },
    {
      kode: '1099',
      navn: 'Ingen beregningsregler tilgjengelig i løsningen',
    },
  ],
  BehandlingType: [
    {
      kode: 'BT-002',
      navn: 'Førstegangsbehandling',
    },
    {
      kode: 'BT-006',
      navn: 'Dokumentinnsyn',
    },
    {
      kode: 'BT-007',
      navn: 'Tilbakekreving',
    },
    {
      kode: 'BT-004',
      navn: 'Revurdering',
    },
    {
      kode: 'BT-003',
      navn: 'Klage',
    },
    {
      kode: 'BT-008',
      navn: 'Anke',
    },
    {
      kode: 'BT-009',
      navn: 'Revurdering tilbakekreving',
    },
  ],
  InnsynResultatType: [
    {
      kode: 'AVVIST',
      navn: 'Avslått innsyn',
    },
    {
      kode: 'DELV',
      navn: 'Delvis innvilget innsyn',
    },
    {
      kode: 'INNV',
      navn: 'Innvilget innsyn',
    },
  ],
  MedlemskapType: [
    {
      kode: 'ENDELIG',
      navn: 'Endelig',
    },
    {
      kode: 'AVKLARES',
      navn: 'Under avklaring',
    },
    {
      kode: 'FORELOPIG',
      navn: 'Foreløpig',
    },
  ],
  PersonstatusType: [
    {
      kode: 'FOSV',
      navn: 'Forsvunnet',
    },
    {
      kode: 'UTPE',
      navn: 'Opphørt',
    },
    {
      kode: 'BOSA',
      navn: 'Bosatt (f.reg)',
    },
    {
      kode: 'ADNR',
      navn: 'D-nummer',
    },
    {
      kode: 'FØDR',
      navn: 'Fødselregistrert',
    },
    {
      kode: 'DØD',
      navn: 'Død',
    },
    {
      kode: 'UREG',
      navn: 'Ikke bosatt (f.reg)',
    },
    {
      kode: 'UTVA',
      navn: 'Utflyttet',
    },
  ],
  UtsettelseÅrsak: [
    {
      kode: 'ARBEID',
      navn: 'Arbeid',
    },
    {
      kode: 'INSTITUSJONSOPPHOLD_SØKER',
      navn: 'Søker er innlagt i helseinstitusjon',
    },
    {
      kode: 'NAV_TILTAK',
      navn: 'Tiltak i regi av Nav',
    },
    {
      kode: 'FRI',
      navn: 'Fri utsettelse fom høst 2021',
    },
    {
      kode: 'SYKDOM',
      navn: 'Avhengig av hjelp grunnet sykdom',
    },
    {
      kode: 'HV_OVELSE',
      navn: 'Heimevernet',
    },
    {
      kode: 'INSTITUSJONSOPPHOLD_BARNET',
      navn: 'Barn er innlagt i helseinstitusjon',
    },
    {
      kode: 'LOVBESTEMT_FERIE',
      navn: 'Lovbestemt ferie',
    },
  ],
  BehandlingStatus: [
    {
      kode: 'AVSLU',
      navn: 'Avsluttet',
    },
    {
      kode: 'IVED',
      navn: 'Iverksetter vedtak',
    },
    {
      kode: 'FVED',
      navn: 'Fatter vedtak',
    },
    {
      kode: 'OPPRE',
      navn: 'Opprettet',
    },
    {
      kode: 'UTRED',
      navn: 'Behandling utredes',
    },
  ],
  RelasjonsRolleType: [
    {
      kode: 'FARA',
      navn: 'Far',
    },
    {
      kode: 'ANPA',
      navn: 'Annen part fra søknad',
    },
    {
      kode: 'EKTE',
      navn: 'Ektefelle',
    },
    {
      kode: 'REPA',
      navn: 'Registrert partner',
    },
    {
      kode: 'MORA',
      navn: 'Mor',
    },
    {
      kode: 'BARN',
      navn: 'Barn',
    },
    {
      kode: 'MMOR',
      navn: 'Medmor',
    },
  ],
  VirksomhetType: [
    {
      kode: 'JORDBRUK_SKOGBRUK',
      navn: 'Jordbruk',
    },
    {
      kode: 'FRILANSER',
      navn: 'Frilanser',
    },
    {
      kode: 'ANNEN',
      navn: 'Annen næringsvirksomhet',
    },
    {
      kode: 'FISKE',
      navn: 'Fiske',
    },
    {
      kode: 'DAGMAMMA',
      navn: 'Dagmamma i eget hjem/familiebarnehage',
    },
  ],
  MedlemskapDekningType: [
    {
      kode: 'FTL_2_9_1_b',
      navn: 'Folketrygdloven § 2-9, 1.ledd bokstav b',
    },
    {
      kode: 'OPPHOR',
      navn: 'Opphør',
    },
    {
      kode: 'FTL_2_9_1_c',
      navn: 'Folketrygdloven § 2-9, 1.ledd bokstav c',
    },
    {
      kode: 'FTL_2_9_2_a',
      navn: 'Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a',
    },
    {
      kode: 'FTL_2_7_b',
      navn: 'Folketrygdloven § 2-7, 3. ledd bokstav b',
    },
    {
      kode: 'FTL_2_7_a',
      navn: 'Folketrygdloven § 2-7, 3.ledd bokstav a',
    },
    {
      kode: 'IHT_AVTALE',
      navn: 'I henhold til avtale',
    },
    {
      kode: 'FTL_2_6',
      navn: 'Folketrygdloven § 2-6',
    },
    {
      kode: 'FTL_2_9_2_c',
      navn: 'Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c',
    },
    {
      kode: 'FULL',
      navn: 'Full',
    },
    {
      kode: 'UNNTATT',
      navn: 'Unntatt',
    },
    {
      kode: 'FTL_2_9_1_a',
      navn: 'Folketrygdloven § 2-9, 1.ledd bokstav a',
    },
  ],
  HistorikkAktør: [
    {
      kode: 'SBH',
      navn: 'Saksbehandler',
    },
    {
      kode: 'ARBEIDSGIVER',
      navn: 'Arbeidsgiver',
    },
    {
      kode: 'BESL',
      navn: 'Beslutter',
    },
    {
      kode: 'SOKER',
      navn: 'Søker',
    },
    {
      kode: 'VL',
      navn: 'Vedtaksløsningen',
    },
  ],
  OpptjeningAktivitetType: [
    {
      kode: 'UTENLANDSK_ARBEIDSFORHOLD',
      navn: 'Arbeid i utlandet',
    },
    {
      kode: 'ETTERLØNN_SLUTTPAKKE',
      navn: 'Etterlønn eller sluttpakke',
    },
    {
      kode: 'UTDANNINGSPERMISJON',
      navn: 'Utdanningspermisjon',
    },
    {
      kode: 'OPPLÆRINGSPENGER',
      navn: 'Opplæringspenger',
    },
    {
      kode: 'VENTELØNN_VARTPENGER',
      navn: 'Ventelønn eller vartpenger',
    },
    {
      kode: 'MILITÆR_ELLER_SIVILTJENESTE',
      navn: 'Militær- eller siviltjeneste',
    },
    {
      kode: 'FRILANS',
      navn: 'Frilans',
    },
    {
      kode: 'AAP',
      navn: 'Arbeidsavklaringspenger',
    },
    {
      kode: 'FRISINN',
      navn: 'FRISINN',
    },
    {
      kode: 'OMSORGSPENGER',
      navn: 'Omsorgspenger',
    },
    {
      kode: 'SYKEPENGER',
      navn: 'Sykepenger',
    },
    {
      kode: 'FORELDREPENGER',
      navn: 'Foreldrepenger',
    },
    {
      kode: 'FRILOPP',
      navn: 'Frilansoppdrag',
    },
    {
      kode: 'ARBEID',
      navn: 'Arbeid',
    },
    {
      kode: 'NÆRING',
      navn: 'Næring',
    },
    {
      kode: 'SVANGERSKAPSPENGER',
      navn: 'Svangerskapspenger',
    },
    {
      kode: 'DAGPENGER',
      navn: 'Dagpenger',
    },
    {
      kode: 'PLEIEPENGER',
      navn: 'Pleiepenger',
    },
    {
      kode: 'VIDERE_ETTERUTDANNING',
      navn: 'Videre- og etterutdanning',
    },
  ],
  PermisjonsbeskrivelseType: [
    {
      kode: 'PERMISJON_MED_FORELDREPENGER',
      navn: 'Permisjon med foreldrepenger',
    },
    {
      kode: 'UTDANNINGSPERMISJON',
      navn: 'Utdanningspermisjon',
    },
    {
      kode: 'PERMISJON',
      navn: 'Permisjon',
    },
    {
      kode: 'VELFERDSPERMISJON',
      navn: 'Velferdspermisjon',
    },
    {
      kode: 'ANNEN_PERMISJON_LOVFESTET',
      navn: 'Andre lovfestede permisjoner',
    },
    {
      kode: 'UTDANNINGSPERMISJON_IKKE_LOVFESTET',
      navn: 'Utdanningspermisjon (Ikke lovfestet)',
    },
    {
      kode: 'UTDANNINGSPERMISJON_LOVFESTET',
      navn: 'Utdanningspermisjon (Lovfestet)',
    },
    {
      kode: 'ANNEN_PERMISJON_IKKE_LOVFESTET',
      navn: 'Andre ikke-lovfestede permisjoner',
    },
    {
      kode: 'PERMISJON_VED_MILITÆRTJENESTE',
      navn: 'Permisjon ved militærtjeneste',
    },
    {
      kode: 'PERMITTERING',
      navn: 'Permittering',
    },
  ],
  AnkeOmgjørÅrsak: [
    {
      kode: 'PROSESSUELL_FEIL',
      navn: 'Saksbehandlingsfeil',
    },
    {
      kode: 'ULIK_REGELVERKSTOLKNING',
      navn: 'Ulik regelverkstolkning',
    },
    {
      kode: 'ULIK_VURDERING',
      navn: 'Ulik skjønnsvurdering',
    },
    {
      kode: 'NYE_OPPLYSNINGER',
      navn: 'Nye opplysninger',
    },
  ],
  OppholdstillatelseType: [
    {
      kode: 'MIDLERTIDIG',
      navn: 'Midlertidig oppholdstillatelse',
    },
    {
      kode: 'PERMANENT',
      navn: 'Permanent oppholdstillatelse',
    },
  ],
  MedlemskapManuellVurderingType: [
    {
      kode: 'UNNTAK',
      navn: 'Periode med unntak fra medlemskap',
    },
    {
      kode: 'MEDLEM',
      navn: 'Periode med medlemskap',
    },
    {
      kode: 'IKKE_RELEVANT',
      navn: 'Ikke relevant periode',
    },
  ],
  ManuellBehandlingÅrsak: [
    {
      kode: '5031',
      navn: 'Vurder om det skal være utsettelse i perioden',
    },
    {
      kode: '5005',
      navn: 'Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra.',
    },
    {
      kode: '5030',
      navn: 'Far/medmor søker før fødsel/omsorg',
    },
    {
      kode: '5003',
      navn: 'Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden.',
    },
    {
      kode: '5026',
      navn: 'Vurder uttak med hensyn på dødsfall',
    },
    {
      kode: '5032',
      navn: 'Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)',
    },
    {
      kode: '5024',
      navn: 'Opphold større enn tilgjengelige dager',
    },
    {
      kode: '5019',
      navn: 'Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet',
    },
    {
      kode: '5011',
      navn: 'Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes.',
    },
    {
      kode: '5025',
      navn: 'Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse',
    },
    {
      kode: '5007',
      navn: 'Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen.',
    },
    {
      kode: '5014',
      navn: 'Vurder samtidig uttak av foreldrepenger.',
    },
    {
      kode: '5004',
      navn: 'Kontroller mors krav til aktivitet.',
    },
    {
      kode: '5006',
      navn: 'Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden.',
    },
    {
      kode: '5009',
      navn: 'Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden.',
    },
    {
      kode: '5002',
      navn: 'Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden.',
    },
    {
      kode: '5028',
      navn: 'Innvilget pleiepenger med innleggelse, vurder riktig ytelse',
    },
    {
      kode: '5029',
      navn: 'Innvilget pleiepenger uten innleggelse, vurder riktig ytelse',
    },
    {
      kode: '5018',
      navn: 'Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode',
    },
    {
      kode: '5012',
      navn: 'Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad.',
    },
    {
      kode: '5001',
      navn: 'Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden.',
    },
    {
      kode: '5010',
      navn: 'For sent fremsatt søknad. Vurder om uttak i perioden er gyldig.',
    },
    {
      kode: '5016',
      navn: 'Vurder søknad om overføring av kvote.',
    },
    {
      kode: '5027',
      navn: 'Vurder fars/medmors rett til uttak på grunn av mors uføretrygd',
    },
  ],
  MorsAktivitet: [
    {
      kode: 'UFØRE',
      navn: 'Mor mottar uføretrygd',
    },
    {
      kode: 'KVALPROG',
      navn: 'Deltar i kvalifiseringsprogrammet',
    },
    {
      kode: 'UTDANNING',
      navn: 'Tar utdanning på heltid',
    },
    {
      kode: 'INTROPROG',
      navn: 'Deltar i introduksjonsprogram for nykomne innvandrere',
    },
    {
      kode: 'ARBEID_OG_UTDANNING',
      navn: 'Er i arbeid og utdanning',
    },
    {
      kode: 'INNLAGT',
      navn: 'Er innlagt på institusjon',
    },
    {
      kode: 'ARBEID',
      navn: 'Er i arbeid',
    },
    {
      kode: 'IKKE_OPPGITT',
      navn: 'Periode uten oppgitt aktivitetskrav',
    },
    {
      kode: 'TRENGER_HJELP',
      navn: 'Er avhengig av hjelp til å ta seg av barnet',
    },
  ],
  NaturalYtelseType: [
    {
      kode: 'FRI_TRANSPORT',
      navn: 'Fri transport',
    },
    {
      kode: 'BEDRIFTSBARNEHAGE',
      navn: 'Bedriftsbarnehageplass',
    },
    {
      kode: 'KOST_DOEGN',
      navn: 'Kostpenger døgnsats',
    },
    {
      kode: 'BIL',
      navn: 'Bil',
    },
    {
      kode: 'OPSJONER',
      navn: 'Opsjoner',
    },
    {
      kode: 'KOST_DAGER',
      navn: 'Kostpenger dager',
    },
    {
      kode: 'YRKESBIL_KILOMETER',
      navn: 'Yrkesbil tjenesteligbehov kilometer',
    },
    {
      kode: 'RENTEFORDEL_LAAN',
      navn: 'Rentefordel lån',
    },
    {
      kode: 'ANNET',
      navn: 'Annet',
    },
    {
      kode: 'TILSKUDD_BARNEHAGE',
      navn: 'Tilskudd barnehageplass',
    },
    {
      kode: 'ELEKTRISK_KOMMUNIKASJON',
      navn: 'Elektrisk kommunikasjon',
    },
    {
      kode: 'YRKESBIL_LISTEPRIS',
      navn: 'Yrkesbil tjenesteligbehov listepris',
    },
    {
      kode: 'UTENLANDSK_PENSJONSORDNING',
      navn: 'Innbetaling utenlandsk pensjonsordning',
    },
    {
      kode: 'BESOEKSREISER_HJEM',
      navn: 'Besøksreiser hjemmet annet',
    },
    {
      kode: 'BOLIG',
      navn: 'Bolig',
    },
    {
      kode: 'AKSJER_UNDERKURS',
      navn: 'Aksjer grunnfondsbevis til underkurs',
    },
    {
      kode: 'KOSTBESPARELSE_HJEM',
      navn: 'Kostbesparelser i hjemmet',
    },
    {
      kode: 'FORSIKRINGER',
      navn: 'Skattepliktig del forsikringer',
    },
    {
      kode: 'LOSJI',
      navn: 'Losji',
    },
  ],
  PeriodeResultatÅrsak: [
    {
      kode: '4005',
      navn: '§14-10 sjuende ledd: Ikke sammenhengende perioder',
    },
    {
      kode: '4031',
      navn: '§14-9: Ferie/arbeid innenfor de første 6 ukene',
    },
    {
      kode: '4056',
      navn: '§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt',
    },
    {
      kode: '2022',
      navn: '§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon',
    },
    {
      kode: '4076',
      navn: '§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger',
    },
    {
      kode: '4103',
      navn: '§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel',
    },
    {
      kode: '2030',
      navn: '§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger',
    },
    {
      kode: '4116',
      navn: '§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert',
    },
    {
      kode: '4063',
      navn: '§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert',
    },
    {
      kode: '4054',
      navn: '§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt',
    },
    {
      kode: '4040',
      navn: '§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt',
    },
    {
      kode: '4041',
      navn: '§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag',
    },
    {
      kode: '2016',
      navn: '§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett',
    },
    {
      kode: '4112',
      navn: '§14-11: Barnets innleggelse første 6 uker ikke oppfylt',
    },
    {
      kode: '4053',
      navn: '§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt',
    },
    {
      kode: '4069',
      navn: '§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert',
    },
    {
      kode: '4025',
      navn: '§14-16 første ledd: Avslag gradering - arbeid 100% eller mer',
    },
    {
      kode: '2015',
      navn: '§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett',
    },
    {
      kode: '2020',
      navn: '§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger',
    },
    {
      kode: '2023',
      navn: '§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet',
    },
    {
      kode: '4110',
      navn: '§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt',
    },
    {
      kode: '2010',
      navn: '§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie',
    },
    {
      kode: '2037',
      navn: '§14-9, jf. §14-13: Innvilget fellesperiode til far',
    },
    {
      kode: '4055',
      navn: '§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt',
    },
    {
      kode: '2004',
      navn: '§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett',
    },
    {
      kode: '2006',
      navn: '§14-10: Innvilget foreldrepenger før fødsel',
    },
    {
      kode: '2011',
      navn: '§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid',
    },
    {
      kode: '4003',
      navn: '§14-10 fjerde ledd: Mor har ikke omsorg',
    },
    {
      kode: '2033',
      navn: '§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett',
    },
    {
      kode: '4088',
      navn: '§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert',
    },
    {
      kode: '4100',
      navn: '§14-10 andre ledd: Uttak før omsorgsovertakelse',
    },
    {
      kode: '4097',
      navn: '§14-5: Adopsjonsvilkåret er ikke oppfylt',
    },
    {
      kode: '4074',
      navn: '§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert',
    },
    {
      kode: '4117',
      navn: '§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert',
    },
    {
      kode: '4092',
      navn: '§14-12: Avslag overføring - har ikke aleneomsorg for barnet',
    },
    {
      kode: '4002',
      navn: '§14-9: Ikke stønadsdager igjen på stønadskonto',
    },
    {
      kode: '4086',
      navn: '§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse',
    },
    {
      kode: '2012',
      navn: '§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse',
    },
    {
      kode: '4075',
      navn: '§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger',
    },
    {
      kode: '4098',
      navn: '§14-5: Foreldreansvarsvilkåret er ikke oppfylt',
    },
    {
      kode: '2024',
      navn: '§14-11: Gyldig utsettelse',
    },
    {
      kode: '4023',
      navn: '§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%',
    },
    {
      kode: '4007',
      navn: '§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt',
    },
    {
      kode: '4106',
      navn: '§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel',
    },
    {
      kode: '4035',
      navn: '§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet',
    },
    {
      kode: '4085',
      navn: '§14-10 sjette ledd: Det er ikke samtykke mellom partene',
    },
    {
      kode: '2028',
      navn: '§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt',
    },
    {
      kode: '4060',
      navn: '§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon',
    },
    {
      kode: '2002',
      navn: '§14-9: Innvilget fellesperiode/foreldrepenger',
    },
    {
      kode: '4095',
      navn: '§14-10 første ledd: Mor tar ikke alle 3 ukene før termin',
    },
    {
      kode: '2027',
      navn: '§14-11: Gyldig utsettelse første 6 uker pga. sykdom',
    },
    {
      kode: '4105',
      navn: '§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg',
    },
    {
      kode: '4062',
      navn: '§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert',
    },
    {
      kode: '4032',
      navn: '§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser',
    },
    {
      kode: '2039',
      navn: '§14-9 sjette ledd: Innvilget første 6 uker etter fødsel',
    },
    {
      kode: '2031',
      navn: '§14-12, jf. §14-16: Gradering av kvote/overført kvote',
    },
    {
      kode: '4051',
      navn: '§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt',
    },
    {
      kode: '4058',
      navn: '§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager',
    },
    {
      kode: '2018',
      navn: '§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett',
    },
    {
      kode: '4059',
      navn: '§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager',
    },
    {
      kode: '2026',
      navn: '§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt',
    },
    {
      kode: '2036',
      navn: '§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav',
    },
    {
      kode: '4111',
      navn: '§14-11: Søkers innleggelse første 6 uker ikke oppfylt',
    },
    {
      kode: '4022',
      navn: '§14-10 tredje ledd: Barnet er over 3 år',
    },
    {
      kode: '4102',
      navn: '§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav',
    },
    {
      kode: '4020',
      navn: '§22-13 tredje ledd: Brudd på søknadsfrist',
    },
    {
      kode: '4038',
      navn: '§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt',
    },
    {
      kode: '4068',
      navn: '§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert',
    },
    {
      kode: '2019',
      navn: '§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett',
    },
    {
      kode: '4082',
      navn: '§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid',
    },
    {
      kode: '4050',
      navn: '§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt',
    },
    {
      kode: '2034',
      navn: '§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett',
    },
    {
      kode: '4012',
      navn: '§14-10 fjerde ledd: Far/medmor har ikke omsorg',
    },
    {
      kode: '2003',
      navn: '§14-12: Innvilget uttak av kvote',
    },
    {
      kode: '2035',
      navn: '§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav',
    },
    {
      kode: '4073',
      navn: '§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger',
    },
    {
      kode: '2025',
      navn: '§14-11: Gyldig utsettelse første 6 uker pga. innleggelse',
    },
    {
      kode: '4008',
      navn: '§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt',
    },
    {
      kode: '4072',
      navn: '§14-9 sjuende ledd: Barnet er dødt',
    },
    {
      kode: '4070',
      navn: '§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert',
    },
    {
      kode: '4030',
      navn: '§14-9: Avslag utsettelse før termin/fødsel',
    },
    {
      kode: '4057',
      navn: '§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt',
    },
    {
      kode: '4052',
      navn: '§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt',
    },
    {
      kode: '4081',
      navn: '§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid',
    },
    {
      kode: '2017',
      navn: '§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett',
    },
    {
      kode: '4064',
      navn: '§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert',
    },
    {
      kode: '2005',
      navn: '§14-15: Innvilget foreldrepenger ved aleneomsorg',
    },
    {
      kode: '4013',
      navn: '§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel',
    },
    {
      kode: '4077',
      navn: '§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger',
    },
    {
      kode: '4033',
      navn: '§14-11 første ledd bokstav a: Ikke lovbestemt ferie',
    },
    {
      kode: '4034',
      navn: '§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen',
    },
    {
      kode: '4093',
      navn: '§14-16: Avslag gradering - søker er ikke i arbeid',
    },
    {
      kode: '4039',
      navn: '§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt',
    },
    {
      kode: '4089',
      navn: '§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert',
    },
    {
      kode: '4066',
      navn: '§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert',
    },
    {
      kode: '4115',
      navn: '§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert',
    },
    {
      kode: '2014',
      navn: '§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom',
    },
    {
      kode: '4104',
      navn: '§14-10 tredje ledd: Stønadsperiode for nytt barn',
    },
    {
      kode: '4065',
      navn: '§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert',
    },
    {
      kode: '4087',
      navn: '§14-2: Opphør medlemskap',
    },
    {
      kode: '4037',
      navn: '§14-11 første ledd bokstav b: Ikke heltidsarbeid',
    },
    {
      kode: '4099',
      navn: '§14-6: Opptjeningsvilkåret er ikke oppfylt',
    },
    {
      kode: '4061',
      navn: '§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert',
    },
    {
      kode: '4067',
      navn: '§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert',
    },
    {
      kode: '2021',
      navn: '§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet',
    },
    {
      kode: '4071',
      navn: '§14-10: Bruker er død',
    },
    {
      kode: '2007',
      navn: '§14-10: Innvilget foreldrepenger, kun mor har rett',
    },
    {
      kode: '4107',
      navn: '§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav',
    },
    {
      kode: '2032',
      navn: '§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg',
    },
    {
      kode: '2038',
      navn: '§14-10 sjette ledd: Samtidig uttak',
    },
    {
      kode: '4096',
      navn: '§14-5: Fødselsvilkåret er ikke oppfylt',
    },
    {
      kode: '2013',
      navn: '§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt',
    },
    {
      kode: '4084',
      navn: '§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak',
    },
  ],
  ForeldreType: [
    {
      kode: 'FAR',
      navn: 'Far',
    },
    {
      kode: 'ANDRE',
      navn: 'Andre',
    },
    {
      kode: 'MEDMOR',
      navn: 'Medmor',
    },
    {
      kode: 'MOR',
      navn: 'Mor',
    },
  ],
  OppgaveType: [
    {
      kode: 'VUR_KONSEKVENS',
      navn: 'Vurder konsekvens for ytelse',
    },
    {
      kode: 'VUR_DOKUMENT',
      navn: 'Vurder dokument',
    },
  ],
};
