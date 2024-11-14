import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as S}from"./index-uubelm5h.js";import{d as y}from"./dayjs.min-BsYQKNhR.js";import{A as b}from"./index.es-CFhBXnTn.js";import{D as h}from"./index.es-CyZwGGZm.js";import{I as i,v as d}from"./index.es-BkMxg3KK.js";import{g as m}from"./kodeverkUtils-RGNAgZhp.js";import{u as c}from"./useLosKodeverk-B4Dg8QK6.js";import{c as R,R as A}from"./fplosSaksbehandlerRestApi-Boc9PVCn.js";import"./nb_NO-wYRVVd4K.js";import{T as n}from"./Table-DOY-4ux1.js";import{M as g}from"./Loader-Dh3casaz.js";import{S as T}from"./ChevronRight-BaeGl9EW.js";const x=(s,a)=>{if(s.status===d.AVSLUTTET&&a.status!==d.AVSLUTTET)return 1;if(s.status!==d.AVSLUTTET&&a.status===d.AVSLUTTET)return-1;const u=s.endret?s.endret:s.opprettet,l=a.endret?a.endret:a.opprettet;return y(u,b).diff(y(l,b))},w=({fagsaker:s,fagsakOppgaver:a,åpneFagsak:u,selectOppgaveCallback:l})=>{const q=c(i.FAGSAK_STATUS),f=c(i.FAGSAK_YTELSE),o=R.useGlobalStateRestApiData(A.KODEVERK_LOS),j=[...s].sort(x);return e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FagsakList.Saksnummer"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FagsakList.Behandlingstype"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FagsakList.Status"})}),e.jsx(n.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FagsakList.BarnFodt"})}),e.jsx(n.HeaderCell,{scope:"col"}),e.jsx(n.HeaderCell,{scope:"col"})]})}),e.jsx(n.Body,{children:j.map(t=>{const v=q.find(r=>r.kode===t.status),p=f.find(r=>r.kode===t.fagsakYtelseType),k=a.filter(r=>r.saksnummer.toString()===t.saksnummer).map(r=>e.jsxs(n.Row,{onMouseDown:()=>l(r),onKeyDown:()=>l(r),children:[e.jsx(n.DataCell,{}),e.jsx(n.DataCell,{children:m(o,i.FAGSAK_YTELSE,r.fagsakYtelseType)}),e.jsx(n.DataCell,{children:m(o,i.BEHANDLING_TYPE,r.behandlingstype)}),e.jsx(n.DataCell,{children:r.behandlingStatus?m(o,i.BEHANDLING_STATUS,r.behandlingStatus):""}),e.jsx(n.DataCell,{children:t.barnFødt?e.jsx(h,{dateString:t.barnFødt}):null}),e.jsx(n.DataCell,{children:e.jsx(T,{})})]},r.id));return e.jsxs(S.Fragment,{children:[e.jsxs(n.Row,{onMouseDown:()=>u(t.saksnummer),onKeyDown:()=>u(t.saksnummer),children:[e.jsx(n.DataCell,{children:t.saksnummer}),e.jsx(n.DataCell,{children:p?p.navn:""}),e.jsx(n.DataCell,{}),e.jsx(n.DataCell,{children:v?v.navn:""}),e.jsx(n.DataCell,{children:t.barnFødt?e.jsx(h,{dateString:t.barnFødt}):null}),e.jsx(n.DataCell,{children:e.jsx(T,{})})]}),k.length>0&&k]},t.saksnummer)})})]})};w.__docgenInfo={description:`FagsakList

Formaterer fagsak-søkeresultatet for visning i tabell. Sortering av fagsakene blir håndtert her.`,methods:[],displayName:"SøkResultat",props:{fagsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgave"}],return:{name:"void"}}},description:""}}};export{w as S};
