import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as A,R as C}from"./index-DjhIdADd.js";import{g as Tr,s as ep,o as $i,ak as Yt,f as gn,ah as np,m as ae,h as R,V as K,H as $,L as B,a3 as ke,k as Z,n as se,al as Rn,ai as Mn,P as Ge,E as rt,aj as Jn,l as St,ar as rp,aM as _n,F as tp}from"./withPanelData-DrXorGTR.js";import{i as ap,j as da,M as k,z as Ae,w as $e,q as M,y as Wl,N as Be,A as xe,b as Ee,I as sp,S as Ui,a2 as Hi,s as Ve,L as rr,n as Ke,V as En,t as Eu,c as Yi,$ as Se,P as te,a7 as Oe,e as tt,r as Nu,a8 as Zl,v as pe,C as ip,a as V,a9 as Ci,a3 as Pu,T as lp,x as Ct,U as zr,H as zt,aa as Jt,ab as dp,X as Y,K as x,Z as Jr,ac as op,ad as gp,ae as xr,d as up,o as kp,B as mp}from"./index.es-TkkpexaX.js";import{u as Nn}from"./initFetch-CwiXjhd4.js";import{a as Ye,e as Ce,J as Ne,b as Q,G as Wn,O as An,X as ce,a1 as qu,l as Su,i as xu,K as Qe,c as fn,o as yn,N as bn,H as oa,j as zi,u as xt,f as en,d as Ie,t as ga,Q as Bu,ae as nn,af as $r,Z as ua,ag as vp,ah as pp,E as Fu,ai as fp,aj as Xl,g as ka,h as ma,I as yp}from"./index.es-MpFc6O-f.js";import{A as de,h as va}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as Zn}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as dn}from"./alleKodeverk-BFmIlMu4.js";import{V as bp}from"./venteArsakType-BJdSFL9e.js";import{S as cp}from"./SettPaVentModalIndex-C_gUMaMb.js";import{c as _u}from"./bind-oYjWB_aQ.js";import{d as I}from"./dayjs.min-Cke173X9.js";import{a as Wr,g as Ou}from"./kodeverkUtils-DLZgokMR.js";import{F as tr,P as Ji}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as Wi}from"./eksterneLenker-DOKwbE_M.js";import{L as at}from"./Link-CktbXenl.js";import{S as mr}from"./Spacer-CHLCdlmL.js";import{T as Du,H as Pn,E as jp,b as hp,c as Ap}from"./index.es-X9si7bys.js";import{S as Rr}from"./ExclamationmarkTriangleFill-C3r-BcFo.js";import{a as Zi}from"./FagsakProfileIndex-5NmlePYN.js";import{k as Xi,V as Xn,l as Ip,j as xa,s as wu,O as Tp,S as Rp}from"./VedtakProsessIndex-B9pi_kWP.js";import{P as fr}from"./Popover-ZsPe_W6H.js";import{T as j}from"./Table-_C4Wl6XW.js";import{u as qn,h as Vu}from"./behandlingApi-DiOzRUPy.js";import{u as ar,F as sr}from"./VergeFaktaInitPanel-Dj3cmgc5.js";import{B as Sn}from"./FagsakIndex-Dt8-rmNB.js";import{h as kr}from"./moment-C5S46NFB.js";import{S as Ep}from"./StarFill-CKTrB4Q9.js";import{T as vr}from"./BehandlingSupportIndex-BiHg8xTQ.js";import{a as Np,T as we,b as Pp,S as qp}from"./Timeline-CCoCmzqz.js";import{T as pa}from"./Tag-CuC8BxYY.js";import{C as Sp}from"./Checkbox-DoxGEZY3.js";import{s as xp}from"./BehandlingMenuIndex-Br6B1gJ8.js";import{H as Bp}from"./landkoder-C_7Z8gjJ.js";import{S as Fp}from"./VisittkortSakIndex-CLuR9_jJ.js";import{a as Qi,S as _p}from"./Plus-A7KatZq8.js";import{S as Mu}from"./TotrinnskontrollIndex-BJmF34Sn.js";import{V as Gu}from"./BehandlingHenlagtPanel-BPDENgkb.js";import{i as Op,g as Dp}from"./index-BHG4GVne.js";import{u as el,P as Lu,b as wp}from"./useStandardProsessPanelProps-5igu0wC8.js";import{P as Er,a as Vp,V as nl,b as Mp}from"./OverstyringPanel-bMmLfoB2.js";import{P as Ku}from"./RisikoklassifiseringIndex-Crf5vAlC.js";import{K as Gp}from"./Kjonnkode-C-fkzSiP.js";const rl=A.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Lp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const tl=A.createContext(null),Kp=A.forwardRef((e,n)=>{var{children:r,className:t,open:a,defaultOpen:s=!1,onOpenChange:l}=e,o=Lp(e,["children","className","open","defaultOpen","onOpenChange"]);const[g,m]=ap({defaultValue:s,value:a,onChange:l}),v=A.useContext(rl),{cn:f}=Tr(),y=A.useRef(!(a||s)),b=()=>{m(c=>!c),y.current=!0};return v!=null&&v.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),C.createElement("div",Object.assign({className:f("navds-accordion__item",t,{"navds-accordion__item--open":g,"navds-accordion__item--neutral":(v==null?void 0:v.variant)==="neutral","navds-accordion__item--no-animation":!y.current}),"data-expanded":g,ref:n},ep(o,["onClick"])),C.createElement(tl.Provider,{value:{open:g,toggleOpen:b}},r))});var $p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Up=A.forwardRef((e,n)=>{var{children:r,className:t}=e,a=$p(e,["children","className"]);const s=A.useContext(tl),l=$i(!1),{cn:o}=Tr();return s===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):C.createElement(Yt,Object.assign({},a,{as:"div",ref:n,className:o("navds-accordion__content",{"navds-accordion__content--closed":!s.open},t),"aria-hidden":!s.open||void 0}),l?C.createElement("div",{className:o("navds-accordion__content-inner")},r):r)});var Hp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Yp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Hp(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var Cp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const zp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Cp(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Jp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Wp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Jp(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var Zp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $u=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Zp(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Xp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Br=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Xp(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var Qp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const ef=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Qp(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var nf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const rf=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=nf(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var tf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Uu=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=tf(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var af=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const sf=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=af(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var lf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const df=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=lf(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var of=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Fr=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=of(e,["title","titleId"]);let s=gn();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var gf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const uf=A.forwardRef((e,n)=>{var r,{children:t,className:a,onClick:s}=e,l=gf(e,["children","className","onClick"]);const o=A.useContext(tl),g=A.useContext(rl),m=$i(!1),{cn:v}=Tr();if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let f=(r=g==null?void 0:g.headingSize)!==null&&r!==void 0?r:"small";return m&&(f=(g==null?void 0:g.size)==="small"?"xsmall":"small"),C.createElement("button",Object.assign({ref:n},l,{className:v("navds-accordion__header",a),onClick:np(s,o.toggleOpen),"aria-expanded":o.open,type:"button"}),C.createElement("span",{className:v("navds-accordion__icon-wrapper")},C.createElement(da,{className:v("navds-accordion__header-chevron"),"aria-hidden":!0})),C.createElement(ae,{size:f,as:"span",className:v("navds-accordion__header-content")},t))});var kf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const qe=A.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:a="small",size:s="medium",indent:l=!0}=e,o=kf(e,["className","variant","headingSize","size","indent"]);const{cn:g}=Tr();return C.createElement(rl.Provider,{value:{variant:t,headingSize:a,size:s,mounted:!0}},C.createElement("div",Object.assign({},o,{className:g("navds-accordion",r,`navds-accordion--${s}`,{"navds-accordion--indent":l}),ref:n})))});qe.Header=uf;qe.Content=Up;qe.Item=Kp;const Gt=A.createContext({listType:"ul",size:"medium"});var mf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Hu=A.forwardRef((e,n)=>{var{className:r,children:t,title:a,icon:s}=e,l=mf(e,["className","children","title","icon"]);const{listType:o,size:g}=A.useContext(Gt),{cn:m}=Tr();return o==="ol"&&s&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),C.createElement("li",Object.assign({},l,{ref:n,className:m("navds-list__item",r)}),o==="ul"&&C.createElement("div",{className:m("navds-list__item-marker",{"navds-list__item-marker--icon":s,"navds-list__item-marker--bullet":!s})},s||C.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},C.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),C.createElement("div",null,a&&C.createElement(Yt,{as:"p",size:g,weight:"semibold"},a),t))});Hu.displayName="List.Item";var vf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const pf={small:"xsmall",medium:"small",large:"medium"},ne=A.forwardRef((e,n)=>{var{children:r,className:t,as:a="ul",title:s,description:l,headingTag:o="h3",size:g,"aria-label":m,"aria-labelledby":v}=e,f=vf(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:y}=A.useContext(Gt),{cn:b}=Tr(),c=$i(!1),T=g??y;return c?C.createElement(Gt.Provider,{value:{listType:a,size:T}},C.createElement(Yt,Object.assign({as:"div"},f,{size:T,ref:n,className:b("navds-list",`navds-list--${T}`,t)}),C.createElement(a,{role:"list","aria-label":m,"aria-labelledby":v},r))):C.createElement(Gt.Provider,{value:{listType:a,size:T}},C.createElement(Yt,Object.assign({as:"div"},f,{size:T,ref:n,className:b("navds-list",`navds-list--${T}`,t)}),s&&C.createElement(ae,{size:pf[T],as:o},s),l&&C.createElement(R,{size:T},l),C.createElement(a,{role:"list","aria-label":m,"aria-labelledby":v},r)))});ne.Item=Hu;var le=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(le||{}),ye=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ye||{}),Zr=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Zr||{});const al=A.createContext({isDirty:!1,setDirty:()=>{}}),Yu=({children:e})=>{const[n,r]=A.useState(!1),t=A.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return i.jsx(al.Provider,{value:t,children:e})},sl=e=>{const n=A.useContext(al);A.useEffect(()=>{n.setDirty(e)},[e])},ff=()=>A.useContext(al).isDirty;Yu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const yf="_inline_glms2_1",bf="_docIcon_glms2_9",cf="_phoneIcon_glms2_14",Ba={inline:yf,docIcon:bf,phoneIcon:cf},Xr=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:a,arbeidsgiverFødselsdato:s,ikkeVisInfo:l})=>i.jsxs(i.Fragment,{children:[i.jsxs(K,{gap:"4",children:[!l&&s&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(ke,{children:i.jsx(Ae,{dateString:s})})]}),!l&&!s&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(ke,{children:r.arbeidsgiverIdent})]}),t&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),i.jsx(R,{size:"small",children:r.eksternArbeidsforholdId})]}),n&&i.jsxs(i.Fragment,{children:[i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),i.jsx(R,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:Wr(a,dn.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(R,{size:"small",children:M(r.inntektPrMnd)})]}),i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(R,{size:"small",children:i.jsx(k,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(R,{size:"small",children:M(r.refusjonPrMnd)})]}),i.jsxs(at,{href:Wi(e,r.journalpostId,r.dokumentId),target:"_blank",children:[i.jsx("span",{children:i.jsx(R,{size:"small",className:Ba.inline,children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx($u,{className:Ba.docIcon})]})]}),i.jsxs($,{gap:"4",children:[i.jsx(Uu,{className:Ba.phoneIcon}),i.jsx("div",{children:i.jsxs(K,{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(ke,{children:r.kontaktpersonNavn}),i.jsx(ke,{children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})})]})]});Xr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const jf="_inline_10adz_1",hf="_aksjonpunktImage_10adz_5",Af="_arrow_10adz_12",If="_ikkeMottatt_10adz_18",Tf="_skiller_10adz_30",Kn={inline:jf,aksjonpunktImage:hf,arrow:Af,ikkeMottatt:If,skiller:Tf},Rf=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Ef=(e,n)=>{const r=e.some(a=>a.internArbeidsforholdId),t=e.some(a=>!a.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(a=>!a.internArbeidsforholdId||a.internArbeidsforholdId===n)},Nf=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")},il=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:a})=>{const s=Z(),[l,o]=A.useState({}),g=n.length===1,m=g?Ef(r,n[0].internArbeidsforholdId):void 0;return i.jsxs(K,{gap:"4",children:[a&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(ke,{children:i.jsx(Ae,{dateString:a})})]}),!a&&n.length>0&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(ke,{children:n[0].arbeidsgiverIdent})]}),!g&&i.jsxs(i.Fragment,{children:[i.jsx(Wl,{dividerParagraf:!0,className:Kn.skiller}),n.map(v=>{const f=r.find(y=>Rf(v,y));return i.jsxs(C.Fragment,{children:[i.jsxs(K,{gap:"2",children:[i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),i.jsxs("div",{children:[v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length<50&&i.jsx("div",{children:i.jsx(R,{size:"small",children:v.eksternArbeidsforholdId})}),v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length>=50&&i.jsx(Du,{content:Nf(v.eksternArbeidsforholdId),children:i.jsx(R,{size:"small",children:`${v.eksternArbeidsforholdId.substring(0,50)}...`})}),!v.eksternArbeidsforholdId&&i.jsx(R,{size:"small",children:"-"})]}),f&&i.jsxs(i.Fragment,{children:[i.jsx(mr,{}),i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!f&&i.jsxs(i.Fragment,{children:[i.jsx(mr,{}),i.jsxs("div",{children:[i.jsx(Rr,{className:Kn.aksjonpunktImage,title:s.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),i.jsx("div",{className:Kn.ikkeMottatt,children:i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:v.fom,dateStringTom:v.tom!==Be?v.tom:void 0})}),f&&i.jsxs(i.Fragment,{children:[i.jsx(mr,{}),i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:f.motattDato})})]})]}),i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(R,{size:"small",children:`${v.stillingsprosent}%`})]}),v.permisjonOgMangel&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:Wr(t,dn.PERMISJONSBESKRIVELSE_TYPE,v.permisjonOgMangel.type)}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:v.permisjonOgMangel.permisjonFom,dateStringTom:v.permisjonOgMangel.permisjonTom})})]}),f&&i.jsxs(i.Fragment,{children:[v.internArbeidsforholdId&&l[v.internArbeidsforholdId]&&i.jsx(Xr,{saksnummer:e,inntektsmelding:f,skalViseArbeidsforholdId:!1}),i.jsxs(at,{onClick:y=>{y.preventDefault(),o(b=>{if(!v.internArbeidsforholdId)return b;const c=b[v.internArbeidsforholdId];return{...b,[v.internArbeidsforholdId]:c===void 0||c===!1}})},href:"",children:[i.jsx("span",{children:i.jsx(R,{size:"small",className:Kn.inline,children:i.jsx(k,{id:!v.internArbeidsforholdId||!l[v.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),v.internArbeidsforholdId&&l[v.internArbeidsforholdId]?i.jsx(Zi,{className:Kn.arrow}):i.jsx(da,{className:Kn.arrow})]})]})]}),i.jsx(Wl,{dividerParagraf:!0,className:Kn.skiller})]},`${v.arbeidsgiverIdent}${v.internArbeidsforholdId}`)})]}),g&&!!m&&i.jsx(Xr,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:m,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),g&&r.length===0&&i.jsxs(i.Fragment,{children:[i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(R,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:Wr(t,dn.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})};il.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Pf="_bredde_gb3eb_1",qf="_inline_gb3eb_9",Sf="_arrow_gb3eb_13",Bt={bredde:Pf,inline:qf,arrow:Sf},xf=[],Bf=(e,n)=>{const t=I(e).subtract(1,"month").startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),g=n.find(m=>I(m.fom).startOf("month").format(xe)===o);s.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return s},ll=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:a=xf,alleKodeverk:s,arbeidsgiverFødselsdato:l})=>{const[o,g]=A.useState(!1),m=A.useMemo(()=>Bf(n,r),[r]),v=t.length===1,f=r.length>0&&r.some(y=>y.beløp>0);return i.jsxs(K,{gap:"8",children:[i.jsx(il,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:a,alleKodeverk:s,arbeidsgiverFødselsdato:l}),f&&i.jsxs(K,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:v?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),i.jsx(K,{gap:"1",children:m.filter((y,b)=>o?!0:b<3).map(y=>i.jsxs($,{gap:"2",className:Bt.bredde,children:[i.jsx(R,{size:"small",children:i.jsx(k,{id:`ArbeidsforholdInformasjonPanel.${I(y.fom).month()+1}`})}),i.jsx(R,{size:"small",children:I(y.fom).year()}),i.jsx(mr,{}),i.jsx(R,{size:"small",children:M(y.beløp)})]},y.fom))}),i.jsxs(at,{onClick:y=>{y.preventDefault(),g(!o)},href:"",children:[i.jsx("span",{children:i.jsx(R,{size:"small",className:Bt.inline,children:i.jsx(k,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?i.jsx(Zi,{className:Bt.arrow}):i.jsx(da,{className:Bt.arrow})]})]}),!f&&i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})};ll.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Ff="_hjelpetekst_1kk6h_1",_f="_alertStripe_1kk6h_5",Of="_hjelpetekstInnhold_1kk6h_9",Df="_svg_1kk6h_14",Ft={hjelpetekst:Ff,alertStripe:_f,hjelpetekstInnhold:Of,svg:Df},wf=fn(3),Vf=yn(1500),Mf=Su(1),Gf=xu(100),Lf=e=>n=>{const r=e("fom");return r&&n?oa(r)(n):null},Kf=(e,n,r,t)=>()=>{e(a=>a.map(s=>{if(r.arbeidsgiverIdent===s.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return s}))},Cu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:a,radData:s,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:g,lukkArbeidsforholdRad:m,oppdaterTabell:v,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:y})=>{const b=Z(),c=A.useMemo(()=>{var F,z,J,_,G;return{saksbehandlersVurdering:(F=s.avklaring)==null?void 0:F.saksbehandlersVurdering,begrunnelse:(z=s.avklaring)==null?void 0:z.begrunnelse,fom:(J=s.avklaring)==null?void 0:J.fom,tom:(_=s.avklaring)==null?void 0:_.tom,stillingsprosent:(G=s.avklaring)==null?void 0:G.stillingsprosent}},[s]),T=Ye({defaultValues:c});sl(T.formState.isDirty);const h=T.watch("saksbehandlersVurdering"),N=()=>{m(),T.reset(c)},E=F=>{const z=Kf(v,s,a,F);return F.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:a.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:a.arbeidsgiverIdent,vurdering:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:F.begrunnelse,fom:F.fom,tom:F.tom,stillingsprosent:F.stillingsprosent}).then(z).finally(()=>T.reset(F)):g({behandlingUuid:n,behandlingVersjon:r,vurdering:F.saksbehandlersVurdering,begrunnelse:F.begrunnelse,arbeidsgiverIdent:a.arbeidsgiverIdent,internArbeidsforholdRef:a.internArbeidsforholdId}).then(z).finally(()=>T.reset(F))},P=A.useRef(null),[q,S]=A.useState(!1),D=A.useCallback(()=>S(F=>!F),[]);return i.jsxs(K,{gap:"8",children:[i.jsx(Xr,{saksnummer:e,inntektsmelding:a,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:y}),i.jsx("div",{className:Ft.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(k,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),i.jsx(Ce,{formMethods:T,onSubmit:E,children:i.jsxs(K,{gap:"4",children:[i.jsx(Ne,{name:"saksbehandlersVurdering",label:i.jsxs($,{gap:"2",children:[i.jsx(k,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),i.jsx(Xi,{className:Ft.svg,ref:P,onClick:D,title:b.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),i.jsx(fr,{open:q,onClose:D,anchorEl:P.current,className:Ft.hjelpetekst,children:i.jsx(fr.Content,{className:Ft.hjelpetekstInnhold,children:i.jsx(R,{children:i.jsx(k,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[Q],isReadOnly:l,radios:[{label:b.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:b.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:b.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),h===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&i.jsxs($,{gap:"4",children:[i.jsx(Wn,{name:"fom",label:i.jsx(k,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[Q,An],isReadOnly:l}),i.jsx(Wn,{name:"tom",label:i.jsx(k,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[An,Lf(T.getValues)],isReadOnly:l}),i.jsx(ce,{name:"stillingsprosent",label:i.jsx(k,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:F=>{const z=parseInt(F.toString(),10);return Number.isNaN(z)?F:z},validate:[Q,qu,Mf,Gf],readOnly:l,maxLength:3})]}),i.jsx(Qe,{label:i.jsx(k,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[Q,wf,Vf,bn],maxLength:1500,readOnly:l}),!l&&i.jsxs($,{gap:"4",children:[i.jsx(se,{size:"small",variant:"secondary",loading:T.formState.isSubmitting,disabled:!T.formState.isDirty||T.formState.isSubmitting,children:i.jsx(k,{id:"ManglendeOpplysningerForm.Lagre"})}),i.jsx(se,{size:"small",variant:"tertiary",loading:!1,disabled:T.formState.isSubmitting,onClick:N,type:"button",children:i.jsx(k,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})};Cu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const $f="_alertStripe_9hpes_1",Uf="_hjelpetekst_9hpes_5",Hf="_hjelpetekstInnhold_9hpes_9",Yf="_svg_9hpes_14",_t={alertStripe:$f,hjelpetekst:Uf,hjelpetekstInnhold:Hf,svg:Yf},Cf=fn(3),zf=yn(1500),Jf=(e,n,r)=>()=>{e(t=>t.map(a=>a.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:a))},zu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:a=[],arbeidsforholdForRad:s,inntektsmeldingerForRad:l,radData:o,isReadOnly:g,lagreVurdering:m,lukkArbeidsforholdRad:v,oppdaterTabell:f,alleKodeverk:y,arbeidsgiverFødselsdato:b})=>{const c=Z(),T=A.useMemo(()=>{var J,_;return{saksbehandlersVurdering:(J=o.avklaring)==null?void 0:J.saksbehandlersVurdering,begrunnelse:(_=o.avklaring)==null?void 0:_.begrunnelse}},[o]),h=Ye({defaultValues:T});sl(h.formState.isDirty);const N=s.length===1,E=()=>{v(),h.reset(T)},P=J=>{const _={behandlingUuid:n,behandlingVersjon:r,vurdering:J.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:N?s[0].internArbeidsforholdId:void 0,begrunnelse:J.begrunnelse};return m(_).then(Jf(f,o,J)).finally(()=>h.reset(J))},q=A.useRef(null),[S,D]=A.useState(!1),F=A.useCallback(()=>D(J=>!J),[]),z=[{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:le.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&z.splice(1,0,{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:le.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),i.jsxs(K,{gap:"6",children:[i.jsx(ll,{saksnummer:e,skjæringspunktDato:t,inntektsposter:a,arbeidsforholdForRad:s,inntektsmeldingerForRad:l,alleKodeverk:y,arbeidsgiverFødselsdato:b}),i.jsx(Ce,{formMethods:h,onSubmit:P,children:i.jsxs(K,{gap:"4",children:[!N&&l.length>0&&i.jsx("div",{className:_t.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(k,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),i.jsx(Ne,{name:"saksbehandlersVurdering",label:i.jsxs($,{gap:"2",children:[i.jsx(k,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),i.jsx(Xi,{ref:q,onClick:F,className:_t.svg,title:c.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),i.jsx(fr,{open:S,onClose:F,anchorEl:q.current,className:_t.hjelpetekst,children:i.jsx(fr.Content,{className:_t.hjelpetekstInnhold,children:i.jsxs(K,{gap:"4",children:[i.jsx(R,{children:i.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),i.jsx(R,{children:i.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),i.jsx(R,{children:i.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[Q],isReadOnly:g,radios:z}),i.jsx(Qe,{label:i.jsx(k,{id:N?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[Q,Cf,zf,bn],maxLength:1500,readOnly:g}),!g&&i.jsxs($,{gap:"4",children:[i.jsx(se,{size:"small",variant:"secondary",loading:h.formState.isSubmitting,disabled:!h.formState.isDirty||h.formState.isSubmitting,children:i.jsx(k,{id:"InntektsmeldingInnhentesForm.Lagre"})}),i.jsx(se,{size:"small",variant:"tertiary",loading:!1,disabled:h.formState.isSubmitting,onClick:E,type:"button",children:i.jsx(k,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})]})};zu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const yr="342352362",Wf=fn(3),Zf=yn(1500),Xf=Su(1),Qf=xu(100),ey=e=>n=>{const r=e("fom");return n&&r?oa(r)(n):null},ny=e=>n=>{const r={arbeidsgiverIdent:yr,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(a=>a.arbeidsgiverIdent===yr);return t===-1?n.concat(r):n.map((a,s)=>s===t?r:a)},ry=(e,n,r)=>()=>{e(t=>t.filter(a=>a.arbeidsgiverIdent!==yr)),r&&n()},dl=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:g=!1})=>{const m=Z(),[v,f]=A.useState(!1),y=A.useMemo(()=>{var N,E,P,q,S;return{fom:(N=a==null?void 0:a.avklaring)==null?void 0:N.fom,tom:(E=a==null?void 0:a.avklaring)==null?void 0:E.tom,stillingsprosent:(P=a==null?void 0:a.avklaring)==null?void 0:P.stillingsprosent,begrunnelse:(q=a==null?void 0:a.avklaring)==null?void 0:q.begrunnelse,arbeidsgiverNavn:(S=a==null?void 0:a.avklaring)==null?void 0:S.arbeidsgiverNavn}},[a]),b=Ye({defaultValues:y});sl(b.formState.isDirty);const c=()=>{s(),b.reset(y)},T=N=>{const E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:yr,vurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...N};return t(E).then(()=>{o(ny(N)),b.reset(N),g&&s()})},h=()=>{const N=b.getValues(),E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:yr,vurdering:le.FJERN_FRA_BEHANDLINGEN,...N};t(E).then(ry(o,s,g))};return i.jsxs(K,{gap:"4",children:[!a&&i.jsx(ae,{size:"small",children:i.jsx(k,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),i.jsx(Ce,{formMethods:b,onSubmit:T,children:i.jsxs(K,{gap:"6",children:[i.jsxs($,{gap:"4",children:[l&&i.jsxs(i.Fragment,{children:[i.jsx(ce,{name:"arbeidsgiverNavn",label:i.jsx(k,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[Q],readOnly:r||!l}),i.jsx(Wn,{name:"fom",label:i.jsx(k,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[Q,An],isReadOnly:r||!l}),i.jsx(Wn,{name:"tom",label:i.jsx(k,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[An,ey(b.getValues)],isReadOnly:r||!l})]}),i.jsx(ce,{name:"stillingsprosent",label:i.jsx(k,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:N=>{const E=parseInt(N.toString(),10);return Number.isNaN(E)?N:E},validate:[Q,qu,Xf,Qf],readOnly:r||!l,maxLength:3})]}),i.jsx(Qe,{label:i.jsx(k,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[Q,Wf,Zf,bn],maxLength:1500,readOnly:r||!l}),l&&i.jsxs($,{gap:"4",children:[i.jsx(se,{size:"small",variant:"secondary",loading:b.formState.isSubmitting,disabled:!b.formState.isDirty||b.formState.isSubmitting,children:i.jsx(k,{id:"LeggTilArbeidsforholdForm.Lagre"})}),i.jsx(se,{size:"small",variant:"tertiary",loading:!1,disabled:b.formState.isSubmitting,onClick:c,type:"button",children:i.jsx(k,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&i.jsxs(i.Fragment,{children:[i.jsx(mr,{}),i.jsx(se,{size:"small",variant:"tertiary",loading:!1,disabled:b.formState.isSubmitting,onClick:()=>f(!0),type:"button",icon:i.jsx(df,{"aria-hidden":!0}),children:i.jsx(k,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),v&&i.jsx(sp,{text:m.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:h,cancel:()=>f(!1),showModal:!0})]})};dl.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ty="_imageColTopPadding_1ao5k_1",ay="_exclamationmarkIcon_1ao5k_5",sy="_checkmarkIcon_1ao5k_12",iy="_panelOpen_1ao5k_19",ly="_panelOpenAp_1ao5k_28",dy="_row_1ao5k_38",oy="_isOpen_1ao5k_44",gy="_isApOpen_1ao5k_48",cn={imageColTopPadding:ty,exclamationmarkIcon:ay,checkmarkIcon:sy,panelOpen:iy,panelOpenAp:ly,row:dy,isOpen:oy,isApOpen:gy},uy=_u.bind(cn),ky=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",my=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,a)=>({fom:t.fom&&I(t.fom).isBefore(a.fom)?t.fom:a.fom,tom:t.tom&&I(t.tom).isAfter(a.tom)?t.tom:a.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},vy=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const a=e.find(s=>!s.internArbeidsforholdId||!n||s.internArbeidsforholdId===n);if(!a)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return a},Ju=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:a,isReadOnly:s,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:g,lagreVurdering:m,toggleÅpenRad:v,erRadÅpen:f,alleKodeverk:y})=>{var re,W;const b=Z(),{arbeidsgiverNavn:c,arbeidsgiverIdent:T,årsak:h,avklaring:N,arbeidsgiverFødselsdato:E}=a,P=A.useMemo(()=>t.arbeidsforhold.filter(ie=>ie.arbeidsgiverIdent===T),[t,T]),q=A.useMemo(()=>t.inntektsmeldinger.filter(ie=>ie.arbeidsgiverIdent===T),[t,T]),S=(N==null?void 0:N.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,D=P.length>0&&q.length>0&&!h,F=h===Zr.MANGLENDE_INNTEKTSMELDING,z=h===Zr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,J=!!h&&!(N!=null&&N.saksbehandlersVurdering),_=P.length>0&&q.length===0&&!h&&!S,G=P.length===0&&q.length>0&&!h,w=A.useMemo(()=>my(P,a.avklaring),[S,P,a.avklaring]),H=(re=t.inntekter.find(ie=>ie.arbeidsgiverIdent===T))==null?void 0:re.inntekter;return i.jsxs(j.ExpandableRow,{open:f,onOpenChange:v,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:uy("row",{isOpen:f,isApOpen:J}),content:i.jsxs("div",{className:J?cn.panelOpenAp:cn.panelOpen,children:[S&&i.jsx(dl,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:g,radData:a,lukkArbeidsforholdRad:v,erOverstyrt:l,oppdaterTabell:o}),D&&i.jsx(il,{saksnummer:e,arbeidsforholdForRad:P,inntektsmeldingerForRad:q,alleKodeverk:y,arbeidsgiverFødselsdato:E}),G&&i.jsx(Xr,{saksnummer:e,arbeidsforhold:P.length>0?P[0]:void 0,inntektsmelding:vy(q,P.length>0?(W=P[0])==null?void 0:W.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:y,arbeidsgiverFødselsdato:E}),F&&i.jsx(zu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:H,isReadOnly:s,arbeidsforholdForRad:P,inntektsmeldingerForRad:q,radData:a,lagreVurdering:m,lukkArbeidsforholdRad:v,oppdaterTabell:o,alleKodeverk:y,arbeidsgiverFødselsdato:E}),z&&i.jsx(Cu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:c,inntektsmelding:q[0],radData:a,isReadOnly:s,registrerArbeidsforhold:g,lagreVurdering:m,lukkArbeidsforholdRad:v,oppdaterTabell:o,skalViseArbeidsforholdId:q.length>1}),_&&i.jsx(ll,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:H,arbeidsforholdForRad:P,alleKodeverk:y,arbeidsgiverFødselsdato:E})]}),children:[i.jsxs(j.DataCell,{children:[!J&&i.jsx(Ui,{title:b.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:cn.checkmarkIcon}),J&&i.jsx(Rr,{title:b.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:cn.exclamationmarkIcon})]}),i.jsxs(j.DataCell,{className:f?cn.colTopPadding:void 0,children:[f&&i.jsx(B,{size:"small",children:c}),!f&&i.jsx(R,{size:"small",children:c})]}),i.jsx(j.DataCell,{className:f?cn.colTopPadding:void 0,children:i.jsxs(R,{children:[(w==null?void 0:w.fom)&&i.jsx($e,{dateStringFom:w.fom,dateStringTom:w.tom!==Be?w.tom:void 0}),!w&&"-"]})}),i.jsx(j.DataCell,{className:f?cn.colTopPadding:void 0,children:i.jsx(R,{children:i.jsx(k,{id:ky(S,P.length>0)})})}),i.jsx(j.DataCell,{className:f?cn.colTopPadding:void 0,children:i.jsxs(R,{children:[P.length<2&&q.length===1&&i.jsx(Ae,{dateString:q[0].motattDato}),!F&&P.length>1&&q.length===P.length&&i.jsx(k,{id:"ArbeidsforholdRad.Mottatt"}),(S||F&&q.length<P.length)&&i.jsx(k,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};Ju.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const py="_alertStripe_2poz8_5",fy={alertStripe:py},yy=(e,n)=>{const r=e.some(l=>l.årsak===Zr.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===Zr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=(n==null?void 0:n.status)===Zn.OPPRETTET,s=[];return a&&r&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&t&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s},Wu=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:g,oppdaterTabell:m})=>{const v=Z(),{arbeidsforhold:f,inntektsmeldinger:y}=t,[b,c]=A.useState(!1),[T,h]=A.useState(!1),N=A.useCallback(()=>{g(!0),c(!0);const S=l.findIndex(D=>{var F;return((F=D.avklaring)==null?void 0:F.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});S!==-1&&o([S])},[l,o]),E=A.useMemo(()=>yy(l,n),[e.versjon]),P=l.every(S=>S.arbeidsgiverIdent!==yr),q=(n==null?void 0:n.status)===Zn.OPPRETTET;return i.jsxs(K,{gap:"8",children:[i.jsxs($,{gap:"4",children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&q&&!r&&i.jsx(Hi,{onClick:N}),i.jsx(mr,{}),i.jsx(R,{size:"small",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ve(t.skjæringstidspunkt)}})})]}),i.jsxs(K,{gap:"4",children:[E.length>0&&i.jsx(rr,{children:E.map(S=>v.formatMessage({id:S})).join(" ")}),f.length===0&&y.length===0&&s&&i.jsx("div",{className:fy.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),b&&P&&!T&&i.jsx("div",{children:i.jsx(se,{size:"small",variant:"tertiary",icon:i.jsx(zi,{"aria-hidden":!0}),onClick:()=>h(!0),children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),T&&i.jsx(dl,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>h(!1),oppdaterTabell:m,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})};Wu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const by="_alertStripe_jt670_1",cy="_headerRow_jt670_5",Ql={alertStripe:by,headerRow:cy},jy=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},ed=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,hy=(e,n)=>{const r={saksbehandlersVurdering:e.saksbehandlersVurdering,begrunnelse:e.begrunnelse};return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{...r,arbeidsgiverNavn:n,fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent}:r},Ay=e=>e.årsak?-1:1,Iy=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,a=[...r.sort(Ay)].reduce((l,o)=>{var y;if(l.find(b=>b.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const m=n[o.arbeidsgiverIdent],v=m.navn,f=o.årsak?o.årsak:(y=t.find(b=>ed(o,b)))==null?void 0:y.årsak;return l.concat({arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:v,arbeidsgiverFødselsdato:m.erPrivatPerson?m.fødselsdato:void 0,årsak:f,avklaring:o.saksbehandlersVurdering?hy(o,v):void 0})},[]),s=t.filter(l=>!r.some(o=>ed(o,l))).map(l=>{const o=n[l.arbeidsgiverIdent];return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:o.navn,arbeidsgiverFødselsdato:o.erPrivatPerson?o.fødselsdato:void 0,årsak:l.årsak,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse}:void 0}});return a.concat(s).sort(jy)},nd=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},Zu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>{const[o,g]=A.useState(!1),[m,v]=A.useState(!1),[f,y]=A.useState(!1),{alleKodeverk:b,submitCallback:c,aksjonspunkterForPanel:T,behandling:h,fagsak:N,isReadOnly:E}=Rn(),P=T.length>0?T[0]:void 0,{formData:q,setFormData:S}=Mn(),[D,F]=A.useState(q||Iy(e,n)),[z,J]=A.useState(nd(D)),_=ff();A.useEffect(()=>()=>{S(D)},[D]);const G=je=>{z.some(_e=>_e===je)?J(z.filter(_e=>_e!==je)):J(z.concat(je))},w=A.useRef(null),H=je=>{var _e;F(je),J(nd(je(D))),(_e=w==null?void 0:w.current)==null||_e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},re=()=>{g(!0),c({kode:de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},W=()=>{g(!0),l()},ie=je=>{g(!0),v(!1);const{frist:_e,ventearsak:Sr}=je;Sr&&s({frist:_e,ventearsak:Sr})},Re=D.some(je=>{var _e,Sr,Jl;return((_e=je.avklaring)==null?void 0:_e.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Sr=je.avklaring)==null?void 0:Sr.saksbehandlersVurdering)===le.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((Jl=je.avklaring)==null?void 0:Jl.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),Fe=D.every(je=>!je.årsak||je.årsak&&je.avklaring),ze=P===void 0,Je=(P==null?void 0:P.status)===Zn.UTFORT,X=(P==null?void 0:P.status)===Zn.OPPRETTET,me=!E&&(Je||a&&ze),Te=!E&&X&&Fe&&!_&&Re,sn=!E&&X&&Fe&&!_&&!Re;return i.jsxs(K,{gap:"4",children:[i.jsx(Wu,{behandling:h,aksjonspunkt:P,readOnly:E,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:a,tabellData:D,settÅpneRadIndexer:J,setErOverstyrt:y,oppdaterTabell:H}),i.jsxs(j,{ref:w,children:[i.jsx(j.Header,{children:i.jsxs(j.Row,{className:Ql.headerRow,children:[i.jsx(j.HeaderCell,{scope:"col"}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),i.jsx(j.HeaderCell,{scope:"col"})]})}),i.jsx(j.Body,{children:D.map((je,_e)=>i.jsx(Ju,{arbeidOgInntekt:e,saksnummer:N.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon,radData:je,isReadOnly:E||Je||ze,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>G(_e),erOverstyrt:f,oppdaterTabell:H,erRadÅpen:z.includes(_e),alleKodeverk:b},`${je.arbeidsgiverNavn}${je.arbeidsgiverIdent}${_e}`))})]}),Te&&i.jsxs("div",{children:[i.jsx(se,{size:"small",variant:"primary",disabled:o,onClick:()=>v(!0),type:"button",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),i.jsx(cp,{submitCallback:ie,cancelEvent:()=>v(!1),defaultVenteårsak:bp.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:b[dn.VENT_AARSAK],erTilbakekreving:!1,showModal:m})]}),sn&&i.jsx("div",{children:i.jsx(se,{size:"small",variant:"primary",disabled:o,loading:o,onClick:re,type:"button",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),me&&i.jsxs(K,{gap:"4",children:[i.jsx("div",{className:Ql.alertStripe,children:i.jsx(Ee,{variant:"info",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),i.jsx("div",{children:i.jsx(se,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:W,type:"button",children:i.jsx(k,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};Zu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ty={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},Ry=Ke(Ty),Xu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>i.jsx(Ge,{value:Ry,children:i.jsx(Yu,{children:i.jsx(Zu,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})})});Xu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ey=[de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],Ny=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r,hentOgSettBehandling:t,rettigheter:a}=A.use(Sn),s=ar(Ey),l=qn(r),{data:o}=Nn(l.arbeidOgInntektOptions(r)),{mutate:g}=xt({mutationFn:y=>l.settBehandlingPåVent({frist:y.frist??"",ventearsak:y.ventearsak,behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()}),{mutateAsync:m}=xt({mutationFn:y=>l.registrerArbeidsforholdForAOI(y)}),{mutateAsync:v}=xt({mutationFn:y=>l.lagreVurderingForAOI(y)}),{mutate:f}=xt({mutationFn:()=>l.åpneForNyVurderingAOI({behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()});return i.jsx(sr,{standardPanelProps:s,faktaPanelKode:tr.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:Vu(r,"ARBEID_OG_INNTEKT")&&!va(de.AVKLAR_ARBEIDSFORHOLD,r.aksjonspunkt),children:o?i.jsx(Xu,{arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:e,erOverstyrer:a.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:m,lagreVurdering:v,settBehandlingPåVentCallback:g,åpneForNyVurdering:f}):i.jsx(En,{})})};Ny.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ci=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(ci||{});const Qu=({arbeidsforhold:e})=>e.permisjonOgMangel?i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"PermisjonPeriode.Permisjon"})}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})})]}):null;Qu.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Py=e=>e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,qy=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt",ek=({valgtArbeidsforhold:e})=>{var v,f;const n=e.saksbehandlersVurdering===le.BRUK,r=e.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE,a=e.saksbehandlersVurdering===le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,s=e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((v=e.permisjonOgMangel)==null?void 0:v.permisjonStatus)===ci.BRUK_PERMISJON,g=((f=e.permisjonOgMangel)==null?void 0:f.permisjonStatus)===ci.IKKE_BRUK_PERMISJON,m=Py(e);return i.jsx(Eu,{children:i.jsxs(K,{gap:"4",children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.Header"})}),i.jsx(Qu,{arbeidsforhold:e}),t&&i.jsxs(i.Fragment,{children:[i.jsx(R,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),i.jsxs(R,{size:"small",children:[m&&i.jsx(Ae,{dateString:m}),!m&&"-"]})]})]}),n&&o&&i.jsx(R,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),s&&i.jsx(R,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||g))&&i.jsxs(i.Fragment,{children:[i.jsx(R,{size:"small",children:i.jsx(k,{id:qy(e)})}),r&&i.jsx(R,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&i.jsx(R,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),a&&i.jsx(R,{size:"small",children:i.jsx(k,{id:a?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdDetail.Begrunnelse"})}),i.jsx(R,{size:"small",children:e.begrunnelse})]})]})})};ek.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const nk=()=>i.jsxs(j,{children:[i.jsx(j.Header,{children:i.jsxs(j.Row,{children:[i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:i.jsx("br",{})}},1)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Periode",values:{br:i.jsx("br",{})}},2)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Kilde",values:{br:i.jsx("br",{})}},3)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:i.jsx("br",{})}},4)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:i.jsx("br",{})}},5)})]})}),i.jsx(j.Body,{children:i.jsxs(j.Row,{children:[i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:i.jsx(k,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})}),i.jsx(j.DataCell,{}),i.jsx(j.DataCell,{}),i.jsx(j.DataCell,{}),i.jsx(j.DataCell,{})]})})]});nk.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert"};const Sy="_image_awjuc_1",xy={image:Sy},By=(e,n)=>e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),Wt=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Fy=e=>e?`...${e.substring(e.length-4,e.length)}`:"",_y=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],a=t==null?void 0:t.navn;return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?a:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${a}(${t.identifikator})${Fy(e.eksternArbeidsforholdId)}`:`${a}(${t.identifikator})`},Oy=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`},rk=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:a})=>{const s=Z();return e.length===0?i.jsx(nk,{}):i.jsxs(j,{children:[i.jsx(j.Header,{children:i.jsxs(j.Row,{children:[i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:i.jsx("br",{})}},1)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Periode",values:{br:i.jsx("br",{})}},2)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Kilde",values:{br:i.jsx("br",{})}},3)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:i.jsx("br",{})}},4)}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:i.jsx("br",{})}},5)}),i.jsx(j.HeaderCell,{scope:"col"})]})}),i.jsx(j.Body,{children:e==null?void 0:e.map(l=>{var v;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",g=_y(l,e,t),m=(v=a.find(f=>Wt(l,f)))==null?void 0:v.motattDato;return i.jsxs(j.Row,{onMouseDown:()=>r(l),onKeyDown:()=>r(l),selected:l.arbeidsgiverIdent===n,children:[i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:Yi(g)})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:l.fom,dateStringTom:l.tom!==Be?l.tom:void 0})})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:By(l,s)})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:o})}),i.jsx(j.DataCell,{children:m&&i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:m})})}),i.jsx(j.DataCell,{children:(l.saksbehandlersVurdering===le.BRUK||l.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING)&&i.jsx(Ep,{className:xy.image,title:s.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},Oy(l,t))})})]})};rk.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""}}};const rd=(e,n)=>n.some(r=>Wt(e,r)),Dy=(e,n)=>(r,t)=>{var g,m;const a=e[r.arbeidsgiverIdent],s=e[t.arbeidsgiverIdent];if(a&&s){const v=a.navn.localeCompare(s.navn);if(v!==0)return v}const l=rd(r,n),o=rd(t,n);if(l&&o){const v=(g=n.find(y=>Wt(r,y)))==null?void 0:g.motattDato,f=(m=n.find(y=>Wt(t,y)))==null?void 0:m.motattDato;return kr(f,xe).diff(kr(v,xe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)},tk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=A.useState(),a=g=>{const m=!!g.saksbehandlersVurdering;t(m?g:void 0)},{arbeidsforhold:s,inntektsmeldinger:l}=e,o=s.toSorted(Dy(n,l));return i.jsxs(i.Fragment,{children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),i.jsx(rk,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:a,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&i.jsx(ek,{valgtArbeidsforhold:r})]})};tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const wy={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},Vy=Ke(wy),ak=e=>i.jsx(Ge,{value:Vy,children:i.jsx(tk,{...e})});ak.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const td=[de.AVKLAR_ARBEIDSFORHOLD],My=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),r=ar(td),{behandling:t}=A.use(Sn),a=qn(t),{data:s}=Nn(a.arbeidOgInntektOptions(t));return i.jsx(sr,{standardPanelProps:r,faktaPanelKode:tr.ARBEIDSFORHOLD,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:td.some(l=>va(l,t.aksjonspunkt)),children:s?i.jsx(ak,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(En,{})})};My.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const sk="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn";var he=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(he||{}),ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sd={exports:{}},_r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function Gy(){if(id)return _r;id=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return _r.Fragment=n,_r.jsx=r,_r.jsxs=r,_r}var ld;function Ly(){return ld||(ld=1,sd.exports=Gy()),sd.exports}var u=Ly(),on=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(on||{}),st=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(st||{}),ge=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ge||{});const Qr={};Qr.BA=st.BRUKERS_ANDEL;Qr.FL=st.FRILANS;Qr.SN=st.EGEN_NÆRING;var ir=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ir||{}),ik=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(ik||{});const fa=e=>e==="OPPR";var O=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(O||{}),ol=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(ol||{}),ya=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(ya||{});const Fa=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Vn=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${I(e.fødselsdato).format(te)})${Fa(n)}`:`${e.navn}${Fa(n)}`:`${e.navn} (${e.identifikator})${Fa(n)}`,et="avklarAktiviteterForm",mn="vurderFaktaBeregningForm",Ze=(e,n)=>n.some(r=>r.definisjon===e),Ky=e=>e===ik.OPPRETTET,$y="_begrunnelseTextField_12bwv_1",Uy="_explanationTextarea_12bwv_4",Hy="_explanationTextareaReadOnly_12bwv_7",_a={begrunnelseTextField:$y,explanationTextarea:Uy,explanationTextareaReadOnly:Hy},lk={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},dd=Ke(lk),Yy=fn(3),dk=4e3,Cy=yn(dk),Nr=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||dd.formatMessage({id:l});return u.jsx(Ge,{value:dd,children:(n||r)&&u.jsx("div",{className:_a.begrunnelseTextField,children:u.jsx(Qe,{name:s,label:o,validate:e?[]:[Q,Yy,Cy,bn],className:e?_a.explanationTextareaReadOnly:_a.explanationTextarea,maxLength:dk,readOnly:e})})})};Nr.buildInitialValues=(e,n="begrunnelse")=>({[n]:Yi(e)});Nr.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:gl,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:zy}=he,Jy=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Wy=(e,n,r)=>(e||Jy(gl,n))&&r,ok=e=>e.find(n=>n.definisjon===zy||n.definisjon===gl),Zy=(e,n)=>Ze(gl,e)||n,Xy=(e,n,r)=>e&&n&&!r,Qy=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,od=(e,n)=>e+n.fom.replace(".",""),He=e=>{if(e.arbeidsgiverIdent){const n=Qy(e,e.arbeidsgiverIdent);return od(n,e)}return od(e.arbeidsforholdType,e)},eb=(e,n)=>e||n,Lt=(e,n,r,t,a)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===ir.AAP?!1:n?eb(t,a):!0,nb=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?Vn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[on.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},rb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n)),tb=(e,n,r,t)=>Lt(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",ab=(e,n,r,t,a,s)=>({beregningAktivitetNavn:nb(e,s,n),fom:e.fom,tom:e.tom,skalBrukes:tb(e,r,t,a)}),sb=(e,n,r,t)=>{const a=rb(r,t);return n.filter(s=>e.aktiviteterValues&&(e.aktiviteterValues[He(s)].skalBrukes==="false"||e.aktiviteterValues[He(s)].tom!=null)).map(s=>({oppdragsgiverOrg:s.arbeidsgiverIdent&&s.arbeidsgiverIdent.length===9?s.arbeidsgiverIdent:void 0,arbeidsforholdRef:s.arbeidsforholdId,fom:s.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[He(s)].tom!=null?e.aktiviteterValues[He(s)].tom:s.tom,opptjeningAktivitetType:s.arbeidsforholdType,arbeidsgiverIdentifikator:s.arbeidsgiverIdent,skalBrukes:a&&e.aktiviteterValues?e.aktiviteterValues[He(s)].skalBrukes==="true":!0}))},ib=(e,n,r,t,a,s)=>{const l={};return e&&e.forEach(o=>{l[He(o)]=ab(o,n,r,t,a,s)}),l},lb="_radios_4fctu_1",db="_navnKol_4fctu_10",ob="_table_4fctu_15",Kr={radios:lb,navnKol:db,table:ob},gb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n)),gd=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?Vn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[on.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},ub=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:v})=>{const f=Z(),y=gb(o,l),b=c=>{const T=gd(r,m,t),h=`${Zl(r.fom)} til ${Zl(r.tom||"")}`;return`${c?"Benytt":"Ikke benytt"} ${T} ${h}`};return u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{className:Kr.navnKol,children:u.jsx(R,{size:"small",children:gd(r,m,t)})}),u.jsxs(j.DataCell,{className:Kr.rowalign,children:[!a&&u.jsx(R,{children:u.jsx($e,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),a&&u.jsxs("div",{children:[u.jsxs(R,{as:"span",size:"small",children:[u.jsx(Ae,{dateString:r.fom})," -"," "]}),u.jsx(Wn,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${He(r)}.tom`,validate:[Q,An,oa(r.fom)],isReadOnly:e,size:"small"})]})]}),u.jsx(j.DataCell,{className:Kr.radios,children:u.jsx(Ne,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${He(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[Q],isHorizontal:!0,isReadOnly:e||!Lt(r,a,s,y,g),radios:[{value:"true",label:b(!0)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(j.DataCell,{className:Kr.radios,children:u.jsx(Ne,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${He(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[Q],isHorizontal:!0,isReadOnly:e||!Lt(r,a,s,y,g),radios:[{value:"false",label:b(!1)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(j.DataCell,{children:n&&e&&Lt(r,a,s,y,g)&&u.jsx(tt,{})})]},He(r))},kb=(e,n,r)=>{const t=An(r)?"":I(r).format(te);return e.some(a=>a.arbeidsforholdType&&a.arbeidsforholdType===ir.VENTELØNN_VARTPENGER)?u.jsx(k,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},mb=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],vb=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:v})=>u.jsxs(u.Fragment,{children:[u.jsx(B,{size:"small",children:kb(r,a,l)}),u.jsxs(j,{size:"small",className:Kr.table,children:[u.jsx(j.Header,{children:u.jsxs(j.Row,{children:[mb().map(f=>u.jsx(j.HeaderCell,{scope:"col",children:u.jsx(B,{size:"small",as:"span",children:u.jsx(k,{id:f})})},f)),u.jsx(j.HeaderCell,{})]})}),u.jsx(j.Body,{children:r.map(f=>u.jsx(ub,{aktivitet:f,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:v},`${f.arbeidsgiverIdent}-${f.fom}-${f.tom}`))})]})]}),ji=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=He(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,pb=(e,n)=>{let r=0;for(;r<e.length&&I(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},ud=(e,n,r)=>{const t=e.find(({tom:a})=>a===r);if(t===void 0){const a={tom:r,aktiviteter:[n]},s=pb(e,r);e.splice(s,0,a)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},fb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!I(t.tom).isValid()))},yb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],a=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!a)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:s})=>s).forEach(s=>{if(!s)throw new Error("Må ha aktivitet i form values her!");const l={...s},o=e.aktiviteterValues?e.aktiviteterValues[He(s)].tom:void 0;o&&o!==l.tom&&(l.tom=o),I(o).isSame(I(a).subtract(1,"days"))||I(o).isAfter(I(a).subtract(1,"days"))?ud(t,l,a):ud(t,l,I(o).add(1,"days").format("YYYY-MM-DD"))}),t},ul=(e,n,r)=>{const t=n&&!fb(n)?yb(n):e;return r?t:!n||ji(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},gk=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let a=0;a<t.length;a+=1){const s=e.aktiviteterValues?e.aktiviteterValues[He(t[a])]:void 0;if((s==null?void 0:s.skalBrukes)==="true")return n[r].tom}}},bb=e=>!e||An(e)?"":I(e).format(te),lr=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:g})=>{const m=ul(t,r,a),v=gk(r,m);return u.jsxs(K,{gap:"4",children:[u.jsx(R,{size:"small",children:u.jsx(k,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:bb(v)}})}),m.map(f=>u.jsx(vb,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:f.aktiviteter||[],erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,tomDatoForAktivitetGruppe:f.tom,valgtSkjæringstidspunkt:v,ingenAktiviterErBrukt:v===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:g},f.tom))]})};lr.harIngenAktiviteter=(e,n,r)=>{const t=ul(n,e,r);return ji(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!ji(t[1],e):!0};const cb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n));lr.transformValues=(e,n,r)=>{const t=ul(n,e,r),a=gk(e,t);if(!a)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(s=>sb(e,s.aktiviteter||[],a,s.tom))};const jb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};lr.buildInitialValues=(e,n,r,t,a)=>{if(!e||e.length===0)return{};let s={};const l=jb(e);return e.forEach(o=>{s={...s,...ib(o.aktiviteter||[],n,r,t,cb(l,o.tom),a)}}),s};const hb="_avsnittOverskrift_h44z2_1",Ab={avsnittOverskrift:hb},{AVKLAR_AKTIVITETER:Kt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:uk}=he,kl="begrunnelseAvklareAktiviteter",kk="manuellOverstyringBeregningAktiviteter",Ib=(e,n,r,t,a)=>{const s=Ze(Kt,e),l=Ze(uk,e),o=ok(e);let g;return n&&n.aktiviteterTomDatoMapping&&(g=lr.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,s,t)),{[kk]:l,periode:a.periode,erTilVurdering:a.vurderesIBehandlingen&&!a.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:g,...Nr.buildInitialValues(o==null?void 0:o.begrunnelse,kl)}},kd=e=>{const n=e[kk],r=Wy(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:lr.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[kl]}:null},Tb=(e,n,r,t,a)=>{if(!(r.length<1)&&lr.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return a.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},Rb=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s,submittable:l,fieldId:o,updateOverstyring:g,submitDisabled:m})=>{var v,f;const y=Z(),{resetField:b,watch:c,getValues:T,formState:{isSubmitting:h,errors:N,dirtyFields:E}}=Ie(),P=Object.keys(E).length>0,q=Ze(uk,n),S=!!T(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[D,F]=A.useState(q||S),z=ok(n),J=!!((f=(v=N.avklarAktiviteterForm)==null?void 0:v[o])!=null&&f.begrunnelseAvklareAktiviteter),_=W=>{W?F(!D):!W&&D&&F(!1),b(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),b(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),g(o,W)},G=n.filter(W=>W.definisjon===he.AVKLAR_AKTIVITETER||W.definisjon===he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(W=>Ky(W.status)).length===0,w=Tb(c,o,e.aktiviteterTomDatoMapping||[],S,y),H=`vurderAktiviteterSkjema.${o}`,re=ga(H,w);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:u.jsxs(K,{gap:"1",children:[u.jsxs(K,{gap:"6",children:[Ze(Kt,n)&&!G&&u.jsxs(Ee,{size:"small",variant:"warning",children:[u.jsx(ae,{size:"xsmall",level:"3",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),u.jsxs(K,{gap:"2",children:[u.jsx(R,{size:"small",children:u.jsx(k,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"})}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]})]}),u.jsxs($,{gap:"4",children:[u.jsx(B,{size:"small",className:Ab.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:u.jsx(k,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||q)&&u.jsx(Hi,{onClick:()=>_(!0),erOverstyrt:D})]})]}),D&&u.jsx(B,{size:"small",children:u.jsx(k,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&u.jsxs(K,{gap:"4",children:[u.jsx(lr,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:G,erOverstyrt:D,kodeverkSamling:a,values:c(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:Ze(Kt,n),arbeidsgiverOpplysningerPerId:s,fieldId:o}),re&&u.jsx(rt,{children:re})]}),Zy(n,D)&&u.jsxs(K,{gap:"6",children:[u.jsx(Nr,{name:`avklarAktiviteterForm.${o}.${kl}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(z!=null&&z.begrunnelse)}),u.jsx(Pn,{ident:z==null?void 0:z.vurdertAv,date:z==null?void 0:z.vurdertTidspunkt}),(Ze(Kt,n)||D)&&u.jsx(u.Fragment,{children:u.jsxs($,{gap:"4",children:[u.jsx(Bu,{text:y.formatMessage({id:D?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:Xy(l,!0,J),isDirty:P,isSubmitting:m,isReadOnly:t||G&&!P,hasErrors:J}),!!E&&P&&u.jsx(se,{variant:"secondary",loading:h,disabled:h,onClick:()=>_(!1),size:"small",children:u.jsx(k,{id:"AvklareAktiviteter.Avbryt"})})]})})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:mk,AVKLAR_AKTIVITETER:vk}=he,md="manuellOverstyringBeregningAktiviteter",Eb=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},Nb=(e,n)=>!Ze(vk,e)&&!Ze(mk,e)&&!n,Pb=e=>{const n=e[et],r=n.filter(s=>s[md]).map(kd).filter(s=>s),t=n.filter(s=>!s[md]).map(kd).filter(s=>s),a=[];if(r.length>0){const s=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:mk,begrunnelse:s,grunnlag:r};a.push(l)}if(t.length>0){const s=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:vk,begrunnelse:s,grunnlag:t};a.push(l)}return a},qb=(e,n,r,t)=>({[et]:e.map(a=>{var s;return Ib(a.avklaringsbehov,(s=a.faktaOmBeregning)==null?void 0:s.avklarAktiviteter,n,r,Eb(t,a.vilkårsperiodeFom))})}),Sb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},xb=({erOverstyrer:e,readOnly:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,submittable:a,submitCallback:s,beregningsgrunnlag:l,aktivtBeregningsgrunnlagIndeks:o,vilkår:g,setFormData:m,formData:v,setAvklarAktiviteterErEndret:f})=>{const y=Ye({defaultValues:v||qb(l,r,t,g)}),{formState:{dirtyFields:b,errors:c,isSubmitted:T},control:h,getValues:N,trigger:E,setValue:P}=y;A.useEffect(()=>{var _;(_=b.avklarAktiviteterForm)!=null&&_.some(G=>!!G)?f(!0):f(!1)},[b]),A.useEffect(()=>{var _;T&&(_=b.avklarAktiviteterForm)!=null&&_[o]&&E()},[o]);const q=l.flatMap(_=>_.avklaringsbehov),{fields:S}=en({name:et,control:h}),[D,F]=A.useState(!1),z=(_,G)=>{const w=N(`avklarAktiviteterForm.${_}`);P(`${et}.${_}`,{...w,manuellOverstyringBeregningAktiviteter:G},{shouldDirty:!0})};if(Nb(q,e))return null;const J=_=>{Object.keys(c).length===0&&(F(!0),s(Pb(_)))};return u.jsx(Ce,{formMethods:y,onSubmit:_=>J(_),setDataOnUnmount:m,children:S.map((_,G)=>o===G&&u.jsx(Rb,{aktivtBeregningsgrunnlagIndeks:o,fieldId:G,avklarAktiviteter:Sb(l,G),avklaringsbehovListe:l[G].avklaringsbehov,erOverstyrer:e,readOnly:n,submittable:a,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,updateOverstyring:z,submitDisabled:D},_.id))})},Pe=C.createContext(0),pk=C.createContext(0),kn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:a}=Ie();return A.useEffect(()=>()=>a(e),[]),u.jsx(ce,{name:e,htmlSize:8,parse:Oe,readOnly:n,isEdited:r,validate:n?[]:[Q,nn(178956970)],label:t})};kn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(a=>a.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const Bb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Ur=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:a})=>{var s,l;const{getValues:o}=Ie(),g=C.useContext(Pe),m=o(`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues`);if(!m)return null;const v=(s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent,f=Bb(m,v),y=`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues.${f}.fastsattBelop`,b=v?(l=a[v])==null?void 0:l.navn:void 0;return u.jsx(kn,{name:y,readOnly:n,isAksjonspunktClosed:r,label:t||u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${b} (${v})`}})})};Ur.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===ge.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const a={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(a)}),n};const un=e=>e==="true",Fb="_navetLink_15r5n_1",fk={navetLink:Fb},We="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:_b}=he,it=({readOnly:e,erOverstyrt:n})=>{const r=C.useContext(Pe),t=Z(),a=e||n;return u.jsxs($,{gap:"2",wrap:!1,children:[u.jsx(Ne,{label:u.jsx(k,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${We}`,isReadOnly:a,validate:a?[]:[Q],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:un}),u.jsx("div",{children:u.jsx("a",{className:fk.navetLink,href:sk,target:"_blank",rel:"noopener noreferrer",children:u.jsx(k,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})};it.buildInitialValues=(e,n,r,t)=>r.includes(O.VURDER_BESTEBEREGNING)||r.includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(a=>a.definisjon===_b)!==void 0||t?{[We]:!1}:{[We]:n.skalHaBesteberegning}:{}:{};const vd=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};it.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[We]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:s})=>s!==!0).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,lagtTilAvSaksbehandler:!!s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:vd(s.inntektskategori)}})),a=r.find(s=>s.nyAndel&&s.aktivitetStatus===ge.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:a?{fastsatteVerdier:{fastsattBeløp:a.fastsattBelop,inntektskategori:vd(a.inntektskategori)}}:void 0}}};const Ob=e=>(n,r)=>{var t;const a=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(a.map(o=>o).includes(O.VURDER_BESTEBEREGNING)||a.map(o=>o).includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const s=it.transformValues(n,e,r),l=[O.VURDER_BESTEBEREGNING];return(t=s.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&s.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...s}},Db="_fadeinTabell_l1t64_1",wb={fadeinTabell:Db},br="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Vb,AVKLAR_AKTIVITETER:Mb}=he,Gb=(e,n)=>n.some(r=>r.definisjon===e),Lb=(e,n)=>e&&!n.some(r=>r.definisjon===Mb&&fa(r.status)),ml=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:a,updateOverstyring:s,erOverstyrer:l,erOverstyrt:o})=>{const[g,m]=A.useState(o),v=C.useContext(Pe),f=A.useMemo(()=>Lb(l,a),[l,a]),y=()=>{m(!g),s(v,!g)};return u.jsx("div",{className:wb.fadeinTabell,children:r&&u.jsxs(K,{gap:"4",children:[u.jsxs($,{gap:"4",children:[u.jsx(ae,{level:"3",size:"xsmall",children:u.jsx(k,{id:"InntektstabellPanel.RapporterteInntekter"})}),(f||g)&&u.jsx(Hi,{onClick:y,erOverstyrt:t||g||Gb(Vb,a)})]}),n&&u.jsx(B,{size:"small",children:u.jsx(k,{id:n})}),e,g&&!t&&u.jsx($,{children:u.jsx(se,{size:"small",onClick:y,variant:"secondary",children:u.jsx(k,{id:"InntektstabellPanel.Avbryt"})})})]})})};ml.buildInitialValues=e=>({[br]:e});const yk=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(a=>a.aktivitetStatus===ge.ARBEIDSTAKER).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsforholdId).length>0:!1},cr="lonnsendringField",lt=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[Q],parse:un})},Kb=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};lt.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(a=>a.aktivitetStatus===ge.ARBEIDSTAKER);return!t||t.length<1||(n[cr]=Kb(t)),n};const $b=(e,n,r)=>!!r[cr]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;lt.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(O.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[O.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[cr]}}:{};const hn="NyoppstartetFLField",dt=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${hn}`,validate:[Q],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:un})};dt.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===ge.FRILANSER);return t.length>0&&(r[hn]=(n=t[0])==null?void 0:n.erNyoppstartet),r};dt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[hn]}};const a=n.find(l=>l.aktivitetStatus===ge.FRILANSER);if(!a)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[hn]}};if(a.andelsnr&&t.includes(a.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[hn]}};a.andelsnr&&t.push(a.andelsnr);const s={fastsettMaanedsinntektFL:{maanedsinntekt:a.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL,O.FASTSETT_MAANEDSINNTEKT_FL],...s,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[hn]}}};var pd={},Or,fd;function rn(){if(fd)return Or;fd=1;var e=function(n){return n&&n.Math===Math&&n};return Or=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof ad=="object"&&ad)||e(typeof Or=="object"&&Or)||function(){return this}()||Function("return this")(),Or}var Oa={},yd,bd;function xn(){return bd||(bd=1,yd=function(e){try{return!!e()}catch{return!0}}),yd}var Da,cd;function Gn(){if(cd)return Da;cd=1;var e=xn();return Da=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Da}var wa,jd;function vl(){if(jd)return wa;jd=1;var e=xn();return wa=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),wa}var Va,hd;function pl(){if(hd)return Va;hd=1;var e=vl(),n=Function.prototype.call;return Va=e?n.bind(n):function(){return n.apply(n,arguments)},Va}var Ma={},Ad;function Ub(){if(Ad)return Ma;Ad=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Ma.f=r?function(t){var a=n(this,t);return!!a&&a.enumerable}:e,Ma}var Id,Td;function bk(){return Td||(Td=1,Id=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),Id}var Ga,Rd;function tn(){if(Rd)return Ga;Rd=1;var e=vl(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return Ga=e?t:function(a){return function(){return r.apply(a,arguments)}},Ga}var La,Ed;function ba(){if(Ed)return La;Ed=1;var e=tn(),n=e({}.toString),r=e("".slice);return La=function(t){return r(n(t),8,-1)},La}var Ka,Nd;function Hb(){if(Nd)return Ka;Nd=1;var e=tn(),n=xn(),r=ba(),t=Object,a=e("".split);return Ka=n(function(){return!t("z").propertyIsEnumerable(0)})?function(s){return r(s)==="String"?a(s,""):t(s)}:t,Ka}var Pd,qd;function ck(){return qd||(qd=1,Pd=function(e){return e==null}),Pd}var $a,Sd;function jk(){if(Sd)return $a;Sd=1;var e=ck(),n=TypeError;return $a=function(r){if(e(r))throw new n("Can't call method on "+r);return r},$a}var Ua,xd;function ca(){if(xd)return Ua;xd=1;var e=Hb(),n=jk();return Ua=function(r){return e(n(r))},Ua}var Ha,Bd;function an(){if(Bd)return Ha;Bd=1;var e=typeof document=="object"&&document.all;return Ha=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},Ha}var Ya,Fd;function Pr(){if(Fd)return Ya;Fd=1;var e=an();return Ya=function(n){return typeof n=="object"?n!==null:e(n)},Ya}var Ca,_d;function ja(){if(_d)return Ca;_d=1;var e=rn(),n=an(),r=function(t){return n(t)?t:void 0};return Ca=function(t,a){return arguments.length<2?r(e[t]):e[t]&&e[t][a]},Ca}var za,Od;function Yb(){if(Od)return za;Od=1;var e=tn();return za=e({}.isPrototypeOf),za}var Ja,Dd;function Cb(){if(Dd)return Ja;Dd=1;var e=rn(),n=e.navigator,r=n&&n.userAgent;return Ja=r?String(r):"",Ja}var Wa,wd;function zb(){if(wd)return Wa;wd=1;var e=rn(),n=Cb(),r=e.process,t=e.Deno,a=r&&r.versions||t&&t.version,s=a&&a.v8,l,o;return s&&(l=s.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),Wa=o,Wa}var Za,Vd;function hk(){if(Vd)return Za;Vd=1;var e=zb(),n=xn(),r=rn(),t=r.String;return Za=!!Object.getOwnPropertySymbols&&!n(function(){var a=Symbol("symbol detection");return!t(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&e&&e<41}),Za}var Xa,Md;function Ak(){if(Md)return Xa;Md=1;var e=hk();return Xa=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Xa}var Qa,Gd;function Ik(){if(Gd)return Qa;Gd=1;var e=ja(),n=an(),r=Yb(),t=Ak(),a=Object;return Qa=t?function(s){return typeof s=="symbol"}:function(s){var l=e("Symbol");return n(l)&&r(l.prototype,a(s))},Qa}var es,Ld;function Jb(){if(Ld)return es;Ld=1;var e=String;return es=function(n){try{return e(n)}catch{return"Object"}},es}var ns,Kd;function fl(){if(Kd)return ns;Kd=1;var e=an(),n=Jb(),r=TypeError;return ns=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},ns}var rs,$d;function Wb(){if($d)return rs;$d=1;var e=fl(),n=ck();return rs=function(r,t){var a=r[t];return n(a)?void 0:e(a)},rs}var ts,Ud;function Zb(){if(Ud)return ts;Ud=1;var e=pl(),n=an(),r=Pr(),t=TypeError;return ts=function(a,s){var l,o;if(s==="string"&&n(l=a.toString)&&!r(o=e(l,a))||n(l=a.valueOf)&&!r(o=e(l,a))||s!=="string"&&n(l=a.toString)&&!r(o=e(l,a)))return o;throw new t("Can't convert object to primitive value")},ts}var as={exports:{}},Hd,Yd;function Xb(){return Yd||(Yd=1,Hd=!1),Hd}var ss,Cd;function yl(){if(Cd)return ss;Cd=1;var e=rn(),n=Object.defineProperty;return ss=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},ss}var zd;function bl(){if(zd)return as.exports;zd=1;var e=Xb(),n=rn(),r=yl(),t="__core-js_shared__",a=as.exports=n[t]||r(t,{});return(a.versions||(a.versions=[])).push({version:"3.41.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),as.exports}var is,Jd;function Tk(){if(Jd)return is;Jd=1;var e=bl();return is=function(n,r){return e[n]||(e[n]=r||{})},is}var ls,Wd;function Rk(){if(Wd)return ls;Wd=1;var e=jk(),n=Object;return ls=function(r){return n(e(r))},ls}var ds,Zd;function dr(){if(Zd)return ds;Zd=1;var e=tn(),n=Rk(),r=e({}.hasOwnProperty);return ds=Object.hasOwn||function(t,a){return r(n(t),a)},ds}var os,Xd;function Ek(){if(Xd)return os;Xd=1;var e=tn(),n=0,r=Math.random(),t=e(1 .toString);return os=function(a){return"Symbol("+(a===void 0?"":a)+")_"+t(++n+r,36)},os}var gs,Qd;function ot(){if(Qd)return gs;Qd=1;var e=rn(),n=Tk(),r=dr(),t=Ek(),a=hk(),s=Ak(),l=e.Symbol,o=n("wks"),g=s?l.for||l:l&&l.withoutSetter||t;return gs=function(m){return r(o,m)||(o[m]=a&&r(l,m)?l[m]:g("Symbol."+m)),o[m]},gs}var us,eo;function Qb(){if(eo)return us;eo=1;var e=pl(),n=Pr(),r=Ik(),t=Wb(),a=Zb(),s=ot(),l=TypeError,o=s("toPrimitive");return us=function(g,m){if(!n(g)||r(g))return g;var v=t(g,o),f;if(v){if(m===void 0&&(m="default"),f=e(v,g,m),!n(f)||r(f))return f;throw new l("Can't convert object to primitive value")}return m===void 0&&(m="number"),a(g,m)},us}var ks,no;function Nk(){if(no)return ks;no=1;var e=Qb(),n=Ik();return ks=function(r){var t=e(r,"string");return n(t)?t:t+""},ks}var ms,ro;function Pk(){if(ro)return ms;ro=1;var e=rn(),n=Pr(),r=e.document,t=n(r)&&n(r.createElement);return ms=function(a){return t?r.createElement(a):{}},ms}var vs,to;function qk(){if(to)return vs;to=1;var e=Gn(),n=xn(),r=Pk();return vs=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),vs}var ao;function Sk(){if(ao)return Oa;ao=1;var e=Gn(),n=pl(),r=Ub(),t=bk(),a=ca(),s=Nk(),l=dr(),o=qk(),g=Object.getOwnPropertyDescriptor;return Oa.f=e?g:function(m,v){if(m=a(m),v=s(v),o)try{return g(m,v)}catch{}if(l(m,v))return t(!n(r.f,m,v),m[v])},Oa}var ps={},fs,so;function xk(){if(so)return fs;so=1;var e=Gn(),n=xn();return fs=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),fs}var ys,io;function ha(){if(io)return ys;io=1;var e=Pr(),n=String,r=TypeError;return ys=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},ys}var lo;function gt(){if(lo)return ps;lo=1;var e=Gn(),n=qk(),r=xk(),t=ha(),a=Nk(),s=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,g="enumerable",m="configurable",v="writable";return ps.f=e?r?function(f,y,b){if(t(f),y=a(y),t(b),typeof f=="function"&&y==="prototype"&&"value"in b&&v in b&&!b[v]){var c=o(f,y);c&&c[v]&&(f[y]=b.value,b={configurable:m in b?b[m]:c[m],enumerable:g in b?b[g]:c[g],writable:!1})}return l(f,y,b)}:l:function(f,y,b){if(t(f),y=a(y),t(b),n)try{return l(f,y,b)}catch{}if("get"in b||"set"in b)throw new s("Accessors not supported");return"value"in b&&(f[y]=b.value),f},ps}var bs,oo;function Bk(){if(oo)return bs;oo=1;var e=Gn(),n=gt(),r=bk();return bs=e?function(t,a,s){return n.f(t,a,r(1,s))}:function(t,a,s){return t[a]=s,t},bs}var cs={exports:{}},js,go;function ec(){if(go)return js;go=1;var e=Gn(),n=dr(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,a=n(r,"name"),s=a&&(function(){}).name==="something",l=a&&(!e||e&&t(r,"name").configurable);return js={EXISTS:a,PROPER:s,CONFIGURABLE:l},js}var hs,uo;function Fk(){if(uo)return hs;uo=1;var e=tn(),n=an(),r=bl(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(a){return t(a)}),hs=r.inspectSource,hs}var As,ko;function nc(){if(ko)return As;ko=1;var e=rn(),n=an(),r=e.WeakMap;return As=n(r)&&/native code/.test(String(r)),As}var Is,mo;function _k(){if(mo)return Is;mo=1;var e=Tk(),n=Ek(),r=e("keys");return Is=function(t){return r[t]||(r[t]=n(t))},Is}var vo,po;function cl(){return po||(po=1,vo={}),vo}var Ts,fo;function rc(){if(fo)return Ts;fo=1;var e=nc(),n=rn(),r=Pr(),t=Bk(),a=dr(),s=bl(),l=_k(),o=cl(),g="Object already initialized",m=n.TypeError,v=n.WeakMap,f,y,b,c=function(E){return b(E)?y(E):f(E,{})},T=function(E){return function(P){var q;if(!r(P)||(q=y(P)).type!==E)throw new m("Incompatible receiver, "+E+" required");return q}};if(e||s.state){var h=s.state||(s.state=new v);h.get=h.get,h.has=h.has,h.set=h.set,f=function(E,P){if(h.has(E))throw new m(g);return P.facade=E,h.set(E,P),P},y=function(E){return h.get(E)||{}},b=function(E){return h.has(E)}}else{var N=l("state");o[N]=!0,f=function(E,P){if(a(E,N))throw new m(g);return P.facade=E,t(E,N,P),P},y=function(E){return a(E,N)?E[N]:{}},b=function(E){return a(E,N)}}return Ts={set:f,get:y,has:b,enforce:c,getterFor:T},Ts}var yo;function tc(){if(yo)return cs.exports;yo=1;var e=tn(),n=xn(),r=an(),t=dr(),a=Gn(),s=ec().CONFIGURABLE,l=Fk(),o=rc(),g=o.enforce,m=o.get,v=String,f=Object.defineProperty,y=e("".slice),b=e("".replace),c=e([].join),T=a&&!n(function(){return f(function(){},"length",{value:8}).length!==8}),h=String(String).split("String"),N=cs.exports=function(E,P,q){y(v(P),0,7)==="Symbol("&&(P="["+b(v(P),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),q&&q.getter&&(P="get "+P),q&&q.setter&&(P="set "+P),(!t(E,"name")||s&&E.name!==P)&&(a?f(E,"name",{value:P,configurable:!0}):E.name=P),T&&q&&t(q,"arity")&&E.length!==q.arity&&f(E,"length",{value:q.arity});try{q&&t(q,"constructor")&&q.constructor?a&&f(E,"prototype",{writable:!1}):E.prototype&&(E.prototype=void 0)}catch{}var S=g(E);return t(S,"source")||(S.source=c(h,typeof P=="string"?P:"")),E};return Function.prototype.toString=N(function(){return r(this)&&m(this).source||l(this)},"toString"),cs.exports}var Rs,bo;function ac(){if(bo)return Rs;bo=1;var e=an(),n=gt(),r=tc(),t=yl();return Rs=function(a,s,l,o){o||(o={});var g=o.enumerable,m=o.name!==void 0?o.name:s;if(e(l)&&r(l,m,o),o.global)g?a[s]=l:t(s,l);else{try{o.unsafe?a[s]&&(g=!0):delete a[s]}catch{}g?a[s]=l:n.f(a,s,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return a},Rs}var Es={},Ns,co;function sc(){if(co)return Ns;co=1;var e=Math.ceil,n=Math.floor;return Ns=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},Ns}var Ps,jo;function Ok(){if(jo)return Ps;jo=1;var e=sc();return Ps=function(n){var r=+n;return r!==r||r===0?0:e(r)},Ps}var qs,ho;function ic(){if(ho)return qs;ho=1;var e=Ok(),n=Math.max,r=Math.min;return qs=function(t,a){var s=e(t);return s<0?n(s+a,0):r(s,a)},qs}var Ss,Ao;function lc(){if(Ao)return Ss;Ao=1;var e=Ok(),n=Math.min;return Ss=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},Ss}var xs,Io;function jl(){if(Io)return xs;Io=1;var e=lc();return xs=function(n){return e(n.length)},xs}var Bs,To;function dc(){if(To)return Bs;To=1;var e=ca(),n=ic(),r=jl(),t=function(a){return function(s,l,o){var g=e(s),m=r(g);if(m===0)return!a&&-1;var v=n(o,m),f;if(a&&l!==l){for(;m>v;)if(f=g[v++],f!==f)return!0}else for(;m>v;v++)if((a||v in g)&&g[v]===l)return a||v||0;return!a&&-1}};return Bs={includes:t(!0),indexOf:t(!1)},Bs}var Fs,Ro;function Dk(){if(Ro)return Fs;Ro=1;var e=tn(),n=dr(),r=ca(),t=dc().indexOf,a=cl(),s=e([].push);return Fs=function(l,o){var g=r(l),m=0,v=[],f;for(f in g)!n(a,f)&&n(g,f)&&s(v,f);for(;o.length>m;)n(g,f=o[m++])&&(~t(v,f)||s(v,f));return v},Fs}var Eo,No;function hl(){return No||(No=1,Eo=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Eo}var Po;function oc(){if(Po)return Es;Po=1;var e=Dk(),n=hl(),r=n.concat("length","prototype");return Es.f=Object.getOwnPropertyNames||function(t){return e(t,r)},Es}var qo={},So;function gc(){return So||(So=1,qo.f=Object.getOwnPropertySymbols),qo}var _s,xo;function uc(){if(xo)return _s;xo=1;var e=ja(),n=tn(),r=oc(),t=gc(),a=ha(),s=n([].concat);return _s=e("Reflect","ownKeys")||function(l){var o=r.f(a(l)),g=t.f;return g?s(o,g(l)):o},_s}var Os,Bo;function kc(){if(Bo)return Os;Bo=1;var e=dr(),n=uc(),r=Sk(),t=gt();return Os=function(a,s,l){for(var o=n(s),g=t.f,m=r.f,v=0;v<o.length;v++){var f=o[v];!e(a,f)&&!(l&&e(l,f))&&g(a,f,m(s,f))}},Os}var Ds,Fo;function mc(){if(Fo)return Ds;Fo=1;var e=xn(),n=an(),r=/#|\.prototype\./,t=function(g,m){var v=s[a(g)];return v===o?!0:v===l?!1:n(m)?e(m):!!m},a=t.normalize=function(g){return String(g).replace(r,".").toLowerCase()},s=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return Ds=t,Ds}var ws,_o;function vc(){if(_o)return ws;_o=1;var e=rn(),n=Sk().f,r=Bk(),t=ac(),a=yl(),s=kc(),l=mc();return ws=function(o,g){var m=o.target,v=o.global,f=o.stat,y,b,c,T,h,N;if(v?b=e:f?b=e[m]||a(m,{}):b=e[m]&&e[m].prototype,b)for(c in g){if(h=g[c],o.dontCallGetSet?(N=n(b,c),T=N&&N.value):T=b[c],y=l(v?c:m+(f?".":"#")+c,o.forced),!y&&T!==void 0){if(typeof h==typeof T)continue;s(h,T)}(o.sham||T&&T.sham)&&r(h,"sham",!0),t(b,c,h,o)}},ws}var Vs,Oo;function wk(){if(Oo)return Vs;Oo=1;var e=ba();return Vs=Array.isArray||function(n){return e(n)==="Array"},Vs}var Ms,Do;function pc(){if(Do)return Ms;Do=1;var e=TypeError,n=9007199254740991;return Ms=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Ms}var Gs,wo;function fc(){if(wo)return Gs;wo=1;var e=ba(),n=tn();return Gs=function(r){if(e(r)==="Function")return n(r)},Gs}var Ls,Vo;function yc(){if(Vo)return Ls;Vo=1;var e=fc(),n=fl(),r=vl(),t=e(e.bind);return Ls=function(a,s){return n(a),s===void 0?a:r?t(a,s):function(){return a.apply(s,arguments)}},Ls}var Ks,Mo;function bc(){if(Mo)return Ks;Mo=1;var e=wk(),n=jl(),r=pc(),t=yc(),a=function(s,l,o,g,m,v,f,y){for(var b=m,c=0,T=f?t(f,y):!1,h,N;c<g;)c in o&&(h=T?T(o[c],c,l):o[c],v>0&&e(h)?(N=n(h),b=a(s,l,h,N,b,v-1)-1):(r(b+1),s[b]=h),b++),c++;return b};return Ks=a,Ks}var $s,Go;function cc(){if(Go)return $s;Go=1;var e=ot(),n=e("toStringTag"),r={};return r[n]="z",$s=String(r)==="[object z]",$s}var Us,Lo;function jc(){if(Lo)return Us;Lo=1;var e=cc(),n=an(),r=ba(),t=ot(),a=t("toStringTag"),s=Object,l=r(function(){return arguments}())==="Arguments",o=function(g,m){try{return g[m]}catch{}};return Us=e?r:function(g){var m,v,f;return g===void 0?"Undefined":g===null?"Null":typeof(v=o(m=s(g),a))=="string"?v:l?r(m):(f=r(m))==="Object"&&n(m.callee)?"Arguments":f},Us}var Hs,Ko;function hc(){if(Ko)return Hs;Ko=1;var e=tn(),n=xn(),r=an(),t=jc(),a=ja(),s=Fk(),l=function(){},o=a("Reflect","construct"),g=/^\s*(?:class|function)\b/,m=e(g.exec),v=!g.test(l),f=function(b){if(!r(b))return!1;try{return o(l,[],b),!0}catch{return!1}},y=function(b){if(!r(b))return!1;switch(t(b)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!m(g,s(b))}catch{return!0}};return y.sham=!0,Hs=!o||n(function(){var b;return f(f.call)||!f(Object)||!f(function(){b=!0})||b})?y:f,Hs}var Ys,$o;function Ac(){if($o)return Ys;$o=1;var e=wk(),n=hc(),r=Pr(),t=ot(),a=t("species"),s=Array;return Ys=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===s||e(o.prototype))?o=void 0:r(o)&&(o=o[a],o===null&&(o=void 0))),o===void 0?s:o},Ys}var Cs,Uo;function Ic(){if(Uo)return Cs;Uo=1;var e=Ac();return Cs=function(n,r){return new(e(n))(r===0?0:r)},Cs}var Ho;function Tc(){if(Ho)return pd;Ho=1;var e=vc(),n=bc(),r=fl(),t=Rk(),a=jl(),s=Ic();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),g=a(o),m;return r(l),m=s(o,0),m.length=n(m,o,o,g,0,1,l,arguments.length>1?arguments[1]:void 0),m}}),pd}var Yo={},zs={},Js,Co;function Rc(){if(Co)return Js;Co=1;var e=Dk(),n=hl();return Js=Object.keys||function(r){return e(r,n)},Js}var zo;function Ec(){if(zo)return zs;zo=1;var e=Gn(),n=xk(),r=gt(),t=ha(),a=ca(),s=Rc();return zs.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var g=a(o),m=s(o),v=m.length,f=0,y;v>f;)r.f(l,y=m[f++],g[y]);return l},zs}var Ws,Jo;function Nc(){if(Jo)return Ws;Jo=1;var e=ja();return Ws=e("document","documentElement"),Ws}var Zs,Wo;function Pc(){if(Wo)return Zs;Wo=1;var e=ha(),n=Ec(),r=hl(),t=cl(),a=Nc(),s=Pk(),l=_k(),o=">",g="<",m="prototype",v="script",f=l("IE_PROTO"),y=function(){},b=function(E){return g+v+o+E+g+"/"+v+o},c=function(E){E.write(b("")),E.close();var P=E.parentWindow.Object;return E=null,P},T=function(){var E=s("iframe"),P="java"+v+":",q;return E.style.display="none",a.appendChild(E),E.src=String(P),q=E.contentWindow.document,q.open(),q.write(b("document.F=Object")),q.close(),q.F},h,N=function(){try{h=new ActiveXObject("htmlfile")}catch{}N=typeof document<"u"?document.domain&&h?c(h):T():c(h);for(var E=r.length;E--;)delete N[m][r[E]];return N()};return t[f]=!0,Zs=Object.create||function(E,P){var q;return E!==null?(y[m]=e(E),q=new y,y[m]=null,q[f]=E):q=N(),P===void 0?q:n.f(q,P)},Zs}var Xs,Zo;function qc(){if(Zo)return Xs;Zo=1;var e=ot(),n=Pc(),r=gt().f,t=e("unscopables"),a=Array.prototype;return a[t]===void 0&&r(a,t,{configurable:!0,value:n(null)}),Xs=function(s){a[t][s]=!0},Xs}var Xo;function Sc(){if(Xo)return Yo;Xo=1;var e=qc();return e("flatMap"),Yo}var Qs,Qo;function xc(){if(Qo)return Qs;Qo=1;var e=rn(),n=tn();return Qs=function(r,t){return n(e[r].prototype[t])},Qs}var ei,eg;function Bc(){if(eg)return ei;eg=1,Tc(),Sc();var e=xc();return ei=e("Array","flatMap"),ei}var ni,ng;function Fc(){if(ng)return ni;ng=1;var e=Bc();return ni=e,ni}var ri,rg;function _c(){if(rg)return ri;rg=1;var e=Fc();return ri=e,ri}var ti,tg;function Oc(){if(tg)return ti;tg=1;var e=_c();return ti=e,ti}var ag,sg;function Dc(){return sg||(sg=1,ag=Oc()),ag}Dc();const Dn="vurderEtterlønnSluttpakke",ut=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${Dn}`,validate:[Q],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:un})})};ut.buildInitialValues=(e,n)=>{var r,t,a;const s={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!fa(n.status),o=e.beregningsgrunnlagPeriode.flatMap(g=>g.beregningsgrunnlagPrStatusOgAndel).filter(g=>(g==null?void 0:g.arbeidsforhold)&&(g==null?void 0:g.arbeidsforhold.arbeidsforholdType)===ir.ETTERLONN_SLUTTPAKKE);return o.length>0&&(s[Dn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((a=o[0])==null?void 0:a.beregnetPrAar)>0:void 0),s};const wc=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===ir.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};ut.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(O.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}};const a=wc(r);if(!a)return{};const s=n.find(o=>o.andelsnr===a);if(!s)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}};s.andelsnr&&t.push(s.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE,O.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Dn]}}};const Vk="mottarYtelseField",Vc="_frilans",or=e=>Vk+e.andelsnr,Qn=()=>Vk+Vc,Mc=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[or(r)]).find(r=>r)!==void 0,Mk=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[Qn()]:void 0,Gk=(e,n,r)=>{var t;if(!n)return{};const a={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[or(l)]:void 0;l.andelsnr&&(a[l.andelsnr]=o)}),!r)return a;const s=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===ge.FRILANSER);return s&&(a[s.andelsnr]=Mk(e)),a},Lk="inntektFieldArray",Gc=e=>e.inntektskategori&&e.inntektskategori!==ya.UDEFINERT?e.inntektskategori:"",Lc=(e,n,r)=>{var t,a,s,l,o;const g=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return g?Vn(g,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(a=e.arbeidsforhold)!=null&&a.arbeidsforholdType?(s=r[on.OPPTJENING_AKTIVITET_TYPE].find(m=>{var v;return m.kode===((v=e.arbeidsforhold)==null?void 0:v.arbeidsforholdType)}))==null?void 0:s.navn:(l=r[on.AKTIVITET_STATUS].find(m=>m.kode===e.aktivitetStatus))==null?void 0:l.navn},Kk=(e,n,r)=>({andel:Lc(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Gc(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),Kc=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,$c=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Uc=(e,n)=>{const r=Kc(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},Aa=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.ARBEIDSTAKER,Ia=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.FRILANSER,$k=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.DAGPENGER,Uk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE,Hk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.MILITAER_ELLER_SIVIL,Hc=(e,n)=>n?Ia(e)&&!!n[hn]:!1,Yc=e=>!!e[We],Cc=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&$c(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[cr],zc=(e,n,r)=>Aa(e)&&Cc(n,e,r),Jc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Ia(e),Wc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Aa(e)&&Uc(e,n),Zc=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const a=Gk(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!a[n.andelsnr]},Xc=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===ir.ETTERLONN_SLUTTPAKKE?!!n[Dn]:!1,Yk=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===ol.KUNSTIG))!==void 0},Qc=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===O.FASTSETT_BG_KUN_YTELSE)!==void 0,ej=(e,n,r)=>t=>!!(Yc(e)||Zc(e,t,n,r)||zc(t,e,n)||Jc(t,n)||Wc(t,n)||Yk(t,r)||yk(t,r,t.arbeidsforholdId)||Xc(t,e)),nj=(e,n,r)=>t=>ej(e,n,r)(t)?!0:Hc(t,e),In=e=>!!e&&e[br]===!0,rj=e=>e&&e.some(n=>n.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),Ck=e=>In(e),ig=e=>e.erOverstyrtInntekt||rj(e.avklaringsbehov),zk=(e,n,r)=>t=>Qc(n)||nj(e,n,r)(t),tj=(e,n,r)=>t=>In(e)||zk(e,n,r)(t),jr=(e,n)=>r=>n.faktaOmBeregning?tj(e,n.faktaOmBeregning,n)(r):!1,aj=e=>n=>Yk(n,e),sj=e=>aj(e),hi=(e,n,r)=>({...Kk(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?M(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?M(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?M(e.refusjonskrav):""}),Ai=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Zt=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},Ln=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},Al=e=>{var n;return((n=Ln(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Cn=(e,n)=>n.some(r=>r.definisjon===e),Jk=e=>{const n=e.filter(r=>r.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!fa(r.status))},ij=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,lj=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:a,aktivitetStatus:s}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(g=>g.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:a}}return st[t]?{andelsinfo:t,inntektskategori:a}:{andelsinfo:t,inntektskategori:a}}return Qr[s]?{andelsinfo:Qr[s],inntektskategori:a}:{andelsinfo:t,inntektskategori:a,arbeidsforholdId:l}},dj=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),oj=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,Wk=(e,n,r)=>{const t=e.map(a=>n(a,e)).slice().sort((a,s)=>ij(a,s));for(let a=0;a<t.length-1;a+=1)if(oj(t[a],t[a+1]))return dj(r)},gj=(e,n)=>Wk(e,lj,n),uj=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),kj=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:uj(n),mj="_row_1hw01_1",vj="_slettIkon_1hw01_10",pj="_rightAlign_1hw01_13",fj="_addCircleIcon_1hw01_41",yj="_storBredde_1hw01_47",bj="_mediumBredde_1hw01_50",On={row:mj,slettIkon:vj,rightAlign:pj,addCircleIcon:fj,storBredde:yj,mediumBredde:bj},cj=(e,n)=>{var r;return{andel:(r=n[on.AKTIVITET_STATUS].find(t=>t.kode===e.filter(a=>a===ge.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},jj=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),hj=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?pe(r.fastsattBelop):0}),n>0?M(n):""};function Aj(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const Ij=(e,n,r,t,a,s,l)=>e.map((o,g)=>u.jsxs(j.Row,{className:On.row,children:[u.jsx(j.DataCell,{children:u.jsx(R,{size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),u.jsx(j.DataCell,{align:"right",className:On.rightAlign,children:u.jsx(ce,{name:`${s}.${g}.fastsattBelop`,className:On.mediumBredde,parse:Oe,readOnly:r,isEdited:n,validate:r?[]:[Q,nn(178956970)],label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${g+1}`}),hideLabel:!0,size:"small"})}),u.jsx(j.DataCell,{align:"right",className:On.rightAlign,children:u.jsx(ua,{label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${g+1}`}),name:`${s}.${g}.inntektskategori`,className:On.storBredde,selectValues:jj(t),readOnly:r,validate:r?[]:[Q],hideLabel:!0,size:"small"})}),u.jsx(j.DataCell,{align:"right",className:On.rightAlign,children:Aj(g,e,r)&&u.jsx(se,{icon:u.jsx(Jn,{"aria-hidden":!0,className:On.slettIkon}),onClick:()=>l(g),type:"button",variant:"tertiary"})})]},o.id)),Tj=e=>u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{children:u.jsx(B,{as:"p",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),u.jsx(j.DataCell,{align:"right",children:u.jsx(ke,{children:e})}),u.jsx(j.DataCell,{}),u.jsx(j.DataCell,{})]},"bruttoBGSummaryRow"),Rj=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Ej=e=>e[on.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Nj=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},Pj=(e,n)=>{const r=e?Wk(e,Nj,n):void 0;if(r)return r},Zk=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var a;const s=Z(),{control:l}=Ie(),o=C.useContext(Pe),g=`${mn}.${o}.${e}`,{fields:m,append:v,remove:f}=en({control:l,name:g}),y=(a=t[on.AKTIVITET_STATUS])==null?void 0:a.map(q=>q.kode),b=Ej(t),c=$r({name:g,control:l}),T=c?hj(c):"0",h=Ij(m,r,n,b,s,g,f);h.push(Tj(T));const N=Pj(c,s),E=`${g}.skjemagruppe`,P=ga(E,N);return u.jsxs(K,{gap:"2",children:[u.jsxs(j,{size:"small",children:[u.jsx(j.Header,{children:u.jsxs(j.Row,{children:[Rj().map(q=>{const S=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(q);return u.jsx(j.HeaderCell,{scope:"col",align:S?"right":"left",children:u.jsx(B,{size:"small",as:"span",children:u.jsx(k,{id:q})})},q)}),u.jsx(j.HeaderCell,{})]})}),u.jsx(j.Body,{children:h})]}),!n&&u.jsx($,{children:u.jsx(se,{icon:u.jsx(zi,{"aria-hidden":!0,className:On.addCircleIcon}),onClick:()=>v(cj(y,t)),type:"button",variant:"tertiary",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),P&&u.jsx(rt,{children:P})]})},Xt="besteberegningField",kt=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{getValues:s}=Ie(),l=C.useContext(Pe),o=s(`${mn}.${l}`),g=Xt in o?o[Xt]:void 0,m=Z();return u.jsxs("div",{children:[u.jsx(Ne,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:u.jsx(k,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[Q],parse:un,isHorizontal:!0}),g!=null&&u.jsx("div",{style:{marginTop:"10px"},children:u.jsx(Nu,{alignOffset:g?0:60,children:u.jsxs(K,{gap:"4",children:[u.jsxs($,{justify:"space-between",children:[u.jsx(B,{size:"small",children:u.jsx(k,{id:"KunYtelsePanel.OverskriftBesteberegning"})}),g&&u.jsx("a",{className:fk.navetLink,href:sk,target:"_blank",rel:"noopener noreferrer",children:u.jsx(k,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})]}),t&&u.jsx(Zk,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:a})]})})})]})};kt.buildInitialValues=e=>({[Xt]:e.erBesteberegning});kt.transformValues=e=>!!e[Xt];const qj=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>u.jsxs(K,{gap:"4",children:[u.jsx(B,{size:"medium",children:u.jsx(k,{id:"KunYtelsePanel.RapporterteInntekter"})}),u.jsx(Zk,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),Qt="brukersAndelBG",mt=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{kunYtelse:s}=n,l=s==null?void 0:s.fodendeKvinneMedDP;return u.jsxs("div",{children:[l&&u.jsx(kt,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:Qt,skalViseInntektstabell:t,kodeverkSamling:a}),!l&&t&&u.jsx(qj,{readOnly:e,brukersAndelFieldArrayName:Qt,isAksjonspunktClosed:r,kodeverkSamling:a})]})};mt.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const a=e.andeler.map(l=>{const o=n.find(m=>m.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const g=l.fastsattBelopPrMnd!==null?M(l.fastsattBelopPrMnd):"";return{...Kk(o,r,t),fastsattBelop:g??""}}),s={[Qt]:a};return e.fodendeKvinneMedDP?{...kt.buildInitialValues(e),...s}:s};mt.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[Qt].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:pe(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?kt.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:ea,VURDER_BESTEBEREGNING:Sj}=O,xj=(e,n,r,t,a,s,l)=>{n.includes(ea)&&e.push(u.jsxs(K,{gap:"4",children:[u.jsx(mt,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:a,kodeverkSamling:s}),l()]},"FASTSETT_BG_KUN_YTELSE"))},Bj=(e,n,r)=>{if(r.includes(ea)&&n){const t=mt.transformValues(e,n),a=[ea];return n!=null&&n.fodendeKvinneMedDP&&a.push(Sj),{faktaOmBeregningTilfeller:a,...t}}return{}},Fj=(e,n,r,t,a)=>n&&n.includes(ea)?mt.buildInitialValues(e,r,t,a):{},Il="erSNNyIArbeidslivet",vt=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Il}`,validate:[Q],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:un})})};vt.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===ge.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[Il]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};vt.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[Il]}});const _j="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",Tl=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",lg=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return Vn(r,e.eksternArbeidsforholdId)},Ot=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},pt=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,a=C.useContext(Pe),s=Z();return!t||t.length===0?null:u.jsx(K,{gap:"6",children:t.map(l=>u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:_j,values:{navn:lg(Ot(l.arbeidsforhold),r),fom:I(Ot(l.arbeidsforhold).startdato).format(te),tom:I(Ot(l.arbeidsforhold).opphoersdato).format(te)}}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${a}.tidsbegrensetValues.${Tl(l)}`,isReadOnly:e,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[Q],parse:un})},`fastsettTidsbegrensedeForhold_${lg(Ot(l.arbeidsforhold),r)}`))})};pt.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[Tl(r)]=r.erTidsbegrensetArbeidsforhold)}),n};pt.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const a=Tl(t),s=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[a];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:s,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const Rl="vurderMilitær",ft=({readOnly:e})=>{const n=C.useContext(Pe),r=Z();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Rl}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[Q],parse:un})})};ft.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[Rl]=e.vurderMilitaer.harMilitaer),n};ft.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[Rl]}});const Oj=[O.VURDER_NYOPPSTARTET_FL,O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],Dj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",wj=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let s;return a?s=Vn(a,e.eksternArbeidsforholdId):s=e.arbeidsforholdType?(t=n[on.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",u.jsx(k,{id:Dj(),values:{arbeid:s}})},Vj=(e,n,r,t,a,s)=>u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[e.arbeidsforhold&&wj(e.arbeidsforhold,r,t),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${a}.vurderMottarYtelseValues.${or(e)}`,isReadOnly:n,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:un,validate:n?[]:[Q]})}),Mj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",Gj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",Lj=e=>e.some(n=>Oj.includes(n))?Mj():Gj(),Ii=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),yt=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a})=>{const s=C.useContext(Pe),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,g=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],m=Z();return u.jsxs(u.Fragment,{children:[o&&!Ii(r)&&u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:Lj(r)}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${Qn()}`,isReadOnly:e,radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:un,validate:e?[]:[Q]}),u.jsx(K,{gap:"6",children:g.map(v=>u.jsx(C.Fragment,{children:Vj(v,e,t,a,s,m)},or(v)))})]})},Kj=(e,n,r,t,a,s)=>{var l,o;if(n===null)return{};if(Mc(e,r.vurderMottarYtelse)){const g=[],m=Gk(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(v=>{var f;if(v.andelsnr&&m[v.andelsnr]&&!a.includes(v.andelsnr)){const y=(f=n.find(b=>b.andelsnr===v.andelsnr))==null?void 0:f.fastsattBelop;(y||y===0)&&(g.push({andelsnr:v.andelsnr,fastsattBeløp:pe(y)}),a.push(v.andelsnr))}}),g.length>0?(s.push(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:g}}):{}}return{}},$j=(e,n,r,t,a)=>{var s;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[Qn()]){const l=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(o=>o.aktivitetStatus===ge.FRILANSER);if(l&&!t.includes(l.andelsnr)&&Mk(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),a.push(O.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:pe(o.fastsattBelop)}}}return{}}return{}},Uj=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},Hj=(e,n,r)=>{var t;const a=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(O.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[Qn()],arbeidstakerUtenIMMottarYtelse:a.map(s=>({andelsnr:Uj(s.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[or(s)]}))}}};yt.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||Ii(n))&&(r[Qn()]=Ii(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(a=>{r[or(a)]=a.mottarYtelse}),r};yt.transformValues=(e,n,r,t,a)=>{const s=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_MOTTAR_YTELSE)?{...Hj(e,r,s),...Kj(e,n,r,t,a,s),...$j(e,n,t,a,s),faktaOmBeregningTilfeller:s}:{}};const Yj="_aksjonspunktBoks_tufis_1",Cj={aksjonspunktBoks:Yj},zj=({children:e})=>u.jsx("div",{className:Cj.aksjonspunktBoks,children:e}),Jj="_slettIkon_1sqjy_1",Wj="_rightAlignInput_1sqjy_7",Zj="_readOnlyContainer_1sqjy_36",Xj="_readOnlyContent_1sqjy_39",Qj="_storBredde_1sqjy_44",eh="_mediumBredde_1sqjy_47",nh="_litenBredde_1sqjy_50",rh="_inntekt_1sqjy_53",th="_inntektNew_1sqjy_57",ah="_inntektOld_1sqjy_61",sh="_inntektOldStrikethrough_1sqjy_64",ih="_saksbehandlerIcon_1sqjy_72",De={slettIkon:Jj,rightAlignInput:Wj,readOnlyContainer:Zj,readOnlyContent:Xj,storBredde:Qj,mediumBredde:eh,litenBredde:nh,inntekt:rh,inntektNew:th,inntektOld:ah,inntektOldStrikethrough:sh,saksbehandlerIcon:ih},lh=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},dh=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),oh=e=>e[on.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),gh=()=>u.jsx(rt,{size:"small",children:"Må fastsettes"}),uh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:a,removeAndel:s,beregningsgrunnlag:l,kodeverkSamling:o,rowName:g,skalFastsetteInntektForAndel:m})=>{var v,f,y,b,c,T,h,N;const E=Z(),{getValues:P}=Ie(),q=C.useContext(Pe),S=P(`vurderFaktaBeregningForm.${q}`),D=Ia(e),F=$k(e),z=Uk(e),J=Hk(e),_=Aa(e),G=jr(S,l)(e),w=D&&G&&((v=S==null?void 0:S.frilansInntektValues)==null?void 0:v.fastsattBelop),H=_&&G&&e.arbeidsgiverId&&!!Zt(S==null?void 0:S.arbeidstakerInntektValues,e.arbeidsgiverId),re=F&&G&&((f=S==null?void 0:S.dagpengerInntektValues)==null?void 0:f.fastsattBelop),W=z&&G&&((y=S==null?void 0:S.selvstendigNæringsdrivendeInntektValues)==null?void 0:y.fastsattBelop),ie=J&&G&&((b=S==null?void 0:S.militærEllerSivilInntektValues)==null?void 0:b.fastsattBelop),Re=D&&G&&!((c=S==null?void 0:S.frilansInntektValues)!=null&&c.fastsattBelop)||_&&G&&e.arbeidsgiverId&&!Zt(S==null?void 0:S.arbeidstakerInntektValues,e.arbeidsgiverId)||F&&G&&!((T=S==null?void 0:S.dagpengerInntektValues)!=null&&T.fastsattBelop)||z&&G&&!((h=S==null?void 0:S.selvstendigNæringsdrivendeInntektValues)!=null&&h.fastsattBelop)||J&&G&&!((N=S==null?void 0:S.militærEllerSivilInntektValues)!=null&&N.fastsattBelop),Fe=w||H||re||W||ie,ze=In(S),Je=sj(l)(e),X=oh(o),ee=e.arbeidsperiodeFom||e.arbeidsperiodeTom,me=()=>H&&S.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${q}.arbeidstakerInntektValues.${Ai(S.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:w?`vurderFaktaBeregningForm.${q}.frilansInntektValues.fastsattBelop`:re?`vurderFaktaBeregningForm.${q}.dagpengerInntektValues.fastsattBelop`:W?`vurderFaktaBeregningForm.${q}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:ie?`vurderFaktaBeregningForm.${q}.militærEllerSivilInntektValues.fastsattBelop`:"";return u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{children:u.jsx(ce,{size:"small",name:`${g}.andel`,className:De.storBredde,readOnly:!0})}),u.jsx(j.DataCell,{children:n&&ee&&e.arbeidsperiodeFom&&u.jsx(vp,{value:u.jsx($e,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!ze&&u.jsx(j.DataCell,{align:"right",children:u.jsxs("div",{className:De.inntekt,children:[u.jsx("div",{className:Fe?De.inntektOldStrikethrough:De.inntektOld,children:Re?gh():u.jsx(ce,{size:"small",name:`${g}.belopReadOnly`,className:De.mediumBredde,parse:Oe,readOnly:!0})}),Fe&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:De.inntektNew,children:u.jsx(ce,{size:"small",name:me(),className:De.mediumBredde,parse:Oe,readOnly:!0})}),u.jsx(ip,{title:"Endret av saksbehandler",className:De.saksbehandlerIcon})]})]})}),ze&&u.jsx(j.DataCell,{align:"right",className:De.rightAlignInput,children:u.jsx(ce,{size:"small",label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${g}.fastsattBelop`,parse:Oe,className:De.mediumBredde,validate:m(e)?[Q,nn(178956970)]:[],hideLabel:!0})}),r&&u.jsx(j.DataCell,{align:"right",children:u.jsx(ce,{size:"small",name:`${g}.refusjonskrav`,className:De.litenBredde,readOnly:!0,parse:Oe})}),u.jsx(j.DataCell,{align:"right",children:u.jsx(ua,{label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${g}.inntektskategori`,className:De.storBredde,selectValues:dh(X),validate:a?[]:[Q],readOnly:a||!Je,size:"small",hideLabel:!0})}),t&&u.jsx(j.DataCell,{children:u.jsx(se,{icon:u.jsx(Jn,{"aria-hidden":!0,className:De.slettIkon}),onClick:()=>s(),type:"button",variant:"tertiary"})})]})},kh=(e,n,r)=>{let t=0;return e.forEach(a=>{var s,l,o,g,m,v;let f;if(jr(n,r)(a)){const y=Ia(a),b=Aa(a),c=$k(a),T=Uk(a),h=Hk(a);a.fastsattBelop&&In(n)?f=a.fastsattBelop:y&&(s=n==null?void 0:n.frilansInntektValues)!=null&&s.fastsattBelop?f=n.frilansInntektValues.fastsattBelop:b&&a.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[Ai(n.arbeidstakerInntektValues,a.arbeidsgiverId)])!=null&&o.fastsattBelop?f=n.arbeidstakerInntektValues[Ai(n.arbeidstakerInntektValues,a.arbeidsgiverId)].fastsattBelop:c&&(g=n==null?void 0:n.dagpengerInntektValues)!=null&&g.fastsattBelop?f=n.dagpengerInntektValues.fastsattBelop:T&&(m=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&m.fastsattBelop?f=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:h&&(v=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&v.fastsattBelop?f=n.militærEllerSivilInntektValues.fastsattBelop:a.fastsattBelop&&!In(n)?f=0:f=a.fastsattBelop}else f=a.belopReadOnly;t+=f?pe(f):0}),t>0?t:0},mh=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:a,getValues:s}=Ie(),l=C.useContext(Pe),o=s(`vurderFaktaBeregningForm.${l}`),g=$r({control:a,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),m=g?kh(g,o,t):0;return u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{children:u.jsx(B,{as:"p",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&u.jsx(j.DataCell,{}),u.jsx(j.DataCell,{align:"right",children:u.jsx("div",{className:De.readOnlyContainer,children:u.jsx(B,{as:"p","data-testid":"sum",className:r?De.readOnlyContent:"",size:"small",children:M(m)})})}),n&&u.jsx(j.DataCell,{}),u.jsx(j.DataCell,{})]})},Xk=(e,n)=>{var r;const t=(r=e.find(({kode:a})=>a===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},vh=e=>({andel:Xk(e,ge.DAGPENGER),aktivitetStatus:ge.DAGPENGER,fastsattBelop:"",inntektskategori:ya.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),ph=e=>({andel:Xk(e,ge.MILITAER_ELLER_SIVIL),aktivitetStatus:ge.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:ya.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),fh=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,Ti=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},Ri=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},yh=(e,n)=>()=>{n(e)},bh=(e,n,r)=>u.jsx(mh,{readOnly:n,skalVisePeriode:Ri(e),skalViseRefusjon:Ti(e),beregningsgrunnlag:r},"summaryRow"),ch=(e,n)=>{let r=-1;return e.forEach((t,a)=>{t.aktivitetStatus===n&&(r=a)}),r},Qk=(e,n,r,t,a,s,l)=>{const o=ch(e,n);if(o!==-1){const g=e[o];t(g)&&s(o)}o===-1&&r&&l({...a})},dg=e=>e===ge.FRILANSER,og=e=>e===ge.ARBEIDSTAKER,gg=e=>e===ge.DAGPENGER,ug=e=>e===ge.SELVSTENDIG_NAERINGSDRIVENDE,kg=e=>e===ge.MILITAER_ELLER_SIVIL,jh=(e,n,r,t,a,s)=>{Qk(e,ge.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,vh(r),a,s)},hh=(e,n,r,t,a,s)=>{Qk(e,ge.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,ph(r),a,s)},Ah=(e,n)=>kj(e,n)??null,Ih=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?gj(t,r)||(In(e)?Ah(t,r):null):void 0},bt=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var a,s;const{getValues:l,control:o,formState:g}=Ie(),{errors:m}=g,v=C.useContext(Pe),f=`vurderFaktaBeregningForm.${v}.inntektFieldArray`,{fields:y,remove:b,append:c,update:T}=en({control:o,name:f}),h=$r({control:o,name:`vurderFaktaBeregningForm.${v}`}),N=$r({control:o,name:`vurderFaktaBeregningForm.${v}.vurderbesteberegningField`}),E=$r({control:o,name:`vurderFaktaBeregningForm.${v}.vurderMilitær`}),P=Z(),q=A.useCallback(()=>jr(h,r),[h,r]);A.useEffect(()=>{const w=l(`vurderFaktaBeregningForm.${v}.inntektFieldArray`),H=t[on.AKTIVITET_STATUS];w&&(hh(w,!!E,H,q,b,c),jh(w,!!N,H,n,b,c))},[N,E,n]);const S=(w,H)=>{T(w,{...y[w],kanRedigereInntekt:H})};A.useEffect(()=>{y.forEach((w,H)=>{const re=w.kanRedigereInntekt,W=jr(h,r)(w);!(!N&&!n&&w.lagtTilAvSaksbehandler)&&re!==W&&S(H,W)})},[h]);const D=(s=(a=m==null?void 0:m.vurderFaktaBeregningForm)==null?void 0:a[v])==null?void 0:s.inntektFieldArray,F=Ih(h,D,P),z=`${f}.skjemagruppe`,J=ga(z,F??void 0),_=r.faktaOmBeregning;if(!_)return null;const G=y.map((w,H)=>u.jsx(uh,{field:w,skalVisePeriode:Ri(y),skalViseRefusjon:Ti(y),skalViseSletteknapp:fh(H,y,e),readOnly:e,removeAndel:yh(H,b),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${f}.${H}`,skalFastsetteInntektForAndel:zk(h,_,r)},w.id));return G.length===0?null:(G.push(bh(y,e,r)),u.jsxs(K,{gap:"2",children:[u.jsxs(j,{size:"small",children:[u.jsx(j.Header,{children:u.jsx(j.Row,{children:lh(Ri(y),Ti(y)).map(w=>{const H=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(w);return u.jsx(j.HeaderCell,{scope:"col",align:H?"right":"left",children:u.jsx(B,{size:"small",as:"span",children:u.jsx(k,{id:w})})},w)})})}),u.jsx(j.Body,{children:G})]}),J&&u.jsx(rt,{children:J})]}))};bt.transformValues=(e,n,r,t,a,s,l)=>{if(!e)return[];const o=g=>{const m=l&&g.fastsattBelop||dg(g.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||og(g.aktivitetStatus)&&g.arbeidsgiverId&&Zt(r,g.arbeidsgiverId)||gg(g.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||ug(g.aktivitetStatus)&&(a==null?void 0:a.fastsattBelop)||kg(g.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||g.fastsattBelop;return{andelsnr:g.andelsnr,fastsattBelop:pe(m),inntektskategori:g.inntektskategori,nyAndel:g.nyAndel,lagtTilAvSaksbehandler:g.lagtTilAvSaksbehandler,aktivitetStatus:g.aktivitetStatus,arbeidsforholdId:g.arbeidsforholdId,arbeidsgiverId:g.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:g})=>g).filter(({fastsattBelop:g,aktivitetStatus:m,arbeidsgiverId:v})=>g!==null&&g!==""||dg(m)&&(n==null?void 0:n.fastsattBelop)||og(m)&&v&&Zt(r,v)||gg(m)&&(t==null?void 0:t.fastsattBelop)||ug(m)&&(a==null?void 0:a.fastsattBelop)||kg(m)&&(s==null?void 0:s.fastsattBelop)).map(o)};bt.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>hi(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:Th}=O,Rh="erKravGyldig_",El=e=>Rh+e,Eh=(e,n,r,t)=>e.map(a=>{const{arbeidsgiverIdent:s}=a,l=r[s],o=l?Vn(l):s,g=Z();return u.jsx(C.Fragment,{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${El(s)}`,validate:[Q],isReadOnly:n,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:un})},s)}),ct=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=C.useContext(Pe),a=n==null?void 0:n.refusjonskravSomKommerForSentListe;return a?u.jsx(u.Fragment,{children:Eh(a,e,r,t)}):null};ct.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[El(r)]}))};ct.buildInitialValues=(e,n)=>{const r={};return!e.includes(Th)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:a})=>{r[El(t)]=a}),{...r})};const Nh=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===ol.KUNSTIG))!==void 0},mg=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},Ph=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},qh=(e,n,r,t,a)=>{const s=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!s.map(g=>g).includes(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!s.map(g=>g).includes(O.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(g=>g.andelsnr&&!a.includes(g.andelsnr)).filter(g=>yk(g,t,g.arbeidsforholdId)||Nh(g,t)||$b(g,r,e));l.forEach(g=>a.push(mg(g.andelsnr)));const o=l.map(g=>({andelsnr:mg(g.andelsnr),fastsattBeløp:pe(g.fastsattBelop),inntektskategori:Ph(g.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},vg=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},Sh=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(a=>a).includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const a=e.filter(s=>s.andelsnr&&!r.includes(s.andelsnr)).filter(s=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(s.andelsnr)).map(s=>({andelsnr:vg(s.andelsnr),arbeidsinntekt:s.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const s=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});a.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:vg(s==null?void 0:s.fastsattBelop)})}if(a.forEach(s=>r.push(s.andelsnr)),a.length>0)return{faktaOmBeregningTilfeller:[O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:a}}}return{faktaOmBeregningTilfeller:[]}},ai=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),pg=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s})=>{var l,o,g,m,v,f,y,b,c;const{getValues:T}=Ie(),h=C.useContext(Pe),N=T(`vurderFaktaBeregningForm.${h}`),E=T([`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Qn()}`,`vurderFaktaBeregningForm.${h}.${hn}`]),P=()=>{var X;if(E.includes(!0))return!0;const ee=T([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0),me=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(Te=>Te.aktivitetStatus===ge.FRILANSER);return ee&&me},q=()=>{var X;const ee=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE);return T([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0)&&ee},S=()=>{var X;const ee=(X=e.faktaOmBeregning)==null?void 0:X.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.MILITAER_ELLER_SIVIL);return T([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0)&&ee},D=T([`vurderFaktaBeregningForm.${h}.${cr}`,`vurderFaktaBeregningForm.${h}.${We}`]),F=D.includes(!0),z=T([`vurderFaktaBeregningForm.${h}.${Dn}`]).includes(!0),J=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,_=(m=(g=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:g.arbeidstakerAndelerUtenIM)==null?void 0:m.filter(X=>{const ee=T(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues`);return ee==null?void 0:ee[or(X)]}),G=(f=(v=e.faktaOmBeregning)==null?void 0:v.andelerForFaktaOmBeregning.filter(X=>X.aktivitetStatus===ge.ARBEIDSTAKER))==null?void 0:f.filter(X=>jr(N,e)(hi(X,a,s))),w=(y=ai(t)&&F?J==null?void 0:J.filter(X=>!(G!=null&&G.find(ee=>{var me,Te;return((me=ee.arbeidsforhold)==null?void 0:me.arbeidsgiverIdent)===((Te=X.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent)}))):J)==null?void 0:y.filter(X=>jr(N,e)(hi({...X,lagtTilAvSaksbehandler:!1},a,s))),H=T(`vurderFaktaBeregningForm.${h}.${We}`),re=`vurderFaktaBeregningForm.${h}.frilansInntektValues.fastsattBelop`,W=`vurderFaktaBeregningForm.${h}.dagpengerInntektValues.fastsattBelop`,ie=`vurderFaktaBeregningForm.${h}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,Re=`vurderFaktaBeregningForm.${h}.militærEllerSivilInntektValues.fastsattBelop`,Fe=(c=(b=e==null?void 0:e.faktaOmBeregning)==null?void 0:b.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:c.some(X=>!!X.inntektPrMnd),ze=X=>{var ee,me,Te,sn;const je=(ee=X.arbeidsforhold)!=null&&ee.arbeidsgiverIdent?(me=a[X.arbeidsforhold.arbeidsgiverIdent])==null?void 0:me.navn:void 0;return T(`vurderFaktaBeregningForm.${h}.${cr}`)&&D.filter(_e=>_e===!0).length===1?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(Te=X.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent})`}}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(sn=X.arbeidsforhold)==null?void 0:sn.arbeidsgiverIdent})`}})},Je=()=>{const X=E.filter(Te=>Te===!0).length>1,ee=T([`vurderFaktaBeregningForm.${h}.${hn}`]).includes(!0),me=T([`vurderFaktaBeregningForm.${h}.${We}`]).includes(!0);return ai(t)||X||me?u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):T(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Qn()}`)?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):ee?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:u.jsx("br",{})}})})]})})]}):null};return u.jsxs(K,{gap:"8",children:[ai(t)&&u.jsxs(u.Fragment,{children:[u.jsxs(K,{gap:"1",children:[u.jsx(B,{children:u.jsx(k,{id:Fe?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:Fe?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:u.jsx("br",{})}})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})})]}),w==null?void 0:w.map(X=>{var ee;return u.jsx(Ur,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:a},(ee=X.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)})]}),P()&&u.jsx(kn,{name:re,readOnly:n,isAksjonspunktClosed:r,label:Je()}),F||z?G==null?void 0:G.filter(X=>{var ee;return z&&!F?((ee=X.arbeidsforhold)==null?void 0:ee.arbeidsforholdType)===ir.ETTERLONN_SLUTTPAKKE:!0}).map(X=>{var ee;return u.jsx(Ur,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,label:ze(X),arbeidsgiverOpplysningerPerId:a},(ee=X.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)}):_==null?void 0:_.map(X=>{var ee;return u.jsx(Ur,{arbeidsgiver:X,readOnly:n,isAksjonspunktClosed:r,label:ze(X),arbeidsgiverOpplysningerPerId:a},(ee=X.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)}),H&&u.jsx(kn,{name:W,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})}),q()&&u.jsx(kn,{name:ie,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})}),S()&&u.jsx(kn,{name:Re,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})},xh=e=>!e.includes(O.FASTSETT_BG_KUN_YTELSE),Bh=(e,n,r,t)=>u.jsx(bt,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),jt=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:a,kodeverkSamling:s,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:g,arbeidsgiverOpplysningerPerId:m,vilkarsperiodeSkalVurderesIBehandlingen:v})=>{const{getValues:f}=Ie(),y=C.useContext(Pe),b=f(`vurderFaktaBeregningForm.${y}`),c=A.useMemo(()=>Ck(b),[b,t,a]),T=A.useMemo(()=>xh(r),[r]),h=()=>{const N=[],E=[];let P=!1;const{faktaOmBeregning:q}=t;return!q||(r.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(P=!0,E.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),N.push(u.jsx(C.Fragment,{children:u.jsx(pt,{readOnly:e,faktaOmBeregning:q,arbeidsgiverOpplysningerPerId:m})},O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(P=!0,E.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),N.push(u.jsx(C.Fragment,{children:u.jsx(vt,{readOnly:e})},O.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(P=!0,E.push(O.VURDER_MILITÆR_SIVILTJENESTE),N.push(u.jsx(C.Fragment,{children:u.jsx(ft,{readOnly:e})},O.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(P=!0,E.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),N.push(u.jsx(C.Fragment,{children:u.jsx(ct,{readOnly:e,arbeidsgiverOpplysningerPerId:m,faktaOmBeregning:q})},O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(O.VURDER_LONNSENDRING)&&(P=!0,E.push(O.VURDER_LONNSENDRING),N.push(u.jsx(C.Fragment,{children:u.jsx(lt,{readOnly:e})},O.VURDER_LONNSENDRING))),r.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(P=!0,E.push(O.VURDER_ETTERLONN_SLUTTPAKKE),N.push(u.jsx(C.Fragment,{children:u.jsx(ut,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},O.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(O.VURDER_NYOPPSTARTET_FL)&&(P=!0,E.push(O.VURDER_NYOPPSTARTET_FL),N.push(u.jsx(C.Fragment,{children:u.jsx(dt,{readOnly:e})},O.VURDER_NYOPPSTARTET_FL))),r.includes(O.VURDER_BESTEBEREGNING)&&!r.includes(O.FASTSETT_BG_KUN_YTELSE)&&(P=!0,E.push(O.VURDER_BESTEBEREGNING),N.push(u.jsx(C.Fragment,{children:u.jsx(it,{readOnly:e,erOverstyrt:c})},O.VURDER_BESTEBEREGNING))),(r.includes(O.VURDER_MOTTAR_YTELSE)||r.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(P=!0,E.push(O.VURDER_MOTTAR_YTELSE),N.push(u.jsx(C.Fragment,{children:u.jsx(yt,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:m})},O.VURDER_MOTTAR_YTELSE))),!v)?null:P?e?u.jsxs(u.Fragment,{children:[N.map((S,D)=>u.jsx(K,{gap:"8",children:S},E[D])),u.jsx(pg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:s}),g()]}):u.jsx(zj,{children:u.jsxs(K,{gap:"4",children:[N.map((S,D)=>u.jsx(K,{gap:"8",children:S},E[D])),!In(b)&&u.jsx(pg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:s}),g()]})}):In(b)?g():null};return u.jsxs(K,{gap:"8",children:[u.jsx(ml,{tabell:Bh(e,t,s,c),skalViseTabell:T,readOnly:e,erOverstyrer:l,avklaringsbehov:a,updateOverstyring:o,erOverstyrt:c},"inntektstabell"),h()]})};jt.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const a=e.andelerForFaktaOmBeregning;return a.length===0?{}:{[Lk]:bt.buildInitialValues(a,r,t),...ml.buildInitialValues(n)}};const $n=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},Fh=e=>{if(!e)throw new Error("Forventer andelsnr");return e},_h=(e,n,r,t)=>{if(In(e)){const a=r.filter(s=>!t.includes(Fh(s.andelsnr))).filter(s=>s.fastsattBelop!=null).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,aktivitetStatus:s.aktivitetStatus,lagtTilAvSaksbehandler:s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:s.inntektskategori}}));return{fakta:n,overstyrteAndeler:a}}return{fakta:n}},Oh=(e,n,r,t,a)=>{const s=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(s.length>0){l=$n(l,Ob(t)(e,n));const o=e[We]===!0;l=$n(l,dt.transformValues(e,o?null:n,t,r)),l=$n(l,ut.transformValues(e,o?null:n,t,r)),l=$n(l,lt.transformValues(e,t)),l=$n(l,yt.transformValues(e,o?null:n,t,a,r)),l=$n(l,Sh(o?null:n,t,r)),l=$n(l,qh(e,o?null:n,t,a,r))}return l};jt.transformValues=(e,n)=>r=>{const t=bt.transformValues(r[Lk],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),a=[],s=Oh(r,t,a,e,n);return _h(r,s,t,a)};const{VURDER_FAKTA_FOR_ATFL_SN:Dh}=he,fg=e=>{var n;return((n=Ln(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},yg=e=>{var n;return((n=Ln(e))==null?void 0:n.kunYtelse)||void 0},bg=e=>{var n;return((n=Ln(e))==null?void 0:n.vurderMottarYtelse)||void 0},wh=e=>{var n;return((n=Ln(e))==null?void 0:n.vurderBesteberegning)||void 0},Vh=e=>{var n;return((n=Ln(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},Mh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>{const{avklaringsbehov:m}=r,v=Al(r),f=Ln(r),y=[];return xj(y,v,e,n,f,t,o),y.push(u.jsx(C.Fragment,{children:u.jsx(jt,{readOnly:e,isAksjonspunktClosed:n,tilfeller:v,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,avklaringsbehov:m,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:s,vilkarsperiodeSkalVurderesIBehandlingen:g})},"VurderOgFastsettATFL")),y},Gh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>u.jsx("div",{children:Mh({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g}).map(m=>m)}),Lh=(e,n)=>r=>Bj(r,e.kunYtelse,n),Kh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...vt.transformValues(n)}},$h=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...pt.transformValues(r,e)}},Uh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_MILITÆR_SIVILTJENESTE),{...e,...ft.transformValues(n)}},Hh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...ct.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},Yh=(e,n,r,t,a)=>(s,l)=>{let o={...s};return e.forEach(g=>{g===O.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),g===O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),g===O.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),g===O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=a(o,l))}),o},Ch=(e,n,r)=>t=>e.includes(O.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},zh=(e,n,r,t,a)=>{const s=Ch(e,Lh(t,e),jt.transformValues(t,a))(n);return{fakta:Yh(e,Kh,$h(r),Uh,Hh(t))(s.fakta,n),overstyrteAndeler:s.overstyrteAndeler}},Jh=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:a}=e;return zh(n,e,r,t,a)},Wh=e=>e?e.find(n=>n.definisjon===Dh):void 0,Zh=(e,n,r)=>{const t=Al(e),a=Ln(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:a,kortvarigeArbeidsforhold:fg(e),vurderMottarYtelse:bg(e),kunYtelse:yg(e),tidsbegrensetValues:pt.buildInitialValues(fg(e)),vurderMottarYtelseValues:yt.buildInitialValues(bg(e),t),arbeidstakerInntektValues:Ur.buildInitialValues(a.andelerForFaktaOmBeregning),frilansInntektValues:kn.buildInitialValues(a.andelerForFaktaOmBeregning,ge.FRILANSER),dagpengerInntektValues:kn.buildInitialValues(a.andelerForFaktaOmBeregning,ge.DAGPENGER),selvstendigNæringsdrivendeInntektValues:kn.buildInitialValues(a.andelerForFaktaOmBeregning,ge.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:kn.buildInitialValues(a.andelerForFaktaOmBeregning,ge.MILITAER_ELLER_SIVIL),vurderRefusjonValues:ct.buildInitialValues(t,Vh(e)),...ft.buildInitialValues(a),...vt.buildInitialValues(e),...lt.buildInitialValues(e),...dt.buildInitialValues(e),...ut.buildInitialValues(e,Wh(e.avklaringsbehov)),...it.buildInitialValues(e.avklaringsbehov,wh(e),t,ig(e)),...jt.buildInitialValues(a,ig(e),r,n),...Fj(yg(e),t,a.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:Ei,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Ni}=he,na=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Xh=(e,n)=>e||na(Ei,n),cg=(e,n)=>{const r=e[br];if(n&&!r&&na(Ni,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!Xh(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...Jh(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},Qh=(e,n=!0)=>{const r=e[mn],t=r.filter(l=>l.erTilVurdering).filter(l=>l[br]||na(Ni,l.avklaringsbehov||[])).map(l=>cg(l,!0)).filter(l=>l),a=r.filter(l=>l.erTilVurdering).filter(l=>(!l[br]||n)&&na(Ei,l.avklaringsbehov||[])).map(l=>cg(l,!1)).filter(l=>l),s=[];if(t.length>0){const l=t.filter(({begrunnelse:g})=>g!==null).map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Ni,begrunnelse:l!==""?l:null,grunnlag:t};s.push(o)}if(a.length>0){const l=a.map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Ei,begrunnelse:l,grunnlag:a};s.push(o)}return s},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:em,VURDER_FAKTA_FOR_ATFL_SN:Pi}=he,nm="begrunnelseFaktaTilfeller",eA=(e,n,r)=>e&&n&&!r,nA=(e,n)=>Cn(Pi,n)||Cn(em,n)?!e:!0,jg=(e,n)=>{const r=n(`${mn}.${e}`);return Ck(r)},hg=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},rA=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,submittable:s,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:g,submitDisabled:m})=>{const{getValues:v,formState:{errors:f,isDirty:y}}=Ie(),b=C.useContext(pk),c=C.useContext(Pe),T=c===b,{avklaringsbehov:h}=e,N=h.find(q=>q.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||q.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),E=o.vurderesIBehandlingen,P=()=>u.jsx(u.Fragment,{children:(Cn(Pi,h)||Cn(em,h)||jg(c,v))&&u.jsxs(K,{gap:"6",children:[(Cn(Pi,h)||jg(c,v))&&u.jsxs(u.Fragment,{children:[u.jsx(Nr,{name:`${mn}.${c}.${nm}`,isSubmittable:s,isReadOnly:r||!E,hasBegrunnelse:!!(N!=null&&N.begrunnelse)}),u.jsx(Pn,{ident:N==null?void 0:N.vurdertAv,date:N==null?void 0:N.vurdertTidspunkt})]}),u.jsx($,{children:u.jsx(Bu,{isSubmittable:eA(s&&nA(g,h),!0,hg(c,f))&&!g,isReadOnly:r||!E,isDirty:y,isSubmitting:m,hasErrors:hg(c,f)})})]})});return u.jsx("div",{style:{display:T?"block":"none"},children:u.jsx(Gh,{readOnly:r||!E,isAksjonspunktClosed:Jk(h),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:a,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>P(),vilkarsperiodeSkalVurderesIBehandlingen:E})},c)},{VURDER_FAKTA_FOR_ATFL_SN:rm,AVKLAR_AKTIVITETER:tA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:ra,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:aA}=he,sA=e=>e.some(n=>n.definisjon===ra)?e.find(n=>n.definisjon===ra&&n.begrunnelse!==null):e.find(n=>n.definisjon===rm&&n.begrunnelse!==null),Ag=(e,n)=>n.some(r=>r.definisjon===e&&fa(r.status)),iA=(e,n,r,t)=>({[mn]:e.map(a=>{var s;const l=t.perioder.find(o=>o.periode.fom===a.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${a.vilkårsperiodeFom}`);return{avklaringsbehov:a.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...Nr.buildInitialValues((s=sA(a.avklaringsbehov))==null?void 0:s.begrunnelse,nm),...Zh(a,n,r)}})}),lA=[rm,ra],dA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},oA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:g,formData:m,vilkar:v,avklarAktiviteterErEndret:f,skalKunneAvbryteOverstyring:y})=>{const b=f,c=e.flatMap(re=>re.avklaringsbehov),T=Ye({defaultValues:m||iA(e,t,s,v)}),{control:h,formState:N,trigger:E,getValues:P,watch:q}=T,{fields:S,update:D}=en({name:mn,control:h}),{errors:F,isSubmitted:z}=N,[J,_]=A.useState(!1),G=q(mn);A.useEffect(()=>{z&&E()},[JSON.stringify(G)]);const w=(re,W)=>{const ie=P(`${mn}.${re}`);D(re,{...ie,[br]:W})},H=re=>{Object.keys(F).length===0?(_(!0),o(Qh(re,y))):console.error(F)};return Ag(tA,c)||Ag(aA,c)?null:u.jsx(pk.Provider,{value:l,children:u.jsx(Ce,{formMethods:T,onSubmit:re=>{H(re)},setDataOnUnmount:g,children:S.map((re,W)=>{const ie=X=>lA.some(ee=>ee===X.definisjon),Re=X=>X.kanLoses,Fe=c.filter(X=>ie(X)&&Re(X)),ze=r||dA(e[W],v.perioder)||Ze(ra,c)&&!a||Fe.length===0&&!a,Je=v.perioder.find(X=>X.periode.fom===e[W].vilkårsperiodeFom);if(!Je)throw new Error(`Filler ikke vilkårsperiode med fom ${e[W].vilkårsperiodeFom}`);return u.jsx(Pe.Provider,{value:W,children:u.jsx(rA,{vilkarsperiode:Je,beregningsgrunnlag:e[W],erOverstyrer:a,readOnly:ze,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:n,updateOverstyring:w,submitDisabled:J,verdiForAvklarAktivitetErEndret:b},re.id)},re.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:gA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:tm,AVKLAR_AKTIVITETER:uA}=he,kA=[tm,uA],mA=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:g,arbeidsgiverOpplysningerPerId:m,setFormData:v,formData:f,vilkar:y,skalKunneAvbryteOverstyring:b})=>{const c=n.filter(E=>kA.some(P=>P===E.definisjon)&&E.kanLoses),T=e||(c.length===0||Ze(tm,n))&&!l,[h,N]=A.useState(!1);return u.jsxs(K,{gap:Ze(gA,n)?"0":"2",children:[u.jsx("div",{children:u.jsx(xb,{readOnly:T,submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:g,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:m,setFormData:v,formData:f&&et in f?f:void 0,vilkår:y,setAvklarAktiviteterErEndret:N})}),u.jsx(oA,{submitCallback:t,submittable:r,kodeverkSamling:g,beregningsgrunnlag:s,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:m,aktivtBeregningsgrunnlagIndeks:a,setFormData:v,formData:f&&mn in f?f:void 0,vilkar:y,avklarAktiviteterErEndret:h,skalKunneAvbryteOverstyring:b})]})},vA="_tabsContainer_1yyvp_1",pA="_main_1yyvp_9",Ig={tabsContainer:vA,main:pA},fA=Ke(lk),{VURDER_FAKTA_FOR_ATFL_SN:am,AVKLAR_AKTIVITETER:yA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:bA}=he,cA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},jA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:a})=>a.fom===r);if(t){const{fom:a,tom:s}=t.periode;return s!==null?`${I(a).format(te)} - ${I(s).format(te)}`:`${I(a).format(te)} - `}return`${I(r).format(te)}`},hA=e=>{if(e){const n=e.some(t=>t.definisjon===am&&t.kanLoses),r=e.some(t=>t.definisjon===yA&&t.kanLoses);return n||r}return!1},si=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return hA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},AA=(e,n)=>{var r,t,a,s,l,o;const g=Al(e),m=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),v=[],f=[];if(g.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const y=(s=(a=e==null?void 0:e.faktaOmBeregning)==null?void 0:a.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:s.some(b=>!!b.inntektPrMnd);f.push(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:y?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:(...b)=>u.jsx(ae,{size:"xsmall",level:"3",children:b})}})}))}if(g.includes(O.VURDER_LONNSENDRING)&&(f.push(O.VURDER_LONNSENDRING),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),m&&g.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_frilans`),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),!m&&g.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_arbeidstaker`),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),g.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(f.push(O.VURDER_ETTERLONN_SLUTTPAKKE),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),g.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){f.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const y=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let b="";y.forEach((c,T)=>{var h;const N=(h=c.arbeidsforhold)==null?void 0:h.arbeidsgiverIdent;if(!N)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const E=n[N],P=E?Vn(E):N;T===0?b=P:b=`${b}, ${P}`}),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:b,h3:(...c)=>u.jsx(ae,{size:"xsmall",level:"3",children:c})}})}))}if(g.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(f.push(O.VURDER_MILITÆR_SIVILTJENESTE),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),g.includes(O.FASTSETT_BG_KUN_YTELSE)&&(f.push(O.FASTSETT_BG_KUN_YTELSE),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsxs(K,{gap:"1",children:[u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),u.jsx(Se,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]})}))),g.includes(O.VURDER_NYOPPSTARTET_FL)&&(f.push(O.VURDER_NYOPPSTARTET_FL),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),g.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(f.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:(...y)=>u.jsx(ae,{size:"xsmall",level:"3",children:y})}})}))),g.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const y=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let b="";y.forEach((c,T)=>{const{arbeidsgiverIdent:h}=c,N=n[h],E=N?Vn(N):h;T===0?b=E:b=`${b}, ${E}`}),f.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),v.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:b,h3:(...c)=>u.jsx(ae,{size:"xsmall",level:"3",children:c})}})}))}return v.length>0?u.jsx(K,{gap:"4",children:v.map((y,b)=>u.jsx(C.Fragment,{children:y},f[b]))}):u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},IA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkar:v,skalKunneAvbryteOverstyring:f=!1})=>{const[y,b]=A.useState(0),c=v==null?void 0:v.perioder;if(A.useEffect(()=>{if(c){const E=e==null?void 0:e.findIndex(P=>si(P,c));E>-1&&b(E)}},[]),e.length===0||!v)return u.jsx(u.Fragment,{children:"Har ikke beregningsgrunnlag."});const T=e.length>1,h=e[y],N=h.avklaringsbehov;return u.jsx(Ge,{value:fA,children:u.jsx("div",{className:Ig.main,children:u.jsxs(K,{gap:"4",children:[u.jsx(ae,{size:"small",level:"2",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Cn(am,N)||Cn(bA,N))&&!Jk(N)&&u.jsx(u.Fragment,{children:AA(h,o)}),T&&u.jsx("div",{className:Ig.tabsContainer,children:u.jsx(vr,{value:y.toString(),onChange:E=>b(Number(E)),children:u.jsx(vr.List,{children:e.map((E,P)=>u.jsx(vr.Tab,{value:P.toString(),label:jA(E,c),className:si(E,c)?"harAksjonspunkt":"",icon:si(E,c)&&u.jsx(Rr,{width:20,height:20,color:"Orange"})},E.skjaeringstidspunktBeregning))})})}),u.jsx(mA,{aktivtBeregningsgrunnlagIndeks:y,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:N,submitCallback:r,readOnly:t||cA(e[y],c),submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:m,formData:g,vilkar:v,skalKunneAvbryteOverstyring:f})]})})})},TA=[de.VURDER_FAKTA_FOR_ATFL_SN,de.AVKLAR_AKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],RA=[de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],EA=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r,rettigheter:t}=A.use(Sn),a=ar(TA,RA),s=qn(r),{data:l,isFetching:o}=Nn(s.beregningsgrunnlagOptions(r));return i.jsx(sr,{standardPanelProps:a,faktaPanelKode:tr.BEREGNING,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:Vu(r,"BEREGNINGSGRUNNLAG"),children:o?i.jsx(En,{}):i.jsx(NA,{kodeverkSamling:a.alleKodeverk,vilkar:xA(r==null?void 0:r.vilkår,l),beregningsgrunnlag:BA(l),submitCallback:qA(a.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:t.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:a.readOnly,submittable:a.submittable})})},NA=e=>{const{formData:n,setFormData:r}=Mn();return i.jsx(IA,{...e,formData:n,setFormData:r})},PA=e=>{switch(e){case he.AVKLAR_AKTIVITETER:return de.AVKLAR_AKTIVITETER;case he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case he.VURDER_FAKTA_FOR_ATFL_SN:return de.VURDER_FAKTA_FOR_ATFL_SN;case he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},qA=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:PA(a.kode),...a.grunnlag[0]}));return e(t)},SA=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),xA=(e,n)=>{if(!e)return null;const r=e.find(a=>a.vilkarType&&a.vilkarType===Xn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[SA(n,r)]}},BA=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];EA.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Le=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))(Le||{});function sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tg={exports:{}},Dr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function FA(){if(Rg)return Dr;Rg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Dr.Fragment=n,Dr.jsx=r,Dr.jsxs=r,Dr}var Eg;function _A(){return Eg||(Eg=1,Tg.exports=FA()),Tg.exports}var p=_A();function ht(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function gr(e,n){return ht(e,n).vurderesIBehandlingen}var hr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(hr||{}),qi=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(qi||{}),ve=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ve||{});const Nl=e=>e==="OPPR";var nt=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(nt||{}),At=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(At||{});const OA=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],DA=e=>OA.some(n=>n===e),wA="_begrunnelseTextField_1wq9u_1",VA="_explanationTextarea_1wq9u_4",MA="_explanationTextareaReadOnly_1wq9u_7",ii={begrunnelseTextField:wA,explanationTextarea:VA,explanationTextareaReadOnly:MA},Pl={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":'Utgangspunktet er at alle nye inntektskilder som kommer etter skjæringstidspunktet skal kunne medføre gradering mot inntekt. Du skal derfor vanligvis velge "ja", som betyr at K9 vurderer om pleiepengene skal graderes mot denne inntekten. Hvis du velger "nei", vil ikke K9 bruke denne aktiviteten for å vurdere søkers inntektstap.',"FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},Ng=Ke(Pl),GA=fn(3),LA=yn(1500),It=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||Ng.formatMessage({id:l});return p.jsx(Ge,{value:Ng,children:(n||r)&&p.jsx("div",{className:ii.begrunnelseTextField,children:p.jsx(Qe,{name:s,label:e?"":o,validate:e?[]:[Q,GA,LA,bn],className:e?ii.explanationTextareaReadOnly:ii.explanationTextarea,maxLength:1500,readOnly:e})})})},KA=e=>e&&e.begrunnelse?e.begrunnelse:"";It.buildInitialValues=(e,n="begrunnelse")=>({[n]:Yi(KA(e))});It.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const $A=Ke(Pl),UA=(e,n,r)=>!r||n?!0:!e,Ta=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:a})=>e?null:p.jsx(se,{size:"small",loading:t,disabled:UA(a,t,n),onClick:r||Fu,type:r?"button":"submit",children:$A.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Pg(e,n){return n.tom!=null&&!I(n.tom).isBefore(I(e.fom))&&(e.tom==null||!I(n.tom).isAfter(I(e.tom)))}function HA(e,n){return Pg(e,n)||Pg(n,e)}function Tn(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===At.UDEFINERT)?!0:!n||n.length===0||n.some(t=>HA(t,e))}var qg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Sg;function YA(){return Sg||(Sg=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(qg)),qg.exports}var CA=YA();const im=sm(CA),zA="_vurdertIForrigeIcon_1q86k_1",JA={vurdertIForrigeIcon:zA},WA=im.bind(JA),lm=({className:e=""})=>{const n=Z();return p.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:WA("vurdertIForrigeIcon",e),children:p.jsx(pa,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},Hr=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Tt=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${I(t).format(te)})${Hr(n)}`:r:s?`${r} (${s})${Hr(n)}`:r},Si=(e,n)=>{var r,t;const a=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!a||!n[a])return"";const s=n[a];return s.erPrivatPerson?s.fødselsdato?`${s.navn} (${I(s.fødselsdato).format(te)})${Hr(e.eksternArbeidsforholdRef)}`:`${s.navn}${Hr(e.eksternArbeidsforholdRef)}`:`${s.navn} (${a})${Hr(e.eksternArbeidsforholdRef)}`},dm=" - ",om=e=>e==null,ZA=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${dm}${r}`},XA=e=>e.inntektskategori&&e.inntektskategori!==At.UDEFINERT?e.inntektskategori:"",QA=(e,n,r,t)=>{var a,s;if(!e.aktivitetStatus||e.aktivitetStatus===ve.UDEFINERT)return"";if(e.aktivitetStatus===ve.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?Tt(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((a=r[hr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var g;return o.kode===((g=e.arbeidsforhold)==null?void 0:g.arbeidsforholdType)}))==null?void 0:a.kode)||""}return n&&e.aktivitetStatus===ve.BRUKERS_ANDEL?"Ytelse":((s=r[hr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:s.navn)||""},eI=e=>om(e)?void 0:e,xg=e=>M(e)||"",nI=(e,n,r)=>e!==void 0?xg(e):r&&!om(n)?xg(n):"",rI=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),tI=(e,n,r,t)=>({andel:QA(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:XA(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===At.UDEFINERT?void 0:e.inntektskategori}),gm=(e,n,r,t,a)=>{if(n.skalRedigereInntekt){const s=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.fastsattBelop`);return s?pe(s):0}return n.readOnlyBelop?pe(n.readOnlyBelop):0},aI=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),sI=(e,n)=>{var r;const t=e.find(a=>{var s,l;return!!a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===((s=n.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&a.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},iI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!aI(t.arbeidsforhold,r)){const a=sI(n,t),s={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:a.beregningsperiodeTom,beregningsperiodeFom:a.beregningsperiodeFom,...t.arbeidsforhold};r.push(s)}}),r},lI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],dI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],oI=(e,n)=>iI(lI(e),dI(n)),gI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],a=e.beregningsgrunnlagPeriode;return oI(t,a)},uI=e=>e?Number(pe(e)):0,kI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),mI=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,vI=(e,n)=>e.some(r=>mI(n,r)),pI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},fI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{if(s.nyAndel&&(s.andelsnrRef||s.andelsnrRef===0)){const o=pI(t,s.andelsnrRef);a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:s.inntektskategori,arbeidsgiverIdent:s.arbeidsgiverId,arbeidsforholdId:s.arbeidsforholdId})}),a},yI=(e,n,r,t,a)=>{const s=fI(e,n,r,t),l=[];let o=!1;return s.forEach(g=>{vI(l,g)&&(o=!0),l.push(g)}),o?kI(a):void 0},bI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,cI=(e,n,r,t,a,s)=>{const l=s.findIndex(({arbeidsforholdId:g,arbeidsgiverId:m})=>g===t.arbeidsforholdId&&m===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.refusjonskrav`);if(l>=0){const g=s[l];bI(t,g)&&(g.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(g.totalRefusjon+=Number(pe(o)))}else{const{refusjonskravFraInntektsmelding:g,arbeidsforholdId:m,arbeidsgiverId:v,eksternArbeidsforholdId:f}=t;let y=0;o!=null&&(y=Number(pe(o))),s.push({arbeidsforholdId:m,eksternArbeidsforholdId:f,arbeidsgiverId:v,refusjonskravFraInntektsmelding:g,totalRefusjon:y})}},jI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{s.arbeidsforholdId!==""&&cI(e,n,r,s,l,a)}),a},hI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),AI=(e,n,r,t,a,s)=>{const l=jI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?a[l[0].arbeidsgiverId]:void 0;let g;return o?g=Tt(o,l[0].eksternArbeidsforholdId):g=l[0].arbeidsgiverId||"",hI(g,s)}},II=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,TI=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),RI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,EI=(e,n,r)=>e>=Math.round(n)?RI(M(n),r):void 0,um=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),km=(e,n,r,t,a)=>e>=Math.round(n)?t(M(n),r,a):void 0,NI=(e,n,r)=>e!==Math.round(n)?II(M(Math.round(n)),r):void 0,PI=(e,n,r,t,a,s,l)=>{if(!r.andelIArbeid)return!1;const o=a(`FORDEL_BEREGNING_FORM.${e}.${s}.${l}.fastsattBelop`),g=o?pe(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&g<=0?!0:r.andelIArbeid.split(dm).filter(m=>Number(m)>0).length>0&&g===0},qI=(e,n,r,t,a,s)=>t.some((l,o)=>PI(e,s,l,a,n,r,o))?TI(s):void 0,SI=(e,n,r,t,a,s)=>{const l=t.map((o,g)=>gm(e,o,r,n,g)).reduce((o,g)=>o+g,0);return a!=null?NI(l,a,s):void 0},Bg=(e,n,r,t,a)=>{const s=a(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return uI(s)},xI=(e,n,r,t,a,s)=>{const l=!!n.find((m,v)=>m.andelIArbeid!=="0.00"&&Bg(e,m,r,v,t)===0),o=n.map((m,v)=>Bg(e,m,r,v,t)).reduce((m,v)=>m+v,0),g=6*a;return l?EI(o,g,s):void 0},mm=(e,n)=>{const r=e.map(t=>{var a;return((a=n[hr.AKTIVITET_STATUS].find(s=>s.kode===t))==null?void 0:a.navn)||""});return r.sort((t,a)=>t.localeCompare(a)),[...new Set(r)].join(", ")},vm=(e,n,r,t,a)=>t.map((s,l)=>s.aktivitetStatus&&!a.includes(s.aktivitetStatus)?0:gm(e,s,r,n,l)).reduce((s,l)=>s+l,0),BI=(e,n,r,t,a,s,l)=>{const o=[ve.ARBEIDSTAKER],g=vm(e,n,r,t,o),m=mm(o,s);return km(g,a,m,um,l)},FI=(e,n,r,t,a,s,l)=>{const o=[ve.ARBEIDSTAKER,ve.FRILANSER,ve.DAGPENGER,ve.ARBEIDSAVKLARINGSPENGER],g=t.map(f=>f.aktivitetStatus).filter(f=>!!f&&o.includes(f)),m=vm(e,n,r,t,g),v=mm(g,s);return km(m,a,v,um,l)},_I=(e,n,r,t,a,s,l)=>{const o=!!t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===ve.FRILANSER),g=6*s;if(o)return BI(e,n,r,t,g,l,a);if(t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE))return FI(e,n,r,t,g,l,a)},OI="_rightAlignInput_1tnrv_19",DI="_slettIkon_1tnrv_29",wI="_inntektTable_1tnrv_88",VI="_shortLeftAligned_1tnrv_137",MI="_wordwrap_1tnrv_142",GI="_litenBredde_1tnrv_145",LI="_storBredde_1tnrv_148",KI="_benyttCheckbox_1tnrv_154",Me={rightAlignInput:OI,slettIkon:DI,inntektTable:wI,shortLeftAligned:VI,wordwrap:MI,litenBredde:GI,storBredde:LI,benyttCheckbox:KI},$I=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:M(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),pm=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[hr.OPPTJENING_AKTIVITET_TYPE].find(a=>a.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":Tt(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},UI=(e,n,r)=>e.map(t=>p.jsx("option",{value:t.andelsnr.toString(),children:pm(t,n,r)},t.andelsnr)),HI=(e,n,r,t)=>{const a=e.map(s=>p.jsx("option",{value:s.andelsnr.toString(),children:pm(s,r,t)},s.andelsnr));return a.push(p.jsx("option",{value:qi.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},qi.BRUKERS_ANDEL)),a},YI=e=>e.map(n=>p.jsx("option",{value:n.kode,children:n.navn},n.kode)),fm=e=>e>0&&M(e)||"",CI=(e,n,r,t)=>{let a=0,s=0;for(s;s<r.length;s+=1){const l=r[s],o=pe(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${s}.fastsattBelop`));l.skalRedigereInntekt?a+=o||0:a+=l.readOnlyBelop?o:0}return fm(a)},zI=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(pe(t.beregningsgrunnlagPrAar)):0)}return fm(n)},JI=e=>e.inntektskategori?DA(e.inntektskategori)||At.FRILANSER===e.inntektskategori:!1,WI=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},ZI=(e,n)=>{var r;const t=Number(n);return(r=e.find(a=>a.andelsnr===t))==null?void 0:r.aktivitetStatus},XI=(e,n,r,t,a)=>{const s=e[n],l=WI(r,t);l&&(s.arbeidsforholdId=l.arbeidsforholdId,s.arbeidsgiverId=l.arbeidsgiverIdent,s.arbeidsperiodeFom=l.startdato,s.arbeidsperiodeTom=l.opphoersdato,s.andelsnrRef=l.andelsnr,s.aktivitetStatus=ZI(e,t),s.nyttArbeidsforhold=l.nyttArbeidsforhold,s.arbeidsforholdType=l.arbeidsforholdType,s.beregningsperiodeTom=l.beregningsperiodeTom,s.beregningsperiodeFom=l.beregningsperiodeFom,a(n,s))},QI=(e,n,r,t,a,s,l)=>p.jsxs(p.Fragment,{children:[!e[n].nyAndel&&p.jsx(ce,{name:`${l(n)}.andel`,className:Me.storBredde,readOnly:!0}),e[n].nyAndel&&p.jsx(ua,{name:`${l(n)}.andel`,className:Me.storBredde,label:"",selectValues:r,readOnly:t,validate:[Q],onChange:o=>XI(e,n,a,o.target.value,s)})]}),eT=(e,n,r,t)=>n?p.jsx(j.DataCell,{children:p.jsx(zr,{children:p.jsx(ce,{name:`${t}.readOnlyBelop`,className:Me.litenBredde,parse:Oe,readOnly:!0,isEdited:!1})})}):p.jsx(j.DataCell,{className:Me.rightAlignInput,children:p.jsx(zr,{children:p.jsx(ce,{name:`${t}.fastsattBelop`,parse:Oe,readOnly:e,validate:[Q,nn(178956970)],isEdited:r&&!n,className:Me.litenBredde})})}),nT=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,rT=(e,n,r,t,a,s,l)=>p.jsxs(j.DataCell,{children:[QI(e,n,r,t,a,s,l),!JI(e[n])&&p.jsx("div",{className:Me.wordwrap,children:p.jsx(ce,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),tT=(e,n)=>e?p.jsx(j.DataCell,{children:p.jsx(ce,{name:`${n}.andelIArbeid`,readOnly:!0,className:Me.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,aT=(e,n,r,t)=>p.jsx(j.DataCell,{className:e||!n[r].skalKunneEndreRefusjon?void 0:Me.rightAlignInput,children:p.jsx(zr,{children:p.jsx(ce,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:Oe,className:Me.litenBredde,validate:n[r].skalKunneEndreRefusjon?[Q,nn(178956970)]:[]})})}),sT=e=>p.jsx(j.DataCell,{children:p.jsx(ce,{name:`${e}.beregningsgrunnlagPrAar`,className:Me.litenBredde,readOnly:!0,parse:Oe})}),iT=(e,n,r)=>p.jsx(j.DataCell,{className:e?Me.shortLeftAligned:void 0,children:p.jsx(zr,{children:p.jsx(ua,{label:"",name:`${n}.inntektskategori`,className:Me.storBredde,validate:e?[]:[Q],selectValues:YI(r),readOnly:e})})}),lT=(e,n,r,t)=>p.jsx(j.DataCell,{children:nT(n,e,r)&&p.jsx(se,{icon:p.jsx(Jn,{"aria-hidden":!0,className:Me.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),dT=(e,n,r)=>p.jsxs(j.Row,{children:[p.jsx(j.DataCell,{children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&p.jsx(j.DataCell,{}),p.jsx(j.DataCell,{}),p.jsx(j.DataCell,{children:p.jsx(B,{size:"small",children:n})}),p.jsx(j.DataCell,{children:p.jsx(B,{size:"small",children:e})}),p.jsx(j.DataCell,{}),p.jsx(j.DataCell,{})]},"bruttoBGSummaryRow"),oT=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var a;return(a=t.perioderMedGraderingEllerRefusjon)==null?void 0:a.some(s=>s.erGradering)})},gT=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:g,periodeFom:m,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:y})=>{const{control:b,watch:c,getValues:T}=Ie(),h=`FORDEL_BEREGNING_FORM.${v}.${e}`,{fields:N,append:E,remove:P,update:q}=en({control:b,name:`FORDEL_BEREGNING_FORM.${v}.${e}`});A.useEffect(()=>{y&&y!==h&&!n&&!r&&T(y).forEach(ee=>{var me;const Te=N.findIndex(sn=>sn.andel===ee.andel&&(sn.inntektskategori===ee.inntektskategori||!sn.inntektskategori&&!ee.lagtTilAvSaksbehandler&&!sn.lagtTilAvSaksbehandler));if(Te>-1){const sn={...N[Te],fastsattBelop:ee.fastsattBelop,refusjonskrav:o?ee.refusjonskrav:(me=N[Te])==null?void 0:me.refusjonskrav,inntektskategori:ee.inntektskategori};q(Te,sn)}})},[y]);const S=!!l.aktivitetStatus&&l.aktivitetStatus.some(ee=>ee===ve.KUN_YTELSE),D=gI(l),F=CI(v,e,N,c),z=zI(N),J=oT(l),_=s[hr.INNTEKTSKATEGORI],G=Z(),w=S?HI(D,G,s,a):UI(D,s,a),H=ee=>`FORDEL_BEREGNING_FORM.${v}.${e}.${ee}`,re=N.map((ee,me)=>{const Te=n||r;return p.jsxs(j.Row,{children:[rT(N,me,w,Te,D,q,H),tT(J,H(me)),aT(Te,N,me,H),sT(H(me)),eT(n,r,t,H(me)),iT(Te,H(me),_),lT(N,me,Te,P)]},ee.id)});re.push(dT(F,z,J));const W=[],ie=ee=>{ee&&W.push(ee)};!n&&N.some(ee=>!!ee.skalRedigereInntekt||!!ee.skalKunneEndreRefusjon)&&(ie(yI(v,T,e,N,G)),ie(SI(v,T,e,N,g,G)),J&&(ie(qI(v,T,e,N,m,G)),ie(_I(v,T,e,N,G,l.grunnbeløp,s))),o&&(ie(xI(v,N,e,T,l.grunnbeløp,G)),ie(AI(v,N,e,T,a,G))));const Re=`FORDEL_BEREGNING_FORM.${v}.${e}.skjemagruppe`,Fe=W.filter(ee=>!!ee),ze=Fe.length>0?Fe[0]:void 0,Je=ga(Re,ze),X=()=>{f(h===y?"":h)};return p.jsxs("div",{children:[p.jsxs(j,{className:Me.inntektTable,children:[p.jsx(j.Header,{children:p.jsxs(j.Row,{children:[p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.Andel"})}),J&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.AndelIArbeid"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.Refusjonskrav"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.Beregningsgrunnlag"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.Fordeling"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.Inntektskategori"})})]})}),p.jsx(j.Body,{children:re})]}),!n&&!r&&p.jsx(se,{icon:p.jsx(zi,{"aria-hidden":!0}),onClick:()=>E($I(r)),type:"button",variant:"secondary",children:p.jsx(ke,{children:p.jsx(k,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&p.jsx(Sp,{className:Me.benyttCheckbox,checked:h===y,onChange:X,children:"Benytt for alle perioder"}),Je&&p.jsx(rt,{children:Je})]})},uT="_statusOk_1qsx9_1",ym={statusOk:uT},kT=im.bind(ym),li=e=>e?I(e,xe).format(te):"-",mT=(e,n)=>n?p.jsx(B,{size:"small",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:li(e),tom:li(n)}})}):p.jsx(B,{size:"small",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:li(e)}})}),vT=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},pT=e=>{const n=vT(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},fT=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>pT(t)).reduce((t,a)=>t+a,0)},ql=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:a,beregningsgrunnlag:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:g,fordelingsperiode:m,fieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:y})=>m.fom?p.jsx(qe,{className:e?ym.statusOk:kT(`fordelBeregningsgrunnlagPeriode--${m.fom}`),children:p.jsxs(qe.Item,{open:t,children:[p.jsxs(qe.Header,{onClick:()=>a(m.fom),children:[mT(m.fom,m.tom)," ",n?p.jsx(lm,{}):""]}),p.jsx(qe.Content,{children:p.jsx(gT,{fieldName:g,readOnly:e,sumIPeriode:fT(s.beregningsgrunnlagPeriode,m.fom),skalIkkeRedigereInntekt:!m.skalRedigereInntekt,skalKunneEndreRefusjon:!!m.skalKunneEndreRefusjon,periodeFom:m.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:y})})]})}):null,yT=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},bT=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!I(t).isBefore(I(n))},Fg=e=>{var n,r,t,a;if(!e)return;const s=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((a=e.arbeidsforhold)==null?void 0:a.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return M(e.besteberegningPrAar+s-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return M(e.overstyrtPrAar+s-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return M(e.beregnetPrAar+s-l)},cT=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?M(e.fordelingForrigeBehandlingPrAar):"")||"";ql.buildInitialValues=(e,n,r,t,a,s)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=yT(l,n);return{...tI(l,t,a,s),...rI(l),andelIArbeid:ZA(l.andelIArbeid||[]),fordelingForrigeBehandling:cT(l),fastsattBelop:nI(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:Fg(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?M(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||bT(o,r),beregningsgrunnlagPrAar:Fg(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:eI(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const bm="fordelBGPeriode",Sl=e=>bm+e,jT=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?pe(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:pe(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),ta=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),hT=e=>ta(e,nt.GRADERING)||ta(e,nt.GRADERING_OPPHOERER),AT=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},cm=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function _g(e){const n=I(e.beregningsgrunnlagPeriodeFom).day()===6,r=I(e.beregningsgrunnlagPeriodeFom).day()===0,t=I(e.beregningsgrunnlagPeriodeTom).day()===6,a=I(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||a)}const IT=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function TT(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>IT(r))}function RT(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const ET=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&cm(a,r));return!!(t===void 0||RT(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),NT=(e,n,r,t)=>{const a=e.fordelBeregningsgrunnlagAndeler||[],s=n.fordelBeregningsgrunnlagAndeler||[];if(a.length!==s.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const g=_g(r),m=_g(o),v=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(g||m)&&!v?!0:!ET(a,s)},PT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&cm(a,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),qT=(e,n,r,t,a)=>{var s,l;const o=t[t.length-1];return((s=r.fordelBeregningsgrunnlagAndeler)==null?void 0:s.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||hT(e)||PT(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||Tn(r,a)&&!Tn(o,a)?!1:ta(e,nt.ARBEIDSFORHOLD_AVSLUTTET)?AT(e,n):ta(e,nt.ENDRING_I_AKTIVITETER_SØKT_FOR)?NT(r,o,e,n):!0},ST=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},xT=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const a=e.find(s=>s.beregningsgrunnlagPeriodeFom===t.fom);if(a){if(qT(a,e,t,r,n))return ST(r,t),r;r.push({...t})}return r},BT=e=>({fom:n,tom:r})=>(I(n).isSame(I(e.fom))||I(n).isAfter(e.fom))&&(e.tom===null||I(r).isSame(I(e.tom))||I(r).isBefore(I(e.tom))),FT=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},_T=e=>({andelsnr:FT(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:jT(e)}),OT=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},DT=(e,n,r,t)=>t.filter(BT(r)).filter(a=>a.skalRedigereInntekt||a.skalKunneEndreRefusjon).map(a=>({andeler:e[Sl(n)].map(_T),fom:OT(a.fom),tom:a.tom})),xl=(e,n,r)=>e.filter(t=>TT(t)).reduce(xT(n,r),[]),wT="_lessPadding_xotc9_1",VT={lessPadding:wT},MT=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},GT=(e,n,r,t)=>{const a=[],s=xl(e,r,t);for(let l=0;l<s.length;l+=1){const{skalRedigereInntekt:o}=s[l];o&&Tn(s[l])&&DT(n,l,s[l],e).forEach(g=>a.push(g))}return a};function LT(e,n){return Tn(n,e.forlengelseperioder)}function KT(e,n){var r;return!Tn(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const Rt=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[g,m]=A.useState([]),[v,f]=A.useState("");A.useEffect(()=>{const b=n.filter(c=>LT(a,c)).filter(c=>c.skalKunneEndreRefusjon||c.skalRedigereInntekt).filter(c=>!!c.fom).map(c=>c.fom);m(b)},[n]);const y=b=>{if(g.includes(b)){const c=g.filter(T=>T!==b);m(c)}else{const c=g.map(T=>T);c.push(b),m(c)}};return p.jsx(lp,{className:VT.lessPadding,children:xl(n,t,a.forlengelseperioder).map((b,c)=>p.jsxs(C.Fragment,{children:[p.jsx(V,{eightPx:!0}),p.jsx(ql,{readOnly:e||!Tn(b,a.forlengelseperioder),erVurdertTidligere:KT(b,a),fordelingsperiode:b,fordelBGFieldArrayName:Sl(c),open:g?g.filter(T=>T===b.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:y,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:f,fieldArrayToRepeat:v}),p.jsx(V,{eightPx:!0})]},bm+b.fom))})};Rt.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:GT(n,e,r,t)});Rt.buildInitialValues=(e,n,r,t)=>{const a={};if(!e)return a;const s=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===ve.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return xl(e,l,n.forlengelseperioder).forEach((o,g)=>{const m=MT(o,l);a[Sl(g)]=ql.buildInitialValues(o,m,n.skjaeringstidspunktBeregning,s,r,t)}),a};const $T=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},Et=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=r.beregningsgrunnlagPeriode,o=$T(r);return p.jsx(Rt,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})};Et.buildInitialValues=(e,n,r,t)=>Rt.buildInitialValues(e,n,r,t);Et.transformValues=(e,n,r,t)=>Rt.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:UT}=Le,HT=(e,n)=>n.some(r=>r.definisjon===e),YT=(e,n,r,t)=>{const a=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||a.push(p.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:(...s)=>p.jsx("b",{children:s}),br:p.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),a},CT=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),zT=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:s})=>s!=null).filter(({perioderMedGraderingEllerRefusjon:s})=>CT(s||[])),a=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erSøktYtelse:l})=>l).includes(!0));return YT(n,r,t,a)},JT=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return HT(UT,e.avklaringsbehov)?zT(t):[]},WT=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=JT(n);return e?p.jsx(p.Fragment,{}):p.jsx(rr,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:xi}=Le,ZT=(e,n)=>n.some(r=>r.definisjon===e),jm=e=>{const n=e.find(r=>r.definisjon===xi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${xi}`);return n},XT="begrunnelse",hm=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},QT=(e,n)=>{if(!ZT(xi,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...Et.transformValues(e,hm(n),r,n.forlengelseperioder)}},eR=(e,n,r,t)=>{const a=hm(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...It.buildInitialValues(jm(e.avklaringsbehov),XT),...Et.buildInitialValues(a,e,t,r)}},nR=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=jm(r.avklaringsbehov),o=!Nl(l.status),g=Ie(),m=g.watch(`FORDEL_BEREGNING_FORM.${s}.begrunnelse`);return p.jsxs(p.Fragment,{children:[p.jsx(WT,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),p.jsx(V,{twentyPx:!0}),p.jsx(Et,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s}),p.jsx(V,{twentyPx:!0}),p.jsx(It,{name:`FORDEL_BEREGNING_FORM.${s}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!m}),p.jsx(Pn,{ident:l.vurdertAv,date:l.vurdertTidspunkt}),p.jsx(V,{twentyPx:!0}),p.jsx(Ta,{isSubmittable:n,isReadOnly:e,isSubmitting:g.formState.isSubmitting,isDirty:g.formState.isDirty})]})},{FORDEL_BEREGNINGSGRUNNLAG:rR}=Le,aa="FORDEL_BEREGNING_FORM",tR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},aR=(e,n,r)=>{const t=e[aa].filter(a=>gr(r,a.periode.fom)).map(a=>QT(a,tR(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:rR}};function Am(e){return e.avklaringsbehov.some(n=>n.definisjon===Le.FORDEL_BEREGNINGSGRUNNLAG)}const sR=(e,n,r,t)=>({[aa]:e.filter(Am).map(a=>eR(a,ht(n,a.vilkårsperiodeFom),r,t))}),iR=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:a,vilkårsperioder:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,setFordelingFormIsDirty:v})=>{const f=Ye({defaultValues:g!=null&&g.FORDEL_BEREGNING_FORM?g:sR(a,s,o,l)}),{formState:{dirtyFields:y,isSubmitted:b,errors:c,isDirty:T},control:h,trigger:N}=f;A.useEffect(()=>{v(T)},[T]),A.useEffect(()=>{var P;b&&(P=y[aa])!=null&&P[e]&&N()},[e]);const{fields:E}=en({name:aa,control:h});return p.jsx(Ci,{errorMessage:"Noe gikk galt ved visning av fordeling",children:p.jsx(Ce,{formMethods:f,onSubmit:P=>{Object.keys(c).length===0&&t(aR(P,a,s))},setDataOnUnmount:m,children:E.map(P=>{const q=a.findIndex(S=>S.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp);return p.jsx("div",{style:{display:q===e?"block":"none"},children:p.jsx(nR,{submittable:r,readOnly:n||!gr(s,a[q].vilkårsperiodeFom),beregningsgrunnlag:a[q],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:a.filter(Am).findIndex(S=>S.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp)})},P.id)})})})},lR=(e,n)=>e.map(r=>p.jsx("div",{children:r&&r.erTildeltRefusjon?p.jsx(R,{children:n}):p.jsx(R,{children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),dR=e=>{if(!e)return;const n=e.tom===Be?void 0:e.tom;return p.jsx(R,{children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:Ve(e.fom),tom:n?Ve(n):""}})})},oR=e=>e.map(n=>p.jsx("div",{children:dR(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),gR=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>p.jsxs(j.Row,{children:[p.jsx(j.DataCell,{children:p.jsx(R,{children:Si(e,n)})}),p.jsx(j.DataCell,{children:lR(e.tidligereUtbetalinger||[],Si(e,n))}),p.jsx(j.DataCell,{children:oR(e.tidligereUtbetalinger||[])})]}),uR="_tabellContainer_9a5fi_1",kR={tabellContainer:uR},mR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,vR=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return p.jsx("div",{className:kR.tabellContainer,children:p.jsxs(j,{children:[p.jsx(j.Header,{children:p.jsxs(j.Row,{children:[p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),p.jsx(j.Body,{children:t.map(a=>p.jsx(gR,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:a},mR(a)))})]})})},pR="_bredde_1lhuf_1",fR="_tekstMidtstilt_1lhuf_4",di={bredde:pR,tekstMidtstilt:fR},yR="REFUSJON_ENDRING_DATO",bR="DELVIS_REFUSJON_FØR_START_BELØP",Im=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,sa=e=>Im(yR,e),Bl=e=>Im(bR,e),cR=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,Nt=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:a,vilkårperiodeFieldIndex:s})=>{const l=Si(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",g=Ie().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${sa(e)}`),m=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,v=cR(a,g),f=A.useCallback(b=>p.jsx("b",{children:b}),[]),y=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return p.jsxs(K,{children:[p.jsx(R,{children:p.jsx(k,{id:o,values:{ag:l,dato:Ve(e.nyttRefusjonskravFom),b:f}})}),p.jsxs($,{gap:"6",children:[p.jsx("div",{className:di.tekstMidtstilt,children:p.jsx(R,{children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),p.jsx(Wn,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${sa(e)}`,isReadOnly:n,validate:n?[]:[Q,An,oa(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),y&&!v&&!m&&p.jsxs($,{gap:"6",children:[p.jsx("div",{className:di.tekstMidtstilt,children:p.jsx(R,{children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),p.jsx(ce,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${Bl(e)}`,className:di.bredde,validate:n?[]:[Q,nn(e.maksTillattDelvisRefusjonPrMnd)],parse:Oe,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};Nt.buildInitialValues=e=>{const n={};return n[sa(e)]=e.fastsattNyttRefusjonskravFom||"",n[Bl(e)]=M(e.fastsattDelvisRefusjonPrMnd)||"",n};Nt.transformValues=(e,n,r)=>{var t,a;const s=sa(n),l=e[s];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const g=Bl(n);o=pe(e[g])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(a=n.arbeidsgiver)==null?void 0:a.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const Og="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:jR}=Le,Tm=e=>e?e.find(n=>n.definisjon===jR):void 0,hR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,AR=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],a=Tm(e.avklaringsbehov);let s={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:a&&a.begrunnelse?a.begrunnelse:void 0};return t.forEach(l=>{s={...s,...Nt.buildInitialValues(l)}}),s},IR=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(a=>Nt.transformValues(e,a,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},TR=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:a,formSubmittes:s})=>{var l;const o=!r.avklaringsbehov.some(b=>b.definisjon===Le.VURDER_REFUSJON_BERGRUNN),g=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],m=Tm(r.avklaringsbehov),v=m?Nl(m.status):!1,f=Ie(),y=f.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${a}.begrunnelse`);return p.jsxs(p.Fragment,{children:[v&&p.jsx(rr,{children:[p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),p.jsx(V,{sixteenPx:!0}),p.jsx(ae,{size:"small",children:p.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),p.jsx(V,{sixteenPx:!0}),p.jsx(vR,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),p.jsx(V,{sixteenPx:!0}),g.map(b=>p.jsx(Nt,{refusjonAndel:b,readOnly:o||n,erAksjonspunktÅpent:v,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:Og,vilkårperiodeFieldIndex:a},hR(b))),p.jsx(V,{twentyPx:!0}),p.jsx(It,{name:`${Og}.${a}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!y}),p.jsx(Pn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),p.jsx(V,{twentyPx:!0}),p.jsx(Ta,{isSubmittable:e,isReadOnly:o||n,isSubmitting:s,isDirty:f.formState.isDirty}),p.jsx(V,{sixteenPx:!0})]})},ia="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:RR}=Le,ER=(e,n)=>({[ia]:e.map(r=>AR(r,ht(n,r.vilkårsperiodeFom)))}),NR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},PR=(e,n)=>n.filter(r=>r.skjaeringstidspunktBeregning===e).some(r=>r.avklaringsbehov.some(t=>t.definisjon==="VURDER_REFUSJONSKRAV")),qR=(e,n,r)=>{const t=e[ia].filter(a=>gr(r,a.periode.fom)).filter(a=>PR(a.beregningsgrunnlagStp,n)).map(a=>IR(a,NR(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:RR}},SR=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:a,arbeidsgiverOpplysningerPerId:s,setFormData:l,formData:o,submitCallback:g,setRefusjonFormIsDirty:m})=>{const v=Ye({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:ER(t,a)}),[f,y]=A.useState(!1),{formState:{dirtyFields:b,isSubmitted:c,errors:T,isDirty:h},control:N,trigger:E}=v;A.useEffect(()=>{m(h)},[h]),A.useEffect(()=>{var q;c&&(q=b[ia])!=null&&q[e]&&E()},[e]);const{fields:P}=en({name:ia,control:N});return p.jsx(Ci,{errorMessage:"Noe gikk galt ved visning av refusjon",children:p.jsx(Ce,{formMethods:v,onSubmit:q=>{Object.keys(T).length===0&&(y(!0),g(qR(q,t,a)))},setDataOnUnmount:l,children:P.map(q=>{const S=t.findIndex(D=>D.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp);return p.jsx("div",{style:{display:S===e?"block":"none"},children:p.jsx(TR,{submittable:n,readOnly:r||!gr(a,t[S].vilkårsperiodeFom),beregningsgrunnlag:t[S],arbeidsgiverOpplysningerPerId:s,vilkårperiodeFieldIndex:S,formSubmittes:f})},q.id)})})})};var Bi={exports:{}},xR=Bi.exports,Dg;function BR(){return Dg||(Dg=1,function(e,n){(function(r,t){e.exports=t()})(xR,function(){return function(r,t,a){t.prototype.isBetween=function(s,l,o,g){var m=a(s),v=a(l),f=(g=g||"()")[0]==="(",y=g[1]===")";return(f?this.isAfter(m,o):!this.isBefore(m,o))&&(y?this.isBefore(v,o):!this.isAfter(v,o))||(f?this.isBefore(m,o):!this.isAfter(m,o))&&(y?this.isAfter(v,o):!this.isBefore(v,o))}}})}(Bi)),Bi.exports}var FR=BR();const Rm=sm(FR),wg=e=>e===Be?"":I(e).format(te),_R=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=Z(),[a,s]=A.useState(),l=A.useCallback(v=>{const f=I(v).format(xe);if(r(f),f){const y=n(f);y.sort((b,c)=>I(b.fom).diff(I(c.fom))),s(y)}},[n]),o=[v=>!e||!I(v).isAfter(I(e.fom))||I(v).isAfter(I(e.tom))],{datepickerProps:g,inputProps:m}=fp({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return p.jsxs(p.Fragment,{children:[p.jsx(Xl,{...g,children:p.jsx(Xl.Input,{...m,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})}),a&&p.jsxs("div",{children:[p.jsx(B,{size:"small",children:p.jsx(k,{id:"TilkommetAktivitet.Modal.Resultat"})}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(k,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:I(a[0].fom).format(te),tom:wg(a[0].tom)}})}),p.jsx("li",{children:p.jsx(k,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:I(a[1].fom).format(te),tom:wg(a[1].tom)}})})]})]})]})},OR=e=>e?e.tom===Be?!0:Pu(e.fom,e.tom,!0)>1:!1,DR=e=>e.map(n=>({fom:n.fom,tom:n.tom})),wR=(e,n)=>{const r=I(e).format(te);if(n&&n!==Be){const t=I(n).format(te);return r.concat(" - ",t)}return r.concat(" - ")},VR=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:a})=>{const s=Z(),[l,o]=A.useState(void 0),[g,m]=A.useState(void 0),v=A.useMemo(()=>DR(e),[e]),f=A.useCallback(()=>{l&&g&&(r(l),a())},[e,l]),y=A.useCallback(c=>{const T=c.target.value,h=v.find(N=>N.fom===T);m(h||void 0)},[]),b=g&&OR(g);return t?p.jsxs(St,{width:"500px",open:t,onClose:a,"aria-label":"Del opp periode",children:[p.jsx(St.Header,{children:p.jsx(k,{id:"TilkommetAktivitet.Modal.Tittel"})}),p.jsx(St.Body,{children:p.jsxs(K,{gap:"4",children:[p.jsxs(pp,{label:s.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:y,size:"small",children:[p.jsx("option",{value:void 0,children:"Velg periode"}),v.map(c=>p.jsx("option",{value:c.fom,children:wR(c.fom,c.tom)},c.fom))]}),b&&p.jsx(_R,{forhåndsvisPeriodesplitt:n,periode:g,setValgtDato:o})]})}),p.jsxs(St.Footer,{children:[p.jsx(se,{size:"small",variant:"secondary",onClick:a,disabled:!1,autoFocus:!0,type:"button",children:p.jsx(k,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})}),p.jsx(se,{size:"small",variant:"primary",onClick:f,disabled:!l,autoFocus:!0,type:"button",children:p.jsx(k,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})]})]}):null};I.extend(Rm);const MR="2023-05-01";function GR(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const LR=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(s=>t.push(s));const a={...r,inntektsforholdListe:t.filter(GR()),tom:n.tom};e.push(a)},KR=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let a=0;a<r.length;a+=1){const s=r[a],l=t.find(o=>o.aktivitetStatus===s.aktivitetStatus&&o.arbeidsgiverId===s.arbeidsgiverId&&o.arbeidsforholdId===s.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==s.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==s.skalRedusereUtbetaling)return!1}return!0},Vg=(e,n)=>Pu(e,n,!0)>2,$R=(e,n)=>{const r=n.tom,t=e.fom;return I(r).isBefore(I(t))?Vg(r,t):Vg(t,r)},UR=(e,n,r)=>{if(I(e.fom).isSame(I(MR)))return!1;const t=n[n.length-1],a=Tn(e,r);return a&&!Tn(t,r)||a&&$R(e,t)?!1:KR(e,t)},HR=e=>(n,r)=>n.length===0?(n.push({...r}),n):UR(r,n,e)?(LR(n,r),n):(n.push({...r}),n),Em=(e,n)=>e.reduce(HR(n),[]);function Nm(e,n){var r;return!Tn(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const Pm=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===ve.ARBEIDSTAKER?r?Tt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ve.FRILANSER?"Frilanser":e.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===ve.DAGPENGER?"Dagpenger":""},YR=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===ve.ARBEIDSTAKER?r?Tt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ve.FRILANSER?"Frilanser":e.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},CR="_tilkommetAktivitet_1quo5_1",zR="_aktivitetContainer_1quo5_4",JR="_aktivitetTable_1quo5_7",WR="_aksjonspunktContainer_1quo5_16",ZR="_aksjonspunktContainerLukketAP_1quo5_21",XR="_bruttoInntektContainer_1quo5_26",QR="_bruttoInntektCurrency_1quo5_29",eE="_inntektsmeldingTag_1quo5_37",nE="_inntektColumn_1quo5_40",Ue={tilkommetAktivitet:CR,aktivitetContainer:zR,aktivitetTable:JR,aksjonspunktContainer:WR,aksjonspunktContainerLukketAP:ZR,bruttoInntektContainer:XR,bruttoInntektCurrency:QR,inntektsmeldingTag:eE,inntektColumn:nE},rE=e=>pe(e)>0?null:`Du kan ikke registrere 0,- i inntekt, da dette ikke vil medføre gradering mot inntekt. 
       Hvis arbeidsforholdet ikke medfører inntekter enda, men kanskje vil det senere, velger du nei. 
       Informer også bruker om at de må melde fra hvis de begynner å jobbe for denne arbeidsgiveren.`,tE=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},aE=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:a,field:s,arbeidsgiverOpplysningerPerId:l})=>{const o=Ie(),g=Z(),m=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`),v=()=>{switch(s.aktivitetStatus){case ve.ARBEIDSTAKER:return p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid",values:{br:p.jsx("br",{})}});case ve.FRILANSER:return p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans",values:{br:p.jsx("br",{})}});case ve.SELVSTENDIG_NAERINGSDRIVENDE:return p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerNæring"});default:return p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid"})}},f=()=>s.aktivitetStatus===ve.SELVSTENDIG_NAERINGSDRIVENDE?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):s.aktivitetStatus===ve.FRILANSER?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:YR(s,l)});return p.jsxs(p.Fragment,{children:[p.jsx(Ne,{label:f(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[Q],isTrueOrFalseSelection:!0}),m===!1&&p.jsxs(p.Fragment,{children:[p.jsx(V,{sixteenPx:!0}),p.jsx(Ee,{size:"small",variant:"info",children:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})})]}),m&&p.jsxs(p.Fragment,{children:[p.jsx(V,{sixteenPx:!0}),p.jsx(B,{size:"small",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),p.jsx(Se,{header:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:v()}),p.jsx(V,{eightPx:!0}),p.jsxs("div",{className:Ue.bruttoInntektContainer,children:[p.jsx(ce,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,htmlSize:9,parse:Oe,validate:[Q,nn(178956970),rE]}),p.jsx("span",{className:Ue.bruttoInntektCurrency,children:"kr"})]})]})]})},Mg=e=>!!e&&+e>0,sE=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=Z(),t=s=>{const l=[];return s.inntektsforholdListe.forEach(o=>{const g=Mg(o.bruttoInntektPrÅr),m=Mg(o.inntektFraInntektsmeldingPrÅr);l.push(p.jsxs(j.Row,{children:[p.jsx(j.DataCell,{children:p.jsx(R,{size:"small",children:Pm(o,e)})}),p.jsx(j.DataCell,{children:p.jsx(R,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(g||m)&&p.jsx(j.DataCell,{children:p.jsxs(R,{size:"small",children:[g&&p.jsxs(p.Fragment,{children:[Ct(o.bruttoInntektPrÅr||0),p.jsx(tt,{})]}),m&&!g&&p.jsxs(p.Fragment,{children:[Ct(o.inntektFraInntektsmeldingPrÅr||0),p.jsx(pa,{className:Ue.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},tE(o)))}),l},a=n.inntektsforholdListe.some(s=>s.bruttoInntektPrÅr);return p.jsx("div",{className:Ue.aktivitetContainer,children:p.jsxs(j,{className:Ue.aktivitetTable,children:[p.jsx(j.Header,{children:p.jsxs(j.Row,{children:[p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling"})}),a&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!a&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(j.Body,{children:t(n)})]})})},Dt=e=>!!e&&+e>0,iE=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:a,erAksjonspunktÅpent:s,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:g,avklaringsbehov:m})=>{const{control:v,formState:f}=Ie(),{fields:y}=en({control:v,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),b=n.inntektsforholdListe.some(h=>Dt(h.bruttoInntektPrÅr)||Dt(h.inntektFraInntektsmeldingPrÅr)),c=n.inntektsforholdListe.some(h=>!!h.periode),T=h=>{const N=[],{inntektsforholdListe:E}=h;return E.forEach(P=>{const q=Dt(P.bruttoInntektPrÅr),S=Dt(P.inntektFraInntektsmeldingPrÅr);N.push(p.jsxs(j.Row,{children:[p.jsx(j.DataCell,{children:p.jsx(R,{size:"small",children:Pm(P,o)})}),(q||S||c)&&p.jsx(j.DataCell,{className:Ue.inntektColumn,children:p.jsxs(R,{size:"small",children:[q&&!S&&p.jsxs(p.Fragment,{children:[Ct(P.bruttoInntektPrÅr||0),p.jsx(tt,{})]}),S&&p.jsxs(p.Fragment,{children:[Ct(P.inntektFraInntektsmeldingPrÅr||0),p.jsx(pa,{className:Ue.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),P.periode&&p.jsx(j.DataCell,{className:Ue.periodeColumn,children:p.jsx(R,{size:"small",children:p.jsx($e,{dateStringFom:P.periode.fom,dateStringTom:P.periode.tom})})})]},P.arbeidsgiverId||P.aktivitetStatus))}),N};return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:Ue.aktivitetContainer,children:p.jsxs(j,{className:Ue.aktivitetTable,children:[p.jsx(j.Header,{children:p.jsxs(j.Row,{children:[p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),b&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!b&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})}),c&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Periode"})}),!c&&p.jsx(j.HeaderCell,{scope:"col",children:p.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(j.Body,{children:T(n)})]})}),p.jsx(V,{sixteenPx:!0}),p.jsxs("div",{className:s?Ue.aksjonspunktContainer:Ue.aksjonspunktContainerLukketAP,children:[y.map((h,N)=>p.jsxs("div",{children:[p.jsx(aE,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:N,field:h,readOnly:a,arbeidsgiverOpplysningerPerId:o},h.id),N<n.inntektsforholdListe.length-1&&p.jsx(V,{fourtyPx:!0})]},h.id)),g&&p.jsxs(p.Fragment,{children:[p.jsx(V,{fourtyPx:!0}),p.jsx(Qe,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:a,validate:[Q]}),p.jsx(Pn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),p.jsx(V,{sixteenPx:!0}),p.jsx(Ta,{isSubmittable:l,isReadOnly:a,isSubmitting:f.isSubmitting,isDirty:f.isDirty})]})]})]})},lE="_statusOk_1qsx9_1",Gg={statusOk:lE},oi=e=>e?I(e,xe).format(te):"-",Lg=(e,n)=>!n||n===Be?p.jsx(B,{size:"medium",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:oi(e)}})}):p.jsx(B,{size:"medium",children:p.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:oi(e),tom:oi(n)}})}),dE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:a,submittable:s,erAksjonspunktÅpent:l,fields:o})=>{const[g,m]=A.useState([]),[v,f]=A.useState([]),[y,b]=A.useState([]),c=Ie();A.useEffect(()=>{var q,S;const D=(S=(q=e.faktaOmFordeling)==null?void 0:q.vurderNyttInntektsforholdDto)==null?void 0:S.vurderInntektsforholdPerioder;if(D){const F=Em(D,e.forlengelseperioder);m(F);const z=v.map(_=>_),J=o.map(_=>_.fom);J.filter(_=>!y.includes(_)).forEach(_=>z.push(_)),f(z),b(J)}},[e,o.length]);const T=g.filter(q=>Nm(q,e)),h=e==null?void 0:e.avklaringsbehov.find(q=>q.definisjon===Le.VURDER_NYTT_INNTKTSFRHLD),N=q=>{if(v.includes(q)){const S=v.filter(D=>D!==q);f(S)}else{const S=v.map(D=>D);S.push(q),f(S)}},E=q=>{const S=I(q),D=g.find(F=>!I(F.fom).isAfter(S)&&!I(F.tom).isBefore(S));if(!D)throw new Error(`Finner ikke periode som overlapper med fom ${q}`);return D},P=q=>()=>N(q);return!g||g.length<1?null:p.jsxs(p.Fragment,{children:[p.jsxs(qe,{className:Gg.statusOk,children:[T.map(q=>p.jsxs(qe.Item,{open:v.filter(S=>S===q.fom).length>0,children:[p.jsxs(qe.Header,{onClick:P(q.fom),children:[Lg(q.fom,q.tom)," ",p.jsx(lm,{})]}),p.jsx(qe.Content,{children:p.jsx(sE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:q})})]},q.fom)),o.map((q,S)=>p.jsxs(qe.Item,{open:v.filter(D=>D===q.fom).length>0,children:[p.jsx(qe.Header,{onClick:P(q.fom),children:Lg(q.fom,q.tom)}),p.jsx(qe.Content,{children:p.jsx(iE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:E(q.fom),formName:r,formFieldIndex:t,periodeFieldIndex:S,readOnly:a,erAksjonspunktÅpent:l,submittable:s,skalViseBegrunnelse:o.length===1,avklaringsbehov:h})})]},q.fom))]}),o.length>1&&p.jsxs("div",{className:Gg.aktivitetContainer,children:[p.jsx(V,{fourtyPx:!0}),p.jsx(Qe,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:a,validate:[Q]}),p.jsx(Pn,{ident:h==null?void 0:h.vurdertAv,date:h==null?void 0:h.vurdertTidspunkt}),p.jsx(V,{sixteenPx:!0}),p.jsx(Ta,{isSubmittable:s,isReadOnly:a,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty})]})]})},gi=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),oE=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:a,erAksjonspunktÅpent:s,arbeidsgiverOpplysningerPerId:l})=>{var o,g;const m=Z(),[v,f]=A.useState(!1),{control:y,watch:b}=Ie(),{fields:c,remove:T,insert:h}=en({control:y,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});c.sort((_,G)=>I(_.fom).diff(I(G.fom)));const N=(g=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:g.vurderInntektsforholdPerioder,E=()=>{const _=N==null?void 0:N.flatMap(G=>G.inntektsforholdListe.map(w=>w.aktivitetStatus)).reduce((G,w)=>(G.some(H=>H===w)||G.push(w),G),[]);return(_?_.length:0)>1?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):gi(ve.SELVSTENDIG_NAERINGSDRIVENDE,N)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):gi(ve.FRILANSER,N)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):gi(ve.DAGPENGER,N)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},P=()=>s?p.jsxs(Ee,{size:"small",variant:"warning",children:[p.jsx(ae,{size:"xsmall",level:"3",children:E()}),m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):p.jsxs(p.Fragment,{children:[p.jsxs(B,{size:"small",children:[m.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),E()]}),p.jsx(R,{size:"small",children:m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),q=(_,G,w,H)=>{const re=b(`${e}.${r}.perioder.${w}.inntektsforhold.${H}.skalRedusereUtbetaling`),W=b(`${e}.${r}.perioder.${w}.inntektsforhold.${H}.bruttoInntektPrÅr`);return{aktivitetStatus:_.aktivitetStatus,arbeidsgiverIdent:_.arbeidsgiverIdent,arbeidsforholdId:_.arbeidsforholdId,bruttoInntektPrÅr:G?W:void 0,skalRedusereUtbetaling:G?re:void 0}},S=(_,G,w)=>!I(_).isAfter(I(w))&&!I(G).isBefore(I(w)),D=A.useCallback(_=>{const G=c.find(W=>S(W.fom,W.tom,_));if(!G)throw new Error(`Finner ikke field somme inneholder dato ${_}`);const w=I(_).subtract(1,"day"),H={fom:I(G.fom).format(xe),tom:w.format(xe)},re={fom:I(_).format(xe),tom:G.tom};return[H,re]},[c]),F=A.useCallback(_=>{const G=c.find(Re=>S(Re.fom,Re.tom,_));if(!G)throw new Error(`Finner ikke field somme inneholder dato ${_}`);const w=D(_),H=c.indexOf(G),re=G.inntektsforhold||[],W={inntektsforhold:re.map((Re,Fe)=>q(Re,!0,H,Fe)),fom:w[0].fom,tom:w[0].tom},ie={inntektsforhold:re.map((Re,Fe)=>q(Re,!1,H,Fe)),fom:w[1].fom,tom:w[1].tom};T(H),h(H,[W,ie])},[c]),z=A.useCallback(()=>{f(!0)},[v]),J=A.useCallback(()=>{f(!1)},[v]);return p.jsxs(K,{gap:"8",children:[P(),!!N&&s&&p.jsx(p.Fragment,{children:p.jsx(Ee,{size:"small",variant:"info",title:"",children:p.jsx(k,{id:"TilkommetAktivitet.AksjonspunktAlert"})})}),p.jsxs(K,{gap:"0",children:[p.jsxs($,{justify:"space-between",children:[p.jsx(ae,{size:"small",level:"3",children:p.jsx(k,{id:"TilkommetAktivitet.Heading"})}),p.jsx(se,{variant:"tertiary",loading:!1,disabled:t,onClick:z,size:"small",type:"button",icon:p.jsx(Np,{height:32,width:32}),children:p.jsx(k,{id:"TilkommetAktivitet.Modal.Knapp"})})]}),v&&p.jsx(VR,{fields:c,forhåndsvisPeriodesplitt:D,lukkModal:J,skalViseModal:v,utførPeriodesplitt:F}),p.jsx(dE,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:c,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:s,submittable:a})]})]})};I.extend(Rm);const{VURDER_NYTT_INNTKTSFRHLD:Fi}=Le,Yr="VURDER_TILKOMMET_AKTIVITET_FORM",qm=e=>{const n=e.find(r=>r.definisjon===Fi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Fi}`);return n},gE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function uE(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Em(t,e.forlengelseperioder).filter(a=>!Nm(a,e))}const kE=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:M(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),mE=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>kE(n))}),vE=(e,n)=>{const r=qm(e.avklaringsbehov),t=uE(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:ht(n,e.vilkårsperiodeFom).periode,perioder:t.map(a=>mE(a))}},pE=(e,n)=>({[`${Yr}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===Le.VURDER_NYTT_INNTKTSFRHLD)).map(r=>vE(r,n))}),fE=(e,n)=>{const r=I(e.fom).isBetween(n.fom,n.tom,"day","[]")||I(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=I(n.fom).isBetween(e.fom,e.tom,"day","[]")||I(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},yE=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),bE=(e,n)=>{var r,t;const a=e.perioder,s=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>a.filter(o=>fE(o,l)).map(o=>{const g=o.inntektsforhold.filter(m=>yE(m,l)).map(m=>{const v=!!m.skalRedusereUtbetaling,f=v?pe(m.bruttoInntektPrÅr):void 0;return{aktivitetStatus:m.aktivitetStatus,arbeidsgiverId:m.arbeidsgiverIdent,arbeidsforholdId:m.arbeidsforholdId,skalRedusereUtbetaling:v,bruttoInntektPrÅr:f}});return{fom:I(o.fom).isBefore(I(l.fom))?l.fom:o.fom,tom:I(o.tom).isAfter(I(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:g}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:s}},cE=(e,n,r)=>{const t=e[Yr].filter(a=>gr(r,a.periode.fom)).map(a=>bE(a,gE(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:Fi}},jE=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:a,readOnly:s,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:g,setTilkommetAktivitetFormIsDirty:m})=>{const v=Ye({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:pE(t,o)}),{formState:{dirtyFields:f,isSubmitted:y,errors:b,isDirty:c},trigger:T,control:h}=v;A.useEffect(()=>{m(c)},[c]),A.useEffect(()=>{var S;y&&(S=f[Yr])!=null&&S[e]&&T()},[e]);const{fields:N}=en({name:Yr,control:h}),E=t[e],P=qm(E.avklaringsbehov),q=P?Nl(P.status):!1;return p.jsx(Ci,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:p.jsx("div",{className:Ue.tilkommetAktivitet,children:p.jsx(Ce,{formMethods:v,onSubmit:S=>{Object.keys(b).length===0&&a(cE(S,t,o))},setDataOnUnmount:r,children:N.map((S,D)=>{const F=t.findIndex(z=>z.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return p.jsx("div",{style:{display:F===e?"block":"none"},children:p.jsx(oE,{formName:Yr,beregningsgrunnlag:t[F],formFieldIndex:D,readOnly:s||!gr(o,t[F].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:q,arbeidsgiverOpplysningerPerId:g})},S.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:hE,VURDER_REFUSJON_BERGRUNN:AE,VURDER_NYTT_INNTKTSFRHLD:IE}=Le,TE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,RE=e=>!!(e&&e.refusjonTilVurdering),EE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,ui=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,NE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:a,kodeverkSamling:s,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,skalHåndtereNyInntekt:v})=>{const[f,y]=A.useState(!1),[b,c]=A.useState(!1),[T,h]=A.useState(!1),N=ui(t[e].avklaringsbehov,hE),E=ui(t[e].avklaringsbehov,AE),P=ui(t[e].avklaringsbehov,IE),q=v&&P&&EE(t[e]),S=N&&TE(t[e]),D=E&&RE(t[e]);return p.jsxs(p.Fragment,{children:[q&&p.jsxs(p.Fragment,{children:[p.jsx(jE,{aktivtBeregningsgrunnlagIndeks:e,formData:g,setFormData:m,submittable:l&&!b&&!T,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:a,setTilkommetAktivitetFormIsDirty:y}),p.jsx(V,{fourtyPx:!0})]}),D&&p.jsxs(p.Fragment,{children:[p.jsx(SR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!T,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkarperioder:a,setRefusjonFormIsDirty:c}),p.jsx(V,{fourtyPx:!0})]}),S&&p.jsx(iR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!b,readOnly:n,submitCallback:r,kodeverkSamling:s,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkårsperioder:a,setFordelingFormIsDirty:h})]})},PE=Ke(Pl),{FORDEL_BEREGNINGSGRUNNLAG:qE,VURDER_REFUSJON_BERGRUNN:SE,VURDER_NYTT_INNTKTSFRHLD:xE}=Le,BE=(e,n)=>{const r=ht(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:a}=r.periode;return a!==null?`${I(t).format(te)} - ${I(a).format(te)}`:`${I(t).format(te)} - `}return`${I(e.vilkårsperiodeFom).format(te)}`},Sm=(e,n)=>e.avklaringsbehov.some(r=>r.definisjon===SE||r.definisjon===qE||r.definisjon===xE&&n),FE=(e,n,r)=>Sm(e,r)&&gr(n,e.vilkårsperiodeFom),_E=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:a,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g,skalHåndtereNyInntekt:m=!0})=>{const v=n.filter(c=>Sm(c,m)),[f,y]=A.useState(0);if(v.length===0)return null;const b=v.length>1;return p.jsxs(Ge,{value:PE,children:[b&&p.jsx(vr,{value:f.toString(),onChange:c=>y(Number(c)),children:p.jsx(vr.List,{children:v.map((c,T)=>p.jsx(vr.Tab,{value:T.toString(),label:BE(c,e.perioder),className:FE(c,e.perioder,m)?"harAksjonspunkt":""},c.skjaeringstidspunktBeregning))})}),p.jsx(V,{eightPx:!0}),p.jsx(NE,{aktivtBeregningsgrunnlagIndeks:f,kodeverkSamling:r,submitCallback:t,readOnly:a,beregningsgrunnlagListe:v,vilkarperioder:e.perioder,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g,skalHåndtereNyInntekt:m})]})},Kg=[de.FORDEL_BEREGNINGSGRUNNLAG,de.VURDER_REFUSJON_BERGRUNN],OE=({arbeidsgiverOpplysningerPerId:e})=>{const n=ar(Kg),{behandling:r}=A.use(Sn),t=qn(r),{data:a,isFetching:s}=Nn(t.beregningsgrunnlagOptions(r));return i.jsx(sr,{standardPanelProps:n,faktaPanelKode:tr.FORDELING,faktaPanelMenyTekst:Z().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Kg.some(l=>va(l,r.aksjonspunkt)),children:s?i.jsx(En,{}):i.jsx(DE,{kodeverkSamling:n.alleKodeverk,beregningsgrunnlagVilkår:GE(n.behandling.vilkår,a),beregningsgrunnlagListe:LE(a),submitCallback:VE(n.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:n.readOnly,submittable:n.submittable})})},DE=e=>{const{formData:n,setFormData:r}=Mn();return i.jsx(_E,{...e,formData:n,setFormData:r})},wE=e=>{switch(e){case Le.FORDEL_BEREGNINGSGRUNNLAG:return de.FORDEL_BEREGNINGSGRUNNLAG;case Le.VURDER_REFUSJON_BERGRUNN:return de.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},VE=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:wE(a.kode),...a.grunnlag[0]}));return e(t)},ME=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),GE=(e,n)=>{if(!e)return null;const r=e.find(a=>a.vilkarType&&a.vilkarType===Xn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[ME(n,r)]}},LE=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];OE.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Bn=({tittel:e,children:n})=>i.jsxs(K,{children:[i.jsx(B,{size:"medium",children:e}),n]});Bn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xm=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:n})=>{var t;const r=Z();return i.jsxs(Bn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[i.jsxs("span",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[n])==null?void 0:t.navn)??"-"]}),i.jsxs("span",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};xm.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Bm=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const a=Z(),s=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),o=(()=>{const m=l.length;return s&&m>1?i.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):s?i.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?i.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):i.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),g=[...l].sort((m,v)=>new Date(m.opprettet).getTime()-new Date(v.opprettet).getTime());return i.jsxs(Bn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,i.jsx(ne,{children:g.map(m=>{var v;return i.jsx(ne.Item,{children:i.jsxs(K,{children:[i.jsx("span",{children:(v=t.BehandlingType.find(({kode:f})=>f===m.type))==null?void 0:v.navn}),i.jsxs("span",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",i.jsx(zt,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?i.jsxs("span",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",i.jsx(zt,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Bm.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const KE=e=>{const n=e.aktiveNaturalytelser.reduce((t,a)=>{const s=a.type;return s in t?{...t,[s]:[...t[s],a]}:{...t,[s]:[a]}},{}),r={};return Object.entries(n).forEach(([t,a])=>{const s=a.sort((l,o)=>xp({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=s.flatMap((l,o,g)=>{const m=g[o+1],v=l.periode.tomDato,f=m==null?void 0:m.periode.fomDato;return v===Be?[]:[{...l,periode:{fomDato:Jt(v,1),tomDato:f?Jt(f,-1):Be}}]})}),r},Fm=({inntektsmelding:e,alleKodeverk:n})=>{const r=Z(),t=KE(e);return i.jsx(Bn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?i.jsx("span",{children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):i.jsx(K,{children:Object.entries(t).map(([a,s])=>{var l;return i.jsxs(K,{children:[i.jsx("span",{children:(l=n[dn.NATURAL_YTELSE_TYPE].find(o=>o.kode===a))==null?void 0:l.navn}),i.jsx("ul",{children:s.map(o=>i.jsxs(C.Fragment,{children:[i.jsxs("li",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",i.jsx(Ae,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Be&&i.jsxs("li",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",i.jsx(Ae,{dateString:o.periode.tomDato})]}),i.jsxs("li",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",M(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},a)})})})};Fm.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const _m=({kildeSystem:e})=>{const n=Z(),r=A.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return i.jsx(Bn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};_m.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Om=({inntektsmelding:e})=>{const n=Z();return i.jsxs(Bn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[i.jsxs("span",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),i.jsxs("span",{children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Om.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Dm=({inntektsmelding:e,fagsak:n})=>i.jsx(se,{type:"button",onClick:()=>{window.open(Wi(n.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:i.jsx(Ip,{}),children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Dm.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}>`},description:""}}};const wm=({inntektsmelding:e})=>{const n=Z();if(e.refusjonsperioder.length===0)return i.jsx(Bn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:i.jsx("span",{children:e.refusjonPrMnd?M(e.refusjonPrMnd):i.jsx(k,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,a)=>new Date(t.fom).getTime()-new Date(a.fom).getTime());return i.jsxs(K,{gap:"0",children:[i.jsx("span",{children:"Krever refusjon"}),i.jsx("span",{children:M(e.refusjonPrMnd??0)}),i.jsx("span",{children:"Endringer i perioden:"}),i.jsx("ul",{children:r.map(t=>i.jsx("li",{children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:M(t.refusjonsbeløp.verdi),fom:i.jsx(Ae,{dateString:t.fom})}})},t.indexKey))})]})};wm.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Vm=({startDatoPermisjon:e,ytelse:n})=>{const r=Z();return e?i.jsxs(Bn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[i.jsx("span",{children:e?i.jsx(Ae,{dateString:e}):"-"}),i.jsx("span",{children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Vm.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const $E="_behandlingCircleIngen_131kr_1",UE="_behandlingCircleDenne_131kr_5",HE="_behandlingCircleAndre_131kr_9",YE="_container_131kr_13",CE="_ingenInntektsmeldinger_131kr_19",Cr={behandlingCircleIngen:$E,behandlingCircleDenne:UE,behandlingCircleAndre:HE,container:YE,ingenInntektsmeldinger:CE},Mm=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:a,behandling:s}=Rn(),l=Z();return i.jsxs(K,{gap:"4",className:Cr.container,children:[i.jsxs($,{gap:"4",justify:"space-between",align:"start",children:[i.jsxs(ae,{level:"3",size:"small",children:[i.jsx(k,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",i.jsx(zt,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),i.jsx(Dm,{fagsak:a,inntektsmelding:e})]}),i.jsxs(Bp,{columns:3,gap:"8",children:[i.jsx(xm,{arbeidsgiverOpplysningerPerId:n,arbeidsgiverIdent:e.arbeidsgiverIdent}),i.jsx(Bn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:i.jsx("span",{children:M(e.inntektPrMnd)})}),i.jsx(Bm,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:s}),i.jsx(Om,{inntektsmelding:e}),i.jsx(Vm,{ytelse:Wr(t,dn.FAGSAK_YTELSE,a.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),i.jsx(_m,{kildeSystem:e.kildeSystem}),i.jsx(Fm,{inntektsmelding:e,alleKodeverk:t}),i.jsx(wm,{inntektsmelding:e})]})]})};Mm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const zE={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},$g=Ke(zE),Gm=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=Rn(),[a,s]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=m=>{s(a&&m===a.orderBy&&a.direction==="descending"?void 0:{orderBy:m,direction:a&&m===a.orderBy&&a.direction==="ascending"?"descending":"ascending"})},o=a?JE({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:a.orderBy,behandling:t}):r,g=(a==null?void 0:a.direction)==="ascending"?o:o.toReversed();return g.length===0?i.jsx(Ge,{value:$g,children:i.jsxs($,{gap:"2",justify:"center",align:"center",className:Cr.ingenInntektsmeldinger,children:[i.jsx(R,{children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.ingen"})}),i.jsx(Yp,{})]})}):i.jsx(Ge,{value:$g,children:i.jsxs(j,{sort:a,onSortChange:m=>l(m),children:[i.jsx(j.Header,{children:i.jsxs(j.Row,{children:[i.jsx(j.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),i.jsx(j.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),i.jsx(j.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),i.jsx(j.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),i.jsx(j.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),i.jsx(j.HeaderCell,{})]})}),i.jsx(j.Body,{children:g.map(m=>{var v;return i.jsxs(j.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:i.jsx(Mm,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:m}),children:[i.jsx(j.DataCell,{children:i.jsx(zt,{dateTimeString:m.innsendingstidspunkt,separator:"kl"})}),i.jsx(j.DataCell,{children:((v=e[m.arbeidsgiverIdent])==null?void 0:v.navn)??"-"}),i.jsx(j.DataCell,{children:m.startDatoPermisjon?i.jsx(Ae,{dateString:m.startDatoPermisjon}):"-"}),i.jsx(j.DataCell,{children:M(m.inntektPrMnd)}),i.jsx(j.DataCell,{children:i.jsx(WE,{behandling:t,inntektsmelding:m})})]},`${m.journalpostId}-${m.internArbeidsforholdId}`)})})]})})},JE=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((a,s)=>{var g,m;const l=(g=n[a.arbeidsgiverIdent])==null?void 0:g.navn,o=(m=n[s.arbeidsgiverIdent])==null?void 0:m.navn;return ki(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((a,s)=>{const l=_i({behandling:t,inntektsmelding:a}),o=_i({behandling:t,inntektsmelding:s});return ki(l,o)}):e.slice().sort((a,s)=>{const l=a[r],o=s[r];return ki(l,o)}),ki=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,WE=({behandling:e,inntektsmelding:n})=>{const r=_i({behandling:e,inntektsmelding:n});return r==="DENNE"?i.jsxs($,{gap:"1",align:"center",children:[i.jsx(xa,{className:Cr.behandlingCircleDenne}),i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?i.jsxs($,{gap:"1",align:"center",children:[i.jsx(xa,{className:Cr.behandlingCircleAndre}),i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):i.jsxs($,{gap:"1",align:"center",children:[i.jsx(xa,{className:Cr.behandlingCircleIngen}),i.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},_i=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Gm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ZE=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r,alleBehandlinger:t}=A.use(Sn),a=ar(),s=qn(r),{data:l}=Nn(s.inntektsmeldingerOptions(r));return i.jsx(sr,{standardPanelProps:a,faktaPanelKode:tr.INNTEKTSMELDINGER,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:l?i.jsx(Gm,{inntektsmeldinger:l,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e}):i.jsx(En,{})})};ZE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const XE=e=>Jt(e,1),Lm=(e,n)=>I(XE(e)).isSame(n)?n:e,Km=(e,n,r)=>{if(!(!n||!r))return I(e).isBefore(n)?n:Lm(e,r)},$m=(e,n,r)=>{if(!(!n||!r))return I(e).isAfter(r)?r:Lm(e,n)},QE=[ye.SYKEPENGER,ye.FORELDREPENGER,ye.PLEIEPENGER,ye.SVANGERSKAPSPENGER,ye.UTENLANDSK_ARBEIDSFORHOLD],$t=(e,...n)=>!!e&&n.includes(e),eN=e=>e?I(e,xe).format(te):"-",nN=e=>$t(e,ye.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",rN=(e,n)=>{const r=n[e];if(!e||!r)return"-";if(r.erPrivatPerson&&r.fødselsdato){const t=eN(r.fødselsdato);return`${r.navn} (${t})`}return r.identifikator?`${r.navn} (${r.identifikator})`:r.navn},tN=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",Um=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:a,ferdiglignetNæring:s})=>i.jsxs(K,{gap:"4",children:[$t(e,ye.ARBEID,ye.NARING,...QE)&&i.jsxs($,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:nN(e)})}),i.jsx(R,{size:"small",children:rN(n,r)})]}),$t(e,ye.ARBEID)&&i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ActivityPanel.Stillingsandel"})}),i.jsx(R,{size:"small",children:t})]})]}),$t(e,ye.NARING)&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ActivityPanel.Registreringsdato"})}),i.jsx(R,{size:"small",children:a?I(a).format(te):"-"})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:tN(s)})}),s.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>i.jsxs($,{gap:"5",children:[i.jsx(R,{size:"small",children:l.år}),i.jsx(R,{size:"small",children:M(l.beløp)})]},l.år))]})]})]});Um.__docgenInfo={description:`ValgtAktivitetSubForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const aN="_panel_18tdb_5",sN="_colMargin_18tdb_9",iN="_margin_18tdb_13",wt={panel:aN,colMargin:sN,margin:iN},lN=fn(3),dN=yn(1500),Ut=(e,n,r)=>e?!!n&&!r:!0,oN=(e,n)=>{const r=dp(e,n);return r?r.months>=1?i.jsx(k,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):i.jsx(k,{id:"ActivityPanel.Days",values:{days:r.days}}):i.jsx("span",{})},gN=(e,n,r,t)=>r||Ut(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",Hm=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:a,harAksjonspunkt:s,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:g,ferdiglignetNæring:m,oppdaterAktivitet:v,valgteFormValues:f,fastsattOpptjening:y,lukkPeriode:b})=>{var J;const c=Z(),T=Ye({defaultValues:f}),{arbeidsgiverReferanse:h,erGodkjent:N,erEndret:E,aktivitetType:P,stillingsandel:q,naringRegistreringsdato:S}=g,D=Km(g.opptjeningFom,y==null?void 0:y.opptjeningFom,y==null?void 0:y.opptjeningTom),F=$m(g.opptjeningTom,y==null?void 0:y.opptjeningFom,y==null?void 0:y.opptjeningTom),z=A.useCallback((..._)=>i.jsx("b",{children:_}),[]);return i.jsx(Ce,{formMethods:T,onSubmit:_=>v(_),children:i.jsx(Eu,{className:wt.panel,merknaderFraBeslutter:l[de.VURDER_PERIODER_MED_OPPTJENING],children:i.jsxs(K,{gap:"6",children:[i.jsxs(K,{gap:"2",children:[i.jsxs($,{justify:"space-between",children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"ActivityPanel.Details"})}),i.jsxs($,{gap:"2",children:[i.jsx(se,{className:wt.margin,size:"xsmall",icon:i.jsx(ka,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(k,{id:"Timeline.prevPeriodShort"})}),i.jsx(se,{className:wt.margin,size:"xsmall",icon:i.jsx(ma,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(k,{id:"Timeline.nextPeriodShort"})}),i.jsx(se,{size:"xsmall",icon:i.jsx(Jn,{"aria-hidden":!0}),onClick:b,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsxs($,{gap:"1",children:[i.jsxs("div",{className:wt.colMargin,children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ActivityPanel.Period"})}),D&&F&&i.jsxs($,{gap:"2",children:[i.jsx(R,{size:"small",children:`${I(D).format(te)} - ${I(F).format(te)}`}),i.jsx(R,{size:"small",children:oN(D,F)})]})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ActivityPanel.Activity"})}),i.jsx(R,{size:"small",children:(J=n.find(_=>_.kode===P))==null?void 0:J.navn})]})]})]}),i.jsx(Um,{valgtAktivitetstype:P,arbeidsgiverReferanse:h,arbeidsgiverOpplysningerPerId:o,stillingsandel:q,naringRegistreringsdato:S,ferdiglignetNæring:m}),!Ut(s,N,E)&&i.jsx(Ne,{name:"erGodkjent",hideLegend:!0,validate:[Q],isReadOnly:e,isEdited:E,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:c.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:i.jsx(k,{id:"ActivityPanel.IkkeGodkjent",values:{b:z}}),value:"false"}]}),i.jsx(Qe,{name:"begrunnelse",label:i.jsx(k,{id:gN(N,E,e,s)}),validate:[Q,lN,dN,bn],maxLength:1500,readOnly:e||Ut(s,N,E)}),!Ut(s,N,E)&&i.jsxs($,{gap:"4",children:[i.jsx(se,{size:"small",variant:"primary",disabled:!T.formState.isDirty,children:i.jsx(k,{id:"ActivityPanel.Oppdater"})}),i.jsx(se,{size:"small",variant:"secondary",onClick:r,type:"button",children:i.jsx(k,{id:"ActivityPanel.Avbryt"})})]})]})})})};Hm.__docgenInfo={description:`ValgtAktivitetForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const uN=e=>e===!1?"danger":e===!0?"success":"warning",kN={[ye.ARBEID]:i.jsx(Fr,{width:20,height:20}),[ye.AAP]:i.jsx(Br,{width:20,height:20}),[ye.DAGPENGER]:i.jsx(Br,{width:20,height:20}),[ye.FORELDREPENGER]:i.jsx(Fp,{width:20,height:20}),[ye.FRILANS]:i.jsx(Fr,{width:20,height:20}),[ye.MILITAR_ELLER_SIVILTJENESTE]:i.jsx(Fr,{width:20,height:20}),[ye.NARING]:i.jsx(Fr,{width:20,height:20}),[ye.OMSORGSPENGER]:i.jsx(Br,{width:20,height:20}),[ye.OPPLARINGSPENGER]:i.jsx(Br,{width:20,height:20}),[ye.PLEIEPENGER]:i.jsx(Br,{width:20,height:20}),[ye.SVANGERSKAPSPENGER]:i.jsx(rf,{width:20,height:20}),[ye.SYKEPENGER]:i.jsx(sf,{width:20,height:20}),[ye.UTENLANDSK_ARBEIDSFORHOLD]:i.jsx(Wp,{width:20,height:20}),[ye.ETTERLONN_SLUTTPAKKE]:i.jsx(Fr,{width:20,height:20})},mN={danger:i.jsx(Mu,{}),success:i.jsx(Qi,{}),warning:i.jsx(Pp,{})},vN=(e,n,r,t,a)=>e.map((s,l)=>{var o;return{id:l,start:I(Km(s.opptjeningFom,t,a)).toDate(),end:I($m(s.opptjeningTom,t,a)).toDate(),radId:(o=r.find(g=>g.aktivitetTypeKode===s.aktivitetType&&g.arbeidsforholdRef===s.arbeidsforholdRef&&g.arbeidsgiverReferanse===s.arbeidsgiverReferanse))==null?void 0:o.id,status:uN(n[l].erGodkjent)}}),pN=(e,n,r)=>e.reduce((a,s)=>(a.some(o=>o.aktivitetType===s.aktivitetType&&o.arbeidsforholdRef===s.arbeidsforholdRef&&o.arbeidsgiverReferanse===s.arbeidsgiverReferanse)||a.push(s),a),[]).map((a,s)=>{const l=n.find(g=>g.kode===a.aktivitetType),o=(l==null?void 0:l.kode)===ye.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:s+1,label:o||"",aktivitetTypeKode:a.aktivitetType,arbeidsforholdRef:a.arbeidsforholdRef,arbeidsgiverReferanse:a.arbeidsgiverReferanse}}),Ym=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:a,setValgtAktivitetIndex:s})=>{const l=Z(),o=r==null?void 0:r.opptjeningFom,g=r==null?void 0:r.opptjeningTom,m=A.useMemo(()=>pN(e,a,l),[e]),v=A.useMemo(()=>vN(e,n,m,o,g),[n]),f=A.useCallback(y=>{const b=v.find(c=>c.id===y);b&&s(b.id)},[v,s]);return!o||!g?null:i.jsxs(we,{startDate:I(o).subtract(1,"months").toDate(),endDate:I(g).add(10,"days").toDate(),children:[i.jsxs(we.Pin,{date:I(o).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"OpptjeningTidslinje.StartDato"})}),i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:o})})]}),i.jsxs(we.Pin,{date:I(g).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"OpptjeningTidslinje.SluttDato"})}),i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:g})})]}),m.map(y=>i.jsx(we.Row,{label:y.label,icon:kN[y.aktivitetTypeKode],children:v.filter(b=>b.radId===y.id).map(b=>i.jsx(we.Period,{start:b.start,end:b.end,status:b.status,icon:mN[b.status],onSelectPeriod:()=>f(b.id),isActive:t===b.id,statusLabel:y.label},b.id))},y.id))]})};Ym.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const fN="_container_ivkzi_1",yN={container:fN},bN=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(i.jsx(k,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(i.jsx(k,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(i.jsx(k,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},cN=e=>I(e).add(1,"days").format(xe),jN=(e,n)=>[...e].sort((r,t)=>{var l,o;const a=(l=n.find(g=>g.kode===r.aktivitetType))==null?void 0:l.navn,s=(o=n.find(g=>g.kode===t.aktivitetType))==null?void 0:o.navn;return a&&s?a.localeCompare(s):0}),Ug=e=>Jt(e,1),hN=(e,n)=>n?e.filter(r=>I(n.opptjeningFom).isBefore(Ug(r.opptjeningTom))).filter(r=>I(r.opptjeningFom).isBefore(Ug(n.opptjeningTom))):[],Cm=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:a,alleMerknaderFraBeslutter:s,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:g,alleKodeverk:m}=Rn(),v=a.length>0,f=m[dn.OPPTJENING_AKTIVITET_TYPE],y=e&&r?jN(hN(e,r),f):[],b=y.map(W=>({erGodkjent:W.erGodkjent,begrunnelse:W.begrunnelse})),{formData:c,setFormData:T}=Mn(),[h,N]=A.useState(c||b),E=y.findIndex(W=>W.erGodkjent===void 0),P=y.length>0?0:void 0,[q,S]=A.useState(E!==-1?E:P),[D,F]=A.useState(!1);A.useEffect(()=>()=>{T(h)},[h]),A.useEffect(()=>{const W=h.findIndex(ie=>ie.erGodkjent===void 0);S(W!==-1?W:void 0)},[h]);const z=()=>{F(!0);const W=y.map((ie,Re)=>({arbeidsforholdRef:ie.arbeidsforholdRef,arbeidsgiverReferanse:ie.arbeidsgiverReferanse,opptjeningFom:ie.opptjeningFom,opptjeningTom:ie.opptjeningTom,aktivitetType:ie.aktivitetType,erGodkjent:h[Re].erGodkjent,begrunnelse:h[Re].begrunnelse})).filter(ie=>ie.begrunnelse);o({opptjeningsaktiviteter:W,kode:de.VURDER_PERIODER_MED_OPPTJENING}).then(()=>F(!1))},J=()=>{q!==void 0&&q<y.length-1&&S(q+1)},_=()=>{q!==void 0&&q>0&&S(q-1)},G=W=>{q!==void 0&&N(ie=>Object.assign([],ie,{[q]:W}))},w=()=>S(void 0),H=()=>{S(void 0)},re=h.some(W=>W.erGodkjent===null||W.erGodkjent===void 0);return i.jsxs(K,{gap:"6",className:yN.container,children:[l&&i.jsx(rr,{children:bN(y)}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:cN(r==null?void 0:r.opptjeningTom)})})]}),i.jsx(Ym,{opptjeningPerioder:y,formVerdierForAlleAktiviteter:h,opptjeningAktivitetTypes:f,setValgtAktivitetIndex:S,valgtAktivitetIndex:q,fastsattOpptjening:r}),q!==void 0&&i.jsx(Hm,{valgtOpptjeningAktivitet:y[q],valgteFormValues:h[q],readOnly:g,opptjeningAktivitetTyper:f,avbrytAktivitet:w,oppdaterAktivitet:G,fastsattOpptjening:r,velgNesteAktivitet:J,velgForrigeAktivitet:_,harAksjonspunkt:v,alleMerknaderFraBeslutter:s,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:H},q),v&&y.length>0&&i.jsx("div",{children:i.jsx(se,{size:"small",variant:"primary",onClick:z,disabled:q!==void 0||D||g||re,loading:D,type:"button",children:i.jsx(k,{id:"OpptjeningFaktaForm.Confirm"})})})]})};Cm.__docgenInfo={description:`OpptjeningFaktaPanel

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const AN={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},IN=Ke(AN),zm=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,a=(e==null?void 0:e.ferdiglignetNæring)||[];return i.jsx(Ge,{value:IN,children:i.jsx(Cm,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:a})})};zm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const TN=[de.VURDER_PERIODER_MED_OPPTJENING],RN=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r}=A.use(Sn),t=ar(TN),a=qn(r),{data:s,isFetching:l}=Nn(a.opptjeningOptions(r));return i.jsx(sr,{standardPanelProps:t,faktaPanelKode:tr.OPPTJENINGSVILKARET,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:r.vilkår.some(o=>o.vilkarType===Xn.OPPTJENINGSVILKARET)&&r.vilkår.some(o=>o.vilkarType===Xn.MEDLEMSKAPSVILKARET&&o.vilkarStatus===Gu.OPPFYLT),children:l?i.jsx(En,{}):i.jsx(zm,{opptjening:s,arbeidsgiverOpplysningerPerId:e})})};RN.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Oi=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Oi||{});const EN="_boks_kspkv_1",NN="_aksjonspunkt_kspkv_9",PN="_harBorderTop_kspkv_13",Jm={boks:EN,aksjonspunkt:NN,harBorderTop:PN},qN=_u.bind(Jm),Wm=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>i.jsx("div",{className:qN(Jm.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});Wm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const SN="_inline_17flc_1",xN="_phoneIcon_17flc_5",BN="_docIcon_17flc_11",mi={inline:SN,phoneIcon:xN,docIcon:BN},Zm=({saksnummer:e,inntektsmelding:n})=>i.jsxs(K,{gap:"4",children:[i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(R,{size:"small",children:M(n.inntektPrMnd)})]}),i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(R,{size:"small",children:i.jsx(k,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),n.refusjonPrMnd&&i.jsxs($,{gap:"4",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(R,{size:"small",children:M(n.refusjonPrMnd)})]}),i.jsxs(at,{href:Wi(e,n.journalpostId,n.dokumentId),target:"_blank",children:[i.jsx("span",{children:i.jsx(R,{size:"small",className:mi.inline,children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx($u,{className:mi.docIcon})]}),i.jsxs($,{gap:"4",align:"center",children:[i.jsx(Uu,{className:mi.phoneIcon}),i.jsxs(K,{gap:"1",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(ke,{children:n.kontaktpersonNavn}),i.jsx(ke,{children:i.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})]})]})]});Zm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const FN="_inline_p7hb9_1",_N="_arrow_p7hb9_5",vi={inline:FN,arrow:_N},Xm=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=A.useState(!1),a=A.useMemo(()=>ON(n,e),[e]);return i.jsxs(i.Fragment,{children:[e.length>0&&i.jsxs(K,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsposterPanel.Inntekter"})}),i.jsx(K,{gap:"1",width:"150px",children:a.filter((s,l)=>r?!0:l<3).map(s=>i.jsxs($,{justify:"space-between",children:[i.jsxs($,{gap:"1",children:[i.jsx(R,{size:"small",children:i.jsx(k,{id:`InntektsposterPanel.${I(s.fom).month()+1}`})}),i.jsx(R,{size:"small",children:I(s.fom).year()})]},s.fom),i.jsx(R,{size:"small",children:M(s.beløp)})]},s.fom))}),i.jsxs(at,{onClick:s=>{s.preventDefault(),t(!r)},href:"",children:[i.jsx("span",{children:i.jsx(R,{size:"small",className:vi.inline,children:i.jsx(k,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?i.jsx(Zi,{className:vi.arrow}):i.jsx(da,{className:vi.arrow})]})]}),e.length===0&&i.jsx(B,{size:"small",children:i.jsx(k,{id:"InntektsposterPanel.IngenInntekt"})})]})},ON=(e,n)=>{const t=I(e).startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),g=n.find(m=>I(m.fom).startOf("month").format(xe)===o);s.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return s};Xm.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const DN="_hjelpetekst_dvkw1_1",wN="_image_dvkw1_5",VN="_hjelpetekstInnhold_dvkw1_9",MN="_exclamationmarkIcon_dvkw1_14",GN="_checkmarkIcon_dvkw1_21",wr={hjelpetekst:DN,image:wN,hjelpetekstInnhold:VN,exclamationmarkIcon:MN,checkmarkIcon:GN},LN="arbeidsforhold",Qm=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:a,arbeidsgiverOpplysningerPerId:s,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:g,alleKodeverk:m})=>{var D;const v=Z(),{inntektsmeldinger:f,inntekter:y}=a,b=t[e],c=f.find(F=>KN(b,F)),T=(D=y.find(F=>F.arbeidsgiverIdent===b.arbeidsgiverIdent))==null?void 0:D.inntekter,h=t.filter(F=>F.arbeidsgiverIdent===b.arbeidsgiverIdent).length>1,N=s[b.arbeidsgiverIdent],E=A.useRef(null),[P,q]=A.useState(!1),S=A.useCallback(()=>q(F=>!F),[]);return i.jsx(Wm,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:i.jsxs($,{gap:"6",children:[!o&&i.jsx(Ui,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:wr.checkmarkIcon}),o&&i.jsx(Rr,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:wr.exclamationmarkIcon}),i.jsxs(K,{gap:"4",width:"90%",children:[i.jsxs($,{justify:"space-between",children:[i.jsxs("div",{children:[i.jsx(B,{size:"small",children:N.navn}),b.arbeidsgiverIdent&&i.jsxs(ke,{children:["(",N.erPrivatPerson&&N.fødselsdato?i.jsx(Ae,{dateString:N.fødselsdato}):b.arbeidsgiverIdent,")"]})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdFieldArray.Periode"})}),i.jsxs(R,{size:"small",children:[b&&i.jsx($e,{dateStringFom:b.fom,dateStringTom:b.tom!==Be?b.tom:void 0}),!b&&"-"]})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdFieldArray.Kilde"})}),i.jsx(R,{size:"small",children:i.jsx(k,{id:b?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),i.jsxs("div",{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),i.jsxs(R,{size:"small",children:[(c==null?void 0:c.motattDato)&&i.jsx(Ae,{dateString:c.motattDato}),!(c!=null&&c.motattDato)&&i.jsx(k,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),h&&b.eksternArbeidsforholdId&&i.jsxs($,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdFieldArray.Id"})}),i.jsxs("div",{children:[b.eksternArbeidsforholdId.length<50&&i.jsx(R,{size:"small",children:b.eksternArbeidsforholdId}),b.eksternArbeidsforholdId.length>=50&&i.jsx(Du,{content:$N(b.eksternArbeidsforholdId),placement:"bottom",children:i.jsx(R,{size:"small",children:`${b.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),b.stillingsprosent&&i.jsxs($,{gap:"2",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),i.jsx(R,{size:"small",children:`${b.stillingsprosent}%`})]}),b.permisjonOgMangel&&i.jsx($,{gap:"2",children:i.jsxs(i.Fragment,{children:[i.jsx(B,{size:"small",children:`${Wr(m,dn.PERMISJONSBESKRIVELSE_TYPE,b.permisjonOgMangel.type)} 100%`}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:b.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),c&&i.jsx(Zm,{saksnummer:r,inntektsmelding:c}),!c&&T&&i.jsx(Xm,{inntektsposter:T,skjæringstidspunkt:g}),i.jsx(Ne,{name:`${LN}.${e}.permisjonStatus`,label:i.jsxs($,{gap:"2",children:[i.jsx(k,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),i.jsxs("div",{className:wr.image,children:[i.jsx(se,{ref:E,type:"button",variant:"tertiary",onClick:S,icon:i.jsx(Xi,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),i.jsx(fr,{open:P,onClose:S,anchorEl:E.current,className:wr.hjelpetekst,children:i.jsx(fr.Content,{className:wr.hjelpetekstInnhold,children:i.jsxs(K,{gap:"2",children:[i.jsx(R,{children:i.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),i.jsx(R,{children:i.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),i.jsx(R,{children:i.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),i.jsx(R,{children:i.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[Q],isReadOnly:l,radios:[{label:v.formatMessage({id:c?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Oi.IKKE_BRUK_PERMISJON},{label:v.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Oi.BRUK_PERMISJON}]})]})]})},n)},KN=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),$N=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")};Qm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const UN="arbeidsforhold",ev=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:g}=Ie(),{fields:m}=en({control:g,name:UN});return i.jsx("div",{children:m.map((v,f)=>i.jsx(Qm,{fieldId:v.id,index:f,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o},v.id))})};ev.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const HN=fn(3),YN=yn(1500),CN=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),nv=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:a,isReadOnly:s,alleKodeverk:l}=Rn(),o=A.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(T=>{var h;return(h=T.permisjonOgMangel)==null?void 0:h.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:g}=o,m=A.useMemo(()=>[...g].sort(CN(n)),[g,n]),v=A.useMemo(()=>({arbeidsforhold:m.map(T=>{var h;return{permisjonStatus:(h=T.permisjonOgMangel)==null?void 0:h.permisjonStatus}}),begrunnelse:r[0].begrunnelse??""}),[m]),{formData:f,setFormData:y}=Mn(),b=Ye({defaultValues:f||v});A.useEffect(()=>()=>{y(b.getValues())},[]);const c=r.some(T=>T.status===Zn.OPPRETTET);return i.jsxs(K,{gap:"8",children:[i.jsxs($,{justify:"space-between",children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"PermisjonFaktaPanel.Overskrift"})}),i.jsx(R,{size:"small",children:i.jsx(k,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ve(o.skjæringstidspunkt)}})})]}),c&&i.jsx(rr,{children:i.jsx(k,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),i.jsx(Ce,{formMethods:b,onSubmit:T=>a({kode:de.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:T.arbeidsforhold.map((h,N)=>({internArbeidsforholdId:m[N].internArbeidsforholdId,arbeidsgiverIdent:m[N].arbeidsgiverIdent,permisjonStatus:h.permisjonStatus})),begrunnelse:T.begrunnelse}),children:i.jsxs(K,{gap:"6",children:[i.jsx(ev,{saksnummer:t.saksnummer,sorterteArbeidsforhold:m,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:c,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),i.jsx(Qe,{label:i.jsx(B,{size:"small",children:i.jsx(k,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[Q,HN,YN,bn],maxLength:1500,readOnly:s}),!s&&i.jsx("div",{children:i.jsx(se,{size:"small",variant:"primary",disabled:!b.formState.isDirty||b.formState.isSubmitting,loading:b.formState.isSubmitting,children:i.jsx(k,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};nv.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const zN={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i AA-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},JN=Ke(zN),rv=e=>i.jsx(Ge,{value:JN,children:i.jsx(nv,{...e})});rv.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Hg=[de.VURDER_ARBEIDSFORHOLD_PERMISJON],WN=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),{behandling:r}=A.use(Sn),t=ar(Hg),a=qn(r),{data:s}=Nn(a.arbeidOgInntektOptions(r));return i.jsx(sr,{standardPanelProps:t,faktaPanelKode:tr.PERMISJON,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Hg.some(l=>va(l,r.aksjonspunkt)),children:s?i.jsx(rv,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(En,{})})};WN.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ue=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ue||{});function tv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yg={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function ZN(){if(Cg)return Vr;Cg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Vr.Fragment=n,Vr.jsx=r,Vr.jsxs=r,Vr}var zg;function XN(){return zg||(zg=1,Yg.exports=ZN()),Yg.exports}var d=XN(),Jg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Wg;function QN(){return Wg||(Wg=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Jg)),Jg.exports}var eP=QN();const nP=tv(eP);var Ra=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(Ra||{}),Ea=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ea||{}),L=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(L||{});Ea.BRUKERS_ANDEL;Ea.FRILANS;Ea.EGEN_NÆRING;const rP=["FL","AT_FL","AT_FL_SN","FL_SN"],tP=["AT","AT_FL","AT_FL_SN","AT_SN"],aP=["SN","FL_SN","AT_FL_SN","AT_SN"],sP=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],iP=["DP","SP_AV_DP","PSB_AV_DP","AAP"],lP=["KUN_YTELSE"],dP=["MS"],av=e=>iP.some(n=>n===e),oP=e=>lP.some(n=>n===e),sv=e=>rP.some(n=>n===e),iv=e=>tP.some(n=>n===e),lv=e=>aP.some(n=>n===e),gP=e=>sP.some(n=>n===e),uP=e=>dP.some(n=>n===e);var dv=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(dv||{});const Na=e=>e==="OPPR";var ov=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(ov||{}),vn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(vn||{}),Di=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(Di||{}),wi=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(wi||{}),pr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(pr||{}),gv=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(gv||{}),Fl=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(Fl||{}),fe=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(fe||{}),uv=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(uv||{}),jn=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(jn||{});const Zg=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Pa=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${I(t).format(te)})${Zg(n)}`:r:s?`${r} (${s})${Zg(n)}`:r},Xg=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[Ra.OPPTJENING_AKTIVITET_TYPE].find(t=>{var a;return t.kode===((a=e.arbeidsforhold)==null?void 0:a.arbeidsforholdType)}))==null?void 0:r.navn)||""},Vi=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?Pa(t,e.arbeidsforhold.eksternArbeidsforholdId):Xg(e,r)}return Xg(e,r)},kP="_aksjonspunktBehandlerBorder_13dyh_1",mP="_aksjonspunktBehandlerHeader_13dyh_10",vP="_aksjonspunktBehandlerImageCol_13dyh_18",pP="_aksjonspunktBehandlerTextCol_13dyh_24",fP="_aksjonspunktBehandlerNoBorder_13dyh_27",yP="_verticalLine_13dyh_40",bP="_verticalAlignMiddle_13dyh_47",cP="_inputPadding_13dyh_54",jP="_inntektTableTB_13dyh_65",hP="_rowSpacer_13dyh_69",AP="_textAreaWrapperHeigh_13dyh_112",IP="_dynamiskKolonne_13dyh_119",TP="_textAreaStyle_13dyh_123",RP="_atflAvvikAktivitet_13dyh_129",EP="_atflAvvikInntekt_13dyh_133",NP="_breddeInntekt_13dyh_139",PP="_warningIcon_13dyh_142",qP="_aksjonspunktWrapper_13dyh_148",oe={aksjonspunktBehandlerBorder:kP,aksjonspunktBehandlerHeader:mP,aksjonspunktBehandlerImageCol:vP,aksjonspunktBehandlerTextCol:pP,aksjonspunktBehandlerNoBorder:fP,verticalLine:yP,verticalAlignMiddle:bP,inputPadding:cP,inntektTableTB:jP,rowSpacer:hP,textAreaWrapperHeigh:AP,dynamiskKolonne:IP,textAreaStyle:TP,atflAvvikAktivitet:RP,atflAvvikInntekt:EP,breddeInntekt:NP,warningIcon:PP,aksjonspunktWrapper:qP},SP=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,kv=e=>e?e.filter(n=>n.aktivitetStatus===L.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>SP(n)):[],xP=(e,n,r,t,a,s,l)=>e.map((o,g)=>d.jsxs(Y,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.atflAvvikAktivitet,children:d.jsx(R,{size:"small",children:Vi(o,t,n)})}),d.jsx(x,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:r?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${s}.${a}.inntekt${g}`,validate:l?[Q,nn(178956970)]:[],readOnly:r,parse:Oe,className:oe.breddeInntekt,isEdited:r&&(!!o.overstyrtPrAar||o.overstyrtPrAar===0)})})})]},`index${g+1}`)),_l=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=kv(n);return d.jsx(d.Fragment,{children:xP(o,r,e,t,a,s,l)})};_l.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===L.ARBEIDSTAKER)&&(r=kv(n).map(({andelsnr:t},a)=>{const s=e[`inntekt${a}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:s===void 0||s===""?0:pe(s),andelsnr:t}})),r};const BP="_avsnittOverskrift_3qwr0_1",FP="_venstreKolonne_3qwr0_5",_P="_hoyreKolonne_3qwr0_8",OP="_panelLeft_3qwr0_11",DP="_panelRight_3qwr0_21",wP="_storSpace_3qwr0_32",VP="_semiBoldText_3qwr0_35",MP="_redError_3qwr0_41",GP="_tabellAktivitet_3qwr0_44",LP="_tabellInntekt_3qwr0_54",KP="_tagMargin_3qwr0_85",U={avsnittOverskrift:BP,venstreKolonne:FP,hoyreKolonne:_P,panelLeft:OP,panelRight:DP,storSpace:wP,semiBoldText:VP,næringEndringBeskrivelse:"_næringEndringBeskrivelse_3qwr0_38",redError:MP,tabellAktivitet:GP,tabellInntekt:LP,næringOpplysningNavn:"_næringOpplysningNavn_3qwr0_66",næringOpplysningInntekt:"_næringOpplysningInntekt_3qwr0_69",næringOpplysningOrgnr:"_næringOpplysningOrgnr_3qwr0_73",næringOpplysningDato:"_næringOpplysningDato_3qwr0_76",tagMargin:KP},Qg="inntektField",$P=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(pr.ARBEIDSFORHOLD_AVSLUTTET),qa=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!$P(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},Ar=(e,n)=>e.arbeidsforhold?`${Qg}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${Qg}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,Sa=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===L.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],mv=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},UP=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return a?Pa(a,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[Ra.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},vv=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),HP=(e,n,r)=>{const t=Sa(e),a={};return t.forEach(s=>{if(!s.arbeidsforhold)return;const l=mv(s.arbeidsforhold),o=vv();o.tabellInnhold=UP(s.arbeidsforhold,n,r),o.erTidsbegrenset=s.erTidsbegrensetArbeidsforhold!==void 0?s.erTidsbegrensetArbeidsforhold:!1,a[l]=[o]}),a},Ol=e=>e.sort((n,r)=>I(n.beregningsgrunnlagPeriodeFom).diff(I(r.beregningsgrunnlagPeriodeFom)))[0],pv=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===L.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var a,s,l,o;return((a=t.arbeidsforhold)==null?void 0:a.arbeidsgiverIdent)===((s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Dl=(e,n)=>{var r;const t=Ol(n);return!!((r=pv(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},YP=(e,n,r)=>{const t=qa(e),a=e[0].beregningsgrunnlagPeriodeFom,s=HP(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===a;Sa(l).forEach(g=>{const m=Dl(g,e),v=mv(g.arbeidsforhold),f=vv();f.tabellInnhold=g.overstyrtPrAar!==void 0&&g.overstyrtPrAar!==null?M(g.overstyrtPrAar):"",f.erTidsbegrenset=!1,f.isEditable=m?!0:o,f.inputfieldKey=Ar(g,l),s[v].push(f)})}),s},CP=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(R,{size:"small",className:U.semiBoldText,children:M(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),zP=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:Ve(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),JP=(e,n,r,t,a,s,l)=>{const o=[];return o.push(zP(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((g,m)=>d.jsx(C.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${g.periodeFom}`)})},`Col_Tittel_${g.periodeFom}`)},`PeriodeWrapper${m+1}`))]},"Tabletop")),Object.keys(e).forEach(g=>{const m=e[g];o.push(d.jsx("tr",{children:m.map(v=>v.isEditable?d.jsx(C.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?oe.adjustedField:void 0,children:d.jsx(ce,{name:`${s}.${a}.${v.inputfieldKey}`,validate:l?[Q,nn(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:Oe,className:oe.breddeInntekt})})},`Col-${v.inputfieldKey}`)},`key${v.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(R,{size:"small",children:v.tabellInnhold})},v.tabellInnhold))},g))}),o.push(d.jsx("tr",{className:oe.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(CP(t)),o},WP=(e,n,r,t)=>{const a=[];return e.length<1||qa(e).forEach(s=>{const l=Sa(s).map(o=>{const g=Ar(o,s),m=n.watch(`${t}.${r}.${g}`);return m===void 0||m===""?0:pe(m)}).reduce((o,g)=>o+g);a.push({brutto:l,periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom})}),a},Pt=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=YP(n,r,t),g=n.some(f=>{var y;return(y=f.beregningsgrunnlagPrStatusOgAndel)==null?void 0:y.some(b=>b.aktivitetStatus===L.ARBEIDSTAKER&&(!!b.overstyrtPrAar||b.overstyrtPrAar===0))}),m=Ie(),v=WP(n,m,a,s);return d.jsx("table",{className:oe.inntektTableTB,children:d.jsx("tbody",{children:JP(o,e,g,v,a,s,l)})})};Pt.buildInitialValues=e=>{const n={},r=qa(e),t=Ol(e);return r.forEach(a=>{(a.beregningsgrunnlagPrStatusOgAndel?a.beregningsgrunnlagPrStatusOgAndel.filter(s=>s.aktivitetStatus===L.ARBEIDSTAKER):[]).forEach(s=>{if(Dl(s,e)){const l=M(s.overstyrtPrAar);n[Ar(s,a)]=l||""}else{const l=pv(s,t),o=M(l==null?void 0:l.overstyrtPrAar);n[Ar(s,a)]=o||""}})}),n};Pt.transformValues=(e,n)=>{const r=[],t=Ol(n);return qa(n).forEach(a=>{const s=Sa(a),l=[];s.forEach(o=>{if(Dl(o,n)){const g=pe(e[Ar(o,a)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}else{const g=pe(e[Ar(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}}),r.push({periodeFom:a.beregningsgrunnlagPeriodeFom,periodeTom:a.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const ZP="_colDevider_1att7_1",XP={colDevider:ZP},pn=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx(Y,{children:d.jsx("div",{style:{width:n},children:d.jsx(x,{children:d.jsx("div",{className:XP.colDevider})})})})},fv=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,QP=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return Pa(r,e.arbeidsforhold.eksternArbeidsforholdId)},yv=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],eq=(e,n)=>{const r=QP(e,n),t=fv(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},nq=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},rq=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{yv(t).filter(a=>nq(a)).map(a=>eq(a,n)).forEach(a=>{r.some(({nøkkel:s})=>s===a.nøkkel)||r.push(a)})}),r},tq=(e,n)=>{const r=yv(e).find(t=>fv(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},aq=(e,n)=>{const r=[];return n.forEach(t=>{const a=tq(t,e.nøkkel);a&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:a,beløpPrMåned:a/12})}),r},sq=e=>{if(!e||e.length<2)return e;e.sort((t,a)=>I(t.fom).diff(I(a.fom)));const n=[];let r=I(e[0].fom);return e.forEach(t=>{if(!I(t.fom).isBefore(r)){const a=e.find(s=>I(s.fom).isAfter(t.fom)&&s.beløpPrÅr!==t.beløpPrÅr);if(a){const s=I(a.fom).subtract(1,"d");n.push({tom:s.format(xe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=s}else r=I(Be),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},iq=(e,n)=>{const r=rq(e,n);return r.forEach(t=>{const a=aq(t,e);sq(a).forEach(s=>t.naturalytelseEndringer.push(s))}),!r||r.length<1?void 0:{rader:r}},lq=e=>e.tom?`${Ve(e.fom)} - ${Ve(e.tom)}`:`${Ve(e.fom)} -`,dq=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=A.useMemo(()=>iq(e,n),[e]);return r?d.jsxs("div",{children:[d.jsx(B,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(K,{gap:"0",children:[d.jsxs($,{gap:"10",justify:"end",children:[d.jsx(ke,{style:{width:"70px"},children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{style:{width:"70px"},children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),r.rader.map(t=>d.jsxs("div",{children:[d.jsx(B,{size:"small",children:t.visningsnavn}),d.jsx(K,{gap:"1",children:t.naturalytelseEndringer.map(a=>d.jsxs($,{justify:"space-between",children:[d.jsx(R,{size:"small",children:lq(a)}),d.jsxs($,{gap:"10",children:[d.jsx(R,{size:"small",style:{width:"70px"},children:M(a.beløpPrMåned)}),d.jsx(B,{size:"small",style:{width:"70px"},children:M(a.beløpPrÅr)})]})]},t.nøkkel+a.fom))})]},t.nøkkel))]})]}):null},oq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,bv=e=>e?e.filter(n=>n.aktivitetStatus===L.ARBEIDSTAKER).filter(n=>oq(n)):[],gq=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(Ve(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(Ve(e.opphoersdato))),n.join(" ")},uq=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},eu=e=>e.beregnetPrAar?e.beregnetPrAar:0,kq=(e,n,r)=>{const t=e.reduce((l,o)=>l+eu(o),0),a=t?t/12:0,s=e.map((l,o)=>d.jsxs(C.Fragment,{children:[d.jsx(K,{gap:"2",children:d.jsxs($,{justify:"space-between",children:[d.jsx(B,{size:"small",className:U.semiBoldText,children:Vi(l,r,n)}),d.jsxs($,{gap:"10",children:[d.jsx(R,{children:M(eu(l)/12)}),d.jsx(B,{children:M(l.beregnetPrAar)})]})]})}),d.jsx(K,{gap:"2",children:d.jsxs($,{gap:"2",children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(R,{children:uq(l.arbeidsforhold)}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(ke,{children:gq(l.arbeidsforhold)}),l.erTidsbegrensetArbeidsforhold&&d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})]})}),d.jsx(pn,{prosentBredde:100})]},`ArbInntektWrapper${Vi(l,r,n)}${o+1}`));if(e.length>1){const l=d.jsx(K,{gap:"0",children:d.jsxs($,{justify:"space-between",children:[d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"}),d.jsxs($,{gap:"10",justify:"end",children:[d.jsx(R,{children:M(a)}),d.jsx(B,{children:M(t)})]})]})});s.push(l)}return s},wl=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const a=bv(e);return!a||a.length===0?null:d.jsxs(K,{gap:"8",children:[d.jsxs(K,{gap:"2",children:[d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})}),d.jsxs(K,{gap:"1",children:[d.jsxs($,{gap:"10",justify:"end",children:[d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(pn,{prosentBredde:100}),kq(a,t,r)]})]}),d.jsx(dq,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};wl.buildInitialValues=e=>{const n=bv(e),r={};return n.forEach((t,a)=>{r[`inntekt${a}`]=M(t.overstyrtPrAar)||""}),r};var Mi={exports:{}},mq=Mi.exports,nu;function vq(){return nu||(nu=1,function(e,n){(function(r,t){e.exports=t(I)})(mq,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(Mi)),Mi.exports}var pq=vq();const Gi=tv(pq),fq=({option:e,style:n,height:r})=>{const t=A.useRef(null);return A.useEffect(()=>{let a;t.current!==null&&(a=Op(t.current));const s=()=>{a==null||a.resize()};return window.addEventListener("resize",s),()=>{a==null||a.dispose(),window.removeEventListener("resize",s)}},[]),A.useEffect(()=>{if(t.current!==null){const a=Dp(t.current);a&&(a.setOption(e),(a==null?void 0:a.getWidth())===0&&(a==null||a.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},yq="_sammenligningGrafOppsummeringType_1dad0_4",bq="_sammenligningGrafOppsummeringInntekt_1dad0_7",cq="_readMore_1dad0_12",Hn={sammenligningGrafOppsummeringType:yq,sammenligningGrafOppsummeringInntekt:bq,readMore:cq},jq=[],hq="#99bdcd",Aq="#c1b5d0",Iq="#C6C2BF",Tq=(e,n)=>{const r=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===vn.ARBEID).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),t=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===vn.FRILANS).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),a=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===vn.YTELSE).map(({beløp:s})=>s).reduce((s,l)=>s+l,0);return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:U.storSpace}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})})})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:Hn.sammenligningGrafOppsummeringType,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})})}),d.jsx(x,{className:Hn.sammenligningGrafOppsummeringInntekt,children:d.jsx(R,{size:"small",children:M(r)})})]}),d.jsx(pn,{prosentBredde:20})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:Hn.sammenligningGrafOppsummeringType,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})})}),d.jsx(x,{className:Hn.sammenligningGrafOppsummeringInntekt,children:d.jsx(R,{size:"small",children:M(t)})})]}),d.jsx(pn,{prosentBredde:20})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:Hn.sammenligningGrafOppsummeringType,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})})}),d.jsx(x,{className:Hn.sammenligningGrafOppsummeringInntekt,children:d.jsx(R,{size:"small",children:M(a)})})]}),d.jsx(pn,{prosentBredde:20})]})]})},Rq=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),pi=(e,n,r)=>{const t=[];for(let a=0;a<12;a+=1){const s=I(n,xe).add(a,"M").format("YYYYMM"),l=e.find(g=>I(g.fom,xe).format("YYYYMM")===s),o=Rq((l==null?void 0:l.inntekter)||[],r);t.push([o,s])}return t},Eq=()=>d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(ae,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})})})},"SamenenligningsGrunnlagOverskrift"),d.jsx(V,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})})})]}),fi=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),Nq=e=>({harFrilansinntekt:fi(e,vn.FRILANS),harArbeidsinntekt:fi(e,vn.ARBEID),harYtelseinntekt:fi(e,vn.YTELSE)}),Pq=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=Z(),t=(e==null?void 0:e.måneder)||jq,a=A.useMemo(()=>Nq(t),[t]),s=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=A.useMemo(()=>a.harArbeidsinntekt&&s?pi(t,s,vn.ARBEID):[],[a.harArbeidsinntekt,t,s]),o=A.useMemo(()=>a.harFrilansinntekt&&s?pi(t,s,vn.FRILANS):[],[a.harArbeidsinntekt,t,s]),g=A.useMemo(()=>a.harYtelseinntekt&&s?pi(t,s,vn.YTELSE):[],[a.harArbeidsinntekt,t,s]),m=A.useCallback(b=>b.value[0]>5e3?M(b.value[0])||"":b.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const v=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),f=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),y=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(Se,{size:"medium",header:Eq(),defaultOpen:!0,className:Hn.readMore,children:d.jsx(fq,{option:{tooltip:{trigger:"axis",formatter:b=>{const c=b,T=c[0].data,h=I(T[1]),N=h.locale(Gi).format("MMM"),E=h.format("YYYY"),P=`${N.charAt(0).toUpperCase()+N.slice(1)} ${E}`,q=c.reduce((S,D)=>{const F=D.data;return S.concat(`${(D.marker||"")+(D.seriesName||"")}: ${M(F[0])}`)},[]).join("<br/>");return`${P}<br />${q}`},axisPointer:{type:"shadow"}},legend:{data:[v,f,y]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:b=>M(b)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:b=>{const c=I(b),T=c.format("MM")==="01"||c.format("MM")==="12",h=c.locale(Gi).format("MMM"),N=c.format("YYYY"),E=h.charAt(0).toUpperCase()+h.slice(1,3);return T?`${E}
${N}`:E}}},series:[{name:v,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:l},{name:f,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:o},{name:y,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:g}],color:[hq,Aq,Iq]},height:350})}),Tq(t,a)]})},qq=({alleAndeler:e})=>{var n;const r=e.find(s=>!s.erTilkommetAndel&&s.aktivitetStatus===L.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,a=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsxs(d.Fragment,{children:[d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsx(V,{fourPx:!0}),d.jsxs(Y,{className:U.rows,children:[d.jsx(x,{className:U.tabellAktivitet,children:a&&d.jsxs(R,{size:"small",children:[d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:U.semiBoldText,children:d.jsx(Ae,{dateString:a})})]})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(pn,{prosentBredde:100}),d.jsxs(Y,{className:U.rows,children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:t?M(t/12):0})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(B,{size:"small",children:t?M(t):0})})]})]})},Sq=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===L.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})})})}),d.jsx(V,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:M(r)})})})]})},xq=[],Bq=(e,n,r)=>{var t,a,s;const l=r.find(f=>f.år===e),o=l&&((t=l.inntekter.find(f=>f.pgiType===Di.NÆRING))==null?void 0:t.beløp)||0,g=l&&((a=l.inntekter.find(f=>f.pgiType===Di.LØNN))==null?void 0:a.beløp)||0,m=o+g,v=(s=n.find(f=>f.årstall===e))==null?void 0:s.beløp;return d.jsxs(j.Row,{shadeOnHover:!0,children:[d.jsx(j.DataCell,{children:e}),d.jsx(j.DataCell,{align:"right",children:M(g)}),d.jsx(j.DataCell,{align:"right",children:M(o)}),d.jsx(j.DataCell,{align:"right",children:M(m)}),d.jsx(j.DataCell,{align:"right",children:M(v)})]},e)},Fq=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>Bq(r,e,n)),_q=e=>d.jsxs(j.Row,{shadeOnHover:!0,children:[d.jsx(j.DataCell,{children:d.jsx(B,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(j.DataCell,{}),d.jsx(j.DataCell,{}),d.jsx(j.DataCell,{}),d.jsx(j.DataCell,{align:"right",children:d.jsx(B,{children:M(e)})})]},"PGI-Oppsumert"),Oq=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===L.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||xq;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:a,pgiSnitt:s}=r;return d.jsxs(d.Fragment,{children:[d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(j,{children:[d.jsx(j.Header,{children:d.jsxs(j.Row,{children:[d.jsx(j.HeaderCell,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(j.Body,{children:[Fq(a,t),_q(s)]})]})]})},Dq="_merTekstBorder_1w256_9",wq={merTekstBorder:Dq},Vq=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},ru=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${Ve(n)}-${Ve(r)} `:`${Ve(n)}-`},Mq=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},Gq=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},Lq=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,a=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",s=r?t:n;return s?d.jsx(B,{size:"small",className:U.semiBoldText,children:d.jsx(k,{id:a,values:{dato:Ve(s),b:l=>d.jsx("b",{children:l})}})}):null},Kq=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},$q=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(R,{size:"small",className:wq.merTekstBorder,children:e.begrunnelse}):null,Uq=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,Hq=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})})}),d.jsx(x,{className:U.tabellAktivitet}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})})]}),d.jsx(pn,{prosentBredde:100}),r.næringer.map(t=>d.jsxs(C.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:U.næringOpplysningNavn,children:d.jsx(B,{size:"small",className:U.semiBoldText,children:Gq(t,n)})}),d.jsx(x,{className:U.næringOpplysningInntekt,children:Uq(t)&&d.jsx(B,{size:"small",children:M(t.oppgittInntekt)})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:U.næringOpplysningOrgnr,children:d.jsx(R,{size:"small",children:t&&t.orgnr?t.orgnr:""})}),d.jsx(x,{className:U.næringOpplysningDato,children:ru(t)&&d.jsx(R,{size:"small",children:ru(t)})})]},`NaringsDetaljer${t.orgnr}`),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:Vq(t)})})})}),d.jsx(Y,{children:d.jsx(x,{children:t.regnskapsførerNavn&&d.jsx(R,{size:"small",children:Mq(t)})})},`RevisorRad${t.orgnr}`),Kq(t)&&d.jsxs(d.Fragment,{children:[d.jsx(pn,{prosentBredde:100}),d.jsx(V,{twentyPx:!0}),Lq(t),d.jsx(V,{eightPx:!0}),d.jsx(Y,{className:U.næringEndringBeskrivelse,children:d.jsx(x,{children:$q(t)})})]})]},`NaringsWrapper${t.orgnr}`))]}):null},Yq=e=>e.aktivitetStatus===L.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===L.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===L.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===L.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",Cq=e=>e===L.DAGPENGER,zq=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(s=>av(s.aktivitetStatus)),a=t.length>1;return d.jsxs(d.Fragment,{children:[n.isKombinasjonsstatus&&d.jsxs(d.Fragment,{children:[d.jsx(V,{eightPx:!0}),d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsx(V,{eightPx:!0})]}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(pn,{prosentBredde:100}),t.map(s=>d.jsxs("div",{children:[d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(B,{size:"small",children:d.jsx(k,{id:Yq(s)})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(s.beregnetPrAar?s.beregnetPrAar/12:0)})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",className:a?"":U.semiBoldText,children:M(s.beregnetPrAar)})})]}),d.jsx(pn,{prosentBredde:100}),r&&Cq(s.aktivitetStatus)&&d.jsx(Y,{children:d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})})})]},s.aktivitetStatus))]})},Jq=({bruttoPrAar:e})=>e||e===0?d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsxs(x,{children:[d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsx(V,{eightPx:!0})]})}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(e/12)})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(B,{size:"small",children:M(e)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Wq,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Zq}=ue,Xq=e=>e&&e.find(n=>n.definisjon===Wq||n.definisjon===Zq),Qq=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],Un=d.jsx("div",{className:U.storSpace}),eS=(e,n,r,t,a,s,l,o)=>d.jsxs("div",{className:U.panelLeft,children:[n.isArbeidstaker&&d.jsx(wl,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[Un,d.jsx(qq,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[Un,d.jsx(zq,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[Un,d.jsx(Sq,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[Un,d.jsx(Jq,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[Un,d.jsx(Oq,{alleAndeler:e,inntektsgrunnlag:o}),Un,d.jsx(Hq,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:s})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[Un,d.jsx(Pq,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),er=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:a=void 0,arbeidsgiverOpplysningerPerId:s,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=Qq(n);return eS(o,e,n,r,t,s,l,a)};er.buildInitialValues=e=>{const n=Xq(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};er.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:_l.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?pe(e.inntektFrilanser):null});er.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:Pt.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?pe(e.inntektFrilanser):null});const nS="_kolBeskrivelse_1czvx_1",rS="_kolVerdi_1czvx_4",tS="_radNoBorder_1czvx_9",aS="_radDobbelLinje_1czvx_14",sS="_radEnkelLinje_1czvx_20",iS="_radTykkLinje_1czvx_24",be={kolBeskrivelse:nS,kolVerdi:rS,radNoBorder:tS,radDobbelLinje:aS,radEnkelLinje:sS,radTykkLinje:iS,kolVerdiRød:"_kolVerdiRød_1czvx_28",avslåttIkon:"_avslåttIkon_1czvx_38"},lS=260,cv={[L.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[L.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[L.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[L.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[L.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[L.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[L.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[L.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[L.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[L.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},tu=e=>{var n;return((n=cv[e.status])==null?void 0:n.rekkefølgePri)||100},dS=e=>{var n;return((n=cv[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},oS=()=>d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),gS=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),uS=(e,n)=>(n==null?void 0:n.ytelsetype)!==Fl.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/lS):e.dagsats||0,Yn=()=>d.jsx("div",{className:be.radEnkelLinje}),kS=(e,n)=>d.jsxs($,{gap:"2",children:[d.jsx(up,{className:be.avslåttIkon}),d.jsx(R,{size:"small",className:be.avslåttIkon,children:d.jsx(k,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:M(e),b:r=>d.jsx("b",{children:r})}})})]}),mS=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===L.MIDLERTIDIG_INAKTIV),vS=(e,n,r,t)=>{const a=e.andeler.reduce((v,f)=>(f.inntektPlussNaturalytelse||0)+v,0);if(n.vilkarStatus===wi.IKKE_VURDERT)return null;if(n.vilkarStatus===wi.IKKE_OPPFYLT)return kS(r.grunnbeløp,mS(r));const s=r.grunnbeløp*6,l=a>s,o=r.dekningsgrad!==gv.HUNDRE,g=uS(e,r.ytelsesspesifiktGrunnlag),m=t&&(l||o);return d.jsxs(Jr,{children:[m&&d.jsx(V,{fourtyPx:!0}),l&&d.jsxs(d.Fragment,{children:[Yn(),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(R,{size:"small",children:M(e.avkortetPrÅr)})})]}),Yn()]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(d.Fragment,{children:Yn()}),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(R,{size:"small",children:M(e.redusertPrÅr)})})]}),Yn()]}),d.jsx(V,{fourtyPx:!0}),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(B,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(B,{size:"medium",children:g})})]}),d.jsx("div",{className:be.radDobbelLinje})]})},pS=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const a=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,g)=>tu(o)-tu(g));const s=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(K,{gap:"5",children:[d.jsxs("div",{children:[n&&d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(ae,{size:"xsmall",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:I(e.fom).format(te),tom:e.tom?I(e.tom).format(te):""}})})})}),d.jsx(V,{eightPx:!0})]}),e.andeler.map((o,g)=>d.jsxs(C.Fragment,{children:[g===0&&d.jsx(d.Fragment,{children:Yn()}),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:dS(o)})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(R,{size:"small",className:o.erFerdigBeregnet?"":be.kolVerdiRød,children:o.erFerdigBeregnet?M(o.inntekt):oS()})})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[Yn(),d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(R,{size:"small",children:M(o.bortfaltNaturalytelse)})})]})]}),Yn()]},o.status)),a&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{className:be.radNoBorder,children:[d.jsx(x,{className:be.kolBeskrivelse,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})})}),d.jsx(x,{className:be.kolVerdi,children:d.jsx(R,{size:"small",children:M(gS(e.andeler))})})]}),d.jsx("div",{className:be.radTykkLinje})]})]}),l&&d.jsx(d.Fragment,{children:vS(e,r,t,s)})]})},fS=[pr.ARBEIDSFORHOLD_AVSLUTTET,pr.NATURALYTELSE_TILKOMMER,pr.NATURALYTELSE_BORTFALT],yS=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,bS=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,cS=(e,n)=>{switch(e){case L.ARBEIDSTAKER:case L.FRILANSER:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case L.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case L.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},jS=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,a=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-a:0},hS=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},AS=(e,n)=>{const r=e.filter(s=>yS(s)),t={};r.forEach(s=>{const l=t[s.aktivitetStatus];l?l.push(s):t[s.aktivitetStatus]=[s]});const a=[];return Object.keys(t).forEach(s=>{const l=t[s],o=cS(s,n),g=l.every(c=>hS(c)),m=l.reduce((c,T)=>bS(T)+c,0),v=l.reduce((c,T)=>jS(T)+c,0),f=(m||0)+(v||0),y=!!o&&Na(o.status),b=g&&!y;a.push({inntekt:m,bortfaltNaturalytelse:v,inntektPlussNaturalytelse:f,erFerdigBeregnet:b,status:s})}),a},IS=e=>e.some(n=>fS.includes(n)),TS=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(a=>a.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!a.periodeAarsaker&&IS(a.periodeAarsaker)).map(a=>a.beregningsgrunnlagPeriodeFom).sort((a,s)=>new Date(a).getTime()-new Date(s).getTime()),t=[];for(let a=0;a<r.length;a+=1){const s=r[a],l=a+1<r.length?I(r[a+1]).subtract(1,"day").format(xe).toString():void 0,o=n.find(b=>b.beregningsgrunnlagPeriodeFom===s),g=(o==null?void 0:o.periodeAarsaker)||[],m=AS((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),v=o==null?void 0:o.redusertPrAar,f=o==null?void 0:o.avkortetPrAar,y=o==null?void 0:o.dagsats;t.push({fom:s,tom:l,årsak:g,andeler:m,redusertPrÅr:v,avkortetPrÅr:f,dagsats:y})}return t},RS=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=A.useMemo(()=>TS(e),[e]),t=r.length>1;return d.jsxs("div",{className:U.panelRight,children:[d.jsx(ae,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(V,{eightPx:!0}),r.map(a=>d.jsxs("div",{children:[d.jsx(pS,{tabellData:a,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e}),d.jsx(V,{fourtyPx:!0})]},a.fom))]})},ES=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,NS=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>ES(n)).reduce((n,r)=>n+r,0):0,PS=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,au=(e,n)=>e>n,qS=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=NS(e),t=PS(n);return d.jsx("div",{children:d.jsxs(K,{gap:"4",children:[d.jsx(R,{size:"small",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})}),d.jsxs(j,{children:[d.jsx(j.Header,{children:d.jsxs(j.Row,{children:[d.jsx(j.HeaderCell,{scope:"col"}),d.jsx(j.HeaderCell,{scope:"col",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})}),d.jsx(j.HeaderCell,{scope:"col",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),d.jsx(j.Body,{children:d.jsxs(j.Row,{children:[d.jsx(j.DataCell,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(j.DataCell,{children:d.jsx(R,{size:"small",children:M(r)})}),d.jsx(j.DataCell,{children:d.jsx(R,{size:"small",children:M(t)})})]})})]}),d.jsxs(R,{size:"small",children:[au(r,t)&&d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!au(r,t)&&d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]})})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:jv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Vl,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:hv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Av,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Iv}=ue,SS=(e,n)=>{switch(e.definisjon){case jv:return n.find(r=>r.sammenligningsgrunnlagType===fe.ATFLSN||r.sammenligningsgrunnlagType===fe.SN);case Vl:return n.find(r=>r.sammenligningsgrunnlagType===fe.MIDLERTIDIG_INAKTIV);case hv:case Av:return n.find(r=>r.sammenligningsgrunnlagType===fe.ATFLSN||r.sammenligningsgrunnlagType===fe.AT_FL||r.sammenligningsgrunnlagType===fe.AT||r.sammenligningsgrunnlagType===fe.FL);case Iv:return;default:return}},xS=(e,n)=>{const r=SS(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},su=e=>e&&e.length>0,BS=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],FS={[hv]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[Av]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[Iv]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[Vl]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},_S=(e,n)=>e.definisjon===jv?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":FS[e.definisjon],OS=(e,n,r)=>{var t;const a=r.find(l=>l.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE),s=!!((t=a==null?void 0:a.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsxs("div",{children:[d.jsx(rr,{children:e.map(l=>d.jsx(B,{children:d.jsx(k,{id:_S(l,s||l.definisjon===Vl),values:{verdi:xS(l,n),b:o=>d.jsx("b",{children:o}),br:d.jsx("br",{})}})},l.definisjon))}),d.jsx(V,{thirtyTwoPx:!0})]})},DS=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],a=e.filter(l=>Na(l.status));if(!(su(a)&&su(t)))return null;const s=BS(n);return d.jsxs(d.Fragment,{children:[d.jsx(V,{eightPx:!0}),OS(a,s,t)]})},wS=e=>e.some(n=>n.aktivitetStatus===L.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),Ml=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:a})=>d.jsxs(Y,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.atflAvvikAktivitet,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})})}),d.jsx(x,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${r}.${n}.inntektFrilanser`,validate:a?[Q,nn(178956970)]:void 0,readOnly:e,parse:Oe,className:oe.breddeInntekt,isEdited:e&&wS(t)})})})]});Ml.buildInitialValues=e=>{const n=e.length>0?M(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const Tv={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},VS=Ke(Tv),MS=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,GS=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:a,onClick:s,hasEmptyRequiredFields:l})=>e?null:d.jsx(se,{variant:"primary",size:"small",loading:r,disabled:MS(t,r,n,l),onClick:s||Fu,type:s?"button":"submit",children:a||VS.formatMessage({id:"SubmitButton.ConfirmInformation"})}),Rv=4e3,LS=yn(Rv),KS=fn(3),Gl="fastsettBeregningsgrnunnlagSNBegrunnelse",Ll="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:$S}=ue,qr=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:a,avklaringsbehov:s})=>{const l=Z();return d.jsxs(d.Fragment,{children:[r&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.dynamiskKolonne,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})})}),d.jsx(x,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${a}.${t}.${Ll}`,validate:[Q,nn(178956970)],parse:Oe,className:oe.breddeInntekt,isEdited:e&&n,readOnly:e})})})]}),d.jsx(V,{eightPx:!0})]}),d.jsx(V,{sixteenPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsxs("div",{id:"readOnlyWrapper",className:e?oe.verticalLine:oe.textAreaWrapperHeigh,children:[d.jsx(Qe,{name:`${a}.${t}.${Gl}`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:[Q,LS,KS,bn],isEdited:e&&n,maxLength:Rv,readOnly:e,description:l.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:o=>o.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(Pn,{ident:s==null?void 0:s.vurdertAv,date:s==null?void 0:s.vurdertTidspunkt})]})})})]})};qr.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(a=>a.definisjon===$S);return{[Ll]:r?M(r.overstyrtPrAar):void 0,[Gl]:t&&t.begrunnelse?t.begrunnelse:void 0}};qr.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[Gl],bruttoBeregningsgrunnlag:pe(e[Ll])});const Ev=4e3,US=yn(Ev),HS=fn(3),Kl="varigEndringNyoppstartetBegrunnelse",$l="erVarigEndret",Ul="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:YS,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:CS}=ue,zS=e=>e?d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),qt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:a,formName:s,isAksjonspunktClosed:l,avklaringsbehov:o})=>{let g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let v="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(v="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(v="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const f=Z(),y=Ie().watch(s)[a].erVarigEndret,b=[{value:"false",label:g},{value:"true",label:m}];return d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(Ne,{name:`${s}.${a}.${$l}`,validate:[Q],label:f.formatMessage({id:v}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:b,isTrueOrFalseSelection:!0})})}),y&&d.jsxs(d.Fragment,{children:[d.jsxs(Y,{className:oe.verticalAlignMiddle,children:[d.jsx(x,{className:oe.dynamiskKolonne,children:d.jsx(R,{size:"small",children:zS(r)})}),d.jsx(x,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${s}.${a}.${Ul}`,validate:[Q,nn(178956970)],parse:Oe,className:oe.breddeInntekt,readOnly:e,isEdited:e&&l})})})]}),d.jsx(V,{sixteenPx:!0})]}),d.jsxs(d.Fragment,{children:[d.jsx(V,{sixteenPx:!0}),d.jsx(Y,{children:d.jsxs(x,{children:[d.jsx(Qe,{name:`${s}.${a}.${Kl}`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[Q,US,HS,bn],maxLength:Ev,readOnly:e,description:f.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:c=>c.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(Pn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})]})};qt.buildInitialValues=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||a.aktivitetStatus===L.BRUKERS_ANDEL),t=n.find(a=>a.definisjon===YS||a.definisjon===CS);if(t){const a=Na(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[$l]:a,[Kl]:t.begrunnelse?t.begrunnelse:"",[Ul]:r?M(r.overstyrtPrAar):void 0}}return{}};qt.transformValues=e=>{const n=e[$l];return{begrunnelse:e[Kl],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?pe(e[Ul]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Hl,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:JS,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Nv}=ue,Pv=(e,n)=>n.some(r=>r.definisjon===e),WS=e=>e&&(e.definisjon===JS||e.definisjon===Hl||e.definisjon===Nv),zn=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:a=!1,fieldIndex:s,formName:l})=>{if(!WS(n))return null;const o=n?!Na(n.status):!1;return r?d.jsx(qr,{readOnly:e,isAksjonspunktClosed:o,erNyArbLivet:r,fieldIndex:s,formName:l,avklaringsbehov:n}):d.jsx(qt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Nv,erNyoppstartet:a,fieldIndex:s,formName:l,isAksjonspunktClosed:o,avklaringsbehov:n})};zn.buildInitialValues=(e,n)=>Pv(Hl,n)?qr.buildInitialValuesNyIArbeidslivet(e,n):{...qt.buildInitialValues(e,n)};zn.transformValues=(e,n)=>Pv(Hl,n)?qr.transformValuesNyIArbeidslivet(e):qt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:qv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Sv,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:xv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Bv,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Fv}=ue,ZS=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},XS=(e,n)=>{switch(e.definisjon){case qv:return ZS(n);case Fv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case xv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case Bv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},QS=e=>{const n=e.aktivitetStatus||[],r=n.some(a=>iv(a)),t=n.some(a=>sv(a));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},ex=(e,n)=>{switch(e.definisjon){case qv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case Fv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case xv:case Bv:return QS(n);default:return"Ukjent aksjonspunkt"}},nx=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs("div",{className:r?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerHeader,children:[d.jsxs(Y,{children:[!r&&d.jsx(x,{className:oe.aksjonspunktBehandlerImageCol,children:d.jsx(Rr,{className:oe.warningIcon})}),d.jsx(x,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(B,{children:d.jsx(k,{id:ex(e,n)})})})]}),d.jsx(V,{eightPx:!0}),d.jsxs(Y,{children:[!r&&d.jsx(x,{className:oe.aksjonspunktBehandlerImageCol}),d.jsx(x,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(R,{children:d.jsx(k,{id:XS(e,n)})})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:rx,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:tx,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:ax,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:sx,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:ix}=ue;var nr=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(nr||{});const Yl=(e,n)=>fe.SN===e||fe.MIDLERTIDIG_INAKTIV===e||fe.ATFLSN===e&&n!=null&&n.find(r=>lv(r))?"8-35":"8-30",Li=e=>ix===e.definisjon||sx===e.definisjon||ax===e.definisjon?"8-35":rx===e.definisjon||tx===e.definisjon?"8-30":null,lx=fn(3),_v=4e3,dx=yn(_v),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:iu,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:lu,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:du,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:ou,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:gu}=ue,ox="BeregningForm",la=(e,n)=>Li(e)===n,gx=(e,n)=>!!e.find(r=>la(r,n)),Cl=e=>`${ox}_${e}`,uu=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},Ki=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],ux=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===pr.ARBEIDSFORHOLD_AVSLUTTET)),Ov=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),kx=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],a=t.filter(m=>m.aktivitetStatus===L.ARBEIDSTAKER),s=t.filter(m=>m.aktivitetStatus===L.FRILANSER),l=t.filter(m=>m.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||m.aktivitetStatus===L.BRUKERS_ANDEL),o={...er.buildInitialValues(e.avklaringsbehov),...Pt.buildInitialValues(r),...Ml.buildInitialValues(s),...wl.buildInitialValues(a)},g={...zn.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===fe.ATFLSN?{...o,...g}:n.sammenligningsgrunnlagType===fe.AT_FL?{...o}:n.sammenligningsgrunnlagType===fe.SN?{...g}:n.sammenligningsgrunnlagType===fe.MIDLERTIDIG_INAKTIV?{...g}:{}:{...qr.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},mx=(e,n,r,t)=>{let a={};return r&&(a=kx(e,t)),{...a,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},vx=(e,n,r,t)=>({[r]:e.map(a=>{var s;return mx(a,Ov(n,a.vilkårsperiodeFom),a.avklaringsbehov.find(l=>la(l,t)),(s=a.sammenligningsgrunnlagPrStatus)==null?void 0:s.find(l=>Yl(l.sammenligningsgrunnlagType,a.aktivitetStatus)===t))})}),px=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:a})=>{const s=Ki(n).find(m=>m.aktivitetStatus&&m.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE),l=s&&s.erNyIArbeidslivet,o=r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||s&&s.næringer&&s.næringer.some(m=>m.erVarigEndret===!0),g=s&&s.næringer&&s.næringer.some(m=>m.erNyoppstartet===!0);return!l&&!g&&!o?null:d.jsxs(d.Fragment,{children:[d.jsx(V,{eightPx:!0}),d.jsx(zn,{readOnly:e,avklaringsbehov:r,erNyArbLivet:l,erVarigEndring:o,erNyoppstartet:g,fieldIndex:t,formName:a})]})},fx=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:a,fieldIndex:s,formName:l,avklaringsbehov:o,skalValideres:g})=>{const m=ux(n),v=uu(n,L.FRILANSER),f=uu(n,L.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[d.jsx(V,{eightPx:!0}),m&&d.jsx(Pt,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,skalValideres:g}),!m&&f&&d.jsx(_l,{readOnly:t,alleAndelerIForstePeriode:Ki(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,formName:l,skalValideres:g}),v&&d.jsx(Ml,{readOnly:t,fieldIndex:s,formName:l,alleAndelerIForstePeriode:Ki(n),skalValideres:g}),d.jsx(V,{sixteenPx:!0}),d.jsx(Y,{children:d.jsxs(x,{children:[d.jsx(Qe,{name:`${l}.${s}.ATFLVurdering`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[Q,dx,lx,bn],maxLength:_v,readOnly:t,className:oe.textAreaStyle,description:a.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:y=>y.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(Pn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})},yx=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(a=>a.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),Mr=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),bx=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,a)=>!t.beregningsgrunnlagPeriodeFom||!a.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(a.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(Mr(iu,e.gjeldendeAvklaringsbehov))return[{kode:iu,aksjonspunktData:er.transformATFLValues(e,r)}];if(Mr(ou,e.gjeldendeAvklaringsbehov))return[{kode:ou,aksjonspunktData:zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Mr(gu,e.gjeldendeAvklaringsbehov))return[{kode:gu,aksjonspunktData:zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Mr(du,e.gjeldendeAvklaringsbehov))return[{kode:du,aksjonspunktData:zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Mr(lu,e.gjeldendeAvklaringsbehov))return[{kode:lu,aksjonspunktData:er.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},cx=(e,n)=>e[Cl(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:bx(r)})).reduce(yx,[]),jx=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:a,vilkår:s,submitCallback:l,formData:o,setFormData:g,aktivIndex:m,lovparagraf:v,finnesFormSomSubmittes:f,setSubmitting:y})=>{const b=Z(),c=(w,H)=>{y(!0),l(cx(w,H))},T=w=>{const H=Ov(s,w.vilkårsperiodeFom);return H.vurderesIBehandlingen&&!H.erForlengelse},h=a.filter(w=>gx(w.avklaringsbehov,v)),N=Cl(v),E=Ye({defaultValues:o||vx(h,s,N,v)}),{formState:{dirtyFields:P},control:q,trigger:S}=E,{fields:D}=en({name:N,control:q}),F=A.useRef(null);A.useEffect(()=>{var w,H;f&&(w=P[N])!=null&&w[m]&&S(),a[m].avklaringsbehov.some(re=>la(re,v)&&re.status===dv.OPPRETTET)&&((H=F==null?void 0:F.current)==null||H.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[m]);const z=d.jsx(Y,{children:d.jsx(x,{children:d.jsx(GS,{isReadOnly:e,isSubmittable:!n,isDirty:E.formState.isDirty,isSubmitting:f})})}),J=w=>w.find(H=>la(H,v)),_=(w,H)=>{const re=T(h[w]),W=J(H);return v===nr.ÅTTE_TRETTI&&W?d.jsx(fx,{kodeverkSamling:r,allePerioder:h[w].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:b,fieldIndex:w,formName:N,avklaringsbehov:W,skalValideres:re}):v===nr.ÅTTE_TRETTIFEM&&W?d.jsx(px,{readOnly:e,allePerioder:h[w].beregningsgrunnlagPeriode,fieldIndex:w,formName:N,avklaringsbehov:W}):null},G=a[m].vilkårsperiodeFom;return d.jsx("div",{ref:F,children:d.jsx(Ce,{formMethods:E,onSubmit:w=>c(w,v),setDataOnUnmount:g,children:D.map((w,H)=>d.jsxs("div",{style:{display:h[H].vilkårsperiodeFom===G?"block":"none"},children:[d.jsx(nx,{readOnly:e,avklaringsbehov:J(h[H].avklaringsbehov),beregningsgrunnlag:h[H]}),d.jsxs("div",{className:`${e?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerBorder} ${oe.aksjonspunktWrapper}`,children:[_(H,h[H].avklaringsbehov),d.jsx(V,{sixteenPx:!0}),z,d.jsx(V,{sixteenPx:!0})]})]},w.id))})})},hx=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const a=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,s=t.filter(o=>o.sammenligningsgrunnlagType===fe.AT_FL||o.sammenligningsgrunnlagType===fe.AT||o.sammenligningsgrunnlagType===fe.FL),l=a&&s.length===0;return n?d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(d.Fragment,{children:[e.isMilitaer&&d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsxs(Y,{children:[d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})})}),d.jsx(V,{eightPx:!0})]}),e.isDagpenger&&d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})})})}),d.jsx(V,{eightPx:!0})]}),l&&d.jsxs(Y,{children:[d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})}),d.jsx(V,{eightPx:!0})]})]})},Ax="_colLable_di1r8_1",Ix="_colValue_di1r8_8",Tx="_linjeSkille_di1r8_21",Rx="_linjeSkilleTykk_di1r8_27",Ex="_colAvvik_di1r8_36",ln={colLable:Ax,colValue:Ix,linjeSkille:Tx,linjeSkilleTykk:Rx,colAvvik:Ex},ku=d.jsx(Y,{children:d.jsx(x,{children:d.jsx("div",{className:ln.linjeSkille})})}),Nx=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:a,avvikProsent:s}=n,l=parseFloat(s.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",g=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(d.Fragment,{children:[ku,d.jsxs(Y,{children:[d.jsx(x,{className:ln.colLable,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:o})})}),d.jsx(x,{className:ln.colValue,children:d.jsx(R,{size:"small",children:e||e===0?M(e):"-"})}),d.jsx(x,{className:ln.colAvvik})]}),ku,d.jsxs(Y,{children:[d.jsx(x,{className:ln.colLable,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:g})})}),d.jsx(x,{className:ln.colValue,children:d.jsx(R,{size:"small",children:M(a)})}),d.jsx(x,{className:ln.colAvvik})]}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx("div",{className:ln.linjeSkilleTykk})})}),d.jsxs(Y,{children:[d.jsx(x,{className:ln.colLable,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})})}),d.jsx(x,{className:ln.colValue,children:d.jsx(R,{size:"small",children:M(t===void 0?0:t)})}),d.jsx(x,{className:ln.colAvvik,children:d.jsx(R,{size:"small",className:`${l>25?U.redError:""} ${U.semiBoldText}`,children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})})})]})]})},Px=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,qx=(e,n)=>e?e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>Px(r)):[],mu=e=>e||0,Sx=e=>e.beregnetPrAar?e.beregnetPrAar:0,vu=(e,n)=>{const r=qx(e,n);if(r){const t=r.reduce((l,o)=>l+Sx(o),0),a=r.reduce((l,o)=>{var g;return l+mu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseBortfaltPrÅr)},0),s=r.reduce((l,o)=>{var g;return l+mu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseTilkommetPrÅr)},0);return t+a-s}return 0},xx=(e,n)=>{const r=d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case fe.AT:case fe.FL:case fe.AT_FL:return r;case fe.SN:return t;case fe.ATFLSN:return n===nr.ÅTTE_TRETTIFEM?t:r;case fe.MIDLERTIDIG_INAKTIV:return d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},pu=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===L.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===L.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===fe.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===fe.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===fe.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:vu(n,[L.ARBEIDSTAKER,L.FRILANSER]),erPGI:!1}:{inntekt:vu(n,[L.ARBEIDSTAKER,L.FRILANSER]),erPGI:!1}};function fu(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const Bx=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(a=>a.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=fu(t,nr.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(a=>{const s=Yl(a.sammenligningsgrunnlagType,r.aktivitetStatus);t=fu(t,s,r)}),t},{}),Fx=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:a,gjelderBesteberegning:s,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:v,setFormData:f,aktivIndex:y})=>{var b;const c=Bx(o),[T,h]=A.useState(!1),N=d.jsx(hx,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:s,erNyIArbeidslivet:!!((b=o[y].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&b.find(P=>P.erNyIArbeidslivet))}),E=P=>{var q;if(c[P]&&c[P].length>0){const S=c[P],D=o[y].vilkårsperiodeFom,F=S.find(H=>H.vilkårsperiodeFom===D),z=F?(q=F.sammenligningsgrunnlagPrStatus)==null?void 0:q.find(H=>Yl(H.sammenligningsgrunnlagType,F==null?void 0:F.aktivitetStatus)===P):void 0,J=!!c[P].find(H=>!!H.avklaringsbehov.find(re=>Li(re)===P)),_=F&&!!F.avklaringsbehov.find(H=>Li(H)===P),G=(F==null?void 0:F.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],w=Cl(P);return d.jsxs("div",{children:[!!z&&d.jsxs(d.Fragment,{children:[d.jsx(ae,{size:"xsmall",children:xx(z,P)}),d.jsx(Nx,{sammenligningsgrunnlag:z,beregnetAarsinntekt:pu(z,G).inntekt,erPGI:pu(z,G).erPGI}),d.jsx("div",{className:U.storSpace})]}),J&&d.jsxs("div",{style:{display:_?"block":"none"},children:[d.jsx(jx,{readOnly:e,lovparagraf:P,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:a,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:v&&w in v?v:void 0,setFormData:f,aktivIndex:y,finnesFormSomSubmittes:T,setSubmitting:h}),d.jsx("div",{className:U.storSpace})]})]})}return null};return d.jsxs("div",{className:U.panelRight,children:[N,d.jsx(V,{twentyPx:!0}),E(nr.ÅTTE_TRETTI),E(nr.ÅTTE_TRETTIFEM)]})},Gr=e=>I(e).locale(Gi).format("MMMM");function Vt(e,n,r){const t=e.filter(a=>a.lønnsendringscenario===n).map(a=>`i ${Pa(r[a.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${I(a.sisteLønnsendringsdato).format(te)}`);return t.reduce((a,s,l)=>l===0?s:l<t.length-2?`${a}, ${s}`:`${a} og ${s}`,"")}const _x=(e,n,r,t)=>{switch(e){case jn.MANUELT_BEHANDLET:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:Vt(r,jn.MANUELT_BEHANDLET,t)}});case jn.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:Vt(r,jn.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:Gr(I(n).subtract(1,"month").format(xr)),forrigeMåned:Gr(I(n).subtract(2,"month").format(xr))}});case jn.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:Vt(r,jn.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:Gr(I(n).subtract(1,"month").format(xr))}});case jn.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:Vt(r,jn.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:Gr(I(n).subtract(1,"month").format(xr)),nesteMåned:Gr(I(n).subtract(2,"month").format(xr))}});default:return null}};function Ox(e,n,r){return gp(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsxs(d.Fragment,{children:[_x(t,n,e,r),d.jsx("br",{}),d.jsx(V,{sixteenPx:!0})]}))}const Dx=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:Ox(n.lønnsendringSaksopplysning,e,r)}),d.jsx(op,{saksopplysninger:t})},wx=e=>{switch(e){case L.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case L.FRILANSER:return"alt1";case L.ARBEIDSTAKER:return"alt3";default:return"neutral"}},Vx=(e,n)=>{const r=[];return e.filter((t,a,s)=>a===s.findIndex(l=>l===t)).forEach(t=>{var a;const s=((a=n[Ra.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:a.navn)||"";r.push({visningsNavn:s,kode:t,tagType:wx(t)})}),r.sort((t,a)=>t.visningsNavn>a.visningsNavn?1:-1),d.jsx(Y,{children:r.map(t=>d.jsx(x,{className:U.tagRad,children:d.jsx(pa,{variant:t.tagType,title:t.visningsNavn,className:U.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},Mx=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:a})=>d.jsxs("div",{className:U.panelLeft,children:[Vx(n,r),d.jsx(V,{sixteenPx:!0}),d.jsxs(Jr,{children:[d.jsxs(Y,{children:[d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})})}),d.jsx(x,{children:d.jsx(R,{size:"small",className:U.semiBoldText,children:d.jsx(Ae,{dateString:e})})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(V,{sixteenPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(Dx,{arbeidsgiverOpplysningerPerId:a,skjeringstidspunktDato:e,saksopplysninger:t})})})]})]})]}),yu=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,a)=>t+a,0);return!r||r===0?0:r},Dv=e=>e.month()===2&&e.year()===2020,Gx=e=>{const n=I(e.tom);return Dv(n)},wv=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const a=I(n.beregningsgrunnlagPeriodeFom);if(Dv(a)&&t.some(o=>Gx(o))){const o=I("2020-04-30"),g=t.find(m=>I(m.tom).isSame(o,"day"));return g?g.frisinnAndeler.filter(m=>m.statusSøktFor===e):null}const s=I(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!I(o.fom).isBefore(a)&&I(o.tom).isSame(s,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},Ir=(e,n,r)=>{const t=wv(e,n,r);return!!t&&t.length>0},Xe=(e,n,r)=>{if(!e||!n||!r)return 0;if(Ir(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return yu(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return yu(r.beregningsgrunnlagPrStatusOgAndel||[],e)},bu=(e,n,r)=>{const t=wv(e,n,r);if(!t||t.length<1)return 0;const a=t.map(({oppgittInntekt:s})=>s).reduce((s,l)=>s+l,0);return!a||a===0?0:a},Vv=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===uv.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),a=t[t.length-1],s=I(a.tom);return s.month()===3&&s.year()===2020?t.filter(l=>I(l.fom).month()===3||I(l.fom).month()===2):t.filter(l=>I(l.fom).month()===s.month()&&I(l.fom).year()===s.year())}return n},Lx=(e,n)=>{let r=null;return n!==Be&&(r=n),d.jsx(k,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:I(e).format(te),tom:r?I(r).format(te):""}},`fom-tom${e}${r}`)},Mv=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,a=n.frisinnPerioder,s=Array.isArray(a)&&a.find(l=>!I(r).isBefore(l.fom)&&!I(t).isAfter(l.tom));return s?s.frisinnAndeler:[]},cu=(e,n)=>d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(k,{id:e})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(n)})})]}),ju=(e,n,r,t,a)=>{const s=a/100,l=n*s;return d.jsxs(d.Fragment,{children:[d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(k,{id:e,values:{grad:a}})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(l)})})]}),!!t||t===0&&d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(k,{id:r})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(t)})})]})]})},Mt=e=>e||e===0,Kx=e=>{const n=I(e);return n.isBefore(I("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(I("2022-01-01","YYYY-MM-DD"))?60:70},$x=(e,n,r,t)=>{const a=Mv(e,n);if(!a||a.length<1)return null;const s=a.some(v=>v.statusSøktFor===L.FRILANSER)?r:null,l=a.some(v=>v.statusSøktFor===L.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=bu(L.FRILANSER,e,n),g=bu(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n),m=Kx(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[Mt(s)&&cu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",s||0),Mt(s)&&ju("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",s||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,m),Mt(l)&&cu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",l||0),Mt(l)&&ju("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",g,m),d.jsx(Y,{children:d.jsx(x,{children:d.jsx("div",{className:U.colDevider})})}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.Resultat.Dagsats"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(e.dagsats)})})]})]})},Ux=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const a=Mv(e,n);if(!a||a.length<1)return null;const s=r>=0?r:0,l=t>=0?t:0;return d.jsxs("div",{children:[d.jsx(V,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",children:Lx(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)})})}),$x(e,n,s,l)]})},Gv=e=>e.grunnbeløp?e.grunnbeløp*6:0,Hx=(e,n)=>{if(!Ir(L.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Gv(e);const t=Xe(L.ARBEIDSTAKER,e,n);if(r-=t,!Ir(L.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const s=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=s}const a=Xe(L.FRILANSER,e,n);return a>r?r:a},Yx=(e,n)=>{if(!Ir(L.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Gv(e);const t=Xe(L.ARBEIDSTAKER,e,n);r-=t;const a=Xe(L.FRILANSER,e,n);r-=a;const s=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return s>r?r:s},Cx=(e,n)=>{const r=I(e.beregningsgrunnlagPeriodeFom),t=I(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(a=>!I(a.fom).isBefore(r)&&!I(a.tom).isAfter(t))},zx=({beregningsgrunnlag:e})=>{const n=Vv(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>Cx(t,n)):[];return d.jsxs("div",{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Resultat"})})})}),r.map(t=>d.jsx("div",{children:d.jsx(Ux,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:Hx(e,t),næringGrunnlag:Yx(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},Jx=I("2020-04-01"),Wx=(e,n,r)=>d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:M(e),annenInntekt:M(n)}})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(R,{size:"small",children:M(r)})})]}),Zx=(e,n)=>{if(!Array.isArray(n))return!1;const r=I(e.beregningsgrunnlagPeriodeFom),t=I(e.beregningsgrunnlagPeriodeTom);return n.some(a=>!I(a.fom).isBefore(r)&&!I(a.tom).isAfter(t))},Xx=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(Zx(t,n)){const a=I(t.beregningsgrunnlagPeriodeTom),s=I(t.beregningsgrunnlagPeriodeTom).endOf("month");a.isAfter(Jx)&&a.isSame(s,"day")&&t.beregningsgrunnlagPeriodeTom!==Be&&r.push(t)}}),r},Qx=(e,n)=>{const r=I(n.beregningsgrunnlagPeriodeFom),t=I(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},eB=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=Xe(L.ARBEIDSTAKER,e,n),a=e.grunnbeløp*6;let s=t;if(!Ir(L.FRILANSER,n,r)){const v=Xe(L.FRILANSER,e,n);s+=v}if(!Ir(L.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const v=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,n);s+=v}const l=a>s?a-s:0,o=n.beregningsgrunnlagPeriodeTom,g=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(v=>Qx(v,n)),m=g?g.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(d.Fragment,{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:I(m).format(te),tom:o?I(o).format(te):""}},`fom-tom${m}${o}`)})})}),d.jsx(V,{eightPx:!0}),Wx(a,s,l),d.jsx(V,{sixteenPx:!0})]})},nB=({beregningsgrunnlag:e})=>{const n=Vv(e.ytelsesspesifiktGrunnlag),r=Xx(e.beregningsgrunnlagPeriode,n);return d.jsx(d.Fragment,{children:r.map(t=>d.jsx("div",{children:eB(e,t)},t.beregningsgrunnlagPeriodeFom))})},rB=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=Xe(L.SELVSTENDIG_NAERINGSDRIVENDE,e,r),a=Xe(L.FRILANSER,e,r),s=Xe(L.ARBEIDSTAKER,e,r);return d.jsxs("div",{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})})})}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(B,{size:"small",children:M(s)})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(B,{size:"small",children:M(a)})})]}),d.jsxs(Y,{children:[d.jsx(x,{className:U.tabellAktivitet,children:d.jsx(R,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})})}),d.jsx(x,{className:U.tabellInntekt,children:d.jsx(B,{size:"small",children:M(t)})})]})]})},hu=(e,n,r)=>d.jsx(Y,{children:d.jsx(x,{children:d.jsx(R,{size:"small",children:d.jsx(k,{id:e,values:{fom:I(n).format(te),tom:I(r).format(te)}})})})}),tB=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===L.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===L.FRILANSER);return d.jsxs("div",{children:[r&&hu("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&hu("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},aB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs("div",{children:[d.jsx(Y,{children:d.jsx(x,{children:d.jsx(B,{size:"small",className:U.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Søknad.Tittel"})})})}),d.jsx(V,{eightPx:!0}),Array.isArray(r)&&r.map(t=>tB(t)),d.jsx(V,{sixteenPx:!0})]})},sB="_aksjonspunktBehandlerContainer_o9hgh_6",iB={aksjonspunktBehandlerContainer:sB},lB=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),dB=({beregningsgrunnlag:e})=>d.jsxs("div",{className:iB.aksjonspunktBehandlerContainer,children:[d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(V,{sixteenPx:!0}),d.jsx(aB,{beregningsgrunnlag:e}),d.jsx(V,{sixteenPx:!0}),d.jsx(rB,{beregningsgrunnlag:e}),d.jsx(V,{sixteenPx:!0}),lB(e)&&d.jsxs(d.Fragment,{children:[d.jsx(nB,{beregningsgrunnlag:e}),d.jsx(V,{sixteenPx:!0}),d.jsx(zx,{beregningsgrunnlag:e})]})]}),oB=e=>d.jsx(dB,{beregningsgrunnlag:e}),gB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===Fl.FRISINN?oB(e):null},uB=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===ov.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,kB=e=>!!(e!=null&&e.besteberegninggrunnlag),mB=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],vB=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:a,vilkarPeriode:s,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:g,vilkår:m,submitCallback:v,formData:f,setFormData:y,aktivIndex:b})=>{var c;const{skjaeringstidspunktBeregning:T,beregningsgrunnlagPeriode:h,faktaOmBeregning:N,ytelsesspesifiktGrunnlag:E}=n,P=uB(N),q=kB(E),S=d.jsx("div",{className:U.storSpace}),D=mB(h),F=o&&o.length>0;return d.jsxs(d.Fragment,{children:[F&&d.jsxs(d.Fragment,{children:[d.jsx(V,{eightPx:!0}),d.jsx(DS,{avklaringsbehov:o,beregningsgrunnlag:n})]}),d.jsxs(Y,{children:[d.jsxs(x,{className:U.venstreKolonne,children:[d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(V,{sixteenPx:!0}),d.jsx(Mx,{kodeverkSamling:a,aktivitetStatusList:D,skjeringstidspunktDato:T,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),S,r.skalViseBeregningsgrunnlag&&d.jsx(er,{relevanteStatuser:r,allePerioder:h,gjelderBesteberegning:P,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),q&&d.jsxs(d.Fragment,{children:[S,d.jsx(qS,{besteMåneder:(c=E==null?void 0:E.besteberegninggrunnlag)==null?void 0:c.besteMåneder,periode:h[0]})]})]}),d.jsxs(x,{className:U.hoyreKolonne,children:[d.jsx(ae,{size:"medium",className:U.panelRight,children:d.jsx(k,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(V,{sixteenPx:!0}),d.jsx(Fx,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:a,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:P,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:g,vilkår:m,submitCallback:v,formData:f,setFormData:y,aktivIndex:b}),d.jsxs(d.Fragment,{children:[d.jsx(V,{sixteenPx:!0}),d.jsx(gB,{beregningsgrunnlag:n})]}),s&&d.jsx(RS,{beregningsgrunnlag:n,vilkårsperiode:s})]})]})]})},pB="_readOnlyBlokk_3qjl7_1",fB={readOnlyBlokk:pB},yB=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(d.Fragment,{children:[d.jsx(B,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsx(V,{sixteenPx:!0}),d.jsxs(R,{size:"small",className:fB.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(tt,{})]})]}),bB=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],cB=e=>e.avklaringsbehov.filter(n=>bB.some(r=>r===n.definisjon)),jB=e=>({isArbeidstaker:e.some(n=>iv(n)),isFrilanser:e.some(n=>sv(n)),isSelvstendigNaeringsdrivende:e.some(n=>lv(n)),isMidlertidigInaktiv:e.some(n=>n===L.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>oP(n)),harDagpengerEllerAAP:e.some(n=>av(n)),isAAP:e.some(n=>n===L.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===L.DAGPENGER||n===L.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>gP(n))||e.length>1,isMilitaer:e.some(n=>uP(n))}),hB=e=>e?e.find(n=>n.definisjon===ue.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,Au=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),AB=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:a,vilkar:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m})=>{const v=n[e],f=jB(v.aktivitetStatus),y=hB(v.avklaringsbehov);function b(c){const T=Au(s,c.vilkårsperiodeFom);return T.vurderesIBehandlingen&&!T.erForlengelse}return d.jsxs(d.Fragment,{children:[d.jsx(vB,{readOnly:t||!b(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:cB(n[e]),relevanteStatuser:f,readOnlySubmitButton:a,kodeverkSamling:l,vilkarPeriode:Au(s,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:s,submitCallback:r,formData:g,setFormData:m,aktivIndex:e}),y&&d.jsx(yB,{avklaringsbehov:y})]})},IB="_contentContainer_1ddng_1",TB="_sideMenuContainer_1ddng_4",RB="_mainContainer--withSideMenu_1ddng_7",EB="_advarselIkon_1ddng_12",Ht={contentContainer:IB,sideMenuContainer:TB,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:RB,advarselIkon:EB},NB=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],PB=[],qB=nP.bind(Ht),Iu=Ke(Tv),SB=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(d.Fragment,{children:[d.jsx(ae,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Title"})}),d.jsx(V,{eightPx:!0}),d.jsx(Y,{children:d.jsx(x,{children:d.jsx(k,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})})]})},xB=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},BB=e=>e.avklaringsbehov.some(n=>NB.some(r=>r===n.definisjon)&&n.kanLoses),FB=(e,n)=>e.map(r=>({skalVurderes:xB(n,r),harAvklaringsbehov:BB(r),stp:I(r.skjaeringstidspunktBeregning).format(te)})),_B=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const m=e||PB,v=m.length>1;m.sort((T,h)=>T.skjaeringstidspunktBeregning.localeCompare(h.skjaeringstidspunktBeregning)).reverse();const[f,y]=A.useState(0),b=FB(m,a),c=qB("mainContainer",{"mainContainer--withSideMenu":v});return A.useEffect(()=>{const T=b.findIndex(h=>h.skalVurderes&&h.harAvklaringsbehov);T>-1&&y(T)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(Ge,{value:Iu,children:SB(a)}):d.jsx(Ge,{value:Iu,children:d.jsxs("div",{className:c,children:[v&&d.jsx("div",{className:Ht.sideMenuContainer,children:d.jsx(jp,{links:b.map((T,h)=>({icon:T.skalVurderes&&T.harAvklaringsbehov?d.jsx(Rr,{className:Ht.advarselIkon}):null,active:f===h,label:`${T.stp}`})),onClick:y})}),d.jsx("div",{className:Ht.contentContainer,children:d.jsx(AB,{aktivtBeregningsgrunnlagIndeks:f,beregningsgrunnlagListe:m,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,setFormData:g,formData:o})})]})})},OB=e=>{switch(e){case ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},DB=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:OB(a.kode),...a.grunnlag[0]}));return e(t)},wB=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),VB=(e,n)=>{const r=e.find(a=>a.vilkarType&&a.vilkarType===Xn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[wB(n,r)]}},MB=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],GB=[de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],LB=[Xn.BEREGNINGSGRUNNLAGVILKARET],KB=({arbeidsgiverOpplysningerPerId:e})=>{const n=Z(),r=el(GB,LB),{behandling:t}=A.use(Sn),a=qn(t),{data:s,isFetching:l}=Nn(a.beregningsgrunnlagOptions(t));return i.jsx(Lu,{standardPanelProps:r,prosessPanelKode:Ji.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:l?i.jsx(En,{}):i.jsx($B,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagsvilkar:VB(r.vilkar,s),beregningsgrunnlagListe:MB(s),arbeidsgiverOpplysningerPerId:e,submitCallback:DB(r.submitCallback),isReadOnly:r.isReadOnly,readOnlySubmitButton:r.readOnlySubmitButton})})},$B=e=>{const{formData:n,setFormData:r}=Mn();return i.jsx(_B,{...e,formData:n,setFormData:r})};KB.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Tu=de.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,yi=[Xn.MEDLEMSKAPSVILKÅRET_LØPENDE],UB=()=>{const e=Z(),n=el([Tu],yi);return i.jsx(rp,{overstyringApKode:Tu,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:i.jsx(wp,{standardPanelProps:n,prosessPanelKode:Ji.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:wu(n.aksjonspunkter,yi,n.vilkar),children:i.jsx(Tp,{vilkar:n.vilkar,vilkarKoder:yi,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};UB.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel"};const HB="_panel_d5cml_1",YB="_hyphen_d5cml_9",CB="_marginTop_d5cml_19",zB="_marginBottom_d5cml_23",JB="_colWidth_d5cml_27",Fn={panel:HB,hyphen:YB,marginTop:CB,marginBottom:zB,colWidth:JB},WB=(e,n)=>e&&n!==void 0,ZB=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===Zn.OPPRETTET?void 0:t!==n,ansesMottatt:t,...Er.buildInitialValues(e)}},XB=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:de.VURDER_SOKNADSFRIST_FORELDREPENGER,...Er.transformValues(e)}),Lv=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:a,submitCallback:s,harÅpneAksjonspunkter:l}=Rn(),o=ZB(t,n,r),{formData:g,setFormData:m}=Mn(),v=Ye({defaultValues:g||o}),f=v.watch("gyldigSenFremsetting"),y=r==null?void 0:r.søknadsperiodeStart,b=r==null?void 0:r.søknadsperiodeSlutt,c=r==null?void 0:r.utledetSøknadsfrist;return i.jsxs(Ce,{formMethods:v,onSubmit:T=>s(XB(T)),setDataOnUnmount:m,children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),i.jsx(V,{twentyPx:!0}),l&&i.jsx(rr,{children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:c?kr(c).format(te):""}})}),i.jsx(V,{twentyPx:!0}),i.jsx(Jr,{children:i.jsxs(Y,{children:[i.jsx(x,{className:Fn.colWidth,children:i.jsxs(Ku,{className:Fn.panel,children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),i.jsxs("ul",{className:Fn.hyphen,children:[i.jsx("li",{children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),i.jsx("li",{children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),i.jsx("li",{children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]})}),i.jsx(x,{className:Fn.colWidth,children:i.jsx(Jr,{children:i.jsxs(Y,{className:Fn.marginBottom,children:[i.jsxs(x,{className:Fn.colWidth,children:[i.jsx(ke,{children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&i.jsx(R,{size:"small",children:kr(n).format(te)})]}),y&&b&&i.jsxs(x,{className:Fn.colWidth,children:[i.jsx(ke,{children:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),i.jsx(R,{size:"small",children:`${kr(y).format(te)} - ${kr(b).format(te)}`})]})]})})})]})}),i.jsxs("div",{className:Fn.marginTop,children:[i.jsx(Er,{readOnly:a}),i.jsx(V,{sixteenPx:!0}),i.jsx(Ne,{name:"gyldigSenFremsetting",validate:[Q],isReadOnly:a,isHorizontal:!0,isEdited:WB(t.length>0,f),isTrueOrFalseSelection:!0,radios:[{value:"true",label:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),f&&i.jsxs(i.Fragment,{children:[i.jsx(V,{sixteenPx:!0}),i.jsx(Nu,{children:i.jsx(Wn,{name:"ansesMottatt",isReadOnly:a,label:i.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[Q,An,yp]})})]}),i.jsx(V,{twentyPx:!0}),i.jsx(Vp,{isReadOnly:a,isSubmittable:!e,isSubmitting:v.formState.isSubmitting,isDirty:v.formState.isDirty})]})]})};Lv.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const QB={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},eF=Ke(QB),Kv=({soknad:e,readOnlySubmitButton:n})=>i.jsx(Ge,{value:eF,children:i.jsx(Lv,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Kv.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const nF=[de.VURDER_SOKNADSFRIST_FORELDREPENGER],rF=()=>{const e=Z(),n=el(nF),{behandling:r}=A.use(Sn),t=qn(r),{data:a}=Nn(t.søknadOptions(r));return i.jsx(Lu,{standardPanelProps:n,prosessPanelKode:Ji.SOEKNADSFRIST,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:wu(n.aksjonspunkter),children:a?i.jsx(Kv,{soknad:a,readOnlySubmitButton:n.readOnlySubmitButton}):i.jsx(En,{})})};rF.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel"};const wn={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},tF="_godkjentImage_1bp9b_1",aF="_avslattImage_1bp9b_7",sF="_margin_1bp9b_13",iF="_fix_1bp9b_17",Lr={godkjentImage:tF,avslattImage:aF,margin:sF,fix:iF},lF="MELLOMLIGGENDE_PERIODE",dF=e=>e===wn.BEKREFTET_AVVIST||e===wn.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",Ru=e=>e===wn.BEKREFTET_GODKJENT||e===wn.ANTATT_GODKJENT||e===lF,$v=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const a=Z();return i.jsxs(Ku,{border:!0,children:[i.jsx(Jr,{children:i.jsxs(Y,{spaceBetween:!0,children:[i.jsx(x,{children:i.jsx(B,{size:"small",children:i.jsx(k,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})})}),i.jsxs(x,{className:Lr.fix,children:[i.jsx(se,{className:Lr.margin,size:"xsmall",icon:i.jsx(ka,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.prevPeriod"}),children:i.jsx(k,{id:"TimeLineData.prevPeriodShort"})}),i.jsx(se,{className:Lr.margin,size:"xsmall",icon:i.jsx(ma,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:i.jsx(k,{id:"TimeLineData.nextPeriodShort"})}),i.jsx(se,{size:"xsmall",icon:i.jsx(Jn,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]})}),i.jsx(V,{sixteenPx:!0}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:e.fom,dateStringTom:e.tom})}),i.jsx(V,{sixteenPx:!0}),i.jsxs($,{children:[Ru(e.klasse)&&i.jsx(Ui,{className:Lr.godkjentImage}),!Ru(e.klasse)&&i.jsx(Jn,{className:Lr.avslattImage}),i.jsx(k,{id:dF(e.klasse)})]})]})};$v.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const oF={danger:i.jsx(Mu,{}),success:i.jsx(Qi,{}),info:i.jsx(zp,{})},gF=e=>e===wn.BEKREFTET_AVVIST||e===wn.ANTATT_AVVIST?"danger":e===wn.BEKREFTET_GODKJENT||e===wn.ANTATT_GODKJENT?"success":"info",uF=e=>e.map(n=>({start:I(n.fom).toDate(),end:I(n.tom).toDate(),status:gF(n.klasse),opptjeningsperiode:n})),kF=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",Uv=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=Z(),a=A.useMemo(()=>[...e].sort((y,b)=>I(y.fom).diff(I(b.fom))),[e]),s=A.useMemo(()=>uF(a),[a]),[l,o]=A.useState(),g=y=>{const b=s.find(c=>{var T;return((T=c.opptjeningsperiode)==null?void 0:T.fom)===y});b&&o(b)},m=A.useCallback(()=>{o(void 0)},[]),v=A.useCallback(()=>{if(s){const y=s.findIndex(b=>{var c,T;return((c=b.opptjeningsperiode)==null?void 0:c.fom)===((T=l==null?void 0:l.opptjeningsperiode)==null?void 0:T.fom)})+1;y<s.length&&o(s[y])}},[s,l,o]),f=A.useCallback(()=>{if(s){const y=s.findIndex(b=>{var c,T;return((c=b.opptjeningsperiode)==null?void 0:c.fom)===((T=l==null?void 0:l.opptjeningsperiode)==null?void 0:T.fom)})-1;y>=0&&o(s[y])}},[s,l,o]);return i.jsxs(i.Fragment,{children:[i.jsx(V,{twentyPx:!0}),i.jsxs(we,{startDate:I(n).subtract(1,"months").toDate(),endDate:I(r).add(10,"days").toDate(),children:[i.jsxs(we.Pin,{date:I(n).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"OpptjeningTimeLineLight.StartDato"})}),i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:n})})]}),i.jsxs(we.Pin,{date:I(r).toDate(),children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"OpptjeningTimeLineLight.SluttDato"})}),i.jsx(R,{size:"small",children:i.jsx(Ae,{dateString:r})})]}),i.jsx(we.Row,{label:"",children:s.map(y=>{var b,c,T;return i.jsx(we.Period,{start:y.start,end:y.end,status:y.status,onSelectPeriod:()=>{var h;return g((h=y.opptjeningsperiode)==null?void 0:h.fom)},isActive:((b=l==null?void 0:l.opptjeningsperiode)==null?void 0:b.fom)===((c=y.opptjeningsperiode)==null?void 0:c.fom),icon:oF[y.status],title:t.formatMessage({id:kF(y.status)})},(T=y.opptjeningsperiode)==null?void 0:T.fom)})})]}),i.jsx(V,{sixteenPx:!0}),(l==null?void 0:l.opptjeningsperiode)&&i.jsx($v,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:m,velgNestePeriode:v,velgForrigePeriode:f})]})};Uv.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const zl=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:a})=>i.jsxs(i.Fragment,{children:[i.jsx(R,{size:"small",children:i.jsx(k,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),i.jsx(V,{eightPx:!0}),i.jsx(R,{size:"small",children:i.jsx($e,{dateStringFom:t,dateStringTom:a})}),i.jsx(V,{sixteenPx:!0}),r.length>0&&i.jsx(Uv,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:a})]});zl.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const mF=(e,n,r)=>({...nl.buildInitialValues(e,n,r),...Er.buildInitialValues(e)}),vF=e=>({...nl.transformValues(e),...Er.transformValues(e),kode:de.VURDER_OPPTJENINGSVILKARET}),Hv=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:a})=>{const s=Z(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:g,harÅpneAksjonspunkter:m,isReadOnly:v,alleMerknaderFraBeslutter:f}=Rn(),y=o.some(F=>{var z;return(z=f[F.definisjon])==null?void 0:z.notAccepted}),b=mF(o,r,l.behandlingsresultat),{formData:c,setFormData:T}=Mn(),h=Ye({defaultValues:c||b}),E=o.some(F=>F.status===Zn.OPPRETTET)?void 0:Gu.OPPFYLT===r,P=A.useCallback(F=>g(vF(F)),[g]),q=A.useCallback((...F)=>i.jsx("b",{children:F}),[]),S=A.useCallback(F=>{var z;return((z=t.fastsattOpptjeningAktivitetList)==null?void 0:z.length)===0&&F===!0?s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},[]),D=A.useCallback(()=>i.jsxs(i.Fragment,{children:[i.jsx(V,{sixteenPx:!0}),i.jsx(zl,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom})]}),[t]);return i.jsx(Ce,{formMethods:h,onSubmit:P,setDataOnUnmount:T,children:i.jsxs(Mp,{title:s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:m,readOnlySubmitButton:e,readOnly:v,lovReferanse:n,originalErVilkarOk:E,erIkkeGodkjentAvBeslutter:y,isDirty:h.formState.isDirty,isSubmitting:h.formState.isSubmitting,rendreFakta:D,children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:a?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),i.jsx(nl,{readOnly:v,customVilkarOppfyltText:i.jsx(k,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:i.jsx(k,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:q}}),validatorsForRadioOptions:[S]}),i.jsx(V,{sixteenPx:!0}),i.jsx(Er,{readOnly:v})]})})};Hv.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const Yv=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:a})=>{const{aksjonspunkterForPanel:s}=Rn();return s.length>0?i.jsx(Hv,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:a}):i.jsx(zl,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};Yv.__docgenInfo={description:`OpptjeningVilkarForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const pF={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},fF=Ke(pF),yF=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:a=!1})=>i.jsx(Ge,{value:fF,children:i.jsx(Yv,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:a})});yF.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const bF=(e,n)=>e.filter(r=>r.opptjeningsår===n),Cv=e=>e.aktivitetStatus+e.arbeidsgiverId,cF=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?t.fødselsdato?`${t.navn} (${I(t.fødselsdato).format(te)})`:t.navn:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?Ou(r)(e.aktivitetStatus,dn.AKTIVITET_STATUS):""},jF=(e,n,r)=>({identifikator:Cv(e),visningsnavn:cF(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),hF=(e,n,r)=>{const t=[];return e.forEach(a=>{const s=a.erBrukerMottaker?a.årsbeløp:0,l=a.erBrukerMottaker?0:a.årsbeløp,o=Cv(a),g=t.find(m=>m.identifikator===o);g?(g.utbetaltTilSøker+=s,g.utbetaltIRefusjon+=l):t.push(jF(a,n,r))}),t},zv=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const a=!e||e.length<1,s=A.useMemo(()=>a?void 0:bF(e,n),[e,n]),l=A.useMemo(()=>s?hF(s,t,r):[],[s]);return a?null:i.jsxs(i.Fragment,{children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),i.jsxs(j,{children:[i.jsx(j.Header,{children:i.jsxs(j.Row,{children:[i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.Feriepenger.AndelNavn"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.Feriepenger.GrunnlagRefusjon"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.Feriepenger.GrunnlagSøker"})})]})}),i.jsx(j.Body,{children:l.map(o=>i.jsxs(j.Row,{children:[i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:o.visningsnavn})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:o.utbetaltIRefusjon})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})]})};zv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const AF=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]},IF=()=>i.jsx(ae,{size:"small",children:i.jsx(k,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Jv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:a})=>{const{andeler:s}=e,l=!s||s.length<1,o=A.useMemo(()=>l?[]:AF(s),[s]);return l?null:i.jsx(qe,{children:i.jsxs(qe.Item,{open:t,children:[i.jsx(qe.Header,{onClick:a,children:IF()}),i.jsx(qe.Content,{children:o.map(g=>i.jsxs("div",{children:[i.jsx(V,{sixteenPx:!0},`spacer_${g}`),i.jsx(zv,{alleAndeler:s,opptjeningsår:g,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${g}`)]},`div_${g}`))})]})})};Jv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Wv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,a]=A.useState(!1);return i.jsx(Jv,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:()=>a(!t)})};Wv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const TF="_detailsPeriode_1r02x_1",RF="_margin_1r02x_9",bi={detailsPeriode:TF,margin:RF},EF={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},NF=e=>e?`...${e.substring(e.length-4,e.length)}`:"",PF=(e,n,r)=>{const t=r[e.arbeidsgiverReferanse];return t!=null&&t.navn?t.erPrivatPerson?`${t.navn} (${t.fødselsdato})`:`${t.navn} (${t.identifikator})${NF(e.eksternArbeidsforholdId)}`:e.arbeidsforholdType?n(e.arbeidsforholdType,dn.OPPTJENING_AKTIVITET_TYPE):""},qF=(e,n,r)=>{switch(e.aktivitetStatus){case _n.ARBEIDSTAKER:return PF(e,n,r);case _n.FRILANSER:return i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Frilans"});case _n.SELVSTENDIG_NAERINGSDRIVENDE:return i.jsx(k,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case _n.DAGPENGER:return i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case _n.ARBEIDSAVKLARINGSPENGER:return i.jsx(k,{id:"TilkjentYtelse.PeriodeData.AAP"});case _n.MILITAER_ELLER_SIVIL:return i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Militaer"});case _n.BRUKERS_ANDEL:return i.jsx(k,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},SF=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return i.jsx(k,{id:n})},Zv=({selectedItemData:e,callbackForward:n,callbackBackward:r,alleKodeverk:t,isSoknadSvangerskapspenger:a,arbeidsgiverOpplysningerPerId:s,lukkPeriode:l})=>{const o=kp(e.fom,e.tom),g=Z(),m=Ou(t),v=A.useCallback((...f)=>i.jsx("b",{children:f}),[]);return i.jsx(mp,{borderWidth:"1",padding:"4",children:i.jsxs(K,{gap:"4",children:[i.jsxs($,{justify:"space-between",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Detaljer"})}),i.jsxs($,{gap:"2",align:"center",children:[i.jsx(se,{className:bi.margin,size:"xsmall",icon:i.jsx(ka,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(k,{id:"Timeline.prevPeriodShort"})}),i.jsx(se,{className:bi.margin,size:"xsmall",icon:i.jsx(ma,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(k,{id:"Timeline.nextPeriodShort"})}),i.jsx(se,{size:"xsmall",icon:i.jsx(Jn,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsx("div",{className:bi.detailsPeriode,children:i.jsxs(K,{gap:"2",children:[i.jsxs($,{justify:"space-between",children:[i.jsx(B,{size:"small",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:I(e.fom).format(te).toString(),tomVerdi:I(e.tom).format(te).toString()}})}),i.jsx(R,{size:"small",children:o.formattedString})]}),i.jsx($,{gap:"2",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:v}})})]})}),e.andeler&&e.andeler.length!==0&&i.jsxs(j,{children:[i.jsx(j.Header,{children:i.jsxs(j.Row,{children:[i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Andel"})}),!a&&i.jsxs(i.Fragment,{children:[i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.KontoType"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Gradering"})})]}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Utbetalingsgrad"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.Refusjon"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.TilSoker"})}),i.jsx(j.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilkjentYtelse.PeriodeData.SisteUtbDato"})})]})}),i.jsx(j.Body,{children:e.andeler.map((f,y)=>i.jsxs(j.Row,{children:[i.jsx(j.DataCell,{children:qF(f,m,s)}),!a&&i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:EF[f.uttak.stonadskontoType]})}),!a&&i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:SF(f)})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:f.utbetalingsgrad?f.utbetalingsgrad:""})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:f.aktivitetStatus===_n.ARBEIDSTAKER&&f.refusjon?f.refusjon:""})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:f.tilSoker?f.tilSoker:""})}),i.jsx(j.DataCell,{children:i.jsx(R,{size:"small",children:f.sisteUtbetalingsdato?I(f.sisteUtbetalingsdato).format(te):""})})]},`index${y+1}`))})]})]})})};Zv.__docgenInfo={description:`TimeLineData

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const xF="_space_ckypy_1",BF="_margin_ckypy_5",FF="_readOnlyBlokk_ckypy_9",ur={space:xF,margin:BF,readOnlyBlokk:FF},_F=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,OF=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===Rp.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},DF=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:_F(n),start:I(n.fom).toDate(),end:I(n.tom).add(1,"days").toDate(),id:r,periode:n})),wF=(e,n)=>{var t;return((t=n[dn.RELASJONSROLLE_TYPE].find(a=>a.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},VF=(e,n)=>{const r=I(e);return r.isBefore(n)?n.subtract(5,"days"):r},Xv=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:r,hovedsokerKjonnKode:t,alleKodeverk:a,arbeidsgiverOpplysningerPerId:s,fagsak:l})=>{const o=Z(),[g,m]=A.useState(),v=A.useMemo(()=>DF(e),[e]),f=A.useCallback(()=>{m(null)},[]),y=A.useCallback(()=>{const _=v.findIndex(G=>G.id===(g==null?void 0:g.id))+1;_<v.length&&m(v[_])},[v,g,m]),b=A.useCallback(()=>{const _=v.findIndex(G=>G.id===(g==null?void 0:g.id))-1;_>=0&&m(v[_])},[v,g,m]),c=A.useCallback(_=>{m(v.find(G=>G.id===_))},[m,v]),T=I(v[0].start),h=I(v[v.length-1].end),[N,E]=A.useState(T),[P,q]=A.useState(h),S=()=>{N.subtract(1,"month").isBefore(T)||(E(N.subtract(1,"month")),q(P.subtract(1,"month")))},D=()=>{P.add(1,"month").isAfter(h)||(E(N.add(1,"month")),q(P.add(1,"month")))},F=()=>{N.add(3,"month").isAfter(P)||(E(N.add(1,"month")),q(P.subtract(1,"month")))},z=()=>{P.add(1,"month").diff(N.subtract(1,"month"),"months")<36&&(E(N.subtract(1,"month")),q(P.add(1,"month")))},J=A.useMemo(()=>OF(r),[r]);return i.jsxs("div",{children:[i.jsxs(we,{startDate:N.toDate(),endDate:P.add(1,"days").toDate(),children:[i.jsxs(we.Pin,{date:I(n).toDate(),children:[i.jsx(R,{children:i.jsx(k,{id:"TilkjentYtelse.Soknadsdato"})}),i.jsx(R,{children:i.jsx(Ae,{dateString:n})})]}),J.dato&&i.jsxs(we.Pin,{date:VF(J.dato,N).toDate(),children:[i.jsx(R,{children:i.jsx(k,{id:J.textId})}),i.jsx(R,{children:i.jsx(Ae,{dateString:J.dato})})]}),i.jsx(we.Row,{label:wF(l,a),icon:t===Gp.KVINNE?i.jsx(hp,{width:20,height:20,color:"var(--a-red-200)"}):i.jsx(Ap,{width:20,height:20,color:"var(--a-blue-600)"}),children:v.map(_=>i.jsx(we.Period,{start:_.start,end:_.end,status:"success",onSelectPeriod:()=>c(_.id),isActive:(g==null?void 0:g.id)===_.id,icon:_.erGradert?i.jsx(ef,{"aria-hidden":!0}):i.jsx(Qi,{"aria-hidden":!0}),title:_.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},_.id))})]}),i.jsx(V,{twentyPx:!0}),i.jsxs(zr,{children:[i.jsx(se,{className:ur.margin,size:"small",icon:i.jsx(_p,{"aria-hidden":!0}),onClick:F,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),i.jsx(se,{className:ur.margin,size:"small",icon:i.jsx(qp,{"aria-hidden":!0}),onClick:z,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),i.jsx(se,{className:ur.margin,size:"small",icon:i.jsx(ka,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),i.jsx(se,{className:ur.margin,size:"small",icon:i.jsx(ma,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),i.jsx("div",{className:ur.space}),g&&i.jsxs(i.Fragment,{children:[i.jsx(V,{eightPx:!0}),i.jsx(Zv,{alleKodeverk:a,selectedItemData:g.periode,callbackForward:y,callbackBackward:b,isSoknadSvangerskapspenger:l.fagsakYtelseType===tp.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:s,lukkPeriode:f})]})]})};Xv.__docgenInfo={description:`TilkjentYtelse

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
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  links: ApiLink[];
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
}>`},description:""}}};const MF=e=>{var n;return((n=e.find(r=>r.definisjon===de.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse)??void 0},Qv=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:a,soknad:s})=>{var f,y;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:g}=Rn(),m=MF(g),v=(f=s.søknadsfrist)!=null&&f.mottattDato?(y=s.søknadsfrist)==null?void 0:y.mottattDato:s.mottattDato;return i.jsxs(K,{gap:"4",children:[i.jsx(ae,{size:"small",children:i.jsx(k,{id:"TilkjentYtelse.Title"})}),e&&i.jsx(Xv,{beregningsresultatPeriode:e.perioder,soknadDate:v,familieHendelseSamling:t,hovedsokerKjonnKode:a!=null&&a.bruker?a.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&i.jsx(Wv,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),m&&i.jsxs(K,{gap:"2",children:[i.jsx(B,{children:i.jsx(k,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),i.jsxs(R,{className:ur.readOnlyBlokk,children:[m," ",i.jsx(tt,{})]})]})]})};Qv.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const GF={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},LF=Ke(GF),KF=e=>i.jsx(Ge,{value:LF,children:i.jsx(Qv,{...e})});KF.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{Ny as A,KB as B,UB as F,ZE as I,yF as O,WN as P,rf as S,KF as T,rF as a,My as b,RN as c,EA as d,OE as e,ef as f,zp as g};
