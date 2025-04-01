import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as A,R as $}from"./index-DjhIdADd.js";import{l as fr,U as Zv,o as Mi,ar as Ot,k as ln,aq as Qv,H as ie,g as T,V as B,f as F,L as x,D as oe,u as z,h as ee,au as hn,av as wn,P as De,a2 as Yr,as as Kn,e as ct,aw as Xv,aK as Sn,F as ep}from"./withPanelData-DoUtvXkT.js";import{u as np,i as Xt,j as be,w as Ge,p as V,v as Yl,K as Se,G as xe,A as Ie,H as rp,S as Gi,X as Li,B as ye,b as Jn,f as Me,E as An,n as Ig,c as Ki,P as qe,Q as se,a0 as Fe,e as Cr,r as Tg,a1 as Cl,J as ge,s as tp,a2 as $i,_ as Rg,R as ap,z as Dt,q as ea,k as Vt,a3 as Mt,Z as Eg,a4 as sp,a5 as ip,a6 as lp,o as Wn,O as op,a7 as Ir,d as dp,t as up}from"./index.es-NOsWM4yd.js";import{u as In}from"./fagsakApi-D_H9QCoZ.js";import{a as $e,K as Ue,H as Te,e as W,U as $n,O as bn,G as ve,a1 as Ng,l as qg,j as Sg,Q as We,b as mn,o as kn,N as vn,h as na,m as Ui,u as ht,d as Ze,c as he,i as ra,Z as Pg,ae as Qe,af as _r,J as ta,ag as gp,ah as mp,E as Bg,ai as kp,aj as zl,f as aa,g as sa,I as vp}from"./index.es-XbTfaOLk.js";import{A as re,h as ia}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as Un}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as an}from"./alleKodeverk-Dm9joGL5.js";import{V as pp}from"./venteArsakType-BJdSFL9e.js";import{S as fp}from"./SettPaVentModalIndex-BxOYr4Mo.js";import{c as Fg}from"./bind-oYjWB_aQ.js";import{d as N}from"./dayjs.min-Cke173X9.js";import{a as Gr,g as xg}from"./kodeverkUtils-DLZgokMR.js";import{F as Zn,P as Hi}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as Yi}from"./eksterneLenker-DOKwbE_M.js";import{M as m}from"./message-B16Z2erm.js";import{L as zr}from"./Link-D7Q9hepZ.js";import{S as sr}from"./Spacer-BulQGZDM.js";import{T as wg}from"./Tooltip-4QmQndoz.js";import{S as yr}from"./ExclamationmarkTriangleFill-CNKCyH4H.js";import{a as Ci}from"./FagsakProfileIndex-BhGOih9u.js";import{k as zi,V as Hn,l as yp,j as Ia,s as _g,O as bp,S as jp}from"./VedtakProsessIndex-CBVcsivi.js";import{P as or}from"./Popover-mDnaStzJ.js";import{T as c}from"./Table-CgyNvAkk.js";import{u as Tn,h as Og}from"./behandlingApi-_VsH7i31.js";import{u as Qn,a as Xn}from"./VergeFaktaInitPanel-EkhQDvd9.js";import{B as Rn}from"./FagsakIndex-xLbEpBC4.js";import{S as cp}from"./StarFill-DiIrS-3o.js";import{b as En,V as hp,S as Ap,a as Ip}from"./index.es-DTPReK09.js";import{T as ir}from"./BehandlingSupportIndex-ByveL9U3.js";import{a as Tp,T as Oe,b as Rp,S as Ep}from"./Timeline-CAtIut4Q.js";import{T as la}from"./Tag-DrAz45z6.js";import{C as Np}from"./Checkbox-9ihHO1ww.js";import{s as qp}from"./BehandlingMenuIndex-D864rWwF.js";import{H as Sp}from"./landkoder-zAz1vTTO.js";import{S as Pp}from"./VisittkortSakIndex-GjFLp8YB.js";import{a as Ji,S as Bp}from"./Plus-CHIb6Iqd.js";import{S as Dg}from"./TotrinnskontrollIndex-0Bodn0R6.js";import{V as Vg}from"./BehandlingHenlagtPanel-y1zAX8Y5.js";import{i as Fp,g as xp}from"./index-BHG4GVne.js";import{u as Wi,P as Mg,b as wp}from"./useStandardProsessPanelProps-U2Rv2ScM.js";import{P as br,a as _p,V as Zi,b as Op}from"./OverstyringPanel-DXMzbDB2.js";import{K as Dp}from"./Kjonnkode-C-fkzSiP.js";const Qi=A.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Vp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Xi=A.createContext(null),Mp=A.forwardRef((e,n)=>{var{children:r,className:t,open:a,defaultOpen:s=!1,onOpenChange:l}=e,o=Vp(e,["children","className","open","defaultOpen","onOpenChange"]);const[u,k]=np({defaultValue:s,value:a,onChange:l}),v=A.useContext(Qi),{cn:f}=fr(),b=A.useRef(!(a||s)),y=()=>{k(j=>!j),b.current=!0};return v!=null&&v.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),$.createElement("div",Object.assign({className:f("navds-accordion__item",t,{"navds-accordion__item--open":u,"navds-accordion__item--neutral":(v==null?void 0:v.variant)==="neutral","navds-accordion__item--no-animation":!b.current}),"data-expanded":u,ref:n},Zv(o,["onClick"])),$.createElement(Xi.Provider,{value:{open:u,toggleOpen:y}},r))});var Gp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Lp=A.forwardRef((e,n)=>{var{children:r,className:t}=e,a=Gp(e,["children","className"]);const s=A.useContext(Xi),l=Mi(!1),{cn:o}=fr();return s===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):$.createElement(Ot,Object.assign({},a,{as:"div",ref:n,className:o("navds-accordion__content",{"navds-accordion__content--closed":!s.open},t),"aria-hidden":!s.open||void 0}),l?$.createElement("div",{className:o("navds-accordion__content-inner")},r):r)});var Kp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $p=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Kp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var Up=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Hp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Up(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Yp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Cp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Yp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var zp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Gg=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=zp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Jp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Tr=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Jp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var Wp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Zp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Wp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var Qp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Xp=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Qp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var ef=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Lg=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=ef(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var nf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const rf=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=nf(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var tf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const af=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=tf(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var sf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Rr=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=sf(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?A.createElement("title",{id:s},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var lf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const of=A.forwardRef((e,n)=>{var r,{children:t,className:a,onClick:s}=e,l=lf(e,["children","className","onClick"]);const o=A.useContext(Xi),u=A.useContext(Qi),k=Mi(!1),{cn:v}=fr();if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let f=(r=u==null?void 0:u.headingSize)!==null&&r!==void 0?r:"small";return k&&(f=(u==null?void 0:u.size)==="small"?"xsmall":"small"),$.createElement("button",Object.assign({ref:n},l,{className:v("navds-accordion__header",a),onClick:Qv(s,o.toggleOpen),"aria-expanded":o.open,type:"button"}),$.createElement("span",{className:v("navds-accordion__icon-wrapper")},$.createElement(Xt,{className:v("navds-accordion__header-chevron"),"aria-hidden":!0})),$.createElement(ie,{size:f,as:"span",className:v("navds-accordion__header-content")},t))});var df=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ne=A.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:a="small",size:s="medium",indent:l=!0}=e,o=df(e,["className","variant","headingSize","size","indent"]);const{cn:u}=fr();return $.createElement(Qi.Provider,{value:{variant:t,headingSize:a,size:s,mounted:!0}},$.createElement("div",Object.assign({},o,{className:u("navds-accordion",r,`navds-accordion--${s}`,{"navds-accordion--indent":l}),ref:n})))});Ne.Header=of;Ne.Content=Lp;Ne.Item=Mp;const Pt=A.createContext({listType:"ul",size:"medium"});var uf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Kg=A.forwardRef((e,n)=>{var{className:r,children:t,title:a,icon:s}=e,l=uf(e,["className","children","title","icon"]);const{listType:o,size:u}=A.useContext(Pt),{cn:k}=fr();return o==="ol"&&s&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),$.createElement("li",Object.assign({},l,{ref:n,className:k("navds-list__item",r)}),o==="ul"&&$.createElement("div",{className:k("navds-list__item-marker",{"navds-list__item-marker--icon":s,"navds-list__item-marker--bullet":!s})},s||$.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},$.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),$.createElement("div",null,a&&$.createElement(Ot,{as:"p",size:u,weight:"semibold"},a),t))});Kg.displayName="List.Item";var gf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const mf={small:"xsmall",medium:"small",large:"medium"},Q=A.forwardRef((e,n)=>{var{children:r,className:t,as:a="ul",title:s,description:l,headingTag:o="h3",size:u,"aria-label":k,"aria-labelledby":v}=e,f=gf(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:b}=A.useContext(Pt),{cn:y}=fr(),j=Mi(!1),I=u??b;return j?$.createElement(Pt.Provider,{value:{listType:a,size:I}},$.createElement(Ot,Object.assign({as:"div"},f,{size:I,ref:n,className:y("navds-list",`navds-list--${I}`,t)}),$.createElement(a,{role:"list","aria-label":k,"aria-labelledby":v},r))):$.createElement(Pt.Provider,{value:{listType:a,size:I}},$.createElement(Ot,Object.assign({as:"div"},f,{size:I,ref:n,className:y("navds-list",`navds-list--${I}`,t)}),s&&$.createElement(ie,{size:mf[I],as:o},s),l&&$.createElement(T,{size:I},l),$.createElement(a,{role:"list","aria-label":k,"aria-labelledby":v},r)))});Q.Item=Kg;var ne=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(ne||{}),ke=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ke||{}),Lr=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Lr||{});const el=A.createContext({isDirty:!1,setDirty:()=>{}}),$g=({children:e})=>{const[n,r]=A.useState(!1),t=A.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return i.jsx(el.Provider,{value:t,children:e})},nl=e=>{const n=A.useContext(el);A.useEffect(()=>{n.setDirty(e)},[e])},kf=()=>A.useContext(el).isDirty;$g.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const vf="_inline_glms2_1",pf="_docIcon_glms2_9",ff="_phoneIcon_glms2_14",Ta={inline:vf,docIcon:pf,phoneIcon:ff},Kr=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:a,arbeidsgiverFødselsdato:s,ikkeVisInfo:l})=>i.jsxs(i.Fragment,{children:[i.jsxs(B,{gap:"4",children:[!l&&s&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(oe,{children:i.jsx(be,{dateString:s})})]}),!l&&!s&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(oe,{children:r.arbeidsgiverIdent})]}),t&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),i.jsx(T,{size:"small",children:r.eksternArbeidsforholdId})]}),n&&i.jsxs(i.Fragment,{children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),i.jsx(T,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:Gr(a,an.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(T,{size:"small",children:V(r.inntektPrMnd)})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(T,{size:"small",children:i.jsx(m,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(T,{size:"small",children:V(r.refusjonPrMnd)})]}),i.jsxs(zr,{href:Yi(e,r.journalpostId,r.dokumentId),target:"_blank",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:Ta.inline,children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx(Gg,{className:Ta.docIcon})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(Lg,{className:Ta.phoneIcon}),i.jsxs(B,{gap:"1",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(oe,{children:r.kontaktpersonNavn}),i.jsx(oe,{children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Kr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const yf="_inline_10adz_1",bf="_aksjonpunktImage_10adz_5",jf="_arrow_10adz_12",cf="_ikkeMottatt_10adz_18",hf="_skiller_10adz_30",Dn={inline:yf,aksjonpunktImage:bf,arrow:jf,ikkeMottatt:cf,skiller:hf},Af=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),If=(e,n)=>{const r=e.some(a=>a.internArbeidsforholdId),t=e.some(a=>!a.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(a=>!a.internArbeidsforholdId||a.internArbeidsforholdId===n)},Tf=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")},rl=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:a})=>{const s=z(),[l,o]=A.useState({}),u=n.length===1,k=u?If(r,n[0].internArbeidsforholdId):void 0;return i.jsxs(B,{gap:"4",children:[a&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(oe,{children:i.jsx(be,{dateString:a})})]}),!a&&n.length>0&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(oe,{children:n[0].arbeidsgiverIdent})]}),!u&&i.jsxs(i.Fragment,{children:[i.jsx(Yl,{dividerParagraf:!0,className:Dn.skiller}),n.map(v=>{const f=r.find(b=>Af(v,b));return i.jsxs($.Fragment,{children:[i.jsxs(B,{gap:"2",children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),i.jsxs("div",{children:[v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length<50&&i.jsx("div",{children:i.jsx(T,{size:"small",children:v.eksternArbeidsforholdId})}),v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length>=50&&i.jsx(wg,{content:Tf(v.eksternArbeidsforholdId),children:i.jsx(T,{size:"small",children:`${v.eksternArbeidsforholdId.substring(0,50)}...`})}),!v.eksternArbeidsforholdId&&i.jsx(T,{size:"small",children:"-"})]}),f&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!f&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsxs("div",{children:[i.jsx(yr,{className:Dn.aksjonpunktImage,title:s.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),i.jsx("div",{className:Dn.ikkeMottatt,children:i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:v.fom,dateStringTom:v.tom!==Se?v.tom:void 0})}),f&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsx(T,{size:"small",children:i.jsx(be,{dateString:f.motattDato})})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(T,{size:"small",children:`${v.stillingsprosent}%`})]}),v.permisjonOgMangel&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:Gr(t,an.PERMISJONSBESKRIVELSE_TYPE,v.permisjonOgMangel.type)}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:v.permisjonOgMangel.permisjonFom,dateStringTom:v.permisjonOgMangel.permisjonTom})})]}),f&&i.jsxs(i.Fragment,{children:[v.internArbeidsforholdId&&l[v.internArbeidsforholdId]&&i.jsx(Kr,{saksnummer:e,inntektsmelding:f,skalViseArbeidsforholdId:!1}),i.jsxs(zr,{onClick:b=>{b.preventDefault(),o(y=>{if(!v.internArbeidsforholdId)return y;const j=y[v.internArbeidsforholdId];return{...y,[v.internArbeidsforholdId]:j===void 0||j===!1}})},href:"",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:Dn.inline,children:i.jsx(m,{id:!v.internArbeidsforholdId||!l[v.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),v.internArbeidsforholdId&&l[v.internArbeidsforholdId]?i.jsx(Ci,{className:Dn.arrow}):i.jsx(Xt,{className:Dn.arrow})]})]})]}),i.jsx(Yl,{dividerParagraf:!0,className:Dn.skiller})]},`${v.arbeidsgiverIdent}${v.internArbeidsforholdId}`)})]}),u&&!!k&&i.jsx(Kr,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:k,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),u&&r.length===0&&i.jsxs(i.Fragment,{children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(T,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:Gr(t,an.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})};rl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},inntektsmeldingerForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Rf="_bredde_gb3eb_1",Ef="_inline_gb3eb_9",Nf="_arrow_gb3eb_13",At={bredde:Rf,inline:Ef,arrow:Nf},qf=[],Sf=(e,n)=>{const t=N(e).subtract(1,"month").startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),u=n.find(k=>N(k.fom).startOf("month").format(xe)===o);s.push({beløp:(u==null?void 0:u.beløp)||0,fom:o})}return s},tl=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:a=qf,alleKodeverk:s,arbeidsgiverFødselsdato:l})=>{const[o,u]=A.useState(!1),k=A.useMemo(()=>Sf(n,r),[r]),v=t.length===1,f=r.length>0&&r.some(b=>b.beløp>0);return i.jsxs(B,{gap:"8",children:[i.jsx(rl,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:a,alleKodeverk:s,arbeidsgiverFødselsdato:l}),f&&i.jsxs(B,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:v?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),i.jsx(B,{gap:"1",children:k.filter((b,y)=>o?!0:y<3).map(b=>i.jsxs(F,{gap:"2",className:At.bredde,children:[i.jsx(T,{size:"small",children:i.jsx(m,{id:`ArbeidsforholdInformasjonPanel.${N(b.fom).month()+1}`})}),i.jsx(T,{size:"small",children:N(b.fom).year()}),i.jsx(sr,{}),i.jsx(T,{size:"small",children:V(b.beløp)})]},b.fom))}),i.jsxs(zr,{onClick:b=>{b.preventDefault(),u(!o)},href:"",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:At.inline,children:i.jsx(m,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?i.jsx(Ci,{className:At.arrow}):i.jsx(Xt,{className:At.arrow})]})]}),!f&&i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})};tl.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},inntektsmeldingerForRad:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Pf="_hjelpetekst_1kk6h_1",Bf="_alertStripe_1kk6h_5",Ff="_hjelpetekstInnhold_1kk6h_9",xf="_svg_1kk6h_14",It={hjelpetekst:Pf,alertStripe:Bf,hjelpetekstInnhold:Ff,svg:xf},wf=mn(3),_f=kn(1500),Of=qg(1),Df=Sg(100),Vf=e=>n=>{const r=e("fom");return r&&n?na(r)(n):null},Mf=(e,n,r,t)=>()=>{e(a=>a.map(s=>{if(r.arbeidsgiverIdent===s.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return s}))},Ug=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:a,radData:s,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:u,lukkArbeidsforholdRad:k,oppdaterTabell:v,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:b})=>{const y=z(),j=A.useMemo(()=>{var _,U,Y,w,M;return{saksbehandlersVurdering:(_=s.avklaring)==null?void 0:_.saksbehandlersVurdering,begrunnelse:(U=s.avklaring)==null?void 0:U.begrunnelse,fom:(Y=s.avklaring)==null?void 0:Y.fom,tom:(w=s.avklaring)==null?void 0:w.tom,stillingsprosent:(M=s.avklaring)==null?void 0:M.stillingsprosent}},[s]),I=$e({defaultValues:j});nl(I.formState.isDirty);const h=I.watch("saksbehandlersVurdering"),R=()=>{k(),I.reset(j)},E=_=>{const U=Mf(v,s,a,_);return _.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:a.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:a.arbeidsgiverIdent,vurdering:ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:_.begrunnelse,fom:_.fom,tom:_.tom,stillingsprosent:_.stillingsprosent}).then(U).finally(()=>I.reset(_)):u({behandlingUuid:n,behandlingVersjon:r,vurdering:_.saksbehandlersVurdering,begrunnelse:_.begrunnelse,arbeidsgiverIdent:a.arbeidsgiverIdent,internArbeidsforholdRef:a.internArbeidsforholdId}).then(U).finally(()=>I.reset(_))},q=A.useRef(null),[S,P]=A.useState(!1),D=A.useCallback(()=>P(_=>!_),[]);return i.jsxs(B,{gap:"8",children:[i.jsx(Kr,{saksnummer:e,inntektsmelding:a,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:b}),i.jsx("div",{className:It.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),i.jsx(Ue,{formMethods:I,onSubmit:E,children:i.jsxs(B,{gap:"4",children:[i.jsx(Te,{name:"saksbehandlersVurdering",label:i.jsxs(F,{gap:"2",children:[i.jsx(m,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),i.jsx(zi,{className:It.svg,ref:q,onClick:D,title:y.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),i.jsx(or,{open:S,onClose:D,anchorEl:q.current,className:It.hjelpetekst,children:i.jsx(or.Content,{className:It.hjelpetekstInnhold,children:i.jsx(T,{children:i.jsx(m,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[W],isReadOnly:l,radios:[{label:y.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:y.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:ne.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:y.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),h===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&i.jsxs(F,{gap:"4",children:[i.jsx($n,{name:"fom",label:i.jsx(m,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[W,bn],isReadOnly:l}),i.jsx($n,{name:"tom",label:i.jsx(m,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[bn,Vf(I.getValues)],isReadOnly:l}),i.jsx(ve,{name:"stillingsprosent",label:i.jsx(m,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:_=>{const U=parseInt(_.toString(),10);return Number.isNaN(U)?_:U},validate:[W,Ng,Of,Df],readOnly:l,maxLength:3})]}),i.jsx(We,{label:i.jsx(m,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[W,wf,_f,vn],maxLength:1500,readOnly:l}),!l&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"secondary",loading:I.formState.isSubmitting,disabled:!I.formState.isDirty||I.formState.isSubmitting,children:i.jsx(m,{id:"ManglendeOpplysningerForm.Lagre"})}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:I.formState.isSubmitting,onClick:R,type:"button",children:i.jsx(m,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})};Ug.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Gf="_alertStripe_9hpes_1",Lf="_hjelpetekst_9hpes_5",Kf="_hjelpetekstInnhold_9hpes_9",$f="_svg_9hpes_14",Tt={alertStripe:Gf,hjelpetekst:Lf,hjelpetekstInnhold:Kf,svg:$f},Uf=mn(3),Hf=kn(1500),Yf=(e,n,r)=>()=>{e(t=>t.map(a=>a.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:a))},Hg=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:a=[],arbeidsforholdForRad:s,inntektsmeldingerForRad:l,radData:o,isReadOnly:u,lagreVurdering:k,lukkArbeidsforholdRad:v,oppdaterTabell:f,alleKodeverk:b,arbeidsgiverFødselsdato:y})=>{const j=z(),I=A.useMemo(()=>{var Y,w;return{saksbehandlersVurdering:(Y=o.avklaring)==null?void 0:Y.saksbehandlersVurdering,begrunnelse:(w=o.avklaring)==null?void 0:w.begrunnelse}},[o]),h=$e({defaultValues:I});nl(h.formState.isDirty);const R=s.length===1,E=()=>{v(),h.reset(I)},q=Y=>{const w={behandlingUuid:n,behandlingVersjon:r,vurdering:Y.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:R?s[0].internArbeidsforholdId:void 0,begrunnelse:Y.begrunnelse};return k(w).then(Yf(f,o,Y)).finally(()=>h.reset(Y))},S=A.useRef(null),[P,D]=A.useState(!1),_=A.useCallback(()=>D(Y=>!Y),[]),U=[{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:ne.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&U.splice(1,0,{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:ne.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),i.jsxs(B,{gap:"6",children:[i.jsx(tl,{saksnummer:e,skjæringspunktDato:t,inntektsposter:a,arbeidsforholdForRad:s,inntektsmeldingerForRad:l,alleKodeverk:b,arbeidsgiverFødselsdato:y}),i.jsx(Ue,{formMethods:h,onSubmit:q,children:i.jsxs(B,{gap:"4",children:[!R&&l.length>0&&i.jsx("div",{className:Tt.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),i.jsx(Te,{name:"saksbehandlersVurdering",label:i.jsxs(F,{gap:"2",children:[i.jsx(m,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),i.jsx(zi,{ref:S,onClick:_,className:Tt.svg,title:j.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),i.jsx(or,{open:P,onClose:_,anchorEl:S.current,className:Tt.hjelpetekst,children:i.jsx(or.Content,{className:Tt.hjelpetekstInnhold,children:i.jsxs(B,{gap:"4",children:[i.jsx(T,{children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),i.jsx(T,{children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),i.jsx(T,{children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[W],isReadOnly:u,radios:U}),i.jsx(We,{label:i.jsx(m,{id:R?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[W,Uf,Hf,vn],maxLength:1500,readOnly:u}),!u&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"secondary",loading:h.formState.isSubmitting,disabled:!h.formState.isDirty||h.formState.isSubmitting,children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.Lagre"})}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:h.formState.isSubmitting,onClick:E,type:"button",children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})]})};Hg.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},inntektsmeldingerForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const dr="342352362",Cf=mn(3),zf=kn(1500),Jf=qg(1),Wf=Sg(100),Zf=e=>n=>{const r=e("fom");return n&&r?na(r)(n):null},Qf=e=>n=>{const r={arbeidsgiverIdent:dr,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(a=>a.arbeidsgiverIdent===dr);return t===-1?n.concat(r):n.map((a,s)=>s===t?r:a)},Xf=(e,n,r)=>()=>{e(t=>t.filter(a=>a.arbeidsgiverIdent!==dr)),r&&n()},al=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:u=!1})=>{const k=z(),[v,f]=A.useState(!1),b=A.useMemo(()=>{var R,E,q,S,P;return{fom:(R=a==null?void 0:a.avklaring)==null?void 0:R.fom,tom:(E=a==null?void 0:a.avklaring)==null?void 0:E.tom,stillingsprosent:(q=a==null?void 0:a.avklaring)==null?void 0:q.stillingsprosent,begrunnelse:(S=a==null?void 0:a.avklaring)==null?void 0:S.begrunnelse,arbeidsgiverNavn:(P=a==null?void 0:a.avklaring)==null?void 0:P.arbeidsgiverNavn}},[a]),y=$e({defaultValues:b});nl(y.formState.isDirty);const j=()=>{s(),y.reset(b)},I=R=>{const E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:dr,vurdering:ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...R};return t(E).then(()=>{o(Qf(R)),y.reset(R),u&&s()})},h=()=>{const R=y.getValues(),E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:dr,vurdering:ne.FJERN_FRA_BEHANDLINGEN,...R};t(E).then(Xf(o,s,u))};return i.jsxs(B,{gap:"4",children:[!a&&i.jsx(ie,{size:"small",children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),i.jsx(Ue,{formMethods:y,onSubmit:I,children:i.jsxs(B,{gap:"6",children:[i.jsxs(F,{gap:"4",children:[l&&i.jsxs(i.Fragment,{children:[i.jsx(ve,{name:"arbeidsgiverNavn",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[W],readOnly:r||!l}),i.jsx($n,{name:"fom",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[W,bn],isReadOnly:r||!l}),i.jsx($n,{name:"tom",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[bn,Zf(y.getValues)],isReadOnly:r||!l})]}),i.jsx(ve,{name:"stillingsprosent",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:R=>{const E=parseInt(R.toString(),10);return Number.isNaN(E)?R:E},validate:[W,Ng,Jf,Wf],readOnly:r||!l,maxLength:3})]}),i.jsx(We,{label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[W,Cf,zf,vn],maxLength:1500,readOnly:r||!l}),l&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"secondary",loading:y.formState.isSubmitting,disabled:!y.formState.isDirty||y.formState.isSubmitting,children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Lagre"})}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:j,type:"button",children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:()=>f(!0),type:"button",icon:i.jsx(af,{"aria-hidden":!0}),children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),v&&i.jsx(rp,{text:k.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:h,cancel:()=>f(!1),showModal:!0})]})};al.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ey="_imageColTopPadding_1ao5k_1",ny="_exclamationmarkIcon_1ao5k_5",ry="_checkmarkIcon_1ao5k_12",ty="_panelOpen_1ao5k_19",ay="_panelOpenAp_1ao5k_28",sy="_row_1ao5k_38",iy="_isOpen_1ao5k_44",ly="_isApOpen_1ao5k_48",pn={imageColTopPadding:ey,exclamationmarkIcon:ny,checkmarkIcon:ry,panelOpen:ty,panelOpenAp:ay,row:sy,isOpen:iy,isApOpen:ly},oy=Fg.bind(pn),dy=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",uy=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,a)=>({fom:t.fom&&N(t.fom).isBefore(a.fom)?t.fom:a.fom,tom:t.tom&&N(t.tom).isAfter(a.tom)?t.tom:a.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},gy=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const a=e.find(s=>!s.internArbeidsforholdId||!n||s.internArbeidsforholdId===n);if(!a)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return a},Yg=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:a,isReadOnly:s,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:u,lagreVurdering:k,toggleÅpenRad:v,erRadÅpen:f,alleKodeverk:b})=>{var H,C;const y=z(),{arbeidsgiverNavn:j,arbeidsgiverIdent:I,årsak:h,avklaring:R,arbeidsgiverFødselsdato:E}=a,q=A.useMemo(()=>t.arbeidsforhold.filter(le=>le.arbeidsgiverIdent===I),[t,I]),S=A.useMemo(()=>t.inntektsmeldinger.filter(le=>le.arbeidsgiverIdent===I),[t,I]),P=(R==null?void 0:R.saksbehandlersVurdering)===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,D=q.length>0&&S.length>0&&!h,_=h===Lr.MANGLENDE_INNTEKTSMELDING,U=h===Lr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,Y=!!h&&!(R!=null&&R.saksbehandlersVurdering),w=q.length>0&&S.length===0&&!h&&!P,M=q.length===0&&S.length>0&&!h,L=A.useMemo(()=>uy(q,a.avklaring),[P,q,a.avklaring]),K=(H=t.inntekter.find(le=>le.arbeidsgiverIdent===I))==null?void 0:H.inntekter;return i.jsxs(c.ExpandableRow,{open:f,onOpenChange:v,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:oy("row",{isOpen:f,isApOpen:Y}),content:i.jsxs("div",{className:Y?pn.panelOpenAp:pn.panelOpen,children:[P&&i.jsx(al,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:u,radData:a,lukkArbeidsforholdRad:v,erOverstyrt:l,oppdaterTabell:o}),D&&i.jsx(rl,{saksnummer:e,arbeidsforholdForRad:q,inntektsmeldingerForRad:S,alleKodeverk:b,arbeidsgiverFødselsdato:E}),M&&i.jsx(Kr,{saksnummer:e,arbeidsforhold:q.length>0?q[0]:void 0,inntektsmelding:gy(S,q.length>0?(C=q[0])==null?void 0:C.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:b,arbeidsgiverFødselsdato:E}),_&&i.jsx(Hg,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:K,isReadOnly:s,arbeidsforholdForRad:q,inntektsmeldingerForRad:S,radData:a,lagreVurdering:k,lukkArbeidsforholdRad:v,oppdaterTabell:o,alleKodeverk:b,arbeidsgiverFødselsdato:E}),U&&i.jsx(Ug,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:j,inntektsmelding:S[0],radData:a,isReadOnly:s,registrerArbeidsforhold:u,lagreVurdering:k,lukkArbeidsforholdRad:v,oppdaterTabell:o,skalViseArbeidsforholdId:S.length>1}),w&&i.jsx(tl,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:K,arbeidsforholdForRad:q,alleKodeverk:b,arbeidsgiverFødselsdato:E})]}),children:[i.jsxs(c.DataCell,{children:[!Y&&i.jsx(Gi,{title:y.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:pn.checkmarkIcon}),Y&&i.jsx(yr,{title:y.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:pn.exclamationmarkIcon})]}),i.jsxs(c.DataCell,{className:f?pn.colTopPadding:void 0,children:[f&&i.jsx(x,{size:"small",children:j}),!f&&i.jsx(T,{size:"small",children:j})]}),i.jsx(c.DataCell,{className:f?pn.colTopPadding:void 0,children:i.jsxs(T,{children:[(L==null?void 0:L.fom)&&i.jsx(Ge,{dateStringFom:L.fom,dateStringTom:L.tom!==Se?L.tom:void 0}),!L&&"-"]})}),i.jsx(c.DataCell,{className:f?pn.colTopPadding:void 0,children:i.jsx(T,{children:i.jsx(m,{id:dy(P,q.length>0)})})}),i.jsx(c.DataCell,{className:f?pn.colTopPadding:void 0,children:i.jsxs(T,{children:[q.length<2&&S.length===1&&i.jsx(be,{dateString:S[0].motattDato}),!_&&q.length>1&&S.length===q.length&&i.jsx(m,{id:"ArbeidsforholdRad.Mottatt"}),(P||_&&S.length<q.length)&&i.jsx(m,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};Yg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const my="_alertStripe_2poz8_5",ky={alertStripe:my},vy=(e,n)=>{const r=e.some(l=>l.årsak===Lr.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===Lr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=(n==null?void 0:n.status)===Un.OPPRETTET,s=[];return a&&r&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&t&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s},Cg=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:u,oppdaterTabell:k})=>{const v=z(),{arbeidsforhold:f,inntektsmeldinger:b}=t,[y,j]=A.useState(!1),[I,h]=A.useState(!1),R=A.useCallback(()=>{u(!0),j(!0);const P=l.findIndex(D=>{var _;return((_=D.avklaring)==null?void 0:_.saksbehandlersVurdering)===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});P!==-1&&o([P])},[l,o]),E=A.useMemo(()=>vy(l,n),[e.versjon]),q=l.every(P=>P.arbeidsgiverIdent!==dr),S=(n==null?void 0:n.status)===Un.OPPRETTET;return i.jsxs(B,{gap:"8",children:[i.jsxs(F,{gap:"4",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&S&&!r&&i.jsx(Li,{onClick:R}),i.jsx(sr,{}),i.jsx(T,{size:"small",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:ye(t.skjæringstidspunkt)}})})]}),i.jsxs(B,{gap:"4",children:[E.length>0&&i.jsx(Jn,{children:E.map(P=>v.formatMessage({id:P})).join(" ")}),f.length===0&&b.length===0&&s&&i.jsx("div",{className:ky.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),y&&q&&!I&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"tertiary",icon:i.jsx(Ui,{"aria-hidden":!0}),onClick:()=>h(!0),children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),I&&i.jsx(al,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>h(!1),oppdaterTabell:k,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})};Cg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  } | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},aksjonspunkt:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const py="_alertStripe_jt670_1",fy="_headerRow_jt670_5",Jl={alertStripe:py,headerRow:fy},yy=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},Wl=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,by=(e,n)=>{const{fom:r,tom:t,saksbehandlersVurdering:a,stillingsprosent:s,begrunnelse:l}=e;return e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:n,fom:r,tom:t,stillingsprosent:s,saksbehandlersVurdering:a??void 0,begrunnelse:l??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:l??void 0}},jy=e=>e.årsak?-1:1,cy=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,a=[...r.sort(jy)].reduce((l,o)=>{var y;if(l.find(j=>j.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const k=n[o.arbeidsgiverIdent],v=k.navn,f=o.årsak??((y=t.find(j=>Wl(o,j)))==null?void 0:y.årsak),b={arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:v,arbeidsgiverFødselsdato:k.erPrivatPerson?k.fødselsdato:void 0,årsak:f??void 0,avklaring:o.saksbehandlersVurdering?by(o,v):void 0};return l.concat(b)},[]),s=t.filter(l=>!r.some(o=>Wl(o,l))).map(l=>{const o=n[l.arbeidsgiverIdent];return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:o.navn,arbeidsgiverFødselsdato:o.erPrivatPerson?o.fødselsdato:void 0,årsak:l.årsak??void 0,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse??void 0}:void 0}});return a.concat(s).sort(yy)},Zl=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},zg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>{const[o,u]=A.useState(!1),[k,v]=A.useState(!1),[f,b]=A.useState(!1),{alleKodeverk:y,submitCallback:j,aksjonspunkterForPanel:I,behandling:h,fagsak:R,isReadOnly:E}=hn(),q=I.length>0?I[0]:void 0,{mellomlagretFormData:S,setMellomlagretFormData:P}=wn(),[D,_]=A.useState(S||cy(e,n)),[U,Y]=A.useState(Zl(D)),w=kf();A.useEffect(()=>()=>{P(D)},[D]);const M=pe=>{U.some(Be=>Be===pe)?Y(U.filter(Be=>Be!==pe)):Y(U.concat(pe))},L=A.useRef(null),K=pe=>{var Be;_(pe),Y(Zl(pe(D))),(Be=L==null?void 0:L.current)==null||Be.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},H=()=>{u(!0),j({kode:re.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},C=()=>{u(!0),l()},le=pe=>{u(!0),v(!1);const{frist:Be,ventearsak:Ar}=pe;Ar&&s({frist:Be,ventearsak:Ar})},je=D.some(pe=>{var Be,Ar,Hl;return((Be=pe.avklaring)==null?void 0:Be.saksbehandlersVurdering)===ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Ar=pe.avklaring)==null?void 0:Ar.saksbehandlersVurdering)===ne.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((Hl=pe.avklaring)==null?void 0:Hl.saksbehandlersVurdering)===ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),Pe=D.every(pe=>!pe.årsak||pe.årsak&&pe.avklaring),He=q===void 0,Ye=(q==null?void 0:q.status)===Un.UTFORT,J=(q==null?void 0:q.status)===Un.OPPRETTET,de=!E&&(Ye||a&&He),Ae=!E&&J&&Pe&&!w&&je,rn=!E&&J&&Pe&&!w&&!je;return i.jsxs(B,{gap:"4",children:[i.jsx(Cg,{behandling:h,aksjonspunkt:q,readOnly:E,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:a,tabellData:D,settÅpneRadIndexer:Y,setErOverstyrt:b,oppdaterTabell:K}),i.jsxs(c,{ref:L,children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{className:Jl.headerRow,children:[i.jsx(c.HeaderCell,{scope:"col"}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),i.jsx(c.HeaderCell,{scope:"col"})]})}),i.jsx(c.Body,{children:D.map((pe,Be)=>i.jsx(Yg,{arbeidOgInntekt:e,saksnummer:R.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon,radData:pe,isReadOnly:E||Ye||He,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>M(Be),erOverstyrt:f,oppdaterTabell:K,erRadÅpen:U.includes(Be),alleKodeverk:y},`${pe.arbeidsgiverNavn}${pe.arbeidsgiverIdent}${Be}`))})]}),Ae&&i.jsxs("div",{children:[i.jsx(ee,{size:"small",variant:"primary",disabled:o,onClick:()=>v(!0),type:"button",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),i.jsx(fp,{submitCallback:le,cancelEvent:()=>v(!1),defaultVenteårsak:pp.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:y[an.VENT_AARSAK],erTilbakekreving:!1,showModal:k,frist:null})]}),rn&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"primary",disabled:o,loading:o,onClick:H,type:"button",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),de&&i.jsxs(B,{gap:"4",children:[i.jsx("div",{className:Jl.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:C,type:"button",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};zg.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const hy={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},Ay=Me(hy),Jg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>i.jsx(De,{value:Ay,children:i.jsx($g,{children:i.jsx(zg,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})})});Jg.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Iy=[re.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],Ty=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r,hentOgSettBehandling:t,rettigheter:a}=A.use(Rn),s=Qn(Iy),l=Tn(r),{data:o}=In(l.arbeidOgInntektOptions(r)),{mutate:u}=ht({mutationFn:b=>l.settBehandlingPåVent({frist:b.frist??"",ventearsak:b.ventearsak,behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()}),{mutateAsync:k}=ht({mutationFn:b=>l.registrerArbeidsforholdForAOI(b)}),{mutateAsync:v}=ht({mutationFn:b=>l.lagreVurderingForAOI(b)}),{mutate:f}=ht({mutationFn:()=>l.åpneForNyVurderingAOI({behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()});return i.jsx(Xn,{standardPanelProps:s,faktaPanelKode:Zn.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:Og(r,"ARBEID_OG_INNTEKT")&&!ia(re.AVKLAR_ARBEIDSFORHOLD,r.aksjonspunkt),children:o?i.jsx(Jg,{arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:e,erOverstyrer:a.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:k,lagreVurdering:v,settBehandlingPåVentCallback:u,åpneForNyVurdering:f}):i.jsx(An,{})})};Ty.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ki=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(ki||{});const Wg=({arbeidsforhold:e})=>e.permisjonOgMangel?i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"PermisjonPeriode.Permisjon"})}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})})]}):null;Wg.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`},description:""}}};const Zg=({valgtArbeidsforhold:e})=>{var v,f;const n=e.saksbehandlersVurdering===ne.BRUK,r=e.saksbehandlersVurdering===ne.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===ne.BRUK_MED_OVERSTYRT_PERIODE,a=e.saksbehandlersVurdering===ne.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,s=e.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((v=e.permisjonOgMangel)==null?void 0:v.permisjonStatus)===ki.BRUK_PERMISJON,u=((f=e.permisjonOgMangel)==null?void 0:f.permisjonStatus)===ki.IKKE_BRUK_PERMISJON,k=Ry(e);return i.jsx(Ig,{children:i.jsxs(B,{gap:"4",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.Header"})}),i.jsx(Wg,{arbeidsforhold:e}),t&&i.jsxs(i.Fragment,{children:[i.jsx(T,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),i.jsx(T,{size:"small",children:k?i.jsx(be,{dateString:k}):"-"})]})]}),n&&o&&i.jsx(T,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),s&&i.jsx(T,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||u))&&i.jsxs(i.Fragment,{children:[i.jsx(T,{size:"small",children:i.jsx(m,{id:Ey(e)})}),r&&i.jsx(T,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&i.jsx(T,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),a&&i.jsx(T,{size:"small",children:i.jsx(m,{id:a?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.Begrunnelse"})}),i.jsx(T,{size:"small",children:e.begrunnelse})]})]})})},Ry=e=>e.saksbehandlersVurdering===ne.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===ne.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,Ey=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt";Zg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`},description:""}}};const Qg=()=>i.jsx(c.Row,{children:i.jsx(c.DataCell,{colSpan:5,children:i.jsx(T,{size:"small",children:i.jsx(m,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})})});Qg.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert"};const Ny="_image_awjuc_1",qy={image:Ny},Xg=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:a})=>{const s=z();return i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Periode",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Kilde",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col"})]})}),i.jsxs(c.Body,{children:[e.length===0&&i.jsx(Qg,{}),e.map(l=>{var v;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",u=By(l,e,t),k=(v=a.find(f=>Gt(l,f)))==null?void 0:v.motattDato;return i.jsxs(c.Row,{onMouseDown:()=>r(l),onKeyDown:()=>r(l),selected:l.arbeidsgiverIdent===n,children:[i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:Ki(u)})}),i.jsx(c.DataCell,{children:i.jsx(Ge,{size:"small",dateStringFom:l.fom,dateStringTom:l.tom!==Se?l.tom:void 0})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:Sy(l,s)})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o})}),i.jsx(c.DataCell,{children:k&&i.jsx(T,{size:"small",children:i.jsx(be,{dateString:k})})}),i.jsx(c.DataCell,{children:(l.saksbehandlersVurdering===ne.BRUK||l.saksbehandlersVurdering===ne.FORTSETT_UTEN_INNTEKTSMELDING)&&i.jsx(cp,{className:qy.image,title:s.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},Fy(l,t))})]})]})},Er=i.jsx("br",{},"break-line"),Sy=(e,n)=>e.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),Gt=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Py=e=>e?`...${e.substring(e.length-4,e.length)}`:"",By=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],a=t==null?void 0:t.navn;return e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?a:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${a}(${t.identifikator})${Py(e.eksternArbeidsforholdId)}`:`${a}(${t.identifikator})`},Fy=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`};Xg.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},selectArbeidsforholdCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(arbeidsforhold: AoIArbeidsforhold) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""}}};const em=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=A.useState(),a=u=>{const k=!!u.saksbehandlersVurdering;t(k?u:void 0)},{arbeidsforhold:s,inntektsmeldinger:l}=e,o=s.toSorted(xy(n,l));return i.jsxs(i.Fragment,{children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),i.jsx(Xg,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:a,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&i.jsx(Zg,{valgtArbeidsforhold:r})]})},Ql=(e,n)=>n.some(r=>Gt(e,r)),xy=(e,n)=>(r,t)=>{var u,k;const a=e[r.arbeidsgiverIdent],s=e[t.arbeidsgiverIdent];if(a&&s){const v=a.navn.localeCompare(s.navn);if(v!==0)return v}const l=Ql(r,n),o=Ql(t,n);if(l&&o){const v=(u=n.find(b=>Gt(r,b)))==null?void 0:u.motattDato,f=(k=n.find(b=>Gt(t,b)))==null?void 0:k.motattDato;return N(f,xe).diff(N(v,xe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)};em.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const wy={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},_y=Me(wy),nm=e=>i.jsx(De,{value:_y,children:i.jsx(em,{...e})});nm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Xl=[re.AVKLAR_ARBEIDSFORHOLD],Oy=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),r=Qn(Xl),{behandling:t}=A.use(Rn),a=Tn(t),{data:s}=In(a.arbeidOgInntektOptions(t));return i.jsx(Xn,{standardPanelProps:r,faktaPanelKode:Zn.ARBEIDSFORHOLD,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:Xl.some(l=>ia(l,t.aksjonspunkt)),children:s?i.jsx(nm,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(An,{})})};Oy.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var fe=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(fe||{}),eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},no={exports:{}},Nr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro;function Dy(){if(ro)return Nr;ro=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Nr.Fragment=n,Nr.jsx=r,Nr.jsxs=r,Nr}var to;function Vy(){return to||(to=1,no.exports=Dy()),no.exports}var g=Vy(),sn=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(sn||{}),Jr=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Jr||{}),te=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(te||{});const $r={};$r.BA=Jr.BRUKERS_ANDEL;$r.FL=Jr.FRILANS;$r.SN=Jr.EGEN_NÆRING;var er=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(er||{}),rm=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(rm||{});const oa=e=>e==="OPPR";var O=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(O||{}),sl=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(sl||{}),da=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(da||{});const Ra=e=>e?`...${e.substring(e.length-4,e.length)}`:"",xn=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${N(e.fødselsdato).format(se)})${Ra(n)}`:`${e.navn}${Ra(n)}`:`${e.navn} (${e.identifikator})${Ra(n)}`,Ur="avklarAktiviteterForm",un="vurderFaktaBeregningForm",ze=(e,n)=>n.some(r=>r.definisjon===e),My=e=>e===rm.OPPRETTET,Gy="_begrunnelseTextField_12bwv_1",Ly="_explanationTextarea_12bwv_4",Ky="_explanationTextareaReadOnly_12bwv_7",Ea={begrunnelseTextField:Gy,explanationTextarea:Ly,explanationTextareaReadOnly:Ky},tm={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ao=Me(tm),$y=mn(3),am=4e3,Uy=kn(am),jr=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||ao.formatMessage({id:l});return g.jsx(De,{value:ao,children:(n||r)&&g.jsx("div",{className:Ea.begrunnelseTextField,children:g.jsx(We,{name:s,label:o,validate:e?[]:[W,$y,Uy,vn],className:e?Ea.explanationTextareaReadOnly:Ea.explanationTextarea,maxLength:am,readOnly:e})})})};jr.buildInitialValues=(e,n="begrunnelse")=>({[n]:Ki(e)});jr.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:il,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:Hy}=fe,Yy=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Cy=(e,n,r)=>(e||Yy(il,n))&&r,sm=e=>e.find(n=>n.definisjon===Hy||n.definisjon===il),zy=(e,n)=>ze(il,e)||n,Jy=(e,n,r)=>e&&n&&!r,Wy=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,so=(e,n)=>e+n.fom.replace(".",""),Ke=e=>{if(e.arbeidsgiverIdent){const n=Wy(e,e.arbeidsgiverIdent);return so(n,e)}return so(e.arbeidsforholdType,e)},Zy=(e,n)=>e||n,Bt=(e,n,r,t,a)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===er.AAP?!1:n?Zy(t,a):!0,Qy=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?xn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[sn.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},Xy=(e,n)=>N(e).isSame(N(n))||N(e).isBefore(N(n)),eb=(e,n,r,t)=>Bt(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",nb=(e,n,r,t,a,s)=>({beregningAktivitetNavn:Qy(e,s,n),fom:e.fom,tom:e.tom,skalBrukes:eb(e,r,t,a)}),rb=(e,n,r,t)=>{const a=Xy(r,t);return n.filter(s=>e.aktiviteterValues&&(e.aktiviteterValues[Ke(s)].skalBrukes==="false"||e.aktiviteterValues[Ke(s)].tom!=null)).map(s=>({oppdragsgiverOrg:s.arbeidsgiverIdent&&s.arbeidsgiverIdent.length===9?s.arbeidsgiverIdent:void 0,arbeidsforholdRef:s.arbeidsforholdId,fom:s.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[Ke(s)].tom!=null?e.aktiviteterValues[Ke(s)].tom:s.tom,opptjeningAktivitetType:s.arbeidsforholdType,arbeidsgiverIdentifikator:s.arbeidsgiverIdent,skalBrukes:a&&e.aktiviteterValues?e.aktiviteterValues[Ke(s)].skalBrukes==="true":!0}))},tb=(e,n,r,t,a,s)=>{const l={};return e&&e.forEach(o=>{l[Ke(o)]=nb(o,n,r,t,a,s)}),l},ab="_radios_4fctu_1",sb="_navnKol_4fctu_10",ib="_table_4fctu_15",wr={radios:ab,navnKol:sb,table:ib},lb=(e,n)=>N(e).isSame(N(n))||N(e).isBefore(N(n)),io=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?xn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[sn.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},ob=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:u,arbeidsgiverOpplysningerPerId:k,fieldId:v})=>{const f=z(),b=lb(o,l),y=j=>{const I=io(r,k,t),h=`${Cl(r.fom)} til ${Cl(r.tom||"")}`;return`${j?"Benytt":"Ikke benytt"} ${I} ${h}`};return g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{className:wr.navnKol,children:g.jsx(T,{size:"small",children:io(r,k,t)})}),g.jsxs(c.DataCell,{className:wr.rowalign,children:[!a&&g.jsx(T,{children:g.jsx(Ge,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),a&&g.jsxs("div",{children:[g.jsxs(T,{as:"span",size:"small",children:[g.jsx(be,{dateString:r.fom})," -"," "]}),g.jsx($n,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${Ke(r)}.tom`,validate:[W,bn,na(r.fom)],isReadOnly:e,size:"small"})]})]}),g.jsx(c.DataCell,{className:wr.radios,children:g.jsx(Te,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${Ke(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[W],isHorizontal:!0,isReadOnly:e||!Bt(r,a,s,b,u),radios:[{value:"true",label:y(!0)}],hideLegend:!0,hideRadioLabels:!0})}),g.jsx(c.DataCell,{className:wr.radios,children:g.jsx(Te,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${Ke(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[W],isHorizontal:!0,isReadOnly:e||!Bt(r,a,s,b,u),radios:[{value:"false",label:y(!1)}],hideLegend:!0,hideRadioLabels:!0})}),g.jsx(c.DataCell,{children:n&&e&&Bt(r,a,s,b,u)&&g.jsx(Cr,{})})]},Ke(r))},db=(e,n,r)=>{const t=bn(r)?"":N(r).format(se);return e.some(a=>a.arbeidsforholdType&&a.arbeidsforholdType===er.VENTELØNN_VARTPENGER)?g.jsx(m,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},ub=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],gb=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:u,arbeidsgiverOpplysningerPerId:k,fieldId:v})=>g.jsxs(g.Fragment,{children:[g.jsx(x,{size:"small",children:db(r,a,l)}),g.jsxs(c,{size:"small",className:wr.table,children:[g.jsx(c.Header,{children:g.jsxs(c.Row,{children:[ub().map(f=>g.jsx(c.HeaderCell,{scope:"col",children:g.jsx(x,{size:"small",as:"span",children:g.jsx(m,{id:f})})},f)),g.jsx(c.HeaderCell,{})]})}),g.jsx(c.Body,{children:r.map(f=>g.jsx(ob,{aktivitet:f,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:u,arbeidsgiverOpplysningerPerId:k,fieldId:v},`${f.arbeidsgiverIdent}-${f.fom}-${f.tom}`))})]})]}),vi=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=Ke(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,mb=(e,n)=>{let r=0;for(;r<e.length&&N(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},lo=(e,n,r)=>{const t=e.find(({tom:a})=>a===r);if(t===void 0){const a={tom:r,aktiviteter:[n]},s=mb(e,r);e.splice(s,0,a)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},kb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!N(t.tom).isValid()))},vb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],a=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!a)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:s})=>s).forEach(s=>{if(!s)throw new Error("Må ha aktivitet i form values her!");const l={...s},o=e.aktiviteterValues?e.aktiviteterValues[Ke(s)].tom:void 0;o&&o!==l.tom&&(l.tom=o),N(o).isSame(N(a).subtract(1,"days"))||N(o).isAfter(N(a).subtract(1,"days"))?lo(t,l,a):lo(t,l,N(o).add(1,"days").format("YYYY-MM-DD"))}),t},ll=(e,n,r)=>{const t=n&&!kb(n)?vb(n):e;return r?t:!n||vi(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},im=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let a=0;a<t.length;a+=1){const s=e.aktiviteterValues?e.aktiviteterValues[Ke(t[a])]:void 0;if((s==null?void 0:s.skalBrukes)==="true")return n[r].tom}}},pb=e=>!e||bn(e)?"":N(e).format(se),nr=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:u})=>{const k=ll(t,r,a),v=im(r,k);return g.jsxs(B,{gap:"4",children:[g.jsx(T,{size:"small",children:g.jsx(m,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:pb(v)}})}),k.map(f=>g.jsx(gb,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:f.aktiviteter||[],erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,tomDatoForAktivitetGruppe:f.tom,valgtSkjæringstidspunkt:v,ingenAktiviterErBrukt:v===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:u},f.tom))]})};nr.harIngenAktiviteter=(e,n,r)=>{const t=ll(n,e,r);return vi(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!vi(t[1],e):!0};const fb=(e,n)=>N(e).isSame(N(n))||N(e).isBefore(N(n));nr.transformValues=(e,n,r)=>{const t=ll(n,e,r),a=im(e,t);if(!a)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(s=>rb(e,s.aktiviteter||[],a,s.tom))};const yb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};nr.buildInitialValues=(e,n,r,t,a)=>{if(!e||e.length===0)return{};let s={};const l=yb(e);return e.forEach(o=>{s={...s,...tb(o.aktiviteter||[],n,r,t,fb(l,o.tom),a)}}),s};const bb="_avsnittOverskrift_h44z2_1",jb={avsnittOverskrift:bb},{AVKLAR_AKTIVITETER:Ft,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:lm}=fe,ol="begrunnelseAvklareAktiviteter",om="manuellOverstyringBeregningAktiviteter",cb=(e,n,r,t,a)=>{const s=ze(Ft,e),l=ze(lm,e),o=sm(e);let u;return n&&n.aktiviteterTomDatoMapping&&(u=nr.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,s,t)),{[om]:l,periode:a.periode,erTilVurdering:a.vurderesIBehandlingen&&!a.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:u,...jr.buildInitialValues(o==null?void 0:o.begrunnelse,ol)}},oo=e=>{const n=e[om],r=Cy(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:nr.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[ol]}:null},hb=(e,n,r,t,a)=>{if(!(r.length<1)&&nr.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return a.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},Ab=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s,submittable:l,fieldId:o,updateOverstyring:u,submitDisabled:k})=>{var v,f;const b=z(),{resetField:y,watch:j,getValues:I,formState:{isSubmitting:h,errors:R,dirtyFields:E}}=he(),q=Object.keys(E).length>0,S=ze(lm,n),P=!!I(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[D,_]=A.useState(S||P),U=sm(n),Y=!!((f=(v=R.avklarAktiviteterForm)==null?void 0:v[o])!=null&&f.begrunnelseAvklareAktiviteter),w=C=>{C?_(!D):!C&&D&&_(!1),y(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),y(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),u(o,C)},M=n.filter(C=>C.definisjon===fe.AVKLAR_AKTIVITETER||C.definisjon===fe.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(C=>My(C.status)).length===0,L=hb(j,o,e.aktiviteterTomDatoMapping||[],P,b),K=`vurderAktiviteterSkjema.${o}`,H=ra(K,L);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:g.jsxs(B,{gap:"1",children:[g.jsxs(B,{gap:"6",children:[ze(Ft,n)&&!M&&g.jsxs(Ie,{size:"small",variant:"warning",children:[g.jsx(ie,{size:"xsmall",level:"3",children:g.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),g.jsxs(B,{gap:"2",children:[g.jsx(T,{size:"small",children:g.jsx(m,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"})}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]})]}),g.jsxs(F,{gap:"4",children:[g.jsx(x,{size:"small",className:jb.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:g.jsx(m,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||S)&&g.jsx(Li,{onClick:()=>w(!0),erOverstyrt:D})]})]}),D&&g.jsx(x,{size:"small",children:g.jsx(m,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&g.jsxs(B,{gap:"4",children:[g.jsx(nr,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:M,erOverstyrt:D,kodeverkSamling:a,values:j(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:ze(Ft,n),arbeidsgiverOpplysningerPerId:s,fieldId:o}),H&&g.jsx(Yr,{children:H})]}),zy(n,D)&&g.jsxs(B,{gap:"6",children:[g.jsx(jr,{name:`avklarAktiviteterForm.${o}.${ol}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(U!=null&&U.begrunnelse)}),g.jsx(En,{ident:U==null?void 0:U.vurdertAv,date:U==null?void 0:U.vurdertTidspunkt}),(ze(Ft,n)||D)&&g.jsx(g.Fragment,{children:g.jsxs(F,{gap:"4",children:[g.jsx(Pg,{text:b.formatMessage({id:D?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:Jy(l,!0,Y),isDirty:q,isSubmitting:k,isReadOnly:t||M&&!q,hasErrors:Y}),!!E&&q&&g.jsx(ee,{variant:"secondary",loading:h,disabled:h,onClick:()=>w(!1),size:"small",children:g.jsx(m,{id:"AvklareAktiviteter.Avbryt"})})]})})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:dm,AVKLAR_AKTIVITETER:um}=fe,uo="manuellOverstyringBeregningAktiviteter",Ib=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},Tb=(e,n)=>!ze(um,e)&&!ze(dm,e)&&!n,Rb=e=>{const n=e[Ur],r=n.filter(s=>s[uo]).map(oo).filter(s=>s),t=n.filter(s=>!s[uo]).map(oo).filter(s=>s),a=[];if(r.length>0){const s=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,u)=>o===""?u:`${o} ${u}`,""),l={kode:dm,begrunnelse:s,grunnlag:r};a.push(l)}if(t.length>0){const s=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,u)=>o===""?u:`${o} ${u}`,""),l={kode:um,begrunnelse:s,grunnlag:t};a.push(l)}return a},Eb=(e,n,r,t)=>({[Ur]:e.map(a=>{var s;return cb(a.avklaringsbehov,(s=a.faktaOmBeregning)==null?void 0:s.avklarAktiviteter,n,r,Ib(t,a.vilkårsperiodeFom))})}),Nb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},qb=({erOverstyrer:e,readOnly:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,submittable:a,submitCallback:s,beregningsgrunnlag:l,aktivtBeregningsgrunnlagIndeks:o,vilkår:u,setFormData:k,formData:v,setAvklarAktiviteterErEndret:f})=>{const b=$e({defaultValues:v||Eb(l,r,t,u)}),{formState:{dirtyFields:y,errors:j,isSubmitted:I},control:h,getValues:R,trigger:E,setValue:q}=b;A.useEffect(()=>{var w;(w=y.avklarAktiviteterForm)!=null&&w.some(M=>!!M)?f(!0):f(!1)},[y]),A.useEffect(()=>{var w;I&&(w=y.avklarAktiviteterForm)!=null&&w[o]&&E()},[o]);const S=l.flatMap(w=>w.avklaringsbehov),{fields:P}=Ze({name:Ur,control:h}),[D,_]=A.useState(!1),U=(w,M)=>{const L=R(`avklarAktiviteterForm.${w}`);q(`${Ur}.${w}`,{...L,manuellOverstyringBeregningAktiviteter:M},{shouldDirty:!0})};if(Tb(S,e))return null;const Y=w=>{Object.keys(j).length===0&&(_(!0),s(Rb(w)))};return g.jsx(Ue,{formMethods:b,onSubmit:w=>Y(w),setDataOnUnmount:k,children:P.map((w,M)=>o===M&&g.jsx(Ab,{aktivtBeregningsgrunnlagIndeks:o,fieldId:M,avklarAktiviteter:Nb(l,M),avklaringsbehovListe:l[M].avklaringsbehov,erOverstyrer:e,readOnly:n,submittable:a,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,updateOverstyring:U,submitDisabled:D},w.id))})},Re=$.createContext(0),gm=$.createContext(0),dn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:a}=he();return A.useEffect(()=>()=>a(e),[]),g.jsx(ve,{name:e,htmlSize:8,parse:Fe,readOnly:n,isEdited:r,validate:n?[]:[W,Qe(178956970)],label:t})};dn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(a=>a.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const Sb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Or=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:a})=>{var s,l;const{getValues:o}=he(),u=$.useContext(Re),k=o(`vurderFaktaBeregningForm.${u}.arbeidstakerInntektValues`);if(!k)return null;const v=(s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent,f=Sb(k,v),b=`vurderFaktaBeregningForm.${u}.arbeidstakerInntektValues.${f}.fastsattBelop`,y=v?(l=a[v])==null?void 0:l.navn:void 0;return g.jsx(dn,{name:b,readOnly:n,isAksjonspunktClosed:r,label:t||g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${y} (${v})`}})})};Or.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===te.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const a={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(a)}),n};const mm="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn",on=e=>e==="true",Pb="_navetLink_15r5n_1",km={navetLink:Pb},Ce="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Bb}=fe,Wr=({readOnly:e,erOverstyrt:n})=>{const r=$.useContext(Re),t=z(),a=e||n;return g.jsxs(F,{gap:"2",wrap:!1,children:[g.jsx(Te,{label:g.jsx(m,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${Ce}`,isReadOnly:a,validate:a?[]:[W],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:on}),g.jsx("div",{children:g.jsx("a",{className:km.navetLink,href:mm,target:"_blank",rel:"noopener noreferrer",children:g.jsx(m,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})};Wr.buildInitialValues=(e,n,r,t)=>r.includes(O.VURDER_BESTEBEREGNING)||r.includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(a=>a.definisjon===Bb)!==void 0||t?{[Ce]:!1}:{[Ce]:n.skalHaBesteberegning}:{}:{};const go=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};Wr.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[Ce]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:s})=>s!==!0).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,lagtTilAvSaksbehandler:!!s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:go(s.inntektskategori)}})),a=r.find(s=>s.nyAndel&&s.aktivitetStatus===te.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:a?{fastsatteVerdier:{fastsattBeløp:a.fastsattBelop,inntektskategori:go(a.inntektskategori)}}:void 0}}};const Fb=e=>(n,r)=>{var t;const a=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(a.map(o=>o).includes(O.VURDER_BESTEBEREGNING)||a.map(o=>o).includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const s=Wr.transformValues(n,e,r),l=[O.VURDER_BESTEBEREGNING];return(t=s.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&s.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...s}},xb="_fadeinTabell_l1t64_1",wb={fadeinTabell:xb},ur="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:_b,AVKLAR_AKTIVITETER:Ob}=fe,Db=(e,n)=>n.some(r=>r.definisjon===e),Vb=(e,n)=>e&&!n.some(r=>r.definisjon===Ob&&oa(r.status)),dl=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:a,updateOverstyring:s,erOverstyrer:l,erOverstyrt:o})=>{const[u,k]=A.useState(o),v=$.useContext(Re),f=A.useMemo(()=>Vb(l,a),[l,a]),b=()=>{k(!u),s(v,!u)};return g.jsx("div",{className:wb.fadeinTabell,children:r&&g.jsxs(B,{gap:"4",children:[g.jsxs(F,{gap:"4",children:[g.jsx(ie,{level:"3",size:"xsmall",children:g.jsx(m,{id:"InntektstabellPanel.RapporterteInntekter"})}),(f||u)&&g.jsx(Li,{onClick:b,erOverstyrt:t||u||Db(_b,a)})]}),n&&g.jsx(x,{size:"small",children:g.jsx(m,{id:n})}),e,u&&!t&&g.jsx(F,{children:g.jsx(ee,{size:"small",onClick:b,variant:"secondary",children:g.jsx(m,{id:"InntektstabellPanel.Avbryt"})})})]})})};dl.buildInitialValues=e=>({[ur]:e});const vm=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(a=>a.aktivitetStatus===te.ARBEIDSTAKER).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsforholdId).length>0:!1},gr="lonnsendringField",Zr=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[W],parse:on})},Mb=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};Zr.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(a=>a.aktivitetStatus===te.ARBEIDSTAKER);return!t||t.length<1||(n[gr]=Mb(t)),n};const Gb=(e,n,r)=>!!r[gr]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;Zr.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(O.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[O.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[gr]}}:{};const yn="NyoppstartetFLField",Qr=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${yn}`,validate:[W],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on})};Qr.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===te.FRILANSER);return t.length>0&&(r[yn]=(n=t[0])==null?void 0:n.erNyoppstartet),r};Qr.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}};const a=n.find(l=>l.aktivitetStatus===te.FRILANSER);if(!a)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}};if(a.andelsnr&&t.includes(a.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}};a.andelsnr&&t.push(a.andelsnr);const s={fastsettMaanedsinntektFL:{maanedsinntekt:a.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL,O.FASTSETT_MAANEDSINNTEKT_FL],...s,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}}};var mo={},qr,ko;function Xe(){if(ko)return qr;ko=1;var e=function(n){return n&&n.Math===Math&&n};return qr=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof eo=="object"&&eo)||e(typeof qr=="object"&&qr)||function(){return this}()||Function("return this")(),qr}var Na={},vo,po;function Nn(){return po||(po=1,vo=function(e){try{return!!e()}catch{return!0}}),vo}var qa,fo;function _n(){if(fo)return qa;fo=1;var e=Nn();return qa=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),qa}var Sa,yo;function ul(){if(yo)return Sa;yo=1;var e=Nn();return Sa=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),Sa}var Pa,bo;function gl(){if(bo)return Pa;bo=1;var e=ul(),n=Function.prototype.call;return Pa=e?n.bind(n):function(){return n.apply(n,arguments)},Pa}var Ba={},jo;function Lb(){if(jo)return Ba;jo=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Ba.f=r?function(t){var a=n(this,t);return!!a&&a.enumerable}:e,Ba}var co,ho;function pm(){return ho||(ho=1,co=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),co}var Fa,Ao;function en(){if(Ao)return Fa;Ao=1;var e=ul(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return Fa=e?t:function(a){return function(){return r.apply(a,arguments)}},Fa}var xa,Io;function ua(){if(Io)return xa;Io=1;var e=en(),n=e({}.toString),r=e("".slice);return xa=function(t){return r(n(t),8,-1)},xa}var wa,To;function Kb(){if(To)return wa;To=1;var e=en(),n=Nn(),r=ua(),t=Object,a=e("".split);return wa=n(function(){return!t("z").propertyIsEnumerable(0)})?function(s){return r(s)==="String"?a(s,""):t(s)}:t,wa}var Ro,Eo;function fm(){return Eo||(Eo=1,Ro=function(e){return e==null}),Ro}var _a,No;function ym(){if(No)return _a;No=1;var e=fm(),n=TypeError;return _a=function(r){if(e(r))throw new n("Can't call method on "+r);return r},_a}var Oa,qo;function ga(){if(qo)return Oa;qo=1;var e=Kb(),n=ym();return Oa=function(r){return e(n(r))},Oa}var Da,So;function nn(){if(So)return Da;So=1;var e=typeof document=="object"&&document.all;return Da=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},Da}var Va,Po;function cr(){if(Po)return Va;Po=1;var e=nn();return Va=function(n){return typeof n=="object"?n!==null:e(n)},Va}var Ma,Bo;function ma(){if(Bo)return Ma;Bo=1;var e=Xe(),n=nn(),r=function(t){return n(t)?t:void 0};return Ma=function(t,a){return arguments.length<2?r(e[t]):e[t]&&e[t][a]},Ma}var Ga,Fo;function $b(){if(Fo)return Ga;Fo=1;var e=en();return Ga=e({}.isPrototypeOf),Ga}var La,xo;function Ub(){if(xo)return La;xo=1;var e=Xe(),n=e.navigator,r=n&&n.userAgent;return La=r?String(r):"",La}var Ka,wo;function Hb(){if(wo)return Ka;wo=1;var e=Xe(),n=Ub(),r=e.process,t=e.Deno,a=r&&r.versions||t&&t.version,s=a&&a.v8,l,o;return s&&(l=s.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),Ka=o,Ka}var $a,_o;function bm(){if(_o)return $a;_o=1;var e=Hb(),n=Nn(),r=Xe(),t=r.String;return $a=!!Object.getOwnPropertySymbols&&!n(function(){var a=Symbol("symbol detection");return!t(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&e&&e<41}),$a}var Ua,Oo;function jm(){if(Oo)return Ua;Oo=1;var e=bm();return Ua=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Ua}var Ha,Do;function cm(){if(Do)return Ha;Do=1;var e=ma(),n=nn(),r=$b(),t=jm(),a=Object;return Ha=t?function(s){return typeof s=="symbol"}:function(s){var l=e("Symbol");return n(l)&&r(l.prototype,a(s))},Ha}var Ya,Vo;function Yb(){if(Vo)return Ya;Vo=1;var e=String;return Ya=function(n){try{return e(n)}catch{return"Object"}},Ya}var Ca,Mo;function ml(){if(Mo)return Ca;Mo=1;var e=nn(),n=Yb(),r=TypeError;return Ca=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},Ca}var za,Go;function Cb(){if(Go)return za;Go=1;var e=ml(),n=fm();return za=function(r,t){var a=r[t];return n(a)?void 0:e(a)},za}var Ja,Lo;function zb(){if(Lo)return Ja;Lo=1;var e=gl(),n=nn(),r=cr(),t=TypeError;return Ja=function(a,s){var l,o;if(s==="string"&&n(l=a.toString)&&!r(o=e(l,a))||n(l=a.valueOf)&&!r(o=e(l,a))||s!=="string"&&n(l=a.toString)&&!r(o=e(l,a)))return o;throw new t("Can't convert object to primitive value")},Ja}var Wa={exports:{}},Ko,$o;function Jb(){return $o||($o=1,Ko=!1),Ko}var Za,Uo;function kl(){if(Uo)return Za;Uo=1;var e=Xe(),n=Object.defineProperty;return Za=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},Za}var Ho;function vl(){if(Ho)return Wa.exports;Ho=1;var e=Jb(),n=Xe(),r=kl(),t="__core-js_shared__",a=Wa.exports=n[t]||r(t,{});return(a.versions||(a.versions=[])).push({version:"3.41.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),Wa.exports}var Qa,Yo;function hm(){if(Yo)return Qa;Yo=1;var e=vl();return Qa=function(n,r){return e[n]||(e[n]=r||{})},Qa}var Xa,Co;function Am(){if(Co)return Xa;Co=1;var e=ym(),n=Object;return Xa=function(r){return n(e(r))},Xa}var es,zo;function rr(){if(zo)return es;zo=1;var e=en(),n=Am(),r=e({}.hasOwnProperty);return es=Object.hasOwn||function(t,a){return r(n(t),a)},es}var ns,Jo;function Im(){if(Jo)return ns;Jo=1;var e=en(),n=0,r=Math.random(),t=e(1 .toString);return ns=function(a){return"Symbol("+(a===void 0?"":a)+")_"+t(++n+r,36)},ns}var rs,Wo;function Xr(){if(Wo)return rs;Wo=1;var e=Xe(),n=hm(),r=rr(),t=Im(),a=bm(),s=jm(),l=e.Symbol,o=n("wks"),u=s?l.for||l:l&&l.withoutSetter||t;return rs=function(k){return r(o,k)||(o[k]=a&&r(l,k)?l[k]:u("Symbol."+k)),o[k]},rs}var ts,Zo;function Wb(){if(Zo)return ts;Zo=1;var e=gl(),n=cr(),r=cm(),t=Cb(),a=zb(),s=Xr(),l=TypeError,o=s("toPrimitive");return ts=function(u,k){if(!n(u)||r(u))return u;var v=t(u,o),f;if(v){if(k===void 0&&(k="default"),f=e(v,u,k),!n(f)||r(f))return f;throw new l("Can't convert object to primitive value")}return k===void 0&&(k="number"),a(u,k)},ts}var as,Qo;function Tm(){if(Qo)return as;Qo=1;var e=Wb(),n=cm();return as=function(r){var t=e(r,"string");return n(t)?t:t+""},as}var ss,Xo;function Rm(){if(Xo)return ss;Xo=1;var e=Xe(),n=cr(),r=e.document,t=n(r)&&n(r.createElement);return ss=function(a){return t?r.createElement(a):{}},ss}var is,ed;function Em(){if(ed)return is;ed=1;var e=_n(),n=Nn(),r=Rm();return is=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),is}var nd;function Nm(){if(nd)return Na;nd=1;var e=_n(),n=gl(),r=Lb(),t=pm(),a=ga(),s=Tm(),l=rr(),o=Em(),u=Object.getOwnPropertyDescriptor;return Na.f=e?u:function(k,v){if(k=a(k),v=s(v),o)try{return u(k,v)}catch{}if(l(k,v))return t(!n(r.f,k,v),k[v])},Na}var ls={},os,rd;function qm(){if(rd)return os;rd=1;var e=_n(),n=Nn();return os=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),os}var ds,td;function ka(){if(td)return ds;td=1;var e=cr(),n=String,r=TypeError;return ds=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},ds}var ad;function et(){if(ad)return ls;ad=1;var e=_n(),n=Em(),r=qm(),t=ka(),a=Tm(),s=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u="enumerable",k="configurable",v="writable";return ls.f=e?r?function(f,b,y){if(t(f),b=a(b),t(y),typeof f=="function"&&b==="prototype"&&"value"in y&&v in y&&!y[v]){var j=o(f,b);j&&j[v]&&(f[b]=y.value,y={configurable:k in y?y[k]:j[k],enumerable:u in y?y[u]:j[u],writable:!1})}return l(f,b,y)}:l:function(f,b,y){if(t(f),b=a(b),t(y),n)try{return l(f,b,y)}catch{}if("get"in y||"set"in y)throw new s("Accessors not supported");return"value"in y&&(f[b]=y.value),f},ls}var us,sd;function Sm(){if(sd)return us;sd=1;var e=_n(),n=et(),r=pm();return us=e?function(t,a,s){return n.f(t,a,r(1,s))}:function(t,a,s){return t[a]=s,t},us}var gs={exports:{}},ms,id;function Zb(){if(id)return ms;id=1;var e=_n(),n=rr(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,a=n(r,"name"),s=a&&(function(){}).name==="something",l=a&&(!e||e&&t(r,"name").configurable);return ms={EXISTS:a,PROPER:s,CONFIGURABLE:l},ms}var ks,ld;function Pm(){if(ld)return ks;ld=1;var e=en(),n=nn(),r=vl(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(a){return t(a)}),ks=r.inspectSource,ks}var vs,od;function Qb(){if(od)return vs;od=1;var e=Xe(),n=nn(),r=e.WeakMap;return vs=n(r)&&/native code/.test(String(r)),vs}var ps,dd;function Bm(){if(dd)return ps;dd=1;var e=hm(),n=Im(),r=e("keys");return ps=function(t){return r[t]||(r[t]=n(t))},ps}var ud,gd;function pl(){return gd||(gd=1,ud={}),ud}var fs,md;function Xb(){if(md)return fs;md=1;var e=Qb(),n=Xe(),r=cr(),t=Sm(),a=rr(),s=vl(),l=Bm(),o=pl(),u="Object already initialized",k=n.TypeError,v=n.WeakMap,f,b,y,j=function(E){return y(E)?b(E):f(E,{})},I=function(E){return function(q){var S;if(!r(q)||(S=b(q)).type!==E)throw new k("Incompatible receiver, "+E+" required");return S}};if(e||s.state){var h=s.state||(s.state=new v);h.get=h.get,h.has=h.has,h.set=h.set,f=function(E,q){if(h.has(E))throw new k(u);return q.facade=E,h.set(E,q),q},b=function(E){return h.get(E)||{}},y=function(E){return h.has(E)}}else{var R=l("state");o[R]=!0,f=function(E,q){if(a(E,R))throw new k(u);return q.facade=E,t(E,R,q),q},b=function(E){return a(E,R)?E[R]:{}},y=function(E){return a(E,R)}}return fs={set:f,get:b,has:y,enforce:j,getterFor:I},fs}var kd;function ej(){if(kd)return gs.exports;kd=1;var e=en(),n=Nn(),r=nn(),t=rr(),a=_n(),s=Zb().CONFIGURABLE,l=Pm(),o=Xb(),u=o.enforce,k=o.get,v=String,f=Object.defineProperty,b=e("".slice),y=e("".replace),j=e([].join),I=a&&!n(function(){return f(function(){},"length",{value:8}).length!==8}),h=String(String).split("String"),R=gs.exports=function(E,q,S){b(v(q),0,7)==="Symbol("&&(q="["+y(v(q),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),S&&S.getter&&(q="get "+q),S&&S.setter&&(q="set "+q),(!t(E,"name")||s&&E.name!==q)&&(a?f(E,"name",{value:q,configurable:!0}):E.name=q),I&&S&&t(S,"arity")&&E.length!==S.arity&&f(E,"length",{value:S.arity});try{S&&t(S,"constructor")&&S.constructor?a&&f(E,"prototype",{writable:!1}):E.prototype&&(E.prototype=void 0)}catch{}var P=u(E);return t(P,"source")||(P.source=j(h,typeof q=="string"?q:"")),E};return Function.prototype.toString=R(function(){return r(this)&&k(this).source||l(this)},"toString"),gs.exports}var ys,vd;function nj(){if(vd)return ys;vd=1;var e=nn(),n=et(),r=ej(),t=kl();return ys=function(a,s,l,o){o||(o={});var u=o.enumerable,k=o.name!==void 0?o.name:s;if(e(l)&&r(l,k,o),o.global)u?a[s]=l:t(s,l);else{try{o.unsafe?a[s]&&(u=!0):delete a[s]}catch{}u?a[s]=l:n.f(a,s,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return a},ys}var bs={},js,pd;function rj(){if(pd)return js;pd=1;var e=Math.ceil,n=Math.floor;return js=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},js}var cs,fd;function Fm(){if(fd)return cs;fd=1;var e=rj();return cs=function(n){var r=+n;return r!==r||r===0?0:e(r)},cs}var hs,yd;function tj(){if(yd)return hs;yd=1;var e=Fm(),n=Math.max,r=Math.min;return hs=function(t,a){var s=e(t);return s<0?n(s+a,0):r(s,a)},hs}var As,bd;function aj(){if(bd)return As;bd=1;var e=Fm(),n=Math.min;return As=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},As}var Is,jd;function fl(){if(jd)return Is;jd=1;var e=aj();return Is=function(n){return e(n.length)},Is}var Ts,cd;function sj(){if(cd)return Ts;cd=1;var e=ga(),n=tj(),r=fl(),t=function(a){return function(s,l,o){var u=e(s),k=r(u);if(k===0)return!a&&-1;var v=n(o,k),f;if(a&&l!==l){for(;k>v;)if(f=u[v++],f!==f)return!0}else for(;k>v;v++)if((a||v in u)&&u[v]===l)return a||v||0;return!a&&-1}};return Ts={includes:t(!0),indexOf:t(!1)},Ts}var Rs,hd;function xm(){if(hd)return Rs;hd=1;var e=en(),n=rr(),r=ga(),t=sj().indexOf,a=pl(),s=e([].push);return Rs=function(l,o){var u=r(l),k=0,v=[],f;for(f in u)!n(a,f)&&n(u,f)&&s(v,f);for(;o.length>k;)n(u,f=o[k++])&&(~t(v,f)||s(v,f));return v},Rs}var Ad,Id;function yl(){return Id||(Id=1,Ad=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Ad}var Td;function ij(){if(Td)return bs;Td=1;var e=xm(),n=yl(),r=n.concat("length","prototype");return bs.f=Object.getOwnPropertyNames||function(t){return e(t,r)},bs}var Rd={},Ed;function lj(){return Ed||(Ed=1,Rd.f=Object.getOwnPropertySymbols),Rd}var Es,Nd;function oj(){if(Nd)return Es;Nd=1;var e=ma(),n=en(),r=ij(),t=lj(),a=ka(),s=n([].concat);return Es=e("Reflect","ownKeys")||function(l){var o=r.f(a(l)),u=t.f;return u?s(o,u(l)):o},Es}var Ns,qd;function dj(){if(qd)return Ns;qd=1;var e=rr(),n=oj(),r=Nm(),t=et();return Ns=function(a,s,l){for(var o=n(s),u=t.f,k=r.f,v=0;v<o.length;v++){var f=o[v];!e(a,f)&&!(l&&e(l,f))&&u(a,f,k(s,f))}},Ns}var qs,Sd;function uj(){if(Sd)return qs;Sd=1;var e=Nn(),n=nn(),r=/#|\.prototype\./,t=function(u,k){var v=s[a(u)];return v===o?!0:v===l?!1:n(k)?e(k):!!k},a=t.normalize=function(u){return String(u).replace(r,".").toLowerCase()},s=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return qs=t,qs}var Ss,Pd;function gj(){if(Pd)return Ss;Pd=1;var e=Xe(),n=Nm().f,r=Sm(),t=nj(),a=kl(),s=dj(),l=uj();return Ss=function(o,u){var k=o.target,v=o.global,f=o.stat,b,y,j,I,h,R;if(v?y=e:f?y=e[k]||a(k,{}):y=e[k]&&e[k].prototype,y)for(j in u){if(h=u[j],o.dontCallGetSet?(R=n(y,j),I=R&&R.value):I=y[j],b=l(v?j:k+(f?".":"#")+j,o.forced),!b&&I!==void 0){if(typeof h==typeof I)continue;s(h,I)}(o.sham||I&&I.sham)&&r(h,"sham",!0),t(y,j,h,o)}},Ss}var Ps,Bd;function wm(){if(Bd)return Ps;Bd=1;var e=ua();return Ps=Array.isArray||function(n){return e(n)==="Array"},Ps}var Bs,Fd;function mj(){if(Fd)return Bs;Fd=1;var e=TypeError,n=9007199254740991;return Bs=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Bs}var Fs,xd;function kj(){if(xd)return Fs;xd=1;var e=ua(),n=en();return Fs=function(r){if(e(r)==="Function")return n(r)},Fs}var xs,wd;function vj(){if(wd)return xs;wd=1;var e=kj(),n=ml(),r=ul(),t=e(e.bind);return xs=function(a,s){return n(a),s===void 0?a:r?t(a,s):function(){return a.apply(s,arguments)}},xs}var ws,_d;function pj(){if(_d)return ws;_d=1;var e=wm(),n=fl(),r=mj(),t=vj(),a=function(s,l,o,u,k,v,f,b){for(var y=k,j=0,I=f?t(f,b):!1,h,R;j<u;)j in o&&(h=I?I(o[j],j,l):o[j],v>0&&e(h)?(R=n(h),y=a(s,l,h,R,y,v-1)-1):(r(y+1),s[y]=h),y++),j++;return y};return ws=a,ws}var _s,Od;function fj(){if(Od)return _s;Od=1;var e=Xr(),n=e("toStringTag"),r={};return r[n]="z",_s=String(r)==="[object z]",_s}var Os,Dd;function yj(){if(Dd)return Os;Dd=1;var e=fj(),n=nn(),r=ua(),t=Xr(),a=t("toStringTag"),s=Object,l=r(function(){return arguments}())==="Arguments",o=function(u,k){try{return u[k]}catch{}};return Os=e?r:function(u){var k,v,f;return u===void 0?"Undefined":u===null?"Null":typeof(v=o(k=s(u),a))=="string"?v:l?r(k):(f=r(k))==="Object"&&n(k.callee)?"Arguments":f},Os}var Ds,Vd;function bj(){if(Vd)return Ds;Vd=1;var e=en(),n=Nn(),r=nn(),t=yj(),a=ma(),s=Pm(),l=function(){},o=a("Reflect","construct"),u=/^\s*(?:class|function)\b/,k=e(u.exec),v=!u.test(l),f=function(y){if(!r(y))return!1;try{return o(l,[],y),!0}catch{return!1}},b=function(y){if(!r(y))return!1;switch(t(y)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!k(u,s(y))}catch{return!0}};return b.sham=!0,Ds=!o||n(function(){var y;return f(f.call)||!f(Object)||!f(function(){y=!0})||y})?b:f,Ds}var Vs,Md;function jj(){if(Md)return Vs;Md=1;var e=wm(),n=bj(),r=cr(),t=Xr(),a=t("species"),s=Array;return Vs=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===s||e(o.prototype))?o=void 0:r(o)&&(o=o[a],o===null&&(o=void 0))),o===void 0?s:o},Vs}var Ms,Gd;function cj(){if(Gd)return Ms;Gd=1;var e=jj();return Ms=function(n,r){return new(e(n))(r===0?0:r)},Ms}var Ld;function hj(){if(Ld)return mo;Ld=1;var e=gj(),n=pj(),r=ml(),t=Am(),a=fl(),s=cj();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),u=a(o),k;return r(l),k=s(o,0),k.length=n(k,o,o,u,0,1,l,arguments.length>1?arguments[1]:void 0),k}}),mo}var Kd={},Gs={},Ls,$d;function Aj(){if($d)return Ls;$d=1;var e=xm(),n=yl();return Ls=Object.keys||function(r){return e(r,n)},Ls}var Ud;function Ij(){if(Ud)return Gs;Ud=1;var e=_n(),n=qm(),r=et(),t=ka(),a=ga(),s=Aj();return Gs.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var u=a(o),k=s(o),v=k.length,f=0,b;v>f;)r.f(l,b=k[f++],u[b]);return l},Gs}var Ks,Hd;function Tj(){if(Hd)return Ks;Hd=1;var e=ma();return Ks=e("document","documentElement"),Ks}var $s,Yd;function Rj(){if(Yd)return $s;Yd=1;var e=ka(),n=Ij(),r=yl(),t=pl(),a=Tj(),s=Rm(),l=Bm(),o=">",u="<",k="prototype",v="script",f=l("IE_PROTO"),b=function(){},y=function(E){return u+v+o+E+u+"/"+v+o},j=function(E){E.write(y("")),E.close();var q=E.parentWindow.Object;return E=null,q},I=function(){var E=s("iframe"),q="java"+v+":",S;return E.style.display="none",a.appendChild(E),E.src=String(q),S=E.contentWindow.document,S.open(),S.write(y("document.F=Object")),S.close(),S.F},h,R=function(){try{h=new ActiveXObject("htmlfile")}catch{}R=typeof document<"u"?document.domain&&h?j(h):I():j(h);for(var E=r.length;E--;)delete R[k][r[E]];return R()};return t[f]=!0,$s=Object.create||function(E,q){var S;return E!==null?(b[k]=e(E),S=new b,b[k]=null,S[f]=E):S=R(),q===void 0?S:n.f(S,q)},$s}var Us,Cd;function Ej(){if(Cd)return Us;Cd=1;var e=Xr(),n=Rj(),r=et().f,t=e("unscopables"),a=Array.prototype;return a[t]===void 0&&r(a,t,{configurable:!0,value:n(null)}),Us=function(s){a[t][s]=!0},Us}var zd;function Nj(){if(zd)return Kd;zd=1;var e=Ej();return e("flatMap"),Kd}var Hs,Jd;function qj(){if(Jd)return Hs;Jd=1;var e=Xe(),n=en();return Hs=function(r,t){return n(e[r].prototype[t])},Hs}var Ys,Wd;function Sj(){if(Wd)return Ys;Wd=1,hj(),Nj();var e=qj();return Ys=e("Array","flatMap"),Ys}var Cs,Zd;function Pj(){if(Zd)return Cs;Zd=1;var e=Sj();return Cs=e,Cs}var zs,Qd;function Bj(){if(Qd)return zs;Qd=1;var e=Pj();return zs=e,zs}var Js,Xd;function Fj(){if(Xd)return Js;Xd=1;var e=Bj();return Js=e,Js}var eu,nu;function xj(){return nu||(nu=1,eu=Fj()),eu}xj();const Bn="vurderEtterlønnSluttpakke",nt=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsx(m,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${Bn}`,validate:[W],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on})})};nt.buildInitialValues=(e,n)=>{var r,t,a;const s={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!oa(n.status),o=e.beregningsgrunnlagPeriode.flatMap(u=>u.beregningsgrunnlagPrStatusOgAndel).filter(u=>(u==null?void 0:u.arbeidsforhold)&&(u==null?void 0:u.arbeidsforhold.arbeidsforholdType)===er.ETTERLONN_SLUTTPAKKE);return o.length>0&&(s[Bn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((a=o[0])==null?void 0:a.beregnetPrAar)>0:void 0),s};const wj=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===er.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};nt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(O.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}};const a=wj(r);if(!a)return{};const s=n.find(o=>o.andelsnr===a);if(!s)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}};s.andelsnr&&t.push(s.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE,O.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}}};const _m="mottarYtelseField",_j="_frilans",tr=e=>_m+e.andelsnr,Yn=()=>_m+_j,Oj=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[tr(r)]).find(r=>r)!==void 0,Om=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[Yn()]:void 0,Dm=(e,n,r)=>{var t;if(!n)return{};const a={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[tr(l)]:void 0;l.andelsnr&&(a[l.andelsnr]=o)}),!r)return a;const s=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===te.FRILANSER);return s&&(a[s.andelsnr]=Om(e)),a},Vm="inntektFieldArray",Dj=e=>e.inntektskategori&&e.inntektskategori!==da.UDEFINERT?e.inntektskategori:"",Vj=(e,n,r)=>{var t,a,s,l,o;const u=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return u?xn(u,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(a=e.arbeidsforhold)!=null&&a.arbeidsforholdType?(s=r[sn.OPPTJENING_AKTIVITET_TYPE].find(k=>{var v;return k.kode===((v=e.arbeidsforhold)==null?void 0:v.arbeidsforholdType)}))==null?void 0:s.navn:(l=r[sn.AKTIVITET_STATUS].find(k=>k.kode===e.aktivitetStatus))==null?void 0:l.navn},Mm=(e,n,r)=>({andel:Vj(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Dj(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),Mj=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Gj=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Lj=(e,n)=>{const r=Mj(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},va=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.ARBEIDSTAKER,pa=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.FRILANSER,Gm=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.DAGPENGER,Lm=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.SELVSTENDIG_NAERINGSDRIVENDE,Km=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.MILITAER_ELLER_SIVIL,Kj=(e,n)=>n?pa(e)&&!!n[yn]:!1,$j=e=>!!e[Ce],Uj=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&Gj(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[gr],Hj=(e,n,r)=>va(e)&&Uj(n,e,r),Yj=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&pa(e),Cj=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&va(e)&&Lj(e,n),zj=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const a=Dm(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!a[n.andelsnr]},Jj=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===er.ETTERLONN_SLUTTPAKKE?!!n[Bn]:!1,$m=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===sl.KUNSTIG))!==void 0},Wj=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===O.FASTSETT_BG_KUN_YTELSE)!==void 0,Zj=(e,n,r)=>t=>!!($j(e)||zj(e,t,n,r)||Hj(t,e,n)||Yj(t,n)||Cj(t,n)||$m(t,r)||vm(t,r,t.arbeidsforholdId)||Jj(t,e)),Qj=(e,n,r)=>t=>Zj(e,n,r)(t)?!0:Kj(t,e),jn=e=>!!e&&e[ur]===!0,Xj=e=>e&&e.some(n=>n.definisjon===fe.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),Um=e=>jn(e),ru=e=>e.erOverstyrtInntekt||Xj(e.avklaringsbehov),Hm=(e,n,r)=>t=>Wj(n)||Qj(e,n,r)(t),ec=(e,n,r)=>t=>jn(e)||Hm(e,n,r)(t),mr=(e,n)=>r=>n.faktaOmBeregning?ec(e,n.faktaOmBeregning,n)(r):!1,nc=e=>n=>$m(n,e),rc=e=>nc(e),pi=(e,n,r)=>({...Mm(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?V(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?V(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?V(e.refusjonskrav):""}),fi=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Lt=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},On=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},bl=e=>{var n;return((n=On(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Gn=(e,n)=>n.some(r=>r.definisjon===e),Ym=e=>{const n=e.filter(r=>r.definisjon===fe.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===fe.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!oa(r.status))},tc=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,ac=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:a,aktivitetStatus:s}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(u=>u.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:a}}return Jr[t]?{andelsinfo:t,inntektskategori:a}:{andelsinfo:t,inntektskategori:a}}return $r[s]?{andelsinfo:$r[s],inntektskategori:a}:{andelsinfo:t,inntektskategori:a,arbeidsforholdId:l}},sc=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),ic=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,Cm=(e,n,r)=>{const t=e.map(a=>n(a,e)).slice().sort((a,s)=>tc(a,s));for(let a=0;a<t.length-1;a+=1)if(ic(t[a],t[a+1]))return sc(r)},lc=(e,n)=>Cm(e,ac,n),oc=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),dc=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:oc(n),uc="_row_1hw01_1",gc="_slettIkon_1hw01_10",mc="_rightAlign_1hw01_13",kc="_addCircleIcon_1hw01_41",vc="_storBredde_1hw01_47",pc="_mediumBredde_1hw01_50",Pn={row:uc,slettIkon:gc,rightAlign:mc,addCircleIcon:kc,storBredde:vc,mediumBredde:pc},fc=(e,n)=>{var r;return{andel:(r=n[sn.AKTIVITET_STATUS].find(t=>t.kode===e.filter(a=>a===te.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},yc=e=>e.map(n=>g.jsx("option",{value:n.kode,children:n.navn},n.kode)),bc=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?ge(r.fastsattBelop):0}),n>0?V(n):""};function jc(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const cc=(e,n,r,t,a,s,l)=>e.map((o,u)=>g.jsxs(c.Row,{className:Pn.row,children:[g.jsx(c.DataCell,{children:g.jsx(T,{size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),g.jsx(c.DataCell,{align:"right",className:Pn.rightAlign,children:g.jsx(ve,{name:`${s}.${u}.fastsattBelop`,className:Pn.mediumBredde,parse:Fe,readOnly:r,isEdited:n,validate:r?[]:[W,Qe(178956970)],label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${u+1}`}),hideLabel:!0,size:"small"})}),g.jsx(c.DataCell,{align:"right",className:Pn.rightAlign,children:g.jsx(ta,{label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${u+1}`}),name:`${s}.${u}.inntektskategori`,className:Pn.storBredde,selectValues:yc(t),readOnly:r,validate:r?[]:[W],hideLabel:!0,size:"small"})}),g.jsx(c.DataCell,{align:"right",className:Pn.rightAlign,children:jc(u,e,r)&&g.jsx(ee,{icon:g.jsx(Kn,{"aria-hidden":!0,className:Pn.slettIkon}),onClick:()=>l(u),type:"button",variant:"tertiary"})})]},o.id)),hc=e=>g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{children:g.jsx(x,{as:"p",size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),g.jsx(c.DataCell,{align:"right",children:g.jsx(oe,{children:e})}),g.jsx(c.DataCell,{}),g.jsx(c.DataCell,{})]},"bruttoBGSummaryRow"),Ac=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Ic=e=>e[sn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Tc=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},Rc=(e,n)=>{const r=e?Cm(e,Tc,n):void 0;if(r)return r},zm=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var a;const s=z(),{control:l}=he(),o=$.useContext(Re),u=`${un}.${o}.${e}`,{fields:k,append:v,remove:f}=Ze({control:l,name:u}),b=(a=t[sn.AKTIVITET_STATUS])==null?void 0:a.map(S=>S.kode),y=Ic(t),j=_r({name:u,control:l}),I=j?bc(j):"0",h=cc(k,r,n,y,s,u,f);h.push(hc(I));const R=Rc(j,s),E=`${u}.skjemagruppe`,q=ra(E,R);return g.jsxs(B,{gap:"2",children:[g.jsxs(c,{size:"small",children:[g.jsx(c.Header,{children:g.jsxs(c.Row,{children:[Ac().map(S=>{const P=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(S);return g.jsx(c.HeaderCell,{scope:"col",align:P?"right":"left",children:g.jsx(x,{size:"small",as:"span",children:g.jsx(m,{id:S})})},S)}),g.jsx(c.HeaderCell,{})]})}),g.jsx(c.Body,{children:h})]}),!n&&g.jsx(F,{children:g.jsx(ee,{icon:g.jsx(Ui,{"aria-hidden":!0,className:Pn.addCircleIcon}),onClick:()=>v(fc(b,t)),type:"button",variant:"tertiary",size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),q&&g.jsx(Yr,{children:q})]})},Kt="besteberegningField",rt=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{getValues:s}=he(),l=$.useContext(Re),o=s(`${un}.${l}`),u=Kt in o?o[Kt]:void 0,k=z();return g.jsxs("div",{children:[g.jsx(Te,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:g.jsx(m,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[W],parse:on,isHorizontal:!0}),u!=null&&g.jsx("div",{style:{marginTop:"10px"},children:g.jsx(Tg,{alignOffset:u?0:60,children:g.jsxs(B,{gap:"4",children:[g.jsxs(F,{justify:"space-between",children:[g.jsx(x,{size:"small",children:g.jsx(m,{id:"KunYtelsePanel.OverskriftBesteberegning"})}),u&&g.jsx("a",{className:km.navetLink,href:mm,target:"_blank",rel:"noopener noreferrer",children:g.jsx(m,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})]}),t&&g.jsx(zm,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:a})]})})})]})};rt.buildInitialValues=e=>({[Kt]:e.erBesteberegning});rt.transformValues=e=>!!e[Kt];const Ec=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>g.jsxs(B,{gap:"4",children:[g.jsx(x,{size:"medium",children:g.jsx(m,{id:"KunYtelsePanel.RapporterteInntekter"})}),g.jsx(zm,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),$t="brukersAndelBG",tt=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{kunYtelse:s}=n,l=s==null?void 0:s.fodendeKvinneMedDP;return g.jsxs("div",{children:[l&&g.jsx(rt,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:$t,skalViseInntektstabell:t,kodeverkSamling:a}),!l&&t&&g.jsx(Ec,{readOnly:e,brukersAndelFieldArrayName:$t,isAksjonspunktClosed:r,kodeverkSamling:a})]})};tt.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const a=e.andeler.map(l=>{const o=n.find(k=>k.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const u=l.fastsattBelopPrMnd!==null?V(l.fastsattBelopPrMnd):"";return{...Mm(o,r,t),fastsattBelop:u??""}}),s={[$t]:a};return e.fodendeKvinneMedDP?{...rt.buildInitialValues(e),...s}:s};tt.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[$t].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:ge(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?rt.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:Ut,VURDER_BESTEBEREGNING:Nc}=O,qc=(e,n,r,t,a,s,l)=>{n.includes(Ut)&&e.push(g.jsxs(B,{gap:"4",children:[g.jsx(tt,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:a,kodeverkSamling:s}),l()]},"FASTSETT_BG_KUN_YTELSE"))},Sc=(e,n,r)=>{if(r.includes(Ut)&&n){const t=tt.transformValues(e,n),a=[Ut];return n!=null&&n.fodendeKvinneMedDP&&a.push(Nc),{faktaOmBeregningTilfeller:a,...t}}return{}},Pc=(e,n,r,t,a)=>n&&n.includes(Ut)?tt.buildInitialValues(e,r,t,a):{},jl="erSNNyIArbeidslivet",at=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${jl}`,validate:[W],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:on})})};at.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===te.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[jl]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};at.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[jl]}});const Bc="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",cl=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",tu=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return xn(r,e.eksternArbeidsforholdId)},Rt=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},st=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,a=$.useContext(Re),s=z();return!t||t.length===0?null:g.jsx(B,{gap:"6",children:t.map(l=>g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:Bc,values:{navn:tu(Rt(l.arbeidsforhold),r),fom:N(Rt(l.arbeidsforhold).startdato).format(se),tom:N(Rt(l.arbeidsforhold).opphoersdato).format(se)}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsx(m,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${a}.tidsbegrensetValues.${cl(l)}`,isReadOnly:e,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[W],parse:on})},`fastsettTidsbegrensedeForhold_${tu(Rt(l.arbeidsforhold),r)}`))})};st.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[cl(r)]=r.erTidsbegrensetArbeidsforhold)}),n};st.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const a=cl(t),s=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[a];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:s,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const hl="vurderMilitær",it=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${hl}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[W],parse:on})})};it.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[hl]=e.vurderMilitaer.harMilitaer),n};it.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[hl]}});const Fc=[O.VURDER_NYOPPSTARTET_FL,O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],xc=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",wc=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let s;return a?s=xn(a,e.eksternArbeidsforholdId):s=e.arbeidsforholdType?(t=n[sn.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",g.jsx(m,{id:xc(),values:{arbeid:s}})},_c=(e,n,r,t,a,s)=>g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[e.arbeidsforhold&&wc(e.arbeidsforhold,r,t),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${a}.vurderMottarYtelseValues.${tr(e)}`,isReadOnly:n,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on,validate:n?[]:[W]})}),Oc=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",Dc=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",Vc=e=>e.some(n=>Fc.includes(n))?Oc():Dc(),yi=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),lt=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a})=>{const s=$.useContext(Re),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,u=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],k=z();return g.jsxs(g.Fragment,{children:[o&&!yi(r)&&g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:Vc(r)}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${Yn()}`,isReadOnly:e,radios:[{value:"true",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on,validate:e?[]:[W]}),g.jsx(B,{gap:"6",children:u.map(v=>g.jsx($.Fragment,{children:_c(v,e,t,a,s,k)},tr(v)))})]})},Mc=(e,n,r,t,a,s)=>{var l,o;if(n===null)return{};if(Oj(e,r.vurderMottarYtelse)){const u=[],k=Dm(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(v=>{var f;if(v.andelsnr&&k[v.andelsnr]&&!a.includes(v.andelsnr)){const b=(f=n.find(y=>y.andelsnr===v.andelsnr))==null?void 0:f.fastsattBelop;(b||b===0)&&(u.push({andelsnr:v.andelsnr,fastsattBeløp:ge(b)}),a.push(v.andelsnr))}}),u.length>0?(s.push(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:u}}):{}}return{}},Gc=(e,n,r,t,a)=>{var s;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[Yn()]){const l=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(o=>o.aktivitetStatus===te.FRILANSER);if(l&&!t.includes(l.andelsnr)&&Om(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),a.push(O.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:ge(o.fastsattBelop)}}}return{}}return{}},Lc=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},Kc=(e,n,r)=>{var t;const a=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(O.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[Yn()],arbeidstakerUtenIMMottarYtelse:a.map(s=>({andelsnr:Lc(s.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[tr(s)]}))}}};lt.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||yi(n))&&(r[Yn()]=yi(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(a=>{r[tr(a)]=a.mottarYtelse}),r};lt.transformValues=(e,n,r,t,a)=>{const s=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_MOTTAR_YTELSE)?{...Kc(e,r,s),...Mc(e,n,r,t,a,s),...Gc(e,n,t,a,s),faktaOmBeregningTilfeller:s}:{}};const $c="_aksjonspunktBoks_tufis_1",Uc={aksjonspunktBoks:$c},Hc=({children:e})=>g.jsx("div",{className:Uc.aksjonspunktBoks,children:e}),Yc="_slettIkon_1sqjy_1",Cc="_rightAlignInput_1sqjy_7",zc="_readOnlyContainer_1sqjy_36",Jc="_readOnlyContent_1sqjy_39",Wc="_storBredde_1sqjy_44",Zc="_mediumBredde_1sqjy_47",Qc="_litenBredde_1sqjy_50",Xc="_inntekt_1sqjy_53",eh="_inntektNew_1sqjy_57",nh="_inntektOld_1sqjy_61",rh="_inntektOldStrikethrough_1sqjy_64",th="_saksbehandlerIcon_1sqjy_72",_e={slettIkon:Yc,rightAlignInput:Cc,readOnlyContainer:zc,readOnlyContent:Jc,storBredde:Wc,mediumBredde:Zc,litenBredde:Qc,inntekt:Xc,inntektNew:eh,inntektOld:nh,inntektOldStrikethrough:rh,saksbehandlerIcon:th},ah=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},sh=e=>e.map(n=>g.jsx("option",{value:n.kode,children:n.navn},n.kode)),ih=e=>e[sn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),lh=()=>g.jsx(Yr,{size:"small",children:"Må fastsettes"}),oh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:a,removeAndel:s,beregningsgrunnlag:l,kodeverkSamling:o,rowName:u,skalFastsetteInntektForAndel:k})=>{var v,f,b,y,j,I,h,R;const E=z(),{getValues:q}=he(),S=$.useContext(Re),P=q(`vurderFaktaBeregningForm.${S}`),D=pa(e),_=Gm(e),U=Lm(e),Y=Km(e),w=va(e),M=mr(P,l)(e),L=D&&M&&((v=P==null?void 0:P.frilansInntektValues)==null?void 0:v.fastsattBelop),K=w&&M&&e.arbeidsgiverId&&!!Lt(P==null?void 0:P.arbeidstakerInntektValues,e.arbeidsgiverId),H=_&&M&&((f=P==null?void 0:P.dagpengerInntektValues)==null?void 0:f.fastsattBelop),C=U&&M&&((b=P==null?void 0:P.selvstendigNæringsdrivendeInntektValues)==null?void 0:b.fastsattBelop),le=Y&&M&&((y=P==null?void 0:P.militærEllerSivilInntektValues)==null?void 0:y.fastsattBelop),je=D&&M&&!((j=P==null?void 0:P.frilansInntektValues)!=null&&j.fastsattBelop)||w&&M&&e.arbeidsgiverId&&!Lt(P==null?void 0:P.arbeidstakerInntektValues,e.arbeidsgiverId)||_&&M&&!((I=P==null?void 0:P.dagpengerInntektValues)!=null&&I.fastsattBelop)||U&&M&&!((h=P==null?void 0:P.selvstendigNæringsdrivendeInntektValues)!=null&&h.fastsattBelop)||Y&&M&&!((R=P==null?void 0:P.militærEllerSivilInntektValues)!=null&&R.fastsattBelop),Pe=L||K||H||C||le,He=jn(P),Ye=rc(l)(e),J=ih(o),Z=e.arbeidsperiodeFom||e.arbeidsperiodeTom,de=()=>K&&P.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${S}.arbeidstakerInntektValues.${fi(P.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:L?`vurderFaktaBeregningForm.${S}.frilansInntektValues.fastsattBelop`:H?`vurderFaktaBeregningForm.${S}.dagpengerInntektValues.fastsattBelop`:C?`vurderFaktaBeregningForm.${S}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:le?`vurderFaktaBeregningForm.${S}.militærEllerSivilInntektValues.fastsattBelop`:"";return g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{children:g.jsx(ve,{size:"small",name:`${u}.andel`,className:_e.storBredde,readOnly:!0})}),g.jsx(c.DataCell,{children:n&&Z&&e.arbeidsperiodeFom&&g.jsx(gp,{value:g.jsx(Ge,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!He&&g.jsx(c.DataCell,{align:"right",children:g.jsxs("div",{className:_e.inntekt,children:[g.jsx("div",{className:Pe?_e.inntektOldStrikethrough:_e.inntektOld,children:je?lh():g.jsx(ve,{size:"small",name:`${u}.belopReadOnly`,className:_e.mediumBredde,parse:Fe,readOnly:!0})}),Pe&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:_e.inntektNew,children:g.jsx(ve,{size:"small",name:de(),className:_e.mediumBredde,parse:Fe,readOnly:!0})}),g.jsx(tp,{title:"Endret av saksbehandler",className:_e.saksbehandlerIcon})]})]})}),He&&g.jsx(c.DataCell,{align:"right",className:_e.rightAlignInput,children:g.jsx(ve,{size:"small",label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${u}.fastsattBelop`,parse:Fe,className:_e.mediumBredde,validate:k(e)?[W,Qe(178956970)]:[],hideLabel:!0})}),r&&g.jsx(c.DataCell,{align:"right",children:g.jsx(ve,{size:"small",name:`${u}.refusjonskrav`,className:_e.litenBredde,readOnly:!0,parse:Fe})}),g.jsx(c.DataCell,{align:"right",children:g.jsx(ta,{label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${u}.inntektskategori`,className:_e.storBredde,selectValues:sh(J),validate:a?[]:[W],readOnly:a||!Ye,size:"small",hideLabel:!0})}),t&&g.jsx(c.DataCell,{children:g.jsx(ee,{icon:g.jsx(Kn,{"aria-hidden":!0,className:_e.slettIkon}),onClick:()=>s(),type:"button",variant:"tertiary"})})]})},dh=(e,n,r)=>{let t=0;return e.forEach(a=>{var s,l,o,u,k,v;let f;if(mr(n,r)(a)){const b=pa(a),y=va(a),j=Gm(a),I=Lm(a),h=Km(a);a.fastsattBelop&&jn(n)?f=a.fastsattBelop:b&&(s=n==null?void 0:n.frilansInntektValues)!=null&&s.fastsattBelop?f=n.frilansInntektValues.fastsattBelop:y&&a.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[fi(n.arbeidstakerInntektValues,a.arbeidsgiverId)])!=null&&o.fastsattBelop?f=n.arbeidstakerInntektValues[fi(n.arbeidstakerInntektValues,a.arbeidsgiverId)].fastsattBelop:j&&(u=n==null?void 0:n.dagpengerInntektValues)!=null&&u.fastsattBelop?f=n.dagpengerInntektValues.fastsattBelop:I&&(k=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&k.fastsattBelop?f=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:h&&(v=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&v.fastsattBelop?f=n.militærEllerSivilInntektValues.fastsattBelop:a.fastsattBelop&&!jn(n)?f=0:f=a.fastsattBelop}else f=a.belopReadOnly;t+=f?ge(f):0}),t>0?t:0},uh=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:a,getValues:s}=he(),l=$.useContext(Re),o=s(`vurderFaktaBeregningForm.${l}`),u=_r({control:a,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),k=u?dh(u,o,t):0;return g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{children:g.jsx(x,{as:"p",size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&g.jsx(c.DataCell,{}),g.jsx(c.DataCell,{align:"right",children:g.jsx("div",{className:_e.readOnlyContainer,children:g.jsx(x,{as:"p","data-testid":"sum",className:r?_e.readOnlyContent:"",size:"small",children:V(k)})})}),n&&g.jsx(c.DataCell,{}),g.jsx(c.DataCell,{})]})},Jm=(e,n)=>{var r;const t=(r=e.find(({kode:a})=>a===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},gh=e=>({andel:Jm(e,te.DAGPENGER),aktivitetStatus:te.DAGPENGER,fastsattBelop:"",inntektskategori:da.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),mh=e=>({andel:Jm(e,te.MILITAER_ELLER_SIVIL),aktivitetStatus:te.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:da.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),kh=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,bi=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},ji=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},vh=(e,n)=>()=>{n(e)},ph=(e,n,r)=>g.jsx(uh,{readOnly:n,skalVisePeriode:ji(e),skalViseRefusjon:bi(e),beregningsgrunnlag:r},"summaryRow"),fh=(e,n)=>{let r=-1;return e.forEach((t,a)=>{t.aktivitetStatus===n&&(r=a)}),r},Wm=(e,n,r,t,a,s,l)=>{const o=fh(e,n);if(o!==-1){const u=e[o];t(u)&&s(o)}o===-1&&r&&l({...a})},au=e=>e===te.FRILANSER,su=e=>e===te.ARBEIDSTAKER,iu=e=>e===te.DAGPENGER,lu=e=>e===te.SELVSTENDIG_NAERINGSDRIVENDE,ou=e=>e===te.MILITAER_ELLER_SIVIL,yh=(e,n,r,t,a,s)=>{Wm(e,te.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,gh(r),a,s)},bh=(e,n,r,t,a,s)=>{Wm(e,te.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,mh(r),a,s)},jh=(e,n)=>dc(e,n)??null,ch=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?lc(t,r)||(jn(e)?jh(t,r):null):void 0},ot=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var a,s;const{getValues:l,control:o,formState:u}=he(),{errors:k}=u,v=$.useContext(Re),f=`vurderFaktaBeregningForm.${v}.inntektFieldArray`,{fields:b,remove:y,append:j,update:I}=Ze({control:o,name:f}),h=_r({control:o,name:`vurderFaktaBeregningForm.${v}`}),R=_r({control:o,name:`vurderFaktaBeregningForm.${v}.vurderbesteberegningField`}),E=_r({control:o,name:`vurderFaktaBeregningForm.${v}.vurderMilitær`}),q=z(),S=A.useCallback(()=>mr(h,r),[h,r]);A.useEffect(()=>{const L=l(`vurderFaktaBeregningForm.${v}.inntektFieldArray`),K=t[sn.AKTIVITET_STATUS];L&&(bh(L,!!E,K,S,y,j),yh(L,!!R,K,n,y,j))},[R,E,n]);const P=(L,K)=>{I(L,{...b[L],kanRedigereInntekt:K})};A.useEffect(()=>{b.forEach((L,K)=>{const H=L.kanRedigereInntekt,C=mr(h,r)(L);!(!R&&!n&&L.lagtTilAvSaksbehandler)&&H!==C&&P(K,C)})},[h]);const D=(s=(a=k==null?void 0:k.vurderFaktaBeregningForm)==null?void 0:a[v])==null?void 0:s.inntektFieldArray,_=ch(h,D,q),U=`${f}.skjemagruppe`,Y=ra(U,_??void 0),w=r.faktaOmBeregning;if(!w)return null;const M=b.map((L,K)=>g.jsx(oh,{field:L,skalVisePeriode:ji(b),skalViseRefusjon:bi(b),skalViseSletteknapp:kh(K,b,e),readOnly:e,removeAndel:vh(K,y),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${f}.${K}`,skalFastsetteInntektForAndel:Hm(h,w,r)},L.id));return M.length===0?null:(M.push(ph(b,e,r)),g.jsxs(B,{gap:"2",children:[g.jsxs(c,{size:"small",children:[g.jsx(c.Header,{children:g.jsx(c.Row,{children:ah(ji(b),bi(b)).map(L=>{const K=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(L);return g.jsx(c.HeaderCell,{scope:"col",align:K?"right":"left",children:g.jsx(x,{size:"small",as:"span",children:g.jsx(m,{id:L})})},L)})})}),g.jsx(c.Body,{children:M})]}),Y&&g.jsx(Yr,{children:Y})]}))};ot.transformValues=(e,n,r,t,a,s,l)=>{if(!e)return[];const o=u=>{const k=l&&u.fastsattBelop||au(u.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||su(u.aktivitetStatus)&&u.arbeidsgiverId&&Lt(r,u.arbeidsgiverId)||iu(u.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||lu(u.aktivitetStatus)&&(a==null?void 0:a.fastsattBelop)||ou(u.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||u.fastsattBelop;return{andelsnr:u.andelsnr,fastsattBelop:ge(k),inntektskategori:u.inntektskategori,nyAndel:u.nyAndel,lagtTilAvSaksbehandler:u.lagtTilAvSaksbehandler,aktivitetStatus:u.aktivitetStatus,arbeidsforholdId:u.arbeidsforholdId,arbeidsgiverId:u.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:u})=>u).filter(({fastsattBelop:u,aktivitetStatus:k,arbeidsgiverId:v})=>u!==null&&u!==""||au(k)&&(n==null?void 0:n.fastsattBelop)||su(k)&&v&&Lt(r,v)||iu(k)&&(t==null?void 0:t.fastsattBelop)||lu(k)&&(a==null?void 0:a.fastsattBelop)||ou(k)&&(s==null?void 0:s.fastsattBelop)).map(o)};ot.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>pi(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:hh}=O,Ah="erKravGyldig_",Al=e=>Ah+e,Ih=(e,n,r,t)=>e.map(a=>{const{arbeidsgiverIdent:s}=a,l=r[s],o=l?xn(l):s,u=z();return g.jsx($.Fragment,{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsx(m,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${Al(s)}`,validate:[W],isReadOnly:n,radios:[{value:"true",label:u.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:u.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:on})},s)}),dt=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=$.useContext(Re),a=n==null?void 0:n.refusjonskravSomKommerForSentListe;return a?g.jsx(g.Fragment,{children:Ih(a,e,r,t)}):null};dt.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[Al(r)]}))};dt.buildInitialValues=(e,n)=>{const r={};return!e.includes(hh)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:a})=>{r[Al(t)]=a}),{...r})};const Th=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===sl.KUNSTIG))!==void 0},du=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},Rh=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},Eh=(e,n,r,t,a)=>{const s=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!s.map(u=>u).includes(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!s.map(u=>u).includes(O.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(u=>u.andelsnr&&!a.includes(u.andelsnr)).filter(u=>vm(u,t,u.arbeidsforholdId)||Th(u,t)||Gb(u,r,e));l.forEach(u=>a.push(du(u.andelsnr)));const o=l.map(u=>({andelsnr:du(u.andelsnr),fastsattBeløp:ge(u.fastsattBelop),inntektskategori:Rh(u.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},uu=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},Nh=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(a=>a).includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const a=e.filter(s=>s.andelsnr&&!r.includes(s.andelsnr)).filter(s=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(s.andelsnr)).map(s=>({andelsnr:uu(s.andelsnr),arbeidsinntekt:s.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const s=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});a.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:uu(s==null?void 0:s.fastsattBelop)})}if(a.forEach(s=>r.push(s.andelsnr)),a.length>0)return{faktaOmBeregningTilfeller:[O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:a}}}return{faktaOmBeregningTilfeller:[]}},Ws=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),gu=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s})=>{var l,o,u,k,v,f,b,y,j;const{getValues:I}=he(),h=$.useContext(Re),R=I(`vurderFaktaBeregningForm.${h}`),E=I([`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Yn()}`,`vurderFaktaBeregningForm.${h}.${yn}`]),q=()=>{var J;if(E.includes(!0))return!0;const Z=I([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0),de=(J=e.faktaOmBeregning)==null?void 0:J.andelerForFaktaOmBeregning.some(Ae=>Ae.aktivitetStatus===te.FRILANSER);return Z&&de},S=()=>{var J;const Z=(J=e.faktaOmBeregning)==null?void 0:J.andelerForFaktaOmBeregning.some(de=>de.aktivitetStatus===te.SELVSTENDIG_NAERINGSDRIVENDE);return I([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0)&&Z},P=()=>{var J;const Z=(J=e.faktaOmBeregning)==null?void 0:J.andelerForFaktaOmBeregning.some(de=>de.aktivitetStatus===te.MILITAER_ELLER_SIVIL);return I([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0)&&Z},D=I([`vurderFaktaBeregningForm.${h}.${gr}`,`vurderFaktaBeregningForm.${h}.${Ce}`]),_=D.includes(!0),U=I([`vurderFaktaBeregningForm.${h}.${Bn}`]).includes(!0),Y=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,w=(k=(u=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:u.arbeidstakerAndelerUtenIM)==null?void 0:k.filter(J=>{const Z=I(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues`);return Z==null?void 0:Z[tr(J)]}),M=(f=(v=e.faktaOmBeregning)==null?void 0:v.andelerForFaktaOmBeregning.filter(J=>J.aktivitetStatus===te.ARBEIDSTAKER))==null?void 0:f.filter(J=>mr(R,e)(pi(J,a,s))),L=(b=Ws(t)&&_?Y==null?void 0:Y.filter(J=>!(M!=null&&M.find(Z=>{var de,Ae;return((de=Z.arbeidsforhold)==null?void 0:de.arbeidsgiverIdent)===((Ae=J.arbeidsforhold)==null?void 0:Ae.arbeidsgiverIdent)}))):Y)==null?void 0:b.filter(J=>mr(R,e)(pi({...J,lagtTilAvSaksbehandler:!1},a,s))),K=I(`vurderFaktaBeregningForm.${h}.${Ce}`),H=`vurderFaktaBeregningForm.${h}.frilansInntektValues.fastsattBelop`,C=`vurderFaktaBeregningForm.${h}.dagpengerInntektValues.fastsattBelop`,le=`vurderFaktaBeregningForm.${h}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,je=`vurderFaktaBeregningForm.${h}.militærEllerSivilInntektValues.fastsattBelop`,Pe=(j=(y=e==null?void 0:e.faktaOmBeregning)==null?void 0:y.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:j.some(J=>!!J.inntektPrMnd),He=J=>{var Z,de,Ae,rn;const pe=(Z=J.arbeidsforhold)!=null&&Z.arbeidsgiverIdent?(de=a[J.arbeidsforhold.arbeidsgiverIdent])==null?void 0:de.navn:void 0;return I(`vurderFaktaBeregningForm.${h}.${gr}`)&&D.filter(Be=>Be===!0).length===1?g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${pe} (${(Ae=J.arbeidsforhold)==null?void 0:Ae.arbeidsgiverIdent})`}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${pe} (${(rn=J.arbeidsforhold)==null?void 0:rn.arbeidsgiverIdent})`}})},Ye=()=>{const J=E.filter(Ae=>Ae===!0).length>1,Z=I([`vurderFaktaBeregningForm.${h}.${yn}`]).includes(!0),de=I([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0);return Ws(t)||J||de?g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):I(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Yn()}`)?g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):Z?g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:g.jsx("br",{})}})})]})})]}):null};return g.jsxs(B,{gap:"8",children:[Ws(t)&&g.jsxs(g.Fragment,{children:[g.jsxs(B,{gap:"1",children:[g.jsx(x,{children:g.jsx(m,{id:Pe?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:Pe?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:g.jsx("br",{})}})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})})]}),L==null?void 0:L.map(J=>{var Z;return g.jsx(Or,{arbeidsgiver:J,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:a},(Z=J.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)})]}),q()&&g.jsx(dn,{name:H,readOnly:n,isAksjonspunktClosed:r,label:Ye()}),_||U?M==null?void 0:M.filter(J=>{var Z;return U&&!_?((Z=J.arbeidsforhold)==null?void 0:Z.arbeidsforholdType)===er.ETTERLONN_SLUTTPAKKE:!0}).map(J=>{var Z;return g.jsx(Or,{arbeidsgiver:J,readOnly:n,isAksjonspunktClosed:r,label:He(J),arbeidsgiverOpplysningerPerId:a},(Z=J.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)}):w==null?void 0:w.map(J=>{var Z;return g.jsx(Or,{arbeidsgiver:J,readOnly:n,isAksjonspunktClosed:r,label:He(J),arbeidsgiverOpplysningerPerId:a},(Z=J.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)}),K&&g.jsx(dn,{name:C,readOnly:n,isAksjonspunktClosed:r,label:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})}),S()&&g.jsx(dn,{name:le,readOnly:n,isAksjonspunktClosed:r,label:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})}),P()&&g.jsx(dn,{name:je,readOnly:n,isAksjonspunktClosed:r,label:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})},qh=e=>!e.includes(O.FASTSETT_BG_KUN_YTELSE),Sh=(e,n,r,t)=>g.jsx(ot,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),ut=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:a,kodeverkSamling:s,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:u,arbeidsgiverOpplysningerPerId:k,vilkarsperiodeSkalVurderesIBehandlingen:v})=>{const{getValues:f}=he(),b=$.useContext(Re),y=f(`vurderFaktaBeregningForm.${b}`),j=A.useMemo(()=>Um(y),[y,t,a]),I=A.useMemo(()=>qh(r),[r]),h=()=>{const R=[],E=[];let q=!1;const{faktaOmBeregning:S}=t;return!S||(r.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(q=!0,E.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),R.push(g.jsx($.Fragment,{children:g.jsx(st,{readOnly:e,faktaOmBeregning:S,arbeidsgiverOpplysningerPerId:k})},O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(q=!0,E.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),R.push(g.jsx($.Fragment,{children:g.jsx(at,{readOnly:e})},O.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(q=!0,E.push(O.VURDER_MILITÆR_SIVILTJENESTE),R.push(g.jsx($.Fragment,{children:g.jsx(it,{readOnly:e})},O.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(q=!0,E.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),R.push(g.jsx($.Fragment,{children:g.jsx(dt,{readOnly:e,arbeidsgiverOpplysningerPerId:k,faktaOmBeregning:S})},O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(O.VURDER_LONNSENDRING)&&(q=!0,E.push(O.VURDER_LONNSENDRING),R.push(g.jsx($.Fragment,{children:g.jsx(Zr,{readOnly:e})},O.VURDER_LONNSENDRING))),r.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(q=!0,E.push(O.VURDER_ETTERLONN_SLUTTPAKKE),R.push(g.jsx($.Fragment,{children:g.jsx(nt,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},O.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(O.VURDER_NYOPPSTARTET_FL)&&(q=!0,E.push(O.VURDER_NYOPPSTARTET_FL),R.push(g.jsx($.Fragment,{children:g.jsx(Qr,{readOnly:e})},O.VURDER_NYOPPSTARTET_FL))),r.includes(O.VURDER_BESTEBEREGNING)&&!r.includes(O.FASTSETT_BG_KUN_YTELSE)&&(q=!0,E.push(O.VURDER_BESTEBEREGNING),R.push(g.jsx($.Fragment,{children:g.jsx(Wr,{readOnly:e,erOverstyrt:j})},O.VURDER_BESTEBEREGNING))),(r.includes(O.VURDER_MOTTAR_YTELSE)||r.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(q=!0,E.push(O.VURDER_MOTTAR_YTELSE),R.push(g.jsx($.Fragment,{children:g.jsx(lt,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:k})},O.VURDER_MOTTAR_YTELSE))),!v)?null:q?e?g.jsxs(g.Fragment,{children:[R.map((P,D)=>g.jsx(B,{gap:"8",children:P},E[D])),g.jsx(gu,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:k,kodeverkSamling:s}),u()]}):g.jsx(Hc,{children:g.jsxs(B,{gap:"4",children:[R.map((P,D)=>g.jsx(B,{gap:"8",children:P},E[D])),!jn(y)&&g.jsx(gu,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:k,kodeverkSamling:s}),u()]})}):jn(y)?u():null};return g.jsxs(B,{gap:"8",children:[g.jsx(dl,{tabell:Sh(e,t,s,j),skalViseTabell:I,readOnly:e,erOverstyrer:l,avklaringsbehov:a,updateOverstyring:o,erOverstyrt:j},"inntektstabell"),h()]})};ut.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const a=e.andelerForFaktaOmBeregning;return a.length===0?{}:{[Vm]:ot.buildInitialValues(a,r,t),...dl.buildInitialValues(n)}};const Vn=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},Ph=e=>{if(!e)throw new Error("Forventer andelsnr");return e},Bh=(e,n,r,t)=>{if(jn(e)){const a=r.filter(s=>!t.includes(Ph(s.andelsnr))).filter(s=>s.fastsattBelop!=null).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,aktivitetStatus:s.aktivitetStatus,lagtTilAvSaksbehandler:s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:s.inntektskategori}}));return{fakta:n,overstyrteAndeler:a}}return{fakta:n}},Fh=(e,n,r,t,a)=>{const s=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(s.length>0){l=Vn(l,Fb(t)(e,n));const o=e[Ce]===!0;l=Vn(l,Qr.transformValues(e,o?null:n,t,r)),l=Vn(l,nt.transformValues(e,o?null:n,t,r)),l=Vn(l,Zr.transformValues(e,t)),l=Vn(l,lt.transformValues(e,o?null:n,t,a,r)),l=Vn(l,Nh(o?null:n,t,r)),l=Vn(l,Eh(e,o?null:n,t,a,r))}return l};ut.transformValues=(e,n)=>r=>{const t=ot.transformValues(r[Vm],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),a=[],s=Fh(r,t,a,e,n);return Bh(r,s,t,a)};const{VURDER_FAKTA_FOR_ATFL_SN:xh}=fe,mu=e=>{var n;return((n=On(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},ku=e=>{var n;return((n=On(e))==null?void 0:n.kunYtelse)||void 0},vu=e=>{var n;return((n=On(e))==null?void 0:n.vurderMottarYtelse)||void 0},wh=e=>{var n;return((n=On(e))==null?void 0:n.vurderBesteberegning)||void 0},_h=e=>{var n;return((n=On(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},Oh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:u})=>{const{avklaringsbehov:k}=r,v=bl(r),f=On(r),b=[];return qc(b,v,e,n,f,t,o),b.push(g.jsx($.Fragment,{children:g.jsx(ut,{readOnly:e,isAksjonspunktClosed:n,tilfeller:v,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,avklaringsbehov:k,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:s,vilkarsperiodeSkalVurderesIBehandlingen:u})},"VurderOgFastsettATFL")),b},Dh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:u})=>g.jsx("div",{children:Oh({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:u}).map(k=>k)}),Vh=(e,n)=>r=>Sc(r,e.kunYtelse,n),Mh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...at.transformValues(n)}},Gh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...st.transformValues(r,e)}},Lh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_MILITÆR_SIVILTJENESTE),{...e,...it.transformValues(n)}},Kh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...dt.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},$h=(e,n,r,t,a)=>(s,l)=>{let o={...s};return e.forEach(u=>{u===O.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),u===O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),u===O.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),u===O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=a(o,l))}),o},Uh=(e,n,r)=>t=>e.includes(O.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},Hh=(e,n,r,t,a)=>{const s=Uh(e,Vh(t,e),ut.transformValues(t,a))(n);return{fakta:$h(e,Mh,Gh(r),Lh,Kh(t))(s.fakta,n),overstyrteAndeler:s.overstyrteAndeler}},Yh=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:a}=e;return Hh(n,e,r,t,a)},Ch=e=>e?e.find(n=>n.definisjon===xh):void 0,zh=(e,n,r)=>{const t=bl(e),a=On(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:a,kortvarigeArbeidsforhold:mu(e),vurderMottarYtelse:vu(e),kunYtelse:ku(e),tidsbegrensetValues:st.buildInitialValues(mu(e)),vurderMottarYtelseValues:lt.buildInitialValues(vu(e),t),arbeidstakerInntektValues:Or.buildInitialValues(a.andelerForFaktaOmBeregning),frilansInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.FRILANSER),dagpengerInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.DAGPENGER),selvstendigNæringsdrivendeInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.MILITAER_ELLER_SIVIL),vurderRefusjonValues:dt.buildInitialValues(t,_h(e)),...it.buildInitialValues(a),...at.buildInitialValues(e),...Zr.buildInitialValues(e),...Qr.buildInitialValues(e),...nt.buildInitialValues(e,Ch(e.avklaringsbehov)),...Wr.buildInitialValues(e.avklaringsbehov,wh(e),t,ru(e)),...ut.buildInitialValues(a,ru(e),r,n),...Pc(ku(e),t,a.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:ci,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:hi}=fe,Ht=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Jh=(e,n)=>e||Ht(ci,n),pu=(e,n)=>{const r=e[ur];if(n&&!r&&Ht(hi,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!Jh(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...Yh(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},Wh=(e,n=!0)=>{const r=e[un],t=r.filter(l=>l.erTilVurdering).filter(l=>l[ur]||Ht(hi,l.avklaringsbehov||[])).map(l=>pu(l,!0)).filter(l=>l),a=r.filter(l=>l.erTilVurdering).filter(l=>(!l[ur]||n)&&Ht(ci,l.avklaringsbehov||[])).map(l=>pu(l,!1)).filter(l=>l),s=[];if(t.length>0){const l=t.filter(({begrunnelse:u})=>u!==null).map(({begrunnelse:u})=>u).reduce((u,k)=>u===""?k:`${u} ${k}`,""),o={kode:hi,begrunnelse:l!==""?l:null,grunnlag:t};s.push(o)}if(a.length>0){const l=a.map(({begrunnelse:u})=>u).reduce((u,k)=>u===""?k:`${u} ${k}`,""),o={kode:ci,begrunnelse:l,grunnlag:a};s.push(o)}return s},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Zm,VURDER_FAKTA_FOR_ATFL_SN:Ai}=fe,Qm="begrunnelseFaktaTilfeller",Zh=(e,n,r)=>e&&n&&!r,Qh=(e,n)=>Gn(Ai,n)||Gn(Zm,n)?!e:!0,fu=(e,n)=>{const r=n(`${un}.${e}`);return Um(r)},yu=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},Xh=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,submittable:s,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:u,submitDisabled:k})=>{const{getValues:v,formState:{errors:f,isDirty:b}}=he(),y=$.useContext(gm),j=$.useContext(Re),I=j===y,{avklaringsbehov:h}=e,R=h.find(S=>S.definisjon===fe.VURDER_FAKTA_FOR_ATFL_SN||S.definisjon===fe.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),E=o.vurderesIBehandlingen,q=()=>g.jsx(g.Fragment,{children:(Gn(Ai,h)||Gn(Zm,h)||fu(j,v))&&g.jsxs(B,{gap:"6",children:[(Gn(Ai,h)||fu(j,v))&&g.jsxs(g.Fragment,{children:[g.jsx(jr,{name:`${un}.${j}.${Qm}`,isSubmittable:s,isReadOnly:r||!E,hasBegrunnelse:!!(R!=null&&R.begrunnelse)}),g.jsx(En,{ident:R==null?void 0:R.vurdertAv,date:R==null?void 0:R.vurdertTidspunkt})]}),g.jsx(F,{children:g.jsx(Pg,{isSubmittable:Zh(s&&Qh(u,h),!0,yu(j,f))&&!u,isReadOnly:r||!E,isDirty:b,isSubmitting:k,hasErrors:yu(j,f)})})]})});return g.jsx("div",{style:{display:I?"block":"none"},children:g.jsx(Dh,{readOnly:r||!E,isAksjonspunktClosed:Ym(h),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:a,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>q(),vilkarsperiodeSkalVurderesIBehandlingen:E})},j)},{VURDER_FAKTA_FOR_ATFL_SN:Xm,AVKLAR_AKTIVITETER:eA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Yt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:nA}=fe,rA=e=>e.some(n=>n.definisjon===Yt)?e.find(n=>n.definisjon===Yt&&n.begrunnelse!==null):e.find(n=>n.definisjon===Xm&&n.begrunnelse!==null),bu=(e,n)=>n.some(r=>r.definisjon===e&&oa(r.status)),tA=(e,n,r,t)=>({[un]:e.map(a=>{var s;const l=t.perioder.find(o=>o.periode.fom===a.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${a.vilkårsperiodeFom}`);return{avklaringsbehov:a.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...jr.buildInitialValues((s=rA(a.avklaringsbehov))==null?void 0:s.begrunnelse,Qm),...zh(a,n,r)}})}),aA=[Xm,Yt],sA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},iA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:u,formData:k,vilkar:v,avklarAktiviteterErEndret:f,skalKunneAvbryteOverstyring:b})=>{const y=f,j=e.flatMap(H=>H.avklaringsbehov),I=$e({defaultValues:k||tA(e,t,s,v)}),{control:h,formState:R,trigger:E,getValues:q,watch:S}=I,{fields:P,update:D}=Ze({name:un,control:h}),{errors:_,isSubmitted:U}=R,[Y,w]=A.useState(!1),M=S(un);A.useEffect(()=>{U&&E()},[JSON.stringify(M)]);const L=(H,C)=>{const le=q(`${un}.${H}`);D(H,{...le,[ur]:C})},K=H=>{Object.keys(_).length===0?(w(!0),o(Wh(H,b))):console.error(_)};return bu(eA,j)||bu(nA,j)?null:g.jsx(gm.Provider,{value:l,children:g.jsx(Ue,{formMethods:I,onSubmit:H=>{K(H)},setDataOnUnmount:u,children:P.map((H,C)=>{const le=J=>aA.some(Z=>Z===J.definisjon),je=J=>J.kanLoses,Pe=j.filter(J=>le(J)&&je(J)),He=r||sA(e[C],v.perioder)||ze(Yt,j)&&!a||Pe.length===0&&!a,Ye=v.perioder.find(J=>J.periode.fom===e[C].vilkårsperiodeFom);if(!Ye)throw new Error(`Filler ikke vilkårsperiode med fom ${e[C].vilkårsperiodeFom}`);return g.jsx(Re.Provider,{value:C,children:g.jsx(Xh,{vilkarsperiode:Ye,beregningsgrunnlag:e[C],erOverstyrer:a,readOnly:He,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:n,updateOverstyring:L,submitDisabled:Y,verdiForAvklarAktivitetErEndret:y},H.id)},H.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:lA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:ek,AVKLAR_AKTIVITETER:oA}=fe,dA=[ek,oA],uA=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:u,arbeidsgiverOpplysningerPerId:k,setFormData:v,formData:f,vilkar:b,skalKunneAvbryteOverstyring:y})=>{const j=n.filter(E=>dA.some(q=>q===E.definisjon)&&E.kanLoses),I=e||(j.length===0||ze(ek,n))&&!l,[h,R]=A.useState(!1);return g.jsxs(B,{gap:ze(lA,n)?"0":"2",children:[g.jsx("div",{children:g.jsx(qb,{readOnly:I,submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:u,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:k,setFormData:v,formData:f&&Ur in f?f:void 0,vilkår:b,setAvklarAktiviteterErEndret:R})}),g.jsx(iA,{submitCallback:t,submittable:r,kodeverkSamling:u,beregningsgrunnlag:s,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:k,aktivtBeregningsgrunnlagIndeks:a,setFormData:v,formData:f&&un in f?f:void 0,vilkar:b,avklarAktiviteterErEndret:h,skalKunneAvbryteOverstyring:y})]})},gA="_tabsContainer_1yyvp_1",mA="_main_1yyvp_9",ju={tabsContainer:gA,main:mA},kA=Me(tm),{VURDER_FAKTA_FOR_ATFL_SN:nk,AVKLAR_AKTIVITETER:vA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:pA}=fe,fA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},yA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:a})=>a.fom===r);if(t){const{fom:a,tom:s}=t.periode;return s!==null?`${N(a).format(se)} - ${N(s).format(se)}`:`${N(a).format(se)} - `}return`${N(r).format(se)}`},bA=e=>{if(e){const n=e.some(t=>t.definisjon===nk&&t.kanLoses),r=e.some(t=>t.definisjon===vA&&t.kanLoses);return n||r}return!1},Zs=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return bA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},tn=e=>g.jsx(ie,{size:"xsmall",level:"3",children:e},"h3"),jA=(e,n)=>{var r,t,a,s,l,o;const u=bl(e),k=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),v=[],f=[];if(u.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const b=(s=(a=e==null?void 0:e.faktaOmBeregning)==null?void 0:a.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:s.some(y=>!!y.inntektPrMnd);f.push(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:b?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:tn}})}))}if(u.includes(O.VURDER_LONNSENDRING)&&(f.push(O.VURDER_LONNSENDRING),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:tn}})}))),k&&u.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_frilans`),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:tn}})}))),!k&&u.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_arbeidstaker`),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:tn}})}))),u.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(f.push(O.VURDER_ETTERLONN_SLUTTPAKKE),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:tn}})}))),u.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){f.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const b=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let y="";b.forEach((j,I)=>{var h;const R=(h=j.arbeidsforhold)==null?void 0:h.arbeidsgiverIdent;if(!R)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const E=n[R],q=E?xn(E):R;I===0?y=q:y=`${y}, ${q}`}),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:y,h3:tn}})}))}if(u.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(f.push(O.VURDER_MILITÆR_SIVILTJENESTE),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:tn}})}))),u.includes(O.FASTSETT_BG_KUN_YTELSE)&&(f.push(O.FASTSETT_BG_KUN_YTELSE),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsxs(B,{gap:"1",children:[g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:tn}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]})}))),u.includes(O.VURDER_NYOPPSTARTET_FL)&&(f.push(O.VURDER_NYOPPSTARTET_FL),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:tn}})}))),u.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(f.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:tn}})}))),u.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const b=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let y="";b.forEach((j,I)=>{const{arbeidsgiverIdent:h}=j,R=n[h],E=R?xn(R):h;I===0?y=E:y=`${y}, ${E}`}),f.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:y,h3:tn}})}))}return v.length>0?g.jsx(B,{gap:"4",children:v.map((b,y)=>g.jsx($.Fragment,{children:b},f[y]))}):g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},cA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,vilkar:v,skalKunneAvbryteOverstyring:f=!1})=>{const[b,y]=A.useState(0),j=v==null?void 0:v.perioder;if(A.useEffect(()=>{if(j){const E=e==null?void 0:e.findIndex(q=>Zs(q,j));E>-1&&y(E)}},[]),e.length===0||!v)return g.jsx(g.Fragment,{children:"Har ikke beregningsgrunnlag."});const I=e.length>1,h=e[b],R=h.avklaringsbehov;return g.jsx(De,{value:kA,children:g.jsx("div",{className:ju.main,children:g.jsxs(B,{gap:"4",children:[g.jsx(ie,{size:"small",level:"2",children:g.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Gn(nk,R)||Gn(pA,R))&&!Ym(R)&&g.jsx(g.Fragment,{children:jA(h,o)}),I&&g.jsx("div",{className:ju.tabsContainer,children:g.jsx(ir,{value:b.toString(),onChange:E=>y(Number(E)),children:g.jsx(ir.List,{children:e.map((E,q)=>g.jsx(ir.Tab,{value:q.toString(),label:yA(E,j),className:Zs(E,j)?"harAksjonspunkt":"",icon:Zs(E,j)&&g.jsx(yr,{width:20,height:20,color:"Orange"})},E.skjaeringstidspunktBeregning))})})}),g.jsx(uA,{aktivtBeregningsgrunnlagIndeks:b,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:R,submitCallback:r,readOnly:t||fA(e[b],j),submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:k,formData:u,vilkar:v,skalKunneAvbryteOverstyring:f})]})})})},hA=[re.VURDER_FAKTA_FOR_ATFL_SN,re.AVKLAR_AKTIVITETER,re.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,re.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],AA=[re.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,re.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],IA=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r,rettigheter:t}=A.use(Rn),a=Qn(hA,AA),s=Tn(r),{data:l,isFetching:o}=In(s.beregningsgrunnlagOptions(r));return i.jsx(Xn,{standardPanelProps:a,faktaPanelKode:Zn.BEREGNING,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:Og(r,"BEREGNINGSGRUNNLAG"),children:o?i.jsx(An,{}):i.jsx(TA,{kodeverkSamling:a.alleKodeverk,vilkar:NA(r==null?void 0:r.vilkår,l),beregningsgrunnlag:qA(l),submitCallback:EA(a.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:t.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:a.readOnly,submittable:a.submittable})})},TA=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=wn();return i.jsx(cA,{...e,formData:n,setFormData:r})},RA=e=>{switch(e){case fe.AVKLAR_AKTIVITETER:return re.AVKLAR_AKTIVITETER;case fe.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return re.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case fe.VURDER_FAKTA_FOR_ATFL_SN:return re.VURDER_FAKTA_FOR_ATFL_SN;case fe.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return re.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},EA=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:RA(a.kode),...a.grunnlag[0]}));return e(t)},NA=(e,n)=>{if(!e)return null;const r=e.find(a=>a.vilkarType&&a.vilkarType===Hn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[{avslagKode:r.avslagKode??void 0,vurderesIBehandlingen:!0,periode:{fom:n?n.skjaeringstidspunktBeregning:"",tom:Se},merknadParametere:{},vilkarStatus:r.vilkarStatus}]}},qA=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];IA.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Ve=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))(Ve||{});function rk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cu={exports:{}},Sr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu;function SA(){if(hu)return Sr;hu=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Sr.Fragment=n,Sr.jsx=r,Sr.jsxs=r,Sr}var Au;function PA(){return Au||(Au=1,cu.exports=SA()),cu.exports}var p=PA();function gt(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function ar(e,n){return gt(e,n).vurderesIBehandlingen}var kr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(kr||{}),Ii=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(Ii||{}),ue=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ue||{});const Il=e=>e==="OPPR";var Hr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(Hr||{}),mt=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(mt||{});const BA=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],FA=e=>BA.some(n=>n===e),xA="_begrunnelseTextField_1wq9u_1",wA="_explanationTextarea_1wq9u_4",_A="_explanationTextareaReadOnly_1wq9u_7",Qs={begrunnelseTextField:xA,explanationTextarea:wA,explanationTextareaReadOnly:_A},Tl={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":'Utgangspunktet er at alle nye inntektskilder som kommer etter skjæringstidspunktet skal kunne medføre gradering mot inntekt. Du skal derfor vanligvis velge "ja", som betyr at K9 vurderer om pleiepengene skal graderes mot denne inntekten. Hvis du velger "nei", vil ikke K9 bruke denne aktiviteten for å vurdere søkers inntektstap.',"FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},Iu=Me(Tl),OA=mn(3),DA=kn(1500),kt=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||Iu.formatMessage({id:l});return p.jsx(De,{value:Iu,children:(n||r)&&p.jsx("div",{className:Qs.begrunnelseTextField,children:p.jsx(We,{name:s,label:e?"":o,validate:e?[]:[W,OA,DA,vn],className:e?Qs.explanationTextareaReadOnly:Qs.explanationTextarea,maxLength:1500,readOnly:e})})})},VA=e=>e&&e.begrunnelse?e.begrunnelse:"";kt.buildInitialValues=(e,n="begrunnelse")=>({[n]:Ki(VA(e))});kt.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const MA=Me(Tl),GA=(e,n,r)=>!r||n?!0:!e,fa=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:a})=>e?null:p.jsx(ee,{size:"small",loading:t,disabled:GA(a,t,n),onClick:r||Bg,type:r?"button":"submit",children:MA.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Tu(e,n){return n.tom!=null&&!N(n.tom).isBefore(N(e.fom))&&(e.tom==null||!N(n.tom).isAfter(N(e.tom)))}function LA(e,n){return Tu(e,n)||Tu(n,e)}function cn(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===mt.UDEFINERT)?!0:!n||n.length===0||n.some(t=>LA(t,e))}var Ru={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Eu;function KA(){return Eu||(Eu=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Ru)),Ru.exports}var $A=KA();const tk=rk($A),UA="_vurdertIForrigeIcon_1q86k_1",HA={vurdertIForrigeIcon:UA},YA=tk.bind(HA),ak=({className:e=""})=>{const n=z();return p.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:YA("vurdertIForrigeIcon",e),children:p.jsx(la,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},Dr=e=>e?`...${e.substring(e.length-4,e.length)}`:"",vt=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${N(t).format(se)})${Dr(n)}`:r:s?`${r} (${s})${Dr(n)}`:r},Ti=(e,n)=>{var r,t;const a=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!a||!n[a])return"";const s=n[a];return s.erPrivatPerson?s.fødselsdato?`${s.navn} (${N(s.fødselsdato).format(se)})${Dr(e.eksternArbeidsforholdRef)}`:`${s.navn}${Dr(e.eksternArbeidsforholdRef)}`:`${s.navn} (${a})${Dr(e.eksternArbeidsforholdRef)}`},sk=" - ",ik=e=>e==null,CA=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${sk}${r}`},zA=e=>e.inntektskategori&&e.inntektskategori!==mt.UDEFINERT?e.inntektskategori:"",JA=(e,n,r,t)=>{var a,s;if(!e.aktivitetStatus||e.aktivitetStatus===ue.UDEFINERT)return"";if(e.aktivitetStatus===ue.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?vt(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((a=r[kr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var u;return o.kode===((u=e.arbeidsforhold)==null?void 0:u.arbeidsforholdType)}))==null?void 0:a.kode)||""}return n&&e.aktivitetStatus===ue.BRUKERS_ANDEL?"Ytelse":((s=r[kr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:s.navn)||""},WA=e=>ik(e)?void 0:e,Nu=e=>V(e)||"",ZA=(e,n,r)=>e!==void 0?Nu(e):r&&!ik(n)?Nu(n):"",QA=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),XA=(e,n,r,t)=>({andel:JA(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:zA(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===mt.UDEFINERT?void 0:e.inntektskategori}),lk=(e,n,r,t,a)=>{if(n.skalRedigereInntekt){const s=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.fastsattBelop`);return s?ge(s):0}return n.readOnlyBelop?ge(n.readOnlyBelop):0},eI=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),nI=(e,n)=>{var r;const t=e.find(a=>{var s,l;return!!a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===((s=n.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&a.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},rI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!eI(t.arbeidsforhold,r)){const a=nI(n,t),s={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:a.beregningsperiodeTom,beregningsperiodeFom:a.beregningsperiodeFom,...t.arbeidsforhold};r.push(s)}}),r},tI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],aI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],sI=(e,n)=>rI(tI(e),aI(n)),iI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],a=e.beregningsgrunnlagPeriode;return sI(t,a)},lI=e=>e?Number(ge(e)):0,oI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),dI=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,uI=(e,n)=>e.some(r=>dI(n,r)),gI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},mI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{if(s.nyAndel&&(s.andelsnrRef||s.andelsnrRef===0)){const o=gI(t,s.andelsnrRef);a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:s.inntektskategori,arbeidsgiverIdent:s.arbeidsgiverId,arbeidsforholdId:s.arbeidsforholdId})}),a},kI=(e,n,r,t,a)=>{const s=mI(e,n,r,t),l=[];let o=!1;return s.forEach(u=>{uI(l,u)&&(o=!0),l.push(u)}),o?oI(a):void 0},vI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,pI=(e,n,r,t,a,s)=>{const l=s.findIndex(({arbeidsforholdId:u,arbeidsgiverId:k})=>u===t.arbeidsforholdId&&k===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.refusjonskrav`);if(l>=0){const u=s[l];vI(t,u)&&(u.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(u.totalRefusjon+=Number(ge(o)))}else{const{refusjonskravFraInntektsmelding:u,arbeidsforholdId:k,arbeidsgiverId:v,eksternArbeidsforholdId:f}=t;let b=0;o!=null&&(b=Number(ge(o))),s.push({arbeidsforholdId:k,eksternArbeidsforholdId:f,arbeidsgiverId:v,refusjonskravFraInntektsmelding:u,totalRefusjon:b})}},fI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{s.arbeidsforholdId!==""&&pI(e,n,r,s,l,a)}),a},yI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),bI=(e,n,r,t,a,s)=>{const l=fI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?a[l[0].arbeidsgiverId]:void 0;let u;return o?u=vt(o,l[0].eksternArbeidsforholdId):u=l[0].arbeidsgiverId||"",yI(u,s)}},jI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,cI=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),hI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,AI=(e,n,r)=>e>=Math.round(n)?hI(V(n),r):void 0,ok=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),dk=(e,n,r,t,a)=>e>=Math.round(n)?t(V(n),r,a):void 0,II=(e,n,r)=>e!==Math.round(n)?jI(V(Math.round(n)),r):void 0,TI=(e,n,r,t,a,s,l)=>{if(!r.andelIArbeid)return!1;const o=a(`FORDEL_BEREGNING_FORM.${e}.${s}.${l}.fastsattBelop`),u=o?ge(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&u<=0?!0:r.andelIArbeid.split(sk).filter(k=>Number(k)>0).length>0&&u===0},RI=(e,n,r,t,a,s)=>t.some((l,o)=>TI(e,s,l,a,n,r,o))?cI(s):void 0,EI=(e,n,r,t,a,s)=>{const l=t.map((o,u)=>lk(e,o,r,n,u)).reduce((o,u)=>o+u,0);return a!=null?II(l,a,s):void 0},qu=(e,n,r,t,a)=>{const s=a(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return lI(s)},NI=(e,n,r,t,a,s)=>{const l=!!n.find((k,v)=>k.andelIArbeid!=="0.00"&&qu(e,k,r,v,t)===0),o=n.map((k,v)=>qu(e,k,r,v,t)).reduce((k,v)=>k+v,0),u=6*a;return l?AI(o,u,s):void 0},uk=(e,n)=>{const r=e.map(t=>{var a;return((a=n[kr.AKTIVITET_STATUS].find(s=>s.kode===t))==null?void 0:a.navn)||""});return r.sort((t,a)=>t.localeCompare(a)),[...new Set(r)].join(", ")},gk=(e,n,r,t,a)=>t.map((s,l)=>s.aktivitetStatus&&!a.includes(s.aktivitetStatus)?0:lk(e,s,r,n,l)).reduce((s,l)=>s+l,0),qI=(e,n,r,t,a,s,l)=>{const o=[ue.ARBEIDSTAKER],u=gk(e,n,r,t,o),k=uk(o,s);return dk(u,a,k,ok,l)},SI=(e,n,r,t,a,s,l)=>{const o=[ue.ARBEIDSTAKER,ue.FRILANSER,ue.DAGPENGER,ue.ARBEIDSAVKLARINGSPENGER],u=t.map(f=>f.aktivitetStatus).filter(f=>!!f&&o.includes(f)),k=gk(e,n,r,t,u),v=uk(u,s);return dk(k,a,v,ok,l)},PI=(e,n,r,t,a,s,l)=>{const o=!!t.find(k=>k.andelIArbeid!=="0.00"&&k.aktivitetStatus===ue.FRILANSER),u=6*s;if(o)return qI(e,n,r,t,u,l,a);if(t.find(k=>k.andelIArbeid!=="0.00"&&k.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE))return SI(e,n,r,t,u,l,a)},BI="_rightAlignInput_ov1eu_19",FI="_slettIkon_ov1eu_29",xI="_inntektTable_ov1eu_88",wI="_shortLeftAligned_ov1eu_137",_I="_wordwrap_ov1eu_142",OI="_litenBredde_ov1eu_145",DI="_storBredde_ov1eu_148",VI="_benyttCheckbox_ov1eu_154",MI="_floatRight_ov1eu_157",we={rightAlignInput:BI,slettIkon:FI,inntektTable:xI,shortLeftAligned:wI,wordwrap:_I,litenBredde:OI,storBredde:DI,benyttCheckbox:VI,floatRight:MI},Ct=({children:e})=>p.jsx("span",{className:we.floatRight,children:e}),GI=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:V(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),mk=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[kr.OPPTJENING_AKTIVITET_TYPE].find(a=>a.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":vt(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},LI=(e,n,r)=>e.map(t=>p.jsx("option",{value:t.andelsnr.toString(),children:mk(t,n,r)},t.andelsnr)),KI=(e,n,r,t)=>{const a=e.map(s=>p.jsx("option",{value:s.andelsnr.toString(),children:mk(s,r,t)},s.andelsnr));return a.push(p.jsx("option",{value:Ii.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},Ii.BRUKERS_ANDEL)),a},$I=e=>e.map(n=>p.jsx("option",{value:n.kode,children:n.navn},n.kode)),kk=e=>e>0&&V(e)||"",UI=(e,n,r,t)=>{let a=0,s=0;for(s;s<r.length;s+=1){const l=r[s],o=ge(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${s}.fastsattBelop`));l.skalRedigereInntekt?a+=o||0:a+=l.readOnlyBelop?o:0}return kk(a)},HI=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(ge(t.beregningsgrunnlagPrAar)):0)}return kk(n)},YI=e=>e.inntektskategori?FA(e.inntektskategori)||mt.FRILANSER===e.inntektskategori:!1,CI=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},zI=(e,n)=>{var r;const t=Number(n);return(r=e.find(a=>a.andelsnr===t))==null?void 0:r.aktivitetStatus},JI=(e,n,r,t,a)=>{const s=e[n],l=CI(r,t);l&&(s.arbeidsforholdId=l.arbeidsforholdId,s.arbeidsgiverId=l.arbeidsgiverIdent,s.arbeidsperiodeFom=l.startdato,s.arbeidsperiodeTom=l.opphoersdato,s.andelsnrRef=l.andelsnr,s.aktivitetStatus=zI(e,t),s.nyttArbeidsforhold=l.nyttArbeidsforhold,s.arbeidsforholdType=l.arbeidsforholdType,s.beregningsperiodeTom=l.beregningsperiodeTom,s.beregningsperiodeFom=l.beregningsperiodeFom,a(n,s))},WI=(e,n,r,t,a,s,l)=>p.jsxs(p.Fragment,{children:[!e[n].nyAndel&&p.jsx(ve,{name:`${l(n)}.andel`,className:we.storBredde,readOnly:!0}),e[n].nyAndel&&p.jsx(ta,{name:`${l(n)}.andel`,className:we.storBredde,label:"",selectValues:r,readOnly:t,validate:[W],onChange:o=>JI(e,n,a,o.target.value,s)})]}),ZI=(e,n,r,t)=>n?p.jsx(c.DataCell,{children:p.jsx(Ct,{children:p.jsx(ve,{name:`${t}.readOnlyBelop`,className:we.litenBredde,parse:Fe,readOnly:!0,isEdited:!1})})}):p.jsx(c.DataCell,{className:we.rightAlignInput,children:p.jsx(Ct,{children:p.jsx(ve,{name:`${t}.fastsattBelop`,parse:Fe,readOnly:e,validate:[W,Qe(178956970)],isEdited:r&&!n,className:we.litenBredde})})}),QI=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,XI=(e,n,r,t,a,s,l)=>p.jsxs(c.DataCell,{children:[WI(e,n,r,t,a,s,l),!YI(e[n])&&p.jsx("div",{className:we.wordwrap,children:p.jsx(ve,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),eT=(e,n)=>e?p.jsx(c.DataCell,{children:p.jsx(ve,{name:`${n}.andelIArbeid`,readOnly:!0,className:we.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,nT=(e,n,r,t)=>p.jsx(c.DataCell,{className:e||!n[r].skalKunneEndreRefusjon?void 0:we.rightAlignInput,children:p.jsx(Ct,{children:p.jsx(ve,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:Fe,className:we.litenBredde,validate:n[r].skalKunneEndreRefusjon?[W,Qe(178956970)]:[]})})}),rT=e=>p.jsx(c.DataCell,{children:p.jsx(ve,{name:`${e}.beregningsgrunnlagPrAar`,className:we.litenBredde,readOnly:!0,parse:Fe})}),tT=(e,n,r)=>p.jsx(c.DataCell,{className:e?we.shortLeftAligned:void 0,children:p.jsx(Ct,{children:p.jsx(ta,{label:"",name:`${n}.inntektskategori`,className:we.storBredde,validate:e?[]:[W],selectValues:$I(r),readOnly:e})})}),aT=(e,n,r,t)=>p.jsx(c.DataCell,{children:QI(n,e,r)&&p.jsx(ee,{icon:p.jsx(Kn,{"aria-hidden":!0,className:we.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),sT=(e,n,r)=>p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{children:p.jsx(x,{size:"small",children:n})}),p.jsx(c.DataCell,{children:p.jsx(x,{size:"small",children:e})}),p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{})]},"bruttoBGSummaryRow"),iT=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var a;return(a=t.perioderMedGraderingEllerRefusjon)==null?void 0:a.some(s=>s.erGradering)})},lT=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:u,periodeFom:k,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})=>{const{control:y,watch:j,getValues:I}=he(),h=`FORDEL_BEREGNING_FORM.${v}.${e}`,{fields:R,append:E,remove:q,update:S}=Ze({control:y,name:`FORDEL_BEREGNING_FORM.${v}.${e}`});A.useEffect(()=>{b&&b!==h&&!n&&!r&&I(b).forEach(Z=>{var de;const Ae=R.findIndex(rn=>rn.andel===Z.andel&&(rn.inntektskategori===Z.inntektskategori||!rn.inntektskategori&&!Z.lagtTilAvSaksbehandler&&!rn.lagtTilAvSaksbehandler));if(Ae>-1){const rn={...R[Ae],fastsattBelop:Z.fastsattBelop,refusjonskrav:o?Z.refusjonskrav:(de=R[Ae])==null?void 0:de.refusjonskrav,inntektskategori:Z.inntektskategori};S(Ae,rn)}})},[b]);const P=!!l.aktivitetStatus&&l.aktivitetStatus.some(Z=>Z===ue.KUN_YTELSE),D=iI(l),_=UI(v,e,R,j),U=HI(R),Y=iT(l),w=s[kr.INNTEKTSKATEGORI],M=z(),L=P?KI(D,M,s,a):LI(D,s,a),K=Z=>`FORDEL_BEREGNING_FORM.${v}.${e}.${Z}`,H=R.map((Z,de)=>{const Ae=n||r;return p.jsxs(c.Row,{children:[XI(R,de,L,Ae,D,S,K),eT(Y,K(de)),nT(Ae,R,de,K),rT(K(de)),ZI(n,r,t,K(de)),tT(Ae,K(de),w),aT(R,de,Ae,q)]},Z.id)});H.push(sT(_,U,Y));const C=[],le=Z=>{Z&&C.push(Z)};!n&&R.some(Z=>!!Z.skalRedigereInntekt||!!Z.skalKunneEndreRefusjon)&&(le(kI(v,I,e,R,M)),le(EI(v,I,e,R,u,M)),Y&&(le(RI(v,I,e,R,k,M)),le(PI(v,I,e,R,M,l.grunnbeløp,s))),o&&(le(NI(v,R,e,I,l.grunnbeløp,M)),le(bI(v,R,e,I,a,M))));const je=`FORDEL_BEREGNING_FORM.${v}.${e}.skjemagruppe`,Pe=C.filter(Z=>!!Z),He=Pe.length>0?Pe[0]:void 0,Ye=ra(je,He),J=()=>{f(h===b?"":h)};return p.jsxs("div",{children:[p.jsxs(c,{className:we.inntektTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Andel"})}),Y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.AndelIArbeid"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Refusjonskrav"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Beregningsgrunnlag"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Fordeling"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Inntektskategori"})}),p.jsx(c.HeaderCell,{scope:"col"})]})}),p.jsx(c.Body,{children:H})]}),!n&&!r&&p.jsx(ee,{icon:p.jsx(Ui,{"aria-hidden":!0}),onClick:()=>E(GI(r)),type:"button",variant:"secondary",children:p.jsx(oe,{children:p.jsx(m,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&p.jsx(Np,{className:we.benyttCheckbox,checked:h===b,onChange:J,children:"Benytt for alle perioder"}),Ye&&p.jsx(Yr,{children:Ye})]})},oT="_statusOk_1qsx9_1",vk={statusOk:oT},dT=tk.bind(vk),Xs=e=>e?N(e,xe).format(se):"-",uT=(e,n)=>n?p.jsx(x,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:Xs(e),tom:Xs(n)}})}):p.jsx(x,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:Xs(e)}})}),gT=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},mT=e=>{const n=gT(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},kT=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>mT(t)).reduce((t,a)=>t+a,0)},Rl=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:a,beregningsgrunnlag:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:u,fordelingsperiode:k,fieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})=>k.fom?p.jsx(Ne,{className:e?vk.statusOk:dT(`fordelBeregningsgrunnlagPeriode--${k.fom}`),children:p.jsxs(Ne.Item,{open:t,children:[p.jsxs(Ne.Header,{onClick:()=>a(k.fom),children:[uT(k.fom,k.tom)," ",n?p.jsx(ak,{}):""]}),p.jsx(Ne.Content,{children:p.jsx(lT,{fieldName:u,readOnly:e,sumIPeriode:kT(s.beregningsgrunnlagPeriode,k.fom),skalIkkeRedigereInntekt:!k.skalRedigereInntekt,skalKunneEndreRefusjon:!!k.skalKunneEndreRefusjon,periodeFom:k.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})})]})}):null,vT=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},pT=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!N(t).isBefore(N(n))},Su=e=>{var n,r,t,a;if(!e)return;const s=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((a=e.arbeidsforhold)==null?void 0:a.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return V(e.besteberegningPrAar+s-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return V(e.overstyrtPrAar+s-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return V(e.beregnetPrAar+s-l)},fT=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?V(e.fordelingForrigeBehandlingPrAar):"")||"";Rl.buildInitialValues=(e,n,r,t,a,s)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=vT(l,n);return{...XA(l,t,a,s),...QA(l),andelIArbeid:CA(l.andelIArbeid||[]),fordelingForrigeBehandling:fT(l),fastsattBelop:ZA(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:Su(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?V(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||pT(o,r),beregningsgrunnlagPrAar:Su(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:WA(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const pk="fordelBGPeriode",El=e=>pk+e,yT=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?ge(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:ge(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),zt=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),bT=e=>zt(e,Hr.GRADERING)||zt(e,Hr.GRADERING_OPPHOERER),jT=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},fk=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function Pu(e){const n=N(e.beregningsgrunnlagPeriodeFom).day()===6,r=N(e.beregningsgrunnlagPeriodeFom).day()===0,t=N(e.beregningsgrunnlagPeriodeTom).day()===6,a=N(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||a)}const cT=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function hT(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>cT(r))}function AT(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const IT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&fk(a,r));return!!(t===void 0||AT(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),TT=(e,n,r,t)=>{const a=e.fordelBeregningsgrunnlagAndeler||[],s=n.fordelBeregningsgrunnlagAndeler||[];if(a.length!==s.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const u=Pu(r),k=Pu(o),v=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(u||k)&&!v?!0:!IT(a,s)},RT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&fk(a,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),ET=(e,n,r,t,a)=>{var s,l;const o=t[t.length-1];return((s=r.fordelBeregningsgrunnlagAndeler)==null?void 0:s.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||bT(e)||RT(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||cn(r,a)&&!cn(o,a)?!1:zt(e,Hr.ARBEIDSFORHOLD_AVSLUTTET)?jT(e,n):zt(e,Hr.ENDRING_I_AKTIVITETER_SØKT_FOR)?TT(r,o,e,n):!0},NT=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},qT=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const a=e.find(s=>s.beregningsgrunnlagPeriodeFom===t.fom);if(a){if(ET(a,e,t,r,n))return NT(r,t),r;r.push({...t})}return r},ST=e=>({fom:n,tom:r})=>(N(n).isSame(N(e.fom))||N(n).isAfter(e.fom))&&(e.tom===null||N(r).isSame(N(e.tom))||N(r).isBefore(N(e.tom))),PT=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},BT=e=>({andelsnr:PT(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:yT(e)}),FT=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},xT=(e,n,r,t)=>t.filter(ST(r)).filter(a=>a.skalRedigereInntekt||a.skalKunneEndreRefusjon).map(a=>({andeler:e[El(n)].map(BT),fom:FT(a.fom),tom:a.tom})),Nl=(e,n,r)=>e.filter(t=>hT(t)).reduce(qT(n,r),[]),wT="_lessPadding_1i5bl_1",_T={lessPadding:wT},OT=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},DT=(e,n,r,t)=>{const a=[],s=Nl(e,r,t);for(let l=0;l<s.length;l+=1){const{skalRedigereInntekt:o}=s[l];o&&cn(s[l])&&xT(n,l,s[l],e).forEach(u=>a.push(u))}return a};function VT(e,n){return cn(n,e.forlengelseperioder)}function MT(e,n){var r;return!cn(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const pt=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[u,k]=A.useState([]),[v,f]=A.useState("");A.useEffect(()=>{const y=n.filter(j=>VT(a,j)).filter(j=>j.skalKunneEndreRefusjon||j.skalRedigereInntekt).filter(j=>!!j.fom).map(j=>j.fom);k(y)},[n]);const b=y=>{if(u.includes(y)){const j=u.filter(I=>I!==y);k(j)}else{const j=u.map(I=>I);j.push(y),k(j)}};return p.jsx(ap,{className:_T.lessPadding,children:p.jsx(B,{gap:"2",children:Nl(n,t,a.forlengelseperioder).map((y,j)=>p.jsx($.Fragment,{children:p.jsx(Rl,{readOnly:e||!cn(y,a.forlengelseperioder),erVurdertTidligere:MT(y,a),fordelingsperiode:y,fordelBGFieldArrayName:El(j),open:u?u.filter(I=>I===y.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:b,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:f,fieldArrayToRepeat:v})},pk+y.fom))})})};pt.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:DT(n,e,r,t)});pt.buildInitialValues=(e,n,r,t)=>{const a={};if(!e)return a;const s=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===ue.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return Nl(e,l,n.forlengelseperioder).forEach((o,u)=>{const k=OT(o,l);a[El(u)]=Rl.buildInitialValues(o,k,n.skjaeringstidspunktBeregning,s,r,t)}),a};const GT=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},ft=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=r.beregningsgrunnlagPeriode,o=GT(r);return p.jsx(pt,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})};ft.buildInitialValues=(e,n,r,t)=>pt.buildInitialValues(e,n,r,t);ft.transformValues=(e,n,r,t)=>pt.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:LT}=Ve,KT=(e,n)=>n.some(r=>r.definisjon===e),$T=(e,n,r,t)=>{const a=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||a.push(p.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:ea,br:p.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),a},UT=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),HT=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:s})=>s!=null).filter(({perioderMedGraderingEllerRefusjon:s})=>UT(s||[])),a=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erSøktYtelse:l})=>l).includes(!0));return $T(n,r,t,a)},YT=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return KT(LT,e.avklaringsbehov)?HT(t):[]},CT=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=YT(n);return e?p.jsx(p.Fragment,{}):p.jsx(Jn,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:Ri}=Ve,zT=(e,n)=>n.some(r=>r.definisjon===e),yk=e=>{const n=e.find(r=>r.definisjon===Ri);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Ri}`);return n},JT="begrunnelse",bk=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},WT=(e,n)=>{if(!zT(Ri,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...ft.transformValues(e,bk(n),r,n.forlengelseperioder)}},ZT=(e,n,r,t)=>{const a=bk(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...kt.buildInitialValues(yk(e.avklaringsbehov),JT),...ft.buildInitialValues(a,e,t,r)}},QT=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=yk(r.avklaringsbehov),o=!Il(l.status),u=he(),k=u.watch(`FORDEL_BEREGNING_FORM.${s}.begrunnelse`);return p.jsxs(B,{gap:"5",children:[p.jsxs(B,{gap:"2",children:[p.jsx(CT,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),p.jsx(ft,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})]}),p.jsxs("div",{children:[p.jsx(kt,{name:`FORDEL_BEREGNING_FORM.${s}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!k}),p.jsx(En,{ident:l.vurdertAv,date:l.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(fa,{isSubmittable:n,isReadOnly:e,isSubmitting:u.formState.isSubmitting,isDirty:u.formState.isDirty})})]})},{FORDEL_BEREGNINGSGRUNNLAG:XT}=Ve,Jt="FORDEL_BEREGNING_FORM",eR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},nR=(e,n,r)=>{const t=e[Jt].filter(a=>ar(r,a.periode.fom)).map(a=>WT(a,eR(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:XT}};function jk(e){return e.avklaringsbehov.some(n=>n.definisjon===Ve.FORDEL_BEREGNINGSGRUNNLAG)}const rR=(e,n,r,t)=>({[Jt]:e.filter(jk).map(a=>ZT(a,gt(n,a.vilkårsperiodeFom),r,t))}),tR=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:a,vilkårsperioder:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,setFordelingFormIsDirty:v})=>{const f=$e({defaultValues:u!=null&&u.FORDEL_BEREGNING_FORM?u:rR(a,s,o,l)}),{formState:{dirtyFields:b,isSubmitted:y,errors:j,isDirty:I},control:h,trigger:R}=f;A.useEffect(()=>{v(I)},[I]),A.useEffect(()=>{var q;y&&(q=b[Jt])!=null&&q[e]&&R()},[e]);const{fields:E}=Ze({name:Jt,control:h});return p.jsx($i,{errorMessage:"Noe gikk galt ved visning av fordeling",children:p.jsx(Ue,{formMethods:f,onSubmit:q=>{Object.keys(j).length===0&&t(nR(q,a,s))},setDataOnUnmount:k,children:E.map(q=>{const S=a.findIndex(P=>P.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp);return p.jsx("div",{style:{display:S===e?"block":"none"},children:p.jsx(QT,{submittable:r,readOnly:n||!ar(s,a[S].vilkårsperiodeFom),beregningsgrunnlag:a[S],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:a.filter(jk).findIndex(P=>P.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp)})},q.id)})})})},aR=(e,n)=>e.map(r=>p.jsx("div",{children:r&&r.erTildeltRefusjon?p.jsx(T,{children:n}):p.jsx(T,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),sR=e=>{if(!e)return;const n=e.tom===Se?void 0:e.tom;return p.jsx(T,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:ye(e.fom),tom:n?ye(n):""}})})},iR=e=>e.map(n=>p.jsx("div",{children:sR(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),lR=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(T,{children:Ti(e,n)})}),p.jsx(c.DataCell,{children:aR(e.tidligereUtbetalinger||[],Ti(e,n))}),p.jsx(c.DataCell,{children:iR(e.tidligereUtbetalinger||[])})]}),oR="_tabellContainer_9a5fi_1",dR={tabellContainer:oR},uR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,gR=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return p.jsx("div",{className:dR.tabellContainer,children:p.jsxs(c,{children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),p.jsx(c.Body,{children:t.map(a=>p.jsx(lR,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:a},uR(a)))})]})})},mR="_bredde_1lhuf_1",kR="_tekstMidtstilt_1lhuf_4",ei={bredde:mR,tekstMidtstilt:kR},vR="REFUSJON_ENDRING_DATO",pR="DELVIS_REFUSJON_FØR_START_BELØP",ck=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,Wt=e=>ck(vR,e),ql=e=>ck(pR,e),fR=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,yt=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:a,vilkårperiodeFieldIndex:s})=>{const l=Ti(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",u=he().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${Wt(e)}`),k=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,v=fR(a,u),f=A.useCallback(y=>p.jsx("b",{children:y}),[]),b=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return p.jsxs(B,{children:[p.jsx(T,{children:p.jsx(m,{id:o,values:{ag:l,dato:ye(e.nyttRefusjonskravFom),b:f}})}),p.jsxs(F,{gap:"6",children:[p.jsx("div",{className:ei.tekstMidtstilt,children:p.jsx(T,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),p.jsx($n,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${Wt(e)}`,isReadOnly:n,validate:n?[]:[W,bn,na(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),b&&!v&&!k&&p.jsxs(F,{gap:"6",children:[p.jsx("div",{className:ei.tekstMidtstilt,children:p.jsx(T,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),p.jsx(ve,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${ql(e)}`,className:ei.bredde,validate:n?[]:[W,Qe(e.maksTillattDelvisRefusjonPrMnd)],parse:Fe,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};yt.buildInitialValues=e=>{const n={};return n[Wt(e)]=e.fastsattNyttRefusjonskravFom||"",n[ql(e)]=V(e.fastsattDelvisRefusjonPrMnd)||"",n};yt.transformValues=(e,n,r)=>{var t,a;const s=Wt(n),l=e[s];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const u=ql(n);o=ge(e[u])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(a=n.arbeidsgiver)==null?void 0:a.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const Bu="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:yR}=Ve,hk=e=>e?e.find(n=>n.definisjon===yR):void 0,bR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,jR=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],a=hk(e.avklaringsbehov);let s={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:a&&a.begrunnelse?a.begrunnelse:void 0};return t.forEach(l=>{s={...s,...yt.buildInitialValues(l)}}),s},cR=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(a=>yt.transformValues(e,a,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},hR=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:a,formSubmittes:s})=>{var l;const o=!r.avklaringsbehov.some(y=>y.definisjon===Ve.VURDER_REFUSJON_BERGRUNN),u=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],k=hk(r.avklaringsbehov),v=k?Il(k.status):!1,f=he(),b=f.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${a}.begrunnelse`);return p.jsxs(B,{gap:"4",children:[v&&p.jsx(Jn,{children:[p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),p.jsx(ie,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),p.jsx(gR,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),u.map(y=>p.jsx(yt,{refusjonAndel:y,readOnly:o||n,erAksjonspunktÅpent:v,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:Bu,vilkårperiodeFieldIndex:a},bR(y))),p.jsxs("div",{children:[p.jsx(kt,{name:`${Bu}.${a}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!b}),p.jsx(En,{ident:k==null?void 0:k.vurdertAv,date:k==null?void 0:k.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(fa,{isSubmittable:e,isReadOnly:o||n,isSubmitting:s,isDirty:f.formState.isDirty})})]})},Zt="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:AR}=Ve,IR=(e,n)=>({[Zt]:e.map(r=>jR(r,gt(n,r.vilkårsperiodeFom)))}),TR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},RR=(e,n)=>n.filter(r=>r.skjaeringstidspunktBeregning===e).some(r=>r.avklaringsbehov.some(t=>t.definisjon==="VURDER_REFUSJONSKRAV")),ER=(e,n,r)=>{const t=e[Zt].filter(a=>ar(r,a.periode.fom)).filter(a=>RR(a.beregningsgrunnlagStp,n)).map(a=>cR(a,TR(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:AR}},NR=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:a,arbeidsgiverOpplysningerPerId:s,setFormData:l,formData:o,submitCallback:u,setRefusjonFormIsDirty:k})=>{const v=$e({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:IR(t,a)}),[f,b]=A.useState(!1),{formState:{dirtyFields:y,isSubmitted:j,errors:I,isDirty:h},control:R,trigger:E}=v;A.useEffect(()=>{k(h)},[h]),A.useEffect(()=>{var S;j&&(S=y[Zt])!=null&&S[e]&&E()},[e]);const{fields:q}=Ze({name:Zt,control:R});return p.jsx($i,{errorMessage:"Noe gikk galt ved visning av refusjon",children:p.jsx(Ue,{formMethods:v,onSubmit:S=>{Object.keys(I).length===0&&(b(!0),u(ER(S,t,a)))},setDataOnUnmount:l,children:q.map(S=>{const P=t.findIndex(D=>D.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return p.jsx("div",{style:{display:P===e?"block":"none"},children:p.jsx(hR,{submittable:n,readOnly:r||!ar(a,t[P].vilkårsperiodeFom),beregningsgrunnlag:t[P],arbeidsgiverOpplysningerPerId:s,vilkårperiodeFieldIndex:P,formSubmittes:f})},S.id)})})})};var Ei={exports:{}},qR=Ei.exports,Fu;function SR(){return Fu||(Fu=1,function(e,n){(function(r,t){e.exports=t()})(qR,function(){return function(r,t,a){t.prototype.isBetween=function(s,l,o,u){var k=a(s),v=a(l),f=(u=u||"()")[0]==="(",b=u[1]===")";return(f?this.isAfter(k,o):!this.isBefore(k,o))&&(b?this.isBefore(v,o):!this.isAfter(v,o))||(f?this.isBefore(k,o):!this.isAfter(k,o))&&(b?this.isAfter(v,o):!this.isBefore(v,o))}}})}(Ei)),Ei.exports}var PR=SR();const Ak=rk(PR),xu=e=>e===Se?"":N(e).format(se),BR=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=z(),[a,s]=A.useState(),l=A.useCallback(v=>{const f=N(v).format(xe);if(r(f),f){const b=n(f);b.sort((y,j)=>N(y.fom).diff(N(j.fom))),s(b)}},[n]),o=[v=>!e||!N(v).isAfter(N(e.fom))||N(v).isAfter(N(e.tom))],{datepickerProps:u,inputProps:k}=kp({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return p.jsxs(p.Fragment,{children:[p.jsx(zl,{...u,children:p.jsx(zl.Input,{...k,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})}),a&&p.jsxs("div",{children:[p.jsx(x,{size:"small",children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Resultat"})}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:N(a[0].fom).format(se),tom:xu(a[0].tom)}})}),p.jsx("li",{children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:N(a[1].fom).format(se),tom:xu(a[1].tom)}})})]})]})]})},FR=e=>e?e.tom===Se?!0:Rg(e.fom,e.tom,!0)>1:!1,xR=e=>e.map(n=>({fom:n.fom,tom:n.tom})),wR=(e,n)=>{const r=N(e).format(se);if(n&&n!==Se){const t=N(n).format(se);return r.concat(" - ",t)}return r.concat(" - ")},_R=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:a})=>{const s=z(),[l,o]=A.useState(void 0),[u,k]=A.useState(void 0),v=A.useMemo(()=>xR(e),[e]),f=A.useCallback(()=>{l&&u&&(r(l),a())},[e,l]),b=A.useCallback(j=>{const I=j.target.value,h=v.find(R=>R.fom===I);k(h||void 0)},[]),y=u&&FR(u);return t?p.jsxs(ct,{width:"500px",open:t,onClose:a,"aria-label":"Del opp periode",children:[p.jsx(ct.Header,{children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Tittel"})}),p.jsx(ct.Body,{children:p.jsxs(B,{gap:"4",children:[p.jsxs(mp,{label:s.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:b,size:"small",children:[p.jsx("option",{value:void 0,children:"Velg periode"}),v.map(j=>p.jsx("option",{value:j.fom,children:wR(j.fom,j.tom)},j.fom))]}),y&&p.jsx(BR,{forhåndsvisPeriodesplitt:n,periode:u,setValgtDato:o})]})}),p.jsxs(ct.Footer,{children:[p.jsx(ee,{size:"small",variant:"secondary",onClick:a,disabled:!1,autoFocus:!0,type:"button",children:p.jsx(m,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})}),p.jsx(ee,{size:"small",variant:"primary",onClick:f,disabled:!l,autoFocus:!0,type:"button",children:p.jsx(m,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})]})]}):null};N.extend(Ak);const OR="2023-05-01";function DR(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const VR=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(s=>t.push(s));const a={...r,inntektsforholdListe:t.filter(DR()),tom:n.tom};e.push(a)},MR=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let a=0;a<r.length;a+=1){const s=r[a],l=t.find(o=>o.aktivitetStatus===s.aktivitetStatus&&o.arbeidsgiverId===s.arbeidsgiverId&&o.arbeidsforholdId===s.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==s.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==s.skalRedusereUtbetaling)return!1}return!0},wu=(e,n)=>Rg(e,n,!0)>2,GR=(e,n)=>{const r=n.tom,t=e.fom;return N(r).isBefore(N(t))?wu(r,t):wu(t,r)},LR=(e,n,r)=>{if(N(e.fom).isSame(N(OR)))return!1;const t=n[n.length-1],a=cn(e,r);return a&&!cn(t,r)||a&&GR(e,t)?!1:MR(e,t)},KR=e=>(n,r)=>n.length===0?(n.push({...r}),n):LR(r,n,e)?(VR(n,r),n):(n.push({...r}),n),Ik=(e,n)=>e.reduce(KR(n),[]);function Tk(e,n){var r;return!cn(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const Rk=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===ue.ARBEIDSTAKER?r?vt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ue.FRILANSER?"Frilanser":e.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===ue.DAGPENGER?"Dagpenger":""},$R=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===ue.ARBEIDSTAKER?r?vt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ue.FRILANSER?"Frilanser":e.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},UR="_tilkommetAktivitet_1quo5_1",HR="_aktivitetContainer_1quo5_4",YR="_aktivitetTable_1quo5_7",CR="_aksjonspunktContainer_1quo5_16",zR="_aksjonspunktContainerLukketAP_1quo5_21",JR="_bruttoInntektContainer_1quo5_26",WR="_bruttoInntektCurrency_1quo5_29",ZR="_inntektsmeldingTag_1quo5_37",QR="_inntektColumn_1quo5_40",Le={tilkommetAktivitet:UR,aktivitetContainer:HR,aktivitetTable:YR,aksjonspunktContainer:CR,aksjonspunktContainerLukketAP:zR,bruttoInntektContainer:JR,bruttoInntektCurrency:WR,inntektsmeldingTag:ZR,inntektColumn:QR},XR=e=>ge(e)>0?null:`Du kan ikke registrere 0,- i inntekt, da dette ikke vil medføre gradering mot inntekt. 
       Hvis arbeidsforholdet ikke medfører inntekter enda, men kanskje vil det senere, velger du nei. 
       Informer også bruker om at de må melde fra hvis de begynner å jobbe for denne arbeidsgiveren.`,eE=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},nE=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:a,field:s,arbeidsgiverOpplysningerPerId:l})=>{const o=he(),u=z(),k=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`),v=()=>{switch(s.aktivitetStatus){case ue.ARBEIDSTAKER:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. ",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{})," Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.",p.jsx("br",{}),p.jsx("br",{})," Husk å begrunne fastsatt inntekt for alle periodene."]});case ue.FRILANSER:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra a-inntekt eller fra bruker selv.",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{}),"Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt eller be bruker forklare hva som er avtalt.",p.jsx("br",{}),p.jsx("br",{}),"Husk å begrunne fastsatt inntekt for alle periodene."]});case ue.SELVSTENDIG_NAERINGSDRIVENDE:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Bruk som hovedregel opplysninger fra søknaden.",p.jsx("br",{}),p.jsx("br",{}),"Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Du kan for eksempel be om dokumentasjon på foreløpig resultatregnskap, innbetalt forskuddsskatt og lignende.",p.jsx("br",{}),p.jsx("br",{}),"Husk å begrunne fastsatt inntekt for alle periodene."]});default:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. ",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{})," Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.",p.jsx("br",{}),p.jsx("br",{})," Husk å begrunne fastsatt inntekt for alle periodene."]})}},f=()=>s.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE?u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):s.aktivitetStatus===ue.FRILANSER?u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:$R(s,l)});return p.jsxs(B,{gap:"4",children:[p.jsx(Te,{label:f(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`,radios:[{value:"true",label:u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[W],isTrueOrFalseSelection:!0}),k===!1&&p.jsx(Ie,{size:"small",variant:"info",children:u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})}),k&&p.jsxs(p.Fragment,{children:[p.jsxs(B,{gap:"1",children:[p.jsx(x,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),p.jsx(qe,{header:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:v()})]}),p.jsxs("div",{className:Le.bruttoInntektContainer,children:[p.jsx(ve,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,htmlSize:9,parse:Fe,validate:[W,Qe(178956970),XR]}),p.jsx("span",{className:Le.bruttoInntektCurrency,children:"kr"})]})]})]})},_u=e=>!!e&&+e>0,rE=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=z(),t=s=>{const l=[];return s.inntektsforholdListe.forEach(o=>{const u=_u(o.bruttoInntektPrÅr),k=_u(o.inntektFraInntektsmeldingPrÅr);l.push(p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(T,{size:"small",children:Rk(o,e)})}),p.jsx(c.DataCell,{children:p.jsx(T,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(u||k)&&p.jsx(c.DataCell,{children:p.jsxs(T,{size:"small",children:[u&&p.jsxs(p.Fragment,{children:[Dt(o.bruttoInntektPrÅr||0),p.jsx(Cr,{})]}),k&&!u&&p.jsxs(p.Fragment,{children:[Dt(o.inntektFraInntektsmeldingPrÅr||0),p.jsx(la,{className:Le.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},eE(o)))}),l},a=n.inntektsforholdListe.some(s=>s.bruttoInntektPrÅr);return p.jsx("div",{className:Le.aktivitetContainer,children:p.jsxs(c,{className:Le.aktivitetTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling"})}),a&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!a&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(c.Body,{children:t(n)})]})})},Et=e=>!!e&&+e>0,tE=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:a,erAksjonspunktÅpent:s,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:u,avklaringsbehov:k})=>{const{control:v,formState:f}=he(),{fields:b}=Ze({control:v,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),y=n.inntektsforholdListe.some(h=>Et(h.bruttoInntektPrÅr)||Et(h.inntektFraInntektsmeldingPrÅr)),j=n.inntektsforholdListe.some(h=>!!h.periode),I=h=>{const R=[],{inntektsforholdListe:E}=h;return E.forEach(q=>{const S=Et(q.bruttoInntektPrÅr),P=Et(q.inntektFraInntektsmeldingPrÅr);R.push(p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(T,{size:"small",children:Rk(q,o)})}),(S||P||j)&&p.jsx(c.DataCell,{className:Le.inntektColumn,children:p.jsxs(T,{size:"small",children:[S&&!P&&p.jsxs(p.Fragment,{children:[Dt(q.bruttoInntektPrÅr||0),p.jsx(Cr,{})]}),P&&p.jsxs(p.Fragment,{children:[Dt(q.inntektFraInntektsmeldingPrÅr||0),p.jsx(la,{className:Le.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),q.periode&&p.jsx(c.DataCell,{className:Le.periodeColumn,children:p.jsx(T,{size:"small",children:p.jsx(Ge,{dateStringFom:q.periode.fom,dateStringTom:q.periode.tom})})})]},q.arbeidsgiverId||q.aktivitetStatus))}),R};return p.jsxs(B,{gap:"4",children:[p.jsx("div",{className:Le.aktivitetContainer,children:p.jsxs(c,{className:Le.aktivitetTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})}),j&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Periode"})}),!j&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(c.Body,{children:I(n)})]})}),p.jsxs(B,{gap:"4",className:s?Le.aksjonspunktContainer:Le.aksjonspunktContainerLukketAP,children:[b.map((h,R)=>p.jsx($.Fragment,{children:p.jsx(nE,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:R,field:h,readOnly:a,arbeidsgiverOpplysningerPerId:o},h.id)},h.id)),u&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx(We,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:a,validate:[W]}),p.jsx(En,{ident:k==null?void 0:k.vurdertAv,date:k==null?void 0:k.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(fa,{isSubmittable:l,isReadOnly:a,isSubmitting:f.isSubmitting,isDirty:f.isDirty})})]})]})]})},aE="_statusOk_1qsx9_1",Ou={statusOk:aE},ni=e=>e?N(e,xe).format(se):"-",Du=(e,n)=>!n||n===Se?p.jsx(x,{size:"medium",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:ni(e)}})}):p.jsx(x,{size:"medium",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:ni(e),tom:ni(n)}})}),sE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:a,submittable:s,erAksjonspunktÅpent:l,fields:o})=>{const[u,k]=A.useState([]),[v,f]=A.useState([]),[b,y]=A.useState([]),j=he();A.useEffect(()=>{var S,P;const D=(P=(S=e.faktaOmFordeling)==null?void 0:S.vurderNyttInntektsforholdDto)==null?void 0:P.vurderInntektsforholdPerioder;if(D){const _=Ik(D,e.forlengelseperioder);k(_);const U=v.map(w=>w),Y=o.map(w=>w.fom);Y.filter(w=>!b.includes(w)).forEach(w=>U.push(w)),f(U),y(Y)}},[e,o.length]);const I=u.filter(S=>Tk(S,e)),h=e==null?void 0:e.avklaringsbehov.find(S=>S.definisjon===Ve.VURDER_NYTT_INNTKTSFRHLD),R=S=>{if(v.includes(S)){const P=v.filter(D=>D!==S);f(P)}else{const P=v.map(D=>D);P.push(S),f(P)}},E=S=>{const P=N(S),D=u.find(_=>!N(_.fom).isAfter(P)&&!N(_.tom).isBefore(P));if(!D)throw new Error(`Finner ikke periode som overlapper med fom ${S}`);return D},q=S=>()=>R(S);return!u||u.length<1?null:p.jsxs(B,{gap:"6",children:[p.jsxs(Ne,{className:Ou.statusOk,children:[I.map(S=>p.jsxs(Ne.Item,{open:v.filter(P=>P===S.fom).length>0,children:[p.jsxs(Ne.Header,{onClick:q(S.fom),children:[Du(S.fom,S.tom)," ",p.jsx(ak,{})]}),p.jsx(Ne.Content,{children:p.jsx(rE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:S})})]},S.fom)),o.map((S,P)=>p.jsxs(Ne.Item,{open:v.filter(D=>D===S.fom).length>0,children:[p.jsx(Ne.Header,{onClick:q(S.fom),children:Du(S.fom,S.tom)}),p.jsx(Ne.Content,{children:p.jsx(tE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:E(S.fom),formName:r,formFieldIndex:t,periodeFieldIndex:P,readOnly:a,erAksjonspunktÅpent:l,submittable:s,skalViseBegrunnelse:o.length===1,avklaringsbehov:h})})]},S.fom))]}),o.length>1&&p.jsxs(B,{gap:"4",className:Ou.aktivitetContainer,children:[p.jsxs("div",{children:[p.jsx(We,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:a,validate:[W]}),p.jsx(En,{ident:h==null?void 0:h.vurdertAv,date:h==null?void 0:h.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(fa,{isSubmittable:s,isReadOnly:a,isSubmitting:j.formState.isSubmitting,isDirty:j.formState.isDirty})})]})]})},ri=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),iE=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:a,erAksjonspunktÅpent:s,arbeidsgiverOpplysningerPerId:l})=>{var o,u;const k=z(),[v,f]=A.useState(!1),{control:b,watch:y}=he(),{fields:j,remove:I,insert:h}=Ze({control:b,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});j.sort((w,M)=>N(w.fom).diff(N(M.fom)));const R=(u=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:u.vurderInntektsforholdPerioder,E=()=>{const w=R==null?void 0:R.flatMap(M=>M.inntektsforholdListe.map(L=>L.aktivitetStatus)).reduce((M,L)=>(M.some(K=>K===L)||M.push(L),M),[]);return(w?w.length:0)>1?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):ri(ue.SELVSTENDIG_NAERINGSDRIVENDE,R)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):ri(ue.FRILANSER,R)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):ri(ue.DAGPENGER,R)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},q=()=>s?p.jsxs(Ie,{size:"small",variant:"warning",children:[p.jsx(ie,{size:"xsmall",level:"3",children:E()}),k.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):p.jsxs(p.Fragment,{children:[p.jsxs(x,{size:"small",children:[k.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),E()]}),p.jsx(T,{size:"small",children:k.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),S=(w,M,L,K)=>{const H=y(`${e}.${r}.perioder.${L}.inntektsforhold.${K}.skalRedusereUtbetaling`),C=y(`${e}.${r}.perioder.${L}.inntektsforhold.${K}.bruttoInntektPrÅr`);return{aktivitetStatus:w.aktivitetStatus,arbeidsgiverIdent:w.arbeidsgiverIdent,arbeidsforholdId:w.arbeidsforholdId,bruttoInntektPrÅr:M?C:void 0,skalRedusereUtbetaling:M?H:void 0}},P=(w,M,L)=>!N(w).isAfter(N(L))&&!N(M).isBefore(N(L)),D=A.useCallback(w=>{const M=j.find(C=>P(C.fom,C.tom,w));if(!M)throw new Error(`Finner ikke field somme inneholder dato ${w}`);const L=N(w).subtract(1,"day"),K={fom:N(M.fom).format(xe),tom:L.format(xe)},H={fom:N(w).format(xe),tom:M.tom};return[K,H]},[j]),_=A.useCallback(w=>{const M=j.find(je=>P(je.fom,je.tom,w));if(!M)throw new Error(`Finner ikke field somme inneholder dato ${w}`);const L=D(w),K=j.indexOf(M),H=M.inntektsforhold||[],C={inntektsforhold:H.map((je,Pe)=>S(je,!0,K,Pe)),fom:L[0].fom,tom:L[0].tom},le={inntektsforhold:H.map((je,Pe)=>S(je,!1,K,Pe)),fom:L[1].fom,tom:L[1].tom};I(K),h(K,[C,le])},[j]),U=A.useCallback(()=>{f(!0)},[v]),Y=A.useCallback(()=>{f(!1)},[v]);return p.jsxs(B,{gap:"8",children:[q(),!!R&&s&&p.jsx(p.Fragment,{children:p.jsx(Ie,{size:"small",variant:"info",title:"",children:p.jsx(m,{id:"TilkommetAktivitet.AksjonspunktAlert"})})}),p.jsxs(B,{gap:"0",children:[p.jsxs(F,{justify:"space-between",children:[p.jsx(ie,{size:"small",level:"3",children:p.jsx(m,{id:"TilkommetAktivitet.Heading"})}),p.jsx(ee,{variant:"tertiary",loading:!1,disabled:t,onClick:U,size:"small",type:"button",icon:p.jsx(Tp,{height:32,width:32}),children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Knapp"})})]}),v&&p.jsx(_R,{fields:j,forhåndsvisPeriodesplitt:D,lukkModal:Y,skalViseModal:v,utførPeriodesplitt:_}),p.jsx(sE,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:j,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:s,submittable:a})]})]})};N.extend(Ak);const{VURDER_NYTT_INNTKTSFRHLD:Ni}=Ve,Vr="VURDER_TILKOMMET_AKTIVITET_FORM",Ek=e=>{const n=e.find(r=>r.definisjon===Ni);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Ni}`);return n},lE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function oE(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Ik(t,e.forlengelseperioder).filter(a=>!Tk(a,e))}const dE=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:V(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),uE=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>dE(n))}),gE=(e,n)=>{const r=Ek(e.avklaringsbehov),t=oE(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:gt(n,e.vilkårsperiodeFom).periode,perioder:t.map(a=>uE(a))}},mE=(e,n)=>({[`${Vr}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===Ve.VURDER_NYTT_INNTKTSFRHLD)).map(r=>gE(r,n))}),kE=(e,n)=>{const r=N(e.fom).isBetween(n.fom,n.tom,"day","[]")||N(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=N(n.fom).isBetween(e.fom,e.tom,"day","[]")||N(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},vE=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),pE=(e,n)=>{var r,t;const a=e.perioder,s=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>a.filter(o=>kE(o,l)).map(o=>{const u=o.inntektsforhold.filter(k=>vE(k,l)).map(k=>{const v=!!k.skalRedusereUtbetaling,f=v?ge(k.bruttoInntektPrÅr):void 0;return{aktivitetStatus:k.aktivitetStatus,arbeidsgiverId:k.arbeidsgiverIdent,arbeidsforholdId:k.arbeidsforholdId,skalRedusereUtbetaling:v,bruttoInntektPrÅr:f}});return{fom:N(o.fom).isBefore(N(l.fom))?l.fom:o.fom,tom:N(o.tom).isAfter(N(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:u}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:s}},fE=(e,n,r)=>{const t=e[Vr].filter(a=>ar(r,a.periode.fom)).map(a=>pE(a,lE(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:Ni}},yE=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:a,readOnly:s,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:u,setTilkommetAktivitetFormIsDirty:k})=>{const v=$e({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:mE(t,o)}),{formState:{dirtyFields:f,isSubmitted:b,errors:y,isDirty:j},trigger:I,control:h}=v;A.useEffect(()=>{k(j)},[j]),A.useEffect(()=>{var P;b&&(P=f[Vr])!=null&&P[e]&&I()},[e]);const{fields:R}=Ze({name:Vr,control:h}),E=t[e],q=Ek(E.avklaringsbehov),S=q?Il(q.status):!1;return p.jsx($i,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:p.jsx("div",{className:Le.tilkommetAktivitet,children:p.jsx(Ue,{formMethods:v,onSubmit:P=>{Object.keys(y).length===0&&a(fE(P,t,o))},setDataOnUnmount:r,children:R.map((P,D)=>{const _=t.findIndex(U=>U.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp);return p.jsx("div",{style:{display:_===e?"block":"none"},children:p.jsx(iE,{formName:Vr,beregningsgrunnlag:t[_],formFieldIndex:D,readOnly:s||!ar(o,t[_].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:S,arbeidsgiverOpplysningerPerId:u})},P.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:bE,VURDER_REFUSJON_BERGRUNN:jE,VURDER_NYTT_INNTKTSFRHLD:cE}=Ve,hE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,AE=e=>!!(e&&e.refusjonTilVurdering),IE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,ti=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,TE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:a,kodeverkSamling:s,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,skalHåndtereNyInntekt:v})=>{const[f,b]=A.useState(!1),[y,j]=A.useState(!1),[I,h]=A.useState(!1),R=ti(t[e].avklaringsbehov,bE),E=ti(t[e].avklaringsbehov,jE),q=ti(t[e].avklaringsbehov,cE),S=v&&q&&IE(t[e]),P=R&&hE(t[e]),D=E&&AE(t[e]);return p.jsxs(B,{gap:"2",children:[S&&p.jsx(yE,{aktivtBeregningsgrunnlagIndeks:e,formData:u,setFormData:k,submittable:l&&!y&&!I,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:a,setTilkommetAktivitetFormIsDirty:b}),D&&p.jsx(NR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!I,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,vilkarperioder:a,setRefusjonFormIsDirty:j}),P&&p.jsx(tR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!y,readOnly:n,submitCallback:r,kodeverkSamling:s,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,vilkårsperioder:a,setFordelingFormIsDirty:h})]})},RE=Me(Tl),{FORDEL_BEREGNINGSGRUNNLAG:EE,VURDER_REFUSJON_BERGRUNN:NE,VURDER_NYTT_INNTKTSFRHLD:qE}=Ve,SE=(e,n)=>{const r=gt(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:a}=r.periode;return a!==null?`${N(t).format(se)} - ${N(a).format(se)}`:`${N(t).format(se)} - `}return`${N(e.vilkårsperiodeFom).format(se)}`},Nk=(e,n)=>e.avklaringsbehov.some(r=>r.definisjon===NE||r.definisjon===EE||r.definisjon===qE&&n),PE=(e,n,r)=>Nk(e,r)&&ar(n,e.vilkårsperiodeFom),BE=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:a,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:u,skalHåndtereNyInntekt:k=!0})=>{const v=n.filter(j=>Nk(j,k)),[f,b]=A.useState(0);if(v.length===0)return null;const y=v.length>1;return p.jsx(De,{value:RE,children:p.jsxs(B,{gap:"2",children:[y&&p.jsx(ir,{value:f.toString(),onChange:j=>b(Number(j)),children:p.jsx(ir.List,{children:v.map((j,I)=>p.jsx(ir.Tab,{value:I.toString(),label:SE(j,e.perioder),className:PE(j,e.perioder,k)?"harAksjonspunkt":""},j.skjaeringstidspunktBeregning))})}),p.jsx(TE,{aktivtBeregningsgrunnlagIndeks:f,kodeverkSamling:r,submitCallback:t,readOnly:a,beregningsgrunnlagListe:v,vilkarperioder:e.perioder,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:u,skalHåndtereNyInntekt:k})]})})},Vu=[re.FORDEL_BEREGNINGSGRUNNLAG,re.VURDER_REFUSJON_BERGRUNN],FE=({arbeidsgiverOpplysningerPerId:e})=>{const n=Qn(Vu),{behandling:r}=A.use(Rn),t=Tn(r),{data:a,isFetching:s}=In(t.beregningsgrunnlagOptions(r));return i.jsx(Xn,{standardPanelProps:n,faktaPanelKode:Zn.FORDELING,faktaPanelMenyTekst:z().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Vu.some(l=>ia(l,r.aksjonspunkt)),children:s?i.jsx(An,{}):i.jsx(xE,{kodeverkSamling:n.alleKodeverk,beregningsgrunnlagVilkår:OE(n.behandling.vilkår,a),beregningsgrunnlagListe:DE(a),submitCallback:_E(n.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:n.readOnly,submittable:n.submittable})})},xE=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=wn();return i.jsx(BE,{...e,formData:n,setFormData:r})},wE=e=>{switch(e){case Ve.FORDEL_BEREGNINGSGRUNNLAG:return re.FORDEL_BEREGNINGSGRUNNLAG;case Ve.VURDER_REFUSJON_BERGRUNN:return re.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},_E=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:wE(a.kode),...a.grunnlag[0]}));return e(t)},OE=(e,n)=>{if(!e)return null;const r=e.find(t=>t.vilkarType&&t.vilkarType===Hn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[{avslagKode:r.avslagKode??void 0,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:n?n.skjaeringstidspunktBeregning:"",tom:Se},vilkarStatus:r.vilkarStatus}]}},DE=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];FE.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qn=({tittel:e,children:n})=>i.jsxs(B,{gap:"1",children:[i.jsx(x,{size:"medium",children:e}),n]});qn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const qk=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:n})=>{var t;const r=z();return i.jsxs(qn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[n])==null?void 0:t.navn)??"-"]}),i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};qk.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Sk=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const a=z(),s=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(k=>e.tilknyttedeBehandlingIder.includes(k.uuid)),o=(()=>{const k=l.length;return s&&k>1?i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):s?i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):k===0?i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),u=[...l].sort((k,v)=>new Date(k.opprettet).getTime()-new Date(v.opprettet).getTime());return i.jsxs(qn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,i.jsx(Q,{children:u.map(k=>{var v;return i.jsx(Q.Item,{children:i.jsxs(B,{gap:"1",children:[i.jsx("span",{children:(v=t.BehandlingType.find(({kode:f})=>f===k.type))==null?void 0:v.navn}),i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",i.jsx(Vt,{dateTimeString:k.opprettet,separator:"kl"})]}),k.avsluttet?i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",i.jsx(Vt,{dateTimeString:k.avsluttet,separator:"kl"})]}):null]})},k.uuid)})})]})};Sk.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  } | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
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
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const VE=e=>{const n=e.aktiveNaturalytelser.reduce((t,a)=>{const s=a.type;return s in t?{...t,[s]:[...t[s],a]}:{...t,[s]:[a]}},{}),r={};return Object.entries(n).forEach(([t,a])=>{const s=a.sort((l,o)=>qp({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=s.flatMap((l,o,u)=>{const k=u[o+1],v=l.periode.tomDato,f=k==null?void 0:k.periode.fomDato;return v===Se?[]:[{...l,periode:{fomDato:Mt(v,1),tomDato:f?Mt(f,-1):Se}}]})}),r},Pk=({inntektsmelding:e,alleKodeverk:n})=>{const r=z(),t=VE(e);return i.jsx(qn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?i.jsx("span",{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):i.jsx(B,{gap:"1",children:Object.entries(t).map(([a,s])=>{var l;return i.jsxs("div",{children:[i.jsx("span",{children:(l=n[an.NATURAL_YTELSE_TYPE].find(o=>o.kode===a))==null?void 0:l.navn}),i.jsx("ul",{children:s.map(o=>i.jsxs($.Fragment,{children:[i.jsxs("li",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",i.jsx(be,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Se&&i.jsxs("li",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",i.jsx(be,{dateString:o.periode.tomDato})]}),i.jsxs("li",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",V(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},a)})})})};Pk.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Bk=({kildeSystem:e})=>{const n=z(),r=A.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return i.jsx(qn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};Bk.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Fk=({inntektsmelding:e})=>{const n=z();return i.jsxs(qn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Fk.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const xk=({inntektsmelding:e,fagsak:n})=>i.jsx(ee,{type:"button",onClick:()=>{window.open(Yi(n.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:i.jsx(yp,{}),children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});xk.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
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
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const wk=({inntektsmelding:e})=>{const n=z();if(e.refusjonsperioder.length===0)return i.jsx(qn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:i.jsx("span",{children:e.refusjonPrMnd?V(e.refusjonPrMnd):i.jsx(m,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,a)=>new Date(t.fom).getTime()-new Date(a.fom).getTime());return i.jsxs(B,{gap:"0",children:[i.jsx("span",{children:"Krever refusjon"}),i.jsx("span",{children:V(e.refusjonPrMnd??0)}),i.jsx("span",{children:"Endringer i perioden:"}),i.jsx("ul",{children:r.map(t=>i.jsx("li",{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:V(t.refusjonsbeløp.verdi),fom:i.jsx(be,{dateString:t.fom})}})},t.indexKey))})]})};wk.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const _k=({startDatoPermisjon:e,ytelse:n})=>{const r=z();return e?i.jsxs(qn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[i.jsx("span",{children:e?i.jsx(be,{dateString:e}):"-"}),i.jsx("span",{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};_k.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const ME="_behandlingCircleIngen_131kr_1",GE="_behandlingCircleDenne_131kr_5",LE="_behandlingCircleAndre_131kr_9",KE="_container_131kr_13",$E="_ingenInntektsmeldinger_131kr_19",Mr={behandlingCircleIngen:ME,behandlingCircleDenne:GE,behandlingCircleAndre:LE,container:KE,ingenInntektsmeldinger:$E},Ok=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:a,behandling:s}=hn(),l=z();return i.jsxs(B,{gap:"4",className:Mr.container,children:[i.jsxs(F,{gap:"4",justify:"space-between",align:"start",children:[i.jsxs(ie,{level:"3",size:"small",children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",i.jsx(Vt,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),i.jsx(xk,{fagsak:a,inntektsmelding:e})]}),i.jsxs(Sp,{columns:3,gap:"8",children:[i.jsx(qk,{arbeidsgiverOpplysningerPerId:n,arbeidsgiverIdent:e.arbeidsgiverIdent}),i.jsx(qn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:i.jsx("span",{children:V(e.inntektPrMnd)})}),i.jsx(Sk,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:s}),i.jsx(Fk,{inntektsmelding:e}),i.jsx(_k,{ytelse:Gr(t,an.FAGSAK_YTELSE,a.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),i.jsx(Bk,{kildeSystem:e.kildeSystem}),i.jsx(Pk,{inntektsmelding:e,alleKodeverk:t}),i.jsx(wk,{inntektsmelding:e})]})]})};Ok.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const UE={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Mu=Me(UE),Dk=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=hn(),[a,s]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=k=>{s(a&&k===a.orderBy&&a.direction==="descending"?void 0:{orderBy:k,direction:a&&k===a.orderBy&&a.direction==="ascending"?"descending":"ascending"})},o=a?HE({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:a.orderBy,behandling:t}):r,u=(a==null?void 0:a.direction)==="ascending"?o:o.toReversed();return u.length===0?i.jsx(De,{value:Mu,children:i.jsxs(F,{gap:"2",justify:"center",align:"center",className:Mr.ingenInntektsmeldinger,children:[i.jsx(T,{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.ingen"})}),i.jsx($p,{})]})}):i.jsx(De,{value:Mu,children:i.jsxs(c,{sort:a,onSortChange:k=>l(k),children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),i.jsx(c.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),i.jsx(c.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),i.jsx(c.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),i.jsx(c.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),i.jsx(c.HeaderCell,{})]})}),i.jsx(c.Body,{children:u.map(k=>{var v;return i.jsxs(c.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:i.jsx(Ok,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:k}),children:[i.jsx(c.DataCell,{children:i.jsx(Vt,{dateTimeString:k.innsendingstidspunkt,separator:"kl"})}),i.jsx(c.DataCell,{children:((v=e[k.arbeidsgiverIdent])==null?void 0:v.navn)??"-"}),i.jsx(c.DataCell,{children:k.startDatoPermisjon?i.jsx(be,{dateString:k.startDatoPermisjon}):"-"}),i.jsx(c.DataCell,{children:V(k.inntektPrMnd)}),i.jsx(c.DataCell,{children:i.jsx(YE,{behandling:t,inntektsmelding:k})})]},`${k.journalpostId}-${k.internArbeidsforholdId}`)})})]})})},HE=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((a,s)=>{var u,k;const l=(u=n[a.arbeidsgiverIdent])==null?void 0:u.navn,o=(k=n[s.arbeidsgiverIdent])==null?void 0:k.navn;return ai(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((a,s)=>{const l=qi({behandling:t,inntektsmelding:a}),o=qi({behandling:t,inntektsmelding:s});return ai(l,o)}):e.slice().sort((a,s)=>{const l=a[r],o=s[r];return ai(l,o)}),ai=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,YE=({behandling:e,inntektsmelding:n})=>{const r=qi({behandling:e,inntektsmelding:n});return r==="DENNE"?i.jsxs(F,{gap:"1",align:"center",children:[i.jsx(Ia,{className:Mr.behandlingCircleDenne}),i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?i.jsxs(F,{gap:"1",align:"center",children:[i.jsx(Ia,{className:Mr.behandlingCircleAndre}),i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):i.jsxs(F,{gap:"1",align:"center",children:[i.jsx(Ia,{className:Mr.behandlingCircleIngen}),i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},qi=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Dk.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const CE=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r,alleBehandlinger:t}=A.use(Rn),a=Qn(),s=Tn(r),{data:l}=In(s.inntektsmeldingerOptions(r));return i.jsx(Xn,{standardPanelProps:a,faktaPanelKode:Zn.INNTEKTSMELDINGER,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:l?i.jsx(Dk,{inntektsmeldinger:l,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e}):i.jsx(An,{})})};CE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const zE=e=>Mt(e,1),Vk=(e,n)=>N(zE(e)).isSame(n)?n:e,Mk=(e,n,r)=>{if(!(!n||!r))return N(e).isBefore(n)?n:Vk(e,r)},Gk=(e,n,r)=>{if(!(!n||!r))return N(e).isAfter(r)?r:Vk(e,n)},JE=[ke.SYKEPENGER,ke.FORELDREPENGER,ke.PLEIEPENGER,ke.SVANGERSKAPSPENGER,ke.UTENLANDSK_ARBEIDSFORHOLD],xt=(e,...n)=>!!e&&n.includes(e),WE=e=>xt(e,ke.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",ZE=(e,n)=>{const r=e?n[e]:void 0;return r?r.erPrivatPerson?`${r.navn} (${ye(r.fødselsdato)})`:r.identifikator?`${r.navn} (${r.identifikator})`:r.navn:"-"},QE=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",Lk=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:a,ferdiglignetNæring:s})=>i.jsxs(B,{gap:"4",children:[xt(e,ke.ARBEID,ke.NARING,...JE)&&i.jsxs(F,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:WE(e)})}),i.jsx(T,{size:"small",children:ZE(n,r)})]}),xt(e,ke.ARBEID)&&i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Stillingsandel"})}),i.jsx(T,{size:"small",children:t})]})]}),xt(e,ke.NARING)&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Registreringsdato"})}),i.jsx(T,{size:"small",children:a?ye(a):"-"})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:QE(s)})}),s.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>i.jsxs(F,{gap:"5",children:[i.jsx(T,{size:"small",children:l.år}),i.jsx(T,{size:"small",children:V(l.beløp)})]},l.år))]})]})]});Lk.__docgenInfo={description:`ValgtAktivitetSubForm

Viser informasjon om valgt aktivitet`,methods:[],displayName:"ValgtAktivitetSubForm",props:{valgtAktivitetstype:{required:!1,tsType:{name:"string"},description:""},arbeidsgiverReferanse:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},stillingsandel:{required:!0,tsType:{name:"number"},description:""},naringRegistreringsdato:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const XE="_panel_18tdb_5",eN="_colMargin_18tdb_9",nN="_margin_18tdb_13",Nt={panel:XE,colMargin:eN,margin:nN},rN=mn(3),tN=kn(1500),wt=(e,n,r)=>e?!!n&&!r:!0,aN=(e,n)=>{const r=sp(e,n);return r?r.months>=1?i.jsx(m,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):i.jsx(m,{id:"ActivityPanel.Days",values:{days:r.days}}):i.jsx("span",{})},sN=(e,n,r,t)=>r||wt(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",Kk=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:a,harAksjonspunkt:s,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:u,ferdiglignetNæring:k,oppdaterAktivitet:v,valgteFormValues:f,fastsattOpptjening:b,lukkPeriode:y})=>{var Y;const j=z(),I=$e({defaultValues:f}),{arbeidsgiverReferanse:h,erGodkjent:R,erEndret:E,aktivitetType:q,stillingsandel:S,naringRegistreringsdato:P}=u,D=Mk(u.opptjeningFom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),_=Gk(u.opptjeningTom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),U=A.useCallback((...w)=>i.jsx("b",{children:w}),[]);return i.jsx(Ue,{formMethods:I,onSubmit:w=>v(w),children:i.jsx(Ig,{className:Nt.panel,merknaderFraBeslutter:l[re.VURDER_PERIODER_MED_OPPTJENING],children:i.jsxs(B,{gap:"6",children:[i.jsxs(B,{gap:"2",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Details"})}),i.jsxs(F,{gap:"2",children:[i.jsx(ee,{className:Nt.margin,size:"xsmall",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:j.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(m,{id:"Timeline.prevPeriodShort"})}),i.jsx(ee,{className:Nt.margin,size:"xsmall",icon:i.jsx(sa,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:j.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(m,{id:"Timeline.nextPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx(Kn,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:j.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsxs(F,{gap:"1",children:[i.jsxs("div",{className:Nt.colMargin,children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Period"})}),D&&_&&i.jsxs(F,{gap:"2",children:[i.jsx(T,{size:"small",children:Eg(D,_)}),i.jsx(T,{size:"small",children:aN(D,_)})]})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Activity"})}),i.jsx(T,{size:"small",children:(Y=n.find(w=>w.kode===q))==null?void 0:Y.navn})]})]})]}),i.jsx(Lk,{valgtAktivitetstype:q,arbeidsgiverReferanse:h,arbeidsgiverOpplysningerPerId:o,stillingsandel:S,naringRegistreringsdato:P,ferdiglignetNæring:k}),!wt(s,R,E)&&i.jsx(Te,{name:"erGodkjent",hideLegend:!0,validate:[W],isReadOnly:e,isEdited:E,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:j.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:i.jsx(m,{id:"ActivityPanel.IkkeGodkjent",values:{b:U}}),value:"false"}]}),i.jsx(We,{name:"begrunnelse",label:i.jsx(m,{id:sN(R,E,e,s)}),validate:[W,rN,tN,vn],maxLength:1500,readOnly:e||wt(s,R,E)}),!wt(s,R,E)&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"primary",disabled:!I.formState.isDirty,children:i.jsx(m,{id:"ActivityPanel.Oppdater"})}),i.jsx(ee,{size:"small",variant:"secondary",onClick:r,type:"button",children:i.jsx(m,{id:"ActivityPanel.Avbryt"})})]})]})})})};Kk.__docgenInfo={description:`ValgtAktivitetForm

Viser informasjon om valgt aktivitet`,methods:[],displayName:"ValgtAktivitetForm",props:{valgtOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  erGodkjent: boolean | null;
  erEndret: boolean;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}},description:""},valgteFormValues:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  erGodkjent: boolean | undefined;
  begrunnelse: string;
}`,signature:{properties:[{key:"erGodkjent",value:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  erGodkjent: boolean | undefined;
  begrunnelse: string;
}`,signature:{properties:[{key:"erGodkjent",value:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},avbrytAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNesteAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigeAktivitet:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},opptjeningAktivitetTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const iN=e=>e===!1?"danger":e===!0?"success":"warning",lN={[ke.ARBEID]:i.jsx(Rr,{width:20,height:20}),[ke.AAP]:i.jsx(Tr,{width:20,height:20}),[ke.DAGPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.FORELDREPENGER]:i.jsx(Pp,{width:20,height:20}),[ke.FRILANS]:i.jsx(Rr,{width:20,height:20}),[ke.MILITAR_ELLER_SIVILTJENESTE]:i.jsx(Rr,{width:20,height:20}),[ke.NARING]:i.jsx(Rr,{width:20,height:20}),[ke.OMSORGSPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.OPPLARINGSPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.PLEIEPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.SVANGERSKAPSPENGER]:i.jsx(Xp,{width:20,height:20}),[ke.SYKEPENGER]:i.jsx(rf,{width:20,height:20}),[ke.UTENLANDSK_ARBEIDSFORHOLD]:i.jsx(Cp,{width:20,height:20}),[ke.ETTERLONN_SLUTTPAKKE]:i.jsx(Rr,{width:20,height:20})},oN={danger:i.jsx(Dg,{}),success:i.jsx(Ji,{}),warning:i.jsx(Rp,{})},dN=(e,n,r,t,a)=>e.map((s,l)=>{var o;return{id:l,start:N(Mk(s.opptjeningFom,t,a)).toDate(),end:N(Gk(s.opptjeningTom,t,a)).toDate(),radId:(o=r.find(u=>u.aktivitetTypeKode===s.aktivitetType&&u.arbeidsforholdRef===s.arbeidsforholdRef&&u.arbeidsgiverReferanse===s.arbeidsgiverReferanse))==null?void 0:o.id,status:iN(n[l].erGodkjent)}}),uN=(e,n,r)=>e.reduce((a,s)=>(a.some(o=>o.aktivitetType===s.aktivitetType&&o.arbeidsforholdRef===s.arbeidsforholdRef&&o.arbeidsgiverReferanse===s.arbeidsgiverReferanse)||a.push(s),a),[]).map((a,s)=>{const l=n.find(u=>u.kode===a.aktivitetType),o=(l==null?void 0:l.kode)===ke.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:s+1,label:o||"",aktivitetTypeKode:a.aktivitetType,arbeidsforholdRef:a.arbeidsforholdRef,arbeidsgiverReferanse:a.arbeidsgiverReferanse}}),$k=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:a,setValgtAktivitetIndex:s})=>{const l=z(),o=r==null?void 0:r.opptjeningFom,u=r==null?void 0:r.opptjeningTom,k=A.useMemo(()=>uN(e,a,l),[e]),v=A.useMemo(()=>dN(e,n,k,o,u),[n]),f=A.useCallback(b=>{const y=v.find(j=>j.id===b);y&&s(y.id)},[v,s]);return!o||!u?null:i.jsxs(Oe,{startDate:N(o).subtract(1,"months").toDate(),endDate:N(u).add(10,"days").toDate(),children:[i.jsxs(Oe.Pin,{date:N(o).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTidslinje.StartDato"})}),i.jsx(T,{size:"small",children:i.jsx(be,{dateString:o})})]}),i.jsxs(Oe.Pin,{date:N(u).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTidslinje.SluttDato"})}),i.jsx(T,{size:"small",children:i.jsx(be,{dateString:u})})]}),k.map(b=>i.jsx(Oe.Row,{label:b.label,icon:lN[b.aktivitetTypeKode],children:v.filter(y=>y.radId===b.id).map(y=>i.jsx(Oe.Period,{start:y.start,end:y.end,status:y.status,icon:oN[y.status],onSelectPeriod:()=>f(y.id),isActive:t===y.id,statusLabel:b.label},y.id))},b.id))]})};$k.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  erGodkjent: boolean | null;
  erEndret: boolean;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:"OpptjeningAktivitet[]"},description:""},formVerdierForAlleAktiviteter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erGodkjent: boolean | undefined;
  begrunnelse: string;
}`,signature:{properties:[{key:"erGodkjent",value:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"FormValues[]"},description:""},valgtAktivitetIndex:{required:!1,tsType:{name:"number"},description:""},opptjeningAktivitetTypes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const gN="_container_ivkzi_1",mN={container:gN},kN=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(i.jsx(m,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(i.jsx(m,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(i.jsx(m,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},vN=e=>N(e).add(1,"days").format(xe),pN=(e,n)=>[...e].sort((r,t)=>{var l,o;const a=(l=n.find(u=>u.kode===r.aktivitetType))==null?void 0:l.navn,s=(o=n.find(u=>u.kode===t.aktivitetType))==null?void 0:o.navn;return a&&s?a.localeCompare(s):0}),Gu=e=>Mt(e,1),fN=(e,n)=>n?e.filter(r=>N(n.opptjeningFom).isBefore(Gu(r.opptjeningTom))).filter(r=>N(r.opptjeningFom).isBefore(Gu(n.opptjeningTom))):[],Uk=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:a,alleMerknaderFraBeslutter:s,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:u,alleKodeverk:k}=hn(),v=a.length>0,f=k[an.OPPTJENING_AKTIVITET_TYPE],b=e&&r?pN(fN(e,r),f):[],{mellomlagretFormData:y,setMellomlagretFormData:j}=wn(),[I,h]=A.useState(y??b.map(L=>({erGodkjent:L.erGodkjent??void 0,begrunnelse:L.begrunnelse??""}))),[R,E]=A.useState(yN(b)),[q,S]=A.useState(!1);A.useEffect(()=>()=>{j(I)},[I]),A.useEffect(()=>{const L=I.findIndex(K=>K.erGodkjent===void 0||K.erGodkjent===null);E(L!==-1?L:void 0)},[I]);const P=()=>{S(!0);const L=b.map((K,H)=>({arbeidsforholdRef:K.arbeidsforholdRef,arbeidsgiverReferanse:K.arbeidsgiverReferanse,opptjeningFom:K.opptjeningFom,opptjeningTom:K.opptjeningTom,aktivitetType:K.aktivitetType,erGodkjent:I[H].erGodkjent,begrunnelse:I[H].begrunnelse})).filter(K=>K.begrunnelse);o({opptjeningsaktiviteter:L,kode:re.VURDER_PERIODER_MED_OPPTJENING}).then(()=>S(!1))},D=()=>{R!==void 0&&R<b.length-1&&E(R+1)},_=()=>{R!==void 0&&R>0&&E(R-1)},U=L=>{R!==void 0&&h(K=>Object.assign([],K,{[R]:L}))},Y=()=>E(void 0),w=()=>{E(void 0)},M=I.some(L=>L.erGodkjent===null||L.erGodkjent===void 0);return i.jsxs(B,{gap:"6",className:mN.container,children:[l&&i.jsx(Jn,{children:kN(b)}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),i.jsx(T,{size:"small",children:i.jsx(be,{dateString:vN(r==null?void 0:r.opptjeningTom)})})]}),i.jsx($k,{opptjeningPerioder:b,formVerdierForAlleAktiviteter:I,opptjeningAktivitetTypes:f,setValgtAktivitetIndex:E,valgtAktivitetIndex:R,fastsattOpptjening:r}),R!==void 0&&i.jsx(Kk,{valgtOpptjeningAktivitet:b[R],valgteFormValues:I[R],readOnly:u,opptjeningAktivitetTyper:f,avbrytAktivitet:Y,oppdaterAktivitet:U,fastsattOpptjening:r,velgNesteAktivitet:D,velgForrigeAktivitet:_,harAksjonspunkt:v,alleMerknaderFraBeslutter:s,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:w},R),v&&b.length>0&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"primary",onClick:P,disabled:R!==void 0||q||u||M,loading:q,type:"button",children:i.jsx(m,{id:"OpptjeningFaktaForm.Confirm"})})})]})},yN=e=>{if(e.length===0)return;const n=e.findIndex(r=>r.erGodkjent===void 0||r.erGodkjent===null);return n!==-1?n:0};Uk.__docgenInfo={description:`OpptjeningFaktaPanel

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
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  erGodkjent: boolean | null;
  erEndret: boolean;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:"OpptjeningAktivitet[]"},description:""},ferdiglignetNæring:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const bN={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},jN=Me(bN),Hk=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,a=(e==null?void 0:e.ferdiglignetNæring)||[];return i.jsx(De,{value:jN,children:i.jsx(Uk,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:a})})};Hk.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  fastsattOpptjening: FastsattOpptjening;
  opptjeningAktivitetList?: OpptjeningAktivitet[];
  ferdiglignetNæring?: FerdiglignetNæring[] | null;
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
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  erGodkjent: boolean | null;
  erEndret: boolean;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:"OpptjeningAktivitet[]",required:!1}},{key:"ferdiglignetNæring",value:{name:"union",raw:"FerdiglignetNæring[] | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},{name:"null"}],required:!1}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const cN=[re.VURDER_PERIODER_MED_OPPTJENING],hN=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r}=A.use(Rn),t=Qn(cN),a=Tn(r),{data:s,isFetching:l}=In(a.opptjeningOptions(r));return i.jsx(Xn,{standardPanelProps:t,faktaPanelKode:Zn.OPPTJENINGSVILKARET,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:r.vilkår.some(o=>o.vilkarType===Hn.OPPTJENINGSVILKARET)&&r.vilkår.some(o=>o.vilkarType===Hn.MEDLEMSKAPSVILKARET&&o.vilkarStatus===Vg.OPPFYLT),children:l?i.jsx(An,{}):i.jsx(Hk,{opptjening:s,arbeidsgiverOpplysningerPerId:e})})};hN.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Si=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Si||{});const AN="_boks_kspkv_1",IN="_aksjonspunkt_kspkv_9",TN="_harBorderTop_kspkv_13",Yk={boks:AN,aksjonspunkt:IN,harBorderTop:TN},RN=Fg.bind(Yk),Ck=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>i.jsx("div",{className:RN(Yk.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});Ck.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const EN="_inline_17flc_1",NN="_phoneIcon_17flc_5",qN="_docIcon_17flc_11",si={inline:EN,phoneIcon:NN,docIcon:qN},zk=({saksnummer:e,inntektsmelding:n})=>i.jsxs(B,{gap:"4",children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(T,{size:"small",children:V(n.inntektPrMnd)})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(T,{size:"small",children:i.jsx(m,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),n.refusjonPrMnd&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(T,{size:"small",children:V(n.refusjonPrMnd)})]}),i.jsxs(zr,{href:Yi(e,n.journalpostId,n.dokumentId),target:"_blank",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:si.inline,children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx(Gg,{className:si.docIcon})]}),i.jsxs(F,{gap:"4",align:"center",children:[i.jsx(Lg,{className:si.phoneIcon}),i.jsxs(B,{gap:"1",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(oe,{children:n.kontaktpersonNavn}),i.jsx(oe,{children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})]})]})]});zk.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const SN="_inline_p7hb9_1",PN="_arrow_p7hb9_5",ii={inline:SN,arrow:PN},Jk=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=A.useState(!1),a=A.useMemo(()=>BN(n,e),[e]);return i.jsxs(i.Fragment,{children:[e.length>0&&i.jsxs(B,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsposterPanel.Inntekter"})}),i.jsx(B,{gap:"1",width:"150px",children:a.filter((s,l)=>r?!0:l<3).map(s=>i.jsxs(F,{justify:"space-between",children:[i.jsxs(F,{gap:"1",children:[i.jsx(T,{size:"small",children:i.jsx(m,{id:`InntektsposterPanel.${N(s.fom).month()+1}`})}),i.jsx(T,{size:"small",children:N(s.fom).year()})]},s.fom),i.jsx(T,{size:"small",children:V(s.beløp)})]},s.fom))}),i.jsxs(zr,{onClick:s=>{s.preventDefault(),t(!r)},href:"",children:[i.jsx("span",{children:i.jsx(T,{size:"small",className:ii.inline,children:i.jsx(m,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?i.jsx(Ci,{className:ii.arrow}):i.jsx(Xt,{className:ii.arrow})]})]}),e.length===0&&i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsposterPanel.IngenInntekt"})})]})},BN=(e,n)=>{const t=N(e).startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),u=n.find(k=>N(k.fom).startOf("month").format(xe)===o);s.push({beløp:(u==null?void 0:u.beløp)||0,fom:o})}return s};Jk.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const FN="_hjelpetekst_dvkw1_1",xN="_image_dvkw1_5",wN="_hjelpetekstInnhold_dvkw1_9",_N="_exclamationmarkIcon_dvkw1_14",ON="_checkmarkIcon_dvkw1_21",Pr={hjelpetekst:FN,image:xN,hjelpetekstInnhold:wN,exclamationmarkIcon:_N,checkmarkIcon:ON},DN="arbeidsforhold",Wk=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:a,arbeidsgiverOpplysningerPerId:s,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:u,alleKodeverk:k})=>{var D;const v=z(),{inntektsmeldinger:f,inntekter:b}=a,y=t[e],j=f.find(_=>VN(y,_)),I=(D=b.find(_=>_.arbeidsgiverIdent===y.arbeidsgiverIdent))==null?void 0:D.inntekter,h=t.filter(_=>_.arbeidsgiverIdent===y.arbeidsgiverIdent).length>1,R=s[y.arbeidsgiverIdent],E=A.useRef(null),[q,S]=A.useState(!1),P=A.useCallback(()=>S(_=>!_),[]);return i.jsx(Ck,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:i.jsxs(F,{gap:"6",children:[!o&&i.jsx(Gi,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:Pr.checkmarkIcon}),o&&i.jsx(yr,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:Pr.exclamationmarkIcon}),i.jsxs(B,{gap:"4",width:"90%",children:[i.jsxs(F,{justify:"space-between",children:[i.jsxs("div",{children:[i.jsx(x,{size:"small",children:R.navn}),y.arbeidsgiverIdent&&i.jsxs(oe,{children:["(",R.erPrivatPerson&&R.fødselsdato?i.jsx(be,{dateString:R.fødselsdato}):y.arbeidsgiverIdent,")"]})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Periode"})}),i.jsxs(T,{size:"small",children:[y&&i.jsx(Ge,{dateStringFom:y.fom,dateStringTom:y.tom!==Se?y.tom:void 0}),!y&&"-"]})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Kilde"})}),i.jsx(T,{size:"small",children:i.jsx(m,{id:y?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),i.jsxs(T,{size:"small",children:[(j==null?void 0:j.motattDato)&&i.jsx(be,{dateString:j.motattDato}),!(j!=null&&j.motattDato)&&i.jsx(m,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),h&&y.eksternArbeidsforholdId&&i.jsxs(F,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Id"})}),i.jsxs("div",{children:[y.eksternArbeidsforholdId.length<50&&i.jsx(T,{size:"small",children:y.eksternArbeidsforholdId}),y.eksternArbeidsforholdId.length>=50&&i.jsx(wg,{content:MN(y.eksternArbeidsforholdId),placement:"bottom",children:i.jsx(T,{size:"small",children:`${y.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),y.stillingsprosent&&i.jsxs(F,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),i.jsx(T,{size:"small",children:`${y.stillingsprosent}%`})]}),y.permisjonOgMangel&&i.jsx(F,{gap:"2",children:i.jsxs(i.Fragment,{children:[i.jsx(x,{size:"small",children:`${Gr(k,an.PERMISJONSBESKRIVELSE_TYPE,y.permisjonOgMangel.type)} 100%`}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:y.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),j&&i.jsx(zk,{saksnummer:r,inntektsmelding:j}),!j&&I&&i.jsx(Jk,{inntektsposter:I,skjæringstidspunkt:u}),i.jsx(Te,{name:`${DN}.${e}.permisjonStatus`,label:i.jsxs(F,{gap:"2",children:[i.jsx(m,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),i.jsxs("div",{className:Pr.image,children:[i.jsx(ee,{ref:E,type:"button",variant:"tertiary",onClick:P,icon:i.jsx(zi,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),i.jsx(or,{open:q,onClose:P,anchorEl:E.current,className:Pr.hjelpetekst,children:i.jsx(or.Content,{className:Pr.hjelpetekstInnhold,children:i.jsxs(B,{gap:"2",children:[i.jsx(T,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),i.jsx(T,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),i.jsx(T,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),i.jsx(T,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[W],isReadOnly:l,radios:[{label:v.formatMessage({id:j?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Si.IKKE_BRUK_PERMISJON},{label:v.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Si.BRUK_PERMISJON}]})]})]})},n)},VN=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),MN=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")};Wk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const GN="arbeidsforhold",Zk=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:u}=he(),{fields:k}=Ze({control:u,name:GN});return i.jsx("div",{children:k.map((v,f)=>i.jsx(Wk,{fieldId:v.id,index:f,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o},v.id))})};Zk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}>`}],raw:"AoIArbeidsforhold[]"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const LN=mn(3),KN=kn(1500),$N=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),Qk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:a,isReadOnly:s,alleKodeverk:l}=hn(),o=A.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(I=>{var h;return(h=I.permisjonOgMangel)==null?void 0:h.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:u}=o,k=A.useMemo(()=>[...u].sort($N(n)),[u,n]),v=A.useMemo(()=>({arbeidsforhold:k.map(I=>{var h;return{permisjonStatus:(h=I.permisjonOgMangel)==null?void 0:h.permisjonStatus}}),begrunnelse:r[0].begrunnelse??""}),[k]),{mellomlagretFormData:f,setMellomlagretFormData:b}=wn(),y=$e({defaultValues:f||v});A.useEffect(()=>()=>{b(y.getValues())},[]);const j=r.some(I=>I.status===Un.OPPRETTET);return i.jsxs(B,{gap:"8",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"PermisjonFaktaPanel.Overskrift"})}),i.jsx(T,{size:"small",children:i.jsx(m,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:ye(o.skjæringstidspunkt)}})})]}),j&&i.jsx(Jn,{children:i.jsx(m,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),i.jsx(Ue,{formMethods:y,onSubmit:I=>a({kode:re.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:I.arbeidsforhold.map((h,R)=>({internArbeidsforholdId:k[R].internArbeidsforholdId,arbeidsgiverIdent:k[R].arbeidsgiverIdent,permisjonStatus:h.permisjonStatus})),begrunnelse:I.begrunnelse}),children:i.jsxs(B,{gap:"6",children:[i.jsx(Zk,{saksnummer:t.saksnummer,sorterteArbeidsforhold:k,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:j,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),i.jsx(We,{label:i.jsx(x,{size:"small",children:i.jsx(m,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[W,LN,KN,vn],maxLength:1500,readOnly:s}),!s&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"primary",disabled:!y.formState.isDirty||y.formState.isSubmitting,loading:y.formState.isSubmitting,children:i.jsx(m,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};Qk.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const UN={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i Aa-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},HN=Me(UN),Xk=e=>i.jsx(De,{value:HN,children:i.jsx(Qk,{...e})});Xk.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
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
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"permisjonOgMangel",value:{name:"union",raw:"PermisjonOgMangel | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak | null;
  permisjonOgMangel?: PermisjonOgMangel | null;
  saksbehandlersVurdering: string | null;
  begrunnelse: string | null;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Lu=[re.VURDER_ARBEIDSFORHOLD_PERMISJON],YN=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r}=A.use(Rn),t=Qn(Lu),a=Tn(r),{data:s}=In(a.arbeidOgInntektOptions(r));return i.jsx(Xn,{standardPanelProps:t,faktaPanelKode:Zn.PERMISJON,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Lu.some(l=>ia(l,r.aksjonspunkt)),children:s?i.jsx(Xk,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(An,{})})};YN.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ae=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ae||{});function ev(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},Br={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function CN(){if($u)return Br;$u=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Br.Fragment=n,Br.jsx=r,Br.jsxs=r,Br}var Uu;function zN(){return Uu||(Uu=1,Ku.exports=CN()),Ku.exports}var d=zN(),Hu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Yu;function JN(){return Yu||(Yu=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Hu)),Hu.exports}var WN=JN();const ZN=ev(WN);var ya=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(ya||{}),ba=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(ba||{}),G=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(G||{});ba.BRUKERS_ANDEL;ba.FRILANS;ba.EGEN_NÆRING;const QN=["FL","AT_FL","AT_FL_SN","FL_SN"],XN=["AT","AT_FL","AT_FL_SN","AT_SN"],eq=["SN","FL_SN","AT_FL_SN","AT_SN"],nq=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],rq=["DP","SP_AV_DP","PSB_AV_DP","AAP"],tq=["KUN_YTELSE"],aq=["MS"],nv=e=>rq.some(n=>n===e),sq=e=>tq.some(n=>n===e),rv=e=>QN.some(n=>n===e),tv=e=>XN.some(n=>n===e),av=e=>eq.some(n=>n===e),iq=e=>nq.some(n=>n===e),lq=e=>aq.some(n=>n===e);var sv=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(sv||{});const ja=e=>e==="OPPR";var iv=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(iv||{}),gn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(gn||{}),Pi=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(Pi||{}),Bi=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Bi||{}),lr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(lr||{}),lv=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(lv||{}),Sl=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(Sl||{}),me=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(me||{}),ov=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(ov||{}),fn=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(fn||{});const Cu=e=>e?`...${e.substring(e.length-4,e.length)}`:"",ca=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${N(t).format(se)})${Cu(n)}`:r:s?`${r} (${s})${Cu(n)}`:r},zu=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[ya.OPPTJENING_AKTIVITET_TYPE].find(t=>{var a;return t.kode===((a=e.arbeidsforhold)==null?void 0:a.arbeidsforholdType)}))==null?void 0:r.navn)||""},Fi=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?ca(t,e.arbeidsforhold.eksternArbeidsforholdId):zu(e,r)}return zu(e,r)},oq="_aksjonspunktBehandlerBorder_13dyh_1",dq="_aksjonspunktBehandlerHeader_13dyh_10",uq="_aksjonspunktBehandlerNoBorder_13dyh_27",gq="_verticalLine_13dyh_40",mq="_inputPadding_13dyh_54",kq="_inntektTableTB_13dyh_65",vq="_rowSpacer_13dyh_69",pq="_textAreaWrapperHeigh_13dyh_112",fq="_dynamiskKolonne_13dyh_119",yq="_textAreaStyle_13dyh_123",bq="_breddeInntekt_13dyh_139",jq="_warningIcon_13dyh_142",cq="_aksjonspunktWrapper_13dyh_148",ce={aksjonspunktBehandlerBorder:oq,aksjonspunktBehandlerHeader:dq,aksjonspunktBehandlerNoBorder:uq,verticalLine:gq,inputPadding:mq,inntektTableTB:kq,rowSpacer:vq,textAreaWrapperHeigh:pq,dynamiskKolonne:fq,textAreaStyle:yq,breddeInntekt:bq,warningIcon:jq,aksjonspunktWrapper:cq},hq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,dv=e=>e?e.filter(n=>n.aktivitetStatus===G.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>hq(n)):[],Pl=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=dv(n);return d.jsx(B,{gap:"2",children:o.map((u,k)=>d.jsxs(F,{gap:"4",align:"center",children:[d.jsx(T,{size:"small",children:Fi(u,t,r)}),d.jsx(ve,{name:`${s}.${a}.inntekt${k}`,validate:l?[W,Qe(178956970)]:[],readOnly:e,parse:Fe,className:ce.breddeInntekt,isEdited:e&&(!!u.overstyrtPrAar||u.overstyrtPrAar===0)})]},u.andelsnr))})};Pl.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===G.ARBEIDSTAKER)&&(r=dv(n).map(({andelsnr:t},a)=>{const s=e[`inntekt${a}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:s===void 0||s===""?0:ge(s),andelsnr:t}})),r};const Aq="_avsnittOverskrift_cm3sp_1",Iq="_panelLeft_cm3sp_5",Tq="_panelRight_cm3sp_15",Rq="_storSpace_cm3sp_26",Eq="_semiBoldText_cm3sp_29",Nq="_redError_cm3sp_35",qq="_tabellAktivitet_cm3sp_38",Sq="_tabellInntekt_cm3sp_48",Pq="_tagMargin_cm3sp_79",X={avsnittOverskrift:Aq,panelLeft:Iq,panelRight:Tq,storSpace:Rq,semiBoldText:Eq,næringEndringBeskrivelse:"_næringEndringBeskrivelse_cm3sp_32",redError:Nq,tabellAktivitet:qq,tabellInntekt:Sq,tagMargin:Pq},Ju="inntektField",Bq=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(lr.ARBEIDSFORHOLD_AVSLUTTET),ha=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!Bq(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},vr=(e,n)=>e.arbeidsforhold?`${Ju}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${Ju}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,Aa=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===G.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],uv=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},Fq=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return a?ca(a,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[ya.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},gv=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),xq=(e,n,r)=>{const t=Aa(e),a={};return t.forEach(s=>{if(!s.arbeidsforhold)return;const l=uv(s.arbeidsforhold),o=gv();o.tabellInnhold=Fq(s.arbeidsforhold,n,r),o.erTidsbegrenset=s.erTidsbegrensetArbeidsforhold!==void 0?s.erTidsbegrensetArbeidsforhold:!1,a[l]=[o]}),a},Bl=e=>e.sort((n,r)=>N(n.beregningsgrunnlagPeriodeFom).diff(N(r.beregningsgrunnlagPeriodeFom)))[0],mv=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===G.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var a,s,l,o;return((a=t.arbeidsforhold)==null?void 0:a.arbeidsgiverIdent)===((s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Fl=(e,n)=>{var r;const t=Bl(n);return!!((r=mv(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},wq=(e,n,r)=>{const t=ha(e),a=e[0].beregningsgrunnlagPeriodeFom,s=xq(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===a;Aa(l).forEach(u=>{const k=Fl(u,e),v=uv(u.arbeidsforhold),f=gv();f.tabellInnhold=u.overstyrtPrAar!==void 0&&u.overstyrtPrAar!==null?V(u.overstyrtPrAar):"",f.erTidsbegrenset=!1,f.isEditable=k?!0:o,f.inputfieldKey=vr(u,l),s[v].push(f)})}),s},_q=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",className:X.semiBoldText,children:V(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),Oq=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(oe,{children:ye(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),Dq=(e,n,r,t,a,s,l)=>{const o=[];return o.push(Oq(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((u,k)=>d.jsx($.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${u.periodeFom}`)})},`Col_Tittel_${u.periodeFom}`)},`PeriodeWrapper${k+1}`))]},"Tabletop")),Object.keys(e).forEach(u=>{const k=e[u];o.push(d.jsx("tr",{children:k.map(v=>v.isEditable?d.jsx($.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?ce.adjustedField:void 0,children:d.jsx(ve,{name:`${s}.${a}.${v.inputfieldKey}`,validate:l?[W,Qe(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:Fe,className:ce.breddeInntekt})})},`Col-${v.inputfieldKey}`)},`key${v.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",children:v.tabellInnhold})},v.tabellInnhold))},u))}),o.push(d.jsx("tr",{className:ce.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(_q(t)),o},Vq=(e,n,r,t)=>{const a=[];return e.length<1||ha(e).forEach(s=>{const l=Aa(s).map(o=>{const u=vr(o,s),k=n.watch(`${t}.${r}.${u}`);return k===void 0||k===""?0:ge(k)}).reduce((o,u)=>o+u);a.push({brutto:l,periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom})}),a},bt=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=wq(n,r,t),u=n.some(f=>{var b;return(b=f.beregningsgrunnlagPrStatusOgAndel)==null?void 0:b.some(y=>y.aktivitetStatus===G.ARBEIDSTAKER&&(!!y.overstyrtPrAar||y.overstyrtPrAar===0))}),k=he(),v=Vq(n,k,a,s);return d.jsx("table",{className:ce.inntektTableTB,children:d.jsx("tbody",{children:Dq(o,e,u,v,a,s,l)})})};bt.buildInitialValues=e=>{const n={},r=ha(e),t=Bl(e);return r.forEach(a=>{(a.beregningsgrunnlagPrStatusOgAndel?a.beregningsgrunnlagPrStatusOgAndel.filter(s=>s.aktivitetStatus===G.ARBEIDSTAKER):[]).forEach(s=>{if(Fl(s,e)){const l=V(s.overstyrtPrAar);n[vr(s,a)]=l||""}else{const l=mv(s,t),o=V(l==null?void 0:l.overstyrtPrAar);n[vr(s,a)]=o||""}})}),n};bt.transformValues=(e,n)=>{const r=[],t=Bl(n);return ha(n).forEach(a=>{const s=Aa(a),l=[];s.forEach(o=>{if(Fl(o,n)){const u=ge(e[vr(o,a)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:u})}else{const u=ge(e[vr(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:u})}}),r.push({periodeFom:a.beregningsgrunnlagPeriodeFom,periodeTom:a.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const Mq="_border_uqgtr_1",Gq="_borderDark_uqgtr_7",Lq="_doubleLine_uqgtr_13",li={border:Mq,borderDark:Gq,doubleLine:Lq},Ee=({hasBorderDark:e,hasDoubleLine:n})=>n?d.jsx("div",{className:li.doubleLine}):d.jsx("div",{className:e?li.borderDark:li.border}),Kq="_colDevider_1att7_1",$q={colDevider:Kq},xi=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx("div",{style:{width:n},children:d.jsx("div",{className:$q.colDevider})})},kv=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,Uq=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return ca(r,e.arbeidsforhold.eksternArbeidsforholdId)},vv=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],Hq=(e,n)=>{const r=Uq(e,n),t=kv(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},Yq=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},Cq=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{vv(t).filter(a=>Yq(a)).map(a=>Hq(a,n)).forEach(a=>{r.some(({nøkkel:s})=>s===a.nøkkel)||r.push(a)})}),r},zq=(e,n)=>{const r=vv(e).find(t=>kv(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},Jq=(e,n)=>{const r=[];return n.forEach(t=>{const a=zq(t,e.nøkkel);a&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:a,beløpPrMåned:a/12})}),r},Wq=e=>{if(!e||e.length<2)return e;e.sort((t,a)=>N(t.fom).diff(N(a.fom)));const n=[];let r=N(e[0].fom);return e.forEach(t=>{if(!N(t.fom).isBefore(r)){const a=e.find(s=>N(s.fom).isAfter(t.fom)&&s.beløpPrÅr!==t.beløpPrÅr);if(a){const s=N(a.fom).subtract(1,"d");n.push({tom:s.format(xe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=s}else r=N(Se),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},Zq=(e,n)=>{const r=Cq(e,n);return r.forEach(t=>{const a=Jq(t,e);Wq(a).forEach(s=>t.naturalytelseEndringer.push(s))}),!r||r.length<1?void 0:{rader:r}},Qq=e=>e.tom?`${ye(e.fom)} - ${ye(e.tom)}`:`${ye(e.fom)} -`,Xq=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=A.useMemo(()=>Zq(e,n),[e]);return r?d.jsxs("div",{children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(oe,{style:{width:"70px"},children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{style:{width:"70px"},children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),r.rader.map(t=>d.jsxs(B,{gap:"1",children:[d.jsx(x,{size:"small",children:t.visningsnavn}),d.jsx(B,{gap:"1",children:t.naturalytelseEndringer.map(a=>d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(T,{size:"small",children:Qq(a)}),d.jsxs(F,{gap:"4",justify:"end",children:[d.jsx(T,{size:"small",style:{width:"70px"},children:V(a.beløpPrMåned)}),d.jsx(x,{size:"small",style:{width:"70px"},children:V(a.beløpPrÅr)})]})]},t.nøkkel+a.fom))})]},t.nøkkel))]}):null},eS=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,pv=e=>e?e.filter(n=>n.aktivitetStatus===G.ARBEIDSTAKER).filter(n=>eS(n)):[],nS=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(ye(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(ye(e.opphoersdato))),n.join(" ")},rS=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},Wu=e=>e.beregnetPrAar?e.beregnetPrAar:0,tS=(e,n,r)=>{const t=e.reduce((l,o)=>l+Wu(o),0),a=t?t/12:0,s=e.map((l,o)=>d.jsxs($.Fragment,{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(x,{size:"small",className:X.semiBoldText,children:Fi(l,r,n)}),d.jsxs(F,{gap:"10",children:[d.jsx(T,{children:V(Wu(l)/12)}),d.jsx(x,{children:V(l.beregnetPrAar)})]})]}),d.jsxs(F,{gap:"4",align:"center",children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(T,{children:rS(l.arbeidsforhold)}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(oe,{children:nS(l.arbeidsforhold)}),l.erTidsbegrensetArbeidsforhold&&d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})]}),d.jsx(xi,{prosentBredde:100})]},`ArbInntektWrapper${Fi(l,r,n)}${o+1}`));if(e.length>1){const l=d.jsx(B,{gap:"0",children:d.jsxs(F,{justify:"space-between",children:[d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"}),d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(T,{children:V(a)}),d.jsx(x,{children:V(t)})]})]})},"summary-row");s.push(l)}return s},xl=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const a=pv(e);return!a||a.length===0?null:d.jsxs(B,{gap:"8",children:[d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})}),d.jsx(Wn,{children:d.jsxs(B,{gap:"1",children:[d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(Ee,{}),tS(a,t,r)]})})]}),d.jsx(Xq,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};xl.buildInitialValues=e=>{const n=pv(e),r={};return n.forEach((t,a)=>{r[`inntekt${a}`]=V(t.overstyrtPrAar)||""}),r};var wi={exports:{}},aS=wi.exports,Zu;function sS(){return Zu||(Zu=1,function(e,n){(function(r,t){e.exports=t(N)})(aS,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(wi)),wi.exports}var iS=sS();const _i=ev(iS),lS=({option:e,style:n,height:r})=>{const t=A.useRef(null);return A.useEffect(()=>{let a;t.current!==null&&(a=Fp(t.current));const s=()=>{a==null||a.resize()};return window.addEventListener("resize",s),()=>{a==null||a.dispose(),window.removeEventListener("resize",s)}},[]),A.useEffect(()=>{if(t.current!==null){const a=xp(t.current);a&&(a.setOption(e),(a==null?void 0:a.getWidth())===0&&(a==null||a.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},oS="_readMore_wk043_4",dS={readMore:oS},uS=[],gS="#99bdcd",mS="#c1b5d0",kS="#C6C2BF",vS=(e,n)=>{const r=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===gn.ARBEID).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),t=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===gn.FRILANS).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),a=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===gn.YTELSE).map(({beløp:s})=>s).reduce((s,l)=>s+l,0);return d.jsxs(Wn,{width:"200px",children:[d.jsx("div",{className:X.storSpace}),d.jsx(x,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})}),d.jsx(T,{size:"small",children:V(r)})]}),d.jsx(Ee,{})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})}),d.jsx(T,{size:"small",children:V(t)})]}),d.jsx(Ee,{})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})}),d.jsx(T,{size:"small",children:V(a)})]}),d.jsx(Ee,{})]})]})},pS=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),oi=(e,n,r)=>{const t=[];for(let a=0;a<12;a+=1){const s=N(n,xe).add(a,"M").format("YYYYMM"),l=e.find(u=>N(u.fom,xe).format("YYYYMM")===s),o=pS((l==null?void 0:l.inntekter)||[],r);t.push([o,s])}return t},fS=()=>d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})}),d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})]}),di=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),yS=e=>({harFrilansinntekt:di(e,gn.FRILANS),harArbeidsinntekt:di(e,gn.ARBEID),harYtelseinntekt:di(e,gn.YTELSE)}),bS=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=z(),t=(e==null?void 0:e.måneder)||uS,a=A.useMemo(()=>yS(t),[t]),s=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=A.useMemo(()=>a.harArbeidsinntekt&&s?oi(t,s,gn.ARBEID):[],[a.harArbeidsinntekt,t,s]),o=A.useMemo(()=>a.harFrilansinntekt&&s?oi(t,s,gn.FRILANS):[],[a.harArbeidsinntekt,t,s]),u=A.useMemo(()=>a.harYtelseinntekt&&s?oi(t,s,gn.YTELSE):[],[a.harArbeidsinntekt,t,s]),k=A.useCallback(y=>y.value[0]>5e3?V(y.value[0])||"":y.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const v=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),f=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),b=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(qe,{size:"medium",header:d.jsx(fS,{}),defaultOpen:!0,className:dS.readMore,children:d.jsx(lS,{option:{tooltip:{trigger:"axis",formatter:y=>{const j=y,I=j[0].data,h=N(I[1]),R=h.locale(_i).format("MMM"),E=h.format("YYYY"),q=`${R.charAt(0).toUpperCase()+R.slice(1)} ${E}`,S=j.reduce((P,D)=>{const _=D.data;return P.concat(`${(D.marker||"")+(D.seriesName||"")}: ${V(_[0])}`)},[]).join("<br/>");return`${q}<br />${S}`},axisPointer:{type:"shadow"}},legend:{data:[v,f,b]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:y=>V(y)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:y=>{const j=N(y),I=j.format("MM")==="01"||j.format("MM")==="12",h=j.locale(_i).format("MMM"),R=j.format("YYYY"),E=h.charAt(0).toUpperCase()+h.slice(1,3);return I?`${E}
${R}`:E}}},series:[{name:v,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:l},{name:f,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:o},{name:b,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:u}],color:[gS,mS,kS]},height:350})}),vS(t,a)]})},jS=({alleAndeler:e})=>{var n;const r=e.find(s=>!s.erTilkommetAndel&&s.aktivitetStatus===G.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,a=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsx(Wn,{children:d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[a&&d.jsxs(T,{size:"small",children:[d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:X.semiBoldText,children:d.jsx(be,{dateString:a})})]}),d.jsxs(F,{gap:"10",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]})]}),d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})}),d.jsxs(F,{gap:"12",children:[d.jsx(T,{size:"small",children:t?V(t/12):0}),d.jsx(x,{size:"small",children:t?V(t):0})]})]})]})})},cS=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===G.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})}),d.jsx(x,{size:"small",children:V(r)})]})},hS=[],AS=(e,n,r)=>{var t,a,s;const l=r.find(f=>f.år===e),o=l&&((t=l.inntekter.find(f=>f.pgiType===Pi.NÆRING))==null?void 0:t.beløp)||0,u=l&&((a=l.inntekter.find(f=>f.pgiType===Pi.LØNN))==null?void 0:a.beløp)||0,k=o+u,v=(s=n.find(f=>f.årstall===e))==null?void 0:s.beløp;return d.jsxs(c.Row,{shadeOnHover:!0,children:[d.jsx(c.DataCell,{children:e}),d.jsx(c.DataCell,{align:"right",children:V(u)}),d.jsx(c.DataCell,{align:"right",children:V(o)}),d.jsx(c.DataCell,{align:"right",children:V(k)}),d.jsx(c.DataCell,{align:"right",children:V(v)})]},e)},IS=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>AS(r,e,n)),TS=e=>d.jsxs(c.Row,{shadeOnHover:!0,children:[d.jsx(c.DataCell,{children:d.jsx(x,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{align:"right",children:d.jsx(x,{children:V(e)})})]},"PGI-Oppsumert"),RS=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===G.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||hS;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:a,pgiSnitt:s}=r;return d.jsxs(d.Fragment,{children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(c,{children:[d.jsx(c.Header,{children:d.jsxs(c.Row,{children:[d.jsx(c.HeaderCell,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(c.Body,{children:[IS(a,t),TS(s)]})]})]})},ES="_merTekstBorder_1w256_9",NS={merTekstBorder:ES},qS=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},Qu=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${ye(n)}-${ye(r)} `:`${ye(n)}-`},SS=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},PS=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},BS=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,a=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",s=r?t:n;return s?d.jsx(x,{size:"small",className:X.semiBoldText,children:d.jsx(m,{id:a,values:{dato:ye(s),b:ea}})}):null},FS=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},xS=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(T,{size:"small",className:NS.merTekstBorder,children:e.begrunnelse}):null,wS=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,_S=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(B,{gap:"1",children:[d.jsxs(F,{justify:"space-between",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})]}),d.jsx(Ee,{}),r.næringer.map(t=>d.jsxs($.Fragment,{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(x,{size:"small",className:X.semiBoldText,children:PS(t,n)}),wS(t)&&d.jsx(x,{size:"small",children:V(t.oppgittInntekt)})]}),d.jsxs(F,{gap:"14",wrap:!1,children:[d.jsx(T,{size:"small",children:t&&t.orgnr?t.orgnr:""}),Qu(t)&&d.jsx(T,{size:"small",children:Qu(t)})]}),d.jsx(T,{size:"small",children:d.jsx(m,{id:qS(t)})}),t.regnskapsførerNavn&&d.jsx(T,{size:"small",children:SS(t)}),FS(t)&&d.jsxs(B,{gap:"6",children:[d.jsx(Ee,{}),d.jsxs(B,{gap:"2",children:[BS(t),d.jsx("div",{className:X.næringEndringBeskrivelse,children:xS(t)})]})]})]},`NaringsWrapper${t.orgnr}`))]}):null},OS=e=>e.aktivitetStatus===G.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===G.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===G.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===G.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",DS=e=>e===G.DAGPENGER,VS=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(s=>nv(s.aktivitetStatus)),a=t.length>1;return d.jsxs(B,{gap:"2",children:[n.isKombinasjonsstatus&&d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsxs(F,{justify:"end",gap:"10",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(xi,{prosentBredde:100}),t.map(s=>d.jsxs("div",{children:[d.jsxs(F,{gap:"2",justify:"space-between",children:[d.jsx(x,{size:"small",children:d.jsx(m,{id:OS(s)})}),d.jsxs(F,{gap:"14",children:[d.jsx(T,{size:"small",children:V(s.beregnetPrAar?s.beregnetPrAar/12:0)}),d.jsx(T,{size:"small",className:a?"":X.semiBoldText,children:V(s.beregnetPrAar)})]})]}),d.jsx(xi,{prosentBredde:100}),r&&DS(s.aktivitetStatus)&&d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})]},s.aktivitetStatus))]})},MS=({bruttoPrAar:e})=>e||e===0?d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsxs(F,{justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})}),d.jsxs(F,{gap:"14",children:[d.jsx(T,{size:"small",children:V(e/12)}),d.jsx(x,{size:"small",children:V(e)})]})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:GS,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:LS}=ae,KS=e=>e&&e.find(n=>n.definisjon===GS||n.definisjon===LS),$S=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],Mn=d.jsx("div",{className:X.storSpace}),US=(e,n,r,t,a,s,l,o)=>d.jsxs("div",{className:X.panelLeft,children:[n.isArbeidstaker&&d.jsx(xl,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[Mn,d.jsx(jS,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[Mn,d.jsx(VS,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[Mn,d.jsx(cS,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[Mn,d.jsx(MS,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[Mn,d.jsx(RS,{alleAndeler:e,inntektsgrunnlag:o}),Mn,d.jsx(_S,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:s})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[Mn,d.jsx(bS,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),Cn=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:a=void 0,arbeidsgiverOpplysningerPerId:s,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=$S(n);return US(o,e,n,r,t,s,l,a)};Cn.buildInitialValues=e=>{const n=KS(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};Cn.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:Pl.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?ge(e.inntektFrilanser):null});Cn.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:bt.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?ge(e.inntektFrilanser):null});const Oi={kolVerdiRød:"_kolVerdiRød_127dm_1",avslåttIkon:"_avslåttIkon_127dm_4"},HS=260,fv={[G.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[G.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[G.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[G.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[G.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[G.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[G.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[G.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[G.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[G.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},Xu=e=>{var n;return((n=fv[e.status])==null?void 0:n.rekkefølgePri)||100},YS=e=>{var n;return((n=fv[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},CS=()=>d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),zS=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),JS=(e,n)=>(n==null?void 0:n.ytelsetype)!==Sl.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/HS):e.dagsats||0,WS=(e,n)=>d.jsxs(F,{gap:"2",children:[d.jsx(dp,{className:Oi.avslåttIkon}),d.jsx(T,{size:"small",className:Oi.avslåttIkon,children:d.jsx(m,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:V(e),b:ea}})})]}),ZS=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===G.MIDLERTIDIG_INAKTIV),QS=(e,n,r,t)=>{const a=e.andeler.reduce((k,v)=>(v.inntektPlussNaturalytelse||0)+k,0);if(n.vilkarStatus===Bi.IKKE_VURDERT)return null;if(n.vilkarStatus===Bi.IKKE_OPPFYLT)return WS(r.grunnbeløp,ZS(r));const s=r.grunnbeløp*6,l=a>s,o=r.dekningsgrad!==lv.HUNDRE,u=JS(e,r.ytelsesspesifiktGrunnlag);return d.jsxs(B,{gap:"6",children:[d.jsxs("div",{children:[l&&d.jsxs(d.Fragment,{children:[d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})}),d.jsx(T,{size:"small",children:V(e.avkortetPrÅr)})]}),d.jsx(Ee,{})]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})}),d.jsx(T,{size:"small",children:V(e.redusertPrÅr)})]}),d.jsx(Ee,{})]})]}),d.jsxs("div",{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(x,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})}),d.jsx(x,{size:"medium",children:u})]}),d.jsx(Ee,{hasDoubleLine:!0})]})]})},XS=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const a=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,u)=>Xu(o)-Xu(u));const s=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(B,{gap:"1",width:"500px",children:[n&&d.jsx(ie,{size:"xsmall",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:N(e.fom).format(se),tom:e.tom?N(e.tom).format(se):""}})}),d.jsxs(B,{gap:"6",children:[d.jsxs("div",{children:[e.andeler.map((o,u)=>d.jsxs($.Fragment,{children:[u===0&&d.jsx(Ee,{}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:YS(o)})}),d.jsx(T,{size:"small",className:o.erFerdigBeregnet?"":Oi.kolVerdiRød,children:o.erFerdigBeregnet?V(o.inntekt):CS()})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})}),d.jsx(T,{size:"small",children:V(o.bortfaltNaturalytelse)})]})]}),d.jsx(Ee,{})]},o.status)),a&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})}),d.jsx(T,{size:"small",children:V(zS(e.andeler))})]}),d.jsx(Ee,{hasBorderDark:!0})]})]}),l&&d.jsx(d.Fragment,{children:QS(e,r,t,s)})]})]})},eP=[lr.ARBEIDSFORHOLD_AVSLUTTET,lr.NATURALYTELSE_TILKOMMER,lr.NATURALYTELSE_BORTFALT],nP=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,rP=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,tP=(e,n)=>{switch(e){case G.ARBEIDSTAKER:case G.FRILANSER:return n.find(r=>r.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case G.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case G.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},aP=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,a=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-a:0},sP=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},iP=(e,n)=>{const r=e.filter(s=>nP(s)),t={};r.forEach(s=>{const l=t[s.aktivitetStatus];l?l.push(s):t[s.aktivitetStatus]=[s]});const a=[];return Object.keys(t).forEach(s=>{const l=t[s],o=tP(s,n),u=l.every(j=>sP(j)),k=l.reduce((j,I)=>rP(I)+j,0),v=l.reduce((j,I)=>aP(I)+j,0),f=(k||0)+(v||0),b=!!o&&ja(o.status),y=u&&!b;a.push({inntekt:k,bortfaltNaturalytelse:v,inntektPlussNaturalytelse:f,erFerdigBeregnet:y,status:s})}),a},lP=e=>e.some(n=>eP.includes(n)),oP=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(a=>a.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!a.periodeAarsaker&&lP(a.periodeAarsaker)).map(a=>a.beregningsgrunnlagPeriodeFom).sort((a,s)=>new Date(a).getTime()-new Date(s).getTime()),t=[];for(let a=0;a<r.length;a+=1){const s=r[a],l=a+1<r.length?N(r[a+1]).subtract(1,"day").format(xe).toString():void 0,o=n.find(y=>y.beregningsgrunnlagPeriodeFom===s),u=(o==null?void 0:o.periodeAarsaker)||[],k=iP((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),v=o==null?void 0:o.redusertPrAar,f=o==null?void 0:o.avkortetPrAar,b=o==null?void 0:o.dagsats;t.push({fom:s,tom:l,årsak:u,andeler:k,redusertPrÅr:v,avkortetPrÅr:f,dagsats:b})}return t},dP=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=A.useMemo(()=>oP(e),[e]),t=r.length>1;return d.jsxs(B,{gap:"2",className:X.panelRight,children:[d.jsx(ie,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(B,{gap:"5",children:r.map(a=>d.jsx(XS,{tabellData:a,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e},a.fom))})]})},uP=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,gP=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>uP(n)).reduce((n,r)=>n+r,0):0,mP=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,eg=(e,n)=>e>n,kP=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=gP(e),t=mP(n);return d.jsx("div",{children:d.jsxs(B,{gap:"4",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})}),d.jsxs(c,{children:[d.jsx(c.Header,{children:d.jsxs(c.Row,{children:[d.jsx(c.HeaderCell,{scope:"col"}),d.jsx(c.HeaderCell,{scope:"col",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})}),d.jsx(c.HeaderCell,{scope:"col",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),d.jsx(c.Body,{children:d.jsxs(c.Row,{children:[d.jsx(c.DataCell,{children:d.jsx(T,{size:"small",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(c.DataCell,{children:d.jsx(T,{size:"small",children:V(r)})}),d.jsx(c.DataCell,{children:d.jsx(T,{size:"small",children:V(t)})})]})})]}),d.jsxs(T,{size:"small",children:[eg(r,t)&&d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!eg(r,t)&&d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]})})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:yv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:wl,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:bv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:jv,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:cv}=ae,vP=(e,n)=>{switch(e.definisjon){case yv:return n.find(r=>r.sammenligningsgrunnlagType===me.ATFLSN||r.sammenligningsgrunnlagType===me.SN);case wl:return n.find(r=>r.sammenligningsgrunnlagType===me.MIDLERTIDIG_INAKTIV);case bv:case jv:return n.find(r=>r.sammenligningsgrunnlagType===me.ATFLSN||r.sammenligningsgrunnlagType===me.AT_FL||r.sammenligningsgrunnlagType===me.AT||r.sammenligningsgrunnlagType===me.FL);case cv:return;default:return}},pP=(e,n)=>{const r=vP(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},ng=e=>e&&e.length>0,fP=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],yP={[bv]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[jv]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[cv]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[wl]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},bP=(e,n)=>e.definisjon===yv?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":yP[e.definisjon],jP=(e,n,r)=>{var t;const a=r.find(l=>l.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE),s=!!((t=a==null?void 0:a.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsx(Jn,{children:e.map(l=>d.jsx(x,{children:d.jsx(m,{id:bP(l,s||l.definisjon===wl),values:{verdi:pP(l,n),b:ea,br:d.jsx("br",{})}})},l.definisjon))})},cP=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],a=e.filter(l=>ja(l.status));if(!(ng(a)&&ng(t)))return null;const s=fP(n);return jP(a,s,t)},hP=e=>e.some(n=>n.aktivitetStatus===G.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),_l=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:a})=>d.jsxs(F,{gap:"2",align:"center",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})}),d.jsx("div",{id:"readOnlyWrapper",className:e?ce.inputPadding:void 0,children:d.jsx(ve,{name:`${r}.${n}.inntektFrilanser`,validate:a?[W,Qe(178956970)]:void 0,readOnly:e,parse:Fe,className:ce.breddeInntekt,isEdited:e&&hP(t)})})]});_l.buildInitialValues=e=>{const n=e.length>0?V(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const hv={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},AP=Me(hv),IP=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,TP=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:a,onClick:s,hasEmptyRequiredFields:l})=>e?null:d.jsx(ee,{variant:"primary",size:"small",loading:r,disabled:IP(t,r,n,l),onClick:s||Bg,type:s?"button":"submit",children:a||AP.formatMessage({id:"SubmitButton.ConfirmInformation"})}),Av=4e3,RP=kn(Av),EP=mn(3),Ol="fastsettBeregningsgrnunnlagSNBegrunnelse",Dl="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:NP}=ae,hr=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:a,avklaringsbehov:s,skalValideres:l})=>{const o=z();return d.jsxs(B,{gap:"10",children:[r&&d.jsxs(F,{gap:"4",align:"center",children:[d.jsx(T,{size:"small",className:ce.dynamiskKolonne,children:d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})}),d.jsx("div",{id:"readOnlyWrapper",className:e?ce.inputPadding:void 0,children:d.jsx(ve,{name:`${a}.${t}.${Dl}`,validate:l?[W,Qe(178956970)]:[],parse:Fe,className:ce.breddeInntekt,isEdited:e&&n,readOnly:e})})]}),d.jsxs("div",{id:"readOnlyWrapper",className:e?ce.verticalLine:ce.textAreaWrapperHeigh,children:[d.jsx(We,{name:`${a}.${t}.${Ol}`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:l?[W,RP,EP,vn]:[],isEdited:e&&n,maxLength:Av,readOnly:e,description:o.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:u=>u.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(En,{ident:s==null?void 0:s.vurdertAv,date:s==null?void 0:s.vurdertTidspunkt})]})]})};hr.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(a=>a.definisjon===NP);return{[Dl]:r?V(r.overstyrtPrAar):void 0,[Ol]:t&&t.begrunnelse?t.begrunnelse:void 0}};hr.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[Ol],bruttoBeregningsgrunnlag:ge(e[Dl])});const Iv=4e3,qP=kn(Iv),SP=mn(3),Vl="varigEndringNyoppstartetBegrunnelse",Ml="erVarigEndret",Gl="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:PP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:BP}=ae,FP=e=>e?d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),jt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:a,formName:s,isAksjonspunktClosed:l,avklaringsbehov:o,skalValideres:u})=>{let k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),v=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),v=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),v=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let f="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(f="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(f="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const b=z(),y=he().watch(s)[a].erVarigEndret,j=[{value:"false",label:k},{value:"true",label:v}];return d.jsxs(B,{gap:"4",children:[d.jsx(Te,{name:`${s}.${a}.${Ml}`,validate:u?[W]:[],label:b.formatMessage({id:f}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:j,isTrueOrFalseSelection:!0}),y&&d.jsxs(F,{gap:"4",align:"center",children:[d.jsx(T,{size:"small",className:ce.dynamiskKolonne,children:FP(r)}),d.jsx("div",{id:"readOnlyWrapper",className:e?ce.inputPadding:void 0,children:d.jsx(ve,{name:`${s}.${a}.${Gl}`,validate:u?[W,Qe(178956970)]:[],parse:Fe,className:ce.breddeInntekt,readOnly:e,isEdited:e&&l})})]}),d.jsx(We,{name:`${s}.${a}.${Vl}`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:u?[W,qP,SP,vn]:[],maxLength:Iv,readOnly:e,description:b.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:I=>I.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(En,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})};jt.buildInitialValues=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||a.aktivitetStatus===G.BRUKERS_ANDEL),t=n.find(a=>a.definisjon===PP||a.definisjon===BP);if(t){const a=ja(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[Ml]:a,[Vl]:t.begrunnelse?t.begrunnelse:"",[Gl]:r?V(r.overstyrtPrAar):void 0}}return{}};jt.transformValues=e=>{const n=e[Ml];return{begrunnelse:e[Vl],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?ge(e[Gl]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ll,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:xP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Tv}=ae,Rv=(e,n)=>n.some(r=>r.definisjon===e),wP=e=>e&&(e.definisjon===xP||e.definisjon===Ll||e.definisjon===Tv),Ln=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:a=!1,fieldIndex:s,formName:l,skalValideres:o})=>{if(!wP(n))return null;const u=n?!ja(n.status):!1;return r?d.jsx(hr,{readOnly:e,isAksjonspunktClosed:u,erNyArbLivet:r,fieldIndex:s,formName:l,avklaringsbehov:n,skalValideres:o}):d.jsx(jt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Tv,erNyoppstartet:a,fieldIndex:s,formName:l,isAksjonspunktClosed:u,avklaringsbehov:n,skalValideres:o})};Ln.buildInitialValues=(e,n)=>Rv(Ll,n)?hr.buildInitialValuesNyIArbeidslivet(e,n):{...jt.buildInitialValues(e,n)};Ln.transformValues=(e,n)=>Rv(Ll,n)?hr.transformValuesNyIArbeidslivet(e):jt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Ev,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Nv,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:qv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Sv,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Pv}=ae,_P=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},OP=(e,n)=>{switch(e.definisjon){case Ev:return _P(n);case Pv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case Nv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case qv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},DP=e=>{const n=e.aktivitetStatus||[],r=n.some(a=>tv(a)),t=n.some(a=>rv(a));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},VP=(e,n)=>{switch(e.definisjon){case Ev:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case Pv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case Nv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case qv:case Sv:return DP(n);default:return"Ukjent aksjonspunkt"}},MP=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs(F,{gap:"6",align:"center",wrap:!1,className:r?ce.aksjonspunktBehandlerNoBorder:ce.aksjonspunktBehandlerHeader,children:[!r&&d.jsx("div",{children:d.jsx(yr,{className:ce.warningIcon})}),d.jsxs(B,{gap:"2",children:[d.jsx(x,{children:d.jsx(m,{id:VP(e,n)})}),d.jsx(T,{children:d.jsx(m,{id:OP(e,n)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:GP,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:LP,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:KP,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:$P,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:UP}=ae;var zn=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(zn||{});const Kl=(e,n)=>me.SN===e||me.MIDLERTIDIG_INAKTIV===e||me.ATFLSN===e&&n!=null&&n.find(r=>av(r))?"8-35":"8-30",Di=e=>UP===e.definisjon||$P===e.definisjon||KP===e.definisjon?"8-35":GP===e.definisjon||LP===e.definisjon?"8-30":null,HP=mn(3),Bv=4e3,YP=kn(Bv),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:rg,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:tg,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:ag,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:sg,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:ig}=ae,CP="BeregningForm",Qt=(e,n)=>Di(e)===n,zP=(e,n)=>!!e.find(r=>Qt(r,n)),$l=e=>`${CP}_${e}`,lg=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},Vi=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],JP=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===lr.ARBEIDSFORHOLD_AVSLUTTET)),Fv=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),WP=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],a=t.filter(k=>k.aktivitetStatus===G.ARBEIDSTAKER),s=t.filter(k=>k.aktivitetStatus===G.FRILANSER),l=t.filter(k=>k.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||k.aktivitetStatus===G.BRUKERS_ANDEL),o={...Cn.buildInitialValues(e.avklaringsbehov),...bt.buildInitialValues(r),..._l.buildInitialValues(s),...xl.buildInitialValues(a)},u={...Ln.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===me.ATFLSN?{...o,...u}:n.sammenligningsgrunnlagType===me.AT_FL?{...o}:n.sammenligningsgrunnlagType===me.SN?{...u}:n.sammenligningsgrunnlagType===me.MIDLERTIDIG_INAKTIV?{...u}:{}:{...hr.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},ZP=(e,n,r,t)=>{let a={};return r&&(a=WP(e,t)),{...a,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},og=(e,n,r,t)=>({[r]:e.map(a=>{var s;return ZP(a,Fv(n,a.vilkårsperiodeFom),a.avklaringsbehov.find(l=>Qt(l,t)),(s=a.sammenligningsgrunnlagPrStatus)==null?void 0:s.find(l=>Kl(l.sammenligningsgrunnlagType,a.aktivitetStatus)===t))})}),QP=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:a,skalValideres:s})=>{const l=Vi(n).find(v=>v.aktivitetStatus&&v.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE),o=l&&l.erNyIArbeidslivet,u=r.definisjon===ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||l&&l.næringer&&l.næringer.some(v=>v.erVarigEndret===!0),k=l&&l.næringer&&l.næringer.some(v=>v.erNyoppstartet===!0);return!o&&!k&&!u?null:d.jsx(Ln,{readOnly:e,avklaringsbehov:r,erNyArbLivet:o,erVarigEndring:u,erNyoppstartet:k,fieldIndex:t,formName:a,skalValideres:s})},XP=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:a,fieldIndex:s,formName:l,avklaringsbehov:o,skalValideres:u})=>{const k=JP(n),v=lg(n,G.FRILANSER),f=lg(n,G.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[k&&d.jsx(bt,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,skalValideres:u}),!k&&f&&d.jsx(Pl,{readOnly:t,alleAndelerIForstePeriode:Vi(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,formName:l,skalValideres:u}),v&&d.jsx(_l,{readOnly:t,fieldIndex:s,formName:l,alleAndelerIForstePeriode:Vi(n),skalValideres:u}),d.jsxs("div",{children:[d.jsx(We,{name:`${l}.${s}.ATFLVurdering`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[W,YP,HP,vn],maxLength:Bv,readOnly:t,className:ce.textAreaStyle,description:a.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:b=>b.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(En,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})]})},eB=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(a=>a.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),Fr=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),nB=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,a)=>!t.beregningsgrunnlagPeriodeFom||!a.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(a.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(Fr(rg,e.gjeldendeAvklaringsbehov))return[{kode:rg,aksjonspunktData:Cn.transformATFLValues(e,r)}];if(Fr(sg,e.gjeldendeAvklaringsbehov))return[{kode:sg,aksjonspunktData:Ln.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Fr(ig,e.gjeldendeAvklaringsbehov))return[{kode:ig,aksjonspunktData:Ln.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Fr(ag,e.gjeldendeAvklaringsbehov))return[{kode:ag,aksjonspunktData:Ln.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Fr(tg,e.gjeldendeAvklaringsbehov))return[{kode:tg,aksjonspunktData:Cn.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},rB=(e,n)=>e[$l(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:nB(r)})).reduce(eB,[]),tB=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:a,vilkår:s,submitCallback:l,formData:o,setFormData:u,aktivIndex:k,lovparagraf:v,finnesFormSomSubmittes:f,setSubmitting:b})=>{const y=z(),j=(H,C)=>{b(!0),l(rB(H,C))},I=H=>{const C=Fv(s,H.vilkårsperiodeFom);return C.vurderesIBehandlingen&&!C.erForlengelse},h=A.useMemo(()=>a.filter(H=>zP(H.avklaringsbehov,v)),[a,v]),R=$l(v),E=$e({defaultValues:o||og(h,s,R,v)}),q=A.useCallback(()=>{E.reset(og(h,s,R,v))},[E,h,s,R,v]),S=A.useMemo(()=>a.reduce((H,C)=>H+C.avklaringsbehov.length,0),[a]),P=op(S);A.useEffect(()=>{P!==void 0&&S!==P&&(b(!1),o||q())},[S,o,q,b,P]);const{formState:{dirtyFields:D},control:_,trigger:U}=E,{fields:Y}=Ze({name:R,control:_}),w=A.useRef(null);A.useEffect(()=>{var H,C;f&&(H=D[R])!=null&&H[k]&&U(),a[k].avklaringsbehov.some(le=>Qt(le,v)&&le.status===sv.OPPRETTET)&&((C=w==null?void 0:w.current)==null||C.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[k]);const M=H=>H.find(C=>Qt(C,v)),L=(H,C)=>{const le=I(h[H]),je=M(C);return v===zn.ÅTTE_TRETTI&&je?d.jsx(XP,{kodeverkSamling:r,allePerioder:h[H].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:y,fieldIndex:H,formName:R,avklaringsbehov:je,skalValideres:le}):v===zn.ÅTTE_TRETTIFEM&&je?d.jsx(QP,{readOnly:e,allePerioder:h[H].beregningsgrunnlagPeriode,fieldIndex:H,formName:R,avklaringsbehov:je,skalValideres:le}):null},K=a[k].vilkårsperiodeFom;return d.jsx("div",{ref:w,children:d.jsx(Ue,{formMethods:E,onSubmit:H=>j(H,v),setDataOnUnmount:u,children:Y.map((H,C)=>d.jsxs("div",{style:{display:h[C].vilkårsperiodeFom===K?"block":"none"},children:[d.jsx(MP,{readOnly:e,avklaringsbehov:M(h[C].avklaringsbehov),beregningsgrunnlag:h[C]}),d.jsxs(B,{gap:"4",className:`${e?ce.aksjonspunktBehandlerNoBorder:ce.aksjonspunktBehandlerBorder} ${ce.aksjonspunktWrapper}`,children:[L(C,h[C].avklaringsbehov),d.jsx("div",{children:d.jsx(TP,{isReadOnly:e,isSubmittable:!n,isDirty:E.formState.isDirty,isSubmitting:f})})]})]},H.id))})})},aB=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const a=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,s=t.filter(o=>o.sammenligningsgrunnlagType===me.AT_FL||o.sammenligningsgrunnlagType===me.AT||o.sammenligningsgrunnlagType===me.FL),l=a&&s.length===0;return n?d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(B,{gap:"2",children:[e.isMilitaer&&d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})}),e.isDagpenger&&d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})}),l&&d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})]})},sB="_marginLeft_74vdi_64",iB={marginLeft:sB},lB=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:a,avvikProsent:s}=n,l=parseFloat(s.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",u=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(Wn,{width:"400px",children:[d.jsx(Ee,{}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:o})}),d.jsx(T,{size:"small",children:e||e===0?V(e):"-"})]}),d.jsx(Ee,{}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:u})}),d.jsx(T,{size:"small",children:V(a)})]}),d.jsx(Ee,{hasBorderDark:!0}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})}),d.jsxs(F,{gap:"14",children:[d.jsx(T,{size:"small",className:`${l>25?X.redError:""} ${X.semiBoldText} ${iB.marginLeft}`,children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})}),d.jsx(T,{size:"small",children:V(t===void 0?0:t)})]})]})]})},oB=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,dB=(e,n)=>e?e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>oB(r)):[],dg=e=>e||0,uB=e=>e.beregnetPrAar?e.beregnetPrAar:0,ug=(e,n)=>{const r=dB(e,n);if(r){const t=r.reduce((l,o)=>l+uB(o),0),a=r.reduce((l,o)=>{var u;return l+dg((u=o==null?void 0:o.arbeidsforhold)==null?void 0:u.naturalytelseBortfaltPrÅr)},0),s=r.reduce((l,o)=>{var u;return l+dg((u=o==null?void 0:o.arbeidsforhold)==null?void 0:u.naturalytelseTilkommetPrÅr)},0);return t+a-s}return 0},gB=(e,n)=>{const r=d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case me.AT:case me.FL:case me.AT_FL:return r;case me.SN:return t;case me.ATFLSN:return n===zn.ÅTTE_TRETTIFEM?t:r;case me.MIDLERTIDIG_INAKTIV:return d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},gg=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===G.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===me.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===me.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===me.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:ug(n,[G.ARBEIDSTAKER,G.FRILANSER]),erPGI:!1}:{inntekt:ug(n,[G.ARBEIDSTAKER,G.FRILANSER]),erPGI:!1}};function mg(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const mB=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(a=>a.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=mg(t,zn.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(a=>{const s=Kl(a.sammenligningsgrunnlagType,r.aktivitetStatus);t=mg(t,s,r)}),t},{}),kB=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:a,gjelderBesteberegning:s,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:u,submitCallback:k,formData:v,setFormData:f,aktivIndex:b})=>{var y;const j=mB(o),[I,h]=A.useState(!1),R=d.jsx(aB,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:s,erNyIArbeidslivet:!!((y=o[b].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&y.find(q=>q.erNyIArbeidslivet))}),E=q=>{var S;if(j[q]&&j[q].length>0){const P=j[q],D=o[b].vilkårsperiodeFom,_=P.find(K=>K.vilkårsperiodeFom===D),U=_?(S=_.sammenligningsgrunnlagPrStatus)==null?void 0:S.find(K=>Kl(K.sammenligningsgrunnlagType,_==null?void 0:_.aktivitetStatus)===q):void 0,Y=!!j[q].find(K=>!!K.avklaringsbehov.find(H=>Di(H)===q)),w=_&&!!_.avklaringsbehov.find(K=>Di(K)===q),M=(_==null?void 0:_.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],L=$l(q);return d.jsxs("div",{children:[!!U&&d.jsxs(d.Fragment,{children:[d.jsx(ie,{size:"xsmall",children:gB(U,q)}),d.jsx(lB,{sammenligningsgrunnlag:U,beregnetAarsinntekt:gg(U,M).inntekt,erPGI:gg(U,M).erPGI}),d.jsx("div",{className:X.storSpace})]}),Y&&d.jsxs("div",{style:{display:w?"block":"none"},children:[d.jsx(tB,{readOnly:e,lovparagraf:q,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:a,beregningsgrunnlagListe:o,vilkår:u,submitCallback:k,formData:v&&L in v?v:void 0,setFormData:f,aktivIndex:b,finnesFormSomSubmittes:I,setSubmitting:h}),d.jsx("div",{className:X.storSpace})]})]})}return null};return d.jsxs(B,{gap:"5",className:X.panelRight,children:[R,d.jsxs("div",{children:[E(zn.ÅTTE_TRETTI),E(zn.ÅTTE_TRETTIFEM)]})]})},xr=e=>N(e).locale(_i).format("MMMM");function qt(e,n,r){const t=e.filter(a=>a.lønnsendringscenario===n).map(a=>`i ${ca(r[a.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${N(a.sisteLønnsendringsdato).format(se)}`);return t.reduce((a,s,l)=>l===0?s:l<t.length-2?`${a}, ${s}`:`${a} og ${s}`,"")}const vB=(e,n,r,t)=>{switch(e){case fn.MANUELT_BEHANDLET:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:qt(r,fn.MANUELT_BEHANDLET,t)}});case fn.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:qt(r,fn.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:xr(N(n).subtract(1,"month").format(Ir)),forrigeMåned:xr(N(n).subtract(2,"month").format(Ir))}});case fn.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:qt(r,fn.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:xr(N(n).subtract(1,"month").format(Ir))}});case fn.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:qt(r,fn.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:xr(N(n).subtract(1,"month").format(Ir)),nesteMåned:xr(N(n).subtract(2,"month").format(Ir))}});default:return null}};function pB(e,n,r){return lp(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsx("p",{children:vB(t,n,e,r)},t))}const fB=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:pB(n.lønnsendringSaksopplysning,e,r)}),d.jsx(ip,{saksopplysninger:t})},yB=e=>{switch(e){case G.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case G.FRILANSER:return"alt1";case G.ARBEIDSTAKER:return"alt3";default:return"neutral"}},bB=(e,n)=>{const r=[];return e.filter((t,a,s)=>a===s.findIndex(l=>l===t)).forEach(t=>{var a;const s=((a=n[ya.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:a.navn)||"";r.push({visningsNavn:s,kode:t,tagType:yB(t)})}),r.sort((t,a)=>t.visningsNavn>a.visningsNavn?1:-1),d.jsx(F,{gap:"2",children:r.map(t=>d.jsx("div",{className:X.tagRad,children:d.jsx(la,{variant:t.tagType,title:t.visningsNavn,className:X.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},jB=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:a})=>d.jsxs(B,{gap:"4",className:X.panelLeft,children:[bB(n,r),d.jsxs(F,{gap:"2",children:[d.jsx(T,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})}),d.jsx(T,{size:"small",className:X.semiBoldText,children:d.jsx(be,{dateString:e})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsx(fB,{arbeidsgiverOpplysningerPerId:a,skjeringstidspunktDato:e,saksopplysninger:t})]}),kg=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,a)=>t+a,0);return!r||r===0?0:r},xv=e=>e.month()===2&&e.year()===2020,cB=e=>{const n=N(e.tom);return xv(n)},wv=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const a=N(n.beregningsgrunnlagPeriodeFom);if(xv(a)&&t.some(o=>cB(o))){const o=N("2020-04-30"),u=t.find(k=>N(k.tom).isSame(o,"day"));return u?u.frisinnAndeler.filter(k=>k.statusSøktFor===e):null}const s=N(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!N(o.fom).isBefore(a)&&N(o.tom).isSame(s,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},pr=(e,n,r)=>{const t=wv(e,n,r);return!!t&&t.length>0},Je=(e,n,r)=>{if(!e||!n||!r)return 0;if(pr(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return kg(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return kg(r.beregningsgrunnlagPrStatusOgAndel||[],e)},vg=(e,n,r)=>{const t=wv(e,n,r);if(!t||t.length<1)return 0;const a=t.map(({oppgittInntekt:s})=>s).reduce((s,l)=>s+l,0);return!a||a===0?0:a},_v=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===ov.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),a=t[t.length-1],s=N(a.tom);return s.month()===3&&s.year()===2020?t.filter(l=>N(l.fom).month()===3||N(l.fom).month()===2):t.filter(l=>N(l.fom).month()===s.month()&&N(l.fom).year()===s.year())}return n},hB=(e,n)=>{let r=null;return n!==Se&&(r=n),d.jsx(m,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:N(e).format(se),tom:r?N(r).format(se):""}},`fom-tom${e}${r}`)},Ov=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,a=n.frisinnPerioder,s=Array.isArray(a)&&a.find(l=>!N(r).isBefore(l.fom)&&!N(t).isAfter(l.tom));return s?s.frisinnAndeler:[]},pg=({tekstId:e,beløp:n})=>d.jsxs(F,{gap:"2",children:[d.jsx(T,{className:X.tabellAktivitet,children:d.jsx(m,{id:e})}),d.jsx(T,{size:"small",className:X.tabellInntekt,children:V(n)})]}),fg=(e,n,r,t,a)=>{const s=a/100,l=n*s;return d.jsxs(d.Fragment,{children:[d.jsxs(F,{gap:"2",children:[d.jsx(T,{className:X.tabellAktivitet,children:d.jsx(m,{id:e,values:{grad:a}})}),d.jsx(T,{size:"small",className:X.tabellInntekt,children:V(l)})]}),!!t||t===0&&d.jsxs(F,{gap:"2",children:[d.jsx(T,{className:X.tabellAktivitet,children:d.jsx(m,{id:r})}),d.jsx(T,{size:"small",className:X.tabellInntekt,children:V(t)})]})]})},St=e=>e||e===0,AB=e=>{const n=N(e);return n.isBefore(N("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(N("2022-01-01","YYYY-MM-DD"))?60:70},IB=(e,n,r,t)=>{const a=Ov(e,n);if(!a||a.length<1)return null;const s=a.some(v=>v.statusSøktFor===G.FRILANSER)?r:null,l=a.some(v=>v.statusSøktFor===G.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=vg(G.FRILANSER,e,n),u=vg(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n),k=AB(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[St(s)&&d.jsx(pg,{tekstId:"Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",beløp:s||0}),St(s)&&fg("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",s||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,k),St(l)&&d.jsx(pg,{tekstId:"Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",beløp:l||0}),St(l)&&fg("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",u,k),d.jsx("div",{className:X.colDevider}),d.jsxs(F,{gap:"2",children:[d.jsx(oe,{className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Resultat.Dagsats"})}),d.jsx(T,{size:"small",className:X.tabellInntekt,children:V(e.dagsats)})]})]})},TB=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const a=Ov(e,n);if(!a||a.length<1)return null;const s=r>=0?r:0,l=t>=0?t:0;return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",children:hB(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)}),IB(e,n,s,l)]})},Dv=e=>e.grunnbeløp?e.grunnbeløp*6:0,RB=(e,n)=>{if(!pr(G.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Dv(e);const t=Je(G.ARBEIDSTAKER,e,n);if(r-=t,!pr(G.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const s=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=s}const a=Je(G.FRILANSER,e,n);return a>r?r:a},EB=(e,n)=>{if(!pr(G.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Dv(e);const t=Je(G.ARBEIDSTAKER,e,n);r-=t;const a=Je(G.FRILANSER,e,n);r-=a;const s=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return s>r?r:s},NB=(e,n)=>{const r=N(e.beregningsgrunnlagPeriodeFom),t=N(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(a=>!N(a.fom).isBefore(r)&&!N(a.tom).isAfter(t))},qB=({beregningsgrunnlag:e})=>{const n=_v(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>NB(t,n)):[];return d.jsxs("div",{children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Resultat"})}),r.map(t=>d.jsx("div",{children:d.jsx(TB,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:RB(e,t),næringGrunnlag:EB(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},SB=N("2020-04-01"),PB=(e,n,r)=>d.jsxs(F,{gap:"2",children:[d.jsx(T,{className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:V(e),annenInntekt:V(n)}})}),d.jsx(T,{size:"small",className:X.tabellInntekt,children:V(r)})]}),BB=(e,n)=>{if(!Array.isArray(n))return!1;const r=N(e.beregningsgrunnlagPeriodeFom),t=N(e.beregningsgrunnlagPeriodeTom);return n.some(a=>!N(a.fom).isBefore(r)&&!N(a.tom).isAfter(t))},FB=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(BB(t,n)){const a=N(t.beregningsgrunnlagPeriodeTom),s=N(t.beregningsgrunnlagPeriodeTom).endOf("month");a.isAfter(SB)&&a.isSame(s,"day")&&t.beregningsgrunnlagPeriodeTom!==Se&&r.push(t)}}),r},xB=(e,n)=>{const r=N(n.beregningsgrunnlagPeriodeFom),t=N(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},wB=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=Je(G.ARBEIDSTAKER,e,n),a=e.grunnbeløp*6;let s=t;if(!pr(G.FRILANSER,n,r)){const v=Je(G.FRILANSER,e,n);s+=v}if(!pr(G.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const v=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n);s+=v}const l=a>s?a-s:0,o=n.beregningsgrunnlagPeriodeTom,u=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(v=>xB(v,n)),k=u?u.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:N(k).format(se),tom:o?N(o).format(se):""}},`fom-tom${k}${o}`)}),PB(a,s,l)]})},_B=({beregningsgrunnlag:e})=>{const n=_v(e.ytelsesspesifiktGrunnlag),r=FB(e.beregningsgrunnlagPeriode,n);return d.jsx("div",{children:r.map(t=>d.jsx("div",{children:wB(e,t)},t.beregningsgrunnlagPeriodeFom))})},OB=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,r),a=Je(G.FRILANSER,e,r),s=Je(G.ARBEIDSTAKER,e,r);return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})}),d.jsxs(F,{gap:"2",children:[d.jsx(T,{size:"small",className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})}),d.jsx(x,{size:"small",className:X.tabellInntekt,children:V(s)})]}),d.jsxs(F,{gap:"2",children:[d.jsx(T,{size:"small",className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})}),d.jsx(x,{size:"small",className:X.tabellInntekt,children:V(a)})]}),d.jsxs(F,{gap:"2",children:[d.jsx(T,{size:"small",className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})}),d.jsx(x,{size:"small",className:X.tabellInntekt,children:V(t)})]})]})},yg=(e,n,r)=>d.jsx(T,{size:"small",children:d.jsx(m,{id:e,values:{fom:N(n).format(se),tom:N(r).format(se)}})}),DB=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===G.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===G.FRILANSER);return d.jsxs("div",{children:[r&&yg("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&yg("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},VB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Søknad.Tittel"})}),Array.isArray(r)&&r.map(t=>DB(t))]})},MB="_aksjonspunktBehandlerContainer_o9hgh_6",GB={aksjonspunktBehandlerContainer:MB},LB=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),KB=({beregningsgrunnlag:e})=>d.jsxs(B,{gap:"4",className:GB.aksjonspunktBehandlerContainer,children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(VB,{beregningsgrunnlag:e}),d.jsx(OB,{beregningsgrunnlag:e}),LB(e)&&d.jsxs(d.Fragment,{children:[d.jsx(_B,{beregningsgrunnlag:e}),d.jsx(qB,{beregningsgrunnlag:e})]})]}),$B=e=>d.jsx(KB,{beregningsgrunnlag:e}),UB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===Sl.FRISINN?$B(e):null},HB=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===iv.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,YB=e=>!!(e!=null&&e.besteberegninggrunnlag),CB=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],zB=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:a,vilkarPeriode:s,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:u,vilkår:k,submitCallback:v,formData:f,setFormData:b,aktivIndex:y})=>{var j;const{skjaeringstidspunktBeregning:I,beregningsgrunnlagPeriode:h,faktaOmBeregning:R,ytelsesspesifiktGrunnlag:E}=n,q=HB(R),S=YB(E),P=d.jsx("div",{className:X.storSpace}),D=CB(h),_=o&&o.length>0;return d.jsxs(B,{gap:"4",children:[_&&d.jsx(cP,{avklaringsbehov:o,beregningsgrunnlag:n}),d.jsxs(F,{gap:"2",wrap:!1,children:[d.jsxs(B,{gap:"4",width:"50%",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(jB,{kodeverkSamling:a,aktivitetStatusList:D,skjeringstidspunktDato:I,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),P,r.skalViseBeregningsgrunnlag&&d.jsx(Cn,{relevanteStatuser:r,allePerioder:h,gjelderBesteberegning:q,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),S&&d.jsxs(d.Fragment,{children:[P,d.jsx(kP,{besteMåneder:(j=E==null?void 0:E.besteberegninggrunnlag)==null?void 0:j.besteMåneder,periode:h[0]})]})]}),d.jsxs(B,{width:"50%",children:[d.jsx(ie,{size:"medium",className:X.panelRight,children:d.jsx(m,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(kB,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:a,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:q,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:u,vilkår:k,submitCallback:v,formData:f,setFormData:b,aktivIndex:y}),d.jsx(UB,{beregningsgrunnlag:n}),s&&d.jsx(dP,{beregningsgrunnlag:n,vilkårsperiode:s})]})]})]})},JB="_readOnlyBlokk_3qjl7_1",WB={readOnlyBlokk:JB},ZB=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(B,{gap:"4",children:[d.jsx(x,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsxs(T,{size:"small",className:WB.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(Cr,{})]})]}),QB=[ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ae.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],XB=e=>e.avklaringsbehov.filter(n=>QB.some(r=>r===n.definisjon)),eF=e=>({isArbeidstaker:e.some(n=>tv(n)),isFrilanser:e.some(n=>rv(n)),isSelvstendigNaeringsdrivende:e.some(n=>av(n)),isMidlertidigInaktiv:e.some(n=>n===G.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>sq(n)),harDagpengerEllerAAP:e.some(n=>nv(n)),isAAP:e.some(n=>n===G.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===G.DAGPENGER||n===G.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>iq(n))||e.length>1,isMilitaer:e.some(n=>lq(n))}),nF=e=>e?e.find(n=>n.definisjon===ae.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,bg=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),rF=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:a,vilkar:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k})=>{const v=n[e],f=eF(v.aktivitetStatus),b=nF(v.avklaringsbehov);function y(j){const I=bg(s,j.vilkårsperiodeFom);return I.vurderesIBehandlingen&&!I.erForlengelse}return d.jsxs(B,{gap:"14",children:[d.jsx(zB,{readOnly:t||!y(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:XB(n[e]),relevanteStatuser:f,readOnlySubmitButton:a,kodeverkSamling:l,vilkarPeriode:bg(s,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:s,submitCallback:r,formData:u,setFormData:k,aktivIndex:e}),b&&d.jsx(ZB,{avklaringsbehov:b})]})},tF="_contentContainer_1ddng_1",aF="_sideMenuContainer_1ddng_4",sF="_mainContainer--withSideMenu_1ddng_7",iF="_advarselIkon_1ddng_12",_t={contentContainer:tF,sideMenuContainer:aF,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:sF,advarselIkon:iF},lF=[ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ae.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],oF=[],dF=ZN.bind(_t),jg=Me(hv),uF=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Title"})}),d.jsx(T,{size:"small",children:d.jsx(m,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})]})},gF=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},mF=e=>e.avklaringsbehov.some(n=>lF.some(r=>r===n.definisjon)&&n.kanLoses),kF=(e,n)=>e.map(r=>({skalVurderes:gF(n,r),harAvklaringsbehov:mF(r),stp:N(r.skjaeringstidspunktBeregning).format(se)})),vF=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:u})=>{const k=e||oF,v=k.length>1;k.sort((I,h)=>I.skjaeringstidspunktBeregning.localeCompare(h.skjaeringstidspunktBeregning)).reverse();const[f,b]=A.useState(0),y=kF(k,a),j=dF("mainContainer",{"mainContainer--withSideMenu":v});return A.useEffect(()=>{const I=y.findIndex(h=>h.skalVurderes&&h.harAvklaringsbehov);I>-1&&b(I)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(De,{value:jg,children:uF(a)}):d.jsx(De,{value:jg,children:d.jsxs("div",{className:j,children:[v&&d.jsx("div",{className:_t.sideMenuContainer,children:d.jsx(hp,{links:y.map((I,h)=>({icon:I.skalVurderes&&I.harAvklaringsbehov?d.jsx(yr,{className:_t.advarselIkon}):null,active:f===h,label:`${I.stp}`})),onClick:b})}),d.jsx("div",{className:_t.contentContainer,children:d.jsx(rF,{aktivtBeregningsgrunnlagIndeks:f,beregningsgrunnlagListe:k,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,setFormData:u,formData:o})})]})})},pF=e=>{switch(e){case ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return re.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return re.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return re.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return re.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},fF=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:pF(a.kode),...a.grunnlag[0]}));return e(t)},yF=(e,n)=>{const r=e.find(t=>t.vilkarType&&t.vilkarType===Hn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[{avslagKode:r.avslagKode??void 0,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:n?n.skjaeringstidspunktBeregning:"",tom:Se},vilkarStatus:r.vilkarStatus}]}},bF=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],jF=[re.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,re.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,re.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,re.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],cF=[Hn.BEREGNINGSGRUNNLAGVILKARET],hF=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),r=Wi(jF,cF),{behandling:t}=A.use(Rn),a=Tn(t),{data:s,isFetching:l}=In(a.beregningsgrunnlagOptions(t));return i.jsx(Mg,{standardPanelProps:r,prosessPanelKode:Hi.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:l?i.jsx(An,{}):i.jsx(AF,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagsvilkar:yF(r.vilkar,s),beregningsgrunnlagListe:bF(s),arbeidsgiverOpplysningerPerId:e,submitCallback:fF(r.submitCallback),isReadOnly:r.isReadOnly,readOnlySubmitButton:r.readOnlySubmitButton})})},AF=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=wn();return i.jsx(vF,{...e,formData:n,setFormData:r})};hF.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const cg=re.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,ui=[Hn.MEDLEMSKAPSVILKÅRET_LØPENDE],IF=()=>{const e=z(),n=Wi([cg],ui);return i.jsx(Xv,{overstyringApKode:cg,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:i.jsx(wp,{standardPanelProps:n,prosessPanelKode:Hi.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:_g(n.aksjonspunkter,ui,n.vilkar),children:i.jsx(bp,{vilkar:n.vilkar,vilkarKoder:ui,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};IF.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel"};const TF="_panel_1wwvz_1",RF="_hyphen_1wwvz_9",EF="_marginTop_1wwvz_19",gi={panel:TF,hyphen:RF,marginTop:EF},NF=(e,n)=>e&&n!==void 0,qF=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===Un.OPPRETTET?void 0:t!==n,ansesMottatt:t,...br.buildInitialValues(e)}},SF=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:re.VURDER_SOKNADSFRIST_FORELDREPENGER,...br.transformValues(e)}),Vv=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:a,submitCallback:s,harÅpneAksjonspunkter:l}=hn(),o=qF(t,n,r),{mellomlagretFormData:u,setMellomlagretFormData:k}=wn(),v=$e({defaultValues:u||o}),f=v.watch("gyldigSenFremsetting"),b=r==null?void 0:r.søknadsperiodeStart,y=r==null?void 0:r.søknadsperiodeSlutt,j=r==null?void 0:r.utledetSøknadsfrist;return i.jsx(Ue,{formMethods:v,onSubmit:I=>s(SF(I)),setDataOnUnmount:k,children:i.jsxs(B,{gap:"6",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),l&&i.jsx(Jn,{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:j?ye(j):""}})}),i.jsxs(F,{justify:"space-between",children:[i.jsxs(Wn,{className:gi.panel,children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),i.jsxs("ul",{className:gi.hyphen,children:[i.jsx("li",{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),i.jsx("li",{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),i.jsx("li",{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]}),i.jsxs("div",{children:[i.jsx(oe,{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&i.jsx(T,{size:"small",children:ye(n)})]}),b&&y&&i.jsxs("div",{children:[i.jsx(oe,{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),i.jsx(T,{size:"small",children:Eg(b,y)})]})]}),i.jsx("div",{className:gi.marginTop,children:i.jsxs(B,{gap:"4",children:[i.jsx(br,{readOnly:a}),i.jsx(Te,{name:"gyldigSenFremsetting",validate:[W],isReadOnly:a,isHorizontal:!0,isEdited:NF(t.length>0,f),isTrueOrFalseSelection:!0,radios:[{value:"true",label:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),f&&i.jsx(Tg,{children:i.jsx($n,{name:"ansesMottatt",isReadOnly:a,label:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[W,bn,vp]})}),i.jsx(_p,{isReadOnly:a,isSubmittable:!e,isSubmitting:v.formState.isSubmitting,isDirty:v.formState.isDirty})]})})]})})};Vv.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const PF={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},BF=Me(PF),Mv=({soknad:e,readOnlySubmitButton:n})=>i.jsx(De,{value:BF,children:i.jsx(Vv,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Mv.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
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
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    } | null;
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
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
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
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string | null;
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const FF=[re.VURDER_SOKNADSFRIST_FORELDREPENGER],xF=()=>{const e=z(),n=Wi(FF),{behandling:r}=A.use(Rn),t=Tn(r),{data:a}=In(t.søknadOptions(r));return i.jsx(Mg,{standardPanelProps:n,prosessPanelKode:Hi.SOEKNADSFRIST,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:_g(n.aksjonspunkter),children:a?i.jsx(Mv,{soknad:a,readOnlySubmitButton:n.readOnlySubmitButton}):i.jsx(An,{})})};xF.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel"};const Fn={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},wF="_godkjentImage_1bp9b_1",_F="_avslattImage_1bp9b_7",hg={godkjentImage:wF,avslattImage:_F},OF="MELLOMLIGGENDE_PERIODE",DF=e=>e===Fn.BEKREFTET_AVVIST||e===Fn.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",Ag=e=>e===Fn.BEKREFTET_GODKJENT||e===Fn.ANTATT_GODKJENT||e===OF,Gv=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const a=z();return i.jsx(Wn,{borderWidth:"1",padding:"4",children:i.jsxs(B,{gap:"4",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})}),i.jsxs(F,{gap:"2",children:[i.jsx(ee,{size:"xsmall",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.prevPeriod"}),children:i.jsx(m,{id:"TimeLineData.prevPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx(sa,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:i.jsx(m,{id:"TimeLineData.nextPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx(Kn,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:e.fom,dateStringTom:e.tom})}),i.jsxs(F,{gap:"1",children:[Ag(e.klasse)&&i.jsx(Gi,{className:hg.godkjentImage}),!Ag(e.klasse)&&i.jsx(Kn,{className:hg.avslattImage}),i.jsx(T,{size:"small",children:i.jsx(m,{id:DF(e.klasse)})})]})]})})};Gv.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const VF={danger:i.jsx(Dg,{}),success:i.jsx(Ji,{}),info:i.jsx(Hp,{})},MF=e=>e===Fn.BEKREFTET_AVVIST||e===Fn.ANTATT_AVVIST?"danger":e===Fn.BEKREFTET_GODKJENT||e===Fn.ANTATT_GODKJENT?"success":"info",GF=e=>e.map(n=>({start:N(n.fom).toDate(),end:N(n.tom).toDate(),status:MF(n.klasse),opptjeningsperiode:n})),LF=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",Lv=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=z(),a=e.toSorted((b,y)=>N(b.fom).diff(N(y.fom))),s=GF(a),[l,o]=A.useState(),u=b=>{const y=s.find(j=>{var I;return((I=j.opptjeningsperiode)==null?void 0:I.fom)===b});y&&o(y)},k=()=>{o(void 0)},v=()=>{if(s){const b=s.findIndex(y=>{var j,I;return((j=y.opptjeningsperiode)==null?void 0:j.fom)===((I=l==null?void 0:l.opptjeningsperiode)==null?void 0:I.fom)})+1;b<s.length&&o(s[b])}},f=()=>{if(s){const b=s.findIndex(y=>{var j,I;return((j=y.opptjeningsperiode)==null?void 0:j.fom)===((I=l==null?void 0:l.opptjeningsperiode)==null?void 0:I.fom)})-1;b>=0&&o(s[b])}};return i.jsxs(i.Fragment,{children:[i.jsxs(Oe,{startDate:N(n).subtract(1,"months").toDate(),endDate:N(r).add(10,"days").toDate(),children:[i.jsxs(Oe.Pin,{date:N(n).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTimeLineLight.StartDato"})}),i.jsx(T,{size:"small",children:i.jsx(be,{dateString:n})})]}),i.jsxs(Oe.Pin,{date:N(r).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTimeLineLight.SluttDato"})}),i.jsx(T,{size:"small",children:i.jsx(be,{dateString:r})})]}),i.jsx(Oe.Row,{label:"",children:s.map(b=>{var y,j,I;return i.jsx(Oe.Period,{start:b.start,end:b.end,status:b.status,onSelectPeriod:()=>{var h;return u((h=b.opptjeningsperiode)==null?void 0:h.fom)},isActive:((y=l==null?void 0:l.opptjeningsperiode)==null?void 0:y.fom)===((j=b.opptjeningsperiode)==null?void 0:j.fom),icon:VF[b.status],title:t.formatMessage({id:LF(b.status)})},(I=b.opptjeningsperiode)==null?void 0:I.fom)})})]}),(l==null?void 0:l.opptjeningsperiode)&&i.jsx(Gv,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:k,velgNestePeriode:v,velgForrigePeriode:f})]})};Lv.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const Ul=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:a})=>i.jsxs(B,{gap:"4",children:[i.jsx(T,{size:"small",children:i.jsx(m,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),i.jsx(T,{size:"small",children:i.jsx(Ge,{dateStringFom:t,dateStringTom:a})}),r.length>0&&i.jsx(Lv,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:a})]});Ul.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const KF=(e,n,r)=>({...Zi.buildInitialValues(e,n,r),...br.buildInitialValues(e)}),$F=e=>({...Zi.transformValues(e),...br.transformValues(e),kode:re.VURDER_OPPTJENINGSVILKARET}),Kv=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:a})=>{const s=z(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:u,harÅpneAksjonspunkter:k,isReadOnly:v,alleMerknaderFraBeslutter:f}=hn(),b=o.some(_=>{var U;return(U=f[_.definisjon])==null?void 0:U.notAccepted}),y=KF(o,r,l.behandlingsresultat),{mellomlagretFormData:j,setMellomlagretFormData:I}=wn(),h=$e({defaultValues:j||y}),E=o.some(_=>_.status===Un.OPPRETTET)?void 0:Vg.OPPFYLT===r,q=_=>u($F(_)),S=(..._)=>i.jsx("b",{children:_}),P=_=>{var U;return((U=t.fastsattOpptjeningAktivitetList)==null?void 0:U.length)===0&&_===!0?s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},D=()=>i.jsx(Ul,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom});return i.jsx(Ue,{formMethods:h,onSubmit:q,setDataOnUnmount:I,children:i.jsxs(Op,{title:s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:k,readOnlySubmitButton:e,readOnly:v,lovReferanse:n,originalErVilkarOk:E,erIkkeGodkjentAvBeslutter:b,isDirty:h.formState.isDirty,isSubmitting:h.formState.isSubmitting,rendreFakta:D,children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:a?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),i.jsxs(B,{gap:"4",children:[i.jsx(Zi,{readOnly:v,customVilkarOppfyltText:i.jsx(m,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:i.jsx(m,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:S}}),validatorsForRadioOptions:[P]}),i.jsx(br,{readOnly:v})]})]})})};Kv.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const $v=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:a})=>{const{aksjonspunkterForPanel:s}=hn();return s.length>0?i.jsx(Kv,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:a}):i.jsx(Ul,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};$v.__docgenInfo={description:`OpptjeningVilkarForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const UF={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},HF=Me(UF),YF=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:a=!1})=>i.jsx(De,{value:HF,children:i.jsx($v,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:a})});YF.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fastsattOpptjening: FastsattOpptjening;
  opptjeningAktivitetList?: OpptjeningAktivitet[];
  ferdiglignetNæring?: FerdiglignetNæring[] | null;
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
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  erGodkjent: boolean | null;
  erEndret: boolean;
  begrunnelse?: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"opptjeningFom",value:{name:"string",required:!0}},{key:"opptjeningTom",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsforholdRef",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"stillingsandel",value:{name:"number",required:!0}},{key:"naringRegistreringsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:"OpptjeningAktivitet[]",required:!1}},{key:"ferdiglignetNæring",value:{name:"union",raw:"FerdiglignetNæring[] | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  år: string;
  beløp: number;
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},{name:"null"}],required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const CF=(e,n)=>e.filter(r=>r.opptjeningsår===n),Uv=e=>e.aktivitetStatus+e.arbeidsgiverId,zF=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?`${t.navn} (${ye(t.fødselsdato)})`:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?xg(r)(e.aktivitetStatus,an.AKTIVITET_STATUS):""},JF=(e,n,r)=>({identifikator:Uv(e),visningsnavn:zF(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),WF=(e,n,r)=>{const t=[];return e.forEach(a=>{const s=a.erBrukerMottaker?a.årsbeløp:0,l=a.erBrukerMottaker?0:a.årsbeløp,o=Uv(a),u=t.find(k=>k.identifikator===o);u?(u.utbetaltTilSøker+=s,u.utbetaltIRefusjon+=l):t.push(JF(a,n,r))}),t},Hv=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const a=!e||e.length<1,s=A.useMemo(()=>a?void 0:CF(e,n),[e,n]),l=A.useMemo(()=>s?WF(s,t,r):[],[s]);return a?null:i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.AndelNavn"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.GrunnlagRefusjon"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.GrunnlagSøker"})})]})}),i.jsx(c.Body,{children:l.map(o=>i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o.visningsnavn})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o.utbetaltIRefusjon})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})]})};Hv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ZF=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]},QF=()=>i.jsx(ie,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Yv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:a})=>{const{andeler:s}=e,l=!s||s.length<1,o=A.useMemo(()=>l?[]:ZF(s),[s]);return l?null:i.jsx(Ne,{children:i.jsxs(Ne.Item,{open:t,children:[i.jsx(Ne.Header,{onClick:a,children:QF()}),i.jsx(Ne.Content,{children:i.jsx(B,{gap:"4",children:o.map(u=>i.jsx(Hv,{alleAndeler:s,opptjeningsår:u,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${u}`))})})]})})};Yv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Cv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,a]=A.useState(!1);return i.jsx(Yv,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:()=>a(!t)})};Cv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const XF="_detailsPeriode_1r02x_1",ex="_margin_1r02x_9",mi={detailsPeriode:XF,margin:ex},nx={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},rx=e=>e?`...${e.substring(e.length-4,e.length)}`:"",tx=(e,n,r)=>{const t=r[e.arbeidsgiverReferanse];return t!=null&&t.navn?t.erPrivatPerson?`${t.navn} (${t.fødselsdato})`:`${t.navn} (${t.identifikator})${rx(e.eksternArbeidsforholdId)}`:e.arbeidsforholdType?n(e.arbeidsforholdType,an.OPPTJENING_AKTIVITET_TYPE):""},ax=(e,n,r)=>{switch(e.aktivitetStatus){case Sn.ARBEIDSTAKER:return tx(e,n,r);case Sn.FRILANSER:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Frilans"});case Sn.SELVSTENDIG_NAERINGSDRIVENDE:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case Sn.DAGPENGER:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case Sn.ARBEIDSAVKLARINGSPENGER:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.AAP"});case Sn.MILITAER_ELLER_SIVIL:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Militaer"});case Sn.BRUKERS_ANDEL:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},sx=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return i.jsx(m,{id:n})},zv=({selectedItemData:e,callbackForward:n,callbackBackward:r,alleKodeverk:t,isSoknadSvangerskapspenger:a,arbeidsgiverOpplysningerPerId:s,lukkPeriode:l})=>{const o=up(e.fom,e.tom),u=z(),k=xg(t),v=A.useCallback((...f)=>i.jsx("b",{children:f}),[]);return i.jsx(Wn,{borderWidth:"1",padding:"4",children:i.jsxs(B,{gap:"4",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Detaljer"})}),i.jsxs(F,{gap:"2",align:"center",children:[i.jsx(ee,{className:mi.margin,size:"xsmall",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(m,{id:"Timeline.prevPeriodShort"})}),i.jsx(ee,{className:mi.margin,size:"xsmall",icon:i.jsx(sa,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(m,{id:"Timeline.nextPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx(Kn,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsx("div",{className:mi.detailsPeriode,children:i.jsxs(B,{gap:"2",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:ye(e.fom),tomVerdi:ye(e.tom)}})}),i.jsx(T,{size:"small",children:o.formattedString})]}),i.jsx(F,{gap:"2",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:v}})})]})}),e.andeler&&e.andeler.length!==0&&i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Andel"})}),!a&&i.jsxs(i.Fragment,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.KontoType"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Gradering"})})]}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Utbetalingsgrad"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Refusjon"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.TilSoker"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.SisteUtbDato"})})]})}),i.jsx(c.Body,{children:e.andeler.map((f,b)=>i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:ax(f,k,s)}),!a&&i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:nx[f.uttak.stonadskontoType]})}),!a&&i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:sx(f)})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.utbetalingsgrad?f.utbetalingsgrad:""})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.aktivitetStatus===Sn.ARBEIDSTAKER&&f.refusjon?f.refusjon:""})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.tilSoker?f.tilSoker:""})}),i.jsx(c.DataCell,{children:i.jsx(T,{size:"small",children:f.sisteUtbetalingsdato?ye(f.sisteUtbetalingsdato):""})})]},`index${b+1}`))})]})]})})};zv.__docgenInfo={description:`TimeLineData

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ix=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,lx=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===jp.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},ox=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:ix(n),start:N(n.fom).toDate(),end:N(n.tom).add(1,"days").toDate(),id:r,periode:n})),dx=(e,n)=>{var t;return((t=n[an.RELASJONSROLLE_TYPE].find(a=>a.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},ux=(e,n)=>{const r=N(e);return r.isBefore(n)?n.subtract(5,"days"):r},Jv=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:r,hovedsokerKjonnKode:t,alleKodeverk:a,arbeidsgiverOpplysningerPerId:s,fagsak:l})=>{const o=z(),[u,k]=A.useState(),v=A.useMemo(()=>ox(e),[e]),f=A.useCallback(()=>{k(null)},[]),b=A.useCallback(()=>{const w=v.findIndex(M=>M.id===(u==null?void 0:u.id))+1;w<v.length&&k(v[w])},[v,u,k]),y=A.useCallback(()=>{const w=v.findIndex(M=>M.id===(u==null?void 0:u.id))-1;w>=0&&k(v[w])},[v,u,k]),j=A.useCallback(w=>{k(v.find(M=>M.id===w))},[k,v]),I=N(v[0].start),h=N(v[v.length-1].end),[R,E]=A.useState(I),[q,S]=A.useState(h),P=()=>{R.subtract(1,"month").isBefore(I)||(E(R.subtract(1,"month")),S(q.subtract(1,"month")))},D=()=>{q.add(1,"month").isAfter(h)||(E(R.add(1,"month")),S(q.add(1,"month")))},_=()=>{R.add(3,"month").isAfter(q)||(E(R.add(1,"month")),S(q.subtract(1,"month")))},U=()=>{q.add(1,"month").diff(R.subtract(1,"month"),"months")<36&&(E(R.subtract(1,"month")),S(q.add(1,"month")))},Y=A.useMemo(()=>lx(r),[r]);return i.jsxs(B,{gap:"4",children:[i.jsxs(Oe,{startDate:R.toDate(),endDate:q.add(1,"days").toDate(),children:[i.jsxs(Oe.Pin,{date:N(n).toDate(),children:[i.jsx(T,{children:i.jsx(m,{id:"TilkjentYtelse.Soknadsdato"})}),i.jsx(T,{children:i.jsx(be,{dateString:n})})]}),Y.dato&&i.jsxs(Oe.Pin,{date:ux(Y.dato,R).toDate(),children:[i.jsx(T,{children:i.jsx(m,{id:Y.textId})}),i.jsx(T,{children:i.jsx(be,{dateString:Y.dato})})]}),i.jsx(Oe.Row,{label:dx(l,a),icon:t===Dp.KVINNE?i.jsx(Ap,{width:20,height:20,color:"var(--a-red-200)"}):i.jsx(Ip,{width:20,height:20,color:"var(--a-blue-600)"}),children:v.map(w=>i.jsx(Oe.Period,{start:w.start,end:w.end,status:"success",onSelectPeriod:()=>j(w.id),isActive:(u==null?void 0:u.id)===w.id,icon:w.erGradert?i.jsx(Zp,{"aria-hidden":!0}):i.jsx(Ji,{"aria-hidden":!0}),title:w.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},w.id))})]}),i.jsxs(F,{gap:"2",justify:"end",children:[i.jsx(ee,{size:"small",icon:i.jsx(Bp,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),i.jsx(ee,{size:"small",icon:i.jsx(Ep,{"aria-hidden":!0}),onClick:U,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),i.jsx(ee,{size:"small",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:P,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),i.jsx(ee,{size:"small",icon:i.jsx(sa,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),u&&i.jsx(zv,{alleKodeverk:a,selectedItemData:u.periode,callbackForward:b,callbackBackward:y,isSoknadSvangerskapspenger:l.fagsakYtelseType===ep.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:s,lukkPeriode:f})]})};Jv.__docgenInfo={description:`TilkjentYtelse

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
  register: FamilieHendelse | null;
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
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
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
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
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""}}};const gx=e=>{var n;return((n=e.find(r=>r.definisjon===re.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse)??void 0},Wv=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:a,soknad:s})=>{var f,b;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:u}=hn(),k=gx(u),v=(f=s.søknadsfrist)!=null&&f.mottattDato?(b=s.søknadsfrist)==null?void 0:b.mottattDato:s.mottattDato;return i.jsxs(B,{gap:"4",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.Title"})}),e&&i.jsx(Jv,{beregningsresultatPeriode:e.perioder,soknadDate:v,familieHendelseSamling:t,hovedsokerKjonnKode:a!=null&&a.bruker?a.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&i.jsx(Cv,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),k&&i.jsxs(B,{gap:"2",children:[i.jsx(x,{children:i.jsx(m,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),i.jsxs(T,{children:[k," ",i.jsx(Cr,{})]})]})]})};Wv.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  register: FamilieHendelse | null;
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
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
  begrunnelseForSenInnsending: string | null;
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
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    } | null;
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
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
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
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string | null;
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
}>`},description:""}}};const mx={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},kx=Me(mx),vx=e=>i.jsx(De,{value:kx,children:i.jsx(Wv,{...e})});vx.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  register: FamilieHendelse | null;
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
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
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
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
  begrunnelseForSenInnsending: string | null;
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
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
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
    } | null;
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
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
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
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string | null;
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
}>`},description:""}}};export{Ty as A,hF as B,IF as F,CE as I,YF as O,YN as P,Xp as S,vx as T,xF as a,Oy as b,hN as c,IA as d,FE as e,Zp as f,Hp as g};
