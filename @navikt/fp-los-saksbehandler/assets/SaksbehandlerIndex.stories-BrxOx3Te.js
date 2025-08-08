import{r as p,j as e,P as C,a as H,w as U,F as c,B as u,d as k,b as v}from"./iframe-B3LllOyS.js";import{g as Y,r as M,s as z,h as J,l as Q,d as X,a as i,L as l,H as s}from"./fplosSaksbehandlerApi-Dsddu5UX.js";import{S as $,B as W,K as Z}from"./SakslisteVelgerForm-BIw7JNcg.js";import{A as f}from"./andreKriterierType-Cg0VWsVP.js";import{L as ee,A as ne}from"./LedigOppgaveTabell-KDiGQhJE.js";import"./FlyttReservasjonModal-7oYJA89T.js";import{a as re}from"./alleKodeverkLos-DeeW-5p1.js";import{u as E}from"./useQuery-Dd00kS4c.js";import{X as te}from"./index.es-B_bcqdk4.js";import{u as _}from"./useMutation-DdKf8rz8.js";import{O as ae}from"./OppgaveErReservertAvAnnenModal-TA7Ec9nW.js";import{R as se}from"./ReservertOppgaveTabell-D30ukujN.js";import{V as b,H as ie}from"./VStack-oiDHnFzs.js";import{D as le}from"./DriftsmeldingPanel-D-0FwwXG.js";import{F as oe}from"./FagsakSøkIndex-Jul0VGmL.js";import{N as de}from"./NyeOgFerdigstilteOppgaverForIdagPanel-LBJ5MGDS.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-DgCwir08.js";import{u as ge,H as I,D as me,m as pe}from"./nb_NO-iOLOzDYk.js";import{M as T}from"./Loader-BniX8TTA.js";import{S as ke}from"./SistBehandledeSaker-C7tUwW3p.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-BZ8HOhoj.js";import"./Modal-D2EJqP0l.js";import"./index-D9YNbemO.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-D-tGMl61.js";import"./Tag-CdwnF2do.js";import"./useLosKodeverk-BKgUO8J6.js";import"./ArrowsUpDown-DuQL2VeC.js";import"./PersonHeadset-mv3AY-rd.js";import"./BehandlingPollingTimoutModal-CRe8zaz-.js";import"./ExclamationmarkTriangleFill-Xm28zI6C.js";import"./OppgaveLabels-CWKDwVBw.js";import"./Portal-B2VIiATx.js";import"./Table-bB41s0gD.js";import"./OppgaveHandlingerMenu-B9uh6c6l.js";import"./OppgaveReservasjonForlengetModal-lvRKoen_.js";import"./NotatModal-Bc6CzHg9.js";import"./ChevronRight-D5RUNovN.js";import"./FagsakSøk-DRf7A41a.js";import"./SøkForm-DaChP9dj.js";import"./PersonInfo-JobQuTV4.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-BrtQdg2-.js";var ve=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const ye=p.forwardRef((n,r)=>{var{title:a,titleId:t}=n,o=ve(n,["title","titleId"]);let d=ge();return d=a?t||"title-"+d:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},o),a?p.createElement("title",{id:d},a):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),ce=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},be=(n,r)=>{window.localStorage.setItem(n,r)},Se=n=>{window.localStorage.removeItem(n)},q=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t,brukernavn:o})=>{const{mutate:d,data:g}=_({mutationFn:Y});return e.jsxs(b,{gap:"space-32",children:[e.jsx($,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:d,getValueFromLocalStorage:ce,setValueInLocalStorage:be,removeValueFromLocalStorage:Se}),!!t&&e.jsx(ee,{reserverOppgave:n,antallOppgaver:g,valgtSakslisteId:t}),e.jsx(se,{reserverOppgave:n,brukernavn:o})]})};q.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}}]}}],raw:`Readonly<{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const he=[],w=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a,brukernavn:t})=>{const[o,d]=p.useState(!1),[g,R]=p.useState(),[A,O]=p.useState(),{data:x=he,isSuccess:F}=E(z()),{mutateAsync:L}=_({mutationFn:M}),V=m=>{m.reservasjonStatus.erReservert?a(m.saksnummer,m.behandlingId):L(m.id).then(y=>{y?.erReservert&&y.erReservertAvInnloggetBruker?a(m.saksnummer,m.behandlingId):y?.erReservert&&!y.erReservertAvInnloggetBruker&&(d(!0),R(m),O(y))})},B=m=>{d(!1),R(void 0),O(void 0),a(m.saksnummer,m.behandlingId)};return F?e.jsxs(e.Fragment,{children:[e.jsx(q,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:V,sakslister:x,brukernavn:t}),o&&g&&A&&e.jsx(ae,{lukkErReservertModalOgOpneOppgave:B,oppgave:g,reservasjonStatus:A})]}):e.jsx(te,{})};w.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const fe="_iconBackground_u9xw0_1",Ee="_sectorChatIcon_u9xw0_8",N={iconBackground:fe,sectorChatIcon:Ee},K=({valgtSakslisteId:n})=>{const a=E(J(n)).data;return e.jsxs(b,{gap:"space-16",children:[e.jsxs(ie,{gap:"space-8",align:"center",children:[e.jsx("div",{className:N.iconBackground,children:e.jsx(ye,{"aria-hidden":!0,className:N.sectorChatIcon})}),e.jsx(I,{size:"xsmall",level:"2",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(W.New,{padding:"4",borderRadius:"large",children:e.jsxs(b,{gap:"space-16",children:[e.jsxs(b,{gap:"space-4",children:[e.jsx(I,{size:"small",level:"3",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(me,{children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(de,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(ue,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const P=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(b,{gap:"space-24",children:[e.jsx(ke,{åpneFagsak:r}),!!n&&e.jsx(K,{valgtSakslisteId:n})]});P.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Te="_gridContainer_8u6sy_1",Re="_leftColumn_8u6sy_9",Ae="_rightColumn_8u6sy_15",Oe="_sokContainer_8u6sy_28",S={gridContainer:Te,leftColumn:Re,rightColumn:Ae,sokContainer:Oe},D=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,navAnsatt:a})=>{const[t,o]=p.useState(),d=E(Q()),g=E(X());return p.useEffect(()=>{(g.isError||d.isError)&&n()},[g.isError,d.isError]),g.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[g.data&&e.jsx(le,{driftsmeldinger:g.data}),e.jsxs("div",{className:S.gridContainer,children:[e.jsxs("div",{className:S.leftColumn,children:[e.jsx(w,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:o,brukernavn:a.brukernavn}),e.jsx("div",{className:S.sokContainer,children:e.jsx(oe,{åpneFagsak:r,kanSaksbehandle:a.kanSaksbehandle||!1})})]}),e.jsx("div",{className:S.rightColumn,children:e.jsx(P,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ie=H(pe),G=n=>e.jsx(C,{value:Ie,children:e.jsx(D,{...n})});G.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ne=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:Z.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[c.FORELDREPENGER],andreKriterier:[{andreKriterierType:f.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:f.PAPIRSOKNAD,inkluder:!1}]}],je=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[f.REVURDERING_INNTEKTSMELDING]},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[]},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[]}],_e=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[f.REVURDERING_INNTEKTSMELDING]}],qe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],we=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:k().format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:k().format(v)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:k().format(v)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:k().format(v)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:k().subtract(1,"d").format(v)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:k().subtract(3,"d").format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:k().subtract(4,"d").format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:k().subtract(5,"d").format(v)}],Ke=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343"},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232"}],An={title:"SaksbehandlerIndex",decorators:[U],component:G,parameters:{layout:"fullscreen",msw:{handlers:[i.get(l.KODEVERK_LOS,()=>s.json(re)),i.get(l.DRIFTSMELDINGER,()=>s.json([])),i.get(l.SAKSLISTE,()=>s.json(Ne)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.RESERVERTE_OPPGAVER,()=>s.json(_e)),i.get(l.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(qe)),i.get(l.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(l.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(l.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),i.get("https://www.test.com/api/status",()=>s.json({status:ne.PENDING,pollIntervalMillis:1e8})),i.get("https://www.test.com/api/result",()=>s.json(je)),i.get(l.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(l.BEHANDLEDE_OPPGAVER,()=>s.json(Ke)),i.get(l.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(we)),i.get(l.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},h={args:{setLosErIkkeTilgjengelig:j("button-click"),åpneFagsak:j("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...h.parameters?.docs?.source}}};const On=["Default"];export{h as Default,On as __namedExportsOrder,An as default};
