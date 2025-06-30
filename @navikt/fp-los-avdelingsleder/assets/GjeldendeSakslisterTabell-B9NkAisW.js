import{r as u,i as D,b as O,R as C,k as _,j as r}from"./iframe-BIszBs4T.js";import{H as R}from"./index.es-Djp4eeay.js";import{u as A}from"./useMutation-BQgu33qc.js";import{V as E,H as G,e as K,L as B}from"./fplosAvdelingslederApi-6iDe1Omb.js";import{u as k}from"./useLosKodeverk-DFZRRsE7.js";import{S as L}from"./SletteSakslisteModal-Dr9AYbHk.js";import{L as P,M as m,B as h,H,D as M}from"./nb_NO-l-EoPVZj.js";import{T as i}from"./Table-DiUun8qW.js";import{u as N,S as V}from"./Modal-9cQTGYbY.js";var F=function(e,s){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l};const z=u.forwardRef((e,s)=>{var{title:l,titleId:n}=e,a=F(e,["title","titleId"]);let o=N();return o=l?n||"title-"+o:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":o},a),l?u.createElement("title",{id:o},l):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var Y=function(e,s){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&s.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(l[n[a]]=e[n[a]]);return l};const Q=u.forwardRef((e,s)=>{var{as:l="a",className:n,underline:a=!0,variant:o,inlineText:v=!1,"data-color":g}=e,b=Y(e,["as","className","underline","variant","inlineText","data-color"]);const p=D(!1),{cn:c}=O();let d;return p?d=o:d=o??"action",C.createElement(l,Object.assign({"data-color":g??$(d),"data-variant":d},b,{ref:s,className:c("navds-link",n,{[`navds-link--${d}`]:d,"navds-link--remove-underline":!a,"navds-link--inline-text":v})}))});function $(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}const U="_isSelected_1vwpj_1",X="_imageText_1vwpj_6",J="_grayBox_1vwpj_12",W="_removeImage_1vwpj_26",f={isSelected:U,imageText:X,grayBox:J,removeImage:W},Z=["GjeldendeSakslisterTabell.Listenavn","GjeldendeSakslisterTabell.Stonadstype","GjeldendeSakslisterTabell.Behandlingtype","GjeldendeSakslisterTabell.AntallSaksbehandlere","GjeldendeSakslisterTabell.AntallBehandlinger","GjeldendeSakslisterTabell.SistEndret"],ee=(e,s)=>!s||s.length===0?r.jsx(m,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(l=>{const n=e.find(a=>a.kode===l);return n?n.navn:""}).join(", "),ne=(e,s)=>!s||s.length===0||s.length===e.length?r.jsx(m,{id:"GjeldendeSakslisterTabell.Alle"}):s.map(l=>{const n=e.find(a=>a.kode===l);return n?n.navn:""}).join(", "),re=e=>new Promise(s=>{setTimeout(s,e)}),te=({sakslister:e,valgtAvdelingEnhet:s,setValgtSakslisteId:l,valgtSakslisteId:n,oppgaverForAvdelingAntall:a,lagNySaksliste:o,resetValgtSakslisteId:v,children:g})=>{const b=_(),[p,c]=u.useState(),d=u.useRef([]),x=k("BehandlingType"),S=k("FagsakYtelseType"),{mutate:T}=A({mutationFn:t=>K(t.sakslisteId,s),onSuccess:()=>{v(),b.invalidateQueries({queryKey:[B.SAKSLISTER_FOR_AVDELING]})}});u.useEffect(()=>{d.current=d.current.slice(0,e.length)},[e]);const w=async(t,y)=>(await re(100),y&&l(t?y:void 0),Promise.resolve()),I=t=>{t.keyCode===13&&o()},q=t=>{c(void 0),T({sakslisteId:t.sakslisteId})};return r.jsxs(E,{gap:"4",children:[r.jsxs(G,{justify:"space-between",children:[r.jsx(P,{size:"small",children:r.jsx(m,{id:"GjeldendeSakslisterTabell.GjeldendeLister"})}),r.jsxs("div",{className:f.grayBox,children:[r.jsx(h,{size:"small",children:r.jsx(m,{id:"GjeldendeSakslisterTabell.OppgaverForAvdeling"})}),r.jsx(H,{size:"small",children:a??"0"})]})]}),e.length===0&&r.jsx(h,{size:"small",children:r.jsx(m,{id:"GjeldendeSakslisterTabell.IngenLister"})}),e.length>0&&r.jsxs(i,{size:"small",children:[r.jsx(i.Header,{children:r.jsxs(i.Row,{children:[r.jsx(i.HeaderCell,{scope:"col"}),Z.map(t=>r.jsx(i.HeaderCell,{scope:"col",children:r.jsx(m,{id:t})},t)),r.jsx(i.HeaderCell,{scope:"col"})]})}),r.jsx(i.Body,{children:e.map((t,y)=>r.jsxs(i.ExpandableRow,{className:t.sakslisteId===n?f.isSelected:void 0,onOpenChange:j=>w(j,t.sakslisteId),content:t.sakslisteId===n?g:void 0,open:t.sakslisteId===n,expandOnRowClick:!0,children:[r.jsx(i.DataCell,{children:t.navn}),r.jsx(i.DataCell,{children:ee(S,t.fagsakYtelseTyper)}),r.jsx(i.DataCell,{children:ne(x,t.behandlingTyper)}),r.jsx(i.DataCell,{children:t.saksbehandlerIdenter.length>0?t.saksbehandlerIdenter.length:""}),r.jsx(i.DataCell,{children:t.antallBehandlinger}),r.jsx(i.DataCell,{children:r.jsx(R,{dateString:t.sistEndret})}),r.jsx(i.DataCell,{children:r.jsx("div",{ref:j=>{d.current[y]=j},children:r.jsx(V,{className:f.removeImage,onMouseDown:()=>c(t),onKeyDown:()=>c(t)})})})]},t.sakslisteId))})]}),r.jsxs(Q,{onClick:o,onKeyDown:I,children:[r.jsx(M,{className:f.imageText,children:r.jsx(m,{id:"GjeldendeSakslisterTabell.LeggTilListe"})}),r.jsx(z,{})]}),p&&r.jsx(L,{valgtSaksliste:p,cancel:()=>c(void 0),submit:q})]})};te.__docgenInfo={description:"",methods:[],displayName:"GjeldendeSakslisterTabell",props:{sakslister:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"SakslisteAvdeling[]"},description:""},setValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"(sakslisteId?: number) => void",signature:{arguments:[{type:{name:"number"},name:"sakslisteId"}],return:{name:"void"}}},description:""},valgtSakslisteId:{required:!1,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},oppgaverForAvdelingAntall:{required:!1,tsType:{name:"number"},description:""},lagNySaksliste:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},resetValgtSakslisteId:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactElement"},description:""}}};export{te as G};
