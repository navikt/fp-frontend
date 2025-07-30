import{r as A,u as Ae,_ as fi,s as Ri,c as Sd,j as l,P as ur,a as _d,b as Kd,R as v,m as Pd,d as it,S as Fa,e as ae,f as fs,g as Rs,h as ne,F as Dd,i as In,k as qn,v as Fi,l as Oi,n as Md,o as Vd,p as Bo,q as xa,t as Id,x as xo}from"./iframe-lMmQThvQ.js";import{u as Ir,c as wt,l as qd,d as jd,f as Ld,e as wd,R as Ho,g as Yo,h as Ud,i as Gd,j as Bd,o as xd,k as Hd,s as Yd,n as Cd,p as Oa,q as $d,M as Wd,B as Je,t as Hn,L as kr,v as Fs,b as Ze,w as Be,E as $r,x as Os,D as Na,y as Hr,z as Co,C as $o,F as Wo,G as Jo,I as Jd,J as zd,K as Ns,N as bs,P as hs,O as Xd,Q as zo,S as Ha,T as Ss,A as ot,V as X,W as Zd,r as ce,a as Qe,U as $e,X as yn,Y as Qd,Z as eu,_ as ru,$ as nu,H as Se,a0 as Ut}from"./nb_NO-BQouOlBI.js";function au(e,r){var n=e.values,a=fi(e,["values"]),t=r.values,s=fi(r,["values"]);return Ri(t,n)&&Ri(a,s)}function Xo(e){var r=Ae(),n=r.formatMessage,a=r.textComponent,t=a===void 0?A.Fragment:a,s=e.id,i=e.description,o=e.defaultMessage,d=e.values,g=e.children,u=e.tagName,k=u===void 0?t:u,m=e.ignoreTag,p={id:s,description:i,defaultMessage:o},c=n(p,d,{ignoreTag:m});return typeof g=="function"?g(Array.isArray(c)?c:[c]):k?A.createElement(k,null,c):A.createElement(A.Fragment,null,c)}Xo.displayName="FormattedMessage";var w=A.memo(Xo,au);w.displayName="MemoizedFormattedMessage";const XE=e=>{const r=Sd({locale:"nb-NO",messages:e},_d());return a=>l.jsx(ur,{value:r,children:a()})};var an=(e=>(e.FISKER="FISKER",e.ARBEIDSTAKER="ARBEIDSTAKER",e.SELVSTENDIG_NAERINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NAERINGSDRIVENDE="KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",e.SJOMANN="SJØMANN",e.JORDBRUKER="JORDBRUKER",e.DAGPENGER="DAGPENGER",e.INAKTIV="INAKTIV",e.KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER="KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",e.KOMBINASJON_ARBEIDSTAKER_OG_FISKER="KOMBINASJON_ARBEIDSTAKER_OG_FISKER",e.FRILANSER="FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER="KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",e.KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER="KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",e.DAGMAMMA="DAGMAMMA",e.ANNET="ANNET",e))(an||{}),ka=(e=>(e.LONN_UNDER_UTDANNING="LØNN_UNDER_UTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.FRILANSER="FRILANSER",e.MILITÆR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e))(ka||{}),_r=(e=>(e.ADOPSJON="ADPSJN",e.OMSORG="OMSRGO",e.FODSEL="FODSL",e.TERMIN="TERM",e))(_r||{}),lt=(e=>(e.MOR="MOR",e.FAR="FAR",e.MEDMOR="MEDMOR",e.MEDFAR="MEDFAR",e.TREDJE_PART="TREDJE_PART",e))(lt||{}),Ta=(e=>(e.UKJENT_FORELDER="UKJENT_FORELDER",e.IKKE_NORSK_FNR="IKKE_NORSK_FNR",e))(Ta||{}),dt=(e=>(e.NORGE="NOR",e.ARUBA="ABW",e))(dt||{}),Dr=(e=>(e.FISKE="FISKE",e.FRILANSER="FRILANSER",e.DAGMAMMA="DAGMAMMA",e.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",e.ANNEN="ANNEN",e))(Dr||{}),ga=(e=>(e.INGEN="INGEN",e.UTTAK_MØDREKVOTE_ANNEN_FORELDER="UTTAK_MØDREKVOTE_ANNEN_FORELDER",e.UTTAK_FEDREKVOTE_ANNEN_FORELDER="UTTAK_FEDREKVOTE_ANNEN_FORELDER",e.UTTAK_FELLESP_ANNEN_FORELDER="UTTAK_FELLESP_ANNEN_FORELDER",e.UTTAK_FORELDREPENGER_ANNEN_FORELDER="UTTAK_FORELDREPENGER_ANNEN_FORELDER",e.UDEFINERT="-",e))(ga||{}),ca=(e=>(e.INSTITUSJONSOPPHOLD_ANNEN_FORELDER="INSTITUSJONSOPPHOLD_ANNEN_FORELDER",e.SYKDOM_ANNEN_FORELDER="SYKDOM_ANNEN_FORELDER",e.ALENEOMSORG="ALENEOMSORG",e.IKKE_RETT_ANNEN_FORELDER="IKKE_RETT_ANNEN_FORELDER",e.UDEFINERT="-",e))(ca||{}),vn=(e=>(e.HEL_TILRETTELEGGING="HEL_TILRETTELEGGING",e.DELVIS_TILRETTELEGGING="DELVIS_TILRETTELEGGING",e.INGEN_TILRETTELEGGING="INGEN_TILRETTELEGGING",e))(vn||{}),Gr=(e=>(e.MODREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FELLESPERIODE="FELLESPERIODE",e.FORELDREPENGER_FOR_FODSEL="FORELDREPENGER_FØR_FØDSEL",e.FORELDREPENGER="FORELDREPENGER",e.UDEFINERT="-",e))(Gr||{});const tu=(e,r)=>{if(e==null)throw Error("Data er ikke oppgitt");return e},ZE={UttakUtsettelseType:[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],FagsakYtelseType:[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KonsekvensForYtelsen:[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],AktivitetskravPermisjonType:[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],AdresseType:[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],SivilstandType:[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],Inntektskategori:[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],SkjermlenkeType:[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],FaktaOmBeregningTilfelle:[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],VergeType:[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],KlageHjemmel:[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],ArbeidType:[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],FagsakMarkering:[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],Arbeidskategori:[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:[{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST. KITTS OG NEVIS"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"}],BehandlingType:[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],InnsynResultatType:[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],MedlemskapType:[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],PersonstatusType:[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],RelasjonsRolleType:[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],VirksomhetType:[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],MedlemskapDekningType:[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_2_F:[{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_33:[{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'}],SVP_VK_1:[{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'}],FP_VK_16:[{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],PermisjonsbeskrivelseType:[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],MedlemskapManuellVurderingType:[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],NaturalYtelseType:[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],PeriodeResultatÅrsak:[{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-13"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]}],ForeldreType:[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],OppgaveType:[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}]};function Zo(e,r=166,n=!1){let a;function t(...s){const i=()=>{a=void 0,e.apply(this,s)};!a&&n&&i(),clearTimeout(a),a=setTimeout(i,r)}return t.clear=()=>{clearTimeout(a)},t}const Bn=globalThis?.document?A.useLayoutEffect:()=>{};function fa(e,r=[]){const n=A.useRef(e);return A.useEffect(()=>{n.current=e}),A.useCallback((...a)=>{var t;return(t=n.current)===null||t===void 0?void 0:t.call(n,...a)},r)}function Ya({value:e,defaultValue:r,onChange:n}){const a=fa(n),[t,s]=A.useState(r),i=e!==void 0,o=i?e:t,d=fa(g=>{const k=typeof g=="function"?g(o):g;i||s(k),a(k)},[i,a,o]);return[o,d]}var su=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const iu=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=su(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var ou=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const lu=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=ou(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var du=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const uu=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=du(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var ku=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const ut=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=ku(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var gu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Qo=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=gu(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var vu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const mu=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=vu(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var pu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ca=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=pu(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var yu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Tu=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=yu(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var Eu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Au=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=Eu(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var cu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const kt=A.forwardRef((e,r)=>{var{title:n,titleId:a}=e,t=cu(e,["title","titleId"]);let s=Ir();return s=n?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},t),n?A.createElement("title",{id:s},n):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.5 6.25a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.876-11.384h.805a.75.75 0 0 0 0-1.5h-2.75V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25zm5.5-1.5c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm-3.19 3 .867 11.27c.01.13.118.23.249.23h8.148c.13 0 .24-.1.25-.23l.866-11.27zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))}),fu=typeof window<"u"&&window.matchMedia===void 0,Ru=(e,r)=>{const[n,a]=A.useState(r);return A.useEffect(()=>{if(fu)return;const t=window.matchMedia(e);a(t.matches);const s=i=>{a(i.matches)};return t.addEventListener("change",s),()=>{t.removeEventListener("change",s)}},[e]),n},el=6048e5,Fu=864e5,Ou=6e4,Nu=36e5,bu=1e3,Ni=Symbol.for("constructDateFrom");function ue(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Ni in e?e[Ni](r):e instanceof Date?new e.constructor(r):new Date(r)}function Yn(e,...r){const n=ue.bind(null,r.find(a=>typeof a=="object"));return r.map(n)}let hu={};function On(){return hu}function ee(e,r){return ue(r||e,e)}function Yr(e,r){const n=On(),a=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,t=ee(e,r?.in),s=t.getDay(),i=(s<a?7:0)+s-a;return t.setDate(t.getDate()-i),t.setHours(0,0,0,0),t}const Su={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_u={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ku={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Pu={date:wt({formats:Su,defaultWidth:"full"}),time:wt({formats:_u,defaultWidth:"full"}),dateTime:wt({formats:Ku,defaultWidth:"full"})},gt={code:"en-US",formatDistance:wd,formatLong:Pu,formatRelative:Ld,localize:qd,match:jd,options:{weekStartsOn:0,firstWeekContainsDate:1}};function bi(e){return e.sort((r,n)=>{const a=r.compareDocumentPosition(n);if(a&Node.DOCUMENT_POSITION_FOLLOWING||a&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(a&Node.DOCUMENT_POSITION_PRECEDING||a&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const Du=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function hi(e,r,n){let a=e+1;return n&&a>=r&&(a=0),a}function Si(e,r,n){let a=e-1;return n&&a<0&&(a=r),a}const Gt=e=>e;class Mu{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return Du(r)?this.registerNode(r):n=>{this.registerNode(n,r)}},this.unregister=r=>{this.descendants.delete(r);const n=bi(Array.from(this.descendants.keys()));this.assignIndex(n)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(n=>{const a=r.indexOf(n.node);n.index=a,n.node.dataset.index=n.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((n,a)=>n.index-a.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var n,a;return r&&(a=(n=this.descendants.get(r))===null||n===void 0?void 0:n.index)!==null&&a!==void 0?a:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(r)),this.next=(r,n=!0)=>{const a=hi(r,this.count(),n);return this.item(a)},this.nextEnabled=(r,n=!0)=>{const a=this.item(r);if(!a)return;const t=this.enabledIndexOf(a.node),s=hi(t,this.enabledCount(),n);return this.enabledItem(s)},this.prev=(r,n=!0)=>{const a=Si(r,this.count()-1,n);return this.item(a)},this.prevEnabled=(r,n=!0)=>{const a=this.item(r);if(!a)return;const t=this.enabledIndexOf(a.node),s=Si(t,this.enabledCount()-1,n);return this.enabledItem(s)},this.registerNode=(r,n)=>{if(!r)return;const a=this.descendants.get(r);if(a){this.descendants.set(r,Object.assign({index:a.index,node:r},n));return}const t=Array.from(this.descendants.keys()).concat(r),s=bi(t);n?.disabled&&(n.disabled=!!n.disabled);const i=Object.assign({node:r,index:-1},n);this.descendants.set(r,i),this.assignIndex(s)}}}function Vu(){const[e,r]=Kd({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),n=Gt(s=>v.createElement(e,Object.assign({},s.value),s.children));function a(s){const i=r(),[o,d]=A.useState(-1),g=A.useRef(null);Bn(()=>()=>{g.current&&i.unregister(g.current)},[]),Bn(()=>{if(!g.current)return;const k=Number(g.current.dataset.index);o!==k&&!Number.isNaN(k)&&d(k)});const u=Gt(s?i.register(s):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(g.current),register:Pd([u,g])}}function t(){return A.useRef(new Mu).current}return[n,r,t,a]}function Iu(e,r=globalThis?.document){const n=fa(e);A.useEffect(()=>{const a=t=>{t.key==="Escape"&&n(t)};return r.addEventListener("keydown",a,!0),()=>r.removeEventListener("keydown",a,!0)},[n,r])}const rl={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function nl(e,r,n,{discrete:a}={discrete:!1}){if(!r)return;const t=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t.addEventListener(e,r,{once:!0}),a&&t?Ho.flushSync(()=>t.dispatchEvent(s)):t.dispatchEvent(s)}function qu(e,r=globalThis?.document){const n=fa(e),a=A.useRef(!1);return A.useEffect(()=>{const t=s=>{if(s.target&&!a.current){const i={originalEvent:s};nl(rl.FOCUS_OUTSIDE,n,i)}};return r.addEventListener("focusin",t),()=>r.removeEventListener("focusin",t)},[r,n]),{onFocusCapture:()=>{a.current=!0},onBlurCapture:()=>{a.current=!1}}}function ju(e,r=globalThis?.document){const n=fa(e),a=A.useRef(!1),t=A.useRef(()=>{});return A.useEffect(()=>{const s=o=>{function d(){nl(rl.POINTER_DOWN_OUTSIDE,n,{originalEvent:o},{discrete:!0})}o.target&&!a.current?o.pointerType==="touch"?(r.removeEventListener("click",t.current),t.current=d,r.addEventListener("click",t.current,{once:!0})):d():r.removeEventListener("click",t.current),a.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",s),r.removeEventListener("click",t.current)}},[r,n]),{onPointerDownCapture:()=>{a.current=!0}}}var Lu=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const[wu,Uu,Gu,Bu]=Vu();let Kn=0,_i;const xu=A.forwardRef((e,r)=>Uu(!1)?v.createElement(Ki,Object.assign({ref:r},e)):v.createElement(Hu,null,v.createElement(Ki,Object.assign({ref:r},e)))),Hu=({children:e})=>{const r=Gu();return v.createElement(wu,{value:r},e)},Ki=A.forwardRef((e,r)=>{var n,{children:a,asChild:t,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:d,onDismiss:g,safeZone:u,disableOutsidePointerEvents:k=!1,enabled:m=!0}=e,p=Lu(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,c]=A.useState({}),{register:O,index:T,descendants:f}=Bu({disableOutsidePointerEvents:k,disabled:!m,forceUpdate:()=>c({})}),[R,F]=A.useState(null),h=it(F,O,r),y=(n=R?.ownerDocument)!==null&&n!==void 0?n:globalThis?.document,b=A.useRef(!1),S=A.useRef(!1),P=(()=>{let K=-1;return f.enabledValues().forEach((C,$)=>{C.disableOutsidePointerEvents&&(K=$)}),{isPointerEventsEnabled:T>=K,isBodyPointerEventsDisabled:Kn>0,pointerStyle:T>=K&&Kn>0?"auto":void 0}})();function M(K){var Y,C;if(!u?.anchor&&!u?.dismissable||!m)return;K.defaultPrevented||(b.current=!0,K.detail.originalEvent.type==="pointerdown"&&(S.current=!0));const $=K.target;K.detail.originalEvent.type==="pointerdown"?(!((Y=u?.anchor)===null||Y===void 0)&&Y.contains($)||$===u?.anchor)&&K.preventDefault():!($ instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(te=>te?.contains($))&&!$.contains((C=u?.dismissable)!==null&&C!==void 0?C:null))&&K.preventDefault(),K.detail.originalEvent.type==="focusin"&&S.current&&K.preventDefault(),S.current=!1,b.current=!1}const U=ju(K=>{!P.isPointerEventsEnabled||!m||(i?.(K),d?.(K),u&&M(K),!K.defaultPrevented&&g&&g())},y),j=qu(K=>{m&&(o?.(K),d?.(K),u&&M(K),!K.defaultPrevented&&g&&g())},y);Iu(K=>{!m||!(T===f.enabledCount()-1)||(s?.(K),!K.defaultPrevented&&g&&(K.preventDefault(),g()))},y),A.useEffect(()=>{if(!(!R||!m||!k))return Kn===0&&(_i=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),Kn++,()=>{Kn===1&&(y.body.style.pointerEvents=_i),Kn--}},[R,y,k,f,m]),A.useEffect(()=>()=>f.values().forEach(K=>K.forceUpdate()),[f,R]);const D=t?Fa:"div";return v.createElement(D,Object.assign({ref:h},p,{onFocusCapture:j.onFocusCapture,onBlurCapture:j.onBlurCapture,onPointerDownCapture:U.onPointerDownCapture,style:Object.assign({pointerEvents:P.pointerStyle},p.style)}),a)});function ba(e,r,n){const a=ee(e,n?.in);return isNaN(r)?ue(n?.in||e,NaN):(r&&a.setDate(a.getDate()+r),a)}function _s(e,r,n){const a=ee(e,n?.in);if(isNaN(r))return ue(e,NaN);if(!r)return a;const t=a.getDate(),s=ue(e,a.getTime());s.setMonth(a.getMonth()+r+1,0);const i=s.getDate();return t>=i?s:(a.setFullYear(s.getFullYear(),s.getMonth(),t),a)}function $a(e,r){const n=ee(e,r?.in).getDay();return n===0||n===6}function An(e,r){return Yr(e,{...r,weekStartsOn:1})}function al(e,r){const n=ee(e,r?.in),a=n.getFullYear(),t=ue(n,0);t.setFullYear(a+1,0,4),t.setHours(0,0,0,0);const s=An(t),i=ue(n,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const o=An(i);return n.getTime()>=s.getTime()?a+1:n.getTime()>=o.getTime()?a:a-1}function Wa(e){const r=ee(e),n=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return n.setUTCFullYear(r.getFullYear()),+e-+n}function Cr(e,r){const n=ee(e,r?.in);return n.setHours(0,0,0,0),n}function nn(e,r,n){const[a,t]=Yn(n?.in,e,r),s=Cr(a),i=Cr(t),o=+s-Wa(s),d=+i-Wa(i);return Math.round((o-d)/Fu)}function Yu(e,r){const n=al(e,r),a=ue(e,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),An(a)}function Cu(e,r,n){return ba(e,r*7,n)}function Ks(e,r,n){return _s(e,r*12,n)}function $u(e,r){let n,a=r?.in;return e.forEach(t=>{!a&&typeof t=="object"&&(a=ue.bind(null,t));const s=ee(t,a);(!n||n<s||isNaN(+s))&&(n=s)}),ue(a,n||NaN)}function Wu(e,r){let n,a=r?.in;return e.forEach(t=>{!a&&typeof t=="object"&&(a=ue.bind(null,t));const s=ee(t,a);(!n||n>s||isNaN(+s))&&(n=s)}),ue(a,n||NaN)}function Ps(e,r,n){const[a,t]=Yn(n?.in,e,r);return+Cr(a)==+Cr(t)}function tl(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ju(e){return!(!tl(e)&&typeof e!="number"||isNaN(+ee(e)))}function zu(e,r,n){const[a,t]=Yn(n?.in,e,r),s=a.getFullYear()-t.getFullYear(),i=a.getMonth()-t.getMonth();return s*12+i}function sl(e,r){const n=ee(e,r?.in),a=n.getMonth();return n.setFullYear(n.getFullYear(),a+1,0),n.setHours(23,59,59,999),n}function Xu(e,r){const[n,a]=Yn(e,r.start,r.end);return{start:n,end:a}}function il(e,r){const{start:n,end:a}=Xu(r?.in,e);let t=+n>+a;const s=t?+n:+a,i=t?a:n;i.setHours(0,0,0,0),i.setDate(1);let o=1;const d=[];for(;+i<=s;)d.push(ue(n,i)),i.setMonth(i.getMonth()+o);return t?d.reverse():d}function cn(e,r){const n=ee(e,r?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function vt(e,r){const n=ee(e,r?.in),a=n.getFullYear();return n.setFullYear(a+1,0,0),n.setHours(23,59,59,999),n}function ha(e,r){const n=ee(e,r?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ol(e,r){const n=On(),a=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,t=ee(e,r?.in),s=t.getDay(),i=(s<a?-7:0)+6-(s-a);return t.setDate(t.getDate()+i),t.setHours(23,59,59,999),t}function Zu(e,r){return ol(e,{...r,weekStartsOn:1})}function Qu(e,r){const n=ee(e,r?.in);return nn(n,ha(n))+1}function Ds(e,r){const n=ee(e,r?.in),a=+An(n)-+Yu(n);return Math.round(a/el)+1}function Ms(e,r){const n=ee(e,r?.in),a=n.getFullYear(),t=On(),s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,i=ue(r?.in||e,0);i.setFullYear(a+1,0,s),i.setHours(0,0,0,0);const o=Yr(i,r),d=ue(r?.in||e,0);d.setFullYear(a,0,s),d.setHours(0,0,0,0);const g=Yr(d,r);return+n>=+o?a+1:+n>=+g?a:a-1}function ek(e,r){const n=On(),a=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,t=Ms(e,r),s=ue(r?.in||e,0);return s.setFullYear(t,0,a),s.setHours(0,0,0,0),Yr(s,r)}function Vs(e,r){const n=ee(e,r?.in),a=+Yr(n,r)-+ek(n,r);return Math.round(a/el)+1}function le(e,r){const n=e<0?"-":"",a=Math.abs(e).toString().padStart(r,"0");return n+a}const en={y(e,r){const n=e.getFullYear(),a=n>0?n:1-n;return le(r==="yy"?a%100:a,r.length)},M(e,r){const n=e.getMonth();return r==="M"?String(n+1):le(n+1,2)},d(e,r){return le(e.getDate(),r.length)},a(e,r){const n=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,r){return le(e.getHours()%12||12,r.length)},H(e,r){return le(e.getHours(),r.length)},m(e,r){return le(e.getMinutes(),r.length)},s(e,r){return le(e.getSeconds(),r.length)},S(e,r){const n=r.length,a=e.getMilliseconds(),t=Math.trunc(a*Math.pow(10,n-3));return le(t,r.length)}},Pn={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Pi={G:function(e,r,n){const a=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,r,n){if(r==="yo"){const a=e.getFullYear(),t=a>0?a:1-a;return n.ordinalNumber(t,{unit:"year"})}return en.y(e,r)},Y:function(e,r,n,a){const t=Ms(e,a),s=t>0?t:1-t;if(r==="YY"){const i=s%100;return le(i,2)}return r==="Yo"?n.ordinalNumber(s,{unit:"year"}):le(s,r.length)},R:function(e,r){const n=al(e);return le(n,r.length)},u:function(e,r){const n=e.getFullYear();return le(n,r.length)},Q:function(e,r,n){const a=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(a);case"QQ":return le(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,r,n){const a=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(a);case"qq":return le(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,r,n){const a=e.getMonth();switch(r){case"M":case"MM":return en.M(e,r);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,r,n){const a=e.getMonth();switch(r){case"L":return String(a+1);case"LL":return le(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,r,n,a){const t=Vs(e,a);return r==="wo"?n.ordinalNumber(t,{unit:"week"}):le(t,r.length)},I:function(e,r,n){const a=Ds(e);return r==="Io"?n.ordinalNumber(a,{unit:"week"}):le(a,r.length)},d:function(e,r,n){return r==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):en.d(e,r)},D:function(e,r,n){const a=Qu(e);return r==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):le(a,r.length)},E:function(e,r,n){const a=e.getDay();switch(r){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,r,n,a){const t=e.getDay(),s=(t-a.weekStartsOn+8)%7||7;switch(r){case"e":return String(s);case"ee":return le(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})}},c:function(e,r,n,a){const t=e.getDay(),s=(t-a.weekStartsOn+8)%7||7;switch(r){case"c":return String(s);case"cc":return le(s,r.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})}},i:function(e,r,n){const a=e.getDay(),t=a===0?7:a;switch(r){case"i":return String(t);case"ii":return le(t,r.length);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,r,n){const t=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})}},b:function(e,r,n){const a=e.getHours();let t;switch(a===12?t=Pn.noon:a===0?t=Pn.midnight:t=a/12>=1?"pm":"am",r){case"b":case"bb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})}},B:function(e,r,n){const a=e.getHours();let t;switch(a>=17?t=Pn.evening:a>=12?t=Pn.afternoon:a>=4?t=Pn.morning:t=Pn.night,r){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})}},h:function(e,r,n){if(r==="ho"){let a=e.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return en.h(e,r)},H:function(e,r,n){return r==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):en.H(e,r)},K:function(e,r,n){const a=e.getHours()%12;return r==="Ko"?n.ordinalNumber(a,{unit:"hour"}):le(a,r.length)},k:function(e,r,n){let a=e.getHours();return a===0&&(a=24),r==="ko"?n.ordinalNumber(a,{unit:"hour"}):le(a,r.length)},m:function(e,r,n){return r==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):en.m(e,r)},s:function(e,r,n){return r==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):en.s(e,r)},S:function(e,r){return en.S(e,r)},X:function(e,r,n){const a=e.getTimezoneOffset();if(a===0)return"Z";switch(r){case"X":return Mi(a);case"XXXX":case"XX":return mn(a);case"XXXXX":case"XXX":default:return mn(a,":")}},x:function(e,r,n){const a=e.getTimezoneOffset();switch(r){case"x":return Mi(a);case"xxxx":case"xx":return mn(a);case"xxxxx":case"xxx":default:return mn(a,":")}},O:function(e,r,n){const a=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Di(a,":");case"OOOO":default:return"GMT"+mn(a,":")}},z:function(e,r,n){const a=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Di(a,":");case"zzzz":default:return"GMT"+mn(a,":")}},t:function(e,r,n){const a=Math.trunc(+e/1e3);return le(a,r.length)},T:function(e,r,n){return le(+e,r.length)}};function Di(e,r=""){const n=e>0?"-":"+",a=Math.abs(e),t=Math.trunc(a/60),s=a%60;return s===0?n+String(t):n+String(t)+r+le(s,2)}function Mi(e,r){return e%60===0?(e>0?"-":"+")+le(Math.abs(e)/60,2):mn(e,r)}function mn(e,r=""){const n=e>0?"-":"+",a=Math.abs(e),t=le(Math.trunc(a/60),2),s=le(a%60,2);return n+t+r+s}const Vi=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},ll=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},rk=(e,r)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],t=n[2];if(!t)return Vi(e,r);let s;switch(a){case"P":s=r.dateTime({width:"short"});break;case"PP":s=r.dateTime({width:"medium"});break;case"PPP":s=r.dateTime({width:"long"});break;case"PPPP":default:s=r.dateTime({width:"full"});break}return s.replace("{{date}}",Vi(a,r)).replace("{{time}}",ll(t,r))},ls={p:ll,P:rk},nk=/^D+$/,ak=/^Y+$/,tk=["D","DD","YY","YYYY"];function dl(e){return nk.test(e)}function ul(e){return ak.test(e)}function ds(e,r,n){const a=sk(e,r,n);if(console.warn(a),tk.includes(e))throw new RangeError(a)}function sk(e,r,n){const a=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ik=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ok=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lk=/^'([^]*?)'?$/,dk=/''/g,uk=/[a-zA-Z]/;function fn(e,r,n){const a=On(),t=n?.locale??a.locale??gt,s=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,o=ee(e,n?.in);if(!Ju(o))throw new RangeError("Invalid time value");let d=r.match(ok).map(u=>{const k=u[0];if(k==="p"||k==="P"){const m=ls[k];return m(u,t.formatLong)}return u}).join("").match(ik).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const k=u[0];if(k==="'")return{isToken:!1,value:kk(u)};if(Pi[k])return{isToken:!0,value:u};if(k.match(uk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:u}});t.localize.preprocessor&&(d=t.localize.preprocessor(o,d));const g={firstWeekContainsDate:s,weekStartsOn:i,locale:t};return d.map(u=>{if(!u.isToken)return u.value;const k=u.value;(!n?.useAdditionalWeekYearTokens&&ul(k)||!n?.useAdditionalDayOfYearTokens&&dl(k))&&ds(k,r,String(e));const m=Pi[k[0]];return m(o,k,t.localize,g)}).join("")}function kk(e){const r=e.match(lk);return r?r[1].replace(dk,"'"):e}function gk(e,r){const n=ee(e,r?.in),a=n.getFullYear(),t=n.getMonth(),s=ue(n,0);return s.setFullYear(a,t+1,0),s.setHours(0,0,0,0),s.getDate()}function vk(){return Object.assign({},On())}function mk(e,r){const n=ee(e,r?.in).getDay();return n===0?7:n}function Is(e,r){return ee(e,r?.in).getMonth()}function qs(e,r){return ee(e,r?.in).getFullYear()}function kl(e,r){return+ee(e)>+ee(r)}function Sa(e,r){return+ee(e)<+ee(r)}function pk(e,r){const n=yk(r)?new r(0):ue(r,0);return n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),n.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),n}function yk(e){return typeof e=="function"&&e.prototype?.constructor===e}const Tk=10;class gl{subPriority=0;validate(r,n){return!0}}class Ek extends gl{constructor(r,n,a,t,s){super(),this.value=r,this.validateValue=n,this.setValue=a,this.priority=t,s&&(this.subPriority=s)}validate(r,n){return this.validateValue(r,this.value,n)}set(r,n,a){return this.setValue(r,n,this.value,a)}}class Ak extends gl{priority=Tk;subPriority=-1;constructor(r,n){super(),this.context=r||(a=>ue(n,a))}set(r,n){return n.timestampIsSet?r:ue(r,pk(r,this.context))}}class ie{run(r,n,a,t){const s=this.parse(r,n,a,t);return s?{setter:new Ek(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(r,n,a){return!0}}class ck extends ie{priority=140;parse(r,n,a){switch(n){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})||a.era(r,{width:"abbreviated"})||a.era(r,{width:"narrow"})}}set(r,n,a){return n.era=a,r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["R","u","t","T"]}const _e={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Kr={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ke(e,r){return e&&{value:r(e.value),rest:e.rest}}function Fe(e,r){const n=r.match(e);return n?{value:parseInt(n[0],10),rest:r.slice(n[0].length)}:null}function Pr(e,r){const n=r.match(e);if(!n)return null;if(n[0]==="Z")return{value:0,rest:r.slice(1)};const a=n[1]==="+"?1:-1,t=n[2]?parseInt(n[2],10):0,s=n[3]?parseInt(n[3],10):0,i=n[5]?parseInt(n[5],10):0;return{value:a*(t*Nu+s*Ou+i*bu),rest:r.slice(n[0].length)}}function vl(e){return Fe(_e.anyDigitsSigned,e)}function Oe(e,r){switch(e){case 1:return Fe(_e.singleDigit,r);case 2:return Fe(_e.twoDigits,r);case 3:return Fe(_e.threeDigits,r);case 4:return Fe(_e.fourDigits,r);default:return Fe(new RegExp("^\\d{1,"+e+"}"),r)}}function Ja(e,r){switch(e){case 1:return Fe(_e.singleDigitSigned,r);case 2:return Fe(_e.twoDigitsSigned,r);case 3:return Fe(_e.threeDigitsSigned,r);case 4:return Fe(_e.fourDigitsSigned,r);default:return Fe(new RegExp("^-?\\d{1,"+e+"}"),r)}}function js(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function ml(e,r){const n=r>0,a=n?r:1-r;let t;if(a<=50)t=e||100;else{const s=a+50,i=Math.trunc(s/100)*100,o=e>=s%100;t=e+i-(o?100:0)}return n?t:1-t}function pl(e){return e%400===0||e%4===0&&e%100!==0}class fk extends ie{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(r,n,a){const t=s=>({year:s,isTwoDigitYear:n==="yy"});switch(n){case"y":return Ke(Oe(4,r),t);case"yo":return Ke(a.ordinalNumber(r,{unit:"year"}),t);default:return Ke(Oe(n.length,r),t)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a){const t=r.getFullYear();if(a.isTwoDigitYear){const i=ml(a.year,t);return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}const s=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}class Rk extends ie{priority=130;parse(r,n,a){const t=s=>({year:s,isTwoDigitYear:n==="YY"});switch(n){case"Y":return Ke(Oe(4,r),t);case"Yo":return Ke(a.ordinalNumber(r,{unit:"year"}),t);default:return Ke(Oe(n.length,r),t)}}validate(r,n){return n.isTwoDigitYear||n.year>0}set(r,n,a,t){const s=Ms(r,t);if(a.isTwoDigitYear){const o=ml(a.year,s);return r.setFullYear(o,0,t.firstWeekContainsDate),r.setHours(0,0,0,0),Yr(r,t)}const i=!("era"in n)||n.era===1?a.year:1-a.year;return r.setFullYear(i,0,t.firstWeekContainsDate),r.setHours(0,0,0,0),Yr(r,t)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class Fk extends ie{priority=130;parse(r,n){return Ja(n==="R"?4:n.length,r)}set(r,n,a){const t=ue(r,0);return t.setFullYear(a,0,4),t.setHours(0,0,0,0),An(t)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class Ok extends ie{priority=130;parse(r,n){return Ja(n==="u"?4:n.length,r)}set(r,n,a){return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class Nk extends ie{priority=120;parse(r,n,a){switch(n){case"Q":case"QQ":return Oe(n.length,r);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})||a.quarter(r,{width:"abbreviated",context:"formatting"})||a.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class bk extends ie{priority=120;parse(r,n,a){switch(n){case"q":case"qq":return Oe(n.length,r);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})||a.quarter(r,{width:"abbreviated",context:"standalone"})||a.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=1&&n<=4}set(r,n,a){return r.setMonth((a-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class hk extends ie{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(r,n,a){const t=s=>s-1;switch(n){case"M":return Ke(Fe(_e.month,r),t);case"MM":return Ke(Oe(2,r),t);case"Mo":return Ke(a.ordinalNumber(r,{unit:"month"}),t);case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})||a.month(r,{width:"abbreviated",context:"formatting"})||a.month(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}}class Sk extends ie{priority=110;parse(r,n,a){const t=s=>s-1;switch(n){case"L":return Ke(Fe(_e.month,r),t);case"LL":return Ke(Oe(2,r),t);case"Lo":return Ke(a.ordinalNumber(r,{unit:"month"}),t);case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})||a.month(r,{width:"abbreviated",context:"standalone"})||a.month(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.setMonth(a,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function _k(e,r,n){const a=ee(e,n?.in),t=Vs(a,n)-r;return a.setDate(a.getDate()-t*7),ee(a,n?.in)}class Kk extends ie{priority=100;parse(r,n,a){switch(n){case"w":return Fe(_e.week,r);case"wo":return a.ordinalNumber(r,{unit:"week"});default:return Oe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a,t){return Yr(_k(r,a,t),t)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function Pk(e,r,n){const a=ee(e,n?.in),t=Ds(a,n)-r;return a.setDate(a.getDate()-t*7),a}class Dk extends ie{priority=100;parse(r,n,a){switch(n){case"I":return Fe(_e.week,r);case"Io":return a.ordinalNumber(r,{unit:"week"});default:return Oe(n.length,r)}}validate(r,n){return n>=1&&n<=53}set(r,n,a){return An(Pk(r,a))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const Mk=[31,28,31,30,31,30,31,31,30,31,30,31],Vk=[31,29,31,30,31,30,31,31,30,31,30,31];class Ik extends ie{priority=90;subPriority=1;parse(r,n,a){switch(n){case"d":return Fe(_e.date,r);case"do":return a.ordinalNumber(r,{unit:"date"});default:return Oe(n.length,r)}}validate(r,n){const a=r.getFullYear(),t=pl(a),s=r.getMonth();return t?n>=1&&n<=Vk[s]:n>=1&&n<=Mk[s]}set(r,n,a){return r.setDate(a),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class qk extends ie{priority=90;subpriority=1;parse(r,n,a){switch(n){case"D":case"DD":return Fe(_e.dayOfYear,r);case"Do":return a.ordinalNumber(r,{unit:"date"});default:return Oe(n.length,r)}}validate(r,n){const a=r.getFullYear();return pl(a)?n>=1&&n<=366:n>=1&&n<=365}set(r,n,a){return r.setMonth(0,a),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function Ls(e,r,n){const a=On(),t=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=ee(e,n?.in),i=s.getDay(),d=(r%7+7)%7,g=7-t,u=r<0||r>6?r-(i+g)%7:(d+g)%7-(i+g)%7;return ba(s,u,n)}class jk extends ie{priority=90;parse(r,n,a){switch(n){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,t){return r=Ls(r,a,t),r.setHours(0,0,0,0),r}incompatibleTokens=["D","i","e","c","t","T"]}class Lk extends ie{priority=90;parse(r,n,a,t){const s=i=>{const o=Math.floor((i-1)/7)*7;return(i+t.weekStartsOn+6)%7+o};switch(n){case"e":case"ee":return Ke(Oe(n.length,r),s);case"eo":return Ke(a.ordinalNumber(r,{unit:"day"}),s);case"eee":return a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,t){return r=Ls(r,a,t),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class wk extends ie{priority=90;parse(r,n,a,t){const s=i=>{const o=Math.floor((i-1)/7)*7;return(i+t.weekStartsOn+6)%7+o};switch(n){case"c":case"cc":return Ke(Oe(n.length,r),s);case"co":return Ke(a.ordinalNumber(r,{unit:"day"}),s);case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})||a.day(r,{width:"abbreviated",context:"standalone"})||a.day(r,{width:"short",context:"standalone"})||a.day(r,{width:"narrow",context:"standalone"})}}validate(r,n){return n>=0&&n<=6}set(r,n,a,t){return r=Ls(r,a,t),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function Uk(e,r,n){const a=ee(e,n?.in),t=mk(a,n),s=r-t;return ba(a,s,n)}class Gk extends ie{priority=90;parse(r,n,a){const t=s=>s===0?7:s;switch(n){case"i":case"ii":return Oe(n.length,r);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return Ke(a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),t);case"iiiii":return Ke(a.day(r,{width:"narrow",context:"formatting"}),t);case"iiiiii":return Ke(a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),t);case"iiii":default:return Ke(a.day(r,{width:"wide",context:"formatting"})||a.day(r,{width:"abbreviated",context:"formatting"})||a.day(r,{width:"short",context:"formatting"})||a.day(r,{width:"narrow",context:"formatting"}),t)}}validate(r,n){return n>=1&&n<=7}set(r,n,a){return r=Uk(r,a),r.setHours(0,0,0,0),r}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class Bk extends ie{priority=80;parse(r,n,a){switch(n){case"a":case"aa":case"aaa":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(js(a),0,0,0),r}incompatibleTokens=["b","B","H","k","t","T"]}class xk extends ie{priority=80;parse(r,n,a){switch(n){case"b":case"bb":case"bbb":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(js(a),0,0,0),r}incompatibleTokens=["a","B","H","k","t","T"]}class Hk extends ie{priority=80;parse(r,n,a){switch(n){case"B":case"BB":case"BBB":return a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(r,{width:"wide",context:"formatting"})||a.dayPeriod(r,{width:"abbreviated",context:"formatting"})||a.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,n,a){return r.setHours(js(a),0,0,0),r}incompatibleTokens=["a","b","t","T"]}class Yk extends ie{priority=70;parse(r,n,a){switch(n){case"h":return Fe(_e.hour12h,r);case"ho":return a.ordinalNumber(r,{unit:"hour"});default:return Oe(n.length,r)}}validate(r,n){return n>=1&&n<=12}set(r,n,a){const t=r.getHours()>=12;return t&&a<12?r.setHours(a+12,0,0,0):!t&&a===12?r.setHours(0,0,0,0):r.setHours(a,0,0,0),r}incompatibleTokens=["H","K","k","t","T"]}class Ck extends ie{priority=70;parse(r,n,a){switch(n){case"H":return Fe(_e.hour23h,r);case"Ho":return a.ordinalNumber(r,{unit:"hour"});default:return Oe(n.length,r)}}validate(r,n){return n>=0&&n<=23}set(r,n,a){return r.setHours(a,0,0,0),r}incompatibleTokens=["a","b","h","K","k","t","T"]}class $k extends ie{priority=70;parse(r,n,a){switch(n){case"K":return Fe(_e.hour11h,r);case"Ko":return a.ordinalNumber(r,{unit:"hour"});default:return Oe(n.length,r)}}validate(r,n){return n>=0&&n<=11}set(r,n,a){return r.getHours()>=12&&a<12?r.setHours(a+12,0,0,0):r.setHours(a,0,0,0),r}incompatibleTokens=["h","H","k","t","T"]}class Wk extends ie{priority=70;parse(r,n,a){switch(n){case"k":return Fe(_e.hour24h,r);case"ko":return a.ordinalNumber(r,{unit:"hour"});default:return Oe(n.length,r)}}validate(r,n){return n>=1&&n<=24}set(r,n,a){const t=a<=24?a%24:a;return r.setHours(t,0,0,0),r}incompatibleTokens=["a","b","h","H","K","t","T"]}class Jk extends ie{priority=60;parse(r,n,a){switch(n){case"m":return Fe(_e.minute,r);case"mo":return a.ordinalNumber(r,{unit:"minute"});default:return Oe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setMinutes(a,0,0),r}incompatibleTokens=["t","T"]}class zk extends ie{priority=50;parse(r,n,a){switch(n){case"s":return Fe(_e.second,r);case"so":return a.ordinalNumber(r,{unit:"second"});default:return Oe(n.length,r)}}validate(r,n){return n>=0&&n<=59}set(r,n,a){return r.setSeconds(a,0),r}incompatibleTokens=["t","T"]}class Xk extends ie{priority=30;parse(r,n){const a=t=>Math.trunc(t*Math.pow(10,-n.length+3));return Ke(Oe(n.length,r),a)}set(r,n,a){return r.setMilliseconds(a),r}incompatibleTokens=["t","T"]}class Zk extends ie{priority=10;parse(r,n){switch(n){case"X":return Pr(Kr.basicOptionalMinutes,r);case"XX":return Pr(Kr.basic,r);case"XXXX":return Pr(Kr.basicOptionalSeconds,r);case"XXXXX":return Pr(Kr.extendedOptionalSeconds,r);case"XXX":default:return Pr(Kr.extended,r)}}set(r,n,a){return n.timestampIsSet?r:ue(r,r.getTime()-Wa(r)-a)}incompatibleTokens=["t","T","x"]}class Qk extends ie{priority=10;parse(r,n){switch(n){case"x":return Pr(Kr.basicOptionalMinutes,r);case"xx":return Pr(Kr.basic,r);case"xxxx":return Pr(Kr.basicOptionalSeconds,r);case"xxxxx":return Pr(Kr.extendedOptionalSeconds,r);case"xxx":default:return Pr(Kr.extended,r)}}set(r,n,a){return n.timestampIsSet?r:ue(r,r.getTime()-Wa(r)-a)}incompatibleTokens=["t","T","X"]}class eg extends ie{priority=40;parse(r){return vl(r)}set(r,n,a){return[ue(r,a*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class rg extends ie{priority=20;parse(r){return vl(r)}set(r,n,a){return[ue(r,a),{timestampIsSet:!0}]}incompatibleTokens="*"}const ng={G:new ck,y:new fk,Y:new Rk,R:new Fk,u:new Ok,Q:new Nk,q:new bk,M:new hk,L:new Sk,w:new Kk,I:new Dk,d:new Ik,D:new qk,E:new jk,e:new Lk,c:new wk,i:new Gk,a:new Bk,b:new xk,B:new Hk,h:new Yk,H:new Ck,K:new $k,k:new Wk,m:new Jk,s:new zk,S:new Xk,X:new Zk,x:new Qk,t:new eg,T:new rg},ag=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tg=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sg=/^'([^]*?)'?$/,ig=/''/g,og=/\S/,lg=/[a-zA-Z]/;function wn(e,r,n,a){const t=()=>ue(a?.in||n,NaN),s=vk(),i=a?.locale??s.locale??gt,o=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,d=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0;if(!r)return e?t():ee(n,a?.in);const g={firstWeekContainsDate:o,weekStartsOn:d,locale:i},u=[new Ak(a?.in,n)],k=r.match(tg).map(T=>{const f=T[0];if(f in ls){const R=ls[f];return R(T,i.formatLong)}return T}).join("").match(ag),m=[];for(let T of k){!a?.useAdditionalWeekYearTokens&&ul(T)&&ds(T,r,e),!a?.useAdditionalDayOfYearTokens&&dl(T)&&ds(T,r,e);const f=T[0],R=ng[f];if(R){const{incompatibleTokens:F}=R;if(Array.isArray(F)){const y=m.find(b=>F.includes(b.token)||b.token===f);if(y)throw new RangeError(`The format string mustn't contain \`${y.fullToken}\` and \`${T}\` at the same time`)}else if(R.incompatibleTokens==="*"&&m.length>0)throw new RangeError(`The format string mustn't contain \`${T}\` and any other token at the same time`);m.push({token:f,fullToken:T});const h=R.run(e,T,i.match,g);if(!h)return t();u.push(h.setter),e=h.rest}else{if(f.match(lg))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");if(T==="''"?T="'":f==="'"&&(T=dg(T)),e.indexOf(T)===0)e=e.slice(T.length);else return t()}}if(e.length>0&&og.test(e))return t();const p=u.map(T=>T.priority).sort((T,f)=>f-T).filter((T,f,R)=>R.indexOf(T)===f).map(T=>u.filter(f=>f.priority===T).sort((f,R)=>R.subPriority-f.subPriority)).map(T=>T[0]);let c=ee(n,a?.in);if(isNaN(+c))return t();const O={};for(const T of p){if(!T.validate(c,g))return t();const f=T.set(c,O,g);Array.isArray(f)?(c=f[0],Object.assign(O,f[1])):c=f}return c}function dg(e){return e.match(sg)[1].replace(ig,"'")}function ug(e,r,n){const[a,t]=Yn(n?.in,e,r);return a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()}function yl(e,r,n){const[a,t]=Yn(n?.in,e,r);return a.getFullYear()===t.getFullYear()}function kg(e,r,n){return ba(e,-r,n)}function Tl(e,r,n){const a=ee(e,n?.in),t=a.getFullYear(),s=a.getDate(),i=ue(e,0);i.setFullYear(t,r,15),i.setHours(0,0,0,0);const o=gk(i);return a.setMonth(r,Math.min(s,o)),a}function El(e,r,n){const a=ee(e,n?.in);return isNaN(+a)?ue(e,NaN):(a.setFullYear(r),a)}function gg(e,r,n){return _s(e,-r,n)}function vg(e,r,n){const{years:a=0,months:t=0,weeks:s=0,days:i=0,hours:o=0,minutes:d=0,seconds:g=0}=r,u=gg(e,t+a*12,n),k=kg(u,i+s*7,n),m=d+o*60,c=(g+m*60)*1e3;return ue(e,+k-c)}var mg=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const pg=A.forwardRef((e,r)=>{var{className:n}=e,a=mg(e,["className"]);const{cn:t}=ae();return v.createElement("div",Object.assign({},a,{ref:r,className:t("navds-popover__content",n)}))});var yg=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Al=A.forwardRef((e,r)=>{var{className:n,children:a,anchorEl:t,arrow:s=!0,open:i,onClose:o,placement:d="top",offset:g,strategy:u,flip:k=!0}=e,m=yg(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:p}=ae(),c=A.useRef(null),O=Yo(!1)!==void 0,T=Ud(!1),f=u??(O?"fixed":"absolute"),R=T?!1:k,F=fs(!1),{update:h,refs:y,placement:b,middlewareData:{arrow:{x:S,y:P}={}},floatingStyles:M}=Gd({strategy:f,placement:d,open:i,middleware:[xd(g??(F?8:s?16:4)),R&&Hd({padding:5,fallbackPlacements:["bottom","top"]}),Yd({padding:12}),Cd({element:c,padding:8})]});Bn(()=>{y.setReference(t)},[t]);const U=it(y.setFloating,r);Bn(()=>{if(!y.reference.current||!y.floating.current||!i)return;const D=Bd(y.reference.current,y.floating.current,h);return()=>D()},[y.floating,y.reference,h,i,t]);const j={top:"bottom",right:"left",bottom:"top",left:"right"}[b.split("-")[0]];return v.createElement(xu,{asChild:!0,safeZone:{anchor:t,dismissable:y.floating.current},onDismiss:()=>i&&o?.(),enabled:i},v.createElement("div",Object.assign({ref:U},m,{className:p("navds-popover",n,{"navds-popover--hidden":!i||!t}),style:Object.assign(Object.assign({},m.style),M),"data-placement":b,"aria-hidden":!i||!t}),a,s&&!F&&v.createElement("div",{ref:D=>{c.current=D},style:Object.assign(Object.assign(Object.assign({},S!=null?{left:S}:{}),P!=null?{top:P}:{}),j?{[j]:"-0.5rem"}:{}),className:p("navds-popover__arrow")})))});Al.Content=pg;const Tg={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},Eg=({open:e,children:r,onClose:n,anchor:a,locale:t,translate:s,variant:i,popoverProps:o})=>{const d=Oa("global",$d(t)),{cn:g}=ae(),u=A.useRef(null),k=Yo(!1)!==void 0;return Ru("screen and (min-width: 768px)",!0)&&!k?v.createElement(Al,Object.assign({arrow:!1,anchorEl:a,open:e,onClose:n,placement:"bottom-start",role:"dialog",className:g("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),r):v.createElement(Wd,{ref:u,open:e,onClose:p=>{p.stopPropagation(),n()},"aria-label":s(Tg[i]),className:g("navds-date__modal",{"navds-date__nested-modal":k,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},v.createElement("div",{className:g("navds-date__modal-body")},r,v.createElement(Je,{variant:"tertiary",onClick:()=>{var p;return(p=u?.current)===null||p===void 0?void 0:p.close()},size:"small",type:"button"},d("close"))))};function cl(e){return!!(e&&typeof e=="object"&&"from"in e)}const Ag={},va={};function Ea(e,r){try{const a=(Ag[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(r).split("GMT")[1]||"";return a in va?va[a]:Ii(a,a.split(":"))}catch{if(e in va)return va[e];const n=e?.match(cg);return n?Ii(e,n.slice(1)):NaN}}const cg=/([+-]\d\d):?(\d\d)?/;function Ii(e,r){const n=+r[0],a=+(r[1]||0);return va[e]=n>0?n*60+a:n*60-a}class Mr extends Date{constructor(...r){super(),r.length>1&&typeof r[r.length-1]=="string"&&(this.timeZone=r.pop()),this.internal=new Date,isNaN(Ea(this.timeZone,this))?this.setTime(NaN):r.length?typeof r[0]=="number"&&(r.length===1||r.length===2&&typeof r[1]!="number")?this.setTime(r[0]):typeof r[0]=="string"?this.setTime(+new Date(r[0])):r[0]instanceof Date?this.setTime(+r[0]):(this.setTime(+new Date(...r)),fl(this),us(this)):this.setTime(Date.now())}static tz(r,...n){return n.length?new Mr(...n,r):new Mr(Date.now(),r)}withTimeZone(r){return new Mr(+this,r)}getTimezoneOffset(){return-Ea(this.timeZone,this)}setTime(r){return Date.prototype.setTime.apply(this,arguments),us(this),+this}[Symbol.for("constructDateFrom")](r){return new Mr(+new Date(r),this.timeZone)}}const qi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!qi.test(e))return;const r=e.replace(qi,"$1UTC");Mr.prototype[r]&&(e.startsWith("get")?Mr.prototype[e]=function(){return this.internal[r]()}:(Mr.prototype[e]=function(){return Date.prototype[r].apply(this.internal,arguments),fg(this),+this},Mr.prototype[r]=function(){return Date.prototype[r].apply(this,arguments),us(this),+this}))});function us(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function fg(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),fl(e)}function fl(e){const r=Ea(e.timeZone,e),n=new Date(+e);n.setUTCHours(n.getUTCHours()-1);const a=-new Date(+e).getTimezoneOffset(),t=-new Date(+n).getTimezoneOffset(),s=a-t,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const o=a-r;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const d=Ea(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-d,k=d!==r,m=u-o;if(k&&m){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+m);const p=Ea(e.timeZone,e),c=d-p;c&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+c),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c))}}class Ye extends Mr{static tz(r,...n){return n.length?new Ye(...n,r):new Ye(Date.now(),r)}toISOString(){const[r,n,a]=this.tzComponents(),t=`${r}${n}:${a}`;return this.internal.toISOString().slice(0,-1)+t}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[r,n,a,t]=this.internal.toUTCString().split(" ");return`${r?.slice(0,-1)} ${a} ${n} ${t}`}toTimeString(){const r=this.internal.toUTCString().split(" ")[4],[n,a,t]=this.tzComponents();return`${r} GMT${n}${a}${t} (${Rg(this.timeZone,this)})`}toLocaleString(r,n){return Date.prototype.toLocaleString.call(this,r,{...n,timeZone:n?.timeZone||this.timeZone})}toLocaleDateString(r,n){return Date.prototype.toLocaleDateString.call(this,r,{...n,timeZone:n?.timeZone||this.timeZone})}toLocaleTimeString(r,n){return Date.prototype.toLocaleTimeString.call(this,r,{...n,timeZone:n?.timeZone||this.timeZone})}tzComponents(){const r=this.getTimezoneOffset(),n=r>0?"-":"+",a=String(Math.floor(Math.abs(r)/60)).padStart(2,"0"),t=String(Math.abs(r)%60).padStart(2,"0");return[n,a,t]}withTimeZone(r){return new Ye(+this,r)}[Symbol.for("constructDateFrom")](r){return new Ye(+new Date(r),this.timeZone)}}function Rg(e,r){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(r).slice(12)}var x;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(x||(x={}));var Re;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Re||(Re={}));var Ar;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Ar||(Ar={}));var or;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(or||(or={}));const ji=5,Fg=4;function Og(e,r){const n=r.startOfMonth(e),a=n.getDay()>0?n.getDay():7,t=r.addDays(e,-a+1),s=r.addDays(t,ji*7-1);return r.getMonth(e)===r.getMonth(s)?ji:Fg}function Rl(e,r){const n=r.startOfMonth(e),a=n.getDay();return a===1?n:a===0?r.addDays(n,-1*6):r.addDays(n,-1*(a-1))}function Ng(e,r){const n=Rl(e,r),a=Og(e,r);return r.addDays(n,a*7-1)}class Wr{constructor(r,n){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Ye.tz(this.options.timeZone):new this.Date,this.newDate=(a,t,s)=>this.overrides?.newDate?this.overrides.newDate(a,t,s):this.options.timeZone?new Ye(a,t,s,this.options.timeZone):new Date(a,t,s),this.addDays=(a,t)=>this.overrides?.addDays?this.overrides.addDays(a,t):ba(a,t),this.addMonths=(a,t)=>this.overrides?.addMonths?this.overrides.addMonths(a,t):_s(a,t),this.addWeeks=(a,t)=>this.overrides?.addWeeks?this.overrides.addWeeks(a,t):Cu(a,t),this.addYears=(a,t)=>this.overrides?.addYears?this.overrides.addYears(a,t):Ks(a,t),this.differenceInCalendarDays=(a,t)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(a,t):nn(a,t),this.differenceInCalendarMonths=(a,t)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(a,t):zu(a,t),this.eachMonthOfInterval=a=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(a):il(a),this.endOfBroadcastWeek=a=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(a):Ng(a,this),this.endOfISOWeek=a=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(a):Zu(a),this.endOfMonth=a=>this.overrides?.endOfMonth?this.overrides.endOfMonth(a):sl(a),this.endOfWeek=(a,t)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(a,t):ol(a,this.options),this.endOfYear=a=>this.overrides?.endOfYear?this.overrides.endOfYear(a):vt(a),this.format=(a,t,s)=>{const i=this.overrides?.format?this.overrides.format(a,t,this.options):fn(a,t,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=a=>this.overrides?.getISOWeek?this.overrides.getISOWeek(a):Ds(a),this.getMonth=(a,t)=>this.overrides?.getMonth?this.overrides.getMonth(a,this.options):Is(a,this.options),this.getYear=(a,t)=>this.overrides?.getYear?this.overrides.getYear(a,this.options):qs(a,this.options),this.getWeek=(a,t)=>this.overrides?.getWeek?this.overrides.getWeek(a,this.options):Vs(a,this.options),this.isAfter=(a,t)=>this.overrides?.isAfter?this.overrides.isAfter(a,t):kl(a,t),this.isBefore=(a,t)=>this.overrides?.isBefore?this.overrides.isBefore(a,t):Sa(a,t),this.isDate=a=>this.overrides?.isDate?this.overrides.isDate(a):tl(a),this.isSameDay=(a,t)=>this.overrides?.isSameDay?this.overrides.isSameDay(a,t):Ps(a,t),this.isSameMonth=(a,t)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(a,t):ug(a,t),this.isSameYear=(a,t)=>this.overrides?.isSameYear?this.overrides.isSameYear(a,t):yl(a,t),this.max=a=>this.overrides?.max?this.overrides.max(a):$u(a),this.min=a=>this.overrides?.min?this.overrides.min(a):Wu(a),this.setMonth=(a,t)=>this.overrides?.setMonth?this.overrides.setMonth(a,t):Tl(a,t),this.setYear=(a,t)=>this.overrides?.setYear?this.overrides.setYear(a,t):El(a,t),this.startOfBroadcastWeek=(a,t)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(a,this):Rl(a,this),this.startOfDay=a=>this.overrides?.startOfDay?this.overrides.startOfDay(a):Cr(a),this.startOfISOWeek=a=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(a):An(a),this.startOfMonth=a=>this.overrides?.startOfMonth?this.overrides.startOfMonth(a):cn(a),this.startOfWeek=(a,t)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(a,this.options):Yr(a,this.options),this.startOfYear=a=>this.overrides?.startOfYear?this.overrides.startOfYear(a):ha(a),this.options={locale:gt,...r},this.overrides=n}getDigitMap(){const{numerals:r="latn"}=this.options,n=new Intl.NumberFormat("en-US",{numberingSystem:r}),a={};for(let t=0;t<10;t++)a[t.toString()]=n.format(t);return a}replaceDigits(r){const n=this.getDigitMap();return r.replace(/\d/g,a=>n[a]||a)}formatNumber(r){return this.replaceDigits(r.toString())}}const qr=new Wr;class Fl{constructor(r,n,a=qr){this.date=r,this.displayMonth=n,this.outside=!!(n&&!a.isSameMonth(r,n)),this.dateLib=a}isEqualTo(r){return this.dateLib.isSameDay(r.date,this.date)&&this.dateLib.isSameMonth(r.displayMonth,this.displayMonth)}}class bg{constructor(r,n){this.date=r,this.weeks=n}}class hg{constructor(r,n){this.days=n,this.weekNumber=r}}function xr(e,r,n=!1,a=qr){let{from:t,to:s}=e;const{differenceInCalendarDays:i,isSameDay:o}=a;return t&&s?(i(s,t)<0&&([t,s]=[s,t]),i(r,t)>=(n?1:0)&&i(s,r)>=(n?1:0)):!n&&s?o(s,r):!n&&t?o(t,r):!1}function Ol(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function ws(e){return!!(e&&typeof e=="object"&&"from"in e)}function Nl(e){return!!(e&&typeof e=="object"&&"after"in e)}function bl(e){return!!(e&&typeof e=="object"&&"before"in e)}function hl(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function Sl(e,r){return Array.isArray(e)&&e.every(r.isDate)}function pr(e,r,n=qr){const a=Array.isArray(r)?r:[r],{isSameDay:t,differenceInCalendarDays:s,isAfter:i}=n;return a.some(o=>{if(typeof o=="boolean")return o;if(n.isDate(o))return t(e,o);if(Sl(o,n))return o.includes(e);if(ws(o))return xr(o,e,!1,n);if(hl(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(Ol(o)){const d=s(o.before,e),g=s(o.after,e),u=d>0,k=g<0;return i(o.before,o.after)?k&&u:u||k}return Nl(o)?s(e,o.after)>0:bl(o)?s(o.before,e)>0:typeof o=="function"?o(e):!1})}function Sg(e,r,n){const{disabled:a,hidden:t,modifiers:s,showOutsideDays:i,broadcastCalendar:o,today:d}=r,{isSameDay:g,isSameMonth:u,startOfMonth:k,isBefore:m,endOfMonth:p,isAfter:c}=n,O=r.startMonth&&k(r.startMonth),T=r.endMonth&&p(r.endMonth),f={[Re.focused]:[],[Re.outside]:[],[Re.disabled]:[],[Re.hidden]:[],[Re.today]:[]},R={};for(const F of e){const{date:h,displayMonth:y}=F,b=!!(y&&!u(h,y)),S=!!(O&&m(h,O)),P=!!(T&&c(h,T)),M=!!(a&&pr(h,a,n)),U=!!(t&&pr(h,t,n))||S||P||!o&&!i&&b||o&&i===!1&&b,j=g(h,d??n.today());b&&f.outside.push(F),M&&f.disabled.push(F),U&&f.hidden.push(F),j&&f.today.push(F),s&&Object.keys(s).forEach(D=>{const K=s?.[D];K&&pr(h,K,n)&&(R[D]?R[D].push(F):R[D]=[F])})}return F=>{const h={[Re.focused]:!1,[Re.disabled]:!1,[Re.hidden]:!1,[Re.outside]:!1,[Re.today]:!1},y={};for(const b in f){const S=f[b];h[b]=S.some(P=>P===F)}for(const b in R)y[b]=R[b].some(S=>S===F);return{...h,...y}}}function _g(e,r,n={}){return Object.entries(e).filter(([,t])=>t===!0).reduce((t,[s])=>(n[s]?t.push(n[s]):r[Re[s]]?t.push(r[Re[s]]):r[Ar[s]]&&t.push(r[Ar[s]]),t),[r[x.Day]])}function Kg(e){return v.createElement("button",{...e})}function Pg(e){return v.createElement("span",{...e})}function Dg(e){const{size:r=24,orientation:n="left",className:a}=e;return v.createElement("svg",{className:a,width:r,height:r,viewBox:"0 0 24 24"},n==="up"&&v.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),n==="down"&&v.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),n==="left"&&v.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),n==="right"&&v.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Mg(e){const{day:r,modifiers:n,...a}=e;return v.createElement("td",{...a})}function Vg(e){const{day:r,modifiers:n,...a}=e,t=v.useRef(null);return v.useEffect(()=>{n.focused&&t.current?.focus()},[n.focused]),v.createElement("button",{ref:t,...a})}function Ig(e){const{options:r,className:n,components:a,classNames:t,...s}=e,i=[t[x.Dropdown],n].join(" "),o=r?.find(({value:d})=>d===s.value);return v.createElement("span",{"data-disabled":s.disabled,className:t[x.DropdownRoot]},v.createElement(a.Select,{className:i,...s},r?.map(({value:d,label:g,disabled:u})=>v.createElement(a.Option,{key:d,value:d,disabled:u},g))),v.createElement("span",{className:t[x.CaptionLabel],"aria-hidden":!0},o?.label,v.createElement(a.Chevron,{orientation:"down",size:18,className:t[x.Chevron]})))}function qg(e){return v.createElement("div",{...e})}function jg(e){return v.createElement("div",{...e})}function Lg(e){const{calendarMonth:r,displayIndex:n,...a}=e;return v.createElement("div",{...a},e.children)}function wg(e){const{calendarMonth:r,displayIndex:n,...a}=e;return v.createElement("div",{...a})}function Ug(e){return v.createElement("table",{...e})}function Gg(e){return v.createElement("div",{...e})}const _l=A.createContext(void 0);function Nn(){const e=A.useContext(_l);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Bg(e){const{components:r}=Nn();return v.createElement(r.Dropdown,{...e})}function xg(e){const{onPreviousClick:r,onNextClick:n,previousMonth:a,nextMonth:t,...s}=e,{components:i,classNames:o,labels:{labelPrevious:d,labelNext:g}}=Nn(),u=A.useCallback(m=>{t&&n?.(m)},[t,n]),k=A.useCallback(m=>{a&&r?.(m)},[a,r]);return v.createElement("nav",{...s},v.createElement(i.PreviousMonthButton,{type:"button",className:o[x.PreviousMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":d(a),onClick:k},v.createElement(i.Chevron,{disabled:a?void 0:!0,className:o[x.Chevron],orientation:"left"})),v.createElement(i.NextMonthButton,{type:"button",className:o[x.NextMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":g(t),onClick:u},v.createElement(i.Chevron,{disabled:t?void 0:!0,orientation:"right",className:o[x.Chevron]})))}function Hg(e){const{components:r}=Nn();return v.createElement(r.Button,{...e})}function Yg(e){return v.createElement("option",{...e})}function Cg(e){const{components:r}=Nn();return v.createElement(r.Button,{...e})}function $g(e){const{rootRef:r,...n}=e;return v.createElement("div",{...n,ref:r})}function Wg(e){return v.createElement("select",{...e})}function Jg(e){const{week:r,...n}=e;return v.createElement("tr",{...n})}function zg(e){return v.createElement("th",{...e})}function Xg(e){return v.createElement("thead",{"aria-hidden":!0},v.createElement("tr",{...e}))}function Zg(e){const{week:r,...n}=e;return v.createElement("th",{...n})}function Qg(e){return v.createElement("th",{...e})}function ev(e){return v.createElement("tbody",{...e})}function rv(e){const{components:r}=Nn();return v.createElement(r.Dropdown,{...e})}const nv=Object.freeze(Object.defineProperty({__proto__:null,Button:Kg,CaptionLabel:Pg,Chevron:Dg,Day:Mg,DayButton:Vg,Dropdown:Ig,DropdownNav:qg,Footer:jg,Month:Lg,MonthCaption:wg,MonthGrid:Ug,Months:Gg,MonthsDropdown:Bg,Nav:xg,NextMonthButton:Hg,Option:Yg,PreviousMonthButton:Cg,Root:$g,Select:Wg,Week:Jg,WeekNumber:Zg,WeekNumberHeader:Qg,Weekday:zg,Weekdays:Xg,Weeks:ev,YearsDropdown:rv},Symbol.toStringTag,{value:"Module"}));function av(e){return{...nv,...e}}function tv(e){const r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([n,a])=>{n.startsWith("data-")&&(r[n]=a)}),r}function sv(){const e={};for(const r in x)e[x[r]]=`rdp-${x[r]}`;for(const r in Re)e[Re[r]]=`rdp-${Re[r]}`;for(const r in Ar)e[Ar[r]]=`rdp-${Ar[r]}`;for(const r in or)e[or[r]]=`rdp-${or[r]}`;return e}function Kl(e,r,n){return(n??new Wr(r)).format(e,"LLLL y")}const iv=Kl;function ov(e,r,n){return(n??new Wr(r)).format(e,"d")}function lv(e,r=qr){return r.format(e,"LLLL")}function dv(e,r=qr){return e<10?r.formatNumber(`0${e.toLocaleString()}`):r.formatNumber(`${e.toLocaleString()}`)}function uv(){return""}function kv(e,r,n){return(n??new Wr(r)).format(e,"cccccc")}function Pl(e,r=qr){return r.format(e,"yyyy")}const gv=Pl,vv=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Kl,formatDay:ov,formatMonthCaption:iv,formatMonthDropdown:lv,formatWeekNumber:dv,formatWeekNumberHeader:uv,formatWeekdayName:kv,formatYearCaption:gv,formatYearDropdown:Pl},Symbol.toStringTag,{value:"Module"}));function mv(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...vv,...e}}function pv(e,r,n,a,t){const{startOfMonth:s,startOfYear:i,endOfYear:o,eachMonthOfInterval:d,getMonth:g}=t;return d({start:i(e),end:o(e)}).map(m=>{const p=a.formatMonthDropdown(m,t),c=g(m),O=r&&m<s(r)||n&&m>s(n)||!1;return{value:c,label:p,disabled:O}})}function yv(e,r={},n={}){let a={...r?.[x.Day]};return Object.entries(e).filter(([,t])=>t===!0).forEach(([t])=>{a={...a,...n?.[t]}}),a}function Tv(e,r,n){const a=e.today(),t=r?e.startOfISOWeek(a):e.startOfWeek(a),s=[];for(let i=0;i<7;i++){const o=e.addDays(t,i);s.push(o)}return s}function Ev(e,r,n,a){if(!e||!r)return;const{startOfYear:t,endOfYear:s,addYears:i,getYear:o,isBefore:d,isSameYear:g}=a,u=t(e),k=s(r),m=[];let p=u;for(;d(p,k)||g(p,k);)m.push(p),p=i(p,1);return m.map(c=>{const O=n.formatYearDropdown(c,a);return{value:o(c),label:O,disabled:!1}})}function Dl(e,r,n){return(n??new Wr(r)).format(e,"LLLL y")}const Av=Dl;function cv(e,r,n,a){let t=(a??new Wr(n)).format(e,"PPPP");return r?.today&&(t=`Today, ${t}`),t}function Ml(e,r,n,a){let t=(a??new Wr(n)).format(e,"PPPP");return r.today&&(t=`Today, ${t}`),r.selected&&(t=`${t}, selected`),t}const fv=Ml;function Rv(){return""}function Fv(e){return"Choose the Month"}function Ov(e){return"Go to the Next Month"}function Nv(e){return"Go to the Previous Month"}function bv(e,r,n){return(n??new Wr(r)).format(e,"cccc")}function hv(e,r){return`Week ${e}`}function Sv(e){return"Week Number"}function _v(e){return"Choose the Year"}const Kv=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Av,labelDay:fv,labelDayButton:Ml,labelGrid:Dl,labelGridcell:cv,labelMonthDropdown:Fv,labelNav:Rv,labelNext:Ov,labelPrevious:Nv,labelWeekNumber:hv,labelWeekNumberHeader:Sv,labelWeekday:bv,labelYearDropdown:_v},Symbol.toStringTag,{value:"Module"})),_a=e=>e instanceof HTMLElement?e:null,Bt=e=>[...e.querySelectorAll("[data-animated-month]")??[]],Pv=e=>_a(e.querySelector("[data-animated-month]")),xt=e=>_a(e.querySelector("[data-animated-caption]")),Ht=e=>_a(e.querySelector("[data-animated-weeks]")),Dv=e=>_a(e.querySelector("[data-animated-nav]")),Mv=e=>_a(e.querySelector("[data-animated-weekdays]"));function Vv(e,r,{classNames:n,months:a,focused:t,dateLib:s}){const i=A.useRef(null),o=A.useRef(a),d=A.useRef(!1);A.useLayoutEffect(()=>{const g=o.current;if(o.current=a,!r||!e.current||!(e.current instanceof HTMLElement)||a.length===0||g.length===0||a.length!==g.length)return;const u=s.isSameMonth(a[0].date,g[0].date),k=s.isAfter(a[0].date,g[0].date),m=k?n[or.caption_after_enter]:n[or.caption_before_enter],p=k?n[or.weeks_after_enter]:n[or.weeks_before_enter],c=i.current,O=e.current.cloneNode(!0);if(O instanceof HTMLElement?(Bt(O).forEach(F=>{if(!(F instanceof HTMLElement))return;const h=Pv(F);h&&F.contains(h)&&F.removeChild(h);const y=xt(F);y&&y.classList.remove(m);const b=Ht(F);b&&b.classList.remove(p)}),i.current=O):i.current=null,d.current||u||t)return;const T=c instanceof HTMLElement?Bt(c):[],f=Bt(e.current);if(f&&f.every(R=>R instanceof HTMLElement)&&T&&T.every(R=>R instanceof HTMLElement)){d.current=!0,e.current.style.isolation="isolate";const R=Dv(e.current);R&&(R.style.zIndex="1"),f.forEach((F,h)=>{const y=T[h];if(!y)return;F.style.position="relative",F.style.overflow="hidden";const b=xt(F);b&&b.classList.add(m);const S=Ht(F);S&&S.classList.add(p);const P=()=>{d.current=!1,e.current&&(e.current.style.isolation=""),R&&(R.style.zIndex=""),b&&b.classList.remove(m),S&&S.classList.remove(p),F.style.position="",F.style.overflow="",F.contains(y)&&F.removeChild(y)};y.style.pointerEvents="none",y.style.position="absolute",y.style.overflow="hidden",y.setAttribute("aria-hidden","true");const M=Mv(y);M&&(M.style.opacity="0");const U=xt(y);U&&(U.classList.add(k?n[or.caption_before_exit]:n[or.caption_after_exit]),U.addEventListener("animationend",P));const j=Ht(y);j&&j.classList.add(k?n[or.weeks_before_exit]:n[or.weeks_after_exit]),F.insertBefore(y,F.firstChild)})}})}function Iv(e,r,n,a){const t=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:d}=n??{},{addDays:g,differenceInCalendarDays:u,differenceInCalendarMonths:k,endOfBroadcastWeek:m,endOfISOWeek:p,endOfMonth:c,endOfWeek:O,isAfter:T,startOfBroadcastWeek:f,startOfISOWeek:R,startOfWeek:F}=a,h=d?f(t,a):i?R(t):F(t),y=d?m(s):i?p(c(s)):O(c(s)),b=u(y,h),S=k(s,t)+1,P=[];for(let j=0;j<=b;j++){const D=g(h,j);if(r&&T(D,r))break;P.push(D)}const U=(d?35:42)*S;if(o&&P.length<U){const j=U-P.length;for(let D=0;D<j;D++){const K=g(P[P.length-1],1);P.push(K)}}return P}function qv(e){const r=[];return e.reduce((n,a)=>{const t=a.weeks.reduce((s,i)=>[...s,...i.days],r);return[...n,...t]},r)}function jv(e,r,n,a){const{numberOfMonths:t=1}=n,s=[];for(let i=0;i<t;i++){const o=a.addMonths(e,i);if(r&&o>r)break;s.push(o)}return s}function Li(e,r){const{month:n,defaultMonth:a,today:t=r.today(),numberOfMonths:s=1,endMonth:i,startMonth:o}=e;let d=n||a||t;const{differenceInCalendarMonths:g,addMonths:u,startOfMonth:k}=r;if(i&&g(i,d)<0){const m=-1*(s-1);d=u(i,m)}return o&&g(d,o)<0&&(d=o),k(d)}function Lv(e,r,n,a){const{addDays:t,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:o,endOfWeek:d,getISOWeek:g,getWeek:u,startOfBroadcastWeek:k,startOfISOWeek:m,startOfWeek:p}=a,c=e.reduce((O,T)=>{const f=n.broadcastCalendar?k(T,a):n.ISOWeek?m(T):p(T),R=n.broadcastCalendar?s(T):n.ISOWeek?i(o(T)):d(o(T)),F=r.filter(S=>S>=f&&S<=R),h=n.broadcastCalendar?35:42;if(n.fixedWeeks&&F.length<h){const S=r.filter(P=>{const M=h-F.length;return P>R&&P<=t(R,M)});F.push(...S)}const y=F.reduce((S,P)=>{const M=n.ISOWeek?g(P):u(P),U=S.find(D=>D.weekNumber===M),j=new Fl(P,T,a);return U?U.days.push(j):S.push(new hg(M,[j])),S},[]),b=new bg(T,y);return O.push(b),O},[]);return n.reverseMonths?c.reverse():c}function wv(e,r){let{startMonth:n,endMonth:a}=e;const{startOfYear:t,startOfDay:s,startOfMonth:i,endOfMonth:o,addYears:d,endOfYear:g,newDate:u,today:k}=r,{fromYear:m,toYear:p,fromMonth:c,toMonth:O}=e;!n&&c&&(n=c),!n&&m&&(n=r.newDate(m,0,1)),!a&&O&&(a=O),!a&&p&&(a=u(p,11,31));const T=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return n?n=i(n):m?n=u(m,0,1):!n&&T&&(n=t(d(e.today??k(),-100))),a?a=o(a):p?a=u(p,11,31):!a&&T&&(a=g(e.today??k())),[n&&s(n),a&&s(a)]}function Uv(e,r,n,a){if(n.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:s=1}=n,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:d}=a,g=t?s:1,u=i(e);if(!r)return o(u,g);if(!(d(r,e)<s))return o(u,g)}function Gv(e,r,n,a){if(n.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:s}=n,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:d}=a,g=t?s??1:1,u=i(e);if(!r)return o(u,-g);if(!(d(u,r)<=0))return o(u,-g)}function Bv(e){const r=[];return e.reduce((n,a)=>[...n,...a.weeks],r)}function mt(e,r){const[n,a]=A.useState(e);return[r===void 0?n:r,a]}function xv(e,r){const[n,a]=wv(e,r),{startOfMonth:t,endOfMonth:s}=r,i=Li(e,r),[o,d]=mt(i,e.month?i:void 0);A.useEffect(()=>{const b=Li(e,r);d(b)},[e.timeZone]);const g=jv(o,a,e,r),u=Iv(g,e.endMonth?s(e.endMonth):void 0,e,r),k=Lv(g,u,e,r),m=Bv(k),p=qv(k),c=Gv(o,n,e,r),O=Uv(o,a,e,r),{disableNavigation:T,onMonthChange:f}=e,R=b=>m.some(S=>S.days.some(P=>P.isEqualTo(b))),F=b=>{if(T)return;let S=t(b);n&&S<t(n)&&(S=t(n)),a&&S>t(a)&&(S=t(a)),d(S),f?.(S)};return{months:k,weeks:m,days:p,navStart:n,navEnd:a,previousMonth:c,nextMonth:O,goToMonth:F,goToDay:b=>{R(b)||F(b.date)}}}var hr;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(hr||(hr={}));function wi(e){return!e[Re.disabled]&&!e[Re.hidden]&&!e[Re.outside]}function Hv(e,r,n,a){let t,s=-1;for(const i of e){const o=r(i);wi(o)&&(o[Re.focused]&&s<hr.FocusedModifier?(t=i,s=hr.FocusedModifier):a?.isEqualTo(i)&&s<hr.LastFocused?(t=i,s=hr.LastFocused):n(i.date)&&s<hr.Selected?(t=i,s=hr.Selected):o[Re.today]&&s<hr.Today&&(t=i,s=hr.Today))}return t||(t=e.find(i=>wi(r(i)))),t}function Yv(e,r,n,a,t,s,i){const{ISOWeek:o,broadcastCalendar:d}=s,{addDays:g,addMonths:u,addWeeks:k,addYears:m,endOfBroadcastWeek:p,endOfISOWeek:c,endOfWeek:O,max:T,min:f,startOfBroadcastWeek:R,startOfISOWeek:F,startOfWeek:h}=i;let b={day:g,week:k,month:u,year:m,startOfWeek:S=>d?R(S,i):o?F(S):h(S),endOfWeek:S=>d?p(S):o?c(S):O(S)}[e](n,r==="after"?1:-1);return r==="before"&&a?b=T([a,b]):r==="after"&&t&&(b=f([t,b])),b}function Vl(e,r,n,a,t,s,i,o=0){if(o>365)return;const d=Yv(e,r,n.date,a,t,s,i),g=!!(s.disabled&&pr(d,s.disabled,i)),u=!!(s.hidden&&pr(d,s.hidden,i)),k=d,m=new Fl(d,k,i);return!g&&!u?m:Vl(e,r,m,a,t,s,i,o+1)}function Cv(e,r,n,a,t){const{autoFocus:s}=e,[i,o]=A.useState(),d=Hv(r.days,n,a||(()=>!1),i),[g,u]=A.useState(s?d:void 0);return{isFocusTarget:O=>!!d?.isEqualTo(O),setFocused:u,focused:g,blur:()=>{o(g),u(void 0)},moveFocus:(O,T)=>{if(!g)return;const f=Vl(O,T,g,r.navStart,r.navEnd,e,t);f&&(r.goToDay(f),u(f))}}}function $v(e,r){const{selected:n,required:a,onSelect:t}=e,[s,i]=mt(n,t?n:void 0),o=t?n:s,{isSameDay:d}=r,g=p=>o?.some(c=>d(c,p))??!1,{min:u,max:k}=e;return{selected:o,select:(p,c,O)=>{let T=[...o??[]];if(g(p)){if(o?.length===u||a&&o?.length===1)return;T=o?.filter(f=>!d(f,p))}else o?.length===k?T=[p]:T=[...T,p];return t||i(T),t?.(T,p,c,O),T},isSelected:g}}function Wv(e,r,n=0,a=0,t=!1,s=qr){const{from:i,to:o}=r||{},{isSameDay:d,isAfter:g,isBefore:u}=s;let k;if(!i&&!o)k={from:e,to:n>0?void 0:e};else if(i&&!o)d(i,e)?t?k={from:i,to:void 0}:k=void 0:u(e,i)?k={from:e,to:i}:k={from:i,to:e};else if(i&&o)if(d(i,e)&&d(o,e))t?k={from:i,to:o}:k=void 0;else if(d(i,e))k={from:i,to:n>0?void 0:e};else if(d(o,e))k={from:e,to:n>0?void 0:e};else if(u(e,i))k={from:e,to:o};else if(g(e,i))k={from:i,to:e};else if(g(e,o))k={from:i,to:e};else throw new Error("Invalid range");if(k?.from&&k?.to){const m=s.differenceInCalendarDays(k.to,k.from);a>0&&m>a?k={from:e,to:void 0}:n>1&&m<n&&(k={from:e,to:void 0})}return k}function Jv(e,r,n=qr){const a=Array.isArray(r)?r:[r];let t=e.from;const s=n.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let o=0;o<=i;o++){if(a.includes(t.getDay()))return!0;t=n.addDays(t,1)}return!1}function Ui(e,r,n=qr){return xr(e,r.from,!1,n)||xr(e,r.to,!1,n)||xr(r,e.from,!1,n)||xr(r,e.to,!1,n)}function zv(e,r,n=qr){const a=Array.isArray(r)?r:[r];if(a.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:n.isDate(o)?xr(e,o,!1,n):Sl(o,n)?o.some(d=>xr(e,d,!1,n)):ws(o)?o.from&&o.to?Ui(e,{from:o.from,to:o.to},n):!1:hl(o)?Jv(e,o.dayOfWeek,n):Ol(o)?n.isAfter(o.before,o.after)?Ui(e,{from:n.addDays(o.after,1),to:n.addDays(o.before,-1)},n):pr(e.from,o,n)||pr(e.to,o,n):Nl(o)||bl(o)?pr(e.from,o,n)||pr(e.to,o,n):!1))return!0;const i=a.filter(o=>typeof o=="function");if(i.length){let o=e.from;const d=n.differenceInCalendarDays(e.to,e.from);for(let g=0;g<=d;g++){if(i.some(u=>u(o)))return!0;o=n.addDays(o,1)}}return!1}function Xv(e,r){const{disabled:n,excludeDisabled:a,selected:t,required:s,onSelect:i}=e,[o,d]=mt(t,i?t:void 0),g=i?t:o;return{selected:g,select:(m,p,c)=>{const{min:O,max:T}=e,f=m?Wv(m,g,O,T,s,r):void 0;return a&&n&&f?.from&&f.to&&zv({from:f.from,to:f.to},n,r)&&(f.from=m,f.to=void 0),i||d(f),i?.(f,m,p,c),f},isSelected:m=>g&&xr(g,m,!1,r)}}function Zv(e,r){const{selected:n,required:a,onSelect:t}=e,[s,i]=mt(n,t?n:void 0),o=t?n:s,{isSameDay:d}=r;return{selected:o,select:(k,m,p)=>{let c=k;return!a&&o&&o&&d(k,o)&&(c=void 0),t||i(c),t?.(c,k,m,p),c},isSelected:k=>o?d(o,k):!1}}function Qv(e,r){const n=Zv(e,r),a=$v(e,r),t=Xv(e,r);switch(e.mode){case"single":return n;case"multiple":return a;case"range":return t;default:return}}function em(e){let r=e;r.timeZone&&(r={...e},r.today&&(r.today=new Ye(r.today,r.timeZone)),r.month&&(r.month=new Ye(r.month,r.timeZone)),r.defaultMonth&&(r.defaultMonth=new Ye(r.defaultMonth,r.timeZone)),r.startMonth&&(r.startMonth=new Ye(r.startMonth,r.timeZone)),r.endMonth&&(r.endMonth=new Ye(r.endMonth,r.timeZone)),r.mode==="single"&&r.selected?r.selected=new Ye(r.selected,r.timeZone):r.mode==="multiple"&&r.selected?r.selected=r.selected?.map(Z=>new Ye(Z,r.timeZone)):r.mode==="range"&&r.selected&&(r.selected={from:r.selected.from?new Ye(r.selected.from,r.timeZone):void 0,to:r.selected.to?new Ye(r.selected.to,r.timeZone):void 0}));const{components:n,formatters:a,labels:t,dateLib:s,locale:i,classNames:o}=A.useMemo(()=>{const Z={...gt,...r.locale};return{dateLib:new Wr({locale:Z,weekStartsOn:r.broadcastCalendar?1:r.weekStartsOn,firstWeekContainsDate:r.firstWeekContainsDate,useAdditionalWeekYearTokens:r.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:r.useAdditionalDayOfYearTokens,timeZone:r.timeZone,numerals:r.numerals},r.dateLib),components:av(r.components),formatters:mv(r.formatters),labels:{...Kv,...r.labels},locale:Z,classNames:{...sv(),...r.classNames}}},[r.locale,r.broadcastCalendar,r.weekStartsOn,r.firstWeekContainsDate,r.useAdditionalWeekYearTokens,r.useAdditionalDayOfYearTokens,r.timeZone,r.numerals,r.dateLib,r.components,r.formatters,r.labels,r.classNames]),{captionLayout:d,mode:g,navLayout:u,numberOfMonths:k=1,onDayBlur:m,onDayClick:p,onDayFocus:c,onDayKeyDown:O,onDayMouseEnter:T,onDayMouseLeave:f,onNextClick:R,onPrevClick:F,showWeekNumber:h,styles:y}=r,{formatCaption:b,formatDay:S,formatMonthDropdown:P,formatWeekNumber:M,formatWeekNumberHeader:U,formatWeekdayName:j,formatYearDropdown:D}=a,K=xv(r,s),{days:Y,months:C,navStart:$,navEnd:fe,previousMonth:te,nextMonth:ve,goToMonth:Me}=K,Ve=Sg(Y,r,s),{isSelected:Fr,select:gr,selected:jr}=Qv(r,s)??{},{blur:z,focused:J,isFocusTarget:Ne,moveFocus:we,setFocused:yr}=Cv(r,K,Ve,Fr??(()=>!1),s),{labelDayButton:zr,labelGridcell:on,labelGrid:Xr,labelMonthDropdown:ln,labelNav:Or,labelPrevious:Lr,labelNext:dn,labelWeekday:un,labelWeekNumber:Sn,labelWeekNumberHeader:Zr,labelYearDropdown:E}=t,N=A.useMemo(()=>Tv(s,r.ISOWeek),[s,r.ISOWeek]),_=g!==void 0||p!==void 0,L=A.useCallback(()=>{te&&(Me(te),F?.(te))},[te,Me,F]),I=A.useCallback(()=>{ve&&(Me(ve),R?.(ve))},[Me,ve,R]),V=A.useCallback((Z,Ee)=>pe=>{pe.preventDefault(),pe.stopPropagation(),yr(Z),gr?.(Z.date,Ee,pe),p?.(Z.date,Ee,pe)},[gr,p,yr]),B=A.useCallback((Z,Ee)=>pe=>{yr(Z),c?.(Z.date,Ee,pe)},[c,yr]),se=A.useCallback((Z,Ee)=>pe=>{z(),m?.(Z.date,Ee,pe)},[z,m]),ke=A.useCallback((Z,Ee)=>pe=>{const Qr={ArrowLeft:["day",r.dir==="rtl"?"after":"before"],ArrowRight:["day",r.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[pe.shiftKey?"year":"month","before"],PageDown:[pe.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Qr[pe.key]){pe.preventDefault(),pe.stopPropagation();const[Tr,Va]=Qr[pe.key];we(Tr,Va)}O?.(Z.date,Ee,pe)},[we,O,r.dir]),rr=A.useCallback((Z,Ee)=>pe=>{T?.(Z.date,Ee,pe)},[T]),_n=A.useCallback((Z,Ee)=>pe=>{f?.(Z.date,Ee,pe)},[f]),Nr=A.useCallback(Z=>Ee=>{const pe=Number(Ee.target.value),Qr=s.setMonth(s.startOfMonth(Z),pe);Me(Qr)},[s,Me]),Vt=A.useCallback(Z=>Ee=>{const pe=Number(Ee.target.value),Qr=s.setYear(s.startOfMonth(Z),pe);Me(Qr)},[s,Me]),{className:aa,style:ta}=A.useMemo(()=>({className:[o[x.Root],r.className].filter(Boolean).join(" "),style:{...y?.[x.Root],...r.style}}),[o,r.className,r.style,y]),It=tv(r),sa=A.useRef(null);Vv(sa,!!r.animate,{classNames:o,months:C,focused:J,dateLib:s});const qt={dayPickerProps:r,selected:jr,select:gr,isSelected:Fr,months:C,nextMonth:ve,previousMonth:te,goToMonth:Me,getModifiers:Ve,components:n,classNames:o,styles:y,labels:t,formatters:a};return v.createElement(_l.Provider,{value:qt},v.createElement(n.Root,{rootRef:r.animate?sa:void 0,className:aa,style:ta,dir:r.dir,id:r.id,lang:r.lang,nonce:r.nonce,title:r.title,role:r.role,"aria-label":r["aria-label"],...It},v.createElement(n.Months,{className:o[x.Months],style:y?.[x.Months]},!r.hideNavigation&&!u&&v.createElement(n.Nav,{"data-animated-nav":r.animate?"true":void 0,className:o[x.Nav],style:y?.[x.Nav],"aria-label":Or(),onPreviousClick:L,onNextClick:I,previousMonth:te,nextMonth:ve}),C.map((Z,Ee)=>{const pe=pv(Z.date,$,fe,a,s),Qr=Ev($,fe,a,s);return v.createElement(n.Month,{"data-animated-month":r.animate?"true":void 0,className:o[x.Month],style:y?.[x.Month],key:Ee,displayIndex:Ee,calendarMonth:Z},u==="around"&&!r.hideNavigation&&Ee===0&&v.createElement(n.PreviousMonthButton,{type:"button",className:o[x.PreviousMonthButton],tabIndex:te?void 0:-1,"aria-disabled":te?void 0:!0,"aria-label":Lr(te),onClick:L,"data-animated-button":r.animate?"true":void 0},v.createElement(n.Chevron,{disabled:te?void 0:!0,className:o[x.Chevron],orientation:r.dir==="rtl"?"right":"left"})),v.createElement(n.MonthCaption,{"data-animated-caption":r.animate?"true":void 0,className:o[x.MonthCaption],style:y?.[x.MonthCaption],calendarMonth:Z,displayIndex:Ee},d?.startsWith("dropdown")?v.createElement(n.DropdownNav,{className:o[x.Dropdowns],style:y?.[x.Dropdowns]},d==="dropdown"||d==="dropdown-months"?v.createElement(n.MonthsDropdown,{className:o[x.MonthsDropdown],"aria-label":ln(),classNames:o,components:n,disabled:!!r.disableNavigation,onChange:Nr(Z.date),options:pe,style:y?.[x.Dropdown],value:s.getMonth(Z.date)}):v.createElement("span",null,P(Z.date,s)),d==="dropdown"||d==="dropdown-years"?v.createElement(n.YearsDropdown,{className:o[x.YearsDropdown],"aria-label":E(s.options),classNames:o,components:n,disabled:!!r.disableNavigation,onChange:Vt(Z.date),options:Qr,style:y?.[x.Dropdown],value:s.getYear(Z.date)}):v.createElement("span",null,D(Z.date,s)),v.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},b(Z.date,s.options,s))):v.createElement(n.CaptionLabel,{className:o[x.CaptionLabel],role:"status","aria-live":"polite"},b(Z.date,s.options,s))),u==="around"&&!r.hideNavigation&&Ee===k-1&&v.createElement(n.NextMonthButton,{type:"button",className:o[x.NextMonthButton],tabIndex:ve?void 0:-1,"aria-disabled":ve?void 0:!0,"aria-label":dn(ve),onClick:I,"data-animated-button":r.animate?"true":void 0},v.createElement(n.Chevron,{disabled:ve?void 0:!0,className:o[x.Chevron],orientation:r.dir==="rtl"?"left":"right"})),Ee===k-1&&u==="after"&&!r.hideNavigation&&v.createElement(n.Nav,{"data-animated-nav":r.animate?"true":void 0,className:o[x.Nav],style:y?.[x.Nav],"aria-label":Or(),onPreviousClick:L,onNextClick:I,previousMonth:te,nextMonth:ve}),v.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":Xr(Z.date,s.options,s)||void 0,className:o[x.MonthGrid],style:y?.[x.MonthGrid]},!r.hideWeekdays&&v.createElement(n.Weekdays,{"data-animated-weekdays":r.animate?"true":void 0,className:o[x.Weekdays],style:y?.[x.Weekdays]},h&&v.createElement(n.WeekNumberHeader,{"aria-label":Zr(s.options),className:o[x.WeekNumberHeader],style:y?.[x.WeekNumberHeader],scope:"col"},U()),N.map((Tr,Va)=>v.createElement(n.Weekday,{"aria-label":un(Tr,s.options,s),className:o[x.Weekday],key:Va,style:y?.[x.Weekday],scope:"col"},j(Tr,s.options,s)))),v.createElement(n.Weeks,{"data-animated-weeks":r.animate?"true":void 0,className:o[x.Weeks],style:y?.[x.Weeks]},Z.weeks.map((Tr,Va)=>v.createElement(n.Week,{className:o[x.Week],key:Tr.weekNumber,style:y?.[x.Week],week:Tr},h&&v.createElement(n.WeekNumber,{week:Tr,style:y?.[x.WeekNumber],"aria-label":Sn(Tr.weekNumber,{locale:i}),className:o[x.WeekNumber],scope:"row",role:"rowheader"},M(Tr.weekNumber,s)),Tr.days.map(He=>{const{date:br}=He,oe=Ve(He);if(oe[Re.focused]=!oe.hidden&&!!J?.isEqualTo(He),oe[Ar.selected]=Fr?.(br)||oe.selected,ws(jr)){const{from:jt,to:Lt}=jr;oe[Ar.range_start]=!!(jt&&Lt&&s.isSameDay(br,jt)),oe[Ar.range_end]=!!(jt&&Lt&&s.isSameDay(br,Lt)),oe[Ar.range_middle]=xr(jr,br,!0,s)}const Nd=yv(oe,y,r.modifiersStyles),bd=_g(oe,o,r.modifiersClassNames),hd=!_&&!oe.hidden?on(br,oe,s.options,s):void 0;return v.createElement(n.Day,{key:`${s.format(br,"yyyy-MM-dd")}_${s.format(He.displayMonth,"yyyy-MM")}`,day:He,modifiers:oe,className:bd.join(" "),style:Nd,role:"gridcell","aria-selected":oe.selected||void 0,"aria-label":hd,"data-day":s.format(br,"yyyy-MM-dd"),"data-month":He.outside?s.format(br,"yyyy-MM"):void 0,"data-selected":oe.selected||void 0,"data-disabled":oe.disabled||void 0,"data-hidden":oe.hidden||void 0,"data-outside":He.outside||void 0,"data-focused":oe.focused||void 0,"data-today":oe.today||void 0},!oe.hidden&&_?v.createElement(n.DayButton,{className:o[x.DayButton],style:y?.[x.DayButton],type:"button",day:He,modifiers:oe,disabled:oe.disabled||void 0,tabIndex:Ne(He)?0:-1,"aria-label":zr(br,oe,s.options,s),onClick:V(He,oe),onBlur:se(He,oe),onFocus:B(He,oe),onKeyDown:ke(He,oe),onMouseEnter:rr(He,oe),onMouseLeave:_n(He,oe)},S(br,s.options,s)):!oe.hidden&&S(He.date,s.options,s))}))))))})),r.footer&&v.createElement(n.Footer,{className:o[x.Footer],style:y?.[x.Footer],role:"status","aria-live":"polite"},r.footer)))}var rm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Il=A.forwardRef((e,r)=>{var{as:n="div",className:a,above:t,below:s,variant:i,asChild:o}=e,d=rm(e,["as","className","above","below","variant","asChild"]);const{cn:g}=ae(),u=i==="show"?t:s,k=i==="show"?s:t,m=o?Fa:n;return v.createElement(m,Object.assign({},d,{ref:r,className:g("navds-responsive",a,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${k}`]:k})}))}),nm=A.forwardRef((e,r)=>v.createElement(Il,Object.assign({},e,{ref:r,variant:"hide"}))),Us=A.forwardRef((e,r)=>v.createElement(Il,Object.assign({},e,{ref:r,variant:"show"})));function cr(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function am({day:e,fromDate:r,toDate:n}){const a=n&&nn(e,Cr(n))>0,t=r&&nn(Cr(r),e)>0;return a||t||!1}const ql="dd.MM.yyyy",tm="MMMM yyyy",jl=[ql,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...jl];const Yt=(e,r,n,a,t)=>{let s;const i=jl;if(t){for(const o of i)if(s=wn(e,o,r,{locale:n}),cr(s)&&!Ct(e,r,n,i))return s;for(const o of[...i.map(d=>d.replace("yyyy","yy"))])if(s=wn(e,o,r,{locale:n}),cr(s)&&Ct(e,r,n,i)){const d=sm(e,o,r,n);return cr(new Date(d))?new Date(d):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(s=wn(e,o,r,{locale:n}),cr(s)&&!Ct(e,r,n,i))return s;return new Date("Invalid date")};function Ct(e,r,n,a){let t;const s=a.map(i=>i.replace("yyyy","yy"));for(const i of s)if(t=wn(e,i,r,{locale:n}),cr(t))return!0;return!1}function sm(e,r,n,a){const t=wn(Gi(e,"19"),r.replace("yy","yyyy"),n,{locale:a}),s=wn(Gi(e,"20"),r.replace("yy","yyyy"),n,{locale:a});return cr(t)&&cr(s)?Sa(t,vg(new Date,{years:80}))?s:t:new Date("Invalid date")}function Gi(e,r){const n=e.slice(-2);return`${e.slice(0,e.length-2)}${r}${n}`}const ia=(e,r,n,a)=>fn(e,a??ql,{locale:r}),im=({month:e,start:r,end:n})=>{if(!e)return;let a=e;return r&&Sa(a,r)&&(a=r),n&&kl(a,n)&&(a=n),cn(a)};function om(e,r,n,a){return il({start:ha(e),end:vt(e)}).map(i=>{const o=fn(i,"LLLL",{locale:a}),d=Is(i),g=r&&i<cn(r)||n&&i>cn(n)||!1;return{value:d,label:o,disabled:g}})}function lm(e,r,n){if(!e||!r)return;const a=ha(e),t=vt(r),s=[];let i=a;for(;Sa(i,t)||yl(i,t);)s.push(i),i=Ks(i,1);return s.map(o=>{const d=fn(o,"yyyy",{locale:n});return{value:qs(o),label:d,disabled:!1}})}function dm({captionLayout:e,startMonth:r,endMonth:n,today:a}){const t=e==="dropdown",s=a??new Date;return r?r=cn(r):!r&&t&&(r=ha(Ks(s,-100))),n?n=sl(n):!n&&t&&(n=vt(s)),[r&&Cr(r),n&&Cr(n)]}var um=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const km=e=>{var{day:r,modifiers:n,locale:a,children:t}=e,s=um(e,["day","modifiers","locale","children"]);const{cn:i}=ae(),o=A.useRef(null);return A.useEffect(()=>{var d;n.focused&&((d=o.current)===null||d===void 0||d.focus())},[n.focused]),n.hidden?v.createElement(v.Fragment,null):v.createElement("button",Object.assign({},s,{ref:o,"aria-hidden":r.outside,"aria-pressed":!!n.selected,"aria-label":fn(r.date,"cccc d",{locale:a}),"data-pressed":n.selected,"data-today":n.today||void 0,className:i(s.className,{"rdp-day_disabled":n.disabled,"rdp-day_selected":n.selected,"rdp-day_range_start":n.range_start,"rdp-day_range_middle":n.range_middle,"rdp-day_range_end":n.range_end,"rdp-day_today":n.today,"rdp-day_outside":n.outside,"rdp-day__weekend":n.weekend})}),t)};var gm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const ks=A.forwardRef((e,r)=>{const{inputProps:n,errorId:a,showErrorMsg:t,hasError:s,size:i,inputDescriptionId:o,readOnly:d}=Hn(e,"select"),{children:g,label:u,className:k,description:m,htmlSize:p,hideLabel:c=!1,style:O}=e,T=gm(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:f}=ae(),R={onMouseDown:F=>{d&&(F.preventDefault(),F.target.focus())},onKeyDown:F=>{d&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(F.key)&&F.preventDefault()}};return v.createElement("div",{className:f(k,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":d,"navds-select--error":s,"navds-select--readonly":d})},v.createElement(kr,{htmlFor:n.id,size:i,className:f("navds-form-field__label",{"navds-sr-only":c})},d&&v.createElement(Fs,null),u),!!m&&v.createElement(Ze,{className:f("navds-form-field__description",{"navds-sr-only":c}),id:o,size:i,as:"div"},m),v.createElement("div",{className:f("navds-select__container"),style:O},v.createElement("select",Object.assign({},Be(T,["error","errorId","size","readOnly"]),n,R,{ref:r,className:f("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:p}),g),v.createElement(ut,{className:f("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:f("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},t&&v.createElement($r,{size:i,showIcon:!0},e.error)))}),Ll=({week:{weekNumber:e,days:r},onWeekNumberClick:n,className:a,style:t,showOnDesktop:s})=>{const i=Os().translate,{cn:o}=ae(),{getModifiers:d}=Nn(),g=A.useMemo(()=>r.filter(k=>{const m=d(k);return!(m.hidden||m.outside||m.disabled)}).length===0,[r,d]),u=s?Us:nm;return!n||g?v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:"rdp-cell"},v.createElement(Na,{as:"span",textColor:"subtle",className:a,style:t,"aria-label":i("weekNumber",{week:e})},e))):v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!s})},v.createElement(Je,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:t,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{n(e,r.map(k=>k.date))},icon:v.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},vm=({onWeekNumberClick:e,weeks:r})=>{const n=Os().translate,{cn:a}=ae(),t=Hr();return e?v.createElement(Us,{below:"sm",asChild:!0},v.createElement("table",{className:"rdp-table",role:"grid"},v.createElement("tbody",{className:"rdp-tbody"},v.createElement("tr",{className:a("rdp-row navds-date__week-row")},v.createElement(Na,{as:"th",weight:"semibold",className:a("rdp-cell navds-date__week-cell")},v.createElement("span",{className:a("navds-date__week-wrapper"),id:t},n("week"))),r?.map(s=>v.createElement(Ll,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:a("navds-date__week-wrapper")})))))):null};var mm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const pm=e=>{var{children:r,calendarMonth:n,locale:a,onWeekNumberClick:t}=e,s=mm(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:d,nextMonth:g}=Nn(),{captionLayout:u}=i,{cn:k}=ae(),m=Os().translate,p=A.useCallback((F,h)=>{const y=Number(h.target.value),b=Tl(cn(F),y);o(b)},[o]),c=A.useCallback((F,h)=>{const y=Number(h.target.value),b=El(cn(F),y);o(b)},[o]),[O,T]=dm({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),f=om(n.date,O,T,a),R=lm(O,T,a);return v.createElement("div",Object.assign({},Be(s,["displayIndex"])),v.createElement("div",{className:k("navds-date__caption")},u?.startsWith("dropdown")&&v.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:k("navds-sr-only")},fn(n.date,"LLLL y",{locale:a})),v.createElement(Je,{variant:"tertiary-neutral",disabled:!d,onClick:()=>d&&o(d),icon:v.createElement(iu,{title:m("goToPreviousMonth")}),className:k("navds-date__caption-button"),type:"button"}),u?.startsWith("dropdown")?v.createElement("div",{className:k("navds-date__caption")},v.createElement(ks,{label:m("month"),hideLabel:!0,className:k("navds-date__caption__month"),onChange:F=>p(n.date,F),value:Is(n.date)},f?.map(({value:F,label:h,disabled:y})=>v.createElement("option",{key:F,value:F,disabled:y},h))),v.createElement(ks,{label:m("year"),hideLabel:!0,className:k("navds-date__caption__year"),onChange:F=>c(n.date,F),value:qs(n.date)},R?.map(({value:F,label:h,disabled:y})=>v.createElement("option",{key:F,value:F,disabled:y},h)))):v.createElement(Ze,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:k("navds-date__caption-label")},fn(n.date,"LLLL y",{locale:a})),v.createElement(Je,{variant:"tertiary-neutral",icon:v.createElement(lu,{title:m("goToNextMonth")}),onClick:()=>g&&o(g),disabled:!g,className:k("navds-date__caption-button"),type:"button"})),v.createElement(vm,{weeks:n.weeks,onWeekNumberClick:t}),r)};var ym=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Tm={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},wl=e=>{var{className:r,dropdownCaption:n,disabled:a=[],disableWeekends:t=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:d,fromDate:g,toDate:u,month:k,mode:m,handleSelect:p,locale:c}=e,O=ym(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:T}=ae(),f=Co(),R=c?$o(c):f,F=m??"single";return v.createElement(em,Object.assign({captionLayout:n?"dropdown":"label",hideNavigation:!0,locale:R,mode:F,onSelect:(h,y)=>{if(F!=="range"||h||!cl(i)){p(h);return}if(!i.to){p({from:y,to:void 0});return}let b;Ps(i.to,y)?b=void 0:Sa(y,i.to)?b={from:y,to:i.to}:b={from:i.to,to:y},p(b)},selected:i,classNames:Tm,components:{MonthCaption:()=>v.createElement(v.Fragment,null),DayButton:A.useCallback(h=>v.createElement(km,Object.assign({},h,{locale:R})),[R]),Month:A.useCallback(h=>v.createElement(pm,Object.assign({},h,{locale:R,onWeekNumberClick:F==="multiple"?d:void 0})),[R,F,d]),Day:A.useCallback(h=>v.createElement("td",Object.assign({},Be(h,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:A.useCallback(h=>v.createElement(Ll,Object.assign({},h,{showOnDesktop:!0,onWeekNumberClick:F==="multiple"?d:void 0})),[F,d]),WeekNumberHeader:A.useCallback(h=>v.createElement(Us,{above:"sm",asChild:!0},v.createElement("th",Object.assign({},h))),[]),Weekdays:A.useCallback(h=>v.createElement("thead",Object.assign({},h,{className:"rdp-head","aria-hidden":!0}),v.createElement("tr",{className:"rdp-head_row"},h.children)),[])},className:T("navds-date",r),disabled:h=>t&&$a(h)||pr(h,a)||am({day:h,fromDate:g,toDate:u}),weekStartsOn:1,modifiers:{weekend:h=>t&&$a(h)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:o,showOutsideDays:!0,startMonth:g,endMonth:u,month:im({month:k,start:g,end:u})},Be(O,["onSelect","role","id","defaultSelected"])))};var Em=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Am=A.forwardRef((e,r)=>{var{className:n,locale:a,translations:t,selected:s,defaultSelected:i,onSelect:o,mode:d}=e,g=Em(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ae(),k=Oa("DatePicker",t,Wo(a)),[m,p]=Ya({defaultValue:i,value:s,onChange:c=>o?.(c)});return v.createElement(Jo,{translate:k},v.createElement("div",{ref:r,className:u("navds-date__standalone-wrapper",n)},v.createElement(wl,Object.assign({},g,{locale:a,handleSelect:p,selected:m,mode:d}))))});var cm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const za=A.forwardRef((e,r)=>{var{children:n,locale:a,translations:t,selected:s,id:i,defaultSelected:o,wrapperClassName:d,open:g,onClose:u,onOpenToggle:k,strategy:m,mode:p}=e,c=cm(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const O=Oa("DatePicker",t,Wo(a)),{cn:T}=ae(),f=Hr(i),[R,F]=Ya({defaultValue:!1,value:g}),[h,y]=A.useState(null),b=it(y,r),[S,P]=Ya({defaultValue:o,value:s,onChange:M=>{var U;let j=!1;p==="single"&&M?j=!0:cl(M)&&M.from&&M.to&&(j=!0,Ps(M.from,M.to)&&(j=!1)),j&&(u?.(),F(!1)),(U=c?.onSelect)===null||U===void 0||U.call(c,M)}});return v.createElement(Jo,{translate:O},v.createElement(Jd,{open:R,onOpen:()=>{F(M=>!M),k?.()},ariaId:f,defined:!0},v.createElement("div",{ref:b,className:T("navds-date__wrapper",d)},n,v.createElement(Eg,{open:R,anchor:h,onClose:()=>{u?.(),R&&F(!1)},locale:a,translate:O,variant:p??"single",popoverProps:{id:f,strategy:m}},v.createElement(wl,Object.assign({},c,{locale:a,handleSelect:P,selected:S,mode:p}))))))});za.Standalone=Am;za.Input=zd;const fm=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),Rm=(e={})=>{var r;const{locale:n,required:a,defaultSelected:t,today:s=new Date,fromDate:i,toDate:o,disabled:d,disableWeekends:g,onDateChange:u,inputFormat:k,onValidate:m,defaultMonth:p,allowTwoDigitYear:c=!0}=e,[O,T]=A.useState(null),f=Co(),R=n?$o(n):f,[F,h]=A.useState(t),[y,b]=A.useState((r=F??p)!==null&&r!==void 0?r:s),[S,P]=A.useState(F),[M,U]=A.useState(!1),j=F?ia(F,R,"date",k):"",[D,K]=A.useState(j),Y=A.useCallback(z=>{var J,Ne;U(z),z&&b((Ne=(J=S??F)!==null&&J!==void 0?J:p)!==null&&Ne!==void 0?Ne:s)},[p,F,S,s]),C=z=>{u?.(z),P(z)},$=(z={})=>m?.(fm(z));return{datepickerProps:{month:y,onMonthChange:b,onDayClick:(z,{selected:J})=>{if(!(J&&a)){if(z&&!J&&(Y(!1),O?.focus()),J){C(void 0),K(""),$({isValidDate:!1,isEmpty:!0});return}C(z),$(),b(z),K(z?ia(z,R,"date",k):"")}},selected:S??new Date("Invalid date"),locale:n,fromDate:i,toDate:o,today:s,open:M,onClose:()=>{Y(!1),O?.focus()},onOpenToggle:()=>Y(!M),disabled:d,disableWeekends:g},inputProps:{onChange:z=>{K(z.target.value);const J=Yt(z.target.value,s,R,"date",c),Ne=i&&J&&nn(i,J)>0,we=o&&J&&nn(J,o)>0;if(!cr(J)||g&&$a(J)||d&&pr(J,d)){C(void 0),$({isInvalid:!cr(J),isWeekend:g&&$a(J),isDisabled:d&&pr(J,d),isValidDate:!1,isEmpty:!z.target.value,isBefore:Ne??!1,isAfter:we??!1});return}if(Ne||we){C(void 0),$({isValidDate:!1,isBefore:Ne??!1,isAfter:we??!1});return}C(J),$(),b(p??J)},onFocus:z=>{if(z.target.readOnly)return;const J=Yt(z.target.value,s,R,"date",c);if(cr(J)){K(ia(J,R,"date",k));const Ne=i&&J&&nn(i,J)>0,we=o&&J&&nn(J,o)>0;!Ne&&!we&&b(J)}},onBlur:z=>{const J=Yt(z.target.value,s,R,"date",c);cr(J)&&K(ia(J,R,"date",k))},value:D,setAnchorRef:T},reset:()=>{var z;C(F),b((z=F??p)!==null&&z!==void 0?z:s),K(j??""),h(t)},selectedDay:S,setSelected:z=>{var J;C(z),b((J=z??p)!==null&&J!==void 0?J:s),K(z?ia(z,R,"date",k):"")}}};var Fm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Om=A.forwardRef((e,r)=>{var{children:n,className:a,as:t="div",background:s,borderColor:i,borderWidth:o,borderRadius:d,shadow:g,style:u,asChild:k}=e,m=Fm(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:p}=ae(),c=Object.assign(Object.assign(Object.assign({},u),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":g?`var(--ax-shadow-${g})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":o?o.split(" ").map(T=>`${T}px`).join(" "):void 0}),Ns("ax","box","radius","radius",d,!1,["0"])),O=k?Fa:t;return v.createElement(bs,Object.assign({},m),v.createElement(O,Object.assign({},Be(m,hs),{ref:r,style:c,className:p("navds-box",a,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":o,"navds-box-radius":d,"navds-box-shadow":g})}),n))});var Nm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const bm=A.forwardRef((e,r)=>{var{children:n,className:a,as:t="div",background:s,borderColor:i,borderWidth:o,borderRadius:d,shadow:g,style:u,asChild:k}=e,m=Nm(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const p=fs(!1),{cn:c}=ae(),O=p?"ax":"a",T=Object.assign(Object.assign(Object.assign({},u),{[`--__${O}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${O}c-box-shadow`]:g?`var(--a-shadow-${g})`:void 0,[`--__${O}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${O}c-box-border-width`]:o?o.split(" ").map(R=>`${R}px`).join(" "):void 0}),Ns(O,"box","radius","radius",d,!1,["0"])),f=k?Fa:t;return v.createElement(bs,Object.assign({},m),v.createElement(f,Object.assign({},Be(m,hs),{ref:r,style:T,className:c("navds-box",a,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":o,"navds-box-border-radius":d,"navds-box-shadow":g})}),n))}),Ka=bm;Ka.New=Om;var hm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const QE=A.forwardRef((e,r)=>{var{children:n,className:a,as:t="div",columns:s,gap:i,style:o,align:d,asChild:g}=e,u=hm(e,["children","className","as","columns","gap","style","align","asChild"]);const m=fs(!1)?"ax":"a",{cn:p}=ae(),c=Object.assign(Object.assign(Object.assign(Object.assign({},o),{[`--__${m}c-hgrid-align`]:d}),Ns(m,"hgrid","gap","spacing",i)),Xd(m,"hgrid","columns",Sm(s))),O=g?Fa:t;return v.createElement(bs,Object.assign({},u),v.createElement(O,Object.assign({},Be(u,hs),{ref:r,className:p("navds-hgrid",a,{"navds-hgrid-gap":i,"navds-hgrid-align":d}),style:c}),n))});function Sm(e){return e?typeof e=="string"||typeof e=="number"?Bi(e):Object.fromEntries(Object.entries(e).map(([r,n])=>[r,Bi(n)])):{}}const Bi=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var _m=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Km=A.forwardRef((e,r)=>{var{className:n}=e,a=_m(e,["className"]);const{cn:t}=ae();return v.createElement("tbody",Object.assign({},a,{ref:r,className:t("navds-table__body",n)}))});var Pm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Ul=A.forwardRef((e,r)=>{var{className:n,children:a,align:t,textSize:s}=e,i=Pm(e,["className","children","align","textSize"]);const{cn:o}=ae();return v.createElement("th",Object.assign({ref:r,className:o("navds-table__header-cell","navds-label",n,{[`navds-table__header-cell--align-${t}`]:t,"navds-label--small":s==="small"})},i),a)}),Gl=A.createContext(null);var Dm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Mm=A.forwardRef((e,r)=>{var n,a,t,s,{className:i,children:o,sortable:d=!1,sortKey:g}=e,u=Dm(e,["className","children","sortable","sortKey"]);const k=A.useContext(Gl),{cn:m}=ae();return d&&!g&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),v.createElement(Ul,Object.assign({scope:"col",ref:r,className:m(i),"aria-sort":d?((n=k?.sort)===null||n===void 0?void 0:n.orderBy)===g?(a=k?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},u),d?v.createElement("button",{type:"button",className:m("navds-table__sort-button"),onClick:d&&g?()=>{var p;return(p=k?.onSortChange)===null||p===void 0?void 0:p.call(k,g)}:void 0},o,((t=k?.sort)===null||t===void 0?void 0:t.orderBy)===g?((s=k?.sort)===null||s===void 0?void 0:s.direction)==="descending"?v.createElement(Tu,{"aria-hidden":!0}):v.createElement(Au,{"aria-hidden":!0}):v.createElement(uu,{"aria-hidden":!0})):o)});var Vm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Bl=A.forwardRef((e,r)=>{var{className:n,children:a="",align:t,textSize:s}=e,i=Vm(e,["className","children","align","textSize"]);const{cn:o}=ae();return v.createElement(Ze,Object.assign({as:"td",ref:r,className:o("navds-table__data-cell",n,{[`navds-table__data-cell--align-${t}`]:t}),size:s},i),a)});var Im=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const qm=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function jm(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function xi(e){return typeof e=="string"&&e[e.length-1]==="%"&&jm(e.substring(0,e.length-1))}function $t(e,r){r===0&&e?.style&&(e.style.display="none")}function Lm(e,r){r===0&&e?.style&&(e.style.display="")}const wm=e=>{var{children:r,className:n,innerClassName:a,duration:t=250,easing:s="ease",height:i}=e,o=Im(e,["children","className","innerClassName","duration","easing","height"]);const{cn:d}=ae(),g=A.useRef(i),u=A.useRef(null),k=A.useRef(),m=A.useRef(),p=A.useRef(i),c=A.useRef("visible"),O=qm?0:t;typeof p.current=="number"?(typeof i!="string"&&(p.current=i<0?0:i),c.current="hidden"):xi(p.current)&&(p.current=i==="0%"?0:i,c.current="hidden");const[T,f]=A.useState(p.current),[R,F]=A.useState(c.current),[h,y]=A.useState(!1);A.useEffect(()=>{$t(u.current,p.current)},[]),A.useEffect(()=>{if(i!==g.current&&u.current){Lm(u.current,g.current),u.current.style.overflow="hidden";const M=u.current.offsetHeight;u.current.style.overflow="";const U=O;let j,D,K="hidden",Y;const C=g.current==="auto";typeof i=="number"?(j=i<0?0:i,D=j):xi(i)?(j=i==="0%"?0:i,D=j):(j=M,D="auto",K=void 0),C&&(D=j,j=M),f(j),F("hidden"),y(!C),clearTimeout(m.current),clearTimeout(k.current),C?(Y=!0,m.current=setTimeout(()=>{f(D),F(K),y(Y)},50),k.current=setTimeout(()=>{y(!1),$t(u.current,D)},U)):m.current=setTimeout(()=>{f(D),F(K),y(!1),i!=="auto"&&$t(u.current,j)},U)}return g.current=i,()=>{clearTimeout(m.current),clearTimeout(k.current)}},[i]);const b={height:T,overflow:R};h&&(b.transition=`height ${O}ms ${s} 0ms`,b.WebkitTransition=b.transition);const P=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return v.createElement("div",Object.assign({},o,{className:d(n),style:b}),v.createElement("div",{"aria-hidden":P,className:d(a),ref:u},r))};var Um=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const xl=A.forwardRef((e,r)=>{var{className:n,selected:a=!1,shadeOnHover:t=!0}=e,s=Um(e,["className","selected","shadeOnHover"]);const{cn:i}=ae();return v.createElement("tr",Object.assign({},s,{ref:r,className:i("navds-table__row",n,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":t})}))});var Gm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Bm=A.forwardRef((e,r)=>{var{className:n,children:a,content:t,togglePlacement:s="left",defaultOpen:i=!1,open:o,onOpenChange:d,expansionDisabled:g=!1,expandOnRowClick:u=!1,colSpan:k=999,contentGutter:m,onClick:p}=e,c=Gm(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:O}=ae(),[T,f]=Ya({defaultValue:i,value:o,onChange:d}),R=Oa("global"),F=Hr(),h=b=>{f(S=>!S),b.stopPropagation()},y=b=>{u&&!g&&!Hl(b.target)&&h(b)};return v.createElement(v.Fragment,null,v.createElement(xl,Object.assign({},c,{ref:r,className:O("navds-table__expandable-row",n,{"navds-table__expandable-row--open":T,"navds-table__expandable-row--expansion-disabled":g,"navds-table__expandable-row--clickable":u}),onClick:zo(p,y)}),s==="right"&&a,v.createElement(Bl,{className:O("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":T}),onClick:g?()=>null:h},!g&&v.createElement("button",{className:O("navds-table__toggle-expand-button"),type:"button","aria-controls":F,"aria-expanded":T,onClick:h},v.createElement(ut,{className:O("navds-table__expandable-icon"),title:R(T?"showLess":"showMore")}))),s==="left"&&a),v.createElement("tr",{"data-state":T?"open":"closed",className:O("navds-table__expanded-row"),"aria-hidden":!T,id:F},v.createElement("td",{colSpan:k,className:O("navds-table__expanded-row-cell")},v.createElement(wm,{className:O("navds-table__expanded-row-collapse"),innerClassName:O(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${m??s}`),height:T?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},t))))});function Hl(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Hl(e.parentElement)}var xm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Hm=A.forwardRef((e,r)=>{var{className:n}=e,a=xm(e,["className"]);const{cn:t}=ae();return v.createElement("thead",Object.assign({},a,{ref:r,className:t("navds-table__header",n)}))});var Ym=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const de=A.forwardRef((e,r)=>{var{className:n,zebraStripes:a=!1,size:t="medium",onSortChange:s,sort:i,stickyHeader:o=!1}=e,d=Ym(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:g}=ae();return v.createElement(Gl.Provider,{value:{onSortChange:s,sort:i}},v.createElement("table",Object.assign({},d,{ref:r,className:g("navds-table",`navds-table--${t}`,n,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":o})})))});de.Header=Hm;de.Body=Km;de.Row=xl;de.ColumnHeader=Mm;de.HeaderCell=Ul;de.DataCell=Bl;de.ExpandableRow=Bm;var Cm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const $m=A.forwardRef((e,r)=>{var{children:n,className:a,variant:t,size:s="medium",icon:i,"data-color":o}=e,d=Cm(e,["children","className","variant","size","icon","data-color"]);const{cn:g}=ae(),u=t?.endsWith("-filled")&&"strong",k=t?.endsWith("-moderate")&&"moderate";return v.createElement(Ze,Object.assign({"data-color":o??Wm(t),"data-variant":u||k||"outline"},d,{ref:r,as:"span",size:s==="medium"?"medium":"small",className:g("navds-tag",a,`navds-tag--${t}`,`navds-tag--${s}`)}),i&&v.createElement("span",{className:g("navds-tag__icon--left")},i),n)});function Wm(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const Jm=e=>{const r=Hn(e,"fieldset"),{inputProps:n}=r;return Object.assign(Object.assign({},r),{inputProps:{"aria-invalid":n["aria-invalid"],"aria-describedby":n["aria-describedby"]}})};var zm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Gs=A.forwardRef((e,r)=>{var n,a,t;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:d,size:g,readOnly:u,inputDescriptionId:k}=Jm(e),{cn:m}=ae(),p=A.useContext(Ha),{children:c,className:O,errorPropagation:T=!0,legend:f,description:R,hideLegend:F,nativeReadOnly:h=!0}=e,y=zm(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(Ha.Provider,{value:{error:T?(n=e.error)!==null&&n!==void 0?n:p?.error:void 0,errorId:Rs({[i]:o,[(a=p?.errorId)!==null&&a!==void 0?a:""]:!!p?.error}),size:g,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:u}},v.createElement("fieldset",Object.assign({},Be(y,["errorId","error","size","readOnly"]),Be(s,["aria-describedby","aria-invalid"]),{ref:r,className:m(O,"navds-fieldset",`navds-fieldset--${g}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":u})}),v.createElement(kr,{size:g,as:"legend",className:m("navds-fieldset__legend",{"navds-sr-only":!!F})},u&&(h?v.createElement(Ss,null):v.createElement(Fs,null)),f),!!R&&v.createElement(Ze,{className:m("navds-fieldset__description",{"navds-sr-only":!!F}),id:k,size:g??"medium",as:"div"},e.description),c,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:m("navds-fieldset__error")},o&&v.createElement($r,{size:g,showIcon:!0},e.error))))});var Xm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Yl=A.createContext(null),Zm=A.forwardRef((e,r)=>{var n,a,{value:t,defaultValue:s,onChange:i=()=>{},children:o,className:d}=e,g=Xm(e,["value","defaultValue","onChange","children","className"]);const{cn:u}=ae(),k=A.useContext(Ha),[m,p]=A.useState(s??[]),c=O=>{const T=t??m,f=T.includes(O)?T.filter(R=>R!==O):[...T,O];t===void 0&&p(f),i(f)};return v.createElement(Gs,Object.assign({},g,{ref:r,className:u(d,"navds-checkbox-group",`navds-checkbox-group--${(a=(n=g.size)!==null&&n!==void 0?n:k?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),v.createElement(Yl.Provider,{value:{value:t,defaultValue:s,toggleValue:c}},v.createElement("div",{className:u("navds-checkboxes")},o)))});var Qm=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const ep=e=>{const r=A.useContext(Yl),n=Hn(Be(e,["description","children"]),"checkbox"),{inputProps:a,readOnly:t}=n,s=Qm(n,["inputProps","readOnly"]);return r&&(e.checked&&console.warn("`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead."),e.value===void 0&&console.warn("A <Checkbox> element within a <CheckboxGroup> requires a `value` property.")),Object.assign(Object.assign({},s),{readOnly:t,nested:!!r,inputProps:Object.assign(Object.assign({},a),{checked:r?.value?r.value.includes(e.value):e.checked,defaultChecked:r?.defaultValue?r.defaultValue.includes(e.value):e.defaultChecked,onChange:i=>{var o;t||((o=e.onChange)===null||o===void 0||o.call(e,i),r?.toggleValue(e.value))},onClick:i=>{var o;if(t){i.preventDefault();return}(o=e?.onClick)===null||o===void 0||o.call(e,i)}})})},Pa=A.forwardRef((e,r)=>{const{cn:n}=ae(),{inputProps:a,hasError:t,size:s,readOnly:i,nested:o}=ep(e),d=Hr(),g=Hr();return v.createElement("div",{className:n(e.className,"navds-checkbox",`navds-checkbox--${s}`,{"navds-checkbox--error":t,"navds-checkbox--disabled":a.disabled,"navds-checkbox--readonly":i}),"data-color":t?"danger":e["data-color"]},v.createElement("input",Object.assign({},Be(e,["children","size","error","description","hideLabel","indeterminate","errorId","readOnly"]),Be(a,["aria-invalid"]),{type:"checkbox",className:n("navds-checkbox__input"),ref:u=>{var k;u&&(u.indeterminate=(k=e.indeterminate)!==null&&k!==void 0?k:!1),typeof r=="function"?r(u):r!=null&&(r.current=u)},"aria-labelledby":n(d,!!e["aria-labelledby"]&&e["aria-labelledby"],{[g]:e.description})})),v.createElement("label",{htmlFor:a.id,className:n("navds-checkbox__label")},v.createElement("span",{className:n("navds-checkbox__icon")},v.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.8125rem",height:"0.625rem",viewBox:"0 0 13 10",fill:"none",focusable:!1,role:"img","aria-hidden":!0},v.createElement("path",{d:"M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z",fill:"currentColor"}))),v.createElement("span",{className:n("navds-checkbox__icon-indeterminate")}),v.createElement("span",{className:n("navds-checkbox__content",{"navds-sr-only":e.hideLabel})},v.createElement(Ze,{as:"span",id:d,size:s,className:n("navds-checkbox__label-text"),"aria-hidden":!0},!o&&i&&v.createElement(Fs,null),e.children),e.description&&v.createElement(Ze,{as:"span",id:g,size:s,className:n("navds-form-field__subdescription navds-checkbox__description"),"aria-hidden":!0},e.description))))});var rp=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Cl=v.createContext(null),np=A.forwardRef((e,r)=>{var n,a,{children:t,className:s,name:i,defaultValue:o,value:d,onChange:g=()=>{},required:u,readOnly:k}=e,m=rp(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:p}=ae(),c=A.useContext(Ha),O=Hr();return v.createElement(Gs,Object.assign({},m,{readOnly:k,ref:r,className:p(s,"navds-radio-group",`navds-radio-group--${(a=(n=m.size)!==null&&n!==void 0?n:c?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),v.createElement(Cl.Provider,{value:{name:i??`radioGroupName-${O}`,defaultValue:o,value:d,onChange:g,required:u}},v.createElement("div",{className:p("navds-radio-buttons")},t)))});var ap=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const tp=e=>{const r=A.useContext(Cl),n=Hn(Be(e,["description"]),"radio"),{inputProps:a,readOnly:t}=n,s=ap(n,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:t,inputProps:Object.assign(Object.assign({},a),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var o,d;t||((o=e.onChange)===null||o===void 0||o.call(e,i),(d=r?.onChange)===null||d===void 0||d.call(r,e.value))},onClick:i=>{var o;if(t){i.preventDefault();return}(o=e?.onClick)===null||o===void 0||o.call(e,i)},required:r?.required,type:"radio"})})},Hi=A.forwardRef((e,r)=>{const{cn:n}=ae(),{inputProps:a,size:t,hasError:s,readOnly:i}=tp(e),o=Hr(),d=Hr();return v.createElement("div",{className:n(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":s,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":s?"danger":e["data-color"]},v.createElement("input",Object.assign({},Be(e,["children","size","description","readOnly"]),Be(a,["aria-invalid"]),{"aria-labelledby":Rs(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[d]:e.description}),className:n("navds-radio__input"),ref:r})),v.createElement("label",{htmlFor:a.id,className:n("navds-radio__label")},v.createElement("span",{className:n("navds-radio__content")},v.createElement(Ze,{as:"span",id:o,size:t,"aria-hidden":!0},e.children),e.description&&v.createElement(Ze,{as:"span",id:d,size:t,className:n("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var sp=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const Yi=(e,r,n)=>{const{outerHeightStyle:a,overflow:t}=r;return n.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==t)?(n.current+=1,r):e},Ci=e=>(e?.ownerDocument||document).defaultView||window;function Ia(e){return parseInt(e,10)||0}const ip=A.forwardRef((e,r)=>{var n,a,{className:t,onChange:s,maxRows:i,minRows:o=1,autoScrollbar:d,style:g,value:u}=e,k=sp(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:m}=A.useRef(u!=null),p=A.useRef(null),c=it(p,r),O=A.useRef(null),T=A.useRef(0),[f,R]=A.useState({outerHeightStyle:0}),F=v.useCallback(()=>{const S=p.current,M=Ci(S).getComputedStyle(S);if(M.width==="0px")return{outerHeightStyle:0};const U=O.current;U.style.width=M.width,U.value=S.value||k.placeholder||"x",U.value.slice(-1)===`
`&&(U.value+=" ");const j=M.boxSizing,D=Ia(M.paddingBottom)+Ia(M.paddingTop),K=Ia(M.borderBottomWidth)+Ia(M.borderTopWidth),Y=U.scrollHeight-D;U.value="x";const C=U.scrollHeight-D;let $=Y;o&&($=Math.max(Number(o)*C,$)),i&&($=Math.min(Number(i)*C,$)),$=Math.max($,C);const fe=$+(j==="border-box"?D+K:0),te=Math.abs($-Y)<=1;return{outerHeightStyle:fe,overflow:te}},[i,o,k.placeholder]),h=()=>{const S=F();$i(S)||R(P=>Yi(P,S,T))};Bn(()=>{const S=()=>{const D=F();$i(D)||Ho.flushSync(()=>{R(K=>Yi(K,D,T))})},P=Zo(()=>{var D,K,Y;if(T.current=0,!((D=p.current)===null||D===void 0)&&D.style.height||!((K=p.current)===null||K===void 0)&&K.style.width){((Y=p.current)===null||Y===void 0?void 0:Y.style.overflow)==="hidden"&&R(C=>Object.assign(Object.assign({},C),{overflow:!1}));return}S()},166,!0),M=p.current,U=Ci(M);U.addEventListener("resize",P);let j;return typeof ResizeObserver<"u"&&(j=new ResizeObserver(P),j.observe(M)),()=>{P.clear(),U.removeEventListener("resize",P),j&&j.disconnect()}},[F]),Bn(()=>{h()}),A.useEffect(()=>{T.current=0},[u]);const y=S=>{T.current=0,m||h(),s&&s(S)},b=Object.assign({"--__ac-textarea-height":f.outerHeightStyle+"px","--__axc-textarea-height":f.outerHeightStyle+"px",overflow:f.overflow&&!d&&!(!((n=p.current)===null||n===void 0)&&n.style.height)&&!(!((a=p.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},g);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:u,onChange:y,ref:c,rows:o,style:b},k,{className:t})),v.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:O,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},g)}))});function $i(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const op=({maxLengthId:e,maxLength:r,currentLength:n,size:a,i18n:t})=>{const{cn:s}=ae(),i=Oa("Textarea",{charsLeft:t?.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t?.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),o=r-n,[d,g]=A.useState(o);return A.useEffect(()=>{const u=Zo(()=>{g(o)},2e3);return u(),()=>{u.clear()}},[o]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:r})),o<20&&v.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},Wi(d,i)),v.createElement(Ze,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:a},Wi(o,i)))},Wi=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var lp=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const dp=A.forwardRef((e,r)=>{var n,a,t;const{inputProps:s,errorId:i,showErrorMsg:o,hasError:d,size:g,inputDescriptionId:u}=Hn(e,"textarea"),{label:k,className:m,description:p,maxLength:c,hideLabel:O=!1,resize:T,UNSAFE_autoScrollbar:f,i18n:R,readOnly:F}=e,h=lp(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:y}=ae(),b=Hr(),S=c!==void 0&&c>0,[P,M]=A.useState((n=e?.defaultValue)!==null&&n!==void 0?n:""),U=()=>{let D=h?.minRows?h?.minRows:3;return g==="small"&&(D=h?.minRows?h?.minRows:2),D},j=Rs(s["aria-describedby"],{[b??""]:S});return v.createElement("div",{className:y(m,"navds-form-field",`navds-form-field--${g}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":F,"navds-textarea--readonly":F,"navds-textarea--error":d,"navds-textarea--autoscrollbar":f,[`navds-textarea--resize-${T===!0?"both":T}`]:T})},v.createElement(kr,{htmlFor:s.id,size:g,className:y("navds-form-field__label",{"navds-sr-only":O})},F&&v.createElement(Ss,null),k),!!p&&v.createElement(Ze,{className:y("navds-form-field__description",{"navds-sr-only":O}),id:u,size:g,as:"div"},p),v.createElement(ip,Object.assign({},Be(h,["error","errorId","size"]),s,{onChange:zo(e.onChange,e.value===void 0?D=>M(D.target.value):void 0),minRows:U(),autoScrollbar:f,ref:r,readOnly:F,className:y("navds-textarea__input","navds-body-short",`navds-body-short--${g??"medium"}`)},j?{"aria-describedby":j}:{})),S&&!F&&!s.disabled&&v.createElement(op,{maxLengthId:b,maxLength:c,currentLength:(t=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&t!==void 0?t:P.length,size:g,i18n:R}),v.createElement("div",{className:y("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&v.createElement($r,{size:g,showIcon:!0},e.error)))});var up=function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]]);return n};const kp=A.forwardRef((e,r)=>{const{cn:n}=ae(),{inputProps:a,errorId:t,showErrorMsg:s,hasError:i,size:o,inputDescriptionId:d}=Hn(e,"textField"),{label:g,className:u,description:k,htmlSize:m,hideLabel:p=!1,type:c="text",readOnly:O}=e,T=up(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return v.createElement("div",{className:n(u,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!a.disabled,"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":O,"navds-text-field--readonly":O})},v.createElement(kr,{htmlFor:a.id,size:o,className:n("navds-form-field__label",{"navds-sr-only":p})},O&&v.createElement(Ss,null),g),!!k&&v.createElement(Ze,{className:n("navds-form-field__description",{"navds-sr-only":p}),id:d,size:o,as:"div"},k),v.createElement("input",Object.assign({},Be(T,["error","errorId","size"]),a,{ref:r,type:c,readOnly:O,className:n("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:m})),v.createElement("div",{className:n("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement($r,{size:o,showIcon:!0},e.error)))});function gp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ji={exports:{}},oa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi;function vp(){if(zi)return oa;zi=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(a,t,s){var i=null;if(s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),"key"in t){s={};for(var o in t)o!=="key"&&(s[o]=t[o])}else s=t;return t=s.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:s}}return oa.Fragment=r,oa.jsx=n,oa.jsxs=n,oa}var Xi;function mp(){return Xi||(Xi=1,Ji.exports=vp()),Ji.exports}var We=mp();const eA=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:We.jsx(ot,{variant:"warning",size:"small",children:We.jsx(X,{gap:"2",children:v.Children.map(e,r=>We.jsx(Ze,{size:"small",children:r},Zd(r)?r.key:r))})}),Da={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};ce(Da);const Xa="#B7B1A9",$l=4,pp=(e,r,n)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${Xa};
    border-radius: ${$l}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Xa};
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
`,yp=(e,r,n)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${Xa};
    border-radius: ${$l}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${r}px;
    margin-left: ${n}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${Xa};
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
`,Tp=(e,r,n,a)=>r?yp(e,n,a):pp(e,n,a),Ep=(e,r,n)=>n?"":r?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,ar=({children:e,alignOffset:r=0,alignLeft:n=!1,marginTop:a=0,marginLeft:t=0,hideBorder:s=!1})=>We.jsxs(We.Fragment,{children:[We.jsx("style",{dangerouslySetInnerHTML:{__html:Tp(r,n,a,t)}}),We.jsx("div",{className:Ep(r,n,s),children:e})]});var Zi={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qi;function Ap(){return Qi||(Qi=1,function(e){(function(){var r={}.hasOwnProperty;function n(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=t(s,a.call(this,o)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)r.call(s,o)&&s[o]&&(i=t(i,this&&this[o]||o));return i}function t(s,i){return i?s?s+" "+i:s+i:s}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Zi)),Zi.exports}var cp=Ap();const Bs=gp(cp),fp="_borderbox_1vkvn_1",Rp="_error_1vkvn_5",Fp="_warning_1vkvn_8",Op={borderbox:fp,error:Rp,warning:Fp},Np=Bs.bind(Op),xe=({error:e=!1,className:r,children:n})=>We.jsx(Ka,{padding:"4",className:Np("borderbox",{error:e},r),children:n}),bp="_aksjonspunkt_kn1hn_1",hp="_erAksjonspunktApent_kn1hn_4",Sp="_erIkkeGodkjentAvBeslutter_kn1hn_8",_p={aksjonspunkt:bp,erAksjonspunktApent:hp,erIkkeGodkjentAvBeslutter:Sp};Bs.bind(_p);ce(Da);ce(Da);const Kp="_divider_1t980_1",Pp="_dividerParagraf_1t980_8",Dp="_leftPanel_1t980_11",Mp="_rightPanel_1t980_14",gs={divider:Kp,dividerParagraf:Pp,leftPanel:Dp,rightPanel:Mp},Vp=Bs.bind(gs),Ip=({spaceUnder:e=!1,spaceAbove:r=!1,leftPanel:n=!1,rightPanel:a=!1,dividerParagraf:t=!1,className:s})=>We.jsxs(We.Fragment,{children:[r&&We.jsx("div",{style:{marginBottom:"32px"}}),We.jsx("div",{className:Vp(s,{leftPanel:n,rightPanel:a}),children:We.jsx("div",{className:t?gs.dividerParagraf:gs.divider})}),e&&We.jsx("div",{style:{marginBottom:"32px"}})]}),xs=()=>We.jsx("span",{"data-testid":"editedIcon",children:We.jsx(mu,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});ce(Da);ce(Da);var Ma=e=>e.type==="checkbox",Tn=e=>e instanceof Date,Xe=e=>e==null;const Wl=e=>typeof e=="object";var Pe=e=>!Xe(e)&&!Array.isArray(e)&&Wl(e)&&!Tn(e),Jl=e=>Pe(e)&&e.target?Ma(e.target)?e.target.checked:e.target.value:e,qp=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,zl=(e,r)=>e.has(qp(r)),jp=e=>{const r=e.constructor&&e.constructor.prototype;return Pe(r)&&r.hasOwnProperty("isPrototypeOf")},Hs=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ye(e){let r;const n=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(Hs&&(e instanceof Blob||a))&&(n||Pe(e)))if(r=n?[]:{},!n&&!jp(e))r=e;else for(const t in e)e.hasOwnProperty(t)&&(r[t]=ye(e[t]));else return e;return r}var pt=e=>/^\w*$/.test(e),Te=e=>e===void 0,yt=e=>Array.isArray(e)?e.filter(Boolean):[],Ys=e=>yt(e.replace(/["|']|\]/g,"").split(/\.|\[/)),q=(e,r,n)=>{if(!r||!Pe(e))return n;const a=(pt(r)?[r]:Ys(r)).reduce((t,s)=>Xe(t)?t:t[s],e);return Te(a)||a===e?Te(e[r])?n:e[r]:a},lr=e=>typeof e=="boolean",ge=(e,r,n)=>{let a=-1;const t=pt(r)?[r]:Ys(r),s=t.length,i=s-1;for(;++a<s;){const o=t[a];let d=n;if(a!==i){const g=e[o];d=Pe(g)||Array.isArray(g)?g:isNaN(+t[a+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=d,e=e[o]}};const Za={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},mr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},wr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Cs=v.createContext(null);Cs.displayName="HookFormContext";const H=()=>v.useContext(Cs),Lp=e=>{const{children:r,...n}=e;return v.createElement(Cs.Provider,{value:n},r)};var Xl=(e,r,n,a=!0)=>{const t={defaultValues:r._defaultValues};for(const s in e)Object.defineProperty(t,s,{get:()=>{const i=s;return r._proxyFormState[i]!==mr.all&&(r._proxyFormState[i]=!a||mr.all),n&&(n[i]=!0),e[i]}});return t};const Tt=typeof window<"u"?v.useLayoutEffect:v.useEffect;function wp(e){const r=H(),{control:n=r.control,disabled:a,name:t,exact:s}=e||{},[i,o]=v.useState(n._formState),d=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Tt(()=>n._subscribe({name:t,formState:d.current,exact:s,callback:g=>{!a&&o({...n._formState,...g})}}),[t,a,s]),v.useEffect(()=>{d.current.isValid&&n._setValid(!0)},[n]),v.useMemo(()=>Xl(i,n,d.current,!1),[i,n])}var Vr=e=>typeof e=="string",Zl=(e,r,n,a,t)=>Vr(e)?(a&&r.watch.add(e),q(n,e,t)):Array.isArray(e)?e.map(s=>(a&&r.watch.add(s),q(n,s))):(a&&(r.watchAll=!0),n),vs=e=>Xe(e)||!Wl(e);function Br(e,r,n=new WeakSet){if(vs(e)||vs(r))return e===r;if(Tn(e)&&Tn(r))return e.getTime()===r.getTime();const a=Object.keys(e),t=Object.keys(r);if(a.length!==t.length)return!1;if(n.has(e)||n.has(r))return!0;n.add(e),n.add(r);for(const s of a){const i=e[s];if(!t.includes(s))return!1;if(s!=="ref"){const o=r[s];if(Tn(i)&&Tn(o)||Pe(i)&&Pe(o)||Array.isArray(i)&&Array.isArray(o)?!Br(i,o,n):i!==o)return!1}}return!0}function Up(e){const r=H(),{control:n=r.control,name:a,defaultValue:t,disabled:s,exact:i,compute:o}=e||{},d=v.useRef(t),g=v.useRef(o),u=v.useRef(void 0);g.current=o;const k=v.useMemo(()=>n._getWatch(a,d.current),[n,a]),[m,p]=v.useState(g.current?g.current(k):k);return Tt(()=>n._subscribe({name:a,formState:{values:!0},exact:i,callback:c=>{if(!s){const O=Zl(a,n._names,c.values||n._formValues,!1,d.current);if(g.current){const T=g.current(O);Br(T,u.current)||(p(T),u.current=T)}else p(O)}}}),[n,s,a,i]),v.useEffect(()=>n._removeUnmounted()),m}function bn(e){const r=H(),{name:n,disabled:a,control:t=r.control,shouldUnregister:s,defaultValue:i}=e,o=zl(t._names.array,n),d=v.useMemo(()=>q(t._formValues,n,q(t._defaultValues,n,i)),[t,n,i]),g=Up({control:t,name:n,defaultValue:d,exact:!0}),u=wp({control:t,name:n,exact:!0}),k=v.useRef(e),m=v.useRef(t.register(n,{...e.rules,value:g,...lr(e.disabled)?{disabled:e.disabled}:{}}));k.current=e;const p=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!q(u.errors,n)},isDirty:{enumerable:!0,get:()=>!!q(u.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!q(u.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!q(u.validatingFields,n)},error:{enumerable:!0,get:()=>q(u.errors,n)}}),[u,n]),c=v.useCallback(R=>m.current.onChange({target:{value:Jl(R),name:n},type:Za.CHANGE}),[n]),O=v.useCallback(()=>m.current.onBlur({target:{value:q(t._formValues,n),name:n},type:Za.BLUR}),[n,t._formValues]),T=v.useCallback(R=>{const F=q(t._fields,n);F&&R&&(F._f.ref={focus:()=>R.focus&&R.focus(),select:()=>R.select&&R.select(),setCustomValidity:h=>R.setCustomValidity(h),reportValidity:()=>R.reportValidity()})},[t._fields,n]),f=v.useMemo(()=>({name:n,value:g,...lr(a)||u.disabled?{disabled:u.disabled||a}:{},onChange:c,onBlur:O,ref:T}),[n,a,u.disabled,c,O,T,g]);return v.useEffect(()=>{const R=t._options.shouldUnregister||s;t.register(n,{...k.current.rules,...lr(k.current.disabled)?{disabled:k.current.disabled}:{}});const F=(h,y)=>{const b=q(t._fields,h);b&&b._f&&(b._f.mount=y)};if(F(n,!0),R){const h=ye(q(t._options.defaultValues,n));ge(t._defaultValues,n,h),Te(q(t._formValues,n))&&ge(t._formValues,n,h)}return!o&&t.register(n),()=>{(o?R&&!t._state.action:R)?t.unregister(n):F(n,!1)}},[n,t,o,s]),v.useEffect(()=>{t._setDisabledField({disabled:a,name:n})},[a,n,t]),v.useMemo(()=>({field:f,formState:u,fieldState:p}),[f,u,p])}var Gp=(e,r,n,a,t)=>r?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[a]:t||!0}}:{},nr=e=>Array.isArray(e)?e:[e],eo=()=>{let e=[];return{get observers(){return e},next:t=>{for(const s of e)s.next&&s.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(s=>s!==t)}}),unsubscribe:()=>{e=[]}}},ze=e=>Pe(e)&&!Object.keys(e).length,$s=e=>e.type==="file",Er=e=>typeof e=="function",Qa=e=>{if(!Hs)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Ql=e=>e.type==="select-multiple",Ws=e=>e.type==="radio",Bp=e=>Ws(e)||Ma(e),Wt=e=>Qa(e)&&e.isConnected;function xp(e,r){const n=r.slice(0,-1).length;let a=0;for(;a<n;)e=Te(e)?a++:e[r[a++]];return e}function Hp(e){for(const r in e)if(e.hasOwnProperty(r)&&!Te(e[r]))return!1;return!0}function be(e,r){const n=Array.isArray(r)?r:pt(r)?[r]:Ys(r),a=n.length===1?e:xp(e,n),t=n.length-1,s=n[t];return a&&delete a[s],t!==0&&(Pe(a)&&ze(a)||Array.isArray(a)&&Hp(a))&&be(e,n.slice(0,-1)),e}var ed=e=>{for(const r in e)if(Er(e[r]))return!0;return!1};function et(e,r={}){const n=Array.isArray(e);if(Pe(e)||n)for(const a in e)Array.isArray(e[a])||Pe(e[a])&&!ed(e[a])?(r[a]=Array.isArray(e[a])?[]:{},et(e[a],r[a])):Xe(e[a])||(r[a]=!0);return r}function rd(e,r,n){const a=Array.isArray(e);if(Pe(e)||a)for(const t in e)Array.isArray(e[t])||Pe(e[t])&&!ed(e[t])?Te(r)||vs(n[t])?n[t]=Array.isArray(e[t])?et(e[t],[]):{...et(e[t])}:rd(e[t],Xe(r)?{}:r[t],n[t]):n[t]=!Br(e[t],r[t]);return n}var la=(e,r)=>rd(e,r,et(r));const ro={value:!1,isValid:!1},no={value:!0,isValid:!0};var nd=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Te(e[0].attributes.value)?Te(e[0].value)||e[0].value===""?no:{value:e[0].value,isValid:!0}:no:ro}return ro},ad=(e,{valueAsNumber:r,valueAsDate:n,setValueAs:a})=>Te(e)?e:r?e===""?NaN:e&&+e:n&&Vr(e)?new Date(e):a?a(e):e;const ao={isValid:!1,value:null};var td=e=>Array.isArray(e)?e.reduce((r,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:r,ao):ao;function to(e){const r=e.ref;return $s(r)?r.files:Ws(r)?td(e.refs).value:Ql(r)?[...r.selectedOptions].map(({value:n})=>n):Ma(r)?nd(e.refs).value:ad(Te(r.value)?e.ref.value:r.value,e)}var Yp=(e,r,n,a)=>{const t={};for(const s of e){const i=q(r,s);i&&ge(t,s,i._f)}return{criteriaMode:n,names:[...e],fields:t,shouldUseNativeValidation:a}},rt=e=>e instanceof RegExp,da=e=>Te(e)?e:rt(e)?e.source:Pe(e)?rt(e.value)?e.value.source:e.value:e,jn=e=>({isOnSubmit:!e||e===mr.onSubmit,isOnBlur:e===mr.onBlur,isOnChange:e===mr.onChange,isOnAll:e===mr.all,isOnTouch:e===mr.onTouched});const so="AsyncFunction";var Cp=e=>!!e&&!!e.validate&&!!(Er(e.validate)&&e.validate.constructor.name===so||Pe(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===so)),$p=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),ms=(e,r,n)=>!n&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const Un=(e,r,n,a)=>{for(const t of n||Object.keys(e)){const s=q(e,t);if(s){const{_f:i,...o}=s;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],t)&&!a)return!0;if(i.ref&&r(i.ref,i.name)&&!a)return!0;if(Un(o,r))break}else if(Pe(o)&&Un(o,r))break}}};function io(e,r,n){const a=q(e,n);if(a||pt(n))return{error:a,name:n};const t=n.split(".");for(;t.length;){const s=t.join("."),i=q(r,s),o=q(e,s);if(i&&!Array.isArray(i)&&n!==s)return{name:n};if(o&&o.type)return{name:s,error:o};if(o&&o.root&&o.root.type)return{name:`${s}.root`,error:o.root};t.pop()}return{name:n}}var Wp=(e,r,n,a)=>{n(e);const{name:t,...s}=e;return ze(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(i=>r[i]===(!a||mr.all))},Jp=(e,r,n)=>!e||!r||e===r||nr(e).some(a=>a&&(n?a===r:a.startsWith(r)||r.startsWith(a))),zp=(e,r,n,a,t)=>t.isOnAll?!1:!n&&t.isOnTouch?!(r||e):(n?a.isOnBlur:t.isOnBlur)?!e:(n?a.isOnChange:t.isOnChange)?e:!0,Xp=(e,r)=>!yt(q(e,r)).length&&be(e,r),sd=(e,r,n)=>{const a=nr(q(e,n));return ge(a,"root",r[n]),ge(e,n,a),e},Ba=e=>Vr(e);function oo(e,r,n="validate"){if(Ba(e)||Array.isArray(e)&&e.every(Ba)||lr(e)&&!e)return{type:n,message:Ba(e)?e:"",ref:r}}var Dn=e=>Pe(e)&&!rt(e)?e:{value:e,message:""},ps=async(e,r,n,a,t,s)=>{const{ref:i,refs:o,required:d,maxLength:g,minLength:u,min:k,max:m,pattern:p,validate:c,name:O,valueAsNumber:T,mount:f}=e._f,R=q(n,O);if(!f||r.has(O))return{};const F=o?o[0]:i,h=D=>{t&&F.reportValidity&&(F.setCustomValidity(lr(D)?"":D||""),F.reportValidity())},y={},b=Ws(i),S=Ma(i),P=b||S,M=(T||$s(i))&&Te(i.value)&&Te(R)||Qa(i)&&i.value===""||R===""||Array.isArray(R)&&!R.length,U=Gp.bind(null,O,a,y),j=(D,K,Y,C=wr.maxLength,$=wr.minLength)=>{const fe=D?K:Y;y[O]={type:D?C:$,message:fe,ref:i,...U(D?C:$,fe)}};if(s?!Array.isArray(R)||!R.length:d&&(!P&&(M||Xe(R))||lr(R)&&!R||S&&!nd(o).isValid||b&&!td(o).isValid)){const{value:D,message:K}=Ba(d)?{value:!!d,message:d}:Dn(d);if(D&&(y[O]={type:wr.required,message:K,ref:F,...U(wr.required,K)},!a))return h(K),y}if(!M&&(!Xe(k)||!Xe(m))){let D,K;const Y=Dn(m),C=Dn(k);if(!Xe(R)&&!isNaN(R)){const $=i.valueAsNumber||R&&+R;Xe(Y.value)||(D=$>Y.value),Xe(C.value)||(K=$<C.value)}else{const $=i.valueAsDate||new Date(R),fe=Me=>new Date(new Date().toDateString()+" "+Me),te=i.type=="time",ve=i.type=="week";Vr(Y.value)&&R&&(D=te?fe(R)>fe(Y.value):ve?R>Y.value:$>new Date(Y.value)),Vr(C.value)&&R&&(K=te?fe(R)<fe(C.value):ve?R<C.value:$<new Date(C.value))}if((D||K)&&(j(!!D,Y.message,C.message,wr.max,wr.min),!a))return h(y[O].message),y}if((g||u)&&!M&&(Vr(R)||s&&Array.isArray(R))){const D=Dn(g),K=Dn(u),Y=!Xe(D.value)&&R.length>+D.value,C=!Xe(K.value)&&R.length<+K.value;if((Y||C)&&(j(Y,D.message,K.message),!a))return h(y[O].message),y}if(p&&!M&&Vr(R)){const{value:D,message:K}=Dn(p);if(rt(D)&&!R.match(D)&&(y[O]={type:wr.pattern,message:K,ref:i,...U(wr.pattern,K)},!a))return h(K),y}if(c){if(Er(c)){const D=await c(R,n),K=oo(D,F);if(K&&(y[O]={...K,...U(wr.validate,K.message)},!a))return h(K.message),y}else if(Pe(c)){let D={};for(const K in c){if(!ze(D)&&!a)break;const Y=oo(await c[K](R,n),F,K);Y&&(D={...Y,...U(K,Y.message)},h(Y.message),a&&(y[O]=D))}if(!ze(D)&&(y[O]={ref:F,...D},!a))return y}}return h(!0),y};const Zp={mode:mr.onSubmit,reValidateMode:mr.onChange,shouldFocusError:!0};function Qp(e={}){let r={...Zp,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:Er(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},t=Pe(r.defaultValues)||Pe(r.values)?ye(r.defaultValues||r.values)||{}:{},s=r.shouldUnregister?{}:ye(t),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,g=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let k={...u};const m={array:eo(),state:eo()},p=r.criteriaMode===mr.all,c=E=>N=>{clearTimeout(g),g=setTimeout(E,N)},O=async E=>{if(!r.disabled&&(u.isValid||k.isValid||E)){const N=r.resolver?ze((await S()).errors):await M(a,!0);N!==n.isValid&&m.state.next({isValid:N})}},T=(E,N)=>{!r.disabled&&(u.isValidating||u.validatingFields||k.isValidating||k.validatingFields)&&((E||Array.from(o.mount)).forEach(_=>{_&&(N?ge(n.validatingFields,_,N):be(n.validatingFields,_))}),m.state.next({validatingFields:n.validatingFields,isValidating:!ze(n.validatingFields)}))},f=(E,N=[],_,L,I=!0,V=!0)=>{if(L&&_&&!r.disabled){if(i.action=!0,V&&Array.isArray(q(a,E))){const B=_(q(a,E),L.argA,L.argB);I&&ge(a,E,B)}if(V&&Array.isArray(q(n.errors,E))){const B=_(q(n.errors,E),L.argA,L.argB);I&&ge(n.errors,E,B),Xp(n.errors,E)}if((u.touchedFields||k.touchedFields)&&V&&Array.isArray(q(n.touchedFields,E))){const B=_(q(n.touchedFields,E),L.argA,L.argB);I&&ge(n.touchedFields,E,B)}(u.dirtyFields||k.dirtyFields)&&(n.dirtyFields=la(t,s)),m.state.next({name:E,isDirty:j(E,N),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ge(s,E,N)},R=(E,N)=>{ge(n.errors,E,N),m.state.next({errors:n.errors})},F=E=>{n.errors=E,m.state.next({errors:n.errors,isValid:!1})},h=(E,N,_,L)=>{const I=q(a,E);if(I){const V=q(s,E,Te(_)?q(t,E):_);Te(V)||L&&L.defaultChecked||N?ge(s,E,N?V:to(I._f)):Y(E,V),i.mount&&O()}},y=(E,N,_,L,I)=>{let V=!1,B=!1;const se={name:E};if(!r.disabled){if(!_||L){(u.isDirty||k.isDirty)&&(B=n.isDirty,n.isDirty=se.isDirty=j(),V=B!==se.isDirty);const ke=Br(q(t,E),N);B=!!q(n.dirtyFields,E),ke?be(n.dirtyFields,E):ge(n.dirtyFields,E,!0),se.dirtyFields=n.dirtyFields,V=V||(u.dirtyFields||k.dirtyFields)&&B!==!ke}if(_){const ke=q(n.touchedFields,E);ke||(ge(n.touchedFields,E,_),se.touchedFields=n.touchedFields,V=V||(u.touchedFields||k.touchedFields)&&ke!==_)}V&&I&&m.state.next(se)}return V?se:{}},b=(E,N,_,L)=>{const I=q(n.errors,E),V=(u.isValid||k.isValid)&&lr(N)&&n.isValid!==N;if(r.delayError&&_?(d=c(()=>R(E,_)),d(r.delayError)):(clearTimeout(g),d=null,_?ge(n.errors,E,_):be(n.errors,E)),(_?!Br(I,_):I)||!ze(L)||V){const B={...L,...V&&lr(N)?{isValid:N}:{},errors:n.errors,name:E};n={...n,...B},m.state.next(B)}},S=async E=>{T(E,!0);const N=await r.resolver(s,r.context,Yp(E||o.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return T(E),N},P=async E=>{const{errors:N}=await S(E);if(E)for(const _ of E){const L=q(N,_);L?ge(n.errors,_,L):be(n.errors,_)}else n.errors=N;return N},M=async(E,N,_={valid:!0})=>{for(const L in E){const I=E[L];if(I){const{_f:V,...B}=I;if(V){const se=o.array.has(V.name),ke=I._f&&Cp(I._f);ke&&u.validatingFields&&T([L],!0);const rr=await ps(I,o.disabled,s,p,r.shouldUseNativeValidation&&!N,se);if(ke&&u.validatingFields&&T([L]),rr[V.name]&&(_.valid=!1,N))break;!N&&(q(rr,V.name)?se?sd(n.errors,rr,V.name):ge(n.errors,V.name,rr[V.name]):be(n.errors,V.name))}!ze(B)&&await M(B,N,_)}}return _.valid},U=()=>{for(const E of o.unMount){const N=q(a,E);N&&(N._f.refs?N._f.refs.every(_=>!Wt(_)):!Wt(N._f.ref))&&Ne(E)}o.unMount=new Set},j=(E,N)=>!r.disabled&&(E&&N&&ge(s,E,N),!Br(Me(),t)),D=(E,N,_)=>Zl(E,o,{...i.mount?s:Te(N)?t:Vr(E)?{[E]:N}:N},_,N),K=E=>yt(q(i.mount?s:t,E,r.shouldUnregister?q(t,E,[]):[])),Y=(E,N,_={})=>{const L=q(a,E);let I=N;if(L){const V=L._f;V&&(!V.disabled&&ge(s,E,ad(N,V)),I=Qa(V.ref)&&Xe(N)?"":N,Ql(V.ref)?[...V.ref.options].forEach(B=>B.selected=I.includes(B.value)):V.refs?Ma(V.ref)?V.refs.forEach(B=>{(!B.defaultChecked||!B.disabled)&&(Array.isArray(I)?B.checked=!!I.find(se=>se===B.value):B.checked=I===B.value||!!I)}):V.refs.forEach(B=>B.checked=B.value===I):$s(V.ref)?V.ref.value="":(V.ref.value=I,V.ref.type||m.state.next({name:E,values:ye(s)})))}(_.shouldDirty||_.shouldTouch)&&y(E,I,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&ve(E)},C=(E,N,_)=>{for(const L in N){if(!N.hasOwnProperty(L))return;const I=N[L],V=E+"."+L,B=q(a,V);(o.array.has(E)||Pe(I)||B&&!B._f)&&!Tn(I)?C(V,I,_):Y(V,I,_)}},$=(E,N,_={})=>{const L=q(a,E),I=o.array.has(E),V=ye(N);ge(s,E,V),I?(m.array.next({name:E,values:ye(s)}),(u.isDirty||u.dirtyFields||k.isDirty||k.dirtyFields)&&_.shouldDirty&&m.state.next({name:E,dirtyFields:la(t,s),isDirty:j(E,V)})):L&&!L._f&&!Xe(V)?C(E,V,_):Y(E,V,_),ms(E,o)&&m.state.next({...n,name:E}),m.state.next({name:i.mount?E:void 0,values:ye(s)})},fe=async E=>{i.mount=!0;const N=E.target;let _=N.name,L=!0;const I=q(a,_),V=ke=>{L=Number.isNaN(ke)||Tn(ke)&&isNaN(ke.getTime())||Br(ke,q(s,_,ke))},B=jn(r.mode),se=jn(r.reValidateMode);if(I){let ke,rr;const _n=N.type?to(I._f):Jl(E),Nr=E.type===Za.BLUR||E.type===Za.FOCUS_OUT,Vt=!$p(I._f)&&!r.resolver&&!q(n.errors,_)&&!I._f.deps||zp(Nr,q(n.touchedFields,_),n.isSubmitted,se,B),aa=ms(_,o,Nr);ge(s,_,_n),Nr?(I._f.onBlur&&I._f.onBlur(E),d&&d(0)):I._f.onChange&&I._f.onChange(E);const ta=y(_,_n,Nr),It=!ze(ta)||aa;if(!Nr&&m.state.next({name:_,type:E.type,values:ye(s)}),Vt)return(u.isValid||k.isValid)&&(r.mode==="onBlur"?Nr&&O():Nr||O()),It&&m.state.next({name:_,...aa?{}:ta});if(!Nr&&aa&&m.state.next({...n}),r.resolver){const{errors:sa}=await S([_]);if(V(_n),L){const qt=io(n.errors,a,_),Z=io(sa,a,qt.name||_);ke=Z.error,_=Z.name,rr=ze(sa)}}else T([_],!0),ke=(await ps(I,o.disabled,s,p,r.shouldUseNativeValidation))[_],T([_]),V(_n),L&&(ke?rr=!1:(u.isValid||k.isValid)&&(rr=await M(a,!0)));L&&(I._f.deps&&ve(I._f.deps),b(_,rr,ke,ta))}},te=(E,N)=>{if(q(n.errors,N)&&E.focus)return E.focus(),1},ve=async(E,N={})=>{let _,L;const I=nr(E);if(r.resolver){const V=await P(Te(E)?E:I);_=ze(V),L=E?!I.some(B=>q(V,B)):_}else E?(L=(await Promise.all(I.map(async V=>{const B=q(a,V);return await M(B&&B._f?{[V]:B}:B)}))).every(Boolean),!(!L&&!n.isValid)&&O()):L=_=await M(a);return m.state.next({...!Vr(E)||(u.isValid||k.isValid)&&_!==n.isValid?{}:{name:E},...r.resolver||!E?{isValid:_}:{},errors:n.errors}),N.shouldFocus&&!L&&Un(a,te,E?I:o.mount),L},Me=E=>{const N={...i.mount?s:t};return Te(E)?N:Vr(E)?q(N,E):E.map(_=>q(N,_))},Ve=(E,N)=>({invalid:!!q((N||n).errors,E),isDirty:!!q((N||n).dirtyFields,E),error:q((N||n).errors,E),isValidating:!!q(n.validatingFields,E),isTouched:!!q((N||n).touchedFields,E)}),Fr=E=>{E&&nr(E).forEach(N=>be(n.errors,N)),m.state.next({errors:E?n.errors:{}})},gr=(E,N,_)=>{const L=(q(a,E,{_f:{}})._f||{}).ref,I=q(n.errors,E)||{},{ref:V,message:B,type:se,...ke}=I;ge(n.errors,E,{...ke,...N,ref:L}),m.state.next({name:E,errors:n.errors,isValid:!1}),_&&_.shouldFocus&&L&&L.focus&&L.focus()},jr=(E,N)=>Er(E)?m.state.subscribe({next:_=>"values"in _&&E(D(void 0,N),_)}):D(E,N,!0),z=E=>m.state.subscribe({next:N=>{Jp(E.name,N.name,E.exact)&&Wp(N,E.formState||u,un,E.reRenderRoot)&&E.callback({values:{...s},...n,...N,defaultValues:t})}}).unsubscribe,J=E=>(i.mount=!0,k={...k,...E.formState},z({...E,formState:k})),Ne=(E,N={})=>{for(const _ of E?nr(E):o.mount)o.mount.delete(_),o.array.delete(_),N.keepValue||(be(a,_),be(s,_)),!N.keepError&&be(n.errors,_),!N.keepDirty&&be(n.dirtyFields,_),!N.keepTouched&&be(n.touchedFields,_),!N.keepIsValidating&&be(n.validatingFields,_),!r.shouldUnregister&&!N.keepDefaultValue&&be(t,_);m.state.next({values:ye(s)}),m.state.next({...n,...N.keepDirty?{isDirty:j()}:{}}),!N.keepIsValid&&O()},we=({disabled:E,name:N})=>{(lr(E)&&i.mount||E||o.disabled.has(N))&&(E?o.disabled.add(N):o.disabled.delete(N))},yr=(E,N={})=>{let _=q(a,E);const L=lr(N.disabled)||lr(r.disabled);return ge(a,E,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:E}},name:E,mount:!0,...N}}),o.mount.add(E),_?we({disabled:lr(N.disabled)?N.disabled:r.disabled,name:E}):h(E,!0,N.value),{...L?{disabled:N.disabled||r.disabled}:{},...r.progressive?{required:!!N.required,min:da(N.min),max:da(N.max),minLength:da(N.minLength),maxLength:da(N.maxLength),pattern:da(N.pattern)}:{},name:E,onChange:fe,onBlur:fe,ref:I=>{if(I){yr(E,N),_=q(a,E);const V=Te(I.value)&&I.querySelectorAll&&I.querySelectorAll("input,select,textarea")[0]||I,B=Bp(V),se=_._f.refs||[];if(B?se.find(ke=>ke===V):V===_._f.ref)return;ge(a,E,{_f:{..._._f,...B?{refs:[...se.filter(Wt),V,...Array.isArray(q(t,E))?[{}]:[]],ref:{type:V.type,name:E}}:{ref:V}}}),h(E,!1,void 0,V)}else _=q(a,E,{}),_._f&&(_._f.mount=!1),(r.shouldUnregister||N.shouldUnregister)&&!(zl(o.array,E)&&i.action)&&o.unMount.add(E)}}},zr=()=>r.shouldFocusError&&Un(a,te,o.mount),on=E=>{lr(E)&&(m.state.next({disabled:E}),Un(a,(N,_)=>{const L=q(a,_);L&&(N.disabled=L._f.disabled||E,Array.isArray(L._f.refs)&&L._f.refs.forEach(I=>{I.disabled=L._f.disabled||E}))},0,!1))},Xr=(E,N)=>async _=>{let L;_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let I=ye(s);if(m.state.next({isSubmitting:!0}),r.resolver){const{errors:V,values:B}=await S();n.errors=V,I=ye(B)}else await M(a);if(o.disabled.size)for(const V of o.disabled)be(I,V);if(be(n.errors,"root"),ze(n.errors)){m.state.next({errors:{}});try{await E(I,_)}catch(V){L=V}}else N&&await N({...n.errors},_),zr(),setTimeout(zr);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ze(n.errors)&&!L,submitCount:n.submitCount+1,errors:n.errors}),L)throw L},ln=(E,N={})=>{q(a,E)&&(Te(N.defaultValue)?$(E,ye(q(t,E))):($(E,N.defaultValue),ge(t,E,ye(N.defaultValue))),N.keepTouched||be(n.touchedFields,E),N.keepDirty||(be(n.dirtyFields,E),n.isDirty=N.defaultValue?j(E,ye(q(t,E))):j()),N.keepError||(be(n.errors,E),u.isValid&&O()),m.state.next({...n}))},Or=(E,N={})=>{const _=E?ye(E):t,L=ye(_),I=ze(E),V=I?t:L;if(N.keepDefaultValues||(t=_),!N.keepValues){if(N.keepDirtyValues){const B=new Set([...o.mount,...Object.keys(la(t,s))]);for(const se of Array.from(B))q(n.dirtyFields,se)?ge(V,se,q(s,se)):$(se,q(V,se))}else{if(Hs&&Te(E))for(const B of o.mount){const se=q(a,B);if(se&&se._f){const ke=Array.isArray(se._f.refs)?se._f.refs[0]:se._f.ref;if(Qa(ke)){const rr=ke.closest("form");if(rr){rr.reset();break}}}}if(N.keepFieldsRef)for(const B of o.mount)$(B,q(V,B));else a={}}s=r.shouldUnregister?N.keepDefaultValues?ye(t):{}:ye(V),m.array.next({values:{...V}}),m.state.next({values:{...V}})}o={mount:N.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!N.keepIsValid||!!N.keepDirtyValues,i.watch=!!r.shouldUnregister,m.state.next({submitCount:N.keepSubmitCount?n.submitCount:0,isDirty:I?!1:N.keepDirty?n.isDirty:!!(N.keepDefaultValues&&!Br(E,t)),isSubmitted:N.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:I?{}:N.keepDirtyValues?N.keepDefaultValues&&s?la(t,s):n.dirtyFields:N.keepDefaultValues&&E?la(t,E):N.keepDirty?n.dirtyFields:{},touchedFields:N.keepTouched?n.touchedFields:{},errors:N.keepErrors?n.errors:{},isSubmitSuccessful:N.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Lr=(E,N)=>Or(Er(E)?E(s):E,N),dn=(E,N={})=>{const _=q(a,E),L=_&&_._f;if(L){const I=L.refs?L.refs[0]:L.ref;I.focus&&(I.focus(),N.shouldSelect&&Er(I.select)&&I.select())}},un=E=>{n={...n,...E}},Zr={control:{register:yr,unregister:Ne,getFieldState:Ve,handleSubmit:Xr,setError:gr,_subscribe:z,_runSchema:S,_focusError:zr,_getWatch:D,_getDirty:j,_setValid:O,_setFieldArray:f,_setDisabledField:we,_setErrors:F,_getFieldArray:K,_reset:Or,_resetDefaultValues:()=>Er(r.defaultValues)&&r.defaultValues().then(E=>{Lr(E,r.resetOptions),m.state.next({isLoading:!1})}),_removeUnmounted:U,_disableForm:on,_subjects:m,_proxyFormState:u,get _fields(){return a},get _formValues(){return s},get _state(){return i},set _state(E){i=E},get _defaultValues(){return t},get _names(){return o},set _names(E){o=E},get _formState(){return n},get _options(){return r},set _options(E){r={...r,...E}}},subscribe:J,trigger:ve,register:yr,handleSubmit:Xr,watch:jr,setValue:$,getValues:Me,reset:Lr,resetField:ln,clearErrors:Fr,unregister:Ne,setError:gr,setFocus:dn,getFieldState:Ve};return{...Zr,formControl:Zr}}var rn=()=>{if(typeof crypto<"u"&&crypto.randomUUID)return crypto.randomUUID();const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const n=(Math.random()*16+e)%16|0;return(r=="x"?n:n&3|8).toString(16)})},Jt=(e,r,n={})=>n.shouldFocus||Te(n.shouldFocus)?n.focusName||`${e}.${Te(n.focusIndex)?r:n.focusIndex}.`:"",zt=(e,r)=>[...e,...nr(r)],Xt=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Zt(e,r,n){return[...e.slice(0,r),...nr(n),...e.slice(r)]}var Qt=(e,r,n)=>Array.isArray(e)?(Te(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(r,1)[0]),e):[],es=(e,r)=>[...nr(r),...nr(e)];function ey(e,r){let n=0;const a=[...e];for(const t of r)a.splice(t-n,1),n++;return yt(a).length?a:[]}var rs=(e,r)=>Te(r)?[]:ey(e,nr(r).sort((n,a)=>n-a)),ns=(e,r,n)=>{[e[r],e[n]]=[e[n],e[r]]},lo=(e,r,n)=>(e[r]=n,e);function sr(e){const r=H(),{control:n=r.control,name:a,keyName:t="id",shouldUnregister:s,rules:i}=e,[o,d]=v.useState(n._getFieldArray(a)),g=v.useRef(n._getFieldArray(a).map(rn)),u=v.useRef(o),k=v.useRef(!1);u.current=o,n._names.array.add(a),v.useMemo(()=>i&&n.register(a,i),[n,i,a]),Tt(()=>n._subjects.array.subscribe({next:({values:y,name:b})=>{if(b===a||!b){const S=q(y,a);Array.isArray(S)&&(d(S),g.current=S.map(rn))}}}).unsubscribe,[n,a]);const m=v.useCallback(y=>{k.current=!0,n._setFieldArray(a,y)},[n,a]),p=(y,b)=>{const S=nr(ye(y)),P=zt(n._getFieldArray(a),S);n._names.focus=Jt(a,P.length-1,b),g.current=zt(g.current,S.map(rn)),m(P),d(P),n._setFieldArray(a,P,zt,{argA:Xt(y)})},c=(y,b)=>{const S=nr(ye(y)),P=es(n._getFieldArray(a),S);n._names.focus=Jt(a,0,b),g.current=es(g.current,S.map(rn)),m(P),d(P),n._setFieldArray(a,P,es,{argA:Xt(y)})},O=y=>{const b=rs(n._getFieldArray(a),y);g.current=rs(g.current,y),m(b),d(b),!Array.isArray(q(n._fields,a))&&ge(n._fields,a,void 0),n._setFieldArray(a,b,rs,{argA:y})},T=(y,b,S)=>{const P=nr(ye(b)),M=Zt(n._getFieldArray(a),y,P);n._names.focus=Jt(a,y,S),g.current=Zt(g.current,y,P.map(rn)),m(M),d(M),n._setFieldArray(a,M,Zt,{argA:y,argB:Xt(b)})},f=(y,b)=>{const S=n._getFieldArray(a);ns(S,y,b),ns(g.current,y,b),m(S),d(S),n._setFieldArray(a,S,ns,{argA:y,argB:b},!1)},R=(y,b)=>{const S=n._getFieldArray(a);Qt(S,y,b),Qt(g.current,y,b),m(S),d(S),n._setFieldArray(a,S,Qt,{argA:y,argB:b},!1)},F=(y,b)=>{const S=ye(b),P=lo(n._getFieldArray(a),y,S);g.current=[...P].map((M,U)=>!M||U===y?rn():g.current[U]),m(P),d([...P]),n._setFieldArray(a,P,lo,{argA:y,argB:S},!0,!1)},h=y=>{const b=nr(ye(y));g.current=b.map(rn),m([...b]),d([...b]),n._setFieldArray(a,[...b],S=>S,{},!0,!1)};return v.useEffect(()=>{if(n._state.action=!1,ms(a,n._names)&&n._subjects.state.next({...n._formState}),k.current&&(!jn(n._options.mode).isOnSubmit||n._formState.isSubmitted)&&!jn(n._options.reValidateMode).isOnSubmit)if(n._options.resolver)n._runSchema([a]).then(y=>{const b=q(y.errors,a),S=q(n._formState.errors,a);(S?!b&&S.type||b&&(S.type!==b.type||S.message!==b.message):b&&b.type)&&(b?ge(n._formState.errors,a,b):be(n._formState.errors,a),n._subjects.state.next({errors:n._formState.errors}))});else{const y=q(n._fields,a);y&&y._f&&!(jn(n._options.reValidateMode).isOnSubmit&&jn(n._options.mode).isOnSubmit)&&ps(y,n._names.disabled,n._formValues,n._options.criteriaMode===mr.all,n._options.shouldUseNativeValidation,!0).then(b=>!ze(b)&&n._subjects.state.next({errors:sd(n._formState.errors,b,a)}))}n._subjects.state.next({name:a,values:ye(n._formValues)}),n._names.focus&&Un(n._fields,(y,b)=>{if(n._names.focus&&b.startsWith(n._names.focus)&&y.focus)return y.focus(),1}),n._names.focus="",n._setValid(),k.current=!1},[o,a,n]),v.useEffect(()=>(!q(n._formValues,a)&&n._setFieldArray(a),()=>{const y=(b,S)=>{const P=q(n._fields,b);P&&P._f&&(P._f.mount=S)};n._options.shouldUnregister||s?n.unregister(a):y(a,!1)}),[a,n,t,s]),{swap:v.useCallback(f,[m,a,n]),move:v.useCallback(R,[m,a,n]),prepend:v.useCallback(c,[m,a,n]),append:v.useCallback(p,[m,a,n]),remove:v.useCallback(O,[m,a,n]),insert:v.useCallback(T,[m,a,n]),update:v.useCallback(F,[m,a,n]),replace:v.useCallback(h,[m,a,n]),fields:v.useMemo(()=>o.map((y,b)=>({...y,[t]:g.current[b]||rn()})),[o,t])}}function rA(e={}){const r=v.useRef(void 0),n=v.useRef(void 0),[a,t]=v.useState({isDirty:!1,isValidating:!1,isLoading:Er(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Er(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:a},e.defaultValues&&!Er(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=Qp(e);r.current={...o,formState:a}}const s=r.current.control;return s._options=e,Tt(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>t({...s._formState}),reRenderRoot:!0});return t(o=>({...o,isReady:!0})),s._formState.isReady=!0,i},[s]),v.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),v.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),v.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),v.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==a.isDirty&&s._subjects.state.next({isDirty:i})}},[s,a.isDirty]),v.useEffect(()=>{e.values&&!Br(e.values,n.current)?(s._reset(e.values,{keepFieldsRef:!0,...s._options.resetOptions}),n.current=e.values,t(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),v.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),r.current.formState=Xl(a,s),r.current}function ry(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uo={exports:{}},ua={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko;function ny(){if(ko)return ua;ko=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(a,t,s){var i=null;if(s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),"key"in t){s={};for(var o in t)o!=="key"&&(s[o]=t[o])}else s=t;return t=s.ref,{$$typeof:e,type:a,key:i,ref:t!==void 0?t:null,props:s}}return ua.Fragment=r,ua.jsx=n,ua.jsxs=n,ua}var go;function ay(){return go||(go=1,uo.exports=ny()),uo.exports}var W=ay();const hn=e=>e.reduce((r,n,a)=>({...r,[a]:t=>n(t)||!0}),{}),tn=(e,r)=>r.split(".").reduce((n,a)=>n!==void 0?n[a]:n,e)?.message,dr=({label:e,validate:r=[],readOnly:n=!1,onChange:a,onClick:t,className:s,...i})=>{const{name:o,control:d,disabled:g}=i,{formState:{errors:u}}=H(),{field:k}=bn({name:o,control:d,rules:{validate:A.useMemo(()=>hn(r),[r])}}),m=tn(u,o);return W.jsxs(W.Fragment,{children:[W.jsx(Pa,{size:"small",disabled:g||n,checked:k.value===!0,className:s,error:!!m,...k,onChange:p=>{k.onChange(p),a&&a(p.currentTarget.checked)},onClick:()=>{t&&t()},children:e}),m&&W.jsx($r,{children:tn(u,o)})]})},Js=({label:e,description:r,validate:n=[],onChange:a,isReadOnly:t=!1,hideLegend:s=!1,isEdited:i=!1,size:o="small",children:d,...g})=>{const{name:u,control:k}=g,{formState:{errors:m}}=H(),{field:p}=bn({name:u,control:k,rules:{validate:A.useMemo(()=>hn(n),[n])}}),c=W.jsxs(Qe,{justify:"center",gap:"2",children:[e,t&&i&&W.jsx(xs,{})]});return W.jsx(Zm,{name:u,description:r,value:p.value!==void 0?p.value:[],onChange:O=>{a&&a(O),p.onChange(O)},size:o,legend:c,error:tn(m,u),hideLegend:s,children:d})};var ys={exports:{}},ty=ys.exports,vo;function sy(){return vo||(vo=1,function(e,r){(function(n,a){e.exports=a()})(ty,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,s=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,d={},g=function(T){return(T=+T)+(T>68?1900:2e3)},u=function(T){return function(f){this[T]=+f}},k=[/[+-]\d\d:?(\d\d)?|Z/,function(T){(this.zone||(this.zone={})).offset=function(f){if(!f||f==="Z")return 0;var R=f.match(/([+-]|\d\d)/g),F=60*R[1]+(+R[2]||0);return F===0?0:R[0]==="+"?-F:F}(T)}],m=function(T){var f=d[T];return f&&(f.indexOf?f:f.s.concat(f.f))},p=function(T,f){var R,F=d.meridiem;if(F){for(var h=1;h<=24;h+=1)if(T.indexOf(F(h,0,f))>-1){R=h>12;break}}else R=T===(f?"pm":"PM");return R},c={A:[o,function(T){this.afternoon=p(T,!1)}],a:[o,function(T){this.afternoon=p(T,!0)}],Q:[t,function(T){this.month=3*(T-1)+1}],S:[t,function(T){this.milliseconds=100*+T}],SS:[s,function(T){this.milliseconds=10*+T}],SSS:[/\d{3}/,function(T){this.milliseconds=+T}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[s,u("day")],Do:[o,function(T){var f=d.ordinal,R=T.match(/\d+/);if(this.day=R[0],f)for(var F=1;F<=31;F+=1)f(F).replace(/\[|\]/g,"")===T&&(this.day=F)}],w:[i,u("week")],ww:[s,u("week")],M:[i,u("month")],MM:[s,u("month")],MMM:[o,function(T){var f=m("months"),R=(m("monthsShort")||f.map(function(F){return F.slice(0,3)})).indexOf(T)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[o,function(T){var f=m("months").indexOf(T)+1;if(f<1)throw new Error;this.month=f%12||f}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(T){this.year=g(T)}],YYYY:[/\d{4}/,u("year")],Z:k,ZZ:k};function O(T){var f,R;f=T,R=d&&d.formats;for(var F=(T=f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(U,j,D){var K=D&&D.toUpperCase();return j||R[D]||n[D]||R[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Y,C,$){return C||$.slice(1)})})).match(a),h=F.length,y=0;y<h;y+=1){var b=F[y],S=c[b],P=S&&S[0],M=S&&S[1];F[y]=M?{regex:P,parser:M}:b.replace(/^\[|\]$/g,"")}return function(U){for(var j={},D=0,K=0;D<h;D+=1){var Y=F[D];if(typeof Y=="string")K+=Y.length;else{var C=Y.regex,$=Y.parser,fe=U.slice(K),te=C.exec(fe)[0];$.call(j,te),U=U.replace(te,"")}}return function(ve){var Me=ve.afternoon;if(Me!==void 0){var Ve=ve.hours;Me?Ve<12&&(ve.hours+=12):Ve===12&&(ve.hours=0),delete ve.afternoon}}(j),j}}return function(T,f,R){R.p.customParseFormat=!0,T&&T.parseTwoDigitYear&&(g=T.parseTwoDigitYear);var F=f.prototype,h=F.parse;F.parse=function(y){var b=y.date,S=y.utc,P=y.args;this.$u=S;var M=P[1];if(typeof M=="string"){var U=P[2]===!0,j=P[3]===!0,D=U||j,K=P[2];j&&(K=P[2]),d=this.$locale(),!U&&K&&(d=R.Ls[K]),this.$d=function(fe,te,ve,Me){try{if(["x","X"].indexOf(te)>-1)return new Date((te==="X"?1e3:1)*fe);var Ve=O(te)(fe),Fr=Ve.year,gr=Ve.month,jr=Ve.day,z=Ve.hours,J=Ve.minutes,Ne=Ve.seconds,we=Ve.milliseconds,yr=Ve.zone,zr=Ve.week,on=new Date,Xr=jr||(Fr||gr?1:on.getDate()),ln=Fr||on.getFullYear(),Or=0;Fr&&!gr||(Or=gr>0?gr-1:on.getMonth());var Lr,dn=z||0,un=J||0,Sn=Ne||0,Zr=we||0;return yr?new Date(Date.UTC(ln,Or,Xr,dn,un,Sn,Zr+60*yr.offset*1e3)):ve?new Date(Date.UTC(ln,Or,Xr,dn,un,Sn,Zr)):(Lr=new Date(ln,Or,Xr,dn,un,Sn,Zr),zr&&(Lr=Me(Lr).week(zr).toDate()),Lr)}catch{return new Date("")}}(b,M,S,R),this.init(),K&&K!==!0&&(this.$L=this.locale(K).$L),D&&b!=this.format(M)&&(this.$d=new Date("")),d={}}else if(M instanceof Array)for(var Y=M.length,C=1;C<=Y;C+=1){P[1]=M[C-1];var $=R.apply(this,P);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}C===Y&&(this.$d=new Date(""))}else h.call(this,y)}}})}(ys)),ys.exports}var iy=sy();const oy=ry(iy),ly="_textarea_1snk6_1",dy="_readOnlyField_1snk6_7",mo={textarea:ly,readOnlyField:dy},uy=e=>e!=null&&e!=="",Et=({label:e,value:r,isEdited:n=!1,type:a,hideLabel:t,size:s})=>uy(r)?W.jsxs(X,{gap:"1",children:[e&&!t&&W.jsx(kr,{size:s,children:e}),W.jsxs(Qe,{gap:"2",align:"center",wrap:!1,children:[W.jsx(Qd,{className:a==="textarea"?mo.textarea:mo.readOnlyField,size:s,children:r}),n&&W.jsx(xs,{})]})]}):null;ne.extend(oy);const Q=({label:e,description:r,validate:n=[],hideLabel:a=!1,isReadOnly:t=!1,onChange:s,disabledDays:i,isEdited:o,defaultMonth:d,fromDate:g,toDate:u,size:k="small",...m})=>{const{name:p,control:c,disabled:O}=m,{formState:{errors:T}}=H(),{field:f}=bn({name:p,control:c,rules:{validate:A.useMemo(()=>hn(n),[n])}}),R=f.value?ne(f.value,$e,!0).format(yn):"",[F,h]=A.useState(R),{datepickerProps:y,inputProps:b}=Rm({onDateChange:M=>{if(M!==void 0){const U=ne(M).format($e);s&&s(U),f.onChange(U),h(ne(U,$e,!0).format(yn))}},defaultSelected:f.value?ne(f.value,$e,!0).toDate():void 0,defaultMonth:d||(!f.value&&u?u:void 0),disabled:i}),S=A.useCallback(M=>{const U=ne(M.target.value,yn,!0).format($e),j=U!=="Invalid Date";h(M.target.value),s&&s(j?U:M.target.value),f.onChange(j?U:M.target.value)},[h,s,f]);if(t)return W.jsx(Et,{label:e,value:f.value?ne(f.value,$e,!0).format(yn):void 0,isEdited:o,hideLabel:a,size:k});const P={...y,fromDate:g,toDate:u,dropdownCaption:g&&u?!0:void 0};return W.jsx(za,{...P,children:W.jsx(za.Input,{...b,hideLabel:a,onChange:S,value:F,size:k,label:e,description:r,disabled:O,error:tn(T,p)})})},je=({name:e,control:r,label:n,validate:a=[],readOnly:t=!1,type:s,shouldValidateOnBlur:i=!1,onBlur:o,onChange:d,description:g,autoFocus:u,parse:k=y=>y,format:m=y=>y,normalizeOnBlur:p,isEdited:c,maxLength:O,autoComplete:T=!1,disabled:f,className:R,hideLabel:F,...h})=>{const{formState:{errors:y},trigger:b}=H(),{field:S}=bn({name:e,control:r,rules:{validate:A.useMemo(()=>hn(a),[a])}});return t?W.jsx(Et,{label:n,value:S.value,isEdited:c,hideLabel:F,size:h.size}):W.jsx(kp,{size:"small",hideLabel:F,description:g,label:n,error:tn(y,e),...S,value:S.value?m(S.value):"",autoFocus:u,autoComplete:T?void 0:"off",maxLength:O,disabled:f,type:s,className:R,onChange:P=>{const M=P.currentTarget.value?k(P.currentTarget.value):null;return d&&d(M),S.onChange(M)},onBlur:async P=>{if(S.onBlur(),i){const M=await b();o&&M&&o(P?.target?.value)}else o&&o(P?.target?.value);p&&S.onChange(P?.target?.value?p(k(P?.target?.value)):null)},...h})},ky="_hideRadioLabels_1u3xf_1",gy={hideRadioLabels:ky},Jr=({label:e,description:r,validate:n=[],radios:a,onChange:t,isReadOnly:s=!1,isHorizontal:i=!1,parse:o=c=>c,isTrueOrFalseSelection:d=!1,hideLegend:g=!1,hideRadioLabels:u=!1,isEdited:k=!1,size:m="small",...p})=>{const{name:c,control:O,disabled:T}=p,{formState:{errors:f}}=H(),{field:R}=bn({name:c,control:O,rules:{validate:A.useMemo(()=>hn(n),[n])}}),F=d?y=>y==="true":o,h=W.jsxs(Qe,{justify:"center",gap:"2",children:[e,s&&k&&W.jsx(xs,{})]});return W.jsxs(np,{name:c,value:R.value!==void 0?R.value:null,onChange:y=>{t&&t(y),R.onChange(y)},size:m,legend:h,description:r,error:tn(f,c),className:u?gy.hideRadioLabels:"",hideLegend:g,children:[!i&&a.map(y=>W.jsxs(A.Fragment,{children:[W.jsx(Hi,{size:m,value:F(y.value),disabled:y.disabled||T||s,children:y.label}),R.value===F(y.value)&&y.element]},y.value)),i&&W.jsxs(W.Fragment,{children:[W.jsx(Qe,{gap:"4",children:a.map(y=>W.jsx(Hi,{size:m,value:F(y.value),disabled:y.disabled||T||s,children:y.label},y.value))}),a.filter(y=>R.value===F(y.value)).map(y=>W.jsx(A.Fragment,{children:y.element},y.value))]})]})},tr=({label:e,selectValues:r,validate:n=[],readOnly:a=!1,description:t,hideValueOnDisable:s=!1,onChange:i,className:o,hideLabel:d,isEdited:g,size:u,...k})=>{const{name:m,control:p,disabled:c}=k,{formState:{errors:O}}=H(),{field:T}=bn({name:m,control:p,rules:{validate:A.useMemo(()=>hn(n),[n])}});if(a){const F=r.map(y=>y.props).find(y=>y.value===T.value),h=F?F.children:void 0;return W.jsx(Et,{value:h,label:e,hideLabel:d,isEdited:g,size:u})}const f=T.value||"",R=!r.map(F=>F.props.value).includes(f)&&f!=="";return R&&console.warn(`No corresponding option found for value '${f}'`),W.jsxs(ks,{size:"small",className:o,error:tn(O,m),label:e,description:t,value:s&&c||R?"":T.value,disabled:c,onChange:F=>{i&&i(F),T.onChange(F)},hideLabel:d,children:[W.jsx("option",{style:{display:"none"}}),",",r]})},vy="_textAreaFieldWithBadges_bdz0b_1",my="_etikettWrapper_bdz0b_4",po={textAreaFieldWithBadges:vy,etikettWrapper:my},id=({name:e,control:r,label:n,readOnly:a,maxLength:t,badges:s,validate:i=[],parse:o=p=>p,className:d,description:g,isEdited:u,size:k="small",...m})=>{const{formState:{errors:p}}=H(),{field:c}=bn({name:e,control:r,rules:{validate:A.useMemo(()=>hn(i),[i])}});return a?W.jsx(Et,{size:k,label:n,value:c.value,type:"textarea",isEdited:u,hideLabel:m.hideLabel}):W.jsxs("div",{className:s?po.textAreaFieldWithBadges:null,children:[s&&W.jsx("div",{className:po.etikettWrapper,children:s.map(({type:O,titleText:T})=>W.jsx($m,{variant:O,size:"small",children:T},T))}),W.jsx(dp,{size:k,label:n,description:g,className:d,autoComplete:"off",...c,onChange:O=>c.onChange(O.currentTarget.value!==""?o(O.currentTarget.value):null),value:c.value?c.value:"",error:tn(p,e),maxLength:t,...m})]})},nA=({formMethods:e,onSubmit:r,children:n,className:a,setDataOnUnmount:t})=>{const{handleSubmit:s,getValues:i}=e;return A.useEffect(()=>()=>{t&&t(i())},[]),W.jsx(Lp,{...e,children:W.jsx("form",{className:a,onSubmit:r?s(o=>r(o)):void 0,children:n})})},py="_addCircleIcon_bm9jq_1",yy="_imageText_bm9jq_2",Ty="_addPeriode_bm9jq_7",as={addCircleIcon:py,imageText:yy,addPeriode:Ty};function yo(e,r){return()=>{e(r)}}function Ey(e,r){return({key:n})=>{n==="Enter"&&e(r)}}const Ay=(e,r)=>n=>{if(e>0)return W.jsx(Je,{className:n,icon:W.jsx(eu,{"aria-hidden":!0}),type:"button",onClick:()=>{r(e)}})},Rr=({fields:e,readOnly:r=!0,titleText:n,bodyText:a,emptyPeriodTemplate:t={periodeFom:"",periodeTom:""},shouldShowAddButton:s=!0,createAddButtonInsteadOfImageLink:i=!1,children:o,remove:d,append:g})=>W.jsxs(Gs,{legend:n,children:[e.map((u,k)=>o(u,k,Ay(k,d))),s&&W.jsxs(W.Fragment,{children:[!i&&!r&&W.jsxs("div",{onClick:yo(g,t),onKeyDown:Ey(g,t),className:as.addPeriode,role:"button",tabIndex:0,children:[W.jsx(Ca,{className:as.addCircleIcon,title:a}),W.jsx(Na,{className:as.imageText,children:a})]}),i&&!r&&W.jsx(Je,{icon:W.jsx(Ca,{"aria-hidden":!0}),type:"button",onClick:yo(g,t),children:a}),W.jsx("div",{style:{marginBottom:"16px"}})]})]}),Ra="andreYtelser",od="andreYtelserPerioder",zs="andreYtelserTyper";function ld(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ts={exports:{}},cy=Ts.exports,To;function fy(){return To||(To=1,function(e,r){(function(n,a){e.exports=a()})(cy,function(){return function(n,a){a.prototype.isSameOrAfter=function(t,s){return this.isSame(t,s)||this.isAfter(t,s)}}})}(Ts)),Ts.exports}var Ry=fy();const Fy=ld(Ry);var Es={exports:{}},Oy=Es.exports,Eo;function Ny(){return Eo||(Eo=1,function(e,r){(function(n,a){e.exports=a()})(Oy,function(){return function(n,a){a.prototype.isSameOrBefore=function(t,s){return this.isSame(t,s)||this.isBefore(t,s)}}})}(Es)),Es.exports}var by=Ny();const hy=ld(by),Sy="Dato må være før eller lik {limit}",_y="Dato må være etter eller lik {limit}",Ky="Perioder kan ikke overlappe i tid",Py="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Dy="Dato må være lik {value}",My="Dato må skrives slik: dd.mm.åååå",Vy="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Iy="Tallet kan ikke inneholde mer enn to desimaler",qy="Tallet kan ikke ha desimaler",jy="Feltet kan kun inneholde tall",Ly="Ugyldig fødselsnummer",wy="Feltet må være et fødselsnummer (11 siffer)",Uy="Ugyldig organisasjonsnummer. Organisasjonsnummer må være 9 siffer.",Gy="Ugyldig organisasjonsnummer eller fødselsnummer",By="Startdato må være før eller lik sluttdato",xy="Periode er utenfor opptjeningsperioden",Hy="Ugyldig saksnummer eller fødselsnummer",Yy="Feltet inneholder ugyldige tegn: {text}",Cy="Feltet inneholder en ugyldig verdi: {value}",$y="Feltet kan ikke inneholde mellomrom",Wy="Feltet må fylles ut",Jy="Du kan skrive maksimalt {length} tegn",zy="Du må skrive minst {length} tegn",Xy="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",Zy="Feltet må være mindre eller lik {length}",Qy="Feltet må være større eller lik {length}",eT="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",rT={DateNotBeforeOrEqual:Sy,DateNotAfterOrEqual:_y,DateRangesOverlapping:Ky,DateRangesOverlappingPeriodTypes:Py,DatesNotEqual:Dy,InvalidDate:My,InvalidDatesInPeriod:Vy,InvalidDecimal:Iy,InvalidInteger:qy,InvalidNumber:jy,InvalidFodselsnr:Ly,InvalidFodselsnrFormat:wy,InvalidOrgnr:Uy,InvalidOrgnrOrFodselsnr:Gy,InvalidPeriod:By,InvalidPeriodRange:xy,InvalidSaksnrOrFodselsnrFormat:Hy,InvalidText:Yy,InvalidValue:Cy,IllegalWhiteSpace:$y,IsRequired:Wy,MaxLength:Jy,MinLength:zy,MaxLengthOrFodselsnr:Xy,MaxValue:Zy,MinValue:Qy,SammeFodselsnrSomSoker:eT},{formatMessage:De}=ce(rT),nT=e=>De({id:"DateNotBeforeOrEqual"},{limit:e}),aT=e=>De({id:"DateNotAfterOrEqual"},{limit:e}),tT=()=>De({id:"DateRangesOverlapping"}),sT=e=>De({id:"DatesNotEqual"},{value:e}),iT=()=>De({id:"InvalidDate"}),oT=e=>De({id:"InvalidDecimal"},{text:e}),lT=e=>De({id:"InvalidInteger"},{text:e}),dT=e=>De({id:"InvalidNumber"},{text:e}),uT=()=>De({id:"InvalidFodselsnr"}),kT=()=>De({id:"InvalidFodselsnrFormat"}),ts=()=>De({id:"InvalidOrgnr"}),gT=()=>De({id:"InvalidOrgnrOrFodselsnr"}),vT=()=>De({id:"InvalidPeriod"}),mT=e=>De({id:"InvalidText"},{text:e}),pT=()=>De({id:"IllegalWhiteSpace"}),yT=()=>De({id:"IsRequired"}),TT=e=>De({id:"MaxLength"},{length:e}),ET=e=>De({id:"MaxLengthOrFodselsnr"},{length:e}),AT=e=>De({id:"MaxValue"},{length:e}),cT=e=>De({id:"MinValue"},{length:e}),fT=()=>De({id:"SammeFodselsnrSomSoker"}),RT=/(19|20)\d{2}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])$/,FT=/^\d+([,.]\d+)?$/,OT=/^\s*\d+\s*$/,NT=/^\d+(.\d{1,2})?$/,bT=/^[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*$/u,hT=/[\p{N}\p{L}\p{Z}.'\-/%§!?@_()+:;,="&\n]*/gu,fr=e=>e==null||e.toString().trim().length===0,ST=()=>ne().startOf("day"),_T=e=>{if(Array.isArray(e)){const r=(n,a,t)=>{const s=ne(n,$e).startOf("day"),i=a+1<t.length?ne(t[a+1],$e).startOf("day"):null;return i!==null?s.isBefore(i):!0};return[...e].sort((n,a)=>ne(n[0],$e).startOf("day").isAfter(ne(a[0],$e).startOf("day"))?1:-1).map(n=>n[0]===n[1]?[n[0]]:n).reduce((n,a)=>n.concat(a)).every(r)}return!0};ne.extend(Fy);ne.extend(hy);const KT=e=>r=>fr(r)||r.toString().trim().length<=e?null:ET(e),G=e=>fr(e)?yT():void 0,Xs=e=>r=>fr(r)||r.toString().trim().length<=e?null:TT(e),PT=e=>r=>dd(r)>=e?null:cT(e),At=e=>r=>dd(r)<=e?null:AT(e),dd=e=>typeof e=="string"?Number(e):e,DT=e=>{if(!e)return ts();const r=e.toString().trim();return Number.isNaN(Number(r))?ts():r.length===9?null:ts()},MT=e=>e.toString().trim().length===9||e.toString().trim().length===11?null:gT(),VT=e=>/\s/g.test(e)?pT():null,ud=e=>fr(e)||FT.test(e.toString())?null:dT(e.toString()),IT=e=>fr(e)||OT.test(e.toString())?null:lT(e.toString()),qT=e=>fr(e)||NT.test(e.toString())?null:oT(e.toString()),Rn=e=>ud(e)||IT(e),As=e=>ud(e)||qT(e),re=(e="")=>fr(e)||RT.test(e)?null:iT(),er=e=>r=>{const n=ne(e).endOf("day");return fr(r)||ne(r).isSameOrBefore(n)?null:nT(n.format(yn))},Ge=e=>r=>{const n=ne(e).startOf("day");return fr(r)||ne(r).isSameOrAfter(n)?null:aT(n.format(yn))},Cn=e=>_T(e)?null:tT(),xn=e=>er(ST())(e),jT=e=>ru.test(e)?null:kT(),kd=e=>nu(e)?null:uT(),LT=e=>r=>r===e?fT():null,Zs=e=>{if(!bT.test(e)){const r=e.replace(hT,"");return mT(r.replace(/[\t]/g,"Tabulatortegn"))}return null},wT=(e,r)=>e!==r?sT(ne(r).format(yn)):null,UT=(e,r)=>fr(e)&&fr(r)||ne(e).isSameOrBefore(ne(r).startOf("day"))?null:vT(),GT=()=>{let e;setTimeout(()=>{if(document.getElementsByClassName("skjemaelement__feilmelding").length>0?e=document.getElementsByClassName("skjemaelement__feilmelding"):document.getElementsByClassName("alertstripe--advarsel")&&(e=document.getElementsByClassName("alertstripe--advarsel")),e&&e.length>0){const r=document.createAttribute("tabindex");r.value="-1";const n=e[0];n.setAttributeNode(r),document.activeElement.blur(),n.focus()}},300)},gd=({readOnly:e,name:r})=>{const n=Ae(),{getValues:a,control:t,trigger:s,formState:{isSubmitted:i}}=H(),{fields:o,remove:d,append:g}=sr({control:t,name:r});return A.useEffect(()=>{o.length===0&&g({periodeFom:"",periodeTom:""})},[]),l.jsx(Rr,{fields:o,bodyText:n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,append:g,remove:d,children:(u,k)=>{const m=`${r}.${k}`;return l.jsxs(Qe,{gap:"2",children:[l.jsx(Q,{name:`${m}.periodeFom`,control:t,label:k===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeFom"}):"",validate:[G,re,()=>{const{periodeFom:p,periodeTom:c}=a(`${r}.${k}`);return c&&p?er(c)(p):null}],onChange:()=>i?s():void 0}),l.jsx(Q,{name:`${r}.${k}.periodeTom`,control:t,label:k===0?n.formatMessage({id:"Registrering.AndreYtelser.periodeTom"}):"",validate:[G,re,()=>{const{periodeFom:p,periodeTom:c}=a(`${r}.${k}`);return p&&c?Ge(p)(c):null}],onChange:()=>i?s():void 0}),!e&&k>0&&l.jsx("div",{children:l.jsx(Je,{size:"small",type:"button",variant:"tertiary-neutral",icon:l.jsx(kt,{}),onClick:()=>d(k)})})]},u.id)}})};gd.__docgenInfo={description:"",methods:[],displayName:"RenderAndreYtelserPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"literal",value:"`${typeof ANDRE_YTELSER_NAME_PREFIX}.${typeof ANDRE_YTELSER_PERIODER_NAME}.${string}`"},description:""}}};const $n=({readOnly:e,kunMiliterEllerSiviltjeneste:r=!1,alleKodeverk:n})=>{const{control:a}=H(),t=xT(n.ArbeidType,r);return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.AndreYtelser.Title"})}),l.jsx(Js,{name:`${Ra}.${zs}`,control:a,isReadOnly:e,children:t.map(s=>l.jsx(BT,{arbeidstype:s,readOnly:e},s.kode))})]})})};$n.initialValues=()=>({[Ra]:{[zs]:[],[od]:{}}});$n.transformValues=({andreYtelser:{andreYtelserTyper:e,andreYtelserPerioder:r}})=>({[Ra]:e.flatMap(n=>r[n].map(a=>({ytelseType:n,...a})))});const BT=({arbeidstype:e,readOnly:r})=>{const{watch:n}=H(),a=n(`${Ra}.${zs}`),[t,s]=A.useState(a.includes(e.kode));return l.jsxs(X,{gap:"2",children:[l.jsx(Pa,{value:e.kode,onClick:()=>s(!t),disabled:r,children:e.navn}),t&&l.jsx(ar,{children:l.jsx(gd,{name:`${Ra}.${od}.${e.kode}`,readOnly:r})})]})},xT=(e,r)=>r?e.filter(n=>n.kode===ka.MILITÆR_ELLER_SIVILTJENESTE):e.filter(n=>n.kode!==ka.UTENLANDSK_ARBEIDSFORHOLD&&n.kode!==ka.FRILANSER&&n.kode!==ka.LONN_UNDER_UTDANNING);$n.__docgenInfo={description:`AndreYtelserPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Le={"Registrering.Yes":"Ja","Registrering.No":"Nei","Registrering.AndreYtelser.periodeTom":"T.o.m.","Registrering.AndreYtelser.periodeFom":"F.o.m.","Registrering.AndreYtelser.Title":"Andre inntektskilder","Registrering.TheOtherParent.CannotSpecifyOtherParent":"Kan ikke oppgi annen forelder","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title":"Angi årsak","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1":"Forelder er ukjent","Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2":"Har ikke norsk f.nr. eller d-nr.","Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer":"Utenlandsk fødselsnummer","Registrering.TheOtherParent.CannotSpecifyOtherParent.Land":"Land","Registrering.TheOtherParent.Title":"Den andre forelderen","Registrering.TheOtherParent.Fodselsnummer":"Fødselsnummer/D-nummer","Registrering.Permisjon.SøkerHarAleneomsorg":"Har søker aleneomsorg for barnet?","Registrering.Permisjon.HarRettPaForeldrepenger":"Har den andre forelderen rett på foreldrepenger i Norge?","Registrering.Permisjon.MorUføretrygd":"Bare far rett og mor mottar uføretryd?","Registrering.Permisjon.AnnenForelderRettEØS":"Annen forelder har tilstrekkelig opptjening fra land i EØS?","Registrering.TerminOgFodsel.Tittel":"Opplysninger om termin og fødsel","Registrering.TerminOgFodsel.ErBarnetFodt":"Er barnet født?","Registrering.TerminOgFodsel.ErFodt":"Ja","Registrering.TerminOgFodsel.ErIkkeFodt":"Nei","Registrering.TerminOgFodsel.Termindato":"Termindato","Registrering.TerminOgFodsel.AntallBarn":"Antall barn","Registrering.TerminOgFodsel.UtstedtDato":"Utstedt dato fra terminbekreftelsen","Registrering.TerminOgFodsel.Fodselsdato":"Fødselsdato","Registrering.TerminOgFodsel.RettTilPrematuruker":"Rett til prematuruker vil kun sjekkes når du også oppgir termindato","Registrering.Frilans.Title":"Frilanser","Registrering.Frilans.HarFrilansvirksomhet":"Har søker periode med frilansvirksomhet?","Registrering.Frilans.OppgiPeriode":"Oppgi periode med frilansvirksomhet","Registrering.Frilans.periodeTom":"T.o.m.","Registrering.Frilans.periodeFom":"F.o.m.","Registrering.Frilans.ErNyoppstartedFrilanser":"Er søker nyoppstartet frilanser?","Registrering.Frilans.HarInntektFraForsterhjem":"Har søker inntekt fra fosterhjem?","Registrering.FrilansOppdrag.HarHattOppdragForFamilie":"Har søker hatt oppdrag for nær familie?","Registrering.FrilansOppdrag.Yes":"Ja","Registrering.FrilansOppdrag.No":"Nei","Registrering.FrilansOppdrag.OppgiPeriode":"Oppgi periode","Registrering.FrilansOppdrag.FieldArray.periodeFom":"F.o.m.","Registrering.FrilansOppdrag.FieldArray.periodeTom":"T.o.m.","Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver":"Oppdragsgiver","Registrering.FrilansOppdrag.FieldArray.NyPeriode":"Legg til periode","Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation":"F.o.m må være lik eller etter dato for første periode med frilansvirksomhet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title":"Inntektsgivende arbeid i utlandet","Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold":"Vedtaksløsningen foretar oppslag av norske arbeidsforhold fra Aa-registeret så dette skal ikke registreres her","Registrering.InntektsgivendeArbeid.Arbeidsgiver":"Arbeidsgiver","Registrering.InntektsgivendeArbeid.Land":"Land","Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold":"Legg til utenlandsk arbeidsforhold","Registrering.InntektsgivendeArbeid.periodeFom":"Fra og med","Registrering.InntektsgivendeArbeid.periodeTom":"Til og med","Registrering.SaveApplication.Title":"Ferdigstill registrering","Registrering.SaveApplication.Label":"Begrunnelse","Registrering.SaveApplication.Description":"Ved endring av opplysningene er begrunnelse obligatorisk","Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt":"Søkers opplysningsplikt er ikke overholdt","Registrering.SaveApplication.EndButton":"Bekreft og fortsett til avslag","Registrering.SaveApplication.SaveButton":"Bekreft og fortsett","Registrering.Verge":"Verge/fullmektig skal knyttes til saken","Registrering.Omsoknaden.MottattDato":"Mottatt dato","Registrering.Adopsjon.FodselsdatoBarnN":"Fødselsdato barn {n}","Registrering.Adopsjon.Title":"Adopsjon","Registrering.Adopsjon.OmsorgTitle":"Omsorg","Registrering.Adopsjon.GjelderEktefellesBarn":"Gjelder adopsjon ektefelles/samboers barn?","Registrering.Adopsjon.Ja":"Ja","Registrering.Adopsjon.Nei":"Nei","Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Dato for omsorgsovertakelse/stebarnsadopsjon","Registrering.Adopsjon.DatoForOvertakelsen":"Dato for omsorgsovertakelsen","Registrering.Adopsjon.Ankomstdato":"Ankomstdato","Registrering.Adopsjon.AntallBarn":"Antall barn","Registrering.RegistreringOpphold.AngiOpphold":"Oppgi hvilket land og i hvilken periode","Registrering.RegistreringOpphold.Add":"Legg til periode","Registrering.RegistreringOpphold.periodeFom":"F.o.m.","Registrering.RegistreringOpphold.periodeTom":"T.o.m.","Registrering.RegistreringOpphold.Country":"Land","Registrering.Opphold":"Opphold i Norge","Registrering.OppholdVedAdopsjon":"Søker oppholder seg i Norge nå","Registrering.OppholdVedFodsel":"Bor i Norge ved fødselstidspunktet","Registrering.OppholdNesteTolv":"Bor i Norge de neste 12 månedene","Registrering.OppholdSisteTolv":"Bodd i Norge de siste 12 månedene","Registrering.Rettigheter.AnnenForelderDoed":"Den andre forelderen er død","Registrering.Rettigheter.OvertaForeldreansvaretAlene":"Omsorgen er overtatt med sikte på å overta foreldreansvaret alene","Registrering.Rettigheter.MannAdoptererAlene":"Mann adopterer alene","Registrering.Rettigheter.IkkeRelevant":"Ikke relevant","Registrering.Rettigheter.Title":"Rettigheter","Registrering.Sprak":"Språk","Registrering.Sprak.Bokmal":"Bokmål","Registrering.Sprak.Nynorsk":"Nynorsk","Registrering.Sprak.Engelsk":"Engelsk","Registrering.VirksomhetNaeringTypePanel.Title":"Type næringsvirksomhet","Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged":"Er virksomheten blitt varig endret, nyoppstartet eller er søker ny i arbeidslivet?","Registrering.VirksomhetStartetPanel.Reason":"Årsak","Registrering.VirksomhetStartetPanel.HarVarigEndring":"Varig endring i næring","Registrering.VirksomhetStartetPanel.GjeldendeFom":"Gjeldende f.o.m.","Registrering.VirksomhetStartetPanel.ErNyoppstartet":"Nyoppstartet næring","Registrering.VirksomhetStartetPanel.NyIArbeidslivet":"Ny i arbeidslivet","Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse":"Beskriv endringen i næring","Registrering.VirksomhetStartetPanel.Inntekt":"Årsinntekt","Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak":"Må fylle ut minst en årsak","Registrering.VirksomhetRelasjonPanel.Relation":"Relasjon","Registrering.VirksomhetRelasjonPanel.No":"Nei, har ikke nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRelasjonPanel.Yes":"Ja, har nære venner eller er i familie tilknyttet næringen","Registrering.VirksomhetRegnskapPanel.Accountant":"Har søker regnskapsfører eller revisor?","Registrering.VirksomhetRegnskapPanel.AccountantName":"Navn på regnskapsfører/revisor?","Registrering.VirksomhetRegnskapPanel.AccountantPhone":"Telefonnummer til regnskapsfører/revisor?","Registrering.VirksomhetIdentifikasjonPanel.Name":"Navn på foretaket","Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway":"Er næringsvirksomheten registrert i Norge","Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber":"Virksomhetsnummer","Registrering.VirksomhetIdentifikasjonPanel.Country":"Hvilket land er virksomheten registrert i?","Registrering.VirksomhetIdentifikasjonPanel.periodeFom":"Fra og med","Registrering.VirksomhetIdentifikasjonPanel.periodeTom":"Til og med","Registrering.EgenVirksomhet.Title":"Egen næringsvirksomhet","Registrering.EgenVirksomhet.Yes":"Ja, søker har arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.EgenVirksomhet.No":"Nei, søker har ikke arbeidet i egen næringsvirksomhet i løpet av de 10 siste månedene","Registrering.RegistrerVirksomhetPanel.Add":"Legg til næringsvirksomhet","Registrering.RegistrerVirksomhetPanel.Name":"Søkers virksomheter","Registrering.RegistrerVirksomhetPanel.ArrayMinLength":"Det må registreres minst 1 virksomhet","BehovForTilretteleggingPanel.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilretteleggingPanel.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende":"Søkes det om svangerskapspenger som selvstendig næringsdrivende?","BehovForTilretteleggingPanel.SokForFrilans":"Søkes det om svangerskapspenger som frilanser?","BehovForTilretteleggingPanel.SokForArbeidsgiver":"Søkes det om svangerskapspenger som arbeidstaker?","BehovForTilretteleggingPanel.TittelSN":"Tilretteleggingsbehov for selvstendig næringsdrivende","BehovForTilretteleggingPanel.TittelFrilans":"Tilretteleggingsbehov for frilanser","BehovForTilretteleggingPanel.TittelArbeidstaker":"Tilretteleggingsbehov for arbeidstaker","BehovForTilretteleggingPanel.MinstEnMaaVereJa":"Minst ett av spørsmålene må besvares med alternativ Ja","BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov":"Legg til tilretteleggingsbehov","BehovForTilrettteleggingFieldArray.BehovForTilrettelegging":"Behov for tilrettelegging","BehovForTilrettteleggingFieldArray.FraDato":"Fra dato","BehovForTilrettteleggingFieldArray.Stillingsprosent":"Stillingsprosent","BehovForTilrettteleggingFieldArray.KanGjennomfores":"a) kan gjennomføres slik at arbeidstakeren kan fortsette med samme stilling fra og med","BehovForTilrettteleggingFieldArray.RedusertArbeid":"b) kan gjennomføres slik at arbeidstakeren kan fortsette med redusert arbeidstid fra og med","BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores":"c) kan ikke gjennomføres og arbeidstakeren må midlertidig gå ut av sitt arbeid fra og med","TilretteleggingForArbeidsgiverFieldArray.Title":"Arbeidsgivere med tilretteleggingsbehov","TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength":"Det må registreres minst 1 arbeidsforhold","TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver":"Legg til arbeidsgiver","RegistrerArbeidsgiverRad.OrgNr":"Arbeidsgivers orgnr/fnr","RegistrerArbeidsgiverRad.TilretteleggingFra":"Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med","Registrering.Dekningsgrad.Title":"Dekningsgrad","Registrering.Dekningsgrad.prosent.80":"80 prosent","Registrering.Dekningsgrad.prosent.100":"100 prosent","Registrering.Permisjon.Title":"Tidsrom for permisjon","Registrering.Permisjon.PermisjonForFodsel":"Permisjon før fødsel","Registrering.Permisjon.PerioderForeldrepenger":"Perioder med permisjon med foreldrepenger","Registrering.Permisjon.FulltUttak":"Fullt uttak","Registrering.Permisjon.FedrekvoteEllerMedmorkvote":"Fedrekvote eller kvote til medmor","Registrering.Permisjon.AngiPeriode":"Angi periode","Registrering.Permisjon.periodeType":"Periodetype","Registrering.Permisjon.nyPeriode":"Legg til periode","Registrering.Permisjon.periodeFom":"F.o.m.","Registrering.Permisjon.periodeTom":"T.o.m.","Registrering.Permisjon.SamtidigUttaksprosent":"Prosentandel uttak","Registrering.Permisjon.ArbeidskategoriLabel":"Type arbeid","Registrering.Permisjon.ErArbeidstaker":"Arbeidstaker","Registrering.Permisjon.ErIkkeArbeidstaker":"Selvstendig næringsdrivende/frilanser","Registrering.Permisjon.Orgnr":"Virksomhetsnummer","Registrering.Permisjon.OverforingAvKvote.OvertaKvoten":"Overføring av kvote","Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak":"Angi årsak","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt":"Mor er innlagt på helseinstitusjon","Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk":"Mor er pga sykdom avhengig av hjelp for å ta seg av barnet/barna","Registrering.Permisjon.OverforingAvKvote.OvertaKvote":"Søker ønsker å overta kvote","Registrering.Permisjon.OverforingAvKvote.fomDato":"F.o.m.","Registrering.Permisjon.OverforingAvKvote.tomDato":"T.o.m.","Registrering.Permisjon.Fellesperioden":"Fellesperioden","Registrering.Permisjon.Fellesperiode.Yes":"Ja","Registrering.Permisjon.Fellesperiode.No":"Nei","Registrering.Permisjon.Fellesperiode.ForeldrepengerTilFarEllerMedmor":"Skal far eller medmor ha foreldrepenger fra fellesperioden?","Registrering.Permisjon.Fellesperiode.periodeFom":"Fellesperiode F.o.m.","Registrering.Permisjon.Fellesperiode.periodeTom":"Fellesperiode T.o.m.","Registrering.Permisjon.Fellesperiode.morsAktivitet":"Mors aktivitet","Registrering.Permisjon.MorBorSammenFaren":"Mor bor sammen med faren til barnet","Registrering.Permisjon.Mor.Yes":"Ja","Registrering.Permisjon.Mor.No":"Nei","Registrering.Permisjon.HarSamtidigUttak":"Samtidig uttak","Registrering.Permisjon.Flerbarnsdager":"Flerbarnsdager","Registrering.Permisjon.UttakStartdato":"Når skal uttak av foreldrepenger starte?","Registrering.Permisjon.HeleModrekvotenUmiddelbart":"Skal hele mødrekvoten tas ut umiddelbart etter fødsel?","Registrering.Permisjon.HeleFellesperiodenUmiddelbart":"Skal hele fellesperioden tas ut umiddelbart etter mødrekvoten?","Registrering.Permisjon.Utsettelse.Title":"Utsettelse","Registrering.Permisjon.Utsettelse.Periode":"Hva skal utsettes","Registrering.Permisjon.Utsettelse.Arsak":"Årsak til utsettelse","Registrering.Permisjon.Utsettelse.UtsettUttaket":"Søker ønsker å utsette uttaket","Registrering.Permisjon.Opphold.OppholdUttaket":"Søker ønsker opphold i uttaket","Registrering.Permisjon.Opphold.Title":"Opphold","Registrering.Permisjon.Opphold.Periode":"Hva skal annen forelder ta ut?","Registrering.Permisjon.Opphold.Arsak":"Årsak til opphold","Registrering.Permisjon.Gradering.Title":"Gradering","Registrering.Permisjon.Gradering.Periode":"Hva skal graderes","Registrering.Permisjon.Gradering.Prosentandel":"Prosentandel arbeid i perioden","Registrering.Permisjon.Gradering.SkalGraderes":"Arbeidsforhold som skal graderes","Registrering.Permisjon.Gradering.GraderUttaket":"Søker ønsker å gradere uttaket","Registrering.Permisjon.PeriodeFomForTidlig":"Behandlinger med første uttaksdag før 01.01.2019 skal ikke behandles i vedtaksløsningen","Registrering.TheOtherParent.Confirmation":"Bekreftelse","Registrering.TheOtherParent.OtherParentKnowPeriods":"Annen forelder er kjent med hvilke perioder det er søkt om","PermisjonPanel.MinstEnPeriodeRequired":"Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering","PermisjonPanel.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)"},HT=ce(Le),Qs=({readOnly:e,alleKodeverk:r,kunMiliterEllerSiviltjeneste:n})=>l.jsx(ur,{value:HT,children:l.jsx($n,{readOnly:e,alleKodeverk:r,kunMiliterEllerSiviltjeneste:n})});Qs.initialValues=$n.initialValues;Qs.transformValues=$n.transformValues;Qs.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},kunMiliterEllerSiviltjeneste:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce="annenForelder",qa="kanIkkeOppgiBegrunnelse",YT="_inputBredde_138ho_1",ss={inputBredde:YT},CT=e=>e.filter(({kode:r})=>r!==dt.NORGE).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),ct=({readOnly:e=!0,alleKodeverk:r,fagsakPersonnummer:n})=>{const{formatMessage:a}=Ae(),{watch:t,control:s,trigger:i,formState:{isSubmitted:o}}=H(),d=t(`${Ce}.kanIkkeOppgiAnnenForelder`),g=t(`${Ce}.${qa}`),k=r.Landkoder.slice().sort((m,p)=>m.navn.localeCompare(p.navn));return l.jsxs(l.Fragment,{children:[l.jsx(je,{name:`${Ce}.foedselsnummer`,control:s,label:a({id:"Registrering.TheOtherParent.Fodselsnummer"}),parse:m=>m&&m.toString().replace(/\s/g,""),readOnly:e,className:ss.inputBredde,validate:d?[]:[G,jT,kd,LT(n)],disabled:d}),l.jsx(dr,{name:`${Ce}.kanIkkeOppgiAnnenForelder`,control:s,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent"}),readOnly:e,onChange:()=>o?i():void 0}),d===!0&&l.jsx(ar,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.Title"})}),l.jsx(Jr,{name:`${Ce}.${qa}.arsak`,control:s,hideLegend:!0,validate:[G],isReadOnly:e,radios:[{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.1"}),value:Ta.UKJENT_FORELDER},{label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Reason.2"}),value:Ta.IKKE_NORSK_FNR}]}),g?.arsak===Ta.IKKE_NORSK_FNR&&l.jsxs(l.Fragment,{children:[l.jsx(tr,{name:`${Ce}.${qa}.land`,control:s,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.Land"}),selectValues:CT(k),validate:[G],className:ss.inputBredde,readOnly:e}),l.jsx(je,{name:`${Ce}.${qa}.utenlandskFoedselsnummer`,control:s,label:a({id:"Registrering.TheOtherParent.CannotSpecifyOtherParent.UtenlandsFodselsnummer"}),validate:[G],className:ss.inputBredde,readOnly:e})]})]})})]})};ct.transformValues=({foedselsnummer:e,kanIkkeOppgiAnnenForelder:r,kanIkkeOppgiBegrunnelse:{arsak:n,land:a,utenlandskFoedselsnummer:t}={}})=>r?{foedselsnummer:void 0,kanIkkeOppgiAnnenForelder:!0,kanIkkeOppgiBegrunnelse:n===Ta.IKKE_NORSK_FNR?{arsak:n,land:a,utenlandskFoedselsnummer:t}:{arsak:n}}:{foedselsnummer:e,kanIkkeOppgiAnnenForelder:!1,kanIkkeOppgiBegrunnelse:void 0};ct.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""}}};const Ao=ce(Le),qe=({name:e,control:r,label:n,isHorizontal:a=!0,readOnly:t,trueLabel:s,trueContent:i,falseLabel:o,falseContent:d,isRequired:g=!0})=>l.jsx(Jr,{name:e,control:r,label:n,validate:g?[G]:[],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:a,radios:[{label:s??Ao.formatMessage({id:"Registrering.Yes"}),value:"true",element:i},{label:o??Ao.formatMessage({id:"Registrering.No"}),value:"false",element:d}]});qe.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"UseControllerProps['name']",raw:"UseControllerProps<T>['name']"},description:""},control:{required:!0,tsType:{name:"UseControllerProps['control']",raw:"UseControllerProps<T>['control']"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},isHorizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},trueLabel:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const ft=({readOnly:e,sokerErMor:r})=>{const n=Ae(),{watch:a,control:t}=H(),s=a(`${Ce}.sokerHarAleneomsorg`),i=a(`${Ce}.denAndreForelderenHarRettPaForeldrepenger`),o=a(`${Ce}.annenForelderRettEØS`);return l.jsxs(X,{gap:"4",children:[l.jsx(qe,{name:`${Ce}.sokerHarAleneomsorg`,control:t,label:n.formatMessage({id:"Registrering.Permisjon.SøkerHarAleneomsorg"}),readOnly:e}),s===!1&&l.jsx(qe,{name:`${Ce}.denAndreForelderenHarRettPaForeldrepenger`,control:t,label:n.formatMessage({id:"Registrering.Permisjon.HarRettPaForeldrepenger"}),readOnly:e}),s===!1&&i===!1&&l.jsx(qe,{name:`${Ce}.annenForelderRettEØS`,control:t,label:n.formatMessage({id:"Registrering.Permisjon.AnnenForelderRettEØS"}),readOnly:e}),!r&&s===!1&&i===!1&&o===!1&&l.jsx(qe,{name:`${Ce}.morMottarUføretrygd`,control:t,label:n.formatMessage({id:"Registrering.Permisjon.MorUføretrygd"}),readOnly:e})]})};ft.transformValues=({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:r,annenForelderRettEØS:n,morMottarUføretrygd:a})=>({sokerHarAleneomsorg:e,denAndreForelderenHarRettPaForeldrepenger:e===!1?r:void 0,annenForelderRettEØS:r===!1?n:void 0,morMottarUføretrygd:n===!1?a:void 0});ft.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"sokerHarAleneomsorg",value:{name:"boolean",required:!1}},{key:"denAndreForelderenHarRettPaForeldrepenger",value:{name:"boolean",required:!1}},{key:"annenForelderRettEØS",value:{name:"boolean",required:!1}},{key:"morMottarUføretrygd",value:{name:"boolean",required:!1}}]}}}}],displayName:"PermisjonRettigheterPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const $T=ce(Le),ei=({readOnly:e,alleKodeverk:r,fagsakPersonnummer:n,sokerErMor:a})=>l.jsx(ur,{value:$T,children:l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.TheOtherParent.Title"})}),l.jsx(ct,{readOnly:e,fagsakPersonnummer:n,alleKodeverk:r}),l.jsx(ft,{readOnly:e,sokerErMor:a})]})})});ei.initialValues=()=>({[Ce]:{}});ei.transformValues=({annenForelder:e})=>({[Ce]:{...ft.transformValues(e),...ct.transformValues(e)}});ei.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},fagsakPersonnummer:{required:!0,tsType:{name:"string"},description:""},sokerErMor:{required:!0,tsType:{name:"boolean"},description:""}}};const Ue="frilans",ma=(e,r)=>e(r),WT=(e=[])=>e.map(r=>r.periodeFom).filter(r=>r&&r!=="").sort((r,n)=>ne(r,$e).diff(ne(n,$e))),JT=Xs(50),zT=(e,r,n,a)=>()=>{const t=ma(e,`${r}.fomDato`);return n.length>0&&n[0]&&t&&!ne(n[0]).isSameOrBefore(ne(t))?a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},vd=({readOnly:e})=>{const r=Ae(),{control:n,getValues:a,watch:t,trigger:s,formState:{isSubmitted:i}}=H(),{fields:o,remove:d,append:g}=sr({control:n,name:`${Ue}.oppdragPerioder`}),u=t(`${Ue}.perioder`),k=WT(u);return l.jsx(Rr,{bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:o,readOnly:e,append:g,remove:d,children:(m,p,c)=>{const O=`${Ue}.oppdragPerioder.${p}`;return l.jsxs(Qe,{gap:"4",paddingBlock:"2",align:"end",children:[l.jsx(Q,{name:`${Ue}.oppdragPerioder.${p}.fomDato`,control:n,label:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[re,zT(a,O,k,r),()=>{const T=ma(a,`${O}.fomDato`),f=ma(a,`${O}.tomDato`);return f&&T?er(f)(T):null}],onChange:()=>i?s():void 0}),l.jsx(Q,{name:`${Ue}.oppdragPerioder.${p}.tomDato`,control:n,label:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[re,()=>{const T=ma(a,`${O}.fomDato`),f=ma(a,`${O}.tomDato`);return f&&T?Ge(T)(f):null}],onChange:()=>i?s():void 0}),l.jsx(je,{name:`${Ue}.oppdragPerioder.${p}.oppdragsgiver`,control:n,validate:[JT],label:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})}),c&&l.jsx("div",{children:c()})]},m.id)}})};vd.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Wn=({readOnly:e})=>{const{watch:r,control:n}=H(),a=r(`${Ue}.harHattOppdragForFamilie`);return l.jsxs(l.Fragment,{children:[l.jsx(qe,{name:`${Ue}.harHattOppdragForFamilie`,control:n,label:l.jsx(w,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),readOnly:e}),a&&l.jsxs(ar,{children:[l.jsx(kr,{size:"small",children:l.jsx(w,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),l.jsx(vd,{readOnly:e})]})]})};Wn.initialValues=()=>({oppdragPerioder:[{fomDato:"",tomDato:"",oppdragsgiver:""}]});Wn.transformValues=({harHattOppdragForFamilie:e,oppdragPerioder:r})=>({harHattOppdragForFamilie:e,oppdragPerioder:e?r:void 0});Wn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ja=(e,r)=>e(r),Rt=({readOnly:e})=>{const r=Ae(),{control:n,getValues:a,formState:{isSubmitted:t},trigger:s}=H(),{fields:i,remove:o,append:d}=sr({control:n,name:`${Ue}.perioder`});return l.jsx(Rr,{fields:i,bodyText:r.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:e,remove:o,append:d,children:(g,u,k)=>{const m=`${Ue}.perioder.${u}`;return l.jsxs(Qe,{gap:"4",paddingBlock:"2",children:[l.jsx(Q,{name:`${Ue}.perioder.${u}.periodeFom`,control:n,label:u===0?r.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[G,re,()=>{const p=ja(a,`${m}.periodeFom`),c=ja(a,`${m}.periodeTom`);return c&&p?er(c)(p):null}],onChange:()=>t?s():void 0}),l.jsx(Q,{name:`${Ue}.perioder.${u}.periodeTom`,control:n,label:u===0?r.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[G,re,()=>{const p=ja(a,`${m}.periodeFom`),c=ja(a,`${m}.periodeTom`);return c&&p?Ge(p)(c):null}],onChange:()=>t?s():void 0}),k&&l.jsx("div",{children:k()})]},g.id)}})};Rt.initialValues=()=>({perioder:[{periodeFom:"",periodeTom:""}]});Rt.__docgenInfo={description:`FrilansPerioderFieldArray

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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Jn=({readOnly:e})=>{const{control:r}=H();return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.Frilans.Title"})}),l.jsx(qe,{name:`${Ue}.harSokerPeriodeMedFrilans`,control:r,label:l.jsx(w,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),readOnly:e,trueContent:l.jsx(ar,{marginTop:8,children:l.jsxs(X,{gap:"4",children:[l.jsx(Na,{children:l.jsx(w,{id:"Registrering.Frilans.OppgiPeriode"})}),l.jsx(Rt,{readOnly:e}),l.jsx(qe,{name:`${Ue}.erNyoppstartetFrilanser`,control:r,label:l.jsx(w,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),readOnly:e}),l.jsx(qe,{name:`${Ue}.harInntektFraFosterhjem`,control:r,label:l.jsx(w,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),readOnly:e}),l.jsx(Wn,{readOnly:e})]})})})]})})};Jn.initialValues=()=>({[Ue]:{...Rt.initialValues(),...Wn.initialValues()}});Jn.transformValues=({frilans:e})=>({[Ue]:e.harSokerPeriodeMedFrilans===!1?{harSokerPeriodeMedFrilans:!1}:{harSokerPeriodeMedFrilans:!0,perioder:e.perioder,erNyoppstartetFrilanser:e.erNyoppstartetFrilanser,harInntektFraFosterhjem:e.harInntektFraFosterhjem,...Wn.transformValues(e)}});Jn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const XT=ce(Le),ri=({readOnly:e})=>l.jsx(ur,{value:XT,children:l.jsx(Jn,{readOnly:e})});ri.initialValues=Jn.initialValues;ri.transformValues=Jn.transformValues;ri.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Vn="arbeidsforhold",sn=({children:e,remove:r,readOnly:n,index:a})=>l.jsxs(l.Fragment,{children:[a>0&&l.jsx(Ip,{spaceUnder:!0,spaceAbove:!0}),l.jsxs(Qe,{wrap:!1,justify:"space-between",children:[l.jsx(Qe,{wrap:!0,gap:"4",children:e}),!n&&a>0&&l.jsx(Je,{type:"button",variant:"tertiary-neutral",icon:l.jsx(kt,{}),onClick:()=>r(a)})]})]});sn.__docgenInfo={description:"",methods:[],displayName:"FieldArrayRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ZT=Xs(50),QT=e=>e.filter(({kode:r})=>r!==dt.NORGE).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),md=({alleKodeverk:e,readOnly:r})=>{const n=Ae(),{control:a}=H(),{fields:t,remove:s,append:i}=sr({control:a,name:Vn}),o=e.Landkoder.slice().sort((d,g)=>d.navn.localeCompare(g.navn));return l.jsx(Rr,{fields:t,bodyText:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.LeggTilArbeidsforhold"}),readOnly:r,emptyPeriodTemplate:{arbeidsgiver:"",periodeFom:"",periodeTom:"",land:""},remove:s,append:i,children:(d,g)=>l.jsxs(sn,{remove:s,index:g,readOnly:r,children:[l.jsx(je,{readOnly:r,control:a,name:`${Vn}.${g}.arbeidsgiver`,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.Arbeidsgiver"}),validate:[ZT],maxLength:99}),l.jsx(Q,{name:`${Vn}.${g}.periodeFom`,control:a,isReadOnly:r,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeFom"}),validate:[re]}),l.jsx(Q,{name:`${Vn}.${g}.periodeTom`,control:a,isReadOnly:r,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.periodeTom"}),validate:[re]}),l.jsx(tr,{name:`${Vn}.${g}.land`,control:a,readOnly:r,label:n.formatMessage({id:"Registrering.InntektsgivendeArbeid.Land"}),selectValues:QT(o),size:"small"})]},d.id)})};md.__docgenInfo={description:`RenderInntektsgivendeArbeidFieldArray

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const zn=({readOnly:e,alleKodeverk:r})=>l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.Title"})}),l.jsx(Na,{children:l.jsx(w,{id:"Registrering.InntektsgivendeArbeid.ArbeidIUtland.SkalIkkeRegistrereArbeidsforhold"})}),l.jsx(md,{readOnly:e,alleKodeverk:r})]})});zn.initialValues=()=>({[Vn]:[]});const La=e=>e===void 0||e==="";zn.transformValues=({arbeidsforhold:e})=>({arbeidsforhold:e?.filter(r=>!(La(r.arbeidsgiver)&&La(r.land)&&La(r.periodeFom)&&La(r.periodeTom)))});zn.__docgenInfo={description:`InntektsgivendeArbeidPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const eE=ce(Le),ni=({readOnly:e,alleKodeverk:r})=>l.jsx(ur,{value:eE,children:l.jsx(zn,{readOnly:e,alleKodeverk:r})});ni.initialValues=zn.initialValues;ni.transformValues=zn.transformValues;ni.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const rE=Xs(1500),Xn=({submitting:e,onSubmitUfullstendigsoknad:r,readOnly:n=!0,erEndringssøknad:a})=>{const t=Ae(),{watch:s,control:i}=H(),o=s("ufullstendigSoeknad")||!1;return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:t.formatMessage({id:"Registrering.SaveApplication.Title"})}),l.jsx(id,{name:"kommentarEndring",control:i,label:t.formatMessage({id:"Registrering.SaveApplication.Label"}),description:t.formatMessage({id:"Registrering.SaveApplication.Description"}),maxLength:1500,validate:[rE,Zs],readOnly:n}),!a&&l.jsxs("div",{children:[l.jsx(dr,{name:"registrerVerge",control:i,label:t.formatMessage({id:"Registrering.Verge"}),readOnly:n}),l.jsx(dr,{name:"ufullstendigSoeknad",control:i,label:t.formatMessage({id:"Registrering.SaveApplication.OpplysningspliktErIkkeOverholdt"}),readOnly:n})]}),l.jsxs("div",{children:[!o&&l.jsx(Je,{id:"saveButton",size:"small",variant:"primary",loading:e,disabled:n||e,onClick:GT,children:l.jsx(w,{id:"Registrering.SaveApplication.SaveButton"})}),o&&l.jsx(Je,{id:"endButton",onClick:r,size:"small",variant:"primary",loading:e,disabled:n||e,type:"button",children:l.jsx(w,{id:"Registrering.SaveApplication.EndButton"})})]})]})})};Xn.initialValues=()=>({kommentarEndring:void 0,registrerVerge:!1,ufullstendigSoeknad:!1});Xn.transformValues=({kommentarEndring:e,registrerVerge:r,ufullstendigSoeknad:n})=>({kommentarEndring:e,registrerVerge:r,ufullstendigSoeknad:n});Xn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPanel",props:{onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const nE=ce(Le),ai=e=>l.jsx(ur,{value:nE,children:l.jsx(Xn,{...e})});ai.initialValues=Xn.initialValues;ai.transformValues=Xn.transformValues;ai.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kommentarEndring",value:{name:"string",required:!1}},{key:"registrerVerge",value:{name:"boolean",required:!1}},{key:"ufullstendigSoeknad",value:{name:"boolean",required:!1}}]}}}}],displayName:"LagreSoknadPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},onSubmitUfullstendigsoknad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},submitting:{required:!0,tsType:{name:"boolean"},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const aE=ce(Le),co=()=>ne().subtract(1,"year").subtract(1,"day"),tE=()=>ne(),ti=({readOnly:e})=>{const{control:r}=H();return l.jsx(ur,{value:aE,children:l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoTittel")}),l.jsx(Q,{name:"mottattDato",control:r,label:l.jsx(w,{id:"Registrering.Omsoknaden.MottattDato"},"regDatoUnder"),fromDate:co().toDate(),toDate:tE().toDate(),validate:[G,re,xn,Ge(co())],isReadOnly:e})]})})})};ti.initialValues=()=>({mottattDato:void 0});ti.transformValues=({mottattDato:e})=>({mottattDato:e});ti.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ mottattDato }: MottattDatoFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  mottattDato?: string;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}}]},alias:"MottattDatoFormValues"}}],returns:null}],displayName:"MottattDatoPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ur="omsorg",sE="_barnInput_1jjt5_1",iE={barnInput:sE},oE=10,lE=e=>e?PT(1)(e):void 0,dE=e=>e?At(10)(e):void 0,fo=(e,r)=>n=>{if(e===0&&r&&n)return wT(n,Array.isArray(r)?r[0]:r)},Zn=({readOnly:e=!0,familieHendelseType:r,isForeldrepengerFagsak:n,fodselsdatoer:a})=>{const{formatMessage:t}=Ae(),{control:s,watch:i}=H(),{fields:o,remove:d,append:g}=sr({control:s,name:`${Ur}.foedselsDato`}),u=i(`${Ur}.antallBarn`)??0;return A.useEffect(()=>{if(o.length>Math.max(u,0))for(let k=o.length;k>u;k-=1)d(k-1);else if(o.length<Math.min(u,oE))for(let k=o.length;k<u;k+=1)g({id:k,dato:void 0})},[u]),l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:r===_r.ADOPSJON?"Registrering.Adopsjon.Title":"Registrering.Adopsjon.OmsorgTitle"})}),n&&r===_r.ADOPSJON&&l.jsx(Jr,{name:`${Ur}.erEktefellesBarn`,control:s,label:l.jsx(w,{id:"Registrering.Adopsjon.GjelderEktefellesBarn"}),validate:[G],isReadOnly:e,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:t({id:"Registrering.Adopsjon.Ja"}),value:"true"},{label:t({id:"Registrering.Adopsjon.Nei"}),value:"false"}]}),l.jsx(Q,{name:`${Ur}.omsorgsovertakelsesdato`,control:s,label:t({id:r===_r.ADOPSJON?"Registrering.Adopsjon.DatoForOvertakelsenStebarn":"Registrering.Adopsjon.DatoForOvertakelsen"}),isReadOnly:e,validate:r===_r.ADOPSJON?[G,re]:[re]}),l.jsxs(Qe,{gap:"4",children:[r===_r.ADOPSJON&&l.jsx(Q,{name:`${Ur}.ankomstdato`,control:s,label:t({id:"Registrering.Adopsjon.Ankomstdato"}),isReadOnly:e,validate:[re]}),l.jsx(je,{name:`${Ur}.antallBarn`,control:s,label:t({id:"Registrering.Adopsjon.AntallBarn"}),readOnly:e,className:iE.barnInput,parse:k=>{const m=parseInt(k.toString(),10);return Number.isNaN(m)?k:m},validate:[...r===_r.ADOPSJON?[G]:[],Rn,lE,dE]})]}),o.map((k,m)=>l.jsx(v.Fragment,{children:l.jsx(Q,{name:`${Ur}.foedselsDato.${m}.dato`,control:s,isReadOnly:e,validate:r===_r.ADOPSJON?[G,re,xn,fo(m,a)]:[re,xn,fo(m,a)],label:t({id:"Registrering.Adopsjon.FodselsdatoBarnN"},{n:m+1})})},k.id))]})})};Zn.initialValues=()=>({[Ur]:{}});Zn.transformValues=({omsorg:e})=>({[Ur]:{...e,foedselsDato:e.foedselsDato&&e.foedselsDato.length>0?e.foedselsDato.map(r=>r.dato):void 0}});Zn.__docgenInfo={description:`OmsorgOgAdopsjonPanel

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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPanel",props:{familieHendelseType:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isForeldrepengerFagsak:{required:!0,tsType:{name:"boolean"},description:""},fodselsdatoer:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const uE=ce(Le),si=({readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:n=!1,fodselsdato:a})=>l.jsx(ur,{value:uE,children:l.jsx(Zn,{readOnly:e,familieHendelseType:r,isForeldrepengerFagsak:n,fodselsdatoer:a})});si.initialValues=Zn.initialValues;si.transformValues=Zn.transformValues;si.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"omsorgsovertakelsesdato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}},{key:"foedselsDato",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | undefined)[]",required:!1}}]},required:!0}}]}}}}],displayName:"OmsorgOgAdopsjonPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},familieHendelseType:{required:!0,tsType:{name:"string"},description:""},isForeldrepengerFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fodselsdato:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};const kE={land:void 0,periodeFom:void 0,periodeTom:void 0},nt=(e,r)=>e(r),Ro=(e,r)=>()=>{const a=e(r).filter(({periodeFom:t,periodeTom:s})=>t&&t!==""&&s&&s!=="").map(({periodeFom:t,periodeTom:s})=>[t,s]);return a.length>0?Cn(a):void 0},gE=e=>e.filter(({kode:r})=>r!==dt.NORGE).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),Fo=(e,r,n,a)=>()=>{const t=nt(e,`${r}.${n}.periodeFom`),s=nt(e,`${r}.${n}.periodeTom`);return!s||!t?null:a?er(s)(t):Ge(t)(s)},cs=({erTidligereOpphold:e=!1,mottattDato:r,readOnly:n,countryCodes:a})=>{const t=Ae(),s=e?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:i,getValues:o,trigger:d,formState:{isSubmitted:g}}=H(),{fields:u,remove:k,append:m}=sr({control:i,name:s}),p=gE(a);return l.jsx(Rr,{fields:u,titleText:t.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:t.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:kE,readOnly:n,remove:k,append:m,children:(c,O,T)=>l.jsx(v.Fragment,{children:l.jsxs(Qe,{gap:"4",paddingBlock:"2",children:[l.jsx(tr,{name:`${s}.${O}.land`,control:i,label:t.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:p,readOnly:n,validate:[G]}),l.jsx(Q,{name:`${s}.${O}.periodeFom`,control:i,label:t.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:n,validate:[G,re,Fo(o,s,O,!0),()=>{const f=nt(o,`${s}.${O}.periodeFom`);return e?er(ne().format($e))(f):r?Ge(r)(f):void 0},Ro(o,s)],onChange:()=>g?d():void 0}),l.jsx(Q,{name:`${s}.${O}.periodeTom`,control:i,label:t.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:n,validate:[G,re,Fo(o,s,O,!1),()=>{const f=nt(o,`${s}.${O}.periodeTom`);return e?er(ne().format($e))(f):r?Ge(r)(f):void 0},Ro(o,s)],onChange:()=>g?d():void 0}),T&&l.jsx("div",{children:T()})]},c.id)},c.id)})};cs.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn<'Landkoder'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Qn=({readOnly:e=!0,alleKodeverk:r,mottattDato:n,erAdopsjon:a})=>{const{formatMessage:t}=Ae(),s=r.Landkoder.slice().sort((u,k)=>u.navn.localeCompare(k.navn)),{watch:i,control:o}=H(),d=!i("oppholdSisteTolvINorge",!0),g=!i("oppholdNesteTolvINorge",!0);return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.Opphold"})}),l.jsx(qe,{name:"oppholdINorge",control:o,label:t({id:a?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),readOnly:e}),l.jsxs(X,{gap:"2",children:[l.jsx(qe,{name:"oppholdSisteTolvINorge",control:o,label:l.jsx(w,{id:"Registrering.OppholdSisteTolv"}),readOnly:e}),d&&l.jsx(ar,{alignOffset:58,children:l.jsx(cs,{erTidligereOpphold:!0,mottattDato:n,countryCodes:s,readOnly:e})})]}),l.jsxs(X,{gap:"2",children:[l.jsx(qe,{name:"oppholdNesteTolvINorge",control:o,label:l.jsx(w,{id:"Registrering.OppholdNesteTolv"}),readOnly:e}),g&&l.jsx(ar,{alignOffset:58,children:l.jsx(cs,{mottattDato:n,countryCodes:s,readOnly:e})})]})]})})};Qn.initialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});Qn.transformValues=({oppholdINorge:e,oppholdSisteTolvINorge:r,oppholdNesteTolvINorge:n,tidligereOppholdUtenlands:a,fremtidigeOppholdUtenlands:t})=>({oppholdINorge:e,harTidligereOppholdUtenlands:!r,harFremtidigeOppholdUtenlands:!n,tidligereOppholdUtenlands:r?void 0:a,fremtidigeOppholdUtenlands:n?void 0:t});Qn.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const vE=ce(Le),ii=({readOnly:e,erAdopsjon:r,alleKodeverk:n,mottattDato:a})=>l.jsx(ur,{value:vE,children:l.jsx(Qn,{readOnly:e,erAdopsjon:r,alleKodeverk:n,mottattDato:a})});ii.initialValues=Qn.initialValues;ii.transformValues=Qn.transformValues;ii.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};class aA{fagsakYtelseType;familieHendelseType;foreldreType;constructor(r,n,a){this.fagsakYtelseType=Ut(r),r===Dd.SVANGERSKAPSPENGER?this.familieHendelseType=_r.FODSEL:this.familieHendelseType=Ut(n),this.foreldreType=Ut(a)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const pa=ce(Le),Ln={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},Oo=[{label:pa.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:Ln.ANNEN_FORELDER_DOED},{label:pa.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:Ln.OVERTA_FORELDREANSVARET_ALENE},{label:pa.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:Ln.MANN_ADOPTERER_ALENE},{label:pa.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:Ln.IKKE_RELEVANT}],oi=({readOnly:e,soknadData:r})=>{const a=r.getFamilieHendelseType()!==_r.FODSEL&&r.getForeldreType()===lt.FAR?Oo:Oo.filter(s=>s.value!==Ln.MANN_ADOPTERER_ALENE),{control:t}=H();return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:pa.formatMessage({id:"Registrering.Rettigheter.Title"})}),l.jsx(Jr,{name:"rettigheter",control:t,isReadOnly:e,radios:a})]})})};oi.initialValues=()=>({rettigheter:void 0});oi.transformValues=({rettigheter:e})=>e===Ln.IKKE_RELEVANT?{}:{rettigheter:e};oi.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const wa=ce(Le),is={BOKMAL:"NB",NYNORSK:"NN",ENGELSK:"EN"},li=({readOnly:e})=>{const{control:r}=H();return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:wa.formatMessage({id:"Registrering.Sprak"})}),l.jsx(Jr,{name:"språkkode",control:r,validate:[G],isReadOnly:e,radios:[{label:wa.formatMessage({id:"Registrering.Sprak.Bokmal"}),value:is.BOKMAL},{label:wa.formatMessage({id:"Registrering.Sprak.Nynorsk"}),value:is.NYNORSK},{label:wa.formatMessage({id:"Registrering.Sprak.Engelsk"}),value:is.ENGELSK}]})]})})};li.initialValues=()=>({språkkode:void 0});li.transformValues=({språkkode:e})=>({språkkode:e});li.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ språkkode }: SprakFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  språkkode?: string;
}`,signature:{properties:[{key:"språkkode",value:{name:"string",required:!1}}]},alias:"SprakFormValues"}}],returns:null}],displayName:"SprakPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const En="egenVirksomhet",he=`${En}.virksomheter`,mE={},pE=e=>e.map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),Ft=({index:e,readOnly:r,alleKodeverk:n})=>{const a=Ae(),t=n.Landkoder.slice().sort((o,d)=>o.navn.localeCompare(d.navn)),{getValues:s,control:i}=H();return l.jsx(qe,{name:`${he}.${e}.virksomhetRegistrertINorge`,control:i,label:l.jsx(w,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),readOnly:r,trueContent:l.jsx(ar,{marginTop:8,children:l.jsx(je,{name:`${he}.${e}.organisasjonsnummer`,control:i,readOnly:r,validate:[G,Rn,DT],label:l.jsx(w,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})}),falseContent:l.jsx(ar,{alignOffset:58,marginTop:8,children:l.jsxs(X,{gap:"4",children:[l.jsx(tr,{name:`${he}.${e}.landJobberFra`,control:i,className:mE.landBredde,selectValues:pE(t),validate:[G],label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),l.jsxs(Qe,{gap:"4",children:[l.jsx(Q,{name:`${he}.${e}.fom`,control:i,isReadOnly:r,validate:[G,re,xn],label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})}),l.jsx(Q,{name:`${he}.${e}.tom`,control:i,isReadOnly:r,validate:[re,o=>{const d=s(`${he}.${e}.fom`);return d?UT(d,o):null}],label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})]})]})})})};Ft.transformValues=({virksomhetRegistrertINorge:e,organisasjonsnummer:r,landJobberFra:n,fom:a,tom:t})=>({virksomhetRegistrertINorge:e,organisasjonsnummer:e?r:void 0,...e===!1?{landJobberFra:n,fom:a,tom:t}:{landJobberFra:"NOR"}});Ft.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Ot=({index:e,readOnly:r})=>{const{control:n}=H();return l.jsx(qe,{name:`${he}.${e}.harRegnskapsforer`,control:n,label:l.jsx(w,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),readOnly:r,trueContent:l.jsx(ar,{marginTop:8,children:l.jsxs(X,{gap:"4",children:[l.jsx(je,{name:`${he}.${e}.navnRegnskapsforer`,control:n,readOnly:r,validate:[G,Zs],label:l.jsx(w,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),l.jsx(je,{name:`${he}.${e}.tlfRegnskapsforer`,control:n,readOnly:r,validate:[G,Rn],label:l.jsx(w,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]})})})};Ot.transformValues=({harRegnskapsforer:e,navnRegnskapsforer:r,tlfRegnskapsforer:n})=>({harRegnskapsforer:e,...e?{navnRegnskapsforer:r}:{},...e?{tlfRegnskapsforer:n}:{}});Ot.__docgenInfo={description:`VirksomhetRegnskapPanel

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
}`,signature:{properties:[{key:"typeVirksomhet",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],alias:"RegistrerVirksomhetFormValues"}}],returns:null}],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const pd=({readOnly:e,index:r})=>{const{control:n}=H();return l.jsx(qe,{name:`${he}.${r}.familieEllerVennerTilknyttetNaringen`,control:n,label:l.jsx(w,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),readOnly:e,isHorizontal:!1,trueLabel:l.jsx(w,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),falseLabel:l.jsx(w,{id:"Registrering.VirksomhetRelasjonPanel.No"})})};pd.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const yE="_inntektBredde_1xgnj_1",TE={inntektBredde:yE},Nt=({readOnly:e,index:r})=>{const{control:n}=H();return l.jsx(qe,{name:`${he}.${r}.varigEndretEllerStartetSisteFireAr`,control:n,label:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),readOnly:e,trueContent:l.jsx(ar,{marginTop:8,children:l.jsxs(X,{gap:"4",children:[l.jsx(kr,{size:"small",children:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),l.jsxs(Js,{name:`${he}.${r}.varigEndretEllerStartetSisteFireArArsak`,control:n,validate:[G],children:[l.jsx(No,{value:"harVarigEndring",label:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"}),readOnly:e,index:r}),l.jsx(Pa,{value:"erNyoppstartet",readOnly:e,children:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),l.jsx(No,{value:"erNyIArbeidslivet",label:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.NyIArbeidslivet"}),readOnly:e,index:r})]}),l.jsx(id,{name:`${he}.${r}.beskrivelseAvEndring`,control:n,label:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[Zs]}),l.jsx(je,{name:`${he}.${r}.inntekt`,control:n,label:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:e,validate:[Rn,G],className:TE.inntektBredde,parse:a=>{const t=parseInt(a.toString(),10);return Number.isNaN(t)?a:t}})]})})})};Nt.transformValues=({varigEndretEllerStartetSisteFireAr:e,varigEndretEllerStartetSisteFireArArsak:r,varigEndringGjeldendeFom:n,nyIArbeidslivetFom:a,beskrivelseAvEndring:t,inntekt:s})=>{const i=r.includes("harVarigEndring"),o=r.includes("erNyoppstartet"),d=r.includes("erNyIArbeidslivet");return{varigEndretEllerStartetSisteFireAr:e,...e?{harVarigEndring:i,...i?{varigEndringGjeldendeFom:n}:{},erNyoppstartet:o,erNyIArbeidslivet:d,...d?{nyIArbeidslivetFom:a}:{},beskrivelseAvEndring:t,inntekt:s}:{}}};const No=({value:e,label:r,readOnly:n,index:a})=>{const{watch:t,control:s}=H(),i=t(`${he}.${a}.varigEndretEllerStartetSisteFireArArsak`),[o,d]=A.useState(i.includes(e));return l.jsxs(X,{gap:"2",children:[l.jsx(Pa,{value:e,onClick:()=>d(!o),disabled:n,children:r}),o&&l.jsx(ar,{marginTop:8,children:l.jsx(Q,{name:e==="harVarigEndring"?`${he}.${a}.varigEndringGjeldendeFom`:`${he}.${a}.nyIArbeidslivetFom`,control:s,isReadOnly:n,validate:[re,G],label:l.jsx(w,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]})};Nt.__docgenInfo={description:`VirksomhetStartetEndretPanel

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
}`,signature:{properties:[{key:"varigEndretEllerStartetSisteFireAr",value:{name:"boolean",required:!1}},{key:"varigEndretEllerStartetSisteFireArArsak",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"varigEndringGjeldendeFom",value:{name:"string",required:!1}},{key:"nyIArbeidslivetFom",value:{name:"string",required:!1}},{key:"beskrivelseAvEndring",value:{name:"string",required:!1}},{key:"inntekt",value:{name:"number",required:!1}}]},alias:"StartedEndretFormValues"}}],returns:null}],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const bo={[Dr.DAGMAMMA]:1,[Dr.FISKE]:2,[Dr.JORDBRUK_ELLER_SKOGBRUK]:3,[Dr.ANNEN]:4},bt=({readOnly:e,alleKodeverk:r,index:n})=>{const{control:a}=H();return l.jsx(Js,{name:`${he}.${n}.typeVirksomhet`,control:a,label:l.jsx(w,{id:"Registrering.VirksomhetNaeringTypePanel.Title"}),validate:[G],isReadOnly:e,children:EE(r).map(t=>l.jsx(Pa,{value:t.kode,readOnly:e,children:t.navn},t.kode))})};bt.transformValues=({typeVirksomhet:e})=>({typeVirksomhet:{ANNEN:e.includes(Dr.ANNEN),FISKE:e.includes(Dr.FISKE),DAGMAMMA:e.includes(Dr.DAGMAMMA),JORDBRUK_SKOGBRUK:e.includes(Dr.JORDBRUK_ELLER_SKOGBRUK)}});const EE=e=>e.VirksomhetType.filter(r=>r.kode!==Dr.FRILANSER).sort((r,n)=>AE(bo[r.kode],bo[n.kode])),AE=(e,r)=>e>r?1:e<r?-1:0;bt.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},index:{required:!0,tsType:{name:"number"},description:""}}};const Fn=({open:e,readOnly:r=!1,alleKodeverk:n,index:a,remove:t})=>{const{getFieldState:s,watch:i,control:o}=H(),{error:d}=s(`${he}.${a}`),g=i(`${he}.${a}.navn`),[u,k]=A.useState(e);return l.jsxs(de.Row,{shadeOnHover:!1,style:{backgroundColor:d&&!u?"var(--a-red-50)":"none"},children:[l.jsx(de.DataCell,{valign:"top",children:l.jsx(Je,{type:"button",variant:"tertiary-neutral",onClick:()=>k(m=>!m),icon:u?l.jsx(Qo,{"aria-label":"Vis mindre"}):l.jsx(ut,{"aria-label":"Vis mer"})})}),l.jsxs(de.DataCell,{valign:"top",children:[l.jsx(Ka,{hidden:u,paddingBlock:"3",children:l.jsx(Ze,{weight:"semibold",children:g})}),l.jsxs(X,{gap:"4",hidden:!u,children:[l.jsx(je,{name:`${he}.${a}.navn`,control:o,validate:[G],label:l.jsx(w,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),readOnly:r}),l.jsx(Ft,{readOnly:r,index:a,alleKodeverk:n}),l.jsx(bt,{readOnly:r,index:a,alleKodeverk:n}),l.jsx(Nt,{readOnly:r,index:a}),l.jsx(Ot,{readOnly:r,index:a}),l.jsx(pd,{readOnly:r,index:a})]})]}),l.jsx(de.DataCell,{valign:"top",align:"right",children:l.jsx(Je,{type:"button",variant:"tertiary-neutral",onClick:t,onKeyDown:t,icon:l.jsx(kt,{"aria-label":"Slett rad"})})})]})};Fn.initialValues=()=>({varigEndretEllerStartetSisteFireArArsak:[],typeVirksomhet:[]});Fn.transformValues=e=>({navn:e.navn,...Ft.transformValues(e),...bt.transformValues(e),...Nt.transformValues(e),...Ot.transformValues(e),familieEllerVennerTilknyttetNaringen:e.familieEllerVennerTilknyttetNaringen});Fn.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"intersection",raw:`IdFormValues &
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const ht=({readOnly:e=!1,alleKodeverk:r})=>{const n=Ae(),{control:a,formState:{errors:t}}=H(),{fields:s,remove:i,append:o}=sr({control:a,name:`${En}.virksomheter`,rules:{required:n.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}}),d=()=>{o(Fn.initialValues())};return A.useEffect(()=>{s.length===0&&d()},[]),l.jsxs(l.Fragment,{children:[l.jsxs(de,{children:[l.jsx(de.Header,{children:l.jsxs(de.Row,{children:[l.jsx(de.HeaderCell,{style:{width:"48px"}}),l.jsx(de.HeaderCell,{children:l.jsx(w,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),l.jsx(de.HeaderCell,{style:{width:"48px"}})]})}),l.jsx(de.Body,{children:s.map((g,u)=>l.jsx(Fn,{index:u,open:u+1===s.length,remove:()=>i(u),alleKodeverk:r,readOnly:e},g.id))})]}),t[En]?.virksomheter?.root?.message&&l.jsx($r,{children:t[En]?.virksomheter.root?.message}),l.jsx("div",{children:l.jsx(Je,{size:"small",variant:"tertiary",type:"button",onClick:d,icon:l.jsx(Ca,{"aria-hidden":!0}),children:l.jsx(w,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})})]})};ht.transformValues=({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:r}})=>({egenVirksomhet:{harArbeidetIEgenVirksomhet:e,virksomheter:e?r.map(n=>Fn.transformValues(n)):void 0}});ht.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ea=({readOnly:e=!0,alleKodeverk:r})=>{const n=Ae(),{watch:a,control:t}=H(),s=a(`${En}.harArbeidetIEgenVirksomhet`)||null;return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.EgenVirksomhet.Title"})}),l.jsx(Jr,{name:`${En}.harArbeidetIEgenVirksomhet`,control:t,validate:[G],isReadOnly:e,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:n.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:n.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),s&&l.jsx(ht,{readOnly:e,alleKodeverk:r})]})})};ea.initialValues=()=>({[En]:{harArbeidetIEgenVirksomhet:void 0,virksomheter:[Fn.initialValues()]}});ea.transformValues=ht.transformValues;ea.__docgenInfo={description:`EgenVirksomhetPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const cE=ce(Le),di=({readOnly:e,alleKodeverk:r})=>l.jsx(ur,{value:cE,children:l.jsx(ea,{readOnly:e,alleKodeverk:r})});di.initialValues=ea.initialValues;di.transformValues=ea.transformValues;di.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const os=ce(Le),ui=({readOnly:e})=>{const{control:r}=H();return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:os.formatMessage({id:"Registrering.Dekningsgrad.Title"})}),l.jsx(Jr,{name:"dekningsgrad",control:r,validate:[G],isReadOnly:e,isHorizontal:!0,radios:[{label:os.formatMessage({id:"Registrering.Dekningsgrad.prosent.80"}),value:"80_PROSENT"},{label:os.formatMessage({id:"Registrering.Dekningsgrad.prosent.100"}),value:"100_PROSENT"}]})]})})};ui.initialValues=()=>({dekningsgrad:void 0});ui.transformValues=({dekningsgrad:e})=>({dekningsgrad:e});ui.__docgenInfo={description:"Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ dekningsgrad }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  dekningsgrad?: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"DekningsgradIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ho=ce(Le),ki=({readOnly:e,annenForelderInformertRequired:r=!1})=>{const{control:n}=H();return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:ho.formatMessage({id:"Registrering.TheOtherParent.Confirmation"})}),l.jsx(qe,{name:"annenForelderInformert",control:n,label:ho.formatMessage({id:"Registrering.TheOtherParent.OtherParentKnowPeriods"}),isRequired:r,readOnly:e})]})})};ki.initialValues=()=>({annenForelderInformert:void 0});ki.tranformValues=({annenForelderInformert:e})=>({annenForelderInformert:e});ki.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]}}}},{name:"tranformValues",docblock:null,modifiers:["static"],params:[{name:"{ annenForelderInformert }: BekreftelseFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  annenForelderInformert?: boolean;
}`,signature:{properties:[{key:"annenForelderInformert",value:{name:"boolean",required:!1}}]},alias:"BekreftelseFormValues"}}],returns:null}],displayName:"BekreftelsePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},annenForelderInformertRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me="tidsromPermisjon",Gn="graderingPeriode",gi="oppholdPerioder",yd="overforingsperioder",St="utsettelsePeriode",Aa="permisjonsPerioder",vi=`${me}.${Aa}`,Sr=e=>`${vi}.${e}`,fE=At(100),mi=[Gr.FELLESPERIODE,Gr.FEDREKVOTE,Gr.FORELDREPENGER_FOR_FODSEL,Gr.FORELDREPENGER,Gr.MODREKVOTE],Td=[Gr.FEDREKVOTE,Gr.FORELDREPENGER_FOR_FODSEL,Gr.MODREKVOTE],_t=({sokerErMor:e,readOnly:r,alleKodeverk:n})=>{const a=Ae(),t=n.UttakPeriodeType,s=n.MorsAktivitet;s.filter(({kode:c})=>c==="-").length===0&&s.unshift({kode:"-",navn:"",kodeverk:""});const{control:i,getValues:o,trigger:d,watch:g,formState:{isSubmitted:u}}=H(),{fields:k,remove:m,append:p}=sr({control:i,name:vi});return A.useEffect(()=>{k.length===0&&p({})},[]),l.jsx(Rr,{readOnly:r,fields:k,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),emptyPeriodTemplate:{},append:p,remove:m,children:(c,O)=>{const T=O===0,f=g(Sr(O)),R=OE(f.periodeFom),F=Td.some(h=>h===f.periodeType)||f.periodeType==="";return l.jsxs(sn,{readOnly:r,remove:m,index:O,children:[l.jsx("div",{children:l.jsx(tr,{name:`${Sr(O)}.periodeType`,control:i,readOnly:r,label:Ua(T,a.formatMessage({id:"Registrering.Permisjon.periodeType"})),selectValues:RE(t),validate:[G]})}),l.jsx(Q,{isReadOnly:r,control:i,name:`${Sr(O)}.periodeFom`,label:Ua(T,a.formatMessage({id:"Registrering.Permisjon.periodeFom"})),validate:[G,re,_o(o,O,!0),So(o)],onChange:()=>u?d():void 0}),l.jsx(Q,{isReadOnly:r,control:i,name:`${Sr(O)}.periodeTom`,label:Ua(T,a.formatMessage({id:"Registrering.Permisjon.periodeTom"})),validate:[G,re,_o(o,O,!1),So(o)],onChange:()=>u?d():void 0}),!e&&l.jsx(tr,{name:`${Sr(O)}.morsAktivitet`,control:i,readOnly:r,disabled:F,label:Ua(T,a.formatMessage({id:"Registrering.Permisjon.Fellesperiode.morsAktivitet"})),selectValues:FE(s),hideValueOnDisable:!0}),l.jsx(dr,{name:`${Sr(O)}.flerbarnsdager`,control:i,readOnly:r,label:l.jsx(w,{id:"Registrering.Permisjon.Flerbarnsdager"})}),l.jsx(dr,{name:`${Sr(O)}.harSamtidigUttak`,control:i,readOnly:r,label:l.jsx(w,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),f.harSamtidigUttak&&l.jsx(je,{name:`${Sr(O)}.samtidigUttaksprosent`,control:i,validate:[As,fE],label:a.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"}),normalizeOnBlur:h=>Number.isNaN(h)?h:parseFloat(h.toString()).toFixed(2)}),R&&l.jsx(ot,{size:"small",variant:"warning",children:l.jsx(w,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},c.id)}})};_t.transformValues=e=>e.map(r=>Td.some(n=>n===r.periodeType)?{periodeType:r.periodeType,periodeFom:r.periodeFom,periodeTom:r.periodeTom,flerbarnsdager:r.flerbarnsdager??!1,harSamtidigUttak:r.harSamtidigUttak??!1,samtidigUttaksprosent:r.samtidigUttaksprosent}:{periodeType:r.periodeType,periodeFom:r.periodeFom,periodeTom:r.periodeTom,morsAktivitet:r.morsAktivitet,flerbarnsdager:r.flerbarnsdager??!1,harSamtidigUttak:r.harSamtidigUttak??!1,samtidigUttaksprosent:r.samtidigUttaksprosent});const RE=e=>e.filter(({kode:r})=>mi.some(n=>n===r)).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),FE=e=>e.map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),Ua=(e,r)=>e?r:"",OE=e=>!!e&&ne(e,$e).isBefore(ne("2019-01-01")),So=e=>()=>{const n=(e(vi)??[]).filter(({periodeFom:a,periodeTom:t})=>a!==""&&t!=="").map(({periodeFom:a,periodeTom:t})=>[a,t]);return Cn(n)},_o=(e,r,n)=>()=>{const a=e(`${Sr(r)}.periodeFom`),t=e(`${Sr(r)}.periodeTom`);return!t||!a?null:n?er(t)(a):Ge(a)(t)};_t.__docgenInfo={description:`RenderPermisjonPeriodeFieldArray

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const Kt=({foreldreType:e,readOnly:r,alleKodeverk:n})=>{const{watch:a,control:t}=H(),s=a(`${me}.fulltUttak`)??!1;return l.jsxs(X,{gap:"2",children:[l.jsx(kr,{children:l.jsx(w,{id:"Registrering.Permisjon.FulltUttak"})}),l.jsx(dr,{name:`${me}.fulltUttak`,control:t,readOnly:r,label:l.jsx(w,{id:"Registrering.Permisjon.FulltUttak"})}),s&&l.jsx(_t,{sokerErMor:e===lt.MOR,readOnly:r,alleKodeverk:n})]})};Kt.initialValues=()=>({[Aa]:[],fulltUttak:!1});Kt.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const NE=KT(9),at=`${me}.${Gn}`,Ko={periodeFom:"",periodeTom:"",periodeForGradering:"",prosentandelArbeid:"",skalGraderes:!1},bE=[an.ARBEIDSTAKER,an.SELVSTENDIG_NAERINGSDRIVENDE,an.FRILANSER],Po=At(100),Ed=({graderingKvoter:e,readOnly:r,arbeidskategoriTyper:n})=>{const a=Ae(),{watch:t,control:s,getValues:i,trigger:o,formState:{isSubmitted:d}}=H(),{fields:g,remove:u,append:k}=sr({control:s,name:`${at}`}),m=t(`${at}`)??[];return A.useEffect(()=>{g.length===0&&k(Ko)},[]),l.jsx(Rr,{fields:g,emptyPeriodTemplate:Ko,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,remove:u,append:k,children:(p,c)=>{const{harSamtidigUttak:O,periodeFom:T}=m[c],f=T&&ne(T,$e).isBefore(ne("2019-01-01"));return l.jsxs(sn,{readOnly:r,remove:u,index:c,children:[l.jsx(tr,{name:`${ir(c)}.periodeForGradering`,control:s,selectValues:_E(e),label:a.formatMessage({id:"Registrering.Permisjon.Gradering.Periode"}),validate:[G]}),l.jsx(Q,{name:`${ir(c)}.periodeFom`,control:s,label:a.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[G,re,Mo(i,c,!0),Do(i)],onChange:()=>d?o():void 0}),l.jsx(Q,{name:`${ir(c)}.periodeTom`,control:s,label:a.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[G,re,Mo(i,c,!1),Do(i)],onChange:()=>d?o():void 0}),l.jsx(je,{name:`${ir(c)}.prosentandelArbeid`,control:s,label:l.jsx(w,{id:"Registrering.Permisjon.Gradering.Prosentandel"}),validate:[G,As,Po],normalizeOnBlur:R=>Number.isNaN(R)?R:parseFloat(R.toString()).toFixed(2)}),l.jsx(je,{name:`${ir(c)}.arbeidsgiverIdentifikator`,control:s,label:a.formatMessage({id:"Registrering.Permisjon.Orgnr"}),validate:[hE(i,c),Rn,SE]}),l.jsx(tr,{name:`${ir(c)}.arbeidskategoriType`,control:s,label:a.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),selectValues:KE(n),validate:[G],onChange:()=>d?o():void 0}),l.jsx(dr,{name:`${ir(c)}.skalGraderes`,control:s,label:l.jsx(w,{id:"Registrering.Permisjon.Gradering.SkalGraderes"})}),l.jsx(dr,{name:`${ir(c)}.flerbarnsdager`,control:s,readOnly:r,label:l.jsx(w,{id:"Registrering.Permisjon.Flerbarnsdager"})}),l.jsx(dr,{name:`${ir(c)}.harSamtidigUttak`,control:s,label:l.jsx(w,{id:"Registrering.Permisjon.HarSamtidigUttak"})}),O&&l.jsx(je,{name:`${ir(c)}.samtidigUttaksprosent`,control:s,validate:[G,As,Po],label:a.formatMessage({id:"Registrering.Permisjon.SamtidigUttaksprosent"})}),f&&l.jsx(ot,{size:"small",variant:"warning",children:l.jsx(w,{id:"Registrering.Permisjon.PeriodeFomForTidlig"})})]},p.id)}})},ir=e=>`${at}.${e}`,Do=e=>()=>{const n=(e(`${at}`)??[]).filter(({periodeFom:a,periodeTom:t})=>a!==""&&t!=="").map(({periodeFom:a,periodeTom:t})=>[a,t]);return n.length>0?Cn(n):void 0},Mo=(e,r,n)=>()=>{const a=e(`${ir(r)}.periodeFom`),t=e(`${ir(r)}.periodeTom`);return!t||!a?null:n?er(t)(a):Ge(a)(t)},hE=(e,r)=>n=>e(`${ir(r)}.arbeidskategoriType`)===an.ARBEIDSTAKER?G(n):void 0,SE=e=>{if(e)return e.length===11?kd(e):NE(e)},_E=e=>e.filter(({kode:r})=>mi.some(n=>n===r)).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),KE=e=>e.filter(({kode:r})=>bE.some(n=>n===r)).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r));Ed.__docgenInfo={description:`RenderGraderingPeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn<'Arbeidskategori'>[]"},description:""}}};const ra=({readOnly:e,alleKodeverk:r})=>{const n=r.UttakPeriodeType,a=r.Arbeidskategori,{watch:t,control:s}=H(),i=t(`${me}.skalGradere`)||!1;return l.jsxs(X,{gap:"2",children:[l.jsx(kr,{children:l.jsx(w,{id:"Registrering.Permisjon.Gradering.Title"})}),l.jsx(dr,{name:`${me}.skalGradere`,control:s,readOnly:e,label:l.jsx(w,{id:"Registrering.Permisjon.Gradering.GraderUttaket"})}),i&&l.jsx(Ed,{graderingKvoter:n,arbeidskategoriTyper:a,readOnly:e})]})};ra.transformValues=e=>{const r=e[Gn];return r?r.map(n=>n.arbeidskategoriType?{...n,erArbeidstaker:n.arbeidskategoriType===an.ARBEIDSTAKER,erFrilanser:n.arbeidskategoriType===an.FRILANSER,erSelvstNæringsdrivende:n.arbeidskategoriType===an.SELVSTENDIG_NAERINGSDRIVENDE}:n):[]};ra.initialValues=()=>({[Gn]:[],skalGradere:!1});ra.__docgenInfo={description:`PermisjonGraderingPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const pi=`${me}.${gi}`,kn=e=>`${pi}.${e}`,Vo=e=>()=>{const n=(e(`${pi}`)??[]).filter(({periodeFom:a,periodeTom:t})=>a!==""&&t!=="").map(({periodeFom:a,periodeTom:t})=>[a,t]);return n.length>0?Cn(n):void 0},Io={periodeFom:"",periodeTom:"",årsak:""},PE=[ga.UTTAK_MØDREKVOTE_ANNEN_FORELDER,ga.UTTAK_FEDREKVOTE_ANNEN_FORELDER,ga.UTTAK_FELLESP_ANNEN_FORELDER,ga.UTTAK_FORELDREPENGER_ANNEN_FORELDER],DE=e=>e.filter(({kode:r})=>PE.some(n=>n===r)).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),Ad=({oppholdsReasons:e,readOnly:r})=>{const n=Ae(),{control:a,getValues:t,trigger:s,formState:{isSubmitted:i}}=H(),{fields:o,remove:d,append:g}=sr({control:a,name:`${pi}`});return A.useEffect(()=>{o.length===0&&g(Io)},[]),l.jsx(Rr,{fields:o,emptyPeriodTemplate:Io,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:g,remove:d,children:(u,k)=>l.jsxs(sn,{readOnly:r,remove:d,index:k,children:[l.jsx(Q,{name:`${kn(k)}.periodeFom`,control:a,label:n.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[G,re,()=>{const m=t(`${kn(k)}.periodeFom`),p=t(`${kn(k)}.periodeTom`);return p&&m?er(p)(m):null},Vo(t)],onChange:()=>i?s():void 0}),l.jsx(Q,{name:`${kn(k)}.periodeTom`,control:a,label:n.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[G,re,()=>{const m=t(`${kn(k)}.periodeFom`),p=t(`${kn(k)}.periodeTom`);return p&&m?Ge(m)(p):null},Vo(t)],onChange:()=>i?s():void 0}),l.jsx("div",{children:l.jsx(tr,{name:`${kn(k)}.årsak`,control:a,label:n.formatMessage({id:"Registrering.Permisjon.Opphold.Arsak"}),selectValues:DE(e),validate:[G]})})]},u.id)})};Ad.__docgenInfo={description:`RenderOppholdPeriodeFieldArray

Viser inputfelter for dato for bestemmelse av oppholdsperiode.`,methods:[],displayName:"RenderOppholdPeriodeFieldArray",props:{oppholdsReasons:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'OppholdÅrsak'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Pt=({readOnly:e,alleKodeverk:r})=>{const n=r.OppholdÅrsak,{watch:a,control:t}=H(),s=a(`${me}.skalHaOpphold`)||!1;return l.jsxs(X,{gap:"2",children:[l.jsx(kr,{children:l.jsx(w,{id:"Registrering.Permisjon.Opphold.Title"})}),l.jsx(dr,{name:`${me}.skalHaOpphold`,control:t,readOnly:e,label:l.jsx(w,{id:"Registrering.Permisjon.Opphold.OppholdUttaket"})}),s&&l.jsx(Ad,{oppholdsReasons:n,readOnly:e})]})};Pt.initialValues=()=>({[gi]:[],skalHaOpphold:!1});Pt.__docgenInfo={description:`PermisjonOppholdPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const yi=`${me}.${yd}`,gn=e=>`${yi}.${e}`,qo=e=>()=>{const n=(e(yi)??[]).filter(({periodeFom:a,periodeTom:t})=>a!==""&&t!=="").map(({periodeFom:a,periodeTom:t})=>[a,t]);return n.length>0?Cn(n):void 0},jo={periodeFom:"",periodeTom:"",overforingArsak:""},cd=({selectValues:e,readOnly:r})=>{const n=Ae(),{control:a,getValues:t,trigger:s,formState:{isSubmitted:i}}=H(),{fields:o,remove:d,append:g}=sr({control:a,name:yi});return A.useEffect(()=>{o.length===0&&g(jo)},[]),l.jsx(Rr,{fields:o,emptyPeriodTemplate:jo,bodyText:n.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:r,append:g,remove:d,children:(u,k)=>l.jsxs(sn,{readOnly:r,remove:d,index:k,children:[l.jsx("div",{children:l.jsx(tr,{name:`${gn(k)}.overforingArsak`,control:a,label:n.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.AngiArsak"}),selectValues:e,validate:[G],readOnly:r})}),l.jsx(Q,{name:`${gn(k)}.periodeFom`,control:a,isReadOnly:r,validate:[G,re,()=>{const m=t(`${gn(k)}.periodeFom`),p=t(`${gn(k)}.periodeTom`);return p&&m?er(p)(m):null},qo(t)],label:l.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.fomDato"}),onChange:()=>i?s():void 0}),l.jsx(Q,{name:`${gn(k)}.periodeTom`,control:a,isReadOnly:r,validate:[G,re,()=>{const m=t(`${gn(k)}.periodeFom`),p=t(`${gn(k)}.periodeTom`);return p&&m?Ge(m)(p):null},qo(t)],label:l.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.tomDato"}),onChange:()=>i?s():void 0})]},u.id)})};cd.__docgenInfo={description:`RenderOverforingAvKvoterFieldArray

Viser inputfelter for dato for bestemmelse av overføring.`,methods:[],displayName:"RenderOverforingAvKvoterFieldArray",props:{selectValues:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ME=(e,r,n)=>r===ca.INSTITUSJONSOPPHOLD_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt"}):r===ca.SYKDOM_ANNEN_FORELDER?e.formatMessage({id:"Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk"}):n,VE=(e,r,n,a)=>e.filter(({kode:t})=>n||t!==ca.ALENEOMSORG&&t!==ca.IKKE_RETT_ANNEN_FORELDER).map(({kode:t,navn:s})=>r?l.jsx("option",{value:t,children:s},t):l.jsx("option",{value:t,children:ME(a,t,s)},t)),Dt=({foreldreType:e,alleKodeverk:r,readOnly:n,erEndringssøknad:a})=>{const t=Ae(),s=r.OverføringÅrsak,i=VE(s,e===lt.MOR,a,t),{watch:o,control:d}=H(),g=o(`${me}.skalOvertaKvote`)||!1;return l.jsxs(X,{gap:"2",children:[l.jsx(kr,{children:l.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvoten"})}),l.jsx(dr,{name:`${me}.skalOvertaKvote`,control:d,readOnly:n,label:l.jsx(w,{id:"Registrering.Permisjon.OverforingAvKvote.OvertaKvote"})}),g&&l.jsx(cd,{selectValues:i,readOnly:n})]})};Dt.initialValues=()=>({skalOvertaKvote:!1,overforingsperioder:[]});Dt.__docgenInfo={description:`PermisjonOverforingAvKvoterPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const Lo={periodeFom:"",periodeTom:"",arsakForUtsettelse:""},fd=`${me}.${St}`,pn=e=>`${fd}.${e}`,wo=e=>()=>{const n=(e(`${fd}`)??[]).filter(({periodeFom:a,periodeTom:t})=>a!==""&&t!=="").map(({periodeFom:a,periodeTom:t})=>[a,t]);return n.length>0?Cn(n):void 0},Uo=(e,r,n)=>()=>{const a=`${pn(r)}`,t=e(`${a}.periodeFom`),s=e(`${a}.periodeTom`);return!s&&!t?null:n?er(s)(t):Ge(t)(s)},IE=e=>e.map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),qE=e=>e.filter(({kode:r})=>mi.some(n=>n===r)).map(({kode:r,navn:n})=>l.jsx("option",{value:r,children:n},r)),Rd=({utsettelseReasons:e,utsettelseKvoter:r,readOnly:n})=>{const a=Ae(),{control:t,getValues:s,trigger:i,formState:{isSubmitted:o}}=H(),{fields:d,remove:g,append:u}=sr({control:t,name:`${me}.${St}`});A.useEffect(()=>{d.length===0&&u(Lo)},[]);const k=()=>o?i():void 0;return l.jsx(Rr,{fields:d,emptyPeriodTemplate:Lo,bodyText:a.formatMessage({id:"Registrering.Permisjon.nyPeriode"}),readOnly:n,append:u,remove:g,children:(m,p)=>l.jsxs(sn,{readOnly:n,remove:g,index:p,children:[l.jsx(tr,{name:`${pn(p)}.periodeForUtsettelse`,control:t,label:a.formatMessage({id:"Registrering.Permisjon.Utsettelse.Periode"}),selectValues:qE(r),validate:[G]}),l.jsx(Q,{name:`${pn(p)}.periodeFom`,control:t,label:a.formatMessage({id:"Registrering.Permisjon.periodeFom"}),validate:[G,re,Uo(s,p,!0),wo(s)],onChange:k}),l.jsx(Q,{name:`${pn(p)}.periodeTom`,control:t,label:a.formatMessage({id:"Registrering.Permisjon.periodeTom"}),validate:[G,re,Uo(s,p,!1),wo(s)],onChange:k}),l.jsx(tr,{name:`${pn(p)}.arsakForUtsettelse`,control:t,label:a.formatMessage({id:"Registrering.Permisjon.Utsettelse.Arsak"}),selectValues:IE(e),validate:[G],onChange:k}),l.jsx(tr,{name:`${pn(p)}.erArbeidstaker`,control:t,label:a.formatMessage({id:"Registrering.Permisjon.ArbeidskategoriLabel"}),selectValues:[l.jsx("option",{value:"true",children:a.formatMessage({id:"Registrering.Permisjon.ErArbeidstaker"})},"true"),l.jsx("option",{value:"false",children:a.formatMessage({id:"Registrering.Permisjon.ErIkkeArbeidstaker"})},"false")],validate:[c=>s(`${pn(p)}.arsakForUtsettelse`)==="ARBEID"?G(c):void 0]})]},m.id)})};Rd.__docgenInfo={description:`RenderUtsettelsePeriodeFieldArray

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
}>`}],raw:"KodeverkMedNavn<'UttakPeriodeType'>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Mt=({readOnly:e,alleKodeverk:r})=>{const n=r.UtsettelseÅrsak,a=r.UttakPeriodeType,{watch:t,control:s}=H(),i=t(`${me}.skalUtsette`)||!1;return l.jsxs(X,{gap:"2",children:[l.jsx(kr,{children:l.jsx(w,{id:"Registrering.Permisjon.Utsettelse.Title"})}),l.jsx(dr,{name:`${me}.skalUtsette`,control:s,readOnly:e,label:l.jsx(w,{id:"Registrering.Permisjon.Utsettelse.UtsettUttaket"})}),i&&l.jsx(Rd,{utsettelseReasons:n,utsettelseKvoter:a,readOnly:e})]})};Mt.initialValues=()=>({[St]:[],skalUtsette:!1});Mt.__docgenInfo={description:`PermisjonUtsettelsePanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const na=({foreldreType:e,readOnly:r,alleKodeverk:n,erEndringssøknad:a})=>{const t=Ae(),{setError:s,clearErrors:i,formState:o,watch:d}=H(),[g,u,k,m]=d([`${me}.fulltUttak`,`${me}.skalGradere`,`${me}.skalUtsette`,`${me}.skalOvertaKvote`]);return A.useEffect(()=>{!g&&!u&&!k&&!m?s(`${me}.notRegisteredInput`,{type:"custom",message:t.formatMessage({id:"PermisjonPanel.MinstEnPeriodeRequired"})}):i(`${me}.notRegisteredInput`)},[g,u,k,m]),l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"Registrering.Permisjon.Title"})}),l.jsx(Kt,{foreldreType:e,readOnly:r,alleKodeverk:n}),l.jsx(Dt,{readOnly:r,foreldreType:e,alleKodeverk:n,erEndringssøknad:a}),l.jsx(Mt,{readOnly:r,alleKodeverk:n}),l.jsx(ra,{readOnly:r,alleKodeverk:n}),l.jsx(Pt,{readOnly:r,alleKodeverk:n}),o.isSubmitted&&o.errors[me]?.notRegisteredInput?.message&&l.jsx($r,{children:o.errors[me]?.notRegisteredInput?.message})]})})};na.transformValues=e=>{const r=tu(e[me]),n=r,a=r[Aa];e.tidsromPermisjon?.fulltUttak&&a&&(n[Aa]=_t.transformValues(a));const t=r[Gn];return e.tidsromPermisjon?.skalGradere&&t&&(n[Gn]=ra.transformValues(r)),e.tidsromPermisjon?.fulltUttak||(n[Aa]=void 0),e.tidsromPermisjon?.skalGradere||(n[Gn]=void 0),e.tidsromPermisjon?.skalUtsette||(n[St]=void 0),e.tidsromPermisjon?.skalOvertaKvote||(n[yd]=void 0),e.tidsromPermisjon?.skalHaOpphold||(n[gi]=void 0),{[me]:n}};na.initialValues=()=>({[me]:{...Kt.initialValues(),...Dt.initialValues(),...Mt.initialValues(),...ra.initialValues(),...Pt.initialValues()}});na.__docgenInfo={description:`PermisjonPanel

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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const jE=ce(Le),Ti=({foreldreType:e,readOnly:r,alleKodeverk:n,erEndringssøknad:a})=>l.jsx(ur,{value:jE,children:l.jsx(na,{readOnly:r,foreldreType:e,alleKodeverk:n,erEndringssøknad:a})});Ti.transformValues=na.transformValues;Ti.initialValues=na.initialValues;Ti.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erEndringssøknad:{required:!0,tsType:{name:"boolean"},description:""}}};const vr=ce(Le),LE=e=>r=>{const n=e("foedselsDato");return xo(n,r)},wE=e=>r=>{const n=e("termindato");return Id(n,r)},Ei=({readOnly:e,erForeldrepenger:r=!1})=>{const{watch:n,getValues:a,control:t}=H(),s=n("erBarnetFodt");return l.jsx(ur,{value:vr,children:l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:vr.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),l.jsx(Jr,{name:"erBarnetFodt",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[G],isReadOnly:e,isTrueOrFalseSelection:!0,radios:[{label:vr.formatMessage({id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:vr.formatMessage({id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]}),s!==void 0&&l.jsxs(X,{gap:"4",children:[s===!1&&l.jsxs(l.Fragment,{children:[l.jsxs(Qe,{gap:"4",children:[l.jsx(Q,{name:"termindato",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:qn().toDate(),toDate:In().toDate(),defaultMonth:new Date,validate:[G,re,Ge(qn()),er(In())]}),l.jsx(je,{name:"antallBarn",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:i=>{const o=parseInt(i.toString(),10);return isNaN(o)?i:o},validate:[G,Rn,Fi,Oi]})]}),l.jsx(Q,{name:"terminbekreftelseDato",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.UtstedtDato"}),isReadOnly:e,fromDate:Vd().toDate(),toDate:Md().toDate(),defaultMonth:new Date,validate:[re,wE(a)]})]}),s===!0&&l.jsxs(l.Fragment,{children:[l.jsxs(Qe,{gap:"4",children:[l.jsx(Q,{name:"foedselsDato",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,validate:[G,re,Ge(xa()),xn],fromDate:xa().toDate(),toDate:Bo().toDate()}),l.jsx(je,{name:"antallBarn",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.AntallBarn"}),readOnly:e,parse:i=>{const o=parseInt(i.toString(),10);return Number.isNaN(o)?i:o},validate:[G,Rn,Fi,Oi]})]}),r&&l.jsx(ot,{size:"small",variant:"info",children:l.jsx(kr,{size:"small",children:vr.formatMessage({id:"Registrering.TerminOgFodsel.RettTilPrematuruker"})})}),l.jsx(Q,{name:"termindato",control:t,label:vr.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,validate:[re,Ge(qn()),er(In()),LE(a)],fromDate:qn().toDate(),toDate:In().toDate(),defaultMonth:new Date})]})]})]})})})};Ei.initialValues=()=>({erBarnetFodt:void 0});Ei.transformValues=({antallBarn:e,erBarnetFodt:r,foedselsDato:n,termindato:a,terminbekreftelseDato:t})=>r?{erBarnetFodt:!0,termindato:a,foedselsDato:n,antallBarn:e}:{erBarnetFodt:!1,termindato:a,terminbekreftelseDato:t,antallBarnFraTerminbekreftelse:e};Ei.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erBarnetFodt",value:{name:"literal",value:"true",required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!1}}]}}]}}}],displayName:"TerminOgFodselPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erForeldrepenger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Mn=ce(Le),UE=e=>r=>{const n=e("foedselsDato");return xo(n,r)},Ai=({readOnly:e})=>{const{getValues:r,watch:n,control:a}=H(),t=n("erBarnetFodt");return l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:Mn.formatMessage({id:"Registrering.TerminOgFodsel.Tittel"})}),l.jsx(Jr,{name:"erBarnetFodt",control:a,label:Mn.formatMessage({id:"Registrering.TerminOgFodsel.ErBarnetFodt"}),validate:[G],isReadOnly:e,isTrueOrFalseSelection:!0,radios:[{label:Mn.formatMessage({id:"Registrering.TerminOgFodsel.ErFodt"}),value:"true"},{label:Mn.formatMessage({id:"Registrering.TerminOgFodsel.ErIkkeFodt"}),value:"false"}]}),t&&l.jsx(Q,{name:"foedselsDato",control:a,label:Mn.formatMessage({id:"Registrering.TerminOgFodsel.Fodselsdato"}),isReadOnly:e,fromDate:xa().toDate(),toDate:Bo().toDate(),validate:[G,re,xn,Ge(xa())]}),l.jsx(Q,{name:"termindato",control:a,label:Mn.formatMessage({id:"Registrering.TerminOgFodsel.Termindato"}),isReadOnly:e,fromDate:qn().toDate(),toDate:In().toDate(),defaultMonth:new Date,validate:[G,re,Ge(qn()),er(In()),UE(r)]})]})})};Ai.initialValues=()=>({termindato:void 0,foedselsDato:void 0,erBarnetFodt:!1});Ai.transformValues=({erBarnetFodt:e,foedselsDato:r,termindato:n})=>({erBarnetFodt:e,termindato:n,foedselsDato:e?r:void 0});Ai.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ erBarnetFodt, foedselsDato, termindato }: FormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  termindato?: string;
  foedselsDato?: string;
  erBarnetFodt?: boolean;
}`,signature:{properties:[{key:"termindato",value:{name:"string",required:!1}},{key:"foedselsDato",value:{name:"string",required:!1}},{key:"erBarnetFodt",value:{name:"boolean",required:!1}}]},alias:"FormValues"}}],returns:null}],displayName:"TerminOgFodselPanelSvp",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie="tilretteleggingArbeidsforhold",tt="tilretteleggingForArbeidsgiver",GE="tilretteleggingSelvstendigNaringsdrivende",BE="tilretteleggingFrilans",xE="tilretteleggingArbeidsgiver",HE=At(100),Go={tilretteleggingType:"",dato:"",stillingsprosent:""},st=({readOnly:e,name:r})=>{const n=Ae(),{control:a}=H(),{fields:t,remove:s,append:i}=sr({control:a,name:r});return A.useEffect(()=>{t.length===0&&i(Go)},[]),l.jsx(Ka,{background:"surface-action-subtle",padding:"3",style:{borderLeft:"4px solid var(--a-lightblue-700)"},children:l.jsx(Rr,{fields:t,emptyPeriodTemplate:Go,bodyText:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.LeggTilTilretteleggingsbehov"}),readOnly:e,append:i,remove:s,children:(o,d)=>l.jsxs(sn,{readOnly:e,remove:s,index:d,children:[l.jsx(tr,{name:`${r}.${d}.tilretteleggingType`,control:a,readOnly:e,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.BehovForTilrettelegging"}),validate:[G],selectValues:[l.jsx("option",{value:vn.HEL_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanGjennomfores"})},vn.HEL_TILRETTELEGGING),l.jsx("option",{value:vn.DELVIS_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.RedusertArbeid"})},vn.DELVIS_TILRETTELEGGING),l.jsx("option",{value:vn.INGEN_TILRETTELEGGING,children:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.KanIkkeGjennomfores"})},vn.INGEN_TILRETTELEGGING)]}),l.jsx(Q,{name:`${r}.${d}.dato`,control:a,isReadOnly:e,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.FraDato"}),validate:[G]}),l.jsx(je,{readOnly:e,control:a,name:`${r}.${d}.stillingsprosent`,label:n.formatMessage({id:"BehovForTilrettteleggingFieldArray.Stillingsprosent"}),validate:[G,HE],maxLength:99})]},o.id)})})};st.__docgenInfo={description:"",methods:[],displayName:"BehovForTilretteleggingFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ya=`${Ie}.${tt}`,YE=e=>`${ya}.${e}`,Fd=({open:e,readOnly:r=!1,index:n,remove:a})=>{const{getFieldState:t,watch:s,control:i}=H(),{error:o}=t(`${ya}.${n}`),d=s(`${ya}.${n}.organisasjonsnummer`),[g,u]=A.useState(e),k=Ae();return l.jsxs(de.Row,{shadeOnHover:!1,style:{backgroundColor:o&&!g?"var(--a-red-50)":"none"},children:[l.jsx(de.DataCell,{valign:"top",children:l.jsx(Je,{type:"button",variant:"tertiary-neutral",onClick:()=>u(m=>!m),icon:g?l.jsx(Qo,{"aria-label":"Vis mindre"}):l.jsx(ut,{"aria-label":"Vis mer"})})}),l.jsxs(de.DataCell,{valign:"top",children:[l.jsx(Ka,{hidden:g,paddingBlock:"3",children:l.jsx(Ze,{weight:"semibold",children:d})}),l.jsxs(X,{gap:"4",hidden:!g,children:[l.jsxs(Qe,{gap:"4",children:[l.jsx(je,{name:`${ya}.${n}.organisasjonsnummer`,control:i,readOnly:r,label:k.formatMessage({id:"RegistrerArbeidsgiverRad.OrgNr"}),validate:[G,m=>VT(m.toString()),MT],maxLength:99}),l.jsx(Q,{name:`${ya}.${n}.behovsdato`,control:i,label:k.formatMessage({id:"RegistrerArbeidsgiverRad.TilretteleggingFra"}),validate:[G],isReadOnly:r})]}),l.jsx(st,{name:`${YE(n)}.${xE}`,readOnly:r})]})]}),l.jsx(de.DataCell,{valign:"top",align:"right",children:l.jsx(Je,{type:"button",variant:"tertiary-neutral",onClick:a,onKeyDown:a,icon:l.jsx(kt,{"aria-label":"Slett rad"})})})]})};Fd.__docgenInfo={description:"",methods:[],displayName:"RegistrerArbeidsgiverRad",props:{index:{required:!0,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},remove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""}}};const CE={organisasjonsnummer:"",behovsdato:""},$E=`${Ie}.${tt}`,Od=({readOnly:e})=>{const r=Ae(),{control:n,formState:{errors:a}}=H(),{fields:t,append:s,remove:i}=sr({control:n,name:$E,rules:{required:r.formatMessage({id:"TilretteleggingForArbeidsgiverFieldArray.ArrayMinLength"})}}),o=()=>{s(CE)};return A.useEffect(()=>{t.length===0&&o()},[]),l.jsxs(X,{gap:"4",children:[l.jsxs(de,{children:[l.jsx(de.Header,{children:l.jsxs(de.Row,{children:[l.jsx(de.HeaderCell,{style:{width:"48px"}}),l.jsx(de.HeaderCell,{children:l.jsx(w,{id:"TilretteleggingForArbeidsgiverFieldArray.Title"})}),l.jsx(de.HeaderCell,{style:{width:"48px"}})]})}),l.jsx(de.Body,{children:t.map((d,g)=>l.jsx(Fd,{index:g,open:g+1===t.length,remove:()=>i(g),readOnly:e},d.id))})]}),a[Ie]?.[tt]?.root?.message&&l.jsx($r,{children:a[Ie]?.[tt].root?.message}),l.jsx("div",{children:l.jsx(Je,{size:"small",variant:"tertiary",onClick:o,type:"button",icon:l.jsx(Ca,{"aria-hidden":!0}),children:l.jsx(w,{id:"TilretteleggingForArbeidsgiverFieldArray.LeggTilArbeidsgiver"})})})]})};Od.__docgenInfo={description:"",methods:[],displayName:"TilretteleggingForArbeidsgiverFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const WE=e=>{const r=[];return e?.sokForArbeidsgiver&&e?.tilretteleggingForArbeidsgiver&&r.push(...e.tilretteleggingForArbeidsgiver.map(n=>({"@type":"VI",behovsdato:n.behovsdato,organisasjonsnummer:n.organisasjonsnummer,tilrettelegginger:n.tilretteleggingArbeidsgiver}))),e?.sokForFrilans&&r.push({"@type":"FR",behovsdato:e.behovsdatoFrilans,tilrettelegginger:e.tilretteleggingFrilans}),e?.sokForSelvstendigNaringsdrivende&&r.push({"@type":"SN",behovsdato:e.behovsdatoSN,tilrettelegginger:e.tilretteleggingSelvstendigNaringsdrivende}),r},Ga=ce(Le),ci=({readOnly:e})=>{const{watch:r,setError:n,clearErrors:a,formState:t,control:s}=H(),[i,o,d]=r([`${Ie}.sokForSelvstendigNaringsdrivende`,`${Ie}.sokForFrilans`,`${Ie}.sokForArbeidsgiver`]);return A.useEffect(()=>{!i&&!o&&!d?n(`${Ie}.notRegisteredInput`,{type:"custom",message:Ga.formatMessage({id:"BehovForTilretteleggingPanel.MinstEnMaaVereJa"})}):a(`${Ie}.notRegisteredInput`)},[i,o,d]),l.jsx(ur,{value:Ga,children:l.jsx(xe,{children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"BehovForTilretteleggingPanel.BehovForTilrettelegging"})}),t.isSubmitted&&t.errors[Ie]?.notRegisteredInput?.message&&l.jsx($r,{children:t.errors[Ie]?.notRegisteredInput?.message}),l.jsx(qe,{name:`${Ie}.sokForSelvstendigNaringsdrivende`,control:s,label:l.jsx(w,{id:"BehovForTilretteleggingPanel.SokForSelvstendigNaringsdrivende"}),readOnly:e,trueContent:l.jsx(ar,{marginTop:4,children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"BehovForTilretteleggingPanel.TittelSN"})}),l.jsx(Q,{name:`${Ie}.behovsdatoSN`,control:s,label:Ga.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[G],isReadOnly:e}),l.jsx(st,{name:`${Ie}.${GE}`,readOnly:e})]})})}),l.jsx(qe,{name:`${Ie}.sokForFrilans`,control:s,label:l.jsx(w,{id:"BehovForTilretteleggingPanel.SokForFrilans"}),readOnly:e,trueContent:l.jsx(ar,{marginTop:4,children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"BehovForTilretteleggingPanel.TittelFrilans"})}),l.jsx(Q,{name:`${Ie}.behovsdatoFrilans`,control:s,label:Ga.formatMessage({id:"BehovForTilretteleggingPanel.TilretteleggingFra"}),validate:[G],isReadOnly:e}),l.jsx(st,{name:`${Ie}.${BE}`,readOnly:e})]})})}),l.jsx(qe,{name:`${Ie}.sokForArbeidsgiver`,control:s,label:l.jsx(w,{id:"BehovForTilretteleggingPanel.SokForArbeidsgiver"}),readOnly:e,trueContent:l.jsx(ar,{marginTop:4,children:l.jsxs(X,{gap:"4",children:[l.jsx(Se,{size:"small",children:l.jsx(w,{id:"BehovForTilretteleggingPanel.TittelArbeidstaker"})}),l.jsx(Od,{readOnly:e})]})})})]})})})};ci.initialValues=()=>({[Ie]:{}});ci.transformValues=({tilretteleggingArbeidsforhold:e})=>({[Ie]:WE(e)});ci.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"notRegisteredInput",value:{name:"boolean",required:!1}}]}}],required:!0}}]},alias:"FormValues"}}],returns:null}],displayName:"BehovForTilretteleggingPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};export{ei as A,Ka as B,ui as D,_r as F,QE as H,ni as I,eA as K,ai as L,w as M,nA as N,si as O,Ti as P,oi as R,aA as S,Ei as T,di as V,Jr as a,ZE as b,lt as c,ii as d,li as e,ti as f,XE as g,ki as h,Qs as i,ri as j,ci as k,Ai as l,G as t,rA as u};
