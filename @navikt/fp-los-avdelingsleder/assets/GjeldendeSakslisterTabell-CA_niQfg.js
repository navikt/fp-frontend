import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as D}from"./index-mMUbb89k.js";import{g as O,u as _,L as C,M as u,f as k,H as R,D as A}from"./nb_NO-CVVmh4cd.js";import{X as E}from"./index.es-Bf43bRIN.js";import{u as G}from"./useMutation-CB1X664z.js";import{V as K,c as L,y as P,L as B}from"./fplosAvdelingslederApi-CXqcu6FC.js";import{u as h}from"./useLosKodeverk-h2Jvz6_C.js";import{S as M}from"./SletteSakslisteModal-D9YIhXZV.js";import{T as l}from"./Table-CKV4S1rv.js";import{u as N,S as H}from"./Modal-BzlnuVxp.js";var V=function(r,s){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(i[e[a]]=r[e[a]]);return i};const F=o.forwardRef((r,s)=>{var{title:i,titleId:e}=r,a=V(r,["title","titleId"]);let d=N();return d=i?e||"title-"+d:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":d},a),i?o.createElement("title",{id:d},i):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var z=function(r,s){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(i[e[a]]=r[e[a]]);return i};const Y=o.forwardRef((r,s)=>{var{as:i="a",className:e,underline:a=!0,variant:d="action",inlineText:p=!1}=r,y=z(r,["as","className","underline","variant","inlineText"]);const{cn:f}=O();return D.createElement(i,Object.assign({},y,{ref:s,className:f("navds-link",e,`navds-link--${d}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":p})}))}),X="_isSelected_1vwpj_1",Q="_imageText_1vwpj_6",$="_grayBox_1vwpj_12",U="_removeImage_1vwpj_26",g={isSelected:X,imageText:Q,grayBox:$,removeImage:U},J=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],W=(r,s)=>!s||s.length===0?n.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(i=>{const e=r.find(a=>a.kode===i);return e?e.navn:""}).join(", "),Z=(r,s)=>!s||s.length===0||s.length===r.length?n.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(i=>{const e=r.find(a=>a.kode===i);return e?e.navn:""}).join(", "),ee=r=>new Promise(s=>{setTimeout(s,r)}),ne=({sakslister:r,valgtAvdelingEnhet:s,setValgtSakslisteId:i,valgtSakslisteId:e,oppgaverForAvdelingAntall:a,lagNySaksliste:d,resetValgtSakslisteId:p,children:y})=>{const f=_(),[j,m]=o.useState(),v=o.useRef([]),x=h("BehandlingType"),S=h("FagsakYtelseType"),{mutate:T}=G({mutationFn:t=>P(t.sakslisteId,s),onSuccess:()=>{p(),f.invalidateQueries({queryKey:[B.SAKSLISTER_FOR_AVDELING]})}});o.useEffect(()=>{v.current=v.current.slice(0,r.length)},[r]);const w=async(t,c)=>(await ee(100),c&&i(t?c:void 0),Promise.resolve()),I=t=>{t.keyCode===13&&d()},q=t=>{m(void 0),T({sakslisteId:t.sakslisteId})};return n.jsxs(K,{gap:"4",children:[n.jsxs(L,{justify:"space-between",children:[n.jsx(C,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})}),n.jsxs("div",{className:g.grayBox,children:[n.jsx(k,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})}),n.jsx(R,{size:"small",children:a??"0"})]})]}),r.length===0&&n.jsx(k,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.IngenLister"})}),r.length>0&&n.jsxs(l,{size:"small",children:[n.jsx(l.Header,{children:n.jsxs(l.Row,{children:[n.jsx(l.HeaderCell,{scope:"col"}),J.map(t=>n.jsx(l.HeaderCell,{scope:"col",children:n.jsx(u,{id:t})},t)),n.jsx(l.HeaderCell,{scope:"col"})]})}),n.jsx(l.Body,{children:r.map((t,c)=>n.jsxs(l.ExpandableRow,{className:t.sakslisteId===e?g.isSelected:void 0,onOpenChange:b=>w(b,t.sakslisteId),content:t.sakslisteId===e?y:void 0,open:t.sakslisteId===e,expandOnRowClick:!0,children:[n.jsx(l.DataCell,{children:t.navn}),n.jsx(l.DataCell,{children:W(S,t.fagsakYtelseTyper)}),n.jsx(l.DataCell,{children:Z(x,t.behandlingTyper)}),n.jsx(l.DataCell,{children:t.saksbehandlerIdenter.length>0?t.saksbehandlerIdenter.length:""}),n.jsx(l.DataCell,{children:t.antallBehandlinger}),n.jsx(l.DataCell,{children:n.jsx(E,{dateString:t.sistEndret})}),n.jsx(l.DataCell,{children:n.jsx("div",{ref:b=>{v.current[c]=b},children:n.jsx(H,{className:g.removeImage,onMouseDown:()=>m(t),onKeyDown:()=>m(t)})})})]},t.sakslisteId))})]}),n.jsxs(Y,{onClick:d,onKeyDown:I,children:[n.jsx(A,{className:g.imageText,children:n.jsx(u,{id:"GjeldendeSakslisterTabell.LeggTilListe"})}),n.jsx(F,{})]}),j&&n.jsx(M,{valgtSaksliste:j,cancel:()=>m(void 0),submit:q})]})};ne.__docgenInfo={description:"",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SakslisteAvdeling[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{ne as G};
