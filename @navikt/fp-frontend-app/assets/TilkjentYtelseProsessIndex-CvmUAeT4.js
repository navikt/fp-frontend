import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as h,R as Y}from"./index-B8jnc8p3.js";import{g as nr,O as sv,o as Pu,an as Ci,f as mn,ak as av,m as se,h as E,H as te,L as F,J as ke,V as nn,k as J,n as ae,ao as xn,al as $n,P as Ke,$ as ot,am as rr,l as wt,au as iv,bt as Mn,F as lv}from"./withPanelData-0-G3gUT2.js";import{u as dv,l as fs,d as j,M as m,S as Ae,y as Ye,w as K,a4 as nd,U as Be,L as zi,A as Fe,b as Ee,a1 as ov,a9 as gv,C as ee,e as Ji,E as Wi,s as Ge,N as or,H as qn,n as Ue,$ as Sn,W as Fu,m as Pn,c as Xi,j as re,a6 as Pe,ae as De,D as B,I as T,q as gt,K as fe,af as rd,x as Bu,B as uv,ag as Zi,F as qe,a3 as kv,aa as _u,G as Qt,X as Rr,P as es,ah as ns,ai as mv,aj as pv,ak as vv,g as fv,al as Lr,r as Qi,t as yv}from"./index.es-Ba7Faqdq.js";import{u as Fn}from"./initFetch-C3Ta7GLm.js";import{a as ze,r as Je,Z as Ne,e as X,X as tr,O as Rn,H as ce,s as Ou,b as rn,N as jn,c as hn,l as An,o as Du,m as wu,j as ys,q as el,u as Vt,g as tn,d as Ie,n as bs,K as Vu,_ as sn,$ as Zr,a0 as bv,Q as cs,E as Mu,a1 as cv,a2 as jv,a3 as td,h as js,i as hs,I as hv}from"./index.es-Cfe-Pn3f.js";import{A as de,h as As}from"./aksjonspunktCodes-BuBbCIxs.js";import{A as sr}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as un}from"./alleKodeverk-BFmIlMu4.js";import{V as Av}from"./venteArsakType-BJdSFL9e.js";import{S as Iv}from"./SettPaVentModalIndex-CygK5viM.js";import{c as Gu}from"./bind-oYjWB_aQ.js";import{d as I}from"./dayjs.min-CJilavqB.js";import{a as tt,g as Lu}from"./kodeverkUtils-DLZgokMR.js";import{F as gr,P as nl}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as rl}from"./eksterneLenker-DOKwbE_M.js";import{L as ut}from"./Link-qmT9b3Cr.js";import{S as Ar}from"./Spacer-DJ0nD5Ae.js";import{T as Ku}from"./Tooltip-BRo080lP.js";import{S as Or}from"./ExclamationmarkTriangleFill-C6_fgdaK.js";import{j as tl,V as ar,k as Tv,i as Ms,s as $u,O as Rv,S as Ev}from"./VedtakProsessIndex-V0gbsCd1.js";import{P as Er}from"./Popover-CS-v8-Ax.js";import{b as Uu,u as Bn}from"./behandlingApi-B9iMC3MH.js";import{u as ur,F as kr,s as Nv}from"./VergeFaktaInitPanel-jF12CoLn.js";import{B as _n}from"./behandlingDataContext-BdfTXpp6.js";import{h as hr}from"./moment-C5S46NFB.js";import{S as xv}from"./StarFill-BeMIThqK.js";import{h as On,s as qv,S as Sv,c as Pv}from"./index.es-C9Rz4liC.js";import{T as Ir}from"./BehandlingSupportIndex-D3lGEv4m.js";import{T as w}from"./Table-TR3HPi0G.js";import{S as Fv,T as Me,b as Bv,a as _v}from"./Timeline-Ngvl8mhH.js";import{T as Is}from"./Tag-j4ZAMQZK.js";import{C as Ov}from"./Checkbox-D4aBpghx.js";import{H as Dv}from"./landkoder-CERpsE_e.js";import{S as wv}from"./VisittkortSakIndex-1dDPH_D6.js";import{S as Yu}from"./TotrinnskontrollIndex-0viS2Rcq.js";import{a as sl,S as Vv}from"./Plus-C9R1YSsk.js";import{V as Hu}from"./BehandlingHenlagtPanel-D3J5EKvy.js";import{i as Mv,g as Gv}from"./index-DcmEv1us.js";import{u as al,P as Cu,a as Lv}from"./useStandardProsessPanelProps-E-I6CHvM.js";import{P as Dr,a as Kv,b as $v,V as il}from"./OverstyringPanel-BzH9e7kr.js";import{K as Uv}from"./Kjonnkode-C-fkzSiP.js";const ll=h.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Yv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const dl=h.createContext(null),Hv=h.forwardRef((e,n)=>{var{children:r,className:t,open:s,defaultOpen:i=!1,onOpenChange:l}=e,o=Yv(e,["children","className","open","defaultOpen","onOpenChange"]);const[g,k]=dv({defaultValue:i,value:s,onChange:l}),p=h.useContext(ll),v=h.useRef(!(s||i)),b=()=>{k(y=>!y),v.current=!0};return p!=null&&p.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),Y.createElement("div",Object.assign({className:nr("navds-accordion__item",t,{"navds-accordion__item--open":g,"navds-accordion__item--neutral":(p==null?void 0:p.variant)==="neutral","navds-accordion__item--no-animation":!v.current}),"data-expanded":g,ref:n},sv(o,["onClick"])),Y.createElement(dl.Provider,{value:{open:g,toggleOpen:b}},r))});var Cv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const zv=h.forwardRef((e,n)=>{var{children:r,className:t}=e,s=Cv(e,["children","className"]);const i=h.useContext(dl),l=Pu(!1);return i===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):Y.createElement(Ci,Object.assign({},s,{as:"div",ref:n,className:nr("navds-accordion__content",{"navds-accordion__content--closed":!i.open},t),"aria-hidden":!i.open||void 0}),l?Y.createElement("div",{className:"navds-accordion__content-inner"},r):r)});var Jv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Wv=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Jv(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var Xv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Zv=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Xv(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Qv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ef=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Qv(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var nf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const zu=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=nf(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var rf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Kr=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=rf(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var tf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const sf=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=tf(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var af=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const lf=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=af(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var df=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Ju=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=df(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var of=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const gf=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=of(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var uf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const kf=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=uf(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var mf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const $r=h.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=mf(e,["title","titleId"]);let i=mn();return i=r?t||"title-"+i:void 0,h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?h.createElement("title",{id:i},r):null,h.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var pf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const vf=h.forwardRef((e,n)=>{var r,{children:t,className:s,onClick:i}=e,l=pf(e,["children","className","onClick"]);const o=h.useContext(dl),g=h.useContext(ll),k=Pu(!1);if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let p=(r=g==null?void 0:g.headingSize)!==null&&r!==void 0?r:"small";return k&&(p=(g==null?void 0:g.size)==="small"?"xsmall":"small"),Y.createElement("button",Object.assign({ref:n},l,{className:nr("navds-accordion__header",s),onClick:av(i,o.toggleOpen),"aria-expanded":o.open,type:"button"}),Y.createElement("span",{className:"navds-accordion__icon-wrapper"},Y.createElement(fs,{className:"navds-accordion__header-chevron","aria-hidden":!0})),Y.createElement(se,{size:p,as:"span",className:"navds-accordion__header-content"},t))});var ff=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Se=h.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:s="small",size:i="medium",indent:l=!0}=e,o=ff(e,["className","variant","headingSize","size","indent"]);return Y.createElement(ll.Provider,{value:{variant:t,headingSize:s,size:i,mounted:!0}},Y.createElement("div",Object.assign({},o,{className:nr("navds-accordion",r,`navds-accordion--${i}`,{"navds-accordion--indent":l}),ref:n})))});Se.Header=vf;Se.Content=zv;Se.Item=Hv;const Ti=h.createContext({listType:"ul",size:"medium"});var yf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Wu=h.forwardRef((e,n)=>{var{className:r,children:t,title:s,icon:i}=e,l=yf(e,["className","children","title","icon"]);const{listType:o,size:g}=h.useContext(Ti);return o==="ol"&&i&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},l,{ref:n,className:nr("navds-list__item",r)}),o==="ul"&&Y.createElement("div",{className:nr("navds-list__item-marker",{"navds-list__item-marker--icon":i,"navds-list__item-marker--bullet":!i})},i||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,s&&Y.createElement(Ci,{as:"p",size:g,weight:"semibold"},s),t))});Wu.displayName="List.Item";var bf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const cf={small:"xsmall",medium:"small",large:"medium"},Q=h.forwardRef((e,n)=>{var{children:r,className:t,as:s="ul",title:i,description:l,headingTag:o="h3",size:g}=e,k=bf(e,["children","className","as","title","description","headingTag","size"]);const{size:p}=h.useContext(Ti),v=g??p;return Y.createElement(Ti.Provider,{value:{listType:s,size:v}},Y.createElement(Ci,Object.assign({as:"div"},k,{size:v,ref:n,className:nr("navds-list",`navds-list--${v}`,t)}),i&&Y.createElement(se,{size:cf[v],as:o},i),l&&Y.createElement(E,{size:v},l),Y.createElement(s,{role:"list"},r)))});Q.Item=Wu;var le=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(le||{}),ye=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ye||{}),st=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(st||{});const ol=h.createContext({isDirty:!1,setDirty:()=>{}}),Xu=({children:e})=>{const[n,r]=h.useState(!1),t=h.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return a.jsx(ol.Provider,{value:t,children:e})},gl=e=>{const n=h.useContext(ol);h.useEffect(()=>{n.setDirty(e)},[e])},jf=()=>h.useContext(ol).isDirty;Xu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const hf="_inline_glms2_1",Af="_textMargin_glms2_5",If="_docIcon_glms2_9",Tf="_phoneIcon_glms2_14",Gs={inline:hf,textMargin:Af,docIcon:If,phoneIcon:Tf},at=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:s,arbeidsgiverFødselsdato:i,ikkeVisInfo:l})=>a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),!l&&i&&a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),a.jsx(ke,{children:a.jsx(Ae,{dateString:i})})]}),!l&&!i&&a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),a.jsx(ke,{children:r.arbeidsgiverIdent})]}),a.jsx(j,{eightPx:!0}),t&&a.jsxs(a.Fragment,{children:[a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),a.jsx(E,{size:"small",children:r.eksternArbeidsforholdId})]}),a.jsx(j,{eightPx:!0})]}),n&&a.jsxs(a.Fragment,{children:[a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),a.jsx(E,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:tt(s,un.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),a.jsx(j,{eightPx:!0})]}),a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),a.jsx(E,{size:"small",children:K(r.inntektPrMnd)})]}),a.jsx(j,{eightPx:!0}),a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),a.jsx(E,{size:"small",children:a.jsx(m,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),a.jsx(j,{eightPx:!0}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&a.jsxs(a.Fragment,{children:[a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),a.jsx(E,{size:"small",children:K(r.refusjonPrMnd)})]}),a.jsx(j,{eightPx:!0})]}),a.jsxs(ut,{href:rl(e,r.journalpostId,r.dokumentId),target:"_blank",children:[a.jsx("span",{children:a.jsx(E,{size:"small",className:Gs.inline,children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),a.jsx(zu,{className:Gs.docIcon})]}),a.jsx(j,{sixteenPx:!0}),a.jsxs(te,{gap:"4",children:[a.jsx(Ju,{className:Gs.phoneIcon}),a.jsx("div",{children:a.jsxs(nn,{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),a.jsx(ke,{children:r.kontaktpersonNavn}),a.jsx(ke,{children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})})]}),a.jsx(j,{thirtyTwoPx:!0})]});at.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const Rf="_inline_10adz_1",Ef="_aksjonpunktImage_10adz_5",Nf="_arrow_10adz_12",xf="_ikkeMottatt_10adz_18",qf="_forsteKolonne_10adz_22",Sf="_sisteKolonne_10adz_26",Pf="_skiller_10adz_30",Ff="_textMargin_10adz_34",Hn={inline:Rf,aksjonpunktImage:Ef,arrow:Nf,ikkeMottatt:xf,forsteKolonne:qf,sisteKolonne:Sf,skiller:Pf,textMargin:Ff},Bf=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),_f=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(s=>!s.internArbeidsforholdId||s.internArbeidsforholdId===n)},Of=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,s)=>e.slice(s*25,s*25+25)).join("-")},ul=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:s})=>{const i=J(),[l,o]=h.useState({}),g=n.length===1,k=g?_f(r,n[0].internArbeidsforholdId):void 0;return a.jsxs(a.Fragment,{children:[s&&a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),a.jsx(ke,{children:a.jsx(Ae,{dateString:s})})]}),!s&&n.length>0&&a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),a.jsx(ke,{children:n[0].arbeidsgiverIdent})]}),!g&&a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),a.jsx(nd,{dividerParagraf:!0,className:Hn.skiller}),a.jsx(j,{sixteenPx:!0}),n.map(p=>{const v=r.find(b=>Bf(p,b));return a.jsxs(Y.Fragment,{children:[a.jsxs(nn,{gap:"2",children:[a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),a.jsxs("div",{children:[p.eksternArbeidsforholdId&&p.eksternArbeidsforholdId.length<50&&a.jsx("div",{children:a.jsx(E,{size:"small",children:p.eksternArbeidsforholdId})}),p.eksternArbeidsforholdId&&p.eksternArbeidsforholdId.length>=50&&a.jsx(Ku,{content:Of(p.eksternArbeidsforholdId),children:a.jsx(E,{size:"small",children:`${p.eksternArbeidsforholdId.substring(0,50)}...`})}),!p.eksternArbeidsforholdId&&a.jsx(E,{size:"small",children:"-"})]}),v&&a.jsxs(a.Fragment,{children:[a.jsx(Ar,{}),a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!v&&a.jsxs(a.Fragment,{children:[a.jsx(Ar,{}),a.jsxs("div",{children:[a.jsx(Or,{className:Hn.aksjonpunktImage,title:i.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),a.jsx("div",{className:Hn.ikkeMottatt,children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:p.fom,dateStringTom:p.tom!==Be?p.tom:void 0})}),v&&a.jsxs(a.Fragment,{children:[a.jsx(Ar,{}),a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:v.motattDato})})]})]}),a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),a.jsx(E,{size:"small",children:`${p.stillingsprosent}%`})]}),p.permisjonOgMangel&&a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:tt(t,un.PERMISJONSBESKRIVELSE_TYPE,p.permisjonOgMangel.type)}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:p.permisjonOgMangel.permisjonFom,dateStringTom:p.permisjonOgMangel.permisjonTom})})]}),v&&a.jsxs(a.Fragment,{children:[p.internArbeidsforholdId&&l[p.internArbeidsforholdId]&&a.jsx(at,{saksnummer:e,inntektsmelding:v,skalViseArbeidsforholdId:!1}),a.jsx(j,{fourPx:!0}),a.jsxs(ut,{onClick:b=>{b.preventDefault(),o(y=>{if(!p.internArbeidsforholdId)return y;const c=y[p.internArbeidsforholdId];return{...y,[p.internArbeidsforholdId]:c===void 0||c===!1}})},href:"",children:[a.jsx("span",{children:a.jsx(E,{size:"small",className:Hn.inline,children:a.jsx(m,{id:!p.internArbeidsforholdId||!l[p.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),p.internArbeidsforholdId&&l[p.internArbeidsforholdId]?a.jsx(zi,{className:Hn.arrow}):a.jsx(fs,{className:Hn.arrow})]})]})]}),a.jsx(j,{sixteenPx:!0}),a.jsx(nd,{dividerParagraf:!0,className:Hn.skiller}),a.jsx(j,{sixteenPx:!0})]},`${p.arbeidsgiverIdent}${p.internArbeidsforholdId}`)})]}),a.jsx(j,{eightPx:!0}),g&&!!k&&a.jsx(at,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:k,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),g&&r.length===0&&a.jsxs(a.Fragment,{children:[a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),a.jsx(E,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),a.jsxs(te,{gap:"4",children:[a.jsx(F,{size:"small",children:tt(t,un.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})]})};ul.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Df="_bredde_gb3eb_1",wf="_belopBredde_gb3eb_5",Vf="_inline_gb3eb_9",Mf="_arrow_gb3eb_13",Mt={bredde:Df,belopBredde:wf,inline:Vf,arrow:Mf},Gf=[],Lf=(e,n)=>{const t=I(e).subtract(1,"month").startOf("month"),s=t.subtract(12,"month"),i=[];for(let l=t;l.isAfter(s);l=l.subtract(1,"month")){const o=l.format(Fe),g=n.find(k=>I(k.fom).startOf("month").format(Fe)===o);i.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return i},kl=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:s=Gf,alleKodeverk:i,arbeidsgiverFødselsdato:l})=>{const[o,g]=h.useState(!1),k=h.useMemo(()=>Lf(n,r),[r]),p=t.length===1,v=r.length>0&&r.some(b=>b.beløp>0);return a.jsxs(a.Fragment,{children:[a.jsx(ul,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:s,alleKodeverk:i,arbeidsgiverFødselsdato:l}),a.jsx(j,{thirtyTwoPx:!0}),v&&a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:p?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),a.jsx(j,{fourPx:!0}),a.jsx(nn,{children:k.filter((b,y)=>o?!0:y<3).map(b=>a.jsxs(te,{gap:"2",className:Mt.bredde,children:[a.jsx(E,{size:"small",children:a.jsx(m,{id:`ArbeidsforholdInformasjonPanel.${I(b.fom).month()+1}`})}),a.jsx(E,{size:"small",children:I(b.fom).year()}),a.jsx(Ar,{}),a.jsx(E,{size:"small",children:K(b.beløp)})]},b.fom))}),a.jsx(j,{fourPx:!0}),a.jsxs(ut,{onClick:b=>{b.preventDefault(),g(!o)},href:"",children:[a.jsx("span",{children:a.jsx(E,{size:"small",className:Mt.inline,children:a.jsx(m,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?a.jsx(zi,{className:Mt.arrow}):a.jsx(fs,{className:Mt.arrow})]})]}),!v&&a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})}),a.jsx(j,{thirtyTwoPx:!0})]})};kl.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Kf="_hjelpetekst_1kk6h_1",$f="_alertStripe_1kk6h_5",Uf="_hjelpetekstInnhold_1kk6h_9",Yf="_svg_1kk6h_14",Gt={hjelpetekst:Kf,alertStripe:$f,hjelpetekstInnhold:Uf,svg:Yf},Hf=hn(3),Cf=An(1500),zf=Du(1),Jf=wu(100),Wf=e=>n=>{const r=e("fom");return r&&n?ys(r)(n):null},Xf=(e,n,r,t)=>()=>{e(s=>s.map(i=>{if(r.arbeidsgiverIdent===i.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return i}))},Zu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:s,radData:i,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:g,lukkArbeidsforholdRad:k,oppdaterTabell:p,skalViseArbeidsforholdId:v,arbeidsgiverFødselsdato:b})=>{const y=J(),c=h.useMemo(()=>{var _,H,C,L,M;return{saksbehandlersVurdering:(_=i.avklaring)==null?void 0:_.saksbehandlersVurdering,begrunnelse:(H=i.avklaring)==null?void 0:H.begrunnelse,fom:(C=i.avklaring)==null?void 0:C.fom,tom:(L=i.avklaring)==null?void 0:L.tom,stillingsprosent:(M=i.avklaring)==null?void 0:M.stillingsprosent}},[i]),x=ze({defaultValues:c});gl(x.formState.isDirty);const A=x.watch("saksbehandlersVurdering"),N=()=>{k(),x.reset(c)},R=_=>{const H=Xf(p,i,s,_);return _.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:s.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:s.arbeidsgiverIdent,vurdering:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:_.begrunnelse,fom:_.fom,tom:_.tom,stillingsprosent:_.stillingsprosent}).then(H).finally(()=>x.reset(_)):g({behandlingUuid:n,behandlingVersjon:r,vurdering:_.saksbehandlersVurdering,begrunnelse:_.begrunnelse,arbeidsgiverIdent:s.arbeidsgiverIdent,internArbeidsforholdRef:s.internArbeidsforholdId}).then(H).finally(()=>x.reset(_))},S=h.useRef(null),[q,P]=h.useState(!1),D=h.useCallback(()=>P(_=>!_),[]);return a.jsxs(a.Fragment,{children:[a.jsx(at,{saksnummer:e,inntektsmelding:s,skalViseArbeidsforholdId:v,arbeidsgiverFødselsdato:b}),a.jsx(j,{fourtyPx:!0}),a.jsx("div",{className:Gt.alertStripe,children:a.jsx(Ee,{variant:"info",children:a.jsx(m,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),a.jsx(j,{thirtyTwoPx:!0}),a.jsxs(Je,{formMethods:x,onSubmit:R,children:[a.jsx(Ne,{name:"saksbehandlersVurdering",label:a.jsxs(te,{gap:"2",children:[a.jsx(m,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),a.jsx(tl,{className:Gt.svg,ref:S,onClick:D,title:y.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),a.jsx(Er,{open:q,onClose:D,anchorEl:S.current,className:Gt.hjelpetekst,children:a.jsx(Er.Content,{className:Gt.hjelpetekstInnhold,children:a.jsx(E,{children:a.jsx(m,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[X],isReadOnly:l,radios:[{label:y.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:y.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:y.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),A===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),a.jsxs(te,{gap:"4",children:[a.jsx(tr,{name:"fom",label:a.jsx(m,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[X,Rn],isReadOnly:l}),a.jsx(tr,{name:"tom",label:a.jsx(m,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[Rn,Wf(x.getValues)],isReadOnly:l}),a.jsx(ce,{name:"stillingsprosent",label:a.jsx(m,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:_=>{const H=parseInt(_.toString(),10);return Number.isNaN(H)?_:H},validate:[X,Ou,zf,Jf],readOnly:l,maxLength:3})]}),a.jsx(j,{fourPx:!0})]}),a.jsx(j,{sixteenPx:!0}),a.jsx(rn,{label:a.jsx(m,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[X,Hf,Cf,jn],maxLength:1500,readOnly:l}),a.jsx(j,{twentyPx:!0}),!l&&a.jsxs(te,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:x.formState.isSubmitting,disabled:!x.formState.isDirty||x.formState.isSubmitting,children:a.jsx(m,{id:"ManglendeOpplysningerForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:x.formState.isSubmitting,onClick:N,type:"button",children:a.jsx(m,{id:"ManglendeOpplysningerForm.Avbryt"})})]}),a.jsx(j,{fourtyPx:!0})]})]})};Zu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Zf="_alertStripe_9hpes_1",Qf="_hjelpetekst_9hpes_5",ey="_hjelpetekstInnhold_9hpes_9",ny="_svg_9hpes_14",Lt={alertStripe:Zf,hjelpetekst:Qf,hjelpetekstInnhold:ey,svg:ny},ry=hn(3),ty=An(1500),sy=(e,n,r)=>()=>{e(t=>t.map(s=>s.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:s))},Qu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:s=[],arbeidsforholdForRad:i,inntektsmeldingerForRad:l,radData:o,isReadOnly:g,lagreVurdering:k,lukkArbeidsforholdRad:p,oppdaterTabell:v,alleKodeverk:b,arbeidsgiverFødselsdato:y})=>{const c=J(),x=h.useMemo(()=>{var C,L;return{saksbehandlersVurdering:(C=o.avklaring)==null?void 0:C.saksbehandlersVurdering,begrunnelse:(L=o.avklaring)==null?void 0:L.begrunnelse}},[o]),A=ze({defaultValues:x});gl(A.formState.isDirty);const N=i.length===1,R=()=>{p(),A.reset(x)},S=C=>{const L={behandlingUuid:n,behandlingVersjon:r,vurdering:C.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:N?i[0].internArbeidsforholdId:void 0,begrunnelse:C.begrunnelse};return k(L).then(sy(v,o,C)).finally(()=>A.reset(C))},q=h.useRef(null),[P,D]=h.useState(!1),_=h.useCallback(()=>D(C=>!C),[]),H=[{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:le.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&H.splice(1,0,{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:le.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),a.jsxs(a.Fragment,{children:[a.jsx(kl,{saksnummer:e,skjæringspunktDato:t,inntektsposter:s,arbeidsforholdForRad:i,inntektsmeldingerForRad:l,alleKodeverk:b,arbeidsgiverFødselsdato:y}),a.jsxs(Je,{formMethods:A,onSubmit:S,children:[!N&&l.length>0&&a.jsxs("div",{className:Lt.alertStripe,children:[a.jsx(Ee,{variant:"info",children:a.jsx(m,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})}),a.jsx(j,{sixteenPx:!0})]}),a.jsx(Ne,{name:"saksbehandlersVurdering",label:a.jsxs(te,{gap:"2",children:[a.jsx(m,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),a.jsx(tl,{ref:q,onClick:_,className:Lt.svg,title:c.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),a.jsx(Er,{open:P,onClose:_,anchorEl:q.current,className:Lt.hjelpetekst,children:a.jsxs(Er.Content,{className:Lt.hjelpetekstInnhold,children:[a.jsx(E,{children:a.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),a.jsx(j,{eightPx:!0}),a.jsx(E,{children:a.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),a.jsx(j,{eightPx:!0}),a.jsx(E,{children:a.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})]}),validate:[X],isReadOnly:g,radios:H}),a.jsx(j,{sixteenPx:!0}),a.jsx(rn,{label:a.jsx(m,{id:N?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[X,ry,ty,jn],maxLength:1500,readOnly:g}),a.jsx(j,{twentyPx:!0}),!g&&a.jsxs(te,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:A.formState.isSubmitting,disabled:!A.formState.isDirty||A.formState.isSubmitting,children:a.jsx(m,{id:"InntektsmeldingInnhentesForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:A.formState.isSubmitting,onClick:R,type:"button",children:a.jsx(m,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]}),a.jsx(j,{fourtyPx:!0})]})]})};Qu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Nr="342352362",ay=hn(3),iy=An(1500),ly=Du(1),dy=wu(100),oy=e=>n=>{const r=e("fom");return n&&r?ys(r)(n):null},gy=e=>n=>{const r={arbeidsgiverIdent:Nr,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(s=>s.arbeidsgiverIdent===Nr);return t===-1?n.concat(r):n.map((s,i)=>i===t?r:s)},uy=(e,n,r)=>()=>{e(t=>t.filter(s=>s.arbeidsgiverIdent!==Nr)),r&&n()},ml=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:s,lukkArbeidsforholdRad:i,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:g=!1})=>{const k=J(),[p,v]=h.useState(!1),b=h.useMemo(()=>{var N,R,S,q,P;return{fom:(N=s==null?void 0:s.avklaring)==null?void 0:N.fom,tom:(R=s==null?void 0:s.avklaring)==null?void 0:R.tom,stillingsprosent:(S=s==null?void 0:s.avklaring)==null?void 0:S.stillingsprosent,begrunnelse:(q=s==null?void 0:s.avklaring)==null?void 0:q.begrunnelse,arbeidsgiverNavn:(P=s==null?void 0:s.avklaring)==null?void 0:P.arbeidsgiverNavn}},[s]),y=ze({defaultValues:b});gl(y.formState.isDirty);const c=()=>{i(),y.reset(b)},x=N=>{const R={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:Nr,vurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...N};return t(R).then(()=>{o(gy(N)),y.reset(N),g&&i()})},A=()=>{const N=y.getValues(),R={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:Nr,vurdering:le.FJERN_FRA_BEHANDLINGEN,...N};t(R).then(uy(o,i,g))};return a.jsxs(a.Fragment,{children:[!s&&a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),a.jsx(j,{sixteenPx:!0})]}),a.jsx(j,{eightPx:!0}),a.jsxs(Je,{formMethods:y,onSubmit:x,children:[a.jsxs(te,{gap:"4",children:[l&&a.jsxs(a.Fragment,{children:[a.jsx(ce,{name:"arbeidsgiverNavn",label:a.jsx(m,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[X],readOnly:r||!l}),a.jsx(tr,{name:"fom",label:a.jsx(m,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[X,Rn],isReadOnly:r||!l}),a.jsx(tr,{name:"tom",label:a.jsx(m,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[Rn,oy(y.getValues)],isReadOnly:r||!l})]}),a.jsx(ce,{name:"stillingsprosent",label:a.jsx(m,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:N=>{const R=parseInt(N.toString(),10);return Number.isNaN(R)?N:R},validate:[X,Ou,ly,dy],readOnly:r||!l,maxLength:3})]}),a.jsx(j,{twentyPx:!0}),a.jsx(rn,{label:a.jsx(m,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[X,ay,iy,jn],maxLength:1500,readOnly:r||!l}),a.jsx(j,{twentyPx:!0}),l&&a.jsxs(te,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:y.formState.isSubmitting,disabled:!y.formState.isDirty||y.formState.isSubmitting,children:a.jsx(m,{id:"LeggTilArbeidsforholdForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:c,type:"button",children:a.jsx(m,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&a.jsxs(a.Fragment,{children:[a.jsx(Ar,{}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:()=>v(!0),type:"button",icon:a.jsx(kf,{"aria-hidden":!0}),children:a.jsx(m,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]}),a.jsx(j,{fourtyPx:!0})]}),p&&a.jsx(ov,{text:k.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:A,cancel:()=>v(!1),showModal:!0})]})};ml.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ky="_ikon_1mrt8_1",my="_colTopPadding_1mrt8_5",py="_imageColTopPadding_1mrt8_9",vy="_exclamationmarkIcon_1mrt8_13",fy="_checkmarkIcon_1mrt8_20",Jn={ikon:ky,colTopPadding:my,imageColTopPadding:py,exclamationmarkIcon:vy,checkmarkIcon:fy},yy=Gu.bind(Jn),by=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",cy=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,s)=>({fom:t.fom&&I(t.fom).isBefore(s.fom)?t.fom:s.fom,tom:t.tom&&I(t.tom).isAfter(s.tom)?t.tom:s.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},jy=(e,n)=>{const r=e.some(i=>i.internArbeidsforholdId),t=e.some(i=>!i.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const s=e.find(i=>!i.internArbeidsforholdId||!n||i.internArbeidsforholdId===n);if(!s)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return s},ek=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:s,isReadOnly:i,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:g,lagreVurdering:k,toggleÅpenRad:p,erRadÅpen:v,alleKodeverk:b})=>{var ne,z;const y=J(),{arbeidsgiverNavn:c,arbeidsgiverIdent:x,årsak:A,avklaring:N,arbeidsgiverFødselsdato:R}=s,S=h.useMemo(()=>t.arbeidsforhold.filter(ie=>ie.arbeidsgiverIdent===x),[t,x]),q=h.useMemo(()=>t.inntektsmeldinger.filter(ie=>ie.arbeidsgiverIdent===x),[t,x]),P=(N==null?void 0:N.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,D=S.length>0&&q.length>0&&!A,_=A===st.MANGLENDE_INNTEKTSMELDING,H=A===st.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,C=!!A&&!(N!=null&&N.saksbehandlersVurdering),L=S.length>0&&q.length===0&&!A&&!P,M=S.length===0&&q.length>0&&!A,V=h.useMemo(()=>cy(S,s.avklaring),[P,S,s.avklaring]),U=(ne=t.inntekter.find(ie=>ie.arbeidsgiverIdent===x))==null?void 0:ne.inntekter;return a.jsxs(gv,{alignWithColumn:1,content:a.jsxs(a.Fragment,{children:[P&&a.jsx(ml,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:g,radData:s,lukkArbeidsforholdRad:p,erOverstyrt:l,oppdaterTabell:o}),D&&a.jsx(ul,{saksnummer:e,arbeidsforholdForRad:S,inntektsmeldingerForRad:q,alleKodeverk:b,arbeidsgiverFødselsdato:R}),M&&a.jsx(at,{saksnummer:e,arbeidsforhold:S.length>0?S[0]:void 0,inntektsmelding:jy(q,S.length>0?(z=S[0])==null?void 0:z.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:b,arbeidsgiverFødselsdato:R}),_&&a.jsx(Qu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,isReadOnly:i,arbeidsforholdForRad:S,inntektsmeldingerForRad:q,radData:s,lagreVurdering:k,lukkArbeidsforholdRad:p,oppdaterTabell:o,alleKodeverk:b,arbeidsgiverFødselsdato:R}),H&&a.jsx(Zu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:c,inntektsmelding:q[0],radData:s,isReadOnly:i,registrerArbeidsforhold:g,lagreVurdering:k,lukkArbeidsforholdRad:p,oppdaterTabell:o,skalViseArbeidsforholdId:q.length>1}),L&&a.jsx(kl,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,arbeidsforholdForRad:S,alleKodeverk:b,arbeidsgiverFødselsdato:R})]}),showContent:v,toggleContent:p,isApLeftBorder:C,children:[a.jsxs(ee,{className:yy("ikon",v?"imageColTopPadding":void 0),children:[!C&&a.jsx(Ji,{title:y.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:Jn.checkmarkIcon}),C&&a.jsx(Or,{title:y.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:Jn.exclamationmarkIcon})]}),a.jsxs(ee,{className:v?Jn.colTopPadding:void 0,children:[v&&a.jsx(F,{size:"small",children:c}),!v&&a.jsx(E,{size:"small",children:c})]}),a.jsx(ee,{className:v?Jn.colTopPadding:void 0,children:a.jsxs(E,{children:[(V==null?void 0:V.fom)&&a.jsx(Ye,{dateStringFom:V.fom,dateStringTom:V.tom!==Be?V.tom:void 0}),!V&&"-"]})}),a.jsx(ee,{className:v?Jn.colTopPadding:void 0,children:a.jsx(E,{children:a.jsx(m,{id:by(P,S.length>0)})})}),a.jsx(ee,{className:v?Jn.colTopPadding:void 0,children:a.jsxs(E,{children:[S.length<2&&q.length===1&&a.jsx(Ae,{dateString:q[0].motattDato}),!_&&S.length>1&&q.length===S.length&&a.jsx(m,{id:"ArbeidsforholdRad.Mottatt"}),(P||_&&q.length<S.length)&&a.jsx(m,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};ek.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const hy="_leggTilImage_2poz8_1",Ay="_alertStripe_2poz8_5",Iy={leggTilImage:hy,alertStripe:Ay},Ty=(e,n)=>{const r=e.some(l=>l.årsak===st.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===st.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=(n==null?void 0:n.status)===sr.OPPRETTET,i=[];return s&&r&&i.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&t&&i.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),i},nk=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:s,erOverstyrer:i,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:g,oppdaterTabell:k})=>{const p=J(),{arbeidsforhold:v,inntektsmeldinger:b}=t,[y,c]=h.useState(!1),[x,A]=h.useState(!1),N=h.useCallback(()=>{g(!0),c(!0);const P=l.findIndex(D=>{var _;return((_=D.avklaring)==null?void 0:_.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});P!==-1&&o([P])},[l,o]),R=h.useMemo(()=>Ty(l,n),[e.versjon]),S=l.every(P=>P.arbeidsgiverIdent!==Nr),q=(n==null?void 0:n.status)===sr.OPPRETTET;return a.jsxs(a.Fragment,{children:[a.jsxs(te,{gap:"4",children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),i&&q&&!r&&a.jsx(Wi,{onClick:N}),a.jsx(Ar,{}),a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ge(t.skjæringstidspunkt)}})})]}),a.jsx(j,{thirtyTwoPx:!0}),R.length>0&&a.jsx(or,{children:R.map(P=>p.formatMessage({id:P})).join(" ")}),v.length===0&&b.length===0&&i&&a.jsx("div",{className:Iy.alertStripe,children:a.jsx(Ee,{variant:"info",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),a.jsx(j,{sixteenPx:!0}),y&&S&&!x&&a.jsxs(a.Fragment,{children:[a.jsx(j,{twentyPx:!0}),a.jsx(ae,{size:"small",variant:"tertiary",icon:a.jsx(el,{"aria-hidden":!0}),onClick:()=>A(!0),children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})}),a.jsx(j,{thirtyTwoPx:!0})]}),a.jsx(j,{thirtyTwoPx:!0}),x&&a.jsxs(a.Fragment,{children:[a.jsx(ml,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>A(!1),oppdaterTabell:k,erOverstyrt:!0,erNyttArbeidsforhold:!0}),a.jsx(j,{fourtyPx:!0})]})]})};nk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Ry="_alertStripe_z95u6_1",Ey={alertStripe:Ry},Ny=["EMPTY1","ArbeidOgInntektFaktaPanel.Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode","ArbeidOgInntektFaktaPanel.Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt","EMPTY2"],xy=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},sd=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,qy=(e,n)=>{const r={saksbehandlersVurdering:e.saksbehandlersVurdering,begrunnelse:e.begrunnelse};return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{...r,arbeidsgiverNavn:n,fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent}:r},Sy=e=>e.årsak?-1:1,Py=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,s=[...r.sort(Sy)].reduce((l,o)=>{var b;if(l.find(y=>y.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const k=n[o.arbeidsgiverIdent],p=k.navn,v=o.årsak?o.årsak:(b=t.find(y=>sd(o,y)))==null?void 0:b.årsak;return l.concat({arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:p,arbeidsgiverFødselsdato:k.erPrivatPerson?k.fødselsdato:void 0,årsak:v,avklaring:o.saksbehandlersVurdering?qy(o,p):void 0})},[]),i=t.filter(l=>!r.some(o=>sd(o,l))).map(l=>{var o,g;return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:n[l.arbeidsgiverIdent].navn,arbeidsgiverFødselsdato:(o=n[l.arbeidsgiverIdent])!=null&&o.erPrivatPerson?(g=n[l.arbeidsgiverIdent])==null?void 0:g.fødselsdato:void 0,årsak:l.årsak,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse}:void 0}});return s.concat(i).sort(xy)},ad=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},rk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})=>{const[o,g]=h.useState(!1),[k,p]=h.useState(!1),[v,b]=h.useState(!1),{alleKodeverk:y,submitCallback:c,aksjonspunkterForPanel:x,behandling:A,fagsak:N,isReadOnly:R}=xn(),S=x.length>0?x[0]:void 0,{formData:q,setFormData:P}=$n(),[D,_]=h.useState(q||Py(e,n)),[H,C]=h.useState(ad(D)),L=jf();h.useEffect(()=>()=>{P(D)},[D]);const M=je=>{H.some(Oe=>Oe===je)?C(H.filter(Oe=>Oe!==je)):C(H.concat(je))},V=h.useRef(null),U=je=>{var Oe;_(je),C(ad(je(D))),(Oe=V==null?void 0:V.current)==null||Oe.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},ne=()=>{g(!0),c({kode:de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},z=()=>{g(!0),l()},ie=je=>{g(!0),p(!1);const{frist:Oe,ventearsak:Gr}=je;Gr&&i({frist:Oe,ventearsak:Gr})},Re=D.some(je=>{var Oe,Gr,ed;return((Oe=je.avklaring)==null?void 0:Oe.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Gr=je.avklaring)==null?void 0:Gr.saksbehandlersVurdering)===le.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((ed=je.avklaring)==null?void 0:ed.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),_e=D.every(je=>!je.årsak||je.årsak&&je.avklaring),We=S===void 0,Xe=(S==null?void 0:S.status)===sr.UTFORT,W=(S==null?void 0:S.status)===sr.OPPRETTET,me=!R&&(Xe||s&&We),Te=!R&&W&&_e&&!L&&Re,on=!R&&W&&_e&&!L&&!Re;return a.jsxs(a.Fragment,{children:[a.jsx(nk,{behandling:A,aksjonspunkt:S,readOnly:R,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:s,tabellData:D,settÅpneRadIndexer:C,setErOverstyrt:b,oppdaterTabell:U}),a.jsx(qn,{ref:V,headerTextCodes:Ny,noHover:!0,hasGrayHeader:!0,children:D.map((je,Oe)=>a.jsx(ek,{arbeidOgInntekt:e,saksnummer:N.saksnummer,behandlingUuid:A.uuid,behandlingVersjon:A.versjon,radData:je,isReadOnly:R||Xe||We,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>M(Oe),erOverstyrt:v,oppdaterTabell:U,erRadÅpen:H.includes(Oe),alleKodeverk:y},`${je.arbeidsgiverNavn}${je.arbeidsgiverIdent}${Oe}`))}),a.jsx(j,{sixteenPx:!0}),Te&&a.jsxs(a.Fragment,{children:[a.jsx(ae,{size:"small",variant:"primary",disabled:o,onClick:()=>p(!0),type:"button",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),a.jsx(Iv,{submitCallback:ie,cancelEvent:()=>p(!1),defaultVenteårsak:Av.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:y[un.VENT_AARSAK],erTilbakekreving:!1,showModal:k})]}),on&&a.jsx(ae,{size:"small",variant:"primary",disabled:o,loading:o,onClick:ne,type:"button",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})}),me&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:Ey.alertStripe,children:a.jsx(Ee,{variant:"info",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),a.jsx(j,{sixteenPx:!0}),a.jsx(ae,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:z,type:"button",children:a.jsx(m,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})]})]})};rk.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Fy={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad"},By=Ue(Fy),tk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})=>a.jsx(Ke,{value:By,children:a.jsx(Xu,{children:a.jsx(rk,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})})});tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _y=[de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],Oy=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),{behandling:t,hentOgSettBehandling:s,rettigheter:i}=h.use(_n),l=ur(_y),o=Bn(t),{data:g}=Fn(o.arbeidOgInntektOptions(t)),{mutate:k}=Vt({mutationFn:y=>o.settBehandlingPåVent({frist:y.frist??"",ventearsak:y.ventearsak,behandlingUuid:t.uuid,behandlingVersjon:t.versjon}),onSuccess:()=>s()}),{mutateAsync:p}=Vt({mutationFn:y=>o.registrerArbeidsforholdForAOI(y)}),{mutateAsync:v}=Vt({mutationFn:y=>o.lagreVurderingForAOI(y)}),{mutate:b}=Vt({mutationFn:()=>o.åpneForNyVurderingAOI({behandlingUuid:t.uuid,behandlingVersjon:t.versjon}),onSuccess:()=>s()});return a.jsx(kr,{...n,standardPanelProps:l,faktaPanelKode:gr.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:Uu(t,"ARBEID_OG_INNTEKT")&&!As(de.AVKLAR_ARBEIDSFORHOLD,t.aksjonspunkt),children:g?a.jsx(tk,{arbeidOgInntekt:g,arbeidsgiverOpplysningerPerId:e,erOverstyrer:i.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:p,lagreVurdering:v,settBehandlingPåVentCallback:k,åpneForNyVurdering:b}):a.jsx(Sn,{})})};Oy.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Ri=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Ri||{});const sk=({arbeidsforhold:e})=>e.permisjonOgMangel?a.jsxs(a.Fragment,{children:[a.jsx(j,{sixteenPx:!0}),a.jsx(F,{size:"small",children:a.jsx(m,{id:"PermisjonPeriode.Permisjon"})}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})}),a.jsx(j,{sixteenPx:!0})]}):null;sk.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Dy=e=>e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,wy=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt",ak=({valgtArbeidsforhold:e})=>{var p,v;const n=e.saksbehandlersVurdering===le.BRUK,r=e.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE,s=e.saksbehandlersVurdering===le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,i=e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((p=e.permisjonOgMangel)==null?void 0:p.permisjonStatus)===Ri.BRUK_PERMISJON,g=((v=e.permisjonOgMangel)==null?void 0:v.permisjonStatus)===Ri.IKKE_BRUK_PERMISJON,k=Dy(e);return a.jsxs(a.Fragment,{children:[a.jsx(j,{thirtyTwoPx:!0}),a.jsxs(Fu,{children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.Header"})}),a.jsx(sk,{arbeidsforhold:e}),t&&a.jsxs(a.Fragment,{children:[a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),a.jsxs(E,{size:"small",children:[k&&a.jsx(Ae,{dateString:k}),!k&&"-"]})]}),n&&o&&a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),i&&a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||g))&&a.jsxs(a.Fragment,{children:[a.jsx(E,{size:"small",children:a.jsx(m,{id:wy(e)})}),a.jsx(j,{sixteenPx:!0}),r&&a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&a.jsx(E,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),s&&a.jsx(E,{size:"small",children:a.jsx(m,{id:s?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),a.jsx(j,{sixteenPx:!0}),a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdDetail.Begrunnelse"})}),a.jsx(E,{size:"small",children:e.begrunnelse})]})]})};ak.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ik=({headerColumnContent:e})=>a.jsx(qn,{headerColumnContent:e,noHover:!0,children:a.jsxs(Pn,{children:[a.jsx(ee,{children:a.jsx(E,{size:"small",children:a.jsx(m,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})}),a.jsx(ee,{}),a.jsx(ee,{}),a.jsx(ee,{}),a.jsx(ee,{}),a.jsx(ee,{})]})});ik.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert",props:{headerColumnContent:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement"}],raw:"React.ReactElement[]"},description:""}}};const Vy="_image_awjuc_1",My={image:Vy},id=[a.jsx(m,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:a.jsx("br",{})}},1),a.jsx(m,{id:"PersonArbeidsforholdTable.Periode",values:{br:a.jsx("br",{})}},2),a.jsx(m,{id:"PersonArbeidsforholdTable.Kilde",values:{br:a.jsx("br",{})}},3),a.jsx(m,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:a.jsx("br",{})}},4),a.jsx(m,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:a.jsx("br",{})}},5),a.jsx("div",{},6)],Gy=(e,n)=>e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),rs=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Ly=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Ky=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],s=t==null?void 0:t.navn;return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?s:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${s}(${t.identifikator})${Ly(e.eksternArbeidsforholdId)}`:`${s}(${t.identifikator})`},$y=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`},lk=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:s})=>{const i=J();return e.length===0?a.jsx(ik,{headerColumnContent:id}):a.jsx(qn,{headerColumnContent:id,children:e==null?void 0:e.map(l=>{var p;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",g=Ky(l,e,t),k=(p=s.find(v=>rs(l,v)))==null?void 0:p.motattDato;return a.jsxs(Pn,{model:l,onMouseDown:r,onKeyDown:r,isSelected:l.arbeidsgiverIdent===n,children:[a.jsx(ee,{children:a.jsx(E,{size:"small",children:Xi(g)})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:l.fom,dateStringTom:l.tom!==Be?l.tom:void 0})})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:Gy(l,i)})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:o})}),a.jsx(ee,{children:k&&a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:k})})}),a.jsx(ee,{children:(l.saksbehandlersVurdering===le.BRUK||l.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING)&&a.jsx(xv,{className:My.image,title:i.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},$y(l,t))})})};lk.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""}}};const ld=(e,n)=>n.some(r=>rs(e,r)),Uy=(e,n)=>(r,t)=>{var g,k;const s=e[r.arbeidsgiverIdent],i=e[t.arbeidsgiverIdent];if(s&&i){const p=s.navn.localeCompare(i.navn);if(p!==0)return p}const l=ld(r,n),o=ld(t,n);if(l&&o){const p=(g=n.find(b=>rs(r,b)))==null?void 0:g.motattDato,v=(k=n.find(b=>rs(t,b)))==null?void 0:k.motattDato;return hr(v,Fe).diff(hr(p,Fe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)},dk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=h.useState(),s=h.useCallback((g,k,p)=>{const v=!!(p!=null&&p.saksbehandlersVurdering);t(v?p:void 0)},[t]),{arbeidsforhold:i,inntektsmeldinger:l}=e,o=h.useMemo(()=>i.slice().sort(Uy(n,l)),[n]);return a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),a.jsx(lk,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:s,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&a.jsx(ak,{valgtArbeidsforhold:r})]})};dk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Yy={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},Hy=Ue(Yy),ok=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>a.jsx(Ke,{value:Hy,children:a.jsx(dk,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})});ok.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const dd=[de.AVKLAR_ARBEIDSFORHOLD],Cy=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),t=ur(dd),{behandling:s}=h.use(_n),i=Bn(s),{data:l}=Fn(i.arbeidOgInntektOptions(s));return a.jsx(kr,{...n,standardPanelProps:t,faktaPanelKode:gr.ARBEIDSFORHOLD,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:dd.some(o=>As(o,s.aksjonspunkt)),children:l?a.jsx(ok,{arbeidOgInntekt:l,arbeidsgiverOpplysningerPerId:e}):a.jsx(Sn,{})})};Cy.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const gk="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn";var he=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(he||{}),od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gd={exports:{}},Ur={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function zy(){if(ud)return Ur;ud=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Ur.Fragment=n,Ur.jsx=r,Ur.jsxs=r,Ur}var kd;function Jy(){return kd||(kd=1,gd.exports=zy()),gd.exports}var u=Jy(),kn=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(kn||{}),kt=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(kt||{}),ge=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ge||{});const it={};it.BA=kt.BRUKERS_ANDEL;it.FL=kt.FRILANS;it.SN=kt.EGEN_NÆRING;var mr=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(mr||{}),uk=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(uk||{});const Ts=e=>e==="OPPR";var O=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(O||{}),pl=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(pl||{}),Rs=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(Rs||{});const Ls=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Kn=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${I(e.fødselsdato).format(re)})${Ls(n)}`:`${e.navn}${Ls(n)}`:`${e.navn} (${e.identifikator})${Ls(n)}`,lt="avklarAktiviteterForm",yn="vurderFaktaBeregningForm",Qe=(e,n)=>n.some(r=>r.definisjon===e),Wy=e=>e===uk.OPPRETTET,Xy="_begrunnelseTextField_12bwv_1",Zy="_explanationTextarea_12bwv_4",Qy="_explanationTextareaReadOnly_12bwv_7",Ks={begrunnelseTextField:Xy,explanationTextarea:Zy,explanationTextareaReadOnly:Qy},kk={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},md=Ue(kk),eb=hn(3),mk=4e3,nb=An(mk),wr=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:s=!1,name:i="begrunnelse"})=>{const l=s?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||md.formatMessage({id:l});return u.jsx(Ke,{value:md,children:(n||r)&&u.jsx("div",{className:Ks.begrunnelseTextField,children:u.jsx(rn,{name:i,label:o,validate:e?[]:[X,eb,nb,jn],className:e?Ks.explanationTextareaReadOnly:Ks.explanationTextarea,maxLength:mk,readOnly:e})})})};wr.buildInitialValues=(e,n="begrunnelse")=>({[n]:Xi(e)});wr.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:vl,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:rb}=he,tb=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),sb=(e,n,r)=>(e||tb(vl,n))&&r,pk=e=>e.find(n=>n.definisjon===rb||n.definisjon===vl),ab=(e,n)=>Qe(vl,e)||n,ib=(e,n,r)=>e&&n&&!r,lb=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,pd=(e,n)=>e+n.fom.replace(".",""),Ce=e=>{if(e.arbeidsgiverIdent){const n=lb(e,e.arbeidsgiverIdent);return pd(n,e)}return pd(e.arbeidsforholdType,e)},db=(e,n)=>e||n,zt=(e,n,r,t,s)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===mr.AAP?!1:n?db(t,s):!0,ob=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return s?Kn(s,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[kn.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},gb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n)),ub=(e,n,r,t)=>zt(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",kb=(e,n,r,t,s,i)=>({beregningAktivitetNavn:ob(e,i,n),fom:e.fom,tom:e.tom,skalBrukes:ub(e,r,t,s)}),mb=(e,n,r,t)=>{const s=gb(r,t);return n.filter(i=>e.aktiviteterValues&&(e.aktiviteterValues[Ce(i)].skalBrukes==="false"||e.aktiviteterValues[Ce(i)].tom!=null)).map(i=>({oppdragsgiverOrg:i.arbeidsgiverIdent&&i.arbeidsgiverIdent.length===9?i.arbeidsgiverIdent:void 0,arbeidsforholdRef:i.arbeidsforholdId,fom:i.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[Ce(i)].tom!=null?e.aktiviteterValues[Ce(i)].tom:i.tom,opptjeningAktivitetType:i.arbeidsforholdType,arbeidsgiverIdentifikator:i.arbeidsgiverIdent,skalBrukes:s&&e.aktiviteterValues?e.aktiviteterValues[Ce(i)].skalBrukes==="true":!0}))},pb=(e,n,r,t,s,i)=>{const l={};return e.forEach(o=>{l[Ce(o)]=kb(o,n,r,t,s,i)}),l},vb="_radios_4fctu_1",fb="_navnKol_4fctu_10",yb="_table_4fctu_15",Xr={radios:vb,navnKol:fb,table:yb},bb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n)),vd=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return s?Kn(s,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[kn.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},cb=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:k,fieldId:p})=>{const v=J(),b=bb(o,l),y=c=>{const x=vd(r,k,t),A=`${rd(r.fom)} til ${rd(r.tom||"")}`;return`${c?"Benytt":"Ikke benytt"} ${x} ${A}`};return u.jsxs(w.Row,{children:[u.jsx(w.DataCell,{className:Xr.navnKol,children:u.jsx(E,{size:"small",children:vd(r,k,t)})}),u.jsxs(w.DataCell,{className:Xr.rowalign,children:[!s&&u.jsx(E,{children:u.jsx(Ye,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),s&&u.jsxs("div",{children:[u.jsxs(E,{as:"span",size:"small",children:[u.jsx(Ae,{dateString:r.fom})," -"," "]}),u.jsx(tr,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${Ce(r)}.tom`,validate:[X,Rn,ys(r.fom)],isReadOnly:e,size:"small"})]})]}),u.jsx(w.DataCell,{className:Xr.radios,children:u.jsx(Ne,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${Ce(r)}.skalBrukes`,label:v.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[X],isHorizontal:!0,isReadOnly:e||!zt(r,s,i,b,g),radios:[{value:"true",label:y(!0)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(w.DataCell,{className:Xr.radios,children:u.jsx(Ne,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${Ce(r)}.skalBrukes`,label:v.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[X],isHorizontal:!0,isReadOnly:e||!zt(r,s,i,b,g),radios:[{value:"false",label:y(!1)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(w.DataCell,{children:n&&e&&zt(r,s,i,b,g)&&u.jsx(gt,{})})]},Ce(r))},jb=(e,n,r)=>{const t=Rn(r)?"":I(r).format(re);return e.some(s=>s.arbeidsforholdType&&s.arbeidsforholdType===mr.VENTELØNN_VARTPENGER)?u.jsx(m,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},hb=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],Ab=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:k,fieldId:p})=>u.jsxs(u.Fragment,{children:[u.jsx(F,{size:"small",children:jb(r,s,l)}),u.jsxs(w,{size:"small",className:Xr.table,children:[u.jsx(w.Header,{children:u.jsxs(w.Row,{children:[hb().map(v=>u.jsx(w.HeaderCell,{scope:"col",children:u.jsx(F,{size:"small",as:"span",children:u.jsx(m,{id:v})})},v)),u.jsx(w.HeaderCell,{})]})}),u.jsx(w.Body,{children:r.map(v=>u.jsx(cb,{aktivitet:v,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:k,fieldId:p},`${v.arbeidsgiverIdent}-${v.fom}-${v.tom}`))})]})]}),Ei=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=Ce(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,Ib=(e,n)=>{let r=0;for(;r<e.length&&I(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},fd=(e,n,r)=>{const t=e.find(({tom:s})=>s===r);if(t===void 0){const s={tom:r,aktiviteter:[n]},i=Ib(e,r);e.splice(i,0,s)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},Tb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!I(t.tom).isValid()))},Rb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],s=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!s)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:i})=>i).forEach(i=>{if(!i)throw new Error("Må ha aktivitet i form values her!");const l={...i},o=e.aktiviteterValues?e.aktiviteterValues[Ce(i)].tom:void 0;o&&o!==l.tom&&(l.tom=o),I(o).isSame(I(s).subtract(1,"days"))||I(o).isAfter(I(s).subtract(1,"days"))?fd(t,l,s):fd(t,l,I(o).add(1,"days").format("YYYY-MM-DD"))}),t},fl=(e,n,r)=>{const t=n&&!Tb(n)?Rb(n):e;return r?t:!n||Ei(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},vk=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let s=0;s<t.length;s+=1){const i=e.aktiviteterValues?e.aktiviteterValues[Ce(t[s])]:void 0;if((i==null?void 0:i.skalBrukes)==="true")return n[r].tom}}},Eb=e=>!e||Rn(e)?"":I(e).format(re),pr=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:s,harAvklaringsbehov:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:g})=>{const k=fl(t,r,s),p=vk(r,k);return u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:Eb(p)}}),u.jsx(j,{twentyPx:!0}),k.map(v=>u.jsx(Ab,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:v.aktiviteter||[],erOverstyrt:s,harAvklaringsbehov:i,kodeverkSamling:l,tomDatoForAktivitetGruppe:v.tom,valgtSkjæringstidspunkt:p,ingenAktiviterErBrukt:p===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:g},v.tom)),u.jsx(j,{thirtyTwoPx:!0})]})};pr.harIngenAktiviteter=(e,n,r)=>{const t=fl(n,e,r);return Ei(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!Ei(t[1],e):!0};const Nb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n));pr.transformValues=(e,n,r)=>{const t=fl(n,e,r),s=vk(e,t);if(!s)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(i=>mb(e,i.aktiviteter||[],s,i.tom))};const xb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};pr.buildInitialValues=(e,n,r,t,s)=>{if(!e||e.length===0)return{};let i={};const l=xb(e);return e.forEach(o=>{i={...i,...pb(o.aktiviteter||[],n,r,t,Nb(l,o.tom),s)}}),i};const qb="_avsnittOverskrift_h44z2_1",Sb={avsnittOverskrift:qb},{AVKLAR_AKTIVITETER:Jt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:fk}=he,yl="begrunnelseAvklareAktiviteter",yk="manuellOverstyringBeregningAktiviteter",Pb=(e,n,r,t,s)=>{const i=Qe(Jt,e),l=Qe(fk,e),o=pk(e);let g;return n&&n.aktiviteterTomDatoMapping&&(g=pr.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,i,t)),{[yk]:l,periode:s.periode,erTilVurdering:s.vurderesIBehandlingen&&!s.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:g,...wr.buildInitialValues(o==null?void 0:o.begrunnelse,yl)}},yd=e=>{const n=e[yk],r=sb(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:pr.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[yl]}:null},Fb=(e,n,r,t,s)=>{if(!(r.length<1)&&pr.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return s.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},Bb=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:i,submittable:l,fieldId:o,updateOverstyring:g,submitDisabled:k})=>{var p,v;const b=J(),{resetField:y,watch:c,getValues:x,formState:{isSubmitting:A,errors:N,dirtyFields:R}}=Ie(),S=Object.keys(R).length>0,q=Qe(fk,n),P=!!x(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[D,_]=h.useState(q||P),H=pk(n),C=!!((v=(p=N.avklarAktiviteterForm)==null?void 0:p[o])!=null&&v.begrunnelseAvklareAktiviteter),L=z=>{z?_(!D):!z&&D&&_(!1),y(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),y(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),g(o,z)},M=n.filter(z=>z.definisjon===he.AVKLAR_AKTIVITETER||z.definisjon===he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(z=>Wy(z.status)).length===0,V=Fb(c,o,e.aktiviteterTomDatoMapping||[],P,b),U=`vurderAktiviteterSkjema.${o}`,ne=bs(U,V);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:u.jsxs(u.Fragment,{children:[Qe(Jt,n)&&!M&&u.jsxs(Ee,{size:"small",variant:"warning",children:[u.jsx(se,{size:"xsmall",level:"3",children:u.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),u.jsx(m,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"}),u.jsx(j,{fourPx:!0}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]}),u.jsx(j,{thirtyTwoPx:!0}),u.jsxs(te,{gap:"4",children:[u.jsx(F,{size:"small",className:Sb.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:u.jsx(m,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||q)&&u.jsx(Wi,{onClick:()=>L(!0),erOverstyrt:D})]}),D&&u.jsx(F,{size:"small",children:u.jsx(m,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&u.jsxs("div",{children:[u.jsx(pr,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:M,erOverstyrt:D,kodeverkSamling:s,values:c(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:Qe(Jt,n),arbeidsgiverOpplysningerPerId:i,fieldId:o}),ne&&u.jsx(ot,{children:ne})]}),u.jsx(j,{twentyPx:!0}),ab(n,D)&&u.jsxs(u.Fragment,{children:[u.jsx(wr,{name:`avklarAktiviteterForm.${o}.${yl}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(H!=null&&H.begrunnelse)}),u.jsx(On,{ident:H==null?void 0:H.vurdertAv,date:H==null?void 0:H.vurdertTidspunkt}),(Qe(Jt,n)||D)&&u.jsxs(u.Fragment,{children:[u.jsx(j,{twentyPx:!0}),u.jsxs(te,{gap:"4",children:[u.jsx(Vu,{text:b.formatMessage({id:D?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:ib(l,!0,C),isDirty:S,isSubmitting:k,isReadOnly:t||M&&!S,hasErrors:C}),!!R&&S&&u.jsx(ae,{variant:"secondary",loading:A,disabled:A,onClick:()=>L(!1),size:"small",children:u.jsx(m,{id:"AvklareAktiviteter.Avbryt"})})]})]})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:bk,AVKLAR_AKTIVITETER:ck}=he,bd="manuellOverstyringBeregningAktiviteter",_b=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},Ob=(e,n)=>!Qe(ck,e)&&!Qe(bk,e)&&!n,Db=e=>{const n=e[lt],r=n.filter(i=>i[bd]).map(yd).filter(i=>i),t=n.filter(i=>!i[bd]).map(yd).filter(i=>i),s=[];if(r.length>0){const i=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:bk,begrunnelse:i,grunnlag:r};s.push(l)}if(t.length>0){const i=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:ck,begrunnelse:i,grunnlag:t};s.push(l)}return s},wb=(e,n,r,t)=>({[lt]:e.map(s=>{var i;return Pb(s.avklaringsbehov,(i=s.faktaOmBeregning)==null?void 0:i.avklarAktiviteter,n,r,_b(t,s.vilkårsperiodeFom))})}),Vb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},Mb=({harAndreAvklaringsbehovIPanel:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:i,submitCallback:l,beregningsgrunnlag:o,aktivtBeregningsgrunnlagIndeks:g,vilkår:k,setFormData:p,formData:v,setAvklarAktiviteterErEndret:b})=>{const y=ze({defaultValues:v||wb(o,t,s,k)}),{formState:{dirtyFields:c,errors:x,isSubmitted:A},control:N,getValues:R,trigger:S,setValue:q}=y;h.useEffect(()=>{var M;(M=c.avklarAktiviteterForm)!=null&&M.some(V=>!!V)?b(!0):b(!1)},[c]),h.useEffect(()=>{var M;A&&(M=c.avklarAktiviteterForm)!=null&&M[g]&&S()},[g]);const P=o.flatMap(M=>M.avklaringsbehov),{fields:D}=tn({name:lt,control:N}),[_,H]=h.useState(!1),C=(M,V)=>{const U=R(`avklarAktiviteterForm.${M}`);q(`${lt}.${M}`,{...U,manuellOverstyringBeregningAktiviteter:V},{shouldDirty:!0})};if(Ob(P,n))return null;const L=M=>{Object.keys(x).length===0&&(H(!0),l(Db(M)))};return u.jsxs(u.Fragment,{children:[u.jsx(Je,{formMethods:y,onSubmit:M=>L(M),setDataOnUnmount:p,children:D.map((M,V)=>g===V&&u.jsx(Bb,{aktivtBeregningsgrunnlagIndeks:g,fieldId:V,avklarAktiviteter:Vb(o,V),avklaringsbehovListe:o[V].avklaringsbehov,erOverstyrer:n,readOnly:r,submittable:i,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,updateOverstyring:C,submitDisabled:_},M.id))}),e&&u.jsx(j,{twentyPx:!0})]})},xe=Y.createContext(0),jk=Y.createContext(0),fn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:s}=Ie();return h.useEffect(()=>()=>s(e),[]),u.jsx(ce,{name:e,htmlSize:8,parse:De,readOnly:n,isEdited:r,validate:n?[]:[X,sn(178956970)],label:t})};fn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(s=>s.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const Gb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Qr=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:s})=>{var i,l;const{getValues:o}=Ie(),g=Y.useContext(xe),k=o(`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues`);if(!k)return null;const p=(i=e.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent,v=Gb(k,p),b=`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues.${v}.fastsattBelop`,y=p?(l=s[p])==null?void 0:l.navn:void 0;return u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),u.jsx(fn,{name:b,readOnly:n,isAksjonspunktClosed:r,label:t||u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${y} (${p})`}})})]})};Qr.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===ge.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const s={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(s)}),n};const pn=e=>e==="true",Lb="_navetLink_15r5n_1",Kb="_flexColumn12_15r5n_12",$b="_flexColumn9_15r5n_15",Ub="_flexColumn3_15r5n_18",Xn={navetLink:Lb,flexColumn12:Kb,flexColumn9:$b,flexColumn3:Ub},Ze="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Yb}=he,mt=({readOnly:e,erOverstyrt:n})=>{const r=Y.useContext(xe),t=J(),s=e||n;return u.jsx("div",{children:u.jsxs(B,{children:[u.jsx(T,{className:Xn.flexColumn9,children:u.jsx(Ne,{label:u.jsx(m,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${Ze}`,isReadOnly:s,validate:s?[]:[X],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:pn})}),u.jsx(T,{className:Xn.flexColumn3,children:u.jsx("a",{className:Xn.navetLink,href:gk,target:"_blank",rel:"noopener noreferrer",children:u.jsx(m,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})})};mt.buildInitialValues=(e,n,r,t)=>r.includes(O.VURDER_BESTEBEREGNING)||r.includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(s=>s.definisjon===Yb)!==void 0||t?{[Ze]:!1}:{[Ze]:n.skalHaBesteberegning}:{}:{};const cd=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};mt.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[Ze]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:i})=>i!==!0).map(i=>({andelsnr:i.andelsnr,nyAndel:!!i.nyAndel,lagtTilAvSaksbehandler:!!i.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:i.fastsattBelop,inntektskategori:cd(i.inntektskategori)}})),s=r.find(i=>i.nyAndel&&i.aktivitetStatus===ge.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:s?{fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:cd(s.inntektskategori)}}:void 0}}};const Hb=e=>(n,r)=>{var t;const s=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(s.map(o=>o).includes(O.VURDER_BESTEBEREGNING)||s.map(o=>o).includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const i=mt.transformValues(n,e,r),l=[O.VURDER_BESTEBEREGNING];return(t=i.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&i.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...i}},Cb="_fadeinTabell_anh4y_1",zb="_fadein_anh4y_1",Jb="_rightAligned_anh4y_10",Wb={fadeinTabell:Cb,fadein:zb,rightAligned:Jb},xr="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Xb,AVKLAR_AKTIVITETER:Zb}=he,Qb=(e,n)=>n.some(r=>r.definisjon===e),ec=(e,n)=>e&&!n.some(r=>r.definisjon===Zb&&Ts(r.status)),bl=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:s,updateOverstyring:i,erOverstyrer:l,erOverstyrt:o})=>{const[g,k]=h.useState(o),p=Y.useContext(xe),v=h.useMemo(()=>ec(l,s),[l,s]),b=()=>{k(!g),i(p,!g)};return u.jsxs("div",{className:Wb.fadeinTabell,children:[u.jsx(j,{thirtyTwoPx:!0}),r&&u.jsxs(u.Fragment,{children:[u.jsxs(te,{gap:"4",children:[u.jsx(se,{level:"3",size:"xsmall",children:u.jsx(m,{id:"InntektstabellPanel.RapporterteInntekter"})}),(v||g)&&u.jsx(Wi,{onClick:b,erOverstyrt:t||g||Qb(Xb,s)})]}),u.jsx(j,{sixteenPx:!0}),n&&u.jsx(F,{size:"small",children:u.jsx(m,{id:n})}),e,g&&!t&&u.jsx(ae,{size:"small",onClick:b,variant:"secondary",children:u.jsx(m,{id:"InntektstabellPanel.Avbryt"})})]})]})};bl.buildInitialValues=e=>({[xr]:e});const hk=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(s=>s.aktivitetStatus===ge.ARBEIDSTAKER).filter(s=>s.arbeidsforhold&&s.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(s=>s.arbeidsforhold&&s.arbeidsforhold.arbeidsforholdId).length>0:!1},qr="lonnsendringField",pt=({readOnly:e})=>{const n=Y.useContext(xe),r=J();return u.jsxs("div",{children:[u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[X],parse:pn}),u.jsx(j,{twentyPx:!0})]})},nc=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};pt.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(s=>s.aktivitetStatus===ge.ARBEIDSTAKER);return!t||t.length<1||(n[qr]=nc(t)),n};const rc=(e,n,r)=>!!r[qr]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;pt.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(O.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[O.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[qr]}}:{};const Tn="NyoppstartetFLField",vt=({readOnly:e})=>{const n=Y.useContext(xe),r=J();return u.jsxs("div",{children:[u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Tn}`,validate:[X],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn}),u.jsx(j,{twentyPx:!0})]})};vt.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(s=>s.beregningsgrunnlagPrStatusOgAndel).flat().filter(s=>(s==null?void 0:s.aktivitetStatus)===ge.FRILANSER);return t.length>0&&(r[Tn]=(n=t[0])==null?void 0:n.erNyoppstartet),r};vt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[Tn]}};const s=n.find(l=>l.aktivitetStatus===ge.FRILANSER);if(!s)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[Tn]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[Tn]}};s.andelsnr&&t.push(s.andelsnr);const i={fastsettMaanedsinntektFL:{maanedsinntekt:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL,O.FASTSETT_MAANEDSINNTEKT_FL],...i,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[Tn]}}};var jd={},Yr,hd;function an(){if(hd)return Yr;hd=1;var e=function(n){return n&&n.Math===Math&&n};return Yr=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof od=="object"&&od)||e(typeof Yr=="object"&&Yr)||function(){return this}()||Function("return this")(),Yr}var $s={},Ad,Id;function Dn(){return Id||(Id=1,Ad=function(e){try{return!!e()}catch{return!0}}),Ad}var Us,Td;function Un(){if(Td)return Us;Td=1;var e=Dn();return Us=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Us}var Ys,Rd;function cl(){if(Rd)return Ys;Rd=1;var e=Dn();return Ys=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),Ys}var Hs,Ed;function jl(){if(Ed)return Hs;Ed=1;var e=cl(),n=Function.prototype.call;return Hs=e?n.bind(n):function(){return n.apply(n,arguments)},Hs}var Cs={},Nd;function tc(){if(Nd)return Cs;Nd=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Cs.f=r?function(t){var s=n(this,t);return!!s&&s.enumerable}:e,Cs}var xd,qd;function Ak(){return qd||(qd=1,xd=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),xd}var zs,Sd;function ln(){if(Sd)return zs;Sd=1;var e=cl(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return zs=e?t:function(s){return function(){return r.apply(s,arguments)}},zs}var Js,Pd;function Es(){if(Pd)return Js;Pd=1;var e=ln(),n=e({}.toString),r=e("".slice);return Js=function(t){return r(n(t),8,-1)},Js}var Ws,Fd;function sc(){if(Fd)return Ws;Fd=1;var e=ln(),n=Dn(),r=Es(),t=Object,s=e("".split);return Ws=n(function(){return!t("z").propertyIsEnumerable(0)})?function(i){return r(i)==="String"?s(i,""):t(i)}:t,Ws}var Bd,_d;function Ik(){return _d||(_d=1,Bd=function(e){return e==null}),Bd}var Xs,Od;function Tk(){if(Od)return Xs;Od=1;var e=Ik(),n=TypeError;return Xs=function(r){if(e(r))throw new n("Can't call method on "+r);return r},Xs}var Zs,Dd;function Ns(){if(Dd)return Zs;Dd=1;var e=sc(),n=Tk();return Zs=function(r){return e(n(r))},Zs}var Qs,wd;function dn(){if(wd)return Qs;wd=1;var e=typeof document=="object"&&document.all;return Qs=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},Qs}var ea,Vd;function Vr(){if(Vd)return ea;Vd=1;var e=dn();return ea=function(n){return typeof n=="object"?n!==null:e(n)},ea}var na,Md;function xs(){if(Md)return na;Md=1;var e=an(),n=dn(),r=function(t){return n(t)?t:void 0};return na=function(t,s){return arguments.length<2?r(e[t]):e[t]&&e[t][s]},na}var ra,Gd;function ac(){if(Gd)return ra;Gd=1;var e=ln();return ra=e({}.isPrototypeOf),ra}var ta,Ld;function ic(){if(Ld)return ta;Ld=1;var e=an(),n=e.navigator,r=n&&n.userAgent;return ta=r?String(r):"",ta}var sa,Kd;function lc(){if(Kd)return sa;Kd=1;var e=an(),n=ic(),r=e.process,t=e.Deno,s=r&&r.versions||t&&t.version,i=s&&s.v8,l,o;return i&&(l=i.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),sa=o,sa}var aa,$d;function Rk(){if($d)return aa;$d=1;var e=lc(),n=Dn(),r=an(),t=r.String;return aa=!!Object.getOwnPropertySymbols&&!n(function(){var s=Symbol("symbol detection");return!t(s)||!(Object(s)instanceof Symbol)||!Symbol.sham&&e&&e<41}),aa}var ia,Ud;function Ek(){if(Ud)return ia;Ud=1;var e=Rk();return ia=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",ia}var la,Yd;function Nk(){if(Yd)return la;Yd=1;var e=xs(),n=dn(),r=ac(),t=Ek(),s=Object;return la=t?function(i){return typeof i=="symbol"}:function(i){var l=e("Symbol");return n(l)&&r(l.prototype,s(i))},la}var da,Hd;function dc(){if(Hd)return da;Hd=1;var e=String;return da=function(n){try{return e(n)}catch{return"Object"}},da}var oa,Cd;function hl(){if(Cd)return oa;Cd=1;var e=dn(),n=dc(),r=TypeError;return oa=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},oa}var ga,zd;function oc(){if(zd)return ga;zd=1;var e=hl(),n=Ik();return ga=function(r,t){var s=r[t];return n(s)?void 0:e(s)},ga}var ua,Jd;function gc(){if(Jd)return ua;Jd=1;var e=jl(),n=dn(),r=Vr(),t=TypeError;return ua=function(s,i){var l,o;if(i==="string"&&n(l=s.toString)&&!r(o=e(l,s))||n(l=s.valueOf)&&!r(o=e(l,s))||i!=="string"&&n(l=s.toString)&&!r(o=e(l,s)))return o;throw new t("Can't convert object to primitive value")},ua}var ka={exports:{}},Wd,Xd;function uc(){return Xd||(Xd=1,Wd=!1),Wd}var ma,Zd;function Al(){if(Zd)return ma;Zd=1;var e=an(),n=Object.defineProperty;return ma=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},ma}var Qd;function Il(){if(Qd)return ka.exports;Qd=1;var e=uc(),n=an(),r=Al(),t="__core-js_shared__",s=ka.exports=n[t]||r(t,{});return(s.versions||(s.versions=[])).push({version:"3.40.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ka.exports}var pa,eo;function xk(){if(eo)return pa;eo=1;var e=Il();return pa=function(n,r){return e[n]||(e[n]=r||{})},pa}var va,no;function qk(){if(no)return va;no=1;var e=Tk(),n=Object;return va=function(r){return n(e(r))},va}var fa,ro;function vr(){if(ro)return fa;ro=1;var e=ln(),n=qk(),r=e({}.hasOwnProperty);return fa=Object.hasOwn||function(t,s){return r(n(t),s)},fa}var ya,to;function Sk(){if(to)return ya;to=1;var e=ln(),n=0,r=Math.random(),t=e(1 .toString);return ya=function(s){return"Symbol("+(s===void 0?"":s)+")_"+t(++n+r,36)},ya}var ba,so;function ft(){if(so)return ba;so=1;var e=an(),n=xk(),r=vr(),t=Sk(),s=Rk(),i=Ek(),l=e.Symbol,o=n("wks"),g=i?l.for||l:l&&l.withoutSetter||t;return ba=function(k){return r(o,k)||(o[k]=s&&r(l,k)?l[k]:g("Symbol."+k)),o[k]},ba}var ca,ao;function kc(){if(ao)return ca;ao=1;var e=jl(),n=Vr(),r=Nk(),t=oc(),s=gc(),i=ft(),l=TypeError,o=i("toPrimitive");return ca=function(g,k){if(!n(g)||r(g))return g;var p=t(g,o),v;if(p){if(k===void 0&&(k="default"),v=e(p,g,k),!n(v)||r(v))return v;throw new l("Can't convert object to primitive value")}return k===void 0&&(k="number"),s(g,k)},ca}var ja,io;function Pk(){if(io)return ja;io=1;var e=kc(),n=Nk();return ja=function(r){var t=e(r,"string");return n(t)?t:t+""},ja}var ha,lo;function Fk(){if(lo)return ha;lo=1;var e=an(),n=Vr(),r=e.document,t=n(r)&&n(r.createElement);return ha=function(s){return t?r.createElement(s):{}},ha}var Aa,oo;function Bk(){if(oo)return Aa;oo=1;var e=Un(),n=Dn(),r=Fk();return Aa=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),Aa}var go;function _k(){if(go)return $s;go=1;var e=Un(),n=jl(),r=tc(),t=Ak(),s=Ns(),i=Pk(),l=vr(),o=Bk(),g=Object.getOwnPropertyDescriptor;return $s.f=e?g:function(k,p){if(k=s(k),p=i(p),o)try{return g(k,p)}catch{}if(l(k,p))return t(!n(r.f,k,p),k[p])},$s}var Ia={},Ta,uo;function Ok(){if(uo)return Ta;uo=1;var e=Un(),n=Dn();return Ta=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Ta}var Ra,ko;function qs(){if(ko)return Ra;ko=1;var e=Vr(),n=String,r=TypeError;return Ra=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},Ra}var mo;function yt(){if(mo)return Ia;mo=1;var e=Un(),n=Bk(),r=Ok(),t=qs(),s=Pk(),i=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,g="enumerable",k="configurable",p="writable";return Ia.f=e?r?function(v,b,y){if(t(v),b=s(b),t(y),typeof v=="function"&&b==="prototype"&&"value"in y&&p in y&&!y[p]){var c=o(v,b);c&&c[p]&&(v[b]=y.value,y={configurable:k in y?y[k]:c[k],enumerable:g in y?y[g]:c[g],writable:!1})}return l(v,b,y)}:l:function(v,b,y){if(t(v),b=s(b),t(y),n)try{return l(v,b,y)}catch{}if("get"in y||"set"in y)throw new i("Accessors not supported");return"value"in y&&(v[b]=y.value),v},Ia}var Ea,po;function Dk(){if(po)return Ea;po=1;var e=Un(),n=yt(),r=Ak();return Ea=e?function(t,s,i){return n.f(t,s,r(1,i))}:function(t,s,i){return t[s]=i,t},Ea}var Na={exports:{}},xa,vo;function mc(){if(vo)return xa;vo=1;var e=Un(),n=vr(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,s=n(r,"name"),i=s&&(function(){}).name==="something",l=s&&(!e||e&&t(r,"name").configurable);return xa={EXISTS:s,PROPER:i,CONFIGURABLE:l},xa}var qa,fo;function wk(){if(fo)return qa;fo=1;var e=ln(),n=dn(),r=Il(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(s){return t(s)}),qa=r.inspectSource,qa}var Sa,yo;function pc(){if(yo)return Sa;yo=1;var e=an(),n=dn(),r=e.WeakMap;return Sa=n(r)&&/native code/.test(String(r)),Sa}var Pa,bo;function Vk(){if(bo)return Pa;bo=1;var e=xk(),n=Sk(),r=e("keys");return Pa=function(t){return r[t]||(r[t]=n(t))},Pa}var co,jo;function Tl(){return jo||(jo=1,co={}),co}var Fa,ho;function vc(){if(ho)return Fa;ho=1;var e=pc(),n=an(),r=Vr(),t=Dk(),s=vr(),i=Il(),l=Vk(),o=Tl(),g="Object already initialized",k=n.TypeError,p=n.WeakMap,v,b,y,c=function(R){return y(R)?b(R):v(R,{})},x=function(R){return function(S){var q;if(!r(S)||(q=b(S)).type!==R)throw new k("Incompatible receiver, "+R+" required");return q}};if(e||i.state){var A=i.state||(i.state=new p);A.get=A.get,A.has=A.has,A.set=A.set,v=function(R,S){if(A.has(R))throw new k(g);return S.facade=R,A.set(R,S),S},b=function(R){return A.get(R)||{}},y=function(R){return A.has(R)}}else{var N=l("state");o[N]=!0,v=function(R,S){if(s(R,N))throw new k(g);return S.facade=R,t(R,N,S),S},b=function(R){return s(R,N)?R[N]:{}},y=function(R){return s(R,N)}}return Fa={set:v,get:b,has:y,enforce:c,getterFor:x},Fa}var Ao;function fc(){if(Ao)return Na.exports;Ao=1;var e=ln(),n=Dn(),r=dn(),t=vr(),s=Un(),i=mc().CONFIGURABLE,l=wk(),o=vc(),g=o.enforce,k=o.get,p=String,v=Object.defineProperty,b=e("".slice),y=e("".replace),c=e([].join),x=s&&!n(function(){return v(function(){},"length",{value:8}).length!==8}),A=String(String).split("String"),N=Na.exports=function(R,S,q){b(p(S),0,7)==="Symbol("&&(S="["+y(p(S),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),q&&q.getter&&(S="get "+S),q&&q.setter&&(S="set "+S),(!t(R,"name")||i&&R.name!==S)&&(s?v(R,"name",{value:S,configurable:!0}):R.name=S),x&&q&&t(q,"arity")&&R.length!==q.arity&&v(R,"length",{value:q.arity});try{q&&t(q,"constructor")&&q.constructor?s&&v(R,"prototype",{writable:!1}):R.prototype&&(R.prototype=void 0)}catch{}var P=g(R);return t(P,"source")||(P.source=c(A,typeof S=="string"?S:"")),R};return Function.prototype.toString=N(function(){return r(this)&&k(this).source||l(this)},"toString"),Na.exports}var Ba,Io;function yc(){if(Io)return Ba;Io=1;var e=dn(),n=yt(),r=fc(),t=Al();return Ba=function(s,i,l,o){o||(o={});var g=o.enumerable,k=o.name!==void 0?o.name:i;if(e(l)&&r(l,k,o),o.global)g?s[i]=l:t(i,l);else{try{o.unsafe?s[i]&&(g=!0):delete s[i]}catch{}g?s[i]=l:n.f(s,i,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return s},Ba}var _a={},Oa,To;function bc(){if(To)return Oa;To=1;var e=Math.ceil,n=Math.floor;return Oa=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},Oa}var Da,Ro;function Mk(){if(Ro)return Da;Ro=1;var e=bc();return Da=function(n){var r=+n;return r!==r||r===0?0:e(r)},Da}var wa,Eo;function cc(){if(Eo)return wa;Eo=1;var e=Mk(),n=Math.max,r=Math.min;return wa=function(t,s){var i=e(t);return i<0?n(i+s,0):r(i,s)},wa}var Va,No;function jc(){if(No)return Va;No=1;var e=Mk(),n=Math.min;return Va=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},Va}var Ma,xo;function Rl(){if(xo)return Ma;xo=1;var e=jc();return Ma=function(n){return e(n.length)},Ma}var Ga,qo;function hc(){if(qo)return Ga;qo=1;var e=Ns(),n=cc(),r=Rl(),t=function(s){return function(i,l,o){var g=e(i),k=r(g);if(k===0)return!s&&-1;var p=n(o,k),v;if(s&&l!==l){for(;k>p;)if(v=g[p++],v!==v)return!0}else for(;k>p;p++)if((s||p in g)&&g[p]===l)return s||p||0;return!s&&-1}};return Ga={includes:t(!0),indexOf:t(!1)},Ga}var La,So;function Gk(){if(So)return La;So=1;var e=ln(),n=vr(),r=Ns(),t=hc().indexOf,s=Tl(),i=e([].push);return La=function(l,o){var g=r(l),k=0,p=[],v;for(v in g)!n(s,v)&&n(g,v)&&i(p,v);for(;o.length>k;)n(g,v=o[k++])&&(~t(p,v)||i(p,v));return p},La}var Po,Fo;function El(){return Fo||(Fo=1,Po=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Po}var Bo;function Ac(){if(Bo)return _a;Bo=1;var e=Gk(),n=El(),r=n.concat("length","prototype");return _a.f=Object.getOwnPropertyNames||function(t){return e(t,r)},_a}var _o={},Oo;function Ic(){return Oo||(Oo=1,_o.f=Object.getOwnPropertySymbols),_o}var Ka,Do;function Tc(){if(Do)return Ka;Do=1;var e=xs(),n=ln(),r=Ac(),t=Ic(),s=qs(),i=n([].concat);return Ka=e("Reflect","ownKeys")||function(l){var o=r.f(s(l)),g=t.f;return g?i(o,g(l)):o},Ka}var $a,wo;function Rc(){if(wo)return $a;wo=1;var e=vr(),n=Tc(),r=_k(),t=yt();return $a=function(s,i,l){for(var o=n(i),g=t.f,k=r.f,p=0;p<o.length;p++){var v=o[p];!e(s,v)&&!(l&&e(l,v))&&g(s,v,k(i,v))}},$a}var Ua,Vo;function Ec(){if(Vo)return Ua;Vo=1;var e=Dn(),n=dn(),r=/#|\.prototype\./,t=function(g,k){var p=i[s(g)];return p===o?!0:p===l?!1:n(k)?e(k):!!k},s=t.normalize=function(g){return String(g).replace(r,".").toLowerCase()},i=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return Ua=t,Ua}var Ya,Mo;function Nc(){if(Mo)return Ya;Mo=1;var e=an(),n=_k().f,r=Dk(),t=yc(),s=Al(),i=Rc(),l=Ec();return Ya=function(o,g){var k=o.target,p=o.global,v=o.stat,b,y,c,x,A,N;if(p?y=e:v?y=e[k]||s(k,{}):y=e[k]&&e[k].prototype,y)for(c in g){if(A=g[c],o.dontCallGetSet?(N=n(y,c),x=N&&N.value):x=y[c],b=l(p?c:k+(v?".":"#")+c,o.forced),!b&&x!==void 0){if(typeof A==typeof x)continue;i(A,x)}(o.sham||x&&x.sham)&&r(A,"sham",!0),t(y,c,A,o)}},Ya}var Ha,Go;function Lk(){if(Go)return Ha;Go=1;var e=Es();return Ha=Array.isArray||function(n){return e(n)==="Array"},Ha}var Ca,Lo;function xc(){if(Lo)return Ca;Lo=1;var e=TypeError,n=9007199254740991;return Ca=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Ca}var za,Ko;function qc(){if(Ko)return za;Ko=1;var e=Es(),n=ln();return za=function(r){if(e(r)==="Function")return n(r)},za}var Ja,$o;function Sc(){if($o)return Ja;$o=1;var e=qc(),n=hl(),r=cl(),t=e(e.bind);return Ja=function(s,i){return n(s),i===void 0?s:r?t(s,i):function(){return s.apply(i,arguments)}},Ja}var Wa,Uo;function Pc(){if(Uo)return Wa;Uo=1;var e=Lk(),n=Rl(),r=xc(),t=Sc(),s=function(i,l,o,g,k,p,v,b){for(var y=k,c=0,x=v?t(v,b):!1,A,N;c<g;)c in o&&(A=x?x(o[c],c,l):o[c],p>0&&e(A)?(N=n(A),y=s(i,l,A,N,y,p-1)-1):(r(y+1),i[y]=A),y++),c++;return y};return Wa=s,Wa}var Xa,Yo;function Fc(){if(Yo)return Xa;Yo=1;var e=ft(),n=e("toStringTag"),r={};return r[n]="z",Xa=String(r)==="[object z]",Xa}var Za,Ho;function Bc(){if(Ho)return Za;Ho=1;var e=Fc(),n=dn(),r=Es(),t=ft(),s=t("toStringTag"),i=Object,l=r(function(){return arguments}())==="Arguments",o=function(g,k){try{return g[k]}catch{}};return Za=e?r:function(g){var k,p,v;return g===void 0?"Undefined":g===null?"Null":typeof(p=o(k=i(g),s))=="string"?p:l?r(k):(v=r(k))==="Object"&&n(k.callee)?"Arguments":v},Za}var Qa,Co;function _c(){if(Co)return Qa;Co=1;var e=ln(),n=Dn(),r=dn(),t=Bc(),s=xs(),i=wk(),l=function(){},o=s("Reflect","construct"),g=/^\s*(?:class|function)\b/,k=e(g.exec),p=!g.test(l),v=function(y){if(!r(y))return!1;try{return o(l,[],y),!0}catch{return!1}},b=function(y){if(!r(y))return!1;switch(t(y)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!k(g,i(y))}catch{return!0}};return b.sham=!0,Qa=!o||n(function(){var y;return v(v.call)||!v(Object)||!v(function(){y=!0})||y})?b:v,Qa}var ei,zo;function Oc(){if(zo)return ei;zo=1;var e=Lk(),n=_c(),r=Vr(),t=ft(),s=t("species"),i=Array;return ei=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===i||e(o.prototype))?o=void 0:r(o)&&(o=o[s],o===null&&(o=void 0))),o===void 0?i:o},ei}var ni,Jo;function Dc(){if(Jo)return ni;Jo=1;var e=Oc();return ni=function(n,r){return new(e(n))(r===0?0:r)},ni}var Wo;function wc(){if(Wo)return jd;Wo=1;var e=Nc(),n=Pc(),r=hl(),t=qk(),s=Rl(),i=Dc();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),g=s(o),k;return r(l),k=i(o,0),k.length=n(k,o,o,g,0,1,l,arguments.length>1?arguments[1]:void 0),k}}),jd}var Xo={},ri={},ti,Zo;function Vc(){if(Zo)return ti;Zo=1;var e=Gk(),n=El();return ti=Object.keys||function(r){return e(r,n)},ti}var Qo;function Mc(){if(Qo)return ri;Qo=1;var e=Un(),n=Ok(),r=yt(),t=qs(),s=Ns(),i=Vc();return ri.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var g=s(o),k=i(o),p=k.length,v=0,b;p>v;)r.f(l,b=k[v++],g[b]);return l},ri}var si,eg;function Gc(){if(eg)return si;eg=1;var e=xs();return si=e("document","documentElement"),si}var ai,ng;function Lc(){if(ng)return ai;ng=1;var e=qs(),n=Mc(),r=El(),t=Tl(),s=Gc(),i=Fk(),l=Vk(),o=">",g="<",k="prototype",p="script",v=l("IE_PROTO"),b=function(){},y=function(R){return g+p+o+R+g+"/"+p+o},c=function(R){R.write(y("")),R.close();var S=R.parentWindow.Object;return R=null,S},x=function(){var R=i("iframe"),S="java"+p+":",q;return R.style.display="none",s.appendChild(R),R.src=String(S),q=R.contentWindow.document,q.open(),q.write(y("document.F=Object")),q.close(),q.F},A,N=function(){try{A=new ActiveXObject("htmlfile")}catch{}N=typeof document<"u"?document.domain&&A?c(A):x():c(A);for(var R=r.length;R--;)delete N[k][r[R]];return N()};return t[v]=!0,ai=Object.create||function(R,S){var q;return R!==null?(b[k]=e(R),q=new b,b[k]=null,q[v]=R):q=N(),S===void 0?q:n.f(q,S)},ai}var ii,rg;function Kc(){if(rg)return ii;rg=1;var e=ft(),n=Lc(),r=yt().f,t=e("unscopables"),s=Array.prototype;return s[t]===void 0&&r(s,t,{configurable:!0,value:n(null)}),ii=function(i){s[t][i]=!0},ii}var tg;function $c(){if(tg)return Xo;tg=1;var e=Kc();return e("flatMap"),Xo}var li,sg;function Uc(){if(sg)return li;sg=1;var e=an(),n=ln();return li=function(r,t){return n(e[r].prototype[t])},li}var di,ag;function Yc(){if(ag)return di;ag=1,wc(),$c();var e=Uc();return di=e("Array","flatMap"),di}var oi,ig;function Hc(){if(ig)return oi;ig=1;var e=Yc();return oi=e,oi}var gi,lg;function Cc(){if(lg)return gi;lg=1;var e=Hc();return gi=e,gi}var ui,dg;function zc(){if(dg)return ui;dg=1;var e=Cc();return ui=e,ui}var og,gg;function Jc(){return gg||(gg=1,og=zc()),og}Jc();const Gn="vurderEtterlønnSluttpakke",bt=({readOnly:e})=>{const n=Y.useContext(xe),r=J();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(m,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${Gn}`,validate:[X],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn})})};bt.buildInitialValues=(e,n)=>{var r,t,s;const i={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!Ts(n.status),o=e.beregningsgrunnlagPeriode.flatMap(g=>g.beregningsgrunnlagPrStatusOgAndel).filter(g=>(g==null?void 0:g.arbeidsforhold)&&(g==null?void 0:g.arbeidsforhold.arbeidsforholdType)===mr.ETTERLONN_SLUTTPAKKE);return o.length>0&&(i[Gn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((s=o[0])==null?void 0:s.beregnetPrAar)>0:void 0),i};const Wc=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===mr.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};bt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(O.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Gn]}};const s=Wc(r);if(!s)return{};const i=n.find(o=>o.andelsnr===s);if(!i)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Gn]}};if(i.andelsnr&&t.includes(i.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Gn]}};i.andelsnr&&t.push(i.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:i.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE,O.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Gn]}}};const Kk="mottarYtelseField",Xc="_frilans",fr=e=>Kk+e.andelsnr,ir=()=>Kk+Xc,Zc=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[fr(r)]).find(r=>r)!==void 0,$k=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[ir()]:void 0,Uk=(e,n,r)=>{var t;if(!n)return{};const s={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[fr(l)]:void 0;l.andelsnr&&(s[l.andelsnr]=o)}),!r)return s;const i=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===ge.FRILANSER);return i&&(s[i.andelsnr]=$k(e)),s},Yk="inntektFieldArray",Qc=e=>e.inntektskategori&&e.inntektskategori!==Rs.UDEFINERT?e.inntektskategori:"",ej=(e,n,r)=>{var t,s,i,l,o;const g=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return g?Kn(g,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(s=e.arbeidsforhold)!=null&&s.arbeidsforholdType?(i=r[kn.OPPTJENING_AKTIVITET_TYPE].find(k=>{var p;return k.kode===((p=e.arbeidsforhold)==null?void 0:p.arbeidsforholdType)}))==null?void 0:i.navn:(l=r[kn.AKTIVITET_STATUS].find(k=>k.kode===e.aktivitetStatus))==null?void 0:l.navn},Hk=(e,n,r)=>({andel:ej(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Qc(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),nj=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,rj=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,tj=(e,n)=>{const r=nj(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},Ss=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.ARBEIDSTAKER,Ps=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.FRILANSER,Ck=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.DAGPENGER,zk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE,Jk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.MILITAER_ELLER_SIVIL,sj=(e,n)=>n?Ps(e)&&!!n[Tn]:!1,aj=e=>!!e[Ze],ij=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&rj(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[qr],lj=(e,n,r)=>Ss(e)&&ij(n,e,r),dj=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Ps(e),oj=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Ss(e)&&tj(e,n),gj=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const s=Uk(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!s[n.andelsnr]},uj=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===mr.ETTERLONN_SLUTTPAKKE?!!n[Gn]:!1,Wk=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===pl.KUNSTIG))!==void 0},kj=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===O.FASTSETT_BG_KUN_YTELSE)!==void 0,mj=(e,n,r)=>t=>!!(aj(e)||gj(e,t,n,r)||lj(t,e,n)||dj(t,n)||oj(t,n)||Wk(t,r)||hk(t,r,t.arbeidsforholdId)||uj(t,e)),pj=(e,n,r)=>t=>mj(e,n,r)(t)?!0:sj(t,e),En=e=>!!e&&e[xr]===!0,vj=e=>e&&e.some(n=>n.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),Xk=e=>En(e),ug=e=>e.erOverstyrtInntekt||vj(e.avklaringsbehov),Zk=(e,n,r)=>t=>kj(n)||pj(e,n,r)(t),fj=(e,n,r)=>t=>En(e)||Zk(e,n,r)(t),Sr=(e,n)=>r=>n.faktaOmBeregning?fj(e,n.faktaOmBeregning,n)(r):!1,yj=e=>n=>Wk(n,e),bj=e=>yj(e),Ni=(e,n,r)=>({...Hk(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?K(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?K(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?K(e.refusjonskrav):""}),xi=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),ts=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},Yn=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},Nl=e=>{var n;return((n=Yn(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Qn=(e,n)=>n.some(r=>r.definisjon===e),Qk=e=>{const n=e.filter(r=>r.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!Ts(r.status))},cj=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,jj=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:s,aktivitetStatus:i}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(g=>g.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:s}}return kt[t]?{andelsinfo:t,inntektskategori:s}:{andelsinfo:t,inntektskategori:s}}return it[i]?{andelsinfo:it[i],inntektskategori:s}:{andelsinfo:t,inntektskategori:s,arbeidsforholdId:l}},hj=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),Aj=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,em=(e,n,r)=>{const t=e.map(s=>n(s,e)).slice().sort((s,i)=>cj(s,i));for(let s=0;s<t.length-1;s+=1)if(Aj(t[s],t[s+1]))return hj(r)},Ij=(e,n)=>em(e,jj,n),Tj=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),Rj=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:Tj(n),Ej="_row_1hw01_1",Nj="_slettIkon_1hw01_10",xj="_rightAlign_1hw01_13",qj="_rightAlignInput_1hw01_20",Sj="_buttonRow_1hw01_28",Pj="_addPeriode_1hw01_31",Fj="_customLink_1hw01_32",Bj="_removeButton_1hw01_33",_j="_addCircleIcon_1hw01_41",Oj="_imageText_1hw01_42",Dj="_storBredde_1hw01_47",wj="_mediumBredde_1hw01_50",Vj="_flexColumn3_1hw01_53",vn={row:Ej,slettIkon:Nj,rightAlign:xj,rightAlignInput:qj,buttonRow:Sj,addPeriode:Pj,customLink:Fj,removeButton:Bj,addCircleIcon:_j,imageText:Oj,storBredde:Dj,mediumBredde:wj,flexColumn3:Vj},Mj=(e,n)=>{var r;return{andel:(r=n[kn.AKTIVITET_STATUS].find(t=>t.kode===e.filter(s=>s===ge.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},Gj=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),Lj=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?fe(r.fastsattBelop):0}),n>0?K(n):""};function Kj(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const $j=(e,n,r,t,s,i,l)=>e.map((o,g)=>u.jsxs(w.Row,{className:vn.row,children:[u.jsx(w.DataCell,{children:u.jsx(E,{size:"small",children:u.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),u.jsx(w.DataCell,{align:"right",className:vn.rightAlign,children:u.jsx(ce,{name:`${i}.${g}.fastsattBelop`,className:vn.mediumBredde,parse:De,readOnly:r,isEdited:n,validate:r?[]:[X,sn(178956970)],label:s.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${g+1}`}),hideLabel:!0,size:"small"})}),u.jsx(w.DataCell,{align:"right",className:vn.rightAlign,children:u.jsx(cs,{label:s.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${g+1}`}),name:`${i}.${g}.inntektskategori`,className:vn.storBredde,selectValues:Gj(t),readOnly:r,validate:r?[]:[X],hideLabel:!0,size:"small"})}),u.jsx(w.DataCell,{align:"right",className:vn.rightAlign,children:Kj(g,e,r)&&u.jsx(ae,{icon:u.jsx(rr,{"aria-hidden":!0,className:vn.slettIkon}),onClick:()=>l(g),type:"button",variant:"tertiary"})})]},o.id)),Uj=e=>u.jsxs(w.Row,{children:[u.jsx(w.DataCell,{children:u.jsx(F,{as:"p",size:"small",children:u.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),u.jsx(w.DataCell,{align:"right",children:u.jsx(ke,{children:e})}),u.jsx(w.DataCell,{}),u.jsx(w.DataCell,{})]},"bruttoBGSummaryRow"),Yj=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Hj=e=>e[kn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Cj=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},zj=(e,n)=>{const r=e?em(e,Cj,n):void 0;if(r)return r},nm=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var s;const i=J(),{control:l}=Ie(),o=Y.useContext(xe),g=`${yn}.${o}.${e}`,{fields:k,append:p,remove:v}=tn({control:l,name:g}),b=(s=t[kn.AKTIVITET_STATUS])==null?void 0:s.map(q=>q.kode),y=Hj(t),c=Zr({name:g,control:l}),x=c?Lj(c):"0",A=$j(k,r,n,y,i,g,v);A.push(Uj(x));const N=zj(c,i),R=`${g}.skjemagruppe`,S=bs(R,N);return u.jsxs("div",{children:[u.jsxs(w,{size:"small",children:[u.jsx(w.Header,{children:u.jsxs(w.Row,{children:[Yj().map(q=>{const P=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(q);return u.jsx(w.HeaderCell,{scope:"col",align:P?"right":"left",children:u.jsx(F,{size:"small",as:"span",children:u.jsx(m,{id:q})})},q)}),u.jsx(w.HeaderCell,{})]})}),u.jsx(w.Body,{children:A})]}),!n&&u.jsx(B,{className:vn.buttonRow,children:u.jsxs(T,{className:vn.flexColumn3,children:[u.jsx(j,{eightPx:!0}),u.jsx(ae,{icon:u.jsx(el,{"aria-hidden":!0,className:vn.addCircleIcon}),onClick:()=>p(Mj(b,t)),type:"button",variant:"tertiary",size:"small",children:u.jsx(m,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})]})}),u.jsx(j,{eightPx:!0}),S&&u.jsx(ot,{children:S})]})},ss="besteberegningField",ct=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:s})=>{const{getValues:i}=Ie(),l=Y.useContext(xe),o=i(`${yn}.${l}`),g=ss in o?o[ss]:void 0,k=J();return u.jsxs("div",{children:[u.jsx(Ne,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:u.jsx(m,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[X],parse:pn,isHorizontal:!0}),g!=null&&u.jsxs(Bu,{alignOffset:g?0:60,children:[u.jsxs(B,{children:[u.jsx(T,{className:Xn.flexColumn9,children:u.jsx(F,{size:"small",children:u.jsx(m,{id:"KunYtelsePanel.OverskriftBesteberegning"})})}),g&&u.jsx(T,{className:Xn.flexColumn3,children:u.jsx("a",{className:Xn.navetLink,href:gk,target:"_blank",rel:"noopener noreferrer",children:u.jsx(m,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]}),t&&u.jsx(B,{children:u.jsx(T,{className:Xn.flexColumn12,children:u.jsx(nm,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:s})})})]})]})};ct.buildInitialValues=e=>({[ss]:e.erBesteberegning});ct.transformValues=e=>!!e[ss];const Jj="_flexColumn9_csgl6_1",Wj={flexColumn9:Jj},Xj=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>u.jsxs(u.Fragment,{children:[u.jsx(B,{children:u.jsx(T,{className:Wj.flexColumn9,children:u.jsx(F,{size:"medium",children:u.jsx(m,{id:"KunYtelsePanel.RapporterteInntekter"})})})}),u.jsx(j,{eightPx:!0}),u.jsx(nm,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),as="brukersAndelBG",jt=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:s})=>{const{kunYtelse:i}=n,l=i==null?void 0:i.fodendeKvinneMedDP;return u.jsxs("div",{children:[l&&u.jsx(ct,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:as,skalViseInntektstabell:t,kodeverkSamling:s}),!l&&t&&u.jsx(Xj,{readOnly:e,brukersAndelFieldArrayName:as,isAksjonspunktClosed:r,kodeverkSamling:s})]})};jt.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const s=e.andeler.map(l=>{const o=n.find(k=>k.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const g=l.fastsattBelopPrMnd!==null?K(l.fastsattBelopPrMnd):"";return{...Hk(o,r,t),fastsattBelop:g??""}}),i={[as]:s};return e.fodendeKvinneMedDP?{...ct.buildInitialValues(e),...i}:i};jt.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[as].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:fe(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?ct.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:is,VURDER_BESTEBEREGNING:Zj}=O,Qj=(e,n,r,t,s,i,l)=>{n.includes(is)&&e.push(u.jsxs(Y.Fragment,{children:[u.jsx(jt,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:s,kodeverkSamling:i}),l()]},"FASTSETT_BG_KUN_YTELSE"))},eh=(e,n,r)=>{if(r.includes(is)&&n){const t=jt.transformValues(e,n),s=[is];return n!=null&&n.fodendeKvinneMedDP&&s.push(Zj),{faktaOmBeregningTilfeller:s,...t}}return{}},nh=(e,n,r,t,s)=>n&&n.includes(is)?jt.buildInitialValues(e,r,t,s):{},xl="erSNNyIArbeidslivet",ht=({readOnly:e})=>{const n=Y.useContext(xe),r=J();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${xl}`,validate:[X],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:pn})})};ht.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(s=>s.beregningsgrunnlagPrStatusOgAndel).flat().filter(s=>(s==null?void 0:s.aktivitetStatus)===ge.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[xl]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};ht.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[xl]}});const rh="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",ql=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",kg=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return Kn(r,e.eksternArbeidsforholdId)},Kt=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},At=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,s=Y.useContext(xe),i=J();return!t||t.length===0?null:u.jsx("div",{children:t.map((l,o)=>u.jsxs("div",{children:[o>0&&u.jsx(j,{twentyPx:!0}),u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:rh,values:{navn:kg(Kt(l.arbeidsforhold),r),fom:I(Kt(l.arbeidsforhold).startdato).format(re),tom:I(Kt(l.arbeidsforhold).opphoersdato).format(re)}}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(m,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${s}.tidsbegrensetValues.${ql(l)}`,isReadOnly:e,radios:[{value:"true",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[X],parse:pn})]},`fastsettTidsbegrensedeForhold_${kg(Kt(l.arbeidsforhold),r)}`))})};At.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[ql(r)]=r.erTidsbegrensetArbeidsforhold)}),n};At.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const s=ql(t),i=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[s];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:i,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const Sl="vurderMilitær",It=({readOnly:e})=>{const n=Y.useContext(xe),r=J();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Sl}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[X],parse:pn})})};It.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[Sl]=e.vurderMilitaer.harMilitaer),n};It.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[Sl]}});const th=[O.VURDER_NYOPPSTARTET_FL,O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],sh=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",ah=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let i;return s?i=Kn(s,e.eksternArbeidsforholdId):i=e.arbeidsforholdType?(t=n[kn.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",u.jsx(m,{id:sh(),values:{arbeid:i}})},ih=(e,n,r,t,s,i)=>u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[e.arbeidsforhold&&ah(e.arbeidsforhold,r,t),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${fr(e)}`,isReadOnly:n,radios:[{value:"true",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn,validate:n?[]:[X]})}),lh=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",dh=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",oh=e=>e.some(n=>th.includes(n))?lh():dh(),ls=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),Tt=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s})=>{const i=Y.useContext(xe),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,g=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],k=J();return u.jsxs("div",{children:[o&&!ls(r)&&u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:oh(r)}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${i}.vurderMottarYtelseValues.${ir()}`,isReadOnly:e,radios:[{value:"true",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:pn,validate:e?[]:[X]})}),g.map((p,v)=>u.jsxs(Y.Fragment,{children:[v>0&&u.jsx(j,{twentyPx:!0}),ih(p,e,t,s,i,k)]},fr(p))),ls(r)&&g.length>0&&u.jsx(j,{thirtyTwoPx:!0})]})},gh=(e,n,r,t,s,i)=>{var l,o;if(n===null)return{};if(Zc(e,r.vurderMottarYtelse)){const g=[],k=Uk(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(p=>{var v;if(p.andelsnr&&k[p.andelsnr]&&!s.includes(p.andelsnr)){const b=(v=n.find(y=>y.andelsnr===p.andelsnr))==null?void 0:v.fastsattBelop;(b||b===0)&&(g.push({andelsnr:p.andelsnr,fastsattBeløp:fe(b)}),s.push(p.andelsnr))}}),g.length>0?(i.push(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:g}}):{}}return{}},uh=(e,n,r,t,s)=>{var i;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[ir()]){const l=(i=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:i.find(o=>o.aktivitetStatus===ge.FRILANSER);if(l&&!t.includes(l.andelsnr)&&$k(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),s.push(O.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:fe(o.fastsattBelop)}}}return{}}return{}},kh=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},mh=(e,n,r)=>{var t;const s=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(O.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[ir()],arbeidstakerUtenIMMottarYtelse:s.map(i=>({andelsnr:kh(i.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[fr(i)]}))}}};Tt.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||ls(n))&&(r[ir()]=ls(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(s=>{r[fr(s)]=s.mottarYtelse}),r};Tt.transformValues=(e,n,r,t,s)=>{const i=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_MOTTAR_YTELSE)?{...mh(e,r,i),...gh(e,n,r,t,s,i),...uh(e,n,t,s,i),faktaOmBeregningTilfeller:i}:{}};const ph="_aksjonspunktBoks_tufis_1",vh={aksjonspunktBoks:ph},fh=({children:e})=>u.jsx("div",{className:vh.aksjonspunktBoks,children:e}),yh="_slettIkon_1sqjy_1",bh="_rightAlign_1sqjy_4",ch="_rightAlignInput_1sqjy_7",jh="_buttonRow_1sqjy_22",hh="_addPeriode_1sqjy_25",Ah="_customLink_1sqjy_26",Ih="_removeButton_1sqjy_27",Th="_addCircleIcon_1sqjy_30",Rh="_imageText_1sqjy_31",Eh="_readOnlyContainer_1sqjy_36",Nh="_readOnlyContent_1sqjy_39",xh="_storBredde_1sqjy_44",qh="_mediumBredde_1sqjy_47",Sh="_litenBredde_1sqjy_50",Ph="_inntekt_1sqjy_53",Fh="_inntektNew_1sqjy_57",Bh="_inntektOld_1sqjy_61",_h="_inntektOldStrikethrough_1sqjy_64",Oh="_saksbehandlerIcon_1sqjy_72",Ve={slettIkon:yh,rightAlign:bh,rightAlignInput:ch,buttonRow:jh,addPeriode:hh,customLink:Ah,removeButton:Ih,addCircleIcon:Th,imageText:Rh,readOnlyContainer:Eh,readOnlyContent:Nh,storBredde:xh,mediumBredde:qh,litenBredde:Sh,inntekt:Ph,inntektNew:Fh,inntektOld:Bh,inntektOldStrikethrough:_h,saksbehandlerIcon:Oh},Dh=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},wh=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),Vh=e=>e[kn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Mh=()=>u.jsx(ot,{size:"small",children:"Må fastsettes"}),Gh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:s,removeAndel:i,beregningsgrunnlag:l,kodeverkSamling:o,rowName:g,skalFastsetteInntektForAndel:k})=>{var p,v,b,y,c,x,A,N;const R=J(),{getValues:S}=Ie(),q=Y.useContext(xe),P=S(`vurderFaktaBeregningForm.${q}`),D=Ps(e),_=Ck(e),H=zk(e),C=Jk(e),L=Ss(e),M=Sr(P,l)(e),V=D&&M&&((p=P==null?void 0:P.frilansInntektValues)==null?void 0:p.fastsattBelop),U=L&&M&&e.arbeidsgiverId&&!!ts(P==null?void 0:P.arbeidstakerInntektValues,e.arbeidsgiverId),ne=_&&M&&((v=P==null?void 0:P.dagpengerInntektValues)==null?void 0:v.fastsattBelop),z=H&&M&&((b=P==null?void 0:P.selvstendigNæringsdrivendeInntektValues)==null?void 0:b.fastsattBelop),ie=C&&M&&((y=P==null?void 0:P.militærEllerSivilInntektValues)==null?void 0:y.fastsattBelop),Re=D&&M&&!((c=P==null?void 0:P.frilansInntektValues)!=null&&c.fastsattBelop)||L&&M&&e.arbeidsgiverId&&!ts(P==null?void 0:P.arbeidstakerInntektValues,e.arbeidsgiverId)||_&&M&&!((x=P==null?void 0:P.dagpengerInntektValues)!=null&&x.fastsattBelop)||H&&M&&!((A=P==null?void 0:P.selvstendigNæringsdrivendeInntektValues)!=null&&A.fastsattBelop)||C&&M&&!((N=P==null?void 0:P.militærEllerSivilInntektValues)!=null&&N.fastsattBelop),_e=V||U||ne||z||ie,We=En(P),Xe=bj(l)(e),W=Vh(o),Z=e.arbeidsperiodeFom||e.arbeidsperiodeTom,me=()=>U&&P.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${q}.arbeidstakerInntektValues.${xi(P.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:V?`vurderFaktaBeregningForm.${q}.frilansInntektValues.fastsattBelop`:ne?`vurderFaktaBeregningForm.${q}.dagpengerInntektValues.fastsattBelop`:z?`vurderFaktaBeregningForm.${q}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:ie?`vurderFaktaBeregningForm.${q}.militærEllerSivilInntektValues.fastsattBelop`:"";return u.jsxs(w.Row,{children:[u.jsx(w.DataCell,{children:u.jsx(ce,{size:"small",name:`${g}.andel`,className:Ve.storBredde,readOnly:!0})}),u.jsx(w.DataCell,{children:n&&Z&&e.arbeidsperiodeFom&&u.jsx(bv,{value:u.jsx(Ye,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!We&&u.jsx(w.DataCell,{align:"right",children:u.jsxs("div",{className:Ve.inntekt,children:[u.jsx("div",{className:_e?Ve.inntektOldStrikethrough:Ve.inntektOld,children:Re?Mh():u.jsx(ce,{size:"small",name:`${g}.belopReadOnly`,className:Ve.mediumBredde,parse:De,readOnly:!0})}),_e&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:Ve.inntektNew,children:u.jsx(ce,{size:"small",name:me(),className:Ve.mediumBredde,parse:De,readOnly:!0})}),u.jsx(uv,{title:"Endret av saksbehandler",className:Ve.saksbehandlerIcon})]})]})}),We&&u.jsx(w.DataCell,{align:"right",className:Ve.rightAlignInput,children:u.jsx(ce,{size:"small",label:R.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${g}.fastsattBelop`,parse:De,className:Ve.mediumBredde,validate:k(e)?[X,sn(178956970)]:[],hideLabel:!0})}),r&&u.jsx(w.DataCell,{align:"right",children:u.jsx(ce,{size:"small",name:`${g}.refusjonskrav`,className:Ve.litenBredde,readOnly:!0,parse:De})}),u.jsx(w.DataCell,{align:"right",children:u.jsx(cs,{label:R.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${g}.inntektskategori`,className:Ve.storBredde,selectValues:wh(W),validate:s?[]:[X],readOnly:s||!Xe,size:"small",hideLabel:!0})}),t&&u.jsx(w.DataCell,{children:u.jsx(ae,{icon:u.jsx(rr,{"aria-hidden":!0,className:Ve.slettIkon}),onClick:()=>i(),type:"button",variant:"tertiary"})})]})},Lh=(e,n,r)=>{let t=0;return e.forEach(s=>{var i,l,o,g,k,p;let v;if(Sr(n,r)(s)){const b=Ps(s),y=Ss(s),c=Ck(s),x=zk(s),A=Jk(s);s.fastsattBelop&&En(n)?v=s.fastsattBelop:b&&(i=n==null?void 0:n.frilansInntektValues)!=null&&i.fastsattBelop?v=n.frilansInntektValues.fastsattBelop:y&&s.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[xi(n.arbeidstakerInntektValues,s.arbeidsgiverId)])!=null&&o.fastsattBelop?v=n.arbeidstakerInntektValues[xi(n.arbeidstakerInntektValues,s.arbeidsgiverId)].fastsattBelop:c&&(g=n==null?void 0:n.dagpengerInntektValues)!=null&&g.fastsattBelop?v=n.dagpengerInntektValues.fastsattBelop:x&&(k=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&k.fastsattBelop?v=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:A&&(p=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&p.fastsattBelop?v=n.militærEllerSivilInntektValues.fastsattBelop:s.fastsattBelop&&!En(n)?v=0:v=s.fastsattBelop}else v=s.belopReadOnly;t+=v?fe(v):0}),t>0?t:0},Kh=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:s,getValues:i}=Ie(),l=Y.useContext(xe),o=i(`vurderFaktaBeregningForm.${l}`),g=Zr({control:s,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),k=g?Lh(g,o,t):0;return u.jsxs(w.Row,{children:[u.jsx(w.DataCell,{children:u.jsx(F,{as:"p",size:"small",children:u.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&u.jsx(w.DataCell,{}),u.jsx(w.DataCell,{align:"right",children:u.jsx("div",{className:Ve.readOnlyContainer,children:u.jsx(F,{as:"p","data-testid":"sum",className:r?Ve.readOnlyContent:"",size:"small",children:K(k)})})}),n&&u.jsx(w.DataCell,{}),u.jsx(w.DataCell,{})]})},rm=(e,n)=>{var r;const t=(r=e.find(({kode:s})=>s===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},$h=e=>({andel:rm(e,ge.DAGPENGER),aktivitetStatus:ge.DAGPENGER,fastsattBelop:"",inntektskategori:Rs.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),Uh=e=>({andel:rm(e,ge.MILITAER_ELLER_SIVIL),aktivitetStatus:ge.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:Rs.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),Yh=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,qi=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},Si=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},Hh=(e,n)=>()=>{n(e)},Ch=(e,n,r)=>u.jsx(Kh,{readOnly:n,skalVisePeriode:Si(e),skalViseRefusjon:qi(e),beregningsgrunnlag:r},"summaryRow"),zh=(e,n)=>{let r=-1;return e.forEach((t,s)=>{t.aktivitetStatus===n&&(r=s)}),r},tm=(e,n,r,t,s,i,l)=>{const o=zh(e,n);if(o!==-1){const g=e[o];t(g)&&i(o)}o===-1&&r&&l({...s})},mg=e=>e===ge.FRILANSER,pg=e=>e===ge.ARBEIDSTAKER,vg=e=>e===ge.DAGPENGER,fg=e=>e===ge.SELVSTENDIG_NAERINGSDRIVENDE,yg=e=>e===ge.MILITAER_ELLER_SIVIL,Jh=(e,n,r,t,s,i)=>{tm(e,ge.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,$h(r),s,i)},Wh=(e,n,r,t,s,i)=>{tm(e,ge.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,Uh(r),s,i)},Xh=(e,n)=>Rj(e,n)??null,Zh=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?Ij(t,r)||(En(e)?Xh(t,r):null):void 0},Rt=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var s,i;const{getValues:l,control:o,formState:g}=Ie(),{errors:k}=g,p=Y.useContext(xe),v=`vurderFaktaBeregningForm.${p}.inntektFieldArray`,{fields:b,remove:y,append:c,update:x}=tn({control:o,name:v}),A=Zr({control:o,name:`vurderFaktaBeregningForm.${p}`}),N=Zr({control:o,name:`vurderFaktaBeregningForm.${p}.vurderbesteberegningField`}),R=Zr({control:o,name:`vurderFaktaBeregningForm.${p}.vurderMilitær`}),S=J(),q=h.useCallback(()=>Sr(A,r),[A,r]);h.useEffect(()=>{const V=l(`vurderFaktaBeregningForm.${p}.inntektFieldArray`),U=t[kn.AKTIVITET_STATUS];V&&(Wh(V,!!R,U,q,y,c),Jh(V,!!N,U,n,y,c))},[N,R,n]);const P=(V,U)=>{x(V,{...b[V],kanRedigereInntekt:U})};h.useEffect(()=>{b.forEach((V,U)=>{const ne=V.kanRedigereInntekt,z=Sr(A,r)(V);!(!N&&!n&&V.lagtTilAvSaksbehandler)&&ne!==z&&P(U,z)})},[A]);const D=(i=(s=k==null?void 0:k.vurderFaktaBeregningForm)==null?void 0:s[p])==null?void 0:i.inntektFieldArray,_=Zh(A,D,S),H=`${v}.skjemagruppe`,C=bs(H,_??void 0),L=r.faktaOmBeregning;if(!L)return null;const M=b.map((V,U)=>u.jsx(Gh,{field:V,skalVisePeriode:Si(b),skalViseRefusjon:qi(b),skalViseSletteknapp:Yh(U,b,e),readOnly:e,removeAndel:Hh(U,y),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${v}.${U}`,skalFastsetteInntektForAndel:Zk(A,L,r)},V.id));return M.length===0?null:(M.push(Ch(b,e,r)),u.jsxs("div",{children:[u.jsxs(w,{size:"small",children:[u.jsx(w.Header,{children:u.jsx(w.Row,{children:Dh(Si(b),qi(b)).map(V=>{const U=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(V);return u.jsx(w.HeaderCell,{scope:"col",align:U?"right":"left",children:u.jsx(F,{size:"small",as:"span",children:u.jsx(m,{id:V})})},V)})})}),u.jsx(w.Body,{children:M})]}),u.jsx(j,{eightPx:!0}),C&&u.jsx(ot,{children:C})]}))};Rt.transformValues=(e,n,r,t,s,i,l)=>{if(!e)return[];const o=g=>{const k=l&&g.fastsattBelop||mg(g.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||pg(g.aktivitetStatus)&&g.arbeidsgiverId&&ts(r,g.arbeidsgiverId)||vg(g.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||fg(g.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||yg(g.aktivitetStatus)&&(i==null?void 0:i.fastsattBelop)||g.fastsattBelop;return{andelsnr:g.andelsnr,fastsattBelop:fe(k),inntektskategori:g.inntektskategori,nyAndel:g.nyAndel,lagtTilAvSaksbehandler:g.lagtTilAvSaksbehandler,aktivitetStatus:g.aktivitetStatus,arbeidsforholdId:g.arbeidsforholdId,arbeidsgiverId:g.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:g})=>g).filter(({fastsattBelop:g,aktivitetStatus:k,arbeidsgiverId:p})=>g!==null&&g!==""||mg(k)&&(n==null?void 0:n.fastsattBelop)||pg(k)&&p&&ts(r,p)||vg(k)&&(t==null?void 0:t.fastsattBelop)||fg(k)&&(s==null?void 0:s.fastsattBelop)||yg(k)&&(i==null?void 0:i.fastsattBelop)).map(o)};Rt.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>Ni(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:Qh}=O,eA="erKravGyldig_",Pl=e=>eA+e,nA=(e,n,r,t)=>e.map(s=>{const{arbeidsgiverIdent:i}=s,l=r[i],o=l?Kn(l):i,g=J();return u.jsx(Y.Fragment,{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(m,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${Pl(i)}`,validate:[X],isReadOnly:n,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:pn})},i)}),Et=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=Y.useContext(xe),s=n==null?void 0:n.refusjonskravSomKommerForSentListe;return s?u.jsx(u.Fragment,{children:nA(s,e,r,t)}):null};Et.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[Pl(r)]}))};Et.buildInitialValues=(e,n)=>{const r={};return!e.includes(Qh)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:s})=>{r[Pl(t)]=s}),{...r})};const rA=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===pl.KUNSTIG))!==void 0},bg=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},tA=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},sA=(e,n,r,t,s)=>{const i=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!i.map(g=>g).includes(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!i.map(g=>g).includes(O.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(g=>g.andelsnr&&!s.includes(g.andelsnr)).filter(g=>hk(g,t,g.arbeidsforholdId)||rA(g,t)||rc(g,r,e));l.forEach(g=>s.push(bg(g.andelsnr)));const o=l.map(g=>({andelsnr:bg(g.andelsnr),fastsattBeløp:fe(g.fastsattBelop),inntektskategori:tA(g.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},cg=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},aA=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(s=>s).includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const s=e.filter(i=>i.andelsnr&&!r.includes(i.andelsnr)).filter(i=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(i.andelsnr)).map(i=>({andelsnr:cg(i.andelsnr),arbeidsinntekt:i.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const i=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});s.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:cg(i==null?void 0:i.fastsattBelop)})}if(s.forEach(i=>r.push(i.andelsnr)),s.length>0)return{faktaOmBeregningTilfeller:[O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:s}}}return{faktaOmBeregningTilfeller:[]}},ki=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),jg=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:s,kodeverkSamling:i})=>{var l,o,g,k,p,v,b,y,c;const{getValues:x}=Ie(),A=Y.useContext(xe),N=x(`vurderFaktaBeregningForm.${A}`),R=x([`vurderFaktaBeregningForm.${A}.vurderMottarYtelseValues.${ir()}`,`vurderFaktaBeregningForm.${A}.${Tn}`]),S=()=>{var W;if(R.includes(!0))return!0;const Z=x([`vurderFaktaBeregningForm.${A}.${Ze}`]).includes(!0),me=(W=e.faktaOmBeregning)==null?void 0:W.andelerForFaktaOmBeregning.some(Te=>Te.aktivitetStatus===ge.FRILANSER);return Z&&me},q=()=>{var W;const Z=(W=e.faktaOmBeregning)==null?void 0:W.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE);return x([`vurderFaktaBeregningForm.${A}.${Ze}`]).includes(!0)&&Z},P=()=>{var W;const Z=(W=e.faktaOmBeregning)==null?void 0:W.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.MILITAER_ELLER_SIVIL);return x([`vurderFaktaBeregningForm.${A}.${Ze}`]).includes(!0)&&Z},D=x([`vurderFaktaBeregningForm.${A}.${qr}`,`vurderFaktaBeregningForm.${A}.${Ze}`]),_=D.includes(!0),H=x([`vurderFaktaBeregningForm.${A}.${Gn}`]).includes(!0),C=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,L=(k=(g=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:g.arbeidstakerAndelerUtenIM)==null?void 0:k.filter(W=>{const Z=x(`vurderFaktaBeregningForm.${A}.vurderMottarYtelseValues`);return Z==null?void 0:Z[fr(W)]}),M=(v=(p=e.faktaOmBeregning)==null?void 0:p.andelerForFaktaOmBeregning.filter(W=>W.aktivitetStatus===ge.ARBEIDSTAKER))==null?void 0:v.filter(W=>Sr(N,e)(Ni(W,s,i))),V=(b=ki(t)&&_?C==null?void 0:C.filter(W=>!(M!=null&&M.find(Z=>{var me,Te;return((me=Z.arbeidsforhold)==null?void 0:me.arbeidsgiverIdent)===((Te=W.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent)}))):C)==null?void 0:b.filter(W=>Sr(N,e)(Ni({...W,lagtTilAvSaksbehandler:!1},s,i))),U=x(`vurderFaktaBeregningForm.${A}.${Ze}`),ne=`vurderFaktaBeregningForm.${A}.frilansInntektValues.fastsattBelop`,z=`vurderFaktaBeregningForm.${A}.dagpengerInntektValues.fastsattBelop`,ie=`vurderFaktaBeregningForm.${A}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,Re=`vurderFaktaBeregningForm.${A}.militærEllerSivilInntektValues.fastsattBelop`,_e=(c=(y=e==null?void 0:e.faktaOmBeregning)==null?void 0:y.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:c.some(W=>!!W.inntektPrMnd),We=W=>{var Z,me,Te,on;const je=(Z=W.arbeidsforhold)!=null&&Z.arbeidsgiverIdent?(me=s[W.arbeidsforhold.arbeidsgiverIdent])==null?void 0:me.navn:void 0;return x(`vurderFaktaBeregningForm.${A}.${qr}`)&&D.filter(Oe=>Oe===!0).length===1?u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(Te=W.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent})`}}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(on=W.arbeidsforhold)==null?void 0:on.arbeidsgiverIdent})`}})},Xe=()=>{const W=R.filter(Te=>Te===!0).length>1,Z=x([`vurderFaktaBeregningForm.${A}.${Tn}`]).includes(!0),me=x([`vurderFaktaBeregningForm.${A}.${Ze}`]).includes(!0);return ki(t)||W||me?u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):x(`vurderFaktaBeregningForm.${A}.vurderMottarYtelseValues.${ir()}`)?u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):Z?u.jsxs(u.Fragment,{children:[u.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:u.jsx("br",{})}})})]})})]}):null};return u.jsxs(u.Fragment,{children:[ki(t)&&u.jsxs(u.Fragment,{children:[u.jsx(F,{children:u.jsx(m,{id:_e?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:_e?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:u.jsx("br",{})}})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})}),V==null?void 0:V.map(W=>{var Z;return u.jsx(Qr,{arbeidsgiver:W,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:s},(Z=W.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)})]}),S()&&u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),u.jsx(fn,{name:ne,readOnly:n,isAksjonspunktClosed:r,label:Xe()})]}),_||H?M==null?void 0:M.filter(W=>{var Z;return H&&!_?((Z=W.arbeidsforhold)==null?void 0:Z.arbeidsforholdType)===mr.ETTERLONN_SLUTTPAKKE:!0}).map(W=>{var Z;return u.jsx(Qr,{arbeidsgiver:W,readOnly:n,isAksjonspunktClosed:r,label:We(W),arbeidsgiverOpplysningerPerId:s},(Z=W.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)}):L==null?void 0:L.map(W=>{var Z;return u.jsx(Qr,{arbeidsgiver:W,readOnly:n,isAksjonspunktClosed:r,label:We(W),arbeidsgiverOpplysningerPerId:s},(Z=W.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)}),U&&u.jsxs(u.Fragment,{children:[(S()||_)&&u.jsx(j,{thirtyTwoPx:!0}),u.jsx(fn,{name:z,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})})]}),q()&&u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),u.jsx(fn,{name:ie,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})})]}),P()&&u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),u.jsx(fn,{name:Re,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})]})},iA=e=>!e.includes(O.FASTSETT_BG_KUN_YTELSE),lA=(e,n,r,t)=>u.jsx(Rt,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),Nt=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:s,kodeverkSamling:i,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:g,arbeidsgiverOpplysningerPerId:k,vilkarsperiodeSkalVurderesIBehandlingen:p})=>{const{getValues:v}=Ie(),b=Y.useContext(xe),y=v(`vurderFaktaBeregningForm.${b}`),c=h.useMemo(()=>Xk(y),[y,t,s]),x=h.useMemo(()=>iA(r),[r]),A=()=>{const N=[],R=[];let S=!1;const{faktaOmBeregning:q}=t;return!q||(r.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(S=!0,R.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),N.push(u.jsx(Y.Fragment,{children:u.jsx(At,{readOnly:e,faktaOmBeregning:q,arbeidsgiverOpplysningerPerId:k})},O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(S=!0,R.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),N.push(u.jsx(Y.Fragment,{children:u.jsx(ht,{readOnly:e})},O.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(S=!0,R.push(O.VURDER_MILITÆR_SIVILTJENESTE),N.push(u.jsx(Y.Fragment,{children:u.jsx(It,{readOnly:e})},O.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(S=!0,R.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),N.push(u.jsx(Y.Fragment,{children:u.jsx(Et,{readOnly:e,arbeidsgiverOpplysningerPerId:k,faktaOmBeregning:q})},O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(O.VURDER_LONNSENDRING)&&(S=!0,R.push(O.VURDER_LONNSENDRING),N.push(u.jsx(Y.Fragment,{children:u.jsx(pt,{readOnly:e})},O.VURDER_LONNSENDRING))),r.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(S=!0,R.push(O.VURDER_ETTERLONN_SLUTTPAKKE),N.push(u.jsx(Y.Fragment,{children:u.jsx(bt,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},O.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(O.VURDER_NYOPPSTARTET_FL)&&(S=!0,R.push(O.VURDER_NYOPPSTARTET_FL),N.push(u.jsx(Y.Fragment,{children:u.jsx(vt,{readOnly:e})},O.VURDER_NYOPPSTARTET_FL))),r.includes(O.VURDER_BESTEBEREGNING)&&!r.includes(O.FASTSETT_BG_KUN_YTELSE)&&(S=!0,R.push(O.VURDER_BESTEBEREGNING),N.push(u.jsx(Y.Fragment,{children:u.jsx(mt,{readOnly:e,erOverstyrt:c})},O.VURDER_BESTEBEREGNING))),(r.includes(O.VURDER_MOTTAR_YTELSE)||r.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(S=!0,R.push(O.VURDER_MOTTAR_YTELSE),N.push(u.jsx(Y.Fragment,{children:u.jsx(Tt,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:k})},O.VURDER_MOTTAR_YTELSE))),!p)?null:S?e?u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),N.map((P,D)=>u.jsxs(Y.Fragment,{children:[D>0&&u.jsx(j,{thirtyTwoPx:!0}),P]},R[D])),u.jsx(jg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:k,kodeverkSamling:i}),g()]}):u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),u.jsxs(fh,{children:[N.map((P,D)=>u.jsxs(Y.Fragment,{children:[D>0&&u.jsx(j,{thirtyTwoPx:!0}),P]},R[D])),!En(y)&&u.jsx(jg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:k,kodeverkSamling:i}),g()]})]}):En(y)?u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),g()]}):null};return u.jsxs("div",{children:[u.jsx(bl,{tabell:lA(e,t,i,c),skalViseTabell:x,readOnly:e,erOverstyrer:l,avklaringsbehov:s,updateOverstyring:o,erOverstyrt:c},"inntektstabell"),A()]})};Nt.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const s=e.andelerForFaktaOmBeregning;return s.length===0?{}:{[Yk]:Rt.buildInitialValues(s,r,t),...bl.buildInitialValues(n)}};const Cn=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},dA=e=>{if(!e)throw new Error("Forventer andelsnr");return e},oA=(e,n,r,t)=>{if(En(e)){const s=r.filter(i=>!t.includes(dA(i.andelsnr))).filter(i=>i.fastsattBelop!=null).map(i=>({andelsnr:i.andelsnr,nyAndel:!!i.nyAndel,aktivitetStatus:i.aktivitetStatus,lagtTilAvSaksbehandler:i.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:i.fastsattBelop,inntektskategori:i.inntektskategori}}));return{fakta:n,overstyrteAndeler:s}}return{fakta:n}},gA=(e,n,r,t,s)=>{const i=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(i.length>0){l=Cn(l,Hb(t)(e,n));const o=e[Ze]===!0;l=Cn(l,vt.transformValues(e,o?null:n,t,r)),l=Cn(l,bt.transformValues(e,o?null:n,t,r)),l=Cn(l,pt.transformValues(e,t)),l=Cn(l,Tt.transformValues(e,o?null:n,t,s,r)),l=Cn(l,aA(o?null:n,t,r)),l=Cn(l,sA(e,o?null:n,t,s,r))}return l};Nt.transformValues=(e,n)=>r=>{const t=Rt.transformValues(r[Yk],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),s=[],i=gA(r,t,s,e,n);return oA(r,i,t,s)};const{VURDER_FAKTA_FOR_ATFL_SN:uA}=he,hg=e=>{var n;return((n=Yn(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},Ag=e=>{var n;return((n=Yn(e))==null?void 0:n.kunYtelse)||void 0},Ig=e=>{var n;return((n=Yn(e))==null?void 0:n.vurderMottarYtelse)||void 0},kA=e=>{var n;return((n=Yn(e))==null?void 0:n.vurderBesteberegning)||void 0},mA=e=>{var n;return((n=Yn(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},pA=e=>u.jsx(j,{twentyPx:!0}),vA=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>{const{avklaringsbehov:k}=r,p=Nl(r),v=Yn(r),b=[];return Qj(b,p,e,n,v,t,o),b.push(u.jsxs(Y.Fragment,{children:[pA(),u.jsx(Nt,{readOnly:e,isAksjonspunktClosed:n,tilfeller:p,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,avklaringsbehov:k,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:i,vilkarsperiodeSkalVurderesIBehandlingen:g})]},"VurderOgFastsettATFL")),b},fA=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>u.jsx("div",{children:vA({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g}).map(k=>k)}),yA=(e,n)=>r=>eh(r,e.kunYtelse,n),bA=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...ht.transformValues(n)}},cA=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...At.transformValues(r,e)}},jA=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_MILITÆR_SIVILTJENESTE),{...e,...It.transformValues(n)}},hA=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...Et.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},AA=(e,n,r,t,s)=>(i,l)=>{let o={...i};return e.forEach(g=>{g===O.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),g===O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),g===O.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),g===O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=s(o,l))}),o},IA=(e,n,r)=>t=>e.includes(O.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},TA=(e,n,r,t,s)=>{const i=IA(e,yA(t,e),Nt.transformValues(t,s))(n);return{fakta:AA(e,bA,cA(r),jA,hA(t))(i.fakta,n),overstyrteAndeler:i.overstyrteAndeler}},RA=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:s}=e;return TA(n,e,r,t,s)},EA=e=>e?e.find(n=>n.definisjon===uA):void 0,NA=(e,n,r)=>{const t=Nl(e),s=Yn(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:s,kortvarigeArbeidsforhold:hg(e),vurderMottarYtelse:Ig(e),kunYtelse:Ag(e),tidsbegrensetValues:At.buildInitialValues(hg(e)),vurderMottarYtelseValues:Tt.buildInitialValues(Ig(e),t),arbeidstakerInntektValues:Qr.buildInitialValues(s.andelerForFaktaOmBeregning),frilansInntektValues:fn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.FRILANSER),dagpengerInntektValues:fn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.DAGPENGER),selvstendigNæringsdrivendeInntektValues:fn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:fn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.MILITAER_ELLER_SIVIL),vurderRefusjonValues:Et.buildInitialValues(t,mA(e)),...It.buildInitialValues(s),...ht.buildInitialValues(e),...pt.buildInitialValues(e),...vt.buildInitialValues(e),...bt.buildInitialValues(e,EA(e.avklaringsbehov)),...mt.buildInitialValues(e.avklaringsbehov,kA(e),t,ug(e)),...Nt.buildInitialValues(s,ug(e),r,n),...nh(Ag(e),t,s.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:Pi,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Fi}=he,ds=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),xA=(e,n)=>e||ds(Pi,n),Tg=(e,n)=>{const r=e[xr];if(n&&!r&&ds(Fi,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!xA(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...RA(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},qA=(e,n=!0)=>{const r=e[yn],t=r.filter(l=>l.erTilVurdering).filter(l=>l[xr]||ds(Fi,l.avklaringsbehov||[])).map(l=>Tg(l,!0)).filter(l=>l),s=r.filter(l=>l.erTilVurdering).filter(l=>(!l[xr]||n)&&ds(Pi,l.avklaringsbehov||[])).map(l=>Tg(l,!1)).filter(l=>l),i=[];if(t.length>0){const l=t.filter(({begrunnelse:g})=>g!==null).map(({begrunnelse:g})=>g).reduce((g,k)=>g===""?k:`${g} ${k}`,""),o={kode:Fi,begrunnelse:l!==""?l:null,grunnlag:t};i.push(o)}if(s.length>0){const l=s.map(({begrunnelse:g})=>g).reduce((g,k)=>g===""?k:`${g} ${k}`,""),o={kode:Pi,begrunnelse:l,grunnlag:s};i.push(o)}return i},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:sm,VURDER_FAKTA_FOR_ATFL_SN:Bi}=he,am="begrunnelseFaktaTilfeller",SA=(e,n,r)=>e&&n&&!r,PA=(e,n)=>Qn(Bi,n)||Qn(sm,n)?!e:!0,Rg=(e,n)=>{const r=n(`${yn}.${e}`);return Xk(r)},Eg=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},FA=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:i,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:g,submitDisabled:k})=>{const{getValues:p,formState:{errors:v,isDirty:b}}=Ie(),y=Y.useContext(jk),c=Y.useContext(xe),x=c===y,{avklaringsbehov:A}=e,N=A.find(q=>q.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||q.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),R=o.vurderesIBehandlingen,S=()=>u.jsxs(u.Fragment,{children:[u.jsx(j,{thirtyTwoPx:!0}),(Qn(Bi,A)||Qn(sm,A)||Rg(c,p))&&u.jsxs(u.Fragment,{children:[(Qn(Bi,A)||Rg(c,p))&&u.jsxs(u.Fragment,{children:[u.jsx(wr,{name:`${yn}.${c}.${am}`,isSubmittable:i,isReadOnly:r||!R,hasBegrunnelse:!!(N!=null&&N.begrunnelse)}),u.jsx(On,{ident:N==null?void 0:N.vurdertAv,date:N==null?void 0:N.vurdertTidspunkt})]}),u.jsx(j,{twentyPx:!0}),u.jsx(Vu,{isSubmittable:SA(i&&PA(g,A),!0,Eg(c,v))&&!g,isReadOnly:r||!R,isDirty:b,isSubmitting:k,hasErrors:Eg(c,v)})]})]});return u.jsx("div",{style:{display:x?"block":"none"},children:u.jsx(fA,{readOnly:r||!R,isAksjonspunktClosed:Qk(A),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>S(),vilkarsperiodeSkalVurderesIBehandlingen:R})},c)},{VURDER_FAKTA_FOR_ATFL_SN:im,AVKLAR_AKTIVITETER:BA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:os,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:_A}=he,OA=e=>e.some(n=>n.definisjon===os)?e.find(n=>n.definisjon===os&&n.begrunnelse!==null):e.find(n=>n.definisjon===im&&n.begrunnelse!==null),Ng=(e,n)=>n.some(r=>r.definisjon===e&&Ts(r.status)),DA=(e,n,r,t)=>({[yn]:e.map(s=>{var i;const l=t.perioder.find(o=>o.periode.fom===s.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${s.vilkårsperiodeFom}`);return{avklaringsbehov:s.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...wr.buildInitialValues((i=OA(s.avklaringsbehov))==null?void 0:i.begrunnelse,am),...NA(s,n,r)}})}),wA=[im,os],VA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},MA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:g,formData:k,vilkar:p,avklarAktiviteterErEndret:v,skalKunneAvbryteOverstyring:b})=>{const y=v,c=e.flatMap(ne=>ne.avklaringsbehov),x=ze({defaultValues:k||DA(e,t,i,p)}),{control:A,formState:N,trigger:R,getValues:S,watch:q}=x,{fields:P,update:D}=tn({name:yn,control:A}),{errors:_,isSubmitted:H}=N,[C,L]=h.useState(!1),M=q(yn);h.useEffect(()=>{H&&R()},[JSON.stringify(M)]);const V=(ne,z)=>{const ie=S(`${yn}.${ne}`);D(ne,{...ie,[xr]:z})},U=ne=>{Object.keys(_).length===0?(L(!0),o(qA(ne,b))):console.error(_)};return Ng(BA,c)||Ng(_A,c)?null:u.jsx(jk.Provider,{value:l,children:u.jsx(Je,{formMethods:x,onSubmit:ne=>{U(ne)},setDataOnUnmount:g,children:P.map((ne,z)=>{const ie=W=>wA.some(Z=>Z===W.definisjon),Re=W=>W.kanLoses,_e=c.filter(W=>ie(W)&&Re(W)),We=r||VA(e[z],p.perioder)||Qe(os,c)&&!s||_e.length===0&&!s,Xe=p.perioder.find(W=>W.periode.fom===e[z].vilkårsperiodeFom);if(!Xe)throw new Error(`Filler ikke vilkårsperiode med fom ${e[z].vilkårsperiodeFom}`);return u.jsx(xe.Provider,{value:z,children:u.jsx(FA,{vilkarsperiode:Xe,beregningsgrunnlag:e[z],erOverstyrer:s,readOnly:We,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:i,submittable:n,updateOverstyring:V,submitDisabled:C,verdiForAvklarAktivitetErEndret:y},ne.id)},ne.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:GA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:lm,AVKLAR_AKTIVITETER:LA}=he,KA=[lm,LA],$A=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:s,beregningsgrunnlag:i,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:g,arbeidsgiverOpplysningerPerId:k,setFormData:p,formData:v,vilkar:b,skalKunneAvbryteOverstyring:y})=>{const c=n.filter(R=>KA.some(S=>S===R.definisjon)&&R.kanLoses),x=e||(c.length===0||Qe(lm,n))&&!l,[A,N]=h.useState(!1);return u.jsxs("div",{children:[u.jsx(Mb,{readOnly:x,harAndreAvklaringsbehovIPanel:Qe(GA,n),submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:g,aktivtBeregningsgrunnlagIndeks:s,beregningsgrunnlag:i,arbeidsgiverOpplysningerPerId:k,setFormData:p,formData:v&&lt in v?v:void 0,vilkår:b,setAvklarAktiviteterErEndret:N}),u.jsx(j,{thirtyTwoPx:!0}),u.jsx(MA,{submitCallback:t,submittable:r,kodeverkSamling:g,beregningsgrunnlag:i,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:k,aktivtBeregningsgrunnlagIndeks:s,setFormData:p,formData:v&&yn in v?v:void 0,vilkar:b,avklarAktiviteterErEndret:A,skalKunneAvbryteOverstyring:y})]})},UA="_tabsContainer_1yyvp_1",YA="_main_1yyvp_9",xg={tabsContainer:UA,main:YA},HA=Ue(kk),{VURDER_FAKTA_FOR_ATFL_SN:dm,AVKLAR_AKTIVITETER:CA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:zA}=he,JA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},WA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:s})=>s.fom===r);if(t){const{fom:s,tom:i}=t.periode;return i!==null?`${I(s).format(re)} - ${I(i).format(re)}`:`${I(s).format(re)} - `}return`${I(r).format(re)}`},XA=e=>{if(e){const n=e.some(t=>t.definisjon===dm&&t.kanLoses),r=e.some(t=>t.definisjon===CA&&t.kanLoses);return n||r}return!1},mi=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return XA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},ZA=(e,n)=>{var r,t,s,i,l,o;const g=Nl(e),k=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),p=[],v=[];if(g.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const b=(i=(s=e==null?void 0:e.faktaOmBeregning)==null?void 0:s.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:i.some(y=>!!y.inntektPrMnd);v.push(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:b?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:(...y)=>u.jsx(se,{size:"xsmall",level:"3",children:y})}})}))}if(g.includes(O.VURDER_LONNSENDRING)&&(v.push(O.VURDER_LONNSENDRING),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),k&&g.includes(O.VURDER_MOTTAR_YTELSE)&&(v.push(`${O.VURDER_MOTTAR_YTELSE}_frilans`),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),!k&&g.includes(O.VURDER_MOTTAR_YTELSE)&&(v.push(`${O.VURDER_MOTTAR_YTELSE}_arbeidstaker`),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(v.push(O.VURDER_ETTERLONN_SLUTTPAKKE),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){v.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const b=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let y="";b.forEach((c,x)=>{var A;const N=(A=c.arbeidsforhold)==null?void 0:A.arbeidsgiverIdent;if(!N)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const R=n[N],S=R?Kn(R):N;x===0?y=S:y=`${y}, ${S}`}),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:y,h3:(...c)=>u.jsx(se,{size:"xsmall",level:"3",children:c})}})}))}if(g.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(v.push(O.VURDER_MILITÆR_SIVILTJENESTE),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(O.FASTSETT_BG_KUN_YTELSE)&&(v.push(O.FASTSETT_BG_KUN_YTELSE),p.push(u.jsxs(Ee,{size:"small",variant:"warning",children:[u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}}),u.jsx(j,{fourPx:!0}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),u.jsx(j,{fourPx:!0}),u.jsx(Pe,{size:"small",header:u.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:u.jsxs(Q,{size:"small",children:[u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),u.jsx(Q.Item,{children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]}))),g.includes(O.VURDER_NYOPPSTARTET_FL)&&(v.push(O.VURDER_NYOPPSTARTET_FL),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(v.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))),g.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const b=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let y="";b.forEach((c,x)=>{const{arbeidsgiverIdent:A}=c,N=n[A],R=N?Kn(N):A;x===0?y=R:y=`${y}, ${R}`}),v.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:y,h3:(...c)=>u.jsx(se,{size:"xsmall",level:"3",children:c})}})}))}return p.length>0?u.jsx(u.Fragment,{children:p.map((b,y)=>u.jsxs(Y.Fragment,{children:[y>0&&u.jsx(j,{sixteenPx:!0}),b]},v[y]))}):u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},QA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:s,erOverstyrer:i,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:k,vilkar:p,skalKunneAvbryteOverstyring:v=!1})=>{const[b,y]=h.useState(0),c=p==null?void 0:p.perioder;if(h.useEffect(()=>{if(c){const R=e==null?void 0:e.findIndex(S=>mi(S,c));R>-1&&y(R)}},[]),e.length===0||!p)return u.jsx(u.Fragment,{children:"Har ikke beregningsgrunnlag."});const x=e.length>1,A=e[b],N=A.avklaringsbehov;return u.jsx(Ke,{value:HA,children:u.jsxs("div",{className:xg.main,children:[u.jsx(se,{size:"small",level:"2",children:u.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Qn(dm,N)||Qn(zA,N))&&!Qk(N)?u.jsxs(u.Fragment,{children:[u.jsx(j,{sixteenPx:!0}),ZA(A,o),u.jsx(j,{twentyPx:!0})]}):u.jsx(j,{eightPx:!0}),x&&u.jsx("div",{className:xg.tabsContainer,children:u.jsx(Ir,{value:b.toString(),onChange:R=>y(Number(R)),children:u.jsx(Ir.List,{children:e.map((R,S)=>u.jsx(Ir.Tab,{value:S.toString(),label:WA(R,c),className:mi(R,c)?"harAksjonspunkt":"",icon:mi(R,c)&&u.jsx(Or,{width:20,height:20,color:"Orange"})},R.skjaeringstidspunktBeregning))})})}),u.jsx($A,{aktivtBeregningsgrunnlagIndeks:b,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:N,submitCallback:r,readOnly:t||JA(e[b],c),submittable:s,erOverstyrer:i,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:k,formData:g,vilkar:p,skalKunneAvbryteOverstyring:v})]})})},eI=[de.VURDER_FAKTA_FOR_ATFL_SN,de.AVKLAR_AKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],nI=[de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],rI=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),{behandling:t,rettigheter:s}=h.use(_n),i=ur(eI,nI),l=Bn(t),{data:o,isFetching:g}=Fn(l.beregningsgrunnlagOptions(t));return a.jsx(kr,{...n,standardPanelProps:i,faktaPanelKode:gr.BEREGNING,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:Uu(t,"BEREGNINGSGRUNNLAG"),children:g?a.jsx(Sn,{}):a.jsx(tI,{kodeverkSamling:i.alleKodeverk,vilkar:lI(t==null?void 0:t.vilkår,o),beregningsgrunnlag:dI(o),submitCallback:aI(i.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:s.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:i.readOnly,submittable:i.submittable})})},tI=e=>{const{formData:n,setFormData:r}=$n();return a.jsx(QA,{...e,formData:n,setFormData:r})},sI=e=>{switch(e){case he.AVKLAR_AKTIVITETER:return de.AVKLAR_AKTIVITETER;case he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case he.VURDER_FAKTA_FOR_ATFL_SN:return de.VURDER_FAKTA_FOR_ATFL_SN;case he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},aI=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:sI(s.kode),...s.grunnlag[0]}));return e(t)},iI=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),lI=(e,n)=>{if(!e)return null;const r=e.find(s=>s.vilkarType&&s.vilkarType===ar.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[iI(n,r)]}},dI=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];rI.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var $e=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))($e||{});function om(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qg={exports:{}},Hr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function oI(){if(Sg)return Hr;Sg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Hr.Fragment=n,Hr.jsx=r,Hr.jsxs=r,Hr}var Pg;function gI(){return Pg||(Pg=1,qg.exports=oI()),qg.exports}var f=gI();function xt(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function yr(e,n){return xt(e,n).vurderesIBehandlingen}var Pr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(Pr||{}),Fr=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Fr||{}),pe=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(pe||{});Fr.BRUKERS_ANDEL;Fr.FRILANS;Fr.EGEN_NÆRING;const Fl=e=>e==="OPPR";var dt=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(dt||{}),qt=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(qt||{});const uI=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],kI=e=>uI.some(n=>n===e),mI="_begrunnelseTextField_1wq9u_1",pI="_explanationTextarea_1wq9u_4",vI="_explanationTextareaReadOnly_1wq9u_7",pi={begrunnelseTextField:mI,explanationTextarea:pI,explanationTextareaReadOnly:vI},Bl={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":"Utgangspunktet er at all tilkommet aktivitet med inntekt skal føre til reduksjon i utbetaling. Det kan likevel være feil eller mangler i opplysningene fra AA-registeret. F. eks. internt bytte av org. nummer pga. endret lønns- og personalsystem eller manglende registrert sluttdato i gammel stilling ved overgang til ny stilling. Gjør derfor en konkret vurdering av hvorfor tilkommet aktivitet og inntekt ikke skal føre til reduksjon.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},Fg=Ue(Bl),fI=hn(3),yI=An(1500),St=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:s=!1,name:i="begrunnelse"})=>{const l=s?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||Fg.formatMessage({id:l});return f.jsx(Ke,{value:Fg,children:(n||r)&&f.jsx("div",{className:pi.begrunnelseTextField,children:f.jsx(rn,{name:i,label:e?"":o,validate:e?[]:[X,fI,yI,jn],className:e?pi.explanationTextareaReadOnly:pi.explanationTextarea,maxLength:1500,readOnly:e})})})},bI=e=>e&&e.begrunnelse?e.begrunnelse:"";St.buildInitialValues=(e,n="begrunnelse")=>({[n]:Xi(bI(e))});St.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const cI=Ue(Bl),jI=(e,n,r)=>!r||n?!0:!e,Fs=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:s})=>e?null:f.jsx(ae,{size:"small",loading:t,disabled:jI(s,t,n),onClick:r||Mu,type:r?"button":"submit",children:cI.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Bg(e,n){return n.tom!=null&&!I(n.tom).isBefore(I(e.fom))&&(e.tom==null||!I(n.tom).isAfter(I(e.tom)))}function hI(e,n){return Bg(e,n)||Bg(n,e)}function Nn(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===qt.UDEFINERT)?!0:!n||n.length===0||n.some(t=>hI(t,e))}var _g={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Og;function AI(){return Og||(Og=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=s(i,t.call(this,o)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)n.call(i,o)&&i[o]&&(l=s(l,this&&this[o]||o));return l}function s(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(_g)),_g.exports}var II=AI();const gm=om(II),TI="_vurdertIForrigeIcon_1q86k_1",RI={vurdertIForrigeIcon:TI},EI=gm.bind(RI),um=({className:e=""})=>{const n=J();return f.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:EI("vurdertIForrigeIcon",e),children:f.jsx(Is,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},et=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Pt=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:s,identifikator:i}=e;return s?t?`${r} (${I(t).format(re)})${et(n)}`:r:i?`${r} (${i})${et(n)}`:r},_i=(e,n)=>{var r,t;const s=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!s||!n[s])return"";const i=n[s];return i.erPrivatPerson?i.fødselsdato?`${i.navn} (${I(i.fødselsdato).format(re)})${et(e.eksternArbeidsforholdRef)}`:`${i.navn}${et(e.eksternArbeidsforholdRef)}`:`${i.navn} (${s})${et(e.eksternArbeidsforholdRef)}`},km=" - ",mm=e=>e==null,NI=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${km}${r}`},xI=e=>e.inntektskategori&&e.inntektskategori!==qt.UDEFINERT?e.inntektskategori:"",qI=(e,n,r,t)=>{var s,i;if(!e.aktivitetStatus||e.aktivitetStatus===pe.UDEFINERT)return"";if(e.aktivitetStatus===pe.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?Pt(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((s=r[Pr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var g;return o.kode===((g=e.arbeidsforhold)==null?void 0:g.arbeidsforholdType)}))==null?void 0:s.kode)||""}return n&&e.aktivitetStatus===pe.BRUKERS_ANDEL?"Ytelse":((i=r[Pr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:i.navn)||""},SI=e=>mm(e)?void 0:e,Dg=e=>K(e)||"",PI=(e,n,r)=>e!==void 0?Dg(e):r&&!mm(n)?Dg(n):"",FI=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),BI=(e,n,r,t)=>({andel:qI(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:xI(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===qt.UDEFINERT?void 0:e.inntektskategori}),pm=(e,n,r,t,s)=>{if(n.skalRedigereInntekt){const i=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${s}.fastsattBelop`);return i?fe(i):0}return n.readOnlyBelop?fe(n.readOnlyBelop):0},_I=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),OI=(e,n)=>{var r;const t=e.find(s=>{var i,l;return!!s.arbeidsforhold&&s.arbeidsforhold.arbeidsgiverIdent===((i=n.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent)&&s.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},DI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!_I(t.arbeidsforhold,r)){const s=OI(n,t),i={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:s.beregningsperiodeTom,beregningsperiodeFom:s.beregningsperiodeFom,...t.arbeidsforhold};r.push(i)}}),r},wI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],VI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],MI=(e,n)=>DI(wI(e),VI(n)),GI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],s=e.beregningsgrunnlagPeriode;return MI(t,s)},LI=e=>e?Number(fe(e)):0,KI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),$I=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,UI=(e,n)=>e.some(r=>$I(n,r)),YI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},HI=(e,n,r,t)=>{const s=[];return t.forEach((i,l)=>{if(i.nyAndel&&(i.andelsnrRef||i.andelsnrRef===0)){const o=YI(t,i.andelsnrRef);s.push({erNyAndel:i.nyAndel,aktivitetstatus:i.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else s.push({erNyAndel:i.nyAndel,aktivitetstatus:i.aktivitetStatus,inntektskategori:i.inntektskategori,arbeidsgiverIdent:i.arbeidsgiverId,arbeidsforholdId:i.arbeidsforholdId})}),s},CI=(e,n,r,t,s)=>{const i=HI(e,n,r,t),l=[];let o=!1;return i.forEach(g=>{UI(l,g)&&(o=!0),l.push(g)}),o?KI(s):void 0},zI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,JI=(e,n,r,t,s,i)=>{const l=i.findIndex(({arbeidsforholdId:g,arbeidsgiverId:k})=>g===t.arbeidsforholdId&&k===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${s}.refusjonskrav`);if(l>=0){const g=i[l];zI(t,g)&&(g.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(g.totalRefusjon+=Number(fe(o)))}else{const{refusjonskravFraInntektsmelding:g,arbeidsforholdId:k,arbeidsgiverId:p,eksternArbeidsforholdId:v}=t;let b=0;o!=null&&(b=Number(fe(o))),i.push({arbeidsforholdId:k,eksternArbeidsforholdId:v,arbeidsgiverId:p,refusjonskravFraInntektsmelding:g,totalRefusjon:b})}},WI=(e,n,r,t)=>{const s=[];return t.forEach((i,l)=>{i.arbeidsforholdId!==""&&JI(e,n,r,i,l,s)}),s},XI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),ZI=(e,n,r,t,s,i)=>{const l=WI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?s[l[0].arbeidsgiverId]:void 0;let g;return o?g=Pt(o,l[0].eksternArbeidsforholdId):g=l[0].arbeidsgiverId||"",XI(g,i)}},QI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,eT=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),nT=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,rT=(e,n,r)=>e>=Math.round(n)?nT(K(n),r):void 0,vm=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),fm=(e,n,r,t,s)=>e>=Math.round(n)?t(K(n),r,s):void 0,tT=(e,n,r)=>e!==Math.round(n)?QI(K(Math.round(n)),r):void 0,sT=(e,n,r,t,s,i,l)=>{if(!r.andelIArbeid)return!1;const o=s(`FORDEL_BEREGNING_FORM.${e}.${i}.${l}.fastsattBelop`),g=o?fe(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&g<=0?!0:r.andelIArbeid.split(km).filter(k=>Number(k)>0).length>0&&g===0},aT=(e,n,r,t,s,i)=>t.some((l,o)=>sT(e,i,l,s,n,r,o))?eT(i):void 0,iT=(e,n,r,t,s,i)=>{const l=t.map((o,g)=>pm(e,o,r,n,g)).reduce((o,g)=>o+g,0);return s!=null?tT(l,s,i):void 0},wg=(e,n,r,t,s)=>{const i=s(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return LI(i)},lT=(e,n,r,t,s,i)=>{const l=!!n.find((k,p)=>k.andelIArbeid!=="0.00"&&wg(e,k,r,p,t)===0),o=n.map((k,p)=>wg(e,k,r,p,t)).reduce((k,p)=>k+p,0),g=6*s;return l?rT(o,g,i):void 0},ym=(e,n)=>{const r=e.map(t=>{var s;return((s=n[Pr.AKTIVITET_STATUS].find(i=>i.kode===t))==null?void 0:s.navn)||""});return r.sort((t,s)=>t.localeCompare(s)),[...new Set(r)].join(", ")},bm=(e,n,r,t,s)=>t.map((i,l)=>i.aktivitetStatus&&!s.includes(i.aktivitetStatus)?0:pm(e,i,r,n,l)).reduce((i,l)=>i+l,0),dT=(e,n,r,t,s,i,l)=>{const o=[pe.ARBEIDSTAKER],g=bm(e,n,r,t,o),k=ym(o,i);return fm(g,s,k,vm,l)},oT=(e,n,r,t,s,i,l)=>{const o=[pe.ARBEIDSTAKER,pe.FRILANSER,pe.DAGPENGER,pe.ARBEIDSAVKLARINGSPENGER],g=t.map(v=>v.aktivitetStatus).filter(v=>!!v&&o.includes(v)),k=bm(e,n,r,t,g),p=ym(g,i);return fm(k,s,p,vm,l)},gT=(e,n,r,t,s,i,l)=>{const o=!!t.find(k=>k.andelIArbeid!=="0.00"&&k.aktivitetStatus===pe.FRILANSER),g=6*i;if(o)return dT(e,n,r,t,g,l,s);if(t.find(k=>k.andelIArbeid!=="0.00"&&k.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE))return oT(e,n,r,t,g,l,s)},uT="_container_1tnrv_1",kT="_buttonRemove_1tnrv_5",mT="_buttonRow_1tnrv_16",pT="_rightAlignInput_1tnrv_19",vT="_slettIkon_1tnrv_29",fT="_deleteBtn_1tnrv_36",yT="_notLastRow_1tnrv_39",bT="_divider_1tnrv_43",cT="_dividerTop_1tnrv_46",jT="_sumRow_1tnrv_49",hT="_fordelingForrige_1tnrv_52",AT="_refusjon_1tnrv_55",IT="_nyFordeling_1tnrv_62",TT="_periodeColumn_1tnrv_69",RT="_addCircleIcon_1tnrv_72",ET="_imageText_1tnrv_78",NT="_addPeriode_1tnrv_83",xT="_customLink_1tnrv_84",qT="_removeButton_1tnrv_85",ST="_inntektTable_1tnrv_88",PT="_shortLeftAligned_1tnrv_137",FT="_wordwrap_1tnrv_142",BT="_litenBredde_1tnrv_145",_T="_storBredde_1tnrv_148",OT="_flexColumn3_1tnrv_151",DT="_benyttCheckbox_1tnrv_154",Le={container:uT,buttonRemove:kT,buttonRow:mT,rightAlignInput:pT,slettIkon:vT,deleteBtn:fT,notLastRow:yT,divider:bT,dividerTop:cT,sumRow:jT,fordelingForrige:hT,refusjon:AT,nyFordeling:IT,periodeColumn:TT,addCircleIcon:RT,imageText:ET,addPeriode:NT,customLink:xT,removeButton:qT,inntektTable:ST,shortLeftAligned:PT,wordwrap:FT,litenBredde:BT,storBredde:_T,flexColumn3:OT,benyttCheckbox:DT},wT=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:K(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),cm=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[Pr.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":Pt(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},VT=(e,n,r)=>e.map(t=>f.jsx("option",{value:t.andelsnr.toString(),children:cm(t,n,r)},t.andelsnr)),MT=(e,n,r,t)=>{const s=e.map(i=>f.jsx("option",{value:i.andelsnr.toString(),children:cm(i,r,t)},i.andelsnr));return s.push(f.jsx("option",{value:Fr.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},Fr.BRUKERS_ANDEL)),s},GT=e=>e.map(n=>f.jsx("option",{value:n.kode,children:n.navn},n.kode)),jm=e=>e>0&&K(e)||"",LT=(e,n,r,t)=>{let s=0,i=0;for(i;i<r.length;i+=1){const l=r[i],o=fe(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${i}.fastsattBelop`));l.skalRedigereInntekt?s+=o||0:s+=l.readOnlyBelop?o:0}return jm(s)},KT=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(fe(t.beregningsgrunnlagPrAar)):0)}return jm(n)},$T=e=>e.inntektskategori?kI(e.inntektskategori)||qt.FRILANSER===e.inntektskategori:!1,UT=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},YT=(e,n)=>{var r;const t=Number(n);return(r=e.find(s=>s.andelsnr===t))==null?void 0:r.aktivitetStatus},HT=(e,n,r,t,s)=>{const i=e[n],l=UT(r,t);l&&(i.arbeidsforholdId=l.arbeidsforholdId,i.arbeidsgiverId=l.arbeidsgiverIdent,i.arbeidsperiodeFom=l.startdato,i.arbeidsperiodeTom=l.opphoersdato,i.andelsnrRef=l.andelsnr,i.aktivitetStatus=YT(e,t),i.nyttArbeidsforhold=l.nyttArbeidsforhold,i.arbeidsforholdType=l.arbeidsforholdType,i.beregningsperiodeTom=l.beregningsperiodeTom,i.beregningsperiodeFom=l.beregningsperiodeFom,s(n,i))},CT=(e,n,r,t,s,i,l)=>f.jsxs(f.Fragment,{children:[!e[n].nyAndel&&f.jsx(ce,{name:`${l(n)}.andel`,className:Le.storBredde,readOnly:!0}),e[n].nyAndel&&f.jsx(cs,{name:`${l(n)}.andel`,className:Le.storBredde,label:"",selectValues:r,readOnly:t,validate:[X],onChange:o=>HT(e,n,s,o.target.value,i)})]}),zT=(e,n,r,t)=>n?f.jsx(ee,{children:f.jsx(Rr,{children:f.jsx(ce,{name:`${t}.readOnlyBelop`,className:Le.litenBredde,parse:De,readOnly:!0,isEdited:!1})})}):f.jsx(ee,{className:Le.rightAlignInput,children:f.jsx(Rr,{children:f.jsx(ce,{name:`${t}.fastsattBelop`,parse:De,readOnly:e,validate:[X,sn(178956970)],isEdited:r&&!n,className:Le.litenBredde})})}),JT=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,WT=(e,n,r,t,s,i,l)=>f.jsxs(ee,{children:[CT(e,n,r,t,s,i,l),!$T(e[n])&&f.jsx("div",{className:Le.wordwrap,children:f.jsx(ce,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),XT=(e,n)=>e?f.jsx(ee,{children:f.jsx(ce,{name:`${n}.andelIArbeid`,readOnly:!0,className:Le.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,ZT=(e,n,r,t)=>f.jsx(ee,{className:e||!n[r].skalKunneEndreRefusjon?void 0:Le.rightAlignInput,children:f.jsx(Rr,{children:f.jsx(ce,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:De,className:Le.litenBredde,validate:n[r].skalKunneEndreRefusjon?[X,sn(178956970)]:[]})})}),QT=e=>f.jsx(ee,{children:f.jsx(ce,{name:`${e}.beregningsgrunnlagPrAar`,className:Le.litenBredde,readOnly:!0,parse:De})}),eR=(e,n,r)=>f.jsx(ee,{className:e?Le.shortLeftAligned:void 0,children:f.jsx(Rr,{children:f.jsx(cs,{label:"",name:`${n}.inntektskategori`,className:Le.storBredde,validate:e?[]:[X],selectValues:GT(r),readOnly:e})})}),nR=(e,n,r,t)=>f.jsx(ee,{children:JT(n,e,r)&&f.jsx(ae,{icon:f.jsx(rr,{"aria-hidden":!0,className:Le.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),rR=(e,n,r)=>f.jsxs(Pn,{children:[f.jsx(ee,{children:f.jsx(m,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&f.jsx(ee,{}),f.jsx(ee,{}),f.jsx(ee,{children:f.jsx(F,{size:"small",children:n})}),f.jsx(ee,{children:f.jsx(F,{size:"small",children:e})}),f.jsx(ee,{}),f.jsx(ee,{})]},"bruttoBGSummaryRow"),tR=e=>{const n=[];return n.push("BeregningInfoPanel.FordelBG.Andel"),e&&n.push("BeregningInfoPanel.FordelBG.AndelIArbeid"),n.push("BeregningInfoPanel.FordelBG.Refusjonskrav"),n.push("BeregningInfoPanel.FordelBG.Beregningsgrunnlag"),n.push("BeregningInfoPanel.FordelBG.Fordeling"),n.push("BeregningInfoPanel.FordelBG.Inntektskategori"),n},sR=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var s;return(s=t.perioderMedGraderingEllerRefusjon)==null?void 0:s.some(i=>i.erGradering)})},aR=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:s,kodeverkSamling:i,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:g,periodeFom:k,vilkårperiodeFieldIndex:p,setFieldArrayToRepeat:v,fieldArrayToRepeat:b})=>{const{control:y,watch:c,getValues:x}=Ie(),A=`FORDEL_BEREGNING_FORM.${p}.${e}`,{fields:N,append:R,remove:S,update:q}=tn({control:y,name:`FORDEL_BEREGNING_FORM.${p}.${e}`});h.useEffect(()=>{b&&b!==A&&!n&&!r&&x(b).forEach(Z=>{var me;const Te=N.findIndex(on=>on.andel===Z.andel&&(on.inntektskategori===Z.inntektskategori||!on.inntektskategori&&!Z.lagtTilAvSaksbehandler&&!on.lagtTilAvSaksbehandler));if(Te>-1){const on={...N[Te],fastsattBelop:Z.fastsattBelop,refusjonskrav:o?Z.refusjonskrav:(me=N[Te])==null?void 0:me.refusjonskrav,inntektskategori:Z.inntektskategori};q(Te,on)}})},[b]);const P=!!l.aktivitetStatus&&l.aktivitetStatus.some(Z=>Z===pe.KUN_YTELSE),D=GI(l),_=LT(p,e,N,c),H=KT(N),C=sR(l),L=i[Pr.INNTEKTSKATEGORI],M=J(),V=P?MT(D,M,i,s):VT(D,i,s),U=Z=>`FORDEL_BEREGNING_FORM.${p}.${e}.${Z}`,ne=N.map((Z,me)=>{const Te=n||r;return f.jsxs(Pn,{children:[WT(N,me,V,Te,D,q,U),XT(C,U(me)),ZT(Te,N,me,U),QT(U(me)),zT(n,r,t,U(me)),eR(Te,U(me),L),nR(N,me,Te,S)]},Z.id)});ne.push(rR(_,H,C));const z=[],ie=Z=>{Z&&z.push(Z)};!n&&N.some(Z=>!!Z.skalRedigereInntekt||!!Z.skalKunneEndreRefusjon)&&(ie(CI(p,x,e,N,M)),ie(iT(p,x,e,N,g,M)),C&&(ie(aT(p,x,e,N,k,M)),ie(gT(p,x,e,N,M,l.grunnbeløp,i))),o&&(ie(lT(p,N,e,x,l.grunnbeløp,M)),ie(ZI(p,N,e,x,s,M))));const Re=`FORDEL_BEREGNING_FORM.${p}.${e}.skjemagruppe`,_e=z.filter(Z=>!!Z),We=_e.length>0?_e[0]:void 0,Xe=bs(Re,We),W=()=>{v(A===b?"":A)};return f.jsxs("div",{children:[f.jsx(qn,{headerTextCodes:tR(C),noHover:!0,classNameTable:Le.inntektTable,children:ne}),!n&&!r&&f.jsx(ae,{icon:f.jsx(el,{"aria-hidden":!0}),onClick:()=>R(wT(r)),type:"button",variant:"secondary",children:f.jsx(ke,{children:f.jsx(m,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&f.jsx(Ov,{className:Le.benyttCheckbox,checked:A===b,onChange:W,children:"Benytt for alle perioder"}),Xe&&f.jsx(ot,{children:Xe})]})},iR="_statusOk_1qsx9_1",hm={statusOk:iR},lR=gm.bind(hm),vi=e=>e?I(e,Fe).format(re):"-",dR=(e,n)=>n?f.jsx(F,{size:"small",children:f.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:vi(e),tom:vi(n)}})}):f.jsx(F,{size:"small",children:f.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:vi(e)}})}),oR=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},gR=e=>{const n=oR(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},uR=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>gR(t)).reduce((t,s)=>t+s,0)},_l=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:s,beregningsgrunnlag:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:g,fordelingsperiode:k,fieldIndex:p,setFieldArrayToRepeat:v,fieldArrayToRepeat:b})=>k.fom?f.jsx(Se,{className:e?hm.statusOk:lR(`fordelBeregningsgrunnlagPeriode--${k.fom}`),children:f.jsxs(Se.Item,{open:t,children:[f.jsxs(Se.Header,{onClick:()=>s(k.fom),children:[dR(k.fom,k.tom)," ",n?f.jsx(um,{}):""]}),f.jsx(Se.Content,{children:f.jsx(aR,{fieldName:g,readOnly:e,sumIPeriode:uR(i.beregningsgrunnlagPeriode,k.fom),skalIkkeRedigereInntekt:!k.skalRedigereInntekt,skalKunneEndreRefusjon:!!k.skalKunneEndreRefusjon,periodeFom:k.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:i,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:p,setFieldArrayToRepeat:v,fieldArrayToRepeat:b})})]})}):null,kR=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},mR=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!I(t).isBefore(I(n))},Vg=e=>{var n,r,t,s;if(!e)return;const i=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((s=e.arbeidsforhold)==null?void 0:s.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return K(e.besteberegningPrAar+i-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return K(e.overstyrtPrAar+i-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return K(e.beregnetPrAar+i-l)},pR=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?K(e.fordelingForrigeBehandlingPrAar):"")||"";_l.buildInitialValues=(e,n,r,t,s,i)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=kR(l,n);return{...BI(l,t,s,i),...FI(l),andelIArbeid:NI(l.andelIArbeid||[]),fordelingForrigeBehandling:pR(l),fastsattBelop:PI(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:Vg(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?K(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||mR(o,r),beregningsgrunnlagPrAar:Vg(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:SI(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const Am="fordelBGPeriode",Ol=e=>Am+e,vR=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?fe(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:fe(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),gs=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),fR=e=>gs(e,dt.GRADERING)||gs(e,dt.GRADERING_OPPHOERER),yR=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},Im=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function Mg(e){const n=I(e.beregningsgrunnlagPeriodeFom).day()===6,r=I(e.beregningsgrunnlagPeriodeFom).day()===0,t=I(e.beregningsgrunnlagPeriodeTom).day()===6,s=I(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||s)}const bR=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function cR(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>bR(r))}function jR(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const hR=(e,n)=>e.some(r=>{const t=n.find(s=>s.aktivitetStatus===r.aktivitetStatus&&s.inntektskategori===r.inntektskategori&&Im(s,r));return!!(t===void 0||jR(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),AR=(e,n,r,t)=>{const s=e.fordelBeregningsgrunnlagAndeler||[],i=n.fordelBeregningsgrunnlagAndeler||[];if(s.length!==i.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const g=Mg(r),k=Mg(o),p=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(g||k)&&!p?!0:!hR(s,i)},IR=(e,n)=>e.some(r=>{const t=n.find(s=>s.aktivitetStatus===r.aktivitetStatus&&s.inntektskategori===r.inntektskategori&&Im(s,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),TR=(e,n,r,t,s)=>{var i,l;const o=t[t.length-1];return((i=r.fordelBeregningsgrunnlagAndeler)==null?void 0:i.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||fR(e)||IR(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||Nn(r,s)&&!Nn(o,s)?!1:gs(e,dt.ARBEIDSFORHOLD_AVSLUTTET)?yR(e,n):gs(e,dt.ENDRING_I_AKTIVITETER_SØKT_FOR)?AR(r,o,e,n):!0},RR=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},ER=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const s=e.find(i=>i.beregningsgrunnlagPeriodeFom===t.fom);if(s){if(TR(s,e,t,r,n))return RR(r,t),r;r.push({...t})}return r},NR=e=>({fom:n,tom:r})=>(I(n).isSame(I(e.fom))||I(n).isAfter(e.fom))&&(e.tom===null||I(r).isSame(I(e.tom))||I(r).isBefore(I(e.tom))),xR=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},qR=e=>({andelsnr:xR(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:vR(e)}),SR=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},PR=(e,n,r,t)=>t.filter(NR(r)).filter(s=>s.skalRedigereInntekt||s.skalKunneEndreRefusjon).map(s=>({andeler:e[Ol(n)].map(qR),fom:SR(s.fom),tom:s.tom})),Dl=(e,n,r)=>e.filter(t=>cR(t)).reduce(ER(n,r),[]),FR="_lessPadding_xotc9_1",BR={lessPadding:FR},_R=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},OR=(e,n,r,t)=>{const s=[],i=Dl(e,r,t);for(let l=0;l<i.length;l+=1){const{skalRedigereInntekt:o}=i[l];o&&Nn(i[l])&&PR(n,l,i[l],e).forEach(g=>s.push(g))}return s};function DR(e,n){return Nn(n,e.forlengelseperioder)}function wR(e,n){var r;return!Nn(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const Ft=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[g,k]=h.useState([]),[p,v]=h.useState("");h.useEffect(()=>{const y=n.filter(c=>DR(s,c)).filter(c=>c.skalKunneEndreRefusjon||c.skalRedigereInntekt).filter(c=>!!c.fom).map(c=>c.fom);k(y)},[n]);const b=y=>{if(g.includes(y)){const c=g.filter(x=>x!==y);k(c)}else{const c=g.map(x=>x);c.push(y),k(c)}};return f.jsx(kv,{className:BR.lessPadding,children:Dl(n,t,s.forlengelseperioder).map((y,c)=>f.jsxs(Y.Fragment,{children:[f.jsx(j,{eightPx:!0}),f.jsx(_l,{readOnly:e||!Nn(y,s.forlengelseperioder),erVurdertTidligere:wR(y,s),fordelingsperiode:y,fordelBGFieldArrayName:Ol(c),open:g?g.filter(x=>x===y.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:b,beregningsgrunnlag:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:v,fieldArrayToRepeat:p}),f.jsx(j,{eightPx:!0})]},Am+y.fom))})};Ft.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:OR(n,e,r,t)});Ft.buildInitialValues=(e,n,r,t)=>{const s={};if(!e)return s;const i=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===pe.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return Dl(e,l,n.forlengelseperioder).forEach((o,g)=>{const k=_R(o,l);s[Ol(g)]=_l.buildInitialValues(o,k,n.skjaeringstidspunktBeregning,i,r,t)}),s};const VR=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},Bt=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})=>{const l=r.beregningsgrunnlagPeriode,o=VR(r);return f.jsx(Ft,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})};Bt.buildInitialValues=(e,n,r,t)=>Ft.buildInitialValues(e,n,r,t);Bt.transformValues=(e,n,r,t)=>Ft.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:MR}=$e,GR=(e,n)=>n.some(r=>r.definisjon===e),LR=(e,n,r,t)=>{const s=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||s.push(f.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:(...i)=>f.jsx("b",{children:i}),br:f.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),s},KR=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),$R=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:i})=>i!=null).filter(({perioderMedGraderingEllerRefusjon:i})=>KR(i||[])),s=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erSøktYtelse:l})=>l).includes(!0));return LR(n,r,t,s)},UR=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return GR(MR,e.avklaringsbehov)?$R(t):[]},YR=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=UR(n);return e?f.jsx(f.Fragment,{}):f.jsx(or,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:Oi}=$e,HR=(e,n)=>n.some(r=>r.definisjon===e),Tm=e=>{const n=e.find(r=>r.definisjon===Oi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Oi}`);return n},CR="begrunnelse",Rm=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},zR=(e,n)=>{if(!HR(Oi,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...Bt.transformValues(e,Rm(n),r,n.forlengelseperioder)}},JR=(e,n,r,t)=>{const s=Rm(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...St.buildInitialValues(Tm(e.avklaringsbehov),CR),...Bt.buildInitialValues(s,e,t,r)}},WR=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})=>{const l=Tm(r.avklaringsbehov),o=!Fl(l.status),g=Ie(),k=g.watch(`FORDEL_BEREGNING_FORM.${i}.begrunnelse`);return f.jsxs(f.Fragment,{children:[f.jsx(YR,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),f.jsx(j,{twentyPx:!0}),f.jsx(Bt,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i}),f.jsx(j,{twentyPx:!0}),f.jsx(St,{name:`FORDEL_BEREGNING_FORM.${i}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!k}),f.jsx(On,{ident:l.vurdertAv,date:l.vurdertTidspunkt}),f.jsx(j,{twentyPx:!0}),f.jsx(Fs,{isSubmittable:n,isReadOnly:e,isSubmitting:g.formState.isSubmitting,isDirty:g.formState.isDirty})]})},{FORDEL_BEREGNINGSGRUNNLAG:XR}=$e,us="FORDEL_BEREGNING_FORM",ZR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},QR=(e,n,r)=>{const t=e[us].filter(s=>yr(r,s.periode.fom)).map(s=>zR(s,ZR(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:XR}};function Em(e){return e.avklaringsbehov.some(n=>n.definisjon===$e.FORDEL_BEREGNINGSGRUNNLAG)}const eE=(e,n,r,t)=>({[us]:e.filter(Em).map(s=>JR(s,xt(n,s.vilkårsperiodeFom),r,t))}),nE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:s,vilkårsperioder:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:k,setFordelingFormIsDirty:p})=>{const v=ze({defaultValues:g!=null&&g.FORDEL_BEREGNING_FORM?g:eE(s,i,o,l)}),{formState:{dirtyFields:b,isSubmitted:y,errors:c,isDirty:x},control:A,trigger:N}=v;h.useEffect(()=>{p(x)},[x]),h.useEffect(()=>{var S;y&&(S=b[us])!=null&&S[e]&&N()},[e]);const{fields:R}=tn({name:us,control:A});return f.jsx(Zi,{errorMessage:"Noe gikk galt ved visning av fordeling",children:f.jsx(Je,{formMethods:v,onSubmit:S=>{Object.keys(c).length===0&&t(QR(S,s,i))},setDataOnUnmount:k,children:R.map(S=>{const q=s.findIndex(P=>P.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return f.jsx("div",{style:{display:q===e?"block":"none"},children:f.jsx(WR,{submittable:r,readOnly:n||!yr(i,s[q].vilkårsperiodeFom),beregningsgrunnlag:s[q],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:s.filter(Em).findIndex(P=>P.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp)})},S.id)})})})},rE=(e,n)=>e.map(r=>f.jsx("div",{children:r&&r.erTildeltRefusjon?f.jsx(E,{children:n}):f.jsx(E,{children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),tE=e=>{if(!e)return;const n=e.tom===Be?void 0:e.tom;return f.jsx(E,{children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:Ge(e.fom),tom:n?Ge(n):""}})})},sE=e=>e.map(n=>f.jsx("div",{children:tE(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),aE=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>f.jsxs(w.Row,{children:[f.jsx(w.DataCell,{children:f.jsx(E,{children:_i(e,n)})}),f.jsx(w.DataCell,{children:rE(e.tidligereUtbetalinger||[],_i(e,n))}),f.jsx(w.DataCell,{children:sE(e.tidligereUtbetalinger||[])})]}),iE="_tabellContainer_9a5fi_1",lE={tabellContainer:iE},dE=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,oE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return f.jsx("div",{className:lE.tabellContainer,children:f.jsxs(w,{children:[f.jsx(w.Header,{children:f.jsxs(w.Row,{children:[f.jsx(w.HeaderCell,{scope:"col",children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),f.jsx(w.HeaderCell,{scope:"col",children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),f.jsx(w.HeaderCell,{scope:"col",children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),f.jsx(w.Body,{children:t.map(s=>f.jsx(aE,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:s},dE(s)))})]})})},gE="_bredde_1lhuf_1",uE="_tekstMidtstilt_1lhuf_4",fi={bredde:gE,tekstMidtstilt:uE},kE="REFUSJON_ENDRING_DATO",mE="DELVIS_REFUSJON_FØR_START_BELØP",Nm=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,ks=e=>Nm(kE,e),wl=e=>Nm(mE,e),pE=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,_t=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:s,vilkårperiodeFieldIndex:i})=>{const l=_i(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",g=Ie().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${ks(e)}`),k=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,p=pE(s,g),v=h.useCallback(y=>f.jsx("b",{children:y}),[]),b=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return f.jsxs(nn,{children:[f.jsx(E,{children:f.jsx(m,{id:o,values:{ag:l,dato:Ge(e.nyttRefusjonskravFom),b:v}})}),f.jsxs(te,{gap:"6",children:[f.jsx("div",{className:fi.tekstMidtstilt,children:f.jsx(E,{children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),f.jsx(tr,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${ks(e)}`,isReadOnly:n,validate:n?[]:[X,Rn,ys(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),b&&!p&&!k&&f.jsxs(te,{gap:"6",children:[f.jsx("div",{className:fi.tekstMidtstilt,children:f.jsx(E,{children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),f.jsx(ce,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${wl(e)}`,className:fi.bredde,validate:n?[]:[X,sn(e.maksTillattDelvisRefusjonPrMnd)],parse:De,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};_t.buildInitialValues=e=>{const n={};return n[ks(e)]=e.fastsattNyttRefusjonskravFom||"",n[wl(e)]=K(e.fastsattDelvisRefusjonPrMnd)||"",n};_t.transformValues=(e,n,r)=>{var t,s;const i=ks(n),l=e[i];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const g=wl(n);o=fe(e[g])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(s=n.arbeidsgiver)==null?void 0:s.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const Gg="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:vE}=$e,xm=e=>e?e.find(n=>n.definisjon===vE):void 0,fE=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,yE=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],s=xm(e.avklaringsbehov);let i={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:s&&s.begrunnelse?s.begrunnelse:void 0};return t.forEach(l=>{i={...i,..._t.buildInitialValues(l)}}),i},bE=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(s=>_t.transformValues(e,s,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},cE=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:s,formSubmittes:i})=>{var l;const o=!r.avklaringsbehov.some(y=>y.definisjon===$e.VURDER_REFUSJON_BERGRUNN),g=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],k=xm(r.avklaringsbehov),p=k?Fl(k.status):!1,v=Ie(),b=v.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.begrunnelse`);return f.jsxs(f.Fragment,{children:[p&&f.jsx(or,{children:[f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),f.jsx(j,{sixteenPx:!0}),f.jsx(se,{size:"small",children:f.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),f.jsx(j,{sixteenPx:!0}),f.jsx(oE,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),f.jsx(j,{sixteenPx:!0}),g.map(y=>f.jsx(_t,{refusjonAndel:y,readOnly:o||n,erAksjonspunktÅpent:p,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:Gg,vilkårperiodeFieldIndex:s},fE(y))),f.jsx(j,{twentyPx:!0}),f.jsx(St,{name:`${Gg}.${s}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!b}),f.jsx(On,{ident:k==null?void 0:k.vurdertAv,date:k==null?void 0:k.vurdertTidspunkt}),f.jsx(j,{twentyPx:!0}),f.jsx(Fs,{isSubmittable:e,isReadOnly:o||n,isSubmitting:i,isDirty:v.formState.isDirty}),f.jsx(j,{sixteenPx:!0})]})},ms="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:jE}=$e,hE=(e,n)=>({[ms]:e.map(r=>yE(r,xt(n,r.vilkårsperiodeFom)))}),AE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},IE=(e,n,r)=>{const t=e[ms].filter(s=>yr(r,s.periode.fom)).map(s=>bE(s,AE(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:jE}},TE=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:s,arbeidsgiverOpplysningerPerId:i,setFormData:l,formData:o,submitCallback:g,setRefusjonFormIsDirty:k})=>{const p=ze({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:hE(t,s)}),[v,b]=h.useState(!1),{formState:{dirtyFields:y,isSubmitted:c,errors:x,isDirty:A},control:N,trigger:R}=p;h.useEffect(()=>{k(A)},[A]),h.useEffect(()=>{var q;c&&(q=y[ms])!=null&&q[e]&&R()},[e]);const{fields:S}=tn({name:ms,control:N});return f.jsx(Zi,{errorMessage:"Noe gikk galt ved visning av refusjon",children:f.jsx(Je,{formMethods:p,onSubmit:q=>{Object.keys(x).length===0&&(b(!0),g(IE(q,t,s)))},setDataOnUnmount:l,children:S.map(q=>{const P=t.findIndex(D=>D.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp);return f.jsx("div",{style:{display:P===e?"block":"none"},children:f.jsx(cE,{submittable:n,readOnly:r||!yr(s,t[P].vilkårsperiodeFom),beregningsgrunnlag:t[P],arbeidsgiverOpplysningerPerId:i,vilkårperiodeFieldIndex:P,formSubmittes:v})},q.id)})})})};var Di={exports:{}},RE=Di.exports,Lg;function EE(){return Lg||(Lg=1,function(e,n){(function(r,t){e.exports=t()})(RE,function(){return function(r,t,s){t.prototype.isBetween=function(i,l,o,g){var k=s(i),p=s(l),v=(g=g||"()")[0]==="(",b=g[1]===")";return(v?this.isAfter(k,o):!this.isBefore(k,o))&&(b?this.isBefore(p,o):!this.isAfter(p,o))||(v?this.isBefore(k,o):!this.isAfter(k,o))&&(b?this.isAfter(p,o):!this.isBefore(p,o))}}})}(Di)),Di.exports}var NE=EE();const qm=om(NE),xE="_datoRad_17rpq_1",qE="_boks_17rpq_8",SE="_footerRad_17rpq_12",PE="_datoVelger_17rpq_16",FE="_periodeHeader_17rpq_20",ps={datoRad:xE,boks:qE,footerRad:SE,datoVelger:PE,periodeHeader:FE},Kg=e=>e===Be?"":I(e).format(re),BE=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=J(),[s,i]=h.useState(),l=h.useCallback(p=>{const v=I(p).format(Fe);if(r(v),v){const b=n(v);b.sort((y,c)=>I(y.fom).diff(I(c.fom))),i(b)}},[n]),o=[p=>!e||!I(p).isAfter(I(e.fom))||I(p).isAfter(I(e.tom))],{datepickerProps:g,inputProps:k}=jv({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return f.jsxs(f.Fragment,{children:[f.jsx(T,{className:ps.datoVelger,children:f.jsx(td,{...g,children:f.jsx(td.Input,{...k,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})})}),s&&f.jsxs(T,{children:[f.jsx(F,{size:"small",className:ps.periodeHeader,children:f.jsx(m,{id:"TilkommetAktivitet.Modal.Resultat"})}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(m,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:I(s[0].fom).format(re),tom:Kg(s[0].tom)}})}),f.jsx("li",{children:f.jsx(m,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:I(s[1].fom).format(re),tom:Kg(s[1].tom)}})})]})]}),f.jsx(j,{sixteenPx:!0})]})},_E=e=>e?e.tom===Be?!0:_u(e.fom,e.tom,!0)>1:!1,OE=e=>e.map(n=>({fom:n.fom,tom:n.tom})),DE=(e,n)=>{const r=I(e).format(re);if(n&&n!==Be){const t=I(n).format(re);return r.concat(" - ",t)}return r.concat(" - ")},wE=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:s})=>{const i=J(),[l,o]=h.useState(void 0),[g,k]=h.useState(void 0),p=h.useMemo(()=>OE(e),[e]),v=h.useCallback(()=>{l&&g&&(r(l),s())},[e,l]),b=h.useCallback(c=>{const x=c.target.value,A=p.find(N=>N.fom===x);k(A||void 0)},[]),y=g&&_E(g);return t?f.jsxs(wt,{width:"500px",open:t,onClose:s,"aria-label":"Del opp periode",children:[f.jsx(wt.Header,{children:f.jsx(m,{id:"TilkommetAktivitet.Modal.Tittel"})}),f.jsxs(wt.Body,{children:[f.jsx("div",{children:f.jsxs(cv,{label:i.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:b,size:"small",children:[f.jsx("option",{value:void 0,children:"Velg periode"}),p.map(c=>f.jsx("option",{value:c.fom,children:DE(c.fom,c.tom)},c.fom))]})}),f.jsx(j,{sixteenPx:!0}),y&&f.jsx(qe,{children:f.jsx(B,{className:ps.datoRad,children:f.jsx(BE,{forhåndsvisPeriodesplitt:n,periode:g,setValgtDato:o})})})]}),f.jsx(wt.Footer,{children:f.jsx(qe,{children:f.jsxs(B,{className:ps.footerRad,children:[f.jsx(T,{children:f.jsx(ae,{size:"small",variant:"primary",onClick:v,disabled:!l,autoFocus:!0,type:"button",children:f.jsx(m,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})}),f.jsx(T,{children:f.jsx(ae,{size:"small",variant:"secondary",onClick:s,disabled:!1,autoFocus:!0,type:"button",children:f.jsx(m,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})})})]})})})]}):null};I.extend(qm);const VE="2023-05-01";function ME(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const GE=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(i=>t.push(i));const s={...r,inntektsforholdListe:t.filter(ME()),tom:n.tom};e.push(s)},LE=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let s=0;s<r.length;s+=1){const i=r[s],l=t.find(o=>o.aktivitetStatus===i.aktivitetStatus&&o.arbeidsgiverId===i.arbeidsgiverId&&o.arbeidsforholdId===i.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==i.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==i.skalRedusereUtbetaling)return!1}return!0},$g=(e,n)=>_u(e,n,!0)>2,KE=(e,n)=>{const r=n.tom,t=e.fom;return I(r).isBefore(I(t))?$g(r,t):$g(t,r)},$E=(e,n,r)=>{if(I(e.fom).isSame(I(VE)))return!1;const t=n[n.length-1],s=Nn(e,r);return s&&!Nn(t,r)||s&&KE(e,t)?!1:LE(e,t)},UE=e=>(n,r)=>n.length===0?(n.push({...r}),n):$E(r,n,e)?(GE(n,r),n):(n.push({...r}),n),Sm=(e,n)=>e.reduce(UE(n),[]);function Pm(e,n){var r;return!Nn(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const Fm=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===pe.ARBEIDSTAKER?r?Pt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===pe.FRILANSER?"Frilanser":e.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===pe.DAGPENGER?"Dagpenger":""},YE=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===pe.ARBEIDSTAKER?r?Pt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===pe.FRILANSER?"Frilanser":e.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},HE="_tilkommetAktivitet_1xjj3_1",CE="_aktivitetContainer_1xjj3_4",zE="_aktivitetTable_1xjj3_7",JE="_separator_1xjj3_12",WE="_aksjonspunktContainer_1xjj3_16",XE="_aksjonspunktContainerLukketAP_1xjj3_21",ZE="_aksjonspunktContainerLukketAP_1xjj3_21",QE="_bruttoInntektContainer_1xjj3_26",eN="_bruttoInntektInput_1xjj3_29",nN="_bruttoInntektCurrency_1xjj3_32",rN="_edited_1xjj3_37",tN="_inntektsmeldingTag_1xjj3_40",sN="_inntektColumn_1xjj3_43",aN="_tittelRad_1xjj3_47",iN="_modalKnapp_1xjj3_50",we={tilkommetAktivitet:HE,aktivitetContainer:CE,aktivitetTable:zE,separator:JE,aksjonspunktContainer:WE,aksjonspunktContainerLukketAP:XE,aksjonspunktContainerLukketAp:ZE,bruttoInntektContainer:QE,bruttoInntektInput:eN,bruttoInntektCurrency:nN,edited:rN,inntektsmeldingTag:tN,inntektColumn:sN,tittelRad:aN,modalKnapp:iN},lN=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},dN=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:s,field:i,arbeidsgiverOpplysningerPerId:l})=>{const o=Ie(),g=J(),k=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${s}.skalRedusereUtbetaling`),p=()=>{switch(i.aktivitetStatus){case pe.ARBEIDSTAKER:return f.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid",values:{br:f.jsx("br",{})}});case pe.FRILANSER:return f.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans",values:{br:f.jsx("br",{})}});case pe.SELVSTENDIG_NAERINGSDRIVENDE:return f.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerNæring"});default:return f.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid"})}},v=()=>i.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):i.aktivitetStatus===pe.FRILANSER?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:YE(i,l)});return f.jsxs(f.Fragment,{children:[f.jsx(Ne,{label:v(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${s}.skalRedusereUtbetaling`,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[X],isTrueOrFalseSelection:!0}),k===!1&&f.jsxs(f.Fragment,{children:[f.jsx(j,{sixteenPx:!0}),f.jsx(Ee,{size:"small",variant:"info",children:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})})]}),k&&f.jsxs(f.Fragment,{children:[f.jsx(j,{sixteenPx:!0}),f.jsx(F,{size:"small",children:f.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),f.jsx(Pe,{header:f.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:p()}),f.jsx(j,{eightPx:!0}),f.jsxs("div",{className:we.bruttoInntektContainer,children:[f.jsx(ce,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${s}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,className:we.bruttoInntektInput,parse:De,validate:[X,sn(178956970)]}),f.jsx("span",{className:we.bruttoInntektCurrency,children:"kr"})]})]})]})},Ug=e=>!!e&&+e>0,oN=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=J(),t=i=>{const l=[];return i.inntektsforholdListe.forEach(o=>{const g=Ug(o.bruttoInntektPrÅr),k=Ug(o.inntektFraInntektsmeldingPrÅr);l.push(f.jsxs(Pn,{children:[f.jsx(ee,{children:f.jsx(E,{size:"small",children:Fm(o,e)})}),f.jsx(ee,{children:f.jsx(E,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(g||k)&&f.jsx(ee,{children:f.jsxs(E,{size:"small",children:[g&&f.jsxs(f.Fragment,{children:[Qt(o.bruttoInntektPrÅr||0),f.jsx(gt,{})]}),k&&!g&&f.jsxs(f.Fragment,{children:[Qt(o.inntektFraInntektsmeldingPrÅr||0),f.jsx(Is,{className:we.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},lN(o)))}),l},s=["BeregningInfoPanel.TilkommetAktivitet.Aktivitet","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling",n.inntektsforholdListe.some(i=>i.bruttoInntektPrÅr)?"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"BeregningInfoPanel.TilkommetAktivitet.TomTekst"].map(i=>f.jsxs(F,{size:"small",children:[f.jsx(m,{id:i})," "]},i));return f.jsx("div",{className:we.aktivitetContainer,children:f.jsx(qn,{headerColumnContent:s,noHover:!0,classNameTable:we.aktivitetTable,children:t(n)})})},$t=e=>!!e&&+e>0,gN=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:s,erAksjonspunktÅpent:i,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:g,avklaringsbehov:k})=>{const{control:p,formState:v}=Ie(),{fields:b}=tn({control:p,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),y=n.inntektsforholdListe.some(N=>$t(N.bruttoInntektPrÅr)||$t(N.inntektFraInntektsmeldingPrÅr)),c=n.inntektsforholdListe.some(N=>!!N.periode),x=["BeregningInfoPanel.TilkommetAktivitet.Aktivitet",y?"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"BeregningInfoPanel.TilkommetAktivitet.TomTekst",c?"BeregningInfoPanel.TilkommetAktivitet.Periode":"BeregningInfoPanel.TilkommetAktivitet.TomTekst"].map(N=>f.jsxs(F,{size:"small",children:[f.jsx(m,{id:N})," "]},N)),A=N=>{const R=[],{inntektsforholdListe:S}=N;return S.forEach(q=>{const P=$t(q.bruttoInntektPrÅr),D=$t(q.inntektFraInntektsmeldingPrÅr);R.push(f.jsxs(Pn,{children:[f.jsx(ee,{children:f.jsx(E,{size:"small",children:Fm(q,o)})}),(P||D||c)&&f.jsx(ee,{className:we.inntektColumn,children:f.jsxs(E,{size:"small",children:[P&&!D&&f.jsxs(f.Fragment,{children:[Qt(q.bruttoInntektPrÅr||0),f.jsx(gt,{})]}),D&&f.jsxs(f.Fragment,{children:[Qt(q.inntektFraInntektsmeldingPrÅr||0),f.jsx(Is,{className:we.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),q.periode&&f.jsx(ee,{className:we.periodeColumn,children:f.jsx(E,{size:"small",children:f.jsx(Ye,{dateStringFom:q.periode.fom,dateStringTom:q.periode.tom})})})]},q.arbeidsgiverId||q.aktivitetStatus))}),R};return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:we.aktivitetContainer,children:f.jsx(qn,{noHover:!0,headerColumnContent:x,classNameTable:we.aktivitetTable,children:A(n)})}),f.jsx(j,{sixteenPx:!0}),f.jsxs("div",{className:i?we.aksjonspunktContainer:we.aksjonspunktContainerLukketAP,children:[b.map((N,R)=>f.jsxs("div",{children:[f.jsx(dN,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:R,field:N,readOnly:s,arbeidsgiverOpplysningerPerId:o},N.id),R<n.inntektsforholdListe.length-1&&f.jsx(j,{fourtyPx:!0})]},N.id)),g&&f.jsxs(f.Fragment,{children:[f.jsx(j,{fourtyPx:!0}),f.jsx(rn,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:s,validate:[X]}),f.jsx(On,{ident:k==null?void 0:k.vurdertAv,date:k==null?void 0:k.vurdertTidspunkt}),f.jsx(j,{sixteenPx:!0}),f.jsx(Fs,{isSubmittable:l,isReadOnly:s,isSubmitting:v.isSubmitting,isDirty:v.isDirty})]})]})]})},uN="_statusOk_1qsx9_1",Yg={statusOk:uN},yi=e=>e?I(e,Fe).format(re):"-",Hg=(e,n)=>!n||n===Be?f.jsx(F,{size:"medium",children:f.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:yi(e)}})}):f.jsx(F,{size:"medium",children:f.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:yi(e),tom:yi(n)}})}),kN=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:s,submittable:i,erAksjonspunktÅpent:l,fields:o})=>{const[g,k]=h.useState([]),[p,v]=h.useState([]),[b,y]=h.useState([]),c=Ie();h.useEffect(()=>{var q,P;const D=(P=(q=e.faktaOmFordeling)==null?void 0:q.vurderNyttInntektsforholdDto)==null?void 0:P.vurderInntektsforholdPerioder;if(D){const _=Sm(D,e.forlengelseperioder);k(_);const H=p.map(L=>L),C=o.map(L=>L.fom);C.filter(L=>!b.includes(L)).forEach(L=>H.push(L)),v(H),y(C)}},[e,o.length]);const x=g.filter(q=>Pm(q,e)),A=e==null?void 0:e.avklaringsbehov.find(q=>q.definisjon===$e.VURDER_NYTT_INNTKTSFRHLD),N=q=>{if(p.includes(q)){const P=p.filter(D=>D!==q);v(P)}else{const P=p.map(D=>D);P.push(q),v(P)}},R=q=>{const P=I(q),D=g.find(_=>!I(_.fom).isAfter(P)&&!I(_.tom).isBefore(P));if(!D)throw new Error(`Finner ikke periode som overlapper med fom ${q}`);return D},S=q=>()=>N(q);return!g||g.length<1?null:f.jsxs(f.Fragment,{children:[f.jsxs(Se,{className:Yg.statusOk,children:[x.map(q=>f.jsxs(Se.Item,{open:p.filter(P=>P===q.fom).length>0,children:[f.jsxs(Se.Header,{onClick:S(q.fom),children:[Hg(q.fom,q.tom)," ",f.jsx(um,{})]}),f.jsx(Se.Content,{children:f.jsx(oN,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:q})})]},q.fom)),o.map((q,P)=>f.jsxs(Se.Item,{open:p.filter(D=>D===q.fom).length>0,children:[f.jsx(Se.Header,{onClick:S(q.fom),children:Hg(q.fom,q.tom)}),f.jsx(Se.Content,{children:f.jsx(gN,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:R(q.fom),formName:r,formFieldIndex:t,periodeFieldIndex:P,readOnly:s,erAksjonspunktÅpent:l,submittable:i,skalViseBegrunnelse:o.length===1,avklaringsbehov:A})})]},q.fom))]}),o.length>1&&f.jsxs("div",{className:Yg.aktivitetContainer,children:[f.jsx(j,{fourtyPx:!0}),f.jsx(rn,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:s,validate:[X]}),f.jsx(On,{ident:A==null?void 0:A.vurdertAv,date:A==null?void 0:A.vurdertTidspunkt}),f.jsx(j,{sixteenPx:!0}),f.jsx(Fs,{isSubmittable:i,isReadOnly:s,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty})]})]})},bi=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),mN=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:s,erAksjonspunktÅpent:i,arbeidsgiverOpplysningerPerId:l})=>{var o,g;const k=J(),[p,v]=h.useState(!1),{control:b,watch:y}=Ie(),{fields:c,remove:x,insert:A}=tn({control:b,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});c.sort((L,M)=>I(L.fom).diff(I(M.fom)));const N=(g=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:g.vurderInntektsforholdPerioder,R=()=>{const L=N==null?void 0:N.flatMap(M=>M.inntektsforholdListe.map(V=>V.aktivitetStatus)).reduce((M,V)=>(M.some(U=>U===V)||M.push(V),M),[]);return(L?L.length:0)>1?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):bi(pe.SELVSTENDIG_NAERINGSDRIVENDE,N)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):bi(pe.FRILANSER,N)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):bi(pe.DAGPENGER,N)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},S=()=>i?f.jsxs(Ee,{size:"small",variant:"warning",children:[f.jsx(se,{size:"xsmall",level:"3",children:R()}),k.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):f.jsxs(f.Fragment,{children:[f.jsxs(F,{size:"small",children:[k.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),R()]}),f.jsx(E,{size:"small",children:k.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),q=(L,M,V,U)=>{const ne=y(`${e}.${r}.perioder.${V}.inntektsforhold.${U}.skalRedusereUtbetaling`),z=y(`${e}.${r}.perioder.${V}.inntektsforhold.${U}.bruttoInntektPrÅr`);return{aktivitetStatus:L.aktivitetStatus,arbeidsgiverIdent:L.arbeidsgiverIdent,arbeidsforholdId:L.arbeidsforholdId,bruttoInntektPrÅr:M?z:void 0,skalRedusereUtbetaling:M?ne:void 0}},P=(L,M,V)=>!I(L).isAfter(I(V))&&!I(M).isBefore(I(V)),D=h.useCallback(L=>{const M=c.find(z=>P(z.fom,z.tom,L));if(!M)throw new Error(`Finner ikke field somme inneholder dato ${L}`);const V=I(L).subtract(1,"day"),U={fom:I(M.fom).format(Fe),tom:V.format(Fe)},ne={fom:I(L).format(Fe),tom:M.tom};return[U,ne]},[c]),_=h.useCallback(L=>{const M=c.find(Re=>P(Re.fom,Re.tom,L));if(!M)throw new Error(`Finner ikke field somme inneholder dato ${L}`);const V=D(L),U=c.indexOf(M),ne=M.inntektsforhold||[],z={inntektsforhold:ne.map((Re,_e)=>q(Re,!0,U,_e)),fom:V[0].fom,tom:V[0].tom},ie={inntektsforhold:ne.map((Re,_e)=>q(Re,!1,U,_e)),fom:V[1].fom,tom:V[1].tom};x(U),A(U,[z,ie])},[c]),H=h.useCallback(()=>{v(!0)},[p]),C=h.useCallback(()=>{v(!1)},[p]);return f.jsxs(f.Fragment,{children:[S(),!!N&&i&&f.jsxs(f.Fragment,{children:[f.jsx(j,{eightPx:!0}),f.jsx(Ee,{size:"small",variant:"info",title:"",children:k.formatMessage({id:"TilkommetAktivitet.AksjonspunktAlert"})})]}),f.jsx(j,{fourtyPx:!0}),f.jsx(qe,{children:f.jsxs(B,{className:we.tittelRad,children:[f.jsx(T,{children:f.jsx(se,{size:"small",level:"3",children:k.formatMessage({id:"TilkommetAktivitet.Heading"})})}),f.jsx(T,{className:we.modalKnapp,children:f.jsx(ae,{variant:"tertiary",loading:!1,disabled:t,onClick:H,size:"small",type:"button",icon:f.jsx(Fv,{height:32,width:32}),children:k.formatMessage({id:"TilkommetAktivitet.Modal.Knapp"})})})]})}),p&&f.jsx(wE,{fields:c,forhåndsvisPeriodesplitt:D,lukkModal:C,skalViseModal:p,utførPeriodesplitt:_}),f.jsx(kN,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:c,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:i,submittable:s})]})};I.extend(qm);const{VURDER_NYTT_INNTKTSFRHLD:wi}=$e,nt="VURDER_TILKOMMET_AKTIVITET_FORM",Bm=e=>{const n=e.find(r=>r.definisjon===wi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${wi}`);return n},pN=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function vN(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Sm(t,e.forlengelseperioder).filter(s=>!Pm(s,e))}const fN=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:K(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),yN=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>fN(n))}),bN=(e,n)=>{const r=Bm(e.avklaringsbehov),t=vN(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:xt(n,e.vilkårsperiodeFom).periode,perioder:t.map(s=>yN(s))}},cN=(e,n)=>({[`${nt}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===$e.VURDER_NYTT_INNTKTSFRHLD)).map(r=>bN(r,n))}),jN=(e,n)=>{const r=I(e.fom).isBetween(n.fom,n.tom,"day","[]")||I(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=I(n.fom).isBetween(e.fom,e.tom,"day","[]")||I(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},hN=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),AN=(e,n)=>{var r,t;const s=e.perioder,i=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>s.filter(o=>jN(o,l)).map(o=>{const g=o.inntektsforhold.filter(k=>hN(k,l)).map(k=>{const p=!!k.skalRedusereUtbetaling,v=p?fe(k.bruttoInntektPrÅr):void 0;return{aktivitetStatus:k.aktivitetStatus,arbeidsgiverId:k.arbeidsgiverIdent,arbeidsforholdId:k.arbeidsforholdId,skalRedusereUtbetaling:p,bruttoInntektPrÅr:v}});return{fom:I(o.fom).isBefore(I(l.fom))?l.fom:o.fom,tom:I(o.tom).isAfter(I(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:g}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:i}},IN=(e,n,r)=>{const t=e[nt].filter(s=>yr(r,s.periode.fom)).map(s=>AN(s,pN(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:wi}},TN=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:s,readOnly:i,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:g,setTilkommetAktivitetFormIsDirty:k})=>{const p=ze({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:cN(t,o)}),{formState:{dirtyFields:v,isSubmitted:b,errors:y,isDirty:c},trigger:x,control:A}=p;h.useEffect(()=>{k(c)},[c]),h.useEffect(()=>{var P;b&&(P=v[nt])!=null&&P[e]&&x()},[e]);const{fields:N}=tn({name:nt,control:A}),R=t[e],S=Bm(R.avklaringsbehov),q=S?Fl(S.status):!1;return f.jsx(Zi,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:f.jsx("div",{className:we.tilkommetAktivitet,children:f.jsx(Je,{formMethods:p,onSubmit:P=>{Object.keys(y).length===0&&s(IN(P,t,o))},setDataOnUnmount:r,children:N.map((P,D)=>{const _=t.findIndex(H=>H.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp);return f.jsx("div",{style:{display:_===e?"block":"none"},children:f.jsx(mN,{formName:nt,beregningsgrunnlag:t[_],formFieldIndex:D,readOnly:i||!yr(o,t[_].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:q,arbeidsgiverOpplysningerPerId:g})},P.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:RN,VURDER_REFUSJON_BERGRUNN:EN,VURDER_NYTT_INNTKTSFRHLD:NN}=$e,xN=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,qN=e=>!!(e&&e.refusjonTilVurdering),SN=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,ci=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,PN=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:s,kodeverkSamling:i,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:k})=>{const[p,v]=h.useState(!1),[b,y]=h.useState(!1),[c,x]=h.useState(!1),A=ci(t[e].avklaringsbehov,RN),N=ci(t[e].avklaringsbehov,EN),R=ci(t[e].avklaringsbehov,NN)&&SN(t[e]),S=A&&xN(t[e]),q=N&&qN(t[e]);return f.jsxs(f.Fragment,{children:[R&&f.jsxs(f.Fragment,{children:[f.jsx(TN,{aktivtBeregningsgrunnlagIndeks:e,formData:g,setFormData:k,submittable:l&&!b&&!c,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:s,setTilkommetAktivitetFormIsDirty:v}),f.jsx(j,{fourtyPx:!0})]}),q&&f.jsxs(f.Fragment,{children:[f.jsx(TE,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!p&&!c,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:k,vilkarperioder:s,setRefusjonFormIsDirty:y}),f.jsx(j,{fourtyPx:!0})]}),S&&f.jsx(nE,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!p&&!b,readOnly:n,submitCallback:r,kodeverkSamling:i,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:k,vilkårsperioder:s,setFordelingFormIsDirty:x})]})},FN=Ue(Bl),{FORDEL_BEREGNINGSGRUNNLAG:BN,VURDER_REFUSJON_BERGRUNN:_N,VURDER_NYTT_INNTKTSFRHLD:ON}=$e,DN=(e,n)=>{const r=xt(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:s}=r.periode;return s!==null?`${I(t).format(re)} - ${I(s).format(re)}`:`${I(t).format(re)} - `}return`${I(e.vilkårsperiodeFom).format(re)}`},_m=e=>e.avklaringsbehov.some(n=>n.definisjon===_N||n.definisjon===BN||n.definisjon===ON),wN=(e,n)=>_m(e)&&yr(n,e.vilkårsperiodeFom),VN=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:s,submittable:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const k=n.filter(y=>_m(y)),[p,v]=h.useState(0);if(k.length===0)return null;const b=k.length>1;return f.jsxs(Ke,{value:FN,children:[b&&f.jsx(Ir,{value:p.toString(),onChange:y=>v(Number(y)),children:f.jsx(Ir.List,{children:k.map((y,c)=>f.jsx(Ir.Tab,{value:c.toString(),label:DN(y,e.perioder),className:wN(y,e.perioder)?"harAksjonspunkt":""},y.skjaeringstidspunktBeregning))})}),f.jsx(j,{eightPx:!0}),f.jsx(PN,{aktivtBeregningsgrunnlagIndeks:p,kodeverkSamling:r,submitCallback:t,readOnly:s,beregningsgrunnlagListe:k,vilkarperioder:e.perioder,submittable:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})]})},Cg=[de.FORDEL_BEREGNINGSGRUNNLAG,de.VURDER_REFUSJON_BERGRUNN],MN=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=ur(Cg),{behandling:t}=h.use(_n),s=Bn(t),{data:i,isFetching:l}=Fn(s.beregningsgrunnlagOptions(t));return a.jsx(kr,{...n,standardPanelProps:r,faktaPanelKode:gr.FORDELING,faktaPanelMenyTekst:J().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Cg.some(o=>As(o,t.aksjonspunkt)),children:l?a.jsx(Sn,{}):a.jsx(GN,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagVilkår:UN(r.behandling.vilkår,i),beregningsgrunnlagListe:YN(i),submitCallback:KN(r.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:r.readOnly,submittable:r.submittable})})},GN=e=>{const{formData:n,setFormData:r}=$n();return a.jsx(VN,{...e,formData:n,setFormData:r})},LN=e=>{switch(e){case $e.FORDEL_BEREGNINGSGRUNNLAG:return de.FORDEL_BEREGNINGSGRUNNLAG;case $e.VURDER_REFUSJON_BERGRUNN:return de.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},KN=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:LN(s.kode),...s.grunnlag[0]}));return e(t)},$N=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),UN=(e,n)=>{if(!e)return null;const r=e.find(s=>s.vilkarType&&s.vilkarType===ar.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[$N(n,r)]}},YN=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];MN.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const wn=({tittel:e,children:n})=>a.jsxs(nn,{children:[a.jsx(F,{size:"medium",children:e}),n]});wn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Om=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:n})=>{var t;const r=J();return a.jsxs(wn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[a.jsxs("span",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[n])==null?void 0:t.navn)??"-"]}),a.jsxs("span",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};Om.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Dm=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const s=J(),i=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(k=>e.tilknyttedeBehandlingIder.includes(k.uuid)),o=(()=>{const k=l.length;return i&&k>1?a.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):i?a.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):k===0?a.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):a.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),g=[...l].sort((k,p)=>new Date(k.opprettet).getTime()-new Date(p.opprettet).getTime());return a.jsxs(wn,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,a.jsx(Q,{children:g.map(k=>{var p;return a.jsx(Q.Item,{children:a.jsxs(nn,{children:[a.jsx("span",{children:(p=t.BehandlingType.find(({kode:v})=>v===k.type))==null?void 0:p.navn}),a.jsxs("span",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",a.jsx(es,{dateTimeString:k.opprettet,separator:"kl"})]}),k.avsluttet?a.jsxs("span",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",a.jsx(es,{dateTimeString:k.avsluttet,separator:"kl"})]}):null]})},k.uuid)})})]})};Dm.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const HN=e=>{const n=e.aktiveNaturalytelser.reduce((t,s)=>{const i=s.type;return i in t?{...t,[i]:[...t[i],s]}:{...t,[i]:[s]}},{}),r={};return Object.entries(n).forEach(([t,s])=>{const i=s.sort((l,o)=>Nv({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=i.flatMap((l,o,g)=>{const k=g[o+1],p=l.periode.tomDato,v=k==null?void 0:k.periode.fomDato;return p===Be?[]:[{...l,periode:{fomDato:ns(p,1),tomDato:v?ns(v,-1):Be}}]})}),r},wm=({inntektsmelding:e,alleKodeverk:n})=>{const r=J(),t=HN(e);return a.jsx(wn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?a.jsx("span",{children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):a.jsx(nn,{children:Object.entries(t).map(([s,i])=>{var l;return a.jsxs(nn,{children:[a.jsx("span",{children:(l=n[un.NATURAL_YTELSE_TYPE].find(o=>o.kode===s))==null?void 0:l.navn}),a.jsx("ul",{children:i.map(o=>a.jsxs(Y.Fragment,{children:[a.jsxs("li",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",a.jsx(Ae,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Be&&a.jsxs("li",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",a.jsx(Ae,{dateString:o.periode.tomDato})]}),a.jsxs("li",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",K(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},s)})})})};wm.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Vm=({kildeSystem:e})=>{const n=J(),r=h.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return a.jsx(wn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};Vm.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Mm=({inntektsmelding:e})=>{const n=J();return a.jsxs(wn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[a.jsxs("span",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),a.jsxs("span",{children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Mm.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Gm=({inntektsmelding:e,fagsak:n})=>a.jsx(ae,{type:"button",onClick:()=>{window.open(rl(n.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:a.jsx(Tv,{}),children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Gm.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Lm=({inntektsmelding:e})=>{const n=J();if(e.refusjonsperioder.length===0)return a.jsx(wn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:a.jsx("span",{children:e.refusjonPrMnd?K(e.refusjonPrMnd):a.jsx(m,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,s)=>new Date(t.fom).getTime()-new Date(s.fom).getTime());return a.jsxs(nn,{gap:"0",children:[a.jsx("span",{children:"Krever refusjon"}),a.jsx("span",{children:K(e.refusjonPrMnd??0)}),a.jsx("span",{children:"Endringer i perioden:"}),a.jsx("ul",{children:r.map(t=>a.jsx("li",{children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:K(t.refusjonsbeløp.verdi),fom:a.jsx(Ae,{dateString:t.fom})}})},t.indexKey))})]})};Lm.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Km=({startDatoPermisjon:e,ytelse:n})=>{const r=J();return e?a.jsxs(wn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[a.jsx("span",{children:e?a.jsx(Ae,{dateString:e}):"-"}),a.jsx("span",{children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Km.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const CN="_behandlingCircleIngen_131kr_1",zN="_behandlingCircleDenne_131kr_5",JN="_behandlingCircleAndre_131kr_9",WN="_container_131kr_13",XN="_ingenInntektsmeldinger_131kr_19",rt={behandlingCircleIngen:CN,behandlingCircleDenne:zN,behandlingCircleAndre:JN,container:WN,ingenInntektsmeldinger:XN},$m=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:s,behandling:i}=xn(),l=J();return a.jsxs(nn,{gap:"4",className:rt.container,children:[a.jsxs(te,{gap:"4",justify:"space-between",align:"start",children:[a.jsxs(se,{level:"3",size:"small",children:[a.jsx(m,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",a.jsx(es,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),a.jsx(Gm,{fagsak:s,inntektsmelding:e})]}),a.jsxs(Dv,{columns:3,gap:"8",children:[a.jsx(Om,{arbeidsgiverOpplysningerPerId:n,arbeidsgiverIdent:e.arbeidsgiverIdent}),a.jsx(wn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:a.jsx("span",{children:K(e.inntektPrMnd)})}),a.jsx(Dm,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:i}),a.jsx(Mm,{inntektsmelding:e}),a.jsx(Km,{ytelse:tt(t,un.FAGSAK_YTELSE,s.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),a.jsx(Vm,{kildeSystem:e.kildeSystem}),a.jsx(wm,{inntektsmelding:e,alleKodeverk:t}),a.jsx(Lm,{inntektsmelding:e})]})]})};$m.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ZN={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},zg=Ue(ZN),Um=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=xn(),[s,i]=h.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=k=>{i(s&&k===s.orderBy&&s.direction==="descending"?void 0:{orderBy:k,direction:s&&k===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},o=s?QN({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:t}):r,g=(s==null?void 0:s.direction)==="ascending"?o:o.toReversed();return g.length===0?a.jsx(Ke,{value:zg,children:a.jsxs(te,{gap:"2",justify:"center",align:"center",className:rt.ingenInntektsmeldinger,children:[a.jsx(E,{children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.ingen"})}),a.jsx(Wv,{})]})}):a.jsx(Ke,{value:zg,children:a.jsxs(w,{sort:s,onSortChange:k=>l(k),children:[a.jsx(w.Header,{children:a.jsxs(w.Row,{children:[a.jsx(w.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),a.jsx(w.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),a.jsx(w.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),a.jsx(w.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),a.jsx(w.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),a.jsx(w.HeaderCell,{})]})}),a.jsx(w.Body,{children:g.map(k=>{var p;return a.jsxs(w.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:a.jsx($m,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:k}),children:[a.jsx(w.DataCell,{children:a.jsx(es,{dateTimeString:k.innsendingstidspunkt,separator:"kl"})}),a.jsx(w.DataCell,{children:((p=e[k.arbeidsgiverIdent])==null?void 0:p.navn)??"-"}),a.jsx(w.DataCell,{children:k.startDatoPermisjon?a.jsx(Ae,{dateString:k.startDatoPermisjon}):"-"}),a.jsx(w.DataCell,{children:K(k.inntektPrMnd)}),a.jsx(w.DataCell,{children:a.jsx(ex,{behandling:t,inntektsmelding:k})})]},`${k.journalpostId}-${k.internArbeidsforholdId}`)})})]})})},QN=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((s,i)=>{var g,k;const l=(g=n[s.arbeidsgiverIdent])==null?void 0:g.navn,o=(k=n[i.arbeidsgiverIdent])==null?void 0:k.navn;return ji(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((s,i)=>{const l=Vi({behandling:t,inntektsmelding:s}),o=Vi({behandling:t,inntektsmelding:i});return ji(l,o)}):e.slice().sort((s,i)=>{const l=s[r],o=i[r];return ji(l,o)}),ji=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,ex=({behandling:e,inntektsmelding:n})=>{const r=Vi({behandling:e,inntektsmelding:n});return r==="DENNE"?a.jsxs(te,{gap:"1",align:"center",children:[a.jsx(Ms,{className:rt.behandlingCircleDenne}),a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?a.jsxs(te,{gap:"1",align:"center",children:[a.jsx(Ms,{className:rt.behandlingCircleAndre}),a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):a.jsxs(te,{gap:"1",align:"center",children:[a.jsx(Ms,{className:rt.behandlingCircleIngen}),a.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Vi=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Um.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const nx=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),{behandling:t,alleBehandlinger:s}=h.use(_n),i=ur(),l=Bn(t),{data:o}=Fn(l.inntektsmeldingerOptions(t));return a.jsx(kr,{...n,standardPanelProps:i,faktaPanelKode:gr.INNTEKTSMELDINGER,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:o?a.jsx(Um,{inntektsmeldinger:o,alleBehandlinger:s,arbeidsgiverOpplysningerPerId:e}):a.jsx(Sn,{})})};nx.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},registrerFaktaPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FaktaPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const rx=e=>ns(e,1),Ym=(e,n)=>I(rx(e)).isSame(n)?n:e,Hm=(e,n,r)=>{if(!(!n||!r))return I(e).isBefore(n)?n:Ym(e,r)},Cm=(e,n,r)=>{if(!(!n||!r))return I(e).isAfter(r)?r:Ym(e,n)},tx=[ye.SYKEPENGER,ye.FORELDREPENGER,ye.PLEIEPENGER,ye.SVANGERSKAPSPENGER,ye.UTENLANDSK_ARBEIDSFORHOLD],Wt=(e,...n)=>!!e&&n.includes(e),sx=e=>e?I(e,Fe).format(re):"-",ax=e=>Wt(e,ye.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",ix=(e,n)=>{const r=n[e];if(!e||!r)return"-";if(r.erPrivatPerson&&r.fødselsdato){const t=sx(r.fødselsdato);return`${r.navn} (${t})`}return r.identifikator?`${r.navn} (${r.identifikator})`:r.navn},lx=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",zm=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:s,ferdiglignetNæring:i})=>a.jsxs(nn,{gap:"4",children:[Wt(e,ye.ARBEID,ye.NARING,...tx)&&a.jsxs(te,{gap:"4",children:[a.jsxs("div",{children:[a.jsx(j,{eightPx:!0}),a.jsx(F,{size:"small",children:a.jsx(m,{id:ax(e)})}),a.jsx(E,{size:"small",children:ix(n,r)})]}),Wt(e,ye.ARBEID)&&a.jsxs("div",{children:[a.jsx(j,{eightPx:!0}),a.jsx(F,{size:"small",children:a.jsx(m,{id:"ActivityPanel.Stillingsandel"})}),a.jsx(E,{size:"small",children:t})]})]}),Wt(e,ye.NARING)&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ActivityPanel.Registreringsdato"})}),a.jsx(E,{size:"small",children:s?I(s).format(re):"-"})]}),a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:lx(i)})}),i.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>a.jsxs(te,{gap:"5",children:[a.jsx(E,{size:"small",children:l.år}),a.jsx(E,{size:"small",children:K(l.beløp)})]},l.år))]})]})]});zm.__docgenInfo={description:`ValgtAktivitetSubForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const dx="_explanationTextarea_18tdb_1",ox="_panel_18tdb_5",gx="_colMargin_18tdb_9",ux="_margin_18tdb_13",kx="_fix_18tdb_17",Ut={explanationTextarea:dx,panel:ox,colMargin:gx,margin:ux,fix:kx},mx=hn(3),px=An(1500),Xt=(e,n,r)=>e?!!n&&!r:!0,vx=(e,n)=>{const r=mv(e,n);return r?r.months>=1?a.jsx(m,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):a.jsx(m,{id:"ActivityPanel.Days",values:{days:r.days}}):a.jsx("span",{})},fx=(e,n,r,t)=>r||Xt(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",Jm=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:s,harAksjonspunkt:i,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:g,ferdiglignetNæring:k,oppdaterAktivitet:p,valgteFormValues:v,fastsattOpptjening:b,lukkPeriode:y})=>{var C;const c=J(),x=ze({defaultValues:v}),{arbeidsgiverReferanse:A,erGodkjent:N,erEndret:R,aktivitetType:S,stillingsandel:q,naringRegistreringsdato:P}=g,D=Hm(g.opptjeningFom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),_=Cm(g.opptjeningTom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),H=h.useCallback((...L)=>a.jsx("b",{children:L}),[]);return a.jsx(Je,{formMethods:x,onSubmit:L=>p(L),children:a.jsxs(Fu,{className:Ut.panel,merknaderFraBeslutter:l[de.VURDER_PERIODER_MED_OPPTJENING],children:[a.jsxs(nn,{gap:"2",children:[a.jsxs(te,{justify:"space-between",children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"ActivityPanel.Details"})}),a.jsxs(te,{gap:"2",children:[a.jsx(ae,{className:Ut.margin,size:"xsmall",icon:a.jsx(js,{"aria-hidden":!0}),onClick:s,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.prevPeriod"}),children:a.jsx(m,{id:"Timeline.prevPeriodShort"})}),a.jsx(ae,{className:Ut.margin,size:"xsmall",icon:a.jsx(hs,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:a.jsx(m,{id:"Timeline.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(rr,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),a.jsxs(te,{children:[a.jsxs("div",{className:Ut.colMargin,children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ActivityPanel.Period"})}),D&&_&&a.jsxs(te,{gap:"2",children:[a.jsx(E,{size:"small",children:`${I(D).format(re)} - ${I(_).format(re)}`}),a.jsx(E,{size:"small",children:vx(D,_)})]})]}),a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ActivityPanel.Activity"})}),a.jsx(E,{size:"small",children:(C=n.find(L=>L.kode===S))==null?void 0:C.navn})]})]})]}),a.jsx(j,{eightPx:!0}),a.jsx(zm,{valgtAktivitetstype:S,arbeidsgiverReferanse:A,arbeidsgiverOpplysningerPerId:o,stillingsandel:q,naringRegistreringsdato:P,ferdiglignetNæring:k}),!Xt(i,N,R)&&a.jsxs(a.Fragment,{children:[a.jsx(j,{twentyPx:!0}),a.jsx(Ne,{name:"erGodkjent",hideLegend:!0,validate:[X],isReadOnly:e,isEdited:R,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:c.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:a.jsx(m,{id:"ActivityPanel.IkkeGodkjent",values:{b:H}}),value:"false"}]})]}),a.jsx(j,{sixteenPx:!0}),a.jsx(rn,{name:"begrunnelse",label:a.jsx(m,{id:fx(N,R,e,i)}),validate:[X,mx,px,jn],maxLength:1500,readOnly:e||Xt(i,N,R)}),!Xt(i,N,R)&&a.jsxs(a.Fragment,{children:[a.jsx(j,{sixteenPx:!0}),a.jsxs(te,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"primary",disabled:!x.formState.isDirty,children:a.jsx(m,{id:"ActivityPanel.Oppdater"})}),a.jsx(ae,{size:"small",variant:"secondary",onClick:r,type:"button",children:a.jsx(m,{id:"ActivityPanel.Avbryt"})})]})]})]})})};Jm.__docgenInfo={description:`ValgtAktivitetForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const yx=e=>e===!1?"danger":e===!0?"success":"warning",bx={[ye.ARBEID]:a.jsx($r,{width:20,height:20}),[ye.AAP]:a.jsx(Kr,{width:20,height:20}),[ye.DAGPENGER]:a.jsx(Kr,{width:20,height:20}),[ye.FORELDREPENGER]:a.jsx(wv,{width:20,height:20}),[ye.FRILANS]:a.jsx($r,{width:20,height:20}),[ye.MILITAR_ELLER_SIVILTJENESTE]:a.jsx($r,{width:20,height:20}),[ye.NARING]:a.jsx($r,{width:20,height:20}),[ye.OMSORGSPENGER]:a.jsx(Kr,{width:20,height:20}),[ye.OPPLARINGSPENGER]:a.jsx(Kr,{width:20,height:20}),[ye.PLEIEPENGER]:a.jsx(Kr,{width:20,height:20}),[ye.SVANGERSKAPSPENGER]:a.jsx(lf,{width:20,height:20}),[ye.SYKEPENGER]:a.jsx(gf,{width:20,height:20}),[ye.UTENLANDSK_ARBEIDSFORHOLD]:a.jsx(ef,{width:20,height:20}),[ye.ETTERLONN_SLUTTPAKKE]:a.jsx($r,{width:20,height:20})},cx={danger:a.jsx(Yu,{}),success:a.jsx(sl,{}),warning:a.jsx(Bv,{})},jx=(e,n,r,t,s)=>e.map((i,l)=>{var o;return{id:l,start:I(Hm(i.opptjeningFom,t,s)).toDate(),end:I(Cm(i.opptjeningTom,t,s)).toDate(),radId:(o=r.find(g=>g.aktivitetTypeKode===i.aktivitetType&&g.arbeidsforholdRef===i.arbeidsforholdRef&&g.arbeidsgiverReferanse===i.arbeidsgiverReferanse))==null?void 0:o.id,status:yx(n[l].erGodkjent)}}),hx=(e,n,r)=>e.reduce((s,i)=>(s.some(o=>o.aktivitetType===i.aktivitetType&&o.arbeidsforholdRef===i.arbeidsforholdRef&&o.arbeidsgiverReferanse===i.arbeidsgiverReferanse)||s.push(i),s),[]).map((s,i)=>{const l=n.find(g=>g.kode===s.aktivitetType),o=(l==null?void 0:l.kode)===ye.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:i+1,label:o||"",aktivitetTypeKode:s.aktivitetType,arbeidsforholdRef:s.arbeidsforholdRef,arbeidsgiverReferanse:s.arbeidsgiverReferanse}}),Wm=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:s,setValgtAktivitetIndex:i})=>{const l=J(),o=r==null?void 0:r.opptjeningFom,g=r==null?void 0:r.opptjeningTom,k=h.useMemo(()=>hx(e,s,l),[e]),p=h.useMemo(()=>jx(e,n,k,o,g),[n]),v=h.useCallback(b=>{const y=p.find(c=>c.id===b);y&&i(y.id)},[p,i]);return!o||!g?null:a.jsxs(Me,{startDate:I(o).subtract(1,"months").toDate(),endDate:I(g).add(10,"days").toDate(),children:[a.jsxs(Me.Pin,{date:I(o).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"OpptjeningTidslinje.StartDato"})}),a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:o})})]}),a.jsxs(Me.Pin,{date:I(g).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"OpptjeningTidslinje.SluttDato"})}),a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:g})})]}),k.map(b=>a.jsx(Me.Row,{label:b.label,icon:bx[b.aktivitetTypeKode],children:p.filter(y=>y.radId===b.id).map(y=>a.jsx(Me.Period,{start:y.start,end:y.end,status:y.status,icon:cx[y.status],onSelectPeriod:()=>v(y.id),isActive:t===y.id,statusLabel:b.label},y.id))},b.id))]})};Wm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const Ax="_container_ivkzi_1",Ix="_info_ivkzi_4",Tx="_alertstripe__tekst_ivkzi_7",Rx="_alertstripe__tekst_ivkzi_7",Ex="_pushRight_ivkzi_10",Nx={container:Ax,info:Ix,alertstripe__tekst:Tx,alertstripeTekst:Rx,pushRight:Ex},xx=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(a.jsx(m,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(a.jsx(m,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(a.jsx(m,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},qx=e=>I(e).add(1,"days").format(Fe),Sx=(e,n)=>[...e].sort((r,t)=>{var l,o;const s=(l=n.find(g=>g.kode===r.aktivitetType))==null?void 0:l.navn,i=(o=n.find(g=>g.kode===t.aktivitetType))==null?void 0:o.navn;return s&&i?s.localeCompare(i):0}),Jg=e=>ns(e,1),Px=(e,n)=>n?e.filter(r=>I(n.opptjeningFom).isBefore(Jg(r.opptjeningTom))).filter(r=>I(r.opptjeningFom).isBefore(Jg(n.opptjeningTom))):[],Xm=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:s,alleMerknaderFraBeslutter:i,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:g,alleKodeverk:k}=xn(),p=s.length>0,v=k[un.OPPTJENING_AKTIVITET_TYPE],b=e&&r?Sx(Px(e,r),v):[],y=b.map(z=>({erGodkjent:z.erGodkjent,begrunnelse:z.begrunnelse})),{formData:c,setFormData:x}=$n(),[A,N]=h.useState(c||y),R=b.findIndex(z=>z.erGodkjent===void 0),S=b.length>0?0:void 0,[q,P]=h.useState(R!==-1?R:S),[D,_]=h.useState(!1);h.useEffect(()=>()=>{x(A)},[A]),h.useEffect(()=>{const z=A.findIndex(ie=>ie.erGodkjent===void 0);P(z!==-1?z:void 0)},[A]);const H=()=>{_(!0);const z=b.map((ie,Re)=>({arbeidsforholdRef:ie.arbeidsforholdRef,arbeidsgiverReferanse:ie.arbeidsgiverReferanse,opptjeningFom:ie.opptjeningFom,opptjeningTom:ie.opptjeningTom,aktivitetType:ie.aktivitetType,erGodkjent:A[Re].erGodkjent,begrunnelse:A[Re].begrunnelse})).filter(ie=>ie.begrunnelse);o({opptjeningsaktiviteter:z,kode:de.VURDER_PERIODER_MED_OPPTJENING}).then(()=>_(!1))},C=()=>{q!==void 0&&q<b.length-1&&P(q+1)},L=()=>{q!==void 0&&q>0&&P(q-1)},M=z=>{q!==void 0&&N(ie=>Object.assign([],ie,{[q]:z}))},V=()=>P(void 0),U=()=>{P(void 0)},ne=A.some(z=>z.erGodkjent===null||z.erGodkjent===void 0);return a.jsxs("div",{className:Nx.container,children:[p&&a.jsxs(a.Fragment,{children:[l&&a.jsx(or,{children:xx(b)}),a.jsx(j,{twentyPx:!0})]}),a.jsx(F,{size:"small",children:a.jsx(m,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:qx(r==null?void 0:r.opptjeningTom)})}),a.jsx(j,{twentyPx:!0}),a.jsx(Wm,{opptjeningPerioder:b,formVerdierForAlleAktiviteter:A,opptjeningAktivitetTypes:v,setValgtAktivitetIndex:P,valgtAktivitetIndex:q,fastsattOpptjening:r}),a.jsx(j,{fourtyPx:!0}),q!==void 0&&a.jsxs(a.Fragment,{children:[a.jsx(Jm,{valgtOpptjeningAktivitet:b[q],valgteFormValues:A[q],readOnly:g,opptjeningAktivitetTyper:v,avbrytAktivitet:V,oppdaterAktivitet:M,fastsattOpptjening:r,velgNesteAktivitet:C,velgForrigeAktivitet:L,harAksjonspunkt:p,alleMerknaderFraBeslutter:i,alleKodeverk:k,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:U},q),a.jsx(j,{twentyPx:!0})]}),p&&b.length>0&&a.jsx(ae,{size:"small",variant:"primary",onClick:H,disabled:q!==void 0||D||g||ne,loading:D,type:"button",children:a.jsx(m,{id:"OpptjeningFaktaForm.Confirm"})})]})};Xm.__docgenInfo={description:`OpptjeningFaktaPanel

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const Fx={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},Bx=Ue(Fx),Zm=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,s=(e==null?void 0:e.ferdiglignetNæring)||[];return a.jsx(Ke,{value:Bx,children:a.jsx(Xm,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:s})})};Zm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const _x=[de.VURDER_PERIODER_MED_OPPTJENING],Ox=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),{behandling:t}=h.use(_n),s=ur(_x),i=Bn(t),{data:l,isFetching:o}=Fn(i.opptjeningOptions(t));return a.jsx(kr,{...n,standardPanelProps:s,faktaPanelKode:gr.OPPTJENINGSVILKARET,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:t.vilkår.some(g=>g.vilkarType===ar.OPPTJENINGSVILKARET)&&t.vilkår.some(g=>g.vilkarType===ar.MEDLEMSKAPSVILKARET&&g.vilkarStatus===Hu.OPPFYLT),children:o?a.jsx(Sn,{}):a.jsx(Zm,{opptjening:l,arbeidsgiverOpplysningerPerId:e})})};Ox.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var Mi=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Mi||{});const Dx="_boks_kspkv_1",wx="_aksjonspunkt_kspkv_9",Vx="_harBorderTop_kspkv_13",Qm={boks:Dx,aksjonspunkt:wx,harBorderTop:Vx},Mx=Gu.bind(Qm),ep=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>a.jsx("div",{className:Mx(Qm.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});ep.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const Gx="_inline_1gq7u_1",Lx="_topPadding_1gq7u_5",Kx="_phoneIcon_1gq7u_9",$x="_docIcon_1gq7u_15",br={inline:Gx,topPadding:Lx,phoneIcon:Kx,docIcon:$x},np=({saksnummer:e,inntektsmelding:n})=>a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),a.jsxs(qe,{children:[a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})})}),a.jsx(T,{className:br.topPadding,children:a.jsx(E,{size:"small",children:K(n.inntektPrMnd)})})]}),a.jsx(j,{eightPx:!0}),a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})})}),a.jsx(T,{className:br.topPadding,children:a.jsx(E,{size:"small",children:a.jsx(m,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})})]}),a.jsx(j,{eightPx:!0}),n.refusjonPrMnd&&a.jsxs(a.Fragment,{children:[a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})})}),a.jsx(T,{className:br.topPadding,children:a.jsx(E,{size:"small",children:K(n.refusjonPrMnd)})})]}),a.jsx(j,{eightPx:!0})]}),a.jsxs(ut,{href:rl(e,n.journalpostId,n.dokumentId),target:"_blank",children:[a.jsx("span",{children:a.jsx(E,{size:"small",className:br.inline,children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),a.jsx(zu,{className:br.docIcon})]}),a.jsx(j,{sixteenPx:!0}),a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(Ju,{className:br.phoneIcon})}),a.jsxs(T,{children:[a.jsx(B,{children:a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})})})}),a.jsx(B,{children:a.jsx(T,{children:a.jsx(ke,{children:n.kontaktpersonNavn})})}),a.jsx(B,{children:a.jsx(T,{children:a.jsx(ke,{children:a.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})})})]})]})]}),a.jsx(j,{thirtyTwoPx:!0})]});np.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ux="_maanedBredde_pqnhm_1",Yx="_aarBredde_pqnhm_5",Hx="_belopBredde_pqnhm_9",Cx="_inline_pqnhm_13",zx="_arrow_pqnhm_17",cr={maanedBredde:Ux,aarBredde:Yx,belopBredde:Hx,inline:Cx,arrow:zx},Jx=(e,n)=>{const t=I(e).startOf("month"),s=t.subtract(12,"month"),i=[];for(let l=t;l.isAfter(s);l=l.subtract(1,"month")){const o=l.format(Fe),g=n.find(k=>I(k.fom).startOf("month").format(Fe)===o);i.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return i},rp=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=h.useState(!1),s=h.useMemo(()=>Jx(n,e),[e]);return a.jsxs(a.Fragment,{children:[e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsposterPanel.Inntekter"})}),a.jsx(qe,{children:s.filter((i,l)=>r?!0:l<3).map(i=>a.jsxs(B,{children:[a.jsx(T,{className:cr.maanedBredde,children:a.jsx(E,{size:"small",children:a.jsx(m,{id:`InntektsposterPanel.${I(i.fom).month()+1}`})})}),a.jsx(T,{className:cr.aarBredde,children:a.jsx(E,{size:"small",children:I(i.fom).year()})}),a.jsx(T,{className:cr.belopBredde,children:a.jsx(Rr,{children:a.jsx(E,{size:"small",children:K(i.beløp)})})})]},i.fom))}),a.jsxs(ut,{onClick:i=>{i.preventDefault(),t(!r)},href:"",children:[a.jsx("span",{children:a.jsx(E,{size:"small",className:cr.inline,children:a.jsx(m,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?a.jsx(zi,{className:cr.arrow}):a.jsx(fs,{className:cr.arrow})]})]}),e.length===0&&a.jsx(F,{size:"small",children:a.jsx(m,{id:"InntektsposterPanel.IngenInntekt"})})]})};rp.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const Wx="_body_hrlo3_1",Xx="_hjelpetekst_hrlo3_5",Zx="_firstCol_hrlo3_9",Qx="_secCol_hrlo3_13",eq="_thirdCol_hrlo3_17",nq="_fourthCol_hrlo3_21",rq="_topPadding_hrlo3_25",tq="_image_hrlo3_29",sq="_hjelpetekstInnhold_hrlo3_33",aq="_exclamationmarkIcon_hrlo3_38",iq="_checkmarkIcon_hrlo3_45",He={body:Wx,hjelpetekst:Xx,firstCol:Zx,secCol:Qx,thirdCol:eq,fourthCol:nq,topPadding:rq,image:tq,hjelpetekstInnhold:sq,exclamationmarkIcon:aq,checkmarkIcon:iq},lq="arbeidsforhold",dq=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),oq=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,s)=>e.slice(s*25,s*25+25)).join("-")},tp=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:i,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:g,alleKodeverk:k})=>{var D;const p=J(),{inntektsmeldinger:v,inntekter:b}=s,y=t[e],c=v.find(_=>dq(y,_)),x=(D=b.find(_=>_.arbeidsgiverIdent===y.arbeidsgiverIdent))==null?void 0:D.inntekter,A=t.filter(_=>_.arbeidsgiverIdent===y.arbeidsgiverIdent).length>1,N=i[y.arbeidsgiverIdent],R=h.useRef(null),[S,q]=h.useState(!1),P=h.useCallback(()=>q(_=>!_),[]);return a.jsx(ep,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:a.jsx(qe,{children:a.jsxs(B,{children:[a.jsxs(T,{children:[!o&&a.jsx(Ji,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:He.checkmarkIcon}),o&&a.jsx(Or,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:He.exclamationmarkIcon})]}),a.jsxs(T,{className:He.body,children:[a.jsxs(qe,{children:[a.jsxs(B,{children:[a.jsxs(T,{className:He.firstCol,children:[a.jsx(F,{size:"small",children:N.navn}),y.arbeidsgiverIdent&&a.jsxs(ke,{children:["(",N.erPrivatPerson&&N.fødselsdato?a.jsx(Ae,{dateString:N.fødselsdato}):y.arbeidsgiverIdent,")"]})]}),a.jsxs(T,{className:He.secCol,children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdFieldArray.Periode"})}),a.jsxs(E,{size:"small",children:[y&&a.jsx(Ye,{dateStringFom:y.fom,dateStringTom:y.tom!==Be?y.tom:void 0}),!y&&"-"]})]}),a.jsxs(T,{className:He.thirdCol,children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdFieldArray.Kilde"})}),a.jsx(E,{size:"small",children:a.jsx(m,{id:y?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),a.jsxs(T,{className:He.fourthCol,children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),a.jsxs(E,{size:"small",children:[(c==null?void 0:c.motattDato)&&a.jsx(Ae,{dateString:c.motattDato}),!(c!=null&&c.motattDato)&&a.jsx(m,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),a.jsx(j,{sixteenPx:!0}),a.jsxs(B,{children:[a.jsxs(T,{className:He.firstCol,children:[A&&y.eksternArbeidsforholdId&&a.jsxs(a.Fragment,{children:[a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdFieldArray.Id"})})}),a.jsxs(T,{className:He.topPadding,children:[y.eksternArbeidsforholdId.length<50&&a.jsx(E,{size:"small",children:y.eksternArbeidsforholdId}),y.eksternArbeidsforholdId.length>=50&&a.jsx(Ku,{content:oq(y.eksternArbeidsforholdId),placement:"bottom",children:a.jsx(E,{size:"small",children:`${y.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),a.jsx(j,{eightPx:!0})]}),y.stillingsprosent&&a.jsxs(a.Fragment,{children:[a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})})}),a.jsx(T,{className:He.topPadding,children:a.jsx(E,{size:"small",children:`${y.stillingsprosent}%`})})]}),a.jsx(j,{eightPx:!0})]}),c&&a.jsx(np,{saksnummer:r,inntektsmelding:c}),!c&&x&&a.jsxs(a.Fragment,{children:[a.jsx(j,{thirtyTwoPx:!0}),a.jsx(rp,{inntektsposter:x,skjæringstidspunkt:g}),a.jsx(j,{thirtyTwoPx:!0})]})]}),a.jsx(T,{children:y.permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:`${tt(k,un.PERMISJONSBESKRIVELSE_TYPE,y.permisjonOgMangel.type)} 100%`}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:y.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})})]})]}),a.jsx(Ne,{name:`${lq}.${e}.permisjonStatus`,label:a.jsx(qe,{children:a.jsxs(B,{children:[a.jsx(T,{children:a.jsx(m,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"})}),a.jsxs(T,{className:He.image,children:[a.jsx(ae,{ref:R,type:"button",variant:"tertiary",onClick:P,icon:a.jsx(tl,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),a.jsx(Er,{open:S,onClose:P,anchorEl:R.current,className:He.hjelpetekst,children:a.jsxs(Er.Content,{className:He.hjelpetekstInnhold,children:[a.jsx(E,{children:a.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),a.jsx(j,{eightPx:!0}),a.jsx(E,{children:a.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),a.jsx(j,{eightPx:!0}),a.jsx(E,{children:a.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),a.jsx(j,{eightPx:!0}),a.jsx(E,{children:a.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})]})]})}),validate:[X],isReadOnly:l,radios:[{label:p.formatMessage({id:c?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Mi.IKKE_BRUK_PERMISJON},{label:p.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Mi.BRUK_PERMISJON}]}),a.jsx(j,{fourPx:!0})]})]})})},n)};tp.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const gq="arbeidsforhold",sp=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:s,harÅpentAksjonspunkt:i,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:g}=Ie(),{fields:k}=tn({control:g,name:gq});return a.jsx(a.Fragment,{children:k.map((p,v)=>a.jsx(tp,{fieldId:p.id,index:v,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:s,harÅpentAksjonspunkt:i,skjæringstidspunkt:l,alleKodeverk:o},p.id))})};sp.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const uq=hn(3),kq=An(1500),mq=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),ap=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:s,isReadOnly:i,alleKodeverk:l}=xn(),o=h.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(x=>{var A;return(A=x.permisjonOgMangel)==null?void 0:A.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:g}=o,k=h.useMemo(()=>[...g].sort(mq(n)),[g,n]),p=h.useMemo(()=>({arbeidsforhold:k.map(x=>{var A;return{permisjonStatus:(A=x.permisjonOgMangel)==null?void 0:A.permisjonStatus}}),begrunnelse:r[0].begrunnelse}),[k]),{formData:v,setFormData:b}=$n(),y=ze({defaultValues:v||p});h.useEffect(()=>()=>{b(y.getValues())},[]);const c=r.some(x=>x.status===sr.OPPRETTET);return a.jsxs(a.Fragment,{children:[a.jsx(qe,{children:a.jsxs(B,{spaceBetween:!0,children:[a.jsx(T,{children:a.jsx(se,{size:"small",children:a.jsx(m,{id:"PermisjonFaktaPanel.Overskrift"})})}),a.jsx(T,{children:a.jsx(E,{size:"small",children:a.jsx(m,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ge(o.skjæringstidspunkt)}})})})]})}),a.jsx(j,{thirtyTwoPx:!0}),c&&a.jsx(or,{children:a.jsx(m,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),a.jsx(j,{thirtyTwoPx:!0}),a.jsxs(Je,{formMethods:y,onSubmit:x=>s({kode:de.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:x.arbeidsforhold.map((A,N)=>({internArbeidsforholdId:k[N].internArbeidsforholdId,arbeidsgiverIdent:k[N].arbeidsgiverIdent,permisjonStatus:A.permisjonStatus})),begrunnelse:x.begrunnelse}),children:[a.jsx(sp,{saksnummer:t.saksnummer,sorterteArbeidsforhold:k,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:i,harÅpentAksjonspunkt:c,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),a.jsx(j,{thirtyTwoPx:!0}),a.jsx(rn,{label:a.jsx(F,{size:"small",children:a.jsx(m,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[X,uq,kq,jn],maxLength:1500,readOnly:i}),a.jsx(j,{sixteenPx:!0}),!i&&a.jsx(ae,{size:"small",variant:"primary",disabled:!y.formState.isDirty||y.formState.isSubmitting,loading:y.formState.isSubmitting,children:a.jsx(m,{id:"PermisjonFaktaPanel.Bekreft"})})]})]})};ap.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const pq={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i AA-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},vq=Ue(pq),ip=e=>a.jsx(Ke,{value:vq,children:a.jsx(ap,{...e})});ip.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Wg=[de.VURDER_ARBEIDSFORHOLD_PERMISJON],fq=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),{behandling:t}=h.use(_n),s=ur(Wg),i=Bn(t),{data:l}=Fn(i.arbeidOgInntektOptions(t));return a.jsx(kr,{...n,standardPanelProps:s,faktaPanelKode:gr.PERMISJON,faktaPanelMenyTekst:r.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Wg.some(o=>As(o,t.aksjonspunkt)),children:l?a.jsx(ip,{arbeidOgInntekt:l,arbeidsgiverOpplysningerPerId:e}):a.jsx(Sn,{})})};fq.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApneAksjonspunkter",value:{name:"boolean",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};var ue=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ue||{});function lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xg={exports:{}},Cr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function yq(){if(Zg)return Cr;Zg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Cr.Fragment=n,Cr.jsx=r,Cr.jsxs=r,Cr}var Qg;function bq(){return Qg||(Qg=1,Xg.exports=yq()),Xg.exports}var d=bq(),eu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var nu;function cq(){return nu||(nu=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=s(i,t.call(this,o)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)n.call(i,o)&&i[o]&&(l=s(l,this&&this[o]||o));return l}function s(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(eu)),eu.exports}var jq=cq();const hq=lp(jq);var Bs=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(Bs||{}),_s=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(_s||{}),$=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))($||{});_s.BRUKERS_ANDEL;_s.FRILANS;_s.EGEN_NÆRING;const Aq=["FL","AT_FL","AT_FL_SN","FL_SN"],Iq=["AT","AT_FL","AT_FL_SN","AT_SN"],Tq=["SN","FL_SN","AT_FL_SN","AT_SN"],Rq=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],Eq=["DP","SP_AV_DP","PSB_AV_DP","AAP"],Nq=["KUN_YTELSE"],xq=["MS"],dp=e=>Eq.some(n=>n===e),qq=e=>Nq.some(n=>n===e),op=e=>Aq.some(n=>n===e),gp=e=>Iq.some(n=>n===e),up=e=>Tq.some(n=>n===e),Sq=e=>Rq.some(n=>n===e),Pq=e=>xq.some(n=>n===e);var kp=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(kp||{});const Os=e=>e==="OPPR";var mp=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(mp||{}),bn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(bn||{}),Gi=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(Gi||{}),Li=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Li||{}),Tr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(Tr||{}),pp=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(pp||{}),Vl=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(Vl||{}),ve=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(ve||{}),vp=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(vp||{}),In=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(In||{});const ru=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Ds=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:s,identifikator:i}=e;return s?t?`${r} (${I(t).format(re)})${ru(n)}`:r:i?`${r} (${i})${ru(n)}`:r},tu=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[Bs.OPPTJENING_AKTIVITET_TYPE].find(t=>{var s;return t.kode===((s=e.arbeidsforhold)==null?void 0:s.arbeidsforholdType)}))==null?void 0:r.navn)||""},Ki=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?Ds(t,e.arbeidsforhold.eksternArbeidsforholdId):tu(e,r)}return tu(e,r)},Fq="_aksjonspunktBehandlerBorder_13dyh_1",Bq="_aksjonspunktBehandlerHeader_13dyh_10",_q="_aksjonspunktBehandlerImageCol_13dyh_18",Oq="_aksjonspunktBehandlerTextCol_13dyh_24",Dq="_aksjonspunktBehandlerNoBorder_13dyh_27",wq="_aksjonspunktBehandlerContainer_13dyh_30",Vq="_verticalLine_13dyh_40",Mq="_verticalAlignMiddle_13dyh_47",Gq="_inputPadding_13dyh_54",Lq="_inntektTableTB_13dyh_65",Kq="_inntektTableTB_13dyh_65",$q="_rowSpacer_13dyh_69",Uq="_textAreaWrapper_13dyh_109",Yq="_textAreaWrapperHeigh_13dyh_112",Hq="_dynamiskKolonne_13dyh_119",Cq="_textAreaStyle_13dyh_123",zq="_bredde_13dyh_126",Jq="_atflAvvikAktivitet_13dyh_129",Wq="_atflAvvikInntekt_13dyh_133",Xq="_atflEditedIcon_13dyh_136",Zq="_breddeInntekt_13dyh_139",Qq="_warningIcon_13dyh_142",eS="_aksjonspunktWrapper_13dyh_148",oe={aksjonspunktBehandlerBorder:Fq,aksjonspunktBehandlerHeader:Bq,aksjonspunktBehandlerImageCol:_q,aksjonspunktBehandlerTextCol:Oq,aksjonspunktBehandlerNoBorder:Dq,aksjonspunktBehandlerContainer:wq,verticalLine:Vq,verticalAlignMiddle:Mq,inputPadding:Gq,inntektTableTB:Lq,inntektTableTb:Kq,rowSpacer:$q,textAreaWrapper:Uq,textAreaWrapperHeigh:Yq,dynamiskKolonne:Hq,textAreaStyle:Cq,bredde:zq,atflAvvikAktivitet:Jq,atflAvvikInntekt:Wq,atflEditedIcon:Xq,breddeInntekt:Zq,warningIcon:Qq,aksjonspunktWrapper:eS},nS=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,fp=e=>e?e.filter(n=>n.aktivitetStatus===$.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>nS(n)):[],rS=(e,n,r,t,s,i,l)=>e.map((o,g)=>d.jsxs(B,{className:oe.verticalAlignMiddle,children:[d.jsx(T,{className:oe.atflAvvikAktivitet,children:d.jsx(E,{size:"small",children:Ki(o,t,n)})}),d.jsx(T,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:r?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${i}.${s}.inntekt${g}`,validate:l?[X,sn(178956970)]:[],readOnly:r,parse:De,className:oe.breddeInntekt,isEdited:r&&(!!o.overstyrtPrAar||o.overstyrtPrAar===0)})})})]},`index${g+1}`)),Ml=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:s,formName:i,skalValideres:l})=>{const o=fp(n);return d.jsx(d.Fragment,{children:rS(o,r,e,t,s,i,l)})};Ml.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===$.ARBEIDSTAKER)&&(r=fp(n).map(({andelsnr:t},s)=>{const i=e[`inntekt${s}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:i===void 0||i===""?0:fe(i),andelsnr:t}})),r};const tS="_avsnittOverskrift_3qwr0_1",sS="_venstreKolonne_3qwr0_5",aS="_hoyreKolonne_3qwr0_8",iS="_panelLeft_3qwr0_11",lS="_panelRight_3qwr0_21",dS="_storSpace_3qwr0_32",oS="_semiBoldText_3qwr0_35",gS="_næringEndringBeskrivelse_3qwr0_38",uS="_redError_3qwr0_41",kS="_tabellAktivitet_3qwr0_44",mS="_tabellInntekt_3qwr0_54",pS="_næringOpplysningNavn_3qwr0_66",vS="_næringOpplysningInntekt_3qwr0_69",fS="_næringOpplysningOrgnr_3qwr0_73",yS="_næringOpplysningDato_3qwr0_76",bS="_heldekkendeKol_3qwr0_79",cS="_tagMargin_3qwr0_85",jS="_colDivider_3qwr0_88",hS="_noPaddingRight_3qwr0_92",AS="_arbeidPanelSkille_3qwr0_95",G={avsnittOverskrift:tS,venstreKolonne:sS,hoyreKolonne:aS,panelLeft:iS,panelRight:lS,storSpace:dS,semiBoldText:oS,næringEndringBeskrivelse:"_næringEndringBeskrivelse_3qwr0_38",naeringEndringBeskrivelse:gS,redError:uS,tabellAktivitet:kS,tabellInntekt:mS,næringOpplysningNavn:"_næringOpplysningNavn_3qwr0_66",naeringOpplysningNavn:pS,næringOpplysningInntekt:"_næringOpplysningInntekt_3qwr0_69",naeringOpplysningInntekt:vS,næringOpplysningOrgnr:"_næringOpplysningOrgnr_3qwr0_73",naeringOpplysningOrgnr:fS,næringOpplysningDato:"_næringOpplysningDato_3qwr0_76",naeringOpplysningDato:yS,heldekkendeKol:bS,tagMargin:cS,colDivider:jS,noPaddingRight:hS,arbeidPanelSkille:AS},su="inntektField",IS=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(Tr.ARBEIDSFORHOLD_AVSLUTTET),ws=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!IS(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},Br=(e,n)=>e.arbeidsforhold?`${su}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${su}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,Vs=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===$.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],yp=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},TS=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return s?Ds(s,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[Bs.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},bp=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),RS=(e,n,r)=>{const t=Vs(e),s={};return t.forEach(i=>{if(!i.arbeidsforhold)return;const l=yp(i.arbeidsforhold),o=bp();o.tabellInnhold=TS(i.arbeidsforhold,n,r),o.erTidsbegrenset=i.erTidsbegrensetArbeidsforhold!==void 0?i.erTidsbegrensetArbeidsforhold:!1,s[l]=[o]}),s},Gl=e=>e.sort((n,r)=>I(n.beregningsgrunnlagPeriodeFom).diff(I(r.beregningsgrunnlagPeriodeFom)))[0],cp=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===$.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var s,i,l,o;return((s=t.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)===((i=e.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Ll=(e,n)=>{var r;const t=Gl(n);return!!((r=cp(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},ES=(e,n,r)=>{const t=ws(e),s=e[0].beregningsgrunnlagPeriodeFom,i=RS(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===s;Vs(l).forEach(g=>{const k=Ll(g,e),p=yp(g.arbeidsforhold),v=bp();v.tabellInnhold=g.overstyrtPrAar!==void 0&&g.overstyrtPrAar!==null?K(g.overstyrtPrAar):"",v.erTidsbegrenset=!1,v.isEditable=k?!0:o,v.inputfieldKey=Br(g,l),i[p].push(v)})}),i},NS=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(E,{size:"small",className:G.semiBoldText,children:K(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),xS=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:Ge(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),qS=(e,n,r,t,s,i,l)=>{const o=[];return o.push(xS(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((g,k)=>d.jsx(Y.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${g.periodeFom}`)})},`Col_Tittel_${g.periodeFom}`)},`PeriodeWrapper${k+1}`))]},"Tabletop")),Object.keys(e).forEach(g=>{const k=e[g];o.push(d.jsx("tr",{children:k.map(p=>p.isEditable?d.jsx(Y.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?oe.adjustedField:void 0,children:d.jsx(ce,{name:`${i}.${s}.${p.inputfieldKey}`,validate:l?[X,sn(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:De,className:oe.breddeInntekt})})},`Col-${p.inputfieldKey}`)},`key${p.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(E,{size:"small",children:p.tabellInnhold})},p.tabellInnhold))},g))}),o.push(d.jsx("tr",{className:oe.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(NS(t)),o},SS=(e,n,r,t)=>{const s=[];return e.length<1||ws(e).forEach(i=>{const l=Vs(i).map(o=>{const g=Br(o,i),k=n.watch(`${t}.${r}.${g}`);return k===void 0||k===""?0:fe(k)}).reduce((o,g)=>o+g);s.push({brutto:l,periodeFom:i.beregningsgrunnlagPeriodeFom,periodeTom:i.beregningsgrunnlagPeriodeTom})}),s},Ot=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:s,formName:i,skalValideres:l})=>{const o=ES(n,r,t),g=n.some(v=>{var b;return(b=v.beregningsgrunnlagPrStatusOgAndel)==null?void 0:b.some(y=>y.aktivitetStatus===$.ARBEIDSTAKER&&(!!y.overstyrtPrAar||y.overstyrtPrAar===0))}),k=Ie(),p=SS(n,k,s,i);return d.jsx("table",{className:oe.inntektTableTB,children:d.jsx("tbody",{children:qS(o,e,g,p,s,i,l)})})};Ot.buildInitialValues=e=>{const n={},r=ws(e),t=Gl(e);return r.forEach(s=>{(s.beregningsgrunnlagPrStatusOgAndel?s.beregningsgrunnlagPrStatusOgAndel.filter(i=>i.aktivitetStatus===$.ARBEIDSTAKER):[]).forEach(i=>{if(Ll(i,e)){const l=K(i.overstyrtPrAar);n[Br(i,s)]=l||""}else{const l=cp(i,t),o=K(l==null?void 0:l.overstyrtPrAar);n[Br(i,s)]=o||""}})}),n};Ot.transformValues=(e,n)=>{const r=[],t=Gl(n);return ws(n).forEach(s=>{const i=Vs(s),l=[];i.forEach(o=>{if(Ll(o,n)){const g=fe(e[Br(o,s)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}else{const g=fe(e[Br(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}}),r.push({periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const PS="_colDevider_1att7_1",FS={colDevider:PS},cn=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx(B,{children:d.jsx("div",{style:{width:n},children:d.jsx(T,{children:d.jsx("div",{className:FS.colDevider})})})})},jp=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,BS=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return Ds(r,e.arbeidsforhold.eksternArbeidsforholdId)},hp=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],_S=(e,n)=>{const r=BS(e,n),t=jp(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},OS=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},DS=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{hp(t).filter(s=>OS(s)).map(s=>_S(s,n)).forEach(s=>{r.some(({nøkkel:i})=>i===s.nøkkel)||r.push(s)})}),r},wS=(e,n)=>{const r=hp(e).find(t=>jp(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},VS=(e,n)=>{const r=[];return n.forEach(t=>{const s=wS(t,e.nøkkel);s&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:s,beløpPrMåned:s/12})}),r},MS=e=>{if(!e||e.length<2)return e;e.sort((t,s)=>I(t.fom).diff(I(s.fom)));const n=[];let r=I(e[0].fom);return e.forEach(t=>{if(!I(t.fom).isBefore(r)){const s=e.find(i=>I(i.fom).isAfter(t.fom)&&i.beløpPrÅr!==t.beløpPrÅr);if(s){const i=I(s.fom).subtract(1,"d");n.push({tom:i.format(Fe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=i}else r=I(Be),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},GS=(e,n)=>{const r=DS(e,n);return r.forEach(t=>{const s=VS(t,e);MS(s).forEach(i=>t.naturalytelseEndringer.push(i))}),!r||r.length<1?void 0:{rader:r}},LS=e=>e.tom?`${Ge(e.fom)} - ${Ge(e.tom)}`:`${Ge(e.fom)} -`,KS=e=>e.rader.map(n=>d.jsxs("div",{children:[d.jsx(B,{children:d.jsx(T,{className:G.noPaddingRight,children:d.jsx(F,{size:"small",children:n.visningsnavn})})}),n.naturalytelseEndringer.map(r=>d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(E,{size:"small",children:LS(r)})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(r.beløpPrMåned)})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{size:"small",children:K(r.beløpPrÅr)})})]},n.nøkkel+r.fom))]},n.nøkkel)),$S=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=h.useMemo(()=>GS(e,n),[e]);return r?d.jsxs(d.Fragment,{children:[d.jsx(j,{thirtyTwoPx:!0}),d.jsx(F,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),KS(r)]}):null},US=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,Ap=e=>e?e.filter(n=>n.aktivitetStatus===$.ARBEIDSTAKER).filter(n=>US(n)):[],YS=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(Ge(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(Ge(e.opphoersdato))),n.join(" ")},HS=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},au=e=>e.beregnetPrAar?e.beregnetPrAar:0,CS=(e,n,r)=>{const t=e.reduce((l,o)=>l+au(o),0),s=t?t/12:0,i=e.map((l,o)=>{var g,k,p;return d.jsxs(Y.Fragment,{children:[d.jsxs(qe,{children:[d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(F,{size:"small",className:G.semiBoldText,children:Ki(l,r,n)},`ColLableTxt${o+1}`)}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{children:K(au(l)/12)},`ColBrgMndTxt${(g=l.arbeidsforhold)==null?void 0:g.arbeidsgiverIdent}`)}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{children:K(l.beregnetPrAar)},`ColBrgAarTxt${(k=l.arbeidsforhold)==null?void 0:k.arbeidsgiverIdent}`)})]}),d.jsxs(B,{children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(T,{children:d.jsx(E,{children:HS(l.arbeidsforhold)})}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(T,{children:d.jsx(ke,{children:YS(l.arbeidsforhold)})}),l.erTidsbegrensetArbeidsforhold&&d.jsx(T,{children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})})]},`indexD${(p=l.arbeidsforhold)==null?void 0:p.arbeidsgiverIdent}`)]}),d.jsx(j,{eightPx:!0}),d.jsx(cn,{prosentBredde:100})]},`ArbInntektWrapper${Ki(l,r,n)}${o+1}`)});if(e.length>1){const l=d.jsx(qe,{children:d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{children:K(s)})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{children:K(t)})})]})},"SummaryRow");i.push(l)}return i},Kl=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const s=Ap(e);return!s||s.length===0?null:d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})})})}),d.jsx(qe,{children:d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]})}),d.jsx(cn,{prosentBredde:100}),CS(s,t,r),d.jsx($S,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};Kl.buildInitialValues=e=>{const n=Ap(e),r={};return n.forEach((t,s)=>{r[`inntekt${s}`]=K(t.overstyrtPrAar)||""}),r};var $i={exports:{}},zS=$i.exports,iu;function JS(){return iu||(iu=1,function(e,n){(function(r,t){e.exports=t(I)})(zS,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var s=t(r),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(i,null,!0),i})}($i)),$i.exports}var WS=JS();const Ui=lp(WS),XS=({option:e,style:n,height:r})=>{const t=h.useRef(null);return h.useEffect(()=>{let s;t.current!==null&&(s=Mv(t.current));const i=()=>{s==null||s.resize()};return window.addEventListener("resize",i),()=>{s==null||s.dispose(),window.removeEventListener("resize",i)}},[]),h.useEffect(()=>{if(t.current!==null){const s=Gv(t.current);s&&(s.setOption(e),(s==null?void 0:s.getWidth())===0&&(s==null||s.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},ZS="_lesMer_1dad0_1",QS="_sammenligningGrafOppsummeringType_1dad0_4",eP="_sammenligningGrafOppsummeringInntekt_1dad0_7",nP="_readMore_1dad0_12",Wn={lesMer:ZS,sammenligningGrafOppsummeringType:QS,sammenligningGrafOppsummeringInntekt:eP,readMore:nP},rP=[],tP="#99bdcd",sP="#c1b5d0",aP="#C6C2BF",iP=(e,n)=>{const r=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===bn.ARBEID).map(({beløp:i})=>i).reduce((i,l)=>i+l,0),t=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===bn.FRILANS).map(({beløp:i})=>i).reduce((i,l)=>i+l,0),s=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===bn.YTELSE).map(({beløp:i})=>i).reduce((i,l)=>i+l,0);return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:G.storSpace}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})})})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(B,{children:[d.jsx(T,{className:Wn.sammenligningGrafOppsummeringType,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})})}),d.jsx(T,{className:Wn.sammenligningGrafOppsummeringInntekt,children:d.jsx(E,{size:"small",children:K(r)})})]}),d.jsx(cn,{prosentBredde:20})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(B,{children:[d.jsx(T,{className:Wn.sammenligningGrafOppsummeringType,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})})}),d.jsx(T,{className:Wn.sammenligningGrafOppsummeringInntekt,children:d.jsx(E,{size:"small",children:K(t)})})]}),d.jsx(cn,{prosentBredde:20})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(B,{children:[d.jsx(T,{className:Wn.sammenligningGrafOppsummeringType,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})})}),d.jsx(T,{className:Wn.sammenligningGrafOppsummeringInntekt,children:d.jsx(E,{size:"small",children:K(s)})})]}),d.jsx(cn,{prosentBredde:20})]})]})},lP=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),hi=(e,n,r)=>{const t=[];for(let s=0;s<12;s+=1){const i=I(n,Fe).add(s,"M").format("YYYYMM"),l=e.find(g=>I(g.fom,Fe).format("YYYYMM")===i),o=lP((l==null?void 0:l.inntekter)||[],r);t.push([o,i])}return t},dP=()=>d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(se,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})})})},"SamenenligningsGrunnlagOverskrift"),d.jsx(j,{eightPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})})})]}),Ai=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),oP=e=>({harFrilansinntekt:Ai(e,bn.FRILANS),harArbeidsinntekt:Ai(e,bn.ARBEID),harYtelseinntekt:Ai(e,bn.YTELSE)}),gP=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=J(),t=(e==null?void 0:e.måneder)||rP,s=h.useMemo(()=>oP(t),[t]),i=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=h.useMemo(()=>s.harArbeidsinntekt&&i?hi(t,i,bn.ARBEID):[],[s.harArbeidsinntekt,t,i]),o=h.useMemo(()=>s.harFrilansinntekt&&i?hi(t,i,bn.FRILANS):[],[s.harArbeidsinntekt,t,i]),g=h.useMemo(()=>s.harYtelseinntekt&&i?hi(t,i,bn.YTELSE):[],[s.harArbeidsinntekt,t,i]),k=h.useCallback(y=>y.value[0]>5e3?K(y.value[0])||"":y.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const p=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),v=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),b=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(Pe,{size:"medium",header:dP(),defaultOpen:!0,className:Wn.readMore,children:d.jsx(XS,{option:{tooltip:{trigger:"axis",formatter:y=>{const c=y,x=c[0].data,A=I(x[1]),N=A.locale(Ui).format("MMM"),R=A.format("YYYY"),S=`${N.charAt(0).toUpperCase()+N.slice(1)} ${R}`,q=c.reduce((P,D)=>{const _=D.data;return P.concat(`${(D.marker||"")+(D.seriesName||"")}: ${K(_[0])}`)},[]).join("<br/>");return`${S}<br />${q}`},axisPointer:{type:"shadow"}},legend:{data:[p,v,b]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:y=>K(y)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:y=>{const c=I(y),x=c.format("MM")==="01"||c.format("MM")==="12",A=c.locale(Ui).format("MMM"),N=c.format("YYYY"),R=A.charAt(0).toUpperCase()+A.slice(1,3);return x?`${R}
${N}`:R}}},series:[{name:p,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:l},{name:v,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:o},{name:b,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:g}],color:[tP,sP,aP]},height:350})}),iP(t,s)]})},uP=({alleAndeler:e})=>{var n;const r=e.find(i=>!i.erTilkommetAndel&&i.aktivitetStatus===$.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,s=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsx(j,{fourPx:!0}),d.jsxs(B,{className:G.rows,children:[d.jsx(T,{className:G.tabellAktivitet,children:s&&d.jsxs(E,{size:"small",children:[d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:G.semiBoldText,children:d.jsx(Ae,{dateString:s})})]})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(cn,{prosentBredde:100}),d.jsxs(B,{className:G.rows,children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:t?K(t/12):0})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{size:"small",children:t?K(t):0})})]})]})},kP=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===$.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})})})}),d.jsx(j,{eightPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",children:K(r)})})})]})},mP=[],pP=(e,n,r)=>{var t,s,i;const l=r.find(v=>v.år===e),o=l&&((t=l.inntekter.find(v=>v.pgiType===Gi.NÆRING))==null?void 0:t.beløp)||0,g=l&&((s=l.inntekter.find(v=>v.pgiType===Gi.LØNN))==null?void 0:s.beløp)||0,k=o+g,p=(i=n.find(v=>v.årstall===e))==null?void 0:i.beløp;return d.jsxs(w.Row,{shadeOnHover:!0,children:[d.jsx(w.DataCell,{children:e}),d.jsx(w.DataCell,{align:"right",children:K(g)}),d.jsx(w.DataCell,{align:"right",children:K(o)}),d.jsx(w.DataCell,{align:"right",children:K(k)}),d.jsx(w.DataCell,{align:"right",children:K(p)})]},e)},vP=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>pP(r,e,n)),fP=e=>d.jsxs(w.Row,{shadeOnHover:!0,children:[d.jsx(w.DataCell,{children:d.jsx(F,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(w.DataCell,{}),d.jsx(w.DataCell,{}),d.jsx(w.DataCell,{}),d.jsx(w.DataCell,{align:"right",children:d.jsx(F,{children:K(e)})})]},"PGI-Oppsumert"),yP=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===$.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||mP;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:s,pgiSnitt:i}=r;return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(w,{children:[d.jsx(w.Header,{children:d.jsxs(w.Row,{children:[d.jsx(w.HeaderCell,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(w.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(w.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(w.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(w.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(w.Body,{children:[vP(s,t),fP(i)]})]})]})},bP="_lesMer_1w256_1",cP="_overskrift_1w256_4",jP="_merTekstBorder_1w256_9",hP={lesMer:bP,overskrift:cP,merTekstBorder:jP},AP=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},lu=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${Ge(n)}-${Ge(r)} `:`${Ge(n)}-`},IP=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},TP=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},RP=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,s=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",i=r?t:n;return i?d.jsx(F,{size:"small",className:G.semiBoldText,children:d.jsx(m,{id:s,values:{dato:Ge(i),b:l=>d.jsx("b",{children:l})}})}):null},EP=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},NP=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(E,{size:"small",className:hP.merTekstBorder,children:e.begrunnelse}):null,xP=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,qP=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(d.Fragment,{children:[d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})})}),d.jsx(T,{className:G.tabellAktivitet}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})})]}),d.jsx(cn,{prosentBredde:100}),r.næringer.map(t=>d.jsxs(Y.Fragment,{children:[d.jsxs(B,{children:[d.jsx(T,{className:G.næringOpplysningNavn,children:d.jsx(F,{size:"small",className:G.semiBoldText,children:TP(t,n)})}),d.jsx(T,{className:G.næringOpplysningInntekt,children:xP(t)&&d.jsx(F,{size:"small",children:K(t.oppgittInntekt)})})]}),d.jsxs(B,{children:[d.jsx(T,{className:G.næringOpplysningOrgnr,children:d.jsx(E,{size:"small",children:t&&t.orgnr?t.orgnr:""})}),d.jsx(T,{className:G.næringOpplysningDato,children:lu(t)&&d.jsx(E,{size:"small",children:lu(t)})})]},`NaringsDetaljer${t.orgnr}`),d.jsx(B,{children:d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:AP(t)})})})}),d.jsx(B,{children:d.jsx(T,{children:t.regnskapsførerNavn&&d.jsx(E,{size:"small",children:IP(t)})})},`RevisorRad${t.orgnr}`),EP(t)&&d.jsxs(d.Fragment,{children:[d.jsx(cn,{prosentBredde:100}),d.jsx(j,{twentyPx:!0}),RP(t),d.jsx(j,{eightPx:!0}),d.jsx(B,{className:G.næringEndringBeskrivelse,children:d.jsx(T,{children:NP(t)})})]})]},`NaringsWrapper${t.orgnr}`))]}):null},SP=e=>e.aktivitetStatus===$.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===$.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===$.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===$.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",PP=e=>e===$.DAGPENGER,FP=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(i=>dp(i.aktivitetStatus)),s=t.length>1;return d.jsxs(d.Fragment,{children:[n.isKombinasjonsstatus&&d.jsxs(d.Fragment,{children:[d.jsx(j,{eightPx:!0}),d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsx(j,{eightPx:!0})]}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(cn,{prosentBredde:100}),t.map(i=>d.jsxs("div",{children:[d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(F,{size:"small",children:d.jsx(m,{id:SP(i)})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(i.beregnetPrAar?i.beregnetPrAar/12:0)})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",className:s?"":G.semiBoldText,children:K(i.beregnetPrAar)})})]}),d.jsx(cn,{prosentBredde:100}),r&&PP(i.aktivitetStatus)&&d.jsx(B,{children:d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})})})]},i.aktivitetStatus))]})},BP=({bruttoPrAar:e})=>e||e===0?d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsxs(T,{children:[d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsx(j,{eightPx:!0})]})}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(e/12)})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{size:"small",children:K(e)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:_P,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:OP}=ue,DP=e=>e&&e.find(n=>n.definisjon===_P||n.definisjon===OP),wP=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],zn=d.jsx("div",{className:G.storSpace}),VP=(e,n,r,t,s,i,l,o)=>d.jsxs("div",{className:G.panelLeft,children:[n.isArbeidstaker&&d.jsx(Kl,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:i}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[zn,d.jsx(uP,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[zn,d.jsx(FP,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[zn,d.jsx(kP,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[zn,d.jsx(BP,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[zn,d.jsx(yP,{alleAndeler:e,inntektsgrunnlag:o}),zn,d.jsx(qP,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:i})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[zn,d.jsx(gP,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),lr=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:s=void 0,arbeidsgiverOpplysningerPerId:i,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=wP(n);return VP(o,e,n,r,t,i,l,s)};lr.buildInitialValues=e=>{const n=DP(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};lr.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:Ml.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?fe(e.inntektFrilanser):null});lr.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:Ot.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?fe(e.inntektFrilanser):null});const MP="_kolBeskrivelse_1czvx_1",GP="_kolVerdi_1czvx_4",LP="_radNoBorder_1czvx_9",KP="_radDobbelLinje_1czvx_14",$P="_radEnkelLinje_1czvx_20",UP="_radTykkLinje_1czvx_24",YP="_kolVerdiRød_1czvx_28",HP="_kolAvslagIkon_1czvx_31",CP="_kolAvslagTekst_1czvx_34",zP="_avslåttIkon_1czvx_38",be={kolBeskrivelse:MP,kolVerdi:GP,radNoBorder:LP,radDobbelLinje:KP,radEnkelLinje:$P,radTykkLinje:UP,kolVerdiRød:"_kolVerdiRød_1czvx_28",kolVerdiRod:YP,kolAvslagIkon:HP,kolAvslagTekst:CP,avslåttIkon:"_avslåttIkon_1czvx_38",avslattIkon:zP},JP=260,Ip={[$.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[$.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[$.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[$.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[$.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[$.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[$.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[$.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[$.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[$.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},du=e=>{var n;return((n=Ip[e.status])==null?void 0:n.rekkefølgePri)||100},WP=e=>{var n;return((n=Ip[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},XP=()=>d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),ZP=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),QP=(e,n)=>(n==null?void 0:n.ytelsetype)!==Vl.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/JP):e.dagsats||0,Zn=()=>d.jsx("div",{className:be.radEnkelLinje}),eF=(e,n)=>d.jsxs(qe,{children:[d.jsx(j,{twentyPx:!0}),d.jsxs(B,{children:[d.jsx(T,{className:be.avslåttIkon,children:d.jsx(fv,{})}),d.jsx(T,{className:be.kolAvslagTekst,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:K(e),b:r=>d.jsx("b",{children:r})}})})})]})]}),nF=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===$.MIDLERTIDIG_INAKTIV),rF=(e,n,r,t)=>{const s=e.andeler.reduce((p,v)=>(v.inntektPlussNaturalytelse||0)+p,0);if(n.vilkarStatus===Li.IKKE_VURDERT)return null;if(n.vilkarStatus===Li.IKKE_OPPFYLT)return eF(r.grunnbeløp,nF(r));const i=r.grunnbeløp*6,l=s>i,o=r.dekningsgrad!==pp.HUNDRE,g=QP(e,r.ytelsesspesifiktGrunnlag),k=t&&(l||o);return d.jsxs(qe,{children:[k&&d.jsx(j,{fourtyPx:!0}),l&&d.jsxs(d.Fragment,{children:[Zn(),d.jsxs(B,{className:be.radNoBorder,children:[d.jsx(T,{className:be.kolBeskrivelse,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})})}),d.jsx(T,{className:be.kolVerdi,children:d.jsx(E,{size:"small",children:K(e.avkortetPrÅr)})})]}),Zn()]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(d.Fragment,{children:Zn()}),d.jsxs(B,{className:be.radNoBorder,children:[d.jsx(T,{className:be.kolBeskrivelse,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})})}),d.jsx(T,{className:be.kolVerdi,children:d.jsx(E,{size:"small",children:K(e.redusertPrÅr)})})]}),Zn()]}),d.jsx(j,{fourtyPx:!0}),d.jsxs(B,{className:be.radNoBorder,children:[d.jsx(T,{className:be.kolBeskrivelse,children:d.jsx(F,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})})}),d.jsx(T,{className:be.kolVerdi,children:d.jsx(F,{size:"medium",children:g})})]}),d.jsx("div",{className:be.radDobbelLinje})]})},tF=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const s=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,g)=>du(o)-du(g));const i=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(d.Fragment,{children:[n&&d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(se,{size:"xsmall",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:I(e.fom).format(re),tom:e.tom?I(e.tom).format(re):""}})})})}),d.jsx(j,{eightPx:!0})]}),e.andeler.map((o,g)=>d.jsxs(Y.Fragment,{children:[g===0&&d.jsx(d.Fragment,{children:Zn()}),d.jsxs(B,{className:be.radNoBorder,children:[d.jsx(T,{className:be.kolBeskrivelse,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:WP(o)})})}),d.jsx(T,{className:be.kolVerdi,children:d.jsx(E,{size:"small",className:o.erFerdigBeregnet?"":be.kolVerdiRød,children:o.erFerdigBeregnet?K(o.inntekt):XP()})})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[Zn(),d.jsxs(B,{className:be.radNoBorder,children:[d.jsx(T,{className:be.kolBeskrivelse,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})})}),d.jsx(T,{className:be.kolVerdi,children:d.jsx(E,{size:"small",children:K(o.bortfaltNaturalytelse)})})]})]}),Zn()]},o.status)),s&&d.jsxs(d.Fragment,{children:[d.jsxs(B,{className:be.radNoBorder,children:[d.jsx(T,{className:be.kolBeskrivelse,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})})}),d.jsx(T,{className:be.kolVerdi,children:d.jsx(E,{size:"small",children:K(ZP(e.andeler))})})]}),d.jsx("div",{className:be.radTykkLinje})]}),l&&d.jsx(d.Fragment,{children:rF(e,r,t,i)})]})},sF=[Tr.ARBEIDSFORHOLD_AVSLUTTET,Tr.NATURALYTELSE_TILKOMMER,Tr.NATURALYTELSE_BORTFALT],aF=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,iF=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,lF=(e,n)=>{switch(e){case $.ARBEIDSTAKER:case $.FRILANSER:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case $.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case $.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},dF=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,s=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-s:0},oF=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},gF=(e,n)=>{const r=e.filter(i=>aF(i)),t={};r.forEach(i=>{const l=t[i.aktivitetStatus];l?l.push(i):t[i.aktivitetStatus]=[i]});const s=[];return Object.keys(t).forEach(i=>{const l=t[i],o=lF(i,n),g=l.every(c=>oF(c)),k=l.reduce((c,x)=>iF(x)+c,0),p=l.reduce((c,x)=>dF(x)+c,0),v=(k||0)+(p||0),b=!!o&&Os(o.status),y=g&&!b;s.push({inntekt:k,bortfaltNaturalytelse:p,inntektPlussNaturalytelse:v,erFerdigBeregnet:y,status:i})}),s},uF=e=>e.some(n=>sF.includes(n)),kF=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(s=>s.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!s.periodeAarsaker&&uF(s.periodeAarsaker)).map(s=>s.beregningsgrunnlagPeriodeFom).sort((s,i)=>new Date(s).getTime()-new Date(i).getTime()),t=[];for(let s=0;s<r.length;s+=1){const i=r[s],l=s+1<r.length?I(r[s+1]).subtract(1,"day").format(Fe).toString():void 0,o=n.find(y=>y.beregningsgrunnlagPeriodeFom===i),g=(o==null?void 0:o.periodeAarsaker)||[],k=gF((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),p=o==null?void 0:o.redusertPrAar,v=o==null?void 0:o.avkortetPrAar,b=o==null?void 0:o.dagsats;t.push({fom:i,tom:l,årsak:g,andeler:k,redusertPrÅr:p,avkortetPrÅr:v,dagsats:b})}return t},mF=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=h.useMemo(()=>kF(e),[e]),t=r.length>1;return d.jsxs("div",{className:G.panelRight,children:[d.jsx(se,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(j,{eightPx:!0}),r.map(s=>d.jsxs("div",{children:[d.jsx(tF,{tabellData:s,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e}),d.jsx(j,{fourtyPx:!0})]},s.fom))]})},pF=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,vF=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>pF(n)).reduce((n,r)=>n+r,0):0,fF=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,ou=(e,n)=>e>n,yF=[d.jsx("div",{},"TomKolNøkkel"),d.jsxs(F,{size:"small",children:[" ",d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})," "]},"Kap8Nøkkel"),d.jsxs(F,{size:"small",children:[" ",d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})," "]},"BBNøkkel")],bF=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=vF(e),t=fF(n);return d.jsxs("div",{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})})}),d.jsx(j,{twentyPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(qn,{headerColumnContent:yF,noHover:!0,children:d.jsxs(Pn,{children:[d.jsx(ee,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(ee,{children:d.jsx(E,{size:"small",children:K(r)})}),d.jsx(ee,{children:d.jsx(E,{size:"small",children:K(t)})})]})})})}),d.jsx(B,{children:d.jsx(T,{children:d.jsxs(E,{size:"small",children:[ou(r,t)&&d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!ou(r,t)&&d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})})})]})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Tp,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:$l,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Rp,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Ep,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Np}=ue,cF=(e,n)=>{switch(e.definisjon){case Tp:return n.find(r=>r.sammenligningsgrunnlagType===ve.ATFLSN||r.sammenligningsgrunnlagType===ve.SN);case $l:return n.find(r=>r.sammenligningsgrunnlagType===ve.MIDLERTIDIG_INAKTIV);case Rp:case Ep:return n.find(r=>r.sammenligningsgrunnlagType===ve.ATFLSN||r.sammenligningsgrunnlagType===ve.AT_FL||r.sammenligningsgrunnlagType===ve.AT||r.sammenligningsgrunnlagType===ve.FL);case Np:return;default:return}},jF=(e,n)=>{const r=cF(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},gu=e=>e&&e.length>0,hF=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],AF={[Rp]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[Ep]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[Np]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[$l]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},IF=(e,n)=>e.definisjon===Tp?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":AF[e.definisjon],TF=(e,n,r)=>{var t;const s=r.find(l=>l.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE),i=!!((t=s==null?void 0:s.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsxs("div",{children:[d.jsx(or,{children:e.map(l=>d.jsx(F,{children:d.jsx(m,{id:IF(l,i||l.definisjon===$l),values:{verdi:jF(l,n),b:o=>d.jsx("b",{children:o}),br:d.jsx("br",{})}})},l.definisjon))}),d.jsx(j,{thirtyTwoPx:!0})]})},RF=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],s=e.filter(l=>Os(l.status));if(!(gu(s)&&gu(t)))return null;const i=hF(n);return d.jsxs(d.Fragment,{children:[d.jsx(j,{eightPx:!0}),TF(s,i,t)]})},EF=e=>e.some(n=>n.aktivitetStatus===$.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),Ul=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:s})=>d.jsxs(B,{className:oe.verticalAlignMiddle,children:[d.jsx(T,{className:oe.atflAvvikAktivitet,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})})}),d.jsx(T,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${r}.${n}.inntektFrilanser`,validate:s?[X,sn(178956970)]:void 0,readOnly:e,parse:De,className:oe.breddeInntekt,isEdited:e&&EF(t)})})})]});Ul.buildInitialValues=e=>{const n=e.length>0?K(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const xp={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},NF=Ue(xp),xF=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,qF=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:s,onClick:i,hasEmptyRequiredFields:l})=>e?null:d.jsx(ae,{variant:"primary",size:"small",loading:r,disabled:xF(t,r,n,l),onClick:i||Mu,type:i?"button":"submit",children:s||NF.formatMessage({id:"SubmitButton.ConfirmInformation"})}),qp=4e3,SF=An(qp),PF=hn(3),Yl="fastsettBeregningsgrnunnlagSNBegrunnelse",Hl="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:FF}=ue,Mr=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:s,avklaringsbehov:i})=>{const l=J();return d.jsxs(d.Fragment,{children:[r&&d.jsxs(d.Fragment,{children:[d.jsxs(B,{className:oe.verticalAlignMiddle,children:[d.jsx(T,{className:oe.dynamiskKolonne,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})})}),d.jsx(T,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${s}.${t}.${Hl}`,validate:[X,sn(178956970)],parse:De,className:oe.breddeInntekt,isEdited:e&&n,readOnly:e})})})]}),d.jsx(j,{eightPx:!0})]}),d.jsx(j,{sixteenPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsxs("div",{id:"readOnlyWrapper",className:e?oe.verticalLine:oe.textAreaWrapperHeigh,children:[d.jsx(rn,{name:`${s}.${t}.${Yl}`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:[X,SF,PF,jn],isEdited:e&&n,maxLength:qp,readOnly:e,description:l.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:o=>o.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(On,{ident:i==null?void 0:i.vurdertAv,date:i==null?void 0:i.vurdertTidspunkt})]})})})]})};Mr.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(s=>s.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(s=>s.definisjon===FF);return{[Hl]:r?K(r.overstyrtPrAar):void 0,[Yl]:t&&t.begrunnelse?t.begrunnelse:void 0}};Mr.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[Yl],bruttoBeregningsgrunnlag:fe(e[Hl])});const Sp=4e3,BF=An(Sp),_F=hn(3),Cl="varigEndringNyoppstartetBegrunnelse",zl="erVarigEndret",Jl="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:OF,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:DF}=ue,wF=e=>e?d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),Dt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:s,formName:i,isAksjonspunktClosed:l,avklaringsbehov:o})=>{let g=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(g=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(g=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const v=J(),b=Ie().watch(i)[s].erVarigEndret,y=[{value:"false",label:g},{value:"true",label:k}];return d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(Ne,{name:`${i}.${s}.${zl}`,validate:[X],label:v.formatMessage({id:p}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:y,isTrueOrFalseSelection:!0})})}),b&&d.jsxs(d.Fragment,{children:[d.jsxs(B,{className:oe.verticalAlignMiddle,children:[d.jsx(T,{className:oe.dynamiskKolonne,children:d.jsx(E,{size:"small",children:wF(r)})}),d.jsx(T,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${i}.${s}.${Jl}`,validate:[X,sn(178956970)],parse:De,className:oe.breddeInntekt,readOnly:e,isEdited:e&&l})})})]}),d.jsx(j,{sixteenPx:!0})]}),d.jsxs(d.Fragment,{children:[d.jsx(j,{sixteenPx:!0}),d.jsx(B,{children:d.jsxs(T,{children:[d.jsx(rn,{name:`${i}.${s}.${Cl}`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[X,BF,_F,jn],maxLength:Sp,readOnly:e,description:v.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:c=>c.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(On,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})]})};Dt.buildInitialValues=(e,n)=>{const r=e.find(s=>s.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE||s.aktivitetStatus===$.BRUKERS_ANDEL),t=n.find(s=>s.definisjon===OF||s.definisjon===DF);if(t){const s=Os(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[zl]:s,[Cl]:t.begrunnelse?t.begrunnelse:"",[Jl]:r?K(r.overstyrtPrAar):void 0}}return{}};Dt.transformValues=e=>{const n=e[zl];return{begrunnelse:e[Cl],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?fe(e[Jl]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Wl,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:VF,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Pp}=ue,Fp=(e,n)=>n.some(r=>r.definisjon===e),MF=e=>e&&(e.definisjon===VF||e.definisjon===Wl||e.definisjon===Pp),er=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:s=!1,fieldIndex:i,formName:l})=>{if(!MF(n))return null;const o=n?!Os(n.status):!1;return r?d.jsx(Mr,{readOnly:e,isAksjonspunktClosed:o,erNyArbLivet:r,fieldIndex:i,formName:l,avklaringsbehov:n}):d.jsx(Dt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Pp,erNyoppstartet:s,fieldIndex:i,formName:l,isAksjonspunktClosed:o,avklaringsbehov:n})};er.buildInitialValues=(e,n)=>Fp(Wl,n)?Mr.buildInitialValuesNyIArbeidslivet(e,n):{...Dt.buildInitialValues(e,n)};er.transformValues=(e,n)=>Fp(Wl,n)?Mr.transformValuesNyIArbeidslivet(e):Dt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Bp,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:_p,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Op,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Dp,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:wp}=ue,GF=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},LF=(e,n)=>{switch(e.definisjon){case Bp:return GF(n);case wp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case _p:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case Op:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case Dp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},KF=e=>{const n=e.aktivitetStatus||[],r=n.some(s=>gp(s)),t=n.some(s=>op(s));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},$F=(e,n)=>{switch(e.definisjon){case Bp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case wp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case _p:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case Op:case Dp:return KF(n);default:return"Ukjent aksjonspunkt"}},UF=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs("div",{className:r?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerHeader,children:[d.jsxs(B,{children:[!r&&d.jsx(T,{className:oe.aksjonspunktBehandlerImageCol,children:d.jsx(Or,{className:oe.warningIcon})}),d.jsx(T,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(F,{children:d.jsx(m,{id:$F(e,n)})})})]}),d.jsx(j,{eightPx:!0}),d.jsxs(B,{children:[!r&&d.jsx(T,{className:oe.aksjonspunktBehandlerImageCol}),d.jsx(T,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(E,{children:d.jsx(m,{id:LF(e,n)})})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:YF,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:HF,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:CF,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:zF,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:JF}=ue;var dr=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(dr||{});const Xl=(e,n)=>ve.SN===e||ve.MIDLERTIDIG_INAKTIV===e||ve.ATFLSN===e&&n!=null&&n.find(r=>up(r))?"8-35":"8-30",Yi=e=>JF===e.definisjon||zF===e.definisjon||CF===e.definisjon?"8-35":YF===e.definisjon||HF===e.definisjon?"8-30":null,WF=hn(3),Vp=4e3,XF=An(Vp),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:uu,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:ku,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:mu,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:pu,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:vu}=ue,ZF="BeregningForm",vs=(e,n)=>Yi(e)===n,QF=(e,n)=>!!e.find(r=>vs(r,n)),Zl=e=>`${ZF}_${e}`,fu=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},Hi=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],eB=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===Tr.ARBEIDSFORHOLD_AVSLUTTET)),Mp=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),nB=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],s=t.filter(k=>k.aktivitetStatus===$.ARBEIDSTAKER),i=t.filter(k=>k.aktivitetStatus===$.FRILANSER),l=t.filter(k=>k.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE||k.aktivitetStatus===$.BRUKERS_ANDEL),o={...lr.buildInitialValues(e.avklaringsbehov),...Ot.buildInitialValues(r),...Ul.buildInitialValues(i),...Kl.buildInitialValues(s)},g={...er.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===ve.ATFLSN?{...o,...g}:n.sammenligningsgrunnlagType===ve.AT_FL?{...o}:n.sammenligningsgrunnlagType===ve.SN?{...g}:n.sammenligningsgrunnlagType===ve.MIDLERTIDIG_INAKTIV?{...g}:{}:{...Mr.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},rB=(e,n,r,t)=>{let s={};return r&&(s=nB(e,t)),{...s,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},tB=(e,n,r,t)=>({[r]:e.map(s=>{var i;return rB(s,Mp(n,s.vilkårsperiodeFom),s.avklaringsbehov.find(l=>vs(l,t)),(i=s.sammenligningsgrunnlagPrStatus)==null?void 0:i.find(l=>Xl(l.sammenligningsgrunnlagType,s.aktivitetStatus)===t))})}),sB=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:s})=>{const i=Hi(n).find(k=>k.aktivitetStatus&&k.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE),l=i&&i.erNyIArbeidslivet,o=r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||i&&i.næringer&&i.næringer.some(k=>k.erVarigEndret===!0),g=i&&i.næringer&&i.næringer.some(k=>k.erNyoppstartet===!0);return!l&&!g&&!o?null:d.jsxs(d.Fragment,{children:[d.jsx(j,{eightPx:!0}),d.jsx(er,{readOnly:e,avklaringsbehov:r,erNyArbLivet:l,erVarigEndring:o,erNyoppstartet:g,fieldIndex:t,formName:s})]})},aB=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:s,fieldIndex:i,formName:l,avklaringsbehov:o,skalValideres:g})=>{const k=eB(n),p=fu(n,$.FRILANSER),v=fu(n,$.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[d.jsx(j,{eightPx:!0}),k&&d.jsx(Ot,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:i,skalValideres:g}),!k&&v&&d.jsx(Ml,{readOnly:t,alleAndelerIForstePeriode:Hi(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:i,formName:l,skalValideres:g}),p&&d.jsx(Ul,{readOnly:t,fieldIndex:i,formName:l,alleAndelerIForstePeriode:Hi(n),skalValideres:g}),d.jsx(j,{sixteenPx:!0}),d.jsx(B,{children:d.jsxs(T,{children:[d.jsx(rn,{name:`${l}.${i}.ATFLVurdering`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[X,XF,WF,jn],maxLength:Vp,readOnly:t,className:oe.textAreaStyle,description:s.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:b=>b.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(On,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})},iB=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(s=>s.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),zr=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),lB=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,s)=>!t.beregningsgrunnlagPeriodeFom||!s.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(s.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(zr(uu,e.gjeldendeAvklaringsbehov))return[{kode:uu,aksjonspunktData:lr.transformATFLValues(e,r)}];if(zr(pu,e.gjeldendeAvklaringsbehov))return[{kode:pu,aksjonspunktData:er.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(zr(vu,e.gjeldendeAvklaringsbehov))return[{kode:vu,aksjonspunktData:er.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(zr(mu,e.gjeldendeAvklaringsbehov))return[{kode:mu,aksjonspunktData:er.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(zr(ku,e.gjeldendeAvklaringsbehov))return[{kode:ku,aksjonspunktData:lr.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},dB=(e,n)=>e[Zl(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:lB(r)})).reduce(iB,[]),oB=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:s,vilkår:i,submitCallback:l,formData:o,setFormData:g,aktivIndex:k,lovparagraf:p,finnesFormSomSubmittes:v,setSubmitting:b})=>{const y=J(),c=(V,U)=>{b(!0),l(dB(V,U))},x=V=>{const U=Mp(i,V.vilkårsperiodeFom);return U.vurderesIBehandlingen&&!U.erForlengelse},A=s.filter(V=>QF(V.avklaringsbehov,p)),N=Zl(p),R=ze({defaultValues:o||tB(A,i,N,p)}),{formState:{dirtyFields:S},control:q,trigger:P}=R,{fields:D}=tn({name:N,control:q}),_=h.useRef(null);h.useEffect(()=>{var V,U;v&&(V=S[N])!=null&&V[k]&&P(),s[k].avklaringsbehov.some(ne=>vs(ne,p)&&ne.status===kp.OPPRETTET)&&((U=_==null?void 0:_.current)==null||U.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[k]);const H=d.jsx(B,{children:d.jsx(T,{children:d.jsx(qF,{isReadOnly:e,isSubmittable:!n,isDirty:R.formState.isDirty,isSubmitting:v})})}),C=V=>V.find(U=>vs(U,p)),L=(V,U)=>{const ne=x(A[V]),z=C(U);return p===dr.ÅTTE_TRETTI&&z?d.jsx(aB,{kodeverkSamling:r,allePerioder:A[V].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:y,fieldIndex:V,formName:N,avklaringsbehov:z,skalValideres:ne}):p===dr.ÅTTE_TRETTIFEM&&z?d.jsx(sB,{readOnly:e,allePerioder:A[V].beregningsgrunnlagPeriode,fieldIndex:V,formName:N,avklaringsbehov:z}):null},M=s[k].vilkårsperiodeFom;return d.jsx("div",{ref:_,children:d.jsx(Je,{formMethods:R,onSubmit:V=>c(V,p),setDataOnUnmount:g,children:D.map((V,U)=>d.jsxs("div",{style:{display:A[U].vilkårsperiodeFom===M?"block":"none"},children:[d.jsx(UF,{readOnly:e,avklaringsbehov:C(A[U].avklaringsbehov),beregningsgrunnlag:A[U]}),d.jsxs("div",{className:`${e?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerBorder} ${oe.aksjonspunktWrapper}`,children:[L(U,A[U].avklaringsbehov),d.jsx(j,{sixteenPx:!0}),H,d.jsx(j,{sixteenPx:!0})]})]},V.id))})})},gB=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const s=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,i=t.filter(o=>o.sammenligningsgrunnlagType===ve.AT_FL||o.sammenligningsgrunnlagType===ve.AT||o.sammenligningsgrunnlagType===ve.FL),l=s&&i.length===0;return n?d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(d.Fragment,{children:[e.isMilitaer&&d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsxs(B,{children:[d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})})}),d.jsx(j,{eightPx:!0})]}),e.isDagpenger&&d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})})})}),d.jsx(j,{eightPx:!0})]}),l&&d.jsxs(B,{children:[d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})}),d.jsx(j,{eightPx:!0})]})]})},uB="_colLable_di1r8_1",kB="_colValue_di1r8_8",mB="_avvikLinjeRad_di1r8_16",pB="_linjeSkille_di1r8_21",vB="_linjeSkilleTykk_di1r8_27",fB="_colLine_di1r8_33",yB="_colAvvik_di1r8_36",bB="_colBorderTopLeft_di1r8_45",cB="_colBorderTop_di1r8_45",jB="_colNoBorderTop_di1r8_58",hB="_beregnetLuftOver_di1r8_61",gn={colLable:uB,colValue:kB,avvikLinjeRad:mB,linjeSkille:pB,linjeSkilleTykk:vB,colLine:fB,colAvvik:yB,colBorderTopLeft:bB,colBorderTop:cB,colNoBorderTop:jB,beregnetLuftOver:hB},yu=d.jsx(B,{children:d.jsx(T,{children:d.jsx("div",{className:gn.linjeSkille})})}),AB=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:s,avvikProsent:i}=n,l=parseFloat(i.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",g=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(d.Fragment,{children:[yu,d.jsxs(B,{children:[d.jsx(T,{className:gn.colLable,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:o})})}),d.jsx(T,{className:gn.colValue,children:d.jsx(E,{size:"small",children:e||e===0?K(e):"-"})}),d.jsx(T,{className:gn.colAvvik})]}),yu,d.jsxs(B,{children:[d.jsx(T,{className:gn.colLable,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:g})})}),d.jsx(T,{className:gn.colValue,children:d.jsx(E,{size:"small",children:K(s)})}),d.jsx(T,{className:gn.colAvvik})]}),d.jsx(B,{children:d.jsx(T,{children:d.jsx("div",{className:gn.linjeSkilleTykk})})}),d.jsxs(B,{children:[d.jsx(T,{className:gn.colLable,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})})}),d.jsx(T,{className:gn.colValue,children:d.jsx(E,{size:"small",children:K(t===void 0?0:t)})}),d.jsx(T,{className:gn.colAvvik,children:d.jsx(E,{size:"small",className:`${l>25?G.redError:""} ${G.semiBoldText}`,children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})})})]})]})},IB=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,TB=(e,n)=>e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>IB(r)),bu=e=>e||0,RB=e=>e.beregnetPrAar?e.beregnetPrAar:0,cu=(e,n)=>{const r=TB(e,n);if(r){const t=r.reduce((l,o)=>l+RB(o),0),s=r.reduce((l,o)=>{var g;return l+bu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseBortfaltPrÅr)},0),i=r.reduce((l,o)=>{var g;return l+bu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseTilkommetPrÅr)},0);return t+s-i}return 0},EB=(e,n)=>{const r=d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case ve.AT:case ve.FL:case ve.AT_FL:return r;case ve.SN:return t;case ve.ATFLSN:return n===dr.ÅTTE_TRETTIFEM?t:r;case ve.MIDLERTIDIG_INAKTIV:return d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},ju=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===$.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===$.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===ve.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===ve.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===ve.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:cu(n,[$.ARBEIDSTAKER,$.FRILANSER]),erPGI:!1}:{inntekt:cu(n,[$.ARBEIDSTAKER,$.FRILANSER]),erPGI:!1}};function hu(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const NB=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(s=>s.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=hu(t,dr.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(s=>{const i=Xl(s.sammenligningsgrunnlagType,r.aktivitetStatus);t=hu(t,i,r)}),t},{}),xB=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:s,gjelderBesteberegning:i,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:g,submitCallback:k,formData:p,setFormData:v,aktivIndex:b})=>{var y;const c=NB(o),[x,A]=h.useState(!1),N=d.jsx(gB,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:i,erNyIArbeidslivet:!!((y=o[b].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&y.find(S=>S.erNyIArbeidslivet))}),R=S=>{var q;if(c[S]&&c[S].length>0){const P=c[S],D=o[b].vilkårsperiodeFom,_=P.find(U=>U.vilkårsperiodeFom===D),H=_?(q=_.sammenligningsgrunnlagPrStatus)==null?void 0:q.find(U=>Xl(U.sammenligningsgrunnlagType,_==null?void 0:_.aktivitetStatus)===S):void 0,C=!!c[S].find(U=>!!U.avklaringsbehov.find(ne=>Yi(ne)===S)),L=_&&!!_.avklaringsbehov.find(U=>Yi(U)===S),M=(_==null?void 0:_.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],V=Zl(S);return d.jsxs("div",{children:[!!H&&d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"xsmall",children:EB(H,S)}),d.jsx(AB,{sammenligningsgrunnlag:H,beregnetAarsinntekt:ju(H,M).inntekt,erPGI:ju(H,M).erPGI}),d.jsx("div",{className:G.storSpace})]}),C&&d.jsxs("div",{style:{display:L?"block":"none"},children:[d.jsx(oB,{readOnly:e,lovparagraf:S,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:s,beregningsgrunnlagListe:o,vilkår:g,submitCallback:k,formData:p&&V in p?p:void 0,setFormData:v,aktivIndex:b,finnesFormSomSubmittes:x,setSubmitting:A}),d.jsx("div",{className:G.storSpace})]})]})}return null};return d.jsxs("div",{className:G.panelRight,children:[N,d.jsx(j,{twentyPx:!0}),R(dr.ÅTTE_TRETTI),R(dr.ÅTTE_TRETTIFEM)]})},Jr=e=>I(e).locale(Ui).format("MMMM");function Yt(e,n,r){const t=e.filter(s=>s.lønnsendringscenario===n).map(s=>`i ${Ds(r[s.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${I(s.sisteLønnsendringsdato).format(re)}`);return t.reduce((s,i,l)=>l===0?i:l<t.length-2?`${s}, ${i}`:`${s} og ${i}`,"")}const qB=(e,n,r,t)=>{switch(e){case In.MANUELT_BEHANDLET:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:Yt(r,In.MANUELT_BEHANDLET,t)}});case In.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:Yt(r,In.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:Jr(I(n).subtract(1,"month").format(Lr)),forrigeMåned:Jr(I(n).subtract(2,"month").format(Lr))}});case In.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:Yt(r,In.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:Jr(I(n).subtract(1,"month").format(Lr))}});case In.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:Yt(r,In.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:Jr(I(n).subtract(1,"month").format(Lr)),nesteMåned:Jr(I(n).subtract(2,"month").format(Lr))}});default:return null}};function SB(e,n,r){return vv(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsxs(d.Fragment,{children:[qB(t,n,e,r),d.jsx("br",{}),d.jsx(j,{sixteenPx:!0})]}))}const PB=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:SB(n.lønnsendringSaksopplysning,e,r)}),d.jsx(pv,{saksopplysninger:t})},FB=e=>{switch(e){case $.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case $.FRILANSER:return"alt1";case $.ARBEIDSTAKER:return"alt3";default:return"neutral"}},BB=(e,n)=>{const r=[];return e.filter((t,s,i)=>s===i.findIndex(l=>l===t)).forEach(t=>{var s;const i=((s=n[Bs.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:s.navn)||"";r.push({visningsNavn:i,kode:t,tagType:FB(t)})}),r.sort((t,s)=>t.visningsNavn>s.visningsNavn?1:-1),d.jsx(B,{children:r.map(t=>d.jsx(T,{className:G.tagRad,children:d.jsx(Is,{variant:t.tagType,title:t.visningsNavn,className:G.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},_B=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:s})=>d.jsxs("div",{className:G.panelLeft,children:[BB(n,r),d.jsx(j,{sixteenPx:!0}),d.jsxs(qe,{children:[d.jsxs(B,{children:[d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})})}),d.jsx(T,{children:d.jsx(E,{size:"small",className:G.semiBoldText,children:d.jsx(Ae,{dateString:e})})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(j,{sixteenPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(PB,{arbeidsgiverOpplysningerPerId:s,skjeringstidspunktDato:e,saksopplysninger:t})})})]})]})]}),Au=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,s)=>t+s,0);return!r||r===0?0:r},Gp=e=>e.month()===2&&e.year()===2020,OB=e=>{const n=I(e.tom);return Gp(n)},Lp=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const s=I(n.beregningsgrunnlagPeriodeFom);if(Gp(s)&&t.some(o=>OB(o))){const o=I("2020-04-30"),g=t.find(k=>I(k.tom).isSame(o,"day"));return g?g.frisinnAndeler.filter(k=>k.statusSøktFor===e):null}const i=I(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!I(o.fom).isBefore(s)&&I(o.tom).isSame(i,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},_r=(e,n,r)=>{const t=Lp(e,n,r);return!!t&&t.length>0},en=(e,n,r)=>{if(!e||!n||!r)return 0;if(_r(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return Au(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return Au(r.beregningsgrunnlagPrStatusOgAndel||[],e)},Iu=(e,n,r)=>{const t=Lp(e,n,r);if(!t||t.length<1)return 0;const s=t.map(({oppgittInntekt:i})=>i).reduce((i,l)=>i+l,0);return!s||s===0?0:s},Kp=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===vp.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),s=t[t.length-1],i=I(s.tom);return i.month()===3&&i.year()===2020?t.filter(l=>I(l.fom).month()===3||I(l.fom).month()===2):t.filter(l=>I(l.fom).month()===i.month()&&I(l.fom).year()===i.year())}return n},DB=(e,n)=>{let r=null;return n!==Be&&(r=n),d.jsx(m,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:I(e).format(re),tom:r?I(r).format(re):""}},`fom-tom${e}${r}`)},$p=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,s=n.frisinnPerioder,i=Array.isArray(s)&&s.find(l=>!I(r).isBefore(l.fom)&&!I(t).isAfter(l.tom));return i?i.frisinnAndeler:[]},Tu=(e,n)=>d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(m,{id:e})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(n)})})]}),Ru=(e,n,r,t,s)=>{const i=s/100,l=n*i;return d.jsxs(d.Fragment,{children:[d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(m,{id:e,values:{grad:s}})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(l)})})]}),!!t||t===0&&d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(m,{id:r})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(t)})})]})]})},Ht=e=>e||e===0,wB=e=>{const n=I(e);return n.isBefore(I("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(I("2022-01-01","YYYY-MM-DD"))?60:70},VB=(e,n,r,t)=>{const s=$p(e,n);if(!s||s.length<1)return null;const i=s.some(p=>p.statusSøktFor===$.FRILANSER)?r:null,l=s.some(p=>p.statusSøktFor===$.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=Iu($.FRILANSER,e,n),g=Iu($.SELVSTENDIG_NAERINGSDRIVENDE,e,n),k=wB(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[Ht(i)&&Tu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",i||0),Ht(i)&&Ru("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",i||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,k),Ht(l)&&Tu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",l||0),Ht(l)&&Ru("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",g,k),d.jsx(B,{children:d.jsx(T,{children:d.jsx("div",{className:G.colDevider})})}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.Resultat.Dagsats"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(e.dagsats)})})]})]})},MB=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const s=$p(e,n);if(!s||s.length<1)return null;const i=r>=0?r:0,l=t>=0?t:0;return d.jsxs("div",{children:[d.jsx(j,{eightPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",children:DB(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)})})}),VB(e,n,i,l)]})},Up=e=>e.grunnbeløp?e.grunnbeløp*6:0,GB=(e,n)=>{if(!_r($.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Up(e);const t=en($.ARBEIDSTAKER,e,n);if(r-=t,!_r($.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const i=en($.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=i}const s=en($.FRILANSER,e,n);return s>r?r:s},LB=(e,n)=>{if(!_r($.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Up(e);const t=en($.ARBEIDSTAKER,e,n);r-=t;const s=en($.FRILANSER,e,n);r-=s;const i=en($.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return i>r?r:i},KB=(e,n)=>{const r=I(e.beregningsgrunnlagPeriodeFom),t=I(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(s=>!I(s.fom).isBefore(r)&&!I(s.tom).isAfter(t))},$B=({beregningsgrunnlag:e})=>{const n=Kp(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>KB(t,n)):[];return d.jsxs("div",{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Resultat"})})})}),r.map(t=>d.jsx("div",{children:d.jsx(MB,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:GB(e,t),næringGrunnlag:LB(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},UB=I("2020-04-01"),YB=(e,n,r)=>d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:K(e),annenInntekt:K(n)}})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(E,{size:"small",children:K(r)})})]}),HB=(e,n)=>{if(!Array.isArray(n))return!1;const r=I(e.beregningsgrunnlagPeriodeFom),t=I(e.beregningsgrunnlagPeriodeTom);return n.some(s=>!I(s.fom).isBefore(r)&&!I(s.tom).isAfter(t))},CB=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(HB(t,n)){const s=I(t.beregningsgrunnlagPeriodeTom),i=I(t.beregningsgrunnlagPeriodeTom).endOf("month");s.isAfter(UB)&&s.isSame(i,"day")&&t.beregningsgrunnlagPeriodeTom!==Be&&r.push(t)}}),r},zB=(e,n)=>{const r=I(n.beregningsgrunnlagPeriodeFom),t=I(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},JB=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=en($.ARBEIDSTAKER,e,n),s=e.grunnbeløp*6;let i=t;if(!_r($.FRILANSER,n,r)){const p=en($.FRILANSER,e,n);i+=p}if(!_r($.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const p=en($.SELVSTENDIG_NAERINGSDRIVENDE,e,n);i+=p}const l=s>i?s-i:0,o=n.beregningsgrunnlagPeriodeTom,g=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(p=>zB(p,n)),k=g?g.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(d.Fragment,{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:I(k).format(re),tom:o?I(o).format(re):""}},`fom-tom${k}${o}`)})})}),d.jsx(j,{eightPx:!0}),YB(s,i,l),d.jsx(j,{sixteenPx:!0})]})},WB=({beregningsgrunnlag:e})=>{const n=Kp(e.ytelsesspesifiktGrunnlag),r=CB(e.beregningsgrunnlagPeriode,n);return d.jsx(d.Fragment,{children:r.map(t=>d.jsx("div",{children:JB(e,t)},t.beregningsgrunnlagPeriodeFom))})},XB=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=en($.SELVSTENDIG_NAERINGSDRIVENDE,e,r),s=en($.FRILANSER,e,r),i=en($.ARBEIDSTAKER,e,r);return d.jsxs("div",{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})})})}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{size:"small",children:K(i)})})]}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{size:"small",children:K(s)})})]}),d.jsxs(B,{children:[d.jsx(T,{className:G.tabellAktivitet,children:d.jsx(E,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})})}),d.jsx(T,{className:G.tabellInntekt,children:d.jsx(F,{size:"small",children:K(t)})})]})]})},Eu=(e,n,r)=>d.jsx(B,{children:d.jsx(T,{children:d.jsx(E,{size:"small",children:d.jsx(m,{id:e,values:{fom:I(n).format(re),tom:I(r).format(re)}})})})}),ZB=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===$.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===$.FRILANSER);return d.jsxs("div",{children:[r&&Eu("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&Eu("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},QB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs("div",{children:[d.jsx(B,{children:d.jsx(T,{children:d.jsx(F,{size:"small",className:G.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Søknad.Tittel"})})})}),d.jsx(j,{eightPx:!0}),Array.isArray(r)&&r.map(t=>ZB(t)),d.jsx(j,{sixteenPx:!0})]})},e_="_aksjonspunktBehandlerBorder_o9hgh_1",n_="_aksjonspunktBehandlerContainer_o9hgh_6",r_="_verticalLine_o9hgh_16",t_="_verticalAlignMiddle_o9hgh_23",s_="_inputPadding_o9hgh_27",a_="_inntektTableTB_o9hgh_35",i_="_inntektTableTB_o9hgh_35",l_="_rowSpacer_o9hgh_39",d_="_textAreaWrapper_o9hgh_71",o_="_textAreaWrapperHeigh_o9hgh_74",g_="_dynamiskKolonne_o9hgh_81",u_={aksjonspunktBehandlerBorder:e_,aksjonspunktBehandlerContainer:n_,verticalLine:r_,verticalAlignMiddle:t_,inputPadding:s_,inntektTableTB:a_,inntektTableTb:i_,rowSpacer:l_,textAreaWrapper:d_,textAreaWrapperHeigh:o_,dynamiskKolonne:g_},k_=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),m_=({beregningsgrunnlag:e})=>d.jsxs("div",{className:u_.aksjonspunktBehandlerContainer,children:[d.jsx(ke,{children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(j,{sixteenPx:!0}),d.jsx(QB,{beregningsgrunnlag:e}),d.jsx(j,{sixteenPx:!0}),d.jsx(XB,{beregningsgrunnlag:e}),d.jsx(j,{sixteenPx:!0}),k_(e)&&d.jsxs(d.Fragment,{children:[d.jsx(WB,{beregningsgrunnlag:e}),d.jsx(j,{sixteenPx:!0}),d.jsx($B,{beregningsgrunnlag:e})]})]}),p_=e=>d.jsx(m_,{beregningsgrunnlag:e}),v_=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===Vl.FRISINN?p_(e):null},f_=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===mp.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,y_=e=>!!(e!=null&&e.besteberegninggrunnlag),b_=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],c_=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:s,vilkarPeriode:i,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:g,vilkår:k,submitCallback:p,formData:v,setFormData:b,aktivIndex:y})=>{var c;const{skjaeringstidspunktBeregning:x,beregningsgrunnlagPeriode:A,faktaOmBeregning:N,ytelsesspesifiktGrunnlag:R}=n,S=f_(N),q=y_(R),P=d.jsx("div",{className:G.storSpace}),D=b_(A),_=o&&o.length>0;return d.jsxs(d.Fragment,{children:[_&&d.jsxs(d.Fragment,{children:[d.jsx(j,{eightPx:!0}),d.jsx(RF,{avklaringsbehov:o,beregningsgrunnlag:n})]}),d.jsxs(B,{children:[d.jsxs(T,{className:G.venstreKolonne,children:[d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(j,{sixteenPx:!0}),d.jsx(_B,{kodeverkSamling:s,aktivitetStatusList:D,skjeringstidspunktDato:x,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),P,r.skalViseBeregningsgrunnlag&&d.jsx(lr,{relevanteStatuser:r,allePerioder:A,gjelderBesteberegning:S,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),q&&d.jsxs(d.Fragment,{children:[P,d.jsx(bF,{besteMåneder:(c=R==null?void 0:R.besteberegninggrunnlag)==null?void 0:c.besteMåneder,periode:A[0]})]})]}),d.jsxs(T,{className:G.hoyreKolonne,children:[d.jsx(se,{size:"medium",className:G.panelRight,children:d.jsx(m,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(j,{sixteenPx:!0}),d.jsx(xB,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:s,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:S,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:g,vilkår:k,submitCallback:p,formData:v,setFormData:b,aktivIndex:y}),d.jsxs(d.Fragment,{children:[d.jsx(j,{sixteenPx:!0}),d.jsx(v_,{beregningsgrunnlag:n})]}),i&&d.jsx(mF,{beregningsgrunnlag:n,vilkårsperiode:i})]})]})]})},j_="_readOnlyBlokk_3qjl7_1",h_={readOnlyBlokk:j_},A_=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(d.Fragment,{children:[d.jsx(F,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsx(j,{sixteenPx:!0}),d.jsxs(E,{size:"small",className:h_.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(gt,{})]})]}),I_=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],T_=e=>e.avklaringsbehov.filter(n=>I_.some(r=>r===n.definisjon)),R_=e=>({isArbeidstaker:e.some(n=>gp(n)),isFrilanser:e.some(n=>op(n)),isSelvstendigNaeringsdrivende:e.some(n=>up(n)),isMidlertidigInaktiv:e.some(n=>n===$.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>qq(n)),harDagpengerEllerAAP:e.some(n=>dp(n)),isAAP:e.some(n=>n===$.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===$.DAGPENGER||n===$.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>Sq(n))||e.length>1,isMilitaer:e.some(n=>Pq(n))}),E_=e=>e?e.find(n=>n.definisjon===ue.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,Nu=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),N_=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:s,vilkar:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:k})=>{const p=n[e],v=R_(p.aktivitetStatus),b=E_(p.avklaringsbehov);function y(c){const x=Nu(i,c.vilkårsperiodeFom);return x.vurderesIBehandlingen&&!x.erForlengelse}return d.jsxs(d.Fragment,{children:[d.jsx(c_,{readOnly:t||!y(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:T_(n[e]),relevanteStatuser:v,readOnlySubmitButton:s,kodeverkSamling:l,vilkarPeriode:Nu(i,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:i,submitCallback:r,formData:g,setFormData:k,aktivIndex:e}),b&&d.jsx(A_,{avklaringsbehov:b})]})},x_="_contentContainer_1ddng_1",q_="_sideMenuContainer_1ddng_4",S_="_mainContainer--withSideMenu_1ddng_7",P_="_advarselIkon_1ddng_12",Zt={contentContainer:x_,sideMenuContainer:q_,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:S_,advarselIkon:P_},F_=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],B_=[],__=hq.bind(Zt),xu=Ue(xp),O_=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Title"})}),d.jsx(j,{eightPx:!0}),d.jsx(B,{children:d.jsx(T,{children:d.jsx(m,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})})]})},D_=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},w_=e=>e.avklaringsbehov.some(n=>F_.some(r=>r===n.definisjon)&&n.kanLoses),V_=(e,n)=>e.map(r=>({skalVurderes:D_(n,r),harAvklaringsbehov:w_(r),stp:I(r.skjaeringstidspunktBeregning).format(re)})),M_=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const k=e||B_,p=k.length>1;k.sort((x,A)=>x.skjaeringstidspunktBeregning.localeCompare(A.skjaeringstidspunktBeregning)).reverse();const[v,b]=h.useState(0),y=V_(k,s),c=__("mainContainer",{"mainContainer--withSideMenu":p});return h.useEffect(()=>{const x=y.findIndex(A=>A.skalVurderes&&A.harAvklaringsbehov);x>-1&&b(x)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(Ke,{value:xu,children:O_(s)}):d.jsx(Ke,{value:xu,children:d.jsxs("div",{className:c,children:[p&&d.jsx("div",{className:Zt.sideMenuContainer,children:d.jsx(qv,{links:y.map((x,A)=>({icon:x.skalVurderes&&x.harAvklaringsbehov?d.jsx(Or,{className:Zt.advarselIkon}):null,active:v===A,label:`${x.stp}`})),onClick:b})}),d.jsx("div",{className:Zt.contentContainer,children:d.jsx(N_,{aktivtBeregningsgrunnlagIndeks:v,beregningsgrunnlagListe:k,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,setFormData:g,formData:o})})]})})},G_=e=>{switch(e){case ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},L_=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:G_(s.kode),...s.grunnlag[0]}));return e(t)},K_=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),$_=(e,n)=>{const r=e.find(s=>s.vilkarType&&s.vilkarType===ar.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[K_(n,r)]}},U_=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],Y_=[de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],H_=[ar.BEREGNINGSGRUNNLAGVILKARET],C_=({arbeidsgiverOpplysningerPerId:e,...n})=>{const r=J(),t=al(Y_,H_),{behandling:s}=h.use(_n),i=Bn(s),{data:l,isFetching:o}=Fn(i.beregningsgrunnlagOptions(s));return a.jsx(Cu,{...n,standardPanelProps:t,prosessPanelKode:nl.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:r.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:o?a.jsx(Sn,{}):a.jsx(z_,{kodeverkSamling:t.alleKodeverk,beregningsgrunnlagsvilkar:$_(t.vilkar,l),beregningsgrunnlagListe:U_(l),arbeidsgiverOpplysningerPerId:e,submitCallback:L_(t.submitCallback),isReadOnly:t.isReadOnly,readOnlySubmitButton:t.readOnlySubmitButton})})},z_=e=>{const{formData:n,setFormData:r}=$n();return a.jsx(M_,{...e,formData:n,setFormData:r})};C_.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const qu=de.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,Ii=[ar.MEDLEMSKAPSVILKÅRET_LØPENDE],J_=({...e})=>{const n=J(),r=al([qu],Ii);return a.jsx(iv,{overstyringApKode:qu,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:a.jsx(Lv,{...e,standardPanelProps:r,prosessPanelKode:nl.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:$u(r.aksjonspunkter,Ii,r.vilkar),children:a.jsx(Rv,{vilkar:r.vilkar,vilkarKoder:Ii,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};J_.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const W_="_panel_d5cml_1",X_="_hyphen_d5cml_9",Z_="_marginTop_d5cml_19",Q_="_marginBottom_d5cml_23",eO="_colWidth_d5cml_27",Vn={panel:W_,hyphen:X_,marginTop:Z_,marginBottom:Q_,colWidth:eO},nO=(e,n)=>e&&n!==void 0,rO=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===sr.OPPRETTET?void 0:t!==n,ansesMottatt:t,...Dr.buildInitialValues(e)}},tO=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:de.VURDER_SOKNADSFRIST_FORELDREPENGER,...Dr.transformValues(e)}),Yp=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:s,submitCallback:i,harÅpneAksjonspunkter:l}=xn(),o=rO(t,n,r),{formData:g,setFormData:k}=$n(),p=ze({defaultValues:g||o}),v=p.watch("gyldigSenFremsetting"),b=r==null?void 0:r.søknadsperiodeStart,y=r==null?void 0:r.søknadsperiodeSlutt,c=r==null?void 0:r.utledetSøknadsfrist;return a.jsxs(Je,{formMethods:p,onSubmit:x=>i(tO(x)),setDataOnUnmount:k,children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),a.jsx(j,{twentyPx:!0}),l&&a.jsx(or,{children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:c?hr(c).format(re):""}})}),a.jsx(j,{twentyPx:!0}),a.jsx(qe,{children:a.jsxs(B,{children:[a.jsx(T,{className:Vn.colWidth,children:a.jsxs(Qi,{className:Vn.panel,children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),a.jsxs("ul",{className:Vn.hyphen,children:[a.jsx("li",{children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),a.jsx("li",{children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),a.jsx("li",{children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]})}),a.jsx(T,{className:Vn.colWidth,children:a.jsx(qe,{children:a.jsxs(B,{className:Vn.marginBottom,children:[a.jsxs(T,{className:Vn.colWidth,children:[a.jsx(ke,{children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&a.jsx(E,{size:"small",children:hr(n).format(re)})]}),b&&y&&a.jsxs(T,{className:Vn.colWidth,children:[a.jsx(ke,{children:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),a.jsx(E,{size:"small",children:`${hr(b).format(re)} - ${hr(y).format(re)}`})]})]})})})]})}),a.jsxs("div",{className:Vn.marginTop,children:[a.jsx(Dr,{readOnly:s}),a.jsx(j,{sixteenPx:!0}),a.jsx(Ne,{name:"gyldigSenFremsetting",validate:[X],isReadOnly:s,isHorizontal:!0,isEdited:nO(t.length>0,v),isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),v&&a.jsxs(a.Fragment,{children:[a.jsx(j,{sixteenPx:!0}),a.jsx(Bu,{children:a.jsx(tr,{name:"ansesMottatt",isReadOnly:s,label:a.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[X,Rn,hv]})})]}),a.jsx(j,{twentyPx:!0}),a.jsx(Kv,{isReadOnly:s,isSubmittable:!e,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty})]})]})};Yp.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const sO={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},aO=Ue(sO),Hp=({soknad:e,readOnlySubmitButton:n})=>a.jsx(Ke,{value:aO,children:a.jsx(Yp,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Hp.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const iO=[de.VURDER_SOKNADSFRIST_FORELDREPENGER],lO=e=>{const n=J(),r=al(iO),{behandling:t}=h.use(_n),s=Bn(t),{data:i}=Fn(s.søknadOptions(t));return a.jsx(Cu,{...e,standardPanelProps:r,prosessPanelKode:nl.SOEKNADSFRIST,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:$u(r.aksjonspunkter),children:i?a.jsx(Hp,{soknad:i,readOnlySubmitButton:r.readOnlySubmitButton}):a.jsx(Sn,{})})};lO.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Ln={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},dO="_godkjentImage_1bp9b_1",oO="_avslattImage_1bp9b_7",gO="_margin_1bp9b_13",uO="_fix_1bp9b_17",Wr={godkjentImage:dO,avslattImage:oO,margin:gO,fix:uO},kO="MELLOMLIGGENDE_PERIODE",mO=e=>e===Ln.BEKREFTET_AVVIST||e===Ln.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",Su=e=>e===Ln.BEKREFTET_GODKJENT||e===Ln.ANTATT_GODKJENT||e===kO,Cp=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const s=J();return a.jsxs(Qi,{border:!0,children:[a.jsx(qe,{children:a.jsxs(B,{spaceBetween:!0,children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})})}),a.jsxs(T,{className:Wr.fix,children:[a.jsx(ae,{className:Wr.margin,size:"xsmall",icon:a.jsx(js,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.prevPeriod"}),children:a.jsx(m,{id:"TimeLineData.prevPeriodShort"})}),a.jsx(ae,{className:Wr.margin,size:"xsmall",icon:a.jsx(hs,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:a.jsx(m,{id:"TimeLineData.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(rr,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]})}),a.jsx(j,{sixteenPx:!0}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:e.fom,dateStringTom:e.tom})}),a.jsx(j,{sixteenPx:!0}),a.jsxs(te,{children:[Su(e.klasse)&&a.jsx(Ji,{className:Wr.godkjentImage}),!Su(e.klasse)&&a.jsx(rr,{className:Wr.avslattImage}),a.jsx(m,{id:mO(e.klasse)})]})]})};Cp.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const pO={danger:a.jsx(Yu,{}),success:a.jsx(sl,{}),info:a.jsx(Zv,{})},vO=e=>e===Ln.BEKREFTET_AVVIST||e===Ln.ANTATT_AVVIST?"danger":e===Ln.BEKREFTET_GODKJENT||e===Ln.ANTATT_GODKJENT?"success":"info",fO=e=>e.map(n=>({start:I(n.fom).toDate(),end:I(n.tom).toDate(),status:vO(n.klasse),opptjeningsperiode:n})),yO=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",zp=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=J(),s=h.useMemo(()=>[...e].sort((b,y)=>I(b.fom).diff(I(y.fom))),[e]),i=h.useMemo(()=>fO(s),[s]),[l,o]=h.useState(),g=b=>{const y=i.find(c=>{var x;return((x=c.opptjeningsperiode)==null?void 0:x.fom)===b});y&&o(y)},k=h.useCallback(()=>{o(void 0)},[]),p=h.useCallback(()=>{if(i){const b=i.findIndex(y=>{var c,x;return((c=y.opptjeningsperiode)==null?void 0:c.fom)===((x=l==null?void 0:l.opptjeningsperiode)==null?void 0:x.fom)})+1;b<i.length&&o(i[b])}},[i,l,o]),v=h.useCallback(()=>{if(i){const b=i.findIndex(y=>{var c,x;return((c=y.opptjeningsperiode)==null?void 0:c.fom)===((x=l==null?void 0:l.opptjeningsperiode)==null?void 0:x.fom)})-1;b>=0&&o(i[b])}},[i,l,o]);return a.jsxs(a.Fragment,{children:[a.jsx(j,{twentyPx:!0}),a.jsxs(Me,{startDate:I(n).subtract(1,"months").toDate(),endDate:I(r).add(10,"days").toDate(),children:[a.jsxs(Me.Pin,{date:I(n).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"OpptjeningTimeLineLight.StartDato"})}),a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:n})})]}),a.jsxs(Me.Pin,{date:I(r).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"OpptjeningTimeLineLight.SluttDato"})}),a.jsx(E,{size:"small",children:a.jsx(Ae,{dateString:r})})]}),a.jsx(Me.Row,{label:"",children:i.map(b=>{var y,c,x;return a.jsx(Me.Period,{start:b.start,end:b.end,status:b.status,onSelectPeriod:()=>{var A;return g((A=b.opptjeningsperiode)==null?void 0:A.fom)},isActive:((y=l==null?void 0:l.opptjeningsperiode)==null?void 0:y.fom)===((c=b.opptjeningsperiode)==null?void 0:c.fom),icon:pO[b.status],title:t.formatMessage({id:yO(b.status)})},(x=b.opptjeningsperiode)==null?void 0:x.fom)})})]}),a.jsx(j,{sixteenPx:!0}),(l==null?void 0:l.opptjeningsperiode)&&a.jsx(Cp,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:k,velgNestePeriode:p,velgForrigePeriode:v})]})};zp.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const Ql=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:s})=>a.jsxs(a.Fragment,{children:[a.jsx(E,{size:"small",children:a.jsx(m,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),a.jsx(j,{eightPx:!0}),a.jsx(E,{size:"small",children:a.jsx(Ye,{dateStringFom:t,dateStringTom:s})}),a.jsx(j,{sixteenPx:!0}),r.length>0&&a.jsx(zp,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:s})]});Ql.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const bO=(e,n,r)=>({...il.buildInitialValues(e,n,r),...Dr.buildInitialValues(e)}),cO=e=>({...il.transformValues(e),...Dr.transformValues(e),kode:de.VURDER_OPPTJENINGSVILKARET}),Jp=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:s})=>{const i=J(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:g,harÅpneAksjonspunkter:k,isReadOnly:p,alleMerknaderFraBeslutter:v}=xn(),b=o.some(_=>{var H;return(H=v[_.definisjon])==null?void 0:H.notAccepted}),y=bO(o,r,l.behandlingsresultat),{formData:c,setFormData:x}=$n(),A=ze({defaultValues:c||y}),R=o.some(_=>_.status===sr.OPPRETTET)?void 0:Hu.OPPFYLT===r,S=h.useCallback(_=>g(cO(_)),[g]),q=h.useCallback((..._)=>a.jsx("b",{children:_}),[]),P=h.useCallback(_=>{var H;return((H=t.fastsattOpptjeningAktivitetList)==null?void 0:H.length)===0&&_===!0?i.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},[]),D=h.useCallback(()=>a.jsxs(a.Fragment,{children:[a.jsx(j,{sixteenPx:!0}),a.jsx(Ql,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom})]}),[t]);return a.jsx(Je,{formMethods:A,onSubmit:S,setDataOnUnmount:x,children:a.jsxs($v,{title:i.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:k,readOnlySubmitButton:e,readOnly:p,lovReferanse:n,originalErVilkarOk:R,erIkkeGodkjentAvBeslutter:b,isDirty:A.formState.isDirty,isSubmitting:A.formState.isSubmitting,rendreFakta:D,children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:s?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),a.jsx(il,{readOnly:p,customVilkarOppfyltText:a.jsx(m,{id:s?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:a.jsx(m,{id:s?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:q}}),validatorsForRadioOptions:[P]}),a.jsx(j,{sixteenPx:!0}),a.jsx(Dr,{readOnly:p})]})})};Jp.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const Wp=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:s})=>{const{aksjonspunkterForPanel:i}=xn();return i.length>0?a.jsx(Jp,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:s}):a.jsx(Ql,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};Wp.__docgenInfo={description:`OpptjeningVilkarForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const jO={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},hO=Ue(jO),AO=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:s=!1})=>a.jsx(Ke,{value:hO,children:a.jsx(Wp,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:s})});AO.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const IO=(e,n)=>e.filter(r=>r.opptjeningsår===n),Xp=e=>e.aktivitetStatus+e.arbeidsgiverId,TO=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?t.fødselsdato?`${t.navn} (${I(t.fødselsdato).format(re)})`:t.navn:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?Lu(r)(e.aktivitetStatus,un.AKTIVITET_STATUS):""},RO=(e,n,r)=>({identifikator:Xp(e),visningsnavn:TO(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),EO=(e,n,r)=>{const t=[];return e.forEach(s=>{const i=s.erBrukerMottaker?s.årsbeløp:0,l=s.erBrukerMottaker?0:s.årsbeløp,o=Xp(s),g=t.find(k=>k.identifikator===o);g?(g.utbetaltTilSøker+=i,g.utbetaltIRefusjon+=l):t.push(RO(s,n,r))}),t},NO=["TilkjentYtelse.Feriepenger.AndelNavn","TilkjentYtelse.Feriepenger.GrunnlagRefusjon","TilkjentYtelse.Feriepenger.GrunnlagSøker"],Zp=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const s=!e||e.length<1,i=h.useMemo(()=>s?void 0:IO(e,n),[e,n]),l=h.useMemo(()=>i?EO(i,t,r):[],[i]);return s?null:a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:a.jsx(m,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),a.jsx(qn,{headerTextCodes:NO,children:l.map(o=>a.jsxs(Pn,{children:[a.jsx(ee,{children:a.jsx(E,{size:"small",children:o.visningsnavn})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:o.utbetaltIRefusjon})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})};Zp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const xO=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]},qO=()=>a.jsx(se,{size:"small",children:a.jsx(m,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Qp=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:s})=>{const{andeler:i}=e,l=!i||i.length<1,o=h.useMemo(()=>l?[]:xO(i),[i]);return l?null:a.jsx(Se,{children:a.jsxs(Se.Item,{open:t,children:[a.jsx(Se.Header,{onClick:s,children:qO()}),a.jsx(Se.Content,{children:o.map(g=>a.jsxs("div",{children:[a.jsx(j,{sixteenPx:!0},`spacer_${g}`),a.jsx(Zp,{alleAndeler:i,opptjeningsår:g,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${g}`)]},`div_${g}`))})]})})};Qp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ev=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,s]=h.useState(!1);return a.jsx(Qp,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:()=>s(!t)})};ev.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const SO="_detailsPeriode_1r02x_1",PO="_margin_1r02x_9",FO="_fix_1r02x_13",Ct={detailsPeriode:SO,margin:PO,fix:FO},BO={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},_O=e=>e?`...${e.substring(e.length-4,e.length)}`:"",OO=(e,n,r)=>{const t=r[e.arbeidsgiverReferanse];return!t||!t.navn?e.arbeidsforholdType?n(e.arbeidsforholdType,un.OPPTJENING_AKTIVITET_TYPE):"":t.erPrivatPerson?`${t.navn} (${t.fødselsdato})`:`${t.navn} (${t.identifikator})${_O(e.eksternArbeidsforholdId)}`},DO=(e=!1)=>e?["TilkjentYtelse.PeriodeData.Andel","TilkjentYtelse.PeriodeData.Utbetalingsgrad","TilkjentYtelse.PeriodeData.Refusjon","TilkjentYtelse.PeriodeData.TilSoker","TilkjentYtelse.PeriodeData.SisteUtbDato"]:["TilkjentYtelse.PeriodeData.Andel","TilkjentYtelse.PeriodeData.KontoType","TilkjentYtelse.PeriodeData.Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad","TilkjentYtelse.PeriodeData.Refusjon","TilkjentYtelse.PeriodeData.TilSoker","TilkjentYtelse.PeriodeData.SisteUtbDato"],wO=(e,n,r)=>{switch(e.aktivitetStatus){case Mn.ARBEIDSTAKER:return OO(e,n,r);case Mn.FRILANSER:return a.jsx(m,{id:"TilkjentYtelse.PeriodeData.Frilans"});case Mn.SELVSTENDIG_NAERINGSDRIVENDE:return a.jsx(m,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case Mn.DAGPENGER:return a.jsx(m,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case Mn.ARBEIDSAVKLARINGSPENGER:return a.jsx(m,{id:"TilkjentYtelse.PeriodeData.AAP"});case Mn.MILITAER_ELLER_SIVIL:return a.jsx(m,{id:"TilkjentYtelse.PeriodeData.Militaer"});case Mn.BRUKERS_ANDEL:return a.jsx(m,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},VO=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return a.jsx(m,{id:n})},nv=({selectedItemData:e,callbackForward:n,callbackBackward:r,alleKodeverk:t,isSoknadSvangerskapspenger:s,arbeidsgiverOpplysningerPerId:i,lukkPeriode:l})=>{const o=yv(e.fom,e.tom),g=J(),k=Lu(t),p=h.useCallback((...v)=>a.jsx("b",{children:v}),[]);return a.jsxs(Qi,{border:!0,children:[a.jsxs(qe,{children:[a.jsxs(B,{spaceBetween:!0,children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"TilkjentYtelse.PeriodeData.Detaljer"})})}),a.jsxs(T,{className:Ct.fix,children:[a.jsx(ae,{className:Ct.margin,size:"xsmall",icon:a.jsx(js,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.prevPeriod"}),children:a.jsx(m,{id:"Timeline.prevPeriodShort"})}),a.jsx(ae,{className:Ct.margin,size:"xsmall",icon:a.jsx(hs,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:a.jsx(m,{id:"Timeline.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(rr,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),a.jsx(j,{sixteenPx:!0}),a.jsxs("div",{className:Ct.detailsPeriode,children:[a.jsxs(B,{spaceBetween:!0,children:[a.jsx(T,{children:a.jsx(F,{size:"small",children:a.jsx(m,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:I(e.fom).format(re).toString(),tomVerdi:I(e.tom).format(re).toString()}})})}),a.jsx(T,{children:a.jsx(E,{size:"small",children:o.formattedString})})]}),a.jsx(j,{eightPx:!0}),a.jsx(B,{children:a.jsx(T,{children:a.jsx(m,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:p}})})})]})]}),a.jsx(j,{sixteenPx:!0}),e.andeler&&e.andeler.length!==0&&a.jsx(qn,{headerTextCodes:DO(s),children:e.andeler.map((v,b)=>a.jsxs(Pn,{children:[a.jsx(ee,{children:wO(v,k,i)}),!s&&a.jsx(ee,{children:a.jsx(E,{size:"small",children:BO[v.uttak.stonadskontoType]})}),!s&&a.jsx(ee,{children:a.jsx(E,{size:"small",children:VO(v)})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:v.utbetalingsgrad?v.utbetalingsgrad:""})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:v.aktivitetStatus===Mn.ARBEIDSTAKER&&v.refusjon?v.refusjon:""})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:v.tilSoker?v.tilSoker:""})}),a.jsx(ee,{children:a.jsx(E,{size:"small",children:v.sisteUtbetalingsdato?I(v.sisteUtbetalingsdato).format(re):""})})]},`index${b+1}`))})]})};nv.__docgenInfo={description:`TimeLineData

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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const MO="_space_ckypy_1",GO="_margin_ckypy_5",LO="_readOnlyBlokk_ckypy_9",jr={space:MO,margin:GO,readOnlyBlokk:LO},KO=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,$O=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===Ev.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},UO=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:KO(n),start:I(n.fom).toDate(),end:I(n.tom).add(1,"days").toDate(),id:r,periode:n})),YO=(e,n)=>{var t;return((t=n[un.RELASJONSROLLE_TYPE].find(s=>s.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},HO=(e,n)=>{const r=I(e);return r.isBefore(n)?n.subtract(5,"days"):r},rv=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:r,hovedsokerKjonnKode:t,alleKodeverk:s,arbeidsgiverOpplysningerPerId:i,fagsak:l})=>{const o=J(),[g,k]=h.useState(),p=h.useMemo(()=>UO(e),[e]),v=h.useCallback(()=>{k(null)},[]),b=h.useCallback(()=>{const L=p.findIndex(M=>M.id===(g==null?void 0:g.id))+1;L<p.length&&k(p[L])},[p,g,k]),y=h.useCallback(()=>{const L=p.findIndex(M=>M.id===(g==null?void 0:g.id))-1;L>=0&&k(p[L])},[p,g,k]),c=h.useCallback(L=>{k(p.find(M=>M.id===L))},[k,p]),x=I(p[0].start),A=I(p[p.length-1].end),[N,R]=h.useState(x),[S,q]=h.useState(A),P=()=>{N.subtract(1,"month").isBefore(x)||(R(N.subtract(1,"month")),q(S.subtract(1,"month")))},D=()=>{S.add(1,"month").isAfter(A)||(R(N.add(1,"month")),q(S.add(1,"month")))},_=()=>{N.add(3,"month").isAfter(S)||(R(N.add(1,"month")),q(S.subtract(1,"month")))},H=()=>{S.add(1,"month").diff(N.subtract(1,"month"),"months")<36&&(R(N.subtract(1,"month")),q(S.add(1,"month")))},C=h.useMemo(()=>$O(r),[r]);return a.jsxs(a.Fragment,{children:[a.jsxs(Me,{startDate:N.toDate(),endDate:S.add(1,"days").toDate(),children:[a.jsxs(Me.Pin,{date:I(n).toDate(),children:[a.jsx(E,{children:a.jsx(m,{id:"TilkjentYtelse.Soknadsdato"})}),a.jsx(E,{children:a.jsx(Ae,{dateString:n})})]}),C.dato&&a.jsxs(Me.Pin,{date:HO(C.dato,N).toDate(),children:[a.jsx(E,{children:a.jsx(m,{id:C.textId})}),a.jsx(E,{children:a.jsx(Ae,{dateString:C.dato})})]}),a.jsx(Me.Row,{label:YO(l,s),icon:t===Uv.KVINNE?a.jsx(Sv,{width:20,height:20,color:"var(--a-red-200)"}):a.jsx(Pv,{width:20,height:20,color:"var(--a-blue-600)"}),children:p.map(L=>a.jsx(Me.Period,{start:L.start,end:L.end,status:"success",onSelectPeriod:()=>c(L.id),isActive:(g==null?void 0:g.id)===L.id,icon:L.erGradert?a.jsx(sf,{"aria-hidden":!0}):a.jsx(sl,{"aria-hidden":!0}),title:L.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},L.id))})]}),a.jsx(j,{twentyPx:!0}),a.jsxs(Rr,{children:[a.jsx(ae,{className:jr.margin,size:"small",icon:a.jsx(Vv,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),a.jsx(ae,{className:jr.margin,size:"small",icon:a.jsx(_v,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),a.jsx(ae,{className:jr.margin,size:"small",icon:a.jsx(js,{"aria-hidden":!0}),onClick:P,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),a.jsx(ae,{className:jr.margin,size:"small",icon:a.jsx(hs,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),a.jsx("div",{className:jr.space}),g&&a.jsxs(a.Fragment,{children:[a.jsx(j,{eightPx:!0}),a.jsx(nv,{alleKodeverk:s,selectedItemData:g.periode,callbackForward:b,callbackBackward:y,isSoknadSvangerskapspenger:l.fagsakYtelseType===lv.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:i,lukkPeriode:v})]})]})};rv.__docgenInfo={description:`TilkjentYtelse

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
}>`},description:""}}};const CO=e=>{var n;return e?(n=e.find(r=>r.definisjon===de.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse:void 0},tv=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:s,soknad:i})=>{var v,b;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:g}=xn(),k=CO(g),p=(v=i.søknadsfrist)!=null&&v.mottattDato?(b=i.søknadsfrist)==null?void 0:b.mottattDato:i.mottattDato;return a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(m,{id:"TilkjentYtelse.Title"})}),a.jsx(j,{thirtyTwoPx:!0}),e&&a.jsx(rv,{beregningsresultatPeriode:e.perioder,soknadDate:p,familieHendelseSamling:t,hovedsokerKjonnKode:s!=null&&s.bruker?s.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&a.jsxs(a.Fragment,{children:[a.jsx(j,{thirtyTwoPx:!0}),a.jsx(ev,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),a.jsx(j,{thirtyTwoPx:!0})]}),k&&a.jsxs(a.Fragment,{children:[a.jsx(F,{children:a.jsx(m,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),a.jsx(j,{sixteenPx:!0}),a.jsxs(E,{className:jr.readOnlyBlokk,children:[k," ",a.jsx(gt,{})]})]})]})};tv.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const zO={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},JO=Ue(zO),WO=e=>a.jsx(Ke,{value:JO,children:a.jsx(tv,{...e})});WO.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{Oy as A,C_ as B,J_ as F,nx as I,AO as O,fq as P,lf as S,WO as T,lO as a,Cy as b,Ox as c,rI as d,MN as e,sf as f,Zv as g};
