import{r as l,R as t}from"./index-DVXBtNgz.js";import{u as B,a as z,Z as U,h as A,d as k,L as Y,i as $,j as Z,x as J,k as c,C as I,q as Q}from"./nb_NO-B3zjk99V.js";import{K as W}from"./kodeverkTyper-DJMuX7JX.js";import{g as X}from"./kodeverkUtils-RGNAgZhp.js";import{T as ee}from"./useRestApiRunner-B4tj0W_o.js";import{B as ne}from"./BehandlingPollingTimoutModal-CAtyn9TX.js";import{O as te}from"./OppgaveHandlingerMenu-C5yVQR0n.js";import{c as f,R as re,a as p,r as w}from"./fplosSaksbehandlerRestApi-zOD-rXmD.js";import{S as ae}from"./ChevronRight-C2KqJtDs.js";var se=function(r,i){var s={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&i.indexOf(n)<0&&(s[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(r);a<n.length;a++)i.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(s[n[a]]=r[n[a]]);return s};const le=l.forwardRef((r,i)=>{var{title:s,titleId:n}=r,a=se(r,["title","titleId"]);let o=B();return o=s?n||"title-"+o:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},a),s?l.createElement("title",{id:o},s):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25H9a.75.75 0 0 0-.386.107L4.75 18.675zM6 3.25A2.75 2.75 0 0 0 3.25 6v14a.75.75 0 0 0 1.136.643l4.822-2.893H18A2.75 2.75 0 0 0 20.75 15V6A2.75 2.75 0 0 0 18 3.25zm3 6.5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M15 9.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var ie=function(r,i){var s={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&i.indexOf(n)<0&&(s[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(r);a<n.length;a++)i.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(s[n[a]]=r[n[a]]);return s};const ue=l.forwardRef((r,i)=>{var{title:s,titleId:n}=r,a=ie(r,["title","titleId"]);let o=B();return o=s?n||"title-"+o:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},a),s?l.createElement("title",{id:o},s):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))}),oe="_isUnderBehandling_dynx0_1",de="_image_dynx0_5",ge="_noPadding_dynx0_12",me="_bubbleIcon_dynx0_16",ce="_chevronImage_dynx0_22",v={isUnderBehandling:oe,image:de,noPadding:ge,bubbleIcon:me,chevronImage:ce},pe=["OppgaverTabell.Soker","OppgaverTabell.Behandlingstype","OppgaverTabell.BehandlingOpprettet","OppgaverTabell.FristForBehandling","EMPTY_1","EMPTY_2"],S=[],ve=(r,i)=>{const s=r.filter(a=>!i.some(o=>o.id===a.id)).map(a=>({...a,underBehandling:!0})),n=i.map(a=>({...a,underBehandling:!1}));return s.concat(n.slice(0,3))},P=(r,i)=>r.underBehandling?()=>i(r):void 0,j=({reserverOppgave:r,antallOppgaver:i=0,valgtSakslisteId:s,doPolling:n=!0})=>{const a=z(),[o,M]=l.useState(!1),[b,N]=l.useState(),[x,L]=l.useState({left:0,top:0}),V=f.useGlobalStateRestApiData(re.KODEVERK_LOS),{startRequest:C}=f.useRestApiRunner(p.FORLENG_OPPGAVERESERVASJON),{startRequest:y,data:h=S}=f.useRestApiRunner(p.RESERVERTE_OPPGAVER),{startRequest:G,data:R=S,error:H}=f.useRestApiRunner(p.OPPGAVER_TIL_BEHANDLING),T=(e,u,d)=>{y(void 0,!0),G(d?{sakslisteId:u,oppgaveIder:d}:{sakslisteId:u},e).then(m=>!m||typeof m=="string"||!n?Promise.resolve():T(!0,u,m.map(F=>F.id).join(","))).catch(()=>{})};l.useEffect(()=>{w.cancelRequest(p.OPPGAVER_TIL_BEHANDLING.name),T(!1,s)},[s]),l.useEffect(()=>()=>{w.cancelRequest(p.OPPGAVER_TIL_BEHANDLING.name)},[]);const D=l.useCallback(e=>C({oppgaveId:e}).then(()=>y(void 0,!0)),[]),g=l.useRef({}),_=l.useCallback((e,u,d)=>{g.current&&Object.keys(g.current).some(m=>g.current[m]&&g.current[m].contains(e.target))||d&&r(d)},[g.current]),E=l.useCallback(e=>{var d;const u=(d=g.current[e.id])==null?void 0:d.getBoundingClientRect();M(!o),N(e.id),u&&L({top:u.top,left:u.left})},[g.current,o]),K=l.useCallback(e=>{const{flyttetReservasjon:u}=e;if(!u)return;const d=U(u.tidspunkt),m={dato:d==null?void 0:d.date,tid:d==null?void 0:d.time,uid:u.uid,navn:u.navn,beskrivelse:u.begrunnelse,br:t.createElement("br",null)};return t.createElement(A,{size:"small"},t.createElement(k,{id:"OppgaverTabell.OverfortReservasjonTooltip",values:m}))},[]),O=l.useMemo(()=>ve(h,R),[h,R]),q=h.find(e=>e.id===b);return t.createElement(t.Fragment,null,H instanceof ee&&t.createElement(ne,null),t.createElement(Y,{size:"small"},t.createElement(k,{id:"OppgaverTabell.DineNesteSaker",values:{antall:i}})),O.length===0&&t.createElement(t.Fragment,null,t.createElement($,{eightPx:!0}),t.createElement(A,{size:"small"},t.createElement(k,{id:"OppgaverTabell.IngenOppgaver"}))),O.length>0&&t.createElement(t.Fragment,null,t.createElement(Z,{headerTextCodes:pe},O.map(e=>t.createElement(J,{key:e.id,onMouseDown:_,onKeyDown:_,className:e.underBehandling?v.isUnderBehandling:void 0,model:e},t.createElement(c,null,e.navn?`${e.navn} ${e.personnummer}`:"<navn>"),t.createElement(c,null,X(V,W.BEHANDLING_TYPE,e.behandlingstype)),t.createElement(c,null,e.opprettetTidspunkt&&t.createElement(I,{dateString:e.opprettetTidspunkt})),t.createElement(c,null,e.behandlingsfrist&&t.createElement(I,{dateString:e.behandlingsfrist})),t.createElement(c,null,e.status.flyttetReservasjon&&t.createElement(Q,{content:K(e.status),alignLeft:!0},t.createElement(le,{className:v.bubbleIcon}))),t.createElement(c,{className:e.underBehandling?v.noPadding:void 0},!e.underBehandling&&t.createElement(ae,{className:v.chevronImage}),e.underBehandling&&t.createElement("div",{ref:u=>{g.current={...g.current,[e.id]:u}}},t.createElement(ue,{className:v.image,title:a.formatMessage({id:"OppgaverTabell.OppgaveHandlinger"}),onMouseDown:P(e,E),onKeyDown:P(e,E)})))))),o&&b&&q&&t.createElement(te,{imageNode:g.current[b],toggleMenu:E,offset:x,oppgave:q,forlengOppgaveReservasjon:D,hentReserverteOppgaver:y})))},_e=j;j.__docgenInfo={description:"OppgaverTabell",methods:[],displayName:"OppgaverTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
