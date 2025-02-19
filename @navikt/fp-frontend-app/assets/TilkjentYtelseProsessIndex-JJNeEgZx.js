import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as h,R as Y}from"./index-DjhIdADd.js";import{g as Gn,Q as tv,o as Hi,am as Xt,f as mn,aj as sv,m as se,h as I,H as z,L as B,D as ke,V as ne,k as W,n as ae,an as Nn,ak as Kn,P as Le,$ as at,al as Qn,l as _t,at as av,bs as Dn,F as iv}from"./withPanelData-CuUto9MH.js";import{u as lv,o as ms,d as q,a as k,R as Ie,F as Ye,v as G,a4 as ed,X as Be,V as Ci,A as Fe,c as Ne,a1 as dv,a9 as ov,H as ve,f as zi,N as Ji,s as Me,T as ir,E as it,n as $e,M as qn,q as Pu,G as ps,e as Wi,a6 as xe,m as te,ae as De,z as lt,C as xu,af as nd,w as fe,y as gv,ag as Xi,aa as Fu,a3 as uv,J as Zt,K as Ar,S as Qt,ah as es,ai as kv,D as en,I as w,b as x,aj as mv,ak as pv,al as wr,g as vv,t as yv}from"./index.es-BwJWPKfZ.js";import{u as Sn}from"./initFetch-DDO4sht4.js";import{a as ze,e as Je,J as qe,b as Z,G as er,O as Tn,X as je,m as Bu,l as _u,i as Ou,K as rn,c as cn,o as jn,N as hn,H as vs,j as Zi,u as Ot,f as tn,d as Te,t as ys,Q as Du,_ as sn,$ as zr,Z as fs,a0 as fv,a1 as bv,E as wu,a2 as cv,a3 as rd,g as bs,h as cs,I as jv}from"./index.es-CyZRmUOO.js";import{A as de,h as js}from"./aksjonspunktCodes-BuBbCIxs.js";import{A as nr}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as un}from"./alleKodeverk-BFmIlMu4.js";import{V as hv}from"./venteArsakType-BJdSFL9e.js";import{S as Av}from"./SettPaVentModalIndex-DhodibO6.js";import{c as Vu}from"./bind-oYjWB_aQ.js";import{d as A}from"./dayjs.min-Cke173X9.js";import{a as Qr,g as Mu}from"./kodeverkUtils-DLZgokMR.js";import{F as lr,P as Qi}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as el}from"./eksterneLenker-DOKwbE_M.js";import{L as dt}from"./Link-DA7lkXc8.js";import{S as cr}from"./Spacer-QFOiGlYe.js";import{T as Gu}from"./Tooltip-_IALFsWh.js";import{S as xr}from"./ExclamationmarkTriangleFill-CmFMjmNV.js";import{j as nl,V as rr,k as Iv,i as ws,s as Lu,O as Tv,S as Rv}from"./VedtakProsessIndex-YPimRaW7.js";import{P as Ir}from"./Popover-DkC66A3f.js";import{u as Pn,b as Ku}from"./behandlingApi-3uYDn4C8.js";import{u as dr,F as or,s as Ev}from"./VergeFaktaInitPanel-C5jW0dsF.js";import{a as xn}from"./behandlingDataContext-BnLc3C0Q.js";import{h as br}from"./moment-C5S46NFB.js";import{S as Nv}from"./StarFill-CUCQdSrj.js";import{H as Fn,E as qv,a as Sv,b as Pv}from"./index.es-DkhFF4Fw.js";import{T as jr}from"./BehandlingSupportIndex-Bmv4mIK1.js";import{T as P}from"./Table-B8YhxwYM.js";import{a as xv,T as Ve,b as Fv,S as Bv}from"./Timeline-B0JCQxnH.js";import{T as hs}from"./Tag-CAdLdh-9.js";import{C as _v}from"./Checkbox-l_MTvChq.js";import{H as Ov}from"./landkoder-BzkHBWbL.js";import{S as Dv}from"./VisittkortSakIndex-BmIJbcV4.js";import{a as rl,S as wv}from"./Plus-B8iy0G7P.js";import{S as $u}from"./TotrinnskontrollIndex-9b3j1dfa.js";import{V as Uu}from"./BehandlingHenlagtPanel-BCjrK35G.js";import{i as Vv,g as Mv}from"./index-BHG4GVne.js";import{u as tl,P as Yu,a as Gv}from"./useStandardProsessPanelProps-BVhzZKku.js";import{P as Fr,a as Lv,V as sl,b as Kv}from"./OverstyringPanel-BxwvVn3F.js";import{P as al}from"./RisikoklassifiseringIndex-BAlqHn-I.js";import{K as $v}from"./Kjonnkode-C-fkzSiP.js";const il=h.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Uv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ll=h.createContext(null),Yv=h.forwardRef((e,n)=>{var{children:r,className:t,open:s,defaultOpen:i=!1,onOpenChange:l}=e,o=Uv(e,["children","className","open","defaultOpen","onOpenChange"]);const[g,m]=lv({defaultValue:i,value:s,onChange:l}),p=h.useContext(il),y=h.useRef(!(s||i)),b=()=>{m(f=>!f),y.current=!0};return p!=null&&p.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),Y.createElement("div",Object.assign({className:Gn("navds-accordion__item",t,{"navds-accordion__item--open":g,"navds-accordion__item--neutral":(p==null?void 0:p.variant)==="neutral","navds-accordion__item--no-animation":!y.current}),"data-expanded":g,ref:n},tv(o,["onClick"])),Y.createElement(ll.Provider,{value:{open:g,toggleOpen:b}},r))});var Hv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Cv=h.forwardRef((e,n)=>{var{children:r,className:t}=e,s=Hv(e,["children","className"]);const i=h.useContext(ll),l=Hi(!1);return i===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):Y.createElement(Xt,Object.assign({},s,{as:"div",ref:n,className:Gn("navds-accordion__content",{"navds-accordion__content--closed":!i.open},t),"aria-hidden":!i.open||void 0}),l?Y.createElement("div",{className:"navds-accordion__content-inner"},r):r)});var zv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Jv=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=zv(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var Wv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Xv=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Wv(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Zv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Qv=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Zv(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var ey=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Hu=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ey(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var ny=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Vr=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ny(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var ry=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ty=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ry(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var sy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ay=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=sy(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var iy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Cu=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=iy(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var ly=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const dy=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ly(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var oy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const gy=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=oy(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var uy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Mr=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=uy(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var ky=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const my=h.forwardRef((e,n)=>{var r,{children:t,className:s,onClick:i}=e,l=ky(e,["children","className","onClick"]);const o=h.useContext(ll),g=h.useContext(il),m=Hi(!1);if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let p=(r=g==null?void 0:g.headingSize)!==null&&r!==void 0?r:"small";return m&&(p=(g==null?void 0:g.size)==="small"?"xsmall":"small"),Y.createElement("button",Object.assign({ref:n},l,{className:Gn("navds-accordion__header",s),onClick:sv(i,o.toggleOpen),"aria-expanded":o.open,type:"button"}),Y.createElement("span",{className:"navds-accordion__icon-wrapper"},Y.createElement(ms,{className:"navds-accordion__header-chevron","aria-hidden":!0})),Y.createElement(se,{size:p,as:"span",className:"navds-accordion__header-content"},t))});var py=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Pe=h.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:s="small",size:i="medium",indent:l=!0}=e,o=py(e,["className","variant","headingSize","size","indent"]);return Y.createElement(il.Provider,{value:{variant:t,headingSize:s,size:i,mounted:!0}},Y.createElement("div",Object.assign({},o,{className:Gn("navds-accordion",r,`navds-accordion--${i}`,{"navds-accordion--indent":l}),ref:n})))});Pe.Header=my;Pe.Content=Cv;Pe.Item=Yv;const Yt=h.createContext({listType:"ul",size:"medium"});var vy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const zu=h.forwardRef((e,n)=>{var{className:r,children:t,title:s,icon:i}=e,l=vy(e,["className","children","title","icon"]);const{listType:o,size:g}=h.useContext(Yt);return o==="ol"&&i&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},l,{ref:n,className:Gn("navds-list__item",r)}),o==="ul"&&Y.createElement("div",{className:Gn("navds-list__item-marker",{"navds-list__item-marker--icon":i,"navds-list__item-marker--bullet":!i})},i||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,s&&Y.createElement(Xt,{as:"p",size:g,weight:"semibold"},s),t))});zu.displayName="List.Item";var yy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const fy={small:"xsmall",medium:"small",large:"medium"},ee=h.forwardRef((e,n)=>{var{children:r,className:t,as:s="ul",title:i,description:l,headingTag:o="h3",size:g}=e,m=yy(e,["children","className","as","title","description","headingTag","size"]);const{size:p}=h.useContext(Yt),y=Hi(!1),b=g??p;return y?Y.createElement(Yt.Provider,{value:{listType:s,size:b}},Y.createElement(Xt,Object.assign({as:"div"},m,{size:b,ref:n,className:Gn("navds-list",`navds-list--${b}`,t)}),Y.createElement(s,{role:"list"},r))):Y.createElement(Yt.Provider,{value:{listType:s,size:b}},Y.createElement(Xt,Object.assign({as:"div"},m,{size:b,ref:n,className:Gn("navds-list",`navds-list--${b}`,t)}),i&&Y.createElement(se,{size:fy[b],as:o},i),l&&Y.createElement(I,{size:b},l),Y.createElement(s,{role:"list"},r)))});ee.Item=zu;var le=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(le||{}),be=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(be||{}),et=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(et||{});const dl=h.createContext({isDirty:!1,setDirty:()=>{}}),Ju=({children:e})=>{const[n,r]=h.useState(!1),t=h.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return a.jsx(dl.Provider,{value:t,children:e})},ol=e=>{const n=h.useContext(dl);h.useEffect(()=>{n.setDirty(e)},[e])},by=()=>h.useContext(dl).isDirty;Ju.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const cy="_inline_glms2_1",jy="_docIcon_glms2_9",hy="_phoneIcon_glms2_14",Vs={inline:cy,docIcon:jy,phoneIcon:hy},nt=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:s,arbeidsgiverFødselsdato:i,ikkeVisInfo:l})=>a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),!l&&i&&a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),a.jsx(ke,{children:a.jsx(Ie,{dateString:i})})]}),!l&&!i&&a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),a.jsx(ke,{children:r.arbeidsgiverIdent})]}),a.jsx(q,{eightPx:!0}),t&&a.jsxs(a.Fragment,{children:[a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),a.jsx(I,{size:"small",children:r.eksternArbeidsforholdId})]}),a.jsx(q,{eightPx:!0})]}),n&&a.jsxs(a.Fragment,{children:[a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),a.jsx(I,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:Qr(s,un.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),a.jsx(q,{eightPx:!0})]}),a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),a.jsx(I,{size:"small",children:G(r.inntektPrMnd)})]}),a.jsx(q,{eightPx:!0}),a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),a.jsx(I,{size:"small",children:a.jsx(k,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),a.jsx(q,{eightPx:!0}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&a.jsxs(a.Fragment,{children:[a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),a.jsx(I,{size:"small",children:G(r.refusjonPrMnd)})]}),a.jsx(q,{eightPx:!0})]}),a.jsxs(dt,{href:el(e,r.journalpostId,r.dokumentId),target:"_blank",children:[a.jsx("span",{children:a.jsx(I,{size:"small",className:Vs.inline,children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),a.jsx(Hu,{className:Vs.docIcon})]}),a.jsx(q,{sixteenPx:!0}),a.jsxs(z,{gap:"4",children:[a.jsx(Cu,{className:Vs.phoneIcon}),a.jsx("div",{children:a.jsxs(ne,{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),a.jsx(ke,{children:r.kontaktpersonNavn}),a.jsx(ke,{children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})})]}),a.jsx(q,{thirtyTwoPx:!0})]});nt.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!1,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const Ay="_inline_10adz_1",Iy="_aksjonpunktImage_10adz_5",Ty="_arrow_10adz_12",Ry="_ikkeMottatt_10adz_18",Ey="_skiller_10adz_30",Yn={inline:Ay,aksjonpunktImage:Iy,arrow:Ty,ikkeMottatt:Ry,skiller:Ey},Ny=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),qy=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(s=>!s.internArbeidsforholdId||s.internArbeidsforholdId===n)},Sy=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,s)=>e.slice(s*25,s*25+25)).join("-")},gl=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:s})=>{const i=W(),[l,o]=h.useState({}),g=n.length===1,m=g?qy(r,n[0].internArbeidsforholdId):void 0;return a.jsxs(a.Fragment,{children:[s&&a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),a.jsx(ke,{children:a.jsx(Ie,{dateString:s})})]}),!s&&n.length>0&&a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),a.jsx(ke,{children:n[0].arbeidsgiverIdent})]}),!g&&a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),a.jsx(ed,{dividerParagraf:!0,className:Yn.skiller}),a.jsx(q,{sixteenPx:!0}),n.map(p=>{const y=r.find(b=>Ny(p,b));return a.jsxs(Y.Fragment,{children:[a.jsxs(ne,{gap:"2",children:[a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),a.jsxs("div",{children:[p.eksternArbeidsforholdId&&p.eksternArbeidsforholdId.length<50&&a.jsx("div",{children:a.jsx(I,{size:"small",children:p.eksternArbeidsforholdId})}),p.eksternArbeidsforholdId&&p.eksternArbeidsforholdId.length>=50&&a.jsx(Gu,{content:Sy(p.eksternArbeidsforholdId),children:a.jsx(I,{size:"small",children:`${p.eksternArbeidsforholdId.substring(0,50)}...`})}),!p.eksternArbeidsforholdId&&a.jsx(I,{size:"small",children:"-"})]}),y&&a.jsxs(a.Fragment,{children:[a.jsx(cr,{}),a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!y&&a.jsxs(a.Fragment,{children:[a.jsx(cr,{}),a.jsxs("div",{children:[a.jsx(xr,{className:Yn.aksjonpunktImage,title:i.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),a.jsx("div",{className:Yn.ikkeMottatt,children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:p.fom,dateStringTom:p.tom!==Be?p.tom:void 0})}),y&&a.jsxs(a.Fragment,{children:[a.jsx(cr,{}),a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:y.motattDato})})]})]}),a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),a.jsx(I,{size:"small",children:`${p.stillingsprosent}%`})]}),p.permisjonOgMangel&&a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:Qr(t,un.PERMISJONSBESKRIVELSE_TYPE,p.permisjonOgMangel.type)}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:p.permisjonOgMangel.permisjonFom,dateStringTom:p.permisjonOgMangel.permisjonTom})})]}),y&&a.jsxs(a.Fragment,{children:[p.internArbeidsforholdId&&l[p.internArbeidsforholdId]&&a.jsx(nt,{saksnummer:e,inntektsmelding:y,skalViseArbeidsforholdId:!1}),a.jsx(q,{fourPx:!0}),a.jsxs(dt,{onClick:b=>{b.preventDefault(),o(f=>{if(!p.internArbeidsforholdId)return f;const c=f[p.internArbeidsforholdId];return{...f,[p.internArbeidsforholdId]:c===void 0||c===!1}})},href:"",children:[a.jsx("span",{children:a.jsx(I,{size:"small",className:Yn.inline,children:a.jsx(k,{id:!p.internArbeidsforholdId||!l[p.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),p.internArbeidsforholdId&&l[p.internArbeidsforholdId]?a.jsx(Ci,{className:Yn.arrow}):a.jsx(ms,{className:Yn.arrow})]})]})]}),a.jsx(q,{sixteenPx:!0}),a.jsx(ed,{dividerParagraf:!0,className:Yn.skiller}),a.jsx(q,{sixteenPx:!0})]},`${p.arbeidsgiverIdent}${p.internArbeidsforholdId}`)})]}),a.jsx(q,{eightPx:!0}),g&&!!m&&a.jsx(nt,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:m,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),g&&r.length===0&&a.jsxs(a.Fragment,{children:[a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),a.jsx(I,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),a.jsxs(z,{gap:"4",children:[a.jsx(B,{size:"small",children:Qr(t,un.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})]})};gl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},inntektsmeldingerForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Py="_bredde_gb3eb_1",xy="_inline_gb3eb_9",Fy="_arrow_gb3eb_13",Dt={bredde:Py,inline:xy,arrow:Fy},By=[],_y=(e,n)=>{const t=A(e).subtract(1,"month").startOf("month"),s=t.subtract(12,"month"),i=[];for(let l=t;l.isAfter(s);l=l.subtract(1,"month")){const o=l.format(Fe),g=n.find(m=>A(m.fom).startOf("month").format(Fe)===o);i.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return i},ul=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:s=By,alleKodeverk:i,arbeidsgiverFødselsdato:l})=>{const[o,g]=h.useState(!1),m=h.useMemo(()=>_y(n,r),[r]),p=t.length===1,y=r.length>0&&r.some(b=>b.beløp>0);return a.jsxs(a.Fragment,{children:[a.jsx(gl,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:s,alleKodeverk:i,arbeidsgiverFødselsdato:l}),a.jsx(q,{thirtyTwoPx:!0}),y&&a.jsxs(a.Fragment,{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:p?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),a.jsx(q,{fourPx:!0}),a.jsx(ne,{children:m.filter((b,f)=>o?!0:f<3).map(b=>a.jsxs(z,{gap:"2",className:Dt.bredde,children:[a.jsx(I,{size:"small",children:a.jsx(k,{id:`ArbeidsforholdInformasjonPanel.${A(b.fom).month()+1}`})}),a.jsx(I,{size:"small",children:A(b.fom).year()}),a.jsx(cr,{}),a.jsx(I,{size:"small",children:G(b.beløp)})]},b.fom))}),a.jsx(q,{fourPx:!0}),a.jsxs(dt,{onClick:b=>{b.preventDefault(),g(!o)},href:"",children:[a.jsx("span",{children:a.jsx(I,{size:"small",className:Dt.inline,children:a.jsx(k,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?a.jsx(Ci,{className:Dt.arrow}):a.jsx(ms,{className:Dt.arrow})]})]}),!y&&a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})}),a.jsx(q,{thirtyTwoPx:!0})]})};ul.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:"",defaultValue:{value:"[]",computed:!1}},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},inntektsmeldingerForRad:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:"",defaultValue:{value:"[]",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Oy="_hjelpetekst_1kk6h_1",Dy="_alertStripe_1kk6h_5",wy="_hjelpetekstInnhold_1kk6h_9",Vy="_svg_1kk6h_14",wt={hjelpetekst:Oy,alertStripe:Dy,hjelpetekstInnhold:wy,svg:Vy},My=cn(3),Gy=jn(1500),Ly=_u(1),Ky=Ou(100),$y=e=>n=>{const r=e("fom");return r&&n?vs(r)(n):null},Uy=(e,n,r,t)=>()=>{e(s=>s.map(i=>{if(r.arbeidsgiverIdent===i.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return i}))},Wu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:s,radData:i,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:g,lukkArbeidsforholdRad:m,oppdaterTabell:p,skalViseArbeidsforholdId:y,arbeidsgiverFødselsdato:b})=>{const f=W(),c=h.useMemo(()=>{var _,H,C,O,L;return{saksbehandlersVurdering:(_=i.avklaring)==null?void 0:_.saksbehandlersVurdering,begrunnelse:(H=i.avklaring)==null?void 0:H.begrunnelse,fom:(C=i.avklaring)==null?void 0:C.fom,tom:(O=i.avklaring)==null?void 0:O.tom,stillingsprosent:(L=i.avklaring)==null?void 0:L.stillingsprosent}},[i]),E=ze({defaultValues:c});ol(E.formState.isDirty);const j=E.watch("saksbehandlersVurdering"),R=()=>{m(),E.reset(c)},T=_=>{const H=Uy(p,i,s,_);return _.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:s.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:s.arbeidsgiverIdent,vurdering:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:_.begrunnelse,fom:_.fom,tom:_.tom,stillingsprosent:_.stillingsprosent}).then(H).finally(()=>E.reset(_)):g({behandlingUuid:n,behandlingVersjon:r,vurdering:_.saksbehandlersVurdering,begrunnelse:_.begrunnelse,arbeidsgiverIdent:s.arbeidsgiverIdent,internArbeidsforholdRef:s.internArbeidsforholdId}).then(H).finally(()=>E.reset(_))},N=h.useRef(null),[S,F]=h.useState(!1),V=h.useCallback(()=>F(_=>!_),[]);return a.jsxs(a.Fragment,{children:[a.jsx(nt,{saksnummer:e,inntektsmelding:s,skalViseArbeidsforholdId:y,arbeidsgiverFødselsdato:b}),a.jsx(q,{fourtyPx:!0}),a.jsx("div",{className:wt.alertStripe,children:a.jsx(Ne,{variant:"info",children:a.jsx(k,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),a.jsx(q,{thirtyTwoPx:!0}),a.jsxs(Je,{formMethods:E,onSubmit:T,children:[a.jsx(qe,{name:"saksbehandlersVurdering",label:a.jsxs(z,{gap:"2",children:[a.jsx(k,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),a.jsx(nl,{className:wt.svg,ref:N,onClick:V,title:f.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),a.jsx(Ir,{open:S,onClose:V,anchorEl:N.current,className:wt.hjelpetekst,children:a.jsx(Ir.Content,{className:wt.hjelpetekstInnhold,children:a.jsx(I,{children:a.jsx(k,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[Z],isReadOnly:l,radios:[{label:f.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:f.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:f.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),j===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),a.jsxs(z,{gap:"4",children:[a.jsx(er,{name:"fom",label:a.jsx(k,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[Z,Tn],isReadOnly:l}),a.jsx(er,{name:"tom",label:a.jsx(k,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[Tn,$y(E.getValues)],isReadOnly:l}),a.jsx(je,{name:"stillingsprosent",label:a.jsx(k,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:_=>{const H=parseInt(_.toString(),10);return Number.isNaN(H)?_:H},validate:[Z,Bu,Ly,Ky],readOnly:l,maxLength:3})]}),a.jsx(q,{fourPx:!0})]}),a.jsx(q,{sixteenPx:!0}),a.jsx(rn,{label:a.jsx(k,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[Z,My,Gy,hn],maxLength:1500,readOnly:l}),a.jsx(q,{twentyPx:!0}),!l&&a.jsxs(z,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:E.formState.isSubmitting,disabled:!E.formState.isDirty||E.formState.isSubmitting,children:a.jsx(k,{id:"ManglendeOpplysningerForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:E.formState.isSubmitting,onClick:R,type:"button",children:a.jsx(k,{id:"ManglendeOpplysningerForm.Avbryt"})})]}),a.jsx(q,{fourtyPx:!0})]})]})};Wu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},radData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Yy="_alertStripe_9hpes_1",Hy="_hjelpetekst_9hpes_5",Cy="_hjelpetekstInnhold_9hpes_9",zy="_svg_9hpes_14",Vt={alertStripe:Yy,hjelpetekst:Hy,hjelpetekstInnhold:Cy,svg:zy},Jy=cn(3),Wy=jn(1500),Xy=(e,n,r)=>()=>{e(t=>t.map(s=>s.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:s))},Xu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:s=[],arbeidsforholdForRad:i,inntektsmeldingerForRad:l,radData:o,isReadOnly:g,lagreVurdering:m,lukkArbeidsforholdRad:p,oppdaterTabell:y,alleKodeverk:b,arbeidsgiverFødselsdato:f})=>{const c=W(),E=h.useMemo(()=>{var C,O;return{saksbehandlersVurdering:(C=o.avklaring)==null?void 0:C.saksbehandlersVurdering,begrunnelse:(O=o.avklaring)==null?void 0:O.begrunnelse}},[o]),j=ze({defaultValues:E});ol(j.formState.isDirty);const R=i.length===1,T=()=>{p(),j.reset(E)},N=C=>{const O={behandlingUuid:n,behandlingVersjon:r,vurdering:C.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:R?i[0].internArbeidsforholdId:void 0,begrunnelse:C.begrunnelse};return m(O).then(Xy(y,o,C)).finally(()=>j.reset(C))},S=h.useRef(null),[F,V]=h.useState(!1),_=h.useCallback(()=>V(C=>!C),[]),H=[{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:le.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&H.splice(1,0,{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:le.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),a.jsxs(a.Fragment,{children:[a.jsx(ul,{saksnummer:e,skjæringspunktDato:t,inntektsposter:s,arbeidsforholdForRad:i,inntektsmeldingerForRad:l,alleKodeverk:b,arbeidsgiverFødselsdato:f}),a.jsxs(Je,{formMethods:j,onSubmit:N,children:[!R&&l.length>0&&a.jsxs("div",{className:Vt.alertStripe,children:[a.jsx(Ne,{variant:"info",children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})}),a.jsx(q,{sixteenPx:!0})]}),a.jsx(qe,{name:"saksbehandlersVurdering",label:a.jsxs(z,{gap:"2",children:[a.jsx(k,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),a.jsx(nl,{ref:S,onClick:_,className:Vt.svg,title:c.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),a.jsx(Ir,{open:F,onClose:_,anchorEl:S.current,className:Vt.hjelpetekst,children:a.jsxs(Ir.Content,{className:Vt.hjelpetekstInnhold,children:[a.jsx(I,{children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),a.jsx(q,{eightPx:!0}),a.jsx(I,{children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),a.jsx(q,{eightPx:!0}),a.jsx(I,{children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})]}),validate:[Z],isReadOnly:g,radios:H}),a.jsx(q,{sixteenPx:!0}),a.jsx(rn,{label:a.jsx(k,{id:R?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[Z,Jy,Wy,hn],maxLength:1500,readOnly:g}),a.jsx(q,{twentyPx:!0}),!g&&a.jsxs(z,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:j.formState.isSubmitting,disabled:!j.formState.isDirty||j.formState.isSubmitting,children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:j.formState.isSubmitting,onClick:T,type:"button",children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]}),a.jsx(q,{fourtyPx:!0})]})]})};Xu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:"",defaultValue:{value:"[]",computed:!1}},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},inntektsmeldingerForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},radData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Tr="342352362",Zy=cn(3),Qy=jn(1500),ef=_u(1),nf=Ou(100),rf=e=>n=>{const r=e("fom");return n&&r?vs(r)(n):null},tf=e=>n=>{const r={arbeidsgiverIdent:Tr,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(s=>s.arbeidsgiverIdent===Tr);return t===-1?n.concat(r):n.map((s,i)=>i===t?r:s)},sf=(e,n,r)=>()=>{e(t=>t.filter(s=>s.arbeidsgiverIdent!==Tr)),r&&n()},kl=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:s,lukkArbeidsforholdRad:i,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:g=!1})=>{const m=W(),[p,y]=h.useState(!1),b=h.useMemo(()=>{var R,T,N,S,F;return{fom:(R=s==null?void 0:s.avklaring)==null?void 0:R.fom,tom:(T=s==null?void 0:s.avklaring)==null?void 0:T.tom,stillingsprosent:(N=s==null?void 0:s.avklaring)==null?void 0:N.stillingsprosent,begrunnelse:(S=s==null?void 0:s.avklaring)==null?void 0:S.begrunnelse,arbeidsgiverNavn:(F=s==null?void 0:s.avklaring)==null?void 0:F.arbeidsgiverNavn}},[s]),f=ze({defaultValues:b});ol(f.formState.isDirty);const c=()=>{i(),f.reset(b)},E=R=>{const T={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:Tr,vurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...R};return t(T).then(()=>{o(tf(R)),f.reset(R),g&&i()})},j=()=>{const R=f.getValues(),T={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:Tr,vurdering:le.FJERN_FRA_BEHANDLINGEN,...R};t(T).then(sf(o,i,g))};return a.jsxs(a.Fragment,{children:[!s&&a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),a.jsx(q,{sixteenPx:!0})]}),a.jsx(q,{eightPx:!0}),a.jsxs(Je,{formMethods:f,onSubmit:E,children:[a.jsxs(z,{gap:"4",children:[l&&a.jsxs(a.Fragment,{children:[a.jsx(je,{name:"arbeidsgiverNavn",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[Z],readOnly:r||!l}),a.jsx(er,{name:"fom",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[Z,Tn],isReadOnly:r||!l}),a.jsx(er,{name:"tom",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[Tn,rf(f.getValues)],isReadOnly:r||!l})]}),a.jsx(je,{name:"stillingsprosent",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:R=>{const T=parseInt(R.toString(),10);return Number.isNaN(T)?R:T},validate:[Z,Bu,ef,nf],readOnly:r||!l,maxLength:3})]}),a.jsx(q,{twentyPx:!0}),a.jsx(rn,{label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[Z,Zy,Qy,hn],maxLength:1500,readOnly:r||!l}),a.jsx(q,{twentyPx:!0}),l&&a.jsxs(z,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:f.formState.isSubmitting,disabled:!f.formState.isDirty||f.formState.isSubmitting,children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:f.formState.isSubmitting,onClick:c,type:"button",children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&a.jsxs(a.Fragment,{children:[a.jsx(cr,{}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:f.formState.isSubmitting,onClick:()=>y(!0),type:"button",icon:a.jsx(gy,{"aria-hidden":!0}),children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]}),a.jsx(q,{fourtyPx:!0})]}),p&&a.jsx(dv,{text:m.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:j,cancel:()=>y(!1),showModal:!0})]})};kl.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},radData:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const af="_ikon_1mrt8_1",lf="_colTopPadding_1mrt8_5",df="_imageColTopPadding_1mrt8_9",of="_exclamationmarkIcon_1mrt8_13",gf="_checkmarkIcon_1mrt8_20",zn={ikon:af,colTopPadding:lf,imageColTopPadding:df,exclamationmarkIcon:of,checkmarkIcon:gf},uf=Vu.bind(zn),kf=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",mf=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,s)=>({fom:t.fom&&A(t.fom).isBefore(s.fom)?t.fom:s.fom,tom:t.tom&&A(t.tom).isAfter(s.tom)?t.tom:s.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},pf=(e,n)=>{const r=e.some(i=>i.internArbeidsforholdId),t=e.some(i=>!i.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const s=e.find(i=>!i.internArbeidsforholdId||!n||i.internArbeidsforholdId===n);if(!s)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return s},Zu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:s,isReadOnly:i,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:g,lagreVurdering:m,toggleÅpenRad:p,erRadÅpen:y,alleKodeverk:b})=>{var re,J;const f=W(),{arbeidsgiverNavn:c,arbeidsgiverIdent:E,årsak:j,avklaring:R,arbeidsgiverFødselsdato:T}=s,N=h.useMemo(()=>t.arbeidsforhold.filter(ie=>ie.arbeidsgiverIdent===E),[t,E]),S=h.useMemo(()=>t.inntektsmeldinger.filter(ie=>ie.arbeidsgiverIdent===E),[t,E]),F=(R==null?void 0:R.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,V=N.length>0&&S.length>0&&!j,_=j===et.MANGLENDE_INNTEKTSMELDING,H=j===et.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,C=!!j&&!(R!=null&&R.saksbehandlersVurdering),O=N.length>0&&S.length===0&&!j&&!F,L=N.length===0&&S.length>0&&!j,M=h.useMemo(()=>mf(N,s.avklaring),[F,N,s.avklaring]),U=(re=t.inntekter.find(ie=>ie.arbeidsgiverIdent===E))==null?void 0:re.inntekter;return a.jsxs(ov,{alignWithColumn:1,content:a.jsxs(a.Fragment,{children:[F&&a.jsx(kl,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:g,radData:s,lukkArbeidsforholdRad:p,erOverstyrt:l,oppdaterTabell:o}),V&&a.jsx(gl,{saksnummer:e,arbeidsforholdForRad:N,inntektsmeldingerForRad:S,alleKodeverk:b,arbeidsgiverFødselsdato:T}),L&&a.jsx(nt,{saksnummer:e,arbeidsforhold:N.length>0?N[0]:void 0,inntektsmelding:pf(S,N.length>0?(J=N[0])==null?void 0:J.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:b,arbeidsgiverFødselsdato:T}),_&&a.jsx(Xu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,isReadOnly:i,arbeidsforholdForRad:N,inntektsmeldingerForRad:S,radData:s,lagreVurdering:m,lukkArbeidsforholdRad:p,oppdaterTabell:o,alleKodeverk:b,arbeidsgiverFødselsdato:T}),H&&a.jsx(Wu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:c,inntektsmelding:S[0],radData:s,isReadOnly:i,registrerArbeidsforhold:g,lagreVurdering:m,lukkArbeidsforholdRad:p,oppdaterTabell:o,skalViseArbeidsforholdId:S.length>1}),O&&a.jsx(ul,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,arbeidsforholdForRad:N,alleKodeverk:b,arbeidsgiverFødselsdato:T})]}),showContent:y,toggleContent:p,isApLeftBorder:C,children:[a.jsxs(ve,{className:uf("ikon",y?"imageColTopPadding":void 0),children:[!C&&a.jsx(zi,{title:f.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:zn.checkmarkIcon}),C&&a.jsx(xr,{title:f.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:zn.exclamationmarkIcon})]}),a.jsxs(ve,{className:y?zn.colTopPadding:void 0,children:[y&&a.jsx(B,{size:"small",children:c}),!y&&a.jsx(I,{size:"small",children:c})]}),a.jsx(ve,{className:y?zn.colTopPadding:void 0,children:a.jsxs(I,{children:[(M==null?void 0:M.fom)&&a.jsx(Ye,{dateStringFom:M.fom,dateStringTom:M.tom!==Be?M.tom:void 0}),!M&&"-"]})}),a.jsx(ve,{className:y?zn.colTopPadding:void 0,children:a.jsx(I,{children:a.jsx(k,{id:kf(F,N.length>0)})})}),a.jsx(ve,{className:y?zn.colTopPadding:void 0,children:a.jsxs(I,{children:[N.length<2&&S.length===1&&a.jsx(Ie,{dateString:S[0].motattDato}),!_&&N.length>1&&S.length===N.length&&a.jsx(k,{id:"ArbeidsforholdRad.Mottatt"}),(F||_&&S.length<N.length)&&a.jsx(k,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};Zu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},radData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},erOverstyrt:{required:!0,tsType:{name:"boolean"},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleÅpenRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erRadÅpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const vf="_alertStripe_2poz8_5",yf={alertStripe:vf},ff=(e,n)=>{const r=e.some(l=>l.årsak===et.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===et.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=(n==null?void 0:n.status)===nr.OPPRETTET,i=[];return s&&r&&i.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&t&&i.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),i},Qu=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:s,erOverstyrer:i,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:g,oppdaterTabell:m})=>{const p=W(),{arbeidsforhold:y,inntektsmeldinger:b}=t,[f,c]=h.useState(!1),[E,j]=h.useState(!1),R=h.useCallback(()=>{g(!0),c(!0);const F=l.findIndex(V=>{var _;return((_=V.avklaring)==null?void 0:_.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});F!==-1&&o([F])},[l,o]),T=h.useMemo(()=>ff(l,n),[e.versjon]),N=l.every(F=>F.arbeidsgiverIdent!==Tr),S=(n==null?void 0:n.status)===nr.OPPRETTET;return a.jsxs(a.Fragment,{children:[a.jsxs(z,{gap:"4",children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),i&&S&&!r&&a.jsx(Ji,{onClick:R}),a.jsx(cr,{}),a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Me(t.skjæringstidspunkt)}})})]}),a.jsx(q,{thirtyTwoPx:!0}),T.length>0&&a.jsx(ir,{children:T.map(F=>p.formatMessage({id:F})).join(" ")}),y.length===0&&b.length===0&&i&&a.jsx("div",{className:yf.alertStripe,children:a.jsx(Ne,{variant:"info",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),a.jsx(q,{sixteenPx:!0}),f&&N&&!E&&a.jsxs(a.Fragment,{children:[a.jsx(q,{twentyPx:!0}),a.jsx(ae,{size:"small",variant:"tertiary",icon:a.jsx(Zi,{"aria-hidden":!0}),onClick:()=>j(!0),children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})}),a.jsx(q,{thirtyTwoPx:!0})]}),a.jsx(q,{thirtyTwoPx:!0}),E&&a.jsxs(a.Fragment,{children:[a.jsx(kl,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>j(!1),oppdaterTabell:m,erOverstyrt:!0,erNyttArbeidsforhold:!0}),a.jsx(q,{fourtyPx:!0})]})]})};Qu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},tabellData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"},description:""},settÅpneRadIndexer:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<number[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<number[]>",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}]}]},description:""},setErOverstyrt:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"},name:"rader"}],return:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  årsak?: string;
  avklaring?: Avklaring;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"arbeidsgiverFødselsdato",value:{name:"string",required:!1}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const bf="_alertStripe_z95u6_1",cf={alertStripe:bf},jf=["EMPTY1","ArbeidOgInntektFaktaPanel.Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode","ArbeidOgInntektFaktaPanel.Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt","EMPTY2"],hf=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},td=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,Af=(e,n)=>{const r={saksbehandlersVurdering:e.saksbehandlersVurdering,begrunnelse:e.begrunnelse};return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{...r,arbeidsgiverNavn:n,fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent}:r},If=e=>e.årsak?-1:1,Tf=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,s=[...r.sort(If)].reduce((l,o)=>{var b;if(l.find(f=>f.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const m=n[o.arbeidsgiverIdent],p=m.navn,y=o.årsak?o.årsak:(b=t.find(f=>td(o,f)))==null?void 0:b.årsak;return l.concat({arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:p,arbeidsgiverFødselsdato:m.erPrivatPerson?m.fødselsdato:void 0,årsak:y,avklaring:o.saksbehandlersVurdering?Af(o,p):void 0})},[]),i=t.filter(l=>!r.some(o=>td(o,l))).map(l=>{var o,g;return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:n[l.arbeidsgiverIdent].navn,arbeidsgiverFødselsdato:(o=n[l.arbeidsgiverIdent])!=null&&o.erPrivatPerson?(g=n[l.arbeidsgiverIdent])==null?void 0:g.fødselsdato:void 0,årsak:l.årsak,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse}:void 0}});return s.concat(i).sort(hf)},sd=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},ek=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})=>{const[o,g]=h.useState(!1),[m,p]=h.useState(!1),[y,b]=h.useState(!1),{alleKodeverk:f,submitCallback:c,aksjonspunkterForPanel:E,behandling:j,fagsak:R,isReadOnly:T}=Nn(),N=E.length>0?E[0]:void 0,{formData:S,setFormData:F}=Kn(),[V,_]=h.useState(S||Tf(e,n)),[H,C]=h.useState(sd(V)),O=by();h.useEffect(()=>()=>{F(V)},[V]);const L=he=>{H.some(Oe=>Oe===he)?C(H.filter(Oe=>Oe!==he)):C(H.concat(he))},M=h.useRef(null),U=he=>{var Oe;_(he),C(sd(he(V))),(Oe=M==null?void 0:M.current)==null||Oe.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},re=()=>{g(!0),c({kode:de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},J=()=>{g(!0),l()},ie=he=>{g(!0),p(!1);const{frist:Oe,ventearsak:Dr}=he;Dr&&i({frist:Oe,ventearsak:Dr})},Ee=V.some(he=>{var Oe,Dr,Ql;return((Oe=he.avklaring)==null?void 0:Oe.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Dr=he.avklaring)==null?void 0:Dr.saksbehandlersVurdering)===le.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((Ql=he.avklaring)==null?void 0:Ql.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),_e=V.every(he=>!he.årsak||he.årsak&&he.avklaring),We=N===void 0,Xe=(N==null?void 0:N.status)===nr.UTFORT,X=(N==null?void 0:N.status)===nr.OPPRETTET,me=!T&&(Xe||s&&We),Re=!T&&X&&_e&&!O&&Ee,on=!T&&X&&_e&&!O&&!Ee;return a.jsxs(a.Fragment,{children:[a.jsx(Qu,{behandling:j,aksjonspunkt:N,readOnly:T,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:s,tabellData:V,settÅpneRadIndexer:C,setErOverstyrt:b,oppdaterTabell:U}),a.jsx(it,{ref:M,headerTextCodes:jf,noHover:!0,hasGrayHeader:!0,children:V.map((he,Oe)=>a.jsx(Zu,{arbeidOgInntekt:e,saksnummer:R.saksnummer,behandlingUuid:j.uuid,behandlingVersjon:j.versjon,radData:he,isReadOnly:T||Xe||We,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>L(Oe),erOverstyrt:y,oppdaterTabell:U,erRadÅpen:H.includes(Oe),alleKodeverk:f},`${he.arbeidsgiverNavn}${he.arbeidsgiverIdent}${Oe}`))}),a.jsx(q,{sixteenPx:!0}),Re&&a.jsxs(a.Fragment,{children:[a.jsx(ae,{size:"small",variant:"primary",disabled:o,onClick:()=>p(!0),type:"button",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),a.jsx(Av,{submitCallback:ie,cancelEvent:()=>p(!1),defaultVenteårsak:hv.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:f[un.VENT_AARSAK],erTilbakekreving:!1,showModal:m})]}),on&&a.jsx(ae,{size:"small",variant:"primary",disabled:o,loading:o,onClick:re,type:"button",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})}),me&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:cf.alertStripe,children:a.jsx(Ne,{variant:"info",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),a.jsx(q,{sixteenPx:!0}),a.jsx(ae,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:J,type:"button",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})]})]})};ek.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Rf={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad"},Ef=$e(Rf),nk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})=>a.jsx(Le,{value:Ef,children:a.jsx(Ju,{children:a.jsx(ek,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})})});nk.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Nf=[de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],qf=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),{behandling:t,hentOgSettBehandling:s,rettigheter:i}=h.use(xn),l=dr(Nf),o=Pn(t),{data:g}=Sn(o.arbeidOgInntektOptions(t)),{mutate:m}=Ot({mutationFn:f=>o.settBehandlingPåVent({frist:f.frist??"",ventearsak:f.ventearsak,behandlingUuid:t.uuid,behandlingVersjon:t.versjon}),onSuccess:()=>s()}),{mutateAsync:p}=Ot({mutationFn:f=>o.registrerArbeidsforholdForAOI(f)}),{mutateAsync:y}=Ot({mutationFn:f=>o.lagreVurderingForAOI(f)}),{mutate:b}=Ot({mutationFn:()=>o.åpneForNyVurderingAOI({behandlingUuid:t.uuid,behandlingVersjon:t.versjon}),onSuccess:()=>s()});return a.jsx(or,{...n,standardPanelProps:l,faktaPanelKode:lr.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:Ku(t,"ARBEID_OG_INNTEKT")&&!js(de.AVKLAR_ARBEIDSFORHOLD,t.aksjonspunkt),children:g?a.jsx(nk,{arbeidOgInntekt:g,arbeidsgiverOpplysningerPerId:e,erOverstyrer:i.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:p,lagreVurdering:y,settBehandlingPåVentCallback:m,åpneForNyVurdering:b}):a.jsx(qn,{})})};qf.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Ai=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Ai||{});const rk=({arbeidsforhold:e})=>e.permisjonOgMangel?a.jsxs(a.Fragment,{children:[a.jsx(q,{sixteenPx:!0}),a.jsx(B,{size:"small",children:a.jsx(k,{id:"PermisjonPeriode.Permisjon"})}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})}),a.jsx(q,{sixteenPx:!0})]}):null;rk.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`},description:""}}};const Sf=e=>e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,Pf=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt",tk=({valgtArbeidsforhold:e})=>{var p,y;const n=e.saksbehandlersVurdering===le.BRUK,r=e.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE,s=e.saksbehandlersVurdering===le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,i=e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((p=e.permisjonOgMangel)==null?void 0:p.permisjonStatus)===Ai.BRUK_PERMISJON,g=((y=e.permisjonOgMangel)==null?void 0:y.permisjonStatus)===Ai.IKKE_BRUK_PERMISJON,m=Sf(e);return a.jsxs(a.Fragment,{children:[a.jsx(q,{thirtyTwoPx:!0}),a.jsxs(Pu,{children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.Header"})}),a.jsx(rk,{arbeidsforhold:e}),t&&a.jsxs(a.Fragment,{children:[a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),a.jsxs(I,{size:"small",children:[m&&a.jsx(Ie,{dateString:m}),!m&&"-"]})]}),n&&o&&a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),i&&a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||g))&&a.jsxs(a.Fragment,{children:[a.jsx(I,{size:"small",children:a.jsx(k,{id:Pf(e)})}),a.jsx(q,{sixteenPx:!0}),r&&a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&a.jsx(I,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),s&&a.jsx(I,{size:"small",children:a.jsx(k,{id:s?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),a.jsx(q,{sixteenPx:!0}),a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.Begrunnelse"})}),a.jsx(I,{size:"small",children:e.begrunnelse})]})]})};tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`},description:""}}};const sk=({headerColumnContent:e})=>a.jsx(it,{headerColumnContent:e,noHover:!0,children:a.jsxs(ps,{children:[a.jsx(ve,{children:a.jsx(I,{size:"small",children:a.jsx(k,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})}),a.jsx(ve,{}),a.jsx(ve,{}),a.jsx(ve,{}),a.jsx(ve,{}),a.jsx(ve,{})]})});sk.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert",props:{headerColumnContent:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement"}],raw:"React.ReactElement[]"},description:""}}};const xf="_image_awjuc_1",Ff={image:xf},ad=[a.jsx(k,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:a.jsx("br",{})}},1),a.jsx(k,{id:"PersonArbeidsforholdTable.Periode",values:{br:a.jsx("br",{})}},2),a.jsx(k,{id:"PersonArbeidsforholdTable.Kilde",values:{br:a.jsx("br",{})}},3),a.jsx(k,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:a.jsx("br",{})}},4),a.jsx(k,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:a.jsx("br",{})}},5),a.jsx("div",{},6)],Bf=(e,n)=>e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),ns=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),_f=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Of=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],s=t==null?void 0:t.navn;return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?s:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${s}(${t.identifikator})${_f(e.eksternArbeidsforholdId)}`:`${s}(${t.identifikator})`},Df=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`},ak=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:s})=>{const i=W();return e.length===0?a.jsx(sk,{headerColumnContent:ad}):a.jsx(it,{headerColumnContent:ad,children:e==null?void 0:e.map(l=>{var p;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",g=Of(l,e,t),m=(p=s.find(y=>ns(l,y)))==null?void 0:p.motattDato;return a.jsxs(ps,{model:l,onMouseDown:r,onKeyDown:r,isSelected:l.arbeidsgiverIdent===n,children:[a.jsx(ve,{children:a.jsx(I,{size:"small",children:Wi(g)})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:l.fom,dateStringTom:l.tom!==Be?l.tom:void 0})})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:Bf(l,i)})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:o})}),a.jsx(ve,{children:m&&a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:m})})}),a.jsx(ve,{children:(l.saksbehandlersVurdering===le.BRUK||l.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING)&&a.jsx(Nv,{className:Ff.image,title:i.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},Df(l,t))})})};ak.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},selectArbeidsforholdCallback:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: React.MouseEvent | React.KeyboardEvent,
  id?: void,
  model?: AoIArbeidsforhold,
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}]},name:"event"},{type:{name:"void"},name:"id"},{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`},name:"model"}],return:{name:"void"}}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""}}};const id=(e,n)=>n.some(r=>ns(e,r)),wf=(e,n)=>(r,t)=>{var g,m;const s=e[r.arbeidsgiverIdent],i=e[t.arbeidsgiverIdent];if(s&&i){const p=s.navn.localeCompare(i.navn);if(p!==0)return p}const l=id(r,n),o=id(t,n);if(l&&o){const p=(g=n.find(b=>ns(r,b)))==null?void 0:g.motattDato,y=(m=n.find(b=>ns(t,b)))==null?void 0:m.motattDato;return br(y,Fe).diff(br(p,Fe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)},ik=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=h.useState(),s=h.useCallback((g,m,p)=>{const y=!!(p!=null&&p.saksbehandlersVurdering);t(y?p:void 0)},[t]),{arbeidsforhold:i,inntektsmeldinger:l}=e,o=h.useMemo(()=>i.slice().sort(wf(n,l)),[n]);return a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),a.jsx(ak,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:s,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&a.jsx(tk,{valgtArbeidsforhold:r})]})};ik.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Vf={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},Mf=$e(Vf),lk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>a.jsx(Le,{value:Mf,children:a.jsx(ik,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})});lk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ld=[de.AVKLAR_ARBEIDSFORHOLD],Gf=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),t=dr(ld),{behandling:s}=h.use(xn),i=Pn(s),{data:l}=Sn(i.arbeidOgInntektOptions(s));return a.jsx(or,{...n,standardPanelProps:t,faktaPanelKode:lr.ARBEIDSFORHOLD,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:ld.some(o=>js(o,s.aksjonspunkt)),children:l?a.jsx(lk,{arbeidOgInntekt:l,arbeidsgiverOpplysningerPerId:e}):a.jsx(qn,{})})};Gf.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

Dette faktapanelet skal alltid vises`,methods:[],displayName:"ArbeidsforholdFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const dk="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn";var Ae=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(Ae||{}),dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},od={exports:{}},Gr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Lf(){if(gd)return Gr;gd=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Gr.Fragment=n,Gr.jsx=r,Gr.jsxs=r,Gr}var ud;function Kf(){return ud||(ud=1,od.exports=Lf()),od.exports}var u=Kf(),kn=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(kn||{}),ot=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(ot||{}),ge=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ge||{});const rt={};rt.BA=ot.BRUKERS_ANDEL;rt.FL=ot.FRILANS;rt.SN=ot.EGEN_NÆRING;var gr=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(gr||{}),ok=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(ok||{});const As=e=>e==="OPPR";var D=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(D||{}),ml=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(ml||{}),Is=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(Is||{});const Ms=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Ln=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${A(e.fødselsdato).format(te)})${Ms(n)}`:`${e.navn}${Ms(n)}`:`${e.navn} (${e.identifikator})${Ms(n)}`,tt="avklarAktiviteterForm",yn="vurderFaktaBeregningForm",Qe=(e,n)=>n.some(r=>r.definisjon===e),$f=e=>e===ok.OPPRETTET,Uf="_begrunnelseTextField_12bwv_1",Yf="_explanationTextarea_12bwv_4",Hf="_explanationTextareaReadOnly_12bwv_7",Gs={begrunnelseTextField:Uf,explanationTextarea:Yf,explanationTextareaReadOnly:Hf},gk={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},kd=$e(gk),Cf=cn(3),uk=4e3,zf=jn(uk),Br=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:s=!1,name:i="begrunnelse"})=>{const l=s?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||kd.formatMessage({id:l});return u.jsx(Le,{value:kd,children:(n||r)&&u.jsx("div",{className:Gs.begrunnelseTextField,children:u.jsx(rn,{name:i,label:o,validate:e?[]:[Z,Cf,zf,hn],className:e?Gs.explanationTextareaReadOnly:Gs.explanationTextarea,maxLength:uk,readOnly:e})})})};Br.buildInitialValues=(e,n="begrunnelse")=>({[n]:Wi(e)});Br.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:pl,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:Jf}=Ae,Wf=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Xf=(e,n,r)=>(e||Wf(pl,n))&&r,kk=e=>e.find(n=>n.definisjon===Jf||n.definisjon===pl),Zf=(e,n)=>Qe(pl,e)||n,Qf=(e,n,r)=>e&&n&&!r,eb=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,md=(e,n)=>e+n.fom.replace(".",""),Ce=e=>{if(e.arbeidsgiverIdent){const n=eb(e,e.arbeidsgiverIdent);return md(n,e)}return md(e.arbeidsforholdType,e)},nb=(e,n)=>e||n,Ht=(e,n,r,t,s)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===gr.AAP?!1:n?nb(t,s):!0,rb=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return s?Ln(s,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[kn.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},tb=(e,n)=>A(e).isSame(A(n))||A(e).isBefore(A(n)),sb=(e,n,r,t)=>Ht(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",ab=(e,n,r,t,s,i)=>({beregningAktivitetNavn:rb(e,i,n),fom:e.fom,tom:e.tom,skalBrukes:sb(e,r,t,s)}),ib=(e,n,r,t)=>{const s=tb(r,t);return n.filter(i=>e.aktiviteterValues&&(e.aktiviteterValues[Ce(i)].skalBrukes==="false"||e.aktiviteterValues[Ce(i)].tom!=null)).map(i=>({oppdragsgiverOrg:i.arbeidsgiverIdent&&i.arbeidsgiverIdent.length===9?i.arbeidsgiverIdent:void 0,arbeidsforholdRef:i.arbeidsforholdId,fom:i.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[Ce(i)].tom!=null?e.aktiviteterValues[Ce(i)].tom:i.tom,opptjeningAktivitetType:i.arbeidsforholdType,arbeidsgiverIdentifikator:i.arbeidsgiverIdent,skalBrukes:s&&e.aktiviteterValues?e.aktiviteterValues[Ce(i)].skalBrukes==="true":!0}))},lb=(e,n,r,t,s,i)=>{const l={};return e&&e.forEach(o=>{l[Ce(o)]=ab(o,n,r,t,s,i)}),l},db="_radios_4fctu_1",ob="_navnKol_4fctu_10",gb="_table_4fctu_15",Cr={radios:db,navnKol:ob,table:gb},ub=(e,n)=>A(e).isSame(A(n))||A(e).isBefore(A(n)),pd=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return s?Ln(s,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[kn.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},kb=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:p})=>{const y=W(),b=ub(o,l),f=c=>{const E=pd(r,m,t),j=`${nd(r.fom)} til ${nd(r.tom||"")}`;return`${c?"Benytt":"Ikke benytt"} ${E} ${j}`};return u.jsxs(P.Row,{children:[u.jsx(P.DataCell,{className:Cr.navnKol,children:u.jsx(I,{size:"small",children:pd(r,m,t)})}),u.jsxs(P.DataCell,{className:Cr.rowalign,children:[!s&&u.jsx(I,{children:u.jsx(Ye,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),s&&u.jsxs("div",{children:[u.jsxs(I,{as:"span",size:"small",children:[u.jsx(Ie,{dateString:r.fom})," -"," "]}),u.jsx(er,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${Ce(r)}.tom`,validate:[Z,Tn,vs(r.fom)],isReadOnly:e,size:"small"})]})]}),u.jsx(P.DataCell,{className:Cr.radios,children:u.jsx(qe,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${Ce(r)}.skalBrukes`,label:y.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[Z],isHorizontal:!0,isReadOnly:e||!Ht(r,s,i,b,g),radios:[{value:"true",label:f(!0)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(P.DataCell,{className:Cr.radios,children:u.jsx(qe,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${Ce(r)}.skalBrukes`,label:y.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[Z],isHorizontal:!0,isReadOnly:e||!Ht(r,s,i,b,g),radios:[{value:"false",label:f(!1)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(P.DataCell,{children:n&&e&&Ht(r,s,i,b,g)&&u.jsx(lt,{})})]},Ce(r))},mb=(e,n,r)=>{const t=Tn(r)?"":A(r).format(te);return e.some(s=>s.arbeidsforholdType&&s.arbeidsforholdType===gr.VENTELØNN_VARTPENGER)?u.jsx(k,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},pb=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],vb=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:p})=>u.jsxs(u.Fragment,{children:[u.jsx(B,{size:"small",children:mb(r,s,l)}),u.jsxs(P,{size:"small",className:Cr.table,children:[u.jsx(P.Header,{children:u.jsxs(P.Row,{children:[pb().map(y=>u.jsx(P.HeaderCell,{scope:"col",children:u.jsx(B,{size:"small",as:"span",children:u.jsx(k,{id:y})})},y)),u.jsx(P.HeaderCell,{})]})}),u.jsx(P.Body,{children:r.map(y=>u.jsx(kb,{aktivitet:y,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:p},`${y.arbeidsgiverIdent}-${y.fom}-${y.tom}`))})]})]}),Ii=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=Ce(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,yb=(e,n)=>{let r=0;for(;r<e.length&&A(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},vd=(e,n,r)=>{const t=e.find(({tom:s})=>s===r);if(t===void 0){const s={tom:r,aktiviteter:[n]},i=yb(e,r);e.splice(i,0,s)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},fb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!A(t.tom).isValid()))},bb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],s=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!s)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:i})=>i).forEach(i=>{if(!i)throw new Error("Må ha aktivitet i form values her!");const l={...i},o=e.aktiviteterValues?e.aktiviteterValues[Ce(i)].tom:void 0;o&&o!==l.tom&&(l.tom=o),A(o).isSame(A(s).subtract(1,"days"))||A(o).isAfter(A(s).subtract(1,"days"))?vd(t,l,s):vd(t,l,A(o).add(1,"days").format("YYYY-MM-DD"))}),t},vl=(e,n,r)=>{const t=n&&!fb(n)?bb(n):e;return r?t:!n||Ii(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},mk=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let s=0;s<t.length;s+=1){const i=e.aktiviteterValues?e.aktiviteterValues[Ce(t[s])]:void 0;if((i==null?void 0:i.skalBrukes)==="true")return n[r].tom}}},cb=e=>!e||Tn(e)?"":A(e).format(te),ur=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:s,harAvklaringsbehov:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:g})=>{const m=vl(t,r,s),p=mk(r,m);return u.jsxs(ne,{gap:"4",children:[u.jsx(I,{size:"small",children:u.jsx(k,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:cb(p)}})}),m.map(y=>u.jsx(vb,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:y.aktiviteter||[],erOverstyrt:s,harAvklaringsbehov:i,kodeverkSamling:l,tomDatoForAktivitetGruppe:y.tom,valgtSkjæringstidspunkt:p,ingenAktiviterErBrukt:p===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:g},y.tom))]})};ur.harIngenAktiviteter=(e,n,r)=>{const t=vl(n,e,r);return Ii(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!Ii(t[1],e):!0};const jb=(e,n)=>A(e).isSame(A(n))||A(e).isBefore(A(n));ur.transformValues=(e,n,r)=>{const t=vl(n,e,r),s=mk(e,t);if(!s)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(i=>ib(e,i.aktiviteter||[],s,i.tom))};const hb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};ur.buildInitialValues=(e,n,r,t,s)=>{if(!e||e.length===0)return{};let i={};const l=hb(e);return e.forEach(o=>{i={...i,...lb(o.aktiviteter||[],n,r,t,jb(l,o.tom),s)}}),i};const Ab="_avsnittOverskrift_h44z2_1",Ib={avsnittOverskrift:Ab},{AVKLAR_AKTIVITETER:Ct,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:pk}=Ae,yl="begrunnelseAvklareAktiviteter",vk="manuellOverstyringBeregningAktiviteter",Tb=(e,n,r,t,s)=>{const i=Qe(Ct,e),l=Qe(pk,e),o=kk(e);let g;return n&&n.aktiviteterTomDatoMapping&&(g=ur.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,i,t)),{[vk]:l,periode:s.periode,erTilVurdering:s.vurderesIBehandlingen&&!s.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:g,...Br.buildInitialValues(o==null?void 0:o.begrunnelse,yl)}},yd=e=>{const n=e[vk],r=Xf(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:ur.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[yl]}:null},Rb=(e,n,r,t,s)=>{if(!(r.length<1)&&ur.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return s.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},Eb=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:i,submittable:l,fieldId:o,updateOverstyring:g,submitDisabled:m})=>{var p,y;const b=W(),{resetField:f,watch:c,getValues:E,formState:{isSubmitting:j,errors:R,dirtyFields:T}}=Te(),N=Object.keys(T).length>0,S=Qe(pk,n),F=!!E(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[V,_]=h.useState(S||F),H=kk(n),C=!!((y=(p=R.avklarAktiviteterForm)==null?void 0:p[o])!=null&&y.begrunnelseAvklareAktiviteter),O=J=>{J?_(!V):!J&&V&&_(!1),f(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),f(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),g(o,J)},L=n.filter(J=>J.definisjon===Ae.AVKLAR_AKTIVITETER||J.definisjon===Ae.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(J=>$f(J.status)).length===0,M=Rb(c,o,e.aktiviteterTomDatoMapping||[],F,b),U=`vurderAktiviteterSkjema.${o}`,re=ys(U,M);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:u.jsxs(ne,{gap:"1",children:[u.jsxs(ne,{gap:"6",children:[Qe(Ct,n)&&!L&&u.jsxs(Ne,{size:"small",variant:"warning",children:[u.jsx(se,{size:"xsmall",level:"3",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),u.jsxs(ne,{gap:"2",children:[u.jsx(I,{size:"small",children:u.jsx(k,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"})}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]})]}),u.jsxs(z,{gap:"4",children:[u.jsx(B,{size:"small",className:Ib.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:u.jsx(k,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||S)&&u.jsx(Ji,{onClick:()=>O(!0),erOverstyrt:V})]})]}),V&&u.jsx(B,{size:"small",children:u.jsx(k,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&u.jsxs(ne,{gap:"4",children:[u.jsx(ur,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:L,erOverstyrt:V,kodeverkSamling:s,values:c(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:Qe(Ct,n),arbeidsgiverOpplysningerPerId:i,fieldId:o}),re&&u.jsx(at,{children:re})]}),Zf(n,V)&&u.jsxs(ne,{gap:"6",children:[u.jsx(Br,{name:`avklarAktiviteterForm.${o}.${yl}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(H!=null&&H.begrunnelse)}),u.jsx(Fn,{ident:H==null?void 0:H.vurdertAv,date:H==null?void 0:H.vurdertTidspunkt}),(Qe(Ct,n)||V)&&u.jsx(u.Fragment,{children:u.jsxs(z,{gap:"4",children:[u.jsx(Du,{text:b.formatMessage({id:V?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:Qf(l,!0,C),isDirty:N,isSubmitting:m,isReadOnly:t||L&&!N,hasErrors:C}),!!T&&N&&u.jsx(ae,{variant:"secondary",loading:j,disabled:j,onClick:()=>O(!1),size:"small",children:u.jsx(k,{id:"AvklareAktiviteter.Avbryt"})})]})})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:yk,AVKLAR_AKTIVITETER:fk}=Ae,fd="manuellOverstyringBeregningAktiviteter",Nb=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},qb=(e,n)=>!Qe(fk,e)&&!Qe(yk,e)&&!n,Sb=e=>{const n=e[tt],r=n.filter(i=>i[fd]).map(yd).filter(i=>i),t=n.filter(i=>!i[fd]).map(yd).filter(i=>i),s=[];if(r.length>0){const i=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:yk,begrunnelse:i,grunnlag:r};s.push(l)}if(t.length>0){const i=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:fk,begrunnelse:i,grunnlag:t};s.push(l)}return s},Pb=(e,n,r,t)=>({[tt]:e.map(s=>{var i;return Tb(s.avklaringsbehov,(i=s.faktaOmBeregning)==null?void 0:i.avklarAktiviteter,n,r,Nb(t,s.vilkårsperiodeFom))})}),xb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},Fb=({erOverstyrer:e,readOnly:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,submittable:s,submitCallback:i,beregningsgrunnlag:l,aktivtBeregningsgrunnlagIndeks:o,vilkår:g,setFormData:m,formData:p,setAvklarAktiviteterErEndret:y})=>{const b=ze({defaultValues:p||Pb(l,r,t,g)}),{formState:{dirtyFields:f,errors:c,isSubmitted:E},control:j,getValues:R,trigger:T,setValue:N}=b;h.useEffect(()=>{var O;(O=f.avklarAktiviteterForm)!=null&&O.some(L=>!!L)?y(!0):y(!1)},[f]),h.useEffect(()=>{var O;E&&(O=f.avklarAktiviteterForm)!=null&&O[o]&&T()},[o]);const S=l.flatMap(O=>O.avklaringsbehov),{fields:F}=tn({name:tt,control:j}),[V,_]=h.useState(!1),H=(O,L)=>{const M=R(`avklarAktiviteterForm.${O}`);N(`${tt}.${O}`,{...M,manuellOverstyringBeregningAktiviteter:L},{shouldDirty:!0})};if(qb(S,e))return null;const C=O=>{Object.keys(c).length===0&&(_(!0),i(Sb(O)))};return u.jsx(Je,{formMethods:b,onSubmit:O=>C(O),setDataOnUnmount:m,children:F.map((O,L)=>o===L&&u.jsx(Eb,{aktivtBeregningsgrunnlagIndeks:o,fieldId:L,avklarAktiviteter:xb(l,L),avklaringsbehovListe:l[L].avklaringsbehov,erOverstyrer:e,readOnly:n,submittable:s,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,updateOverstyring:H,submitDisabled:V},O.id))})},Se=Y.createContext(0),bk=Y.createContext(0),vn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:s}=Te();return h.useEffect(()=>()=>s(e),[]),u.jsx(je,{name:e,htmlSize:8,parse:De,readOnly:n,isEdited:r,validate:n?[]:[Z,sn(178956970)],label:t})};vn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(s=>s.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const Bb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Jr=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:s})=>{var i,l;const{getValues:o}=Te(),g=Y.useContext(Se),m=o(`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues`);if(!m)return null;const p=(i=e.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent,y=Bb(m,p),b=`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues.${y}.fastsattBelop`,f=p?(l=s[p])==null?void 0:l.navn:void 0;return u.jsx(vn,{name:b,readOnly:n,isAksjonspunktClosed:r,label:t||u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${f} (${p})`}})})};Jr.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===ge.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const s={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(s)}),n};const pn=e=>e==="true",_b="_navetLink_15r5n_1",ck={navetLink:_b},Ze="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Ob}=Ae,gt=({readOnly:e,erOverstyrt:n})=>{const r=Y.useContext(Se),t=W(),s=e||n;return u.jsxs(z,{gap:"2",wrap:!1,children:[u.jsx(qe,{label:u.jsx(k,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${Ze}`,isReadOnly:s,validate:s?[]:[Z],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:pn}),u.jsx("div",{children:u.jsx("a",{className:ck.navetLink,href:dk,target:"_blank",rel:"noopener noreferrer",children:u.jsx(k,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})};gt.buildInitialValues=(e,n,r,t)=>r.includes(D.VURDER_BESTEBEREGNING)||r.includes(D.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(s=>s.definisjon===Ob)!==void 0||t?{[Ze]:!1}:{[Ze]:n.skalHaBesteberegning}:{}:{};const bd=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};gt.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[Ze]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:i})=>i!==!0).map(i=>({andelsnr:i.andelsnr,nyAndel:!!i.nyAndel,lagtTilAvSaksbehandler:!!i.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:i.fastsattBelop,inntektskategori:bd(i.inntektskategori)}})),s=r.find(i=>i.nyAndel&&i.aktivitetStatus===ge.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:s?{fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:bd(s.inntektskategori)}}:void 0}}};const Db=e=>(n,r)=>{var t;const s=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(s.map(o=>o).includes(D.VURDER_BESTEBEREGNING)||s.map(o=>o).includes(D.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const i=gt.transformValues(n,e,r),l=[D.VURDER_BESTEBEREGNING];return(t=i.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&i.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(D.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...i}},wb="_fadeinTabell_l1t64_1",Vb={fadeinTabell:wb},Rr="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Mb,AVKLAR_AKTIVITETER:Gb}=Ae,Lb=(e,n)=>n.some(r=>r.definisjon===e),Kb=(e,n)=>e&&!n.some(r=>r.definisjon===Gb&&As(r.status)),fl=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:s,updateOverstyring:i,erOverstyrer:l,erOverstyrt:o})=>{const[g,m]=h.useState(o),p=Y.useContext(Se),y=h.useMemo(()=>Kb(l,s),[l,s]),b=()=>{m(!g),i(p,!g)};return u.jsx("div",{className:Vb.fadeinTabell,children:r&&u.jsxs(ne,{gap:"4",children:[u.jsxs(z,{gap:"4",children:[u.jsx(se,{level:"3",size:"xsmall",children:u.jsx(k,{id:"InntektstabellPanel.RapporterteInntekter"})}),(y||g)&&u.jsx(Ji,{onClick:b,erOverstyrt:t||g||Lb(Mb,s)})]}),n&&u.jsx(B,{size:"small",children:u.jsx(k,{id:n})}),e,g&&!t&&u.jsx(z,{children:u.jsx(ae,{size:"small",onClick:b,variant:"secondary",children:u.jsx(k,{id:"InntektstabellPanel.Avbryt"})})})]})})};fl.buildInitialValues=e=>({[Rr]:e});const jk=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(s=>s.aktivitetStatus===ge.ARBEIDSTAKER).filter(s=>s.arbeidsforhold&&s.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(s=>s.arbeidsforhold&&s.arbeidsforhold.arbeidsforholdId).length>0:!1},Er="lonnsendringField",ut=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[Z],parse:pn})},$b=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};ut.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(s=>s.aktivitetStatus===ge.ARBEIDSTAKER);return!t||t.length<1||(n[Er]=$b(t)),n};const Ub=(e,n,r)=>!!r[Er]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;ut.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(D.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[D.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[Er]}}:{};const In="NyoppstartetFLField",kt=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${In}`,validate:[Z],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn})};kt.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(s=>s.beregningsgrunnlagPrStatusOgAndel).flat().filter(s=>(s==null?void 0:s.aktivitetStatus)===ge.FRILANSER);return t.length>0&&(r[In]=(n=t[0])==null?void 0:n.erNyoppstartet),r};kt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(D.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[In]}};const s=n.find(l=>l.aktivitetStatus===ge.FRILANSER);if(!s)return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[In]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[In]}};s.andelsnr&&t.push(s.andelsnr);const i={fastsettMaanedsinntektFL:{maanedsinntekt:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL,D.FASTSETT_MAANEDSINNTEKT_FL],...i,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[In]}}};var cd={},Lr,jd;function an(){if(jd)return Lr;jd=1;var e=function(n){return n&&n.Math===Math&&n};return Lr=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof dd=="object"&&dd)||e(typeof Lr=="object"&&Lr)||function(){return this}()||Function("return this")(),Lr}var Ls={},hd,Ad;function Bn(){return Ad||(Ad=1,hd=function(e){try{return!!e()}catch{return!0}}),hd}var Ks,Id;function $n(){if(Id)return Ks;Id=1;var e=Bn();return Ks=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Ks}var $s,Td;function bl(){if(Td)return $s;Td=1;var e=Bn();return $s=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),$s}var Us,Rd;function cl(){if(Rd)return Us;Rd=1;var e=bl(),n=Function.prototype.call;return Us=e?n.bind(n):function(){return n.apply(n,arguments)},Us}var Ys={},Ed;function Yb(){if(Ed)return Ys;Ed=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Ys.f=r?function(t){var s=n(this,t);return!!s&&s.enumerable}:e,Ys}var Nd,qd;function hk(){return qd||(qd=1,Nd=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),Nd}var Hs,Sd;function ln(){if(Sd)return Hs;Sd=1;var e=bl(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return Hs=e?t:function(s){return function(){return r.apply(s,arguments)}},Hs}var Cs,Pd;function Ts(){if(Pd)return Cs;Pd=1;var e=ln(),n=e({}.toString),r=e("".slice);return Cs=function(t){return r(n(t),8,-1)},Cs}var zs,xd;function Hb(){if(xd)return zs;xd=1;var e=ln(),n=Bn(),r=Ts(),t=Object,s=e("".split);return zs=n(function(){return!t("z").propertyIsEnumerable(0)})?function(i){return r(i)==="String"?s(i,""):t(i)}:t,zs}var Fd,Bd;function Ak(){return Bd||(Bd=1,Fd=function(e){return e==null}),Fd}var Js,_d;function Ik(){if(_d)return Js;_d=1;var e=Ak(),n=TypeError;return Js=function(r){if(e(r))throw new n("Can't call method on "+r);return r},Js}var Ws,Od;function Rs(){if(Od)return Ws;Od=1;var e=Hb(),n=Ik();return Ws=function(r){return e(n(r))},Ws}var Xs,Dd;function dn(){if(Dd)return Xs;Dd=1;var e=typeof document=="object"&&document.all;return Xs=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},Xs}var Zs,wd;function _r(){if(wd)return Zs;wd=1;var e=dn();return Zs=function(n){return typeof n=="object"?n!==null:e(n)},Zs}var Qs,Vd;function Es(){if(Vd)return Qs;Vd=1;var e=an(),n=dn(),r=function(t){return n(t)?t:void 0};return Qs=function(t,s){return arguments.length<2?r(e[t]):e[t]&&e[t][s]},Qs}var ea,Md;function Cb(){if(Md)return ea;Md=1;var e=ln();return ea=e({}.isPrototypeOf),ea}var na,Gd;function zb(){if(Gd)return na;Gd=1;var e=an(),n=e.navigator,r=n&&n.userAgent;return na=r?String(r):"",na}var ra,Ld;function Jb(){if(Ld)return ra;Ld=1;var e=an(),n=zb(),r=e.process,t=e.Deno,s=r&&r.versions||t&&t.version,i=s&&s.v8,l,o;return i&&(l=i.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),ra=o,ra}var ta,Kd;function Tk(){if(Kd)return ta;Kd=1;var e=Jb(),n=Bn(),r=an(),t=r.String;return ta=!!Object.getOwnPropertySymbols&&!n(function(){var s=Symbol("symbol detection");return!t(s)||!(Object(s)instanceof Symbol)||!Symbol.sham&&e&&e<41}),ta}var sa,$d;function Rk(){if($d)return sa;$d=1;var e=Tk();return sa=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",sa}var aa,Ud;function Ek(){if(Ud)return aa;Ud=1;var e=Es(),n=dn(),r=Cb(),t=Rk(),s=Object;return aa=t?function(i){return typeof i=="symbol"}:function(i){var l=e("Symbol");return n(l)&&r(l.prototype,s(i))},aa}var ia,Yd;function Wb(){if(Yd)return ia;Yd=1;var e=String;return ia=function(n){try{return e(n)}catch{return"Object"}},ia}var la,Hd;function jl(){if(Hd)return la;Hd=1;var e=dn(),n=Wb(),r=TypeError;return la=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},la}var da,Cd;function Xb(){if(Cd)return da;Cd=1;var e=jl(),n=Ak();return da=function(r,t){var s=r[t];return n(s)?void 0:e(s)},da}var oa,zd;function Zb(){if(zd)return oa;zd=1;var e=cl(),n=dn(),r=_r(),t=TypeError;return oa=function(s,i){var l,o;if(i==="string"&&n(l=s.toString)&&!r(o=e(l,s))||n(l=s.valueOf)&&!r(o=e(l,s))||i!=="string"&&n(l=s.toString)&&!r(o=e(l,s)))return o;throw new t("Can't convert object to primitive value")},oa}var ga={exports:{}},Jd,Wd;function Qb(){return Wd||(Wd=1,Jd=!1),Jd}var ua,Xd;function hl(){if(Xd)return ua;Xd=1;var e=an(),n=Object.defineProperty;return ua=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},ua}var Zd;function Al(){if(Zd)return ga.exports;Zd=1;var e=Qb(),n=an(),r=hl(),t="__core-js_shared__",s=ga.exports=n[t]||r(t,{});return(s.versions||(s.versions=[])).push({version:"3.40.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ga.exports}var ka,Qd;function Nk(){if(Qd)return ka;Qd=1;var e=Al();return ka=function(n,r){return e[n]||(e[n]=r||{})},ka}var ma,eo;function qk(){if(eo)return ma;eo=1;var e=Ik(),n=Object;return ma=function(r){return n(e(r))},ma}var pa,no;function kr(){if(no)return pa;no=1;var e=ln(),n=qk(),r=e({}.hasOwnProperty);return pa=Object.hasOwn||function(t,s){return r(n(t),s)},pa}var va,ro;function Sk(){if(ro)return va;ro=1;var e=ln(),n=0,r=Math.random(),t=e(1 .toString);return va=function(s){return"Symbol("+(s===void 0?"":s)+")_"+t(++n+r,36)},va}var ya,to;function mt(){if(to)return ya;to=1;var e=an(),n=Nk(),r=kr(),t=Sk(),s=Tk(),i=Rk(),l=e.Symbol,o=n("wks"),g=i?l.for||l:l&&l.withoutSetter||t;return ya=function(m){return r(o,m)||(o[m]=s&&r(l,m)?l[m]:g("Symbol."+m)),o[m]},ya}var fa,so;function ec(){if(so)return fa;so=1;var e=cl(),n=_r(),r=Ek(),t=Xb(),s=Zb(),i=mt(),l=TypeError,o=i("toPrimitive");return fa=function(g,m){if(!n(g)||r(g))return g;var p=t(g,o),y;if(p){if(m===void 0&&(m="default"),y=e(p,g,m),!n(y)||r(y))return y;throw new l("Can't convert object to primitive value")}return m===void 0&&(m="number"),s(g,m)},fa}var ba,ao;function Pk(){if(ao)return ba;ao=1;var e=ec(),n=Ek();return ba=function(r){var t=e(r,"string");return n(t)?t:t+""},ba}var ca,io;function xk(){if(io)return ca;io=1;var e=an(),n=_r(),r=e.document,t=n(r)&&n(r.createElement);return ca=function(s){return t?r.createElement(s):{}},ca}var ja,lo;function Fk(){if(lo)return ja;lo=1;var e=$n(),n=Bn(),r=xk();return ja=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),ja}var oo;function Bk(){if(oo)return Ls;oo=1;var e=$n(),n=cl(),r=Yb(),t=hk(),s=Rs(),i=Pk(),l=kr(),o=Fk(),g=Object.getOwnPropertyDescriptor;return Ls.f=e?g:function(m,p){if(m=s(m),p=i(p),o)try{return g(m,p)}catch{}if(l(m,p))return t(!n(r.f,m,p),m[p])},Ls}var ha={},Aa,go;function _k(){if(go)return Aa;go=1;var e=$n(),n=Bn();return Aa=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Aa}var Ia,uo;function Ns(){if(uo)return Ia;uo=1;var e=_r(),n=String,r=TypeError;return Ia=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},Ia}var ko;function pt(){if(ko)return ha;ko=1;var e=$n(),n=Fk(),r=_k(),t=Ns(),s=Pk(),i=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,g="enumerable",m="configurable",p="writable";return ha.f=e?r?function(y,b,f){if(t(y),b=s(b),t(f),typeof y=="function"&&b==="prototype"&&"value"in f&&p in f&&!f[p]){var c=o(y,b);c&&c[p]&&(y[b]=f.value,f={configurable:m in f?f[m]:c[m],enumerable:g in f?f[g]:c[g],writable:!1})}return l(y,b,f)}:l:function(y,b,f){if(t(y),b=s(b),t(f),n)try{return l(y,b,f)}catch{}if("get"in f||"set"in f)throw new i("Accessors not supported");return"value"in f&&(y[b]=f.value),y},ha}var Ta,mo;function Ok(){if(mo)return Ta;mo=1;var e=$n(),n=pt(),r=hk();return Ta=e?function(t,s,i){return n.f(t,s,r(1,i))}:function(t,s,i){return t[s]=i,t},Ta}var Ra={exports:{}},Ea,po;function nc(){if(po)return Ea;po=1;var e=$n(),n=kr(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,s=n(r,"name"),i=s&&(function(){}).name==="something",l=s&&(!e||e&&t(r,"name").configurable);return Ea={EXISTS:s,PROPER:i,CONFIGURABLE:l},Ea}var Na,vo;function Dk(){if(vo)return Na;vo=1;var e=ln(),n=dn(),r=Al(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(s){return t(s)}),Na=r.inspectSource,Na}var qa,yo;function rc(){if(yo)return qa;yo=1;var e=an(),n=dn(),r=e.WeakMap;return qa=n(r)&&/native code/.test(String(r)),qa}var Sa,fo;function wk(){if(fo)return Sa;fo=1;var e=Nk(),n=Sk(),r=e("keys");return Sa=function(t){return r[t]||(r[t]=n(t))},Sa}var bo,co;function Il(){return co||(co=1,bo={}),bo}var Pa,jo;function tc(){if(jo)return Pa;jo=1;var e=rc(),n=an(),r=_r(),t=Ok(),s=kr(),i=Al(),l=wk(),o=Il(),g="Object already initialized",m=n.TypeError,p=n.WeakMap,y,b,f,c=function(T){return f(T)?b(T):y(T,{})},E=function(T){return function(N){var S;if(!r(N)||(S=b(N)).type!==T)throw new m("Incompatible receiver, "+T+" required");return S}};if(e||i.state){var j=i.state||(i.state=new p);j.get=j.get,j.has=j.has,j.set=j.set,y=function(T,N){if(j.has(T))throw new m(g);return N.facade=T,j.set(T,N),N},b=function(T){return j.get(T)||{}},f=function(T){return j.has(T)}}else{var R=l("state");o[R]=!0,y=function(T,N){if(s(T,R))throw new m(g);return N.facade=T,t(T,R,N),N},b=function(T){return s(T,R)?T[R]:{}},f=function(T){return s(T,R)}}return Pa={set:y,get:b,has:f,enforce:c,getterFor:E},Pa}var ho;function sc(){if(ho)return Ra.exports;ho=1;var e=ln(),n=Bn(),r=dn(),t=kr(),s=$n(),i=nc().CONFIGURABLE,l=Dk(),o=tc(),g=o.enforce,m=o.get,p=String,y=Object.defineProperty,b=e("".slice),f=e("".replace),c=e([].join),E=s&&!n(function(){return y(function(){},"length",{value:8}).length!==8}),j=String(String).split("String"),R=Ra.exports=function(T,N,S){b(p(N),0,7)==="Symbol("&&(N="["+f(p(N),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),S&&S.getter&&(N="get "+N),S&&S.setter&&(N="set "+N),(!t(T,"name")||i&&T.name!==N)&&(s?y(T,"name",{value:N,configurable:!0}):T.name=N),E&&S&&t(S,"arity")&&T.length!==S.arity&&y(T,"length",{value:S.arity});try{S&&t(S,"constructor")&&S.constructor?s&&y(T,"prototype",{writable:!1}):T.prototype&&(T.prototype=void 0)}catch{}var F=g(T);return t(F,"source")||(F.source=c(j,typeof N=="string"?N:"")),T};return Function.prototype.toString=R(function(){return r(this)&&m(this).source||l(this)},"toString"),Ra.exports}var xa,Ao;function ac(){if(Ao)return xa;Ao=1;var e=dn(),n=pt(),r=sc(),t=hl();return xa=function(s,i,l,o){o||(o={});var g=o.enumerable,m=o.name!==void 0?o.name:i;if(e(l)&&r(l,m,o),o.global)g?s[i]=l:t(i,l);else{try{o.unsafe?s[i]&&(g=!0):delete s[i]}catch{}g?s[i]=l:n.f(s,i,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return s},xa}var Fa={},Ba,Io;function ic(){if(Io)return Ba;Io=1;var e=Math.ceil,n=Math.floor;return Ba=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},Ba}var _a,To;function Vk(){if(To)return _a;To=1;var e=ic();return _a=function(n){var r=+n;return r!==r||r===0?0:e(r)},_a}var Oa,Ro;function lc(){if(Ro)return Oa;Ro=1;var e=Vk(),n=Math.max,r=Math.min;return Oa=function(t,s){var i=e(t);return i<0?n(i+s,0):r(i,s)},Oa}var Da,Eo;function dc(){if(Eo)return Da;Eo=1;var e=Vk(),n=Math.min;return Da=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},Da}var wa,No;function Tl(){if(No)return wa;No=1;var e=dc();return wa=function(n){return e(n.length)},wa}var Va,qo;function oc(){if(qo)return Va;qo=1;var e=Rs(),n=lc(),r=Tl(),t=function(s){return function(i,l,o){var g=e(i),m=r(g);if(m===0)return!s&&-1;var p=n(o,m),y;if(s&&l!==l){for(;m>p;)if(y=g[p++],y!==y)return!0}else for(;m>p;p++)if((s||p in g)&&g[p]===l)return s||p||0;return!s&&-1}};return Va={includes:t(!0),indexOf:t(!1)},Va}var Ma,So;function Mk(){if(So)return Ma;So=1;var e=ln(),n=kr(),r=Rs(),t=oc().indexOf,s=Il(),i=e([].push);return Ma=function(l,o){var g=r(l),m=0,p=[],y;for(y in g)!n(s,y)&&n(g,y)&&i(p,y);for(;o.length>m;)n(g,y=o[m++])&&(~t(p,y)||i(p,y));return p},Ma}var Po,xo;function Rl(){return xo||(xo=1,Po=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Po}var Fo;function gc(){if(Fo)return Fa;Fo=1;var e=Mk(),n=Rl(),r=n.concat("length","prototype");return Fa.f=Object.getOwnPropertyNames||function(t){return e(t,r)},Fa}var Bo={},_o;function uc(){return _o||(_o=1,Bo.f=Object.getOwnPropertySymbols),Bo}var Ga,Oo;function kc(){if(Oo)return Ga;Oo=1;var e=Es(),n=ln(),r=gc(),t=uc(),s=Ns(),i=n([].concat);return Ga=e("Reflect","ownKeys")||function(l){var o=r.f(s(l)),g=t.f;return g?i(o,g(l)):o},Ga}var La,Do;function mc(){if(Do)return La;Do=1;var e=kr(),n=kc(),r=Bk(),t=pt();return La=function(s,i,l){for(var o=n(i),g=t.f,m=r.f,p=0;p<o.length;p++){var y=o[p];!e(s,y)&&!(l&&e(l,y))&&g(s,y,m(i,y))}},La}var Ka,wo;function pc(){if(wo)return Ka;wo=1;var e=Bn(),n=dn(),r=/#|\.prototype\./,t=function(g,m){var p=i[s(g)];return p===o?!0:p===l?!1:n(m)?e(m):!!m},s=t.normalize=function(g){return String(g).replace(r,".").toLowerCase()},i=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return Ka=t,Ka}var $a,Vo;function vc(){if(Vo)return $a;Vo=1;var e=an(),n=Bk().f,r=Ok(),t=ac(),s=hl(),i=mc(),l=pc();return $a=function(o,g){var m=o.target,p=o.global,y=o.stat,b,f,c,E,j,R;if(p?f=e:y?f=e[m]||s(m,{}):f=e[m]&&e[m].prototype,f)for(c in g){if(j=g[c],o.dontCallGetSet?(R=n(f,c),E=R&&R.value):E=f[c],b=l(p?c:m+(y?".":"#")+c,o.forced),!b&&E!==void 0){if(typeof j==typeof E)continue;i(j,E)}(o.sham||E&&E.sham)&&r(j,"sham",!0),t(f,c,j,o)}},$a}var Ua,Mo;function Gk(){if(Mo)return Ua;Mo=1;var e=Ts();return Ua=Array.isArray||function(n){return e(n)==="Array"},Ua}var Ya,Go;function yc(){if(Go)return Ya;Go=1;var e=TypeError,n=9007199254740991;return Ya=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Ya}var Ha,Lo;function fc(){if(Lo)return Ha;Lo=1;var e=Ts(),n=ln();return Ha=function(r){if(e(r)==="Function")return n(r)},Ha}var Ca,Ko;function bc(){if(Ko)return Ca;Ko=1;var e=fc(),n=jl(),r=bl(),t=e(e.bind);return Ca=function(s,i){return n(s),i===void 0?s:r?t(s,i):function(){return s.apply(i,arguments)}},Ca}var za,$o;function cc(){if($o)return za;$o=1;var e=Gk(),n=Tl(),r=yc(),t=bc(),s=function(i,l,o,g,m,p,y,b){for(var f=m,c=0,E=y?t(y,b):!1,j,R;c<g;)c in o&&(j=E?E(o[c],c,l):o[c],p>0&&e(j)?(R=n(j),f=s(i,l,j,R,f,p-1)-1):(r(f+1),i[f]=j),f++),c++;return f};return za=s,za}var Ja,Uo;function jc(){if(Uo)return Ja;Uo=1;var e=mt(),n=e("toStringTag"),r={};return r[n]="z",Ja=String(r)==="[object z]",Ja}var Wa,Yo;function hc(){if(Yo)return Wa;Yo=1;var e=jc(),n=dn(),r=Ts(),t=mt(),s=t("toStringTag"),i=Object,l=r(function(){return arguments}())==="Arguments",o=function(g,m){try{return g[m]}catch{}};return Wa=e?r:function(g){var m,p,y;return g===void 0?"Undefined":g===null?"Null":typeof(p=o(m=i(g),s))=="string"?p:l?r(m):(y=r(m))==="Object"&&n(m.callee)?"Arguments":y},Wa}var Xa,Ho;function Ac(){if(Ho)return Xa;Ho=1;var e=ln(),n=Bn(),r=dn(),t=hc(),s=Es(),i=Dk(),l=function(){},o=s("Reflect","construct"),g=/^\s*(?:class|function)\b/,m=e(g.exec),p=!g.test(l),y=function(f){if(!r(f))return!1;try{return o(l,[],f),!0}catch{return!1}},b=function(f){if(!r(f))return!1;switch(t(f)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!m(g,i(f))}catch{return!0}};return b.sham=!0,Xa=!o||n(function(){var f;return y(y.call)||!y(Object)||!y(function(){f=!0})||f})?b:y,Xa}var Za,Co;function Ic(){if(Co)return Za;Co=1;var e=Gk(),n=Ac(),r=_r(),t=mt(),s=t("species"),i=Array;return Za=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===i||e(o.prototype))?o=void 0:r(o)&&(o=o[s],o===null&&(o=void 0))),o===void 0?i:o},Za}var Qa,zo;function Tc(){if(zo)return Qa;zo=1;var e=Ic();return Qa=function(n,r){return new(e(n))(r===0?0:r)},Qa}var Jo;function Rc(){if(Jo)return cd;Jo=1;var e=vc(),n=cc(),r=jl(),t=qk(),s=Tl(),i=Tc();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),g=s(o),m;return r(l),m=i(o,0),m.length=n(m,o,o,g,0,1,l,arguments.length>1?arguments[1]:void 0),m}}),cd}var Wo={},ei={},ni,Xo;function Ec(){if(Xo)return ni;Xo=1;var e=Mk(),n=Rl();return ni=Object.keys||function(r){return e(r,n)},ni}var Zo;function Nc(){if(Zo)return ei;Zo=1;var e=$n(),n=_k(),r=pt(),t=Ns(),s=Rs(),i=Ec();return ei.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var g=s(o),m=i(o),p=m.length,y=0,b;p>y;)r.f(l,b=m[y++],g[b]);return l},ei}var ri,Qo;function qc(){if(Qo)return ri;Qo=1;var e=Es();return ri=e("document","documentElement"),ri}var ti,eg;function Sc(){if(eg)return ti;eg=1;var e=Ns(),n=Nc(),r=Rl(),t=Il(),s=qc(),i=xk(),l=wk(),o=">",g="<",m="prototype",p="script",y=l("IE_PROTO"),b=function(){},f=function(T){return g+p+o+T+g+"/"+p+o},c=function(T){T.write(f("")),T.close();var N=T.parentWindow.Object;return T=null,N},E=function(){var T=i("iframe"),N="java"+p+":",S;return T.style.display="none",s.appendChild(T),T.src=String(N),S=T.contentWindow.document,S.open(),S.write(f("document.F=Object")),S.close(),S.F},j,R=function(){try{j=new ActiveXObject("htmlfile")}catch{}R=typeof document<"u"?document.domain&&j?c(j):E():c(j);for(var T=r.length;T--;)delete R[m][r[T]];return R()};return t[y]=!0,ti=Object.create||function(T,N){var S;return T!==null?(b[m]=e(T),S=new b,b[m]=null,S[y]=T):S=R(),N===void 0?S:n.f(S,N)},ti}var si,ng;function Pc(){if(ng)return si;ng=1;var e=mt(),n=Sc(),r=pt().f,t=e("unscopables"),s=Array.prototype;return s[t]===void 0&&r(s,t,{configurable:!0,value:n(null)}),si=function(i){s[t][i]=!0},si}var rg;function xc(){if(rg)return Wo;rg=1;var e=Pc();return e("flatMap"),Wo}var ai,tg;function Fc(){if(tg)return ai;tg=1;var e=an(),n=ln();return ai=function(r,t){return n(e[r].prototype[t])},ai}var ii,sg;function Bc(){if(sg)return ii;sg=1,Rc(),xc();var e=Fc();return ii=e("Array","flatMap"),ii}var li,ag;function _c(){if(ag)return li;ag=1;var e=Bc();return li=e,li}var di,ig;function Oc(){if(ig)return di;ig=1;var e=_c();return di=e,di}var oi,lg;function Dc(){if(lg)return oi;lg=1;var e=Oc();return oi=e,oi}var dg,og;function wc(){return og||(og=1,dg=Dc()),dg}wc();const Vn="vurderEtterlønnSluttpakke",vt=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx("div",{children:u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${Vn}`,validate:[Z],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn})})};vt.buildInitialValues=(e,n)=>{var r,t,s;const i={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!As(n.status),o=e.beregningsgrunnlagPeriode.flatMap(g=>g.beregningsgrunnlagPrStatusOgAndel).filter(g=>(g==null?void 0:g.arbeidsforhold)&&(g==null?void 0:g.arbeidsforhold.arbeidsforholdType)===gr.ETTERLONN_SLUTTPAKKE);return o.length>0&&(i[Vn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((s=o[0])==null?void 0:s.beregnetPrAar)>0:void 0),i};const Vc=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===gr.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};vt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(D.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Vn]}};const s=Vc(r);if(!s)return{};const i=n.find(o=>o.andelsnr===s);if(!i)return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Vn]}};if(i.andelsnr&&t.includes(i.andelsnr))return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Vn]}};i.andelsnr&&t.push(i.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:i.fastsattBelop}};return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE,D.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Vn]}}};const Lk="mottarYtelseField",Mc="_frilans",mr=e=>Lk+e.andelsnr,tr=()=>Lk+Mc,Gc=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[mr(r)]).find(r=>r)!==void 0,Kk=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[tr()]:void 0,$k=(e,n,r)=>{var t;if(!n)return{};const s={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[mr(l)]:void 0;l.andelsnr&&(s[l.andelsnr]=o)}),!r)return s;const i=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===ge.FRILANSER);return i&&(s[i.andelsnr]=Kk(e)),s},Uk="inntektFieldArray",Lc=e=>e.inntektskategori&&e.inntektskategori!==Is.UDEFINERT?e.inntektskategori:"",Kc=(e,n,r)=>{var t,s,i,l,o;const g=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return g?Ln(g,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(s=e.arbeidsforhold)!=null&&s.arbeidsforholdType?(i=r[kn.OPPTJENING_AKTIVITET_TYPE].find(m=>{var p;return m.kode===((p=e.arbeidsforhold)==null?void 0:p.arbeidsforholdType)}))==null?void 0:i.navn:(l=r[kn.AKTIVITET_STATUS].find(m=>m.kode===e.aktivitetStatus))==null?void 0:l.navn},Yk=(e,n,r)=>({andel:Kc(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Lc(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),$c=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Uc=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Yc=(e,n)=>{const r=$c(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},qs=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.ARBEIDSTAKER,Ss=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.FRILANSER,Hk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.DAGPENGER,Ck=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE,zk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.MILITAER_ELLER_SIVIL,Hc=(e,n)=>n?Ss(e)&&!!n[In]:!1,Cc=e=>!!e[Ze],zc=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&Uc(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[Er],Jc=(e,n,r)=>qs(e)&&zc(n,e,r),Wc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Ss(e),Xc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&qs(e)&&Yc(e,n),Zc=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const s=$k(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!s[n.andelsnr]},Qc=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===gr.ETTERLONN_SLUTTPAKKE?!!n[Vn]:!1,Jk=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===ml.KUNSTIG))!==void 0},ej=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===D.FASTSETT_BG_KUN_YTELSE)!==void 0,nj=(e,n,r)=>t=>!!(Cc(e)||Zc(e,t,n,r)||Jc(t,e,n)||Wc(t,n)||Xc(t,n)||Jk(t,r)||jk(t,r,t.arbeidsforholdId)||Qc(t,e)),rj=(e,n,r)=>t=>nj(e,n,r)(t)?!0:Hc(t,e),Rn=e=>!!e&&e[Rr]===!0,tj=e=>e&&e.some(n=>n.definisjon===Ae.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),Wk=e=>Rn(e),gg=e=>e.erOverstyrtInntekt||tj(e.avklaringsbehov),Xk=(e,n,r)=>t=>ej(n)||rj(e,n,r)(t),sj=(e,n,r)=>t=>Rn(e)||Xk(e,n,r)(t),Nr=(e,n)=>r=>n.faktaOmBeregning?sj(e,n.faktaOmBeregning,n)(r):!1,aj=e=>n=>Jk(n,e),ij=e=>aj(e),Ti=(e,n,r)=>({...Yk(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?G(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?G(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?G(e.refusjonskrav):""}),Ri=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),rs=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},Un=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},El=e=>{var n;return((n=Un(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Xn=(e,n)=>n.some(r=>r.definisjon===e),Zk=e=>{const n=e.filter(r=>r.definisjon===Ae.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===Ae.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!As(r.status))},lj=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,dj=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:s,aktivitetStatus:i}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(g=>g.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:s}}return ot[t]?{andelsinfo:t,inntektskategori:s}:{andelsinfo:t,inntektskategori:s}}return rt[i]?{andelsinfo:rt[i],inntektskategori:s}:{andelsinfo:t,inntektskategori:s,arbeidsforholdId:l}},oj=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),gj=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,Qk=(e,n,r)=>{const t=e.map(s=>n(s,e)).slice().sort((s,i)=>lj(s,i));for(let s=0;s<t.length-1;s+=1)if(gj(t[s],t[s+1]))return oj(r)},uj=(e,n)=>Qk(e,dj,n),kj=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),mj=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:kj(n),pj="_row_1hw01_1",vj="_slettIkon_1hw01_10",yj="_rightAlign_1hw01_13",fj="_addCircleIcon_1hw01_41",bj="_storBredde_1hw01_47",cj="_mediumBredde_1hw01_50",wn={row:pj,slettIkon:vj,rightAlign:yj,addCircleIcon:fj,storBredde:bj,mediumBredde:cj},jj=(e,n)=>{var r;return{andel:(r=n[kn.AKTIVITET_STATUS].find(t=>t.kode===e.filter(s=>s===ge.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},hj=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),Aj=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?fe(r.fastsattBelop):0}),n>0?G(n):""};function Ij(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const Tj=(e,n,r,t,s,i,l)=>e.map((o,g)=>u.jsxs(P.Row,{className:wn.row,children:[u.jsx(P.DataCell,{children:u.jsx(I,{size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),u.jsx(P.DataCell,{align:"right",className:wn.rightAlign,children:u.jsx(je,{name:`${i}.${g}.fastsattBelop`,className:wn.mediumBredde,parse:De,readOnly:r,isEdited:n,validate:r?[]:[Z,sn(178956970)],label:s.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${g+1}`}),hideLabel:!0,size:"small"})}),u.jsx(P.DataCell,{align:"right",className:wn.rightAlign,children:u.jsx(fs,{label:s.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${g+1}`}),name:`${i}.${g}.inntektskategori`,className:wn.storBredde,selectValues:hj(t),readOnly:r,validate:r?[]:[Z],hideLabel:!0,size:"small"})}),u.jsx(P.DataCell,{align:"right",className:wn.rightAlign,children:Ij(g,e,r)&&u.jsx(ae,{icon:u.jsx(Qn,{"aria-hidden":!0,className:wn.slettIkon}),onClick:()=>l(g),type:"button",variant:"tertiary"})})]},o.id)),Rj=e=>u.jsxs(P.Row,{children:[u.jsx(P.DataCell,{children:u.jsx(B,{as:"p",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),u.jsx(P.DataCell,{align:"right",children:u.jsx(ke,{children:e})}),u.jsx(P.DataCell,{}),u.jsx(P.DataCell,{})]},"bruttoBGSummaryRow"),Ej=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Nj=e=>e[kn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),qj=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},Sj=(e,n)=>{const r=e?Qk(e,qj,n):void 0;if(r)return r},em=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var s;const i=W(),{control:l}=Te(),o=Y.useContext(Se),g=`${yn}.${o}.${e}`,{fields:m,append:p,remove:y}=tn({control:l,name:g}),b=(s=t[kn.AKTIVITET_STATUS])==null?void 0:s.map(S=>S.kode),f=Nj(t),c=zr({name:g,control:l}),E=c?Aj(c):"0",j=Tj(m,r,n,f,i,g,y);j.push(Rj(E));const R=Sj(c,i),T=`${g}.skjemagruppe`,N=ys(T,R);return u.jsxs(ne,{gap:"2",children:[u.jsxs(P,{size:"small",children:[u.jsx(P.Header,{children:u.jsxs(P.Row,{children:[Ej().map(S=>{const F=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(S);return u.jsx(P.HeaderCell,{scope:"col",align:F?"right":"left",children:u.jsx(B,{size:"small",as:"span",children:u.jsx(k,{id:S})})},S)}),u.jsx(P.HeaderCell,{})]})}),u.jsx(P.Body,{children:j})]}),!n&&u.jsx(z,{children:u.jsx(ae,{icon:u.jsx(Zi,{"aria-hidden":!0,className:wn.addCircleIcon}),onClick:()=>p(jj(b,t)),type:"button",variant:"tertiary",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),N&&u.jsx(at,{children:N})]})},ts="besteberegningField",yt=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:s})=>{const{getValues:i}=Te(),l=Y.useContext(Se),o=i(`${yn}.${l}`),g=ts in o?o[ts]:void 0,m=W();return u.jsxs("div",{children:[u.jsx(qe,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:u.jsx(k,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[Z],parse:pn,isHorizontal:!0}),g!=null&&u.jsx("div",{style:{marginTop:"10px"},children:u.jsx(xu,{alignOffset:g?0:60,children:u.jsxs(ne,{gap:"4",children:[u.jsxs(z,{justify:"space-between",children:[u.jsx(B,{size:"small",children:u.jsx(k,{id:"KunYtelsePanel.OverskriftBesteberegning"})}),g&&u.jsx("a",{className:ck.navetLink,href:dk,target:"_blank",rel:"noopener noreferrer",children:u.jsx(k,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})]}),t&&u.jsx(em,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:s})]})})})]})};yt.buildInitialValues=e=>({[ts]:e.erBesteberegning});yt.transformValues=e=>!!e[ts];const Pj=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>u.jsxs(ne,{gap:"4",children:[u.jsx(B,{size:"medium",children:u.jsx(k,{id:"KunYtelsePanel.RapporterteInntekter"})}),u.jsx(em,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),ss="brukersAndelBG",ft=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:s})=>{const{kunYtelse:i}=n,l=i==null?void 0:i.fodendeKvinneMedDP;return u.jsxs("div",{children:[l&&u.jsx(yt,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:ss,skalViseInntektstabell:t,kodeverkSamling:s}),!l&&t&&u.jsx(Pj,{readOnly:e,brukersAndelFieldArrayName:ss,isAksjonspunktClosed:r,kodeverkSamling:s})]})};ft.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const s=e.andeler.map(l=>{const o=n.find(m=>m.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const g=l.fastsattBelopPrMnd!==null?G(l.fastsattBelopPrMnd):"";return{...Yk(o,r,t),fastsattBelop:g??""}}),i={[ss]:s};return e.fodendeKvinneMedDP?{...yt.buildInitialValues(e),...i}:i};ft.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[ss].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:fe(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?yt.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:as,VURDER_BESTEBEREGNING:xj}=D,Fj=(e,n,r,t,s,i,l)=>{n.includes(as)&&e.push(u.jsxs(ne,{gap:"4",children:[u.jsx(ft,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:s,kodeverkSamling:i}),l()]},"FASTSETT_BG_KUN_YTELSE"))},Bj=(e,n,r)=>{if(r.includes(as)&&n){const t=ft.transformValues(e,n),s=[as];return n!=null&&n.fodendeKvinneMedDP&&s.push(xj),{faktaOmBeregningTilfeller:s,...t}}return{}},_j=(e,n,r,t,s)=>n&&n.includes(as)?ft.buildInitialValues(e,r,t,s):{},Nl="erSNNyIArbeidslivet",bt=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx("div",{children:u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Nl}`,validate:[Z],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:pn})})};bt.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(s=>s.beregningsgrunnlagPrStatusOgAndel).flat().filter(s=>(s==null?void 0:s.aktivitetStatus)===ge.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[Nl]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};bt.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[Nl]}});const Oj="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",ql=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",ug=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return Ln(r,e.eksternArbeidsforholdId)},Mt=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},ct=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,s=Y.useContext(Se),i=W();return!t||t.length===0?null:u.jsx(ne,{gap:"6",children:t.map(l=>u.jsx("div",{children:u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:Oj,values:{navn:ug(Mt(l.arbeidsforhold),r),fom:A(Mt(l.arbeidsforhold).startdato).format(te),tom:A(Mt(l.arbeidsforhold).opphoersdato).format(te)}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${s}.tidsbegrensetValues.${ql(l)}`,isReadOnly:e,radios:[{value:"true",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[Z],parse:pn})},`fastsettTidsbegrensedeForhold_${ug(Mt(l.arbeidsforhold),r)}`))})};ct.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[ql(r)]=r.erTidsbegrensetArbeidsforhold)}),n};ct.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const s=ql(t),i=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[s];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:i,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const Sl="vurderMilitær",jt=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx("div",{children:u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Sl}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[Z],parse:pn})})};jt.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[Sl]=e.vurderMilitaer.harMilitaer),n};jt.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[Sl]}});const Dj=[D.VURDER_NYOPPSTARTET_FL,D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],wj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",Vj=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let i;return s?i=Ln(s,e.eksternArbeidsforholdId):i=e.arbeidsforholdType?(t=n[kn.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",u.jsx(k,{id:wj(),values:{arbeid:i}})},Mj=(e,n,r,t,s,i)=>u.jsx("div",{children:u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[e.arbeidsforhold&&Vj(e.arbeidsforhold,r,t),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${mr(e)}`,isReadOnly:n,radios:[{value:"true",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn,validate:n?[]:[Z]})}),Gj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",Lj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",Kj=e=>e.some(n=>Dj.includes(n))?Gj():Lj(),Ei=e=>e==null?void 0:e.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),ht=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s})=>{const i=Y.useContext(Se),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,g=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],m=W();return u.jsxs(u.Fragment,{children:[o&&!Ei(r)&&u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:Kj(r)}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${i}.vurderMottarYtelseValues.${tr()}`,isReadOnly:e,radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn,validate:e?[]:[Z]}),u.jsx(ne,{gap:"6",children:g.map(p=>u.jsx(Y.Fragment,{children:Mj(p,e,t,s,i,m)},mr(p)))})]})},$j=(e,n,r,t,s,i)=>{var l,o;if(n===null)return{};if(Gc(e,r.vurderMottarYtelse)){const g=[],m=$k(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(p=>{var y;if(p.andelsnr&&m[p.andelsnr]&&!s.includes(p.andelsnr)){const b=(y=n.find(f=>f.andelsnr===p.andelsnr))==null?void 0:y.fastsattBelop;(b||b===0)&&(g.push({andelsnr:p.andelsnr,fastsattBeløp:fe(b)}),s.push(p.andelsnr))}}),g.length>0?(i.push(D.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:g}}):{}}return{}},Uj=(e,n,r,t,s)=>{var i;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[tr()]){const l=(i=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:i.find(o=>o.aktivitetStatus===ge.FRILANSER);if(l&&!t.includes(l.andelsnr)&&Kk(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),s.push(D.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:fe(o.fastsattBelop)}}}return{}}return{}},Yj=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},Hj=(e,n,r)=>{var t;const s=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(D.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[tr()],arbeidstakerUtenIMMottarYtelse:s.map(i=>({andelsnr:Yj(i.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[mr(i)]}))}}};ht.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||Ei(n))&&(r[tr()]=Ei(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(s=>{r[mr(s)]=s.mottarYtelse}),r};ht.transformValues=(e,n,r,t,s)=>{const i=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(D.VURDER_MOTTAR_YTELSE)?{...Hj(e,r,i),...$j(e,n,r,t,s,i),...Uj(e,n,t,s,i),faktaOmBeregningTilfeller:i}:{}};const Cj="_aksjonspunktBoks_tufis_1",zj={aksjonspunktBoks:Cj},Jj=({children:e})=>u.jsx("div",{className:zj.aksjonspunktBoks,children:e}),Wj="_slettIkon_1sqjy_1",Xj="_rightAlignInput_1sqjy_7",Zj="_readOnlyContainer_1sqjy_36",Qj="_readOnlyContent_1sqjy_39",eh="_storBredde_1sqjy_44",nh="_mediumBredde_1sqjy_47",rh="_litenBredde_1sqjy_50",th="_inntekt_1sqjy_53",sh="_inntektNew_1sqjy_57",ah="_inntektOld_1sqjy_61",ih="_inntektOldStrikethrough_1sqjy_64",lh="_saksbehandlerIcon_1sqjy_72",we={slettIkon:Wj,rightAlignInput:Xj,readOnlyContainer:Zj,readOnlyContent:Qj,storBredde:eh,mediumBredde:nh,litenBredde:rh,inntekt:th,inntektNew:sh,inntektOld:ah,inntektOldStrikethrough:ih,saksbehandlerIcon:lh},dh=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},oh=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),gh=e=>e[kn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),uh=()=>u.jsx(at,{size:"small",children:"Må fastsettes"}),kh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:s,removeAndel:i,beregningsgrunnlag:l,kodeverkSamling:o,rowName:g,skalFastsetteInntektForAndel:m})=>{var p,y,b,f,c,E,j,R;const T=W(),{getValues:N}=Te(),S=Y.useContext(Se),F=N(`vurderFaktaBeregningForm.${S}`),V=Ss(e),_=Hk(e),H=Ck(e),C=zk(e),O=qs(e),L=Nr(F,l)(e),M=V&&L&&((p=F==null?void 0:F.frilansInntektValues)==null?void 0:p.fastsattBelop),U=O&&L&&e.arbeidsgiverId&&!!rs(F==null?void 0:F.arbeidstakerInntektValues,e.arbeidsgiverId),re=_&&L&&((y=F==null?void 0:F.dagpengerInntektValues)==null?void 0:y.fastsattBelop),J=H&&L&&((b=F==null?void 0:F.selvstendigNæringsdrivendeInntektValues)==null?void 0:b.fastsattBelop),ie=C&&L&&((f=F==null?void 0:F.militærEllerSivilInntektValues)==null?void 0:f.fastsattBelop),Ee=V&&L&&!((c=F==null?void 0:F.frilansInntektValues)!=null&&c.fastsattBelop)||O&&L&&e.arbeidsgiverId&&!rs(F==null?void 0:F.arbeidstakerInntektValues,e.arbeidsgiverId)||_&&L&&!((E=F==null?void 0:F.dagpengerInntektValues)!=null&&E.fastsattBelop)||H&&L&&!((j=F==null?void 0:F.selvstendigNæringsdrivendeInntektValues)!=null&&j.fastsattBelop)||C&&L&&!((R=F==null?void 0:F.militærEllerSivilInntektValues)!=null&&R.fastsattBelop),_e=M||U||re||J||ie,We=Rn(F),Xe=ij(l)(e),X=gh(o),Q=e.arbeidsperiodeFom||e.arbeidsperiodeTom,me=()=>U&&F.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${S}.arbeidstakerInntektValues.${Ri(F.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:M?`vurderFaktaBeregningForm.${S}.frilansInntektValues.fastsattBelop`:re?`vurderFaktaBeregningForm.${S}.dagpengerInntektValues.fastsattBelop`:J?`vurderFaktaBeregningForm.${S}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:ie?`vurderFaktaBeregningForm.${S}.militærEllerSivilInntektValues.fastsattBelop`:"";return u.jsxs(P.Row,{children:[u.jsx(P.DataCell,{children:u.jsx(je,{size:"small",name:`${g}.andel`,className:we.storBredde,readOnly:!0})}),u.jsx(P.DataCell,{children:n&&Q&&e.arbeidsperiodeFom&&u.jsx(fv,{value:u.jsx(Ye,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!We&&u.jsx(P.DataCell,{align:"right",children:u.jsxs("div",{className:we.inntekt,children:[u.jsx("div",{className:_e?we.inntektOldStrikethrough:we.inntektOld,children:Ee?uh():u.jsx(je,{size:"small",name:`${g}.belopReadOnly`,className:we.mediumBredde,parse:De,readOnly:!0})}),_e&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:we.inntektNew,children:u.jsx(je,{size:"small",name:me(),className:we.mediumBredde,parse:De,readOnly:!0})}),u.jsx(gv,{title:"Endret av saksbehandler",className:we.saksbehandlerIcon})]})]})}),We&&u.jsx(P.DataCell,{align:"right",className:we.rightAlignInput,children:u.jsx(je,{size:"small",label:T.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${g}.fastsattBelop`,parse:De,className:we.mediumBredde,validate:m(e)?[Z,sn(178956970)]:[],hideLabel:!0})}),r&&u.jsx(P.DataCell,{align:"right",children:u.jsx(je,{size:"small",name:`${g}.refusjonskrav`,className:we.litenBredde,readOnly:!0,parse:De})}),u.jsx(P.DataCell,{align:"right",children:u.jsx(fs,{label:T.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${g}.inntektskategori`,className:we.storBredde,selectValues:oh(X),validate:s?[]:[Z],readOnly:s||!Xe,size:"small",hideLabel:!0})}),t&&u.jsx(P.DataCell,{children:u.jsx(ae,{icon:u.jsx(Qn,{"aria-hidden":!0,className:we.slettIkon}),onClick:()=>i(),type:"button",variant:"tertiary"})})]})},mh=(e,n,r)=>{let t=0;return e.forEach(s=>{var i,l,o,g,m,p;let y;if(Nr(n,r)(s)){const b=Ss(s),f=qs(s),c=Hk(s),E=Ck(s),j=zk(s);s.fastsattBelop&&Rn(n)?y=s.fastsattBelop:b&&(i=n==null?void 0:n.frilansInntektValues)!=null&&i.fastsattBelop?y=n.frilansInntektValues.fastsattBelop:f&&s.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[Ri(n.arbeidstakerInntektValues,s.arbeidsgiverId)])!=null&&o.fastsattBelop?y=n.arbeidstakerInntektValues[Ri(n.arbeidstakerInntektValues,s.arbeidsgiverId)].fastsattBelop:c&&(g=n==null?void 0:n.dagpengerInntektValues)!=null&&g.fastsattBelop?y=n.dagpengerInntektValues.fastsattBelop:E&&(m=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&m.fastsattBelop?y=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:j&&(p=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&p.fastsattBelop?y=n.militærEllerSivilInntektValues.fastsattBelop:s.fastsattBelop&&!Rn(n)?y=0:y=s.fastsattBelop}else y=s.belopReadOnly;t+=y?fe(y):0}),t>0?t:0},ph=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:s,getValues:i}=Te(),l=Y.useContext(Se),o=i(`vurderFaktaBeregningForm.${l}`),g=zr({control:s,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),m=g?mh(g,o,t):0;return u.jsxs(P.Row,{children:[u.jsx(P.DataCell,{children:u.jsx(B,{as:"p",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&u.jsx(P.DataCell,{}),u.jsx(P.DataCell,{align:"right",children:u.jsx("div",{className:we.readOnlyContainer,children:u.jsx(B,{as:"p","data-testid":"sum",className:r?we.readOnlyContent:"",size:"small",children:G(m)})})}),n&&u.jsx(P.DataCell,{}),u.jsx(P.DataCell,{})]})},nm=(e,n)=>{var r;const t=(r=e.find(({kode:s})=>s===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},vh=e=>({andel:nm(e,ge.DAGPENGER),aktivitetStatus:ge.DAGPENGER,fastsattBelop:"",inntektskategori:Is.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),yh=e=>({andel:nm(e,ge.MILITAER_ELLER_SIVIL),aktivitetStatus:ge.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:Is.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),fh=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,Ni=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},qi=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},bh=(e,n)=>()=>{n(e)},ch=(e,n,r)=>u.jsx(ph,{readOnly:n,skalVisePeriode:qi(e),skalViseRefusjon:Ni(e),beregningsgrunnlag:r},"summaryRow"),jh=(e,n)=>{let r=-1;return e.forEach((t,s)=>{t.aktivitetStatus===n&&(r=s)}),r},rm=(e,n,r,t,s,i,l)=>{const o=jh(e,n);if(o!==-1){const g=e[o];t(g)&&i(o)}o===-1&&r&&l({...s})},kg=e=>e===ge.FRILANSER,mg=e=>e===ge.ARBEIDSTAKER,pg=e=>e===ge.DAGPENGER,vg=e=>e===ge.SELVSTENDIG_NAERINGSDRIVENDE,yg=e=>e===ge.MILITAER_ELLER_SIVIL,hh=(e,n,r,t,s,i)=>{rm(e,ge.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,vh(r),s,i)},Ah=(e,n,r,t,s,i)=>{rm(e,ge.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,yh(r),s,i)},Ih=(e,n)=>mj(e,n)??null,Th=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?uj(t,r)||(Rn(e)?Ih(t,r):null):void 0},At=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var s,i;const{getValues:l,control:o,formState:g}=Te(),{errors:m}=g,p=Y.useContext(Se),y=`vurderFaktaBeregningForm.${p}.inntektFieldArray`,{fields:b,remove:f,append:c,update:E}=tn({control:o,name:y}),j=zr({control:o,name:`vurderFaktaBeregningForm.${p}`}),R=zr({control:o,name:`vurderFaktaBeregningForm.${p}.vurderbesteberegningField`}),T=zr({control:o,name:`vurderFaktaBeregningForm.${p}.vurderMilitær`}),N=W(),S=h.useCallback(()=>Nr(j,r),[j,r]);h.useEffect(()=>{const M=l(`vurderFaktaBeregningForm.${p}.inntektFieldArray`),U=t[kn.AKTIVITET_STATUS];M&&(Ah(M,!!T,U,S,f,c),hh(M,!!R,U,n,f,c))},[R,T,n]);const F=(M,U)=>{E(M,{...b[M],kanRedigereInntekt:U})};h.useEffect(()=>{b.forEach((M,U)=>{const re=M.kanRedigereInntekt,J=Nr(j,r)(M);!(!R&&!n&&M.lagtTilAvSaksbehandler)&&re!==J&&F(U,J)})},[j]);const V=(i=(s=m==null?void 0:m.vurderFaktaBeregningForm)==null?void 0:s[p])==null?void 0:i.inntektFieldArray,_=Th(j,V,N),H=`${y}.skjemagruppe`,C=ys(H,_??void 0),O=r.faktaOmBeregning;if(!O)return null;const L=b.map((M,U)=>u.jsx(kh,{field:M,skalVisePeriode:qi(b),skalViseRefusjon:Ni(b),skalViseSletteknapp:fh(U,b,e),readOnly:e,removeAndel:bh(U,f),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${y}.${U}`,skalFastsetteInntektForAndel:Xk(j,O,r)},M.id));return L.length===0?null:(L.push(ch(b,e,r)),u.jsxs(ne,{gap:"2",children:[u.jsxs(P,{size:"small",children:[u.jsx(P.Header,{children:u.jsx(P.Row,{children:dh(qi(b),Ni(b)).map(M=>{const U=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(M);return u.jsx(P.HeaderCell,{scope:"col",align:U?"right":"left",children:u.jsx(B,{size:"small",as:"span",children:u.jsx(k,{id:M})})},M)})})}),u.jsx(P.Body,{children:L})]}),C&&u.jsx(at,{children:C})]}))};At.transformValues=(e,n,r,t,s,i,l)=>{if(!e)return[];const o=g=>{const m=l&&g.fastsattBelop||kg(g.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||mg(g.aktivitetStatus)&&g.arbeidsgiverId&&rs(r,g.arbeidsgiverId)||pg(g.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||vg(g.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||yg(g.aktivitetStatus)&&(i==null?void 0:i.fastsattBelop)||g.fastsattBelop;return{andelsnr:g.andelsnr,fastsattBelop:fe(m),inntektskategori:g.inntektskategori,nyAndel:g.nyAndel,lagtTilAvSaksbehandler:g.lagtTilAvSaksbehandler,aktivitetStatus:g.aktivitetStatus,arbeidsforholdId:g.arbeidsforholdId,arbeidsgiverId:g.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:g})=>g).filter(({fastsattBelop:g,aktivitetStatus:m,arbeidsgiverId:p})=>g!==null&&g!==""||kg(m)&&(n==null?void 0:n.fastsattBelop)||mg(m)&&p&&rs(r,p)||pg(m)&&(t==null?void 0:t.fastsattBelop)||vg(m)&&(s==null?void 0:s.fastsattBelop)||yg(m)&&(i==null?void 0:i.fastsattBelop)).map(o)};At.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>Ti(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:Rh}=D,Eh="erKravGyldig_",Pl=e=>Eh+e,Nh=(e,n,r,t)=>e.map(s=>{const{arbeidsgiverIdent:i}=s,l=r[i],o=l?Ln(l):i,g=W();return u.jsx(Y.Fragment,{children:u.jsx(qe,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${Pl(i)}`,validate:[Z],isReadOnly:n,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:pn})},i)}),It=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=Y.useContext(Se),s=n==null?void 0:n.refusjonskravSomKommerForSentListe;return s?u.jsx(u.Fragment,{children:Nh(s,e,r,t)}):null};It.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[Pl(r)]}))};It.buildInitialValues=(e,n)=>{const r={};return!e.includes(Rh)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:s})=>{r[Pl(t)]=s}),{...r})};const qh=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===ml.KUNSTIG))!==void 0},fg=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},Sh=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},Ph=(e,n,r,t,s)=>{const i=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!i.map(g=>g).includes(D.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!i.map(g=>g).includes(D.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(g=>g.andelsnr&&!s.includes(g.andelsnr)).filter(g=>jk(g,t,g.arbeidsforholdId)||qh(g,t)||Ub(g,r,e));l.forEach(g=>s.push(fg(g.andelsnr)));const o=l.map(g=>({andelsnr:fg(g.andelsnr),fastsattBeløp:fe(g.fastsattBelop),inntektskategori:Sh(g.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[D.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},bg=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},xh=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(s=>s).includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const s=e.filter(i=>i.andelsnr&&!r.includes(i.andelsnr)).filter(i=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(i.andelsnr)).map(i=>({andelsnr:bg(i.andelsnr),arbeidsinntekt:i.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const i=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});s.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:bg(i==null?void 0:i.fastsattBelop)})}if(s.forEach(i=>r.push(i.andelsnr)),s.length>0)return{faktaOmBeregningTilfeller:[D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:s}}}return{faktaOmBeregningTilfeller:[]}},gi=e=>e==null?void 0:e.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),cg=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:s,kodeverkSamling:i})=>{var l,o,g,m,p,y,b,f,c;const{getValues:E}=Te(),j=Y.useContext(Se),R=E(`vurderFaktaBeregningForm.${j}`),T=E([`vurderFaktaBeregningForm.${j}.vurderMottarYtelseValues.${tr()}`,`vurderFaktaBeregningForm.${j}.${In}`]),N=()=>{var X;if(T.includes(!0))return!0;const Q=E([`vurderFaktaBeregningForm.${j}.${Ze}`]).includes(!0),me=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(Re=>Re.aktivitetStatus===ge.FRILANSER);return Q&&me},S=()=>{var X;const Q=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE);return E([`vurderFaktaBeregningForm.${j}.${Ze}`]).includes(!0)&&Q},F=()=>{var X;const Q=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.MILITAER_ELLER_SIVIL);return E([`vurderFaktaBeregningForm.${j}.${Ze}`]).includes(!0)&&Q},V=E([`vurderFaktaBeregningForm.${j}.${Er}`,`vurderFaktaBeregningForm.${j}.${Ze}`]),_=V.includes(!0),H=E([`vurderFaktaBeregningForm.${j}.${Vn}`]).includes(!0),C=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,O=(m=(g=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:g.arbeidstakerAndelerUtenIM)==null?void 0:m.filter(X=>{const Q=E(`vurderFaktaBeregningForm.${j}.vurderMottarYtelseValues`);return Q==null?void 0:Q[mr(X)]}),L=(y=(p=e.faktaOmBeregning)==null?void 0:p.andelerForFaktaOmBeregning.filter(X=>X.aktivitetStatus===ge.ARBEIDSTAKER))==null?void 0:y.filter(X=>Nr(R,e)(Ti(X,s,i))),M=(b=gi(t)&&_?C==null?void 0:C.filter(X=>!(L!=null&&L.find(Q=>{var me,Re;return((me=Q.arbeidsforhold)==null?void 0:me.arbeidsgiverIdent)===((Re=X.arbeidsforhold)==null?void 0:Re.arbeidsgiverIdent)}))):C)==null?void 0:b.filter(X=>Nr(R,e)(Ti({...X,lagtTilAvSaksbehandler:!1},s,i))),U=E(`vurderFaktaBeregningForm.${j}.${Ze}`),re=`vurderFaktaBeregningForm.${j}.frilansInntektValues.fastsattBelop`,J=`vurderFaktaBeregningForm.${j}.dagpengerInntektValues.fastsattBelop`,ie=`vurderFaktaBeregningForm.${j}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,Ee=`vurderFaktaBeregningForm.${j}.militærEllerSivilInntektValues.fastsattBelop`,_e=(c=(f=e==null?void 0:e.faktaOmBeregning)==null?void 0:f.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:c.some(X=>!!X.inntektPrMnd),We=X=>{var Q,me,Re,on;const he=(Q=X.arbeidsforhold)!=null&&Q.arbeidsgiverIdent?(me=s[X.arbeidsforhold.arbeidsgiverIdent])==null?void 0:me.navn:void 0;return E(`vurderFaktaBeregningForm.${j}.${Er}`)&&V.filter(Oe=>Oe===!0).length===1?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${he} (${(Re=X.arbeidsforhold)==null?void 0:Re.arbeidsgiverIdent})`}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${he} (${(on=X.arbeidsforhold)==null?void 0:on.arbeidsgiverIdent})`}})},Xe=()=>{const X=T.filter(Re=>Re===!0).length>1,Q=E([`vurderFaktaBeregningForm.${j}.${In}`]).includes(!0),me=E([`vurderFaktaBeregningForm.${j}.${Ze}`]).includes(!0);return gi(t)||X||me?u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):E(`vurderFaktaBeregningForm.${j}.vurderMottarYtelseValues.${tr()}`)?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):Q?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:u.jsx("br",{})}})})]})})]}):null};return u.jsxs(ne,{gap:"8",children:[gi(t)&&u.jsxs(u.Fragment,{children:[u.jsxs(ne,{gap:"1",children:[u.jsx(B,{children:u.jsx(k,{id:_e?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:_e?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:u.jsx("br",{})}})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})})]}),M==null?void 0:M.map(X=>{var Q;return u.jsx(Jr,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:s},(Q=X.arbeidsforhold)==null?void 0:Q.arbeidsgiverIdent)})]}),N()&&u.jsx(vn,{name:re,readOnly:n,isAksjonspunktClosed:r,label:Xe()}),_||H?L==null?void 0:L.filter(X=>{var Q;return H&&!_?((Q=X.arbeidsforhold)==null?void 0:Q.arbeidsforholdType)===gr.ETTERLONN_SLUTTPAKKE:!0}).map(X=>{var Q;return u.jsx(Jr,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,label:We(X),arbeidsgiverOpplysningerPerId:s},(Q=X.arbeidsforhold)==null?void 0:Q.arbeidsgiverIdent)}):O==null?void 0:O.map(X=>{var Q;return u.jsx(Jr,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,label:We(X),arbeidsgiverOpplysningerPerId:s},(Q=X.arbeidsforhold)==null?void 0:Q.arbeidsgiverIdent)}),U&&u.jsx(vn,{name:J,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})}),S()&&u.jsx(vn,{name:ie,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})}),F()&&u.jsx(vn,{name:Ee,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})},Fh=e=>!e.includes(D.FASTSETT_BG_KUN_YTELSE),Bh=(e,n,r,t)=>u.jsx(At,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),Tt=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:s,kodeverkSamling:i,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:g,arbeidsgiverOpplysningerPerId:m,vilkarsperiodeSkalVurderesIBehandlingen:p})=>{const{getValues:y}=Te(),b=Y.useContext(Se),f=y(`vurderFaktaBeregningForm.${b}`),c=h.useMemo(()=>Wk(f),[f,t,s]),E=h.useMemo(()=>Fh(r),[r]),j=()=>{const R=[],T=[];let N=!1;const{faktaOmBeregning:S}=t;return!S||(r.includes(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(N=!0,T.push(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),R.push(u.jsx(Y.Fragment,{children:u.jsx(ct,{readOnly:e,faktaOmBeregning:S,arbeidsgiverOpplysningerPerId:m})},D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(D.VURDER_SN_NY_I_ARBEIDSLIVET)&&(N=!0,T.push(D.VURDER_SN_NY_I_ARBEIDSLIVET),R.push(u.jsx(Y.Fragment,{children:u.jsx(bt,{readOnly:e})},D.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(D.VURDER_MILITÆR_SIVILTJENESTE)&&(N=!0,T.push(D.VURDER_MILITÆR_SIVILTJENESTE),R.push(u.jsx(Y.Fragment,{children:u.jsx(jt,{readOnly:e})},D.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(N=!0,T.push(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),R.push(u.jsx(Y.Fragment,{children:u.jsx(It,{readOnly:e,arbeidsgiverOpplysningerPerId:m,faktaOmBeregning:S})},D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(D.VURDER_LONNSENDRING)&&(N=!0,T.push(D.VURDER_LONNSENDRING),R.push(u.jsx(Y.Fragment,{children:u.jsx(ut,{readOnly:e})},D.VURDER_LONNSENDRING))),r.includes(D.VURDER_ETTERLONN_SLUTTPAKKE)&&(N=!0,T.push(D.VURDER_ETTERLONN_SLUTTPAKKE),R.push(u.jsx(Y.Fragment,{children:u.jsx(vt,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},D.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(D.VURDER_NYOPPSTARTET_FL)&&(N=!0,T.push(D.VURDER_NYOPPSTARTET_FL),R.push(u.jsx(Y.Fragment,{children:u.jsx(kt,{readOnly:e})},D.VURDER_NYOPPSTARTET_FL))),r.includes(D.VURDER_BESTEBEREGNING)&&!r.includes(D.FASTSETT_BG_KUN_YTELSE)&&(N=!0,T.push(D.VURDER_BESTEBEREGNING),R.push(u.jsx(Y.Fragment,{children:u.jsx(gt,{readOnly:e,erOverstyrt:c})},D.VURDER_BESTEBEREGNING))),(r.includes(D.VURDER_MOTTAR_YTELSE)||r.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(N=!0,T.push(D.VURDER_MOTTAR_YTELSE),R.push(u.jsx(Y.Fragment,{children:u.jsx(ht,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:m})},D.VURDER_MOTTAR_YTELSE))),!p)?null:N?e?u.jsxs(u.Fragment,{children:[R.map((F,V)=>u.jsx(ne,{gap:"8",children:F},T[V])),u.jsx(cg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:i}),g()]}):u.jsx(Jj,{children:u.jsxs(ne,{gap:"4",children:[R.map((F,V)=>u.jsx(ne,{gap:"8",children:F},T[V])),!Rn(f)&&u.jsx(cg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:i}),g()]})}):Rn(f)?g():null};return u.jsxs(ne,{gap:"8",children:[u.jsx(fl,{tabell:Bh(e,t,i,c),skalViseTabell:E,readOnly:e,erOverstyrer:l,avklaringsbehov:s,updateOverstyring:o,erOverstyrt:c},"inntektstabell"),j()]})};Tt.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const s=e.andelerForFaktaOmBeregning;return s.length===0?{}:{[Uk]:At.buildInitialValues(s,r,t),...fl.buildInitialValues(n)}};const Hn=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},_h=e=>{if(!e)throw new Error("Forventer andelsnr");return e},Oh=(e,n,r,t)=>{if(Rn(e)){const s=r.filter(i=>!t.includes(_h(i.andelsnr))).filter(i=>i.fastsattBelop!=null).map(i=>({andelsnr:i.andelsnr,nyAndel:!!i.nyAndel,aktivitetStatus:i.aktivitetStatus,lagtTilAvSaksbehandler:i.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:i.fastsattBelop,inntektskategori:i.inntektskategori}}));return{fakta:n,overstyrteAndeler:s}}return{fakta:n}},Dh=(e,n,r,t,s)=>{const i=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(i.length>0){l=Hn(l,Db(t)(e,n));const o=e[Ze]===!0;l=Hn(l,kt.transformValues(e,o?null:n,t,r)),l=Hn(l,vt.transformValues(e,o?null:n,t,r)),l=Hn(l,ut.transformValues(e,t)),l=Hn(l,ht.transformValues(e,o?null:n,t,s,r)),l=Hn(l,xh(o?null:n,t,r)),l=Hn(l,Ph(e,o?null:n,t,s,r))}return l};Tt.transformValues=(e,n)=>r=>{const t=At.transformValues(r[Uk],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),s=[],i=Dh(r,t,s,e,n);return Oh(r,i,t,s)};const{VURDER_FAKTA_FOR_ATFL_SN:wh}=Ae,jg=e=>{var n;return((n=Un(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},hg=e=>{var n;return((n=Un(e))==null?void 0:n.kunYtelse)||void 0},Ag=e=>{var n;return((n=Un(e))==null?void 0:n.vurderMottarYtelse)||void 0},Vh=e=>{var n;return((n=Un(e))==null?void 0:n.vurderBesteberegning)||void 0},Mh=e=>{var n;return((n=Un(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},Gh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>{const{avklaringsbehov:m}=r,p=El(r),y=Un(r),b=[];return Fj(b,p,e,n,y,t,o),b.push(u.jsx(Y.Fragment,{children:u.jsx(Tt,{readOnly:e,isAksjonspunktClosed:n,tilfeller:p,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,avklaringsbehov:m,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:i,vilkarsperiodeSkalVurderesIBehandlingen:g})},"VurderOgFastsettATFL")),b},Lh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>u.jsx("div",{children:Gh({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g}).map(m=>m)}),Kh=(e,n)=>r=>Bj(r,e.kunYtelse,n),$h=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(D.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...bt.transformValues(n)}},Uh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...ct.transformValues(r,e)}},Yh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(D.VURDER_MILITÆR_SIVILTJENESTE),{...e,...jt.transformValues(n)}},Hh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...It.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},Ch=(e,n,r,t,s)=>(i,l)=>{let o={...i};return e.forEach(g=>{g===D.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),g===D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),g===D.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),g===D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=s(o,l))}),o},zh=(e,n,r)=>t=>e.includes(D.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},Jh=(e,n,r,t,s)=>{const i=zh(e,Kh(t,e),Tt.transformValues(t,s))(n);return{fakta:Ch(e,$h,Uh(r),Yh,Hh(t))(i.fakta,n),overstyrteAndeler:i.overstyrteAndeler}},Wh=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:s}=e;return Jh(n,e,r,t,s)},Xh=e=>e?e.find(n=>n.definisjon===wh):void 0,Zh=(e,n,r)=>{const t=El(e),s=Un(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:s,kortvarigeArbeidsforhold:jg(e),vurderMottarYtelse:Ag(e),kunYtelse:hg(e),tidsbegrensetValues:ct.buildInitialValues(jg(e)),vurderMottarYtelseValues:ht.buildInitialValues(Ag(e),t),arbeidstakerInntektValues:Jr.buildInitialValues(s.andelerForFaktaOmBeregning),frilansInntektValues:vn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.FRILANSER),dagpengerInntektValues:vn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.DAGPENGER),selvstendigNæringsdrivendeInntektValues:vn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:vn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.MILITAER_ELLER_SIVIL),vurderRefusjonValues:It.buildInitialValues(t,Mh(e)),...jt.buildInitialValues(s),...bt.buildInitialValues(e),...ut.buildInitialValues(e),...kt.buildInitialValues(e),...vt.buildInitialValues(e,Xh(e.avklaringsbehov)),...gt.buildInitialValues(e.avklaringsbehov,Vh(e),t,gg(e)),...Tt.buildInitialValues(s,gg(e),r,n),..._j(hg(e),t,s.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:Si,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Pi}=Ae,is=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Qh=(e,n)=>e||is(Si,n),Ig=(e,n)=>{const r=e[Rr];if(n&&!r&&is(Pi,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!Qh(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...Wh(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},eA=(e,n=!0)=>{const r=e[yn],t=r.filter(l=>l.erTilVurdering).filter(l=>l[Rr]||is(Pi,l.avklaringsbehov||[])).map(l=>Ig(l,!0)).filter(l=>l),s=r.filter(l=>l.erTilVurdering).filter(l=>(!l[Rr]||n)&&is(Si,l.avklaringsbehov||[])).map(l=>Ig(l,!1)).filter(l=>l),i=[];if(t.length>0){const l=t.filter(({begrunnelse:g})=>g!==null).map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Pi,begrunnelse:l!==""?l:null,grunnlag:t};i.push(o)}if(s.length>0){const l=s.map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Si,begrunnelse:l,grunnlag:s};i.push(o)}return i},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:tm,VURDER_FAKTA_FOR_ATFL_SN:xi}=Ae,sm="begrunnelseFaktaTilfeller",nA=(e,n,r)=>e&&n&&!r,rA=(e,n)=>Xn(xi,n)||Xn(tm,n)?!e:!0,Tg=(e,n)=>{const r=n(`${yn}.${e}`);return Wk(r)},Rg=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},tA=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:i,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:g,submitDisabled:m})=>{const{getValues:p,formState:{errors:y,isDirty:b}}=Te(),f=Y.useContext(bk),c=Y.useContext(Se),E=c===f,{avklaringsbehov:j}=e,R=j.find(S=>S.definisjon===Ae.VURDER_FAKTA_FOR_ATFL_SN||S.definisjon===Ae.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),T=o.vurderesIBehandlingen,N=()=>u.jsx(u.Fragment,{children:(Xn(xi,j)||Xn(tm,j)||Tg(c,p))&&u.jsxs(ne,{gap:"6",children:[(Xn(xi,j)||Tg(c,p))&&u.jsxs(u.Fragment,{children:[u.jsx(Br,{name:`${yn}.${c}.${sm}`,isSubmittable:i,isReadOnly:r||!T,hasBegrunnelse:!!(R!=null&&R.begrunnelse)}),u.jsx(Fn,{ident:R==null?void 0:R.vurdertAv,date:R==null?void 0:R.vurdertTidspunkt})]}),u.jsx(z,{children:u.jsx(Du,{isSubmittable:nA(i&&rA(g,j),!0,Rg(c,y))&&!g,isReadOnly:r||!T,isDirty:b,isSubmitting:m,hasErrors:Rg(c,y)})})]})});return u.jsx("div",{style:{display:E?"block":"none"},children:u.jsx(Lh,{readOnly:r||!T,isAksjonspunktClosed:Zk(j),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>N(),vilkarsperiodeSkalVurderesIBehandlingen:T})},c)},{VURDER_FAKTA_FOR_ATFL_SN:am,AVKLAR_AKTIVITETER:sA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:ls,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:aA}=Ae,iA=e=>e.some(n=>n.definisjon===ls)?e.find(n=>n.definisjon===ls&&n.begrunnelse!==null):e.find(n=>n.definisjon===am&&n.begrunnelse!==null),Eg=(e,n)=>n.some(r=>r.definisjon===e&&As(r.status)),lA=(e,n,r,t)=>({[yn]:e.map(s=>{var i;const l=t.perioder.find(o=>o.periode.fom===s.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${s.vilkårsperiodeFom}`);return{avklaringsbehov:s.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...Br.buildInitialValues((i=iA(s.avklaringsbehov))==null?void 0:i.begrunnelse,sm),...Zh(s,n,r)}})}),dA=[am,ls],oA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},gA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:g,formData:m,vilkar:p,avklarAktiviteterErEndret:y,skalKunneAvbryteOverstyring:b})=>{const f=y,c=e.flatMap(re=>re.avklaringsbehov),E=ze({defaultValues:m||lA(e,t,i,p)}),{control:j,formState:R,trigger:T,getValues:N,watch:S}=E,{fields:F,update:V}=tn({name:yn,control:j}),{errors:_,isSubmitted:H}=R,[C,O]=h.useState(!1),L=S(yn);h.useEffect(()=>{H&&T()},[JSON.stringify(L)]);const M=(re,J)=>{const ie=N(`${yn}.${re}`);V(re,{...ie,[Rr]:J})},U=re=>{Object.keys(_).length===0?(O(!0),o(eA(re,b))):console.error(_)};return Eg(sA,c)||Eg(aA,c)?null:u.jsx(bk.Provider,{value:l,children:u.jsx(Je,{formMethods:E,onSubmit:re=>{U(re)},setDataOnUnmount:g,children:F.map((re,J)=>{const ie=X=>dA.some(Q=>Q===X.definisjon),Ee=X=>X.kanLoses,_e=c.filter(X=>ie(X)&&Ee(X)),We=r||oA(e[J],p.perioder)||Qe(ls,c)&&!s||_e.length===0&&!s,Xe=p.perioder.find(X=>X.periode.fom===e[J].vilkårsperiodeFom);if(!Xe)throw new Error(`Filler ikke vilkårsperiode med fom ${e[J].vilkårsperiodeFom}`);return u.jsx(Se.Provider,{value:J,children:u.jsx(tA,{vilkarsperiode:Xe,beregningsgrunnlag:e[J],erOverstyrer:s,readOnly:We,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:i,submittable:n,updateOverstyring:M,submitDisabled:C,verdiForAvklarAktivitetErEndret:f},re.id)},re.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:uA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:im,AVKLAR_AKTIVITETER:kA}=Ae,mA=[im,kA],pA=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:s,beregningsgrunnlag:i,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:g,arbeidsgiverOpplysningerPerId:m,setFormData:p,formData:y,vilkar:b,skalKunneAvbryteOverstyring:f})=>{const c=n.filter(T=>mA.some(N=>N===T.definisjon)&&T.kanLoses),E=e||(c.length===0||Qe(im,n))&&!l,[j,R]=h.useState(!1);return u.jsxs(ne,{gap:Qe(uA,n)?"0":"2",children:[u.jsx("div",{children:u.jsx(Fb,{readOnly:E,submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:g,aktivtBeregningsgrunnlagIndeks:s,beregningsgrunnlag:i,arbeidsgiverOpplysningerPerId:m,setFormData:p,formData:y&&tt in y?y:void 0,vilkår:b,setAvklarAktiviteterErEndret:R})}),u.jsx(gA,{submitCallback:t,submittable:r,kodeverkSamling:g,beregningsgrunnlag:i,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:m,aktivtBeregningsgrunnlagIndeks:s,setFormData:p,formData:y&&yn in y?y:void 0,vilkar:b,avklarAktiviteterErEndret:j,skalKunneAvbryteOverstyring:f})]})},vA="_tabsContainer_1yyvp_1",yA="_main_1yyvp_9",Ng={tabsContainer:vA,main:yA},fA=$e(gk),{VURDER_FAKTA_FOR_ATFL_SN:lm,AVKLAR_AKTIVITETER:bA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:cA}=Ae,jA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},hA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:s})=>s.fom===r);if(t){const{fom:s,tom:i}=t.periode;return i!==null?`${A(s).format(te)} - ${A(i).format(te)}`:`${A(s).format(te)} - `}return`${A(r).format(te)}`},AA=e=>{if(e){const n=e.some(t=>t.definisjon===lm&&t.kanLoses),r=e.some(t=>t.definisjon===bA&&t.kanLoses);return n||r}return!1},ui=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return AA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},IA=(e,n)=>{var r,t,s,i,l,o;const g=El(e),m=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),p=[],y=[];if(g.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const b=(i=(s=e==null?void 0:e.faktaOmBeregning)==null?void 0:s.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:i.some(f=>!!f.inntektPrMnd);y.push(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:b?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))}if(g.includes(D.VURDER_LONNSENDRING)&&(y.push(D.VURDER_LONNSENDRING),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),m&&g.includes(D.VURDER_MOTTAR_YTELSE)&&(y.push(`${D.VURDER_MOTTAR_YTELSE}_frilans`),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),!m&&g.includes(D.VURDER_MOTTAR_YTELSE)&&(y.push(`${D.VURDER_MOTTAR_YTELSE}_arbeidstaker`),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(D.VURDER_ETTERLONN_SLUTTPAKKE)&&(y.push(D.VURDER_ETTERLONN_SLUTTPAKKE),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){y.push(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const b=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let f="";b.forEach((c,E)=>{var j;const R=(j=c.arbeidsforhold)==null?void 0:j.arbeidsgiverIdent;if(!R)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const T=n[R],N=T?Ln(T):R;E===0?f=N:f=`${f}, ${N}`}),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:f,h3:(...c)=>u.jsx(se,{size:"xsmall",level:"3",children:c})}})}))}if(g.includes(D.VURDER_MILITÆR_SIVILTJENESTE)&&(y.push(D.VURDER_MILITÆR_SIVILTJENESTE),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(D.FASTSETT_BG_KUN_YTELSE)&&(y.push(D.FASTSETT_BG_KUN_YTELSE),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsxs(ne,{gap:"1",children:[u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:u.jsxs(ee,{size:"small",children:[u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),u.jsx(ee.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]})}))),g.includes(D.VURDER_NYOPPSTARTET_FL)&&(y.push(D.VURDER_NYOPPSTARTET_FL),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(D.VURDER_SN_NY_I_ARBEIDSLIVET)&&(y.push(D.VURDER_SN_NY_I_ARBEIDSLIVET),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const b=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let f="";b.forEach((c,E)=>{const{arbeidsgiverIdent:j}=c,R=n[j],T=R?Ln(R):j;E===0?f=T:f=`${f}, ${T}`}),y.push(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),p.push(u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:f,h3:(...c)=>u.jsx(se,{size:"xsmall",level:"3",children:c})}})}))}return p.length>0?u.jsx(ne,{gap:"4",children:p.map((b,f)=>u.jsx(Y.Fragment,{children:b},y[f]))}):u.jsx(Ne,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},TA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:s,erOverstyrer:i,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkar:p,skalKunneAvbryteOverstyring:y=!1})=>{const[b,f]=h.useState(0),c=p==null?void 0:p.perioder;if(h.useEffect(()=>{if(c){const T=e==null?void 0:e.findIndex(N=>ui(N,c));T>-1&&f(T)}},[]),e.length===0||!p)return u.jsx(u.Fragment,{children:"Har ikke beregningsgrunnlag."});const E=e.length>1,j=e[b],R=j.avklaringsbehov;return u.jsx(Le,{value:fA,children:u.jsx("div",{className:Ng.main,children:u.jsxs(ne,{gap:"4",children:[u.jsx(se,{size:"small",level:"2",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Xn(lm,R)||Xn(cA,R))&&!Zk(R)&&u.jsx(u.Fragment,{children:IA(j,o)}),E&&u.jsx("div",{className:Ng.tabsContainer,children:u.jsx(jr,{value:b.toString(),onChange:T=>f(Number(T)),children:u.jsx(jr.List,{children:e.map((T,N)=>u.jsx(jr.Tab,{value:N.toString(),label:hA(T,c),className:ui(T,c)?"harAksjonspunkt":"",icon:ui(T,c)&&u.jsx(xr,{width:20,height:20,color:"Orange"})},T.skjaeringstidspunktBeregning))})})}),u.jsx(pA,{aktivtBeregningsgrunnlagIndeks:b,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:R,submitCallback:r,readOnly:t||jA(e[b],c),submittable:s,erOverstyrer:i,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:m,formData:g,vilkar:p,skalKunneAvbryteOverstyring:y})]})})})},RA=[de.VURDER_FAKTA_FOR_ATFL_SN,de.AVKLAR_AKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],EA=[de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],NA=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),{behandling:t,rettigheter:s}=h.use(xn),i=dr(RA,EA),l=Pn(t),{data:o,isFetching:g}=Sn(l.beregningsgrunnlagOptions(t));return a.jsx(or,{...n,standardPanelProps:i,faktaPanelKode:lr.BEREGNING,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:Ku(t,"BEREGNINGSGRUNNLAG"),children:g?a.jsx(qn,{}):a.jsx(qA,{kodeverkSamling:i.alleKodeverk,vilkar:FA(t==null?void 0:t.vilkår,o),beregningsgrunnlag:BA(o),submitCallback:PA(i.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:s.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:i.readOnly,submittable:i.submittable})})},qA=e=>{const{formData:n,setFormData:r}=Kn();return a.jsx(TA,{...e,formData:n,setFormData:r})},SA=e=>{switch(e){case Ae.AVKLAR_AKTIVITETER:return de.AVKLAR_AKTIVITETER;case Ae.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case Ae.VURDER_FAKTA_FOR_ATFL_SN:return de.VURDER_FAKTA_FOR_ATFL_SN;case Ae.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},PA=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:SA(s.kode),...s.grunnlag[0]}));return e(t)},xA=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),FA=(e,n)=>{if(!e)return null;const r=e.find(s=>s.vilkarType&&s.vilkarType===rr.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[xA(n,r)]}},BA=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];NA.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Ke=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))(Ke||{});function dm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function _A(){if(Sg)return Kr;Sg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Kr.Fragment=n,Kr.jsx=r,Kr.jsxs=r,Kr}var Pg;function OA(){return Pg||(Pg=1,qg.exports=_A()),qg.exports}var v=OA();function Rt(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function pr(e,n){return Rt(e,n).vurderesIBehandlingen}var qr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(qr||{}),Fi=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Fi||{}),pe=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(pe||{});const xl=e=>e==="OPPR";var st=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(st||{}),Et=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(Et||{});const DA=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],wA=e=>DA.some(n=>n===e),VA="_begrunnelseTextField_1wq9u_1",MA="_explanationTextarea_1wq9u_4",GA="_explanationTextareaReadOnly_1wq9u_7",ki={begrunnelseTextField:VA,explanationTextarea:MA,explanationTextareaReadOnly:GA},Fl={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":"Utgangspunktet er at all tilkommet aktivitet med inntekt skal føre til reduksjon i utbetaling. Det kan likevel være feil eller mangler i opplysningene fra AA-registeret. F. eks. internt bytte av org. nummer pga. endret lønns- og personalsystem eller manglende registrert sluttdato i gammel stilling ved overgang til ny stilling. Gjør derfor en konkret vurdering av hvorfor tilkommet aktivitet og inntekt ikke skal føre til reduksjon.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},xg=$e(Fl),LA=cn(3),KA=jn(1500),Nt=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:s=!1,name:i="begrunnelse"})=>{const l=s?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||xg.formatMessage({id:l});return v.jsx(Le,{value:xg,children:(n||r)&&v.jsx("div",{className:ki.begrunnelseTextField,children:v.jsx(rn,{name:i,label:e?"":o,validate:e?[]:[Z,LA,KA,hn],className:e?ki.explanationTextareaReadOnly:ki.explanationTextarea,maxLength:1500,readOnly:e})})})},$A=e=>e&&e.begrunnelse?e.begrunnelse:"";Nt.buildInitialValues=(e,n="begrunnelse")=>({[n]:Wi($A(e))});Nt.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const UA=$e(Fl),YA=(e,n,r)=>!r||n?!0:!e,Ps=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:s})=>e?null:v.jsx(ae,{size:"small",loading:t,disabled:YA(s,t,n),onClick:r||wu,type:r?"button":"submit",children:UA.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Fg(e,n){return n.tom!=null&&!A(n.tom).isBefore(A(e.fom))&&(e.tom==null||!A(n.tom).isAfter(A(e.tom)))}function HA(e,n){return Fg(e,n)||Fg(n,e)}function En(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===Et.UDEFINERT)?!0:!n||n.length===0||n.some(t=>HA(t,e))}var Bg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var _g;function CA(){return _g||(_g=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=s(i,t.call(this,o)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)n.call(i,o)&&i[o]&&(l=s(l,this&&this[o]||o));return l}function s(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Bg)),Bg.exports}var zA=CA();const om=dm(zA),JA="_vurdertIForrigeIcon_1q86k_1",WA={vurdertIForrigeIcon:JA},XA=om.bind(WA),gm=({className:e=""})=>{const n=W();return v.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:XA("vurdertIForrigeIcon",e),children:v.jsx(hs,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},Wr=e=>e?`...${e.substring(e.length-4,e.length)}`:"",qt=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:s,identifikator:i}=e;return s?t?`${r} (${A(t).format(te)})${Wr(n)}`:r:i?`${r} (${i})${Wr(n)}`:r},Bi=(e,n)=>{var r,t;const s=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!s||!n[s])return"";const i=n[s];return i.erPrivatPerson?i.fødselsdato?`${i.navn} (${A(i.fødselsdato).format(te)})${Wr(e.eksternArbeidsforholdRef)}`:`${i.navn}${Wr(e.eksternArbeidsforholdRef)}`:`${i.navn} (${s})${Wr(e.eksternArbeidsforholdRef)}`},um=" - ",km=e=>e==null,ZA=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${um}${r}`},QA=e=>e.inntektskategori&&e.inntektskategori!==Et.UDEFINERT?e.inntektskategori:"",eI=(e,n,r,t)=>{var s,i;if(!e.aktivitetStatus||e.aktivitetStatus===pe.UDEFINERT)return"";if(e.aktivitetStatus===pe.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?qt(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((s=r[qr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var g;return o.kode===((g=e.arbeidsforhold)==null?void 0:g.arbeidsforholdType)}))==null?void 0:s.kode)||""}return n&&e.aktivitetStatus===pe.BRUKERS_ANDEL?"Ytelse":((i=r[qr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:i.navn)||""},nI=e=>km(e)?void 0:e,Og=e=>G(e)||"",rI=(e,n,r)=>e!==void 0?Og(e):r&&!km(n)?Og(n):"",tI=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),sI=(e,n,r,t)=>({andel:eI(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:QA(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===Et.UDEFINERT?void 0:e.inntektskategori}),mm=(e,n,r,t,s)=>{if(n.skalRedigereInntekt){const i=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${s}.fastsattBelop`);return i?fe(i):0}return n.readOnlyBelop?fe(n.readOnlyBelop):0},aI=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),iI=(e,n)=>{var r;const t=e.find(s=>{var i,l;return!!s.arbeidsforhold&&s.arbeidsforhold.arbeidsgiverIdent===((i=n.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent)&&s.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},lI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!aI(t.arbeidsforhold,r)){const s=iI(n,t),i={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:s.beregningsperiodeTom,beregningsperiodeFom:s.beregningsperiodeFom,...t.arbeidsforhold};r.push(i)}}),r},dI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],oI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],gI=(e,n)=>lI(dI(e),oI(n)),uI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],s=e.beregningsgrunnlagPeriode;return gI(t,s)},kI=e=>e?Number(fe(e)):0,mI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),pI=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,vI=(e,n)=>e.some(r=>pI(n,r)),yI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},fI=(e,n,r,t)=>{const s=[];return t.forEach((i,l)=>{if(i.nyAndel&&(i.andelsnrRef||i.andelsnrRef===0)){const o=yI(t,i.andelsnrRef);s.push({erNyAndel:i.nyAndel,aktivitetstatus:i.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else s.push({erNyAndel:i.nyAndel,aktivitetstatus:i.aktivitetStatus,inntektskategori:i.inntektskategori,arbeidsgiverIdent:i.arbeidsgiverId,arbeidsforholdId:i.arbeidsforholdId})}),s},bI=(e,n,r,t,s)=>{const i=fI(e,n,r,t),l=[];let o=!1;return i.forEach(g=>{vI(l,g)&&(o=!0),l.push(g)}),o?mI(s):void 0},cI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,jI=(e,n,r,t,s,i)=>{const l=i.findIndex(({arbeidsforholdId:g,arbeidsgiverId:m})=>g===t.arbeidsforholdId&&m===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${s}.refusjonskrav`);if(l>=0){const g=i[l];cI(t,g)&&(g.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(g.totalRefusjon+=Number(fe(o)))}else{const{refusjonskravFraInntektsmelding:g,arbeidsforholdId:m,arbeidsgiverId:p,eksternArbeidsforholdId:y}=t;let b=0;o!=null&&(b=Number(fe(o))),i.push({arbeidsforholdId:m,eksternArbeidsforholdId:y,arbeidsgiverId:p,refusjonskravFraInntektsmelding:g,totalRefusjon:b})}},hI=(e,n,r,t)=>{const s=[];return t.forEach((i,l)=>{i.arbeidsforholdId!==""&&jI(e,n,r,i,l,s)}),s},AI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),II=(e,n,r,t,s,i)=>{const l=hI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?s[l[0].arbeidsgiverId]:void 0;let g;return o?g=qt(o,l[0].eksternArbeidsforholdId):g=l[0].arbeidsgiverId||"",AI(g,i)}},TI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,RI=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),EI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,NI=(e,n,r)=>e>=Math.round(n)?EI(G(n),r):void 0,pm=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),vm=(e,n,r,t,s)=>e>=Math.round(n)?t(G(n),r,s):void 0,qI=(e,n,r)=>e!==Math.round(n)?TI(G(Math.round(n)),r):void 0,SI=(e,n,r,t,s,i,l)=>{if(!r.andelIArbeid)return!1;const o=s(`FORDEL_BEREGNING_FORM.${e}.${i}.${l}.fastsattBelop`),g=o?fe(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&g<=0?!0:r.andelIArbeid.split(um).filter(m=>Number(m)>0).length>0&&g===0},PI=(e,n,r,t,s,i)=>t.some((l,o)=>SI(e,i,l,s,n,r,o))?RI(i):void 0,xI=(e,n,r,t,s,i)=>{const l=t.map((o,g)=>mm(e,o,r,n,g)).reduce((o,g)=>o+g,0);return s!=null?qI(l,s,i):void 0},Dg=(e,n,r,t,s)=>{const i=s(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return kI(i)},FI=(e,n,r,t,s,i)=>{const l=!!n.find((m,p)=>m.andelIArbeid!=="0.00"&&Dg(e,m,r,p,t)===0),o=n.map((m,p)=>Dg(e,m,r,p,t)).reduce((m,p)=>m+p,0),g=6*s;return l?NI(o,g,i):void 0},ym=(e,n)=>{const r=e.map(t=>{var s;return((s=n[qr.AKTIVITET_STATUS].find(i=>i.kode===t))==null?void 0:s.navn)||""});return r.sort((t,s)=>t.localeCompare(s)),[...new Set(r)].join(", ")},fm=(e,n,r,t,s)=>t.map((i,l)=>i.aktivitetStatus&&!s.includes(i.aktivitetStatus)?0:mm(e,i,r,n,l)).reduce((i,l)=>i+l,0),BI=(e,n,r,t,s,i,l)=>{const o=[pe.ARBEIDSTAKER],g=fm(e,n,r,t,o),m=ym(o,i);return vm(g,s,m,pm,l)},_I=(e,n,r,t,s,i,l)=>{const o=[pe.ARBEIDSTAKER,pe.FRILANSER,pe.DAGPENGER,pe.ARBEIDSAVKLARINGSPENGER],g=t.map(y=>y.aktivitetStatus).filter(y=>!!y&&o.includes(y)),m=fm(e,n,r,t,g),p=ym(g,i);return vm(m,s,p,pm,l)},OI=(e,n,r,t,s,i,l)=>{const o=!!t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===pe.FRILANSER),g=6*i;if(o)return BI(e,n,r,t,g,l,s);if(t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE))return _I(e,n,r,t,g,l,s)},DI="_rightAlignInput_1tnrv_19",wI="_slettIkon_1tnrv_29",VI="_inntektTable_1tnrv_88",MI="_shortLeftAligned_1tnrv_137",GI="_wordwrap_1tnrv_142",LI="_litenBredde_1tnrv_145",KI="_storBredde_1tnrv_148",$I="_benyttCheckbox_1tnrv_154",Ge={rightAlignInput:DI,slettIkon:wI,inntektTable:VI,shortLeftAligned:MI,wordwrap:GI,litenBredde:LI,storBredde:KI,benyttCheckbox:$I},UI=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:G(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),bm=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[qr.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":qt(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},YI=(e,n,r)=>e.map(t=>v.jsx("option",{value:t.andelsnr.toString(),children:bm(t,n,r)},t.andelsnr)),HI=(e,n,r,t)=>{const s=e.map(i=>v.jsx("option",{value:i.andelsnr.toString(),children:bm(i,r,t)},i.andelsnr));return s.push(v.jsx("option",{value:Fi.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},Fi.BRUKERS_ANDEL)),s},CI=e=>e.map(n=>v.jsx("option",{value:n.kode,children:n.navn},n.kode)),cm=e=>e>0&&G(e)||"",zI=(e,n,r,t)=>{let s=0,i=0;for(i;i<r.length;i+=1){const l=r[i],o=fe(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${i}.fastsattBelop`));l.skalRedigereInntekt?s+=o||0:s+=l.readOnlyBelop?o:0}return cm(s)},JI=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(fe(t.beregningsgrunnlagPrAar)):0)}return cm(n)},WI=e=>e.inntektskategori?wA(e.inntektskategori)||Et.FRILANSER===e.inntektskategori:!1,XI=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},ZI=(e,n)=>{var r;const t=Number(n);return(r=e.find(s=>s.andelsnr===t))==null?void 0:r.aktivitetStatus},QI=(e,n,r,t,s)=>{const i=e[n],l=XI(r,t);l&&(i.arbeidsforholdId=l.arbeidsforholdId,i.arbeidsgiverId=l.arbeidsgiverIdent,i.arbeidsperiodeFom=l.startdato,i.arbeidsperiodeTom=l.opphoersdato,i.andelsnrRef=l.andelsnr,i.aktivitetStatus=ZI(e,t),i.nyttArbeidsforhold=l.nyttArbeidsforhold,i.arbeidsforholdType=l.arbeidsforholdType,i.beregningsperiodeTom=l.beregningsperiodeTom,i.beregningsperiodeFom=l.beregningsperiodeFom,s(n,i))},eT=(e,n,r,t,s,i,l)=>v.jsxs(v.Fragment,{children:[!e[n].nyAndel&&v.jsx(je,{name:`${l(n)}.andel`,className:Ge.storBredde,readOnly:!0}),e[n].nyAndel&&v.jsx(fs,{name:`${l(n)}.andel`,className:Ge.storBredde,label:"",selectValues:r,readOnly:t,validate:[Z],onChange:o=>QI(e,n,s,o.target.value,i)})]}),nT=(e,n,r,t)=>n?v.jsx(P.DataCell,{children:v.jsx(Ar,{children:v.jsx(je,{name:`${t}.readOnlyBelop`,className:Ge.litenBredde,parse:De,readOnly:!0,isEdited:!1})})}):v.jsx(P.DataCell,{className:Ge.rightAlignInput,children:v.jsx(Ar,{children:v.jsx(je,{name:`${t}.fastsattBelop`,parse:De,readOnly:e,validate:[Z,sn(178956970)],isEdited:r&&!n,className:Ge.litenBredde})})}),rT=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,tT=(e,n,r,t,s,i,l)=>v.jsxs(P.DataCell,{children:[eT(e,n,r,t,s,i,l),!WI(e[n])&&v.jsx("div",{className:Ge.wordwrap,children:v.jsx(je,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),sT=(e,n)=>e?v.jsx(P.DataCell,{children:v.jsx(je,{name:`${n}.andelIArbeid`,readOnly:!0,className:Ge.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,aT=(e,n,r,t)=>v.jsx(P.DataCell,{className:e||!n[r].skalKunneEndreRefusjon?void 0:Ge.rightAlignInput,children:v.jsx(Ar,{children:v.jsx(je,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:De,className:Ge.litenBredde,validate:n[r].skalKunneEndreRefusjon?[Z,sn(178956970)]:[]})})}),iT=e=>v.jsx(P.DataCell,{children:v.jsx(je,{name:`${e}.beregningsgrunnlagPrAar`,className:Ge.litenBredde,readOnly:!0,parse:De})}),lT=(e,n,r)=>v.jsx(P.DataCell,{className:e?Ge.shortLeftAligned:void 0,children:v.jsx(Ar,{children:v.jsx(fs,{label:"",name:`${n}.inntektskategori`,className:Ge.storBredde,validate:e?[]:[Z],selectValues:CI(r),readOnly:e})})}),dT=(e,n,r,t)=>v.jsx(P.DataCell,{children:rT(n,e,r)&&v.jsx(ae,{icon:v.jsx(Qn,{"aria-hidden":!0,className:Ge.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),oT=(e,n,r)=>v.jsxs(P.Row,{children:[v.jsx(P.DataCell,{children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&v.jsx(P.DataCell,{}),v.jsx(P.DataCell,{}),v.jsx(P.DataCell,{children:v.jsx(B,{size:"small",children:n})}),v.jsx(P.DataCell,{children:v.jsx(B,{size:"small",children:e})}),v.jsx(P.DataCell,{}),v.jsx(P.DataCell,{})]},"bruttoBGSummaryRow"),gT=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var s;return(s=t.perioderMedGraderingEllerRefusjon)==null?void 0:s.some(i=>i.erGradering)})},uT=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:s,kodeverkSamling:i,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:g,periodeFom:m,vilkårperiodeFieldIndex:p,setFieldArrayToRepeat:y,fieldArrayToRepeat:b})=>{const{control:f,watch:c,getValues:E}=Te(),j=`FORDEL_BEREGNING_FORM.${p}.${e}`,{fields:R,append:T,remove:N,update:S}=tn({control:f,name:`FORDEL_BEREGNING_FORM.${p}.${e}`});h.useEffect(()=>{b&&b!==j&&!n&&!r&&E(b).forEach(Q=>{var me;const Re=R.findIndex(on=>on.andel===Q.andel&&(on.inntektskategori===Q.inntektskategori||!on.inntektskategori&&!Q.lagtTilAvSaksbehandler&&!on.lagtTilAvSaksbehandler));if(Re>-1){const on={...R[Re],fastsattBelop:Q.fastsattBelop,refusjonskrav:o?Q.refusjonskrav:(me=R[Re])==null?void 0:me.refusjonskrav,inntektskategori:Q.inntektskategori};S(Re,on)}})},[b]);const F=!!l.aktivitetStatus&&l.aktivitetStatus.some(Q=>Q===pe.KUN_YTELSE),V=uI(l),_=zI(p,e,R,c),H=JI(R),C=gT(l),O=i[qr.INNTEKTSKATEGORI],L=W(),M=F?HI(V,L,i,s):YI(V,i,s),U=Q=>`FORDEL_BEREGNING_FORM.${p}.${e}.${Q}`,re=R.map((Q,me)=>{const Re=n||r;return v.jsxs(P.Row,{children:[tT(R,me,M,Re,V,S,U),sT(C,U(me)),aT(Re,R,me,U),iT(U(me)),nT(n,r,t,U(me)),lT(Re,U(me),O),dT(R,me,Re,N)]},Q.id)});re.push(oT(_,H,C));const J=[],ie=Q=>{Q&&J.push(Q)};!n&&R.some(Q=>!!Q.skalRedigereInntekt||!!Q.skalKunneEndreRefusjon)&&(ie(bI(p,E,e,R,L)),ie(xI(p,E,e,R,g,L)),C&&(ie(PI(p,E,e,R,m,L)),ie(OI(p,E,e,R,L,l.grunnbeløp,i))),o&&(ie(FI(p,R,e,E,l.grunnbeløp,L)),ie(II(p,R,e,E,s,L))));const Ee=`FORDEL_BEREGNING_FORM.${p}.${e}.skjemagruppe`,_e=J.filter(Q=>!!Q),We=_e.length>0?_e[0]:void 0,Xe=ys(Ee,We),X=()=>{y(j===b?"":j)};return v.jsxs("div",{children:[v.jsxs(P,{className:Ge.inntektTable,children:[v.jsx(P.Header,{children:v.jsxs(P.Row,{children:[v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Andel"})}),C&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.AndelIArbeid"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Refusjonskrav"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Beregningsgrunnlag"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Fordeling"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Inntektskategori"})})]})}),v.jsx(P.Body,{children:re})]}),!n&&!r&&v.jsx(ae,{icon:v.jsx(Zi,{"aria-hidden":!0}),onClick:()=>T(UI(r)),type:"button",variant:"secondary",children:v.jsx(ke,{children:v.jsx(k,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&v.jsx(_v,{className:Ge.benyttCheckbox,checked:j===b,onChange:X,children:"Benytt for alle perioder"}),Xe&&v.jsx(at,{children:Xe})]})},kT="_statusOk_1qsx9_1",jm={statusOk:kT},mT=om.bind(jm),mi=e=>e?A(e,Fe).format(te):"-",pT=(e,n)=>n?v.jsx(B,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:mi(e),tom:mi(n)}})}):v.jsx(B,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:mi(e)}})}),vT=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},yT=e=>{const n=vT(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},fT=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>yT(t)).reduce((t,s)=>t+s,0)},Bl=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:s,beregningsgrunnlag:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:g,fordelingsperiode:m,fieldIndex:p,setFieldArrayToRepeat:y,fieldArrayToRepeat:b})=>m.fom?v.jsx(Pe,{className:e?jm.statusOk:mT(`fordelBeregningsgrunnlagPeriode--${m.fom}`),children:v.jsxs(Pe.Item,{open:t,children:[v.jsxs(Pe.Header,{onClick:()=>s(m.fom),children:[pT(m.fom,m.tom)," ",n?v.jsx(gm,{}):""]}),v.jsx(Pe.Content,{children:v.jsx(uT,{fieldName:g,readOnly:e,sumIPeriode:fT(i.beregningsgrunnlagPeriode,m.fom),skalIkkeRedigereInntekt:!m.skalRedigereInntekt,skalKunneEndreRefusjon:!!m.skalKunneEndreRefusjon,periodeFom:m.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:i,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:p,setFieldArrayToRepeat:y,fieldArrayToRepeat:b})})]})}):null,bT=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},cT=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!A(t).isBefore(A(n))},wg=e=>{var n,r,t,s;if(!e)return;const i=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((s=e.arbeidsforhold)==null?void 0:s.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return G(e.besteberegningPrAar+i-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return G(e.overstyrtPrAar+i-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return G(e.beregnetPrAar+i-l)},jT=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?G(e.fordelingForrigeBehandlingPrAar):"")||"";Bl.buildInitialValues=(e,n,r,t,s,i)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=bT(l,n);return{...sI(l,t,s,i),...tI(l),andelIArbeid:ZA(l.andelIArbeid||[]),fordelingForrigeBehandling:jT(l),fastsattBelop:rI(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:wg(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?G(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||cT(o,r),beregningsgrunnlagPrAar:wg(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:nI(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const hm="fordelBGPeriode",_l=e=>hm+e,hT=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?fe(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:fe(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),ds=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),AT=e=>ds(e,st.GRADERING)||ds(e,st.GRADERING_OPPHOERER),IT=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},Am=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function Vg(e){const n=A(e.beregningsgrunnlagPeriodeFom).day()===6,r=A(e.beregningsgrunnlagPeriodeFom).day()===0,t=A(e.beregningsgrunnlagPeriodeTom).day()===6,s=A(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||s)}const TT=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function RT(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>TT(r))}function ET(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const NT=(e,n)=>e.some(r=>{const t=n.find(s=>s.aktivitetStatus===r.aktivitetStatus&&s.inntektskategori===r.inntektskategori&&Am(s,r));return!!(t===void 0||ET(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),qT=(e,n,r,t)=>{const s=e.fordelBeregningsgrunnlagAndeler||[],i=n.fordelBeregningsgrunnlagAndeler||[];if(s.length!==i.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const g=Vg(r),m=Vg(o),p=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(g||m)&&!p?!0:!NT(s,i)},ST=(e,n)=>e.some(r=>{const t=n.find(s=>s.aktivitetStatus===r.aktivitetStatus&&s.inntektskategori===r.inntektskategori&&Am(s,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),PT=(e,n,r,t,s)=>{var i,l;const o=t[t.length-1];return((i=r.fordelBeregningsgrunnlagAndeler)==null?void 0:i.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||AT(e)||ST(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||En(r,s)&&!En(o,s)?!1:ds(e,st.ARBEIDSFORHOLD_AVSLUTTET)?IT(e,n):ds(e,st.ENDRING_I_AKTIVITETER_SØKT_FOR)?qT(r,o,e,n):!0},xT=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},FT=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const s=e.find(i=>i.beregningsgrunnlagPeriodeFom===t.fom);if(s){if(PT(s,e,t,r,n))return xT(r,t),r;r.push({...t})}return r},BT=e=>({fom:n,tom:r})=>(A(n).isSame(A(e.fom))||A(n).isAfter(e.fom))&&(e.tom===null||A(r).isSame(A(e.tom))||A(r).isBefore(A(e.tom))),_T=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},OT=e=>({andelsnr:_T(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:hT(e)}),DT=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},wT=(e,n,r,t)=>t.filter(BT(r)).filter(s=>s.skalRedigereInntekt||s.skalKunneEndreRefusjon).map(s=>({andeler:e[_l(n)].map(OT),fom:DT(s.fom),tom:s.tom})),Ol=(e,n,r)=>e.filter(t=>RT(t)).reduce(FT(n,r),[]),VT="_lessPadding_xotc9_1",MT={lessPadding:VT},GT=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},LT=(e,n,r,t)=>{const s=[],i=Ol(e,r,t);for(let l=0;l<i.length;l+=1){const{skalRedigereInntekt:o}=i[l];o&&En(i[l])&&wT(n,l,i[l],e).forEach(g=>s.push(g))}return s};function KT(e,n){return En(n,e.forlengelseperioder)}function $T(e,n){var r;return!En(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const St=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[g,m]=h.useState([]),[p,y]=h.useState("");h.useEffect(()=>{const f=n.filter(c=>KT(s,c)).filter(c=>c.skalKunneEndreRefusjon||c.skalRedigereInntekt).filter(c=>!!c.fom).map(c=>c.fom);m(f)},[n]);const b=f=>{if(g.includes(f)){const c=g.filter(E=>E!==f);m(c)}else{const c=g.map(E=>E);c.push(f),m(c)}};return v.jsx(uv,{className:MT.lessPadding,children:Ol(n,t,s.forlengelseperioder).map((f,c)=>v.jsxs(Y.Fragment,{children:[v.jsx(q,{eightPx:!0}),v.jsx(Bl,{readOnly:e||!En(f,s.forlengelseperioder),erVurdertTidligere:$T(f,s),fordelingsperiode:f,fordelBGFieldArrayName:_l(c),open:g?g.filter(E=>E===f.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:b,beregningsgrunnlag:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:y,fieldArrayToRepeat:p}),v.jsx(q,{eightPx:!0})]},hm+f.fom))})};St.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:LT(n,e,r,t)});St.buildInitialValues=(e,n,r,t)=>{const s={};if(!e)return s;const i=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===pe.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return Ol(e,l,n.forlengelseperioder).forEach((o,g)=>{const m=GT(o,l);s[_l(g)]=Bl.buildInitialValues(o,m,n.skjaeringstidspunktBeregning,i,r,t)}),s};const UT=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},Pt=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})=>{const l=r.beregningsgrunnlagPeriode,o=UT(r);return v.jsx(St,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})};Pt.buildInitialValues=(e,n,r,t)=>St.buildInitialValues(e,n,r,t);Pt.transformValues=(e,n,r,t)=>St.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:YT}=Ke,HT=(e,n)=>n.some(r=>r.definisjon===e),CT=(e,n,r,t)=>{const s=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||s.push(v.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:(...i)=>v.jsx("b",{children:i}),br:v.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),s},zT=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),JT=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:i})=>i!=null).filter(({perioderMedGraderingEllerRefusjon:i})=>zT(i||[])),s=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erSøktYtelse:l})=>l).includes(!0));return CT(n,r,t,s)},WT=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return HT(YT,e.avklaringsbehov)?JT(t):[]},XT=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=WT(n);return e?v.jsx(v.Fragment,{}):v.jsx(ir,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:_i}=Ke,ZT=(e,n)=>n.some(r=>r.definisjon===e),Im=e=>{const n=e.find(r=>r.definisjon===_i);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${_i}`);return n},QT="begrunnelse",Tm=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},eR=(e,n)=>{if(!ZT(_i,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...Pt.transformValues(e,Tm(n),r,n.forlengelseperioder)}},nR=(e,n,r,t)=>{const s=Tm(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...Nt.buildInitialValues(Im(e.avklaringsbehov),QT),...Pt.buildInitialValues(s,e,t,r)}},rR=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})=>{const l=Im(r.avklaringsbehov),o=!xl(l.status),g=Te(),m=g.watch(`FORDEL_BEREGNING_FORM.${i}.begrunnelse`);return v.jsxs(v.Fragment,{children:[v.jsx(XT,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),v.jsx(q,{twentyPx:!0}),v.jsx(Pt,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i}),v.jsx(q,{twentyPx:!0}),v.jsx(Nt,{name:`FORDEL_BEREGNING_FORM.${i}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!m}),v.jsx(Fn,{ident:l.vurdertAv,date:l.vurdertTidspunkt}),v.jsx(q,{twentyPx:!0}),v.jsx(Ps,{isSubmittable:n,isReadOnly:e,isSubmitting:g.formState.isSubmitting,isDirty:g.formState.isDirty})]})},{FORDEL_BEREGNINGSGRUNNLAG:tR}=Ke,os="FORDEL_BEREGNING_FORM",sR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},aR=(e,n,r)=>{const t=e[os].filter(s=>pr(r,s.periode.fom)).map(s=>eR(s,sR(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:tR}};function Rm(e){return e.avklaringsbehov.some(n=>n.definisjon===Ke.FORDEL_BEREGNINGSGRUNNLAG)}const iR=(e,n,r,t)=>({[os]:e.filter(Rm).map(s=>nR(s,Rt(n,s.vilkårsperiodeFom),r,t))}),lR=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:s,vilkårsperioder:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,setFordelingFormIsDirty:p})=>{const y=ze({defaultValues:g!=null&&g.FORDEL_BEREGNING_FORM?g:iR(s,i,o,l)}),{formState:{dirtyFields:b,isSubmitted:f,errors:c,isDirty:E},control:j,trigger:R}=y;h.useEffect(()=>{p(E)},[E]),h.useEffect(()=>{var N;f&&(N=b[os])!=null&&N[e]&&R()},[e]);const{fields:T}=tn({name:os,control:j});return v.jsx(Xi,{errorMessage:"Noe gikk galt ved visning av fordeling",children:v.jsx(Je,{formMethods:y,onSubmit:N=>{Object.keys(c).length===0&&t(aR(N,s,i))},setDataOnUnmount:m,children:T.map(N=>{const S=s.findIndex(F=>F.skjaeringstidspunktBeregning===N.beregningsgrunnlagStp);return v.jsx("div",{style:{display:S===e?"block":"none"},children:v.jsx(rR,{submittable:r,readOnly:n||!pr(i,s[S].vilkårsperiodeFom),beregningsgrunnlag:s[S],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:s.filter(Rm).findIndex(F=>F.skjaeringstidspunktBeregning===N.beregningsgrunnlagStp)})},N.id)})})})},dR=(e,n)=>e.map(r=>v.jsx("div",{children:r&&r.erTildeltRefusjon?v.jsx(I,{children:n}):v.jsx(I,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),oR=e=>{if(!e)return;const n=e.tom===Be?void 0:e.tom;return v.jsx(I,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:Me(e.fom),tom:n?Me(n):""}})})},gR=e=>e.map(n=>v.jsx("div",{children:oR(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),uR=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>v.jsxs(P.Row,{children:[v.jsx(P.DataCell,{children:v.jsx(I,{children:Bi(e,n)})}),v.jsx(P.DataCell,{children:dR(e.tidligereUtbetalinger||[],Bi(e,n))}),v.jsx(P.DataCell,{children:gR(e.tidligereUtbetalinger||[])})]}),kR="_tabellContainer_9a5fi_1",mR={tabellContainer:kR},pR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,vR=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return v.jsx("div",{className:mR.tabellContainer,children:v.jsxs(P,{children:[v.jsx(P.Header,{children:v.jsxs(P.Row,{children:[v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),v.jsx(P.Body,{children:t.map(s=>v.jsx(uR,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:s},pR(s)))})]})})},yR="_bredde_1lhuf_1",fR="_tekstMidtstilt_1lhuf_4",pi={bredde:yR,tekstMidtstilt:fR},bR="REFUSJON_ENDRING_DATO",cR="DELVIS_REFUSJON_FØR_START_BELØP",Em=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,gs=e=>Em(bR,e),Dl=e=>Em(cR,e),jR=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,xt=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:s,vilkårperiodeFieldIndex:i})=>{const l=Bi(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",g=Te().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${gs(e)}`),m=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,p=jR(s,g),y=h.useCallback(f=>v.jsx("b",{children:f}),[]),b=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return v.jsxs(ne,{children:[v.jsx(I,{children:v.jsx(k,{id:o,values:{ag:l,dato:Me(e.nyttRefusjonskravFom),b:y}})}),v.jsxs(z,{gap:"6",children:[v.jsx("div",{className:pi.tekstMidtstilt,children:v.jsx(I,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),v.jsx(er,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${gs(e)}`,isReadOnly:n,validate:n?[]:[Z,Tn,vs(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),b&&!p&&!m&&v.jsxs(z,{gap:"6",children:[v.jsx("div",{className:pi.tekstMidtstilt,children:v.jsx(I,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),v.jsx(je,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${Dl(e)}`,className:pi.bredde,validate:n?[]:[Z,sn(e.maksTillattDelvisRefusjonPrMnd)],parse:De,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};xt.buildInitialValues=e=>{const n={};return n[gs(e)]=e.fastsattNyttRefusjonskravFom||"",n[Dl(e)]=G(e.fastsattDelvisRefusjonPrMnd)||"",n};xt.transformValues=(e,n,r)=>{var t,s;const i=gs(n),l=e[i];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const g=Dl(n);o=fe(e[g])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(s=n.arbeidsgiver)==null?void 0:s.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const Mg="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:hR}=Ke,Nm=e=>e?e.find(n=>n.definisjon===hR):void 0,AR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,IR=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],s=Nm(e.avklaringsbehov);let i={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:s&&s.begrunnelse?s.begrunnelse:void 0};return t.forEach(l=>{i={...i,...xt.buildInitialValues(l)}}),i},TR=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(s=>xt.transformValues(e,s,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},RR=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:s,formSubmittes:i})=>{var l;const o=!r.avklaringsbehov.some(f=>f.definisjon===Ke.VURDER_REFUSJON_BERGRUNN),g=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],m=Nm(r.avklaringsbehov),p=m?xl(m.status):!1,y=Te(),b=y.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.begrunnelse`);return v.jsxs(v.Fragment,{children:[p&&v.jsx(ir,{children:[v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),v.jsx(q,{sixteenPx:!0}),v.jsx(se,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),v.jsx(q,{sixteenPx:!0}),v.jsx(vR,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),v.jsx(q,{sixteenPx:!0}),g.map(f=>v.jsx(xt,{refusjonAndel:f,readOnly:o||n,erAksjonspunktÅpent:p,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:Mg,vilkårperiodeFieldIndex:s},AR(f))),v.jsx(q,{twentyPx:!0}),v.jsx(Nt,{name:`${Mg}.${s}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!b}),v.jsx(Fn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),v.jsx(q,{twentyPx:!0}),v.jsx(Ps,{isSubmittable:e,isReadOnly:o||n,isSubmitting:i,isDirty:y.formState.isDirty}),v.jsx(q,{sixteenPx:!0})]})},us="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:ER}=Ke,NR=(e,n)=>({[us]:e.map(r=>IR(r,Rt(n,r.vilkårsperiodeFom)))}),qR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},SR=(e,n)=>n.filter(r=>r.skjaeringstidspunktBeregning===e).some(r=>r.avklaringsbehov.some(t=>t.definisjon==="VURDER_REFUSJONSKRAV")),PR=(e,n,r)=>{const t=e[us].filter(s=>pr(r,s.periode.fom)).filter(s=>SR(s.beregningsgrunnlagStp,n)).map(s=>TR(s,qR(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:ER}},xR=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:s,arbeidsgiverOpplysningerPerId:i,setFormData:l,formData:o,submitCallback:g,setRefusjonFormIsDirty:m})=>{const p=ze({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:NR(t,s)}),[y,b]=h.useState(!1),{formState:{dirtyFields:f,isSubmitted:c,errors:E,isDirty:j},control:R,trigger:T}=p;h.useEffect(()=>{m(j)},[j]),h.useEffect(()=>{var S;c&&(S=f[us])!=null&&S[e]&&T()},[e]);const{fields:N}=tn({name:us,control:R});return v.jsx(Xi,{errorMessage:"Noe gikk galt ved visning av refusjon",children:v.jsx(Je,{formMethods:p,onSubmit:S=>{Object.keys(E).length===0&&(b(!0),g(PR(S,t,s)))},setDataOnUnmount:l,children:N.map(S=>{const F=t.findIndex(V=>V.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return v.jsx("div",{style:{display:F===e?"block":"none"},children:v.jsx(RR,{submittable:n,readOnly:r||!pr(s,t[F].vilkårsperiodeFom),beregningsgrunnlag:t[F],arbeidsgiverOpplysningerPerId:i,vilkårperiodeFieldIndex:F,formSubmittes:y})},S.id)})})})};var Oi={exports:{}},FR=Oi.exports,Gg;function BR(){return Gg||(Gg=1,function(e,n){(function(r,t){e.exports=t()})(FR,function(){return function(r,t,s){t.prototype.isBetween=function(i,l,o,g){var m=s(i),p=s(l),y=(g=g||"()")[0]==="(",b=g[1]===")";return(y?this.isAfter(m,o):!this.isBefore(m,o))&&(b?this.isBefore(p,o):!this.isAfter(p,o))||(y?this.isBefore(m,o):!this.isAfter(m,o))&&(b?this.isAfter(p,o):!this.isBefore(p,o))}}})}(Oi)),Oi.exports}var _R=BR();const qm=dm(_R),Lg=e=>e===Be?"":A(e).format(te),OR=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=W(),[s,i]=h.useState(),l=h.useCallback(p=>{const y=A(p).format(Fe);if(r(y),y){const b=n(y);b.sort((f,c)=>A(f.fom).diff(A(c.fom))),i(b)}},[n]),o=[p=>!e||!A(p).isAfter(A(e.fom))||A(p).isAfter(A(e.tom))],{datepickerProps:g,inputProps:m}=cv({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return v.jsxs(v.Fragment,{children:[v.jsx(rd,{...g,children:v.jsx(rd.Input,{...m,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})}),s&&v.jsxs("div",{children:[v.jsx(B,{size:"small",children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Resultat"})}),v.jsxs("ul",{children:[v.jsx("li",{children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:A(s[0].fom).format(te),tom:Lg(s[0].tom)}})}),v.jsx("li",{children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:A(s[1].fom).format(te),tom:Lg(s[1].tom)}})})]})]})]})},DR=e=>e?e.tom===Be?!0:Fu(e.fom,e.tom,!0)>1:!1,wR=e=>e.map(n=>({fom:n.fom,tom:n.tom})),VR=(e,n)=>{const r=A(e).format(te);if(n&&n!==Be){const t=A(n).format(te);return r.concat(" - ",t)}return r.concat(" - ")},MR=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:s})=>{const i=W(),[l,o]=h.useState(void 0),[g,m]=h.useState(void 0),p=h.useMemo(()=>wR(e),[e]),y=h.useCallback(()=>{l&&g&&(r(l),s())},[e,l]),b=h.useCallback(c=>{const E=c.target.value,j=p.find(R=>R.fom===E);m(j||void 0)},[]),f=g&&DR(g);return t?v.jsxs(_t,{width:"500px",open:t,onClose:s,"aria-label":"Del opp periode",children:[v.jsx(_t.Header,{children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Tittel"})}),v.jsx(_t.Body,{children:v.jsxs(ne,{gap:"4",children:[v.jsxs(bv,{label:i.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:b,size:"small",children:[v.jsx("option",{value:void 0,children:"Velg periode"}),p.map(c=>v.jsx("option",{value:c.fom,children:VR(c.fom,c.tom)},c.fom))]}),f&&v.jsx(OR,{forhåndsvisPeriodesplitt:n,periode:g,setValgtDato:o})]})}),v.jsxs(_t.Footer,{children:[v.jsx(ae,{size:"small",variant:"secondary",onClick:s,disabled:!1,autoFocus:!0,type:"button",children:v.jsx(k,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})}),v.jsx(ae,{size:"small",variant:"primary",onClick:y,disabled:!l,autoFocus:!0,type:"button",children:v.jsx(k,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})]})]}):null};A.extend(qm);const GR="2023-05-01";function LR(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const KR=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(i=>t.push(i));const s={...r,inntektsforholdListe:t.filter(LR()),tom:n.tom};e.push(s)},$R=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let s=0;s<r.length;s+=1){const i=r[s],l=t.find(o=>o.aktivitetStatus===i.aktivitetStatus&&o.arbeidsgiverId===i.arbeidsgiverId&&o.arbeidsforholdId===i.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==i.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==i.skalRedusereUtbetaling)return!1}return!0},Kg=(e,n)=>Fu(e,n,!0)>2,UR=(e,n)=>{const r=n.tom,t=e.fom;return A(r).isBefore(A(t))?Kg(r,t):Kg(t,r)},YR=(e,n,r)=>{if(A(e.fom).isSame(A(GR)))return!1;const t=n[n.length-1],s=En(e,r);return s&&!En(t,r)||s&&UR(e,t)?!1:$R(e,t)},HR=e=>(n,r)=>n.length===0?(n.push({...r}),n):YR(r,n,e)?(KR(n,r),n):(n.push({...r}),n),Sm=(e,n)=>e.reduce(HR(n),[]);function Pm(e,n){var r;return!En(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const xm=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===pe.ARBEIDSTAKER?r?qt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===pe.FRILANSER?"Frilanser":e.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===pe.DAGPENGER?"Dagpenger":""},CR=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===pe.ARBEIDSTAKER?r?qt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===pe.FRILANSER?"Frilanser":e.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},zR="_tilkommetAktivitet_1xjj3_1",JR="_aktivitetContainer_1xjj3_4",WR="_aktivitetTable_1xjj3_7",XR="_aksjonspunktContainer_1xjj3_16",ZR="_aksjonspunktContainerLukketAP_1xjj3_21",QR="_bruttoInntektContainer_1xjj3_26",eE="_bruttoInntektInput_1xjj3_29",nE="_bruttoInntektCurrency_1xjj3_32",rE="_inntektsmeldingTag_1xjj3_40",tE="_inntektColumn_1xjj3_43",Ue={tilkommetAktivitet:zR,aktivitetContainer:JR,aktivitetTable:WR,aksjonspunktContainer:XR,aksjonspunktContainerLukketAP:ZR,bruttoInntektContainer:QR,bruttoInntektInput:eE,bruttoInntektCurrency:nE,inntektsmeldingTag:rE,inntektColumn:tE},sE=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},aE=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:s,field:i,arbeidsgiverOpplysningerPerId:l})=>{const o=Te(),g=W(),m=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${s}.skalRedusereUtbetaling`),p=()=>{switch(i.aktivitetStatus){case pe.ARBEIDSTAKER:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid",values:{br:v.jsx("br",{})}});case pe.FRILANSER:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans",values:{br:v.jsx("br",{})}});case pe.SELVSTENDIG_NAERINGSDRIVENDE:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerNæring"});default:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid"})}},y=()=>i.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):i.aktivitetStatus===pe.FRILANSER?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:CR(i,l)});return v.jsxs(v.Fragment,{children:[v.jsx(qe,{label:y(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${s}.skalRedusereUtbetaling`,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[Z],isTrueOrFalseSelection:!0}),m===!1&&v.jsxs(v.Fragment,{children:[v.jsx(q,{sixteenPx:!0}),v.jsx(Ne,{size:"small",variant:"info",children:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})})]}),m&&v.jsxs(v.Fragment,{children:[v.jsx(q,{sixteenPx:!0}),v.jsx(B,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),v.jsx(xe,{header:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:p()}),v.jsx(q,{eightPx:!0}),v.jsxs("div",{className:Ue.bruttoInntektContainer,children:[v.jsx(je,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${s}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,className:Ue.bruttoInntektInput,parse:De,validate:[Z,sn(178956970)]}),v.jsx("span",{className:Ue.bruttoInntektCurrency,children:"kr"})]})]})]})},$g=e=>!!e&&+e>0,iE=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=W(),t=i=>{const l=[];return i.inntektsforholdListe.forEach(o=>{const g=$g(o.bruttoInntektPrÅr),m=$g(o.inntektFraInntektsmeldingPrÅr);l.push(v.jsxs(P.Row,{children:[v.jsx(P.DataCell,{children:v.jsx(I,{size:"small",children:xm(o,e)})}),v.jsx(P.DataCell,{children:v.jsx(I,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(g||m)&&v.jsx(P.DataCell,{children:v.jsxs(I,{size:"small",children:[g&&v.jsxs(v.Fragment,{children:[Zt(o.bruttoInntektPrÅr||0),v.jsx(lt,{})]}),m&&!g&&v.jsxs(v.Fragment,{children:[Zt(o.inntektFraInntektsmeldingPrÅr||0),v.jsx(hs,{className:Ue.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},sE(o)))}),l},s=n.inntektsforholdListe.some(i=>i.bruttoInntektPrÅr);return v.jsx("div",{className:Ue.aktivitetContainer,children:v.jsxs(P,{className:Ue.aktivitetTable,children:[v.jsx(P.Header,{children:v.jsxs(P.Row,{children:[v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling"})}),s&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!s&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),v.jsx(P.Body,{children:t(n)})]})})},Gt=e=>!!e&&+e>0,lE=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:s,erAksjonspunktÅpent:i,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:g,avklaringsbehov:m})=>{const{control:p,formState:y}=Te(),{fields:b}=tn({control:p,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),f=n.inntektsforholdListe.some(j=>Gt(j.bruttoInntektPrÅr)||Gt(j.inntektFraInntektsmeldingPrÅr)),c=n.inntektsforholdListe.some(j=>!!j.periode),E=j=>{const R=[],{inntektsforholdListe:T}=j;return T.forEach(N=>{const S=Gt(N.bruttoInntektPrÅr),F=Gt(N.inntektFraInntektsmeldingPrÅr);R.push(v.jsxs(P.Row,{children:[v.jsx(P.DataCell,{children:v.jsx(I,{size:"small",children:xm(N,o)})}),(S||F||c)&&v.jsx(P.DataCell,{className:Ue.inntektColumn,children:v.jsxs(I,{size:"small",children:[S&&!F&&v.jsxs(v.Fragment,{children:[Zt(N.bruttoInntektPrÅr||0),v.jsx(lt,{})]}),F&&v.jsxs(v.Fragment,{children:[Zt(N.inntektFraInntektsmeldingPrÅr||0),v.jsx(hs,{className:Ue.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),N.periode&&v.jsx(P.DataCell,{className:Ue.periodeColumn,children:v.jsx(I,{size:"small",children:v.jsx(Ye,{dateStringFom:N.periode.fom,dateStringTom:N.periode.tom})})})]},N.arbeidsgiverId||N.aktivitetStatus))}),R};return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:Ue.aktivitetContainer,children:v.jsxs(P,{className:Ue.aktivitetTable,children:[v.jsx(P.Header,{children:v.jsxs(P.Row,{children:[v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),f&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!f&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})}),c&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Periode"})}),!c&&v.jsx(P.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),v.jsx(P.Body,{children:E(n)})]})}),v.jsx(q,{sixteenPx:!0}),v.jsxs("div",{className:i?Ue.aksjonspunktContainer:Ue.aksjonspunktContainerLukketAP,children:[b.map((j,R)=>v.jsxs("div",{children:[v.jsx(aE,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:R,field:j,readOnly:s,arbeidsgiverOpplysningerPerId:o},j.id),R<n.inntektsforholdListe.length-1&&v.jsx(q,{fourtyPx:!0})]},j.id)),g&&v.jsxs(v.Fragment,{children:[v.jsx(q,{fourtyPx:!0}),v.jsx(rn,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:s,validate:[Z]}),v.jsx(Fn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),v.jsx(q,{sixteenPx:!0}),v.jsx(Ps,{isSubmittable:l,isReadOnly:s,isSubmitting:y.isSubmitting,isDirty:y.isDirty})]})]})]})},dE="_statusOk_1qsx9_1",Ug={statusOk:dE},vi=e=>e?A(e,Fe).format(te):"-",Yg=(e,n)=>!n||n===Be?v.jsx(B,{size:"medium",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:vi(e)}})}):v.jsx(B,{size:"medium",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:vi(e),tom:vi(n)}})}),oE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:s,submittable:i,erAksjonspunktÅpent:l,fields:o})=>{const[g,m]=h.useState([]),[p,y]=h.useState([]),[b,f]=h.useState([]),c=Te();h.useEffect(()=>{var S,F;const V=(F=(S=e.faktaOmFordeling)==null?void 0:S.vurderNyttInntektsforholdDto)==null?void 0:F.vurderInntektsforholdPerioder;if(V){const _=Sm(V,e.forlengelseperioder);m(_);const H=p.map(O=>O),C=o.map(O=>O.fom);C.filter(O=>!b.includes(O)).forEach(O=>H.push(O)),y(H),f(C)}},[e,o.length]);const E=g.filter(S=>Pm(S,e)),j=e==null?void 0:e.avklaringsbehov.find(S=>S.definisjon===Ke.VURDER_NYTT_INNTKTSFRHLD),R=S=>{if(p.includes(S)){const F=p.filter(V=>V!==S);y(F)}else{const F=p.map(V=>V);F.push(S),y(F)}},T=S=>{const F=A(S),V=g.find(_=>!A(_.fom).isAfter(F)&&!A(_.tom).isBefore(F));if(!V)throw new Error(`Finner ikke periode som overlapper med fom ${S}`);return V},N=S=>()=>R(S);return!g||g.length<1?null:v.jsxs(v.Fragment,{children:[v.jsxs(Pe,{className:Ug.statusOk,children:[E.map(S=>v.jsxs(Pe.Item,{open:p.filter(F=>F===S.fom).length>0,children:[v.jsxs(Pe.Header,{onClick:N(S.fom),children:[Yg(S.fom,S.tom)," ",v.jsx(gm,{})]}),v.jsx(Pe.Content,{children:v.jsx(iE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:S})})]},S.fom)),o.map((S,F)=>v.jsxs(Pe.Item,{open:p.filter(V=>V===S.fom).length>0,children:[v.jsx(Pe.Header,{onClick:N(S.fom),children:Yg(S.fom,S.tom)}),v.jsx(Pe.Content,{children:v.jsx(lE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:T(S.fom),formName:r,formFieldIndex:t,periodeFieldIndex:F,readOnly:s,erAksjonspunktÅpent:l,submittable:i,skalViseBegrunnelse:o.length===1,avklaringsbehov:j})})]},S.fom))]}),o.length>1&&v.jsxs("div",{className:Ug.aktivitetContainer,children:[v.jsx(q,{fourtyPx:!0}),v.jsx(rn,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:s,validate:[Z]}),v.jsx(Fn,{ident:j==null?void 0:j.vurdertAv,date:j==null?void 0:j.vurdertTidspunkt}),v.jsx(q,{sixteenPx:!0}),v.jsx(Ps,{isSubmittable:i,isReadOnly:s,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty})]})]})},yi=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),gE=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:s,erAksjonspunktÅpent:i,arbeidsgiverOpplysningerPerId:l})=>{var o,g;const m=W(),[p,y]=h.useState(!1),{control:b,watch:f}=Te(),{fields:c,remove:E,insert:j}=tn({control:b,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});c.sort((O,L)=>A(O.fom).diff(A(L.fom)));const R=(g=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:g.vurderInntektsforholdPerioder,T=()=>{const O=R==null?void 0:R.flatMap(L=>L.inntektsforholdListe.map(M=>M.aktivitetStatus)).reduce((L,M)=>(L.some(U=>U===M)||L.push(M),L),[]);return(O?O.length:0)>1?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):yi(pe.SELVSTENDIG_NAERINGSDRIVENDE,R)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):yi(pe.FRILANSER,R)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):yi(pe.DAGPENGER,R)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},N=()=>i?v.jsxs(Ne,{size:"small",variant:"warning",children:[v.jsx(se,{size:"xsmall",level:"3",children:T()}),m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):v.jsxs(v.Fragment,{children:[v.jsxs(B,{size:"small",children:[m.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),T()]}),v.jsx(I,{size:"small",children:m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),S=(O,L,M,U)=>{const re=f(`${e}.${r}.perioder.${M}.inntektsforhold.${U}.skalRedusereUtbetaling`),J=f(`${e}.${r}.perioder.${M}.inntektsforhold.${U}.bruttoInntektPrÅr`);return{aktivitetStatus:O.aktivitetStatus,arbeidsgiverIdent:O.arbeidsgiverIdent,arbeidsforholdId:O.arbeidsforholdId,bruttoInntektPrÅr:L?J:void 0,skalRedusereUtbetaling:L?re:void 0}},F=(O,L,M)=>!A(O).isAfter(A(M))&&!A(L).isBefore(A(M)),V=h.useCallback(O=>{const L=c.find(J=>F(J.fom,J.tom,O));if(!L)throw new Error(`Finner ikke field somme inneholder dato ${O}`);const M=A(O).subtract(1,"day"),U={fom:A(L.fom).format(Fe),tom:M.format(Fe)},re={fom:A(O).format(Fe),tom:L.tom};return[U,re]},[c]),_=h.useCallback(O=>{const L=c.find(Ee=>F(Ee.fom,Ee.tom,O));if(!L)throw new Error(`Finner ikke field somme inneholder dato ${O}`);const M=V(O),U=c.indexOf(L),re=L.inntektsforhold||[],J={inntektsforhold:re.map((Ee,_e)=>S(Ee,!0,U,_e)),fom:M[0].fom,tom:M[0].tom},ie={inntektsforhold:re.map((Ee,_e)=>S(Ee,!1,U,_e)),fom:M[1].fom,tom:M[1].tom};E(U),j(U,[J,ie])},[c]),H=h.useCallback(()=>{y(!0)},[p]),C=h.useCallback(()=>{y(!1)},[p]);return v.jsxs(ne,{gap:"8",children:[N(),!!R&&i&&v.jsx(v.Fragment,{children:v.jsx(Ne,{size:"small",variant:"info",title:"",children:v.jsx(k,{id:"TilkommetAktivitet.AksjonspunktAlert"})})}),v.jsxs(ne,{gap:"0",children:[v.jsxs(z,{justify:"space-between",children:[v.jsx(se,{size:"small",level:"3",children:v.jsx(k,{id:"TilkommetAktivitet.Heading"})}),v.jsx(ae,{variant:"tertiary",loading:!1,disabled:t,onClick:H,size:"small",type:"button",icon:v.jsx(xv,{height:32,width:32}),children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Knapp"})})]}),p&&v.jsx(MR,{fields:c,forhåndsvisPeriodesplitt:V,lukkModal:C,skalViseModal:p,utførPeriodesplitt:_}),v.jsx(oE,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:c,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:i,submittable:s})]})]})};A.extend(qm);const{VURDER_NYTT_INNTKTSFRHLD:Di}=Ke,Xr="VURDER_TILKOMMET_AKTIVITET_FORM",Fm=e=>{const n=e.find(r=>r.definisjon===Di);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Di}`);return n},uE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function kE(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Sm(t,e.forlengelseperioder).filter(s=>!Pm(s,e))}const mE=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:G(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),pE=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>mE(n))}),vE=(e,n)=>{const r=Fm(e.avklaringsbehov),t=kE(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:Rt(n,e.vilkårsperiodeFom).periode,perioder:t.map(s=>pE(s))}},yE=(e,n)=>({[`${Xr}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===Ke.VURDER_NYTT_INNTKTSFRHLD)).map(r=>vE(r,n))}),fE=(e,n)=>{const r=A(e.fom).isBetween(n.fom,n.tom,"day","[]")||A(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=A(n.fom).isBetween(e.fom,e.tom,"day","[]")||A(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},bE=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),cE=(e,n)=>{var r,t;const s=e.perioder,i=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>s.filter(o=>fE(o,l)).map(o=>{const g=o.inntektsforhold.filter(m=>bE(m,l)).map(m=>{const p=!!m.skalRedusereUtbetaling,y=p?fe(m.bruttoInntektPrÅr):void 0;return{aktivitetStatus:m.aktivitetStatus,arbeidsgiverId:m.arbeidsgiverIdent,arbeidsforholdId:m.arbeidsforholdId,skalRedusereUtbetaling:p,bruttoInntektPrÅr:y}});return{fom:A(o.fom).isBefore(A(l.fom))?l.fom:o.fom,tom:A(o.tom).isAfter(A(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:g}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:i}},jE=(e,n,r)=>{const t=e[Xr].filter(s=>pr(r,s.periode.fom)).map(s=>cE(s,uE(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:Di}},hE=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:s,readOnly:i,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:g,setTilkommetAktivitetFormIsDirty:m})=>{const p=ze({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:yE(t,o)}),{formState:{dirtyFields:y,isSubmitted:b,errors:f,isDirty:c},trigger:E,control:j}=p;h.useEffect(()=>{m(c)},[c]),h.useEffect(()=>{var F;b&&(F=y[Xr])!=null&&F[e]&&E()},[e]);const{fields:R}=tn({name:Xr,control:j}),T=t[e],N=Fm(T.avklaringsbehov),S=N?xl(N.status):!1;return v.jsx(Xi,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:v.jsx("div",{className:Ue.tilkommetAktivitet,children:v.jsx(Je,{formMethods:p,onSubmit:F=>{Object.keys(f).length===0&&s(jE(F,t,o))},setDataOnUnmount:r,children:R.map((F,V)=>{const _=t.findIndex(H=>H.skjaeringstidspunktBeregning===F.beregningsgrunnlagStp);return v.jsx("div",{style:{display:_===e?"block":"none"},children:v.jsx(gE,{formName:Xr,beregningsgrunnlag:t[_],formFieldIndex:V,readOnly:i||!pr(o,t[_].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:S,arbeidsgiverOpplysningerPerId:g})},F.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:AE,VURDER_REFUSJON_BERGRUNN:IE,VURDER_NYTT_INNTKTSFRHLD:TE}=Ke,RE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,EE=e=>!!(e&&e.refusjonTilVurdering),NE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,fi=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,qE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:s,kodeverkSamling:i,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m})=>{const[p,y]=h.useState(!1),[b,f]=h.useState(!1),[c,E]=h.useState(!1),j=fi(t[e].avklaringsbehov,AE),R=fi(t[e].avklaringsbehov,IE),T=fi(t[e].avklaringsbehov,TE)&&NE(t[e]),N=j&&RE(t[e]),S=R&&EE(t[e]);return v.jsxs(v.Fragment,{children:[T&&v.jsxs(v.Fragment,{children:[v.jsx(hE,{aktivtBeregningsgrunnlagIndeks:e,formData:g,setFormData:m,submittable:l&&!b&&!c,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:s,setTilkommetAktivitetFormIsDirty:y}),v.jsx(q,{fourtyPx:!0})]}),S&&v.jsxs(v.Fragment,{children:[v.jsx(xR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!p&&!c,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkarperioder:s,setRefusjonFormIsDirty:f}),v.jsx(q,{fourtyPx:!0})]}),N&&v.jsx(lR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!p&&!b,readOnly:n,submitCallback:r,kodeverkSamling:i,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkårsperioder:s,setFordelingFormIsDirty:E})]})},SE=$e(Fl),{FORDEL_BEREGNINGSGRUNNLAG:PE,VURDER_REFUSJON_BERGRUNN:xE,VURDER_NYTT_INNTKTSFRHLD:FE}=Ke,BE=(e,n)=>{const r=Rt(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:s}=r.periode;return s!==null?`${A(t).format(te)} - ${A(s).format(te)}`:`${A(t).format(te)} - `}return`${A(e.vilkårsperiodeFom).format(te)}`},Bm=e=>e.avklaringsbehov.some(n=>n.definisjon===xE||n.definisjon===PE||n.definisjon===FE),_E=(e,n)=>Bm(e)&&pr(n,e.vilkårsperiodeFom),OE=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:s,submittable:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const m=n.filter(f=>Bm(f)),[p,y]=h.useState(0);if(m.length===0)return null;const b=m.length>1;return v.jsxs(Le,{value:SE,children:[b&&v.jsx(jr,{value:p.toString(),onChange:f=>y(Number(f)),children:v.jsx(jr.List,{children:m.map((f,c)=>v.jsx(jr.Tab,{value:c.toString(),label:BE(f,e.perioder),className:_E(f,e.perioder)?"harAksjonspunkt":""},f.skjaeringstidspunktBeregning))})}),v.jsx(q,{eightPx:!0}),v.jsx(qE,{aktivtBeregningsgrunnlagIndeks:p,kodeverkSamling:r,submitCallback:t,readOnly:s,beregningsgrunnlagListe:m,vilkarperioder:e.perioder,submittable:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})]})},Hg=[de.FORDEL_BEREGNINGSGRUNNLAG,de.VURDER_REFUSJON_BERGRUNN],DE=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=dr(Hg),{behandling:t}=h.use(xn),s=Pn(t),{data:i,isFetching:l}=Sn(s.beregningsgrunnlagOptions(t));return a.jsx(or,{...n,standardPanelProps:r,faktaPanelKode:lr.FORDELING,faktaPanelMenyTekst:W().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Hg.some(o=>js(o,t.aksjonspunkt)),children:l?a.jsx(qn,{}):a.jsx(wE,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagVilkår:LE(r.behandling.vilkår,i),beregningsgrunnlagListe:KE(i),submitCallback:ME(r.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:r.readOnly,submittable:r.submittable})})},wE=e=>{const{formData:n,setFormData:r}=Kn();return a.jsx(OE,{...e,formData:n,setFormData:r})},VE=e=>{switch(e){case Ke.FORDEL_BEREGNINGSGRUNNLAG:return de.FORDEL_BEREGNINGSGRUNNLAG;case Ke.VURDER_REFUSJON_BERGRUNN:return de.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},ME=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:VE(s.kode),...s.grunnlag[0]}));return e(t)},GE=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),LE=(e,n)=>{if(!e)return null;const r=e.find(s=>s.vilkarType&&s.vilkarType===rr.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[GE(n,r)]}},KE=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];DE.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const _n=({tittel:e,children:n})=>a.jsxs(ne,{children:[a.jsx(B,{size:"medium",children:e}),n]});_n.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _m=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:n})=>{var t;const r=W();return a.jsxs(_n,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[n])==null?void 0:t.navn)??"-"]}),a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};_m.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Om=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const s=W(),i=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),o=(()=>{const m=l.length;return i&&m>1?a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):i?a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),g=[...l].sort((m,p)=>new Date(m.opprettet).getTime()-new Date(p.opprettet).getTime());return a.jsxs(_n,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,a.jsx(ee,{children:g.map(m=>{var p;return a.jsx(ee.Item,{children:a.jsxs(ne,{children:[a.jsx("span",{children:(p=t.BehandlingType.find(({kode:y})=>y===m.type))==null?void 0:p.navn}),a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",a.jsx(Qt,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",a.jsx(Qt,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Om.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const $E=e=>{const n=e.aktiveNaturalytelser.reduce((t,s)=>{const i=s.type;return i in t?{...t,[i]:[...t[i],s]}:{...t,[i]:[s]}},{}),r={};return Object.entries(n).forEach(([t,s])=>{const i=s.sort((l,o)=>Ev({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=i.flatMap((l,o,g)=>{const m=g[o+1],p=l.periode.tomDato,y=m==null?void 0:m.periode.fomDato;return p===Be?[]:[{...l,periode:{fomDato:es(p,1),tomDato:y?es(y,-1):Be}}]})}),r},Dm=({inntektsmelding:e,alleKodeverk:n})=>{const r=W(),t=$E(e);return a.jsx(_n,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?a.jsx("span",{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):a.jsx(ne,{children:Object.entries(t).map(([s,i])=>{var l;return a.jsxs(ne,{children:[a.jsx("span",{children:(l=n[un.NATURAL_YTELSE_TYPE].find(o=>o.kode===s))==null?void 0:l.navn}),a.jsx("ul",{children:i.map(o=>a.jsxs(Y.Fragment,{children:[a.jsxs("li",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",a.jsx(Ie,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Be&&a.jsxs("li",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",a.jsx(Ie,{dateString:o.periode.tomDato})]}),a.jsxs("li",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",G(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},s)})})})};Dm.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const wm=({kildeSystem:e})=>{const n=W(),r=h.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return a.jsx(_n,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};wm.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Vm=({inntektsmelding:e})=>{const n=W();return a.jsxs(_n,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Vm.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const Mm=({inntektsmelding:e,fagsak:n})=>a.jsx(ae,{type:"button",onClick:()=>{window.open(el(n.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:a.jsx(Iv,{}),children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Mm.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const Gm=({inntektsmelding:e})=>{const n=W();if(e.refusjonsperioder.length===0)return a.jsx(_n,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:a.jsx("span",{children:e.refusjonPrMnd?G(e.refusjonPrMnd):a.jsx(k,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,s)=>new Date(t.fom).getTime()-new Date(s.fom).getTime());return a.jsxs(ne,{gap:"0",children:[a.jsx("span",{children:"Krever refusjon"}),a.jsx("span",{children:G(e.refusjonPrMnd??0)}),a.jsx("span",{children:"Endringer i perioden:"}),a.jsx("ul",{children:r.map(t=>a.jsx("li",{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:G(t.refusjonsbeløp.verdi),fom:a.jsx(Ie,{dateString:t.fom})}})},t.indexKey))})]})};Gm.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const Lm=({startDatoPermisjon:e,ytelse:n})=>{const r=W();return e?a.jsxs(_n,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[a.jsx("span",{children:e?a.jsx(Ie,{dateString:e}):"-"}),a.jsx("span",{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Lm.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const UE="_behandlingCircleIngen_131kr_1",YE="_behandlingCircleDenne_131kr_5",HE="_behandlingCircleAndre_131kr_9",CE="_container_131kr_13",zE="_ingenInntektsmeldinger_131kr_19",Zr={behandlingCircleIngen:UE,behandlingCircleDenne:YE,behandlingCircleAndre:HE,container:CE,ingenInntektsmeldinger:zE},Km=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:s,behandling:i}=Nn(),l=W();return a.jsxs(ne,{gap:"4",className:Zr.container,children:[a.jsxs(z,{gap:"4",justify:"space-between",align:"start",children:[a.jsxs(se,{level:"3",size:"small",children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",a.jsx(Qt,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),a.jsx(Mm,{fagsak:s,inntektsmelding:e})]}),a.jsxs(Ov,{columns:3,gap:"8",children:[a.jsx(_m,{arbeidsgiverOpplysningerPerId:n,arbeidsgiverIdent:e.arbeidsgiverIdent}),a.jsx(_n,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:a.jsx("span",{children:G(e.inntektPrMnd)})}),a.jsx(Om,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:i}),a.jsx(Vm,{inntektsmelding:e}),a.jsx(Lm,{ytelse:Qr(t,un.FAGSAK_YTELSE,s.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),a.jsx(wm,{kildeSystem:e.kildeSystem}),a.jsx(Dm,{inntektsmelding:e,alleKodeverk:t}),a.jsx(Gm,{inntektsmelding:e})]})]})};Km.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const JE={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Cg=$e(JE),$m=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=Nn(),[s,i]=h.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=m=>{i(s&&m===s.orderBy&&s.direction==="descending"?void 0:{orderBy:m,direction:s&&m===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},o=s?WE({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:t}):r,g=(s==null?void 0:s.direction)==="ascending"?o:o.toReversed();return g.length===0?a.jsx(Le,{value:Cg,children:a.jsxs(z,{gap:"2",justify:"center",align:"center",className:Zr.ingenInntektsmeldinger,children:[a.jsx(I,{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.ingen"})}),a.jsx(Jv,{})]})}):a.jsx(Le,{value:Cg,children:a.jsxs(P,{sort:s,onSortChange:m=>l(m),children:[a.jsx(P.Header,{children:a.jsxs(P.Row,{children:[a.jsx(P.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),a.jsx(P.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),a.jsx(P.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),a.jsx(P.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),a.jsx(P.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),a.jsx(P.HeaderCell,{})]})}),a.jsx(P.Body,{children:g.map(m=>{var p;return a.jsxs(P.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:a.jsx(Km,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:m}),children:[a.jsx(P.DataCell,{children:a.jsx(Qt,{dateTimeString:m.innsendingstidspunkt,separator:"kl"})}),a.jsx(P.DataCell,{children:((p=e[m.arbeidsgiverIdent])==null?void 0:p.navn)??"-"}),a.jsx(P.DataCell,{children:m.startDatoPermisjon?a.jsx(Ie,{dateString:m.startDatoPermisjon}):"-"}),a.jsx(P.DataCell,{children:G(m.inntektPrMnd)}),a.jsx(P.DataCell,{children:a.jsx(XE,{behandling:t,inntektsmelding:m})})]},`${m.journalpostId}-${m.internArbeidsforholdId}`)})})]})})},WE=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((s,i)=>{var g,m;const l=(g=n[s.arbeidsgiverIdent])==null?void 0:g.navn,o=(m=n[i.arbeidsgiverIdent])==null?void 0:m.navn;return bi(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((s,i)=>{const l=wi({behandling:t,inntektsmelding:s}),o=wi({behandling:t,inntektsmelding:i});return bi(l,o)}):e.slice().sort((s,i)=>{const l=s[r],o=i[r];return bi(l,o)}),bi=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,XE=({behandling:e,inntektsmelding:n})=>{const r=wi({behandling:e,inntektsmelding:n});return r==="DENNE"?a.jsxs(z,{gap:"1",align:"center",children:[a.jsx(ws,{className:Zr.behandlingCircleDenne}),a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?a.jsxs(z,{gap:"1",align:"center",children:[a.jsx(ws,{className:Zr.behandlingCircleAndre}),a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):a.jsxs(z,{gap:"1",align:"center",children:[a.jsx(ws,{className:Zr.behandlingCircleIngen}),a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},wi=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";$m.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ZE=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),{behandling:t,alleBehandlinger:s}=h.use(xn),i=dr(),l=Pn(t),{data:o}=Sn(l.inntektsmeldingerOptions(t));return a.jsx(or,{...n,standardPanelProps:i,faktaPanelKode:lr.INNTEKTSMELDINGER,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:o?a.jsx($m,{inntektsmeldinger:o,alleBehandlinger:s,arbeidsgiverOpplysningerPerId:e}):a.jsx(qn,{})})};ZE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const QE=e=>es(e,1),Um=(e,n)=>A(QE(e)).isSame(n)?n:e,Ym=(e,n,r)=>{if(!(!n||!r))return A(e).isBefore(n)?n:Um(e,r)},Hm=(e,n,r)=>{if(!(!n||!r))return A(e).isAfter(r)?r:Um(e,n)},eN=[be.SYKEPENGER,be.FORELDREPENGER,be.PLEIEPENGER,be.SVANGERSKAPSPENGER,be.UTENLANDSK_ARBEIDSFORHOLD],zt=(e,...n)=>!!e&&n.includes(e),nN=e=>e?A(e,Fe).format(te):"-",rN=e=>zt(e,be.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",tN=(e,n)=>{const r=n[e];if(!e||!r)return"-";if(r.erPrivatPerson&&r.fødselsdato){const t=nN(r.fødselsdato);return`${r.navn} (${t})`}return r.identifikator?`${r.navn} (${r.identifikator})`:r.navn},sN=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",Cm=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:s,ferdiglignetNæring:i})=>a.jsxs(ne,{gap:"4",children:[zt(e,be.ARBEID,be.NARING,...eN)&&a.jsxs(z,{gap:"4",children:[a.jsxs("div",{children:[a.jsx(q,{eightPx:!0}),a.jsx(B,{size:"small",children:a.jsx(k,{id:rN(e)})}),a.jsx(I,{size:"small",children:tN(n,r)})]}),zt(e,be.ARBEID)&&a.jsxs("div",{children:[a.jsx(q,{eightPx:!0}),a.jsx(B,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Stillingsandel"})}),a.jsx(I,{size:"small",children:t})]})]}),zt(e,be.NARING)&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Registreringsdato"})}),a.jsx(I,{size:"small",children:s?A(s).format(te):"-"})]}),a.jsxs("div",{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:sN(i)})}),i.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>a.jsxs(z,{gap:"5",children:[a.jsx(I,{size:"small",children:l.år}),a.jsx(I,{size:"small",children:G(l.beløp)})]},l.år))]})]})]});Cm.__docgenInfo={description:`ValgtAktivitetSubForm

Viser informasjon om valgt aktivitet`,methods:[],displayName:"ValgtAktivitetSubForm",props:{valgtAktivitetstype:{required:!1,tsType:{name:"string"},description:""},arbeidsgiverReferanse:{required:!0,tsType:{name:"string"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},stillingsandel:{required:!0,tsType:{name:"number"},description:""},naringRegistreringsdato:{required:!0,tsType:{name:"string"},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const aN="_panel_18tdb_5",iN="_colMargin_18tdb_9",lN="_margin_18tdb_13",Lt={panel:aN,colMargin:iN,margin:lN},dN=cn(3),oN=jn(1500),Jt=(e,n,r)=>e?!!n&&!r:!0,gN=(e,n)=>{const r=kv(e,n);return r?r.months>=1?a.jsx(k,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):a.jsx(k,{id:"ActivityPanel.Days",values:{days:r.days}}):a.jsx("span",{})},uN=(e,n,r,t)=>r||Jt(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",zm=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:s,harAksjonspunkt:i,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:g,ferdiglignetNæring:m,oppdaterAktivitet:p,valgteFormValues:y,fastsattOpptjening:b,lukkPeriode:f})=>{var C;const c=W(),E=ze({defaultValues:y}),{arbeidsgiverReferanse:j,erGodkjent:R,erEndret:T,aktivitetType:N,stillingsandel:S,naringRegistreringsdato:F}=g,V=Ym(g.opptjeningFom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),_=Hm(g.opptjeningTom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),H=h.useCallback((...O)=>a.jsx("b",{children:O}),[]);return a.jsx(Je,{formMethods:E,onSubmit:O=>p(O),children:a.jsxs(Pu,{className:Lt.panel,merknaderFraBeslutter:l[de.VURDER_PERIODER_MED_OPPTJENING],children:[a.jsxs(ne,{gap:"2",children:[a.jsxs(z,{justify:"space-between",children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Details"})}),a.jsxs(z,{gap:"2",children:[a.jsx(ae,{className:Lt.margin,size:"xsmall",icon:a.jsx(bs,{"aria-hidden":!0}),onClick:s,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.prevPeriod"}),children:a.jsx(k,{id:"Timeline.prevPeriodShort"})}),a.jsx(ae,{className:Lt.margin,size:"xsmall",icon:a.jsx(cs,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:a.jsx(k,{id:"Timeline.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(Qn,{"aria-hidden":!0}),onClick:f,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),a.jsxs(z,{children:[a.jsxs("div",{className:Lt.colMargin,children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Period"})}),V&&_&&a.jsxs(z,{gap:"2",children:[a.jsx(I,{size:"small",children:`${A(V).format(te)} - ${A(_).format(te)}`}),a.jsx(I,{size:"small",children:gN(V,_)})]})]}),a.jsxs("div",{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Activity"})}),a.jsx(I,{size:"small",children:(C=n.find(O=>O.kode===N))==null?void 0:C.navn})]})]})]}),a.jsx(q,{eightPx:!0}),a.jsx(Cm,{valgtAktivitetstype:N,arbeidsgiverReferanse:j,arbeidsgiverOpplysningerPerId:o,stillingsandel:S,naringRegistreringsdato:F,ferdiglignetNæring:m}),!Jt(i,R,T)&&a.jsxs(a.Fragment,{children:[a.jsx(q,{twentyPx:!0}),a.jsx(qe,{name:"erGodkjent",hideLegend:!0,validate:[Z],isReadOnly:e,isEdited:T,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:c.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:a.jsx(k,{id:"ActivityPanel.IkkeGodkjent",values:{b:H}}),value:"false"}]})]}),a.jsx(q,{sixteenPx:!0}),a.jsx(rn,{name:"begrunnelse",label:a.jsx(k,{id:uN(R,T,e,i)}),validate:[Z,dN,oN,hn],maxLength:1500,readOnly:e||Jt(i,R,T)}),!Jt(i,R,T)&&a.jsxs(a.Fragment,{children:[a.jsx(q,{sixteenPx:!0}),a.jsxs(z,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"primary",disabled:!E.formState.isDirty,children:a.jsx(k,{id:"ActivityPanel.Oppdater"})}),a.jsx(ae,{size:"small",variant:"secondary",onClick:r,type:"button",children:a.jsx(k,{id:"ActivityPanel.Avbryt"})})]})]})]})})};zm.__docgenInfo={description:`ValgtAktivitetForm

Viser informasjon om valgt aktivitet`,methods:[],displayName:"ValgtAktivitetForm",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},valgtOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"arbeidsforholdRef",value:{name:"string",required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"string",required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},description:""},valgteFormValues:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  erGodkjent: boolean;
  begrunnelse: string;
}`,signature:{properties:[{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  erGodkjent: boolean;
  begrunnelse: string;
}`,signature:{properties:[{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},avbrytAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNesteAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigeAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},opptjeningAktivitetTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const kN=e=>e===!1?"danger":e===!0?"success":"warning",mN={[be.ARBEID]:a.jsx(Mr,{width:20,height:20}),[be.AAP]:a.jsx(Vr,{width:20,height:20}),[be.DAGPENGER]:a.jsx(Vr,{width:20,height:20}),[be.FORELDREPENGER]:a.jsx(Dv,{width:20,height:20}),[be.FRILANS]:a.jsx(Mr,{width:20,height:20}),[be.MILITAR_ELLER_SIVILTJENESTE]:a.jsx(Mr,{width:20,height:20}),[be.NARING]:a.jsx(Mr,{width:20,height:20}),[be.OMSORGSPENGER]:a.jsx(Vr,{width:20,height:20}),[be.OPPLARINGSPENGER]:a.jsx(Vr,{width:20,height:20}),[be.PLEIEPENGER]:a.jsx(Vr,{width:20,height:20}),[be.SVANGERSKAPSPENGER]:a.jsx(ay,{width:20,height:20}),[be.SYKEPENGER]:a.jsx(dy,{width:20,height:20}),[be.UTENLANDSK_ARBEIDSFORHOLD]:a.jsx(Qv,{width:20,height:20}),[be.ETTERLONN_SLUTTPAKKE]:a.jsx(Mr,{width:20,height:20})},pN={danger:a.jsx($u,{}),success:a.jsx(rl,{}),warning:a.jsx(Fv,{})},vN=(e,n,r,t,s)=>e.map((i,l)=>{var o;return{id:l,start:A(Ym(i.opptjeningFom,t,s)).toDate(),end:A(Hm(i.opptjeningTom,t,s)).toDate(),radId:(o=r.find(g=>g.aktivitetTypeKode===i.aktivitetType&&g.arbeidsforholdRef===i.arbeidsforholdRef&&g.arbeidsgiverReferanse===i.arbeidsgiverReferanse))==null?void 0:o.id,status:kN(n[l].erGodkjent)}}),yN=(e,n,r)=>e.reduce((s,i)=>(s.some(o=>o.aktivitetType===i.aktivitetType&&o.arbeidsforholdRef===i.arbeidsforholdRef&&o.arbeidsgiverReferanse===i.arbeidsgiverReferanse)||s.push(i),s),[]).map((s,i)=>{const l=n.find(g=>g.kode===s.aktivitetType),o=(l==null?void 0:l.kode)===be.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:i+1,label:o||"",aktivitetTypeKode:s.aktivitetType,arbeidsforholdRef:s.arbeidsforholdRef,arbeidsgiverReferanse:s.arbeidsgiverReferanse}}),Jm=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:s,setValgtAktivitetIndex:i})=>{const l=W(),o=r==null?void 0:r.opptjeningFom,g=r==null?void 0:r.opptjeningTom,m=h.useMemo(()=>yN(e,s,l),[e]),p=h.useMemo(()=>vN(e,n,m,o,g),[n]),y=h.useCallback(b=>{const f=p.find(c=>c.id===b);f&&i(f.id)},[p,i]);return!o||!g?null:a.jsxs(Ve,{startDate:A(o).subtract(1,"months").toDate(),endDate:A(g).add(10,"days").toDate(),children:[a.jsxs(Ve.Pin,{date:A(o).toDate(),children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"OpptjeningTidslinje.StartDato"})}),a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:o})})]}),a.jsxs(Ve.Pin,{date:A(g).toDate(),children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"OpptjeningTidslinje.SluttDato"})}),a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:g})})]}),m.map(b=>a.jsx(Ve.Row,{label:b.label,icon:mN[b.aktivitetTypeKode],children:p.filter(f=>f.radId===b.id).map(f=>a.jsx(Ve.Period,{start:f.start,end:f.end,status:f.status,icon:pN[f.status],onSelectPeriod:()=>y(f.id),isActive:t===f.id,statusLabel:b.label},f.id))},b.id))]})};Jm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"arbeidsforholdRef",value:{name:"string",required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"string",required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"OpptjeningAktivitet[]"},description:""},formVerdierForAlleAktiviteter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erGodkjent: boolean;
  begrunnelse: string;
}`,signature:{properties:[{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"},description:""},valgtAktivitetIndex:{required:!1,tsType:{name:"number"},description:""},opptjeningAktivitetTypes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const fN="_container_ivkzi_1",bN={container:fN},cN=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(a.jsx(k,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(a.jsx(k,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(a.jsx(k,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},jN=e=>A(e).add(1,"days").format(Fe),hN=(e,n)=>[...e].sort((r,t)=>{var l,o;const s=(l=n.find(g=>g.kode===r.aktivitetType))==null?void 0:l.navn,i=(o=n.find(g=>g.kode===t.aktivitetType))==null?void 0:o.navn;return s&&i?s.localeCompare(i):0}),zg=e=>es(e,1),AN=(e,n)=>n?e.filter(r=>A(n.opptjeningFom).isBefore(zg(r.opptjeningTom))).filter(r=>A(r.opptjeningFom).isBefore(zg(n.opptjeningTom))):[],Wm=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:s,alleMerknaderFraBeslutter:i,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:g,alleKodeverk:m}=Nn(),p=s.length>0,y=m[un.OPPTJENING_AKTIVITET_TYPE],b=e&&r?hN(AN(e,r),y):[],f=b.map(J=>({erGodkjent:J.erGodkjent,begrunnelse:J.begrunnelse})),{formData:c,setFormData:E}=Kn(),[j,R]=h.useState(c||f),T=b.findIndex(J=>J.erGodkjent===void 0),N=b.length>0?0:void 0,[S,F]=h.useState(T!==-1?T:N),[V,_]=h.useState(!1);h.useEffect(()=>()=>{E(j)},[j]),h.useEffect(()=>{const J=j.findIndex(ie=>ie.erGodkjent===void 0);F(J!==-1?J:void 0)},[j]);const H=()=>{_(!0);const J=b.map((ie,Ee)=>({arbeidsforholdRef:ie.arbeidsforholdRef,arbeidsgiverReferanse:ie.arbeidsgiverReferanse,opptjeningFom:ie.opptjeningFom,opptjeningTom:ie.opptjeningTom,aktivitetType:ie.aktivitetType,erGodkjent:j[Ee].erGodkjent,begrunnelse:j[Ee].begrunnelse})).filter(ie=>ie.begrunnelse);o({opptjeningsaktiviteter:J,kode:de.VURDER_PERIODER_MED_OPPTJENING}).then(()=>_(!1))},C=()=>{S!==void 0&&S<b.length-1&&F(S+1)},O=()=>{S!==void 0&&S>0&&F(S-1)},L=J=>{S!==void 0&&R(ie=>Object.assign([],ie,{[S]:J}))},M=()=>F(void 0),U=()=>{F(void 0)},re=j.some(J=>J.erGodkjent===null||J.erGodkjent===void 0);return a.jsxs("div",{className:bN.container,children:[p&&a.jsxs(a.Fragment,{children:[l&&a.jsx(ir,{children:cN(b)}),a.jsx(q,{twentyPx:!0})]}),a.jsx(B,{size:"small",children:a.jsx(k,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:jN(r==null?void 0:r.opptjeningTom)})}),a.jsx(q,{twentyPx:!0}),a.jsx(Jm,{opptjeningPerioder:b,formVerdierForAlleAktiviteter:j,opptjeningAktivitetTypes:y,setValgtAktivitetIndex:F,valgtAktivitetIndex:S,fastsattOpptjening:r}),a.jsx(q,{fourtyPx:!0}),S!==void 0&&a.jsxs(a.Fragment,{children:[a.jsx(zm,{valgtOpptjeningAktivitet:b[S],valgteFormValues:j[S],readOnly:g,opptjeningAktivitetTyper:y,avbrytAktivitet:M,oppdaterAktivitet:L,fastsattOpptjening:r,velgNesteAktivitet:C,velgForrigeAktivitet:O,harAksjonspunkt:p,alleMerknaderFraBeslutter:i,alleKodeverk:m,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:U},S),a.jsx(q,{twentyPx:!0})]}),p&&b.length>0&&a.jsx(ae,{size:"small",variant:"primary",onClick:H,disabled:S!==void 0||V||g||re,loading:V,type:"button",children:a.jsx(k,{id:"OpptjeningFaktaForm.Confirm"})})]})};Wm.__docgenInfo={description:`OpptjeningFaktaPanel

Vises faktapanelet for opptjeningsvilkåret. For Foreldrepenger vises dette alltid. Finnes
det aksjonspunkt kan nav-ansatt endre opplysninger før en går videre i prosessen.`,methods:[],displayName:"OpptjeningFaktaPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},opptjeningAktiviteter:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"arbeidsforholdRef",value:{name:"string",required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"string",required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"OpptjeningAktivitet[]"},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const IN={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},TN=$e(IN),Xm=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,s=(e==null?void 0:e.ferdiglignetNæring)||[];return a.jsx(Le,{value:TN,children:a.jsx(Wm,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:s})})};Xm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fastsattOpptjening: FastsattOpptjening;
  opptjeningAktivitetList?: OpptjeningAktivitet[];
  ferdiglignetNæring?: FerdiglignetNæring[];
}`,signature:{properties:[{key:"fastsattOpptjening",value:{name:"signature",type:"object",raw:`{
  opptjeningFom: string;
  opptjeningTom: string;
  opptjeningperiode: {
    måneder: number;
    dager: number;
  };
  fastsattOpptjeningAktivitetList?: FastsattOpptjeningAktivitet[];
}`,signature:{properties:[{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"opptjeningperiode",value:{name:"signature",type:"object",raw:`{
  måneder: number;
  dager: number;
}`,signature:{properties:[{key:"måneder",value:{name:"number",required:!0}},{key:"dager",value:{name:"number",required:!0}}]},required:!0}},{key:"fastsattOpptjeningAktivitetList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]},required:!0}},{key:"opptjeningAktivitetList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"arbeidsforholdRef",value:{name:"string",required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"string",required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"OpptjeningAktivitet[]",required:!1}},{key:"ferdiglignetNæring",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const RN=[de.VURDER_PERIODER_MED_OPPTJENING],EN=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),{behandling:t}=h.use(xn),s=dr(RN),i=Pn(t),{data:l,isFetching:o}=Sn(i.opptjeningOptions(t));return a.jsx(or,{...n,standardPanelProps:s,faktaPanelKode:lr.OPPTJENINGSVILKARET,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:t.vilkår.some(g=>g.vilkarType===rr.OPPTJENINGSVILKARET)&&t.vilkår.some(g=>g.vilkarType===rr.MEDLEMSKAPSVILKARET&&g.vilkarStatus===Uu.OPPFYLT),children:o?a.jsx(qn,{}):a.jsx(Xm,{opptjening:l,arbeidsgiverOpplysningerPerId:e})})};EN.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Vi=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Vi||{});const NN="_boks_kspkv_1",qN="_aksjonspunkt_kspkv_9",SN="_harBorderTop_kspkv_13",Zm={boks:NN,aksjonspunkt:qN,harBorderTop:SN},PN=Vu.bind(Zm),Qm=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>a.jsx("div",{className:PN(Zm.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});Qm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const xN="_inline_1gq7u_1",FN="_topPadding_1gq7u_5",BN="_phoneIcon_1gq7u_9",_N="_docIcon_1gq7u_15",vr={inline:xN,topPadding:FN,phoneIcon:BN,docIcon:_N},ep=({saksnummer:e,inntektsmelding:n})=>a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),a.jsxs(en,{children:[a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})})}),a.jsx(x,{className:vr.topPadding,children:a.jsx(I,{size:"small",children:G(n.inntektPrMnd)})})]}),a.jsx(q,{eightPx:!0}),a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})})}),a.jsx(x,{className:vr.topPadding,children:a.jsx(I,{size:"small",children:a.jsx(k,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})})]}),a.jsx(q,{eightPx:!0}),n.refusjonPrMnd&&a.jsxs(a.Fragment,{children:[a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})})}),a.jsx(x,{className:vr.topPadding,children:a.jsx(I,{size:"small",children:G(n.refusjonPrMnd)})})]}),a.jsx(q,{eightPx:!0})]}),a.jsxs(dt,{href:el(e,n.journalpostId,n.dokumentId),target:"_blank",children:[a.jsx("span",{children:a.jsx(I,{size:"small",className:vr.inline,children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),a.jsx(Hu,{className:vr.docIcon})]}),a.jsx(q,{sixteenPx:!0}),a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(Cu,{className:vr.phoneIcon})}),a.jsxs(x,{children:[a.jsx(w,{children:a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})})})}),a.jsx(w,{children:a.jsx(x,{children:a.jsx(ke,{children:n.kontaktpersonNavn})})}),a.jsx(w,{children:a.jsx(x,{children:a.jsx(ke,{children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})})})]})]})]}),a.jsx(q,{thirtyTwoPx:!0})]});ep.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const ON="_maanedBredde_pqnhm_1",DN="_aarBredde_pqnhm_5",wN="_belopBredde_pqnhm_9",VN="_inline_pqnhm_13",MN="_arrow_pqnhm_17",yr={maanedBredde:ON,aarBredde:DN,belopBredde:wN,inline:VN,arrow:MN},GN=(e,n)=>{const t=A(e).startOf("month"),s=t.subtract(12,"month"),i=[];for(let l=t;l.isAfter(s);l=l.subtract(1,"month")){const o=l.format(Fe),g=n.find(m=>A(m.fom).startOf("month").format(Fe)===o);i.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return i},np=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=h.useState(!1),s=h.useMemo(()=>GN(n,e),[e]);return a.jsxs(a.Fragment,{children:[e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsposterPanel.Inntekter"})}),a.jsx(en,{children:s.filter((i,l)=>r?!0:l<3).map(i=>a.jsxs(w,{children:[a.jsx(x,{className:yr.maanedBredde,children:a.jsx(I,{size:"small",children:a.jsx(k,{id:`InntektsposterPanel.${A(i.fom).month()+1}`})})}),a.jsx(x,{className:yr.aarBredde,children:a.jsx(I,{size:"small",children:A(i.fom).year()})}),a.jsx(x,{className:yr.belopBredde,children:a.jsx(Ar,{children:a.jsx(I,{size:"small",children:G(i.beløp)})})})]},i.fom))}),a.jsxs(dt,{onClick:i=>{i.preventDefault(),t(!r)},href:"",children:[a.jsx("span",{children:a.jsx(I,{size:"small",className:yr.inline,children:a.jsx(k,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?a.jsx(Ci,{className:yr.arrow}):a.jsx(ms,{className:yr.arrow})]})]}),e.length===0&&a.jsx(B,{size:"small",children:a.jsx(k,{id:"InntektsposterPanel.IngenInntekt"})})]})};np.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const LN="_body_hrlo3_1",KN="_hjelpetekst_hrlo3_5",$N="_firstCol_hrlo3_9",UN="_secCol_hrlo3_13",YN="_thirdCol_hrlo3_17",HN="_fourthCol_hrlo3_21",CN="_topPadding_hrlo3_25",zN="_image_hrlo3_29",JN="_hjelpetekstInnhold_hrlo3_33",WN="_exclamationmarkIcon_hrlo3_38",XN="_checkmarkIcon_hrlo3_45",He={body:LN,hjelpetekst:KN,firstCol:$N,secCol:UN,thirdCol:YN,fourthCol:HN,topPadding:CN,image:zN,hjelpetekstInnhold:JN,exclamationmarkIcon:WN,checkmarkIcon:XN},ZN="arbeidsforhold",QN=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),eq=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,s)=>e.slice(s*25,s*25+25)).join("-")},rp=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:i,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:g,alleKodeverk:m})=>{var V;const p=W(),{inntektsmeldinger:y,inntekter:b}=s,f=t[e],c=y.find(_=>QN(f,_)),E=(V=b.find(_=>_.arbeidsgiverIdent===f.arbeidsgiverIdent))==null?void 0:V.inntekter,j=t.filter(_=>_.arbeidsgiverIdent===f.arbeidsgiverIdent).length>1,R=i[f.arbeidsgiverIdent],T=h.useRef(null),[N,S]=h.useState(!1),F=h.useCallback(()=>S(_=>!_),[]);return a.jsx(Qm,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:a.jsx(en,{children:a.jsxs(w,{children:[a.jsxs(x,{children:[!o&&a.jsx(zi,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:He.checkmarkIcon}),o&&a.jsx(xr,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:He.exclamationmarkIcon})]}),a.jsxs(x,{className:He.body,children:[a.jsxs(en,{children:[a.jsxs(w,{children:[a.jsxs(x,{className:He.firstCol,children:[a.jsx(B,{size:"small",children:R.navn}),f.arbeidsgiverIdent&&a.jsxs(ke,{children:["(",R.erPrivatPerson&&R.fødselsdato?a.jsx(Ie,{dateString:R.fødselsdato}):f.arbeidsgiverIdent,")"]})]}),a.jsxs(x,{className:He.secCol,children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Periode"})}),a.jsxs(I,{size:"small",children:[f&&a.jsx(Ye,{dateStringFom:f.fom,dateStringTom:f.tom!==Be?f.tom:void 0}),!f&&"-"]})]}),a.jsxs(x,{className:He.thirdCol,children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Kilde"})}),a.jsx(I,{size:"small",children:a.jsx(k,{id:f?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),a.jsxs(x,{className:He.fourthCol,children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),a.jsxs(I,{size:"small",children:[(c==null?void 0:c.motattDato)&&a.jsx(Ie,{dateString:c.motattDato}),!(c!=null&&c.motattDato)&&a.jsx(k,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),a.jsx(q,{sixteenPx:!0}),a.jsxs(w,{children:[a.jsxs(x,{className:He.firstCol,children:[j&&f.eksternArbeidsforholdId&&a.jsxs(a.Fragment,{children:[a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Id"})})}),a.jsxs(x,{className:He.topPadding,children:[f.eksternArbeidsforholdId.length<50&&a.jsx(I,{size:"small",children:f.eksternArbeidsforholdId}),f.eksternArbeidsforholdId.length>=50&&a.jsx(Gu,{content:eq(f.eksternArbeidsforholdId),placement:"bottom",children:a.jsx(I,{size:"small",children:`${f.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),a.jsx(q,{eightPx:!0})]}),f.stillingsprosent&&a.jsxs(a.Fragment,{children:[a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})})}),a.jsx(x,{className:He.topPadding,children:a.jsx(I,{size:"small",children:`${f.stillingsprosent}%`})})]}),a.jsx(q,{eightPx:!0})]}),c&&a.jsx(ep,{saksnummer:r,inntektsmelding:c}),!c&&E&&a.jsxs(a.Fragment,{children:[a.jsx(q,{thirtyTwoPx:!0}),a.jsx(np,{inntektsposter:E,skjæringstidspunkt:g}),a.jsx(q,{thirtyTwoPx:!0})]})]}),a.jsx(x,{children:f.permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(B,{size:"small",children:`${Qr(m,un.PERMISJONSBESKRIVELSE_TYPE,f.permisjonOgMangel.type)} 100%`}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:f.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})})]})]}),a.jsx(qe,{name:`${ZN}.${e}.permisjonStatus`,label:a.jsx(en,{children:a.jsxs(w,{children:[a.jsx(x,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"})}),a.jsxs(x,{className:He.image,children:[a.jsx(ae,{ref:T,type:"button",variant:"tertiary",onClick:F,icon:a.jsx(nl,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),a.jsx(Ir,{open:N,onClose:F,anchorEl:T.current,className:He.hjelpetekst,children:a.jsxs(Ir.Content,{className:He.hjelpetekstInnhold,children:[a.jsx(I,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),a.jsx(q,{eightPx:!0}),a.jsx(I,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),a.jsx(q,{eightPx:!0}),a.jsx(I,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),a.jsx(q,{eightPx:!0}),a.jsx(I,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})]})]})}),validate:[Z],isReadOnly:l,radios:[{label:p.formatMessage({id:c?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Vi.IKKE_BRUK_PERMISJON},{label:p.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Vi.BRUK_PERMISJON}]}),a.jsx(q,{fourPx:!0})]})]})})},n)};rp.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const nq="arbeidsforhold",tp=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:s,harÅpentAksjonspunkt:i,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:g}=Te(),{fields:m}=tn({control:g,name:nq});return a.jsx(a.Fragment,{children:m.map((p,y)=>a.jsx(rp,{fieldId:p.id,index:y,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:s,harÅpentAksjonspunkt:i,skjæringstidspunkt:l,alleKodeverk:o},p.id))})};tp.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const rq=cn(3),tq=jn(1500),sq=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),sp=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:s,isReadOnly:i,alleKodeverk:l}=Nn(),o=h.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(E=>{var j;return(j=E.permisjonOgMangel)==null?void 0:j.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:g}=o,m=h.useMemo(()=>[...g].sort(sq(n)),[g,n]),p=h.useMemo(()=>({arbeidsforhold:m.map(E=>{var j;return{permisjonStatus:(j=E.permisjonOgMangel)==null?void 0:j.permisjonStatus}}),begrunnelse:r[0].begrunnelse}),[m]),{formData:y,setFormData:b}=Kn(),f=ze({defaultValues:y||p});h.useEffect(()=>()=>{b(f.getValues())},[]);const c=r.some(E=>E.status===nr.OPPRETTET);return a.jsxs(a.Fragment,{children:[a.jsx(en,{children:a.jsxs(w,{spaceBetween:!0,children:[a.jsx(x,{children:a.jsx(se,{size:"small",children:a.jsx(k,{id:"PermisjonFaktaPanel.Overskrift"})})}),a.jsx(x,{children:a.jsx(I,{size:"small",children:a.jsx(k,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Me(o.skjæringstidspunkt)}})})})]})}),a.jsx(q,{thirtyTwoPx:!0}),c&&a.jsx(ir,{children:a.jsx(k,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),a.jsx(q,{thirtyTwoPx:!0}),a.jsxs(Je,{formMethods:f,onSubmit:E=>s({kode:de.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:E.arbeidsforhold.map((j,R)=>({internArbeidsforholdId:m[R].internArbeidsforholdId,arbeidsgiverIdent:m[R].arbeidsgiverIdent,permisjonStatus:j.permisjonStatus})),begrunnelse:E.begrunnelse}),children:[a.jsx(tp,{saksnummer:t.saksnummer,sorterteArbeidsforhold:m,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:i,harÅpentAksjonspunkt:c,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),a.jsx(q,{thirtyTwoPx:!0}),a.jsx(rn,{label:a.jsx(B,{size:"small",children:a.jsx(k,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[Z,rq,tq,hn],maxLength:1500,readOnly:i}),a.jsx(q,{sixteenPx:!0}),!i&&a.jsx(ae,{size:"small",variant:"primary",disabled:!f.formState.isDirty||f.formState.isSubmitting,loading:f.formState.isSubmitting,children:a.jsx(k,{id:"PermisjonFaktaPanel.Bekreft"})})]})]})};sp.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const aq={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i AA-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},iq=$e(aq),ap=e=>a.jsx(Le,{value:iq,children:a.jsx(sp,{...e})});ap.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonOgMangel",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"permisjonStatus",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>`,required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>`}],raw:"Arbeidsforhold[]",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>`}],raw:"Inntekt[]",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Jg=[de.VURDER_ARBEIDSFORHOLD_PERMISJON],lq=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),{behandling:t}=h.use(xn),s=dr(Jg),i=Pn(t),{data:l}=Sn(i.arbeidOgInntektOptions(t));return a.jsx(or,{...n,standardPanelProps:s,faktaPanelKode:lr.PERMISJON,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Jg.some(o=>js(o,t.aksjonspunkt)),children:l?a.jsx(ap,{arbeidOgInntekt:l,arbeidsgiverOpplysningerPerId:e}):a.jsx(qn,{})})};lq.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApneAksjonspunkter?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var ue=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ue||{});function ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wg={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function dq(){if(Xg)return $r;Xg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return $r.Fragment=n,$r.jsx=r,$r.jsxs=r,$r}var Zg;function oq(){return Zg||(Zg=1,Wg.exports=dq()),Wg.exports}var d=oq(),Qg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var eu;function gq(){return eu||(eu=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=s(i,t.call(this,o)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)n.call(i,o)&&i[o]&&(l=s(l,this&&this[o]||o));return l}function s(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Qg)),Qg.exports}var uq=gq();const kq=ip(uq);var xs=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(xs||{}),Fs=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Fs||{}),K=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(K||{});Fs.BRUKERS_ANDEL;Fs.FRILANS;Fs.EGEN_NÆRING;const mq=["FL","AT_FL","AT_FL_SN","FL_SN"],pq=["AT","AT_FL","AT_FL_SN","AT_SN"],vq=["SN","FL_SN","AT_FL_SN","AT_SN"],yq=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],fq=["DP","SP_AV_DP","PSB_AV_DP","AAP"],bq=["KUN_YTELSE"],cq=["MS"],lp=e=>fq.some(n=>n===e),jq=e=>bq.some(n=>n===e),dp=e=>mq.some(n=>n===e),op=e=>pq.some(n=>n===e),gp=e=>vq.some(n=>n===e),hq=e=>yq.some(n=>n===e),Aq=e=>cq.some(n=>n===e);var up=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(up||{});const Bs=e=>e==="OPPR";var kp=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(kp||{}),fn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(fn||{}),Mi=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(Mi||{}),Gi=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Gi||{}),hr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(hr||{}),mp=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(mp||{}),wl=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(wl||{}),ye=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(ye||{}),pp=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(pp||{}),An=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(An||{});const nu=e=>e?`...${e.substring(e.length-4,e.length)}`:"",_s=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:s,identifikator:i}=e;return s?t?`${r} (${A(t).format(te)})${nu(n)}`:r:i?`${r} (${i})${nu(n)}`:r},ru=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[xs.OPPTJENING_AKTIVITET_TYPE].find(t=>{var s;return t.kode===((s=e.arbeidsforhold)==null?void 0:s.arbeidsforholdType)}))==null?void 0:r.navn)||""},Li=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?_s(t,e.arbeidsforhold.eksternArbeidsforholdId):ru(e,r)}return ru(e,r)},Iq="_aksjonspunktBehandlerBorder_13dyh_1",Tq="_aksjonspunktBehandlerHeader_13dyh_10",Rq="_aksjonspunktBehandlerImageCol_13dyh_18",Eq="_aksjonspunktBehandlerTextCol_13dyh_24",Nq="_aksjonspunktBehandlerNoBorder_13dyh_27",qq="_verticalLine_13dyh_40",Sq="_verticalAlignMiddle_13dyh_47",Pq="_inputPadding_13dyh_54",xq="_inntektTableTB_13dyh_65",Fq="_rowSpacer_13dyh_69",Bq="_textAreaWrapperHeigh_13dyh_112",_q="_dynamiskKolonne_13dyh_119",Oq="_textAreaStyle_13dyh_123",Dq="_atflAvvikAktivitet_13dyh_129",wq="_atflAvvikInntekt_13dyh_133",Vq="_breddeInntekt_13dyh_139",Mq="_warningIcon_13dyh_142",Gq="_aksjonspunktWrapper_13dyh_148",oe={aksjonspunktBehandlerBorder:Iq,aksjonspunktBehandlerHeader:Tq,aksjonspunktBehandlerImageCol:Rq,aksjonspunktBehandlerTextCol:Eq,aksjonspunktBehandlerNoBorder:Nq,verticalLine:qq,verticalAlignMiddle:Sq,inputPadding:Pq,inntektTableTB:xq,rowSpacer:Fq,textAreaWrapperHeigh:Bq,dynamiskKolonne:_q,textAreaStyle:Oq,atflAvvikAktivitet:Dq,atflAvvikInntekt:wq,breddeInntekt:Vq,warningIcon:Mq,aksjonspunktWrapper:Gq},Lq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,vp=e=>e?e.filter(n=>n.aktivitetStatus===K.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>Lq(n)):[],Kq=(e,n,r,t,s,i,l)=>e.map((o,g)=>d.jsxs(w,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.atflAvvikAktivitet,children:d.jsx(I,{size:"small",children:Li(o,t,n)})}),d.jsx(x,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:r?oe.inputPadding:void 0,children:d.jsx(je,{name:`${i}.${s}.inntekt${g}`,validate:l?[Z,sn(178956970)]:[],readOnly:r,parse:De,className:oe.breddeInntekt,isEdited:r&&(!!o.overstyrtPrAar||o.overstyrtPrAar===0)})})})]},`index${g+1}`)),Vl=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:s,formName:i,skalValideres:l})=>{const o=vp(n);return d.jsx(d.Fragment,{children:Kq(o,r,e,t,s,i,l)})};Vl.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===K.ARBEIDSTAKER)&&(r=vp(n).map(({andelsnr:t},s)=>{const i=e[`inntekt${s}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:i===void 0||i===""?0:fe(i),andelsnr:t}})),r};const $q="_avsnittOverskrift_3qwr0_1",Uq="_venstreKolonne_3qwr0_5",Yq="_hoyreKolonne_3qwr0_8",Hq="_panelLeft_3qwr0_11",Cq="_panelRight_3qwr0_21",zq="_storSpace_3qwr0_32",Jq="_semiBoldText_3qwr0_35",Wq="_redError_3qwr0_41",Xq="_tabellAktivitet_3qwr0_44",Zq="_tabellInntekt_3qwr0_54",Qq="_tagMargin_3qwr0_85",$={avsnittOverskrift:$q,venstreKolonne:Uq,hoyreKolonne:Yq,panelLeft:Hq,panelRight:Cq,storSpace:zq,semiBoldText:Jq,næringEndringBeskrivelse:"_næringEndringBeskrivelse_3qwr0_38",redError:Wq,tabellAktivitet:Xq,tabellInntekt:Zq,næringOpplysningNavn:"_næringOpplysningNavn_3qwr0_66",næringOpplysningInntekt:"_næringOpplysningInntekt_3qwr0_69",næringOpplysningOrgnr:"_næringOpplysningOrgnr_3qwr0_73",næringOpplysningDato:"_næringOpplysningDato_3qwr0_76",tagMargin:Qq},tu="inntektField",eS=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(hr.ARBEIDSFORHOLD_AVSLUTTET),Os=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!eS(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},Sr=(e,n)=>e.arbeidsforhold?`${tu}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${tu}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,Ds=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===K.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],yp=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},nS=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return s?_s(s,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[xs.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},fp=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),rS=(e,n,r)=>{const t=Ds(e),s={};return t.forEach(i=>{if(!i.arbeidsforhold)return;const l=yp(i.arbeidsforhold),o=fp();o.tabellInnhold=nS(i.arbeidsforhold,n,r),o.erTidsbegrenset=i.erTidsbegrensetArbeidsforhold!==void 0?i.erTidsbegrensetArbeidsforhold:!1,s[l]=[o]}),s},Ml=e=>e.sort((n,r)=>A(n.beregningsgrunnlagPeriodeFom).diff(A(r.beregningsgrunnlagPeriodeFom)))[0],bp=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===K.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var s,i,l,o;return((s=t.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)===((i=e.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Gl=(e,n)=>{var r;const t=Ml(n);return!!((r=bp(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},tS=(e,n,r)=>{const t=Os(e),s=e[0].beregningsgrunnlagPeriodeFom,i=rS(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===s;Ds(l).forEach(g=>{const m=Gl(g,e),p=yp(g.arbeidsforhold),y=fp();y.tabellInnhold=g.overstyrtPrAar!==void 0&&g.overstyrtPrAar!==null?G(g.overstyrtPrAar):"",y.erTidsbegrenset=!1,y.isEditable=m?!0:o,y.inputfieldKey=Sr(g,l),i[p].push(y)})}),i},sS=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(I,{size:"small",className:$.semiBoldText,children:G(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),aS=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:Me(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),iS=(e,n,r,t,s,i,l)=>{const o=[];return o.push(aS(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((g,m)=>d.jsx(Y.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${g.periodeFom}`)})},`Col_Tittel_${g.periodeFom}`)},`PeriodeWrapper${m+1}`))]},"Tabletop")),Object.keys(e).forEach(g=>{const m=e[g];o.push(d.jsx("tr",{children:m.map(p=>p.isEditable?d.jsx(Y.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?oe.adjustedField:void 0,children:d.jsx(je,{name:`${i}.${s}.${p.inputfieldKey}`,validate:l?[Z,sn(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:De,className:oe.breddeInntekt})})},`Col-${p.inputfieldKey}`)},`key${p.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(I,{size:"small",children:p.tabellInnhold})},p.tabellInnhold))},g))}),o.push(d.jsx("tr",{className:oe.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(sS(t)),o},lS=(e,n,r,t)=>{const s=[];return e.length<1||Os(e).forEach(i=>{const l=Ds(i).map(o=>{const g=Sr(o,i),m=n.watch(`${t}.${r}.${g}`);return m===void 0||m===""?0:fe(m)}).reduce((o,g)=>o+g);s.push({brutto:l,periodeFom:i.beregningsgrunnlagPeriodeFom,periodeTom:i.beregningsgrunnlagPeriodeTom})}),s},Ft=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:s,formName:i,skalValideres:l})=>{const o=tS(n,r,t),g=n.some(y=>{var b;return(b=y.beregningsgrunnlagPrStatusOgAndel)==null?void 0:b.some(f=>f.aktivitetStatus===K.ARBEIDSTAKER&&(!!f.overstyrtPrAar||f.overstyrtPrAar===0))}),m=Te(),p=lS(n,m,s,i);return d.jsx("table",{className:oe.inntektTableTB,children:d.jsx("tbody",{children:iS(o,e,g,p,s,i,l)})})};Ft.buildInitialValues=e=>{const n={},r=Os(e),t=Ml(e);return r.forEach(s=>{(s.beregningsgrunnlagPrStatusOgAndel?s.beregningsgrunnlagPrStatusOgAndel.filter(i=>i.aktivitetStatus===K.ARBEIDSTAKER):[]).forEach(i=>{if(Gl(i,e)){const l=G(i.overstyrtPrAar);n[Sr(i,s)]=l||""}else{const l=bp(i,t),o=G(l==null?void 0:l.overstyrtPrAar);n[Sr(i,s)]=o||""}})}),n};Ft.transformValues=(e,n)=>{const r=[],t=Ml(n);return Os(n).forEach(s=>{const i=Ds(s),l=[];i.forEach(o=>{if(Gl(o,n)){const g=fe(e[Sr(o,s)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}else{const g=fe(e[Sr(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}}),r.push({periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const dS="_colDevider_1att7_1",oS={colDevider:dS},bn=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx(w,{children:d.jsx("div",{style:{width:n},children:d.jsx(x,{children:d.jsx("div",{className:oS.colDevider})})})})},cp=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,gS=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return _s(r,e.arbeidsforhold.eksternArbeidsforholdId)},jp=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],uS=(e,n)=>{const r=gS(e,n),t=cp(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},kS=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},mS=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{jp(t).filter(s=>kS(s)).map(s=>uS(s,n)).forEach(s=>{r.some(({nøkkel:i})=>i===s.nøkkel)||r.push(s)})}),r},pS=(e,n)=>{const r=jp(e).find(t=>cp(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},vS=(e,n)=>{const r=[];return n.forEach(t=>{const s=pS(t,e.nøkkel);s&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:s,beløpPrMåned:s/12})}),r},yS=e=>{if(!e||e.length<2)return e;e.sort((t,s)=>A(t.fom).diff(A(s.fom)));const n=[];let r=A(e[0].fom);return e.forEach(t=>{if(!A(t.fom).isBefore(r)){const s=e.find(i=>A(i.fom).isAfter(t.fom)&&i.beløpPrÅr!==t.beløpPrÅr);if(s){const i=A(s.fom).subtract(1,"d");n.push({tom:i.format(Fe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=i}else r=A(Be),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},fS=(e,n)=>{const r=mS(e,n);return r.forEach(t=>{const s=vS(t,e);yS(s).forEach(i=>t.naturalytelseEndringer.push(i))}),!r||r.length<1?void 0:{rader:r}},bS=e=>e.tom?`${Me(e.fom)} - ${Me(e.tom)}`:`${Me(e.fom)} -`,cS=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=h.useMemo(()=>fS(e,n),[e]);return r?d.jsxs("div",{children:[d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(ne,{gap:"0",children:[d.jsxs(z,{gap:"10",justify:"end",children:[d.jsx(ke,{style:{width:"70px"},children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{style:{width:"70px"},children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),r.rader.map(t=>d.jsxs("div",{children:[d.jsx(B,{size:"small",children:t.visningsnavn}),d.jsx(ne,{gap:"1",children:t.naturalytelseEndringer.map(s=>d.jsxs(z,{justify:"space-between",children:[d.jsx(I,{size:"small",children:bS(s)}),d.jsxs(z,{gap:"10",children:[d.jsx(I,{size:"small",style:{width:"70px"},children:G(s.beløpPrMåned)}),d.jsx(B,{size:"small",style:{width:"70px"},children:G(s.beløpPrÅr)})]})]},t.nøkkel+s.fom))})]},t.nøkkel))]})]}):null},jS=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,hp=e=>e?e.filter(n=>n.aktivitetStatus===K.ARBEIDSTAKER).filter(n=>jS(n)):[],hS=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(Me(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(Me(e.opphoersdato))),n.join(" ")},AS=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},su=e=>e.beregnetPrAar?e.beregnetPrAar:0,IS=(e,n,r)=>{const t=e.reduce((l,o)=>l+su(o),0),s=t?t/12:0,i=e.map((l,o)=>d.jsxs(Y.Fragment,{children:[d.jsx(ne,{gap:"2",children:d.jsxs(z,{justify:"space-between",children:[d.jsx(B,{size:"small",className:$.semiBoldText,children:Li(l,r,n)}),d.jsxs(z,{gap:"10",children:[d.jsx(I,{children:G(su(l)/12)}),d.jsx(B,{children:G(l.beregnetPrAar)})]})]})}),d.jsx(ne,{gap:"2",children:d.jsxs(z,{gap:"2",children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(I,{children:AS(l.arbeidsforhold)}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(ke,{children:hS(l.arbeidsforhold)}),l.erTidsbegrensetArbeidsforhold&&d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})]})}),d.jsx(bn,{prosentBredde:100})]},`ArbInntektWrapper${Li(l,r,n)}${o+1}`));if(e.length>1){const l=d.jsx(ne,{gap:"0",children:d.jsxs(z,{justify:"space-between",children:[d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"}),d.jsxs(z,{gap:"10",justify:"end",children:[d.jsx(I,{children:G(s)}),d.jsx(B,{children:G(t)})]})]})});i.push(l)}return i},Ll=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const s=hp(e);return!s||s.length===0?null:d.jsxs(ne,{gap:"8",children:[d.jsxs(ne,{gap:"2",children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})}),d.jsxs(ne,{gap:"1",children:[d.jsxs(z,{gap:"10",justify:"end",children:[d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(bn,{prosentBredde:100}),IS(s,t,r)]})]}),d.jsx(cS,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};Ll.buildInitialValues=e=>{const n=hp(e),r={};return n.forEach((t,s)=>{r[`inntekt${s}`]=G(t.overstyrtPrAar)||""}),r};var Ki={exports:{}},TS=Ki.exports,au;function RS(){return au||(au=1,function(e,n){(function(r,t){e.exports=t(A)})(TS,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var s=t(r),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(i,null,!0),i})}(Ki)),Ki.exports}var ES=RS();const $i=ip(ES),NS=({option:e,style:n,height:r})=>{const t=h.useRef(null);return h.useEffect(()=>{let s;t.current!==null&&(s=Vv(t.current));const i=()=>{s==null||s.resize()};return window.addEventListener("resize",i),()=>{s==null||s.dispose(),window.removeEventListener("resize",i)}},[]),h.useEffect(()=>{if(t.current!==null){const s=Mv(t.current);s&&(s.setOption(e),(s==null?void 0:s.getWidth())===0&&(s==null||s.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},qS="_sammenligningGrafOppsummeringType_1dad0_4",SS="_sammenligningGrafOppsummeringInntekt_1dad0_7",PS="_readMore_1dad0_12",Jn={sammenligningGrafOppsummeringType:qS,sammenligningGrafOppsummeringInntekt:SS,readMore:PS},xS=[],FS="#99bdcd",BS="#c1b5d0",_S="#C6C2BF",OS=(e,n)=>{const r=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===fn.ARBEID).map(({beløp:i})=>i).reduce((i,l)=>i+l,0),t=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===fn.FRILANS).map(({beløp:i})=>i).reduce((i,l)=>i+l,0),s=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===fn.YTELSE).map(({beløp:i})=>i).reduce((i,l)=>i+l,0);return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:$.storSpace}),d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})})})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(w,{children:[d.jsx(x,{className:Jn.sammenligningGrafOppsummeringType,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})})}),d.jsx(x,{className:Jn.sammenligningGrafOppsummeringInntekt,children:d.jsx(I,{size:"small",children:G(r)})})]}),d.jsx(bn,{prosentBredde:20})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(w,{children:[d.jsx(x,{className:Jn.sammenligningGrafOppsummeringType,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})})}),d.jsx(x,{className:Jn.sammenligningGrafOppsummeringInntekt,children:d.jsx(I,{size:"small",children:G(t)})})]}),d.jsx(bn,{prosentBredde:20})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(w,{children:[d.jsx(x,{className:Jn.sammenligningGrafOppsummeringType,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})})}),d.jsx(x,{className:Jn.sammenligningGrafOppsummeringInntekt,children:d.jsx(I,{size:"small",children:G(s)})})]}),d.jsx(bn,{prosentBredde:20})]})]})},DS=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),ci=(e,n,r)=>{const t=[];for(let s=0;s<12;s+=1){const i=A(n,Fe).add(s,"M").format("YYYYMM"),l=e.find(g=>A(g.fom,Fe).format("YYYYMM")===i),o=DS((l==null?void 0:l.inntekter)||[],r);t.push([o,i])}return t},wS=()=>d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(se,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})})})},"SamenenligningsGrunnlagOverskrift"),d.jsx(q,{eightPx:!0}),d.jsx(w,{children:d.jsx(x,{children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})})})]}),ji=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),VS=e=>({harFrilansinntekt:ji(e,fn.FRILANS),harArbeidsinntekt:ji(e,fn.ARBEID),harYtelseinntekt:ji(e,fn.YTELSE)}),MS=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=W(),t=(e==null?void 0:e.måneder)||xS,s=h.useMemo(()=>VS(t),[t]),i=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=h.useMemo(()=>s.harArbeidsinntekt&&i?ci(t,i,fn.ARBEID):[],[s.harArbeidsinntekt,t,i]),o=h.useMemo(()=>s.harFrilansinntekt&&i?ci(t,i,fn.FRILANS):[],[s.harArbeidsinntekt,t,i]),g=h.useMemo(()=>s.harYtelseinntekt&&i?ci(t,i,fn.YTELSE):[],[s.harArbeidsinntekt,t,i]),m=h.useCallback(f=>f.value[0]>5e3?G(f.value[0])||"":f.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const p=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),y=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),b=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(xe,{size:"medium",header:wS(),defaultOpen:!0,className:Jn.readMore,children:d.jsx(NS,{option:{tooltip:{trigger:"axis",formatter:f=>{const c=f,E=c[0].data,j=A(E[1]),R=j.locale($i).format("MMM"),T=j.format("YYYY"),N=`${R.charAt(0).toUpperCase()+R.slice(1)} ${T}`,S=c.reduce((F,V)=>{const _=V.data;return F.concat(`${(V.marker||"")+(V.seriesName||"")}: ${G(_[0])}`)},[]).join("<br/>");return`${N}<br />${S}`},axisPointer:{type:"shadow"}},legend:{data:[p,y,b]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:f=>G(f)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:f=>{const c=A(f),E=c.format("MM")==="01"||c.format("MM")==="12",j=c.locale($i).format("MMM"),R=c.format("YYYY"),T=j.charAt(0).toUpperCase()+j.slice(1,3);return E?`${T}
${R}`:T}}},series:[{name:p,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:l},{name:y,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:o},{name:b,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:g}],color:[FS,BS,_S]},height:350})}),OS(t,s)]})},GS=({alleAndeler:e})=>{var n;const r=e.find(i=>!i.erTilkommetAndel&&i.aktivitetStatus===K.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,s=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsx(q,{fourPx:!0}),d.jsxs(w,{className:$.rows,children:[d.jsx(x,{className:$.tabellAktivitet,children:s&&d.jsxs(I,{size:"small",children:[d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:$.semiBoldText,children:d.jsx(Ie,{dateString:s})})]})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(bn,{prosentBredde:100}),d.jsxs(w,{className:$.rows,children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:t?G(t/12):0})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:t?G(t):0})})]})]})},LS=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===K.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})})})}),d.jsx(q,{eightPx:!0}),d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:G(r)})})})]})},KS=[],$S=(e,n,r)=>{var t,s,i;const l=r.find(y=>y.år===e),o=l&&((t=l.inntekter.find(y=>y.pgiType===Mi.NÆRING))==null?void 0:t.beløp)||0,g=l&&((s=l.inntekter.find(y=>y.pgiType===Mi.LØNN))==null?void 0:s.beløp)||0,m=o+g,p=(i=n.find(y=>y.årstall===e))==null?void 0:i.beløp;return d.jsxs(P.Row,{shadeOnHover:!0,children:[d.jsx(P.DataCell,{children:e}),d.jsx(P.DataCell,{align:"right",children:G(g)}),d.jsx(P.DataCell,{align:"right",children:G(o)}),d.jsx(P.DataCell,{align:"right",children:G(m)}),d.jsx(P.DataCell,{align:"right",children:G(p)})]},e)},US=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>$S(r,e,n)),YS=e=>d.jsxs(P.Row,{shadeOnHover:!0,children:[d.jsx(P.DataCell,{children:d.jsx(B,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(P.DataCell,{}),d.jsx(P.DataCell,{}),d.jsx(P.DataCell,{}),d.jsx(P.DataCell,{align:"right",children:d.jsx(B,{children:G(e)})})]},"PGI-Oppsumert"),HS=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===K.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||KS;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:s,pgiSnitt:i}=r;return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(P,{children:[d.jsx(P.Header,{children:d.jsxs(P.Row,{children:[d.jsx(P.HeaderCell,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(P.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(P.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(P.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(P.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(P.Body,{children:[US(s,t),YS(i)]})]})]})},CS="_merTekstBorder_1w256_9",zS={merTekstBorder:CS},JS=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},iu=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${Me(n)}-${Me(r)} `:`${Me(n)}-`},WS=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},XS=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},ZS=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,s=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",i=r?t:n;return i?d.jsx(B,{size:"small",className:$.semiBoldText,children:d.jsx(k,{id:s,values:{dato:Me(i),b:l=>d.jsx("b",{children:l})}})}):null},QS=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},eP=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(I,{size:"small",className:zS.merTekstBorder,children:e.begrunnelse}):null,nP=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,rP=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(d.Fragment,{children:[d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})})}),d.jsx(x,{className:$.tabellAktivitet}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})})]}),d.jsx(bn,{prosentBredde:100}),r.næringer.map(t=>d.jsxs(Y.Fragment,{children:[d.jsxs(w,{children:[d.jsx(x,{className:$.næringOpplysningNavn,children:d.jsx(B,{size:"small",className:$.semiBoldText,children:XS(t,n)})}),d.jsx(x,{className:$.næringOpplysningInntekt,children:nP(t)&&d.jsx(B,{size:"small",children:G(t.oppgittInntekt)})})]}),d.jsxs(w,{children:[d.jsx(x,{className:$.næringOpplysningOrgnr,children:d.jsx(I,{size:"small",children:t&&t.orgnr?t.orgnr:""})}),d.jsx(x,{className:$.næringOpplysningDato,children:iu(t)&&d.jsx(I,{size:"small",children:iu(t)})})]},`NaringsDetaljer${t.orgnr}`),d.jsx(w,{children:d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:JS(t)})})})}),d.jsx(w,{children:d.jsx(x,{children:t.regnskapsførerNavn&&d.jsx(I,{size:"small",children:WS(t)})})},`RevisorRad${t.orgnr}`),QS(t)&&d.jsxs(d.Fragment,{children:[d.jsx(bn,{prosentBredde:100}),d.jsx(q,{twentyPx:!0}),ZS(t),d.jsx(q,{eightPx:!0}),d.jsx(w,{className:$.næringEndringBeskrivelse,children:d.jsx(x,{children:eP(t)})})]})]},`NaringsWrapper${t.orgnr}`))]}):null},tP=e=>e.aktivitetStatus===K.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===K.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===K.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===K.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",sP=e=>e===K.DAGPENGER,aP=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(i=>lp(i.aktivitetStatus)),s=t.length>1;return d.jsxs(d.Fragment,{children:[n.isKombinasjonsstatus&&d.jsxs(d.Fragment,{children:[d.jsx(q,{eightPx:!0}),d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsx(q,{eightPx:!0})]}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(bn,{prosentBredde:100}),t.map(i=>d.jsxs("div",{children:[d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(B,{size:"small",children:d.jsx(k,{id:tP(i)})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(i.beregnetPrAar?i.beregnetPrAar/12:0)})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",className:s?"":$.semiBoldText,children:G(i.beregnetPrAar)})})]}),d.jsx(bn,{prosentBredde:100}),r&&sP(i.aktivitetStatus)&&d.jsx(w,{children:d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})})})]},i.aktivitetStatus))]})},iP=({bruttoPrAar:e})=>e||e===0?d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsxs(x,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsx(q,{eightPx:!0})]})}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(e/12)})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:G(e)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:lP,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:dP}=ue,oP=e=>e&&e.find(n=>n.definisjon===lP||n.definisjon===dP),gP=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],Cn=d.jsx("div",{className:$.storSpace}),uP=(e,n,r,t,s,i,l,o)=>d.jsxs("div",{className:$.panelLeft,children:[n.isArbeidstaker&&d.jsx(Ll,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:i}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[Cn,d.jsx(GS,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[Cn,d.jsx(aP,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[Cn,d.jsx(LS,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[Cn,d.jsx(iP,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[Cn,d.jsx(HS,{alleAndeler:e,inntektsgrunnlag:o}),Cn,d.jsx(rP,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:i})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[Cn,d.jsx(MS,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),sr=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:s=void 0,arbeidsgiverOpplysningerPerId:i,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=gP(n);return uP(o,e,n,r,t,i,l,s)};sr.buildInitialValues=e=>{const n=oP(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};sr.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:Vl.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?fe(e.inntektFrilanser):null});sr.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:Ft.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?fe(e.inntektFrilanser):null});const kP="_kolBeskrivelse_1czvx_1",mP="_kolVerdi_1czvx_4",pP="_radNoBorder_1czvx_9",vP="_radDobbelLinje_1czvx_14",yP="_radEnkelLinje_1czvx_20",fP="_radTykkLinje_1czvx_24",ce={kolBeskrivelse:kP,kolVerdi:mP,radNoBorder:pP,radDobbelLinje:vP,radEnkelLinje:yP,radTykkLinje:fP,kolVerdiRød:"_kolVerdiRød_1czvx_28",avslåttIkon:"_avslåttIkon_1czvx_38"},bP=260,Ap={[K.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[K.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[K.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[K.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[K.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[K.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[K.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[K.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[K.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[K.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},lu=e=>{var n;return((n=Ap[e.status])==null?void 0:n.rekkefølgePri)||100},cP=e=>{var n;return((n=Ap[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},jP=()=>d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),hP=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),AP=(e,n)=>(n==null?void 0:n.ytelsetype)!==wl.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/bP):e.dagsats||0,Wn=()=>d.jsx("div",{className:ce.radEnkelLinje}),IP=(e,n)=>d.jsxs(z,{gap:"2",children:[d.jsx(vv,{className:ce.avslåttIkon}),d.jsx(I,{size:"small",className:ce.avslåttIkon,children:d.jsx(k,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:G(e),b:r=>d.jsx("b",{children:r})}})})]}),TP=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===K.MIDLERTIDIG_INAKTIV),RP=(e,n,r,t)=>{const s=e.andeler.reduce((p,y)=>(y.inntektPlussNaturalytelse||0)+p,0);if(n.vilkarStatus===Gi.IKKE_VURDERT)return null;if(n.vilkarStatus===Gi.IKKE_OPPFYLT)return IP(r.grunnbeløp,TP(r));const i=r.grunnbeløp*6,l=s>i,o=r.dekningsgrad!==mp.HUNDRE,g=AP(e,r.ytelsesspesifiktGrunnlag),m=t&&(l||o);return d.jsxs(en,{children:[m&&d.jsx(q,{fourtyPx:!0}),l&&d.jsxs(d.Fragment,{children:[Wn(),d.jsxs(w,{className:ce.radNoBorder,children:[d.jsx(x,{className:ce.kolBeskrivelse,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})})}),d.jsx(x,{className:ce.kolVerdi,children:d.jsx(I,{size:"small",children:G(e.avkortetPrÅr)})})]}),Wn()]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(d.Fragment,{children:Wn()}),d.jsxs(w,{className:ce.radNoBorder,children:[d.jsx(x,{className:ce.kolBeskrivelse,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})})}),d.jsx(x,{className:ce.kolVerdi,children:d.jsx(I,{size:"small",children:G(e.redusertPrÅr)})})]}),Wn()]}),d.jsx(q,{fourtyPx:!0}),d.jsxs(w,{className:ce.radNoBorder,children:[d.jsx(x,{className:ce.kolBeskrivelse,children:d.jsx(B,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})})}),d.jsx(x,{className:ce.kolVerdi,children:d.jsx(B,{size:"medium",children:g})})]}),d.jsx("div",{className:ce.radDobbelLinje})]})},EP=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const s=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,g)=>lu(o)-lu(g));const i=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(ne,{gap:"5",children:[d.jsxs("div",{children:[n&&d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(se,{size:"xsmall",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:A(e.fom).format(te),tom:e.tom?A(e.tom).format(te):""}})})})}),d.jsx(q,{eightPx:!0})]}),e.andeler.map((o,g)=>d.jsxs(Y.Fragment,{children:[g===0&&d.jsx(d.Fragment,{children:Wn()}),d.jsxs(w,{className:ce.radNoBorder,children:[d.jsx(x,{className:ce.kolBeskrivelse,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:cP(o)})})}),d.jsx(x,{className:ce.kolVerdi,children:d.jsx(I,{size:"small",className:o.erFerdigBeregnet?"":ce.kolVerdiRød,children:o.erFerdigBeregnet?G(o.inntekt):jP()})})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[Wn(),d.jsxs(w,{className:ce.radNoBorder,children:[d.jsx(x,{className:ce.kolBeskrivelse,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})})}),d.jsx(x,{className:ce.kolVerdi,children:d.jsx(I,{size:"small",children:G(o.bortfaltNaturalytelse)})})]})]}),Wn()]},o.status)),s&&d.jsxs(d.Fragment,{children:[d.jsxs(w,{className:ce.radNoBorder,children:[d.jsx(x,{className:ce.kolBeskrivelse,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})})}),d.jsx(x,{className:ce.kolVerdi,children:d.jsx(I,{size:"small",children:G(hP(e.andeler))})})]}),d.jsx("div",{className:ce.radTykkLinje})]})]}),l&&d.jsx(d.Fragment,{children:RP(e,r,t,i)})]})},NP=[hr.ARBEIDSFORHOLD_AVSLUTTET,hr.NATURALYTELSE_TILKOMMER,hr.NATURALYTELSE_BORTFALT],qP=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,SP=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,PP=(e,n)=>{switch(e){case K.ARBEIDSTAKER:case K.FRILANSER:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case K.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case K.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},xP=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,s=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-s:0},FP=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},BP=(e,n)=>{const r=e.filter(i=>qP(i)),t={};r.forEach(i=>{const l=t[i.aktivitetStatus];l?l.push(i):t[i.aktivitetStatus]=[i]});const s=[];return Object.keys(t).forEach(i=>{const l=t[i],o=PP(i,n),g=l.every(c=>FP(c)),m=l.reduce((c,E)=>SP(E)+c,0),p=l.reduce((c,E)=>xP(E)+c,0),y=(m||0)+(p||0),b=!!o&&Bs(o.status),f=g&&!b;s.push({inntekt:m,bortfaltNaturalytelse:p,inntektPlussNaturalytelse:y,erFerdigBeregnet:f,status:i})}),s},_P=e=>e.some(n=>NP.includes(n)),OP=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(s=>s.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!s.periodeAarsaker&&_P(s.periodeAarsaker)).map(s=>s.beregningsgrunnlagPeriodeFom).sort((s,i)=>new Date(s).getTime()-new Date(i).getTime()),t=[];for(let s=0;s<r.length;s+=1){const i=r[s],l=s+1<r.length?A(r[s+1]).subtract(1,"day").format(Fe).toString():void 0,o=n.find(f=>f.beregningsgrunnlagPeriodeFom===i),g=(o==null?void 0:o.periodeAarsaker)||[],m=BP((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),p=o==null?void 0:o.redusertPrAar,y=o==null?void 0:o.avkortetPrAar,b=o==null?void 0:o.dagsats;t.push({fom:i,tom:l,årsak:g,andeler:m,redusertPrÅr:p,avkortetPrÅr:y,dagsats:b})}return t},DP=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=h.useMemo(()=>OP(e),[e]),t=r.length>1;return d.jsxs("div",{className:$.panelRight,children:[d.jsx(se,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(q,{eightPx:!0}),r.map(s=>d.jsxs("div",{children:[d.jsx(EP,{tabellData:s,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e}),d.jsx(q,{fourtyPx:!0})]},s.fom))]})},wP=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,VP=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>wP(n)).reduce((n,r)=>n+r,0):0,MP=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,du=(e,n)=>e>n,GP=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=VP(e),t=MP(n);return d.jsx("div",{children:d.jsxs(ne,{gap:"4",children:[d.jsx(I,{size:"small",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})}),d.jsxs(P,{children:[d.jsx(P.Header,{children:d.jsxs(P.Row,{children:[d.jsx(P.HeaderCell,{scope:"col"}),d.jsx(P.HeaderCell,{scope:"col",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})}),d.jsx(P.HeaderCell,{scope:"col",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),d.jsx(P.Body,{children:d.jsxs(P.Row,{children:[d.jsx(P.DataCell,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(P.DataCell,{children:d.jsx(I,{size:"small",children:G(r)})}),d.jsx(P.DataCell,{children:d.jsx(I,{size:"small",children:G(t)})})]})})]}),d.jsxs(I,{size:"small",children:[du(r,t)&&d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!du(r,t)&&d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]})})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Ip,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Kl,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Tp,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Rp,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ep}=ue,LP=(e,n)=>{switch(e.definisjon){case Ip:return n.find(r=>r.sammenligningsgrunnlagType===ye.ATFLSN||r.sammenligningsgrunnlagType===ye.SN);case Kl:return n.find(r=>r.sammenligningsgrunnlagType===ye.MIDLERTIDIG_INAKTIV);case Tp:case Rp:return n.find(r=>r.sammenligningsgrunnlagType===ye.ATFLSN||r.sammenligningsgrunnlagType===ye.AT_FL||r.sammenligningsgrunnlagType===ye.AT||r.sammenligningsgrunnlagType===ye.FL);case Ep:return;default:return}},KP=(e,n)=>{const r=LP(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},ou=e=>e&&e.length>0,$P=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],UP={[Tp]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[Rp]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[Ep]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[Kl]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},YP=(e,n)=>e.definisjon===Ip?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":UP[e.definisjon],HP=(e,n,r)=>{var t;const s=r.find(l=>l.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE),i=!!((t=s==null?void 0:s.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsxs("div",{children:[d.jsx(ir,{children:e.map(l=>d.jsx(B,{children:d.jsx(k,{id:YP(l,i||l.definisjon===Kl),values:{verdi:KP(l,n),b:o=>d.jsx("b",{children:o}),br:d.jsx("br",{})}})},l.definisjon))}),d.jsx(q,{thirtyTwoPx:!0})]})},CP=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],s=e.filter(l=>Bs(l.status));if(!(ou(s)&&ou(t)))return null;const i=$P(n);return d.jsxs(d.Fragment,{children:[d.jsx(q,{eightPx:!0}),HP(s,i,t)]})},zP=e=>e.some(n=>n.aktivitetStatus===K.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),$l=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:s})=>d.jsxs(w,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.atflAvvikAktivitet,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})})}),d.jsx(x,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(je,{name:`${r}.${n}.inntektFrilanser`,validate:s?[Z,sn(178956970)]:void 0,readOnly:e,parse:De,className:oe.breddeInntekt,isEdited:e&&zP(t)})})})]});$l.buildInitialValues=e=>{const n=e.length>0?G(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const Np={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},JP=$e(Np),WP=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,XP=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:s,onClick:i,hasEmptyRequiredFields:l})=>e?null:d.jsx(ae,{variant:"primary",size:"small",loading:r,disabled:WP(t,r,n,l),onClick:i||wu,type:i?"button":"submit",children:s||JP.formatMessage({id:"SubmitButton.ConfirmInformation"})}),qp=4e3,ZP=jn(qp),QP=cn(3),Ul="fastsettBeregningsgrnunnlagSNBegrunnelse",Yl="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:ex}=ue,Or=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:s,avklaringsbehov:i})=>{const l=W();return d.jsxs(d.Fragment,{children:[r&&d.jsxs(d.Fragment,{children:[d.jsxs(w,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.dynamiskKolonne,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})})}),d.jsx(x,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(je,{name:`${s}.${t}.${Yl}`,validate:[Z,sn(178956970)],parse:De,className:oe.breddeInntekt,isEdited:e&&n,readOnly:e})})})]}),d.jsx(q,{eightPx:!0})]}),d.jsx(q,{sixteenPx:!0}),d.jsx(w,{children:d.jsx(x,{children:d.jsxs("div",{id:"readOnlyWrapper",className:e?oe.verticalLine:oe.textAreaWrapperHeigh,children:[d.jsx(rn,{name:`${s}.${t}.${Ul}`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:[Z,ZP,QP,hn],isEdited:e&&n,maxLength:qp,readOnly:e,description:l.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:o=>o.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(Fn,{ident:i==null?void 0:i.vurdertAv,date:i==null?void 0:i.vurdertTidspunkt})]})})})]})};Or.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(s=>s.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(s=>s.definisjon===ex);return{[Yl]:r?G(r.overstyrtPrAar):void 0,[Ul]:t&&t.begrunnelse?t.begrunnelse:void 0}};Or.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[Ul],bruttoBeregningsgrunnlag:fe(e[Yl])});const Sp=4e3,nx=jn(Sp),rx=cn(3),Hl="varigEndringNyoppstartetBegrunnelse",Cl="erVarigEndret",zl="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:tx,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:sx}=ue,ax=e=>e?d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),Bt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:s,formName:i,isAksjonspunktClosed:l,avklaringsbehov:o})=>{let g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const y=W(),b=Te().watch(i)[s].erVarigEndret,f=[{value:"false",label:g},{value:"true",label:m}];return d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(qe,{name:`${i}.${s}.${Cl}`,validate:[Z],label:y.formatMessage({id:p}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:f,isTrueOrFalseSelection:!0})})}),b&&d.jsxs(d.Fragment,{children:[d.jsxs(w,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.dynamiskKolonne,children:d.jsx(I,{size:"small",children:ax(r)})}),d.jsx(x,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(je,{name:`${i}.${s}.${zl}`,validate:[Z,sn(178956970)],parse:De,className:oe.breddeInntekt,readOnly:e,isEdited:e&&l})})})]}),d.jsx(q,{sixteenPx:!0})]}),d.jsxs(d.Fragment,{children:[d.jsx(q,{sixteenPx:!0}),d.jsx(w,{children:d.jsxs(x,{children:[d.jsx(rn,{name:`${i}.${s}.${Hl}`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[Z,nx,rx,hn],maxLength:Sp,readOnly:e,description:y.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:c=>c.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(Fn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})]})};Bt.buildInitialValues=(e,n)=>{const r=e.find(s=>s.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||s.aktivitetStatus===K.BRUKERS_ANDEL),t=n.find(s=>s.definisjon===tx||s.definisjon===sx);if(t){const s=Bs(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[Cl]:s,[Hl]:t.begrunnelse?t.begrunnelse:"",[zl]:r?G(r.overstyrtPrAar):void 0}}return{}};Bt.transformValues=e=>{const n=e[Cl];return{begrunnelse:e[Hl],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?fe(e[zl]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Jl,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:ix,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Pp}=ue,xp=(e,n)=>n.some(r=>r.definisjon===e),lx=e=>e&&(e.definisjon===ix||e.definisjon===Jl||e.definisjon===Pp),Zn=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:s=!1,fieldIndex:i,formName:l})=>{if(!lx(n))return null;const o=n?!Bs(n.status):!1;return r?d.jsx(Or,{readOnly:e,isAksjonspunktClosed:o,erNyArbLivet:r,fieldIndex:i,formName:l,avklaringsbehov:n}):d.jsx(Bt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Pp,erNyoppstartet:s,fieldIndex:i,formName:l,isAksjonspunktClosed:o,avklaringsbehov:n})};Zn.buildInitialValues=(e,n)=>xp(Jl,n)?Or.buildInitialValuesNyIArbeidslivet(e,n):{...Bt.buildInitialValues(e,n)};Zn.transformValues=(e,n)=>xp(Jl,n)?Or.transformValuesNyIArbeidslivet(e):Bt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Fp,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Bp,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:_p,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Op,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Dp}=ue,dx=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},ox=(e,n)=>{switch(e.definisjon){case Fp:return dx(n);case Dp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case Bp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case _p:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case Op:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},gx=e=>{const n=e.aktivitetStatus||[],r=n.some(s=>op(s)),t=n.some(s=>dp(s));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},ux=(e,n)=>{switch(e.definisjon){case Fp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case Dp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case Bp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case _p:case Op:return gx(n);default:return"Ukjent aksjonspunkt"}},kx=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs("div",{className:r?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerHeader,children:[d.jsxs(w,{children:[!r&&d.jsx(x,{className:oe.aksjonspunktBehandlerImageCol,children:d.jsx(xr,{className:oe.warningIcon})}),d.jsx(x,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(B,{children:d.jsx(k,{id:ux(e,n)})})})]}),d.jsx(q,{eightPx:!0}),d.jsxs(w,{children:[!r&&d.jsx(x,{className:oe.aksjonspunktBehandlerImageCol}),d.jsx(x,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(I,{children:d.jsx(k,{id:ox(e,n)})})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:mx,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:px,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:vx,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:yx,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:fx}=ue;var ar=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(ar||{});const Wl=(e,n)=>ye.SN===e||ye.MIDLERTIDIG_INAKTIV===e||ye.ATFLSN===e&&n!=null&&n.find(r=>gp(r))?"8-35":"8-30",Ui=e=>fx===e.definisjon||yx===e.definisjon||vx===e.definisjon?"8-35":mx===e.definisjon||px===e.definisjon?"8-30":null,bx=cn(3),wp=4e3,cx=jn(wp),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:gu,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:uu,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:ku,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:mu,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:pu}=ue,jx="BeregningForm",ks=(e,n)=>Ui(e)===n,hx=(e,n)=>!!e.find(r=>ks(r,n)),Xl=e=>`${jx}_${e}`,vu=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},Yi=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],Ax=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===hr.ARBEIDSFORHOLD_AVSLUTTET)),Vp=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),Ix=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],s=t.filter(m=>m.aktivitetStatus===K.ARBEIDSTAKER),i=t.filter(m=>m.aktivitetStatus===K.FRILANSER),l=t.filter(m=>m.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||m.aktivitetStatus===K.BRUKERS_ANDEL),o={...sr.buildInitialValues(e.avklaringsbehov),...Ft.buildInitialValues(r),...$l.buildInitialValues(i),...Ll.buildInitialValues(s)},g={...Zn.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===ye.ATFLSN?{...o,...g}:n.sammenligningsgrunnlagType===ye.AT_FL?{...o}:n.sammenligningsgrunnlagType===ye.SN?{...g}:n.sammenligningsgrunnlagType===ye.MIDLERTIDIG_INAKTIV?{...g}:{}:{...Or.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},Tx=(e,n,r,t)=>{let s={};return r&&(s=Ix(e,t)),{...s,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},Rx=(e,n,r,t)=>({[r]:e.map(s=>{var i;return Tx(s,Vp(n,s.vilkårsperiodeFom),s.avklaringsbehov.find(l=>ks(l,t)),(i=s.sammenligningsgrunnlagPrStatus)==null?void 0:i.find(l=>Wl(l.sammenligningsgrunnlagType,s.aktivitetStatus)===t))})}),Ex=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:s})=>{const i=Yi(n).find(m=>m.aktivitetStatus&&m.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE),l=i&&i.erNyIArbeidslivet,o=r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||i&&i.næringer&&i.næringer.some(m=>m.erVarigEndret===!0),g=i&&i.næringer&&i.næringer.some(m=>m.erNyoppstartet===!0);return!l&&!g&&!o?null:d.jsxs(d.Fragment,{children:[d.jsx(q,{eightPx:!0}),d.jsx(Zn,{readOnly:e,avklaringsbehov:r,erNyArbLivet:l,erVarigEndring:o,erNyoppstartet:g,fieldIndex:t,formName:s})]})},Nx=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:s,fieldIndex:i,formName:l,avklaringsbehov:o,skalValideres:g})=>{const m=Ax(n),p=vu(n,K.FRILANSER),y=vu(n,K.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[d.jsx(q,{eightPx:!0}),m&&d.jsx(Ft,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:i,skalValideres:g}),!m&&y&&d.jsx(Vl,{readOnly:t,alleAndelerIForstePeriode:Yi(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:i,formName:l,skalValideres:g}),p&&d.jsx($l,{readOnly:t,fieldIndex:i,formName:l,alleAndelerIForstePeriode:Yi(n),skalValideres:g}),d.jsx(q,{sixteenPx:!0}),d.jsx(w,{children:d.jsxs(x,{children:[d.jsx(rn,{name:`${l}.${i}.ATFLVurdering`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[Z,cx,bx,hn],maxLength:wp,readOnly:t,className:oe.textAreaStyle,description:s.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:b=>b.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(Fn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})},qx=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(s=>s.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),Ur=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),Sx=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,s)=>!t.beregningsgrunnlagPeriodeFom||!s.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(s.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(Ur(gu,e.gjeldendeAvklaringsbehov))return[{kode:gu,aksjonspunktData:sr.transformATFLValues(e,r)}];if(Ur(mu,e.gjeldendeAvklaringsbehov))return[{kode:mu,aksjonspunktData:Zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Ur(pu,e.gjeldendeAvklaringsbehov))return[{kode:pu,aksjonspunktData:Zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Ur(ku,e.gjeldendeAvklaringsbehov))return[{kode:ku,aksjonspunktData:Zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Ur(uu,e.gjeldendeAvklaringsbehov))return[{kode:uu,aksjonspunktData:sr.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},Px=(e,n)=>e[Xl(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:Sx(r)})).reduce(qx,[]),xx=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:s,vilkår:i,submitCallback:l,formData:o,setFormData:g,aktivIndex:m,lovparagraf:p,finnesFormSomSubmittes:y,setSubmitting:b})=>{const f=W(),c=(M,U)=>{b(!0),l(Px(M,U))},E=M=>{const U=Vp(i,M.vilkårsperiodeFom);return U.vurderesIBehandlingen&&!U.erForlengelse},j=s.filter(M=>hx(M.avklaringsbehov,p)),R=Xl(p),T=ze({defaultValues:o||Rx(j,i,R,p)}),{formState:{dirtyFields:N},control:S,trigger:F}=T,{fields:V}=tn({name:R,control:S}),_=h.useRef(null);h.useEffect(()=>{var M,U;y&&(M=N[R])!=null&&M[m]&&F(),s[m].avklaringsbehov.some(re=>ks(re,p)&&re.status===up.OPPRETTET)&&((U=_==null?void 0:_.current)==null||U.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[m]);const H=d.jsx(w,{children:d.jsx(x,{children:d.jsx(XP,{isReadOnly:e,isSubmittable:!n,isDirty:T.formState.isDirty,isSubmitting:y})})}),C=M=>M.find(U=>ks(U,p)),O=(M,U)=>{const re=E(j[M]),J=C(U);return p===ar.ÅTTE_TRETTI&&J?d.jsx(Nx,{kodeverkSamling:r,allePerioder:j[M].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:f,fieldIndex:M,formName:R,avklaringsbehov:J,skalValideres:re}):p===ar.ÅTTE_TRETTIFEM&&J?d.jsx(Ex,{readOnly:e,allePerioder:j[M].beregningsgrunnlagPeriode,fieldIndex:M,formName:R,avklaringsbehov:J}):null},L=s[m].vilkårsperiodeFom;return d.jsx("div",{ref:_,children:d.jsx(Je,{formMethods:T,onSubmit:M=>c(M,p),setDataOnUnmount:g,children:V.map((M,U)=>d.jsxs("div",{style:{display:j[U].vilkårsperiodeFom===L?"block":"none"},children:[d.jsx(kx,{readOnly:e,avklaringsbehov:C(j[U].avklaringsbehov),beregningsgrunnlag:j[U]}),d.jsxs("div",{className:`${e?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerBorder} ${oe.aksjonspunktWrapper}`,children:[O(U,j[U].avklaringsbehov),d.jsx(q,{sixteenPx:!0}),H,d.jsx(q,{sixteenPx:!0})]})]},M.id))})})},Fx=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const s=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,i=t.filter(o=>o.sammenligningsgrunnlagType===ye.AT_FL||o.sammenligningsgrunnlagType===ye.AT||o.sammenligningsgrunnlagType===ye.FL),l=s&&i.length===0;return n?d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(d.Fragment,{children:[e.isMilitaer&&d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsxs(w,{children:[d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})})}),d.jsx(q,{eightPx:!0})]}),e.isDagpenger&&d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})})})}),d.jsx(q,{eightPx:!0})]}),l&&d.jsxs(w,{children:[d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})}),d.jsx(q,{eightPx:!0})]})]})},Bx="_colLable_di1r8_1",_x="_colValue_di1r8_8",Ox="_linjeSkille_di1r8_21",Dx="_linjeSkilleTykk_di1r8_27",wx="_colAvvik_di1r8_36",gn={colLable:Bx,colValue:_x,linjeSkille:Ox,linjeSkilleTykk:Dx,colAvvik:wx},yu=d.jsx(w,{children:d.jsx(x,{children:d.jsx("div",{className:gn.linjeSkille})})}),Vx=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:s,avvikProsent:i}=n,l=parseFloat(i.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",g=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(d.Fragment,{children:[yu,d.jsxs(w,{children:[d.jsx(x,{className:gn.colLable,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:o})})}),d.jsx(x,{className:gn.colValue,children:d.jsx(I,{size:"small",children:e||e===0?G(e):"-"})}),d.jsx(x,{className:gn.colAvvik})]}),yu,d.jsxs(w,{children:[d.jsx(x,{className:gn.colLable,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:g})})}),d.jsx(x,{className:gn.colValue,children:d.jsx(I,{size:"small",children:G(s)})}),d.jsx(x,{className:gn.colAvvik})]}),d.jsx(w,{children:d.jsx(x,{children:d.jsx("div",{className:gn.linjeSkilleTykk})})}),d.jsxs(w,{children:[d.jsx(x,{className:gn.colLable,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})})}),d.jsx(x,{className:gn.colValue,children:d.jsx(I,{size:"small",children:G(t===void 0?0:t)})}),d.jsx(x,{className:gn.colAvvik,children:d.jsx(I,{size:"small",className:`${l>25?$.redError:""} ${$.semiBoldText}`,children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})})})]})]})},Mx=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,Gx=(e,n)=>e?e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>Mx(r)):[],fu=e=>e||0,Lx=e=>e.beregnetPrAar?e.beregnetPrAar:0,bu=(e,n)=>{const r=Gx(e,n);if(r){const t=r.reduce((l,o)=>l+Lx(o),0),s=r.reduce((l,o)=>{var g;return l+fu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseBortfaltPrÅr)},0),i=r.reduce((l,o)=>{var g;return l+fu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseTilkommetPrÅr)},0);return t+s-i}return 0},Kx=(e,n)=>{const r=d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case ye.AT:case ye.FL:case ye.AT_FL:return r;case ye.SN:return t;case ye.ATFLSN:return n===ar.ÅTTE_TRETTIFEM?t:r;case ye.MIDLERTIDIG_INAKTIV:return d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},cu=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===K.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===ye.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===ye.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===ye.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:bu(n,[K.ARBEIDSTAKER,K.FRILANSER]),erPGI:!1}:{inntekt:bu(n,[K.ARBEIDSTAKER,K.FRILANSER]),erPGI:!1}};function ju(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const $x=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(s=>s.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=ju(t,ar.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(s=>{const i=Wl(s.sammenligningsgrunnlagType,r.aktivitetStatus);t=ju(t,i,r)}),t},{}),Ux=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:s,gjelderBesteberegning:i,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:p,setFormData:y,aktivIndex:b})=>{var f;const c=$x(o),[E,j]=h.useState(!1),R=d.jsx(Fx,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:i,erNyIArbeidslivet:!!((f=o[b].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&f.find(N=>N.erNyIArbeidslivet))}),T=N=>{var S;if(c[N]&&c[N].length>0){const F=c[N],V=o[b].vilkårsperiodeFom,_=F.find(U=>U.vilkårsperiodeFom===V),H=_?(S=_.sammenligningsgrunnlagPrStatus)==null?void 0:S.find(U=>Wl(U.sammenligningsgrunnlagType,_==null?void 0:_.aktivitetStatus)===N):void 0,C=!!c[N].find(U=>!!U.avklaringsbehov.find(re=>Ui(re)===N)),O=_&&!!_.avklaringsbehov.find(U=>Ui(U)===N),L=(_==null?void 0:_.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],M=Xl(N);return d.jsxs("div",{children:[!!H&&d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"xsmall",children:Kx(H,N)}),d.jsx(Vx,{sammenligningsgrunnlag:H,beregnetAarsinntekt:cu(H,L).inntekt,erPGI:cu(H,L).erPGI}),d.jsx("div",{className:$.storSpace})]}),C&&d.jsxs("div",{style:{display:O?"block":"none"},children:[d.jsx(xx,{readOnly:e,lovparagraf:N,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:s,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:p&&M in p?p:void 0,setFormData:y,aktivIndex:b,finnesFormSomSubmittes:E,setSubmitting:j}),d.jsx("div",{className:$.storSpace})]})]})}return null};return d.jsxs("div",{className:$.panelRight,children:[R,d.jsx(q,{twentyPx:!0}),T(ar.ÅTTE_TRETTI),T(ar.ÅTTE_TRETTIFEM)]})},Yr=e=>A(e).locale($i).format("MMMM");function Kt(e,n,r){const t=e.filter(s=>s.lønnsendringscenario===n).map(s=>`i ${_s(r[s.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${A(s.sisteLønnsendringsdato).format(te)}`);return t.reduce((s,i,l)=>l===0?i:l<t.length-2?`${s}, ${i}`:`${s} og ${i}`,"")}const Yx=(e,n,r,t)=>{switch(e){case An.MANUELT_BEHANDLET:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:Kt(r,An.MANUELT_BEHANDLET,t)}});case An.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:Kt(r,An.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:Yr(A(n).subtract(1,"month").format(wr)),forrigeMåned:Yr(A(n).subtract(2,"month").format(wr))}});case An.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:Kt(r,An.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:Yr(A(n).subtract(1,"month").format(wr))}});case An.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:Kt(r,An.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:Yr(A(n).subtract(1,"month").format(wr)),nesteMåned:Yr(A(n).subtract(2,"month").format(wr))}});default:return null}};function Hx(e,n,r){return pv(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsxs(d.Fragment,{children:[Yx(t,n,e,r),d.jsx("br",{}),d.jsx(q,{sixteenPx:!0})]}))}const Cx=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:Hx(n.lønnsendringSaksopplysning,e,r)}),d.jsx(mv,{saksopplysninger:t})},zx=e=>{switch(e){case K.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case K.FRILANSER:return"alt1";case K.ARBEIDSTAKER:return"alt3";default:return"neutral"}},Jx=(e,n)=>{const r=[];return e.filter((t,s,i)=>s===i.findIndex(l=>l===t)).forEach(t=>{var s;const i=((s=n[xs.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:s.navn)||"";r.push({visningsNavn:i,kode:t,tagType:zx(t)})}),r.sort((t,s)=>t.visningsNavn>s.visningsNavn?1:-1),d.jsx(w,{children:r.map(t=>d.jsx(x,{className:$.tagRad,children:d.jsx(hs,{variant:t.tagType,title:t.visningsNavn,className:$.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},Wx=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:s})=>d.jsxs("div",{className:$.panelLeft,children:[Jx(n,r),d.jsx(q,{sixteenPx:!0}),d.jsxs(en,{children:[d.jsxs(w,{children:[d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})})}),d.jsx(x,{children:d.jsx(I,{size:"small",className:$.semiBoldText,children:d.jsx(Ie,{dateString:e})})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(q,{sixteenPx:!0}),d.jsx(w,{children:d.jsx(x,{children:d.jsx(Cx,{arbeidsgiverOpplysningerPerId:s,skjeringstidspunktDato:e,saksopplysninger:t})})})]})]})]}),hu=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,s)=>t+s,0);return!r||r===0?0:r},Mp=e=>e.month()===2&&e.year()===2020,Xx=e=>{const n=A(e.tom);return Mp(n)},Gp=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const s=A(n.beregningsgrunnlagPeriodeFom);if(Mp(s)&&t.some(o=>Xx(o))){const o=A("2020-04-30"),g=t.find(m=>A(m.tom).isSame(o,"day"));return g?g.frisinnAndeler.filter(m=>m.statusSøktFor===e):null}const i=A(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!A(o.fom).isBefore(s)&&A(o.tom).isSame(i,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},Pr=(e,n,r)=>{const t=Gp(e,n,r);return!!t&&t.length>0},nn=(e,n,r)=>{if(!e||!n||!r)return 0;if(Pr(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return hu(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return hu(r.beregningsgrunnlagPrStatusOgAndel||[],e)},Au=(e,n,r)=>{const t=Gp(e,n,r);if(!t||t.length<1)return 0;const s=t.map(({oppgittInntekt:i})=>i).reduce((i,l)=>i+l,0);return!s||s===0?0:s},Lp=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===pp.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),s=t[t.length-1],i=A(s.tom);return i.month()===3&&i.year()===2020?t.filter(l=>A(l.fom).month()===3||A(l.fom).month()===2):t.filter(l=>A(l.fom).month()===i.month()&&A(l.fom).year()===i.year())}return n},Zx=(e,n)=>{let r=null;return n!==Be&&(r=n),d.jsx(k,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:A(e).format(te),tom:r?A(r).format(te):""}},`fom-tom${e}${r}`)},Kp=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,s=n.frisinnPerioder,i=Array.isArray(s)&&s.find(l=>!A(r).isBefore(l.fom)&&!A(t).isAfter(l.tom));return i?i.frisinnAndeler:[]},Iu=(e,n)=>d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(k,{id:e})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(n)})})]}),Tu=(e,n,r,t,s)=>{const i=s/100,l=n*i;return d.jsxs(d.Fragment,{children:[d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(k,{id:e,values:{grad:s}})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(l)})})]}),!!t||t===0&&d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(k,{id:r})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(t)})})]})]})},$t=e=>e||e===0,Qx=e=>{const n=A(e);return n.isBefore(A("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(A("2022-01-01","YYYY-MM-DD"))?60:70},eF=(e,n,r,t)=>{const s=Kp(e,n);if(!s||s.length<1)return null;const i=s.some(p=>p.statusSøktFor===K.FRILANSER)?r:null,l=s.some(p=>p.statusSøktFor===K.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=Au(K.FRILANSER,e,n),g=Au(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n),m=Qx(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[$t(i)&&Iu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",i||0),$t(i)&&Tu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",i||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,m),$t(l)&&Iu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",l||0),$t(l)&&Tu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",g,m),d.jsx(w,{children:d.jsx(x,{children:d.jsx("div",{className:$.colDevider})})}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.Resultat.Dagsats"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(e.dagsats)})})]})]})},nF=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const s=Kp(e,n);if(!s||s.length<1)return null;const i=r>=0?r:0,l=t>=0?t:0;return d.jsxs("div",{children:[d.jsx(q,{eightPx:!0}),d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:Zx(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)})})}),eF(e,n,i,l)]})},$p=e=>e.grunnbeløp?e.grunnbeløp*6:0,rF=(e,n)=>{if(!Pr(K.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=$p(e);const t=nn(K.ARBEIDSTAKER,e,n);if(r-=t,!Pr(K.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const i=nn(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=i}const s=nn(K.FRILANSER,e,n);return s>r?r:s},tF=(e,n)=>{if(!Pr(K.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=$p(e);const t=nn(K.ARBEIDSTAKER,e,n);r-=t;const s=nn(K.FRILANSER,e,n);r-=s;const i=nn(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return i>r?r:i},sF=(e,n)=>{const r=A(e.beregningsgrunnlagPeriodeFom),t=A(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(s=>!A(s.fom).isBefore(r)&&!A(s.tom).isAfter(t))},aF=({beregningsgrunnlag:e})=>{const n=Lp(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>sF(t,n)):[];return d.jsxs("div",{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Resultat"})})})}),r.map(t=>d.jsx("div",{children:d.jsx(nF,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:rF(e,t),næringGrunnlag:tF(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},iF=A("2020-04-01"),lF=(e,n,r)=>d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:G(e),annenInntekt:G(n)}})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(I,{size:"small",children:G(r)})})]}),dF=(e,n)=>{if(!Array.isArray(n))return!1;const r=A(e.beregningsgrunnlagPeriodeFom),t=A(e.beregningsgrunnlagPeriodeTom);return n.some(s=>!A(s.fom).isBefore(r)&&!A(s.tom).isAfter(t))},oF=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(dF(t,n)){const s=A(t.beregningsgrunnlagPeriodeTom),i=A(t.beregningsgrunnlagPeriodeTom).endOf("month");s.isAfter(iF)&&s.isSame(i,"day")&&t.beregningsgrunnlagPeriodeTom!==Be&&r.push(t)}}),r},gF=(e,n)=>{const r=A(n.beregningsgrunnlagPeriodeFom),t=A(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},uF=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=nn(K.ARBEIDSTAKER,e,n),s=e.grunnbeløp*6;let i=t;if(!Pr(K.FRILANSER,n,r)){const p=nn(K.FRILANSER,e,n);i+=p}if(!Pr(K.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const p=nn(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n);i+=p}const l=s>i?s-i:0,o=n.beregningsgrunnlagPeriodeTom,g=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(p=>gF(p,n)),m=g?g.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(d.Fragment,{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:A(m).format(te),tom:o?A(o).format(te):""}},`fom-tom${m}${o}`)})})}),d.jsx(q,{eightPx:!0}),lF(s,i,l),d.jsx(q,{sixteenPx:!0})]})},kF=({beregningsgrunnlag:e})=>{const n=Lp(e.ytelsesspesifiktGrunnlag),r=oF(e.beregningsgrunnlagPeriode,n);return d.jsx(d.Fragment,{children:r.map(t=>d.jsx("div",{children:uF(e,t)},t.beregningsgrunnlagPeriodeFom))})},mF=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=nn(K.SELVSTENDIG_NAERINGSDRIVENDE,e,r),s=nn(K.FRILANSER,e,r),i=nn(K.ARBEIDSTAKER,e,r);return d.jsxs("div",{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})})})}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:G(i)})})]}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:G(s)})})]}),d.jsxs(w,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(I,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:G(t)})})]})]})},Ru=(e,n,r)=>d.jsx(w,{children:d.jsx(x,{children:d.jsx(I,{size:"small",children:d.jsx(k,{id:e,values:{fom:A(n).format(te),tom:A(r).format(te)}})})})}),pF=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===K.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===K.FRILANSER);return d.jsxs("div",{children:[r&&Ru("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&Ru("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},vF=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs("div",{children:[d.jsx(w,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Søknad.Tittel"})})})}),d.jsx(q,{eightPx:!0}),Array.isArray(r)&&r.map(t=>pF(t)),d.jsx(q,{sixteenPx:!0})]})},yF="_aksjonspunktBehandlerContainer_o9hgh_6",fF={aksjonspunktBehandlerContainer:yF},bF=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),cF=({beregningsgrunnlag:e})=>d.jsxs("div",{className:fF.aksjonspunktBehandlerContainer,children:[d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(q,{sixteenPx:!0}),d.jsx(vF,{beregningsgrunnlag:e}),d.jsx(q,{sixteenPx:!0}),d.jsx(mF,{beregningsgrunnlag:e}),d.jsx(q,{sixteenPx:!0}),bF(e)&&d.jsxs(d.Fragment,{children:[d.jsx(kF,{beregningsgrunnlag:e}),d.jsx(q,{sixteenPx:!0}),d.jsx(aF,{beregningsgrunnlag:e})]})]}),jF=e=>d.jsx(cF,{beregningsgrunnlag:e}),hF=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===wl.FRISINN?jF(e):null},AF=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===kp.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,IF=e=>!!(e!=null&&e.besteberegninggrunnlag),TF=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],RF=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:s,vilkarPeriode:i,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:g,vilkår:m,submitCallback:p,formData:y,setFormData:b,aktivIndex:f})=>{var c;const{skjaeringstidspunktBeregning:E,beregningsgrunnlagPeriode:j,faktaOmBeregning:R,ytelsesspesifiktGrunnlag:T}=n,N=AF(R),S=IF(T),F=d.jsx("div",{className:$.storSpace}),V=TF(j),_=o&&o.length>0;return d.jsxs(d.Fragment,{children:[_&&d.jsxs(d.Fragment,{children:[d.jsx(q,{eightPx:!0}),d.jsx(CP,{avklaringsbehov:o,beregningsgrunnlag:n})]}),d.jsxs(w,{children:[d.jsxs(x,{className:$.venstreKolonne,children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(q,{sixteenPx:!0}),d.jsx(Wx,{kodeverkSamling:s,aktivitetStatusList:V,skjeringstidspunktDato:E,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),F,r.skalViseBeregningsgrunnlag&&d.jsx(sr,{relevanteStatuser:r,allePerioder:j,gjelderBesteberegning:N,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),S&&d.jsxs(d.Fragment,{children:[F,d.jsx(GP,{besteMåneder:(c=T==null?void 0:T.besteberegninggrunnlag)==null?void 0:c.besteMåneder,periode:j[0]})]})]}),d.jsxs(x,{className:$.hoyreKolonne,children:[d.jsx(se,{size:"medium",className:$.panelRight,children:d.jsx(k,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(q,{sixteenPx:!0}),d.jsx(Ux,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:s,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:N,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:g,vilkår:m,submitCallback:p,formData:y,setFormData:b,aktivIndex:f}),d.jsxs(d.Fragment,{children:[d.jsx(q,{sixteenPx:!0}),d.jsx(hF,{beregningsgrunnlag:n})]}),i&&d.jsx(DP,{beregningsgrunnlag:n,vilkårsperiode:i})]})]})]})},EF="_readOnlyBlokk_3qjl7_1",NF={readOnlyBlokk:EF},qF=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(d.Fragment,{children:[d.jsx(B,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsx(q,{sixteenPx:!0}),d.jsxs(I,{size:"small",className:NF.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(lt,{})]})]}),SF=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],PF=e=>e.avklaringsbehov.filter(n=>SF.some(r=>r===n.definisjon)),xF=e=>({isArbeidstaker:e.some(n=>op(n)),isFrilanser:e.some(n=>dp(n)),isSelvstendigNaeringsdrivende:e.some(n=>gp(n)),isMidlertidigInaktiv:e.some(n=>n===K.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>jq(n)),harDagpengerEllerAAP:e.some(n=>lp(n)),isAAP:e.some(n=>n===K.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===K.DAGPENGER||n===K.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>hq(n))||e.length>1,isMilitaer:e.some(n=>Aq(n))}),FF=e=>e?e.find(n=>n.definisjon===ue.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,Eu=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),BF=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:s,vilkar:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m})=>{const p=n[e],y=xF(p.aktivitetStatus),b=FF(p.avklaringsbehov);function f(c){const E=Eu(i,c.vilkårsperiodeFom);return E.vurderesIBehandlingen&&!E.erForlengelse}return d.jsxs(d.Fragment,{children:[d.jsx(RF,{readOnly:t||!f(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:PF(n[e]),relevanteStatuser:y,readOnlySubmitButton:s,kodeverkSamling:l,vilkarPeriode:Eu(i,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:i,submitCallback:r,formData:g,setFormData:m,aktivIndex:e}),b&&d.jsx(qF,{avklaringsbehov:b})]})},_F="_contentContainer_1ddng_1",OF="_sideMenuContainer_1ddng_4",DF="_mainContainer--withSideMenu_1ddng_7",wF="_advarselIkon_1ddng_12",Wt={contentContainer:_F,sideMenuContainer:OF,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:DF,advarselIkon:wF},VF=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],MF=[],GF=kq.bind(Wt),Nu=$e(Np),LF=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Title"})}),d.jsx(q,{eightPx:!0}),d.jsx(w,{children:d.jsx(x,{children:d.jsx(k,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})})]})},KF=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},$F=e=>e.avklaringsbehov.some(n=>VF.some(r=>r===n.definisjon)&&n.kanLoses),UF=(e,n)=>e.map(r=>({skalVurderes:KF(n,r),harAvklaringsbehov:$F(r),stp:A(r.skjaeringstidspunktBeregning).format(te)})),YF=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const m=e||MF,p=m.length>1;m.sort((E,j)=>E.skjaeringstidspunktBeregning.localeCompare(j.skjaeringstidspunktBeregning)).reverse();const[y,b]=h.useState(0),f=UF(m,s),c=GF("mainContainer",{"mainContainer--withSideMenu":p});return h.useEffect(()=>{const E=f.findIndex(j=>j.skalVurderes&&j.harAvklaringsbehov);E>-1&&b(E)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(Le,{value:Nu,children:LF(s)}):d.jsx(Le,{value:Nu,children:d.jsxs("div",{className:c,children:[p&&d.jsx("div",{className:Wt.sideMenuContainer,children:d.jsx(qv,{links:f.map((E,j)=>({icon:E.skalVurderes&&E.harAvklaringsbehov?d.jsx(xr,{className:Wt.advarselIkon}):null,active:y===j,label:`${E.stp}`})),onClick:b})}),d.jsx("div",{className:Wt.contentContainer,children:d.jsx(BF,{aktivtBeregningsgrunnlagIndeks:y,beregningsgrunnlagListe:m,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,setFormData:g,formData:o})})]})})},HF=e=>{switch(e){case ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},CF=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:HF(s.kode),...s.grunnlag[0]}));return e(t)},zF=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),JF=(e,n)=>{const r=e.find(s=>s.vilkarType&&s.vilkarType===rr.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[zF(n,r)]}},WF=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],XF=[de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],ZF=[rr.BEREGNINGSGRUNNLAGVILKARET],QF=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=W(),t=tl(XF,ZF),{behandling:s}=h.use(xn),i=Pn(s),{data:l,isFetching:o}=Sn(i.beregningsgrunnlagOptions(s));return a.jsx(Yu,{...n,standardPanelProps:t,prosessPanelKode:Qi.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:o?a.jsx(qn,{}):a.jsx(eB,{kodeverkSamling:t.alleKodeverk,beregningsgrunnlagsvilkar:JF(t.vilkar,l),beregningsgrunnlagListe:WF(l),arbeidsgiverOpplysningerPerId:e,submitCallback:CF(t.submitCallback),isReadOnly:t.isReadOnly,readOnlySubmitButton:t.readOnlySubmitButton})})},eB=e=>{const{formData:n,setFormData:r}=Kn();return a.jsx(YF,{...e,formData:n,setFormData:r})};QF.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const qu=de.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,hi=[rr.MEDLEMSKAPSVILKÅRET_LØPENDE],nB=({...e})=>{const n=W(),r=tl([qu],hi);return a.jsx(av,{overstyringApKode:qu,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:a.jsx(Gv,{...e,standardPanelProps:r,prosessPanelKode:Qi.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:Lu(r.aksjonspunkter,hi,r.vilkar),children:a.jsx(Tv,{vilkar:r.vilkar,vilkarKoder:hi,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};nB.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const rB="_panel_d5cml_1",tB="_hyphen_d5cml_9",sB="_marginTop_d5cml_19",aB="_marginBottom_d5cml_23",iB="_colWidth_d5cml_27",On={panel:rB,hyphen:tB,marginTop:sB,marginBottom:aB,colWidth:iB},lB=(e,n)=>e&&n!==void 0,dB=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===nr.OPPRETTET?void 0:t!==n,ansesMottatt:t,...Fr.buildInitialValues(e)}},oB=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:de.VURDER_SOKNADSFRIST_FORELDREPENGER,...Fr.transformValues(e)}),Up=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:s,submitCallback:i,harÅpneAksjonspunkter:l}=Nn(),o=dB(t,n,r),{formData:g,setFormData:m}=Kn(),p=ze({defaultValues:g||o}),y=p.watch("gyldigSenFremsetting"),b=r==null?void 0:r.søknadsperiodeStart,f=r==null?void 0:r.søknadsperiodeSlutt,c=r==null?void 0:r.utledetSøknadsfrist;return a.jsxs(Je,{formMethods:p,onSubmit:E=>i(oB(E)),setDataOnUnmount:m,children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),a.jsx(q,{twentyPx:!0}),l&&a.jsx(ir,{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:c?br(c).format(te):""}})}),a.jsx(q,{twentyPx:!0}),a.jsx(en,{children:a.jsxs(w,{children:[a.jsx(x,{className:On.colWidth,children:a.jsxs(al,{className:On.panel,children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),a.jsxs("ul",{className:On.hyphen,children:[a.jsx("li",{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),a.jsx("li",{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),a.jsx("li",{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]})}),a.jsx(x,{className:On.colWidth,children:a.jsx(en,{children:a.jsxs(w,{className:On.marginBottom,children:[a.jsxs(x,{className:On.colWidth,children:[a.jsx(ke,{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&a.jsx(I,{size:"small",children:br(n).format(te)})]}),b&&f&&a.jsxs(x,{className:On.colWidth,children:[a.jsx(ke,{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),a.jsx(I,{size:"small",children:`${br(b).format(te)} - ${br(f).format(te)}`})]})]})})})]})}),a.jsxs("div",{className:On.marginTop,children:[a.jsx(Fr,{readOnly:s}),a.jsx(q,{sixteenPx:!0}),a.jsx(qe,{name:"gyldigSenFremsetting",validate:[Z],isReadOnly:s,isHorizontal:!0,isEdited:lB(t.length>0,y),isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),y&&a.jsxs(a.Fragment,{children:[a.jsx(q,{sixteenPx:!0}),a.jsx(xu,{children:a.jsx(er,{name:"ansesMottatt",isReadOnly:s,label:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[Z,Tn,jv]})})]}),a.jsx(q,{twentyPx:!0}),a.jsx(Lv,{isReadOnly:s,isSubmittable:!e,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty})]})]})};Up.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.`,methods:[],displayName:"VurderSoknadsfristForeldrepengerForm",props:{mottattDato:{required:!0,tsType:{name:"string"},description:""},søknadsfrist:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const gB={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},uB=$e(gB),Yp=({soknad:e,readOnlySubmitButton:n})=>a.jsx(Le,{value:uB,children:a.jsx(Up,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Yp.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const kB=[de.VURDER_SOKNADSFRIST_FORELDREPENGER],mB=e=>{const n=W(),r=tl(kB),{behandling:t}=h.use(xn),s=Pn(t),{data:i}=Sn(s.søknadOptions(t));return a.jsx(Yu,{...e,standardPanelProps:r,prosessPanelKode:Qi.SOEKNADSFRIST,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:Lu(r.aksjonspunkter),children:i?a.jsx(Yp,{soknad:i,readOnlySubmitButton:r.readOnlySubmitButton}):a.jsx(qn,{})})};mB.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Mn={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},pB="_godkjentImage_1bp9b_1",vB="_avslattImage_1bp9b_7",yB="_margin_1bp9b_13",fB="_fix_1bp9b_17",Hr={godkjentImage:pB,avslattImage:vB,margin:yB,fix:fB},bB="MELLOMLIGGENDE_PERIODE",cB=e=>e===Mn.BEKREFTET_AVVIST||e===Mn.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",Su=e=>e===Mn.BEKREFTET_GODKJENT||e===Mn.ANTATT_GODKJENT||e===bB,Hp=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const s=W();return a.jsxs(al,{border:!0,children:[a.jsx(en,{children:a.jsxs(w,{spaceBetween:!0,children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})})}),a.jsxs(x,{className:Hr.fix,children:[a.jsx(ae,{className:Hr.margin,size:"xsmall",icon:a.jsx(bs,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.prevPeriod"}),children:a.jsx(k,{id:"TimeLineData.prevPeriodShort"})}),a.jsx(ae,{className:Hr.margin,size:"xsmall",icon:a.jsx(cs,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:a.jsx(k,{id:"TimeLineData.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(Qn,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]})}),a.jsx(q,{sixteenPx:!0}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:e.fom,dateStringTom:e.tom})}),a.jsx(q,{sixteenPx:!0}),a.jsxs(z,{children:[Su(e.klasse)&&a.jsx(zi,{className:Hr.godkjentImage}),!Su(e.klasse)&&a.jsx(Qn,{className:Hr.avslattImage}),a.jsx(k,{id:cB(e.klasse)})]})]})};Hp.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const jB={danger:a.jsx($u,{}),success:a.jsx(rl,{}),info:a.jsx(Xv,{})},hB=e=>e===Mn.BEKREFTET_AVVIST||e===Mn.ANTATT_AVVIST?"danger":e===Mn.BEKREFTET_GODKJENT||e===Mn.ANTATT_GODKJENT?"success":"info",AB=e=>e.map(n=>({start:A(n.fom).toDate(),end:A(n.tom).toDate(),status:hB(n.klasse),opptjeningsperiode:n})),IB=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",Cp=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=W(),s=h.useMemo(()=>[...e].sort((b,f)=>A(b.fom).diff(A(f.fom))),[e]),i=h.useMemo(()=>AB(s),[s]),[l,o]=h.useState(),g=b=>{const f=i.find(c=>{var E;return((E=c.opptjeningsperiode)==null?void 0:E.fom)===b});f&&o(f)},m=h.useCallback(()=>{o(void 0)},[]),p=h.useCallback(()=>{if(i){const b=i.findIndex(f=>{var c,E;return((c=f.opptjeningsperiode)==null?void 0:c.fom)===((E=l==null?void 0:l.opptjeningsperiode)==null?void 0:E.fom)})+1;b<i.length&&o(i[b])}},[i,l,o]),y=h.useCallback(()=>{if(i){const b=i.findIndex(f=>{var c,E;return((c=f.opptjeningsperiode)==null?void 0:c.fom)===((E=l==null?void 0:l.opptjeningsperiode)==null?void 0:E.fom)})-1;b>=0&&o(i[b])}},[i,l,o]);return a.jsxs(a.Fragment,{children:[a.jsx(q,{twentyPx:!0}),a.jsxs(Ve,{startDate:A(n).subtract(1,"months").toDate(),endDate:A(r).add(10,"days").toDate(),children:[a.jsxs(Ve.Pin,{date:A(n).toDate(),children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"OpptjeningTimeLineLight.StartDato"})}),a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:n})})]}),a.jsxs(Ve.Pin,{date:A(r).toDate(),children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"OpptjeningTimeLineLight.SluttDato"})}),a.jsx(I,{size:"small",children:a.jsx(Ie,{dateString:r})})]}),a.jsx(Ve.Row,{label:"",children:i.map(b=>{var f,c,E;return a.jsx(Ve.Period,{start:b.start,end:b.end,status:b.status,onSelectPeriod:()=>{var j;return g((j=b.opptjeningsperiode)==null?void 0:j.fom)},isActive:((f=l==null?void 0:l.opptjeningsperiode)==null?void 0:f.fom)===((c=b.opptjeningsperiode)==null?void 0:c.fom),icon:jB[b.status],title:t.formatMessage({id:IB(b.status)})},(E=b.opptjeningsperiode)==null?void 0:E.fom)})})]}),a.jsx(q,{sixteenPx:!0}),(l==null?void 0:l.opptjeningsperiode)&&a.jsx(Hp,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:m,velgNestePeriode:p,velgForrigePeriode:y})]})};Cp.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const Zl=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:s})=>a.jsxs(a.Fragment,{children:[a.jsx(I,{size:"small",children:a.jsx(k,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),a.jsx(q,{eightPx:!0}),a.jsx(I,{size:"small",children:a.jsx(Ye,{dateStringFom:t,dateStringTom:s})}),a.jsx(q,{sixteenPx:!0}),r.length>0&&a.jsx(Cp,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:s})]});Zl.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const TB=(e,n,r)=>({...sl.buildInitialValues(e,n,r),...Fr.buildInitialValues(e)}),RB=e=>({...sl.transformValues(e),...Fr.transformValues(e),kode:de.VURDER_OPPTJENINGSVILKARET}),zp=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:s})=>{const i=W(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:g,harÅpneAksjonspunkter:m,isReadOnly:p,alleMerknaderFraBeslutter:y}=Nn(),b=o.some(_=>{var H;return(H=y[_.definisjon])==null?void 0:H.notAccepted}),f=TB(o,r,l.behandlingsresultat),{formData:c,setFormData:E}=Kn(),j=ze({defaultValues:c||f}),T=o.some(_=>_.status===nr.OPPRETTET)?void 0:Uu.OPPFYLT===r,N=h.useCallback(_=>g(RB(_)),[g]),S=h.useCallback((..._)=>a.jsx("b",{children:_}),[]),F=h.useCallback(_=>{var H;return((H=t.fastsattOpptjeningAktivitetList)==null?void 0:H.length)===0&&_===!0?i.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},[]),V=h.useCallback(()=>a.jsxs(a.Fragment,{children:[a.jsx(q,{sixteenPx:!0}),a.jsx(Zl,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom})]}),[t]);return a.jsx(Je,{formMethods:j,onSubmit:N,setDataOnUnmount:E,children:a.jsxs(Kv,{title:i.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:m,readOnlySubmitButton:e,readOnly:p,lovReferanse:n,originalErVilkarOk:T,erIkkeGodkjentAvBeslutter:b,isDirty:j.formState.isDirty,isSubmitting:j.formState.isSubmitting,rendreFakta:V,children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:s?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),a.jsx(sl,{readOnly:p,customVilkarOppfyltText:a.jsx(k,{id:s?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:a.jsx(k,{id:s?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:S}}),validatorsForRadioOptions:[F]}),a.jsx(q,{sixteenPx:!0}),a.jsx(Fr,{readOnly:p})]})})};zp.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

Viser panel for å løse aksjonspunkt for avslått opptjeningsvilkår`,methods:[],displayName:"OpptjeningVilkarAksjonspunktPanel",props:{fastsattOpptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  opptjeningFom: string;
  opptjeningTom: string;
  opptjeningperiode: {
    måneder: number;
    dager: number;
  };
  fastsattOpptjeningAktivitetList?: FastsattOpptjeningAktivitet[];
}`,signature:{properties:[{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"opptjeningperiode",value:{name:"signature",type:"object",raw:`{
  måneder: number;
  dager: number;
}`,signature:{properties:[{key:"måneder",value:{name:"number",required:!0}},{key:"dager",value:{name:"number",required:!0}}]},required:!0}},{key:"fastsattOpptjeningAktivitetList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const Jp=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:s})=>{const{aksjonspunkterForPanel:i}=Nn();return i.length>0?a.jsx(zp,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:s}):a.jsx(Zl,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};Jp.__docgenInfo={description:`OpptjeningVilkarForm

Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarForm",props:{fastsattOpptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  opptjeningFom: string;
  opptjeningTom: string;
  opptjeningperiode: {
    måneder: number;
    dager: number;
  };
  fastsattOpptjeningAktivitetList?: FastsattOpptjeningAktivitet[];
}`,signature:{properties:[{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"opptjeningperiode",value:{name:"signature",type:"object",raw:`{
  måneder: number;
  dager: number;
}`,signature:{properties:[{key:"måneder",value:{name:"number",required:!0}},{key:"dager",value:{name:"number",required:!0}}]},required:!0}},{key:"fastsattOpptjeningAktivitetList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const EB={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},NB=$e(EB),qB=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:s=!1})=>a.jsx(Le,{value:NB,children:a.jsx(Jp,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:s})});qB.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fastsattOpptjening: FastsattOpptjening;
  opptjeningAktivitetList?: OpptjeningAktivitet[];
  ferdiglignetNæring?: FerdiglignetNæring[];
}`,signature:{properties:[{key:"fastsattOpptjening",value:{name:"signature",type:"object",raw:`{
  opptjeningFom: string;
  opptjeningTom: string;
  opptjeningperiode: {
    måneder: number;
    dager: number;
  };
  fastsattOpptjeningAktivitetList?: FastsattOpptjeningAktivitet[];
}`,signature:{properties:[{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"opptjeningperiode",value:{name:"signature",type:"object",raw:`{
  måneder: number;
  dager: number;
}`,signature:{properties:[{key:"måneder",value:{name:"number",required:!0}},{key:"dager",value:{name:"number",required:!0}}]},required:!0}},{key:"fastsattOpptjeningAktivitetList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]},required:!0}},{key:"opptjeningAktivitetList",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"arbeidsforholdRef",value:{name:"string",required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"string",required:!0}},{key:"erGodkjent",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"OpptjeningAktivitet[]",required:!1}},{key:"ferdiglignetNæring",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const SB=(e,n)=>e.filter(r=>r.opptjeningsår===n),Wp=e=>e.aktivitetStatus+e.arbeidsgiverId,PB=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?t.fødselsdato?`${t.navn} (${A(t.fødselsdato).format(te)})`:t.navn:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?Mu(r)(e.aktivitetStatus,un.AKTIVITET_STATUS):""},xB=(e,n,r)=>({identifikator:Wp(e),visningsnavn:PB(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),FB=(e,n,r)=>{const t=[];return e.forEach(s=>{const i=s.erBrukerMottaker?s.årsbeløp:0,l=s.erBrukerMottaker?0:s.årsbeløp,o=Wp(s),g=t.find(m=>m.identifikator===o);g?(g.utbetaltTilSøker+=i,g.utbetaltIRefusjon+=l):t.push(xB(s,n,r))}),t},BB=["TilkjentYtelse.Feriepenger.AndelNavn","TilkjentYtelse.Feriepenger.GrunnlagRefusjon","TilkjentYtelse.Feriepenger.GrunnlagSøker"],Xp=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const s=!e||e.length<1,i=h.useMemo(()=>s?void 0:SB(e,n),[e,n]),l=h.useMemo(()=>i?FB(i,t,r):[],[i]);return s?null:a.jsxs(a.Fragment,{children:[a.jsx(B,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),a.jsx(it,{headerTextCodes:BB,children:l.map(o=>a.jsxs(ps,{children:[a.jsx(ve,{children:a.jsx(I,{size:"small",children:o.visningsnavn})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:o.utbetaltIRefusjon})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})};Xp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]"},description:""},opptjeningsår:{required:!0,tsType:{name:"number"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const _B=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]},OB=()=>a.jsx(se,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Zp=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:s})=>{const{andeler:i}=e,l=!i||i.length<1,o=h.useMemo(()=>l?[]:_B(i),[i]);return l?null:a.jsx(Pe,{children:a.jsxs(Pe.Item,{open:t,children:[a.jsx(Pe.Header,{onClick:s,children:OB()}),a.jsx(Pe.Content,{children:o.map(g=>a.jsxs("div",{children:[a.jsx(q,{sixteenPx:!0},`spacer_${g}`),a.jsx(Xp,{alleAndeler:i,opptjeningsår:g,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${g}`)]},`div_${g}`))})]})})};Zp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Qp=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,s]=h.useState(!1);return a.jsx(Zp,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:()=>s(!t)})};Qp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const DB="_detailsPeriode_1r02x_1",wB="_margin_1r02x_9",VB="_fix_1r02x_13",Ut={detailsPeriode:DB,margin:wB,fix:VB},MB={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},GB=e=>e?`...${e.substring(e.length-4,e.length)}`:"",LB=(e,n,r)=>{const t=r[e.arbeidsgiverReferanse];return!t||!t.navn?e.arbeidsforholdType?n(e.arbeidsforholdType,un.OPPTJENING_AKTIVITET_TYPE):"":t.erPrivatPerson?`${t.navn} (${t.fødselsdato})`:`${t.navn} (${t.identifikator})${GB(e.eksternArbeidsforholdId)}`},KB=(e=!1)=>e?["TilkjentYtelse.PeriodeData.Andel","TilkjentYtelse.PeriodeData.Utbetalingsgrad","TilkjentYtelse.PeriodeData.Refusjon","TilkjentYtelse.PeriodeData.TilSoker","TilkjentYtelse.PeriodeData.SisteUtbDato"]:["TilkjentYtelse.PeriodeData.Andel","TilkjentYtelse.PeriodeData.KontoType","TilkjentYtelse.PeriodeData.Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad","TilkjentYtelse.PeriodeData.Refusjon","TilkjentYtelse.PeriodeData.TilSoker","TilkjentYtelse.PeriodeData.SisteUtbDato"],$B=(e,n,r)=>{switch(e.aktivitetStatus){case Dn.ARBEIDSTAKER:return LB(e,n,r);case Dn.FRILANSER:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Frilans"});case Dn.SELVSTENDIG_NAERINGSDRIVENDE:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case Dn.DAGPENGER:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case Dn.ARBEIDSAVKLARINGSPENGER:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.AAP"});case Dn.MILITAER_ELLER_SIVIL:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Militaer"});case Dn.BRUKERS_ANDEL:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},UB=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return a.jsx(k,{id:n})},ev=({selectedItemData:e,callbackForward:n,callbackBackward:r,alleKodeverk:t,isSoknadSvangerskapspenger:s,arbeidsgiverOpplysningerPerId:i,lukkPeriode:l})=>{const o=yv(e.fom,e.tom),g=W(),m=Mu(t),p=h.useCallback((...y)=>a.jsx("b",{children:y}),[]);return a.jsxs(al,{border:!0,children:[a.jsxs(en,{children:[a.jsxs(w,{spaceBetween:!0,children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Detaljer"})})}),a.jsxs(x,{className:Ut.fix,children:[a.jsx(ae,{className:Ut.margin,size:"xsmall",icon:a.jsx(bs,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.prevPeriod"}),children:a.jsx(k,{id:"Timeline.prevPeriodShort"})}),a.jsx(ae,{className:Ut.margin,size:"xsmall",icon:a.jsx(cs,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:a.jsx(k,{id:"Timeline.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(Qn,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),a.jsx(q,{sixteenPx:!0}),a.jsxs("div",{className:Ut.detailsPeriode,children:[a.jsxs(w,{spaceBetween:!0,children:[a.jsx(x,{children:a.jsx(B,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:A(e.fom).format(te).toString(),tomVerdi:A(e.tom).format(te).toString()}})})}),a.jsx(x,{children:a.jsx(I,{size:"small",children:o.formattedString})})]}),a.jsx(q,{eightPx:!0}),a.jsx(w,{children:a.jsx(x,{children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:p}})})})]})]}),a.jsx(q,{sixteenPx:!0}),e.andeler&&e.andeler.length!==0&&a.jsx(it,{headerTextCodes:KB(s),children:e.andeler.map((y,b)=>a.jsxs(ps,{children:[a.jsx(ve,{children:$B(y,m,i)}),!s&&a.jsx(ve,{children:a.jsx(I,{size:"small",children:MB[y.uttak.stonadskontoType]})}),!s&&a.jsx(ve,{children:a.jsx(I,{size:"small",children:UB(y)})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:y.utbetalingsgrad?y.utbetalingsgrad:""})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:y.aktivitetStatus===Dn.ARBEIDSTAKER&&y.refusjon?y.refusjon:""})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:y.tilSoker?y.tilSoker:""})}),a.jsx(ve,{children:a.jsx(I,{size:"small",children:y.sisteUtbetalingsdato?A(y.sisteUtbetalingsdato).format(te):""})})]},`index${b+1}`))})]})};ev.__docgenInfo={description:`TimeLineData

Viser opp data fra valgt periode i tilkjent ytelse-tidslinjen`,methods:[],displayName:"TilkjentYtelseTimelineData",props:{selectedItemData:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`},description:""},callbackForward:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},callbackBackward:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},isSoknadSvangerskapspenger:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const YB="_space_ckypy_1",HB="_margin_ckypy_5",CB="_readOnlyBlokk_ckypy_9",fr={space:YB,margin:HB,readOnlyBlokk:CB},zB=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,JB=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===Rv.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},WB=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:zB(n),start:A(n.fom).toDate(),end:A(n.tom).add(1,"days").toDate(),id:r,periode:n})),XB=(e,n)=>{var t;return((t=n[un.RELASJONSROLLE_TYPE].find(s=>s.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},ZB=(e,n)=>{const r=A(e);return r.isBefore(n)?n.subtract(5,"days"):r},nv=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:r,hovedsokerKjonnKode:t,alleKodeverk:s,arbeidsgiverOpplysningerPerId:i,fagsak:l})=>{const o=W(),[g,m]=h.useState(),p=h.useMemo(()=>WB(e),[e]),y=h.useCallback(()=>{m(null)},[]),b=h.useCallback(()=>{const O=p.findIndex(L=>L.id===(g==null?void 0:g.id))+1;O<p.length&&m(p[O])},[p,g,m]),f=h.useCallback(()=>{const O=p.findIndex(L=>L.id===(g==null?void 0:g.id))-1;O>=0&&m(p[O])},[p,g,m]),c=h.useCallback(O=>{m(p.find(L=>L.id===O))},[m,p]),E=A(p[0].start),j=A(p[p.length-1].end),[R,T]=h.useState(E),[N,S]=h.useState(j),F=()=>{R.subtract(1,"month").isBefore(E)||(T(R.subtract(1,"month")),S(N.subtract(1,"month")))},V=()=>{N.add(1,"month").isAfter(j)||(T(R.add(1,"month")),S(N.add(1,"month")))},_=()=>{R.add(3,"month").isAfter(N)||(T(R.add(1,"month")),S(N.subtract(1,"month")))},H=()=>{N.add(1,"month").diff(R.subtract(1,"month"),"months")<36&&(T(R.subtract(1,"month")),S(N.add(1,"month")))},C=h.useMemo(()=>JB(r),[r]);return a.jsxs(a.Fragment,{children:[a.jsxs(Ve,{startDate:R.toDate(),endDate:N.add(1,"days").toDate(),children:[a.jsxs(Ve.Pin,{date:A(n).toDate(),children:[a.jsx(I,{children:a.jsx(k,{id:"TilkjentYtelse.Soknadsdato"})}),a.jsx(I,{children:a.jsx(Ie,{dateString:n})})]}),C.dato&&a.jsxs(Ve.Pin,{date:ZB(C.dato,R).toDate(),children:[a.jsx(I,{children:a.jsx(k,{id:C.textId})}),a.jsx(I,{children:a.jsx(Ie,{dateString:C.dato})})]}),a.jsx(Ve.Row,{label:XB(l,s),icon:t===$v.KVINNE?a.jsx(Sv,{width:20,height:20,color:"var(--a-red-200)"}):a.jsx(Pv,{width:20,height:20,color:"var(--a-blue-600)"}),children:p.map(O=>a.jsx(Ve.Period,{start:O.start,end:O.end,status:"success",onSelectPeriod:()=>c(O.id),isActive:(g==null?void 0:g.id)===O.id,icon:O.erGradert?a.jsx(ty,{"aria-hidden":!0}):a.jsx(rl,{"aria-hidden":!0}),title:O.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},O.id))})]}),a.jsx(q,{twentyPx:!0}),a.jsxs(Ar,{children:[a.jsx(ae,{className:fr.margin,size:"small",icon:a.jsx(wv,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),a.jsx(ae,{className:fr.margin,size:"small",icon:a.jsx(Bv,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),a.jsx(ae,{className:fr.margin,size:"small",icon:a.jsx(bs,{"aria-hidden":!0}),onClick:F,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),a.jsx(ae,{className:fr.margin,size:"small",icon:a.jsx(cs,{"aria-hidden":!0}),onClick:V,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),a.jsx("div",{className:fr.space}),g&&a.jsxs(a.Fragment,{children:[a.jsx(q,{eightPx:!0}),a.jsx(ev,{alleKodeverk:s,selectedItemData:g.periode,callbackForward:b,callbackBackward:f,isSoknadSvangerskapspenger:l.fagsakYtelseType===iv.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:i,lukkPeriode:y})]})]})};nv.__docgenInfo={description:`TilkjentYtelse

Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse`,methods:[],displayName:"TilkjentYtelse",props:{beregningsresultatPeriode:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]"},description:""},soknadDate:{required:!0,tsType:{name:"string"},description:""},familieHendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},hovedsokerKjonnKode:{required:!1,tsType:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""}}};const QB=e=>{var n;return e?(n=e.find(r=>r.definisjon===de.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse:void 0},rv=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:s,soknad:i})=>{var y,b;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:g}=Nn(),m=QB(g),p=(y=i.søknadsfrist)!=null&&y.mottattDato?(b=i.søknadsfrist)==null?void 0:b.mottattDato:i.mottattDato;return a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.Title"})}),a.jsx(q,{thirtyTwoPx:!0}),e&&a.jsx(nv,{beregningsresultatPeriode:e.perioder,soknadDate:p,familieHendelseSamling:t,hovedsokerKjonnKode:s!=null&&s.bruker?s.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&a.jsxs(a.Fragment,{children:[a.jsx(q,{thirtyTwoPx:!0}),a.jsx(Qp,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),a.jsx(q,{thirtyTwoPx:!0})]}),m&&a.jsxs(a.Fragment,{children:[a.jsx(B,{children:a.jsx(k,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),a.jsx(q,{sixteenPx:!0}),a.jsxs(I,{className:fr.readOnlyBlokk,children:[m," ",a.jsx(lt,{})]})]})]})};rv.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""}}};const e_={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},n_=$e(e_),r_=e=>a.jsx(Le,{value:n_,children:a.jsx(rv,{...e})});r_.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: string;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"string",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: string;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: string;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: string;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"string",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""}}};export{qf as A,QF as B,nB as F,ZE as I,qB as O,lq as P,ay as S,r_ as T,mB as a,Gf as b,EN as c,NA as d,DE as e,ty as f,Xv as g};
