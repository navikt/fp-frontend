import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{r as w,c as k,s as _,H as I,V as x,w as j,d as S,u as T,$ as C,L as D,M as f,y as P}from"./nb_NO-DhmRaBXY.js";import{r as o,R as m}from"./index-uubelm5h.js";import{b as O,a as E}from"./fplosRestApi-1yojVYCb.js";import{P as R}from"./Panel-DbDHdpVp.js";import{u as A,T as u}from"./Table-ClAnTQq7.js";const h=o.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var N=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const F=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=N(n,["children","className"]);const i=o.useContext(h);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):m.createElement(w,Object.assign({},r,{ref:a,as:"div",className:k("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size}),m.createElement("div",{className:"navds-expansioncard__content-inner"},t))});var K=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const H=o.forwardRef((n,a)=>{var{className:t}=n,e=K(n,["className"]);const r=o.useContext(h);return r===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):m.createElement(w,Object.assign({},e,{as:"p",ref:a,className:k("navds-link-panel__description",t),size:r.size}))});var z=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const L=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=z(n,["children","className"]);const i=o.useContext(h);return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):m.createElement("div",Object.assign({ref:a},r,{className:k("navds-expansioncard__header",e)}),m.createElement("div",{className:"navds-expansioncard__header-content"},t),m.createElement("button",{className:"navds-expansioncard__header-button",onClick:()=>i.toggleOpen(),type:"button","aria-expanded":i.open},m.createElement(_,{className:"navds-expansioncard__header-chevron",title:"Vis mer"})))});var V=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const B=o.forwardRef((n,a)=>{var{className:t,as:e="h3",size:r="medium"}=n,i=V(n,["className","as","size"]);return m.createElement(e,Object.assign({},i,{ref:a,className:k("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var $=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const y=o.forwardRef((n,a)=>{var{className:t,onToggle:e,open:r,defaultOpen:i=!1,size:p="medium"}=n,b=$(n,["className","onToggle","open","defaultOpen","size"]);const l=o.useRef(!(r||i)),[d,c]=A({value:r,onChange:g=>{e==null||e(g),l.current=!0},defaultValue:i});return m.createElement(h.Provider,{value:{open:r??d,toggleOpen:()=>c(g=>!g),size:p}},m.createElement("section",Object.assign({},b,{className:k("navds-expansioncard",t,`navds-expansioncard--${p}`,{"navds-expansioncard--open":r??d,"navds-expansioncard--no-animation":!l.current}),ref:a})))});y.Header=L;y.Content=F;y.Title=B;y.Description=H;const G="_panel_1j8jg_1",M="_colLeft_1j8jg_6",q={panel:G,colLeft:M},v=({valgtSaksliste:n,valgtAvdelingEnhet:a,hentAvdelingensSakslister:t,saksbehandlere:e})=>{const{startRequest:r}=O.useRestApiRunner(E.LAGRE_SAKSLISTE_SAKSBEHANDLER),i=Math.ceil(e.length/2),p=e.slice(0,i),b=e.slice(i);return s.jsxs(I,{children:[s.jsx(x,{gap:"2",className:q.colLeft,children:p.map(l=>s.jsx(j,{name:l.brukerIdent,label:l.navn,onChange:d=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:d,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))},l.brukerIdent))}),s.jsx(x,{gap:"2",children:b.map(l=>s.jsx(j,{name:l.brukerIdent,label:l.navn,onChange:d=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:d,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))},l.brukerIdent))})]})};v.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const Y=n=>n&&n instanceof Array?[...n].sort((a,t)=>a.navn.localeCompare(t.navn)):n,U=n=>n&&n.saksbehandlerGrupper.length>0&&!n.saksbehandlerGrupper.every(a=>a.saksbehandlere.length===0),J=(n,a)=>{let t=0;return n.saksbehandlerIdenter.forEach(e=>{const r=a.saksbehandlere.filter(i=>i.brukerIdent===e);t+=r.length}),t},Q=({avdelingensSaksbehandlere:n=[],valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})=>{const r=S(),i=o.useMemo(()=>Y(n),[n]),{data:p}=O.useRestApi(E.HENT_GRUPPER,{avdelingEnhet:t}),b=a.saksbehandlerIdenter.reduce((c,g)=>({...c,[g]:!0}),{}),l=T({defaultValues:b});o.useEffect(()=>{l.reset(b)},[a.sakslisteId]);const d=U(p);return s.jsx(C,{formMethods:l,children:s.jsxs(R,{className:q.panel,children:[s.jsx(D,{size:"small",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})}),s.jsx(P,{sixteenPx:!0}),i.length===0&&s.jsx(f,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"}),s.jsxs(x,{gap:"10",children:[d&&s.jsxs(u,{children:[s.jsx(u.Header,{children:s.jsxs(u.Row,{children:[s.jsx(u.HeaderCell,{}),s.jsx(u.HeaderCell,{scope:"col",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})}),s.jsx(u.HeaderCell,{scope:"col",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})})]})}),s.jsx(u.Body,{children:p==null?void 0:p.saksbehandlerGrupper.map(c=>s.jsxs(u.ExpandableRow,{content:s.jsx(v,{saksbehandlere:c.saksbehandlere.map(g=>({brukerIdent:g.brukerIdent,navn:g.navn})),valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}),children:[s.jsx(u.DataCell,{scope:"row",children:c.gruppeNavn}),s.jsx(u.DataCell,{children:J(a,c)})]},c.gruppeId))})]}),i.length>0&&!d&&s.jsx(v,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}),d&&s.jsxs(y,{"aria-label":r.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small",children:[s.jsx(y.Header,{children:s.jsx(y.Title,{size:"small",children:s.jsx(f,{id:"SaksbehandlereForSakslisteForm.VisAlle"})})}),s.jsx(y.Content,{children:s.jsx(v,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})})]})]})]})})};Q.__docgenInfo={description:"SaksbehandlereForSakslisteForm",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SaksbehandlerProfil[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{Q as S};
