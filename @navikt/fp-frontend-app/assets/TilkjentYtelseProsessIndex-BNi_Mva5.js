import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as I,R as C}from"./index-DjhIdADd.js";import{l as Ar,U as ep,o as Li,au as Lt,k as un,aq as np,H as ue,g as T,V,f as K,L as B,D as ke,u as Z,h as ae,ar as En,as as Mn,P as Ge,a2 as Zr,at as Jn,e as Rt,ax as rp,aL as _n,F as tp}from"./withPanelData-ct5SkuWt.js";import{u as ap,l as aa,G as Ae,y as $e,r as M,F as Jl,X as Be,I as Ki,a as xe,A as Ee,R as sp,S as $i,a1 as Ui,o as Ve,V as rr,$ as Ke,e as Nn,p as Eu,i as Hi,Y as Se,h as te,aa as Oe,f as Xr,v as Nu,ab as Wl,x as pe,C as ip,n as H,ac as Yi,a2 as Pu,U as lp,D as Kt,t as sa,Q as $t,K as Ut,ad as Ht,ae as dp,a7 as Y,a8 as x,a6 as qu,af as op,ag as gp,ah as qr,d as up,B as Ci,q as kp}from"./index.es-CsWo6KOF.js";import{u as Pn}from"./initFetch-Cxe_yENx.js";import{a as Ye,e as Ce,J as Ne,b as Q,G as Wn,O as In,X as ce,a1 as Su,l as xu,i as Bu,K as Qe,c as yn,o as bn,N as cn,H as ia,j as zi,u as Et,f as en,d as Ie,t as la,Q as Fu,ae as nn,af as Gr,Z as da,ag as mp,ah as vp,E as _u,ai as pp,aj as Zl,g as oa,h as ga,I as fp}from"./index.es-D3QHBa6P.js";import{A as le,h as ua}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as Zn}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as on}from"./alleKodeverk-Dm9joGL5.js";import{V as yp}from"./venteArsakType-BJdSFL9e.js";import{S as bp}from"./SettPaVentModalIndex-E6B6utf3.js";import{c as Ou}from"./bind-oYjWB_aQ.js";import{d as A}from"./dayjs.min-Cke173X9.js";import{a as Hr,g as Du}from"./kodeverkUtils-DLZgokMR.js";import{F as tr,P as Ji}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as Wi}from"./eksterneLenker-DOKwbE_M.js";import{M as u}from"./message-64JzDULN.js";import{L as Qr}from"./Link-sqx5TZu_.js";import{S as ur}from"./Spacer-CKLPZ_2B.js";import{T as wu}from"./Tooltip-CdYk4hOY.js";import{S as Ir}from"./ExclamationmarkTriangleFill-Ce9k_PV1.js";import{k as Zi,V as Xn,l as cp,j as Pa,s as Vu,O as jp,S as hp}from"./VedtakProsessIndex-BHa5Hy4n.js";import{P as vr}from"./Popover-CfnzHKUn.js";import{T as c}from"./Table-CgA1QBaB.js";import{u as qn,h as Mu}from"./behandlingApi-CJNVvn1l.js";import{u as ar,a as sr}from"./VergeFaktaInitPanel-C2ndPHQJ.js";import{B as Sn}from"./FagsakIndex-RUQZzrXJ.js";import{S as Ap}from"./StarFill-BoNgH5o7.js";import{b as xn,B as Ip,S as Tp,a as Rp}from"./index.es-zlC1vQle.js";import{T as kr}from"./BehandlingSupportIndex-CyYMPhrs.js";import{a as Ep,T as we,b as Np,S as Pp}from"./Timeline-en66w23r.js";import{T as ka}from"./Tag-N2uKLD_a.js";import{C as qp}from"./Checkbox-CEHKqIZf.js";import{s as Sp}from"./BehandlingMenuIndex-DdTiWt7T.js";import{H as xp}from"./landkoder-sVFQG0xG.js";import{S as Bp}from"./VisittkortSakIndex-DwtHz5I4.js";import{a as Xi,S as Fp}from"./Plus-BhFmg9Jc.js";import{S as Gu}from"./TotrinnskontrollIndex-CzFXCI30.js";import{V as Lu}from"./BehandlingHenlagtPanel-CVjgTdKg.js";import{i as _p,g as Op}from"./index-BHG4GVne.js";import{u as Qi,P as Ku,b as Dp}from"./useStandardProsessPanelProps-D0qEgWYB.js";import{P as Tr,a as wp,V as el,b as Vp}from"./OverstyringPanel-BvxMNgOW.js";import{K as Mp}from"./Kjonnkode-C-fkzSiP.js";const nl=I.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Gp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const rl=I.createContext(null),Lp=I.forwardRef((e,n)=>{var{children:r,className:t,open:a,defaultOpen:s=!1,onOpenChange:l}=e,o=Gp(e,["children","className","open","defaultOpen","onOpenChange"]);const[g,m]=ap({defaultValue:s,value:a,onChange:l}),v=I.useContext(nl),{cn:f}=Ar(),b=I.useRef(!(a||s)),y=()=>{m(j=>!j),b.current=!0};return v!=null&&v.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),C.createElement("div",Object.assign({className:f("navds-accordion__item",t,{"navds-accordion__item--open":g,"navds-accordion__item--neutral":(v==null?void 0:v.variant)==="neutral","navds-accordion__item--no-animation":!b.current}),"data-expanded":g,ref:n},ep(o,["onClick"])),C.createElement(rl.Provider,{value:{open:g,toggleOpen:y}},r))});var Kp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $p=I.forwardRef((e,n)=>{var{children:r,className:t}=e,a=Kp(e,["children","className"]);const s=I.useContext(rl),l=Li(!1),{cn:o}=Ar();return s===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):C.createElement(Lt,Object.assign({},a,{as:"div",ref:n,className:o("navds-accordion__content",{"navds-accordion__content--closed":!s.open},t),"aria-hidden":!s.open||void 0}),l?C.createElement("div",{className:o("navds-accordion__content-inner")},r):r)});var Up=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Hp=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Up(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var Yp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Cp=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Yp(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var zp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Jp=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=zp(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var Wp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $u=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Wp(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Zp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Sr=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Zp(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var Xp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Qp=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Xp(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var ef=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const nf=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=ef(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var rf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Uu=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=rf(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var tf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const af=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=tf(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var sf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const lf=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=sf(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var df=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const xr=I.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=df(e,["title","titleId"]);let s=un();return s=r?t||"title-"+s:void 0,I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?I.createElement("title",{id:s},r):null,I.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var of=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const gf=I.forwardRef((e,n)=>{var r,{children:t,className:a,onClick:s}=e,l=of(e,["children","className","onClick"]);const o=I.useContext(rl),g=I.useContext(nl),m=Li(!1),{cn:v}=Ar();if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let f=(r=g==null?void 0:g.headingSize)!==null&&r!==void 0?r:"small";return m&&(f=(g==null?void 0:g.size)==="small"?"xsmall":"small"),C.createElement("button",Object.assign({ref:n},l,{className:v("navds-accordion__header",a),onClick:np(s,o.toggleOpen),"aria-expanded":o.open,type:"button"}),C.createElement("span",{className:v("navds-accordion__icon-wrapper")},C.createElement(aa,{className:v("navds-accordion__header-chevron"),"aria-hidden":!0})),C.createElement(ue,{size:f,as:"span",className:v("navds-accordion__header-content")},t))});var uf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const qe=I.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:a="small",size:s="medium",indent:l=!0}=e,o=uf(e,["className","variant","headingSize","size","indent"]);const{cn:g}=Ar();return C.createElement(nl.Provider,{value:{variant:t,headingSize:a,size:s,mounted:!0}},C.createElement("div",Object.assign({},o,{className:g("navds-accordion",r,`navds-accordion--${s}`,{"navds-accordion--indent":l}),ref:n})))});qe.Header=gf;qe.Content=$p;qe.Item=Lp;const Ot=I.createContext({listType:"ul",size:"medium"});var kf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Hu=I.forwardRef((e,n)=>{var{className:r,children:t,title:a,icon:s}=e,l=kf(e,["className","children","title","icon"]);const{listType:o,size:g}=I.useContext(Ot),{cn:m}=Ar();return o==="ol"&&s&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),C.createElement("li",Object.assign({},l,{ref:n,className:m("navds-list__item",r)}),o==="ul"&&C.createElement("div",{className:m("navds-list__item-marker",{"navds-list__item-marker--icon":s,"navds-list__item-marker--bullet":!s})},s||C.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},C.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),C.createElement("div",null,a&&C.createElement(Lt,{as:"p",size:g,weight:"semibold"},a),t))});Hu.displayName="List.Item";var mf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const vf={small:"xsmall",medium:"small",large:"medium"},ne=I.forwardRef((e,n)=>{var{children:r,className:t,as:a="ul",title:s,description:l,headingTag:o="h3",size:g,"aria-label":m,"aria-labelledby":v}=e,f=mf(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:b}=I.useContext(Ot),{cn:y}=Ar(),j=Li(!1),R=g??b;return j?C.createElement(Ot.Provider,{value:{listType:a,size:R}},C.createElement(Lt,Object.assign({as:"div"},f,{size:R,ref:n,className:y("navds-list",`navds-list--${R}`,t)}),C.createElement(a,{role:"list","aria-label":m,"aria-labelledby":v},r))):C.createElement(Ot.Provider,{value:{listType:a,size:R}},C.createElement(Lt,Object.assign({as:"div"},f,{size:R,ref:n,className:y("navds-list",`navds-list--${R}`,t)}),s&&C.createElement(ue,{size:vf[R],as:o},s),l&&C.createElement(T,{size:R},l),C.createElement(a,{role:"list","aria-label":m,"aria-labelledby":v},r)))});ne.Item=Hu;var ie=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(ie||{}),ye=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ye||{}),Yr=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Yr||{});const tl=I.createContext({isDirty:!1,setDirty:()=>{}}),Yu=({children:e})=>{const[n,r]=I.useState(!1),t=I.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return i.jsx(tl.Provider,{value:t,children:e})},al=e=>{const n=I.useContext(tl);I.useEffect(()=>{n.setDirty(e)},[e])},pf=()=>I.useContext(tl).isDirty;Yu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const ff="_inline_glms2_1",yf="_docIcon_glms2_9",bf="_phoneIcon_glms2_14",qa={inline:ff,docIcon:yf,phoneIcon:bf},Cr=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:a,arbeidsgiverFødselsdato:s,ikkeVisInfo:l})=>i.jsxs(i.Fragment,{children:[i.jsxs(V,{gap:"4",children:[!l&&s&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(ke,{children:i.jsx(Ae,{dateString:s})})]}),!l&&!s&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(ke,{children:r.arbeidsgiverIdent})]}),t&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),i.jsx(T,{size:"small",children:r.eksternArbeidsforholdId})]}),n&&i.jsxs(i.Fragment,{children:[i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),i.jsx(T,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:Hr(a,on.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(T,{size:"small",children:M(r.inntektPrMnd)})]}),i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(T,{size:"small",children:i.jsx(u,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(T,{size:"small",children:M(r.refusjonPrMnd)})]}),i.jsxs(Qr,{href:Wi(e,r.journalpostId,r.dokumentId),target:"_blank",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:qa.inline,children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx($u,{className:qa.docIcon})]})]}),i.jsxs(K,{gap:"4",children:[i.jsx(Uu,{className:qa.phoneIcon}),i.jsxs(V,{gap:"1",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(ke,{children:r.kontaktpersonNavn}),i.jsx(ke,{children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Cr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const cf="_inline_10adz_1",jf="_aksjonpunktImage_10adz_5",hf="_arrow_10adz_12",Af="_ikkeMottatt_10adz_18",If="_skiller_10adz_30",Kn={inline:cf,aksjonpunktImage:jf,arrow:hf,ikkeMottatt:Af,skiller:If},Tf=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Rf=(e,n)=>{const r=e.some(a=>a.internArbeidsforholdId),t=e.some(a=>!a.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(a=>!a.internArbeidsforholdId||a.internArbeidsforholdId===n)},Ef=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")},sl=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:a})=>{const s=Z(),[l,o]=I.useState({}),g=n.length===1,m=g?Rf(r,n[0].internArbeidsforholdId):void 0;return i.jsxs(V,{gap:"4",children:[a&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(ke,{children:i.jsx(Ae,{dateString:a})})]}),!a&&n.length>0&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(ke,{children:n[0].arbeidsgiverIdent})]}),!g&&i.jsxs(i.Fragment,{children:[i.jsx(Jl,{dividerParagraf:!0,className:Kn.skiller}),n.map(v=>{const f=r.find(b=>Tf(v,b));return i.jsxs(C.Fragment,{children:[i.jsxs(V,{gap:"2",children:[i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),i.jsxs("div",{children:[v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length<50&&i.jsx("div",{children:i.jsx(T,{size:"small",children:v.eksternArbeidsforholdId})}),v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length>=50&&i.jsx(wu,{content:Ef(v.eksternArbeidsforholdId),children:i.jsx(T,{size:"small",children:`${v.eksternArbeidsforholdId.substring(0,50)}...`})}),!v.eksternArbeidsforholdId&&i.jsx(T,{size:"small",children:"-"})]}),f&&i.jsxs(i.Fragment,{children:[i.jsx(ur,{}),i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!f&&i.jsxs(i.Fragment,{children:[i.jsx(ur,{}),i.jsxs("div",{children:[i.jsx(Ir,{className:Kn.aksjonpunktImage,title:s.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),i.jsx("div",{className:Kn.ikkeMottatt,children:i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:v.fom,dateStringTom:v.tom!==Be?v.tom:void 0})}),f&&i.jsxs(i.Fragment,{children:[i.jsx(ur,{}),i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:f.motattDato})})]})]}),i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(T,{size:"small",children:`${v.stillingsprosent}%`})]}),v.permisjonOgMangel&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:Hr(t,on.PERMISJONSBESKRIVELSE_TYPE,v.permisjonOgMangel.type)}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:v.permisjonOgMangel.permisjonFom,dateStringTom:v.permisjonOgMangel.permisjonTom})})]}),f&&i.jsxs(i.Fragment,{children:[v.internArbeidsforholdId&&l[v.internArbeidsforholdId]&&i.jsx(Cr,{saksnummer:e,inntektsmelding:f,skalViseArbeidsforholdId:!1}),i.jsxs(Qr,{onClick:b=>{b.preventDefault(),o(y=>{if(!v.internArbeidsforholdId)return y;const j=y[v.internArbeidsforholdId];return{...y,[v.internArbeidsforholdId]:j===void 0||j===!1}})},href:"",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:Kn.inline,children:i.jsx(u,{id:!v.internArbeidsforholdId||!l[v.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),v.internArbeidsforholdId&&l[v.internArbeidsforholdId]?i.jsx(Ki,{className:Kn.arrow}):i.jsx(aa,{className:Kn.arrow})]})]})]}),i.jsx(Jl,{dividerParagraf:!0,className:Kn.skiller})]},`${v.arbeidsgiverIdent}${v.internArbeidsforholdId}`)})]}),g&&!!m&&i.jsx(Cr,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:m,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),g&&r.length===0&&i.jsxs(i.Fragment,{children:[i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(T,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:Hr(t,on.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})};sl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Nf="_bredde_gb3eb_1",Pf="_inline_gb3eb_9",qf="_arrow_gb3eb_13",Nt={bredde:Nf,inline:Pf,arrow:qf},Sf=[],xf=(e,n)=>{const t=A(e).subtract(1,"month").startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),g=n.find(m=>A(m.fom).startOf("month").format(xe)===o);s.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return s},il=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:a=Sf,alleKodeverk:s,arbeidsgiverFødselsdato:l})=>{const[o,g]=I.useState(!1),m=I.useMemo(()=>xf(n,r),[r]),v=t.length===1,f=r.length>0&&r.some(b=>b.beløp>0);return i.jsxs(V,{gap:"8",children:[i.jsx(sl,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:a,alleKodeverk:s,arbeidsgiverFødselsdato:l}),f&&i.jsxs(V,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:v?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),i.jsx(V,{gap:"1",children:m.filter((b,y)=>o?!0:y<3).map(b=>i.jsxs(K,{gap:"2",className:Nt.bredde,children:[i.jsx(T,{size:"small",children:i.jsx(u,{id:`ArbeidsforholdInformasjonPanel.${A(b.fom).month()+1}`})}),i.jsx(T,{size:"small",children:A(b.fom).year()}),i.jsx(ur,{}),i.jsx(T,{size:"small",children:M(b.beløp)})]},b.fom))}),i.jsxs(Qr,{onClick:b=>{b.preventDefault(),g(!o)},href:"",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:Nt.inline,children:i.jsx(u,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?i.jsx(Ki,{className:Nt.arrow}):i.jsx(aa,{className:Nt.arrow})]})]}),!f&&i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})};il.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Bf="_hjelpetekst_1kk6h_1",Ff="_alertStripe_1kk6h_5",_f="_hjelpetekstInnhold_1kk6h_9",Of="_svg_1kk6h_14",Pt={hjelpetekst:Bf,alertStripe:Ff,hjelpetekstInnhold:_f,svg:Of},Df=yn(3),wf=bn(1500),Vf=xu(1),Mf=Bu(100),Gf=e=>n=>{const r=e("fom");return r&&n?ia(r)(n):null},Lf=(e,n,r,t)=>()=>{e(a=>a.map(s=>{if(r.arbeidsgiverIdent===s.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return s}))},Cu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:a,radData:s,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:g,lukkArbeidsforholdRad:m,oppdaterTabell:v,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:b})=>{const y=Z(),j=I.useMemo(()=>{var F,z,J,_,G;return{saksbehandlersVurdering:(F=s.avklaring)==null?void 0:F.saksbehandlersVurdering,begrunnelse:(z=s.avklaring)==null?void 0:z.begrunnelse,fom:(J=s.avklaring)==null?void 0:J.fom,tom:(_=s.avklaring)==null?void 0:_.tom,stillingsprosent:(G=s.avklaring)==null?void 0:G.stillingsprosent}},[s]),R=Ye({defaultValues:j});al(R.formState.isDirty);const h=R.watch("saksbehandlersVurdering"),N=()=>{m(),R.reset(j)},E=F=>{const z=Lf(v,s,a,F);return F.saksbehandlersVurdering===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:a.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:a.arbeidsgiverIdent,vurdering:ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:F.begrunnelse,fom:F.fom,tom:F.tom,stillingsprosent:F.stillingsprosent}).then(z).finally(()=>R.reset(F)):g({behandlingUuid:n,behandlingVersjon:r,vurdering:F.saksbehandlersVurdering,begrunnelse:F.begrunnelse,arbeidsgiverIdent:a.arbeidsgiverIdent,internArbeidsforholdRef:a.internArbeidsforholdId}).then(z).finally(()=>R.reset(F))},P=I.useRef(null),[q,S]=I.useState(!1),D=I.useCallback(()=>S(F=>!F),[]);return i.jsxs(V,{gap:"8",children:[i.jsx(Cr,{saksnummer:e,inntektsmelding:a,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:b}),i.jsx("div",{className:Pt.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(u,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),i.jsx(Ce,{formMethods:R,onSubmit:E,children:i.jsxs(V,{gap:"4",children:[i.jsx(Ne,{name:"saksbehandlersVurdering",label:i.jsxs(K,{gap:"2",children:[i.jsx(u,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),i.jsx(Zi,{className:Pt.svg,ref:P,onClick:D,title:y.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),i.jsx(vr,{open:q,onClose:D,anchorEl:P.current,className:Pt.hjelpetekst,children:i.jsx(vr.Content,{className:Pt.hjelpetekstInnhold,children:i.jsx(T,{children:i.jsx(u,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[Q],isReadOnly:l,radios:[{label:y.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:ie.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:y.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:ie.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:y.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),h===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&i.jsxs(K,{gap:"4",children:[i.jsx(Wn,{name:"fom",label:i.jsx(u,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[Q,In],isReadOnly:l}),i.jsx(Wn,{name:"tom",label:i.jsx(u,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[In,Gf(R.getValues)],isReadOnly:l}),i.jsx(ce,{name:"stillingsprosent",label:i.jsx(u,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:F=>{const z=parseInt(F.toString(),10);return Number.isNaN(z)?F:z},validate:[Q,Su,Vf,Mf],readOnly:l,maxLength:3})]}),i.jsx(Qe,{label:i.jsx(u,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[Q,Df,wf,cn],maxLength:1500,readOnly:l}),!l&&i.jsxs(K,{gap:"4",children:[i.jsx(ae,{size:"small",variant:"secondary",loading:R.formState.isSubmitting,disabled:!R.formState.isDirty||R.formState.isSubmitting,children:i.jsx(u,{id:"ManglendeOpplysningerForm.Lagre"})}),i.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:R.formState.isSubmitting,onClick:N,type:"button",children:i.jsx(u,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})};Cu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Kf="_alertStripe_9hpes_1",$f="_hjelpetekst_9hpes_5",Uf="_hjelpetekstInnhold_9hpes_9",Hf="_svg_9hpes_14",qt={alertStripe:Kf,hjelpetekst:$f,hjelpetekstInnhold:Uf,svg:Hf},Yf=yn(3),Cf=bn(1500),zf=(e,n,r)=>()=>{e(t=>t.map(a=>a.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:a))},zu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:a=[],arbeidsforholdForRad:s,inntektsmeldingerForRad:l,radData:o,isReadOnly:g,lagreVurdering:m,lukkArbeidsforholdRad:v,oppdaterTabell:f,alleKodeverk:b,arbeidsgiverFødselsdato:y})=>{const j=Z(),R=I.useMemo(()=>{var J,_;return{saksbehandlersVurdering:(J=o.avklaring)==null?void 0:J.saksbehandlersVurdering,begrunnelse:(_=o.avklaring)==null?void 0:_.begrunnelse}},[o]),h=Ye({defaultValues:R});al(h.formState.isDirty);const N=s.length===1,E=()=>{v(),h.reset(R)},P=J=>{const _={behandlingUuid:n,behandlingVersjon:r,vurdering:J.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:N?s[0].internArbeidsforholdId:void 0,begrunnelse:J.begrunnelse};return m(_).then(zf(f,o,J)).finally(()=>h.reset(J))},q=I.useRef(null),[S,D]=I.useState(!1),F=I.useCallback(()=>D(J=>!J),[]),z=[{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:ie.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:ie.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&z.splice(1,0,{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:ie.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),i.jsxs(V,{gap:"6",children:[i.jsx(il,{saksnummer:e,skjæringspunktDato:t,inntektsposter:a,arbeidsforholdForRad:s,inntektsmeldingerForRad:l,alleKodeverk:b,arbeidsgiverFødselsdato:y}),i.jsx(Ce,{formMethods:h,onSubmit:P,children:i.jsxs(V,{gap:"4",children:[!N&&l.length>0&&i.jsx("div",{className:qt.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(u,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),i.jsx(Ne,{name:"saksbehandlersVurdering",label:i.jsxs(K,{gap:"2",children:[i.jsx(u,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),i.jsx(Zi,{ref:q,onClick:F,className:qt.svg,title:j.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),i.jsx(vr,{open:S,onClose:F,anchorEl:q.current,className:qt.hjelpetekst,children:i.jsx(vr.Content,{className:qt.hjelpetekstInnhold,children:i.jsxs(V,{gap:"4",children:[i.jsx(T,{children:i.jsx(u,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),i.jsx(T,{children:i.jsx(u,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),i.jsx(T,{children:i.jsx(u,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[Q],isReadOnly:g,radios:z}),i.jsx(Qe,{label:i.jsx(u,{id:N?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[Q,Yf,Cf,cn],maxLength:1500,readOnly:g}),!g&&i.jsxs(K,{gap:"4",children:[i.jsx(ae,{size:"small",variant:"secondary",loading:h.formState.isSubmitting,disabled:!h.formState.isDirty||h.formState.isSubmitting,children:i.jsx(u,{id:"InntektsmeldingInnhentesForm.Lagre"})}),i.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:h.formState.isSubmitting,onClick:E,type:"button",children:i.jsx(u,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})]})};zu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const pr="342352362",Jf=yn(3),Wf=bn(1500),Zf=xu(1),Xf=Bu(100),Qf=e=>n=>{const r=e("fom");return n&&r?ia(r)(n):null},ey=e=>n=>{const r={arbeidsgiverIdent:pr,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(a=>a.arbeidsgiverIdent===pr);return t===-1?n.concat(r):n.map((a,s)=>s===t?r:a)},ny=(e,n,r)=>()=>{e(t=>t.filter(a=>a.arbeidsgiverIdent!==pr)),r&&n()},ll=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:g=!1})=>{const m=Z(),[v,f]=I.useState(!1),b=I.useMemo(()=>{var N,E,P,q,S;return{fom:(N=a==null?void 0:a.avklaring)==null?void 0:N.fom,tom:(E=a==null?void 0:a.avklaring)==null?void 0:E.tom,stillingsprosent:(P=a==null?void 0:a.avklaring)==null?void 0:P.stillingsprosent,begrunnelse:(q=a==null?void 0:a.avklaring)==null?void 0:q.begrunnelse,arbeidsgiverNavn:(S=a==null?void 0:a.avklaring)==null?void 0:S.arbeidsgiverNavn}},[a]),y=Ye({defaultValues:b});al(y.formState.isDirty);const j=()=>{s(),y.reset(b)},R=N=>{const E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:pr,vurdering:ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...N};return t(E).then(()=>{o(ey(N)),y.reset(N),g&&s()})},h=()=>{const N=y.getValues(),E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:pr,vurdering:ie.FJERN_FRA_BEHANDLINGEN,...N};t(E).then(ny(o,s,g))};return i.jsxs(V,{gap:"4",children:[!a&&i.jsx(ue,{size:"small",children:i.jsx(u,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),i.jsx(Ce,{formMethods:y,onSubmit:R,children:i.jsxs(V,{gap:"6",children:[i.jsxs(K,{gap:"4",children:[l&&i.jsxs(i.Fragment,{children:[i.jsx(ce,{name:"arbeidsgiverNavn",label:i.jsx(u,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[Q],readOnly:r||!l}),i.jsx(Wn,{name:"fom",label:i.jsx(u,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[Q,In],isReadOnly:r||!l}),i.jsx(Wn,{name:"tom",label:i.jsx(u,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[In,Qf(y.getValues)],isReadOnly:r||!l})]}),i.jsx(ce,{name:"stillingsprosent",label:i.jsx(u,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:N=>{const E=parseInt(N.toString(),10);return Number.isNaN(E)?N:E},validate:[Q,Su,Zf,Xf],readOnly:r||!l,maxLength:3})]}),i.jsx(Qe,{label:i.jsx(u,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[Q,Jf,Wf,cn],maxLength:1500,readOnly:r||!l}),l&&i.jsxs(K,{gap:"4",children:[i.jsx(ae,{size:"small",variant:"secondary",loading:y.formState.isSubmitting,disabled:!y.formState.isDirty||y.formState.isSubmitting,children:i.jsx(u,{id:"LeggTilArbeidsforholdForm.Lagre"})}),i.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:j,type:"button",children:i.jsx(u,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&i.jsxs(i.Fragment,{children:[i.jsx(ur,{}),i.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:()=>f(!0),type:"button",icon:i.jsx(lf,{"aria-hidden":!0}),children:i.jsx(u,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),v&&i.jsx(sp,{text:m.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:h,cancel:()=>f(!1),showModal:!0})]})};ll.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ry="_imageColTopPadding_1ao5k_1",ty="_exclamationmarkIcon_1ao5k_5",ay="_checkmarkIcon_1ao5k_12",sy="_panelOpen_1ao5k_19",iy="_panelOpenAp_1ao5k_28",ly="_row_1ao5k_38",dy="_isOpen_1ao5k_44",oy="_isApOpen_1ao5k_48",jn={imageColTopPadding:ry,exclamationmarkIcon:ty,checkmarkIcon:ay,panelOpen:sy,panelOpenAp:iy,row:ly,isOpen:dy,isApOpen:oy},gy=Ou.bind(jn),uy=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",ky=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,a)=>({fom:t.fom&&A(t.fom).isBefore(a.fom)?t.fom:a.fom,tom:t.tom&&A(t.tom).isAfter(a.tom)?t.tom:a.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},my=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const a=e.find(s=>!s.internArbeidsforholdId||!n||s.internArbeidsforholdId===n);if(!a)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return a},Ju=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:a,isReadOnly:s,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:g,lagreVurdering:m,toggleÅpenRad:v,erRadÅpen:f,alleKodeverk:b})=>{var re,W;const y=Z(),{arbeidsgiverNavn:j,arbeidsgiverIdent:R,årsak:h,avklaring:N,arbeidsgiverFødselsdato:E}=a,P=I.useMemo(()=>t.arbeidsforhold.filter(se=>se.arbeidsgiverIdent===R),[t,R]),q=I.useMemo(()=>t.inntektsmeldinger.filter(se=>se.arbeidsgiverIdent===R),[t,R]),S=(N==null?void 0:N.saksbehandlersVurdering)===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,D=P.length>0&&q.length>0&&!h,F=h===Yr.MANGLENDE_INNTEKTSMELDING,z=h===Yr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,J=!!h&&!(N!=null&&N.saksbehandlersVurdering),_=P.length>0&&q.length===0&&!h&&!S,G=P.length===0&&q.length>0&&!h,w=I.useMemo(()=>ky(P,a.avklaring),[S,P,a.avklaring]),U=(re=t.inntekter.find(se=>se.arbeidsgiverIdent===R))==null?void 0:re.inntekter;return i.jsxs(c.ExpandableRow,{open:f,onOpenChange:v,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:gy("row",{isOpen:f,isApOpen:J}),content:i.jsxs("div",{className:J?jn.panelOpenAp:jn.panelOpen,children:[S&&i.jsx(ll,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:g,radData:a,lukkArbeidsforholdRad:v,erOverstyrt:l,oppdaterTabell:o}),D&&i.jsx(sl,{saksnummer:e,arbeidsforholdForRad:P,inntektsmeldingerForRad:q,alleKodeverk:b,arbeidsgiverFødselsdato:E}),G&&i.jsx(Cr,{saksnummer:e,arbeidsforhold:P.length>0?P[0]:void 0,inntektsmelding:my(q,P.length>0?(W=P[0])==null?void 0:W.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:b,arbeidsgiverFødselsdato:E}),F&&i.jsx(zu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,isReadOnly:s,arbeidsforholdForRad:P,inntektsmeldingerForRad:q,radData:a,lagreVurdering:m,lukkArbeidsforholdRad:v,oppdaterTabell:o,alleKodeverk:b,arbeidsgiverFødselsdato:E}),z&&i.jsx(Cu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:j,inntektsmelding:q[0],radData:a,isReadOnly:s,registrerArbeidsforhold:g,lagreVurdering:m,lukkArbeidsforholdRad:v,oppdaterTabell:o,skalViseArbeidsforholdId:q.length>1}),_&&i.jsx(il,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,arbeidsforholdForRad:P,alleKodeverk:b,arbeidsgiverFødselsdato:E})]}),children:[i.jsxs(c.DataCell,{children:[!J&&i.jsx($i,{title:y.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:jn.checkmarkIcon}),J&&i.jsx(Ir,{title:y.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:jn.exclamationmarkIcon})]}),i.jsxs(c.DataCell,{className:f?jn.colTopPadding:void 0,children:[f&&i.jsx(B,{size:"small",children:j}),!f&&i.jsx(T,{size:"small",children:j})]}),i.jsx(c.DataCell,{className:f?jn.colTopPadding:void 0,children:i.jsxs(T,{children:[(w==null?void 0:w.fom)&&i.jsx($e,{dateStringFom:w.fom,dateStringTom:w.tom!==Be?w.tom:void 0}),!w&&"-"]})}),i.jsx(c.DataCell,{className:f?jn.colTopPadding:void 0,children:i.jsx(T,{children:i.jsx(u,{id:uy(S,P.length>0)})})}),i.jsx(c.DataCell,{className:f?jn.colTopPadding:void 0,children:i.jsxs(T,{children:[P.length<2&&q.length===1&&i.jsx(Ae,{dateString:q[0].motattDato}),!F&&P.length>1&&q.length===P.length&&i.jsx(u,{id:"ArbeidsforholdRad.Mottatt"}),(S||F&&q.length<P.length)&&i.jsx(u,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};Ju.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const vy="_alertStripe_2poz8_5",py={alertStripe:vy},fy=(e,n)=>{const r=e.some(l=>l.årsak===Yr.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===Yr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=(n==null?void 0:n.status)===Zn.OPPRETTET,s=[];return a&&r&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&t&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s},Wu=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:g,oppdaterTabell:m})=>{const v=Z(),{arbeidsforhold:f,inntektsmeldinger:b}=t,[y,j]=I.useState(!1),[R,h]=I.useState(!1),N=I.useCallback(()=>{g(!0),j(!0);const S=l.findIndex(D=>{var F;return((F=D.avklaring)==null?void 0:F.saksbehandlersVurdering)===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});S!==-1&&o([S])},[l,o]),E=I.useMemo(()=>fy(l,n),[e.versjon]),P=l.every(S=>S.arbeidsgiverIdent!==pr),q=(n==null?void 0:n.status)===Zn.OPPRETTET;return i.jsxs(V,{gap:"8",children:[i.jsxs(K,{gap:"4",children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&q&&!r&&i.jsx(Ui,{onClick:N}),i.jsx(ur,{}),i.jsx(T,{size:"small",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ve(t.skjæringstidspunkt)}})})]}),i.jsxs(V,{gap:"4",children:[E.length>0&&i.jsx(rr,{children:E.map(S=>v.formatMessage({id:S})).join(" ")}),f.length===0&&b.length===0&&s&&i.jsx("div",{className:py.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),y&&P&&!R&&i.jsx("div",{children:i.jsx(ae,{size:"small",variant:"tertiary",icon:i.jsx(zi,{"aria-hidden":!0}),onClick:()=>h(!0),children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),R&&i.jsx(ll,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>h(!1),oppdaterTabell:m,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})};Wu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const yy="_alertStripe_jt670_1",by="_headerRow_jt670_5",Xl={alertStripe:yy,headerRow:by},cy=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},Ql=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,jy=(e,n)=>{const r={saksbehandlersVurdering:e.saksbehandlersVurdering,begrunnelse:e.begrunnelse};return e.saksbehandlersVurdering===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{...r,arbeidsgiverNavn:n,fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent}:r},hy=e=>e.årsak?-1:1,Ay=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,a=[...r.sort(hy)].reduce((l,o)=>{var b;if(l.find(y=>y.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const m=n[o.arbeidsgiverIdent],v=m.navn,f=o.årsak?o.årsak:(b=t.find(y=>Ql(o,y)))==null?void 0:b.årsak;return l.concat({arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:v,arbeidsgiverFødselsdato:m.erPrivatPerson?m.fødselsdato:void 0,årsak:f,avklaring:o.saksbehandlersVurdering?jy(o,v):void 0})},[]),s=t.filter(l=>!r.some(o=>Ql(o,l))).map(l=>{const o=n[l.arbeidsgiverIdent];return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:o.navn,arbeidsgiverFødselsdato:o.erPrivatPerson?o.fødselsdato:void 0,årsak:l.årsak,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse}:void 0}});return a.concat(s).sort(cy)},ed=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},Zu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>{const[o,g]=I.useState(!1),[m,v]=I.useState(!1),[f,b]=I.useState(!1),{alleKodeverk:y,submitCallback:j,aksjonspunkterForPanel:R,behandling:h,fagsak:N,isReadOnly:E}=En(),P=R.length>0?R[0]:void 0,{mellomlagretFormData:q,setMellomlagretFormData:S}=Mn(),[D,F]=I.useState(q||Ay(e,n)),[z,J]=I.useState(ed(D)),_=pf();I.useEffect(()=>()=>{S(D)},[D]);const G=je=>{z.some(_e=>_e===je)?J(z.filter(_e=>_e!==je)):J(z.concat(je))},w=I.useRef(null),U=je=>{var _e;F(je),J(ed(je(D))),(_e=w==null?void 0:w.current)==null||_e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},re=()=>{g(!0),j({kode:le.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},W=()=>{g(!0),l()},se=je=>{g(!0),v(!1);const{frist:_e,ventearsak:Pr}=je;Pr&&s({frist:_e,ventearsak:Pr})},Re=D.some(je=>{var _e,Pr,zl;return((_e=je.avklaring)==null?void 0:_e.saksbehandlersVurdering)===ie.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Pr=je.avklaring)==null?void 0:Pr.saksbehandlersVurdering)===ie.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((zl=je.avklaring)==null?void 0:zl.saksbehandlersVurdering)===ie.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),Fe=D.every(je=>!je.årsak||je.årsak&&je.avklaring),ze=P===void 0,Je=(P==null?void 0:P.status)===Zn.UTFORT,X=(P==null?void 0:P.status)===Zn.OPPRETTET,me=!E&&(Je||a&&ze),Te=!E&&X&&Fe&&!_&&Re,sn=!E&&X&&Fe&&!_&&!Re;return i.jsxs(V,{gap:"4",children:[i.jsx(Wu,{behandling:h,aksjonspunkt:P,readOnly:E,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:a,tabellData:D,settÅpneRadIndexer:J,setErOverstyrt:b,oppdaterTabell:U}),i.jsxs(c,{ref:w,children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{className:Xl.headerRow,children:[i.jsx(c.HeaderCell,{scope:"col"}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),i.jsx(c.HeaderCell,{scope:"col"})]})}),i.jsx(c.Body,{children:D.map((je,_e)=>i.jsx(Ju,{arbeidOgInntekt:e,saksnummer:N.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon,radData:je,isReadOnly:E||Je||ze,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>G(_e),erOverstyrt:f,oppdaterTabell:U,erRadÅpen:z.includes(_e),alleKodeverk:y},`${je.arbeidsgiverNavn}${je.arbeidsgiverIdent}${_e}`))})]}),Te&&i.jsxs("div",{children:[i.jsx(ae,{size:"small",variant:"primary",disabled:o,onClick:()=>v(!0),type:"button",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),i.jsx(bp,{submitCallback:se,cancelEvent:()=>v(!1),defaultVenteårsak:yp.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:y[on.VENT_AARSAK],erTilbakekreving:!1,showModal:m})]}),sn&&i.jsx("div",{children:i.jsx(ae,{size:"small",variant:"primary",disabled:o,loading:o,onClick:re,type:"button",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),me&&i.jsxs(V,{gap:"4",children:[i.jsx("div",{className:Xl.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),i.jsx("div",{children:i.jsx(ae,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:W,type:"button",children:i.jsx(u,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};Zu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Iy={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},Ty=Ke(Iy),Xu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>i.jsx(Ge,{value:Ty,children:i.jsx(Yu,{children:i.jsx(Zu,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})})});Xu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ry=[le.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],Ey=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r,hentOgSettBehandling:t,rettigheter:a}=I.use(Sn),s=ar(Ry),l=qn(r),{data:o}=Pn(l.arbeidOgInntektOptions(r)),{mutate:g}=Et({mutationFn:b=>l.settBehandlingPåVent({frist:b.frist??"",ventearsak:b.ventearsak,behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()}),{mutateAsync:m}=Et({mutationFn:b=>l.registrerArbeidsforholdForAOI(b)}),{mutateAsync:v}=Et({mutationFn:b=>l.lagreVurderingForAOI(b)}),{mutate:f}=Et({mutationFn:()=>l.åpneForNyVurderingAOI({behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()});return i.jsx(sr,{standardPanelProps:s,faktaPanelKode:tr.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:Mu(r,"ARBEID_OG_INNTEKT")&&!ua(le.AVKLAR_ARBEIDSFORHOLD,r.aksjonspunkt),children:o?i.jsx(Xu,{arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:e,erOverstyrer:a.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:m,lagreVurdering:v,settBehandlingPåVentCallback:g,åpneForNyVurdering:f}):i.jsx(Nn,{})})};Ey.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var yi=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(yi||{});const Qu=({arbeidsforhold:e})=>e.permisjonOgMangel?i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"PermisjonPeriode.Permisjon"})}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})})]}):null;Qu.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ny=e=>e.saksbehandlersVurdering===ie.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===ie.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,Py=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt",ek=({valgtArbeidsforhold:e})=>{var v,f;const n=e.saksbehandlersVurdering===ie.BRUK,r=e.saksbehandlersVurdering===ie.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===ie.BRUK_MED_OVERSTYRT_PERIODE,a=e.saksbehandlersVurdering===ie.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,s=e.saksbehandlersVurdering===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((v=e.permisjonOgMangel)==null?void 0:v.permisjonStatus)===yi.BRUK_PERMISJON,g=((f=e.permisjonOgMangel)==null?void 0:f.permisjonStatus)===yi.IKKE_BRUK_PERMISJON,m=Ny(e);return i.jsx(Eu,{children:i.jsxs(V,{gap:"4",children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.Header"})}),i.jsx(Qu,{arbeidsforhold:e}),t&&i.jsxs(i.Fragment,{children:[i.jsx(T,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),i.jsxs(T,{size:"small",children:[m&&i.jsx(Ae,{dateString:m}),!m&&"-"]})]})]}),n&&o&&i.jsx(T,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),s&&i.jsx(T,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||g))&&i.jsxs(i.Fragment,{children:[i.jsx(T,{size:"small",children:i.jsx(u,{id:Py(e)})}),r&&i.jsx(T,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&i.jsx(T,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),a&&i.jsx(T,{size:"small",children:i.jsx(u,{id:a?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdDetail.Begrunnelse"})}),i.jsx(T,{size:"small",children:e.begrunnelse})]})]})})};ek.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const nk=()=>i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:i.jsx("br",{})}},1)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Periode",values:{br:i.jsx("br",{})}},2)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Kilde",values:{br:i.jsx("br",{})}},3)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:i.jsx("br",{})}},4)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:i.jsx("br",{})}},5)})]})}),i.jsx(c.Body,{children:i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:i.jsx(u,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})}),i.jsx(c.DataCell,{}),i.jsx(c.DataCell,{}),i.jsx(c.DataCell,{}),i.jsx(c.DataCell,{})]})})]});nk.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert"};const qy="_image_awjuc_1",Sy={image:qy},xy=(e,n)=>e.saksbehandlersVurdering===ie.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),Yt=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),By=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Fy=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],a=t==null?void 0:t.navn;return e.saksbehandlersVurdering===ie.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?a:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${a}(${t.identifikator})${By(e.eksternArbeidsforholdId)}`:`${a}(${t.identifikator})`},_y=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`},rk=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:a})=>{const s=Z();return e.length===0?i.jsx(nk,{}):i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:i.jsx("br",{})}},1)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Periode",values:{br:i.jsx("br",{})}},2)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Kilde",values:{br:i.jsx("br",{})}},3)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:i.jsx("br",{})}},4)}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:i.jsx("br",{})}},5)}),i.jsx(c.HeaderCell,{scope:"col"})]})}),i.jsx(c.Body,{children:e==null?void 0:e.map(l=>{var v;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",g=Fy(l,e,t),m=(v=a.find(f=>Yt(l,f)))==null?void 0:v.motattDato;return i.jsxs(c.Row,{onMouseDown:()=>r(l),onKeyDown:()=>r(l),selected:l.arbeidsgiverIdent===n,children:[i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:Hi(g)})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:l.fom,dateStringTom:l.tom!==Be?l.tom:void 0})})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:xy(l,s)})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o})}),i.jsx(c.DataCell,{children:m&&i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:m})})}),i.jsx(c.DataCell,{children:(l.saksbehandlersVurdering===ie.BRUK||l.saksbehandlersVurdering===ie.FORTSETT_UTEN_INNTEKTSMELDING)&&i.jsx(Ap,{className:Sy.image,title:s.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},_y(l,t))})})]})};rk.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"AoIArbeidsforhold[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},selectArbeidsforholdCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(arbeidsforhold: AoIArbeidsforhold) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"arbeidsforhold"}],return:{name:"void"}}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""}}};const nd=(e,n)=>n.some(r=>Yt(e,r)),Oy=(e,n)=>(r,t)=>{var g,m;const a=e[r.arbeidsgiverIdent],s=e[t.arbeidsgiverIdent];if(a&&s){const v=a.navn.localeCompare(s.navn);if(v!==0)return v}const l=nd(r,n),o=nd(t,n);if(l&&o){const v=(g=n.find(b=>Yt(r,b)))==null?void 0:g.motattDato,f=(m=n.find(b=>Yt(t,b)))==null?void 0:m.motattDato;return A(f,xe).diff(A(v,xe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)},tk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=I.useState(),a=g=>{const m=!!g.saksbehandlersVurdering;t(m?g:void 0)},{arbeidsforhold:s,inntektsmeldinger:l}=e,o=s.toSorted(Oy(n,l));return i.jsxs(i.Fragment,{children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),i.jsx(rk,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:a,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&i.jsx(ek,{valgtArbeidsforhold:r})]})};tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Dy={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},wy=Ke(Dy),ak=e=>i.jsx(Ge,{value:wy,children:i.jsx(tk,{...e})});ak.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const rd=[le.AVKLAR_ARBEIDSFORHOLD],Vy=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),r=ar(rd),{behandling:t}=I.use(Sn),a=qn(t),{data:s}=Pn(a.arbeidOgInntektOptions(t));return i.jsx(sr,{standardPanelProps:r,faktaPanelKode:tr.ARBEIDSFORHOLD,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:rd.some(l=>ua(l,t.aksjonspunkt)),children:s?i.jsx(ak,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(Nn,{})})};Vy.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

Dette faktapanelet skal alltid vises`,methods:[],displayName:"ArbeidsforholdFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var he=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(he||{}),td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ad={exports:{}},Br={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function My(){if(sd)return Br;sd=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Br.Fragment=n,Br.jsx=r,Br.jsxs=r,Br}var id;function Gy(){return id||(id=1,ad.exports=My()),ad.exports}var k=Gy(),gn=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(gn||{}),et=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(et||{}),oe=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(oe||{});const zr={};zr.BA=et.BRUKERS_ANDEL;zr.FL=et.FRILANS;zr.SN=et.EGEN_NÆRING;var ir=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ir||{}),sk=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(sk||{});const ma=e=>e==="OPPR";var O=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(O||{}),dl=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(dl||{}),va=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(va||{});const Sa=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Vn=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${A(e.fødselsdato).format(te)})${Sa(n)}`:`${e.navn}${Sa(n)}`:`${e.navn} (${e.identifikator})${Sa(n)}`,Jr="avklarAktiviteterForm",vn="vurderFaktaBeregningForm",Ze=(e,n)=>n.some(r=>r.definisjon===e),Ly=e=>e===sk.OPPRETTET,Ky="_begrunnelseTextField_12bwv_1",$y="_explanationTextarea_12bwv_4",Uy="_explanationTextareaReadOnly_12bwv_7",xa={begrunnelseTextField:Ky,explanationTextarea:$y,explanationTextareaReadOnly:Uy},ik={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ld=Ke(ik),Hy=yn(3),lk=4e3,Yy=bn(lk),Rr=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||ld.formatMessage({id:l});return k.jsx(Ge,{value:ld,children:(n||r)&&k.jsx("div",{className:xa.begrunnelseTextField,children:k.jsx(Qe,{name:s,label:o,validate:e?[]:[Q,Hy,Yy,cn],className:e?xa.explanationTextareaReadOnly:xa.explanationTextarea,maxLength:lk,readOnly:e})})})};Rr.buildInitialValues=(e,n="begrunnelse")=>({[n]:Hi(e)});Rr.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:ol,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:Cy}=he,zy=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Jy=(e,n,r)=>(e||zy(ol,n))&&r,dk=e=>e.find(n=>n.definisjon===Cy||n.definisjon===ol),Wy=(e,n)=>Ze(ol,e)||n,Zy=(e,n,r)=>e&&n&&!r,Xy=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,dd=(e,n)=>e+n.fom.replace(".",""),He=e=>{if(e.arbeidsgiverIdent){const n=Xy(e,e.arbeidsgiverIdent);return dd(n,e)}return dd(e.arbeidsforholdType,e)},Qy=(e,n)=>e||n,Dt=(e,n,r,t,a)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===ir.AAP?!1:n?Qy(t,a):!0,eb=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?Vn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[gn.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},nb=(e,n)=>A(e).isSame(A(n))||A(e).isBefore(A(n)),rb=(e,n,r,t)=>Dt(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",tb=(e,n,r,t,a,s)=>({beregningAktivitetNavn:eb(e,s,n),fom:e.fom,tom:e.tom,skalBrukes:rb(e,r,t,a)}),ab=(e,n,r,t)=>{const a=nb(r,t);return n.filter(s=>e.aktiviteterValues&&(e.aktiviteterValues[He(s)].skalBrukes==="false"||e.aktiviteterValues[He(s)].tom!=null)).map(s=>({oppdragsgiverOrg:s.arbeidsgiverIdent&&s.arbeidsgiverIdent.length===9?s.arbeidsgiverIdent:void 0,arbeidsforholdRef:s.arbeidsforholdId,fom:s.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[He(s)].tom!=null?e.aktiviteterValues[He(s)].tom:s.tom,opptjeningAktivitetType:s.arbeidsforholdType,arbeidsgiverIdentifikator:s.arbeidsgiverIdent,skalBrukes:a&&e.aktiviteterValues?e.aktiviteterValues[He(s)].skalBrukes==="true":!0}))},sb=(e,n,r,t,a,s)=>{const l={};return e&&e.forEach(o=>{l[He(o)]=tb(o,n,r,t,a,s)}),l},ib="_radios_4fctu_1",lb="_navnKol_4fctu_10",db="_table_4fctu_15",Mr={radios:ib,navnKol:lb,table:db},ob=(e,n)=>A(e).isSame(A(n))||A(e).isBefore(A(n)),od=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?Vn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[gn.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},gb=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:v})=>{const f=Z(),b=ob(o,l),y=j=>{const R=od(r,m,t),h=`${Wl(r.fom)} til ${Wl(r.tom||"")}`;return`${j?"Benytt":"Ikke benytt"} ${R} ${h}`};return k.jsxs(c.Row,{children:[k.jsx(c.DataCell,{className:Mr.navnKol,children:k.jsx(T,{size:"small",children:od(r,m,t)})}),k.jsxs(c.DataCell,{className:Mr.rowalign,children:[!a&&k.jsx(T,{children:k.jsx($e,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),a&&k.jsxs("div",{children:[k.jsxs(T,{as:"span",size:"small",children:[k.jsx(Ae,{dateString:r.fom})," -"," "]}),k.jsx(Wn,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${He(r)}.tom`,validate:[Q,In,ia(r.fom)],isReadOnly:e,size:"small"})]})]}),k.jsx(c.DataCell,{className:Mr.radios,children:k.jsx(Ne,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${He(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[Q],isHorizontal:!0,isReadOnly:e||!Dt(r,a,s,b,g),radios:[{value:"true",label:y(!0)}],hideLegend:!0,hideRadioLabels:!0})}),k.jsx(c.DataCell,{className:Mr.radios,children:k.jsx(Ne,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${He(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[Q],isHorizontal:!0,isReadOnly:e||!Dt(r,a,s,b,g),radios:[{value:"false",label:y(!1)}],hideLegend:!0,hideRadioLabels:!0})}),k.jsx(c.DataCell,{children:n&&e&&Dt(r,a,s,b,g)&&k.jsx(Xr,{})})]},He(r))},ub=(e,n,r)=>{const t=In(r)?"":A(r).format(te);return e.some(a=>a.arbeidsforholdType&&a.arbeidsforholdType===ir.VENTELØNN_VARTPENGER)?k.jsx(u,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},kb=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],mb=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:v})=>k.jsxs(k.Fragment,{children:[k.jsx(B,{size:"small",children:ub(r,a,l)}),k.jsxs(c,{size:"small",className:Mr.table,children:[k.jsx(c.Header,{children:k.jsxs(c.Row,{children:[kb().map(f=>k.jsx(c.HeaderCell,{scope:"col",children:k.jsx(B,{size:"small",as:"span",children:k.jsx(u,{id:f})})},f)),k.jsx(c.HeaderCell,{})]})}),k.jsx(c.Body,{children:r.map(f=>k.jsx(gb,{aktivitet:f,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:v},`${f.arbeidsgiverIdent}-${f.fom}-${f.tom}`))})]})]}),bi=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=He(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,vb=(e,n)=>{let r=0;for(;r<e.length&&A(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},gd=(e,n,r)=>{const t=e.find(({tom:a})=>a===r);if(t===void 0){const a={tom:r,aktiviteter:[n]},s=vb(e,r);e.splice(s,0,a)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},pb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!A(t.tom).isValid()))},fb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],a=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!a)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:s})=>s).forEach(s=>{if(!s)throw new Error("Må ha aktivitet i form values her!");const l={...s},o=e.aktiviteterValues?e.aktiviteterValues[He(s)].tom:void 0;o&&o!==l.tom&&(l.tom=o),A(o).isSame(A(a).subtract(1,"days"))||A(o).isAfter(A(a).subtract(1,"days"))?gd(t,l,a):gd(t,l,A(o).add(1,"days").format("YYYY-MM-DD"))}),t},gl=(e,n,r)=>{const t=n&&!pb(n)?fb(n):e;return r?t:!n||bi(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},ok=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let a=0;a<t.length;a+=1){const s=e.aktiviteterValues?e.aktiviteterValues[He(t[a])]:void 0;if((s==null?void 0:s.skalBrukes)==="true")return n[r].tom}}},yb=e=>!e||In(e)?"":A(e).format(te),lr=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:g})=>{const m=gl(t,r,a),v=ok(r,m);return k.jsxs(V,{gap:"4",children:[k.jsx(T,{size:"small",children:k.jsx(u,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:yb(v)}})}),m.map(f=>k.jsx(mb,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:f.aktiviteter||[],erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,tomDatoForAktivitetGruppe:f.tom,valgtSkjæringstidspunkt:v,ingenAktiviterErBrukt:v===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:g},f.tom))]})};lr.harIngenAktiviteter=(e,n,r)=>{const t=gl(n,e,r);return bi(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!bi(t[1],e):!0};const bb=(e,n)=>A(e).isSame(A(n))||A(e).isBefore(A(n));lr.transformValues=(e,n,r)=>{const t=gl(n,e,r),a=ok(e,t);if(!a)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(s=>ab(e,s.aktiviteter||[],a,s.tom))};const cb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};lr.buildInitialValues=(e,n,r,t,a)=>{if(!e||e.length===0)return{};let s={};const l=cb(e);return e.forEach(o=>{s={...s,...sb(o.aktiviteter||[],n,r,t,bb(l,o.tom),a)}}),s};const jb="_avsnittOverskrift_h44z2_1",hb={avsnittOverskrift:jb},{AVKLAR_AKTIVITETER:wt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:gk}=he,ul="begrunnelseAvklareAktiviteter",uk="manuellOverstyringBeregningAktiviteter",Ab=(e,n,r,t,a)=>{const s=Ze(wt,e),l=Ze(gk,e),o=dk(e);let g;return n&&n.aktiviteterTomDatoMapping&&(g=lr.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,s,t)),{[uk]:l,periode:a.periode,erTilVurdering:a.vurderesIBehandlingen&&!a.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:g,...Rr.buildInitialValues(o==null?void 0:o.begrunnelse,ul)}},ud=e=>{const n=e[uk],r=Jy(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:lr.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[ul]}:null},Ib=(e,n,r,t,a)=>{if(!(r.length<1)&&lr.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return a.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},Tb=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s,submittable:l,fieldId:o,updateOverstyring:g,submitDisabled:m})=>{var v,f;const b=Z(),{resetField:y,watch:j,getValues:R,formState:{isSubmitting:h,errors:N,dirtyFields:E}}=Ie(),P=Object.keys(E).length>0,q=Ze(gk,n),S=!!R(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[D,F]=I.useState(q||S),z=dk(n),J=!!((f=(v=N.avklarAktiviteterForm)==null?void 0:v[o])!=null&&f.begrunnelseAvklareAktiviteter),_=W=>{W?F(!D):!W&&D&&F(!1),y(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),y(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),g(o,W)},G=n.filter(W=>W.definisjon===he.AVKLAR_AKTIVITETER||W.definisjon===he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(W=>Ly(W.status)).length===0,w=Ib(j,o,e.aktiviteterTomDatoMapping||[],S,b),U=`vurderAktiviteterSkjema.${o}`,re=la(U,w);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:k.jsxs(V,{gap:"1",children:[k.jsxs(V,{gap:"6",children:[Ze(wt,n)&&!G&&k.jsxs(Ee,{size:"small",variant:"warning",children:[k.jsx(ue,{size:"xsmall",level:"3",children:k.jsx(u,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),k.jsxs(V,{gap:"2",children:[k.jsx(T,{size:"small",children:k.jsx(u,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"})}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]})]}),k.jsxs(K,{gap:"4",children:[k.jsx(B,{size:"small",className:hb.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:k.jsx(u,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||q)&&k.jsx(Ui,{onClick:()=>_(!0),erOverstyrt:D})]})]}),D&&k.jsx(B,{size:"small",children:k.jsx(u,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&k.jsxs(V,{gap:"4",children:[k.jsx(lr,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:G,erOverstyrt:D,kodeverkSamling:a,values:j(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:Ze(wt,n),arbeidsgiverOpplysningerPerId:s,fieldId:o}),re&&k.jsx(Zr,{children:re})]}),Wy(n,D)&&k.jsxs(V,{gap:"6",children:[k.jsx(Rr,{name:`avklarAktiviteterForm.${o}.${ul}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(z!=null&&z.begrunnelse)}),k.jsx(xn,{ident:z==null?void 0:z.vurdertAv,date:z==null?void 0:z.vurdertTidspunkt}),(Ze(wt,n)||D)&&k.jsx(k.Fragment,{children:k.jsxs(K,{gap:"4",children:[k.jsx(Fu,{text:b.formatMessage({id:D?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:Zy(l,!0,J),isDirty:P,isSubmitting:m,isReadOnly:t||G&&!P,hasErrors:J}),!!E&&P&&k.jsx(ae,{variant:"secondary",loading:h,disabled:h,onClick:()=>_(!1),size:"small",children:k.jsx(u,{id:"AvklareAktiviteter.Avbryt"})})]})})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:kk,AVKLAR_AKTIVITETER:mk}=he,kd="manuellOverstyringBeregningAktiviteter",Rb=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},Eb=(e,n)=>!Ze(mk,e)&&!Ze(kk,e)&&!n,Nb=e=>{const n=e[Jr],r=n.filter(s=>s[kd]).map(ud).filter(s=>s),t=n.filter(s=>!s[kd]).map(ud).filter(s=>s),a=[];if(r.length>0){const s=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:kk,begrunnelse:s,grunnlag:r};a.push(l)}if(t.length>0){const s=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:mk,begrunnelse:s,grunnlag:t};a.push(l)}return a},Pb=(e,n,r,t)=>({[Jr]:e.map(a=>{var s;return Ab(a.avklaringsbehov,(s=a.faktaOmBeregning)==null?void 0:s.avklarAktiviteter,n,r,Rb(t,a.vilkårsperiodeFom))})}),qb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},Sb=({erOverstyrer:e,readOnly:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,submittable:a,submitCallback:s,beregningsgrunnlag:l,aktivtBeregningsgrunnlagIndeks:o,vilkår:g,setFormData:m,formData:v,setAvklarAktiviteterErEndret:f})=>{const b=Ye({defaultValues:v||Pb(l,r,t,g)}),{formState:{dirtyFields:y,errors:j,isSubmitted:R},control:h,getValues:N,trigger:E,setValue:P}=b;I.useEffect(()=>{var _;(_=y.avklarAktiviteterForm)!=null&&_.some(G=>!!G)?f(!0):f(!1)},[y]),I.useEffect(()=>{var _;R&&(_=y.avklarAktiviteterForm)!=null&&_[o]&&E()},[o]);const q=l.flatMap(_=>_.avklaringsbehov),{fields:S}=en({name:Jr,control:h}),[D,F]=I.useState(!1),z=(_,G)=>{const w=N(`avklarAktiviteterForm.${_}`);P(`${Jr}.${_}`,{...w,manuellOverstyringBeregningAktiviteter:G},{shouldDirty:!0})};if(Eb(q,e))return null;const J=_=>{Object.keys(j).length===0&&(F(!0),s(Nb(_)))};return k.jsx(Ce,{formMethods:b,onSubmit:_=>J(_),setDataOnUnmount:m,children:S.map((_,G)=>o===G&&k.jsx(Tb,{aktivtBeregningsgrunnlagIndeks:o,fieldId:G,avklarAktiviteter:qb(l,G),avklaringsbehovListe:l[G].avklaringsbehov,erOverstyrer:e,readOnly:n,submittable:a,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,updateOverstyring:z,submitDisabled:D},_.id))})},Pe=C.createContext(0),vk=C.createContext(0),mn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:a}=Ie();return I.useEffect(()=>()=>a(e),[]),k.jsx(ce,{name:e,htmlSize:8,parse:Oe,readOnly:n,isEdited:r,validate:n?[]:[Q,nn(178956970)],label:t})};mn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(a=>a.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const xb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Lr=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:a})=>{var s,l;const{getValues:o}=Ie(),g=C.useContext(Pe),m=o(`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues`);if(!m)return null;const v=(s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent,f=xb(m,v),b=`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues.${f}.fastsattBelop`,y=v?(l=a[v])==null?void 0:l.navn:void 0;return k.jsx(mn,{name:b,readOnly:n,isAksjonspunktClosed:r,label:t||k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${y} (${v})`}})})};Lr.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===oe.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const a={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(a)}),n};const pk="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn",kn=e=>e==="true",Bb="_navetLink_15r5n_1",fk={navetLink:Bb},We="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Fb}=he,nt=({readOnly:e,erOverstyrt:n})=>{const r=C.useContext(Pe),t=Z(),a=e||n;return k.jsxs(K,{gap:"2",wrap:!1,children:[k.jsx(Ne,{label:k.jsx(u,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${We}`,isReadOnly:a,validate:a?[]:[Q],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:kn}),k.jsx("div",{children:k.jsx("a",{className:fk.navetLink,href:pk,target:"_blank",rel:"noopener noreferrer",children:k.jsx(u,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})};nt.buildInitialValues=(e,n,r,t)=>r.includes(O.VURDER_BESTEBEREGNING)||r.includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(a=>a.definisjon===Fb)!==void 0||t?{[We]:!1}:{[We]:n.skalHaBesteberegning}:{}:{};const md=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};nt.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[We]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:s})=>s!==!0).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,lagtTilAvSaksbehandler:!!s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:md(s.inntektskategori)}})),a=r.find(s=>s.nyAndel&&s.aktivitetStatus===oe.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:a?{fastsatteVerdier:{fastsattBeløp:a.fastsattBelop,inntektskategori:md(a.inntektskategori)}}:void 0}}};const _b=e=>(n,r)=>{var t;const a=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(a.map(o=>o).includes(O.VURDER_BESTEBEREGNING)||a.map(o=>o).includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const s=nt.transformValues(n,e,r),l=[O.VURDER_BESTEBEREGNING];return(t=s.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&s.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...s}},Ob="_fadeinTabell_l1t64_1",Db={fadeinTabell:Ob},fr="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:wb,AVKLAR_AKTIVITETER:Vb}=he,Mb=(e,n)=>n.some(r=>r.definisjon===e),Gb=(e,n)=>e&&!n.some(r=>r.definisjon===Vb&&ma(r.status)),kl=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:a,updateOverstyring:s,erOverstyrer:l,erOverstyrt:o})=>{const[g,m]=I.useState(o),v=C.useContext(Pe),f=I.useMemo(()=>Gb(l,a),[l,a]),b=()=>{m(!g),s(v,!g)};return k.jsx("div",{className:Db.fadeinTabell,children:r&&k.jsxs(V,{gap:"4",children:[k.jsxs(K,{gap:"4",children:[k.jsx(ue,{level:"3",size:"xsmall",children:k.jsx(u,{id:"InntektstabellPanel.RapporterteInntekter"})}),(f||g)&&k.jsx(Ui,{onClick:b,erOverstyrt:t||g||Mb(wb,a)})]}),n&&k.jsx(B,{size:"small",children:k.jsx(u,{id:n})}),e,g&&!t&&k.jsx(K,{children:k.jsx(ae,{size:"small",onClick:b,variant:"secondary",children:k.jsx(u,{id:"InntektstabellPanel.Avbryt"})})})]})})};kl.buildInitialValues=e=>({[fr]:e});const yk=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(a=>a.aktivitetStatus===oe.ARBEIDSTAKER).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsforholdId).length>0:!1},yr="lonnsendringField",rt=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[Q],parse:kn})},Lb=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};rt.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(a=>a.aktivitetStatus===oe.ARBEIDSTAKER);return!t||t.length<1||(n[yr]=Lb(t)),n};const Kb=(e,n,r)=>!!r[yr]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;rt.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(O.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[O.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[yr]}}:{};const An="NyoppstartetFLField",tt=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${An}`,validate:[Q],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:kn})};tt.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===oe.FRILANSER);return t.length>0&&(r[An]=(n=t[0])==null?void 0:n.erNyoppstartet),r};tt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}};const a=n.find(l=>l.aktivitetStatus===oe.FRILANSER);if(!a)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}};if(a.andelsnr&&t.includes(a.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}};a.andelsnr&&t.push(a.andelsnr);const s={fastsettMaanedsinntektFL:{maanedsinntekt:a.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL,O.FASTSETT_MAANEDSINNTEKT_FL],...s,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}}};var vd={},Fr,pd;function rn(){if(pd)return Fr;pd=1;var e=function(n){return n&&n.Math===Math&&n};return Fr=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof td=="object"&&td)||e(typeof Fr=="object"&&Fr)||function(){return this}()||Function("return this")(),Fr}var Ba={},fd,yd;function Bn(){return yd||(yd=1,fd=function(e){try{return!!e()}catch{return!0}}),fd}var Fa,bd;function Gn(){if(bd)return Fa;bd=1;var e=Bn();return Fa=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Fa}var _a,cd;function ml(){if(cd)return _a;cd=1;var e=Bn();return _a=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),_a}var Oa,jd;function vl(){if(jd)return Oa;jd=1;var e=ml(),n=Function.prototype.call;return Oa=e?n.bind(n):function(){return n.apply(n,arguments)},Oa}var Da={},hd;function $b(){if(hd)return Da;hd=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Da.f=r?function(t){var a=n(this,t);return!!a&&a.enumerable}:e,Da}var Ad,Id;function bk(){return Id||(Id=1,Ad=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),Ad}var wa,Td;function tn(){if(Td)return wa;Td=1;var e=ml(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return wa=e?t:function(a){return function(){return r.apply(a,arguments)}},wa}var Va,Rd;function pa(){if(Rd)return Va;Rd=1;var e=tn(),n=e({}.toString),r=e("".slice);return Va=function(t){return r(n(t),8,-1)},Va}var Ma,Ed;function Ub(){if(Ed)return Ma;Ed=1;var e=tn(),n=Bn(),r=pa(),t=Object,a=e("".split);return Ma=n(function(){return!t("z").propertyIsEnumerable(0)})?function(s){return r(s)==="String"?a(s,""):t(s)}:t,Ma}var Nd,Pd;function ck(){return Pd||(Pd=1,Nd=function(e){return e==null}),Nd}var Ga,qd;function jk(){if(qd)return Ga;qd=1;var e=ck(),n=TypeError;return Ga=function(r){if(e(r))throw new n("Can't call method on "+r);return r},Ga}var La,Sd;function fa(){if(Sd)return La;Sd=1;var e=Ub(),n=jk();return La=function(r){return e(n(r))},La}var Ka,xd;function an(){if(xd)return Ka;xd=1;var e=typeof document=="object"&&document.all;return Ka=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},Ka}var $a,Bd;function Er(){if(Bd)return $a;Bd=1;var e=an();return $a=function(n){return typeof n=="object"?n!==null:e(n)},$a}var Ua,Fd;function ya(){if(Fd)return Ua;Fd=1;var e=rn(),n=an(),r=function(t){return n(t)?t:void 0};return Ua=function(t,a){return arguments.length<2?r(e[t]):e[t]&&e[t][a]},Ua}var Ha,_d;function Hb(){if(_d)return Ha;_d=1;var e=tn();return Ha=e({}.isPrototypeOf),Ha}var Ya,Od;function Yb(){if(Od)return Ya;Od=1;var e=rn(),n=e.navigator,r=n&&n.userAgent;return Ya=r?String(r):"",Ya}var Ca,Dd;function Cb(){if(Dd)return Ca;Dd=1;var e=rn(),n=Yb(),r=e.process,t=e.Deno,a=r&&r.versions||t&&t.version,s=a&&a.v8,l,o;return s&&(l=s.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),Ca=o,Ca}var za,wd;function hk(){if(wd)return za;wd=1;var e=Cb(),n=Bn(),r=rn(),t=r.String;return za=!!Object.getOwnPropertySymbols&&!n(function(){var a=Symbol("symbol detection");return!t(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&e&&e<41}),za}var Ja,Vd;function Ak(){if(Vd)return Ja;Vd=1;var e=hk();return Ja=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Ja}var Wa,Md;function Ik(){if(Md)return Wa;Md=1;var e=ya(),n=an(),r=Hb(),t=Ak(),a=Object;return Wa=t?function(s){return typeof s=="symbol"}:function(s){var l=e("Symbol");return n(l)&&r(l.prototype,a(s))},Wa}var Za,Gd;function zb(){if(Gd)return Za;Gd=1;var e=String;return Za=function(n){try{return e(n)}catch{return"Object"}},Za}var Xa,Ld;function pl(){if(Ld)return Xa;Ld=1;var e=an(),n=zb(),r=TypeError;return Xa=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},Xa}var Qa,Kd;function Jb(){if(Kd)return Qa;Kd=1;var e=pl(),n=ck();return Qa=function(r,t){var a=r[t];return n(a)?void 0:e(a)},Qa}var es,$d;function Wb(){if($d)return es;$d=1;var e=vl(),n=an(),r=Er(),t=TypeError;return es=function(a,s){var l,o;if(s==="string"&&n(l=a.toString)&&!r(o=e(l,a))||n(l=a.valueOf)&&!r(o=e(l,a))||s!=="string"&&n(l=a.toString)&&!r(o=e(l,a)))return o;throw new t("Can't convert object to primitive value")},es}var ns={exports:{}},Ud,Hd;function Zb(){return Hd||(Hd=1,Ud=!1),Ud}var rs,Yd;function fl(){if(Yd)return rs;Yd=1;var e=rn(),n=Object.defineProperty;return rs=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},rs}var Cd;function yl(){if(Cd)return ns.exports;Cd=1;var e=Zb(),n=rn(),r=fl(),t="__core-js_shared__",a=ns.exports=n[t]||r(t,{});return(a.versions||(a.versions=[])).push({version:"3.41.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ns.exports}var ts,zd;function Tk(){if(zd)return ts;zd=1;var e=yl();return ts=function(n,r){return e[n]||(e[n]=r||{})},ts}var as,Jd;function Rk(){if(Jd)return as;Jd=1;var e=jk(),n=Object;return as=function(r){return n(e(r))},as}var ss,Wd;function dr(){if(Wd)return ss;Wd=1;var e=tn(),n=Rk(),r=e({}.hasOwnProperty);return ss=Object.hasOwn||function(t,a){return r(n(t),a)},ss}var is,Zd;function Ek(){if(Zd)return is;Zd=1;var e=tn(),n=0,r=Math.random(),t=e(1 .toString);return is=function(a){return"Symbol("+(a===void 0?"":a)+")_"+t(++n+r,36)},is}var ls,Xd;function at(){if(Xd)return ls;Xd=1;var e=rn(),n=Tk(),r=dr(),t=Ek(),a=hk(),s=Ak(),l=e.Symbol,o=n("wks"),g=s?l.for||l:l&&l.withoutSetter||t;return ls=function(m){return r(o,m)||(o[m]=a&&r(l,m)?l[m]:g("Symbol."+m)),o[m]},ls}var ds,Qd;function Xb(){if(Qd)return ds;Qd=1;var e=vl(),n=Er(),r=Ik(),t=Jb(),a=Wb(),s=at(),l=TypeError,o=s("toPrimitive");return ds=function(g,m){if(!n(g)||r(g))return g;var v=t(g,o),f;if(v){if(m===void 0&&(m="default"),f=e(v,g,m),!n(f)||r(f))return f;throw new l("Can't convert object to primitive value")}return m===void 0&&(m="number"),a(g,m)},ds}var os,eo;function Nk(){if(eo)return os;eo=1;var e=Xb(),n=Ik();return os=function(r){var t=e(r,"string");return n(t)?t:t+""},os}var gs,no;function Pk(){if(no)return gs;no=1;var e=rn(),n=Er(),r=e.document,t=n(r)&&n(r.createElement);return gs=function(a){return t?r.createElement(a):{}},gs}var us,ro;function qk(){if(ro)return us;ro=1;var e=Gn(),n=Bn(),r=Pk();return us=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),us}var to;function Sk(){if(to)return Ba;to=1;var e=Gn(),n=vl(),r=$b(),t=bk(),a=fa(),s=Nk(),l=dr(),o=qk(),g=Object.getOwnPropertyDescriptor;return Ba.f=e?g:function(m,v){if(m=a(m),v=s(v),o)try{return g(m,v)}catch{}if(l(m,v))return t(!n(r.f,m,v),m[v])},Ba}var ks={},ms,ao;function xk(){if(ao)return ms;ao=1;var e=Gn(),n=Bn();return ms=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),ms}var vs,so;function ba(){if(so)return vs;so=1;var e=Er(),n=String,r=TypeError;return vs=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},vs}var io;function st(){if(io)return ks;io=1;var e=Gn(),n=qk(),r=xk(),t=ba(),a=Nk(),s=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,g="enumerable",m="configurable",v="writable";return ks.f=e?r?function(f,b,y){if(t(f),b=a(b),t(y),typeof f=="function"&&b==="prototype"&&"value"in y&&v in y&&!y[v]){var j=o(f,b);j&&j[v]&&(f[b]=y.value,y={configurable:m in y?y[m]:j[m],enumerable:g in y?y[g]:j[g],writable:!1})}return l(f,b,y)}:l:function(f,b,y){if(t(f),b=a(b),t(y),n)try{return l(f,b,y)}catch{}if("get"in y||"set"in y)throw new s("Accessors not supported");return"value"in y&&(f[b]=y.value),f},ks}var ps,lo;function Bk(){if(lo)return ps;lo=1;var e=Gn(),n=st(),r=bk();return ps=e?function(t,a,s){return n.f(t,a,r(1,s))}:function(t,a,s){return t[a]=s,t},ps}var fs={exports:{}},ys,oo;function Qb(){if(oo)return ys;oo=1;var e=Gn(),n=dr(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,a=n(r,"name"),s=a&&(function(){}).name==="something",l=a&&(!e||e&&t(r,"name").configurable);return ys={EXISTS:a,PROPER:s,CONFIGURABLE:l},ys}var bs,go;function Fk(){if(go)return bs;go=1;var e=tn(),n=an(),r=yl(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(a){return t(a)}),bs=r.inspectSource,bs}var cs,uo;function ec(){if(uo)return cs;uo=1;var e=rn(),n=an(),r=e.WeakMap;return cs=n(r)&&/native code/.test(String(r)),cs}var js,ko;function _k(){if(ko)return js;ko=1;var e=Tk(),n=Ek(),r=e("keys");return js=function(t){return r[t]||(r[t]=n(t))},js}var mo,vo;function bl(){return vo||(vo=1,mo={}),mo}var hs,po;function nc(){if(po)return hs;po=1;var e=ec(),n=rn(),r=Er(),t=Bk(),a=dr(),s=yl(),l=_k(),o=bl(),g="Object already initialized",m=n.TypeError,v=n.WeakMap,f,b,y,j=function(E){return y(E)?b(E):f(E,{})},R=function(E){return function(P){var q;if(!r(P)||(q=b(P)).type!==E)throw new m("Incompatible receiver, "+E+" required");return q}};if(e||s.state){var h=s.state||(s.state=new v);h.get=h.get,h.has=h.has,h.set=h.set,f=function(E,P){if(h.has(E))throw new m(g);return P.facade=E,h.set(E,P),P},b=function(E){return h.get(E)||{}},y=function(E){return h.has(E)}}else{var N=l("state");o[N]=!0,f=function(E,P){if(a(E,N))throw new m(g);return P.facade=E,t(E,N,P),P},b=function(E){return a(E,N)?E[N]:{}},y=function(E){return a(E,N)}}return hs={set:f,get:b,has:y,enforce:j,getterFor:R},hs}var fo;function rc(){if(fo)return fs.exports;fo=1;var e=tn(),n=Bn(),r=an(),t=dr(),a=Gn(),s=Qb().CONFIGURABLE,l=Fk(),o=nc(),g=o.enforce,m=o.get,v=String,f=Object.defineProperty,b=e("".slice),y=e("".replace),j=e([].join),R=a&&!n(function(){return f(function(){},"length",{value:8}).length!==8}),h=String(String).split("String"),N=fs.exports=function(E,P,q){b(v(P),0,7)==="Symbol("&&(P="["+y(v(P),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),q&&q.getter&&(P="get "+P),q&&q.setter&&(P="set "+P),(!t(E,"name")||s&&E.name!==P)&&(a?f(E,"name",{value:P,configurable:!0}):E.name=P),R&&q&&t(q,"arity")&&E.length!==q.arity&&f(E,"length",{value:q.arity});try{q&&t(q,"constructor")&&q.constructor?a&&f(E,"prototype",{writable:!1}):E.prototype&&(E.prototype=void 0)}catch{}var S=g(E);return t(S,"source")||(S.source=j(h,typeof P=="string"?P:"")),E};return Function.prototype.toString=N(function(){return r(this)&&m(this).source||l(this)},"toString"),fs.exports}var As,yo;function tc(){if(yo)return As;yo=1;var e=an(),n=st(),r=rc(),t=fl();return As=function(a,s,l,o){o||(o={});var g=o.enumerable,m=o.name!==void 0?o.name:s;if(e(l)&&r(l,m,o),o.global)g?a[s]=l:t(s,l);else{try{o.unsafe?a[s]&&(g=!0):delete a[s]}catch{}g?a[s]=l:n.f(a,s,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return a},As}var Is={},Ts,bo;function ac(){if(bo)return Ts;bo=1;var e=Math.ceil,n=Math.floor;return Ts=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},Ts}var Rs,co;function Ok(){if(co)return Rs;co=1;var e=ac();return Rs=function(n){var r=+n;return r!==r||r===0?0:e(r)},Rs}var Es,jo;function sc(){if(jo)return Es;jo=1;var e=Ok(),n=Math.max,r=Math.min;return Es=function(t,a){var s=e(t);return s<0?n(s+a,0):r(s,a)},Es}var Ns,ho;function ic(){if(ho)return Ns;ho=1;var e=Ok(),n=Math.min;return Ns=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},Ns}var Ps,Ao;function cl(){if(Ao)return Ps;Ao=1;var e=ic();return Ps=function(n){return e(n.length)},Ps}var qs,Io;function lc(){if(Io)return qs;Io=1;var e=fa(),n=sc(),r=cl(),t=function(a){return function(s,l,o){var g=e(s),m=r(g);if(m===0)return!a&&-1;var v=n(o,m),f;if(a&&l!==l){for(;m>v;)if(f=g[v++],f!==f)return!0}else for(;m>v;v++)if((a||v in g)&&g[v]===l)return a||v||0;return!a&&-1}};return qs={includes:t(!0),indexOf:t(!1)},qs}var Ss,To;function Dk(){if(To)return Ss;To=1;var e=tn(),n=dr(),r=fa(),t=lc().indexOf,a=bl(),s=e([].push);return Ss=function(l,o){var g=r(l),m=0,v=[],f;for(f in g)!n(a,f)&&n(g,f)&&s(v,f);for(;o.length>m;)n(g,f=o[m++])&&(~t(v,f)||s(v,f));return v},Ss}var Ro,Eo;function jl(){return Eo||(Eo=1,Ro=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Ro}var No;function dc(){if(No)return Is;No=1;var e=Dk(),n=jl(),r=n.concat("length","prototype");return Is.f=Object.getOwnPropertyNames||function(t){return e(t,r)},Is}var Po={},qo;function oc(){return qo||(qo=1,Po.f=Object.getOwnPropertySymbols),Po}var xs,So;function gc(){if(So)return xs;So=1;var e=ya(),n=tn(),r=dc(),t=oc(),a=ba(),s=n([].concat);return xs=e("Reflect","ownKeys")||function(l){var o=r.f(a(l)),g=t.f;return g?s(o,g(l)):o},xs}var Bs,xo;function uc(){if(xo)return Bs;xo=1;var e=dr(),n=gc(),r=Sk(),t=st();return Bs=function(a,s,l){for(var o=n(s),g=t.f,m=r.f,v=0;v<o.length;v++){var f=o[v];!e(a,f)&&!(l&&e(l,f))&&g(a,f,m(s,f))}},Bs}var Fs,Bo;function kc(){if(Bo)return Fs;Bo=1;var e=Bn(),n=an(),r=/#|\.prototype\./,t=function(g,m){var v=s[a(g)];return v===o?!0:v===l?!1:n(m)?e(m):!!m},a=t.normalize=function(g){return String(g).replace(r,".").toLowerCase()},s=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return Fs=t,Fs}var _s,Fo;function mc(){if(Fo)return _s;Fo=1;var e=rn(),n=Sk().f,r=Bk(),t=tc(),a=fl(),s=uc(),l=kc();return _s=function(o,g){var m=o.target,v=o.global,f=o.stat,b,y,j,R,h,N;if(v?y=e:f?y=e[m]||a(m,{}):y=e[m]&&e[m].prototype,y)for(j in g){if(h=g[j],o.dontCallGetSet?(N=n(y,j),R=N&&N.value):R=y[j],b=l(v?j:m+(f?".":"#")+j,o.forced),!b&&R!==void 0){if(typeof h==typeof R)continue;s(h,R)}(o.sham||R&&R.sham)&&r(h,"sham",!0),t(y,j,h,o)}},_s}var Os,_o;function wk(){if(_o)return Os;_o=1;var e=pa();return Os=Array.isArray||function(n){return e(n)==="Array"},Os}var Ds,Oo;function vc(){if(Oo)return Ds;Oo=1;var e=TypeError,n=9007199254740991;return Ds=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Ds}var ws,Do;function pc(){if(Do)return ws;Do=1;var e=pa(),n=tn();return ws=function(r){if(e(r)==="Function")return n(r)},ws}var Vs,wo;function fc(){if(wo)return Vs;wo=1;var e=pc(),n=pl(),r=ml(),t=e(e.bind);return Vs=function(a,s){return n(a),s===void 0?a:r?t(a,s):function(){return a.apply(s,arguments)}},Vs}var Ms,Vo;function yc(){if(Vo)return Ms;Vo=1;var e=wk(),n=cl(),r=vc(),t=fc(),a=function(s,l,o,g,m,v,f,b){for(var y=m,j=0,R=f?t(f,b):!1,h,N;j<g;)j in o&&(h=R?R(o[j],j,l):o[j],v>0&&e(h)?(N=n(h),y=a(s,l,h,N,y,v-1)-1):(r(y+1),s[y]=h),y++),j++;return y};return Ms=a,Ms}var Gs,Mo;function bc(){if(Mo)return Gs;Mo=1;var e=at(),n=e("toStringTag"),r={};return r[n]="z",Gs=String(r)==="[object z]",Gs}var Ls,Go;function cc(){if(Go)return Ls;Go=1;var e=bc(),n=an(),r=pa(),t=at(),a=t("toStringTag"),s=Object,l=r(function(){return arguments}())==="Arguments",o=function(g,m){try{return g[m]}catch{}};return Ls=e?r:function(g){var m,v,f;return g===void 0?"Undefined":g===null?"Null":typeof(v=o(m=s(g),a))=="string"?v:l?r(m):(f=r(m))==="Object"&&n(m.callee)?"Arguments":f},Ls}var Ks,Lo;function jc(){if(Lo)return Ks;Lo=1;var e=tn(),n=Bn(),r=an(),t=cc(),a=ya(),s=Fk(),l=function(){},o=a("Reflect","construct"),g=/^\s*(?:class|function)\b/,m=e(g.exec),v=!g.test(l),f=function(y){if(!r(y))return!1;try{return o(l,[],y),!0}catch{return!1}},b=function(y){if(!r(y))return!1;switch(t(y)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!m(g,s(y))}catch{return!0}};return b.sham=!0,Ks=!o||n(function(){var y;return f(f.call)||!f(Object)||!f(function(){y=!0})||y})?b:f,Ks}var $s,Ko;function hc(){if(Ko)return $s;Ko=1;var e=wk(),n=jc(),r=Er(),t=at(),a=t("species"),s=Array;return $s=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===s||e(o.prototype))?o=void 0:r(o)&&(o=o[a],o===null&&(o=void 0))),o===void 0?s:o},$s}var Us,$o;function Ac(){if($o)return Us;$o=1;var e=hc();return Us=function(n,r){return new(e(n))(r===0?0:r)},Us}var Uo;function Ic(){if(Uo)return vd;Uo=1;var e=mc(),n=yc(),r=pl(),t=Rk(),a=cl(),s=Ac();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),g=a(o),m;return r(l),m=s(o,0),m.length=n(m,o,o,g,0,1,l,arguments.length>1?arguments[1]:void 0),m}}),vd}var Ho={},Hs={},Ys,Yo;function Tc(){if(Yo)return Ys;Yo=1;var e=Dk(),n=jl();return Ys=Object.keys||function(r){return e(r,n)},Ys}var Co;function Rc(){if(Co)return Hs;Co=1;var e=Gn(),n=xk(),r=st(),t=ba(),a=fa(),s=Tc();return Hs.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var g=a(o),m=s(o),v=m.length,f=0,b;v>f;)r.f(l,b=m[f++],g[b]);return l},Hs}var Cs,zo;function Ec(){if(zo)return Cs;zo=1;var e=ya();return Cs=e("document","documentElement"),Cs}var zs,Jo;function Nc(){if(Jo)return zs;Jo=1;var e=ba(),n=Rc(),r=jl(),t=bl(),a=Ec(),s=Pk(),l=_k(),o=">",g="<",m="prototype",v="script",f=l("IE_PROTO"),b=function(){},y=function(E){return g+v+o+E+g+"/"+v+o},j=function(E){E.write(y("")),E.close();var P=E.parentWindow.Object;return E=null,P},R=function(){var E=s("iframe"),P="java"+v+":",q;return E.style.display="none",a.appendChild(E),E.src=String(P),q=E.contentWindow.document,q.open(),q.write(y("document.F=Object")),q.close(),q.F},h,N=function(){try{h=new ActiveXObject("htmlfile")}catch{}N=typeof document<"u"?document.domain&&h?j(h):R():j(h);for(var E=r.length;E--;)delete N[m][r[E]];return N()};return t[f]=!0,zs=Object.create||function(E,P){var q;return E!==null?(b[m]=e(E),q=new b,b[m]=null,q[f]=E):q=N(),P===void 0?q:n.f(q,P)},zs}var Js,Wo;function Pc(){if(Wo)return Js;Wo=1;var e=at(),n=Nc(),r=st().f,t=e("unscopables"),a=Array.prototype;return a[t]===void 0&&r(a,t,{configurable:!0,value:n(null)}),Js=function(s){a[t][s]=!0},Js}var Zo;function qc(){if(Zo)return Ho;Zo=1;var e=Pc();return e("flatMap"),Ho}var Ws,Xo;function Sc(){if(Xo)return Ws;Xo=1;var e=rn(),n=tn();return Ws=function(r,t){return n(e[r].prototype[t])},Ws}var Zs,Qo;function xc(){if(Qo)return Zs;Qo=1,Ic(),qc();var e=Sc();return Zs=e("Array","flatMap"),Zs}var Xs,eg;function Bc(){if(eg)return Xs;eg=1;var e=xc();return Xs=e,Xs}var Qs,ng;function Fc(){if(ng)return Qs;ng=1;var e=Bc();return Qs=e,Qs}var ei,rg;function _c(){if(rg)return ei;rg=1;var e=Fc();return ei=e,ei}var tg,ag;function Oc(){return ag||(ag=1,tg=_c()),tg}Oc();const Dn="vurderEtterlønnSluttpakke",it=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return k.jsx("div",{children:k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsx(u,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${Dn}`,validate:[Q],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:kn})})};it.buildInitialValues=(e,n)=>{var r,t,a;const s={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!ma(n.status),o=e.beregningsgrunnlagPeriode.flatMap(g=>g.beregningsgrunnlagPrStatusOgAndel).filter(g=>(g==null?void 0:g.arbeidsforhold)&&(g==null?void 0:g.arbeidsforhold.arbeidsforholdType)===ir.ETTERLONN_SLUTTPAKKE);return o.length>0&&(s[Dn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((a=o[0])==null?void 0:a.beregnetPrAar)>0:void 0),s};const Dc=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===ir.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};it.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(O.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}};const a=Dc(r);if(!a)return{};const s=n.find(o=>o.andelsnr===a);if(!s)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}};s.andelsnr&&t.push(s.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE,O.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}}};const Vk="mottarYtelseField",wc="_frilans",or=e=>Vk+e.andelsnr,Qn=()=>Vk+wc,Vc=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[or(r)]).find(r=>r)!==void 0,Mk=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[Qn()]:void 0,Gk=(e,n,r)=>{var t;if(!n)return{};const a={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[or(l)]:void 0;l.andelsnr&&(a[l.andelsnr]=o)}),!r)return a;const s=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===oe.FRILANSER);return s&&(a[s.andelsnr]=Mk(e)),a},Lk="inntektFieldArray",Mc=e=>e.inntektskategori&&e.inntektskategori!==va.UDEFINERT?e.inntektskategori:"",Gc=(e,n,r)=>{var t,a,s,l,o;const g=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return g?Vn(g,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(a=e.arbeidsforhold)!=null&&a.arbeidsforholdType?(s=r[gn.OPPTJENING_AKTIVITET_TYPE].find(m=>{var v;return m.kode===((v=e.arbeidsforhold)==null?void 0:v.arbeidsforholdType)}))==null?void 0:s.navn:(l=r[gn.AKTIVITET_STATUS].find(m=>m.kode===e.aktivitetStatus))==null?void 0:l.navn},Kk=(e,n,r)=>({andel:Gc(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Mc(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),Lc=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Kc=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,$c=(e,n)=>{const r=Lc(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},ca=e=>!!e.aktivitetStatus&&e.aktivitetStatus===oe.ARBEIDSTAKER,ja=e=>!!e.aktivitetStatus&&e.aktivitetStatus===oe.FRILANSER,$k=e=>!!e.aktivitetStatus&&e.aktivitetStatus===oe.DAGPENGER,Uk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===oe.SELVSTENDIG_NAERINGSDRIVENDE,Hk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===oe.MILITAER_ELLER_SIVIL,Uc=(e,n)=>n?ja(e)&&!!n[An]:!1,Hc=e=>!!e[We],Yc=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&Kc(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[yr],Cc=(e,n,r)=>ca(e)&&Yc(n,e,r),zc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&ja(e),Jc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&ca(e)&&$c(e,n),Wc=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const a=Gk(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!a[n.andelsnr]},Zc=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===ir.ETTERLONN_SLUTTPAKKE?!!n[Dn]:!1,Yk=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===dl.KUNSTIG))!==void 0},Xc=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===O.FASTSETT_BG_KUN_YTELSE)!==void 0,Qc=(e,n,r)=>t=>!!(Hc(e)||Wc(e,t,n,r)||Cc(t,e,n)||zc(t,n)||Jc(t,n)||Yk(t,r)||yk(t,r,t.arbeidsforholdId)||Zc(t,e)),ej=(e,n,r)=>t=>Qc(e,n,r)(t)?!0:Uc(t,e),Tn=e=>!!e&&e[fr]===!0,nj=e=>e&&e.some(n=>n.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),Ck=e=>Tn(e),sg=e=>e.erOverstyrtInntekt||nj(e.avklaringsbehov),zk=(e,n,r)=>t=>Xc(n)||ej(e,n,r)(t),rj=(e,n,r)=>t=>Tn(e)||zk(e,n,r)(t),br=(e,n)=>r=>n.faktaOmBeregning?rj(e,n.faktaOmBeregning,n)(r):!1,tj=e=>n=>Yk(n,e),aj=e=>tj(e),ci=(e,n,r)=>({...Kk(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?M(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?M(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?M(e.refusjonskrav):""}),ji=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Ct=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},Ln=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},hl=e=>{var n;return((n=Ln(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Cn=(e,n)=>n.some(r=>r.definisjon===e),Jk=e=>{const n=e.filter(r=>r.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!ma(r.status))},sj=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,ij=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:a,aktivitetStatus:s}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(g=>g.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:a}}return et[t]?{andelsinfo:t,inntektskategori:a}:{andelsinfo:t,inntektskategori:a}}return zr[s]?{andelsinfo:zr[s],inntektskategori:a}:{andelsinfo:t,inntektskategori:a,arbeidsforholdId:l}},lj=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),dj=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,Wk=(e,n,r)=>{const t=e.map(a=>n(a,e)).slice().sort((a,s)=>sj(a,s));for(let a=0;a<t.length-1;a+=1)if(dj(t[a],t[a+1]))return lj(r)},oj=(e,n)=>Wk(e,ij,n),gj=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),uj=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:gj(n),kj="_row_1hw01_1",mj="_slettIkon_1hw01_10",vj="_rightAlign_1hw01_13",pj="_addCircleIcon_1hw01_41",fj="_storBredde_1hw01_47",yj="_mediumBredde_1hw01_50",On={row:kj,slettIkon:mj,rightAlign:vj,addCircleIcon:pj,storBredde:fj,mediumBredde:yj},bj=(e,n)=>{var r;return{andel:(r=n[gn.AKTIVITET_STATUS].find(t=>t.kode===e.filter(a=>a===oe.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},cj=e=>e.map(n=>k.jsx("option",{value:n.kode,children:n.navn},n.kode)),jj=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?pe(r.fastsattBelop):0}),n>0?M(n):""};function hj(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const Aj=(e,n,r,t,a,s,l)=>e.map((o,g)=>k.jsxs(c.Row,{className:On.row,children:[k.jsx(c.DataCell,{children:k.jsx(T,{size:"small",children:k.jsx(u,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),k.jsx(c.DataCell,{align:"right",className:On.rightAlign,children:k.jsx(ce,{name:`${s}.${g}.fastsattBelop`,className:On.mediumBredde,parse:Oe,readOnly:r,isEdited:n,validate:r?[]:[Q,nn(178956970)],label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${g+1}`}),hideLabel:!0,size:"small"})}),k.jsx(c.DataCell,{align:"right",className:On.rightAlign,children:k.jsx(da,{label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${g+1}`}),name:`${s}.${g}.inntektskategori`,className:On.storBredde,selectValues:cj(t),readOnly:r,validate:r?[]:[Q],hideLabel:!0,size:"small"})}),k.jsx(c.DataCell,{align:"right",className:On.rightAlign,children:hj(g,e,r)&&k.jsx(ae,{icon:k.jsx(Jn,{"aria-hidden":!0,className:On.slettIkon}),onClick:()=>l(g),type:"button",variant:"tertiary"})})]},o.id)),Ij=e=>k.jsxs(c.Row,{children:[k.jsx(c.DataCell,{children:k.jsx(B,{as:"p",size:"small",children:k.jsx(u,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),k.jsx(c.DataCell,{align:"right",children:k.jsx(ke,{children:e})}),k.jsx(c.DataCell,{}),k.jsx(c.DataCell,{})]},"bruttoBGSummaryRow"),Tj=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Rj=e=>e[gn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Ej=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},Nj=(e,n)=>{const r=e?Wk(e,Ej,n):void 0;if(r)return r},Zk=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var a;const s=Z(),{control:l}=Ie(),o=C.useContext(Pe),g=`${vn}.${o}.${e}`,{fields:m,append:v,remove:f}=en({control:l,name:g}),b=(a=t[gn.AKTIVITET_STATUS])==null?void 0:a.map(q=>q.kode),y=Rj(t),j=Gr({name:g,control:l}),R=j?jj(j):"0",h=Aj(m,r,n,y,s,g,f);h.push(Ij(R));const N=Nj(j,s),E=`${g}.skjemagruppe`,P=la(E,N);return k.jsxs(V,{gap:"2",children:[k.jsxs(c,{size:"small",children:[k.jsx(c.Header,{children:k.jsxs(c.Row,{children:[Tj().map(q=>{const S=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(q);return k.jsx(c.HeaderCell,{scope:"col",align:S?"right":"left",children:k.jsx(B,{size:"small",as:"span",children:k.jsx(u,{id:q})})},q)}),k.jsx(c.HeaderCell,{})]})}),k.jsx(c.Body,{children:h})]}),!n&&k.jsx(K,{children:k.jsx(ae,{icon:k.jsx(zi,{"aria-hidden":!0,className:On.addCircleIcon}),onClick:()=>v(bj(b,t)),type:"button",variant:"tertiary",size:"small",children:k.jsx(u,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),P&&k.jsx(Zr,{children:P})]})},zt="besteberegningField",lt=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{getValues:s}=Ie(),l=C.useContext(Pe),o=s(`${vn}.${l}`),g=zt in o?o[zt]:void 0,m=Z();return k.jsxs("div",{children:[k.jsx(Ne,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:k.jsx(u,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[Q],parse:kn,isHorizontal:!0}),g!=null&&k.jsx("div",{style:{marginTop:"10px"},children:k.jsx(Nu,{alignOffset:g?0:60,children:k.jsxs(V,{gap:"4",children:[k.jsxs(K,{justify:"space-between",children:[k.jsx(B,{size:"small",children:k.jsx(u,{id:"KunYtelsePanel.OverskriftBesteberegning"})}),g&&k.jsx("a",{className:fk.navetLink,href:pk,target:"_blank",rel:"noopener noreferrer",children:k.jsx(u,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})]}),t&&k.jsx(Zk,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:a})]})})})]})};lt.buildInitialValues=e=>({[zt]:e.erBesteberegning});lt.transformValues=e=>!!e[zt];const Pj=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>k.jsxs(V,{gap:"4",children:[k.jsx(B,{size:"medium",children:k.jsx(u,{id:"KunYtelsePanel.RapporterteInntekter"})}),k.jsx(Zk,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),Jt="brukersAndelBG",dt=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{kunYtelse:s}=n,l=s==null?void 0:s.fodendeKvinneMedDP;return k.jsxs("div",{children:[l&&k.jsx(lt,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:Jt,skalViseInntektstabell:t,kodeverkSamling:a}),!l&&t&&k.jsx(Pj,{readOnly:e,brukersAndelFieldArrayName:Jt,isAksjonspunktClosed:r,kodeverkSamling:a})]})};dt.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const a=e.andeler.map(l=>{const o=n.find(m=>m.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const g=l.fastsattBelopPrMnd!==null?M(l.fastsattBelopPrMnd):"";return{...Kk(o,r,t),fastsattBelop:g??""}}),s={[Jt]:a};return e.fodendeKvinneMedDP?{...lt.buildInitialValues(e),...s}:s};dt.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[Jt].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:pe(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?lt.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:Wt,VURDER_BESTEBEREGNING:qj}=O,Sj=(e,n,r,t,a,s,l)=>{n.includes(Wt)&&e.push(k.jsxs(V,{gap:"4",children:[k.jsx(dt,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:a,kodeverkSamling:s}),l()]},"FASTSETT_BG_KUN_YTELSE"))},xj=(e,n,r)=>{if(r.includes(Wt)&&n){const t=dt.transformValues(e,n),a=[Wt];return n!=null&&n.fodendeKvinneMedDP&&a.push(qj),{faktaOmBeregningTilfeller:a,...t}}return{}},Bj=(e,n,r,t,a)=>n&&n.includes(Wt)?dt.buildInitialValues(e,r,t,a):{},Al="erSNNyIArbeidslivet",ot=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return k.jsx("div",{children:k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Al}`,validate:[Q],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:kn})})};ot.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===oe.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[Al]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};ot.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[Al]}});const Fj="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",Il=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",ig=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return Vn(r,e.eksternArbeidsforholdId)},St=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},gt=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,a=C.useContext(Pe),s=Z();return!t||t.length===0?null:k.jsx(V,{gap:"6",children:t.map(l=>k.jsx("div",{children:k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:Fj,values:{navn:ig(St(l.arbeidsforhold),r),fom:A(St(l.arbeidsforhold).startdato).format(te),tom:A(St(l.arbeidsforhold).opphoersdato).format(te)}}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsx(u,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${a}.tidsbegrensetValues.${Il(l)}`,isReadOnly:e,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[Q],parse:kn})},`fastsettTidsbegrensedeForhold_${ig(St(l.arbeidsforhold),r)}`))})};gt.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[Il(r)]=r.erTidsbegrensetArbeidsforhold)}),n};gt.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const a=Il(t),s=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[a];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:s,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const Tl="vurderMilitær",ut=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return k.jsx("div",{children:k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Tl}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[Q],parse:kn})})};ut.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[Tl]=e.vurderMilitaer.harMilitaer),n};ut.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[Tl]}});const _j=[O.VURDER_NYOPPSTARTET_FL,O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],Oj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",Dj=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let s;return a?s=Vn(a,e.eksternArbeidsforholdId):s=e.arbeidsforholdType?(t=n[gn.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",k.jsx(u,{id:Oj(),values:{arbeid:s}})},wj=(e,n,r,t,a,s)=>k.jsx("div",{children:k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[e.arbeidsforhold&&Dj(e.arbeidsforhold,r,t),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${a}.vurderMottarYtelseValues.${or(e)}`,isReadOnly:n,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:kn,validate:n?[]:[Q]})}),Vj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",Mj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",Gj=e=>e.some(n=>_j.includes(n))?Vj():Mj(),hi=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),kt=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a})=>{const s=C.useContext(Pe),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,g=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],m=Z();return k.jsxs(k.Fragment,{children:[o&&!hi(r)&&k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:Gj(r)}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${Qn()}`,isReadOnly:e,radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:kn,validate:e?[]:[Q]}),k.jsx(V,{gap:"6",children:g.map(v=>k.jsx(C.Fragment,{children:wj(v,e,t,a,s,m)},or(v)))})]})},Lj=(e,n,r,t,a,s)=>{var l,o;if(n===null)return{};if(Vc(e,r.vurderMottarYtelse)){const g=[],m=Gk(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(v=>{var f;if(v.andelsnr&&m[v.andelsnr]&&!a.includes(v.andelsnr)){const b=(f=n.find(y=>y.andelsnr===v.andelsnr))==null?void 0:f.fastsattBelop;(b||b===0)&&(g.push({andelsnr:v.andelsnr,fastsattBeløp:pe(b)}),a.push(v.andelsnr))}}),g.length>0?(s.push(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:g}}):{}}return{}},Kj=(e,n,r,t,a)=>{var s;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[Qn()]){const l=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(o=>o.aktivitetStatus===oe.FRILANSER);if(l&&!t.includes(l.andelsnr)&&Mk(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),a.push(O.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:pe(o.fastsattBelop)}}}return{}}return{}},$j=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},Uj=(e,n,r)=>{var t;const a=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(O.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[Qn()],arbeidstakerUtenIMMottarYtelse:a.map(s=>({andelsnr:$j(s.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[or(s)]}))}}};kt.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||hi(n))&&(r[Qn()]=hi(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(a=>{r[or(a)]=a.mottarYtelse}),r};kt.transformValues=(e,n,r,t,a)=>{const s=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_MOTTAR_YTELSE)?{...Uj(e,r,s),...Lj(e,n,r,t,a,s),...Kj(e,n,t,a,s),faktaOmBeregningTilfeller:s}:{}};const Hj="_aksjonspunktBoks_tufis_1",Yj={aksjonspunktBoks:Hj},Cj=({children:e})=>k.jsx("div",{className:Yj.aksjonspunktBoks,children:e}),zj="_slettIkon_1sqjy_1",Jj="_rightAlignInput_1sqjy_7",Wj="_readOnlyContainer_1sqjy_36",Zj="_readOnlyContent_1sqjy_39",Xj="_storBredde_1sqjy_44",Qj="_mediumBredde_1sqjy_47",eh="_litenBredde_1sqjy_50",nh="_inntekt_1sqjy_53",rh="_inntektNew_1sqjy_57",th="_inntektOld_1sqjy_61",ah="_inntektOldStrikethrough_1sqjy_64",sh="_saksbehandlerIcon_1sqjy_72",De={slettIkon:zj,rightAlignInput:Jj,readOnlyContainer:Wj,readOnlyContent:Zj,storBredde:Xj,mediumBredde:Qj,litenBredde:eh,inntekt:nh,inntektNew:rh,inntektOld:th,inntektOldStrikethrough:ah,saksbehandlerIcon:sh},ih=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},lh=e=>e.map(n=>k.jsx("option",{value:n.kode,children:n.navn},n.kode)),dh=e=>e[gn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),oh=()=>k.jsx(Zr,{size:"small",children:"Må fastsettes"}),gh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:a,removeAndel:s,beregningsgrunnlag:l,kodeverkSamling:o,rowName:g,skalFastsetteInntektForAndel:m})=>{var v,f,b,y,j,R,h,N;const E=Z(),{getValues:P}=Ie(),q=C.useContext(Pe),S=P(`vurderFaktaBeregningForm.${q}`),D=ja(e),F=$k(e),z=Uk(e),J=Hk(e),_=ca(e),G=br(S,l)(e),w=D&&G&&((v=S==null?void 0:S.frilansInntektValues)==null?void 0:v.fastsattBelop),U=_&&G&&e.arbeidsgiverId&&!!Ct(S==null?void 0:S.arbeidstakerInntektValues,e.arbeidsgiverId),re=F&&G&&((f=S==null?void 0:S.dagpengerInntektValues)==null?void 0:f.fastsattBelop),W=z&&G&&((b=S==null?void 0:S.selvstendigNæringsdrivendeInntektValues)==null?void 0:b.fastsattBelop),se=J&&G&&((y=S==null?void 0:S.militærEllerSivilInntektValues)==null?void 0:y.fastsattBelop),Re=D&&G&&!((j=S==null?void 0:S.frilansInntektValues)!=null&&j.fastsattBelop)||_&&G&&e.arbeidsgiverId&&!Ct(S==null?void 0:S.arbeidstakerInntektValues,e.arbeidsgiverId)||F&&G&&!((R=S==null?void 0:S.dagpengerInntektValues)!=null&&R.fastsattBelop)||z&&G&&!((h=S==null?void 0:S.selvstendigNæringsdrivendeInntektValues)!=null&&h.fastsattBelop)||J&&G&&!((N=S==null?void 0:S.militærEllerSivilInntektValues)!=null&&N.fastsattBelop),Fe=w||U||re||W||se,ze=Tn(S),Je=aj(l)(e),X=dh(o),ee=e.arbeidsperiodeFom||e.arbeidsperiodeTom,me=()=>U&&S.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${q}.arbeidstakerInntektValues.${ji(S.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:w?`vurderFaktaBeregningForm.${q}.frilansInntektValues.fastsattBelop`:re?`vurderFaktaBeregningForm.${q}.dagpengerInntektValues.fastsattBelop`:W?`vurderFaktaBeregningForm.${q}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:se?`vurderFaktaBeregningForm.${q}.militærEllerSivilInntektValues.fastsattBelop`:"";return k.jsxs(c.Row,{children:[k.jsx(c.DataCell,{children:k.jsx(ce,{size:"small",name:`${g}.andel`,className:De.storBredde,readOnly:!0})}),k.jsx(c.DataCell,{children:n&&ee&&e.arbeidsperiodeFom&&k.jsx(mp,{value:k.jsx($e,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!ze&&k.jsx(c.DataCell,{align:"right",children:k.jsxs("div",{className:De.inntekt,children:[k.jsx("div",{className:Fe?De.inntektOldStrikethrough:De.inntektOld,children:Re?oh():k.jsx(ce,{size:"small",name:`${g}.belopReadOnly`,className:De.mediumBredde,parse:Oe,readOnly:!0})}),Fe&&k.jsxs(k.Fragment,{children:[k.jsx("div",{className:De.inntektNew,children:k.jsx(ce,{size:"small",name:me(),className:De.mediumBredde,parse:Oe,readOnly:!0})}),k.jsx(ip,{title:"Endret av saksbehandler",className:De.saksbehandlerIcon})]})]})}),ze&&k.jsx(c.DataCell,{align:"right",className:De.rightAlignInput,children:k.jsx(ce,{size:"small",label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${g}.fastsattBelop`,parse:Oe,className:De.mediumBredde,validate:m(e)?[Q,nn(178956970)]:[],hideLabel:!0})}),r&&k.jsx(c.DataCell,{align:"right",children:k.jsx(ce,{size:"small",name:`${g}.refusjonskrav`,className:De.litenBredde,readOnly:!0,parse:Oe})}),k.jsx(c.DataCell,{align:"right",children:k.jsx(da,{label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${g}.inntektskategori`,className:De.storBredde,selectValues:lh(X),validate:a?[]:[Q],readOnly:a||!Je,size:"small",hideLabel:!0})}),t&&k.jsx(c.DataCell,{children:k.jsx(ae,{icon:k.jsx(Jn,{"aria-hidden":!0,className:De.slettIkon}),onClick:()=>s(),type:"button",variant:"tertiary"})})]})},uh=(e,n,r)=>{let t=0;return e.forEach(a=>{var s,l,o,g,m,v;let f;if(br(n,r)(a)){const b=ja(a),y=ca(a),j=$k(a),R=Uk(a),h=Hk(a);a.fastsattBelop&&Tn(n)?f=a.fastsattBelop:b&&(s=n==null?void 0:n.frilansInntektValues)!=null&&s.fastsattBelop?f=n.frilansInntektValues.fastsattBelop:y&&a.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[ji(n.arbeidstakerInntektValues,a.arbeidsgiverId)])!=null&&o.fastsattBelop?f=n.arbeidstakerInntektValues[ji(n.arbeidstakerInntektValues,a.arbeidsgiverId)].fastsattBelop:j&&(g=n==null?void 0:n.dagpengerInntektValues)!=null&&g.fastsattBelop?f=n.dagpengerInntektValues.fastsattBelop:R&&(m=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&m.fastsattBelop?f=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:h&&(v=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&v.fastsattBelop?f=n.militærEllerSivilInntektValues.fastsattBelop:a.fastsattBelop&&!Tn(n)?f=0:f=a.fastsattBelop}else f=a.belopReadOnly;t+=f?pe(f):0}),t>0?t:0},kh=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:a,getValues:s}=Ie(),l=C.useContext(Pe),o=s(`vurderFaktaBeregningForm.${l}`),g=Gr({control:a,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),m=g?uh(g,o,t):0;return k.jsxs(c.Row,{children:[k.jsx(c.DataCell,{children:k.jsx(B,{as:"p",size:"small",children:k.jsx(u,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&k.jsx(c.DataCell,{}),k.jsx(c.DataCell,{align:"right",children:k.jsx("div",{className:De.readOnlyContainer,children:k.jsx(B,{as:"p","data-testid":"sum",className:r?De.readOnlyContent:"",size:"small",children:M(m)})})}),n&&k.jsx(c.DataCell,{}),k.jsx(c.DataCell,{})]})},Xk=(e,n)=>{var r;const t=(r=e.find(({kode:a})=>a===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},mh=e=>({andel:Xk(e,oe.DAGPENGER),aktivitetStatus:oe.DAGPENGER,fastsattBelop:"",inntektskategori:va.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),vh=e=>({andel:Xk(e,oe.MILITAER_ELLER_SIVIL),aktivitetStatus:oe.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:va.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),ph=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,Ai=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},Ii=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},fh=(e,n)=>()=>{n(e)},yh=(e,n,r)=>k.jsx(kh,{readOnly:n,skalVisePeriode:Ii(e),skalViseRefusjon:Ai(e),beregningsgrunnlag:r},"summaryRow"),bh=(e,n)=>{let r=-1;return e.forEach((t,a)=>{t.aktivitetStatus===n&&(r=a)}),r},Qk=(e,n,r,t,a,s,l)=>{const o=bh(e,n);if(o!==-1){const g=e[o];t(g)&&s(o)}o===-1&&r&&l({...a})},lg=e=>e===oe.FRILANSER,dg=e=>e===oe.ARBEIDSTAKER,og=e=>e===oe.DAGPENGER,gg=e=>e===oe.SELVSTENDIG_NAERINGSDRIVENDE,ug=e=>e===oe.MILITAER_ELLER_SIVIL,ch=(e,n,r,t,a,s)=>{Qk(e,oe.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,mh(r),a,s)},jh=(e,n,r,t,a,s)=>{Qk(e,oe.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,vh(r),a,s)},hh=(e,n)=>uj(e,n)??null,Ah=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?oj(t,r)||(Tn(e)?hh(t,r):null):void 0},mt=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var a,s;const{getValues:l,control:o,formState:g}=Ie(),{errors:m}=g,v=C.useContext(Pe),f=`vurderFaktaBeregningForm.${v}.inntektFieldArray`,{fields:b,remove:y,append:j,update:R}=en({control:o,name:f}),h=Gr({control:o,name:`vurderFaktaBeregningForm.${v}`}),N=Gr({control:o,name:`vurderFaktaBeregningForm.${v}.vurderbesteberegningField`}),E=Gr({control:o,name:`vurderFaktaBeregningForm.${v}.vurderMilitær`}),P=Z(),q=I.useCallback(()=>br(h,r),[h,r]);I.useEffect(()=>{const w=l(`vurderFaktaBeregningForm.${v}.inntektFieldArray`),U=t[gn.AKTIVITET_STATUS];w&&(jh(w,!!E,U,q,y,j),ch(w,!!N,U,n,y,j))},[N,E,n]);const S=(w,U)=>{R(w,{...b[w],kanRedigereInntekt:U})};I.useEffect(()=>{b.forEach((w,U)=>{const re=w.kanRedigereInntekt,W=br(h,r)(w);!(!N&&!n&&w.lagtTilAvSaksbehandler)&&re!==W&&S(U,W)})},[h]);const D=(s=(a=m==null?void 0:m.vurderFaktaBeregningForm)==null?void 0:a[v])==null?void 0:s.inntektFieldArray,F=Ah(h,D,P),z=`${f}.skjemagruppe`,J=la(z,F??void 0),_=r.faktaOmBeregning;if(!_)return null;const G=b.map((w,U)=>k.jsx(gh,{field:w,skalVisePeriode:Ii(b),skalViseRefusjon:Ai(b),skalViseSletteknapp:ph(U,b,e),readOnly:e,removeAndel:fh(U,y),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${f}.${U}`,skalFastsetteInntektForAndel:zk(h,_,r)},w.id));return G.length===0?null:(G.push(yh(b,e,r)),k.jsxs(V,{gap:"2",children:[k.jsxs(c,{size:"small",children:[k.jsx(c.Header,{children:k.jsx(c.Row,{children:ih(Ii(b),Ai(b)).map(w=>{const U=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(w);return k.jsx(c.HeaderCell,{scope:"col",align:U?"right":"left",children:k.jsx(B,{size:"small",as:"span",children:k.jsx(u,{id:w})})},w)})})}),k.jsx(c.Body,{children:G})]}),J&&k.jsx(Zr,{children:J})]}))};mt.transformValues=(e,n,r,t,a,s,l)=>{if(!e)return[];const o=g=>{const m=l&&g.fastsattBelop||lg(g.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||dg(g.aktivitetStatus)&&g.arbeidsgiverId&&Ct(r,g.arbeidsgiverId)||og(g.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||gg(g.aktivitetStatus)&&(a==null?void 0:a.fastsattBelop)||ug(g.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||g.fastsattBelop;return{andelsnr:g.andelsnr,fastsattBelop:pe(m),inntektskategori:g.inntektskategori,nyAndel:g.nyAndel,lagtTilAvSaksbehandler:g.lagtTilAvSaksbehandler,aktivitetStatus:g.aktivitetStatus,arbeidsforholdId:g.arbeidsforholdId,arbeidsgiverId:g.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:g})=>g).filter(({fastsattBelop:g,aktivitetStatus:m,arbeidsgiverId:v})=>g!==null&&g!==""||lg(m)&&(n==null?void 0:n.fastsattBelop)||dg(m)&&v&&Ct(r,v)||og(m)&&(t==null?void 0:t.fastsattBelop)||gg(m)&&(a==null?void 0:a.fastsattBelop)||ug(m)&&(s==null?void 0:s.fastsattBelop)).map(o)};mt.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>ci(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:Ih}=O,Th="erKravGyldig_",Rl=e=>Th+e,Rh=(e,n,r,t)=>e.map(a=>{const{arbeidsgiverIdent:s}=a,l=r[s],o=l?Vn(l):s,g=Z();return k.jsx(C.Fragment,{children:k.jsx(Ne,{label:k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsx(u,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${Rl(s)}`,validate:[Q],isReadOnly:n,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:kn})},s)}),vt=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=C.useContext(Pe),a=n==null?void 0:n.refusjonskravSomKommerForSentListe;return a?k.jsx(k.Fragment,{children:Rh(a,e,r,t)}):null};vt.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[Rl(r)]}))};vt.buildInitialValues=(e,n)=>{const r={};return!e.includes(Ih)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:a})=>{r[Rl(t)]=a}),{...r})};const Eh=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===dl.KUNSTIG))!==void 0},kg=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},Nh=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},Ph=(e,n,r,t,a)=>{const s=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!s.map(g=>g).includes(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!s.map(g=>g).includes(O.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(g=>g.andelsnr&&!a.includes(g.andelsnr)).filter(g=>yk(g,t,g.arbeidsforholdId)||Eh(g,t)||Kb(g,r,e));l.forEach(g=>a.push(kg(g.andelsnr)));const o=l.map(g=>({andelsnr:kg(g.andelsnr),fastsattBeløp:pe(g.fastsattBelop),inntektskategori:Nh(g.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},mg=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},qh=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(a=>a).includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const a=e.filter(s=>s.andelsnr&&!r.includes(s.andelsnr)).filter(s=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(s.andelsnr)).map(s=>({andelsnr:mg(s.andelsnr),arbeidsinntekt:s.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const s=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});a.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:mg(s==null?void 0:s.fastsattBelop)})}if(a.forEach(s=>r.push(s.andelsnr)),a.length>0)return{faktaOmBeregningTilfeller:[O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:a}}}return{faktaOmBeregningTilfeller:[]}},ni=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),vg=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s})=>{var l,o,g,m,v,f,b,y,j;const{getValues:R}=Ie(),h=C.useContext(Pe),N=R(`vurderFaktaBeregningForm.${h}`),E=R([`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Qn()}`,`vurderFaktaBeregningForm.${h}.${An}`]),P=()=>{var X;if(E.includes(!0))return!0;const ee=R([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0),me=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(Te=>Te.aktivitetStatus===oe.FRILANSER);return ee&&me},q=()=>{var X;const ee=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===oe.SELVSTENDIG_NAERINGSDRIVENDE);return R([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0)&&ee},S=()=>{var X;const ee=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===oe.MILITAER_ELLER_SIVIL);return R([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0)&&ee},D=R([`vurderFaktaBeregningForm.${h}.${yr}`,`vurderFaktaBeregningForm.${h}.${We}`]),F=D.includes(!0),z=R([`vurderFaktaBeregningForm.${h}.${Dn}`]).includes(!0),J=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,_=(m=(g=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:g.arbeidstakerAndelerUtenIM)==null?void 0:m.filter(X=>{const ee=R(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues`);return ee==null?void 0:ee[or(X)]}),G=(f=(v=e.faktaOmBeregning)==null?void 0:v.andelerForFaktaOmBeregning.filter(X=>X.aktivitetStatus===oe.ARBEIDSTAKER))==null?void 0:f.filter(X=>br(N,e)(ci(X,a,s))),w=(b=ni(t)&&F?J==null?void 0:J.filter(X=>!(G!=null&&G.find(ee=>{var me,Te;return((me=ee.arbeidsforhold)==null?void 0:me.arbeidsgiverIdent)===((Te=X.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent)}))):J)==null?void 0:b.filter(X=>br(N,e)(ci({...X,lagtTilAvSaksbehandler:!1},a,s))),U=R(`vurderFaktaBeregningForm.${h}.${We}`),re=`vurderFaktaBeregningForm.${h}.frilansInntektValues.fastsattBelop`,W=`vurderFaktaBeregningForm.${h}.dagpengerInntektValues.fastsattBelop`,se=`vurderFaktaBeregningForm.${h}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,Re=`vurderFaktaBeregningForm.${h}.militærEllerSivilInntektValues.fastsattBelop`,Fe=(j=(y=e==null?void 0:e.faktaOmBeregning)==null?void 0:y.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:j.some(X=>!!X.inntektPrMnd),ze=X=>{var ee,me,Te,sn;const je=(ee=X.arbeidsforhold)!=null&&ee.arbeidsgiverIdent?(me=a[X.arbeidsforhold.arbeidsgiverIdent])==null?void 0:me.navn:void 0;return R(`vurderFaktaBeregningForm.${h}.${yr}`)&&D.filter(_e=>_e===!0).length===1?k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(Te=X.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent})`}}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(sn=X.arbeidsforhold)==null?void 0:sn.arbeidsgiverIdent})`}})},Je=()=>{const X=E.filter(Te=>Te===!0).length>1,ee=R([`vurderFaktaBeregningForm.${h}.${An}`]).includes(!0),me=R([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0);return ni(t)||X||me?k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):R(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Qn()}`)?k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):ee?k.jsxs(k.Fragment,{children:[k.jsx(u,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:k.jsx("br",{})}})})]})})]}):null};return k.jsxs(V,{gap:"8",children:[ni(t)&&k.jsxs(k.Fragment,{children:[k.jsxs(V,{gap:"1",children:[k.jsx(B,{children:k.jsx(u,{id:Fe?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:Fe?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:k.jsx("br",{})}})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})})]}),w==null?void 0:w.map(X=>{var ee;return k.jsx(Lr,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:a},(ee=X.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)})]}),P()&&k.jsx(mn,{name:re,readOnly:n,isAksjonspunktClosed:r,label:Je()}),F||z?G==null?void 0:G.filter(X=>{var ee;return z&&!F?((ee=X.arbeidsforhold)==null?void 0:ee.arbeidsforholdType)===ir.ETTERLONN_SLUTTPAKKE:!0}).map(X=>{var ee;return k.jsx(Lr,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,label:ze(X),arbeidsgiverOpplysningerPerId:a},(ee=X.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)}):_==null?void 0:_.map(X=>{var ee;return k.jsx(Lr,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,label:ze(X),arbeidsgiverOpplysningerPerId:a},(ee=X.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)}),U&&k.jsx(mn,{name:W,readOnly:n,isAksjonspunktClosed:r,label:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})}),q()&&k.jsx(mn,{name:se,readOnly:n,isAksjonspunktClosed:r,label:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})}),S()&&k.jsx(mn,{name:Re,readOnly:n,isAksjonspunktClosed:r,label:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})},Sh=e=>!e.includes(O.FASTSETT_BG_KUN_YTELSE),xh=(e,n,r,t)=>k.jsx(mt,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),pt=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:a,kodeverkSamling:s,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:g,arbeidsgiverOpplysningerPerId:m,vilkarsperiodeSkalVurderesIBehandlingen:v})=>{const{getValues:f}=Ie(),b=C.useContext(Pe),y=f(`vurderFaktaBeregningForm.${b}`),j=I.useMemo(()=>Ck(y),[y,t,a]),R=I.useMemo(()=>Sh(r),[r]),h=()=>{const N=[],E=[];let P=!1;const{faktaOmBeregning:q}=t;return!q||(r.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(P=!0,E.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),N.push(k.jsx(C.Fragment,{children:k.jsx(gt,{readOnly:e,faktaOmBeregning:q,arbeidsgiverOpplysningerPerId:m})},O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(P=!0,E.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),N.push(k.jsx(C.Fragment,{children:k.jsx(ot,{readOnly:e})},O.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(P=!0,E.push(O.VURDER_MILITÆR_SIVILTJENESTE),N.push(k.jsx(C.Fragment,{children:k.jsx(ut,{readOnly:e})},O.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(P=!0,E.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),N.push(k.jsx(C.Fragment,{children:k.jsx(vt,{readOnly:e,arbeidsgiverOpplysningerPerId:m,faktaOmBeregning:q})},O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(O.VURDER_LONNSENDRING)&&(P=!0,E.push(O.VURDER_LONNSENDRING),N.push(k.jsx(C.Fragment,{children:k.jsx(rt,{readOnly:e})},O.VURDER_LONNSENDRING))),r.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(P=!0,E.push(O.VURDER_ETTERLONN_SLUTTPAKKE),N.push(k.jsx(C.Fragment,{children:k.jsx(it,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},O.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(O.VURDER_NYOPPSTARTET_FL)&&(P=!0,E.push(O.VURDER_NYOPPSTARTET_FL),N.push(k.jsx(C.Fragment,{children:k.jsx(tt,{readOnly:e})},O.VURDER_NYOPPSTARTET_FL))),r.includes(O.VURDER_BESTEBEREGNING)&&!r.includes(O.FASTSETT_BG_KUN_YTELSE)&&(P=!0,E.push(O.VURDER_BESTEBEREGNING),N.push(k.jsx(C.Fragment,{children:k.jsx(nt,{readOnly:e,erOverstyrt:j})},O.VURDER_BESTEBEREGNING))),(r.includes(O.VURDER_MOTTAR_YTELSE)||r.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(P=!0,E.push(O.VURDER_MOTTAR_YTELSE),N.push(k.jsx(C.Fragment,{children:k.jsx(kt,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:m})},O.VURDER_MOTTAR_YTELSE))),!v)?null:P?e?k.jsxs(k.Fragment,{children:[N.map((S,D)=>k.jsx(V,{gap:"8",children:S},E[D])),k.jsx(vg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:s}),g()]}):k.jsx(Cj,{children:k.jsxs(V,{gap:"4",children:[N.map((S,D)=>k.jsx(V,{gap:"8",children:S},E[D])),!Tn(y)&&k.jsx(vg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:s}),g()]})}):Tn(y)?g():null};return k.jsxs(V,{gap:"8",children:[k.jsx(kl,{tabell:xh(e,t,s,j),skalViseTabell:R,readOnly:e,erOverstyrer:l,avklaringsbehov:a,updateOverstyring:o,erOverstyrt:j},"inntektstabell"),h()]})};pt.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const a=e.andelerForFaktaOmBeregning;return a.length===0?{}:{[Lk]:mt.buildInitialValues(a,r,t),...kl.buildInitialValues(n)}};const $n=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},Bh=e=>{if(!e)throw new Error("Forventer andelsnr");return e},Fh=(e,n,r,t)=>{if(Tn(e)){const a=r.filter(s=>!t.includes(Bh(s.andelsnr))).filter(s=>s.fastsattBelop!=null).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,aktivitetStatus:s.aktivitetStatus,lagtTilAvSaksbehandler:s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:s.inntektskategori}}));return{fakta:n,overstyrteAndeler:a}}return{fakta:n}},_h=(e,n,r,t,a)=>{const s=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(s.length>0){l=$n(l,_b(t)(e,n));const o=e[We]===!0;l=$n(l,tt.transformValues(e,o?null:n,t,r)),l=$n(l,it.transformValues(e,o?null:n,t,r)),l=$n(l,rt.transformValues(e,t)),l=$n(l,kt.transformValues(e,o?null:n,t,a,r)),l=$n(l,qh(o?null:n,t,r)),l=$n(l,Ph(e,o?null:n,t,a,r))}return l};pt.transformValues=(e,n)=>r=>{const t=mt.transformValues(r[Lk],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),a=[],s=_h(r,t,a,e,n);return Fh(r,s,t,a)};const{VURDER_FAKTA_FOR_ATFL_SN:Oh}=he,pg=e=>{var n;return((n=Ln(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},fg=e=>{var n;return((n=Ln(e))==null?void 0:n.kunYtelse)||void 0},yg=e=>{var n;return((n=Ln(e))==null?void 0:n.vurderMottarYtelse)||void 0},Dh=e=>{var n;return((n=Ln(e))==null?void 0:n.vurderBesteberegning)||void 0},wh=e=>{var n;return((n=Ln(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},Vh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>{const{avklaringsbehov:m}=r,v=hl(r),f=Ln(r),b=[];return Sj(b,v,e,n,f,t,o),b.push(k.jsx(C.Fragment,{children:k.jsx(pt,{readOnly:e,isAksjonspunktClosed:n,tilfeller:v,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,avklaringsbehov:m,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:s,vilkarsperiodeSkalVurderesIBehandlingen:g})},"VurderOgFastsettATFL")),b},Mh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>k.jsx("div",{children:Vh({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g}).map(m=>m)}),Gh=(e,n)=>r=>xj(r,e.kunYtelse,n),Lh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...ot.transformValues(n)}},Kh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...gt.transformValues(r,e)}},$h=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_MILITÆR_SIVILTJENESTE),{...e,...ut.transformValues(n)}},Uh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...vt.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},Hh=(e,n,r,t,a)=>(s,l)=>{let o={...s};return e.forEach(g=>{g===O.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),g===O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),g===O.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),g===O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=a(o,l))}),o},Yh=(e,n,r)=>t=>e.includes(O.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},Ch=(e,n,r,t,a)=>{const s=Yh(e,Gh(t,e),pt.transformValues(t,a))(n);return{fakta:Hh(e,Lh,Kh(r),$h,Uh(t))(s.fakta,n),overstyrteAndeler:s.overstyrteAndeler}},zh=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:a}=e;return Ch(n,e,r,t,a)},Jh=e=>e?e.find(n=>n.definisjon===Oh):void 0,Wh=(e,n,r)=>{const t=hl(e),a=Ln(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:a,kortvarigeArbeidsforhold:pg(e),vurderMottarYtelse:yg(e),kunYtelse:fg(e),tidsbegrensetValues:gt.buildInitialValues(pg(e)),vurderMottarYtelseValues:kt.buildInitialValues(yg(e),t),arbeidstakerInntektValues:Lr.buildInitialValues(a.andelerForFaktaOmBeregning),frilansInntektValues:mn.buildInitialValues(a.andelerForFaktaOmBeregning,oe.FRILANSER),dagpengerInntektValues:mn.buildInitialValues(a.andelerForFaktaOmBeregning,oe.DAGPENGER),selvstendigNæringsdrivendeInntektValues:mn.buildInitialValues(a.andelerForFaktaOmBeregning,oe.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:mn.buildInitialValues(a.andelerForFaktaOmBeregning,oe.MILITAER_ELLER_SIVIL),vurderRefusjonValues:vt.buildInitialValues(t,wh(e)),...ut.buildInitialValues(a),...ot.buildInitialValues(e),...rt.buildInitialValues(e),...tt.buildInitialValues(e),...it.buildInitialValues(e,Jh(e.avklaringsbehov)),...nt.buildInitialValues(e.avklaringsbehov,Dh(e),t,sg(e)),...pt.buildInitialValues(a,sg(e),r,n),...Bj(fg(e),t,a.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:Ti,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Ri}=he,Zt=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Zh=(e,n)=>e||Zt(Ti,n),bg=(e,n)=>{const r=e[fr];if(n&&!r&&Zt(Ri,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!Zh(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...zh(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},Xh=(e,n=!0)=>{const r=e[vn],t=r.filter(l=>l.erTilVurdering).filter(l=>l[fr]||Zt(Ri,l.avklaringsbehov||[])).map(l=>bg(l,!0)).filter(l=>l),a=r.filter(l=>l.erTilVurdering).filter(l=>(!l[fr]||n)&&Zt(Ti,l.avklaringsbehov||[])).map(l=>bg(l,!1)).filter(l=>l),s=[];if(t.length>0){const l=t.filter(({begrunnelse:g})=>g!==null).map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Ri,begrunnelse:l!==""?l:null,grunnlag:t};s.push(o)}if(a.length>0){const l=a.map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Ti,begrunnelse:l,grunnlag:a};s.push(o)}return s},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:em,VURDER_FAKTA_FOR_ATFL_SN:Ei}=he,nm="begrunnelseFaktaTilfeller",Qh=(e,n,r)=>e&&n&&!r,eA=(e,n)=>Cn(Ei,n)||Cn(em,n)?!e:!0,cg=(e,n)=>{const r=n(`${vn}.${e}`);return Ck(r)},jg=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},nA=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,submittable:s,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:g,submitDisabled:m})=>{const{getValues:v,formState:{errors:f,isDirty:b}}=Ie(),y=C.useContext(vk),j=C.useContext(Pe),R=j===y,{avklaringsbehov:h}=e,N=h.find(q=>q.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||q.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),E=o.vurderesIBehandlingen,P=()=>k.jsx(k.Fragment,{children:(Cn(Ei,h)||Cn(em,h)||cg(j,v))&&k.jsxs(V,{gap:"6",children:[(Cn(Ei,h)||cg(j,v))&&k.jsxs(k.Fragment,{children:[k.jsx(Rr,{name:`${vn}.${j}.${nm}`,isSubmittable:s,isReadOnly:r||!E,hasBegrunnelse:!!(N!=null&&N.begrunnelse)}),k.jsx(xn,{ident:N==null?void 0:N.vurdertAv,date:N==null?void 0:N.vurdertTidspunkt})]}),k.jsx(K,{children:k.jsx(Fu,{isSubmittable:Qh(s&&eA(g,h),!0,jg(j,f))&&!g,isReadOnly:r||!E,isDirty:b,isSubmitting:m,hasErrors:jg(j,f)})})]})});return k.jsx("div",{style:{display:R?"block":"none"},children:k.jsx(Mh,{readOnly:r||!E,isAksjonspunktClosed:Jk(h),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:a,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>P(),vilkarsperiodeSkalVurderesIBehandlingen:E})},j)},{VURDER_FAKTA_FOR_ATFL_SN:rm,AVKLAR_AKTIVITETER:rA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Xt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:tA}=he,aA=e=>e.some(n=>n.definisjon===Xt)?e.find(n=>n.definisjon===Xt&&n.begrunnelse!==null):e.find(n=>n.definisjon===rm&&n.begrunnelse!==null),hg=(e,n)=>n.some(r=>r.definisjon===e&&ma(r.status)),sA=(e,n,r,t)=>({[vn]:e.map(a=>{var s;const l=t.perioder.find(o=>o.periode.fom===a.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${a.vilkårsperiodeFom}`);return{avklaringsbehov:a.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...Rr.buildInitialValues((s=aA(a.avklaringsbehov))==null?void 0:s.begrunnelse,nm),...Wh(a,n,r)}})}),iA=[rm,Xt],lA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},dA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:g,formData:m,vilkar:v,avklarAktiviteterErEndret:f,skalKunneAvbryteOverstyring:b})=>{const y=f,j=e.flatMap(re=>re.avklaringsbehov),R=Ye({defaultValues:m||sA(e,t,s,v)}),{control:h,formState:N,trigger:E,getValues:P,watch:q}=R,{fields:S,update:D}=en({name:vn,control:h}),{errors:F,isSubmitted:z}=N,[J,_]=I.useState(!1),G=q(vn);I.useEffect(()=>{z&&E()},[JSON.stringify(G)]);const w=(re,W)=>{const se=P(`${vn}.${re}`);D(re,{...se,[fr]:W})},U=re=>{Object.keys(F).length===0?(_(!0),o(Xh(re,b))):console.error(F)};return hg(rA,j)||hg(tA,j)?null:k.jsx(vk.Provider,{value:l,children:k.jsx(Ce,{formMethods:R,onSubmit:re=>{U(re)},setDataOnUnmount:g,children:S.map((re,W)=>{const se=X=>iA.some(ee=>ee===X.definisjon),Re=X=>X.kanLoses,Fe=j.filter(X=>se(X)&&Re(X)),ze=r||lA(e[W],v.perioder)||Ze(Xt,j)&&!a||Fe.length===0&&!a,Je=v.perioder.find(X=>X.periode.fom===e[W].vilkårsperiodeFom);if(!Je)throw new Error(`Filler ikke vilkårsperiode med fom ${e[W].vilkårsperiodeFom}`);return k.jsx(Pe.Provider,{value:W,children:k.jsx(nA,{vilkarsperiode:Je,beregningsgrunnlag:e[W],erOverstyrer:a,readOnly:ze,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:n,updateOverstyring:w,submitDisabled:J,verdiForAvklarAktivitetErEndret:y},re.id)},re.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:oA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:tm,AVKLAR_AKTIVITETER:gA}=he,uA=[tm,gA],kA=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:g,arbeidsgiverOpplysningerPerId:m,setFormData:v,formData:f,vilkar:b,skalKunneAvbryteOverstyring:y})=>{const j=n.filter(E=>uA.some(P=>P===E.definisjon)&&E.kanLoses),R=e||(j.length===0||Ze(tm,n))&&!l,[h,N]=I.useState(!1);return k.jsxs(V,{gap:Ze(oA,n)?"0":"2",children:[k.jsx("div",{children:k.jsx(Sb,{readOnly:R,submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:g,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:m,setFormData:v,formData:f&&Jr in f?f:void 0,vilkår:b,setAvklarAktiviteterErEndret:N})}),k.jsx(dA,{submitCallback:t,submittable:r,kodeverkSamling:g,beregningsgrunnlag:s,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:m,aktivtBeregningsgrunnlagIndeks:a,setFormData:v,formData:f&&vn in f?f:void 0,vilkar:b,avklarAktiviteterErEndret:h,skalKunneAvbryteOverstyring:y})]})},mA="_tabsContainer_1yyvp_1",vA="_main_1yyvp_9",Ag={tabsContainer:mA,main:vA},pA=Ke(ik),{VURDER_FAKTA_FOR_ATFL_SN:am,AVKLAR_AKTIVITETER:fA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:yA}=he,bA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},cA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:a})=>a.fom===r);if(t){const{fom:a,tom:s}=t.periode;return s!==null?`${A(a).format(te)} - ${A(s).format(te)}`:`${A(a).format(te)} - `}return`${A(r).format(te)}`},jA=e=>{if(e){const n=e.some(t=>t.definisjon===am&&t.kanLoses),r=e.some(t=>t.definisjon===fA&&t.kanLoses);return n||r}return!1},ri=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return jA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},ln=e=>k.jsx(ue,{size:"xsmall",level:"3",children:e},"h3"),hA=(e,n)=>{var r,t,a,s,l,o;const g=hl(e),m=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),v=[],f=[];if(g.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const b=(s=(a=e==null?void 0:e.faktaOmBeregning)==null?void 0:a.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:s.some(y=>!!y.inntektPrMnd);f.push(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:b?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:ln}})}))}if(g.includes(O.VURDER_LONNSENDRING)&&(f.push(O.VURDER_LONNSENDRING),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:ln}})}))),m&&g.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_frilans`),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:ln}})}))),!m&&g.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_arbeidstaker`),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:ln}})}))),g.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(f.push(O.VURDER_ETTERLONN_SLUTTPAKKE),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:ln}})}))),g.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){f.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const b=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let y="";b.forEach((j,R)=>{var h;const N=(h=j.arbeidsforhold)==null?void 0:h.arbeidsgiverIdent;if(!N)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const E=n[N],P=E?Vn(E):N;R===0?y=P:y=`${y}, ${P}`}),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:y,h3:ln}})}))}if(g.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(f.push(O.VURDER_MILITÆR_SIVILTJENESTE),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:ln}})}))),g.includes(O.FASTSETT_BG_KUN_YTELSE)&&(f.push(O.FASTSETT_BG_KUN_YTELSE),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsxs(V,{gap:"1",children:[k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:ln}}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),k.jsx(Se,{size:"small",header:k.jsx(u,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:k.jsxs(ne,{size:"small",children:[k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),k.jsx(ne.Item,{children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]})}))),g.includes(O.VURDER_NYOPPSTARTET_FL)&&(f.push(O.VURDER_NYOPPSTARTET_FL),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:ln}})}))),g.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(f.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:ln}})}))),g.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const b=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let y="";b.forEach((j,R)=>{const{arbeidsgiverIdent:h}=j,N=n[h],E=N?Vn(N):h;R===0?y=E:y=`${y}, ${E}`}),f.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),v.push(k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:y,h3:ln}})}))}return v.length>0?k.jsx(V,{gap:"4",children:v.map((b,y)=>k.jsx(C.Fragment,{children:b},f[y]))}):k.jsx(Ee,{size:"small",variant:"warning",children:k.jsx(u,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},AA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkar:v,skalKunneAvbryteOverstyring:f=!1})=>{const[b,y]=I.useState(0),j=v==null?void 0:v.perioder;if(I.useEffect(()=>{if(j){const E=e==null?void 0:e.findIndex(P=>ri(P,j));E>-1&&y(E)}},[]),e.length===0||!v)return k.jsx(k.Fragment,{children:"Har ikke beregningsgrunnlag."});const R=e.length>1,h=e[b],N=h.avklaringsbehov;return k.jsx(Ge,{value:pA,children:k.jsx("div",{className:Ag.main,children:k.jsxs(V,{gap:"4",children:[k.jsx(ue,{size:"small",level:"2",children:k.jsx(u,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Cn(am,N)||Cn(yA,N))&&!Jk(N)&&k.jsx(k.Fragment,{children:hA(h,o)}),R&&k.jsx("div",{className:Ag.tabsContainer,children:k.jsx(kr,{value:b.toString(),onChange:E=>y(Number(E)),children:k.jsx(kr.List,{children:e.map((E,P)=>k.jsx(kr.Tab,{value:P.toString(),label:cA(E,j),className:ri(E,j)?"harAksjonspunkt":"",icon:ri(E,j)&&k.jsx(Ir,{width:20,height:20,color:"Orange"})},E.skjaeringstidspunktBeregning))})})}),k.jsx(kA,{aktivtBeregningsgrunnlagIndeks:b,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:N,submitCallback:r,readOnly:t||bA(e[b],j),submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:m,formData:g,vilkar:v,skalKunneAvbryteOverstyring:f})]})})})},IA=[le.VURDER_FAKTA_FOR_ATFL_SN,le.AVKLAR_AKTIVITETER,le.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,le.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],TA=[le.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,le.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],RA=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r,rettigheter:t}=I.use(Sn),a=ar(IA,TA),s=qn(r),{data:l,isFetching:o}=Pn(s.beregningsgrunnlagOptions(r));return i.jsx(sr,{standardPanelProps:a,faktaPanelKode:tr.BEREGNING,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:Mu(r,"BEREGNINGSGRUNNLAG"),children:o?i.jsx(Nn,{}):i.jsx(EA,{kodeverkSamling:a.alleKodeverk,vilkar:SA(r==null?void 0:r.vilkår,l),beregningsgrunnlag:xA(l),submitCallback:PA(a.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:t.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:a.readOnly,submittable:a.submittable})})},EA=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=Mn();return i.jsx(AA,{...e,formData:n,setFormData:r})},NA=e=>{switch(e){case he.AVKLAR_AKTIVITETER:return le.AVKLAR_AKTIVITETER;case he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return le.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case he.VURDER_FAKTA_FOR_ATFL_SN:return le.VURDER_FAKTA_FOR_ATFL_SN;case he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return le.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},PA=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:NA(a.kode),...a.grunnlag[0]}));return e(t)},qA=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),SA=(e,n)=>{if(!e)return null;const r=e.find(a=>a.vilkarType&&a.vilkarType===Xn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[qA(n,r)]}},xA=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];RA.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Le=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))(Le||{});function sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ig={exports:{}},_r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function BA(){if(Tg)return _r;Tg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return _r.Fragment=n,_r.jsx=r,_r.jsxs=r,_r}var Rg;function FA(){return Rg||(Rg=1,Ig.exports=BA()),Ig.exports}var p=FA();function ft(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function gr(e,n){return ft(e,n).vurderesIBehandlingen}var cr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(cr||{}),Ni=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ni||{}),ve=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ve||{});const El=e=>e==="OPPR";var Wr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(Wr||{}),yt=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(yt||{});const _A=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],OA=e=>_A.some(n=>n===e),DA="_begrunnelseTextField_1wq9u_1",wA="_explanationTextarea_1wq9u_4",VA="_explanationTextareaReadOnly_1wq9u_7",ti={begrunnelseTextField:DA,explanationTextarea:wA,explanationTextareaReadOnly:VA},Nl={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":'Utgangspunktet er at alle nye inntektskilder som kommer etter skjæringstidspunktet skal kunne medføre gradering mot inntekt. Du skal derfor vanligvis velge "ja", som betyr at K9 vurderer om pleiepengene skal graderes mot denne inntekten. Hvis du velger "nei", vil ikke K9 bruke denne aktiviteten for å vurdere søkers inntektstap.',"FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},Eg=Ke(Nl),MA=yn(3),GA=bn(1500),bt=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||Eg.formatMessage({id:l});return p.jsx(Ge,{value:Eg,children:(n||r)&&p.jsx("div",{className:ti.begrunnelseTextField,children:p.jsx(Qe,{name:s,label:e?"":o,validate:e?[]:[Q,MA,GA,cn],className:e?ti.explanationTextareaReadOnly:ti.explanationTextarea,maxLength:1500,readOnly:e})})})},LA=e=>e&&e.begrunnelse?e.begrunnelse:"";bt.buildInitialValues=(e,n="begrunnelse")=>({[n]:Hi(LA(e))});bt.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const KA=Ke(Nl),$A=(e,n,r)=>!r||n?!0:!e,ha=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:a})=>e?null:p.jsx(ae,{size:"small",loading:t,disabled:$A(a,t,n),onClick:r||_u,type:r?"button":"submit",children:KA.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Ng(e,n){return n.tom!=null&&!A(n.tom).isBefore(A(e.fom))&&(e.tom==null||!A(n.tom).isAfter(A(e.tom)))}function UA(e,n){return Ng(e,n)||Ng(n,e)}function Rn(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===yt.UDEFINERT)?!0:!n||n.length===0||n.some(t=>UA(t,e))}var Pg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var qg;function HA(){return qg||(qg=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Pg)),Pg.exports}var YA=HA();const im=sm(YA),CA="_vurdertIForrigeIcon_1q86k_1",zA={vurdertIForrigeIcon:CA},JA=im.bind(zA),lm=({className:e=""})=>{const n=Z();return p.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:JA("vurdertIForrigeIcon",e),children:p.jsx(ka,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},Kr=e=>e?`...${e.substring(e.length-4,e.length)}`:"",ct=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${A(t).format(te)})${Kr(n)}`:r:s?`${r} (${s})${Kr(n)}`:r},Pi=(e,n)=>{var r,t;const a=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!a||!n[a])return"";const s=n[a];return s.erPrivatPerson?s.fødselsdato?`${s.navn} (${A(s.fødselsdato).format(te)})${Kr(e.eksternArbeidsforholdRef)}`:`${s.navn}${Kr(e.eksternArbeidsforholdRef)}`:`${s.navn} (${a})${Kr(e.eksternArbeidsforholdRef)}`},dm=" - ",om=e=>e==null,WA=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${dm}${r}`},ZA=e=>e.inntektskategori&&e.inntektskategori!==yt.UDEFINERT?e.inntektskategori:"",XA=(e,n,r,t)=>{var a,s;if(!e.aktivitetStatus||e.aktivitetStatus===ve.UDEFINERT)return"";if(e.aktivitetStatus===ve.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?ct(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((a=r[cr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var g;return o.kode===((g=e.arbeidsforhold)==null?void 0:g.arbeidsforholdType)}))==null?void 0:a.kode)||""}return n&&e.aktivitetStatus===ve.BRUKERS_ANDEL?"Ytelse":((s=r[cr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:s.navn)||""},QA=e=>om(e)?void 0:e,Sg=e=>M(e)||"",eI=(e,n,r)=>e!==void 0?Sg(e):r&&!om(n)?Sg(n):"",nI=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),rI=(e,n,r,t)=>({andel:XA(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:ZA(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===yt.UDEFINERT?void 0:e.inntektskategori}),gm=(e,n,r,t,a)=>{if(n.skalRedigereInntekt){const s=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.fastsattBelop`);return s?pe(s):0}return n.readOnlyBelop?pe(n.readOnlyBelop):0},tI=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),aI=(e,n)=>{var r;const t=e.find(a=>{var s,l;return!!a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===((s=n.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&a.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},sI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!tI(t.arbeidsforhold,r)){const a=aI(n,t),s={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:a.beregningsperiodeTom,beregningsperiodeFom:a.beregningsperiodeFom,...t.arbeidsforhold};r.push(s)}}),r},iI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],lI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],dI=(e,n)=>sI(iI(e),lI(n)),oI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],a=e.beregningsgrunnlagPeriode;return dI(t,a)},gI=e=>e?Number(pe(e)):0,uI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),kI=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,mI=(e,n)=>e.some(r=>kI(n,r)),vI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},pI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{if(s.nyAndel&&(s.andelsnrRef||s.andelsnrRef===0)){const o=vI(t,s.andelsnrRef);a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:s.inntektskategori,arbeidsgiverIdent:s.arbeidsgiverId,arbeidsforholdId:s.arbeidsforholdId})}),a},fI=(e,n,r,t,a)=>{const s=pI(e,n,r,t),l=[];let o=!1;return s.forEach(g=>{mI(l,g)&&(o=!0),l.push(g)}),o?uI(a):void 0},yI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,bI=(e,n,r,t,a,s)=>{const l=s.findIndex(({arbeidsforholdId:g,arbeidsgiverId:m})=>g===t.arbeidsforholdId&&m===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.refusjonskrav`);if(l>=0){const g=s[l];yI(t,g)&&(g.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(g.totalRefusjon+=Number(pe(o)))}else{const{refusjonskravFraInntektsmelding:g,arbeidsforholdId:m,arbeidsgiverId:v,eksternArbeidsforholdId:f}=t;let b=0;o!=null&&(b=Number(pe(o))),s.push({arbeidsforholdId:m,eksternArbeidsforholdId:f,arbeidsgiverId:v,refusjonskravFraInntektsmelding:g,totalRefusjon:b})}},cI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{s.arbeidsforholdId!==""&&bI(e,n,r,s,l,a)}),a},jI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),hI=(e,n,r,t,a,s)=>{const l=cI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?a[l[0].arbeidsgiverId]:void 0;let g;return o?g=ct(o,l[0].eksternArbeidsforholdId):g=l[0].arbeidsgiverId||"",jI(g,s)}},AI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,II=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),TI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,RI=(e,n,r)=>e>=Math.round(n)?TI(M(n),r):void 0,um=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),km=(e,n,r,t,a)=>e>=Math.round(n)?t(M(n),r,a):void 0,EI=(e,n,r)=>e!==Math.round(n)?AI(M(Math.round(n)),r):void 0,NI=(e,n,r,t,a,s,l)=>{if(!r.andelIArbeid)return!1;const o=a(`FORDEL_BEREGNING_FORM.${e}.${s}.${l}.fastsattBelop`),g=o?pe(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&g<=0?!0:r.andelIArbeid.split(dm).filter(m=>Number(m)>0).length>0&&g===0},PI=(e,n,r,t,a,s)=>t.some((l,o)=>NI(e,s,l,a,n,r,o))?II(s):void 0,qI=(e,n,r,t,a,s)=>{const l=t.map((o,g)=>gm(e,o,r,n,g)).reduce((o,g)=>o+g,0);return a!=null?EI(l,a,s):void 0},xg=(e,n,r,t,a)=>{const s=a(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return gI(s)},SI=(e,n,r,t,a,s)=>{const l=!!n.find((m,v)=>m.andelIArbeid!=="0.00"&&xg(e,m,r,v,t)===0),o=n.map((m,v)=>xg(e,m,r,v,t)).reduce((m,v)=>m+v,0),g=6*a;return l?RI(o,g,s):void 0},mm=(e,n)=>{const r=e.map(t=>{var a;return((a=n[cr.AKTIVITET_STATUS].find(s=>s.kode===t))==null?void 0:a.navn)||""});return r.sort((t,a)=>t.localeCompare(a)),[...new Set(r)].join(", ")},vm=(e,n,r,t,a)=>t.map((s,l)=>s.aktivitetStatus&&!a.includes(s.aktivitetStatus)?0:gm(e,s,r,n,l)).reduce((s,l)=>s+l,0),xI=(e,n,r,t,a,s,l)=>{const o=[ve.ARBEIDSTAKER],g=vm(e,n,r,t,o),m=mm(o,s);return km(g,a,m,um,l)},BI=(e,n,r,t,a,s,l)=>{const o=[ve.ARBEIDSTAKER,ve.FRILANSER,ve.DAGPENGER,ve.ARBEIDSAVKLARINGSPENGER],g=t.map(f=>f.aktivitetStatus).filter(f=>!!f&&o.includes(f)),m=vm(e,n,r,t,g),v=mm(g,s);return km(m,a,v,um,l)},FI=(e,n,r,t,a,s,l)=>{const o=!!t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===ve.FRILANSER),g=6*s;if(o)return xI(e,n,r,t,g,l,a);if(t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE))return BI(e,n,r,t,g,l,a)},_I="_rightAlignInput_1tnrv_19",OI="_slettIkon_1tnrv_29",DI="_inntektTable_1tnrv_88",wI="_shortLeftAligned_1tnrv_137",VI="_wordwrap_1tnrv_142",MI="_litenBredde_1tnrv_145",GI="_storBredde_1tnrv_148",LI="_benyttCheckbox_1tnrv_154",Me={rightAlignInput:_I,slettIkon:OI,inntektTable:DI,shortLeftAligned:wI,wordwrap:VI,litenBredde:MI,storBredde:GI,benyttCheckbox:LI},KI=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:M(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),pm=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[cr.OPPTJENING_AKTIVITET_TYPE].find(a=>a.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":ct(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},$I=(e,n,r)=>e.map(t=>p.jsx("option",{value:t.andelsnr.toString(),children:pm(t,n,r)},t.andelsnr)),UI=(e,n,r,t)=>{const a=e.map(s=>p.jsx("option",{value:s.andelsnr.toString(),children:pm(s,r,t)},s.andelsnr));return a.push(p.jsx("option",{value:Ni.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},Ni.BRUKERS_ANDEL)),a},HI=e=>e.map(n=>p.jsx("option",{value:n.kode,children:n.navn},n.kode)),fm=e=>e>0&&M(e)||"",YI=(e,n,r,t)=>{let a=0,s=0;for(s;s<r.length;s+=1){const l=r[s],o=pe(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${s}.fastsattBelop`));l.skalRedigereInntekt?a+=o||0:a+=l.readOnlyBelop?o:0}return fm(a)},CI=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(pe(t.beregningsgrunnlagPrAar)):0)}return fm(n)},zI=e=>e.inntektskategori?OA(e.inntektskategori)||yt.FRILANSER===e.inntektskategori:!1,JI=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},WI=(e,n)=>{var r;const t=Number(n);return(r=e.find(a=>a.andelsnr===t))==null?void 0:r.aktivitetStatus},ZI=(e,n,r,t,a)=>{const s=e[n],l=JI(r,t);l&&(s.arbeidsforholdId=l.arbeidsforholdId,s.arbeidsgiverId=l.arbeidsgiverIdent,s.arbeidsperiodeFom=l.startdato,s.arbeidsperiodeTom=l.opphoersdato,s.andelsnrRef=l.andelsnr,s.aktivitetStatus=WI(e,t),s.nyttArbeidsforhold=l.nyttArbeidsforhold,s.arbeidsforholdType=l.arbeidsforholdType,s.beregningsperiodeTom=l.beregningsperiodeTom,s.beregningsperiodeFom=l.beregningsperiodeFom,a(n,s))},XI=(e,n,r,t,a,s,l)=>p.jsxs(p.Fragment,{children:[!e[n].nyAndel&&p.jsx(ce,{name:`${l(n)}.andel`,className:Me.storBredde,readOnly:!0}),e[n].nyAndel&&p.jsx(da,{name:`${l(n)}.andel`,className:Me.storBredde,label:"",selectValues:r,readOnly:t,validate:[Q],onChange:o=>ZI(e,n,a,o.target.value,s)})]}),QI=(e,n,r,t)=>n?p.jsx(c.DataCell,{children:p.jsx($t,{children:p.jsx(ce,{name:`${t}.readOnlyBelop`,className:Me.litenBredde,parse:Oe,readOnly:!0,isEdited:!1})})}):p.jsx(c.DataCell,{className:Me.rightAlignInput,children:p.jsx($t,{children:p.jsx(ce,{name:`${t}.fastsattBelop`,parse:Oe,readOnly:e,validate:[Q,nn(178956970)],isEdited:r&&!n,className:Me.litenBredde})})}),eT=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,nT=(e,n,r,t,a,s,l)=>p.jsxs(c.DataCell,{children:[XI(e,n,r,t,a,s,l),!zI(e[n])&&p.jsx("div",{className:Me.wordwrap,children:p.jsx(ce,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),rT=(e,n)=>e?p.jsx(c.DataCell,{children:p.jsx(ce,{name:`${n}.andelIArbeid`,readOnly:!0,className:Me.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,tT=(e,n,r,t)=>p.jsx(c.DataCell,{className:e||!n[r].skalKunneEndreRefusjon?void 0:Me.rightAlignInput,children:p.jsx($t,{children:p.jsx(ce,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:Oe,className:Me.litenBredde,validate:n[r].skalKunneEndreRefusjon?[Q,nn(178956970)]:[]})})}),aT=e=>p.jsx(c.DataCell,{children:p.jsx(ce,{name:`${e}.beregningsgrunnlagPrAar`,className:Me.litenBredde,readOnly:!0,parse:Oe})}),sT=(e,n,r)=>p.jsx(c.DataCell,{className:e?Me.shortLeftAligned:void 0,children:p.jsx($t,{children:p.jsx(da,{label:"",name:`${n}.inntektskategori`,className:Me.storBredde,validate:e?[]:[Q],selectValues:HI(r),readOnly:e})})}),iT=(e,n,r,t)=>p.jsx(c.DataCell,{children:eT(n,e,r)&&p.jsx(ae,{icon:p.jsx(Jn,{"aria-hidden":!0,className:Me.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),lT=(e,n,r)=>p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{children:p.jsx(B,{size:"small",children:n})}),p.jsx(c.DataCell,{children:p.jsx(B,{size:"small",children:e})}),p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{})]},"bruttoBGSummaryRow"),dT=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var a;return(a=t.perioderMedGraderingEllerRefusjon)==null?void 0:a.some(s=>s.erGradering)})},oT=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:g,periodeFom:m,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})=>{const{control:y,watch:j,getValues:R}=Ie(),h=`FORDEL_BEREGNING_FORM.${v}.${e}`,{fields:N,append:E,remove:P,update:q}=en({control:y,name:`FORDEL_BEREGNING_FORM.${v}.${e}`});I.useEffect(()=>{b&&b!==h&&!n&&!r&&R(b).forEach(ee=>{var me;const Te=N.findIndex(sn=>sn.andel===ee.andel&&(sn.inntektskategori===ee.inntektskategori||!sn.inntektskategori&&!ee.lagtTilAvSaksbehandler&&!sn.lagtTilAvSaksbehandler));if(Te>-1){const sn={...N[Te],fastsattBelop:ee.fastsattBelop,refusjonskrav:o?ee.refusjonskrav:(me=N[Te])==null?void 0:me.refusjonskrav,inntektskategori:ee.inntektskategori};q(Te,sn)}})},[b]);const S=!!l.aktivitetStatus&&l.aktivitetStatus.some(ee=>ee===ve.KUN_YTELSE),D=oI(l),F=YI(v,e,N,j),z=CI(N),J=dT(l),_=s[cr.INNTEKTSKATEGORI],G=Z(),w=S?UI(D,G,s,a):$I(D,s,a),U=ee=>`FORDEL_BEREGNING_FORM.${v}.${e}.${ee}`,re=N.map((ee,me)=>{const Te=n||r;return p.jsxs(c.Row,{children:[nT(N,me,w,Te,D,q,U),rT(J,U(me)),tT(Te,N,me,U),aT(U(me)),QI(n,r,t,U(me)),sT(Te,U(me),_),iT(N,me,Te,P)]},ee.id)});re.push(lT(F,z,J));const W=[],se=ee=>{ee&&W.push(ee)};!n&&N.some(ee=>!!ee.skalRedigereInntekt||!!ee.skalKunneEndreRefusjon)&&(se(fI(v,R,e,N,G)),se(qI(v,R,e,N,g,G)),J&&(se(PI(v,R,e,N,m,G)),se(FI(v,R,e,N,G,l.grunnbeløp,s))),o&&(se(SI(v,N,e,R,l.grunnbeløp,G)),se(hI(v,N,e,R,a,G))));const Re=`FORDEL_BEREGNING_FORM.${v}.${e}.skjemagruppe`,Fe=W.filter(ee=>!!ee),ze=Fe.length>0?Fe[0]:void 0,Je=la(Re,ze),X=()=>{f(h===b?"":h)};return p.jsxs("div",{children:[p.jsxs(c,{className:Me.inntektTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.Andel"})}),J&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.AndelIArbeid"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.Refusjonskrav"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.Beregningsgrunnlag"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.Fordeling"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.Inntektskategori"})})]})}),p.jsx(c.Body,{children:re})]}),!n&&!r&&p.jsx(ae,{icon:p.jsx(zi,{"aria-hidden":!0}),onClick:()=>E(KI(r)),type:"button",variant:"secondary",children:p.jsx(ke,{children:p.jsx(u,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&p.jsx(qp,{className:Me.benyttCheckbox,checked:h===b,onChange:X,children:"Benytt for alle perioder"}),Je&&p.jsx(Zr,{children:Je})]})},gT="_statusOk_1qsx9_1",ym={statusOk:gT},uT=im.bind(ym),ai=e=>e?A(e,xe).format(te):"-",kT=(e,n)=>n?p.jsx(B,{size:"small",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:ai(e),tom:ai(n)}})}):p.jsx(B,{size:"small",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:ai(e)}})}),mT=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},vT=e=>{const n=mT(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},pT=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>vT(t)).reduce((t,a)=>t+a,0)},Pl=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:a,beregningsgrunnlag:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:g,fordelingsperiode:m,fieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})=>m.fom?p.jsx(qe,{className:e?ym.statusOk:uT(`fordelBeregningsgrunnlagPeriode--${m.fom}`),children:p.jsxs(qe.Item,{open:t,children:[p.jsxs(qe.Header,{onClick:()=>a(m.fom),children:[kT(m.fom,m.tom)," ",n?p.jsx(lm,{}):""]}),p.jsx(qe.Content,{children:p.jsx(oT,{fieldName:g,readOnly:e,sumIPeriode:pT(s.beregningsgrunnlagPeriode,m.fom),skalIkkeRedigereInntekt:!m.skalRedigereInntekt,skalKunneEndreRefusjon:!!m.skalKunneEndreRefusjon,periodeFom:m.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})})]})}):null,fT=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},yT=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!A(t).isBefore(A(n))},Bg=e=>{var n,r,t,a;if(!e)return;const s=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((a=e.arbeidsforhold)==null?void 0:a.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return M(e.besteberegningPrAar+s-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return M(e.overstyrtPrAar+s-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return M(e.beregnetPrAar+s-l)},bT=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?M(e.fordelingForrigeBehandlingPrAar):"")||"";Pl.buildInitialValues=(e,n,r,t,a,s)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=fT(l,n);return{...rI(l,t,a,s),...nI(l),andelIArbeid:WA(l.andelIArbeid||[]),fordelingForrigeBehandling:bT(l),fastsattBelop:eI(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:Bg(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?M(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||yT(o,r),beregningsgrunnlagPrAar:Bg(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:QA(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const bm="fordelBGPeriode",ql=e=>bm+e,cT=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?pe(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:pe(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),Qt=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),jT=e=>Qt(e,Wr.GRADERING)||Qt(e,Wr.GRADERING_OPPHOERER),hT=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},cm=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function Fg(e){const n=A(e.beregningsgrunnlagPeriodeFom).day()===6,r=A(e.beregningsgrunnlagPeriodeFom).day()===0,t=A(e.beregningsgrunnlagPeriodeTom).day()===6,a=A(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||a)}const AT=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function IT(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>AT(r))}function TT(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const RT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&cm(a,r));return!!(t===void 0||TT(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),ET=(e,n,r,t)=>{const a=e.fordelBeregningsgrunnlagAndeler||[],s=n.fordelBeregningsgrunnlagAndeler||[];if(a.length!==s.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const g=Fg(r),m=Fg(o),v=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(g||m)&&!v?!0:!RT(a,s)},NT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&cm(a,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),PT=(e,n,r,t,a)=>{var s,l;const o=t[t.length-1];return((s=r.fordelBeregningsgrunnlagAndeler)==null?void 0:s.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||jT(e)||NT(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||Rn(r,a)&&!Rn(o,a)?!1:Qt(e,Wr.ARBEIDSFORHOLD_AVSLUTTET)?hT(e,n):Qt(e,Wr.ENDRING_I_AKTIVITETER_SØKT_FOR)?ET(r,o,e,n):!0},qT=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},ST=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const a=e.find(s=>s.beregningsgrunnlagPeriodeFom===t.fom);if(a){if(PT(a,e,t,r,n))return qT(r,t),r;r.push({...t})}return r},xT=e=>({fom:n,tom:r})=>(A(n).isSame(A(e.fom))||A(n).isAfter(e.fom))&&(e.tom===null||A(r).isSame(A(e.tom))||A(r).isBefore(A(e.tom))),BT=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},FT=e=>({andelsnr:BT(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:cT(e)}),_T=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},OT=(e,n,r,t)=>t.filter(xT(r)).filter(a=>a.skalRedigereInntekt||a.skalKunneEndreRefusjon).map(a=>({andeler:e[ql(n)].map(FT),fom:_T(a.fom),tom:a.tom})),Sl=(e,n,r)=>e.filter(t=>IT(t)).reduce(ST(n,r),[]),DT="_lessPadding_xotc9_1",wT={lessPadding:DT},VT=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},MT=(e,n,r,t)=>{const a=[],s=Sl(e,r,t);for(let l=0;l<s.length;l+=1){const{skalRedigereInntekt:o}=s[l];o&&Rn(s[l])&&OT(n,l,s[l],e).forEach(g=>a.push(g))}return a};function GT(e,n){return Rn(n,e.forlengelseperioder)}function LT(e,n){var r;return!Rn(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const jt=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[g,m]=I.useState([]),[v,f]=I.useState("");I.useEffect(()=>{const y=n.filter(j=>GT(a,j)).filter(j=>j.skalKunneEndreRefusjon||j.skalRedigereInntekt).filter(j=>!!j.fom).map(j=>j.fom);m(y)},[n]);const b=y=>{if(g.includes(y)){const j=g.filter(R=>R!==y);m(j)}else{const j=g.map(R=>R);j.push(y),m(j)}};return p.jsx(lp,{className:wT.lessPadding,children:Sl(n,t,a.forlengelseperioder).map((y,j)=>p.jsxs(C.Fragment,{children:[p.jsx(H,{eightPx:!0}),p.jsx(Pl,{readOnly:e||!Rn(y,a.forlengelseperioder),erVurdertTidligere:LT(y,a),fordelingsperiode:y,fordelBGFieldArrayName:ql(j),open:g?g.filter(R=>R===y.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:b,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:f,fieldArrayToRepeat:v}),p.jsx(H,{eightPx:!0})]},bm+y.fom))})};jt.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:MT(n,e,r,t)});jt.buildInitialValues=(e,n,r,t)=>{const a={};if(!e)return a;const s=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===ve.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return Sl(e,l,n.forlengelseperioder).forEach((o,g)=>{const m=VT(o,l);a[ql(g)]=Pl.buildInitialValues(o,m,n.skjaeringstidspunktBeregning,s,r,t)}),a};const KT=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},ht=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=r.beregningsgrunnlagPeriode,o=KT(r);return p.jsx(jt,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})};ht.buildInitialValues=(e,n,r,t)=>jt.buildInitialValues(e,n,r,t);ht.transformValues=(e,n,r,t)=>jt.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:$T}=Le,UT=(e,n)=>n.some(r=>r.definisjon===e),HT=(e,n,r,t)=>{const a=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||a.push(p.jsx(u,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:sa,br:p.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),a},YT=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),CT=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:s})=>s!=null).filter(({perioderMedGraderingEllerRefusjon:s})=>YT(s||[])),a=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erSøktYtelse:l})=>l).includes(!0));return HT(n,r,t,a)},zT=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return UT($T,e.avklaringsbehov)?CT(t):[]},JT=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=zT(n);return e?p.jsx(p.Fragment,{}):p.jsx(rr,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:qi}=Le,WT=(e,n)=>n.some(r=>r.definisjon===e),jm=e=>{const n=e.find(r=>r.definisjon===qi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${qi}`);return n},ZT="begrunnelse",hm=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},XT=(e,n)=>{if(!WT(qi,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...ht.transformValues(e,hm(n),r,n.forlengelseperioder)}},QT=(e,n,r,t)=>{const a=hm(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...bt.buildInitialValues(jm(e.avklaringsbehov),ZT),...ht.buildInitialValues(a,e,t,r)}},eR=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=jm(r.avklaringsbehov),o=!El(l.status),g=Ie(),m=g.watch(`FORDEL_BEREGNING_FORM.${s}.begrunnelse`);return p.jsxs(p.Fragment,{children:[p.jsx(JT,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),p.jsx(H,{twentyPx:!0}),p.jsx(ht,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s}),p.jsx(H,{twentyPx:!0}),p.jsx(bt,{name:`FORDEL_BEREGNING_FORM.${s}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!m}),p.jsx(xn,{ident:l.vurdertAv,date:l.vurdertTidspunkt}),p.jsx(H,{twentyPx:!0}),p.jsx(ha,{isSubmittable:n,isReadOnly:e,isSubmitting:g.formState.isSubmitting,isDirty:g.formState.isDirty})]})},{FORDEL_BEREGNINGSGRUNNLAG:nR}=Le,ea="FORDEL_BEREGNING_FORM",rR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},tR=(e,n,r)=>{const t=e[ea].filter(a=>gr(r,a.periode.fom)).map(a=>XT(a,rR(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:nR}};function Am(e){return e.avklaringsbehov.some(n=>n.definisjon===Le.FORDEL_BEREGNINGSGRUNNLAG)}const aR=(e,n,r,t)=>({[ea]:e.filter(Am).map(a=>QT(a,ft(n,a.vilkårsperiodeFom),r,t))}),sR=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:a,vilkårsperioder:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,setFordelingFormIsDirty:v})=>{const f=Ye({defaultValues:g!=null&&g.FORDEL_BEREGNING_FORM?g:aR(a,s,o,l)}),{formState:{dirtyFields:b,isSubmitted:y,errors:j,isDirty:R},control:h,trigger:N}=f;I.useEffect(()=>{v(R)},[R]),I.useEffect(()=>{var P;y&&(P=b[ea])!=null&&P[e]&&N()},[e]);const{fields:E}=en({name:ea,control:h});return p.jsx(Yi,{errorMessage:"Noe gikk galt ved visning av fordeling",children:p.jsx(Ce,{formMethods:f,onSubmit:P=>{Object.keys(j).length===0&&t(tR(P,a,s))},setDataOnUnmount:m,children:E.map(P=>{const q=a.findIndex(S=>S.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp);return p.jsx("div",{style:{display:q===e?"block":"none"},children:p.jsx(eR,{submittable:r,readOnly:n||!gr(s,a[q].vilkårsperiodeFom),beregningsgrunnlag:a[q],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:a.filter(Am).findIndex(S=>S.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp)})},P.id)})})})},iR=(e,n)=>e.map(r=>p.jsx("div",{children:r&&r.erTildeltRefusjon?p.jsx(T,{children:n}):p.jsx(T,{children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),lR=e=>{if(!e)return;const n=e.tom===Be?void 0:e.tom;return p.jsx(T,{children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:Ve(e.fom),tom:n?Ve(n):""}})})},dR=e=>e.map(n=>p.jsx("div",{children:lR(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),oR=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(T,{children:Pi(e,n)})}),p.jsx(c.DataCell,{children:iR(e.tidligereUtbetalinger||[],Pi(e,n))}),p.jsx(c.DataCell,{children:dR(e.tidligereUtbetalinger||[])})]}),gR="_tabellContainer_9a5fi_1",uR={tabellContainer:gR},kR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,mR=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return p.jsx("div",{className:uR.tabellContainer,children:p.jsxs(c,{children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),p.jsx(c.Body,{children:t.map(a=>p.jsx(oR,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:a},kR(a)))})]})})},vR="_bredde_1lhuf_1",pR="_tekstMidtstilt_1lhuf_4",si={bredde:vR,tekstMidtstilt:pR},fR="REFUSJON_ENDRING_DATO",yR="DELVIS_REFUSJON_FØR_START_BELØP",Im=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,na=e=>Im(fR,e),xl=e=>Im(yR,e),bR=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,At=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:a,vilkårperiodeFieldIndex:s})=>{const l=Pi(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",g=Ie().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${na(e)}`),m=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,v=bR(a,g),f=I.useCallback(y=>p.jsx("b",{children:y}),[]),b=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return p.jsxs(V,{children:[p.jsx(T,{children:p.jsx(u,{id:o,values:{ag:l,dato:Ve(e.nyttRefusjonskravFom),b:f}})}),p.jsxs(K,{gap:"6",children:[p.jsx("div",{className:si.tekstMidtstilt,children:p.jsx(T,{children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),p.jsx(Wn,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${na(e)}`,isReadOnly:n,validate:n?[]:[Q,In,ia(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),b&&!v&&!m&&p.jsxs(K,{gap:"6",children:[p.jsx("div",{className:si.tekstMidtstilt,children:p.jsx(T,{children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),p.jsx(ce,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${xl(e)}`,className:si.bredde,validate:n?[]:[Q,nn(e.maksTillattDelvisRefusjonPrMnd)],parse:Oe,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};At.buildInitialValues=e=>{const n={};return n[na(e)]=e.fastsattNyttRefusjonskravFom||"",n[xl(e)]=M(e.fastsattDelvisRefusjonPrMnd)||"",n};At.transformValues=(e,n,r)=>{var t,a;const s=na(n),l=e[s];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const g=xl(n);o=pe(e[g])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(a=n.arbeidsgiver)==null?void 0:a.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const _g="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:cR}=Le,Tm=e=>e?e.find(n=>n.definisjon===cR):void 0,jR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,hR=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],a=Tm(e.avklaringsbehov);let s={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:a&&a.begrunnelse?a.begrunnelse:void 0};return t.forEach(l=>{s={...s,...At.buildInitialValues(l)}}),s},AR=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(a=>At.transformValues(e,a,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},IR=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:a,formSubmittes:s})=>{var l;const o=!r.avklaringsbehov.some(y=>y.definisjon===Le.VURDER_REFUSJON_BERGRUNN),g=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],m=Tm(r.avklaringsbehov),v=m?El(m.status):!1,f=Ie(),b=f.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${a}.begrunnelse`);return p.jsxs(p.Fragment,{children:[v&&p.jsx(rr,{children:[p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),p.jsx(H,{sixteenPx:!0}),p.jsx(ue,{size:"small",children:p.jsx(u,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),p.jsx(H,{sixteenPx:!0}),p.jsx(mR,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),p.jsx(H,{sixteenPx:!0}),g.map(y=>p.jsx(At,{refusjonAndel:y,readOnly:o||n,erAksjonspunktÅpent:v,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:_g,vilkårperiodeFieldIndex:a},jR(y))),p.jsx(H,{twentyPx:!0}),p.jsx(bt,{name:`${_g}.${a}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!b}),p.jsx(xn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),p.jsx(H,{twentyPx:!0}),p.jsx(ha,{isSubmittable:e,isReadOnly:o||n,isSubmitting:s,isDirty:f.formState.isDirty}),p.jsx(H,{sixteenPx:!0})]})},ra="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:TR}=Le,RR=(e,n)=>({[ra]:e.map(r=>hR(r,ft(n,r.vilkårsperiodeFom)))}),ER=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},NR=(e,n)=>n.filter(r=>r.skjaeringstidspunktBeregning===e).some(r=>r.avklaringsbehov.some(t=>t.definisjon==="VURDER_REFUSJONSKRAV")),PR=(e,n,r)=>{const t=e[ra].filter(a=>gr(r,a.periode.fom)).filter(a=>NR(a.beregningsgrunnlagStp,n)).map(a=>AR(a,ER(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:TR}},qR=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:a,arbeidsgiverOpplysningerPerId:s,setFormData:l,formData:o,submitCallback:g,setRefusjonFormIsDirty:m})=>{const v=Ye({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:RR(t,a)}),[f,b]=I.useState(!1),{formState:{dirtyFields:y,isSubmitted:j,errors:R,isDirty:h},control:N,trigger:E}=v;I.useEffect(()=>{m(h)},[h]),I.useEffect(()=>{var q;j&&(q=y[ra])!=null&&q[e]&&E()},[e]);const{fields:P}=en({name:ra,control:N});return p.jsx(Yi,{errorMessage:"Noe gikk galt ved visning av refusjon",children:p.jsx(Ce,{formMethods:v,onSubmit:q=>{Object.keys(R).length===0&&(b(!0),g(PR(q,t,a)))},setDataOnUnmount:l,children:P.map(q=>{const S=t.findIndex(D=>D.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp);return p.jsx("div",{style:{display:S===e?"block":"none"},children:p.jsx(IR,{submittable:n,readOnly:r||!gr(a,t[S].vilkårsperiodeFom),beregningsgrunnlag:t[S],arbeidsgiverOpplysningerPerId:s,vilkårperiodeFieldIndex:S,formSubmittes:f})},q.id)})})})};var Si={exports:{}},SR=Si.exports,Og;function xR(){return Og||(Og=1,function(e,n){(function(r,t){e.exports=t()})(SR,function(){return function(r,t,a){t.prototype.isBetween=function(s,l,o,g){var m=a(s),v=a(l),f=(g=g||"()")[0]==="(",b=g[1]===")";return(f?this.isAfter(m,o):!this.isBefore(m,o))&&(b?this.isBefore(v,o):!this.isAfter(v,o))||(f?this.isBefore(m,o):!this.isAfter(m,o))&&(b?this.isAfter(v,o):!this.isBefore(v,o))}}})}(Si)),Si.exports}var BR=xR();const Rm=sm(BR),Dg=e=>e===Be?"":A(e).format(te),FR=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=Z(),[a,s]=I.useState(),l=I.useCallback(v=>{const f=A(v).format(xe);if(r(f),f){const b=n(f);b.sort((y,j)=>A(y.fom).diff(A(j.fom))),s(b)}},[n]),o=[v=>!e||!A(v).isAfter(A(e.fom))||A(v).isAfter(A(e.tom))],{datepickerProps:g,inputProps:m}=pp({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return p.jsxs(p.Fragment,{children:[p.jsx(Zl,{...g,children:p.jsx(Zl.Input,{...m,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})}),a&&p.jsxs("div",{children:[p.jsx(B,{size:"small",children:p.jsx(u,{id:"TilkommetAktivitet.Modal.Resultat"})}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(u,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:A(a[0].fom).format(te),tom:Dg(a[0].tom)}})}),p.jsx("li",{children:p.jsx(u,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:A(a[1].fom).format(te),tom:Dg(a[1].tom)}})})]})]})]})},_R=e=>e?e.tom===Be?!0:Pu(e.fom,e.tom,!0)>1:!1,OR=e=>e.map(n=>({fom:n.fom,tom:n.tom})),DR=(e,n)=>{const r=A(e).format(te);if(n&&n!==Be){const t=A(n).format(te);return r.concat(" - ",t)}return r.concat(" - ")},wR=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:a})=>{const s=Z(),[l,o]=I.useState(void 0),[g,m]=I.useState(void 0),v=I.useMemo(()=>OR(e),[e]),f=I.useCallback(()=>{l&&g&&(r(l),a())},[e,l]),b=I.useCallback(j=>{const R=j.target.value,h=v.find(N=>N.fom===R);m(h||void 0)},[]),y=g&&_R(g);return t?p.jsxs(Rt,{width:"500px",open:t,onClose:a,"aria-label":"Del opp periode",children:[p.jsx(Rt.Header,{children:p.jsx(u,{id:"TilkommetAktivitet.Modal.Tittel"})}),p.jsx(Rt.Body,{children:p.jsxs(V,{gap:"4",children:[p.jsxs(vp,{label:s.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:b,size:"small",children:[p.jsx("option",{value:void 0,children:"Velg periode"}),v.map(j=>p.jsx("option",{value:j.fom,children:DR(j.fom,j.tom)},j.fom))]}),y&&p.jsx(FR,{forhåndsvisPeriodesplitt:n,periode:g,setValgtDato:o})]})}),p.jsxs(Rt.Footer,{children:[p.jsx(ae,{size:"small",variant:"secondary",onClick:a,disabled:!1,autoFocus:!0,type:"button",children:p.jsx(u,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})}),p.jsx(ae,{size:"small",variant:"primary",onClick:f,disabled:!l,autoFocus:!0,type:"button",children:p.jsx(u,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})]})]}):null};A.extend(Rm);const VR="2023-05-01";function MR(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const GR=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(s=>t.push(s));const a={...r,inntektsforholdListe:t.filter(MR()),tom:n.tom};e.push(a)},LR=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let a=0;a<r.length;a+=1){const s=r[a],l=t.find(o=>o.aktivitetStatus===s.aktivitetStatus&&o.arbeidsgiverId===s.arbeidsgiverId&&o.arbeidsforholdId===s.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==s.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==s.skalRedusereUtbetaling)return!1}return!0},wg=(e,n)=>Pu(e,n,!0)>2,KR=(e,n)=>{const r=n.tom,t=e.fom;return A(r).isBefore(A(t))?wg(r,t):wg(t,r)},$R=(e,n,r)=>{if(A(e.fom).isSame(A(VR)))return!1;const t=n[n.length-1],a=Rn(e,r);return a&&!Rn(t,r)||a&&KR(e,t)?!1:LR(e,t)},UR=e=>(n,r)=>n.length===0?(n.push({...r}),n):$R(r,n,e)?(GR(n,r),n):(n.push({...r}),n),Em=(e,n)=>e.reduce(UR(n),[]);function Nm(e,n){var r;return!Rn(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const Pm=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===ve.ARBEIDSTAKER?r?ct(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ve.FRILANSER?"Frilanser":e.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===ve.DAGPENGER?"Dagpenger":""},HR=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===ve.ARBEIDSTAKER?r?ct(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ve.FRILANSER?"Frilanser":e.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},YR="_tilkommetAktivitet_1quo5_1",CR="_aktivitetContainer_1quo5_4",zR="_aktivitetTable_1quo5_7",JR="_aksjonspunktContainer_1quo5_16",WR="_aksjonspunktContainerLukketAP_1quo5_21",ZR="_bruttoInntektContainer_1quo5_26",XR="_bruttoInntektCurrency_1quo5_29",QR="_inntektsmeldingTag_1quo5_37",eE="_inntektColumn_1quo5_40",Ue={tilkommetAktivitet:YR,aktivitetContainer:CR,aktivitetTable:zR,aksjonspunktContainer:JR,aksjonspunktContainerLukketAP:WR,bruttoInntektContainer:ZR,bruttoInntektCurrency:XR,inntektsmeldingTag:QR,inntektColumn:eE},nE=e=>pe(e)>0?null:`Du kan ikke registrere 0,- i inntekt, da dette ikke vil medføre gradering mot inntekt. 
       Hvis arbeidsforholdet ikke medfører inntekter enda, men kanskje vil det senere, velger du nei. 
       Informer også bruker om at de må melde fra hvis de begynner å jobbe for denne arbeidsgiveren.`,rE=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},tE=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:a,field:s,arbeidsgiverOpplysningerPerId:l})=>{const o=Ie(),g=Z(),m=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`),v=()=>{switch(s.aktivitetStatus){case ve.ARBEIDSTAKER:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. ",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{})," Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.",p.jsx("br",{}),p.jsx("br",{})," Husk å begrunne fastsatt inntekt for alle periodene."]});case ve.FRILANSER:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra a-inntekt eller fra bruker selv.",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{}),"Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt eller be bruker forklare hva som er avtalt.",p.jsx("br",{}),p.jsx("br",{}),"Husk å begrunne fastsatt inntekt for alle periodene."]});case ve.SELVSTENDIG_NAERINGSDRIVENDE:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Bruk som hovedregel opplysninger fra søknaden.",p.jsx("br",{}),p.jsx("br",{}),"Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Du kan for eksempel be om dokumentasjon på foreløpig resultatregnskap, innbetalt forskuddsskatt og lignende.",p.jsx("br",{}),p.jsx("br",{}),"Husk å begrunne fastsatt inntekt for alle periodene."]});default:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. ",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{})," Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.",p.jsx("br",{}),p.jsx("br",{})," Husk å begrunne fastsatt inntekt for alle periodene."]})}},f=()=>s.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):s.aktivitetStatus===ve.FRILANSER?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:HR(s,l)});return p.jsxs(p.Fragment,{children:[p.jsx(Ne,{label:f(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[Q],isTrueOrFalseSelection:!0}),m===!1&&p.jsxs(p.Fragment,{children:[p.jsx(H,{sixteenPx:!0}),p.jsx(Ee,{size:"small",variant:"info",children:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})})]}),m&&p.jsxs(p.Fragment,{children:[p.jsx(H,{sixteenPx:!0}),p.jsx(B,{size:"small",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),p.jsx(Se,{header:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:v()}),p.jsx(H,{eightPx:!0}),p.jsxs("div",{className:Ue.bruttoInntektContainer,children:[p.jsx(ce,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,htmlSize:9,parse:Oe,validate:[Q,nn(178956970),nE]}),p.jsx("span",{className:Ue.bruttoInntektCurrency,children:"kr"})]})]})]})},Vg=e=>!!e&&+e>0,aE=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=Z(),t=s=>{const l=[];return s.inntektsforholdListe.forEach(o=>{const g=Vg(o.bruttoInntektPrÅr),m=Vg(o.inntektFraInntektsmeldingPrÅr);l.push(p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(T,{size:"small",children:Pm(o,e)})}),p.jsx(c.DataCell,{children:p.jsx(T,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(g||m)&&p.jsx(c.DataCell,{children:p.jsxs(T,{size:"small",children:[g&&p.jsxs(p.Fragment,{children:[Kt(o.bruttoInntektPrÅr||0),p.jsx(Xr,{})]}),m&&!g&&p.jsxs(p.Fragment,{children:[Kt(o.inntektFraInntektsmeldingPrÅr||0),p.jsx(ka,{className:Ue.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},rE(o)))}),l},a=n.inntektsforholdListe.some(s=>s.bruttoInntektPrÅr);return p.jsx("div",{className:Ue.aktivitetContainer,children:p.jsxs(c,{className:Ue.aktivitetTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling"})}),a&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!a&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(c.Body,{children:t(n)})]})})},xt=e=>!!e&&+e>0,sE=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:a,erAksjonspunktÅpent:s,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:g,avklaringsbehov:m})=>{const{control:v,formState:f}=Ie(),{fields:b}=en({control:v,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),y=n.inntektsforholdListe.some(h=>xt(h.bruttoInntektPrÅr)||xt(h.inntektFraInntektsmeldingPrÅr)),j=n.inntektsforholdListe.some(h=>!!h.periode),R=h=>{const N=[],{inntektsforholdListe:E}=h;return E.forEach(P=>{const q=xt(P.bruttoInntektPrÅr),S=xt(P.inntektFraInntektsmeldingPrÅr);N.push(p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(T,{size:"small",children:Pm(P,o)})}),(q||S||j)&&p.jsx(c.DataCell,{className:Ue.inntektColumn,children:p.jsxs(T,{size:"small",children:[q&&!S&&p.jsxs(p.Fragment,{children:[Kt(P.bruttoInntektPrÅr||0),p.jsx(Xr,{})]}),S&&p.jsxs(p.Fragment,{children:[Kt(P.inntektFraInntektsmeldingPrÅr||0),p.jsx(ka,{className:Ue.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),P.periode&&p.jsx(c.DataCell,{className:Ue.periodeColumn,children:p.jsx(T,{size:"small",children:p.jsx($e,{dateStringFom:P.periode.fom,dateStringTom:P.periode.tom})})})]},P.arbeidsgiverId||P.aktivitetStatus))}),N};return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:Ue.aktivitetContainer,children:p.jsxs(c,{className:Ue.aktivitetTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})}),j&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.Periode"})}),!j&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(u,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(c.Body,{children:R(n)})]})}),p.jsx(H,{sixteenPx:!0}),p.jsxs("div",{className:s?Ue.aksjonspunktContainer:Ue.aksjonspunktContainerLukketAP,children:[b.map((h,N)=>p.jsxs("div",{children:[p.jsx(tE,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:N,field:h,readOnly:a,arbeidsgiverOpplysningerPerId:o},h.id),N<n.inntektsforholdListe.length-1&&p.jsx(H,{fourtyPx:!0})]},h.id)),g&&p.jsxs(p.Fragment,{children:[p.jsx(H,{fourtyPx:!0}),p.jsx(Qe,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:a,validate:[Q]}),p.jsx(xn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),p.jsx(H,{sixteenPx:!0}),p.jsx(ha,{isSubmittable:l,isReadOnly:a,isSubmitting:f.isSubmitting,isDirty:f.isDirty})]})]})]})},iE="_statusOk_1qsx9_1",Mg={statusOk:iE},ii=e=>e?A(e,xe).format(te):"-",Gg=(e,n)=>!n||n===Be?p.jsx(B,{size:"medium",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:ii(e)}})}):p.jsx(B,{size:"medium",children:p.jsx(u,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:ii(e),tom:ii(n)}})}),lE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:a,submittable:s,erAksjonspunktÅpent:l,fields:o})=>{const[g,m]=I.useState([]),[v,f]=I.useState([]),[b,y]=I.useState([]),j=Ie();I.useEffect(()=>{var q,S;const D=(S=(q=e.faktaOmFordeling)==null?void 0:q.vurderNyttInntektsforholdDto)==null?void 0:S.vurderInntektsforholdPerioder;if(D){const F=Em(D,e.forlengelseperioder);m(F);const z=v.map(_=>_),J=o.map(_=>_.fom);J.filter(_=>!b.includes(_)).forEach(_=>z.push(_)),f(z),y(J)}},[e,o.length]);const R=g.filter(q=>Nm(q,e)),h=e==null?void 0:e.avklaringsbehov.find(q=>q.definisjon===Le.VURDER_NYTT_INNTKTSFRHLD),N=q=>{if(v.includes(q)){const S=v.filter(D=>D!==q);f(S)}else{const S=v.map(D=>D);S.push(q),f(S)}},E=q=>{const S=A(q),D=g.find(F=>!A(F.fom).isAfter(S)&&!A(F.tom).isBefore(S));if(!D)throw new Error(`Finner ikke periode som overlapper med fom ${q}`);return D},P=q=>()=>N(q);return!g||g.length<1?null:p.jsxs(p.Fragment,{children:[p.jsxs(qe,{className:Mg.statusOk,children:[R.map(q=>p.jsxs(qe.Item,{open:v.filter(S=>S===q.fom).length>0,children:[p.jsxs(qe.Header,{onClick:P(q.fom),children:[Gg(q.fom,q.tom)," ",p.jsx(lm,{})]}),p.jsx(qe.Content,{children:p.jsx(aE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:q})})]},q.fom)),o.map((q,S)=>p.jsxs(qe.Item,{open:v.filter(D=>D===q.fom).length>0,children:[p.jsx(qe.Header,{onClick:P(q.fom),children:Gg(q.fom,q.tom)}),p.jsx(qe.Content,{children:p.jsx(sE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:E(q.fom),formName:r,formFieldIndex:t,periodeFieldIndex:S,readOnly:a,erAksjonspunktÅpent:l,submittable:s,skalViseBegrunnelse:o.length===1,avklaringsbehov:h})})]},q.fom))]}),o.length>1&&p.jsxs("div",{className:Mg.aktivitetContainer,children:[p.jsx(H,{fourtyPx:!0}),p.jsx(Qe,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:a,validate:[Q]}),p.jsx(xn,{ident:h==null?void 0:h.vurdertAv,date:h==null?void 0:h.vurdertTidspunkt}),p.jsx(H,{sixteenPx:!0}),p.jsx(ha,{isSubmittable:s,isReadOnly:a,isSubmitting:j.formState.isSubmitting,isDirty:j.formState.isDirty})]})]})},li=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),dE=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:a,erAksjonspunktÅpent:s,arbeidsgiverOpplysningerPerId:l})=>{var o,g;const m=Z(),[v,f]=I.useState(!1),{control:b,watch:y}=Ie(),{fields:j,remove:R,insert:h}=en({control:b,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});j.sort((_,G)=>A(_.fom).diff(A(G.fom)));const N=(g=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:g.vurderInntektsforholdPerioder,E=()=>{const _=N==null?void 0:N.flatMap(G=>G.inntektsforholdListe.map(w=>w.aktivitetStatus)).reduce((G,w)=>(G.some(U=>U===w)||G.push(w),G),[]);return(_?_.length:0)>1?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):li(ve.SELVSTENDIG_NAERINGSDRIVENDE,N)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):li(ve.FRILANSER,N)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):li(ve.DAGPENGER,N)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},P=()=>s?p.jsxs(Ee,{size:"small",variant:"warning",children:[p.jsx(ue,{size:"xsmall",level:"3",children:E()}),m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):p.jsxs(p.Fragment,{children:[p.jsxs(B,{size:"small",children:[m.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),E()]}),p.jsx(T,{size:"small",children:m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),q=(_,G,w,U)=>{const re=y(`${e}.${r}.perioder.${w}.inntektsforhold.${U}.skalRedusereUtbetaling`),W=y(`${e}.${r}.perioder.${w}.inntektsforhold.${U}.bruttoInntektPrÅr`);return{aktivitetStatus:_.aktivitetStatus,arbeidsgiverIdent:_.arbeidsgiverIdent,arbeidsforholdId:_.arbeidsforholdId,bruttoInntektPrÅr:G?W:void 0,skalRedusereUtbetaling:G?re:void 0}},S=(_,G,w)=>!A(_).isAfter(A(w))&&!A(G).isBefore(A(w)),D=I.useCallback(_=>{const G=j.find(W=>S(W.fom,W.tom,_));if(!G)throw new Error(`Finner ikke field somme inneholder dato ${_}`);const w=A(_).subtract(1,"day"),U={fom:A(G.fom).format(xe),tom:w.format(xe)},re={fom:A(_).format(xe),tom:G.tom};return[U,re]},[j]),F=I.useCallback(_=>{const G=j.find(Re=>S(Re.fom,Re.tom,_));if(!G)throw new Error(`Finner ikke field somme inneholder dato ${_}`);const w=D(_),U=j.indexOf(G),re=G.inntektsforhold||[],W={inntektsforhold:re.map((Re,Fe)=>q(Re,!0,U,Fe)),fom:w[0].fom,tom:w[0].tom},se={inntektsforhold:re.map((Re,Fe)=>q(Re,!1,U,Fe)),fom:w[1].fom,tom:w[1].tom};R(U),h(U,[W,se])},[j]),z=I.useCallback(()=>{f(!0)},[v]),J=I.useCallback(()=>{f(!1)},[v]);return p.jsxs(V,{gap:"8",children:[P(),!!N&&s&&p.jsx(p.Fragment,{children:p.jsx(Ee,{size:"small",variant:"info",title:"",children:p.jsx(u,{id:"TilkommetAktivitet.AksjonspunktAlert"})})}),p.jsxs(V,{gap:"0",children:[p.jsxs(K,{justify:"space-between",children:[p.jsx(ue,{size:"small",level:"3",children:p.jsx(u,{id:"TilkommetAktivitet.Heading"})}),p.jsx(ae,{variant:"tertiary",loading:!1,disabled:t,onClick:z,size:"small",type:"button",icon:p.jsx(Ep,{height:32,width:32}),children:p.jsx(u,{id:"TilkommetAktivitet.Modal.Knapp"})})]}),v&&p.jsx(wR,{fields:j,forhåndsvisPeriodesplitt:D,lukkModal:J,skalViseModal:v,utførPeriodesplitt:F}),p.jsx(lE,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:j,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:s,submittable:a})]})]})};A.extend(Rm);const{VURDER_NYTT_INNTKTSFRHLD:xi}=Le,$r="VURDER_TILKOMMET_AKTIVITET_FORM",qm=e=>{const n=e.find(r=>r.definisjon===xi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${xi}`);return n},oE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function gE(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Em(t,e.forlengelseperioder).filter(a=>!Nm(a,e))}const uE=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:M(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),kE=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>uE(n))}),mE=(e,n)=>{const r=qm(e.avklaringsbehov),t=gE(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:ft(n,e.vilkårsperiodeFom).periode,perioder:t.map(a=>kE(a))}},vE=(e,n)=>({[`${$r}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===Le.VURDER_NYTT_INNTKTSFRHLD)).map(r=>mE(r,n))}),pE=(e,n)=>{const r=A(e.fom).isBetween(n.fom,n.tom,"day","[]")||A(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=A(n.fom).isBetween(e.fom,e.tom,"day","[]")||A(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},fE=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),yE=(e,n)=>{var r,t;const a=e.perioder,s=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>a.filter(o=>pE(o,l)).map(o=>{const g=o.inntektsforhold.filter(m=>fE(m,l)).map(m=>{const v=!!m.skalRedusereUtbetaling,f=v?pe(m.bruttoInntektPrÅr):void 0;return{aktivitetStatus:m.aktivitetStatus,arbeidsgiverId:m.arbeidsgiverIdent,arbeidsforholdId:m.arbeidsforholdId,skalRedusereUtbetaling:v,bruttoInntektPrÅr:f}});return{fom:A(o.fom).isBefore(A(l.fom))?l.fom:o.fom,tom:A(o.tom).isAfter(A(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:g}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:s}},bE=(e,n,r)=>{const t=e[$r].filter(a=>gr(r,a.periode.fom)).map(a=>yE(a,oE(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:xi}},cE=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:a,readOnly:s,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:g,setTilkommetAktivitetFormIsDirty:m})=>{const v=Ye({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:vE(t,o)}),{formState:{dirtyFields:f,isSubmitted:b,errors:y,isDirty:j},trigger:R,control:h}=v;I.useEffect(()=>{m(j)},[j]),I.useEffect(()=>{var S;b&&(S=f[$r])!=null&&S[e]&&R()},[e]);const{fields:N}=en({name:$r,control:h}),E=t[e],P=qm(E.avklaringsbehov),q=P?El(P.status):!1;return p.jsx(Yi,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:p.jsx("div",{className:Ue.tilkommetAktivitet,children:p.jsx(Ce,{formMethods:v,onSubmit:S=>{Object.keys(y).length===0&&a(bE(S,t,o))},setDataOnUnmount:r,children:N.map((S,D)=>{const F=t.findIndex(z=>z.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return p.jsx("div",{style:{display:F===e?"block":"none"},children:p.jsx(dE,{formName:$r,beregningsgrunnlag:t[F],formFieldIndex:D,readOnly:s||!gr(o,t[F].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:q,arbeidsgiverOpplysningerPerId:g})},S.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:jE,VURDER_REFUSJON_BERGRUNN:hE,VURDER_NYTT_INNTKTSFRHLD:AE}=Le,IE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,TE=e=>!!(e&&e.refusjonTilVurdering),RE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,di=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,EE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:a,kodeverkSamling:s,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,skalHåndtereNyInntekt:v})=>{const[f,b]=I.useState(!1),[y,j]=I.useState(!1),[R,h]=I.useState(!1),N=di(t[e].avklaringsbehov,jE),E=di(t[e].avklaringsbehov,hE),P=di(t[e].avklaringsbehov,AE),q=v&&P&&RE(t[e]),S=N&&IE(t[e]),D=E&&TE(t[e]);return p.jsxs(p.Fragment,{children:[q&&p.jsxs(p.Fragment,{children:[p.jsx(cE,{aktivtBeregningsgrunnlagIndeks:e,formData:g,setFormData:m,submittable:l&&!y&&!R,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:a,setTilkommetAktivitetFormIsDirty:b}),p.jsx(H,{fourtyPx:!0})]}),D&&p.jsxs(p.Fragment,{children:[p.jsx(qR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!R,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkarperioder:a,setRefusjonFormIsDirty:j}),p.jsx(H,{fourtyPx:!0})]}),S&&p.jsx(sR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!y,readOnly:n,submitCallback:r,kodeverkSamling:s,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkårsperioder:a,setFordelingFormIsDirty:h})]})},NE=Ke(Nl),{FORDEL_BEREGNINGSGRUNNLAG:PE,VURDER_REFUSJON_BERGRUNN:qE,VURDER_NYTT_INNTKTSFRHLD:SE}=Le,xE=(e,n)=>{const r=ft(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:a}=r.periode;return a!==null?`${A(t).format(te)} - ${A(a).format(te)}`:`${A(t).format(te)} - `}return`${A(e.vilkårsperiodeFom).format(te)}`},Sm=(e,n)=>e.avklaringsbehov.some(r=>r.definisjon===qE||r.definisjon===PE||r.definisjon===SE&&n),BE=(e,n,r)=>Sm(e,r)&&gr(n,e.vilkårsperiodeFom),FE=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:a,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g,skalHåndtereNyInntekt:m=!0})=>{const v=n.filter(j=>Sm(j,m)),[f,b]=I.useState(0);if(v.length===0)return null;const y=v.length>1;return p.jsxs(Ge,{value:NE,children:[y&&p.jsx(kr,{value:f.toString(),onChange:j=>b(Number(j)),children:p.jsx(kr.List,{children:v.map((j,R)=>p.jsx(kr.Tab,{value:R.toString(),label:xE(j,e.perioder),className:BE(j,e.perioder,m)?"harAksjonspunkt":""},j.skjaeringstidspunktBeregning))})}),p.jsx(H,{eightPx:!0}),p.jsx(EE,{aktivtBeregningsgrunnlagIndeks:f,kodeverkSamling:r,submitCallback:t,readOnly:a,beregningsgrunnlagListe:v,vilkarperioder:e.perioder,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g,skalHåndtereNyInntekt:m})]})},Lg=[le.FORDEL_BEREGNINGSGRUNNLAG,le.VURDER_REFUSJON_BERGRUNN],_E=({arbeidsgiverOpplysningerPerId:e})=>{const n=ar(Lg),{behandling:r}=I.use(Sn),t=qn(r),{data:a,isFetching:s}=Pn(t.beregningsgrunnlagOptions(r));return i.jsx(sr,{standardPanelProps:n,faktaPanelKode:tr.FORDELING,faktaPanelMenyTekst:Z().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Lg.some(l=>ua(l,r.aksjonspunkt)),children:s?i.jsx(Nn,{}):i.jsx(OE,{kodeverkSamling:n.alleKodeverk,beregningsgrunnlagVilkår:ME(n.behandling.vilkår,a),beregningsgrunnlagListe:GE(a),submitCallback:wE(n.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:n.readOnly,submittable:n.submittable})})},OE=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=Mn();return i.jsx(FE,{...e,formData:n,setFormData:r})},DE=e=>{switch(e){case Le.FORDEL_BEREGNINGSGRUNNLAG:return le.FORDEL_BEREGNINGSGRUNNLAG;case Le.VURDER_REFUSJON_BERGRUNN:return le.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},wE=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:DE(a.kode),...a.grunnlag[0]}));return e(t)},VE=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),ME=(e,n)=>{if(!e)return null;const r=e.find(a=>a.vilkarType&&a.vilkarType===Xn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[VE(n,r)]}},GE=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];_E.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Fn=({tittel:e,children:n})=>i.jsxs(V,{gap:"1",children:[i.jsx(B,{size:"medium",children:e}),n]});Fn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xm=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:n})=>{var t;const r=Z();return i.jsxs(Fn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[i.jsxs("span",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[n])==null?void 0:t.navn)??"-"]}),i.jsxs("span",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};xm.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Bm=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const a=Z(),s=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),o=(()=>{const m=l.length;return s&&m>1?i.jsx(u,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):s?i.jsx(u,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?i.jsx(u,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):i.jsx(u,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),g=[...l].sort((m,v)=>new Date(m.opprettet).getTime()-new Date(v.opprettet).getTime());return i.jsxs(Fn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,i.jsx(ne,{children:g.map(m=>{var v;return i.jsx(ne.Item,{children:i.jsxs(V,{gap:"1",children:[i.jsx("span",{children:(v=t.BehandlingType.find(({kode:f})=>f===m.type))==null?void 0:v.navn}),i.jsxs("span",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",i.jsx(Ut,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?i.jsxs("span",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",i.jsx(Ut,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Bm.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const LE=e=>{const n=e.aktiveNaturalytelser.reduce((t,a)=>{const s=a.type;return s in t?{...t,[s]:[...t[s],a]}:{...t,[s]:[a]}},{}),r={};return Object.entries(n).forEach(([t,a])=>{const s=a.sort((l,o)=>Sp({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=s.flatMap((l,o,g)=>{const m=g[o+1],v=l.periode.tomDato,f=m==null?void 0:m.periode.fomDato;return v===Be?[]:[{...l,periode:{fomDato:Ht(v,1),tomDato:f?Ht(f,-1):Be}}]})}),r},Fm=({inntektsmelding:e,alleKodeverk:n})=>{const r=Z(),t=LE(e);return i.jsx(Fn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?i.jsx("span",{children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):i.jsx(V,{gap:"1",children:Object.entries(t).map(([a,s])=>{var l;return i.jsxs("div",{children:[i.jsx("span",{children:(l=n[on.NATURAL_YTELSE_TYPE].find(o=>o.kode===a))==null?void 0:l.navn}),i.jsx("ul",{children:s.map(o=>i.jsxs(C.Fragment,{children:[i.jsxs("li",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",i.jsx(Ae,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Be&&i.jsxs("li",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",i.jsx(Ae,{dateString:o.periode.tomDato})]}),i.jsxs("li",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",M(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},a)})})})};Fm.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const _m=({kildeSystem:e})=>{const n=Z(),r=I.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return i.jsx(Fn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};_m.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Om=({inntektsmelding:e})=>{const n=Z();return i.jsxs(Fn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[i.jsxs("span",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),i.jsxs("span",{children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Om.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Dm=({inntektsmelding:e,fagsak:n})=>i.jsx(ae,{type:"button",onClick:()=>{window.open(Wi(n.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:i.jsx(cp,{}),children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Dm.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
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
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
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
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
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
}>`},description:""}}};const wm=({inntektsmelding:e})=>{const n=Z();if(e.refusjonsperioder.length===0)return i.jsx(Fn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:i.jsx("span",{children:e.refusjonPrMnd?M(e.refusjonPrMnd):i.jsx(u,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,a)=>new Date(t.fom).getTime()-new Date(a.fom).getTime());return i.jsxs(V,{gap:"0",children:[i.jsx("span",{children:"Krever refusjon"}),i.jsx("span",{children:M(e.refusjonPrMnd??0)}),i.jsx("span",{children:"Endringer i perioden:"}),i.jsx("ul",{children:r.map(t=>i.jsx("li",{children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:M(t.refusjonsbeløp.verdi),fom:i.jsx(Ae,{dateString:t.fom})}})},t.indexKey))})]})};wm.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Vm=({startDatoPermisjon:e,ytelse:n})=>{const r=Z();return e?i.jsxs(Fn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[i.jsx("span",{children:e?i.jsx(Ae,{dateString:e}):"-"}),i.jsx("span",{children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Vm.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const KE="_behandlingCircleIngen_131kr_1",$E="_behandlingCircleDenne_131kr_5",UE="_behandlingCircleAndre_131kr_9",HE="_container_131kr_13",YE="_ingenInntektsmeldinger_131kr_19",Ur={behandlingCircleIngen:KE,behandlingCircleDenne:$E,behandlingCircleAndre:UE,container:HE,ingenInntektsmeldinger:YE},Mm=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:a,behandling:s}=En(),l=Z();return i.jsxs(V,{gap:"4",className:Ur.container,children:[i.jsxs(K,{gap:"4",justify:"space-between",align:"start",children:[i.jsxs(ue,{level:"3",size:"small",children:[i.jsx(u,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",i.jsx(Ut,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),i.jsx(Dm,{fagsak:a,inntektsmelding:e})]}),i.jsxs(xp,{columns:3,gap:"8",children:[i.jsx(xm,{arbeidsgiverOpplysningerPerId:n,arbeidsgiverIdent:e.arbeidsgiverIdent}),i.jsx(Fn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:i.jsx("span",{children:M(e.inntektPrMnd)})}),i.jsx(Bm,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:s}),i.jsx(Om,{inntektsmelding:e}),i.jsx(Vm,{ytelse:Hr(t,on.FAGSAK_YTELSE,a.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),i.jsx(_m,{kildeSystem:e.kildeSystem}),i.jsx(Fm,{inntektsmelding:e,alleKodeverk:t}),i.jsx(wm,{inntektsmelding:e})]})]})};Mm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const CE={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Kg=Ke(CE),Gm=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=En(),[a,s]=I.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=m=>{s(a&&m===a.orderBy&&a.direction==="descending"?void 0:{orderBy:m,direction:a&&m===a.orderBy&&a.direction==="ascending"?"descending":"ascending"})},o=a?zE({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:a.orderBy,behandling:t}):r,g=(a==null?void 0:a.direction)==="ascending"?o:o.toReversed();return g.length===0?i.jsx(Ge,{value:Kg,children:i.jsxs(K,{gap:"2",justify:"center",align:"center",className:Ur.ingenInntektsmeldinger,children:[i.jsx(T,{children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.ingen"})}),i.jsx(Hp,{})]})}):i.jsx(Ge,{value:Kg,children:i.jsxs(c,{sort:a,onSortChange:m=>l(m),children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),i.jsx(c.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),i.jsx(c.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),i.jsx(c.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),i.jsx(c.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),i.jsx(c.HeaderCell,{})]})}),i.jsx(c.Body,{children:g.map(m=>{var v;return i.jsxs(c.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:i.jsx(Mm,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:m}),children:[i.jsx(c.DataCell,{children:i.jsx(Ut,{dateTimeString:m.innsendingstidspunkt,separator:"kl"})}),i.jsx(c.DataCell,{children:((v=e[m.arbeidsgiverIdent])==null?void 0:v.navn)??"-"}),i.jsx(c.DataCell,{children:m.startDatoPermisjon?i.jsx(Ae,{dateString:m.startDatoPermisjon}):"-"}),i.jsx(c.DataCell,{children:M(m.inntektPrMnd)}),i.jsx(c.DataCell,{children:i.jsx(JE,{behandling:t,inntektsmelding:m})})]},`${m.journalpostId}-${m.internArbeidsforholdId}`)})})]})})},zE=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((a,s)=>{var g,m;const l=(g=n[a.arbeidsgiverIdent])==null?void 0:g.navn,o=(m=n[s.arbeidsgiverIdent])==null?void 0:m.navn;return oi(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((a,s)=>{const l=Bi({behandling:t,inntektsmelding:a}),o=Bi({behandling:t,inntektsmelding:s});return oi(l,o)}):e.slice().sort((a,s)=>{const l=a[r],o=s[r];return oi(l,o)}),oi=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,JE=({behandling:e,inntektsmelding:n})=>{const r=Bi({behandling:e,inntektsmelding:n});return r==="DENNE"?i.jsxs(K,{gap:"1",align:"center",children:[i.jsx(Pa,{className:Ur.behandlingCircleDenne}),i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?i.jsxs(K,{gap:"1",align:"center",children:[i.jsx(Pa,{className:Ur.behandlingCircleAndre}),i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):i.jsxs(K,{gap:"1",align:"center",children:[i.jsx(Pa,{className:Ur.behandlingCircleIngen}),i.jsx(u,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Bi=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Gm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const WE=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r,alleBehandlinger:t}=I.use(Sn),a=ar(),s=qn(r),{data:l}=Pn(s.inntektsmeldingerOptions(r));return i.jsx(sr,{standardPanelProps:a,faktaPanelKode:tr.INNTEKTSMELDINGER,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:l?i.jsx(Gm,{inntektsmeldinger:l,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e}):i.jsx(Nn,{})})};WE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ZE=e=>Ht(e,1),Lm=(e,n)=>A(ZE(e)).isSame(n)?n:e,Km=(e,n,r)=>{if(!(!n||!r))return A(e).isBefore(n)?n:Lm(e,r)},$m=(e,n,r)=>{if(!(!n||!r))return A(e).isAfter(r)?r:Lm(e,n)},XE=[ye.SYKEPENGER,ye.FORELDREPENGER,ye.PLEIEPENGER,ye.SVANGERSKAPSPENGER,ye.UTENLANDSK_ARBEIDSFORHOLD],Vt=(e,...n)=>!!e&&n.includes(e),QE=e=>e?A(e,xe).format(te):"-",eN=e=>Vt(e,ye.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",nN=(e,n)=>{const r=n[e];if(!e||!r)return"-";if(r.erPrivatPerson&&r.fødselsdato){const t=QE(r.fødselsdato);return`${r.navn} (${t})`}return r.identifikator?`${r.navn} (${r.identifikator})`:r.navn},rN=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",Um=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:a,ferdiglignetNæring:s})=>i.jsxs(V,{gap:"4",children:[Vt(e,ye.ARBEID,ye.NARING,...XE)&&i.jsxs(K,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:eN(e)})}),i.jsx(T,{size:"small",children:nN(n,r)})]}),Vt(e,ye.ARBEID)&&i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ActivityPanel.Stillingsandel"})}),i.jsx(T,{size:"small",children:t})]})]}),Vt(e,ye.NARING)&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ActivityPanel.Registreringsdato"})}),i.jsx(T,{size:"small",children:a?A(a).format(te):"-"})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:rN(s)})}),s.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>i.jsxs(K,{gap:"5",children:[i.jsx(T,{size:"small",children:l.år}),i.jsx(T,{size:"small",children:M(l.beløp)})]},l.år))]})]})]});Um.__docgenInfo={description:`ValgtAktivitetSubForm

Viser informasjon om valgt aktivitet`,methods:[],displayName:"ValgtAktivitetSubForm",props:{valgtAktivitetstype:{required:!1,tsType:{name:"string"},description:""},arbeidsgiverReferanse:{required:!0,tsType:{name:"string"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},stillingsandel:{required:!0,tsType:{name:"number"},description:""},naringRegistreringsdato:{required:!0,tsType:{name:"string"},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const tN="_panel_18tdb_5",aN="_colMargin_18tdb_9",sN="_margin_18tdb_13",Bt={panel:tN,colMargin:aN,margin:sN},iN=yn(3),lN=bn(1500),Mt=(e,n,r)=>e?!!n&&!r:!0,dN=(e,n)=>{const r=dp(e,n);return r?r.months>=1?i.jsx(u,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):i.jsx(u,{id:"ActivityPanel.Days",values:{days:r.days}}):i.jsx("span",{})},oN=(e,n,r,t)=>r||Mt(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",Hm=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:a,harAksjonspunkt:s,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:g,ferdiglignetNæring:m,oppdaterAktivitet:v,valgteFormValues:f,fastsattOpptjening:b,lukkPeriode:y})=>{var J;const j=Z(),R=Ye({defaultValues:f}),{arbeidsgiverReferanse:h,erGodkjent:N,erEndret:E,aktivitetType:P,stillingsandel:q,naringRegistreringsdato:S}=g,D=Km(g.opptjeningFom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),F=$m(g.opptjeningTom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),z=I.useCallback((..._)=>i.jsx("b",{children:_}),[]);return i.jsx(Ce,{formMethods:R,onSubmit:_=>v(_),children:i.jsx(Eu,{className:Bt.panel,merknaderFraBeslutter:l[le.VURDER_PERIODER_MED_OPPTJENING],children:i.jsxs(V,{gap:"6",children:[i.jsxs(V,{gap:"2",children:[i.jsxs(K,{justify:"space-between",children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"ActivityPanel.Details"})}),i.jsxs(K,{gap:"2",children:[i.jsx(ae,{className:Bt.margin,size:"xsmall",icon:i.jsx(oa,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:j.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(u,{id:"Timeline.prevPeriodShort"})}),i.jsx(ae,{className:Bt.margin,size:"xsmall",icon:i.jsx(ga,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:j.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(u,{id:"Timeline.nextPeriodShort"})}),i.jsx(ae,{size:"xsmall",icon:i.jsx(Jn,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:j.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsxs(K,{gap:"1",children:[i.jsxs("div",{className:Bt.colMargin,children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ActivityPanel.Period"})}),D&&F&&i.jsxs(K,{gap:"2",children:[i.jsx(T,{size:"small",children:`${A(D).format(te)} - ${A(F).format(te)}`}),i.jsx(T,{size:"small",children:dN(D,F)})]})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ActivityPanel.Activity"})}),i.jsx(T,{size:"small",children:(J=n.find(_=>_.kode===P))==null?void 0:J.navn})]})]})]}),i.jsx(Um,{valgtAktivitetstype:P,arbeidsgiverReferanse:h,arbeidsgiverOpplysningerPerId:o,stillingsandel:q,naringRegistreringsdato:S,ferdiglignetNæring:m}),!Mt(s,N,E)&&i.jsx(Ne,{name:"erGodkjent",hideLegend:!0,validate:[Q],isReadOnly:e,isEdited:E,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:j.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:i.jsx(u,{id:"ActivityPanel.IkkeGodkjent",values:{b:z}}),value:"false"}]}),i.jsx(Qe,{name:"begrunnelse",label:i.jsx(u,{id:oN(N,E,e,s)}),validate:[Q,iN,lN,cn],maxLength:1500,readOnly:e||Mt(s,N,E)}),!Mt(s,N,E)&&i.jsxs(K,{gap:"4",children:[i.jsx(ae,{size:"small",variant:"primary",disabled:!R.formState.isDirty,children:i.jsx(u,{id:"ActivityPanel.Oppdater"})}),i.jsx(ae,{size:"small",variant:"secondary",onClick:r,type:"button",children:i.jsx(u,{id:"ActivityPanel.Avbryt"})})]})]})})})};Hm.__docgenInfo={description:`ValgtAktivitetForm

Viser informasjon om valgt aktivitet`,methods:[],displayName:"ValgtAktivitetForm",props:{valgtOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const gN=e=>e===!1?"danger":e===!0?"success":"warning",uN={[ye.ARBEID]:i.jsx(xr,{width:20,height:20}),[ye.AAP]:i.jsx(Sr,{width:20,height:20}),[ye.DAGPENGER]:i.jsx(Sr,{width:20,height:20}),[ye.FORELDREPENGER]:i.jsx(Bp,{width:20,height:20}),[ye.FRILANS]:i.jsx(xr,{width:20,height:20}),[ye.MILITAR_ELLER_SIVILTJENESTE]:i.jsx(xr,{width:20,height:20}),[ye.NARING]:i.jsx(xr,{width:20,height:20}),[ye.OMSORGSPENGER]:i.jsx(Sr,{width:20,height:20}),[ye.OPPLARINGSPENGER]:i.jsx(Sr,{width:20,height:20}),[ye.PLEIEPENGER]:i.jsx(Sr,{width:20,height:20}),[ye.SVANGERSKAPSPENGER]:i.jsx(nf,{width:20,height:20}),[ye.SYKEPENGER]:i.jsx(af,{width:20,height:20}),[ye.UTENLANDSK_ARBEIDSFORHOLD]:i.jsx(Jp,{width:20,height:20}),[ye.ETTERLONN_SLUTTPAKKE]:i.jsx(xr,{width:20,height:20})},kN={danger:i.jsx(Gu,{}),success:i.jsx(Xi,{}),warning:i.jsx(Np,{})},mN=(e,n,r,t,a)=>e.map((s,l)=>{var o;return{id:l,start:A(Km(s.opptjeningFom,t,a)).toDate(),end:A($m(s.opptjeningTom,t,a)).toDate(),radId:(o=r.find(g=>g.aktivitetTypeKode===s.aktivitetType&&g.arbeidsforholdRef===s.arbeidsforholdRef&&g.arbeidsgiverReferanse===s.arbeidsgiverReferanse))==null?void 0:o.id,status:gN(n[l].erGodkjent)}}),vN=(e,n,r)=>e.reduce((a,s)=>(a.some(o=>o.aktivitetType===s.aktivitetType&&o.arbeidsforholdRef===s.arbeidsforholdRef&&o.arbeidsgiverReferanse===s.arbeidsgiverReferanse)||a.push(s),a),[]).map((a,s)=>{const l=n.find(g=>g.kode===a.aktivitetType),o=(l==null?void 0:l.kode)===ye.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:s+1,label:o||"",aktivitetTypeKode:a.aktivitetType,arbeidsforholdRef:a.arbeidsforholdRef,arbeidsgiverReferanse:a.arbeidsgiverReferanse}}),Ym=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:a,setValgtAktivitetIndex:s})=>{const l=Z(),o=r==null?void 0:r.opptjeningFom,g=r==null?void 0:r.opptjeningTom,m=I.useMemo(()=>vN(e,a,l),[e]),v=I.useMemo(()=>mN(e,n,m,o,g),[n]),f=I.useCallback(b=>{const y=v.find(j=>j.id===b);y&&s(y.id)},[v,s]);return!o||!g?null:i.jsxs(we,{startDate:A(o).subtract(1,"months").toDate(),endDate:A(g).add(10,"days").toDate(),children:[i.jsxs(we.Pin,{date:A(o).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"OpptjeningTidslinje.StartDato"})}),i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:o})})]}),i.jsxs(we.Pin,{date:A(g).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"OpptjeningTidslinje.SluttDato"})}),i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:g})})]}),m.map(b=>i.jsx(we.Row,{label:b.label,icon:uN[b.aktivitetTypeKode],children:v.filter(y=>y.radId===b.id).map(y=>i.jsx(we.Period,{start:y.start,end:y.end,status:y.status,icon:kN[y.status],onSelectPeriod:()=>f(y.id),isActive:t===y.id,statusLabel:b.label},y.id))},b.id))]})};Ym.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const pN="_container_ivkzi_1",fN={container:pN},yN=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(i.jsx(u,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(i.jsx(u,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(i.jsx(u,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},bN=e=>A(e).add(1,"days").format(xe),cN=(e,n)=>[...e].sort((r,t)=>{var l,o;const a=(l=n.find(g=>g.kode===r.aktivitetType))==null?void 0:l.navn,s=(o=n.find(g=>g.kode===t.aktivitetType))==null?void 0:o.navn;return a&&s?a.localeCompare(s):0}),$g=e=>Ht(e,1),jN=(e,n)=>n?e.filter(r=>A(n.opptjeningFom).isBefore($g(r.opptjeningTom))).filter(r=>A(r.opptjeningFom).isBefore($g(n.opptjeningTom))):[],Cm=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:a,alleMerknaderFraBeslutter:s,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:g,alleKodeverk:m}=En(),v=a.length>0,f=m[on.OPPTJENING_AKTIVITET_TYPE],b=e&&r?cN(jN(e,r),f):[],y=b.map(W=>({erGodkjent:W.erGodkjent,begrunnelse:W.begrunnelse??""})),{mellomlagretFormData:j,setMellomlagretFormData:R}=Mn(),[h,N]=I.useState(j??y),E=b.findIndex(W=>W.erGodkjent===void 0),P=b.length>0?0:void 0,[q,S]=I.useState(E!==-1?E:P),[D,F]=I.useState(!1);I.useEffect(()=>()=>{R(h)},[h]),I.useEffect(()=>{const W=h.findIndex(se=>se.erGodkjent===void 0);S(W!==-1?W:void 0)},[h]);const z=()=>{F(!0);const W=b.map((se,Re)=>({arbeidsforholdRef:se.arbeidsforholdRef,arbeidsgiverReferanse:se.arbeidsgiverReferanse,opptjeningFom:se.opptjeningFom,opptjeningTom:se.opptjeningTom,aktivitetType:se.aktivitetType,erGodkjent:h[Re].erGodkjent,begrunnelse:h[Re].begrunnelse})).filter(se=>se.begrunnelse);o({opptjeningsaktiviteter:W,kode:le.VURDER_PERIODER_MED_OPPTJENING}).then(()=>F(!1))},J=()=>{q!==void 0&&q<b.length-1&&S(q+1)},_=()=>{q!==void 0&&q>0&&S(q-1)},G=W=>{q!==void 0&&N(se=>Object.assign([],se,{[q]:W}))},w=()=>S(void 0),U=()=>{S(void 0)},re=h.some(W=>W.erGodkjent===null||W.erGodkjent===void 0);return i.jsxs(V,{gap:"6",className:fN.container,children:[l&&i.jsx(rr,{children:yN(b)}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:bN(r==null?void 0:r.opptjeningTom)})})]}),i.jsx(Ym,{opptjeningPerioder:b,formVerdierForAlleAktiviteter:h,opptjeningAktivitetTypes:f,setValgtAktivitetIndex:S,valgtAktivitetIndex:q,fastsattOpptjening:r}),q!==void 0&&i.jsx(Hm,{valgtOpptjeningAktivitet:b[q],valgteFormValues:h[q],readOnly:g,opptjeningAktivitetTyper:f,avbrytAktivitet:w,oppdaterAktivitet:G,fastsattOpptjening:r,velgNesteAktivitet:J,velgForrigeAktivitet:_,harAksjonspunkt:v,alleMerknaderFraBeslutter:s,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:U},q),v&&b.length>0&&i.jsx("div",{children:i.jsx(ae,{size:"small",variant:"primary",onClick:z,disabled:q!==void 0||D||g||re,loading:D,type:"button",children:i.jsx(u,{id:"OpptjeningFaktaForm.Confirm"})})})]})};Cm.__docgenInfo={description:`OpptjeningFaktaPanel

Vises faktapanelet for opptjeningsvilkåret. For Foreldrepenger vises dette alltid. Finnes
det aksjonspunkt kan nav-ansatt endre opplysninger før en går videre i prosessen.`,methods:[],displayName:"OpptjeningFaktaPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},opptjeningAktiviteter:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const hN={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},AN=Ke(hN),zm=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,a=(e==null?void 0:e.ferdiglignetNæring)||[];return i.jsx(Ge,{value:AN,children:i.jsx(Cm,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:a})})};zm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const IN=[le.VURDER_PERIODER_MED_OPPTJENING],TN=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r}=I.use(Sn),t=ar(IN),a=qn(r),{data:s,isFetching:l}=Pn(a.opptjeningOptions(r));return i.jsx(sr,{standardPanelProps:t,faktaPanelKode:tr.OPPTJENINGSVILKARET,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:r.vilkår.some(o=>o.vilkarType===Xn.OPPTJENINGSVILKARET)&&r.vilkår.some(o=>o.vilkarType===Xn.MEDLEMSKAPSVILKARET&&o.vilkarStatus===Lu.OPPFYLT),children:l?i.jsx(Nn,{}):i.jsx(zm,{opptjening:s,arbeidsgiverOpplysningerPerId:e})})};TN.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Fi=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Fi||{});const RN="_boks_kspkv_1",EN="_aksjonspunkt_kspkv_9",NN="_harBorderTop_kspkv_13",Jm={boks:RN,aksjonspunkt:EN,harBorderTop:NN},PN=Ou.bind(Jm),Wm=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>i.jsx("div",{className:PN(Jm.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});Wm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const qN="_inline_17flc_1",SN="_phoneIcon_17flc_5",xN="_docIcon_17flc_11",gi={inline:qN,phoneIcon:SN,docIcon:xN},Zm=({saksnummer:e,inntektsmelding:n})=>i.jsxs(V,{gap:"4",children:[i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(T,{size:"small",children:M(n.inntektPrMnd)})]}),i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(T,{size:"small",children:i.jsx(u,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),n.refusjonPrMnd&&i.jsxs(K,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(T,{size:"small",children:M(n.refusjonPrMnd)})]}),i.jsxs(Qr,{href:Wi(e,n.journalpostId,n.dokumentId),target:"_blank",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:gi.inline,children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx($u,{className:gi.docIcon})]}),i.jsxs(K,{gap:"4",align:"center",children:[i.jsx(Uu,{className:gi.phoneIcon}),i.jsxs(V,{gap:"1",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(ke,{children:n.kontaktpersonNavn}),i.jsx(ke,{children:i.jsx(u,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})]})]})]});Zm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const BN="_inline_p7hb9_1",FN="_arrow_p7hb9_5",ui={inline:BN,arrow:FN},Xm=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=I.useState(!1),a=I.useMemo(()=>_N(n,e),[e]);return i.jsxs(i.Fragment,{children:[e.length>0&&i.jsxs(V,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsposterPanel.Inntekter"})}),i.jsx(V,{gap:"1",width:"150px",children:a.filter((s,l)=>r?!0:l<3).map(s=>i.jsxs(K,{justify:"space-between",children:[i.jsxs(K,{gap:"1",children:[i.jsx(T,{size:"small",children:i.jsx(u,{id:`InntektsposterPanel.${A(s.fom).month()+1}`})}),i.jsx(T,{size:"small",children:A(s.fom).year()})]},s.fom),i.jsx(T,{size:"small",children:M(s.beløp)})]},s.fom))}),i.jsxs(Qr,{onClick:s=>{s.preventDefault(),t(!r)},href:"",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:ui.inline,children:i.jsx(u,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?i.jsx(Ki,{className:ui.arrow}):i.jsx(aa,{className:ui.arrow})]})]}),e.length===0&&i.jsx(B,{size:"small",children:i.jsx(u,{id:"InntektsposterPanel.IngenInntekt"})})]})},_N=(e,n)=>{const t=A(e).startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),g=n.find(m=>A(m.fom).startOf("month").format(xe)===o);s.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return s};Xm.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const ON="_hjelpetekst_dvkw1_1",DN="_image_dvkw1_5",wN="_hjelpetekstInnhold_dvkw1_9",VN="_exclamationmarkIcon_dvkw1_14",MN="_checkmarkIcon_dvkw1_21",Or={hjelpetekst:ON,image:DN,hjelpetekstInnhold:wN,exclamationmarkIcon:VN,checkmarkIcon:MN},GN="arbeidsforhold",Qm=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:a,arbeidsgiverOpplysningerPerId:s,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:g,alleKodeverk:m})=>{var D;const v=Z(),{inntektsmeldinger:f,inntekter:b}=a,y=t[e],j=f.find(F=>LN(y,F)),R=(D=b.find(F=>F.arbeidsgiverIdent===y.arbeidsgiverIdent))==null?void 0:D.inntekter,h=t.filter(F=>F.arbeidsgiverIdent===y.arbeidsgiverIdent).length>1,N=s[y.arbeidsgiverIdent],E=I.useRef(null),[P,q]=I.useState(!1),S=I.useCallback(()=>q(F=>!F),[]);return i.jsx(Wm,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:i.jsxs(K,{gap:"6",children:[!o&&i.jsx($i,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:Or.checkmarkIcon}),o&&i.jsx(Ir,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:Or.exclamationmarkIcon}),i.jsxs(V,{gap:"4",width:"90%",children:[i.jsxs(K,{justify:"space-between",children:[i.jsxs("div",{children:[i.jsx(B,{size:"small",children:N.navn}),y.arbeidsgiverIdent&&i.jsxs(ke,{children:["(",N.erPrivatPerson&&N.fødselsdato?i.jsx(Ae,{dateString:N.fødselsdato}):y.arbeidsgiverIdent,")"]})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdFieldArray.Periode"})}),i.jsxs(T,{size:"small",children:[y&&i.jsx($e,{dateStringFom:y.fom,dateStringTom:y.tom!==Be?y.tom:void 0}),!y&&"-"]})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdFieldArray.Kilde"})}),i.jsx(T,{size:"small",children:i.jsx(u,{id:y?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),i.jsxs(T,{size:"small",children:[(j==null?void 0:j.motattDato)&&i.jsx(Ae,{dateString:j.motattDato}),!(j!=null&&j.motattDato)&&i.jsx(u,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),h&&y.eksternArbeidsforholdId&&i.jsxs(K,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdFieldArray.Id"})}),i.jsxs("div",{children:[y.eksternArbeidsforholdId.length<50&&i.jsx(T,{size:"small",children:y.eksternArbeidsforholdId}),y.eksternArbeidsforholdId.length>=50&&i.jsx(wu,{content:KN(y.eksternArbeidsforholdId),placement:"bottom",children:i.jsx(T,{size:"small",children:`${y.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),y.stillingsprosent&&i.jsxs(K,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),i.jsx(T,{size:"small",children:`${y.stillingsprosent}%`})]}),y.permisjonOgMangel&&i.jsx(K,{gap:"2",children:i.jsxs(i.Fragment,{children:[i.jsx(B,{size:"small",children:`${Hr(m,on.PERMISJONSBESKRIVELSE_TYPE,y.permisjonOgMangel.type)} 100%`}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:y.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),j&&i.jsx(Zm,{saksnummer:r,inntektsmelding:j}),!j&&R&&i.jsx(Xm,{inntektsposter:R,skjæringstidspunkt:g}),i.jsx(Ne,{name:`${GN}.${e}.permisjonStatus`,label:i.jsxs(K,{gap:"2",children:[i.jsx(u,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),i.jsxs("div",{className:Or.image,children:[i.jsx(ae,{ref:E,type:"button",variant:"tertiary",onClick:S,icon:i.jsx(Zi,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),i.jsx(vr,{open:P,onClose:S,anchorEl:E.current,className:Or.hjelpetekst,children:i.jsx(vr.Content,{className:Or.hjelpetekstInnhold,children:i.jsxs(V,{gap:"2",children:[i.jsx(T,{children:i.jsx(u,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),i.jsx(T,{children:i.jsx(u,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),i.jsx(T,{children:i.jsx(u,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),i.jsx(T,{children:i.jsx(u,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[Q],isReadOnly:l,radios:[{label:v.formatMessage({id:j?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Fi.IKKE_BRUK_PERMISJON},{label:v.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Fi.BRUK_PERMISJON}]})]})]})},n)},LN=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),KN=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")};Qm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const $N="arbeidsforhold",ev=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:g}=Ie(),{fields:m}=en({control:g,name:$N});return i.jsx("div",{children:m.map((v,f)=>i.jsx(Qm,{fieldId:v.id,index:f,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o},v.id))})};ev.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const UN=yn(3),HN=bn(1500),YN=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),nv=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:a,isReadOnly:s,alleKodeverk:l}=En(),o=I.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(R=>{var h;return(h=R.permisjonOgMangel)==null?void 0:h.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:g}=o,m=I.useMemo(()=>[...g].sort(YN(n)),[g,n]),v=I.useMemo(()=>({arbeidsforhold:m.map(R=>{var h;return{permisjonStatus:(h=R.permisjonOgMangel)==null?void 0:h.permisjonStatus}}),begrunnelse:r[0].begrunnelse??""}),[m]),{mellomlagretFormData:f,setMellomlagretFormData:b}=Mn(),y=Ye({defaultValues:f||v});I.useEffect(()=>()=>{b(y.getValues())},[]);const j=r.some(R=>R.status===Zn.OPPRETTET);return i.jsxs(V,{gap:"8",children:[i.jsxs(K,{justify:"space-between",children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"PermisjonFaktaPanel.Overskrift"})}),i.jsx(T,{size:"small",children:i.jsx(u,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ve(o.skjæringstidspunkt)}})})]}),j&&i.jsx(rr,{children:i.jsx(u,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),i.jsx(Ce,{formMethods:y,onSubmit:R=>a({kode:le.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:R.arbeidsforhold.map((h,N)=>({internArbeidsforholdId:m[N].internArbeidsforholdId,arbeidsgiverIdent:m[N].arbeidsgiverIdent,permisjonStatus:h.permisjonStatus})),begrunnelse:R.begrunnelse}),children:i.jsxs(V,{gap:"6",children:[i.jsx(ev,{saksnummer:t.saksnummer,sorterteArbeidsforhold:m,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:j,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),i.jsx(Qe,{label:i.jsx(B,{size:"small",children:i.jsx(u,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[Q,UN,HN,cn],maxLength:1500,readOnly:s}),!s&&i.jsx("div",{children:i.jsx(ae,{size:"small",variant:"primary",disabled:!y.formState.isDirty||y.formState.isSubmitting,loading:y.formState.isSubmitting,children:i.jsx(u,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};nv.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const CN={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i Aa-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},zN=Ke(CN),rv=e=>i.jsx(Ge,{value:zN,children:i.jsx(nv,{...e})});rv.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Ug=[le.VURDER_ARBEIDSFORHOLD_PERMISJON],JN=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r}=I.use(Sn),t=ar(Ug),a=qn(r),{data:s}=Pn(a.arbeidOgInntektOptions(r));return i.jsx(sr,{standardPanelProps:t,faktaPanelKode:tr.PERMISJON,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Ug.some(l=>ua(l,r.aksjonspunkt)),children:s?i.jsx(rv,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(Nn,{})})};JN.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ge=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ge||{});function tv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hg={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function WN(){if(Yg)return Dr;Yg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Dr.Fragment=n,Dr.jsx=r,Dr.jsxs=r,Dr}var Cg;function ZN(){return Cg||(Cg=1,Hg.exports=WN()),Hg.exports}var d=ZN(),zg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Jg;function XN(){return Jg||(Jg=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(zg)),zg.exports}var QN=XN();const eP=tv(QN);var Aa=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(Aa||{}),Ia=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ia||{}),L=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(L||{});Ia.BRUKERS_ANDEL;Ia.FRILANS;Ia.EGEN_NÆRING;const nP=["FL","AT_FL","AT_FL_SN","FL_SN"],rP=["AT","AT_FL","AT_FL_SN","AT_SN"],tP=["SN","FL_SN","AT_FL_SN","AT_SN"],aP=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],sP=["DP","SP_AV_DP","PSB_AV_DP","AAP"],iP=["KUN_YTELSE"],lP=["MS"],av=e=>sP.some(n=>n===e),dP=e=>iP.some(n=>n===e),sv=e=>nP.some(n=>n===e),iv=e=>rP.some(n=>n===e),lv=e=>tP.some(n=>n===e),oP=e=>aP.some(n=>n===e),gP=e=>lP.some(n=>n===e);var dv=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(dv||{});const Ta=e=>e==="OPPR";var ov=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(ov||{}),pn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(pn||{}),_i=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(_i||{}),Oi=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Oi||{}),mr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(mr||{}),gv=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(gv||{}),Bl=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(Bl||{}),fe=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(fe||{}),uv=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(uv||{}),hn=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(hn||{});const Wg=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Ra=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${A(t).format(te)})${Wg(n)}`:r:s?`${r} (${s})${Wg(n)}`:r},Zg=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[Aa.OPPTJENING_AKTIVITET_TYPE].find(t=>{var a;return t.kode===((a=e.arbeidsforhold)==null?void 0:a.arbeidsforholdType)}))==null?void 0:r.navn)||""},Di=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?Ra(t,e.arbeidsforhold.eksternArbeidsforholdId):Zg(e,r)}return Zg(e,r)},uP="_aksjonspunktBehandlerBorder_13dyh_1",kP="_aksjonspunktBehandlerHeader_13dyh_10",mP="_aksjonspunktBehandlerImageCol_13dyh_18",vP="_aksjonspunktBehandlerTextCol_13dyh_24",pP="_aksjonspunktBehandlerNoBorder_13dyh_27",fP="_verticalLine_13dyh_40",yP="_verticalAlignMiddle_13dyh_47",bP="_inputPadding_13dyh_54",cP="_inntektTableTB_13dyh_65",jP="_rowSpacer_13dyh_69",hP="_textAreaWrapperHeigh_13dyh_112",AP="_dynamiskKolonne_13dyh_119",IP="_textAreaStyle_13dyh_123",TP="_atflAvvikAktivitet_13dyh_129",RP="_atflAvvikInntekt_13dyh_133",EP="_breddeInntekt_13dyh_139",NP="_warningIcon_13dyh_142",PP="_aksjonspunktWrapper_13dyh_148",de={aksjonspunktBehandlerBorder:uP,aksjonspunktBehandlerHeader:kP,aksjonspunktBehandlerImageCol:mP,aksjonspunktBehandlerTextCol:vP,aksjonspunktBehandlerNoBorder:pP,verticalLine:fP,verticalAlignMiddle:yP,inputPadding:bP,inntektTableTB:cP,rowSpacer:jP,textAreaWrapperHeigh:hP,dynamiskKolonne:AP,textAreaStyle:IP,atflAvvikAktivitet:TP,atflAvvikInntekt:RP,breddeInntekt:EP,warningIcon:NP,aksjonspunktWrapper:PP},qP=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,kv=e=>e?e.filter(n=>n.aktivitetStatus===L.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>qP(n)):[],SP=(e,n,r,t,a,s,l)=>e.map((o,g)=>d.jsxs(Y,{className:de.verticalAlignMiddle,children:[d.jsx(x,{className:de.atflAvvikAktivitet,children:d.jsx(T,{size:"small",children:Di(o,t,n)})}),d.jsx(x,{className:de.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:r?de.inputPadding:void 0,children:d.jsx(ce,{name:`${s}.${a}.inntekt${g}`,validate:l?[Q,nn(178956970)]:[],readOnly:r,parse:Oe,className:de.breddeInntekt,isEdited:r&&(!!o.overstyrtPrAar||o.overstyrtPrAar===0)})})})]},`index${g+1}`)),Fl=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=kv(n);return d.jsx(d.Fragment,{children:SP(o,r,e,t,a,s,l)})};Fl.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===L.ARBEIDSTAKER)&&(r=kv(n).map(({andelsnr:t},a)=>{const s=e[`inntekt${a}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:s===void 0||s===""?0:pe(s),andelsnr:t}})),r};const xP="_avsnittOverskrift_3qwr0_1",BP="_venstreKolonne_3qwr0_5",FP="_hoyreKolonne_3qwr0_8",_P="_panelLeft_3qwr0_11",OP="_panelRight_3qwr0_21",DP="_storSpace_3qwr0_32",wP="_semiBoldText_3qwr0_35",VP="_redError_3qwr0_41",MP="_tabellAktivitet_3qwr0_44",GP="_tabellInntekt_3qwr0_54",LP="_tagMargin_3qwr0_85",$={avsnittOverskrift:xP,venstreKolonne:BP,hoyreKolonne:FP,panelLeft:_P,panelRight:OP,storSpace:DP,semiBoldText:wP,næringEndringBeskrivelse:"_næringEndringBeskrivelse_3qwr0_38",redError:VP,tabellAktivitet:MP,tabellInntekt:GP,næringOpplysningNavn:"_næringOpplysningNavn_3qwr0_66",næringOpplysningInntekt:"_næringOpplysningInntekt_3qwr0_69",næringOpplysningOrgnr:"_næringOpplysningOrgnr_3qwr0_73",næringOpplysningDato:"_næringOpplysningDato_3qwr0_76",tagMargin:LP},Xg="inntektField",KP=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(mr.ARBEIDSFORHOLD_AVSLUTTET),Ea=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!KP(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},jr=(e,n)=>e.arbeidsforhold?`${Xg}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${Xg}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,Na=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===L.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],mv=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},$P=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return a?Ra(a,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[Aa.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},vv=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),UP=(e,n,r)=>{const t=Na(e),a={};return t.forEach(s=>{if(!s.arbeidsforhold)return;const l=mv(s.arbeidsforhold),o=vv();o.tabellInnhold=$P(s.arbeidsforhold,n,r),o.erTidsbegrenset=s.erTidsbegrensetArbeidsforhold!==void 0?s.erTidsbegrensetArbeidsforhold:!1,a[l]=[o]}),a},_l=e=>e.sort((n,r)=>A(n.beregningsgrunnlagPeriodeFom).diff(A(r.beregningsgrunnlagPeriodeFom)))[0],pv=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===L.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var a,s,l,o;return((a=t.arbeidsforhold)==null?void 0:a.arbeidsgiverIdent)===((s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Ol=(e,n)=>{var r;const t=_l(n);return!!((r=pv(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},HP=(e,n,r)=>{const t=Ea(e),a=e[0].beregningsgrunnlagPeriodeFom,s=UP(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===a;Na(l).forEach(g=>{const m=Ol(g,e),v=mv(g.arbeidsforhold),f=vv();f.tabellInnhold=g.overstyrtPrAar!==void 0&&g.overstyrtPrAar!==null?M(g.overstyrtPrAar):"",f.erTidsbegrenset=!1,f.isEditable=m?!0:o,f.inputfieldKey=jr(g,l),s[v].push(f)})}),s},YP=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",className:$.semiBoldText,children:M(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),CP=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:Ve(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),zP=(e,n,r,t,a,s,l)=>{const o=[];return o.push(CP(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((g,m)=>d.jsx(C.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${g.periodeFom}`)})},`Col_Tittel_${g.periodeFom}`)},`PeriodeWrapper${m+1}`))]},"Tabletop")),Object.keys(e).forEach(g=>{const m=e[g];o.push(d.jsx("tr",{children:m.map(v=>v.isEditable?d.jsx(C.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?de.adjustedField:void 0,children:d.jsx(ce,{name:`${s}.${a}.${v.inputfieldKey}`,validate:l?[Q,nn(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:Oe,className:de.breddeInntekt})})},`Col-${v.inputfieldKey}`)},`key${v.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",children:v.tabellInnhold})},v.tabellInnhold))},g))}),o.push(d.jsx("tr",{className:de.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(YP(t)),o},JP=(e,n,r,t)=>{const a=[];return e.length<1||Ea(e).forEach(s=>{const l=Na(s).map(o=>{const g=jr(o,s),m=n.watch(`${t}.${r}.${g}`);return m===void 0||m===""?0:pe(m)}).reduce((o,g)=>o+g);a.push({brutto:l,periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom})}),a},It=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=HP(n,r,t),g=n.some(f=>{var b;return(b=f.beregningsgrunnlagPrStatusOgAndel)==null?void 0:b.some(y=>y.aktivitetStatus===L.ARBEIDSTAKER&&(!!y.overstyrtPrAar||y.overstyrtPrAar===0))}),m=Ie(),v=JP(n,m,a,s);return d.jsx("table",{className:de.inntektTableTB,children:d.jsx("tbody",{children:zP(o,e,g,v,a,s,l)})})};It.buildInitialValues=e=>{const n={},r=Ea(e),t=_l(e);return r.forEach(a=>{(a.beregningsgrunnlagPrStatusOgAndel?a.beregningsgrunnlagPrStatusOgAndel.filter(s=>s.aktivitetStatus===L.ARBEIDSTAKER):[]).forEach(s=>{if(Ol(s,e)){const l=M(s.overstyrtPrAar);n[jr(s,a)]=l||""}else{const l=pv(s,t),o=M(l==null?void 0:l.overstyrtPrAar);n[jr(s,a)]=o||""}})}),n};It.transformValues=(e,n)=>{const r=[],t=_l(n);return Ea(n).forEach(a=>{const s=Na(a),l=[];s.forEach(o=>{if(Ol(o,n)){const g=pe(e[jr(o,a)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}else{const g=pe(e[jr(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}}),r.push({periodeFom:a.beregningsgrunnlagPeriodeFom,periodeTom:a.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const WP="_colDevider_1att7_1",ZP={colDevider:WP},fn=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx(Y,{children:d.jsx("div",{style:{width:n},children:d.jsx(x,{children:d.jsx("div",{className:ZP.colDevider})})})})},fv=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,XP=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return Ra(r,e.arbeidsforhold.eksternArbeidsforholdId)},yv=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],QP=(e,n)=>{const r=XP(e,n),t=fv(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},eq=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},nq=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{yv(t).filter(a=>eq(a)).map(a=>QP(a,n)).forEach(a=>{r.some(({nøkkel:s})=>s===a.nøkkel)||r.push(a)})}),r},rq=(e,n)=>{const r=yv(e).find(t=>fv(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},tq=(e,n)=>{const r=[];return n.forEach(t=>{const a=rq(t,e.nøkkel);a&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:a,beløpPrMåned:a/12})}),r},aq=e=>{if(!e||e.length<2)return e;e.sort((t,a)=>A(t.fom).diff(A(a.fom)));const n=[];let r=A(e[0].fom);return e.forEach(t=>{if(!A(t.fom).isBefore(r)){const a=e.find(s=>A(s.fom).isAfter(t.fom)&&s.beløpPrÅr!==t.beløpPrÅr);if(a){const s=A(a.fom).subtract(1,"d");n.push({tom:s.format(xe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=s}else r=A(Be),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},sq=(e,n)=>{const r=nq(e,n);return r.forEach(t=>{const a=tq(t,e);aq(a).forEach(s=>t.naturalytelseEndringer.push(s))}),!r||r.length<1?void 0:{rader:r}},iq=e=>e.tom?`${Ve(e.fom)} - ${Ve(e.tom)}`:`${Ve(e.fom)} -`,lq=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=I.useMemo(()=>sq(e,n),[e]);return r?d.jsxs("div",{children:[d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(V,{gap:"0",children:[d.jsxs(K,{gap:"10",justify:"end",children:[d.jsx(ke,{style:{width:"70px"},children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{style:{width:"70px"},children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),r.rader.map(t=>d.jsxs("div",{children:[d.jsx(B,{size:"small",children:t.visningsnavn}),d.jsx(V,{gap:"1",children:t.naturalytelseEndringer.map(a=>d.jsxs(K,{justify:"space-between",children:[d.jsx(T,{size:"small",children:iq(a)}),d.jsxs(K,{gap:"10",children:[d.jsx(T,{size:"small",style:{width:"70px"},children:M(a.beløpPrMåned)}),d.jsx(B,{size:"small",style:{width:"70px"},children:M(a.beløpPrÅr)})]})]},t.nøkkel+a.fom))})]},t.nøkkel))]})]}):null},dq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,bv=e=>e?e.filter(n=>n.aktivitetStatus===L.ARBEIDSTAKER).filter(n=>dq(n)):[],oq=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(Ve(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(Ve(e.opphoersdato))),n.join(" ")},gq=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},Qg=e=>e.beregnetPrAar?e.beregnetPrAar:0,uq=(e,n,r)=>{const t=e.reduce((l,o)=>l+Qg(o),0),a=t?t/12:0,s=e.map((l,o)=>d.jsxs(C.Fragment,{children:[d.jsx(V,{gap:"2",children:d.jsxs(K,{justify:"space-between",children:[d.jsx(B,{size:"small",className:$.semiBoldText,children:Di(l,r,n)}),d.jsxs(K,{gap:"10",children:[d.jsx(T,{children:M(Qg(l)/12)}),d.jsx(B,{children:M(l.beregnetPrAar)})]})]})}),d.jsx(V,{gap:"2",children:d.jsxs(K,{gap:"2",children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(T,{children:gq(l.arbeidsforhold)}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(ke,{children:oq(l.arbeidsforhold)}),l.erTidsbegrensetArbeidsforhold&&d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})]})}),d.jsx(fn,{prosentBredde:100})]},`ArbInntektWrapper${Di(l,r,n)}${o+1}`));if(e.length>1){const l=d.jsx(V,{gap:"0",children:d.jsxs(K,{justify:"space-between",children:[d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"}),d.jsxs(K,{gap:"10",justify:"end",children:[d.jsx(T,{children:M(a)}),d.jsx(B,{children:M(t)})]})]})},"summary-row");s.push(l)}return s},Dl=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const a=bv(e);return!a||a.length===0?null:d.jsxs(V,{gap:"8",children:[d.jsxs(V,{gap:"2",children:[d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})}),d.jsxs(V,{gap:"1",children:[d.jsxs(K,{gap:"10",justify:"end",children:[d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(fn,{prosentBredde:100}),uq(a,t,r)]})]}),d.jsx(lq,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};Dl.buildInitialValues=e=>{const n=bv(e),r={};return n.forEach((t,a)=>{r[`inntekt${a}`]=M(t.overstyrtPrAar)||""}),r};var wi={exports:{}},kq=wi.exports,eu;function mq(){return eu||(eu=1,function(e,n){(function(r,t){e.exports=t(A)})(kq,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(wi)),wi.exports}var vq=mq();const Vi=tv(vq),pq=({option:e,style:n,height:r})=>{const t=I.useRef(null);return I.useEffect(()=>{let a;t.current!==null&&(a=_p(t.current));const s=()=>{a==null||a.resize()};return window.addEventListener("resize",s),()=>{a==null||a.dispose(),window.removeEventListener("resize",s)}},[]),I.useEffect(()=>{if(t.current!==null){const a=Op(t.current);a&&(a.setOption(e),(a==null?void 0:a.getWidth())===0&&(a==null||a.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},fq="_sammenligningGrafOppsummeringType_1dad0_4",yq="_sammenligningGrafOppsummeringInntekt_1dad0_7",bq="_readMore_1dad0_12",Hn={sammenligningGrafOppsummeringType:fq,sammenligningGrafOppsummeringInntekt:yq,readMore:bq},cq=[],jq="#99bdcd",hq="#c1b5d0",Aq="#C6C2BF",Iq=(e,n)=>{const r=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===pn.ARBEID).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),t=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===pn.FRILANS).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),a=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===pn.YTELSE).map(({beløp:s})=>s).reduce((s,l)=>s+l,0);return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:$.storSpace}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})})})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:Hn.sammenligningGrafOppsummeringType,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})})}),d.jsx(x,{className:Hn.sammenligningGrafOppsummeringInntekt,children:d.jsx(T,{size:"small",children:M(r)})})]}),d.jsx(fn,{prosentBredde:20})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:Hn.sammenligningGrafOppsummeringType,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})})}),d.jsx(x,{className:Hn.sammenligningGrafOppsummeringInntekt,children:d.jsx(T,{size:"small",children:M(t)})})]}),d.jsx(fn,{prosentBredde:20})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:Hn.sammenligningGrafOppsummeringType,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})})}),d.jsx(x,{className:Hn.sammenligningGrafOppsummeringInntekt,children:d.jsx(T,{size:"small",children:M(a)})})]}),d.jsx(fn,{prosentBredde:20})]})]})},Tq=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),ki=(e,n,r)=>{const t=[];for(let a=0;a<12;a+=1){const s=A(n,xe).add(a,"M").format("YYYYMM"),l=e.find(g=>A(g.fom,xe).format("YYYYMM")===s),o=Tq((l==null?void 0:l.inntekter)||[],r);t.push([o,s])}return t},Rq=()=>d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(ue,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})})})},"SamenenligningsGrunnlagOverskrift"),d.jsx(H,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(u,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})})})]}),mi=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),Eq=e=>({harFrilansinntekt:mi(e,pn.FRILANS),harArbeidsinntekt:mi(e,pn.ARBEID),harYtelseinntekt:mi(e,pn.YTELSE)}),Nq=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=Z(),t=(e==null?void 0:e.måneder)||cq,a=I.useMemo(()=>Eq(t),[t]),s=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=I.useMemo(()=>a.harArbeidsinntekt&&s?ki(t,s,pn.ARBEID):[],[a.harArbeidsinntekt,t,s]),o=I.useMemo(()=>a.harFrilansinntekt&&s?ki(t,s,pn.FRILANS):[],[a.harArbeidsinntekt,t,s]),g=I.useMemo(()=>a.harYtelseinntekt&&s?ki(t,s,pn.YTELSE):[],[a.harArbeidsinntekt,t,s]),m=I.useCallback(y=>y.value[0]>5e3?M(y.value[0])||"":y.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const v=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),f=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),b=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(Se,{size:"medium",header:Rq(),defaultOpen:!0,className:Hn.readMore,children:d.jsx(pq,{option:{tooltip:{trigger:"axis",formatter:y=>{const j=y,R=j[0].data,h=A(R[1]),N=h.locale(Vi).format("MMM"),E=h.format("YYYY"),P=`${N.charAt(0).toUpperCase()+N.slice(1)} ${E}`,q=j.reduce((S,D)=>{const F=D.data;return S.concat(`${(D.marker||"")+(D.seriesName||"")}: ${M(F[0])}`)},[]).join("<br/>");return`${P}<br />${q}`},axisPointer:{type:"shadow"}},legend:{data:[v,f,b]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:y=>M(y)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:y=>{const j=A(y),R=j.format("MM")==="01"||j.format("MM")==="12",h=j.locale(Vi).format("MMM"),N=j.format("YYYY"),E=h.charAt(0).toUpperCase()+h.slice(1,3);return R?`${E}
${N}`:E}}},series:[{name:v,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:l},{name:f,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:o},{name:b,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:g}],color:[jq,hq,Aq]},height:350})}),Iq(t,a)]})},Pq=({alleAndeler:e})=>{var n;const r=e.find(s=>!s.erTilkommetAndel&&s.aktivitetStatus===L.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,a=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsxs(d.Fragment,{children:[d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsx(H,{fourPx:!0}),d.jsxs(Y,{className:$.rows,children:[d.jsx(x,{className:$.tabellAktivitet,children:a&&d.jsxs(T,{size:"small",children:[d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:$.semiBoldText,children:d.jsx(Ae,{dateString:a})})]})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(fn,{prosentBredde:100}),d.jsxs(Y,{className:$.rows,children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:t?M(t/12):0})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:t?M(t):0})})]})]})},qq=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===L.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})})})}),d.jsx(H,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:M(r)})})})]})},Sq=[],xq=(e,n,r)=>{var t,a,s;const l=r.find(f=>f.år===e),o=l&&((t=l.inntekter.find(f=>f.pgiType===_i.NÆRING))==null?void 0:t.beløp)||0,g=l&&((a=l.inntekter.find(f=>f.pgiType===_i.LØNN))==null?void 0:a.beløp)||0,m=o+g,v=(s=n.find(f=>f.årstall===e))==null?void 0:s.beløp;return d.jsxs(c.Row,{shadeOnHover:!0,children:[d.jsx(c.DataCell,{children:e}),d.jsx(c.DataCell,{align:"right",children:M(g)}),d.jsx(c.DataCell,{align:"right",children:M(o)}),d.jsx(c.DataCell,{align:"right",children:M(m)}),d.jsx(c.DataCell,{align:"right",children:M(v)})]},e)},Bq=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>xq(r,e,n)),Fq=e=>d.jsxs(c.Row,{shadeOnHover:!0,children:[d.jsx(c.DataCell,{children:d.jsx(B,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{align:"right",children:d.jsx(B,{children:M(e)})})]},"PGI-Oppsumert"),_q=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===L.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||Sq;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:a,pgiSnitt:s}=r;return d.jsxs(d.Fragment,{children:[d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(c,{children:[d.jsx(c.Header,{children:d.jsxs(c.Row,{children:[d.jsx(c.HeaderCell,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(c.Body,{children:[Bq(a,t),Fq(s)]})]})]})},Oq="_merTekstBorder_1w256_9",Dq={merTekstBorder:Oq},wq=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},nu=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${Ve(n)}-${Ve(r)} `:`${Ve(n)}-`},Vq=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},Mq=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},Gq=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,a=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",s=r?t:n;return s?d.jsx(B,{size:"small",className:$.semiBoldText,children:d.jsx(u,{id:a,values:{dato:Ve(s),b:sa}})}):null},Lq=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},Kq=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(T,{size:"small",className:Dq.merTekstBorder,children:e.begrunnelse}):null,$q=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,Uq=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})})}),d.jsx(x,{className:$.tabellAktivitet}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})})]}),d.jsx(fn,{prosentBredde:100}),r.næringer.map(t=>d.jsxs(C.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:$.næringOpplysningNavn,children:d.jsx(B,{size:"small",className:$.semiBoldText,children:Mq(t,n)})}),d.jsx(x,{className:$.næringOpplysningInntekt,children:$q(t)&&d.jsx(B,{size:"small",children:M(t.oppgittInntekt)})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:$.næringOpplysningOrgnr,children:d.jsx(T,{size:"small",children:t&&t.orgnr?t.orgnr:""})}),d.jsx(x,{className:$.næringOpplysningDato,children:nu(t)&&d.jsx(T,{size:"small",children:nu(t)})})]},`NaringsDetaljer${t.orgnr}`),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:wq(t)})})})}),d.jsx(Y,{children:d.jsx(x,{children:t.regnskapsførerNavn&&d.jsx(T,{size:"small",children:Vq(t)})})},`RevisorRad${t.orgnr}`),Lq(t)&&d.jsxs(d.Fragment,{children:[d.jsx(fn,{prosentBredde:100}),d.jsx(H,{twentyPx:!0}),Gq(t),d.jsx(H,{eightPx:!0}),d.jsx(Y,{className:$.næringEndringBeskrivelse,children:d.jsx(x,{children:Kq(t)})})]})]},`NaringsWrapper${t.orgnr}`))]}):null},Hq=e=>e.aktivitetStatus===L.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===L.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===L.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===L.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",Yq=e=>e===L.DAGPENGER,Cq=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(s=>av(s.aktivitetStatus)),a=t.length>1;return d.jsxs(d.Fragment,{children:[n.isKombinasjonsstatus&&d.jsxs(d.Fragment,{children:[d.jsx(H,{eightPx:!0}),d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsx(H,{eightPx:!0})]}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(fn,{prosentBredde:100}),t.map(s=>d.jsxs("div",{children:[d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(B,{size:"small",children:d.jsx(u,{id:Hq(s)})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(s.beregnetPrAar?s.beregnetPrAar/12:0)})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",className:a?"":$.semiBoldText,children:M(s.beregnetPrAar)})})]}),d.jsx(fn,{prosentBredde:100}),r&&Yq(s.aktivitetStatus)&&d.jsx(Y,{children:d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})})})]},s.aktivitetStatus))]})},zq=({bruttoPrAar:e})=>e||e===0?d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsxs(x,{children:[d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsx(H,{eightPx:!0})]})}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(e/12)})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:M(e)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Jq,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Wq}=ge,Zq=e=>e&&e.find(n=>n.definisjon===Jq||n.definisjon===Wq),Xq=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],Un=d.jsx("div",{className:$.storSpace}),Qq=(e,n,r,t,a,s,l,o)=>d.jsxs("div",{className:$.panelLeft,children:[n.isArbeidstaker&&d.jsx(Dl,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[Un,d.jsx(Pq,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[Un,d.jsx(Cq,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[Un,d.jsx(qq,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[Un,d.jsx(zq,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[Un,d.jsx(_q,{alleAndeler:e,inntektsgrunnlag:o}),Un,d.jsx(Uq,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:s})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[Un,d.jsx(Nq,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),er=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:a=void 0,arbeidsgiverOpplysningerPerId:s,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=Xq(n);return Qq(o,e,n,r,t,s,l,a)};er.buildInitialValues=e=>{const n=Zq(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};er.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:Fl.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?pe(e.inntektFrilanser):null});er.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:It.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?pe(e.inntektFrilanser):null});const eS="_kolBeskrivelse_1czvx_1",nS="_kolVerdi_1czvx_4",rS="_radNoBorder_1czvx_9",tS="_radDobbelLinje_1czvx_14",aS="_radEnkelLinje_1czvx_20",sS="_radTykkLinje_1czvx_24",be={kolBeskrivelse:eS,kolVerdi:nS,radNoBorder:rS,radDobbelLinje:tS,radEnkelLinje:aS,radTykkLinje:sS,kolVerdiRød:"_kolVerdiRød_1czvx_28",avslåttIkon:"_avslåttIkon_1czvx_38"},iS=260,cv={[L.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[L.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[L.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[L.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[L.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[L.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[L.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[L.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[L.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[L.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},ru=e=>{var n;return((n=cv[e.status])==null?void 0:n.rekkefølgePri)||100},lS=e=>{var n;return((n=cv[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},dS=()=>d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),oS=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),gS=(e,n)=>(n==null?void 0:n.ytelsetype)!==Bl.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/iS):e.dagsats||0,Yn=()=>d.jsx("div",{className:be.radEnkelLinje}),uS=(e,n)=>d.jsxs(K,{gap:"2",children:[d.jsx(up,{className:be.avslåttIkon}),d.jsx(T,{size:"small",className:be.avslåttIkon,children:d.jsx(u,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:M(e),b:sa}})})]}),kS=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===L.MIDLERTIDIG_INAKTIV),mS=(e,n,r,t)=>{const a=e.andeler.reduce((v,f)=>(f.inntektPlussNaturalytelse||0)+v,0);if(n.vilkarStatus===Oi.IKKE_VURDERT)return null;if(n.vilkarStatus===Oi.IKKE_OPPFYLT)return uS(r.grunnbeløp,kS(r));const s=r.grunnbeløp*6,l=a>s,o=r.dekningsgrad!==gv.HUNDRE,g=gS(e,r.ytelsesspesifiktGrunnlag),m=t&&(l||o);return d.jsxs(qu,{children:[m&&d.jsx(H,{fourtyPx:!0}),l&&d.jsxs(d.Fragment,{children:[Yn(),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:M(e.avkortetPrÅr)})})]}),Yn()]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(d.Fragment,{children:Yn()}),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:M(e.redusertPrÅr)})})]}),Yn()]}),d.jsx(H,{fourtyPx:!0}),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(B,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(B,{size:"medium",children:g})})]}),d.jsx("div",{className:be.radDobbelLinje})]})},vS=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const a=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,g)=>ru(o)-ru(g));const s=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(V,{gap:"5",children:[d.jsxs("div",{children:[n&&d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(ue,{size:"xsmall",children:d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:A(e.fom).format(te),tom:e.tom?A(e.tom).format(te):""}})})})}),d.jsx(H,{eightPx:!0})]}),e.andeler.map((o,g)=>d.jsxs(C.Fragment,{children:[g===0&&d.jsx(d.Fragment,{children:Yn()}),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:lS(o)})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(T,{size:"small",className:o.erFerdigBeregnet?"":be.kolVerdiRød,children:o.erFerdigBeregnet?M(o.inntekt):dS()})})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[Yn(),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:M(o.bortfaltNaturalytelse)})})]})]}),Yn()]},o.status)),a&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:M(oS(e.andeler))})})]}),d.jsx("div",{className:be.radTykkLinje})]})]}),l&&d.jsx(d.Fragment,{children:mS(e,r,t,s)})]})},pS=[mr.ARBEIDSFORHOLD_AVSLUTTET,mr.NATURALYTELSE_TILKOMMER,mr.NATURALYTELSE_BORTFALT],fS=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,yS=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,bS=(e,n)=>{switch(e){case L.ARBEIDSTAKER:case L.FRILANSER:return n.find(r=>r.definisjon===ge.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ge.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case L.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ge.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ge.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case L.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ge.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},cS=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,a=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-a:0},jS=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},hS=(e,n)=>{const r=e.filter(s=>fS(s)),t={};r.forEach(s=>{const l=t[s.aktivitetStatus];l?l.push(s):t[s.aktivitetStatus]=[s]});const a=[];return Object.keys(t).forEach(s=>{const l=t[s],o=bS(s,n),g=l.every(j=>jS(j)),m=l.reduce((j,R)=>yS(R)+j,0),v=l.reduce((j,R)=>cS(R)+j,0),f=(m||0)+(v||0),b=!!o&&Ta(o.status),y=g&&!b;a.push({inntekt:m,bortfaltNaturalytelse:v,inntektPlussNaturalytelse:f,erFerdigBeregnet:y,status:s})}),a},AS=e=>e.some(n=>pS.includes(n)),IS=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(a=>a.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!a.periodeAarsaker&&AS(a.periodeAarsaker)).map(a=>a.beregningsgrunnlagPeriodeFom).sort((a,s)=>new Date(a).getTime()-new Date(s).getTime()),t=[];for(let a=0;a<r.length;a+=1){const s=r[a],l=a+1<r.length?A(r[a+1]).subtract(1,"day").format(xe).toString():void 0,o=n.find(y=>y.beregningsgrunnlagPeriodeFom===s),g=(o==null?void 0:o.periodeAarsaker)||[],m=hS((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),v=o==null?void 0:o.redusertPrAar,f=o==null?void 0:o.avkortetPrAar,b=o==null?void 0:o.dagsats;t.push({fom:s,tom:l,årsak:g,andeler:m,redusertPrÅr:v,avkortetPrÅr:f,dagsats:b})}return t},TS=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=I.useMemo(()=>IS(e),[e]),t=r.length>1;return d.jsxs("div",{className:$.panelRight,children:[d.jsx(ue,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(H,{eightPx:!0}),r.map(a=>d.jsxs("div",{children:[d.jsx(vS,{tabellData:a,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e}),d.jsx(H,{fourtyPx:!0})]},a.fom))]})},RS=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,ES=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>RS(n)).reduce((n,r)=>n+r,0):0,NS=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,tu=(e,n)=>e>n,PS=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=ES(e),t=NS(n);return d.jsx("div",{children:d.jsxs(V,{gap:"4",children:[d.jsx(T,{size:"small",children:d.jsx(u,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})}),d.jsxs(c,{children:[d.jsx(c.Header,{children:d.jsxs(c.Row,{children:[d.jsx(c.HeaderCell,{scope:"col"}),d.jsx(c.HeaderCell,{scope:"col",children:d.jsx(u,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})}),d.jsx(c.HeaderCell,{scope:"col",children:d.jsx(u,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),d.jsx(c.Body,{children:d.jsxs(c.Row,{children:[d.jsx(c.DataCell,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(c.DataCell,{children:d.jsx(T,{size:"small",children:M(r)})}),d.jsx(c.DataCell,{children:d.jsx(T,{size:"small",children:M(t)})})]})})]}),d.jsxs(T,{size:"small",children:[tu(r,t)&&d.jsx(u,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!tu(r,t)&&d.jsx(u,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]})})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:jv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:wl,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:hv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Av,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Iv}=ge,qS=(e,n)=>{switch(e.definisjon){case jv:return n.find(r=>r.sammenligningsgrunnlagType===fe.ATFLSN||r.sammenligningsgrunnlagType===fe.SN);case wl:return n.find(r=>r.sammenligningsgrunnlagType===fe.MIDLERTIDIG_INAKTIV);case hv:case Av:return n.find(r=>r.sammenligningsgrunnlagType===fe.ATFLSN||r.sammenligningsgrunnlagType===fe.AT_FL||r.sammenligningsgrunnlagType===fe.AT||r.sammenligningsgrunnlagType===fe.FL);case Iv:return;default:return}},SS=(e,n)=>{const r=qS(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},au=e=>e&&e.length>0,xS=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],BS={[hv]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[Av]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[Iv]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[wl]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},FS=(e,n)=>e.definisjon===jv?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":BS[e.definisjon],_S=(e,n,r)=>{var t;const a=r.find(l=>l.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE),s=!!((t=a==null?void 0:a.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsxs("div",{children:[d.jsx(rr,{children:e.map(l=>d.jsx(B,{children:d.jsx(u,{id:FS(l,s||l.definisjon===wl),values:{verdi:SS(l,n),b:sa,br:d.jsx("br",{})}})},l.definisjon))}),d.jsx(H,{thirtyTwoPx:!0})]})},OS=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],a=e.filter(l=>Ta(l.status));if(!(au(a)&&au(t)))return null;const s=xS(n);return d.jsxs(d.Fragment,{children:[d.jsx(H,{eightPx:!0}),_S(a,s,t)]})},DS=e=>e.some(n=>n.aktivitetStatus===L.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),Vl=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:a})=>d.jsxs(Y,{className:de.verticalAlignMiddle,children:[d.jsx(x,{className:de.atflAvvikAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})})}),d.jsx(x,{className:de.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:e?de.inputPadding:void 0,children:d.jsx(ce,{name:`${r}.${n}.inntektFrilanser`,validate:a?[Q,nn(178956970)]:void 0,readOnly:e,parse:Oe,className:de.breddeInntekt,isEdited:e&&DS(t)})})})]});Vl.buildInitialValues=e=>{const n=e.length>0?M(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const Tv={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},wS=Ke(Tv),VS=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,MS=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:a,onClick:s,hasEmptyRequiredFields:l})=>e?null:d.jsx(ae,{variant:"primary",size:"small",loading:r,disabled:VS(t,r,n,l),onClick:s||_u,type:s?"button":"submit",children:a||wS.formatMessage({id:"SubmitButton.ConfirmInformation"})}),Rv=4e3,GS=bn(Rv),LS=yn(3),Ml="fastsettBeregningsgrnunnlagSNBegrunnelse",Gl="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:KS}=ge,Nr=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:a,avklaringsbehov:s})=>{const l=Z();return d.jsxs(d.Fragment,{children:[r&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{className:de.verticalAlignMiddle,children:[d.jsx(x,{className:de.dynamiskKolonne,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})})}),d.jsx(x,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?de.inputPadding:void 0,children:d.jsx(ce,{name:`${a}.${t}.${Gl}`,validate:[Q,nn(178956970)],parse:Oe,className:de.breddeInntekt,isEdited:e&&n,readOnly:e})})})]}),d.jsx(H,{eightPx:!0})]}),d.jsx(H,{sixteenPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsxs("div",{id:"readOnlyWrapper",className:e?de.verticalLine:de.textAreaWrapperHeigh,children:[d.jsx(Qe,{name:`${a}.${t}.${Ml}`,label:d.jsx(u,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:[Q,GS,LS,cn],isEdited:e&&n,maxLength:Rv,readOnly:e,description:l.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:o=>o.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(xn,{ident:s==null?void 0:s.vurdertAv,date:s==null?void 0:s.vurdertTidspunkt})]})})})]})};Nr.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(a=>a.definisjon===KS);return{[Gl]:r?M(r.overstyrtPrAar):void 0,[Ml]:t&&t.begrunnelse?t.begrunnelse:void 0}};Nr.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[Ml],bruttoBeregningsgrunnlag:pe(e[Gl])});const Ev=4e3,$S=bn(Ev),US=yn(3),Ll="varigEndringNyoppstartetBegrunnelse",Kl="erVarigEndret",$l="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:HS,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:YS}=ge,CS=e=>e?d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),Tt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:a,formName:s,isAksjonspunktClosed:l,avklaringsbehov:o})=>{let g=d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),m=d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(g=d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),m=d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(g=d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),m=d.jsx(u,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let v="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(v="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(v="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const f=Z(),b=Ie().watch(s)[a].erVarigEndret,y=[{value:"false",label:g},{value:"true",label:m}];return d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(Ne,{name:`${s}.${a}.${Kl}`,validate:[Q],label:f.formatMessage({id:v}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:y,isTrueOrFalseSelection:!0})})}),b&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{className:de.verticalAlignMiddle,children:[d.jsx(x,{className:de.dynamiskKolonne,children:d.jsx(T,{size:"small",children:CS(r)})}),d.jsx(x,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?de.inputPadding:void 0,children:d.jsx(ce,{name:`${s}.${a}.${$l}`,validate:[Q,nn(178956970)],parse:Oe,className:de.breddeInntekt,readOnly:e,isEdited:e&&l})})})]}),d.jsx(H,{sixteenPx:!0})]}),d.jsxs(d.Fragment,{children:[d.jsx(H,{sixteenPx:!0}),d.jsx(Y,{children:d.jsxs(x,{children:[d.jsx(Qe,{name:`${s}.${a}.${Ll}`,label:d.jsx(u,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[Q,$S,US,cn],maxLength:Ev,readOnly:e,description:f.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:j=>j.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(xn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})]})};Tt.buildInitialValues=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||a.aktivitetStatus===L.BRUKERS_ANDEL),t=n.find(a=>a.definisjon===HS||a.definisjon===YS);if(t){const a=Ta(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[Kl]:a,[Ll]:t.begrunnelse?t.begrunnelse:"",[$l]:r?M(r.overstyrtPrAar):void 0}}return{}};Tt.transformValues=e=>{const n=e[Kl];return{begrunnelse:e[Ll],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?pe(e[$l]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ul,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:zS,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Nv}=ge,Pv=(e,n)=>n.some(r=>r.definisjon===e),JS=e=>e&&(e.definisjon===zS||e.definisjon===Ul||e.definisjon===Nv),zn=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:a=!1,fieldIndex:s,formName:l})=>{if(!JS(n))return null;const o=n?!Ta(n.status):!1;return r?d.jsx(Nr,{readOnly:e,isAksjonspunktClosed:o,erNyArbLivet:r,fieldIndex:s,formName:l,avklaringsbehov:n}):d.jsx(Tt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Nv,erNyoppstartet:a,fieldIndex:s,formName:l,isAksjonspunktClosed:o,avklaringsbehov:n})};zn.buildInitialValues=(e,n)=>Pv(Ul,n)?Nr.buildInitialValuesNyIArbeidslivet(e,n):{...Tt.buildInitialValues(e,n)};zn.transformValues=(e,n)=>Pv(Ul,n)?Nr.transformValuesNyIArbeidslivet(e):Tt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:qv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Sv,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:xv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Bv,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Fv}=ge,WS=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},ZS=(e,n)=>{switch(e.definisjon){case qv:return WS(n);case Fv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case xv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case Bv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},XS=e=>{const n=e.aktivitetStatus||[],r=n.some(a=>iv(a)),t=n.some(a=>sv(a));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},QS=(e,n)=>{switch(e.definisjon){case qv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case Fv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case xv:case Bv:return XS(n);default:return"Ukjent aksjonspunkt"}},ex=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs("div",{className:r?de.aksjonspunktBehandlerNoBorder:de.aksjonspunktBehandlerHeader,children:[d.jsxs(Y,{children:[!r&&d.jsx(x,{className:de.aksjonspunktBehandlerImageCol,children:d.jsx(Ir,{className:de.warningIcon})}),d.jsx(x,{className:de.aksjonspunktBehandlerTextCol,children:d.jsx(B,{children:d.jsx(u,{id:QS(e,n)})})})]}),d.jsx(H,{eightPx:!0}),d.jsxs(Y,{children:[!r&&d.jsx(x,{className:de.aksjonspunktBehandlerImageCol}),d.jsx(x,{className:de.aksjonspunktBehandlerTextCol,children:d.jsx(T,{children:d.jsx(u,{id:ZS(e,n)})})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:nx,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:rx,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:tx,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:ax,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:sx}=ge;var nr=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(nr||{});const Hl=(e,n)=>fe.SN===e||fe.MIDLERTIDIG_INAKTIV===e||fe.ATFLSN===e&&n!=null&&n.find(r=>lv(r))?"8-35":"8-30",Mi=e=>sx===e.definisjon||ax===e.definisjon||tx===e.definisjon?"8-35":nx===e.definisjon||rx===e.definisjon?"8-30":null,ix=yn(3),_v=4e3,lx=bn(_v),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:su,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:iu,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:lu,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:du,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:ou}=ge,dx="BeregningForm",ta=(e,n)=>Mi(e)===n,ox=(e,n)=>!!e.find(r=>ta(r,n)),Yl=e=>`${dx}_${e}`,gu=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},Gi=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],gx=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===mr.ARBEIDSFORHOLD_AVSLUTTET)),Ov=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),ux=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],a=t.filter(m=>m.aktivitetStatus===L.ARBEIDSTAKER),s=t.filter(m=>m.aktivitetStatus===L.FRILANSER),l=t.filter(m=>m.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||m.aktivitetStatus===L.BRUKERS_ANDEL),o={...er.buildInitialValues(e.avklaringsbehov),...It.buildInitialValues(r),...Vl.buildInitialValues(s),...Dl.buildInitialValues(a)},g={...zn.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===fe.ATFLSN?{...o,...g}:n.sammenligningsgrunnlagType===fe.AT_FL?{...o}:n.sammenligningsgrunnlagType===fe.SN?{...g}:n.sammenligningsgrunnlagType===fe.MIDLERTIDIG_INAKTIV?{...g}:{}:{...Nr.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},kx=(e,n,r,t)=>{let a={};return r&&(a=ux(e,t)),{...a,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},mx=(e,n,r,t)=>({[r]:e.map(a=>{var s;return kx(a,Ov(n,a.vilkårsperiodeFom),a.avklaringsbehov.find(l=>ta(l,t)),(s=a.sammenligningsgrunnlagPrStatus)==null?void 0:s.find(l=>Hl(l.sammenligningsgrunnlagType,a.aktivitetStatus)===t))})}),vx=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:a})=>{const s=Gi(n).find(m=>m.aktivitetStatus&&m.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE),l=s&&s.erNyIArbeidslivet,o=r.definisjon===ge.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||s&&s.næringer&&s.næringer.some(m=>m.erVarigEndret===!0),g=s&&s.næringer&&s.næringer.some(m=>m.erNyoppstartet===!0);return!l&&!g&&!o?null:d.jsxs(d.Fragment,{children:[d.jsx(H,{eightPx:!0}),d.jsx(zn,{readOnly:e,avklaringsbehov:r,erNyArbLivet:l,erVarigEndring:o,erNyoppstartet:g,fieldIndex:t,formName:a})]})},px=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:a,fieldIndex:s,formName:l,avklaringsbehov:o,skalValideres:g})=>{const m=gx(n),v=gu(n,L.FRILANSER),f=gu(n,L.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[d.jsx(H,{eightPx:!0}),m&&d.jsx(It,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,skalValideres:g}),!m&&f&&d.jsx(Fl,{readOnly:t,alleAndelerIForstePeriode:Gi(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,formName:l,skalValideres:g}),v&&d.jsx(Vl,{readOnly:t,fieldIndex:s,formName:l,alleAndelerIForstePeriode:Gi(n),skalValideres:g}),d.jsx(H,{sixteenPx:!0}),d.jsx(Y,{children:d.jsxs(x,{children:[d.jsx(Qe,{name:`${l}.${s}.ATFLVurdering`,label:d.jsx(u,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[Q,lx,ix,cn],maxLength:_v,readOnly:t,className:de.textAreaStyle,description:a.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:b=>b.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(xn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})},fx=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(a=>a.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),wr=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),yx=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,a)=>!t.beregningsgrunnlagPeriodeFom||!a.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(a.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(wr(su,e.gjeldendeAvklaringsbehov))return[{kode:su,aksjonspunktData:er.transformATFLValues(e,r)}];if(wr(du,e.gjeldendeAvklaringsbehov))return[{kode:du,aksjonspunktData:zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(wr(ou,e.gjeldendeAvklaringsbehov))return[{kode:ou,aksjonspunktData:zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(wr(lu,e.gjeldendeAvklaringsbehov))return[{kode:lu,aksjonspunktData:zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(wr(iu,e.gjeldendeAvklaringsbehov))return[{kode:iu,aksjonspunktData:er.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},bx=(e,n)=>e[Yl(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:yx(r)})).reduce(fx,[]),cx=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:a,vilkår:s,submitCallback:l,formData:o,setFormData:g,aktivIndex:m,lovparagraf:v,finnesFormSomSubmittes:f,setSubmitting:b})=>{const y=Z(),j=(w,U)=>{b(!0),l(bx(w,U))},R=w=>{const U=Ov(s,w.vilkårsperiodeFom);return U.vurderesIBehandlingen&&!U.erForlengelse},h=a.filter(w=>ox(w.avklaringsbehov,v)),N=Yl(v),E=Ye({defaultValues:o||mx(h,s,N,v)}),{formState:{dirtyFields:P},control:q,trigger:S}=E,{fields:D}=en({name:N,control:q}),F=I.useRef(null);I.useEffect(()=>{var w,U;f&&(w=P[N])!=null&&w[m]&&S(),a[m].avklaringsbehov.some(re=>ta(re,v)&&re.status===dv.OPPRETTET)&&((U=F==null?void 0:F.current)==null||U.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[m]);const z=d.jsx(Y,{children:d.jsx(x,{children:d.jsx(MS,{isReadOnly:e,isSubmittable:!n,isDirty:E.formState.isDirty,isSubmitting:f})})}),J=w=>w.find(U=>ta(U,v)),_=(w,U)=>{const re=R(h[w]),W=J(U);return v===nr.ÅTTE_TRETTI&&W?d.jsx(px,{kodeverkSamling:r,allePerioder:h[w].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:y,fieldIndex:w,formName:N,avklaringsbehov:W,skalValideres:re}):v===nr.ÅTTE_TRETTIFEM&&W?d.jsx(vx,{readOnly:e,allePerioder:h[w].beregningsgrunnlagPeriode,fieldIndex:w,formName:N,avklaringsbehov:W}):null},G=a[m].vilkårsperiodeFom;return d.jsx("div",{ref:F,children:d.jsx(Ce,{formMethods:E,onSubmit:w=>j(w,v),setDataOnUnmount:g,children:D.map((w,U)=>d.jsxs("div",{style:{display:h[U].vilkårsperiodeFom===G?"block":"none"},children:[d.jsx(ex,{readOnly:e,avklaringsbehov:J(h[U].avklaringsbehov),beregningsgrunnlag:h[U]}),d.jsxs("div",{className:`${e?de.aksjonspunktBehandlerNoBorder:de.aksjonspunktBehandlerBorder} ${de.aksjonspunktWrapper}`,children:[_(U,h[U].avklaringsbehov),d.jsx(H,{sixteenPx:!0}),z,d.jsx(H,{sixteenPx:!0})]})]},w.id))})})},jx=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const a=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,s=t.filter(o=>o.sammenligningsgrunnlagType===fe.AT_FL||o.sammenligningsgrunnlagType===fe.AT||o.sammenligningsgrunnlagType===fe.FL),l=a&&s.length===0;return n?d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(d.Fragment,{children:[e.isMilitaer&&d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsxs(Y,{children:[d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})})}),d.jsx(H,{eightPx:!0})]}),e.isDagpenger&&d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})})})}),d.jsx(H,{eightPx:!0})]}),l&&d.jsxs(Y,{children:[d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})}),d.jsx(H,{eightPx:!0})]})]})},hx="_colLable_di1r8_1",Ax="_colValue_di1r8_8",Ix="_linjeSkille_di1r8_21",Tx="_linjeSkilleTykk_di1r8_27",Rx="_colAvvik_di1r8_36",dn={colLable:hx,colValue:Ax,linjeSkille:Ix,linjeSkilleTykk:Tx,colAvvik:Rx},uu=d.jsx(Y,{children:d.jsx(x,{children:d.jsx("div",{className:dn.linjeSkille})})}),Ex=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:a,avvikProsent:s}=n,l=parseFloat(s.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",g=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(d.Fragment,{children:[uu,d.jsxs(Y,{children:[d.jsx(x,{className:dn.colLable,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:o})})}),d.jsx(x,{className:dn.colValue,children:d.jsx(T,{size:"small",children:e||e===0?M(e):"-"})}),d.jsx(x,{className:dn.colAvvik})]}),uu,d.jsxs(Y,{children:[d.jsx(x,{className:dn.colLable,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:g})})}),d.jsx(x,{className:dn.colValue,children:d.jsx(T,{size:"small",children:M(a)})}),d.jsx(x,{className:dn.colAvvik})]}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx("div",{className:dn.linjeSkilleTykk})})}),d.jsxs(Y,{children:[d.jsx(x,{className:dn.colLable,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})})}),d.jsx(x,{className:dn.colValue,children:d.jsx(T,{size:"small",children:M(t===void 0?0:t)})}),d.jsx(x,{className:dn.colAvvik,children:d.jsx(T,{size:"small",className:`${l>25?$.redError:""} ${$.semiBoldText}`,children:d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})})})]})]})},Nx=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,Px=(e,n)=>e?e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>Nx(r)):[],ku=e=>e||0,qx=e=>e.beregnetPrAar?e.beregnetPrAar:0,mu=(e,n)=>{const r=Px(e,n);if(r){const t=r.reduce((l,o)=>l+qx(o),0),a=r.reduce((l,o)=>{var g;return l+ku((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseBortfaltPrÅr)},0),s=r.reduce((l,o)=>{var g;return l+ku((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseTilkommetPrÅr)},0);return t+a-s}return 0},Sx=(e,n)=>{const r=d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case fe.AT:case fe.FL:case fe.AT_FL:return r;case fe.SN:return t;case fe.ATFLSN:return n===nr.ÅTTE_TRETTIFEM?t:r;case fe.MIDLERTIDIG_INAKTIV:return d.jsx(u,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},vu=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===L.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===fe.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===fe.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===fe.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:mu(n,[L.ARBEIDSTAKER,L.FRILANSER]),erPGI:!1}:{inntekt:mu(n,[L.ARBEIDSTAKER,L.FRILANSER]),erPGI:!1}};function pu(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const xx=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(a=>a.definisjon===ge.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=pu(t,nr.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(a=>{const s=Hl(a.sammenligningsgrunnlagType,r.aktivitetStatus);t=pu(t,s,r)}),t},{}),Bx=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:a,gjelderBesteberegning:s,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:v,setFormData:f,aktivIndex:b})=>{var y;const j=xx(o),[R,h]=I.useState(!1),N=d.jsx(jx,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:s,erNyIArbeidslivet:!!((y=o[b].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&y.find(P=>P.erNyIArbeidslivet))}),E=P=>{var q;if(j[P]&&j[P].length>0){const S=j[P],D=o[b].vilkårsperiodeFom,F=S.find(U=>U.vilkårsperiodeFom===D),z=F?(q=F.sammenligningsgrunnlagPrStatus)==null?void 0:q.find(U=>Hl(U.sammenligningsgrunnlagType,F==null?void 0:F.aktivitetStatus)===P):void 0,J=!!j[P].find(U=>!!U.avklaringsbehov.find(re=>Mi(re)===P)),_=F&&!!F.avklaringsbehov.find(U=>Mi(U)===P),G=(F==null?void 0:F.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],w=Yl(P);return d.jsxs("div",{children:[!!z&&d.jsxs(d.Fragment,{children:[d.jsx(ue,{size:"xsmall",children:Sx(z,P)}),d.jsx(Ex,{sammenligningsgrunnlag:z,beregnetAarsinntekt:vu(z,G).inntekt,erPGI:vu(z,G).erPGI}),d.jsx("div",{className:$.storSpace})]}),J&&d.jsxs("div",{style:{display:_?"block":"none"},children:[d.jsx(cx,{readOnly:e,lovparagraf:P,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:a,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:v&&w in v?v:void 0,setFormData:f,aktivIndex:b,finnesFormSomSubmittes:R,setSubmitting:h}),d.jsx("div",{className:$.storSpace})]})]})}return null};return d.jsxs("div",{className:$.panelRight,children:[N,d.jsx(H,{twentyPx:!0}),E(nr.ÅTTE_TRETTI),E(nr.ÅTTE_TRETTIFEM)]})},Vr=e=>A(e).locale(Vi).format("MMMM");function Ft(e,n,r){const t=e.filter(a=>a.lønnsendringscenario===n).map(a=>`i ${Ra(r[a.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${A(a.sisteLønnsendringsdato).format(te)}`);return t.reduce((a,s,l)=>l===0?s:l<t.length-2?`${a}, ${s}`:`${a} og ${s}`,"")}const Fx=(e,n,r,t)=>{switch(e){case hn.MANUELT_BEHANDLET:return d.jsx(u,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:Ft(r,hn.MANUELT_BEHANDLET,t)}});case hn.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(u,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:Ft(r,hn.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:Vr(A(n).subtract(1,"month").format(qr)),forrigeMåned:Vr(A(n).subtract(2,"month").format(qr))}});case hn.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(u,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:Ft(r,hn.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:Vr(A(n).subtract(1,"month").format(qr))}});case hn.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(u,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:Ft(r,hn.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:Vr(A(n).subtract(1,"month").format(qr)),nesteMåned:Vr(A(n).subtract(2,"month").format(qr))}});default:return null}};function _x(e,n,r){return gp(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsx("p",{children:Fx(t,n,e,r)},t))}const Ox=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:_x(n.lønnsendringSaksopplysning,e,r)}),d.jsx(op,{saksopplysninger:t})},Dx=e=>{switch(e){case L.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case L.FRILANSER:return"alt1";case L.ARBEIDSTAKER:return"alt3";default:return"neutral"}},wx=(e,n)=>{const r=[];return e.filter((t,a,s)=>a===s.findIndex(l=>l===t)).forEach(t=>{var a;const s=((a=n[Aa.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:a.navn)||"";r.push({visningsNavn:s,kode:t,tagType:Dx(t)})}),r.sort((t,a)=>t.visningsNavn>a.visningsNavn?1:-1),d.jsx(Y,{children:r.map(t=>d.jsx(x,{className:$.tagRad,children:d.jsx(ka,{variant:t.tagType,title:t.visningsNavn,className:$.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},Vx=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:a})=>d.jsxs("div",{className:$.panelLeft,children:[wx(n,r),d.jsx(H,{sixteenPx:!0}),d.jsxs(qu,{children:[d.jsxs(Y,{children:[d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})})}),d.jsx(x,{children:d.jsx(T,{size:"small",className:$.semiBoldText,children:d.jsx(Ae,{dateString:e})})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(H,{sixteenPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(Ox,{arbeidsgiverOpplysningerPerId:a,skjeringstidspunktDato:e,saksopplysninger:t})})})]})]})]}),fu=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,a)=>t+a,0);return!r||r===0?0:r},Dv=e=>e.month()===2&&e.year()===2020,Mx=e=>{const n=A(e.tom);return Dv(n)},wv=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const a=A(n.beregningsgrunnlagPeriodeFom);if(Dv(a)&&t.some(o=>Mx(o))){const o=A("2020-04-30"),g=t.find(m=>A(m.tom).isSame(o,"day"));return g?g.frisinnAndeler.filter(m=>m.statusSøktFor===e):null}const s=A(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!A(o.fom).isBefore(a)&&A(o.tom).isSame(s,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},hr=(e,n,r)=>{const t=wv(e,n,r);return!!t&&t.length>0},Xe=(e,n,r)=>{if(!e||!n||!r)return 0;if(hr(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return fu(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return fu(r.beregningsgrunnlagPrStatusOgAndel||[],e)},yu=(e,n,r)=>{const t=wv(e,n,r);if(!t||t.length<1)return 0;const a=t.map(({oppgittInntekt:s})=>s).reduce((s,l)=>s+l,0);return!a||a===0?0:a},Vv=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===uv.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),a=t[t.length-1],s=A(a.tom);return s.month()===3&&s.year()===2020?t.filter(l=>A(l.fom).month()===3||A(l.fom).month()===2):t.filter(l=>A(l.fom).month()===s.month()&&A(l.fom).year()===s.year())}return n},Gx=(e,n)=>{let r=null;return n!==Be&&(r=n),d.jsx(u,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:A(e).format(te),tom:r?A(r).format(te):""}},`fom-tom${e}${r}`)},Mv=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,a=n.frisinnPerioder,s=Array.isArray(a)&&a.find(l=>!A(r).isBefore(l.fom)&&!A(t).isAfter(l.tom));return s?s.frisinnAndeler:[]},bu=(e,n)=>d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(u,{id:e})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(n)})})]}),cu=(e,n,r,t,a)=>{const s=a/100,l=n*s;return d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(u,{id:e,values:{grad:a}})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(l)})})]}),!!t||t===0&&d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(u,{id:r})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(t)})})]})]})},_t=e=>e||e===0,Lx=e=>{const n=A(e);return n.isBefore(A("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(A("2022-01-01","YYYY-MM-DD"))?60:70},Kx=(e,n,r,t)=>{const a=Mv(e,n);if(!a||a.length<1)return null;const s=a.some(v=>v.statusSøktFor===L.FRILANSER)?r:null,l=a.some(v=>v.statusSøktFor===L.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=yu(L.FRILANSER,e,n),g=yu(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n),m=Lx(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[_t(s)&&bu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",s||0),_t(s)&&cu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",s||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,m),_t(l)&&bu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",l||0),_t(l)&&cu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",g,m),d.jsx(Y,{children:d.jsx(x,{children:d.jsx("div",{className:$.colDevider})})}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.Resultat.Dagsats"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(e.dagsats)})})]})]})},$x=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const a=Mv(e,n);if(!a||a.length<1)return null;const s=r>=0?r:0,l=t>=0?t:0;return d.jsxs("div",{children:[d.jsx(H,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:Gx(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)})})}),Kx(e,n,s,l)]})},Gv=e=>e.grunnbeløp?e.grunnbeløp*6:0,Ux=(e,n)=>{if(!hr(L.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Gv(e);const t=Xe(L.ARBEIDSTAKER,e,n);if(r-=t,!hr(L.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const s=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=s}const a=Xe(L.FRILANSER,e,n);return a>r?r:a},Hx=(e,n)=>{if(!hr(L.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Gv(e);const t=Xe(L.ARBEIDSTAKER,e,n);r-=t;const a=Xe(L.FRILANSER,e,n);r-=a;const s=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return s>r?r:s},Yx=(e,n)=>{const r=A(e.beregningsgrunnlagPeriodeFom),t=A(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(a=>!A(a.fom).isBefore(r)&&!A(a.tom).isAfter(t))},Cx=({beregningsgrunnlag:e})=>{const n=Vv(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>Yx(t,n)):[];return d.jsxs("div",{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.Resultat"})})})}),r.map(t=>d.jsx("div",{children:d.jsx($x,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:Ux(e,t),næringGrunnlag:Hx(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},zx=A("2020-04-01"),Jx=(e,n,r)=>d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:M(e),annenInntekt:M(n)}})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:M(r)})})]}),Wx=(e,n)=>{if(!Array.isArray(n))return!1;const r=A(e.beregningsgrunnlagPeriodeFom),t=A(e.beregningsgrunnlagPeriodeTom);return n.some(a=>!A(a.fom).isBefore(r)&&!A(a.tom).isAfter(t))},Zx=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(Wx(t,n)){const a=A(t.beregningsgrunnlagPeriodeTom),s=A(t.beregningsgrunnlagPeriodeTom).endOf("month");a.isAfter(zx)&&a.isSame(s,"day")&&t.beregningsgrunnlagPeriodeTom!==Be&&r.push(t)}}),r},Xx=(e,n)=>{const r=A(n.beregningsgrunnlagPeriodeFom),t=A(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},Qx=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=Xe(L.ARBEIDSTAKER,e,n),a=e.grunnbeløp*6;let s=t;if(!hr(L.FRILANSER,n,r)){const v=Xe(L.FRILANSER,e,n);s+=v}if(!hr(L.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const v=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n);s+=v}const l=a>s?a-s:0,o=n.beregningsgrunnlagPeriodeTom,g=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(v=>Xx(v,n)),m=g?g.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:A(m).format(te),tom:o?A(o).format(te):""}},`fom-tom${m}${o}`)})})}),d.jsx(H,{eightPx:!0}),Jx(a,s,l),d.jsx(H,{sixteenPx:!0})]})},eB=({beregningsgrunnlag:e})=>{const n=Vv(e.ytelsesspesifiktGrunnlag),r=Zx(e.beregningsgrunnlagPeriode,n);return d.jsx(d.Fragment,{children:r.map(t=>d.jsx("div",{children:Qx(e,t)},t.beregningsgrunnlagPeriodeFom))})},nB=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,r),a=Xe(L.FRILANSER,e,r),s=Xe(L.ARBEIDSTAKER,e,r);return d.jsxs("div",{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})})})}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:M(s)})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:M(a)})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})})}),d.jsx(x,{className:$.tabellInntekt,children:d.jsx(B,{size:"small",children:M(t)})})]})]})},ju=(e,n,r)=>d.jsx(Y,{children:d.jsx(x,{children:d.jsx(T,{size:"small",children:d.jsx(u,{id:e,values:{fom:A(n).format(te),tom:A(r).format(te)}})})})}),rB=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===L.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===L.FRILANSER);return d.jsxs("div",{children:[r&&ju("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&ju("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},tB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs("div",{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:$.avsnittOverskrift,children:d.jsx(u,{id:"Beregningsgrunnlag.Søknad.Tittel"})})})}),d.jsx(H,{eightPx:!0}),Array.isArray(r)&&r.map(t=>rB(t)),d.jsx(H,{sixteenPx:!0})]})},aB="_aksjonspunktBehandlerContainer_o9hgh_6",sB={aksjonspunktBehandlerContainer:aB},iB=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),lB=({beregningsgrunnlag:e})=>d.jsxs("div",{className:sB.aksjonspunktBehandlerContainer,children:[d.jsx(ke,{children:d.jsx(u,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(H,{sixteenPx:!0}),d.jsx(tB,{beregningsgrunnlag:e}),d.jsx(H,{sixteenPx:!0}),d.jsx(nB,{beregningsgrunnlag:e}),d.jsx(H,{sixteenPx:!0}),iB(e)&&d.jsxs(d.Fragment,{children:[d.jsx(eB,{beregningsgrunnlag:e}),d.jsx(H,{sixteenPx:!0}),d.jsx(Cx,{beregningsgrunnlag:e})]})]}),dB=e=>d.jsx(lB,{beregningsgrunnlag:e}),oB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===Bl.FRISINN?dB(e):null},gB=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===ov.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,uB=e=>!!(e!=null&&e.besteberegninggrunnlag),kB=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],mB=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:a,vilkarPeriode:s,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:g,vilkår:m,submitCallback:v,formData:f,setFormData:b,aktivIndex:y})=>{var j;const{skjaeringstidspunktBeregning:R,beregningsgrunnlagPeriode:h,faktaOmBeregning:N,ytelsesspesifiktGrunnlag:E}=n,P=gB(N),q=uB(E),S=d.jsx("div",{className:$.storSpace}),D=kB(h),F=o&&o.length>0;return d.jsxs(d.Fragment,{children:[F&&d.jsxs(d.Fragment,{children:[d.jsx(H,{eightPx:!0}),d.jsx(OS,{avklaringsbehov:o,beregningsgrunnlag:n})]}),d.jsxs(Y,{children:[d.jsxs(x,{className:$.venstreKolonne,children:[d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(H,{sixteenPx:!0}),d.jsx(Vx,{kodeverkSamling:a,aktivitetStatusList:D,skjeringstidspunktDato:R,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),S,r.skalViseBeregningsgrunnlag&&d.jsx(er,{relevanteStatuser:r,allePerioder:h,gjelderBesteberegning:P,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),q&&d.jsxs(d.Fragment,{children:[S,d.jsx(PS,{besteMåneder:(j=E==null?void 0:E.besteberegninggrunnlag)==null?void 0:j.besteMåneder,periode:h[0]})]})]}),d.jsxs(x,{className:$.hoyreKolonne,children:[d.jsx(ue,{size:"medium",className:$.panelRight,children:d.jsx(u,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(H,{sixteenPx:!0}),d.jsx(Bx,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:a,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:P,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:g,vilkår:m,submitCallback:v,formData:f,setFormData:b,aktivIndex:y}),d.jsxs(d.Fragment,{children:[d.jsx(H,{sixteenPx:!0}),d.jsx(oB,{beregningsgrunnlag:n})]}),s&&d.jsx(TS,{beregningsgrunnlag:n,vilkårsperiode:s})]})]})]})},vB="_readOnlyBlokk_3qjl7_1",pB={readOnlyBlokk:vB},fB=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(d.Fragment,{children:[d.jsx(B,{size:"small",children:d.jsx(u,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsx(H,{sixteenPx:!0}),d.jsxs(T,{size:"small",className:pB.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(Xr,{})]})]}),yB=[ge.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ge.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ge.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ge.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ge.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ge.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],bB=e=>e.avklaringsbehov.filter(n=>yB.some(r=>r===n.definisjon)),cB=e=>({isArbeidstaker:e.some(n=>iv(n)),isFrilanser:e.some(n=>sv(n)),isSelvstendigNaeringsdrivende:e.some(n=>lv(n)),isMidlertidigInaktiv:e.some(n=>n===L.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>dP(n)),harDagpengerEllerAAP:e.some(n=>av(n)),isAAP:e.some(n=>n===L.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===L.DAGPENGER||n===L.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>oP(n))||e.length>1,isMilitaer:e.some(n=>gP(n))}),jB=e=>e?e.find(n=>n.definisjon===ge.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,hu=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),hB=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:a,vilkar:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m})=>{const v=n[e],f=cB(v.aktivitetStatus),b=jB(v.avklaringsbehov);function y(j){const R=hu(s,j.vilkårsperiodeFom);return R.vurderesIBehandlingen&&!R.erForlengelse}return d.jsxs(d.Fragment,{children:[d.jsx(mB,{readOnly:t||!y(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:bB(n[e]),relevanteStatuser:f,readOnlySubmitButton:a,kodeverkSamling:l,vilkarPeriode:hu(s,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:s,submitCallback:r,formData:g,setFormData:m,aktivIndex:e}),b&&d.jsx(fB,{avklaringsbehov:b})]})},AB="_contentContainer_1ddng_1",IB="_sideMenuContainer_1ddng_4",TB="_mainContainer--withSideMenu_1ddng_7",RB="_advarselIkon_1ddng_12",Gt={contentContainer:AB,sideMenuContainer:IB,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:TB,advarselIkon:RB},EB=[ge.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ge.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ge.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ge.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ge.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ge.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],NB=[],PB=eP.bind(Gt),Au=Ke(Tv),qB=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(d.Fragment,{children:[d.jsx(ue,{size:"medium",children:d.jsx(u,{id:"Beregningsgrunnlag.Title"})}),d.jsx(H,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(u,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})})]})},SB=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},xB=e=>e.avklaringsbehov.some(n=>EB.some(r=>r===n.definisjon)&&n.kanLoses),BB=(e,n)=>e.map(r=>({skalVurderes:SB(n,r),harAvklaringsbehov:xB(r),stp:A(r.skjaeringstidspunktBeregning).format(te)})),FB=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const m=e||NB,v=m.length>1;m.sort((R,h)=>R.skjaeringstidspunktBeregning.localeCompare(h.skjaeringstidspunktBeregning)).reverse();const[f,b]=I.useState(0),y=BB(m,a),j=PB("mainContainer",{"mainContainer--withSideMenu":v});return I.useEffect(()=>{const R=y.findIndex(h=>h.skalVurderes&&h.harAvklaringsbehov);R>-1&&b(R)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(Ge,{value:Au,children:qB(a)}):d.jsx(Ge,{value:Au,children:d.jsxs("div",{className:j,children:[v&&d.jsx("div",{className:Gt.sideMenuContainer,children:d.jsx(Ip,{links:y.map((R,h)=>({icon:R.skalVurderes&&R.harAvklaringsbehov?d.jsx(Ir,{className:Gt.advarselIkon}):null,active:f===h,label:`${R.stp}`})),onClick:b})}),d.jsx("div",{className:Gt.contentContainer,children:d.jsx(hB,{aktivtBeregningsgrunnlagIndeks:f,beregningsgrunnlagListe:m,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,setFormData:g,formData:o})})]})})},_B=e=>{switch(e){case ge.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return le.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ge.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return le.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ge.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return le.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ge.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return le.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},OB=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:_B(a.kode),...a.grunnlag[0]}));return e(t)},DB=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),wB=(e,n)=>{const r=e.find(a=>a.vilkarType&&a.vilkarType===Xn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[DB(n,r)]}},VB=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],MB=[le.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,le.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,le.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,le.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],GB=[Xn.BEREGNINGSGRUNNLAGVILKARET],LB=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),r=Qi(MB,GB),{behandling:t}=I.use(Sn),a=qn(t),{data:s,isFetching:l}=Pn(a.beregningsgrunnlagOptions(t));return i.jsx(Ku,{standardPanelProps:r,prosessPanelKode:Ji.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:l?i.jsx(Nn,{}):i.jsx(KB,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagsvilkar:wB(r.vilkar,s),beregningsgrunnlagListe:VB(s),arbeidsgiverOpplysningerPerId:e,submitCallback:OB(r.submitCallback),isReadOnly:r.isReadOnly,readOnlySubmitButton:r.readOnlySubmitButton})})},KB=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=Mn();return i.jsx(FB,{...e,formData:n,setFormData:r})};LB.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Iu=le.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,vi=[Xn.MEDLEMSKAPSVILKÅRET_LØPENDE],$B=()=>{const e=Z(),n=Qi([Iu],vi);return i.jsx(rp,{overstyringApKode:Iu,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:i.jsx(Dp,{standardPanelProps:n,prosessPanelKode:Ji.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:Vu(n.aksjonspunkter,vi,n.vilkar),children:i.jsx(jp,{vilkar:n.vilkar,vilkarKoder:vi,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};$B.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel"};const UB="_panel_1wwvz_1",HB="_hyphen_1wwvz_9",YB="_marginTop_1wwvz_19",pi={panel:UB,hyphen:HB,marginTop:YB},CB=(e,n)=>e&&n!==void 0,zB=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===Zn.OPPRETTET?void 0:t!==n,ansesMottatt:t,...Tr.buildInitialValues(e)}},JB=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:le.VURDER_SOKNADSFRIST_FORELDREPENGER,...Tr.transformValues(e)}),Lv=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:a,submitCallback:s,harÅpneAksjonspunkter:l}=En(),o=zB(t,n,r),{mellomlagretFormData:g,setMellomlagretFormData:m}=Mn(),v=Ye({defaultValues:g||o}),f=v.watch("gyldigSenFremsetting"),b=r==null?void 0:r.søknadsperiodeStart,y=r==null?void 0:r.søknadsperiodeSlutt,j=r==null?void 0:r.utledetSøknadsfrist;return i.jsx(Ce,{formMethods:v,onSubmit:R=>s(JB(R)),setDataOnUnmount:m,children:i.jsxs(V,{gap:"6",children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),l&&i.jsx(rr,{children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:j?A(j).format(te):""}})}),i.jsxs(K,{justify:"space-between",children:[i.jsxs(Ci,{className:pi.panel,children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),i.jsxs("ul",{className:pi.hyphen,children:[i.jsx("li",{children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),i.jsx("li",{children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),i.jsx("li",{children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]}),i.jsxs("div",{children:[i.jsx(ke,{children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&i.jsx(T,{size:"small",children:A(n).format(te)})]}),b&&y&&i.jsxs("div",{children:[i.jsx(ke,{children:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),i.jsx(T,{size:"small",children:`${A(b).format(te)} - ${A(y).format(te)}`})]})]}),i.jsx("div",{className:pi.marginTop,children:i.jsxs(V,{gap:"4",children:[i.jsx(Tr,{readOnly:a}),i.jsx(Ne,{name:"gyldigSenFremsetting",validate:[Q],isReadOnly:a,isHorizontal:!0,isEdited:CB(t.length>0,f),isTrueOrFalseSelection:!0,radios:[{value:"true",label:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),f&&i.jsx(Nu,{children:i.jsx(Wn,{name:"ansesMottatt",isReadOnly:a,label:i.jsx(u,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[Q,In,fp]})}),i.jsx(wp,{isReadOnly:a,isSubmittable:!e,isSubmitting:v.formState.isSubmitting,isDirty:v.formState.isDirty})]})})]})})};Lv.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const WB={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},ZB=Ke(WB),Kv=({soknad:e,readOnlySubmitButton:n})=>i.jsx(Ge,{value:ZB,children:i.jsx(Lv,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Kv.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const XB=[le.VURDER_SOKNADSFRIST_FORELDREPENGER],QB=()=>{const e=Z(),n=Qi(XB),{behandling:r}=I.use(Sn),t=qn(r),{data:a}=Pn(t.søknadOptions(r));return i.jsx(Ku,{standardPanelProps:n,prosessPanelKode:Ji.SOEKNADSFRIST,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:Vu(n.aksjonspunkter),children:a?i.jsx(Kv,{soknad:a,readOnlySubmitButton:n.readOnlySubmitButton}):i.jsx(Nn,{})})};QB.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel"};const wn={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},eF="_godkjentImage_1bp9b_1",nF="_avslattImage_1bp9b_7",Tu={godkjentImage:eF,avslattImage:nF},rF="MELLOMLIGGENDE_PERIODE",tF=e=>e===wn.BEKREFTET_AVVIST||e===wn.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",Ru=e=>e===wn.BEKREFTET_GODKJENT||e===wn.ANTATT_GODKJENT||e===rF,$v=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const a=Z();return i.jsx(Ci,{borderWidth:"1",padding:"4",children:i.jsxs(V,{gap:"4",children:[i.jsxs(K,{justify:"space-between",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})}),i.jsxs(K,{gap:"2",children:[i.jsx(ae,{size:"xsmall",icon:i.jsx(oa,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.prevPeriod"}),children:i.jsx(u,{id:"TimeLineData.prevPeriodShort"})}),i.jsx(ae,{size:"xsmall",icon:i.jsx(ga,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:i.jsx(u,{id:"TimeLineData.nextPeriodShort"})}),i.jsx(ae,{size:"xsmall",icon:i.jsx(Jn,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:e.fom,dateStringTom:e.tom})}),i.jsxs(K,{gap:"1",children:[Ru(e.klasse)&&i.jsx($i,{className:Tu.godkjentImage}),!Ru(e.klasse)&&i.jsx(Jn,{className:Tu.avslattImage}),i.jsx(T,{size:"small",children:i.jsx(u,{id:tF(e.klasse)})})]})]})})};$v.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const aF={danger:i.jsx(Gu,{}),success:i.jsx(Xi,{}),info:i.jsx(Cp,{})},sF=e=>e===wn.BEKREFTET_AVVIST||e===wn.ANTATT_AVVIST?"danger":e===wn.BEKREFTET_GODKJENT||e===wn.ANTATT_GODKJENT?"success":"info",iF=e=>e.map(n=>({start:A(n.fom).toDate(),end:A(n.tom).toDate(),status:sF(n.klasse),opptjeningsperiode:n})),lF=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",Uv=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=Z(),a=e.toSorted((b,y)=>A(b.fom).diff(A(y.fom))),s=iF(a),[l,o]=I.useState(),g=b=>{const y=s.find(j=>{var R;return((R=j.opptjeningsperiode)==null?void 0:R.fom)===b});y&&o(y)},m=()=>{o(void 0)},v=()=>{if(s){const b=s.findIndex(y=>{var j,R;return((j=y.opptjeningsperiode)==null?void 0:j.fom)===((R=l==null?void 0:l.opptjeningsperiode)==null?void 0:R.fom)})+1;b<s.length&&o(s[b])}},f=()=>{if(s){const b=s.findIndex(y=>{var j,R;return((j=y.opptjeningsperiode)==null?void 0:j.fom)===((R=l==null?void 0:l.opptjeningsperiode)==null?void 0:R.fom)})-1;b>=0&&o(s[b])}};return i.jsxs(i.Fragment,{children:[i.jsxs(we,{startDate:A(n).subtract(1,"months").toDate(),endDate:A(r).add(10,"days").toDate(),children:[i.jsxs(we.Pin,{date:A(n).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"OpptjeningTimeLineLight.StartDato"})}),i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:n})})]}),i.jsxs(we.Pin,{date:A(r).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"OpptjeningTimeLineLight.SluttDato"})}),i.jsx(T,{size:"small",children:i.jsx(Ae,{dateString:r})})]}),i.jsx(we.Row,{label:"",children:s.map(b=>{var y,j,R;return i.jsx(we.Period,{start:b.start,end:b.end,status:b.status,onSelectPeriod:()=>{var h;return g((h=b.opptjeningsperiode)==null?void 0:h.fom)},isActive:((y=l==null?void 0:l.opptjeningsperiode)==null?void 0:y.fom)===((j=b.opptjeningsperiode)==null?void 0:j.fom),icon:aF[b.status],title:t.formatMessage({id:lF(b.status)})},(R=b.opptjeningsperiode)==null?void 0:R.fom)})})]}),(l==null?void 0:l.opptjeningsperiode)&&i.jsx($v,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:m,velgNestePeriode:v,velgForrigePeriode:f})]})};Uv.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const Cl=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:a})=>i.jsxs(V,{gap:"4",children:[i.jsx(T,{size:"small",children:i.jsx(u,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),i.jsx(T,{size:"small",children:i.jsx($e,{dateStringFom:t,dateStringTom:a})}),r.length>0&&i.jsx(Uv,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:a})]});Cl.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const dF=(e,n,r)=>({...el.buildInitialValues(e,n,r),...Tr.buildInitialValues(e)}),oF=e=>({...el.transformValues(e),...Tr.transformValues(e),kode:le.VURDER_OPPTJENINGSVILKARET}),Hv=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:a})=>{const s=Z(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:g,harÅpneAksjonspunkter:m,isReadOnly:v,alleMerknaderFraBeslutter:f}=En(),b=o.some(F=>{var z;return(z=f[F.definisjon])==null?void 0:z.notAccepted}),y=dF(o,r,l.behandlingsresultat),{mellomlagretFormData:j,setMellomlagretFormData:R}=Mn(),h=Ye({defaultValues:j||y}),E=o.some(F=>F.status===Zn.OPPRETTET)?void 0:Lu.OPPFYLT===r,P=F=>g(oF(F)),q=(...F)=>i.jsx("b",{children:F}),S=F=>{var z;return((z=t.fastsattOpptjeningAktivitetList)==null?void 0:z.length)===0&&F===!0?s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},D=()=>i.jsx(Cl,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom});return i.jsx(Ce,{formMethods:h,onSubmit:P,setDataOnUnmount:R,children:i.jsxs(Vp,{title:s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:m,readOnlySubmitButton:e,readOnly:v,lovReferanse:n,originalErVilkarOk:E,erIkkeGodkjentAvBeslutter:b,isDirty:h.formState.isDirty,isSubmitting:h.formState.isSubmitting,rendreFakta:D,children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:a?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),i.jsxs(V,{gap:"4",children:[i.jsx(el,{readOnly:v,customVilkarOppfyltText:i.jsx(u,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:i.jsx(u,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:q}}),validatorsForRadioOptions:[S]}),i.jsx(Tr,{readOnly:v})]})]})})};Hv.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const Yv=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:a})=>{const{aksjonspunkterForPanel:s}=En();return s.length>0?i.jsx(Hv,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:a}):i.jsx(Cl,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};Yv.__docgenInfo={description:`OpptjeningVilkarForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const gF={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},uF=Ke(gF),kF=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:a=!1})=>i.jsx(Ge,{value:uF,children:i.jsx(Yv,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:a})});kF.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const mF=(e,n)=>e.filter(r=>r.opptjeningsår===n),Cv=e=>e.aktivitetStatus+e.arbeidsgiverId,vF=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?t.fødselsdato?`${t.navn} (${A(t.fødselsdato).format(te)})`:t.navn:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?Du(r)(e.aktivitetStatus,on.AKTIVITET_STATUS):""},pF=(e,n,r)=>({identifikator:Cv(e),visningsnavn:vF(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),fF=(e,n,r)=>{const t=[];return e.forEach(a=>{const s=a.erBrukerMottaker?a.årsbeløp:0,l=a.erBrukerMottaker?0:a.årsbeløp,o=Cv(a),g=t.find(m=>m.identifikator===o);g?(g.utbetaltTilSøker+=s,g.utbetaltIRefusjon+=l):t.push(pF(a,n,r))}),t},zv=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const a=!e||e.length<1,s=I.useMemo(()=>a?void 0:mF(e,n),[e,n]),l=I.useMemo(()=>s?fF(s,t,r):[],[s]);return a?null:i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.Feriepenger.AndelNavn"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.Feriepenger.GrunnlagRefusjon"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.Feriepenger.GrunnlagSøker"})})]})}),i.jsx(c.Body,{children:l.map(o=>i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o.visningsnavn})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o.utbetaltIRefusjon})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})]})};zv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const yF=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]},bF=()=>i.jsx(ue,{size:"small",children:i.jsx(u,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Jv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:a})=>{const{andeler:s}=e,l=!s||s.length<1,o=I.useMemo(()=>l?[]:yF(s),[s]);return l?null:i.jsx(qe,{children:i.jsxs(qe.Item,{open:t,children:[i.jsx(qe.Header,{onClick:a,children:bF()}),i.jsx(qe.Content,{children:i.jsx(V,{gap:"4",children:o.map(g=>i.jsx(zv,{alleAndeler:s,opptjeningsår:g,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${g}`))})})]})})};Jv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Wv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,a]=I.useState(!1);return i.jsx(Jv,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:()=>a(!t)})};Wv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const cF="_detailsPeriode_1r02x_1",jF="_margin_1r02x_9",fi={detailsPeriode:cF,margin:jF},hF={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},AF=e=>e?`...${e.substring(e.length-4,e.length)}`:"",IF=(e,n,r)=>{const t=r[e.arbeidsgiverReferanse];return t!=null&&t.navn?t.erPrivatPerson?`${t.navn} (${t.fødselsdato})`:`${t.navn} (${t.identifikator})${AF(e.eksternArbeidsforholdId)}`:e.arbeidsforholdType?n(e.arbeidsforholdType,on.OPPTJENING_AKTIVITET_TYPE):""},TF=(e,n,r)=>{switch(e.aktivitetStatus){case _n.ARBEIDSTAKER:return IF(e,n,r);case _n.FRILANSER:return i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Frilans"});case _n.SELVSTENDIG_NAERINGSDRIVENDE:return i.jsx(u,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case _n.DAGPENGER:return i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case _n.ARBEIDSAVKLARINGSPENGER:return i.jsx(u,{id:"TilkjentYtelse.PeriodeData.AAP"});case _n.MILITAER_ELLER_SIVIL:return i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Militaer"});case _n.BRUKERS_ANDEL:return i.jsx(u,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},RF=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return i.jsx(u,{id:n})},Zv=({selectedItemData:e,callbackForward:n,callbackBackward:r,alleKodeverk:t,isSoknadSvangerskapspenger:a,arbeidsgiverOpplysningerPerId:s,lukkPeriode:l})=>{const o=kp(e.fom,e.tom),g=Z(),m=Du(t),v=I.useCallback((...f)=>i.jsx("b",{children:f}),[]);return i.jsx(Ci,{borderWidth:"1",padding:"4",children:i.jsxs(V,{gap:"4",children:[i.jsxs(K,{justify:"space-between",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Detaljer"})}),i.jsxs(K,{gap:"2",align:"center",children:[i.jsx(ae,{className:fi.margin,size:"xsmall",icon:i.jsx(oa,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(u,{id:"Timeline.prevPeriodShort"})}),i.jsx(ae,{className:fi.margin,size:"xsmall",icon:i.jsx(ga,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(u,{id:"Timeline.nextPeriodShort"})}),i.jsx(ae,{size:"xsmall",icon:i.jsx(Jn,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsx("div",{className:fi.detailsPeriode,children:i.jsxs(V,{gap:"2",children:[i.jsxs(K,{justify:"space-between",children:[i.jsx(B,{size:"small",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:A(e.fom).format(te).toString(),tomVerdi:A(e.tom).format(te).toString()}})}),i.jsx(T,{size:"small",children:o.formattedString})]}),i.jsx(K,{gap:"2",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:v}})})]})}),e.andeler&&e.andeler.length!==0&&i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Andel"})}),!a&&i.jsxs(i.Fragment,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.KontoType"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Gradering"})})]}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Utbetalingsgrad"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.Refusjon"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.TilSoker"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(u,{id:"TilkjentYtelse.PeriodeData.SisteUtbDato"})})]})}),i.jsx(c.Body,{children:e.andeler.map((f,b)=>i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:TF(f,m,s)}),!a&&i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:hF[f.uttak.stonadskontoType]})}),!a&&i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:RF(f)})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.utbetalingsgrad?f.utbetalingsgrad:""})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.aktivitetStatus===_n.ARBEIDSTAKER&&f.refusjon?f.refusjon:""})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.tilSoker?f.tilSoker:""})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.sisteUtbetalingsdato?A(f.sisteUtbetalingsdato).format(te):""})})]},`index${b+1}`))})]})]})})};Zv.__docgenInfo={description:`TimeLineData

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},isSoknadSvangerskapspenger:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const EF=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,NF=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===hp.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},PF=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:EF(n),start:A(n.fom).toDate(),end:A(n.tom).add(1,"days").toDate(),id:r,periode:n})),qF=(e,n)=>{var t;return((t=n[on.RELASJONSROLLE_TYPE].find(a=>a.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},SF=(e,n)=>{const r=A(e);return r.isBefore(n)?n.subtract(5,"days"):r},Xv=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:r,hovedsokerKjonnKode:t,alleKodeverk:a,arbeidsgiverOpplysningerPerId:s,fagsak:l})=>{const o=Z(),[g,m]=I.useState(),v=I.useMemo(()=>PF(e),[e]),f=I.useCallback(()=>{m(null)},[]),b=I.useCallback(()=>{const _=v.findIndex(G=>G.id===(g==null?void 0:g.id))+1;_<v.length&&m(v[_])},[v,g,m]),y=I.useCallback(()=>{const _=v.findIndex(G=>G.id===(g==null?void 0:g.id))-1;_>=0&&m(v[_])},[v,g,m]),j=I.useCallback(_=>{m(v.find(G=>G.id===_))},[m,v]),R=A(v[0].start),h=A(v[v.length-1].end),[N,E]=I.useState(R),[P,q]=I.useState(h),S=()=>{N.subtract(1,"month").isBefore(R)||(E(N.subtract(1,"month")),q(P.subtract(1,"month")))},D=()=>{P.add(1,"month").isAfter(h)||(E(N.add(1,"month")),q(P.add(1,"month")))},F=()=>{N.add(3,"month").isAfter(P)||(E(N.add(1,"month")),q(P.subtract(1,"month")))},z=()=>{P.add(1,"month").diff(N.subtract(1,"month"),"months")<36&&(E(N.subtract(1,"month")),q(P.add(1,"month")))},J=I.useMemo(()=>NF(r),[r]);return i.jsxs(V,{gap:"4",children:[i.jsxs(we,{startDate:N.toDate(),endDate:P.add(1,"days").toDate(),children:[i.jsxs(we.Pin,{date:A(n).toDate(),children:[i.jsx(T,{children:i.jsx(u,{id:"TilkjentYtelse.Soknadsdato"})}),i.jsx(T,{children:i.jsx(Ae,{dateString:n})})]}),J.dato&&i.jsxs(we.Pin,{date:SF(J.dato,N).toDate(),children:[i.jsx(T,{children:i.jsx(u,{id:J.textId})}),i.jsx(T,{children:i.jsx(Ae,{dateString:J.dato})})]}),i.jsx(we.Row,{label:qF(l,a),icon:t===Mp.KVINNE?i.jsx(Tp,{width:20,height:20,color:"var(--a-red-200)"}):i.jsx(Rp,{width:20,height:20,color:"var(--a-blue-600)"}),children:v.map(_=>i.jsx(we.Period,{start:_.start,end:_.end,status:"success",onSelectPeriod:()=>j(_.id),isActive:(g==null?void 0:g.id)===_.id,icon:_.erGradert?i.jsx(Qp,{"aria-hidden":!0}):i.jsx(Xi,{"aria-hidden":!0}),title:_.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},_.id))})]}),i.jsxs(K,{gap:"2",justify:"end",children:[i.jsx(ae,{size:"small",icon:i.jsx(Fp,{"aria-hidden":!0}),onClick:F,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),i.jsx(ae,{size:"small",icon:i.jsx(Pp,{"aria-hidden":!0}),onClick:z,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),i.jsx(ae,{size:"small",icon:i.jsx(oa,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),i.jsx(ae,{size:"small",icon:i.jsx(ga,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),g&&i.jsx(Zv,{alleKodeverk:a,selectedItemData:g.periode,callbackForward:b,callbackBackward:y,isSoknadSvangerskapspenger:l.fagsakYtelseType===tp.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:s,lukkPeriode:f})]})};Xv.__docgenInfo={description:`TilkjentYtelse

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
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
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
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
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
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
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
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
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""}}};const xF=e=>{var n;return((n=e.find(r=>r.definisjon===le.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse)??void 0},Qv=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:a,soknad:s})=>{var f,b;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:g}=En(),m=xF(g),v=(f=s.søknadsfrist)!=null&&f.mottattDato?(b=s.søknadsfrist)==null?void 0:b.mottattDato:s.mottattDato;return i.jsxs(V,{gap:"4",children:[i.jsx(ue,{size:"small",children:i.jsx(u,{id:"TilkjentYtelse.Title"})}),e&&i.jsx(Xv,{beregningsresultatPeriode:e.perioder,soknadDate:v,familieHendelseSamling:t,hovedsokerKjonnKode:a!=null&&a.bruker?a.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&i.jsx(Wv,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),m&&i.jsxs(V,{gap:"2",children:[i.jsx(B,{children:i.jsx(u,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),i.jsxs(T,{children:[m," ",i.jsx(Xr,{})]})]})]})};Qv.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const BF={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},FF=Ke(BF),_F=e=>i.jsx(Ge,{value:FF,children:i.jsx(Qv,{...e})});_F.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dødsdato: string | null;
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{Ey as A,LB as B,$B as F,WE as I,kF as O,JN as P,nf as S,_F as T,QB as a,Vy as b,TN as c,RA as d,_E as e,Qp as f,Cp as g};
