import{j as t}from"./dayjs.min-ZUODdiE-.js";import{r as i}from"./index-uubelm5h.js";import{u as S,a as z,Z as U,i as E,d as R,b as Y,y as $,j as Z,x as J,k as p,l as A,n as W}from"./nb_NO-AMOPF0IO.js";import{K as Q}from"./kodeverkTyper-bpjtq0Dy.js";import{g as X}from"./kodeverkUtils-RGNAgZhp.js";import{T as ee}from"./useRestApiRunner-CYj01yVu.js";import{B as ne}from"./BehandlingPollingTimoutModal-DIuNtn_t.js";import{O as te}from"./OppgaveHandlingerMenu-_zXzdzOT.js";import{c as f,R as re,a as c,r as I}from"./fplosSaksbehandlerRestApi-BmCgkfCR.js";import{S as se}from"./ChevronRight-dG_sBO-v.js";var ae=function(r,l){var a={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&l.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)l.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(a[n[s]]=r[n[s]]);return a};const ie=i.forwardRef((r,l)=>{var{title:a,titleId:n}=r,s=ae(r,["title","titleId"]);let o=S();return o=a?n||"title-"+o:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":o},s),a?i.createElement("title",{id:o},a):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25H9a.75.75 0 0 0-.386.107L4.75 18.675zM6 3.25A2.75 2.75 0 0 0 3.25 6v14a.75.75 0 0 0 1.136.643l4.822-2.893H18A2.75 2.75 0 0 0 20.75 15V6A2.75 2.75 0 0 0 18 3.25zm3 6.5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M15 9.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var le=function(r,l){var a={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&l.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)l.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(a[n[s]]=r[n[s]]);return a};const ue=i.forwardRef((r,l)=>{var{title:a,titleId:n}=r,s=le(r,["title","titleId"]);let o=S();return o=a?n||"title-"+o:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":o},s),a?i.createElement("title",{id:o},a):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))}),oe="_isUnderBehandling_dynx0_1",de="_image_dynx0_5",ge="_noPadding_dynx0_12",me="_bubbleIcon_dynx0_16",pe="_chevronImage_dynx0_22",v={isUnderBehandling:oe,image:de,noPadding:ge,bubbleIcon:me,chevronImage:pe},ce=["OppgaverTabell.Soker","OppgaverTabell.Behandlingstype","OppgaverTabell.BehandlingOpprettet","OppgaverTabell.FristForBehandling","EMPTY_1","EMPTY_2"],q=[],ve=(r,l)=>{const a=r.filter(s=>!l.some(o=>o.id===s.id)).map(s=>({...s,underBehandling:!0})),n=l.map(s=>({...s,underBehandling:!1}));return a.concat(n.slice(0,3))},w=(r,l)=>r.underBehandling?()=>l(r):void 0,P=({reserverOppgave:r,antallOppgaver:l=0,valgtSakslisteId:a,doPolling:n=!0})=>{const s=z(),[o,B]=i.useState(!1),[b,M]=i.useState(),[N,V]=i.useState({left:0,top:0}),D=f.useGlobalStateRestApiData(re.KODEVERK_LOS),{startRequest:G}=f.useRestApiRunner(c.FORLENG_OPPGAVERESERVASJON),{startRequest:h,data:y=q}=f.useRestApiRunner(c.RESERVERTE_OPPGAVER),{startRequest:H,data:j=q,error:L}=f.useRestApiRunner(c.OPPGAVER_TIL_BEHANDLING),x=(e,u,d)=>{h(void 0,!0),H(d?{sakslisteId:u,oppgaveIder:d}:{sakslisteId:u},e).then(m=>!m||typeof m=="string"||!n?Promise.resolve():x(!0,u,m.map(F=>F.id).join(","))).catch(()=>{})};i.useEffect(()=>{I.cancelRequest(c.OPPGAVER_TIL_BEHANDLING.name),x(!1,a)},[a]),i.useEffect(()=>()=>{I.cancelRequest(c.OPPGAVER_TIL_BEHANDLING.name)},[]);const K=i.useCallback(e=>G({oppgaveId:e}).then(()=>h(void 0,!0)),[]),g=i.useRef({}),T=i.useCallback((e,u,d)=>{g.current&&Object.keys(g.current).some(m=>g.current[m]&&g.current[m].contains(e.target))||d&&r(d)},[g.current]),O=i.useCallback(e=>{var d;const u=(d=g.current[e.id])==null?void 0:d.getBoundingClientRect();B(!o),M(e.id),u&&V({top:u.top,left:u.left})},[g.current,o]),C=i.useCallback(e=>{const{flyttetReservasjon:u}=e;if(!u)return;const d=U(u.tidspunkt),m={dato:d==null?void 0:d.date,tid:d==null?void 0:d.time,uid:u.uid,navn:u.navn,beskrivelse:u.begrunnelse,br:t.jsx("br",{})};return t.jsx(E,{size:"small",children:t.jsx(R,{id:"OppgaverTabell.OverfortReservasjonTooltip",values:m})})},[]),k=i.useMemo(()=>ve(y,j),[y,j]),_=y.find(e=>e.id===b);return t.jsxs(t.Fragment,{children:[L instanceof ee&&t.jsx(ne,{}),t.jsx(Y,{size:"small",children:t.jsx(R,{id:"OppgaverTabell.DineNesteSaker",values:{antall:l}})}),k.length===0&&t.jsxs(t.Fragment,{children:[t.jsx($,{eightPx:!0}),t.jsx(E,{size:"small",children:t.jsx(R,{id:"OppgaverTabell.IngenOppgaver"})})]}),k.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{headerTextCodes:ce,children:k.map(e=>t.jsxs(J,{onMouseDown:T,onKeyDown:T,className:e.underBehandling?v.isUnderBehandling:void 0,model:e,children:[t.jsx(p,{children:e.navn?`${e.navn} ${e.personnummer}`:"<navn>"}),t.jsx(p,{children:X(D,Q.BEHANDLING_TYPE,e.behandlingstype)}),t.jsx(p,{children:e.opprettetTidspunkt&&t.jsx(A,{dateString:e.opprettetTidspunkt})}),t.jsx(p,{children:e.behandlingsfrist&&t.jsx(A,{dateString:e.behandlingsfrist})}),t.jsx(p,{children:e.status.flyttetReservasjon&&t.jsx(W,{content:C(e.status),alignLeft:!0,children:t.jsx(ie,{className:v.bubbleIcon})})}),t.jsxs(p,{className:e.underBehandling?v.noPadding:void 0,children:[!e.underBehandling&&t.jsx(se,{className:v.chevronImage}),e.underBehandling&&t.jsx("div",{ref:u=>{g.current={...g.current,[e.id]:u}},children:t.jsx(ue,{className:v.image,title:s.formatMessage({id:"OppgaverTabell.OppgaveHandlinger"}),onMouseDown:w(e,O),onKeyDown:w(e,O)})})]})]},e.id))}),o&&b&&_&&t.jsx(te,{imageNode:g.current[b],toggleMenu:O,offset:N,oppgave:_,forlengOppgaveReservasjon:K,hentReserverteOppgaver:h})]})]})},_e=P;P.__docgenInfo={description:"OppgaverTabell",methods:[],displayName:"OppgaverTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""},doPolling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{_e as O};
