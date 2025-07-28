import{r as u,b as f,R as c,k as q,j as s,h as I}from"./iframe-DUUg4WYC.js";import{u as C,w as O,a as _,N as T}from"./index.es-BkX0E6wS.js";import{u as E}from"./useQuery-B64_0BSJ.js";import"./FlyttReservasjonModal-C9oEZONo.js";import{S as D,u as A,f as R,L as N,H as P,V as h,g as F}from"./fplosAvdelingslederApi-CrhuuX9s.js";import{u as K}from"./useMutation-nzuC1sQl.js";import{B as z}from"./Box-IQLbXb_Y.js";import{a as w,L as B,M as y,B as H}from"./nb_NO-U_UfAO4z.js";import{T as m}from"./Table-BglOn_mU.js";import{a as V}from"./Modal-CKlE0sTe.js";const v=u.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var L=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const M=u.forwardRef((r,t)=>{var{children:a,className:e}=r,n=L(r,["children","className"]);const{cn:i}=f(),o=u.useContext(v);return o===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):c.createElement(w,Object.assign({},n,{ref:t,as:"div",className:i("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!o.open}),"aria-hidden":!o.open,size:o.size,"data-open":o.open}),c.createElement("div",{className:i("navds-expansioncard__content-inner")},a))});var $=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const G=u.forwardRef((r,t)=>{var{className:a}=r,e=$(r,["className"]);const{cn:n}=f(),i=u.useContext(v);return i===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):c.createElement(w,Object.assign({},e,{as:"p",ref:t,className:n("navds-link-panel__description",a),size:i.size}))});var Y=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const Q=u.forwardRef((r,t)=>{var{children:a,className:e}=r,n=Y(r,["children","className"]);const{cn:i}=f(),o=u.useContext(v),p=V("global");return o===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):c.createElement("div",Object.assign({ref:t},n,{className:i("navds-expansioncard__header",e),"data-open":o.open}),c.createElement("div",{className:i("navds-expansioncard__header-content")},a),c.createElement("button",{className:i("navds-expansioncard__header-button"),onClick:o.toggleOpen,type:"button","aria-expanded":o.open},c.createElement(D,{className:i("navds-expansioncard__header-chevron"),title:p("showMore")})))});var U=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const W=u.forwardRef((r,t)=>{var{className:a,as:e="h3",size:n="medium"}=r,i=U(r,["className","as","size"]);const{cn:o}=f();return c.createElement(e,Object.assign({},i,{ref:t,className:o("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,a)}))});var J=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const g=u.forwardRef((r,t)=>{var{className:a,onToggle:e,open:n,defaultOpen:i=!1,size:o="medium","data-color":p="neutral"}=r,b=J(r,["className","onToggle","open","defaultOpen","size","data-color"]);const{cn:l}=f(),d=u.useRef(!(n||i)),[j,S]=A({value:n,onChange:x=>{e?.(x),d.current=!0},defaultValue:i});return c.createElement(v.Provider,{value:{open:n??j,toggleOpen:()=>S(x=>!x),size:o}},c.createElement("section",Object.assign({"data-color":p},b,{className:l("navds-expansioncard",a,`navds-expansioncard--${o}`,{"navds-expansioncard--open":n??j,"navds-expansioncard--no-animation":!d.current}),ref:t})))});g.Header=Q;g.Content=M;g.Title=W;g.Description=G;const k=({valgtSaksliste:r,valgtAvdelingEnhet:t,saksbehandlere:a})=>{const e=q(),{control:n}=C(),{mutate:i}=K({mutationFn:l=>R(r.sakslisteId,l.brukerIdent,l.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[N.SAKSLISTER_FOR_AVDELING]})}}),o=Math.ceil(a.length/2),p=a.slice(0,o),b=a.slice(o);return s.jsxs(P,{gap:"1",children:[s.jsx(h,{gap:"2",width:"50%",children:p.map(l=>s.jsx(O,{name:l.brukerIdent,control:n,label:l.navn,onChange:d=>i({brukerIdent:l.brukerIdent,checked:d})},l.brukerIdent))}),s.jsx(h,{gap:"2",children:b.map(l=>s.jsx(O,{name:l.brukerIdent,control:n,label:l.navn,onChange:d=>i({brukerIdent:l.brukerIdent,checked:d})},l.brukerIdent))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const X=({avdelingensSaksbehandlere:r=[],valgtSaksliste:t,valgtAvdelingEnhet:a})=>{const e=I(),n=r.toSorted((l,d)=>l.navn.localeCompare(d.navn)),{data:i}=E(F(a)),o=t.saksbehandlerIdenter.reduce((l,d)=>({...l,[d]:!0}),{}),p=_({defaultValues:o});u.useEffect(()=>{p.reset(o)},[t.sakslisteId]);const b=i&&i.saksbehandlerGrupper.length>0&&!i.saksbehandlerGrupper.every(l=>l.saksbehandlere.length===0);return s.jsx(T,{formMethods:p,children:s.jsx(z,{padding:"5",borderColor:"border-divider",borderRadius:"0",borderWidth:"1",children:s.jsxs(h,{gap:"2",children:[s.jsx(B,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&s.jsx(H,{children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),s.jsx(h,{gap:"10",children:b&&s.jsxs(m,{children:[s.jsx(m.Header,{children:s.jsxs(m.Row,{children:[s.jsx(m.HeaderCell,{}),s.jsx(m.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(m.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(m.Body,{children:i.saksbehandlerGrupper.map(l=>s.jsxs(m.ExpandableRow,{content:s.jsx(k,{saksbehandlere:l.saksbehandlere.map(d=>({brukerIdent:d.brukerIdent,navn:d.navn})),valgtSaksliste:t,valgtAvdelingEnhet:a}),expandOnRowClick:!0,children:[s.jsx(m.DataCell,{scope:"row",children:l.gruppeNavn}),s.jsx(m.DataCell,{children:Z(t,l)})]},l.gruppeId))})]})}),n.length>0&&!b&&s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a}),b&&s.jsxs(g,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(g.Header,{children:s.jsx(g.Title,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(g.Content,{children:s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a})})]})]})})})},Z=(r,t)=>{let a=0;return r.saksbehandlerIdenter.forEach(e=>{const n=t.saksbehandlere.filter(i=>i.brukerIdent===e);a+=n.length}),a};X.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{X as S};
