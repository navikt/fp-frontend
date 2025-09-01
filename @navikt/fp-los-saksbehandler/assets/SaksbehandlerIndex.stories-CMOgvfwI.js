import{r as p,j as e,P as U,a as C,w as H,B as d,d as v,b as k}from"./iframe-CEmqnPfo.js";import{g as Y,r as M,s as z,h as Q,l as J,d as $,a as i,L as l,H as s}from"./fplosSaksbehandlerApi-Fx4pLV7i.js";import{S as W,B as X,K as Z}from"./SakslisteVelgerForm-Bc29FnNW.js";import{A as T}from"./andreKriterierType-Cg0VWsVP.js";import{O as y}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as ee,A as ne}from"./LedigOppgaveTabell-CBohx_tC.js";import"./FlyttReservasjonModal-CwICi7MD.js";import{a as re}from"./alleKodeverkLos-JR0SOFbV.js";import{u as f}from"./useLosKodeverk-Baudd7nC.js";import{Q as te}from"./index.es-CLQDx-mi.js";import{u as _}from"./useMutation-cZuL6R3x.js";import{O as ae}from"./OppgaveErReservertAvAnnenModal-5wQFTeQT.js";import{R as se}from"./ReservertOppgaveTabell-DDtGY8ZN.js";import{V as b,H as ie}from"./VStack-Dv7IGAf5.js";import{D as le}from"./DriftsmeldingPanel-DqowqkXS.js";import{F as oe}from"./FagsakSøkIndex-CoAYUfpR.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForIdagPanel-C3U6ptIj.js";import{N as de}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-Cy4DheAQ.js";import{u as ge,H as O,D as me,m as pe}from"./nb_NO-FOl0qZti.js";import{M as E}from"./Loader-W4N4n3J_.js";import{S as ve}from"./SistBehandledeSaker-BX2lmyyG.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-Dj5OBCqo.js";import"./Modal-CXCon6mo.js";import"./index-D78_jirS.js";import"./composeEventHandlers-CJyonZHw.js";import"./Tag-CRHuM36I.js";import"./ArrowsUpDown-IsItxp4a.js";import"./PersonHeadset-QCd5AJQ-.js";import"./BehandlingPollingTimoutModal-DVTGHgcl.js";import"./ExclamationmarkTriangleFill-C15W7I5p.js";import"./OppgaveLabels-D-Wagt-h.js";import"./Checkmark-CuamwtSp.js";import"./Portal-BJMRtPxJ.js";import"./Table-CxoJC-IQ.js";import"./OppgaveHandlingerMenu-3RylaHY0.js";import"./OppgaveReservasjonForlengetModal-Ck4QUPIY.js";import"./NotatModal-jz01hMTK.js";import"./ChevronRight-DHn95uwx.js";import"./HourglassTopFilled-BsCkzPui.js";import"./FagsakSøk-uiHJUJZz.js";import"./SøkForm-C49_2gQz.js";import"./PersonInfo-DLTbVoak.js";import"./Kjonnkode-DjBoP8-t.js";import"./SøkResultat-Dgi8_8NJ.js";var ke=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const ye=p.forwardRef((n,r)=>{var{title:a,titleId:t}=n,o=ke(n,["title","titleId"]);let u=ge();return u=a?t||"title-"+u:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":u},o),a?p.createElement("title",{id:u},a):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),ce=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},be=(n,r)=>{window.localStorage.setItem(n,r)},Se=n=>{window.localStorage.removeItem(n)},q=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t,brukernavn:o})=>{const{mutate:u,data:g}=_({mutationFn:Y});return e.jsxs(b,{gap:"space-32",children:[e.jsx(W,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:u,getValueFromLocalStorage:ce,setValueInLocalStorage:be,removeValueFromLocalStorage:Se}),!!t&&e.jsx(ee,{reserverOppgave:n,antallOppgaver:g,valgtSakslisteId:t}),e.jsx(se,{reserverOppgave:n,brukernavn:o})]})};q.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const he=[],w=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a,brukernavn:t})=>{const[o,u]=p.useState(!1),[g,R]=p.useState(),[A,I]=p.useState(),{data:x=he,isSuccess:G}=f(z()),{mutateAsync:F}=_({mutationFn:M}),L=m=>{m.reservasjonStatus.erReservert?a(m.saksnummer,m.behandlingId):F(m.id).then(c=>{c?.erReservert&&c.erReservertAvInnloggetBruker?a(m.saksnummer,m.behandlingId):c?.erReservert&&!c.erReservertAvInnloggetBruker&&(u(!0),R(m),I(c))})},V=m=>{u(!1),R(void 0),I(void 0),a(m.saksnummer,m.behandlingId)};return G?e.jsxs(e.Fragment,{children:[e.jsx(q,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:L,sakslister:x,brukernavn:t}),o&&g&&A&&e.jsx(ae,{lukkErReservertModalOgOpneOppgave:V,oppgave:g,reservasjonStatus:A})]}):e.jsx(te,{})};w.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Te="_iconBackground_u9xw0_1",fe="_sectorChatIcon_u9xw0_8",N={iconBackground:Te,sectorChatIcon:fe},B=({valgtSakslisteId:n})=>{const a=f(Q(n)).data;return e.jsxs(b,{gap:"space-16",children:[e.jsxs(ie,{gap:"space-8",align:"center",children:[e.jsx("div",{className:N.iconBackground,children:e.jsx(ye,{"aria-hidden":!0,className:N.sectorChatIcon})}),e.jsx(O,{size:"xsmall",level:"2",children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(X.New,{padding:"4",borderRadius:"large",children:e.jsxs(b,{gap:"space-16",children:[e.jsxs(b,{gap:"space-4",children:[e.jsx(O,{size:"small",level:"3",children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(me,{children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(ue,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(de,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};B.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const D=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(b,{gap:"space-24",children:[e.jsx(ve,{åpneFagsak:r}),!!n&&e.jsx(B,{valgtSakslisteId:n})]});D.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ee="_gridContainer_1m5ui_1",Re="_leftColumn_1m5ui_9",Ae="_rightColumn_1m5ui_15",Ie="_sokContainer_1m5ui_28",S={gridContainer:Ee,leftColumn:Re,rightColumn:Ae,sokContainer:Ie},P=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,navAnsatt:a})=>{const[t,o]=p.useState(),u=f(J()),g=f($());return p.useEffect(()=>{(g.isError||u.isError)&&n()},[g.isError,u.isError]),g.isPending||u.isPending?null:e.jsxs(e.Fragment,{children:[g.data&&e.jsx(le,{driftsmeldinger:g.data}),e.jsxs("div",{className:S.gridContainer,children:[e.jsxs("div",{className:S.leftColumn,children:[e.jsx(w,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:o,brukernavn:a.brukernavn}),e.jsx("div",{className:S.sokContainer,children:e.jsx(oe,{åpneFagsak:r,kanSaksbehandle:a.kanSaksbehandle||!1})})]}),e.jsx("div",{className:S.rightColumn,children:e.jsx(D,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};P.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  navn: string;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  kanOverstyre: boolean;
  kanOppgavestyre: boolean;
  kanBehandleKode6: boolean;
  funksjonellTid: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!0}}]}},description:""}}};const Oe=C(pe),K=n=>e.jsx(U,{value:Oe,children:e.jsx(P,{...n})});K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  brukernavn: string;
  navn: string;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  kanOverstyre: boolean;
  kanOppgavestyre: boolean;
  kanBehandleKode6: boolean;
  funksjonellTid: string;
}`,signature:{properties:[{key:"brukernavn",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!0}}]}},description:""}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ne=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:Z.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:["FP"],andreKriterier:[{andreKriterierType:T.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:T.PAPIRSOKNAD,inkluder:!1}]}],je=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[T.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:y.UNDER_ARBEID},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[],oppgaveBehandlingStatus:y.UNDER_ARBEID},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[],oppgaveBehandlingStatus:y.UNDER_ARBEID}],_e=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[T.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:y.UNDER_ARBEID}],qe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],we=[{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().format(k)},{behandlingType:d.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:v().format(k)},{behandlingType:d.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:v().format(k)},{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().subtract(1,"d").format(k)},{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:v().subtract(3,"d").format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(4,"d").format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(5,"d").format(k)}],Be=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:y.UNDER_ARBEID},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:y.UNDER_ARBEID}],In={title:"SaksbehandlerIndex",decorators:[H],component:K,parameters:{layout:"fullscreen",msw:{handlers:[i.get(l.KODEVERK_LOS,()=>s.json(re)),i.get(l.DRIFTSMELDINGER,()=>s.json([])),i.get(l.SAKSLISTE,()=>s.json(Ne)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.RESERVERTE_OPPGAVER,()=>s.json(_e)),i.get(l.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(qe)),i.get(l.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(l.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(l.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),i.get("https://www.test.com/api/status",()=>s.json({status:ne.PENDING,pollIntervalMillis:1e8})),i.get("https://www.test.com/api/result",()=>s.json(je)),i.get(l.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(l.BEHANDLEDE_OPPGAVER,()=>s.json(Be)),i.get(l.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(we)),i.get(l.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},h={args:{setLosErIkkeTilgjengelig:j("button-click"),åpneFagsak:j("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...h.parameters?.docs?.source}}};const On=["Default"];export{h as Default,On as __namedExportsOrder,In as default};
