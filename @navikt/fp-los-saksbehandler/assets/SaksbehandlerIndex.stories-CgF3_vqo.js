import{g as O,r as U,s as P,l as G,d as V,h as a,L as s,H as r}from"./fplosSaksbehandlerApi-vAN14MZ0.js";import{L as q,A as j}from"./LedigOppgaveTabell-DPeKQVgw.js";import{j as e,r as E,P as w,e as F,w as M}from"./iframe-Cy3nThB4.js";import"./FlyttReservasjonModal-piA8JDAn.js";import{a as x}from"./alleKodeverkLos-JR0SOFbV.js";import{u as p}from"./useQuery-fbnC_flK.js";import{Z as Y}from"./index.es-C6NXw24M.js";import{u as y}from"./useMutation-9GJzzoQm.js";import{O as C}from"./OppgaveErReservertAvAnnenModal-BabRryDr.js";import{R as H}from"./ReservertOppgaveTabell-D-DZ6PZD.js";import{S as J}from"./SakslisteVelgerForm-CyxMPz_o.js";import{V as _}from"./VStack-gQjYxRm0.js";import{D as Q}from"./DriftsmeldingPanel-DnY3FtQF.js";import{F as Z}from"./FagsakSøkIndex-Bv09ed1g.js";import{S as z}from"./SistBehandledeSaker-CbuWtmJ6.js";import{m as W}from"./nb_NO-B4nFNxw-.js";import"./BehandlingPollingTimoutModal-Cg4uQp00.js";import"./Modal-BVFJjO1L.js";import"./floating-ui.react-BuWkwZSV.js";import"./Loader-D_eQWejC.js";import"./composeEventHandlers-CbGljWkL.js";import"./index-BVl6bERt.js";import"./ChevronDown-DWqkGUCs.js";import"./ExclamationmarkTriangleFill-jbVycWB1.js";import"./OppgaveLabels-C2cWgjWY.js";import"./Checkmark-DQJyUvH9.js";import"./useLosKodeverk-JENNtJmO.js";import"./Tag-lp49pIon.js";import"./Table-DmLeaU03.js";import"./Tooltip-D_4uHTFP.js";import"./Portal-VHuVdQxB.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-ivd3HPcS.js";import"./OppgaveHandlingerMenu-DVPLcLsr.js";import"./OppgaveReservasjonForlengetModal-CU0QTOrD.js";import"./NotatModal-GaHxUHzA.js";import"./ChevronRight-CNtqDhJo.js";import"./HourglassTopFilled-BAUSYn76.js";import"./PersonHeadset-C5vNnfzu.js";import"./FagsakSøk-Ckx_gDVO.js";import"./SøkForm-CKHmw7Rx.js";import"./PersonInfo-DDl71sJD.js";import"./Kjonnkode-DjBoP8-t.js";import"./SøkResultat-BJtyApzQ.js";const X=n=>{const t=globalThis.localStorage.getItem(n);return t!=="undefined"&&t!==null?t:void 0},$=(n,t)=>{globalThis.localStorage.setItem(n,t)},ee=n=>{globalThis.localStorage.removeItem(n)},I=({reserverOppgave:n,sakslister:t,setValgtSakslisteId:u,valgtSakslisteId:m,brukernavn:d})=>{const{mutate:o,data:i}=y({mutationFn:O});return e.jsxs(_,{gap:"space-32",children:[e.jsx(J,{sakslister:t,setValgtSakslisteId:u,fetchAntallOppgaver:o,getValueFromLocalStorage:X,setValueInLocalStorage:$,removeValueFromLocalStorage:ee}),!!m&&e.jsx(q,{reserverOppgave:n,antallOppgaver:i,valgtSakslisteId:m}),e.jsx(H,{reserverOppgave:n,brukernavn:d})]})};I.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}],required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: AndreKriterierType;
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
  fagsakYtelseType: FagsakYtelseType;
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
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}]}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"union",raw:`| 'UNDER_ARBEID'
| 'PÅ_VENT'
| 'FERDIG'
| 'TIL_BESLUTTER'
| 'RETURNERT_FRA_BESLUTTER'`,elements:[{name:"literal",value:"'UNDER_ARBEID'"},{name:"literal",value:"'PÅ_VENT'"},{name:"literal",value:"'FERDIG'"},{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  reservasjonStatus: ReservasjonStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: FagsakYtelseType;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const ne=[],N=({valgtSakslisteId:n,setValgtSakslisteId:t,åpneFagsak:u,brukernavn:m})=>{const[d,o]=E.useState(!1),[i,R]=E.useState(),[k,S]=E.useState(),{data:D=ne,isSuccess:L}=p(P()),{mutateAsync:h}=y({mutationFn:U}),B=l=>{l.reservasjonStatus.erReservert?u(l.saksnummer,l.behandlingId):h(l.id).then(g=>{g.erReservert&&g.erReservertAvInnloggetBruker?u(l.saksnummer,l.behandlingId):g.erReservert&&!g.erReservertAvInnloggetBruker&&(o(!0),R(l),S(g))})},f=l=>{o(!1),R(void 0),S(void 0),u(l.saksnummer,l.behandlingId)};return L?e.jsxs(e.Fragment,{children:[e.jsx(I,{valgtSakslisteId:n,setValgtSakslisteId:t,reserverOppgave:B,sakslister:D,brukernavn:m}),d&&i&&k&&e.jsx(C,{lukkErReservertModalOgOpneOppgave:f,oppgave:i,reservasjonStatus:k})]}):e.jsx(Y,{})};N.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const b=({åpneFagsak:n})=>e.jsx(_,{gap:"space-24",children:e.jsx(z,{åpneFagsak:n})});b.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const re="_gridContainer_1m5ui_1",ae="_leftColumn_1m5ui_9",te="_rightColumn_1m5ui_15",se="_sokContainer_1m5ui_28",T={gridContainer:re,leftColumn:ae,rightColumn:te,sokContainer:se},c=({setLosErIkkeTilgjengelig:n,åpneFagsak:t,navAnsatt:u})=>{const[m,d]=E.useState(),o=p(G()),i=p(V());return E.useEffect(()=>{(i.isError||o.isError)&&n()},[i.isError,o.isError]),i.isPending||o.isPending?null:e.jsxs(e.Fragment,{children:[i.data&&e.jsx(Q,{driftsmeldinger:i.data}),e.jsxs("div",{className:T.gridContainer,children:[e.jsxs("div",{className:T.leftColumn,children:[e.jsx(N,{åpneFagsak:t,valgtSakslisteId:m,setValgtSakslisteId:d,brukernavn:u.brukernavn}),e.jsx("div",{className:T.sokContainer,children:e.jsx(Z,{åpneFagsak:t,kanSaksbehandle:u.kanSaksbehandle||!1})})]}),e.jsx("div",{className:T.rightColumn,children:e.jsx(b,{åpneFagsak:t})})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};const ie=F(W),K=n=>e.jsx(w,{value:ie,children:e.jsx(c,{...n})});K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}},description:""}}};const{action:A}=__STORYBOOK_MODULE_ACTIONS__,le=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:"BEHFRIST",fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:["BT-002"],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:"TIL_BESLUTTER",inkluder:!0},{andreKriterierType:"PAPIRSOKNAD",inkluder:!1}]}],ue=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:["REVURDERING_INNTEKTSMELDING"],oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}],oe=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:["REVURDERING_INNTEKTSMELDING"],oppgaveBehandlingStatus:"UNDER_ARBEID"}],me=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],de=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:"UNDER_ARBEID"},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:"UNDER_ARBEID"}],rn={title:"SaksbehandlerIndex",decorators:[M],component:K,parameters:{layout:"fullscreen",msw:{handlers:[a.get(s.KODEVERK_LOS,()=>r.json(x)),a.get(s.DRIFTSMELDINGER,()=>r.json([])),a.get(s.SAKSLISTE,()=>r.json(le)),a.get(s.RESERVER_OPPGAVE,()=>new r(null,{status:200})),a.get(s.RESERVERTE_OPPGAVER,()=>r.json(oe)),a.get(s.SAKSLISTE_SAKSBEHANDLERE,()=>r.json(me)),a.get(s.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>r.json(100)),a.get(s.RESERVER_OPPGAVE,()=>new r(null,{status:200})),a.get(s.SØK_FAGSAK,()=>new r(null,{status:200})),a.get(s.OPPGAVER_FOR_FAGSAKER,()=>new r(null,{status:200})),a.get(s.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new r(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new r(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),a.get("https://www.test.com/api/status",()=>r.json({status:j.PENDING,pollIntervalMillis:1e8})),a.get("https://www.test.com/api/result",()=>r.json(ue)),a.get(s.HENT_RESERVASJONSSTATUS,()=>new r(null,{status:200})),a.get(s.BEHANDLEDE_OPPGAVER,()=>r.json(de)),a.get(s.FORLENG_OPPGAVERESERVASJON,()=>new r(null,{status:200}))]}}},v={args:{setLosErIkkeTilgjengelig:A("button-click"),åpneFagsak:A("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...v.parameters?.docs?.source}}};const an=["Default"];export{v as Default,an as __namedExportsOrder,rn as default};
