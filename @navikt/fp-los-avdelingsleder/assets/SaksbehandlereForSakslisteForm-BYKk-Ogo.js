import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as d,R as m}from"./index-Dxs5m6lS.js";import{U as j,u as w,e as S}from"./index.es-DF4ymgBM.js";import{C as O,f,u as q,d as I,L as _,M as y,e as C}from"./nb_NO-rozzxS7Z.js";import{u as T}from"./useQuery-DtT7oZ3t.js";import"./FlyttReservasjonModal-D0d--T1w.js";import{S as E,F as D,L as A,c as P,V as h,G as R}from"./fplosAvdelingslederApi-DNP73Upt.js";import{u as N}from"./useMutation-BosAOaUz.js";import{B as F}from"./Box-D9SWVWb3.js";import{u as K,T as u}from"./Table-B9E7IXJy.js";import{a as z}from"./Modal-BVAIC6Kg.js";const v=d.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var B=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const V=d.forwardRef((r,t)=>{var{children:a,className:e}=r,n=B(r,["children","className"]);const i=d.useContext(v);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):m.createElement(O,Object.assign({},n,{ref:t,as:"div",className:f("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size,"data-open":i.open}),m.createElement("div",{className:"navds-expansioncard__content-inner"},a))});var H=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const L=d.forwardRef((r,t)=>{var{className:a}=r,e=H(r,["className"]);const n=d.useContext(v);return n===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):m.createElement(O,Object.assign({},e,{as:"p",ref:t,className:f("navds-link-panel__description",a),size:n.size}))});var M=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const G=d.forwardRef((r,t)=>{var{children:a,className:e}=r,n=M(r,["children","className"]);const i=d.useContext(v),p=z("global");return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):m.createElement("div",Object.assign({ref:t},n,{className:f("navds-expansioncard__header",e),"data-open":i.open}),m.createElement("div",{className:"navds-expansioncard__header-content"},a),m.createElement("button",{className:"navds-expansioncard__header-button",onClick:i.toggleOpen,type:"button","aria-expanded":i.open},m.createElement(E,{className:"navds-expansioncard__header-chevron",title:p("showMore")})))});var $=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const Y=d.forwardRef((r,t)=>{var{className:a,as:e="h3",size:n="medium"}=r,i=$(r,["className","as","size"]);return m.createElement(e,Object.assign({},i,{ref:t,className:f("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,a)}))});var Q=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const g=d.forwardRef((r,t)=>{var{className:a,onToggle:e,open:n,defaultOpen:i=!1,size:p="medium"}=r,b=Q(r,["className","onToggle","open","defaultOpen","size"]);const l=d.useRef(!(n||i)),[o,c]=K({value:n,onChange:x=>{e==null||e(x),l.current=!0},defaultValue:i});return m.createElement(v.Provider,{value:{open:n??o,toggleOpen:()=>c(x=>!x),size:p}},m.createElement("section",Object.assign({},b,{className:f("navds-expansioncard",a,`navds-expansioncard--${p}`,{"navds-expansioncard--open":n??o,"navds-expansioncard--no-animation":!l.current}),ref:t})))});g.Header=G;g.Content=V;g.Title=Y;g.Description=L;const k=({valgtSaksliste:r,valgtAvdelingEnhet:t,saksbehandlere:a})=>{const e=q(),{mutate:n}=N({mutationFn:l=>D(r.sakslisteId,l.brukerIdent,l.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[A.SAKSLISTER_FOR_AVDELING]})}}),i=Math.ceil(a.length/2),p=a.slice(0,i),b=a.slice(i);return s.jsxs(P,{children:[s.jsx(h,{gap:"2",width:"50%",children:p.map(l=>s.jsx(j,{name:l.brukerIdent,label:l.navn,onChange:o=>n({brukerIdent:l.brukerIdent,checked:o})},l.brukerIdent))}),s.jsx(h,{gap:"2",children:b.map(l=>s.jsx(j,{name:l.brukerIdent,label:l.navn,onChange:o=>n({brukerIdent:l.brukerIdent,checked:o})},l.brukerIdent))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sistEndret",value:{name:"string",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"antallBehandlinger",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`{
  brukerIdent: string;
  navn: string;
}[]`},description:""}}};const U=({avdelingensSaksbehandlere:r=[],valgtSaksliste:t,valgtAvdelingEnhet:a})=>{const e=I(),n=r.toSorted((o,c)=>o.navn.localeCompare(c.navn)),{data:i}=T(R(a)),p=t.saksbehandlerIdenter.reduce((o,c)=>({...o,[c]:!0}),{}),b=w({defaultValues:p});d.useEffect(()=>{b.reset(p)},[t.sakslisteId]);const l=i&&i.saksbehandlerGrupper.length>0&&!i.saksbehandlerGrupper.every(o=>o.saksbehandlere.length===0);return s.jsx(S,{formMethods:b,children:s.jsx(F,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:s.jsxs(h,{gap:"2",children:[s.jsx(_,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&s.jsx(C,{children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),s.jsx(h,{gap:"10",children:l&&s.jsxs(u,{children:[s.jsx(u.Header,{children:s.jsxs(u.Row,{children:[s.jsx(u.HeaderCell,{}),s.jsx(u.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(u.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(u.Body,{children:i.saksbehandlerGrupper.map(o=>s.jsxs(u.ExpandableRow,{content:s.jsx(k,{saksbehandlere:o.saksbehandlere.map(c=>({brukerIdent:c.brukerIdent,navn:c.navn})),valgtSaksliste:t,valgtAvdelingEnhet:a}),children:[s.jsx(u.DataCell,{scope:"row",children:o.gruppeNavn}),s.jsx(u.DataCell,{children:W(t,o)})]},o.gruppeId))})]})}),n.length>0&&!l&&s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a}),l&&s.jsxs(g,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(g.Header,{children:s.jsx(g.Title,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(g.Content,{children:s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a})})]})]})})})},W=(r,t)=>{let a=0;return r.saksbehandlerIdenter.forEach(e=>{const n=t.saksbehandlere.filter(i=>i.brukerIdent===e);a+=n.length}),a};U.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sistEndret",value:{name:"string",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"antallBehandlinger",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}>`},description:""},avdelingensSaksbehandlere:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{U as S};
