import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as d,R as P}from"./index-uubelm5h.js";import{n as O,c as R,y as m,H as A,L as G,M as u,g as h,f as K,D as L,l as B,o as N}from"./nb_NO-BE-Qr1m0.js";import{I as S}from"./index.es-Cl_yxThX.js";import{b as H,a as M}from"./fplosRestApi-1yojVYCb.js";import{u as T}from"./useLosKodeverk-Bf_J3o3R.js";import{S as F}from"./SletteSakslisteModal-B3266usa.js";import{T as l}from"./Table-BDJ7LgOv.js";var z=function(r,t){var i={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(i[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(i[n[s]]=r[n[s]]);return i};const V=d.forwardRef((r,t)=>{var{title:i,titleId:n}=r,s=z(r,["title","titleId"]);let o=O();return o=i?n||"title-"+o:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":o},s),i?d.createElement("title",{id:o},i):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Y=function(r,t){var i={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(i[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(i[n[s]]=r[n[s]]);return i};const $=d.forwardRef((r,t)=>{var{as:i="a",className:n,underline:s=!0,variant:o="action",inlineText:p=!1}=r,y=Y(r,["as","className","underline","variant","inlineText"]);return P.createElement(i,Object.assign({},y,{ref:t,className:R("navds-link",n,`navds-link--${o}`,{"navds-link--remove-underline":!s,"navds-link--inline-text":p})}))}),X="_isSelected_1vwpj_1",J="_addCircleIcon_1vwpj_5",Q="_imageText_1vwpj_6",U="_grayBox_1vwpj_12",W="_margin_1vwpj_17",Z="_addPeriode_1vwpj_21",ee="_removeImage_1vwpj_26",g={isSelected:X,addCircleIcon:J,imageText:Q,grayBox:U,margin:W,addPeriode:Z,removeImage:ee},ne=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],re=(r,t)=>!t||t.length===0?e.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):t.map(i=>{const n=r.find(s=>s.kode===i);return n?n.navn:""}).join(", "),te=(r,t)=>!t||t.length===0||t.length===r.length?e.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):t.map(i=>{const n=r.find(s=>s.kode===i);return n?n.navn:""}).join(", "),ae=r=>new Promise(t=>{setTimeout(t,r)}),se=({sakslister:r,valgtAvdelingEnhet:t,setValgtSakslisteId:i,valgtSakslisteId:n,oppgaverForAvdelingAntall:s,lagNySaksliste:o,resetValgtSakslisteId:p,hentAvdelingensSakslister:y,content:w})=>{const[b,v]=d.useState(),f=d.useRef([]),I=T(S.BEHANDLING_TYPE),_=T(S.FAGSAK_YTELSE),{startRequest:q}=H.useRestApiRunner(M.SLETT_SAKSLISTE);d.useEffect(()=>{f.current=f.current.slice(0,r.length)},[r]);const D=async(a,c)=>(await ae(100),c&&i(a?c:void 0),Promise.resolve()),E=d.useCallback(a=>{a.keyCode===13&&o(t)},[t]),k=a=>{v(a)},x=d.useCallback(()=>{v(void 0)},[]),C=d.useCallback(a=>{x(),q({sakslisteId:a.sakslisteId,avdelingEnhet:t}).then(()=>{p(),y({avdelingEnhet:t})})},[t]);return e.jsxs(e.Fragment,{children:[e.jsx(m,{sixteenPx:!0}),e.jsxs(A,{justify:"space-between",children:[e.jsx(G,{size:"small",children:e.jsx(u,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})}),e.jsxs("div",{className:g.grayBox,children:[e.jsx(h,{size:"small",children:e.jsx(u,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})}),e.jsx(K,{size:"small",children:s||"0"})]})]}),e.jsx(m,{sixteenPx:!0}),r.length===0&&e.jsxs(e.Fragment,{children:[e.jsx(m,{eightPx:!0}),e.jsx(h,{size:"small",children:e.jsx(u,{id:"GjeldendeSakslisterTabell.IngenLister"})}),e.jsx(m,{eightPx:!0})]}),r.length>0&&e.jsxs(l,{size:"small",children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col"}),ne.map(a=>e.jsx(l.HeaderCell,{scope:"col",children:e.jsx(u,{id:a})},a)),e.jsx(l.HeaderCell,{scope:"col"})]})}),e.jsx(l.Body,{children:r.map((a,c)=>e.jsxs(l.ExpandableRow,{className:a.sakslisteId===n?g.isSelected:void 0,onOpenChange:j=>D(j,a.sakslisteId),content:w,open:a.sakslisteId===n,children:[e.jsx(l.DataCell,{children:a.navn}),e.jsx(l.DataCell,{children:re(_,a.fagsakYtelseTyper)}),e.jsx(l.DataCell,{children:te(I,a.behandlingTyper)}),e.jsx(l.DataCell,{children:a.saksbehandlerIdenter.length>0?a.saksbehandlerIdenter.length:""}),e.jsx(l.DataCell,{children:a.antallBehandlinger}),e.jsx(l.DataCell,{children:e.jsx(L,{dateString:a.sistEndret})}),e.jsx(l.DataCell,{children:e.jsx("div",{ref:j=>{f.current[c]=j},children:e.jsx(B,{className:g.removeImage,onMouseDown:()=>k(a),onKeyDown:()=>k(a)})})})]},a.sakslisteId))})]}),e.jsx(m,{eightPx:!0}),e.jsxs($,{onClick:()=>o(t),onKeyDown:E,children:[e.jsx(N,{className:g.imageText,children:e.jsx(u,{id:"GjeldendeSakslisterTabell.LeggTilListe"})}),e.jsx(V,{})]}),b&&e.jsx(F,{valgtSaksliste:b,cancel:x,submit:C})]})};se.__docgenInfo={description:"GjeldendeSakslisterTabell",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Saksliste[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"(avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},content:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{se as G};
