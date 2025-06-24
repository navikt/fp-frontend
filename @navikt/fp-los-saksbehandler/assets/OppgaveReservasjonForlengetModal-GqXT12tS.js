import{r as l,u as g,j as n,A as p}from"./iframe-CyqUL1xL.js";import"./FlyttReservasjonModal-CsQ3KjQK.js";import{M as u,B as v}from"./Modal-Bd22a6-H.js";import{H as m,V as y}from"./VStack-hC6jG55H.js";import{u as c,L as k,B as b}from"./nb_NO-BWhtdl_d.js";import{M as o}from"./message-DTuv7X55.js";var f=function(r,a){var t={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&a.indexOf(e)<0&&(t[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(r);s<e.length;s++)a.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(r,e[s])&&(t[e[s]]=r[e[s]]);return t};const h=l.forwardRef((r,a)=>{var{title:t,titleId:e}=r,s=f(r,["title","titleId"]);let i=c();return i=t?e||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},s),t?l.createElement("title",{id:i},t):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))}),j="_image_coasb_1",R="_padding_coasb_8",d={image:j,padding:R},T=({oppgave:r,closeModal:a})=>{const t=g();return n.jsxs(u,{width:"small",open:!0,"aria-label":t.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"}),onClose:a,children:[n.jsx(u.Body,{children:n.jsxs(m,{gap:"5",align:"center",className:d.padding,children:[n.jsx(h,{className:d.image,title:t.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"})}),n.jsxs(y,{gap:"1",children:[n.jsx(k,{size:"small",children:n.jsx(o,{id:"OppgaveReservasjonForlengetModal.Reservert"})}),n.jsx(b,{children:n.jsx(o,{id:"OppgaveReservasjonForlengetModal.Til",values:p(r.status.reservertTilTidspunkt)})})]})]})}),n.jsx(u.Footer,{children:n.jsx(v,{size:"small",variant:"secondary",onClick:a,autoFocus:!0,type:"button",children:n.jsx(o,{id:"OppgaveReservasjonForlengetModal.Ok"})})})]})};T.__docgenInfo={description:"",methods:[],displayName:"OppgaveReservasjonForlengetModal",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
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
}>`},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{T as O};
