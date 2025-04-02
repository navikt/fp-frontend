import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as _}from"./index-Dxs5m6lS.js";import{f as O,u as A,L as E,M as u,e as k,H as C,D as G}from"./nb_NO-CB4eS81T.js";import{j as R}from"./index.es-BiMCj458.js";import{u as K}from"./useMutation-5jK6m39O.js";import{K as h}from"./kodeverkTyper-BiqIm7FA.js";import{V as L,c as P,A as B,L as N}from"./fplosAvdelingslederApi-hN8cgo30.js";import{u as x}from"./useLosKodeverk-DyzBok4g.js";import{S as M}from"./SletteSakslisteModal-Bvep5PQJ.js";import{T as l}from"./Table-BFgGi9v3.js";import{u as H,S as V}from"./Modal-ClJLeyaw.js";var F=function(r,s){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(i[e[a]]=r[e[a]]);return i};const z=o.forwardRef((r,s)=>{var{title:i,titleId:e}=r,a=F(r,["title","titleId"]);let d=H();return d=i?e||"title-"+d:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":d},a),i?o.createElement("title",{id:d},i):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Y=function(r,s){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(i[e[a]]=r[e[a]]);return i};const Q=o.forwardRef((r,s)=>{var{as:i="a",className:e,underline:a=!0,variant:d="action",inlineText:p=!1}=r,y=Y(r,["as","className","underline","variant","inlineText"]);const{cn:f}=O();return _.createElement(i,Object.assign({},y,{ref:s,className:f("navds-link",e,`navds-link--${d}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":p})}))}),$="_isSelected_1vwpj_1",U="_imageText_1vwpj_6",X="_grayBox_1vwpj_12",J="_removeImage_1vwpj_26",g={isSelected:$,imageText:U,grayBox:X,removeImage:J},W=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],Z=(r,s)=>!s||s.length===0?n.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(i=>{const e=r.find(a=>a.kode===i);return e?e.navn:""}).join(", "),ee=(r,s)=>!s||s.length===0||s.length===r.length?n.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(i=>{const e=r.find(a=>a.kode===i);return e?e.navn:""}).join(", "),ne=r=>new Promise(s=>{setTimeout(s,r)}),re=({sakslister:r,valgtAvdelingEnhet:s,setValgtSakslisteId:i,valgtSakslisteId:e,oppgaverForAvdelingAntall:a,lagNySaksliste:d,resetValgtSakslisteId:p,children:y})=>{const f=A(),[b,m]=o.useState(),v=o.useRef([]),S=x(h.BEHANDLING_TYPE),T=x(h.FAGSAK_YTELSE),{mutate:w}=K({mutationFn:t=>B(t.sakslisteId,s),onSuccess:()=>{p(),f.invalidateQueries({queryKey:[N.SAKSLISTER_FOR_AVDELING]})}});o.useEffect(()=>{v.current=v.current.slice(0,r.length)},[r]);const I=async(t,c)=>(await ne(100),c&&i(t?c:void 0),Promise.resolve()),q=t=>{t.keyCode===13&&d()},D=t=>{m(void 0),w({sakslisteId:t.sakslisteId})};return n.jsxs(L,{gap:"4",children:[n.jsxs(P,{justify:"space-between",children:[n.jsx(E,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})}),n.jsxs("div",{className:g.grayBox,children:[n.jsx(k,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})}),n.jsx(C,{size:"small",children:a??"0"})]})]}),r.length===0&&n.jsx(k,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.IngenLister"})}),r.length>0&&n.jsxs(l,{size:"small",children:[n.jsx(l.Header,{children:n.jsxs(l.Row,{children:[n.jsx(l.HeaderCell,{scope:"col"}),W.map(t=>n.jsx(l.HeaderCell,{scope:"col",children:n.jsx(u,{id:t})},t)),n.jsx(l.HeaderCell,{scope:"col"})]})}),n.jsx(l.Body,{children:r.map((t,c)=>n.jsxs(l.ExpandableRow,{className:t.sakslisteId===e?g.isSelected:void 0,onOpenChange:j=>I(j,t.sakslisteId),content:t.sakslisteId===e?y:void 0,open:t.sakslisteId===e,children:[n.jsx(l.DataCell,{children:t.navn}),n.jsx(l.DataCell,{children:Z(T,t.fagsakYtelseTyper)}),n.jsx(l.DataCell,{children:ee(S,t.behandlingTyper)}),n.jsx(l.DataCell,{children:t.saksbehandlerIdenter.length>0?t.saksbehandlerIdenter.length:""}),n.jsx(l.DataCell,{children:t.antallBehandlinger}),n.jsx(l.DataCell,{children:n.jsx(R,{dateString:t.sistEndret})}),n.jsx(l.DataCell,{children:n.jsx("div",{ref:j=>{v.current[c]=j},children:n.jsx(V,{className:g.removeImage,onMouseDown:()=>m(t),onKeyDown:()=>m(t)})})})]},t.sakslisteId))})]}),n.jsxs(Q,{onClick:d,onKeyDown:q,children:[n.jsx(G,{className:g.imageText,children:n.jsx(u,{id:"GjeldendeSakslisterTabell.LeggTilListe"})}),n.jsx(z,{})]}),b&&n.jsx(M,{valgtSaksliste:b,cancel:()=>m(void 0),submit:D})]})};re.__docgenInfo={description:"",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SakslisteAvdeling[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{re as G};
