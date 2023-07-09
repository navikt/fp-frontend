import{h as E,r as S,E as e,V as _}from"./index.es-24d105fb.js";const R={KODEVERK_LOS:new E("KODEVERK_LOS")},A={AVDELINGER:new E("AVDELINGER"),OPPHEV_OPPGAVERESERVASJON:new E("OPPHEV_OPPGAVERESERVASJON"),FLYTT_RESERVASJON:new E("FLYTT_RESERVASJON"),BEHANDLINGSKO_OPPGAVE_ANTALL:new E("BEHANDLINGSKO_OPPGAVE_ANTALL"),SAKSLISTER_FOR_AVDELING:new E("SAKSLISTER_FOR_AVDELING"),SAKSBEHANDLERE_FOR_AVDELING:new E("SAKSBEHANDLERE_FOR_AVDELING"),OPPGAVE_AVDELING_ANTALL:new E("OPPGAVE_AVDELING_ANTALL"),OPPGAVE_ANTALL:new E("OPPGAVE_ANTALL"),SAKSBEHANDLER_SOK:new E("SAKSBEHANDLER_SOK"),FLYTT_RESERVASJON_SAKSBEHANDLER_SOK:new E("FLYTT_RESERVASJON_SAKSBEHANDLER_SOK"),ENDRE_OPPGAVERESERVASJON:new E("ENDRE_OPPGAVERESERVASJON"),OPPRETT_NY_SAKSBEHANDLER:new E("OPPRETT_NY_SAKSBEHANDLER"),SLETT_SAKSBEHANDLER:new E("SLETT_SAKSBEHANDLER"),HENT_OPPGAVER_FOR_AVDELING:new E("HENT_OPPGAVER_FOR_AVDELING"),HENT_OPPGAVER_PER_DATO:new E("HENT_OPPGAVER_PER_DATO"),HENT_OPPGAVER_PER_FORSTE_STONADSDAG:new E("HENT_OPPGAVER_PER_FORSTE_STONADSDAG"),HENT_OPPGAVER_MANUELT_PA_VENT:new E("HENT_OPPGAVER_MANUELT_PA_VENT"),HENT_OPPGAVER_APNE_ELLER_PA_VENT:new E("HENT_OPPGAVER_APNE_ELLER_PA_VENT"),RESERVASJONER_FOR_AVDELING:new E("RESERVASJONER_FOR_AVDELING"),AVDELINGSLEDER_OPPHEVER_RESERVASJON:new E("AVDELINGSLEDER_OPPHEVER_RESERVASJON"),OPPRETT_NY_SAKSLISTE:new E("OPPRETT_NY_SAKSLISTE"),SLETT_SAKSLISTE:new E("SLETT_SAKSLISTE"),LAGRE_SAKSLISTE_NAVN:new E("LAGRE_SAKSLISTE_NAVN"),LAGRE_SAKSLISTE_BEHANDLINGSTYPE:new E("LAGRE_SAKSLISTE_BEHANDLINGSTYPE"),LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE:new E("LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE"),LAGRE_SAKSLISTE_SORTERING:new E("LAGRE_SAKSLISTE_SORTERING"),LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE:new E("LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE"),LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO:new E("LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO"),LAGRE_SAKSLISTE_SORTERING_INTERVALL:new E("LAGRE_SAKSLISTE_SORTERING_INTERVALL"),LAGRE_SAKSLISTE_ANDRE_KRITERIER:new E("LAGRE_SAKSLISTE_ANDRE_KRITERIER"),LAGRE_SAKSLISTE_SAKSBEHANDLER:new E("LAGRE_SAKSLISTE_SAKSBEHANDLER")},s=new S().withGet("/fplos/api/kodeverk",R.KODEVERK_LOS).withGet("/fplos/api/avdelingsleder/avdelinger",A.AVDELINGER).withGet("/fplos/api/avdelingsleder/sakslister",A.SAKSLISTER_FOR_AVDELING).withGet("/fplos/api/avdelingsleder/saksbehandlere",A.SAKSBEHANDLERE_FOR_AVDELING).withGet("/fplos/api/avdelingsleder/oppgaver/avdelingantall",A.OPPGAVE_AVDELING_ANTALL).withGet("/fplos/api/avdelingsleder/oppgaver/antall",A.OPPGAVE_ANTALL).withPost("/fplos/api/avdelingsleder/sakslister",A.OPPRETT_NY_SAKSLISTE).withPost("/fplos/api/avdelingsleder/sakslister/slett",A.SLETT_SAKSLISTE).withPost("/fplos/api/avdelingsleder/sakslister/navn",A.LAGRE_SAKSLISTE_NAVN).withPost("/fplos/api/avdelingsleder/sakslister/behandlingstype",A.LAGRE_SAKSLISTE_BEHANDLINGSTYPE).withPost("/fplos/api/avdelingsleder/sakslister/ytelsetyper",A.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE).withPost("/fplos/api/avdelingsleder/sakslister/sortering",A.LAGRE_SAKSLISTE_SORTERING).withPost("/fplos/api/avdelingsleder/sakslister/sortering-tidsintervall-type",A.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE).withPost("/fplos/api/avdelingsleder/sakslister/sortering-tidsintervall-dato",A.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO).withPost("/fplos/api/avdelingsleder/sakslister/sortering-numerisk-intervall",A.LAGRE_SAKSLISTE_SORTERING_INTERVALL).withPost("/fplos/api/avdelingsleder/sakslister/andre-kriterier",A.LAGRE_SAKSLISTE_ANDRE_KRITERIER).withPost("/fplos/api/avdelingsleder/sakslister/saksbehandler",A.LAGRE_SAKSLISTE_SAKSBEHANDLER).withPost("/fplos/api/avdelingsleder/saksbehandlere/søk",A.SAKSBEHANDLER_SOK).withPost("/fplos/api/avdelingsleder/saksbehandlere",A.OPPRETT_NY_SAKSBEHANDLER).withPost("/fplos/api/avdelingsleder/saksbehandlere/slett",A.SLETT_SAKSBEHANDLER).withGet("/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid",A.HENT_OPPGAVER_FOR_AVDELING).withGet("/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid-historikk",A.HENT_OPPGAVER_PER_DATO).withGet("/fplos/api/avdelingsleder/nøkkeltall/behandlinger-manuelt-vent-historikk",A.HENT_OPPGAVER_MANUELT_PA_VENT).withGet("/fplos/api/avdelingsleder/nøkkeltall/behandlinger-første-stønadsdag",A.HENT_OPPGAVER_PER_FORSTE_STONADSDAG).withGet("/fplos/api/avdelingsleder/nøkkeltall/åpne-behandlinger",A.HENT_OPPGAVER_APNE_ELLER_PA_VENT).withGet("/fplos/api/avdelingsleder/reservasjoner",A.RESERVASJONER_FOR_AVDELING).withPost("/fplos/api/avdelingsleder/reservasjoner/opphev",A.AVDELINGSLEDER_OPPHEVER_RESERVASJON).withPost("/fplos/api/saksbehandler/oppgaver/flytt",A.FLYTT_RESERVASJON).withPost("/fplos/api/saksbehandler/oppgaver/flytt/søk",A.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK).withPost("/fplos/api/saksbehandler/oppgaver/reservasjon/endre",A.ENDRE_OPPGAVERESERVASJON).build(),L=e(s),l=_.initHooks(L);export{R,A as a,l as b,L as r};
//# sourceMappingURL=fplosRestApi-56e2d09a.js.map
