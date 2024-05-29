import{v as x,c as b,w as T,H as j,V as E,R as w,e as C,u as D,O as R,L as P,F as y,a as A}from"./nb_NO-8vkv4Fjx.js";import{r as o,R as s}from"./index-DogsOklH.js";import{b as q,a as _}from"./fplosRestApi-hxLEfccG.js";import{P as N}from"./Panel-roRo1son.js";import{T as d}from"./Table-jpuw6DY0.js";const h=o.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var F=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const K=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=F(n,["children","className"]);const i=o.useContext(h);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):s.createElement(x,Object.assign({},r,{ref:a,as:"div",className:b("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size}),s.createElement("div",{className:"navds-expansioncard__content-inner"},t))});var H=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const z=o.forwardRef((n,a)=>{var{className:t}=n,e=H(n,["className"]);const r=o.useContext(h);return r===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):s.createElement(x,Object.assign({},e,{as:"p",ref:a,className:b("navds-link-panel__description",t),size:r.size}))});var L=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const B=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=L(n,["children","className"]);const i=o.useContext(h);return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):s.createElement("div",Object.assign({ref:a},r,{className:b("navds-expansioncard__header",e)}),s.createElement("div",{className:"navds-expansioncard__header-content"},t),s.createElement("button",{className:"navds-expansioncard__header-button",onClick:()=>i.toggleOpen(),type:"button","aria-expanded":i.open},s.createElement(T,{className:"navds-expansioncard__header-chevron",title:"Vis mer"})))});var V=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const $=o.forwardRef((n,a)=>{var{className:t,as:e="h3",size:r="medium"}=n,i=V(n,["className","as","size"]);return s.createElement(e,Object.assign({},i,{ref:a,className:b("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var G=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const f=o.forwardRef((n,a)=>{var{className:t,onToggle:e,open:r,defaultOpen:i=!1,size:u="medium"}=n,p=G(n,["className","onToggle","open","defaultOpen","size"]);const[l,m]=o.useState(i),c=o.useRef(!(r||i)),g=()=>{if(r===void 0){const O=!l;m(O),e==null||e(O)}else e==null||e(!r);c.current=!0};return s.createElement(h.Provider,{value:{open:r??l,toggleOpen:g,size:u}},s.createElement("section",Object.assign({},p,{className:b("navds-expansioncard",t,`navds-expansioncard--${u}`,{"navds-expansioncard--open":r??l,"navds-expansioncard--no-animation":!c.current}),ref:a})))});f.Header=B;f.Content=K;f.Title=$;f.Description=z;const k=f,M="_panel_1j8jg_1",Y="_colLeft_1j8jg_6",S={panel:M,colLeft:Y},v=({valgtSaksliste:n,valgtAvdelingEnhet:a,hentAvdelingensSakslister:t,saksbehandlere:e})=>{const{startRequest:r}=q.useRestApiRunner(_.LAGRE_SAKSLISTE_SAKSBEHANDLER),i=Math.ceil(e.length/2),u=e.slice(0,i),p=e.slice(i);return s.createElement(j,null,s.createElement(E,{gap:"2",className:S.colLeft},u.map(l=>s.createElement(w,{key:l.brukerIdent,name:l.brukerIdent,label:l.navn,onChange:m=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:m,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))}))),s.createElement(E,{gap:"2"},p.map(l=>s.createElement(w,{key:l.brukerIdent,name:l.brukerIdent,label:l.navn,onChange:m=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:m,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))}))))};v.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const U=n=>n&&n instanceof Array?[...n].sort((a,t)=>a.navn.localeCompare(t.navn)):n,J=n=>n&&n.saksbehandlerGrupper.length>0&&!n.saksbehandlerGrupper.every(a=>a.saksbehandlere.length===0),Q=(n,a)=>{let t=0;return n.saksbehandlerIdenter.forEach(e=>{const r=a.saksbehandlere.filter(i=>i.brukerIdent===e);t+=r.length}),t},I=({avdelingensSaksbehandlere:n=[],valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})=>{const r=C(),i=o.useMemo(()=>U(n),[n]),{data:u}=q.useRestApi(_.HENT_GRUPPER,{avdelingEnhet:t}),p=a.saksbehandlerIdenter.reduce((c,g)=>({...c,[g]:!0}),{}),l=D({defaultValues:p});o.useEffect(()=>{l.reset(p)},[a.sakslisteId]);const m=J(u);return s.createElement(R,{formMethods:l},s.createElement(N,{className:S.panel},s.createElement(P,{size:"small"},s.createElement(y,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})),s.createElement(A,{sixteenPx:!0}),i.length===0&&s.createElement(y,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"}),s.createElement(E,{gap:"10"},m&&s.createElement(d,null,s.createElement(d.Header,null,s.createElement(d.Row,null,s.createElement(d.HeaderCell,null),s.createElement(d.HeaderCell,{scope:"col"},s.createElement(y,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})),s.createElement(d.HeaderCell,{scope:"col"},s.createElement(y,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})))),s.createElement(d.Body,null,u==null?void 0:u.saksbehandlerGrupper.map(c=>s.createElement(d.ExpandableRow,{key:c.gruppeId,content:s.createElement(v,{saksbehandlere:c.saksbehandlere.map(g=>({brukerIdent:g.brukerIdent,navn:g.navn})),valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})},s.createElement(d.DataCell,{scope:"row"},c.gruppeNavn),s.createElement(d.DataCell,null,Q(a,c)))))),i.length>0&&!m&&s.createElement(v,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}),m&&s.createElement(k,{"aria-label":r.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small"},s.createElement(k.Header,null,s.createElement(k.Title,{size:"small"},s.createElement(y,{id:"SaksbehandlereForSakslisteForm.VisAlle"}))),s.createElement(k.Content,null,s.createElement(v,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}))))))},re=I;I.__docgenInfo={description:"SaksbehandlereForSakslisteForm",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{re as S};
