import{g as w,r as L,s as G,l as V,d as x,h as t,L as s,H as r}from"./fplosSaksbehandlerApi-I_eKkXm5.js";import{j as e,r as v,P as F,a as U,w as C,B as k}from"./iframe-B_gJBb7r.js";import{S as Y,K as H}from"./SakslisteVelgerForm-0ZYif-Xu.js";import{A as S}from"./andreKriterierType-Cg0VWsVP.js";import{O as m}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as M,A as Q}from"./LedigOppgaveTabell-C19Kq36-.js";import"./FlyttReservasjonModal-Cy_egtoi.js";import{a as J}from"./alleKodeverkLos-JR0SOFbV.js";import{u as c}from"./useQuery-t6iTPEh-.js";import{Q as z}from"./index.es-CbHhdo4C.js";import{u as A}from"./useMutation-Du8mVxgT.js";import{O as W}from"./OppgaveErReservertAvAnnenModal-D-H8G_D8.js";import{R as X}from"./ReservertOppgaveTabell-8VX59f4v.js";import{V as R}from"./VStack-Mjg6ToKR.js";import{D as Z}from"./DriftsmeldingPanel-6mnvGNhC.js";import{F as $}from"./FagsakSøkIndex-C7tC2ajX.js";import{S as ee}from"./SistBehandledeSaker-D3gzv0zY.js";import{m as ne}from"./nb_NO-BYV9EfKW.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-C5hA478h.js";import"./Modal-zHNc--Nf.js";import"./floating-ui.react-DMTowDgT.js";import"./Loader-i6Od3rbL.js";import"./composeEventHandlers-C1qbdVpl.js";import"./index-d2PAzCkG.js";import"./ChevronDown-DH_0Sr6y.js";import"./Tag-D_aIr90f.js";import"./useLosKodeverk-BdeUhmgv.js";import"./PersonHeadset-DTWc8cnt.js";import"./BehandlingPollingTimoutModal-Cma_UTM9.js";import"./ExclamationmarkTriangleFill-C8dee-x2.js";import"./OppgaveLabels-tPgvIi5r.js";import"./Checkmark-ByN8wngF.js";import"./Table-DOt0hw6z.js";import"./Tooltip-BONXe59M.js";import"./Portal-CUBNe9ie.js";import"./OppgaveHandlingerMenu-DR_Kuyfl.js";import"./OppgaveReservasjonForlengetModal-BXObFrUw.js";import"./NotatModal-BXQEvbBP.js";import"./ChevronRight-BB6VuNE1.js";import"./HourglassTopFilled-Bwh4M1qN.js";import"./FagsakSøk-DYNcg_Ve.js";import"./SøkForm-Dq8kPKgV.js";import"./PersonInfo-CAfEL_-w.js";import"./Kjonnkode-DjBoP8-t.js";import"./SøkResultat-CsHGvLsd.js";const re=n=>{const a=globalThis.localStorage.getItem(n);return a!=="undefined"&&a!==null?a:void 0},te=(n,a)=>{globalThis.localStorage.setItem(n,a)},ae=n=>{globalThis.localStorage.removeItem(n)},I=({reserverOppgave:n,sakslister:a,setValgtSakslisteId:o,valgtSakslisteId:d,brukernavn:g})=>{const{mutate:l,data:i}=A({mutationFn:w});return e.jsxs(R,{gap:"space-32",children:[e.jsx(Y,{sakslister:a,setValgtSakslisteId:o,fetchAntallOppgaver:l,getValueFromLocalStorage:re,setValueInLocalStorage:te,removeValueFromLocalStorage:ae}),!!d&&e.jsx(M,{reserverOppgave:n,antallOppgaver:i,valgtSakslisteId:d}),e.jsx(X,{reserverOppgave:n,brukernavn:g})]})};I.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const se=[],q=({valgtSakslisteId:n,setValgtSakslisteId:a,åpneFagsak:o,brukernavn:d})=>{const[g,l]=v.useState(!1),[i,T]=v.useState(),[h,f]=v.useState(),{data:B=se,isSuccess:N}=c(G()),{mutateAsync:K}=A({mutationFn:L}),D=u=>{u.reservasjonStatus.erReservert?o(u.saksnummer,u.behandlingId):K(u.id).then(p=>{p.erReservert&&p.erReservertAvInnloggetBruker?o(u.saksnummer,u.behandlingId):p.erReservert&&!p.erReservertAvInnloggetBruker&&(l(!0),T(u),f(p))})},P=u=>{l(!1),T(void 0),f(void 0),o(u.saksnummer,u.behandlingId)};return N?e.jsxs(e.Fragment,{children:[e.jsx(I,{valgtSakslisteId:n,setValgtSakslisteId:a,reserverOppgave:D,sakslister:B,brukernavn:d}),g&&i&&h&&e.jsx(W,{lukkErReservertModalOgOpneOppgave:P,oppgave:i,reservasjonStatus:h})]}):e.jsx(z,{})};q.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const O=({åpneFagsak:n})=>e.jsx(R,{gap:"space-24",children:e.jsx(ee,{åpneFagsak:n})});O.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const ie="_gridContainer_1m5ui_1",ue="_leftColumn_1m5ui_9",oe="_rightColumn_1m5ui_15",le="_sokContainer_1m5ui_28",y={gridContainer:ie,leftColumn:ue,rightColumn:oe,sokContainer:le},j=({setLosErIkkeTilgjengelig:n,åpneFagsak:a,navAnsatt:o})=>{const[d,g]=v.useState(),l=c(V()),i=c(x());return v.useEffect(()=>{(i.isError||l.isError)&&n()},[i.isError,l.isError]),i.isPending||l.isPending?null:e.jsxs(e.Fragment,{children:[i.data&&e.jsx(Z,{driftsmeldinger:i.data}),e.jsxs("div",{className:y.gridContainer,children:[e.jsxs("div",{className:y.leftColumn,children:[e.jsx(q,{åpneFagsak:a,valgtSakslisteId:d,setValgtSakslisteId:g,brukernavn:o.brukernavn}),e.jsx("div",{className:y.sokContainer,children:e.jsx($,{åpneFagsak:a,kanSaksbehandle:o.kanSaksbehandle||!1})})]}),e.jsx("div",{className:y.rightColumn,children:e.jsx(O,{åpneFagsak:a})})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  navn: string;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  kanOverstyre: boolean;
  kanOppgavestyre: boolean;
  kanBehandleKode6: boolean;
  funksjonellTid?: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}}]}},description:""}}};const de=U(ne),_=n=>e.jsx(F,{value:de,children:e.jsx(j,{...n})});_.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  navn: string;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  kanOverstyre: boolean;
  kanOppgavestyre: boolean;
  kanBehandleKode6: boolean;
  funksjonellTid?: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}}]}},description:""}}};const{action:E}=__STORYBOOK_MODULE_ACTIONS__,me=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:H.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[k.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:S.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:S.PAPIRSOKNAD,inkluder:!1}]}],ge=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:k.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[S.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:m.UNDER_ARBEID},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:k.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[],oppgaveBehandlingStatus:m.UNDER_ARBEID},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:k.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[],oppgaveBehandlingStatus:m.UNDER_ARBEID}],pe=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:k.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[S.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:m.UNDER_ARBEID}],ve=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],ke=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:m.UNDER_ARBEID},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:m.UNDER_ARBEID}],ln={title:"SaksbehandlerIndex",decorators:[C],component:_,parameters:{layout:"fullscreen",msw:{handlers:[t.get(s.KODEVERK_LOS,()=>r.json(J)),t.get(s.DRIFTSMELDINGER,()=>r.json([])),t.get(s.SAKSLISTE,()=>r.json(me)),t.get(s.RESERVER_OPPGAVE,()=>new r(null,{status:200})),t.get(s.RESERVERTE_OPPGAVER,()=>r.json(pe)),t.get(s.SAKSLISTE_SAKSBEHANDLERE,()=>r.json(ve)),t.get(s.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>r.json(100)),t.get(s.RESERVER_OPPGAVE,()=>new r(null,{status:200})),t.get(s.SØK_FAGSAK,()=>new r(null,{status:200})),t.get(s.OPPGAVER_FOR_FAGSAKER,()=>new r(null,{status:200})),t.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new r(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new r(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),t.get("https://www.test.com/api/status",()=>r.json({status:Q.PENDING,pollIntervalMillis:1e8})),t.get("https://www.test.com/api/result",()=>r.json(ge)),t.get(s.HENT_RESERVASJONSSTATUS,()=>new r(null,{status:200})),t.get(s.BEHANDLEDE_OPPGAVER,()=>r.json(ke)),t.get(s.FORLENG_OPPGAVERESERVASJON,()=>new r(null,{status:200}))]}}},b={args:{setLosErIkkeTilgjengelig:E("button-click"),åpneFagsak:E("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...b.parameters?.docs?.source}}};const dn=["Default"];export{b as Default,dn as __namedExportsOrder,ln as default};
