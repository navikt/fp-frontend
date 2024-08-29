import{j as s}from"./dayjs.min-ZUODdiE-.js";import{q as O,c as k,r as _,H as I,V as x,S as j,a as T,u as C,Y as D,L as P,M as f,y as R}from"./nb_NO-ffV-qhYU.js";import{r as o,R as m}from"./index-uubelm5h.js";import{b as w,a as q}from"./fplosRestApi-CXjbKy4z.js";import{P as A}from"./Panel-HELrIUHO.js";import{u as N,T as u}from"./Table-BNax95ki.js";const h=o.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var F=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const K=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=F(n,["children","className"]);const i=o.useContext(h);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):m.createElement(O,Object.assign({},r,{ref:a,as:"div",className:k("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size}),m.createElement("div",{className:"navds-expansioncard__content-inner"},t))});var H=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const z=o.forwardRef((n,a)=>{var{className:t}=n,e=H(n,["className"]);const r=o.useContext(h);return r===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):m.createElement(O,Object.assign({},e,{as:"p",ref:a,className:k("navds-link-panel__description",t),size:r.size}))});var L=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const V=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=L(n,["children","className"]);const i=o.useContext(h);return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):m.createElement("div",Object.assign({ref:a},r,{className:k("navds-expansioncard__header",e)}),m.createElement("div",{className:"navds-expansioncard__header-content"},t),m.createElement("button",{className:"navds-expansioncard__header-button",onClick:()=>i.toggleOpen(),type:"button","aria-expanded":i.open},m.createElement(_,{className:"navds-expansioncard__header-chevron",title:"Vis mer"})))});var B=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const G=o.forwardRef((n,a)=>{var{className:t,as:e="h3",size:r="medium"}=n,i=B(n,["className","as","size"]);return m.createElement(e,Object.assign({},i,{ref:a,className:k("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var M=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const y=o.forwardRef((n,a)=>{var{className:t,onToggle:e,open:r,defaultOpen:i=!1,size:p="medium"}=n,b=M(n,["className","onToggle","open","defaultOpen","size"]);const l=o.useRef(!(r||i)),[d,c]=N({value:r,onChange:g=>{e==null||e(g),l.current=!0},defaultValue:i});return m.createElement(h.Provider,{value:{open:r??d,toggleOpen:()=>c(g=>!g),size:p}},m.createElement("section",Object.assign({},b,{className:k("navds-expansioncard",t,`navds-expansioncard--${p}`,{"navds-expansioncard--open":r??d,"navds-expansioncard--no-animation":!l.current}),ref:a})))});y.Header=V;y.Content=K;y.Title=G;y.Description=z;const Y="_panel_1j8jg_1",$="_colLeft_1j8jg_6",E={panel:Y,colLeft:$},v=({valgtSaksliste:n,valgtAvdelingEnhet:a,hentAvdelingensSakslister:t,saksbehandlere:e})=>{const{startRequest:r}=w.useRestApiRunner(q.LAGRE_SAKSLISTE_SAKSBEHANDLER),i=Math.ceil(e.length/2),p=e.slice(0,i),b=e.slice(i);return s.jsxs(I,{children:[s.jsx(x,{gap:"2",className:E.colLeft,children:p.map(l=>s.jsx(j,{name:l.brukerIdent,label:l.navn,onChange:d=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:d,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))},l.brukerIdent))}),s.jsx(x,{gap:"2",children:b.map(l=>s.jsx(j,{name:l.brukerIdent,label:l.navn,onChange:d=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:d,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))},l.brukerIdent))})]})};v.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`{
  brukerIdent: string;
  navn: string;
}[]`},description:""}}};const U=n=>n&&n instanceof Array?[...n].sort((a,t)=>a.navn.localeCompare(t.navn)):n,J=n=>n&&n.saksbehandlerGrupper.length>0&&!n.saksbehandlerGrupper.every(a=>a.saksbehandlere.length===0),Q=(n,a)=>{let t=0;return n.saksbehandlerIdenter.forEach(e=>{const r=a.saksbehandlere.filter(i=>i.brukerIdent===e);t+=r.length}),t},S=({avdelingensSaksbehandlere:n=[],valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})=>{const r=T(),i=o.useMemo(()=>U(n),[n]),{data:p}=w.useRestApi(q.HENT_GRUPPER,{avdelingEnhet:t}),b=a.saksbehandlerIdenter.reduce((c,g)=>({...c,[g]:!0}),{}),l=C({defaultValues:b});o.useEffect(()=>{l.reset(b)},[a.sakslisteId]);const d=J(p);return s.jsx(D,{formMethods:l,children:s.jsxs(A,{className:E.panel,children:[s.jsx(P,{size:"small",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),s.jsx(R,{sixteenPx:!0}),i.length===0&&s.jsx(f,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"}),s.jsxs(x,{gap:"10",children:[d&&s.jsxs(u,{children:[s.jsx(u.Header,{children:s.jsxs(u.Row,{children:[s.jsx(u.HeaderCell,{}),s.jsx(u.HeaderCell,{scope:"col",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(u.HeaderCell,{scope:"col",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(u.Body,{children:p==null?void 0:p.saksbehandlerGrupper.map(c=>s.jsxs(u.ExpandableRow,{content:s.jsx(v,{saksbehandlere:c.saksbehandlere.map(g=>({brukerIdent:g.brukerIdent,navn:g.navn})),valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}),children:[s.jsx(u.DataCell,{scope:"row",children:c.gruppeNavn}),s.jsx(u.DataCell,{children:Q(a,c)})]},c.gruppeId))})]}),i.length>0&&!d&&s.jsx(v,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}),d&&s.jsxs(y,{"aria-label":r.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(y.Header,{children:s.jsx(y.Title,{size:"small",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(y.Content,{children:s.jsx(v,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})})]})]})]})})},ae=S;S.__docgenInfo={description:"SaksbehandlereForSakslisteForm",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{ae as S};
