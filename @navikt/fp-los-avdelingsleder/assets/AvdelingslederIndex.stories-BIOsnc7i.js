import{j as r}from"./dayjs.min-ZUODdiE-.js";import{R as me}from"./RestApiMock-47fXKIMv.js";import{r as d,R}from"./index-uubelm5h.js";import{d as Re,R as V}from"./useRestApiRunner-DIVzIFJm.js";import{l as ae,z as ge,A as ye,C as _e,w,c as G,e as ve,G as Se,I as ke,v as be,J as Te,K as Pe,N as F,y as T,Q as fe,t as he,T as Le,U as Ie,d as P,M as f,F as Ne,m as Oe,X as Ke,_ as Ge}from"./nb_NO-DaKPuc26.js";import{a as Ve}from"./alleKodeverkLos-BJud6Q-i.js";import{b as _,a as c,R as D,r as te}from"./fplosRestApi-CXjbKy4z.js";import{I as De}from"./IkkeTilgangTilAvdelingslederPanel-D2H2xxPp.js";import{g as L,s as xe,r as je}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{F as we}from"./FordelingAvBehandlingstypePanel-RNLhX25C.js";import{T as Fe}from"./TilBehandlingPanel-BDW00r_w.js";import{O as qe}from"./OppgaverPerForsteStonadsdagPanel-DnUYZWoo.js";import{O as He}from"./OppgaverSomErApneEllerPaVentPanel-B4bCDdX8.js";import{V as Be}from"./VentefristUtløperPanel-DbBGwIAZ.js";import{L as Ce}from"./LeggTilSaksbehandlerForm-Ds07a3ci.js";import{S as Ye}from"./SaksbehandlereTabell-m4JmzO0c.js";import{E as Me}from"./EndreSakslisterPanel-DFFHdGjC.js";import{R as ze}from"./ReservasjonerTabell-EOLUxllj.js";import{G as Ue}from"./GrupperIndex-HBhxeo8e.js";import{u as $e}from"./Table-BllEUEpZ.js";import{P as Je}from"./Panel-ConQEAqL.js";import"./index-BdzLX9oW.js";import"./index.es-Cl_yxThX.js";import"./FlyttReservasjonModal-wiXl8wxS.js";import"./index.es-CD656DKD.js";import"./useLosKodeverk-ilBKw7AH.js";import"./isSameOrAfter-C-awqOHd.js";import"./isSameOrBefore-DeYxtwBz.js";import"./SletteSaksbehandlerModal-Gg0Hn_vC.js";import"./GjeldendeSakslisterTabell-DtQhIX4t.js";import"./SletteSakslisteModal-4PLPkGiq.js";import"./SaksbehandlereForSakslisteForm-D3eIaJt_.js";import"./UtvalgskriterierForSakslisteForm-SQoe9rlj.js";import"./BehandlingstypeVelger-uF3rLJPS.js";import"./AndreKriterierVelger-BwixT9V-.js";import"./FagsakYtelseTypeVelger-ClIkOaEy.js";import"./SorteringVelger-BwfWqBVc.js";import"./useDebounce-DIsqfJMe.js";import"./GrupperPanel-BF8S-iRF.js";var Qe=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const We=d.forwardRef((e,a)=>{var{title:s,titleId:n}=e,t=Qe(e,["title","titleId"]);let i=ae();return i=s?n||"title-"+i:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),s?d.createElement("title",{id:i},s):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"}))});var Xe=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const Ze=d.forwardRef((e,a)=>{var{title:s,titleId:n}=e,t=Xe(e,["title","titleId"]);let i=ae();return i=s?n||"title-"+i:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),s?d.createElement("title",{id:i},s):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))}),[en,nn,an,tn]=ge(),[sn,x]=ye({name:"TabsContext",hookName:"useTabsContext",providerName:"TabsProvider",errorMessage:"Tabs.List, Tabs.Tag and Tabs.Panel needs to be wrapped within <Tabs>"});function rn({value:e,disabled:a=!1,onFocus:s,onClick:n},t){const{id:i,setSelectedValue:l,selectionFollowsFocus:u,focusedValue:E,setFocusedValue:p,selectedValue:k,makeTabId:b,makeTabPanelId:y}=x(),{register:v}=tn({disabled:a,value:e}),A=e===k,o=()=>{p(e),u&&l(e)};return{ref:_e([v,t]),isSelected:A,isFocused:E===e,id:b(i,e),controlsId:y(i,e),onClick:w(n,()=>l(e)),onFocus:a?void 0:w(s,o)}}var ln=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const dn=d.forwardRef((e,a)=>{var s,n,{className:t,as:i="button",label:l,icon:u,value:E,onClick:p,onFocus:k,disabled:b,id:y}=e,v=ln(e,["className","as","label","icon","value","onClick","onFocus","disabled","id"]);const A=rn({value:E,onClick:p,onFocus:k,disabled:b},a),o=x();return!l&&!u?(console.error("<Tabs.Tab/> needs label and/or icon"),null):R.createElement(i,Object.assign({ref:A.ref},v,{className:G("navds-tabs__tab",`navds-tabs__tab--${(s=o==null?void 0:o.size)!==null&&s!==void 0?s:"medium"}`,`navds-tabs__tab-icon--${o==null?void 0:o.iconPosition}`,t,{"navds-tabs__tab--icon-only":u&&!l,"navds-tabs__tab--fill":o.fill}),role:"tab",type:"button","aria-selected":A.isSelected,"data-state":A.isSelected?"active":"inactive",tabIndex:A.isFocused?0:-1,"aria-controls":(n=v["aria-controls"])!==null&&n!==void 0?n:A.controlsId,id:y??A.id,onFocus:A.onFocus,onClick:A.onClick}),R.createElement(ve,{as:"span",className:"navds-tabs__tab-inner",size:o==null?void 0:o.size},R.createElement("span",{"aria-hidden":!!l},u),R.createElement("span",null,l)))});function q({hidden:e,onClick:a,dir:s}){return R.createElement("div",{className:G("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":e}),onClick:a,"aria-hidden":!0},s==="left"?R.createElement(We,{title:"scroll tilbake"}):R.createElement(Ze,{title:"scroll neste"}))}function on(e){const[a,s]=d.useState({start:!1,end:!1}),n=d.useMemo(()=>Se(()=>{if(!(e!=null&&e.current))return;const{scrollWidth:t,clientWidth:i}=e.current,l=e.current.scrollLeft,u=l>1,E=l<t-i-1;s(p=>u===p.start&&E===p.end?p:{start:u,end:E})}),[e]);return d.useEffect(()=>{var t,i,l;const u=()=>n(),E=(l=(i=(t=e.current)===null||t===void 0?void 0:t.ownerDocument)!==null&&i!==void 0?i:document)!==null&&l!==void 0?l:window;E.addEventListener("resize",u);let p;return typeof ResizeObserver<"u"&&e.current&&(p=new ResizeObserver(u),p.observe(e.current)),()=>{E.removeEventListener("resize",u),p&&p.disconnect(),n.clear()}},[e,n]),d.useEffect(()=>{n()}),{update:n,start:a.start,end:a.end,show:a.end||a.start,scrollLeft:()=>{e.current&&(e.current.scrollLeft-=100)},scrollRight:()=>{e.current&&(e.current.scrollLeft+=100)}}}function un(){const{focusedValue:e,loop:a,selectedValue:s,setFocusedValue:n}=x(),t=nn();return{onKeyDown:d.useCallback(l=>{const u=t.values().findIndex(o=>o.value===e),y={ArrowLeft:()=>{var o;const g=t.prevEnabled(u,a);g&&((o=g.node)===null||o===void 0||o.focus())},ArrowRight:()=>{var o;const g=t.nextEnabled(u,a);g&&((o=g.node)===null||o===void 0||o.focus())},Home:()=>{var o;const g=t.firstEnabled();g&&((o=g.node)===null||o===void 0||o.focus())},End:()=>{var o;const g=t.lastEnabled();g&&((o=g.node)===null||o===void 0||o.focus())}},v=l.shiftKey||l.ctrlKey||l.altKey||l.metaKey,A=y[l.key];A&&!v?(l.preventDefault(),A(l)):l.key==="Tab"&&s&&setTimeout(()=>n(s))},[t,e,a,s,n])}}var En=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const cn=d.forwardRef((e,a)=>{var{className:s,onKeyDown:n}=e,t=En(e,["className","onKeyDown"]);const{onKeyDown:i}=un(),l=d.useRef(null),u=ke(l,a),E=on(l);return R.createElement("div",{className:"navds-tabs__tablist-wrapper"},E.show&&R.createElement(q,{dir:"left",hidden:!E.start,onClick:E.scrollLeft}),R.createElement("div",Object.assign({ref:u},t,{onScroll:E.update,className:G("navds-tabs__tablist",s),role:"tablist","aria-orientation":"horizontal",onKeyDown:w(n,i)})),E.show&&R.createElement(q,{dir:"right",hidden:!E.end,onClick:E.scrollRight}))});function pn({value:e}){const{id:a,selectedValue:s,makeTabId:n,makeTabPanelId:t}=x();return{labelledbyId:n(a,e),hidden:s!==e,id:t(a,e)}}var An=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const mn=d.forwardRef((e,a)=>{var s,{className:n,value:t,children:i,lazy:l=!0,id:u}=e,E=An(e,["className","value","children","lazy","id"]);const p=pn({value:t});return R.createElement("div",Object.assign({ref:a},E,{className:G("navds-tabs__tabpanel",n),role:"tabpanel",tabIndex:0,"aria-labelledby":(s=E["aria-labelledby"])!==null&&s!==void 0?s:p.labelledbyId,id:u??p.id,hidden:p.hidden,"data-state":p.hidden?"inactive":"active"}),l&&p.hidden?null:i)});function Rn({onChange:e,value:a,defaultValue:s="",id:n}){const[t,i]=d.useState(s),[l,u]=$e({defaultValue:s,value:a,onChange:e});d.useEffect(()=>{a!=null&&i(a)},[a]);const E=be();return{id:`tabs-${n??E}`,selectedValue:l,setSelectedValue:u,focusedValue:t,setFocusedValue:i,makeTabId:gn,makeTabPanelId:yn}}function gn(e,a){return`${e}--tab-${a}`}function yn(e,a){return`${e}--tabpanel-${a}`}var _n=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]]);return s};const S=d.forwardRef((e,a)=>{var{className:s,children:n,size:t="medium",defaultValue:i="",value:l,onChange:u,id:E,selectionFollowsFocus:p=!1,loop:k=!0,iconPosition:b="left",fill:y=!1}=e,v=_n(e,["className","children","size","defaultValue","value","onChange","id","selectionFollowsFocus","loop","iconPosition","fill"]);const A=an(),o=Rn({defaultValue:i,value:l,onChange:u,id:E}),g=Object.assign(Object.assign({},o),{selectionFollowsFocus:p,loop:k,size:t,iconPosition:b,fill:y});return R.createElement(en,{value:A},R.createElement(sn,Object.assign({},g),R.createElement("div",Object.assign({ref:a},v,{id:E,className:G("navds-tabs",s,`navds-tabs--${t}`)}),n)))});S.Tab=dn;S.List=cn;S.Panel=mn;const vn=()=>{const e=d.useContext(Re),a=d.useCallback(n=>{e&&e({type:"add",data:n})},[]),s=d.useCallback(()=>{e&&e({type:"remove"})},[]);return{addErrorMessage:a,removeErrorMessages:s}},Sn={paramName:"",parse:e=>e,isQueryParam:!1},kn=(e,a,s)=>{const n=s.isQueryParam?F(a.search):e;return s.parse(n[s.paramName])};function bn(e){const a={...Sn,...e},s=Te(),n=Pe(),t=kn(n,s,a);return{location:s,selected:t}}const Tn="_container_1sikf_1",Pn={container:Tn},se=({children:e})=>r.jsx("div",{className:Pn.container,children:e});se.__docgenInfo={description:"AvdelingslederDashboard",methods:[],displayName:"AvdelingslederDashboard"};const m={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",GRUPPER:"grupper",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},re=({oppgaverForAvdeling:e,oppgaverPerDato:a,behandlingerPaVent:s,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:t})=>{const l=d.useRef(null);return r.jsxs("div",{ref:l,children:[r.jsx(Fe,{height:300,oppgaverPerDato:a,getValueFromLocalStorage:L}),r.jsx(T,{twentyPx:!0}),r.jsx(we,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:L}),r.jsx(T,{twentyPx:!0}),r.jsx(Be,{height:300,behandlingerPaVent:s,getValueFromLocalStorage:L}),r.jsx(T,{twentyPx:!0}),r.jsx(qe,{height:300,oppgaverPerForsteStonadsdag:n}),r.jsx(T,{twentyPx:!0}),r.jsx(He,{height:300,oppgaverApneEllerPaVent:t,getValueFromLocalStorage:L})]})};re.__docgenInfo={description:"NokkeltallPanel.",methods:[],displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverSomErApneEllerPaVent[]"},description:""}}};const fn=[],hn=[],Ln=[],In=[],Nn=[],ie=({valgtAvdelingEnhet:e})=>{const{data:a=fn}=_.useRestApi(c.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:s=hn}=_.useRestApi(c.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Ln}=_.useRestApi(c.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:t=In}=_.useRestApi(c.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:i=Nn}=_.useRestApi(c.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return r.jsx(re,{oppgaverForAvdeling:a,oppgaverPerDato:s,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:t,oppgaverApneEllerPaVent:i})};ie.__docgenInfo={description:"NokkeltallIndex",methods:[],displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const le=({saksbehandlere:e,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:s,hentAvdelingensSaksbehandlere:n})=>r.jsxs(r.Fragment,{children:[r.jsx(Ye,{saksbehandlere:e,valgtAvdelingEnhet:a,hentAvdelingensSaksbehandlere:n}),r.jsx(T,{twentyPx:!0}),r.jsx(Ce,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:s,hentAvdelingensSaksbehandlere:n})]});le.__docgenInfo={description:"SaksbehandlerePanel",methods:[],displayName:"SaksbehandlerePanel",props:{saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""},hentAvdelingensSaksbehandlere:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const de=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:s})=>r.jsx(le,{saksbehandlere:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:s});de.__docgenInfo={description:"EndreSaksbehandlereIndex",methods:[],displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSaksbehandlere:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a})=>{const[s,n]=d.useState(),t=d.useCallback(()=>n(void 0),[]);return r.jsx(Me,{setValgtSakslisteId:n,valgtSakslisteId:s,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,resetValgtSakslisteId:t})};oe.__docgenInfo={description:"EndreBehandlingskoerIndex",methods:[],displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"ansattAvdeling",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>`}],raw:"SaksbehandlerProfil[]"},description:""}}};const On=[],ue=({valgtAvdelingEnhet:e})=>{const{data:a=On,startRequest:s}=_.useRestApiRunner(c.RESERVASJONER_FOR_AVDELING),{startRequest:n}=_.useRestApiRunner(c.AVDELINGSLEDER_OPPHEVER_RESERVASJON),t=_.useGlobalStateRestApiData(D.KODEVERK_LOS);d.useEffect(()=>{s({avdelingEnhet:e})},[]);const i=d.useCallback(u=>n({oppgaveId:u}).then(()=>s({avdelingEnhet:e})),[e]),l=d.useCallback(()=>s({avdelingEnhet:e}),[e]);return r.jsx(ze,{opphevReservasjon:i,reservasjoner:a,hentAvdelingensReservasjoner:l,alleKodeverk:t})};ue.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const Kn="_padding_eb62i_1",H={padding:Kn},Ee=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:a,avdelinger:s})=>{const n=d.useCallback(t=>{const i=t.target.value;xe("avdelingEnhet",i),e(i)},[s]);return s?r.jsx("div",{className:H.padding,children:r.jsx(fe,{size:"small",hideLabel:!0,label:"",onChange:n,value:a,className:H.padding,children:s.map(t=>r.jsx("option",{value:t.avdelingEnhet,children:`${t.avdelingEnhet} ${t.navn}`},t.avdelingEnhet))})}):null};Ee.__docgenInfo={description:"",methods:[],displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""},valgtAvdelingEnhet:{required:!1,tsType:{name:"string"},description:""},avdelinger:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avdelingEnhet: string;
  navn: string;
  kreverKode6: boolean;
}`,signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kreverKode6",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  avdelingEnhet: string;
  navn: string;
  kreverKode6: boolean;
}>`}],raw:"Avdeling[]"},description:""}}};const Gn="_paddingHeader_yllsv_1",Vn="_padding_yllsv_1",B={paddingHeader:Gn,padding:Vn},Dn=he(Oe),C="4867",xn=[],jn=(e,a,s)=>{if(a.length>0&&!s){let n=a.some(i=>i.avdelingEnhet===C)?C:a[0].avdelingEnhet;const t=L("avdelingEnhet");t&&(a.some(i=>i.avdelingEnhet===t)?n=t:je("avdelingEnhet")),e(n)}},wn=e=>e==="?"||!e,Fn=(e,a)=>{const s=wn(e)?{}:F(e);return Ke({...s,...a})},qn=(e,a)=>({...e,search:Fn(e.search,a)}),Hn=e=>a=>qn(e,{fane:a}),Bn=(e,a,s,n)=>{switch(e){case m.BEHANDLINGSKOER:return r.jsx(oe,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n});case m.SAKSBEHANDLERE:return r.jsx(de,{valgtAvdelingEnhet:a,hentAvdelingensSaksbehandlere:s,avdelingensSaksbehandlere:n});case m.GRUPPER:return r.jsx(Ue,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n});case m.NOKKELTALL:return r.jsx(ie,{valgtAvdelingEnhet:a});case m.RESERVASJONER:return r.jsx(ue,{valgtAvdelingEnhet:a});default:return null}},h={[m.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[m.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[m.GRUPPER]:"AvdelingslederIndex.Grupper",[m.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[m.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},Cn=e=>{const a=F(e.search);return a.avdelingsleder?a.avdelingsleder:m.BEHANDLINGSKOER},Yn=({navAnsatt:e})=>{const[a,s]=d.useState(),{selected:n,location:t}=bn({paramName:"fane",isQueryParam:!0}),i=_.useRestApi(c.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=i==null?void 0:i.data,u=l?l.filter(A=>!!(e!=null&&e.kanBehandleKode6)||!A.kreverKode6):[];d.useEffect(()=>{i.state===V.SUCCESS&&jn(s,u,a)},[i]);const{startRequest:E,data:p=xn}=_.useRestApiRunner(c.SAKSBEHANDLERE_FOR_AVDELING),k=d.useCallback(A=>E(A,!0),[]);d.useEffect(()=>{a&&k({avdelingEnhet:a})},[a]);const b=Hn(t),y=n||Cn(t),v=Ie();return e!=null&&e.kanOppgavestyre?i.state!==V.SUCCESS?null:a?r.jsxs(se,{children:[r.jsx(Ee,{valgtAvdelingEnhet:a,avdelinger:u,setValgtAvdelingEnhet:s}),r.jsx(T,{sixteenPx:!0}),r.jsx(S,{size:"small",value:y,onChange:A=>{v(b(A))},className:B.paddingHeader,children:r.jsxs(S.List,{children:[r.jsx(S.Tab,{value:m.BEHANDLINGSKOER,label:r.jsx(P,{size:"small",children:r.jsx(f,{id:h[m.BEHANDLINGSKOER]})})}),r.jsx(S.Tab,{value:m.NOKKELTALL,label:r.jsx(P,{size:"small",children:r.jsx(f,{id:h[m.NOKKELTALL]})})}),r.jsx(S.Tab,{value:m.SAKSBEHANDLERE,label:r.jsx(P,{size:"small",children:r.jsx(f,{id:h[m.SAKSBEHANDLERE]})})}),r.jsx(S.Tab,{value:m.GRUPPER,label:r.jsx(P,{size:"small",children:r.jsx(f,{id:h[m.GRUPPER]})})}),r.jsx(S.Tab,{value:m.RESERVASJONER,label:r.jsx(P,{size:"small",children:r.jsx(f,{id:h[m.RESERVASJONER]})})})]})}),r.jsx(Je,{className:B.padding,children:Bn(y,a,k,p)})]},a):r.jsx(Ne,{}):r.jsx(De,{})},ce=({setLosErIkkeTilgjengelig:e,navAnsatt:a})=>{const{addErrorMessage:s}=vn();te.setAddErrorMessageHandler(s);const n=_.useGlobalStateRestApiData(D.KODEVERK_LOS),t=_.useGlobalStateRestApi(D.KODEVERK_LOS,void 0,{suspendRequest:!!n});return d.useEffect(()=>{!n&&t.state===V.ERROR&&e()},[t.state]),!n&&t.state!==V.SUCCESS?null:r.jsx(Le,{value:Dn,children:r.jsx(Yn,{navAnsatt:a})})},pe=ce;ce.__docgenInfo={description:"",methods:[],displayName:"AvdelingslederIndexIntlWrapper",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navAnsatt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Na={title:"los/avdelingsleder/AvdelingslederIndex",component:pe,decorators:[Ge]},Ae={kanOppgavestyre:!0,kanBehandleKode6:!0},j=({avdelinger:e,navAnsatt:a})=>{const s=[{key:D.KODEVERK_LOS.name,data:Ve,global:!0},{key:c.AVDELINGER.name,data:e},{key:c.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:c.OPPGAVE_ANTALL.name,data:1},{key:c.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:c.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:c.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:c.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:c.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:c.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:c.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:c.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:c.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:c.RESERVASJONER_FOR_AVDELING.name,data:[]}];return r.jsx(me,{data:s,requestApi:te,children:r.jsx(pe,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:a})})},I=j.bind({});I.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:Ae};const N=j.bind({});N.args={avdelinger:[],navAnsatt:Ae};const O=j.bind({});O.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const K=j.bind({});K.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var Y,M,z;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`({
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
}`,...(z=(M=I.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var U,$,J;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(J=($=N.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,W,X;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(X=(W=O.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ne;K.parameters={...K.parameters,docs:{...(Z=K.parameters)==null?void 0:Z.docs,source:{originalSource:`({
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
}`,...(ne=(ee=K.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Oa=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{I as Default,O as HarIkkeTilgang,N as LasteIkonFørValgtAvdelingErSatt,K as SkalFiltrereBortAvdelingerSomKreverKode6,Oa as __namedExportsOrder,Na as default};
