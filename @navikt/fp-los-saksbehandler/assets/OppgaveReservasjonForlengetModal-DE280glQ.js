import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-_2TAQcTa.js";import{u as g,g as m,L as v,c as p}from"./nb_NO-DWNE31-V.js";import{u as y}from"./index.es-D3FSeQNG.js";import"./FlyttReservasjonModal-DR-grkU3.js";import{M as u,B as c}from"./Modal-pQ8dwEsS.js";import{H as b,V as k}from"./VStack-ChXOQS5S.js";import{M as o}from"./Loader-BEUEYYSz.js";var f=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)a.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(n,e[s])&&(t[e[s]]=n[e[s]]);return t};const h=l.forwardRef((n,a)=>{var{title:t,titleId:e}=n,s=f(n,["title","titleId"]);let i=g();return i=t?e||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},s),t?l.createElement("title",{id:i},t):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))}),j="_image_coasb_1",R="_padding_coasb_8",d={image:j,padding:R},q=({oppgave:n,closeModal:a})=>{const t=m();return r.jsxs(u,{width:"small",open:!0,"aria-label":t.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"}),onClose:a,children:[r.jsx(u.Body,{children:r.jsxs(b,{gap:"5",align:"center",className:d.padding,children:[r.jsx(h,{className:d.image,title:t.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsxs(k,{gap:"1",children:[r.jsx(v,{size:"small",children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsx(p,{children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Til",values:y(n.status.reservertTilTidspunkt)})})]})]})}),r.jsx(u.Footer,{children:r.jsx(c,{size:"small",variant:"secondary",onClick:a,autoFocus:!0,type:"button",children:r.jsx(o,{id:"OppgaveReservasjonForlengetModal.Ok"})})})]})};q.__docgenInfo={description:"",methods:[],displayName:"OppgaveReservasjonForlengetModal",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{q as O};
