import{w as O,c as f,y as S,H as I,V as h,R as E,e as T,u as j,O as C,L as D,M as b,a as R}from"./nb_NO-Dpo8zdWW.js";import{r as o,R as s}from"./index-BBkUAzwr.js";import{b as w,a as q}from"./fplosRestApi-B7o859yn.js";import{P}from"./Panel-BeohLQId.js";import{u as A,T as u}from"./Table-Bw9lLzTB.js";const v=o.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var N=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const F=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=N(n,["children","className"]);const i=o.useContext(v);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):s.createElement(O,Object.assign({},r,{ref:a,as:"div",className:f("navds-expansioncard__content",e,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size}),s.createElement("div",{className:"navds-expansioncard__content-inner"},t))});var K=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const H=o.forwardRef((n,a)=>{var{className:t}=n,e=K(n,["className"]);const r=o.useContext(v);return r===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):s.createElement(O,Object.assign({},e,{as:"p",ref:a,className:f("navds-link-panel__description",t),size:r.size}))});var z=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const L=o.forwardRef((n,a)=>{var{children:t,className:e}=n,r=z(n,["children","className"]);const i=o.useContext(v);return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):s.createElement("div",Object.assign({ref:a},r,{className:f("navds-expansioncard__header",e)}),s.createElement("div",{className:"navds-expansioncard__header-content"},t),s.createElement("button",{className:"navds-expansioncard__header-button",onClick:()=>i.toggleOpen(),type:"button","aria-expanded":i.open},s.createElement(S,{className:"navds-expansioncard__header-chevron",title:"Vis mer"})))});var V=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const B=o.forwardRef((n,a)=>{var{className:t,as:e="h3",size:r="medium"}=n,i=V(n,["className","as","size"]);return s.createElement(e,Object.assign({},i,{ref:a,className:f("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var G=function(n,a){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&a.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(n);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(n,e[r])&&(t[e[r]]=n[e[r]]);return t};const g=o.forwardRef((n,a)=>{var{className:t,onToggle:e,open:r,defaultOpen:i=!1,size:m="medium"}=n,y=G(n,["className","onToggle","open","defaultOpen","size"]);const l=o.useRef(!(r||i)),[d,c]=A({value:r,onChange:p=>{e==null||e(p),l.current=!0},defaultValue:i});return s.createElement(v.Provider,{value:{open:r??d,toggleOpen:()=>c(p=>!p),size:m}},s.createElement("section",Object.assign({},y,{className:f("navds-expansioncard",t,`navds-expansioncard--${m}`,{"navds-expansioncard--open":r??d,"navds-expansioncard--no-animation":!l.current}),ref:a})))});g.Header=L;g.Content=F;g.Title=B;g.Description=H;const M="_panel_1j8jg_1",$="_colLeft_1j8jg_6",x={panel:M,colLeft:$},k=({valgtSaksliste:n,valgtAvdelingEnhet:a,hentAvdelingensSakslister:t,saksbehandlere:e})=>{const{startRequest:r}=w.useRestApiRunner(q.LAGRE_SAKSLISTE_SAKSBEHANDLER),i=Math.ceil(e.length/2),m=e.slice(0,i),y=e.slice(i);return s.createElement(I,null,s.createElement(h,{gap:"2",className:x.colLeft},m.map(l=>s.createElement(E,{key:l.brukerIdent,name:l.brukerIdent,label:l.navn,onChange:d=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:d,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))}))),s.createElement(h,{gap:"2"},y.map(l=>s.createElement(E,{key:l.brukerIdent,name:l.brukerIdent,label:l.navn,onChange:d=>r({sakslisteId:n.sakslisteId,brukerIdent:l.brukerIdent,checked:d,avdelingEnhet:a}).then(()=>t({avdelingEnhet:a}))}))))};k.__docgenInfo={description:"",methods:[],displayName:"ValgAvSaksbehandlere",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}[]`},description:""}}};const Y=n=>n&&n instanceof Array?[...n].sort((a,t)=>a.navn.localeCompare(t.navn)):n,U=n=>n&&n.saksbehandlerGrupper.length>0&&!n.saksbehandlerGrupper.every(a=>a.saksbehandlere.length===0),J=(n,a)=>{let t=0;return n.saksbehandlerIdenter.forEach(e=>{const r=a.saksbehandlere.filter(i=>i.brukerIdent===e);t+=r.length}),t},_=({avdelingensSaksbehandlere:n=[],valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})=>{const r=T(),i=o.useMemo(()=>Y(n),[n]),{data:m}=w.useRestApi(q.HENT_GRUPPER,{avdelingEnhet:t}),y=a.saksbehandlerIdenter.reduce((c,p)=>({...c,[p]:!0}),{}),l=j({defaultValues:y});o.useEffect(()=>{l.reset(y)},[a.sakslisteId]);const d=U(m);return s.createElement(C,{formMethods:l},s.createElement(P,{className:x.panel},s.createElement(D,{size:"small"},s.createElement(b,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})),s.createElement(R,{sixteenPx:!0}),i.length===0&&s.createElement(b,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"}),s.createElement(h,{gap:"10"},d&&s.createElement(u,null,s.createElement(u.Header,null,s.createElement(u.Row,null,s.createElement(u.HeaderCell,null),s.createElement(u.HeaderCell,{scope:"col"},s.createElement(b,{id:"SaksbehandlereForSakslisteForm.Gruppenavn"})),s.createElement(u.HeaderCell,{scope:"col"},s.createElement(b,{id:"SaksbehandlereForSakslisteForm.AntallSaksbehandlere"})))),s.createElement(u.Body,null,m==null?void 0:m.saksbehandlerGrupper.map(c=>s.createElement(u.ExpandableRow,{key:c.gruppeId,content:s.createElement(k,{saksbehandlere:c.saksbehandlere.map(p=>({brukerIdent:p.brukerIdent,navn:p.navn})),valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e})},s.createElement(u.DataCell,{scope:"row"},c.gruppeNavn),s.createElement(u.DataCell,null,J(a,c)))))),i.length>0&&!d&&s.createElement(k,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}),d&&s.createElement(g,{"aria-label":r.formatMessage({id:"SaksbehandlereForSakslisteForm.VisAlle"}),size:"small"},s.createElement(g.Header,null,s.createElement(g.Title,{size:"small"},s.createElement(b,{id:"SaksbehandlereForSakslisteForm.VisAlle"}))),s.createElement(g.Content,null,s.createElement(k,{saksbehandlere:i,valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:e}))))))},ne=_;_.__docgenInfo={description:"SaksbehandlereForSakslisteForm",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Saksbehandler[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{ne as S};
