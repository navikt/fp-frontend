import{j as e}from"./iframe-D5kzLkTB.js";import{S as E}from"./SøkForm-DIiZKJTr.js";import{P as d}from"./PersonInfo-CHY66R2K.js";import{S as R}from"./SøkResultat-tNkudOKz.js";import{V as o}from"./VStack-DSYO9RIf.js";import{B as l}from"./nb_NO-DkEvKsFh.js";import{M as i}from"./Loader-B-ItYq5j.js";const p=(n,r)=>n.length>1||n.length===1&&r.filter(a=>a.saksnummer===n.at(0)?.saksnummer).length>1,k=({fagsaker:n,fagsakOppgaver:r,searchFagsakCallback:a,selectOppgaveCallback:s,searchResultReceived:t,åpneFagsak:u,searchStarted:m,searchResultAccessDenied:v,resetSearch:T,kanSaksbehandle:g})=>e.jsxs(o,{gap:"space-16",children:[e.jsx(E,{onSubmit:a,searchStarted:m,searchResultAccessDenied:v,resetSearch:T,kanSaksbehandle:g}),t&&n.length===0&&e.jsx(l,{children:e.jsx(i,{id:"FagsakSearch.ZeroSearchResults"})}),t&&p(n,r)&&e.jsxs(e.Fragment,{children:[e.jsx(d,{person:n[0].person}),e.jsx(l,{size:"small",children:e.jsx(i,{id:"FagsakSearch.FlereSakerEllerBehandlinger"})}),e.jsx(R,{åpneFagsak:u,selectOppgaveCallback:s,fagsaker:n,fagsakOppgaver:r})]})]});k.__docgenInfo={description:`FagsakSøk

Denne setter sammen de ulike komponentene i søkebildet.
Er søkeresultat mottatt vises enten trefflisten og relatert person, eller en tekst som viser ingen resultater.`,methods:[],displayName:"FagsakSøk",props:{fagsaker:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string;
  barnFødt: string;
  endret?: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  opprettet?: string;
  person: tjenester_fagsak_dto_PersonDto;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  saksnummer: string;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettet",value:{name:"string",required:!1}},{key:"person",value:{name:"signature",type:"object",raw:`{
  aktørId?: string;
  diskresjonskode?: string;
  dodsdato?: string;
  dødsdato?: string;
  fødselsdato: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}}]}}],raw:"FagsakEnkel[]"},description:""},fagsakOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}]}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"union",raw:`| 'UNDER_ARBEID'
| 'PÅ_VENT'
| 'FERDIG'
| 'TIL_BESLUTTER'
| 'RETURNERT_FRA_BESLUTTER'`,elements:[{name:"literal",value:"'UNDER_ARBEID'"},{name:"literal",value:"'PÅ_VENT'"},{name:"literal",value:"'FERDIG'"},{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`}],raw:"Oppgave[]"},description:""},searchFagsakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: SøkFormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  skalReservere: boolean;
  searchString: string;
}`,signature:{properties:[{key:"skalReservere",value:{name:"boolean",required:!0}},{key:"searchString",value:{name:"string",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},searchResultReceived:{required:!0,tsType:{name:"boolean"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},selectOppgaveCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}]}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"union",raw:`| 'UNDER_ARBEID'
| 'PÅ_VENT'
| 'FERDIG'
| 'TIL_BESLUTTER'
| 'RETURNERT_FRA_BESLUTTER'`,elements:[{name:"literal",value:"'UNDER_ARBEID'"},{name:"literal",value:"'PÅ_VENT'"},{name:"literal",value:"'FERDIG'"},{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},searchStarted:{required:!0,tsType:{name:"boolean"},description:""},searchResultAccessDenied:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  feilmelding?: string;
}`,signature:{properties:[{key:"feilmelding",value:{name:"string",required:!1}}]}},description:""},resetSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};export{k as F};
