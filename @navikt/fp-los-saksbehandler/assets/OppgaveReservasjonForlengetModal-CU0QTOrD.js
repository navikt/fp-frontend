import{r as m,R as s,u as d,j as r,Y as T}from"./iframe-Cy3nThB4.js";import"./FlyttReservasjonModal-piA8JDAn.js";import{M as u}from"./Modal-BVFJjO1L.js";import{H as E,V as R}from"./VStack-gQjYxRm0.js";import{u as g,L as p,B as S}from"./nb_NO-B4nFNxw-.js";import{M as o}from"./Loader-D_eQWejC.js";import{B as _}from"./floating-ui.react-BuWkwZSV.js";var y=function(n,l){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&l.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)l.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a};const A=m.forwardRef((n,l)=>{var{title:a,titleId:e}=n,t=y(n,["title","titleId"]);let i=g();return i=a?e||"title-"+i:void 0,s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":i},t),a?s.createElement("title",{id:i},a):null,s.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))}),N="_image_xghy3_1",B="_padding_xghy3_8",v={image:N,padding:B},I=({oppgave:n,closeModal:l})=>{const a=d();return r.jsxs(u,{width:"small",open:!0,"aria-label":a.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"}),onClose:l,children:[r.jsx(u.Body,{children:r.jsxs(E,{gap:"space-20",align:"center",className:v.padding,children:[r.jsx(A,{className:v.image,title:a.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsxs(R,{gap:"space-4",children:[r.jsx(p,{size:"small",children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsx(S,{children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Til",values:T(n.reservasjonStatus.reservertTilTidspunkt)})})]})]})}),r.jsx(u.Footer,{children:r.jsx(_,{size:"small",variant:"secondary",onClick:l,autoFocus:!0,type:"button",children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Ok"})})})]})};I.__docgenInfo={description:"",methods:[],displayName:"OppgaveReservasjonForlengetModal",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{I as O};
