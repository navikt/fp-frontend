import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{R as K,r as s}from"./index-uubelm5h.js";import{D as $,f as o,Z as V,y as J}from"./nb_NO-DLTQouge.js";import{O as Z,F as z}from"./FlyttReservasjonModal-CK5Xkhpa.js";import{c as v,a as p}from"./fplosSaksbehandlerRestApi-uic_MrxI.js";import{O as G}from"./OpphevReservasjonModal-CT0p8alF.js";import{O as W}from"./OppgaveReservasjonForlengetModal-B-YPuTK_.js";const Q="_button_1qa10_1",X={button:Q},l=K.forwardRef(({onClick:r,children:a},n)=>e.jsx("button",{ref:n,className:X.button,onClick:r,type:"button",children:e.jsx($,{children:a})}));l.displayName="MenuButton";l.__docgenInfo={description:`MenuButton

Presentasjonskomponent. Lager lenker i behandlingsmeny`,methods:[],displayName:"MenuButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},ref:{required:!1,tsType:{name:"any"},description:""}}};const ee="_containerMenu_1kbxh_1",ne={containerMenu:ee},re=r=>window.innerWidth>r.left+250?{left:`${42+r.left}px`,top:`${r.top-20}px`}:{left:`${r.left-200}px`,top:`${r.top+38}px`},i=(r,a)=>{r?(document.addEventListener("click",a,!1),document.addEventListener("mousedown",a,!1),document.addEventListener("keydown",a,!1)):(document.removeEventListener("click",a,!1),document.removeEventListener("mousedown",a,!1),document.removeEventListener("keydown",a,!1))},te=({toggleMenu:r,offset:a,oppgave:n,imageNode:y,forlengOppgaveReservasjon:k,hentReserverteOppgaver:g})=>{const[b,c]=s.useState(!1),[f,R]=s.useState(!1),[h,M]=s.useState(!1),[q,j]=s.useState(!1),d=s.useRef(),m=s.useRef(null),t=u=>{const Y=m.current&&m.current.contains(u.target),U=y&&y.contains(u.target);Y||U||r(n)};s.useEffect(()=>(i(!0,t),d&&d.current&&d.current.focus(),()=>{i(!1,t)}),[]);const w=s.useCallback(()=>{i(!1,t),c(!0)},[t]),S=s.useCallback(()=>{r(n),i(!1,t),c(!1)},[r,n,t]),x=s.useCallback(()=>{i(!1,t),j(!0)},[t]),A=s.useCallback(()=>{r(n),i(!1,t),j(!1)},[r,n,t]),E=s.useCallback(u=>{r(n),t(u)},[r,n,t]),O=s.useCallback(()=>{k(n.id).then(()=>{i(!1,t),R(!0)})},[k,n,t]),I=s.useCallback(u=>{r(n),t(u)},[r,n,t]),N=s.useCallback(()=>{i(!1,t),M(!0)},[t]),F=s.useCallback(()=>{i(!1,t),R(!0)},[t]),T=s.useCallback(()=>{r(n)},[r,n]),{startRequest:D}=v.useRestApiRunner(p.ENDRE_OPPGAVERESERVASJON),{startRequest:_}=v.useRestApiRunner(p.FLYTT_RESERVASJON),{startRequest:B,state:L,data:C,resetRequestData:H}=v.useRestApiRunner(p.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK),P=s.useCallback((...u)=>e.jsx("b",{children:u}),[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:ne.containerMenu,style:re(a),ref:m,children:[n.status.reservertTilTidspunkt&&e.jsx(o,{id:"OppgaveHandlingerMenu.ReservertTil",values:{...V(n.status.reservertTilTidspunkt),b:P}}),e.jsx(J,{eightPx:!0}),e.jsx(l,{onClick:w,ref:d,children:e.jsx(o,{id:"OppgaveHandlingerMenu.LeggTilbake",values:{br:e.jsx("br",{})}})}),e.jsx(l,{onClick:O,children:e.jsx(o,{id:"OppgaveHandlingerMenu.ForlengReservasjon",values:{br:e.jsx("br",{})}})}),e.jsx(l,{onClick:N,children:e.jsx(o,{id:"OppgaveHandlingerMenu.EndreReservasjon"})}),e.jsx(l,{onClick:x,children:e.jsx(o,{id:"OppgaveHandlingerMenu.FlyttReservasjon",values:{br:e.jsx("br",{})}})})]}),b&&e.jsx(G,{oppgave:n,showModal:b,cancel:S,toggleMenu:T,hentReserverteOppgaver:g}),h&&e.jsx(Z,{showModal:h,closeModal:I,reserverTilDefault:n.status.reservertTilTidspunkt,oppgaveId:n.id,hentReserverteOppgaver:g,endreReserverasjonState:F,endreOppgavereservasjon:D}),f&&e.jsx(W,{oppgave:n,showModal:f,closeModal:E}),q&&e.jsx(z,{oppgaveId:n.id,showModal:q,closeModal:A,toggleMenu:T,hentReserverteOppgaver:g,flyttOppgavereservasjon:_,hentSaksbehandler:B,hentSaksbehandlerState:L,saksbehandler:C,resetHentSaksbehandler:H})]})};te.__docgenInfo={description:"",methods:[],displayName:"OppgaveHandlingerMenu",props:{toggleMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(valgtOppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"valgtOppgave"}],return:{name:"void"}}},description:""},offset:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  top: number;
  left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:""},oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},imageNode:{required:!0,tsType:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},description:""},forlengOppgaveReservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgaveId: number) => Promise<string>",signature:{arguments:[{type:{name:"number"},name:"oppgaveId"}],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""},hentReserverteOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: any, keepData: boolean) => void",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""}}};export{te as O};
