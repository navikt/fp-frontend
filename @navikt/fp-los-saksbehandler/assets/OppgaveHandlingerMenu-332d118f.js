import{j as n}from"./jsx-runtime-9c4ae004.js";import{R as G,r}from"./index-1b03fe98.js";import{D as J,F as i,G as U,e as Y}from"./nb_NO-b2e865e9.js";import{c as W,f as z}from"./index.es-84287325.js";import{a as p,R as v}from"./fplosSaksbehandlerRestApi-65de4e1b.js";import{O as Q}from"./OpphevReservasjonModal-b558c7c9.js";import{O as X}from"./OppgaveReservasjonForlengetModal-b3d3c070.js";const Z="_button_1qa10_1",ee={button:Z},d=G.forwardRef(({onClick:e,children:a},s)=>n.jsx("button",{ref:s,className:ee.button,onClick:e,type:"button",children:n.jsx(J,{children:a})}));try{d.displayName="MenuButton",d.__docgenInfo={description:`MenuButton

Presentasjonskomponent. Lager lenker i behandlingsmeny`,displayName:"MenuButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const ne="_containerMenu_1kbxh_1",se={containerMenu:ne},te=e=>window.innerWidth>e.left+250?{left:`${42+e.left}px`,top:`${e.top-20}px`}:{left:`${e.left-200}px`,top:`${e.top+38}px`},o=(e,a)=>{e?(document.addEventListener("click",a,!1),document.addEventListener("mousedown",a,!1),document.addEventListener("keydown",a,!1)):(document.removeEventListener("click",a,!1),document.removeEventListener("mousedown",a,!1),document.removeEventListener("keydown",a,!1))},m=({toggleMenu:e,offset:a,oppgave:s,imageNode:R,forlengOppgaveReservasjon:j,hentReserverteOppgaver:c})=>{const[b,g]=r.useState(!1),[y,k]=r.useState(!1),[M,_]=r.useState(!1),[h,x]=r.useState(!1),u=r.useRef(),f=r.useRef(null),t=l=>{const $=f.current&&f.current.contains(l.target),K=R&&R.contains(l.target);$||K||e(s)};r.useEffect(()=>(o(!0,t),u&&u.current&&u.current.focus(),()=>{o(!1,t)}),[]);const O=r.useCallback(()=>{o(!1,t),g(!0)},[t]),S=r.useCallback(()=>{e(s),o(!1,t),g(!1)},[e,s,t]),T=r.useCallback(()=>{o(!1,t),x(!0)},[t]),w=r.useCallback(()=>{e(s),o(!1,t),x(!1)},[e,s,t]),A=r.useCallback(l=>{e(s),t(l)},[e,s,t]),F=r.useCallback(()=>{j(s.id).then(()=>{o(!1,t),k(!0)})},[j,s,t]),N=r.useCallback(l=>{e(s),t(l)},[e,s,t]),q=r.useCallback(()=>{o(!1,t),_(!0)},[t]),C=r.useCallback(()=>{o(!1,t),k(!0)},[t]),E=r.useCallback(()=>{e(s)},[e,s]),{startRequest:H}=p.useRestApiRunner(v.ENDRE_OPPGAVERESERVASJON),{startRequest:L}=p.useRestApiRunner(v.FLYTT_RESERVASJON),{startRequest:D,state:V,data:B,resetRequestData:I}=p.useRestApiRunner(v.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK),P=r.useCallback((...l)=>n.jsx("b",{children:l}),[]);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:se.containerMenu,style:te(a),ref:f,children:[s.status.reservertTilTidspunkt&&n.jsx(i,{id:"OppgaveHandlingerMenu.ReservertTil",values:{...U(s.status.reservertTilTidspunkt),b:P}}),n.jsx(Y,{eightPx:!0}),n.jsx(d,{onClick:O,ref:u,children:n.jsx(i,{id:"OppgaveHandlingerMenu.LeggTilbake",values:{br:n.jsx("br",{})}})}),n.jsx(d,{onClick:F,children:n.jsx(i,{id:"OppgaveHandlingerMenu.ForlengReservasjon",values:{br:n.jsx("br",{})}})}),n.jsx(d,{onClick:q,children:n.jsx(i,{id:"OppgaveHandlingerMenu.EndreReservasjon"})}),n.jsx(d,{onClick:T,children:n.jsx(i,{id:"OppgaveHandlingerMenu.FlyttReservasjon",values:{br:n.jsx("br",{})}})})]}),b&&n.jsx(Q,{oppgave:s,showModal:b,cancel:S,toggleMenu:E,hentReserverteOppgaver:c}),M&&n.jsx(W,{showModal:M,closeModal:N,reserverTilDefault:s.status.reservertTilTidspunkt,oppgaveId:s.id,hentReserverteOppgaver:c,endreReserverasjonState:C,endreOppgavereservasjon:H}),y&&n.jsx(X,{oppgave:s,showModal:y,closeModal:A}),h&&n.jsx(z,{oppgaveId:s.id,showModal:h,closeModal:w,toggleMenu:E,hentReserverteOppgaver:c,flyttOppgavereservasjon:L,hentSaksbehandler:D,hentSaksbehandlerState:V,saksbehandler:B,resetHentSaksbehandler:I})]})},ce=m;try{m.displayName="OppgaveHandlingerMenu",m.__docgenInfo={description:"",displayName:"OppgaveHandlingerMenu",props:{toggleMenu:{defaultValue:null,description:"",name:"toggleMenu",required:!0,type:{name:"(valgtOppgave: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; beh..."}},offset:{defaultValue:null,description:"",name:"offset",required:!0,type:{name:"Offset"}},oppgave:{defaultValue:null,description:"",name:"oppgave",required:!0,type:{name:"Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandlingId: stri..."}},imageNode:{defaultValue:null,description:"",name:"imageNode",required:!0,type:{name:"HTMLDivElement | null"}},forlengOppgaveReservasjon:{defaultValue:null,description:"",name:"forlengOppgaveReservasjon",required:!0,type:{name:"(oppgaveId: number) => Promise<string>"}},hentReserverteOppgaver:{defaultValue:null,description:"",name:"hentReserverteOppgaver",required:!0,type:{name:"(params: any, keepData: boolean) => void"}}}}}catch{}export{ce as O};
//# sourceMappingURL=OppgaveHandlingerMenu-332d118f.js.map
