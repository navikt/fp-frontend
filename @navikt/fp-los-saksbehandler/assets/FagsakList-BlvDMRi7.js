import{r as b,R as e}from"./index-DVXBtNgz.js";import{d as T}from"./dayjs.min-Dkhc0ShP.js";import{j as L,x as c,k as r,C as q,A as f}from"./nb_NO-B4G50tbZ.js";import{I as u,v as g}from"./index.es-BkMxg3KK.js";import{g as v}from"./kodeverkUtils-RGNAgZhp.js";import{u as h}from"./useLosKodeverk-B_YlLI5l.js";import{c as I,R as Y}from"./fplosSaksbehandlerRestApi-1LvtrRZK.js";import{S}from"./ChevronRight-Cu_AKvLq.js";const K="_table_o6uje_1",B={table:K},U=["FagsakList.Saksnummer","FagsakList.Stonadstype","FagsakList.Behandlingstype","FagsakList.Status","FagsakList.BarnFodt","EMPTY_1"],A=(i,s)=>()=>s(i),E=i=>(s,t)=>{t&&i(t)},_=(i=[])=>i.concat().sort((s,t)=>{if(s.status===g.AVSLUTTET&&t.status!==g.AVSLUTTET)return 1;if(s.status!==g.AVSLUTTET&&t.status===g.AVSLUTTET)return-1;const l=s.endret?s.endret:s.opprettet,d=t.endret?t.endret:t.opprettet;return T(l,f).diff(T(d,f))}),R=({fagsaker:i,fagsakOppgaver:s,åpneFagsak:t,selectOppgaveCallback:l})=>{const d=h(u.FAGSAK_STATUS),F=h(u.FAGSAK_YTELSE),o=I.useGlobalStateRestApiData(Y.KODEVERK_LOS),j=b.useMemo(()=>_(i),[i]);return e.createElement(L,{headerTextCodes:U,classNameTable:B.table},j.map(a=>{const k=d.find(n=>n.kode===a.status),p=F.find(n=>n.kode===a.fagsakYtelseType),y=s.filter(n=>n.saksnummer.toString()===a.saksnummer),m=y.map((n,w)=>e.createElement(c,{key:`oppgave${n.id}`,id:n.id,onMouseDown:A(n,l),onKeyDown:A(n,l),isDashedBottomBorder:y.length>w+1},e.createElement(r,null),e.createElement(r,null,v(o,u.FAGSAK_YTELSE,n.fagsakYtelseType)),e.createElement(r,null,v(o,u.BEHANDLING_TYPE,n.behandlingstype)),e.createElement(r,null,n.behandlingStatus?v(o,u.BEHANDLING_STATUS,n.behandlingStatus):""),e.createElement(r,null,a.barnFødt?e.createElement(q,{dateString:a.barnFødt}):null),e.createElement(r,null,e.createElement(S,null))));return e.createElement(b.Fragment,{key:`fagsak${a.saksnummer}`},e.createElement(c,{id:a.saksnummer,onMouseDown:E(t),onKeyDown:E(t),isDashedBottomBorder:m.length>0},e.createElement(r,null,a.saksnummer),e.createElement(r,null,p?p.navn:""),e.createElement(r,null),e.createElement(r,null,k?k.navn:""),e.createElement(r,null,a.barnFødt?e.createElement(q,{dateString:a.barnFødt}):null),e.createElement(r,null,e.createElement(S,null))),m.length>0&&m)}))},H=R;R.__docgenInfo={description:`FagsakList

Presentasjonskomponent. Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.`,methods:[],displayName:"FagsakList",props:{fagsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"barnFødt",value:{name:"string",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"person",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  kjønn: Kjønnkode;
  fødselsnummer: string;
  fødselsdato: string;
  dødsdato?: string;
  diskresjonskode?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  kjønn: Kjønnkode;
  fødselsnummer: string;
  fødselsdato: string;
  dødsdato?: string;
  diskresjonskode?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  status: string;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>`}],raw:"FagsakEnkel[]"},description:""},fagsakOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`}],raw:"Oppgave[]"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},selectOppgaveCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""}}};export{H as F};
