import{t as J,A as k}from"./index.es-3EwiyZMP.js";import{a as j}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as y}from"./dayjs.min-CnNqAF5I.js";import{C as W,D as Z,r as $,E as X,l as ee,F as ne,c as re,Q as te,G as se,a as ae,h as i,L as u,H as a}from"./fplosSaksbehandlerApi-C1u6e_NL.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as b}from"./behandlingStatus-CZkrUkra.js";import{B as d}from"./behandlingType-BdbjGMJD.js";import{F as h}from"./fagsakYtelseType-DI8GXtVr.js";import{O as ie,u as le,E as f,A as ue}from"./OppgaverTabell-Fa5XqumB.js";import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{a as oe}from"./alleKodeverkLos-BJud6Q-i.js";import{S as de,B as ge,K as me,A as P}from"./SakslisteVelgerForm-BzSgQs9m.js";import{r as m}from"./index-DRjF_FHU.js";import{u as pe,H as G,D as ke,P as ye,m as ve}from"./nb_NO-DkvGH99a.js";import{u as E}from"./useQuery-BtA4ZZf7.js";import{F as ce}from"./index.es-CWqpEUEc.js";import{u as H}from"./useMutation-CN5FmUHR.js";import{O as be}from"./OppgaveErReservertAvAnnenModal-DOALkUbh.js";import{V as T,H as fe}from"./VStack-CdW3Cbzf.js";import{D as he}from"./DriftsmeldingPanel-CgjPk8gP.js";import{F as Te}from"./FagsakSøkIndex-Bylg27sa.js";import{N as Se}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CKd7D9rA.js";import{N as Ee}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BvuUo2MG.js";import{M as R}from"./i18n.context-BgIj-wcF.js";import{S as Re}from"./SistBehandledeSaker-DQGvwdQc.js";import"./v4-CQkTLCs1.js";import"./decorators-86JrGkCj.js";import"./BehandlingPollingTimoutModal-BeXoy05X.js";import"./Modal-B7KGXAZK.js";import"./index-rX-Bn4lm.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-Dx5zAY1I.js";import"./Loader-u69kVC_E.js";import"./ExclamationmarkTriangleFill-BUFPEGX-.js";import"./useLosKodeverk-DhGuFNqi.js";import"./OppgaveHandlingerMenu-DAhD9Kjz.js";import"./FlyttReservasjonModal-WWAz_8u0.js";import"./index.es-BwzUT_Vi.js";import"./ChevronDown-BQ_T_x8w.js";import"./Tag-CmaHDWAc.js";import"./index.es-Do5uTCa2.js";import"./OppgaveReservasjonForlengetModal-C9bVZO6z.js";import"./OpphevReservasjonModal-C985Oc_2.js";import"./useControllableState-D1SS-Ogf.js";import"./ChevronRight-DlDdfw9W.js";import"./PersonHeadset-DS6T5e4l.js";import"./Table-C0h4kdcm.js";import"./ArrowsUpDown-EU060NhG.js";import"./FagsakSøk-BdpuzzAM.js";import"./SøkForm-CA8znY4h.js";import"./PersonInfo-CnK-lati.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-BpFXDeAS.js";var Ie=function(){return null},Ae=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(s[t[l]]=n[t[l]]);return s};const qe=m.forwardRef((n,r)=>{var{title:s,titleId:t}=n,l=Ae(n,["title","titleId"]);let o=pe();return o=s?t||"title-"+o:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":o},l),s?m.createElement("title",{id:o},s):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),Ne=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},Oe=(n,r)=>{window.localStorage.setItem(n,r)},_e=n=>{window.localStorage.removeItem(n)},I=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:s,valgtSakslisteId:t})=>{const{mutate:l,data:o}=H({mutationFn:W});return e.jsxs(T,{gap:"8",children:[e.jsx(de,{sakslister:r,setValgtSakslisteId:s,fetchAntallOppgaver:l,getValueFromLocalStorage:Ne,setValueInLocalStorage:Oe,removeValueFromLocalStorage:_e}),t&&e.jsx(ie,{reserverOppgave:n,antallOppgaver:o,valgtSakslisteId:t})]})};I.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const we=[],A=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:s})=>{const[t,l]=m.useState(!1),[o,p]=m.useState(),[w,D]=m.useState(),{data:C=we,isSuccess:Y}=E(Z()),{mutateAsync:Q}=H({mutationFn:$}),M=g=>{g.status.erReservert?s(g.saksnummer.toString(),g.behandlingId):Q(g.id).then(c=>{c&&c.erReservert&&c.erReservertAvInnloggetBruker?s(g.saksnummer.toString(),g.behandlingId):c&&c.erReservert&&!c.erReservertAvInnloggetBruker&&(l(!0),p(g),D(c))})},z=g=>{l(!1),p(void 0),D(void 0),s(g.saksnummer.toString(),g.behandlingId)};return Y?e.jsxs(e.Fragment,{children:[e.jsx(I,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:M,sakslister:C}),t&&o&&w&&e.jsx(be,{lukkErReservertModalOgOpneOppgave:z,oppgave:o,oppgaveStatus:w})]}):e.jsx(ce,{})};A.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const De="_iconBackground_d76i8_1",je="_sectorChatIcon_d76i8_8",F={iconBackground:De,sectorChatIcon:je},q=({valgtSakslisteId:n})=>{const s=E(X(n)).data;return e.jsxs(T,{gap:"4",children:[e.jsxs(fe,{gap:"2",align:"center",children:[e.jsx("div",{className:F.iconBackground,children:e.jsx(qe,{"aria-hidden":!0,className:F.sectorChatIcon})}),e.jsx(G,{size:"xsmall",children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(ge,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(T,{gap:"4",children:[e.jsxs(T,{gap:"1",children:[e.jsx(G,{size:"small",children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(ke,{children:e.jsx(R,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(Se,{height:250,nyeOgFerdigstilteOppgaver:s}),e.jsx(Ee,{height:250,nyeOgFerdigstilteOppgaver:s})]})})]})};q.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const N=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(T,{gap:"6",children:[e.jsx(Re,{åpneFagsak:r}),n&&e.jsx(q,{valgtSakslisteId:n})]});N.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Pe="_gridContainer_nw8tl_1",Ge="_leftColumn_nw8tl_9",Fe="_rightColumn_nw8tl_15",xe="_sokContainer_nw8tl_28",S={gridContainer:Pe,leftColumn:Ge,rightColumn:Fe,sokContainer:xe},O=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:s})=>{const[t,l]=m.useState(),o=E(ee()),p=E(ne());return m.useEffect(()=>{(p.isError||o.isError)&&n()},[p.isError,o.isError]),p.isPending||o.isPending?null:e.jsxs(e.Fragment,{children:[p.data&&e.jsx(he,{driftsmeldinger:p.data}),e.jsxs("div",{className:S.gridContainer,children:[e.jsxs("div",{className:S.leftColumn,children:[e.jsx(A,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:l}),e.jsx("div",{className:S.sokContainer,children:e.jsx(Te,{åpneFagsak:r,kanSaksbehandle:s})})]}),e.jsx("div",{className:S.rightColumn,children:e.jsx(N,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};O.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ke=J(ve),Le=n=>new te({defaultOptions:{queries:{retry:3,staleTime:100}},queryCache:new se({onError:r=>{var s,t;r instanceof ae?r.response.status===403?n({type:f.REQUEST_FORBIDDEN,feilmelding:r.message}):r.response.status===401?n({type:f.REQUEST_UNAUTHORIZED,feilmelding:r.message}):r.response.status===504||r.response.status===404?n({type:f.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND,location:(t=(s=r.response)==null?void 0:s.config)==null?void 0:t.url}):n({type:f.REQUEST_ERROR,feilmelding:r.message}):n({type:f.REQUEST_ERROR,feilmelding:r.message})}})}),_=n=>{const{addErrorMessage:r}=le(),s=m.useMemo(()=>Le(r),[]);return e.jsx(ye,{value:Ke,children:e.jsxs(re,{client:s,children:[e.jsx(Ie,{}),e.jsx(O,{...n})]})})};_.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const Ue=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:me.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[h.FORELDREPENGER],andreKriterier:[{andreKriterierType:P.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:P.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Be=[{id:1,status:{erReservert:!1},saksnummer:46435,personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:h.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:4,status:{erReservert:!1},saksnummer:43546,personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:h.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:3,status:{erReservert:!1},saksnummer:35344,personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:h.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34"}],Ve=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:23233,personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:b.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:h.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],He=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Ce=[{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:y().format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().format(k)},{behandlingType:d.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:y().format(k)},{behandlingType:d.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:y().format(k)},{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:y().subtract(1,"d").format(k)},{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:y().subtract(3,"d").format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().subtract(4,"d").format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().subtract(5,"d").format(k)}],Ye=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:54343,behandlingStatus:b.BEHANDLING_UTREDES},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:13232,behandlingStatus:b.BEHANDLING_UTREDES}],Qn={title:"SaksbehandlerIndex",component:_,parameters:{msw:{handlers:[i.get(u.KODEVERK_LOS,()=>a.json(oe)),i.get(u.DRIFTSMELDINGER,()=>a.json([])),i.get(u.SAKSLISTE,()=>a.json(Ue)),i.get(u.RESERVER_OPPGAVE,()=>new a(null,{status:200})),i.get(u.RESERVERTE_OPPGAVER,()=>a.json(Ve)),i.get(u.SAKSLISTE_SAKSBEHANDLERE,()=>a.json(He)),i.get(u.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>a.json(100)),i.get(u.RESERVER_OPPGAVE,()=>new a(null,{status:200})),i.get(u.SØK_FAGSAK,()=>new a(null,{status:200})),i.get(u.OPPGAVER_FOR_FAGSAKER,()=>new a(null,{status:200})),i.get(u.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new a(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new a(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),i.get("http://www.test.com/api/status",()=>a.json({status:ue.PENDING,pollIntervalMillis:1e8})),i.get("http://www.test.com/api/result",()=>a.json(Be)),i.get(u.HENT_RESERVASJONSSTATUS,()=>new a(null,{status:200})),i.get(u.BEHANDLEDE_OPPGAVER,()=>a.json(Ye)),i.get(u.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>a.json(Ce)),i.get(u.FORLENG_OPPGAVERESERVASJON,()=>new a(null,{status:200}))]}}},v={args:{setLosErIkkeTilgjengelig:j("button-click"),åpneFagsak:j("button-click"),kanSaksbehandle:!0}};var x,K,L;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var U,B,V;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(V=(B=v.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const Mn=["Default"];export{v as Default,Mn as __namedExportsOrder,Qn as default};
