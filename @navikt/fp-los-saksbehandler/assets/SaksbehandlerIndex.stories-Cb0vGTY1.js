import{r as C,P as k}from"./index.es-4WxVYNvl.js";import{r as p,j as e,T as H,P as U,w as Y,F as c,B as u,d as v}from"./iframe-Dc6WjnWo.js";import{g as M,r as z,s as J,h as Q,l as X,d as $,a as i,L as l,H as s}from"./fplosSaksbehandlerApi-BwDS3LvX.js";import{S as W,B as Z,K as ee}from"./SakslisteVelgerForm-B4ZukKJ7.js";import{A as f}from"./andreKriterierType-Cg0VWsVP.js";import{L as ne,A as re}from"./LedigOppgaveTabell-C0OeSyaJ.js";import"./FlyttReservasjonModal-DBSEFBNI.js";import{a as te}from"./alleKodeverkLos-DeeW-5p1.js";import{u as T}from"./useQuery-DtedCcJP.js";import{X as ae}from"./index.es-o0NI92HH.js";import{u as _}from"./useMutation-BB6mGpZK.js";import{O as se}from"./OppgaveErReservertAvAnnenModal-BHmbQ0Ey.js";import{R as ie}from"./ReservertOppgaveTabell-BoCLNNY5.js";import{V as b,H as le}from"./VStack-BG5ATSqi.js";import{D as oe}from"./DriftsmeldingPanel-DFaSfAMS.js";import{F as de}from"./FagsakSøkIndex-B59JT3yF.js";import{N as ue}from"./NyeOgFerdigstilteOppgaverForIdagPanel-DqNqQJOX.js";import{N as ge}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-DFPa598w.js";import{u as me,H as I,D as pe,m as ke}from"./nb_NO-D9cqHkss.js";import{M as E}from"./Loader-DXE6yoYN.js";import{S as ve}from"./SistBehandledeSaker-Cd3W3TMK.js";import"./index.es-_rKQaDeE.js";import"./Modal-CGoe-XOg.js";import"./index-CUTgaLrl.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-D9tTO_2Z.js";import"./Tag-DGSMr0Yb.js";import"./useLosKodeverk-BLXnXWbv.js";import"./ArrowsUpDown-D1X4zsFg.js";import"./PersonHeadset-BCoJYMpz.js";import"./BehandlingPollingTimoutModal-CSkd_kyR.js";import"./ExclamationmarkTriangleFill-BbOjzAT3.js";import"./OppgaveLabels-BLCuW_kl.js";import"./Portal-CEoy3HnG.js";import"./Table-CAoV-ziP.js";import"./index.es-BTpr_XSX.js";import"./OppgaveHandlingerMenu-BnM6H_Ou.js";import"./OppgaveReservasjonForlengetModal-C-z606lL.js";import"./NotatModal-U4Ysp8Yn.js";import"./ChevronRight-BLRlxiMo.js";import"./FagsakSøk-CAhQjSp-.js";import"./SøkForm-3xUnfVyh.js";import"./PersonInfo-BPgczQO9.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-CLkJSZYr.js";var ye=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const ce=p.forwardRef((n,r)=>{var{title:a,titleId:t}=n,o=ye(n,["title","titleId"]);let d=me();return d=a?t||"title-"+d:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},o),a?p.createElement("title",{id:d},a):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),be=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},he=(n,r)=>{window.localStorage.setItem(n,r)},Se=n=>{window.localStorage.removeItem(n)},w=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t,brukernavn:o})=>{const{mutate:d,data:g}=_({mutationFn:M});return e.jsxs(b,{gap:"space-32",children:[e.jsx(W,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:d,getValueFromLocalStorage:be,setValueInLocalStorage:he,removeValueFromLocalStorage:Se}),!!t&&e.jsx(ne,{reserverOppgave:n,antallOppgaver:g,valgtSakslisteId:t}),e.jsx(ie,{reserverOppgave:n,brukernavn:o})]})};w.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const fe=[],q=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a,brukernavn:t})=>{const[o,d]=p.useState(!1),[g,R]=p.useState(),[A,O]=p.useState(),{data:x=fe,isSuccess:F}=T(J()),{mutateAsync:L}=_({mutationFn:z}),V=m=>{m.reservasjonStatus.erReservert?a(m.saksnummer,m.behandlingId):L(m.id).then(y=>{y?.erReservert&&y.erReservertAvInnloggetBruker?a(m.saksnummer,m.behandlingId):y?.erReservert&&!y.erReservertAvInnloggetBruker&&(d(!0),R(m),O(y))})},B=m=>{d(!1),R(void 0),O(void 0),a(m.saksnummer,m.behandlingId)};return F?e.jsxs(e.Fragment,{children:[e.jsx(w,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:V,sakslister:x,brukernavn:t}),o&&g&&A&&e.jsx(se,{lukkErReservertModalOgOpneOppgave:B,oppgave:g,reservasjonStatus:A})]}):e.jsx(ae,{})};q.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Te="_iconBackground_d76i8_1",Ee="_sectorChatIcon_d76i8_8",N={iconBackground:Te,sectorChatIcon:Ee},K=({valgtSakslisteId:n})=>{const a=T(Q(n)).data;return e.jsxs(b,{gap:"space-16",children:[e.jsxs(le,{gap:"space-8",align:"center",children:[e.jsx("div",{className:N.iconBackground,children:e.jsx(ce,{"aria-hidden":!0,className:N.sectorChatIcon})}),e.jsx(I,{size:"xsmall",level:"2",children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(Z.New,{padding:"4",borderRadius:"large",children:e.jsxs(b,{gap:"space-16",children:[e.jsxs(b,{gap:"space-4",children:[e.jsx(I,{size:"small",level:"3",children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(pe,{children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(ue,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(ge,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const P=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(b,{gap:"space-24",children:[e.jsx(ve,{åpneFagsak:r}),!!n&&e.jsx(K,{valgtSakslisteId:n})]});P.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Re="_gridContainer_nw8tl_1",Ae="_leftColumn_nw8tl_9",Oe="_rightColumn_nw8tl_15",Ie="_sokContainer_nw8tl_28",h={gridContainer:Re,leftColumn:Ae,rightColumn:Oe,sokContainer:Ie},D=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,navAnsatt:a})=>{const[t,o]=p.useState(),d=T(X()),g=T($());return p.useEffect(()=>{(g.isError||d.isError)&&n()},[g.isError,d.isError]),g.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[g.data&&e.jsx(oe,{driftsmeldinger:g.data}),e.jsxs("div",{className:h.gridContainer,children:[e.jsxs("div",{className:h.leftColumn,children:[e.jsx(q,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:o,brukernavn:a.brukernavn}),e.jsx("div",{className:h.sokContainer,children:e.jsx(de,{åpneFagsak:r,kanSaksbehandle:a.kanSaksbehandle||!1})})]}),e.jsx("div",{className:h.rightColumn,children:e.jsx(P,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ne=C(ke),G=n=>e.jsx(H,{theme:"light",children:e.jsx(U,{value:Ne,children:e.jsx(D,{...n})})});G.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,je=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:ee.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[c.FORELDREPENGER],andreKriterier:[{andreKriterierType:f.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:f.PAPIRSOKNAD,inkluder:!1}]}],_e=[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[f.REVURDERING_INNTEKTSMELDING]},{id:4,reservasjonStatus:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[]},{id:3,reservasjonStatus:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[]}],we=[{id:2,reservasjonStatus:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[f.REVURDERING_INNTEKTSMELDING]}],qe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Ke=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().format(k)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().format(k)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:v().format(k)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:v().format(k)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().subtract(1,"d").format(k)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:v().subtract(3,"d").format(k)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(4,"d").format(k)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(5,"d").format(k)}],Pe=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343"},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232"}],In={title:"SaksbehandlerIndex",decorators:[Y],component:G,parameters:{layout:"fullscreen",msw:{handlers:[i.get(l.KODEVERK_LOS,()=>s.json(te)),i.get(l.DRIFTSMELDINGER,()=>s.json([])),i.get(l.SAKSLISTE,()=>s.json(je)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.RESERVERTE_OPPGAVER,()=>s.json(we)),i.get(l.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(qe)),i.get(l.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(l.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(l.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),i.get("https://www.test.com/api/status",()=>s.json({status:re.PENDING,pollIntervalMillis:1e8})),i.get("https://www.test.com/api/result",()=>s.json(_e)),i.get(l.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(l.BEHANDLEDE_OPPGAVER,()=>s.json(Pe)),i.get(l.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(Ke)),i.get(l.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},S={args:{setLosErIkkeTilgjengelig:j("button-click"),åpneFagsak:j("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...S.parameters?.docs?.source}}};const Nn=["Default"];export{S as Default,Nn as __namedExportsOrder,In as default};
