import{r as p,j as e,P as C,a as H,w as Y,F as b,B as u,d as k,b as v}from"./iframe-B9KoQGM0.js";import{g as M,r as z,s as J,h as Q,l as X,d as $,a as i,L as l,H as s}from"./fplosSaksbehandlerApi-CWuH3MKX.js";import{S as W,B as Z,K as ee}from"./SakslisteVelgerForm-D8-mfaRv.js";import{A as f}from"./andreKriterierType-Cg0VWsVP.js";import{O as y}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{L as ne,A as re}from"./LedigOppgaveTabell-2aP3oSGk.js";import"./FlyttReservasjonModal-B35tj6vq.js";import{a as te}from"./alleKodeverkLos-JR0SOFbV.js";import{u as T}from"./useLosKodeverk-BE3hg7Pt.js";import{X as ae}from"./index.es-CLSw_-eh.js";import{u as D}from"./useMutation-N_FPDICk.js";import{O as se}from"./OppgaveErReservertAvAnnenModal-CvHoK6Gc.js";import{R as ie}from"./ReservertOppgaveTabell-D-2Awhv5.js";import{V as S,H as le}from"./VStack-C4xViOeb.js";import{D as oe}from"./DriftsmeldingPanel-C3MPGq5W.js";import{F as de}from"./FagsakSøkIndex-CroWJDU4.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CWmjazKS.js";import{N as ge}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-CtAo4CwZ.js";import{u as me,H as N,D as pe,m as ke}from"./nb_NO-C3IQ5_sL.js";import{M as R}from"./Loader-C2bZBRPU.js";import{S as ve}from"./SistBehandledeSaker-DzW5b3Ai.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-Bp8LbBj1.js";import"./Modal-CHSHW0HN.js";import"./index-TZAab7S3.js";import"./composeEventHandlers-C20DeXlO.js";import"./Tag-BQHGL7Xh.js";import"./ArrowsUpDown-CM4N4ECD.js";import"./PersonHeadset-CjUEiWUs.js";import"./BehandlingPollingTimoutModal-Cxwe6Gpx.js";import"./ExclamationmarkTriangleFill-CeqG1iCP.js";import"./OppgaveLabels-Bg9Dm6C3.js";import"./Checkmark-DtkYrHG8.js";import"./Portal-DmzAOMbA.js";import"./Table-C1cOsVXS.js";import"./OppgaveHandlingerMenu-XWGnTvfU.js";import"./OppgaveReservasjonForlengetModal-sMhfNEui.js";import"./NotatModal-DG_lkwXl.js";import"./ChevronRight-BkOsYsEv.js";import"./HourglassTopFilled-B1LRc7mw.js";import"./FagsakSøk-DmdJbty9.js";import"./SøkForm-D0wtwrXY.js";import"./PersonInfo-BA9TaJqk.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-BddqEGvf.js";var ye=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const ce=p.forwardRef((n,r)=>{var{title:a,titleId:t}=n,o=ye(n,["title","titleId"]);let d=me();return d=a?t||"title-"+d:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},o),a?p.createElement("title",{id:d},a):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),be=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},Se=(n,r)=>{window.localStorage.setItem(n,r)},he=n=>{window.localStorage.removeItem(n)},q=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t,brukernavn:o})=>{const{mutate:d,data:g}=D({mutationFn:M});return e.jsxs(S,{gap:"space-32",children:[e.jsx(W,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:d,getValueFromLocalStorage:be,setValueInLocalStorage:Se,removeValueFromLocalStorage:he}),!!t&&e.jsx(ne,{reserverOppgave:n,antallOppgaver:g,valgtSakslisteId:t}),e.jsx(ie,{reserverOppgave:n,brukernavn:o})]})};q.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Ee=[],w=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a,brukernavn:t})=>{const[o,d]=p.useState(!1),[g,A]=p.useState(),[O,I]=p.useState(),{data:B=Ee,isSuccess:F}=T(J()),{mutateAsync:L}=D({mutationFn:z}),V=m=>{m.reservasjonStatus.erReservert?a(m.saksnummer,m.behandlingId):L(m.id).then(c=>{c?.erReservert&&c.erReservertAvInnloggetBruker?a(m.saksnummer,m.behandlingId):c?.erReservert&&!c.erReservertAvInnloggetBruker&&(d(!0),A(m),I(c))})},U=m=>{d(!1),A(void 0),I(void 0),a(m.saksnummer,m.behandlingId)};return F?e.jsxs(e.Fragment,{children:[e.jsx(q,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:V,sakslister:B,brukernavn:t}),o&&g&&O&&e.jsx(se,{lukkErReservertModalOgOpneOppgave:U,oppgave:g,reservasjonStatus:O})]}):e.jsx(ae,{})};w.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const fe="_iconBackground_u9xw0_1",Te="_sectorChatIcon_u9xw0_8",j={iconBackground:fe,sectorChatIcon:Te},K=({valgtSakslisteId:n})=>{const a=T(Q(n)).data;return e.jsxs(S,{gap:"space-16",children:[e.jsxs(le,{gap:"space-8",align:"center",children:[e.jsx("div",{className:j.iconBackground,children:e.jsx(ce,{"aria-hidden":!0,className:j.sectorChatIcon})}),e.jsx(N,{size:"xsmall",level:"2",children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(Z.New,{padding:"4",borderRadius:"large",children:e.jsxs(S,{gap:"space-16",children:[e.jsxs(S,{gap:"space-4",children:[e.jsx(N,{size:"small",level:"3",children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(pe,{children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(ue,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(ge,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const P=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(S,{gap:"space-24",children:[e.jsx(ve,{åpneFagsak:r}),!!n&&e.jsx(K,{valgtSakslisteId:n})]});P.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Re="_gridContainer_1m5ui_1",Ae="_leftColumn_1m5ui_9",Oe="_rightColumn_1m5ui_15",Ie="_sokContainer_1m5ui_28",h={gridContainer:Re,leftColumn:Ae,rightColumn:Oe,sokContainer:Ie},G=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,navAnsatt:a})=>{const[t,o]=p.useState(),d=T(X()),g=T($());return p.useEffect(()=>{(g.isError||d.isError)&&n()},[g.isError,d.isError]),g.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[g.data&&e.jsx(oe,{driftsmeldinger:g.data}),e.jsxs("div",{className:h.gridContainer,children:[e.jsxs("div",{className:h.leftColumn,children:[e.jsx(w,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:o,brukernavn:a.brukernavn}),e.jsx("div",{className:h.sokContainer,children:e.jsx(de,{åpneFagsak:r,kanSaksbehandle:a.kanSaksbehandle||!1})})]}),e.jsx("div",{className:h.rightColumn,children:e.jsx(P,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};G.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  brukernavn: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"brukernavn",value:{name:"string",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  brukernavn: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}>`},description:""}}};const Ne=H(ke),x=n=>e.jsx(C,{value:Ne,children:e.jsx(G,{...n})});x.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  brukernavn: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"brukernavn",value:{name:"string",required:!0}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  brukernavn: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}>`},description:""}}};const{action:_}=__STORYBOOK_MODULE_ACTIONS__,je=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:ee.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[b.FORELDREPENGER],andreKriterier:[{andreKriterierType:f.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:f.PAPIRSOKNAD,inkluder:!1}]}],_e=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[f.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:y.UNDER_ARBEID},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[],oppgaveBehandlingStatus:y.UNDER_ARBEID},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[],oppgaveBehandlingStatus:y.UNDER_ARBEID}],De=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[f.REVURDERING_INNTEKTSMELDING],oppgaveBehandlingStatus:y.UNDER_ARBEID}],qe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],we=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:k().format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:k().format(v)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:k().format(v)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:k().format(v)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:k().subtract(1,"d").format(v)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:k().subtract(3,"d").format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:k().subtract(4,"d").format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:k().subtract(5,"d").format(v)}],Ke=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:y.UNDER_ARBEID},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232",reservasjonStatus:{erReservert:!1},oppgaveBehandlingStatus:y.UNDER_ARBEID}],In={title:"SaksbehandlerIndex",decorators:[Y],component:x,parameters:{layout:"fullscreen",msw:{handlers:[i.get(l.KODEVERK_LOS,()=>s.json(te)),i.get(l.DRIFTSMELDINGER,()=>s.json([])),i.get(l.SAKSLISTE,()=>s.json(je)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.RESERVERTE_OPPGAVER,()=>s.json(De)),i.get(l.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(qe)),i.get(l.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(l.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(l.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),i.get("https://www.test.com/api/status",()=>s.json({status:re.PENDING,pollIntervalMillis:1e8})),i.get("https://www.test.com/api/result",()=>s.json(_e)),i.get(l.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(l.BEHANDLEDE_OPPGAVER,()=>s.json(Ke)),i.get(l.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(we)),i.get(l.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},E={args:{setLosErIkkeTilgjengelig:_("button-click"),åpneFagsak:_("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...E.parameters?.docs?.source}}};const Nn=["Default"];export{E as Default,Nn as __namedExportsOrder,In as default};
