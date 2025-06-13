import{r as k,j as e,P as Y,a as M,w as z,F as b,B as u,d as v,b as y}from"./iframe-Bws3bu95.js";import{g as J,r as Q,s as X,h as $,l as W,d as Z,a as i,L as l,H as s}from"./fplosSaksbehandlerApi-DrqWvl2Z.js";import{S as ee,B as ne,K as re}from"./SakslisteVelgerForm-BmNgM6an.js";import{A as S}from"./andreKriterierType-Cg0VWsVP.js";import{L as te,A as ae}from"./LedigOppgaveTabell-BOmLkao-.js";import"./FlyttReservasjonModal-BToxcsCs.js";import{a as se}from"./alleKodeverkLos-DeeW-5p1.js";import{u as E}from"./useQuery-IP0noD6B.js";import{X as ie}from"./index.es-Bwml7v1q.js";import{u as K}from"./useMutation-BpzAYnnJ.js";import{O as le}from"./OppgaveErReservertAvAnnenModal-D3NaoNf1.js";import{R as oe}from"./ReservertOppgaveTabell-Cl9Wpsah.js";import{V as c,H as de}from"./VStack-CEGFtULC.js";import{D as ue}from"./DriftsmeldingPanel-DBN-JDFF.js";import{F as ge}from"./FagsakSøkIndex-DTs15Mw_.js";import{N as me}from"./NyeOgFerdigstilteOppgaverForIdagPanel-BtYPB70q.js";import{N as pe}from"./NyeOgFerdigstilteOppgaverForSisteSyvPanel-CXaIwFmC.js";import{u as ke,H as O,D as ve,m as ye}from"./nb_NO-BSp1OVhR.js";import{M as T}from"./message-Cle8p4Ck.js";import{S as be}from"./SistBehandledeSaker-CPW32QXx.js";import"./index.es-CmOCzFp9.js";import"./Modal-BvWUmwaz.js";import"./index-BY5qreuI.js";import"./Loader-BK_HnObf.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-Ck61LRMw.js";import"./Tag-CUSSmyMF.js";import"./useLosKodeverk-k80qD05S.js";import"./ArrowsUpDown-Cq-Df74o.js";import"./PersonHeadset-DbrvuNlA.js";import"./BehandlingPollingTimoutModal-DKAruZBX.js";import"./ExclamationmarkTriangleFill-DPH6oPA_.js";import"./OppgaveLabels-BrXuH-Rs.js";import"./Portal-DyOIr1xA.js";import"./Table-CRH9uwYq.js";import"./index.es-zHyhEYNi.js";import"./OppgaveHandlingerMenu-DtcY-MTc.js";import"./OppgaveReservasjonForlengetModal-DWR0mjKD.js";import"./NotatModal-DTfcRWVr.js";import"./ChevronRight-CNZYTDEH.js";import"./FagsakSøk-OaBTn0g2.js";import"./SøkForm-DOY4wXeu.js";import"./PersonInfo-CIzwnQAQ.js";import"./Kjonnkode-C-fkzSiP.js";import"./SøkResultat-BoD-ppOs.js";var ce=function(n,r){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};const he=k.forwardRef((n,r)=>{var{title:a,titleId:t}=n,o=ce(n,["title","titleId"]);let d=ke();return d=a?t||"title-"+d:void 0,k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":d},o),a?k.createElement("title",{id:d},a):null,k.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.624 2.385a.75.75 0 0 0-.874.74V10.5a.75.75 0 0 0 .75.75h7.376a.75.75 0 0 0 .74-.874 9.76 9.76 0 0 0-7.992-7.991m.626 7.365V4.06a8.27 8.27 0 0 1 5.69 5.69zm-3.265-7.198a.75.75 0 0 1 .265.573v17.75a.75.75 0 0 1-.874.74C5.764 20.842 2.25 16.832 2.25 12s3.514-8.841 8.126-9.615a.75.75 0 0 1 .609.167M9.75 4.06a8.254 8.254 0 0 0 0 15.88zm3 9.44a.75.75 0 0 1 .75-.75h7.376a.75.75 0 0 1 .74.874 9.76 9.76 0 0 1-7.992 7.991.75.75 0 0 1-.874-.74zm1.5.75v5.69a8.27 8.27 0 0 0 5.69-5.69z",clipRule:"evenodd"}))}),fe=n=>{const r=window.localStorage.getItem(n);return r!=="undefined"&&r!==null?r:void 0},Se=(n,r)=>{window.localStorage.setItem(n,r)},Ee=n=>{window.localStorage.removeItem(n)},P=({reserverOppgave:n,sakslister:r,setValgtSakslisteId:a,valgtSakslisteId:t,brukernavn:o})=>{const{mutate:d,data:g}=K({mutationFn:J});return e.jsxs(c,{gap:"8",children:[e.jsx(ee,{sakslister:r,setValgtSakslisteId:a,fetchAntallOppgaver:d,getValueFromLocalStorage:fe,setValueInLocalStorage:Se,removeValueFromLocalStorage:Ee}),t&&e.jsx(te,{reserverOppgave:n,antallOppgaver:g,valgtSakslisteId:t}),e.jsx(oe,{reserverOppgave:n,antallOppgaver:g,brukernavn:o})]})};P.__docgenInfo={description:"",methods:[],displayName:"SakslistePanel",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
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
}>`},name:"oppgaveId"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Te=[],D=({valgtSakslisteId:n,setValgtSakslisteId:r,åpneFagsak:a,brukernavn:t})=>{const[o,d]=k.useState(!1),[g,R]=k.useState(),[A,I]=k.useState(),{data:V=Te,isSuccess:B}=E(X()),{mutateAsync:C}=K({mutationFn:Q}),H=m=>{m.status.erReservert?a(m.saksnummer,m.behandlingId):C(m.id).then(p=>{p!=null&&p.erReservert&&p.erReservertAvInnloggetBruker?a(m.saksnummer,m.behandlingId):p!=null&&p.erReservert&&!p.erReservertAvInnloggetBruker&&(d(!0),R(m),I(p))})},U=m=>{d(!1),R(void 0),I(void 0),a(m.saksnummer,m.behandlingId)};return B?e.jsxs(e.Fragment,{children:[e.jsx(P,{valgtSakslisteId:n,setValgtSakslisteId:r,reserverOppgave:H,sakslister:V,brukernavn:t}),o&&g&&A&&e.jsx(le,{lukkErReservertModalOgOpneOppgave:U,oppgave:g,oppgaveStatus:A})]}):e.jsx(ie,{})};D.__docgenInfo={description:"",methods:[],displayName:"BehandlingskoerIndex",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},brukernavn:{required:!0,tsType:{name:"string"},description:""}}};const Re="_iconBackground_d76i8_1",Ae="_sectorChatIcon_d76i8_8",N={iconBackground:Re,sectorChatIcon:Ae},G=({valgtSakslisteId:n})=>{const a=E($(n)).data;return e.jsxs(c,{gap:"4",children:[e.jsxs(de,{gap:"2",align:"center",children:[e.jsx("div",{className:N.iconBackground,children:e.jsx(he,{"aria-hidden":!0,className:N.sectorChatIcon})}),e.jsx(O,{size:"xsmall",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.Statistikk"})})]}),e.jsx(ne,{background:"surface-neutral-subtle",padding:"4",borderRadius:"large",children:e.jsxs(c,{gap:"4",children:[e.jsxs(c,{gap:"1",children:[e.jsx(O,{size:"small",children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlle"})}),e.jsx(ve,{children:e.jsx(T,{id:"SaksbehandlerNokkeltallPanel.ForAlleDetaljer"})})]}),e.jsx(me,{height:250,nyeOgFerdigstilteOppgaver:a}),e.jsx(pe,{height:250,nyeOgFerdigstilteOppgaver:a})]})})]})};G.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerNokkeltallPanel",props:{valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};const x=({valgtSakslisteId:n,åpneFagsak:r})=>e.jsxs(c,{gap:"6",children:[e.jsx(be,{åpneFagsak:r}),n&&e.jsx(G,{valgtSakslisteId:n})]});x.__docgenInfo={description:"",methods:[],displayName:"SaksstøttePaneler",props:{valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""}}};const Ie="_gridContainer_nw8tl_1",Oe="_leftColumn_nw8tl_9",Ne="_rightColumn_nw8tl_15",_e="_sokContainer_nw8tl_28",h={gridContainer:Ie,leftColumn:Oe,rightColumn:Ne,sokContainer:_e},F=({setLosErIkkeTilgjengelig:n,åpneFagsak:r,navAnsatt:a})=>{const[t,o]=k.useState(),d=E(W()),g=E(Z());return k.useEffect(()=>{(g.isError||d.isError)&&n()},[g.isError,d.isError]),g.isPending||d.isPending?null:e.jsxs(e.Fragment,{children:[g.data&&e.jsx(ue,{driftsmeldinger:g.data}),e.jsxs("div",{className:h.gridContainer,children:[e.jsxs("div",{className:h.leftColumn,children:[e.jsx(D,{åpneFagsak:r,valgtSakslisteId:t,setValgtSakslisteId:o,brukernavn:a.brukernavn}),e.jsx("div",{className:h.sokContainer,children:e.jsx(ge,{åpneFagsak:r,kanSaksbehandle:a.kanSaksbehandle||!1})})]}),e.jsx("div",{className:h.rightColumn,children:e.jsx(x,{valgtSakslisteId:t,åpneFagsak:r})})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerDashboard",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const je=M(ye),L=n=>e.jsx(Y,{value:je,children:e.jsx(F,{...n})});L.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlerIndex",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},åpneFagsak:{required:!0,tsType:{name:"signature",type:"function",raw:"(saksnummer: string, behandlingUuid?: string) => void",signature:{arguments:[{type:{name:"string"},name:"saksnummer"},{type:{name:"string"},name:"behandlingUuid"}],return:{name:"void"}}},description:""},navAnsatt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const{action:_}=__STORYBOOK_MODULE_ACTIONS__,we=[{sakslisteId:1,navn:"Saksliste 1",sortering:{sorteringType:re.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[u.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[b.FORELDREPENGER],andreKriterier:[{andreKriterierType:S.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:S.PAPIRSOKNAD,inkluder:!1}]}],qe=[{id:1,status:{erReservert:!1},saksnummer:"46435",personnummer:"3433434434",navn:"Sara Sahara",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-11-01",behandlingsfrist:"2024-11-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[S.REVURDERING_INNTEKTSMELDING]},{id:4,status:{erReservert:!1},saksnummer:"43546",personnummer:"53343423232",navn:"Petter Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12",andreKriterier:[]},{id:3,status:{erReservert:!1},saksnummer:"35344",personnummer:"34343535423",navn:"Helga Tester",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2023-04-01",behandlingsfrist:"2023-04-05",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"34",andreKriterier:[]}],Ke=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-08-02T00:54:25.455",flyttetReservasjon:{navn:"Petter",tidspunkt:"2019-08-02T00:54:25.455",uid:"uid",begrunnelse:"Denne er flyttet"}},saksnummer:"23233",personnummer:"5434231232",navn:"Espen Utvikler",system:"SAK",behandlingstype:u.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:b.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[S.REVURDERING_INNTEKTSMELDING]}],Pe=[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],De=[{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().format(y)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().format(y)},{behandlingType:u.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:v().format(y)},{behandlingType:u.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:v().format(y)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:v().subtract(1,"d").format(y)},{behandlingType:u.FORSTEGANGSSOKNAD,antallNye:30,antallFerdigstilte:15,dato:v().subtract(3,"d").format(y)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(4,"d").format(y)},{behandlingType:u.KLAGE,antallNye:23,antallFerdigstilte:2,dato:v().subtract(5,"d").format(y)}],Ge=[{id:1,personnummer:"343453534",navn:"Gaute Johansen",saksnummer:"54343"},{id:2,personnummer:"334342323",navn:"Olga Mortensen",saksnummer:"13232"}],_n={title:"SaksbehandlerIndex",decorators:[z],component:L,parameters:{layout:"fullscreen",msw:{handlers:[i.get(l.KODEVERK_LOS,()=>s.json(se)),i.get(l.DRIFTSMELDINGER,()=>s.json([])),i.get(l.SAKSLISTE,()=>s.json(we)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.RESERVERTE_OPPGAVER,()=>s.json(Ke)),i.get(l.SAKSLISTE_SAKSBEHANDLERE,()=>s.json(Pe)),i.get(l.BEHANDLINGSKO_OPPGAVE_ANTALL,()=>s.json(100)),i.get(l.RESERVER_OPPGAVE,()=>new s(null,{status:200})),i.get(l.SØK_FAGSAK,()=>new s(null,{status:200})),i.get(l.OPPGAVER_FOR_FAGSAKER,()=>new s(null,{status:200})),i.get(l.OPPGAVER_TIL_BEHANDLING,n=>n.request.url.includes("oppgaveIder")?new s(null,{status:202,headers:{location:"https://www.test.com/api/status"}}):new s(null,{status:202,headers:{location:"https://www.test.com/api/result"}})),i.get("https://www.test.com/api/status",()=>s.json({status:ae.PENDING,pollIntervalMillis:1e8})),i.get("https://www.test.com/api/result",()=>s.json(qe)),i.get(l.HENT_RESERVASJONSSTATUS,()=>new s(null,{status:200})),i.get(l.BEHANDLEDE_OPPGAVER,()=>s.json(Ge)),i.get(l.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,()=>s.json(De)),i.get(l.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200}))]}}},f={args:{setLosErIkkeTilgjengelig:_("button-click"),åpneFagsak:_("button-click"),navAnsatt:{brukernavn:"T232332",kanSaksbehandle:!0}}};var j,w,q;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true
    } as NavAnsatt
  }
}`,...(q=(w=f.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const jn=["Default"];export{f as Default,jn as __namedExportsOrder,_n as default};
