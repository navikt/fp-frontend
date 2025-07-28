import{g as Vr,r as u,u as kr,_ as Pn,s as Vn,c as hr,a as Z,b as G,d as Gr,e as Xe,T as Mr,S as Ke,R as Er,f as jr,h as Ur,i as Le,B as ie,j as _,k as je,P as Br,l as Ue}from"./iframe-CTadVWVY.js";import{r as Hr}from"./index-DFId-geP.js";var ur=Hr();const hn=Vr(ur);function wr(e,r){var t=e.values,n=Pn(e,["values"]),a=r.values,l=Pn(r,["values"]);return Vn(a,t)&&Vn(n,l)}function vr(e){var r=kr(),t=r.formatMessage,n=r.textComponent,a=n===void 0?u.Fragment:n,l=e.id,o=e.description,s=e.defaultMessage,d=e.values,i=e.children,E=e.tagName,v=E===void 0?a:E,g=e.ignoreTag,k={id:l,description:o,defaultMessage:s},T=t(k,d,{ignoreTag:g});return typeof i=="function"?i(Array.isArray(T)?T:[T]):v?u.createElement(v,null,T):u.createElement(u.Fragment,null,T)}vr.displayName="FormattedMessage";var ve=u.memo(vr,wr);ve.displayName="MemoizedFormattedMessage";var gn=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e.RE_UTSATT_START="RE-UTSATT-START",e))(gn||{});const Yr={UttakUtsettelseType:[{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],FagsakYtelseType:[{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"},{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"}],StønadskontoType:[{kode:"TETTE_SAKER_MOR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler mor"},{kode:"TILLEGG_PREMATUR",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved prematur fødsel"},{kode:"BARE_FAR_RETT",kodeverk:"STOENADSKONTOTYPE",navn:"Bare far har rett"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"UFØREDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Uføredager"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"TILLEGG_FLERBARN",kodeverk:"STOENADSKONTOTYPE",navn:"Tilleggsdager ved flerbarnstilfelle"},{kode:"FAR_RUNDT_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Fars uttak ifm fødsel"},{kode:"TETTE_SAKER_FAR",kodeverk:"STOENADSKONTOTYPE",navn:"Tette fødsler far/medmor"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"}],FagsakStatus:[{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"},{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"}],Venteårsak:[{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_UTLAND_TRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på utenlandsk trygdemyndighet"},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga. for tidlig søknad"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev, og venter på søknad."},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdsID som stemmer med Aa-reg"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på tilbakemelding fra bruker"},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_LOVENDRING_8_41",kodeverk:"VENT_AARSAK",navn:"Venter på vedtak om lovendring vedrørende beregning av næring i kombinasjon med arbeid eller frilans"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på skanning"},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"}],BehandlingÅrsakType:[{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"KLAGE_TILBAKE",kodeverk:"BEHANDLING_AARSAK",navn:"Tilbakebetaling"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om opptjening"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Ny søknad"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om søknadsfrist"},{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Ny inntektsmelding"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om medlemskap"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"FEIL_PRAKSIS_UTSETTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Feil praksis utsettelse"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"FEIL_PRAKSIS_IVERKS_UTSET",kodeverk:"BEHANDLING_AARSAK",navn:"Feil iverksettelse fri utsettelse"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om inntekt"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Nye opplysninger om beregning"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. for uke 26-29"},{kode:"ENDRE-DEKNINGSGRAD",kodeverk:"BEHANDLING_AARSAK",navn:"Endre dekningsgrad"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"}],GraderingAvslagÅrsak:[{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'}],AktivitetStatus:[{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"}],RevurderingVarslingÅrsak:[{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utflyttet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],KonsekvensForYtelsen:[{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"}],AktivitetskravPermisjonType:[{kode:"FORELDREPENGER",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Foreldrepenger"},{kode:"UTDANNING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Utdanning"},{kode:"PERMITTERING",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Permittering"},{kode:"ANNEN_PERMISJON",kodeverk:"AKTIVITETSKRAV_PERMISJON_TYPE",navn:"Annen permisjon"}],AdresseType:[{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"},{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"}],SivilstandType:[{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"}],Inntektskategori:[{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilanser"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - fisker"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - jordbruker"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - dagmamma"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"}],SkjermlenkeType:[{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og rett"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstansen"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat NFP"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"}],FaktaOmBeregningTilfelle:[{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"}],OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:[{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"}],KlageAvvistÅrsak:[{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ugyldig",lovHjemmel:null},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'}],BehandlingResultatType:[{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknad mangler"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"}],VergeType:[{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"},{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"}],OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"}],FamilieHendelseType:[{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],KlageHjemmel:[{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"},{kode:"883-5",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 5"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"}],VilkårType:[{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_2_F",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"}],FarSøkerType:[{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"}],FaresignalVurdering:[{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"}],ArbeidType:[{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"}],KlageMedholdÅrsak:[{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"}],Region:[{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"},{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"},{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"}],FordelingPeriodeKilde:[{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"},{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"}],FagsakMarkering:[{kode:"SELVSTENDIG_NÆRING",kodeverk:"FAGSAK_MARKERING",navn:"Næringsdrivende"},{kode:"SAMMENSATT_KONTROLL",kodeverk:"FAGSAK_MARKERING",navn:"Sammensatt kontroll"},{kode:"EØS_BOSATT_NORGE",kodeverk:"FAGSAK_MARKERING",navn:"EØS bosatt Norge"},{kode:"PRAKSIS_UTSETTELSE",kodeverk:"FAGSAK_MARKERING",navn:"Praksis utsettelse"},{kode:"BARE_FAR_RETT",kodeverk:"FAGSAK_MARKERING",navn:"Bare far har rett"},{kode:"DØD_DØDFØDSEL",kodeverk:"FAGSAK_MARKERING",navn:"Død eller dødfødsel"},{kode:"BOSATT_UTLAND",kodeverk:"FAGSAK_MARKERING",navn:"Bosatt utland"}],Arbeidskategori:[{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"}],VurderÅrsak:[{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"},{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"SAKSFLYT",kodeverk:"VURDER_AARSAK",navn:"Saksflyt"},{kode:"BEGRUNNELSE",kodeverk:"VURDER_AARSAK",navn:"Begrunnelse"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"}],Landkoder:[{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST. KITTS OG NEVIS"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"}],BehandlingType:[{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"}],InnsynResultatType:[{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"},{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"}],MedlemskapType:[{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"},{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"}],PersonstatusType:[{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet"},{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Opphørt"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt (f.reg)"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Ikke bosatt (f.reg)"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utflyttet"}],UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"FRI",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"}],BehandlingStatus:[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"}],RelasjonsRolleType:[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"ANPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Annen part fra søknad"},{kode:"EKTE",kodeverk:"RELASJONSROLLE_TYPE",navn:"Ektefelle"},{kode:"REPA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Registrert partner"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"BARN",kodeverk:"RELASJONSROLLE_TYPE",navn:"Barn"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],VirksomhetType:[{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],MedlemskapDekningType:[{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"},{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"}],HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_2_F:[{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet mindre enn 12 måneder før termin/omsorgsovertakelse",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_33:[{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'}],SVP_VK_1:[{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'}],FP_VK_16:[{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utflyttet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}]},OpptjeningAktivitetType:[{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"}],PermisjonsbeskrivelseType:[{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"}],OppholdstillatelseType:[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],MedlemskapManuellVurderingType:[{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],ManuellBehandlingÅrsak:[{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5032",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder utbetalingsgrad og trekkdager når mor er i delvis arbeid (under 75% arbeidsprosent)"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"}],MorsAktivitet:[{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"}],NaturalYtelseType:[{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],PeriodeResultatÅrsak:[{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-13"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER","FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","KREVER_SAMMENHENGENDE_UTTAK","FRITT_UTTAK"],uttakTyper:["UTSETTELSE","UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL","FEDREKVOTE","FORELDREPENGER","FELLESPERIODE","MØDREKVOTE"],synligForRolle:["IKKE_MOR","MOR"]}],ForeldreType:[{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"},{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"}],OppgaveType:[{kode:"VUR_KONSEKVENS",kodeverk:"OPPGAVE_TYPE",navn:"Vurder konsekvens for ytelse"},{kode:"VUR_DOKUMENT",kodeverk:"OPPGAVE_TYPE",navn:"Vurder dokument"}]},ce=e=>hr({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var qr=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};u.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:o,weight:s="regular",align:d,visuallyHidden:i,textColor:E}=e,v=qr(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=Z();return G.createElement(a,Object.assign({},v,{ref:r,className:g(t,"navds-body-long",`navds-body-long--${n}`,ce({spacing:l,truncate:o,weight:s,align:d,visuallyHidden:i,textColor:E}))}))});var xr=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Q=u.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:o,weight:s="regular",align:d,visuallyHidden:i,textColor:E}=e,v=xr(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:g}=Z();return G.createElement(a,Object.assign({},v,{ref:r,className:g(t,"navds-body-short",`navds-body-short--${n}`,ce({spacing:l,truncate:o,weight:s,align:d,visuallyHidden:i,textColor:E}))}))});var Cr=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jr=u.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:l,as:o="p",truncate:s,weight:d="regular",align:i,visuallyHidden:E,textColor:v}=e,g=Cr(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=Z();return G.createElement(o,Object.assign({},g,{ref:r,className:k(t,"navds-detail",ce({spacing:a,truncate:s,weight:d,align:i,visuallyHidden:E,textColor:v,uppercase:l}),{"navds-detail--small":n==="small"})}))});var $r=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};u.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:l,as:o="p",showIcon:s=!1}=e,d=$r(e,["children","className","size","spacing","as","showIcon"]);const{cn:i}=Z();return G.createElement(o,Object.assign({},d,{ref:r,className:i("navds-error-message","navds-label",n,ce({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&G.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},G.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Wr=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};u.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:l,spacing:o,align:s,visuallyHidden:d,textColor:i}=e,E=Wr(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=Z(),g=l??`h${t}`;return G.createElement(g,Object.assign({},E,{ref:r,className:v(a,"navds-heading",`navds-heading--${n}`,ce({spacing:o,align:s,visuallyHidden:d,textColor:i}))}))});var zr=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};u.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,l=zr(e,["className","spacing","as"]);const{cn:o}=Z();return G.createElement(a,Object.assign({},l,{ref:r,className:o(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Xr=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const gr=u.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:l,visuallyHidden:o,textColor:s}=e,d=Xr(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:i}=Z();return G.createElement(a,Object.assign({},d,{ref:r,className:i(t,"navds-label",ce({spacing:l,visuallyHidden:o,textColor:s}),{"navds-label--small":n==="small"})}))});function yn(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}let Gn=0;function Zr(e){const[r,t]=u.useState(e),n=e||r;return u.useEffect(()=>{r==null&&(Gn+=1,t(`aksel-id-${Gn}`))},[r]),n}const Mn=G.useId;function Qr(e){var r;if(Mn!==void 0){const t=Mn();return e??t.replace(/(:)/g,"")}return(r=Zr(e))!==null&&r!==void 0?r:""}function jn(e,r=[]){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useCallback((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)},r)}function et({value:e,defaultValue:r,onChange:t}){const n=jn(t),[a,l]=u.useState(r),o=e!==void 0,s=o?e:a,d=jn(i=>{const v=typeof i=="function"?i(s):i;o||l(v),n(v)},[o,n,s]);return[s,d]}let Un=0;function nt(e){const[r,t]=u.useState(e),n=e||r;return u.useEffect(()=>{r==null&&(Un+=1,t(`aksel-icon-${Un}`))},[r]),n}const Bn=G.useId;function Nn(e){var r;return Bn!==void 0?Bn().replace(/(:)/g,""):(r=nt(e))!==null&&r!==void 0?r:""}var rt=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tt=u.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=rt(e,["title","titleId"]);let l=Nn();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var at=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ot=u.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=at(e,["title","titleId"]);let l=Nn();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var lt=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const st=u.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=lt(e,["title","titleId"]);let l=Nn();return l=t?n||"title-"+l:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?u.createElement("title",{id:l},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .672.418l2.765 5.601 6.181.899a.75.75 0 0 1 .416 1.279l-4.473 4.36 1.056 6.156a.75.75 0 0 1-1.088.791l-5.53-2.907-5.528 2.907a.75.75 0 0 1-1.088-.79l1.056-6.157-4.473-4.36a.75.75 0 0 1 .415-1.28l6.182-.898 2.764-5.6A.75.75 0 0 1 12 2.25",clipRule:"evenodd"}))}),[dl,it]=Gr({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function rn(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Oe(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):o;a=e.formattingValues[s]||e.formattingValues[o]}else{const o=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[o]}const l=e.argumentCallback?e.argumentCallback(r):r;return a[l]}}function Ie(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=r.match(a);if(!l)return null;const o=l[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?kt(s,v=>v.test(o)):dt(s,v=>v.test(o));let i;i=e.valueCallback?e.valueCallback(d):d,i=t.valueCallback?t.valueCallback(i):i;const E=r.slice(o.length);return{value:i,rest:E}}}function dt(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function kt(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function Et(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],l=r.match(e.parsePattern);if(!l)return null;let o=e.valueCallback?e.valueCallback(l[0]):l[0];o=t.valueCallback?t.valueCallback(o):o;const s=r.slice(a.length);return{value:o,rest:s}}}const ut={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},vt=(e,r,t)=>{let n;const a=ut[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},gt={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Tt={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},At={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Rt={date:rn({formats:gt,defaultWidth:"full"}),time:rn({formats:Tt,defaultWidth:"full"}),dateTime:rn({formats:At,defaultWidth:"full"})},mt={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},pt=(e,r,t,n)=>mt[e],yt={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Nt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},St={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},_t={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ft={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Kt=(e,r)=>Number(e)+".",Lt={ordinalNumber:Kt,era:Oe({values:yt,defaultWidth:"wide"}),quarter:Oe({values:Nt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Oe({values:St,defaultWidth:"wide"}),day:Oe({values:_t,defaultWidth:"wide"}),dayPeriod:Oe({values:ft,defaultWidth:"wide"})},ct=/^(\d+)\.?/i,Dt=/\d+/i,Ot={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},It={any:[/^f/i,/^e/i]},bt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Ft={any:[/1/i,/2/i,/3/i,/4/i]},Pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Vt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ht={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Gt={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Mt={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},jt={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ut={ordinalNumber:Et({matchPattern:ct,parsePattern:Dt,valueCallback:e=>parseInt(e,10)}),era:Ie({matchPatterns:Ot,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any"}),quarter:Ie({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:Ft,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ie({matchPatterns:Pt,defaultMatchWidth:"wide",parsePatterns:Vt,defaultParseWidth:"any"}),day:Ie({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:Gt,defaultParseWidth:"any"}),dayPeriod:Ie({matchPatterns:Mt,defaultMatchWidth:"any",parsePatterns:jt,defaultParseWidth:"any"})},Bt={code:"nb",formatDistance:vt,formatLong:Rt,formatRelative:pt,localize:Lt,match:Ut,options:{weekStartsOn:1,firstWeekContainsDate:4}},Ht={global:{dateLocale:Bt,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},wt=u.createContext({locale:Ht}),Yt=()=>u.useContext(wt);var qt=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xt=u.forwardRef((e,r)=>{var t,n,a,{rootElement:l,asChild:o}=e,s=qt(e,["rootElement","asChild"]);const d=Xe(!1),i=(t=Yt())===null||t===void 0?void 0:t.rootElement,E=(n=l??i)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,v=o?Ke:"div";return d?E?hn.createPortal(G.createElement(Mr,{theme:d.theme,asChild:!0,hasBackground:!1,"data-color":d.color},G.createElement(v,Object.assign({ref:r,"data-aksel-portal":""},s))),E):null:E?hn.createPortal(G.createElement(v,Object.assign({ref:r,"data-aksel-portal":""},s)),E):null}),Se=Math.min,Re=Math.max,Ce=Math.round,Be=Math.floor,ae=e=>({x:e,y:e}),Ct={left:"right",right:"left",bottom:"top",top:"bottom"},Jt={start:"end",end:"start"};function Tn(e,r,t){return Re(e,Se(r,t))}function Ve(e,r){return typeof e=="function"?e(r):e}function me(e){return e.split("-")[0]}function he(e){return e.split("-")[1]}function Tr(e){return e==="x"?"y":"x"}function Sn(e){return e==="y"?"height":"width"}function _e(e){return["top","bottom"].includes(me(e))?"y":"x"}function _n(e){return Tr(_e(e))}function $t(e,r,t){t===void 0&&(t=!1);const n=he(e),a=_n(e),l=Sn(a);let o=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[l]>r.floating[l]&&(o=Je(o)),[o,Je(o)]}function Wt(e){const r=Je(e);return[An(e),r,An(r)]}function An(e){return e.replace(/start|end/g,r=>Jt[r])}function zt(e,r,t){const n=["left","right"],a=["right","left"],l=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return t?r?a:n:r?n:a;case"left":case"right":return r?l:o;default:return[]}}function Xt(e,r,t,n){const a=he(e);let l=zt(me(e),t==="start",n);return a&&(l=l.map(o=>o+"-"+a),r&&(l=l.concat(l.map(An)))),l}function Je(e){return e.replace(/left|right|bottom|top/g,r=>Ct[r])}function Zt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ar(e){return typeof e!="number"?Zt(e):{top:e,right:e,bottom:e,left:e}}function $e(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function Hn(e,r,t){let{reference:n,floating:a}=e;const l=_e(r),o=_n(r),s=Sn(o),d=me(r),i=l==="y",E=n.x+n.width/2-a.width/2,v=n.y+n.height/2-a.height/2,g=n[s]/2-a[s]/2;let k;switch(d){case"top":k={x:E,y:n.y-a.height};break;case"bottom":k={x:E,y:n.y+n.height};break;case"right":k={x:n.x+n.width,y:v};break;case"left":k={x:n.x-a.width,y:v};break;default:k={x:n.x,y:n.y}}switch(he(r)){case"start":k[o]-=g*(t&&i?-1:1);break;case"end":k[o]+=g*(t&&i?-1:1);break}return k}const Qt=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:l=[],platform:o}=t,s=l.filter(Boolean),d=await(o.isRTL==null?void 0:o.isRTL(r));let i=await o.getElementRects({reference:e,floating:r,strategy:a}),{x:E,y:v}=Hn(i,n,d),g=n,k={},T=0;for(let A=0;A<s.length;A++){const{name:y,fn:S}=s[A],{x:f,y:K,data:D,reset:O}=await S({x:E,y:v,initialPlacement:n,placement:g,strategy:a,middlewareData:k,rects:i,platform:o,elements:{reference:e,floating:r}});E=f??E,v=K??v,k={...k,[y]:{...k[y],...D}},O&&T<=50&&(T++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(i=O.rects===!0?await o.getElementRects({reference:e,floating:r,strategy:a}):O.rects),{x:E,y:v}=Hn(i,g,d)),A=-1)}return{x:E,y:v,placement:g,strategy:a,middlewareData:k}};async function Rr(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:l,rects:o,elements:s,strategy:d}=e,{boundary:i="clippingAncestors",rootBoundary:E="viewport",elementContext:v="floating",altBoundary:g=!1,padding:k=0}=Ve(r,e),T=Ar(k),y=s[g?v==="floating"?"reference":"floating":v],S=$e(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(y)))==null||t?y:y.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:i,rootBoundary:E,strategy:d})),f=v==="floating"?{x:n,y:a,width:o.floating.width,height:o.floating.height}:o.reference,K=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),D=await(l.isElement==null?void 0:l.isElement(K))?await(l.getScale==null?void 0:l.getScale(K))||{x:1,y:1}:{x:1,y:1},O=$e(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:f,offsetParent:K,strategy:d}):f);return{top:(S.top-O.top+T.top)/D.y,bottom:(O.bottom-S.bottom+T.bottom)/D.y,left:(S.left-O.left+T.left)/D.x,right:(O.right-S.right+T.right)/D.x}}const ea=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:l,platform:o,elements:s,middlewareData:d}=r,{element:i,padding:E=0}=Ve(e,r)||{};if(i==null)return{};const v=Ar(E),g={x:t,y:n},k=_n(a),T=Sn(k),A=await o.getDimensions(i),y=k==="y",S=y?"top":"left",f=y?"bottom":"right",K=y?"clientHeight":"clientWidth",D=l.reference[T]+l.reference[k]-g[k]-l.floating[T],O=g[k]-l.reference[k],V=await(o.getOffsetParent==null?void 0:o.getOffsetParent(i));let P=V?V[K]:0;(!P||!await(o.isElement==null?void 0:o.isElement(V)))&&(P=s.floating[K]||l.floating[T]);const B=D/2-O/2,j=P/2-A[T]/2-1,h=Se(v[S],j),H=Se(v[f],j),U=h,p=P-A[T]-H,R=P/2-A[T]/2+B,c=Tn(U,R,p),b=!d.arrow&&he(a)!=null&&R!==c&&l.reference[T]/2-(R<U?h:H)-A[T]/2<0,L=b?R<U?R-U:R-p:0;return{[k]:g[k]+L,data:{[k]:c,centerOffset:R-c-L,...b&&{alignmentOffset:L}},reset:b}}}),na=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:l,rects:o,initialPlacement:s,platform:d,elements:i}=r,{mainAxis:E=!0,crossAxis:v=!0,fallbackPlacements:g,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:A=!0,...y}=Ve(e,r);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const S=me(a),f=_e(s),K=me(s)===s,D=await(d.isRTL==null?void 0:d.isRTL(i.floating)),O=g||(K||!A?[Je(s)]:Wt(s)),V=T!=="none";!g&&V&&O.push(...Xt(s,A,T,D));const P=[s,...O],B=await Rr(r,y),j=[];let h=((n=l.flip)==null?void 0:n.overflows)||[];if(E&&j.push(B[S]),v){const R=$t(a,o,D);j.push(B[R[0]],B[R[1]])}if(h=[...h,{placement:a,overflows:j}],!j.every(R=>R<=0)){var H,U;const R=(((H=l.flip)==null?void 0:H.index)||0)+1,c=P[R];if(c)return{data:{index:R,overflows:h},reset:{placement:c}};let b=(U=h.filter(L=>L.overflows[0]<=0).sort((L,N)=>L.overflows[1]-N.overflows[1])[0])==null?void 0:U.placement;if(!b)switch(k){case"bestFit":{var p;const L=(p=h.filter(N=>{if(V){const m=_e(N.placement);return m===f||m==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(m=>m>0).reduce((m,I)=>m+I,0)]).sort((N,m)=>N[1]-m[1])[0])==null?void 0:p[0];L&&(b=L);break}case"initialPlacement":b=s;break}if(a!==b)return{reset:{placement:b}}}return{}}}};async function ra(e,r){const{placement:t,platform:n,elements:a}=e,l=await(n.isRTL==null?void 0:n.isRTL(a.floating)),o=me(t),s=he(t),d=_e(t)==="y",i=["left","top"].includes(o)?-1:1,E=l&&d?-1:1,v=Ve(r,e);let{mainAxis:g,crossAxis:k,alignmentAxis:T}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return s&&typeof T=="number"&&(k=s==="end"?T*-1:T),d?{x:k*E,y:g*i}:{x:g*i,y:k*E}}const ta=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:l,placement:o,middlewareData:s}=r,d=await ra(r,e);return o===((t=s.offset)==null?void 0:t.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+d.x,y:l+d.y,data:{...d,placement:o}}}}},aa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:l=!0,crossAxis:o=!1,limiter:s={fn:y=>{let{x:S,y:f}=y;return{x:S,y:f}}},...d}=Ve(e,r),i={x:t,y:n},E=await Rr(r,d),v=_e(me(a)),g=Tr(v);let k=i[g],T=i[v];if(l){const y=g==="y"?"top":"left",S=g==="y"?"bottom":"right",f=k+E[y],K=k-E[S];k=Tn(f,k,K)}if(o){const y=v==="y"?"top":"left",S=v==="y"?"bottom":"right",f=T+E[y],K=T-E[S];T=Tn(f,T,K)}const A=s.fn({...r,[g]:k,[v]:T});return{...A,data:{x:A.x-t,y:A.y-n,enabled:{[g]:l,[v]:o}}}}}};function Ze(){return typeof window<"u"}function De(e){return mr(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function oe(e){var r;return(r=(mr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function mr(e){return Ze()?e instanceof Node||e instanceof z(e).Node:!1}function q(e){return Ze()?e instanceof Element||e instanceof z(e).Element:!1}function X(e){return Ze()?e instanceof HTMLElement||e instanceof z(e).HTMLElement:!1}function We(e){return!Ze()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function Ge(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=re(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(a)}function oa(e){return["table","td","th"].includes(De(e))}function Qe(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function fn(e){const r=en(),t=q(e)?re(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function la(e){let r=Ee(e);for(;X(r)&&!ke(r);){if(fn(r))return r;if(Qe(r))return null;r=Ee(r)}return null}function en(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ke(e){return["html","body","#document"].includes(De(e))}function re(e){return z(e).getComputedStyle(e)}function nn(e){return q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ee(e){if(De(e)==="html")return e;const r=e.assignedSlot||e.parentNode||We(e)&&e.host||oe(e);return We(r)?r.host:r}function pr(e){const r=Ee(e);return ke(r)?e.ownerDocument?e.ownerDocument.body:e.body:X(r)&&Ge(r)?r:pr(r)}function ge(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=pr(e),l=a===((n=e.ownerDocument)==null?void 0:n.body),o=z(a);if(l){const s=Rn(o);return r.concat(o,o.visualViewport||[],Ge(a)?a:[],s&&t?ge(s):[])}return r.concat(a,ge(a,[],t))}function Rn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function yr(e){const r=re(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=X(e),l=a?e.offsetWidth:t,o=a?e.offsetHeight:n,s=Ce(t)!==l||Ce(n)!==o;return s&&(t=l,n=o),{width:t,height:n,$:s}}function Kn(e){return q(e)?e:e.contextElement}function Ne(e){const r=Kn(e);if(!X(r))return ae(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:l}=yr(r);let o=(l?Ce(t.width):t.width)/n,s=(l?Ce(t.height):t.height)/a;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const sa=ae(0);function Nr(e){const r=z(e);return!en()||!r.visualViewport?sa:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function ia(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==z(e)?!1:r}function pe(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),l=Kn(e);let o=ae(1);r&&(n?q(n)&&(o=Ne(n)):o=Ne(e));const s=ia(l,t,n)?Nr(l):ae(0);let d=(a.left+s.x)/o.x,i=(a.top+s.y)/o.y,E=a.width/o.x,v=a.height/o.y;if(l){const g=z(l),k=n&&q(n)?z(n):n;let T=g,A=Rn(T);for(;A&&n&&k!==T;){const y=Ne(A),S=A.getBoundingClientRect(),f=re(A),K=S.left+(A.clientLeft+parseFloat(f.paddingLeft))*y.x,D=S.top+(A.clientTop+parseFloat(f.paddingTop))*y.y;d*=y.x,i*=y.y,E*=y.x,v*=y.y,d+=K,i+=D,T=z(A),A=Rn(T)}}return $e({width:E,height:v,x:d,y:i})}function Ln(e,r){const t=nn(e).scrollLeft;return r?r.left+t:pe(oe(e)).left+t}function Sr(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),a=n.left+r.scrollLeft-(t?0:Ln(e,n)),l=n.top+r.scrollTop;return{x:a,y:l}}function da(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const l=a==="fixed",o=oe(n),s=r?Qe(r.floating):!1;if(n===o||s&&l)return t;let d={scrollLeft:0,scrollTop:0},i=ae(1);const E=ae(0),v=X(n);if((v||!v&&!l)&&((De(n)!=="body"||Ge(o))&&(d=nn(n)),X(n))){const k=pe(n);i=Ne(n),E.x=k.x+n.clientLeft,E.y=k.y+n.clientTop}const g=o&&!v&&!l?Sr(o,d,!0):ae(0);return{width:t.width*i.x,height:t.height*i.y,x:t.x*i.x-d.scrollLeft*i.x+E.x+g.x,y:t.y*i.y-d.scrollTop*i.y+E.y+g.y}}function ka(e){return Array.from(e.getClientRects())}function Ea(e){const r=oe(e),t=nn(e),n=e.ownerDocument.body,a=Re(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),l=Re(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let o=-t.scrollLeft+Ln(e);const s=-t.scrollTop;return re(n).direction==="rtl"&&(o+=Re(r.clientWidth,n.clientWidth)-a),{width:a,height:l,x:o,y:s}}function ua(e,r){const t=z(e),n=oe(e),a=t.visualViewport;let l=n.clientWidth,o=n.clientHeight,s=0,d=0;if(a){l=a.width,o=a.height;const i=en();(!i||i&&r==="fixed")&&(s=a.offsetLeft,d=a.offsetTop)}return{width:l,height:o,x:s,y:d}}function va(e,r){const t=pe(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,l=X(e)?Ne(e):ae(1),o=e.clientWidth*l.x,s=e.clientHeight*l.y,d=a*l.x,i=n*l.y;return{width:o,height:s,x:d,y:i}}function wn(e,r,t){let n;if(r==="viewport")n=ua(e,t);else if(r==="document")n=Ea(oe(e));else if(q(r))n=va(r,t);else{const a=Nr(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return $e(n)}function _r(e,r){const t=Ee(e);return t===r||!q(t)||ke(t)?!1:re(t).position==="fixed"||_r(t,r)}function ga(e,r){const t=r.get(e);if(t)return t;let n=ge(e,[],!1).filter(s=>q(s)&&De(s)!=="body"),a=null;const l=re(e).position==="fixed";let o=l?Ee(e):e;for(;q(o)&&!ke(o);){const s=re(o),d=fn(o);!d&&s.position==="fixed"&&(a=null),(l?!d&&!a:!d&&s.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||Ge(o)&&!d&&_r(e,o))?n=n.filter(E=>E!==o):a=s,o=Ee(o)}return r.set(e,n),n}function Ta(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const o=[...t==="clippingAncestors"?Qe(r)?[]:ga(r,this._c):[].concat(t),n],s=o[0],d=o.reduce((i,E)=>{const v=wn(r,E,a);return i.top=Re(v.top,i.top),i.right=Se(v.right,i.right),i.bottom=Se(v.bottom,i.bottom),i.left=Re(v.left,i.left),i},wn(r,s,a));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Aa(e){const{width:r,height:t}=yr(e);return{width:r,height:t}}function Ra(e,r,t){const n=X(r),a=oe(r),l=t==="fixed",o=pe(e,!0,l,r);let s={scrollLeft:0,scrollTop:0};const d=ae(0);if(n||!n&&!l)if((De(r)!=="body"||Ge(a))&&(s=nn(r)),n){const g=pe(r,!0,l,r);d.x=g.x+r.clientLeft,d.y=g.y+r.clientTop}else a&&(d.x=Ln(a));const i=a&&!n&&!l?Sr(a,s):ae(0),E=o.left+s.scrollLeft-d.x-i.x,v=o.top+s.scrollTop-d.y-i.y;return{x:E,y:v,width:o.width,height:o.height}}function tn(e){return re(e).position==="static"}function Yn(e,r){if(!X(e)||re(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return oe(e)===t&&(t=t.ownerDocument.body),t}function fr(e,r){const t=z(e);if(Qe(e))return t;if(!X(e)){let a=Ee(e);for(;a&&!ke(a);){if(q(a)&&!tn(a))return a;a=Ee(a)}return t}let n=Yn(e,r);for(;n&&oa(n)&&tn(n);)n=Yn(n,r);return n&&ke(n)&&tn(n)&&!fn(n)?t:n||la(e)||t}const ma=async function(e){const r=this.getOffsetParent||fr,t=this.getDimensions,n=await t(e.floating);return{reference:Ra(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function pa(e){return re(e).direction==="rtl"}const ya={convertOffsetParentRelativeRectToViewportRelativeRect:da,getDocumentElement:oe,getClippingRect:Ta,getOffsetParent:fr,getElementRects:ma,getClientRects:ka,getDimensions:Aa,getScale:Ne,isElement:q,isRTL:pa};function Kr(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function Na(e,r){let t=null,n;const a=oe(e);function l(){var s;clearTimeout(n),(s=t)==null||s.disconnect(),t=null}function o(s,d){s===void 0&&(s=!1),d===void 0&&(d=1),l();const i=e.getBoundingClientRect(),{left:E,top:v,width:g,height:k}=i;if(s||r(),!g||!k)return;const T=Be(v),A=Be(a.clientWidth-(E+g)),y=Be(a.clientHeight-(v+k)),S=Be(E),K={rootMargin:-T+"px "+-A+"px "+-y+"px "+-S+"px",threshold:Re(0,Se(1,d))||1};let D=!0;function O(V){const P=V[0].intersectionRatio;if(P!==d){if(!D)return o();P?o(!1,P):n=setTimeout(()=>{o(!1,1e-7)},1e3)}P===1&&!Kr(i,e.getBoundingClientRect())&&o(),D=!1}try{t=new IntersectionObserver(O,{...K,root:a.ownerDocument})}catch{t=new IntersectionObserver(O,K)}t.observe(e)}return o(!0),l}function qn(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:d=!1}=n,i=Kn(e),E=a||l?[...i?ge(i):[],...ge(r)]:[];E.forEach(S=>{a&&S.addEventListener("scroll",t,{passive:!0}),l&&S.addEventListener("resize",t)});const v=i&&s?Na(i,t):null;let g=-1,k=null;o&&(k=new ResizeObserver(S=>{let[f]=S;f&&f.target===i&&k&&(k.unobserve(r),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var K;(K=k)==null||K.observe(r)})),t()}),i&&!d&&k.observe(i),k.observe(r));let T,A=d?pe(e):null;d&&y();function y(){const S=pe(e);A&&!Kr(A,S)&&t(),A=S,T=requestAnimationFrame(y)}return t(),()=>{var S;E.forEach(f=>{a&&f.removeEventListener("scroll",t),l&&f.removeEventListener("resize",t)}),v?.(),(S=k)==null||S.disconnect(),k=null,d&&cancelAnimationFrame(T)}}const Sa=ta,_a=aa,fa=na,xn=ea,Ka=(e,r,t)=>{const n=new Map,a={platform:ya,...t},l={...a.platform,_c:n};return Qt(e,r,{...a,platform:l})};var qe=typeof document<"u"?u.useLayoutEffect:u.useEffect;function ze(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!ze(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const l=a[n];if(!(l==="_owner"&&e.$$typeof)&&!ze(e[l],r[l]))return!1}return!0}return e!==e&&r!==r}function Lr(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Cn(e,r){const t=Lr(e);return Math.round(r*t)/t}function an(e){const r=u.useRef(e);return qe(()=>{r.current=e}),r}function La(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:l,floating:o}={},transform:s=!0,whileElementsMounted:d,open:i}=e,[E,v]=u.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[g,k]=u.useState(n);ze(g,n)||k(n);const[T,A]=u.useState(null),[y,S]=u.useState(null),f=u.useCallback(N=>{N!==V.current&&(V.current=N,A(N))},[]),K=u.useCallback(N=>{N!==P.current&&(P.current=N,S(N))},[]),D=l||T,O=o||y,V=u.useRef(null),P=u.useRef(null),B=u.useRef(E),j=d!=null,h=an(d),H=an(a),U=an(i),p=u.useCallback(()=>{if(!V.current||!P.current)return;const N={placement:r,strategy:t,middleware:g};H.current&&(N.platform=H.current),Ka(V.current,P.current,N).then(m=>{const I={...m,isPositioned:U.current!==!1};R.current&&!ze(B.current,I)&&(B.current=I,ur.flushSync(()=>{v(I)}))})},[g,r,t,H,U]);qe(()=>{i===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,v(N=>({...N,isPositioned:!1})))},[i]);const R=u.useRef(!1);qe(()=>(R.current=!0,()=>{R.current=!1}),[]),qe(()=>{if(D&&(V.current=D),O&&(P.current=O),D&&O){if(h.current)return h.current(D,O,p);p()}},[D,O,p,h,j]);const c=u.useMemo(()=>({reference:V,floating:P,setReference:f,setFloating:K}),[f,K]),b=u.useMemo(()=>({reference:D,floating:O}),[D,O]),L=u.useMemo(()=>{const N={position:t,left:0,top:0};if(!b.floating)return N;const m=Cn(b.floating,E.x),I=Cn(b.floating,E.y);return s?{...N,transform:"translate("+m+"px, "+I+"px)",...Lr(b.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:m,top:I}},[t,s,b.floating,E.x,E.y]);return u.useMemo(()=>({...E,update:p,refs:c,elements:b,floatingStyles:L}),[E,p,c,b,L])}const ca=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?xn({element:n.current,padding:a}).fn(t):{}:n?xn({element:n,padding:a}).fn(t):{}}}},Da=(e,r)=>({...Sa(e),options:[e,r]}),Oa=(e,r)=>({..._a(e),options:[e,r]}),Ia=(e,r)=>({...fa(e),options:[e,r]}),ba=(e,r)=>({...ca(e),options:[e,r]});function Fa(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Pa(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function Va(){return/apple/i.test(navigator.vendor)}function ha(){return Fa().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Ga(){return Pa().includes("jsdom/")}const Ma="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Jn(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function Pe(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&We(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function ye(e){return"composedPath"in e?e.composedPath()[0]:e.target}function on(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function ja(e){return e.matches("html,body")}function Ae(e){return e?.ownerDocument||document}function Ua(e){return X(e)&&e.matches(Ma)}function Ba(e){if(!e||Ga())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function ln(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var o;return l.parentId===r&&((o=l.context)==null?void 0:o.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var o;return(o=a)==null?void 0:o.some(s=>{var d;return l.parentId===s.id&&((d=l.context)==null?void 0:d.open)})}):e,n=n.concat(a);return n}function Ha(e){return"nativeEvent"in e}function mn(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var fe=typeof document<"u"?u.useLayoutEffect:u.useEffect;const wa={...Er};function He(e){const r=u.useRef(e);return fe(()=>{r.current=e}),r}const Ya=wa.useInsertionEffect,qa=Ya||(e=>e());function de(e){const r=u.useRef(()=>{});return qa(()=>{r.current=e}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const xa="data-floating-ui-focusable",$n="active",Wn="selected",Ca={...Er};let zn=!1,Ja=0;const Xn=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Ja++;function $a(){const[e,r]=u.useState(()=>zn?Xn():void 0);return fe(()=>{e==null&&r(Xn())},[]),u.useEffect(()=>{zn=!0},[]),e}const Wa=Ca.useId,za=Wa||$a;function Xa(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Za=u.createContext(null),Qa=u.createContext(null),cr=()=>{var e;return((e=u.useContext(Za))==null?void 0:e.id)||null},cn=()=>u.useContext(Qa);function Dn(e){return"data-floating-ui-"+e}function ne(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Zn=Dn("safe-polygon");function sn(e,r,t){if(t&&!mn(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function dn(e){return typeof e=="function"?e():e}function eo(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:l,elements:o}=e,{enabled:s=!0,delay:d=0,handleClose:i=null,mouseOnly:E=!1,restMs:v=0,move:g=!0}=r,k=cn(),T=cr(),A=He(i),y=He(d),S=He(t),f=He(v),K=u.useRef(),D=u.useRef(-1),O=u.useRef(),V=u.useRef(-1),P=u.useRef(!0),B=u.useRef(!1),j=u.useRef(()=>{}),h=u.useRef(!1),H=u.useCallback(()=>{var L;const N=(L=a.current.openEvent)==null?void 0:L.type;return N?.includes("mouse")&&N!=="mousedown"},[a]);u.useEffect(()=>{if(!s)return;function L(N){let{open:m}=N;m||(ne(D),ne(V),P.current=!0,h.current=!1)}return l.on("openchange",L),()=>{l.off("openchange",L)}},[s,l]),u.useEffect(()=>{if(!s||!A.current||!t)return;function L(m){H()&&n(!1,m,"hover")}const N=Ae(o.floating).documentElement;return N.addEventListener("mouseleave",L),()=>{N.removeEventListener("mouseleave",L)}},[o.floating,t,n,s,A,H]);const U=u.useCallback(function(L,N,m){N===void 0&&(N=!0),m===void 0&&(m="hover");const I=sn(y.current,"close",K.current);I&&!O.current?(ne(D),D.current=window.setTimeout(()=>n(!1,L,m),I)):N&&(ne(D),n(!1,L,m))},[y,n]),p=de(()=>{j.current(),O.current=void 0}),R=de(()=>{if(B.current){const L=Ae(o.floating).body;L.style.pointerEvents="",L.removeAttribute(Zn),B.current=!1}}),c=de(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);u.useEffect(()=>{if(!s)return;function L(F){if(ne(D),P.current=!1,E&&!mn(K.current)||dn(f.current)>0&&!sn(y.current,"open"))return;const w=sn(y.current,"open",K.current);w?D.current=window.setTimeout(()=>{S.current||n(!0,F,"hover")},w):t||n(!0,F,"hover")}function N(F){if(c()){R();return}j.current();const w=Ae(o.floating);if(ne(V),h.current=!1,A.current&&a.current.floatingContext){t||ne(D),O.current=A.current({...a.current.floatingContext,tree:k,x:F.clientX,y:F.clientY,onClose(){R(),p(),c()||U(F,!0,"safe-polygon")}});const te=O.current;w.addEventListener("mousemove",te),j.current=()=>{w.removeEventListener("mousemove",te)};return}(K.current==="touch"?!Pe(o.floating,F.relatedTarget):!0)&&U(F)}function m(F){c()||a.current.floatingContext&&(A.current==null||A.current({...a.current.floatingContext,tree:k,x:F.clientX,y:F.clientY,onClose(){R(),p(),c()||U(F)}})(F))}function I(){ne(D)}function M(F){c()||U(F,!1)}if(q(o.domReference)){const F=o.domReference,w=o.floating;return t&&F.addEventListener("mouseleave",m),g&&F.addEventListener("mousemove",L,{once:!0}),F.addEventListener("mouseenter",L),F.addEventListener("mouseleave",N),w&&(w.addEventListener("mouseleave",m),w.addEventListener("mouseenter",I),w.addEventListener("mouseleave",M)),()=>{t&&F.removeEventListener("mouseleave",m),g&&F.removeEventListener("mousemove",L),F.removeEventListener("mouseenter",L),F.removeEventListener("mouseleave",N),w&&(w.removeEventListener("mouseleave",m),w.removeEventListener("mouseenter",I),w.removeEventListener("mouseleave",M))}}},[o,s,e,E,g,U,p,R,n,t,S,k,y,A,a,c,f]),fe(()=>{var L;if(s&&t&&(L=A.current)!=null&&L.__options.blockPointerEvents&&H()){B.current=!0;const m=o.floating;if(q(o.domReference)&&m){var N;const I=Ae(o.floating).body;I.setAttribute(Zn,"");const M=o.domReference,F=k==null||(N=k.nodesRef.current.find(w=>w.id===T))==null||(N=N.context)==null?void 0:N.elements.floating;return F&&(F.style.pointerEvents=""),I.style.pointerEvents="none",M.style.pointerEvents="auto",m.style.pointerEvents="auto",()=>{I.style.pointerEvents="",M.style.pointerEvents="",m.style.pointerEvents=""}}}},[s,t,T,o,k,A,H]),fe(()=>{t||(K.current=void 0,h.current=!1,p(),R())},[t,p,R]),u.useEffect(()=>()=>{p(),ne(D),ne(V),R()},[s,o.domReference,p,R]);const b=u.useMemo(()=>{function L(N){K.current=N.pointerType}return{onPointerDown:L,onPointerEnter:L,onMouseMove(N){const{nativeEvent:m}=N;function I(){!P.current&&!S.current&&n(!0,m,"hover")}E&&!mn(K.current)||t||dn(f.current)===0||h.current&&N.movementX**2+N.movementY**2<2||(ne(V),K.current==="touch"?I():(h.current=!0,V.current=window.setTimeout(I,dn(f.current))))}}},[E,n,t,S,f]);return u.useMemo(()=>s?{reference:b}:{},[s,b])}function kn(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&We(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function no(e){return"composedPath"in e?e.composedPath()[0]:e.target}const ro={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},to={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Qn=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function ao(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:l}=e,{enabled:o=!0,escapeKey:s=!0,outsidePress:d=!0,outsidePressEvent:i="pointerdown",referencePress:E=!1,referencePressEvent:v="pointerdown",ancestorScroll:g=!1,bubbles:k,capture:T}=r,A=cn(),y=de(typeof d=="function"?d:()=>!1),S=typeof d=="function"?y:d,f=u.useRef(!1),K=u.useRef(!1),{escapeKey:D,outsidePress:O}=Qn(k),{escapeKey:V,outsidePress:P}=Qn(T),B=u.useRef(!1),j=de(c=>{var b;if(!t||!o||!s||c.key!=="Escape"||B.current)return;const L=(b=l.current.floatingContext)==null?void 0:b.nodeId,N=A?ln(A.nodesRef.current,L):[];if(!D&&(c.stopPropagation(),N.length>0)){let m=!0;if(N.forEach(I=>{var M;if((M=I.context)!=null&&M.open&&!I.context.dataRef.current.__escapeKeyBubbles){m=!1;return}}),!m)return}n(!1,Ha(c)?c.nativeEvent:c,"escape-key")}),h=de(c=>{var b;const L=()=>{var N;j(c),(N=ye(c))==null||N.removeEventListener("keydown",L)};(b=ye(c))==null||b.addEventListener("keydown",L)}),H=de(c=>{var b;const L=f.current;f.current=!1;const N=K.current;if(K.current=!1,i==="click"&&N||L||typeof S=="function"&&!S(c))return;const m=ye(c),I="["+Dn("inert")+"]",M=Ae(a.floating).querySelectorAll(I);let F=q(m)?m:null;for(;F&&!ke(F);){const $=Ee(F);if(ke($)||!q($))break;F=$}if(M.length&&q(m)&&!ja(m)&&!Pe(m,a.floating)&&Array.from(M).every($=>!Pe(F,$)))return;if(X(m)&&R){const $=ke(m),J=re(m),Y=/auto|scroll/,x=$||Y.test(J.overflowX),le=$||Y.test(J.overflowY),se=x&&m.clientWidth>0&&m.scrollWidth>m.clientWidth,ue=le&&m.clientHeight>0&&m.scrollHeight>m.clientHeight,br=J.direction==="rtl",Fr=ue&&(br?c.offsetX<=m.offsetWidth-m.clientWidth:c.offsetX>m.clientWidth),Pr=se&&c.offsetY>m.clientHeight;if(Fr||Pr)return}const w=(b=l.current.floatingContext)==null?void 0:b.nodeId,Te=A&&ln(A.nodesRef.current,w).some($=>{var J;return on(c,(J=$.context)==null?void 0:J.elements.floating)});if(on(c,a.floating)||on(c,a.domReference)||Te)return;const te=A?ln(A.nodesRef.current,w):[];if(te.length>0){let $=!0;if(te.forEach(J=>{var Y;if((Y=J.context)!=null&&Y.open&&!J.context.dataRef.current.__outsidePressBubbles){$=!1;return}}),!$)return}n(!1,c,"outside-press")}),U=de(c=>{var b;const L=()=>{var N;H(c),(N=ye(c))==null||N.removeEventListener(i,L)};(b=ye(c))==null||b.addEventListener(i,L)});u.useEffect(()=>{if(!t||!o)return;l.current.__escapeKeyBubbles=D,l.current.__outsidePressBubbles=O;let c=-1;function b(M){n(!1,M,"ancestor-scroll")}function L(){window.clearTimeout(c),B.current=!0}function N(){c=window.setTimeout(()=>{B.current=!1},en()?5:0)}const m=Ae(a.floating);s&&(m.addEventListener("keydown",V?h:j,V),m.addEventListener("compositionstart",L),m.addEventListener("compositionend",N)),S&&m.addEventListener(i,P?U:H,P);let I=[];return g&&(q(a.domReference)&&(I=ge(a.domReference)),q(a.floating)&&(I=I.concat(ge(a.floating))),!q(a.reference)&&a.reference&&a.reference.contextElement&&(I=I.concat(ge(a.reference.contextElement)))),I=I.filter(M=>{var F;return M!==((F=m.defaultView)==null?void 0:F.visualViewport)}),I.forEach(M=>{M.addEventListener("scroll",b,{passive:!0})}),()=>{s&&(m.removeEventListener("keydown",V?h:j,V),m.removeEventListener("compositionstart",L),m.removeEventListener("compositionend",N)),S&&m.removeEventListener(i,P?U:H,P),I.forEach(M=>{M.removeEventListener("scroll",b)}),window.clearTimeout(c)}},[l,a,s,S,i,t,n,g,o,D,O,j,V,h,H,P,U]),u.useEffect(()=>{f.current=!1},[S,i]);const p=u.useMemo(()=>({onKeyDown:j,...E&&{[ro[v]]:c=>{n(!1,c.nativeEvent,"reference-press")},...v!=="click"&&{onClick(c){n(!1,c.nativeEvent,"reference-press")}}}}),[j,n,E,v]),R=u.useMemo(()=>({onKeyDown:j,onMouseDown(){K.current=!0},onMouseUp(){K.current=!0},[to[i]]:()=>{f.current=!0}}),[j,i]);return u.useMemo(()=>o?{reference:p,floating:R}:{},[o,p,R])}function oo(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=za(),l=u.useRef({}),[o]=u.useState(()=>Xa()),s=cr()!=null,[d,i]=u.useState(n.reference),E=de((k,T,A)=>{l.current.openEvent=k?T:void 0,o.emit("openchange",{open:k,event:T,reason:A,nested:s}),t?.(k,T,A)}),v=u.useMemo(()=>({setPositionReference:i}),[]),g=u.useMemo(()=>({reference:d||n.reference||null,floating:n.floating||null,domReference:n.reference}),[d,n.reference,n.floating]);return u.useMemo(()=>({dataRef:l,open:r,onOpenChange:E,elements:g,events:o,floatingId:a,refs:v}),[r,E,g,o,a,v])}function lo(e){e===void 0&&(e={});const{nodeId:r}=e,t=oo({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[l,o]=u.useState(null),[s,d]=u.useState(null),E=a?.domReference||l,v=u.useRef(null),g=cn();fe(()=>{E&&(v.current=E)},[E]);const k=La({...e,elements:{...a,...s&&{reference:s}}}),T=u.useCallback(K=>{const D=q(K)?{getBoundingClientRect:()=>K.getBoundingClientRect(),getClientRects:()=>K.getClientRects(),contextElement:K}:K;d(D),k.refs.setReference(D)},[k.refs]),A=u.useCallback(K=>{(q(K)||K===null)&&(v.current=K,o(K)),(q(k.refs.reference.current)||k.refs.reference.current===null||K!==null&&!q(K))&&k.refs.setReference(K)},[k.refs]),y=u.useMemo(()=>({...k.refs,setReference:A,setPositionReference:T,domReference:v}),[k.refs,A,T]),S=u.useMemo(()=>({...k.elements,domReference:E}),[k.elements,E]),f=u.useMemo(()=>({...k,...n,refs:y,elements:S,nodeId:r}),[k,y,S,r,n]);return fe(()=>{n.dataRef.current.floatingContext=f;const K=g?.nodesRef.current.find(D=>D.id===r);K&&(K.context=f)}),u.useMemo(()=>({...k,context:f,refs:y,elements:S}),[k,y,S,f])}function En(){return ha()&&Va()}function so(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:l,elements:o}=e,{enabled:s=!0,visibleOnly:d=!0}=r,i=u.useRef(!1),E=u.useRef(-1),v=u.useRef(!0);u.useEffect(()=>{if(!s)return;const k=z(o.domReference);function T(){!t&&X(o.domReference)&&o.domReference===Jn(Ae(o.domReference))&&(i.current=!0)}function A(){v.current=!0}function y(){v.current=!1}return k.addEventListener("blur",T),En()&&(k.addEventListener("keydown",A,!0),k.addEventListener("pointerdown",y,!0)),()=>{k.removeEventListener("blur",T),En()&&(k.removeEventListener("keydown",A,!0),k.removeEventListener("pointerdown",y,!0))}},[o.domReference,t,s]),u.useEffect(()=>{if(!s)return;function k(T){let{reason:A}=T;(A==="reference-press"||A==="escape-key")&&(i.current=!0)}return a.on("openchange",k),()=>{a.off("openchange",k)}},[a,s]),u.useEffect(()=>()=>{ne(E)},[]);const g=u.useMemo(()=>({onMouseLeave(){i.current=!1},onFocus(k){if(i.current)return;const T=ye(k.nativeEvent);if(d&&q(T)){if(En()&&!k.relatedTarget){if(!v.current&&!Ua(T))return}else if(!Ba(T))return}n(!0,k.nativeEvent,"focus")},onBlur(k){i.current=!1;const T=k.relatedTarget,A=k.nativeEvent,y=q(T)&&T.hasAttribute(Dn("focus-guard"))&&T.getAttribute("data-type")==="outside";E.current=window.setTimeout(()=>{var S;const f=Jn(o.domReference?o.domReference.ownerDocument:document);!T&&f===o.domReference||Pe((S=l.current.floatingContext)==null?void 0:S.refs.floating.current,f)||Pe(o.domReference,f)||y||n(!1,A,"focus")})}}),[l,o.domReference,n,d]);return u.useMemo(()=>s?{reference:g}:{},[s,g])}function un(e,r,t){const n=new Map,a=t==="item";let l=e;if(a&&e){const{[$n]:o,[Wn]:s,...d}=e;l=d}return{...t==="floating"&&{tabIndex:-1,[xa]:""},...l,...r.map(o=>{const s=o?o[t]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((o,s)=>(s&&Object.entries(s).forEach(d=>{let[i,E]=d;if(!(a&&[$n,Wn].includes(i)))if(i.indexOf("on")===0){if(n.has(i)||n.set(i,[]),typeof E=="function"){var v;(v=n.get(i))==null||v.push(E),o[i]=function(){for(var g,k=arguments.length,T=new Array(k),A=0;A<k;A++)T[A]=arguments[A];return(g=n.get(i))==null?void 0:g.map(y=>y(...T)).find(y=>y!==void 0)}}}else o[i]=E}),o),{})}}function io(e){e===void 0&&(e=[]);const r=e.map(s=>s?.reference),t=e.map(s=>s?.floating),n=e.map(s=>s?.item),a=u.useCallback(s=>un(s,e,"reference"),r),l=u.useCallback(s=>un(s,e,"floating"),t),o=u.useCallback(s=>un(s,e,"item"),n);return u.useMemo(()=>({getReferenceProps:a,getFloatingProps:l,getItemProps:o}),[a,l,o])}function ko(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var o;return l.parentId===r&&((o=l.context)==null?void 0:o.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var o;return(o=a)==null?void 0:o.some(s=>{var d;return l.parentId===s.id&&((d=l.context)==null?void 0:d.open)})}):e,n=n.concat(a);return n}function er(e,r){const[t,n]=e;let a=!1;const l=r.length;for(let o=0,s=l-1;o<l;s=o++){const[d,i]=r[o]||[0,0],[E,v]=r[s]||[0,0];i>=n!=v>=n&&t<=(E-d)*(n-i)/(v-i)+d&&(a=!a)}return a}function Eo(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function uo(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,l=!1,o=null,s=null,d=performance.now();function i(v,g){const k=performance.now(),T=k-d;if(o===null||s===null||T===0)return o=v,s=g,d=k,null;const A=v-o,y=g-s,f=Math.sqrt(A*A+y*y)/T;return o=v,s=g,d=k,f}const E=v=>{let{x:g,y:k,placement:T,elements:A,onClose:y,nodeId:S,tree:f}=v;return function(D){function O(){clearTimeout(a),y()}if(clearTimeout(a),!A.domReference||!A.floating||T==null||g==null||k==null)return;const{clientX:V,clientY:P}=D,B=[V,P],j=no(D),h=D.type==="mouseleave",H=kn(A.floating,j),U=kn(A.domReference,j),p=A.domReference.getBoundingClientRect(),R=A.floating.getBoundingClientRect(),c=T.split("-")[0],b=g>R.right-R.width/2,L=k>R.bottom-R.height/2,N=Eo(B,p),m=R.width>p.width,I=R.height>p.height,M=(m?p:R).left,F=(m?p:R).right,w=(I?p:R).top,Te=(I?p:R).bottom;if(H&&(l=!0,!h))return;if(U&&(l=!1),U&&!h){l=!0;return}if(h&&q(D.relatedTarget)&&kn(A.floating,D.relatedTarget)||f&&ko(f.nodesRef.current,S).some(J=>{let{context:Y}=J;return Y?.open}))return;if(c==="top"&&k>=p.bottom-1||c==="bottom"&&k<=p.top+1||c==="left"&&g>=p.right-1||c==="right"&&g<=p.left+1)return O();let te=[];switch(c){case"top":te=[[M,p.top+1],[M,R.bottom-1],[F,R.bottom-1],[F,p.top+1]];break;case"bottom":te=[[M,R.top+1],[M,p.bottom-1],[F,p.bottom-1],[F,R.top+1]];break;case"left":te=[[R.right-1,Te],[R.right-1,w],[p.left+1,w],[p.left+1,Te]];break;case"right":te=[[p.right-1,Te],[p.right-1,w],[R.left+1,w],[R.left+1,Te]];break}function $(J){let[Y,x]=J;switch(c){case"top":{const le=[m?Y+r/2:b?Y+r*4:Y-r*4,x+r+1],se=[m?Y-r/2:b?Y+r*4:Y-r*4,x+r+1],ue=[[R.left,b||m?R.bottom-r:R.top],[R.right,b?m?R.bottom-r:R.top:R.bottom-r]];return[le,se,...ue]}case"bottom":{const le=[m?Y+r/2:b?Y+r*4:Y-r*4,x-r],se=[m?Y-r/2:b?Y+r*4:Y-r*4,x-r],ue=[[R.left,b||m?R.top+r:R.bottom],[R.right,b?m?R.top+r:R.bottom:R.top+r]];return[le,se,...ue]}case"left":{const le=[Y+r+1,I?x+r/2:L?x+r*4:x-r*4],se=[Y+r+1,I?x-r/2:L?x+r*4:x-r*4];return[...[[L||I?R.right-r:R.left,R.top],[L?I?R.right-r:R.left:R.right-r,R.bottom]],le,se]}case"right":{const le=[Y-r,I?x+r/2:L?x+r*4:x-r*4],se=[Y-r,I?x-r/2:L?x+r*4:x-r*4],ue=[[L||I?R.left+r:R.right,R.top],[L?I?R.left+r:R.right:R.left+r,R.bottom]];return[le,se,...ue]}}}if(!er([V,P],te)){if(l&&!N)return O();if(!h&&n){const J=i(D.clientX,D.clientY);if(J!==null&&J<.1)return O()}er([V,P],$([g,k]))?!l&&n&&(a=window.setTimeout(O,40)):O()}}};return E.__options={blockPointerEvents:t},E}function C(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,l])=>[`--__${e}c-${r}-${t}-${a}`,l])):{}}const vo={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},go={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},nr=(e,r,t,n,a,l)=>r.split(" ").map((o,s,d)=>{var i,E;if(e==="margin-inline"&&o==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&o==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&o==="auto")return"auto";let v=`var(--${l}-${t}-${o})`;if(n.includes(o))v=o==="px"?"1px":o;else if(t==="spacing"&&o.startsWith("space"))v=`var(--${l}-${o})`;else if(t==="spacing"){const g=`--${l}-spacing-${o}`;v=`var(${(i=vo[g])!==null&&i!==void 0?i:g})`}else if(t==="radius"){const g=(E=go[o])!==null&&E!==void 0?E:o;v=`var(--${l}-radius-${g})`}return a?o==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function W(e,r,t,n,a,l=!1,o=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:nr(t,a,n,o,l,e)};const s={};return Object.entries(a).forEach(([d,i])=>{s[`--__${e}c-${r}-${t}-${d}`]=nr(t,i,n,o,l,e)}),s}const On=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],In=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:l,marginInline:o,marginBlock:s,width:d,minWidth:i,maxWidth:E,height:v,minHeight:g,maxHeight:k,position:T,inset:A,top:y,right:S,left:f,bottom:K,overflow:D,overflowX:O,overflowY:V,flexBasis:P,flexGrow:B,flexShrink:j,gridColumn:h})=>{const H=Xe(!1),{cn:U}=Z(),p=H?"ax":"a",R=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},W(p,"r","p","spacing",t)),W(p,"r","pi","spacing",n)),W(p,"r","pb","spacing",a)),W(p,"r","m","spacing",l)),W(p,"r","mi","spacing",o)),W(p,"r","mb","spacing",s)),C(p,"r","w",d)),C(p,"r","minw",i)),C(p,"r","maxw",E)),C(p,"r","h",v)),C(p,"r","minh",g)),C(p,"r","maxh",k)),C(p,"r","position",T)),W(p,"r","inset","spacing",A)),W(p,"r","top","spacing",y)),W(p,"r","right","spacing",S)),W(p,"r","bottom","spacing",K)),W(p,"r","left","spacing",f)),C(p,"r","overflow",D)),C(p,"r","overflowx",O)),C(p,"r","overflowy",V)),C(p,"r","flex-basis",P)),C(p,"r","flex-grow",B)),C(p,"r","flex-shrink",j)),C(p,"r","grid-column",h));return G.createElement(Ke,{className:U({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":o,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":i,"navds-r-maxw":E,"navds-r-h":v,"navds-r-minh":g,"navds-r-maxh":k,"navds-r-position":T,"navds-r-inset":A,"navds-r-top":y,"navds-r-right":S,"navds-r-bottom":K,"navds-r-left":f,"navds-r-overflow":D,"navds-r-overflowx":O,"navds-r-overflowy":V,"navds-r-flex-basis":P,"navds-r-flex-grow":B,"navds-r-flex-shrink":j,"navds-r-grid-column":h}),style:R},e)};var To=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ao=u.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",background:l,borderColor:o,borderWidth:s,borderRadius:d,shadow:i,style:E,asChild:v}=e,g=To(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:k}=Z(),T=Object.assign(Object.assign(Object.assign({},E),{"--__axc-box-background":l?`var(--ax-bg-${l})`:void 0,"--__axc-box-shadow":i?`var(--ax-shadow-${i})`:void 0,"--__axc-box-border-color":o?`var(--ax-border-${o})`:void 0,"--__axc-box-border-width":s?s.split(" ").map(y=>`${y}px`).join(" "):void 0}),W("ax","box","radius","radius",d,!1,["0"])),A=v?Ke:a;return G.createElement(In,Object.assign({},g),G.createElement(A,Object.assign({},yn(g,On),{ref:r,style:T,className:k("navds-box",n,{"navds-box-bg":l,"navds-box-border-color":o,"navds-box-border-width":s,"navds-box-radius":d,"navds-box-shadow":i})}),t))});var Ro=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mo=u.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",background:l,borderColor:o,borderWidth:s,borderRadius:d,shadow:i,style:E,asChild:v}=e,g=Ro(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const k=Xe(!1),{cn:T}=Z(),A=k?"ax":"a",y=Object.assign(Object.assign(Object.assign({},E),{[`--__${A}c-box-background`]:l?`var(--a-${l})`:void 0,[`--__${A}c-box-shadow`]:i?`var(--a-shadow-${i})`:void 0,[`--__${A}c-box-border-color`]:o?`var(--a-${o})`:void 0,[`--__${A}c-box-border-width`]:s?s.split(" ").map(f=>`${f}px`).join(" "):void 0}),W(A,"box","radius","radius",d,!1,["0"])),S=v?Ke:a;return G.createElement(In,Object.assign({},g),G.createElement(S,Object.assign({},yn(g,On),{ref:r,style:y,className:T("navds-box",n,{"navds-box-bg":l,"navds-box-border-color":o,"navds-box-border-width":s,"navds-box-border-radius":d,"navds-box-shadow":i})}),t))}),bn=mo;bn.New=Ao;var po=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Dr=u.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:l,justify:o,wrap:s=!0,gap:d,style:i,direction:E="row",asChild:v}=e,g=po(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const T=Xe(!1)?"ax":"a",{cn:A}=Z(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},i),W(T,"stack","gap","spacing",d)),C(T,"stack","direction",E)),C(T,"stack","align",l)),C(T,"stack","justify",o)),S=v?Ke:a;return G.createElement(In,Object.assign({},g),G.createElement(S,Object.assign({},yn(g,On),{ref:r,style:y,className:A("navds-stack",n,{"navds-vstack":E==="column","navds-hstack":E==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":o,"navds-stack-direction":E,"navds-stack-wrap":s})}),t))});var yo=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const be=u.forwardRef((e,r)=>{var{as:t="div"}=e,n=yo(e,["as"]);return G.createElement(Dr,Object.assign({as:t},n,{ref:r,direction:"row"}))});var No=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vn=u.forwardRef((e,r)=>{var{as:t="div"}=e,n=No(e,["as"]);return G.createElement(Dr,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))}),So=()=>{const{cn:e}=Z();return G.createElement("span",{className:e("navds-stack__spacer")})};var _o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fo=u.forwardRef((e,r)=>{var{children:t,className:n,arrow:a=!0,placement:l="top",open:o,defaultOpen:s=!1,onOpenChange:d,offset:i,content:E,delay:v=150,id:g,keys:k,maxChar:T=80,describesChild:A=!1}=e,y=_o(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:S}=Z(),[f,K]=et({defaultValue:s,value:o,onChange:d}),D=u.useRef(null),O=it(!1),V=O?O.ref.current:void 0,{x:P,y:B,strategy:j,context:h,placement:H,middlewareData:{arrow:{x:U,y:p}={},hide:{referenceHidden:R}={}},refs:c}=lo({placement:l,open:f,onOpenChange:M=>K(M),middleware:[Da(i??(a?8:4)),Oa(),Ia({padding:5,fallbackPlacements:["bottom","top"]}),ba({element:D,padding:5})],whileElementsMounted:O?(M,F,w)=>qn(M,F,w,{animationFrame:!0}):qn,strategy:O?"fixed":void 0}),{getReferenceProps:b,getFloatingProps:L}=io([eo(h,{handleClose:uo(),restMs:v}),so(h),ao(h)]),N=Qr(g),m=jr(r,c.setFloating);if(!t||t?.type===G.Fragment||t===G.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;E?.length>T&&f&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${E.length}
Tooltip-content: ${E}`);const I=A?f?{"aria-describedby":N}:{title:E}:{"aria-label":E};return G.createElement(G.Fragment,null,G.createElement(Ke,Object.assign({ref:c.setReference},b(),I,{"aria-keyshortcuts":k?k.join("+"):void 0}),t),G.createElement(xt,{rootElement:V,asChild:!0},f&&G.createElement("div",Object.assign({},L(Object.assign(Object.assign({},y),{ref:m,style:{position:j,top:B??0,left:P??0,visibility:R?"hidden":"visible"},role:"tooltip",id:N,className:S("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":H,"data-state":"open"}),E,k&&G.createElement("span",{className:S("navds-tooltip__keys"),"aria-hidden":!0},k.map(M=>G.createElement(Jr,{as:"kbd",key:M,className:S("navds-tooltip__key")},M))),a&&G.createElement("div",{ref:M=>{D.current=M},className:S("navds-tooltip__arrow"),style:{left:U!=null?`${U}px`:"",top:p!=null?`${p}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[H]]:"-3.5px"}}))))}),Ko={SkjermlenkeType:[{kode:"FAKTA_OM_FEILUTBETALING",navn:"Fakta om feilutbetaling",kodeverk:"SKJERMLENKE_TYPE"},{kode:"TILBAKEKREVING",navn:"Tilbakekreving",kodeverk:"SKJERMLENKE_TYPE"},{kode:"FORELDELSE",navn:"Foreldelse",kodeverk:"SKJERMLENKE_TYPE"},{kode:"VEDTAK",navn:"Vedtak",kodeverk:"SKJERMLENKE_TYPE"},{kode:"FAKTA_OM_VERGE",navn:"Fakta om verge/fullmektig",kodeverk:"SKJERMLENKE_TYPE"}],HendelseType:[{kode:"MEDLEMSKAP",navn:"§14-2 Medlemskap",kodeverk:"HENDELSE_TYPE"},{kode:"OKONOMI_FEIL",navn:"Feil i økonomi",kodeverk:"HENDELSE_TYPE"},{kode:"OPPTJENING_TYPE",navn:"§14-6 Opptjening",kodeverk:"HENDELSE_TYPE"},{kode:"BEREGNING_TYPE",navn:"§14-7 Beregning",kodeverk:"HENDELSE_TYPE"},{kode:"STONADSPERIODEN_TYPE",navn:"§14-9 Stønadsperioden",kodeverk:"HENDELSE_TYPE"},{kode:"UTTAK_GENERELT_TYPE",navn:"§14-10 Generelt om uttak",kodeverk:"HENDELSE_TYPE"},{kode:"UTTAK_UTSETTELSE_TYPE",navn:"§14-11 Utsettelse av uttak",kodeverk:"HENDELSE_TYPE"},{kode:"UTTAK_KVOTENE_TYPE",navn:"§14-12 Uttak av kvotene",kodeverk:"HENDELSE_TYPE"},{kode:"VILKAAR_GENERELLE_TYPE",navn:"§14-13 Generelle vilkår for fars uttak",kodeverk:"HENDELSE_TYPE"},{kode:"KUN_RETT_TYPE",navn:"§14-14 Kun far/medmor rett",kodeverk:"HENDELSE_TYPE"},{kode:"UTTAK_ALENEOMSORG_TYPE",navn:"§14-15 Uttak ved aleneomsorg/samlivsbrudd",kodeverk:"HENDELSE_TYPE"},{kode:"UTTAK_GRADERT_TYPE",navn:"§14-16 Gradert uttak",kodeverk:"HENDELSE_TYPE"},{kode:"FP_ANNET_HENDELSE_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"ES_MEDLEMSKAP",navn:"§14-2 Medlemskap",kodeverk:"HENDELSE_TYPE"},{kode:"ES_FODSELSVILKAARET_TYPE",navn:"§14-17 1. ledd Fødselsvilkåret",kodeverk:"HENDELSE_TYPE"},{kode:"ES_ADOPSJONSVILKAARET_TYPE",navn:"§14-17 1. ledd Adopsjonsvilkåret",kodeverk:"HENDELSE_TYPE"},{kode:"ES_FORELDREANSVAR_TYPE",navn:"§14-17 2. ledd Foreldreansvar ",kodeverk:"HENDELSE_TYPE"},{kode:"ES_OMSORGSVILKAAR_TYPE",navn:"§14-17 3. ledd Omsorgsvilkår ved mors død",kodeverk:"HENDELSE_TYPE"},{kode:"ES_FORELDREANSVAR_FAR_TYPE",navn:"§14-17 4. ledd Foreldreansvar far",kodeverk:"HENDELSE_TYPE"},{kode:"ES_RETT_PAA_FORELDREPENGER_TYPE",navn:"Rett på foreldrepenger etter klage",kodeverk:"HENDELSE_TYPE"},{kode:"ES_FEIL_UTBETALING_TYPE",navn:"Feil i utbetaling",kodeverk:"HENDELSE_TYPE"},{kode:"ES_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"SVP_FAKTA_TYPE",navn:"§14-4 Fakta om svangerskap",kodeverk:"HENDELSE_TYPE"},{kode:"SVP_ARBEIDSGIVERS_FORHOLD_TYPE",navn:"§14-4 1. ledd Arbeidsgivers forhold",kodeverk:"HENDELSE_TYPE"},{kode:"SVP_OPPTJENING_TYPE",navn:"§14-4 3. ledd Opptjening/ inntekt",kodeverk:"HENDELSE_TYPE"},{kode:"SVP_BEREGNING_TYPE",navn:"§14-4 5. ledd Beregning ",kodeverk:"HENDELSE_TYPE"},{kode:"SVP_UTTAK_TYPE",navn:"§14-4 Uttak",kodeverk:"HENDELSE_TYPE"},{kode:"OPPHØR",navn:"Opphør",kodeverk:"HENDELSE_TYPE"},{kode:"SVP_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"FRISINN_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"PSB_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"PPN_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"OMP_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"},{kode:"OLP_ANNET_TYPE",navn:"Annet",kodeverk:"HENDELSE_TYPE"}],HendelseUnderType:[{kode:"IKKE_INNTEKT",navn:"Ikke inntekt 6 av siste 10 måneder",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"IKKE_YRKESAKTIV",navn:"Ikke yrkesaktiv med pensjonsgivende inntekt",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"INNTEKT_UNDER",navn:"Inntekt under 1/2 G",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ENDRING_GRUNNLAG",navn:"Endring i selve grunnlaget",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ENDRET_DEKNINGSGRAD",navn:"Endret dekningsgrad",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"FEIL_FLERBARNSDAGER",navn:"Feil i flerbarnsdager",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"OPPHOR_BARN_DOD",navn:"Opphør barn død",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"OPPHOR_MOTTAKER_DOD",navn:"Opphør mottaker død",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"STONADSPERIODE_OVER_3",navn:"Stønadsperioden er over 3 år",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"NY_STONADSPERIODE",navn:"Ny stønadsperiode for nytt barn",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"IKKE_OMSORG",navn:"Ikke omsorg for barnet",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOTTAKER_I_ARBEID",navn:"Mottaker er i arbeid heltid",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"FORELDRES_UTTAK",navn:"Ikke rett til samtidig uttak",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"STONADSPERIODE_MANGEL",navn:"Manglende stønadsperiode",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"LOVBESTEMT_FERIE",navn:"Lovbestemt ferie",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ARBEID_HELTID",navn:"Arbeid heltid",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOTTAKER_HELT_AVHENGIG",navn:"Mottaker er helt avhengig av hjelp til å ta seg av barnet",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOTTAKER_INNLAGT",navn:"Mottaker er innlagt i helseinstitusjon",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"BARN_INNLAGT",navn:"Barn er innlagt i helseinstitusjon",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"KVO_MOTTAKER_HELT_AVHENGIG",navn:"Mottaker er helt avhengig av hjelp til å ta seg av barnet",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"KVO_MOTTAKER_INNLAGT",navn:"Mottaker er innlagt i helseinstitusjon",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"KVO_SAMTIDIG_UTTAK",navn:"Samtidig uttak",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_ARBEID",navn:"Mor er ikke i arbeid heltid",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_STUDERT",navn:"Mor er ikke student på heltid",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_ARBEID_OG_STUDER",navn:"Mor er ikke i arbeid og student - heltid",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_HELT_AVHENGIG",navn:"Mor er ikke helt avhengig av hjelp til å ta seg av barnet",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_INNLAGT",navn:"Mor er ikke innlagt på helseinstitusjon",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_I_IP",navn:"Mor er ikke i introduksjonsprogram",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOR_IKKE_I_KP",navn:"Mor er ikke i kvalifiseringsprogram",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"FEIL_I_ANTALL_DAGER",navn:"Feil i antall dager",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"IKKE_ALENEOMSORG",navn:"Ikke aleneomsorg",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"GRADERT_UTTAK",navn:"Gradert uttak",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_ENDRING_TERMINDATO",navn:"Endring i termindato",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_TIDLIG_FODSEL",navn:"Tidlig fødsel",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_IKKE_HELSEFARLIG",navn:"Ikke helsefarlig for ventet barn",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_TILRETTELEGGING_FULLT_MULIG",navn:"Full tilrettelegging mulig",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_TILRETTELEGGING_DELVIS_MULIG",navn:"Delvis tilrettelegging mulig",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_IKKE_ARBEID",navn:"Ikke i arbeid siste 4 uker",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_INNTEKT_UNDER",navn:"Inntekt under 1/2 G",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_ENDRING_GRUNNLAG",navn:"Endring i selve grunnlaget",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_ENDRING_PROSENT",navn:"Endring i uttaksprosent/gradering",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_ENDRING_PERIODE",navn:"Endring av periode",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOTTAKER_DØD",navn:"Mottaker er død",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MOTTAKER_IKKE_GRAVID",navn:"Mottaker er ikke lenger gravid",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"SVP_INNTEKT_IKKE_TAP",navn:"Ikke tap av pensjonsgivende inntekt",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_BARN_IKKE_REGISTRERT",navn:"Barn er ikke registrert",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_MOTTAKER_FAR_MEDMOR",navn:"Mottaker er far eller medmor",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_IKKE_OPPFYLT",navn:"Adopsjonsvilkår er ikke oppfylt",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_BARN_OVER_15",navn:"Barn er over 15 år",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_MANN_IKKE_ALENE",navn:"Mann adopterer ikke alene",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_STEBARN",navn:"Stebarnsadopsjon",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_ANDRE_FORELDRE_DODD",navn:"Har ikke foreldreansvar ved andre forelders død",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_IKKE_TILDELT",navn:"Ikke tildelt foreldreansvar etter barneloven",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_IKKE_MINDRE_SAMVAER",navn:"Ikke hatt mindre samvær enn barneloven §43",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_FORELDREANSVAR_BARN_OVER_15",navn:"Barn er over 15 år",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_FAR_IKKE_OMSORG",navn:"Far har ikke omsorg for barnet",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_STONADEN_ALLEREDE_UTBETALT",navn:"Stønaden allerede utbetalt til mor",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_FAR_IKKE_ALENE",navn:"Far overtar ikke foreldreansvar alene",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_FAR_IKKE_INNEN_STONADSPERIODE",navn:"Far overtar ikke innen stønadsperioden",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_BRUKER_RETT_FORELDREPENGER",navn:"Bruker har likevel rett på foreldrepenger",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ES_STONAD_FLERE_GANGER",navn:"Stønad er gitt for samme barn flere ganger",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"UTVANDRET",navn:"Utvandret",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"IKKE_LOVLIG_OPPHOLD",navn:"Ikke lovlig opphold",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"MEDLEM_I_ANNET_LAND",navn:"Unntak medlemskap/medlem annet land",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"IKKE_OPPHOLDSRETT_EØS",navn:"Ikke oppholdsrett EØS",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"IKKE_BOSATT",navn:"Ikke bosatt",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"OKONOMI_DOBBELUTBETALING",navn:"Dobbeltutbetaling",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"OKONOMI_UTBETALT",navn:"Utbetalt for mye",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"OKONOMI_FEIL_TREKK",navn:"Feil trekk",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"OKONOMI_FEIL_FERIEPENGER",navn:"Feil feriepengeutbetaling",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ØKONOMI_UTBETALT_FOR_MYE",navn:"Feil i økonomi - utbetalt for mye",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"REFUSJON_ARBGIVER",navn:"Refusjon til arbeidsgiver",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"ANNET_FRITEKST",navn:"Annet - fritekst",kodeverk:"HENDELSE_UNDERTYPE"},{kode:"FEIL_FERIEPENGER_4G",navn:"Feil i feriepenger - under 4 G",kodeverk:"HENDELSE_UNDERTYPE"}],VilkårResultat:[{kode:"FORSTO_BURDE_FORSTAATT",navn:"Ja, mottaker forsto eller burde forstått at utbetalingen skyldtes en feil (1. ledd, 1. punkt)",kodeverk:"VILKAAR_RESULTAT"},{kode:"MANGELFULL_OPPLYSNING",navn:"Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt mangelfulle opplysninger (1. ledd, 2 punkt)",kodeverk:"VILKAAR_RESULTAT"},{kode:"FEIL_OPPLYSNINGER",navn:"Ja, mottaker har forårsaket feilutbetalingen ved forsett eller uaktsomt gitt feilaktige opplysninger (1. ledd, 2 punkt)",kodeverk:"VILKAAR_RESULTAT"},{kode:"GOD_TRO",navn:"Nei, mottaker har mottatt beløpet i god tro (1. ledd)",kodeverk:"VILKAAR_RESULTAT"}],Venteårsak:[{kode:"VENT_PÅ_BRUKERTILBAKEMELDING",navn:"Venter på tilbakemelding fra bruker",kodeverk:"VENT_AARSAK"},{kode:"VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",navn:"Venter på tilbakekrevingsgrunnlag fra økonomi",kodeverk:"VENT_AARSAK"},{kode:"AVV_DOK",navn:"Avventer dokumentasjon",kodeverk:"VENT_AARSAK"},{kode:"UTV_TIL_FRIST",navn:"Utvidet tilsvarsfrist",kodeverk:"VENT_AARSAK"},{kode:"ENDRE_TILKJENT_YTELSE",navn:"Mulig endring i tilkjent ytelse",kodeverk:"VENT_AARSAK"},{kode:"VENT_PÅ_MULIG_MOTREGNING",navn:"Mulig motregning med annen ytelse",kodeverk:"VENT_AARSAK"}],ForeldelseVurderingType:[{kode:"IKKE_VURDERT",navn:"Perioden er ikke vurdert",kodeverk:"FORELDELSE_VURDERING"},{kode:"FORELDET",navn:"Perioden er foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:"IKKE_FORELDET",navn:"Perioden er ikke foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:"TILLEGGSFRIST",navn:"Perioden er ikke foreldet, regel om tilleggsfrist (10 år) benyttes",kodeverk:"FORELDELSE_VURDERING"}],AnnenVurdering:[{kode:"GOD_TRO",navn:"Handlet i god tro",kodeverk:"VURDERING"},{kode:"FORELDET",navn:"Foreldet",kodeverk:"VURDERING"}],Aktsomhet:[{kode:"FORSETT",navn:"Forsett",kodeverk:"AKTSOMHET"},{kode:"GROVT_UAKTSOM",navn:"Grov uaktsomhet",kodeverk:"AKTSOMHET"},{kode:"SIMPEL_UAKTSOM",navn:"Simpel uaktsomhet",kodeverk:"AKTSOMHET"}],BehandlingResultatType:[{kode:"IKKE_FASTSATT",navn:"Ikke fastsatt",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"FASTSATT",navn:"Resultatet er fastsatt",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"HENLAGT_FEILOPPRETTET",navn:"Henlagt, søknaden er feilopprettet",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"HENLAGT_FEILOPPRETTET_MED_BREV",navn:"Feilaktig opprettet - med henleggelsesbrev",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"HENLAGT_FEILOPPRETTET_UTEN_BREV",navn:"Feilaktig opprettet - uten henleggelsesbrev",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"HENLAGT_KRAVGRUNNLAG_NULLSTILT",navn:"Kravgrunnlaget er nullstilt",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"HENLAGT_TEKNISK_VEDLIKEHOLD",navn:"Teknisk vedlikehold",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"HENLAGT",navn:"Henlagt",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"INGEN_TILBAKEBETALING",navn:"Ingen tilbakebetaling",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"DELVIS_TILBAKEBETALING",navn:"Delvis tilbakebetaling",kodeverk:"BEHANDLING_RESULTAT_TYPE"},{kode:"FULL_TILBAKEBETALING",navn:"Tilbakebetaling",kodeverk:"BEHANDLING_RESULTAT_TYPE"}],VurderÅrsak:[{kode:"FEIL_FAKTA",navn:"Fakta",kodeverk:"VURDER_AARSAK"},{kode:"FEIL_LOV",navn:"Regel-/lovanvendelse",kodeverk:"VURDER_AARSAK"},{kode:"SKJØNN",navn:"Skjønn",kodeverk:"VURDER_AARSAK"},{kode:"UTREDNING",navn:"Utredning",kodeverk:"VURDER_AARSAK"},{kode:"SAKSFLYT",navn:"Saksflyt",kodeverk:"VURDER_AARSAK"},{kode:"BEGRUNNELSE",navn:"Begrunnelse",kodeverk:"VURDER_AARSAK"},{kode:"ANNET",navn:"Annet",kodeverk:"VURDER_AARSAK"},{kode:"FEIL_REGEL",navn:"Feil regelforståelse",kodeverk:"VURDER_AARSAK"}],BehandlingÅrsakType:[{kode:"RE_KLAGE_NFP",navn:"Revurdering NFP omgjør vedtak basert på klage",kodeverk:"BEHANDLING_AARSAK"},{kode:"RE_KLAGE_KA",navn:"Revurdering etter KA-behandlet klage",kodeverk:"BEHANDLING_AARSAK"},{kode:"RE_VILKÅR",navn:"Nye opplysninger om vilkårsvurdering",kodeverk:"BEHANDLING_AARSAK"},{kode:"RE_FORELDELSE",navn:"Nye opplysninger om foreldelse",kodeverk:"BEHANDLING_AARSAK"},{kode:"RE_FEILUTBETALT_BELØP_REDUSERT",navn:"Feilutbetalt beløp helt eller delvis bortfalt",kodeverk:"BEHANDLING_AARSAK"},{kode:"FATTET_AV_ANNEN_INSTANS",navn:"Vedtak fattet av annen instans",kodeverk:"BEHANDLING_AARSAK"}],VergeType:[{kode:"BARN",navn:"Verge for barn under 18 år",kodeverk:"VERGE_TYPE"},{kode:"FBARN",navn:"Verge for foreldreløst barn under 18 år",kodeverk:"VERGE_TYPE"},{kode:"VOKSEN",navn:"Verge for voksen",kodeverk:"VERGE_TYPE"},{kode:"ADVOKAT",navn:"Advokat/advokatfullmektig",kodeverk:"VERGE_TYPE"},{kode:"ANNEN_F",navn:"Annen fullmektig",kodeverk:"VERGE_TYPE"}],VedtakResultatType:[{kode:"FULL_TILBAKEBETALING",navn:"Tilbakebetaling",kodeverk:"VEDTAK_RESULTAT_TYPE"},{kode:"DELVIS_TILBAKEBETALING",navn:"Delvis tilbakebetaling",kodeverk:"VEDTAK_RESULTAT_TYPE"},{kode:"INGEN_TILBAKEBETALING",navn:"Ingen tilbakebetaling",kodeverk:"VEDTAK_RESULTAT_TYPE"}],BehandlingType:[{kode:"BT-007",navn:"Tilbakekreving",kodeverk:"BEHANDLING_TYPE"},{kode:"BT-009",navn:"Tilbakekreving revurdering",kodeverk:"BEHANDLING_TYPE"}],HistorikkAktør:[{kode:"BESL",navn:"Beslutter",kodeverk:"HISTORIKK_AKTOER"},{kode:"SBH",navn:"Saksbehandler",kodeverk:"HISTORIKK_AKTOER"},{kode:"SOKER",navn:"Søker",kodeverk:"HISTORIKK_AKTOER"},{kode:"ARBEIDSGIVER",navn:"Arbeidsgiver",kodeverk:"HISTORIKK_AKTOER"},{kode:"VL",navn:"Vedtaksløsningen",kodeverk:"HISTORIKK_AKTOER"}],SærligGrunn:[{kode:"GRAD_UAKTSOMHET",navn:"Graden av uaktsomhet hos den kravet retter seg mot",kodeverk:"SAERLIG_GRUNN"},{kode:"HELT_ELLER_DELVIS_NAVS_FEIL",navn:"Om feilen helt eller delvis kan tilskrives Nav",kodeverk:"SAERLIG_GRUNN"},{kode:"STOERRELSE_BELOEP",navn:"Størrelsen på feilutbetalt beløp",kodeverk:"SAERLIG_GRUNN"},{kode:"TID_FRA_UTBETALING",navn:"Hvor lang tid siden utbetalingen fant sted",kodeverk:"SAERLIG_GRUNN"},{kode:"ANNET",navn:"Annet",kodeverk:"SAERLIG_GRUNN"}],VidereBehandling:[{kode:"TILBAKEKR_OPPRETT",navn:"Feilutbetaling med tilbakekreving",kodeverk:"TILBAKEKR_VIDERE_BEH"},{kode:"TILBAKEKR_IGNORER",navn:"Feilutbetaling, avvent samordning",kodeverk:"TILBAKEKR_VIDERE_BEH"},{kode:"TILBAKEKR_INNTREKK",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet",kodeverk:"TILBAKEKR_VIDERE_BEH"},{kode:"TILBAKEKR_OPPDATER",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp.",kodeverk:"TILBAKEKR_VIDERE_BEH"}],Fagsystem:[{kode:"FPSAK",navn:null,kodeverk:"FAGSYSTEM"},{kode:"K9",navn:null,kodeverk:"FAGSYSTEM"},{kode:"TPS",navn:null,kodeverk:"FAGSYSTEM"},{kode:"JOARK",navn:null,kodeverk:"FAGSYSTEM"},{kode:"INFOTRYGD",navn:null,kodeverk:"FAGSYSTEM"},{kode:"ARENA",navn:null,kodeverk:"FAGSYSTEM"},{kode:"INNTEKT",navn:null,kodeverk:"FAGSYSTEM"},{kode:"MEDL",navn:null,kodeverk:"FAGSYSTEM"},{kode:"GOSYS",navn:null,kodeverk:"FAGSYSTEM"},{kode:"ENHETSREGISTERET",navn:null,kodeverk:"FAGSYSTEM"},{kode:"AAREGISTERET",navn:null,kodeverk:"FAGSYSTEM"},{kode:"FPTILBAKE",navn:null,kodeverk:"FAGSYSTEM"},{kode:"K9TILBAKE",navn:null,kodeverk:"FAGSYSTEM"}]};function Lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rr={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr;function co(){if(tr)return Fe;tr=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var o=null;if(l!==void 0&&(o=""+l),a.key!==void 0&&(o=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:o,ref:a!==void 0?a:null,props:l}}return Fe.Fragment=r,Fe.jsx=t,Fe.jsxs=t,Fe}var ar;function Do(){return ar||(ar=1,rr.exports=co()),rr.exports}var or=Do();const Me={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Le(Me);var lr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var sr;function Oo(){return sr||(sr=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var o="";for(var s in l)r.call(l,s)&&l[s]&&(o=a(o,this&&this[s]||s));return o}function a(l,o){return o?l?l+" "+o:l+o:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(lr)),lr.exports}var Io=Oo();const Fn=Lo(Io),bo="_borderbox_1vkvn_1",Fo="_error_1vkvn_5",Po="_warning_1vkvn_8",Vo={borderbox:bo,error:Fo,warning:Po};Fn.bind(Vo);const ho="_aksjonspunkt_kn1hn_1",Go="_erAksjonspunktApent_kn1hn_4",Mo="_erIkkeGodkjentAvBeslutter_kn1hn_8",jo={aksjonspunkt:ho,erAksjonspunktApent:Go,erIkkeGodkjentAvBeslutter:Mo};Fn.bind(jo);const ir=({dateTimeString:e,...r})=>or.jsx(or.Fragment,{children:Ur(e,r)});Le(Me);Le(Me);const Uo="_divider_1t980_1",Bo="_dividerParagraf_1t980_8",Ho="_leftPanel_1t980_11",wo="_rightPanel_1t980_14",Yo={divider:Uo,dividerParagraf:Bo,leftPanel:Ho,rightPanel:wo};Fn.bind(Yo);Le(Me);Le(Me);const qo="_starImage_dn2dq_1",xo="_chevronImage_dn2dq_6",Co="_pushRightCorner_dn2dq_15",Jo="_line_dn2dq_19",$o="_arsakPadding_dn2dq_24",Wo="_inline_dn2dq_30",zo="_firstColumnWidth_dn2dq_33",ee={starImage:qo,chevronImage:xo,pushRightCorner:Co,line:Jo,arsakPadding:$o,inline:Wo,firstColumnWidth:zo},Xo=[gn.RE_KLAGE_KA,gn.RE_KLAGE_NFP],Zo=e=>!!e&&Xo.some(r=>r===e),xe=({withChevronDown:e=!1,withChevronUp:r=!1,behandling:t,alleKodeverk:n,alleKodeverkTilbakekreving:a})=>{const l=kr(),o=t.type===ie.TILBAKEKREVING||t.type===ie.TILBAKEKREVING_REVURDERING,s=o?a.BehandlingType:n.BehandlingType,d=o?a.BehandlingResultatType:n.BehandlingResultatType;return _.jsx(bn,{borderWidth:"2",borderColor:"border-divider",borderRadius:"large",padding:"3",children:_.jsxs(vn,{gap:"1",children:[_.jsxs(be,{gap:"4",children:[_.jsx("div",{className:ee.arsakPadding,children:_.jsx(gr,{size:"small",children:s.find(i=>i.kode===t.type)?.navn??""})}),(t.type===ie.REVURDERING||t.type===ie.KLAGE)&&t.førsteÅrsak?.behandlingArsakType&&_.jsxs(_.Fragment,{children:["-",_.jsx(Q,{size:"small",children:n.BehandlingÅrsakType.find(i=>i.kode===t.førsteÅrsak?.behandlingArsakType)?.navn??""})]}),t.type===ie.TILBAKEKREVING_REVURDERING&&Zo(t.førsteÅrsak?.behandlingArsakType)&&_.jsxs(_.Fragment,{children:["-",_.jsx(Q,{size:"small",children:_.jsx(ve,{id:"Behandlingspunkt.Årsak.Klage"})})]}),_.jsx(So,{}),t.gjeldendeVedtak&&_.jsx(st,{className:ee.starImage,title:l.formatMessage({id:"BehandlingPickerItemContent.GjeldendeVedtak"})}),e&&_.jsx(tt,{title:l.formatMessage({id:"BehandlingPickerItemContent.Open"}),className:ee.chevronImage}),r&&_.jsx(ot,{title:l.formatMessage({id:"BehandlingPickerItemContent.Close"}),className:ee.chevronImage})]}),_.jsx("div",{children:_.jsx("hr",{className:ee.line})}),_.jsxs(vn,{gap:"1",children:[_.jsxs(be,{gap:"1",children:[_.jsx("div",{className:ee.firstColumnWidth,children:_.jsx(Q,{size:"small",children:_.jsx(ve,{id:"BehandlingPickerItemContent.Behandlingstatus"})})}),_.jsx("div",{children:_.jsx(Q,{size:"small",children:n.BehandlingStatus.find(i=>i.kode===t.status)?.navn??""})})]}),_.jsxs(vn,{gap:"4",children:[_.jsxs(be,{gap:"1",children:[_.jsx("div",{className:ee.firstColumnWidth,children:_.jsx(Q,{size:"small",children:_.jsx(ve,{id:"BehandlingPickerItemContent.Resultat"})})}),_.jsx("div",{children:_.jsx(Q,{size:"small",children:d.find(i=>i.kode===t.behandlingsresultat?.type)?.navn??"-"})})]}),_.jsxs(be,{gap:"1",children:[_.jsx("div",{className:ee.firstColumnWidth,children:_.jsx(Q,{size:"small",children:_.jsx(ve,{id:"BehandlingPickerItemContent.Opprettet"})})}),_.jsx("div",{children:_.jsx(Q,{size:"small",children:_.jsx(ir,{dateTimeString:t.opprettet,separator:"kl"})})})]})]}),_.jsxs(be,{gap:"1",children:[_.jsx("div",{className:ee.firstColumnWidth,children:_.jsx(Q,{size:"small",children:_.jsx(ve,{id:"BehandlingPickerItemContent.Avsluttet"})})}),_.jsx("div",{children:t.avsluttet&&_.jsx(Q,{size:"small",children:_.jsx(ir,{dateTimeString:t.avsluttet,separator:"kl"})})}),_.jsxs("div",{className:ee.pushRightCorner,children:[_.jsx(Q,{size:"small",className:ee.inline,children:_.jsx(ve,{id:"BehandlingPickerItemContent.Enhet"})}),_.jsx(fo,{content:t.behandlendeEnhetNavn,placement:"left",children:_.jsx(Q,{size:"small",className:ee.inline,children:t.behandlendeEnhetId})})]})]})]})]})})};xe.__docgenInfo={description:`BehandlingInformasjon

Håndterer formatering av innholdet i den enkelte behandling i behandlingsvelgeren.`,methods:[],displayName:"BehandlingInformasjon",props:{withChevronDown:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},withChevronUp:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleKodeverkTilbakekreving:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  BehandlingResultatType: BehandlingResultatTypeTilbakekreving;
  HistorikkAktør: HistorikkAktor;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteArsakType;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
}`,signature:{properties:[{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatTypeTilbakekreving",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeTypeTilbakekreving",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}},description:""}}};const Qo="_linkToBehandling_1347f_1",el="_toggleShowAllButton_1347f_2",dr={linkToBehandling:Qo,toggleShowAllButton:el},Or=({behandling:e,erKunEnBehandling:r,erAktiv:t,skalViseAlleBehandlinger:n,toggleVisAlleBehandlinger:a,renderRadSomLenke:l,alleKodeverk:o,alleKodeverkTilbakekreving:s})=>r&&t?_.jsx(xe,{behandling:e,withChevronDown:!1,withChevronUp:!1,alleKodeverk:o,alleKodeverkTilbakekreving:s}):r||n?l(dr.linkToBehandling,_.jsx(xe,{behandling:e,withChevronDown:!1,withChevronUp:n&&t,alleKodeverk:o,alleKodeverkTilbakekreving:s}),e.uuid):t?_.jsx("button",{type:"button",className:dr.toggleShowAllButton,onClick:a,children:_.jsx(xe,{behandling:e,withChevronDown:!n,withChevronUp:n,alleKodeverk:o,alleKodeverkTilbakekreving:s})}):null;Or.__docgenInfo={description:"",methods:[],displayName:"BehandlingListeRad",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},erKunEnBehandling:{required:!0,tsType:{name:"boolean"},description:""},erAktiv:{required:!0,tsType:{name:"boolean"},description:""},skalViseAlleBehandlinger:{required:!0,tsType:{name:"boolean"},description:""},toggleVisAlleBehandlinger:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderRadSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"className"},{type:{name:"ReactElement"},name:"behandlingInfoKomponent"},{type:{name:"string"},name:"uuid"}],return:{name:"ReactElement"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleKodeverkTilbakekreving:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  BehandlingResultatType: BehandlingResultatTypeTilbakekreving;
  HistorikkAktør: HistorikkAktor;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteArsakType;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
}`,signature:{properties:[{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatTypeTilbakekreving",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeTypeTilbakekreving",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}},description:""}}};const nl="_behandlingList_12m8o_1",rl={behandlingList:nl},tl=e=>[...e].sort((r,t)=>r.avsluttet&&!t.avsluttet?1:!r.avsluttet&&t.avsluttet?-1:r.avsluttet&&t.avsluttet?je(t.avsluttet).diff(je(r.avsluttet)):je(t.opprettet).diff(je(r.opprettet))),Ir=({behandlinger:e,renderRadSomLenke:r,behandlingUuid:t,skalViseAlleBehandlinger:n,toggleVisAlleBehandlinger:a,alleKodeverk:l,alleKodeverkTilbakekreving:o})=>{const s=tl(e).filter(d=>n||d.uuid===t);return _.jsxs("ul",{className:rl.behandlingList,children:[e.length===0&&_.jsx(bn,{borderWidth:"2",borderColor:"border-divider",borderRadius:"large",padding:"3",children:_.jsx(gr,{size:"small",children:_.jsx(ve,{id:"BehandlingList.ZeroBehandlinger"})})}),e.length>0&&s.map(d=>_.jsx("li",{"data-testid":`behandling-${d.uuid}`,children:_.jsx(Or,{erKunEnBehandling:e.length===1,behandling:d,renderRadSomLenke:r,erAktiv:d.uuid===t,skalViseAlleBehandlinger:n,toggleVisAlleBehandlinger:a,alleKodeverk:l,alleKodeverkTilbakekreving:o})},d.uuid))]})};Ir.__docgenInfo={description:`BehandlingerListe

Viser behandlinger knyttet til fagsak,`,methods:[],displayName:"BehandlingerListe",props:{behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},renderRadSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"className"},{type:{name:"ReactElement"},name:"behandlingInfoKomponent"},{type:{name:"string"},name:"uuid"}],return:{name:"ReactElement"}}},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},skalViseAlleBehandlinger:{required:!0,tsType:{name:"boolean"},description:""},toggleVisAlleBehandlinger:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleKodeverkTilbakekreving:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  BehandlingResultatType: BehandlingResultatTypeTilbakekreving;
  HistorikkAktør: HistorikkAktor;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteArsakType;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
}`,signature:{properties:[{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatTypeTilbakekreving",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeTypeTilbakekreving",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}},description:""}}};const al={"BehandlingPickerItemContent.Opprettet":"Opprettet","BehandlingPickerItemContent.Avsluttet":"Avsluttet","BehandlingPickerItemContent.Behandlingsstatus":"Behandlingsstatus","BehandlingPickerItemContent.Open":"Åpne behandlingsliste","BehandlingPickerItemContent.Close":"Lukk behandlingsliste","BehandlingPickerItemContent.GjeldendeVedtak":"Gjeldende vedtak","BehandlingPickerItemContent.Arsak":"Årsak","BehandlingPickerItemContent.Behandlingstatus":"Behandlingsstatus","BehandlingPickerItemContent.Resultat":"Resultat","BehandlingPickerItemContent.Enhet":"Enhet ","BehandlingList.ZeroBehandlinger":"Ingen behandlinger er opprettet","Behandlingspunkt.Årsak.Klage":"Klage","DateTimeLabel.Kl":"Kl."},ol=Le(al),pn=e=>_.jsx(Br,{value:ol,children:_.jsx(Ir,{...e})});pn.__docgenInfo={description:"",methods:[],displayName:"BehandlingVelgerSakIndex",props:{behandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},skalViseAlleBehandlinger:{required:!0,tsType:{name:"boolean"},description:""},toggleVisAlleBehandlinger:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderRadSomLenke:{required:!0,tsType:{name:"signature",type:"function",raw:"(className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement",signature:{arguments:[{type:{name:"string"},name:"className"},{type:{name:"ReactElement"},name:"behandlingInfoKomponent"},{type:{name:"string"},name:"uuid"}],return:{name:"ReactElement"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},alleKodeverkTilbakekreving:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  BehandlingResultatType: BehandlingResultatTypeTilbakekreving;
  HistorikkAktør: HistorikkAktor;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteArsakType;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
}`,signature:{properties:[{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatTypeTilbakekreving",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeTypeTilbakekreving",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavnTilbakekreving<
  K extends TilbakekrevingKodeverkType ? K : unknown
>[]`}}]}},description:""}}};const{action:ll}=__STORYBOOK_MODULE_ACTIONS__,kl={title:"sak/sak-behandling-velger",component:pn,args:{behandlingUuid:"1",skalViseAlleBehandlinger:!1,toggleVisAlleBehandlinger:ll("button-click"),renderRadSomLenke:()=>_.jsx("div",{children:"dummy"}),alleKodeverk:Yr,alleKodeverkTilbakekreving:Ko},render:e=>{const[r,t]=u.useState(e),n=()=>{r.toggleVisAlleBehandlinger?.(),t(a=>({...a,skalViseAlleBehandlinger:!a.skalViseAlleBehandlinger}))};return _.jsx("div",{style:{width:"600px"},children:_.jsx(pn,{...r,toggleVisAlleBehandlinger:n,renderRadSomLenke:(a,l)=>_.jsx("button",{type:"button",className:a,onClick:n,children:l})})})}},we={args:{behandlinger:[{versjon:2,uuid:"1",type:ie.FORSTEGANGSSOKNAD,status:Ue.AVSLUTTET,språkkode:"NB",erAktivPapirsoknad:!1,opprettet:"2017-08-02T02:04:25.455",avsluttet:"2017-08-03T02:04:25.455",behandlendeEnhetId:"4812",behandlendeEnhetNavn:"Nav familie- og pensjonsytelser Bergen",gjeldendeVedtak:!0,behandlingPåVent:!1,behandlingHenlagt:!1,behandlingKøet:!1,toTrinnsBehandling:!1,behandlingsresultat:{type:"AVSLÅTT"}},{versjon:2,uuid:"2",type:ie.DOKUMENTINNSYN,status:Ue.OPPRETTET,språkkode:"NB",erAktivPapirsoknad:!1,opprettet:"2017-08-01T02:04:25.455",avsluttet:"2017-08-01T02:04:25.455",behandlendeEnhetId:"4812",behandlendeEnhetNavn:"Nav familie- og pensjonsytelser Bergen",gjeldendeVedtak:!1,behandlingPåVent:!1,behandlingHenlagt:!1,behandlingKøet:!1,toTrinnsBehandling:!1,behandlingsresultat:{type:"INNVILGET"}},{versjon:2,uuid:"3",type:ie.REVURDERING,status:Ue.OPPRETTET,språkkode:"NB",erAktivPapirsoknad:!1,opprettet:"2017-10-02T02:04:25.455",behandlendeEnhetId:"4812",behandlendeEnhetNavn:"Nav familie- og pensjonsytelser Bergen",gjeldendeVedtak:!1,behandlingPåVent:!1,behandlingHenlagt:!1,behandlingKøet:!1,toTrinnsBehandling:!1},{versjon:2,uuid:"4",type:ie.FORSTEGANGSSOKNAD,status:Ue.AVSLUTTET,språkkode:"NB",erAktivPapirsoknad:!1,opprettet:"2017-07-12T02:04:25.455",avsluttet:"2017-07-13T02:04:25.455",behandlendeEnhetId:"4812",behandlendeEnhetNavn:"Nav familie- og pensjonsytelser Bergen",gjeldendeVedtak:!1,behandlingPåVent:!1,behandlingHenlagt:!1,behandlingKøet:!1,toTrinnsBehandling:!1,behandlingsresultat:{type:"HENLAGT_SØKNAD_TRUKKET"}}]}},Ye={args:{behandlinger:[]}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  args: {
    behandlinger: [{
      versjon: 2,
      uuid: '1',
      type: BehandlingType.FORSTEGANGSSOKNAD,
      status: BehandlingStatus.AVSLUTTET,
      språkkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-08-02T02:04:25.455',
      avsluttet: '2017-08-03T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
      gjeldendeVedtak: true,
      behandlingPåVent: false,
      behandlingHenlagt: false,
      behandlingKøet: false,
      toTrinnsBehandling: false,
      behandlingsresultat: {
        type: 'AVSLÅTT'
      } as Behandlingsresultat
    }, {
      versjon: 2,
      uuid: '2',
      type: BehandlingType.DOKUMENTINNSYN,
      status: BehandlingStatus.OPPRETTET,
      språkkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-08-01T02:04:25.455',
      avsluttet: '2017-08-01T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
      gjeldendeVedtak: false,
      behandlingPåVent: false,
      behandlingHenlagt: false,
      behandlingKøet: false,
      toTrinnsBehandling: false,
      behandlingsresultat: {
        type: 'INNVILGET'
      } as Behandlingsresultat
    }, {
      versjon: 2,
      uuid: '3',
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.OPPRETTET,
      språkkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-10-02T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
      gjeldendeVedtak: false,
      behandlingPåVent: false,
      behandlingHenlagt: false,
      behandlingKøet: false,
      toTrinnsBehandling: false
    }, {
      versjon: 2,
      uuid: '4',
      type: BehandlingType.FORSTEGANGSSOKNAD,
      status: BehandlingStatus.AVSLUTTET,
      språkkode: 'NB',
      erAktivPapirsoknad: false,
      opprettet: '2017-07-12T02:04:25.455',
      avsluttet: '2017-07-13T02:04:25.455',
      behandlendeEnhetId: '4812',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser Bergen',
      gjeldendeVedtak: false,
      behandlingPåVent: false,
      behandlingHenlagt: false,
      behandlingKøet: false,
      toTrinnsBehandling: false,
      behandlingsresultat: {
        type: 'HENLAGT_SØKNAD_TRUKKET'
      } as Behandlingsresultat
    }] as BehandlingAppKontekst[]
  }
}`,...we.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`{
  args: {
    behandlinger: []
  }
}`,...Ye.parameters?.docs?.source}}};const El=["Default","IngenBehandlinger"];export{we as Default,Ye as IngenBehandlinger,El as __namedExportsOrder,kl as default};
