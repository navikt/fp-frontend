import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{Y as u,z as P,b as U}from"./index.es-BkMxg3KK.js";import{t as M,A as g}from"./index.es-B67PpFt1.js";import{d as p}from"./dayjs.min-BsYQKNhR.js";import{a as Y}from"./alleKodeverkLos-BJud6Q-i.js";import{c as y,a,r as D,R,b as z}from"./fplosSaksbehandlerRestApi-BlHbvkr3.js";import{r as o}from"./index-uubelm5h.js";import{R as J,a as S}from"./useRestApiRunner-PStp57wB.js";import{S as $,B as Q,K as W,A as N}from"./SakslisteVelgerForm-Qfaja6ZL.js";import{u as X,H as T,D as Z,P as ee,m as re}from"./nb_NO-YKX2BiU8.js";import{O as ne}from"./OppgaveErReservertAvAnnenModal-ABJYG4zL.js";import{y as te}from"./index.es-CpK69d07.js";import{O as ae}from"./OppgaverTabell-SOiuN3ae.js";import{M as h}from"./Loader-jHrtJ_3u.js";import{F as se}from"./FagsakSøkIndex-BHuSZMa6.js";import{S as ie}from"./SistBehandledeSaker-CvtH5iri.js";import{N as oe}from"./NyeOgFerdigstilteOppgaverForIdagPanel-FrfU1RTK.js";import{N as le}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-zabrTfcy.js";import{V as f,H as de}from"./VStack-BGxRFqgw.js";import{D as ue}from"./DriftsmeldingPanel-ACQeUjbR.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index.es-CmqcW_9h.js";import"./ChevronDown-BKn0q_zR.js";import"./Tag-A8GJ_bEw.js";import"./index-C5xsJX-I.js";import"./Modal-eX9yuK6W.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-CBut_XMV.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./ArrowsUpDown-DNE7XvpO.js";import"./PersonHeadset-BuhyHrAM.js";import"./ExclamationmarkTriangleFill-D8-WOHQX.js";import"./BehandlingPollingTimoutModal-DpPNP62I.js";import"./OppgaveHandlingerMenu-DfCIBxlD.js";import"./FlyttReservasjonModal-B096RmVd.js";import"./index.es-CQiD8l-s.js";import"./OppgaveReservasjonForlengetModal-Csljs3i9.js";import"./OpphevReservasjonModal-CTlpYGba.js";import"./useControllableState-B2VAyEaW.js";import"./ChevronRight-vz_y1TjH.js";import"./Table-C2b4Mp6l.js";import"./FagsakSøk-jdWU04iR.js";import"./PersonInfo-DxRqpdDL.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkForm-Ct-DGzJz.js";import"./SøkResultat-DKx74qJD.js";import"./useLosKodeverk-DXUqgwd2.js";import"./v4-CQkTLCs1.js";var me=function(r,n){var s={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(r);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(r,t[i])&&(s[t[i]]=r[t[i]]);return s};const ge=o.forwardRef((r,n)=>{var{title:s,titleId:t}=r,i=me(r,["title","titleId"]);let l=X();return l=s?t||"title-"+l:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},i),s?o.createElement("title",{id:l},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),pe=()=>{const r=o.useContext(J),n=o.useCallback(t=>{r&&r({type:"add",data:t})},[]),s=o.useCallback(()=>{r&&r({type:"remove"})},[]);return{addErrorMessage:n,removeErrorMessages:s}},ke=r=>{const n=window.localStorage.getItem(r);return n!=="undefined"&&n!==null?n:void 0},ye=(r,n)=>{window.localStorage.setItem(r,n)},ce=r=>{window.localStorage.removeItem(r)},G=({reserverOppgave:r,sakslister:n,setValgtSakslisteId:s,valgtSakslisteId:t})=>{const{startRequest:i,data:l}=y.useRestApiRunner(a.BEHANDLINGSKO_OPPGAVE_ANTALL);return e.jsxs(e.Fragment,{children:[e.jsx($,{sakslister:n,setValgtSakslisteId:s,fetchAntallOppgaver:i,getValueFromLocalStorage:ke,setValueInLocalStorage:ye,removeValueFromLocalStorage:ce}),e.jsx(te,{twentyPx:!0}),t&&e.jsx(ae,{reserverOppgave:r,antallOppgaver:l,valgtSakslisteId:t})]})};G.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const ve=[],F=({valgtSakslisteId:r,setValgtSakslisteId:n,åpneFagsak:s})=>{const[t,i]=o.useState(!1),[l,v]=o.useState(),[c,m]=o.useState(),{data:I=ve}=y.useRestApi(a.SAKSLISTE),{startRequest:C}=y.useRestApiRunner(a.RESERVER_OPPGAVE),B=d=>{d.status.erReservert?s(d.saksnummer.toString(),d.behandlingId):C({oppgaveId:d.id}).then(k=>{k&&k.erReservert&&k.erReservertAvInnloggetBruker?s(d.saksnummer.toString(),d.behandlingId):k&&k.erReservert&&!k.erReservertAvInnloggetBruker&&(i(!0),v(d),m(k))})},H=d=>{i(!1),v(void 0),m(void 0),s(d.saksnummer.toString(),d.behandlingId)};return I.length===0?e.jsx(T,{size:"small",children:e.jsx(h,{id:"BehandlingskoerIndex.IngenKø"})}):e.jsxs(e.Fragment,{children:[e.jsx(G,{valgtSakslisteId:r,setValgtSakslisteId:n,reserverOppgave:B,sakslister:I}),t&&l&&c&&e.jsx(ne,{lukkErReservertModalOgOpneOppgave:H,oppgave:l,oppgaveStatus:c})]})};F.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const be="_iconBackground_d76i8_1",Se="_sectorChatIcon_d76i8_8",O={iconBackground:be,sectorChatIcon:Se},K=({nyeOgFerdigstilteOppgaver:r})=>e.jsxs(f,{gap:"4",children:[e.jsxs(de,{gap:"2",align:"center",children:[e.jsx("div",{className:O.iconBackground,children:e.jsx(ge,{"aria-hidden":!0,className:O.sectorChatIcon})}),e.jsx(T,{size:"xsmall",children:e.jsx(h,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(Q,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(f,{gap:"4",children:[e.jsxs(f,{gap:"1",children:[e.jsx(T,{size:"small",children:e.jsx(h,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(Z,{children:e.jsx(h,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(oe,{height:250,nyeOgFerdigstilteOppgaver:r}),e.jsx(le,{height:250,nyeOgFerdigstilteOppgaver:r})]})})]});K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const L=({valgtSakslisteId:r})=>{const{data:n}=y.useRestApi(a.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,{sakslisteId:r},{updateTriggers:[r]});return e.jsx(K,{nyeOgFerdigstilteOppgaver:n})};L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallIndex",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const w=({valgtSakslisteId:r,åpneFagsak:n})=>e.jsxs(f,{gap:"6",children:[e.jsx(ie,{åpneFagsak:n}),r&&e.jsx(L,{valgtSakslisteId:r})]});w.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ee="_gridContainer_13ihr_1",he="_leftColumn_13ihr_9",fe="_rightColumn_13ihr_15",Re="_koerContainer_13ihr_28",Te="_sokContainer_13ihr_35",b={gridContainer:Ee,leftColumn:he,rightColumn:fe,koerContainer:Re,sokContainer:Te},V=({setLosErIkkeTilgjengelig:r,åpneFagsak:n,kanSaksbehandle:s})=>{const[t,i]=o.useState(),{addErrorMessage:l}=pe();D.setAddErrorMessageHandler(l);const v=y.useGlobalStateRestApiData(R.KODEVERK_LOS),c=y.useGlobalStateRestApi(R.KODEVERK_LOS,void 0,{suspendRequest:!!v}),m=y.useRestApi(a.DRIFTSMELDINGER);return o.useEffect(()=>{(m.state===S.ERROR||c.state===S.ERROR)&&r()},[m.state,c.state]),m.state!==S.SUCCESS||c.state!==S.SUCCESS&&!v?null:e.jsxs(e.Fragment,{children:[m.data&&e.jsx(ue,{driftsmeldinger:m.data}),e.jsxs("div",{className:b.gridContainer,children:[e.jsxs("div",{className:b.leftColumn,children:[e.jsx("div",{className:b.koerContainer,children:e.jsx(F,{åpneFagsak:n,valgtSakslisteId:t,setValgtSakslisteId:i})}),e.jsx("div",{className:b.sokContainer,children:e.jsx(se,{åpneFagsak:n,kanSaksbehandle:s})})]}),e.jsx("div",{className:b.rightColumn,children:e.jsx(w,{valgtSakslisteId:t,åpneFagsak:n})})]})]})};V.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ae=M(re),A=r=>e.jsx(ee,{value:Ae,children:e.jsx(V,{...r})});A.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:W.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[P.FORELDREPENGER],andreKriterier:[{andreKriterierType:N.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:N.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Ne=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:U.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:P.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],_e=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Oe=[],je=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().format(g)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().format(g)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:p().format(g)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:p().format(g)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:p().subtract(1,"d").format(g)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:p().subtract(3,"d").format(g)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(4,"d").format(g)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:p().subtract(5,"d").format(g)}],xe=[{key:R.KODEVERK_LOS.name,data:Y,global:!0},{key:a.DRIFTSMELDINGER.name,data:[]},{key:a.SAKSLISTE.name,data:Ie},{key:a.RESERVER_OPPGAVE.name,data:void 0},{key:a.RESERVERTE_OPPGAVER.name,data:Ne},{key:a.SAKSLISTE_SAKSBEHANDLERE.name,data:_e},{key:a.BEHANDLINGSKO_OPPGAVE_ANTALL.name,data:1},{key:a.RESERVER_OPPGAVE.name,data:void 0},{key:a.SEARCH_FAGSAK.name,data:void 0},{key:a.OPPGAVER_FOR_FAGSAKER.name,data:void 0},{key:a.OPPGAVER_TIL_BEHANDLING.name,data:Oe},{key:a.HENT_RESERVASJONSSTATUS.name,data:void 0},{key:a.BEHANDLEDE_OPPGAVER.name,data:[]},{key:a.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name,data:je},{key:a.FORLENG_OPPGAVERESERVASJON.name,data:{}}],Nr={title:"SaksbehandlerIndex",component:A,render:r=>e.jsx(z,{data:xe,requestApi:D,children:e.jsx(A,{...r})})},E={args:{setLosErIkkeTilgjengelig:_("button-click"),åpneFagsak:_("button-click"),kanSaksbehandle:!0}};var j,x,q;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(q=(x=E.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const _r=["Default"];export{E as Default,_r as __namedExportsOrder,Nr as default};
