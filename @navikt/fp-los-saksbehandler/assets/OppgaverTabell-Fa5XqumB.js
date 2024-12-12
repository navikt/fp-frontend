import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as l,R as d}from"./index-DRjF_FHU.js";import{u as N,c as q,L as _,d as Z,H as ce,B as S,D as ye,e as be}from"./nb_NO-DkvGH99a.js";import{B as fe}from"./BehandlingPollingTimoutModal-BeXoy05X.js";import{D as K,B as ke}from"./index.es-CWqpEUEc.js";import{Z as he}from"./index.es-3EwiyZMP.js";import"./aktivitetStatus-B1m96ipJ.js";import{u as Te,K as Oe}from"./useLosKodeverk-DhGuFNqi.js";import{P as Re,O as Ee}from"./OppgaveHandlingerMenu-DAhD9Kjz.js";import{T as b}from"./Table-C0h4kdcm.js";import{H as W,V as w}from"./VStack-CdW3Cbzf.js";import{B as J,i as je,j as qe,k as xe,m as Se,n as we,p as _e,q as Ie,o as Ae,s as Ne,f as Ce,e as Pe,b as G}from"./Modal-B7KGXAZK.js";import{u as De,S as Be}from"./Slot-Dx5zAY1I.js";import{u as Ue}from"./useControllableState-D1SS-Ogf.js";import{c as Me}from"./composeEventHandlers-DeH74NdU.js";import{a as Le,P as Q}from"./index.es-BwzUT_Vi.js";import{u as He,M as O}from"./i18n.context-BgIj-wcF.js";import{u as ze}from"./useQuery-BtA4ZZf7.js";import{u as Ye}from"./useMutation-CN5FmUHR.js";import{N as Fe,O as $e,P as Ke}from"./fplosSaksbehandlerApi-C1u6e_NL.js";import{S as Ge}from"./ChevronRight-DlDdfw9W.js";var ee=(e=>(e.POLLING_HALTED_OR_DELAYED="POLLING_HALTED_OR_DELAYED",e.POLLING_TIMEOUT="POLLING_TIMEOUT",e.REQUEST_ERROR="REQUEST_ERROR",e.REQUEST_FINISHED="REQUEST_FINISHED",e.REQUEST_FORBIDDEN="REQUEST_FORBIDDEN",e.REQUEST_STARTED="REQUEST_STARTED",e.REQUEST_UNAUTHORIZED="REQUEST_UNAUTHORIZED",e.STATUS_REQUEST_FINISHED="STATUS_REQUEST_FINISHED",e.STATUS_REQUEST_STARTED="STATUS_REQUEST_STARTED",e.UPDATE_POLLING_MESSAGE="UPDATE_POLLING_MESSAGE",e.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND="REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",e))(ee||{}),Qe=(e=>(e.PENDING="PENDING",e.COMPLETE="COMPLETE",e.DELAYED="DELAYED",e.CANCELLED="CANCELLED",e.HALTED="HALTED",e))(Qe||{}),C=(e=>(e.NOT_STARTED="NOT_STARTED",e.LOADING="LOADING",e.SUCCESS="SUCCESS",e.ERROR="ERROR",e))(C||{});const Ve={};l.createContext(Ve);l.createContext(void 0);const Xe={errors:[]};l.createContext(Xe);const Ze=l.createContext(void 0),We=()=>{const e=l.useContext(Ze),a=l.useCallback(n=>{e&&e({type:"add",data:n})},[]),r=l.useCallback(()=>{e&&e({type:"remove"})},[]);return{addErrorMessage:a,removeErrorMessages:r}};C.NOT_STARTED;C.NOT_STARTED;C.NOT_STARTED;var Je=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const en=l.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=Je(e,["title","titleId"]);let i=N();return i=r?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),r?l.createElement("title",{id:i},r):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v9c0 .69-.56 1.25-1.25 1.25H9a.75.75 0 0 0-.386.107L4.75 18.675zM6 3.25A2.75 2.75 0 0 0 3.25 6v14a.75.75 0 0 0 1.136.643l4.822-2.893H18A2.75 2.75 0 0 0 20.75 15V6A2.75 2.75 0 0 0 18 3.25zm3 6.5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M15 9.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var nn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const ne=l.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=nn(e,["title","titleId"]);let i=N();return i=r?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),r?l.createElement("title",{id:i},r):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var rn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const tn=l.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=rn(e,["title","titleId"]);let i=N();return i=r?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),r?l.createElement("title",{id:i},r):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"}))});var an=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const re=l.forwardRef((e,a)=>{var{title:r,titleId:n}=e,t=an(e,["title","titleId"]);let i=N();return i=r?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},t),r?l.createElement("title",{id:i},r):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.25 3.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25zm6.25 5.25c-.69 0-1.25-.56-1.25-1.25V3.75h-3.5v12.5h8.5v-7.5zm.25-3.94 2.44 2.44h-2.44zM6.502 7.75H5.75v12.5h8.5v-.748a.75.75 0 0 1 1.5 0v.998c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h1.002a.75.75 0 1 1 0 1.5",clipRule:"evenodd"}))});var sn=function(e,a,r,n){function t(i){return i instanceof r?i:new r(function(v){v(i)})}return new(r||(r=Promise))(function(i,v){function m(u){try{o(n.next(u))}catch(p){v(p)}}function g(u){try{o(n.throw(u))}catch(p){v(p)}}function o(u){u.done?i(u.value):t(u.value).then(m,g)}o((n=n.apply(e,[])).next())})};function ln(e){return sn(this,void 0,void 0,function*(){try{yield navigator.clipboard.writeText(e)}catch{const n=`Kopier til utklippstavle: ${/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl"}+C, Enter`;window.prompt(n,e)}})}var un=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const on=l.forwardRef((e,a)=>{var{className:r,copyText:n,text:t,activeText:i="Kopiert!",variant:v="neutral",size:m="medium",onActiveChange:g,icon:o,activeIcon:u,activeDuration:p=2e3,title:c="Kopier",activeTitle:f="Kopiert",iconPosition:k="left",onClick:y}=e,R=un(e,["className","copyText","text","activeText","variant","size","onActiveChange","icon","activeIcon","activeDuration","title","activeTitle","iconPosition","onClick"]);const[h,T]=l.useState(!1),E=l.useRef();l.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]);const x=()=>{E.current&&clearTimeout(E.current),ln(n),T(!0),g==null||g(!0),E.current=window.setTimeout(()=>{T(!1),g==null||g(!1)},p)},I=d.createElement("span",{className:"navds-copybutton__icon"},h?u??d.createElement(ne,{"aria-hidden":!!t,title:t?void 0:f}):o??d.createElement(re,{"aria-hidden":!!t,title:t?void 0:c}));return d.createElement("button",Object.assign({ref:a,type:"button"},R,{"aria-live":"polite",className:q("navds-copybutton",r,`navds-copybutton--${m}`,`navds-copybutton--${v}`,{"navds-copybutton--icon-only":!t,"navds-copybutton--icon-right":k==="right","navds-copybutton--active":h}),onClick:Me(y,x)}),d.createElement("span",{className:"navds-copybutton__content"},k==="left"&&I,t&&(h?d.createElement(_,{as:"span",size:m==="medium"?"medium":"small","aria-live":"polite"},i):d.createElement(_,{as:"span",size:m==="medium"?"medium":"small","aria-live":"polite"},t)),k==="right"&&I))});var dn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const te=l.forwardRef((e,a)=>{var{children:r,as:n="button",selected:t=!1,className:i,page:v}=e,m=dn(e,["children","as","selected","className","page"]);const g=Le(!1);return d.createElement(J,Object.assign({as:n,variant:g?"tertiary-neutral":"tertiary","aria-current":t,"data-selected":t,ref:a,className:q("navds-pagination__item",i,{"navds-pagination__item--selected":t}),"data-page":v,page:v},n==="button"&&{type:"button"},m),r)});var gn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const vn=({page:e,count:a,boundaryCount:r=1,siblingCount:n=1})=>{var t,i;const v=(p,c)=>Array.from({length:c-p+1},(f,k)=>p+k);if(a<=(r+n)*2+3)return v(1,a);const m=v(1,r),g=v(a-r+1,a),o=Math.max(Math.min(e-n,a-r-n*2-1),r+2),u=o+n*2;return[...m,o-((t=m[m.length-1])!==null&&t!==void 0?t:0)===2?o-1:"ellipsis",...v(o,u),((i=g[0])!==null&&i!==void 0?i:a+1)-u===2?u+1:"ellipsis",...g]},ae=l.forwardRef((e,a)=>{var{page:r,onPageChange:n,count:t,boundaryCount:i=1,siblingCount:v=1,className:m,size:g="medium",prevNextTexts:o=!1,srHeading:u,"aria-labelledby":p,renderItem:c=te}=e,f=gn(e,["page","onPageChange","count","boundaryCount","siblingCount","className","size","prevNextTexts","srHeading","aria-labelledby","renderItem"]);const k=Z(),y=He("Pagination");return r<1?(console.error("page cannot be less than 1"),null):t<1?(console.error("count cannot be less than 1"),null):i<0?(console.error("boundaryCount cannot be less than 0"),null):v<0?(console.error("siblingCount cannot be less than 0"),null):d.createElement("nav",Object.assign({ref:a},f,{"aria-labelledby":u?q(k,p):p,className:q("navds-pagination",`navds-pagination--${g}`,m)}),u&&d.createElement(ce,{size:"xsmall",visuallyHidden:!0,as:u.tag,id:k},u.text),d.createElement("ul",{className:"navds-pagination__list"},d.createElement("li",null,d.createElement(c,{className:q("navds-pagination__prev-next",{"navds-pagination--invisible":r===1,"navds-pagination--prev-next--with-text":o}),disabled:r===1,onClick:()=>n==null?void 0:n(r-1),page:r-1,size:g,icon:d.createElement(tn,Object.assign({},o?{"aria-hidden":!0}:{title:y("previous")}))},o&&y("previous"))),vn({page:r,count:t,siblingCount:v,boundaryCount:i}).map((R,h)=>{const T=Number(R);return Number.isNaN(T)?d.createElement("li",{className:"navds-pagination__ellipsis",key:`${R}${h}`},d.createElement(S,{size:g==="xsmall"?"small":g,as:"span"},"...")):d.createElement("li",{key:R},d.createElement(c,{onClick:()=>n==null?void 0:n(T),selected:r===T,page:T,size:g},T))}),d.createElement("li",null,d.createElement(c,{className:q("navds-pagination__prev-next",{"navds-pagination--invisible":r===t,"navds-pagination--prev-next--with-text":o}),disabled:r===t,onClick:()=>n==null?void 0:n(r+1),page:r+1,size:g,icon:d.createElement(Ge,Object.assign({},o?{"aria-hidden":!0}:{title:y("next")})),iconPosition:"right"},o&&y("next")))))});ae.Item=te;var pn=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};const mn=l.forwardRef((e,a)=>{var{children:r,className:n,arrow:t=!0,placement:i="top",open:v,defaultOpen:m=!1,onOpenChange:g,offset:o,content:u,delay:p=150,id:c,keys:f,maxChar:k=80,describesChild:y=!1}=e,R=pn(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const[h,T]=Ue({defaultValue:m,value:v,onChange:g}),E=l.useRef(null),x=je(!1),I=x?x.ref.current:void 0,{x:P,y:D,strategy:le,context:B,placement:H,middlewareData:{arrow:{x:z,y:Y}={},hide:{referenceHidden:ue}={}},refs:F}=qe({placement:i,open:h,onOpenChange:j=>T(j),middleware:[Ae(o||(t?10:2)),Ne(),Ce({padding:5,fallbackPlacements:["bottom","top"]}),Pe({element:E,padding:5})],whileElementsMounted:x?(j,pe,me)=>G(j,pe,me,{animationFrame:!0}):G,strategy:x?"fixed":void 0}),{getReferenceProps:oe,getFloatingProps:de}=xe([Se(B,{handleClose:we(),restMs:p}),_e(B),Ie(B)]),$=Z(c),ge=De(a,F.setFloating);if(!r||(r==null?void 0:r.type)===d.Fragment||r===d.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(u==null?void 0:u.length)>k&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const ve=y?h?{"aria-describedby":$}:{title:u}:{"aria-label":u};return d.createElement(d.Fragment,null,d.createElement(Be,Object.assign({ref:F.setReference},oe(),ve,{"aria-keyshortcuts":f?f.join("+"):void 0}),r),d.createElement(Re,{rootElement:I,asChild:!0},h&&d.createElement("div",Object.assign({},de(Object.assign(Object.assign({},R),{ref:ge,style:{position:le,top:D??0,left:P??0,visibility:ue?"hidden":"visible"},role:"tooltip",id:$,className:q("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":H}),u,f&&d.createElement("span",{className:"navds-tooltip__keys","aria-hidden":!0},f.map(j=>d.createElement(ye,{as:"kbd",key:j,className:"navds-tooltip__key"},j))),t&&d.createElement("div",{ref:j=>{E.current=j},className:"navds-tooltip__arrow",style:{left:z!=null?`${z}px`:"",top:Y!=null?`${Y}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[H]]:"-3.5px"}}))))}),cn="_isUnderBehandling_97n84_1",yn="_image_97n84_5",A={isUnderBehandling:cn,image:yn},bn=e=>{const{flyttetReservasjon:a}=e;if(!a)return;const r=he(a.tidspunkt);return s.jsxs(w,{gap:"2",children:[s.jsxs(w,{gap:"1",children:[s.jsx(_,{size:"small",children:s.jsx(O,{id:"OppgaverTabell.OverfortReservasjonHeader"})}),s.jsx(S,{size:"small",children:s.jsx(O,{id:"OppgaverTabell.OverfortReservasjonBody",values:{dato:r==null?void 0:r.date,tid:r==null?void 0:r.time,uid:a.uid,navn:a.navn}})})]}),s.jsxs(w,{gap:"1",children:[s.jsx(_,{size:"small",children:s.jsx(O,{id:"OppgaverTabell.OverfortReservasjonBegrunnelse"})}),s.jsx(S,{size:"small",children:a.begrunnelse})]})]})},fn=({oppgave:e})=>{const a=l.useRef(null),[r,n]=l.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(J,{ref:a,onClick:()=>n(!r),"aria-expanded":r,icon:s.jsx(en,{className:A.image,"aria-hidden":!0}),variant:"tertiary-neutral"}),s.jsx(Q,{open:r,onClose:()=>n(!1),anchorEl:a.current,children:s.jsx(Q.Content,{children:bn(e.status)})})]})},L=({oppgave:e,reserverOppgave:a})=>{var u;const r=be(),n=Te(Oe.BEHANDLING_TYPE),[t,i]=l.useState(!0),v=l.useRef(null),m=l.useRef(null),g=l.useRef(null),o=(p,c)=>{var R,h,T;const f=(R=v.current)==null?void 0:R.contains(p.target),k=(h=m.current)==null?void 0:h.contains(p.target),y=(T=g.current)==null?void 0:T.contains(p.target);f||k||y||c&&a(c)};return s.jsxs(b.Row,{onMouseDown:t?p=>o(p,e):void 0,onKeyDown:t?p=>o(p,e):void 0,className:e.underBehandling?A.isUnderBehandling:void 0,children:[s.jsx(b.DataCell,{children:e.navn?`${e.navn} ${e.personnummer}`:"<navn>"}),s.jsx(b.DataCell,{children:s.jsxs(W,{gap:"1",align:"center",ref:g,children:[s.jsx(S,{children:e.saksnummer}),s.jsx(mn,{content:r.formatMessage({id:"OppgaverTabell.Saksnr"}),children:s.jsx(on,{activeIcon:s.jsx(ne,{className:A.image,"aria-hidden":!0}),copyText:e.saksnummer.toString(),icon:s.jsx(re,{"aria-hidden":!0,className:A.image})})})]})}),s.jsx(b.DataCell,{children:(u=n.find(p=>p.kode===e.behandlingstype))==null?void 0:u.navn}),s.jsx(b.DataCell,{children:e.opprettetTidspunkt&&s.jsx(K,{dateString:e.opprettetTidspunkt})}),s.jsx(b.DataCell,{children:e.behandlingsfrist&&s.jsx(K,{dateString:e.behandlingsfrist})}),s.jsx(b.DataCell,{children:e.reservertTilTidspunkt&&s.jsx(ke,{dateTimeString:e.reservertTilTidspunkt,separator:"kl"})}),s.jsx(b.DataCell,{children:e.status.flyttetReservasjon&&s.jsx("div",{ref:m,children:s.jsx(fn,{oppgave:e})})}),s.jsx(b.DataCell,{children:e.underBehandling&&s.jsx("div",{ref:v,children:s.jsx(Ee,{oppgave:e,setEnableTableEvents:i})})})]},e.id)};L.__docgenInfo={description:"",methods:[],displayName:"OppgaveRad",props:{oppgave:{required:!0,tsType:{name:"intersection",raw:`Oppgave & {
  underBehandling: boolean;
  reservertTilTidspunkt: string | undefined;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},{name:"signature",type:"object",raw:`{
  underBehandling: boolean;
  reservertTilTidspunkt: string | undefined;
}`,signature:{properties:[{key:"underBehandling",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}]},description:""},reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"OppgaveRad",props:{oppgave:{required:!0,tsType:{name:"intersection",raw:`Oppgave & {
  underBehandling: boolean;
  reservertTilTidspunkt: string | undefined;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},{name:"signature",type:"object",raw:`{
  underBehandling: boolean;
  reservertTilTidspunkt: string | undefined;
}`,signature:{properties:[{key:"underBehandling",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}]},description:""},reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""}}};const V=new Array,kn=202,hn=1800,M="MAX_POLLING",Tn=e=>new Promise(a=>{setTimeout(a,e)}),On=e=>e.status!==void 0,se=async(e,a,r,n=0)=>{const t=await Ke(a);if(r()!==e)return[];if(On(t)){if(n===hn)throw new Error(M);const{pollIntervalMillis:i}=t,v=n<30?i:i+(n-30)*i;return await Tn(v),await se(e,a,r,n+1)}return t},Rn=async(e,a,r)=>{const n=await $e(e,r);if(n.status===kn){const t=n.headers.get("location");if(t===null)throw new Error("Location i response er ikke angitt");return await se(e,t,a)}throw new Error("Responderte ikke med 202 - Accepted")},En=e=>{const{addErrorMessage:a}=We(),[r,n]=l.useState(V),t=l.useRef(e),i=()=>t.current,{mutateAsync:v,data:m=V,isSuccess:g,error:o}=Ye({mutationFn:c=>Rn(e,i,c.oppgaveIder),onError:c=>{c.message!==M&&a({type:ee.REQUEST_ERROR,feilmelding:c==null?void 0:c.message})}}),{data:u,refetch:p}=ze({...Fe()});return l.useEffect(()=>{v({oppgaveIder:void 0})},[]),l.useEffect(()=>{g&&(n(m),v({oppgaveIder:m.map(c=>c.id).join(",")}),p())},[g]),l.useEffect(()=>(t.current=e,()=>{t.current=0}),[e]),{oppgaverTilBehandling:r,reserverteOppgaver:u,isMaxPollingAttemptsReached:(o==null?void 0:o.message)===M}},jn="_grayout_kabbl_1",qn="_headerPadding_kabbl_5",xn="_tabell_kabbl_9",U={grayout:jn,headerPadding:qn,tabell:xn},X=(e,a,r)=>r==="reservertTilTidspunkt"&&e.underBehandling&&!a.underBehandling||!e.underBehandling&&a.underBehandling?1:a[r]===void 0||e[r]===void 0||a[r]<e[r]?-1:a[r]>e[r]?1:0,Sn=e=>(a,r)=>e?e.direction==="ascending"?X(r,a,e.orderBy):X(a,r,e.orderBy):1,wn=(e,a)=>{const r=e.filter(t=>!a.some(i=>i.id===t.id)).map(t=>({...t,underBehandling:!0,reservertTilTidspunkt:t.status.reservertTilTidspunkt})),n=a.map(t=>({...t,underBehandling:!1,reservertTilTidspunkt:void 0}));return r.concat(n.slice(0,3))},ie=({reserverOppgave:e,antallOppgaver:a=0,valgtSakslisteId:r})=>{const[n,t]=l.useState(1),i=15,{oppgaverTilBehandling:v,reserverteOppgaver:m,isMaxPollingAttemptsReached:g}=En(r),o=wn(m,v),[u,p]=l.useState({orderBy:"reservertTilTidspunkt",direction:"ascending"}),c=y=>{p(u&&y===u.orderBy&&u.direction==="descending"?void 0:{orderBy:y,direction:u&&y===u.orderBy&&u.direction==="ascending"?"descending":"ascending"})},f=o.slice().sort(Sn(u)),k=f.length>i?f.slice((n-1)*i,n*i):f;return s.jsxs("div",{className:U.tabell,children:[g&&s.jsx(fe,{}),s.jsxs(w,{gap:"2",className:U.headerPadding,children:[s.jsxs(W,{gap:"2",children:[s.jsx(_,{size:"small",children:s.jsx(O,{id:"OppgaverTabell.DineNesteSaker"})}),s.jsx(S,{size:"small",className:U.grayout,children:s.jsx(O,{id:"OppgaverTabell.DineNesteSakerAntall",values:{totaltAntall:a,reservertAntall:m.length}})})]}),o.length===0&&s.jsx(S,{size:"small",children:s.jsx(O,{id:"OppgaverTabell.IngenOppgaver",values:{i:y=>s.jsx("i",{children:y})}})})]}),o.length>0&&s.jsxs(w,{gap:"4",children:[s.jsxs(b,{size:"small",sort:u,onSortChange:y=>c(y),children:[s.jsx(b.Header,{children:s.jsxs(b.Row,{children:[s.jsx(b.ColumnHeader,{sortKey:"navn",sortable:!0,children:s.jsx(O,{id:"OppgaverTabell.Soker"})}),s.jsx(b.ColumnHeader,{sortKey:"saksnummer",sortable:!0,children:s.jsx(O,{id:"OppgaverTabell.Sak"})}),s.jsx(b.ColumnHeader,{sortKey:"behandlingstype",sortable:!0,children:s.jsx(O,{id:"OppgaverTabell.Behandlingstype"})}),s.jsx(b.ColumnHeader,{sortKey:"opprettetTidspunkt",sortable:!0,children:s.jsx(O,{id:"OppgaverTabell.BehandlingOpprettet"})}),s.jsx(b.ColumnHeader,{sortKey:"behandlingsfrist",sortable:!0,children:s.jsx(O,{id:"OppgaverTabell.FristForBehandling"})}),s.jsx(b.ColumnHeader,{sortKey:"reservertTilTidspunkt",sortable:!0,children:s.jsx(O,{id:"OppgaverTabell.ReservertTilTidspunkt"})}),s.jsx(b.ColumnHeader,{}),s.jsx(b.ColumnHeader,{})]})}),s.jsx(b.Body,{children:k.map(y=>s.jsx(L,{oppgave:y,reserverOppgave:e},y.id))})]}),f.length>i&&s.jsx(ae,{page:n,onPageChange:t,count:Math.ceil(f.length/i),size:"small",prevNextTexts:!0})]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"OppgaverTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};ie.__docgenInfo={description:"",methods:[],displayName:"OppgaverTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};export{Qe as A,ee as E,ie as O,We as u};
