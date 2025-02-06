import{n as J,A as k}from"./index.es-Oir7ntzC.js";import{u as Q,H as j,D as $,P as W,m as X,B as d,F as f,a as c,w as Z,b as D}from"./nb_NO-BYGbsT6l.js";import{d as y}from"./dayjs.min-DPY8FYmS.js";import{e as ee,f as ne,r as re,i as te,l as ae,j as se,h as i,L as u,H as s}from"./fplosSaksbehandlerApi-DDGYBxmk.js";import{O as ie,A as le}from"./OppgaverTabell-Dc3zRzq0.js";import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as ue}from"./alleKodeverkLos-BJud6Q-i.js";import{S as oe,B as de,K as ge,A as P}from"./SakslisteVelgerForm-DthCqBoA.js";import{r as m}from"./index-CYQpqK1Q.js";import{u as T}from"./useQuery-DYa1HZcQ.js";import{H as me}from"./index.es-DPNFMOBT.js";import{u as V}from"./useMutation-YqKCuZDf.js";import{O as pe}from"./OppgaveErReservertAvAnnenModal-SIg-ejr6.js";import{V as h,H as ke}from"./VStack-Sghrg9mH.js";import{D as ye}from"./DriftsmeldingPanel-CW0KL9wM.js";import{F as ve}from"./FagsakSøkIndex-rBVHzYs2.js";import{N as be}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CES6ZgmB.js";import{N as ce}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-DaiNo0eF.js";import{M as E}from"./i18n.hooks-DZJ3QBwu.js";import{S as fe}from"./SistBehandledeSaker-CIeJz4mn.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./decorators-DIzpaN6C.js";import"./BehandlingPollingTimoutModal-DPRCPBxP.js";import"./Modal-By8NA2ZM.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./Theme-BXEeAfCw.js";import"./composeEventHandlers-BV8udL3-.js";import"./Loader-4V9-7aC0.js";import"./ExclamationmarkTriangleFill-qF-8OP1U.js";import"./useLosKodeverk-oiZakLeg.js";import"./OppgaveHandlingerMenu-DaiVL0je.js";import"./FlyttReservasjonModal-CYQ14skS.js";import"./index.es-C51w1ppP.js";import"./ChevronDown-uwrqHOC-.js";import"./Tag-C7hOq85r.js";import"./index.es-DBgwmCXz.js";import"./OppgaveReservasjonForlengetModal-D0sGgGXm.js";import"./OpphevReservasjonModal-DwPjLq2v.js";import"./useControllableState-CkkJgyUV.js";import"./ChevronRight-CE_e6gvd.js";import"./PersonHeadset-DXj60aiT.js";import"./Table-CZEqzMbv.js";import"./ArrowsUpDown-BKrPfL8l.js";import"./FagsakSøk-CPgtbtVR.js";import"./SøkForm-BBa8WA2e.js";import"./PersonInfo-CRB1pkvi.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-THb559xs.js";var he=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(a[t[l]]=n[t[l]]);return a};const Se=m.forwardRef((n,r)=>{var{title:a,titleId:t}=n,l=he(n,["title","titleId"]);let o=Q();return o=a?t||"title-"+o:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":o},l),a?m.createElement("title",{id:o},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),Te=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},Ee=(n,r)=>{window.localStorage.setItem(n,r)},Ie=n=>{window.localStorage.removeItem(n)},I=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t})=>{const{mutate:l,data:o}=V({mutationFn:ee});return e.jsxs(h,{gap:"8",children:[e.jsx(oe,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:l,getValueFromLocalStorage:Te,setValueInLocalStorage:Ee,removeValueFromLocalStorage:Ie}),t&&e.jsx(ie,{reserverOppgave:n,antallOppgaver:o,valgtSakslisteId:t})]})};I.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const Re=[],R=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a})=>{const[t,l]=m.useState(!1),[o,p]=m.useState(),[w,_]=m.useState(),{data:H=Re,isSuccess:C}=T(ne()),{mutateAsync:Y}=V({mutationFn:re}),M=g=>{g.status.erReservert?a(g.saksnummer.toString(),g.behandlingId):Y(g.id).then(b=>{b&&b.erReservert&&b.erReservertAvInnloggetBruker?a(g.saksnummer.toString(),g.behandlingId):b&&b.erReservert&&!b.erReservertAvInnloggetBruker&&(l(!0),p(g),_(b))})},z=g=>{l(!1),p(void 0),_(void 0),a(g.saksnummer.toString(),g.behandlingId)};return C?e.jsxs(e.Fragment,{children:[e.jsx(I,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:M,sakslister:H}),t&&o&&w&&e.jsx(pe,{lukkErReservertModalOgOpneOppgave:z,oppgave:o,oppgaveStatus:w})]}):e.jsx(me,{})};R.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ae="_iconBackground_d76i8_1",qe="_sectorChatIcon_d76i8_8",G={iconBackground:Ae,sectorChatIcon:qe},A=({valgtSakslisteId:n})=>{const a=T(te(n)).data;return e.jsxs(h,{gap:"4",children:[e.jsxs(ke,{gap:"2",align:"center",children:[e.jsx("div",{className:G.iconBackground,children:e.jsx(Se,{"aria-hidden":!0,className:G.sectorChatIcon})}),e.jsx(j,{size:"xsmall",children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(de,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(h,{gap:"4",children:[e.jsxs(h,{gap:"1",children:[e.jsx(j,{size:"small",children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx($,{children:e.jsx(E,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(be,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(ce,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};A.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const q=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(h,{gap:"6",children:[e.jsx(fe,{åpneFagsak:r}),n&&e.jsx(A,{valgtSakslisteId:n})]});q.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};q.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ne="_gridContainer_nw8tl_1",Oe="_leftColumn_nw8tl_9",we="_rightColumn_nw8tl_15",_e="_sokContainer_nw8tl_28",S={gridContainer:Ne,leftColumn:Oe,rightColumn:we,sokContainer:_e},N=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:a})=>{const[t,l]=m.useState(),o=T(ae()),p=T(se());return m.useEffect(()=>{(p.isError||o.isError)&&n()},[p.isError,o.isError]),p.isPending||o.isPending?null:e.jsxs(e.Fragment,{children:[p.data&&e.jsx(ye,{driftsmeldinger:p.data}),e.jsxs("div",{className:S.gridContainer,children:[e.jsxs("div",{className:S.leftColumn,children:[e.jsx(R,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:l}),e.jsx("div",{className:S.sokContainer,children:e.jsx(ve,{åpneFagsak:r,kanSaksbehandle:a})})]}),e.jsx("div",{className:S.rightColumn,children:e.jsx(q,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};N.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const je=J(X),O=n=>e.jsx(W,{value:je,children:e.jsx(N,{...n})});O.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};O.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const De=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:ge.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[f.FORELDREPENGER],andreKriterier:[{andreKriterierType:P.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:P.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Pe=[{id:1,status:{erReservert:!1},saksnummer:46435,personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:c.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:f.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:4,status:{erReservert:!1},saksnummer:43546,personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:c.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:f.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:3,status:{erReservert:!1},saksnummer:35344,personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:c.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:f.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34"}],Ge=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:23233,personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:c.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:f.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Fe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Ke=[{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:y().format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().format(k)},{behandlingType:d.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:y().format(k)},{behandlingType:d.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:y().format(k)},{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:y().subtract(1,"d").format(k)},{behandlingType:d.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:y().subtract(3,"d").format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().subtract(4,"d").format(k)},{behandlingType:d.KLAGE,antallNye:23,antallFerdigstilte:2,dato:y().subtract(5,"d").format(k)}],xe=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:54343,behandlingStatus:c.BEHANDLING_UTREDES},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:13232,behandlingStatus:c.BEHANDLING_UTREDES}],Fn={title:"SaksbehandlerIndex",decorators:[Z],component:O,parameters:{msw:{handlers:[i.get(u.KODEVERK_LOS,()=>s.json(ue)),i.get(u.DRIFTSMELDINGER,()=>s.json([])),i.get(u.SAKSLISTE,()=>s.json(De)),i.get(u.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(u.RESERVERTE_OPPGAVER,()=>s.json(Ge)),i.get(u.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(Fe)),i.get(u.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(u.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(u.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(u.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(u.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),i.get("http://www.test.com/api/status",()=>s.json({status:le.PENDING,pollIntervalMillis:1e8})),i.get("http://www.test.com/api/result",()=>s.json(Pe)),i.get(u.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(u.BEHANDLEDE_OPPGAVER,()=>s.json(xe)),i.get(u.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(Ke)),i.get(u.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},v={args:{setLosErIkkeTilgjengelig:D("button-click"),åpneFagsak:D("button-click"),kanSaksbehandle:!0}};var F,K,x;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(x=(K=v.parameters)==null?void 0:K.docs)==null?void 0:x.source}}};var L,B,U;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(U=(B=v.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};const Kn=["Default"];export{v as Default,Kn as __namedExportsOrder,Fn as default};
