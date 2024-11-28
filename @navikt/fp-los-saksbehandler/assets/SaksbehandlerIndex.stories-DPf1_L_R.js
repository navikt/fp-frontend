import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{t as M,A as g}from"./index.es-UbZaQCW7.js";import{a as N}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as p}from"./dayjs.min-BsYQKNhR.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as v}from"./behandlingStatus-CZkrUkra.js";import{B as l}from"./behandlingType-BdbjGMJD.js";import{F as E}from"./fagsakYtelseType-DI8GXtVr.js";import{a as z}from"./alleKodeverkLos-BJud6Q-i.js";import{c as y,a,r as q,R as A,b as J}from"./fplosSaksbehandlerRestApi-ZC5gilpx.js";import{r as o}from"./index-uubelm5h.js";import{R as $,a as S}from"./useRestApiRunner-4HgzHe3f.js";import{S as Q,B as W,K as X,A as O}from"./SakslisteVelgerForm-B0VRqcS3.js";import{u as Z,H as _,D as ee,P as ne,m as re}from"./nb_NO-C4RkFlUy.js";import{F as te}from"./index.es-Bk8hSli7.js";import{O as ae}from"./OppgaveErReservertAvAnnenModal-BneooQ2Y.js";import{O as se}from"./OppgaverTabell-CSQ5ON46.js";import{V as R,H as ie}from"./VStack-Cn_RGqfq.js";import{D as le}from"./DriftsmeldingPanel-B7684RzE.js";import{F as oe}from"./FagsakSøkIndex-C5w9D1ZP.js";import{N as de}from"./NyeOgFerdigstilteOppgaverForIdagPanel-BnDHb9BI.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BcsCUAOt.js";import{M as T}from"./Loader-CXblLYfE.js";import{S as me}from"./SistBehandledeSaker-bX96-DMD.js";import"./v4-CQkTLCs1.js";import"./index.es-DXmPf6Wl.js";import"./ChevronDown-C80NRibc.js";import"./Tag-DyOxNX7P.js";import"./index-C5xsJX-I.js";import"./Modal-BG2sORRw.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-CBut_XMV.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./ArrowsUpDown-BRS8HI32.js";import"./PersonHeadset-DzMW16HL.js";import"./ExclamationmarkTriangleFill-Bm-_Y4hE.js";import"./BehandlingPollingTimoutModal-CapJIjrF.js";import"./OppgaveHandlingerMenu-Bgo6LE-i.js";import"./FlyttReservasjonModal-BincHclw.js";import"./index.es-C0qDvsAq.js";import"./OppgaveReservasjonForlengetModal-tBU_j_KA.js";import"./OpphevReservasjonModal-B9yL7CSv.js";import"./useControllableState-DfAzX_fN.js";import"./ChevronRight-Dxl7riK3.js";import"./Table-DEmoWMX5.js";import"./FagsakSøk-Bnzh7arn.js";import"./SøkForm-CX7jP8uW.js";import"./PersonInfo-DLCP_vjO.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-SnxnueTb.js";import"./useLosKodeverk-Dpxz3JUJ.js";var ge=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(n);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(s[t[i]]=n[t[i]]);return s};const pe=o.forwardRef((n,r)=>{var{title:s,titleId:t}=n,i=ge(n,["title","titleId"]);let d=Z();return d=s?t||"title-"+d:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},i),s?o.createElement("title",{id:d},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),ke=()=>{const n=o.useContext($),r=o.useCallback(t=>{n&&n({type:"add",data:t})},[]),s=o.useCallback(()=>{n&&n({type:"remove"})},[]);return{addErrorMessage:r,removeErrorMessages:s}},ye=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},ce=(n,r)=>{window.localStorage.setItem(n,r)},ve=n=>{window.localStorage.removeItem(n)},x=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:s,valgtSakslisteId:t})=>{const{startRequest:i,data:d}=y.useRestApiRunner(a.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(R,{gap:"8",children:[e.jsx(Q,{sakslister:r,setValgtSakslisteId:s,fetchAntallOppgaver:i,getValueFromLocalStorage:ye,setValueInLocalStorage:ce,removeValueFromLocalStorage:ve}),t&&e.jsx(se,{reserverOppgave:n,antallOppgaver:d,valgtSakslisteId:t})]})};x.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}>`}],raw:"Saksliste[]"},description:""},reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgaveId: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const be=[],F=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:s})=>{const[t,i]=o.useState(!1),[d,b]=o.useState(),[c,m]=o.useState(),{data:B=be,state:C}=y.useRestApi(a.SAKSLISTE),{startRequest:H}=y.useRestApiRunner(a.RESERVER_OPPGAVE),U=u=>{u.status.erReservert?s(u.saksnummer.toString(),u.behandlingId):H({oppgaveId:u.id}).then(k=>{k&&k.erReservert&&k.erReservertAvInnloggetBruker?s(u.saksnummer.toString(),u.behandlingId):k&&k.erReservert&&!k.erReservertAvInnloggetBruker&&(i(!0),b(u),m(k))})},Y=u=>{i(!1),b(void 0),m(void 0),s(u.saksnummer.toString(),u.behandlingId)};return C!==S.SUCCESS?e.jsx(te,{}):e.jsxs(e.Fragment,{children:[e.jsx(x,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:U,sakslister:B}),t&&d&&c&&e.jsx(ae,{lukkErReservertModalOgOpneOppgave:Y,oppgave:d,oppgaveStatus:c})]})};F.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Se="_iconBackground_d76i8_1",Ee="_sectorChatIcon_d76i8_8",D={iconBackground:Se,sectorChatIcon:Ee},K=({nyeOgFerdigstilteOppgaver:n})=>e.jsxs(R,{gap:"4",children:[e.jsxs(ie,{gap:"2",align:"center",children:[e.jsx("div",{className:D.iconBackground,children:e.jsx(pe,{"aria-hidden":!0,className:D.sectorChatIcon})}),e.jsx(_,{size:"xsmall",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(W,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(R,{gap:"4",children:[e.jsxs(R,{gap:"1",children:[e.jsx(_,{size:"small",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(ee,{children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(de,{height:250,nyeOgFerdigstilteOppgaver:n}),e.jsx(ue,{height:250,nyeOgFerdigstilteOppgaver:n})]})})]});K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const L=({valgtSakslisteId:n})=>{const{data:r}=y.useRestApi(a.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:n},{updateTriggers:[n]});return e.jsx(K,{nyeOgFerdigstilteOppgaver:r})};L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const w=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(R,{gap:"6",children:[e.jsx(me,{åpneFagsak:r}),n&&e.jsx(L,{valgtSakslisteId:n})]});w.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Re="_gridContainer_nw8tl_1",he="_leftColumn_nw8tl_9",fe="_rightColumn_nw8tl_15",Te="_sokContainer_nw8tl_28",h={gridContainer:Re,leftColumn:he,rightColumn:fe,sokContainer:Te},V=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:s})=>{const[t,i]=o.useState(),{addErrorMessage:d}=ke();q.setAddErrorMessageHandler(d);const b=y.useGlobalStateRestApiData(A.KODEVERK_LOS),c=y.useGlobalStateRestApi(A.KODEVERK_LOS,void 0,{suspendRequest:!!b}),m=y.useRestApi(a.DRIFTSMELDINGER);return o.useEffect(()=>{(m.state===S.ERROR||c.state===S.ERROR)&&n()},[m.state,c.state]),m.state!==S.SUCCESS||c.state!==S.SUCCESS&&!b?null:e.jsxs(e.Fragment,{children:[m.data&&e.jsx(le,{driftsmeldinger:m.data}),e.jsxs("div",{className:h.gridContainer,children:[e.jsxs("div",{className:h.leftColumn,children:[e.jsx(F,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:i}),e.jsx("div",{className:h.sokContainer,children:e.jsx(oe,{åpneFagsak:r,kanSaksbehandle:s})})]}),e.jsx("div",{className:h.rightColumn,children:e.jsx(w,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};V.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ae=M(re),I=n=>e.jsx(ne,{value:Ae,children:e.jsx(V,{...n})});I.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:X.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[l.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[E.FORELDREPENGER],andreKriterier:[{andreKriterierType:O.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:O.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Ne=[{id:1,status:{erReservert:!1},saksnummer:46435,personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:l.FORSTEGANGSSOKNAD,behandlingStatus:v.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:4,status:{erReservert:!1},saksnummer:43546,personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:l.FORSTEGANGSSOKNAD,behandlingStatus:v.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:3,status:{erReservert:!1},saksnummer:35344,personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:l.FORSTEGANGSSOKNAD,behandlingStatus:v.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34"}],Oe=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:23233,personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:l.FORSTEGANGSSOKNAD,behandlingStatus:v.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],_e=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],De=[{behandlingType:l.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().format(g)},{behandlingType:l.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().format(g)},{behandlingType:l.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:p().format(g)},{behandlingType:l.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:p().format(g)},{behandlingType:l.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().subtract(1,"d").format(g)},{behandlingType:l.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:p().subtract(3,"d").format(g)},{behandlingType:l.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(4,"d").format(g)},{behandlingType:l.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(5,"d").format(g)}],Ge=[{key:A.KODEVERK_LOS.name,data:z,global:!0},{key:a.DRIFTSMELDINGER.name,data:[]},{key:a.SAKSLISTE.name,data:Ie},{key:a.RESERVER_OPPGAVE.name,data:void 0},{key:a.RESERVERTE_OPPGAVER.name,data:Oe},{key:a.SAKSLISTE_SAKSBEHANDLERE.name,data:_e},{key:a.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:100},{key:a.RESERVER_OPPGAVE.name,data:void 0},{key:a.SEARCH_FAGSAK.name,data:void 0},{key:a.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:a.OPPGAVER_TIL_BEHANDLING.name,data:Ne},{key:a.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:a.BEHANDLEDE_OPPGAVER.name,data:[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:54343,behandlingStatus:v.BEHANDLING_UTREDES},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:13232,behandlingStatus:v.BEHANDLING_UTREDES}]},{key:a.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:De},{key:a.FORLENG_OPPGAVERESERVASJON.name,data:{}}],Gn={title:"SaksbehandlerIndex",component:I,render:n=>e.jsx(J,{data:Ge,requestApi:q,children:e.jsx(I,{...n})})},f={args:{setLosErIkkeTilgjengelig:N("button-click"),åpneFagsak:N("button-click"),kanSaksbehandle:!0}};var G,P,j;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(j=(P=f.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const Pn=["Default"];export{f as Default,Pn as __namedExportsOrder,Gn as default};
