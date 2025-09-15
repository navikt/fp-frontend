import{r as u,b as f,R as m,k as I,j as s,h as C}from"./iframe-7_HEPCb1.js";import{u as T,T as O,a as q,M as _}from"./index.es-PglJzgV9.js";import{u as E}from"./useQuery-BVHLl9mH.js";import"./FlyttReservasjonModal-DZW3DRUy.js";import{g as D,L as A,H as R,V as h,i as P}from"./fplosAvdelingslederApi-BJxU-aXk.js";import{u as N}from"./useMutation-BqgPo4m-.js";import{B as F}from"./Box-BZIyvpE_.js";import{a as w,L as K,M as y,B as z}from"./nb_NO-BK0Dl5Mc.js";import{T as c}from"./Table-BjCnrXEp.js";import{b as H,d as V,a as M}from"./Modal-BaMdcQMJ.js";const v=u.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var L=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const B=u.forwardRef((r,t)=>{var{children:a,className:e}=r,n=L(r,["children","className"]);const{cn:i}=f(),l=u.useContext(v);return l===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):m.createElement(w,Object.assign({},n,{ref:t,as:"div",className:i("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!l.open}),"aria-hidden":!l.open,size:l.size,"data-open":l.open}),m.createElement("div",{className:i("navds-expansioncard__content-inner")},a))});var $=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const G=u.forwardRef((r,t)=>{var{className:a}=r,e=$(r,["className"]);const{cn:n}=f(),i=u.useContext(v);return i===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):m.createElement(w,Object.assign({},e,{as:"p",ref:t,className:n("navds-link-panel__description",a),size:i.size}))});var Y=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const Q=u.forwardRef((r,t)=>{var{children:a,className:e}=r,n=Y(r,["children","className"]);const{cn:i}=f(),l=u.useContext(v),p=H("global");return l===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):m.createElement("div",Object.assign({ref:t},n,{className:i("navds-expansioncard__header",e),"data-open":l.open}),m.createElement("div",{className:i("navds-expansioncard__header-content")},a),m.createElement("button",{className:i("navds-expansioncard__header-button"),onClick:l.toggleOpen,type:"button","aria-expanded":l.open},m.createElement(V,{className:i("navds-expansioncard__header-chevron"),title:p("showMore")})))});var U=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const W=u.forwardRef((r,t)=>{var{className:a,as:e="h3",size:n="medium"}=r,i=U(r,["className","as","size"]);const{cn:l}=f();return m.createElement(e,Object.assign({},i,{ref:t,className:l("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,a)}))});var J=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const g=u.forwardRef((r,t)=>{var{className:a,onToggle:e,open:n,defaultOpen:i=!1,size:l="medium","data-color":p="neutral"}=r,b=J(r,["className","onToggle","open","defaultOpen","size","data-color"]);const{cn:o}=f(),d=u.useRef(!(n||i)),[j,S]=M({value:n,onChange:x=>{e?.(x),d.current=!0},defaultValue:i});return m.createElement(v.Provider,{value:{open:n??j,toggleOpen:()=>S(x=>!x),size:l}},m.createElement("section",Object.assign({"data-color":p},b,{className:o("navds-expansioncard",a,`navds-expansioncard--${l}`,{"navds-expansioncard--open":n??j,"navds-expansioncard--no-animation":!d.current}),ref:t})))});g.Header=Q;g.Content=B;g.Title=W;g.Description=G;const k=({valgtSaksliste:r,valgtAvdelingEnhet:t,saksbehandlere:a})=>{const e=I(),{control:n}=T(),{mutate:i}=N({mutationFn:o=>D(r.sakslisteId,o.brukerIdent,o.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[A.SAKSLISTER_FOR_AVDELING]})}}),l=Math.ceil(a.length/2),p=a.slice(0,l),b=a.slice(l);return s.jsxs(R,{gap:"space-4",children:[s.jsx(h,{gap:"space-8",width:"50%",children:p.map(o=>s.jsx(O,{name:o.brukerIdent,control:n,label:o.navn,onChange:d=>i({brukerIdent:o.brukerIdent,checked:d})},o.brukerIdent))}),s.jsx(h,{gap:"space-8",children:b.map(o=>s.jsx(O,{name:o.brukerIdent,control:n,label:o.navn,onChange:d=>i({brukerIdent:o.brukerIdent,checked:d})},o.brukerIdent))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const X=({avdelingensSaksbehandlere:r=[],valgtSaksliste:t,valgtAvdelingEnhet:a})=>{const e=C(),n=r.toSorted((o,d)=>o.navn.localeCompare(d.navn)),{data:i}=E(P(a)),l=t.saksbehandlerIdenter.reduce((o,d)=>({...o,[d]:!0}),{}),p=q({defaultValues:l});u.useEffect(()=>{p.reset(l)},[t.sakslisteId]);const b=i&&i.saksbehandlerGrupper.length>0&&!i.saksbehandlerGrupper.every(o=>o.saksbehandlere.length===0);return s.jsx(_,{formMethods:p,children:s.jsx(F.New,{padding:"5",borderColor:"neutral-subtle",borderRadius:"0",borderWidth:"1",children:s.jsxs(h,{gap:"space-8",children:[s.jsx(K,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&s.jsx(z,{children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),s.jsx(h,{gap:"space-40",children:b&&s.jsxs(c,{children:[s.jsx(c.Header,{children:s.jsxs(c.Row,{children:[s.jsx(c.HeaderCell,{}),s.jsx(c.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(c.HeaderCell,{scope:"col",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(c.Body,{children:i.saksbehandlerGrupper.map(o=>s.jsxs(c.ExpandableRow,{content:s.jsx(k,{saksbehandlere:o.saksbehandlere.map(d=>({brukerIdent:d.brukerIdent,navn:d.navn})),valgtSaksliste:t,valgtAvdelingEnhet:a}),expandOnRowClick:!0,children:[s.jsx(c.DataCell,{scope:"row",children:o.gruppeNavn}),s.jsx(c.DataCell,{children:Z(t,o)})]},o.gruppeId))})]})}),n.length>0&&!b&&s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a}),b&&s.jsxs(g,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(g.Header,{children:s.jsx(g.Title,{size:"small",children:s.jsx(y,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(g.Content,{children:s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a})})]})]})})})},Z=(r,t)=>{let a=0;return r.saksbehandlerIdenter.forEach(e=>{const n=t.saksbehandlere.filter(i=>i.brukerIdent===e);a+=n.length}),a};X.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{X as S};
