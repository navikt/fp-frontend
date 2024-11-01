import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as i}from"./index-uubelm5h.js";import{u as S,d as F,Z as z,j as E,f as R,e as U,y as Y,k as $,x as Z,l as p,n as A,p as J}from"./nb_NO-DLTQouge.js";import{K as W}from"./kodeverkTyper-CavWL6Ds.js";import{g as Q}from"./kodeverkUtils-RGNAgZhp.js";import{T as X}from"./useRestApiRunner-BRG0l7Io.js";import{B as ee}from"./BehandlingPollingTimoutModal-CW6z-lQG.js";import{O as ne}from"./OppgaveHandlingerMenu-DQE50Com.js";import{c as f,R as te,a as c,r as I}from"./fplosSaksbehandlerRestApi-uic_MrxI.js";import{S as re}from"./ChevronRight-ClwWzzLU.js";var se=function(r,l){var a={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&l.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)l.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(a[n[s]]=r[n[s]]);return a};const ae=i.forwardRef((r,l)=>{var{title:a,titleId:n}=r,s=se(r,["title","titleId"]);let o=S();return o=a?n||"title-"+o:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":o},s),a?i.createElement("title",{id:o},a):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25H9a.75.75 0 0 0-.386.107L4.75 18.675zM6 3.25A2.75 2.75 0 0 0 3.25 6v14a.75.75 0 0 0 1.136.643l4.822-2.893H18A2.75 2.75 0 0 0 20.75 15V6A2.75 2.75 0 0 0 18 3.25zm3 6.5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M15 9.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var ie=function(r,l){var a={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&l.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)l.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(a[n[s]]=r[n[s]]);return a};const le=i.forwardRef((r,l)=>{var{title:a,titleId:n}=r,s=ie(r,["title","titleId"]);let o=S();return o=a?n||"title-"+o:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":o},s),a?i.createElement("title",{id:o},a):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))}),ue="_isUnderBehandling_dynx0_1",oe="_image_dynx0_5",de="_noPadding_dynx0_12",ge="_bubbleIcon_dynx0_16",me="_chevronImage_dynx0_22",v={isUnderBehandling:ue,image:oe,noPadding:de,bubbleIcon:ge,chevronImage:me},pe=["OppgaverTabell.Soker","OppgaverTabell.Behandlingstype","OppgaverTabell.BehandlingOpprettet","OppgaverTabell.FristForBehandling","EMPTY_1","EMPTY_2"],q=[],ce=(r,l)=>{const a=r.filter(s=>!l.some(o=>o.id===s.id)).map(s=>({...s,underBehandling:!0})),n=l.map(s=>({...s,underBehandling:!1}));return a.concat(n.slice(0,3))},w=(r,l)=>r.underBehandling?()=>l(r):void 0,ve=({reserverOppgave:r,antallOppgaver:l=0,valgtSakslisteId:a,doPolling:n=!0})=>{const s=F(),[o,P]=i.useState(!1),[b,B]=i.useState(),[M,N]=i.useState({left:0,top:0}),V=f.useGlobalStateRestApiData(te.KODEVERK_LOS),{startRequest:D}=f.useRestApiRunner(c.FORLENG_OPPGAVERESERVASJON),{startRequest:h,data:y=q}=f.useRestApiRunner(c.RESERVERTE_OPPGAVER),{startRequest:G,data:j=q,error:H}=f.useRestApiRunner(c.OPPGAVER_TIL_BEHANDLING),x=(e,u,d)=>{h(void 0,!0),G(d?{sakslisteId:u,oppgaveIder:d}:{sakslisteId:u},e).then(m=>!m||typeof m=="string"||!n?Promise.resolve():x(!0,u,m.map(C=>C.id).join(","))).catch(()=>{})};i.useEffect(()=>{I.cancelRequest(c.OPPGAVER_TIL_BEHANDLING.name),x(!1,a)},[a]),i.useEffect(()=>()=>{I.cancelRequest(c.OPPGAVER_TIL_BEHANDLING.name)},[]);const L=i.useCallback(e=>D({oppgaveId:e}).then(()=>h(void 0,!0)),[]),g=i.useRef({}),T=i.useCallback((e,u,d)=>{g.current&&Object.keys(g.current).some(m=>g.current[m]&&g.current[m].contains(e.target))||d&&r(d)},[g.current]),O=i.useCallback(e=>{var d;const u=(d=g.current[e.id])==null?void 0:d.getBoundingClientRect();P(!o),B(e.id),u&&N({top:u.top,left:u.left})},[g.current,o]),K=i.useCallback(e=>{const{flyttetReservasjon:u}=e;if(!u)return;const d=z(u.tidspunkt),m={dato:d==null?void 0:d.date,tid:d==null?void 0:d.time,uid:u.uid,navn:u.navn,beskrivelse:u.begrunnelse,br:t.jsx("br",{})};return t.jsx(E,{size:"small",children:t.jsx(R,{id:"OppgaverTabell.OverfortReservasjonTooltip",values:m})})},[]),k=i.useMemo(()=>ce(y,j),[y,j]),_=y.find(e=>e.id===b);return t.jsxs(t.Fragment,{children:[H instanceof X&&t.jsx(ee,{}),t.jsx(U,{size:"small",children:t.jsx(R,{id:"OppgaverTabell.DineNesteSaker",values:{antall:l}})}),k.length===0&&t.jsxs(t.Fragment,{children:[t.jsx(Y,{eightPx:!0}),t.jsx(E,{size:"small",children:t.jsx(R,{id:"OppgaverTabell.IngenOppgaver"})})]}),k.length>0&&t.jsxs(t.Fragment,{children:[t.jsx($,{headerTextCodes:pe,children:k.map(e=>t.jsxs(Z,{onMouseDown:T,onKeyDown:T,className:e.underBehandling?v.isUnderBehandling:void 0,model:e,children:[t.jsx(p,{children:e.navn?`${e.navn} ${e.personnummer}`:"<navn>"}),t.jsx(p,{children:Q(V,W.BEHANDLING_TYPE,e.behandlingstype)}),t.jsx(p,{children:e.opprettetTidspunkt&&t.jsx(A,{dateString:e.opprettetTidspunkt})}),t.jsx(p,{children:e.behandlingsfrist&&t.jsx(A,{dateString:e.behandlingsfrist})}),t.jsx(p,{children:e.status.flyttetReservasjon&&t.jsx(J,{content:K(e.status),alignLeft:!0,children:t.jsx(ae,{className:v.bubbleIcon})})}),t.jsxs(p,{className:e.underBehandling?v.noPadding:void 0,children:[!e.underBehandling&&t.jsx(re,{className:v.chevronImage}),e.underBehandling&&t.jsx("div",{ref:u=>{g.current={...g.current,[e.id]:u}},children:t.jsx(le,{className:v.image,title:s.formatMessage({id:"OppgaverTabell.OppgaveHandlinger"}),onMouseDown:w(e,O),onKeyDown:w(e,O)})})]})]},e.id))}),o&&b&&_&&t.jsx(ne,{imageNode:g.current[b],toggleMenu:O,offset:M,oppgave:_,forlengOppgaveReservasjon:L,hentReserverteOppgaver:h})]})]})};ve.__docgenInfo={description:"OppgaverTabell",methods:[],displayName:"OppgaverTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},doPolling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{ve as O};
