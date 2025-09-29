import{g as w,r as N,s as L,l as V,d as x,h as t,L as s,H as r}from"./fplosSaksbehandlerApi-5-Mp6zjg.js";import{S as U,K as G}from"./SakslisteVelgerForm-TsFzS1Aa.js";import{A as b}from"./andreKriterierType-Cg0VWsVP.js";import{O as m}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as F,A as C}from"./LedigOppgaveTabell-DmD4MFTc.js";import{j as e,r as v,P as Y,a as H,w as M}from"./iframe-CF8fhdT_.js";import"./FlyttReservasjonModal-ZjytOXOy.js";import{a as Q}from"./alleKodeverkLos-JR0SOFbV.js";import{u as c}from"./useQuery-swBBePYk.js";import{Q as J}from"./index.es-WP0U6Vwi.js";import{u as E}from"./useMutation-CePDtt9J.js";import{O as z}from"./OppgaveErReservertAvAnnenModal-BNQpCEND.js";import{R as W}from"./ReservertOppgaveTabell-BWZtNSzW.js";import{V as R}from"./VStack-CNleZAjs.js";import{D as X}from"./DriftsmeldingPanel-FV8GWe4g.js";import{F as Z}from"./FagsakSøkIndex-1niXwFkF.js";import{S as $}from"./SistBehandledeSaker-Dzi_U_I0.js";import{m as ee}from"./nb_NO-B0MwT9px.js";import"./index.es-4AS-gBOy.js";import"./Modal-CwKCJBdK.js";import"./floating-ui.react-B6UxSIwD.js";import"./Loader-De7v7hMf.js";import"./composeEventHandlers-Bl9pufit.js";import"./index-ugOsHta_.js";import"./ChevronDown-DCCkzgwb.js";import"./Tag-DVuiRVvo.js";import"./useLosKodeverk-Bi5cHP5c.js";import"./PersonHeadset-DtOEiaNy.js";import"./BehandlingPollingTimoutModal-BQhnFb43.js";import"./ExclamationmarkTriangleFill-9ZkuIUua.js";import"./OppgaveLabels-DlwfPk42.js";import"./Checkmark-BpoFG3LS.js";import"./Table-BhFkQhxm.js";import"./Tooltip-BcFUU59O.js";import"./Portal-CtDlu32L.js";import"./preload-helper-PPVm8Dsz.js";import"./OppgaveHandlingerMenu-Bm1O2lu0.js";import"./OppgaveReservasjonForlengetModal-BQt7Tr5T.js";import"./NotatModal-D9HlUXHN.js";import"./ChevronRight-2dAXi6FE.js";import"./HourglassTopFilled-DvpdKdhw.js";import"./FagsakSøk-BqYCXQAv.js";import"./SøkForm-iINzUtil.js";import"./PersonInfo-BsM6qweo.js";import"./Kjonnkode-DjBoP8-t.js";import"./SøkResultat-CvpEtpyn.js";const ne=n=>{const a=globalThis.localStorage.getItem(n);return a!=="undefined"&&a!==null?a:void 0},re=(n,a)=>{globalThis.localStorage.setItem(n,a)},te=n=>{globalThis.localStorage.removeItem(n)},A=({reserverOppgave:n,sakslister:a,setValgtSakslisteId:o,valgtSakslisteId:d,brukernavn:g})=>{const{mutate:l,data:i}=E({mutationFn:w});return e.jsxs(R,{gap:"space-32",children:[e.jsx(U,{sakslister:a,setValgtSakslisteId:o,fetchAntallOppgaver:l,getValueFromLocalStorage:ne,setValueInLocalStorage:re,removeValueFromLocalStorage:te}),!!d&&e.jsx(F,{reserverOppgave:n,antallOppgaver:i,valgtSakslisteId:d}),e.jsx(W,{reserverOppgave:n,brukernavn:g})]})};A.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const ae=[],I=({valgtSakslisteId:n,setValgtSakslisteId:a,åpneFagsak:o,brukernavn:d})=>{const[g,l]=v.useState(!1),[i,T]=v.useState(),[S,h]=v.useState(),{data:_=ae,isSuccess:O}=c(L()),{mutateAsync:K}=E({mutationFn:N}),D=u=>{u.reservasjonStatus.erReservert?o(u.saksnummer,u.behandlingId):K(u.id).then(p=>{p.erReservert&&p.erReservertAvInnloggetBruker?o(u.saksnummer,u.behandlingId):p.erReservert&&!p.erReservertAvInnloggetBruker&&(l(!0),T(u),h(p))})},P=u=>{l(!1),T(void 0),h(void 0),o(u.saksnummer,u.behandlingId)};return O?e.jsxs(e.Fragment,{children:[e.jsx(A,{valgtSakslisteId:n,setValgtSakslisteId:a,reserverOppgave:D,sakslister:_,brukernavn:d}),g&&i&&S&&e.jsx(z,{lukkErReservertModalOgOpneOppgave:P,oppgave:i,reservasjonStatus:S})]}):e.jsx(J,{})};I.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const q=({åpneFagsak:n})=>e.jsx(R,{gap:"space-24",children:e.jsx($,{åpneFagsak:n})});q.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const se="_gridContainer_1m5ui_1",ie="_leftColumn_1m5ui_9",ue="_rightColumn_1m5ui_15",oe="_sokContainer_1m5ui_28",k={gridContainer:se,leftColumn:ie,rightColumn:ue,sokContainer:oe},j=({setLosErIkkeTilgjengelig:n,åpneFagsak:a,navAnsatt:o})=>{const[d,g]=v.useState(),l=c(V()),i=c(x());return v.useEffect(()=>{(i.isError||l.isError)&&n()},[i.isError,l.isError]),i.isPending||l.isPending?null:e.jsxs(e.Fragment,{children:[i.data&&e.jsx(X,{driftsmeldinger:i.data}),e.jsxs("div",{className:k.gridContainer,children:[e.jsxs("div",{className:k.leftColumn,children:[e.jsx(I,{åpneFagsak:a,valgtSakslisteId:d,setValgtSakslisteId:g,brukernavn:o.brukernavn}),e.jsx("div",{className:k.sokContainer,children:e.jsx(Z,{åpneFagsak:a,kanSaksbehandle:o.kanSaksbehandle||!1})})]}),e.jsx("div",{className:k.rightColumn,children:e.jsx(q,{åpneFagsak:a})})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};const le=H(ee),B=n=>e.jsx(Y,{value:le,children:e.jsx(j,{...n})});B.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};const{action:f}=__STORYBOOK_MODULE_ACTIONS__,de=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:G.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:["BT-002"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:b.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:b.PAPIRSOKNAD,inkluder:!1}]}],me=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[b.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:m.UNDER_ARBEID},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[],oppgaveBehandlingStatus:m.UNDER_ARBEID},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[],oppgaveBehandlingStatus:m.UNDER_ARBEID}],ge=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[b.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:m.UNDER_ARBEID}],pe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],ve=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:m.UNDER_ARBEID},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:m.UNDER_ARBEID}],on={title:"SaksbehandlerIndex",decorators:[M],component:B,parameters:{layout:"fullscreen",msw:{handlers:[t.get(s.KODEVERK_LOS,()=>r.json(Q)),t.get(s.DRIFTSMELDINGER,()=>r.json([])),t.get(s.SAKSLISTE,()=>r.json(de)),t.get(s.RESERVER_OPPGAVE,()=>new r(null,{status:200})),t.get(s.RESERVERTE_OPPGAVER,()=>r.json(ge)),t.get(s.SAKSLISTE_SAKSBEHANDLERE,()=>r.json(pe)),t.get(s.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>r.json(100)),t.get(s.RESERVER_OPPGAVE,()=>new r(null,{status:200})),t.get(s.SØK_FAGSAK,()=>new r(null,{status:200})),t.get(s.OPPGAVER_FOR_FAGSAKER,()=>new r(null,{status:200})),t.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new r(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new r(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),t.get("https://www.test.com/api/status",()=>r.json({status:C.PENDING,pollIntervalMillis:1e8})),t.get("https://www.test.com/api/result",()=>r.json(me)),t.get(s.HENT_RESERVASJONSSTATUS,()=>new r(null,{status:200})),t.get(s.BEHANDLEDE_OPPGAVER,()=>r.json(ve)),t.get(s.FORLENG_OPPGAVERESERVASJON,()=>new r(null,{status:200}))]}}},y={args:{setLosErIkkeTilgjengelig:f("button-click"),åpneFagsak:f("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...y.parameters?.docs?.source}}};const ln=["Default"];export{y as Default,ln as __namedExportsOrder,on as default};
