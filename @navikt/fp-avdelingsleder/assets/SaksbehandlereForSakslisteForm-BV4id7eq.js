import{r as m,b as v,a as N,R as E,c as k,j as l,u as h}from"./iframe-DMjtgZjT.js";import{u as O,b as A,a as K,C as D}from"./index.es-BWBYwbdY.js";import{u as B}from"./useQuery-Bpju6m-y.js";import"./FlyttReservasjonModal-D_90C38b.js";import{e as L,L as x,H as P,V as g,g as j}from"./fplosAvdelingslederApi-DcKFhy3p.js";import{u as U}from"./useMutation-C0idWrv9.js";import{B as w}from"./Box-B0HXDshO.js";import{a as f,L as F,M as R,B as G}from"./nb_NO-BLF3jDJ7.js";import{T}from"./Table-BKLXUP6D.js";import{a as C,b as V,c as q}from"./Modal-DI2d_rM0.js";const S=m.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var M=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r};const H=m.forwardRef((a,t)=>{var{children:r,className:e}=a,n=M(a,["children","className"]);const{cn:s}=v(),o=m.useContext(S),d=N(!1);return o===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):E.createElement(f,Object.assign({"data-color":d?.color},n,{ref:t,as:"div",className:s("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!o.open}),"aria-hidden":!o.open,size:o.size,"data-open":o.open}),E.createElement("div",{className:s("navds-expansioncard__content-inner")},r))});var Y=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r};const z=m.forwardRef((a,t)=>{var{className:r}=a,e=Y(a,["className"]);const{cn:n}=v(),s=m.useContext(S);return s===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):E.createElement(f,Object.assign({},e,{as:"p",ref:t,className:n("navds-link-panel__description",r),size:s.size}))});var J=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r};const $=m.forwardRef((a,t)=>{var{children:r,className:e}=a,n=J(a,["children","className"]);const{cn:s}=v(),o=m.useContext(S),d=C("global");return o===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):E.createElement("div",Object.assign({ref:t},n,{className:s("navds-expansioncard__header",e),"data-open":o.open}),E.createElement("div",{className:s("navds-expansioncard__header-content")},r),E.createElement("button",{className:s("navds-expansioncard__header-button"),onClick:o.toggleOpen,type:"button","aria-expanded":o.open},E.createElement(V,{className:s("navds-expansioncard__header-chevron"),title:d("showMore")})))});var Q=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r};const W=m.forwardRef((a,t)=>{var{className:r,as:e="h3",size:n="medium"}=a,s=Q(a,["className","as","size"]);const{cn:o}=v();return E.createElement(e,Object.assign({},s,{ref:t,className:o("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,r)}))});var X=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r};const c=m.forwardRef((a,t)=>{var{className:r,onToggle:e,open:n,defaultOpen:s=!1,size:o="medium","data-color":d="neutral"}=a,p=X(a,["className","onToggle","open","defaultOpen","size","data-color"]);const{cn:i}=v(),u=m.useRef(!(n||s)),[_,I]=q({value:n,onChange:b=>{e?.(b),u.current=!0},defaultValue:s});return E.createElement(S.Provider,{value:{open:n??_,toggleOpen:()=>I(b=>!b),size:o}},E.createElement("section",Object.assign({"data-color":d},p,{className:i("navds-expansioncard",r,`navds-expansioncard--${o}`,{"navds-expansioncard--open":n??_,"navds-expansioncard--no-animation":!u.current}),ref:t})))});c.Header=$;c.Content=H;c.Title=W;c.Description=z;const y=({valgtSaksliste:a,valgtAvdelingEnhet:t,saksbehandlere:r})=>{const e=k(),{control:n}=O(),{mutate:s}=U({mutationFn:i=>L(a.sakslisteId,i.brukerIdent,i.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[x.SAKSLISTER_FOR_AVDELING]})}}),o=Math.ceil(r.length/2),d=r.slice(0,o),p=r.slice(o);return l.jsxs(P,{gap:"space-4",children:[l.jsx(g,{gap:"space-8",width:"50%",children:d.map(i=>l.jsx(A,{name:i.brukerIdent,control:n,label:i.navn,onChange:u=>s({brukerIdent:i.brukerIdent,checked:u})},i.brukerIdent))}),l.jsx(g,{gap:"space-8",children:p.map(i=>l.jsx(A,{name:i.brukerIdent,control:n,label:i.navn,onChange:u=>s({brukerIdent:i.brukerIdent,checked:u})},i.brukerIdent))})]})};y.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: KøSortering;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]}],raw:"BehandlingType[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: KøSortering;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"union",raw:"'OPPRBEH' | 'BEHFRIST' | 'BELOP' | 'FEILUTBETALINGSTART' | 'FORSTONAD'",elements:[{name:"literal",value:"'OPPRBEH'"},{name:"literal",value:"'BEHFRIST'"},{name:"literal",value:"'BELOP'"},{name:"literal",value:"'FEILUTBETALINGSTART'"},{name:"literal",value:"'FORSTONAD'"}],required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}],required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: KøSortering;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`{
  brukerIdent: string;
  navn: string;
}[]`},description:""}}};const Z=({avdelingensSaksbehandlere:a=[],valgtSaksliste:t,valgtAvdelingEnhet:r})=>{const e=h(),n=a.toSorted((i,u)=>i.navn.localeCompare(u.navn)),{data:s}=B(j(r)),o=t.saksbehandlerIdenter.reduce((i,u)=>({...i,[u]:!0}),{}),d=K({defaultValues:o});m.useEffect(()=>{d.reset(o)},[t.sakslisteId]);const p=s&&s.saksbehandlerGrupper.length>0&&!s.saksbehandlerGrupper.every(i=>i.saksbehandlere.length===0);return l.jsx(D,{formMethods:d,children:l.jsx(w.New,{padding:"5",borderColor:"neutral-subtle",borderRadius:"0",borderWidth:"1",children:l.jsxs(g,{gap:"space-8",children:[l.jsx(F,{size:"small",children:l.jsx(R,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&l.jsx(G,{children:l.jsx(R,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),l.jsx(g,{gap:"space-40",children:p&&l.jsxs(T,{children:[l.jsx(T.Header,{children:l.jsxs(T.Row,{children:[l.jsx(T.HeaderCell,{}),l.jsx(T.HeaderCell,{scope:"col",children:l.jsx(R,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),l.jsx(T.HeaderCell,{scope:"col",children:l.jsx(R,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),l.jsx(T.Body,{children:s.saksbehandlerGrupper.map(i=>l.jsxs(T.ExpandableRow,{content:l.jsx(y,{saksbehandlere:i.saksbehandlere.map(u=>({brukerIdent:u.brukerIdent,navn:u.navn})),valgtSaksliste:t,valgtAvdelingEnhet:r}),expandOnRowClick:!0,children:[l.jsx(T.DataCell,{scope:"row",children:i.gruppeNavn}),l.jsx(T.DataCell,{children:ee(t,i)})]},i.gruppeId))})]})}),n.length>0&&!p&&l.jsx(y,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:r}),p&&l.jsxs(c,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[l.jsx(c.Header,{children:l.jsx(c.Title,{size:"small",children:l.jsx(R,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),l.jsx(c.Content,{children:l.jsx(y,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:r})})]})]})})})},ee=(a,t)=>{let r=0;for(const e of a.saksbehandlerIdenter){const n=t.saksbehandlere.filter(s=>s.brukerIdent===e);r+=n.length}return r};Z.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: KøSortering;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]}],raw:"BehandlingType[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: KøSortering;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"union",raw:"'OPPRBEH' | 'BEHFRIST' | 'BELOP' | 'FEILUTBETALINGSTART' | 'FORSTONAD'",elements:[{name:"literal",value:"'OPPRBEH'"},{name:"literal",value:"'BEHFRIST'"},{name:"literal",value:"'BELOP'"},{name:"literal",value:"'FEILUTBETALINGSTART'"},{name:"literal",value:"'FORSTONAD'"}],required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"union",raw:`| 'TIL_BESLUTTER'
| 'PAPIRSOKNAD'
| 'UTBETALING_TIL_BRUKER'
| 'ENDRINGSSOKNAD'
| 'REVURDERING_INNTEKTSMELDING'
| 'KLAGE_PÅ_TILBAKEBETALING'
| 'BERØRT_BEHANDLING'
| 'PLEIEPENGER'
| 'UTSATT_START'
| 'ARBEID_INNTEKT'
| 'BARE_FAR_RETT'
| 'UTLANDSSAK'
| 'DØD'
| 'EØS_SAK'
| 'MOR_UKJENT_UTLAND'
| 'KODE7_SAK'
| 'NYTT_VEDTAK'
| 'PRAKSIS_UTSETTELSE'
| 'RETURNERT_FRA_BESLUTTER'
| 'SAMMENSATT_KONTROLL'
| 'NÆRING'
| 'TERMINBEKREFTELSE'
| 'VURDER_EØS_OPPTJENING'
| 'VURDER_FARESIGNALER'
| 'VURDER_SYKDOM'
| 'VURDER_FORMKRAV'
| 'IKKE_VARSLET'
| 'OVER_FIRE_RETTSGEBYR'`,elements:[{name:"literal",value:"'TIL_BESLUTTER'"},{name:"literal",value:"'PAPIRSOKNAD'"},{name:"literal",value:"'UTBETALING_TIL_BRUKER'"},{name:"literal",value:"'ENDRINGSSOKNAD'"},{name:"literal",value:"'REVURDERING_INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_PÅ_TILBAKEBETALING'"},{name:"literal",value:"'BERØRT_BEHANDLING'"},{name:"literal",value:"'PLEIEPENGER'"},{name:"literal",value:"'UTSATT_START'"},{name:"literal",value:"'ARBEID_INNTEKT'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'UTLANDSSAK'"},{name:"literal",value:"'DØD'"},{name:"literal",value:"'EØS_SAK'"},{name:"literal",value:"'MOR_UKJENT_UTLAND'"},{name:"literal",value:"'KODE7_SAK'"},{name:"literal",value:"'NYTT_VEDTAK'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'RETURNERT_FRA_BESLUTTER'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'TERMINBEKREFTELSE'"},{name:"literal",value:"'VURDER_EØS_OPPTJENING'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'VURDER_SYKDOM'"},{name:"literal",value:"'VURDER_FORMKRAV'"},{name:"literal",value:"'IKKE_VARSLET'"},{name:"literal",value:"'OVER_FIRE_RETTSGEBYR'"}],required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: AndreKriterierType;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
  fagsakYtelseTyper?: string[];
  sortering?: {
    sorteringType: KøSortering;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
}>`},description:""},avdelingensSaksbehandlere:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{Z as S};
