import{j as e}from"./jsx-runtime-QvZ8i92b.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as M}from"./behandlingStatus-CZkrUkra.js";import{B as u}from"./behandlingType-BdbjGMJD.js";import{F as x}from"./fagsakYtelseType-DI8GXtVr.js";import{t as Y,A as g}from"./index.es-UbZaQCW7.js";import{d as p}from"./dayjs.min-BsYQKNhR.js";import{a as z}from"./alleKodeverkLos-BJud6Q-i.js";import{c as y,a,r as P,R as h,b as J}from"./fplosSaksbehandlerRestApi-CzPO96jm.js";import{r as l}from"./index-uubelm5h.js";import{R as $,a as b}from"./useRestApiRunner-PStp57wB.js";import{S as Q,B as W,K as X,A}from"./SakslisteVelgerForm-CTnkQuVp.js";import{u as Z,H as I,D as ee,P as re,m as ne}from"./nb_NO-C4RkFlUy.js";import{O as te}from"./OppgaveErReservertAvAnnenModal-CJqjfyk9.js";import{O as ae}from"./OppgaverTabell-Cz-GtBGw.js";import{V as S,H as se}from"./VStack-Cn_RGqfq.js";import{F as ie}from"./index.es-Cu5Bs_uC.js";import{F as le}from"./FagsakSøkIndex-B4Qp3VYW.js";import{S as oe}from"./SistBehandledeSaker-3IbSpSiW.js";import{N as de}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CwmVtrrq.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BhLejR20.js";import{M as R}from"./Loader-CW5Pi24c.js";import{D as me}from"./DriftsmeldingPanel-B7684RzE.js";import{a as N}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index.es-B5MC1z4D.js";import"./ChevronDown-C80NRibc.js";import"./Tag-DyOxNX7P.js";import"./index-C5xsJX-I.js";import"./Modal-GjIYiZV2.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-CBut_XMV.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./ArrowsUpDown-BRS8HI32.js";import"./PersonHeadset-DzMW16HL.js";import"./ExclamationmarkTriangleFill-Bm-_Y4hE.js";import"./BehandlingPollingTimoutModal-BWuqUtiU.js";import"./OppgaveHandlingerMenu-BXTDrPEW.js";import"./FlyttReservasjonModal-CmCvWMvs.js";import"./index.es-C0qDvsAq.js";import"./OppgaveReservasjonForlengetModal-x_vyMpqI.js";import"./OpphevReservasjonModal-Cqdk0kp3.js";import"./useControllableState-DfAzX_fN.js";import"./ChevronRight-Dxl7riK3.js";import"./Table-ClcqLV6w.js";import"./FagsakSøk-BSSbqTrA.js";import"./PersonInfo-K4-pQLSu.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkForm-DWVTPnqb.js";import"./SøkResultat-eXeQrogC.js";import"./useLosKodeverk-DJ8tcsp9.js";import"./v4-CQkTLCs1.js";var ge=function(r,n){var s={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(r);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(r,t[i])&&(s[t[i]]=r[t[i]]);return s};const pe=l.forwardRef((r,n)=>{var{title:s,titleId:t}=r,i=ge(r,["title","titleId"]);let o=Z();return o=s?t||"title-"+o:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":o},i),s?l.createElement("title",{id:o},s):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),ke=()=>{const r=l.useContext($),n=l.useCallback(t=>{r&&r({type:"add",data:t})},[]),s=l.useCallback(()=>{r&&r({type:"remove"})},[]);return{addErrorMessage:n,removeErrorMessages:s}},ye=r=>{const n=window.localStorage.getItem(r);return n!=="undefined"&&n!==null?n:void 0},ce=(r,n)=>{window.localStorage.setItem(r,n)},ve=r=>{window.localStorage.removeItem(r)},D=({reserverOppgave:r,sakslister:n,setValgtSakslisteId:s,valgtSakslisteId:t})=>{const{startRequest:i,data:o}=y.useRestApiRunner(a.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(S,{gap:"8",children:[e.jsx(Q,{sakslister:n,setValgtSakslisteId:s,fetchAntallOppgaver:i,getValueFromLocalStorage:ye,setValueInLocalStorage:ce,removeValueFromLocalStorage:ve}),t&&e.jsx(ae,{reserverOppgave:r,antallOppgaver:o,valgtSakslisteId:t})]})};D.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const be=[],G=({valgtSakslisteId:r,setValgtSakslisteId:n,åpneFagsak:s})=>{const[t,i]=l.useState(!1),[o,v]=l.useState(),[c,m]=l.useState(),{data:V=be,state:C}=y.useRestApi(a.SAKSLISTE),{startRequest:B}=y.useRestApiRunner(a.RESERVER_OPPGAVE),H=d=>{d.status.erReservert?s(d.saksnummer.toString(),d.behandlingId):B({oppgaveId:d.id}).then(k=>{k&&k.erReservert&&k.erReservertAvInnloggetBruker?s(d.saksnummer.toString(),d.behandlingId):k&&k.erReservert&&!k.erReservertAvInnloggetBruker&&(i(!0),v(d),m(k))})},U=d=>{i(!1),v(void 0),m(void 0),s(d.saksnummer.toString(),d.behandlingId)};return C!==b.SUCCESS?e.jsx(ie,{}):e.jsxs(e.Fragment,{children:[e.jsx(D,{valgtSakslisteId:r,setValgtSakslisteId:n,reserverOppgave:H,sakslister:V}),t&&o&&c&&e.jsx(te,{lukkErReservertModalOgOpneOppgave:U,oppgave:o,oppgaveStatus:c})]})};G.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Se="_iconBackground_d76i8_1",Ee="_sectorChatIcon_d76i8_8",O={iconBackground:Se,sectorChatIcon:Ee},F=({nyeOgFerdigstilteOppgaver:r})=>e.jsxs(S,{gap:"4",children:[e.jsxs(se,{gap:"2",align:"center",children:[e.jsx("div",{className:O.iconBackground,children:e.jsx(pe,{"aria-hidden":!0,className:O.sectorChatIcon})}),e.jsx(I,{size:"xsmall",children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(W,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(S,{gap:"4",children:[e.jsxs(S,{gap:"1",children:[e.jsx(I,{size:"small",children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(ee,{children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(de,{height:250,nyeOgFerdigstilteOppgaver:r}),e.jsx(ue,{height:250,nyeOgFerdigstilteOppgaver:r})]})})]});F.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const w=({valgtSakslisteId:r})=>{const{data:n}=y.useRestApi(a.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:r},{updateTriggers:[r]});return e.jsx(F,{nyeOgFerdigstilteOppgaver:n})};w.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const K=({valgtSakslisteId:r,åpneFagsak:n})=>e.jsxs(S,{gap:"6",children:[e.jsx(oe,{åpneFagsak:n}),r&&e.jsx(w,{valgtSakslisteId:r})]});K.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const fe="_gridContainer_nw8tl_1",Re="_leftColumn_nw8tl_9",he="_rightColumn_nw8tl_15",Te="_sokContainer_nw8tl_28",E={gridContainer:fe,leftColumn:Re,rightColumn:he,sokContainer:Te},L=({setLosErIkkeTilgjengelig:r,åpneFagsak:n,kanSaksbehandle:s})=>{const[t,i]=l.useState(),{addErrorMessage:o}=ke();P.setAddErrorMessageHandler(o);const v=y.useGlobalStateRestApiData(h.KODEVERK_LOS),c=y.useGlobalStateRestApi(h.KODEVERK_LOS,void 0,{suspendRequest:!!v}),m=y.useRestApi(a.DRIFTSMELDINGER);return l.useEffect(()=>{(m.state===b.ERROR||c.state===b.ERROR)&&r()},[m.state,c.state]),m.state!==b.SUCCESS||c.state!==b.SUCCESS&&!v?null:e.jsxs(e.Fragment,{children:[m.data&&e.jsx(me,{driftsmeldinger:m.data}),e.jsxs("div",{className:E.gridContainer,children:[e.jsxs("div",{className:E.leftColumn,children:[e.jsx(G,{åpneFagsak:n,valgtSakslisteId:t,setValgtSakslisteId:i}),e.jsx("div",{className:E.sokContainer,children:e.jsx(le,{åpneFagsak:n,kanSaksbehandle:s})})]}),e.jsx("div",{className:E.rightColumn,children:e.jsx(K,{valgtSakslisteId:t,åpneFagsak:n})})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ae=Y(ne),T=r=>e.jsx(re,{value:Ae,children:e.jsx(L,{...r})});T.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:X.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[x.FORELDREPENGER],andreKriterier:[{andreKriterierType:A.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:A.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Ne=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:M.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:x.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Oe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],_e=[],je=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().format(g)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().format(g)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:p().format(g)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:p().format(g)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().subtract(1,"d").format(g)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:p().subtract(3,"d").format(g)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(4,"d").format(g)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(5,"d").format(g)}],qe=[{key:h.KODEVERK_LOS.name,data:z,global:!0},{key:a.DRIFTSMELDINGER.name,data:[]},{key:a.SAKSLISTE.name,data:Ie},{key:a.RESERVER_OPPGAVE.name,data:void 0},{key:a.RESERVERTE_OPPGAVER.name,data:Ne},{key:a.SAKSLISTE_SAKSBEHANDLERE.name,data:Oe},{key:a.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:a.RESERVER_OPPGAVE.name,data:void 0},{key:a.SEARCH_FAGSAK.name,data:void 0},{key:a.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:a.OPPGAVER_TIL_BEHANDLING.name,data:_e},{key:a.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:a.BEHANDLEDE_OPPGAVER.name,data:[]},{key:a.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:je},{key:a.FORLENG_OPPGAVERESERVASJON.name,data:{}}],jr={title:"SaksbehandlerIndex",component:T,render:r=>e.jsx(J,{data:qe,requestApi:P,children:e.jsx(T,{...r})})},f={args:{setLosErIkkeTilgjengelig:N("button-click"),åpneFagsak:N("button-click"),kanSaksbehandle:!0}};var _,j,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const qr=["Default"];export{f as Default,qr as __namedExportsOrder,jr as default};
