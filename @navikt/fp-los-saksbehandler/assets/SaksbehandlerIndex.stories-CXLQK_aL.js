import{n as Y,A as k}from"./index.es-D3FSeQNG.js";import{u as M,H as I,D as z,P as J,m as Q,w as $,a as N,F as b,b as u,B as y}from"./nb_NO-DWNE31-V.js";import{d as c}from"./dayjs.min-DkLNzaWO.js";import{e as W,r as X,f as Z,i as ee,l as ne,j as re,h as i,L as o,H as a}from"./fplosSaksbehandlerApi-Cre-4QqW.js";import{O as te,A as se}from"./OppgaverTabell-bEE-xs8y.js";import"./FlyttReservasjonModal-DR-grkU3.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as ae}from"./alleKodeverkLos-BJud6Q-i.js";import{S as ie,B as le,A as O,K as oe}from"./SakslisteVelgerForm-Fp0vXEPy.js";import{r as m}from"./index-_2TAQcTa.js";import{u as f}from"./useQuery-DtoCMJ0c.js";import{M as de}from"./index.es-C_rfKMWM.js";import{u as P}from"./useMutation-DBboi6Z6.js";import{O as ue}from"./OppgaveErReservertAvAnnenModal-CQwthu5w.js";import{V as S,H as ge}from"./VStack-ChXOQS5S.js";import{D as me}from"./DriftsmeldingPanel-Bazs_Cla.js";import{F as pe}from"./FagsakSøkIndex-DRuiRPjI.js";import{N as ke}from"./NyeOgFerdigstilteOppgaverForIdagPanel-DRXEuOdo.js";import{N as ce}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-BueFphSa.js";import{M as T}from"./Loader-BEUEYYSz.js";import{S as ve}from"./SistBehandledeSaker-kMcYWBdL.js";import"./v4-CtRu48qb.js";import"./react-CW7BwjjX.js";import"./iframe-DccoT9Gw.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./decorators-DIzpaN6C.js";import"./BehandlingPollingTimoutModal-Cx4CV8Wa.js";import"./Modal-pQ8dwEsS.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Theme-YhT-kHwE.js";import"./composeEventHandlers-DeH74NdU.js";import"./ExclamationmarkTriangleFill-Bo1OpRGD.js";import"./useLosKodeverk-Bmlax4dZ.js";import"./OppgaveHandlingerMenu-fekDLT3t.js";import"./OppgaveReservasjonForlengetModal-DE280glQ.js";import"./OpphevReservasjonModal-DhHkqCB1.js";import"./index.es-DnPrejCa.js";import"./ChevronDown-BmshD2bD.js";import"./Tag-DBYrLKdR.js";import"./index.es-DMpIgZpl.js";import"./useControllableState-CHQ7MfKR.js";import"./ChevronRight-C181dsaH.js";import"./PersonHeadset-PmqLz_Yg.js";import"./Table-BQgRrE4Z.js";import"./ArrowsUpDown-DJb9rXXD.js";import"./FagsakSøk-BlFUNRDP.js";import"./SøkForm-CZWhALke.js";import"./PersonInfo-1CW4tXVs.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-DeoMJhyz.js";var ye=function(n,r){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(n);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(n,t[l])&&(s[t[l]]=n[t[l]]);return s};const be=m.forwardRef((n,r)=>{var{title:s,titleId:t}=n,l=ye(n,["title","titleId"]);let d=M();return d=s?t||"title-"+d:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},l),s?m.createElement("title",{id:d},s):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),Se=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},he=(n,r)=>{window.localStorage.setItem(n,r)},Ee=n=>{window.localStorage.removeItem(n)},G=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:s,valgtSakslisteId:t})=>{const{mutate:l,data:d}=P({mutationFn:W});return e.jsxs(S,{gap:"8",children:[e.jsx(ie,{sakslister:r,setValgtSakslisteId:s,fetchAntallOppgaver:l,getValueFromLocalStorage:Se,setValueInLocalStorage:he,removeValueFromLocalStorage:Ee}),t&&e.jsx(te,{reserverOppgave:n,antallOppgaver:d,valgtSakslisteId:t})]})};G.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""}}};const fe=[],q=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:s})=>{const[t,l]=m.useState(!1),[d,p]=m.useState(),[R,A]=m.useState(),{data:B=fe,isSuccess:V}=f(Z()),{mutateAsync:H}=P({mutationFn:X}),U=g=>{g.status.erReservert?s(g.saksnummer.toString(),g.behandlingId):H(g.id).then(v=>{v&&v.erReservert&&v.erReservertAvInnloggetBruker?s(g.saksnummer.toString(),g.behandlingId):v&&v.erReservert&&!v.erReservertAvInnloggetBruker&&(l(!0),p(g),A(v))})},C=g=>{l(!1),p(void 0),A(void 0),s(g.saksnummer.toString(),g.behandlingId)};return V?e.jsxs(e.Fragment,{children:[e.jsx(G,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:U,sakslister:B}),t&&d&&R&&e.jsx(ue,{lukkErReservertModalOgOpneOppgave:C,oppgave:d,oppgaveStatus:R})]}):e.jsx(de,{})};q.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Te="_iconBackground_d76i8_1",Re="_sectorChatIcon_d76i8_8",_={iconBackground:Te,sectorChatIcon:Re},x=({valgtSakslisteId:n})=>{const s=f(ee(n)).data;return e.jsxs(S,{gap:"4",children:[e.jsxs(ge,{gap:"2",align:"center",children:[e.jsx("div",{className:_.iconBackground,children:e.jsx(be,{"aria-hidden":!0,className:_.sectorChatIcon})}),e.jsx(I,{size:"xsmall",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(le,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(S,{gap:"4",children:[e.jsxs(S,{gap:"1",children:[e.jsx(I,{size:"small",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(z,{children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(ke,{height:250,nyeOgFerdigstilteOppgaver:s}),e.jsx(ce,{height:250,nyeOgFerdigstilteOppgaver:s})]})})]})};x.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const F=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(S,{gap:"6",children:[e.jsx(ve,{åpneFagsak:r}),n&&e.jsx(x,{valgtSakslisteId:n})]});F.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ae="_gridContainer_nw8tl_1",Ie="_leftColumn_nw8tl_9",Ne="_rightColumn_nw8tl_15",Oe="_sokContainer_nw8tl_28",h={gridContainer:Ae,leftColumn:Ie,rightColumn:Ne,sokContainer:Oe},K=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,kanSaksbehandle:s})=>{const[t,l]=m.useState(),d=f(ne()),p=f(re());return m.useEffect(()=>{(p.isError||d.isError)&&n()},[p.isError,d.isError]),p.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[p.data&&e.jsx(me,{driftsmeldinger:p.data}),e.jsxs("div",{className:h.gridContainer,children:[e.jsxs("div",{className:h.leftColumn,children:[e.jsx(q,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:l}),e.jsx("div",{className:h.sokContainer,children:e.jsx(pe,{åpneFagsak:r,kanSaksbehandle:s})})]}),e.jsx("div",{className:h.rightColumn,children:e.jsx(F,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};K.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const _e=Y(Q),L=n=>e.jsx(J,{value:_e,children:e.jsx(K,{...n})});L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},kanSaksbehandle:{required:!0,tsType:{name:"boolean"},description:""}}};const je=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:oe.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[b.FORELDREPENGER],andreKriterier:[{andreKriterierType:O.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:O.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],De=[{id:1,status:{erReservert:!1},saksnummer:46435,personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:4,status:{erReservert:!1},saksnummer:43546,personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12"},{id:3,status:{erReservert:!1},saksnummer:35344,personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34"}],we=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:23233,personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,behandlingStatus:y.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}],Pe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],Ge=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:c().format(k)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:c().format(k)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:c().format(k)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:c().format(k)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:c().subtract(1,"d").format(k)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:c().subtract(3,"d").format(k)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:c().subtract(4,"d").format(k)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:c().subtract(5,"d").format(k)}],qe=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:54343,behandlingStatus:y.BEHANDLING_UTREDES},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:13232,behandlingStatus:y.BEHANDLING_UTREDES}],qn={title:"SaksbehandlerIndex",decorators:[$],component:L,parameters:{msw:{handlers:[i.get(o.KODEVERK_LOS,()=>a.json(ae)),i.get(o.DRIFTSMELDINGER,()=>a.json([])),i.get(o.SAKSLISTE,()=>a.json(je)),i.get(o.RESERVER_OPPGAVE,()=>new a(null,{status:200})),i.get(o.RESERVERTE_OPPGAVER,()=>a.json(we)),i.get(o.SAKSLISTE_SAKSBEHANDLERE,()=>a.json(Pe)),i.get(o.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>a.json(100)),i.get(o.RESERVER_OPPGAVE,()=>new a(null,{status:200})),i.get(o.SØK_FAGSAK,()=>new a(null,{status:200})),i.get(o.OPPGAVER_FOR_FAGSAKER,()=>new a(null,{status:200})),i.get(o.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new a(null,{status:202,headers:{location:"http://www.test.com/api/status"}}):new a(null,{status:202,headers:{location:"http://www.test.com/api/result"}})),i.get("http://www.test.com/api/status",()=>a.json({status:se.PENDING,pollIntervalMillis:1e8})),i.get("http://www.test.com/api/result",()=>a.json(De)),i.get(o.HENT_RESERVASJONSSTATUS,()=>new a(null,{status:200})),i.get(o.BEHANDLEDE_OPPGAVER,()=>a.json(qe)),i.get(o.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>a.json(Ge)),i.get(o.FORLENG_OPPGAVERESERVASJON,()=>new a(null,{status:200}))]}}},E={args:{setLosErIkkeTilgjengelig:N("button-click"),åpneFagsak:N("button-click"),kanSaksbehandle:!0}};var j,D,w;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true
  }
}`,...(w=(D=E.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const xn=["Default"];export{E as Default,xn as __namedExportsOrder,qn as default};
