import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as o,R as A}from"./index-DRjF_FHU.js";import{b as E,L as K,M as u,B as k,H as O,D as R}from"./nb_NO-CZSpk6bt.js";import{D as C}from"./index.es-C9TXiEHC.js";import{u as G,V as P,c as B,G as L,L as N}from"./withQueryClientProvider-D5rUA1vz.js";import{u as M}from"./useMutation-Bl-NM7Qh.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as j}from"./kodeverkTyper-CavWL6Ds.js";import{u as h}from"./useLosKodeverk-EfGSBP6a.js";import{S as V}from"./SletteSakslisteModal-BremRNiS.js";import{T as l}from"./Table-BpD34COj.js";import{u as H,S as F}from"./Modal-B9osCInE.js";var Y=function(r,s){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(i[e[a]]=r[e[a]]);return i};const z=o.forwardRef((r,s)=>{var{title:i,titleId:e}=r,a=Y(r,["title","titleId"]);let d=H();return d=i?e||"title-"+d:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":d},a),i?o.createElement("title",{id:d},i):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Q=function(r,s){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)s.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(i[e[a]]=r[e[a]]);return i};const $=o.forwardRef((r,s)=>{var{as:i="a",className:e,underline:a=!0,variant:d="action",inlineText:p=!1}=r,c=Q(r,["as","className","underline","variant","inlineText"]);return A.createElement(i,Object.assign({},c,{ref:s,className:E("navds-link",e,`navds-link--${d}`,{"navds-link--remove-underline":!a,"navds-link--inline-text":p})}))}),U="_isSelected_1vwpj_1",X="_addCircleIcon_1vwpj_5",J="_imageText_1vwpj_6",W="_grayBox_1vwpj_12",Z="_margin_1vwpj_17",ee="_addPeriode_1vwpj_21",ne="_removeImage_1vwpj_26",y={isSelected:U,addCircleIcon:X,imageText:J,grayBox:W,margin:Z,addPeriode:ee,removeImage:ne},re=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],te=(r,s)=>!s||s.length===0?n.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(i=>{const e=r.find(a=>a.kode===i);return e?e.navn:""}).join(", "),ae=(r,s)=>!s||s.length===0||s.length===r.length?n.jsx(u,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(i=>{const e=r.find(a=>a.kode===i);return e?e.navn:""}).join(", "),se=r=>new Promise(s=>{setTimeout(s,r)}),T=({sakslister:r,valgtAvdelingEnhet:s,setValgtSakslisteId:i,valgtSakslisteId:e,oppgaverForAvdelingAntall:a,lagNySaksliste:d,resetValgtSakslisteId:p,children:c})=>{const S=G(),[b,m]=o.useState(),f=o.useRef([]),x=h(j.BEHANDLING_TYPE),w=h(j.FAGSAK_YTELSE),{mutate:q}=M({mutationFn:t=>L(t.sakslisteId,s),onSuccess:()=>{p(),S.invalidateQueries({queryKey:[N.SAKSLISTER_FOR_AVDELING]})}});o.useEffect(()=>{f.current=f.current.slice(0,r.length)},[r]);const I=async(t,g)=>(await se(100),g&&i(t?g:void 0),Promise.resolve()),D=t=>{t.keyCode===13&&d()},_=t=>{m(void 0),q({sakslisteId:t.sakslisteId})};return n.jsxs(P,{gap:"4",children:[n.jsxs(B,{justify:"space-between",children:[n.jsx(K,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})}),n.jsxs("div",{className:y.grayBox,children:[n.jsx(k,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})}),n.jsx(O,{size:"small",children:a||"0"})]})]}),r.length===0&&n.jsx(k,{size:"small",children:n.jsx(u,{id:"GjeldendeSakslisterTabell.IngenLister"})}),r.length>0&&n.jsxs(l,{size:"small",children:[n.jsx(l.Header,{children:n.jsxs(l.Row,{children:[n.jsx(l.HeaderCell,{scope:"col"}),re.map(t=>n.jsx(l.HeaderCell,{scope:"col",children:n.jsx(u,{id:t})},t)),n.jsx(l.HeaderCell,{scope:"col"})]})}),n.jsx(l.Body,{children:r.map((t,g)=>n.jsxs(l.ExpandableRow,{className:t.sakslisteId===e?y.isSelected:void 0,onOpenChange:v=>I(v,t.sakslisteId),content:t.sakslisteId===e?c:void 0,open:t.sakslisteId===e,children:[n.jsx(l.DataCell,{children:t.navn}),n.jsx(l.DataCell,{children:te(w,t.fagsakYtelseTyper)}),n.jsx(l.DataCell,{children:ae(x,t.behandlingTyper)}),n.jsx(l.DataCell,{children:t.saksbehandlerIdenter.length>0?t.saksbehandlerIdenter.length:""}),n.jsx(l.DataCell,{children:t.antallBehandlinger}),n.jsx(l.DataCell,{children:n.jsx(C,{dateString:t.sistEndret})}),n.jsx(l.DataCell,{children:n.jsx("div",{ref:v=>{f.current[g]=v},children:n.jsx(F,{className:y.removeImage,onMouseDown:()=>m(t),onKeyDown:()=>m(t)})})})]},t.sakslisteId))})]}),n.jsxs($,{onClick:d,onKeyDown:D,children:[n.jsx(R,{className:y.imageText,children:n.jsx(u,{id:"GjeldendeSakslisterTabell.LeggTilListe"})}),n.jsx(z,{})]}),b&&n.jsx(V,{valgtSaksliste:b,cancel:()=>m(void 0),submit:_})]})};T.__docgenInfo={description:"",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SakslisteAvdeling[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SakslisteAvdeling[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{T as G};
