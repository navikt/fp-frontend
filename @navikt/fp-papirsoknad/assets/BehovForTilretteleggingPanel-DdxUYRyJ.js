var bd=Object.defineProperty;var hd=(e,a,r)=>a in e?bd(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var U=(e,a,r)=>hd(e,typeof a!="symbol"?a+"":a,r);import{j as o,h as ql}from"./index-Byyjg8XX.js";import{u as fe,_ as vi,s as mi,d as Sd,P as tr,e as Nd,f as Pr,g as _t,l as _d,h as Kd,i as Pd,j as Dd,k as Md,n as qd,o as rt,S as ya,p as se,q as Il,t as Id,v as gs,x as Vd,y as jd,z as Ld,C as wd,D as Ud,E as Gd,G as Ta,I as Bd,M as xd,b as We,J as Bn,K as gr,R as vs,B as rr,N as Be,O as xr,Q as ms,T as Ea,U as Ur,W as Vl,X as jl,Y as Ll,Z as wl,$ as Hd,a0 as Yd,a1 as ps,a2 as ys,a3 as Ts,a4 as Cd,a5 as Ul,a6 as ja,a7 as Es,a8 as As,A as nt,V as Q,a9 as $d,r as Ae,H as ze,aa as we,ab as pn,ac as Jd,ad as Wd,ae as zd,af as Xd,c as he,ag as Kt,F as Zd}from"./nb_NO-Dzx0OGfR.js";import{r as A,R as v}from"./index-C4XKfyRp.js";import{d as W}from"./dayjs.min-DkLNzaWO.js";import{g as Gl}from"./_commonjsHelpers-CqkleIqs.js";var en=(e=>(e.FISKER="FISKER",e.ARBEIDSTAKER="ARBEIDSTAKER",e.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",e.SJOMANN="SJØMANN",e.JORDBRUKER="JORDBRUKER",e.DAGPENGER="DAGPENGER",e.INAKTIV="INAKTIV",e.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",e.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",e.FRILANSER="FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",e.DAGMAMMA="DAGMAMMA",e.ANNET="ANNET",e))(en||{}),ia=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(ia||{}),br=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(br||{}),at=(e=>(e.MOR="MOR",e.FAR="FAR",e.MEDMOR="MEDMOR",e.MEDFAR="MEDFAR",e.TREDJE_PART="TREDJE_PART",e))(at||{}),ka=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(ka||{}),tt=(e=>(e.NORGE="NOR",e.ARUBA="ABW",e))(tt||{}),Nr=(e=>(e.FISKE="FISKE",e.FRILANSER="FRILANSER",e.DAGMAMMA="DAGMAMMA",e.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",e.ANNEN="ANNEN",e))(Nr||{}),la=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(la||{}),ma=(e=>(e.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",e.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",e.ALENEOMSORG="ALENEOMSORG",e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e.UDEFINERT="-",e))(ma||{}),gn=(e=>(e.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",e.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",e.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",e))(gn||{}),Lr=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(Lr||{});function Qd(e,a){var r=e.values,n=vi(e,["values"]),t=a.values,s=vi(a,["values"]);return mi(t,r)&&mi(n,s)}function Bl(e){var a=fe(),r=a.formatMessage,n=a.textComponent,t=n===void 0?A.Fragment:n,s=e.id,i=e.description,l=e.defaultMessage,d=e.values,g=e.children,u=e.tagName,k=u===void 0?t:u,m=e.ignoreTag,p={id:s,description:i,defaultMessage:l},f=r(p,d,{ignoreTag:m});return typeof g=="function"?g(Array.isArray(f)?f:[f]):k?A.createElement(k,null,f):A.createElement(A.Fragment,null,f)}Bl.displayName="FormattedMessage";var w=A.memo(Bl,Qd);w.displayName="MemoizedFormattedMessage";const nA=e=>{const a=Sd({locale:"nb-NO",messages:e},Nd());return n=>o.jsx(tr,{value:a,children:n()})},aA={UttakUtsettelseType:[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],FagsakYtelseType:[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KonsekvensForYtelsen:[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],AktivitetskravPermisjonType:[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],AdresseType:[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],SivilstandType:[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],Inntektskategori:[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],SkjermlenkeType:[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],FaktaOmBeregningTilfelle:[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],VergeType:[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],KlageHjemmel:[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],ArbeidType:[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],FagsakMarkering:[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],Arbeidskategori:[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:[{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST. KITTS OG NEVIS"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"}],BehandlingType:[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],InnsynResultatType:[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],MedlemskapType:[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],PersonstatusType:[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],RelasjonsRolleType:[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],VirksomhetType:[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],MedlemskapDekningType:[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_2_F:[{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_33:[{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'}],SVP_VK_1:[{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'}],FP_VK_16:[{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],PermisjonsbeskrivelseType:[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],MedlemskapManuellVurderingType:[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],NaturalYtelseType:[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],PeriodeResultatÅrsak:[{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-13"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]}],ForeldreType:[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],OppgaveType:[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}]};function xl(e,a=166,r=!1){let n;function t(...s){const i=()=>{n=void 0,e.apply(this,s)};!n&&r&&i(),clearTimeout(n),n=setTimeout(i,a)}return t.clear=()=>{clearTimeout(n)},t}const Un=globalThis!=null&&globalThis.document?A.useLayoutEffect:()=>{};function pa(e,a=[]){const r=A.useRef(e);return A.useEffect(()=>{r.current=e}),A.useCallback((...n)=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,...n)},a)}function La({value:e,defaultValue:a,onChange:r}){const n=pa(r),[t,s]=A.useState(a),i=e!==void 0,l=i?e:t,d=pa(g=>{const k=typeof g=="function"?g(l):g;i||s(k),n(k)},[i,n,l]);return[l,d]}var eu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ru=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=eu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var nu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const au=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=nu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var tu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const su=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=tu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var iu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const st=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=iu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var lu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Hl=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=lu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var ou=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const du=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=ou(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var uu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const wa=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=uu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var ku=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const gu=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=ku(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var vu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const mu=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=vu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var pu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const it=A.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=pu(e,["title","titleId"]);let s=Pr();return s=r?n||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 6.25a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.876-11.384h.805a.75.75 0 0 0 0-1.5h-2.75V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25zm5.5-1.5c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm-3.19 3 .867 11.27c.01.13.118.23.249.23h8.148c.13 0 .24-.1.25-.23l.866-11.27zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))}),yu=typeof window<"u"&&window.matchMedia===void 0,Tu=(e,a)=>{const[r,n]=A.useState(a);return A.useEffect(()=>{if(yu)return;const t=window.matchMedia(e);n(t.matches);const s=i=>{n(i.matches)};return t.addEventListener("change",s),()=>{t.removeEventListener("change",s)}},[e]),r},Yl=6048e5,Eu=864e5,Au=6e4,fu=36e5,cu=1e3,pi=Symbol.for("constructDateFrom");function ge(e,a){return typeof e=="function"?e(a):e&&typeof e=="object"&&pi in e?e[pi](a):e instanceof Date?new e.constructor(a):new Date(a)}function xn(e,...a){const r=ge.bind(null,a.find(n=>typeof n=="object"));return a.map(r)}let Ru={};function On(){return Ru}function ne(e,a){return ge(a||e,e)}function Gr(e,a){var l,d,g,u;const r=On(),n=(a==null?void 0:a.weekStartsOn)??((d=(l=a==null?void 0:a.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((u=(g=r.locale)==null?void 0:g.options)==null?void 0:u.weekStartsOn)??0,t=ne(e,a==null?void 0:a.in),s=t.getDay(),i=(s<n?7:0)+s-n;return t.setDate(t.getDate()-i),t.setHours(0,0,0,0),t}const Fu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ou={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},hu={date:_t({formats:Fu,defaultWidth:"full"}),time:_t({formats:Ou,defaultWidth:"full"}),dateTime:_t({formats:bu,defaultWidth:"full"})},lt={code:"en-US",formatDistance:Dd,formatLong:hu,formatRelative:Pd,localize:_d,match:Kd,options:{weekStartsOn:0,firstWeekContainsDate:1}};function yi(e){return e.sort((a,r)=>{const n=a.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Su=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Ti(e,a,r){let n=e+1;return r&&n>=a&&(n=0),n}function Ei(e,a,r){let n=e-1;return r&&n<0&&(n=a),n}const Pt=e=>e;class Nu{constructor(){this.descendants=new Map,this.register=a=>{if(a!=null)return Su(a)?this.registerNode(a):r=>{this.registerNode(r,a)}},this.unregister=a=>{this.descendants.delete(a);const r=yi(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=a=>{this.descendants.forEach(r=>{const n=a.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(a=>!a.disabled),this.item=a=>{if(this.count()!==0)return this.values()[a]},this.enabledItem=a=>{if(this.enabledCount()!==0)return this.enabledValues()[a]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const a=this.enabledValues().length-1;return this.enabledItem(a)},this.indexOf=a=>{var r,n;return a&&(n=(r=this.descendants.get(a))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=a=>a==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(a)),this.next=(a,r=!0)=>{const n=Ti(a,this.count(),r);return this.item(n)},this.nextEnabled=(a,r=!0)=>{const n=this.item(a);if(!n)return;const t=this.enabledIndexOf(n.node),s=Ti(t,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(a,r=!0)=>{const n=Ei(a,this.count()-1,r);return this.item(n)},this.prevEnabled=(a,r=!0)=>{const n=this.item(a);if(!n)return;const t=this.enabledIndexOf(n.node),s=Ei(t,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(a,r)=>{if(!a)return;const n=this.descendants.get(a);if(n){this.descendants.set(a,Object.assign({index:n.index,node:a},r));return}const t=Array.from(this.descendants.keys()).concat(a),s=yi(t);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const i=Object.assign({node:a,index:-1},r);this.descendants.set(a,i),this.assignIndex(s)}}}function _u(){const[e,a]=Md({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=Pt(s=>v.createElement(e,Object.assign({},s.value),s.children));function n(s){const i=a(),[l,d]=A.useState(-1),g=A.useRef(null);Un(()=>()=>{g.current&&i.unregister(g.current)},[]),Un(()=>{if(!g.current)return;const k=Number(g.current.dataset.index);l!==k&&!Number.isNaN(k)&&d(k)});const u=Pt(s?i.register(s):i.register);return{descendants:i,index:l,enabledIndex:i.enabledIndexOf(g.current),register:qd([u,g])}}function t(){return A.useRef(new Nu).current}return[r,a,t,n]}function Ku(e,a=globalThis==null?void 0:globalThis.document){const r=pa(e);A.useEffect(()=>{const n=t=>{t.key==="Escape"&&r(t)};return a.addEventListener("keydown",n,!0),()=>a.removeEventListener("keydown",n,!0)},[r,a])}const Cl={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function $l(e,a,r,{discrete:n}={discrete:!1}){if(!a)return;const t=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t.addEventListener(e,a,{once:!0}),n&&t?ql.flushSync(()=>t.dispatchEvent(s)):t.dispatchEvent(s)}function Pu(e,a=globalThis==null?void 0:globalThis.document){const r=pa(e),n=A.useRef(!1);return A.useEffect(()=>{const t=s=>{if(s.target&&!n.current){const i={originalEvent:s};$l(Cl.FOCUS_OUTSIDE,r,i)}};return a.addEventListener("focusin",t),()=>a.removeEventListener("focusin",t)},[a,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function Du(e,a=globalThis==null?void 0:globalThis.document){const r=pa(e),n=A.useRef(!1),t=A.useRef(()=>{});return A.useEffect(()=>{const s=l=>{function d(){$l(Cl.POINTER_DOWN_OUTSIDE,r,{originalEvent:l},{discrete:!0})}l.target&&!n.current?l.pointerType==="touch"?(a.removeEventListener("click",t.current),t.current=d,a.addEventListener("click",t.current,{once:!0})):d():a.removeEventListener("click",t.current),n.current=!1},i=window.setTimeout(()=>{a.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),a.removeEventListener("pointerdown",s),a.removeEventListener("click",t.current)}},[a,r]),{onPointerDownCapture:()=>{n.current=!0}}}var Mu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const[qu,Iu,Vu,ju]=_u();let _n=0,Ai;const Lu=A.forwardRef((e,a)=>Iu(!1)?v.createElement(fi,Object.assign({ref:a},e)):v.createElement(wu,null,v.createElement(fi,Object.assign({ref:a},e)))),wu=({children:e})=>{const a=Vu();return v.createElement(qu,{value:a},e)},fi=A.forwardRef((e,a)=>{var r,{children:n,asChild:t,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:d,onDismiss:g,safeZone:u,disableOutsidePointerEvents:k=!1,enabled:m=!0}=e,p=Mu(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,f]=A.useState({}),{register:c,index:T,descendants:F}=ju({disableOutsidePointerEvents:k,disabled:!m,forceUpdate:()=>f({})}),[y,R]=A.useState(null),N=rt(R,c,a),P=(r=y==null?void 0:y.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,b=A.useRef(!1),O=A.useRef(!1),S=(()=>{let D=-1;return F.enabledValues().forEach((C,$)=>{C.disableOutsidePointerEvents&&(D=$)}),{isPointerEventsEnabled:T>=D,isBodyPointerEventsDisabled:_n>0,pointerStyle:T>=D&&_n>0?"auto":void 0}})();function K(D){var H,C;if(!(u!=null&&u.anchor)&&!(u!=null&&u.dismissable)||!m)return;D.defaultPrevented||(b.current=!0,D.detail.originalEvent.type==="pointerdown"&&(O.current=!0));const $=D.target;D.detail.originalEvent.type==="pointerdown"?(!((H=u==null?void 0:u.anchor)===null||H===void 0)&&H.contains($)||$===(u==null?void 0:u.anchor))&&D.preventDefault():!($ instanceof HTMLElement&&![u==null?void 0:u.anchor,u==null?void 0:u.dismissable].some(pe=>pe==null?void 0:pe.contains($))&&!$.contains((C=u==null?void 0:u.dismissable)!==null&&C!==void 0?C:null))&&D.preventDefault(),D.detail.originalEvent.type==="focusin"&&O.current&&D.preventDefault(),O.current=!1,b.current=!1}const j=Du(D=>{!S.isPointerEventsEnabled||!m||(i==null||i(D),d==null||d(D),u&&K(D),!D.defaultPrevented&&g&&g())},P),L=Pu(D=>{m&&(l==null||l(D),d==null||d(D),u&&K(D),!D.defaultPrevented&&g&&g())},P);Ku(D=>{!m||!(T===F.enabledCount()-1)||(s==null||s(D),!D.defaultPrevented&&g&&(D.preventDefault(),g()))},P),A.useEffect(()=>{if(!(!y||!m||!k))return _n===0&&(Ai=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),_n++,()=>{_n===1&&(P.body.style.pointerEvents=Ai),_n--}},[y,P,k,F,m]),A.useEffect(()=>()=>F.values().forEach(D=>D.forceUpdate()),[F,y]);const M=t?ya:"div";return v.createElement(M,Object.assign({ref:N},p,{onFocusCapture:L.onFocusCapture,onBlurCapture:L.onBlurCapture,onPointerDownCapture:j.onPointerDownCapture,style:Object.assign({pointerEvents:S.pointerStyle},p.style)}),n)});function Aa(e,a,r){const n=ne(e,r==null?void 0:r.in);return isNaN(a)?ge((r==null?void 0:r.in)||e,NaN):(a&&n.setDate(n.getDate()+a),n)}function fs(e,a,r){const n=ne(e,r==null?void 0:r.in);if(isNaN(a))return ge(e,NaN);if(!a)return n;const t=n.getDate(),s=ge(e,n.getTime());s.setMonth(n.getMonth()+a+1,0);const i=s.getDate();return t>=i?s:(n.setFullYear(s.getFullYear(),s.getMonth(),t),n)}function Ua(e,a){const r=ne(e,a==null?void 0:a.in).getDay();return r===0||r===6}function An(e,a){return Gr(e,{...a,weekStartsOn:1})}function Jl(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getFullYear(),t=ge(r,0);t.setFullYear(n+1,0,4),t.setHours(0,0,0,0);const s=An(t),i=ge(r,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const l=An(i);return r.getTime()>=s.getTime()?n+1:r.getTime()>=l.getTime()?n:n-1}function Ga(e){const a=ne(e),r=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return r.setUTCFullYear(a.getFullYear()),+e-+r}function Br(e,a){const r=ne(e,a==null?void 0:a.in);return r.setHours(0,0,0,0),r}function Qr(e,a,r){const[n,t]=xn(r==null?void 0:r.in,e,a),s=Br(n),i=Br(t),l=+s-Ga(s),d=+i-Ga(i);return Math.round((l-d)/Eu)}function Uu(e,a){const r=Jl(e,a),n=ge(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),An(n)}function Gu(e,a,r){return Aa(e,a*7,r)}function cs(e,a,r){return fs(e,a*12,r)}function Bu(e,a){let r,n=a==null?void 0:a.in;return e.forEach(t=>{!n&&typeof t=="object"&&(n=ge.bind(null,t));const s=ne(t,n);(!r||r<s||isNaN(+s))&&(r=s)}),ge(n,r||NaN)}function xu(e,a){let r,n=a==null?void 0:a.in;return e.forEach(t=>{!n&&typeof t=="object"&&(n=ge.bind(null,t));const s=ne(t,n);(!r||r>s||isNaN(+s))&&(r=s)}),ge(n,r||NaN)}function Rs(e,a,r){const[n,t]=xn(r==null?void 0:r.in,e,a);return+Br(n)==+Br(t)}function Wl(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Hu(e){return!(!Wl(e)&&typeof e!="number"||isNaN(+ne(e)))}function Yu(e,a,r){const[n,t]=xn(r==null?void 0:r.in,e,a),s=n.getFullYear()-t.getFullYear(),i=n.getMonth()-t.getMonth();return s*12+i}function zl(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Cu(e,a){const[r,n]=xn(e,a.start,a.end);return{start:r,end:n}}function Xl(e,a){const{start:r,end:n}=Cu(a==null?void 0:a.in,e);let t=+r>+n;const s=t?+r:+n,i=t?n:r;i.setHours(0,0,0,0),i.setDate(1);let l=1;const d=[];for(;+i<=s;)d.push(ge(r,i)),i.setMonth(i.getMonth()+l);return t?d.reverse():d}function fn(e,a){const r=ne(e,a==null?void 0:a.in);return r.setDate(1),r.setHours(0,0,0,0),r}function ot(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function fa(e,a){const r=ne(e,a==null?void 0:a.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Zl(e,a){var l,d,g,u;const r=On(),n=(a==null?void 0:a.weekStartsOn)??((d=(l=a==null?void 0:a.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((u=(g=r.locale)==null?void 0:g.options)==null?void 0:u.weekStartsOn)??0,t=ne(e,a==null?void 0:a.in),s=t.getDay(),i=(s<n?-7:0)+6-(s-n);return t.setDate(t.getDate()+i),t.setHours(23,59,59,999),t}function $u(e,a){return Zl(e,{...a,weekStartsOn:1})}function Ju(e,a){const r=ne(e,a==null?void 0:a.in);return Qr(r,fa(r))+1}function Fs(e,a){const r=ne(e,a==null?void 0:a.in),n=+An(r)-+Uu(r);return Math.round(n/Yl)+1}function Os(e,a){var u,k,m,p;const r=ne(e,a==null?void 0:a.in),n=r.getFullYear(),t=On(),s=(a==null?void 0:a.firstWeekContainsDate)??((k=(u=a==null?void 0:a.locale)==null?void 0:u.options)==null?void 0:k.firstWeekContainsDate)??t.firstWeekContainsDate??((p=(m=t.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,i=ge((a==null?void 0:a.in)||e,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);const l=Gr(i,a),d=ge((a==null?void 0:a.in)||e,0);d.setFullYear(n,0,s),d.setHours(0,0,0,0);const g=Gr(d,a);return+r>=+l?n+1:+r>=+g?n:n-1}function Wu(e,a){var l,d,g,u;const r=On(),n=(a==null?void 0:a.firstWeekContainsDate)??((d=(l=a==null?void 0:a.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(g=r.locale)==null?void 0:g.options)==null?void 0:u.firstWeekContainsDate)??1,t=Os(e,a),s=ge((a==null?void 0:a.in)||e,0);return s.setFullYear(t,0,n),s.setHours(0,0,0,0),Gr(s,a)}function bs(e,a){const r=ne(e,a==null?void 0:a.in),n=+Gr(r,a)-+Wu(r,a);return Math.round(n/Yl)+1}function ue(e,a){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(a,"0");return r+n}const zr={y(e,a){const r=e.getFullYear(),n=r>0?r:1-r;return ue(a==="yy"?n%100:n,a.length)},M(e,a){const r=e.getMonth();return a==="M"?String(r+1):ue(r+1,2)},d(e,a){return ue(e.getDate(),a.length)},a(e,a){const r=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,a){return ue(e.getHours()%12||12,a.length)},H(e,a){return ue(e.getHours(),a.length)},m(e,a){return ue(e.getMinutes(),a.length)},s(e,a){return ue(e.getSeconds(),a.length)},S(e,a){const r=a.length,n=e.getMilliseconds(),t=Math.trunc(n*Math.pow(10,r-3));return ue(t,a.length)}},Kn={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ci={G:function(e,a,r){const n=e.getFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,a,r){if(a==="yo"){const n=e.getFullYear(),t=n>0?n:1-n;return r.ordinalNumber(t,{unit:"year"})}return zr.y(e,a)},Y:function(e,a,r,n){const t=Os(e,n),s=t>0?t:1-t;if(a==="YY"){const i=s%100;return ue(i,2)}return a==="Yo"?r.ordinalNumber(s,{unit:"year"}):ue(s,a.length)},R:function(e,a){const r=Jl(e);return ue(r,a.length)},u:function(e,a){const r=e.getFullYear();return ue(r,a.length)},Q:function(e,a,r){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return ue(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,a,r){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return ue(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,a,r){const n=e.getMonth();switch(a){case"M":case"MM":return zr.M(e,a);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,a,r){const n=e.getMonth();switch(a){case"L":return String(n+1);case"LL":return ue(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,a,r,n){const t=bs(e,n);return a==="wo"?r.ordinalNumber(t,{unit:"week"}):ue(t,a.length)},I:function(e,a,r){const n=Fs(e);return a==="Io"?r.ordinalNumber(n,{unit:"week"}):ue(n,a.length)},d:function(e,a,r){return a==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):zr.d(e,a)},D:function(e,a,r){const n=Ju(e);return a==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):ue(n,a.length)},E:function(e,a,r){const n=e.getDay();switch(a){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,a,r,n){const t=e.getDay(),s=(t-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(s);case"ee":return ue(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(t,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(t,{width:"short",context:"formatting"});case"eeee":default:return r.day(t,{width:"wide",context:"formatting"})}},c:function(e,a,r,n){const t=e.getDay(),s=(t-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(s);case"cc":return ue(s,a.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(t,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(t,{width:"narrow",context:"standalone"});case"cccccc":return r.day(t,{width:"short",context:"standalone"});case"cccc":default:return r.day(t,{width:"wide",context:"standalone"})}},i:function(e,a,r){const n=e.getDay(),t=n===0?7:n;switch(a){case"i":return String(t);case"ii":return ue(t,a.length);case"io":return r.ordinalNumber(t,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,a,r){const t=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})}},b:function(e,a,r){const n=e.getHours();let t;switch(n===12?t=Kn.noon:n===0?t=Kn.midnight:t=n/12>=1?"pm":"am",a){case"b":case"bb":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})}},B:function(e,a,r){const n=e.getHours();let t;switch(n>=17?t=Kn.evening:n>=12?t=Kn.afternoon:n>=4?t=Kn.morning:t=Kn.night,a){case"B":case"BB":case"BBB":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})}},h:function(e,a,r){if(a==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return zr.h(e,a)},H:function(e,a,r){return a==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):zr.H(e,a)},K:function(e,a,r){const n=e.getHours()%12;return a==="Ko"?r.ordinalNumber(n,{unit:"hour"}):ue(n,a.length)},k:function(e,a,r){let n=e.getHours();return n===0&&(n=24),a==="ko"?r.ordinalNumber(n,{unit:"hour"}):ue(n,a.length)},m:function(e,a,r){return a==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):zr.m(e,a)},s:function(e,a,r){return a==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):zr.s(e,a)},S:function(e,a){return zr.S(e,a)},X:function(e,a,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(a){case"X":return Fi(n);case"XXXX":case"XX":return vn(n);case"XXXXX":case"XXX":default:return vn(n,":")}},x:function(e,a,r){const n=e.getTimezoneOffset();switch(a){case"x":return Fi(n);case"xxxx":case"xx":return vn(n);case"xxxxx":case"xxx":default:return vn(n,":")}},O:function(e,a,r){const n=e.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+Ri(n,":");case"OOOO":default:return"GMT"+vn(n,":")}},z:function(e,a,r){const n=e.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+Ri(n,":");case"zzzz":default:return"GMT"+vn(n,":")}},t:function(e,a,r){const n=Math.trunc(+e/1e3);return ue(n,a.length)},T:function(e,a,r){return ue(+e,a.length)}};function Ri(e,a=""){const r=e>0?"-":"+",n=Math.abs(e),t=Math.trunc(n/60),s=n%60;return s===0?r+String(t):r+String(t)+a+ue(s,2)}function Fi(e,a){return e%60===0?(e>0?"-":"+")+ue(Math.abs(e)/60,2):vn(e,a)}function vn(e,a=""){const r=e>0?"-":"+",n=Math.abs(e),t=ue(Math.trunc(n/60),2),s=ue(n%60,2);return r+t+a+s}const Oi=(e,a)=>{switch(e){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}},Ql=(e,a)=>{switch(e){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}},zu=(e,a)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],t=r[2];if(!t)return Oi(e,a);let s;switch(n){case"P":s=a.dateTime({width:"short"});break;case"PP":s=a.dateTime({width:"medium"});break;case"PPP":s=a.dateTime({width:"long"});break;case"PPPP":default:s=a.dateTime({width:"full"});break}return s.replace("{{date}}",Oi(n,a)).replace("{{time}}",Ql(t,a))},Xt={p:Ql,P:zu},Xu=/^D+$/,Zu=/^Y+$/,Qu=["D","DD","YY","YYYY"];function eo(e){return Xu.test(e)}function ro(e){return Zu.test(e)}function Zt(e,a,r){const n=ek(e,a,r);if(console.warn(n),Qu.includes(e))throw new RangeError(n)}function ek(e,a,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${a}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const rk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ak=/^'([^]*?)'?$/,tk=/''/g,sk=/[a-zA-Z]/;function cn(e,a,r){var u,k,m,p,f,c,T,F;const n=On(),t=(r==null?void 0:r.locale)??n.locale??lt,s=(r==null?void 0:r.firstWeekContainsDate)??((k=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:k.firstWeekContainsDate)??n.firstWeekContainsDate??((p=(m=n.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,i=(r==null?void 0:r.weekStartsOn)??((c=(f=r==null?void 0:r.locale)==null?void 0:f.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((F=(T=n.locale)==null?void 0:T.options)==null?void 0:F.weekStartsOn)??0,l=ne(e,r==null?void 0:r.in);if(!Hu(l))throw new RangeError("Invalid time value");let d=a.match(nk).map(y=>{const R=y[0];if(R==="p"||R==="P"){const N=Xt[R];return N(y,t.formatLong)}return y}).join("").match(rk).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const R=y[0];if(R==="'")return{isToken:!1,value:ik(y)};if(ci[R])return{isToken:!0,value:y};if(R.match(sk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return{isToken:!1,value:y}});t.localize.preprocessor&&(d=t.localize.preprocessor(l,d));const g={firstWeekContainsDate:s,weekStartsOn:i,locale:t};return d.map(y=>{if(!y.isToken)return y.value;const R=y.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&ro(R)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&eo(R))&&Zt(R,a,String(e));const N=ci[R[0]];return N(l,R,t.localize,g)}).join("")}function ik(e){const a=e.match(ak);return a?a[1].replace(tk,"'"):e}function lk(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getFullYear(),t=r.getMonth(),s=ge(r,0);return s.setFullYear(n,t+1,0),s.setHours(0,0,0,0),s.getDate()}function ok(){return Object.assign({},On())}function dk(e,a){const r=ne(e,a==null?void 0:a.in).getDay();return r===0?7:r}function hs(e,a){return ne(e,a==null?void 0:a.in).getMonth()}function Ss(e,a){return ne(e,a==null?void 0:a.in).getFullYear()}function no(e,a){return+ne(e)>+ne(a)}function ca(e,a){return+ne(e)<+ne(a)}function uk(e,a){const r=kk(a)?new a(0):ge(a,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function kk(e){var a;return typeof e=="function"&&((a=e.prototype)==null?void 0:a.constructor)===e}const gk=10;class ao{constructor(){U(this,"subPriority",0)}validate(a,r){return!0}}class vk extends ao{constructor(a,r,n,t,s){super(),this.value=a,this.validateValue=r,this.setValue=n,this.priority=t,s&&(this.subPriority=s)}validate(a,r){return this.validateValue(a,this.value,r)}set(a,r,n){return this.setValue(a,r,this.value,n)}}class mk extends ao{constructor(r,n){super();U(this,"priority",gk);U(this,"subPriority",-1);this.context=r||(t=>ge(n,t))}set(r,n){return n.timestampIsSet?r:ge(r,uk(r,this.context))}}class ie{run(a,r,n,t){const s=this.parse(a,r,n,t);return s?{setter:new vk(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(a,r,n){return!0}}class pk extends ie{constructor(){super(...arguments);U(this,"priority",140);U(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,t){switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"})||t.era(r,{width:"narrow"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})||t.era(r,{width:"abbreviated"})||t.era(r,{width:"narrow"})}}set(r,n,t){return n.era=t,r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}}const Se={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},hr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ne(e,a){return e&&{value:a(e.value),rest:e.rest}}function Re(e,a){const r=a.match(e);return r?{value:parseInt(r[0],10),rest:a.slice(r[0].length)}:null}function Sr(e,a){const r=a.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:a.slice(1)};const n=r[1]==="+"?1:-1,t=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,i=r[5]?parseInt(r[5],10):0;return{value:n*(t*fu+s*Au+i*cu),rest:a.slice(r[0].length)}}function to(e){return Re(Se.anyDigitsSigned,e)}function be(e,a){switch(e){case 1:return Re(Se.singleDigit,a);case 2:return Re(Se.twoDigits,a);case 3:return Re(Se.threeDigits,a);case 4:return Re(Se.fourDigits,a);default:return Re(new RegExp("^\\d{1,"+e+"}"),a)}}function Ba(e,a){switch(e){case 1:return Re(Se.singleDigitSigned,a);case 2:return Re(Se.twoDigitsSigned,a);case 3:return Re(Se.threeDigitsSigned,a);case 4:return Re(Se.fourDigitsSigned,a);default:return Re(new RegExp("^-?\\d{1,"+e+"}"),a)}}function Ns(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function so(e,a){const r=a>0,n=r?a:1-a;let t;if(n<=50)t=e||100;else{const s=n+50,i=Math.trunc(s/100)*100,l=e>=s%100;t=e+i-(l?100:0)}return r?t:1-t}function io(e){return e%400===0||e%4===0&&e%100!==0}class yk extends ie{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,t){const s=i=>({year:i,isTwoDigitYear:n==="yy"});switch(n){case"y":return Ne(be(4,r),s);case"yo":return Ne(t.ordinalNumber(r,{unit:"year"}),s);default:return Ne(be(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,t){const s=r.getFullYear();if(t.isTwoDigitYear){const l=so(t.year,s);return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}const i=!("era"in n)||n.era===1?t.year:1-t.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}}class Tk extends ie{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,t){const s=i=>({year:i,isTwoDigitYear:n==="YY"});switch(n){case"Y":return Ne(be(4,r),s);case"Yo":return Ne(t.ordinalNumber(r,{unit:"year"}),s);default:return Ne(be(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,t,s){const i=Os(r,s);if(t.isTwoDigitYear){const d=so(t.year,i);return r.setFullYear(d,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),Gr(r,s)}const l=!("era"in n)||n.era===1?t.year:1-t.year;return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),Gr(r,s)}}class Ek extends ie{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return Ba(n==="R"?4:n.length,r)}set(r,n,t){const s=ge(r,0);return s.setFullYear(t,0,4),s.setHours(0,0,0,0),An(s)}}class Ak extends ie{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return Ba(n==="u"?4:n.length,r)}set(r,n,t){return r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}}class fk extends ie{constructor(){super(...arguments);U(this,"priority",120);U(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"Q":case"QQ":return be(n.length,r);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"})||t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})||t.quarter(r,{width:"abbreviated",context:"formatting"})||t.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,t){return r.setMonth((t-1)*3,1),r.setHours(0,0,0,0),r}}class ck extends ie{constructor(){super(...arguments);U(this,"priority",120);U(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"q":case"qq":return be(n.length,r);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"})||t.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})||t.quarter(r,{width:"abbreviated",context:"standalone"})||t.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,t){return r.setMonth((t-1)*3,1),r.setHours(0,0,0,0),r}}class Rk extends ie{constructor(){super(...arguments);U(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);U(this,"priority",110)}parse(r,n,t){const s=i=>i-1;switch(n){case"M":return Ne(Re(Se.month,r),s);case"MM":return Ne(be(2,r),s);case"Mo":return Ne(t.ordinalNumber(r,{unit:"month"}),s);case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"})||t.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})||t.month(r,{width:"abbreviated",context:"formatting"})||t.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,t){return r.setMonth(t,1),r.setHours(0,0,0,0),r}}class Fk extends ie{constructor(){super(...arguments);U(this,"priority",110);U(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,t){const s=i=>i-1;switch(n){case"L":return Ne(Re(Se.month,r),s);case"LL":return Ne(be(2,r),s);case"Lo":return Ne(t.ordinalNumber(r,{unit:"month"}),s);case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"})||t.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})||t.month(r,{width:"abbreviated",context:"standalone"})||t.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,t){return r.setMonth(t,1),r.setHours(0,0,0,0),r}}function Ok(e,a,r){const n=ne(e,r==null?void 0:r.in),t=bs(n,r)-a;return n.setDate(n.getDate()-t*7),ne(n,r==null?void 0:r.in)}class bk extends ie{constructor(){super(...arguments);U(this,"priority",100);U(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,t){switch(n){case"w":return Re(Se.week,r);case"wo":return t.ordinalNumber(r,{unit:"week"});default:return be(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,t,s){return Gr(Ok(r,t,s),s)}}function hk(e,a,r){const n=ne(e,r==null?void 0:r.in),t=Fs(n,r)-a;return n.setDate(n.getDate()-t*7),n}class Sk extends ie{constructor(){super(...arguments);U(this,"priority",100);U(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,t){switch(n){case"I":return Re(Se.week,r);case"Io":return t.ordinalNumber(r,{unit:"week"});default:return be(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,t){return An(hk(r,t))}}const Nk=[31,28,31,30,31,30,31,31,30,31,30,31],_k=[31,29,31,30,31,30,31,31,30,31,30,31];class Kk extends ie{constructor(){super(...arguments);U(this,"priority",90);U(this,"subPriority",1);U(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"d":return Re(Se.date,r);case"do":return t.ordinalNumber(r,{unit:"date"});default:return be(n.length,r)}}validate(r,n){const t=r.getFullYear(),s=io(t),i=r.getMonth();return s?n>=1&&n<=_k[i]:n>=1&&n<=Nk[i]}set(r,n,t){return r.setDate(t),r.setHours(0,0,0,0),r}}class Pk extends ie{constructor(){super(...arguments);U(this,"priority",90);U(this,"subpriority",1);U(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,t){switch(n){case"D":case"DD":return Re(Se.dayOfYear,r);case"Do":return t.ordinalNumber(r,{unit:"date"});default:return be(n.length,r)}}validate(r,n){const t=r.getFullYear();return io(t)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,t){return r.setMonth(0,t),r.setHours(0,0,0,0),r}}function _s(e,a,r){var k,m,p,f;const n=On(),t=(r==null?void 0:r.weekStartsOn)??((m=(k=r==null?void 0:r.locale)==null?void 0:k.options)==null?void 0:m.weekStartsOn)??n.weekStartsOn??((f=(p=n.locale)==null?void 0:p.options)==null?void 0:f.weekStartsOn)??0,s=ne(e,r==null?void 0:r.in),i=s.getDay(),d=(a%7+7)%7,g=7-t,u=a<0||a>6?a-(i+g)%7:(d+g)%7-(i+g)%7;return Aa(s,u,r)}class Dk extends ie{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})||t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,t,s){return r=_s(r,t,s),r.setHours(0,0,0,0),r}}class Mk extends ie{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,t,s){const i=l=>{const d=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+d};switch(n){case"e":case"ee":return Ne(be(n.length,r),i);case"eo":return Ne(t.ordinalNumber(r,{unit:"day"}),i);case"eee":return t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})||t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,t,s){return r=_s(r,t,s),r.setHours(0,0,0,0),r}}class qk extends ie{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,t,s){const i=l=>{const d=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+d};switch(n){case"c":case"cc":return Ne(be(n.length,r),i);case"co":return Ne(t.ordinalNumber(r,{unit:"day"}),i);case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"})||t.day(r,{width:"short",context:"standalone"})||t.day(r,{width:"narrow",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"})||t.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})||t.day(r,{width:"abbreviated",context:"standalone"})||t.day(r,{width:"short",context:"standalone"})||t.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,t,s){return r=_s(r,t,s),r.setHours(0,0,0,0),r}}function Ik(e,a,r){const n=ne(e,r==null?void 0:r.in),t=dk(n,r),s=a-t;return Aa(n,s,r)}class Vk extends ie{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,t){const s=i=>i===0?7:i;switch(n){case"i":case"ii":return be(n.length,r);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return Ne(t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return Ne(t.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return Ne(t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return Ne(t.day(r,{width:"wide",context:"formatting"})||t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,n){return n>=1&&n<=7}set(r,n,t){return r=Ik(r,t),r.setHours(0,0,0,0),r}}class jk extends ie{constructor(){super(...arguments);U(this,"priority",80);U(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,t){switch(n){case"a":case"aa":case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})||t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,t){return r.setHours(Ns(t),0,0,0),r}}class Lk extends ie{constructor(){super(...arguments);U(this,"priority",80);U(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,t){switch(n){case"b":case"bb":case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})||t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,t){return r.setHours(Ns(t),0,0,0),r}}class wk extends ie{constructor(){super(...arguments);U(this,"priority",80);U(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,t){switch(n){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})||t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,t){return r.setHours(Ns(t),0,0,0),r}}class Uk extends ie{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,t){switch(n){case"h":return Re(Se.hour12h,r);case"ho":return t.ordinalNumber(r,{unit:"hour"});default:return be(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,t){const s=r.getHours()>=12;return s&&t<12?r.setHours(t+12,0,0,0):!s&&t===12?r.setHours(0,0,0,0):r.setHours(t,0,0,0),r}}class Gk extends ie{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,t){switch(n){case"H":return Re(Se.hour23h,r);case"Ho":return t.ordinalNumber(r,{unit:"hour"});default:return be(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,t){return r.setHours(t,0,0,0),r}}class Bk extends ie{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,t){switch(n){case"K":return Re(Se.hour11h,r);case"Ko":return t.ordinalNumber(r,{unit:"hour"});default:return be(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,t){return r.getHours()>=12&&t<12?r.setHours(t+12,0,0,0):r.setHours(t,0,0,0),r}}class xk extends ie{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,t){switch(n){case"k":return Re(Se.hour24h,r);case"ko":return t.ordinalNumber(r,{unit:"hour"});default:return be(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,t){const s=t<=24?t%24:t;return r.setHours(s,0,0,0),r}}class Hk extends ie{constructor(){super(...arguments);U(this,"priority",60);U(this,"incompatibleTokens",["t","T"])}parse(r,n,t){switch(n){case"m":return Re(Se.minute,r);case"mo":return t.ordinalNumber(r,{unit:"minute"});default:return be(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,t){return r.setMinutes(t,0,0),r}}class Yk extends ie{constructor(){super(...arguments);U(this,"priority",50);U(this,"incompatibleTokens",["t","T"])}parse(r,n,t){switch(n){case"s":return Re(Se.second,r);case"so":return t.ordinalNumber(r,{unit:"second"});default:return be(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,t){return r.setSeconds(t,0),r}}class Ck extends ie{constructor(){super(...arguments);U(this,"priority",30);U(this,"incompatibleTokens",["t","T"])}parse(r,n){const t=s=>Math.trunc(s*Math.pow(10,-n.length+3));return Ne(be(n.length,r),t)}set(r,n,t){return r.setMilliseconds(t),r}}class $k extends ie{constructor(){super(...arguments);U(this,"priority",10);U(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return Sr(hr.basicOptionalMinutes,r);case"XX":return Sr(hr.basic,r);case"XXXX":return Sr(hr.basicOptionalSeconds,r);case"XXXXX":return Sr(hr.extendedOptionalSeconds,r);case"XXX":default:return Sr(hr.extended,r)}}set(r,n,t){return n.timestampIsSet?r:ge(r,r.getTime()-Ga(r)-t)}}class Jk extends ie{constructor(){super(...arguments);U(this,"priority",10);U(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return Sr(hr.basicOptionalMinutes,r);case"xx":return Sr(hr.basic,r);case"xxxx":return Sr(hr.basicOptionalSeconds,r);case"xxxxx":return Sr(hr.extendedOptionalSeconds,r);case"xxx":default:return Sr(hr.extended,r)}}set(r,n,t){return n.timestampIsSet?r:ge(r,r.getTime()-Ga(r)-t)}}class Wk extends ie{constructor(){super(...arguments);U(this,"priority",40);U(this,"incompatibleTokens","*")}parse(r){return to(r)}set(r,n,t){return[ge(r,t*1e3),{timestampIsSet:!0}]}}class zk extends ie{constructor(){super(...arguments);U(this,"priority",20);U(this,"incompatibleTokens","*")}parse(r){return to(r)}set(r,n,t){return[ge(r,t),{timestampIsSet:!0}]}}const Xk={G:new pk,y:new yk,Y:new Tk,R:new Ek,u:new Ak,Q:new fk,q:new ck,M:new Rk,L:new Fk,w:new bk,I:new Sk,d:new Kk,D:new Pk,E:new Dk,e:new Mk,c:new qk,i:new Vk,a:new jk,b:new Lk,B:new wk,h:new Uk,H:new Gk,K:new Bk,k:new xk,m:new Hk,s:new Yk,S:new Ck,X:new $k,x:new Jk,t:new Wk,T:new zk},Zk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,eg=/^'([^]*?)'?$/,rg=/''/g,ng=/\S/,ag=/[a-zA-Z]/;function jn(e,a,r,n){var T,F,y,R,N,P,b,O;const t=()=>ge((n==null?void 0:n.in)||r,NaN),s=ok(),i=(n==null?void 0:n.locale)??s.locale??lt,l=(n==null?void 0:n.firstWeekContainsDate)??((F=(T=n==null?void 0:n.locale)==null?void 0:T.options)==null?void 0:F.firstWeekContainsDate)??s.firstWeekContainsDate??((R=(y=s.locale)==null?void 0:y.options)==null?void 0:R.firstWeekContainsDate)??1,d=(n==null?void 0:n.weekStartsOn)??((P=(N=n==null?void 0:n.locale)==null?void 0:N.options)==null?void 0:P.weekStartsOn)??s.weekStartsOn??((O=(b=s.locale)==null?void 0:b.options)==null?void 0:O.weekStartsOn)??0;if(!a)return e?t():ne(r,n==null?void 0:n.in);const g={firstWeekContainsDate:l,weekStartsOn:d,locale:i},u=[new mk(n==null?void 0:n.in,r)],k=a.match(Qk).map(S=>{const K=S[0];if(K in Xt){const j=Xt[K];return j(S,i.formatLong)}return S}).join("").match(Zk),m=[];for(let S of k){!(n!=null&&n.useAdditionalWeekYearTokens)&&ro(S)&&Zt(S,a,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&eo(S)&&Zt(S,a,e);const K=S[0],j=Xk[K];if(j){const{incompatibleTokens:L}=j;if(Array.isArray(L)){const D=m.find(H=>L.includes(H.token)||H.token===K);if(D)throw new RangeError(`The format string mustn't contain \`${D.fullToken}\` and \`${S}\` at the same time`)}else if(j.incompatibleTokens==="*"&&m.length>0)throw new RangeError(`The format string mustn't contain \`${S}\` and any other token at the same time`);m.push({token:K,fullToken:S});const M=j.run(e,S,i.match,g);if(!M)return t();u.push(M.setter),e=M.rest}else{if(K.match(ag))throw new RangeError("Format string contains an unescaped latin alphabet character `"+K+"`");if(S==="''"?S="'":K==="'"&&(S=tg(S)),e.indexOf(S)===0)e=e.slice(S.length);else return t()}}if(e.length>0&&ng.test(e))return t();const p=u.map(S=>S.priority).sort((S,K)=>K-S).filter((S,K,j)=>j.indexOf(S)===K).map(S=>u.filter(K=>K.priority===S).sort((K,j)=>j.subPriority-K.subPriority)).map(S=>S[0]);let f=ne(r,n==null?void 0:n.in);if(isNaN(+f))return t();const c={};for(const S of p){if(!S.validate(f,g))return t();const K=S.set(f,c,g);Array.isArray(K)?(f=K[0],Object.assign(c,K[1])):f=K}return f}function tg(e){return e.match(eg)[1].replace(rg,"'")}function sg(e,a,r){const[n,t]=xn(r==null?void 0:r.in,e,a);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}function lo(e,a,r){const[n,t]=xn(r==null?void 0:r.in,e,a);return n.getFullYear()===t.getFullYear()}function ig(e,a,r){return Aa(e,-a,r)}function oo(e,a,r){const n=ne(e,r==null?void 0:r.in),t=n.getFullYear(),s=n.getDate(),i=ge(e,0);i.setFullYear(t,a,15),i.setHours(0,0,0,0);const l=lk(i);return n.setMonth(a,Math.min(s,l)),n}function uo(e,a,r){const n=ne(e,r==null?void 0:r.in);return isNaN(+n)?ge(e,NaN):(n.setFullYear(a),n)}function lg(e,a,r){return fs(e,-a,r)}function og(e,a,r){const{years:n=0,months:t=0,weeks:s=0,days:i=0,hours:l=0,minutes:d=0,seconds:g=0}=a,u=lg(e,t+n*12,r),k=ig(u,i+s*7,r),m=d+l*60,f=(g+m*60)*1e3;return ge(e,+k-f)}var dg=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ug=A.forwardRef((e,a)=>{var{className:r}=e,n=dg(e,["className"]);const{cn:t}=se();return v.createElement("div",Object.assign({},n,{ref:a,className:t("navds-popover__content",r)}))});var kg=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ko=A.forwardRef((e,a)=>{var{className:r,children:n,anchorEl:t,arrow:s=!0,open:i,onClose:l,placement:d="top",offset:g,strategy:u,flip:k=!0}=e,m=kg(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:p}=se(),f=A.useRef(null),c=Il(!1)!==void 0,T=Id(!1),F=u??(c?"fixed":"absolute"),y=T?!1:k,R=gs(!1),{update:N,refs:P,placement:b,middlewareData:{arrow:{x:O,y:S}={}},floatingStyles:K}=Vd({strategy:F,placement:d,open:i,middleware:[Ld(g??(R?8:s?16:4)),y&&wd({padding:5,fallbackPlacements:["bottom","top"]}),Ud({padding:12}),Gd({element:f,padding:8})]});Un(()=>{P.setReference(t)},[t]);const j=rt(P.setFloating,a);Un(()=>{if(!P.reference.current||!P.floating.current||!i)return;const M=jd(P.reference.current,P.floating.current,N);return()=>M()},[P.floating,P.reference,N,i,t]);const L={top:"bottom",right:"left",bottom:"top",left:"right"}[b.split("-")[0]];return v.createElement(Lu,{asChild:!0,safeZone:{anchor:t,dismissable:P.floating.current},onDismiss:()=>i&&(l==null?void 0:l()),enabled:i},v.createElement("div",Object.assign({ref:j},m,{className:p("navds-popover",r,{"navds-popover--hidden":!i||!t}),style:Object.assign(Object.assign({},m.style),K),"data-placement":b,"aria-hidden":!i||!t}),n,s&&!R&&v.createElement("div",{ref:M=>{f.current=M},style:Object.assign(Object.assign(Object.assign({},O!=null?{left:O}:{}),S!=null?{top:S}:{}),L?{[L]:"-0.5rem"}:{}),className:p("navds-popover__arrow")})))});ko.Content=ug;const gg={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},vg=({open:e,children:a,onClose:r,anchor:n,locale:t,translate:s,variant:i,popoverProps:l})=>{const d=Ta("global",Bd(t)),{cn:g}=se(),u=A.useRef(null),k=Il(!1)!==void 0;return Tu("screen and (min-width: 768px)",!0)&&!k?v.createElement(ko,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:g("navds-date__popover",{"navds-date":i==="month"}),flip:!1},l),a):v.createElement(xd,{ref:u,open:e,onClose:p=>{p.stopPropagation(),r()},"aria-label":s(gg[i]),className:g("navds-date__modal",{"navds-date__nested-modal":k,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},v.createElement("div",{className:g("navds-date__modal-body")},a,v.createElement(We,{variant:"tertiary",onClick:()=>{var p;return(p=u==null?void 0:u.current)===null||p===void 0?void 0:p.close()},size:"small",type:"button"},d("close"))))};function go(e){return!!(e&&typeof e=="object"&&"from"in e)}var J;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(J||(J={}));var ye;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(ye||(ye={}));var Er;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Er||(Er={}));var dr;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(dr||(dr={}));const Dt={},oa={};function ga(e,a){try{const n=(Dt[e]||(Dt[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(a).split("GMT")[1]||"";return n in oa?oa[n]:bi(n,n.split(":"))}catch{if(e in oa)return oa[e];const r=e==null?void 0:e.match(mg);return r?bi(e,r.slice(1)):NaN}}const mg=/([+-]\d\d):?(\d\d)?/;function bi(e,a){const r=+a[0],n=+(a[1]||0);return oa[e]=r>0?r*60+n:r*60-n}class _r extends Date{constructor(...a){super(),a.length>1&&typeof a[a.length-1]=="string"&&(this.timeZone=a.pop()),this.internal=new Date,isNaN(ga(this.timeZone,this))?this.setTime(NaN):a.length?typeof a[0]=="number"&&(a.length===1||a.length===2&&typeof a[1]!="number")?this.setTime(a[0]):typeof a[0]=="string"?this.setTime(+new Date(a[0])):a[0]instanceof Date?this.setTime(+a[0]):(this.setTime(+new Date(...a)),vo(this),Qt(this)):this.setTime(Date.now())}static tz(a,...r){return r.length?new _r(...r,a):new _r(Date.now(),a)}withTimeZone(a){return new _r(+this,a)}getTimezoneOffset(){return-ga(this.timeZone,this)}setTime(a){return Date.prototype.setTime.apply(this,arguments),Qt(this),+this}[Symbol.for("constructDateFrom")](a){return new _r(+new Date(a),this.timeZone)}}const hi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!hi.test(e))return;const a=e.replace(hi,"$1UTC");_r.prototype[a]&&(e.startsWith("get")?_r.prototype[e]=function(){return this.internal[a]()}:(_r.prototype[e]=function(){return Date.prototype[a].apply(this.internal,arguments),pg(this),+this},_r.prototype[a]=function(){return Date.prototype[a].apply(this,arguments),Qt(this),+this}))});function Qt(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function pg(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),vo(e)}function vo(e){const a=ga(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),t=-new Date(+r).getTimezoneOffset(),s=n-t,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const l=n-a;l&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);const d=ga(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-d,k=d!==a,m=u-l;if(k&&m){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+m);const p=ga(e.timeZone,e),f=d-p;f&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+f),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+f))}}class yn extends _r{static tz(a,...r){return r.length?new yn(...r,a):new yn(Date.now(),a)}toISOString(){const[a,r,n]=this.tzComponents(),t=`${a}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+t}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[a,r,n,t]=this.internal.toUTCString().split(" ");return`${a==null?void 0:a.slice(0,-1)} ${n} ${r} ${t}`}toTimeString(){const a=this.internal.toUTCString().split(" ")[4],[r,n,t]=this.tzComponents();return`${a} GMT${r}${n}${t} (${yg(this.timeZone,this)})`}toLocaleString(a,r){return Date.prototype.toLocaleString.call(this,a,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(a,r){return Date.prototype.toLocaleDateString.call(this,a,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(a,r){return Date.prototype.toLocaleTimeString.call(this,a,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const a=this.getTimezoneOffset(),r=a>0?"-":"+",n=String(Math.floor(Math.abs(a)/60)).padStart(2,"0"),t=String(Math.abs(a)%60).padStart(2,"0");return[r,n,t]}withTimeZone(a){return new yn(+this,a)}[Symbol.for("constructDateFrom")](a){return new yn(+new Date(a),this.timeZone)}}function yg(e,a){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(a).slice(12)}const Si=5,Tg=4;function Eg(e,a){const r=a.startOfMonth(e),n=r.getDay()>0?r.getDay():7,t=a.addDays(e,-n+1),s=a.addDays(t,Si*7-1);return a.getMonth(e)===a.getMonth(s)?Si:Tg}function mo(e,a){const r=a.startOfMonth(e),n=r.getDay();return n===1?r:n===0?a.addDays(r,-1*6):a.addDays(r,-1*(n-1))}function Ag(e,a){const r=mo(e,a),n=Eg(e,a);return a.addDays(r,n*7-1)}class Hr{constructor(a,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?yn.tz(this.options.timeZone):new this.Date},this.newDate=(n,t,s)=>{var i;return(i=this.overrides)!=null&&i.newDate?this.overrides.newDate(n,t,s):this.options.timeZone?new yn(n,t,s,this.options.timeZone):new Date(n,t,s)},this.addDays=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addDays)==null?void 0:i.call(s,n,t))??Aa(n,t)},this.addMonths=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addMonths)==null?void 0:i.call(s,n,t))??fs(n,t)},this.addWeeks=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addWeeks)==null?void 0:i.call(s,n,t))??Gu(n,t)},this.addYears=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.addYears)==null?void 0:i.call(s,n,t))??cs(n,t)},this.differenceInCalendarDays=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarDays)==null?void 0:i.call(s,n,t))??Qr(n,t)},this.differenceInCalendarMonths=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.differenceInCalendarMonths)==null?void 0:i.call(s,n,t))??Yu(n,t)},this.eachMonthOfInterval=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.eachMonthOfInterval)==null?void 0:s.call(t,n))??Xl(n)},this.endOfBroadcastWeek=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfBroadcastWeek)==null?void 0:i.call(s,n,t))??Ag(n,this)},this.endOfISOWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.endOfISOWeek)==null?void 0:s.call(t,n))??$u(n)},this.endOfMonth=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.endOfMonth)==null?void 0:s.call(t,n))??zl(n)},this.endOfWeek=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.endOfWeek)==null?void 0:i.call(s,n,t??this.options))??Zl(n,t??this.options)},this.endOfYear=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.endOfYear)==null?void 0:s.call(t,n))??ot(n)},this.format=(n,t,s)=>{var l,d;const i=((d=(l=this.overrides)==null?void 0:l.format)==null?void 0:d.call(l,n,t,s??this.options))??cn(n,t,s??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.getISOWeek)==null?void 0:s.call(t,n))??Fs(n)},this.getMonth=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.getMonth)==null?void 0:s.call(t,n))??hs(n)},this.getYear=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.getYear)==null?void 0:s.call(t,n))??Ss(n)},this.getWeek=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.getWeek)==null?void 0:i.call(s,n,t??this.options))??bs(n,t??this.options)},this.isAfter=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isAfter)==null?void 0:i.call(s,n,t))??no(n,t)},this.isBefore=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isBefore)==null?void 0:i.call(s,n,t))??ca(n,t)},this.isDate=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.isDate)==null?void 0:s.call(t,n))??Wl(n)},this.isSameDay=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameDay)==null?void 0:i.call(s,n,t))??Rs(n,t)},this.isSameMonth=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameMonth)==null?void 0:i.call(s,n,t))??sg(n,t)},this.isSameYear=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.isSameYear)==null?void 0:i.call(s,n,t))??lo(n,t)},this.max=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.max)==null?void 0:s.call(t,n))??Bu(n)},this.min=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.min)==null?void 0:s.call(t,n))??xu(n)},this.setMonth=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setMonth)==null?void 0:i.call(s,n,t))??oo(n,t)},this.setYear=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.setYear)==null?void 0:i.call(s,n,t))??uo(n,t)},this.startOfBroadcastWeek=(n,t)=>{var s,i;return((i=(s=this.overrides)==null?void 0:s.startOfBroadcastWeek)==null?void 0:i.call(s,n,t??this))??mo(n,t??this)},this.startOfDay=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfDay)==null?void 0:s.call(t,n))??Br(n)},this.startOfISOWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfISOWeek)==null?void 0:s.call(t,n))??An(n)},this.startOfMonth=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfMonth)==null?void 0:s.call(t,n))??fn(n)},this.startOfWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfWeek)==null?void 0:s.call(t,n))??Gr(n,this.options)},this.startOfYear=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfYear)==null?void 0:s.call(t,n))??fa(n)},this.options={locale:lt,...a},this.overrides=r}getDigitMap(){const{numerals:a="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:a}),n={};for(let t=0;t<10;t++)n[t.toString()]=r.format(t);return n}replaceDigits(a){const r=this.getDigitMap();return a.replace(/\d/g,n=>r[n]||n)}formatNumber(a){return this.replaceDigits(a.toString())}}const Yr=new Hr;function fg(e,a,r={}){return Object.entries(e).filter(([,t])=>t===!0).reduce((t,[s])=>(r[s]?t.push(r[s]):a[ye[s]]?t.push(a[ye[s]]):a[Er[s]]&&t.push(a[Er[s]]),t),[a[J.Day]])}function cg(e){return v.createElement("button",{...e})}function Rg(e){return v.createElement("span",{...e})}function Fg(e){const{size:a=24,orientation:r="left",className:n}=e;return v.createElement("svg",{className:n,width:a,height:a,viewBox:"0 0 24 24"},r==="up"&&v.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&v.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&v.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&v.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function Og(e){const{day:a,modifiers:r,...n}=e;return v.createElement("td",{...n})}function bg(e){const{day:a,modifiers:r,...n}=e,t=v.useRef(null);return v.useEffect(()=>{var s;r.focused&&((s=t.current)==null||s.focus())},[r.focused]),v.createElement("button",{ref:t,...n})}function hg(e){const{options:a,className:r,components:n,classNames:t,...s}=e,i=[t[J.Dropdown],r].join(" "),l=a==null?void 0:a.find(({value:d})=>d===s.value);return v.createElement("span",{"data-disabled":s.disabled,className:t[J.DropdownRoot]},v.createElement(n.Select,{className:i,...s},a==null?void 0:a.map(({value:d,label:g,disabled:u})=>v.createElement(n.Option,{key:d,value:d,disabled:u},g))),v.createElement("span",{className:t[J.CaptionLabel],"aria-hidden":!0},l==null?void 0:l.label,v.createElement(n.Chevron,{orientation:"down",size:18,className:t[J.Chevron]})))}function Sg(e){return v.createElement("div",{...e})}function Ng(e){return v.createElement("div",{...e})}function _g(e){const{calendarMonth:a,displayIndex:r,...n}=e;return v.createElement("div",{...n},e.children)}function Kg(e){const{calendarMonth:a,displayIndex:r,...n}=e;return v.createElement("div",{...n})}function Pg(e){return v.createElement("table",{...e})}function Dg(e){return v.createElement("div",{...e})}const po=A.createContext(void 0);function bn(){const e=A.useContext(po);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Mg(e){const{components:a}=bn();return v.createElement(a.Dropdown,{...e})}function qg(e){const{onPreviousClick:a,onNextClick:r,previousMonth:n,nextMonth:t,...s}=e,{components:i,classNames:l,labels:{labelPrevious:d,labelNext:g}}=bn(),u=A.useCallback(m=>{t&&(r==null||r(m))},[t,r]),k=A.useCallback(m=>{n&&(a==null||a(m))},[n,a]);return v.createElement("nav",{...s},v.createElement(i.PreviousMonthButton,{type:"button",className:l[J.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":d(n),onClick:k},v.createElement(i.Chevron,{disabled:n?void 0:!0,className:l[J.Chevron],orientation:"left"})),v.createElement(i.NextMonthButton,{type:"button",className:l[J.NextMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":g(t),onClick:u},v.createElement(i.Chevron,{disabled:t?void 0:!0,orientation:"right",className:l[J.Chevron]})))}function Ig(e){const{components:a}=bn();return v.createElement(a.Button,{...e})}function Vg(e){return v.createElement("option",{...e})}function jg(e){const{components:a}=bn();return v.createElement(a.Button,{...e})}function Lg(e){const{rootRef:a,...r}=e;return v.createElement("div",{...r,ref:a})}function wg(e){return v.createElement("select",{...e})}function Ug(e){const{week:a,...r}=e;return v.createElement("tr",{...r})}function Gg(e){return v.createElement("th",{...e})}function Bg(e){return v.createElement("thead",{"aria-hidden":!0},v.createElement("tr",{...e}))}function xg(e){const{week:a,...r}=e;return v.createElement("th",{...r})}function Hg(e){return v.createElement("th",{...e})}function Yg(e){return v.createElement("tbody",{...e})}function Cg(e){const{components:a}=bn();return v.createElement(a.Dropdown,{...e})}const $g=Object.freeze(Object.defineProperty({__proto__:null,Button:cg,CaptionLabel:Rg,Chevron:Fg,Day:Og,DayButton:bg,Dropdown:hg,DropdownNav:Sg,Footer:Ng,Month:_g,MonthCaption:Kg,MonthGrid:Pg,Months:Dg,MonthsDropdown:Mg,Nav:qg,NextMonthButton:Ig,Option:Vg,PreviousMonthButton:jg,Root:Lg,Select:wg,Week:Ug,WeekNumber:xg,WeekNumberHeader:Hg,Weekday:Gg,Weekdays:Bg,Weeks:Yg,YearsDropdown:Cg},Symbol.toStringTag,{value:"Module"}));function Jg(e){return{...$g,...e}}function Wg(e){const a={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(a[r]=n)}),a}function zg(){const e={};for(const a in J)e[J[a]]=`rdp-${J[a]}`;for(const a in ye)e[ye[a]]=`rdp-${ye[a]}`;for(const a in Er)e[Er[a]]=`rdp-${Er[a]}`;for(const a in dr)e[dr[a]]=`rdp-${dr[a]}`;return e}function yo(e,a,r){return(r??new Hr(a)).format(e,"LLLL y")}const Xg=yo;function Zg(e,a,r){return(r??new Hr(a)).format(e,"d")}function Qg(e,a=Yr){return a.format(e,"LLLL")}function ev(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function rv(){return""}function nv(e,a,r){return(r??new Hr(a)).format(e,"cccccc")}function To(e,a=Yr){return a.format(e,"yyyy")}const av=To,tv=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:yo,formatDay:Zg,formatMonthCaption:Xg,formatMonthDropdown:Qg,formatWeekNumber:ev,formatWeekNumberHeader:rv,formatWeekdayName:nv,formatYearCaption:av,formatYearDropdown:To},Symbol.toStringTag,{value:"Module"}));function sv(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...tv,...e}}function iv(e,a,r,n,t){const{startOfMonth:s,startOfYear:i,endOfYear:l,eachMonthOfInterval:d,getMonth:g}=t;return d({start:i(e),end:l(e)}).map(m=>{const p=n.formatMonthDropdown(m,t),f=g(m),c=a&&m<s(a)||r&&m>s(r)||!1;return{value:f,label:p,disabled:c}})}function lv(e,a={},r={}){let n={...a==null?void 0:a[J.Day]};return Object.entries(e).filter(([,t])=>t===!0).forEach(([t])=>{n={...n,...r==null?void 0:r[t]}}),n}function ov(e,a,r){const n=e.today(),t=a?e.startOfISOWeek(n):e.startOfWeek(n),s=[];for(let i=0;i<7;i++){const l=e.addDays(t,i);s.push(l)}return s}function dv(e,a,r,n){if(!e||!a)return;const{startOfYear:t,endOfYear:s,addYears:i,getYear:l,isBefore:d,isSameYear:g}=n,u=t(e),k=s(a),m=[];let p=u;for(;d(p,k)||g(p,k);)m.push(p),p=i(p,1);return m.map(f=>{const c=r.formatYearDropdown(f,n);return{value:l(f),label:c,disabled:!1}})}function Eo(e,a,r){return(r??new Hr(a)).format(e,"LLLL y")}const uv=Eo;function kv(e,a,r,n){let t=(n??new Hr(r)).format(e,"PPPP");return a!=null&&a.today&&(t=`Today, ${t}`),t}function Ao(e,a,r,n){let t=(n??new Hr(r)).format(e,"PPPP");return a.today&&(t=`Today, ${t}`),a.selected&&(t=`${t}, selected`),t}const gv=Ao;function vv(){return""}function mv(e){return"Choose the Month"}function pv(e){return"Go to the Next Month"}function yv(e){return"Go to the Previous Month"}function Tv(e,a,r){return(r??new Hr(a)).format(e,"cccc")}function Ev(e,a){return`Week ${e}`}function Av(e){return"Week Number"}function fv(e){return"Choose the Year"}const cv=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:uv,labelDay:gv,labelDayButton:Ao,labelGrid:Eo,labelGridcell:kv,labelMonthDropdown:mv,labelNav:vv,labelNext:pv,labelPrevious:yv,labelWeekNumber:Ev,labelWeekNumberHeader:Av,labelWeekday:Tv,labelYearDropdown:fv},Symbol.toStringTag,{value:"Module"}));function Rv(e,a,{classNames:r,months:n,focused:t,dateLib:s}){const i=A.useRef(null),l=A.useRef(n),d=A.useRef(!1);A.useLayoutEffect(()=>{const g=l.current;if(l.current=n,!a||!e.current||!(e.current instanceof HTMLElement))return;const u=i.current,k=e.current.cloneNode(!0);if(k instanceof HTMLElement?([...k.querySelectorAll("[data-animated-month]")??[]].forEach(T=>{const F=T.querySelector("[data-animated-month]");F&&T.contains(F)&&T.removeChild(F)}),i.current=k):i.current=null,n.length===0||g.length===0||n.length!==g.length||t||d.current||s.isSameMonth(n[0].date,g[0].date))return;const p=[...(u==null?void 0:u.querySelectorAll("[data-animated-month]"))??[]],f=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(f&&f.every(c=>c instanceof HTMLElement)&&p&&p.every(c=>c instanceof HTMLElement)){d.current=!0;const c=s.isAfter(n[0].date,g[0].date);f.forEach((T,F)=>{const y=p[F];if(!y)return;const R=c?r[dr.caption_after_enter]:r[dr.caption_before_enter],N=c?r[dr.weeks_after_enter]:r[dr.weeks_before_enter];T.style.position="relative",T.style.overflow="hidden";const P=T.querySelector("[data-animated-caption]");P&&P instanceof HTMLElement&&P.classList.add(R);const b=T.querySelector("[data-animated-weeks]");b&&b instanceof HTMLElement&&b.classList.add(N);const O=()=>{d.current=!1,P&&P instanceof HTMLElement&&P.classList.remove(R),b&&b instanceof HTMLElement&&b.classList.remove(N),T.style.position="",T.style.overflow="",T.contains(y)&&T.removeChild(y)};y.style.pointerEvents="none",y.style.position="absolute",y.style.overflow="hidden",y.setAttribute("aria-hidden","true");const S=y.querySelector("[data-animated-weekdays]");S&&S instanceof HTMLElement&&(S.style.opacity="0");const K=y.querySelector("[data-animated-caption]");K&&K instanceof HTMLElement&&(K.classList.add(c?r[dr.caption_before_exit]:r[dr.caption_after_exit]),K.addEventListener("animationend",O));const j=y.querySelector("[data-animated-weeks]");j&&j instanceof HTMLElement&&j.classList.add(c?r[dr.weeks_before_exit]:r[dr.weeks_after_exit]),T.insertBefore(y,T.firstChild)})}})}function Fv(e,a,r,n){const t=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:l,broadcastCalendar:d}=r??{},{addDays:g,differenceInCalendarDays:u,differenceInCalendarMonths:k,endOfBroadcastWeek:m,endOfISOWeek:p,endOfMonth:f,endOfWeek:c,isAfter:T,startOfBroadcastWeek:F,startOfISOWeek:y,startOfWeek:R}=n,N=d?F(t,n):i?y(t):R(t),P=d?m(s,n):i?p(f(s)):c(f(s)),b=u(P,N),O=k(s,t)+1,S=[];for(let L=0;L<=b;L++){const M=g(N,L);if(a&&T(M,a))break;S.push(M)}const j=(d?35:42)*O;if(l&&S.length<j){const L=j-S.length;for(let M=0;M<L;M++){const D=g(S[S.length-1],1);S.push(D)}}return S}function Ov(e){const a=[];return e.reduce((r,n)=>{const t=[],s=n.weeks.reduce((i,l)=>[...i,...l.days],t);return[...r,...s]},a)}function bv(e,a,r,n){const{numberOfMonths:t=1}=r,s=[];for(let i=0;i<t;i++){const l=n.addMonths(e,i);if(a&&l>a)break;s.push(l)}return s}function Ni(e,a){const{month:r,defaultMonth:n,today:t=a.today(),numberOfMonths:s=1,endMonth:i,startMonth:l}=e;let d=r||n||t;const{differenceInCalendarMonths:g,addMonths:u,startOfMonth:k}=a;if(i&&g(i,d)<0){const m=-1*(s-1);d=u(i,m)}return l&&g(d,l)<0&&(d=l),k(d)}class fo{constructor(a,r,n=Yr){this.date=a,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(a,r)),this.dateLib=n}isEqualTo(a){return this.dateLib.isSameDay(a.date,this.date)&&this.dateLib.isSameMonth(a.displayMonth,this.displayMonth)}}class hv{constructor(a,r){this.date=a,this.weeks=r}}class Sv{constructor(a,r){this.days=r,this.weekNumber=a}}function Nv(e,a,r,n){const{addDays:t,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:l,endOfWeek:d,getISOWeek:g,getWeek:u,startOfBroadcastWeek:k,startOfISOWeek:m,startOfWeek:p}=n,f=e.reduce((c,T)=>{const F=r.broadcastCalendar?k(T,n):r.ISOWeek?m(T):p(T),y=r.broadcastCalendar?s(T,n):r.ISOWeek?i(l(T)):d(l(T)),R=a.filter(O=>O>=F&&O<=y),N=r.broadcastCalendar?35:42;if(r.fixedWeeks&&R.length<N){const O=a.filter(S=>{const K=N-R.length;return S>y&&S<=t(y,K)});R.push(...O)}const P=R.reduce((O,S)=>{const K=r.ISOWeek?g(S):u(S),j=O.find(M=>M.weekNumber===K),L=new fo(S,T,n);return j?j.days.push(L):O.push(new Sv(K,[L])),O},[]),b=new hv(T,P);return c.push(b),c},[]);return r.reverseMonths?f.reverse():f}function _v(e,a){let{startMonth:r,endMonth:n}=e;const{startOfYear:t,startOfDay:s,startOfMonth:i,endOfMonth:l,addYears:d,endOfYear:g,newDate:u,today:k}=a,{fromYear:m,toYear:p,fromMonth:f,toMonth:c}=e;!r&&f&&(r=f),!r&&m&&(r=a.newDate(m,0,1)),!n&&c&&(n=c),!n&&p&&(n=u(p,11,31));const T=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=i(r):m?r=u(m,0,1):!r&&T&&(r=t(d(e.today??k(),-100))),n?n=l(n):p?n=u(p,11,31):!n&&T&&(n=g(e.today??k())),[r&&s(r),n&&s(n)]}function Kv(e,a,r,n){if(r.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:s=1}=r,{startOfMonth:i,addMonths:l,differenceInCalendarMonths:d}=n,g=t?s:1,u=i(e);if(!a)return l(u,g);if(!(d(a,e)<s))return l(u,g)}function Pv(e,a,r,n){if(r.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:s}=r,{startOfMonth:i,addMonths:l,differenceInCalendarMonths:d}=n,g=t?s??1:1,u=i(e);if(!a)return l(u,-g);if(!(d(u,a)<=0))return l(u,-g)}function Dv(e){const a=[];return e.reduce((r,n)=>[...r,...n.weeks],a)}function dt(e,a){const[r,n]=A.useState(e);return[a===void 0?r:a,n]}function Mv(e,a){const[r,n]=_v(e,a),{startOfMonth:t,endOfMonth:s}=a,i=Ni(e,a),[l,d]=dt(i,e.month?i:void 0);A.useEffect(()=>{const b=Ni(e,a);d(b)},[e.timeZone]);const g=bv(l,n,e,a),u=Fv(g,e.endMonth?s(e.endMonth):void 0,e,a),k=Nv(g,u,e,a),m=Dv(k),p=Ov(k),f=Pv(l,r,e,a),c=Kv(l,n,e,a),{disableNavigation:T,onMonthChange:F}=e,y=b=>m.some(O=>O.days.some(S=>S.isEqualTo(b))),R=b=>{if(T)return;let O=t(b);r&&O<t(r)&&(O=t(r)),n&&O>t(n)&&(O=t(n)),d(O),F==null||F(O)};return{months:k,weeks:m,days:p,navStart:r,navEnd:n,previousMonth:f,nextMonth:c,goToMonth:R,goToDay:b=>{y(b)||R(b.date)}}}function qv(e,a,r,n){let t,s=0,i=!1;for(;s<e.length&&!i;){const l=e[s],d=a(l);!d[ye.disabled]&&!d[ye.hidden]&&!d[ye.outside]&&(d[ye.focused]||n!=null&&n.isEqualTo(l)||r(l.date)||d[ye.today])&&(t=l,i=!0),s++}return t||(t=e.find(l=>{const d=a(l);return!d[ye.disabled]&&!d[ye.hidden]&&!d[ye.outside]})),t}function wr(e,a,r=!1,n=Yr){let{from:t,to:s}=e;const{differenceInCalendarDays:i,isSameDay:l}=n;return t&&s?(i(s,t)<0&&([t,s]=[s,t]),i(a,t)>=(r?1:0)&&i(s,a)>=(r?1:0)):!r&&s?l(s,a):!r&&t?l(t,a):!1}function co(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ks(e){return!!(e&&typeof e=="object"&&"from"in e)}function Ro(e){return!!(e&&typeof e=="object"&&"after"in e)}function Fo(e){return!!(e&&typeof e=="object"&&"before"in e)}function Oo(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function bo(e,a){return Array.isArray(e)&&e.every(a.isDate)}function mr(e,a,r=Yr){const n=Array.isArray(a)?a:[a],{isSameDay:t,differenceInCalendarDays:s,isAfter:i}=r;return n.some(l=>{if(typeof l=="boolean")return l;if(r.isDate(l))return t(e,l);if(bo(l,r))return l.includes(e);if(Ks(l))return wr(l,e,!1,r);if(Oo(l))return Array.isArray(l.dayOfWeek)?l.dayOfWeek.includes(e.getDay()):l.dayOfWeek===e.getDay();if(co(l)){const d=s(l.before,e),g=s(l.after,e),u=d>0,k=g<0;return i(l.before,l.after)?k&&u:u||k}return Ro(l)?s(e,l.after)>0:Fo(l)?s(l.before,e)>0:typeof l=="function"?l(e):!1})}function Iv(e,a,r,n,t,s,i){const{ISOWeek:l,broadcastCalendar:d}=s,{addDays:g,addMonths:u,addWeeks:k,addYears:m,endOfBroadcastWeek:p,endOfISOWeek:f,endOfWeek:c,max:T,min:F,startOfBroadcastWeek:y,startOfISOWeek:R,startOfWeek:N}=i;let b={day:g,week:k,month:u,year:m,startOfWeek:O=>d?y(O,i):l?R(O):N(O),endOfWeek:O=>d?p(O,i):l?f(O):c(O)}[e](r,a==="after"?1:-1);return a==="before"&&n?b=T([n,b]):a==="after"&&t&&(b=F([t,b])),b}function ho(e,a,r,n,t,s,i,l=0){if(l>365)return;const d=Iv(e,a,r.date,n,t,s,i),g=!!(s.disabled&&mr(d,s.disabled,i)),u=!!(s.hidden&&mr(d,s.hidden,i)),k=d,m=new fo(d,k,i);return!g&&!u?m:ho(e,a,m,n,t,s,i,l+1)}function Vv(e,a,r,n,t){const{autoFocus:s}=e,[i,l]=A.useState(),d=qv(a.days,r,n||(()=>!1),i),[g,u]=A.useState(s?d:void 0);return{isFocusTarget:c=>!!(d!=null&&d.isEqualTo(c)),setFocused:u,focused:g,blur:()=>{l(g),u(void 0)},moveFocus:(c,T)=>{if(!g)return;const F=ho(c,T,g,a.navStart,a.navEnd,e,t);F&&(a.goToDay(F),u(F))}}}function jv(e,a,r){const{disabled:n,hidden:t,modifiers:s,showOutsideDays:i,broadcastCalendar:l,today:d}=a,{isSameDay:g,isSameMonth:u,startOfMonth:k,isBefore:m,endOfMonth:p,isAfter:f}=r,c=a.startMonth&&k(a.startMonth),T=a.endMonth&&p(a.endMonth),F={[ye.focused]:[],[ye.outside]:[],[ye.disabled]:[],[ye.hidden]:[],[ye.today]:[]},y={};for(const R of e){const{date:N,displayMonth:P}=R,b=!!(P&&!u(N,P)),O=!!(c&&m(N,c)),S=!!(T&&f(N,T)),K=!!(n&&mr(N,n,r)),j=!!(t&&mr(N,t,r))||O||S||!l&&!i&&b||l&&i===!1&&b,L=g(N,d??r.today());b&&F.outside.push(R),K&&F.disabled.push(R),j&&F.hidden.push(R),L&&F.today.push(R),s&&Object.keys(s).forEach(M=>{const D=s==null?void 0:s[M];D&&mr(N,D,r)&&(y[M]?y[M].push(R):y[M]=[R])})}return R=>{const N={[ye.focused]:!1,[ye.disabled]:!1,[ye.hidden]:!1,[ye.outside]:!1,[ye.today]:!1},P={};for(const b in F){const O=F[b];N[b]=O.some(S=>S===R)}for(const b in y)P[b]=y[b].some(O=>O===R);return{...N,...P}}}function Lv(e,a){const{selected:r,required:n,onSelect:t}=e,[s,i]=dt(r,t?r:void 0),l=t?r:s,{isSameDay:d}=a,g=p=>(l==null?void 0:l.some(f=>d(f,p)))??!1,{min:u,max:k}=e;return{selected:l,select:(p,f,c)=>{let T=[...l??[]];if(g(p)){if((l==null?void 0:l.length)===u||n&&(l==null?void 0:l.length)===1)return;T=l==null?void 0:l.filter(F=>!d(F,p))}else(l==null?void 0:l.length)===k?T=[p]:T=[...T,p];return t||i(T),t==null||t(T,p,f,c),T},isSelected:g}}function wv(e,a,r=0,n=0,t=!1,s=Yr){const{from:i,to:l}=a||{},{isSameDay:d,isAfter:g,isBefore:u}=s;let k;if(!i&&!l)k={from:e,to:r>0?void 0:e};else if(i&&!l)d(i,e)?t?k={from:i,to:void 0}:k=void 0:u(e,i)?k={from:e,to:i}:k={from:i,to:e};else if(i&&l)if(d(i,e)&&d(l,e))t?k={from:i,to:l}:k=void 0;else if(d(i,e))k={from:i,to:r>0?void 0:e};else if(d(l,e))k={from:e,to:r>0?void 0:e};else if(u(e,i))k={from:e,to:l};else if(g(e,i))k={from:i,to:e};else if(g(e,l))k={from:i,to:e};else throw new Error("Invalid range");if(k!=null&&k.from&&(k!=null&&k.to)){const m=s.differenceInCalendarDays(k.to,k.from);n>0&&m>n?k={from:e,to:void 0}:r>1&&m<r&&(k={from:e,to:void 0})}return k}function Uv(e,a,r=Yr){const n=Array.isArray(a)?a:[a];let t=e.from;const s=r.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let l=0;l<=i;l++){if(n.includes(t.getDay()))return!0;t=r.addDays(t,1)}return!1}function _i(e,a,r=Yr){return wr(e,a.from,!1,r)||wr(e,a.to,!1,r)||wr(a,e.from,!1,r)||wr(a,e.to,!1,r)}function Gv(e,a,r=Yr){const n=Array.isArray(a)?a:[a];if(n.filter(l=>typeof l!="function").some(l=>typeof l=="boolean"?l:r.isDate(l)?wr(e,l,!1,r):bo(l,r)?l.some(d=>wr(e,d,!1,r)):Ks(l)?l.from&&l.to?_i(e,{from:l.from,to:l.to},r):!1:Oo(l)?Uv(e,l.dayOfWeek,r):co(l)?r.isAfter(l.before,l.after)?_i(e,{from:r.addDays(l.after,1),to:r.addDays(l.before,-1)},r):mr(e.from,l,r)||mr(e.to,l,r):Ro(l)||Fo(l)?mr(e.from,l,r)||mr(e.to,l,r):!1))return!0;const i=n.filter(l=>typeof l=="function");if(i.length){let l=e.from;const d=r.differenceInCalendarDays(e.to,e.from);for(let g=0;g<=d;g++){if(i.some(u=>u(l)))return!0;l=r.addDays(l,1)}}return!1}function Bv(e,a){const{disabled:r,excludeDisabled:n,selected:t,required:s,onSelect:i}=e,[l,d]=dt(t,i?t:void 0),g=i?t:l;return{selected:g,select:(m,p,f)=>{const{min:c,max:T}=e,F=m?wv(m,g,c,T,s,a):void 0;return n&&r&&(F!=null&&F.from)&&F.to&&Gv({from:F.from,to:F.to},r,a)&&(F.from=m,F.to=void 0),i||d(F),i==null||i(F,m,p,f),F},isSelected:m=>g&&wr(g,m,!1,a)}}function xv(e,a){const{selected:r,required:n,onSelect:t}=e,[s,i]=dt(r,t?r:void 0),l=t?r:s,{isSameDay:d}=a;return{selected:l,select:(k,m,p)=>{let f=k;return!n&&l&&l&&d(k,l)&&(f=void 0),t||i(f),t==null||t(f,k,m,p),f},isSelected:k=>l?d(l,k):!1}}function Hv(e,a){const r=xv(e,a),n=Lv(e,a),t=Bv(e,a);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return t;default:return}}function Yv(e){const{components:a,formatters:r,labels:n,dateLib:t,locale:s,classNames:i}=A.useMemo(()=>{const ee={...lt,...e.locale};return{dateLib:new Hr({locale:ee,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Jg(e.components),formatters:sv(e.formatters),labels:{...cv,...e.labels},locale:ee,classNames:{...zg(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:l,mode:d,onDayBlur:g,onDayClick:u,onDayFocus:k,onDayKeyDown:m,onDayMouseEnter:p,onDayMouseLeave:f,onNextClick:c,onPrevClick:T,showWeekNumber:F,styles:y}=e,{formatCaption:R,formatDay:N,formatMonthDropdown:P,formatWeekNumber:b,formatWeekNumberHeader:O,formatWeekdayName:S,formatYearDropdown:K}=r,j=Mv(e,t),{days:L,months:M,navStart:D,navEnd:H,previousMonth:C,nextMonth:$,goToMonth:le}=j,pe=jv(L,e,t),{isSelected:Pe,select:He,selected:Fe}=Hv(e,t)??{},{blur:Rr,focused:ir,isFocusTarget:Nn,moveFocus:Z,setFocused:z}=Vv(e,j,pe,Pe??(()=>!1),t),{labelDayButton:De,labelGridcell:Ze,labelGrid:Cr,labelMonthDropdown:tn,labelNav:Dr,labelWeekday:$r,labelWeekNumber:sn,labelWeekNumberHeader:Mr,labelYearDropdown:Jr}=n,Wr=A.useMemo(()=>ov(t,e.ISOWeek),[t,e.ISOWeek]),qr=d!==void 0||u!==void 0,ln=A.useCallback(()=>{C&&(le(C),T==null||T(C))},[C,le,T]),on=A.useCallback(()=>{$&&(le($),c==null||c($))},[le,$,c]),gi=A.useCallback((ee,Te)=>ve=>{ve.preventDefault(),ve.stopPropagation(),z(ee),He==null||He(ee.date,Te,ve),u==null||u(ee.date,Te,ve)},[He,u,z]),ha=A.useCallback((ee,Te)=>ve=>{z(ee),k==null||k(ee.date,Te,ve)},[k,z]),E=A.useCallback((ee,Te)=>ve=>{Rr(),g==null||g(ee.date,Te,ve)},[Rr,g]),h=A.useCallback((ee,Te)=>ve=>{const yr={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[ve.shiftKey?"year":"month","before"],PageDown:[ve.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(yr[ve.key]){ve.preventDefault(),ve.stopPropagation();const[lr,dn]=yr[ve.key];Z(lr,dn)}m==null||m(ee.date,Te,ve)},[Z,m,e.dir]),_=A.useCallback((ee,Te)=>ve=>{p==null||p(ee.date,Te,ve)},[p]),G=A.useCallback((ee,Te)=>ve=>{f==null||f(ee.date,Te,ve)},[f]),V=A.useCallback(ee=>Te=>{const ve=Number(Te.target.value),yr=t.setMonth(t.startOfMonth(ee),ve);le(yr)},[t,le]),q=A.useCallback(ee=>Te=>{const ve=Number(Te.target.value),yr=t.setYear(t.startOfMonth(ee),ve);le(yr)},[t,le]),{className:x,style:te}=A.useMemo(()=>({className:[i[J.Root],e.className].filter(Boolean).join(" "),style:{...y==null?void 0:y[J.Root],...e.style}}),[i,e.className,e.style,y]),Oe=Wg(e),Le=A.useRef(null);Rv(Le,!!e.animate,{classNames:i,months:M,focused:ir,dateLib:t});const ht={dayPickerProps:e,selected:Fe,select:He,isSelected:Pe,months:M,nextMonth:$,previousMonth:C,goToMonth:le,getModifiers:pe,components:a,classNames:i,styles:y,labels:n,formatters:r};return v.createElement(po.Provider,{value:ht},v.createElement(a.Root,{rootRef:e.animate?Le:void 0,className:x,style:te,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...Oe},v.createElement(a.Months,{className:i[J.Months],style:y==null?void 0:y[J.Months]},!e.hideNavigation&&v.createElement(a.Nav,{className:i[J.Nav],style:y==null?void 0:y[J.Nav],"aria-label":Dr(),onPreviousClick:ln,onNextClick:on,previousMonth:C,nextMonth:$}),M.map((ee,Te)=>{const ve=iv(ee.date,D,H,r,t),yr=dv(D,H,r,t);return v.createElement(a.Month,{"data-animated-month":e.animate?"true":void 0,className:i[J.Month],style:y==null?void 0:y[J.Month],key:Te,displayIndex:Te,calendarMonth:ee},v.createElement(a.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:i[J.MonthCaption],style:y==null?void 0:y[J.MonthCaption],calendarMonth:ee,displayIndex:Te},l!=null&&l.startsWith("dropdown")?v.createElement(a.DropdownNav,{className:i[J.Dropdowns],style:y==null?void 0:y[J.Dropdowns]},l==="dropdown"||l==="dropdown-months"?v.createElement(a.MonthsDropdown,{className:i[J.MonthsDropdown],"aria-label":tn(),classNames:i,components:a,disabled:!!e.disableNavigation,onChange:V(ee.date),options:ve,style:y==null?void 0:y[J.Dropdown],value:t.getMonth(ee.date)}):v.createElement("span",{role:"status","aria-live":"polite"},P(ee.date,t)),l==="dropdown"||l==="dropdown-years"?v.createElement(a.YearsDropdown,{className:i[J.YearsDropdown],"aria-label":Jr(t.options),classNames:i,components:a,disabled:!!e.disableNavigation,onChange:q(ee.date),options:yr,style:y==null?void 0:y[J.Dropdown],value:t.getYear(ee.date)}):v.createElement("span",{role:"status","aria-live":"polite"},K(ee.date,t))):v.createElement(a.CaptionLabel,{className:i[J.CaptionLabel],role:"status","aria-live":"polite"},R(ee.date,t.options,t))),v.createElement(a.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":Cr(ee.date,t.options,t)||void 0,className:i[J.MonthGrid],style:y==null?void 0:y[J.MonthGrid]},!e.hideWeekdays&&v.createElement(a.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:i[J.Weekdays],style:y==null?void 0:y[J.Weekdays]},F&&v.createElement(a.WeekNumberHeader,{"aria-label":Mr(t.options),className:i[J.WeekNumberHeader],style:y==null?void 0:y[J.WeekNumberHeader],scope:"col"},O()),Wr.map((lr,dn)=>v.createElement(a.Weekday,{"aria-label":$r(lr,t.options,t),className:i[J.Weekday],key:dn,style:y==null?void 0:y[J.Weekday],scope:"col"},S(lr,t.options,t)))),v.createElement(a.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:i[J.Weeks],style:y==null?void 0:y[J.Weeks]},ee.weeks.map((lr,dn)=>v.createElement(a.Week,{className:i[J.Week],key:lr.weekNumber,style:y==null?void 0:y[J.Week],week:lr},F&&v.createElement(a.WeekNumber,{week:lr,style:y==null?void 0:y[J.WeekNumber],"aria-label":sn(lr.weekNumber,{locale:s}),className:i[J.WeekNumber],scope:"row",role:"rowheader"},b(lr.weekNumber)),lr.days.map(Ye=>{const{date:Fr}=Ye,oe=pe(Ye);if(oe[ye.focused]=!oe.hidden&&!!(ir!=null&&ir.isEqualTo(Ye)),oe[Er.selected]=(Pe==null?void 0:Pe(Fr))||oe.selected,Ks(Fe)){const{from:St,to:Nt}=Fe;oe[Er.range_start]=!!(St&&Nt&&t.isSameDay(Fr,St)),oe[Er.range_end]=!!(St&&Nt&&t.isSameDay(Fr,Nt)),oe[Er.range_middle]=wr(Fe,Fr,!0,t)}const Rd=lv(oe,y,e.modifiersStyles),Fd=fg(oe,i,e.modifiersClassNames),Od=!qr&&!oe.hidden?Ze(Fr,oe,t.options,t):void 0;return v.createElement(a.Day,{key:`${t.format(Fr,"yyyy-MM-dd")}_${t.format(Ye.displayMonth,"yyyy-MM")}`,day:Ye,modifiers:oe,className:Fd.join(" "),style:Rd,role:"gridcell","aria-selected":oe.selected||void 0,"aria-label":Od,"data-day":t.format(Fr,"yyyy-MM-dd"),"data-month":Ye.outside?t.format(Fr,"yyyy-MM"):void 0,"data-selected":oe.selected||void 0,"data-disabled":oe.disabled||void 0,"data-hidden":oe.hidden||void 0,"data-outside":Ye.outside||void 0,"data-focused":oe.focused||void 0,"data-today":oe.today||void 0},!oe.hidden&&qr?v.createElement(a.DayButton,{className:i[J.DayButton],style:y==null?void 0:y[J.DayButton],type:"button",day:Ye,modifiers:oe,disabled:oe.disabled||void 0,tabIndex:Nn(Ye)?0:-1,"aria-label":De(Fr,oe,t.options,t),onClick:gi(Ye,oe),onBlur:E(Ye,oe),onFocus:ha(Ye,oe),onKeyDown:h(Ye,oe),onMouseEnter:_(Ye,oe),onMouseLeave:G(Ye,oe)},N(Fr,t.options,t)):!oe.hidden&&N(Ye.date,t.options,t))}))))))})),e.footer&&v.createElement(a.Footer,{className:i[J.Footer],style:y==null?void 0:y[J.Footer],role:"status","aria-live":"polite"},e.footer)))}var Cv=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const So=A.forwardRef((e,a)=>{var{as:r="div",className:n,above:t,below:s,variant:i,asChild:l}=e,d=Cv(e,["as","className","above","below","variant","asChild"]);const{cn:g}=se(),u=i==="show"?t:s,k=i==="show"?s:t,m=l?ya:r;return v.createElement(m,Object.assign({},d,{ref:a,className:g("navds-responsive",n,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${k}`]:k})}))}),$v=A.forwardRef((e,a)=>v.createElement(So,Object.assign({},e,{ref:a,variant:"hide"}))),Ps=A.forwardRef((e,a)=>v.createElement(So,Object.assign({},e,{ref:a,variant:"show"})));function Ar(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function Jv({day:e,fromDate:a,toDate:r}){const n=r&&Qr(e,Br(r))>0,t=a&&Qr(Br(a),e)>0;return n||t||!1}const No="dd.MM.yyyy",Wv="MMMM yyyy",_o=[No,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[..._o];const Mt=(e,a,r,n,t)=>{let s;const i=_o;if(t){for(const l of i)if(s=jn(e,l,a,{locale:r}),Ar(s)&&!qt(e,a,r,i))return s;for(const l of[...i.map(d=>d.replace("yyyy","yy"))])if(s=jn(e,l,a,{locale:r}),Ar(s)&&qt(e,a,r,i)){const d=zv(e,l,a,r);return Ar(new Date(d))?new Date(d):new Date("Invalid date")}return new Date("Invalid date")}for(const l of i)if(s=jn(e,l,a,{locale:r}),Ar(s)&&!qt(e,a,r,i))return s;return new Date("Invalid date")};function qt(e,a,r,n){let t;const s=n.map(i=>i.replace("yyyy","yy"));for(const i of s)if(t=jn(e,i,a,{locale:r}),Ar(t))return!0;return!1}function zv(e,a,r,n){const t=jn(Ki(e,"19"),a.replace("yy","yyyy"),r,{locale:n}),s=jn(Ki(e,"20"),a.replace("yy","yyyy"),r,{locale:n});return Ar(t)&&Ar(s)?ca(t,og(new Date,{years:80}))?s:t:new Date("Invalid date")}function Ki(e,a){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${a}${r}`}const ra=(e,a,r,n)=>cn(e,n??No,{locale:a}),Xv=({month:e,start:a,end:r})=>{if(!e)return;let n=e;return a&&ca(n,a)&&(n=a),r&&no(n,r)&&(n=r),fn(n)};function Zv(e,a,r,n){return Xl({start:fa(e),end:ot(e)}).map(i=>{const l=cn(i,"LLLL",{locale:n}),d=hs(i),g=a&&i<fn(a)||r&&i>fn(r)||!1;return{value:d,label:l,disabled:g}})}function Qv(e,a,r){if(!e||!a)return;const n=fa(e),t=ot(a),s=[];let i=n;for(;ca(i,t)||lo(i,t);)s.push(i),i=cs(i,1);return s.map(l=>{const d=cn(l,"yyyy",{locale:r});return{value:Ss(l),label:d,disabled:!1}})}function em({captionLayout:e,startMonth:a,endMonth:r,today:n}){const t=e==="dropdown",s=n??new Date;return a?a=fn(a):!a&&t&&(a=fa(cs(s,-100))),r?r=zl(r):!r&&t&&(r=ot(s)),[a&&Br(a),r&&Br(r)]}var rm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const nm=e=>{var{day:a,modifiers:r,locale:n,children:t}=e,s=rm(e,["day","modifiers","locale","children"]);const{cn:i}=se(),l=A.useRef(null);return A.useEffect(()=>{var d;r.focused&&((d=l.current)===null||d===void 0||d.focus())},[r.focused]),r.hidden?v.createElement(v.Fragment,null):v.createElement("button",Object.assign({},s,{ref:l,"aria-hidden":a.outside,"aria-pressed":!!r.selected,"aria-label":cn(a.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:i(s.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),t)};var am=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const es=A.forwardRef((e,a)=>{const{inputProps:r,errorId:n,showErrorMsg:t,hasError:s,size:i,inputDescriptionId:l,readOnly:d}=Bn(e,"select"),{children:g,label:u,className:k,description:m,htmlSize:p,hideLabel:f=!1,style:c}=e,T=am(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:F}=se(),y={onMouseDown:R=>{d&&(R.preventDefault(),R.target.focus())},onKeyDown:R=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(R.key)&&R.preventDefault()}};return v.createElement("div",{className:F(k,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":d,"navds-select--error":s,"navds-select--readonly":d})},v.createElement(gr,{htmlFor:r.id,size:i,className:F("navds-form-field__label",{"navds-sr-only":f})},d&&v.createElement(vs,null),u),!!m&&v.createElement(rr,{className:F("navds-form-field__description",{"navds-sr-only":f}),id:l,size:i,as:"div"},m),v.createElement("div",{className:F("navds-select__container"),style:c},v.createElement("select",Object.assign({},Be(T,["error","errorId","size","readOnly"]),r,y,{ref:a,className:F("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:p}),g),v.createElement(st,{className:F("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:F("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},t&&v.createElement(xr,{size:i,showIcon:!0},e.error)))}),Ko=({week:{weekNumber:e,days:a},onWeekNumberClick:r,className:n,style:t,showOnDesktop:s})=>{const i=ms().translate,{cn:l}=se(),{getModifiers:d}=bn(),g=A.useMemo(()=>a.filter(k=>{const m=d(k);return!(m.hidden||m.outside||m.disabled)}).length===0,[a,d]),u=s?Ps:$v;return!r||g?v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:"rdp-cell"},v.createElement(Ea,{as:"span",textColor:"subtle",className:n,style:t,"aria-label":i("weekNumber",{week:e})},e))):v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:l("rdp-cell",{"navds-date__week-wrapper":!s})},v.createElement(We,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:t,className:l("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,a.map(k=>k.date))},icon:v.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},tm=({onWeekNumberClick:e,weeks:a})=>{const r=ms().translate,{cn:n}=se(),t=Ur();return e?v.createElement(Ps,{below:"sm",asChild:!0},v.createElement("table",{className:"rdp-table",role:"grid"},v.createElement("tbody",{className:"rdp-tbody"},v.createElement("tr",{className:n("rdp-row navds-date__week-row")},v.createElement(Ea,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},v.createElement("span",{className:n("navds-date__week-wrapper"),id:t},r("week"))),a==null?void 0:a.map(s=>v.createElement(Ko,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var sm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const im=e=>{var{children:a,calendarMonth:r,locale:n,onWeekNumberClick:t}=e,s=sm(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:l,previousMonth:d,nextMonth:g}=bn(),{captionLayout:u}=i,{cn:k}=se(),m=ms().translate,p=A.useCallback((R,N)=>{const P=Number(N.target.value),b=oo(fn(R),P);l(b)},[l]),f=A.useCallback((R,N)=>{const P=Number(N.target.value),b=uo(fn(R),P);l(b)},[l]),[c,T]=em({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),F=Zv(r.date,c,T,n),y=Qv(c,T,n);return v.createElement("div",Object.assign({},Be(s,["displayIndex"])),v.createElement("div",{className:k("navds-date__caption")},(u==null?void 0:u.startsWith("dropdown"))&&v.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:k("navds-sr-only")},cn(r.date,"LLLL y",{locale:n})),v.createElement(We,{variant:"tertiary-neutral",disabled:!d,onClick:()=>d&&l(d),icon:v.createElement(ru,{title:m("goToPreviousMonth")}),className:k("navds-date__caption-button"),type:"button"}),u!=null&&u.startsWith("dropdown")?v.createElement("div",{className:k("navds-date__caption")},v.createElement(es,{label:m("month"),hideLabel:!0,className:k("navds-date__caption__month"),onChange:R=>p(r.date,R),value:hs(r.date)},F==null?void 0:F.map(({value:R,label:N,disabled:P})=>v.createElement("option",{key:R,value:R,disabled:P},N))),v.createElement(es,{label:m("year"),hideLabel:!0,className:k("navds-date__caption__year"),onChange:R=>f(r.date,R),value:Ss(r.date)},y==null?void 0:y.map(({value:R,label:N,disabled:P})=>v.createElement("option",{key:R,value:R,disabled:P},N)))):v.createElement(rr,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:k("navds-date__caption-label")},cn(r.date,"LLLL y",{locale:n})),v.createElement(We,{variant:"tertiary-neutral",icon:v.createElement(au,{title:m("goToNextMonth")}),onClick:()=>g&&l(g),disabled:!g,className:k("navds-date__caption-button"),type:"button"})),v.createElement(tm,{weeks:r.weeks,onWeekNumberClick:t}),a)};var lm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const om={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Po=e=>{var{className:a,dropdownCaption:r,disabled:n=[],disableWeekends:t=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:l=!1,onWeekNumberClick:d,fromDate:g,toDate:u,month:k,mode:m,handleSelect:p,locale:f}=e,c=lm(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:T}=se(),F=Vl(),y=f?jl(f):F,R=m??"single";return v.createElement(Yv,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:y,mode:R,onSelect:(N,P)=>{if(R!=="range"||N||!go(i)){p(N);return}if(!i.to){p({from:P,to:void 0});return}let b;Rs(i.to,P)?b=void 0:ca(P,i.to)?b={from:P,to:i.to}:b={from:i.to,to:P},p(b)},selected:i,classNames:om,components:{MonthCaption:()=>v.createElement(v.Fragment,null),DayButton:A.useCallback(N=>v.createElement(nm,Object.assign({},N,{locale:y})),[y]),Month:A.useCallback(N=>v.createElement(im,Object.assign({},N,{locale:y,onWeekNumberClick:R==="multiple"?d:void 0})),[y,R,d]),Day:A.useCallback(N=>v.createElement("td",Object.assign({},Be(N,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:A.useCallback(N=>v.createElement(Ko,Object.assign({},N,{showOnDesktop:!0,onWeekNumberClick:R==="multiple"?d:void 0})),[R,d]),WeekNumberHeader:A.useCallback(N=>v.createElement(Ps,{above:"sm",asChild:!0},v.createElement("th",Object.assign({},N))),[]),Weekdays:A.useCallback(N=>v.createElement("thead",Object.assign({},N,{className:"rdp-head","aria-hidden":!0}),v.createElement("tr",{className:"rdp-head_row"},N.children)),[])},className:T("navds-date",a),disabled:N=>t&&Ua(N)||mr(N,n)||Jv({day:N,fromDate:g,toDate:u}),weekStartsOn:1,modifiers:{weekend:N=>t&&Ua(N)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:l,showOutsideDays:!0,startMonth:g,endMonth:u,month:Xv({month:k,start:g,end:u})},Be(c,["onSelect","role","id","defaultSelected"])))};var dm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const um=A.forwardRef((e,a)=>{var{className:r,locale:n,translations:t,selected:s,defaultSelected:i,onSelect:l,mode:d}=e,g=dm(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=se(),k=Ta("DatePicker",t,Ll(n)),[m,p]=La({defaultValue:i,value:s,onChange:f=>l==null?void 0:l(f)});return v.createElement(wl,{translate:k},v.createElement("div",{ref:a,className:u("navds-date__standalone-wrapper",r)},v.createElement(Po,Object.assign({},g,{locale:n,handleSelect:p,selected:m,mode:d}))))});var km=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const xa=A.forwardRef((e,a)=>{var{children:r,locale:n,translations:t,selected:s,id:i,defaultSelected:l,wrapperClassName:d,open:g,onClose:u,onOpenToggle:k,strategy:m,mode:p}=e,f=km(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const c=Ta("DatePicker",t,Ll(n)),{cn:T}=se(),F=Ur(i),[y,R]=La({defaultValue:!1,value:g}),[N,P]=A.useState(null),b=rt(P,a),[O,S]=La({defaultValue:l,value:s,onChange:K=>{var j;let L=!1;p==="single"&&K?L=!0:go(K)&&K.from&&K.to&&(L=!0,Rs(K.from,K.to)&&(L=!1)),L&&(u==null||u(),R(!1)),(j=f==null?void 0:f.onSelect)===null||j===void 0||j.call(f,K)}});return v.createElement(wl,{translate:c},v.createElement(Hd,{open:y,onOpen:()=>{R(K=>!K),k==null||k()},ariaId:F,defined:!0},v.createElement("div",{ref:b,className:T("navds-date__wrapper",d)},r,v.createElement(vg,{open:y,anchor:N,onClose:()=>{u==null||u(),y&&R(!1)},locale:n,translate:c,variant:p??"single",popoverProps:{id:F,strategy:m}},v.createElement(Po,Object.assign({},f,{locale:n,handleSelect:S,selected:O,mode:p}))))))});xa.Standalone=um;xa.Input=Yd;const gm=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),vm=(e={})=>{var a;const{locale:r,required:n,defaultSelected:t,today:s=new Date,fromDate:i,toDate:l,disabled:d,disableWeekends:g,onDateChange:u,inputFormat:k,onValidate:m,defaultMonth:p,allowTwoDigitYear:f=!0}=e,[c,T]=A.useState(null),F=Vl(),y=r?jl(r):F,[R,N]=A.useState(t),[P,b]=A.useState((a=R??p)!==null&&a!==void 0?a:s),[O,S]=A.useState(R),[K,j]=A.useState(!1),L=R?ra(R,y,"date",k):"",[M,D]=A.useState(L),H=A.useCallback(Z=>{var z,De;j(Z),Z&&b((De=(z=O??R)!==null&&z!==void 0?z:p)!==null&&De!==void 0?De:s)},[p,R,O,s]),C=Z=>{u==null||u(Z),S(Z)},$=(Z={})=>m==null?void 0:m(gm(Z));return{datepickerProps:{month:P,onMonthChange:b,onDayClick:(Z,{selected:z})=>{if(!(z&&n)){if(Z&&!z&&(H(!1),c==null||c.focus()),z){C(void 0),D(""),$({isValidDate:!1,isEmpty:!0});return}C(Z),$(),b(Z),D(Z?ra(Z,y,"date",k):"")}},selected:O??new Date("Invalid date"),locale:r,fromDate:i,toDate:l,today:s,open:K,onClose:()=>{H(!1),c==null||c.focus()},onOpenToggle:()=>H(!K),disabled:d,disableWeekends:g},inputProps:{onChange:Z=>{D(Z.target.value);const z=Mt(Z.target.value,s,y,"date",f),De=i&&z&&Qr(i,z)>0,Ze=l&&z&&Qr(z,l)>0;if(!Ar(z)||g&&Ua(z)||d&&mr(z,d)){C(void 0),$({isInvalid:!Ar(z),isWeekend:g&&Ua(z),isDisabled:d&&mr(z,d),isValidDate:!1,isEmpty:!Z.target.value,isBefore:De??!1,isAfter:Ze??!1});return}if(De||Ze){C(void 0),$({isValidDate:!1,isBefore:De??!1,isAfter:Ze??!1});return}C(z),$(),b(p??z)},onFocus:Z=>{if(Z.target.readOnly)return;const z=Mt(Z.target.value,s,y,"date",f);if(Ar(z)){D(ra(z,y,"date",k));const De=i&&z&&Qr(i,z)>0,Ze=l&&z&&Qr(z,l)>0;!De&&!Ze&&b(z)}},onBlur:Z=>{const z=Mt(Z.target.value,s,y,"date",f);Ar(z)&&D(ra(z,y,"date",k))},value:M,setAnchorRef:T},reset:()=>{var Z;C(R),b((Z=R??p)!==null&&Z!==void 0?Z:s),D(L??""),N(t)},selectedDay:O,setSelected:Z=>{var z;C(Z),b((z=Z??p)!==null&&z!==void 0?z:s),D(Z?ra(Z,y,"date",k):"")}}};var mm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const pm=A.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",background:s,borderColor:i,borderWidth:l,borderRadius:d,shadow:g,style:u,asChild:k}=e,m=mm(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:p}=se(),f=Object.assign(Object.assign(Object.assign({},u),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":g?`var(--ax-shadow-${g})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":l?l.split(" ").map(T=>`${T}px`).join(" "):void 0}),ps("ax","box","border-radius","border-radius",d,!1,["0"])),c=k?ya:t;return v.createElement(ys,Object.assign({},m),v.createElement(c,Object.assign({},Be(m,Ts),{ref:a,style:f,className:p("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":l,"navds-box-border-radius":d,"navds-box-shadow":g})}),r))});var ym=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Tm=A.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",background:s,borderColor:i,borderWidth:l,borderRadius:d,shadow:g,style:u,asChild:k}=e,m=ym(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const p=gs(!1),{cn:f}=se(),c=p?"ax":"a",T=Object.assign(Object.assign(Object.assign({},u),{[`--__${c}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${c}c-box-shadow`]:g?`var(--a-shadow-${g})`:void 0,[`--__${c}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${c}c-box-border-width`]:l?l.split(" ").map(y=>`${y}px`).join(" "):void 0}),ps(c,"box","border-radius","border-radius",d,!1,["0"])),F=k?ya:t;return v.createElement(ys,Object.assign({},m),v.createElement(F,Object.assign({},Be(m,Ts),{ref:a,style:T,className:f("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":l,"navds-box-border-radius":d,"navds-box-shadow":g})}),r))}),Ra=Tm;Ra.New=pm;var Em=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const tA=A.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",columns:s,gap:i,style:l,align:d,asChild:g}=e,u=Em(e,["children","className","as","columns","gap","style","align","asChild"]);const m=gs(!1)?"ax":"a",{cn:p}=se(),f=Object.assign(Object.assign(Object.assign(Object.assign({},l),{[`--__${m}c-hgrid-align`]:d}),ps(m,"hgrid","gap","spacing",i)),Cd(m,"hgrid","columns",Am(s))),c=g?ya:t;return v.createElement(ys,Object.assign({},u),v.createElement(c,Object.assign({},Be(u,Ts),{ref:a,className:p("navds-hgrid",n,{"navds-hgrid-gap":i,"navds-hgrid-align":d}),style:f}),r))});function Am(e){return e?typeof e=="string"||typeof e=="number"?Pi(e):Object.fromEntries(Object.entries(e).map(([a,r])=>[a,Pi(r)])):{}}const Pi=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var fm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const cm=A.forwardRef((e,a)=>{var{className:r}=e,n=fm(e,["className"]);const{cn:t}=se();return v.createElement("tbody",Object.assign({},n,{ref:a,className:t("navds-table__body",r)}))});var Rm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Do=A.forwardRef((e,a)=>{var{className:r,children:n,align:t,textSize:s}=e,i=Rm(e,["className","children","align","textSize"]);const{cn:l}=se();return v.createElement("th",Object.assign({ref:a,className:l("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${t}`]:t,"navds-label--small":s==="small"})},i),n)}),Mo=A.createContext(null);var Fm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Om=A.forwardRef((e,a)=>{var r,n,t,s,{className:i,children:l,sortable:d=!1,sortKey:g}=e,u=Fm(e,["className","children","sortable","sortKey"]);const k=A.useContext(Mo),{cn:m}=se();return d&&!g&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),v.createElement(Do,Object.assign({scope:"col",ref:a,className:m(i),"aria-sort":d?((r=k==null?void 0:k.sort)===null||r===void 0?void 0:r.orderBy)===g?(n=k==null?void 0:k.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),d?v.createElement("button",{type:"button",className:m("navds-table__sort-button"),onClick:d&&g?()=>{var p;return(p=k==null?void 0:k.onSortChange)===null||p===void 0?void 0:p.call(k,g)}:void 0},l,((t=k==null?void 0:k.sort)===null||t===void 0?void 0:t.orderBy)===g?((s=k==null?void 0:k.sort)===null||s===void 0?void 0:s.direction)==="descending"?v.createElement(gu,{"aria-hidden":!0}):v.createElement(mu,{"aria-hidden":!0}):v.createElement(su,{"aria-hidden":!0})):l)});var bm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const qo=A.forwardRef((e,a)=>{var{className:r,children:n="",align:t,textSize:s}=e,i=bm(e,["className","children","align","textSize"]);const{cn:l}=se();return v.createElement(rr,Object.assign({as:"td",ref:a,className:l("navds-table__data-cell",r,{[`navds-table__data-cell--align-${t}`]:t}),size:s},i),n)});var hm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Sm=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Nm(e){const a=parseFloat(e);return!Number.isNaN(a)&&Number.isFinite(a)}function Di(e){return typeof e=="string"&&e[e.length-1]==="%"&&Nm(e.substring(0,e.length-1))}function It(e,a){a===0&&(e!=null&&e.style)&&(e.style.display="none")}function _m(e,a){a===0&&(e!=null&&e.style)&&(e.style.display="")}const Km=e=>{var{children:a,className:r,innerClassName:n,duration:t=250,easing:s="ease",height:i}=e,l=hm(e,["children","className","innerClassName","duration","easing","height"]);const{cn:d}=se(),g=A.useRef(i),u=A.useRef(null),k=A.useRef(),m=A.useRef(),p=A.useRef(i),f=A.useRef("visible"),c=Sm?0:t;typeof p.current=="number"?(typeof i!="string"&&(p.current=i<0?0:i),f.current="hidden"):Di(p.current)&&(p.current=i==="0%"?0:i,f.current="hidden");const[T,F]=A.useState(p.current),[y,R]=A.useState(f.current),[N,P]=A.useState(!1);A.useEffect(()=>{It(u.current,p.current)},[]),A.useEffect(()=>{if(i!==g.current&&u.current){_m(u.current,g.current),u.current.style.overflow="hidden";const K=u.current.offsetHeight;u.current.style.overflow="";const j=c;let L,M,D="hidden",H;const C=g.current==="auto";typeof i=="number"?(L=i<0?0:i,M=L):Di(i)?(L=i==="0%"?0:i,M=L):(L=K,M="auto",D=void 0),C&&(M=L,L=K),F(L),R("hidden"),P(!C),clearTimeout(m.current),clearTimeout(k.current),C?(H=!0,m.current=setTimeout(()=>{F(M),R(D),P(H)},50),k.current=setTimeout(()=>{P(!1),It(u.current,M)},j)):m.current=setTimeout(()=>{F(M),R(D),P(!1),i!=="auto"&&It(u.current,L)},j)}return g.current=i,()=>{clearTimeout(m.current),clearTimeout(k.current)}},[i]);const b={height:T,overflow:y};N&&(b.transition=`height ${c}ms ${s} 0ms`,b.WebkitTransition=b.transition);const S=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:i===0;return v.createElement("div",Object.assign({},l,{className:d(r),style:b}),v.createElement("div",{"aria-hidden":S,className:d(n),ref:u},a))};var Pm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Io=A.forwardRef((e,a)=>{var{className:r,selected:n=!1,shadeOnHover:t=!0}=e,s=Pm(e,["className","selected","shadeOnHover"]);const{cn:i}=se();return v.createElement("tr",Object.assign({},s,{ref:a,className:i("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":t})}))});var Dm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Mm=A.forwardRef((e,a)=>{var{className:r,children:n,content:t,togglePlacement:s="left",defaultOpen:i=!1,open:l,onOpenChange:d,expansionDisabled:g=!1,expandOnRowClick:u=!1,colSpan:k=999,contentGutter:m,onClick:p}=e,f=Dm(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:c}=se(),[T,F]=La({defaultValue:i,value:l,onChange:d}),y=Ta("global"),R=Ur(),N=b=>{F(O=>!O),b.stopPropagation()},P=b=>{u&&!g&&!Vo(b.target)&&N(b)};return v.createElement(v.Fragment,null,v.createElement(Io,Object.assign({},f,{ref:a,className:c("navds-table__expandable-row",r,{"navds-table__expandable-row--open":T,"navds-table__expandable-row--expansion-disabled":g,"navds-table__expandable-row--clickable":u}),onClick:Ul(p,P)}),s==="right"&&n,v.createElement(qo,{className:c("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":T}),onClick:g?()=>null:N},!g&&v.createElement("button",{className:c("navds-table__toggle-expand-button"),type:"button","aria-controls":R,"aria-expanded":T,onClick:N},v.createElement(st,{className:c("navds-table__expandable-icon"),title:y(T?"showLess":"showMore")}))),s==="left"&&n),v.createElement("tr",{"data-state":T?"open":"closed",className:c("navds-table__expanded-row"),"aria-hidden":!T,id:R},v.createElement("td",{colSpan:k,className:c("navds-table__expanded-row-cell")},v.createElement(Km,{className:c("navds-table__expanded-row-collapse"),innerClassName:c(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${m??s}`),height:T?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},t))))});function Vo(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Vo(e.parentElement)}var qm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Im=A.forwardRef((e,a)=>{var{className:r}=e,n=qm(e,["className"]);const{cn:t}=se();return v.createElement("thead",Object.assign({},n,{ref:a,className:t("navds-table__header",r)}))});var Vm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ke=A.forwardRef((e,a)=>{var{className:r,zebraStripes:n=!1,size:t="medium",onSortChange:s,sort:i}=e,l=Vm(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:d}=se();return v.createElement(Mo.Provider,{value:{onSortChange:s,sort:i}},v.createElement("table",Object.assign({},l,{ref:a,className:d("navds-table",`navds-table--${t}`,r,{"navds-table--zebra-stripes":n})})))});ke.Header=Im;ke.Body=cm;ke.Row=Io;ke.ColumnHeader=Om;ke.HeaderCell=Do;ke.DataCell=qo;ke.ExpandableRow=Mm;var jm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Lm=A.forwardRef((e,a)=>{var{children:r,className:n,variant:t,size:s="medium",icon:i}=e,l=jm(e,["children","className","variant","size","icon"]);const{cn:d}=se(),g=(t==null?void 0:t.endsWith("-filled"))&&"strong",u=(t==null?void 0:t.endsWith("-moderate"))&&"moderate",k=t==null?void 0:t.replace("-filled","").replace("-moderate","");return v.createElement(rr,Object.assign({},l,{ref:a,as:"span",size:s==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${t}`,`navds-tag--${s}`,`navds-tag--${g||u||"outline"}`,`navds-tag--${k}`)}),i&&v.createElement("span",{className:d("navds-tag__icon--left")},i),r)}),wm=e=>{const a=Bn(e,"fieldset"),{inputProps:r}=a;return Object.assign(Object.assign({},a),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var Um=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ds=A.forwardRef((e,a)=>{var r,n,t;const{inputProps:s,errorId:i,showErrorMsg:l,hasError:d,size:g,readOnly:u,inputDescriptionId:k}=wm(e),{cn:m}=se(),p=A.useContext(ja),{children:f,className:c,errorPropagation:T=!0,legend:F,description:y,hideLegend:R,nativeReadOnly:N=!0}=e,P=Um(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(ja.Provider,{value:{error:T?(r=e.error)!==null&&r!==void 0?r:p==null?void 0:p.error:void 0,errorId:Es({[i]:l,[(n=p==null?void 0:p.errorId)!==null&&n!==void 0?n:""]:!!(p!=null&&p.error)}),size:g,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:u}},v.createElement("fieldset",Object.assign({},Be(P,["errorId","error","size","readOnly"]),Be(s,["aria-describedby","aria-invalid"]),{ref:a,className:m(c,"navds-fieldset",`navds-fieldset--${g}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":u})}),v.createElement(gr,{size:g,as:"legend",className:m("navds-fieldset__legend",{"navds-sr-only":!!R})},u&&(N?v.createElement(As,null):v.createElement(vs,null)),F),!!y&&v.createElement(rr,{className:m("navds-fieldset__description",{"navds-sr-only":!!R}),id:k,size:g??"medium",as:"div"},e.description),f,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:m("navds-fieldset__error")},l&&v.createElement(xr,{size:g,showIcon:!0},e.error))))});var Gm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const jo=A.createContext(null),Bm=A.forwardRef((e,a)=>{var r,n,{value:t,defaultValue:s,onChange:i=()=>{},children:l,className:d}=e,g=Gm(e,["value","defaultValue","onChange","children","className"]);const{cn:u}=se(),k=A.useContext(ja),[m,p]=A.useState(s??[]),f=c=>{const T=t??m,F=T.includes(c)?T.filter(y=>y!==c):[...T,c];t===void 0&&p(F),i(F)};return v.createElement(Ds,Object.assign({},g,{ref:a,className:u(d,"navds-checkbox-group",`navds-checkbox-group--${(n=(r=g.size)!==null&&r!==void 0?r:k==null?void 0:k.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(jo.Provider,{value:{value:t,defaultValue:s,toggleValue:f}},v.createElement("div",{className:u("navds-checkboxes")},l)))});var xm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Hm=e=>{const a=A.useContext(jo),r=Bn(Be(e,["description","children"]),"checkbox"),{inputProps:n,readOnly:t}=r,s=xm(r,["inputProps","readOnly"]);return a&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:t,nested:!!a,inputProps:Object.assign(Object.assign({},n),{checked:a!=null&&a.value?a.value.includes(e.value):e.checked,defaultChecked:a!=null&&a.defaultValue?a.defaultValue.includes(e.value):e.defaultChecked,onChange:i=>{var l;t||((l=e.onChange)===null||l===void 0||l.call(e,i),a==null||a.toggleValue(e.value))},onClick:i=>{var l;if(t){i.preventDefault();return}(l=e==null?void 0:e.onClick)===null||l===void 0||l.call(e,i)}})})},rs=A.forwardRef((e,a)=>{const{cn:r}=se(),{inputProps:n,hasError:t,size:s,readOnly:i,nested:l}=Hm(e),d=Ur(),g=Ur();return v.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":t,"navds-checkbox--disabled":n.disabled,"navds-checkbox--readonly":i})},v.createElement("input",Object.assign({},Be(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Be(n,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:u=>{var k;u&&(u.indeterminate=(k=e.indeterminate)!==null&&k!==void 0?k:!1),typeof a=="function"?a(u):a!=null&&(a.current=u)},"aria-labelledby":r(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[g]:e.description})})),v.createElement("label",{htmlFor:n.id,className:r("navds-checkbox__label")},v.createElement("span",{className:r("navds-checkbox__icon")},v.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},v.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),v.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),v.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},v.createElement(rr,{as:"span",id:d,size:s,className:r("navds-checkbox__label-text"),"aria-hidden":!0},!l&&i&&v.createElement(vs,null),e.children),e.description&&v.createElement(rr,{as:"span",id:g,size:s,className:r("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))});var Ym=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Lo=v.createContext(null),Cm=A.forwardRef((e,a)=>{var r,n,{children:t,className:s,name:i,defaultValue:l,value:d,onChange:g=()=>{},required:u,readOnly:k}=e,m=Ym(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:p}=se(),f=A.useContext(ja),c=Ur();return v.createElement(Ds,Object.assign({},m,{readOnly:k,ref:a,className:p(s,"navds-radio-group",`navds-radio-group--${(n=(r=m.size)!==null&&r!==void 0?r:f==null?void 0:f.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(Lo.Provider,{value:{name:i??`radioGroupName-${c}`,defaultValue:l,value:d,onChange:g,required:u}},v.createElement("div",{className:p("navds-radio-buttons")},t)))});var $m=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Jm=e=>{const a=A.useContext(Lo),r=Bn(Be(e,["description"]),"radio"),{inputProps:n,readOnly:t}=r,s=$m(r,["inputProps","readOnly"]);return a||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:t,inputProps:Object.assign(Object.assign({},n),{name:a==null?void 0:a.name,defaultChecked:(a==null?void 0:a.defaultValue)===void 0?void 0:(a==null?void 0:a.defaultValue)===e.value,checked:(a==null?void 0:a.value)===void 0?void 0:(a==null?void 0:a.value)===e.value,onChange:i=>{var l,d;t||((l=e.onChange)===null||l===void 0||l.call(e,i),(d=a==null?void 0:a.onChange)===null||d===void 0||d.call(a,e.value))},onClick:i=>{var l;if(t){i.preventDefault();return}(l=e==null?void 0:e.onClick)===null||l===void 0||l.call(e,i)},required:a==null?void 0:a.required,type:"radio"})})},Mi=A.forwardRef((e,a)=>{const{cn:r}=se(),{inputProps:n,size:t,hasError:s,readOnly:i}=Jm(e),l=Ur(),d=Ur();return v.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":s,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i})},v.createElement("input",Object.assign({},Be(e,["children","size","description","readOnly"]),Be(n,["aria-invalid"]),{"aria-labelledby":Es(l,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description}),className:r("navds-radio__input"),ref:a})),v.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},v.createElement("span",{className:r("navds-radio__content")},v.createElement(rr,{as:"span",id:l,size:t,"aria-hidden":!0},e.children),e.description&&v.createElement(rr,{as:"span",id:d,size:t,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Wm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const qi=(e,a,r)=>{const{outerHeightStyle:n,overflow:t}=a;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==t)?(r.current+=1,a):e},Ii=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function Sa(e){return parseInt(e,10)||0}const zm=A.forwardRef((e,a)=>{var r,n,{className:t,onChange:s,maxRows:i,minRows:l=1,autoScrollbar:d,style:g,value:u}=e,k=Wm(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=A.useRef(u!=null),p=A.useRef(null),f=rt(p,a),c=A.useRef(null),T=A.useRef(0),[F,y]=A.useState({outerHeightStyle:0}),R=v.useCallback(()=>{const O=p.current,K=Ii(O).getComputedStyle(O);if(K.width==="0px")return{outerHeightStyle:0};const j=c.current;j.style.width=K.width,j.value=O.value||k.placeholder||"x",j.value.slice(-1)===`
`&&(j.value+=" ");const L=K.boxSizing,M=Sa(K.paddingBottom)+Sa(K.paddingTop),D=Sa(K.borderBottomWidth)+Sa(K.borderTopWidth),H=j.scrollHeight-M;j.value="x";const C=j.scrollHeight-M;let $=H;l&&($=Math.max(Number(l)*C,$)),i&&($=Math.min(Number(i)*C,$)),$=Math.max($,C);const le=$+(L==="border-box"?M+D:0),pe=Math.abs($-H)<=1;return{outerHeightStyle:le,overflow:pe}},[i,l,k.placeholder]),N=()=>{const O=R();Vi(O)||y(S=>qi(S,O,T))};Un(()=>{const O=()=>{const M=R();Vi(M)||ql.flushSync(()=>{y(D=>qi(D,M,T))})},S=xl(()=>{var M,D,H;if(T.current=0,!((M=p.current)===null||M===void 0)&&M.style.height||!((D=p.current)===null||D===void 0)&&D.style.width){((H=p.current)===null||H===void 0?void 0:H.style.overflow)==="hidden"&&y(C=>Object.assign(Object.assign({},C),{overflow:!1}));return}O()},166,!0),K=p.current,j=Ii(K);j.addEventListener("resize",S);let L;return typeof ResizeObserver<"u"&&(L=new ResizeObserver(S),L.observe(K)),()=>{S.clear(),j.removeEventListener("resize",S),L&&L.disconnect()}},[R]),Un(()=>{N()}),A.useEffect(()=>{T.current=0},[u]);const P=O=>{T.current=0,m||N(),s&&s(O)},b=Object.assign({"--__ac-textarea-height":F.outerHeightStyle+"px","--__axc-textarea-height":F.outerHeightStyle+"px",overflow:F.overflow&&!d&&!(!((r=p.current)===null||r===void 0)&&r.style.height)&&!(!((n=p.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},g);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:u,onChange:P,ref:f,rows:l,style:b},k,{className:t})),v.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:c,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},g)}))});function Vi(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xm=({maxLengthId:e,maxLength:a,currentLength:r,size:n,i18n:t})=>{const{cn:s}=se(),i=Ta("Textarea",{charsLeft:t!=null&&t.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t!=null&&t.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),l=a-r,[d,g]=A.useState(l);return A.useEffect(()=>{const u=xl(()=>{g(l)},2e3);return u(),()=>{u.clear()}},[l]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:a})),l<20&&v.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},ji(d,i)),v.createElement(rr,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":l<0}),size:n},ji(l,i)))},ji=(e,a)=>e<0?a("charsTooMany",{chars:Math.abs(e)}):a("charsLeft",{chars:e});var Zm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Qm=A.forwardRef((e,a)=>{var r,n,t;const{inputProps:s,errorId:i,showErrorMsg:l,hasError:d,size:g,inputDescriptionId:u}=Bn(e,"textarea"),{label:k,className:m,description:p,maxLength:f,hideLabel:c=!1,resize:T,UNSAFE_autoScrollbar:F,i18n:y,readOnly:R}=e,N=Zm(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:P}=se(),b=Ur(),O=f!==void 0&&f>0,[S,K]=A.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),j=()=>{let M=N!=null&&N.minRows?N==null?void 0:N.minRows:3;return g==="small"&&(M=N!=null&&N.minRows?N==null?void 0:N.minRows:2),M},L=Es(s["aria-describedby"],{[b??""]:O});return v.createElement("div",{className:P(m,"navds-form-field",`navds-form-field--${g}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":d,"navds-textarea--autoscrollbar":F,[`navds-textarea--resize-${T===!0?"both":T}`]:T})},v.createElement(gr,{htmlFor:s.id,size:g,className:P("navds-form-field__label",{"navds-sr-only":c})},R&&v.createElement(As,null),k),!!p&&v.createElement(rr,{className:P("navds-form-field__description",{"navds-sr-only":c}),id:u,size:g,as:"div"},p),v.createElement(zm,Object.assign({},Be(N,["error","errorId","size"]),s,{onChange:Ul(e.onChange,e.value===void 0?M=>K(M.target.value):void 0),minRows:j(),autoScrollbar:F,ref:a,readOnly:R,className:P("navds-textarea__input","navds-body-short",`navds-body-short--${g??"medium"}`)},L?{"aria-describedby":L}:{})),O&&!R&&!s.disabled&&v.createElement(Xm,{maxLengthId:b,maxLength:f,currentLength:(t=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&t!==void 0?t:S.length,size:g,i18n:y}),v.createElement("div",{className:P("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},l&&v.createElement(xr,{size:g,showIcon:!0},e.error)))});var ep=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const rp=A.forwardRef((e,a)=>{const{cn:r}=se(),{inputProps:n,errorId:t,showErrorMsg:s,hasError:i,size:l,inputDescriptionId:d}=Bn(e,"textField"),{label:g,className:u,description:k,htmlSize:m,hideLabel:p=!1,type:f="text",readOnly:c}=e,T=ep(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return v.createElement("div",{className:r(u,"navds-form-field",`navds-form-field--${l}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-text-field--readonly":c})},v.createElement(gr,{htmlFor:n.id,size:l,className:r("navds-form-field__label",{"navds-sr-only":p})},c&&v.createElement(As,null),g),!!k&&v.createElement(rr,{className:r("navds-form-field__description",{"navds-sr-only":p}),id:d,size:l,as:"div"},k),v.createElement("input",Object.assign({},Be(T,["error","errorId","size"]),n,{ref:a,type:f,readOnly:c,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:m})),v.createElement("div",{className:r("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement(xr,{size:l,showIcon:!0},e.error)))});function np(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Li={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi;function ap(){if(wi)return na;wi=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(n,t,s){var i=null;if(s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),"key"in t){s={};for(var l in t)l!=="key"&&(s[l]=t[l])}else s=t;return t=s.ref,{$$typeof:e,type:n,key:i,ref:t!==void 0?t:null,props:s}}return na.Fragment=a,na.jsx=r,na.jsxs=r,na}var Ui;function tp(){return Ui||(Ui=1,Li.exports=ap()),Li.exports}var Je=tp();const sA=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Je.jsx(nt,{variant:"warning",size:"small",children:Je.jsx(Q,{gap:"2",children:v.Children.map(e,a=>Je.jsx(rr,{size:"small",children:a},$d(a)?a.key:a))})}),ut={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};Ae(ut);const Ha="#B7B1A9",wo=4,sp=(e,a,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${Ha};
    border-radius: ${wo}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Ha};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,ip=(e,a,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${Ha};
    border-radius: ${wo}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Ha};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,lp=(e,a,r,n)=>a?ip(e,r,n):sp(e,r,n),op=(e,a,r)=>r?"":a?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,er=({children:e,alignOffset:a=0,alignLeft:r=!1,marginTop:n=0,marginLeft:t=0,hideBorder:s=!1})=>Je.jsxs(Je.Fragment,{children:[Je.jsx("style",{dangerouslySetInnerHTML:{__html:lp(a,r,n,t)}}),Je.jsx("div",{className:op(a,r,s),children:e})]});var Gi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Bi;function dp(){return Bi||(Bi=1,function(e){(function(){var a={}.hasOwnProperty;function r(){for(var s="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(s=t(s,n.call(this,l)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var l in s)a.call(s,l)&&s[l]&&(i=t(i,this&&this[l]||l));return i}function t(s,i){return i?s?s+" "+i:s+i:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Gi)),Gi.exports}var up=dp();const Ms=np(up),kp="_borderbox_1vkvn_1",gp="_error_1vkvn_5",vp="_warning_1vkvn_8",mp={borderbox:kp,error:gp,warning:vp},pp=Ms.bind(mp),xe=({error:e=!1,className:a,children:r})=>Je.jsx(Ra,{padding:"4",className:pp("borderbox",{error:e},a),children:r}),yp="_aksjonspunkt_kn1hn_1",Tp="_erAksjonspunktApent_kn1hn_4",Ep="_erIkkeGodkjentAvBeslutter_kn1hn_8",Ap={aksjonspunkt:yp,erAksjonspunktApent:Tp,erIkkeGodkjentAvBeslutter:Ep};Ms.bind(Ap);Ae(ut);Ae(ut);const fp="_divider_1t980_1",cp="_dividerParagraf_1t980_8",Rp="_leftPanel_1t980_11",Fp="_rightPanel_1t980_14",ns={divider:fp,dividerParagraf:cp,leftPanel:Rp,rightPanel:Fp},Op=Ms.bind(ns),bp=({spaceUnder:e=!1,spaceAbove:a=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:t=!1,className:s})=>Je.jsxs(Je.Fragment,{children:[a&&Je.jsx("div",{style:{marginBottom:"32px"}}),Je.jsx("div",{className:Op(s,{leftPanel:r,rightPanel:n}),children:Je.jsx("div",{className:t?ns.dividerParagraf:ns.divider})}),e&&Je.jsx("div",{style:{marginBottom:"32px"}})]}),qs=()=>Je.jsx("span",{"data-testid":"editedIcon",children:Je.jsx(du,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});Ae(ut);var Fa=e=>e.type==="checkbox",Tn=e=>e instanceof Date,Qe=e=>e==null;const Uo=e=>typeof e=="object";var _e=e=>!Qe(e)&&!Array.isArray(e)&&Uo(e)&&!Tn(e),Go=e=>_e(e)&&e.target?Fa(e.target)?e.target.checked:e.target.value:e,hp=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Bo=(e,a)=>e.has(hp(a)),Sp=e=>{const a=e.constructor&&e.constructor.prototype;return _e(a)&&a.hasOwnProperty("isPrototypeOf")},Is=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ce(e){let a;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)a=new Date(e);else if(e instanceof Set)a=new Set(e);else if(!(Is&&(e instanceof Blob||n))&&(r||_e(e)))if(a=r?[]:{},!r&&!Sp(e))a=e;else for(const t in e)e.hasOwnProperty(t)&&(a[t]=ce(e[t]));else return e;return a}var Oa=e=>Array.isArray(e)?e.filter(Boolean):[],Ee=e=>e===void 0,I=(e,a,r)=>{if(!a||!_e(e))return r;const n=Oa(a.split(/[,[\].]+?/)).reduce((t,s)=>Qe(t)?t:t[s],e);return Ee(n)||n===e?Ee(e[a])?r:e[a]:n},ur=e=>typeof e=="boolean",Vs=e=>/^\w*$/.test(e),xo=e=>Oa(e.replace(/["|']|\]/g,"").split(/\.|\[/)),de=(e,a,r)=>{let n=-1;const t=Vs(a)?[a]:xo(a),s=t.length,i=s-1;for(;++n<s;){const l=t[n];let d=r;if(n!==i){const g=e[l];d=_e(g)||Array.isArray(g)?g:isNaN(+t[n+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=d,e=e[l]}};const Ya={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ir={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ho=v.createContext(null),X=()=>v.useContext(Ho),Np=e=>{const{children:a,...r}=e;return v.createElement(Ho.Provider,{value:r},a)};var Yo=(e,a,r,n=!0)=>{const t={defaultValues:a._defaultValues};for(const s in e)Object.defineProperty(t,s,{get:()=>{const i=s;return a._proxyFormState[i]!==vr.all&&(a._proxyFormState[i]=!n||vr.all),r&&(r[i]=!0),e[i]}});return t};const js=typeof window<"u"?A.useLayoutEffect:A.useEffect;function _p(e){const a=X(),{control:r=a.control,disabled:n,name:t,exact:s}=e||{},[i,l]=v.useState(r._formState),d=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return js(()=>r._subscribe({name:t,formState:d.current,exact:s,callback:g=>{!n&&l({...r._formState,...g})}}),[t,n,s]),v.useEffect(()=>{d.current.isValid&&r._setValid(!0)},[r]),v.useMemo(()=>Yo(i,r,d.current,!1),[i,r])}var Kr=e=>typeof e=="string",Co=(e,a,r,n,t)=>Kr(e)?(n&&a.watch.add(e),I(r,e,t)):Array.isArray(e)?e.map(s=>(n&&a.watch.add(s),I(r,s))):(n&&(a.watchAll=!0),r);function Kp(e){const a=X(),{control:r=a.control,name:n,defaultValue:t,disabled:s,exact:i}=e||{},l=v.useRef(t),[d,g]=v.useState(r._getWatch(n,l.current));return js(()=>r._subscribe({name:n,formState:{values:!0},exact:i,callback:u=>!s&&g(Co(n,r._names,u.values||r._formValues,!1,l.current))}),[n,r,s,i]),v.useEffect(()=>r._removeUnmounted()),d}function hn(e){const a=X(),{name:r,disabled:n,control:t=a.control,shouldUnregister:s}=e,i=Bo(t._names.array,r),l=Kp({control:t,name:r,defaultValue:I(t._formValues,r,I(t._defaultValues,r,e.defaultValue)),exact:!0}),d=_p({control:t,name:r,exact:!0}),g=v.useRef(e),u=v.useRef(t.register(r,{...e.rules,value:l,...ur(e.disabled)?{disabled:e.disabled}:{}})),k=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!I(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!I(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!I(d.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!I(d.validatingFields,r)},error:{enumerable:!0,get:()=>I(d.errors,r)}}),[d,r]),m=v.useCallback(T=>u.current.onChange({target:{value:Go(T),name:r},type:Ya.CHANGE}),[r]),p=v.useCallback(()=>u.current.onBlur({target:{value:I(t._formValues,r),name:r},type:Ya.BLUR}),[r,t._formValues]),f=v.useCallback(T=>{const F=I(t._fields,r);F&&T&&(F._f.ref={focus:()=>T.focus(),select:()=>T.select(),setCustomValidity:y=>T.setCustomValidity(y),reportValidity:()=>T.reportValidity()})},[t._fields,r]),c=v.useMemo(()=>({name:r,value:l,...ur(n)||d.disabled?{disabled:d.disabled||n}:{},onChange:m,onBlur:p,ref:f}),[r,n,d.disabled,m,p,f,l]);return v.useEffect(()=>{const T=t._options.shouldUnregister||s;t.register(r,{...g.current.rules,...ur(g.current.disabled)?{disabled:g.current.disabled}:{}});const F=(y,R)=>{const N=I(t._fields,y);N&&N._f&&(N._f.mount=R)};if(F(r,!0),T){const y=ce(I(t._options.defaultValues,r));de(t._defaultValues,r,y),Ee(I(t._formValues,r))&&de(t._formValues,r,y)}return!i&&t.register(r),()=>{(i?T&&!t._state.action:T)?t.unregister(r):F(r,!1)}},[r,t,i,s]),v.useEffect(()=>{t._setDisabledField({disabled:n,name:r})},[n,r,t]),v.useMemo(()=>({field:c,formState:d,fieldState:k}),[c,d,k])}var Pp=(e,a,r,n,t)=>a?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:t||!0}}:{},nr=e=>Array.isArray(e)?e:[e],xi=()=>{let e=[];return{get observers(){return e},next:t=>{for(const s of e)s.next&&s.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(s=>s!==t)}}),unsubscribe:()=>{e=[]}}},as=e=>Qe(e)||!Uo(e);function Zr(e,a){if(as(e)||as(a))return e===a;if(Tn(e)&&Tn(a))return e.getTime()===a.getTime();const r=Object.keys(e),n=Object.keys(a);if(r.length!==n.length)return!1;for(const t of r){const s=e[t];if(!n.includes(t))return!1;if(t!=="ref"){const i=a[t];if(Tn(s)&&Tn(i)||_e(s)&&_e(i)||Array.isArray(s)&&Array.isArray(i)?!Zr(s,i):s!==i)return!1}}return!0}var Ce=e=>_e(e)&&!Object.keys(e).length,Ls=e=>e.type==="file",Tr=e=>typeof e=="function",Ca=e=>{if(!Is)return!1;const a=e?e.ownerDocument:0;return e instanceof(a&&a.defaultView?a.defaultView.HTMLElement:HTMLElement)},$o=e=>e.type==="select-multiple",ws=e=>e.type==="radio",Dp=e=>ws(e)||Fa(e),Vt=e=>Ca(e)&&e.isConnected;function Mp(e,a){const r=a.slice(0,-1).length;let n=0;for(;n<r;)e=Ee(e)?n++:e[a[n++]];return e}function qp(e){for(const a in e)if(e.hasOwnProperty(a)&&!Ee(e[a]))return!1;return!0}function Me(e,a){const r=Array.isArray(a)?a:Vs(a)?[a]:xo(a),n=r.length===1?e:Mp(e,r),t=r.length-1,s=r[t];return n&&delete n[s],t!==0&&(_e(n)&&Ce(n)||Array.isArray(n)&&qp(n))&&Me(e,r.slice(0,-1)),e}var Jo=e=>{for(const a in e)if(Tr(e[a]))return!0;return!1};function $a(e,a={}){const r=Array.isArray(e);if(_e(e)||r)for(const n in e)Array.isArray(e[n])||_e(e[n])&&!Jo(e[n])?(a[n]=Array.isArray(e[n])?[]:{},$a(e[n],a[n])):Qe(e[n])||(a[n]=!0);return a}function Wo(e,a,r){const n=Array.isArray(e);if(_e(e)||n)for(const t in e)Array.isArray(e[t])||_e(e[t])&&!Jo(e[t])?Ee(a)||as(r[t])?r[t]=Array.isArray(e[t])?$a(e[t],[]):{...$a(e[t])}:Wo(e[t],Qe(a)?{}:a[t],r[t]):r[t]=!Zr(e[t],a[t]);return r}var aa=(e,a)=>Wo(e,a,$a(a));const Hi={value:!1,isValid:!1},Yi={value:!0,isValid:!0};var zo=e=>{if(Array.isArray(e)){if(e.length>1){const a=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:a,isValid:!!a.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ee(e[0].attributes.value)?Ee(e[0].value)||e[0].value===""?Yi:{value:e[0].value,isValid:!0}:Yi:Hi}return Hi},Xo=(e,{valueAsNumber:a,valueAsDate:r,setValueAs:n})=>Ee(e)?e:a?e===""?NaN:e&&+e:r&&Kr(e)?new Date(e):n?n(e):e;const Ci={isValid:!1,value:null};var Zo=e=>Array.isArray(e)?e.reduce((a,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:a,Ci):Ci;function $i(e){const a=e.ref;return Ls(a)?a.files:ws(a)?Zo(e.refs).value:$o(a)?[...a.selectedOptions].map(({value:r})=>r):Fa(a)?zo(e.refs).value:Xo(Ee(a.value)?e.ref.value:a.value,e)}var Ip=(e,a,r,n)=>{const t={};for(const s of e){const i=I(a,s);i&&de(t,s,i._f)}return{criteriaMode:r,names:[...e],fields:t,shouldUseNativeValidation:n}},Ja=e=>e instanceof RegExp,ta=e=>Ee(e)?e:Ja(e)?e.source:_e(e)?Ja(e.value)?e.value.source:e.value:e,Mn=e=>({isOnSubmit:!e||e===vr.onSubmit,isOnBlur:e===vr.onBlur,isOnChange:e===vr.onChange,isOnAll:e===vr.all,isOnTouch:e===vr.onTouched});const Ji="AsyncFunction";var Vp=e=>!!e&&!!e.validate&&!!(Tr(e.validate)&&e.validate.constructor.name===Ji||_e(e.validate)&&Object.values(e.validate).find(a=>a.constructor.name===Ji)),jp=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ts=(e,a,r)=>!r&&(a.watchAll||a.watch.has(e)||[...a.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Ln=(e,a,r,n)=>{for(const t of r||Object.keys(e)){const s=I(e,t);if(s){const{_f:i,...l}=s;if(i){if(i.refs&&i.refs[0]&&a(i.refs[0],t)&&!n)return!0;if(i.ref&&a(i.ref,i.name)&&!n)return!0;if(Ln(l,a))break}else if(_e(l)&&Ln(l,a))break}}};function Wi(e,a,r){const n=I(e,r);if(n||Vs(r))return{error:n,name:r};const t=r.split(".");for(;t.length;){const s=t.join("."),i=I(a,s),l=I(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(l&&l.type)return{name:s,error:l};t.pop()}return{name:r}}var Lp=(e,a,r,n)=>{r(e);const{name:t,...s}=e;return Ce(s)||Object.keys(s).length>=Object.keys(a).length||Object.keys(s).find(i=>a[i]===(!n||vr.all))},wp=(e,a,r)=>!e||!a||e===a||nr(e).some(n=>n&&(r?n===a:n.startsWith(a)||a.startsWith(n))),Up=(e,a,r,n,t)=>t.isOnAll?!1:!r&&t.isOnTouch?!(a||e):(r?n.isOnBlur:t.isOnBlur)?!e:(r?n.isOnChange:t.isOnChange)?e:!0,Gp=(e,a)=>!Oa(I(e,a)).length&&Me(e,a),Qo=(e,a,r)=>{const n=nr(I(e,r));return de(n,"root",a[r]),de(e,r,n),e},qa=e=>Kr(e);function zi(e,a,r="validate"){if(qa(e)||Array.isArray(e)&&e.every(qa)||ur(e)&&!e)return{type:r,message:qa(e)?e:"",ref:a}}var Pn=e=>_e(e)&&!Ja(e)?e:{value:e,message:""},ss=async(e,a,r,n,t,s)=>{const{ref:i,refs:l,required:d,maxLength:g,minLength:u,min:k,max:m,pattern:p,validate:f,name:c,valueAsNumber:T,mount:F}=e._f,y=I(r,c);if(!F||a.has(c))return{};const R=l?l[0]:i,N=M=>{t&&R.reportValidity&&(R.setCustomValidity(ur(M)?"":M||""),R.reportValidity())},P={},b=ws(i),O=Fa(i),S=b||O,K=(T||Ls(i))&&Ee(i.value)&&Ee(y)||Ca(i)&&i.value===""||y===""||Array.isArray(y)&&!y.length,j=Pp.bind(null,c,n,P),L=(M,D,H,C=Ir.maxLength,$=Ir.minLength)=>{const le=M?D:H;P[c]={type:M?C:$,message:le,ref:i,...j(M?C:$,le)}};if(s?!Array.isArray(y)||!y.length:d&&(!S&&(K||Qe(y))||ur(y)&&!y||O&&!zo(l).isValid||b&&!Zo(l).isValid)){const{value:M,message:D}=qa(d)?{value:!!d,message:d}:Pn(d);if(M&&(P[c]={type:Ir.required,message:D,ref:R,...j(Ir.required,D)},!n))return N(D),P}if(!K&&(!Qe(k)||!Qe(m))){let M,D;const H=Pn(m),C=Pn(k);if(!Qe(y)&&!isNaN(y)){const $=i.valueAsNumber||y&&+y;Qe(H.value)||(M=$>H.value),Qe(C.value)||(D=$<C.value)}else{const $=i.valueAsDate||new Date(y),le=He=>new Date(new Date().toDateString()+" "+He),pe=i.type=="time",Pe=i.type=="week";Kr(H.value)&&y&&(M=pe?le(y)>le(H.value):Pe?y>H.value:$>new Date(H.value)),Kr(C.value)&&y&&(D=pe?le(y)<le(C.value):Pe?y<C.value:$<new Date(C.value))}if((M||D)&&(L(!!M,H.message,C.message,Ir.max,Ir.min),!n))return N(P[c].message),P}if((g||u)&&!K&&(Kr(y)||s&&Array.isArray(y))){const M=Pn(g),D=Pn(u),H=!Qe(M.value)&&y.length>+M.value,C=!Qe(D.value)&&y.length<+D.value;if((H||C)&&(L(H,M.message,D.message),!n))return N(P[c].message),P}if(p&&!K&&Kr(y)){const{value:M,message:D}=Pn(p);if(Ja(M)&&!y.match(M)&&(P[c]={type:Ir.pattern,message:D,ref:i,...j(Ir.pattern,D)},!n))return N(D),P}if(f){if(Tr(f)){const M=await f(y,r),D=zi(M,R);if(D&&(P[c]={...D,...j(Ir.validate,D.message)},!n))return N(D.message),P}else if(_e(f)){let M={};for(const D in f){if(!Ce(M)&&!n)break;const H=zi(await f[D](y,r),R,D);H&&(M={...H,...j(D,H.message)},N(H.message),n&&(P[c]=M))}if(!Ce(M)&&(P[c]={ref:R,...M},!n))return P}}return N(!0),P};const Bp={mode:vr.onSubmit,reValidateMode:vr.onChange,shouldFocusError:!0};function xp(e={}){let a={...Bp,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:Tr(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1};const n={};let t=_e(a.defaultValues)||_e(a.values)?ce(a.defaultValues||a.values)||{}:{},s=a.shouldUnregister?{}:ce(t),i={action:!1,mount:!1,watch:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,g=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let k={...u};const m={array:xi(),state:xi()},p=Mn(a.mode),f=Mn(a.reValidateMode),c=a.criteriaMode===vr.all,T=E=>h=>{clearTimeout(g),g=setTimeout(E,h)},F=async E=>{if(!a.disabled&&(u.isValid||k.isValid||E)){const h=a.resolver?Ce((await K()).errors):await L(n,!0);h!==r.isValid&&m.state.next({isValid:h})}},y=(E,h)=>{!a.disabled&&(u.isValidating||u.validatingFields||k.isValidating||k.validatingFields)&&((E||Array.from(l.mount)).forEach(_=>{_&&(h?de(r.validatingFields,_,h):Me(r.validatingFields,_))}),m.state.next({validatingFields:r.validatingFields,isValidating:!Ce(r.validatingFields)}))},R=(E,h=[],_,G,V=!0,q=!0)=>{if(G&&_&&!a.disabled){if(i.action=!0,q&&Array.isArray(I(n,E))){const x=_(I(n,E),G.argA,G.argB);V&&de(n,E,x)}if(q&&Array.isArray(I(r.errors,E))){const x=_(I(r.errors,E),G.argA,G.argB);V&&de(r.errors,E,x),Gp(r.errors,E)}if((u.touchedFields||k.touchedFields)&&q&&Array.isArray(I(r.touchedFields,E))){const x=_(I(r.touchedFields,E),G.argA,G.argB);V&&de(r.touchedFields,E,x)}(u.dirtyFields||k.dirtyFields)&&(r.dirtyFields=aa(t,s)),m.state.next({name:E,isDirty:D(E,h),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else de(s,E,h)},N=(E,h)=>{de(r.errors,E,h),m.state.next({errors:r.errors})},P=E=>{r.errors=E,m.state.next({errors:r.errors,isValid:!1})},b=(E,h,_,G)=>{const V=I(n,E);if(V){const q=I(s,E,Ee(_)?I(t,E):_);Ee(q)||G&&G.defaultChecked||h?de(s,E,h?q:$i(V._f)):$(E,q),i.mount&&F()}},O=(E,h,_,G,V)=>{let q=!1,x=!1;const te={name:E};if(!a.disabled){if(!_||G){(u.isDirty||k.isDirty)&&(x=r.isDirty,r.isDirty=te.isDirty=D(),q=x!==te.isDirty);const Oe=Zr(I(t,E),h);x=!!I(r.dirtyFields,E),Oe?Me(r.dirtyFields,E):de(r.dirtyFields,E,!0),te.dirtyFields=r.dirtyFields,q=q||(u.dirtyFields||k.dirtyFields)&&x!==!Oe}if(_){const Oe=I(r.touchedFields,E);Oe||(de(r.touchedFields,E,_),te.touchedFields=r.touchedFields,q=q||(u.touchedFields||k.touchedFields)&&Oe!==_)}q&&V&&m.state.next(te)}return q?te:{}},S=(E,h,_,G)=>{const V=I(r.errors,E),q=(u.isValid||k.isValid)&&ur(h)&&r.isValid!==h;if(a.delayError&&_?(d=T(()=>N(E,_)),d(a.delayError)):(clearTimeout(g),d=null,_?de(r.errors,E,_):Me(r.errors,E)),(_?!Zr(V,_):V)||!Ce(G)||q){const x={...G,...q&&ur(h)?{isValid:h}:{},errors:r.errors,name:E};r={...r,...x},m.state.next(x)}},K=async E=>{y(E,!0);const h=await a.resolver(s,a.context,Ip(E||l.mount,n,a.criteriaMode,a.shouldUseNativeValidation));return y(E),h},j=async E=>{const{errors:h}=await K(E);if(E)for(const _ of E){const G=I(h,_);G?de(r.errors,_,G):Me(r.errors,_)}else r.errors=h;return h},L=async(E,h,_={valid:!0})=>{for(const G in E){const V=E[G];if(V){const{_f:q,...x}=V;if(q){const te=l.array.has(q.name),Oe=V._f&&Vp(V._f);Oe&&u.validatingFields&&y([G],!0);const Le=await ss(V,l.disabled,s,c,a.shouldUseNativeValidation&&!h,te);if(Oe&&u.validatingFields&&y([G]),Le[q.name]&&(_.valid=!1,h))break;!h&&(I(Le,q.name)?te?Qo(r.errors,Le,q.name):de(r.errors,q.name,Le[q.name]):Me(r.errors,q.name))}!Ce(x)&&await L(x,h,_)}}return _.valid},M=()=>{for(const E of l.unMount){const h=I(n,E);h&&(h._f.refs?h._f.refs.every(_=>!Vt(_)):!Vt(h._f.ref))&&Cr(E)}l.unMount=new Set},D=(E,h)=>!a.disabled&&(E&&h&&de(s,E,h),!Zr(Rr(),t)),H=(E,h,_)=>Co(E,l,{...i.mount?s:Ee(h)?t:Kr(E)?{[E]:h}:h},_,h),C=E=>Oa(I(i.mount?s:t,E,a.shouldUnregister?I(t,E,[]):[])),$=(E,h,_={})=>{const G=I(n,E);let V=h;if(G){const q=G._f;q&&(!q.disabled&&de(s,E,Xo(h,q)),V=Ca(q.ref)&&Qe(h)?"":h,$o(q.ref)?[...q.ref.options].forEach(x=>x.selected=V.includes(x.value)):q.refs?Fa(q.ref)?q.refs.length>1?q.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(V)?!!V.find(te=>te===x.value):V===x.value)):q.refs[0]&&(q.refs[0].checked=!!V):q.refs.forEach(x=>x.checked=x.value===V):Ls(q.ref)?q.ref.value="":(q.ref.value=V,q.ref.type||m.state.next({name:E,values:ce(s)})))}(_.shouldDirty||_.shouldTouch)&&O(E,V,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&Fe(E)},le=(E,h,_)=>{for(const G in h){const V=h[G],q=`${E}.${G}`,x=I(n,q);(l.array.has(E)||_e(V)||x&&!x._f)&&!Tn(V)?le(q,V,_):$(q,V,_)}},pe=(E,h,_={})=>{const G=I(n,E),V=l.array.has(E),q=ce(h);de(s,E,q),V?(m.array.next({name:E,values:ce(s)}),(u.isDirty||u.dirtyFields||k.isDirty||k.dirtyFields)&&_.shouldDirty&&m.state.next({name:E,dirtyFields:aa(t,s),isDirty:D(E,q)})):G&&!G._f&&!Qe(q)?le(E,q,_):$(E,q,_),ts(E,l)&&m.state.next({...r}),m.state.next({name:i.mount?E:void 0,values:ce(s)})},Pe=async E=>{i.mount=!0;const h=E.target;let _=h.name,G=!0;const V=I(n,_),q=x=>{G=Number.isNaN(x)||Tn(x)&&isNaN(x.getTime())||Zr(x,I(s,_,x))};if(V){let x,te;const Oe=h.type?$i(V._f):Go(E),Le=E.type===Ya.BLUR||E.type===Ya.FOCUS_OUT,ht=!jp(V._f)&&!a.resolver&&!I(r.errors,_)&&!V._f.deps||Up(Le,I(r.touchedFields,_),r.isSubmitted,f,p),ee=ts(_,l,Le);de(s,_,Oe),Le?(V._f.onBlur&&V._f.onBlur(E),d&&d(0)):V._f.onChange&&V._f.onChange(E);const Te=O(_,Oe,Le),ve=!Ce(Te)||ee;if(!Le&&m.state.next({name:_,type:E.type,values:ce(s)}),ht)return(u.isValid||k.isValid)&&(a.mode==="onBlur"?Le&&F():Le||F()),ve&&m.state.next({name:_,...ee?{}:Te});if(!Le&&ee&&m.state.next({...r}),a.resolver){const{errors:yr}=await K([_]);if(q(Oe),G){const lr=Wi(r.errors,n,_),dn=Wi(yr,n,lr.name||_);x=dn.error,_=dn.name,te=Ce(yr)}}else y([_],!0),x=(await ss(V,l.disabled,s,c,a.shouldUseNativeValidation))[_],y([_]),q(Oe),G&&(x?te=!1:(u.isValid||k.isValid)&&(te=await L(n,!0)));G&&(V._f.deps&&Fe(V._f.deps),S(_,te,x,Te))}},He=(E,h)=>{if(I(r.errors,h)&&E.focus)return E.focus(),1},Fe=async(E,h={})=>{let _,G;const V=nr(E);if(a.resolver){const q=await j(Ee(E)?E:V);_=Ce(q),G=E?!V.some(x=>I(q,x)):_}else E?(G=(await Promise.all(V.map(async q=>{const x=I(n,q);return await L(x&&x._f?{[q]:x}:x)}))).every(Boolean),!(!G&&!r.isValid)&&F()):G=_=await L(n);return m.state.next({...!Kr(E)||(u.isValid||k.isValid)&&_!==r.isValid?{}:{name:E},...a.resolver||!E?{isValid:_}:{},errors:r.errors}),h.shouldFocus&&!G&&Ln(n,He,E?V:l.mount),G},Rr=E=>{const h={...i.mount?s:t};return Ee(E)?h:Kr(E)?I(h,E):E.map(_=>I(h,_))},ir=(E,h)=>({invalid:!!I((h||r).errors,E),isDirty:!!I((h||r).dirtyFields,E),error:I((h||r).errors,E),isValidating:!!I(r.validatingFields,E),isTouched:!!I((h||r).touchedFields,E)}),Nn=E=>{E&&nr(E).forEach(h=>Me(r.errors,h)),m.state.next({errors:E?r.errors:{}})},Z=(E,h,_)=>{const G=(I(n,E,{_f:{}})._f||{}).ref,V=I(r.errors,E)||{},{ref:q,message:x,type:te,...Oe}=V;de(r.errors,E,{...Oe,...h,ref:G}),m.state.next({name:E,errors:r.errors,isValid:!1}),_&&_.shouldFocus&&G&&G.focus&&G.focus()},z=(E,h)=>Tr(E)?m.state.subscribe({next:_=>E(H(void 0,h),_)}):H(E,h,!0),De=E=>m.state.subscribe({next:h=>{wp(E.name,h.name,E.exact)&&Lp(h,E.formState||u,on,E.reRenderRoot)&&E.callback({values:{...s},...r,...h})}}).unsubscribe,Ze=E=>(i.mount=!0,k={...k,...E.formState},De({...E,formState:k})),Cr=(E,h={})=>{for(const _ of E?nr(E):l.mount)l.mount.delete(_),l.array.delete(_),h.keepValue||(Me(n,_),Me(s,_)),!h.keepError&&Me(r.errors,_),!h.keepDirty&&Me(r.dirtyFields,_),!h.keepTouched&&Me(r.touchedFields,_),!h.keepIsValidating&&Me(r.validatingFields,_),!a.shouldUnregister&&!h.keepDefaultValue&&Me(t,_);m.state.next({values:ce(s)}),m.state.next({...r,...h.keepDirty?{isDirty:D()}:{}}),!h.keepIsValid&&F()},tn=({disabled:E,name:h})=>{(ur(E)&&i.mount||E||l.disabled.has(h))&&(E?l.disabled.add(h):l.disabled.delete(h))},Dr=(E,h={})=>{let _=I(n,E);const G=ur(h.disabled)||ur(a.disabled);return de(n,E,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:E}},name:E,mount:!0,...h}}),l.mount.add(E),_?tn({disabled:ur(h.disabled)?h.disabled:a.disabled,name:E}):b(E,!0,h.value),{...G?{disabled:h.disabled||a.disabled}:{},...a.progressive?{required:!!h.required,min:ta(h.min),max:ta(h.max),minLength:ta(h.minLength),maxLength:ta(h.maxLength),pattern:ta(h.pattern)}:{},name:E,onChange:Pe,onBlur:Pe,ref:V=>{if(V){Dr(E,h),_=I(n,E);const q=Ee(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,x=Dp(q),te=_._f.refs||[];if(x?te.find(Oe=>Oe===q):q===_._f.ref)return;de(n,E,{_f:{..._._f,...x?{refs:[...te.filter(Vt),q,...Array.isArray(I(t,E))?[{}]:[]],ref:{type:q.type,name:E}}:{ref:q}}}),b(E,!1,void 0,q)}else _=I(n,E,{}),_._f&&(_._f.mount=!1),(a.shouldUnregister||h.shouldUnregister)&&!(Bo(l.array,E)&&i.action)&&l.unMount.add(E)}}},$r=()=>a.shouldFocusError&&Ln(n,He,l.mount),sn=E=>{ur(E)&&(m.state.next({disabled:E}),Ln(n,(h,_)=>{const G=I(n,_);G&&(h.disabled=G._f.disabled||E,Array.isArray(G._f.refs)&&G._f.refs.forEach(V=>{V.disabled=G._f.disabled||E}))},0,!1))},Mr=(E,h)=>async _=>{let G;_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let V=ce(s);if(m.state.next({isSubmitting:!0}),a.resolver){const{errors:q,values:x}=await K();r.errors=q,V=x}else await L(n);if(l.disabled.size)for(const q of l.disabled)de(V,q,void 0);if(Me(r.errors,"root"),Ce(r.errors)){m.state.next({errors:{}});try{await E(V,_)}catch(q){G=q}}else h&&await h({...r.errors},_),$r(),setTimeout($r);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ce(r.errors)&&!G,submitCount:r.submitCount+1,errors:r.errors}),G)throw G},Jr=(E,h={})=>{I(n,E)&&(Ee(h.defaultValue)?pe(E,ce(I(t,E))):(pe(E,h.defaultValue),de(t,E,ce(h.defaultValue))),h.keepTouched||Me(r.touchedFields,E),h.keepDirty||(Me(r.dirtyFields,E),r.isDirty=h.defaultValue?D(E,ce(I(t,E))):D()),h.keepError||(Me(r.errors,E),u.isValid&&F()),m.state.next({...r}))},Wr=(E,h={})=>{const _=E?ce(E):t,G=ce(_),V=Ce(E),q=V?t:G;if(h.keepDefaultValues||(t=_),!h.keepValues){if(h.keepDirtyValues){const x=new Set([...l.mount,...Object.keys(aa(t,s))]);for(const te of Array.from(x))I(r.dirtyFields,te)?de(q,te,I(s,te)):pe(te,I(q,te))}else{if(Is&&Ee(E))for(const x of l.mount){const te=I(n,x);if(te&&te._f){const Oe=Array.isArray(te._f.refs)?te._f.refs[0]:te._f.ref;if(Ca(Oe)){const Le=Oe.closest("form");if(Le){Le.reset();break}}}}for(const x of l.mount)pe(x,I(q,x))}s=ce(q),m.array.next({values:{...q}}),m.state.next({values:{...q}})}l={mount:h.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!h.keepIsValid||!!h.keepDirtyValues,i.watch=!!a.shouldUnregister,m.state.next({submitCount:h.keepSubmitCount?r.submitCount:0,isDirty:V?!1:h.keepDirty?r.isDirty:!!(h.keepDefaultValues&&!Zr(E,t)),isSubmitted:h.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:V?{}:h.keepDirtyValues?h.keepDefaultValues&&s?aa(t,s):r.dirtyFields:h.keepDefaultValues&&E?aa(t,E):h.keepDirty?r.dirtyFields:{},touchedFields:h.keepTouched?r.touchedFields:{},errors:h.keepErrors?r.errors:{},isSubmitSuccessful:h.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},qr=(E,h)=>Wr(Tr(E)?E(s):E,h),ln=(E,h={})=>{const _=I(n,E),G=_&&_._f;if(G){const V=G.refs?G.refs[0]:G.ref;V.focus&&(V.focus(),h.shouldSelect&&Tr(V.select)&&V.select())}},on=E=>{r={...r,...E}},ha={control:{register:Dr,unregister:Cr,getFieldState:ir,handleSubmit:Mr,setError:Z,_subscribe:De,_runSchema:K,_getWatch:H,_getDirty:D,_setValid:F,_setFieldArray:R,_setDisabledField:tn,_setErrors:P,_getFieldArray:C,_reset:Wr,_resetDefaultValues:()=>Tr(a.defaultValues)&&a.defaultValues().then(E=>{qr(E,a.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:M,_disableForm:sn,_subjects:m,_proxyFormState:u,get _fields(){return n},get _formValues(){return s},get _state(){return i},set _state(E){i=E},get _defaultValues(){return t},get _names(){return l},set _names(E){l=E},get _formState(){return r},get _options(){return a},set _options(E){a={...a,...E}}},subscribe:Ze,trigger:Fe,register:Dr,handleSubmit:Mr,watch:z,setValue:pe,getValues:Rr,reset:qr,resetField:Jr,clearErrors:Nn,unregister:Cr,setError:Z,setFocus:ln,getFieldState:ir};return{...ha,formControl:ha}}var Xr=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const r=(Math.random()*16+e)%16|0;return(a=="x"?r:r&3|8).toString(16)})},jt=(e,a,r={})=>r.shouldFocus||Ee(r.shouldFocus)?r.focusName||`${e}.${Ee(r.focusIndex)?a:r.focusIndex}.`:"",Lt=(e,a)=>[...e,...nr(a)],wt=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Ut(e,a,r){return[...e.slice(0,a),...nr(r),...e.slice(a)]}var Gt=(e,a,r)=>Array.isArray(e)?(Ee(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(a,1)[0]),e):[],Bt=(e,a)=>[...nr(a),...nr(e)];function Hp(e,a){let r=0;const n=[...e];for(const t of a)n.splice(t-r,1),r++;return Oa(n).length?n:[]}var xt=(e,a)=>Ee(a)?[]:Hp(e,nr(a).sort((r,n)=>r-n)),Ht=(e,a,r)=>{[e[a],e[r]]=[e[r],e[a]]},Xi=(e,a,r)=>(e[a]=r,e);function sr(e){const a=X(),{control:r=a.control,name:n,keyName:t="id",shouldUnregister:s,rules:i}=e,[l,d]=v.useState(r._getFieldArray(n)),g=v.useRef(r._getFieldArray(n).map(Xr)),u=v.useRef(l),k=v.useRef(n),m=v.useRef(!1);k.current=n,u.current=l,r._names.array.add(n),i&&r.register(n,i),v.useEffect(()=>r._subjects.array.subscribe({next:({values:b,name:O})=>{if(O===k.current||!O){const S=I(b,k.current);Array.isArray(S)&&(d(S),g.current=S.map(Xr))}}}).unsubscribe,[r]);const p=v.useCallback(b=>{m.current=!0,r._setFieldArray(n,b)},[r,n]),f=(b,O)=>{const S=nr(ce(b)),K=Lt(r._getFieldArray(n),S);r._names.focus=jt(n,K.length-1,O),g.current=Lt(g.current,S.map(Xr)),p(K),d(K),r._setFieldArray(n,K,Lt,{argA:wt(b)})},c=(b,O)=>{const S=nr(ce(b)),K=Bt(r._getFieldArray(n),S);r._names.focus=jt(n,0,O),g.current=Bt(g.current,S.map(Xr)),p(K),d(K),r._setFieldArray(n,K,Bt,{argA:wt(b)})},T=b=>{const O=xt(r._getFieldArray(n),b);g.current=xt(g.current,b),p(O),d(O),!Array.isArray(I(r._fields,n))&&de(r._fields,n,void 0),r._setFieldArray(n,O,xt,{argA:b})},F=(b,O,S)=>{const K=nr(ce(O)),j=Ut(r._getFieldArray(n),b,K);r._names.focus=jt(n,b,S),g.current=Ut(g.current,b,K.map(Xr)),p(j),d(j),r._setFieldArray(n,j,Ut,{argA:b,argB:wt(O)})},y=(b,O)=>{const S=r._getFieldArray(n);Ht(S,b,O),Ht(g.current,b,O),p(S),d(S),r._setFieldArray(n,S,Ht,{argA:b,argB:O},!1)},R=(b,O)=>{const S=r._getFieldArray(n);Gt(S,b,O),Gt(g.current,b,O),p(S),d(S),r._setFieldArray(n,S,Gt,{argA:b,argB:O},!1)},N=(b,O)=>{const S=ce(O),K=Xi(r._getFieldArray(n),b,S);g.current=[...K].map((j,L)=>!j||L===b?Xr():g.current[L]),p(K),d([...K]),r._setFieldArray(n,K,Xi,{argA:b,argB:S},!0,!1)},P=b=>{const O=nr(ce(b));g.current=O.map(Xr),p([...O]),d([...O]),r._setFieldArray(n,[...O],S=>S,{},!0,!1)};return v.useEffect(()=>{if(r._state.action=!1,ts(n,r._names)&&r._subjects.state.next({...r._formState}),m.current&&(!Mn(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!Mn(r._options.reValidateMode).isOnSubmit)if(r._options.resolver)r._runSchema([n]).then(b=>{const O=I(b.errors,n),S=I(r._formState.errors,n);(S?!O&&S.type||O&&(S.type!==O.type||S.message!==O.message):O&&O.type)&&(O?de(r._formState.errors,n,O):Me(r._formState.errors,n),r._subjects.state.next({errors:r._formState.errors}))});else{const b=I(r._fields,n);b&&b._f&&!(Mn(r._options.reValidateMode).isOnSubmit&&Mn(r._options.mode).isOnSubmit)&&ss(b,r._names.disabled,r._formValues,r._options.criteriaMode===vr.all,r._options.shouldUseNativeValidation,!0).then(O=>!Ce(O)&&r._subjects.state.next({errors:Qo(r._formState.errors,O,n)}))}r._subjects.state.next({name:n,values:ce(r._formValues)}),r._names.focus&&Ln(r._fields,(b,O)=>{if(r._names.focus&&O.startsWith(r._names.focus)&&b.focus)return b.focus(),1}),r._names.focus="",r._setValid(),m.current=!1},[l,n,r]),v.useEffect(()=>(!I(r._formValues,n)&&r._setFieldArray(n),()=>{const b=(O,S)=>{const K=I(r._fields,O);K&&K._f&&(K._f.mount=S)};r._options.shouldUnregister||s?r.unregister(n):b(n,!1)}),[n,r,t,s]),{swap:v.useCallback(y,[p,n,r]),move:v.useCallback(R,[p,n,r]),prepend:v.useCallback(c,[p,n,r]),append:v.useCallback(f,[p,n,r]),remove:v.useCallback(T,[p,n,r]),insert:v.useCallback(F,[p,n,r]),update:v.useCallback(N,[p,n,r]),replace:v.useCallback(P,[p,n,r]),fields:v.useMemo(()=>l.map((b,O)=>({...b,[t]:g.current[O]||Xr()})),[l,t])}}function iA(e={}){const a=v.useRef(void 0),r=v.useRef(void 0),[n,t]=v.useState({isDirty:!1,isValidating:!1,isLoading:Tr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Tr(e.defaultValues)?void 0:e.defaultValues});a.current||(a.current={...e.formControl?e.formControl:xp(e),formState:n},e.formControl&&e.defaultValues&&!Tr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=a.current.control;return s._options=e,js(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>t({...s._formState}),reRenderRoot:!0});return t(l=>({...l,isReady:!0})),s._formState.isReady=!0,i},[s]),v.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),v.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!Ce(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),v.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),v.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==n.isDirty&&s._subjects.state.next({isDirty:i})}},[s,n.isDirty]),v.useEffect(()=>{e.values&&!Zr(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,t(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),v.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),a.current.formState=Yo(n,s),a.current}function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zi={exports:{}},sa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qi;function Cp(){if(Qi)return sa;Qi=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(n,t,s){var i=null;if(s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),"key"in t){s={};for(var l in t)l!=="key"&&(s[l]=t[l])}else s=t;return t=s.ref,{$$typeof:e,type:n,key:i,ref:t!==void 0?t:null,props:s}}return sa.Fragment=a,sa.jsx=r,sa.jsxs=r,sa}var el;function $p(){return el||(el=1,Zi.exports=Cp()),Zi.exports}var Y=$p();const Sn=e=>e.reduce((a,r,n)=>({...a,[n]:t=>r(t)||!0}),{}),rn=(e,a)=>{const r=a.split(".").reduce((n,t)=>n!==void 0?n[t]:n,e);return r==null?void 0:r.message},kr=({name:e,label:a,validate:r=[],readOnly:n=!1,onChange:t,onClick:s,className:i,disabled:l})=>{const{formState:{errors:d}}=X(),{field:g}=hn({name:e,rules:{validate:A.useMemo(()=>Sn(r),[r])}}),u=rn(d,e);return Y.jsxs(Y.Fragment,{children:[Y.jsx(rs,{size:"small",disabled:l||n,checked:g.value===!0,className:i,error:!!u,...g,onChange:k=>{g.onChange(k),t&&t(k.currentTarget.checked)},onClick:()=>{s&&s()},children:a}),u&&Y.jsx(xr,{children:rn(d,e)})]})},Us=({label:e,name:a,description:r,validate:n=[],checkboxes:t,onChange:s,disabled:i=!1,isReadOnly:l=!1,isHorizontal:d=!1,parse:g=p=>p,hideLegend:u=!1,isEdited:k=!1,size:m="small"})=>{const{formState:{errors:p}}=X(),{field:f}=hn({name:a,rules:{validate:A.useMemo(()=>Sn(n),[n])}}),c=Y.jsxs(ze,{justify:"center",gap:"2",children:[e,l&&k&&Y.jsx(qs,{})]});return Y.jsxs(Bm,{name:a,description:r,value:f.value!==void 0?f.value:[],onChange:T=>{s&&s(T),f.onChange(T)},size:m,legend:c,error:rn(p,a),hideLegend:u,children:[!d&&t.map(T=>Y.jsxs(A.Fragment,{children:[Y.jsx(rs,{size:m,value:g(T.value),disabled:T.disabled||i||l,children:T.label}),(f.value??[]).includes(g(T.value))&&T.element]},T.value)),d&&Y.jsxs(Y.Fragment,{children:[Y.jsx(ze,{gap:"4",children:t.map(T=>Y.jsx(rs,{size:m,value:g(T.value),disabled:T.disabled||i||l,children:T.label},T.value))}),t.filter(T=>(f.value??[]).includes(g(T.value))).map(T=>Y.jsx(A.Fragment,{children:T.element},T.value))]})]})};var is={exports:{}},Jp=is.exports,rl;function Wp(){return rl||(rl=1,function(e,a){(function(r,n){e.exports=n()})(Jp,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,s=/\d\d/,i=/\d\d?/,l=/\d*[^-_:/,()\s\d]+/,d={},g=function(T){return(T=+T)+(T>68?1900:2e3)},u=function(T){return function(F){this[T]=+F}},k=[/[+-]\d\d:?(\d\d)?|Z/,function(T){(this.zone||(this.zone={})).offset=function(F){if(!F||F==="Z")return 0;var y=F.match(/([+-]|\d\d)/g),R=60*y[1]+(+y[2]||0);return R===0?0:y[0]==="+"?-R:R}(T)}],m=function(T){var F=d[T];return F&&(F.indexOf?F:F.s.concat(F.f))},p=function(T,F){var y,R=d.meridiem;if(R){for(var N=1;N<=24;N+=1)if(T.indexOf(R(N,0,F))>-1){y=N>12;break}}else y=T===(F?"pm":"PM");return y},f={A:[l,function(T){this.afternoon=p(T,!1)}],a:[l,function(T){this.afternoon=p(T,!0)}],Q:[t,function(T){this.month=3*(T-1)+1}],S:[t,function(T){this.milliseconds=100*+T}],SS:[s,function(T){this.milliseconds=10*+T}],SSS:[/\d{3}/,function(T){this.milliseconds=+T}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[s,u("day")],Do:[l,function(T){var F=d.ordinal,y=T.match(/\d+/);if(this.day=y[0],F)for(var R=1;R<=31;R+=1)F(R).replace(/\[|\]/g,"")===T&&(this.day=R)}],w:[i,u("week")],ww:[s,u("week")],M:[i,u("month")],MM:[s,u("month")],MMM:[l,function(T){var F=m("months"),y=(m("monthsShort")||F.map(function(R){return R.slice(0,3)})).indexOf(T)+1;if(y<1)throw new Error;this.month=y%12||y}],MMMM:[l,function(T){var F=m("months").indexOf(T)+1;if(F<1)throw new Error;this.month=F%12||F}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(T){this.year=g(T)}],YYYY:[/\d{4}/,u("year")],Z:k,ZZ:k};function c(T){var F,y;F=T,y=d&&d.formats;for(var R=(T=F.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,L,M){var D=M&&M.toUpperCase();return L||y[M]||r[M]||y[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(H,C,$){return C||$.slice(1)})})).match(n),N=R.length,P=0;P<N;P+=1){var b=R[P],O=f[b],S=O&&O[0],K=O&&O[1];R[P]=K?{regex:S,parser:K}:b.replace(/^\[|\]$/g,"")}return function(j){for(var L={},M=0,D=0;M<N;M+=1){var H=R[M];if(typeof H=="string")D+=H.length;else{var C=H.regex,$=H.parser,le=j.slice(D),pe=C.exec(le)[0];$.call(L,pe),j=j.replace(pe,"")}}return function(Pe){var He=Pe.afternoon;if(He!==void 0){var Fe=Pe.hours;He?Fe<12&&(Pe.hours+=12):Fe===12&&(Pe.hours=0),delete Pe.afternoon}}(L),L}}return function(T,F,y){y.p.customParseFormat=!0,T&&T.parseTwoDigitYear&&(g=T.parseTwoDigitYear);var R=F.prototype,N=R.parse;R.parse=function(P){var b=P.date,O=P.utc,S=P.args;this.$u=O;var K=S[1];if(typeof K=="string"){var j=S[2]===!0,L=S[3]===!0,M=j||L,D=S[2];L&&(D=S[2]),d=this.$locale(),!j&&D&&(d=y.Ls[D]),this.$d=function(le,pe,Pe,He){try{if(["x","X"].indexOf(pe)>-1)return new Date((pe==="X"?1e3:1)*le);var Fe=c(pe)(le),Rr=Fe.year,ir=Fe.month,Nn=Fe.day,Z=Fe.hours,z=Fe.minutes,De=Fe.seconds,Ze=Fe.milliseconds,Cr=Fe.zone,tn=Fe.week,Dr=new Date,$r=Nn||(Rr||ir?1:Dr.getDate()),sn=Rr||Dr.getFullYear(),Mr=0;Rr&&!ir||(Mr=ir>0?ir-1:Dr.getMonth());var Jr,Wr=Z||0,qr=z||0,ln=De||0,on=Ze||0;return Cr?new Date(Date.UTC(sn,Mr,$r,Wr,qr,ln,on+60*Cr.offset*1e3)):Pe?new Date(Date.UTC(sn,Mr,$r,Wr,qr,ln,on)):(Jr=new Date(sn,Mr,$r,Wr,qr,ln,on),tn&&(Jr=He(Jr).week(tn).toDate()),Jr)}catch{return new Date("")}}(b,K,O,y),this.init(),D&&D!==!0&&(this.$L=this.locale(D).$L),M&&b!=this.format(K)&&(this.$d=new Date("")),d={}}else if(K instanceof Array)for(var H=K.length,C=1;C<=H;C+=1){S[1]=K[C-1];var $=y.apply(this,S);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}C===H&&(this.$d=new Date(""))}else N.call(this,P)}}})}(is)),is.exports}var zp=Wp();const Xp=Yp(zp),Zp="_textarea_1snk6_1",Qp="_readOnlyField_1snk6_7",nl={textarea:Zp,readOnlyField:Qp},ey=e=>e!=null&&e!=="",kt=({label:e,value:a,isEdited:r=!1,type:n,hideLabel:t,size:s})=>ey(a)?Y.jsxs(Q,{gap:"1",children:[e&&!t&&Y.jsx(gr,{size:s,children:e}),Y.jsxs(ze,{gap:"2",align:"center",wrap:!1,children:[Y.jsx(Jd,{className:n==="textarea"?nl.textarea:nl.readOnlyField,size:s,children:a}),r&&Y.jsx(qs,{})]})]}):null;W.extend(Xp);const re=({name:e,label:a,description:r,validate:n=[],hideLabel:t=!1,disabled:s=!1,isReadOnly:i=!1,onChange:l,disabledDays:d,isEdited:g,defaultMonth:u,fromDate:k,toDate:m,size:p="small"})=>{const{formState:{errors:f}}=X(),{field:c}=hn({name:e,rules:{validate:A.useMemo(()=>Sn(n),[n])}}),T=c.value?W(c.value,we,!0).format(pn):"",[F,y]=A.useState(T),{datepickerProps:R,inputProps:N}=vm({onDateChange:O=>{if(O!==void 0){const S=W(O).format(we);l&&l(S),c.onChange(S),y(W(S,we,!0).format(pn))}},defaultSelected:c.value?W(c.value,we,!0).toDate():void 0,defaultMonth:u||(!c.value&&m?m:void 0),disabled:d}),P=A.useCallback(O=>{const S=W(O.target.value,pn,!0).format(we),K=S!=="Invalid Date";y(O.target.value),l&&l(K?S:O.target.value),c.onChange(K?S:O.target.value)},[y,l,c]);if(i)return Y.jsx(kt,{label:a,value:c.value?W(c.value,we,!0).format(pn):void 0,isEdited:g,hideLabel:t,size:p});const b={...R,fromDate:k,toDate:m,dropdownCaption:k&&m?!0:void 0};return Y.jsx(xa,{...b,children:Y.jsx(xa.Input,{...N,hideLabel:t,onChange:P,value:F,size:p,label:a,description:r,disabled:s,error:rn(f,e)})})},Ue=({name:e,label:a,validate:r=[],readOnly:n=!1,type:t,shouldValidateOnBlur:s=!1,onBlur:i,onChange:l,description:d,autoFocus:g,parse:u=N=>N,format:k=N=>N,normalizeOnBlur:m,isEdited:p,maxLength:f,autoComplete:c=!1,disabled:T,className:F,hideLabel:y,...R})=>{const{formState:{errors:N},trigger:P}=X(),{field:b}=hn({name:e,rules:{validate:A.useMemo(()=>Sn(r),[r])}});return n?Y.jsx(kt,{label:a,value:b.value,isEdited:p,hideLabel:y,size:R.size}):Y.jsx(rp,{size:"small",hideLabel:y,description:d,label:a,error:rn(N,e),...b,value:b.value?k(b.value):"",autoFocus:g,autoComplete:c?void 0:"off",maxLength:f,disabled:T,type:t,className:F,onChange:O=>{const S=O.currentTarget.value?u(O.currentTarget.value):null;return l&&l(S),b.onChange(S)},onBlur:async O=>{var S,K,j,L;if(b.onBlur(),s){const M=await P();i&&M&&i((S=O==null?void 0:O.target)==null?void 0:S.value)}else i&&i((K=O==null?void 0:O.target)==null?void 0:K.value);m&&b.onChange((j=O==null?void 0:O.target)!=null&&j.value?m(u((L=O==null?void 0:O.target)==null?void 0:L.value)):null)},...R})},ry="_hideRadioLabels_1u3xf_1",ny={hideRadioLabels:ry},nn=({label:e,description:a,name:r,validate:n=[],radios:t,onChange:s,disabled:i=!1,isReadOnly:l=!1,isHorizontal:d=!1,parse:g=c=>c,isTrueOrFalseSelection:u=!1,hideLegend:k=!1,hideRadioLabels:m=!1,isEdited:p=!1,size:f="small"})=>{const{formState:{errors:c}}=X(),{field:T}=hn({name:r,rules:{validate:A.useMemo(()=>Sn(n),[n])}}),F=u?R=>R==="true":g,y=Y.jsxs(ze,{justify:"center",gap:"2",children:[e,l&&p&&Y.jsx(qs,{})]});return Y.jsxs(Cm,{name:r,value:T.value!==void 0?T.value:null,onChange:R=>{s&&s(R),T.onChange(R)},size:f,legend:y,description:a,error:rn(c,r),className:m?ny.hideRadioLabels:"",hideLegend:k,children:[!d&&t.map(R=>Y.jsxs(A.Fragment,{children:[Y.jsx(Mi,{size:f,value:F(R.value),disabled:R.disabled||i||l,children:R.label}),T.value===F(R.value)&&R.element]},R.value)),d&&Y.jsxs(Y.Fragment,{children:[Y.jsx(ze,{gap:"4",children:t.map(R=>Y.jsx(Mi,{size:f,value:F(R.value),disabled:R.disabled||i||l,children:R.label},R.value))}),t.filter(R=>T.value===F(R.value)).map(R=>Y.jsx(A.Fragment,{children:R.element},R.value))]})]})},ar=({name:e,label:a,selectValues:r,validate:n=[],readOnly:t=!1,description:s,hideValueOnDisable:i=!1,onChange:l,disabled:d,className:g,hideLabel:u,isEdited:k,size:m})=>{const{formState:{errors:p}}=X(),{field:f}=hn({name:e,rules:{validate:A.useMemo(()=>Sn(n),[n])}});if(t){const F=r.map(R=>R.props).find(R=>R.value===f.value),y=F?F.children:void 0;return Y.jsx(kt,{value:y,label:a,hideLabel:u,isEdited:k,size:m})}const c=f.value||"",T=!r.map(F=>F.props.value).includes(c)&&c!=="";return T&&console.warn(`No corresponding option found for value '${c}'`),Y.jsxs(es,{size:"small",className:g,error:rn(p,e),label:a,description:s,value:i&&d||T?"":f.value,disabled:d,onChange:F=>{l&&l(F),f.onChange(F)},hideLabel:u,children:[Y.jsx("option",{style:{display:"none"}}),",",r]})},ay="_textAreaFieldWithBadges_bdz0b_1",ty="_etikettWrapper_bdz0b_4",al={textAreaFieldWithBadges:ay,etikettWrapper:ty},ed=({name:e,label:a,readOnly:r,maxLength:n,badges:t,validate:s=[],parse:i=k=>k,className:l,description:d,isEdited:g,...u})=>{const{formState:{errors:k}}=X(),{field:m}=hn({name:e,rules:{validate:A.useMemo(()=>Sn(s),[s])}});return r?Y.jsx(kt,{label:a,value:m.value,type:"textarea",isEdited:g,hideLabel:u.hideLabel}):Y.jsxs("div",{className:t?al.textAreaFieldWithBadges:null,children:[t&&Y.jsx("div",{className:al.etikettWrapper,children:t.map(({type:p,titleText:f})=>Y.jsx(Lm,{variant:p,size:"small",children:f},f))}),Y.jsx(Qm,{size:"small",label:a,description:d,className:l,autoComplete:"off",...m,onChange:p=>m.onChange(p.currentTarget.value!==""?i(p.currentTarget.value):null),value:m.value?m.value:"",error:rn(k,e),maxLength:n,...u})]})},lA=({formMethods:e,onSubmit:a,children:r,className:n,setDataOnUnmount:t})=>{const{handleSubmit:s,getValues:i}=e;return A.useEffect(()=>()=>{t&&t(i())},[]),Y.jsx(Np,{...e,children:Y.jsx("form",{className:n,onSubmit:a?s(l=>a(l)):void 0,children:r})})},sy="_addCircleIcon_bm9jq_1",iy="_imageText_bm9jq_2",ly="_addPeriode_bm9jq_7",Yt={addCircleIcon:sy,imageText:iy,addPeriode:ly};function tl(e,a){return()=>{e(a)}}function oy(e,a){return({key:r})=>{r==="Enter"&&e(a)}}const dy=(e,a)=>r=>{if(e>0)return Y.jsx(We,{className:r,icon:Y.jsx(Wd,{"aria-hidden":!0}),type:"button",onClick:()=>{a(e)}})},cr=({fields:e,readOnly:a=!0,titleText:r,bodyText:n,emptyPeriodTemplate:t={periodeFom:"",periodeTom:""},shouldShowAddButton:s=!0,createAddButtonInsteadOfImageLink:i=!1,children:l,remove:d,append:g})=>Y.jsxs(Ds,{legend:r,children:[e.map((u,k)=>l(u,k,dy(k,d))),s&&Y.jsxs(Y.Fragment,{children:[!i&&!a&&Y.jsxs("div",{onClick:tl(g,t),onKeyDown:oy(g,t),className:Yt.addPeriode,role:"button",tabIndex:0,children:[Y.jsx(wa,{className:Yt.addCircleIcon,title:n}),Y.jsx(Ea,{className:Yt.imageText,children:n})]}),i&&!a&&Y.jsx(We,{icon:Y.jsx(wa,{"aria-hidden":!0}),type:"button",onClick:tl(g,t),children:n}),Y.jsx("div",{style:{marginBottom:"16px"}})]})]}),Wa="andreYtelser",rd="andreYtelserPerioder",nd="andreYtelserTyper";function ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},uy=ls.exports,sl;function ky(){return sl||(sl=1,function(e,a){(function(r,n){e.exports=n()})(uy,function(){return function(r,n){n.prototype.isSameOrAfter=function(t,s){return this.isSame(t,s)||this.isAfter(t,s)}}})}(ls)),ls.exports}var gy=ky();const vy=ad(gy);var os={exports:{}},my=os.exports,il;function py(){return il||(il=1,function(e,a){(function(r,n){e.exports=n()})(my,function(){return function(r,n){n.prototype.isSameOrBefore=function(t,s){return this.isSame(t,s)||this.isBefore(t,s)}}})}(os)),os.exports}var yy=py();const Ty=ad(yy),Ey="Dato må være før eller lik {limit}",Ay="Dato må være etter eller lik {limit}",fy="Perioder kan ikke overlappe i tid",cy="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Ry="Dato må være lik {value}",Fy="Dato må skrives slik: dd.mm.åååå",Oy="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",by="Tallet kan ikke inneholde mer enn to desimaler",hy="Tallet kan ikke ha desimaler",Sy="Feltet kan kun inneholde tall",Ny="Ugyldig fødselsnummer",_y="Feltet må være et fødselsnummer (11 siffer)",Ky="Ugyldig organisasjonsnummer.",Py="Ugyldig organisasjonsnummer eller fødselsnummer",Dy="Startdato må være før eller lik sluttdato",My="Periode er utenfor opptjeningsperioden",qy="Ugyldig saksnummer eller fødselsnummer",Iy="Feltet inneholder ugyldige tegn: {text}",Vy="Feltet inneholder en ugyldig verdi: {value}",jy="Feltet kan ikke inneholde mellomrom",Ly="Feltet må fylles ut",wy="Du kan skrive maksimalt {length} tegn",Uy="Du må skrive minst {length} tegn",Gy="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",By="Feltet må være mindre eller lik {length}",xy="Feltet må være større eller lik {length}",Hy="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",Yy={DateNotBeforeOrEqual:Ey,DateNotAfterOrEqual:Ay,DateRangesOverlapping:fy,DateRangesOverlappingPeriodTypes:cy,DatesNotEqual:Ry,InvalidDate:Fy,InvalidDatesInPeriod:Oy,InvalidDecimal:by,InvalidInteger:hy,InvalidNumber:Sy,InvalidFodselsnr:Ny,InvalidFodselsnrFormat:_y,InvalidOrgnr:Ky,InvalidOrgnrOrFodselsnr:Py,InvalidPeriod:Dy,InvalidPeriodRange:My,InvalidSaksnrOrFodselsnrFormat:qy,InvalidText:Iy,InvalidValue:Vy,IllegalWhiteSpace:jy,IsRequired:Ly,MaxLength:wy,MinLength:Uy,MaxLengthOrFodselsnr:Gy,MaxValue:By,MinValue:xy,SammeFodselsnrSomSoker:Hy},{formatMessage:Ke}=Ae(Yy),Cy=e=>Ke({id:"DateNotBeforeOrEqual"},{limit:e}),$y=e=>Ke({id:"DateNotAfterOrEqual"},{limit:e}),Jy=()=>Ke({id:"DateRangesOverlapping"}),Wy=e=>Ke({id:"DatesNotEqual"},{value:e}),zy=()=>Ke({id:"InvalidDate"}),Xy=e=>Ke({id:"InvalidDecimal"},{text:e}),Zy=e=>Ke({id:"InvalidInteger"},{text:e}),Qy=e=>Ke({id:"InvalidNumber"},{text:e}),eT=()=>Ke({id:"InvalidFodselsnr"}),rT=()=>Ke({id:"InvalidFodselsnrFormat"}),nT=()=>Ke({id:"InvalidOrgnr"}),aT=()=>Ke({id:"InvalidOrgnrOrFodselsnr"}),tT=()=>Ke({id:"InvalidPeriod"}),sT=e=>Ke({id:"InvalidText"},{text:e}),iT=()=>Ke({id:"IllegalWhiteSpace"}),lT=()=>Ke({id:"IsRequired"}),oT=e=>Ke({id:"MaxLength"},{length:e}),dT=e=>Ke({id:"MaxLengthOrFodselsnr"},{length:e}),uT=e=>Ke({id:"MaxValue"},{length:e}),kT=e=>Ke({id:"MinValue"},{length:e}),gT=()=>Ke({id:"SammeFodselsnrSomSoker"}),vT=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,mT=/^\d+([,.]\d+)?$/,pT=/^\s*\d+\s*$/,yT=/^\d+(.\d{1,2})?$/,TT=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,ET=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,fr=e=>e==null||e.toString().trim().length===0,AT=()=>W().startOf("day"),fT=e=>{if(Array.isArray(e)){const a=(r,n,t)=>{const s=W(r,we).startOf("day"),i=n+1<t.length?W(t[n+1],we).startOf("day"):null;return i!==null?s.isBefore(i):!0};return[...e].sort((r,n)=>W(r[0],we).startOf("day").isAfter(W(n[0],we).startOf("day"))?1:-1).map(r=>r[0]===r[1]?[r[0]]:r).reduce((r,n)=>r.concat(n)).every(a)}return!0};W.extend(vy);W.extend(Ty);const cT=e=>a=>fr(a)||a.toString().trim().length<=e?null:dT(e),B=e=>fr(e)?lT():void 0,Gs=e=>a=>fr(a)||a.toString().trim().length<=e?null:oT(e),td=e=>a=>a>=e?null:kT(e),ba=e=>a=>a<=e?null:uT(e),RT=e=>e.toString().trim().length===9?null:nT(),FT=e=>e.toString().trim().length===9||e.toString().trim().length===11?null:aT(),OT=e=>/\s/g.test(e)?iT():null,sd=e=>fr(e)||mT.test(e.toString())?null:Qy(e.toString()),bT=e=>fr(e)||pT.test(e.toString())?null:Zy(e.toString()),hT=e=>fr(e)||yT.test(e.toString())?null:Xy(e.toString()),Rn=e=>sd(e)||bT(e),ds=e=>sd(e)||hT(e),ae=(e="")=>fr(e)||vT.test(e)?null:zy(),Xe=e=>a=>{const r=W(e).endOf("day");return fr(a)||W(a).isSameOrBefore(r)?null:Cy(r.format(pn))},Ge=e=>a=>{const r=W(e).startOf("day");return fr(a)||W(a).isSameOrAfter(r)?null:$y(r.format(pn))},Hn=e=>fT(e)?null:Jy(),Gn=e=>Xe(AT())(e),ST=e=>zd.test(e)?null:rT(),id=e=>Xd(e)?null:eT(),NT=e=>a=>a===e?gT():null,Bs=e=>{if(!TT.test(e)){const a=e.replace(ET,"");return sT(a.replace(/[\t]/g,"Tabulatortegn"))}return null},_T=(e,a)=>e!==a?Wy(W(a).format(pn)):null,KT=(e,a)=>fr(e)&&fr(a)||W(e).isSameOrBefore(W(a).startOf("day"))?null:tT(),PT=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const a=document.createAttribute("tabindex");a.value="-1";const r=e[0];r.setAttributeNode(a),document.activeElement.blur(),r.focus()}},300)},ld=({readOnly:e,name:a})=>{const r=fe(),{getValues:n,control:t,trigger:s,formState:{isSubmitted:i}}=X(),{fields:l,remove:d,append:g}=sr({control:t,name:a});return A.useEffect(()=>{l.length===0&&g({periodeFom:"",periodeTom:""})},[]),o.jsx(cr,{fields:l,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:g,remove:d,children:(u,k)=>{const m=`${a}.${k}`;return o.jsxs(ze,{gap:"2",children:[o.jsx(re,{name:`${m}.periodeFom`,label:k===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[B,ae,()=>{const{periodeFom:p,periodeTom:f}=n(`${a}.${k}`);return f&&p?Xe(f)(p):null}],onChange:()=>i?s():void 0}),o.jsx(re,{name:`${a}.${k}.periodeTom`,label:k===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[B,ae,()=>{const{periodeFom:p,periodeTom:f}=n(`${a}.${k}`);return p&&f?Ge(p)(f):null}],onChange:()=>i?s():void 0}),!e&&k>0&&o.jsx("div",{children:o.jsx(We,{size:"small",type:"button",variant:"tertiary-neutral",icon:o.jsx(it,{}),onClick:()=>d(k)})})]},u.id)}})};ld.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};const DT=(e,a)=>a?e.filter(r=>r.kode===ia.MILITÆR_ELLER_SIVILTJENESTE):e.filter(r=>r.kode!==ia.UTENLANDSK_ARBEIDSFORHOLD&&r.kode!==ia.FRILANSER&&r.kode!==ia.LONN_UNDER_UTDANNING),Yn=({readOnly:e,kunMiliterEllerSiviltjeneste:a=!1,alleKodeverk:r})=>{const n=r.ArbeidType,t=A.useMemo(()=>DT(n,a),[a]);return o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.AndreYtelser.Title"})}),o.jsx(Us,{isReadOnly:e,name:`${Wa}.${nd}`,checkboxes:t.map(s=>({label:s.navn,value:s.kode,element:o.jsx(er,{children:o.jsx(ld,{name:`${Wa}.${rd}.${s.kode}`,readOnly:e})})}))})]})})};Yn.initialValues=()=>({[Wa]:{[nd]:[],[rd]:{}}});Yn.transformValues=({andreYtelser:{andreYtelserTyper:e,andreYtelserPerioder:a}})=>({[Wa]:e.flatMap(r=>a[r].map(n=>({ytelseType:r,...n})))});Yn.__docgenInfo={description:`AndreYtelserPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]},alias:"AndreYtelserFormValue"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
}`,signature:{properties:[{key:"andreYtelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}[]`,required:!0}}]}}}}],displayName:"AndreYtelserPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const je={"Registrering.Yes":"Ja","Registrering.No":"Nei","Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.TerminOgFodsel.Tittel":"Opplysninger om termin og fødsel","Registrering.TerminOgFodsel.ErBarnetFodt":"Er barnet født?","Registrering.TerminOgFodsel.ErFodt":"Ja","Registrering.TerminOgFodsel.ErIkkeFodt":"Nei","Registrering.TerminOgFodsel.Termindato":"Termindato","Registrering.TerminOgFodsel.AntallBarn":"Antall barn","Registrering.TerminOgFodsel.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.TerminOgFodsel.Fodselsdato":"Fødselsdato","Registrering.TerminOgFodsel.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Label":"Begrunnelse","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og fortsett til avslag","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til periode","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.NyIArbeidslivet":"Ny i arbeidslivet","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Søkers virksomheter","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Det må registreres minst 1 virksomhet","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.TittelSN":"Tilretteleggingsbehov for selvstendig næringsdrivende","BehovForTilretteleggingPanel.TittelFrilans":"Tilretteleggingsbehov for frilanser","BehovForTilretteleggingPanel.TittelArbeidstaker":"Tilretteleggingsbehov for arbeidstaker","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.Title":"Arbeidsgivere med tilretteleggingsbehov","TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength":"Det må registreres minst 1 arbeidsforhold","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","RegistrerArbeidsgiverRad.OrgNr":"Arbeidsgivers orgnr/fnr","RegistrerArbeidsgiverRad.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.ForTidligTermin":"Termin kan ikke være mer enn 3 uker før fødsel","ValidationMessage.ForSenTermin":"Termin kan ikke være mer enn 5 måneder etter fødsel"},MT=Ae(je),xs=({readOnly:e,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})=>o.jsx(tr,{value:MT,children:o.jsx(Yn,{readOnly:e,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})});xs.initialValues=Yn.initialValues;xs.transformValues=Yn.transformValues;xs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  andreYtelser: { andreYtelserTyper, andreYtelserPerioder },
}: AndreYtelserFormValue`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
}`,signature:{properties:[{key:"andreYtelser",value:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_TYPER_NAME]: string[];
  [ANDRE_YTELSER_PERIODER_NAME]: {
    [key: string]: Periode[];
  };
}`,signature:{properties:[{key:"andreYtelserTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreYtelserPerioder",value:{name:"signature",type:"object",raw:`{
  [key: string]: Periode[];
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}}]}}],raw:"Periode[]",required:!0}}]},required:!0}}]},required:!0}}]},alias:"AndreYtelserFormValue"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
}`,signature:{properties:[{key:"andreYtelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:`{
  periodeFom: string;
  periodeTom: string;
  ytelseType: string;
}[]`,required:!0}}]}}}}],displayName:"AndreYtelserPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const $e="annenForelder",Na="kanIkkeOppgiBegrunnelse",qT="_inputBredde_138ho_1",Ct={inputBredde:qT},IT=e=>e.filter(({kode:a})=>a!==tt.NORGE).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),gt=({readOnly:e=!0,alleKodeverk:a,fagsakPersonnummer:r})=>{const{formatMessage:n}=fe(),{watch:t,trigger:s,formState:{isSubmitted:i}}=X(),l=t(`${$e}.kanIkkeOppgiAnnenForelder`),d=t(`${$e}.${Na}`),g=a.Landkoder,u=A.useMemo(()=>g.slice().sort((k,m)=>k.navn.localeCompare(m.navn)),[g]);return o.jsxs(o.Fragment,{children:[o.jsx(Ue,{name:`${$e}.foedselsnummer`,label:n({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:k=>k&&k.toString().replace(/\s/g,""),readOnly:e,className:Ct.inputBredde,validate:l?[]:[B,ST,id,NT(r)],disabled:l}),o.jsx(kr,{name:`${$e}.kanIkkeOppgiAnnenForelder`,label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>i?s():void 0}),l===!0&&o.jsx(er,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),o.jsx(nn,{name:`${$e}.${Na}.arsak`,hideLegend:!0,validate:[B],isReadOnly:e,radios:[{label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:ka.UKJENT_FORELDER},{label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:ka.IKKE_NORSK_FNR}]}),(d==null?void 0:d.arsak)===ka.IKKE_NORSK_FNR&&o.jsxs(o.Fragment,{children:[o.jsx(ar,{name:`${$e}.${Na}.land`,label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:IT(u),validate:[B],className:Ct.inputBredde,readOnly:e}),o.jsx(Ue,{name:`${$e}.${Na}.utenlandskFoedselsnummer`,label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[B],className:Ct.inputBredde,readOnly:e})]})]})})]})};gt.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:a,kanIkkeOppgiBegrunnelse:{arsak:r,land:n,utenlandskFoedselsnummer:t}={}})=>a?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:r===ka.IKKE_NORSK_FNR?{arsak:r,land:n,utenlandskFoedselsnummer:t}:{arsak:r}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};gt.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  foedselsnummer,
  kanIkkeOppgiAnnenForelder,
  kanIkkeOppgiBegrunnelse: { arsak, land, utenlandskFoedselsnummer } = {},
}: AnnenForelderSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]},alias:"AnnenForelderSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}}}}],displayName:"OppgiAnnenForelderPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ll=Ae(je),Ve=({name:e,label:a,isHorizontal:r=!0,readOnly:n,trueLabel:t,trueContent:s,falseLabel:i,falseContent:l,isRequired:d=!0})=>o.jsx(nn,{name:e,label:a,validate:d?[B]:[],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:r,radios:[{label:t??ll.formatMessage({id:"Registrering.Yes"}),value:"true",element:s},{label:i??ll.formatMessage({id:"Registrering.No"}),value:"false",element:l}]});Ve.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const vt=({readOnly:e,sokerErMor:a})=>{const r=fe(),{watch:n}=X(),t=n(`${$e}.sokerHarAleneomsorg`),s=n(`${$e}.denAndreForelderenHarRettPaForeldrepenger`),i=n(`${$e}.annenForelderRettEØS`);return o.jsxs(Q,{gap:"4",children:[o.jsx(Ve,{name:`${$e}.sokerHarAleneomsorg`,label:r.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),t===!1&&o.jsx(Ve,{name:`${$e}.denAndreForelderenHarRettPaForeldrepenger`,label:r.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),t===!1&&s===!1&&o.jsx(Ve,{name:`${$e}.annenForelderRettEØS`,label:r.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!a&&t===!1&&s===!1&&i===!1&&o.jsx(Ve,{name:`${$e}.morMottarUføretrygd`,label:r.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};vt.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:a,annenForelderRettEØS:r,morMottarUføretrygd:n})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?a:void 0,annenForelderRettEØS:a===!1?r:void 0,morMottarUføretrygd:r===!1?n:void 0});vt.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  sokerHarAleneomsorg,
  denAndreForelderenHarRettPaForeldrepenger,
  annenForelderRettEØS,
  morMottarUføretrygd,
}: PermisjonRettigheterFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]},alias:"PermisjonRettigheterFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const VT=Ae(je),Hs=({readOnly:e,alleKodeverk:a,fagsakPersonnummer:r,sokerErMor:n})=>o.jsx(tr,{value:VT,children:o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.TheOtherParent.Title"})}),o.jsx(gt,{readOnly:e,fagsakPersonnummer:r,alleKodeverk:a}),o.jsx(vt,{readOnly:e,sokerErMor:n})]})})});Hs.initialValues=()=>({[$e]:{}});Hs.transformValues=({annenForelder:e})=>({[$e]:{...vt.transformValues(e),...gt.transformValues(e)}});Hs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  annenForelder,
}: AnnenForelderFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"AnnenForelderFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [ANNEN_FORELDER_NAME_PREFIX]: AnnenForelderSubFormValues & PermisjonRettigheterFormValues;
}`,signature:{properties:[{key:"annenForelder",value:{name:"intersection",raw:"AnnenForelderSubFormValues & PermisjonRettigheterFormValues",elements:[{name:"signature",type:"object",raw:`{
  foedselsnummer?: string;
  kanIkkeOppgiAnnenForelder?: boolean;
  kanIkkeOppgiBegrunnelse?: {
    arsak?: string;
    land?: string;
    utenlandskFoedselsnummer?: string;
  };
}`,signature:{properties:[{key:"foedselsnummer",value:{name:"string",required:!1}},{key:"kanIkkeOppgiAnnenForelder",value:{name:"boolean",required:!1}},{key:"kanIkkeOppgiBegrunnelse",value:{name:"signature",type:"object",raw:`{
  arsak?: string;
  land?: string;
  utenlandskFoedselsnummer?: string;
}`,signature:{properties:[{key:"arsak",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}},{key:"utenlandskFoedselsnummer",value:{name:"string",required:!1}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  sokerHarAleneomsorg?: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}}],displayName:"AnnenForelderPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const pr="frilans",da=(e,a)=>e(a),jT=(e=[])=>e.map(a=>a.periodeFom).filter(a=>a&&a!=="").sort((a,r)=>W(a,we).diff(W(r,we))),LT=Gs(50),wT=(e,a,r,n)=>()=>{const t=da(e,`${a}.fomDato`);return r.length>0&&r[0]&&t&&!W(r[0]).isSameOrBefore(W(t))?n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},od=({readOnly:e})=>{const a=fe(),{control:r,getValues:n,watch:t,trigger:s,formState:{isSubmitted:i}}=X(),{fields:l,remove:d,append:g}=sr({control:r,name:`${pr}.oppdragPerioder`}),u=t(`${pr}.perioder`),k=A.useMemo(()=>jT(u),[u]);return o.jsx(cr,{bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:l,readOnly:e,append:g,remove:d,children:(m,p,f)=>{const c=`${pr}.oppdragPerioder.${p}`;return o.jsxs(ze,{gap:"4",paddingBlock:"2",align:"end",children:[o.jsx(re,{name:`${c}.fomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[ae,wT(n,c,k,a),()=>{const T=da(n,`${c}.fomDato`),F=da(n,`${c}.tomDato`);return F&&T?Xe(F)(T):null}],onChange:()=>i?s():void 0}),o.jsx(re,{name:`${c}.tomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[ae,()=>{const T=da(n,`${c}.fomDato`),F=da(n,`${c}.tomDato`);return F&&T?Ge(T)(F):null}],onChange:()=>i?s():void 0}),o.jsx(Ue,{name:`${c}.oppdragsgiver`,validate:[LT],label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})}),f&&o.jsx("div",{children:f()})]},m.id)}})};od.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Cn=({readOnly:e})=>{const{watch:a}=X(),r=a(`${pr}.harHattOppdragForFamilie`);return o.jsxs(o.Fragment,{children:[o.jsx(Ve,{name:`${pr}.harHattOppdragForFamilie`,label:o.jsx(w,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),readOnly:e}),r&&o.jsxs(er,{children:[o.jsx(gr,{size:"small",children:o.jsx(w,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),o.jsx(od,{readOnly:e})]})]})};Cn.initialValues=()=>({oppdragPerioder:[{fomDato:"",tomDato:"",oppdragsgiver:""}]});Cn.transformValues=({harHattOppdragForFamilie:e,oppdragPerioder:a})=>({harHattOppdragForFamilie:e,oppdragPerioder:e?a:void 0});Cn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  harHattOppdragForFamilie,
  oppdragPerioder,
}: FrilansSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},alias:"FrilansSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const _a=(e,a)=>e(a),mt=({readOnly:e})=>{const a=fe(),{control:r,getValues:n,formState:{isSubmitted:t},trigger:s}=X(),{fields:i,remove:l,append:d}=sr({control:r,name:`${pr}.perioder`});return o.jsx(cr,{fields:i,bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,remove:l,append:d,children:(g,u,k)=>{const m=`${pr}.perioder.${u}`;return o.jsxs(ze,{gap:"4",paddingBlock:"2",children:[o.jsx(re,{name:`${m}.periodeFom`,label:u===0?a.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[B,ae,()=>{const p=_a(n,`${m}.periodeFom`),f=_a(n,`${m}.periodeTom`);return f&&p?Xe(f)(p):null}],onChange:()=>t?s():void 0}),o.jsx(re,{name:`${m}.periodeTom`,label:u===0?a.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[B,ae,()=>{const p=_a(n,`${m}.periodeFom`),f=_a(n,`${m}.periodeTom`);return f&&p?Ge(p)(f):null}],onChange:()=>t?s():void 0}),k&&o.jsx("div",{children:k()})]},g.id)}})};mt.initialValues=()=>({perioder:[{periodeFom:"",periodeTom:""}]});mt.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const $n=({readOnly:e})=>o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.Frilans.Title"})}),o.jsx(Ve,{name:`${pr}.harSokerPeriodeMedFrilans`,label:o.jsx(w,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),readOnly:e,trueContent:o.jsx(er,{marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Ea,{children:o.jsx(w,{id:"Registrering.Frilans.OppgiPeriode"})}),o.jsx(mt,{readOnly:e}),o.jsx(Ve,{name:`${pr}.erNyoppstartetFrilanser`,label:o.jsx(w,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),readOnly:e}),o.jsx(Ve,{name:`${pr}.harInntektFraFosterhjem`,label:o.jsx(w,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),readOnly:e}),o.jsx(Cn,{readOnly:e})]})})})]})});$n.initialValues=()=>({[pr]:{...mt.initialValues(),...Cn.initialValues()}});$n.transformValues=({frilans:e})=>({[pr]:e.harSokerPeriodeMedFrilans===!1?{harSokerPeriodeMedFrilans:!1}:{harSokerPeriodeMedFrilans:!0,perioder:e.perioder,erNyoppstartetFrilanser:e.erNyoppstartetFrilanser,harInntektFraFosterhjem:e.harInntektFraFosterhjem,...Cn.transformValues(e)}});$n.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ frilans }: FrilansFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]},alias:"FrilansFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const UT=Ae(je),Ys=({readOnly:e})=>o.jsx(tr,{value:UT,children:o.jsx($n,{readOnly:e})});Ys.initialValues=$n.initialValues;Ys.transformValues=$n.transformValues;Ys.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ frilans }: FrilansFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]},alias:"FrilansFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Dn="arbeidsforhold",an=({children:e,remove:a,readOnly:r,index:n})=>o.jsxs(o.Fragment,{children:[n>0&&o.jsx(bp,{spaceUnder:!0,spaceAbove:!0}),o.jsxs(ze,{wrap:!1,justify:"space-between",children:[o.jsx(ze,{wrap:!0,gap:"4",children:e}),!r&&n>0&&o.jsx(We,{type:"button",variant:"tertiary-neutral",icon:o.jsx(it,{}),onClick:()=>a(n)})]})]});an.__docgenInfo={description:"",methods:[],displayName:"FieldArrayRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const GT=Gs(50),BT=e=>e.filter(({kode:a})=>a!==tt.NORGE).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),dd=({alleKodeverk:e,readOnly:a})=>{const r=fe(),{control:n}=X(),{fields:t,remove:s,append:i}=sr({control:n,name:Dn}),l=e.Landkoder.slice().sort((d,g)=>d.navn.localeCompare(g.navn));return o.jsx(cr,{fields:t,bodyText:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:a,emptyPeriodTemplate:{arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},remove:s,append:i,children:(d,g)=>o.jsxs(an,{remove:s,index:g,readOnly:a,children:[o.jsx(Ue,{readOnly:a,name:`${Dn}.${g}.arbeidsgiver`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}),validate:[GT],maxLength:99}),o.jsx(re,{isReadOnly:a,name:`${Dn}.${g}.periodeFom`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}),validate:[ae]}),o.jsx(re,{isReadOnly:a,name:`${Dn}.${g}.periodeTom`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}),validate:[ae]}),o.jsx(ar,{readOnly:a,name:`${Dn}.${g}.land`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}),selectValues:BT(l),size:"small"})]},d.id)})};dd.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.`,methods:[],displayName:"RenderInntektsgivendeArbeidFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Jn=({readOnly:e,alleKodeverk:a})=>o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title"})}),o.jsx(Ea,{children:o.jsx(w,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold"})}),o.jsx(dd,{readOnly:e,alleKodeverk:a})]})});Jn.initialValues=()=>({[Dn]:[]});const Ka=e=>e===void 0||e==="";Jn.transformValues=({arbeidsforhold:e})=>({arbeidsforhold:e==null?void 0:e.filter(a=>!(Ka(a.arbeidsgiver)&&Ka(a.land)&&Ka(a.periodeFom)&&Ka(a.periodeTom)))});Jn.__docgenInfo={description:`InntektsgivendeArbeidPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]},alias:"InntektsgivendeArbeidFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}}],displayName:"InntektsgivendeArbeidPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const xT=Ae(je),Cs=({readOnly:e,alleKodeverk:a})=>o.jsx(tr,{value:xT,children:o.jsx(Jn,{readOnly:e,alleKodeverk:a})});Cs.initialValues=Jn.initialValues;Cs.transformValues=Jn.transformValues;Cs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  arbeidsforhold,
}: InntektsgivendeArbeidFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]},alias:"InntektsgivendeArbeidFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
}`,signature:{properties:[{key:"arbeidsgiver",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:"InnerFormValue[]",required:!1}}]}}}}],displayName:"InntektsgivendeArbeidPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const HT=Gs(1500),Wn=({submitting:e,onSubmitUfullstendigsoknad:a,readOnly:r=!0})=>{const n=fe(),{watch:t}=X(),s=t("ufullstendigSoeknad")||!1;return o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:n.formatMessage({id:"Registrering.SaveApplication.Title"})}),o.jsx(ed,{name:"kommentarEndring",label:n.formatMessage({id:"Registrering.SaveApplication.Label"}),description:n.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[HT,Bs],readOnly:r}),o.jsxs("div",{children:[o.jsx(kr,{name:"registrerVerge",label:n.formatMessage({id:"Registrering.Verge"}),readOnly:r}),o.jsx(kr,{name:"ufullstendigSoeknad",label:n.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),o.jsxs("div",{children:[!s&&o.jsx(We,{id:"saveButton",size:"small",variant:"primary",loading:e,disabled:r||e,onClick:PT,children:o.jsx(w,{id:"Registrering.SaveApplication.SaveButton"})}),s&&o.jsx(We,{id:"endButton",onClick:a,size:"small",variant:"primary",loading:e,disabled:r||e,type:"button",children:o.jsx(w,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};Wn.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});Wn.transformValues=({kommentarEndring:e,registrerVerge:a,ufullstendigSoeknad:r})=>({kommentarEndring:e,registrerVerge:a,ufullstendigSoeknad:r});Wn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  kommentarEndring,
  registrerVerge,
  ufullstendigSoeknad,
}: LagreSoknadFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]},alias:"LagreSoknadFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const YT=Ae(je),$s=({readOnly:e,onSubmitUfullstendigsoknad:a,submitting:r})=>o.jsx(tr,{value:YT,children:o.jsx(Wn,{readOnly:e,onSubmitUfullstendigsoknad:a,submitting:r})});$s.initialValues=Wn.initialValues;$s.transformValues=Wn.transformValues;$s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  kommentarEndring,
  registrerVerge,
  ufullstendigSoeknad,
}: LagreSoknadFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]},alias:"LagreSoknadFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  kommentarEndring?: string;
  registrerVerge?: boolean;
  ufullstendigSoeknad?: boolean;
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const CT=Ae(je),ol=()=>W().subtract(1,"year").subtract(1,"day"),$T=()=>W(),Js=({readOnly:e})=>o.jsx(tr,{value:CT,children:o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),o.jsx(re,{name:"mottattDato",label:o.jsx(w,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),fromDate:ol().toDate(),toDate:$T().toDate(),validate:[B,ae,Gn,Ge(ol())],isReadOnly:e})]})})});Js.initialValues=()=>({mottattDato:void 0});Js.transformValues=({mottattDato:e})=>({mottattDato:e});Js.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ mottattDato }: MottattDatoFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]},alias:"MottattDatoFormValues"}}],returns:null}],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const jr="omsorg",JT="_barnInput_1jjt5_1",WT={barnInput:JT},zT=10,XT=e=>e?td(1)(e):void 0,ZT=e=>e?ba(10)(e):void 0,dl=(e,a)=>r=>{if(e===0&&a&&r)return _T(r,Array.isArray(a)?a[0]:a)},zn=({readOnly:e=!0,familieHendelseType:a,isForeldrepengerFagsak:r,fodselsdatoer:n})=>{const{formatMessage:t}=fe(),{control:s,watch:i}=X(),{fields:l,remove:d,append:g}=sr({control:s,name:`${jr}.foedselsDato`}),u=i(`${jr}.antallBarn`)??0;return A.useEffect(()=>{if(l.length>Math.max(u,0))for(let k=l.length;k>u;k-=1)d(k-1);else if(l.length<Math.min(u,zT))for(let k=l.length;k<u;k+=1)g({id:k,dato:void 0})},[u]),o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:a===br.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r&&a===br.ADOPSJON&&o.jsx(nn,{name:`${jr}.erEktefellesBarn`,label:o.jsx(w,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[B],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:t({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:t({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),o.jsx(re,{name:`${jr}.omsorgsovertakelsesdato`,label:t({id:a===br.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:a===br.ADOPSJON?[B,ae]:[ae]}),o.jsxs(ze,{gap:"4",children:[a===br.ADOPSJON&&o.jsx(re,{name:`${jr}.ankomstdato`,label:t({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[ae]}),o.jsx(Ue,{name:`${jr}.antallBarn`,label:t({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:WT.barnInput,parse:k=>{const m=parseInt(k.toString(),10);return Number.isNaN(m)?k:m},validate:[...a===br.ADOPSJON?[B]:[],Rn,XT,ZT]})]}),l.map((k,m)=>o.jsx(v.Fragment,{children:o.jsx(re,{name:`${jr}.foedselsDato.${m}.dato`,isReadOnly:e,validate:a===br.ADOPSJON?[B,ae,Gn,dl(m,n)]:[ae,Gn,dl(m,n)],label:t({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:m+1})})},k.id))]})})};zn.initialValues=()=>({[jr]:{}});zn.transformValues=({omsorg:e})=>({[jr]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(a=>a.dato):void 0}});zn.__docgenInfo={description:`OmsorgOgAdopsjonPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad ved adopsjon og omsorgsovertakelse.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ omsorg }: OmsorgOgAdopsjonFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]},alias:"OmsorgOgAdopsjonFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: (string | undefined)[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const QT=Ae(je),Ws=({readOnly:e,familieHendelseType:a,isForeldrepengerFagsak:r=!1,fodselsdato:n})=>o.jsx(tr,{value:QT,children:o.jsx(zn,{readOnly:e,familieHendelseType:a,isForeldrepengerFagsak:r,fodselsdatoer:n})});Ws.initialValues=zn.initialValues;Ws.transformValues=zn.transformValues;Ws.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ omsorg }: OmsorgOgAdopsjonFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: { id: number; dato?: string }[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: { id: number; dato?: string }[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: number; dato?: string }",signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!1}}]}}],raw:"{ id: number; dato?: string }[]",required:!1}}]},required:!0}}]},alias:"OmsorgOgAdopsjonFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [OMSORG_NAME_PREFIX]: {
    omsorgsovertakelsesdato?: string;
    antallBarn?: number;
    foedselsDato?: (string | undefined)[];
  };
}`,signature:{properties:[{key:"omsorg",value:{name:"signature",type:"object",raw:`{
  omsorgsovertakelsesdato?: string;
  antallBarn?: number;
  foedselsDato?: (string | undefined)[];
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const eE={land:void 0,periodeFom:void 0,periodeTom:void 0},za=(e,a)=>e(a),ul=(e,a)=>()=>{const n=e(a).filter(({periodeFom:t,periodeTom:s})=>t&&t!==""&&s&&s!=="").map(({periodeFom:t,periodeTom:s})=>[t,s]);return n.length>0?Hn(n):void 0},rE=e=>e.filter(({kode:a})=>a!==tt.NORGE).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),kl=(e,a,r,n)=>()=>{const t=za(e,`${a}.${r}.periodeFom`),s=za(e,`${a}.${r}.periodeTom`);return!s||!t?null:n?Xe(s)(t):Ge(t)(s)},us=({erTidligereOpphold:e=!1,mottattDato:a,readOnly:r,countryCodes:n})=>{const t=fe(),s=e?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:i,getValues:l,trigger:d,formState:{isSubmitted:g}}=X(),{fields:u,remove:k,append:m}=sr({control:i,name:s}),p=A.useMemo(()=>rE(n),[n]);return o.jsx(cr,{fields:u,titleText:t.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:t.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:eE,readOnly:r,remove:k,append:m,children:(f,c,T)=>o.jsx(v.Fragment,{children:o.jsxs(ze,{gap:"4",paddingBlock:"2",children:[o.jsx(ar,{name:`${s}.${c}.land`,label:t.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:p,readOnly:r,validate:[B]}),o.jsx(re,{name:`${s}.${c}.periodeFom`,label:t.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:r,validate:[B,ae,kl(l,s,c,!0),()=>{const F=za(l,`${s}.${c}.periodeFom`);return e?Xe(W().format(we))(F):a?Ge(a)(F):void 0},ul(l,s)],onChange:()=>g?d():void 0}),o.jsx(re,{name:`${s}.${c}.periodeTom`,label:t.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:r,validate:[B,ae,kl(l,s,c,!1),()=>{const F=za(l,`${s}.${c}.periodeTom`);return e?Xe(W().format(we))(F):a?Ge(a)(F):void 0},ul(l,s)],onChange:()=>g?d():void 0}),T&&o.jsx("div",{children:T()})]},f.id)},f.id)})};us.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},mottattDato:{required:!1,tsType:{name:"string"},description:""},countryCodes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Landkoder'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Xn=({readOnly:e=!0,alleKodeverk:a,mottattDato:r,erAdopsjon:n})=>{const{formatMessage:t}=fe(),s=a.Landkoder.slice().sort((g,u)=>g.navn.localeCompare(u.navn)),{watch:i}=X(),l=!i("oppholdSisteTolvINorge",!0),d=!i("oppholdNesteTolvINorge",!0);return o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.Opphold"})}),o.jsx(Ve,{name:"oppholdINorge",label:t({id:n?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),readOnly:e}),o.jsxs(Q,{gap:"2",children:[o.jsx(Ve,{name:"oppholdSisteTolvINorge",label:o.jsx(w,{id:"Registrering.OppholdSisteTolv"}),readOnly:e}),l&&o.jsx(er,{alignOffset:58,children:o.jsx(us,{erTidligereOpphold:!0,mottattDato:r,countryCodes:s,readOnly:e})})]}),o.jsxs(Q,{gap:"2",children:[o.jsx(Ve,{name:"oppholdNesteTolvINorge",label:o.jsx(w,{id:"Registrering.OppholdNesteTolv"}),readOnly:e}),d&&o.jsx(er,{alignOffset:58,children:o.jsx(us,{mottattDato:r,countryCodes:s,readOnly:e})})]})]})})};Xn.initialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Xn.transformValues=({oppholdINorge:e,oppholdSisteTolvINorge:a,oppholdNesteTolvINorge:r,tidligereOppholdUtenlands:n,fremtidigeOppholdUtenlands:t})=>({oppholdINorge:e,harTidligereOppholdUtenlands:!a,harFremtidigeOppholdUtenlands:!r,tidligereOppholdUtenlands:a?void 0:n,fremtidigeOppholdUtenlands:r?void 0:t});Xn.__docgenInfo={description:`OppholdINorgePanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  oppholdINorge,
  oppholdSisteTolvINorge,
  oppholdNesteTolvINorge,
  tidligereOppholdUtenlands,
  fremtidigeOppholdUtenlands,
}: OppholdINorgeFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"OppholdINorgeFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const nE=Ae(je),zs=({readOnly:e,erAdopsjon:a,alleKodeverk:r,mottattDato:n})=>o.jsx(tr,{value:nE,children:o.jsx(Xn,{readOnly:e,erAdopsjon:a,alleKodeverk:r,mottattDato:n})});zs.initialValues=Xn.initialValues;zs.transformValues=Xn.transformValues;zs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  oppholdINorge,
  oppholdSisteTolvINorge,
  oppholdNesteTolvINorge,
  tidligereOppholdUtenlands,
  fremtidigeOppholdUtenlands,
}: OppholdINorgeFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  oppholdSisteTolvINorge?: boolean;
  oppholdNesteTolvINorge?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"oppholdSisteTolvINorge",value:{name:"boolean",required:!1}},{key:"oppholdNesteTolvINorge",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"OppholdINorgeFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"land",value:{name:"string",required:!1}},{key:"periodeFom",value:{name:"string",required:!1}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};class oA{constructor(a,r,n){U(this,"fagsakYtelseType");U(this,"familieHendelseType");U(this,"foreldreType");this.fagsakYtelseType=Kt(a),a===Zd.SVANGERSKAPSPENGER?this.familieHendelseType=br.FODSEL:this.familieHendelseType=Kt(r),this.foreldreType=Kt(n)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const ua=Ae(je),qn={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},gl=[{label:ua.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:qn.ANNEN_FORELDER_DOED},{label:ua.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:qn.OVERTA_FORELDREANSVARET_ALENE},{label:ua.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:qn.MANN_ADOPTERER_ALENE},{label:ua.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:qn.IKKE_RELEVANT}],Xs=({readOnly:e,soknadData:a})=>{const n=a.getFamilieHendelseType()!==br.FODSEL&&a.getForeldreType()===at.FAR?gl:gl.filter(t=>t.value!==qn.MANN_ADOPTERER_ALENE);return o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:ua.formatMessage({id:"Registrering.Rettigheter.Title"})}),o.jsx(nn,{name:"rettigheter",isReadOnly:e,radios:n})]})})};Xs.initialValues=()=>({rettigheter:void 0});Xs.transformValues=({rettigheter:e})=>e===qn.IKKE_RELEVANT?{}:{rettigheter:e};Xs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const Pa=Ae(je),$t={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},Zs=({readOnly:e})=>o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:Pa.formatMessage({id:"Registrering.Sprak"})}),o.jsx(nn,{name:"språkkode",validate:[B],isReadOnly:e,radios:[{label:Pa.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:$t.BOKMAL},{label:Pa.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:$t.NYNORSK},{label:Pa.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:$t.ENGELSK}]})]})});Zs.initialValues=()=>({språkkode:void 0});Zs.transformValues=({språkkode:e})=>({språkkode:e});Zs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ språkkode }: SprakFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]},alias:"SprakFormValues"}}],returns:null}],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const En="egenVirksomhet",Ie=`${En}.virksomheter`,aE={},tE=e=>e.map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),pt=({index:e,readOnly:a,alleKodeverk:r})=>{const n=fe(),t=r.Landkoder.slice().sort((i,l)=>i.navn.localeCompare(l.navn)),{getValues:s}=X();return o.jsx(Ve,{name:`${Ie}.${e}.virksomhetRegistrertINorge`,label:o.jsx(w,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),readOnly:a,trueContent:o.jsx(er,{marginTop:8,children:o.jsx(Ue,{name:`${Ie}.${e}.organisasjonsnummer`,readOnly:a,validate:[B,Rn,RT],label:o.jsx(w,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})}),falseContent:o.jsx(er,{alignOffset:58,marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(ar,{name:`${Ie}.${e}.landJobberFra`,className:aE.landBredde,selectValues:tE(t),validate:[B],label:n.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),o.jsxs(ze,{gap:"4",children:[o.jsx(re,{isReadOnly:a,validate:[B,ae,Gn],name:`${Ie}.${e}.fom`,label:n.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})}),o.jsx(re,{isReadOnly:a,validate:[ae,i=>{const l=s(`${Ie}.${e}.fom`);return l?KT(l,i):null}],name:`${Ie}.${e}.tom`,label:n.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})]})]})})})};pt.transformValues=({virksomhetRegistrertINorge:e,organisasjonsnummer:a,landJobberFra:r,fom:n,tom:t})=>({virksomhetRegistrertINorge:e,organisasjonsnummer:e?a:void 0,...e===!1?{landJobberFra:r,fom:n,tom:t}:{landJobberFra:"NOR"}});pt.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  virksomhetRegistrertINorge,
  organisasjonsnummer,
  landJobberFra,
  fom,
  tom,
}: RegistrerVirksomhetFormValues`,optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetIdentifikasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const yt=({index:e,readOnly:a})=>o.jsx(Ve,{name:`${Ie}.${e}.harRegnskapsforer`,label:o.jsx(w,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),readOnly:a,trueContent:o.jsx(er,{marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Ue,{name:`${Ie}.${e}.navnRegnskapsforer`,readOnly:a,validate:[B,Bs],label:o.jsx(w,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),o.jsx(Ue,{name:`${Ie}.${e}.tlfRegnskapsforer`,readOnly:a,validate:[B,Rn],label:o.jsx(w,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]})})});yt.transformValues=({harRegnskapsforer:e,navnRegnskapsforer:a,tlfRegnskapsforer:r})=>({harRegnskapsforer:e,...e?{navnRegnskapsforer:a}:{},...e?{tlfRegnskapsforer:r}:{}});yt.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  harRegnskapsforer,
  navnRegnskapsforer,
  tlfRegnskapsforer,
}: RegistrerVirksomhetFormValues`,optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const ud=({readOnly:e,index:a})=>o.jsx(Ve,{name:`${Ie}.${a}.familieEllerVennerTilknyttetNaringen`,label:o.jsx(w,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),readOnly:e,isHorizontal:!1,trueLabel:o.jsx(w,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),falseLabel:o.jsx(w,{id:"Registrering.VirksomhetRelasjonPanel.No"})});ud.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const sE="_inntektBredde_1xgnj_1",iE={inntektBredde:sE},lE=({readOnly:e,index:a})=>[{value:"harVarigEndring",label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"}),element:o.jsx(er,{marginTop:8,children:o.jsx(re,{name:`${Ie}.${a}.varigEndringGjeldendeFom`,isReadOnly:e,validate:[ae,B],label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})},{value:"erNyoppstartet",label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})},{value:"erNyIArbeidslivet",label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.NyIArbeidslivet"}),element:o.jsx(er,{marginTop:8,children:o.jsx(re,{name:`${Ie}.${a}.nyIArbeidslivetFom`,isReadOnly:e,validate:[ae,B],label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})}],Tt=({readOnly:e,index:a})=>o.jsx(Ve,{name:`${Ie}.${a}.varigEndretEllerStartetSisteFireAr`,label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),readOnly:e,trueContent:o.jsx(er,{marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(gr,{size:"small",children:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),o.jsx(Us,{validate:[B],name:`${Ie}.${a}.varigEndretEllerStartetSisteFireArArsak`,checkboxes:lE({readOnly:e,index:a})}),o.jsx(ed,{name:`${Ie}.${a}.beskrivelseAvEndring`,label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[Bs]}),o.jsx(Ue,{name:`${Ie}.${a}.inntekt`,label:o.jsx(w,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:e,validate:[Rn,B],className:iE.inntektBredde,parse:r=>{const n=parseInt(r.toString(),10);return Number.isNaN(n)?r:n}})]})})});Tt.transformValues=({varigEndretEllerStartetSisteFireAr:e,varigEndretEllerStartetSisteFireArArsak:a,varigEndringGjeldendeFom:r,nyIArbeidslivetFom:n,beskrivelseAvEndring:t,inntekt:s})=>{const i=a.includes("harVarigEndring"),l=a.includes("erNyoppstartet"),d=a.includes("erNyIArbeidslivet");return{varigEndretEllerStartetSisteFireAr:e,...e?{harVarigEndring:i,...i?{varigEndringGjeldendeFom:r}:{},erNyoppstartet:l,erNyIArbeidslivet:d,...d?{nyIArbeidslivetFom:n}:{},beskrivelseAvEndring:t,inntekt:s}:{}}};Tt.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  varigEndretEllerStartetSisteFireAr,
  varigEndretEllerStartetSisteFireArArsak,
  varigEndringGjeldendeFom,
  nyIArbeidslivetFom,
  beskrivelseAvEndring,
  inntekt,
}: StartedEndretFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]},alias:"StartedEndretFormValues"}}],returns:null}],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const vl={[Nr.DAGMAMMA]:1,[Nr.FISKE]:2,[Nr.JORDBRUK_ELLER_SKOGBRUK]:3,[Nr.ANNEN]:4},oE=(e,a)=>e>a?1:e<a?-1:0,dE=e=>e.VirksomhetType.filter(a=>a.kode!==Nr.FRILANSER).sort((a,r)=>oE(vl[a.kode],vl[r.kode])).map(a=>({value:a.kode,label:a.navn})),Et=({readOnly:e,alleKodeverk:a,index:r})=>o.jsx(Us,{label:o.jsx(w,{id:"Registrering.VirksomhetNaeringTypePanel.Title"}),name:`${Ie}.${r}.typeVirksomhet`,validate:[B],checkboxes:dE(a),isReadOnly:e});Et.transformValues=({typeVirksomhet:e})=>({typeVirksomhet:{ANNEN:e.includes(Nr.ANNEN),FISKE:e.includes(Nr.FISKE),DAGMAMMA:e.includes(Nr.DAGMAMMA),JORDBRUK_SKOGBRUK:e.includes(Nr.JORDBRUK_ELLER_SKOGBRUK)}});Et.__docgenInfo={description:`VirksomhetTypeNaringPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ typeVirksomhet }: RegistrerVirksomhetFormValues",optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetTypeNaringPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Fn=({open:e,readOnly:a=!1,alleKodeverk:r,index:n,remove:t})=>{const{getFieldState:s,watch:i}=X(),{error:l}=s(`${Ie}.${n}`),d=i(`${Ie}.${n}.navn`),[g,u]=A.useState(e);return o.jsxs(ke.Row,{shadeOnHover:!1,style:{backgroundColor:l&&!g?"var(--a-red-50)":"none"},children:[o.jsx(ke.DataCell,{valign:"top",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:()=>u(k=>!k),icon:g?o.jsx(Hl,{"aria-label":"Vis mindre"}):o.jsx(st,{"aria-label":"Vis mer"})})}),o.jsxs(ke.DataCell,{valign:"top",children:[o.jsx(Ra,{hidden:g,paddingBlock:"3",children:o.jsx(rr,{weight:"semibold",children:d})}),o.jsxs(Q,{gap:"4",hidden:!g,children:[o.jsx(Ue,{name:`${Ie}.${n}.navn`,validate:[B],label:o.jsx(w,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),readOnly:a}),o.jsx(pt,{readOnly:a,index:n,alleKodeverk:r}),o.jsx(Et,{readOnly:a,index:n,alleKodeverk:r}),o.jsx(Tt,{readOnly:a,index:n}),o.jsx(yt,{readOnly:a,index:n}),o.jsx(ud,{readOnly:a,index:n})]})]}),o.jsx(ke.DataCell,{valign:"top",align:"right",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:t,onKeyDown:t,icon:o.jsx(it,{"aria-label":"Slett rad"})})})]})};Fn.initialValues=()=>({varigEndretEllerStartetSisteFireArArsak:[],typeVirksomhet:[]});Fn.transformValues=e=>({navn:e.navn,...pt.transformValues(e),...Et.transformValues(e),...Tt.transformValues(e),...yt.transformValues(e),familieEllerVennerTilknyttetNaringen:e.familieEllerVennerTilknyttetNaringen});Fn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const At=({readOnly:e=!1,alleKodeverk:a})=>{var g,u,k,m,p;const r=fe(),{control:n,formState:{errors:t}}=X(),{fields:s,remove:i,append:l}=sr({control:n,name:`${En}.virksomheter`,rules:{required:r.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}}),d=()=>{l(Fn.initialValues())};return A.useEffect(()=>{s.length===0&&d()},[]),o.jsxs(o.Fragment,{children:[o.jsxs(ke,{children:[o.jsx(ke.Header,{children:o.jsxs(ke.Row,{children:[o.jsx(ke.HeaderCell,{style:{width:"48px"}}),o.jsx(ke.HeaderCell,{children:o.jsx(w,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),o.jsx(ke.HeaderCell,{style:{width:"48px"}})]})}),o.jsx(ke.Body,{children:s.map((f,c)=>o.jsx(Fn,{index:c,open:c+1===s.length,remove:()=>i(c),alleKodeverk:a,readOnly:e},f.id))})]}),((k=(u=(g=t[En])==null?void 0:g.virksomheter)==null?void 0:u.root)==null?void 0:k.message)&&o.jsx(xr,{children:(p=(m=t[En])==null?void 0:m.virksomheter.root)==null?void 0:p.message}),o.jsx("div",{children:o.jsx(We,{size:"small",variant:"tertiary",type:"button",onClick:d,icon:o.jsx(wa,{"aria-hidden":!0}),children:o.jsx(w,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})})]})};At.transformValues=({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:a}})=>({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:e?a.map(r=>Fn.transformValues(r)):void 0}});At.__docgenInfo={description:`RegistrererVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og søker har arbeidet i egen virksomhet.
Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"RegistrerVirksomhetPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Zn=({readOnly:e=!0,alleKodeverk:a})=>{const r=fe(),{watch:n}=X(),t=n(`${En}.harArbeidetIEgenVirksomhet`)||null;return o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.EgenVirksomhet.Title"})}),o.jsx(nn,{name:`${En}.harArbeidetIEgenVirksomhet`,validate:[B],isReadOnly:e,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:r.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:r.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),t&&o.jsx(At,{readOnly:e,alleKodeverk:a})]})})};Zn.initialValues=()=>({[En]:{harArbeidetIEgenVirksomhet:void 0,virksomheter:[Fn.initialValues()]}});Zn.transformValues=At.transformValues;Zn.__docgenInfo={description:`EgenVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Søker må oppgi om hen har arbdeidet i egen virksomhet.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"EgenVirksomhetPanel",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const uE=Ae(je),Qs=({readOnly:e,alleKodeverk:a})=>o.jsx(tr,{value:uE,children:o.jsx(Zn,{readOnly:e,alleKodeverk:a})});Qs.initialValues=Zn.initialValues;Qs.transformValues=Zn.transformValues;Qs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
}`,signature:{properties:[{key:"egenVirksomhet",value:{name:"signature",type:"object",raw:`{
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
}`,signature:{properties:[{key:"harArbeidetIEgenVirksomhet",value:{name:"boolean",required:!1}},{key:"virksomheter",value:{name:"Array",elements:[{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"signature",type:"object",raw:`{
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"virksomhetRegistrertINorge",value:{name:"boolean",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"landJobberFra",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  familieEllerVennerTilknyttetNaringen?: boolean;
}`,signature:{properties:[{key:"familieEllerVennerTilknyttetNaringen",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
}`,signature:{properties:[{key:"harRegnskapsforer",value:{name:"boolean",required:!1}},{key:"navnRegnskapsforer",value:{name:"string",required:!1}},{key:"tlfRegnskapsforer",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  typeVirksomhet: string[];
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"RegistrerVirksomhetFormValues[]",required:!0}}]},required:!0}}]},alias:"VirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Jt=Ae(je),ei=({readOnly:e})=>o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:Jt.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),o.jsx(nn,{name:"dekningsgrad",validate:[B],isReadOnly:e,isHorizontal:!0,radios:[{label:Jt.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Jt.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]})});ei.initialValues=()=>({dekningsgrad:void 0});ei.transformValues=({dekningsgrad:e})=>({dekningsgrad:e});ei.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ dekningsgrad }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ml=Ae(je),ri=({readOnly:e,annenForelderInformertRequired:a=!1})=>o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:ml.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),o.jsx(Ve,{label:ml.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"}),name:"annenForelderInformert",isRequired:a,readOnly:e})]})});ri.initialValues=()=>({annenForelderInformert:void 0});ri.tranformValues=({annenForelderInformert:e})=>({annenForelderInformert:e});ri.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]}}}},{name:"tranformValues",docblock:null,modifiers:["static"],params:[{name:"{ annenForelderInformert }: BekreftelseFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]},alias:"BekreftelseFormValues"}}],returns:null}],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me="tidsromPermisjon",wn="graderingPeriode",ni="oppholdPerioder",kd="overforingsperioder",ft="utsettelsePeriode",va="permisjonsPerioder",ai=`${me}.${va}`,Or=e=>`${ai}.${e}`,kE=ba(100),ti=[Lr.FELLESPERIODE,Lr.FEDREKVOTE,Lr.FORELDREPENGER_FOR_FODSEL,Lr.FORELDREPENGER,Lr.MODREKVOTE],gE=e=>e.filter(({kode:a})=>ti.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),vE=e=>e.map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),gd=[Lr.FEDREKVOTE,Lr.FORELDREPENGER_FOR_FODSEL,Lr.MODREKVOTE],Da=(e,a)=>e?a:"",mE=e=>!!e&&W(e,we).isBefore(W("2019-01-01")),pl=e=>()=>{const r=(e(ai)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return Hn(r)},yl=(e,a,r)=>()=>{const n=e(`${Or(a)}.periodeFom`),t=e(`${Or(a)}.periodeTom`);return!t||!n?null:r?Xe(t)(n):Ge(n)(t)},ct=({sokerErMor:e,readOnly:a,alleKodeverk:r})=>{const n=fe(),t=r.UttakPeriodeType,s=r.MorsAktivitet;s.filter(({kode:f})=>f==="-").length===0&&s.unshift({kode:"-",navn:"",kodeverk:""});const{control:i,getValues:l,trigger:d,watch:g,formState:{isSubmitted:u}}=X(),{fields:k,remove:m,append:p}=sr({control:i,name:ai});return A.useEffect(()=>{k.length===0&&p({})},[]),o.jsx(cr,{readOnly:a,fields:k,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:p,remove:m,children:(f,c)=>{const T=c===0,F=g(Or(c)),y=mE(F.periodeFom),R=gd.some(N=>N===F.periodeType)||F.periodeType==="";return o.jsxs(an,{readOnly:a,remove:m,index:c,children:[o.jsx("div",{children:o.jsx(ar,{readOnly:a,name:`${Or(c)}.periodeType`,label:Da(T,n.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:gE(t),validate:[B]})}),o.jsx(re,{isReadOnly:a,name:`${Or(c)}.periodeFom`,label:Da(T,n.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[B,ae,yl(l,c,!0),pl(l)],onChange:()=>u?d():void 0}),o.jsx(re,{isReadOnly:a,name:`${Or(c)}.periodeTom`,label:Da(T,n.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[B,ae,yl(l,c,!1),pl(l)],onChange:()=>u?d():void 0}),!e&&o.jsx(ar,{readOnly:a,disabled:R,name:`${Or(c)}.morsAktivitet`,label:Da(T,n.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:vE(s),hideValueOnDisable:!0}),o.jsx(kr,{readOnly:a,name:`${Or(c)}.flerbarnsdager`,label:o.jsx(w,{id:"Registrering.Permisjon.Flerbarnsdager"})}),o.jsx(kr,{readOnly:a,name:`${Or(c)}.harSamtidigUttak`,label:o.jsx(w,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),F.harSamtidigUttak&&o.jsx(Ue,{name:`${Or(c)}.samtidigUttaksprosent`,validate:[ds,kE],label:n.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:N=>Number.isNaN(N)?N:parseFloat(N.toString()).toFixed(2)}),y&&o.jsx(nt,{size:"small",variant:"warning",children:o.jsx(w,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},f.id)}})};ct.transformValues=e=>e.map(a=>gd.some(r=>r===a.periodeType)?{periodeType:a.periodeType,periodeFom:a.periodeFom,periodeTom:a.periodeTom,flerbarnsdager:a.flerbarnsdager??!1,harSamtidigUttak:a.harSamtidigUttak??!1,samtidigUttaksprosent:a.samtidigUttaksprosent}:{periodeType:a.periodeType,periodeFom:a.periodeFom,periodeTom:a.periodeTom,morsAktivitet:a.morsAktivitet,flerbarnsdager:a.flerbarnsdager??!1,harSamtidigUttak:a.harSamtidigUttak??!1,samtidigUttaksprosent:a.samtidigUttaksprosent});ct.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av perioder med permijon.`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]"}}],returns:null}],displayName:"RenderPermisjonPeriodeFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Rt=({foreldreType:e,readOnly:a,alleKodeverk:r})=>{const{watch:n}=X(),t=n(`${me}.fulltUttak`)??!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(w,{id:"Registrering.Permisjon.FulltUttak"})}),o.jsx(kr,{readOnly:a,name:`${me}.fulltUttak`,label:o.jsx(w,{id:"Registrering.Permisjon.FulltUttak"})}),t&&o.jsx(ct,{sokerErMor:e===at.MOR,readOnly:a,alleKodeverk:r})]})};Rt.initialValues=()=>({[va]:[],fulltUttak:!1});Rt.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}}}}],displayName:"PermisjonFulltUttak",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const pE=cT(9),Xa=`${me}.${wn}`,or=e=>`${Xa}.${e}`,Tl=e=>()=>{const r=(e(`${Xa}`)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},El=(e,a,r)=>()=>{const n=e(`${or(a)}.periodeFom`),t=e(`${or(a)}.periodeTom`);return!t||!n?null:r?Xe(t)(n):Ge(n)(t)},yE=(e,a)=>r=>e(`${or(a)}.arbeidskategoriType`)===en.ARBEIDSTAKER?B(r):void 0,TE=e=>{if(e)return e.length===11?id(e):pE(e)},Al={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},EE=[en.ARBEIDSTAKER,en.SELVSTENDIG_NAERINGSDRIVENDE,en.FRILANSER],fl=ba(100),AE=e=>e.filter(({kode:a})=>ti.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),fE=e=>e.filter(({kode:a})=>EE.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),vd=({graderingKvoter:e,readOnly:a,arbeidskategoriTyper:r})=>{const n=fe(),{watch:t,control:s,getValues:i,trigger:l,formState:{isSubmitted:d}}=X(),{fields:g,remove:u,append:k}=sr({control:s,name:`${Xa}`}),m=t(`${Xa}`)??[];return A.useEffect(()=>{g.length===0&&k(Al)},[]),o.jsx(cr,{fields:g,emptyPeriodTemplate:Al,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,remove:u,append:k,children:(p,f)=>{const{harSamtidigUttak:c,periodeFom:T}=m[f],F=T&&W(T,we).isBefore(W("2019-01-01"));return o.jsxs(an,{readOnly:a,remove:u,index:f,children:[o.jsx(ar,{name:`${or(f)}.periodeForGradering`,selectValues:AE(e),label:n.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[B]}),o.jsx(re,{label:n.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${or(f)}.periodeFom`,validate:[B,ae,El(i,f,!0),Tl(i)],onChange:()=>d?l():void 0}),o.jsx(re,{label:n.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${or(f)}.periodeTom`,validate:[B,ae,El(i,f,!1),Tl(i)],onChange:()=>d?l():void 0}),o.jsx(Ue,{label:o.jsx(w,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${or(f)}.prosentandelArbeid`,validate:[B,ds,fl],normalizeOnBlur:y=>Number.isNaN(y)?y:parseFloat(y.toString()).toFixed(2)}),o.jsx(Ue,{label:n.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${or(f)}.arbeidsgiverIdentifikator`,validate:[yE(i,f),Rn,TE]}),o.jsx(ar,{label:n.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${or(f)}.arbeidskategoriType`,selectValues:fE(r),validate:[B],onChange:()=>d?l():void 0}),o.jsx(kr,{name:`${or(f)}.skalGraderes`,label:o.jsx(w,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})}),o.jsx(kr,{readOnly:a,name:`${or(f)}.flerbarnsdager`,label:o.jsx(w,{id:"Registrering.Permisjon.Flerbarnsdager"})}),o.jsx(kr,{name:`${or(f)}.harSamtidigUttak`,label:o.jsx(w,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),c&&o.jsx(Ue,{name:`${or(f)}.samtidigUttaksprosent`,validate:[B,ds,fl],label:n.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})}),F&&o.jsx(nt,{size:"small",variant:"warning",children:o.jsx(w,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},p.id)}})};vd.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av graderingperiode.`,methods:[],displayName:"RenderGraderingPeriodeFieldArray",props:{graderingKvoter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'UttakPeriodeType'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidskategoriTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Arbeidskategori'>[]"},description:""}}};const Qn=({readOnly:e,alleKodeverk:a})=>{const r=a.UttakPeriodeType,n=a.Arbeidskategori,{watch:t}=X(),s=t(`${me}.skalGradere`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(w,{id:"Registrering.Permisjon.Gradering.Title"})}),o.jsx(kr,{readOnly:e,name:`${me}.skalGradere`,label:o.jsx(w,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),s&&o.jsx(vd,{graderingKvoter:r,arbeidskategoriTyper:n,readOnly:e})]})};Qn.transformValues=e=>{const a=e[wn];return a?a.map(r=>r.arbeidskategoriType?{...r,erArbeidstaker:r.arbeidskategoriType===en.ARBEIDSTAKER,erFrilanser:r.arbeidskategoriType===en.FRILANSER,erSelvstNæringsdrivende:r.arbeidskategoriType===en.SELVSTENDIG_NAERINGSDRIVENDE}:r):[]};Qn.initialValues=()=>({[wn]:[],skalGradere:!1});Qn.__docgenInfo={description:`PermisjonGraderingPanel

Viser panel for gradering
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]},alias:"FormValuesGradering"}}],returns:null},{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}}}}],displayName:"PermisjonGraderingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const si=`${me}.${ni}`,un=e=>`${si}.${e}`,cl=e=>()=>{const r=(e(`${si}`)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},Rl={periodeFom:"",periodeTom:"",årsak:""},cE=[la.UTTAK_MØDREKVOTE_ANNEN_FORELDER,la.UTTAK_FEDREKVOTE_ANNEN_FORELDER,la.UTTAK_FELLESP_ANNEN_FORELDER,la.UTTAK_FORELDREPENGER_ANNEN_FORELDER],RE=e=>e.filter(({kode:a})=>cE.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),md=({oppholdsReasons:e,readOnly:a})=>{const r=fe(),{control:n,getValues:t,trigger:s,formState:{isSubmitted:i}}=X(),{fields:l,remove:d,append:g}=sr({control:n,name:`${si}`});return A.useEffect(()=>{l.length===0&&g(Rl)},[]),o.jsx(cr,{fields:l,emptyPeriodTemplate:Rl,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,append:g,remove:d,children:(u,k)=>o.jsxs(an,{readOnly:a,remove:d,index:k,children:[o.jsx(re,{name:`${un(k)}.periodeFom`,label:r.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[B,ae,()=>{const m=t(`${un(k)}.periodeFom`),p=t(`${un(k)}.periodeTom`);return p&&m?Xe(p)(m):null},cl(t)],onChange:()=>i?s():void 0}),o.jsx(re,{name:`${un(k)}.periodeTom`,label:r.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[B,ae,()=>{const m=t(`${un(k)}.periodeFom`),p=t(`${un(k)}.periodeTom`);return p&&m?Ge(m)(p):null},cl(t)],onChange:()=>i?s():void 0}),o.jsx("div",{children:o.jsx(ar,{name:`${un(k)}.årsak`,label:r.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}),selectValues:RE(e),validate:[B]})})]},u.id)})};md.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'OppholdÅrsak'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ft=({readOnly:e,alleKodeverk:a})=>{const r=a.OppholdÅrsak,{watch:n}=X(),t=n(`${me}.skalHaOpphold`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(w,{id:"Registrering.Permisjon.Opphold.Title"})}),o.jsx(kr,{readOnly:e,name:`${me}.skalHaOpphold`,label:o.jsx(w,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),t&&o.jsx(md,{oppholdsReasons:r,readOnly:e})]})};Ft.initialValues=()=>({[ni]:[],skalHaOpphold:!1});Ft.__docgenInfo={description:`PermisjonOppholdPanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}}}}],displayName:"PermisjonOppholdPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ii=`${me}.${kd}`,kn=e=>`${ii}.${e}`,Fl=e=>()=>{const r=(e(ii)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},Ol={periodeFom:"",periodeTom:"",overforingArsak:""},pd=({selectValues:e,readOnly:a})=>{const r=fe(),{control:n,getValues:t,trigger:s,formState:{isSubmitted:i}}=X(),{fields:l,remove:d,append:g}=sr({control:n,name:ii});return A.useEffect(()=>{l.length===0&&g(Ol)},[]),o.jsx(cr,{fields:l,emptyPeriodTemplate:Ol,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,append:g,remove:d,children:(u,k)=>o.jsxs(an,{readOnly:a,remove:d,index:k,children:[o.jsx("div",{children:o.jsx(ar,{name:`${kn(k)}.overforingArsak`,label:r.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}),selectValues:e,validate:[B],readOnly:a})}),o.jsx(re,{isReadOnly:a,name:`${kn(k)}.periodeFom`,validate:[B,ae,()=>{const m=t(`${kn(k)}.periodeFom`),p=t(`${kn(k)}.periodeTom`);return p&&m?Xe(p)(m):null},Fl(t)],label:o.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}),onChange:()=>i?s():void 0}),o.jsx(re,{isReadOnly:a,name:`${kn(k)}.periodeTom`,validate:[B,ae,()=>{const m=t(`${kn(k)}.periodeFom`),p=t(`${kn(k)}.periodeTom`);return p&&m?Ge(m)(p):null},Fl(t)],label:o.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}),onChange:()=>i?s():void 0})]},u.id)})};pd.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const FE=(e,a,r)=>a===ma.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):a===ma.SYKDOM_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):r,OE=(e,a,r,n)=>e.filter(({kode:t})=>r||t!==ma.ALENEOMSORG&&t!==ma.IKKE_RETT_ANNEN_FORELDER).map(({kode:t,navn:s})=>a?o.jsx("option",{value:t,children:s},t):o.jsx("option",{value:t,children:FE(n,t,s)},t)),Ot=({foreldreType:e,alleKodeverk:a,readOnly:r,erEndringssøknad:n})=>{const t=fe(),s=a.OverføringÅrsak,i=OE(s,e===at.MOR,n,t),{watch:l}=X(),d=l(`${me}.skalOvertaKvote`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),o.jsx(kr,{readOnly:r,name:`${me}.skalOvertaKvote`,label:o.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),d&&o.jsx(pd,{selectValues:i,readOnly:r})]})};Ot.initialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[]});Ot.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}}}}],displayName:"PermisjonOverforingAvKvoterPanel",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const bl={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},yd=`${me}.${ft}`,mn=e=>`${yd}.${e}`,hl=e=>()=>{const r=(e(`${yd}`)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},Sl=(e,a,r)=>()=>{const n=`${mn(a)}`,t=e(`${n}.periodeFom`),s=e(`${n}.periodeTom`);return!s&&!t?null:r?Xe(s)(t):Ge(t)(s)},bE=e=>e.map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),hE=e=>e.filter(({kode:a})=>ti.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),Td=({utsettelseReasons:e,utsettelseKvoter:a,readOnly:r})=>{const n=fe(),{control:t,getValues:s,trigger:i,formState:{isSubmitted:l}}=X(),{fields:d,remove:g,append:u}=sr({control:t,name:`${me}.${ft}`});A.useEffect(()=>{d.length===0&&u(bl)},[]);const k=A.useCallback(()=>l?i():void 0,[l,i]);return o.jsx(cr,{fields:d,emptyPeriodTemplate:bl,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:u,remove:g,children:(m,p)=>o.jsxs(an,{readOnly:r,remove:g,index:p,children:[o.jsx(ar,{name:`${mn(p)}.periodeForUtsettelse`,label:n.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}),selectValues:hE(a),validate:[B]}),o.jsx(re,{name:`${mn(p)}.periodeFom`,label:n.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[B,ae,Sl(s,p,!0),hl(s)],onChange:k}),o.jsx(re,{name:`${mn(p)}.periodeTom`,label:n.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[B,ae,Sl(s,p,!1),hl(s)],onChange:k}),o.jsx(ar,{name:`${mn(p)}.arsakForUtsettelse`,label:n.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}),selectValues:bE(e),validate:[B],onChange:k}),o.jsx(ar,{label:n.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${mn(p)}.erArbeidstaker`,selectValues:[o.jsx("option",{value:"true",children:n.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),o.jsx("option",{value:"false",children:n.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[f=>s(`${mn(p)}.arsakForUtsettelse`)==="ARBEID"?B(f):void 0]})]},m.id)})};Td.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

Viser inputfelter for dato for bestemmelse av utsettelseperiode.`,methods:[],displayName:"RenderUtsettelsePeriodeFieldArray",props:{utsettelseReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'UtsettelseÅrsak'>[]"},description:""},utsettelseKvoter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'UttakPeriodeType'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const bt=({readOnly:e,alleKodeverk:a})=>{const r=a.UtsettelseÅrsak,n=a.UttakPeriodeType,{watch:t}=X(),s=t(`${me}.skalUtsette`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(w,{id:"Registrering.Permisjon.Utsettelse.Title"})}),o.jsx(kr,{readOnly:e,name:`${me}.skalUtsette`,label:o.jsx(w,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),s&&o.jsx(Td,{utsettelseReasons:r,utsettelseKvoter:n,readOnly:e})]})};bt.initialValues=()=>({[ft]:[],skalUtsette:!1});bt.__docgenInfo={description:`PermisjonUtsettelsePanel

Viser panel for utsettelse
Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}}}}],displayName:"PermisjonUtsettelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ea=({foreldreType:e,readOnly:a,alleKodeverk:r,erEndringssøknad:n})=>{var p,f,c,T;const t=fe(),{setError:s,clearErrors:i,formState:l,watch:d}=X(),[g,u,k,m]=d([`${me}.fulltUttak`,`${me}.skalGradere`,`${me}.skalUtsette`,`${me}.skalOvertaKvote`]);return A.useEffect(()=>{!g&&!u&&!k&&!m?s(`${me}.notRegisteredInput`,{type:"custom",message:t.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}):i(`${me}.notRegisteredInput`)},[g,u,k,m]),o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"Registrering.Permisjon.Title"})}),o.jsx(Rt,{foreldreType:e,readOnly:a,alleKodeverk:r}),o.jsx(Ot,{readOnly:a,foreldreType:e,alleKodeverk:r,erEndringssøknad:n}),o.jsx(bt,{readOnly:a,alleKodeverk:r}),o.jsx(Qn,{readOnly:a,alleKodeverk:r}),o.jsx(Ft,{readOnly:a,alleKodeverk:r}),l.isSubmitted&&((f=(p=l.errors[me])==null?void 0:p.notRegisteredInput)==null?void 0:f.message)&&o.jsx(xr,{children:(T=(c=l.errors[me])==null?void 0:c.notRegisteredInput)==null?void 0:T.message})]})})};ea.transformValues=e=>{var s,i,l,d,g,u,k;const a=e[me],r=a,n=a[va];(s=e.tidsromPermisjon)!=null&&s.fulltUttak&&n&&(r[va]=ct.transformValues(n));const t=a[wn];return(i=e.tidsromPermisjon)!=null&&i.skalGradere&&t&&(r[wn]=Qn.transformValues(a)),(l=e.tidsromPermisjon)!=null&&l.fulltUttak||(r[va]=void 0),(d=e.tidsromPermisjon)!=null&&d.skalGradere||(r[wn]=void 0),(g=e.tidsromPermisjon)!=null&&g.skalUtsette||(r[ft]=void 0),(u=e.tidsromPermisjon)!=null&&u.skalOvertaKvote||(r[kd]=void 0),(k=e.tidsromPermisjon)!=null&&k.skalHaOpphold||(r[ni]=void 0),{[me]:r}};ea.initialValues=()=>({[me]:{...Rt.initialValues(),...Ot.initialValues(),...bt.initialValues(),...Qn.initialValues(),...Ft.initialValues()}});ea.__docgenInfo={description:`PermisjonPanel

Viser permisjonspanel for mor eller far/medmor`,methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"PermisjonFormValues"}}],returns:null},{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]}}}}],displayName:"PermisjonPanel",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const SE=Ae(je),li=({foreldreType:e,readOnly:a,alleKodeverk:r,erEndringssøknad:n})=>o.jsx(tr,{value:SE,children:o.jsx(ea,{readOnly:a,foreldreType:e,alleKodeverk:r,erEndringssøknad:n})});li.transformValues=ea.transformValues;li.initialValues=ea.initialValues;li.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]},alias:"PermisjonFormValues"}}],returns:null},{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
}`,signature:{properties:[{key:"tidsromPermisjon",value:{name:"intersection",raw:`FromValuesFulltUttak &
FormValuesUtsettelse &
FormValuesOpphold &
FormValuesOverforing &
FormValuesGradering &
VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: PermisjonPeriode[];
}`,signature:{properties:[{key:"fulltUttak",value:{name:"boolean",required:!0}},{key:"permisjonsPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeType: string;
  periodeFom: string;
  periodeTom: string;
  flerbarnsdager?: boolean;
  morsAktivitet?: string;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: number;
}`,signature:{properties:[{key:"periodeType",value:{name:"string",required:!0}},{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"morsAktivitet",value:{name:"string",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"number",required:!1}}]}}],raw:"PermisjonPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsPeriode[];
}`,signature:{properties:[{key:"skalUtsette",value:{name:"boolean",required:!1}},{key:"utsettelsePeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  arsakForUtsettelse: string;
  periodeForUtsettelse?: string;
  erArbeidstaker?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"arsakForUtsettelse",value:{name:"string",required:!0}},{key:"periodeForUtsettelse",value:{name:"string",required:!1}},{key:"erArbeidstaker",value:{name:"string",required:!1}}]}}],raw:"UtsettelsPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: OppholdPeriode[];
}`,signature:{properties:[{key:"skalHaOpphold",value:{name:"boolean",required:!1}},{key:"oppholdPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  årsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"string",required:!0}}]}}],raw:"OppholdPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: OverforingPeriode[];
}`,signature:{properties:[{key:"skalOvertaKvote",value:{name:"boolean",required:!0}},{key:"overforingsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  overforingArsak: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"overforingArsak",value:{name:"string",required:!0}}]}}],raw:"OverforingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriode[];
}`,signature:{properties:[{key:"skalGradere",value:{name:"boolean",required:!1}},{key:"graderingPeriode",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom: string;
  periodeForGradering: string;
  prosentandelArbeid: string;
  skalGraderes: boolean;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  flerbarnsdager?: boolean;
  harSamtidigUttak?: boolean;
  samtidigUttaksprosent?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!0}},{key:"periodeForGradering",value:{name:"string",required:!0}},{key:"prosentandelArbeid",value:{name:"string",required:!0}},{key:"skalGraderes",value:{name:"boolean",required:!0}},{key:"arbeidsgiverIdentifikator",value:{name:"string",required:!1}},{key:"arbeidskategoriType",value:{name:"string",required:!1}},{key:"flerbarnsdager",value:{name:"boolean",required:!1}},{key:"harSamtidigUttak",value:{name:"boolean",required:!1}},{key:"samtidigUttaksprosent",value:{name:"string",required:!1}}]}}],raw:"GraderingPeriode[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: string;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"string",required:!1}}]}}],required:!1}}]}}}}],displayName:"PermisjonIndex",props:{foreldreType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const NE=Ae(je),oi=({readOnly:e})=>o.jsx(tr,{value:NE,children:o.jsx(nn,{name:"erBarnetFodt",label:o.jsx(w,{id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[B],isReadOnly:e,isTrueOrFalseSelection:!0,radios:[{label:o.jsx(w,{id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:o.jsx(w,{id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]})});oi.__docgenInfo={description:"",methods:[],displayName:"ErBarnetFodt",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};var Ia={exports:{}},_E=Ia.exports,Nl;function KE(){return Nl||(Nl=1,function(e,a){(function(r,n){e.exports=n()})(_E,function(){return function(r,n){n.prototype.isSameOrAfter=function(t,s){return this.isSame(t,s)||this.isAfter(t,s)}}})}(Ia)),Ia.exports}var PE=KE();const DE=Gl(PE);var Va={exports:{}},ME=Va.exports,_l;function qE(){return _l||(_l=1,function(e,a){(function(r,n){e.exports=n()})(ME,function(){return function(r,n){n.prototype.isSameOrBefore=function(t,s){return this.isSame(t,s)||this.isBefore(t,s)}}})}(Va)),Va.exports}var IE=qE();const VE=Gl(IE),Kl=Ae(je);W.extend(VE);W.extend(DE);const Pl=td(1),Dl=ba(9),Za=()=>W().subtract(8,"year"),Ed=()=>W(),jE=()=>W().subtract(8,"year"),LE=()=>W().subtract(0,"year"),In=()=>W().subtract(8,"year"),Vn=()=>W().add(9,"months"),wE=(e,a)=>{const r=e?W(e,we):void 0,n=W().startOf("day"),t=r!=null&&r.isValid()&&(r!=null&&r.isBefore(n))?r:n;return Xe(t)(a)},Ad=(e,a)=>{const r=e?W(e,we):void 0,n=W(a,we);if(!(r!=null&&r.isValid())||!(n!=null&&n.isValid()))return null;const t=r.subtract(3,"weeks").subtract(1,"day"),s=r.add(5,"months").add(1,"day");return t.isSameOrAfter(n)?Kl.formatMessage({id:"ValidationMessage.ForTidligTermin"}):s.isSameOrBefore(n)?Kl.formatMessage({id:"ValidationMessage.ForSenTermin"}):null},Vr=Ae(je),UE=e=>a=>{const r=e("foedselsDato");return Ad(r,a)},GE=e=>a=>{const r=e("termindato");return wE(r,a)},di=({readOnly:e,erForeldrepenger:a=!1})=>{const{watch:r,getValues:n}=X(),t=r("erBarnetFodt");return o.jsx(tr,{value:Vr,children:o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:Vr.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),o.jsx(oi,{readOnly:e}),t!==void 0&&o.jsxs(Q,{gap:"4",children:[t===!1&&o.jsxs(o.Fragment,{children:[o.jsxs(ze,{gap:"4",children:[o.jsx(re,{name:"termindato",label:Vr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:In().toDate(),toDate:Vn().toDate(),defaultMonth:new Date,validate:[B,ae,Ge(In()),Xe(Vn())]}),o.jsx(Ue,{name:"antallBarn",label:Vr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:s=>{const i=parseInt(s.toString(),10);return isNaN(i)?s:i},validate:[B,Rn,Pl,Dl]})]}),o.jsx(re,{name:"terminbekreftelseDato",label:Vr.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:e,fromDate:jE().toDate(),toDate:LE().toDate(),defaultMonth:new Date,validate:[ae,GE(n)]})]}),t===!0&&o.jsxs(o.Fragment,{children:[o.jsxs(ze,{gap:"4",children:[o.jsx(re,{name:"foedselsDato",label:Vr.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,validate:[B,ae,Ge(Za()),Gn],fromDate:Za().toDate(),toDate:Ed().toDate()}),o.jsx(Ue,{name:"antallBarn",label:Vr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:s=>{const i=parseInt(s.toString(),10);return Number.isNaN(i)?s:i},validate:[B,Rn,Pl,Dl]})]}),a&&o.jsx(nt,{size:"small",variant:"info",children:o.jsx(gr,{size:"small",children:Vr.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),o.jsx(re,{name:"termindato",label:Vr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,validate:[ae,Ge(In()),Xe(Vn()),UE(n)],fromDate:In().toDate(),toDate:Vn().toDate(),defaultMonth:new Date})]})]})]})})})};di.initialValues=()=>({erBarnetFodt:void 0});di.transformValues=({antallBarn:e,erBarnetFodt:a,foedselsDato:r,termindato:n,terminbekreftelseDato:t})=>a?{erBarnetFodt:!0,termindato:n,foedselsDato:r,antallBarn:e}:{erBarnetFodt:!1,termindato:n,terminbekreftelseDato:t,antallBarnFraTerminbekreftelse:e};di.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  antallBarn,
  erBarnetFodt,
  foedselsDato,
  termindato,
  terminbekreftelseDato,
}: FormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
  foedselsDato?: string;
  antallBarn?: number;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"union",raw:`| {
    erBarnetFodt: false;
    termindato?: string;
    terminbekreftelseDato?: string;
    antallBarnFraTerminbekreftelse?: number;
  }
| {
    erBarnetFodt: true;
    termindato?: string;
    foedselsDato?: string;
    antallBarn?: number;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erBarnetFodt: false;
  termindato?: string;
  terminbekreftelseDato?: string;
  antallBarnFraTerminbekreftelse?: number;
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"false",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"terminbekreftelseDato",value:{name:"string",required:!1}},{key:"antallBarnFraTerminbekreftelse",value:{name:"number",required:!1}}]}},{name:"signature",type:"object",raw:`{
  erBarnetFodt: true;
  termindato?: string;
  foedselsDato?: string;
  antallBarn?: number;
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Wt=Ae(je),BE=e=>a=>{const r=e("foedselsDato");return Ad(r,a)},ui=({readOnly:e})=>{const{getValues:a,watch:r}=X(),n=r("erBarnetFodt");return o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:Wt.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),o.jsx(oi,{readOnly:e}),n&&o.jsx(re,{name:"foedselsDato",label:Wt.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,fromDate:Za().toDate(),toDate:Ed().toDate(),validate:[B,ae,Gn,Ge(Za())]}),o.jsx(re,{name:"termindato",label:Wt.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:In().toDate(),toDate:Vn().toDate(),defaultMonth:new Date,validate:[B,ae,Ge(In()),Xe(Vn()),BE(a)]})]})})};ui.initialValues=()=>({termindato:void 0,foedselsDato:void 0,erBarnetFodt:!1});ui.transformValues=({erBarnetFodt:e,foedselsDato:a,termindato:r})=>({erBarnetFodt:e,termindato:r,foedselsDato:e?a:void 0});ui.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ erBarnetFodt, foedselsDato, termindato }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"TerminOgFodselPanelSvp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const qe="tilretteleggingArbeidsforhold",Qa="tilretteleggingForArbeidsgiver",xE="tilretteleggingSelvstendigNaringsdrivende",HE="tilretteleggingFrilans",YE="tilretteleggingArbeidsgiver",CE=ba(100),Ml={tilretteleggingType:"",dato:"",stillingsprosent:""},et=({readOnly:e,name:a})=>{const r=fe(),{control:n}=X(),{fields:t,remove:s,append:i}=sr({control:n,name:a});return A.useEffect(()=>{t.length===0&&i(Ml)},[]),o.jsx(Ra,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:o.jsx(cr,{fields:t,emptyPeriodTemplate:Ml,bodyText:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:e,append:i,remove:s,children:(l,d)=>o.jsxs(an,{readOnly:e,remove:s,index:d,children:[o.jsx(ar,{readOnly:e,name:`${a}.${d}.tilretteleggingType`,label:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[B],selectValues:[o.jsx("option",{value:gn.HEL_TILRETTELEGGING,children:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},gn.HEL_TILRETTELEGGING),o.jsx("option",{value:gn.DELVIS_TILRETTELEGGING,children:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},gn.DELVIS_TILRETTELEGGING),o.jsx("option",{value:gn.INGEN_TILRETTELEGGING,children:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},gn.INGEN_TILRETTELEGGING)]}),o.jsx(re,{isReadOnly:e,name:`${a}.${d}.dato`,label:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[B]}),o.jsx(Ue,{readOnly:e,name:`${a}.${d}.stillingsprosent`,label:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[B,CE],maxLength:99})]},l.id)})})};et.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ks=`${qe}.${Qa}`,zt=e=>`${ks}.${e}`,fd=({open:e,readOnly:a=!1,index:r,remove:n})=>{const{getFieldState:t,watch:s}=X(),{error:i}=t(`${ks}.${r}`),l=s(`${ks}.${r}.organisasjonsnummer`),[d,g]=A.useState(e),u=fe();return o.jsxs(ke.Row,{shadeOnHover:!1,style:{backgroundColor:i&&!d?"var(--a-red-50)":"none"},children:[o.jsx(ke.DataCell,{valign:"top",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:()=>g(k=>!k),icon:d?o.jsx(Hl,{"aria-label":"Vis mindre"}):o.jsx(st,{"aria-label":"Vis mer"})})}),o.jsxs(ke.DataCell,{valign:"top",children:[o.jsx(Ra,{hidden:d,paddingBlock:"3",children:o.jsx(rr,{weight:"semibold",children:l})}),o.jsxs(Q,{gap:"4",hidden:!d,children:[o.jsxs(ze,{gap:"4",children:[o.jsx(Ue,{readOnly:a,name:`${zt(r)}.organisasjonsnummer`,label:u.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[B,k=>OT(k.toString()),FT],maxLength:99}),o.jsx(re,{name:`${zt(r)}.behovsdato`,label:u.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[B],isReadOnly:a})]}),o.jsx(et,{name:`${zt(r)}.${YE}`,readOnly:a})]})]}),o.jsx(ke.DataCell,{valign:"top",align:"right",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:n,onKeyDown:n,icon:o.jsx(it,{"aria-label":"Slett rad"})})})]})};fd.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const $E={organisasjonsnummer:"",behovsdato:""},JE=`${qe}.${Qa}`,cd=({readOnly:e})=>{var d,g,u,k,m;const a=fe(),{control:r,formState:{errors:n}}=X(),{fields:t,append:s,remove:i}=sr({control:r,name:JE,rules:{required:a.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),l=()=>{s($E)};return A.useEffect(()=>{t.length===0&&l()},[]),o.jsxs(Q,{gap:"4",children:[o.jsxs(ke,{children:[o.jsx(ke.Header,{children:o.jsxs(ke.Row,{children:[o.jsx(ke.HeaderCell,{style:{width:"48px"}}),o.jsx(ke.HeaderCell,{children:o.jsx(w,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),o.jsx(ke.HeaderCell,{style:{width:"48px"}})]})}),o.jsx(ke.Body,{children:t.map((p,f)=>o.jsx(fd,{index:f,open:f+1===t.length,remove:()=>i(f),readOnly:e},p.id))})]}),((u=(g=(d=n[qe])==null?void 0:d[Qa])==null?void 0:g.root)==null?void 0:u.message)&&o.jsx(xr,{children:(m=(k=n[qe])==null?void 0:k[Qa].root)==null?void 0:m.message}),o.jsx("div",{children:o.jsx(We,{size:"small",variant:"tertiary",onClick:l,type:"button",icon:o.jsx(wa,{"aria-hidden":!0}),children:o.jsx(w,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};cd.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const WE=e=>{const a=[];return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&a.push(...e.tilretteleggingForArbeidsgiver.map(r=>({"@type":"VI",behovsdato:r.behovsdato,organisasjonsnummer:r.organisasjonsnummer,tilrettelegginger:r.tilretteleggingArbeidsgiver}))),e!=null&&e.sokForFrilans&&a.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&a.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),a},Ma=Ae(je),ki=({readOnly:e})=>{var d,g,u,k;const{watch:a,setError:r,clearErrors:n,formState:t}=X(),[s,i,l]=a([`${qe}.sokForSelvstendigNaringsdrivende`,`${qe}.sokForFrilans`,`${qe}.sokForArbeidsgiver`]);return A.useEffect(()=>{!s&&!i&&!l?r(`${qe}.notRegisteredInput`,{type:"custom",message:Ma.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):n(`${qe}.notRegisteredInput`)},[s,i,l]),o.jsx(tr,{value:Ma,children:o.jsx(xe,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),t.isSubmitted&&((g=(d=t.errors[qe])==null?void 0:d.notRegisteredInput)==null?void 0:g.message)&&o.jsx(xr,{children:(k=(u=t.errors[qe])==null?void 0:u.notRegisteredInput)==null?void 0:k.message}),o.jsx(Ve,{name:`${qe}.sokForSelvstendigNaringsdrivende`,label:o.jsx(w,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:e,trueContent:o.jsx(er,{marginTop:4,children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"BehovForTilretteleggingPanel.TittelSN"})}),o.jsx(re,{name:`${qe}.behovsdatoSN`,label:Ma.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[B],isReadOnly:e}),o.jsx(et,{name:`${qe}.${xE}`,readOnly:e})]})})}),o.jsx(Ve,{name:`${qe}.sokForFrilans`,label:o.jsx(w,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:e,trueContent:o.jsx(er,{marginTop:4,children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),o.jsx(re,{name:`${qe}.behovsdatoFrilans`,label:Ma.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[B],isReadOnly:e}),o.jsx(et,{name:`${qe}.${HE}`,readOnly:e})]})})}),o.jsx(Ve,{name:`${qe}.sokForArbeidsgiver`,label:o.jsx(w,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:e,trueContent:o.jsx(er,{marginTop:4,children:o.jsxs(Q,{gap:"4",children:[o.jsx(he,{size:"small",children:o.jsx(w,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),o.jsx(cd,{readOnly:e})]})})})]})})})};ki.initialValues=()=>({[qe]:{}});ki.transformValues=({tilretteleggingArbeidsforhold:e})=>({[qe]:WE(e)});ki.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ tilretteleggingArbeidsforhold }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
}`,signature:{properties:[{key:"tilretteleggingArbeidsforhold",value:{name:"intersection",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
} & VirtuellFeilType`,elements:[{name:"signature",type:"object",raw:`{
  sokForArbeidsgiver?: boolean;
  [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
    behovsdato?: string;
    organisasjonsnummer?: string;
    [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  }[];
  sokForFrilans?: boolean;
  behovsdatoFrilans?: string;
  [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  sokForSelvstendigNaringsdrivende?: boolean;
  behovsdatoSN?: string;
  [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"sokForArbeidsgiver",value:{name:"boolean",required:!1}},{key:"tilretteleggingForArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}`,signature:{properties:[{key:"behovsdato",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"tilretteleggingArbeidsgiver",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}}],raw:`{
  behovsdato?: string;
  organisasjonsnummer?: string;
  [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
}[]`,required:!1}},{key:"sokForFrilans",value:{name:"boolean",required:!1}},{key:"behovsdatoFrilans",value:{name:"string",required:!1}},{key:"tilretteleggingFrilans",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}},{key:"sokForSelvstendigNaringsdrivende",value:{name:"boolean",required:!1}},{key:"behovsdatoSN",value:{name:"string",required:!1}},{key:"tilretteleggingSelvstendigNaringsdrivende",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
}`,signature:{properties:[{key:"tilretteleggingType",value:{name:"string",required:!0}},{key:"dato",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"string",required:!1}}]}}],raw:"Tilrettelegging[]",required:!1}}]}},{name:"signature",type:"object",raw:`{
  notRegisteredInput?: boolean;
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};export{Hs as A,ri as B,ei as D,br as F,tA as H,Cs as I,sA as J,$s as L,Js as M,lA as N,Ws as O,li as P,Xs as R,oA as S,di as T,Qs as V,aA as a,at as b,Zs as c,xs as d,Ys as e,zs as f,nA as g,ki as h,ui as i,Ra as j,w as k,nn as l,B as m,iA as u};
