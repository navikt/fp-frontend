var Nd=Object.defineProperty;var Od=(e,a,r)=>a in e?Nd(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var U=(e,a,r)=>Od(e,typeof a!="symbol"?a+"":a,r);import{j as o,h as Li}from"./index-Byyjg8XX.js";import{u as fe,_ as vl,s as ml,d as _d,P as tr,e as Sd,f as Dr,g as ht,l as hd,h as Kd,i as Dd,j as Pd,k as Id,n as Ld,o as rt,S as Ea,p as se,q as Mi,t as Md,v as gs,x as wd,y as Vd,z as jd,C as Gd,D as Ud,E as qd,G as ya,I as xd,M as Bd,b as We,J as xn,K as gr,R as vs,B as rr,N as xe,O as Br,Q as ms,T as Ta,U as Ur,W as wi,X as Vi,Y as ji,Z as Gi,$ as Hd,a0 as Yd,a1 as ps,a2 as Es,a3 as ys,a4 as Cd,a5 as Ui,a6 as Va,a7 as Ts,a8 as cs,A as nt,V as Q,a9 as $d,r as ce,H as ze,aa as Ge,ab as pn,ac as Jd,ad as Wd,ae as zd,af as Xd,c as Oe,ag as Kt,F as Zd}from"./nb_NO-De1z7ymB.js";import{r as c,R as v}from"./index-C4XKfyRp.js";import{d as W}from"./dayjs.min-DkLNzaWO.js";import{g as qi}from"./_commonjsHelpers-CqkleIqs.js";var en=(e=>(e.FISKER="FISKER",e.ARBEIDSTAKER="ARBEIDSTAKER",e.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",e.SJOMANN="SJØMANN",e.JORDBRUKER="JORDBRUKER",e.DAGPENGER="DAGPENGER",e.INAKTIV="INAKTIV",e.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",e.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",e.FRILANSER="FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",e.DAGMAMMA="DAGMAMMA",e.ANNET="ANNET",e))(en||{}),la=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(la||{}),Nr=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(Nr||{}),at=(e=>(e.MOR="MOR",e.FAR="FAR",e.MEDMOR="MEDMOR",e.MEDFAR="MEDFAR",e.TREDJE_PART="TREDJE_PART",e))(at||{}),ka=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(ka||{}),tt=(e=>(e.NORGE="NOR",e))(tt||{}),Sr=(e=>(e.FISKE="FISKE",e.FRILANSER="FRILANSER",e.DAGMAMMA="DAGMAMMA",e.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",e.ANNEN="ANNEN",e))(Sr||{}),ia=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(ia||{}),ma=(e=>(e.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",e.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",e.ALENEOMSORG="ALENEOMSORG",e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e.UDEFINERT="-",e))(ma||{}),gn=(e=>(e.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",e.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",e.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",e))(gn||{}),jr=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(jr||{});function Qd(e,a){var r=e.values,n=vl(e,["values"]),t=a.values,s=vl(a,["values"]);return ml(t,r)&&ml(n,s)}function xi(e){var a=fe(),r=a.formatMessage,n=a.textComponent,t=n===void 0?c.Fragment:n,s=e.id,l=e.description,i=e.defaultMessage,d=e.values,g=e.children,u=e.tagName,k=u===void 0?t:u,m=e.ignoreTag,p={id:s,description:l,defaultMessage:i},f=r(p,d,{ignoreTag:m});return typeof g=="function"?g(Array.isArray(f)?f:[f]):k?c.createElement(k,null,f):c.createElement(c.Fragment,null,f)}xi.displayName="FormattedMessage";var G=c.memo(xi,Qd);G.displayName="MemoizedFormattedMessage";const nc=e=>{const a=_d({locale:"nb-NO",messages:e},Sd());return n=>o.jsx(tr,{value:a,children:n()})},ac={UttakUtsettelseType:[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],FagsakYtelseType:[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KonsekvensForYtelsen:[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],AktivitetskravPermisjonType:[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],AdresseType:[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],SivilstandType:[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],Inntektskategori:[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],SkjermlenkeType:[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],FaktaOmBeregningTilfelle:[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],VergeType:[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],KlageHjemmel:[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],ArbeidType:[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],FagsakMarkering:[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],Arbeidskategori:[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:[{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST. KITTS OG NEVIS"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"}],BehandlingType:[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],InnsynResultatType:[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],MedlemskapType:[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],PersonstatusType:[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],RelasjonsRolleType:[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],VirksomhetType:[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],MedlemskapDekningType:[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_2_F:[{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_33:[{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'}],SVP_VK_1:[{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'}],FP_VK_16:[{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],PermisjonsbeskrivelseType:[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],MedlemskapManuellVurderingType:[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],NaturalYtelseType:[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],PeriodeResultatÅrsak:[{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-13"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]}],ForeldreType:[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],OppgaveType:[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}]};function Bi(e,a=166,r=!1){let n;function t(...s){const l=()=>{n=void 0,e.apply(this,s)};!n&&r&&l(),clearTimeout(n),n=setTimeout(l,a)}return t.clear=()=>{clearTimeout(n)},t}const Un=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};function pa(e,a=[]){const r=c.useRef(e);return c.useEffect(()=>{r.current=e}),c.useCallback((...n)=>{var t;return(t=r.current)===null||t===void 0?void 0:t.call(r,...n)},a)}function ja({value:e,defaultValue:a,onChange:r}){const n=pa(r),[t,s]=c.useState(a),l=e!==void 0,i=l?e:t,d=pa(g=>{const k=typeof g=="function"?g(i):g;l||s(k),n(k)},[l,n,i]);return[i,d]}var eu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ru=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=eu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var nu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const au=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=nu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var tu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const su=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=tu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var lu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const st=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=lu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var iu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Hi=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=iu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var ou=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const du=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=ou(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var uu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ga=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=uu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var ku=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const gu=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=ku(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var vu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const mu=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=vu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var pu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const lt=c.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=pu(e,["title","titleId"]);let s=Dr();return s=r?n||"title-"+s:void 0,c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":s},t),r?c.createElement("title",{id:s},r):null,c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 6.25a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.876-11.384h.805a.75.75 0 0 0 0-1.5h-2.75V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25zm5.5-1.5c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm-3.19 3 .867 11.27c.01.13.118.23.249.23h8.148c.13 0 .24-.1.25-.23l.866-11.27zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))}),Eu=typeof window<"u"&&window.matchMedia===void 0,yu=(e,a)=>{const[r,n]=c.useState(a);return c.useEffect(()=>{if(Eu)return;const t=window.matchMedia(e);n(t.matches);const s=l=>{n(l.matches)};return t.addEventListener("change",s),()=>{t.removeEventListener("change",s)}},[e]),r},Yi=6048e5,Tu=864e5,cu=6e4,fu=36e5,Au=1e3,pl=Symbol.for("constructDateFrom");function ge(e,a){return typeof e=="function"?e(a):e&&typeof e=="object"&&pl in e?e[pl](a):e instanceof Date?new e.constructor(a):new Date(a)}function Bn(e,...a){const r=ge.bind(null,a.find(n=>typeof n=="object"));return a.map(r)}let Ru={};function bn(){return Ru}function ne(e,a){return ge(a||e,e)}function qr(e,a){var i,d,g,u;const r=bn(),n=(a==null?void 0:a.weekStartsOn)??((d=(i=a==null?void 0:a.locale)==null?void 0:i.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((u=(g=r.locale)==null?void 0:g.options)==null?void 0:u.weekStartsOn)??0,t=ne(e,a==null?void 0:a.in),s=t.getDay(),l=(s<n?7:0)+s-n;return t.setDate(t.getDate()-l),t.setHours(0,0,0,0),t}const Fu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},bu={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Nu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ou={date:ht({formats:Fu,defaultWidth:"full"}),time:ht({formats:bu,defaultWidth:"full"}),dateTime:ht({formats:Nu,defaultWidth:"full"})},it={code:"en-US",formatDistance:Pd,formatLong:Ou,formatRelative:Dd,localize:hd,match:Kd,options:{weekStartsOn:0,firstWeekContainsDate:1}};function El(e){return e.sort((a,r)=>{const n=a.compareDocumentPosition(r);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const _u=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function yl(e,a,r){let n=e+1;return r&&n>=a&&(n=0),n}function Tl(e,a,r){let n=e-1;return r&&n<0&&(n=a),n}const Dt=e=>e;class Su{constructor(){this.descendants=new Map,this.register=a=>{if(a!=null)return _u(a)?this.registerNode(a):r=>{this.registerNode(r,a)}},this.unregister=a=>{this.descendants.delete(a);const r=El(Array.from(this.descendants.keys()));this.assignIndex(r)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=a=>{this.descendants.forEach(r=>{const n=a.indexOf(r.node);r.index=n,r.node.dataset.index=r.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((r,n)=>r.index-n.index),this.enabledValues=()=>this.values().filter(a=>!a.disabled),this.item=a=>{if(this.count()!==0)return this.values()[a]},this.enabledItem=a=>{if(this.enabledCount()!==0)return this.enabledValues()[a]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const a=this.enabledValues().length-1;return this.enabledItem(a)},this.indexOf=a=>{var r,n;return a&&(n=(r=this.descendants.get(a))===null||r===void 0?void 0:r.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=a=>a==null?-1:this.enabledValues().findIndex(r=>r.node.isSameNode(a)),this.next=(a,r=!0)=>{const n=yl(a,this.count(),r);return this.item(n)},this.nextEnabled=(a,r=!0)=>{const n=this.item(a);if(!n)return;const t=this.enabledIndexOf(n.node),s=yl(t,this.enabledCount(),r);return this.enabledItem(s)},this.prev=(a,r=!0)=>{const n=Tl(a,this.count()-1,r);return this.item(n)},this.prevEnabled=(a,r=!0)=>{const n=this.item(a);if(!n)return;const t=this.enabledIndexOf(n.node),s=Tl(t,this.enabledCount()-1,r);return this.enabledItem(s)},this.registerNode=(a,r)=>{if(!a)return;const n=this.descendants.get(a);if(n){this.descendants.set(a,Object.assign({index:n.index,node:a},r));return}const t=Array.from(this.descendants.keys()).concat(a),s=El(t);r!=null&&r.disabled&&(r.disabled=!!r.disabled);const l=Object.assign({node:a,index:-1},r);this.descendants.set(a,l),this.assignIndex(s)}}}function hu(){const[e,a]=Id({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),r=Dt(s=>v.createElement(e,Object.assign({},s.value),s.children));function n(s){const l=a(),[i,d]=c.useState(-1),g=c.useRef(null);Un(()=>()=>{g.current&&l.unregister(g.current)},[]),Un(()=>{if(!g.current)return;const k=Number(g.current.dataset.index);i!==k&&!Number.isNaN(k)&&d(k)});const u=Dt(s?l.register(s):l.register);return{descendants:l,index:i,enabledIndex:l.enabledIndexOf(g.current),register:Ld([u,g])}}function t(){return c.useRef(new Su).current}return[r,a,t,n]}function Ku(e,a=globalThis==null?void 0:globalThis.document){const r=pa(e);c.useEffect(()=>{const n=t=>{t.key==="Escape"&&r(t)};return a.addEventListener("keydown",n,!0),()=>a.removeEventListener("keydown",n,!0)},[r,a])}const Ci={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function $i(e,a,r,{discrete:n}={discrete:!1}){if(!a)return;const t=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t.addEventListener(e,a,{once:!0}),n&&t?Li.flushSync(()=>t.dispatchEvent(s)):t.dispatchEvent(s)}function Du(e,a=globalThis==null?void 0:globalThis.document){const r=pa(e),n=c.useRef(!1);return c.useEffect(()=>{const t=s=>{if(s.target&&!n.current){const l={originalEvent:s};$i(Ci.FOCUS_OUTSIDE,r,l)}};return a.addEventListener("focusin",t),()=>a.removeEventListener("focusin",t)},[a,r]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function Pu(e,a=globalThis==null?void 0:globalThis.document){const r=pa(e),n=c.useRef(!1),t=c.useRef(()=>{});return c.useEffect(()=>{const s=i=>{function d(){$i(Ci.POINTER_DOWN_OUTSIDE,r,{originalEvent:i},{discrete:!0})}i.target&&!n.current?i.pointerType==="touch"?(a.removeEventListener("click",t.current),t.current=d,a.addEventListener("click",t.current,{once:!0})):d():a.removeEventListener("click",t.current),n.current=!1},l=window.setTimeout(()=>{a.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(l),a.removeEventListener("pointerdown",s),a.removeEventListener("click",t.current)}},[a,r]),{onPointerDownCapture:()=>{n.current=!0}}}var Iu=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const[Lu,Mu,wu,Vu]=hu();let hn=0,cl;const ju=c.forwardRef((e,a)=>Mu(!1)?v.createElement(fl,Object.assign({ref:a},e)):v.createElement(Gu,null,v.createElement(fl,Object.assign({ref:a},e)))),Gu=({children:e})=>{const a=wu();return v.createElement(Lu,{value:a},e)},fl=c.forwardRef((e,a)=>{var r,{children:n,asChild:t,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:i,onInteractOutside:d,onDismiss:g,safeZone:u,disableOutsidePointerEvents:k=!1,enabled:m=!0}=e,p=Iu(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,f]=c.useState({}),{register:A,index:y,descendants:F}=Vu({disableOutsidePointerEvents:k,disabled:!m,forceUpdate:()=>f({})}),[E,R]=c.useState(null),S=rt(R,A,a),D=(r=E==null?void 0:E.ownerDocument)!==null&&r!==void 0?r:globalThis==null?void 0:globalThis.document,N=c.useRef(!1),b=c.useRef(!1),_=(()=>{let P=-1;return F.enabledValues().forEach((C,$)=>{C.disableOutsidePointerEvents&&(P=$)}),{isPointerEventsEnabled:y>=P,isBodyPointerEventsDisabled:hn>0,pointerStyle:y>=P&&hn>0?"auto":void 0}})();function K(P){var H,C;if(!(u!=null&&u.anchor)&&!(u!=null&&u.dismissable)||!m)return;P.defaultPrevented||(N.current=!0,P.detail.originalEvent.type==="pointerdown"&&(b.current=!0));const $=P.target;P.detail.originalEvent.type==="pointerdown"?(!((H=u==null?void 0:u.anchor)===null||H===void 0)&&H.contains($)||$===(u==null?void 0:u.anchor))&&P.preventDefault():!($ instanceof HTMLElement&&![u==null?void 0:u.anchor,u==null?void 0:u.dismissable].some(pe=>pe==null?void 0:pe.contains($))&&!$.contains((C=u==null?void 0:u.dismissable)!==null&&C!==void 0?C:null))&&P.preventDefault(),P.detail.originalEvent.type==="focusin"&&b.current&&P.preventDefault(),b.current=!1,N.current=!1}const V=Pu(P=>{!_.isPointerEventsEnabled||!m||(l==null||l(P),d==null||d(P),u&&K(P),!P.defaultPrevented&&g&&g())},D),j=Du(P=>{m&&(i==null||i(P),d==null||d(P),u&&K(P),!P.defaultPrevented&&g&&g())},D);Ku(P=>{!m||!(y===F.enabledCount()-1)||(s==null||s(P),!P.defaultPrevented&&g&&(P.preventDefault(),g()))},D),c.useEffect(()=>{if(!(!E||!m||!k))return hn===0&&(cl=D.body.style.pointerEvents,D.body.style.pointerEvents="none"),hn++,()=>{hn===1&&(D.body.style.pointerEvents=cl),hn--}},[E,D,k,F,m]),c.useEffect(()=>()=>F.values().forEach(P=>P.forceUpdate()),[F,E]);const I=t?Ea:"div";return v.createElement(I,Object.assign({ref:S},p,{onFocusCapture:j.onFocusCapture,onBlurCapture:j.onBlurCapture,onPointerDownCapture:V.onPointerDownCapture,style:Object.assign({pointerEvents:_.pointerStyle},p.style)}),n)});function ca(e,a,r){const n=ne(e,r==null?void 0:r.in);return isNaN(a)?ge((r==null?void 0:r.in)||e,NaN):(a&&n.setDate(n.getDate()+a),n)}function fs(e,a,r){const n=ne(e,r==null?void 0:r.in);if(isNaN(a))return ge(e,NaN);if(!a)return n;const t=n.getDate(),s=ge(e,n.getTime());s.setMonth(n.getMonth()+a+1,0);const l=s.getDate();return t>=l?s:(n.setFullYear(s.getFullYear(),s.getMonth(),t),n)}function Ua(e,a){const r=ne(e,a==null?void 0:a.in).getDay();return r===0||r===6}function cn(e,a){return qr(e,{...a,weekStartsOn:1})}function Ji(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getFullYear(),t=ge(r,0);t.setFullYear(n+1,0,4),t.setHours(0,0,0,0);const s=cn(t),l=ge(r,0);l.setFullYear(n,0,4),l.setHours(0,0,0,0);const i=cn(l);return r.getTime()>=s.getTime()?n+1:r.getTime()>=i.getTime()?n:n-1}function qa(e){const a=ne(e),r=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return r.setUTCFullYear(a.getFullYear()),+e-+r}function xr(e,a){const r=ne(e,a==null?void 0:a.in);return r.setHours(0,0,0,0),r}function Qr(e,a,r){const[n,t]=Bn(r==null?void 0:r.in,e,a),s=xr(n),l=xr(t),i=+s-qa(s),d=+l-qa(l);return Math.round((i-d)/Tu)}function Uu(e,a){const r=Ji(e,a),n=ge(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),cn(n)}function qu(e,a,r){return ca(e,a*7,r)}function As(e,a,r){return fs(e,a*12,r)}function xu(e,a){let r,n=a==null?void 0:a.in;return e.forEach(t=>{!n&&typeof t=="object"&&(n=ge.bind(null,t));const s=ne(t,n);(!r||r<s||isNaN(+s))&&(r=s)}),ge(n,r||NaN)}function Bu(e,a){let r,n=a==null?void 0:a.in;return e.forEach(t=>{!n&&typeof t=="object"&&(n=ge.bind(null,t));const s=ne(t,n);(!r||r>s||isNaN(+s))&&(r=s)}),ge(n,r||NaN)}function Rs(e,a,r){const[n,t]=Bn(r==null?void 0:r.in,e,a);return+xr(n)==+xr(t)}function Wi(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Hu(e){return!(!Wi(e)&&typeof e!="number"||isNaN(+ne(e)))}function Yu(e,a,r){const[n,t]=Bn(r==null?void 0:r.in,e,a),s=n.getFullYear()-t.getFullYear(),l=n.getMonth()-t.getMonth();return s*12+l}function zi(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Cu(e,a){const[r,n]=Bn(e,a.start,a.end);return{start:r,end:n}}function Xi(e,a){const{start:r,end:n}=Cu(a==null?void 0:a.in,e);let t=+r>+n;const s=t?+r:+n,l=t?n:r;l.setHours(0,0,0,0),l.setDate(1);let i=1;const d=[];for(;+l<=s;)d.push(ge(r,l)),l.setMonth(l.getMonth()+i);return t?d.reverse():d}function fn(e,a){const r=ne(e,a==null?void 0:a.in);return r.setDate(1),r.setHours(0,0,0,0),r}function ot(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getFullYear();return r.setFullYear(n+1,0,0),r.setHours(23,59,59,999),r}function fa(e,a){const r=ne(e,a==null?void 0:a.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Zi(e,a){var i,d,g,u;const r=bn(),n=(a==null?void 0:a.weekStartsOn)??((d=(i=a==null?void 0:a.locale)==null?void 0:i.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((u=(g=r.locale)==null?void 0:g.options)==null?void 0:u.weekStartsOn)??0,t=ne(e,a==null?void 0:a.in),s=t.getDay(),l=(s<n?-7:0)+6-(s-n);return t.setDate(t.getDate()+l),t.setHours(23,59,59,999),t}function $u(e,a){return Zi(e,{...a,weekStartsOn:1})}function Ju(e,a){const r=ne(e,a==null?void 0:a.in);return Qr(r,fa(r))+1}function Fs(e,a){const r=ne(e,a==null?void 0:a.in),n=+cn(r)-+Uu(r);return Math.round(n/Yi)+1}function bs(e,a){var u,k,m,p;const r=ne(e,a==null?void 0:a.in),n=r.getFullYear(),t=bn(),s=(a==null?void 0:a.firstWeekContainsDate)??((k=(u=a==null?void 0:a.locale)==null?void 0:u.options)==null?void 0:k.firstWeekContainsDate)??t.firstWeekContainsDate??((p=(m=t.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,l=ge((a==null?void 0:a.in)||e,0);l.setFullYear(n+1,0,s),l.setHours(0,0,0,0);const i=qr(l,a),d=ge((a==null?void 0:a.in)||e,0);d.setFullYear(n,0,s),d.setHours(0,0,0,0);const g=qr(d,a);return+r>=+i?n+1:+r>=+g?n:n-1}function Wu(e,a){var i,d,g,u;const r=bn(),n=(a==null?void 0:a.firstWeekContainsDate)??((d=(i=a==null?void 0:a.locale)==null?void 0:i.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((u=(g=r.locale)==null?void 0:g.options)==null?void 0:u.firstWeekContainsDate)??1,t=bs(e,a),s=ge((a==null?void 0:a.in)||e,0);return s.setFullYear(t,0,n),s.setHours(0,0,0,0),qr(s,a)}function Ns(e,a){const r=ne(e,a==null?void 0:a.in),n=+qr(r,a)-+Wu(r,a);return Math.round(n/Yi)+1}function ue(e,a){const r=e<0?"-":"",n=Math.abs(e).toString().padStart(a,"0");return r+n}const zr={y(e,a){const r=e.getFullYear(),n=r>0?r:1-r;return ue(a==="yy"?n%100:n,a.length)},M(e,a){const r=e.getMonth();return a==="M"?String(r+1):ue(r+1,2)},d(e,a){return ue(e.getDate(),a.length)},a(e,a){const r=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,a){return ue(e.getHours()%12||12,a.length)},H(e,a){return ue(e.getHours(),a.length)},m(e,a){return ue(e.getMinutes(),a.length)},s(e,a){return ue(e.getSeconds(),a.length)},S(e,a){const r=a.length,n=e.getMilliseconds(),t=Math.trunc(n*Math.pow(10,r-3));return ue(t,a.length)}},Kn={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Al={G:function(e,a,r){const n=e.getFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,a,r){if(a==="yo"){const n=e.getFullYear(),t=n>0?n:1-n;return r.ordinalNumber(t,{unit:"year"})}return zr.y(e,a)},Y:function(e,a,r,n){const t=bs(e,n),s=t>0?t:1-t;if(a==="YY"){const l=s%100;return ue(l,2)}return a==="Yo"?r.ordinalNumber(s,{unit:"year"}):ue(s,a.length)},R:function(e,a){const r=Ji(e);return ue(r,a.length)},u:function(e,a){const r=e.getFullYear();return ue(r,a.length)},Q:function(e,a,r){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return ue(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,a,r){const n=Math.ceil((e.getMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return ue(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,a,r){const n=e.getMonth();switch(a){case"M":case"MM":return zr.M(e,a);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,a,r){const n=e.getMonth();switch(a){case"L":return String(n+1);case"LL":return ue(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,a,r,n){const t=Ns(e,n);return a==="wo"?r.ordinalNumber(t,{unit:"week"}):ue(t,a.length)},I:function(e,a,r){const n=Fs(e);return a==="Io"?r.ordinalNumber(n,{unit:"week"}):ue(n,a.length)},d:function(e,a,r){return a==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):zr.d(e,a)},D:function(e,a,r){const n=Ju(e);return a==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):ue(n,a.length)},E:function(e,a,r){const n=e.getDay();switch(a){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,a,r,n){const t=e.getDay(),s=(t-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(s);case"ee":return ue(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(t,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(t,{width:"short",context:"formatting"});case"eeee":default:return r.day(t,{width:"wide",context:"formatting"})}},c:function(e,a,r,n){const t=e.getDay(),s=(t-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(s);case"cc":return ue(s,a.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(t,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(t,{width:"narrow",context:"standalone"});case"cccccc":return r.day(t,{width:"short",context:"standalone"});case"cccc":default:return r.day(t,{width:"wide",context:"standalone"})}},i:function(e,a,r){const n=e.getDay(),t=n===0?7:n;switch(a){case"i":return String(t);case"ii":return ue(t,a.length);case"io":return r.ordinalNumber(t,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,a,r){const t=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})}},b:function(e,a,r){const n=e.getHours();let t;switch(n===12?t=Kn.noon:n===0?t=Kn.midnight:t=n/12>=1?"pm":"am",a){case"b":case"bb":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})}},B:function(e,a,r){const n=e.getHours();let t;switch(n>=17?t=Kn.evening:n>=12?t=Kn.afternoon:n>=4?t=Kn.morning:t=Kn.night,a){case"B":case"BB":case"BBB":return r.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(t,{width:"wide",context:"formatting"})}},h:function(e,a,r){if(a==="ho"){let n=e.getHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return zr.h(e,a)},H:function(e,a,r){return a==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):zr.H(e,a)},K:function(e,a,r){const n=e.getHours()%12;return a==="Ko"?r.ordinalNumber(n,{unit:"hour"}):ue(n,a.length)},k:function(e,a,r){let n=e.getHours();return n===0&&(n=24),a==="ko"?r.ordinalNumber(n,{unit:"hour"}):ue(n,a.length)},m:function(e,a,r){return a==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):zr.m(e,a)},s:function(e,a,r){return a==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):zr.s(e,a)},S:function(e,a){return zr.S(e,a)},X:function(e,a,r){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(a){case"X":return Fl(n);case"XXXX":case"XX":return vn(n);case"XXXXX":case"XXX":default:return vn(n,":")}},x:function(e,a,r){const n=e.getTimezoneOffset();switch(a){case"x":return Fl(n);case"xxxx":case"xx":return vn(n);case"xxxxx":case"xxx":default:return vn(n,":")}},O:function(e,a,r){const n=e.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+Rl(n,":");case"OOOO":default:return"GMT"+vn(n,":")}},z:function(e,a,r){const n=e.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+Rl(n,":");case"zzzz":default:return"GMT"+vn(n,":")}},t:function(e,a,r){const n=Math.trunc(+e/1e3);return ue(n,a.length)},T:function(e,a,r){return ue(+e,a.length)}};function Rl(e,a=""){const r=e>0?"-":"+",n=Math.abs(e),t=Math.trunc(n/60),s=n%60;return s===0?r+String(t):r+String(t)+a+ue(s,2)}function Fl(e,a){return e%60===0?(e>0?"-":"+")+ue(Math.abs(e)/60,2):vn(e,a)}function vn(e,a=""){const r=e>0?"-":"+",n=Math.abs(e),t=ue(Math.trunc(n/60),2),s=ue(n%60,2);return r+t+a+s}const bl=(e,a)=>{switch(e){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}},Qi=(e,a)=>{switch(e){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}},zu=(e,a)=>{const r=e.match(/(P+)(p+)?/)||[],n=r[1],t=r[2];if(!t)return bl(e,a);let s;switch(n){case"P":s=a.dateTime({width:"short"});break;case"PP":s=a.dateTime({width:"medium"});break;case"PPP":s=a.dateTime({width:"long"});break;case"PPPP":default:s=a.dateTime({width:"full"});break}return s.replace("{{date}}",bl(n,a)).replace("{{time}}",Qi(t,a))},Xt={p:Qi,P:zu},Xu=/^D+$/,Zu=/^Y+$/,Qu=["D","DD","YY","YYYY"];function eo(e){return Xu.test(e)}function ro(e){return Zu.test(e)}function Zt(e,a,r){const n=ek(e,a,r);if(console.warn(n),Qu.includes(e))throw new RangeError(n)}function ek(e,a,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${a}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const rk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ak=/^'([^]*?)'?$/,tk=/''/g,sk=/[a-zA-Z]/;function An(e,a,r){var u,k,m,p,f,A,y,F;const n=bn(),t=(r==null?void 0:r.locale)??n.locale??it,s=(r==null?void 0:r.firstWeekContainsDate)??((k=(u=r==null?void 0:r.locale)==null?void 0:u.options)==null?void 0:k.firstWeekContainsDate)??n.firstWeekContainsDate??((p=(m=n.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,l=(r==null?void 0:r.weekStartsOn)??((A=(f=r==null?void 0:r.locale)==null?void 0:f.options)==null?void 0:A.weekStartsOn)??n.weekStartsOn??((F=(y=n.locale)==null?void 0:y.options)==null?void 0:F.weekStartsOn)??0,i=ne(e,r==null?void 0:r.in);if(!Hu(i))throw new RangeError("Invalid time value");let d=a.match(nk).map(E=>{const R=E[0];if(R==="p"||R==="P"){const S=Xt[R];return S(E,t.formatLong)}return E}).join("").match(rk).map(E=>{if(E==="''")return{isToken:!1,value:"'"};const R=E[0];if(R==="'")return{isToken:!1,value:lk(E)};if(Al[R])return{isToken:!0,value:E};if(R.match(sk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return{isToken:!1,value:E}});t.localize.preprocessor&&(d=t.localize.preprocessor(i,d));const g={firstWeekContainsDate:s,weekStartsOn:l,locale:t};return d.map(E=>{if(!E.isToken)return E.value;const R=E.value;(!(r!=null&&r.useAdditionalWeekYearTokens)&&ro(R)||!(r!=null&&r.useAdditionalDayOfYearTokens)&&eo(R))&&Zt(R,a,String(e));const S=Al[R[0]];return S(i,R,t.localize,g)}).join("")}function lk(e){const a=e.match(ak);return a?a[1].replace(tk,"'"):e}function ik(e,a){const r=ne(e,a==null?void 0:a.in),n=r.getFullYear(),t=r.getMonth(),s=ge(r,0);return s.setFullYear(n,t+1,0),s.setHours(0,0,0,0),s.getDate()}function ok(){return Object.assign({},bn())}function dk(e,a){const r=ne(e,a==null?void 0:a.in).getDay();return r===0?7:r}function Os(e,a){return ne(e,a==null?void 0:a.in).getMonth()}function _s(e,a){return ne(e,a==null?void 0:a.in).getFullYear()}function no(e,a){return+ne(e)>+ne(a)}function Aa(e,a){return+ne(e)<+ne(a)}function uk(e,a){const r=kk(a)?new a(0):ge(a,0);return r.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),r.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),r}function kk(e){var a;return typeof e=="function"&&((a=e.prototype)==null?void 0:a.constructor)===e}const gk=10;class ao{constructor(){U(this,"subPriority",0)}validate(a,r){return!0}}class vk extends ao{constructor(a,r,n,t,s){super(),this.value=a,this.validateValue=r,this.setValue=n,this.priority=t,s&&(this.subPriority=s)}validate(a,r){return this.validateValue(a,this.value,r)}set(a,r,n){return this.setValue(a,r,this.value,n)}}class mk extends ao{constructor(r,n){super();U(this,"priority",gk);U(this,"subPriority",-1);this.context=r||(t=>ge(n,t))}set(r,n){return n.timestampIsSet?r:ge(r,uk(r,this.context))}}class le{run(a,r,n,t){const s=this.parse(a,r,n,t);return s?{setter:new vk(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(a,r,n){return!0}}class pk extends le{constructor(){super(...arguments);U(this,"priority",140);U(this,"incompatibleTokens",["R","u","t","T"])}parse(r,n,t){switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"})||t.era(r,{width:"narrow"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})||t.era(r,{width:"abbreviated"})||t.era(r,{width:"narrow"})}}set(r,n,t){return n.era=t,r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}}const _e={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Or={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Se(e,a){return e&&{value:a(e.value),rest:e.rest}}function Re(e,a){const r=a.match(e);return r?{value:parseInt(r[0],10),rest:a.slice(r[0].length)}:null}function _r(e,a){const r=a.match(e);if(!r)return null;if(r[0]==="Z")return{value:0,rest:a.slice(1)};const n=r[1]==="+"?1:-1,t=r[2]?parseInt(r[2],10):0,s=r[3]?parseInt(r[3],10):0,l=r[5]?parseInt(r[5],10):0;return{value:n*(t*fu+s*cu+l*Au),rest:a.slice(r[0].length)}}function to(e){return Re(_e.anyDigitsSigned,e)}function Ne(e,a){switch(e){case 1:return Re(_e.singleDigit,a);case 2:return Re(_e.twoDigits,a);case 3:return Re(_e.threeDigits,a);case 4:return Re(_e.fourDigits,a);default:return Re(new RegExp("^\\d{1,"+e+"}"),a)}}function xa(e,a){switch(e){case 1:return Re(_e.singleDigitSigned,a);case 2:return Re(_e.twoDigitsSigned,a);case 3:return Re(_e.threeDigitsSigned,a);case 4:return Re(_e.fourDigitsSigned,a);default:return Re(new RegExp("^-?\\d{1,"+e+"}"),a)}}function Ss(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function so(e,a){const r=a>0,n=r?a:1-a;let t;if(n<=50)t=e||100;else{const s=n+50,l=Math.trunc(s/100)*100,i=e>=s%100;t=e+l-(i?100:0)}return r?t:1-t}function lo(e){return e%400===0||e%4===0&&e%100!==0}class Ek extends le{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(r,n,t){const s=l=>({year:l,isTwoDigitYear:n==="yy"});switch(n){case"y":return Se(Ne(4,r),s);case"yo":return Se(t.ordinalNumber(r,{unit:"year"}),s);default:return Se(Ne(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,t){const s=r.getFullYear();if(t.isTwoDigitYear){const i=so(t.year,s);return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}const l=!("era"in n)||n.era===1?t.year:1-t.year;return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}}class yk extends le{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(r,n,t){const s=l=>({year:l,isTwoDigitYear:n==="YY"});switch(n){case"Y":return Se(Ne(4,r),s);case"Yo":return Se(t.ordinalNumber(r,{unit:"year"}),s);default:return Se(Ne(n.length,r),s)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,t,s){const l=bs(r,s);if(t.isTwoDigitYear){const d=so(t.year,l);return r.setFullYear(d,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),qr(r,s)}const i=!("era"in n)||n.era===1?t.year:1-t.year;return r.setFullYear(i,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),qr(r,s)}}class Tk extends le{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(r,n){return xa(n==="R"?4:n.length,r)}set(r,n,t){const s=ge(r,0);return s.setFullYear(t,0,4),s.setHours(0,0,0,0),cn(s)}}class ck extends le{constructor(){super(...arguments);U(this,"priority",130);U(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(r,n){return xa(n==="u"?4:n.length,r)}set(r,n,t){return r.setFullYear(t,0,1),r.setHours(0,0,0,0),r}}class fk extends le{constructor(){super(...arguments);U(this,"priority",120);U(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"Q":case"QQ":return Ne(n.length,r);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"})||t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})||t.quarter(r,{width:"abbreviated",context:"formatting"})||t.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,t){return r.setMonth((t-1)*3,1),r.setHours(0,0,0,0),r}}class Ak extends le{constructor(){super(...arguments);U(this,"priority",120);U(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"q":case"qq":return Ne(n.length,r);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"})||t.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})||t.quarter(r,{width:"abbreviated",context:"standalone"})||t.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,t){return r.setMonth((t-1)*3,1),r.setHours(0,0,0,0),r}}class Rk extends le{constructor(){super(...arguments);U(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);U(this,"priority",110)}parse(r,n,t){const s=l=>l-1;switch(n){case"M":return Se(Re(_e.month,r),s);case"MM":return Se(Ne(2,r),s);case"Mo":return Se(t.ordinalNumber(r,{unit:"month"}),s);case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"})||t.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})||t.month(r,{width:"abbreviated",context:"formatting"})||t.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,t){return r.setMonth(t,1),r.setHours(0,0,0,0),r}}class Fk extends le{constructor(){super(...arguments);U(this,"priority",110);U(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(r,n,t){const s=l=>l-1;switch(n){case"L":return Se(Re(_e.month,r),s);case"LL":return Se(Ne(2,r),s);case"Lo":return Se(t.ordinalNumber(r,{unit:"month"}),s);case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"})||t.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})||t.month(r,{width:"abbreviated",context:"standalone"})||t.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,t){return r.setMonth(t,1),r.setHours(0,0,0,0),r}}function bk(e,a,r){const n=ne(e,r==null?void 0:r.in),t=Ns(n,r)-a;return n.setDate(n.getDate()-t*7),ne(n,r==null?void 0:r.in)}class Nk extends le{constructor(){super(...arguments);U(this,"priority",100);U(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(r,n,t){switch(n){case"w":return Re(_e.week,r);case"wo":return t.ordinalNumber(r,{unit:"week"});default:return Ne(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,t,s){return qr(bk(r,t,s),s)}}function Ok(e,a,r){const n=ne(e,r==null?void 0:r.in),t=Fs(n,r)-a;return n.setDate(n.getDate()-t*7),n}class _k extends le{constructor(){super(...arguments);U(this,"priority",100);U(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(r,n,t){switch(n){case"I":return Re(_e.week,r);case"Io":return t.ordinalNumber(r,{unit:"week"});default:return Ne(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,t){return cn(Ok(r,t))}}const Sk=[31,28,31,30,31,30,31,31,30,31,30,31],hk=[31,29,31,30,31,30,31,31,30,31,30,31];class Kk extends le{constructor(){super(...arguments);U(this,"priority",90);U(this,"subPriority",1);U(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"d":return Re(_e.date,r);case"do":return t.ordinalNumber(r,{unit:"date"});default:return Ne(n.length,r)}}validate(r,n){const t=r.getFullYear(),s=lo(t),l=r.getMonth();return s?n>=1&&n<=hk[l]:n>=1&&n<=Sk[l]}set(r,n,t){return r.setDate(t),r.setHours(0,0,0,0),r}}class Dk extends le{constructor(){super(...arguments);U(this,"priority",90);U(this,"subpriority",1);U(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(r,n,t){switch(n){case"D":case"DD":return Re(_e.dayOfYear,r);case"Do":return t.ordinalNumber(r,{unit:"date"});default:return Ne(n.length,r)}}validate(r,n){const t=r.getFullYear();return lo(t)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,t){return r.setMonth(0,t),r.setHours(0,0,0,0),r}}function hs(e,a,r){var k,m,p,f;const n=bn(),t=(r==null?void 0:r.weekStartsOn)??((m=(k=r==null?void 0:r.locale)==null?void 0:k.options)==null?void 0:m.weekStartsOn)??n.weekStartsOn??((f=(p=n.locale)==null?void 0:p.options)==null?void 0:f.weekStartsOn)??0,s=ne(e,r==null?void 0:r.in),l=s.getDay(),d=(a%7+7)%7,g=7-t,u=a<0||a>6?a-(l+g)%7:(d+g)%7-(l+g)%7;return ca(s,u,r)}class Pk extends le{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(r,n,t){switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})||t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,t,s){return r=hs(r,t,s),r.setHours(0,0,0,0),r}}class Ik extends le{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(r,n,t,s){const l=i=>{const d=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+d};switch(n){case"e":case"ee":return Se(Ne(n.length,r),l);case"eo":return Se(t.ordinalNumber(r,{unit:"day"}),l);case"eee":return t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})||t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,t,s){return r=hs(r,t,s),r.setHours(0,0,0,0),r}}class Lk extends le{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(r,n,t,s){const l=i=>{const d=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+d};switch(n){case"c":case"cc":return Se(Ne(n.length,r),l);case"co":return Se(t.ordinalNumber(r,{unit:"day"}),l);case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"})||t.day(r,{width:"short",context:"standalone"})||t.day(r,{width:"narrow",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"})||t.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})||t.day(r,{width:"abbreviated",context:"standalone"})||t.day(r,{width:"short",context:"standalone"})||t.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,t,s){return r=hs(r,t,s),r.setHours(0,0,0,0),r}}function Mk(e,a,r){const n=ne(e,r==null?void 0:r.in),t=dk(n,r),s=a-t;return ca(n,s,r)}class wk extends le{constructor(){super(...arguments);U(this,"priority",90);U(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(r,n,t){const s=l=>l===0?7:l;switch(n){case"i":case"ii":return Ne(n.length,r);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return Se(t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"}),s);case"iiiii":return Se(t.day(r,{width:"narrow",context:"formatting"}),s);case"iiiiii":return Se(t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"}),s);case"iiii":default:return Se(t.day(r,{width:"wide",context:"formatting"})||t.day(r,{width:"abbreviated",context:"formatting"})||t.day(r,{width:"short",context:"formatting"})||t.day(r,{width:"narrow",context:"formatting"}),s)}}validate(r,n){return n>=1&&n<=7}set(r,n,t){return r=Mk(r,t),r.setHours(0,0,0,0),r}}class Vk extends le{constructor(){super(...arguments);U(this,"priority",80);U(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(r,n,t){switch(n){case"a":case"aa":case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})||t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,t){return r.setHours(Ss(t),0,0,0),r}}class jk extends le{constructor(){super(...arguments);U(this,"priority",80);U(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(r,n,t){switch(n){case"b":case"bb":case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})||t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,t){return r.setHours(Ss(t),0,0,0),r}}class Gk extends le{constructor(){super(...arguments);U(this,"priority",80);U(this,"incompatibleTokens",["a","b","t","T"])}parse(r,n,t){switch(n){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})||t.dayPeriod(r,{width:"abbreviated",context:"formatting"})||t.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,t){return r.setHours(Ss(t),0,0,0),r}}class Uk extends le{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["H","K","k","t","T"])}parse(r,n,t){switch(n){case"h":return Re(_e.hour12h,r);case"ho":return t.ordinalNumber(r,{unit:"hour"});default:return Ne(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,t){const s=r.getHours()>=12;return s&&t<12?r.setHours(t+12,0,0,0):!s&&t===12?r.setHours(0,0,0,0):r.setHours(t,0,0,0),r}}class qk extends le{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(r,n,t){switch(n){case"H":return Re(_e.hour23h,r);case"Ho":return t.ordinalNumber(r,{unit:"hour"});default:return Ne(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,t){return r.setHours(t,0,0,0),r}}class xk extends le{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["h","H","k","t","T"])}parse(r,n,t){switch(n){case"K":return Re(_e.hour11h,r);case"Ko":return t.ordinalNumber(r,{unit:"hour"});default:return Ne(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,t){return r.getHours()>=12&&t<12?r.setHours(t+12,0,0,0):r.setHours(t,0,0,0),r}}class Bk extends le{constructor(){super(...arguments);U(this,"priority",70);U(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(r,n,t){switch(n){case"k":return Re(_e.hour24h,r);case"ko":return t.ordinalNumber(r,{unit:"hour"});default:return Ne(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,t){const s=t<=24?t%24:t;return r.setHours(s,0,0,0),r}}class Hk extends le{constructor(){super(...arguments);U(this,"priority",60);U(this,"incompatibleTokens",["t","T"])}parse(r,n,t){switch(n){case"m":return Re(_e.minute,r);case"mo":return t.ordinalNumber(r,{unit:"minute"});default:return Ne(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,t){return r.setMinutes(t,0,0),r}}class Yk extends le{constructor(){super(...arguments);U(this,"priority",50);U(this,"incompatibleTokens",["t","T"])}parse(r,n,t){switch(n){case"s":return Re(_e.second,r);case"so":return t.ordinalNumber(r,{unit:"second"});default:return Ne(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,t){return r.setSeconds(t,0),r}}class Ck extends le{constructor(){super(...arguments);U(this,"priority",30);U(this,"incompatibleTokens",["t","T"])}parse(r,n){const t=s=>Math.trunc(s*Math.pow(10,-n.length+3));return Se(Ne(n.length,r),t)}set(r,n,t){return r.setMilliseconds(t),r}}class $k extends le{constructor(){super(...arguments);U(this,"priority",10);U(this,"incompatibleTokens",["t","T","x"])}parse(r,n){switch(n){case"X":return _r(Or.basicOptionalMinutes,r);case"XX":return _r(Or.basic,r);case"XXXX":return _r(Or.basicOptionalSeconds,r);case"XXXXX":return _r(Or.extendedOptionalSeconds,r);case"XXX":default:return _r(Or.extended,r)}}set(r,n,t){return n.timestampIsSet?r:ge(r,r.getTime()-qa(r)-t)}}class Jk extends le{constructor(){super(...arguments);U(this,"priority",10);U(this,"incompatibleTokens",["t","T","X"])}parse(r,n){switch(n){case"x":return _r(Or.basicOptionalMinutes,r);case"xx":return _r(Or.basic,r);case"xxxx":return _r(Or.basicOptionalSeconds,r);case"xxxxx":return _r(Or.extendedOptionalSeconds,r);case"xxx":default:return _r(Or.extended,r)}}set(r,n,t){return n.timestampIsSet?r:ge(r,r.getTime()-qa(r)-t)}}class Wk extends le{constructor(){super(...arguments);U(this,"priority",40);U(this,"incompatibleTokens","*")}parse(r){return to(r)}set(r,n,t){return[ge(r,t*1e3),{timestampIsSet:!0}]}}class zk extends le{constructor(){super(...arguments);U(this,"priority",20);U(this,"incompatibleTokens","*")}parse(r){return to(r)}set(r,n,t){return[ge(r,t),{timestampIsSet:!0}]}}const Xk={G:new pk,y:new Ek,Y:new yk,R:new Tk,u:new ck,Q:new fk,q:new Ak,M:new Rk,L:new Fk,w:new Nk,I:new _k,d:new Kk,D:new Dk,E:new Pk,e:new Ik,c:new Lk,i:new wk,a:new Vk,b:new jk,B:new Gk,h:new Uk,H:new qk,K:new xk,k:new Bk,m:new Hk,s:new Yk,S:new Ck,X:new $k,x:new Jk,t:new Wk,T:new zk},Zk=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,eg=/^'([^]*?)'?$/,rg=/''/g,ng=/\S/,ag=/[a-zA-Z]/;function Vn(e,a,r,n){var y,F,E,R,S,D,N,b;const t=()=>ge((n==null?void 0:n.in)||r,NaN),s=ok(),l=(n==null?void 0:n.locale)??s.locale??it,i=(n==null?void 0:n.firstWeekContainsDate)??((F=(y=n==null?void 0:n.locale)==null?void 0:y.options)==null?void 0:F.firstWeekContainsDate)??s.firstWeekContainsDate??((R=(E=s.locale)==null?void 0:E.options)==null?void 0:R.firstWeekContainsDate)??1,d=(n==null?void 0:n.weekStartsOn)??((D=(S=n==null?void 0:n.locale)==null?void 0:S.options)==null?void 0:D.weekStartsOn)??s.weekStartsOn??((b=(N=s.locale)==null?void 0:N.options)==null?void 0:b.weekStartsOn)??0;if(!a)return e?t():ne(r,n==null?void 0:n.in);const g={firstWeekContainsDate:i,weekStartsOn:d,locale:l},u=[new mk(n==null?void 0:n.in,r)],k=a.match(Qk).map(_=>{const K=_[0];if(K in Xt){const V=Xt[K];return V(_,l.formatLong)}return _}).join("").match(Zk),m=[];for(let _ of k){!(n!=null&&n.useAdditionalWeekYearTokens)&&ro(_)&&Zt(_,a,e),!(n!=null&&n.useAdditionalDayOfYearTokens)&&eo(_)&&Zt(_,a,e);const K=_[0],V=Xk[K];if(V){const{incompatibleTokens:j}=V;if(Array.isArray(j)){const P=m.find(H=>j.includes(H.token)||H.token===K);if(P)throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${_}\` at the same time`)}else if(V.incompatibleTokens==="*"&&m.length>0)throw new RangeError(`The format string mustn't contain \`${_}\` and any other token at the same time`);m.push({token:K,fullToken:_});const I=V.run(e,_,l.match,g);if(!I)return t();u.push(I.setter),e=I.rest}else{if(K.match(ag))throw new RangeError("Format string contains an unescaped latin alphabet character `"+K+"`");if(_==="''"?_="'":K==="'"&&(_=tg(_)),e.indexOf(_)===0)e=e.slice(_.length);else return t()}}if(e.length>0&&ng.test(e))return t();const p=u.map(_=>_.priority).sort((_,K)=>K-_).filter((_,K,V)=>V.indexOf(_)===K).map(_=>u.filter(K=>K.priority===_).sort((K,V)=>V.subPriority-K.subPriority)).map(_=>_[0]);let f=ne(r,n==null?void 0:n.in);if(isNaN(+f))return t();const A={};for(const _ of p){if(!_.validate(f,g))return t();const K=_.set(f,A,g);Array.isArray(K)?(f=K[0],Object.assign(A,K[1])):f=K}return f}function tg(e){return e.match(eg)[1].replace(rg,"'")}function sg(e,a,r){const[n,t]=Bn(r==null?void 0:r.in,e,a);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()}function io(e,a,r){const[n,t]=Bn(r==null?void 0:r.in,e,a);return n.getFullYear()===t.getFullYear()}function lg(e,a,r){return ca(e,-a,r)}function oo(e,a,r){const n=ne(e,r==null?void 0:r.in),t=n.getFullYear(),s=n.getDate(),l=ge(e,0);l.setFullYear(t,a,15),l.setHours(0,0,0,0);const i=ik(l);return n.setMonth(a,Math.min(s,i)),n}function uo(e,a,r){const n=ne(e,r==null?void 0:r.in);return isNaN(+n)?ge(e,NaN):(n.setFullYear(a),n)}function ig(e,a,r){return fs(e,-a,r)}function og(e,a,r){const{years:n=0,months:t=0,weeks:s=0,days:l=0,hours:i=0,minutes:d=0,seconds:g=0}=a,u=ig(e,t+n*12,r),k=lg(u,l+s*7,r),m=d+i*60,f=(g+m*60)*1e3;return ge(e,+k-f)}var dg=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ug=c.forwardRef((e,a)=>{var{className:r}=e,n=dg(e,["className"]);const{cn:t}=se();return v.createElement("div",Object.assign({},n,{ref:a,className:t("navds-popover__content",r)}))});var kg=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ko=c.forwardRef((e,a)=>{var{className:r,children:n,anchorEl:t,arrow:s=!0,open:l,onClose:i,placement:d="top",offset:g,strategy:u,flip:k=!0}=e,m=kg(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:p}=se(),f=c.useRef(null),A=Mi(!1)!==void 0,y=Md(!1),F=u??(A?"fixed":"absolute"),E=y?!1:k,R=gs(!1),{update:S,refs:D,placement:N,middlewareData:{arrow:{x:b,y:_}={}},floatingStyles:K}=wd({strategy:F,placement:d,open:l,middleware:[jd(g??(R?8:s?16:4)),E&&Gd({padding:5,fallbackPlacements:["bottom","top"]}),Ud({padding:12}),qd({element:f,padding:8})]});Un(()=>{D.setReference(t)},[t]);const V=rt(D.setFloating,a);Un(()=>{if(!D.reference.current||!D.floating.current||!l)return;const I=Vd(D.reference.current,D.floating.current,S);return()=>I()},[D.floating,D.reference,S,l,t]);const j={top:"bottom",right:"left",bottom:"top",left:"right"}[N.split("-")[0]];return v.createElement(ju,{asChild:!0,safeZone:{anchor:t,dismissable:D.floating.current},onDismiss:()=>l&&(i==null?void 0:i()),enabled:l},v.createElement("div",Object.assign({ref:V},m,{className:p("navds-popover",r,{"navds-popover--hidden":!l||!t}),style:Object.assign(Object.assign({},m.style),K),"data-placement":N,"aria-hidden":!l||!t}),n,s&&!R&&v.createElement("div",{ref:I=>{f.current=I},style:Object.assign(Object.assign(Object.assign({},b!=null?{left:b}:{}),_!=null?{top:_}:{}),j?{[j]:"-0.5rem"}:{}),className:p("navds-popover__arrow")})))});ko.Content=ug;const gg={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},vg=({open:e,children:a,onClose:r,anchor:n,locale:t,translate:s,variant:l,popoverProps:i})=>{const d=ya("global",xd(t)),{cn:g}=se(),u=c.useRef(null),k=Mi(!1)!==void 0;return yu("screen and (min-width: 768px)",!0)&&!k?v.createElement(ko,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:r,placement:"bottom-start",role:"dialog",className:g("navds-date__popover",{"navds-date":l==="month"}),flip:!1},i),a):v.createElement(Bd,{ref:u,open:e,onClose:p=>{p.stopPropagation(),r()},"aria-label":s(gg[l]),className:g("navds-date__modal",{"navds-date__nested-modal":k,"navds-date":l==="month"}),closeOnBackdropClick:!0,placement:"top"},v.createElement("div",{className:g("navds-date__modal-body")},a,v.createElement(We,{variant:"tertiary",onClick:()=>{var p;return(p=u==null?void 0:u.current)===null||p===void 0?void 0:p.close()},size:"small",type:"button"},d("close"))))};function go(e){return!!(e&&typeof e=="object"&&"from"in e)}var J;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(J||(J={}));var Ee;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ee||(Ee={}));var Tr;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Tr||(Tr={}));var dr;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(dr||(dr={}));const Pt={},oa={};function ga(e,a){try{const n=(Pt[e]||(Pt[e]=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format))(a).split("GMT")[1]||"";return n in oa?oa[n]:Nl(n,n.split(":"))}catch{if(e in oa)return oa[e];const r=e==null?void 0:e.match(mg);return r?Nl(e,r.slice(1)):NaN}}const mg=/([+-]\d\d):?(\d\d)?/;function Nl(e,a){const r=+a[0],n=+(a[1]||0);return oa[e]=r>0?r*60+n:r*60-n}class hr extends Date{constructor(...a){super(),a.length>1&&typeof a[a.length-1]=="string"&&(this.timeZone=a.pop()),this.internal=new Date,isNaN(ga(this.timeZone,this))?this.setTime(NaN):a.length?typeof a[0]=="number"&&(a.length===1||a.length===2&&typeof a[1]!="number")?this.setTime(a[0]):typeof a[0]=="string"?this.setTime(+new Date(a[0])):a[0]instanceof Date?this.setTime(+a[0]):(this.setTime(+new Date(...a)),vo(this),Qt(this)):this.setTime(Date.now())}static tz(a,...r){return r.length?new hr(...r,a):new hr(Date.now(),a)}withTimeZone(a){return new hr(+this,a)}getTimezoneOffset(){return-ga(this.timeZone,this)}setTime(a){return Date.prototype.setTime.apply(this,arguments),Qt(this),+this}[Symbol.for("constructDateFrom")](a){return new hr(+new Date(a),this.timeZone)}}const Ol=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Ol.test(e))return;const a=e.replace(Ol,"$1UTC");hr.prototype[a]&&(e.startsWith("get")?hr.prototype[e]=function(){return this.internal[a]()}:(hr.prototype[e]=function(){return Date.prototype[a].apply(this.internal,arguments),pg(this),+this},hr.prototype[a]=function(){return Date.prototype[a].apply(this,arguments),Qt(this),+this}))});function Qt(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function pg(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),vo(e)}function vo(e){const a=ga(e.timeZone,e),r=new Date(+e);r.setUTCHours(r.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),t=-new Date(+r).getTimezoneOffset(),s=n-t,l=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&l&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const i=n-a;i&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+i);const d=ga(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-d,k=d!==a,m=u-i;if(k&&m){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+m);const p=ga(e.timeZone,e),f=d-p;f&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+f),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+f))}}class En extends hr{static tz(a,...r){return r.length?new En(...r,a):new En(Date.now(),a)}toISOString(){const[a,r,n]=this.tzComponents(),t=`${a}${r}:${n}`;return this.internal.toISOString().slice(0,-1)+t}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[a,r,n,t]=this.internal.toUTCString().split(" ");return`${a==null?void 0:a.slice(0,-1)} ${n} ${r} ${t}`}toTimeString(){const a=this.internal.toUTCString().split(" ")[4],[r,n,t]=this.tzComponents();return`${a} GMT${r}${n}${t} (${Eg(this.timeZone,this)})`}toLocaleString(a,r){return Date.prototype.toLocaleString.call(this,a,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleDateString(a,r){return Date.prototype.toLocaleDateString.call(this,a,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}toLocaleTimeString(a,r){return Date.prototype.toLocaleTimeString.call(this,a,{...r,timeZone:(r==null?void 0:r.timeZone)||this.timeZone})}tzComponents(){const a=this.getTimezoneOffset(),r=a>0?"-":"+",n=String(Math.floor(Math.abs(a)/60)).padStart(2,"0"),t=String(Math.abs(a)%60).padStart(2,"0");return[r,n,t]}withTimeZone(a){return new En(+this,a)}[Symbol.for("constructDateFrom")](a){return new En(+new Date(a),this.timeZone)}}function Eg(e,a){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(a).slice(12)}const _l=5,yg=4;function Tg(e,a){const r=a.startOfMonth(e),n=r.getDay()>0?r.getDay():7,t=a.addDays(e,-n+1),s=a.addDays(t,_l*7-1);return a.getMonth(e)===a.getMonth(s)?_l:yg}function mo(e,a){const r=a.startOfMonth(e),n=r.getDay();return n===1?r:n===0?a.addDays(r,-1*6):a.addDays(r,-1*(n-1))}function cg(e,a){const r=mo(e,a),n=Tg(e,a);return a.addDays(r,n*7-1)}class Hr{constructor(a,r){this.Date=Date,this.today=()=>{var n;return(n=this.overrides)!=null&&n.today?this.overrides.today():this.options.timeZone?En.tz(this.options.timeZone):new this.Date},this.newDate=(n,t,s)=>{var l;return(l=this.overrides)!=null&&l.newDate?this.overrides.newDate(n,t,s):this.options.timeZone?new En(n,t,s,this.options.timeZone):new Date(n,t,s)},this.addDays=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.addDays)==null?void 0:l.call(s,n,t))??ca(n,t)},this.addMonths=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.addMonths)==null?void 0:l.call(s,n,t))??fs(n,t)},this.addWeeks=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.addWeeks)==null?void 0:l.call(s,n,t))??qu(n,t)},this.addYears=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.addYears)==null?void 0:l.call(s,n,t))??As(n,t)},this.differenceInCalendarDays=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.differenceInCalendarDays)==null?void 0:l.call(s,n,t))??Qr(n,t)},this.differenceInCalendarMonths=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.differenceInCalendarMonths)==null?void 0:l.call(s,n,t))??Yu(n,t)},this.eachMonthOfInterval=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.eachMonthOfInterval)==null?void 0:s.call(t,n))??Xi(n)},this.endOfBroadcastWeek=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.endOfBroadcastWeek)==null?void 0:l.call(s,n,t))??cg(n,this)},this.endOfISOWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.endOfISOWeek)==null?void 0:s.call(t,n))??$u(n)},this.endOfMonth=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.endOfMonth)==null?void 0:s.call(t,n))??zi(n)},this.endOfWeek=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.endOfWeek)==null?void 0:l.call(s,n,t??this.options))??Zi(n,t??this.options)},this.endOfYear=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.endOfYear)==null?void 0:s.call(t,n))??ot(n)},this.format=(n,t,s)=>{var i,d;const l=((d=(i=this.overrides)==null?void 0:i.format)==null?void 0:d.call(i,n,t,s??this.options))??An(n,t,s??this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(l):l},this.getISOWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.getISOWeek)==null?void 0:s.call(t,n))??Fs(n)},this.getMonth=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.getMonth)==null?void 0:s.call(t,n))??Os(n)},this.getYear=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.getYear)==null?void 0:s.call(t,n))??_s(n)},this.getWeek=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.getWeek)==null?void 0:l.call(s,n,t??this.options))??Ns(n,t??this.options)},this.isAfter=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.isAfter)==null?void 0:l.call(s,n,t))??no(n,t)},this.isBefore=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.isBefore)==null?void 0:l.call(s,n,t))??Aa(n,t)},this.isDate=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.isDate)==null?void 0:s.call(t,n))??Wi(n)},this.isSameDay=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.isSameDay)==null?void 0:l.call(s,n,t))??Rs(n,t)},this.isSameMonth=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.isSameMonth)==null?void 0:l.call(s,n,t))??sg(n,t)},this.isSameYear=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.isSameYear)==null?void 0:l.call(s,n,t))??io(n,t)},this.max=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.max)==null?void 0:s.call(t,n))??xu(n)},this.min=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.min)==null?void 0:s.call(t,n))??Bu(n)},this.setMonth=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.setMonth)==null?void 0:l.call(s,n,t))??oo(n,t)},this.setYear=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.setYear)==null?void 0:l.call(s,n,t))??uo(n,t)},this.startOfBroadcastWeek=(n,t)=>{var s,l;return((l=(s=this.overrides)==null?void 0:s.startOfBroadcastWeek)==null?void 0:l.call(s,n,t??this))??mo(n,t??this)},this.startOfDay=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfDay)==null?void 0:s.call(t,n))??xr(n)},this.startOfISOWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfISOWeek)==null?void 0:s.call(t,n))??cn(n)},this.startOfMonth=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfMonth)==null?void 0:s.call(t,n))??fn(n)},this.startOfWeek=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfWeek)==null?void 0:s.call(t,n))??qr(n,this.options)},this.startOfYear=n=>{var t,s;return((s=(t=this.overrides)==null?void 0:t.startOfYear)==null?void 0:s.call(t,n))??fa(n)},this.options={locale:it,...a},this.overrides=r}getDigitMap(){const{numerals:a="latn"}=this.options,r=new Intl.NumberFormat("en-US",{numberingSystem:a}),n={};for(let t=0;t<10;t++)n[t.toString()]=r.format(t);return n}replaceDigits(a){const r=this.getDigitMap();return a.replace(/\d/g,n=>r[n]||n)}formatNumber(a){return this.replaceDigits(a.toString())}}const Yr=new Hr;function fg(e,a,r={}){return Object.entries(e).filter(([,t])=>t===!0).reduce((t,[s])=>(r[s]?t.push(r[s]):a[Ee[s]]?t.push(a[Ee[s]]):a[Tr[s]]&&t.push(a[Tr[s]]),t),[a[J.Day]])}function Ag(e){return v.createElement("button",{...e})}function Rg(e){return v.createElement("span",{...e})}function Fg(e){const{size:a=24,orientation:r="left",className:n}=e;return v.createElement("svg",{className:n,width:a,height:a,viewBox:"0 0 24 24"},r==="up"&&v.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&v.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&v.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&v.createElement("polygon",{points:"8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"}))}function bg(e){const{day:a,modifiers:r,...n}=e;return v.createElement("td",{...n})}function Ng(e){const{day:a,modifiers:r,...n}=e,t=v.useRef(null);return v.useEffect(()=>{var s;r.focused&&((s=t.current)==null||s.focus())},[r.focused]),v.createElement("button",{ref:t,...n})}function Og(e){const{options:a,className:r,components:n,classNames:t,...s}=e,l=[t[J.Dropdown],r].join(" "),i=a==null?void 0:a.find(({value:d})=>d===s.value);return v.createElement("span",{"data-disabled":s.disabled,className:t[J.DropdownRoot]},v.createElement(n.Select,{className:l,...s},a==null?void 0:a.map(({value:d,label:g,disabled:u})=>v.createElement(n.Option,{key:d,value:d,disabled:u},g))),v.createElement("span",{className:t[J.CaptionLabel],"aria-hidden":!0},i==null?void 0:i.label,v.createElement(n.Chevron,{orientation:"down",size:18,className:t[J.Chevron]})))}function _g(e){return v.createElement("div",{...e})}function Sg(e){return v.createElement("div",{...e})}function hg(e){const{calendarMonth:a,displayIndex:r,...n}=e;return v.createElement("div",{...n},e.children)}function Kg(e){const{calendarMonth:a,displayIndex:r,...n}=e;return v.createElement("div",{...n})}function Dg(e){return v.createElement("table",{...e})}function Pg(e){return v.createElement("div",{...e})}const po=c.createContext(void 0);function Nn(){const e=c.useContext(po);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Ig(e){const{components:a}=Nn();return v.createElement(a.Dropdown,{...e})}function Lg(e){const{onPreviousClick:a,onNextClick:r,previousMonth:n,nextMonth:t,...s}=e,{components:l,classNames:i,labels:{labelPrevious:d,labelNext:g}}=Nn(),u=c.useCallback(m=>{t&&(r==null||r(m))},[t,r]),k=c.useCallback(m=>{n&&(a==null||a(m))},[n,a]);return v.createElement("nav",{...s},v.createElement(l.PreviousMonthButton,{type:"button",className:i[J.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":d(n),onClick:k},v.createElement(l.Chevron,{disabled:n?void 0:!0,className:i[J.Chevron],orientation:"left"})),v.createElement(l.NextMonthButton,{type:"button",className:i[J.NextMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":g(t),onClick:u},v.createElement(l.Chevron,{disabled:t?void 0:!0,orientation:"right",className:i[J.Chevron]})))}function Mg(e){const{components:a}=Nn();return v.createElement(a.Button,{...e})}function wg(e){return v.createElement("option",{...e})}function Vg(e){const{components:a}=Nn();return v.createElement(a.Button,{...e})}function jg(e){const{rootRef:a,...r}=e;return v.createElement("div",{...r,ref:a})}function Gg(e){return v.createElement("select",{...e})}function Ug(e){const{week:a,...r}=e;return v.createElement("tr",{...r})}function qg(e){return v.createElement("th",{...e})}function xg(e){return v.createElement("thead",{"aria-hidden":!0},v.createElement("tr",{...e}))}function Bg(e){const{week:a,...r}=e;return v.createElement("th",{...r})}function Hg(e){return v.createElement("th",{...e})}function Yg(e){return v.createElement("tbody",{...e})}function Cg(e){const{components:a}=Nn();return v.createElement(a.Dropdown,{...e})}const $g=Object.freeze(Object.defineProperty({__proto__:null,Button:Ag,CaptionLabel:Rg,Chevron:Fg,Day:bg,DayButton:Ng,Dropdown:Og,DropdownNav:_g,Footer:Sg,Month:hg,MonthCaption:Kg,MonthGrid:Dg,Months:Pg,MonthsDropdown:Ig,Nav:Lg,NextMonthButton:Mg,Option:wg,PreviousMonthButton:Vg,Root:jg,Select:Gg,Week:Ug,WeekNumber:Bg,WeekNumberHeader:Hg,Weekday:qg,Weekdays:xg,Weeks:Yg,YearsDropdown:Cg},Symbol.toStringTag,{value:"Module"}));function Jg(e){return{...$g,...e}}function Wg(e){const a={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0};return Object.entries(e).forEach(([r,n])=>{r.startsWith("data-")&&(a[r]=n)}),a}function zg(){const e={};for(const a in J)e[J[a]]=`rdp-${J[a]}`;for(const a in Ee)e[Ee[a]]=`rdp-${Ee[a]}`;for(const a in Tr)e[Tr[a]]=`rdp-${Tr[a]}`;for(const a in dr)e[dr[a]]=`rdp-${dr[a]}`;return e}function Eo(e,a,r){return(r??new Hr(a)).format(e,"LLLL y")}const Xg=Eo;function Zg(e,a,r){return(r??new Hr(a)).format(e,"d")}function Qg(e,a=Yr){return a.format(e,"LLLL")}function ev(e){return e<10?`0${e.toLocaleString()}`:`${e.toLocaleString()}`}function rv(){return""}function nv(e,a,r){return(r??new Hr(a)).format(e,"cccccc")}function yo(e,a=Yr){return a.format(e,"yyyy")}const av=yo,tv=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Eo,formatDay:Zg,formatMonthCaption:Xg,formatMonthDropdown:Qg,formatWeekNumber:ev,formatWeekNumberHeader:rv,formatWeekdayName:nv,formatYearCaption:av,formatYearDropdown:yo},Symbol.toStringTag,{value:"Module"}));function sv(e){return e!=null&&e.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e!=null&&e.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...tv,...e}}function lv(e,a,r,n,t){const{startOfMonth:s,startOfYear:l,endOfYear:i,eachMonthOfInterval:d,getMonth:g}=t;return d({start:l(e),end:i(e)}).map(m=>{const p=n.formatMonthDropdown(m,t),f=g(m),A=a&&m<s(a)||r&&m>s(r)||!1;return{value:f,label:p,disabled:A}})}function iv(e,a={},r={}){let n={...a==null?void 0:a[J.Day]};return Object.entries(e).filter(([,t])=>t===!0).forEach(([t])=>{n={...n,...r==null?void 0:r[t]}}),n}function ov(e,a,r){const n=e.today(),t=a?e.startOfISOWeek(n):e.startOfWeek(n),s=[];for(let l=0;l<7;l++){const i=e.addDays(t,l);s.push(i)}return s}function dv(e,a,r,n){if(!e||!a)return;const{startOfYear:t,endOfYear:s,addYears:l,getYear:i,isBefore:d,isSameYear:g}=n,u=t(e),k=s(a),m=[];let p=u;for(;d(p,k)||g(p,k);)m.push(p),p=l(p,1);return m.map(f=>{const A=r.formatYearDropdown(f,n);return{value:i(f),label:A,disabled:!1}})}function To(e,a,r){return(r??new Hr(a)).format(e,"LLLL y")}const uv=To;function kv(e,a,r,n){let t=(n??new Hr(r)).format(e,"PPPP");return a!=null&&a.today&&(t=`Today, ${t}`),t}function co(e,a,r,n){let t=(n??new Hr(r)).format(e,"PPPP");return a.today&&(t=`Today, ${t}`),a.selected&&(t=`${t}, selected`),t}const gv=co;function vv(){return""}function mv(e){return"Choose the Month"}function pv(e){return"Go to the Next Month"}function Ev(e){return"Go to the Previous Month"}function yv(e,a,r){return(r??new Hr(a)).format(e,"cccc")}function Tv(e,a){return`Week ${e}`}function cv(e){return"Week Number"}function fv(e){return"Choose the Year"}const Av=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:uv,labelDay:gv,labelDayButton:co,labelGrid:To,labelGridcell:kv,labelMonthDropdown:mv,labelNav:vv,labelNext:pv,labelPrevious:Ev,labelWeekNumber:Tv,labelWeekNumberHeader:cv,labelWeekday:yv,labelYearDropdown:fv},Symbol.toStringTag,{value:"Module"}));function Rv(e,a,{classNames:r,months:n,focused:t,dateLib:s}){const l=c.useRef(null),i=c.useRef(n),d=c.useRef(!1);c.useLayoutEffect(()=>{const g=i.current;if(i.current=n,!a||!e.current||!(e.current instanceof HTMLElement))return;const u=l.current,k=e.current.cloneNode(!0);if(k instanceof HTMLElement?([...k.querySelectorAll("[data-animated-month]")??[]].forEach(y=>{const F=y.querySelector("[data-animated-month]");F&&y.contains(F)&&y.removeChild(F)}),l.current=k):l.current=null,n.length===0||g.length===0||n.length!==g.length||t||d.current||s.isSameMonth(n[0].date,g[0].date))return;const p=[...(u==null?void 0:u.querySelectorAll("[data-animated-month]"))??[]],f=[...e.current.querySelectorAll("[data-animated-month]")??[]];if(f&&f.every(A=>A instanceof HTMLElement)&&p&&p.every(A=>A instanceof HTMLElement)){d.current=!0;const A=s.isAfter(n[0].date,g[0].date);f.forEach((y,F)=>{const E=p[F];if(!E)return;const R=A?r[dr.caption_after_enter]:r[dr.caption_before_enter],S=A?r[dr.weeks_after_enter]:r[dr.weeks_before_enter];y.style.position="relative",y.style.overflow="hidden";const D=y.querySelector("[data-animated-caption]");D&&D instanceof HTMLElement&&D.classList.add(R);const N=y.querySelector("[data-animated-weeks]");N&&N instanceof HTMLElement&&N.classList.add(S);const b=()=>{d.current=!1,D&&D instanceof HTMLElement&&D.classList.remove(R),N&&N instanceof HTMLElement&&N.classList.remove(S),y.style.position="",y.style.overflow="",y.contains(E)&&y.removeChild(E)};E.style.pointerEvents="none",E.style.position="absolute",E.style.overflow="hidden",E.setAttribute("aria-hidden","true");const _=E.querySelector("[data-animated-weekdays]");_&&_ instanceof HTMLElement&&(_.style.opacity="0");const K=E.querySelector("[data-animated-caption]");K&&K instanceof HTMLElement&&(K.classList.add(A?r[dr.caption_before_exit]:r[dr.caption_after_exit]),K.addEventListener("animationend",b));const V=E.querySelector("[data-animated-weeks]");V&&V instanceof HTMLElement&&V.classList.add(A?r[dr.weeks_before_exit]:r[dr.weeks_after_exit]),y.insertBefore(E,y.firstChild)})}})}function Fv(e,a,r,n){const t=e[0],s=e[e.length-1],{ISOWeek:l,fixedWeeks:i,broadcastCalendar:d}=r??{},{addDays:g,differenceInCalendarDays:u,differenceInCalendarMonths:k,endOfBroadcastWeek:m,endOfISOWeek:p,endOfMonth:f,endOfWeek:A,isAfter:y,startOfBroadcastWeek:F,startOfISOWeek:E,startOfWeek:R}=n,S=d?F(t,n):l?E(t):R(t),D=d?m(s,n):l?p(f(s)):A(f(s)),N=u(D,S),b=k(s,t)+1,_=[];for(let j=0;j<=N;j++){const I=g(S,j);if(a&&y(I,a))break;_.push(I)}const V=(d?35:42)*b;if(i&&_.length<V){const j=V-_.length;for(let I=0;I<j;I++){const P=g(_[_.length-1],1);_.push(P)}}return _}function bv(e){const a=[];return e.reduce((r,n)=>{const t=[],s=n.weeks.reduce((l,i)=>[...l,...i.days],t);return[...r,...s]},a)}function Nv(e,a,r,n){const{numberOfMonths:t=1}=r,s=[];for(let l=0;l<t;l++){const i=n.addMonths(e,l);if(a&&i>a)break;s.push(i)}return s}function Sl(e,a){const{month:r,defaultMonth:n,today:t=a.today(),numberOfMonths:s=1,endMonth:l,startMonth:i}=e;let d=r||n||t;const{differenceInCalendarMonths:g,addMonths:u,startOfMonth:k}=a;if(l&&g(l,d)<0){const m=-1*(s-1);d=u(l,m)}return i&&g(d,i)<0&&(d=i),k(d)}class fo{constructor(a,r,n=Yr){this.date=a,this.displayMonth=r,this.outside=!!(r&&!n.isSameMonth(a,r)),this.dateLib=n}isEqualTo(a){return this.dateLib.isSameDay(a.date,this.date)&&this.dateLib.isSameMonth(a.displayMonth,this.displayMonth)}}class Ov{constructor(a,r){this.date=a,this.weeks=r}}class _v{constructor(a,r){this.days=r,this.weekNumber=a}}function Sv(e,a,r,n){const{addDays:t,endOfBroadcastWeek:s,endOfISOWeek:l,endOfMonth:i,endOfWeek:d,getISOWeek:g,getWeek:u,startOfBroadcastWeek:k,startOfISOWeek:m,startOfWeek:p}=n,f=e.reduce((A,y)=>{const F=r.broadcastCalendar?k(y,n):r.ISOWeek?m(y):p(y),E=r.broadcastCalendar?s(y,n):r.ISOWeek?l(i(y)):d(i(y)),R=a.filter(b=>b>=F&&b<=E),S=r.broadcastCalendar?35:42;if(r.fixedWeeks&&R.length<S){const b=a.filter(_=>{const K=S-R.length;return _>E&&_<=t(E,K)});R.push(...b)}const D=R.reduce((b,_)=>{const K=r.ISOWeek?g(_):u(_),V=b.find(I=>I.weekNumber===K),j=new fo(_,y,n);return V?V.days.push(j):b.push(new _v(K,[j])),b},[]),N=new Ov(y,D);return A.push(N),A},[]);return r.reverseMonths?f.reverse():f}function hv(e,a){let{startMonth:r,endMonth:n}=e;const{startOfYear:t,startOfDay:s,startOfMonth:l,endOfMonth:i,addYears:d,endOfYear:g,newDate:u,today:k}=a,{fromYear:m,toYear:p,fromMonth:f,toMonth:A}=e;!r&&f&&(r=f),!r&&m&&(r=a.newDate(m,0,1)),!n&&A&&(n=A),!n&&p&&(n=u(p,11,31));const y=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return r?r=l(r):m?r=u(m,0,1):!r&&y&&(r=t(d(e.today??k(),-100))),n?n=i(n):p?n=u(p,11,31):!n&&y&&(n=g(e.today??k())),[r&&s(r),n&&s(n)]}function Kv(e,a,r,n){if(r.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:s=1}=r,{startOfMonth:l,addMonths:i,differenceInCalendarMonths:d}=n,g=t?s:1,u=l(e);if(!a)return i(u,g);if(!(d(a,e)<s))return i(u,g)}function Dv(e,a,r,n){if(r.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:s}=r,{startOfMonth:l,addMonths:i,differenceInCalendarMonths:d}=n,g=t?s??1:1,u=l(e);if(!a)return i(u,-g);if(!(d(u,a)<=0))return i(u,-g)}function Pv(e){const a=[];return e.reduce((r,n)=>[...r,...n.weeks],a)}function dt(e,a){const[r,n]=c.useState(e);return[a===void 0?r:a,n]}function Iv(e,a){const[r,n]=hv(e,a),{startOfMonth:t,endOfMonth:s}=a,l=Sl(e,a),[i,d]=dt(l,e.month?l:void 0);c.useEffect(()=>{const N=Sl(e,a);d(N)},[e.timeZone]);const g=Nv(i,n,e,a),u=Fv(g,e.endMonth?s(e.endMonth):void 0,e,a),k=Sv(g,u,e,a),m=Pv(k),p=bv(k),f=Dv(i,r,e,a),A=Kv(i,n,e,a),{disableNavigation:y,onMonthChange:F}=e,E=N=>m.some(b=>b.days.some(_=>_.isEqualTo(N))),R=N=>{if(y)return;let b=t(N);r&&b<t(r)&&(b=t(r)),n&&b>t(n)&&(b=t(n)),d(b),F==null||F(b)};return{months:k,weeks:m,days:p,navStart:r,navEnd:n,previousMonth:f,nextMonth:A,goToMonth:R,goToDay:N=>{E(N)||R(N.date)}}}function Lv(e,a,r,n){let t,s=0,l=!1;for(;s<e.length&&!l;){const i=e[s],d=a(i);!d[Ee.disabled]&&!d[Ee.hidden]&&!d[Ee.outside]&&(d[Ee.focused]||n!=null&&n.isEqualTo(i)||r(i.date)||d[Ee.today])&&(t=i,l=!0),s++}return t||(t=e.find(i=>{const d=a(i);return!d[Ee.disabled]&&!d[Ee.hidden]&&!d[Ee.outside]})),t}function Gr(e,a,r=!1,n=Yr){let{from:t,to:s}=e;const{differenceInCalendarDays:l,isSameDay:i}=n;return t&&s?(l(s,t)<0&&([t,s]=[s,t]),l(a,t)>=(r?1:0)&&l(s,a)>=(r?1:0)):!r&&s?i(s,a):!r&&t?i(t,a):!1}function Ao(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ks(e){return!!(e&&typeof e=="object"&&"from"in e)}function Ro(e){return!!(e&&typeof e=="object"&&"after"in e)}function Fo(e){return!!(e&&typeof e=="object"&&"before"in e)}function bo(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function No(e,a){return Array.isArray(e)&&e.every(a.isDate)}function mr(e,a,r=Yr){const n=Array.isArray(a)?a:[a],{isSameDay:t,differenceInCalendarDays:s,isAfter:l}=r;return n.some(i=>{if(typeof i=="boolean")return i;if(r.isDate(i))return t(e,i);if(No(i,r))return i.includes(e);if(Ks(i))return Gr(i,e,!1,r);if(bo(i))return Array.isArray(i.dayOfWeek)?i.dayOfWeek.includes(e.getDay()):i.dayOfWeek===e.getDay();if(Ao(i)){const d=s(i.before,e),g=s(i.after,e),u=d>0,k=g<0;return l(i.before,i.after)?k&&u:u||k}return Ro(i)?s(e,i.after)>0:Fo(i)?s(i.before,e)>0:typeof i=="function"?i(e):!1})}function Mv(e,a,r,n,t,s,l){const{ISOWeek:i,broadcastCalendar:d}=s,{addDays:g,addMonths:u,addWeeks:k,addYears:m,endOfBroadcastWeek:p,endOfISOWeek:f,endOfWeek:A,max:y,min:F,startOfBroadcastWeek:E,startOfISOWeek:R,startOfWeek:S}=l;let N={day:g,week:k,month:u,year:m,startOfWeek:b=>d?E(b,l):i?R(b):S(b),endOfWeek:b=>d?p(b,l):i?f(b):A(b)}[e](r,a==="after"?1:-1);return a==="before"&&n?N=y([n,N]):a==="after"&&t&&(N=F([t,N])),N}function Oo(e,a,r,n,t,s,l,i=0){if(i>365)return;const d=Mv(e,a,r.date,n,t,s,l),g=!!(s.disabled&&mr(d,s.disabled,l)),u=!!(s.hidden&&mr(d,s.hidden,l)),k=d,m=new fo(d,k,l);return!g&&!u?m:Oo(e,a,m,n,t,s,l,i+1)}function wv(e,a,r,n,t){const{autoFocus:s}=e,[l,i]=c.useState(),d=Lv(a.days,r,n||(()=>!1),l),[g,u]=c.useState(s?d:void 0);return{isFocusTarget:A=>!!(d!=null&&d.isEqualTo(A)),setFocused:u,focused:g,blur:()=>{i(g),u(void 0)},moveFocus:(A,y)=>{if(!g)return;const F=Oo(A,y,g,a.navStart,a.navEnd,e,t);F&&(a.goToDay(F),u(F))}}}function Vv(e,a,r){const{disabled:n,hidden:t,modifiers:s,showOutsideDays:l,broadcastCalendar:i,today:d}=a,{isSameDay:g,isSameMonth:u,startOfMonth:k,isBefore:m,endOfMonth:p,isAfter:f}=r,A=a.startMonth&&k(a.startMonth),y=a.endMonth&&p(a.endMonth),F={[Ee.focused]:[],[Ee.outside]:[],[Ee.disabled]:[],[Ee.hidden]:[],[Ee.today]:[]},E={};for(const R of e){const{date:S,displayMonth:D}=R,N=!!(D&&!u(S,D)),b=!!(A&&m(S,A)),_=!!(y&&f(S,y)),K=!!(n&&mr(S,n,r)),V=!!(t&&mr(S,t,r))||b||_||!i&&!l&&N||i&&l===!1&&N,j=g(S,d??r.today());N&&F.outside.push(R),K&&F.disabled.push(R),V&&F.hidden.push(R),j&&F.today.push(R),s&&Object.keys(s).forEach(I=>{const P=s==null?void 0:s[I];P&&mr(S,P,r)&&(E[I]?E[I].push(R):E[I]=[R])})}return R=>{const S={[Ee.focused]:!1,[Ee.disabled]:!1,[Ee.hidden]:!1,[Ee.outside]:!1,[Ee.today]:!1},D={};for(const N in F){const b=F[N];S[N]=b.some(_=>_===R)}for(const N in E)D[N]=E[N].some(b=>b===R);return{...S,...D}}}function jv(e,a){const{selected:r,required:n,onSelect:t}=e,[s,l]=dt(r,t?r:void 0),i=t?r:s,{isSameDay:d}=a,g=p=>(i==null?void 0:i.some(f=>d(f,p)))??!1,{min:u,max:k}=e;return{selected:i,select:(p,f,A)=>{let y=[...i??[]];if(g(p)){if((i==null?void 0:i.length)===u||n&&(i==null?void 0:i.length)===1)return;y=i==null?void 0:i.filter(F=>!d(F,p))}else(i==null?void 0:i.length)===k?y=[p]:y=[...y,p];return t||l(y),t==null||t(y,p,f,A),y},isSelected:g}}function Gv(e,a,r=0,n=0,t=!1,s=Yr){const{from:l,to:i}=a||{},{isSameDay:d,isAfter:g,isBefore:u}=s;let k;if(!l&&!i)k={from:e,to:r>0?void 0:e};else if(l&&!i)d(l,e)?t?k={from:l,to:void 0}:k=void 0:u(e,l)?k={from:e,to:l}:k={from:l,to:e};else if(l&&i)if(d(l,e)&&d(i,e))t?k={from:l,to:i}:k=void 0;else if(d(l,e))k={from:l,to:r>0?void 0:e};else if(d(i,e))k={from:e,to:r>0?void 0:e};else if(u(e,l))k={from:e,to:i};else if(g(e,l))k={from:l,to:e};else if(g(e,i))k={from:l,to:e};else throw new Error("Invalid range");if(k!=null&&k.from&&(k!=null&&k.to)){const m=s.differenceInCalendarDays(k.to,k.from);n>0&&m>n?k={from:e,to:void 0}:r>1&&m<r&&(k={from:e,to:void 0})}return k}function Uv(e,a,r=Yr){const n=Array.isArray(a)?a:[a];let t=e.from;const s=r.differenceInCalendarDays(e.to,e.from),l=Math.min(s,6);for(let i=0;i<=l;i++){if(n.includes(t.getDay()))return!0;t=r.addDays(t,1)}return!1}function hl(e,a,r=Yr){return Gr(e,a.from,!1,r)||Gr(e,a.to,!1,r)||Gr(a,e.from,!1,r)||Gr(a,e.to,!1,r)}function qv(e,a,r=Yr){const n=Array.isArray(a)?a:[a];if(n.filter(i=>typeof i!="function").some(i=>typeof i=="boolean"?i:r.isDate(i)?Gr(e,i,!1,r):No(i,r)?i.some(d=>Gr(e,d,!1,r)):Ks(i)?i.from&&i.to?hl(e,{from:i.from,to:i.to},r):!1:bo(i)?Uv(e,i.dayOfWeek,r):Ao(i)?r.isAfter(i.before,i.after)?hl(e,{from:r.addDays(i.after,1),to:r.addDays(i.before,-1)},r):mr(e.from,i,r)||mr(e.to,i,r):Ro(i)||Fo(i)?mr(e.from,i,r)||mr(e.to,i,r):!1))return!0;const l=n.filter(i=>typeof i=="function");if(l.length){let i=e.from;const d=r.differenceInCalendarDays(e.to,e.from);for(let g=0;g<=d;g++){if(l.some(u=>u(i)))return!0;i=r.addDays(i,1)}}return!1}function xv(e,a){const{disabled:r,excludeDisabled:n,selected:t,required:s,onSelect:l}=e,[i,d]=dt(t,l?t:void 0),g=l?t:i;return{selected:g,select:(m,p,f)=>{const{min:A,max:y}=e,F=m?Gv(m,g,A,y,s,a):void 0;return n&&r&&(F!=null&&F.from)&&F.to&&qv({from:F.from,to:F.to},r,a)&&(F.from=m,F.to=void 0),l||d(F),l==null||l(F,m,p,f),F},isSelected:m=>g&&Gr(g,m,!1,a)}}function Bv(e,a){const{selected:r,required:n,onSelect:t}=e,[s,l]=dt(r,t?r:void 0),i=t?r:s,{isSameDay:d}=a;return{selected:i,select:(k,m,p)=>{let f=k;return!n&&i&&i&&d(k,i)&&(f=void 0),t||l(f),t==null||t(f,k,m,p),f},isSelected:k=>i?d(i,k):!1}}function Hv(e,a){const r=Bv(e,a),n=jv(e,a),t=xv(e,a);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return t;default:return}}function Yv(e){const{components:a,formatters:r,labels:n,dateLib:t,locale:s,classNames:l}=c.useMemo(()=>{const ee={...it,...e.locale};return{dateLib:new Hr({locale:ee,weekStartsOn:e.broadcastCalendar?1:e.weekStartsOn,firstWeekContainsDate:e.firstWeekContainsDate,useAdditionalWeekYearTokens:e.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:e.useAdditionalDayOfYearTokens,timeZone:e.timeZone,numerals:e.numerals},e.dateLib),components:Jg(e.components),formatters:sv(e.formatters),labels:{...Av,...e.labels},locale:ee,classNames:{...zg(),...e.classNames}}},[e.locale,e.broadcastCalendar,e.weekStartsOn,e.firstWeekContainsDate,e.useAdditionalWeekYearTokens,e.useAdditionalDayOfYearTokens,e.timeZone,e.numerals,e.dateLib,e.components,e.formatters,e.labels,e.classNames]),{captionLayout:i,mode:d,onDayBlur:g,onDayClick:u,onDayFocus:k,onDayKeyDown:m,onDayMouseEnter:p,onDayMouseLeave:f,onNextClick:A,onPrevClick:y,showWeekNumber:F,styles:E}=e,{formatCaption:R,formatDay:S,formatMonthDropdown:D,formatWeekNumber:N,formatWeekNumberHeader:b,formatWeekdayName:_,formatYearDropdown:K}=r,V=Iv(e,t),{days:j,months:I,navStart:P,navEnd:H,previousMonth:C,nextMonth:$,goToMonth:ie}=V,pe=Vv(j,e,t),{isSelected:De,select:He,selected:Fe}=Hv(e,t)??{},{blur:Rr,focused:lr,isFocusTarget:Sn,moveFocus:Z,setFocused:z}=wv(e,V,pe,De??(()=>!1),t),{labelDayButton:Pe,labelGridcell:Ze,labelGrid:Cr,labelMonthDropdown:tn,labelNav:Pr,labelWeekday:$r,labelWeekNumber:sn,labelWeekNumberHeader:Ir,labelYearDropdown:Jr}=n,Wr=c.useMemo(()=>ov(t,e.ISOWeek),[t,e.ISOWeek]),Lr=d!==void 0||u!==void 0,ln=c.useCallback(()=>{C&&(ie(C),y==null||y(C))},[C,ie,y]),on=c.useCallback(()=>{$&&(ie($),A==null||A($))},[ie,$,A]),gl=c.useCallback((ee,ye)=>ve=>{ve.preventDefault(),ve.stopPropagation(),z(ee),He==null||He(ee.date,ye,ve),u==null||u(ee.date,ye,ve)},[He,u,z]),Oa=c.useCallback((ee,ye)=>ve=>{z(ee),k==null||k(ee.date,ye,ve)},[k,z]),T=c.useCallback((ee,ye)=>ve=>{Rr(),g==null||g(ee.date,ye,ve)},[Rr,g]),O=c.useCallback((ee,ye)=>ve=>{const Er={ArrowLeft:["day",e.dir==="rtl"?"after":"before"],ArrowRight:["day",e.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[ve.shiftKey?"year":"month","before"],PageDown:[ve.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Er[ve.key]){ve.preventDefault(),ve.stopPropagation();const[ir,dn]=Er[ve.key];Z(ir,dn)}m==null||m(ee.date,ye,ve)},[Z,m,e.dir]),h=c.useCallback((ee,ye)=>ve=>{p==null||p(ee.date,ye,ve)},[p]),q=c.useCallback((ee,ye)=>ve=>{f==null||f(ee.date,ye,ve)},[f]),w=c.useCallback(ee=>ye=>{const ve=Number(ye.target.value),Er=t.setMonth(t.startOfMonth(ee),ve);ie(Er)},[t,ie]),L=c.useCallback(ee=>ye=>{const ve=Number(ye.target.value),Er=t.setYear(t.startOfMonth(ee),ve);ie(Er)},[t,ie]),{className:B,style:te}=c.useMemo(()=>({className:[l[J.Root],e.className].filter(Boolean).join(" "),style:{...E==null?void 0:E[J.Root],...e.style}}),[l,e.className,e.style,E]),be=Wg(e),je=c.useRef(null);Rv(je,!!e.animate,{classNames:l,months:I,focused:lr,dateLib:t});const Ot={dayPickerProps:e,selected:Fe,select:He,isSelected:De,months:I,nextMonth:$,previousMonth:C,goToMonth:ie,getModifiers:pe,components:a,classNames:l,styles:E,labels:n,formatters:r};return v.createElement(po.Provider,{value:Ot},v.createElement(a.Root,{rootRef:e.animate?je:void 0,className:B,style:te,dir:e.dir,id:e.id,lang:e.lang,nonce:e.nonce,title:e.title,role:e.role,"aria-label":e["aria-label"],...be},v.createElement(a.Months,{className:l[J.Months],style:E==null?void 0:E[J.Months]},!e.hideNavigation&&v.createElement(a.Nav,{className:l[J.Nav],style:E==null?void 0:E[J.Nav],"aria-label":Pr(),onPreviousClick:ln,onNextClick:on,previousMonth:C,nextMonth:$}),I.map((ee,ye)=>{const ve=lv(ee.date,P,H,r,t),Er=dv(P,H,r,t);return v.createElement(a.Month,{"data-animated-month":e.animate?"true":void 0,className:l[J.Month],style:E==null?void 0:E[J.Month],key:ye,displayIndex:ye,calendarMonth:ee},v.createElement(a.MonthCaption,{"data-animated-caption":e.animate?"true":void 0,className:l[J.MonthCaption],style:E==null?void 0:E[J.MonthCaption],calendarMonth:ee,displayIndex:ye},i!=null&&i.startsWith("dropdown")?v.createElement(a.DropdownNav,{className:l[J.Dropdowns],style:E==null?void 0:E[J.Dropdowns]},i==="dropdown"||i==="dropdown-months"?v.createElement(a.MonthsDropdown,{className:l[J.MonthsDropdown],"aria-label":tn(),classNames:l,components:a,disabled:!!e.disableNavigation,onChange:w(ee.date),options:ve,style:E==null?void 0:E[J.Dropdown],value:t.getMonth(ee.date)}):v.createElement("span",{role:"status","aria-live":"polite"},D(ee.date,t)),i==="dropdown"||i==="dropdown-years"?v.createElement(a.YearsDropdown,{className:l[J.YearsDropdown],"aria-label":Jr(t.options),classNames:l,components:a,disabled:!!e.disableNavigation,onChange:L(ee.date),options:Er,style:E==null?void 0:E[J.Dropdown],value:t.getYear(ee.date)}):v.createElement("span",{role:"status","aria-live":"polite"},K(ee.date,t))):v.createElement(a.CaptionLabel,{className:l[J.CaptionLabel],role:"status","aria-live":"polite"},R(ee.date,t.options,t))),v.createElement(a.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":Cr(ee.date,t.options,t)||void 0,className:l[J.MonthGrid],style:E==null?void 0:E[J.MonthGrid]},!e.hideWeekdays&&v.createElement(a.Weekdays,{"data-animated-weekdays":e.animate?"true":void 0,className:l[J.Weekdays],style:E==null?void 0:E[J.Weekdays]},F&&v.createElement(a.WeekNumberHeader,{"aria-label":Ir(t.options),className:l[J.WeekNumberHeader],style:E==null?void 0:E[J.WeekNumberHeader],scope:"col"},b()),Wr.map((ir,dn)=>v.createElement(a.Weekday,{"aria-label":$r(ir,t.options,t),className:l[J.Weekday],key:dn,style:E==null?void 0:E[J.Weekday],scope:"col"},_(ir,t.options,t)))),v.createElement(a.Weeks,{"data-animated-weeks":e.animate?"true":void 0,className:l[J.Weeks],style:E==null?void 0:E[J.Weeks]},ee.weeks.map((ir,dn)=>v.createElement(a.Week,{className:l[J.Week],key:ir.weekNumber,style:E==null?void 0:E[J.Week],week:ir},F&&v.createElement(a.WeekNumber,{week:ir,style:E==null?void 0:E[J.WeekNumber],"aria-label":sn(ir.weekNumber,{locale:s}),className:l[J.WeekNumber],scope:"row",role:"rowheader"},N(ir.weekNumber)),ir.days.map(Ye=>{const{date:Fr}=Ye,oe=pe(Ye);if(oe[Ee.focused]=!oe.hidden&&!!(lr!=null&&lr.isEqualTo(Ye)),oe[Tr.selected]=(De==null?void 0:De(Fr))||oe.selected,Ks(Fe)){const{from:_t,to:St}=Fe;oe[Tr.range_start]=!!(_t&&St&&t.isSameDay(Fr,_t)),oe[Tr.range_end]=!!(_t&&St&&t.isSameDay(Fr,St)),oe[Tr.range_middle]=Gr(Fe,Fr,!0,t)}const Rd=iv(oe,E,e.modifiersStyles),Fd=fg(oe,l,e.modifiersClassNames),bd=!Lr&&!oe.hidden?Ze(Fr,oe,t.options,t):void 0;return v.createElement(a.Day,{key:`${t.format(Fr,"yyyy-MM-dd")}_${t.format(Ye.displayMonth,"yyyy-MM")}`,day:Ye,modifiers:oe,className:Fd.join(" "),style:Rd,role:"gridcell","aria-selected":oe.selected||void 0,"aria-label":bd,"data-day":t.format(Fr,"yyyy-MM-dd"),"data-month":Ye.outside?t.format(Fr,"yyyy-MM"):void 0,"data-selected":oe.selected||void 0,"data-disabled":oe.disabled||void 0,"data-hidden":oe.hidden||void 0,"data-outside":Ye.outside||void 0,"data-focused":oe.focused||void 0,"data-today":oe.today||void 0},!oe.hidden&&Lr?v.createElement(a.DayButton,{className:l[J.DayButton],style:E==null?void 0:E[J.DayButton],type:"button",day:Ye,modifiers:oe,disabled:oe.disabled||void 0,tabIndex:Sn(Ye)?0:-1,"aria-label":Pe(Fr,oe,t.options,t),onClick:gl(Ye,oe),onBlur:T(Ye,oe),onFocus:Oa(Ye,oe),onKeyDown:O(Ye,oe),onMouseEnter:h(Ye,oe),onMouseLeave:q(Ye,oe)},S(Fr,t.options,t)):!oe.hidden&&S(Ye.date,t.options,t))}))))))})),e.footer&&v.createElement(a.Footer,{className:l[J.Footer],style:E==null?void 0:E[J.Footer],role:"status","aria-live":"polite"},e.footer)))}var Cv=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const _o=c.forwardRef((e,a)=>{var{as:r="div",className:n,above:t,below:s,variant:l,asChild:i}=e,d=Cv(e,["as","className","above","below","variant","asChild"]);const{cn:g}=se(),u=l==="show"?t:s,k=l==="show"?s:t,m=i?Ea:r;return v.createElement(m,Object.assign({},d,{ref:a,className:g("navds-responsive",n,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${k}`]:k})}))}),$v=c.forwardRef((e,a)=>v.createElement(_o,Object.assign({},e,{ref:a,variant:"hide"}))),Ds=c.forwardRef((e,a)=>v.createElement(_o,Object.assign({},e,{ref:a,variant:"show"})));function cr(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function Jv({day:e,fromDate:a,toDate:r}){const n=r&&Qr(e,xr(r))>0,t=a&&Qr(xr(a),e)>0;return n||t||!1}const So="dd.MM.yyyy",Wv="MMMM yyyy",ho=[So,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...ho];const It=(e,a,r,n,t)=>{let s;const l=ho;if(t){for(const i of l)if(s=Vn(e,i,a,{locale:r}),cr(s)&&!Lt(e,a,r,l))return s;for(const i of[...l.map(d=>d.replace("yyyy","yy"))])if(s=Vn(e,i,a,{locale:r}),cr(s)&&Lt(e,a,r,l)){const d=zv(e,i,a,r);return cr(new Date(d))?new Date(d):new Date("Invalid date")}return new Date("Invalid date")}for(const i of l)if(s=Vn(e,i,a,{locale:r}),cr(s)&&!Lt(e,a,r,l))return s;return new Date("Invalid date")};function Lt(e,a,r,n){let t;const s=n.map(l=>l.replace("yyyy","yy"));for(const l of s)if(t=Vn(e,l,a,{locale:r}),cr(t))return!0;return!1}function zv(e,a,r,n){const t=Vn(Kl(e,"19"),a.replace("yy","yyyy"),r,{locale:n}),s=Vn(Kl(e,"20"),a.replace("yy","yyyy"),r,{locale:n});return cr(t)&&cr(s)?Aa(t,og(new Date,{years:80}))?s:t:new Date("Invalid date")}function Kl(e,a){const r=e.slice(-2);return`${e.slice(0,e.length-2)}${a}${r}`}const ra=(e,a,r,n)=>An(e,n??So,{locale:a}),Xv=({month:e,start:a,end:r})=>{if(!e)return;let n=e;return a&&Aa(n,a)&&(n=a),r&&no(n,r)&&(n=r),fn(n)};function Zv(e,a,r,n){return Xi({start:fa(e),end:ot(e)}).map(l=>{const i=An(l,"LLLL",{locale:n}),d=Os(l),g=a&&l<fn(a)||r&&l>fn(r)||!1;return{value:d,label:i,disabled:g}})}function Qv(e,a,r){if(!e||!a)return;const n=fa(e),t=ot(a),s=[];let l=n;for(;Aa(l,t)||io(l,t);)s.push(l),l=As(l,1);return s.map(i=>{const d=An(i,"yyyy",{locale:r});return{value:_s(i),label:d,disabled:!1}})}function em({captionLayout:e,startMonth:a,endMonth:r,today:n}){const t=e==="dropdown",s=n??new Date;return a?a=fn(a):!a&&t&&(a=fa(As(s,-100))),r?r=zi(r):!r&&t&&(r=ot(s)),[a&&xr(a),r&&xr(r)]}var rm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const nm=e=>{var{day:a,modifiers:r,locale:n,children:t}=e,s=rm(e,["day","modifiers","locale","children"]);const{cn:l}=se(),i=c.useRef(null);return c.useEffect(()=>{var d;r.focused&&((d=i.current)===null||d===void 0||d.focus())},[r.focused]),r.hidden?v.createElement(v.Fragment,null):v.createElement("button",Object.assign({},s,{ref:i,"aria-hidden":a.outside,"aria-pressed":!!r.selected,"aria-label":An(a.date,"cccc d",{locale:n}),"data-pressed":r.selected,"data-today":r.today||void 0,className:l(s.className,{"rdp-day_disabled":r.disabled,"rdp-day_selected":r.selected,"rdp-day_range_start":r.range_start,"rdp-day_range_middle":r.range_middle,"rdp-day_range_end":r.range_end,"rdp-day_today":r.today,"rdp-day_outside":r.outside,"rdp-day__weekend":r.weekend})}),t)};var am=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const es=c.forwardRef((e,a)=>{const{inputProps:r,errorId:n,showErrorMsg:t,hasError:s,size:l,inputDescriptionId:i,readOnly:d}=xn(e,"select"),{children:g,label:u,className:k,description:m,htmlSize:p,hideLabel:f=!1,style:A}=e,y=am(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:F}=se(),E={onMouseDown:R=>{d&&(R.preventDefault(),R.target.focus())},onKeyDown:R=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(R.key)&&R.preventDefault()}};return v.createElement("div",{className:F(k,"navds-form-field",`navds-form-field--${l}`,{"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":d,"navds-select--error":s,"navds-select--readonly":d})},v.createElement(gr,{htmlFor:r.id,size:l,className:F("navds-form-field__label",{"navds-sr-only":f})},d&&v.createElement(vs,null),u),!!m&&v.createElement(rr,{className:F("navds-form-field__description",{"navds-sr-only":f}),id:i,size:l,as:"div"},m),v.createElement("div",{className:F("navds-select__container"),style:A},v.createElement("select",Object.assign({},xe(y,["error","errorId","size","readOnly"]),r,E,{ref:a,className:F("navds-select__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:p}),g),v.createElement(st,{className:F("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:F("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},t&&v.createElement(Br,{size:l,showIcon:!0},e.error)))}),Ko=({week:{weekNumber:e,days:a},onWeekNumberClick:r,className:n,style:t,showOnDesktop:s})=>{const l=ms().translate,{cn:i}=se(),{getModifiers:d}=Nn(),g=c.useMemo(()=>a.filter(k=>{const m=d(k);return!(m.hidden||m.outside||m.disabled)}).length===0,[a,d]),u=s?Ds:$v;return!r||g?v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:"rdp-cell"},v.createElement(Ta,{as:"span",textColor:"subtle",className:n,style:t,"aria-label":l("weekNumber",{week:e})},e))):v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:i("rdp-cell",{"navds-date__week-wrapper":!s})},v.createElement(We,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":l("selectWeekNumber",{week:e}),style:t,className:i("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{r(e,a.map(k=>k.date))},icon:v.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},tm=({onWeekNumberClick:e,weeks:a})=>{const r=ms().translate,{cn:n}=se(),t=Ur();return e?v.createElement(Ds,{below:"sm",asChild:!0},v.createElement("table",{className:"rdp-table",role:"grid"},v.createElement("tbody",{className:"rdp-tbody"},v.createElement("tr",{className:n("rdp-row navds-date__week-row")},v.createElement(Ta,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},v.createElement("span",{className:n("navds-date__week-wrapper"),id:t},r("week"))),a==null?void 0:a.map(s=>v.createElement(Ko,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var sm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const lm=e=>{var{children:a,calendarMonth:r,locale:n,onWeekNumberClick:t}=e,s=sm(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:l,goToMonth:i,previousMonth:d,nextMonth:g}=Nn(),{captionLayout:u}=l,{cn:k}=se(),m=ms().translate,p=c.useCallback((R,S)=>{const D=Number(S.target.value),N=oo(fn(R),D);i(N)},[i]),f=c.useCallback((R,S)=>{const D=Number(S.target.value),N=uo(fn(R),D);i(N)},[i]),[A,y]=em({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:l.startMonth,endMonth:l.endMonth,today:l.today}),F=Zv(r.date,A,y,n),E=Qv(A,y,n);return v.createElement("div",Object.assign({},xe(s,["displayIndex"])),v.createElement("div",{className:k("navds-date__caption")},(u==null?void 0:u.startsWith("dropdown"))&&v.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:k("navds-sr-only")},An(r.date,"LLLL y",{locale:n})),v.createElement(We,{variant:"tertiary-neutral",disabled:!d,onClick:()=>d&&i(d),icon:v.createElement(ru,{title:m("goToPreviousMonth")}),className:k("navds-date__caption-button"),type:"button"}),u!=null&&u.startsWith("dropdown")?v.createElement("div",{className:k("navds-date__caption")},v.createElement(es,{label:m("month"),hideLabel:!0,className:k("navds-date__caption__month"),onChange:R=>p(r.date,R),value:Os(r.date)},F==null?void 0:F.map(({value:R,label:S,disabled:D})=>v.createElement("option",{key:R,value:R,disabled:D},S))),v.createElement(es,{label:m("year"),hideLabel:!0,className:k("navds-date__caption__year"),onChange:R=>f(r.date,R),value:_s(r.date)},E==null?void 0:E.map(({value:R,label:S,disabled:D})=>v.createElement("option",{key:R,value:R,disabled:D},S)))):v.createElement(rr,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:k("navds-date__caption-label")},An(r.date,"LLLL y",{locale:n})),v.createElement(We,{variant:"tertiary-neutral",icon:v.createElement(au,{title:m("goToNextMonth")}),onClick:()=>g&&i(g),disabled:!g,className:k("navds-date__caption-button"),type:"button"})),v.createElement(tm,{weeks:r.weeks,onWeekNumberClick:t}),a)};var im=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const om={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Do=e=>{var{className:a,dropdownCaption:r,disabled:n=[],disableWeekends:t=!1,showWeekNumber:s=!1,selected:l,fixedWeeks:i=!1,onWeekNumberClick:d,fromDate:g,toDate:u,month:k,mode:m,handleSelect:p,locale:f}=e,A=im(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:y}=se(),F=wi(),E=f?Vi(f):F,R=m??"single";return v.createElement(Yv,Object.assign({captionLayout:r?"dropdown":"label",hideNavigation:!0,locale:E,mode:R,onSelect:(S,D)=>{if(R!=="range"||S||!go(l)){p(S);return}if(!l.to){p({from:D,to:void 0});return}let N;Rs(l.to,D)?N=void 0:Aa(D,l.to)?N={from:D,to:l.to}:N={from:l.to,to:D},p(N)},selected:l,classNames:om,components:{MonthCaption:()=>v.createElement(v.Fragment,null),DayButton:c.useCallback(S=>v.createElement(nm,Object.assign({},S,{locale:E})),[E]),Month:c.useCallback(S=>v.createElement(lm,Object.assign({},S,{locale:E,onWeekNumberClick:R==="multiple"?d:void 0})),[E,R,d]),Day:c.useCallback(S=>v.createElement("td",Object.assign({},xe(S,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:c.useCallback(S=>v.createElement(Ko,Object.assign({},S,{showOnDesktop:!0,onWeekNumberClick:R==="multiple"?d:void 0})),[R,d]),WeekNumberHeader:c.useCallback(S=>v.createElement(Ds,{above:"sm",asChild:!0},v.createElement("th",Object.assign({},S))),[]),Weekdays:c.useCallback(S=>v.createElement("thead",Object.assign({},S,{className:"rdp-head","aria-hidden":!0}),v.createElement("tr",{className:"rdp-head_row"},S.children)),[])},className:y("navds-date",a),disabled:S=>t&&Ua(S)||mr(S,n)||Jv({day:S,fromDate:g,toDate:u}),weekStartsOn:1,modifiers:{weekend:S=>t&&Ua(S)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:i,showOutsideDays:!0,startMonth:g,endMonth:u,month:Xv({month:k,start:g,end:u})},xe(A,["onSelect","role","id","defaultSelected"])))};var dm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const um=c.forwardRef((e,a)=>{var{className:r,locale:n,translations:t,selected:s,defaultSelected:l,onSelect:i,mode:d}=e,g=dm(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=se(),k=ya("DatePicker",t,ji(n)),[m,p]=ja({defaultValue:l,value:s,onChange:f=>i==null?void 0:i(f)});return v.createElement(Gi,{translate:k},v.createElement("div",{ref:a,className:u("navds-date__standalone-wrapper",r)},v.createElement(Do,Object.assign({},g,{locale:n,handleSelect:p,selected:m,mode:d}))))});var km=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ba=c.forwardRef((e,a)=>{var{children:r,locale:n,translations:t,selected:s,id:l,defaultSelected:i,wrapperClassName:d,open:g,onClose:u,onOpenToggle:k,strategy:m,mode:p}=e,f=km(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const A=ya("DatePicker",t,ji(n)),{cn:y}=se(),F=Ur(l),[E,R]=ja({defaultValue:!1,value:g}),[S,D]=c.useState(null),N=rt(D,a),[b,_]=ja({defaultValue:i,value:s,onChange:K=>{var V;let j=!1;p==="single"&&K?j=!0:go(K)&&K.from&&K.to&&(j=!0,Rs(K.from,K.to)&&(j=!1)),j&&(u==null||u(),R(!1)),(V=f==null?void 0:f.onSelect)===null||V===void 0||V.call(f,K)}});return v.createElement(Gi,{translate:A},v.createElement(Hd,{open:E,onOpen:()=>{R(K=>!K),k==null||k()},ariaId:F,defined:!0},v.createElement("div",{ref:N,className:y("navds-date__wrapper",d)},r,v.createElement(vg,{open:E,anchor:S,onClose:()=>{u==null||u(),E&&R(!1)},locale:n,translate:A,variant:p??"single",popoverProps:{id:F,strategy:m}},v.createElement(Do,Object.assign({},f,{locale:n,handleSelect:_,selected:b,mode:p}))))))});Ba.Standalone=um;Ba.Input=Yd;const gm=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),vm=(e={})=>{var a;const{locale:r,required:n,defaultSelected:t,today:s=new Date,fromDate:l,toDate:i,disabled:d,disableWeekends:g,onDateChange:u,inputFormat:k,onValidate:m,defaultMonth:p,allowTwoDigitYear:f=!0}=e,[A,y]=c.useState(null),F=wi(),E=r?Vi(r):F,[R,S]=c.useState(t),[D,N]=c.useState((a=R??p)!==null&&a!==void 0?a:s),[b,_]=c.useState(R),[K,V]=c.useState(!1),j=R?ra(R,E,"date",k):"",[I,P]=c.useState(j),H=c.useCallback(Z=>{var z,Pe;V(Z),Z&&N((Pe=(z=b??R)!==null&&z!==void 0?z:p)!==null&&Pe!==void 0?Pe:s)},[p,R,b,s]),C=Z=>{u==null||u(Z),_(Z)},$=(Z={})=>m==null?void 0:m(gm(Z));return{datepickerProps:{month:D,onMonthChange:N,onDayClick:(Z,{selected:z})=>{if(!(z&&n)){if(Z&&!z&&(H(!1),A==null||A.focus()),z){C(void 0),P(""),$({isValidDate:!1,isEmpty:!0});return}C(Z),$(),N(Z),P(Z?ra(Z,E,"date",k):"")}},selected:b??new Date("Invalid date"),locale:r,fromDate:l,toDate:i,today:s,open:K,onClose:()=>{H(!1),A==null||A.focus()},onOpenToggle:()=>H(!K),disabled:d,disableWeekends:g},inputProps:{onChange:Z=>{P(Z.target.value);const z=It(Z.target.value,s,E,"date",f),Pe=l&&z&&Qr(l,z)>0,Ze=i&&z&&Qr(z,i)>0;if(!cr(z)||g&&Ua(z)||d&&mr(z,d)){C(void 0),$({isInvalid:!cr(z),isWeekend:g&&Ua(z),isDisabled:d&&mr(z,d),isValidDate:!1,isEmpty:!Z.target.value,isBefore:Pe??!1,isAfter:Ze??!1});return}if(Pe||Ze){C(void 0),$({isValidDate:!1,isBefore:Pe??!1,isAfter:Ze??!1});return}C(z),$(),N(p??z)},onFocus:Z=>{if(Z.target.readOnly)return;const z=It(Z.target.value,s,E,"date",f);if(cr(z)){P(ra(z,E,"date",k));const Pe=l&&z&&Qr(l,z)>0,Ze=i&&z&&Qr(z,i)>0;!Pe&&!Ze&&N(z)}},onBlur:Z=>{const z=It(Z.target.value,s,E,"date",f);cr(z)&&P(ra(z,E,"date",k))},value:I,setAnchorRef:y},reset:()=>{var Z;C(R),N((Z=R??p)!==null&&Z!==void 0?Z:s),P(j??""),S(t)},selectedDay:b,setSelected:Z=>{var z;C(Z),N((z=Z??p)!==null&&z!==void 0?z:s),P(Z?ra(Z,E,"date",k):"")}}};var mm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const pm=c.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",background:s,borderColor:l,borderWidth:i,borderRadius:d,shadow:g,style:u,asChild:k}=e,m=mm(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:p}=se(),f=Object.assign(Object.assign(Object.assign({},u),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":g?`var(--ax-shadow-${g})`:void 0,"--__axc-box-border-color":l?`var(--ax-border-${l})`:void 0,"--__axc-box-border-width":i?i.split(" ").map(y=>`${y}px`).join(" "):void 0}),ps("ax","box","border-radius","border-radius",d,!1,["0"])),A=k?Ea:t;return v.createElement(Es,Object.assign({},m),v.createElement(A,Object.assign({},xe(m,ys),{ref:a,style:f,className:p("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":l,"navds-box-border-width":i,"navds-box-border-radius":d,"navds-box-shadow":g})}),r))});var Em=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ym=c.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",background:s,borderColor:l,borderWidth:i,borderRadius:d,shadow:g,style:u,asChild:k}=e,m=Em(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const p=gs(!1),{cn:f}=se(),A=p?"ax":"a",y=Object.assign(Object.assign(Object.assign({},u),{[`--__${A}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${A}c-box-shadow`]:g?`var(--a-shadow-${g})`:void 0,[`--__${A}c-box-border-color`]:l?`var(--a-${l})`:void 0,[`--__${A}c-box-border-width`]:i?i.split(" ").map(E=>`${E}px`).join(" "):void 0}),ps(A,"box","border-radius","border-radius",d,!1,["0"])),F=k?Ea:t;return v.createElement(Es,Object.assign({},m),v.createElement(F,Object.assign({},xe(m,ys),{ref:a,style:y,className:f("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":l,"navds-box-border-width":i,"navds-box-border-radius":d,"navds-box-shadow":g})}),r))}),Ra=ym;Ra.New=pm;var Tm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const tc=c.forwardRef((e,a)=>{var{children:r,className:n,as:t="div",columns:s,gap:l,style:i,align:d,asChild:g}=e,u=Tm(e,["children","className","as","columns","gap","style","align","asChild"]);const m=gs(!1)?"ax":"a",{cn:p}=se(),f=Object.assign(Object.assign(Object.assign(Object.assign({},i),{[`--__${m}c-hgrid-align`]:d}),ps(m,"hgrid","gap","spacing",l)),Cd(m,"hgrid","columns",cm(s))),A=g?Ea:t;return v.createElement(Es,Object.assign({},u),v.createElement(A,Object.assign({},xe(u,ys),{ref:a,className:p("navds-hgrid",n,{"navds-hgrid-gap":l,"navds-hgrid-align":d}),style:f}),r))});function cm(e){return e?typeof e=="string"||typeof e=="number"?Dl(e):Object.fromEntries(Object.entries(e).map(([a,r])=>[a,Dl(r)])):{}}const Dl=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var fm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Am=c.forwardRef((e,a)=>{var{className:r}=e,n=fm(e,["className"]);const{cn:t}=se();return v.createElement("tbody",Object.assign({},n,{ref:a,className:t("navds-table__body",r)}))});var Rm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Po=c.forwardRef((e,a)=>{var{className:r,children:n,align:t,textSize:s}=e,l=Rm(e,["className","children","align","textSize"]);const{cn:i}=se();return v.createElement("th",Object.assign({ref:a,className:i("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${t}`]:t,"navds-label--small":s==="small"})},l),n)}),Io=c.createContext(null);var Fm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const bm=c.forwardRef((e,a)=>{var r,n,t,s,{className:l,children:i,sortable:d=!1,sortKey:g}=e,u=Fm(e,["className","children","sortable","sortKey"]);const k=c.useContext(Io),{cn:m}=se();return d&&!g&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),v.createElement(Po,Object.assign({scope:"col",ref:a,className:m(l),"aria-sort":d?((r=k==null?void 0:k.sort)===null||r===void 0?void 0:r.orderBy)===g?(n=k==null?void 0:k.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),d?v.createElement("button",{type:"button",className:m("navds-table__sort-button"),onClick:d&&g?()=>{var p;return(p=k==null?void 0:k.onSortChange)===null||p===void 0?void 0:p.call(k,g)}:void 0},i,((t=k==null?void 0:k.sort)===null||t===void 0?void 0:t.orderBy)===g?((s=k==null?void 0:k.sort)===null||s===void 0?void 0:s.direction)==="descending"?v.createElement(gu,{"aria-hidden":!0}):v.createElement(mu,{"aria-hidden":!0}):v.createElement(su,{"aria-hidden":!0})):i)});var Nm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Lo=c.forwardRef((e,a)=>{var{className:r,children:n="",align:t,textSize:s}=e,l=Nm(e,["className","children","align","textSize"]);const{cn:i}=se();return v.createElement(rr,Object.assign({as:"td",ref:a,className:i("navds-table__data-cell",r,{[`navds-table__data-cell--align-${t}`]:t}),size:s},l),n)});var Om=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const _m=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Sm(e){const a=parseFloat(e);return!Number.isNaN(a)&&Number.isFinite(a)}function Pl(e){return typeof e=="string"&&e[e.length-1]==="%"&&Sm(e.substring(0,e.length-1))}function Mt(e,a){a===0&&(e!=null&&e.style)&&(e.style.display="none")}function hm(e,a){a===0&&(e!=null&&e.style)&&(e.style.display="")}const Km=e=>{var{children:a,className:r,innerClassName:n,duration:t=250,easing:s="ease",height:l}=e,i=Om(e,["children","className","innerClassName","duration","easing","height"]);const{cn:d}=se(),g=c.useRef(l),u=c.useRef(null),k=c.useRef(),m=c.useRef(),p=c.useRef(l),f=c.useRef("visible"),A=_m?0:t;typeof p.current=="number"?(typeof l!="string"&&(p.current=l<0?0:l),f.current="hidden"):Pl(p.current)&&(p.current=l==="0%"?0:l,f.current="hidden");const[y,F]=c.useState(p.current),[E,R]=c.useState(f.current),[S,D]=c.useState(!1);c.useEffect(()=>{Mt(u.current,p.current)},[]),c.useEffect(()=>{if(l!==g.current&&u.current){hm(u.current,g.current),u.current.style.overflow="hidden";const K=u.current.offsetHeight;u.current.style.overflow="";const V=A;let j,I,P="hidden",H;const C=g.current==="auto";typeof l=="number"?(j=l<0?0:l,I=j):Pl(l)?(j=l==="0%"?0:l,I=j):(j=K,I="auto",P=void 0),C&&(I=j,j=K),F(j),R("hidden"),D(!C),clearTimeout(m.current),clearTimeout(k.current),C?(H=!0,m.current=setTimeout(()=>{F(I),R(P),D(H)},50),k.current=setTimeout(()=>{D(!1),Mt(u.current,I)},V)):m.current=setTimeout(()=>{F(I),R(P),D(!1),l!=="auto"&&Mt(u.current,j)},V)}return g.current=l,()=>{clearTimeout(m.current),clearTimeout(k.current)}},[l]);const N={height:y,overflow:E};S&&(N.transition=`height ${A}ms ${s} 0ms`,N.WebkitTransition=N.transition);const _=typeof i["aria-hidden"]<"u"?i["aria-hidden"]:l===0;return v.createElement("div",Object.assign({},i,{className:d(r),style:N}),v.createElement("div",{"aria-hidden":_,className:d(n),ref:u},a))};var Dm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Mo=c.forwardRef((e,a)=>{var{className:r,selected:n=!1,shadeOnHover:t=!0}=e,s=Dm(e,["className","selected","shadeOnHover"]);const{cn:l}=se();return v.createElement("tr",Object.assign({},s,{ref:a,className:l("navds-table__row",r,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":t})}))});var Pm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Im=c.forwardRef((e,a)=>{var{className:r,children:n,content:t,togglePlacement:s="left",defaultOpen:l=!1,open:i,onOpenChange:d,expansionDisabled:g=!1,expandOnRowClick:u=!1,colSpan:k=999,contentGutter:m,onClick:p}=e,f=Pm(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:A}=se(),[y,F]=ja({defaultValue:l,value:i,onChange:d}),E=ya("global"),R=Ur(),S=N=>{F(b=>!b),N.stopPropagation()},D=N=>{u&&!g&&!wo(N.target)&&S(N)};return v.createElement(v.Fragment,null,v.createElement(Mo,Object.assign({},f,{ref:a,className:A("navds-table__expandable-row",r,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":g,"navds-table__expandable-row--clickable":u}),onClick:Ui(p,D)}),s==="right"&&n,v.createElement(Lo,{className:A("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:g?()=>null:S},!g&&v.createElement("button",{className:A("navds-table__toggle-expand-button"),type:"button","aria-controls":R,"aria-expanded":y,onClick:S},v.createElement(st,{className:A("navds-table__expandable-icon"),title:E(y?"showLess":"showMore")}))),s==="left"&&n),v.createElement("tr",{"data-state":y?"open":"closed",className:A("navds-table__expanded-row"),"aria-hidden":!y,id:R},v.createElement("td",{colSpan:k,className:A("navds-table__expanded-row-cell")},v.createElement(Km,{className:A("navds-table__expanded-row-collapse"),innerClassName:A(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${m??s}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},t))))});function wo(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:wo(e.parentElement)}var Lm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Mm=c.forwardRef((e,a)=>{var{className:r}=e,n=Lm(e,["className"]);const{cn:t}=se();return v.createElement("thead",Object.assign({},n,{ref:a,className:t("navds-table__header",r)}))});var wm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ke=c.forwardRef((e,a)=>{var{className:r,zebraStripes:n=!1,size:t="medium",onSortChange:s,sort:l}=e,i=wm(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:d}=se();return v.createElement(Io.Provider,{value:{onSortChange:s,sort:l}},v.createElement("table",Object.assign({},i,{ref:a,className:d("navds-table",`navds-table--${t}`,r,{"navds-table--zebra-stripes":n})})))});ke.Header=Mm;ke.Body=Am;ke.Row=Mo;ke.ColumnHeader=bm;ke.HeaderCell=Po;ke.DataCell=Lo;ke.ExpandableRow=Im;var Vm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const jm=c.forwardRef((e,a)=>{var{children:r,className:n,variant:t,size:s="medium",icon:l}=e,i=Vm(e,["children","className","variant","size","icon"]);const{cn:d}=se(),g=(t==null?void 0:t.endsWith("-filled"))&&"strong",u=(t==null?void 0:t.endsWith("-moderate"))&&"moderate",k=t==null?void 0:t.replace("-filled","").replace("-moderate","");return v.createElement(rr,Object.assign({},i,{ref:a,as:"span",size:s==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${t}`,`navds-tag--${s}`,`navds-tag--${g||u||"outline"}`,`navds-tag--${k}`)}),l&&v.createElement("span",{className:d("navds-tag__icon--left")},l),r)}),Gm=e=>{const a=xn(e,"fieldset"),{inputProps:r}=a;return Object.assign(Object.assign({},a),{inputProps:{"aria-invalid":r["aria-invalid"],"aria-describedby":r["aria-describedby"]}})};var Um=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ps=c.forwardRef((e,a)=>{var r,n,t;const{inputProps:s,errorId:l,showErrorMsg:i,hasError:d,size:g,readOnly:u,inputDescriptionId:k}=Gm(e),{cn:m}=se(),p=c.useContext(Va),{children:f,className:A,errorPropagation:y=!0,legend:F,description:E,hideLegend:R,nativeReadOnly:S=!0}=e,D=Um(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(Va.Provider,{value:{error:y?(r=e.error)!==null&&r!==void 0?r:p==null?void 0:p.error:void 0,errorId:Ts({[l]:i,[(n=p==null?void 0:p.errorId)!==null&&n!==void 0?n:""]:!!(p!=null&&p.error)}),size:g,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:u}},v.createElement("fieldset",Object.assign({},xe(D,["errorId","error","size","readOnly"]),xe(s,["aria-describedby","aria-invalid"]),{ref:a,className:m(A,"navds-fieldset",`navds-fieldset--${g}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":u})}),v.createElement(gr,{size:g,as:"legend",className:m("navds-fieldset__legend",{"navds-sr-only":!!R})},u&&(S?v.createElement(cs,null):v.createElement(vs,null)),F),!!E&&v.createElement(rr,{className:m("navds-fieldset__description",{"navds-sr-only":!!R}),id:k,size:g??"medium",as:"div"},e.description),f,v.createElement("div",{id:l,"aria-relevant":"additions removals","aria-live":"polite",className:m("navds-fieldset__error")},i&&v.createElement(Br,{size:g,showIcon:!0},e.error))))});var qm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Vo=c.createContext(null),xm=c.forwardRef((e,a)=>{var r,n,{value:t,defaultValue:s,onChange:l=()=>{},children:i,className:d}=e,g=qm(e,["value","defaultValue","onChange","children","className"]);const{cn:u}=se(),k=c.useContext(Va),[m,p]=c.useState(s??[]),f=A=>{const y=t??m,F=y.includes(A)?y.filter(E=>E!==A):[...y,A];t===void 0&&p(F),l(F)};return v.createElement(Ps,Object.assign({},g,{ref:a,className:u(d,"navds-checkbox-group",`navds-checkbox-group--${(n=(r=g.size)!==null&&r!==void 0?r:k==null?void 0:k.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(Vo.Provider,{value:{value:t,defaultValue:s,toggleValue:f}},v.createElement("div",{className:u("navds-checkboxes")},i)))});var Bm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Hm=e=>{const a=c.useContext(Vo),r=xn(xe(e,["description","children"]),"checkbox"),{inputProps:n,readOnly:t}=r,s=Bm(r,["inputProps","readOnly"]);return a&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:t,nested:!!a,inputProps:Object.assign(Object.assign({},n),{checked:a!=null&&a.value?a.value.includes(e.value):e.checked,defaultChecked:a!=null&&a.defaultValue?a.defaultValue.includes(e.value):e.defaultChecked,onChange:l=>{var i;t||((i=e.onChange)===null||i===void 0||i.call(e,l),a==null||a.toggleValue(e.value))},onClick:l=>{var i;if(t){l.preventDefault();return}(i=e==null?void 0:e.onClick)===null||i===void 0||i.call(e,l)}})})},rs=c.forwardRef((e,a)=>{const{cn:r}=se(),{inputProps:n,hasError:t,size:s,readOnly:l,nested:i}=Hm(e),d=Ur(),g=Ur();return v.createElement("div",{className:r(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":t,"navds-checkbox--disabled":n.disabled,"navds-checkbox--readonly":l})},v.createElement("input",Object.assign({},xe(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),xe(n,["aria-invalid"]),{type:"checkbox",className:r("navds-checkbox__input"),ref:u=>{var k;u&&(u.indeterminate=(k=e.indeterminate)!==null&&k!==void 0?k:!1),typeof a=="function"?a(u):a!=null&&(a.current=u)},"aria-labelledby":r(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[g]:e.description})})),v.createElement("label",{htmlFor:n.id,className:r("navds-checkbox__label")},v.createElement("span",{className:r("navds-checkbox__icon")},v.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},v.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),v.createElement("span",{className:r("navds-checkbox__icon-indeterminate")}),v.createElement("span",{className:r("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},v.createElement(rr,{as:"span",id:d,size:s,className:r("navds-checkbox__label-text"),"aria-hidden":!0},!i&&l&&v.createElement(vs,null),e.children),e.description&&v.createElement(rr,{as:"span",id:g,size:s,className:r("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))});var Ym=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const jo=v.createContext(null),Cm=c.forwardRef((e,a)=>{var r,n,{children:t,className:s,name:l,defaultValue:i,value:d,onChange:g=()=>{},required:u,readOnly:k}=e,m=Ym(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:p}=se(),f=c.useContext(Va),A=Ur();return v.createElement(Ps,Object.assign({},m,{readOnly:k,ref:a,className:p(s,"navds-radio-group",`navds-radio-group--${(n=(r=m.size)!==null&&r!==void 0?r:f==null?void 0:f.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(jo.Provider,{value:{name:l??`radioGroupName-${A}`,defaultValue:i,value:d,onChange:g,required:u}},v.createElement("div",{className:p("navds-radio-buttons")},t)))});var $m=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Jm=e=>{const a=c.useContext(jo),r=xn(xe(e,["description"]),"radio"),{inputProps:n,readOnly:t}=r,s=$m(r,["inputProps","readOnly"]);return a||console.warn("<Radio> must be used inside <RadioGroup>."),(e==null?void 0:e.required)!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:t,inputProps:Object.assign(Object.assign({},n),{name:a==null?void 0:a.name,defaultChecked:(a==null?void 0:a.defaultValue)===void 0?void 0:(a==null?void 0:a.defaultValue)===e.value,checked:(a==null?void 0:a.value)===void 0?void 0:(a==null?void 0:a.value)===e.value,onChange:l=>{var i,d;t||((i=e.onChange)===null||i===void 0||i.call(e,l),(d=a==null?void 0:a.onChange)===null||d===void 0||d.call(a,e.value))},onClick:l=>{var i;if(t){l.preventDefault();return}(i=e==null?void 0:e.onClick)===null||i===void 0||i.call(e,l)},required:a==null?void 0:a.required,type:"radio"})})},Il=c.forwardRef((e,a)=>{const{cn:r}=se(),{inputProps:n,size:t,hasError:s,readOnly:l}=Jm(e),i=Ur(),d=Ur();return v.createElement("div",{className:r(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":s,"navds-radio--disabled":n.disabled,"navds-radio--readonly":l})},v.createElement("input",Object.assign({},xe(e,["children","size","description","readOnly"]),xe(n,["aria-invalid"]),{"aria-labelledby":Ts(i,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description}),className:r("navds-radio__input"),ref:a})),v.createElement("label",{htmlFor:n.id,className:r("navds-radio__label")},v.createElement("span",{className:r("navds-radio__content")},v.createElement(rr,{as:"span",id:i,size:t,"aria-hidden":!0},e.children),e.description&&v.createElement(rr,{as:"span",id:d,size:t,className:r("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var Wm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Ll=(e,a,r)=>{const{outerHeightStyle:n,overflow:t}=a;return r.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==t)?(r.current+=1,a):e},Ml=e=>((e==null?void 0:e.ownerDocument)||document).defaultView||window;function _a(e){return parseInt(e,10)||0}const zm=c.forwardRef((e,a)=>{var r,n,{className:t,onChange:s,maxRows:l,minRows:i=1,autoScrollbar:d,style:g,value:u}=e,k=Wm(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=c.useRef(u!=null),p=c.useRef(null),f=rt(p,a),A=c.useRef(null),y=c.useRef(0),[F,E]=c.useState({outerHeightStyle:0}),R=v.useCallback(()=>{const b=p.current,K=Ml(b).getComputedStyle(b);if(K.width==="0px")return{outerHeightStyle:0};const V=A.current;V.style.width=K.width,V.value=b.value||k.placeholder||"x",V.value.slice(-1)===`
`&&(V.value+=" ");const j=K.boxSizing,I=_a(K.paddingBottom)+_a(K.paddingTop),P=_a(K.borderBottomWidth)+_a(K.borderTopWidth),H=V.scrollHeight-I;V.value="x";const C=V.scrollHeight-I;let $=H;i&&($=Math.max(Number(i)*C,$)),l&&($=Math.min(Number(l)*C,$)),$=Math.max($,C);const ie=$+(j==="border-box"?I+P:0),pe=Math.abs($-H)<=1;return{outerHeightStyle:ie,overflow:pe}},[l,i,k.placeholder]),S=()=>{const b=R();wl(b)||E(_=>Ll(_,b,y))};Un(()=>{const b=()=>{const I=R();wl(I)||Li.flushSync(()=>{E(P=>Ll(P,I,y))})},_=Bi(()=>{var I,P,H;if(y.current=0,!((I=p.current)===null||I===void 0)&&I.style.height||!((P=p.current)===null||P===void 0)&&P.style.width){((H=p.current)===null||H===void 0?void 0:H.style.overflow)==="hidden"&&E(C=>Object.assign(Object.assign({},C),{overflow:!1}));return}b()},166,!0),K=p.current,V=Ml(K);V.addEventListener("resize",_);let j;return typeof ResizeObserver<"u"&&(j=new ResizeObserver(_),j.observe(K)),()=>{_.clear(),V.removeEventListener("resize",_),j&&j.disconnect()}},[R]),Un(()=>{S()}),c.useEffect(()=>{y.current=0},[u]);const D=b=>{y.current=0,m||S(),s&&s(b)},N=Object.assign({"--__ac-textarea-height":F.outerHeightStyle+"px","--__axc-textarea-height":F.outerHeightStyle+"px",overflow:F.overflow&&!d&&!(!((r=p.current)===null||r===void 0)&&r.style.height)&&!(!((n=p.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},g);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:u,onChange:D,ref:f,rows:i,style:N},k,{className:t})),v.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:A,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},g)}))});function wl(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Xm=({maxLengthId:e,maxLength:a,currentLength:r,size:n,i18n:t})=>{const{cn:s}=se(),l=ya("Textarea",{charsLeft:t!=null&&t.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t!=null&&t.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),i=a-r,[d,g]=c.useState(i);return c.useEffect(()=>{const u=Bi(()=>{g(i)},2e3);return u(),()=>{u.clear()}},[i]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:s("navds-sr-only")},l("maxLength",{maxLength:a})),i<20&&v.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Vl(d,l)),v.createElement(rr,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":i<0}),size:n},Vl(i,l)))},Vl=(e,a)=>e<0?a("charsTooMany",{chars:Math.abs(e)}):a("charsLeft",{chars:e});var Zm=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Qm=c.forwardRef((e,a)=>{var r,n,t;const{inputProps:s,errorId:l,showErrorMsg:i,hasError:d,size:g,inputDescriptionId:u}=xn(e,"textarea"),{label:k,className:m,description:p,maxLength:f,hideLabel:A=!1,resize:y,UNSAFE_autoScrollbar:F,i18n:E,readOnly:R}=e,S=Zm(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:D}=se(),N=Ur(),b=f!==void 0&&f>0,[_,K]=c.useState((r=e==null?void 0:e.defaultValue)!==null&&r!==void 0?r:""),V=()=>{let I=S!=null&&S.minRows?S==null?void 0:S.minRows:3;return g==="small"&&(I=S!=null&&S.minRows?S==null?void 0:S.minRows:2),I},j=Ts(s["aria-describedby"],{[N??""]:b});return v.createElement("div",{className:D(m,"navds-form-field",`navds-form-field--${g}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":d,"navds-textarea--autoscrollbar":F,[`navds-textarea--resize-${y===!0?"both":y}`]:y})},v.createElement(gr,{htmlFor:s.id,size:g,className:D("navds-form-field__label",{"navds-sr-only":A})},R&&v.createElement(cs,null),k),!!p&&v.createElement(rr,{className:D("navds-form-field__description",{"navds-sr-only":A}),id:u,size:g,as:"div"},p),v.createElement(zm,Object.assign({},xe(S,["error","errorId","size"]),s,{onChange:Ui(e.onChange,e.value===void 0?I=>K(I.target.value):void 0),minRows:V(),autoScrollbar:F,ref:a,readOnly:R,className:D("navds-textarea__input","navds-body-short",`navds-body-short--${g??"medium"}`)},j?{"aria-describedby":j}:{})),b&&!R&&!s.disabled&&v.createElement(Xm,{maxLengthId:N,maxLength:f,currentLength:(t=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&t!==void 0?t:_.length,size:g,i18n:E}),v.createElement("div",{className:D("navds-form-field__error"),id:l,"aria-relevant":"additions removals","aria-live":"polite"},i&&v.createElement(Br,{size:g,showIcon:!0},e.error)))});var ep=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const rp=c.forwardRef((e,a)=>{const{cn:r}=se(),{inputProps:n,errorId:t,showErrorMsg:s,hasError:l,size:i,inputDescriptionId:d}=xn(e,"textField"),{label:g,className:u,description:k,htmlSize:m,hideLabel:p=!1,type:f="text",readOnly:A}=e,y=ep(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return v.createElement("div",{className:r(u,"navds-form-field",`navds-form-field--${i}`,{"navds-text-field--error":l,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":A,"navds-text-field--readonly":A})},v.createElement(gr,{htmlFor:n.id,size:i,className:r("navds-form-field__label",{"navds-sr-only":p})},A&&v.createElement(cs,null),g),!!k&&v.createElement(rr,{className:r("navds-form-field__description",{"navds-sr-only":p}),id:d,size:i,as:"div"},k),v.createElement("input",Object.assign({},xe(y,["error","errorId","size"]),n,{ref:a,type:f,readOnly:A,className:r("navds-text-field__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:m})),v.createElement("div",{className:r("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement(Br,{size:i,showIcon:!0},e.error)))});function np(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jl={exports:{}},na={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gl;function ap(){if(Gl)return na;Gl=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(n,t,s){var l=null;if(s!==void 0&&(l=""+s),t.key!==void 0&&(l=""+t.key),"key"in t){s={};for(var i in t)i!=="key"&&(s[i]=t[i])}else s=t;return t=s.ref,{$$typeof:e,type:n,key:l,ref:t!==void 0?t:null,props:s}}return na.Fragment=a,na.jsx=r,na.jsxs=r,na}var Ul;function tp(){return Ul||(Ul=1,jl.exports=ap()),jl.exports}var Je=tp();const sc=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:Je.jsx(nt,{variant:"warning",size:"small",children:Je.jsx(Q,{gap:"2",children:v.Children.map(e,a=>Je.jsx(rr,{size:"small",children:a},$d(a)?a.key:a))})}),ut={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};ce(ut);const Ha="#B7B1A9",Go=4,sp=(e,a,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${Ha};
    border-radius: ${Go}px;
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
`,lp=(e,a,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${Ha};
    border-radius: ${Go}px;
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
`,ip=(e,a,r,n)=>a?lp(e,r,n):sp(e,r,n),op=(e,a,r)=>r?"":a?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,er=({children:e,alignOffset:a=0,alignLeft:r=!1,marginTop:n=0,marginLeft:t=0,hideBorder:s=!1})=>Je.jsxs(Je.Fragment,{children:[Je.jsx("style",{dangerouslySetInnerHTML:{__html:ip(a,r,n,t)}}),Je.jsx("div",{className:op(a,r,s),children:e})]});var ql={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var xl;function dp(){return xl||(xl=1,function(e){(function(){var a={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var i=arguments[l];i&&(s=t(s,n.call(this,i)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var i in s)a.call(s,i)&&s[i]&&(l=t(l,this&&this[i]||i));return l}function t(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ql)),ql.exports}var up=dp();const Is=np(up),kp="_borderbox_1vkvn_1",gp="_error_1vkvn_5",vp="_warning_1vkvn_8",mp={borderbox:kp,error:gp,warning:vp},pp=Is.bind(mp),Be=({error:e=!1,className:a,children:r})=>Je.jsx(Ra,{padding:"4",className:pp("borderbox",{error:e},a),children:r}),Ep="_aksjonspunkt_kn1hn_1",yp="_erAksjonspunktApent_kn1hn_4",Tp="_erIkkeGodkjentAvBeslutter_kn1hn_8",cp={aksjonspunkt:Ep,erAksjonspunktApent:yp,erIkkeGodkjentAvBeslutter:Tp};Is.bind(cp);ce(ut);ce(ut);const fp="_divider_1t980_1",Ap="_dividerParagraf_1t980_8",Rp="_leftPanel_1t980_11",Fp="_rightPanel_1t980_14",ns={divider:fp,dividerParagraf:Ap,leftPanel:Rp,rightPanel:Fp},bp=Is.bind(ns),Np=({spaceUnder:e=!1,spaceAbove:a=!1,leftPanel:r=!1,rightPanel:n=!1,dividerParagraf:t=!1,className:s})=>Je.jsxs(Je.Fragment,{children:[a&&Je.jsx("div",{style:{marginBottom:"32px"}}),Je.jsx("div",{className:bp(s,{leftPanel:r,rightPanel:n}),children:Je.jsx("div",{className:t?ns.dividerParagraf:ns.divider})}),e&&Je.jsx("div",{style:{marginBottom:"32px"}})]}),Ls=()=>Je.jsx("span",{"data-testid":"editedIcon",children:Je.jsx(du,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});ce(ut);var Fa=e=>e.type==="checkbox",yn=e=>e instanceof Date,Qe=e=>e==null;const Uo=e=>typeof e=="object";var he=e=>!Qe(e)&&!Array.isArray(e)&&Uo(e)&&!yn(e),qo=e=>he(e)&&e.target?Fa(e.target)?e.target.checked:e.target.value:e,Op=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xo=(e,a)=>e.has(Op(a)),_p=e=>{const a=e.constructor&&e.constructor.prototype;return he(a)&&a.hasOwnProperty("isPrototypeOf")},Ms=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ae(e){let a;const r=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)a=new Date(e);else if(e instanceof Set)a=new Set(e);else if(!(Ms&&(e instanceof Blob||n))&&(r||he(e)))if(a=r?[]:{},!r&&!_p(e))a=e;else for(const t in e)e.hasOwnProperty(t)&&(a[t]=Ae(e[t]));else return e;return a}var ba=e=>Array.isArray(e)?e.filter(Boolean):[],Te=e=>e===void 0,M=(e,a,r)=>{if(!a||!he(e))return r;const n=ba(a.split(/[,[\].]+?/)).reduce((t,s)=>Qe(t)?t:t[s],e);return Te(n)||n===e?Te(e[a])?r:e[a]:n},ur=e=>typeof e=="boolean",ws=e=>/^\w*$/.test(e),Bo=e=>ba(e.replace(/["|']|\]/g,"").split(/\.|\[/)),de=(e,a,r)=>{let n=-1;const t=ws(a)?[a]:Bo(a),s=t.length,l=s-1;for(;++n<s;){const i=t[n];let d=r;if(n!==l){const g=e[i];d=he(g)||Array.isArray(g)?g:isNaN(+t[n+1])?{}:[]}if(i==="__proto__"||i==="constructor"||i==="prototype")return;e[i]=d,e=e[i]}};const Ya={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Mr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ho=v.createContext(null),X=()=>v.useContext(Ho),Sp=e=>{const{children:a,...r}=e;return v.createElement(Ho.Provider,{value:r},a)};var Yo=(e,a,r,n=!0)=>{const t={defaultValues:a._defaultValues};for(const s in e)Object.defineProperty(t,s,{get:()=>{const l=s;return a._proxyFormState[l]!==vr.all&&(a._proxyFormState[l]=!n||vr.all),r&&(r[l]=!0),e[l]}});return t};const Vs=typeof window<"u"?c.useLayoutEffect:c.useEffect;function hp(e){const a=X(),{control:r=a.control,disabled:n,name:t,exact:s}=e||{},[l,i]=v.useState(r._formState),d=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Vs(()=>r._subscribe({name:t,formState:d.current,exact:s,callback:g=>{!n&&i({...r._formState,...g})}}),[t,n,s]),v.useEffect(()=>{d.current.isValid&&r._setValid(!0)},[r]),v.useMemo(()=>Yo(l,r,d.current,!1),[l,r])}var Kr=e=>typeof e=="string",Co=(e,a,r,n,t)=>Kr(e)?(n&&a.watch.add(e),M(r,e,t)):Array.isArray(e)?e.map(s=>(n&&a.watch.add(s),M(r,s))):(n&&(a.watchAll=!0),r);function Kp(e){const a=X(),{control:r=a.control,name:n,defaultValue:t,disabled:s,exact:l}=e||{},i=v.useRef(t),[d,g]=v.useState(r._getWatch(n,i.current));return Vs(()=>r._subscribe({name:n,formState:{values:!0},exact:l,callback:u=>!s&&g(Co(n,r._names,u.values||r._formValues,!1,i.current))}),[n,r,s,l]),v.useEffect(()=>r._removeUnmounted()),d}function On(e){const a=X(),{name:r,disabled:n,control:t=a.control,shouldUnregister:s}=e,l=xo(t._names.array,r),i=Kp({control:t,name:r,defaultValue:M(t._formValues,r,M(t._defaultValues,r,e.defaultValue)),exact:!0}),d=hp({control:t,name:r,exact:!0}),g=v.useRef(e),u=v.useRef(t.register(r,{...e.rules,value:i,...ur(e.disabled)?{disabled:e.disabled}:{}})),k=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!M(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!M(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!M(d.touchedFields,r)},isValidating:{enumerable:!0,get:()=>!!M(d.validatingFields,r)},error:{enumerable:!0,get:()=>M(d.errors,r)}}),[d,r]),m=v.useCallback(y=>u.current.onChange({target:{value:qo(y),name:r},type:Ya.CHANGE}),[r]),p=v.useCallback(()=>u.current.onBlur({target:{value:M(t._formValues,r),name:r},type:Ya.BLUR}),[r,t._formValues]),f=v.useCallback(y=>{const F=M(t._fields,r);F&&y&&(F._f.ref={focus:()=>y.focus(),select:()=>y.select(),setCustomValidity:E=>y.setCustomValidity(E),reportValidity:()=>y.reportValidity()})},[t._fields,r]),A=v.useMemo(()=>({name:r,value:i,...ur(n)||d.disabled?{disabled:d.disabled||n}:{},onChange:m,onBlur:p,ref:f}),[r,n,d.disabled,m,p,f,i]);return v.useEffect(()=>{const y=t._options.shouldUnregister||s;t.register(r,{...g.current.rules,...ur(g.current.disabled)?{disabled:g.current.disabled}:{}});const F=(E,R)=>{const S=M(t._fields,E);S&&S._f&&(S._f.mount=R)};if(F(r,!0),y){const E=Ae(M(t._options.defaultValues,r));de(t._defaultValues,r,E),Te(M(t._formValues,r))&&de(t._formValues,r,E)}return!l&&t.register(r),()=>{(l?y&&!t._state.action:y)?t.unregister(r):F(r,!1)}},[r,t,l,s]),v.useEffect(()=>{t._setDisabledField({disabled:n,name:r})},[n,r,t]),v.useMemo(()=>({field:A,formState:d,fieldState:k}),[A,d,k])}var Dp=(e,a,r,n,t)=>a?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:t||!0}}:{},nr=e=>Array.isArray(e)?e:[e],Bl=()=>{let e=[];return{get observers(){return e},next:t=>{for(const s of e)s.next&&s.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(s=>s!==t)}}),unsubscribe:()=>{e=[]}}},as=e=>Qe(e)||!Uo(e);function Zr(e,a){if(as(e)||as(a))return e===a;if(yn(e)&&yn(a))return e.getTime()===a.getTime();const r=Object.keys(e),n=Object.keys(a);if(r.length!==n.length)return!1;for(const t of r){const s=e[t];if(!n.includes(t))return!1;if(t!=="ref"){const l=a[t];if(yn(s)&&yn(l)||he(s)&&he(l)||Array.isArray(s)&&Array.isArray(l)?!Zr(s,l):s!==l)return!1}}return!0}var Ce=e=>he(e)&&!Object.keys(e).length,js=e=>e.type==="file",yr=e=>typeof e=="function",Ca=e=>{if(!Ms)return!1;const a=e?e.ownerDocument:0;return e instanceof(a&&a.defaultView?a.defaultView.HTMLElement:HTMLElement)},$o=e=>e.type==="select-multiple",Gs=e=>e.type==="radio",Pp=e=>Gs(e)||Fa(e),wt=e=>Ca(e)&&e.isConnected;function Ip(e,a){const r=a.slice(0,-1).length;let n=0;for(;n<r;)e=Te(e)?n++:e[a[n++]];return e}function Lp(e){for(const a in e)if(e.hasOwnProperty(a)&&!Te(e[a]))return!1;return!0}function Ie(e,a){const r=Array.isArray(a)?a:ws(a)?[a]:Bo(a),n=r.length===1?e:Ip(e,r),t=r.length-1,s=r[t];return n&&delete n[s],t!==0&&(he(n)&&Ce(n)||Array.isArray(n)&&Lp(n))&&Ie(e,r.slice(0,-1)),e}var Jo=e=>{for(const a in e)if(yr(e[a]))return!0;return!1};function $a(e,a={}){const r=Array.isArray(e);if(he(e)||r)for(const n in e)Array.isArray(e[n])||he(e[n])&&!Jo(e[n])?(a[n]=Array.isArray(e[n])?[]:{},$a(e[n],a[n])):Qe(e[n])||(a[n]=!0);return a}function Wo(e,a,r){const n=Array.isArray(e);if(he(e)||n)for(const t in e)Array.isArray(e[t])||he(e[t])&&!Jo(e[t])?Te(a)||as(r[t])?r[t]=Array.isArray(e[t])?$a(e[t],[]):{...$a(e[t])}:Wo(e[t],Qe(a)?{}:a[t],r[t]):r[t]=!Zr(e[t],a[t]);return r}var aa=(e,a)=>Wo(e,a,$a(a));const Hl={value:!1,isValid:!1},Yl={value:!0,isValid:!0};var zo=e=>{if(Array.isArray(e)){if(e.length>1){const a=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:a,isValid:!!a.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Te(e[0].attributes.value)?Te(e[0].value)||e[0].value===""?Yl:{value:e[0].value,isValid:!0}:Yl:Hl}return Hl},Xo=(e,{valueAsNumber:a,valueAsDate:r,setValueAs:n})=>Te(e)?e:a?e===""?NaN:e&&+e:r&&Kr(e)?new Date(e):n?n(e):e;const Cl={isValid:!1,value:null};var Zo=e=>Array.isArray(e)?e.reduce((a,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:a,Cl):Cl;function $l(e){const a=e.ref;return js(a)?a.files:Gs(a)?Zo(e.refs).value:$o(a)?[...a.selectedOptions].map(({value:r})=>r):Fa(a)?zo(e.refs).value:Xo(Te(a.value)?e.ref.value:a.value,e)}var Mp=(e,a,r,n)=>{const t={};for(const s of e){const l=M(a,s);l&&de(t,s,l._f)}return{criteriaMode:r,names:[...e],fields:t,shouldUseNativeValidation:n}},Ja=e=>e instanceof RegExp,ta=e=>Te(e)?e:Ja(e)?e.source:he(e)?Ja(e.value)?e.value.source:e.value:e,In=e=>({isOnSubmit:!e||e===vr.onSubmit,isOnBlur:e===vr.onBlur,isOnChange:e===vr.onChange,isOnAll:e===vr.all,isOnTouch:e===vr.onTouched});const Jl="AsyncFunction";var wp=e=>!!e&&!!e.validate&&!!(yr(e.validate)&&e.validate.constructor.name===Jl||he(e.validate)&&Object.values(e.validate).find(a=>a.constructor.name===Jl)),Vp=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ts=(e,a,r)=>!r&&(a.watchAll||a.watch.has(e)||[...a.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const jn=(e,a,r,n)=>{for(const t of r||Object.keys(e)){const s=M(e,t);if(s){const{_f:l,...i}=s;if(l){if(l.refs&&l.refs[0]&&a(l.refs[0],t)&&!n)return!0;if(l.ref&&a(l.ref,l.name)&&!n)return!0;if(jn(i,a))break}else if(he(i)&&jn(i,a))break}}};function Wl(e,a,r){const n=M(e,r);if(n||ws(r))return{error:n,name:r};const t=r.split(".");for(;t.length;){const s=t.join("."),l=M(a,s),i=M(e,s);if(l&&!Array.isArray(l)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};t.pop()}return{name:r}}var jp=(e,a,r,n)=>{r(e);const{name:t,...s}=e;return Ce(s)||Object.keys(s).length>=Object.keys(a).length||Object.keys(s).find(l=>a[l]===(!n||vr.all))},Gp=(e,a,r)=>!e||!a||e===a||nr(e).some(n=>n&&(r?n===a:n.startsWith(a)||a.startsWith(n))),Up=(e,a,r,n,t)=>t.isOnAll?!1:!r&&t.isOnTouch?!(a||e):(r?n.isOnBlur:t.isOnBlur)?!e:(r?n.isOnChange:t.isOnChange)?e:!0,qp=(e,a)=>!ba(M(e,a)).length&&Ie(e,a),Qo=(e,a,r)=>{const n=nr(M(e,r));return de(n,"root",a[r]),de(e,r,n),e},La=e=>Kr(e);function zl(e,a,r="validate"){if(La(e)||Array.isArray(e)&&e.every(La)||ur(e)&&!e)return{type:r,message:La(e)?e:"",ref:a}}var Dn=e=>he(e)&&!Ja(e)?e:{value:e,message:""},ss=async(e,a,r,n,t,s)=>{const{ref:l,refs:i,required:d,maxLength:g,minLength:u,min:k,max:m,pattern:p,validate:f,name:A,valueAsNumber:y,mount:F}=e._f,E=M(r,A);if(!F||a.has(A))return{};const R=i?i[0]:l,S=I=>{t&&R.reportValidity&&(R.setCustomValidity(ur(I)?"":I||""),R.reportValidity())},D={},N=Gs(l),b=Fa(l),_=N||b,K=(y||js(l))&&Te(l.value)&&Te(E)||Ca(l)&&l.value===""||E===""||Array.isArray(E)&&!E.length,V=Dp.bind(null,A,n,D),j=(I,P,H,C=Mr.maxLength,$=Mr.minLength)=>{const ie=I?P:H;D[A]={type:I?C:$,message:ie,ref:l,...V(I?C:$,ie)}};if(s?!Array.isArray(E)||!E.length:d&&(!_&&(K||Qe(E))||ur(E)&&!E||b&&!zo(i).isValid||N&&!Zo(i).isValid)){const{value:I,message:P}=La(d)?{value:!!d,message:d}:Dn(d);if(I&&(D[A]={type:Mr.required,message:P,ref:R,...V(Mr.required,P)},!n))return S(P),D}if(!K&&(!Qe(k)||!Qe(m))){let I,P;const H=Dn(m),C=Dn(k);if(!Qe(E)&&!isNaN(E)){const $=l.valueAsNumber||E&&+E;Qe(H.value)||(I=$>H.value),Qe(C.value)||(P=$<C.value)}else{const $=l.valueAsDate||new Date(E),ie=He=>new Date(new Date().toDateString()+" "+He),pe=l.type=="time",De=l.type=="week";Kr(H.value)&&E&&(I=pe?ie(E)>ie(H.value):De?E>H.value:$>new Date(H.value)),Kr(C.value)&&E&&(P=pe?ie(E)<ie(C.value):De?E<C.value:$<new Date(C.value))}if((I||P)&&(j(!!I,H.message,C.message,Mr.max,Mr.min),!n))return S(D[A].message),D}if((g||u)&&!K&&(Kr(E)||s&&Array.isArray(E))){const I=Dn(g),P=Dn(u),H=!Qe(I.value)&&E.length>+I.value,C=!Qe(P.value)&&E.length<+P.value;if((H||C)&&(j(H,I.message,P.message),!n))return S(D[A].message),D}if(p&&!K&&Kr(E)){const{value:I,message:P}=Dn(p);if(Ja(I)&&!E.match(I)&&(D[A]={type:Mr.pattern,message:P,ref:l,...V(Mr.pattern,P)},!n))return S(P),D}if(f){if(yr(f)){const I=await f(E,r),P=zl(I,R);if(P&&(D[A]={...P,...V(Mr.validate,P.message)},!n))return S(P.message),D}else if(he(f)){let I={};for(const P in f){if(!Ce(I)&&!n)break;const H=zl(await f[P](E,r),R,P);H&&(I={...H,...V(P,H.message)},S(H.message),n&&(D[A]=I))}if(!Ce(I)&&(D[A]={ref:R,...I},!n))return D}}return S(!0),D};const xp={mode:vr.onSubmit,reValidateMode:vr.onChange,shouldFocusError:!0};function Bp(e={}){let a={...xp,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:yr(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1};const n={};let t=he(a.defaultValues)||he(a.values)?Ae(a.defaultValues||a.values)||{}:{},s=a.shouldUnregister?{}:Ae(t),l={action:!1,mount:!1,watch:!1},i={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,g=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let k={...u};const m={array:Bl(),state:Bl()},p=In(a.mode),f=In(a.reValidateMode),A=a.criteriaMode===vr.all,y=T=>O=>{clearTimeout(g),g=setTimeout(T,O)},F=async T=>{if(!a.disabled&&(u.isValid||k.isValid||T)){const O=a.resolver?Ce((await K()).errors):await j(n,!0);O!==r.isValid&&m.state.next({isValid:O})}},E=(T,O)=>{!a.disabled&&(u.isValidating||u.validatingFields||k.isValidating||k.validatingFields)&&((T||Array.from(i.mount)).forEach(h=>{h&&(O?de(r.validatingFields,h,O):Ie(r.validatingFields,h))}),m.state.next({validatingFields:r.validatingFields,isValidating:!Ce(r.validatingFields)}))},R=(T,O=[],h,q,w=!0,L=!0)=>{if(q&&h&&!a.disabled){if(l.action=!0,L&&Array.isArray(M(n,T))){const B=h(M(n,T),q.argA,q.argB);w&&de(n,T,B)}if(L&&Array.isArray(M(r.errors,T))){const B=h(M(r.errors,T),q.argA,q.argB);w&&de(r.errors,T,B),qp(r.errors,T)}if((u.touchedFields||k.touchedFields)&&L&&Array.isArray(M(r.touchedFields,T))){const B=h(M(r.touchedFields,T),q.argA,q.argB);w&&de(r.touchedFields,T,B)}(u.dirtyFields||k.dirtyFields)&&(r.dirtyFields=aa(t,s)),m.state.next({name:T,isDirty:P(T,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else de(s,T,O)},S=(T,O)=>{de(r.errors,T,O),m.state.next({errors:r.errors})},D=T=>{r.errors=T,m.state.next({errors:r.errors,isValid:!1})},N=(T,O,h,q)=>{const w=M(n,T);if(w){const L=M(s,T,Te(h)?M(t,T):h);Te(L)||q&&q.defaultChecked||O?de(s,T,O?L:$l(w._f)):$(T,L),l.mount&&F()}},b=(T,O,h,q,w)=>{let L=!1,B=!1;const te={name:T};if(!a.disabled){if(!h||q){(u.isDirty||k.isDirty)&&(B=r.isDirty,r.isDirty=te.isDirty=P(),L=B!==te.isDirty);const be=Zr(M(t,T),O);B=!!M(r.dirtyFields,T),be?Ie(r.dirtyFields,T):de(r.dirtyFields,T,!0),te.dirtyFields=r.dirtyFields,L=L||(u.dirtyFields||k.dirtyFields)&&B!==!be}if(h){const be=M(r.touchedFields,T);be||(de(r.touchedFields,T,h),te.touchedFields=r.touchedFields,L=L||(u.touchedFields||k.touchedFields)&&be!==h)}L&&w&&m.state.next(te)}return L?te:{}},_=(T,O,h,q)=>{const w=M(r.errors,T),L=(u.isValid||k.isValid)&&ur(O)&&r.isValid!==O;if(a.delayError&&h?(d=y(()=>S(T,h)),d(a.delayError)):(clearTimeout(g),d=null,h?de(r.errors,T,h):Ie(r.errors,T)),(h?!Zr(w,h):w)||!Ce(q)||L){const B={...q,...L&&ur(O)?{isValid:O}:{},errors:r.errors,name:T};r={...r,...B},m.state.next(B)}},K=async T=>{E(T,!0);const O=await a.resolver(s,a.context,Mp(T||i.mount,n,a.criteriaMode,a.shouldUseNativeValidation));return E(T),O},V=async T=>{const{errors:O}=await K(T);if(T)for(const h of T){const q=M(O,h);q?de(r.errors,h,q):Ie(r.errors,h)}else r.errors=O;return O},j=async(T,O,h={valid:!0})=>{for(const q in T){const w=T[q];if(w){const{_f:L,...B}=w;if(L){const te=i.array.has(L.name),be=w._f&&wp(w._f);be&&u.validatingFields&&E([q],!0);const je=await ss(w,i.disabled,s,A,a.shouldUseNativeValidation&&!O,te);if(be&&u.validatingFields&&E([q]),je[L.name]&&(h.valid=!1,O))break;!O&&(M(je,L.name)?te?Qo(r.errors,je,L.name):de(r.errors,L.name,je[L.name]):Ie(r.errors,L.name))}!Ce(B)&&await j(B,O,h)}}return h.valid},I=()=>{for(const T of i.unMount){const O=M(n,T);O&&(O._f.refs?O._f.refs.every(h=>!wt(h)):!wt(O._f.ref))&&Cr(T)}i.unMount=new Set},P=(T,O)=>!a.disabled&&(T&&O&&de(s,T,O),!Zr(Rr(),t)),H=(T,O,h)=>Co(T,i,{...l.mount?s:Te(O)?t:Kr(T)?{[T]:O}:O},h,O),C=T=>ba(M(l.mount?s:t,T,a.shouldUnregister?M(t,T,[]):[])),$=(T,O,h={})=>{const q=M(n,T);let w=O;if(q){const L=q._f;L&&(!L.disabled&&de(s,T,Xo(O,L)),w=Ca(L.ref)&&Qe(O)?"":O,$o(L.ref)?[...L.ref.options].forEach(B=>B.selected=w.includes(B.value)):L.refs?Fa(L.ref)?L.refs.length>1?L.refs.forEach(B=>(!B.defaultChecked||!B.disabled)&&(B.checked=Array.isArray(w)?!!w.find(te=>te===B.value):w===B.value)):L.refs[0]&&(L.refs[0].checked=!!w):L.refs.forEach(B=>B.checked=B.value===w):js(L.ref)?L.ref.value="":(L.ref.value=w,L.ref.type||m.state.next({name:T,values:Ae(s)})))}(h.shouldDirty||h.shouldTouch)&&b(T,w,h.shouldTouch,h.shouldDirty,!0),h.shouldValidate&&Fe(T)},ie=(T,O,h)=>{for(const q in O){const w=O[q],L=`${T}.${q}`,B=M(n,L);(i.array.has(T)||he(w)||B&&!B._f)&&!yn(w)?ie(L,w,h):$(L,w,h)}},pe=(T,O,h={})=>{const q=M(n,T),w=i.array.has(T),L=Ae(O);de(s,T,L),w?(m.array.next({name:T,values:Ae(s)}),(u.isDirty||u.dirtyFields||k.isDirty||k.dirtyFields)&&h.shouldDirty&&m.state.next({name:T,dirtyFields:aa(t,s),isDirty:P(T,L)})):q&&!q._f&&!Qe(L)?ie(T,L,h):$(T,L,h),ts(T,i)&&m.state.next({...r}),m.state.next({name:l.mount?T:void 0,values:Ae(s)})},De=async T=>{l.mount=!0;const O=T.target;let h=O.name,q=!0;const w=M(n,h),L=B=>{q=Number.isNaN(B)||yn(B)&&isNaN(B.getTime())||Zr(B,M(s,h,B))};if(w){let B,te;const be=O.type?$l(w._f):qo(T),je=T.type===Ya.BLUR||T.type===Ya.FOCUS_OUT,Ot=!Vp(w._f)&&!a.resolver&&!M(r.errors,h)&&!w._f.deps||Up(je,M(r.touchedFields,h),r.isSubmitted,f,p),ee=ts(h,i,je);de(s,h,be),je?(w._f.onBlur&&w._f.onBlur(T),d&&d(0)):w._f.onChange&&w._f.onChange(T);const ye=b(h,be,je),ve=!Ce(ye)||ee;if(!je&&m.state.next({name:h,type:T.type,values:Ae(s)}),Ot)return(u.isValid||k.isValid)&&(a.mode==="onBlur"?je&&F():je||F()),ve&&m.state.next({name:h,...ee?{}:ye});if(!je&&ee&&m.state.next({...r}),a.resolver){const{errors:Er}=await K([h]);if(L(be),q){const ir=Wl(r.errors,n,h),dn=Wl(Er,n,ir.name||h);B=dn.error,h=dn.name,te=Ce(Er)}}else E([h],!0),B=(await ss(w,i.disabled,s,A,a.shouldUseNativeValidation))[h],E([h]),L(be),q&&(B?te=!1:(u.isValid||k.isValid)&&(te=await j(n,!0)));q&&(w._f.deps&&Fe(w._f.deps),_(h,te,B,ye))}},He=(T,O)=>{if(M(r.errors,O)&&T.focus)return T.focus(),1},Fe=async(T,O={})=>{let h,q;const w=nr(T);if(a.resolver){const L=await V(Te(T)?T:w);h=Ce(L),q=T?!w.some(B=>M(L,B)):h}else T?(q=(await Promise.all(w.map(async L=>{const B=M(n,L);return await j(B&&B._f?{[L]:B}:B)}))).every(Boolean),!(!q&&!r.isValid)&&F()):q=h=await j(n);return m.state.next({...!Kr(T)||(u.isValid||k.isValid)&&h!==r.isValid?{}:{name:T},...a.resolver||!T?{isValid:h}:{},errors:r.errors}),O.shouldFocus&&!q&&jn(n,He,T?w:i.mount),q},Rr=T=>{const O={...l.mount?s:t};return Te(T)?O:Kr(T)?M(O,T):T.map(h=>M(O,h))},lr=(T,O)=>({invalid:!!M((O||r).errors,T),isDirty:!!M((O||r).dirtyFields,T),error:M((O||r).errors,T),isValidating:!!M(r.validatingFields,T),isTouched:!!M((O||r).touchedFields,T)}),Sn=T=>{T&&nr(T).forEach(O=>Ie(r.errors,O)),m.state.next({errors:T?r.errors:{}})},Z=(T,O,h)=>{const q=(M(n,T,{_f:{}})._f||{}).ref,w=M(r.errors,T)||{},{ref:L,message:B,type:te,...be}=w;de(r.errors,T,{...be,...O,ref:q}),m.state.next({name:T,errors:r.errors,isValid:!1}),h&&h.shouldFocus&&q&&q.focus&&q.focus()},z=(T,O)=>yr(T)?m.state.subscribe({next:h=>T(H(void 0,O),h)}):H(T,O,!0),Pe=T=>m.state.subscribe({next:O=>{Gp(T.name,O.name,T.exact)&&jp(O,T.formState||u,on,T.reRenderRoot)&&T.callback({values:{...s},...r,...O})}}).unsubscribe,Ze=T=>(l.mount=!0,k={...k,...T.formState},Pe({...T,formState:k})),Cr=(T,O={})=>{for(const h of T?nr(T):i.mount)i.mount.delete(h),i.array.delete(h),O.keepValue||(Ie(n,h),Ie(s,h)),!O.keepError&&Ie(r.errors,h),!O.keepDirty&&Ie(r.dirtyFields,h),!O.keepTouched&&Ie(r.touchedFields,h),!O.keepIsValidating&&Ie(r.validatingFields,h),!a.shouldUnregister&&!O.keepDefaultValue&&Ie(t,h);m.state.next({values:Ae(s)}),m.state.next({...r,...O.keepDirty?{isDirty:P()}:{}}),!O.keepIsValid&&F()},tn=({disabled:T,name:O})=>{(ur(T)&&l.mount||T||i.disabled.has(O))&&(T?i.disabled.add(O):i.disabled.delete(O))},Pr=(T,O={})=>{let h=M(n,T);const q=ur(O.disabled)||ur(a.disabled);return de(n,T,{...h||{},_f:{...h&&h._f?h._f:{ref:{name:T}},name:T,mount:!0,...O}}),i.mount.add(T),h?tn({disabled:ur(O.disabled)?O.disabled:a.disabled,name:T}):N(T,!0,O.value),{...q?{disabled:O.disabled||a.disabled}:{},...a.progressive?{required:!!O.required,min:ta(O.min),max:ta(O.max),minLength:ta(O.minLength),maxLength:ta(O.maxLength),pattern:ta(O.pattern)}:{},name:T,onChange:De,onBlur:De,ref:w=>{if(w){Pr(T,O),h=M(n,T);const L=Te(w.value)&&w.querySelectorAll&&w.querySelectorAll("input,select,textarea")[0]||w,B=Pp(L),te=h._f.refs||[];if(B?te.find(be=>be===L):L===h._f.ref)return;de(n,T,{_f:{...h._f,...B?{refs:[...te.filter(wt),L,...Array.isArray(M(t,T))?[{}]:[]],ref:{type:L.type,name:T}}:{ref:L}}}),N(T,!1,void 0,L)}else h=M(n,T,{}),h._f&&(h._f.mount=!1),(a.shouldUnregister||O.shouldUnregister)&&!(xo(i.array,T)&&l.action)&&i.unMount.add(T)}}},$r=()=>a.shouldFocusError&&jn(n,He,i.mount),sn=T=>{ur(T)&&(m.state.next({disabled:T}),jn(n,(O,h)=>{const q=M(n,h);q&&(O.disabled=q._f.disabled||T,Array.isArray(q._f.refs)&&q._f.refs.forEach(w=>{w.disabled=q._f.disabled||T}))},0,!1))},Ir=(T,O)=>async h=>{let q;h&&(h.preventDefault&&h.preventDefault(),h.persist&&h.persist());let w=Ae(s);if(m.state.next({isSubmitting:!0}),a.resolver){const{errors:L,values:B}=await K();r.errors=L,w=B}else await j(n);if(i.disabled.size)for(const L of i.disabled)de(w,L,void 0);if(Ie(r.errors,"root"),Ce(r.errors)){m.state.next({errors:{}});try{await T(w,h)}catch(L){q=L}}else O&&await O({...r.errors},h),$r(),setTimeout($r);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ce(r.errors)&&!q,submitCount:r.submitCount+1,errors:r.errors}),q)throw q},Jr=(T,O={})=>{M(n,T)&&(Te(O.defaultValue)?pe(T,Ae(M(t,T))):(pe(T,O.defaultValue),de(t,T,Ae(O.defaultValue))),O.keepTouched||Ie(r.touchedFields,T),O.keepDirty||(Ie(r.dirtyFields,T),r.isDirty=O.defaultValue?P(T,Ae(M(t,T))):P()),O.keepError||(Ie(r.errors,T),u.isValid&&F()),m.state.next({...r}))},Wr=(T,O={})=>{const h=T?Ae(T):t,q=Ae(h),w=Ce(T),L=w?t:q;if(O.keepDefaultValues||(t=h),!O.keepValues){if(O.keepDirtyValues){const B=new Set([...i.mount,...Object.keys(aa(t,s))]);for(const te of Array.from(B))M(r.dirtyFields,te)?de(L,te,M(s,te)):pe(te,M(L,te))}else{if(Ms&&Te(T))for(const B of i.mount){const te=M(n,B);if(te&&te._f){const be=Array.isArray(te._f.refs)?te._f.refs[0]:te._f.ref;if(Ca(be)){const je=be.closest("form");if(je){je.reset();break}}}}for(const B of i.mount)pe(B,M(L,B))}s=Ae(L),m.array.next({values:{...L}}),m.state.next({values:{...L}})}i={mount:O.keepDirtyValues?i.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!u.isValid||!!O.keepIsValid||!!O.keepDirtyValues,l.watch=!!a.shouldUnregister,m.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:w?!1:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!Zr(T,t)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:w?{}:O.keepDirtyValues?O.keepDefaultValues&&s?aa(t,s):r.dirtyFields:O.keepDefaultValues&&T?aa(t,T):O.keepDirty?r.dirtyFields:{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Lr=(T,O)=>Wr(yr(T)?T(s):T,O),ln=(T,O={})=>{const h=M(n,T),q=h&&h._f;if(q){const w=q.refs?q.refs[0]:q.ref;w.focus&&(w.focus(),O.shouldSelect&&yr(w.select)&&w.select())}},on=T=>{r={...r,...T}},Oa={control:{register:Pr,unregister:Cr,getFieldState:lr,handleSubmit:Ir,setError:Z,_subscribe:Pe,_runSchema:K,_getWatch:H,_getDirty:P,_setValid:F,_setFieldArray:R,_setDisabledField:tn,_setErrors:D,_getFieldArray:C,_reset:Wr,_resetDefaultValues:()=>yr(a.defaultValues)&&a.defaultValues().then(T=>{Lr(T,a.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:I,_disableForm:sn,_subjects:m,_proxyFormState:u,get _fields(){return n},get _formValues(){return s},get _state(){return l},set _state(T){l=T},get _defaultValues(){return t},get _names(){return i},set _names(T){i=T},get _formState(){return r},get _options(){return a},set _options(T){a={...a,...T}}},subscribe:Ze,trigger:Fe,register:Pr,handleSubmit:Ir,watch:z,setValue:pe,getValues:Rr,reset:Lr,resetField:Jr,clearErrors:Sn,unregister:Cr,setError:Z,setFocus:ln,getFieldState:lr};return{...Oa,formControl:Oa}}var Xr=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const r=(Math.random()*16+e)%16|0;return(a=="x"?r:r&3|8).toString(16)})},Vt=(e,a,r={})=>r.shouldFocus||Te(r.shouldFocus)?r.focusName||`${e}.${Te(r.focusIndex)?a:r.focusIndex}.`:"",jt=(e,a)=>[...e,...nr(a)],Gt=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Ut(e,a,r){return[...e.slice(0,a),...nr(r),...e.slice(a)]}var qt=(e,a,r)=>Array.isArray(e)?(Te(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(a,1)[0]),e):[],xt=(e,a)=>[...nr(a),...nr(e)];function Hp(e,a){let r=0;const n=[...e];for(const t of a)n.splice(t-r,1),r++;return ba(n).length?n:[]}var Bt=(e,a)=>Te(a)?[]:Hp(e,nr(a).sort((r,n)=>r-n)),Ht=(e,a,r)=>{[e[a],e[r]]=[e[r],e[a]]},Xl=(e,a,r)=>(e[a]=r,e);function sr(e){const a=X(),{control:r=a.control,name:n,keyName:t="id",shouldUnregister:s,rules:l}=e,[i,d]=v.useState(r._getFieldArray(n)),g=v.useRef(r._getFieldArray(n).map(Xr)),u=v.useRef(i),k=v.useRef(n),m=v.useRef(!1);k.current=n,u.current=i,r._names.array.add(n),l&&r.register(n,l),v.useEffect(()=>r._subjects.array.subscribe({next:({values:N,name:b})=>{if(b===k.current||!b){const _=M(N,k.current);Array.isArray(_)&&(d(_),g.current=_.map(Xr))}}}).unsubscribe,[r]);const p=v.useCallback(N=>{m.current=!0,r._setFieldArray(n,N)},[r,n]),f=(N,b)=>{const _=nr(Ae(N)),K=jt(r._getFieldArray(n),_);r._names.focus=Vt(n,K.length-1,b),g.current=jt(g.current,_.map(Xr)),p(K),d(K),r._setFieldArray(n,K,jt,{argA:Gt(N)})},A=(N,b)=>{const _=nr(Ae(N)),K=xt(r._getFieldArray(n),_);r._names.focus=Vt(n,0,b),g.current=xt(g.current,_.map(Xr)),p(K),d(K),r._setFieldArray(n,K,xt,{argA:Gt(N)})},y=N=>{const b=Bt(r._getFieldArray(n),N);g.current=Bt(g.current,N),p(b),d(b),!Array.isArray(M(r._fields,n))&&de(r._fields,n,void 0),r._setFieldArray(n,b,Bt,{argA:N})},F=(N,b,_)=>{const K=nr(Ae(b)),V=Ut(r._getFieldArray(n),N,K);r._names.focus=Vt(n,N,_),g.current=Ut(g.current,N,K.map(Xr)),p(V),d(V),r._setFieldArray(n,V,Ut,{argA:N,argB:Gt(b)})},E=(N,b)=>{const _=r._getFieldArray(n);Ht(_,N,b),Ht(g.current,N,b),p(_),d(_),r._setFieldArray(n,_,Ht,{argA:N,argB:b},!1)},R=(N,b)=>{const _=r._getFieldArray(n);qt(_,N,b),qt(g.current,N,b),p(_),d(_),r._setFieldArray(n,_,qt,{argA:N,argB:b},!1)},S=(N,b)=>{const _=Ae(b),K=Xl(r._getFieldArray(n),N,_);g.current=[...K].map((V,j)=>!V||j===N?Xr():g.current[j]),p(K),d([...K]),r._setFieldArray(n,K,Xl,{argA:N,argB:_},!0,!1)},D=N=>{const b=nr(Ae(N));g.current=b.map(Xr),p([...b]),d([...b]),r._setFieldArray(n,[...b],_=>_,{},!0,!1)};return v.useEffect(()=>{if(r._state.action=!1,ts(n,r._names)&&r._subjects.state.next({...r._formState}),m.current&&(!In(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!In(r._options.reValidateMode).isOnSubmit)if(r._options.resolver)r._runSchema([n]).then(N=>{const b=M(N.errors,n),_=M(r._formState.errors,n);(_?!b&&_.type||b&&(_.type!==b.type||_.message!==b.message):b&&b.type)&&(b?de(r._formState.errors,n,b):Ie(r._formState.errors,n),r._subjects.state.next({errors:r._formState.errors}))});else{const N=M(r._fields,n);N&&N._f&&!(In(r._options.reValidateMode).isOnSubmit&&In(r._options.mode).isOnSubmit)&&ss(N,r._names.disabled,r._formValues,r._options.criteriaMode===vr.all,r._options.shouldUseNativeValidation,!0).then(b=>!Ce(b)&&r._subjects.state.next({errors:Qo(r._formState.errors,b,n)}))}r._subjects.state.next({name:n,values:Ae(r._formValues)}),r._names.focus&&jn(r._fields,(N,b)=>{if(r._names.focus&&b.startsWith(r._names.focus)&&N.focus)return N.focus(),1}),r._names.focus="",r._setValid(),m.current=!1},[i,n,r]),v.useEffect(()=>(!M(r._formValues,n)&&r._setFieldArray(n),()=>{const N=(b,_)=>{const K=M(r._fields,b);K&&K._f&&(K._f.mount=_)};r._options.shouldUnregister||s?r.unregister(n):N(n,!1)}),[n,r,t,s]),{swap:v.useCallback(E,[p,n,r]),move:v.useCallback(R,[p,n,r]),prepend:v.useCallback(A,[p,n,r]),append:v.useCallback(f,[p,n,r]),remove:v.useCallback(y,[p,n,r]),insert:v.useCallback(F,[p,n,r]),update:v.useCallback(S,[p,n,r]),replace:v.useCallback(D,[p,n,r]),fields:v.useMemo(()=>i.map((N,b)=>({...N,[t]:g.current[b]||Xr()})),[i,t])}}function lc(e={}){const a=v.useRef(void 0),r=v.useRef(void 0),[n,t]=v.useState({isDirty:!1,isValidating:!1,isLoading:yr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:yr(e.defaultValues)?void 0:e.defaultValues});a.current||(a.current={...e.formControl?e.formControl:Bp(e),formState:n},e.formControl&&e.defaultValues&&!yr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const s=a.current.control;return s._options=e,Vs(()=>{const l=s._subscribe({formState:s._proxyFormState,callback:()=>t({...s._formState}),reRenderRoot:!0});return t(i=>({...i,isReady:!0})),s._formState.isReady=!0,l},[s]),v.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),v.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode),e.errors&&!Ce(e.errors)&&s._setErrors(e.errors)},[s,e.errors,e.mode,e.reValidateMode]),v.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),v.useEffect(()=>{if(s._proxyFormState.isDirty){const l=s._getDirty();l!==n.isDirty&&s._subjects.state.next({isDirty:l})}},[s,n.isDirty]),v.useEffect(()=>{e.values&&!Zr(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,t(l=>({...l}))):s._resetDefaultValues()},[s,e.values]),v.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),a.current.formState=Yo(n,s),a.current}function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zl={exports:{}},sa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ql;function Cp(){if(Ql)return sa;Ql=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(n,t,s){var l=null;if(s!==void 0&&(l=""+s),t.key!==void 0&&(l=""+t.key),"key"in t){s={};for(var i in t)i!=="key"&&(s[i]=t[i])}else s=t;return t=s.ref,{$$typeof:e,type:n,key:l,ref:t!==void 0?t:null,props:s}}return sa.Fragment=a,sa.jsx=r,sa.jsxs=r,sa}var ei;function $p(){return ei||(ei=1,Zl.exports=Cp()),Zl.exports}var Y=$p();const _n=e=>e.reduce((a,r,n)=>({...a,[n]:t=>r(t)||!0}),{}),rn=(e,a)=>{const r=a.split(".").reduce((n,t)=>n!==void 0?n[t]:n,e);return r==null?void 0:r.message},kr=({name:e,label:a,validate:r=[],readOnly:n=!1,onChange:t,onClick:s,className:l,disabled:i})=>{const{formState:{errors:d}}=X(),{field:g}=On({name:e,rules:{validate:c.useMemo(()=>_n(r),[r])}}),u=rn(d,e);return Y.jsxs(Y.Fragment,{children:[Y.jsx(rs,{size:"small",disabled:i||n,checked:g.value===!0,className:l,error:!!u,...g,onChange:k=>{g.onChange(k),t&&t(k.currentTarget.checked)},onClick:()=>{s&&s()},children:a}),u&&Y.jsx(Br,{children:rn(d,e)})]})},Us=({label:e,name:a,description:r,validate:n=[],checkboxes:t,onChange:s,disabled:l=!1,isReadOnly:i=!1,isHorizontal:d=!1,parse:g=p=>p,hideLegend:u=!1,isEdited:k=!1,size:m="small"})=>{const{formState:{errors:p}}=X(),{field:f}=On({name:a,rules:{validate:c.useMemo(()=>_n(n),[n])}}),A=Y.jsxs(ze,{justify:"center",gap:"2",children:[e,i&&k&&Y.jsx(Ls,{})]});return Y.jsxs(xm,{name:a,description:r,value:f.value!==void 0?f.value:[],onChange:y=>{s&&s(y),f.onChange(y)},size:m,legend:A,error:rn(p,a),hideLegend:u,children:[!d&&t.map(y=>Y.jsxs(c.Fragment,{children:[Y.jsx(rs,{size:m,value:g(y.value),disabled:y.disabled||l||i,children:y.label}),(f.value??[]).includes(g(y.value))&&y.element]},y.value)),d&&Y.jsxs(Y.Fragment,{children:[Y.jsx(ze,{gap:"4",children:t.map(y=>Y.jsx(rs,{size:m,value:g(y.value),disabled:y.disabled||l||i,children:y.label},y.value))}),t.filter(y=>(f.value??[]).includes(g(y.value))).map(y=>Y.jsx(c.Fragment,{children:y.element},y.value))]})]})};var ls={exports:{}},Jp=ls.exports,ri;function Wp(){return ri||(ri=1,function(e,a){(function(r,n){e.exports=n()})(Jp,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,s=/\d\d/,l=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,d={},g=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(F){this[y]=+F}},k=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(F){if(!F||F==="Z")return 0;var E=F.match(/([+-]|\d\d)/g),R=60*E[1]+(+E[2]||0);return R===0?0:E[0]==="+"?-R:R}(y)}],m=function(y){var F=d[y];return F&&(F.indexOf?F:F.s.concat(F.f))},p=function(y,F){var E,R=d.meridiem;if(R){for(var S=1;S<=24;S+=1)if(y.indexOf(R(S,0,F))>-1){E=S>12;break}}else E=y===(F?"pm":"PM");return E},f={A:[i,function(y){this.afternoon=p(y,!1)}],a:[i,function(y){this.afternoon=p(y,!0)}],Q:[t,function(y){this.month=3*(y-1)+1}],S:[t,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[l,u("seconds")],ss:[l,u("seconds")],m:[l,u("minutes")],mm:[l,u("minutes")],H:[l,u("hours")],h:[l,u("hours")],HH:[l,u("hours")],hh:[l,u("hours")],D:[l,u("day")],DD:[s,u("day")],Do:[i,function(y){var F=d.ordinal,E=y.match(/\d+/);if(this.day=E[0],F)for(var R=1;R<=31;R+=1)F(R).replace(/\[|\]/g,"")===y&&(this.day=R)}],w:[l,u("week")],ww:[s,u("week")],M:[l,u("month")],MM:[s,u("month")],MMM:[i,function(y){var F=m("months"),E=(m("monthsShort")||F.map(function(R){return R.slice(0,3)})).indexOf(y)+1;if(E<1)throw new Error;this.month=E%12||E}],MMMM:[i,function(y){var F=m("months").indexOf(y)+1;if(F<1)throw new Error;this.month=F%12||F}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(y){this.year=g(y)}],YYYY:[/\d{4}/,u("year")],Z:k,ZZ:k};function A(y){var F,E;F=y,E=d&&d.formats;for(var R=(y=F.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(V,j,I){var P=I&&I.toUpperCase();return j||E[I]||r[I]||E[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(H,C,$){return C||$.slice(1)})})).match(n),S=R.length,D=0;D<S;D+=1){var N=R[D],b=f[N],_=b&&b[0],K=b&&b[1];R[D]=K?{regex:_,parser:K}:N.replace(/^\[|\]$/g,"")}return function(V){for(var j={},I=0,P=0;I<S;I+=1){var H=R[I];if(typeof H=="string")P+=H.length;else{var C=H.regex,$=H.parser,ie=V.slice(P),pe=C.exec(ie)[0];$.call(j,pe),V=V.replace(pe,"")}}return function(De){var He=De.afternoon;if(He!==void 0){var Fe=De.hours;He?Fe<12&&(De.hours+=12):Fe===12&&(De.hours=0),delete De.afternoon}}(j),j}}return function(y,F,E){E.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(g=y.parseTwoDigitYear);var R=F.prototype,S=R.parse;R.parse=function(D){var N=D.date,b=D.utc,_=D.args;this.$u=b;var K=_[1];if(typeof K=="string"){var V=_[2]===!0,j=_[3]===!0,I=V||j,P=_[2];j&&(P=_[2]),d=this.$locale(),!V&&P&&(d=E.Ls[P]),this.$d=function(ie,pe,De,He){try{if(["x","X"].indexOf(pe)>-1)return new Date((pe==="X"?1e3:1)*ie);var Fe=A(pe)(ie),Rr=Fe.year,lr=Fe.month,Sn=Fe.day,Z=Fe.hours,z=Fe.minutes,Pe=Fe.seconds,Ze=Fe.milliseconds,Cr=Fe.zone,tn=Fe.week,Pr=new Date,$r=Sn||(Rr||lr?1:Pr.getDate()),sn=Rr||Pr.getFullYear(),Ir=0;Rr&&!lr||(Ir=lr>0?lr-1:Pr.getMonth());var Jr,Wr=Z||0,Lr=z||0,ln=Pe||0,on=Ze||0;return Cr?new Date(Date.UTC(sn,Ir,$r,Wr,Lr,ln,on+60*Cr.offset*1e3)):De?new Date(Date.UTC(sn,Ir,$r,Wr,Lr,ln,on)):(Jr=new Date(sn,Ir,$r,Wr,Lr,ln,on),tn&&(Jr=He(Jr).week(tn).toDate()),Jr)}catch{return new Date("")}}(N,K,b,E),this.init(),P&&P!==!0&&(this.$L=this.locale(P).$L),I&&N!=this.format(K)&&(this.$d=new Date("")),d={}}else if(K instanceof Array)for(var H=K.length,C=1;C<=H;C+=1){_[1]=K[C-1];var $=E.apply(this,_);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}C===H&&(this.$d=new Date(""))}else S.call(this,D)}}})}(ls)),ls.exports}var zp=Wp();const Xp=Yp(zp),Zp="_textarea_1snk6_1",Qp="_readOnlyField_1snk6_7",ni={textarea:Zp,readOnlyField:Qp},eE=e=>e!=null&&e!=="",kt=({label:e,value:a,isEdited:r=!1,type:n,hideLabel:t,size:s})=>eE(a)?Y.jsxs(Q,{gap:"1",children:[e&&!t&&Y.jsx(gr,{size:s,children:e}),Y.jsxs(ze,{gap:"2",align:"center",wrap:!1,children:[Y.jsx(Jd,{className:n==="textarea"?ni.textarea:ni.readOnlyField,size:s,children:a}),r&&Y.jsx(Ls,{})]})]}):null;W.extend(Xp);const re=({name:e,label:a,description:r,validate:n=[],hideLabel:t=!1,disabled:s=!1,isReadOnly:l=!1,onChange:i,disabledDays:d,isEdited:g,defaultMonth:u,fromDate:k,toDate:m,size:p="small"})=>{const{formState:{errors:f}}=X(),{field:A}=On({name:e,rules:{validate:c.useMemo(()=>_n(n),[n])}}),y=A.value?W(A.value,Ge,!0).format(pn):"",[F,E]=c.useState(y),{datepickerProps:R,inputProps:S}=vm({onDateChange:b=>{if(b!==void 0){const _=W(b).format(Ge);i&&i(_),A.onChange(_),E(W(_,Ge,!0).format(pn))}},defaultSelected:A.value?W(A.value,Ge,!0).toDate():void 0,defaultMonth:u||(!A.value&&m?m:void 0),disabled:d}),D=c.useCallback(b=>{const _=W(b.target.value,pn,!0).format(Ge),K=_!=="Invalid Date";E(b.target.value),i&&i(K?_:b.target.value),A.onChange(K?_:b.target.value)},[E,i,A]);if(l)return Y.jsx(kt,{label:a,value:A.value?W(A.value,Ge,!0).format(pn):void 0,isEdited:g,hideLabel:t,size:p});const N={...R,fromDate:k,toDate:m,dropdownCaption:k&&m?!0:void 0};return Y.jsx(Ba,{...N,children:Y.jsx(Ba.Input,{...S,hideLabel:t,onChange:D,value:F,size:p,label:a,description:r,disabled:s,error:rn(f,e)})})},Ue=({name:e,label:a,validate:r=[],readOnly:n=!1,type:t,shouldValidateOnBlur:s=!1,onBlur:l,onChange:i,description:d,autoFocus:g,parse:u=S=>S,format:k=S=>S,normalizeOnBlur:m,isEdited:p,maxLength:f,autoComplete:A=!1,disabled:y,className:F,hideLabel:E,...R})=>{const{formState:{errors:S},trigger:D}=X(),{field:N}=On({name:e,rules:{validate:c.useMemo(()=>_n(r),[r])}});return n?Y.jsx(kt,{label:a,value:N.value,isEdited:p,hideLabel:E,size:R.size}):Y.jsx(rp,{size:"small",hideLabel:E,description:d,label:a,error:rn(S,e),...N,value:N.value?k(N.value):"",autoFocus:g,autoComplete:A?void 0:"off",maxLength:f,disabled:y,type:t,className:F,onChange:b=>{const _=b.currentTarget.value?u(b.currentTarget.value):null;return i&&i(_),N.onChange(_)},onBlur:async b=>{var _,K,V,j;if(N.onBlur(),s){const I=await D();l&&I&&l((_=b==null?void 0:b.target)==null?void 0:_.value)}else l&&l((K=b==null?void 0:b.target)==null?void 0:K.value);m&&N.onChange((V=b==null?void 0:b.target)!=null&&V.value?m(u((j=b==null?void 0:b.target)==null?void 0:j.value)):null)},...R})},rE="_hideRadioLabels_1u3xf_1",nE={hideRadioLabels:rE},nn=({label:e,description:a,name:r,validate:n=[],radios:t,onChange:s,disabled:l=!1,isReadOnly:i=!1,isHorizontal:d=!1,parse:g=A=>A,isTrueOrFalseSelection:u=!1,hideLegend:k=!1,hideRadioLabels:m=!1,isEdited:p=!1,size:f="small"})=>{const{formState:{errors:A}}=X(),{field:y}=On({name:r,rules:{validate:c.useMemo(()=>_n(n),[n])}}),F=u?R=>R==="true":g,E=Y.jsxs(ze,{justify:"center",gap:"2",children:[e,i&&p&&Y.jsx(Ls,{})]});return Y.jsxs(Cm,{name:r,value:y.value!==void 0?y.value:null,onChange:R=>{s&&s(R),y.onChange(R)},size:f,legend:E,description:a,error:rn(A,r),className:m?nE.hideRadioLabels:"",hideLegend:k,children:[!d&&t.map(R=>Y.jsxs(c.Fragment,{children:[Y.jsx(Il,{size:f,value:F(R.value),disabled:R.disabled||l||i,children:R.label}),y.value===F(R.value)&&R.element]},R.value)),d&&Y.jsxs(Y.Fragment,{children:[Y.jsx(ze,{gap:"4",children:t.map(R=>Y.jsx(Il,{size:f,value:F(R.value),disabled:R.disabled||l||i,children:R.label},R.value))}),t.filter(R=>y.value===F(R.value)).map(R=>Y.jsx(c.Fragment,{children:R.element},R.value))]})]})},ar=({name:e,label:a,selectValues:r,validate:n=[],readOnly:t=!1,description:s,hideValueOnDisable:l=!1,onChange:i,disabled:d,className:g,hideLabel:u,isEdited:k,size:m})=>{const{formState:{errors:p}}=X(),{field:f}=On({name:e,rules:{validate:c.useMemo(()=>_n(n),[n])}});if(t){const F=r.map(R=>R.props).find(R=>R.value===f.value),E=F?F.children:void 0;return Y.jsx(kt,{value:E,label:a,hideLabel:u,isEdited:k,size:m})}const A=f.value||"",y=!r.map(F=>F.props.value).includes(A)&&A!=="";return y&&console.warn(`No corresponding option found for value '${A}'`),Y.jsxs(es,{size:"small",className:g,error:rn(p,e),label:a,description:s,value:l&&d||y?"":f.value,disabled:d,onChange:F=>{i&&i(F),f.onChange(F)},hideLabel:u,children:[Y.jsx("option",{style:{display:"none"}}),",",r]})},aE="_textAreaFieldWithBadges_bdz0b_1",tE="_etikettWrapper_bdz0b_4",ai={textAreaFieldWithBadges:aE,etikettWrapper:tE},ed=({name:e,label:a,readOnly:r,maxLength:n,badges:t,validate:s=[],parse:l=k=>k,className:i,description:d,isEdited:g,...u})=>{const{formState:{errors:k}}=X(),{field:m}=On({name:e,rules:{validate:c.useMemo(()=>_n(s),[s])}});return r?Y.jsx(kt,{label:a,value:m.value,type:"textarea",isEdited:g,hideLabel:u.hideLabel}):Y.jsxs("div",{className:t?ai.textAreaFieldWithBadges:null,children:[t&&Y.jsx("div",{className:ai.etikettWrapper,children:t.map(({type:p,titleText:f})=>Y.jsx(jm,{variant:p,size:"small",children:f},f))}),Y.jsx(Qm,{size:"small",label:a,description:d,className:i,autoComplete:"off",...m,onChange:p=>m.onChange(p.currentTarget.value!==""?l(p.currentTarget.value):null),value:m.value?m.value:"",error:rn(k,e),maxLength:n,...u})]})},ic=({formMethods:e,onSubmit:a,children:r,className:n,setDataOnUnmount:t})=>{const{handleSubmit:s,getValues:l}=e;return c.useEffect(()=>()=>{t&&t(l())},[]),Y.jsx(Sp,{...e,children:Y.jsx("form",{className:n,onSubmit:a?s(i=>a(i)):void 0,children:r})})},sE="_addCircleIcon_bm9jq_1",lE="_imageText_bm9jq_2",iE="_addPeriode_bm9jq_7",Yt={addCircleIcon:sE,imageText:lE,addPeriode:iE};function ti(e,a){return()=>{e(a)}}function oE(e,a){return({key:r})=>{r==="Enter"&&e(a)}}const dE=(e,a)=>r=>{if(e>0)return Y.jsx(We,{className:r,icon:Y.jsx(Wd,{"aria-hidden":!0}),type:"button",onClick:()=>{a(e)}})},Ar=({fields:e,readOnly:a=!0,titleText:r,bodyText:n,emptyPeriodTemplate:t={periodeFom:"",periodeTom:""},shouldShowAddButton:s=!0,createAddButtonInsteadOfImageLink:l=!1,children:i,remove:d,append:g})=>Y.jsxs(Ps,{legend:r,children:[e.map((u,k)=>i(u,k,dE(k,d))),s&&Y.jsxs(Y.Fragment,{children:[!l&&!a&&Y.jsxs("div",{onClick:ti(g,t),onKeyDown:oE(g,t),className:Yt.addPeriode,role:"button",tabIndex:0,children:[Y.jsx(Ga,{className:Yt.addCircleIcon,title:n}),Y.jsx(Ta,{className:Yt.imageText,children:n})]}),l&&!a&&Y.jsx(We,{icon:Y.jsx(Ga,{"aria-hidden":!0}),type:"button",onClick:ti(g,t),children:n}),Y.jsx("div",{style:{marginBottom:"16px"}})]})]}),Wa="andreYtelser",rd="andreYtelserPerioder",nd="andreYtelserTyper";function ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var is={exports:{}},uE=is.exports,si;function kE(){return si||(si=1,function(e,a){(function(r,n){e.exports=n()})(uE,function(){return function(r,n){n.prototype.isSameOrAfter=function(t,s){return this.isSame(t,s)||this.isAfter(t,s)}}})}(is)),is.exports}var gE=kE();const vE=ad(gE);var os={exports:{}},mE=os.exports,li;function pE(){return li||(li=1,function(e,a){(function(r,n){e.exports=n()})(mE,function(){return function(r,n){n.prototype.isSameOrBefore=function(t,s){return this.isSame(t,s)||this.isBefore(t,s)}}})}(os)),os.exports}var EE=pE();const yE=ad(EE),TE="Dato må være før eller lik {limit}",cE="Dato må være etter eller lik {limit}",fE="Perioder kan ikke overlappe i tid",AE="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",RE="Dato må være lik {value}",FE="Dato må skrives slik: dd.mm.åååå",bE="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",NE="Tallet kan ikke inneholde mer enn to desimaler",OE="Tallet kan ikke ha desimaler",_E="Feltet kan kun inneholde tall",SE="Ugyldig fødselsnummer",hE="Feltet må være et fødselsnummer (11 siffer)",KE="Ugyldig organisasjonsnummer.",DE="Ugyldig organisasjonsnummer eller fødselsnummer",PE="Startdato må være før eller lik sluttdato",IE="Periode er utenfor opptjeningsperioden",LE="Ugyldig saksnummer eller fødselsnummer",ME="Feltet inneholder ugyldige tegn: {text}",wE="Feltet inneholder en ugyldig verdi: {value}",VE="Feltet kan ikke inneholde mellomrom",jE="Feltet må fylles ut",GE="Du kan skrive maksimalt {length} tegn",UE="Du må skrive minst {length} tegn",qE="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",xE="Feltet må være mindre eller lik {length}",BE="Feltet må være større eller lik {length}",HE="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",YE={DateNotBeforeOrEqual:TE,DateNotAfterOrEqual:cE,DateRangesOverlapping:fE,DateRangesOverlappingPeriodTypes:AE,DatesNotEqual:RE,InvalidDate:FE,InvalidDatesInPeriod:bE,InvalidDecimal:NE,InvalidInteger:OE,InvalidNumber:_E,InvalidFodselsnr:SE,InvalidFodselsnrFormat:hE,InvalidOrgnr:KE,InvalidOrgnrOrFodselsnr:DE,InvalidPeriod:PE,InvalidPeriodRange:IE,InvalidSaksnrOrFodselsnrFormat:LE,InvalidText:ME,InvalidValue:wE,IllegalWhiteSpace:VE,IsRequired:jE,MaxLength:GE,MinLength:UE,MaxLengthOrFodselsnr:qE,MaxValue:xE,MinValue:BE,SammeFodselsnrSomSoker:HE},{formatMessage:Ke}=ce(YE),CE=e=>Ke({id:"DateNotBeforeOrEqual"},{limit:e}),$E=e=>Ke({id:"DateNotAfterOrEqual"},{limit:e}),JE=()=>Ke({id:"DateRangesOverlapping"}),WE=e=>Ke({id:"DatesNotEqual"},{value:e}),zE=()=>Ke({id:"InvalidDate"}),XE=e=>Ke({id:"InvalidDecimal"},{text:e}),ZE=e=>Ke({id:"InvalidInteger"},{text:e}),QE=e=>Ke({id:"InvalidNumber"},{text:e}),ey=()=>Ke({id:"InvalidFodselsnr"}),ry=()=>Ke({id:"InvalidFodselsnrFormat"}),ny=()=>Ke({id:"InvalidOrgnr"}),ay=()=>Ke({id:"InvalidOrgnrOrFodselsnr"}),ty=()=>Ke({id:"InvalidPeriod"}),sy=e=>Ke({id:"InvalidText"},{text:e}),ly=()=>Ke({id:"IllegalWhiteSpace"}),iy=()=>Ke({id:"IsRequired"}),oy=e=>Ke({id:"MaxLength"},{length:e}),dy=e=>Ke({id:"MaxLengthOrFodselsnr"},{length:e}),uy=e=>Ke({id:"MaxValue"},{length:e}),ky=e=>Ke({id:"MinValue"},{length:e}),gy=()=>Ke({id:"SammeFodselsnrSomSoker"}),vy=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,my=/^\d+([,.]\d+)?$/,py=/^\s*\d+\s*$/,Ey=/^\d+(.\d{1,2})?$/,yy=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,Ty=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,fr=e=>e==null||e.toString().trim().length===0,cy=()=>W().startOf("day"),fy=e=>{if(Array.isArray(e)){const a=(r,n,t)=>{const s=W(r,Ge).startOf("day"),l=n+1<t.length?W(t[n+1],Ge).startOf("day"):null;return l!==null?s.isBefore(l):!0};return[...e].sort((r,n)=>W(r[0],Ge).startOf("day").isAfter(W(n[0],Ge).startOf("day"))?1:-1).map(r=>r[0]===r[1]?[r[0]]:r).reduce((r,n)=>r.concat(n)).every(a)}return!0};W.extend(vE);W.extend(yE);const Ay=e=>a=>fr(a)||a.toString().trim().length<=e?null:dy(e),x=e=>fr(e)?iy():void 0,qs=e=>a=>fr(a)||a.toString().trim().length<=e?null:oy(e),td=e=>a=>a>=e?null:ky(e),Na=e=>a=>a<=e?null:uy(e),Ry=e=>e.toString().trim().length===9?null:ny(),Fy=e=>e.toString().trim().length===9||e.toString().trim().length===11?null:ay(),by=e=>/\s/g.test(e)?ly():null,sd=e=>fr(e)||my.test(e.toString())?null:QE(e.toString()),Ny=e=>fr(e)||py.test(e.toString())?null:ZE(e.toString()),Oy=e=>fr(e)||Ey.test(e.toString())?null:XE(e.toString()),Rn=e=>sd(e)||Ny(e),ds=e=>sd(e)||Oy(e),ae=(e="")=>fr(e)||vy.test(e)?null:zE(),Xe=e=>a=>{const r=W(e).endOf("day");return fr(a)||W(a).isSameOrBefore(r)?null:CE(r.format(pn))},qe=e=>a=>{const r=W(e).startOf("day");return fr(a)||W(a).isSameOrAfter(r)?null:$E(r.format(pn))},Hn=e=>fy(e)?null:JE(),qn=e=>Xe(cy())(e),_y=e=>zd.test(e)?null:ry(),ld=e=>Xd(e)?null:ey(),Sy=e=>a=>a===e?gy():null,xs=e=>{if(!yy.test(e)){const a=e.replace(Ty,"");return sy(a.replace(/[\t]/g,"Tabulatortegn"))}return null},hy=(e,a)=>e!==a?WE(W(a).format(pn)):null,Ky=(e,a)=>fr(e)&&fr(a)||W(e).isSameOrBefore(W(a).startOf("day"))?null:ty(),Dy=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const a=document.createAttribute("tabindex");a.value="-1";const r=e[0];r.setAttributeNode(a),document.activeElement.blur(),r.focus()}},300)},id=({readOnly:e,name:a})=>{const r=fe(),{getValues:n,control:t,trigger:s,formState:{isSubmitted:l}}=X(),{fields:i,remove:d,append:g}=sr({control:t,name:a});return c.useEffect(()=>{i.length===0&&g({periodeFom:"",periodeTom:""})},[]),o.jsx(Ar,{fields:i,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:g,remove:d,children:(u,k)=>{const m=`${a}.${k}`;return o.jsxs(ze,{gap:"2",children:[o.jsx(re,{name:`${m}.periodeFom`,label:k===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[x,ae,()=>{const{periodeFom:p,periodeTom:f}=n(`${a}.${k}`);return f&&p?Xe(f)(p):null}],onChange:()=>l?s():void 0}),o.jsx(re,{name:`${a}.${k}.periodeTom`,label:k===0?r.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[x,ae,()=>{const{periodeFom:p,periodeTom:f}=n(`${a}.${k}`);return p&&f?qe(p)(f):null}],onChange:()=>l?s():void 0}),!e&&k>0&&o.jsx("div",{children:o.jsx(We,{size:"small",type:"button",variant:"tertiary-neutral",icon:o.jsx(lt,{}),onClick:()=>d(k)})})]},u.id)}})};id.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};const Py=(e,a)=>a?e.filter(r=>r.kode===la.MILITÆR_ELLER_SIVILTJENESTE):e.filter(r=>r.kode!==la.UTENLANDSK_ARBEIDSFORHOLD&&r.kode!==la.FRILANSER&&r.kode!==la.LONN_UNDER_UTDANNING),Yn=({readOnly:e,kunMiliterEllerSiviltjeneste:a=!1,alleKodeverk:r})=>{const n=r.ArbeidType,t=c.useMemo(()=>Py(n,a),[a]);return o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.AndreYtelser.Title"})}),o.jsx(Us,{isReadOnly:e,name:`${Wa}.${nd}`,checkboxes:t.map(s=>({label:s.navn,value:s.kode,element:o.jsx(er,{children:o.jsx(id,{name:`${Wa}.${rd}.${s.kode}`,readOnly:e})})}))})]})})};Yn.initialValues=()=>({[Wa]:{[nd]:[],[rd]:{}}});Yn.transformValues=({andreYtelser:{andreYtelserTyper:e,andreYtelserPerioder:a}})=>({[Wa]:e.flatMap(r=>a[r].map(n=>({ytelseType:r,...n})))});Yn.__docgenInfo={description:`AndreYtelserPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ve={"Registrering.Yes":"Ja","Registrering.No":"Nei","Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.TerminOgFodsel.Tittel":"Opplysninger om termin og fødsel","Registrering.TerminOgFodsel.ErBarnetFodt":"Er barnet født?","Registrering.TerminOgFodsel.ErFodt":"Ja","Registrering.TerminOgFodsel.ErIkkeFodt":"Nei","Registrering.TerminOgFodsel.Termindato":"Termindato","Registrering.TerminOgFodsel.AntallBarn":"Antall barn","Registrering.TerminOgFodsel.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.TerminOgFodsel.Fodselsdato":"Fødselsdato","Registrering.TerminOgFodsel.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Label":"Begrunnelse","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og fortsett til avslag","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til periode","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.NyIArbeidslivet":"Ny i arbeidslivet","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Søkers virksomheter","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Det må registreres minst 1 virksomhet","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.TittelSN":"Tilretteleggingsbehov for selvstendig næringsdrivende","BehovForTilretteleggingPanel.TittelFrilans":"Tilretteleggingsbehov for frilanser","BehovForTilretteleggingPanel.TittelArbeidstaker":"Tilretteleggingsbehov for arbeidstaker","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.Title":"Arbeidsgivere med tilretteleggingsbehov","TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength":"Det må registreres minst 1 arbeidsforhold","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","RegistrerArbeidsgiverRad.OrgNr":"Arbeidsgivers orgnr/fnr","RegistrerArbeidsgiverRad.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.ForTidligTermin":"Termin kan ikke være mer enn 3 uker før fødsel","ValidationMessage.ForSenTermin":"Termin kan ikke være mer enn 5 måneder etter fødsel"},Iy=ce(Ve),Bs=({readOnly:e,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})=>o.jsx(tr,{value:Iy,children:o.jsx(Yn,{readOnly:e,alleKodeverk:a,kunMiliterEllerSiviltjeneste:r})});Bs.initialValues=Yn.initialValues;Bs.transformValues=Yn.transformValues;Bs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const $e="annenForelder",Sa="kanIkkeOppgiBegrunnelse",Ly="_inputBredde_138ho_1",Ct={inputBredde:Ly},My=e=>e.filter(({kode:a})=>a!==tt.NORGE).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),gt=({readOnly:e=!0,alleKodeverk:a,fagsakPersonnummer:r})=>{const{formatMessage:n}=fe(),{watch:t,trigger:s,formState:{isSubmitted:l}}=X(),i=t(`${$e}.kanIkkeOppgiAnnenForelder`),d=t(`${$e}.${Sa}`),g=a.Landkoder,u=c.useMemo(()=>g.slice().sort((k,m)=>k.navn.localeCompare(m.navn)),[g]);return o.jsxs(o.Fragment,{children:[o.jsx(Ue,{name:`${$e}.foedselsnummer`,label:n({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:k=>k&&k.toString().replace(/\s/g,""),readOnly:e,className:Ct.inputBredde,validate:i?[]:[x,_y,ld,Sy(r)],disabled:i}),o.jsx(kr,{name:`${$e}.kanIkkeOppgiAnnenForelder`,label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>l?s():void 0}),i===!0&&o.jsx(er,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),o.jsx(nn,{name:`${$e}.${Sa}.arsak`,hideLegend:!0,validate:[x],isReadOnly:e,radios:[{label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:ka.UKJENT_FORELDER},{label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:ka.IKKE_NORSK_FNR}]}),(d==null?void 0:d.arsak)===ka.IKKE_NORSK_FNR&&o.jsxs(o.Fragment,{children:[o.jsx(ar,{name:`${$e}.${Sa}.land`,label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:My(u),validate:[x],className:Ct.inputBredde,readOnly:e}),o.jsx(Ue,{name:`${$e}.${Sa}.utenlandskFoedselsnummer`,label:n({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[x],className:Ct.inputBredde,readOnly:e})]})]})})]})};gt.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:a,kanIkkeOppgiBegrunnelse:{arsak:r,land:n,utenlandskFoedselsnummer:t}={}})=>a?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:r===ka.IKKE_NORSK_FNR?{arsak:r,land:n,utenlandskFoedselsnummer:t}:{arsak:r}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};gt.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const ii=ce(Ve),we=({name:e,label:a,isHorizontal:r=!0,readOnly:n,trueLabel:t,trueContent:s,falseLabel:l,falseContent:i,isRequired:d=!0})=>o.jsx(nn,{name:e,label:a,validate:d?[x]:[],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:r,radios:[{label:t??ii.formatMessage({id:"Registrering.Yes"}),value:"true",element:s},{label:l??ii.formatMessage({id:"Registrering.No"}),value:"false",element:i}]});we.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const vt=({readOnly:e,sokerErMor:a})=>{const r=fe(),{watch:n}=X(),t=n(`${$e}.sokerHarAleneomsorg`),s=n(`${$e}.denAndreForelderenHarRettPaForeldrepenger`),l=n(`${$e}.annenForelderRettEØS`);return o.jsxs(Q,{gap:"4",children:[o.jsx(we,{name:`${$e}.sokerHarAleneomsorg`,label:r.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),t===!1&&o.jsx(we,{name:`${$e}.denAndreForelderenHarRettPaForeldrepenger`,label:r.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),t===!1&&s===!1&&o.jsx(we,{name:`${$e}.annenForelderRettEØS`,label:r.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!a&&t===!1&&s===!1&&l===!1&&o.jsx(we,{name:`${$e}.morMottarUføretrygd`,label:r.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};vt.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:a,annenForelderRettEØS:r,morMottarUføretrygd:n})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?a:void 0,annenForelderRettEØS:a===!1?r:void 0,morMottarUføretrygd:r===!1?n:void 0});vt.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const wy=ce(Ve),Hs=({readOnly:e,alleKodeverk:a,fagsakPersonnummer:r,sokerErMor:n})=>o.jsx(tr,{value:wy,children:o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.TheOtherParent.Title"})}),o.jsx(gt,{readOnly:e,fagsakPersonnummer:r,alleKodeverk:a}),o.jsx(vt,{readOnly:e,sokerErMor:n})]})})});Hs.initialValues=()=>({[$e]:{}});Hs.transformValues=({annenForelder:e})=>({[$e]:{...vt.transformValues(e),...gt.transformValues(e)}});Hs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const pr="frilans",da=(e,a)=>e(a),Vy=(e=[])=>e.map(a=>a.periodeFom).filter(a=>a&&a!=="").sort((a,r)=>W(a,Ge).diff(W(r,Ge))),jy=qs(50),Gy=(e,a,r,n)=>()=>{const t=da(e,`${a}.fomDato`);return r.length>0&&r[0]&&t&&!W(r[0]).isSameOrBefore(W(t))?n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},od=({readOnly:e})=>{const a=fe(),{control:r,getValues:n,watch:t,trigger:s,formState:{isSubmitted:l}}=X(),{fields:i,remove:d,append:g}=sr({control:r,name:`${pr}.oppdragPerioder`}),u=t(`${pr}.perioder`),k=c.useMemo(()=>Vy(u),[u]);return o.jsx(Ar,{bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:i,readOnly:e,append:g,remove:d,children:(m,p,f)=>{const A=`${pr}.oppdragPerioder.${p}`;return o.jsxs(ze,{gap:"4",paddingBlock:"2",align:"end",children:[o.jsx(re,{name:`${A}.fomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[ae,Gy(n,A,k,a),()=>{const y=da(n,`${A}.fomDato`),F=da(n,`${A}.tomDato`);return F&&y?Xe(F)(y):null}],onChange:()=>l?s():void 0}),o.jsx(re,{name:`${A}.tomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[ae,()=>{const y=da(n,`${A}.fomDato`),F=da(n,`${A}.tomDato`);return F&&y?qe(y)(F):null}],onChange:()=>l?s():void 0}),o.jsx(Ue,{name:`${A}.oppdragsgiver`,validate:[jy],label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})}),f&&o.jsx("div",{children:f()})]},m.id)}})};od.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Cn=({readOnly:e})=>{const{watch:a}=X(),r=a(`${pr}.harHattOppdragForFamilie`);return o.jsxs(o.Fragment,{children:[o.jsx(we,{name:`${pr}.harHattOppdragForFamilie`,label:o.jsx(G,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),readOnly:e}),r&&o.jsxs(er,{children:[o.jsx(gr,{size:"small",children:o.jsx(G,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),o.jsx(od,{readOnly:e})]})]})};Cn.initialValues=()=>({oppdragPerioder:[{fomDato:"",tomDato:"",oppdragsgiver:""}]});Cn.transformValues=({harHattOppdragForFamilie:e,oppdragPerioder:a})=>({harHattOppdragForFamilie:e,oppdragPerioder:e?a:void 0});Cn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ha=(e,a)=>e(a),mt=({readOnly:e})=>{const a=fe(),{control:r,getValues:n,formState:{isSubmitted:t},trigger:s}=X(),{fields:l,remove:i,append:d}=sr({control:r,name:`${pr}.perioder`});return o.jsx(Ar,{fields:l,bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,remove:i,append:d,children:(g,u,k)=>{const m=`${pr}.perioder.${u}`;return o.jsxs(ze,{gap:"4",paddingBlock:"2",children:[o.jsx(re,{name:`${m}.periodeFom`,label:u===0?a.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[x,ae,()=>{const p=ha(n,`${m}.periodeFom`),f=ha(n,`${m}.periodeTom`);return f&&p?Xe(f)(p):null}],onChange:()=>t?s():void 0}),o.jsx(re,{name:`${m}.periodeTom`,label:u===0?a.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[x,ae,()=>{const p=ha(n,`${m}.periodeFom`),f=ha(n,`${m}.periodeTom`);return f&&p?qe(p)(f):null}],onChange:()=>t?s():void 0}),k&&o.jsx("div",{children:k()})]},g.id)}})};mt.initialValues=()=>({perioder:[{periodeFom:"",periodeTom:""}]});mt.__docgenInfo={description:`FrilansPerioderFieldArray

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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const $n=({readOnly:e})=>o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.Frilans.Title"})}),o.jsx(we,{name:`${pr}.harSokerPeriodeMedFrilans`,label:o.jsx(G,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),readOnly:e,trueContent:o.jsx(er,{marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Ta,{children:o.jsx(G,{id:"Registrering.Frilans.OppgiPeriode"})}),o.jsx(mt,{readOnly:e}),o.jsx(we,{name:`${pr}.erNyoppstartetFrilanser`,label:o.jsx(G,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),readOnly:e}),o.jsx(we,{name:`${pr}.harInntektFraFosterhjem`,label:o.jsx(G,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),readOnly:e}),o.jsx(Cn,{readOnly:e})]})})})]})});$n.initialValues=()=>({[pr]:{...mt.initialValues(),...Cn.initialValues()}});$n.transformValues=({frilans:e})=>({[pr]:e.harSokerPeriodeMedFrilans===!1?{harSokerPeriodeMedFrilans:!1}:{harSokerPeriodeMedFrilans:!0,perioder:e.perioder,erNyoppstartetFrilanser:e.erNyoppstartetFrilanser,harInntektFraFosterhjem:e.harInntektFraFosterhjem,...Cn.transformValues(e)}});$n.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Uy=ce(Ve),Ys=({readOnly:e})=>o.jsx(tr,{value:Uy,children:o.jsx($n,{readOnly:e})});Ys.initialValues=$n.initialValues;Ys.transformValues=$n.transformValues;Ys.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Pn="arbeidsforhold",an=({children:e,remove:a,readOnly:r,index:n})=>o.jsxs(o.Fragment,{children:[n>0&&o.jsx(Np,{spaceUnder:!0,spaceAbove:!0}),o.jsxs(ze,{wrap:!1,justify:"space-between",children:[o.jsx(ze,{wrap:!0,gap:"4",children:e}),!r&&n>0&&o.jsx(We,{type:"button",variant:"tertiary-neutral",icon:o.jsx(lt,{}),onClick:()=>a(n)})]})]});an.__docgenInfo={description:"",methods:[],displayName:"FieldArrayRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const qy=qs(50),xy=e=>e.filter(({kode:a})=>a!==tt.NORGE).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),dd=({alleKodeverk:e,readOnly:a})=>{const r=fe(),{control:n}=X(),{fields:t,remove:s,append:l}=sr({control:n,name:Pn}),i=e.Landkoder.slice().sort((d,g)=>d.navn.localeCompare(g.navn));return o.jsx(Ar,{fields:t,bodyText:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:a,emptyPeriodTemplate:{arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},remove:s,append:l,children:(d,g)=>o.jsxs(an,{remove:s,index:g,readOnly:a,children:[o.jsx(Ue,{readOnly:a,name:`${Pn}.${g}.arbeidsgiver`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}),validate:[qy],maxLength:99}),o.jsx(re,{isReadOnly:a,name:`${Pn}.${g}.periodeFom`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}),validate:[ae]}),o.jsx(re,{isReadOnly:a,name:`${Pn}.${g}.periodeTom`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}),validate:[ae]}),o.jsx(ar,{readOnly:a,name:`${Pn}.${g}.land`,label:r.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}),selectValues:xy(i),size:"small"})]},d.id)})};dd.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

Viser inputfelter for arbeidsgiver og organisasjonsnummer for registrering av arbeidsforhold.`,methods:[],displayName:"RenderInntektsgivendeArbeidFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Jn=({readOnly:e,alleKodeverk:a})=>o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title"})}),o.jsx(Ta,{children:o.jsx(G,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold"})}),o.jsx(dd,{readOnly:e,alleKodeverk:a})]})});Jn.initialValues=()=>({[Pn]:[]});const Ka=e=>e===void 0||e==="";Jn.transformValues=({arbeidsforhold:e})=>({arbeidsforhold:e==null?void 0:e.filter(a=>!(Ka(a.arbeidsgiver)&&Ka(a.land)&&Ka(a.periodeFom)&&Ka(a.periodeTom)))});Jn.__docgenInfo={description:`InntektsgivendeArbeidPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const By=ce(Ve),Cs=({readOnly:e,alleKodeverk:a})=>o.jsx(tr,{value:By,children:o.jsx(Jn,{readOnly:e,alleKodeverk:a})});Cs.initialValues=Jn.initialValues;Cs.transformValues=Jn.transformValues;Cs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Hy=qs(1500),Wn=({submitting:e,onSubmitUfullstendigsoknad:a,readOnly:r=!0})=>{const n=fe(),{watch:t}=X(),s=t("ufullstendigSoeknad")||!1;return o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:n.formatMessage({id:"Registrering.SaveApplication.Title"})}),o.jsx(ed,{name:"kommentarEndring",label:n.formatMessage({id:"Registrering.SaveApplication.Label"}),description:n.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[Hy,xs],readOnly:r}),o.jsxs("div",{children:[o.jsx(kr,{name:"registrerVerge",label:n.formatMessage({id:"Registrering.Verge"}),readOnly:r}),o.jsx(kr,{name:"ufullstendigSoeknad",label:n.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:r})]}),o.jsxs("div",{children:[!s&&o.jsx(We,{id:"saveButton",size:"small",variant:"primary",loading:e,disabled:r||e,onClick:Dy,children:o.jsx(G,{id:"Registrering.SaveApplication.SaveButton"})}),s&&o.jsx(We,{id:"endButton",onClick:a,size:"small",variant:"primary",loading:e,disabled:r||e,type:"button",children:o.jsx(G,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};Wn.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});Wn.transformValues=({kommentarEndring:e,registrerVerge:a,ufullstendigSoeknad:r})=>({kommentarEndring:e,registrerVerge:a,ufullstendigSoeknad:r});Wn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Yy=ce(Ve),$s=({readOnly:e,onSubmitUfullstendigsoknad:a,submitting:r})=>o.jsx(tr,{value:Yy,children:o.jsx(Wn,{readOnly:e,onSubmitUfullstendigsoknad:a,submitting:r})});$s.initialValues=Wn.initialValues;$s.transformValues=Wn.transformValues;$s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""}}};const Cy=ce(Ve),oi=()=>W().subtract(1,"year").subtract(1,"day"),$y=()=>W(),Js=({readOnly:e})=>o.jsx(tr,{value:Cy,children:o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),o.jsx(re,{name:"mottattDato",label:o.jsx(G,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),fromDate:oi().toDate(),toDate:$y().toDate(),validate:[x,ae,qn,qe(oi())],isReadOnly:e})]})})});Js.initialValues=()=>({mottattDato:void 0});Js.transformValues=({mottattDato:e})=>({mottattDato:e});Js.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ mottattDato }: MottattDatoFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]},alias:"MottattDatoFormValues"}}],returns:null}],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Vr="omsorg",Jy="_barnInput_1jjt5_1",Wy={barnInput:Jy},zy=10,Xy=e=>e?td(1)(e):void 0,Zy=e=>e?Na(10)(e):void 0,di=(e,a)=>r=>{if(e===0&&a&&r)return hy(r,Array.isArray(a)?a[0]:a)},zn=({readOnly:e=!0,familieHendelseType:a,isForeldrepengerFagsak:r,fodselsdatoer:n})=>{const{formatMessage:t}=fe(),{control:s,watch:l}=X(),{fields:i,remove:d,append:g}=sr({control:s,name:`${Vr}.foedselsDato`}),u=l(`${Vr}.antallBarn`)??0;return c.useEffect(()=>{if(i.length>Math.max(u,0))for(let k=i.length;k>u;k-=1)d(k-1);else if(i.length<Math.min(u,zy))for(let k=i.length;k<u;k+=1)g({id:k,dato:void 0})},[u]),o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:a===Nr.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),r&&a===Nr.ADOPSJON&&o.jsx(nn,{name:`${Vr}.erEktefellesBarn`,label:o.jsx(G,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[x],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:t({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:t({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),o.jsx(re,{name:`${Vr}.omsorgsovertakelsesdato`,label:t({id:a===Nr.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:a===Nr.ADOPSJON?[x,ae]:[ae]}),o.jsxs(ze,{gap:"4",children:[a===Nr.ADOPSJON&&o.jsx(re,{name:`${Vr}.ankomstdato`,label:t({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[ae]}),o.jsx(Ue,{name:`${Vr}.antallBarn`,label:t({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:Wy.barnInput,parse:k=>{const m=parseInt(k.toString(),10);return Number.isNaN(m)?k:m},validate:[...a===Nr.ADOPSJON?[x]:[],Rn,Xy,Zy]})]}),i.map((k,m)=>o.jsx(v.Fragment,{children:o.jsx(re,{name:`${Vr}.foedselsDato.${m}.dato`,isReadOnly:e,validate:a===Nr.ADOPSJON?[x,ae,qn,di(m,n)]:[ae,qn,di(m,n)],label:t({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:m+1})})},k.id))]})})};zn.initialValues=()=>({[Vr]:{}});zn.transformValues=({omsorg:e})=>({[Vr]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(a=>a.dato):void 0}});zn.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const Qy=ce(Ve),Ws=({readOnly:e,familieHendelseType:a,isForeldrepengerFagsak:r=!1,fodselsdato:n})=>o.jsx(tr,{value:Qy,children:o.jsx(zn,{readOnly:e,familieHendelseType:a,isForeldrepengerFagsak:r,fodselsdatoer:n})});Ws.initialValues=zn.initialValues;Ws.transformValues=zn.transformValues;Ws.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const eT={land:void 0,periodeFom:void 0,periodeTom:void 0},za=(e,a)=>e(a),ui=(e,a)=>()=>{const n=e(a).filter(({periodeFom:t,periodeTom:s})=>t&&t!==""&&s&&s!=="").map(({periodeFom:t,periodeTom:s})=>[t,s]);return n.length>0?Hn(n):void 0},rT=e=>e.filter(({kode:a})=>a!==tt.NORGE).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),ki=(e,a,r,n)=>()=>{const t=za(e,`${a}.${r}.periodeFom`),s=za(e,`${a}.${r}.periodeTom`);return!s||!t?null:n?Xe(s)(t):qe(t)(s)},us=({erTidligereOpphold:e=!1,mottattDato:a,readOnly:r,countryCodes:n})=>{const t=fe(),s=e?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:l,getValues:i,trigger:d,formState:{isSubmitted:g}}=X(),{fields:u,remove:k,append:m}=sr({control:l,name:s}),p=c.useMemo(()=>rT(n),[n]);return o.jsx(Ar,{fields:u,titleText:t.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:t.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:eT,readOnly:r,remove:k,append:m,children:(f,A,y)=>o.jsx(v.Fragment,{children:o.jsxs(ze,{gap:"4",paddingBlock:"2",children:[o.jsx(ar,{name:`${s}.${A}.land`,label:t.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:p,readOnly:r,validate:[x]}),o.jsx(re,{name:`${s}.${A}.periodeFom`,label:t.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:r,validate:[x,ae,ki(i,s,A,!0),()=>{const F=za(i,`${s}.${A}.periodeFom`);return e?Xe(W().format(Ge))(F):a?qe(a)(F):void 0},ui(i,s)],onChange:()=>g?d():void 0}),o.jsx(re,{name:`${s}.${A}.periodeTom`,label:t.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:r,validate:[x,ae,ki(i,s,A,!1),()=>{const F=za(i,`${s}.${A}.periodeTom`);return e?Xe(W().format(Ge))(F):a?qe(a)(F):void 0},ui(i,s)],onChange:()=>g?d():void 0}),y&&o.jsx("div",{children:y()})]},f.id)},f.id)})};us.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn<'Landkoder'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Xn=({readOnly:e=!0,alleKodeverk:a,mottattDato:r,erAdopsjon:n})=>{const{formatMessage:t}=fe(),s=a.Landkoder.slice().sort((g,u)=>g.navn.localeCompare(u.navn)),{watch:l}=X(),i=!l("oppholdSisteTolvINorge",!0),d=!l("oppholdNesteTolvINorge",!0);return o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.Opphold"})}),o.jsx(we,{name:"oppholdINorge",label:t({id:n?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),readOnly:e}),o.jsxs(Q,{gap:"2",children:[o.jsx(we,{name:"oppholdSisteTolvINorge",label:o.jsx(G,{id:"Registrering.OppholdSisteTolv"}),readOnly:e}),i&&o.jsx(er,{alignOffset:58,children:o.jsx(us,{erTidligereOpphold:!0,mottattDato:r,countryCodes:s,readOnly:e})})]}),o.jsxs(Q,{gap:"2",children:[o.jsx(we,{name:"oppholdNesteTolvINorge",label:o.jsx(G,{id:"Registrering.OppholdNesteTolv"}),readOnly:e}),d&&o.jsx(er,{alignOffset:58,children:o.jsx(us,{mottattDato:r,countryCodes:s,readOnly:e})})]})]})})};Xn.initialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Xn.transformValues=({oppholdINorge:e,oppholdSisteTolvINorge:a,oppholdNesteTolvINorge:r,tidligereOppholdUtenlands:n,fremtidigeOppholdUtenlands:t})=>({oppholdINorge:e,harTidligereOppholdUtenlands:!a,harFremtidigeOppholdUtenlands:!r,tidligereOppholdUtenlands:a?void 0:n,fremtidigeOppholdUtenlands:r?void 0:t});Xn.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const nT=ce(Ve),zs=({readOnly:e,erAdopsjon:a,alleKodeverk:r,mottattDato:n})=>o.jsx(tr,{value:nT,children:o.jsx(Xn,{readOnly:e,erAdopsjon:a,alleKodeverk:r,mottattDato:n})});zs.initialValues=Xn.initialValues;zs.transformValues=Xn.transformValues;zs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};class oc{constructor(a,r,n){U(this,"fagsakYtelseType");U(this,"familieHendelseType");U(this,"foreldreType");this.fagsakYtelseType=Kt(a),a===Zd.SVANGERSKAPSPENGER?this.familieHendelseType=Nr.FODSEL:this.familieHendelseType=Kt(r),this.foreldreType=Kt(n)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const ua=ce(Ve),Ln={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},gi=[{label:ua.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Ln.ANNEN_FORELDER_DOED},{label:ua.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Ln.OVERTA_FORELDREANSVARET_ALENE},{label:ua.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Ln.MANN_ADOPTERER_ALENE},{label:ua.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Ln.IKKE_RELEVANT}],Xs=({readOnly:e,soknadData:a})=>{const n=a.getFamilieHendelseType()!==Nr.FODSEL&&a.getForeldreType()===at.FAR?gi:gi.filter(t=>t.value!==Ln.MANN_ADOPTERER_ALENE);return o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:ua.formatMessage({id:"Registrering.Rettigheter.Title"})}),o.jsx(nn,{name:"rettigheter",isReadOnly:e,radios:n})]})})};Xs.initialValues=()=>({rettigheter:void 0});Xs.transformValues=({rettigheter:e})=>e===Ln.IKKE_RELEVANT?{}:{rettigheter:e};Xs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const Da=ce(Ve),$t={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},Zs=({readOnly:e})=>o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:Da.formatMessage({id:"Registrering.Sprak"})}),o.jsx(nn,{name:"språkkode",validate:[x],isReadOnly:e,radios:[{label:Da.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:$t.BOKMAL},{label:Da.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:$t.NYNORSK},{label:Da.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:$t.ENGELSK}]})]})});Zs.initialValues=()=>({språkkode:void 0});Zs.transformValues=({språkkode:e})=>({språkkode:e});Zs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ språkkode }: SprakFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]},alias:"SprakFormValues"}}],returns:null}],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Tn="egenVirksomhet",Me=`${Tn}.virksomheter`,aT={},tT=e=>e.map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),pt=({index:e,readOnly:a,alleKodeverk:r})=>{const n=fe(),t=r.Landkoder.slice().sort((l,i)=>l.navn.localeCompare(i.navn)),{getValues:s}=X();return o.jsx(we,{name:`${Me}.${e}.virksomhetRegistrertINorge`,label:o.jsx(G,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),readOnly:a,trueContent:o.jsx(er,{marginTop:8,children:o.jsx(Ue,{name:`${Me}.${e}.organisasjonsnummer`,readOnly:a,validate:[x,Rn,Ry],label:o.jsx(G,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})}),falseContent:o.jsx(er,{alignOffset:58,marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(ar,{name:`${Me}.${e}.landJobberFra`,className:aT.landBredde,selectValues:tT(t),validate:[x],label:n.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),o.jsxs(ze,{gap:"4",children:[o.jsx(re,{isReadOnly:a,validate:[x,ae,qn],name:`${Me}.${e}.fom`,label:n.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})}),o.jsx(re,{isReadOnly:a,validate:[ae,l=>{const i=s(`${Me}.${e}.fom`);return i?Ky(i,l):null}],name:`${Me}.${e}.tom`,label:n.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})]})]})})})};pt.transformValues=({virksomhetRegistrertINorge:e,organisasjonsnummer:a,landJobberFra:r,fom:n,tom:t})=>({virksomhetRegistrertINorge:e,organisasjonsnummer:e?a:void 0,...e===!1?{landJobberFra:r,fom:n,tom:t}:{landJobberFra:"NOR"}});pt.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Et=({index:e,readOnly:a})=>o.jsx(we,{name:`${Me}.${e}.harRegnskapsforer`,label:o.jsx(G,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),readOnly:a,trueContent:o.jsx(er,{marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Ue,{name:`${Me}.${e}.navnRegnskapsforer`,readOnly:a,validate:[x,xs],label:o.jsx(G,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),o.jsx(Ue,{name:`${Me}.${e}.tlfRegnskapsforer`,readOnly:a,validate:[x,Rn],label:o.jsx(G,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]})})});Et.transformValues=({harRegnskapsforer:e,navnRegnskapsforer:a,tlfRegnskapsforer:r})=>({harRegnskapsforer:e,...e?{navnRegnskapsforer:a}:{},...e?{tlfRegnskapsforer:r}:{}});Et.__docgenInfo={description:`VirksomhetRegnskapPanel

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
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const ud=({readOnly:e,index:a})=>o.jsx(we,{name:`${Me}.${a}.familieEllerVennerTilknyttetNaringen`,label:o.jsx(G,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),readOnly:e,isHorizontal:!1,trueLabel:o.jsx(G,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),falseLabel:o.jsx(G,{id:"Registrering.VirksomhetRelasjonPanel.No"})});ud.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const sT="_inntektBredde_1xgnj_1",lT={inntektBredde:sT},iT=({readOnly:e,index:a})=>[{value:"harVarigEndring",label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"}),element:o.jsx(er,{marginTop:8,children:o.jsx(re,{name:`${Me}.${a}.varigEndringGjeldendeFom`,isReadOnly:e,validate:[ae,x],label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})},{value:"erNyoppstartet",label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})},{value:"erNyIArbeidslivet",label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.NyIArbeidslivet"}),element:o.jsx(er,{marginTop:8,children:o.jsx(re,{name:`${Me}.${a}.nyIArbeidslivetFom`,isReadOnly:e,validate:[ae,x],label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})}],yt=({readOnly:e,index:a})=>o.jsx(we,{name:`${Me}.${a}.varigEndretEllerStartetSisteFireAr`,label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),readOnly:e,trueContent:o.jsx(er,{marginTop:8,children:o.jsxs(Q,{gap:"4",children:[o.jsx(gr,{size:"small",children:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),o.jsx(Us,{validate:[x],name:`${Me}.${a}.varigEndretEllerStartetSisteFireArArsak`,checkboxes:iT({readOnly:e,index:a})}),o.jsx(ed,{name:`${Me}.${a}.beskrivelseAvEndring`,label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[xs]}),o.jsx(Ue,{name:`${Me}.${a}.inntekt`,label:o.jsx(G,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:e,validate:[Rn,x],className:lT.inntektBredde,parse:r=>{const n=parseInt(r.toString(),10);return Number.isNaN(n)?r:n}})]})})});yt.transformValues=({varigEndretEllerStartetSisteFireAr:e,varigEndretEllerStartetSisteFireArArsak:a,varigEndringGjeldendeFom:r,nyIArbeidslivetFom:n,beskrivelseAvEndring:t,inntekt:s})=>{const l=a.includes("harVarigEndring"),i=a.includes("erNyoppstartet"),d=a.includes("erNyIArbeidslivet");return{varigEndretEllerStartetSisteFireAr:e,...e?{harVarigEndring:l,...l?{varigEndringGjeldendeFom:r}:{},erNyoppstartet:i,erNyIArbeidslivet:d,...d?{nyIArbeidslivetFom:n}:{},beskrivelseAvEndring:t,inntekt:s}:{}}};yt.__docgenInfo={description:`VirksomhetStartetEndretPanel

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
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]},alias:"StartedEndretFormValues"}}],returns:null}],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const vi={[Sr.DAGMAMMA]:1,[Sr.FISKE]:2,[Sr.JORDBRUK_ELLER_SKOGBRUK]:3,[Sr.ANNEN]:4},oT=(e,a)=>e>a?1:e<a?-1:0,dT=e=>e.VirksomhetType.filter(a=>a.kode!==Sr.FRILANSER).sort((a,r)=>oT(vi[a.kode],vi[r.kode])).map(a=>({value:a.kode,label:a.navn})),Tt=({readOnly:e,alleKodeverk:a,index:r})=>o.jsx(Us,{label:o.jsx(G,{id:"Registrering.VirksomhetNaeringTypePanel.Title"}),name:`${Me}.${r}.typeVirksomhet`,validate:[x],checkboxes:dT(a),isReadOnly:e});Tt.transformValues=({typeVirksomhet:e})=>({typeVirksomhet:{ANNEN:e.includes(Sr.ANNEN),FISKE:e.includes(Sr.FISKE),DAGMAMMA:e.includes(Sr.DAGMAMMA),JORDBRUK_SKOGBRUK:e.includes(Sr.JORDBRUK_ELLER_SKOGBRUK)}});Tt.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Fn=({open:e,readOnly:a=!1,alleKodeverk:r,index:n,remove:t})=>{const{getFieldState:s,watch:l}=X(),{error:i}=s(`${Me}.${n}`),d=l(`${Me}.${n}.navn`),[g,u]=c.useState(e);return o.jsxs(ke.Row,{shadeOnHover:!1,style:{backgroundColor:i&&!g?"var(--a-red-50)":"none"},children:[o.jsx(ke.DataCell,{valign:"top",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:()=>u(k=>!k),icon:g?o.jsx(Hi,{"aria-label":"Vis mindre"}):o.jsx(st,{"aria-label":"Vis mer"})})}),o.jsxs(ke.DataCell,{valign:"top",children:[o.jsx(Ra,{hidden:g,paddingBlock:"3",children:o.jsx(rr,{weight:"semibold",children:d})}),o.jsxs(Q,{gap:"4",hidden:!g,children:[o.jsx(Ue,{name:`${Me}.${n}.navn`,validate:[x],label:o.jsx(G,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),readOnly:a}),o.jsx(pt,{readOnly:a,index:n,alleKodeverk:r}),o.jsx(Tt,{readOnly:a,index:n,alleKodeverk:r}),o.jsx(yt,{readOnly:a,index:n}),o.jsx(Et,{readOnly:a,index:n}),o.jsx(ud,{readOnly:a,index:n})]})]}),o.jsx(ke.DataCell,{valign:"top",align:"right",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:t,onKeyDown:t,icon:o.jsx(lt,{"aria-label":"Slett rad"})})})]})};Fn.initialValues=()=>({varigEndretEllerStartetSisteFireArArsak:[],typeVirksomhet:[]});Fn.transformValues=e=>({navn:e.navn,...pt.transformValues(e),...Tt.transformValues(e),...yt.transformValues(e),...Et.transformValues(e),familieEllerVennerTilknyttetNaringen:e.familieEllerVennerTilknyttetNaringen});Fn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`IdFormValues &
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const ct=({readOnly:e=!1,alleKodeverk:a})=>{var g,u,k,m,p;const r=fe(),{control:n,formState:{errors:t}}=X(),{fields:s,remove:l,append:i}=sr({control:n,name:`${Tn}.virksomheter`,rules:{required:r.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}}),d=()=>{i(Fn.initialValues())};return c.useEffect(()=>{s.length===0&&d()},[]),o.jsxs(o.Fragment,{children:[o.jsxs(ke,{children:[o.jsx(ke.Header,{children:o.jsxs(ke.Row,{children:[o.jsx(ke.HeaderCell,{style:{width:"48px"}}),o.jsx(ke.HeaderCell,{children:o.jsx(G,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),o.jsx(ke.HeaderCell,{style:{width:"48px"}})]})}),o.jsx(ke.Body,{children:s.map((f,A)=>o.jsx(Fn,{index:A,open:A+1===s.length,remove:()=>l(A),alleKodeverk:a,readOnly:e},f.id))})]}),((k=(u=(g=t[Tn])==null?void 0:g.virksomheter)==null?void 0:u.root)==null?void 0:k.message)&&o.jsx(Br,{children:(p=(m=t[Tn])==null?void 0:m.virksomheter.root)==null?void 0:p.message}),o.jsx("div",{children:o.jsx(We,{size:"small",variant:"tertiary",type:"button",onClick:d,icon:o.jsx(Ga,{"aria-hidden":!0}),children:o.jsx(G,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})})]})};ct.transformValues=({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:a}})=>({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:e?a.map(r=>Fn.transformValues(r)):void 0}});ct.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Zn=({readOnly:e=!0,alleKodeverk:a})=>{const r=fe(),{watch:n}=X(),t=n(`${Tn}.harArbeidetIEgenVirksomhet`)||null;return o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.EgenVirksomhet.Title"})}),o.jsx(nn,{name:`${Tn}.harArbeidetIEgenVirksomhet`,validate:[x],isReadOnly:e,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:r.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:r.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),t&&o.jsx(ct,{readOnly:e,alleKodeverk:a})]})})};Zn.initialValues=()=>({[Tn]:{harArbeidetIEgenVirksomhet:void 0,virksomheter:[Fn.initialValues()]}});Zn.transformValues=ct.transformValues;Zn.__docgenInfo={description:`EgenVirksomhetPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const uT=ce(Ve),Qs=({readOnly:e,alleKodeverk:a})=>o.jsx(tr,{value:uT,children:o.jsx(Zn,{readOnly:e,alleKodeverk:a})});Qs.initialValues=Zn.initialValues;Qs.transformValues=Zn.transformValues;Qs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Jt=ce(Ve),el=({readOnly:e})=>o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:Jt.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),o.jsx(nn,{name:"dekningsgrad",validate:[x],isReadOnly:e,isHorizontal:!0,radios:[{label:Jt.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:Jt.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]})});el.initialValues=()=>({dekningsgrad:void 0});el.transformValues=({dekningsgrad:e})=>({dekningsgrad:e});el.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ dekningsgrad }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const mi=ce(Ve),rl=({readOnly:e,annenForelderInformertRequired:a=!1})=>o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:mi.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),o.jsx(we,{label:mi.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"}),name:"annenForelderInformert",isRequired:a,readOnly:e})]})});rl.initialValues=()=>({annenForelderInformert:void 0});rl.tranformValues=({annenForelderInformert:e})=>({annenForelderInformert:e});rl.__docgenInfo={description:"Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]}}}},{name:"tranformValues",docblock:null,modifiers:["static"],params:[{name:"{ annenForelderInformert }: BekreftelseFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]},alias:"BekreftelseFormValues"}}],returns:null}],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me="tidsromPermisjon",Gn="graderingPeriode",nl="oppholdPerioder",kd="overforingsperioder",ft="utsettelsePeriode",va="permisjonsPerioder",al=`${me}.${va}`,br=e=>`${al}.${e}`,kT=Na(100),tl=[jr.FELLESPERIODE,jr.FEDREKVOTE,jr.FORELDREPENGER_FOR_FODSEL,jr.FORELDREPENGER,jr.MODREKVOTE],gT=e=>e.filter(({kode:a})=>tl.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),vT=e=>e.map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),gd=[jr.FEDREKVOTE,jr.FORELDREPENGER_FOR_FODSEL,jr.MODREKVOTE],Pa=(e,a)=>e?a:"",mT=e=>!!e&&W(e,Ge).isBefore(W("2019-01-01")),pi=e=>()=>{const r=(e(al)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return Hn(r)},Ei=(e,a,r)=>()=>{const n=e(`${br(a)}.periodeFom`),t=e(`${br(a)}.periodeTom`);return!t||!n?null:r?Xe(t)(n):qe(n)(t)},At=({sokerErMor:e,readOnly:a,alleKodeverk:r})=>{const n=fe(),t=r.UttakPeriodeType,s=r.MorsAktivitet;s.filter(({kode:f})=>f==="-").length===0&&s.unshift({kode:"-",navn:"",kodeverk:""});const{control:l,getValues:i,trigger:d,watch:g,formState:{isSubmitted:u}}=X(),{fields:k,remove:m,append:p}=sr({control:l,name:al});return c.useEffect(()=>{k.length===0&&p({})},[]),o.jsx(Ar,{readOnly:a,fields:k,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:p,remove:m,children:(f,A)=>{const y=A===0,F=g(br(A)),E=mT(F.periodeFom),R=gd.some(S=>S===F.periodeType)||F.periodeType==="";return o.jsxs(an,{readOnly:a,remove:m,index:A,children:[o.jsx("div",{children:o.jsx(ar,{readOnly:a,name:`${br(A)}.periodeType`,label:Pa(y,n.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:gT(t),validate:[x]})}),o.jsx(re,{isReadOnly:a,name:`${br(A)}.periodeFom`,label:Pa(y,n.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[x,ae,Ei(i,A,!0),pi(i)],onChange:()=>u?d():void 0}),o.jsx(re,{isReadOnly:a,name:`${br(A)}.periodeTom`,label:Pa(y,n.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[x,ae,Ei(i,A,!1),pi(i)],onChange:()=>u?d():void 0}),!e&&o.jsx(ar,{readOnly:a,disabled:R,name:`${br(A)}.morsAktivitet`,label:Pa(y,n.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:vT(s),hideValueOnDisable:!0}),o.jsx(kr,{readOnly:a,name:`${br(A)}.flerbarnsdager`,label:o.jsx(G,{id:"Registrering.Permisjon.Flerbarnsdager"})}),o.jsx(kr,{readOnly:a,name:`${br(A)}.harSamtidigUttak`,label:o.jsx(G,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),F.harSamtidigUttak&&o.jsx(Ue,{name:`${br(A)}.samtidigUttaksprosent`,validate:[ds,kT],label:n.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:S=>Number.isNaN(S)?S:parseFloat(S.toString()).toFixed(2)}),E&&o.jsx(nt,{size:"small",variant:"warning",children:o.jsx(G,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},f.id)}})};At.transformValues=e=>e.map(a=>gd.some(r=>r===a.periodeType)?{periodeType:a.periodeType,periodeFom:a.periodeFom,periodeTom:a.periodeTom,flerbarnsdager:a.flerbarnsdager??!1,harSamtidigUttak:a.harSamtidigUttak??!1,samtidigUttaksprosent:a.samtidigUttaksprosent}:{periodeType:a.periodeType,periodeFom:a.periodeFom,periodeTom:a.periodeTom,morsAktivitet:a.morsAktivitet,flerbarnsdager:a.flerbarnsdager??!1,harSamtidigUttak:a.harSamtidigUttak??!1,samtidigUttaksprosent:a.samtidigUttaksprosent});At.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Rt=({foreldreType:e,readOnly:a,alleKodeverk:r})=>{const{watch:n}=X(),t=n(`${me}.fulltUttak`)??!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(G,{id:"Registrering.Permisjon.FulltUttak"})}),o.jsx(kr,{readOnly:a,name:`${me}.fulltUttak`,label:o.jsx(G,{id:"Registrering.Permisjon.FulltUttak"})}),t&&o.jsx(At,{sokerErMor:e===at.MOR,readOnly:a,alleKodeverk:r})]})};Rt.initialValues=()=>({[va]:[],fulltUttak:!1});Rt.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const pT=Ay(9),Xa=`${me}.${Gn}`,or=e=>`${Xa}.${e}`,yi=e=>()=>{const r=(e(`${Xa}`)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},Ti=(e,a,r)=>()=>{const n=e(`${or(a)}.periodeFom`),t=e(`${or(a)}.periodeTom`);return!t||!n?null:r?Xe(t)(n):qe(n)(t)},ET=(e,a)=>r=>e(`${or(a)}.arbeidskategoriType`)===en.ARBEIDSTAKER?x(r):void 0,yT=e=>{if(e)return e.length===11?ld(e):pT(e)},ci={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},TT=[en.ARBEIDSTAKER,en.SELVSTENDIG_NAERINGSDRIVENDE,en.FRILANSER],fi=Na(100),cT=e=>e.filter(({kode:a})=>tl.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),fT=e=>e.filter(({kode:a})=>TT.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),vd=({graderingKvoter:e,readOnly:a,arbeidskategoriTyper:r})=>{const n=fe(),{watch:t,control:s,getValues:l,trigger:i,formState:{isSubmitted:d}}=X(),{fields:g,remove:u,append:k}=sr({control:s,name:`${Xa}`}),m=t(`${Xa}`)??[];return c.useEffect(()=>{g.length===0&&k(ci)},[]),o.jsx(Ar,{fields:g,emptyPeriodTemplate:ci,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,remove:u,append:k,children:(p,f)=>{const{harSamtidigUttak:A,periodeFom:y}=m[f],F=y&&W(y,Ge).isBefore(W("2019-01-01"));return o.jsxs(an,{readOnly:a,remove:u,index:f,children:[o.jsx(ar,{name:`${or(f)}.periodeForGradering`,selectValues:cT(e),label:n.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[x]}),o.jsx(re,{label:n.formatMessage({id:"Registrering.Permisjon.periodeFom"}),name:`${or(f)}.periodeFom`,validate:[x,ae,Ti(l,f,!0),yi(l)],onChange:()=>d?i():void 0}),o.jsx(re,{label:n.formatMessage({id:"Registrering.Permisjon.periodeTom"}),name:`${or(f)}.periodeTom`,validate:[x,ae,Ti(l,f,!1),yi(l)],onChange:()=>d?i():void 0}),o.jsx(Ue,{label:o.jsx(G,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),name:`${or(f)}.prosentandelArbeid`,validate:[x,ds,fi],normalizeOnBlur:E=>Number.isNaN(E)?E:parseFloat(E.toString()).toFixed(2)}),o.jsx(Ue,{label:n.formatMessage({id:"Registrering.Permisjon.Orgnr"}),name:`${or(f)}.arbeidsgiverIdentifikator`,validate:[ET(l,f),Rn,yT]}),o.jsx(ar,{label:n.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${or(f)}.arbeidskategoriType`,selectValues:fT(r),validate:[x],onChange:()=>d?i():void 0}),o.jsx(kr,{name:`${or(f)}.skalGraderes`,label:o.jsx(G,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})}),o.jsx(kr,{readOnly:a,name:`${or(f)}.flerbarnsdager`,label:o.jsx(G,{id:"Registrering.Permisjon.Flerbarnsdager"})}),o.jsx(kr,{name:`${or(f)}.harSamtidigUttak`,label:o.jsx(G,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),A&&o.jsx(Ue,{name:`${or(f)}.samtidigUttaksprosent`,validate:[x,ds,fi],label:n.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})}),F&&o.jsx(nt,{size:"small",variant:"warning",children:o.jsx(G,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},p.id)}})};vd.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn<'Arbeidskategori'>[]"},description:""}}};const Qn=({readOnly:e,alleKodeverk:a})=>{const r=a.UttakPeriodeType,n=a.Arbeidskategori,{watch:t}=X(),s=t(`${me}.skalGradere`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(G,{id:"Registrering.Permisjon.Gradering.Title"})}),o.jsx(kr,{readOnly:e,name:`${me}.skalGradere`,label:o.jsx(G,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),s&&o.jsx(vd,{graderingKvoter:r,arbeidskategoriTyper:n,readOnly:e})]})};Qn.transformValues=e=>{const a=e[Gn];return a?a.map(r=>r.arbeidskategoriType?{...r,erArbeidstaker:r.arbeidskategoriType===en.ARBEIDSTAKER,erFrilanser:r.arbeidskategoriType===en.FRILANSER,erSelvstNæringsdrivende:r.arbeidskategoriType===en.SELVSTENDIG_NAERINGSDRIVENDE}:r):[]};Qn.initialValues=()=>({[Gn]:[],skalGradere:!1});Qn.__docgenInfo={description:`PermisjonGraderingPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const sl=`${me}.${nl}`,un=e=>`${sl}.${e}`,Ai=e=>()=>{const r=(e(`${sl}`)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},Ri={periodeFom:"",periodeTom:"",årsak:""},AT=[ia.UTTAK_MØDREKVOTE_ANNEN_FORELDER,ia.UTTAK_FEDREKVOTE_ANNEN_FORELDER,ia.UTTAK_FELLESP_ANNEN_FORELDER,ia.UTTAK_FORELDREPENGER_ANNEN_FORELDER],RT=e=>e.filter(({kode:a})=>AT.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),md=({oppholdsReasons:e,readOnly:a})=>{const r=fe(),{control:n,getValues:t,trigger:s,formState:{isSubmitted:l}}=X(),{fields:i,remove:d,append:g}=sr({control:n,name:`${sl}`});return c.useEffect(()=>{i.length===0&&g(Ri)},[]),o.jsx(Ar,{fields:i,emptyPeriodTemplate:Ri,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,append:g,remove:d,children:(u,k)=>o.jsxs(an,{readOnly:a,remove:d,index:k,children:[o.jsx(re,{name:`${un(k)}.periodeFom`,label:r.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[x,ae,()=>{const m=t(`${un(k)}.periodeFom`),p=t(`${un(k)}.periodeTom`);return p&&m?Xe(p)(m):null},Ai(t)],onChange:()=>l?s():void 0}),o.jsx(re,{name:`${un(k)}.periodeTom`,label:r.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[x,ae,()=>{const m=t(`${un(k)}.periodeFom`),p=t(`${un(k)}.periodeTom`);return p&&m?qe(m)(p):null},Ai(t)],onChange:()=>l?s():void 0}),o.jsx("div",{children:o.jsx(ar,{name:`${un(k)}.årsak`,label:r.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}),selectValues:RT(e),validate:[x]})})]},u.id)})};md.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'OppholdÅrsak'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ft=({readOnly:e,alleKodeverk:a})=>{const r=a.OppholdÅrsak,{watch:n}=X(),t=n(`${me}.skalHaOpphold`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(G,{id:"Registrering.Permisjon.Opphold.Title"})}),o.jsx(kr,{readOnly:e,name:`${me}.skalHaOpphold`,label:o.jsx(G,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),t&&o.jsx(md,{oppholdsReasons:r,readOnly:e})]})};Ft.initialValues=()=>({[nl]:[],skalHaOpphold:!1});Ft.__docgenInfo={description:`PermisjonOppholdPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ll=`${me}.${kd}`,kn=e=>`${ll}.${e}`,Fi=e=>()=>{const r=(e(ll)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},bi={periodeFom:"",periodeTom:"",overforingArsak:""},pd=({selectValues:e,readOnly:a})=>{const r=fe(),{control:n,getValues:t,trigger:s,formState:{isSubmitted:l}}=X(),{fields:i,remove:d,append:g}=sr({control:n,name:ll});return c.useEffect(()=>{i.length===0&&g(bi)},[]),o.jsx(Ar,{fields:i,emptyPeriodTemplate:bi,bodyText:r.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:a,append:g,remove:d,children:(u,k)=>o.jsxs(an,{readOnly:a,remove:d,index:k,children:[o.jsx("div",{children:o.jsx(ar,{name:`${kn(k)}.overforingArsak`,label:r.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}),selectValues:e,validate:[x],readOnly:a})}),o.jsx(re,{isReadOnly:a,name:`${kn(k)}.periodeFom`,validate:[x,ae,()=>{const m=t(`${kn(k)}.periodeFom`),p=t(`${kn(k)}.periodeTom`);return p&&m?Xe(p)(m):null},Fi(t)],label:o.jsx(G,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}),onChange:()=>l?s():void 0}),o.jsx(re,{isReadOnly:a,name:`${kn(k)}.periodeTom`,validate:[x,ae,()=>{const m=t(`${kn(k)}.periodeFom`),p=t(`${kn(k)}.periodeTom`);return p&&m?qe(m)(p):null},Fi(t)],label:o.jsx(G,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}),onChange:()=>l?s():void 0})]},u.id)})};pd.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const FT=(e,a,r)=>a===ma.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):a===ma.SYKDOM_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):r,bT=(e,a,r,n)=>e.filter(({kode:t})=>r||t!==ma.ALENEOMSORG&&t!==ma.IKKE_RETT_ANNEN_FORELDER).map(({kode:t,navn:s})=>a?o.jsx("option",{value:t,children:s},t):o.jsx("option",{value:t,children:FT(n,t,s)},t)),bt=({foreldreType:e,alleKodeverk:a,readOnly:r,erEndringssøknad:n})=>{const t=fe(),s=a.OverføringÅrsak,l=bT(s,e===at.MOR,n,t),{watch:i}=X(),d=i(`${me}.skalOvertaKvote`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(G,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),o.jsx(kr,{readOnly:r,name:`${me}.skalOvertaKvote`,label:o.jsx(G,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),d&&o.jsx(pd,{selectValues:l,readOnly:r})]})};bt.initialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[]});bt.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Ni={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},Ed=`${me}.${ft}`,mn=e=>`${Ed}.${e}`,Oi=e=>()=>{const r=(e(`${Ed}`)??[]).filter(({periodeFom:n,periodeTom:t})=>n!==""&&t!=="").map(({periodeFom:n,periodeTom:t})=>[n,t]);return r.length>0?Hn(r):void 0},_i=(e,a,r)=>()=>{const n=`${mn(a)}`,t=e(`${n}.periodeFom`),s=e(`${n}.periodeTom`);return!s&&!t?null:r?Xe(s)(t):qe(t)(s)},NT=e=>e.map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),OT=e=>e.filter(({kode:a})=>tl.some(r=>r===a)).map(({kode:a,navn:r})=>o.jsx("option",{value:a,children:r},a)),yd=({utsettelseReasons:e,utsettelseKvoter:a,readOnly:r})=>{const n=fe(),{control:t,getValues:s,trigger:l,formState:{isSubmitted:i}}=X(),{fields:d,remove:g,append:u}=sr({control:t,name:`${me}.${ft}`});c.useEffect(()=>{d.length===0&&u(Ni)},[]);const k=c.useCallback(()=>i?l():void 0,[i,l]);return o.jsx(Ar,{fields:d,emptyPeriodTemplate:Ni,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:u,remove:g,children:(m,p)=>o.jsxs(an,{readOnly:r,remove:g,index:p,children:[o.jsx(ar,{name:`${mn(p)}.periodeForUtsettelse`,label:n.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}),selectValues:OT(a),validate:[x]}),o.jsx(re,{name:`${mn(p)}.periodeFom`,label:n.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[x,ae,_i(s,p,!0),Oi(s)],onChange:k}),o.jsx(re,{name:`${mn(p)}.periodeTom`,label:n.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[x,ae,_i(s,p,!1),Oi(s)],onChange:k}),o.jsx(ar,{name:`${mn(p)}.arsakForUtsettelse`,label:n.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}),selectValues:NT(e),validate:[x],onChange:k}),o.jsx(ar,{label:n.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),name:`${mn(p)}.erArbeidstaker`,selectValues:[o.jsx("option",{value:"true",children:n.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),o.jsx("option",{value:"false",children:n.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[f=>s(`${mn(p)}.arsakForUtsettelse`)==="ARBEID"?x(f):void 0]})]},m.id)})};yd.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn<'UttakPeriodeType'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Nt=({readOnly:e,alleKodeverk:a})=>{const r=a.UtsettelseÅrsak,n=a.UttakPeriodeType,{watch:t}=X(),s=t(`${me}.skalUtsette`)||!1;return o.jsxs(Q,{gap:"2",children:[o.jsx(gr,{children:o.jsx(G,{id:"Registrering.Permisjon.Utsettelse.Title"})}),o.jsx(kr,{readOnly:e,name:`${me}.skalUtsette`,label:o.jsx(G,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),s&&o.jsx(yd,{utsettelseReasons:r,utsettelseKvoter:n,readOnly:e})]})};Nt.initialValues=()=>({[ft]:[],skalUtsette:!1});Nt.__docgenInfo={description:`PermisjonUtsettelsePanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ea=({foreldreType:e,readOnly:a,alleKodeverk:r,erEndringssøknad:n})=>{var p,f,A,y;const t=fe(),{setError:s,clearErrors:l,formState:i,watch:d}=X(),[g,u,k,m]=d([`${me}.fulltUttak`,`${me}.skalGradere`,`${me}.skalUtsette`,`${me}.skalOvertaKvote`]);return c.useEffect(()=>{!g&&!u&&!k&&!m?s(`${me}.notRegisteredInput`,{type:"custom",message:t.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}):l(`${me}.notRegisteredInput`)},[g,u,k,m]),o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"Registrering.Permisjon.Title"})}),o.jsx(Rt,{foreldreType:e,readOnly:a,alleKodeverk:r}),o.jsx(bt,{readOnly:a,foreldreType:e,alleKodeverk:r,erEndringssøknad:n}),o.jsx(Nt,{readOnly:a,alleKodeverk:r}),o.jsx(Qn,{readOnly:a,alleKodeverk:r}),o.jsx(Ft,{readOnly:a,alleKodeverk:r}),i.isSubmitted&&((f=(p=i.errors[me])==null?void 0:p.notRegisteredInput)==null?void 0:f.message)&&o.jsx(Br,{children:(y=(A=i.errors[me])==null?void 0:A.notRegisteredInput)==null?void 0:y.message})]})})};ea.transformValues=e=>{var s,l,i,d,g,u,k;const a=e[me],r=a,n=a[va];(s=e.tidsromPermisjon)!=null&&s.fulltUttak&&n&&(r[va]=At.transformValues(n));const t=a[Gn];return(l=e.tidsromPermisjon)!=null&&l.skalGradere&&t&&(r[Gn]=Qn.transformValues(a)),(i=e.tidsromPermisjon)!=null&&i.fulltUttak||(r[va]=void 0),(d=e.tidsromPermisjon)!=null&&d.skalGradere||(r[Gn]=void 0),(g=e.tidsromPermisjon)!=null&&g.skalUtsette||(r[ft]=void 0),(u=e.tidsromPermisjon)!=null&&u.skalOvertaKvote||(r[kd]=void 0),(k=e.tidsromPermisjon)!=null&&k.skalHaOpphold||(r[nl]=void 0),{[me]:r}};ea.initialValues=()=>({[me]:{...Rt.initialValues(),...bt.initialValues(),...Nt.initialValues(),...Qn.initialValues(),...Ft.initialValues()}});ea.__docgenInfo={description:`PermisjonPanel

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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const _T=ce(Ve),il=({foreldreType:e,readOnly:a,alleKodeverk:r,erEndringssøknad:n})=>o.jsx(tr,{value:_T,children:o.jsx(ea,{readOnly:a,foreldreType:e,alleKodeverk:r,erEndringssøknad:n})});il.transformValues=ea.transformValues;il.initialValues=ea.initialValues;il.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"union",raw:`| 'ArbeidType'
| 'Avslagsårsak'
| 'Venteårsak'
| 'BehandlingÅrsakType'
| 'KlageAvvistÅrsak'
| 'KlageMedholdÅrsak'
| 'KlageHjemmel'
| 'OmsorgsovertakelseVilkårType'
| 'MedlemskapManuellVurderingType'
| 'VergeType'
| 'Landkoder'
| 'MorsAktivitet'
| 'VirksomhetType'
| 'OverføringÅrsak'
| 'PersonstatusType'
| 'FagsakStatus'
| 'FagsakYtelseType'
| 'ForeldreType'
| 'FamilieHendelseType'
| 'InnsynResultatType'
| 'BehandlingType'
| 'OppholdÅrsak'
| 'UtsettelseÅrsak'
| 'OpptjeningAktivitetType'
| 'UttakPeriodeType'
| 'RevurderingVarslingÅrsak'
| 'ManuellBehandlingÅrsak'
| 'PeriodeResultatÅrsak'
| 'AktivitetStatus'
| 'Arbeidskategori'
| 'Region'
| 'SivilstandType'
| 'FaktaOmBeregningTilfelle'
| 'GraderingAvslagÅrsak'
| 'SkjermlenkeType'
| 'BehandlingResultatType'
| 'HistorikkAktør'
| 'BehandlingStatus'
| 'FarSøkerType'
| 'MedlemskapDekningType'
| 'MedlemskapType'
| 'StønadskontoType'
| 'KonsekvensForYtelsen'
| 'UttakArbeidType'
| 'UttakUtsettelseType'
| 'VilkårType'
| 'PermisjonsbeskrivelseType'
| 'VurderÅrsak'
| 'AnkeOmgjørÅrsak'
| 'OppholdstillatelseType'
| 'FaresignalVurdering'
| 'FordelingPeriodeKilde'
| 'RelasjonsRolleType'
| 'FagsakMarkering'
| 'AdresseType'
| 'NaturalYtelseType'
| 'OppgaveType'
| 'AktivitetskravPermisjonType'`,elements:[{name:"literal",value:"'ArbeidType'"},{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'Venteårsak'"},{name:"literal",value:"'BehandlingÅrsakType'"},{name:"literal",value:"'KlageAvvistÅrsak'"},{name:"literal",value:"'KlageMedholdÅrsak'"},{name:"literal",value:"'KlageHjemmel'"},{name:"literal",value:"'OmsorgsovertakelseVilkårType'"},{name:"literal",value:"'MedlemskapManuellVurderingType'"},{name:"literal",value:"'VergeType'"},{name:"literal",value:"'Landkoder'"},{name:"literal",value:"'MorsAktivitet'"},{name:"literal",value:"'VirksomhetType'"},{name:"literal",value:"'OverføringÅrsak'"},{name:"literal",value:"'PersonstatusType'"},{name:"literal",value:"'FagsakStatus'"},{name:"literal",value:"'FagsakYtelseType'"},{name:"literal",value:"'ForeldreType'"},{name:"literal",value:"'FamilieHendelseType'"},{name:"literal",value:"'InnsynResultatType'"},{name:"literal",value:"'BehandlingType'"},{name:"literal",value:"'OppholdÅrsak'"},{name:"literal",value:"'UtsettelseÅrsak'"},{name:"literal",value:"'OpptjeningAktivitetType'"},{name:"literal",value:"'UttakPeriodeType'"},{name:"literal",value:"'RevurderingVarslingÅrsak'"},{name:"literal",value:"'ManuellBehandlingÅrsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'AktivitetStatus'"},{name:"literal",value:"'Arbeidskategori'"},{name:"literal",value:"'Region'"},{name:"literal",value:"'SivilstandType'"},{name:"literal",value:"'FaktaOmBeregningTilfelle'"},{name:"literal",value:"'GraderingAvslagÅrsak'"},{name:"literal",value:"'SkjermlenkeType'"},{name:"literal",value:"'BehandlingResultatType'"},{name:"literal",value:"'HistorikkAktør'"},{name:"literal",value:"'BehandlingStatus'"},{name:"literal",value:"'FarSøkerType'"},{name:"literal",value:"'MedlemskapDekningType'"},{name:"literal",value:"'MedlemskapType'"},{name:"literal",value:"'StønadskontoType'"},{name:"literal",value:"'KonsekvensForYtelsen'"},{name:"literal",value:"'UttakArbeidType'"},{name:"literal",value:"'UttakUtsettelseType'"},{name:"literal",value:"'VilkårType'"},{name:"literal",value:"'PermisjonsbeskrivelseType'"},{name:"literal",value:"'VurderÅrsak'"},{name:"literal",value:"'AnkeOmgjørÅrsak'"},{name:"literal",value:"'OppholdstillatelseType'"},{name:"literal",value:"'FaresignalVurdering'"},{name:"literal",value:"'FordelingPeriodeKilde'"},{name:"literal",value:"'RelasjonsRolleType'"},{name:"literal",value:"'FagsakMarkering'"},{name:"literal",value:"'AdresseType'"},{name:"literal",value:"'NaturalYtelseType'"},{name:"literal",value:"'OppgaveType'"},{name:"literal",value:"'AktivitetskravPermisjonType'"}]},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const ST=ce(Ve),ol=({readOnly:e})=>o.jsx(tr,{value:ST,children:o.jsx(nn,{name:"erBarnetFodt",label:o.jsx(G,{id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[x],isReadOnly:e,isTrueOrFalseSelection:!0,radios:[{label:o.jsx(G,{id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:o.jsx(G,{id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]})});ol.__docgenInfo={description:"",methods:[],displayName:"ErBarnetFodt",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};var Ma={exports:{}},hT=Ma.exports,Si;function KT(){return Si||(Si=1,function(e,a){(function(r,n){e.exports=n()})(hT,function(){return function(r,n){n.prototype.isSameOrAfter=function(t,s){return this.isSame(t,s)||this.isAfter(t,s)}}})}(Ma)),Ma.exports}var DT=KT();const PT=qi(DT);var wa={exports:{}},IT=wa.exports,hi;function LT(){return hi||(hi=1,function(e,a){(function(r,n){e.exports=n()})(IT,function(){return function(r,n){n.prototype.isSameOrBefore=function(t,s){return this.isSame(t,s)||this.isBefore(t,s)}}})}(wa)),wa.exports}var MT=LT();const wT=qi(MT),Ki=ce(Ve);W.extend(wT);W.extend(PT);const Di=td(1),Pi=Na(9),Za=()=>W().subtract(8,"year"),Td=()=>W(),VT=()=>W().subtract(8,"year"),jT=()=>W().subtract(0,"year"),Mn=()=>W().subtract(8,"year"),wn=()=>W().add(9,"months"),GT=(e,a)=>{const r=e?W(e,Ge):void 0,n=W().startOf("day"),t=r!=null&&r.isValid()&&(r!=null&&r.isBefore(n))?r:n;return Xe(t)(a)},cd=(e,a)=>{const r=e?W(e,Ge):void 0,n=W(a,Ge);if(!(r!=null&&r.isValid())||!(n!=null&&n.isValid()))return null;const t=r.subtract(3,"weeks").subtract(1,"day"),s=r.add(5,"months").add(1,"day");return t.isSameOrAfter(n)?Ki.formatMessage({id:"ValidationMessage.ForTidligTermin"}):s.isSameOrBefore(n)?Ki.formatMessage({id:"ValidationMessage.ForSenTermin"}):null},wr=ce(Ve),UT=e=>a=>{const r=e("foedselsDato");return cd(r,a)},qT=e=>a=>{const r=e("termindato");return GT(r,a)},dl=({readOnly:e,erForeldrepenger:a=!1})=>{const{watch:r,getValues:n}=X(),t=r("erBarnetFodt");return o.jsx(tr,{value:wr,children:o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:wr.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),o.jsx(ol,{readOnly:e}),t!==void 0&&o.jsxs(Q,{gap:"4",children:[t===!1&&o.jsxs(o.Fragment,{children:[o.jsxs(ze,{gap:"4",children:[o.jsx(re,{name:"termindato",label:wr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:Mn().toDate(),toDate:wn().toDate(),defaultMonth:new Date,validate:[x,ae,qe(Mn()),Xe(wn())]}),o.jsx(Ue,{name:"antallBarn",label:wr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:s=>{const l=parseInt(s.toString(),10);return isNaN(l)?s:l},validate:[x,Rn,Di,Pi]})]}),o.jsx(re,{name:"terminbekreftelseDato",label:wr.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:e,fromDate:VT().toDate(),toDate:jT().toDate(),defaultMonth:new Date,validate:[ae,qT(n)]})]}),t===!0&&o.jsxs(o.Fragment,{children:[o.jsxs(ze,{gap:"4",children:[o.jsx(re,{name:"foedselsDato",label:wr.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,validate:[x,ae,qe(Za()),qn],fromDate:Za().toDate(),toDate:Td().toDate()}),o.jsx(Ue,{name:"antallBarn",label:wr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:s=>{const l=parseInt(s.toString(),10);return Number.isNaN(l)?s:l},validate:[x,Rn,Di,Pi]})]}),a&&o.jsx(nt,{size:"small",variant:"info",children:o.jsx(gr,{size:"small",children:wr.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),o.jsx(re,{name:"termindato",label:wr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,validate:[ae,qe(Mn()),Xe(wn()),UT(n)],fromDate:Mn().toDate(),toDate:wn().toDate(),defaultMonth:new Date})]})]})]})})})};dl.initialValues=()=>({erBarnetFodt:void 0});dl.transformValues=({antallBarn:e,erBarnetFodt:a,foedselsDato:r,termindato:n,terminbekreftelseDato:t})=>a?{erBarnetFodt:!0,termindato:n,foedselsDato:r,antallBarn:e}:{erBarnetFodt:!1,termindato:n,terminbekreftelseDato:t,antallBarnFraTerminbekreftelse:e};dl.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Wt=ce(Ve),xT=e=>a=>{const r=e("foedselsDato");return cd(r,a)},ul=({readOnly:e})=>{const{getValues:a,watch:r}=X(),n=r("erBarnetFodt");return o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:Wt.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),o.jsx(ol,{readOnly:e}),n&&o.jsx(re,{name:"foedselsDato",label:Wt.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,fromDate:Za().toDate(),toDate:Td().toDate(),validate:[x,ae,qn,qe(Za())]}),o.jsx(re,{name:"termindato",label:Wt.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:Mn().toDate(),toDate:wn().toDate(),defaultMonth:new Date,validate:[x,ae,qe(Mn()),Xe(wn()),xT(a)]})]})})};ul.initialValues=()=>({termindato:void 0,foedselsDato:void 0,erBarnetFodt:!1});ul.transformValues=({erBarnetFodt:e,foedselsDato:a,termindato:r})=>({erBarnetFodt:e,termindato:r,foedselsDato:e?a:void 0});ul.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ erBarnetFodt, foedselsDato, termindato }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"TerminOgFodselPanelSvp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Le="tilretteleggingArbeidsforhold",Qa="tilretteleggingForArbeidsgiver",BT="tilretteleggingSelvstendigNaringsdrivende",HT="tilretteleggingFrilans",YT="tilretteleggingArbeidsgiver",CT=Na(100),Ii={tilretteleggingType:"",dato:"",stillingsprosent:""},et=({readOnly:e,name:a})=>{const r=fe(),{control:n}=X(),{fields:t,remove:s,append:l}=sr({control:n,name:a});return c.useEffect(()=>{t.length===0&&l(Ii)},[]),o.jsx(Ra,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:o.jsx(Ar,{fields:t,emptyPeriodTemplate:Ii,bodyText:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:e,append:l,remove:s,children:(i,d)=>o.jsxs(an,{readOnly:e,remove:s,index:d,children:[o.jsx(ar,{readOnly:e,name:`${a}.${d}.tilretteleggingType`,label:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[x],selectValues:[o.jsx("option",{value:gn.HEL_TILRETTELEGGING,children:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},gn.HEL_TILRETTELEGGING),o.jsx("option",{value:gn.DELVIS_TILRETTELEGGING,children:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},gn.DELVIS_TILRETTELEGGING),o.jsx("option",{value:gn.INGEN_TILRETTELEGGING,children:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},gn.INGEN_TILRETTELEGGING)]}),o.jsx(re,{isReadOnly:e,name:`${a}.${d}.dato`,label:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[x]}),o.jsx(Ue,{readOnly:e,name:`${a}.${d}.stillingsprosent`,label:r.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[x,CT],maxLength:99})]},i.id)})})};et.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ks=`${Le}.${Qa}`,zt=e=>`${ks}.${e}`,fd=({open:e,readOnly:a=!1,index:r,remove:n})=>{const{getFieldState:t,watch:s}=X(),{error:l}=t(`${ks}.${r}`),i=s(`${ks}.${r}.organisasjonsnummer`),[d,g]=c.useState(e),u=fe();return o.jsxs(ke.Row,{shadeOnHover:!1,style:{backgroundColor:l&&!d?"var(--a-red-50)":"none"},children:[o.jsx(ke.DataCell,{valign:"top",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:()=>g(k=>!k),icon:d?o.jsx(Hi,{"aria-label":"Vis mindre"}):o.jsx(st,{"aria-label":"Vis mer"})})}),o.jsxs(ke.DataCell,{valign:"top",children:[o.jsx(Ra,{hidden:d,paddingBlock:"3",children:o.jsx(rr,{weight:"semibold",children:i})}),o.jsxs(Q,{gap:"4",hidden:!d,children:[o.jsxs(ze,{gap:"4",children:[o.jsx(Ue,{readOnly:a,name:`${zt(r)}.organisasjonsnummer`,label:u.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[x,k=>by(k.toString()),Fy],maxLength:99}),o.jsx(re,{name:`${zt(r)}.behovsdato`,label:u.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[x],isReadOnly:a})]}),o.jsx(et,{name:`${zt(r)}.${YT}`,readOnly:a})]})]}),o.jsx(ke.DataCell,{valign:"top",align:"right",children:o.jsx(We,{type:"button",variant:"tertiary-neutral",onClick:n,onKeyDown:n,icon:o.jsx(lt,{"aria-label":"Slett rad"})})})]})};fd.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const $T={organisasjonsnummer:"",behovsdato:""},JT=`${Le}.${Qa}`,Ad=({readOnly:e})=>{var d,g,u,k,m;const a=fe(),{control:r,formState:{errors:n}}=X(),{fields:t,append:s,remove:l}=sr({control:r,name:JT,rules:{required:a.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),i=()=>{s($T)};return c.useEffect(()=>{t.length===0&&i()},[]),o.jsxs(Q,{gap:"4",children:[o.jsxs(ke,{children:[o.jsx(ke.Header,{children:o.jsxs(ke.Row,{children:[o.jsx(ke.HeaderCell,{style:{width:"48px"}}),o.jsx(ke.HeaderCell,{children:o.jsx(G,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),o.jsx(ke.HeaderCell,{style:{width:"48px"}})]})}),o.jsx(ke.Body,{children:t.map((p,f)=>o.jsx(fd,{index:f,open:f+1===t.length,remove:()=>l(f),readOnly:e},p.id))})]}),((u=(g=(d=n[Le])==null?void 0:d[Qa])==null?void 0:g.root)==null?void 0:u.message)&&o.jsx(Br,{children:(m=(k=n[Le])==null?void 0:k[Qa].root)==null?void 0:m.message}),o.jsx("div",{children:o.jsx(We,{size:"small",variant:"tertiary",onClick:i,type:"button",icon:o.jsx(Ga,{"aria-hidden":!0}),children:o.jsx(G,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};Ad.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const WT=e=>{const a=[];return e!=null&&e.sokForArbeidsgiver&&(e!=null&&e.tilretteleggingForArbeidsgiver)&&a.push(...e.tilretteleggingForArbeidsgiver.map(r=>({"@type":"VI",behovsdato:r.behovsdato,organisasjonsnummer:r.organisasjonsnummer,tilrettelegginger:r.tilretteleggingArbeidsgiver}))),e!=null&&e.sokForFrilans&&a.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e!=null&&e.sokForSelvstendigNaringsdrivende&&a.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),a},Ia=ce(Ve),kl=({readOnly:e})=>{var d,g,u,k;const{watch:a,setError:r,clearErrors:n,formState:t}=X(),[s,l,i]=a([`${Le}.sokForSelvstendigNaringsdrivende`,`${Le}.sokForFrilans`,`${Le}.sokForArbeidsgiver`]);return c.useEffect(()=>{!s&&!l&&!i?r(`${Le}.notRegisteredInput`,{type:"custom",message:Ia.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):n(`${Le}.notRegisteredInput`)},[s,l,i]),o.jsx(tr,{value:Ia,children:o.jsx(Be,{children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),t.isSubmitted&&((g=(d=t.errors[Le])==null?void 0:d.notRegisteredInput)==null?void 0:g.message)&&o.jsx(Br,{children:(k=(u=t.errors[Le])==null?void 0:u.notRegisteredInput)==null?void 0:k.message}),o.jsx(we,{name:`${Le}.sokForSelvstendigNaringsdrivende`,label:o.jsx(G,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:e,trueContent:o.jsx(er,{marginTop:4,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"BehovForTilretteleggingPanel.TittelSN"})}),o.jsx(re,{name:`${Le}.behovsdatoSN`,label:Ia.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[x],isReadOnly:e}),o.jsx(et,{name:`${Le}.${BT}`,readOnly:e})]})})}),o.jsx(we,{name:`${Le}.sokForFrilans`,label:o.jsx(G,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:e,trueContent:o.jsx(er,{marginTop:4,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),o.jsx(re,{name:`${Le}.behovsdatoFrilans`,label:Ia.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[x],isReadOnly:e}),o.jsx(et,{name:`${Le}.${HT}`,readOnly:e})]})})}),o.jsx(we,{name:`${Le}.sokForArbeidsgiver`,label:o.jsx(G,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:e,trueContent:o.jsx(er,{marginTop:4,children:o.jsxs(Q,{gap:"4",children:[o.jsx(Oe,{size:"small",children:o.jsx(G,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),o.jsx(Ad,{readOnly:e})]})})})]})})})};kl.initialValues=()=>({[Le]:{}});kl.transformValues=({tilretteleggingArbeidsforhold:e})=>({[Le]:WT(e)});kl.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};export{Hs as A,rl as B,el as D,Nr as F,tc as H,Cs as I,sc as J,$s as L,Js as M,ic as N,Ws as O,il as P,Xs as R,oc as S,dl as T,Qs as V,ac as a,at as b,Zs as c,Bs as d,Ys as e,zs as f,nc as g,kl as h,ul as i,Ra as j,G as k,nn as l,x as m,lc as u};
