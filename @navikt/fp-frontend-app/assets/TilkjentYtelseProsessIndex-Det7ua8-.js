import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as R,R as $}from"./index-Dxs5m6lS.js";import{m as fr,W as Jv,p as Di,au as _t,l as ln,an as Wv,H as ie,g as I,V as B,f as F,L as x,E as oe,u as z,h as ee,aw as hn,ay as _n,P as De,a6 as Wn,a3 as Yr,at as $n,e as jt,ax as Vi,az as Zv,aM as Sn,F as Qv}from"./withPanelData-BPCrHVyj.js";import{u as Xv,i as Qt,j as be,w as Ge,q as V,C as Ul,K as Se,G as xe,A as Ie,H as ep,S as Mi,X as Gi,B as pe,b as Zn,f as Me,E as An,o as hg,c as Li,P as qe,Q as se,a0 as Fe,e as Cr,s as Ag,a1 as Hl,J as ge,v as np,a2 as Ki,_ as Ig,R as rp,z as Ot,r as Xt,k as Dt,a3 as Vt,Z as Tg,a4 as tp,a5 as ap,a6 as sp,p as xn,O as ip,a7 as Ir,d as lp,t as op}from"./index.es-D8JJ0JAI.js";import{u as In}from"./fagsakApi-CH_uFL5g.js";import{a as $e,K as Ue,H as Te,e as W,U as Un,O as bn,G as ve,a1 as Rg,l as Eg,j as Ng,Q as We,b as mn,o as kn,N as vn,h as ea,m as $i,u as ct,d as Ze,c as he,i as na,Z as qg,ae as Qe,af as _r,J as ra,ag as dp,ah as up,E as Sg,ai as gp,aj as Yl,f as ta,g as aa,I as mp}from"./index.es-C3y2DdM7.js";import{A as re,h as sa}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as Hn}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as an}from"./alleKodeverk-D9pP0qVl.js";import{V as kp}from"./venteArsakType-BJdSFL9e.js";import{S as vp}from"./SettPaVentModalIndex-B0qBU-2H.js";import{c as Pg}from"./bind-oYjWB_aQ.js";import{d as N}from"./dayjs.min-Cke173X9.js";import{a as Gr,g as Bg}from"./kodeverkUtils-DLZgokMR.js";import{D as Fg,å as pp}from"./DokumentLink-DiBpwShy.js";import{M as m}from"./message-DpDCx0h5.js";import{S as sr}from"./Spacer-DWJrPkA5.js";import{T as xg}from"./Tooltip-MzjYAAI2.js";import{S as yr}from"./ExclamationmarkTriangleFill-BbZnK-7Z.js";import{L as Ui}from"./Link-C57OexXC.js";import{a as Hi}from"./FagsakProfileIndex-B3KxbShg.js";import{k as Yi,V as Yn,l as fp,j as Aa,s as wg,O as yp,S as bp}from"./VedtakProsessIndex-bkaNQvBx.js";import{P as or}from"./Popover-BPWoK4Et.js";import{T as c}from"./Table-CdUFbokg.js";import{u as Tn,h as _g}from"./behandlingApi-FBUCt0uW.js";import{u as Qn,a as Xn}from"./VergeFaktaInitPanel-CGTV0sTF.js";import{B as Rn}from"./FagsakIndex-t0WhDGT4.js";import{S as jp}from"./StarFill-rtGDbroG.js";import{b as En,V as cp,S as hp,a as Ap}from"./index.es-BPHmSOT0.js";import{T as ir}from"./BehandlingSupportIndex-DYwbZKup.js";import{a as Ip,T as Oe,b as Tp,S as Rp}from"./Timeline-CgY1zGCr.js";import{T as ia}from"./Tag-R_VDfy0j.js";import{C as Ep}from"./Checkbox-DS6Al2E9.js";import{s as Np}from"./BehandlingMenuIndex-CJNAUfAQ.js";import{H as qp}from"./landkoder-DTD1JcBx.js";import{S as Sp}from"./VisittkortSakIndex-BkNRpqaH.js";import{a as Ci,S as Pp}from"./Plus-CjrgRy9-.js";import{S as Og}from"./TotrinnskontrollIndex-CO_V8Xb-.js";import{V as Dg}from"./BehandlingHenlagtPanel-lorwTDIy.js";import{i as Bp,g as Fp}from"./index-BHG4GVne.js";import{u as zi,P as Vg,b as xp}from"./useStandardProsessPanelProps-DynesqjR.js";import{P as br,a as wp,V as Ji,b as _p}from"./OverstyringPanel-BzBnvnO1.js";import{K as Op}from"./Kjonnkode-C-fkzSiP.js";const Wi=R.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Dp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Zi=R.createContext(null),Vp=R.forwardRef((e,n)=>{var{children:r,className:t,open:a,defaultOpen:s=!1,onOpenChange:l}=e,o=Dp(e,["children","className","open","defaultOpen","onOpenChange"]);const[u,k]=Xv({defaultValue:s,value:a,onChange:l}),v=R.useContext(Wi),{cn:f}=fr(),b=R.useRef(!(a||s)),y=()=>{k(j=>!j),b.current=!0};return v!=null&&v.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),$.createElement("div",Object.assign({className:f("navds-accordion__item",t,{"navds-accordion__item--open":u,"navds-accordion__item--neutral":(v==null?void 0:v.variant)==="neutral","navds-accordion__item--no-animation":!b.current}),"data-expanded":u,ref:n},Jv(o,["onClick"])),$.createElement(Zi.Provider,{value:{open:u,toggleOpen:y}},r))});var Mp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Gp=R.forwardRef((e,n)=>{var{children:r,className:t}=e,a=Mp(e,["children","className"]);const s=R.useContext(Zi),l=Di(!1),{cn:o}=fr();return s===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):$.createElement(_t,Object.assign({},a,{as:"div",ref:n,className:o("navds-accordion__content",{"navds-accordion__content--closed":!s.open},t),"aria-hidden":!s.open||void 0}),l?$.createElement("div",{className:o("navds-accordion__content-inner")},r):r)});var Lp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Kp=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Lp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var $p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Up=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=$p(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Hp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Yp=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Hp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var Cp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Mg=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Cp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var zp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Tr=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=zp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var Jp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Wp=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Jp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var Zp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Qp=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Zp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var Xp=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Gg=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Xp(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var ef=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const nf=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=ef(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var rf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const tf=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=rf(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var af=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Rr=R.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=af(e,["title","titleId"]);let s=ln();return s=r?t||"title-"+s:void 0,R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":s},a),r?R.createElement("title",{id:s},r):null,R.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var sf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const lf=R.forwardRef((e,n)=>{var r,{children:t,className:a,onClick:s}=e,l=sf(e,["children","className","onClick"]);const o=R.useContext(Zi),u=R.useContext(Wi),k=Di(!1),{cn:v}=fr();if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let f=(r=u==null?void 0:u.headingSize)!==null&&r!==void 0?r:"small";return k&&(f=(u==null?void 0:u.size)==="small"?"xsmall":"small"),$.createElement("button",Object.assign({ref:n},l,{className:v("navds-accordion__header",a),onClick:Wv(s,o.toggleOpen),"aria-expanded":o.open,type:"button"}),$.createElement("span",{className:v("navds-accordion__icon-wrapper")},$.createElement(Qt,{className:v("navds-accordion__header-chevron"),"aria-hidden":!0})),$.createElement(ie,{size:f,as:"span",className:v("navds-accordion__header-content")},t))});var of=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ne=R.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:a="small",size:s="medium",indent:l=!0}=e,o=of(e,["className","variant","headingSize","size","indent"]);const{cn:u}=fr();return $.createElement(Wi.Provider,{value:{variant:t,headingSize:a,size:s,mounted:!0}},$.createElement("div",Object.assign({},o,{className:u("navds-accordion",r,`navds-accordion--${s}`,{"navds-accordion--indent":l}),ref:n})))});Ne.Header=lf;Ne.Content=Gp;Ne.Item=Vp;const St=R.createContext({listType:"ul",size:"medium"});var df=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Lg=R.forwardRef((e,n)=>{var{className:r,children:t,title:a,icon:s}=e,l=df(e,["className","children","title","icon"]);const{listType:o,size:u}=R.useContext(St),{cn:k}=fr();return o==="ol"&&s&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),$.createElement("li",Object.assign({},l,{ref:n,className:k("navds-list__item",r)}),o==="ul"&&$.createElement("div",{className:k("navds-list__item-marker",{"navds-list__item-marker--icon":s,"navds-list__item-marker--bullet":!s})},s||$.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},$.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),$.createElement("div",null,a&&$.createElement(_t,{as:"p",size:u,weight:"semibold"},a),t))});Lg.displayName="List.Item";var uf=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const gf={small:"xsmall",medium:"small",large:"medium"},Q=R.forwardRef((e,n)=>{var{children:r,className:t,as:a="ul",title:s,description:l,headingTag:o="h3",size:u,"aria-label":k,"aria-labelledby":v}=e,f=uf(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:b}=R.useContext(St),{cn:y}=fr(),j=Di(!1),A=u??b;return j?$.createElement(St.Provider,{value:{listType:a,size:A}},$.createElement(_t,Object.assign({as:"div"},f,{size:A,ref:n,className:y("navds-list",`navds-list--${A}`,t)}),$.createElement(a,{role:"list","aria-label":k,"aria-labelledby":v},r))):$.createElement(St.Provider,{value:{listType:a,size:A}},$.createElement(_t,Object.assign({as:"div"},f,{size:A,ref:n,className:y("navds-list",`navds-list--${A}`,t)}),s&&$.createElement(ie,{size:gf[A],as:o},s),l&&$.createElement(I,{size:A},l),$.createElement(a,{role:"list","aria-label":k,"aria-labelledby":v},r)))});Q.Item=Lg;var ne=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(ne||{}),ke=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(ke||{}),Lr=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Lr||{});const Qi=R.createContext({isDirty:!1,setDirty:()=>{}}),Kg=({children:e})=>{const[n,r]=R.useState(!1),t=R.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return i.jsx(Qi.Provider,{value:t,children:e})},Xi=e=>{const n=R.useContext(Qi);R.useEffect(()=>{n.setDirty(e)},[e])},mf=()=>R.useContext(Qi).isDirty;Kg.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const kf="_inline_glms2_1",vf="_docIcon_glms2_9",pf="_phoneIcon_glms2_14",Ia={inline:kf,docIcon:vf,phoneIcon:pf},Kr=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:a,arbeidsgiverFødselsdato:s,ikkeVisInfo:l})=>i.jsxs(i.Fragment,{children:[i.jsxs(B,{gap:"4",children:[!l&&s&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(oe,{children:i.jsx(be,{dateString:s})})]}),!l&&!s&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(oe,{children:r.arbeidsgiverIdent})]}),t&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),i.jsx(I,{size:"small",children:r.eksternArbeidsforholdId})]}),n&&i.jsxs(i.Fragment,{children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),i.jsx(I,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:Gr(a,an.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(I,{size:"small",children:V(r.inntektPrMnd)})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(I,{size:"small",children:i.jsx(m,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(I,{size:"small",children:V(r.refusjonPrMnd)})]}),i.jsxs(Fg,{saksnummer:e,journalpostId:r.journalpostId,dokumentId:r.dokumentId,children:[i.jsx("span",{children:i.jsx(I,{size:"small",className:Ia.inline,children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),i.jsx(Mg,{className:Ia.docIcon})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(Gg,{className:Ia.phoneIcon}),i.jsxs(B,{gap:"1",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(oe,{children:r.kontaktpersonNavn}),i.jsx(oe,{children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})]})]});Kr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const ff="_inline_10adz_1",yf="_aksjonpunktImage_10adz_5",bf="_arrow_10adz_12",jf="_ikkeMottatt_10adz_18",cf="_skiller_10adz_30",Vn={inline:ff,aksjonpunktImage:yf,arrow:bf,ikkeMottatt:jf,skiller:cf},hf=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Af=(e,n)=>{const r=e.some(a=>a.internArbeidsforholdId),t=e.some(a=>!a.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(a=>!a.internArbeidsforholdId||a.internArbeidsforholdId===n)},If=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")},el=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:a})=>{const s=z(),[l,o]=R.useState({}),u=n.length===1,k=u?Af(r,n[0].internArbeidsforholdId):void 0;return i.jsxs(B,{gap:"4",children:[a&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),i.jsx(oe,{children:i.jsx(be,{dateString:a})})]}),!a&&n.length>0&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),i.jsx(oe,{children:n[0].arbeidsgiverIdent})]}),!u&&i.jsxs(i.Fragment,{children:[i.jsx(Ul,{dividerParagraf:!0,className:Vn.skiller}),n.map(v=>{const f=r.find(b=>hf(v,b));return i.jsxs($.Fragment,{children:[i.jsxs(B,{gap:"2",children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),i.jsxs("div",{children:[v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length<50&&i.jsx("div",{children:i.jsx(I,{size:"small",children:v.eksternArbeidsforholdId})}),v.eksternArbeidsforholdId&&v.eksternArbeidsforholdId.length>=50&&i.jsx(xg,{content:If(v.eksternArbeidsforholdId),children:i.jsx(I,{size:"small",children:`${v.eksternArbeidsforholdId.substring(0,50)}...`})}),!v.eksternArbeidsforholdId&&i.jsx(I,{size:"small",children:"-"})]}),f&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!f&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsxs("div",{children:[i.jsx(yr,{className:Vn.aksjonpunktImage,title:s.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),i.jsx("div",{className:Vn.ikkeMottatt,children:i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:v.fom,dateStringTom:v.tom!==Se?v.tom:void 0})}),f&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsx(I,{size:"small",children:i.jsx(be,{dateString:f.motattDato})})]})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(I,{size:"small",children:`${v.stillingsprosent}%`})]}),v.permisjonOgMangel&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:Gr(t,an.PERMISJONSBESKRIVELSE_TYPE,v.permisjonOgMangel.type)}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:v.permisjonOgMangel.permisjonFom,dateStringTom:v.permisjonOgMangel.permisjonTom})})]}),f&&i.jsxs(i.Fragment,{children:[v.internArbeidsforholdId&&l[v.internArbeidsforholdId]&&i.jsx(Kr,{saksnummer:e,inntektsmelding:f,skalViseArbeidsforholdId:!1}),i.jsxs(Ui,{onClick:b=>{b.preventDefault(),o(y=>{if(!v.internArbeidsforholdId)return y;const j=y[v.internArbeidsforholdId];return{...y,[v.internArbeidsforholdId]:j===void 0||j===!1}})},href:"",children:[i.jsx("span",{children:i.jsx(I,{size:"small",className:Vn.inline,children:i.jsx(m,{id:!v.internArbeidsforholdId||!l[v.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),v.internArbeidsforholdId&&l[v.internArbeidsforholdId]?i.jsx(Hi,{className:Vn.arrow}):i.jsx(Qt,{className:Vn.arrow})]})]})]}),i.jsx(Ul,{dividerParagraf:!0,className:Vn.skiller})]},`${v.arbeidsgiverIdent}${v.internArbeidsforholdId}`)})]}),u&&!!k&&i.jsx(Kr,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:k,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),u&&r.length===0&&i.jsxs(i.Fragment,{children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),i.jsx(I,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:Gr(t,an.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})};el.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Tf="_bredde_gb3eb_1",Rf="_inline_gb3eb_9",Ef="_arrow_gb3eb_13",ht={bredde:Tf,inline:Rf,arrow:Ef},Nf=[],qf=(e,n)=>{const t=N(e).subtract(1,"month").startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),u=n.find(k=>N(k.fom).startOf("month").format(xe)===o);s.push({beløp:(u==null?void 0:u.beløp)||0,fom:o})}return s},nl=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:a=Nf,alleKodeverk:s,arbeidsgiverFødselsdato:l})=>{const[o,u]=R.useState(!1),k=R.useMemo(()=>qf(n,r),[r]),v=t.length===1,f=r.length>0&&r.some(b=>b.beløp>0);return i.jsxs(B,{gap:"8",children:[i.jsx(el,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:a,alleKodeverk:s,arbeidsgiverFødselsdato:l}),f&&i.jsxs(B,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:v?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),i.jsx(B,{gap:"1",children:k.filter((b,y)=>o?!0:y<3).map(b=>i.jsxs(F,{gap:"2",className:ht.bredde,children:[i.jsx(I,{size:"small",children:i.jsx(m,{id:`ArbeidsforholdInformasjonPanel.${N(b.fom).month()+1}`})}),i.jsx(I,{size:"small",children:N(b.fom).year()}),i.jsx(sr,{}),i.jsx(I,{size:"small",children:V(b.beløp)})]},b.fom))}),i.jsxs(Ui,{onClick:b=>{b.preventDefault(),u(!o)},href:"",children:[i.jsx("span",{children:i.jsx(I,{size:"small",className:ht.inline,children:i.jsx(m,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?i.jsx(Hi,{className:ht.arrow}):i.jsx(Qt,{className:ht.arrow})]})]}),!f&&i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})};nl.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Sf="_hjelpetekst_1kk6h_1",Pf="_alertStripe_1kk6h_5",Bf="_hjelpetekstInnhold_1kk6h_9",Ff="_svg_1kk6h_14",At={hjelpetekst:Sf,alertStripe:Pf,hjelpetekstInnhold:Bf,svg:Ff},xf=mn(3),wf=kn(1500),_f=Eg(1),Of=Ng(100),Df=e=>n=>{const r=e("fom");return r&&n?ea(r)(n):null},Vf=(e,n,r,t)=>()=>{e(a=>a.map(s=>{if(r.arbeidsgiverIdent===s.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return s}))},$g=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:a,radData:s,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:u,lukkArbeidsforholdRad:k,oppdaterTabell:v,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:b})=>{const y=z(),j=R.useMemo(()=>{var _,U,Y,w,M;return{saksbehandlersVurdering:(_=s.avklaring)==null?void 0:_.saksbehandlersVurdering,begrunnelse:(U=s.avklaring)==null?void 0:U.begrunnelse,fom:(Y=s.avklaring)==null?void 0:Y.fom,tom:(w=s.avklaring)==null?void 0:w.tom,stillingsprosent:(M=s.avklaring)==null?void 0:M.stillingsprosent}},[s]),A=$e({defaultValues:j});Xi(A.formState.isDirty);const h=A.watch("saksbehandlersVurdering"),T=()=>{k(),A.reset(j)},E=_=>{const U=Vf(v,s,a,_);return _.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:a.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:a.arbeidsgiverIdent,vurdering:ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:_.begrunnelse,fom:_.fom,tom:_.tom,stillingsprosent:_.stillingsprosent}).then(U).finally(()=>A.reset(_)):u({behandlingUuid:n,behandlingVersjon:r,vurdering:_.saksbehandlersVurdering,begrunnelse:_.begrunnelse,arbeidsgiverIdent:a.arbeidsgiverIdent,internArbeidsforholdRef:a.internArbeidsforholdId}).then(U).finally(()=>A.reset(_))},q=R.useRef(null),[S,P]=R.useState(!1),D=R.useCallback(()=>P(_=>!_),[]);return i.jsxs(B,{gap:"8",children:[i.jsx(Kr,{saksnummer:e,inntektsmelding:a,skalViseArbeidsforholdId:f,arbeidsgiverFødselsdato:b}),i.jsx("div",{className:At.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),i.jsx(Ue,{formMethods:A,onSubmit:E,children:i.jsxs(B,{gap:"4",children:[i.jsx(Te,{name:"saksbehandlersVurdering",label:i.jsxs(F,{gap:"2",children:[i.jsx(m,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),i.jsx(Yi,{className:At.svg,ref:q,onClick:D,title:y.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),i.jsx(or,{open:S,onClose:D,anchorEl:q.current,className:At.hjelpetekst,children:i.jsx(or.Content,{className:At.hjelpetekstInnhold,children:i.jsx(I,{children:i.jsx(m,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[W],isReadOnly:l,radios:[{label:y.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:y.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:ne.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:y.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),h===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&i.jsxs(F,{gap:"4",children:[i.jsx(Un,{name:"fom",label:i.jsx(m,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[W,bn],isReadOnly:l}),i.jsx(Un,{name:"tom",label:i.jsx(m,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[bn,Df(A.getValues)],isReadOnly:l}),i.jsx(ve,{name:"stillingsprosent",label:i.jsx(m,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:_=>{const U=parseInt(_.toString(),10);return Number.isNaN(U)?_:U},validate:[W,Rg,_f,Of],readOnly:l,maxLength:3})]}),i.jsx(We,{label:i.jsx(m,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[W,xf,wf,vn],maxLength:1500,readOnly:l}),!l&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"secondary",loading:A.formState.isSubmitting,disabled:!A.formState.isDirty||A.formState.isSubmitting,children:i.jsx(m,{id:"ManglendeOpplysningerForm.Lagre"})}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:A.formState.isSubmitting,onClick:T,type:"button",children:i.jsx(m,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})};$g.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Mf="_alertStripe_9hpes_1",Gf="_hjelpetekst_9hpes_5",Lf="_hjelpetekstInnhold_9hpes_9",Kf="_svg_9hpes_14",It={alertStripe:Mf,hjelpetekst:Gf,hjelpetekstInnhold:Lf,svg:Kf},$f=mn(3),Uf=kn(1500),Hf=(e,n,r)=>()=>{e(t=>t.map(a=>a.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:a))},Ug=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:a=[],arbeidsforholdForRad:s,inntektsmeldingerForRad:l,radData:o,isReadOnly:u,lagreVurdering:k,lukkArbeidsforholdRad:v,oppdaterTabell:f,alleKodeverk:b,arbeidsgiverFødselsdato:y})=>{const j=z(),A=R.useMemo(()=>{var Y,w;return{saksbehandlersVurdering:(Y=o.avklaring)==null?void 0:Y.saksbehandlersVurdering,begrunnelse:(w=o.avklaring)==null?void 0:w.begrunnelse}},[o]),h=$e({defaultValues:A});Xi(h.formState.isDirty);const T=s.length===1,E=()=>{v(),h.reset(A)},q=Y=>{const w={behandlingUuid:n,behandlingVersjon:r,vurdering:Y.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:T?s[0].internArbeidsforholdId:void 0,begrunnelse:Y.begrunnelse};return k(w).then(Hf(f,o,Y)).finally(()=>h.reset(Y))},S=R.useRef(null),[P,D]=R.useState(!1),_=R.useCallback(()=>D(Y=>!Y),[]),U=[{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:ne.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&U.splice(1,0,{label:j.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:ne.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),i.jsxs(B,{gap:"6",children:[i.jsx(nl,{saksnummer:e,skjæringspunktDato:t,inntektsposter:a,arbeidsforholdForRad:s,inntektsmeldingerForRad:l,alleKodeverk:b,arbeidsgiverFødselsdato:y}),i.jsx(Ue,{formMethods:h,onSubmit:q,children:i.jsxs(B,{gap:"4",children:[!T&&l.length>0&&i.jsx("div",{className:It.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),i.jsx(Te,{name:"saksbehandlersVurdering",label:i.jsxs(F,{gap:"2",children:[i.jsx(m,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),i.jsx(Yi,{ref:S,onClick:_,className:It.svg,title:j.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),i.jsx(or,{open:P,onClose:_,anchorEl:S.current,className:It.hjelpetekst,children:i.jsx(or.Content,{className:It.hjelpetekstInnhold,children:i.jsxs(B,{gap:"4",children:[i.jsx(I,{children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),i.jsx(I,{children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),i.jsx(I,{children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[W],isReadOnly:u,radios:U}),i.jsx(We,{label:i.jsx(m,{id:T?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[W,$f,Uf,vn],maxLength:1500,readOnly:u}),!u&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"secondary",loading:h.formState.isSubmitting,disabled:!h.formState.isDirty||h.formState.isSubmitting,children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.Lagre"})}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:h.formState.isSubmitting,onClick:E,type:"button",children:i.jsx(m,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})]})};Ug.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const dr="342352362",Yf=mn(3),Cf=kn(1500),zf=Eg(1),Jf=Ng(100),Wf=e=>n=>{const r=e("fom");return n&&r?ea(r)(n):null},Zf=e=>n=>{const r={arbeidsgiverIdent:dr,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(a=>a.arbeidsgiverIdent===dr);return t===-1?n.concat(r):n.map((a,s)=>s===t?r:a)},Qf=(e,n,r)=>()=>{e(t=>t.filter(a=>a.arbeidsgiverIdent!==dr)),r&&n()},rl=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:u=!1})=>{const k=z(),[v,f]=R.useState(!1),b=R.useMemo(()=>{var T,E,q,S,P;return{fom:(T=a==null?void 0:a.avklaring)==null?void 0:T.fom,tom:(E=a==null?void 0:a.avklaring)==null?void 0:E.tom,stillingsprosent:(q=a==null?void 0:a.avklaring)==null?void 0:q.stillingsprosent,begrunnelse:(S=a==null?void 0:a.avklaring)==null?void 0:S.begrunnelse,arbeidsgiverNavn:(P=a==null?void 0:a.avklaring)==null?void 0:P.arbeidsgiverNavn}},[a]),y=$e({defaultValues:b});Xi(y.formState.isDirty);const j=()=>{s(),y.reset(b)},A=T=>{const E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:dr,vurdering:ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...T};return t(E).then(()=>{o(Zf(T)),y.reset(T),u&&s()})},h=()=>{const T=y.getValues(),E={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:dr,vurdering:ne.FJERN_FRA_BEHANDLINGEN,...T};t(E).then(Qf(o,s,u))};return i.jsxs(B,{gap:"4",children:[!a&&i.jsx(ie,{size:"small",children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),i.jsx(Ue,{formMethods:y,onSubmit:A,children:i.jsxs(B,{gap:"6",children:[i.jsxs(F,{gap:"4",children:[l&&i.jsxs(i.Fragment,{children:[i.jsx(ve,{name:"arbeidsgiverNavn",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[W],readOnly:r||!l}),i.jsx(Un,{name:"fom",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[W,bn],isReadOnly:r||!l}),i.jsx(Un,{name:"tom",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[bn,Wf(y.getValues)],isReadOnly:r||!l})]}),i.jsx(ve,{name:"stillingsprosent",label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:T=>{const E=parseInt(T.toString(),10);return Number.isNaN(E)?T:E},validate:[W,Rg,zf,Jf],readOnly:r||!l,maxLength:3})]}),i.jsx(We,{label:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[W,Yf,Cf,vn],maxLength:1500,readOnly:r||!l}),l&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"secondary",loading:y.formState.isSubmitting,disabled:!y.formState.isDirty||y.formState.isSubmitting,children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Lagre"})}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:j,type:"button",children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&i.jsxs(i.Fragment,{children:[i.jsx(sr,{}),i.jsx(ee,{size:"small",variant:"tertiary",loading:!1,disabled:y.formState.isSubmitting,onClick:()=>f(!0),type:"button",icon:i.jsx(tf,{"aria-hidden":!0}),children:i.jsx(m,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),v&&i.jsx(ep,{text:k.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:h,cancel:()=>f(!1),showModal:!0})]})};rl.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Xf="_imageColTopPadding_1ao5k_1",ey="_exclamationmarkIcon_1ao5k_5",ny="_checkmarkIcon_1ao5k_12",ry="_panelOpen_1ao5k_19",ty="_panelOpenAp_1ao5k_28",ay="_row_1ao5k_38",sy="_isOpen_1ao5k_44",iy="_isApOpen_1ao5k_48",pn={imageColTopPadding:Xf,exclamationmarkIcon:ey,checkmarkIcon:ny,panelOpen:ry,panelOpenAp:ty,row:ay,isOpen:sy,isApOpen:iy},ly=Pg.bind(pn),oy=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",dy=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,a)=>({fom:t.fom&&N(t.fom).isBefore(a.fom)?t.fom:a.fom,tom:t.tom&&N(t.tom).isAfter(a.tom)?t.tom:a.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},uy=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const a=e.find(s=>!s.internArbeidsforholdId||!n||s.internArbeidsforholdId===n);if(!a)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return a},Hg=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:a,isReadOnly:s,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:u,lagreVurdering:k,toggleÅpenRad:v,erRadÅpen:f,alleKodeverk:b})=>{var H,C;const y=z(),{arbeidsgiverNavn:j,arbeidsgiverIdent:A,årsak:h,avklaring:T,arbeidsgiverFødselsdato:E}=a,q=R.useMemo(()=>t.arbeidsforhold.filter(le=>le.arbeidsgiverIdent===A),[t,A]),S=R.useMemo(()=>t.inntektsmeldinger.filter(le=>le.arbeidsgiverIdent===A),[t,A]),P=(T==null?void 0:T.saksbehandlersVurdering)===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,D=q.length>0&&S.length>0&&!h,_=h===Lr.MANGLENDE_INNTEKTSMELDING,U=h===Lr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,Y=!!h&&!(T!=null&&T.saksbehandlersVurdering),w=q.length>0&&S.length===0&&!h&&!P,M=q.length===0&&S.length>0&&!h,L=R.useMemo(()=>dy(q,a.avklaring),[P,q,a.avklaring]),K=(H=t.inntekter.find(le=>le.arbeidsgiverIdent===A))==null?void 0:H.inntekter;return i.jsxs(c.ExpandableRow,{open:f,onOpenChange:v,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:ly("row",{isOpen:f,isApOpen:Y}),content:i.jsxs("div",{className:Y?pn.panelOpenAp:pn.panelOpen,children:[P&&i.jsx(rl,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:u,radData:a,lukkArbeidsforholdRad:v,erOverstyrt:l,oppdaterTabell:o}),D&&i.jsx(el,{saksnummer:e,arbeidsforholdForRad:q,inntektsmeldingerForRad:S,alleKodeverk:b,arbeidsgiverFødselsdato:E}),M&&i.jsx(Kr,{saksnummer:e,arbeidsforhold:q.length>0?q[0]:void 0,inntektsmelding:uy(S,q.length>0?(C=q[0])==null?void 0:C.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:b,arbeidsgiverFødselsdato:E}),_&&i.jsx(Ug,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:K,isReadOnly:s,arbeidsforholdForRad:q,inntektsmeldingerForRad:S,radData:a,lagreVurdering:k,lukkArbeidsforholdRad:v,oppdaterTabell:o,alleKodeverk:b,arbeidsgiverFødselsdato:E}),U&&i.jsx($g,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:j,inntektsmelding:S[0],radData:a,isReadOnly:s,registrerArbeidsforhold:u,lagreVurdering:k,lukkArbeidsforholdRad:v,oppdaterTabell:o,skalViseArbeidsforholdId:S.length>1}),w&&i.jsx(nl,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:K,arbeidsforholdForRad:q,alleKodeverk:b,arbeidsgiverFødselsdato:E})]}),children:[i.jsxs(c.DataCell,{children:[!Y&&i.jsx(Mi,{title:y.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:pn.checkmarkIcon}),Y&&i.jsx(yr,{title:y.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:pn.exclamationmarkIcon})]}),i.jsxs(c.DataCell,{className:f?pn.colTopPadding:void 0,children:[f&&i.jsx(x,{size:"small",children:j}),!f&&i.jsx(I,{size:"small",children:j})]}),i.jsx(c.DataCell,{className:f?pn.colTopPadding:void 0,children:i.jsxs(I,{children:[(L==null?void 0:L.fom)&&i.jsx(Ge,{dateStringFom:L.fom,dateStringTom:L.tom!==Se?L.tom:void 0}),!L&&"-"]})}),i.jsx(c.DataCell,{className:f?pn.colTopPadding:void 0,children:i.jsx(I,{children:i.jsx(m,{id:oy(P,q.length>0)})})}),i.jsx(c.DataCell,{className:f?pn.colTopPadding:void 0,children:i.jsxs(I,{children:[q.length<2&&S.length===1&&i.jsx(be,{dateString:S[0].motattDato}),!_&&q.length>1&&S.length===q.length&&i.jsx(m,{id:"ArbeidsforholdRad.Mottatt"}),(P||_&&S.length<q.length)&&i.jsx(m,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};Hg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const gy="_alertStripe_2poz8_5",my={alertStripe:gy},ky=(e,n)=>{const r=e.some(l=>l.årsak===Lr.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===Lr.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=(n==null?void 0:n.status)===Hn.OPPRETTET,s=[];return a&&r&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&t&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s},Yg=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:u,oppdaterTabell:k})=>{const v=z(),{arbeidsforhold:f,inntektsmeldinger:b}=t,[y,j]=R.useState(!1),[A,h]=R.useState(!1),T=R.useCallback(()=>{u(!0),j(!0);const P=l.findIndex(D=>{var _;return((_=D.avklaring)==null?void 0:_.saksbehandlersVurdering)===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});P!==-1&&o([P])},[l,o]),E=R.useMemo(()=>ky(l,n),[e.versjon]),q=l.every(P=>P.arbeidsgiverIdent!==dr),S=(n==null?void 0:n.status)===Hn.OPPRETTET;return i.jsxs(B,{gap:"8",children:[i.jsxs(F,{gap:"4",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&S&&!r&&i.jsx(Gi,{onClick:T}),i.jsx(sr,{}),i.jsx(I,{size:"small",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:pe(t.skjæringstidspunkt)}})})]}),i.jsxs(B,{gap:"4",children:[E.length>0&&i.jsx(Zn,{children:E.map(P=>v.formatMessage({id:P})).join(" ")}),f.length===0&&b.length===0&&s&&i.jsx("div",{className:my.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),y&&q&&!A&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"tertiary",icon:i.jsx($i,{"aria-hidden":!0}),onClick:()=>h(!0),children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),A&&i.jsx(rl,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>h(!1),oppdaterTabell:k,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})};Yg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const vy="_alertStripe_jt670_1",py="_headerRow_jt670_5",Cl={alertStripe:vy,headerRow:py},fy=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},zl=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,yy=(e,n)=>{const{fom:r,tom:t,saksbehandlersVurdering:a,stillingsprosent:s,begrunnelse:l}=e;return e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:n,fom:r,tom:t,stillingsprosent:s,saksbehandlersVurdering:a??void 0,begrunnelse:l??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:l??void 0}},by=e=>e.årsak?-1:1,jy=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,a=[...r.sort(by)].reduce((l,o)=>{var y;if(l.find(j=>j.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const k=n[o.arbeidsgiverIdent],v=k.navn,f=o.årsak??((y=t.find(j=>zl(o,j)))==null?void 0:y.årsak),b={arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:v,arbeidsgiverFødselsdato:k.erPrivatPerson?k.fødselsdato:void 0,årsak:f??void 0,avklaring:o.saksbehandlersVurdering?yy(o,v):void 0};return l.concat(b)},[]),s=t.filter(l=>!r.some(o=>zl(o,l))).map(l=>{const o=n[l.arbeidsgiverIdent];return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:o.navn,arbeidsgiverFødselsdato:o.erPrivatPerson?o.fødselsdato:void 0,årsak:l.årsak??void 0,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse??void 0}:void 0}});return a.concat(s).sort(fy)},Jl=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},Cg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>{const[o,u]=R.useState(!1),[k,v]=R.useState(!1),[f,b]=R.useState(!1),{alleKodeverk:y,submitCallback:j,aksjonspunkterForPanel:A,behandling:h,fagsak:T,isReadOnly:E}=hn(),q=A.length>0?A[0]:void 0,{mellomlagretFormData:S,setMellomlagretFormData:P}=_n(),[D,_]=R.useState(S||jy(e,n)),[U,Y]=R.useState(Jl(D)),w=mf();R.useEffect(()=>()=>{P(D)},[D]);const M=fe=>{U.some(Be=>Be===fe)?Y(U.filter(Be=>Be!==fe)):Y(U.concat(fe))},L=R.useRef(null),K=fe=>{var Be;_(fe),Y(Jl(fe(D))),(Be=L==null?void 0:L.current)==null||Be.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},H=()=>{u(!0),j({kode:re.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},C=()=>{u(!0),l()},le=fe=>{u(!0),v(!1);const{frist:Be,ventearsak:Ar}=fe;Ar&&s({frist:Be,ventearsak:Ar})},je=D.some(fe=>{var Be,Ar,$l;return((Be=fe.avklaring)==null?void 0:Be.saksbehandlersVurdering)===ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Ar=fe.avklaring)==null?void 0:Ar.saksbehandlersVurdering)===ne.MELDING_TIL_ARBEIDSGIVER_NAV_NO||(($l=fe.avklaring)==null?void 0:$l.saksbehandlersVurdering)===ne.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),Pe=D.every(fe=>!fe.årsak||fe.årsak&&fe.avklaring),He=q===void 0,Ye=(q==null?void 0:q.status)===Hn.UTFORT,J=(q==null?void 0:q.status)===Hn.OPPRETTET,de=!E&&(Ye||a&&He),Ae=!E&&J&&Pe&&!w&&je,rn=!E&&J&&Pe&&!w&&!je;return i.jsxs(B,{gap:"4",children:[i.jsx(Yg,{behandling:h,aksjonspunkt:q,readOnly:E,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:a,tabellData:D,settÅpneRadIndexer:Y,setErOverstyrt:b,oppdaterTabell:K}),i.jsxs(c,{ref:L,children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{className:Cl.headerRow,children:[i.jsx(c.HeaderCell,{scope:"col"}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),i.jsx(c.HeaderCell,{scope:"col"})]})}),i.jsx(c.Body,{children:D.map((fe,Be)=>i.jsx(Hg,{arbeidOgInntekt:e,saksnummer:T.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon,radData:fe,isReadOnly:E||Ye||He,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>M(Be),erOverstyrt:f,oppdaterTabell:K,erRadÅpen:U.includes(Be),alleKodeverk:y},`${fe.arbeidsgiverNavn}${fe.arbeidsgiverIdent}${Be}`))})]}),Ae&&i.jsxs("div",{children:[i.jsx(ee,{size:"small",variant:"primary",disabled:o,onClick:()=>v(!0),type:"button",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),i.jsx(vp,{submitCallback:le,cancelEvent:()=>v(!1),defaultVenteårsak:kp.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:y[an.VENT_AARSAK],erTilbakekreving:!1,showModal:k,frist:null})]}),rn&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"primary",disabled:o,loading:o,onClick:H,type:"button",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),de&&i.jsxs(B,{gap:"4",children:[i.jsx("div",{className:Cl.alertStripe,children:i.jsx(Ie,{variant:"info",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:C,type:"button",children:i.jsx(m,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};Cg.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const cy={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},hy=Me(cy),zg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})=>i.jsx(De,{value:hy,children:i.jsx(Kg,{children:i.jsx(Cg,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:l})})});zg.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ay=[re.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],Iy=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r,hentOgSettBehandling:t,rettigheter:a}=R.use(Rn),s=Qn(Ay),l=Tn(r),{data:o}=In(l.arbeidOgInntektOptions(r)),{mutate:u}=ct({mutationFn:b=>l.settBehandlingPåVent({frist:b.frist??"",ventearsak:b.ventearsak,behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()}),{mutateAsync:k}=ct({mutationFn:b=>l.registrerArbeidsforholdForAOI(b)}),{mutateAsync:v}=ct({mutationFn:b=>l.lagreVurderingForAOI(b)}),{mutate:f}=ct({mutationFn:()=>l.åpneForNyVurderingAOI({behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()});return i.jsx(Xn,{standardPanelProps:s,faktaPanelKode:Wn.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:_g(r,"ARBEID_OG_INNTEKT")&&!sa(re.AVKLAR_ARBEIDSFORHOLD,r.aksjonspunkt),children:o?i.jsx(zg,{arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:e,erOverstyrer:a.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:k,lagreVurdering:v,settBehandlingPåVentCallback:u,åpneForNyVurdering:f}):i.jsx(An,{})})};Iy.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var gi=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(gi||{});const Jg=({arbeidsforhold:e})=>e.permisjonOgMangel?i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"PermisjonPeriode.Permisjon"})}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})})]}):null;Jg.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Wg=({valgtArbeidsforhold:e})=>{var v,f;const n=e.saksbehandlersVurdering===ne.BRUK,r=e.saksbehandlersVurdering===ne.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===ne.BRUK_MED_OVERSTYRT_PERIODE,a=e.saksbehandlersVurdering===ne.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,s=e.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((v=e.permisjonOgMangel)==null?void 0:v.permisjonStatus)===gi.BRUK_PERMISJON,u=((f=e.permisjonOgMangel)==null?void 0:f.permisjonStatus)===gi.IKKE_BRUK_PERMISJON,k=Ty(e);return i.jsx(hg,{children:i.jsxs(B,{gap:"4",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.Header"})}),i.jsx(Jg,{arbeidsforhold:e}),t&&i.jsxs(i.Fragment,{children:[i.jsx(I,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),i.jsx(I,{size:"small",children:k?i.jsx(be,{dateString:k}):"-"})]})]}),n&&o&&i.jsx(I,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),s&&i.jsx(I,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||u))&&i.jsxs(i.Fragment,{children:[i.jsx(I,{size:"small",children:i.jsx(m,{id:Ry(e)})}),r&&i.jsx(I,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&i.jsx(I,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),a&&i.jsx(I,{size:"small",children:i.jsx(m,{id:a?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdDetail.Begrunnelse"})}),i.jsx(I,{size:"small",children:e.begrunnelse})]})]})})},Ty=e=>e.saksbehandlersVurdering===ne.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===ne.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,Ry=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt";Wg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Zg=()=>i.jsx(c.Row,{children:i.jsx(c.DataCell,{colSpan:5,children:i.jsx(I,{size:"small",children:i.jsx(m,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})})});Zg.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert"};const Ey="_image_awjuc_1",Ny={image:Ey},Qg=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:a})=>{const s=z();return i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Periode",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Kilde",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:Er}})}),i.jsx(c.HeaderCell,{scope:"col"})]})}),i.jsxs(c.Body,{children:[e.length===0&&i.jsx(Zg,{}),e.map(l=>{var v;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",u=Py(l,e,t),k=(v=a.find(f=>Mt(l,f)))==null?void 0:v.motattDato;return i.jsxs(c.Row,{onMouseDown:()=>r(l),onKeyDown:()=>r(l),selected:l.arbeidsgiverIdent===n,children:[i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:Li(u)})}),i.jsx(c.DataCell,{children:i.jsx(Ge,{size:"small",dateStringFom:l.fom,dateStringTom:l.tom!==Se?l.tom:void 0})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:qy(l,s)})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:o})}),i.jsx(c.DataCell,{children:k&&i.jsx(I,{size:"small",children:i.jsx(be,{dateString:k})})}),i.jsx(c.DataCell,{children:(l.saksbehandlersVurdering===ne.BRUK||l.saksbehandlersVurdering===ne.FORTSETT_UTEN_INNTEKTSMELDING)&&i.jsx(jp,{className:Ny.image,title:s.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},By(l,t))})]})]})},Er=i.jsx("br",{},"break-line"),qy=(e,n)=>e.saksbehandlersVurdering===ne.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),Mt=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Sy=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Py=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],a=t==null?void 0:t.navn;return e.saksbehandlersVurdering===ne.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?a:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${a}(${t.identifikator})${Sy(e.eksternArbeidsforholdId)}`:`${a}(${t.identifikator})`},By=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`};Qg.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""}}};const Xg=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=R.useState(),a=u=>{const k=!!u.saksbehandlersVurdering;t(k?u:void 0)},{arbeidsforhold:s,inntektsmeldinger:l}=e,o=s.toSorted(Fy(n,l));return i.jsxs(i.Fragment,{children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),i.jsx(Qg,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:a,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&i.jsx(Wg,{valgtArbeidsforhold:r})]})},Wl=(e,n)=>n.some(r=>Mt(e,r)),Fy=(e,n)=>(r,t)=>{var u,k;const a=e[r.arbeidsgiverIdent],s=e[t.arbeidsgiverIdent];if(a&&s){const v=a.navn.localeCompare(s.navn);if(v!==0)return v}const l=Wl(r,n),o=Wl(t,n);if(l&&o){const v=(u=n.find(b=>Mt(r,b)))==null?void 0:u.motattDato,f=(k=n.find(b=>Mt(t,b)))==null?void 0:k.motattDato;return N(f,xe).diff(N(v,xe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)};Xg.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const xy={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},wy=Me(xy),em=e=>i.jsx(De,{value:wy,children:i.jsx(Xg,{...e})});em.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Zl=[re.AVKLAR_ARBEIDSFORHOLD],_y=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),r=Qn(Zl),{behandling:t}=R.use(Rn),a=Tn(t),{data:s}=In(a.arbeidOgInntektOptions(t));return i.jsx(Xn,{standardPanelProps:r,faktaPanelKode:Wn.ARBEIDSFORHOLD,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:Zl.some(l=>sa(l,t.aksjonspunkt)),children:s?i.jsx(em,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(An,{})})};_y.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ye=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(ye||{}),Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xl={exports:{}},Nr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo;function Oy(){if(eo)return Nr;eo=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Nr.Fragment=n,Nr.jsx=r,Nr.jsxs=r,Nr}var no;function Dy(){return no||(no=1,Xl.exports=Oy()),Xl.exports}var g=Dy(),sn=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(sn||{}),zr=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(zr||{}),te=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(te||{});const $r={};$r.BA=zr.BRUKERS_ANDEL;$r.FL=zr.FRILANS;$r.SN=zr.EGEN_NÆRING;var er=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(er||{}),nm=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(nm||{});const la=e=>e==="OPPR";var O=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(O||{}),tl=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(tl||{}),oa=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(oa||{});const Ta=e=>e?`...${e.substring(e.length-4,e.length)}`:"",wn=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${N(e.fødselsdato).format(se)})${Ta(n)}`:`${e.navn}${Ta(n)}`:`${e.navn} (${e.identifikator})${Ta(n)}`,Ur="avklarAktiviteterForm",un="vurderFaktaBeregningForm",ze=(e,n)=>n.some(r=>r.definisjon===e),Vy=e=>e===nm.OPPRETTET,My="_begrunnelseTextField_12bwv_1",Gy="_explanationTextarea_12bwv_4",Ly="_explanationTextareaReadOnly_12bwv_7",Ra={begrunnelseTextField:My,explanationTextarea:Gy,explanationTextareaReadOnly:Ly},rm={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},ro=Me(rm),Ky=mn(3),tm=4e3,$y=kn(tm),jr=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||ro.formatMessage({id:l});return g.jsx(De,{value:ro,children:(n||r)&&g.jsx("div",{className:Ra.begrunnelseTextField,children:g.jsx(We,{name:s,label:o,validate:e?[]:[W,Ky,$y,vn],className:e?Ra.explanationTextareaReadOnly:Ra.explanationTextarea,maxLength:tm,readOnly:e})})})};jr.buildInitialValues=(e,n="begrunnelse")=>({[n]:Li(e)});jr.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:al,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:Uy}=ye,Hy=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Yy=(e,n,r)=>(e||Hy(al,n))&&r,am=e=>e.find(n=>n.definisjon===Uy||n.definisjon===al),Cy=(e,n)=>ze(al,e)||n,zy=(e,n,r)=>e&&n&&!r,Jy=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,to=(e,n)=>e+n.fom.replace(".",""),Ke=e=>{if(e.arbeidsgiverIdent){const n=Jy(e,e.arbeidsgiverIdent);return to(n,e)}return to(e.arbeidsforholdType,e)},Wy=(e,n)=>e||n,Pt=(e,n,r,t,a)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===er.AAP?!1:n?Wy(t,a):!0,Zy=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?wn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[sn.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},Qy=(e,n)=>N(e).isSame(N(n))||N(e).isBefore(N(n)),Xy=(e,n,r,t)=>Pt(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",eb=(e,n,r,t,a,s)=>({beregningAktivitetNavn:Zy(e,s,n),fom:e.fom,tom:e.tom,skalBrukes:Xy(e,r,t,a)}),nb=(e,n,r,t)=>{const a=Qy(r,t);return n.filter(s=>e.aktiviteterValues&&(e.aktiviteterValues[Ke(s)].skalBrukes==="false"||e.aktiviteterValues[Ke(s)].tom!=null)).map(s=>({oppdragsgiverOrg:s.arbeidsgiverIdent&&s.arbeidsgiverIdent.length===9?s.arbeidsgiverIdent:void 0,arbeidsforholdRef:s.arbeidsforholdId,fom:s.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[Ke(s)].tom!=null?e.aktiviteterValues[Ke(s)].tom:s.tom,opptjeningAktivitetType:s.arbeidsforholdType,arbeidsgiverIdentifikator:s.arbeidsgiverIdent,skalBrukes:a&&e.aktiviteterValues?e.aktiviteterValues[Ke(s)].skalBrukes==="true":!0}))},rb=(e,n,r,t,a,s)=>{const l={};return e&&e.forEach(o=>{l[Ke(o)]=eb(o,n,r,t,a,s)}),l},tb="_radios_4fctu_1",ab="_navnKol_4fctu_10",sb="_table_4fctu_15",wr={radios:tb,navnKol:ab,table:sb},ib=(e,n)=>N(e).isSame(N(n))||N(e).isBefore(N(n)),ao=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return a?wn(a,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[sn.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},lb=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:u,arbeidsgiverOpplysningerPerId:k,fieldId:v})=>{const f=z(),b=ib(o,l),y=j=>{const A=ao(r,k,t),h=`${Hl(r.fom)} til ${Hl(r.tom||"")}`;return`${j?"Benytt":"Ikke benytt"} ${A} ${h}`};return g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{className:wr.navnKol,children:g.jsx(I,{size:"small",children:ao(r,k,t)})}),g.jsxs(c.DataCell,{className:wr.rowalign,children:[!a&&g.jsx(I,{children:g.jsx(Ge,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),a&&g.jsxs("div",{children:[g.jsxs(I,{as:"span",size:"small",children:[g.jsx(be,{dateString:r.fom})," -"," "]}),g.jsx(Un,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${Ke(r)}.tom`,validate:[W,bn,ea(r.fom)],isReadOnly:e,size:"small"})]})]}),g.jsx(c.DataCell,{className:wr.radios,children:g.jsx(Te,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${Ke(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[W],isHorizontal:!0,isReadOnly:e||!Pt(r,a,s,b,u),radios:[{value:"true",label:y(!0)}],hideLegend:!0,hideRadioLabels:!0})}),g.jsx(c.DataCell,{className:wr.radios,children:g.jsx(Te,{name:`avklarAktiviteterForm.${v}.aktiviteterValues.${Ke(r)}.skalBrukes`,label:f.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[W],isHorizontal:!0,isReadOnly:e||!Pt(r,a,s,b,u),radios:[{value:"false",label:y(!1)}],hideLegend:!0,hideRadioLabels:!0})}),g.jsx(c.DataCell,{children:n&&e&&Pt(r,a,s,b,u)&&g.jsx(Cr,{})})]},Ke(r))},ob=(e,n,r)=>{const t=bn(r)?"":N(r).format(se);return e.some(a=>a.arbeidsforholdType&&a.arbeidsforholdType===er.VENTELØNN_VARTPENGER)?g.jsx(m,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},db=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],ub=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:u,arbeidsgiverOpplysningerPerId:k,fieldId:v})=>g.jsxs(g.Fragment,{children:[g.jsx(x,{size:"small",children:ob(r,a,l)}),g.jsxs(c,{size:"small",className:wr.table,children:[g.jsx(c.Header,{children:g.jsxs(c.Row,{children:[db().map(f=>g.jsx(c.HeaderCell,{scope:"col",children:g.jsx(x,{size:"small",as:"span",children:g.jsx(m,{id:f})})},f)),g.jsx(c.HeaderCell,{})]})}),g.jsx(c.Body,{children:r.map(f=>g.jsx(lb,{aktivitet:f,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:a,harAvklaringsbehov:s,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:u,arbeidsgiverOpplysningerPerId:k,fieldId:v},`${f.arbeidsgiverIdent}-${f.fom}-${f.tom}`))})]})]}),mi=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=Ke(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,gb=(e,n)=>{let r=0;for(;r<e.length&&N(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},so=(e,n,r)=>{const t=e.find(({tom:a})=>a===r);if(t===void 0){const a={tom:r,aktiviteter:[n]},s=gb(e,r);e.splice(s,0,a)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},mb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!N(t.tom).isValid()))},kb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],a=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!a)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:s})=>s).forEach(s=>{if(!s)throw new Error("Må ha aktivitet i form values her!");const l={...s},o=e.aktiviteterValues?e.aktiviteterValues[Ke(s)].tom:void 0;o&&o!==l.tom&&(l.tom=o),N(o).isSame(N(a).subtract(1,"days"))||N(o).isAfter(N(a).subtract(1,"days"))?so(t,l,a):so(t,l,N(o).add(1,"days").format("YYYY-MM-DD"))}),t},sl=(e,n,r)=>{const t=n&&!mb(n)?kb(n):e;return r?t:!n||mi(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},sm=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let a=0;a<t.length;a+=1){const s=e.aktiviteterValues?e.aktiviteterValues[Ke(t[a])]:void 0;if((s==null?void 0:s.skalBrukes)==="true")return n[r].tom}}},vb=e=>!e||bn(e)?"":N(e).format(se),nr=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:u})=>{const k=sl(t,r,a),v=sm(r,k);return g.jsxs(B,{gap:"4",children:[g.jsx(I,{size:"small",children:g.jsx(m,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:vb(v)}})}),k.map(f=>g.jsx(ub,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:f.aktiviteter||[],erOverstyrt:a,harAvklaringsbehov:s,kodeverkSamling:l,tomDatoForAktivitetGruppe:f.tom,valgtSkjæringstidspunkt:v,ingenAktiviterErBrukt:v===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:u},f.tom))]})};nr.harIngenAktiviteter=(e,n,r)=>{const t=sl(n,e,r);return mi(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!mi(t[1],e):!0};const pb=(e,n)=>N(e).isSame(N(n))||N(e).isBefore(N(n));nr.transformValues=(e,n,r)=>{const t=sl(n,e,r),a=sm(e,t);if(!a)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(s=>nb(e,s.aktiviteter||[],a,s.tom))};const fb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};nr.buildInitialValues=(e,n,r,t,a)=>{if(!e||e.length===0)return{};let s={};const l=fb(e);return e.forEach(o=>{s={...s,...rb(o.aktiviteter||[],n,r,t,pb(l,o.tom),a)}}),s};const yb="_avsnittOverskrift_h44z2_1",bb={avsnittOverskrift:yb},{AVKLAR_AKTIVITETER:Bt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:im}=ye,il="begrunnelseAvklareAktiviteter",lm="manuellOverstyringBeregningAktiviteter",jb=(e,n,r,t,a)=>{const s=ze(Bt,e),l=ze(im,e),o=am(e);let u;return n&&n.aktiviteterTomDatoMapping&&(u=nr.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,s,t)),{[lm]:l,periode:a.periode,erTilVurdering:a.vurderesIBehandlingen&&!a.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:u,...jr.buildInitialValues(o==null?void 0:o.begrunnelse,il)}},io=e=>{const n=e[lm],r=Yy(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:nr.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[il]}:null},cb=(e,n,r,t,a)=>{if(!(r.length<1)&&nr.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return a.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},hb=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s,submittable:l,fieldId:o,updateOverstyring:u,submitDisabled:k})=>{var v,f;const b=z(),{resetField:y,watch:j,getValues:A,formState:{isSubmitting:h,errors:T,dirtyFields:E}}=he(),q=Object.keys(E).length>0,S=ze(im,n),P=!!A(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[D,_]=R.useState(S||P),U=am(n),Y=!!((f=(v=T.avklarAktiviteterForm)==null?void 0:v[o])!=null&&f.begrunnelseAvklareAktiviteter),w=C=>{C?_(!D):!C&&D&&_(!1),y(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),y(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),u(o,C)},M=n.filter(C=>C.definisjon===ye.AVKLAR_AKTIVITETER||C.definisjon===ye.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(C=>Vy(C.status)).length===0,L=cb(j,o,e.aktiviteterTomDatoMapping||[],P,b),K=`vurderAktiviteterSkjema.${o}`,H=na(K,L);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:g.jsxs(B,{gap:"1",children:[g.jsxs(B,{gap:"6",children:[ze(Bt,n)&&!M&&g.jsxs(Ie,{size:"small",variant:"warning",children:[g.jsx(ie,{size:"xsmall",level:"3",children:g.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),g.jsxs(B,{gap:"2",children:[g.jsx(I,{size:"small",children:g.jsx(m,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"})}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]})]}),g.jsxs(F,{gap:"4",children:[g.jsx(x,{size:"small",className:bb.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:g.jsx(m,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||S)&&g.jsx(Gi,{onClick:()=>w(!0),erOverstyrt:D})]})]}),D&&g.jsx(x,{size:"small",children:g.jsx(m,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&g.jsxs(B,{gap:"4",children:[g.jsx(nr,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:M,erOverstyrt:D,kodeverkSamling:a,values:j(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:ze(Bt,n),arbeidsgiverOpplysningerPerId:s,fieldId:o}),H&&g.jsx(Yr,{children:H})]}),Cy(n,D)&&g.jsxs(B,{gap:"6",children:[g.jsx(jr,{name:`avklarAktiviteterForm.${o}.${il}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(U!=null&&U.begrunnelse)}),g.jsx(En,{ident:U==null?void 0:U.vurdertAv,date:U==null?void 0:U.vurdertTidspunkt}),(ze(Bt,n)||D)&&g.jsx(g.Fragment,{children:g.jsxs(F,{gap:"4",children:[g.jsx(qg,{text:b.formatMessage({id:D?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:zy(l,!0,Y),isDirty:q,isSubmitting:k,isReadOnly:t||M&&!q,hasErrors:Y}),!!E&&q&&g.jsx(ee,{variant:"secondary",loading:h,disabled:h,onClick:()=>w(!1),size:"small",children:g.jsx(m,{id:"AvklareAktiviteter.Avbryt"})})]})})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:om,AVKLAR_AKTIVITETER:dm}=ye,lo="manuellOverstyringBeregningAktiviteter",Ab=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},Ib=(e,n)=>!ze(dm,e)&&!ze(om,e)&&!n,Tb=e=>{const n=e[Ur],r=n.filter(s=>s[lo]).map(io).filter(s=>s),t=n.filter(s=>!s[lo]).map(io).filter(s=>s),a=[];if(r.length>0){const s=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,u)=>o===""?u:`${o} ${u}`,""),l={kode:om,begrunnelse:s,grunnlag:r};a.push(l)}if(t.length>0){const s=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,u)=>o===""?u:`${o} ${u}`,""),l={kode:dm,begrunnelse:s,grunnlag:t};a.push(l)}return a},Rb=(e,n,r,t)=>({[Ur]:e.map(a=>{var s;return jb(a.avklaringsbehov,(s=a.faktaOmBeregning)==null?void 0:s.avklarAktiviteter,n,r,Ab(t,a.vilkårsperiodeFom))})}),Eb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},Nb=({erOverstyrer:e,readOnly:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,submittable:a,submitCallback:s,beregningsgrunnlag:l,aktivtBeregningsgrunnlagIndeks:o,vilkår:u,setFormData:k,formData:v,setAvklarAktiviteterErEndret:f})=>{const b=$e({defaultValues:v||Rb(l,r,t,u)}),{formState:{dirtyFields:y,errors:j,isSubmitted:A},control:h,getValues:T,trigger:E,setValue:q}=b;R.useEffect(()=>{var w;(w=y.avklarAktiviteterForm)!=null&&w.some(M=>!!M)?f(!0):f(!1)},[y]),R.useEffect(()=>{var w;A&&(w=y.avklarAktiviteterForm)!=null&&w[o]&&E()},[o]);const S=l.flatMap(w=>w.avklaringsbehov),{fields:P}=Ze({name:Ur,control:h}),[D,_]=R.useState(!1),U=(w,M)=>{const L=T(`avklarAktiviteterForm.${w}`);q(`${Ur}.${w}`,{...L,manuellOverstyringBeregningAktiviteter:M},{shouldDirty:!0})};if(Ib(S,e))return null;const Y=w=>{Object.keys(j).length===0&&(_(!0),s(Tb(w)))};return g.jsx(Ue,{formMethods:b,onSubmit:w=>Y(w),setDataOnUnmount:k,children:P.map((w,M)=>o===M&&g.jsx(hb,{aktivtBeregningsgrunnlagIndeks:o,fieldId:M,avklarAktiviteter:Eb(l,M),avklaringsbehovListe:l[M].avklaringsbehov,erOverstyrer:e,readOnly:n,submittable:a,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,updateOverstyring:U,submitDisabled:D},w.id))})},Re=$.createContext(0),um=$.createContext(0),dn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:a}=he();return R.useEffect(()=>()=>a(e),[]),g.jsx(ve,{name:e,htmlSize:8,parse:Fe,readOnly:n,isEdited:r,validate:n?[]:[W,Qe(178956970)],label:t})};dn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(a=>a.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const qb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Or=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:a})=>{var s,l;const{getValues:o}=he(),u=$.useContext(Re),k=o(`vurderFaktaBeregningForm.${u}.arbeidstakerInntektValues`);if(!k)return null;const v=(s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent,f=qb(k,v),b=`vurderFaktaBeregningForm.${u}.arbeidstakerInntektValues.${f}.fastsattBelop`,y=v?(l=a[v])==null?void 0:l.navn:void 0;return g.jsx(dn,{name:b,readOnly:n,isAksjonspunktClosed:r,label:t||g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${y} (${v})`}})})};Or.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===te.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const a={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(a)}),n};const gm="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn",on=e=>e==="true",Sb="_navetLink_15r5n_1",mm={navetLink:Sb},Ce="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Pb}=ye,Jr=({readOnly:e,erOverstyrt:n})=>{const r=$.useContext(Re),t=z(),a=e||n;return g.jsxs(F,{gap:"2",wrap:!1,children:[g.jsx(Te,{label:g.jsx(m,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${Ce}`,isReadOnly:a,validate:a?[]:[W],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:on}),g.jsx("div",{children:g.jsx("a",{className:mm.navetLink,href:gm,target:"_blank",rel:"noopener noreferrer",children:g.jsx(m,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})};Jr.buildInitialValues=(e,n,r,t)=>r.includes(O.VURDER_BESTEBEREGNING)||r.includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(a=>a.definisjon===Pb)!==void 0||t?{[Ce]:!1}:{[Ce]:n.skalHaBesteberegning}:{}:{};const oo=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};Jr.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[Ce]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:s})=>s!==!0).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,lagtTilAvSaksbehandler:!!s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:oo(s.inntektskategori)}})),a=r.find(s=>s.nyAndel&&s.aktivitetStatus===te.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:a?{fastsatteVerdier:{fastsattBeløp:a.fastsattBelop,inntektskategori:oo(a.inntektskategori)}}:void 0}}};const Bb=e=>(n,r)=>{var t;const a=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(a.map(o=>o).includes(O.VURDER_BESTEBEREGNING)||a.map(o=>o).includes(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const s=Jr.transformValues(n,e,r),l=[O.VURDER_BESTEBEREGNING];return(t=s.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&s.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(O.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...s}},Fb="_fadeinTabell_l1t64_1",xb={fadeinTabell:Fb},ur="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:wb,AVKLAR_AKTIVITETER:_b}=ye,Ob=(e,n)=>n.some(r=>r.definisjon===e),Db=(e,n)=>e&&!n.some(r=>r.definisjon===_b&&la(r.status)),ll=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:a,updateOverstyring:s,erOverstyrer:l,erOverstyrt:o})=>{const[u,k]=R.useState(o),v=$.useContext(Re),f=R.useMemo(()=>Db(l,a),[l,a]),b=()=>{k(!u),s(v,!u)};return g.jsx("div",{className:xb.fadeinTabell,children:r&&g.jsxs(B,{gap:"4",children:[g.jsxs(F,{gap:"4",children:[g.jsx(ie,{level:"3",size:"xsmall",children:g.jsx(m,{id:"InntektstabellPanel.RapporterteInntekter"})}),(f||u)&&g.jsx(Gi,{onClick:b,erOverstyrt:t||u||Ob(wb,a)})]}),n&&g.jsx(x,{size:"small",children:g.jsx(m,{id:n})}),e,u&&!t&&g.jsx(F,{children:g.jsx(ee,{size:"small",onClick:b,variant:"secondary",children:g.jsx(m,{id:"InntektstabellPanel.Avbryt"})})})]})})};ll.buildInitialValues=e=>({[ur]:e});const km=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(a=>a.aktivitetStatus===te.ARBEIDSTAKER).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(a=>a.arbeidsforhold&&a.arbeidsforhold.arbeidsforholdId).length>0:!1},gr="lonnsendringField",Wr=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[W],parse:on})},Vb=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};Wr.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(a=>a.aktivitetStatus===te.ARBEIDSTAKER);return!t||t.length<1||(n[gr]=Vb(t)),n};const Mb=(e,n,r)=>!!r[gr]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;Wr.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(O.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[O.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[gr]}}:{};const yn="NyoppstartetFLField",Zr=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${yn}`,validate:[W],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on})};Zr.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===te.FRILANSER);return t.length>0&&(r[yn]=(n=t[0])==null?void 0:n.erNyoppstartet),r};Zr.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}};const a=n.find(l=>l.aktivitetStatus===te.FRILANSER);if(!a)return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}};if(a.andelsnr&&t.includes(a.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}};a.andelsnr&&t.push(a.andelsnr);const s={fastsettMaanedsinntektFL:{maanedsinntekt:a.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_NYOPPSTARTET_FL,O.FASTSETT_MAANEDSINNTEKT_FL],...s,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[yn]}}};var uo={},qr,go;function Xe(){if(go)return qr;go=1;var e=function(n){return n&&n.Math===Math&&n};return qr=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof Ql=="object"&&Ql)||e(typeof qr=="object"&&qr)||function(){return this}()||Function("return this")(),qr}var Ea={},mo,ko;function Nn(){return ko||(ko=1,mo=function(e){try{return!!e()}catch{return!0}}),mo}var Na,vo;function On(){if(vo)return Na;vo=1;var e=Nn();return Na=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Na}var qa,po;function ol(){if(po)return qa;po=1;var e=Nn();return qa=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),qa}var Sa,fo;function dl(){if(fo)return Sa;fo=1;var e=ol(),n=Function.prototype.call;return Sa=e?n.bind(n):function(){return n.apply(n,arguments)},Sa}var Pa={},yo;function Gb(){if(yo)return Pa;yo=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Pa.f=r?function(t){var a=n(this,t);return!!a&&a.enumerable}:e,Pa}var bo,jo;function vm(){return jo||(jo=1,bo=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),bo}var Ba,co;function en(){if(co)return Ba;co=1;var e=ol(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return Ba=e?t:function(a){return function(){return r.apply(a,arguments)}},Ba}var Fa,ho;function da(){if(ho)return Fa;ho=1;var e=en(),n=e({}.toString),r=e("".slice);return Fa=function(t){return r(n(t),8,-1)},Fa}var xa,Ao;function Lb(){if(Ao)return xa;Ao=1;var e=en(),n=Nn(),r=da(),t=Object,a=e("".split);return xa=n(function(){return!t("z").propertyIsEnumerable(0)})?function(s){return r(s)==="String"?a(s,""):t(s)}:t,xa}var Io,To;function pm(){return To||(To=1,Io=function(e){return e==null}),Io}var wa,Ro;function fm(){if(Ro)return wa;Ro=1;var e=pm(),n=TypeError;return wa=function(r){if(e(r))throw new n("Can't call method on "+r);return r},wa}var _a,Eo;function ua(){if(Eo)return _a;Eo=1;var e=Lb(),n=fm();return _a=function(r){return e(n(r))},_a}var Oa,No;function nn(){if(No)return Oa;No=1;var e=typeof document=="object"&&document.all;return Oa=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},Oa}var Da,qo;function cr(){if(qo)return Da;qo=1;var e=nn();return Da=function(n){return typeof n=="object"?n!==null:e(n)},Da}var Va,So;function ga(){if(So)return Va;So=1;var e=Xe(),n=nn(),r=function(t){return n(t)?t:void 0};return Va=function(t,a){return arguments.length<2?r(e[t]):e[t]&&e[t][a]},Va}var Ma,Po;function Kb(){if(Po)return Ma;Po=1;var e=en();return Ma=e({}.isPrototypeOf),Ma}var Ga,Bo;function $b(){if(Bo)return Ga;Bo=1;var e=Xe(),n=e.navigator,r=n&&n.userAgent;return Ga=r?String(r):"",Ga}var La,Fo;function Ub(){if(Fo)return La;Fo=1;var e=Xe(),n=$b(),r=e.process,t=e.Deno,a=r&&r.versions||t&&t.version,s=a&&a.v8,l,o;return s&&(l=s.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),La=o,La}var Ka,xo;function ym(){if(xo)return Ka;xo=1;var e=Ub(),n=Nn(),r=Xe(),t=r.String;return Ka=!!Object.getOwnPropertySymbols&&!n(function(){var a=Symbol("symbol detection");return!t(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&e&&e<41}),Ka}var $a,wo;function bm(){if(wo)return $a;wo=1;var e=ym();return $a=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",$a}var Ua,_o;function jm(){if(_o)return Ua;_o=1;var e=ga(),n=nn(),r=Kb(),t=bm(),a=Object;return Ua=t?function(s){return typeof s=="symbol"}:function(s){var l=e("Symbol");return n(l)&&r(l.prototype,a(s))},Ua}var Ha,Oo;function Hb(){if(Oo)return Ha;Oo=1;var e=String;return Ha=function(n){try{return e(n)}catch{return"Object"}},Ha}var Ya,Do;function ul(){if(Do)return Ya;Do=1;var e=nn(),n=Hb(),r=TypeError;return Ya=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},Ya}var Ca,Vo;function Yb(){if(Vo)return Ca;Vo=1;var e=ul(),n=pm();return Ca=function(r,t){var a=r[t];return n(a)?void 0:e(a)},Ca}var za,Mo;function Cb(){if(Mo)return za;Mo=1;var e=dl(),n=nn(),r=cr(),t=TypeError;return za=function(a,s){var l,o;if(s==="string"&&n(l=a.toString)&&!r(o=e(l,a))||n(l=a.valueOf)&&!r(o=e(l,a))||s!=="string"&&n(l=a.toString)&&!r(o=e(l,a)))return o;throw new t("Can't convert object to primitive value")},za}var Ja={exports:{}},Go,Lo;function zb(){return Lo||(Lo=1,Go=!1),Go}var Wa,Ko;function gl(){if(Ko)return Wa;Ko=1;var e=Xe(),n=Object.defineProperty;return Wa=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},Wa}var $o;function ml(){if($o)return Ja.exports;$o=1;var e=zb(),n=Xe(),r=gl(),t="__core-js_shared__",a=Ja.exports=n[t]||r(t,{});return(a.versions||(a.versions=[])).push({version:"3.41.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),Ja.exports}var Za,Uo;function cm(){if(Uo)return Za;Uo=1;var e=ml();return Za=function(n,r){return e[n]||(e[n]=r||{})},Za}var Qa,Ho;function hm(){if(Ho)return Qa;Ho=1;var e=fm(),n=Object;return Qa=function(r){return n(e(r))},Qa}var Xa,Yo;function rr(){if(Yo)return Xa;Yo=1;var e=en(),n=hm(),r=e({}.hasOwnProperty);return Xa=Object.hasOwn||function(t,a){return r(n(t),a)},Xa}var es,Co;function Am(){if(Co)return es;Co=1;var e=en(),n=0,r=Math.random(),t=e(1 .toString);return es=function(a){return"Symbol("+(a===void 0?"":a)+")_"+t(++n+r,36)},es}var ns,zo;function Qr(){if(zo)return ns;zo=1;var e=Xe(),n=cm(),r=rr(),t=Am(),a=ym(),s=bm(),l=e.Symbol,o=n("wks"),u=s?l.for||l:l&&l.withoutSetter||t;return ns=function(k){return r(o,k)||(o[k]=a&&r(l,k)?l[k]:u("Symbol."+k)),o[k]},ns}var rs,Jo;function Jb(){if(Jo)return rs;Jo=1;var e=dl(),n=cr(),r=jm(),t=Yb(),a=Cb(),s=Qr(),l=TypeError,o=s("toPrimitive");return rs=function(u,k){if(!n(u)||r(u))return u;var v=t(u,o),f;if(v){if(k===void 0&&(k="default"),f=e(v,u,k),!n(f)||r(f))return f;throw new l("Can't convert object to primitive value")}return k===void 0&&(k="number"),a(u,k)},rs}var ts,Wo;function Im(){if(Wo)return ts;Wo=1;var e=Jb(),n=jm();return ts=function(r){var t=e(r,"string");return n(t)?t:t+""},ts}var as,Zo;function Tm(){if(Zo)return as;Zo=1;var e=Xe(),n=cr(),r=e.document,t=n(r)&&n(r.createElement);return as=function(a){return t?r.createElement(a):{}},as}var ss,Qo;function Rm(){if(Qo)return ss;Qo=1;var e=On(),n=Nn(),r=Tm();return ss=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),ss}var Xo;function Em(){if(Xo)return Ea;Xo=1;var e=On(),n=dl(),r=Gb(),t=vm(),a=ua(),s=Im(),l=rr(),o=Rm(),u=Object.getOwnPropertyDescriptor;return Ea.f=e?u:function(k,v){if(k=a(k),v=s(v),o)try{return u(k,v)}catch{}if(l(k,v))return t(!n(r.f,k,v),k[v])},Ea}var is={},ls,ed;function Nm(){if(ed)return ls;ed=1;var e=On(),n=Nn();return ls=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),ls}var os,nd;function ma(){if(nd)return os;nd=1;var e=cr(),n=String,r=TypeError;return os=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},os}var rd;function Xr(){if(rd)return is;rd=1;var e=On(),n=Rm(),r=Nm(),t=ma(),a=Im(),s=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u="enumerable",k="configurable",v="writable";return is.f=e?r?function(f,b,y){if(t(f),b=a(b),t(y),typeof f=="function"&&b==="prototype"&&"value"in y&&v in y&&!y[v]){var j=o(f,b);j&&j[v]&&(f[b]=y.value,y={configurable:k in y?y[k]:j[k],enumerable:u in y?y[u]:j[u],writable:!1})}return l(f,b,y)}:l:function(f,b,y){if(t(f),b=a(b),t(y),n)try{return l(f,b,y)}catch{}if("get"in y||"set"in y)throw new s("Accessors not supported");return"value"in y&&(f[b]=y.value),f},is}var ds,td;function qm(){if(td)return ds;td=1;var e=On(),n=Xr(),r=vm();return ds=e?function(t,a,s){return n.f(t,a,r(1,s))}:function(t,a,s){return t[a]=s,t},ds}var us={exports:{}},gs,ad;function Wb(){if(ad)return gs;ad=1;var e=On(),n=rr(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,a=n(r,"name"),s=a&&(function(){}).name==="something",l=a&&(!e||e&&t(r,"name").configurable);return gs={EXISTS:a,PROPER:s,CONFIGURABLE:l},gs}var ms,sd;function Sm(){if(sd)return ms;sd=1;var e=en(),n=nn(),r=ml(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(a){return t(a)}),ms=r.inspectSource,ms}var ks,id;function Zb(){if(id)return ks;id=1;var e=Xe(),n=nn(),r=e.WeakMap;return ks=n(r)&&/native code/.test(String(r)),ks}var vs,ld;function Pm(){if(ld)return vs;ld=1;var e=cm(),n=Am(),r=e("keys");return vs=function(t){return r[t]||(r[t]=n(t))},vs}var od,dd;function kl(){return dd||(dd=1,od={}),od}var ps,ud;function Qb(){if(ud)return ps;ud=1;var e=Zb(),n=Xe(),r=cr(),t=qm(),a=rr(),s=ml(),l=Pm(),o=kl(),u="Object already initialized",k=n.TypeError,v=n.WeakMap,f,b,y,j=function(E){return y(E)?b(E):f(E,{})},A=function(E){return function(q){var S;if(!r(q)||(S=b(q)).type!==E)throw new k("Incompatible receiver, "+E+" required");return S}};if(e||s.state){var h=s.state||(s.state=new v);h.get=h.get,h.has=h.has,h.set=h.set,f=function(E,q){if(h.has(E))throw new k(u);return q.facade=E,h.set(E,q),q},b=function(E){return h.get(E)||{}},y=function(E){return h.has(E)}}else{var T=l("state");o[T]=!0,f=function(E,q){if(a(E,T))throw new k(u);return q.facade=E,t(E,T,q),q},b=function(E){return a(E,T)?E[T]:{}},y=function(E){return a(E,T)}}return ps={set:f,get:b,has:y,enforce:j,getterFor:A},ps}var gd;function Xb(){if(gd)return us.exports;gd=1;var e=en(),n=Nn(),r=nn(),t=rr(),a=On(),s=Wb().CONFIGURABLE,l=Sm(),o=Qb(),u=o.enforce,k=o.get,v=String,f=Object.defineProperty,b=e("".slice),y=e("".replace),j=e([].join),A=a&&!n(function(){return f(function(){},"length",{value:8}).length!==8}),h=String(String).split("String"),T=us.exports=function(E,q,S){b(v(q),0,7)==="Symbol("&&(q="["+y(v(q),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),S&&S.getter&&(q="get "+q),S&&S.setter&&(q="set "+q),(!t(E,"name")||s&&E.name!==q)&&(a?f(E,"name",{value:q,configurable:!0}):E.name=q),A&&S&&t(S,"arity")&&E.length!==S.arity&&f(E,"length",{value:S.arity});try{S&&t(S,"constructor")&&S.constructor?a&&f(E,"prototype",{writable:!1}):E.prototype&&(E.prototype=void 0)}catch{}var P=u(E);return t(P,"source")||(P.source=j(h,typeof q=="string"?q:"")),E};return Function.prototype.toString=T(function(){return r(this)&&k(this).source||l(this)},"toString"),us.exports}var fs,md;function ej(){if(md)return fs;md=1;var e=nn(),n=Xr(),r=Xb(),t=gl();return fs=function(a,s,l,o){o||(o={});var u=o.enumerable,k=o.name!==void 0?o.name:s;if(e(l)&&r(l,k,o),o.global)u?a[s]=l:t(s,l);else{try{o.unsafe?a[s]&&(u=!0):delete a[s]}catch{}u?a[s]=l:n.f(a,s,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return a},fs}var ys={},bs,kd;function nj(){if(kd)return bs;kd=1;var e=Math.ceil,n=Math.floor;return bs=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},bs}var js,vd;function Bm(){if(vd)return js;vd=1;var e=nj();return js=function(n){var r=+n;return r!==r||r===0?0:e(r)},js}var cs,pd;function rj(){if(pd)return cs;pd=1;var e=Bm(),n=Math.max,r=Math.min;return cs=function(t,a){var s=e(t);return s<0?n(s+a,0):r(s,a)},cs}var hs,fd;function tj(){if(fd)return hs;fd=1;var e=Bm(),n=Math.min;return hs=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},hs}var As,yd;function vl(){if(yd)return As;yd=1;var e=tj();return As=function(n){return e(n.length)},As}var Is,bd;function aj(){if(bd)return Is;bd=1;var e=ua(),n=rj(),r=vl(),t=function(a){return function(s,l,o){var u=e(s),k=r(u);if(k===0)return!a&&-1;var v=n(o,k),f;if(a&&l!==l){for(;k>v;)if(f=u[v++],f!==f)return!0}else for(;k>v;v++)if((a||v in u)&&u[v]===l)return a||v||0;return!a&&-1}};return Is={includes:t(!0),indexOf:t(!1)},Is}var Ts,jd;function Fm(){if(jd)return Ts;jd=1;var e=en(),n=rr(),r=ua(),t=aj().indexOf,a=kl(),s=e([].push);return Ts=function(l,o){var u=r(l),k=0,v=[],f;for(f in u)!n(a,f)&&n(u,f)&&s(v,f);for(;o.length>k;)n(u,f=o[k++])&&(~t(v,f)||s(v,f));return v},Ts}var cd,hd;function pl(){return hd||(hd=1,cd=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),cd}var Ad;function sj(){if(Ad)return ys;Ad=1;var e=Fm(),n=pl(),r=n.concat("length","prototype");return ys.f=Object.getOwnPropertyNames||function(t){return e(t,r)},ys}var Id={},Td;function ij(){return Td||(Td=1,Id.f=Object.getOwnPropertySymbols),Id}var Rs,Rd;function lj(){if(Rd)return Rs;Rd=1;var e=ga(),n=en(),r=sj(),t=ij(),a=ma(),s=n([].concat);return Rs=e("Reflect","ownKeys")||function(l){var o=r.f(a(l)),u=t.f;return u?s(o,u(l)):o},Rs}var Es,Ed;function oj(){if(Ed)return Es;Ed=1;var e=rr(),n=lj(),r=Em(),t=Xr();return Es=function(a,s,l){for(var o=n(s),u=t.f,k=r.f,v=0;v<o.length;v++){var f=o[v];!e(a,f)&&!(l&&e(l,f))&&u(a,f,k(s,f))}},Es}var Ns,Nd;function dj(){if(Nd)return Ns;Nd=1;var e=Nn(),n=nn(),r=/#|\.prototype\./,t=function(u,k){var v=s[a(u)];return v===o?!0:v===l?!1:n(k)?e(k):!!k},a=t.normalize=function(u){return String(u).replace(r,".").toLowerCase()},s=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return Ns=t,Ns}var qs,qd;function uj(){if(qd)return qs;qd=1;var e=Xe(),n=Em().f,r=qm(),t=ej(),a=gl(),s=oj(),l=dj();return qs=function(o,u){var k=o.target,v=o.global,f=o.stat,b,y,j,A,h,T;if(v?y=e:f?y=e[k]||a(k,{}):y=e[k]&&e[k].prototype,y)for(j in u){if(h=u[j],o.dontCallGetSet?(T=n(y,j),A=T&&T.value):A=y[j],b=l(v?j:k+(f?".":"#")+j,o.forced),!b&&A!==void 0){if(typeof h==typeof A)continue;s(h,A)}(o.sham||A&&A.sham)&&r(h,"sham",!0),t(y,j,h,o)}},qs}var Ss,Sd;function xm(){if(Sd)return Ss;Sd=1;var e=da();return Ss=Array.isArray||function(n){return e(n)==="Array"},Ss}var Ps,Pd;function gj(){if(Pd)return Ps;Pd=1;var e=TypeError,n=9007199254740991;return Ps=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Ps}var Bs,Bd;function mj(){if(Bd)return Bs;Bd=1;var e=da(),n=en();return Bs=function(r){if(e(r)==="Function")return n(r)},Bs}var Fs,Fd;function kj(){if(Fd)return Fs;Fd=1;var e=mj(),n=ul(),r=ol(),t=e(e.bind);return Fs=function(a,s){return n(a),s===void 0?a:r?t(a,s):function(){return a.apply(s,arguments)}},Fs}var xs,xd;function vj(){if(xd)return xs;xd=1;var e=xm(),n=vl(),r=gj(),t=kj(),a=function(s,l,o,u,k,v,f,b){for(var y=k,j=0,A=f?t(f,b):!1,h,T;j<u;)j in o&&(h=A?A(o[j],j,l):o[j],v>0&&e(h)?(T=n(h),y=a(s,l,h,T,y,v-1)-1):(r(y+1),s[y]=h),y++),j++;return y};return xs=a,xs}var ws,wd;function pj(){if(wd)return ws;wd=1;var e=Qr(),n=e("toStringTag"),r={};return r[n]="z",ws=String(r)==="[object z]",ws}var _s,_d;function fj(){if(_d)return _s;_d=1;var e=pj(),n=nn(),r=da(),t=Qr(),a=t("toStringTag"),s=Object,l=r(function(){return arguments}())==="Arguments",o=function(u,k){try{return u[k]}catch{}};return _s=e?r:function(u){var k,v,f;return u===void 0?"Undefined":u===null?"Null":typeof(v=o(k=s(u),a))=="string"?v:l?r(k):(f=r(k))==="Object"&&n(k.callee)?"Arguments":f},_s}var Os,Od;function yj(){if(Od)return Os;Od=1;var e=en(),n=Nn(),r=nn(),t=fj(),a=ga(),s=Sm(),l=function(){},o=a("Reflect","construct"),u=/^\s*(?:class|function)\b/,k=e(u.exec),v=!u.test(l),f=function(y){if(!r(y))return!1;try{return o(l,[],y),!0}catch{return!1}},b=function(y){if(!r(y))return!1;switch(t(y)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!k(u,s(y))}catch{return!0}};return b.sham=!0,Os=!o||n(function(){var y;return f(f.call)||!f(Object)||!f(function(){y=!0})||y})?b:f,Os}var Ds,Dd;function bj(){if(Dd)return Ds;Dd=1;var e=xm(),n=yj(),r=cr(),t=Qr(),a=t("species"),s=Array;return Ds=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===s||e(o.prototype))?o=void 0:r(o)&&(o=o[a],o===null&&(o=void 0))),o===void 0?s:o},Ds}var Vs,Vd;function jj(){if(Vd)return Vs;Vd=1;var e=bj();return Vs=function(n,r){return new(e(n))(r===0?0:r)},Vs}var Md;function cj(){if(Md)return uo;Md=1;var e=uj(),n=vj(),r=ul(),t=hm(),a=vl(),s=jj();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),u=a(o),k;return r(l),k=s(o,0),k.length=n(k,o,o,u,0,1,l,arguments.length>1?arguments[1]:void 0),k}}),uo}var Gd={},Ms={},Gs,Ld;function hj(){if(Ld)return Gs;Ld=1;var e=Fm(),n=pl();return Gs=Object.keys||function(r){return e(r,n)},Gs}var Kd;function Aj(){if(Kd)return Ms;Kd=1;var e=On(),n=Nm(),r=Xr(),t=ma(),a=ua(),s=hj();return Ms.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var u=a(o),k=s(o),v=k.length,f=0,b;v>f;)r.f(l,b=k[f++],u[b]);return l},Ms}var Ls,$d;function Ij(){if($d)return Ls;$d=1;var e=ga();return Ls=e("document","documentElement"),Ls}var Ks,Ud;function Tj(){if(Ud)return Ks;Ud=1;var e=ma(),n=Aj(),r=pl(),t=kl(),a=Ij(),s=Tm(),l=Pm(),o=">",u="<",k="prototype",v="script",f=l("IE_PROTO"),b=function(){},y=function(E){return u+v+o+E+u+"/"+v+o},j=function(E){E.write(y("")),E.close();var q=E.parentWindow.Object;return E=null,q},A=function(){var E=s("iframe"),q="java"+v+":",S;return E.style.display="none",a.appendChild(E),E.src=String(q),S=E.contentWindow.document,S.open(),S.write(y("document.F=Object")),S.close(),S.F},h,T=function(){try{h=new ActiveXObject("htmlfile")}catch{}T=typeof document<"u"?document.domain&&h?j(h):A():j(h);for(var E=r.length;E--;)delete T[k][r[E]];return T()};return t[f]=!0,Ks=Object.create||function(E,q){var S;return E!==null?(b[k]=e(E),S=new b,b[k]=null,S[f]=E):S=T(),q===void 0?S:n.f(S,q)},Ks}var $s,Hd;function Rj(){if(Hd)return $s;Hd=1;var e=Qr(),n=Tj(),r=Xr().f,t=e("unscopables"),a=Array.prototype;return a[t]===void 0&&r(a,t,{configurable:!0,value:n(null)}),$s=function(s){a[t][s]=!0},$s}var Yd;function Ej(){if(Yd)return Gd;Yd=1;var e=Rj();return e("flatMap"),Gd}var Us,Cd;function Nj(){if(Cd)return Us;Cd=1;var e=Xe(),n=en();return Us=function(r,t){return n(e[r].prototype[t])},Us}var Hs,zd;function qj(){if(zd)return Hs;zd=1,cj(),Ej();var e=Nj();return Hs=e("Array","flatMap"),Hs}var Ys,Jd;function Sj(){if(Jd)return Ys;Jd=1;var e=qj();return Ys=e,Ys}var Cs,Wd;function Pj(){if(Wd)return Cs;Wd=1;var e=Sj();return Cs=e,Cs}var zs,Zd;function Bj(){if(Zd)return zs;Zd=1;var e=Pj();return zs=e,zs}var Qd,Xd;function Fj(){return Xd||(Xd=1,Qd=Bj()),Qd}Fj();const Bn="vurderEtterlønnSluttpakke",et=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsx(m,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${Bn}`,validate:[W],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on})})};et.buildInitialValues=(e,n)=>{var r,t,a;const s={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!la(n.status),o=e.beregningsgrunnlagPeriode.flatMap(u=>u.beregningsgrunnlagPrStatusOgAndel).filter(u=>(u==null?void 0:u.arbeidsforhold)&&(u==null?void 0:u.arbeidsforhold.arbeidsforholdType)===er.ETTERLONN_SLUTTPAKKE);return o.length>0&&(s[Bn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((a=o[0])==null?void 0:a.beregnetPrAar)>0:void 0),s};const xj=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===er.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};et.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(O.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}};const a=xj(r);if(!a)return{};const s=n.find(o=>o.andelsnr===a);if(!s)return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}};s.andelsnr&&t.push(s.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[O.VURDER_ETTERLONN_SLUTTPAKKE,O.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[Bn]}}};const wm="mottarYtelseField",wj="_frilans",tr=e=>wm+e.andelsnr,Cn=()=>wm+wj,_j=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[tr(r)]).find(r=>r)!==void 0,_m=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[Cn()]:void 0,Om=(e,n,r)=>{var t;if(!n)return{};const a={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[tr(l)]:void 0;l.andelsnr&&(a[l.andelsnr]=o)}),!r)return a;const s=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===te.FRILANSER);return s&&(a[s.andelsnr]=_m(e)),a},Dm="inntektFieldArray",Oj=e=>e.inntektskategori&&e.inntektskategori!==oa.UDEFINERT?e.inntektskategori:"",Dj=(e,n,r)=>{var t,a,s,l,o;const u=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return u?wn(u,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(a=e.arbeidsforhold)!=null&&a.arbeidsforholdType?(s=r[sn.OPPTJENING_AKTIVITET_TYPE].find(k=>{var v;return k.kode===((v=e.arbeidsforhold)==null?void 0:v.arbeidsforholdType)}))==null?void 0:s.navn:(l=r[sn.AKTIVITET_STATUS].find(k=>k.kode===e.aktivitetStatus))==null?void 0:l.navn},Vm=(e,n,r)=>({andel:Dj(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Oj(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),Vj=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Mj=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Gj=(e,n)=>{const r=Vj(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},ka=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.ARBEIDSTAKER,va=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.FRILANSER,Mm=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.DAGPENGER,Gm=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.SELVSTENDIG_NAERINGSDRIVENDE,Lm=e=>!!e.aktivitetStatus&&e.aktivitetStatus===te.MILITAER_ELLER_SIVIL,Lj=(e,n)=>n?va(e)&&!!n[yn]:!1,Kj=e=>!!e[Ce],$j=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&Mj(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[gr],Uj=(e,n,r)=>ka(e)&&$j(n,e,r),Hj=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&va(e),Yj=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&ka(e)&&Gj(e,n),Cj=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const a=Om(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!a[n.andelsnr]},zj=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===er.ETTERLONN_SLUTTPAKKE?!!n[Bn]:!1,Km=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===tl.KUNSTIG))!==void 0},Jj=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===O.FASTSETT_BG_KUN_YTELSE)!==void 0,Wj=(e,n,r)=>t=>!!(Kj(e)||Cj(e,t,n,r)||Uj(t,e,n)||Hj(t,n)||Yj(t,n)||Km(t,r)||km(t,r,t.arbeidsforholdId)||zj(t,e)),Zj=(e,n,r)=>t=>Wj(e,n,r)(t)?!0:Lj(t,e),jn=e=>!!e&&e[ur]===!0,Qj=e=>e&&e.some(n=>n.definisjon===ye.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),$m=e=>jn(e),eu=e=>e.erOverstyrtInntekt||Qj(e.avklaringsbehov),Um=(e,n,r)=>t=>Jj(n)||Zj(e,n,r)(t),Xj=(e,n,r)=>t=>jn(e)||Um(e,n,r)(t),mr=(e,n)=>r=>n.faktaOmBeregning?Xj(e,n.faktaOmBeregning,n)(r):!1,ec=e=>n=>Km(n,e),nc=e=>ec(e),ki=(e,n,r)=>({...Vm(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?V(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?V(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?V(e.refusjonskrav):""}),vi=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Gt=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},Dn=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},fl=e=>{var n;return((n=Dn(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Ln=(e,n)=>n.some(r=>r.definisjon===e),Hm=e=>{const n=e.filter(r=>r.definisjon===ye.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===ye.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!la(r.status))},rc=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,tc=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:a,aktivitetStatus:s}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(u=>u.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:a}}return zr[t]?{andelsinfo:t,inntektskategori:a}:{andelsinfo:t,inntektskategori:a}}return $r[s]?{andelsinfo:$r[s],inntektskategori:a}:{andelsinfo:t,inntektskategori:a,arbeidsforholdId:l}},ac=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),sc=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,Ym=(e,n,r)=>{const t=e.map(a=>n(a,e)).slice().sort((a,s)=>rc(a,s));for(let a=0;a<t.length-1;a+=1)if(sc(t[a],t[a+1]))return ac(r)},ic=(e,n)=>Ym(e,tc,n),lc=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),oc=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:lc(n),dc="_row_1hw01_1",uc="_slettIkon_1hw01_10",gc="_rightAlign_1hw01_13",mc="_addCircleIcon_1hw01_41",kc="_storBredde_1hw01_47",vc="_mediumBredde_1hw01_50",Pn={row:dc,slettIkon:uc,rightAlign:gc,addCircleIcon:mc,storBredde:kc,mediumBredde:vc},pc=(e,n)=>{var r;return{andel:(r=n[sn.AKTIVITET_STATUS].find(t=>t.kode===e.filter(a=>a===te.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},fc=e=>e.map(n=>g.jsx("option",{value:n.kode,children:n.navn},n.kode)),yc=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?ge(r.fastsattBelop):0}),n>0?V(n):""};function bc(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const jc=(e,n,r,t,a,s,l)=>e.map((o,u)=>g.jsxs(c.Row,{className:Pn.row,children:[g.jsx(c.DataCell,{children:g.jsx(I,{size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),g.jsx(c.DataCell,{align:"right",className:Pn.rightAlign,children:g.jsx(ve,{name:`${s}.${u}.fastsattBelop`,className:Pn.mediumBredde,parse:Fe,readOnly:r,isEdited:n,validate:r?[]:[W,Qe(178956970)],label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${u+1}`}),hideLabel:!0,size:"small"})}),g.jsx(c.DataCell,{align:"right",className:Pn.rightAlign,children:g.jsx(ra,{label:a.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${u+1}`}),name:`${s}.${u}.inntektskategori`,className:Pn.storBredde,selectValues:fc(t),readOnly:r,validate:r?[]:[W],hideLabel:!0,size:"small"})}),g.jsx(c.DataCell,{align:"right",className:Pn.rightAlign,children:bc(u,e,r)&&g.jsx(ee,{icon:g.jsx($n,{"aria-hidden":!0,className:Pn.slettIkon}),onClick:()=>l(u),type:"button",variant:"tertiary"})})]},o.id)),cc=e=>g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{children:g.jsx(x,{as:"p",size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),g.jsx(c.DataCell,{align:"right",children:g.jsx(oe,{children:e})}),g.jsx(c.DataCell,{}),g.jsx(c.DataCell,{})]},"bruttoBGSummaryRow"),hc=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Ac=e=>e[sn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Ic=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},Tc=(e,n)=>{const r=e?Ym(e,Ic,n):void 0;if(r)return r},Cm=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var a;const s=z(),{control:l}=he(),o=$.useContext(Re),u=`${un}.${o}.${e}`,{fields:k,append:v,remove:f}=Ze({control:l,name:u}),b=(a=t[sn.AKTIVITET_STATUS])==null?void 0:a.map(S=>S.kode),y=Ac(t),j=_r({name:u,control:l}),A=j?yc(j):"0",h=jc(k,r,n,y,s,u,f);h.push(cc(A));const T=Tc(j,s),E=`${u}.skjemagruppe`,q=na(E,T);return g.jsxs(B,{gap:"2",children:[g.jsxs(c,{size:"small",children:[g.jsx(c.Header,{children:g.jsxs(c.Row,{children:[hc().map(S=>{const P=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(S);return g.jsx(c.HeaderCell,{scope:"col",align:P?"right":"left",children:g.jsx(x,{size:"small",as:"span",children:g.jsx(m,{id:S})})},S)}),g.jsx(c.HeaderCell,{})]})}),g.jsx(c.Body,{children:h})]}),!n&&g.jsx(F,{children:g.jsx(ee,{icon:g.jsx($i,{"aria-hidden":!0,className:Pn.addCircleIcon}),onClick:()=>v(pc(b,t)),type:"button",variant:"tertiary",size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),q&&g.jsx(Yr,{children:q})]})},Lt="besteberegningField",nt=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{getValues:s}=he(),l=$.useContext(Re),o=s(`${un}.${l}`),u=Lt in o?o[Lt]:void 0,k=z();return g.jsxs("div",{children:[g.jsx(Te,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:g.jsx(m,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[W],parse:on,isHorizontal:!0}),u!=null&&g.jsx("div",{style:{marginTop:"10px"},children:g.jsx(Ag,{alignOffset:u?0:60,children:g.jsxs(B,{gap:"4",children:[g.jsxs(F,{justify:"space-between",children:[g.jsx(x,{size:"small",children:g.jsx(m,{id:"KunYtelsePanel.OverskriftBesteberegning"})}),u&&g.jsx("a",{className:mm.navetLink,href:gm,target:"_blank",rel:"noopener noreferrer",children:g.jsx(m,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})]}),t&&g.jsx(Cm,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:a})]})})})]})};nt.buildInitialValues=e=>({[Lt]:e.erBesteberegning});nt.transformValues=e=>!!e[Lt];const Rc=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>g.jsxs(B,{gap:"4",children:[g.jsx(x,{size:"medium",children:g.jsx(m,{id:"KunYtelsePanel.RapporterteInntekter"})}),g.jsx(Cm,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),Kt="brukersAndelBG",rt=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:a})=>{const{kunYtelse:s}=n,l=s==null?void 0:s.fodendeKvinneMedDP;return g.jsxs("div",{children:[l&&g.jsx(nt,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:Kt,skalViseInntektstabell:t,kodeverkSamling:a}),!l&&t&&g.jsx(Rc,{readOnly:e,brukersAndelFieldArrayName:Kt,isAksjonspunktClosed:r,kodeverkSamling:a})]})};rt.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const a=e.andeler.map(l=>{const o=n.find(k=>k.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const u=l.fastsattBelopPrMnd!==null?V(l.fastsattBelopPrMnd):"";return{...Vm(o,r,t),fastsattBelop:u??""}}),s={[Kt]:a};return e.fodendeKvinneMedDP?{...nt.buildInitialValues(e),...s}:s};rt.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[Kt].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:ge(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?nt.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:$t,VURDER_BESTEBEREGNING:Ec}=O,Nc=(e,n,r,t,a,s,l)=>{n.includes($t)&&e.push(g.jsxs(B,{gap:"4",children:[g.jsx(rt,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:a,kodeverkSamling:s}),l()]},"FASTSETT_BG_KUN_YTELSE"))},qc=(e,n,r)=>{if(r.includes($t)&&n){const t=rt.transformValues(e,n),a=[$t];return n!=null&&n.fodendeKvinneMedDP&&a.push(Ec),{faktaOmBeregningTilfeller:a,...t}}return{}},Sc=(e,n,r,t,a)=>n&&n.includes($t)?rt.buildInitialValues(e,r,t,a):{},yl="erSNNyIArbeidslivet",tt=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${yl}`,validate:[W],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:on})})};tt.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(a=>a.beregningsgrunnlagPrStatusOgAndel).flat().filter(a=>(a==null?void 0:a.aktivitetStatus)===te.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[yl]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};tt.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[yl]}});const Pc="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",bl=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",nu=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return wn(r,e.eksternArbeidsforholdId)},Tt=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},at=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,a=$.useContext(Re),s=z();return!t||t.length===0?null:g.jsx(B,{gap:"6",children:t.map(l=>g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:Pc,values:{navn:nu(Tt(l.arbeidsforhold),r),fom:N(Tt(l.arbeidsforhold).startdato).format(se),tom:N(Tt(l.arbeidsforhold).opphoersdato).format(se)}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsx(m,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${a}.tidsbegrensetValues.${bl(l)}`,isReadOnly:e,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[W],parse:on})},`fastsettTidsbegrensedeForhold_${nu(Tt(l.arbeidsforhold),r)}`))})};at.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[bl(r)]=r.erTidsbegrensetArbeidsforhold)}),n};at.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const a=bl(t),s=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[a];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:s,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const jl="vurderMilitær",st=({readOnly:e})=>{const n=$.useContext(Re),r=z();return g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${jl}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[W],parse:on})})};st.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[jl]=e.vurderMilitaer.harMilitaer),n};st.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[jl]}});const Bc=[O.VURDER_NYOPPSTARTET_FL,O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],Fc=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",xc=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let s;return a?s=wn(a,e.eksternArbeidsforholdId):s=e.arbeidsforholdType?(t=n[sn.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",g.jsx(m,{id:Fc(),values:{arbeid:s}})},wc=(e,n,r,t,a,s)=>g.jsx("div",{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[e.arbeidsforhold&&xc(e.arbeidsforhold,r,t),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${a}.vurderMottarYtelseValues.${tr(e)}`,isReadOnly:n,radios:[{value:"true",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:s.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on,validate:n?[]:[W]})}),_c=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",Oc=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",Dc=e=>e.some(n=>Bc.includes(n))?_c():Oc(),pi=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),it=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a})=>{const s=$.useContext(Re),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,u=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],k=z();return g.jsxs(g.Fragment,{children:[o&&!pi(r)&&g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:Dc(r)}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${Cn()}`,isReadOnly:e,radios:[{value:"true",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:k.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:on,validate:e?[]:[W]}),g.jsx(B,{gap:"6",children:u.map(v=>g.jsx($.Fragment,{children:wc(v,e,t,a,s,k)},tr(v)))})]})},Vc=(e,n,r,t,a,s)=>{var l,o;if(n===null)return{};if(_j(e,r.vurderMottarYtelse)){const u=[],k=Om(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(v=>{var f;if(v.andelsnr&&k[v.andelsnr]&&!a.includes(v.andelsnr)){const b=(f=n.find(y=>y.andelsnr===v.andelsnr))==null?void 0:f.fastsattBelop;(b||b===0)&&(u.push({andelsnr:v.andelsnr,fastsattBeløp:ge(b)}),a.push(v.andelsnr))}}),u.length>0?(s.push(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:u}}):{}}return{}},Mc=(e,n,r,t,a)=>{var s;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[Cn()]){const l=(s=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:s.find(o=>o.aktivitetStatus===te.FRILANSER);if(l&&!t.includes(l.andelsnr)&&_m(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),a.push(O.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:ge(o.fastsattBelop)}}}return{}}return{}},Gc=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},Lc=(e,n,r)=>{var t;const a=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(O.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[Cn()],arbeidstakerUtenIMMottarYtelse:a.map(s=>({andelsnr:Gc(s.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[tr(s)]}))}}};it.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||pi(n))&&(r[Cn()]=pi(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(a=>{r[tr(a)]=a.mottarYtelse}),r};it.transformValues=(e,n,r,t,a)=>{const s=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(O.VURDER_MOTTAR_YTELSE)?{...Lc(e,r,s),...Vc(e,n,r,t,a,s),...Mc(e,n,t,a,s),faktaOmBeregningTilfeller:s}:{}};const Kc="_aksjonspunktBoks_tufis_1",$c={aksjonspunktBoks:Kc},Uc=({children:e})=>g.jsx("div",{className:$c.aksjonspunktBoks,children:e}),Hc="_slettIkon_1sqjy_1",Yc="_rightAlignInput_1sqjy_7",Cc="_readOnlyContainer_1sqjy_36",zc="_readOnlyContent_1sqjy_39",Jc="_storBredde_1sqjy_44",Wc="_mediumBredde_1sqjy_47",Zc="_litenBredde_1sqjy_50",Qc="_inntekt_1sqjy_53",Xc="_inntektNew_1sqjy_57",eh="_inntektOld_1sqjy_61",nh="_inntektOldStrikethrough_1sqjy_64",rh="_saksbehandlerIcon_1sqjy_72",_e={slettIkon:Hc,rightAlignInput:Yc,readOnlyContainer:Cc,readOnlyContent:zc,storBredde:Jc,mediumBredde:Wc,litenBredde:Zc,inntekt:Qc,inntektNew:Xc,inntektOld:eh,inntektOldStrikethrough:nh,saksbehandlerIcon:rh},th=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},ah=e=>e.map(n=>g.jsx("option",{value:n.kode,children:n.navn},n.kode)),sh=e=>e[sn.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),ih=()=>g.jsx(Yr,{size:"small",children:"Må fastsettes"}),lh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:a,removeAndel:s,beregningsgrunnlag:l,kodeverkSamling:o,rowName:u,skalFastsetteInntektForAndel:k})=>{var v,f,b,y,j,A,h,T;const E=z(),{getValues:q}=he(),S=$.useContext(Re),P=q(`vurderFaktaBeregningForm.${S}`),D=va(e),_=Mm(e),U=Gm(e),Y=Lm(e),w=ka(e),M=mr(P,l)(e),L=D&&M&&((v=P==null?void 0:P.frilansInntektValues)==null?void 0:v.fastsattBelop),K=w&&M&&e.arbeidsgiverId&&!!Gt(P==null?void 0:P.arbeidstakerInntektValues,e.arbeidsgiverId),H=_&&M&&((f=P==null?void 0:P.dagpengerInntektValues)==null?void 0:f.fastsattBelop),C=U&&M&&((b=P==null?void 0:P.selvstendigNæringsdrivendeInntektValues)==null?void 0:b.fastsattBelop),le=Y&&M&&((y=P==null?void 0:P.militærEllerSivilInntektValues)==null?void 0:y.fastsattBelop),je=D&&M&&!((j=P==null?void 0:P.frilansInntektValues)!=null&&j.fastsattBelop)||w&&M&&e.arbeidsgiverId&&!Gt(P==null?void 0:P.arbeidstakerInntektValues,e.arbeidsgiverId)||_&&M&&!((A=P==null?void 0:P.dagpengerInntektValues)!=null&&A.fastsattBelop)||U&&M&&!((h=P==null?void 0:P.selvstendigNæringsdrivendeInntektValues)!=null&&h.fastsattBelop)||Y&&M&&!((T=P==null?void 0:P.militærEllerSivilInntektValues)!=null&&T.fastsattBelop),Pe=L||K||H||C||le,He=jn(P),Ye=nc(l)(e),J=sh(o),Z=e.arbeidsperiodeFom||e.arbeidsperiodeTom,de=()=>K&&P.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${S}.arbeidstakerInntektValues.${vi(P.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:L?`vurderFaktaBeregningForm.${S}.frilansInntektValues.fastsattBelop`:H?`vurderFaktaBeregningForm.${S}.dagpengerInntektValues.fastsattBelop`:C?`vurderFaktaBeregningForm.${S}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:le?`vurderFaktaBeregningForm.${S}.militærEllerSivilInntektValues.fastsattBelop`:"";return g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{children:g.jsx(ve,{size:"small",name:`${u}.andel`,className:_e.storBredde,readOnly:!0})}),g.jsx(c.DataCell,{children:n&&Z&&e.arbeidsperiodeFom&&g.jsx(dp,{value:g.jsx(Ge,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!He&&g.jsx(c.DataCell,{align:"right",children:g.jsxs("div",{className:_e.inntekt,children:[g.jsx("div",{className:Pe?_e.inntektOldStrikethrough:_e.inntektOld,children:je?ih():g.jsx(ve,{size:"small",name:`${u}.belopReadOnly`,className:_e.mediumBredde,parse:Fe,readOnly:!0})}),Pe&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:_e.inntektNew,children:g.jsx(ve,{size:"small",name:de(),className:_e.mediumBredde,parse:Fe,readOnly:!0})}),g.jsx(np,{title:"Endret av saksbehandler",className:_e.saksbehandlerIcon})]})]})}),He&&g.jsx(c.DataCell,{align:"right",className:_e.rightAlignInput,children:g.jsx(ve,{size:"small",label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${u}.fastsattBelop`,parse:Fe,className:_e.mediumBredde,validate:k(e)?[W,Qe(178956970)]:[],hideLabel:!0})}),r&&g.jsx(c.DataCell,{align:"right",children:g.jsx(ve,{size:"small",name:`${u}.refusjonskrav`,className:_e.litenBredde,readOnly:!0,parse:Fe})}),g.jsx(c.DataCell,{align:"right",children:g.jsx(ra,{label:E.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${u}.inntektskategori`,className:_e.storBredde,selectValues:ah(J),validate:a?[]:[W],readOnly:a||!Ye,size:"small",hideLabel:!0})}),t&&g.jsx(c.DataCell,{children:g.jsx(ee,{icon:g.jsx($n,{"aria-hidden":!0,className:_e.slettIkon}),onClick:()=>s(),type:"button",variant:"tertiary"})})]})},oh=(e,n,r)=>{let t=0;return e.forEach(a=>{var s,l,o,u,k,v;let f;if(mr(n,r)(a)){const b=va(a),y=ka(a),j=Mm(a),A=Gm(a),h=Lm(a);a.fastsattBelop&&jn(n)?f=a.fastsattBelop:b&&(s=n==null?void 0:n.frilansInntektValues)!=null&&s.fastsattBelop?f=n.frilansInntektValues.fastsattBelop:y&&a.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[vi(n.arbeidstakerInntektValues,a.arbeidsgiverId)])!=null&&o.fastsattBelop?f=n.arbeidstakerInntektValues[vi(n.arbeidstakerInntektValues,a.arbeidsgiverId)].fastsattBelop:j&&(u=n==null?void 0:n.dagpengerInntektValues)!=null&&u.fastsattBelop?f=n.dagpengerInntektValues.fastsattBelop:A&&(k=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&k.fastsattBelop?f=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:h&&(v=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&v.fastsattBelop?f=n.militærEllerSivilInntektValues.fastsattBelop:a.fastsattBelop&&!jn(n)?f=0:f=a.fastsattBelop}else f=a.belopReadOnly;t+=f?ge(f):0}),t>0?t:0},dh=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:a,getValues:s}=he(),l=$.useContext(Re),o=s(`vurderFaktaBeregningForm.${l}`),u=_r({control:a,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),k=u?oh(u,o,t):0;return g.jsxs(c.Row,{children:[g.jsx(c.DataCell,{children:g.jsx(x,{as:"p",size:"small",children:g.jsx(m,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&g.jsx(c.DataCell,{}),g.jsx(c.DataCell,{align:"right",children:g.jsx("div",{className:_e.readOnlyContainer,children:g.jsx(x,{as:"p","data-testid":"sum",className:r?_e.readOnlyContent:"",size:"small",children:V(k)})})}),n&&g.jsx(c.DataCell,{}),g.jsx(c.DataCell,{})]})},zm=(e,n)=>{var r;const t=(r=e.find(({kode:a})=>a===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},uh=e=>({andel:zm(e,te.DAGPENGER),aktivitetStatus:te.DAGPENGER,fastsattBelop:"",inntektskategori:oa.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),gh=e=>({andel:zm(e,te.MILITAER_ELLER_SIVIL),aktivitetStatus:te.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:oa.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),mh=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,fi=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},yi=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},kh=(e,n)=>()=>{n(e)},vh=(e,n,r)=>g.jsx(dh,{readOnly:n,skalVisePeriode:yi(e),skalViseRefusjon:fi(e),beregningsgrunnlag:r},"summaryRow"),ph=(e,n)=>{let r=-1;return e.forEach((t,a)=>{t.aktivitetStatus===n&&(r=a)}),r},Jm=(e,n,r,t,a,s,l)=>{const o=ph(e,n);if(o!==-1){const u=e[o];t(u)&&s(o)}o===-1&&r&&l({...a})},ru=e=>e===te.FRILANSER,tu=e=>e===te.ARBEIDSTAKER,au=e=>e===te.DAGPENGER,su=e=>e===te.SELVSTENDIG_NAERINGSDRIVENDE,iu=e=>e===te.MILITAER_ELLER_SIVIL,fh=(e,n,r,t,a,s)=>{Jm(e,te.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,uh(r),a,s)},yh=(e,n,r,t,a,s)=>{Jm(e,te.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,gh(r),a,s)},bh=(e,n)=>oc(e,n)??null,jh=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?ic(t,r)||(jn(e)?bh(t,r):null):void 0},lt=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var a,s;const{getValues:l,control:o,formState:u}=he(),{errors:k}=u,v=$.useContext(Re),f=`vurderFaktaBeregningForm.${v}.inntektFieldArray`,{fields:b,remove:y,append:j,update:A}=Ze({control:o,name:f}),h=_r({control:o,name:`vurderFaktaBeregningForm.${v}`}),T=_r({control:o,name:`vurderFaktaBeregningForm.${v}.vurderbesteberegningField`}),E=_r({control:o,name:`vurderFaktaBeregningForm.${v}.vurderMilitær`}),q=z(),S=R.useCallback(()=>mr(h,r),[h,r]);R.useEffect(()=>{const L=l(`vurderFaktaBeregningForm.${v}.inntektFieldArray`),K=t[sn.AKTIVITET_STATUS];L&&(yh(L,!!E,K,S,y,j),fh(L,!!T,K,n,y,j))},[T,E,n]);const P=(L,K)=>{A(L,{...b[L],kanRedigereInntekt:K})};R.useEffect(()=>{b.forEach((L,K)=>{const H=L.kanRedigereInntekt,C=mr(h,r)(L);!(!T&&!n&&L.lagtTilAvSaksbehandler)&&H!==C&&P(K,C)})},[h]);const D=(s=(a=k==null?void 0:k.vurderFaktaBeregningForm)==null?void 0:a[v])==null?void 0:s.inntektFieldArray,_=jh(h,D,q),U=`${f}.skjemagruppe`,Y=na(U,_??void 0),w=r.faktaOmBeregning;if(!w)return null;const M=b.map((L,K)=>g.jsx(lh,{field:L,skalVisePeriode:yi(b),skalViseRefusjon:fi(b),skalViseSletteknapp:mh(K,b,e),readOnly:e,removeAndel:kh(K,y),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${f}.${K}`,skalFastsetteInntektForAndel:Um(h,w,r)},L.id));return M.length===0?null:(M.push(vh(b,e,r)),g.jsxs(B,{gap:"2",children:[g.jsxs(c,{size:"small",children:[g.jsx(c.Header,{children:g.jsx(c.Row,{children:th(yi(b),fi(b)).map(L=>{const K=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(L);return g.jsx(c.HeaderCell,{scope:"col",align:K?"right":"left",children:g.jsx(x,{size:"small",as:"span",children:g.jsx(m,{id:L})})},L)})})}),g.jsx(c.Body,{children:M})]}),Y&&g.jsx(Yr,{children:Y})]}))};lt.transformValues=(e,n,r,t,a,s,l)=>{if(!e)return[];const o=u=>{const k=l&&u.fastsattBelop||ru(u.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||tu(u.aktivitetStatus)&&u.arbeidsgiverId&&Gt(r,u.arbeidsgiverId)||au(u.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||su(u.aktivitetStatus)&&(a==null?void 0:a.fastsattBelop)||iu(u.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||u.fastsattBelop;return{andelsnr:u.andelsnr,fastsattBelop:ge(k),inntektskategori:u.inntektskategori,nyAndel:u.nyAndel,lagtTilAvSaksbehandler:u.lagtTilAvSaksbehandler,aktivitetStatus:u.aktivitetStatus,arbeidsforholdId:u.arbeidsforholdId,arbeidsgiverId:u.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:u})=>u).filter(({fastsattBelop:u,aktivitetStatus:k,arbeidsgiverId:v})=>u!==null&&u!==""||ru(k)&&(n==null?void 0:n.fastsattBelop)||tu(k)&&v&&Gt(r,v)||au(k)&&(t==null?void 0:t.fastsattBelop)||su(k)&&(a==null?void 0:a.fastsattBelop)||iu(k)&&(s==null?void 0:s.fastsattBelop)).map(o)};lt.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>ki(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:ch}=O,hh="erKravGyldig_",cl=e=>hh+e,Ah=(e,n,r,t)=>e.map(a=>{const{arbeidsgiverIdent:s}=a,l=r[s],o=l?wn(l):s,u=z();return g.jsx($.Fragment,{children:g.jsx(Te,{label:g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsx(m,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${cl(s)}`,validate:[W],isReadOnly:n,radios:[{value:"true",label:u.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:u.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:on})},s)}),ot=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=$.useContext(Re),a=n==null?void 0:n.refusjonskravSomKommerForSentListe;return a?g.jsx(g.Fragment,{children:Ah(a,e,r,t)}):null};ot.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[cl(r)]}))};ot.buildInitialValues=(e,n)=>{const r={};return!e.includes(ch)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:a})=>{r[cl(t)]=a}),{...r})};const Ih=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===tl.KUNSTIG))!==void 0},lu=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},Th=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},Rh=(e,n,r,t,a)=>{const s=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!s.map(u=>u).includes(O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!s.map(u=>u).includes(O.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(u=>u.andelsnr&&!a.includes(u.andelsnr)).filter(u=>km(u,t,u.arbeidsforholdId)||Ih(u,t)||Mb(u,r,e));l.forEach(u=>a.push(lu(u.andelsnr)));const o=l.map(u=>({andelsnr:lu(u.andelsnr),fastsattBeløp:ge(u.fastsattBelop),inntektskategori:Th(u.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[O.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},ou=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},Eh=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(a=>a).includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const a=e.filter(s=>s.andelsnr&&!r.includes(s.andelsnr)).filter(s=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(s.andelsnr)).map(s=>({andelsnr:ou(s.andelsnr),arbeidsinntekt:s.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const s=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});a.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:ou(s==null?void 0:s.fastsattBelop)})}if(a.forEach(s=>r.push(s.andelsnr)),a.length>0)return{faktaOmBeregningTilfeller:[O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:a}}}return{faktaOmBeregningTilfeller:[]}},Js=e=>e==null?void 0:e.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),du=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s})=>{var l,o,u,k,v,f,b,y,j;const{getValues:A}=he(),h=$.useContext(Re),T=A(`vurderFaktaBeregningForm.${h}`),E=A([`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Cn()}`,`vurderFaktaBeregningForm.${h}.${yn}`]),q=()=>{var J;if(E.includes(!0))return!0;const Z=A([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0),de=(J=e.faktaOmBeregning)==null?void 0:J.andelerForFaktaOmBeregning.some(Ae=>Ae.aktivitetStatus===te.FRILANSER);return Z&&de},S=()=>{var J;const Z=(J=e.faktaOmBeregning)==null?void 0:J.andelerForFaktaOmBeregning.some(de=>de.aktivitetStatus===te.SELVSTENDIG_NAERINGSDRIVENDE);return A([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0)&&Z},P=()=>{var J;const Z=(J=e.faktaOmBeregning)==null?void 0:J.andelerForFaktaOmBeregning.some(de=>de.aktivitetStatus===te.MILITAER_ELLER_SIVIL);return A([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0)&&Z},D=A([`vurderFaktaBeregningForm.${h}.${gr}`,`vurderFaktaBeregningForm.${h}.${Ce}`]),_=D.includes(!0),U=A([`vurderFaktaBeregningForm.${h}.${Bn}`]).includes(!0),Y=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,w=(k=(u=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:u.arbeidstakerAndelerUtenIM)==null?void 0:k.filter(J=>{const Z=A(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues`);return Z==null?void 0:Z[tr(J)]}),M=(f=(v=e.faktaOmBeregning)==null?void 0:v.andelerForFaktaOmBeregning.filter(J=>J.aktivitetStatus===te.ARBEIDSTAKER))==null?void 0:f.filter(J=>mr(T,e)(ki(J,a,s))),L=(b=Js(t)&&_?Y==null?void 0:Y.filter(J=>!(M!=null&&M.find(Z=>{var de,Ae;return((de=Z.arbeidsforhold)==null?void 0:de.arbeidsgiverIdent)===((Ae=J.arbeidsforhold)==null?void 0:Ae.arbeidsgiverIdent)}))):Y)==null?void 0:b.filter(J=>mr(T,e)(ki({...J,lagtTilAvSaksbehandler:!1},a,s))),K=A(`vurderFaktaBeregningForm.${h}.${Ce}`),H=`vurderFaktaBeregningForm.${h}.frilansInntektValues.fastsattBelop`,C=`vurderFaktaBeregningForm.${h}.dagpengerInntektValues.fastsattBelop`,le=`vurderFaktaBeregningForm.${h}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,je=`vurderFaktaBeregningForm.${h}.militærEllerSivilInntektValues.fastsattBelop`,Pe=(j=(y=e==null?void 0:e.faktaOmBeregning)==null?void 0:y.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:j.some(J=>!!J.inntektPrMnd),He=J=>{var Z,de,Ae,rn;const fe=(Z=J.arbeidsforhold)!=null&&Z.arbeidsgiverIdent?(de=a[J.arbeidsforhold.arbeidsgiverIdent])==null?void 0:de.navn:void 0;return A(`vurderFaktaBeregningForm.${h}.${gr}`)&&D.filter(Be=>Be===!0).length===1?g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${fe} (${(Ae=J.arbeidsforhold)==null?void 0:Ae.arbeidsgiverIdent})`}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${fe} (${(rn=J.arbeidsforhold)==null?void 0:rn.arbeidsgiverIdent})`}})},Ye=()=>{const J=E.filter(Ae=>Ae===!0).length>1,Z=A([`vurderFaktaBeregningForm.${h}.${yn}`]).includes(!0),de=A([`vurderFaktaBeregningForm.${h}.${Ce}`]).includes(!0);return Js(t)||J||de?g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):A(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${Cn()}`)?g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):Z?g.jsxs(g.Fragment,{children:[g.jsx(m,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:g.jsx("br",{})}})})]})})]}):null};return g.jsxs(B,{gap:"8",children:[Js(t)&&g.jsxs(g.Fragment,{children:[g.jsxs(B,{gap:"1",children:[g.jsx(x,{children:g.jsx(m,{id:Pe?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:Pe?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:g.jsx("br",{})}})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})})]}),L==null?void 0:L.map(J=>{var Z;return g.jsx(Or,{arbeidsgiver:J,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:a},(Z=J.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)})]}),q()&&g.jsx(dn,{name:H,readOnly:n,isAksjonspunktClosed:r,label:Ye()}),_||U?M==null?void 0:M.filter(J=>{var Z;return U&&!_?((Z=J.arbeidsforhold)==null?void 0:Z.arbeidsforholdType)===er.ETTERLONN_SLUTTPAKKE:!0}).map(J=>{var Z;return g.jsx(Or,{arbeidsgiver:J,readOnly:n,isAksjonspunktClosed:r,label:He(J),arbeidsgiverOpplysningerPerId:a},(Z=J.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)}):w==null?void 0:w.map(J=>{var Z;return g.jsx(Or,{arbeidsgiver:J,readOnly:n,isAksjonspunktClosed:r,label:He(J),arbeidsgiverOpplysningerPerId:a},(Z=J.arbeidsforhold)==null?void 0:Z.arbeidsgiverIdent)}),K&&g.jsx(dn,{name:C,readOnly:n,isAksjonspunktClosed:r,label:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})}),S()&&g.jsx(dn,{name:le,readOnly:n,isAksjonspunktClosed:r,label:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})}),P()&&g.jsx(dn,{name:je,readOnly:n,isAksjonspunktClosed:r,label:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})},Nh=e=>!e.includes(O.FASTSETT_BG_KUN_YTELSE),qh=(e,n,r,t)=>g.jsx(lt,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),dt=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:a,kodeverkSamling:s,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:u,arbeidsgiverOpplysningerPerId:k,vilkarsperiodeSkalVurderesIBehandlingen:v})=>{const{getValues:f}=he(),b=$.useContext(Re),y=f(`vurderFaktaBeregningForm.${b}`),j=R.useMemo(()=>$m(y),[y,t,a]),A=R.useMemo(()=>Nh(r),[r]),h=()=>{const T=[],E=[];let q=!1;const{faktaOmBeregning:S}=t;return!S||(r.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(q=!0,E.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),T.push(g.jsx($.Fragment,{children:g.jsx(at,{readOnly:e,faktaOmBeregning:S,arbeidsgiverOpplysningerPerId:k})},O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(q=!0,E.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),T.push(g.jsx($.Fragment,{children:g.jsx(tt,{readOnly:e})},O.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(q=!0,E.push(O.VURDER_MILITÆR_SIVILTJENESTE),T.push(g.jsx($.Fragment,{children:g.jsx(st,{readOnly:e})},O.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(q=!0,E.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),T.push(g.jsx($.Fragment,{children:g.jsx(ot,{readOnly:e,arbeidsgiverOpplysningerPerId:k,faktaOmBeregning:S})},O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(O.VURDER_LONNSENDRING)&&(q=!0,E.push(O.VURDER_LONNSENDRING),T.push(g.jsx($.Fragment,{children:g.jsx(Wr,{readOnly:e})},O.VURDER_LONNSENDRING))),r.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(q=!0,E.push(O.VURDER_ETTERLONN_SLUTTPAKKE),T.push(g.jsx($.Fragment,{children:g.jsx(et,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},O.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(O.VURDER_NYOPPSTARTET_FL)&&(q=!0,E.push(O.VURDER_NYOPPSTARTET_FL),T.push(g.jsx($.Fragment,{children:g.jsx(Zr,{readOnly:e})},O.VURDER_NYOPPSTARTET_FL))),r.includes(O.VURDER_BESTEBEREGNING)&&!r.includes(O.FASTSETT_BG_KUN_YTELSE)&&(q=!0,E.push(O.VURDER_BESTEBEREGNING),T.push(g.jsx($.Fragment,{children:g.jsx(Jr,{readOnly:e,erOverstyrt:j})},O.VURDER_BESTEBEREGNING))),(r.includes(O.VURDER_MOTTAR_YTELSE)||r.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(q=!0,E.push(O.VURDER_MOTTAR_YTELSE),T.push(g.jsx($.Fragment,{children:g.jsx(it,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:k})},O.VURDER_MOTTAR_YTELSE))),!v)?null:q?e?g.jsxs(g.Fragment,{children:[T.map((P,D)=>g.jsx(B,{gap:"8",children:P},E[D])),g.jsx(du,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:k,kodeverkSamling:s}),u()]}):g.jsx(Uc,{children:g.jsxs(B,{gap:"4",children:[T.map((P,D)=>g.jsx(B,{gap:"8",children:P},E[D])),!jn(y)&&g.jsx(du,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:k,kodeverkSamling:s}),u()]})}):jn(y)?u():null};return g.jsxs(B,{gap:"8",children:[g.jsx(ll,{tabell:qh(e,t,s,j),skalViseTabell:A,readOnly:e,erOverstyrer:l,avklaringsbehov:a,updateOverstyring:o,erOverstyrt:j},"inntektstabell"),h()]})};dt.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const a=e.andelerForFaktaOmBeregning;return a.length===0?{}:{[Dm]:lt.buildInitialValues(a,r,t),...ll.buildInitialValues(n)}};const Mn=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},Sh=e=>{if(!e)throw new Error("Forventer andelsnr");return e},Ph=(e,n,r,t)=>{if(jn(e)){const a=r.filter(s=>!t.includes(Sh(s.andelsnr))).filter(s=>s.fastsattBelop!=null).map(s=>({andelsnr:s.andelsnr,nyAndel:!!s.nyAndel,aktivitetStatus:s.aktivitetStatus,lagtTilAvSaksbehandler:s.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:s.inntektskategori}}));return{fakta:n,overstyrteAndeler:a}}return{fakta:n}},Bh=(e,n,r,t,a)=>{const s=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(s.length>0){l=Mn(l,Bb(t)(e,n));const o=e[Ce]===!0;l=Mn(l,Zr.transformValues(e,o?null:n,t,r)),l=Mn(l,et.transformValues(e,o?null:n,t,r)),l=Mn(l,Wr.transformValues(e,t)),l=Mn(l,it.transformValues(e,o?null:n,t,a,r)),l=Mn(l,Eh(o?null:n,t,r)),l=Mn(l,Rh(e,o?null:n,t,a,r))}return l};dt.transformValues=(e,n)=>r=>{const t=lt.transformValues(r[Dm],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),a=[],s=Bh(r,t,a,e,n);return Ph(r,s,t,a)};const{VURDER_FAKTA_FOR_ATFL_SN:Fh}=ye,uu=e=>{var n;return((n=Dn(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},gu=e=>{var n;return((n=Dn(e))==null?void 0:n.kunYtelse)||void 0},mu=e=>{var n;return((n=Dn(e))==null?void 0:n.vurderMottarYtelse)||void 0},xh=e=>{var n;return((n=Dn(e))==null?void 0:n.vurderBesteberegning)||void 0},wh=e=>{var n;return((n=Dn(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},_h=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:u})=>{const{avklaringsbehov:k}=r,v=fl(r),f=Dn(r),b=[];return Nc(b,v,e,n,f,t,o),b.push(g.jsx($.Fragment,{children:g.jsx(dt,{readOnly:e,isAksjonspunktClosed:n,tilfeller:v,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,avklaringsbehov:k,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:s,vilkarsperiodeSkalVurderesIBehandlingen:u})},"VurderOgFastsettATFL")),b},Oh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:u})=>g.jsx("div",{children:_h({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:u}).map(k=>k)}),Dh=(e,n)=>r=>qc(r,e.kunYtelse,n),Vh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...tt.transformValues(n)}},Mh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...at.transformValues(r,e)}},Gh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(O.VURDER_MILITÆR_SIVILTJENESTE),{...e,...st.transformValues(n)}},Lh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...ot.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},Kh=(e,n,r,t,a)=>(s,l)=>{let o={...s};return e.forEach(u=>{u===O.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),u===O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),u===O.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),u===O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=a(o,l))}),o},$h=(e,n,r)=>t=>e.includes(O.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},Uh=(e,n,r,t,a)=>{const s=$h(e,Dh(t,e),dt.transformValues(t,a))(n);return{fakta:Kh(e,Vh,Mh(r),Gh,Lh(t))(s.fakta,n),overstyrteAndeler:s.overstyrteAndeler}},Hh=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:a}=e;return Uh(n,e,r,t,a)},Yh=e=>e?e.find(n=>n.definisjon===Fh):void 0,Ch=(e,n,r)=>{const t=fl(e),a=Dn(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:a,kortvarigeArbeidsforhold:uu(e),vurderMottarYtelse:mu(e),kunYtelse:gu(e),tidsbegrensetValues:at.buildInitialValues(uu(e)),vurderMottarYtelseValues:it.buildInitialValues(mu(e),t),arbeidstakerInntektValues:Or.buildInitialValues(a.andelerForFaktaOmBeregning),frilansInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.FRILANSER),dagpengerInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.DAGPENGER),selvstendigNæringsdrivendeInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:dn.buildInitialValues(a.andelerForFaktaOmBeregning,te.MILITAER_ELLER_SIVIL),vurderRefusjonValues:ot.buildInitialValues(t,wh(e)),...st.buildInitialValues(a),...tt.buildInitialValues(e),...Wr.buildInitialValues(e),...Zr.buildInitialValues(e),...et.buildInitialValues(e,Yh(e.avklaringsbehov)),...Jr.buildInitialValues(e.avklaringsbehov,xh(e),t,eu(e)),...dt.buildInitialValues(a,eu(e),r,n),...Sc(gu(e),t,a.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:bi,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:ji}=ye,Ut=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),zh=(e,n)=>e||Ut(bi,n),ku=(e,n)=>{const r=e[ur];if(n&&!r&&Ut(ji,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!zh(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...Hh(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},Jh=(e,n=!0)=>{const r=e[un],t=r.filter(l=>l.erTilVurdering).filter(l=>l[ur]||Ut(ji,l.avklaringsbehov||[])).map(l=>ku(l,!0)).filter(l=>l),a=r.filter(l=>l.erTilVurdering).filter(l=>(!l[ur]||n)&&Ut(bi,l.avklaringsbehov||[])).map(l=>ku(l,!1)).filter(l=>l),s=[];if(t.length>0){const l=t.filter(({begrunnelse:u})=>u!==null).map(({begrunnelse:u})=>u).reduce((u,k)=>u===""?k:`${u} ${k}`,""),o={kode:ji,begrunnelse:l!==""?l:null,grunnlag:t};s.push(o)}if(a.length>0){const l=a.map(({begrunnelse:u})=>u).reduce((u,k)=>u===""?k:`${u} ${k}`,""),o={kode:bi,begrunnelse:l,grunnlag:a};s.push(o)}return s},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Wm,VURDER_FAKTA_FOR_ATFL_SN:ci}=ye,Zm="begrunnelseFaktaTilfeller",Wh=(e,n,r)=>e&&n&&!r,Zh=(e,n)=>Ln(ci,n)||Ln(Wm,n)?!e:!0,vu=(e,n)=>{const r=n(`${un}.${e}`);return $m(r)},pu=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},Qh=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,submittable:s,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:u,submitDisabled:k})=>{const{getValues:v,formState:{errors:f,isDirty:b}}=he(),y=$.useContext(um),j=$.useContext(Re),A=j===y,{avklaringsbehov:h}=e,T=h.find(S=>S.definisjon===ye.VURDER_FAKTA_FOR_ATFL_SN||S.definisjon===ye.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),E=o.vurderesIBehandlingen,q=()=>g.jsx(g.Fragment,{children:(Ln(ci,h)||Ln(Wm,h)||vu(j,v))&&g.jsxs(B,{gap:"6",children:[(Ln(ci,h)||vu(j,v))&&g.jsxs(g.Fragment,{children:[g.jsx(jr,{name:`${un}.${j}.${Zm}`,isSubmittable:s,isReadOnly:r||!E,hasBegrunnelse:!!(T!=null&&T.begrunnelse)}),g.jsx(En,{ident:T==null?void 0:T.vurdertAv,date:T==null?void 0:T.vurdertTidspunkt})]}),g.jsx(F,{children:g.jsx(qg,{isSubmittable:Wh(s&&Zh(u,h),!0,pu(j,f))&&!u,isReadOnly:r||!E,isDirty:b,isSubmitting:k,hasErrors:pu(j,f)})})]})});return g.jsx("div",{style:{display:A?"block":"none"},children:g.jsx(Oh,{readOnly:r||!E,isAksjonspunktClosed:Hm(h),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:a,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>q(),vilkarsperiodeSkalVurderesIBehandlingen:E})},j)},{VURDER_FAKTA_FOR_ATFL_SN:Qm,AVKLAR_AKTIVITETER:Xh,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Ht,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:eA}=ye,nA=e=>e.some(n=>n.definisjon===Ht)?e.find(n=>n.definisjon===Ht&&n.begrunnelse!==null):e.find(n=>n.definisjon===Qm&&n.begrunnelse!==null),fu=(e,n)=>n.some(r=>r.definisjon===e&&la(r.status)),rA=(e,n,r,t)=>({[un]:e.map(a=>{var s;const l=t.perioder.find(o=>o.periode.fom===a.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${a.vilkårsperiodeFom}`);return{avklaringsbehov:a.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...jr.buildInitialValues((s=nA(a.avklaringsbehov))==null?void 0:s.begrunnelse,Zm),...Ch(a,n,r)}})}),tA=[Qm,Ht],aA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},sA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:a,arbeidsgiverOpplysningerPerId:s,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:u,formData:k,vilkar:v,avklarAktiviteterErEndret:f,skalKunneAvbryteOverstyring:b})=>{const y=f,j=e.flatMap(H=>H.avklaringsbehov),A=$e({defaultValues:k||rA(e,t,s,v)}),{control:h,formState:T,trigger:E,getValues:q,watch:S}=A,{fields:P,update:D}=Ze({name:un,control:h}),{errors:_,isSubmitted:U}=T,[Y,w]=R.useState(!1),M=S(un);R.useEffect(()=>{U&&E()},[JSON.stringify(M)]);const L=(H,C)=>{const le=q(`${un}.${H}`);D(H,{...le,[ur]:C})},K=H=>{Object.keys(_).length===0?(w(!0),o(Jh(H,b))):console.error(_)};return fu(Xh,j)||fu(eA,j)?null:g.jsx(um.Provider,{value:l,children:g.jsx(Ue,{formMethods:A,onSubmit:H=>{K(H)},setDataOnUnmount:u,children:P.map((H,C)=>{const le=J=>tA.some(Z=>Z===J.definisjon),je=J=>J.kanLoses,Pe=j.filter(J=>le(J)&&je(J)),He=r||aA(e[C],v.perioder)||ze(Ht,j)&&!a||Pe.length===0&&!a,Ye=v.perioder.find(J=>J.periode.fom===e[C].vilkårsperiodeFom);if(!Ye)throw new Error(`Filler ikke vilkårsperiode med fom ${e[C].vilkårsperiodeFom}`);return g.jsx(Re.Provider,{value:C,children:g.jsx(Qh,{vilkarsperiode:Ye,beregningsgrunnlag:e[C],erOverstyrer:a,readOnly:He,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:n,updateOverstyring:L,submitDisabled:Y,verdiForAvklarAktivitetErEndret:y},H.id)},H.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:iA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:Xm,AVKLAR_AKTIVITETER:lA}=ye,oA=[Xm,lA],dA=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:u,arbeidsgiverOpplysningerPerId:k,setFormData:v,formData:f,vilkar:b,skalKunneAvbryteOverstyring:y})=>{const j=n.filter(E=>oA.some(q=>q===E.definisjon)&&E.kanLoses),A=e||(j.length===0||ze(Xm,n))&&!l,[h,T]=R.useState(!1);return g.jsxs(B,{gap:ze(iA,n)?"0":"2",children:[g.jsx("div",{children:g.jsx(Nb,{readOnly:A,submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:u,aktivtBeregningsgrunnlagIndeks:a,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:k,setFormData:v,formData:f&&Ur in f?f:void 0,vilkår:b,setAvklarAktiviteterErEndret:T})}),g.jsx(sA,{submitCallback:t,submittable:r,kodeverkSamling:u,beregningsgrunnlag:s,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:k,aktivtBeregningsgrunnlagIndeks:a,setFormData:v,formData:f&&un in f?f:void 0,vilkar:b,avklarAktiviteterErEndret:h,skalKunneAvbryteOverstyring:y})]})},uA="_tabsContainer_1yyvp_1",gA="_main_1yyvp_9",yu={tabsContainer:uA,main:gA},mA=Me(rm),{VURDER_FAKTA_FOR_ATFL_SN:ek,AVKLAR_AKTIVITETER:kA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:vA}=ye,pA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},fA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:a})=>a.fom===r);if(t){const{fom:a,tom:s}=t.periode;return s!==null?`${N(a).format(se)} - ${N(s).format(se)}`:`${N(a).format(se)} - `}return`${N(r).format(se)}`},yA=e=>{if(e){const n=e.some(t=>t.definisjon===ek&&t.kanLoses),r=e.some(t=>t.definisjon===kA&&t.kanLoses);return n||r}return!1},Ws=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return yA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},tn=e=>g.jsx(ie,{size:"xsmall",level:"3",children:e},"h3"),bA=(e,n)=>{var r,t,a,s,l,o;const u=fl(e),k=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),v=[],f=[];if(u.includes(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const b=(s=(a=e==null?void 0:e.faktaOmBeregning)==null?void 0:a.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:s.some(y=>!!y.inntektPrMnd);f.push(O.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:b?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:tn}})}))}if(u.includes(O.VURDER_LONNSENDRING)&&(f.push(O.VURDER_LONNSENDRING),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:tn}})}))),k&&u.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_frilans`),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:tn}})}))),!k&&u.includes(O.VURDER_MOTTAR_YTELSE)&&(f.push(`${O.VURDER_MOTTAR_YTELSE}_arbeidstaker`),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:tn}})}))),u.includes(O.VURDER_ETTERLONN_SLUTTPAKKE)&&(f.push(O.VURDER_ETTERLONN_SLUTTPAKKE),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:tn}})}))),u.includes(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){f.push(O.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const b=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let y="";b.forEach((j,A)=>{var h;const T=(h=j.arbeidsforhold)==null?void 0:h.arbeidsgiverIdent;if(!T)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const E=n[T],q=E?wn(E):T;A===0?y=q:y=`${y}, ${q}`}),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:y,h3:tn}})}))}if(u.includes(O.VURDER_MILITÆR_SIVILTJENESTE)&&(f.push(O.VURDER_MILITÆR_SIVILTJENESTE),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:tn}})}))),u.includes(O.FASTSETT_BG_KUN_YTELSE)&&(f.push(O.FASTSETT_BG_KUN_YTELSE),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsxs(B,{gap:"1",children:[g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:tn}}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),g.jsx(qe,{size:"small",header:g.jsx(m,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:g.jsxs(Q,{size:"small",children:[g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),g.jsx(Q.Item,{children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]})}))),u.includes(O.VURDER_NYOPPSTARTET_FL)&&(f.push(O.VURDER_NYOPPSTARTET_FL),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:tn}})}))),u.includes(O.VURDER_SN_NY_I_ARBEIDSLIVET)&&(f.push(O.VURDER_SN_NY_I_ARBEIDSLIVET),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:tn}})}))),u.includes(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const b=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let y="";b.forEach((j,A)=>{const{arbeidsgiverIdent:h}=j,T=n[h],E=T?wn(T):h;A===0?y=E:y=`${y}, ${E}`}),f.push(O.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),v.push(g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:y,h3:tn}})}))}return v.length>0?g.jsx(B,{gap:"4",children:v.map((b,y)=>g.jsx($.Fragment,{children:b},f[y]))}):g.jsx(Ie,{size:"small",variant:"warning",children:g.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},jA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,vilkar:v,skalKunneAvbryteOverstyring:f=!1})=>{const[b,y]=R.useState(0),j=v==null?void 0:v.perioder;if(R.useEffect(()=>{if(j){const E=e==null?void 0:e.findIndex(q=>Ws(q,j));E>-1&&y(E)}},[]),e.length===0||!v)return g.jsx(g.Fragment,{children:"Har ikke beregningsgrunnlag."});const A=e.length>1,h=e[b],T=h.avklaringsbehov;return g.jsx(De,{value:mA,children:g.jsx("div",{className:yu.main,children:g.jsxs(B,{gap:"4",children:[g.jsx(ie,{size:"small",level:"2",children:g.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Ln(ek,T)||Ln(vA,T))&&!Hm(T)&&g.jsx(g.Fragment,{children:bA(h,o)}),A&&g.jsx("div",{className:yu.tabsContainer,children:g.jsx(ir,{value:b.toString(),onChange:E=>y(Number(E)),children:g.jsx(ir.List,{children:e.map((E,q)=>g.jsx(ir.Tab,{value:q.toString(),label:fA(E,j),className:Ws(E,j)?"harAksjonspunkt":"",icon:Ws(E,j)&&g.jsx(yr,{width:20,height:20,color:"Orange"})},E.skjaeringstidspunktBeregning))})})}),g.jsx(dA,{aktivtBeregningsgrunnlagIndeks:b,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:T,submitCallback:r,readOnly:t||pA(e[b],j),submittable:a,erOverstyrer:s,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:k,formData:u,vilkar:v,skalKunneAvbryteOverstyring:f})]})})})},cA=[re.VURDER_FAKTA_FOR_ATFL_SN,re.AVKLAR_AKTIVITETER,re.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,re.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],hA=[re.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,re.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],AA=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r,rettigheter:t}=R.use(Rn),a=Qn(cA,hA),s=Tn(r),{data:l,isFetching:o}=In(s.beregningsgrunnlagOptions(r));return i.jsx(Xn,{standardPanelProps:a,faktaPanelKode:Wn.BEREGNING,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:_g(r,"BEREGNINGSGRUNNLAG"),children:o?i.jsx(An,{}):i.jsx(IA,{kodeverkSamling:a.alleKodeverk,vilkar:EA(r==null?void 0:r.vilkår,l),beregningsgrunnlag:NA(l),submitCallback:RA(a.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:t.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:a.readOnly,submittable:a.submittable})})},IA=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=_n();return i.jsx(jA,{...e,formData:n,setFormData:r})},TA=e=>{switch(e){case ye.AVKLAR_AKTIVITETER:return re.AVKLAR_AKTIVITETER;case ye.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return re.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case ye.VURDER_FAKTA_FOR_ATFL_SN:return re.VURDER_FAKTA_FOR_ATFL_SN;case ye.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return re.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},RA=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:TA(a.kode),...a.grunnlag[0]}));return e(t)},EA=(e,n)=>{if(!e)return null;const r=e.find(a=>a.vilkarType&&a.vilkarType===Yn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[{avslagKode:r.avslagKode??void 0,vurderesIBehandlingen:!0,periode:{fom:n?n.skjaeringstidspunktBeregning:"",tom:Se},merknadParametere:{},vilkarStatus:r.vilkarStatus}]}},NA=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];AA.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Ve=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))(Ve||{});function nk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bu={exports:{}},Sr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju;function qA(){if(ju)return Sr;ju=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Sr.Fragment=n,Sr.jsx=r,Sr.jsxs=r,Sr}var cu;function SA(){return cu||(cu=1,bu.exports=qA()),bu.exports}var p=SA();function ut(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function ar(e,n){return ut(e,n).vurderesIBehandlingen}var kr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(kr||{}),hi=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(hi||{}),ue=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ue||{});const hl=e=>e==="OPPR";var Hr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(Hr||{}),gt=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(gt||{});const PA=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],BA=e=>PA.some(n=>n===e),FA="_begrunnelseTextField_1wq9u_1",xA="_explanationTextarea_1wq9u_4",wA="_explanationTextareaReadOnly_1wq9u_7",Zs={begrunnelseTextField:FA,explanationTextarea:xA,explanationTextareaReadOnly:wA},Al={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som kan medføre gradering mot inntekt?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":'Utgangspunktet er at alle nye inntektskilder som kommer etter skjæringstidspunktet skal kunne medføre gradering mot inntekt. Du skal derfor vanligvis velge "ja", som betyr at K9 vurderer om pleiepengene skal graderes mot denne inntekten. Hvis du velger "nei", vil ikke K9 bruke denne aktiviteten for å vurdere søkers inntektstap.',"FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},hu=Me(Al),_A=mn(3),OA=kn(1500),mt=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:a=!1,name:s="begrunnelse"})=>{const l=a?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||hu.formatMessage({id:l});return p.jsx(De,{value:hu,children:(n||r)&&p.jsx("div",{className:Zs.begrunnelseTextField,children:p.jsx(We,{name:s,label:e?"":o,validate:e?[]:[W,_A,OA,vn],className:e?Zs.explanationTextareaReadOnly:Zs.explanationTextarea,maxLength:1500,readOnly:e})})})},DA=e=>e&&e.begrunnelse?e.begrunnelse:"";mt.buildInitialValues=(e,n="begrunnelse")=>({[n]:Li(DA(e))});mt.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const VA=Me(Al),MA=(e,n,r)=>!r||n?!0:!e,pa=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:a})=>e?null:p.jsx(ee,{size:"small",loading:t,disabled:MA(a,t,n),onClick:r||Sg,type:r?"button":"submit",children:VA.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Au(e,n){return n.tom!=null&&!N(n.tom).isBefore(N(e.fom))&&(e.tom==null||!N(n.tom).isAfter(N(e.tom)))}function GA(e,n){return Au(e,n)||Au(n,e)}function cn(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===gt.UDEFINERT)?!0:!n||n.length===0||n.some(t=>GA(t,e))}var Iu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Tu;function LA(){return Tu||(Tu=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Iu)),Iu.exports}var KA=LA();const rk=nk(KA),$A="_vurdertIForrigeIcon_1q86k_1",UA={vurdertIForrigeIcon:$A},HA=rk.bind(UA),tk=({className:e=""})=>{const n=z();return p.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:HA("vurdertIForrigeIcon",e),children:p.jsx(ia,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},Dr=e=>e?`...${e.substring(e.length-4,e.length)}`:"",kt=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${N(t).format(se)})${Dr(n)}`:r:s?`${r} (${s})${Dr(n)}`:r},Ai=(e,n)=>{var r,t;const a=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!a||!n[a])return"";const s=n[a];return s.erPrivatPerson?s.fødselsdato?`${s.navn} (${N(s.fødselsdato).format(se)})${Dr(e.eksternArbeidsforholdRef)}`:`${s.navn}${Dr(e.eksternArbeidsforholdRef)}`:`${s.navn} (${a})${Dr(e.eksternArbeidsforholdRef)}`},ak=" - ",sk=e=>e==null,YA=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${ak}${r}`},CA=e=>e.inntektskategori&&e.inntektskategori!==gt.UDEFINERT?e.inntektskategori:"",zA=(e,n,r,t)=>{var a,s;if(!e.aktivitetStatus||e.aktivitetStatus===ue.UDEFINERT)return"";if(e.aktivitetStatus===ue.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?kt(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((a=r[kr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var u;return o.kode===((u=e.arbeidsforhold)==null?void 0:u.arbeidsforholdType)}))==null?void 0:a.kode)||""}return n&&e.aktivitetStatus===ue.BRUKERS_ANDEL?"Ytelse":((s=r[kr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:s.navn)||""},JA=e=>sk(e)?void 0:e,Ru=e=>V(e)||"",WA=(e,n,r)=>e!==void 0?Ru(e):r&&!sk(n)?Ru(n):"",ZA=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),QA=(e,n,r,t)=>({andel:zA(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:CA(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===gt.UDEFINERT?void 0:e.inntektskategori}),ik=(e,n,r,t,a)=>{if(n.skalRedigereInntekt){const s=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.fastsattBelop`);return s?ge(s):0}return n.readOnlyBelop?ge(n.readOnlyBelop):0},XA=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),eI=(e,n)=>{var r;const t=e.find(a=>{var s,l;return!!a.arbeidsforhold&&a.arbeidsforhold.arbeidsgiverIdent===((s=n.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&a.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},nI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!XA(t.arbeidsforhold,r)){const a=eI(n,t),s={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:a.beregningsperiodeTom,beregningsperiodeFom:a.beregningsperiodeFom,...t.arbeidsforhold};r.push(s)}}),r},rI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],tI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],aI=(e,n)=>nI(rI(e),tI(n)),sI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],a=e.beregningsgrunnlagPeriode;return aI(t,a)},iI=e=>e?Number(ge(e)):0,lI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),oI=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,dI=(e,n)=>e.some(r=>oI(n,r)),uI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},gI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{if(s.nyAndel&&(s.andelsnrRef||s.andelsnrRef===0)){const o=uI(t,s.andelsnrRef);a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else a.push({erNyAndel:s.nyAndel,aktivitetstatus:s.aktivitetStatus,inntektskategori:s.inntektskategori,arbeidsgiverIdent:s.arbeidsgiverId,arbeidsforholdId:s.arbeidsforholdId})}),a},mI=(e,n,r,t,a)=>{const s=gI(e,n,r,t),l=[];let o=!1;return s.forEach(u=>{dI(l,u)&&(o=!0),l.push(u)}),o?lI(a):void 0},kI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,vI=(e,n,r,t,a,s)=>{const l=s.findIndex(({arbeidsforholdId:u,arbeidsgiverId:k})=>u===t.arbeidsforholdId&&k===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${a}.refusjonskrav`);if(l>=0){const u=s[l];kI(t,u)&&(u.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(u.totalRefusjon+=Number(ge(o)))}else{const{refusjonskravFraInntektsmelding:u,arbeidsforholdId:k,arbeidsgiverId:v,eksternArbeidsforholdId:f}=t;let b=0;o!=null&&(b=Number(ge(o))),s.push({arbeidsforholdId:k,eksternArbeidsforholdId:f,arbeidsgiverId:v,refusjonskravFraInntektsmelding:u,totalRefusjon:b})}},pI=(e,n,r,t)=>{const a=[];return t.forEach((s,l)=>{s.arbeidsforholdId!==""&&vI(e,n,r,s,l,a)}),a},fI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),yI=(e,n,r,t,a,s)=>{const l=pI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?a[l[0].arbeidsgiverId]:void 0;let u;return o?u=kt(o,l[0].eksternArbeidsforholdId):u=l[0].arbeidsgiverId||"",fI(u,s)}},bI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,jI=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),cI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,hI=(e,n,r)=>e>=Math.round(n)?cI(V(n),r):void 0,lk=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),ok=(e,n,r,t,a)=>e>=Math.round(n)?t(V(n),r,a):void 0,AI=(e,n,r)=>e!==Math.round(n)?bI(V(Math.round(n)),r):void 0,II=(e,n,r,t,a,s,l)=>{if(!r.andelIArbeid)return!1;const o=a(`FORDEL_BEREGNING_FORM.${e}.${s}.${l}.fastsattBelop`),u=o?ge(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&u<=0?!0:r.andelIArbeid.split(ak).filter(k=>Number(k)>0).length>0&&u===0},TI=(e,n,r,t,a,s)=>t.some((l,o)=>II(e,s,l,a,n,r,o))?jI(s):void 0,RI=(e,n,r,t,a,s)=>{const l=t.map((o,u)=>ik(e,o,r,n,u)).reduce((o,u)=>o+u,0);return a!=null?AI(l,a,s):void 0},Eu=(e,n,r,t,a)=>{const s=a(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return iI(s)},EI=(e,n,r,t,a,s)=>{const l=!!n.find((k,v)=>k.andelIArbeid!=="0.00"&&Eu(e,k,r,v,t)===0),o=n.map((k,v)=>Eu(e,k,r,v,t)).reduce((k,v)=>k+v,0),u=6*a;return l?hI(o,u,s):void 0},dk=(e,n)=>{const r=e.map(t=>{var a;return((a=n[kr.AKTIVITET_STATUS].find(s=>s.kode===t))==null?void 0:a.navn)||""});return r.sort((t,a)=>t.localeCompare(a)),[...new Set(r)].join(", ")},uk=(e,n,r,t,a)=>t.map((s,l)=>s.aktivitetStatus&&!a.includes(s.aktivitetStatus)?0:ik(e,s,r,n,l)).reduce((s,l)=>s+l,0),NI=(e,n,r,t,a,s,l)=>{const o=[ue.ARBEIDSTAKER],u=uk(e,n,r,t,o),k=dk(o,s);return ok(u,a,k,lk,l)},qI=(e,n,r,t,a,s,l)=>{const o=[ue.ARBEIDSTAKER,ue.FRILANSER,ue.DAGPENGER,ue.ARBEIDSAVKLARINGSPENGER],u=t.map(f=>f.aktivitetStatus).filter(f=>!!f&&o.includes(f)),k=uk(e,n,r,t,u),v=dk(u,s);return ok(k,a,v,lk,l)},SI=(e,n,r,t,a,s,l)=>{const o=!!t.find(k=>k.andelIArbeid!=="0.00"&&k.aktivitetStatus===ue.FRILANSER),u=6*s;if(o)return NI(e,n,r,t,u,l,a);if(t.find(k=>k.andelIArbeid!=="0.00"&&k.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE))return qI(e,n,r,t,u,l,a)},PI="_rightAlignInput_ov1eu_19",BI="_slettIkon_ov1eu_29",FI="_inntektTable_ov1eu_88",xI="_shortLeftAligned_ov1eu_137",wI="_wordwrap_ov1eu_142",_I="_litenBredde_ov1eu_145",OI="_storBredde_ov1eu_148",DI="_benyttCheckbox_ov1eu_154",VI="_floatRight_ov1eu_157",we={rightAlignInput:PI,slettIkon:BI,inntektTable:FI,shortLeftAligned:xI,wordwrap:wI,litenBredde:_I,storBredde:OI,benyttCheckbox:DI,floatRight:VI},Yt=({children:e})=>p.jsx("span",{className:we.floatRight,children:e}),MI=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:V(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),gk=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[kr.OPPTJENING_AKTIVITET_TYPE].find(a=>a.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":kt(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},GI=(e,n,r)=>e.map(t=>p.jsx("option",{value:t.andelsnr.toString(),children:gk(t,n,r)},t.andelsnr)),LI=(e,n,r,t)=>{const a=e.map(s=>p.jsx("option",{value:s.andelsnr.toString(),children:gk(s,r,t)},s.andelsnr));return a.push(p.jsx("option",{value:hi.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},hi.BRUKERS_ANDEL)),a},KI=e=>e.map(n=>p.jsx("option",{value:n.kode,children:n.navn},n.kode)),mk=e=>e>0&&V(e)||"",$I=(e,n,r,t)=>{let a=0,s=0;for(s;s<r.length;s+=1){const l=r[s],o=ge(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${s}.fastsattBelop`));l.skalRedigereInntekt?a+=o||0:a+=l.readOnlyBelop?o:0}return mk(a)},UI=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(ge(t.beregningsgrunnlagPrAar)):0)}return mk(n)},HI=e=>e.inntektskategori?BA(e.inntektskategori)||gt.FRILANSER===e.inntektskategori:!1,YI=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},CI=(e,n)=>{var r;const t=Number(n);return(r=e.find(a=>a.andelsnr===t))==null?void 0:r.aktivitetStatus},zI=(e,n,r,t,a)=>{const s=e[n],l=YI(r,t);l&&(s.arbeidsforholdId=l.arbeidsforholdId,s.arbeidsgiverId=l.arbeidsgiverIdent,s.arbeidsperiodeFom=l.startdato,s.arbeidsperiodeTom=l.opphoersdato,s.andelsnrRef=l.andelsnr,s.aktivitetStatus=CI(e,t),s.nyttArbeidsforhold=l.nyttArbeidsforhold,s.arbeidsforholdType=l.arbeidsforholdType,s.beregningsperiodeTom=l.beregningsperiodeTom,s.beregningsperiodeFom=l.beregningsperiodeFom,a(n,s))},JI=(e,n,r,t,a,s,l)=>p.jsxs(p.Fragment,{children:[!e[n].nyAndel&&p.jsx(ve,{name:`${l(n)}.andel`,className:we.storBredde,readOnly:!0}),e[n].nyAndel&&p.jsx(ra,{name:`${l(n)}.andel`,className:we.storBredde,label:"",selectValues:r,readOnly:t,validate:[W],onChange:o=>zI(e,n,a,o.target.value,s)})]}),WI=(e,n,r,t)=>n?p.jsx(c.DataCell,{children:p.jsx(Yt,{children:p.jsx(ve,{name:`${t}.readOnlyBelop`,className:we.litenBredde,parse:Fe,readOnly:!0,isEdited:!1})})}):p.jsx(c.DataCell,{className:we.rightAlignInput,children:p.jsx(Yt,{children:p.jsx(ve,{name:`${t}.fastsattBelop`,parse:Fe,readOnly:e,validate:[W,Qe(178956970)],isEdited:r&&!n,className:we.litenBredde})})}),ZI=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,QI=(e,n,r,t,a,s,l)=>p.jsxs(c.DataCell,{children:[JI(e,n,r,t,a,s,l),!HI(e[n])&&p.jsx("div",{className:we.wordwrap,children:p.jsx(ve,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),XI=(e,n)=>e?p.jsx(c.DataCell,{children:p.jsx(ve,{name:`${n}.andelIArbeid`,readOnly:!0,className:we.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,eT=(e,n,r,t)=>p.jsx(c.DataCell,{className:e||!n[r].skalKunneEndreRefusjon?void 0:we.rightAlignInput,children:p.jsx(Yt,{children:p.jsx(ve,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:Fe,className:we.litenBredde,validate:n[r].skalKunneEndreRefusjon?[W,Qe(178956970)]:[]})})}),nT=e=>p.jsx(c.DataCell,{children:p.jsx(ve,{name:`${e}.beregningsgrunnlagPrAar`,className:we.litenBredde,readOnly:!0,parse:Fe})}),rT=(e,n,r)=>p.jsx(c.DataCell,{className:e?we.shortLeftAligned:void 0,children:p.jsx(Yt,{children:p.jsx(ra,{label:"",name:`${n}.inntektskategori`,className:we.storBredde,validate:e?[]:[W],selectValues:KI(r),readOnly:e})})}),tT=(e,n,r,t)=>p.jsx(c.DataCell,{children:ZI(n,e,r)&&p.jsx(ee,{icon:p.jsx($n,{"aria-hidden":!0,className:we.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),aT=(e,n,r)=>p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{children:p.jsx(x,{size:"small",children:n})}),p.jsx(c.DataCell,{children:p.jsx(x,{size:"small",children:e})}),p.jsx(c.DataCell,{}),p.jsx(c.DataCell,{})]},"bruttoBGSummaryRow"),sT=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var a;return(a=t.perioderMedGraderingEllerRefusjon)==null?void 0:a.some(s=>s.erGradering)})},iT=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:a,kodeverkSamling:s,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:u,periodeFom:k,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})=>{const{control:y,watch:j,getValues:A}=he(),h=`FORDEL_BEREGNING_FORM.${v}.${e}`,{fields:T,append:E,remove:q,update:S}=Ze({control:y,name:`FORDEL_BEREGNING_FORM.${v}.${e}`});R.useEffect(()=>{b&&b!==h&&!n&&!r&&A(b).forEach(Z=>{var de;const Ae=T.findIndex(rn=>rn.andel===Z.andel&&(rn.inntektskategori===Z.inntektskategori||!rn.inntektskategori&&!Z.lagtTilAvSaksbehandler&&!rn.lagtTilAvSaksbehandler));if(Ae>-1){const rn={...T[Ae],fastsattBelop:Z.fastsattBelop,refusjonskrav:o?Z.refusjonskrav:(de=T[Ae])==null?void 0:de.refusjonskrav,inntektskategori:Z.inntektskategori};S(Ae,rn)}})},[b]);const P=!!l.aktivitetStatus&&l.aktivitetStatus.some(Z=>Z===ue.KUN_YTELSE),D=sI(l),_=$I(v,e,T,j),U=UI(T),Y=sT(l),w=s[kr.INNTEKTSKATEGORI],M=z(),L=P?LI(D,M,s,a):GI(D,s,a),K=Z=>`FORDEL_BEREGNING_FORM.${v}.${e}.${Z}`,H=T.map((Z,de)=>{const Ae=n||r;return p.jsxs(c.Row,{children:[QI(T,de,L,Ae,D,S,K),XI(Y,K(de)),eT(Ae,T,de,K),nT(K(de)),WI(n,r,t,K(de)),rT(Ae,K(de),w),tT(T,de,Ae,q)]},Z.id)});H.push(aT(_,U,Y));const C=[],le=Z=>{Z&&C.push(Z)};!n&&T.some(Z=>!!Z.skalRedigereInntekt||!!Z.skalKunneEndreRefusjon)&&(le(mI(v,A,e,T,M)),le(RI(v,A,e,T,u,M)),Y&&(le(TI(v,A,e,T,k,M)),le(SI(v,A,e,T,M,l.grunnbeløp,s))),o&&(le(EI(v,T,e,A,l.grunnbeløp,M)),le(yI(v,T,e,A,a,M))));const je=`FORDEL_BEREGNING_FORM.${v}.${e}.skjemagruppe`,Pe=C.filter(Z=>!!Z),He=Pe.length>0?Pe[0]:void 0,Ye=na(je,He),J=()=>{f(h===b?"":h)};return p.jsxs("div",{children:[p.jsxs(c,{className:we.inntektTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Andel"})}),Y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.AndelIArbeid"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Refusjonskrav"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Beregningsgrunnlag"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Fordeling"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.Inntektskategori"})}),p.jsx(c.HeaderCell,{scope:"col"})]})}),p.jsx(c.Body,{children:H})]}),!n&&!r&&p.jsx(ee,{icon:p.jsx($i,{"aria-hidden":!0}),onClick:()=>E(MI(r)),type:"button",variant:"secondary",children:p.jsx(oe,{children:p.jsx(m,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&p.jsx(Ep,{className:we.benyttCheckbox,checked:h===b,onChange:J,children:"Benytt for alle perioder"}),Ye&&p.jsx(Yr,{children:Ye})]})},lT="_statusOk_1qsx9_1",kk={statusOk:lT},oT=rk.bind(kk),Qs=e=>e?N(e,xe).format(se):"-",dT=(e,n)=>n?p.jsx(x,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:Qs(e),tom:Qs(n)}})}):p.jsx(x,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:Qs(e)}})}),uT=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},gT=e=>{const n=uT(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},mT=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>gT(t)).reduce((t,a)=>t+a,0)},Il=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:a,beregningsgrunnlag:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:u,fordelingsperiode:k,fieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})=>k.fom?p.jsx(Ne,{className:e?kk.statusOk:oT(`fordelBeregningsgrunnlagPeriode--${k.fom}`),children:p.jsxs(Ne.Item,{open:t,children:[p.jsxs(Ne.Header,{onClick:()=>a(k.fom),children:[dT(k.fom,k.tom)," ",n?p.jsx(tk,{}):""]}),p.jsx(Ne.Content,{children:p.jsx(iT,{fieldName:u,readOnly:e,sumIPeriode:mT(s.beregningsgrunnlagPeriode,k.fom),skalIkkeRedigereInntekt:!k.skalRedigereInntekt,skalKunneEndreRefusjon:!!k.skalKunneEndreRefusjon,periodeFom:k.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:s,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:v,setFieldArrayToRepeat:f,fieldArrayToRepeat:b})})]})}):null,kT=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},vT=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!N(t).isBefore(N(n))},Nu=e=>{var n,r,t,a;if(!e)return;const s=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((a=e.arbeidsforhold)==null?void 0:a.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return V(e.besteberegningPrAar+s-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return V(e.overstyrtPrAar+s-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return V(e.beregnetPrAar+s-l)},pT=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?V(e.fordelingForrigeBehandlingPrAar):"")||"";Il.buildInitialValues=(e,n,r,t,a,s)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=kT(l,n);return{...QA(l,t,a,s),...ZA(l),andelIArbeid:YA(l.andelIArbeid||[]),fordelingForrigeBehandling:pT(l),fastsattBelop:WA(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:Nu(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?V(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||vT(o,r),beregningsgrunnlagPrAar:Nu(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:JA(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const vk="fordelBGPeriode",Tl=e=>vk+e,fT=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?ge(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:ge(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),Ct=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),yT=e=>Ct(e,Hr.GRADERING)||Ct(e,Hr.GRADERING_OPPHOERER),bT=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},pk=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function qu(e){const n=N(e.beregningsgrunnlagPeriodeFom).day()===6,r=N(e.beregningsgrunnlagPeriodeFom).day()===0,t=N(e.beregningsgrunnlagPeriodeTom).day()===6,a=N(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||a)}const jT=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function cT(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>jT(r))}function hT(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const AT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&pk(a,r));return!!(t===void 0||hT(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),IT=(e,n,r,t)=>{const a=e.fordelBeregningsgrunnlagAndeler||[],s=n.fordelBeregningsgrunnlagAndeler||[];if(a.length!==s.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const u=qu(r),k=qu(o),v=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(u||k)&&!v?!0:!AT(a,s)},TT=(e,n)=>e.some(r=>{const t=n.find(a=>a.aktivitetStatus===r.aktivitetStatus&&a.inntektskategori===r.inntektskategori&&pk(a,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),RT=(e,n,r,t,a)=>{var s,l;const o=t[t.length-1];return((s=r.fordelBeregningsgrunnlagAndeler)==null?void 0:s.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||yT(e)||TT(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||cn(r,a)&&!cn(o,a)?!1:Ct(e,Hr.ARBEIDSFORHOLD_AVSLUTTET)?bT(e,n):Ct(e,Hr.ENDRING_I_AKTIVITETER_SØKT_FOR)?IT(r,o,e,n):!0},ET=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},NT=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const a=e.find(s=>s.beregningsgrunnlagPeriodeFom===t.fom);if(a){if(RT(a,e,t,r,n))return ET(r,t),r;r.push({...t})}return r},qT=e=>({fom:n,tom:r})=>(N(n).isSame(N(e.fom))||N(n).isAfter(e.fom))&&(e.tom===null||N(r).isSame(N(e.tom))||N(r).isBefore(N(e.tom))),ST=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},PT=e=>({andelsnr:ST(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:fT(e)}),BT=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},FT=(e,n,r,t)=>t.filter(qT(r)).filter(a=>a.skalRedigereInntekt||a.skalKunneEndreRefusjon).map(a=>({andeler:e[Tl(n)].map(PT),fom:BT(a.fom),tom:a.tom})),Rl=(e,n,r)=>e.filter(t=>cT(t)).reduce(NT(n,r),[]),xT="_lessPadding_1i5bl_1",wT={lessPadding:xT},_T=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},OT=(e,n,r,t)=>{const a=[],s=Rl(e,r,t);for(let l=0;l<s.length;l+=1){const{skalRedigereInntekt:o}=s[l];o&&cn(s[l])&&FT(n,l,s[l],e).forEach(u=>a.push(u))}return a};function DT(e,n){return cn(n,e.forlengelseperioder)}function VT(e,n){var r;return!cn(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const vt=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[u,k]=R.useState([]),[v,f]=R.useState("");R.useEffect(()=>{const y=n.filter(j=>DT(a,j)).filter(j=>j.skalKunneEndreRefusjon||j.skalRedigereInntekt).filter(j=>!!j.fom).map(j=>j.fom);k(y)},[n]);const b=y=>{if(u.includes(y)){const j=u.filter(A=>A!==y);k(j)}else{const j=u.map(A=>A);j.push(y),k(j)}};return p.jsx(rp,{className:wT.lessPadding,children:p.jsx(B,{gap:"2",children:Rl(n,t,a.forlengelseperioder).map((y,j)=>p.jsx($.Fragment,{children:p.jsx(Il,{readOnly:e||!cn(y,a.forlengelseperioder),erVurdertTidligere:VT(y,a),fordelingsperiode:y,fordelBGFieldArrayName:Tl(j),open:u?u.filter(A=>A===y.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:b,beregningsgrunnlag:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:f,fieldArrayToRepeat:v})},vk+y.fom))})})};vt.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:OT(n,e,r,t)});vt.buildInitialValues=(e,n,r,t)=>{const a={};if(!e)return a;const s=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===ue.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return Rl(e,l,n.forlengelseperioder).forEach((o,u)=>{const k=_T(o,l);a[Tl(u)]=Il.buildInitialValues(o,k,n.skjaeringstidspunktBeregning,s,r,t)}),a};const MT=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},pt=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=r.beregningsgrunnlagPeriode,o=MT(r);return p.jsx(vt,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})};pt.buildInitialValues=(e,n,r,t)=>vt.buildInitialValues(e,n,r,t);pt.transformValues=(e,n,r,t)=>vt.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:GT}=Ve,LT=(e,n)=>n.some(r=>r.definisjon===e),KT=(e,n,r,t)=>{const a=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||a.push(p.jsx(m,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:Xt,br:p.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),a},$T=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),UT=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:s})=>s!=null).filter(({perioderMedGraderingEllerRefusjon:s})=>$T(s||[])),a=e.filter(({perioderMedGraderingEllerRefusjon:s})=>s==null?void 0:s.map(({erSøktYtelse:l})=>l).includes(!0));return KT(n,r,t,a)},HT=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return LT(GT,e.avklaringsbehov)?UT(t):[]},YT=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=HT(n);return e?p.jsx(p.Fragment,{}):p.jsx(Zn,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:Ii}=Ve,CT=(e,n)=>n.some(r=>r.definisjon===e),fk=e=>{const n=e.find(r=>r.definisjon===Ii);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Ii}`);return n},zT="begrunnelse",yk=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},JT=(e,n)=>{if(!CT(Ii,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...pt.transformValues(e,yk(n),r,n.forlengelseperioder)}},WT=(e,n,r,t)=>{const a=yk(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...mt.buildInitialValues(fk(e.avklaringsbehov),zT),...pt.buildInitialValues(a,e,t,r)}},ZT=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})=>{const l=fk(r.avklaringsbehov),o=!hl(l.status),u=he(),k=u.watch(`FORDEL_BEREGNING_FORM.${s}.begrunnelse`);return p.jsxs(B,{gap:"5",children:[p.jsxs(B,{gap:"2",children:[p.jsx(YT,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),p.jsx(pt,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:a,fieldIndex:s})]}),p.jsxs("div",{children:[p.jsx(mt,{name:`FORDEL_BEREGNING_FORM.${s}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!k}),p.jsx(En,{ident:l.vurdertAv,date:l.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(pa,{isSubmittable:n,isReadOnly:e,isSubmitting:u.formState.isSubmitting,isDirty:u.formState.isDirty})})]})},{FORDEL_BEREGNINGSGRUNNLAG:QT}=Ve,zt="FORDEL_BEREGNING_FORM",XT=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},eR=(e,n,r)=>{const t=e[zt].filter(a=>ar(r,a.periode.fom)).map(a=>JT(a,XT(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:QT}};function bk(e){return e.avklaringsbehov.some(n=>n.definisjon===Ve.FORDEL_BEREGNINGSGRUNNLAG)}const nR=(e,n,r,t)=>({[zt]:e.filter(bk).map(a=>WT(a,ut(n,a.vilkårsperiodeFom),r,t))}),rR=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:a,vilkårsperioder:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,setFordelingFormIsDirty:v})=>{const f=$e({defaultValues:u!=null&&u.FORDEL_BEREGNING_FORM?u:nR(a,s,o,l)}),{formState:{dirtyFields:b,isSubmitted:y,errors:j,isDirty:A},control:h,trigger:T}=f;R.useEffect(()=>{v(A)},[A]),R.useEffect(()=>{var q;y&&(q=b[zt])!=null&&q[e]&&T()},[e]);const{fields:E}=Ze({name:zt,control:h});return p.jsx(Ki,{errorMessage:"Noe gikk galt ved visning av fordeling",children:p.jsx(Ue,{formMethods:f,onSubmit:q=>{Object.keys(j).length===0&&t(eR(q,a,s))},setDataOnUnmount:k,children:E.map(q=>{const S=a.findIndex(P=>P.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp);return p.jsx("div",{style:{display:S===e?"block":"none"},children:p.jsx(ZT,{submittable:r,readOnly:n||!ar(s,a[S].vilkårsperiodeFom),beregningsgrunnlag:a[S],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:a.filter(bk).findIndex(P=>P.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp)})},q.id)})})})},tR=(e,n)=>e.map(r=>p.jsx("div",{children:r&&r.erTildeltRefusjon?p.jsx(I,{children:n}):p.jsx(I,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),aR=e=>{if(!e)return;const n=e.tom===Se?void 0:e.tom;return p.jsx(I,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:pe(e.fom),tom:n?pe(n):""}})})},sR=e=>e.map(n=>p.jsx("div",{children:aR(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),iR=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(I,{children:Ai(e,n)})}),p.jsx(c.DataCell,{children:tR(e.tidligereUtbetalinger||[],Ai(e,n))}),p.jsx(c.DataCell,{children:sR(e.tidligereUtbetalinger||[])})]}),lR="_tabellContainer_9a5fi_1",oR={tabellContainer:lR},dR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,uR=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return p.jsx("div",{className:oR.tabellContainer,children:p.jsxs(c,{children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),p.jsx(c.Body,{children:t.map(a=>p.jsx(iR,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:a},dR(a)))})]})})},gR="_bredde_1lhuf_1",mR="_tekstMidtstilt_1lhuf_4",Xs={bredde:gR,tekstMidtstilt:mR},kR="REFUSJON_ENDRING_DATO",vR="DELVIS_REFUSJON_FØR_START_BELØP",jk=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,Jt=e=>jk(kR,e),El=e=>jk(vR,e),pR=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,ft=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:a,vilkårperiodeFieldIndex:s})=>{const l=Ai(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",u=he().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${Jt(e)}`),k=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,v=pR(a,u),f=R.useCallback(y=>p.jsx("b",{children:y}),[]),b=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return p.jsxs(B,{children:[p.jsx(I,{children:p.jsx(m,{id:o,values:{ag:l,dato:pe(e.nyttRefusjonskravFom),b:f}})}),p.jsxs(F,{gap:"6",children:[p.jsx("div",{className:Xs.tekstMidtstilt,children:p.jsx(I,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),p.jsx(Un,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${Jt(e)}`,isReadOnly:n,validate:n?[]:[W,bn,ea(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),b&&!v&&!k&&p.jsxs(F,{gap:"6",children:[p.jsx("div",{className:Xs.tekstMidtstilt,children:p.jsx(I,{children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),p.jsx(ve,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${s}.${El(e)}`,className:Xs.bredde,validate:n?[]:[W,Qe(e.maksTillattDelvisRefusjonPrMnd)],parse:Fe,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};ft.buildInitialValues=e=>{const n={};return n[Jt(e)]=e.fastsattNyttRefusjonskravFom||"",n[El(e)]=V(e.fastsattDelvisRefusjonPrMnd)||"",n};ft.transformValues=(e,n,r)=>{var t,a;const s=Jt(n),l=e[s];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const u=El(n);o=ge(e[u])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(a=n.arbeidsgiver)==null?void 0:a.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const Su="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:fR}=Ve,ck=e=>e?e.find(n=>n.definisjon===fR):void 0,yR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,bR=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],a=ck(e.avklaringsbehov);let s={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:a&&a.begrunnelse?a.begrunnelse:void 0};return t.forEach(l=>{s={...s,...ft.buildInitialValues(l)}}),s},jR=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(a=>ft.transformValues(e,a,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},cR=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:a,formSubmittes:s})=>{var l;const o=!r.avklaringsbehov.some(y=>y.definisjon===Ve.VURDER_REFUSJON_BERGRUNN),u=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],k=ck(r.avklaringsbehov),v=k?hl(k.status):!1,f=he(),b=f.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${a}.begrunnelse`);return p.jsxs(B,{gap:"4",children:[v&&p.jsx(Zn,{children:[p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),p.jsx(ie,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),p.jsx(uR,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),u.map(y=>p.jsx(ft,{refusjonAndel:y,readOnly:o||n,erAksjonspunktÅpent:v,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:Su,vilkårperiodeFieldIndex:a},yR(y))),p.jsxs("div",{children:[p.jsx(mt,{name:`${Su}.${a}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!b}),p.jsx(En,{ident:k==null?void 0:k.vurdertAv,date:k==null?void 0:k.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(pa,{isSubmittable:e,isReadOnly:o||n,isSubmitting:s,isDirty:f.formState.isDirty})})]})},Wt="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:hR}=Ve,AR=(e,n)=>({[Wt]:e.map(r=>bR(r,ut(n,r.vilkårsperiodeFom)))}),IR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},TR=(e,n)=>n.filter(r=>r.skjaeringstidspunktBeregning===e).some(r=>r.avklaringsbehov.some(t=>t.definisjon==="VURDER_REFUSJONSKRAV")),RR=(e,n,r)=>{const t=e[Wt].filter(a=>ar(r,a.periode.fom)).filter(a=>TR(a.beregningsgrunnlagStp,n)).map(a=>jR(a,IR(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:hR}},ER=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:a,arbeidsgiverOpplysningerPerId:s,setFormData:l,formData:o,submitCallback:u,setRefusjonFormIsDirty:k})=>{const v=$e({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:AR(t,a)}),[f,b]=R.useState(!1),{formState:{dirtyFields:y,isSubmitted:j,errors:A,isDirty:h},control:T,trigger:E}=v;R.useEffect(()=>{k(h)},[h]),R.useEffect(()=>{var S;j&&(S=y[Wt])!=null&&S[e]&&E()},[e]);const{fields:q}=Ze({name:Wt,control:T});return p.jsx(Ki,{errorMessage:"Noe gikk galt ved visning av refusjon",children:p.jsx(Ue,{formMethods:v,onSubmit:S=>{Object.keys(A).length===0&&(b(!0),u(RR(S,t,a)))},setDataOnUnmount:l,children:q.map(S=>{const P=t.findIndex(D=>D.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return p.jsx("div",{style:{display:P===e?"block":"none"},children:p.jsx(cR,{submittable:n,readOnly:r||!ar(a,t[P].vilkårsperiodeFom),beregningsgrunnlag:t[P],arbeidsgiverOpplysningerPerId:s,vilkårperiodeFieldIndex:P,formSubmittes:f})},S.id)})})})};var Ti={exports:{}},NR=Ti.exports,Pu;function qR(){return Pu||(Pu=1,function(e,n){(function(r,t){e.exports=t()})(NR,function(){return function(r,t,a){t.prototype.isBetween=function(s,l,o,u){var k=a(s),v=a(l),f=(u=u||"()")[0]==="(",b=u[1]===")";return(f?this.isAfter(k,o):!this.isBefore(k,o))&&(b?this.isBefore(v,o):!this.isAfter(v,o))||(f?this.isBefore(k,o):!this.isAfter(k,o))&&(b?this.isAfter(v,o):!this.isBefore(v,o))}}})}(Ti)),Ti.exports}var SR=qR();const hk=nk(SR),Bu=e=>e===Se?"":N(e).format(se),PR=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=z(),[a,s]=R.useState(),l=R.useCallback(v=>{const f=N(v).format(xe);if(r(f),f){const b=n(f);b.sort((y,j)=>N(y.fom).diff(N(j.fom))),s(b)}},[n]),o=[v=>!e||!N(v).isAfter(N(e.fom))||N(v).isAfter(N(e.tom))],{datepickerProps:u,inputProps:k}=gp({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return p.jsxs(p.Fragment,{children:[p.jsx(Yl,{...u,children:p.jsx(Yl.Input,{...k,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})}),a&&p.jsxs("div",{children:[p.jsx(x,{size:"small",children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Resultat"})}),p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:N(a[0].fom).format(se),tom:Bu(a[0].tom)}})}),p.jsx("li",{children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:N(a[1].fom).format(se),tom:Bu(a[1].tom)}})})]})]})]})},BR=e=>e?e.tom===Se?!0:Ig(e.fom,e.tom,!0)>1:!1,FR=e=>e.map(n=>({fom:n.fom,tom:n.tom})),xR=(e,n)=>{const r=N(e).format(se);if(n&&n!==Se){const t=N(n).format(se);return r.concat(" - ",t)}return r.concat(" - ")},wR=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:a})=>{const s=z(),[l,o]=R.useState(void 0),[u,k]=R.useState(void 0),v=R.useMemo(()=>FR(e),[e]),f=R.useCallback(()=>{l&&u&&(r(l),a())},[e,l]),b=R.useCallback(j=>{const A=j.target.value,h=v.find(T=>T.fom===A);k(h||void 0)},[]),y=u&&BR(u);return t?p.jsxs(jt,{width:"500px",open:t,onClose:a,"aria-label":"Del opp periode",children:[p.jsx(jt.Header,{children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Tittel"})}),p.jsx(jt.Body,{children:p.jsxs(B,{gap:"4",children:[p.jsxs(up,{label:s.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:b,size:"small",children:[p.jsx("option",{value:void 0,children:"Velg periode"}),v.map(j=>p.jsx("option",{value:j.fom,children:xR(j.fom,j.tom)},j.fom))]}),y&&p.jsx(PR,{forhåndsvisPeriodesplitt:n,periode:u,setValgtDato:o})]})}),p.jsxs(jt.Footer,{children:[p.jsx(ee,{size:"small",variant:"secondary",onClick:a,disabled:!1,autoFocus:!0,type:"button",children:p.jsx(m,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})}),p.jsx(ee,{size:"small",variant:"primary",onClick:f,disabled:!l,autoFocus:!0,type:"button",children:p.jsx(m,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})]})]}):null};N.extend(hk);const _R="2023-05-01";function OR(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const DR=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(s=>t.push(s));const a={...r,inntektsforholdListe:t.filter(OR()),tom:n.tom};e.push(a)},VR=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let a=0;a<r.length;a+=1){const s=r[a],l=t.find(o=>o.aktivitetStatus===s.aktivitetStatus&&o.arbeidsgiverId===s.arbeidsgiverId&&o.arbeidsforholdId===s.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==s.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==s.skalRedusereUtbetaling)return!1}return!0},Fu=(e,n)=>Ig(e,n,!0)>2,MR=(e,n)=>{const r=n.tom,t=e.fom;return N(r).isBefore(N(t))?Fu(r,t):Fu(t,r)},GR=(e,n,r)=>{if(N(e.fom).isSame(N(_R)))return!1;const t=n[n.length-1],a=cn(e,r);return a&&!cn(t,r)||a&&MR(e,t)?!1:VR(e,t)},LR=e=>(n,r)=>n.length===0?(n.push({...r}),n):GR(r,n,e)?(DR(n,r),n):(n.push({...r}),n),Ak=(e,n)=>e.reduce(LR(n),[]);function Ik(e,n){var r;return!cn(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const Tk=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===ue.ARBEIDSTAKER?r?kt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ue.FRILANSER?"Frilanser":e.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===ue.DAGPENGER?"Dagpenger":""},KR=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===ue.ARBEIDSTAKER?r?kt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===ue.FRILANSER?"Frilanser":e.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},$R="_tilkommetAktivitet_1quo5_1",UR="_aktivitetContainer_1quo5_4",HR="_aktivitetTable_1quo5_7",YR="_aksjonspunktContainer_1quo5_16",CR="_aksjonspunktContainerLukketAP_1quo5_21",zR="_bruttoInntektContainer_1quo5_26",JR="_bruttoInntektCurrency_1quo5_29",WR="_inntektsmeldingTag_1quo5_37",ZR="_inntektColumn_1quo5_40",Le={tilkommetAktivitet:$R,aktivitetContainer:UR,aktivitetTable:HR,aksjonspunktContainer:YR,aksjonspunktContainerLukketAP:CR,bruttoInntektContainer:zR,bruttoInntektCurrency:JR,inntektsmeldingTag:WR,inntektColumn:ZR},QR=e=>ge(e)>0?null:`Du kan ikke registrere 0,- i inntekt, da dette ikke vil medføre gradering mot inntekt. 
       Hvis arbeidsforholdet ikke medfører inntekter enda, men kanskje vil det senere, velger du nei. 
       Informer også bruker om at de må melde fra hvis de begynner å jobbe for denne arbeidsgiveren.`,XR=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},eE=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:a,field:s,arbeidsgiverOpplysningerPerId:l})=>{const o=he(),u=z(),k=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`),v=()=>{switch(s.aktivitetStatus){case ue.ARBEIDSTAKER:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. ",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{})," Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.",p.jsx("br",{}),p.jsx("br",{})," Husk å begrunne fastsatt inntekt for alle periodene."]});case ue.FRILANSER:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra a-inntekt eller fra bruker selv.",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{}),"Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt eller be bruker forklare hva som er avtalt.",p.jsx("br",{}),p.jsx("br",{}),"Husk å begrunne fastsatt inntekt for alle periodene."]});case ue.SELVSTENDIG_NAERINGSDRIVENDE:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Bruk som hovedregel opplysninger fra søknaden.",p.jsx("br",{}),p.jsx("br",{}),"Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Du kan for eksempel be om dokumentasjon på foreløpig resultatregnskap, innbetalt forskuddsskatt og lignende.",p.jsx("br",{}),p.jsx("br",{}),"Husk å begrunne fastsatt inntekt for alle periodene."]});default:return p.jsxs(p.Fragment,{children:["Her skal du fastsette den inntekten bruker ville hatt fremover ved fullt arbeid i sin «normalarbeidstid». Dette vurderes helhetlig ut fra opplysninger fra inntektsmelding, a-inntekt eller fra bruker selv. ",p.jsx("br",{}),p.jsx("br",{}),"Det er viktig at det er samsvar mellom forventet inntekt sett opp mot den normalarbeidstiden bruker ville hatt hvis de jobbet fullt. Bruk opplysninger om arbeidstid i Aa-reg og fra søknaden.",p.jsx("br",{}),p.jsx("br",{})," Er du usikker på arbeidstid og/eller inntekt, må du kontakte bruker for avklaring. Spesielt ved varierende inntekt og arbeidstid, kan det være behov for å utrede inntektsforholdet. Du kan for eksempel be om arbeidskontrakt, innbetalt forskuddsskatt, foreløpig resultatregnskap og lignende.",p.jsx("br",{}),p.jsx("br",{})," Husk å begrunne fastsatt inntekt for alle periodene."]})}},f=()=>s.aktivitetStatus===ue.SELVSTENDIG_NAERINGSDRIVENDE?u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):s.aktivitetStatus===ue.FRILANSER?u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:KR(s,l)});return p.jsxs(B,{gap:"4",children:[p.jsx(Te,{label:f(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.skalRedusereUtbetaling`,radios:[{value:"true",label:u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[W],isTrueOrFalseSelection:!0}),k===!1&&p.jsx(Ie,{size:"small",variant:"info",children:u.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})}),k&&p.jsxs(p.Fragment,{children:[p.jsxs(B,{gap:"1",children:[p.jsx(x,{size:"small",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),p.jsx(qe,{header:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:v()})]}),p.jsxs("div",{className:Le.bruttoInntektContainer,children:[p.jsx(ve,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${a}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,htmlSize:9,parse:Fe,validate:[W,Qe(178956970),QR]}),p.jsx("span",{className:Le.bruttoInntektCurrency,children:"kr"})]})]})]})},xu=e=>!!e&&+e>0,nE=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=z(),t=s=>{const l=[];return s.inntektsforholdListe.forEach(o=>{const u=xu(o.bruttoInntektPrÅr),k=xu(o.inntektFraInntektsmeldingPrÅr);l.push(p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(I,{size:"small",children:Tk(o,e)})}),p.jsx(c.DataCell,{children:p.jsx(I,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(u||k)&&p.jsx(c.DataCell,{children:p.jsxs(I,{size:"small",children:[u&&p.jsxs(p.Fragment,{children:[Ot(o.bruttoInntektPrÅr||0),p.jsx(Cr,{})]}),k&&!u&&p.jsxs(p.Fragment,{children:[Ot(o.inntektFraInntektsmeldingPrÅr||0),p.jsx(ia,{className:Le.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},XR(o)))}),l},a=n.inntektsforholdListe.some(s=>s.bruttoInntektPrÅr);return p.jsx("div",{className:Le.aktivitetContainer,children:p.jsxs(c,{className:Le.aktivitetTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling"})}),a&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!a&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(c.Body,{children:t(n)})]})})},Rt=e=>!!e&&+e>0,rE=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:a,erAksjonspunktÅpent:s,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:u,avklaringsbehov:k})=>{const{control:v,formState:f}=he(),{fields:b}=Ze({control:v,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),y=n.inntektsforholdListe.some(h=>Rt(h.bruttoInntektPrÅr)||Rt(h.inntektFraInntektsmeldingPrÅr)),j=n.inntektsforholdListe.some(h=>!!h.periode),A=h=>{const T=[],{inntektsforholdListe:E}=h;return E.forEach(q=>{const S=Rt(q.bruttoInntektPrÅr),P=Rt(q.inntektFraInntektsmeldingPrÅr);T.push(p.jsxs(c.Row,{children:[p.jsx(c.DataCell,{children:p.jsx(I,{size:"small",children:Tk(q,o)})}),(S||P||j)&&p.jsx(c.DataCell,{className:Le.inntektColumn,children:p.jsxs(I,{size:"small",children:[S&&!P&&p.jsxs(p.Fragment,{children:[Ot(q.bruttoInntektPrÅr||0),p.jsx(Cr,{})]}),P&&p.jsxs(p.Fragment,{children:[Ot(q.inntektFraInntektsmeldingPrÅr||0),p.jsx(ia,{className:Le.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),q.periode&&p.jsx(c.DataCell,{className:Le.periodeColumn,children:p.jsx(I,{size:"small",children:p.jsx(Ge,{dateStringFom:q.periode.fom,dateStringTom:q.periode.tom})})})]},q.arbeidsgiverId||q.aktivitetStatus))}),T};return p.jsxs(B,{gap:"4",children:[p.jsx("div",{className:Le.aktivitetContainer,children:p.jsxs(c,{className:Le.aktivitetTable,children:[p.jsx(c.Header,{children:p.jsxs(c.Row,{children:[p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!y&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})}),j&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.Periode"})}),!j&&p.jsx(c.HeaderCell,{scope:"col",children:p.jsx(m,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),p.jsx(c.Body,{children:A(n)})]})}),p.jsxs(B,{gap:"4",className:s?Le.aksjonspunktContainer:Le.aksjonspunktContainerLukketAP,children:[b.map((h,T)=>p.jsx($.Fragment,{children:p.jsx(eE,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:T,field:h,readOnly:a,arbeidsgiverOpplysningerPerId:o},h.id)},h.id)),u&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[p.jsx(We,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:a,validate:[W]}),p.jsx(En,{ident:k==null?void 0:k.vurdertAv,date:k==null?void 0:k.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(pa,{isSubmittable:l,isReadOnly:a,isSubmitting:f.isSubmitting,isDirty:f.isDirty})})]})]})]})},tE="_statusOk_1qsx9_1",wu={statusOk:tE},ei=e=>e?N(e,xe).format(se):"-",_u=(e,n)=>!n||n===Se?p.jsx(x,{size:"medium",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:ei(e)}})}):p.jsx(x,{size:"medium",children:p.jsx(m,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:ei(e),tom:ei(n)}})}),aE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:a,submittable:s,erAksjonspunktÅpent:l,fields:o})=>{const[u,k]=R.useState([]),[v,f]=R.useState([]),[b,y]=R.useState([]),j=he();R.useEffect(()=>{var S,P;const D=(P=(S=e.faktaOmFordeling)==null?void 0:S.vurderNyttInntektsforholdDto)==null?void 0:P.vurderInntektsforholdPerioder;if(D){const _=Ak(D,e.forlengelseperioder);k(_);const U=v.map(w=>w),Y=o.map(w=>w.fom);Y.filter(w=>!b.includes(w)).forEach(w=>U.push(w)),f(U),y(Y)}},[e,o.length]);const A=u.filter(S=>Ik(S,e)),h=e==null?void 0:e.avklaringsbehov.find(S=>S.definisjon===Ve.VURDER_NYTT_INNTKTSFRHLD),T=S=>{if(v.includes(S)){const P=v.filter(D=>D!==S);f(P)}else{const P=v.map(D=>D);P.push(S),f(P)}},E=S=>{const P=N(S),D=u.find(_=>!N(_.fom).isAfter(P)&&!N(_.tom).isBefore(P));if(!D)throw new Error(`Finner ikke periode som overlapper med fom ${S}`);return D},q=S=>()=>T(S);return!u||u.length<1?null:p.jsxs(B,{gap:"6",children:[p.jsxs(Ne,{className:wu.statusOk,children:[A.map(S=>p.jsxs(Ne.Item,{open:v.filter(P=>P===S.fom).length>0,children:[p.jsxs(Ne.Header,{onClick:q(S.fom),children:[_u(S.fom,S.tom)," ",p.jsx(tk,{})]}),p.jsx(Ne.Content,{children:p.jsx(nE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:S})})]},S.fom)),o.map((S,P)=>p.jsxs(Ne.Item,{open:v.filter(D=>D===S.fom).length>0,children:[p.jsx(Ne.Header,{onClick:q(S.fom),children:_u(S.fom,S.tom)}),p.jsx(Ne.Content,{children:p.jsx(rE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:E(S.fom),formName:r,formFieldIndex:t,periodeFieldIndex:P,readOnly:a,erAksjonspunktÅpent:l,submittable:s,skalViseBegrunnelse:o.length===1,avklaringsbehov:h})})]},S.fom))]}),o.length>1&&p.jsxs(B,{gap:"4",className:wu.aktivitetContainer,children:[p.jsxs("div",{children:[p.jsx(We,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:a,validate:[W]}),p.jsx(En,{ident:h==null?void 0:h.vurdertAv,date:h==null?void 0:h.vurdertTidspunkt})]}),p.jsx("div",{children:p.jsx(pa,{isSubmittable:s,isReadOnly:a,isSubmitting:j.formState.isSubmitting,isDirty:j.formState.isDirty})})]})]})},ni=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),sE=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:a,erAksjonspunktÅpent:s,arbeidsgiverOpplysningerPerId:l})=>{var o,u;const k=z(),[v,f]=R.useState(!1),{control:b,watch:y}=he(),{fields:j,remove:A,insert:h}=Ze({control:b,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});j.sort((w,M)=>N(w.fom).diff(N(M.fom)));const T=(u=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:u.vurderInntektsforholdPerioder,E=()=>{const w=T==null?void 0:T.flatMap(M=>M.inntektsforholdListe.map(L=>L.aktivitetStatus)).reduce((M,L)=>(M.some(K=>K===L)||M.push(L),M),[]);return(w?w.length:0)>1?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):ni(ue.SELVSTENDIG_NAERINGSDRIVENDE,T)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):ni(ue.FRILANSER,T)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):ni(ue.DAGPENGER,T)?k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):k.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},q=()=>s?p.jsxs(Ie,{size:"small",variant:"warning",children:[p.jsx(ie,{size:"xsmall",level:"3",children:E()}),k.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):p.jsxs(p.Fragment,{children:[p.jsxs(x,{size:"small",children:[k.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),E()]}),p.jsx(I,{size:"small",children:k.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),S=(w,M,L,K)=>{const H=y(`${e}.${r}.perioder.${L}.inntektsforhold.${K}.skalRedusereUtbetaling`),C=y(`${e}.${r}.perioder.${L}.inntektsforhold.${K}.bruttoInntektPrÅr`);return{aktivitetStatus:w.aktivitetStatus,arbeidsgiverIdent:w.arbeidsgiverIdent,arbeidsforholdId:w.arbeidsforholdId,bruttoInntektPrÅr:M?C:void 0,skalRedusereUtbetaling:M?H:void 0}},P=(w,M,L)=>!N(w).isAfter(N(L))&&!N(M).isBefore(N(L)),D=R.useCallback(w=>{const M=j.find(C=>P(C.fom,C.tom,w));if(!M)throw new Error(`Finner ikke field somme inneholder dato ${w}`);const L=N(w).subtract(1,"day"),K={fom:N(M.fom).format(xe),tom:L.format(xe)},H={fom:N(w).format(xe),tom:M.tom};return[K,H]},[j]),_=R.useCallback(w=>{const M=j.find(je=>P(je.fom,je.tom,w));if(!M)throw new Error(`Finner ikke field somme inneholder dato ${w}`);const L=D(w),K=j.indexOf(M),H=M.inntektsforhold||[],C={inntektsforhold:H.map((je,Pe)=>S(je,!0,K,Pe)),fom:L[0].fom,tom:L[0].tom},le={inntektsforhold:H.map((je,Pe)=>S(je,!1,K,Pe)),fom:L[1].fom,tom:L[1].tom};A(K),h(K,[C,le])},[j]),U=R.useCallback(()=>{f(!0)},[v]),Y=R.useCallback(()=>{f(!1)},[v]);return p.jsxs(B,{gap:"8",children:[q(),!!T&&s&&p.jsx(p.Fragment,{children:p.jsx(Ie,{size:"small",variant:"info",title:"",children:p.jsx(m,{id:"TilkommetAktivitet.AksjonspunktAlert"})})}),p.jsxs(B,{gap:"0",children:[p.jsxs(F,{justify:"space-between",children:[p.jsx(ie,{size:"small",level:"3",children:p.jsx(m,{id:"TilkommetAktivitet.Heading"})}),p.jsx(ee,{variant:"tertiary",loading:!1,disabled:t,onClick:U,size:"small",type:"button",icon:p.jsx(Ip,{height:32,width:32}),children:p.jsx(m,{id:"TilkommetAktivitet.Modal.Knapp"})})]}),v&&p.jsx(wR,{fields:j,forhåndsvisPeriodesplitt:D,lukkModal:Y,skalViseModal:v,utførPeriodesplitt:_}),p.jsx(aE,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:j,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:s,submittable:a})]})]})};N.extend(hk);const{VURDER_NYTT_INNTKTSFRHLD:Ri}=Ve,Vr="VURDER_TILKOMMET_AKTIVITET_FORM",Rk=e=>{const n=e.find(r=>r.definisjon===Ri);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Ri}`);return n},iE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function lE(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Ak(t,e.forlengelseperioder).filter(a=>!Ik(a,e))}const oE=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:V(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),dE=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>oE(n))}),uE=(e,n)=>{const r=Rk(e.avklaringsbehov),t=lE(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:ut(n,e.vilkårsperiodeFom).periode,perioder:t.map(a=>dE(a))}},gE=(e,n)=>({[`${Vr}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===Ve.VURDER_NYTT_INNTKTSFRHLD)).map(r=>uE(r,n))}),mE=(e,n)=>{const r=N(e.fom).isBetween(n.fom,n.tom,"day","[]")||N(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=N(n.fom).isBetween(e.fom,e.tom,"day","[]")||N(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},kE=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),vE=(e,n)=>{var r,t;const a=e.perioder,s=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>a.filter(o=>mE(o,l)).map(o=>{const u=o.inntektsforhold.filter(k=>kE(k,l)).map(k=>{const v=!!k.skalRedusereUtbetaling,f=v?ge(k.bruttoInntektPrÅr):void 0;return{aktivitetStatus:k.aktivitetStatus,arbeidsgiverId:k.arbeidsgiverIdent,arbeidsforholdId:k.arbeidsforholdId,skalRedusereUtbetaling:v,bruttoInntektPrÅr:f}});return{fom:N(o.fom).isBefore(N(l.fom))?l.fom:o.fom,tom:N(o.tom).isAfter(N(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:u}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:s}},pE=(e,n,r)=>{const t=e[Vr].filter(a=>ar(r,a.periode.fom)).map(a=>vE(a,iE(a.periode.fom,n)));return{begrunnelse:t.map(a=>a.begrunnelse).reduce((a,s)=>a!==null?`${a} ${s}`:s),grunnlag:t,kode:Ri}},fE=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:a,readOnly:s,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:u,setTilkommetAktivitetFormIsDirty:k})=>{const v=$e({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:gE(t,o)}),{formState:{dirtyFields:f,isSubmitted:b,errors:y,isDirty:j},trigger:A,control:h}=v;R.useEffect(()=>{k(j)},[j]),R.useEffect(()=>{var P;b&&(P=f[Vr])!=null&&P[e]&&A()},[e]);const{fields:T}=Ze({name:Vr,control:h}),E=t[e],q=Rk(E.avklaringsbehov),S=q?hl(q.status):!1;return p.jsx(Ki,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:p.jsx("div",{className:Le.tilkommetAktivitet,children:p.jsx(Ue,{formMethods:v,onSubmit:P=>{Object.keys(y).length===0&&a(pE(P,t,o))},setDataOnUnmount:r,children:T.map((P,D)=>{const _=t.findIndex(U=>U.skjaeringstidspunktBeregning===P.beregningsgrunnlagStp);return p.jsx("div",{style:{display:_===e?"block":"none"},children:p.jsx(sE,{formName:Vr,beregningsgrunnlag:t[_],formFieldIndex:D,readOnly:s||!ar(o,t[_].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:S,arbeidsgiverOpplysningerPerId:u})},P.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:yE,VURDER_REFUSJON_BERGRUNN:bE,VURDER_NYTT_INNTKTSFRHLD:jE}=Ve,cE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,hE=e=>!!(e&&e.refusjonTilVurdering),AE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,ri=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,IE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:a,kodeverkSamling:s,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,skalHåndtereNyInntekt:v})=>{const[f,b]=R.useState(!1),[y,j]=R.useState(!1),[A,h]=R.useState(!1),T=ri(t[e].avklaringsbehov,yE),E=ri(t[e].avklaringsbehov,bE),q=ri(t[e].avklaringsbehov,jE),S=v&&q&&AE(t[e]),P=T&&cE(t[e]),D=E&&hE(t[e]);return p.jsxs(B,{gap:"2",children:[S&&p.jsx(fE,{aktivtBeregningsgrunnlagIndeks:e,formData:u,setFormData:k,submittable:l&&!y&&!A,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:a,setTilkommetAktivitetFormIsDirty:b}),D&&p.jsx(ER,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!A,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,vilkarperioder:a,setRefusjonFormIsDirty:j}),P&&p.jsx(rR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!f&&!y,readOnly:n,submitCallback:r,kodeverkSamling:s,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k,vilkårsperioder:a,setFordelingFormIsDirty:h})]})},TE=Me(Al),{FORDEL_BEREGNINGSGRUNNLAG:RE,VURDER_REFUSJON_BERGRUNN:EE,VURDER_NYTT_INNTKTSFRHLD:NE}=Ve,qE=(e,n)=>{const r=ut(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:a}=r.periode;return a!==null?`${N(t).format(se)} - ${N(a).format(se)}`:`${N(t).format(se)} - `}return`${N(e.vilkårsperiodeFom).format(se)}`},Ek=(e,n)=>e.avklaringsbehov.some(r=>r.definisjon===EE||r.definisjon===RE||r.definisjon===NE&&n),SE=(e,n,r)=>Ek(e,r)&&ar(n,e.vilkårsperiodeFom),PE=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:a,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:u,skalHåndtereNyInntekt:k=!0})=>{const v=n.filter(j=>Ek(j,k)),[f,b]=R.useState(0);if(v.length===0)return null;const y=v.length>1;return p.jsx(De,{value:TE,children:p.jsxs(B,{gap:"2",children:[y&&p.jsx(ir,{value:f.toString(),onChange:j=>b(Number(j)),children:p.jsx(ir.List,{children:v.map((j,A)=>p.jsx(ir.Tab,{value:A.toString(),label:qE(j,e.perioder),className:SE(j,e.perioder,k)?"harAksjonspunkt":""},j.skjaeringstidspunktBeregning))})}),p.jsx(IE,{aktivtBeregningsgrunnlagIndeks:f,kodeverkSamling:r,submitCallback:t,readOnly:a,beregningsgrunnlagListe:v,vilkarperioder:e.perioder,submittable:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:u,skalHåndtereNyInntekt:k})]})})},Ou=[re.FORDEL_BEREGNINGSGRUNNLAG,re.VURDER_REFUSJON_BERGRUNN],BE=({arbeidsgiverOpplysningerPerId:e})=>{const n=Qn(Ou),{behandling:r}=R.use(Rn),t=Tn(r),{data:a,isFetching:s}=In(t.beregningsgrunnlagOptions(r));return i.jsx(Xn,{standardPanelProps:n,faktaPanelKode:Wn.FORDELING,faktaPanelMenyTekst:z().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Ou.some(l=>sa(l,r.aksjonspunkt)),children:s?i.jsx(An,{}):i.jsx(FE,{kodeverkSamling:n.alleKodeverk,beregningsgrunnlagVilkår:_E(n.behandling.vilkår,a),beregningsgrunnlagListe:OE(a),submitCallback:wE(n.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:n.readOnly,submittable:n.submittable})})},FE=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=_n();return i.jsx(PE,{...e,formData:n,setFormData:r})},xE=e=>{switch(e){case Ve.FORDEL_BEREGNINGSGRUNNLAG:return re.FORDEL_BEREGNINGSGRUNNLAG;case Ve.VURDER_REFUSJON_BERGRUNN:return re.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},wE=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:xE(a.kode),...a.grunnlag[0]}));return e(t)},_E=(e,n)=>{if(!e)return null;const r=e.find(t=>t.vilkarType&&t.vilkarType===Yn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[{avslagKode:r.avslagKode??void 0,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:n?n.skjaeringstidspunktBeregning:"",tom:Se},vilkarStatus:r.vilkarStatus}]}},OE=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];BE.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const qn=({tittel:e,children:n})=>i.jsxs(B,{gap:"1",children:[i.jsx(x,{size:"medium",children:e}),n]});qn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Nk=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:n})=>{const r=z();return i.jsxs(qn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};Nk.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const qk=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const a=z(),s=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(k=>e.tilknyttedeBehandlingIder.includes(k.uuid)),o=(()=>{const k=l.length;return s&&k>1?i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):s?i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):k===0?i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),u=[...l].sort((k,v)=>new Date(k.opprettet).getTime()-new Date(v.opprettet).getTime());return i.jsxs(qn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,i.jsx(Q,{children:u.map(k=>{var v;return i.jsx(Q.Item,{children:i.jsxs(B,{gap:"1",children:[i.jsx("span",{children:(v=t.BehandlingType.find(({kode:f})=>f===k.type))==null?void 0:v.navn}),i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",i.jsx(Dt,{dateTimeString:k.opprettet,separator:"kl"})]}),k.avsluttet?i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",i.jsx(Dt,{dateTimeString:k.avsluttet,separator:"kl"})]}):null]})},k.uuid)})})]})};qk.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const DE=e=>{const n=e.aktiveNaturalytelser.reduce((t,a)=>{const s=a.type;return s in t?{...t,[s]:[...t[s],a]}:{...t,[s]:[a]}},{}),r={};return Object.entries(n).forEach(([t,a])=>{const s=a.sort((l,o)=>Np({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=s.flatMap((l,o,u)=>{const k=u[o+1],v=l.periode.tomDato,f=k==null?void 0:k.periode.fomDato;return v===Se?[]:[{...l,periode:{fomDato:Vt(v,1),tomDato:f?Vt(f,-1):Se}}]})}),r},Sk=({inntektsmelding:e,alleKodeverk:n})=>{const r=z(),t=DE(e);return i.jsx(qn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?i.jsx("span",{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):i.jsx(B,{gap:"1",children:Object.entries(t).map(([a,s])=>{var l;return i.jsxs("div",{children:[i.jsx("span",{children:(l=n[an.NATURAL_YTELSE_TYPE].find(o=>o.kode===a))==null?void 0:l.navn}),i.jsx("ul",{children:s.map(o=>i.jsxs($.Fragment,{children:[i.jsxs("li",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",i.jsx(be,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Se&&i.jsxs("li",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",i.jsx(be,{dateString:o.periode.tomDato})]}),i.jsxs("li",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",V(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},a)})})})};Sk.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Pk=({kildeSystem:e})=>{const n=z(),r=R.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return i.jsx(qn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};Pk.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Bk=({inntektsmelding:e})=>{const n=z();return i.jsxs(qn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),i.jsxs("span",{children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Bk.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Fk=({inntektsmelding:e,fagsak:n,arbeidsgiverOpplysninger:r})=>{const t=`IM ${r.navn} - ${pe(e.motattDato)}`;return i.jsx(ee,{type:"button",onClick:()=>{pp(n.saksnummer,e.journalpostId,e.dokumentId,t)},variant:"secondary",size:"small",icon:i.jsx(fp,{}),children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};Fk.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""}}};const xk=({inntektsmelding:e})=>{const n=z();if(e.refusjonsperioder.length===0)return i.jsx(qn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:i.jsx("span",{children:e.refusjonPrMnd?V(e.refusjonPrMnd):i.jsx(m,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,a)=>new Date(t.fom).getTime()-new Date(a.fom).getTime());return i.jsxs(B,{gap:"0",children:[i.jsx("span",{children:"Krever refusjon"}),i.jsx("span",{children:V(e.refusjonPrMnd??0)}),i.jsx("span",{children:"Endringer i perioden:"}),i.jsx("ul",{children:r.map(t=>i.jsx("li",{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:V(t.refusjonsbeløp.verdi),fom:i.jsx(be,{dateString:t.fom})}})},t.indexKey))})]})};xk.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const wk=({startDatoPermisjon:e,ytelse:n})=>{const r=z();return e?i.jsxs(qn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[i.jsx("span",{children:e?i.jsx(be,{dateString:e}):"-"}),i.jsx("span",{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};wk.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const VE="_behandlingCircleIngen_131kr_1",ME="_behandlingCircleDenne_131kr_5",GE="_behandlingCircleAndre_131kr_9",LE="_container_131kr_13",KE="_ingenInntektsmeldinger_131kr_19",Mr={behandlingCircleIngen:VE,behandlingCircleDenne:ME,behandlingCircleAndre:GE,container:LE,ingenInntektsmeldinger:KE},_k=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:a,behandling:s}=hn(),l=z();return i.jsxs(B,{gap:"4",className:Mr.container,children:[i.jsxs(F,{gap:"4",justify:"space-between",align:"start",children:[i.jsxs(ie,{level:"3",size:"small",children:[i.jsx(m,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",i.jsx(Dt,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),i.jsx(Fk,{fagsak:a,inntektsmelding:e,arbeidsgiverOpplysninger:n[e.arbeidsgiverIdent]})]}),i.jsxs(qp,{columns:3,gap:"8",children:[i.jsx(Nk,{arbeidsgiverOpplysninger:n[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),i.jsx(qn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:i.jsx("span",{children:V(e.inntektPrMnd)})}),i.jsx(qk,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:s}),i.jsx(Bk,{inntektsmelding:e}),i.jsx(wk,{ytelse:Gr(t,an.FAGSAK_YTELSE,a.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),i.jsx(Pk,{kildeSystem:e.kildeSystem}),i.jsx(Sk,{inntektsmelding:e,alleKodeverk:t}),i.jsx(xk,{inntektsmelding:e})]})]})};_k.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const $E={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Du=Me($E),Ok=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=hn(),[a,s]=R.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=k=>{s(a&&k===a.orderBy&&a.direction==="descending"?void 0:{orderBy:k,direction:a&&k===a.orderBy&&a.direction==="ascending"?"descending":"ascending"})},o=a?UE({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:a.orderBy,behandling:t}):r,u=(a==null?void 0:a.direction)==="ascending"?o:o.toReversed();return u.length===0?i.jsx(De,{value:Du,children:i.jsxs(F,{gap:"2",justify:"center",align:"center",className:Mr.ingenInntektsmeldinger,children:[i.jsx(I,{children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.ingen"})}),i.jsx(Kp,{})]})}):i.jsx(De,{value:Du,children:i.jsxs(c,{sort:a,onSortChange:k=>l(k),children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),i.jsx(c.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),i.jsx(c.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),i.jsx(c.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),i.jsx(c.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),i.jsx(c.HeaderCell,{})]})}),i.jsx(c.Body,{children:u.map(k=>{var v;return i.jsxs(c.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:i.jsx(_k,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:k}),children:[i.jsx(c.DataCell,{children:i.jsx(Dt,{dateTimeString:k.innsendingstidspunkt,separator:"kl"})}),i.jsx(c.DataCell,{children:((v=e[k.arbeidsgiverIdent])==null?void 0:v.navn)??"-"}),i.jsx(c.DataCell,{children:k.startDatoPermisjon?i.jsx(be,{dateString:k.startDatoPermisjon}):"-"}),i.jsx(c.DataCell,{children:V(k.inntektPrMnd)}),i.jsx(c.DataCell,{children:i.jsx(HE,{behandling:t,inntektsmelding:k})})]},`${k.journalpostId}-${k.internArbeidsforholdId}`)})})]})})},UE=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((a,s)=>{var u,k;const l=(u=n[a.arbeidsgiverIdent])==null?void 0:u.navn,o=(k=n[s.arbeidsgiverIdent])==null?void 0:k.navn;return ti(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((a,s)=>{const l=Ei({behandling:t,inntektsmelding:a}),o=Ei({behandling:t,inntektsmelding:s});return ti(l,o)}):e.slice().sort((a,s)=>{const l=a[r],o=s[r];return ti(l,o)}),ti=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,HE=({behandling:e,inntektsmelding:n})=>{const r=Ei({behandling:e,inntektsmelding:n});return r==="DENNE"?i.jsxs(F,{gap:"1",align:"center",children:[i.jsx(Aa,{className:Mr.behandlingCircleDenne}),i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?i.jsxs(F,{gap:"1",align:"center",children:[i.jsx(Aa,{className:Mr.behandlingCircleAndre}),i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):i.jsxs(F,{gap:"1",align:"center",children:[i.jsx(Aa,{className:Mr.behandlingCircleIngen}),i.jsx(m,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Ei=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Ok.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const YE=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r,alleBehandlinger:t}=R.use(Rn),a=Qn(),s=Tn(r),{data:l}=In(s.inntektsmeldingerOptions(r));return i.jsx(Xn,{standardPanelProps:a,faktaPanelKode:Wn.INNTEKTSMELDINGER,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:l?i.jsx(Ok,{inntektsmeldinger:l,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e}):i.jsx(An,{})})};YE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const CE=e=>Vt(e,1),Dk=(e,n)=>N(CE(e)).isSame(n)?n:e,Vk=(e,n,r)=>{if(!(!n||!r))return N(e).isBefore(n)?n:Dk(e,r)},Mk=(e,n,r)=>{if(!(!n||!r))return N(e).isAfter(r)?r:Dk(e,n)},zE=[ke.SYKEPENGER,ke.FORELDREPENGER,ke.PLEIEPENGER,ke.SVANGERSKAPSPENGER,ke.UTENLANDSK_ARBEIDSFORHOLD],Ft=(e,...n)=>!!e&&n.includes(e),JE=e=>Ft(e,ke.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",WE=(e,n)=>{const r=e?n[e]:void 0;return r?r.erPrivatPerson?`${r.navn} (${pe(r.fødselsdato)})`:r.identifikator?`${r.navn} (${r.identifikator})`:r.navn:"-"},ZE=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",Gk=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:a,ferdiglignetNæring:s})=>i.jsxs(B,{gap:"4",children:[Ft(e,ke.ARBEID,ke.NARING,...zE)&&i.jsxs(F,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:JE(e)})}),i.jsx(I,{size:"small",children:WE(n,r)})]}),Ft(e,ke.ARBEID)&&i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Stillingsandel"})}),i.jsx(I,{size:"small",children:t})]})]}),Ft(e,ke.NARING)&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Registreringsdato"})}),i.jsx(I,{size:"small",children:a?pe(a):"-"})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:ZE(s)})}),s.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>i.jsxs(F,{gap:"5",children:[i.jsx(I,{size:"small",children:l.år}),i.jsx(I,{size:"small",children:V(l.beløp)})]},l.år))]})]})]});Gk.__docgenInfo={description:`ValgtAktivitetSubForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const QE="_panel_18tdb_5",XE="_colMargin_18tdb_9",eN="_margin_18tdb_13",Et={panel:QE,colMargin:XE,margin:eN},nN=mn(3),rN=kn(1500),xt=(e,n,r)=>e?!!n&&!r:!0,tN=(e,n)=>{const r=tp(e,n);return r?r.months>=1?i.jsx(m,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):i.jsx(m,{id:"ActivityPanel.Days",values:{days:r.days}}):i.jsx("span",{})},aN=(e,n,r,t)=>r||xt(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",Lk=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:a,harAksjonspunkt:s,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:u,ferdiglignetNæring:k,oppdaterAktivitet:v,valgteFormValues:f,fastsattOpptjening:b,lukkPeriode:y})=>{var Y;const j=z(),A=$e({defaultValues:f}),{arbeidsgiverReferanse:h,erGodkjent:T,erEndret:E,aktivitetType:q,stillingsandel:S,naringRegistreringsdato:P}=u,D=Vk(u.opptjeningFom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),_=Mk(u.opptjeningTom,b==null?void 0:b.opptjeningFom,b==null?void 0:b.opptjeningTom),U=R.useCallback((...w)=>i.jsx("b",{children:w}),[]);return i.jsx(Ue,{formMethods:A,onSubmit:w=>v(w),children:i.jsx(hg,{className:Et.panel,merknaderFraBeslutter:l[re.VURDER_PERIODER_MED_OPPTJENING],children:i.jsxs(B,{gap:"6",children:[i.jsxs(B,{gap:"2",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Details"})}),i.jsxs(F,{gap:"2",children:[i.jsx(ee,{className:Et.margin,size:"xsmall",icon:i.jsx(ta,{"aria-hidden":!0}),onClick:a,variant:"secondary-neutral",type:"button",title:j.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(m,{id:"Timeline.prevPeriodShort"})}),i.jsx(ee,{className:Et.margin,size:"xsmall",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:j.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(m,{id:"Timeline.nextPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx($n,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:j.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsxs(F,{gap:"1",children:[i.jsxs("div",{className:Et.colMargin,children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Period"})}),D&&_&&i.jsxs(F,{gap:"2",children:[i.jsx(I,{size:"small",children:Tg(D,_)}),i.jsx(I,{size:"small",children:tN(D,_)})]})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ActivityPanel.Activity"})}),i.jsx(I,{size:"small",children:(Y=n.find(w=>w.kode===q))==null?void 0:Y.navn})]})]})]}),i.jsx(Gk,{valgtAktivitetstype:q,arbeidsgiverReferanse:h,arbeidsgiverOpplysningerPerId:o,stillingsandel:S,naringRegistreringsdato:P,ferdiglignetNæring:k}),!xt(s,T,E)&&i.jsx(Te,{name:"erGodkjent",hideLegend:!0,validate:[W],isReadOnly:e,isEdited:E,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:j.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:i.jsx(m,{id:"ActivityPanel.IkkeGodkjent",values:{b:U}}),value:"false"}]}),i.jsx(We,{name:"begrunnelse",label:i.jsx(m,{id:aN(T,E,e,s)}),validate:[W,nN,rN,vn],maxLength:1500,readOnly:e||xt(s,T,E)}),!xt(s,T,E)&&i.jsxs(F,{gap:"4",children:[i.jsx(ee,{size:"small",variant:"primary",disabled:!A.formState.isDirty,children:i.jsx(m,{id:"ActivityPanel.Oppdater"})}),i.jsx(ee,{size:"small",variant:"secondary",onClick:r,type:"button",children:i.jsx(m,{id:"ActivityPanel.Avbryt"})})]})]})})})};Lk.__docgenInfo={description:`ValgtAktivitetForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const sN=e=>e===!1?"danger":e===!0?"success":"warning",iN={[ke.ARBEID]:i.jsx(Rr,{width:20,height:20}),[ke.AAP]:i.jsx(Tr,{width:20,height:20}),[ke.DAGPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.FORELDREPENGER]:i.jsx(Sp,{width:20,height:20}),[ke.FRILANS]:i.jsx(Rr,{width:20,height:20}),[ke.MILITAR_ELLER_SIVILTJENESTE]:i.jsx(Rr,{width:20,height:20}),[ke.NARING]:i.jsx(Rr,{width:20,height:20}),[ke.OMSORGSPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.OPPLARINGSPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.PLEIEPENGER]:i.jsx(Tr,{width:20,height:20}),[ke.SVANGERSKAPSPENGER]:i.jsx(Qp,{width:20,height:20}),[ke.SYKEPENGER]:i.jsx(nf,{width:20,height:20}),[ke.UTENLANDSK_ARBEIDSFORHOLD]:i.jsx(Yp,{width:20,height:20}),[ke.ETTERLONN_SLUTTPAKKE]:i.jsx(Rr,{width:20,height:20})},lN={danger:i.jsx(Og,{}),success:i.jsx(Ci,{}),warning:i.jsx(Tp,{})},oN=(e,n,r,t,a)=>e.map((s,l)=>{var o;return{id:l,start:N(Vk(s.opptjeningFom,t,a)).toDate(),end:N(Mk(s.opptjeningTom,t,a)).toDate(),radId:(o=r.find(u=>u.aktivitetTypeKode===s.aktivitetType&&u.arbeidsforholdRef===s.arbeidsforholdRef&&u.arbeidsgiverReferanse===s.arbeidsgiverReferanse))==null?void 0:o.id,status:sN(n[l].erGodkjent)}}),dN=(e,n,r)=>e.reduce((a,s)=>(a.some(o=>o.aktivitetType===s.aktivitetType&&o.arbeidsforholdRef===s.arbeidsforholdRef&&o.arbeidsgiverReferanse===s.arbeidsgiverReferanse)||a.push(s),a),[]).map((a,s)=>{const l=n.find(u=>u.kode===a.aktivitetType),o=(l==null?void 0:l.kode)===ke.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:s+1,label:o||"",aktivitetTypeKode:a.aktivitetType,arbeidsforholdRef:a.arbeidsforholdRef,arbeidsgiverReferanse:a.arbeidsgiverReferanse}}),Kk=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:a,setValgtAktivitetIndex:s})=>{const l=z(),o=r==null?void 0:r.opptjeningFom,u=r==null?void 0:r.opptjeningTom,k=R.useMemo(()=>dN(e,a,l),[e]),v=R.useMemo(()=>oN(e,n,k,o,u),[n]),f=R.useCallback(b=>{const y=v.find(j=>j.id===b);y&&s(y.id)},[v,s]);return!o||!u?null:i.jsxs(Oe,{startDate:N(o).subtract(1,"months").toDate(),endDate:N(u).add(10,"days").toDate(),children:[i.jsxs(Oe.Pin,{date:N(o).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTidslinje.StartDato"})}),i.jsx(I,{size:"small",children:i.jsx(be,{dateString:o})})]}),i.jsxs(Oe.Pin,{date:N(u).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTidslinje.SluttDato"})}),i.jsx(I,{size:"small",children:i.jsx(be,{dateString:u})})]}),k.map(b=>i.jsx(Oe.Row,{label:b.label,icon:iN[b.aktivitetTypeKode],children:v.filter(y=>y.radId===b.id).map(y=>i.jsx(Oe.Period,{start:y.start,end:y.end,status:y.status,icon:lN[y.status],onSelectPeriod:()=>f(y.id),isActive:t===y.id,statusLabel:b.label},y.id))},b.id))]})};Kk.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const uN="_container_ivkzi_1",gN={container:uN},mN=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(i.jsx(m,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(i.jsx(m,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(i.jsx(m,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},kN=e=>N(e).add(1,"days").format(xe),vN=(e,n)=>[...e].sort((r,t)=>{var l,o;const a=(l=n.find(u=>u.kode===r.aktivitetType))==null?void 0:l.navn,s=(o=n.find(u=>u.kode===t.aktivitetType))==null?void 0:o.navn;return a&&s?a.localeCompare(s):0}),Vu=e=>Vt(e,1),pN=(e,n)=>n?e.filter(r=>N(n.opptjeningFom).isBefore(Vu(r.opptjeningTom))).filter(r=>N(r.opptjeningFom).isBefore(Vu(n.opptjeningTom))):[],$k=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:a,alleMerknaderFraBeslutter:s,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:u,alleKodeverk:k}=hn(),v=a.length>0,f=k[an.OPPTJENING_AKTIVITET_TYPE],b=e&&r?vN(pN(e,r),f):[],{mellomlagretFormData:y,setMellomlagretFormData:j}=_n(),[A,h]=R.useState(y??b.map(L=>({erGodkjent:L.erGodkjent??void 0,begrunnelse:L.begrunnelse??""}))),[T,E]=R.useState(fN(b)),[q,S]=R.useState(!1);R.useEffect(()=>()=>{j(A)},[A]),R.useEffect(()=>{const L=A.findIndex(K=>K.erGodkjent===void 0||K.erGodkjent===null);E(L!==-1?L:void 0)},[A]);const P=()=>{S(!0);const L=b.map((K,H)=>({arbeidsforholdRef:K.arbeidsforholdRef,arbeidsgiverReferanse:K.arbeidsgiverReferanse,opptjeningFom:K.opptjeningFom,opptjeningTom:K.opptjeningTom,aktivitetType:K.aktivitetType,erGodkjent:A[H].erGodkjent,begrunnelse:A[H].begrunnelse})).filter(K=>K.begrunnelse);o({opptjeningsaktiviteter:L,kode:re.VURDER_PERIODER_MED_OPPTJENING}).then(()=>S(!1))},D=()=>{T!==void 0&&T<b.length-1&&E(T+1)},_=()=>{T!==void 0&&T>0&&E(T-1)},U=L=>{T!==void 0&&h(K=>Object.assign([],K,{[T]:L}))},Y=()=>E(void 0),w=()=>{E(void 0)},M=A.some(L=>L.erGodkjent===null||L.erGodkjent===void 0);return i.jsxs(B,{gap:"6",className:gN.container,children:[l&&i.jsx(Zn,{children:mN(b)}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),i.jsx(I,{size:"small",children:i.jsx(be,{dateString:kN(r==null?void 0:r.opptjeningTom)})})]}),i.jsx(Kk,{opptjeningPerioder:b,formVerdierForAlleAktiviteter:A,opptjeningAktivitetTypes:f,setValgtAktivitetIndex:E,valgtAktivitetIndex:T,fastsattOpptjening:r}),T!==void 0&&i.jsx(Lk,{valgtOpptjeningAktivitet:b[T],valgteFormValues:A[T],readOnly:u,opptjeningAktivitetTyper:f,avbrytAktivitet:Y,oppdaterAktivitet:U,fastsattOpptjening:r,velgNesteAktivitet:D,velgForrigeAktivitet:_,harAksjonspunkt:v,alleMerknaderFraBeslutter:s,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:w},T),v&&b.length>0&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"primary",onClick:P,disabled:T!==void 0||q||u||M,loading:q,type:"button",children:i.jsx(m,{id:"OpptjeningFaktaForm.Confirm"})})})]})},fN=e=>{if(e.length===0)return;const n=e.findIndex(r=>r.erGodkjent===void 0||r.erGodkjent===null);return n!==-1?n:0};$k.__docgenInfo={description:`OpptjeningFaktaPanel

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const yN={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},bN=Me(yN),Uk=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,a=(e==null?void 0:e.ferdiglignetNæring)||[];return i.jsx(De,{value:bN,children:i.jsx($k,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:a})})};Uk.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const jN=[re.VURDER_PERIODER_MED_OPPTJENING],cN=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r}=R.use(Rn),t=Qn(jN),a=r.vilkår.some(u=>u.vilkarType===Yn.OPPTJENINGSVILKARET)&&r.vilkår.some(u=>u.vilkarType===Yn.MEDLEMSKAPSVILKARET&&u.vilkarStatus===Dg.OPPFYLT),s=Tn(r),{data:l,isFetching:o}=In(s.opptjeningOptions(r,a));return i.jsx(Xn,{standardPanelProps:t,faktaPanelKode:Wn.OPPTJENINGSVILKARET,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:a,children:o?i.jsx(An,{}):i.jsx(Uk,{opptjening:l,arbeidsgiverOpplysningerPerId:e})})};cN.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Ni=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Ni||{});const hN="_boks_kspkv_1",AN="_aksjonspunkt_kspkv_9",IN="_harBorderTop_kspkv_13",Hk={boks:hN,aksjonspunkt:AN,harBorderTop:IN},TN=Pg.bind(Hk),Yk=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>i.jsx("div",{className:TN(Hk.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});Yk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const RN="_inline_17flc_1",EN="_phoneIcon_17flc_5",NN="_docIcon_17flc_11",ai={inline:RN,phoneIcon:EN,docIcon:NN},Ck=({saksnummer:e,inntektsmelding:n})=>i.jsxs(B,{gap:"4",children:[i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),i.jsx(I,{size:"small",children:V(n.inntektPrMnd)})]}),i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),i.jsx(I,{size:"small",children:i.jsx(m,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),n.refusjonPrMnd&&i.jsxs(F,{gap:"4",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),i.jsx(I,{size:"small",children:V(n.refusjonPrMnd)})]}),i.jsx(Fg,{saksnummer:e,journalpostId:n.journalpostId,dokumentId:n.dokumentId,children:i.jsxs(F,{gap:"1",children:[i.jsx(I,{size:"small",className:ai.inline,children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),i.jsx(Mg,{className:ai.docIcon})]})}),i.jsxs(F,{gap:"4",align:"center",children:[i.jsx(Gg,{className:ai.phoneIcon}),i.jsxs(B,{gap:"1",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),i.jsx(oe,{children:n.kontaktpersonNavn}),i.jsx(oe,{children:i.jsx(m,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})]})]})]});Ck.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const qN="_inline_p7hb9_1",SN="_arrow_p7hb9_5",si={inline:qN,arrow:SN},zk=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=R.useState(!1),a=R.useMemo(()=>PN(n,e),[e]);return i.jsxs(i.Fragment,{children:[e.length>0&&i.jsxs(B,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsposterPanel.Inntekter"})}),i.jsx(B,{gap:"1",width:"150px",children:a.filter((s,l)=>r?!0:l<3).map(s=>i.jsxs(F,{justify:"space-between",children:[i.jsxs(F,{gap:"1",children:[i.jsx(I,{size:"small",children:i.jsx(m,{id:`InntektsposterPanel.${N(s.fom).month()+1}`})}),i.jsx(I,{size:"small",children:N(s.fom).year()})]},s.fom),i.jsx(I,{size:"small",children:V(s.beløp)})]},s.fom))}),i.jsxs(Ui,{onClick:s=>{s.preventDefault(),t(!r)},href:"",children:[i.jsx("span",{children:i.jsx(I,{size:"small",className:si.inline,children:i.jsx(m,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?i.jsx(Hi,{className:si.arrow}):i.jsx(Qt,{className:si.arrow})]})]}),e.length===0&&i.jsx(x,{size:"small",children:i.jsx(m,{id:"InntektsposterPanel.IngenInntekt"})})]})},PN=(e,n)=>{const t=N(e).startOf("month"),a=t.subtract(12,"month"),s=[];for(let l=t;l.isAfter(a);l=l.subtract(1,"month")){const o=l.format(xe),u=n.find(k=>N(k.fom).startOf("month").format(xe)===o);s.push({beløp:(u==null?void 0:u.beløp)||0,fom:o})}return s};zk.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const BN="_hjelpetekst_dvkw1_1",FN="_image_dvkw1_5",xN="_hjelpetekstInnhold_dvkw1_9",wN="_exclamationmarkIcon_dvkw1_14",_N="_checkmarkIcon_dvkw1_21",Pr={hjelpetekst:BN,image:FN,hjelpetekstInnhold:xN,exclamationmarkIcon:wN,checkmarkIcon:_N},ON="arbeidsforhold",Jk=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:a,arbeidsgiverOpplysningerPerId:s,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:u,alleKodeverk:k})=>{var D;const v=z(),{inntektsmeldinger:f,inntekter:b}=a,y=t[e],j=f.find(_=>DN(y,_)),A=(D=b.find(_=>_.arbeidsgiverIdent===y.arbeidsgiverIdent))==null?void 0:D.inntekter,h=t.filter(_=>_.arbeidsgiverIdent===y.arbeidsgiverIdent).length>1,T=s[y.arbeidsgiverIdent],E=R.useRef(null),[q,S]=R.useState(!1),P=R.useCallback(()=>S(_=>!_),[]);return i.jsx(Yk,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:i.jsxs(F,{gap:"6",children:[!o&&i.jsx(Mi,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:Pr.checkmarkIcon}),o&&i.jsx(yr,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:Pr.exclamationmarkIcon}),i.jsxs(B,{gap:"4",width:"90%",children:[i.jsxs(F,{justify:"space-between",children:[i.jsxs("div",{children:[i.jsx(x,{size:"small",children:T.navn}),y.arbeidsgiverIdent&&i.jsxs(oe,{children:["(",T.erPrivatPerson&&T.fødselsdato?i.jsx(be,{dateString:T.fødselsdato}):y.arbeidsgiverIdent,")"]})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Periode"})}),i.jsxs(I,{size:"small",children:[y&&i.jsx(Ge,{dateStringFom:y.fom,dateStringTom:y.tom!==Se?y.tom:void 0}),!y&&"-"]})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Kilde"})}),i.jsx(I,{size:"small",children:i.jsx(m,{id:y?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),i.jsxs(I,{size:"small",children:[(j==null?void 0:j.motattDato)&&i.jsx(be,{dateString:j.motattDato}),!(j!=null&&j.motattDato)&&i.jsx(m,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),h&&y.eksternArbeidsforholdId&&i.jsxs(F,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Id"})}),i.jsxs("div",{children:[y.eksternArbeidsforholdId.length<50&&i.jsx(I,{size:"small",children:y.eksternArbeidsforholdId}),y.eksternArbeidsforholdId.length>=50&&i.jsx(xg,{content:VN(y.eksternArbeidsforholdId),placement:"bottom",children:i.jsx(I,{size:"small",children:`${y.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),y.stillingsprosent&&i.jsxs(F,{gap:"2",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})}),i.jsx(I,{size:"small",children:`${y.stillingsprosent}%`})]}),y.permisjonOgMangel&&i.jsx(F,{gap:"2",children:i.jsxs(i.Fragment,{children:[i.jsx(x,{size:"small",children:`${Gr(k,an.PERMISJONSBESKRIVELSE_TYPE,y.permisjonOgMangel.type)} 100%`}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:y.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})}),j&&i.jsx(Ck,{saksnummer:r,inntektsmelding:j}),!j&&A&&i.jsx(zk,{inntektsposter:A,skjæringstidspunkt:u}),i.jsx(Te,{name:`${ON}.${e}.permisjonStatus`,label:i.jsxs(F,{gap:"2",children:[i.jsx(m,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"}),i.jsxs("div",{className:Pr.image,children:[i.jsx(ee,{ref:E,type:"button",variant:"tertiary",onClick:P,icon:i.jsx(Yi,{title:v.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),i.jsx(or,{open:q,onClose:P,anchorEl:E.current,className:Pr.hjelpetekst,children:i.jsx(or.Content,{className:Pr.hjelpetekstInnhold,children:i.jsxs(B,{gap:"2",children:[i.jsx(I,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),i.jsx(I,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),i.jsx(I,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),i.jsx(I,{children:i.jsx(m,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})})]})]}),validate:[W],isReadOnly:l,radios:[{label:v.formatMessage({id:j?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Ni.IKKE_BRUK_PERMISJON},{label:v.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Ni.BRUK_PERMISJON}]})]})]})},n)},DN=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),VN=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,a)=>e.slice(a*25,a*25+25)).join("-")};Jk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const MN="arbeidsforhold",Wk=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:u}=he(),{fields:k}=Ze({control:u,name:MN});return i.jsx("div",{children:k.map((v,f)=>i.jsx(Jk,{fieldId:v.id,index:f,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:a,harÅpentAksjonspunkt:s,skjæringstidspunkt:l,alleKodeverk:o},v.id))})};Wk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const GN=mn(3),LN=kn(1500),KN=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),Zk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:a,isReadOnly:s,alleKodeverk:l}=hn(),o=R.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(A=>{var h;return(h=A.permisjonOgMangel)==null?void 0:h.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:u}=o,k=R.useMemo(()=>[...u].sort(KN(n)),[u,n]),v=R.useMemo(()=>({arbeidsforhold:k.map(A=>{var h;return{permisjonStatus:(h=A.permisjonOgMangel)==null?void 0:h.permisjonStatus}}),begrunnelse:r[0].begrunnelse??""}),[k]),{mellomlagretFormData:f,setMellomlagretFormData:b}=_n(),y=$e({defaultValues:f||v});R.useEffect(()=>()=>{b(y.getValues())},[]);const j=r.some(A=>A.status===Hn.OPPRETTET);return i.jsxs(B,{gap:"8",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"PermisjonFaktaPanel.Overskrift"})}),i.jsx(I,{size:"small",children:i.jsx(m,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:pe(o.skjæringstidspunkt)}})})]}),j&&i.jsx(Zn,{children:i.jsx(m,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),i.jsx(Ue,{formMethods:y,onSubmit:A=>a({kode:re.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:A.arbeidsforhold.map((h,T)=>({internArbeidsforholdId:k[T].internArbeidsforholdId,arbeidsgiverIdent:k[T].arbeidsgiverIdent,permisjonStatus:h.permisjonStatus})),begrunnelse:A.begrunnelse}),children:i.jsxs(B,{gap:"6",children:[i.jsx(Wk,{saksnummer:t.saksnummer,sorterteArbeidsforhold:k,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:s,harÅpentAksjonspunkt:j,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),i.jsx(We,{label:i.jsx(x,{size:"small",children:i.jsx(m,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[W,GN,LN,vn],maxLength:1500,readOnly:s}),!s&&i.jsx("div",{children:i.jsx(ee,{size:"small",variant:"primary",disabled:!y.formState.isDirty||y.formState.isSubmitting,loading:y.formState.isSubmitting,children:i.jsx(m,{id:"PermisjonFaktaPanel.Bekreft"})})})]})})]})};Zk.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const $N={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i Aa-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},UN=Me($N),Qk=e=>i.jsx(De,{value:UN,children:i.jsx(Zk,{...e})});Qk.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Mu=[re.VURDER_ARBEIDSFORHOLD_PERMISJON],HN=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),{behandling:r}=R.use(Rn),t=Qn(Mu),a=Tn(r),{data:s}=In(a.arbeidOgInntektOptions(r));return i.jsx(Xn,{standardPanelProps:t,faktaPanelKode:Wn.PERMISJON,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Mu.some(l=>sa(l,r.aksjonspunkt)),children:s?i.jsx(Qk,{arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:e}):i.jsx(An,{})})};HN.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ae=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ae||{});function Xk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gu={exports:{}},Br={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function YN(){if(Lu)return Br;Lu=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,a,s){var l=null;if(s!==void 0&&(l=""+s),a.key!==void 0&&(l=""+a.key),"key"in a){s={};for(var o in a)o!=="key"&&(s[o]=a[o])}else s=a;return a=s.ref,{$$typeof:e,type:t,key:l,ref:a!==void 0?a:null,props:s}}return Br.Fragment=n,Br.jsx=r,Br.jsxs=r,Br}var Ku;function CN(){return Ku||(Ku=1,Gu.exports=YN()),Gu.exports}var d=CN(),$u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Uu;function zN(){return Uu||(Uu=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(s=a(s,t.call(this,o)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var o in s)n.call(s,o)&&s[o]&&(l=a(l,this&&this[o]||o));return l}function a(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}($u)),$u.exports}var JN=zN();const WN=Xk(JN);var fa=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(fa||{}),ya=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(ya||{}),G=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(G||{});ya.BRUKERS_ANDEL;ya.FRILANS;ya.EGEN_NÆRING;const ZN=["FL","AT_FL","AT_FL_SN","FL_SN"],QN=["AT","AT_FL","AT_FL_SN","AT_SN"],XN=["SN","FL_SN","AT_FL_SN","AT_SN"],eq=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],nq=["DP","SP_AV_DP","PSB_AV_DP","AAP"],rq=["KUN_YTELSE"],tq=["MS"],ev=e=>nq.some(n=>n===e),aq=e=>rq.some(n=>n===e),nv=e=>ZN.some(n=>n===e),rv=e=>QN.some(n=>n===e),tv=e=>XN.some(n=>n===e),sq=e=>eq.some(n=>n===e),iq=e=>tq.some(n=>n===e);var av=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(av||{});const ba=e=>e==="OPPR";var sv=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(sv||{}),gn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(gn||{}),qi=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(qi||{}),Si=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Si||{}),lr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(lr||{}),iv=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(iv||{}),Nl=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(Nl||{}),me=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(me||{}),lv=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(lv||{}),fn=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(fn||{});const Hu=e=>e?`...${e.substring(e.length-4,e.length)}`:"",ja=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:a,identifikator:s}=e;return a?t?`${r} (${N(t).format(se)})${Hu(n)}`:r:s?`${r} (${s})${Hu(n)}`:r},Yu=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[fa.OPPTJENING_AKTIVITET_TYPE].find(t=>{var a;return t.kode===((a=e.arbeidsforhold)==null?void 0:a.arbeidsforholdType)}))==null?void 0:r.navn)||""},Pi=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?ja(t,e.arbeidsforhold.eksternArbeidsforholdId):Yu(e,r)}return Yu(e,r)},lq="_aksjonspunktBehandlerBorder_13dyh_1",oq="_aksjonspunktBehandlerHeader_13dyh_10",dq="_aksjonspunktBehandlerNoBorder_13dyh_27",uq="_verticalLine_13dyh_40",gq="_inputPadding_13dyh_54",mq="_inntektTableTB_13dyh_65",kq="_rowSpacer_13dyh_69",vq="_textAreaWrapperHeigh_13dyh_112",pq="_dynamiskKolonne_13dyh_119",fq="_textAreaStyle_13dyh_123",yq="_breddeInntekt_13dyh_139",bq="_warningIcon_13dyh_142",jq="_aksjonspunktWrapper_13dyh_148",ce={aksjonspunktBehandlerBorder:lq,aksjonspunktBehandlerHeader:oq,aksjonspunktBehandlerNoBorder:dq,verticalLine:uq,inputPadding:gq,inntektTableTB:mq,rowSpacer:kq,textAreaWrapperHeigh:vq,dynamiskKolonne:pq,textAreaStyle:fq,breddeInntekt:yq,warningIcon:bq,aksjonspunktWrapper:jq},cq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,ov=e=>e?e.filter(n=>n.aktivitetStatus===G.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>cq(n)):[],ql=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=ov(n);return d.jsx(B,{gap:"2",children:o.map((u,k)=>d.jsxs(F,{gap:"4",align:"center",children:[d.jsx(I,{size:"small",children:Pi(u,t,r)}),d.jsx(ve,{name:`${s}.${a}.inntekt${k}`,validate:l?[W,Qe(178956970)]:[],readOnly:e,parse:Fe,className:ce.breddeInntekt,isEdited:e&&(!!u.overstyrtPrAar||u.overstyrtPrAar===0)})]},u.andelsnr))})};ql.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===G.ARBEIDSTAKER)&&(r=ov(n).map(({andelsnr:t},a)=>{const s=e[`inntekt${a}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:s===void 0||s===""?0:ge(s),andelsnr:t}})),r};const hq="_avsnittOverskrift_cm3sp_1",Aq="_panelLeft_cm3sp_5",Iq="_panelRight_cm3sp_15",Tq="_storSpace_cm3sp_26",Rq="_semiBoldText_cm3sp_29",Eq="_redError_cm3sp_35",Nq="_tabellAktivitet_cm3sp_38",qq="_tabellInntekt_cm3sp_48",Sq="_tagMargin_cm3sp_79",X={avsnittOverskrift:hq,panelLeft:Aq,panelRight:Iq,storSpace:Tq,semiBoldText:Rq,næringEndringBeskrivelse:"_næringEndringBeskrivelse_cm3sp_32",redError:Eq,tabellAktivitet:Nq,tabellInntekt:qq,tagMargin:Sq},Cu="inntektField",Pq=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(lr.ARBEIDSFORHOLD_AVSLUTTET),ca=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!Pq(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},vr=(e,n)=>e.arbeidsforhold?`${Cu}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${Cu}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,ha=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===G.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],dv=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},Bq=(e,n,r)=>{var t;const a=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return a?ja(a,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[fa.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},uv=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),Fq=(e,n,r)=>{const t=ha(e),a={};return t.forEach(s=>{if(!s.arbeidsforhold)return;const l=dv(s.arbeidsforhold),o=uv();o.tabellInnhold=Bq(s.arbeidsforhold,n,r),o.erTidsbegrenset=s.erTidsbegrensetArbeidsforhold!==void 0?s.erTidsbegrensetArbeidsforhold:!1,a[l]=[o]}),a},Sl=e=>e.sort((n,r)=>N(n.beregningsgrunnlagPeriodeFom).diff(N(r.beregningsgrunnlagPeriodeFom)))[0],gv=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===G.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var a,s,l,o;return((a=t.arbeidsforhold)==null?void 0:a.arbeidsgiverIdent)===((s=e.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},Pl=(e,n)=>{var r;const t=Sl(n);return!!((r=gv(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},xq=(e,n,r)=>{const t=ca(e),a=e[0].beregningsgrunnlagPeriodeFom,s=Fq(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===a;ha(l).forEach(u=>{const k=Pl(u,e),v=dv(u.arbeidsforhold),f=uv();f.tabellInnhold=u.overstyrtPrAar!==void 0&&u.overstyrtPrAar!==null?V(u.overstyrtPrAar):"",f.erTidsbegrenset=!1,f.isEditable=k?!0:o,f.inputfieldKey=vr(u,l),s[v].push(f)})}),s},wq=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(I,{size:"small",className:X.semiBoldText,children:V(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),_q=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(oe,{children:pe(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),Oq=(e,n,r,t,a,s,l)=>{const o=[];return o.push(_q(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((u,k)=>d.jsx($.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${u.periodeFom}`)})},`Col_Tittel_${u.periodeFom}`)},`PeriodeWrapper${k+1}`))]},"Tabletop")),Object.keys(e).forEach(u=>{const k=e[u];o.push(d.jsx("tr",{children:k.map(v=>v.isEditable?d.jsx($.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?ce.adjustedField:void 0,children:d.jsx(ve,{name:`${s}.${a}.${v.inputfieldKey}`,validate:l?[W,Qe(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:Fe,className:ce.breddeInntekt})})},`Col-${v.inputfieldKey}`)},`key${v.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(I,{size:"small",children:v.tabellInnhold})},v.tabellInnhold))},u))}),o.push(d.jsx("tr",{className:ce.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(wq(t)),o},Dq=(e,n,r,t)=>{const a=[];return e.length<1||ca(e).forEach(s=>{const l=ha(s).map(o=>{const u=vr(o,s),k=n.watch(`${t}.${r}.${u}`);return k===void 0||k===""?0:ge(k)}).reduce((o,u)=>o+u);a.push({brutto:l,periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom})}),a},yt=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:a,formName:s,skalValideres:l})=>{const o=xq(n,r,t),u=n.some(f=>{var b;return(b=f.beregningsgrunnlagPrStatusOgAndel)==null?void 0:b.some(y=>y.aktivitetStatus===G.ARBEIDSTAKER&&(!!y.overstyrtPrAar||y.overstyrtPrAar===0))}),k=he(),v=Dq(n,k,a,s);return d.jsx("table",{className:ce.inntektTableTB,children:d.jsx("tbody",{children:Oq(o,e,u,v,a,s,l)})})};yt.buildInitialValues=e=>{const n={},r=ca(e),t=Sl(e);return r.forEach(a=>{(a.beregningsgrunnlagPrStatusOgAndel?a.beregningsgrunnlagPrStatusOgAndel.filter(s=>s.aktivitetStatus===G.ARBEIDSTAKER):[]).forEach(s=>{if(Pl(s,e)){const l=V(s.overstyrtPrAar);n[vr(s,a)]=l||""}else{const l=gv(s,t),o=V(l==null?void 0:l.overstyrtPrAar);n[vr(s,a)]=o||""}})}),n};yt.transformValues=(e,n)=>{const r=[],t=Sl(n);return ca(n).forEach(a=>{const s=ha(a),l=[];s.forEach(o=>{if(Pl(o,n)){const u=ge(e[vr(o,a)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:u})}else{const u=ge(e[vr(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:u})}}),r.push({periodeFom:a.beregningsgrunnlagPeriodeFom,periodeTom:a.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const Vq="_border_uqgtr_1",Mq="_borderDark_uqgtr_7",Gq="_doubleLine_uqgtr_13",ii={border:Vq,borderDark:Mq,doubleLine:Gq},Ee=({hasBorderDark:e,hasDoubleLine:n})=>n?d.jsx("div",{className:ii.doubleLine}):d.jsx("div",{className:e?ii.borderDark:ii.border}),Lq="_colDevider_1att7_1",Kq={colDevider:Lq},Bi=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx("div",{style:{width:n},children:d.jsx("div",{className:Kq.colDevider})})},mv=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,$q=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return ja(r,e.arbeidsforhold.eksternArbeidsforholdId)},kv=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],Uq=(e,n)=>{const r=$q(e,n),t=mv(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},Hq=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},Yq=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{kv(t).filter(a=>Hq(a)).map(a=>Uq(a,n)).forEach(a=>{r.some(({nøkkel:s})=>s===a.nøkkel)||r.push(a)})}),r},Cq=(e,n)=>{const r=kv(e).find(t=>mv(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},zq=(e,n)=>{const r=[];return n.forEach(t=>{const a=Cq(t,e.nøkkel);a&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:a,beløpPrMåned:a/12})}),r},Jq=e=>{if(!e||e.length<2)return e;e.sort((t,a)=>N(t.fom).diff(N(a.fom)));const n=[];let r=N(e[0].fom);return e.forEach(t=>{if(!N(t.fom).isBefore(r)){const a=e.find(s=>N(s.fom).isAfter(t.fom)&&s.beløpPrÅr!==t.beløpPrÅr);if(a){const s=N(a.fom).subtract(1,"d");n.push({tom:s.format(xe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=s}else r=N(Se),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},Wq=(e,n)=>{const r=Yq(e,n);return r.forEach(t=>{const a=zq(t,e);Jq(a).forEach(s=>t.naturalytelseEndringer.push(s))}),!r||r.length<1?void 0:{rader:r}},Zq=e=>e.tom?`${pe(e.fom)} - ${pe(e.tom)}`:`${pe(e.fom)} -`,Qq=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=R.useMemo(()=>Wq(e,n),[e]);return r?d.jsxs("div",{children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(oe,{style:{width:"70px"},children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{style:{width:"70px"},children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),r.rader.map(t=>d.jsxs(B,{gap:"1",children:[d.jsx(x,{size:"small",children:t.visningsnavn}),d.jsx(B,{gap:"1",children:t.naturalytelseEndringer.map(a=>d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(I,{size:"small",children:Zq(a)}),d.jsxs(F,{gap:"4",justify:"end",children:[d.jsx(I,{size:"small",style:{width:"70px"},children:V(a.beløpPrMåned)}),d.jsx(x,{size:"small",style:{width:"70px"},children:V(a.beløpPrÅr)})]})]},t.nøkkel+a.fom))})]},t.nøkkel))]}):null},Xq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,vv=e=>e?e.filter(n=>n.aktivitetStatus===G.ARBEIDSTAKER).filter(n=>Xq(n)):[],eS=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(pe(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(pe(e.opphoersdato))),n.join(" ")},nS=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},zu=e=>e.beregnetPrAar?e.beregnetPrAar:0,rS=(e,n,r)=>{const t=e.reduce((l,o)=>l+zu(o),0),a=t?t/12:0,s=e.map((l,o)=>d.jsxs($.Fragment,{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(x,{size:"small",className:X.semiBoldText,children:Pi(l,r,n)}),d.jsxs(F,{gap:"10",children:[d.jsx(I,{children:V(zu(l)/12)}),d.jsx(x,{children:V(l.beregnetPrAar)})]})]}),d.jsxs(F,{gap:"4",align:"center",children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(I,{children:nS(l.arbeidsforhold)}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(oe,{children:eS(l.arbeidsforhold)}),l.erTidsbegrensetArbeidsforhold&&d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})]}),d.jsx(Bi,{prosentBredde:100})]},`ArbInntektWrapper${Pi(l,r,n)}${o+1}`));if(e.length>1){const l=d.jsx(B,{gap:"0",children:d.jsxs(F,{justify:"space-between",children:[d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"}),d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(I,{children:V(a)}),d.jsx(x,{children:V(t)})]})]})},"summary-row");s.push(l)}return s},Bl=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const a=vv(e);return!a||a.length===0?null:d.jsxs(B,{gap:"8",children:[d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})}),d.jsx(xn,{children:d.jsxs(B,{gap:"1",children:[d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(Ee,{}),rS(a,t,r)]})})]}),d.jsx(Qq,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};Bl.buildInitialValues=e=>{const n=vv(e),r={};return n.forEach((t,a)=>{r[`inntekt${a}`]=V(t.overstyrtPrAar)||""}),r};var Fi={exports:{}},tS=Fi.exports,Ju;function aS(){return Ju||(Ju=1,function(e,n){(function(r,t){e.exports=t(N)})(tS,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var a=t(r),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(s,null,!0),s})}(Fi)),Fi.exports}var sS=aS();const xi=Xk(sS),iS=({option:e,style:n,height:r})=>{const t=R.useRef(null);return R.useEffect(()=>{let a;t.current!==null&&(a=Bp(t.current));const s=()=>{a==null||a.resize()};return window.addEventListener("resize",s),()=>{a==null||a.dispose(),window.removeEventListener("resize",s)}},[]),R.useEffect(()=>{if(t.current!==null){const a=Fp(t.current);a&&(a.setOption(e),(a==null?void 0:a.getWidth())===0&&(a==null||a.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},lS="_readMore_wk043_4",oS={readMore:lS},dS=[],uS="#99bdcd",gS="#c1b5d0",mS="#C6C2BF",kS=(e,n)=>{const r=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===gn.ARBEID).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),t=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===gn.FRILANS).map(({beløp:s})=>s).reduce((s,l)=>s+l,0),a=e.flatMap(s=>s.inntekter).filter(s=>s.inntektAktivitetType===gn.YTELSE).map(({beløp:s})=>s).reduce((s,l)=>s+l,0);return d.jsxs(xn,{width:"200px",children:[d.jsx("div",{className:X.storSpace}),d.jsx(x,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})}),d.jsx(I,{size:"small",children:V(r)})]}),d.jsx(Ee,{})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})}),d.jsx(I,{size:"small",children:V(t)})]}),d.jsx(Ee,{})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})}),d.jsx(I,{size:"small",children:V(a)})]}),d.jsx(Ee,{})]})]})},vS=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),li=(e,n,r)=>{const t=[];for(let a=0;a<12;a+=1){const s=N(n,xe).add(a,"M").format("YYYYMM"),l=e.find(u=>N(u.fom,xe).format("YYYYMM")===s),o=vS((l==null?void 0:l.inntekter)||[],r);t.push([o,s])}return t},pS=()=>d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})}),d.jsx(m,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})]}),oi=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),fS=e=>({harFrilansinntekt:oi(e,gn.FRILANS),harArbeidsinntekt:oi(e,gn.ARBEID),harYtelseinntekt:oi(e,gn.YTELSE)}),yS=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=z(),t=(e==null?void 0:e.måneder)||dS,a=R.useMemo(()=>fS(t),[t]),s=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=R.useMemo(()=>a.harArbeidsinntekt&&s?li(t,s,gn.ARBEID):[],[a.harArbeidsinntekt,t,s]),o=R.useMemo(()=>a.harFrilansinntekt&&s?li(t,s,gn.FRILANS):[],[a.harArbeidsinntekt,t,s]),u=R.useMemo(()=>a.harYtelseinntekt&&s?li(t,s,gn.YTELSE):[],[a.harArbeidsinntekt,t,s]),k=R.useCallback(y=>y.value[0]>5e3?V(y.value[0])||"":y.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const v=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),f=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),b=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(qe,{size:"medium",header:d.jsx(pS,{}),defaultOpen:!0,className:oS.readMore,children:d.jsx(iS,{option:{tooltip:{trigger:"axis",formatter:y=>{const j=y,A=j[0].data,h=N(A[1]),T=h.locale(xi).format("MMM"),E=h.format("YYYY"),q=`${T.charAt(0).toUpperCase()+T.slice(1)} ${E}`,S=j.reduce((P,D)=>{const _=D.data;return P.concat(`${(D.marker||"")+(D.seriesName||"")}: ${V(_[0])}`)},[]).join("<br/>");return`${q}<br />${S}`},axisPointer:{type:"shadow"}},legend:{data:[v,f,b]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:y=>V(y)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:y=>{const j=N(y),A=j.format("MM")==="01"||j.format("MM")==="12",h=j.locale(xi).format("MMM"),T=j.format("YYYY"),E=h.charAt(0).toUpperCase()+h.slice(1,3);return A?`${E}
${T}`:E}}},series:[{name:v,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:l},{name:f,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:o},{name:b,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:k},emphasis:{focus:"series"},data:u}],color:[uS,gS,mS]},height:350})}),kS(t,a)]})},bS=({alleAndeler:e})=>{var n;const r=e.find(s=>!s.erTilkommetAndel&&s.aktivitetStatus===G.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,a=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsx(xn,{children:d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[a&&d.jsxs(I,{size:"small",children:[d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:X.semiBoldText,children:d.jsx(be,{dateString:a})})]}),d.jsxs(F,{gap:"10",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]})]}),d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})}),d.jsxs(F,{gap:"12",children:[d.jsx(I,{size:"small",children:t?V(t/12):0}),d.jsx(x,{size:"small",children:t?V(t):0})]})]})]})})},jS=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===G.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})}),d.jsx(x,{size:"small",children:V(r)})]})},cS=[],hS=(e,n,r)=>{var t,a,s;const l=r.find(f=>f.år===e),o=l&&((t=l.inntekter.find(f=>f.pgiType===qi.NÆRING))==null?void 0:t.beløp)||0,u=l&&((a=l.inntekter.find(f=>f.pgiType===qi.LØNN))==null?void 0:a.beløp)||0,k=o+u,v=(s=n.find(f=>f.årstall===e))==null?void 0:s.beløp;return d.jsxs(c.Row,{shadeOnHover:!0,children:[d.jsx(c.DataCell,{children:e}),d.jsx(c.DataCell,{align:"right",children:V(u)}),d.jsx(c.DataCell,{align:"right",children:V(o)}),d.jsx(c.DataCell,{align:"right",children:V(k)}),d.jsx(c.DataCell,{align:"right",children:V(v)})]},e)},AS=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>hS(r,e,n)),IS=e=>d.jsxs(c.Row,{shadeOnHover:!0,children:[d.jsx(c.DataCell,{children:d.jsx(x,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{}),d.jsx(c.DataCell,{align:"right",children:d.jsx(x,{children:V(e)})})]},"PGI-Oppsumert"),TS=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===G.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||cS;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:a,pgiSnitt:s}=r;return d.jsxs(d.Fragment,{children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(c,{children:[d.jsx(c.Header,{children:d.jsxs(c.Row,{children:[d.jsx(c.HeaderCell,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(c.HeaderCell,{align:"right",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(c.Body,{children:[AS(a,t),IS(s)]})]})]})},RS="_merTekstBorder_1w256_9",ES={merTekstBorder:RS},NS=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},Wu=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${pe(n)}-${pe(r)} `:`${pe(n)}-`},qS=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},SS=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},PS=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,a=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",s=r?t:n;return s?d.jsx(x,{size:"small",className:X.semiBoldText,children:d.jsx(m,{id:a,values:{dato:pe(s),b:Xt}})}):null},BS=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},FS=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(I,{size:"small",className:ES.merTekstBorder,children:e.begrunnelse}):null,xS=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,wS=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(B,{gap:"1",children:[d.jsxs(F,{justify:"space-between",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})]}),d.jsx(Ee,{}),r.næringer.map(t=>d.jsxs($.Fragment,{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(x,{size:"small",className:X.semiBoldText,children:SS(t,n)}),xS(t)&&d.jsx(x,{size:"small",children:V(t.oppgittInntekt)})]}),d.jsxs(F,{gap:"14",wrap:!1,children:[d.jsx(I,{size:"small",children:t&&t.orgnr?t.orgnr:""}),Wu(t)&&d.jsx(I,{size:"small",children:Wu(t)})]}),d.jsx(I,{size:"small",children:d.jsx(m,{id:NS(t)})}),t.regnskapsførerNavn&&d.jsx(I,{size:"small",children:qS(t)}),BS(t)&&d.jsxs(B,{gap:"6",children:[d.jsx(Ee,{}),d.jsxs(B,{gap:"2",children:[PS(t),d.jsx("div",{className:X.næringEndringBeskrivelse,children:FS(t)})]})]})]},`NaringsWrapper${t.orgnr}`))]}):null},_S=e=>e.aktivitetStatus===G.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===G.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===G.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===G.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",OS=e=>e===G.DAGPENGER,DS=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(s=>ev(s.aktivitetStatus)),a=t.length>1;return d.jsxs(B,{gap:"2",children:[n.isKombinasjonsstatus&&d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsxs(F,{justify:"end",gap:"10",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(Bi,{prosentBredde:100}),t.map(s=>d.jsxs("div",{children:[d.jsxs(F,{gap:"2",justify:"space-between",children:[d.jsx(x,{size:"small",children:d.jsx(m,{id:_S(s)})}),d.jsxs(F,{gap:"14",children:[d.jsx(I,{size:"small",children:V(s.beregnetPrAar?s.beregnetPrAar/12:0)}),d.jsx(I,{size:"small",className:a?"":X.semiBoldText,children:V(s.beregnetPrAar)})]})]}),d.jsx(Bi,{prosentBredde:100}),r&&OS(s.aktivitetStatus)&&d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})]},s.aktivitetStatus))]})},VS=({bruttoPrAar:e})=>e||e===0?d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsxs(F,{gap:"10",justify:"end",children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsxs(F,{justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})}),d.jsxs(F,{gap:"14",children:[d.jsx(I,{size:"small",children:V(e/12)}),d.jsx(x,{size:"small",children:V(e)})]})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:MS,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:GS}=ae,LS=e=>e&&e.find(n=>n.definisjon===MS||n.definisjon===GS),KS=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],Gn=d.jsx("div",{className:X.storSpace}),$S=(e,n,r,t,a,s,l,o)=>d.jsxs("div",{className:X.panelLeft,children:[n.isArbeidstaker&&d.jsx(Bl,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:s}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[Gn,d.jsx(bS,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[Gn,d.jsx(DS,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[Gn,d.jsx(jS,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[Gn,d.jsx(VS,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[Gn,d.jsx(TS,{alleAndeler:e,inntektsgrunnlag:o}),Gn,d.jsx(wS,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:s})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[Gn,d.jsx(yS,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),zn=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:a=void 0,arbeidsgiverOpplysningerPerId:s,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=KS(n);return $S(o,e,n,r,t,s,l,a)};zn.buildInitialValues=e=>{const n=LS(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};zn.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:ql.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?ge(e.inntektFrilanser):null});zn.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:yt.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?ge(e.inntektFrilanser):null});const wi={kolVerdiRød:"_kolVerdiRød_127dm_1",avslåttIkon:"_avslåttIkon_127dm_4"},US=260,pv={[G.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[G.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[G.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[G.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[G.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[G.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[G.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[G.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[G.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[G.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},Zu=e=>{var n;return((n=pv[e.status])==null?void 0:n.rekkefølgePri)||100},HS=e=>{var n;return((n=pv[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},YS=()=>d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),CS=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),zS=(e,n)=>(n==null?void 0:n.ytelsetype)!==Nl.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/US):e.dagsats||0,JS=(e,n)=>d.jsxs(F,{gap:"2",children:[d.jsx(lp,{className:wi.avslåttIkon}),d.jsx(I,{size:"small",className:wi.avslåttIkon,children:d.jsx(m,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:V(e),b:Xt}})})]}),WS=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===G.MIDLERTIDIG_INAKTIV),ZS=(e,n,r,t)=>{const a=e.andeler.reduce((k,v)=>(v.inntektPlussNaturalytelse||0)+k,0);if(n.vilkarStatus===Si.IKKE_VURDERT)return null;if(n.vilkarStatus===Si.IKKE_OPPFYLT)return JS(r.grunnbeløp,WS(r));const s=r.grunnbeløp*6,l=a>s,o=r.dekningsgrad!==iv.HUNDRE,u=zS(e,r.ytelsesspesifiktGrunnlag);return d.jsxs(B,{gap:"6",children:[d.jsxs("div",{children:[l&&d.jsxs(d.Fragment,{children:[d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})}),d.jsx(I,{size:"small",children:V(e.avkortetPrÅr)})]}),d.jsx(Ee,{})]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})}),d.jsx(I,{size:"small",children:V(e.redusertPrÅr)})]}),d.jsx(Ee,{})]})]}),d.jsxs("div",{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(x,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})}),d.jsx(x,{size:"medium",children:u})]}),d.jsx(Ee,{hasDoubleLine:!0})]})]})},QS=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const a=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,u)=>Zu(o)-Zu(u));const s=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(B,{gap:"1",width:"500px",children:[n&&d.jsx(ie,{size:"xsmall",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:N(e.fom).format(se),tom:e.tom?N(e.tom).format(se):""}})}),d.jsxs(B,{gap:"6",children:[d.jsxs("div",{children:[e.andeler.map((o,u)=>d.jsxs($.Fragment,{children:[u===0&&d.jsx(Ee,{}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:HS(o)})}),d.jsx(I,{size:"small",className:o.erFerdigBeregnet?"":wi.kolVerdiRød,children:o.erFerdigBeregnet?V(o.inntekt):YS()})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[d.jsx(Ee,{}),d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})}),d.jsx(I,{size:"small",children:V(o.bortfaltNaturalytelse)})]})]}),d.jsx(Ee,{})]},o.status)),a&&d.jsxs(d.Fragment,{children:[d.jsxs(F,{justify:"space-between",wrap:!1,children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})}),d.jsx(I,{size:"small",children:V(CS(e.andeler))})]}),d.jsx(Ee,{hasBorderDark:!0})]})]}),l&&d.jsx(d.Fragment,{children:ZS(e,r,t,s)})]})]})},XS=[lr.ARBEIDSFORHOLD_AVSLUTTET,lr.NATURALYTELSE_TILKOMMER,lr.NATURALYTELSE_BORTFALT],eP=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,nP=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,rP=(e,n)=>{switch(e){case G.ARBEIDSTAKER:case G.FRILANSER:return n.find(r=>r.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case G.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case G.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},tP=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,a=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-a:0},aP=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},sP=(e,n)=>{const r=e.filter(s=>eP(s)),t={};r.forEach(s=>{const l=t[s.aktivitetStatus];l?l.push(s):t[s.aktivitetStatus]=[s]});const a=[];return Object.keys(t).forEach(s=>{const l=t[s],o=rP(s,n),u=l.every(j=>aP(j)),k=l.reduce((j,A)=>nP(A)+j,0),v=l.reduce((j,A)=>tP(A)+j,0),f=(k||0)+(v||0),b=!!o&&ba(o.status),y=u&&!b;a.push({inntekt:k,bortfaltNaturalytelse:v,inntektPlussNaturalytelse:f,erFerdigBeregnet:y,status:s})}),a},iP=e=>e.some(n=>XS.includes(n)),lP=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(a=>a.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!a.periodeAarsaker&&iP(a.periodeAarsaker)).map(a=>a.beregningsgrunnlagPeriodeFom).sort((a,s)=>new Date(a).getTime()-new Date(s).getTime()),t=[];for(let a=0;a<r.length;a+=1){const s=r[a],l=a+1<r.length?N(r[a+1]).subtract(1,"day").format(xe).toString():void 0,o=n.find(y=>y.beregningsgrunnlagPeriodeFom===s),u=(o==null?void 0:o.periodeAarsaker)||[],k=sP((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),v=o==null?void 0:o.redusertPrAar,f=o==null?void 0:o.avkortetPrAar,b=o==null?void 0:o.dagsats;t.push({fom:s,tom:l,årsak:u,andeler:k,redusertPrÅr:v,avkortetPrÅr:f,dagsats:b})}return t},oP=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=R.useMemo(()=>lP(e),[e]),t=r.length>1;return d.jsxs(B,{gap:"2",className:X.panelRight,children:[d.jsx(ie,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(B,{gap:"5",children:r.map(a=>d.jsx(QS,{tabellData:a,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e},a.fom))})]})},dP=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,uP=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>dP(n)).reduce((n,r)=>n+r,0):0,gP=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,Qu=(e,n)=>e>n,mP=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=uP(e),t=gP(n);return d.jsx("div",{children:d.jsxs(B,{gap:"4",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})}),d.jsxs(c,{children:[d.jsx(c.Header,{children:d.jsxs(c.Row,{children:[d.jsx(c.HeaderCell,{scope:"col"}),d.jsx(c.HeaderCell,{scope:"col",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})}),d.jsx(c.HeaderCell,{scope:"col",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),d.jsx(c.Body,{children:d.jsxs(c.Row,{children:[d.jsx(c.DataCell,{children:d.jsx(I,{size:"small",children:d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(c.DataCell,{children:d.jsx(I,{size:"small",children:V(r)})}),d.jsx(c.DataCell,{children:d.jsx(I,{size:"small",children:V(t)})})]})})]}),d.jsxs(I,{size:"small",children:[Qu(r,t)&&d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!Qu(r,t)&&d.jsx(m,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]})})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:fv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Fl,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:yv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:bv,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:jv}=ae,kP=(e,n)=>{switch(e.definisjon){case fv:return n.find(r=>r.sammenligningsgrunnlagType===me.ATFLSN||r.sammenligningsgrunnlagType===me.SN);case Fl:return n.find(r=>r.sammenligningsgrunnlagType===me.MIDLERTIDIG_INAKTIV);case yv:case bv:return n.find(r=>r.sammenligningsgrunnlagType===me.ATFLSN||r.sammenligningsgrunnlagType===me.AT_FL||r.sammenligningsgrunnlagType===me.AT||r.sammenligningsgrunnlagType===me.FL);case jv:return;default:return}},vP=(e,n)=>{const r=kP(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},Xu=e=>e&&e.length>0,pP=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],fP={[yv]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[bv]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[jv]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[Fl]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},yP=(e,n)=>e.definisjon===fv?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":fP[e.definisjon],bP=(e,n,r)=>{var t;const a=r.find(l=>l.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE),s=!!((t=a==null?void 0:a.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsx(Zn,{children:e.map(l=>d.jsx(x,{children:d.jsx(m,{id:yP(l,s||l.definisjon===Fl),values:{verdi:vP(l,n),b:Xt,br:d.jsx("br",{})}})},l.definisjon))})},jP=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],a=e.filter(l=>ba(l.status));if(!(Xu(a)&&Xu(t)))return null;const s=pP(n);return bP(a,s,t)},cP=e=>e.some(n=>n.aktivitetStatus===G.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),xl=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:a})=>d.jsxs(F,{gap:"2",align:"center",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})}),d.jsx("div",{id:"readOnlyWrapper",className:e?ce.inputPadding:void 0,children:d.jsx(ve,{name:`${r}.${n}.inntektFrilanser`,validate:a?[W,Qe(178956970)]:void 0,readOnly:e,parse:Fe,className:ce.breddeInntekt,isEdited:e&&cP(t)})})]});xl.buildInitialValues=e=>{const n=e.length>0?V(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const cv={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},hP=Me(cv),AP=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,IP=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:a,onClick:s,hasEmptyRequiredFields:l})=>e?null:d.jsx(ee,{variant:"primary",size:"small",loading:r,disabled:AP(t,r,n,l),onClick:s||Sg,type:s?"button":"submit",children:a||hP.formatMessage({id:"SubmitButton.ConfirmInformation"})}),hv=4e3,TP=kn(hv),RP=mn(3),wl="fastsettBeregningsgrnunnlagSNBegrunnelse",_l="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:EP}=ae,hr=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:a,avklaringsbehov:s,skalValideres:l})=>{const o=z();return d.jsxs(B,{gap:"10",children:[r&&d.jsxs(F,{gap:"4",align:"center",children:[d.jsx(I,{size:"small",className:ce.dynamiskKolonne,children:d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})}),d.jsx("div",{id:"readOnlyWrapper",className:e?ce.inputPadding:void 0,children:d.jsx(ve,{name:`${a}.${t}.${_l}`,validate:l?[W,Qe(178956970)]:[],parse:Fe,className:ce.breddeInntekt,isEdited:e&&n,readOnly:e})})]}),d.jsxs("div",{id:"readOnlyWrapper",className:e?ce.verticalLine:ce.textAreaWrapperHeigh,children:[d.jsx(We,{name:`${a}.${t}.${wl}`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:l?[W,TP,RP,vn]:[],isEdited:e&&n,maxLength:hv,readOnly:e,description:o.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:u=>u.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(En,{ident:s==null?void 0:s.vurdertAv,date:s==null?void 0:s.vurdertTidspunkt})]})]})};hr.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(a=>a.definisjon===EP);return{[_l]:r?V(r.overstyrtPrAar):void 0,[wl]:t&&t.begrunnelse?t.begrunnelse:void 0}};hr.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[wl],bruttoBeregningsgrunnlag:ge(e[_l])});const Av=4e3,NP=kn(Av),qP=mn(3),Ol="varigEndringNyoppstartetBegrunnelse",Dl="erVarigEndret",Vl="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:SP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:PP}=ae,BP=e=>e?d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),bt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:a,formName:s,isAksjonspunktClosed:l,avklaringsbehov:o,skalValideres:u})=>{let k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),v=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),v=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(k=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),v=d.jsx(m,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let f="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(f="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(f="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const b=z(),y=he().watch(s)[a].erVarigEndret,j=[{value:"false",label:k},{value:"true",label:v}];return d.jsxs(B,{gap:"4",children:[d.jsx(Te,{name:`${s}.${a}.${Dl}`,validate:u?[W]:[],label:b.formatMessage({id:f}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:j,isTrueOrFalseSelection:!0}),y&&d.jsxs(F,{gap:"4",align:"center",children:[d.jsx(I,{size:"small",className:ce.dynamiskKolonne,children:BP(r)}),d.jsx("div",{id:"readOnlyWrapper",className:e?ce.inputPadding:void 0,children:d.jsx(ve,{name:`${s}.${a}.${Vl}`,validate:u?[W,Qe(178956970)]:[],parse:Fe,className:ce.breddeInntekt,readOnly:e,isEdited:e&&l})})]}),d.jsx(We,{name:`${s}.${a}.${Ol}`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:u?[W,NP,qP,vn]:[],maxLength:Av,readOnly:e,description:b.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:A=>A.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(En,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})};bt.buildInitialValues=(e,n)=>{const r=e.find(a=>a.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||a.aktivitetStatus===G.BRUKERS_ANDEL),t=n.find(a=>a.definisjon===SP||a.definisjon===PP);if(t){const a=ba(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[Dl]:a,[Ol]:t.begrunnelse?t.begrunnelse:"",[Vl]:r?V(r.overstyrtPrAar):void 0}}return{}};bt.transformValues=e=>{const n=e[Dl];return{begrunnelse:e[Ol],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?ge(e[Vl]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ml,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:FP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Iv}=ae,Tv=(e,n)=>n.some(r=>r.definisjon===e),xP=e=>e&&(e.definisjon===FP||e.definisjon===Ml||e.definisjon===Iv),Kn=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:a=!1,fieldIndex:s,formName:l,skalValideres:o})=>{if(!xP(n))return null;const u=n?!ba(n.status):!1;return r?d.jsx(hr,{readOnly:e,isAksjonspunktClosed:u,erNyArbLivet:r,fieldIndex:s,formName:l,avklaringsbehov:n,skalValideres:o}):d.jsx(bt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Iv,erNyoppstartet:a,fieldIndex:s,formName:l,isAksjonspunktClosed:u,avklaringsbehov:n,skalValideres:o})};Kn.buildInitialValues=(e,n)=>Tv(Ml,n)?hr.buildInitialValuesNyIArbeidslivet(e,n):{...bt.buildInitialValues(e,n)};Kn.transformValues=(e,n)=>Tv(Ml,n)?hr.transformValuesNyIArbeidslivet(e):bt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:Rv,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Ev,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Nv,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:qv,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Sv}=ae,wP=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},_P=(e,n)=>{switch(e.definisjon){case Rv:return wP(n);case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case Ev:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case Nv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case qv:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},OP=e=>{const n=e.aktivitetStatus||[],r=n.some(a=>rv(a)),t=n.some(a=>nv(a));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},DP=(e,n)=>{switch(e.definisjon){case Rv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case Sv:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case Ev:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case Nv:case qv:return OP(n);default:return"Ukjent aksjonspunkt"}},VP=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs(F,{gap:"6",align:"center",wrap:!1,className:r?ce.aksjonspunktBehandlerNoBorder:ce.aksjonspunktBehandlerHeader,children:[!r&&d.jsx("div",{children:d.jsx(yr,{className:ce.warningIcon})}),d.jsxs(B,{gap:"2",children:[d.jsx(x,{children:d.jsx(m,{id:DP(e,n)})}),d.jsx(I,{children:d.jsx(m,{id:_P(e,n)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:MP,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:GP,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:LP,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:KP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:$P}=ae;var Jn=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(Jn||{});const Gl=(e,n)=>me.SN===e||me.MIDLERTIDIG_INAKTIV===e||me.ATFLSN===e&&n!=null&&n.find(r=>tv(r))?"8-35":"8-30",_i=e=>$P===e.definisjon||KP===e.definisjon||LP===e.definisjon?"8-35":MP===e.definisjon||GP===e.definisjon?"8-30":null,UP=mn(3),Pv=4e3,HP=kn(Pv),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:eg,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:ng,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:rg,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:tg,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:ag}=ae,YP="BeregningForm",Zt=(e,n)=>_i(e)===n,CP=(e,n)=>!!e.find(r=>Zt(r,n)),Ll=e=>`${YP}_${e}`,sg=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},Oi=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],zP=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===lr.ARBEIDSFORHOLD_AVSLUTTET)),Bv=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),JP=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],a=t.filter(k=>k.aktivitetStatus===G.ARBEIDSTAKER),s=t.filter(k=>k.aktivitetStatus===G.FRILANSER),l=t.filter(k=>k.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||k.aktivitetStatus===G.BRUKERS_ANDEL),o={...zn.buildInitialValues(e.avklaringsbehov),...yt.buildInitialValues(r),...xl.buildInitialValues(s),...Bl.buildInitialValues(a)},u={...Kn.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===me.ATFLSN?{...o,...u}:n.sammenligningsgrunnlagType===me.AT_FL?{...o}:n.sammenligningsgrunnlagType===me.SN?{...u}:n.sammenligningsgrunnlagType===me.MIDLERTIDIG_INAKTIV?{...u}:{}:{...hr.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},WP=(e,n,r,t)=>{let a={};return r&&(a=JP(e,t)),{...a,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},ig=(e,n,r,t)=>({[r]:e.map(a=>{var s;return WP(a,Bv(n,a.vilkårsperiodeFom),a.avklaringsbehov.find(l=>Zt(l,t)),(s=a.sammenligningsgrunnlagPrStatus)==null?void 0:s.find(l=>Gl(l.sammenligningsgrunnlagType,a.aktivitetStatus)===t))})}),ZP=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:a,skalValideres:s})=>{const l=Oi(n).find(v=>v.aktivitetStatus&&v.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE),o=l&&l.erNyIArbeidslivet,u=r.definisjon===ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||l&&l.næringer&&l.næringer.some(v=>v.erVarigEndret===!0),k=l&&l.næringer&&l.næringer.some(v=>v.erNyoppstartet===!0);return!o&&!k&&!u?null:d.jsx(Kn,{readOnly:e,avklaringsbehov:r,erNyArbLivet:o,erVarigEndring:u,erNyoppstartet:k,fieldIndex:t,formName:a,skalValideres:s})},QP=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:a,fieldIndex:s,formName:l,avklaringsbehov:o,skalValideres:u})=>{const k=zP(n),v=sg(n,G.FRILANSER),f=sg(n,G.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[k&&d.jsx(yt,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,skalValideres:u}),!k&&f&&d.jsx(ql,{readOnly:t,alleAndelerIForstePeriode:Oi(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:s,formName:l,skalValideres:u}),v&&d.jsx(xl,{readOnly:t,fieldIndex:s,formName:l,alleAndelerIForstePeriode:Oi(n),skalValideres:u}),d.jsxs("div",{children:[d.jsx(We,{name:`${l}.${s}.ATFLVurdering`,label:d.jsx(m,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[W,HP,UP,vn],maxLength:Pv,readOnly:t,className:ce.textAreaStyle,description:a.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:b=>b.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(En,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})]})},XP=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(a=>a.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),Fr=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),eB=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,a)=>!t.beregningsgrunnlagPeriodeFom||!a.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(a.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(Fr(eg,e.gjeldendeAvklaringsbehov))return[{kode:eg,aksjonspunktData:zn.transformATFLValues(e,r)}];if(Fr(tg,e.gjeldendeAvklaringsbehov))return[{kode:tg,aksjonspunktData:Kn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Fr(ag,e.gjeldendeAvklaringsbehov))return[{kode:ag,aksjonspunktData:Kn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Fr(rg,e.gjeldendeAvklaringsbehov))return[{kode:rg,aksjonspunktData:Kn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Fr(ng,e.gjeldendeAvklaringsbehov))return[{kode:ng,aksjonspunktData:zn.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},nB=(e,n)=>e[Ll(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:eB(r)})).reduce(XP,[]),rB=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:a,vilkår:s,submitCallback:l,formData:o,setFormData:u,aktivIndex:k,lovparagraf:v,finnesFormSomSubmittes:f,setSubmitting:b})=>{const y=z(),j=(H,C)=>{b(!0),l(nB(H,C))},A=H=>{const C=Bv(s,H.vilkårsperiodeFom);return C.vurderesIBehandlingen&&!C.erForlengelse},h=R.useMemo(()=>a.filter(H=>CP(H.avklaringsbehov,v)),[a,v]),T=Ll(v),E=$e({defaultValues:o||ig(h,s,T,v)}),q=R.useCallback(()=>{E.reset(ig(h,s,T,v))},[E,h,s,T,v]),S=R.useMemo(()=>a.reduce((H,C)=>H+C.avklaringsbehov.length,0),[a]),P=ip(S);R.useEffect(()=>{P!==void 0&&S!==P&&(b(!1),o||q())},[S,o,q,b,P]);const{formState:{dirtyFields:D},control:_,trigger:U}=E,{fields:Y}=Ze({name:T,control:_}),w=R.useRef(null);R.useEffect(()=>{var H,C;f&&(H=D[T])!=null&&H[k]&&U(),a[k].avklaringsbehov.some(le=>Zt(le,v)&&le.status===av.OPPRETTET)&&((C=w==null?void 0:w.current)==null||C.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[k]);const M=H=>H.find(C=>Zt(C,v)),L=(H,C)=>{const le=A(h[H]),je=M(C);return v===Jn.ÅTTE_TRETTI&&je?d.jsx(QP,{kodeverkSamling:r,allePerioder:h[H].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:y,fieldIndex:H,formName:T,avklaringsbehov:je,skalValideres:le}):v===Jn.ÅTTE_TRETTIFEM&&je?d.jsx(ZP,{readOnly:e,allePerioder:h[H].beregningsgrunnlagPeriode,fieldIndex:H,formName:T,avklaringsbehov:je,skalValideres:le}):null},K=a[k].vilkårsperiodeFom;return d.jsx("div",{ref:w,children:d.jsx(Ue,{formMethods:E,onSubmit:H=>j(H,v),setDataOnUnmount:u,children:Y.map((H,C)=>d.jsxs("div",{style:{display:h[C].vilkårsperiodeFom===K?"block":"none"},children:[d.jsx(VP,{readOnly:e,avklaringsbehov:M(h[C].avklaringsbehov),beregningsgrunnlag:h[C]}),d.jsxs(B,{gap:"4",className:`${e?ce.aksjonspunktBehandlerNoBorder:ce.aksjonspunktBehandlerBorder} ${ce.aksjonspunktWrapper}`,children:[L(C,h[C].avklaringsbehov),d.jsx("div",{children:d.jsx(IP,{isReadOnly:e,isSubmittable:!n,isDirty:E.formState.isDirty,isSubmitting:f})})]})]},H.id))})})},tB=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const a=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,s=t.filter(o=>o.sammenligningsgrunnlagType===me.AT_FL||o.sammenligningsgrunnlagType===me.AT||o.sammenligningsgrunnlagType===me.FL),l=a&&s.length===0;return n?d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(B,{gap:"2",children:[e.isMilitaer&&d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})}),e.isDagpenger&&d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})}),l&&d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})]})},aB="_marginLeft_74vdi_64",sB={marginLeft:aB},iB=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:a,avvikProsent:s}=n,l=parseFloat(s.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",u=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(xn,{width:"400px",children:[d.jsx(Ee,{}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:o})}),d.jsx(I,{size:"small",children:e||e===0?V(e):"-"})]}),d.jsx(Ee,{}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:u})}),d.jsx(I,{size:"small",children:V(a)})]}),d.jsx(Ee,{hasBorderDark:!0}),d.jsxs(F,{wrap:!1,justify:"space-between",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})}),d.jsxs(F,{gap:"14",children:[d.jsx(I,{size:"small",className:`${l>25?X.redError:""} ${X.semiBoldText} ${sB.marginLeft}`,children:d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})}),d.jsx(I,{size:"small",children:V(t===void 0?0:t)})]})]})]})},lB=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,oB=(e,n)=>e?e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>lB(r)):[],lg=e=>e||0,dB=e=>e.beregnetPrAar?e.beregnetPrAar:0,og=(e,n)=>{const r=oB(e,n);if(r){const t=r.reduce((l,o)=>l+dB(o),0),a=r.reduce((l,o)=>{var u;return l+lg((u=o==null?void 0:o.arbeidsforhold)==null?void 0:u.naturalytelseBortfaltPrÅr)},0),s=r.reduce((l,o)=>{var u;return l+lg((u=o==null?void 0:o.arbeidsforhold)==null?void 0:u.naturalytelseTilkommetPrÅr)},0);return t+a-s}return 0},uB=(e,n)=>{const r=d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case me.AT:case me.FL:case me.AT_FL:return r;case me.SN:return t;case me.ATFLSN:return n===Jn.ÅTTE_TRETTIFEM?t:r;case me.MIDLERTIDIG_INAKTIV:return d.jsx(m,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},dg=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===G.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===G.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===me.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===me.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===me.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:og(n,[G.ARBEIDSTAKER,G.FRILANSER]),erPGI:!1}:{inntekt:og(n,[G.ARBEIDSTAKER,G.FRILANSER]),erPGI:!1}};function ug(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const gB=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(a=>a.definisjon===ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=ug(t,Jn.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(a=>{const s=Gl(a.sammenligningsgrunnlagType,r.aktivitetStatus);t=ug(t,s,r)}),t},{}),mB=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:a,gjelderBesteberegning:s,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:u,submitCallback:k,formData:v,setFormData:f,aktivIndex:b})=>{var y;const j=gB(o),[A,h]=R.useState(!1),T=d.jsx(tB,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:s,erNyIArbeidslivet:!!((y=o[b].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&y.find(q=>q.erNyIArbeidslivet))}),E=q=>{var S;if(j[q]&&j[q].length>0){const P=j[q],D=o[b].vilkårsperiodeFom,_=P.find(K=>K.vilkårsperiodeFom===D),U=_?(S=_.sammenligningsgrunnlagPrStatus)==null?void 0:S.find(K=>Gl(K.sammenligningsgrunnlagType,_==null?void 0:_.aktivitetStatus)===q):void 0,Y=!!j[q].find(K=>!!K.avklaringsbehov.find(H=>_i(H)===q)),w=_&&!!_.avklaringsbehov.find(K=>_i(K)===q),M=(_==null?void 0:_.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],L=Ll(q);return d.jsxs("div",{children:[!!U&&d.jsxs(d.Fragment,{children:[d.jsx(ie,{size:"xsmall",children:uB(U,q)}),d.jsx(iB,{sammenligningsgrunnlag:U,beregnetAarsinntekt:dg(U,M).inntekt,erPGI:dg(U,M).erPGI}),d.jsx("div",{className:X.storSpace})]}),Y&&d.jsxs("div",{style:{display:w?"block":"none"},children:[d.jsx(rB,{readOnly:e,lovparagraf:q,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:a,beregningsgrunnlagListe:o,vilkår:u,submitCallback:k,formData:v&&L in v?v:void 0,setFormData:f,aktivIndex:b,finnesFormSomSubmittes:A,setSubmitting:h}),d.jsx("div",{className:X.storSpace})]})]})}return null};return d.jsxs(B,{gap:"5",className:X.panelRight,children:[T,d.jsxs("div",{children:[E(Jn.ÅTTE_TRETTI),E(Jn.ÅTTE_TRETTIFEM)]})]})},xr=e=>N(e).locale(xi).format("MMMM");function Nt(e,n,r){const t=e.filter(a=>a.lønnsendringscenario===n).map(a=>`i ${ja(r[a.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${N(a.sisteLønnsendringsdato).format(se)}`);return t.reduce((a,s,l)=>l===0?s:l<t.length-2?`${a}, ${s}`:`${a} og ${s}`,"")}const kB=(e,n,r,t)=>{switch(e){case fn.MANUELT_BEHANDLET:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:Nt(r,fn.MANUELT_BEHANDLET,t)}});case fn.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:Nt(r,fn.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:xr(N(n).subtract(1,"month").format(Ir)),forrigeMåned:xr(N(n).subtract(2,"month").format(Ir))}});case fn.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:Nt(r,fn.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:xr(N(n).subtract(1,"month").format(Ir))}});case fn.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:Nt(r,fn.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:xr(N(n).subtract(1,"month").format(Ir)),nesteMåned:xr(N(n).subtract(2,"month").format(Ir))}});default:return null}};function vB(e,n,r){return sp(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsx("p",{children:kB(t,n,e,r)},t))}const pB=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:vB(n.lønnsendringSaksopplysning,e,r)}),d.jsx(ap,{saksopplysninger:t})},fB=e=>{switch(e){case G.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case G.FRILANSER:return"alt1";case G.ARBEIDSTAKER:return"alt3";default:return"neutral"}},yB=(e,n)=>{const r=[];return e.filter((t,a,s)=>a===s.findIndex(l=>l===t)).forEach(t=>{var a;const s=((a=n[fa.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:a.navn)||"";r.push({visningsNavn:s,kode:t,tagType:fB(t)})}),r.sort((t,a)=>t.visningsNavn>a.visningsNavn?1:-1),d.jsx(F,{gap:"2",children:r.map(t=>d.jsx("div",{className:X.tagRad,children:d.jsx(ia,{variant:t.tagType,title:t.visningsNavn,className:X.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},bB=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:a})=>d.jsxs(B,{gap:"4",className:X.panelLeft,children:[yB(n,r),d.jsxs(F,{gap:"2",children:[d.jsx(I,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})}),d.jsx(I,{size:"small",className:X.semiBoldText,children:d.jsx(be,{dateString:e})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsx(pB,{arbeidsgiverOpplysningerPerId:a,skjeringstidspunktDato:e,saksopplysninger:t})]}),gg=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,a)=>t+a,0);return!r||r===0?0:r},Fv=e=>e.month()===2&&e.year()===2020,jB=e=>{const n=N(e.tom);return Fv(n)},xv=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const a=N(n.beregningsgrunnlagPeriodeFom);if(Fv(a)&&t.some(o=>jB(o))){const o=N("2020-04-30"),u=t.find(k=>N(k.tom).isSame(o,"day"));return u?u.frisinnAndeler.filter(k=>k.statusSøktFor===e):null}const s=N(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!N(o.fom).isBefore(a)&&N(o.tom).isSame(s,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},pr=(e,n,r)=>{const t=xv(e,n,r);return!!t&&t.length>0},Je=(e,n,r)=>{if(!e||!n||!r)return 0;if(pr(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return gg(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return gg(r.beregningsgrunnlagPrStatusOgAndel||[],e)},mg=(e,n,r)=>{const t=xv(e,n,r);if(!t||t.length<1)return 0;const a=t.map(({oppgittInntekt:s})=>s).reduce((s,l)=>s+l,0);return!a||a===0?0:a},wv=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===lv.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),a=t[t.length-1],s=N(a.tom);return s.month()===3&&s.year()===2020?t.filter(l=>N(l.fom).month()===3||N(l.fom).month()===2):t.filter(l=>N(l.fom).month()===s.month()&&N(l.fom).year()===s.year())}return n},cB=(e,n)=>{let r=null;return n!==Se&&(r=n),d.jsx(m,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:N(e).format(se),tom:r?N(r).format(se):""}},`fom-tom${e}${r}`)},_v=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,a=n.frisinnPerioder,s=Array.isArray(a)&&a.find(l=>!N(r).isBefore(l.fom)&&!N(t).isAfter(l.tom));return s?s.frisinnAndeler:[]},kg=({tekstId:e,beløp:n})=>d.jsxs(F,{gap:"2",children:[d.jsx(I,{className:X.tabellAktivitet,children:d.jsx(m,{id:e})}),d.jsx(I,{size:"small",className:X.tabellInntekt,children:V(n)})]}),vg=(e,n,r,t,a)=>{const s=a/100,l=n*s;return d.jsxs(d.Fragment,{children:[d.jsxs(F,{gap:"2",children:[d.jsx(I,{className:X.tabellAktivitet,children:d.jsx(m,{id:e,values:{grad:a}})}),d.jsx(I,{size:"small",className:X.tabellInntekt,children:V(l)})]}),!!t||t===0&&d.jsxs(F,{gap:"2",children:[d.jsx(I,{className:X.tabellAktivitet,children:d.jsx(m,{id:r})}),d.jsx(I,{size:"small",className:X.tabellInntekt,children:V(t)})]})]})},qt=e=>e||e===0,hB=e=>{const n=N(e);return n.isBefore(N("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(N("2022-01-01","YYYY-MM-DD"))?60:70},AB=(e,n,r,t)=>{const a=_v(e,n);if(!a||a.length<1)return null;const s=a.some(v=>v.statusSøktFor===G.FRILANSER)?r:null,l=a.some(v=>v.statusSøktFor===G.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=mg(G.FRILANSER,e,n),u=mg(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n),k=hB(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[qt(s)&&d.jsx(kg,{tekstId:"Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",beløp:s||0}),qt(s)&&vg("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",s||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,k),qt(l)&&d.jsx(kg,{tekstId:"Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",beløp:l||0}),qt(l)&&vg("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",u,k),d.jsx("div",{className:X.colDevider}),d.jsxs(F,{gap:"2",children:[d.jsx(oe,{className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Resultat.Dagsats"})}),d.jsx(I,{size:"small",className:X.tabellInntekt,children:V(e.dagsats)})]})]})},IB=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const a=_v(e,n);if(!a||a.length<1)return null;const s=r>=0?r:0,l=t>=0?t:0;return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",children:cB(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)}),AB(e,n,s,l)]})},Ov=e=>e.grunnbeløp?e.grunnbeløp*6:0,TB=(e,n)=>{if(!pr(G.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Ov(e);const t=Je(G.ARBEIDSTAKER,e,n);if(r-=t,!pr(G.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const s=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=s}const a=Je(G.FRILANSER,e,n);return a>r?r:a},RB=(e,n)=>{if(!pr(G.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Ov(e);const t=Je(G.ARBEIDSTAKER,e,n);r-=t;const a=Je(G.FRILANSER,e,n);r-=a;const s=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return s>r?r:s},EB=(e,n)=>{const r=N(e.beregningsgrunnlagPeriodeFom),t=N(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(a=>!N(a.fom).isBefore(r)&&!N(a.tom).isAfter(t))},NB=({beregningsgrunnlag:e})=>{const n=wv(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>EB(t,n)):[];return d.jsxs("div",{children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Resultat"})}),r.map(t=>d.jsx("div",{children:d.jsx(IB,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:TB(e,t),næringGrunnlag:RB(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},qB=N("2020-04-01"),SB=(e,n,r)=>d.jsxs(F,{gap:"2",children:[d.jsx(I,{className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:V(e),annenInntekt:V(n)}})}),d.jsx(I,{size:"small",className:X.tabellInntekt,children:V(r)})]}),PB=(e,n)=>{if(!Array.isArray(n))return!1;const r=N(e.beregningsgrunnlagPeriodeFom),t=N(e.beregningsgrunnlagPeriodeTom);return n.some(a=>!N(a.fom).isBefore(r)&&!N(a.tom).isAfter(t))},BB=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(PB(t,n)){const a=N(t.beregningsgrunnlagPeriodeTom),s=N(t.beregningsgrunnlagPeriodeTom).endOf("month");a.isAfter(qB)&&a.isSame(s,"day")&&t.beregningsgrunnlagPeriodeTom!==Se&&r.push(t)}}),r},FB=(e,n)=>{const r=N(n.beregningsgrunnlagPeriodeFom),t=N(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},xB=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=Je(G.ARBEIDSTAKER,e,n),a=e.grunnbeløp*6;let s=t;if(!pr(G.FRILANSER,n,r)){const v=Je(G.FRILANSER,e,n);s+=v}if(!pr(G.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const v=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,n);s+=v}const l=a>s?a-s:0,o=n.beregningsgrunnlagPeriodeTom,u=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(v=>FB(v,n)),k=u?u.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:N(k).format(se),tom:o?N(o).format(se):""}},`fom-tom${k}${o}`)}),SB(a,s,l)]})},wB=({beregningsgrunnlag:e})=>{const n=wv(e.ytelsesspesifiktGrunnlag),r=BB(e.beregningsgrunnlagPeriode,n);return d.jsx("div",{children:r.map(t=>d.jsx("div",{children:xB(e,t)},t.beregningsgrunnlagPeriodeFom))})},_B=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=Je(G.SELVSTENDIG_NAERINGSDRIVENDE,e,r),a=Je(G.FRILANSER,e,r),s=Je(G.ARBEIDSTAKER,e,r);return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})}),d.jsxs(F,{gap:"2",children:[d.jsx(I,{size:"small",className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})}),d.jsx(x,{size:"small",className:X.tabellInntekt,children:V(s)})]}),d.jsxs(F,{gap:"2",children:[d.jsx(I,{size:"small",className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})}),d.jsx(x,{size:"small",className:X.tabellInntekt,children:V(a)})]}),d.jsxs(F,{gap:"2",children:[d.jsx(I,{size:"small",className:X.tabellAktivitet,children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})}),d.jsx(x,{size:"small",className:X.tabellInntekt,children:V(t)})]})]})},pg=(e,n,r)=>d.jsx(I,{size:"small",children:d.jsx(m,{id:e,values:{fom:N(n).format(se),tom:N(r).format(se)}})}),OB=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===G.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===G.FRILANSER);return d.jsxs("div",{children:[r&&pg("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&pg("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},DB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs(B,{gap:"2",children:[d.jsx(x,{size:"small",className:X.avsnittOverskrift,children:d.jsx(m,{id:"Beregningsgrunnlag.Søknad.Tittel"})}),Array.isArray(r)&&r.map(t=>OB(t))]})},VB="_aksjonspunktBehandlerContainer_o9hgh_6",MB={aksjonspunktBehandlerContainer:VB},GB=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),LB=({beregningsgrunnlag:e})=>d.jsxs(B,{gap:"4",className:MB.aksjonspunktBehandlerContainer,children:[d.jsx(oe,{children:d.jsx(m,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(DB,{beregningsgrunnlag:e}),d.jsx(_B,{beregningsgrunnlag:e}),GB(e)&&d.jsxs(d.Fragment,{children:[d.jsx(wB,{beregningsgrunnlag:e}),d.jsx(NB,{beregningsgrunnlag:e})]})]}),KB=e=>d.jsx(LB,{beregningsgrunnlag:e}),$B=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===Nl.FRISINN?KB(e):null},UB=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===sv.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,HB=e=>!!(e!=null&&e.besteberegninggrunnlag),YB=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],CB=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:a,vilkarPeriode:s,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:u,vilkår:k,submitCallback:v,formData:f,setFormData:b,aktivIndex:y})=>{var j;const{skjaeringstidspunktBeregning:A,beregningsgrunnlagPeriode:h,faktaOmBeregning:T,ytelsesspesifiktGrunnlag:E}=n,q=UB(T),S=HB(E),P=d.jsx("div",{className:X.storSpace}),D=YB(h),_=o&&o.length>0;return d.jsxs(B,{gap:"4",children:[_&&d.jsx(jP,{avklaringsbehov:o,beregningsgrunnlag:n}),d.jsxs(F,{gap:"2",wrap:!1,children:[d.jsxs(B,{gap:"4",width:"50%",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(bB,{kodeverkSamling:a,aktivitetStatusList:D,skjeringstidspunktDato:A,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),P,r.skalViseBeregningsgrunnlag&&d.jsx(zn,{relevanteStatuser:r,allePerioder:h,gjelderBesteberegning:q,kodeverkSamling:a,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),S&&d.jsxs(d.Fragment,{children:[P,d.jsx(mP,{besteMåneder:(j=E==null?void 0:E.besteberegninggrunnlag)==null?void 0:j.besteMåneder,periode:h[0]})]})]}),d.jsxs(B,{width:"50%",children:[d.jsx(ie,{size:"medium",className:X.panelRight,children:d.jsx(m,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(mB,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:a,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:q,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:u,vilkår:k,submitCallback:v,formData:f,setFormData:b,aktivIndex:y}),d.jsx($B,{beregningsgrunnlag:n}),s&&d.jsx(oP,{beregningsgrunnlag:n,vilkårsperiode:s})]})]})]})},zB="_readOnlyBlokk_3qjl7_1",JB={readOnlyBlokk:zB},WB=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(B,{gap:"4",children:[d.jsx(x,{size:"small",children:d.jsx(m,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsxs(I,{size:"small",className:JB.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(Cr,{})]})]}),ZB=[ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ae.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],QB=e=>e.avklaringsbehov.filter(n=>ZB.some(r=>r===n.definisjon)),XB=e=>({isArbeidstaker:e.some(n=>rv(n)),isFrilanser:e.some(n=>nv(n)),isSelvstendigNaeringsdrivende:e.some(n=>tv(n)),isMidlertidigInaktiv:e.some(n=>n===G.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>aq(n)),harDagpengerEllerAAP:e.some(n=>ev(n)),isAAP:e.some(n=>n===G.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===G.DAGPENGER||n===G.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>sq(n))||e.length>1,isMilitaer:e.some(n=>iq(n))}),eF=e=>e?e.find(n=>n.definisjon===ae.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,fg=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),nF=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:a,vilkar:s,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:u,setFormData:k})=>{const v=n[e],f=XB(v.aktivitetStatus),b=eF(v.avklaringsbehov);function y(j){const A=fg(s,j.vilkårsperiodeFom);return A.vurderesIBehandlingen&&!A.erForlengelse}return d.jsxs(B,{gap:"14",children:[d.jsx(CB,{readOnly:t||!y(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:QB(n[e]),relevanteStatuser:f,readOnlySubmitButton:a,kodeverkSamling:l,vilkarPeriode:fg(s,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:s,submitCallback:r,formData:u,setFormData:k,aktivIndex:e}),b&&d.jsx(WB,{avklaringsbehov:b})]})},rF="_contentContainer_1ddng_1",tF="_sideMenuContainer_1ddng_4",aF="_mainContainer--withSideMenu_1ddng_7",sF="_advarselIkon_1ddng_12",wt={contentContainer:rF,sideMenuContainer:tF,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:aF,advarselIkon:sF},iF=[ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ae.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ae.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],lF=[],oF=WN.bind(wt),yg=Me(cv),dF=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(B,{gap:"2",children:[d.jsx(ie,{size:"medium",children:d.jsx(m,{id:"Beregningsgrunnlag.Title"})}),d.jsx(I,{size:"small",children:d.jsx(m,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})]})},uF=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},gF=e=>e.avklaringsbehov.some(n=>iF.some(r=>r===n.definisjon)&&n.kanLoses),mF=(e,n)=>e.map(r=>({skalVurderes:uF(n,r),harAvklaringsbehov:gF(r),stp:N(r.skjaeringstidspunktBeregning).format(se)})),kF=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:u})=>{const k=e||lF,v=k.length>1;k.sort((A,h)=>A.skjaeringstidspunktBeregning.localeCompare(h.skjaeringstidspunktBeregning)).reverse();const[f,b]=R.useState(0),y=mF(k,a),j=oF("mainContainer",{"mainContainer--withSideMenu":v});return R.useEffect(()=>{const A=y.findIndex(h=>h.skalVurderes&&h.harAvklaringsbehov);A>-1&&b(A)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(De,{value:yg,children:dF(a)}):d.jsx(De,{value:yg,children:d.jsxs("div",{className:j,children:[v&&d.jsx("div",{className:wt.sideMenuContainer,children:d.jsx(cp,{links:y.map((A,h)=>({icon:A.skalVurderes&&A.harAvklaringsbehov?d.jsx(yr,{className:wt.advarselIkon}):null,active:f===h,label:`${A.stp}`})),onClick:b})}),d.jsx("div",{className:wt.contentContainer,children:d.jsx(nF,{aktivtBeregningsgrunnlagIndeks:f,beregningsgrunnlagListe:k,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:a,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,setFormData:u,formData:o})})]})})},vF=e=>{switch(e){case ae.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return re.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ae.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return re.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ae.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return re.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ae.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return re.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},pF=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(a=>({kode:vF(a.kode),...a.grunnlag[0]}));return e(t)},fF=(e,n)=>{const r=e.find(t=>t.vilkarType&&t.vilkarType===Yn.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[{avslagKode:r.avslagKode??void 0,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:n?n.skjaeringstidspunktBeregning:"",tom:Se},vilkarStatus:r.vilkarStatus}]}},yF=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],bF=[re.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,re.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,re.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,re.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],jF=[Yn.BEREGNINGSGRUNNLAGVILKARET],cF=({arbeidsgiverOpplysningerPerId:e})=>{const n=z(),r=zi(bF,jF),{behandling:t}=R.use(Rn),a=Tn(t),{data:s,isFetching:l}=In(a.beregningsgrunnlagOptions(t));return i.jsx(Vg,{standardPanelProps:r,prosessPanelKode:Vi.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:l?i.jsx(An,{}):i.jsx(hF,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagsvilkar:fF(r.vilkar,s),beregningsgrunnlagListe:yF(s),arbeidsgiverOpplysningerPerId:e,submitCallback:pF(r.submitCallback),isReadOnly:r.isReadOnly,readOnlySubmitButton:r.readOnlySubmitButton})})},hF=e=>{const{mellomlagretFormData:n,setMellomlagretFormData:r}=_n();return i.jsx(kF,{...e,formData:n,setFormData:r})};cF.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const bg=re.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,di=[Yn.MEDLEMSKAPSVILKÅRET_LØPENDE],AF=()=>{const e=z(),n=zi([bg],di);return i.jsx(Zv,{overstyringApKode:bg,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:i.jsx(xp,{standardPanelProps:n,prosessPanelKode:Vi.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:wg(n.aksjonspunkter,di,n.vilkar),children:i.jsx(yp,{vilkar:n.vilkar,vilkarKoder:di,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};AF.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel"};const IF="_panel_1wwvz_1",TF="_hyphen_1wwvz_9",RF="_marginTop_1wwvz_19",ui={panel:IF,hyphen:TF,marginTop:RF},EF=(e,n)=>e&&n!==void 0,NF=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===Hn.OPPRETTET?void 0:t!==n,ansesMottatt:t,...br.buildInitialValues(e)}},qF=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:re.VURDER_SOKNADSFRIST_FORELDREPENGER,...br.transformValues(e)}),Dv=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:a,submitCallback:s,harÅpneAksjonspunkter:l}=hn(),o=NF(t,n,r),{mellomlagretFormData:u,setMellomlagretFormData:k}=_n(),v=$e({defaultValues:u||o}),f=v.watch("gyldigSenFremsetting"),b=r==null?void 0:r.søknadsperiodeStart,y=r==null?void 0:r.søknadsperiodeSlutt,j=r==null?void 0:r.utledetSøknadsfrist;return i.jsx(Ue,{formMethods:v,onSubmit:A=>s(qF(A)),setDataOnUnmount:k,children:i.jsxs(B,{gap:"6",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),l&&i.jsx(Zn,{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:j?pe(j):""}})}),i.jsxs(F,{justify:"space-between",children:[i.jsxs(xn,{className:ui.panel,children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),i.jsxs("ul",{className:ui.hyphen,children:[i.jsx("li",{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),i.jsx("li",{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),i.jsx("li",{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]}),i.jsxs("div",{children:[i.jsx(oe,{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&i.jsx(I,{size:"small",children:pe(n)})]}),b&&y&&i.jsxs("div",{children:[i.jsx(oe,{children:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),i.jsx(I,{size:"small",children:Tg(b,y)})]})]}),i.jsx("div",{className:ui.marginTop,children:i.jsxs(B,{gap:"4",children:[i.jsx(br,{readOnly:a}),i.jsx(Te,{name:"gyldigSenFremsetting",validate:[W],isReadOnly:a,isHorizontal:!0,isEdited:EF(t.length>0,f),isTrueOrFalseSelection:!0,radios:[{value:"true",label:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),f&&i.jsx(Ag,{children:i.jsx(Un,{name:"ansesMottatt",isReadOnly:a,label:i.jsx(m,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[W,bn,mp]})}),i.jsx(wp,{isReadOnly:a,isSubmittable:!e,isSubmitting:v.formState.isSubmitting,isDirty:v.formState.isDirty})]})})]})})};Dv.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const SF={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},PF=Me(SF),Vv=({soknad:e,readOnlySubmitButton:n})=>i.jsx(De,{value:PF,children:i.jsx(Dv,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Vv.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const BF=[re.VURDER_SOKNADSFRIST_FORELDREPENGER],FF=()=>{const e=z(),n=zi(BF),{behandling:r}=R.use(Rn),t=Tn(r),{data:a}=In(t.søknadOptions(r));return i.jsx(Vg,{standardPanelProps:n,prosessPanelKode:Vi.SOEKNADSFRIST,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:wg(n.aksjonspunkter),children:a?i.jsx(Vv,{soknad:a,readOnlySubmitButton:n.readOnlySubmitButton}):i.jsx(An,{})})};FF.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel"};const Fn={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},xF="_godkjentImage_1bp9b_1",wF="_avslattImage_1bp9b_7",jg={godkjentImage:xF,avslattImage:wF},_F="MELLOMLIGGENDE_PERIODE",OF=e=>e===Fn.BEKREFTET_AVVIST||e===Fn.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",cg=e=>e===Fn.BEKREFTET_GODKJENT||e===Fn.ANTATT_GODKJENT||e===_F,Mv=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const a=z();return i.jsx(xn,{borderWidth:"1",padding:"4",children:i.jsxs(B,{gap:"4",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})}),i.jsxs(F,{gap:"2",children:[i.jsx(ee,{size:"xsmall",icon:i.jsx(ta,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.prevPeriod"}),children:i.jsx(m,{id:"TimeLineData.prevPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:i.jsx(m,{id:"TimeLineData.nextPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx($n,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:a.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:e.fom,dateStringTom:e.tom})}),i.jsxs(F,{gap:"1",children:[cg(e.klasse)&&i.jsx(Mi,{className:jg.godkjentImage}),!cg(e.klasse)&&i.jsx($n,{className:jg.avslattImage}),i.jsx(I,{size:"small",children:i.jsx(m,{id:OF(e.klasse)})})]})]})})};Mv.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const DF={danger:i.jsx(Og,{}),success:i.jsx(Ci,{}),info:i.jsx(Up,{})},VF=e=>e===Fn.BEKREFTET_AVVIST||e===Fn.ANTATT_AVVIST?"danger":e===Fn.BEKREFTET_GODKJENT||e===Fn.ANTATT_GODKJENT?"success":"info",MF=e=>e.map(n=>({start:N(n.fom).toDate(),end:N(n.tom).toDate(),status:VF(n.klasse),opptjeningsperiode:n})),GF=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",Gv=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=z(),a=e.toSorted((b,y)=>N(b.fom).diff(N(y.fom))),s=MF(a),[l,o]=R.useState(),u=b=>{const y=s.find(j=>{var A;return((A=j.opptjeningsperiode)==null?void 0:A.fom)===b});y&&o(y)},k=()=>{o(void 0)},v=()=>{if(s){const b=s.findIndex(y=>{var j,A;return((j=y.opptjeningsperiode)==null?void 0:j.fom)===((A=l==null?void 0:l.opptjeningsperiode)==null?void 0:A.fom)})+1;b<s.length&&o(s[b])}},f=()=>{if(s){const b=s.findIndex(y=>{var j,A;return((j=y.opptjeningsperiode)==null?void 0:j.fom)===((A=l==null?void 0:l.opptjeningsperiode)==null?void 0:A.fom)})-1;b>=0&&o(s[b])}};return i.jsxs(i.Fragment,{children:[i.jsxs(Oe,{startDate:N(n).subtract(1,"months").toDate(),endDate:N(r).add(10,"days").toDate(),children:[i.jsxs(Oe.Pin,{date:N(n).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTimeLineLight.StartDato"})}),i.jsx(I,{size:"small",children:i.jsx(be,{dateString:n})})]}),i.jsxs(Oe.Pin,{date:N(r).toDate(),children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"OpptjeningTimeLineLight.SluttDato"})}),i.jsx(I,{size:"small",children:i.jsx(be,{dateString:r})})]}),i.jsx(Oe.Row,{label:"",children:s.map(b=>{var y,j,A;return i.jsx(Oe.Period,{start:b.start,end:b.end,status:b.status,onSelectPeriod:()=>{var h;return u((h=b.opptjeningsperiode)==null?void 0:h.fom)},isActive:((y=l==null?void 0:l.opptjeningsperiode)==null?void 0:y.fom)===((j=b.opptjeningsperiode)==null?void 0:j.fom),icon:DF[b.status],title:t.formatMessage({id:GF(b.status)})},(A=b.opptjeningsperiode)==null?void 0:A.fom)})})]}),(l==null?void 0:l.opptjeningsperiode)&&i.jsx(Mv,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:k,velgNestePeriode:v,velgForrigePeriode:f})]})};Gv.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const Kl=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:a})=>i.jsxs(B,{gap:"4",children:[i.jsx(I,{size:"small",children:i.jsx(m,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),i.jsx(I,{size:"small",children:i.jsx(Ge,{dateStringFom:t,dateStringTom:a})}),r.length>0&&i.jsx(Gv,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:a})]});Kl.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const LF=(e,n,r)=>({...Ji.buildInitialValues(e,n,r),...br.buildInitialValues(e)}),KF=e=>({...Ji.transformValues(e),...br.transformValues(e),kode:re.VURDER_OPPTJENINGSVILKARET}),Lv=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:a})=>{const s=z(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:u,harÅpneAksjonspunkter:k,isReadOnly:v,alleMerknaderFraBeslutter:f}=hn(),b=o.some(_=>{var U;return(U=f[_.definisjon])==null?void 0:U.notAccepted}),y=LF(o,r,l.behandlingsresultat),{mellomlagretFormData:j,setMellomlagretFormData:A}=_n(),h=$e({defaultValues:j||y}),E=o.some(_=>_.status===Hn.OPPRETTET)?void 0:Dg.OPPFYLT===r,q=_=>u(KF(_)),S=(..._)=>i.jsx("b",{children:_}),P=_=>{var U;return((U=t.fastsattOpptjeningAktivitetList)==null?void 0:U.length)===0&&_===!0?s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},D=()=>i.jsx(Kl,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom});return i.jsx(Ue,{formMethods:h,onSubmit:q,setDataOnUnmount:A,children:i.jsxs(_p,{title:s.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:k,readOnlySubmitButton:e,readOnly:v,lovReferanse:n,originalErVilkarOk:E,erIkkeGodkjentAvBeslutter:b,isDirty:h.formState.isDirty,isSubmitting:h.formState.isSubmitting,rendreFakta:D,children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:a?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),i.jsxs(B,{gap:"4",children:[i.jsx(Ji,{readOnly:v,customVilkarOppfyltText:i.jsx(m,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:i.jsx(m,{id:a?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:S}}),validatorsForRadioOptions:[P]}),i.jsx(br,{readOnly:v})]})]})})};Lv.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const Kv=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:a})=>{const{aksjonspunkterForPanel:s}=hn();return s.length>0?i.jsx(Lv,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:a}):i.jsx(Kl,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};Kv.__docgenInfo={description:`OpptjeningVilkarForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const $F={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},UF=Me($F),HF=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:a=!1})=>i.jsx(De,{value:UF,children:i.jsx(Kv,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:a})});HF.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},{name:"null"}],required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const $v=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{if(!e||e.length<1)return null;const a=YF(e,n),s=a?JF(a,t,r):[];return i.jsxs("div",{children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.AndelNavn"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.GrunnlagRefusjon"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.GrunnlagSøker"})})]})}),i.jsx(c.Body,{children:s.map(l=>i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:l.visningsnavn})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:l.utbetaltIRefusjon})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:l.utbetaltTilSøker})})]},l.identifikator))})]})]})},YF=(e,n)=>e.filter(r=>r.opptjeningsår===n),Uv=e=>e.aktivitetStatus+e.arbeidsgiverId,CF=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?`${t.navn} (${pe(t.fødselsdato)})`:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?Bg(r)(e.aktivitetStatus,an.AKTIVITET_STATUS):""},zF=(e,n,r)=>({identifikator:Uv(e),visningsnavn:CF(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),JF=(e,n,r)=>{const t=[];return e.forEach(a=>{const s=a.erBrukerMottaker?a.årsbeløp:0,l=a.erBrukerMottaker?0:a.årsbeløp,o=Uv(a),u=t.find(k=>k.identifikator===o);u?(u.utbetaltTilSøker+=s,u.utbetaltIRefusjon+=l):t.push(zF(a,n,r))}),t};$v.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrÅr",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Hv=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,a]=R.useState(!1),{andeler:s}=e;if(!s||s.length<1)return null;const l=WF(s);return i.jsx(Ne,{children:i.jsxs(Ne.Item,{open:t,children:[i.jsx(Ne.Header,{onClick:()=>a(!t),children:i.jsx(ie,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.Feriepenger.Tittel"})})}),i.jsx(Ne.Content,{children:i.jsx(B,{gap:"4",children:l.map(o=>i.jsx($v,{alleAndeler:s,opptjeningsår:o,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${o}`))})})]})})},WF=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]};Hv.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ZF={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},Yv=({valgtBeregningsresultatPeriode:e,velgNestePeriode:n,velgForrigePeriode:r,alleKodeverk:t,erSøknadSvangerskapspenger:a,arbeidsgiverOpplysningerPerId:s,lukkPeriode:l})=>{const o=z(),u=op(e.fom,e.tom),k=(...v)=>i.jsx("b",{children:v});return i.jsx(xn,{borderWidth:"1",padding:"4",children:i.jsxs(B,{gap:"4",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Detaljer"})}),i.jsxs(F,{gap:"2",align:"center",children:[i.jsx(ee,{size:"xsmall",icon:i.jsx(ta,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"Timeline.prevPeriod"}),children:i.jsx(m,{id:"Timeline.prevPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:i.jsx(m,{id:"Timeline.nextPeriodShort"})}),i.jsx(ee,{size:"xsmall",icon:i.jsx($n,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),i.jsx(xn,{background:"surface-success-subtle",padding:"4",width:"370px",children:i.jsxs(B,{gap:"2",children:[i.jsxs(F,{justify:"space-between",children:[i.jsx(x,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:pe(e.fom),tomVerdi:pe(e.tom)}})}),i.jsx(I,{size:"small",children:u.formattedString})]}),i.jsx(F,{gap:"2",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:k}})})]})}),e.andeler&&e.andeler.length!==0&&i.jsxs(c,{children:[i.jsx(c.Header,{children:i.jsxs(c.Row,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Andel"})}),!a&&i.jsxs(i.Fragment,{children:[i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.KontoType"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Gradering"})})]}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Utbetalingsgrad"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Refusjon"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.TilSoker"})}),i.jsx(c.HeaderCell,{scope:"col",children:i.jsx(m,{id:"TilkjentYtelse.PeriodeData.SisteUtbDato"})})]})}),i.jsx(c.Body,{children:e.andeler.map((v,f)=>i.jsxs(c.Row,{children:[i.jsx(c.DataCell,{children:ex(v,t,s)}),!a&&i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:ZF[v.uttak.stonadskontoType]})}),!a&&i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:nx(v)})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:v.utbetalingsgrad?v.utbetalingsgrad:""})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:v.aktivitetStatus===Sn.ARBEIDSTAKER&&v.refusjon?v.refusjon:""})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:v.tilSoker?v.tilSoker:""})}),i.jsx(c.DataCell,{children:i.jsx(I,{size:"small",children:v.sisteUtbetalingsdato?pe(v.sisteUtbetalingsdato):""})})]},`index${f+1}`))})]})]})})},QF=e=>e?`...${e.substring(e.length-4,e.length)}`:"",XF=(e,n,r)=>{const t=Bg(n),a=r[e.arbeidsgiverReferanse];return a!=null&&a.navn?a.erPrivatPerson?`${a.navn} (${a.fødselsdato})`:`${a.navn} (${a.identifikator})${QF(e.eksternArbeidsforholdId)}`:e.arbeidsforholdType?t(e.arbeidsforholdType,an.OPPTJENING_AKTIVITET_TYPE):""},ex=(e,n,r)=>{switch(e.aktivitetStatus){case Sn.ARBEIDSTAKER:return XF(e,n,r);case Sn.FRILANSER:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Frilans"});case Sn.SELVSTENDIG_NAERINGSDRIVENDE:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case Sn.DAGPENGER:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case Sn.ARBEIDSAVKLARINGSPENGER:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.AAP"});case Sn.MILITAER_ELLER_SIVIL:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.Militaer"});case Sn.BRUKERS_ANDEL:return i.jsx(m,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},nx=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return i.jsx(m,{id:n})};Yv.__docgenInfo={description:`TimeLineData

Viser data fra valgt periode i tilkjent ytelse-tidslinjen`,methods:[],displayName:"TilkjentYtelseTimelineData",props:{valgtBeregningsresultatPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},erSøknadSvangerskapspenger:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Cv=({beregningsresultatPeriode:e,søknadsdato:n,familiehendelseSamling:r,hovedsøkerKjønnKode:t,alleKodeverk:a,arbeidsgiverOpplysningerPerId:s,fagsak:l})=>{const o=z(),[u,k]=R.useState(),v=ax(e),f=()=>{k(null)},b=()=>{const w=v.findIndex(M=>M.id===(u==null?void 0:u.id))+1;w<v.length&&k(v[w])},y=()=>{const w=v.findIndex(M=>M.id===(u==null?void 0:u.id))-1;w>=0&&k(v[w])},j=w=>{k(v.find(M=>M.id===w))},A=N(v[0].start),h=N(v[v.length-1].end),[T,E]=R.useState(A),[q,S]=R.useState(h),P=()=>{T.subtract(1,"month").isBefore(A)||(E(T.subtract(1,"month")),S(q.subtract(1,"month")))},D=()=>{q.add(1,"month").isAfter(h)||(E(T.add(1,"month")),S(q.add(1,"month")))},_=()=>{T.add(3,"month").isAfter(q)||(E(T.add(1,"month")),S(q.subtract(1,"month")))},U=()=>{q.add(1,"month").diff(T.subtract(1,"month"),"months")<36&&(E(T.subtract(1,"month")),S(q.add(1,"month")))},Y=tx(r);return i.jsxs(B,{gap:"4",children:[i.jsxs(Oe,{startDate:T.toDate(),endDate:q.add(1,"days").toDate(),children:[i.jsxs(Oe.Pin,{date:lx(n,T).toDate(),children:[i.jsx(I,{children:i.jsx(m,{id:"TilkjentYtelse.Soknadsdato"})}),i.jsx(I,{children:i.jsx(be,{dateString:n})})]}),Y.dato&&i.jsxs(Oe.Pin,{date:ix(Y.dato,T).toDate(),children:[i.jsx(I,{children:i.jsx(m,{id:Y.textId})}),i.jsx(I,{children:i.jsx(be,{dateString:Y.dato})})]}),i.jsx(Oe.Row,{label:sx(l,a),icon:t===Op.KVINNE?i.jsx(hp,{width:20,height:20,color:"var(--a-red-200)"}):i.jsx(Ap,{width:20,height:20,color:"var(--a-blue-600)"}),children:v.map(w=>i.jsx(Oe.Period,{start:w.start,end:w.end,status:"success",onSelectPeriod:()=>j(w.id),isActive:(u==null?void 0:u.id)===w.id,icon:w.erGradert?i.jsx(Wp,{"aria-hidden":!0}):i.jsx(Ci,{"aria-hidden":!0}),title:w.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},w.id))})]}),i.jsxs(F,{gap:"2",justify:"end",children:[i.jsx(ee,{size:"small",icon:i.jsx(Pp,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),i.jsx(ee,{size:"small",icon:i.jsx(Rp,{"aria-hidden":!0}),onClick:U,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),i.jsx(ee,{size:"small",icon:i.jsx(ta,{"aria-hidden":!0}),onClick:P,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),i.jsx(ee,{size:"small",icon:i.jsx(aa,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),u&&i.jsx(Yv,{alleKodeverk:a,valgtBeregningsresultatPeriode:u.periode,velgNestePeriode:b,velgForrigePeriode:y,erSøknadSvangerskapspenger:l.fagsakYtelseType===Qv.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:s,lukkPeriode:f})]})},rx=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,tx=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===bp.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},ax=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:rx(n),start:N(n.fom).toDate(),end:N(n.tom).add(1,"days").toDate(),id:r,periode:n})),sx=(e,n)=>{var t;return((t=n[an.RELASJONSROLLE_TYPE].find(a=>a.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},ix=(e,n)=>{const r=N(e);return r.isBefore(n)?n.subtract(5,"days"):r},lx=(e,n)=>{const r=N(e);return r.isBefore(n)?n.subtract(15,"days"):r};Cv.__docgenInfo={description:`TilkjentYtelse

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
}>`}],raw:"BeregningsresultatPeriode[]"},description:""},søknadsdato:{required:!0,tsType:{name:"string"},description:""},familiehendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},hovedsøkerKjønnKode:{required:!1,tsType:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const zv=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:a,søknad:s})=>{var f;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:u}=hn(),k=ox(u),v=((f=s.søknadsfrist)==null?void 0:f.mottattDato)??s.mottattDato;return i.jsxs(B,{gap:"4",children:[i.jsx(ie,{size:"small",children:i.jsx(m,{id:"TilkjentYtelse.Title"})}),e&&i.jsx(Cv,{beregningsresultatPeriode:e.perioder,søknadsdato:v,familiehendelseSamling:t,hovedsøkerKjønnKode:a!=null&&a.bruker?a.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&i.jsx(Hv,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),k&&i.jsxs(B,{gap:"2",children:[i.jsx(x,{children:i.jsx(m,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),i.jsxs(F,{gap:"2",children:[i.jsx(I,{children:k}),i.jsx(Cr,{})]})]})]})},ox=e=>{var n;return((n=e.find(r=>r.definisjon===re.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse)??void 0};zv.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const dx={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},ux=Me(dx),gx=e=>i.jsx(De,{value:ux,children:i.jsx(zv,{...e})});gx.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{Iy as A,cF as B,AF as F,YE as I,HF as O,HN as P,Qp as S,gx as T,FF as a,_y as b,cN as c,AA as d,BE as e,Wp as f,Up as g};
