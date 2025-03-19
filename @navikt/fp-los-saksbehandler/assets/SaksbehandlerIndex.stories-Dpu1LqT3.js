import{n as Y,A as c}from"./index.es-BaPUCL-j.js";import{u as M,H as I,D as z,P as Q,m as J,w as $,a as N,F as b,b as u,B as y}from"./nb_NO-D5BoiruS.js";import{d as v}from"./dayjs.min-DkLNzaWO.js";import{e as W,r as X,f as Z,i as ee,l as ne,j as re,h as i,L as o,H as a}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import{O as te,A as se}from"./OppgaverTabell-DOzktYjx.js";import"./FlyttReservasjonModal-BIXFrmk2.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as ae}from"./alleKodeverkLos-BJud6Q-i.js";import{S as ie,B as le,A as O,K as oe}from"./SakslisteVelgerForm-DCCjrUpO.js";import{r as p}from"./index-_2TAQcTa.js";import{u as f}from"./useQuery-XWOB3omU.js";import{Q as de}from"./index.es-C0BzJgs1.js";import{u as P}from"./useMutation-CKMiWPIv.js";import{O as ue}from"./OppgaveErReservertAvAnnenModal-qqWckd7U.js";import{V as S,H as ge}from"./VStack-Ce4ft6wJ.js";import{D as me}from"./DriftsmeldingPanel-SqdQo5ZK.js";import{F as pe}from"./FagsakSøkIndex-BuiX5dfl.js";import{N as ke}from"./NyeOgFerdigstilteOppgaverForIdagPanel-DUN0gecu.js";import{N as ce}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BVpmCIng.js";import{M as T}from"./message-BouI_SPW.js";import{S as ve}from"./SistBehandledeSaker-B5fwRjef.js";import"./v4-CtRu48qb.js";import"./entry-preview-Dcx6BmhF.js";import"./iframe-Dv7l50OD.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./decorators-Bnaor6Ku.js";import"./BehandlingPollingTimoutModal-Bu8UqJSa.js";import"./Modal-dd3On5of.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Loader-By1_U74f.js";import"./composeEventHandlers-DeH74NdU.js";import"./ExclamationmarkTriangleFill-DQ4yHqEd.js";import"./useLosKodeverk-Bl6OpTUE.js";import"./OppgaveHandlingerMenu-BbwEvA9v.js";import"./OppgaveReservasjonForlengetModal-Cn3TZjVq.js";import"./OpphevReservasjonModal-B-xZioIa.js";import"./index.es-C76FtvjE.js";import"./ChevronDown-mJ53sRRq.js";import"./Tag-CsCg1PnF.js";import"./index.es-DmjSdF6B.js";import"./ChevronRight-COqlgc6d.js";import"./PersonHeadset-CNcjPvIc.js";import"./Table-D9A5KazY.js";import"./ArrowsUpDown-CxGpT92a.js";import"./FagsakSøk--eJigbO6.js";import"./SøkForm-CvkI_8wc.js";import"./PersonInfo-ghHqwlAJ.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-C38KbkTW.js";var ye=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(s[t[l]]=n[t[l]]);return s};const be=p.forwardRef((n,r)=>{var{title:s,titleId:t}=n,l=ye(n,["title","titleId"]);let d=M();return d=s?t||"title-"+d:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},l),s?p.createElement("title",{id:d},s):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),Se=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},he=(n,r)=>{window.localStorage.setItem(n,r)},Ee=n=>{window.localStorage.removeItem(n)},G=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:s,valgtSakslisteId:t})=>{const{mutate:l,data:d}=P({mutationFn:W});return e.jsxs(S,{gap:"8",children:[e.jsx(ie,{sakslister:r,setValgtSakslisteId:s,fetchAntallOppgaver:l,getValueFromLocalStorage:Se,setValueInLocalStorage:he,removeValueFromLocalStorage:Ee}),t&&e.jsx(te,{reserverOppgave:n,antallOppgaver:d,valgtSakslisteId:t})]})};G.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const fe=[],q=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:s})=>{const[t,l]=p.useState(!1),[d,k]=p.useState(),[R,A]=p.useState(),{data:B=fe,isSuccess:V}=f(Z()),{mutateAsync:H}=P({mutationFn:X}),U=g=>{g.status.erReservert?s(g.saksnummer.toString(),g.behandlingId):H(g.id).then(m=>{m!=null&&m.erReservert&&m.erReservertAvInnloggetBruker?s(g.saksnummer.toString(),g.behandlingId):m!=null&&m.erReservert&&!m.erReservertAvInnloggetBruker&&(l(!0),k(g),A(m))})},C=g=>{l(!1),k(void 0),A(void 0),s(g.saksnummer.toString(),g.behandlingId)};return V?e.jsxs(e.Fragment,{children:[e.jsx(G,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:U,sakslister:B}),t&&d&&R&&e.jsx(ue,{lukkErReservertModalOgOpneOppgave:C,oppgave:d,oppgaveStatus:R})]}):e.jsx(de,{})};q.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Te="_iconBackground_d76i8_1",Re="_sectorChatIcon_d76i8_8",_={iconBackground:Te,sectorChatIcon:Re},x=({valgtSakslisteId:n})=>{const s=f(ee(n)).data;return e.jsxs(S,{gap:"4",children:[e.jsxs(ge,{gap:"2",align:"center",children:[e.jsx("div",{className:_.iconBackground,children:e.jsx(be,{"aria-hidden":!0,className:_.sectorChatIcon})}),e.jsx(I,{size:"xsmall",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(le,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(S,{gap:"4",children:[e.jsxs(S,{gap:"1",children:[e.jsx(I,{size:"small",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(z,{children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(ke,{height:250,nyeOgFerdigstilteOppgaver:s}),e.jsx(ce,{height:250,nyeOgFerdigstilteOppgaver:s})]})})]})};x.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const F=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(S,{gap:"6",children:[e.jsx(ve,{åpneFagsak:r}),n&&e.jsx(x,{valgtSakslisteId:n})]});F.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ae="_gridContainer_nw8tl_1",Ie="_leftColumn_nw8tl_9",Ne="_rightColumn_nw8tl_15",Oe="_sokContainer_nw8tl_28",h={gridContainer:Ae,leftColumn:Ie,rightColumn:Ne,sokContainer:Oe},K=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:s})=>{const[t,l]=p.useState(),d=f(ne()),k=f(re());return p.useEffect(()=>{(k.isError||d.isError)&&n()},[k.isError,d.isError]),k.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[k.data&&e.jsx(me,{driftsmeldinger:k.data}),e.jsxs("div",{className:h.gridContainer,children:[e.jsxs("div",{className:h.leftColumn,children:[e.jsx(q,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:l}),e.jsx("div",{className:h.sokContainer,children:e.jsx(pe,{åpneFagsak:r,kanSaksbehandle:s})})]}),e.jsx("div",{className:h.rightColumn,children:e.jsx(F,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const _e=Y(J),L=n=>e.jsx(Q,{value:_e,children:e.jsx(K,{...n})});L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const je=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:oe.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[b.FORELDREPENGER],andreKriterier:[{andreKriterierType:O.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:O.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],De=[{id:1,status:{erReservert:!1},saksnummer:46435,personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:4,status:{erReservert:!1},saksnummer:43546,personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:3,status:{erReservert:!1},saksnummer:35344,personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34"}],we=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:23233,personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Pe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Ge=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().format(c)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().format(c)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:v().format(c)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:v().format(c)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().subtract(1,"d").format(c)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:v().subtract(3,"d").format(c)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(4,"d").format(c)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(5,"d").format(c)}],qe=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:54343,behandlingStatus:y.BEHANDLING_UTREDES},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:13232,behandlingStatus:y.BEHANDLING_UTREDES}],xn={title:"SaksbehandlerIndex",decorators:[$],component:L,parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>a.json(ae)),i.get(o.DRIFTSMELDINGER,()=>a.json([])),i.get(o.SAKSLISTE,()=>a.json(je)),i.get(o.RESERVER_OPPGAVE,()=>new a(null,{status:200})),i.get(o.RESERVERTE_OPPGAVER,()=>a.json(we)),i.get(o.SAKSLISTE_SAKSBEHANDLERE,()=>a.json(Pe)),i.get(o.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>a.json(100)),i.get(o.RESERVER_OPPGAVE,()=>new a(null,{status:200})),i.get(o.SØK_FAGSAK,()=>new a(null,{status:200})),i.get(o.OPPGAVER_FOR_FAGSAKER,()=>new a(null,{status:200})),i.get(o.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new a(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new a(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),i.get("http://www.test.com/api/status",()=>a.json({status:se.PENDING,pollIntervalMillis:1e8})),i.get("http://www.test.com/api/result",()=>a.json(De)),i.get(o.HENT_RESERVASJONSSTATUS,()=>new a(null,{status:200})),i.get(o.BEHANDLEDE_OPPGAVER,()=>a.json(qe)),i.get(o.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>a.json(Ge)),i.get(o.FORLENG_OPPGAVERESERVASJON,()=>new a(null,{status:200}))]}}},E={args:{setLosErIkkeTilgjengelig:N("button-click"),åpneFagsak:N("button-click"),kanSaksbehandle:!0}};var j,D,w;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(w=(D=E.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const Fn=["Default"];export{E as Default,Fn as __namedExportsOrder,xn as default};
