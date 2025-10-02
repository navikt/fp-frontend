import{r as m,b as f,a as S,R as p,c as I,j as s,u as C}from"./iframe-CCFQyhPp.js";import{u as q,b as j,a as _,C as B}from"./index.es-C8ZP6_50.js";import{u as E}from"./useQuery-DZ0O7Bbz.js";import"./FlyttReservasjonModal-ChvNSYV8.js";import{e as D,L as A,H as R,V as v,g as P}from"./fplosAvdelingslederApi-ChUQrZEV.js";import{u as N}from"./useMutation-B_UX37KR.js";import{B as F}from"./Box-D_xOVkOM.js";import{a as O,L as K,M as b,B as z}from"./nb_NO-D_fTjNdm.js";import{T as c}from"./Table-CmgUWLpW.js";import{a as H,b as V,c as L}from"./Modal-J1YK6MK1.js";const h=m.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var M=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const $=m.forwardRef((r,t)=>{var{children:a,className:e}=r,n=M(r,["children","className"]);const{cn:l}=f(),o=m.useContext(h),u=S(!1);return o===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):p.createElement(O,Object.assign({"data-color":u?.color},n,{ref:t,as:"div",className:l("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!o.open}),"aria-hidden":!o.open,size:o.size,"data-open":o.open}),p.createElement("div",{className:l("navds-expansioncard__content-inner")},a))});var G=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const Y=m.forwardRef((r,t)=>{var{className:a}=r,e=G(r,["className"]);const{cn:n}=f(),l=m.useContext(h);return l===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):p.createElement(O,Object.assign({},e,{as:"p",ref:t,className:n("navds-link-panel__description",a),size:l.size}))});var Q=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const U=m.forwardRef((r,t)=>{var{children:a,className:e}=r,n=Q(r,["children","className"]);const{cn:l}=f(),o=m.useContext(h),u=H("global");return o===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):p.createElement("div",Object.assign({ref:t},n,{className:l("navds-expansioncard__header",e),"data-open":o.open}),p.createElement("div",{className:l("navds-expansioncard__header-content")},a),p.createElement("button",{className:l("navds-expansioncard__header-button"),onClick:o.toggleOpen,type:"button","aria-expanded":o.open},p.createElement(V,{className:l("navds-expansioncard__header-chevron"),title:u("showMore")})))});var W=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const J=m.forwardRef((r,t)=>{var{className:a,as:e="h3",size:n="medium"}=r,l=W(r,["className","as","size"]);const{cn:o}=f();return p.createElement(e,Object.assign({},l,{ref:t,className:o("navds-expansioncard__title",`navds-expansioncard__title--${n}`,"navds-heading",`navds-heading--${n}`,a)}))});var X=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const g=m.forwardRef((r,t)=>{var{className:a,onToggle:e,open:n,defaultOpen:l=!1,size:o="medium","data-color":u="neutral"}=r,y=X(r,["className","onToggle","open","defaultOpen","size","data-color"]);const{cn:i}=f(),d=m.useRef(!(n||l)),[T,w]=L({value:n,onChange:x=>{e?.(x),d.current=!0},defaultValue:l});return p.createElement(h.Provider,{value:{open:n??T,toggleOpen:()=>w(x=>!x),size:o}},p.createElement("section",Object.assign({"data-color":u},y,{className:i("navds-expansioncard",a,`navds-expansioncard--${o}`,{"navds-expansioncard--open":n??T,"navds-expansioncard--no-animation":!d.current}),ref:t})))});g.Header=U;g.Content=$;g.Title=J;g.Description=Y;const k=({valgtSaksliste:r,valgtAvdelingEnhet:t,saksbehandlere:a})=>{const e=I(),{control:n}=q(),{mutate:l}=N({mutationFn:i=>D(r.sakslisteId,i.brukerIdent,i.checked,t),onSuccess:()=>{e.invalidateQueries({queryKey:[A.SAKSLISTER_FOR_AVDELING]})}}),o=Math.ceil(a.length/2),u=a.slice(0,o),y=a.slice(o);return s.jsxs(R,{gap:"space-4",children:[s.jsx(v,{gap:"space-8",width:"50%",children:u.map(i=>s.jsx(j,{name:i.brukerIdent,control:n,label:i.navn,onChange:d=>l({brukerIdent:i.brukerIdent,checked:d})},i.brukerIdent))}),s.jsx(v,{gap:"space-8",children:y.map(i=>s.jsx(j,{name:i.brukerIdent,control:n,label:i.navn,onChange:d=>l({brukerIdent:i.brukerIdent,checked:d})},i.brukerIdent))})]})};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]}],raw:"BehandlingType[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
  behandlingTyper?: BehandlingType[];
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
}[]`},description:""}}};const Z=({avdelingensSaksbehandlere:r=[],valgtSaksliste:t,valgtAvdelingEnhet:a})=>{const e=C(),n=r.toSorted((i,d)=>i.navn.localeCompare(d.navn)),{data:l}=E(P(a)),o=t.saksbehandlerIdenter.reduce((i,d)=>({...i,[d]:!0}),{}),u=_({defaultValues:o});m.useEffect(()=>{u.reset(o)},[t.sakslisteId]);const y=l&&l.saksbehandlerGrupper.length>0&&!l.saksbehandlerGrupper.every(i=>i.saksbehandlere.length===0);return s.jsx(B,{formMethods:u,children:s.jsx(F.New,{padding:"5",borderColor:"neutral-subtle",borderRadius:"0",borderWidth:"1",children:s.jsxs(v,{gap:"space-8",children:[s.jsx(K,{size:"small",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),n.length===0&&s.jsx(z,{children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"})}),s.jsx(v,{gap:"space-40",children:y&&s.jsxs(c,{children:[s.jsx(c.Header,{children:s.jsxs(c.Row,{children:[s.jsx(c.HeaderCell,{}),s.jsx(c.HeaderCell,{scope:"col",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(c.HeaderCell,{scope:"col",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(c.Body,{children:l.saksbehandlerGrupper.map(i=>s.jsxs(c.ExpandableRow,{content:s.jsx(k,{saksbehandlere:i.saksbehandlere.map(d=>({brukerIdent:d.brukerIdent,navn:d.navn})),valgtSaksliste:t,valgtAvdelingEnhet:a}),expandOnRowClick:!0,children:[s.jsx(c.DataCell,{scope:"row",children:i.gruppeNavn}),s.jsx(c.DataCell,{children:ee(t,i)})]},i.gruppeId))})]})}),n.length>0&&!y&&s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a}),y&&s.jsxs(g,{"aria-label":e.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(g.Header,{children:s.jsx(g.Title,{size:"small",children:s.jsx(b,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(g.Content,{children:s.jsx(k,{saksbehandlere:n,valgtSaksliste:t,valgtAvdelingEnhet:a})})]})]})})})},ee=(r,t)=>{let a=0;for(const e of r.saksbehandlerIdenter){const n=t.saksbehandlere.filter(l=>l.brukerIdent===e);a+=n.length}return a};Z.__docgenInfo={description:"",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: BehandlingType[];
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
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]}],raw:"BehandlingType[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
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
  behandlingTyper?: BehandlingType[];
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
