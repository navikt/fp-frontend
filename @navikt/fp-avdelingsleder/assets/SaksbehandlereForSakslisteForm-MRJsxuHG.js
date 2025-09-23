import{r as c,b as f,a as I,R as p,c as C,j as s,u as q}from"./iframe-SV0gOgCg.js";import{u as T,b as O,a as _,C as E}from"./index.es-B5XGfohI.js";import{u as D}from"./useQuery-CnrqIT16.js";import"./FlyttReservasjonModal-BBomiO1t.js";import{e as A,L as R,H as P,V as h,g as N}from"./fplosAvdelingslederApi-C-IRSUyG.js";import{u as F}from"./useMutation-B66USNia.js";import{B as K}from"./Box-DmdOmq-U.js";import{a as w,L as z,M as y,B as H}from"./nb_NO-DX47cQDs.js";import{T as m}from"./Table-DxJ3LNs8.js";import{a as V,b as L,c as M}from"./Modal-DFlSmv3I.js";const v=c.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var B=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const $=c.forwardRef((r,t)=>{var{children:a,className:e}=r,n=B(r,["children","className"]);const{cn:i}=f(),l=c.useContext(v),u=I(!1);return l===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):p.createElement(w,Object.assign({"data-color":u?.color},n,{ref:t,as:"div",className:i("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!l.open}),"aria-hidden":!l.open,size:l.size,"data-open":l.open}),p.createElement("div",{className:i("navds-expansioncard__content-inner")},a))});var G=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const Y=c.forwardRef((r,t)=>{var{className:a}=r,e=G(r,["className"]);const{cn:n}=f(),i=c.useContext(v);return i===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):p.createElement(w,Object.assign({},e,{as:"p",ref:t,className:n("navds-link-panel__description",a),size:i.size}))});var Q=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const U=c.forwardRef((r,t)=>{var{children:a,className:e}=r,n=Q(r,["children","className"]);const{cn:i}=f(),l=c.useContext(v),u=V("global");return l===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):p.createElement("div",Object.assign({ref:t},n,{className:i("navds-expansioncard__header",e),"data-open":l.open}),p.createElement("div",{className:i("navds-expansioncard__header-content")},a),p.createElement("button",{className:i("navds-expansioncard__header-button"),onClick:l.toggleOpen,type:"button","aria-expanded":l.open},p.createElement(L,{className:i("navds-expansioncard__header-chevron"),title:u("showMore")})))});var W=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const J=c.forwardRef((r,t)=>{var{className:a,as:e="h3",size:n="medium"}=r,i=W(r,["className","as","size"]);const{cn:l}=f();return p.createElement(e,Object.assign({},i,{ref:t,className:l("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,a)}))});var X=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const g=c.forwardRef((r,t)=>{var{className:a,onToggle:e,open:n,defaultOpen:i=!1,size:l="medium","data-color":u="neutral"}=r,b=X(r,["className","onToggle","open","defaultOpen","size","data-color"]);const{cn:o}=f(),d=c.useRef(!(n||i)),[j,S]=M({value:n,onChange:x=>{e?.(x),d.current=!0},defaultValue:i});return p.createElement(v.Provider,{value:{open:n??j,toggleOpen:()=>S(x=>!x),size:l}},p.createElement("section",Object.assign({"data-color":u},b,{className:o("navds-expansioncard",a,`navds-expansioncard--${l}`,{"navds-expansioncard--open":n??j,"navds-expansioncard--no-animation":!d.current}),ref:t})))});g.Header=U;g.Content=$;g.Title=J;g.Description=Y;const k=({valgtSaksliste:r,valgtAvdelingEnhet:t,saksbehandlere:a})=>{const e=C(),{control:n}=T(),{mutate:i}=F({mutationFn:o=>A(r.sakslisteId,o.brukerIdent,o.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[R.SAKSLISTER_FOR_AVDELING]})}}),l=Math.ceil(a.length/2),u=a.slice(0,l),b=a.slice(l);return s.jsxs(P,{gap:"space-4",children:[s.jsx(h,{gap:"space-8",width:"50%",children:u.map(o=>s.jsx(O,{name:o.brukerIdent,control:n,label:o.navn,onChange:d=>i({brukerIdent:o.brukerIdent,checked:d})},o.brukerIdent))}),s.jsx(h,{gap:"space-8",children:b.map(o=>s.jsx(O,{name:o.brukerIdent,control:n,label:o.navn,onChange:d=>i({brukerIdent:o.brukerIdent,checked:d})},o.brukerIdent))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`{
  brukerIdent: string;
  navn: string;
}[]`},description:""}}};const Z=({avdelingensSaksbehandlere:r=[],valgtSaksliste:t,valgtAvdelingEnhet:a})=>{const e=q(),n=r.toSorted((o,d)=>o.navn.localeCompare(d.navn)),{data:i}=D(N(a)),l=t.saksbehandlerIdenter.reduce((o,d)=>({...o,[d]:!0}),{}),u=_({defaultValues:l});c.useEffect(()=>{u.reset(l)},[t.sakslisteId]);const b=i&&i.saksbehandlerGrupper.length>0&&!i.saksbehandlerGrupper.every(o=>o.saksbehandlere.length===0);return s.jsx(E,{formMethods:u,children:s.jsx(K.New,{padding:"5",borderColor:"neutral-subtle",borderRadius:"0",borderWidth:"1",children:s.jsxs(h,{gap:"space-8",children:[s.jsx(z,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&s.jsx(H,{children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),s.jsx(h,{gap:"space-40",children:b&&s.jsxs(m,{children:[s.jsx(m.Header,{children:s.jsxs(m.Row,{children:[s.jsx(m.HeaderCell,{}),s.jsx(m.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(m.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(m.Body,{children:i.saksbehandlerGrupper.map(o=>s.jsxs(m.ExpandableRow,{content:s.jsx(k,{saksbehandlere:o.saksbehandlere.map(d=>({brukerIdent:d.brukerIdent,navn:d.navn})),valgtSaksliste:t,valgtAvdelingEnhet:a}),expandOnRowClick:!0,children:[s.jsx(m.DataCell,{scope:"row",children:o.gruppeNavn}),s.jsx(m.DataCell,{children:ee(t,o)})]},o.gruppeId))})]})}),n.length>0&&!b&&s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a}),b&&s.jsxs(g,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(g.Header,{children:s.jsx(g.Title,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(g.Content,{children:s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a})})]})]})})})},ee=(r,t)=>{let a=0;return r.saksbehandlerIdenter.forEach(e=>{const n=t.saksbehandlere.filter(i=>i.brukerIdent===e);a+=n.length}),a};Z.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
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
}>`},description:""},avdelingensSaksbehandlere:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{Z as S};
