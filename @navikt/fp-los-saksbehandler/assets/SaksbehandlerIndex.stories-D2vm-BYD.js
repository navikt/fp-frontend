import{r as M,L as v}from"./index.es-fLAwey0E.js";import{u as z,H as N,D as J,P as Q,m as $,w as W,a as O,F as c,b as u,B as b}from"./nb_NO-DPHoxgLy.js";import{d as y}from"./dayjs.min-DkLNzaWO.js";import{e as X,r as Z,f as ee,i as ne,l as re,j as te,h as i,L as l,H as s}from"./fplosSaksbehandlerApi-DuEer2SV.js";import{O as ae,A as se}from"./OppgaverTabell-VS-SDNFH.js";import"./FlyttReservasjonModal-Cf3rfn-8.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as ie}from"./alleKodeverkLos-B7zuCOtP.js";import{S as le,B as oe,A as _,K as de}from"./SakslisteVelgerForm-Dwnlg22P.js";import{r as k}from"./index-C4XKfyRp.js";import{u as f}from"./useQuery-CSGcqfX6.js";import{r as ue}from"./index.es-CoUFGOP4.js";import{u as P}from"./useMutation-B2OLOzCZ.js";import{O as ge}from"./OppgaveErReservertAvAnnenModal-Spf_4nqH.js";import{V as h,H as me}from"./VStack-CemuosBX.js";import{D as pe}from"./DriftsmeldingPanel-WgSdaPB0.js";import{F as ke}from"./FagsakSøkIndex-BLnkUmBf.js";import{N as ve}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CAs09c1P.js";import{N as ye}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-DMBAowoS.js";import{M as T}from"./message-CO5DjB6X.js";import{S as be}from"./SistBehandledeSaker-BOaxUM_S.js";import"./v4-CtRu48qb.js";import"./entry-preview-CrgSLnuq.js";import"./iframe-DXSQi7vB.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-DBfz7S1s.js";import"./Modal-DUS-TWeo.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./Loader-BgKXP878.js";import"./composeEventHandlers-DeH74NdU.js";import"./ExclamationmarkTriangleFill-Bu-2K7G-.js";import"./useLosKodeverk-Cjg7hzvY.js";import"./OppgaveHandlingerMenu-BL0fUuvB.js";import"./OppgaveReservasjonForlengetModal-CYRCTu-3.js";import"./NotatModal-njvfoD_S.js";import"./index.es-ixCiPAy2.js";import"./ChevronDown-Bq8j_cOO.js";import"./Tag-CTOQer-s.js";import"./index.es-DADNoFwu.js";import"./ChevronRight-B9GVSJ2J.js";import"./PersonHeadset-BVfLdUhm.js";import"./Table-CjEpD2qC.js";import"./ArrowsUpDown-Bj_N4ew0.js";import"./FagsakSøk-CU5IlzC0.js";import"./SøkForm-cG0VD0Ty.js";import"./PersonInfo-DY__5Uau.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-DyLEyne0.js";var ce=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const he=k.forwardRef((n,r)=>{var{title:a,titleId:t}=n,o=ce(n,["title","titleId"]);let d=z();return d=a?t||"title-"+d:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},o),a?k.createElement("title",{id:d},a):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),Se=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},Ee=(n,r)=>{window.localStorage.setItem(n,r)},fe=n=>{window.localStorage.removeItem(n)},G=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t,brukernavn:o})=>{const{mutate:d,data:g}=P({mutationFn:X});return e.jsxs(h,{gap:"8",children:[e.jsx(le,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:d,getValueFromLocalStorage:Se,setValueInLocalStorage:Ee,removeValueFromLocalStorage:fe}),t&&e.jsx(ae,{reserverOppgave:n,antallOppgaver:g,valgtSakslisteId:t,brukernavn:o})]})};G.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  saksnummer: string;
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Te=[],x=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a,brukernavn:t})=>{const[o,d]=k.useState(!1),[g,R]=k.useState(),[A,I]=k.useState(),{data:V=Te,isSuccess:H}=f(ee()),{mutateAsync:U}=P({mutationFn:Z}),C=m=>{m.status.erReservert?a(m.saksnummer,m.behandlingId):U(m.id).then(p=>{p!=null&&p.erReservert&&p.erReservertAvInnloggetBruker?a(m.saksnummer,m.behandlingId):p!=null&&p.erReservert&&!p.erReservertAvInnloggetBruker&&(d(!0),R(m),I(p))})},Y=m=>{d(!1),R(void 0),I(void 0),a(m.saksnummer,m.behandlingId)};return H?e.jsxs(e.Fragment,{children:[e.jsx(G,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:C,sakslister:V,brukernavn:t}),o&&g&&A&&e.jsx(ge,{lukkErReservertModalOgOpneOppgave:Y,oppgave:g,oppgaveStatus:A})]}):e.jsx(ue,{})};x.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Re="_iconBackground_d76i8_1",Ae="_sectorChatIcon_d76i8_8",j={iconBackground:Re,sectorChatIcon:Ae},K=({valgtSakslisteId:n})=>{const a=f(ne(n)).data;return e.jsxs(h,{gap:"4",children:[e.jsxs(me,{gap:"2",align:"center",children:[e.jsx("div",{className:j.iconBackground,children:e.jsx(he,{"aria-hidden":!0,className:j.sectorChatIcon})}),e.jsx(N,{size:"xsmall",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(oe,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(h,{gap:"4",children:[e.jsxs(h,{gap:"1",children:[e.jsx(N,{size:"small",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(J,{children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(ve,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(ye,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const F=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(h,{gap:"6",children:[e.jsx(be,{åpneFagsak:r}),n&&e.jsx(K,{valgtSakslisteId:n})]});F.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ie="_gridContainer_nw8tl_1",Ne="_leftColumn_nw8tl_9",Oe="_rightColumn_nw8tl_15",_e="_sokContainer_nw8tl_28",S={gridContainer:Ie,leftColumn:Ne,rightColumn:Oe,sokContainer:_e},L=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,navAnsatt:a})=>{const[t,o]=k.useState(),d=f(re()),g=f(te());return k.useEffect(()=>{(g.isError||d.isError)&&n()},[g.isError,d.isError]),g.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[g.data&&e.jsx(pe,{driftsmeldinger:g.data}),e.jsxs("div",{className:S.gridContainer,children:[e.jsxs("div",{className:S.leftColumn,children:[e.jsx(x,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:o,brukernavn:a.brukernavn}),e.jsx("div",{className:S.sokContainer,children:e.jsx(ke,{åpneFagsak:r,kanSaksbehandle:a.kanSaksbehandle||!1})})]}),e.jsx("div",{className:S.rightColumn,children:e.jsx(F,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const je=M($),B=n=>e.jsx(Q,{value:je,children:e.jsx(L,{...n})});B.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const qe=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:de.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[c.FORELDREPENGER],andreKriterier:[{andreKriterierType:_.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:_.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],we=[{id:1,status:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:4,status:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:3,status:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34"}],De=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:c.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Pe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Ge=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:y().format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().format(v)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:y().format(v)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:y().format(v)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:y().subtract(1,"d").format(v)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:y().subtract(3,"d").format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().subtract(4,"d").format(v)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().subtract(5,"d").format(v)}],xe=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343",behandlingStatus:b.BEHANDLING_UTREDES},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232",behandlingStatus:b.BEHANDLING_UTREDES}],Kn={title:"SaksbehandlerIndex",decorators:[W],component:B,parameters:{msw:{handlers:[i.get(l.KODEVERK_LOS,()=>s.json(ie)),i.get(l.DRIFTSMELDINGER,()=>s.json([])),i.get(l.SAKSLISTE,()=>s.json(qe)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.RESERVERTE_OPPGAVER,()=>s.json(De)),i.get(l.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(Pe)),i.get(l.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(l.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(l.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),i.get("http://www.test.com/api/status",()=>s.json({status:se.PENDING,pollIntervalMillis:1e8})),i.get("http://www.test.com/api/result",()=>s.json(we)),i.get(l.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(l.BEHANDLEDE_OPPGAVER,()=>s.json(xe)),i.get(l.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(Ge)),i.get(l.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},E={args:{setLosErIkkeTilgjengelig:O("button-click"),åpneFagsak:O("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};var q,w,D;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...(D=(w=E.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const Fn=["Default"];export{E as Default,Fn as __namedExportsOrder,Kn as default};
