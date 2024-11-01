import{j as u}from"./jsx-runtime-QvZ8i92b.js";import{r}from"./index-uubelm5h.js";import{e as q,E as M,g as N}from"./useRestApiRunner-BRG0l7Io.js";import{F as V}from"./FagsakSearch-RiJTmGfF.js";import{c as g,a as k}from"./fplosSaksbehandlerRestApi-uic_MrxI.js";import{O as C}from"./OppgaveErReservertAvAnnenModal-s_aF7QEx.js";const H=[],K=[],L=({åpneFagsak:t,kanSaksbehandle:S})=>{const[p,E]=r.useState(!1),[F,R]=r.useState(!1),[c,d]=r.useState(),[O,o]=r.useState(!1),[m,i]=r.useState(!1),{startRequest:I}=g.useRestApiRunner(k.RESERVER_OPPGAVE),{startRequest:_,resetRequestData:A,data:l=H,error:f}=g.useRestApiRunner(k.SEARCH_FAGSAK),{startRequest:b,data:n=K}=g.useRestApiRunner(k.OPPGAVER_FOR_FAGSAKER),{startRequest:T}=g.useRestApiRunner(k.HENT_RESERVASJONSSTATUS),x=f&&q(M.MANGLER_TILGANG_FEIL,f)?N(f):void 0;r.useEffect(()=>{m&&l.length===1&&(n.length===1?v(n[0],!1):n.length===0&&t(l[0].saksnummer))},[m,l,n]),r.useEffect(()=>()=>{A()},[]);const h=(e,s)=>{s&&(!s.erReservert||s.erReservert&&s.erReservertAvInnloggetBruker)?t(e.saksnummer.toString(),e.behandlingId):s&&s.erReservert&&!s.erReservertAvInnloggetBruker&&(d(e),R(!0))},v=(e,s)=>{e.status.erReservert&&!e.status.erReservertAvInnloggetBruker?(d(e),R(!0)):p?I({oppgaveId:e.id}).then(a=>{h(e,a)}):s?T({oppgaveId:e.id}).then(a=>{h(e,a)}):t(e.saksnummer.toString(),e.behandlingId)},j=e=>{v(e,!0)},y=e=>(E(e.skalReservere),o(!0),i(!1),_(e).then(s=>{s&&s.length>0?b({saksnummerListe:s.map(a=>`${a.saksnummer}`).join(",")}).then(()=>{o(!1),i(!0)}):(o(!1),i(!0))})),G=e=>{d(void 0),R(!1),t(e.saksnummer.toString(),e.behandlingId)},P=()=>{A(),o(!1),i(!1)};return u.jsxs(u.Fragment,{children:[u.jsx(V,{fagsaker:l||[],fagsakOppgaver:n||[],searchFagsakCallback:y,searchResultReceived:m,åpneFagsak:t,selectOppgaveCallback:j,searchStarted:O,searchResultAccessDenied:x,resetSearch:P,kanSaksbehandle:S}),F&&c&&u.jsx(C,{lukkErReservertModalOgOpneOppgave:G,oppgave:c,oppgaveStatus:c.status})]})};L.__docgenInfo={description:`FagsakSearchIndex

Container komponent. Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
mot server og lagringen av resultatet i klientens state.`,methods:[],displayName:"FagsakSearchIndex",props:{åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};export{L as F};
