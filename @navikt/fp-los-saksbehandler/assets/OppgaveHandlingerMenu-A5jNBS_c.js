import{R as e,r as s}from"./index-DogsOklH.js";import{D as K,e as l,Z as V,j as J}from"./nb_NO-FyPNv8I8.js";import{O as Z,F as G}from"./FlyttReservasjonModal-52UFWF1n.js";import{c as v,a as p}from"./fplosSaksbehandlerRestApi-P4G0FdKv.js";import{O as W}from"./OpphevReservasjonModal-WeiAk6nN.js";import{O as z}from"./OppgaveReservasjonForlengetModal-fwt0WCwS.js";const Q="_button_1qa10_1",X={button:Q},o=e.forwardRef(({onClick:r,children:a},n)=>e.createElement("button",{ref:n,className:X.button,onClick:r,type:"button"},e.createElement(K,null,a)));o.__docgenInfo={description:`MenuButton

Presentasjonskomponent. Lager lenker i behandlingsmeny`,methods:[],displayName:"MenuButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},ref:{required:!1,tsType:{name:"any"},description:""}}};const ee="_containerMenu_1kbxh_1",ne={containerMenu:ee},re=r=>window.innerWidth>r.left+250?{left:`${42+r.left}px`,top:`${r.top-20}px`}:{left:`${r.left-200}px`,top:`${r.top+38}px`},i=(r,a)=>{r?(document.addEventListener("click",a,!1),document.addEventListener("mousedown",a,!1),document.addEventListener("keydown",a,!1)):(document.removeEventListener("click",a,!1),document.removeEventListener("mousedown",a,!1),document.removeEventListener("keydown",a,!1))},M=({toggleMenu:r,offset:a,oppgave:n,imageNode:c,forlengOppgaveReservasjon:k,hentReserverteOppgaver:g})=>{const[y,b]=s.useState(!1),[f,R]=s.useState(!1),[q,j]=s.useState(!1),[h,T]=s.useState(!1),d=s.useRef(),m=s.useRef(null),t=u=>{const U=m.current&&m.current.contains(u.target),$=c&&c.contains(u.target);U||$||r(n)};s.useEffect(()=>(i(!0,t),d&&d.current&&d.current.focus(),()=>{i(!1,t)}),[]);const w=s.useCallback(()=>{i(!1,t),b(!0)},[t]),S=s.useCallback(()=>{r(n),i(!1,t),b(!1)},[r,n,t]),A=s.useCallback(()=>{i(!1,t),T(!0)},[t]),O=s.useCallback(()=>{r(n),i(!1,t),T(!1)},[r,n,t]),I=s.useCallback(u=>{r(n),t(u)},[r,n,t]),F=s.useCallback(()=>{k(n.id).then(()=>{i(!1,t),R(!0)})},[k,n,t]),N=s.useCallback(u=>{r(n),t(u)},[r,n,t]),D=s.useCallback(()=>{i(!1,t),j(!0)},[t]),_=s.useCallback(()=>{i(!1,t),R(!0)},[t]),E=s.useCallback(()=>{r(n)},[r,n]),{startRequest:L}=v.useRestApiRunner(p.ENDRE_OPPGAVERESERVASJON),{startRequest:B}=v.useRestApiRunner(p.FLYTT_RESERVASJON),{startRequest:H,state:C,data:P,resetRequestData:x}=v.useRestApiRunner(p.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK),Y=s.useCallback((...u)=>e.createElement("b",null,u),[]);return e.createElement(e.Fragment,null,e.createElement("div",{className:ne.containerMenu,style:re(a),ref:m},n.status.reservertTilTidspunkt&&e.createElement(l,{id:"OppgaveHandlingerMenu.ReservertTil",values:{...V(n.status.reservertTilTidspunkt),b:Y}}),e.createElement(J,{eightPx:!0}),e.createElement(o,{onClick:w,ref:d},e.createElement(l,{id:"OppgaveHandlingerMenu.LeggTilbake",values:{br:e.createElement("br",null)}})),e.createElement(o,{onClick:F},e.createElement(l,{id:"OppgaveHandlingerMenu.ForlengReservasjon",values:{br:e.createElement("br",null)}})),e.createElement(o,{onClick:D},e.createElement(l,{id:"OppgaveHandlingerMenu.EndreReservasjon"})),e.createElement(o,{onClick:A},e.createElement(l,{id:"OppgaveHandlingerMenu.FlyttReservasjon",values:{br:e.createElement("br",null)}}))),y&&e.createElement(W,{oppgave:n,showModal:y,cancel:S,toggleMenu:E,hentReserverteOppgaver:g}),q&&e.createElement(Z,{showModal:q,closeModal:N,reserverTilDefault:n.status.reservertTilTidspunkt,oppgaveId:n.id,hentReserverteOppgaver:g,endreReserverasjonState:_,endreOppgavereservasjon:L}),f&&e.createElement(z,{oppgave:n,showModal:f,closeModal:I}),h&&e.createElement(G,{oppgaveId:n.id,showModal:h,closeModal:O,toggleMenu:E,hentReserverteOppgaver:g,flyttOppgavereservasjon:B,hentSaksbehandler:H,hentSaksbehandlerState:C,saksbehandler:P,resetHentSaksbehandler:x}))},oe=M;M.__docgenInfo={description:"",methods:[],displayName:"OppgaveHandlingerMenu",props:{toggleMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(valgtOppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},imageNode:{required:!0,tsType:{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]},description:""},forlengOppgaveReservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgaveId: number) => Promise<string>",signature:{arguments:[{type:{name:"number"},name:"oppgaveId"}],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""},hentReserverteOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: any, keepData: boolean) => void",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""}}};export{oe as O};
