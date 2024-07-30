import{r as o,R as s}from"./index-BBkUAzwr.js";import{R as pe}from"./RestApiMock--FIjvRYs.js";import{d as Ae,R as K}from"./useRestApiRunner-BbKnLk0z.js";import{l as ee,N as Re,z as ge,Q as ye,x as w,c as O,f as ve,R as _e,J as Se,v as ke,U as be,X as Te,Y as F,b as k,_ as Pe,t as fe,a0 as Le,a1 as he,e as b,M as T,F as Ne,m as Ie,a2 as Oe,a3 as Ke}from"./nb_NO-ammWO68Y.js";import{a as Ge}from"./alleKodeverkLos-BJud6Q-i.js";import{b as R,a as c,R as G,r as ne}from"./fplosRestApi-CKDBHRen.js";import{I as Ve}from"./IkkeTilgangTilAvdelingslederPanel-D9dhhilD.js";import{g as f,s as De,r as we}from"./StoreValuesInLocalStorage-DbvB94aq.js";import{F as Fe}from"./FordelingAvBehandlingstypePanel-4vbyS2yy.js";import{T as xe}from"./TilBehandlingPanel-BEGdlaxW.js";import{O as qe}from"./OppgaverPerForsteStonadsdagPanel-DMqQ6xBr.js";import{O as He}from"./OppgaverSomErApneEllerPaVentPanel-SfD8hsxz.js";import{V as je}from"./VentefristUtløperPanel-Sia4Q7U7.js";import{L as Be}from"./LeggTilSaksbehandlerForm-DmU1wp9w.js";import{S as Ce}from"./SaksbehandlereTabell-XrCpd04N.js";import{E as Ye}from"./EndreSakslisterPanel-D0I0ymM5.js";import{R as Me}from"./ReservasjonerTabell-Ct5WBL_O.js";import{G as ze}from"./GrupperIndex-CyX2zB3D.js";import{u as Ue}from"./Table-d_r6JuEn.js";import{P as $e}from"./Panel-BwoXZ0BW.js";import"./index-BfZ0jBbx.js";import"./dayjs.min-DXWWvErk.js";import"./index.es-Cl_yxThX.js";import"./FlyttReservasjonModal-D0Vmy9Jg.js";import"./index.es-Ddaq4f5b.js";import"./useLosKodeverk-YkaAS8Rx.js";import"./isSameOrAfter-g8x2aXZs.js";import"./isSameOrBefore-lHPY4PLG.js";import"./SletteSaksbehandlerModal-GjsHRJBA.js";import"./GjeldendeSakslisterTabell-BpJ4kUSw.js";import"./SletteSakslisteModal-ConOTZs0.js";import"./SaksbehandlereForSakslisteForm-B90KJBqo.js";import"./UtvalgskriterierForSakslisteForm-DvrF7Zt7.js";import"./BehandlingstypeVelger-wV9dPPlv.js";import"./AndreKriterierVelger-B5y6JIrT.js";import"./FagsakYtelseTypeVelger-zDaH2hUU.js";import"./SorteringVelger-CozCpGXr.js";import"./useDebounce-C319ZWDY.js";import"./GrupperPanel-Xxl6ovPw.js";var Je=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Qe=o.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Je(e,["title","titleId"]);let l=ee();return l=r?n||"title-"+l:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},t),r?o.createElement("title",{id:l},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"}))});var We=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const Xe=o.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=We(e,["title","titleId"]);let l=ee();return l=r?n||"title-"+l:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},t),r?o.createElement("title",{id:l},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))}),[Ze,en,nn,an]=Re(),[tn,V]=ge({name:"TabsContext",hookName:"useTabsContext",providerName:"TabsProvider",errorMessage:"Tabs.List, Tabs.Tag and Tabs.Panel needs to be wrapped within <Tabs>"});function rn({value:e,disabled:a=!1,onFocus:r,onClick:n},t){const{id:l,setSelectedValue:d,selectionFollowsFocus:u,focusedValue:E,setFocusedValue:p,selectedValue:_,makeTabId:S,makeTabPanelId:g}=V(),{register:y}=an({disabled:a,value:e}),i=e===_,m=()=>{p(e),u&&d(e)};return{ref:ye([y,t]),isSelected:i,isFocused:E===e,id:S(l,e),controlsId:g(l,e),onClick:w(n,()=>d(e)),onFocus:a?void 0:w(r,m)}}var sn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ln=o.forwardRef((e,a)=>{var r,n,{className:t,as:l="button",label:d,icon:u,value:E,onClick:p,onFocus:_,disabled:S,id:g}=e,y=sn(e,["className","as","label","icon","value","onClick","onFocus","disabled","id"]);const i=rn({value:E,onClick:p,onFocus:_,disabled:S},a),m=V();return!d&&!u?(console.error("<Tabs.Tab/> needs label and/or icon"),null):s.createElement(l,Object.assign({ref:i.ref},y,{className:O("navds-tabs__tab",`navds-tabs__tab--${(r=m==null?void 0:m.size)!==null&&r!==void 0?r:"medium"}`,`navds-tabs__tab-icon--${m==null?void 0:m.iconPosition}`,t,{"navds-tabs__tab--icon-only":u&&!d,"navds-tabs__tab--fill":m.fill}),role:"tab",type:"button","aria-selected":i.isSelected,"data-state":i.isSelected?"active":"inactive",tabIndex:i.isFocused?0:-1,"aria-controls":(n=y["aria-controls"])!==null&&n!==void 0?n:i.controlsId,id:g??i.id,onFocus:i.onFocus,onClick:i.onClick}),s.createElement(ve,{as:"span",className:"navds-tabs__tab-inner",size:m==null?void 0:m.size},s.createElement("span",{"aria-hidden":!!d},u),s.createElement("span",null,d)))});function x({hidden:e,onClick:a,dir:r}){return s.createElement("div",{className:O("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":e}),onClick:a,"aria-hidden":!0},r==="left"?s.createElement(Qe,{title:"scroll tilbake"}):s.createElement(Xe,{title:"scroll neste"}))}function dn(e){const[a,r]=o.useState({start:!1,end:!1}),n=o.useMemo(()=>_e(()=>{if(!(e!=null&&e.current))return;const{scrollWidth:t,clientWidth:l}=e.current,d=e.current.scrollLeft,u=d>1,E=d<t-l-1;r(p=>u===p.start&&E===p.end?p:{start:u,end:E})}),[e]);return o.useEffect(()=>{var t,l,d;const u=()=>n(),E=(d=(l=(t=e.current)===null||t===void 0?void 0:t.ownerDocument)!==null&&l!==void 0?l:document)!==null&&d!==void 0?d:window;E.addEventListener("resize",u);let p;return typeof ResizeObserver<"u"&&e.current&&(p=new ResizeObserver(u),p.observe(e.current)),()=>{E.removeEventListener("resize",u),p&&p.disconnect(),n.clear()}},[e,n]),o.useEffect(()=>{n()}),{update:n,start:a.start,end:a.end,show:a.end||a.start,scrollLeft:()=>{e.current&&(e.current.scrollLeft-=100)},scrollRight:()=>{e.current&&(e.current.scrollLeft+=100)}}}function on(){const{focusedValue:e,loop:a,selectedValue:r,setFocusedValue:n}=V(),t=en();return{onKeyDown:o.useCallback(d=>{const u=t.values().findIndex(i=>i.value===e),y={ArrowLeft:()=>{var i;const m=t.prevEnabled(u,a);m&&((i=m.node)===null||i===void 0||i.focus())},ArrowRight:()=>{var i;const m=t.nextEnabled(u,a);m&&((i=m.node)===null||i===void 0||i.focus())},Home:()=>{var i;const m=t.firstEnabled();m&&((i=m.node)===null||i===void 0||i.focus())},End:()=>{var i;const m=t.lastEnabled();m&&((i=m.node)===null||i===void 0||i.focus())}}[d.key];y?(d.preventDefault(),y(d)):d.key==="Tab"&&r&&setTimeout(()=>n(r))},[t,e,a,r,n])}}var un=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const En=o.forwardRef((e,a)=>{var{className:r,onKeyDown:n}=e,t=un(e,["className","onKeyDown"]);const{onKeyDown:l}=on(),d=o.useRef(null),u=Se(d,a),E=dn(d);return s.createElement("div",{className:"navds-tabs__tablist-wrapper"},E.show&&s.createElement(x,{dir:"left",hidden:!E.start,onClick:E.scrollLeft}),s.createElement("div",Object.assign({ref:u},t,{onScroll:E.update,className:O("navds-tabs__tablist",r),role:"tablist","aria-orientation":"horizontal",onKeyDown:w(n,l)})),E.show&&s.createElement(x,{dir:"right",hidden:!E.end,onClick:E.scrollRight}))});function cn({value:e}){const{id:a,selectedValue:r,makeTabId:n,makeTabPanelId:t}=V();return{labelledbyId:n(a,e),hidden:r!==e,id:t(a,e)}}var mn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const pn=o.forwardRef((e,a)=>{var r,{className:n,value:t,children:l,lazy:d=!0,id:u}=e,E=mn(e,["className","value","children","lazy","id"]);const p=cn({value:t});return s.createElement("div",Object.assign({ref:a},E,{className:O("navds-tabs__tabpanel",n),role:"tabpanel",tabIndex:0,"aria-labelledby":(r=E["aria-labelledby"])!==null&&r!==void 0?r:p.labelledbyId,id:u??p.id,hidden:p.hidden,"data-state":p.hidden?"inactive":"active"}),d&&p.hidden?null:l)});function An({onChange:e,value:a,defaultValue:r="",id:n}){const[t,l]=o.useState(r),[d,u]=Ue({defaultValue:r,value:a,onChange:e});o.useEffect(()=>{a!=null&&l(a)},[a]);const E=ke();return{id:`tabs-${n??E}`,selectedValue:d,setSelectedValue:u,focusedValue:t,setFocusedValue:l,makeTabId:Rn,makeTabPanelId:gn}}function Rn(e,a){return`${e}--tab-${a}`}function gn(e,a){return`${e}--tabpanel-${a}`}var yn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const v=o.forwardRef((e,a)=>{var{className:r,children:n,size:t="medium",defaultValue:l="",value:d,onChange:u,id:E,selectionFollowsFocus:p=!1,loop:_=!0,iconPosition:S="left",fill:g=!1}=e,y=yn(e,["className","children","size","defaultValue","value","onChange","id","selectionFollowsFocus","loop","iconPosition","fill"]);const i=nn(),m=An({defaultValue:l,value:d,onChange:u,id:E}),me=Object.assign(Object.assign({},m),{selectionFollowsFocus:p,loop:_,size:t,iconPosition:S,fill:g});return s.createElement(Ze,{value:i},s.createElement(tn,Object.assign({},me),s.createElement("div",Object.assign({ref:a},y,{id:E,className:O("navds-tabs",r,`navds-tabs--${t}`)}),n)))});v.Tab=ln;v.List=En;v.Panel=pn;const vn=()=>{const e=o.useContext(Ae),a=o.useCallback(n=>{e&&e({type:"add",data:n})},[]),r=o.useCallback(()=>{e&&e({type:"remove"})},[]);return{addErrorMessage:a,removeErrorMessages:r}},_n={paramName:"",parse:e=>e,isQueryParam:!1},Sn=(e,a,r)=>{const n=r.isQueryParam?F(a.search):e;return r.parse(n[r.paramName])};function kn(e){const a={..._n,...e},r=be(),n=Te(),t=Sn(n,r,a);return{location:r,selected:t}}const bn="_container_1sikf_1",Tn={container:bn},ae=({children:e})=>s.createElement("div",{className:Tn.container},e);ae.__docgenInfo={description:"AvdelingslederDashboard",methods:[],displayName:"AvdelingslederDashboard"};const A={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",GRUPPER:"grupper",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},te=({oppgaverForAvdeling:e,oppgaverPerDato:a,behandlingerPaVent:r,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:t})=>{const d=o.useRef(null);return s.createElement("div",{ref:d},s.createElement(xe,{height:300,oppgaverPerDato:a,getValueFromLocalStorage:f}),s.createElement(k,{twentyPx:!0}),s.createElement(Fe,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:f}),s.createElement(k,{twentyPx:!0}),s.createElement(je,{height:300,behandlingerPaVent:r,getValueFromLocalStorage:f}),s.createElement(k,{twentyPx:!0}),s.createElement(qe,{height:300,oppgaverPerForsteStonadsdag:n}),s.createElement(k,{twentyPx:!0}),s.createElement(He,{height:300,oppgaverApneEllerPaVent:t,getValueFromLocalStorage:f}))};te.__docgenInfo={description:"NokkeltallPanel.",methods:[],displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverSomErApneEllerPaVent[]"},description:""}}};const Pn=[],fn=[],Ln=[],hn=[],Nn=[],re=({valgtAvdelingEnhet:e})=>{const{data:a=Pn}=R.useRestApi(c.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:r=fn}=R.useRestApi(c.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Ln}=R.useRestApi(c.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:t=hn}=R.useRestApi(c.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:l=Nn}=R.useRestApi(c.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return s.createElement(te,{oppgaverForAvdeling:a,oppgaverPerDato:r,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:t,oppgaverApneEllerPaVent:l})};re.__docgenInfo={description:"NokkeltallIndex",methods:[],displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const se=({saksbehandlere:e,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:r,hentAvdelingensSaksbehandlere:n})=>s.createElement(s.Fragment,null,s.createElement(Ce,{saksbehandlere:e,valgtAvdelingEnhet:a,hentAvdelingensSaksbehandlere:n}),s.createElement(k,{sixteenPx:!0}),s.createElement(Be,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:r,hentAvdelingensSaksbehandlere:n}));se.__docgenInfo={description:"SaksbehandlerePanel",methods:[],displayName:"SaksbehandlerePanel",props:{saksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Saksbehandler[]"},description:""},hentAvdelingensSaksbehandlere:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const le=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:r})=>s.createElement(se,{saksbehandlere:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:r});le.__docgenInfo={description:"EndreSaksbehandlereIndex",methods:[],displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSaksbehandlere:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};const ie=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a})=>{const[r,n]=o.useState(),t=o.useCallback(()=>n(void 0),[]);return s.createElement(Ye,{setValgtSakslisteId:n,valgtSakslisteId:r,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:a,resetValgtSakslisteId:t})};ie.__docgenInfo={description:"EndreBehandlingskoerIndex",methods:[],displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},avdelingensSaksbehandlere:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:""}}};const In=[],de=({valgtAvdelingEnhet:e})=>{const{data:a=In,startRequest:r}=R.useRestApiRunner(c.RESERVASJONER_FOR_AVDELING),{startRequest:n}=R.useRestApiRunner(c.AVDELINGSLEDER_OPPHEVER_RESERVASJON),t=R.useGlobalStateRestApiData(G.KODEVERK_LOS);o.useEffect(()=>{r({avdelingEnhet:e})},[]);const l=o.useCallback(u=>n({oppgaveId:u}).then(()=>r({avdelingEnhet:e})),[e]),d=o.useCallback(()=>r({avdelingEnhet:e}),[e]);return s.createElement(Me,{opphevReservasjon:l,reservasjoner:a,hentAvdelingensReservasjoner:d,alleKodeverk:t})};de.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const On="_padding_eb62i_1",q={padding:On},oe=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:a,avdelinger:r})=>{const n=o.useCallback(t=>{const l=t.target.value;De("avdelingEnhet",l),e(l)},[r]);return r?s.createElement("div",{className:q.padding},s.createElement(Pe,{size:"small",hideLabel:!0,label:"",onChange:n,value:a,className:q.padding},r.map(t=>s.createElement("option",{key:t.avdelingEnhet,value:t.avdelingEnhet},`${t.avdelingEnhet} ${t.navn}`)))):null};oe.__docgenInfo={description:"",methods:[],displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(avdelingEnhet: string) => void",signature:{arguments:[{type:{name:"string"},name:"avdelingEnhet"}],return:{name:"void"}}},description:""},valgtAvdelingEnhet:{required:!1,tsType:{name:"string"},description:""},avdelinger:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avdelingEnhet: string;
  navn: string;
  kreverKode6: boolean;
}`,signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kreverKode6",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  avdelingEnhet: string;
  navn: string;
  kreverKode6: boolean;
}>`}],raw:"Avdeling[]"},description:""}}};const Kn="_paddingHeader_yllsv_1",Gn="_padding_yllsv_1",H={paddingHeader:Kn,padding:Gn},Vn=fe(Ie),j="4867",Dn=[],wn=(e,a,r)=>{if(a.length>0&&!r){let n=a.some(l=>l.avdelingEnhet===j)?j:a[0].avdelingEnhet;const t=f("avdelingEnhet");t&&(a.some(l=>l.avdelingEnhet===t)?n=t:we("avdelingEnhet")),e(n)}},Fn=e=>e==="?"||!e,xn=(e,a)=>{const r=Fn(e)?{}:F(e);return Oe({...r,...a})},qn=(e,a)=>({...e,search:xn(e.search,a)}),Hn=e=>a=>qn(e,{fane:a}),jn=(e,a,r,n)=>{switch(e){case A.BEHANDLINGSKOER:return s.createElement(ie,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n});case A.SAKSBEHANDLERE:return s.createElement(le,{valgtAvdelingEnhet:a,hentAvdelingensSaksbehandlere:r,avdelingensSaksbehandlere:n});case A.GRUPPER:return s.createElement(ze,{valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n});case A.NOKKELTALL:return s.createElement(re,{valgtAvdelingEnhet:a});case A.RESERVASJONER:return s.createElement(de,{valgtAvdelingEnhet:a});default:return null}},P={[A.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[A.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[A.GRUPPER]:"AvdelingslederIndex.Grupper",[A.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[A.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},Bn=e=>{const a=F(e.search);return a.avdelingsleder?a.avdelingsleder:A.BEHANDLINGSKOER},Cn=({navAnsatt:e})=>{const[a,r]=o.useState(),{selected:n,location:t}=kn({paramName:"fane",isQueryParam:!0}),l=R.useRestApi(c.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),d=l==null?void 0:l.data,u=d?d.filter(i=>!!(e!=null&&e.kanBehandleKode6)||!i.kreverKode6):[];o.useEffect(()=>{l.state===K.SUCCESS&&wn(r,u,a)},[l]);const{startRequest:E,data:p=Dn}=R.useRestApiRunner(c.SAKSBEHANDLERE_FOR_AVDELING),_=o.useCallback(i=>E(i,!0),[]);o.useEffect(()=>{a&&_({avdelingEnhet:a})},[a]);const S=Hn(t),g=n||Bn(t),y=he();return e!=null&&e.kanOppgavestyre?l.state!==K.SUCCESS?null:a?s.createElement(ae,{key:a},s.createElement(oe,{valgtAvdelingEnhet:a,avdelinger:u,setValgtAvdelingEnhet:r}),s.createElement(k,{sixteenPx:!0}),s.createElement(v,{size:"small",value:g,onChange:i=>{y(S(i))},className:H.paddingHeader},s.createElement(v.List,null,s.createElement(v.Tab,{value:A.BEHANDLINGSKOER,label:s.createElement(b,{size:"small"},s.createElement(T,{id:P[A.BEHANDLINGSKOER]}))}),s.createElement(v.Tab,{value:A.NOKKELTALL,label:s.createElement(b,{size:"small"},s.createElement(T,{id:P[A.NOKKELTALL]}))}),s.createElement(v.Tab,{value:A.SAKSBEHANDLERE,label:s.createElement(b,{size:"small"},s.createElement(T,{id:P[A.SAKSBEHANDLERE]}))}),s.createElement(v.Tab,{value:A.GRUPPER,label:s.createElement(b,{size:"small"},s.createElement(T,{id:P[A.GRUPPER]}))}),s.createElement(v.Tab,{value:A.RESERVASJONER,label:s.createElement(b,{size:"small"},s.createElement(T,{id:P[A.RESERVASJONER]}))}))),s.createElement($e,{className:H.padding},jn(g,a,_,p))):s.createElement(Ne,null):s.createElement(Ve,null)},ue=({setLosErIkkeTilgjengelig:e,navAnsatt:a})=>{const{addErrorMessage:r}=vn();ne.setAddErrorMessageHandler(r);const n=R.useGlobalStateRestApiData(G.KODEVERK_LOS),t=R.useGlobalStateRestApi(G.KODEVERK_LOS,void 0,{suspendRequest:!!n});return o.useEffect(()=>{!n&&t.state===K.ERROR&&e()},[t.state]),!n&&t.state!==K.SUCCESS?null:s.createElement(Le,{value:Vn},s.createElement(Cn,{navAnsatt:a}))},Ee=ue;ue.__docgenInfo={description:"",methods:[],displayName:"AvdelingslederIndexIntlWrapper",props:{setLosErIkkeTilgjengelig:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},navAnsatt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Na={title:"los/avdelingsleder/AvdelingslederIndex",component:Ee,decorators:[Ke]},ce={kanOppgavestyre:!0,kanBehandleKode6:!0},D=({avdelinger:e,navAnsatt:a})=>{const r=[{key:G.KODEVERK_LOS.name,data:Ge,global:!0},{key:c.AVDELINGER.name,data:e},{key:c.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:c.OPPGAVE_ANTALL.name,data:1},{key:c.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:c.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:c.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:c.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:c.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:c.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:c.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:c.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:c.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:c.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:c.RESERVASJONER_FOR_AVDELING.name,data:[]}];return s.createElement(pe,{data:r,requestApi:ne},s.createElement(Ee,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:a}))},L=D.bind({});L.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:ce};const h=D.bind({});h.args={avdelinger:[],navAnsatt:ce};const N=D.bind({});N.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const I=D.bind({});I.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var B,C,Y;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(Y=(C=L.parameters)==null?void 0:C.docs)==null?void 0:Y.source}}};var M,z,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(U=(z=h.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var $,J,Q;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`({
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
}`,...(Q=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Z;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Ia=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{L as Default,N as HarIkkeTilgang,h as LasteIkonFørValgtAvdelingErSatt,I as SkalFiltrereBortAvdelingerSomKreverKode6,Ia as __namedExportsOrder,Na as default};
