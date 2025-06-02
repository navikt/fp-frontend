import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as p}from"./index-mMUbb89k.js";import{y as j,u as S,N as q}from"./index.es-CQKBbj0b.js";import{g as f,u as I,f as C}from"./withThemeDecorator-Blar2IxA.js";import{u as _}from"./useQuery-2EM0HxIJ.js";import"./FlyttReservasjonModal-BMR3ngn7.js";import{S as T,D as E,E as D,L as A,c as R,V as h,F as N}from"./fplosAvdelingslederApi-DwhVEmyz.js";import{u as P}from"./useMutation-Cz3fwOKe.js";import{B as F}from"./Box-BW8PRE02.js";import{a as O,L as K,M as b,B as z}from"./nb_NO-CynFjDnS.js";import{T as m}from"./Table-Deh-XGU_.js";import{b as B}from"./Modal-1f_-7fTC.js";const v=u.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var V=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const H=u.forwardRef((r,t)=>{var{children:a,className:e}=r,n=V(r,["children","className"]);const{cn:i}=f(),l=u.useContext(v);return l===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):p.createElement(O,Object.assign({},n,{ref:t,as:"div",className:i("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!l.open}),"aria-hidden":!l.open,size:l.size,"data-open":l.open}),p.createElement("div",{className:i("navds-expansioncard__content-inner")},a))});var L=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const M=u.forwardRef((r,t)=>{var{className:a}=r,e=L(r,["className"]);const{cn:n}=f(),i=u.useContext(v);return i===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):p.createElement(O,Object.assign({},e,{as:"p",ref:t,className:n("navds-link-panel__description",a),size:i.size}))});var $=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const G=u.forwardRef((r,t)=>{var{children:a,className:e}=r,n=$(r,["children","className"]);const{cn:i}=f(),l=u.useContext(v),g=B("global");return l===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):p.createElement("div",Object.assign({ref:t},n,{className:i("navds-expansioncard__header",e),"data-open":l.open}),p.createElement("div",{className:i("navds-expansioncard__header-content")},a),p.createElement("button",{className:i("navds-expansioncard__header-button"),onClick:l.toggleOpen,type:"button","aria-expanded":l.open},p.createElement(T,{className:i("navds-expansioncard__header-chevron"),title:g("showMore")})))});var Y=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const Q=u.forwardRef((r,t)=>{var{className:a,as:e="h3",size:n="medium"}=r,i=Y(r,["className","as","size"]);const{cn:l}=f();return p.createElement(e,Object.assign({},i,{ref:t,className:l("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,a)}))});var U=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const y=u.forwardRef((r,t)=>{var{className:a,onToggle:e,open:n,defaultOpen:i=!1,size:l="medium"}=r,g=U(r,["className","onToggle","open","defaultOpen","size"]);const{cn:o}=f(),d=u.useRef(!(n||i)),[c,w]=E({value:n,onChange:x=>{e==null||e(x),d.current=!0},defaultValue:i});return p.createElement(v.Provider,{value:{open:n??c,toggleOpen:()=>w(x=>!x),size:l}},p.createElement("section",Object.assign({},g,{className:o("navds-expansioncard",a,`navds-expansioncard--${l}`,{"navds-expansioncard--open":n??c,"navds-expansioncard--no-animation":!d.current}),ref:t})))});y.Header=G;y.Content=H;y.Title=Q;y.Description=M;const k=({valgtSaksliste:r,valgtAvdelingEnhet:t,saksbehandlere:a})=>{const e=I(),{mutate:n}=P({mutationFn:o=>D(r.sakslisteId,o.brukerIdent,o.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[A.SAKSLISTER_FOR_AVDELING]})}}),i=Math.ceil(a.length/2),l=a.slice(0,i),g=a.slice(i);return s.jsxs(R,{gap:"1",children:[s.jsx(h,{gap:"2",width:"50%",children:l.map(o=>s.jsx(j,{name:o.brukerIdent,label:o.navn,onChange:d=>n({brukerIdent:o.brukerIdent,checked:d})},o.brukerIdent))}),s.jsx(h,{gap:"2",children:g.map(o=>s.jsx(j,{name:o.brukerIdent,label:o.navn,onChange:d=>n({brukerIdent:o.brukerIdent,checked:d})},o.brukerIdent))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const W=({avdelingensSaksbehandlere:r=[],valgtSaksliste:t,valgtAvdelingEnhet:a})=>{const e=C(),n=r.toSorted((d,c)=>d.navn.localeCompare(c.navn)),{data:i}=_(N(a)),l=t.saksbehandlerIdenter.reduce((d,c)=>({...d,[c]:!0}),{}),g=S({defaultValues:l});u.useEffect(()=>{g.reset(l)},[t.sakslisteId]);const o=i&&i.saksbehandlerGrupper.length>0&&!i.saksbehandlerGrupper.every(d=>d.saksbehandlere.length===0);return s.jsx(q,{formMethods:g,children:s.jsx(F,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:s.jsxs(h,{gap:"2",children:[s.jsx(K,{size:"small",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&s.jsx(z,{children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),s.jsx(h,{gap:"10",children:o&&s.jsxs(m,{children:[s.jsx(m.Header,{children:s.jsxs(m.Row,{children:[s.jsx(m.HeaderCell,{}),s.jsx(m.HeaderCell,{scope:"col",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(m.HeaderCell,{scope:"col",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(m.Body,{children:i.saksbehandlerGrupper.map(d=>s.jsxs(m.ExpandableRow,{content:s.jsx(k,{saksbehandlere:d.saksbehandlere.map(c=>({brukerIdent:c.brukerIdent,navn:c.navn})),valgtSaksliste:t,valgtAvdelingEnhet:a}),expandOnRowClick:!0,children:[s.jsx(m.DataCell,{scope:"row",children:d.gruppeNavn}),s.jsx(m.DataCell,{children:J(t,d)})]},d.gruppeId))})]})}),n.length>0&&!o&&s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a}),o&&s.jsxs(y,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(y.Header,{children:s.jsx(y.Title,{size:"small",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(y.Content,{children:s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a})})]})]})})})},J=(r,t)=>{let a=0;return r.saksbehandlerIdenter.forEach(e=>{const n=t.saksbehandlere.filter(i=>i.brukerIdent===e);a+=n.length}),a};W.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{W as S};
