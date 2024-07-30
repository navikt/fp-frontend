import{j as r}from"./dayjs.min-ZUODdiE-.js";import{R as me}from"./RestApiMock-DbGm39u8.js";import{r as o,R}from"./index-uubelm5h.js";import{d as Re,R as G}from"./useRestApiRunner-DIVzIFJm.js";import{l as ne,N as ge,z as ye,Q as ve,x as j,c as K,f as _e,R as Se,J as ke,v as be,U as Te,X as Pe,Y as w,b,_ as fe,t as he,a0 as Le,a1 as Ne,e as T,M as P,F as Ie,m as Oe,a2 as Ke,a3 as Ge}from"./nb_NO-B1VfbVDP.js";import{a as Ve}from"./alleKodeverkLos-BJud6Q-i.js";import{b as g,a as c,R as V,r as ae}from"./fplosRestApi-BJC_OYKQ.js";import{I as De}from"./IkkeTilgangTilAvdelingslederPanel-D_zbUZ4o.js";import{g as h,s as xe,r as je}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{F as we}from"./FordelingAvBehandlingstypePanel-CWZGv3EI.js";import{T as Fe}from"./TilBehandlingPanel-DElaC7kr.js";import{O as qe}from"./OppgaverPerForsteStonadsdagPanel-Bmxv5-05.js";import{O as He}from"./OppgaverSomErApneEllerPaVentPanel-Dmy5gr46.js";import{V as Be}from"./VentefristUtløperPanel-D3D1zTqq.js";import{L as Ce}from"./LeggTilSaksbehandlerForm-0hxyua0s.js";import{S as Ye}from"./SaksbehandlereTabell-LxEXbjyc.js";import{E as Me}from"./EndreSakslisterPanel-BtjmxpDj.js";import{R as ze}from"./ReservasjonerTabell-B4-1269a.js";import{G as Ue}from"./GrupperIndex-r7ZRDmAR.js";import{u as $e}from"./Table-B1Atv8ET.js";import{P as Je}from"./Panel-DrthBiY8.js";import"./index-BdzLX9oW.js";import"./index.es-Cl_yxThX.js";import"./FlyttReservasjonModal-BW3wo31t.js";import"./index.es-cXv3NCii.js";import"./useLosKodeverk-xh6nOoB3.js";import"./isSameOrAfter-C-awqOHd.js";import"./isSameOrBefore-DeYxtwBz.js";import"./SletteSaksbehandlerModal-CS4wAG1s.js";import"./GjeldendeSakslisterTabell-DZzhi0VA.js";import"./SletteSakslisteModal-feRXGd39.js";import"./SaksbehandlereForSakslisteForm-ChCvYbAx.js";import"./UtvalgskriterierForSakslisteForm-CHO6eNbY.js";import"./BehandlingstypeVelger-DJ5TcsBt.js";import"./AndreKriterierVelger-CzRGbGlH.js";import"./FagsakYtelseTypeVelger-DB3eCV_V.js";import"./SorteringVelger-lJ11-0_E.js";import"./useDebounce-BmwqKtio.js";import"./GrupperPanel-L40eCVqx.js";var Qe=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const We=o.forwardRef((e,a)=>{var{title:s,titleId:n}=e,t=Qe(e,["title","titleId"]);let i=ne();return i=s?n||"title-"+i:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),s?o.createElement("title",{id:i},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"}))});var Xe=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const Ze=o.forwardRef((e,a)=>{var{title:s,titleId:n}=e,t=Xe(e,["title","titleId"]);let i=ne();return i=s?n||"title-"+i:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),s?o.createElement("title",{id:i},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))}),[en,nn,an,tn]=ge(),[sn,D]=ye({name:"TabsContext",hookName:"useTabsContext",providerName:"TabsProvider",errorMessage:"Tabs.List, Tabs.Tag and Tabs.Panel needs to be wrapped within <Tabs>"});function rn({value:e,disabled:a=!1,onFocus:s,onClick:n},t){const{id:i,setSelectedValue:l,selectionFollowsFocus:u,focusedValue:E,setFocusedValue:A,selectedValue:S,makeTabId:k,makeTabPanelId:y}=D(),{register:v}=tn({disabled:a,value:e}),d=e===S,p=()=>{A(e),u&&l(e)};return{ref:ve([v,t]),isSelected:d,isFocused:E===e,id:k(i,e),controlsId:y(i,e),onClick:j(n,()=>l(e)),onFocus:a?void 0:j(s,p)}}var dn=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const ln=o.forwardRef((e,a)=>{var s,n,{className:t,as:i="button",label:l,icon:u,value:E,onClick:A,onFocus:S,disabled:k,id:y}=e,v=dn(e,["className","as","label","icon","value","onClick","onFocus","disabled","id"]);const d=rn({value:E,onClick:A,onFocus:S,disabled:k},a),p=D();return!l&&!u?(console.error("<Tabs.Tab/> needs label and/or icon"),null):R.createElement(i,Object.assign({ref:d.ref},v,{className:K("navds-tabs__tab",`navds-tabs__tab--${(s=p==null?void 0:p.size)!==null&&s!==void 0?s:"medium"}`,`navds-tabs__tab-icon--${p==null?void 0:p.iconPosition}`,t,{"navds-tabs__tab--icon-only":u&&!l,"navds-tabs__tab--fill":p.fill}),role:"tab",type:"button","aria-selected":d.isSelected,"data-state":d.isSelected?"active":"inactive",tabIndex:d.isFocused?0:-1,"aria-controls":(n=v["aria-controls"])!==null&&n!==void 0?n:d.controlsId,id:y??d.id,onFocus:d.onFocus,onClick:d.onClick}),R.createElement(_e,{as:"span",className:"navds-tabs__tab-inner",size:p==null?void 0:p.size},R.createElement("span",{"aria-hidden":!!l},u),R.createElement("span",null,l)))});function F({hidden:e,onClick:a,dir:s}){return R.createElement("div",{className:K("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":e}),onClick:a,"aria-hidden":!0},s==="left"?R.createElement(We,{title:"scroll tilbake"}):R.createElement(Ze,{title:"scroll neste"}))}function on(e){const[a,s]=o.useState({start:!1,end:!1}),n=o.useMemo(()=>Se(()=>{if(!(e!=null&&e.current))return;const{scrollWidth:t,clientWidth:i}=e.current,l=e.current.scrollLeft,u=l>1,E=l<t-i-1;s(A=>u===A.start&&E===A.end?A:{start:u,end:E})}),[e]);return o.useEffect(()=>{var t,i,l;const u=()=>n(),E=(l=(i=(t=e.current)===null||t===void 0?void 0:t.ownerDocument)!==null&&i!==void 0?i:document)!==null&&l!==void 0?l:window;E.addEventListener("resize",u);let A;return typeof ResizeObserver<"u"&&e.current&&(A=new ResizeObserver(u),A.observe(e.current)),()=>{E.removeEventListener("resize",u),A&&A.disconnect(),n.clear()}},[e,n]),o.useEffect(()=>{n()}),{update:n,start:a.start,end:a.end,show:a.end||a.start,scrollLeft:()=>{e.current&&(e.current.scrollLeft-=100)},scrollRight:()=>{e.current&&(e.current.scrollLeft+=100)}}}function un(){const{focusedValue:e,loop:a,selectedValue:s,setFocusedValue:n}=D(),t=nn();return{onKeyDown:o.useCallback(l=>{const u=t.values().findIndex(d=>d.value===e),v={ArrowLeft:()=>{var d;const p=t.prevEnabled(u,a);p&&((d=p.node)===null||d===void 0||d.focus())},ArrowRight:()=>{var d;const p=t.nextEnabled(u,a);p&&((d=p.node)===null||d===void 0||d.focus())},Home:()=>{var d;const p=t.firstEnabled();p&&((d=p.node)===null||d===void 0||d.focus())},End:()=>{var d;const p=t.lastEnabled();p&&((d=p.node)===null||d===void 0||d.focus())}}[l.key];v?(l.preventDefault(),v(l)):l.key==="Tab"&&s&&setTimeout(()=>n(s))},[t,e,a,s,n])}}var En=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const cn=o.forwardRef((e,a)=>{var{className:s,onKeyDown:n}=e,t=En(e,["className","onKeyDown"]);const{onKeyDown:i}=un(),l=o.useRef(null),u=ke(l,a),E=on(l);return R.createElement("div",{className:"navds-tabs__tablist-wrapper"},E.show&&R.createElement(F,{dir:"left",hidden:!E.start,onClick:E.scrollLeft}),R.createElement("div",Object.assign({ref:u},t,{onScroll:E.update,className:K("navds-tabs__tablist",s),role:"tablist","aria-orientation":"horizontal",onKeyDown:j(n,i)})),E.show&&R.createElement(F,{dir:"right",hidden:!E.end,onClick:E.scrollRight}))});function pn({value:e}){const{id:a,selectedValue:s,makeTabId:n,makeTabPanelId:t}=D();return{labelledbyId:n(a,e),hidden:s!==e,id:t(a,e)}}var An=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const mn=o.forwardRef((e,a)=>{var s,{className:n,value:t,children:i,lazy:l=!0,id:u}=e,E=An(e,["className","value","children","lazy","id"]);const A=pn({value:t});return R.createElement("div",Object.assign({ref:a},E,{className:K("navds-tabs__tabpanel",n),role:"tabpanel",tabIndex:0,"aria-labelledby":(s=E["aria-labelledby"])!==null&&s!==void 0?s:A.labelledbyId,id:u??A.id,hidden:A.hidden,"data-state":A.hidden?"inactive":"active"}),l&&A.hidden?null:i)});function Rn({onChange:e,value:a,defaultValue:s="",id:n}){const[t,i]=o.useState(s),[l,u]=$e({defaultValue:s,value:a,onChange:e});o.useEffect(()=>{a!=null&&i(a)},[a]);const E=be();return{id:`tabs-${n??E}`,selectedValue:l,setSelectedValue:u,focusedValue:t,setFocusedValue:i,makeTabId:gn,makeTabPanelId:yn}}function gn(e,a){return`${e}--tab-${a}`}function yn(e,a){return`${e}--tabpanel-${a}`}var vn=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const _=o.forwardRef((e,a)=>{var{className:s,children:n,size:t="medium",defaultValue:i="",value:l,onChange:u,id:E,selectionFollowsFocus:A=!1,loop:S=!0,iconPosition:k="left",fill:y=!1}=e,v=vn(e,["className","children","size","defaultValue","value","onChange","id","selectionFollowsFocus","loop","iconPosition","fill"]);const d=an(),p=Rn({defaultValue:i,value:l,onChange:u,id:E}),Ae=Object.assign(Object.assign({},p),{selectionFollowsFocus:A,loop:S,size:t,iconPosition:k,fill:y});return R.createElement(en,{value:d},R.createElement(sn,Object.assign({},Ae),R.createElement("div",Object.assign({ref:a},v,{id:E,className:K("navds-tabs",s,`navds-tabs--${t}`)}),n)))});_.Tab=ln;_.List=cn;_.Panel=mn;const _n=()=>{const e=o.useContext(Re),a=o.useCallback(n=>{e&&e({type:"add",data:n})},[]),s=o.useCallback(()=>{e&&e({type:"remove"})},[]);return{addErrorMessage:a,removeErrorMessages:s}},Sn={paramName:"",parse:e=>e,isQueryParam:!1},kn=(e,a,s)=>{const n=s.isQueryParam?w(a.search):e;return s.parse(n[s.paramName])};function bn(e){const a={...Sn,...e},s=Te(),n=Pe(),t=kn(n,s,a);return{location:s,selected:t}}const Tn="_container_1sikf_1",Pn={container:Tn},te=({children:e})=>r.jsx("div",{className:Pn.container,children:e});te.__docgenInfo={description:"AvdelingslederDashboard",methods:[],displayName:"AvdelingslederDashboard"};const m={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",GRUPPER:"grupper",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},se=({oppgaverForAvdeling:e,oppgaverPerDato:a,behandlingerPaVent:s,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:t})=>{const l=o.useRef(null);return r.jsxs("div",{ref:l,children:[r.jsx(Fe,{height:300,oppgaverPerDato:a,getValueFromLocalStorage:h}),r.jsx(b,{twentyPx:!0}),r.jsx(we,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:h}),r.jsx(b,{twentyPx:!0}),r.jsx(Be,{height:300,behandlingerPaVent:s,getValueFromLocalStorage:h}),r.jsx(b,{twentyPx:!0}),r.jsx(qe,{height:300,oppgaverPerForsteStonadsdag:n}),r.jsx(b,{twentyPx:!0}),r.jsx(He,{height:300,oppgaverApneEllerPaVent:t,getValueFromLocalStorage:h})]})};se.__docgenInfo={description:"NokkeltallPanel.",methods:[],displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"tilBehandling",value:{name:"boolean",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}>`}],raw:"OppgaverForAvdeling[]"},description:""},oppgaverPerDato:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  opprettetDato: string;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"opprettetDato",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  opprettetDato: string;
  antall: number;
}>`}],raw:"OppgaveForDato[]"},description:""},behandlingerPaVent:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingFrist: string;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingFrist",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingFrist: string;
  antall: number;
}>`}],raw:"BehandlingVentefrist[]"},description:""},oppgaverPerForsteStonadsdag:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  forsteStonadsdag: string;
  antall: number;
}`,signature:{properties:[{key:"forsteStonadsdag",value:{name:"string",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  forsteStonadsdag: string;
  antall: number;
}>`}],raw:"OppgaverForForsteStonadsdag[]"},description:""},oppgaverApneEllerPaVent:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  antall: number;
  behandlingType: string;
  behandlingVenteStatus: string;
  førsteUttakMåned?: string;
}`,signature:{properties:[{key:"antall",value:{name:"number",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"behandlingVenteStatus",value:{name:"string",required:!0}},{key:"førsteUttakMåned",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  antall: number;
  behandlingType: string;
  behandlingVenteStatus: string;
  førsteUttakMåned?: string;
}>`}],raw:"OppgaverSomErApneEllerPaVent[]"},description:""}}};const fn=[],hn=[],Ln=[],Nn=[],In=[],re=({valgtAvdelingEnhet:e})=>{const{data:a=fn}=g.useRestApi(c.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:s=hn}=g.useRestApi(c.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Ln}=g.useRestApi(c.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:t=Nn}=g.useRestApi(c.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:i=In}=g.useRestApi(c.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return r.jsx(se,{oppgaverForAvdeling:a,oppgaverPerDato:s,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:t,oppgaverApneEllerPaVent:i})};re.__docgenInfo={description:"NokkeltallIndex",methods:[],displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const ie=({saksbehandlere:e,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:s,hentAvdelingensSaksbehandlere:n})=>r.jsxs(r.Fragment,{children:[r.jsx(Ye,{saksbehandlere:e,valgtAvdelingEnhet:a,hentAvdelingensSaksbehandlere:n}),r.jsx(b,{sixteenPx:!0}),r.jsx(Ce,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:s,hentAvdelingensSaksbehandlere:n})]});ie.__docgenInfo={description:"SaksbehandlerePanel",methods:[],displayName:"SaksbehandlerePanel",props:{saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:""},hentAvdelingensSaksbehandlere:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const de=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:s})=>r.jsx(ie,{saksbehandlere:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:s});de.__docgenInfo={description:"EndreSaksbehandlereIndex",methods:[],displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSaksbehandlere:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const le=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a})=>{const[s,n]=o.useState(),t=o.useCallback(()=>n(void 0),[]);return r.jsx(Me,{setValgtSakslisteId:n,valgtSakslisteId:s,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,resetValgtSakslisteId:t})};le.__docgenInfo={description:"EndreBehandlingskoerIndex",methods:[],displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:""}}};const On=[],oe=({valgtAvdelingEnhet:e})=>{const{data:a=On,startRequest:s}=g.useRestApiRunner(c.RESERVASJONER_FOR_AVDELING),{startRequest:n}=g.useRestApiRunner(c.AVDELINGSLEDER_OPPHEVER_RESERVASJON),t=g.useGlobalStateRestApiData(V.KODEVERK_LOS);o.useEffect(()=>{s({avdelingEnhet:e})},[]);const i=o.useCallback(u=>n({oppgaveId:u}).then(()=>s({avdelingEnhet:e})),[e]),l=o.useCallback(()=>s({avdelingEnhet:e}),[e]);return r.jsx(ze,{opphevReservasjon:i,reservasjoner:a,hentAvdelingensReservasjoner:l,alleKodeverk:t})};oe.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const Kn="_padding_eb62i_1",q={padding:Kn},ue=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:a,avdelinger:s})=>{const n=o.useCallback(t=>{const i=t.target.value;xe("avdelingEnhet",i),e(i)},[s]);return s?r.jsx("div",{className:q.padding,children:r.jsx(fe,{size:"small",hideLabel:!0,label:"",onChange:n,value:a,className:q.padding,children:s.map(t=>r.jsx("option",{value:t.avdelingEnhet,children:`${t.avdelingEnhet} ${t.navn}`},t.avdelingEnhet))})}):null};ue.__docgenInfo={description:"",methods:[],displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""},valgtAvdelingEnhet:{required:!1,tsType:{name:"string"},description:""},avdelinger:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avdelingEnhet: string;
  navn: string;
  kreverKode6: boolean;
}`,signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kreverKode6",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  avdelingEnhet: string;
  navn: string;
  kreverKode6: boolean;
}>`}],raw:"Avdeling[]"},description:""}}};const Gn="_paddingHeader_yllsv_1",Vn="_padding_yllsv_1",H={paddingHeader:Gn,padding:Vn},Dn=he(Oe),B="4867",xn=[],jn=(e,a,s)=>{if(a.length>0&&!s){let n=a.some(i=>i.avdelingEnhet===B)?B:a[0].avdelingEnhet;const t=h("avdelingEnhet");t&&(a.some(i=>i.avdelingEnhet===t)?n=t:je("avdelingEnhet")),e(n)}},wn=e=>e==="?"||!e,Fn=(e,a)=>{const s=wn(e)?{}:w(e);return Ke({...s,...a})},qn=(e,a)=>({...e,search:Fn(e.search,a)}),Hn=e=>a=>qn(e,{fane:a}),Bn=(e,a,s,n)=>{switch(e){case m.BEHANDLINGSKOER:return r.jsx(le,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n});case m.SAKSBEHANDLERE:return r.jsx(de,{valgtAvdelingEnhet:a,hentAvdelingensSaksbehandlere:s,avdelingensSaksbehandlere:n});case m.GRUPPER:return r.jsx(Ue,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n});case m.NOKKELTALL:return r.jsx(re,{valgtAvdelingEnhet:a});case m.RESERVASJONER:return r.jsx(oe,{valgtAvdelingEnhet:a});default:return null}},f={[m.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[m.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[m.GRUPPER]:"AvdelingslederIndex.Grupper",[m.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[m.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},Cn=e=>{const a=w(e.search);return a.avdelingsleder?a.avdelingsleder:m.BEHANDLINGSKOER},Yn=({navAnsatt:e})=>{const[a,s]=o.useState(),{selected:n,location:t}=bn({paramName:"fane",isQueryParam:!0}),i=g.useRestApi(c.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=i==null?void 0:i.data,u=l?l.filter(d=>!!(e!=null&&e.kanBehandleKode6)||!d.kreverKode6):[];o.useEffect(()=>{i.state===G.SUCCESS&&jn(s,u,a)},[i]);const{startRequest:E,data:A=xn}=g.useRestApiRunner(c.SAKSBEHANDLERE_FOR_AVDELING),S=o.useCallback(d=>E(d,!0),[]);o.useEffect(()=>{a&&S({avdelingEnhet:a})},[a]);const k=Hn(t),y=n||Cn(t),v=Ne();return e!=null&&e.kanOppgavestyre?i.state!==G.SUCCESS?null:a?r.jsxs(te,{children:[r.jsx(ue,{valgtAvdelingEnhet:a,avdelinger:u,setValgtAvdelingEnhet:s}),r.jsx(b,{sixteenPx:!0}),r.jsx(_,{size:"small",value:y,onChange:d=>{v(k(d))},className:H.paddingHeader,children:r.jsxs(_.List,{children:[r.jsx(_.Tab,{value:m.BEHANDLINGSKOER,label:r.jsx(T,{size:"small",children:r.jsx(P,{id:f[m.BEHANDLINGSKOER]})})}),r.jsx(_.Tab,{value:m.NOKKELTALL,label:r.jsx(T,{size:"small",children:r.jsx(P,{id:f[m.NOKKELTALL]})})}),r.jsx(_.Tab,{value:m.SAKSBEHANDLERE,label:r.jsx(T,{size:"small",children:r.jsx(P,{id:f[m.SAKSBEHANDLERE]})})}),r.jsx(_.Tab,{value:m.GRUPPER,label:r.jsx(T,{size:"small",children:r.jsx(P,{id:f[m.GRUPPER]})})}),r.jsx(_.Tab,{value:m.RESERVASJONER,label:r.jsx(T,{size:"small",children:r.jsx(P,{id:f[m.RESERVASJONER]})})})]})}),r.jsx(Je,{className:H.padding,children:Bn(y,a,S,A)})]},a):r.jsx(Ie,{}):r.jsx(De,{})},Ee=({setLosErIkkeTilgjengelig:e,navAnsatt:a})=>{const{addErrorMessage:s}=_n();ae.setAddErrorMessageHandler(s);const n=g.useGlobalStateRestApiData(V.KODEVERK_LOS),t=g.useGlobalStateRestApi(V.KODEVERK_LOS,void 0,{suspendRequest:!!n});return o.useEffect(()=>{!n&&t.state===G.ERROR&&e()},[t.state]),!n&&t.state!==G.SUCCESS?null:r.jsx(Le,{value:Dn,children:r.jsx(Yn,{navAnsatt:a})})},ce=Ee;Ee.__docgenInfo={description:"",methods:[],displayName:"AvdelingslederIndexIntlWrapper",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navAnsatt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"brukernavn",value:{name:"string",required:!0}},{key:"funksjonellTid",value:{name:"string",required:!1}},{key:"kanBehandleKode6",value:{name:"boolean",required:!0}},{key:"kanOppgavestyre",value:{name:"boolean",required:!0}},{key:"kanOverstyre",value:{name:"boolean",required:!0}},{key:"kanSaksbehandle",value:{name:"boolean",required:!0}},{key:"kanVeilede",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}>`},description:""}}};const Ia={title:"los/avdelingsleder/AvdelingslederIndex",component:ce,decorators:[Ge]},pe={kanOppgavestyre:!0,kanBehandleKode6:!0},x=({avdelinger:e,navAnsatt:a})=>{const s=[{key:V.KODEVERK_LOS.name,data:Ve,global:!0},{key:c.AVDELINGER.name,data:e},{key:c.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:c.OPPGAVE_ANTALL.name,data:1},{key:c.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:c.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:c.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:c.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:c.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:c.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:c.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:c.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:c.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:c.RESERVASJONER_FOR_AVDELING.name,data:[]}];return r.jsx(me,{data:s,requestApi:ae,children:r.jsx(ce,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:a})})},L=x.bind({});L.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:pe};const N=x.bind({});N.args={avdelinger:[],navAnsatt:pe};const I=x.bind({});I.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const O=x.bind({});O.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var C,Y,M;L.parameters={...L.parameters,docs:{...(C=L.parameters)==null?void 0:C.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(M=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var z,U,$;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...($=(U=N.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var J,Q,W;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(W=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Oa=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{L as Default,I as HarIkkeTilgang,N as LasteIkonFørValgtAvdelingErSatt,O as SkalFiltrereBortAvdelingerSomKreverKode6,Oa as __namedExportsOrder,Ia as default};
