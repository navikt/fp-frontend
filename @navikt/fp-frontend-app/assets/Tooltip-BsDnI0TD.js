import{l as k,m as Y,T as G,S as F,n as J,o as K,p as Q,s as W,q as Z,r as ee,t as R,v as te,x as ne,y as ae,z as oe,A as re,C as le,D as se,e as ie,E as de}from"./withQueryClient-BhxeJHbr.js";import{r as v,R as r}from"./index-B5OHeJSP.js";import{M as T}from"./index-sT6466e8.js";import{u as ce}from"./index.es-DSZ6vyNz.js";var fe=function(t,l){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)l.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const ue=v.forwardRef((t,l)=>{var a,e,n,{rootElement:i,asChild:g}=t,c=fe(t,["rootElement","asChild"]);const f=k(!1),d=(a=Y())===null||a===void 0?void 0:a.rootElement,o=(e=i??d)!==null&&e!==void 0?e:(n=globalThis==null?void 0:globalThis.document)===null||n===void 0?void 0:n.body,u=g?F:"div";return f?o?T.createPortal(r.createElement(G,{theme:f.theme,asChild:!0,hasBackground:!1},r.createElement(u,Object.assign({ref:l,"data-aksel-portal":""},c))),o):null:o?T.createPortal(r.createElement(u,Object.assign({ref:l,"data-aksel-portal":""},c)),o):null});var me=function(t,l){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&l.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)l.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const ye=v.forwardRef((t,l)=>{var{children:a,className:e,arrow:n=!0,placement:i="top",open:g,defaultOpen:c=!1,onOpenChange:f,offset:d,content:o,delay:u=150,id:S,keys:m,maxChar:I=80,describesChild:M=!1}=t,N=me(t,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const w=k(!1),$=n&&!w,[p,D]=ce({defaultValue:c,value:g,onChange:f}),x=v.useRef(null),h=J(!1),A=h?h.ref.current:void 0,{x:b,y,strategy:B,context:O,placement:C,middlewareData:{arrow:{x:E,y:_}={},hide:{referenceHidden:H}={}},refs:P}=K({placement:i,open:p,onOpenChange:s=>D(s),middleware:[Q(d??(w?8:n?16:4)),W(),Z({padding:5,fallbackPlacements:["bottom","top"]}),ee({element:x,padding:5})],whileElementsMounted:h?(s,V,X)=>R(s,V,X,{animationFrame:!0}):R,strategy:h?"fixed":void 0}),{getReferenceProps:L,getFloatingProps:q}=te([ne(O,{handleClose:ae(),restMs:u}),oe(O),re(O)]),j=le(S),z=se(l,P.setFloating);if(!a||(a==null?void 0:a.type)===r.Fragment||a===r.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(o==null?void 0:o.length)>I&&p&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${o.length}
Tooltip-content: ${o}`);const U=M?p?{"aria-describedby":j}:{title:o}:{"aria-label":o};return r.createElement(r.Fragment,null,r.createElement(F,Object.assign({ref:P.setReference},L(),U,{"aria-keyshortcuts":m?m.join("+"):void 0}),a),r.createElement(ue,{rootElement:A,asChild:!0},p&&r.createElement("div",Object.assign({},q(Object.assign(Object.assign({},N),{ref:z,style:{position:B,top:y??0,left:b??0,visibility:H?"hidden":"visible"},role:"tooltip",id:j,className:ie("navds-tooltip","navds-detail navds-detail--small",e)})),{"data-side":C,"data-state":"open"}),o,m&&r.createElement("span",{className:"navds-tooltip__keys","aria-hidden":!0},m.map(s=>r.createElement(de,{as:"kbd",key:s,className:"navds-tooltip__key"},s))),$&&r.createElement("div",{ref:s=>{x.current=s},className:"navds-tooltip__arrow",style:{left:E!=null?`${E}px`:"",top:_!=null?`${_}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[C]]:"-3.5px"}}))))});export{ue as P,ye as T};
