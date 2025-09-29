import{r as g,R as l,u as v,j as r,S as p}from"./iframe-DcWfvX4E.js";import"./FlyttReservasjonModal-cyJRfFZ_.js";import{M as u}from"./Modal-CkgRguxl.js";import{H as m,V as y}from"./VStack-qlvPq9uV.js";import{u as c,L as k,B as b}from"./nb_NO-B5yokG7b.js";import{M as o}from"./Loader-BgAJ8TXJ.js";import{B as f}from"./floating-ui.react-BQhJV-NN.js";var T=function(n,s){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&s.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(t[e[a]]=n[e[a]]);return t};const h=g.forwardRef((n,s)=>{var{title:t,titleId:e}=n,a=T(n,["title","titleId"]);let i=c();return i=t?e||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":i},a),t?l.createElement("title",{id:i},t):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))}),j="_image_xghy3_1",B="_padding_xghy3_8",d={image:j,padding:B},R=({oppgave:n,closeModal:s})=>{const t=v();return r.jsxs(u,{width:"small",open:!0,"aria-label":t.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"}),onClose:s,children:[r.jsx(u.Body,{children:r.jsxs(m,{gap:"space-20",align:"center",className:d.padding,children:[r.jsx(h,{className:d.image,title:t.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsxs(y,{gap:"space-4",children:[r.jsx(k,{size:"small",children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsx(b,{children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Til",values:p(n.reservasjonStatus.reservertTilTidspunkt)})})]})]})}),r.jsx(u.Footer,{children:r.jsx(f,{size:"small",variant:"secondary",onClick:s,autoFocus:!0,type:"button",children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Ok"})})})]})};R.__docgenInfo={description:"",methods:[],displayName:"OppgaveReservasjonForlengetModal",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
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
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{R as O};
