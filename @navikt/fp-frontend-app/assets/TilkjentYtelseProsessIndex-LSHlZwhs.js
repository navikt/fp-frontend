import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as A,R as Y}from"./index-DjhIdADd.js";import{g as Mn,t as ev,p as Ui,af as Jt,f as kn,ac as nv,m as se,h as T,H as C,L as F,$ as ke,V as Q,k as W,n as ae,ag as En,ad as Ln,P as Ge,E as at,ae as Xn,l as Ft,am as rv,bs as On,F as tv}from"./withPanelData-GOmTAiR7.js";import{m as sv,o as us,d as x,a as k,R as Ae,F as Ue,v as G,W as Zl,Z as Be,E as Yi,A as Pe,c as Ee,$ as av,a6 as iv,a7 as Dr,f as Hi,a8 as Ci,s as Ve,T as ar,a5 as lv,n as Ke,M as Nn,q as Eu,e as zi,a2 as xe,i as te,ad as Oe,z as it,C as Nu,ae as Xl,w as ye,y as dv,af as Ji,a9 as Su,a0 as ov,J as Wt,K as hr,S as Zt,ag as Xt,ah as gv,D as on,I as M,b as P,ai as uv,aj as kv,ak as wr,g as mv,t as pv,B as vv}from"./index.es-CZJHMjzL.js";import{u as Sn}from"./initFetch-i6NRQl-j.js";import{a as Ce,e as ze,J as Ne,b as X,G as Qn,O as In,X as ce,y as qu,l as xu,i as Pu,K as en,c as bn,o as cn,N as jn,H as ks,j as Wi,u as _t,f as nn,d as Ie,t as ms,Q as Bu,_ as rn,$ as zr,Z as ps,a0 as yv,a1 as fv,E as Fu,a2 as bv,a3 as Ql,g as vs,h as ys,I as cv}from"./index.es-cjZwphL1.js";import{A as de,h as fs}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as er}from"./aksjonspunktStatus-xM4O_ZUY.js";import{K as gn}from"./alleKodeverk-BFmIlMu4.js";import{V as jv}from"./venteArsakType-BJdSFL9e.js";import{S as hv}from"./SettPaVentModalIndex-GilWEH_N.js";import{c as _u}from"./bind-oYjWB_aQ.js";import{d as I}from"./dayjs.min-Cke173X9.js";import{a as Qr,g as Ou}from"./kodeverkUtils-DLZgokMR.js";import{F as ir,P as Zi}from"./skjermlenkeCodes-1SvLTuBb.js";import{h as Xi}from"./eksterneLenker-DOKwbE_M.js";import{L as lt}from"./Link-B0DdUTwV.js";import{S as br}from"./Spacer-QFOiGlYe.js";import{T as Du,H as qn,E as Av,b as Iv,c as Tv}from"./index.es-Clgx_4lw.js";import{S as xr}from"./ExclamationmarkTriangleFill-Jd_pHapJ.js";import{j as Qi,V as nr,k as Rv,i as _s,s as wu,O as Ev,S as Nv}from"./VedtakProsessIndex-DJaccwlp.js";import{P as Ar}from"./Popover-BENsZYwl.js";import{u as xn,h as Vu}from"./behandlingApi-XB2_QLGU.js";import{u as lr,F as dr}from"./VergeFaktaInitPanel-BEtEV3OP.js";import{B as Pn}from"./FagsakIndex-D5_hfRzZ.js";import{h as fr}from"./moment-C5S46NFB.js";import{T as j}from"./Table-DyJaznXk.js";import{S as Sv}from"./StarFill-Ulccp3Hh.js";import{T as cr}from"./BehandlingSupportIndex-CQ3ydjqH.js";import{a as qv,T as we,b as xv,S as Pv}from"./Timeline-DNOvPpHP.js";import{T as bs}from"./Tag-CWTXKfT7.js";import{C as Bv}from"./Checkbox-CKAN1H1R.js";import{s as Fv}from"./BehandlingMenuIndex-MoTjaAF2.js";import{H as _v}from"./landkoder-leWIHght.js";import{S as Ov}from"./VisittkortSakIndex-ByjkSxeq.js";import{a as el,S as Dv}from"./Plus-Cai34zg8.js";import{S as Mu}from"./TotrinnskontrollIndex-DKndMelO.js";import{V as Gu}from"./BehandlingHenlagtPanel-CydIHPz4.js";import{i as wv,g as Vv}from"./index-BHG4GVne.js";import{u as nl,P as Lu,b as Mv}from"./useStandardProsessPanelProps-85WS0ngH.js";import{P as Pr,a as Gv,V as rl,b as Lv}from"./OverstyringPanel-BRGTC43b.js";import{P as Ku}from"./RisikoklassifiseringIndex-BrDLygLh.js";import{K as Kv}from"./Kjonnkode-C-fkzSiP.js";const tl=A.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var $v=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const sl=A.createContext(null),Uv=A.forwardRef((e,n)=>{var{children:r,className:t,open:s,defaultOpen:i=!1,onOpenChange:l}=e,o=$v(e,["children","className","open","defaultOpen","onOpenChange"]);const[g,m]=sv({defaultValue:i,value:s,onChange:l}),p=A.useContext(tl),y=A.useRef(!(s||i)),f=()=>{m(b=>!b),y.current=!0};return p!=null&&p.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),Y.createElement("div",Object.assign({className:Mn("navds-accordion__item",t,{"navds-accordion__item--open":g,"navds-accordion__item--neutral":(p==null?void 0:p.variant)==="neutral","navds-accordion__item--no-animation":!y.current}),"data-expanded":g,ref:n},ev(o,["onClick"])),Y.createElement(sl.Provider,{value:{open:g,toggleOpen:f}},r))});var Yv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Hv=A.forwardRef((e,n)=>{var{children:r,className:t}=e,s=Yv(e,["children","className"]);const i=A.useContext(sl),l=Ui(!1);return i===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):Y.createElement(Jt,Object.assign({},s,{as:"div",ref:n,className:Mn("navds-accordion__content",{"navds-accordion__content--closed":!i.open},t),"aria-hidden":!i.open||void 0}),l?Y.createElement("div",{className:"navds-accordion__content-inner"},r):r)});var Cv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const zv=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Cv(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var Jv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Wv=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Jv(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.545 2.404a.75.75 0 0 1 .505-.152l.05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596M12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3",clipRule:"evenodd"}))});var Zv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Xv=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Zv(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.061-7.381a8.253 8.253 0 0 0 2.051 15.469v-.326c0-1.26-.985-2.25-2.414-2.25-.808 0-1.546-.197-2.079-.718-.535-.524-.733-1.249-.733-2.024 0-1.203.638-2.164 1.492-2.799.845-.629 1.942-.974 3.008-.974.736 0 1.381.187 1.899.342l.04.012c.534.16.888.267 1.225.267q.003.001.02-.005a.3.3 0 0 0 .065-.038 1 1 0 0 0 .23-.281c.17-.29.27-.669.27-.965 0-.013-.014-.124-.191-.332a3.5 3.5 0 0 0-.713-.599 5.4 5.4 0 0 0-.876-.467 3 3 0 0 0-.307-.11q-.03.066-.07.169t-.081.222l-.012.035c-.032.09-.068.193-.106.29-.061.159-.176.443-.383.65a.87.87 0 0 1-.828.241.96.96 0 0 1-.52-.351c-.12-.152-.224-.367-.288-.497l-.023-.046a3 3 0 0 0-.144-.269.4.4 0 0 0-.13.05.9.9 0 0 0-.222.208l-.054.066a4 4 0 0 1-.319.365 1.27 1.27 0 0 1-.888.376c-.34 0-.735-.074-1.076-.32-.36-.26-.577-.652-.644-1.116-.079-.548.155-1.12.403-1.559A6.6 6.6 0 0 1 6.97 5.97c.172-.172.355-.33.513-.467l.101-.087c.189-.165.349-.312.493-.48q.12-.138.234-.317m1.86-.665c-.21.882-.548 1.484-.956 1.96a6 6 0 0 1-.646.633l-.122.105a8 8 0 0 0-.417.378c-.331.332-.62.705-.811 1.043a2.2 2.2 0 0 0-.193.43 1 1 0 0 0-.03.134q-.003.044-.001.043c.01.065.024.095.029.104l.007.009c.005.003.032.02.095.03.02-.022.039-.046.065-.079l.152-.187c.135-.16.33-.37.61-.535.29-.17.636-.272 1.047-.272.453 0 .758.264.927.461.064-.14.144-.29.245-.424.17-.225.48-.505.952-.505.331 0 .722.125 1.053.262.36.149.757.356 1.13.601.368.243.74.54 1.027.878.277.325.552.774.552 1.306 0 .57-.175 1.21-.477 1.724-.286.486-.817 1.065-1.61 1.065-.566 0-1.123-.169-1.581-.308l-.115-.034c-.517-.156-.973-.28-1.467-.28-.762 0-1.54.253-2.113.679-.565.42-.887.97-.887 1.595 0 .537.135.808.283.952.15.147.443.29 1.03.29 2.18 0 3.913 1.588 3.913 3.75v.487l.138.001a8.2 8.2 0 0 0 3.416-.738.4.4 0 0 0 .058-.149c.015-.084.02-.236-.009-.63v-.006l-.01-.113c-.01-.135-.027-.327-.027-.5 0-.754.396-1.3.892-1.856.108-.124.184-.216.237-.287l-.261-.161-.004-.003a16 16 0 0 1-.45-.28c-.308-.203-.667-.464-.953-.79-.29-.332-.551-.782-.551-1.345 0-.624.28-1.216.66-1.645.376-.424.946-.793 1.613-.793.845 0 1.397.465 1.691.713l.014.011q.047.04.086.071l.007.006.169.138c.207.168.365.297.49.394.209-.139.56-.337 1.024-.337h.158a8.25 8.25 0 0 0-10.08-7.996m9.952 9.496a8.25 8.25 0 0 1-3.164 5.144l-.015-.181c-.009-.108-.016-.192-.016-.299 0-.158.047-.338.513-.86l.003-.003c.44-.5.726-.897.726-1.469 0-.372-.23-.618-.322-.71a2.5 2.5 0 0 0-.377-.296c-.119-.079-.253-.16-.38-.238l-.018-.011a15 15 0 0 1-.408-.255c-.274-.18-.498-.353-.649-.525-.147-.168-.178-.28-.178-.355 0-.185.094-.437.283-.65.192-.217.384-.288.49-.288.274 0 .403.104.711.353l.144.115.157.128c.261.213.473.385.634.507.097.072.198.145.298.202.071.041.262.148.506.148a.95.95 0 0 0 .38-.082c.083-.036.154-.08.202-.11.049-.033.097-.067.132-.093l.006-.004.014-.01.084-.059c.131-.089.184-.099.213-.099z",clipRule:"evenodd"}))});var Qv=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const $u=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=Qv(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var ey=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Vr=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ey(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.525 2.167c-.754-.12-1.61.093-2.525.826-.914-.732-1.768-.947-2.522-.829-.835.132-1.354.65-1.503.8l-.005.006-.006.006c-.15.149-.668.667-.8 1.502-.141.898.19 1.937 1.306 3.052l3 3a.75.75 0 0 0 1.06 0l3-3c1.116-1.116 1.445-2.158 1.303-3.055-.133-.836-.651-1.354-.797-1.5l-.011-.01c-.146-.147-.664-.665-1.5-.798M9.03 4.03c.113-.112.341-.33.682-.384.289-.046.873 0 1.758.884a.75.75 0 0 0 1.06 0c.884-.884 1.47-.928 1.76-.881.343.054.572.273.68.381.107.108.327.337.381.68.047.29.003.876-.881 1.76L12 8.94 9.53 6.47C8.645 5.584 8.6 5 8.646 4.712c.053-.34.272-.57.384-.682M21.75 15.22c0-1.797-1.918-2.943-3.5-2.092l-2.633 1.416a2.48 2.48 0 0 0-.668-1.513c-.466-.49-1.138-.78-1.949-.78h-3c-.095 0-.259-.045-.535-.178-.105-.05-.208-.104-.321-.164l-.084-.044a6 6 0 0 0-.456-.22c-.563-.238-1.386-.394-2.604-.394-1.754 0-2.753.755-3.268 1.614a3.47 3.47 0 0 0-.482 1.614v.021L3 14.5h-.75V19c0 .323.207.61.513.712l3 1A.8.8 0 0 0 6 20.75h9.298a2.75 2.75 0 0 0 1.718-.603l3.843-3.073c.563-.451.891-1.134.891-1.855M13 17.25c.518 0 .98-.118 1.366-.331l4.595-2.47a.875.875 0 0 1 .96 1.453l-3.842 3.074a1.25 1.25 0 0 1-.78.274H6.121l-2.372-.79v-3.958l.003-.045a1.968 1.968 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887 1.11 0 1.711.145 2.02.276.097.04.207.096.346.168l.073.038c.114.06.245.129.375.192.303.146.729.326 1.186.326h3c.439 0 .705.148.863.314a1 1 0 0 1 .262.686c0 .263-.094.51-.262.686-.158.166-.424.314-.863.314h-3a.75.75 0 0 0 0 1.5z",clipRule:"evenodd"}))});var ny=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ry=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ny(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var ty=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const sy=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ty(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-1 7.5c0-1.987 1.912-3.75 4.25-3.75s4.25 1.763 4.25 3.75v8a.75.75 0 0 1-1.5 0v-8c0-1.013-1.088-2.25-2.75-2.25S9.25 11.987 9.25 13v1.75H8.5c-.793 0-1.32.287-1.664.719-.364.454-.586 1.145-.586 2.031s.222 1.577.586 2.032c.345.431.871.718 1.664.718a.75.75 0 0 1 0 1.5c-1.207 0-2.18-.463-2.836-1.282-.636-.795-.914-1.854-.914-2.968s.278-2.173.914-2.969c.513-.64 1.222-1.064 2.086-1.217zm2.634 3.116a1.25 1.25 0 0 0-1.768 1.768l1.884 1.884 1.884-1.884a1.25 1.25 0 0 0-1.768-1.768l-.116.116z",clipRule:"evenodd"}))});var ay=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Uu=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=ay(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var iy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ly=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=iy(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6 3.75c-.14 0-.25.112-.25.249V9c0 1.15.23 1.956.546 2.526.315.567.738.94 1.193 1.193.94.522 2.01.531 2.511.531.5 0 1.572-.009 2.51-.53a3 3 0 0 0 1.194-1.194c.317-.57.546-1.376.546-2.526V3.999A.25.25 0 0 0 14 3.75h-2a.75.75 0 0 1 0-1.5h2c.965 0 1.75.781 1.75 1.749V9c0 1.35-.27 2.419-.735 3.255a4.5 4.5 0 0 1-1.776 1.776c-.883.49-1.819.646-2.489.696V19.5a.75.75 0 0 0 1.5 0V19c0-1.288.886-2.37 2.082-2.668a2.751 2.751 0 1 1 .07 1.57A1.25 1.25 0 0 0 13.75 19v.5a2.25 2.25 0 0 1-4.5 0v-4.773c-.67-.05-1.606-.206-2.49-.696a4.5 4.5 0 0 1-1.775-1.776C4.521 11.419 4.25 10.35 4.25 9V3.999c0-.968.785-1.749 1.75-1.749h2a.75.75 0 0 1 0 1.5zM15.75 17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",clipRule:"evenodd"}))});var dy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const oy=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=dy(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var gy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Mr=A.forwardRef((e,n)=>{var{title:r,titleId:t}=e,s=gy(e,["title","titleId"]);let i=kn();return i=r?t||"title-"+i:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":i},s),r?A.createElement("title",{id:i},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9zm-.199 1.61.683 1.364H10.6zM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a2 2 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.86 2.86 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844s.177 1.358.482 1.844c.304.483.706.8 1.093 1.006a3.5 3.5 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647q-.011 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.36 1.36 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047c.138-.22.323-.371.525-.478a2 2 0 0 1 .825-.225m.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"}))});var uy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const ky=A.forwardRef((e,n)=>{var r,{children:t,className:s,onClick:i}=e,l=uy(e,["children","className","onClick"]);const o=A.useContext(sl),g=A.useContext(tl),m=Ui(!1);if(o===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let p=(r=g==null?void 0:g.headingSize)!==null&&r!==void 0?r:"small";return m&&(p=(g==null?void 0:g.size)==="small"?"xsmall":"small"),Y.createElement("button",Object.assign({ref:n},l,{className:Mn("navds-accordion__header",s),onClick:nv(i,o.toggleOpen),"aria-expanded":o.open,type:"button"}),Y.createElement("span",{className:"navds-accordion__icon-wrapper"},Y.createElement(us,{className:"navds-accordion__header-chevron","aria-hidden":!0})),Y.createElement(se,{size:p,as:"span",className:"navds-accordion__header-content"},t))});var my=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const qe=A.forwardRef((e,n)=>{var{className:r,variant:t="default",headingSize:s="small",size:i="medium",indent:l=!0}=e,o=my(e,["className","variant","headingSize","size","indent"]);return Y.createElement(tl.Provider,{value:{variant:t,headingSize:s,size:i,mounted:!0}},Y.createElement("div",Object.assign({},o,{className:Mn("navds-accordion",r,`navds-accordion--${i}`,{"navds-accordion--indent":l}),ref:n})))});qe.Header=ky;qe.Content=Hv;qe.Item=Uv;const $t=A.createContext({listType:"ul",size:"medium"});var py=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const Yu=A.forwardRef((e,n)=>{var{className:r,children:t,title:s,icon:i}=e,l=py(e,["className","children","title","icon"]);const{listType:o,size:g}=A.useContext($t);return o==="ol"&&i&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},l,{ref:n,className:Mn("navds-list__item",r)}),o==="ul"&&Y.createElement("div",{className:Mn("navds-list__item-marker",{"navds-list__item-marker--icon":i,"navds-list__item-marker--bullet":!i})},i||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,s&&Y.createElement(Jt,{as:"p",size:g,weight:"semibold"},s),t))});Yu.displayName="List.Item";var vy=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]]);return r};const yy={small:"xsmall",medium:"small",large:"medium"},ne=A.forwardRef((e,n)=>{var{children:r,className:t,as:s="ul",title:i,description:l,headingTag:o="h3",size:g}=e,m=vy(e,["children","className","as","title","description","headingTag","size"]);const{size:p}=A.useContext($t),y=Ui(!1),f=g??p;return y?Y.createElement($t.Provider,{value:{listType:s,size:f}},Y.createElement(Jt,Object.assign({as:"div"},m,{size:f,ref:n,className:Mn("navds-list",`navds-list--${f}`,t)}),Y.createElement(s,{role:"list"},r))):Y.createElement($t.Provider,{value:{listType:s,size:f}},Y.createElement(Jt,Object.assign({as:"div"},m,{size:f,ref:n,className:Mn("navds-list",`navds-list--${f}`,t)}),i&&Y.createElement(se,{size:yy[f],as:o},i),l&&Y.createElement(T,{size:f},l),Y.createElement(s,{role:"list"},r)))});ne.Item=Yu;var le=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(le||{}),fe=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(fe||{}),et=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(et||{});const al=A.createContext({isDirty:!1,setDirty:()=>{}}),Hu=({children:e})=>{const[n,r]=A.useState(!1),t=A.useMemo(()=>({isDirty:n,setDirty:r}),[n,r]);return a.jsx(al.Provider,{value:t,children:e})},il=e=>{const n=A.useContext(al);A.useEffect(()=>{n.setDirty(e)},[e])},fy=()=>A.useContext(al).isDirty;Hu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const by="_inline_glms2_1",cy="_docIcon_glms2_9",jy="_phoneIcon_glms2_14",Os={inline:by,docIcon:cy,phoneIcon:jy},nt=({saksnummer:e,arbeidsforhold:n,inntektsmelding:r,skalViseArbeidsforholdId:t,alleKodeverk:s,arbeidsgiverFødselsdato:i,ikkeVisInfo:l})=>a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),!l&&i&&a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),a.jsx(ke,{children:a.jsx(Ae,{dateString:i})})]}),!l&&!i&&a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),a.jsx(ke,{children:r.arbeidsgiverIdent})]}),a.jsx(x,{eightPx:!0}),t&&a.jsxs(a.Fragment,{children:[a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),a.jsx(T,{size:"small",children:r.eksternArbeidsforholdId})]}),a.jsx(x,{eightPx:!0})]}),n&&a.jsxs(a.Fragment,{children:[a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),a.jsx(T,{size:"small",children:n.stillingsprosent?`${n.stillingsprosent}%`:"-"})]}),n.permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:Qr(s,gn.PERMISJONSBESKRIVELSE_TYPE,n.permisjonOgMangel.type)}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),a.jsx(x,{eightPx:!0})]}),a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),a.jsx(T,{size:"small",children:G(r.inntektPrMnd)})]}),a.jsx(x,{eightPx:!0}),a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),a.jsx(T,{size:"small",children:a.jsx(k,{id:r.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),a.jsx(x,{eightPx:!0}),r.refusjonPrMnd!==void 0&&r.refusjonPrMnd!==null&&a.jsxs(a.Fragment,{children:[a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),a.jsx(T,{size:"small",children:G(r.refusjonPrMnd)})]}),a.jsx(x,{eightPx:!0})]}),a.jsxs(lt,{href:Xi(e,r.journalpostId,r.dokumentId),target:"_blank",children:[a.jsx("span",{children:a.jsx(T,{size:"small",className:Os.inline,children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),a.jsx($u,{className:Os.docIcon})]}),a.jsx(x,{sixteenPx:!0}),a.jsxs(C,{gap:"4",children:[a.jsx(Uu,{className:Os.phoneIcon}),a.jsx("div",{children:a.jsxs(Q,{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),a.jsx(ke,{children:r.kontaktpersonNavn}),a.jsx(ke,{children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:r.kontaktpersonNummer}})})]})})]}),a.jsx(x,{thirtyTwoPx:!0})]});nt.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const hy="_inline_10adz_1",Ay="_aksjonpunktImage_10adz_5",Iy="_arrow_10adz_12",Ty="_ikkeMottatt_10adz_18",Ry="_skiller_10adz_30",Un={inline:hy,aksjonpunktImage:Ay,arrow:Iy,ikkeMottatt:Ty,skiller:Ry},Ey=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Ny=(e,n)=>{const r=e.some(s=>s.internArbeidsforholdId),t=e.some(s=>!s.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");return e.find(s=>!s.internArbeidsforholdId||s.internArbeidsforholdId===n)},Sy=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,s)=>e.slice(s*25,s*25+25)).join("-")},ll=({saksnummer:e,arbeidsforholdForRad:n,inntektsmeldingerForRad:r,alleKodeverk:t,arbeidsgiverFødselsdato:s})=>{const i=W(),[l,o]=A.useState({}),g=n.length===1,m=g?Ny(r,n[0].internArbeidsforholdId):void 0;return a.jsxs(a.Fragment,{children:[s&&a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Fodselsdato"})}),a.jsx(ke,{children:a.jsx(Ae,{dateString:s})})]}),!s&&n.length>0&&a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Orgnr"})}),a.jsx(ke,{children:n[0].arbeidsgiverIdent})]}),!g&&a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),a.jsx(Zl,{dividerParagraf:!0,className:Un.skiller}),a.jsx(x,{sixteenPx:!0}),n.map(p=>{const y=r.find(f=>Ey(p,f));return a.jsxs(Y.Fragment,{children:[a.jsxs(Q,{gap:"2",children:[a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),a.jsxs("div",{children:[p.eksternArbeidsforholdId&&p.eksternArbeidsforholdId.length<50&&a.jsx("div",{children:a.jsx(T,{size:"small",children:p.eksternArbeidsforholdId})}),p.eksternArbeidsforholdId&&p.eksternArbeidsforholdId.length>=50&&a.jsx(Du,{content:Sy(p.eksternArbeidsforholdId),children:a.jsx(T,{size:"small",children:`${p.eksternArbeidsforholdId.substring(0,50)}...`})}),!p.eksternArbeidsforholdId&&a.jsx(T,{size:"small",children:"-"})]}),y&&a.jsxs(a.Fragment,{children:[a.jsx(br,{}),a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!y&&a.jsxs(a.Fragment,{children:[a.jsx(br,{}),a.jsxs("div",{children:[a.jsx(xr,{className:Un.aksjonpunktImage,title:i.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),a.jsx("div",{className:Un.ikkeMottatt,children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:p.fom,dateStringTom:p.tom!==Be?p.tom:void 0})}),y&&a.jsxs(a.Fragment,{children:[a.jsx(br,{}),a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:y.motattDato})})]})]}),a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),a.jsx(T,{size:"small",children:`${p.stillingsprosent}%`})]}),p.permisjonOgMangel&&a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:Qr(t,gn.PERMISJONSBESKRIVELSE_TYPE,p.permisjonOgMangel.type)}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:p.permisjonOgMangel.permisjonFom,dateStringTom:p.permisjonOgMangel.permisjonTom})})]}),y&&a.jsxs(a.Fragment,{children:[p.internArbeidsforholdId&&l[p.internArbeidsforholdId]&&a.jsx(nt,{saksnummer:e,inntektsmelding:y,skalViseArbeidsforholdId:!1}),a.jsx(x,{fourPx:!0}),a.jsxs(lt,{onClick:f=>{f.preventDefault(),o(b=>{if(!p.internArbeidsforholdId)return b;const c=b[p.internArbeidsforholdId];return{...b,[p.internArbeidsforholdId]:c===void 0||c===!1}})},href:"",children:[a.jsx("span",{children:a.jsx(T,{size:"small",className:Un.inline,children:a.jsx(k,{id:!p.internArbeidsforholdId||!l[p.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),p.internArbeidsforholdId&&l[p.internArbeidsforholdId]?a.jsx(Yi,{className:Un.arrow}):a.jsx(us,{className:Un.arrow})]})]})]}),a.jsx(x,{sixteenPx:!0}),a.jsx(Zl,{dividerParagraf:!0,className:Un.skiller}),a.jsx(x,{sixteenPx:!0})]},`${p.arbeidsgiverIdent}${p.internArbeidsforholdId}`)})]}),a.jsx(x,{eightPx:!0}),g&&!!m&&a.jsx(nt,{saksnummer:e,arbeidsforhold:n[0],inntektsmelding:m,skalViseArbeidsforholdId:r.length>1,alleKodeverk:t,ikkeVisInfo:!0}),g&&r.length===0&&a.jsxs(a.Fragment,{children:[a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),a.jsx(T,{size:"small",children:`${n[0].stillingsprosent}%`})]}),n[0].permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),a.jsxs(C,{gap:"4",children:[a.jsx(F,{size:"small",children:Qr(t,gn.PERMISJONSBESKRIVELSE_TYPE,n[0].permisjonOgMangel.type)}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:n[0].permisjonOgMangel.permisjonFom,dateStringTom:n[0].permisjonOgMangel.permisjonTom})})]})]})]})]})};ll.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforholdForRad:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const qy="_bredde_gb3eb_1",xy="_inline_gb3eb_9",Py="_arrow_gb3eb_13",Ot={bredde:qy,inline:xy,arrow:Py},By=[],Fy=(e,n)=>{const t=I(e).subtract(1,"month").startOf("month"),s=t.subtract(12,"month"),i=[];for(let l=t;l.isAfter(s);l=l.subtract(1,"month")){const o=l.format(Pe),g=n.find(m=>I(m.fom).startOf("month").format(Pe)===o);i.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return i},dl=({saksnummer:e,skjæringspunktDato:n,inntektsposter:r=[],arbeidsforholdForRad:t,inntektsmeldingerForRad:s=By,alleKodeverk:i,arbeidsgiverFødselsdato:l})=>{const[o,g]=A.useState(!1),m=A.useMemo(()=>Fy(n,r),[r]),p=t.length===1,y=r.length>0&&r.some(f=>f.beløp>0);return a.jsxs(a.Fragment,{children:[a.jsx(ll,{saksnummer:e,arbeidsforholdForRad:t,inntektsmeldingerForRad:s,alleKodeverk:i,arbeidsgiverFødselsdato:l}),a.jsx(x,{thirtyTwoPx:!0}),y&&a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:p?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),a.jsx(x,{fourPx:!0}),a.jsx(Q,{children:m.filter((f,b)=>o?!0:b<3).map(f=>a.jsxs(C,{gap:"2",className:Ot.bredde,children:[a.jsx(T,{size:"small",children:a.jsx(k,{id:`ArbeidsforholdInformasjonPanel.${I(f.fom).month()+1}`})}),a.jsx(T,{size:"small",children:I(f.fom).year()}),a.jsx(br,{}),a.jsx(T,{size:"small",children:G(f.beløp)})]},f.fom))}),a.jsx(x,{fourPx:!0}),a.jsxs(lt,{onClick:f=>{f.preventDefault(),g(!o)},href:"",children:[a.jsx("span",{children:a.jsx(T,{size:"small",className:Ot.inline,children:a.jsx(k,{id:o?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),o?a.jsx(Yi,{className:Ot.arrow}):a.jsx(us,{className:Ot.arrow})]})]}),!y&&a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})}),a.jsx(x,{thirtyTwoPx:!0})]})};dl.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const _y="_hjelpetekst_1kk6h_1",Oy="_alertStripe_1kk6h_5",Dy="_hjelpetekstInnhold_1kk6h_9",wy="_svg_1kk6h_14",Dt={hjelpetekst:_y,alertStripe:Oy,hjelpetekstInnhold:Dy,svg:wy},Vy=bn(3),My=cn(1500),Gy=xu(1),Ly=Pu(100),Ky=e=>n=>{const r=e("fom");return r&&n?ks(r)(n):null},$y=(e,n,r,t)=>()=>{e(s=>s.map(i=>{if(r.arbeidsgiverIdent===i.arbeidsgiverIdent){const o=t.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:r.arbeidsgiverIdent,fom:t.fom,tom:t.tom,stillingsprosent:t.stillingsprosent,begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}:void 0;return{...n,avklaring:o||{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}}return i}))},Cu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:t,inntektsmelding:s,radData:i,isReadOnly:l,registrerArbeidsforhold:o,lagreVurdering:g,lukkArbeidsforholdRad:m,oppdaterTabell:p,skalViseArbeidsforholdId:y,arbeidsgiverFødselsdato:f})=>{const b=W(),c=A.useMemo(()=>{var _,H,z,O,L;return{saksbehandlersVurdering:(_=i.avklaring)==null?void 0:_.saksbehandlersVurdering,begrunnelse:(H=i.avklaring)==null?void 0:H.begrunnelse,fom:(z=i.avklaring)==null?void 0:z.fom,tom:(O=i.avklaring)==null?void 0:O.tom,stillingsprosent:(L=i.avklaring)==null?void 0:L.stillingsprosent}},[i]),N=Ce({defaultValues:c});il(N.formState.isDirty);const h=N.watch("saksbehandlersVurdering"),E=()=>{m(),N.reset(c)},R=_=>{const H=$y(p,i,s,_);return _.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?o({behandlingUuid:n,behandlingVersjon:r,internArbeidsforholdRef:s.internArbeidsforholdId,arbeidsgiverNavn:t,arbeidsgiverIdent:s.arbeidsgiverIdent,vurdering:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:_.begrunnelse,fom:_.fom,tom:_.tom,stillingsprosent:_.stillingsprosent}).then(H).finally(()=>N.reset(_)):g({behandlingUuid:n,behandlingVersjon:r,vurdering:_.saksbehandlersVurdering,begrunnelse:_.begrunnelse,arbeidsgiverIdent:s.arbeidsgiverIdent,internArbeidsforholdRef:s.internArbeidsforholdId}).then(H).finally(()=>N.reset(_))},S=A.useRef(null),[q,B]=A.useState(!1),w=A.useCallback(()=>B(_=>!_),[]);return a.jsxs(a.Fragment,{children:[a.jsx(nt,{saksnummer:e,inntektsmelding:s,skalViseArbeidsforholdId:y,arbeidsgiverFødselsdato:f}),a.jsx(x,{fourtyPx:!0}),a.jsx("div",{className:Dt.alertStripe,children:a.jsx(Ee,{variant:"info",children:a.jsx(k,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),a.jsx(x,{thirtyTwoPx:!0}),a.jsxs(ze,{formMethods:N,onSubmit:R,children:[a.jsx(Ne,{name:"saksbehandlersVurdering",label:a.jsxs(C,{gap:"2",children:[a.jsx(k,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),a.jsx(Qi,{className:Dt.svg,ref:S,onClick:w,title:b.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),a.jsx(Ar,{open:q,onClose:w,anchorEl:S.current,className:Dt.hjelpetekst,children:a.jsx(Ar.Content,{className:Dt.hjelpetekstInnhold,children:a.jsx(T,{children:a.jsx(k,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[X],isReadOnly:l,radios:[{label:b.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:b.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:b.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),h===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),a.jsxs(C,{gap:"4",children:[a.jsx(Qn,{name:"fom",label:a.jsx(k,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[X,In],isReadOnly:l}),a.jsx(Qn,{name:"tom",label:a.jsx(k,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[In,Ky(N.getValues)],isReadOnly:l}),a.jsx(ce,{name:"stillingsprosent",label:a.jsx(k,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:_=>{const H=parseInt(_.toString(),10);return Number.isNaN(H)?_:H},validate:[X,qu,Gy,Ly],readOnly:l,maxLength:3})]}),a.jsx(x,{fourPx:!0})]}),a.jsx(x,{sixteenPx:!0}),a.jsx(en,{label:a.jsx(k,{id:"ManglendeOpplysningerForm.Begrunn"}),name:"begrunnelse",validate:[X,Vy,My,jn],maxLength:1500,readOnly:l}),a.jsx(x,{twentyPx:!0}),!l&&a.jsxs(C,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:N.formState.isSubmitting,disabled:!N.formState.isDirty||N.formState.isSubmitting,children:a.jsx(k,{id:"ManglendeOpplysningerForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:N.formState.isSubmitting,onClick:E,type:"button",children:a.jsx(k,{id:"ManglendeOpplysningerForm.Avbryt"})})]}),a.jsx(x,{fourtyPx:!0})]})]})};Cu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidsgiverNavn:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Uy="_alertStripe_9hpes_1",Yy="_hjelpetekst_9hpes_5",Hy="_hjelpetekstInnhold_9hpes_9",Cy="_svg_9hpes_14",wt={alertStripe:Uy,hjelpetekst:Yy,hjelpetekstInnhold:Hy,svg:Cy},zy=bn(3),Jy=cn(1500),Wy=(e,n,r)=>()=>{e(t=>t.map(s=>s.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}}:s))},zu=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t,inntektsposter:s=[],arbeidsforholdForRad:i,inntektsmeldingerForRad:l,radData:o,isReadOnly:g,lagreVurdering:m,lukkArbeidsforholdRad:p,oppdaterTabell:y,alleKodeverk:f,arbeidsgiverFødselsdato:b})=>{const c=W(),N=A.useMemo(()=>{var z,O;return{saksbehandlersVurdering:(z=o.avklaring)==null?void 0:z.saksbehandlersVurdering,begrunnelse:(O=o.avklaring)==null?void 0:O.begrunnelse}},[o]),h=Ce({defaultValues:N});il(h.formState.isDirty);const E=i.length===1,R=()=>{p(),h.reset(N)},S=z=>{const O={behandlingUuid:n,behandlingVersjon:r,vurdering:z.saksbehandlersVurdering,arbeidsgiverIdent:o.arbeidsgiverIdent,internArbeidsforholdRef:E?i[0].internArbeidsforholdId:void 0,begrunnelse:z.begrunnelse};return m(O).then(Wy(y,o,z)).finally(()=>h.reset(z))},q=A.useRef(null),[B,w]=A.useState(!1),_=A.useCallback(()=>w(z=>!z),[]),H=[{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:le.FORTSETT_UTEN_INNTEKTSMELDING}];return o.arbeidsgiverIdent.length===9&&H.splice(1,0,{label:c.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:le.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),a.jsxs(a.Fragment,{children:[a.jsx(dl,{saksnummer:e,skjæringspunktDato:t,inntektsposter:s,arbeidsforholdForRad:i,inntektsmeldingerForRad:l,alleKodeverk:f,arbeidsgiverFødselsdato:b}),a.jsxs(ze,{formMethods:h,onSubmit:S,children:[!E&&l.length>0&&a.jsxs("div",{className:wt.alertStripe,children:[a.jsx(Ee,{variant:"info",children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})}),a.jsx(x,{sixteenPx:!0})]}),a.jsx(Ne,{name:"saksbehandlersVurdering",label:a.jsxs(C,{gap:"2",children:[a.jsx(k,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),a.jsx(Qi,{ref:q,onClick:_,className:wt.svg,title:c.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),a.jsx(Ar,{open:B,onClose:_,anchorEl:q.current,className:wt.hjelpetekst,children:a.jsxs(Ar.Content,{className:wt.hjelpetekstInnhold,children:[a.jsx(T,{children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),a.jsx(x,{eightPx:!0}),a.jsx(T,{children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),a.jsx(x,{eightPx:!0}),a.jsx(T,{children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})]}),validate:[X],isReadOnly:g,radios:H}),a.jsx(x,{sixteenPx:!0}),a.jsx(en,{label:a.jsx(k,{id:E?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),name:"begrunnelse",validate:[X,zy,Jy,jn],maxLength:1500,readOnly:g}),a.jsx(x,{twentyPx:!0}),!g&&a.jsxs(C,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:h.formState.isSubmitting,disabled:!h.formState.isDirty||h.formState.isSubmitting,children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:h.formState.isSubmitting,onClick:R,type:"button",children:a.jsx(k,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]}),a.jsx(x,{fourtyPx:!0})]})]})};zu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},skjæringspunktDato:{required:!0,tsType:{name:"string"},description:""},inntektsposter:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},arbeidsgiverFødselsdato:{required:!1,tsType:{name:"string"},description:""}}};const Ir="342352362",Zy=bn(3),Xy=cn(1500),Qy=xu(1),ef=Pu(100),nf=e=>n=>{const r=e("fom");return n&&r?ks(r)(n):null},rf=e=>n=>{const r={arbeidsgiverIdent:Ir,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}},t=n.findIndex(s=>s.arbeidsgiverIdent===Ir);return t===-1?n.concat(r):n.map((s,i)=>i===t?r:s)},tf=(e,n,r)=>()=>{e(t=>t.filter(s=>s.arbeidsgiverIdent!==Ir)),r&&n()},ol=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:r,registrerArbeidsforhold:t,radData:s,lukkArbeidsforholdRad:i,erOverstyrt:l,oppdaterTabell:o,erNyttArbeidsforhold:g=!1})=>{const m=W(),[p,y]=A.useState(!1),f=A.useMemo(()=>{var E,R,S,q,B;return{fom:(E=s==null?void 0:s.avklaring)==null?void 0:E.fom,tom:(R=s==null?void 0:s.avklaring)==null?void 0:R.tom,stillingsprosent:(S=s==null?void 0:s.avklaring)==null?void 0:S.stillingsprosent,begrunnelse:(q=s==null?void 0:s.avklaring)==null?void 0:q.begrunnelse,arbeidsgiverNavn:(B=s==null?void 0:s.avklaring)==null?void 0:B.arbeidsgiverNavn}},[s]),b=Ce({defaultValues:f});il(b.formState.isDirty);const c=()=>{i(),b.reset(f)},N=E=>{const R={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:Ir,vurdering:le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,...E};return t(R).then(()=>{o(rf(E)),b.reset(E),g&&i()})},h=()=>{const E=b.getValues(),R={behandlingUuid:e,behandlingVersjon:n,arbeidsgiverIdent:Ir,vurdering:le.FJERN_FRA_BEHANDLINGEN,...E};t(R).then(tf(o,i,g))};return a.jsxs(a.Fragment,{children:[!s&&a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),a.jsx(x,{sixteenPx:!0})]}),a.jsx(x,{eightPx:!0}),a.jsxs(ze,{formMethods:b,onSubmit:N,children:[a.jsxs(C,{gap:"4",children:[l&&a.jsxs(a.Fragment,{children:[a.jsx(ce,{name:"arbeidsgiverNavn",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[X],readOnly:r||!l}),a.jsx(Qn,{name:"fom",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[X,In],isReadOnly:r||!l}),a.jsx(Qn,{name:"tom",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[In,nf(b.getValues)],isReadOnly:r||!l})]}),a.jsx(ce,{name:"stillingsprosent",label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:E=>{const R=parseInt(E.toString(),10);return Number.isNaN(R)?E:R},validate:[X,qu,Qy,ef],readOnly:r||!l,maxLength:3})]}),a.jsx(x,{twentyPx:!0}),a.jsx(en,{label:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Begrunn"}),name:"begrunnelse",validate:[X,Zy,Xy,jn],maxLength:1500,readOnly:r||!l}),a.jsx(x,{twentyPx:!0}),l&&a.jsxs(C,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"secondary",loading:b.formState.isSubmitting,disabled:!b.formState.isDirty||b.formState.isSubmitting,children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Lagre"})}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:b.formState.isSubmitting,onClick:c,type:"button",children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&a.jsxs(a.Fragment,{children:[a.jsx(br,{}),a.jsx(ae,{size:"small",variant:"tertiary",loading:!1,disabled:b.formState.isSubmitting,onClick:()=>y(!0),type:"button",icon:a.jsx(oy,{"aria-hidden":!0}),children:a.jsx(k,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]}),a.jsx(x,{fourtyPx:!0})]}),p&&a.jsx(av,{text:m.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:h,cancel:()=>y(!1),showModal:!0})]})};ol.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const sf="_ikon_1mrt8_1",af="_colTopPadding_1mrt8_5",lf="_imageColTopPadding_1mrt8_9",df="_exclamationmarkIcon_1mrt8_13",of="_checkmarkIcon_1mrt8_20",Cn={ikon:sf,colTopPadding:af,imageColTopPadding:lf,exclamationmarkIcon:df,checkmarkIcon:of},gf=_u.bind(Cn),uf=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",kf=(e,n)=>{if((n==null?void 0:n.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||(n==null?void 0:n.saksbehandlersVurdering)===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n==null?void 0:n.fom,tom:n==null?void 0:n.tom};const r=e.reduce((t,s)=>({fom:t.fom&&I(t.fom).isBefore(s.fom)?t.fom:s.fom,tom:t.tom&&I(t.tom).isAfter(s.tom)?t.tom:s.tom}),{fom:void 0,tom:void 0});return r.fom?r:void 0},mf=(e,n)=>{const r=e.some(i=>i.internArbeidsforholdId),t=e.some(i=>!i.internArbeidsforholdId);if(r&&t)throw Error("Har inntektsmelding både med og uten id");const s=e.find(i=>!i.internArbeidsforholdId||!n||i.internArbeidsforholdId===n);if(!s)throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${n}`);return s},Ju=({saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidOgInntekt:t,radData:s,isReadOnly:i,erOverstyrt:l,oppdaterTabell:o,registrerArbeidsforhold:g,lagreVurdering:m,toggleÅpenRad:p,erRadÅpen:y,alleKodeverk:f})=>{var re,J;const b=W(),{arbeidsgiverNavn:c,arbeidsgiverIdent:N,årsak:h,avklaring:E,arbeidsgiverFødselsdato:R}=s,S=A.useMemo(()=>t.arbeidsforhold.filter(ie=>ie.arbeidsgiverIdent===N),[t,N]),q=A.useMemo(()=>t.inntektsmeldinger.filter(ie=>ie.arbeidsgiverIdent===N),[t,N]),B=(E==null?void 0:E.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,w=S.length>0&&q.length>0&&!h,_=h===et.MANGLENDE_INNTEKTSMELDING,H=h===et.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,z=!!h&&!(E!=null&&E.saksbehandlersVurdering),O=S.length>0&&q.length===0&&!h&&!B,L=S.length===0&&q.length>0&&!h,V=A.useMemo(()=>kf(S,s.avklaring),[B,S,s.avklaring]),U=(re=t.inntekter.find(ie=>ie.arbeidsgiverIdent===N))==null?void 0:re.inntekter;return a.jsxs(iv,{alignWithColumn:1,content:a.jsxs(a.Fragment,{children:[B&&a.jsx(ol,{behandlingUuid:n,behandlingVersjon:r,isReadOnly:!1,registrerArbeidsforhold:g,radData:s,lukkArbeidsforholdRad:p,erOverstyrt:l,oppdaterTabell:o}),w&&a.jsx(ll,{saksnummer:e,arbeidsforholdForRad:S,inntektsmeldingerForRad:q,alleKodeverk:f,arbeidsgiverFødselsdato:R}),L&&a.jsx(nt,{saksnummer:e,arbeidsforhold:S.length>0?S[0]:void 0,inntektsmelding:mf(q,S.length>0?(J=S[0])==null?void 0:J.internArbeidsforholdId:void 0),skalViseArbeidsforholdId:!1,alleKodeverk:f,arbeidsgiverFødselsdato:R}),_&&a.jsx(zu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,isReadOnly:i,arbeidsforholdForRad:S,inntektsmeldingerForRad:q,radData:s,lagreVurdering:m,lukkArbeidsforholdRad:p,oppdaterTabell:o,alleKodeverk:f,arbeidsgiverFødselsdato:R}),H&&a.jsx(Cu,{saksnummer:e,behandlingUuid:n,behandlingVersjon:r,arbeidsgiverNavn:c,inntektsmelding:q[0],radData:s,isReadOnly:i,registrerArbeidsforhold:g,lagreVurdering:m,lukkArbeidsforholdRad:p,oppdaterTabell:o,skalViseArbeidsforholdId:q.length>1}),O&&a.jsx(dl,{saksnummer:e,skjæringspunktDato:t.skjæringstidspunkt,inntektsposter:U,arbeidsforholdForRad:S,alleKodeverk:f,arbeidsgiverFødselsdato:R})]}),showContent:y,toggleContent:p,isApLeftBorder:z,children:[a.jsxs(Dr,{className:gf("ikon",y?"imageColTopPadding":void 0),children:[!z&&a.jsx(Hi,{title:b.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:Cn.checkmarkIcon}),z&&a.jsx(xr,{title:b.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:Cn.exclamationmarkIcon})]}),a.jsxs(Dr,{className:y?Cn.colTopPadding:void 0,children:[y&&a.jsx(F,{size:"small",children:c}),!y&&a.jsx(T,{size:"small",children:c})]}),a.jsx(Dr,{className:y?Cn.colTopPadding:void 0,children:a.jsxs(T,{children:[(V==null?void 0:V.fom)&&a.jsx(Ue,{dateStringFom:V.fom,dateStringTom:V.tom!==Be?V.tom:void 0}),!V&&"-"]})}),a.jsx(Dr,{className:y?Cn.colTopPadding:void 0,children:a.jsx(T,{children:a.jsx(k,{id:uf(B,S.length>0)})})}),a.jsx(Dr,{className:y?Cn.colTopPadding:void 0,children:a.jsxs(T,{children:[S.length<2&&q.length===1&&a.jsx(Ae,{dateString:q[0].motattDato}),!_&&S.length>1&&q.length===S.length&&a.jsx(k,{id:"ArbeidsforholdRad.Mottatt"}),(B||_&&q.length<S.length)&&a.jsx(k,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})};Ju.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const pf="_alertStripe_2poz8_5",vf={alertStripe:pf},yf=(e,n)=>{const r=e.some(l=>l.årsak===et.MANGLENDE_INNTEKTSMELDING),t=e.some(l=>l.årsak===et.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=(n==null?void 0:n.status)===er.OPPRETTET,i=[];return s&&r&&i.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&t&&i.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),i},Wu=({behandling:e,aksjonspunkt:n,readOnly:r,arbeidOgInntekt:t,registrerArbeidsforhold:s,erOverstyrer:i,tabellData:l,settÅpneRadIndexer:o,setErOverstyrt:g,oppdaterTabell:m})=>{const p=W(),{arbeidsforhold:y,inntektsmeldinger:f}=t,[b,c]=A.useState(!1),[N,h]=A.useState(!1),E=A.useCallback(()=>{g(!0),c(!0);const B=l.findIndex(w=>{var _;return((_=w.avklaring)==null?void 0:_.saksbehandlersVurdering)===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER});B!==-1&&o([B])},[l,o]),R=A.useMemo(()=>yf(l,n),[e.versjon]),S=l.every(B=>B.arbeidsgiverIdent!==Ir),q=(n==null?void 0:n.status)===er.OPPRETTET;return a.jsxs(a.Fragment,{children:[a.jsxs(C,{gap:"4",children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),i&&q&&!r&&a.jsx(Ci,{onClick:E}),a.jsx(br,{}),a.jsx(T,{size:"small",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ve(t.skjæringstidspunkt)}})})]}),a.jsx(x,{thirtyTwoPx:!0}),R.length>0&&a.jsx(ar,{children:R.map(B=>p.formatMessage({id:B})).join(" ")}),y.length===0&&f.length===0&&i&&a.jsx("div",{className:vf.alertStripe,children:a.jsx(Ee,{variant:"info",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),a.jsx(x,{sixteenPx:!0}),b&&S&&!N&&a.jsxs(a.Fragment,{children:[a.jsx(x,{twentyPx:!0}),a.jsx(ae,{size:"small",variant:"tertiary",icon:a.jsx(Wi,{"aria-hidden":!0}),onClick:()=>h(!0),children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})}),a.jsx(x,{thirtyTwoPx:!0})]}),a.jsx(x,{thirtyTwoPx:!0}),N&&a.jsxs(a.Fragment,{children:[a.jsx(ol,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>h(!1),oppdaterTabell:m,erOverstyrt:!0,erNyttArbeidsforhold:!0}),a.jsx(x,{fourtyPx:!0})]})]})};Wu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const ff="_alertStripe_z95u6_1",bf={alertStripe:ff},cf=["EMPTY1","ArbeidOgInntektFaktaPanel.Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode","ArbeidOgInntektFaktaPanel.Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt","EMPTY2"],jf=(e,n)=>{const r=e.årsak,t=n.årsak;return r&&!t?-1:t&&!r?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},ed=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,hf=(e,n)=>{const r={saksbehandlersVurdering:e.saksbehandlersVurdering,begrunnelse:e.begrunnelse};return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{...r,arbeidsgiverNavn:n,fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent}:r},Af=e=>e.årsak?-1:1,If=(e,n)=>{const{arbeidsforhold:r,inntektsmeldinger:t}=e,s=[...r.sort(Af)].reduce((l,o)=>{var f;if(l.find(b=>b.arbeidsgiverIdent===o.arbeidsgiverIdent))return l;const m=n[o.arbeidsgiverIdent],p=m.navn,y=o.årsak?o.årsak:(f=t.find(b=>ed(o,b)))==null?void 0:f.årsak;return l.concat({arbeidsgiverIdent:o.arbeidsgiverIdent,arbeidsgiverNavn:p,arbeidsgiverFødselsdato:m.erPrivatPerson?m.fødselsdato:void 0,årsak:y,avklaring:o.saksbehandlersVurdering?hf(o,p):void 0})},[]),i=t.filter(l=>!r.some(o=>ed(o,l))).map(l=>{var o,g;return{arbeidsgiverIdent:l.arbeidsgiverIdent,internArbeidsforholdId:l.internArbeidsforholdId,arbeidsgiverNavn:n[l.arbeidsgiverIdent].navn,arbeidsgiverFødselsdato:(o=n[l.arbeidsgiverIdent])!=null&&o.erPrivatPerson?(g=n[l.arbeidsgiverIdent])==null?void 0:g.fødselsdato:void 0,årsak:l.årsak,avklaring:l.saksbehandlersVurdering?{saksbehandlersVurdering:l.saksbehandlersVurdering,begrunnelse:l.begrunnelse}:void 0}});return s.concat(i).sort(jf)},nd=e=>{const n=e.findIndex(r=>r.årsak&&!r.avklaring);return n!==-1?[n]:[]},Zu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})=>{const[o,g]=A.useState(!1),[m,p]=A.useState(!1),[y,f]=A.useState(!1),{alleKodeverk:b,submitCallback:c,aksjonspunkterForPanel:N,behandling:h,fagsak:E,isReadOnly:R}=En(),S=N.length>0?N[0]:void 0,{formData:q,setFormData:B}=Ln(),[w,_]=A.useState(q||If(e,n)),[H,z]=A.useState(nd(w)),O=fy();A.useEffect(()=>()=>{B(w)},[w]);const L=je=>{H.some(_e=>_e===je)?z(H.filter(_e=>_e!==je)):z(H.concat(je))},V=A.useRef(null),U=je=>{var _e;_(je),z(nd(je(w))),(_e=V==null?void 0:V.current)==null||_e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},re=()=>{g(!0),c({kode:de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},J=()=>{g(!0),l()},ie=je=>{g(!0),p(!1);const{frist:_e,ventearsak:Or}=je;Or&&i({frist:_e,ventearsak:Or})},Re=w.some(je=>{var _e,Or,Wl;return((_e=je.avklaring)==null?void 0:_e.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||((Or=je.avklaring)==null?void 0:Or.saksbehandlersVurdering)===le.MELDING_TIL_ARBEIDSGIVER_NAV_NO||((Wl=je.avklaring)==null?void 0:Wl.saksbehandlersVurdering)===le.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}),Fe=w.every(je=>!je.årsak||je.årsak&&je.avklaring),Je=S===void 0,We=(S==null?void 0:S.status)===er.UTFORT,Z=(S==null?void 0:S.status)===er.OPPRETTET,me=!R&&(We||s&&Je),Te=!R&&Z&&Fe&&!O&&Re,ln=!R&&Z&&Fe&&!O&&!Re;return a.jsxs(a.Fragment,{children:[a.jsx(Wu,{behandling:h,aksjonspunkt:S,readOnly:R,arbeidOgInntekt:e,registrerArbeidsforhold:r,erOverstyrer:s,tabellData:w,settÅpneRadIndexer:z,setErOverstyrt:f,oppdaterTabell:U}),a.jsx(lv,{ref:V,headerTextCodes:cf,noHover:!0,hasGrayHeader:!0,children:w.map((je,_e)=>a.jsx(Ju,{arbeidOgInntekt:e,saksnummer:E.saksnummer,behandlingUuid:h.uuid,behandlingVersjon:h.versjon,radData:je,isReadOnly:R||We||Je,registrerArbeidsforhold:r,lagreVurdering:t,toggleÅpenRad:()=>L(_e),erOverstyrt:y,oppdaterTabell:U,erRadÅpen:H.includes(_e),alleKodeverk:b},`${je.arbeidsgiverNavn}${je.arbeidsgiverIdent}${_e}`))}),a.jsx(x,{sixteenPx:!0}),Te&&a.jsxs(a.Fragment,{children:[a.jsx(ae,{size:"small",variant:"primary",disabled:o,onClick:()=>p(!0),type:"button",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),a.jsx(hv,{submitCallback:ie,cancelEvent:()=>p(!1),defaultVenteårsak:jv.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:b[gn.VENT_AARSAK],erTilbakekreving:!1,showModal:m})]}),ln&&a.jsx(ae,{size:"small",variant:"primary",disabled:o,loading:o,onClick:re,type:"button",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})}),me&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:bf.alertStripe,children:a.jsx(Ee,{variant:"info",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),a.jsx(x,{sixteenPx:!0}),a.jsx(ae,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:J,type:"button",children:a.jsx(k,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})]})]})};Zu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tf={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad"},Rf=Ke(Tf),Xu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})=>a.jsx(Ge,{value:Rf,children:a.jsx(Hu,{children:a.jsx(Zu,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:r,lagreVurdering:t,erOverstyrer:s,settBehandlingPåVentCallback:i,åpneForNyVurdering:l})})});Xu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ef=[de.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING],Nf=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),{behandling:r,hentOgSettBehandling:t,rettigheter:s}=A.use(Pn),i=lr(Ef),l=xn(r),{data:o}=Sn(l.arbeidOgInntektOptions(r)),{mutate:g}=_t({mutationFn:f=>l.settBehandlingPåVent({frist:f.frist??"",ventearsak:f.ventearsak,behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()}),{mutateAsync:m}=_t({mutationFn:f=>l.registrerArbeidsforholdForAOI(f)}),{mutateAsync:p}=_t({mutationFn:f=>l.lagreVurderingForAOI(f)}),{mutate:y}=_t({mutationFn:()=>l.åpneForNyVurderingAOI({behandlingUuid:r.uuid,behandlingVersjon:r.versjon}),onSuccess:()=>t()});return a.jsx(dr,{standardPanelProps:i,faktaPanelKode:ir.ARBEID_OG_INNTEKT,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.ArbeidOgInntekt"}),skalPanelVisesIMeny:Vu(r,"ARBEID_OG_INNTEKT")&&!fs(de.AVKLAR_ARBEIDSFORHOLD,r.aksjonspunkt),children:o?a.jsx(Xu,{arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:e,erOverstyrer:s.kanOverstyreAccess.isEnabled,registrerArbeidsforhold:m,lagreVurdering:p,settBehandlingPåVentCallback:g,åpneForNyVurdering:y}):a.jsx(Nn,{})})};Nf.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ji=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(ji||{});const Qu=({arbeidsforhold:e})=>e.permisjonOgMangel?a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"PermisjonPeriode.Permisjon"})}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:e.permisjonOgMangel.permisjonFom,dateStringTom:e.permisjonOgMangel.permisjonTom?e.permisjonOgMangel.permisjonTom:""})})]}):null;Qu.__docgenInfo={description:"",methods:[],displayName:"PermisjonPeriode",props:{arbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Sf=e=>e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE||e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE?e.tom:void 0,qf=e=>e.permisjonOgMangel?"ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?"ArbeidsforholdDetail.OppdaterArbeidsforhold":"ArbeidsforholdDetail.ArbeidsforholdErAktivt",ek=({valgtArbeidsforhold:e})=>{var p,y;const n=e.saksbehandlersVurdering===le.BRUK,r=e.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING,t=e.saksbehandlersVurdering===le.BRUK_MED_OVERSTYRT_PERIODE,s=e.saksbehandlersVurdering===le.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,i=e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,l=e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,o=((p=e.permisjonOgMangel)==null?void 0:p.permisjonStatus)===ji.BRUK_PERMISJON,g=((y=e.permisjonOgMangel)==null?void 0:y.permisjonStatus)===ji.IKKE_BRUK_PERMISJON,m=Sf(e);return a.jsx(Eu,{children:a.jsxs(Q,{gap:"4",children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.Header"})}),a.jsx(Qu,{arbeidsforhold:e}),t&&a.jsxs(a.Fragment,{children:[a.jsx(T,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt"})}),a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato"})}),a.jsxs(T,{size:"small",children:[m&&a.jsx(Ae,{dateString:m}),!m&&"-"]})]})]}),n&&o&&a.jsx(T,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.SokerErIPermisjon"})}),i&&a.jsx(T,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.OppdatertGittIm"})}),(l||(n||r)&&(!e.permisjonOgMangel||g))&&a.jsxs(a.Fragment,{children:[a.jsx(T,{size:"small",children:a.jsx(k,{id:qf(e)})}),r&&a.jsx(T,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag"})}),!r&&!l&&a.jsx(T,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger"})})]}),s&&a.jsx(T,{size:"small",children:a.jsx(k,{id:s?"ArbeidsforholdDetail.FjernArbeidsforholdet":"ArbeidsforholdDetail.IMIkkeRelevant"})}),a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdDetail.Begrunnelse"})}),a.jsx(T,{size:"small",children:e.begrunnelse})]})]})})};ek.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdDetail",props:{valgtArbeidsforhold:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const nk=()=>a.jsxs(j,{children:[a.jsx(j.Header,{children:a.jsxs(j.Row,{children:[a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:a.jsx("br",{})}},1)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Periode",values:{br:a.jsx("br",{})}},2)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Kilde",values:{br:a.jsx("br",{})}},3)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:a.jsx("br",{})}},4)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:a.jsx("br",{})}},5)})]})}),a.jsx(j.Body,{children:a.jsxs(j.Row,{children:[a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:a.jsx(k,{id:"PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert"})})}),a.jsx(j.DataCell,{}),a.jsx(j.DataCell,{}),a.jsx(j.DataCell,{}),a.jsx(j.DataCell,{})]})})]});nk.__docgenInfo={description:"",methods:[],displayName:"IngenArbeidsforholdRegistrert"};const xf="_image_awjuc_1",Pf={image:xf},Bf=(e,n)=>e.saksbehandlersVurdering===le.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?n.formatMessage({id:"PersonArbeidsforholdTable.Inntektsmelding"}):e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?n.formatMessage({id:"PersonArbeidsforholdTable.Saksbehandler"}):n.formatMessage({id:"PersonArbeidsforholdTable.AaRegisteret"}),Qt=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Ff=e=>e?`...${e.substring(e.length-4,e.length)}`:"",_f=(e,n,r)=>{const t=r[e.arbeidsgiverIdent],s=t==null?void 0:t.navn;return e.saksbehandlersVurdering===le.MANUELT_OPPRETTET_AV_SAKSBEHANDLER?s:n.filter(l=>l.arbeidsgiverIdent===e.arbeidsgiverIdent).length>1?`${s}(${t.identifikator})${Ff(e.eksternArbeidsforholdId)}`:`${s}(${t.identifikator})`},Of=(e,n)=>{const r=n[e.arbeidsgiverIdent];return`${e.eksternArbeidsforholdId}${e.arbeidsgiverIdent}${r.identifikator}`},rk=({alleArbeidsforhold:e,selectedId:n,selectArbeidsforholdCallback:r,arbeidsgiverOpplysningerPerId:t,inntektsmeldinger:s})=>{const i=W();return e.length===0?a.jsx(nk,{}):a.jsxs(j,{children:[a.jsx(j.Header,{children:a.jsxs(j.Row,{children:[a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Arbeidsforhold",values:{br:a.jsx("br",{})}},1)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Periode",values:{br:a.jsx("br",{})}},2)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Kilde",values:{br:a.jsx("br",{})}},3)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.Stillingsprosent",values:{br:a.jsx("br",{})}},4)}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"PersonArbeidsforholdTable.MottattDato",values:{br:a.jsx("br",{})}},5)}),a.jsx(j.HeaderCell,{scope:"col"})]})}),a.jsx(j.Body,{children:e==null?void 0:e.map(l=>{var p;const o=l.stillingsprosent!==void 0&&l.stillingsprosent!==null?`${l.stillingsprosent.toFixed(2)} %`:"",g=_f(l,e,t),m=(p=s.find(y=>Qt(l,y)))==null?void 0:p.motattDato;return a.jsxs(j.Row,{onMouseDown:()=>r(l),onKeyDown:()=>r(l),selected:l.arbeidsgiverIdent===n,children:[a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:zi(g)})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:l.fom,dateStringTom:l.tom!==Be?l.tom:void 0})})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:Bf(l,i)})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:o})}),a.jsx(j.DataCell,{children:m&&a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:m})})}),a.jsx(j.DataCell,{children:(l.saksbehandlersVurdering===le.BRUK||l.saksbehandlersVurdering===le.FORTSETT_UTEN_INNTEKTSMELDING)&&a.jsx(Sv,{className:Pf.image,title:i.formatMessage({id:"PersonArbeidsforholdTable.ErIBruk"})})})]},Of(l,t))})})]})};rk.__docgenInfo={description:"",methods:[],displayName:"PersonArbeidsforholdTable",props:{alleArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"arbeidsforhold"}],return:{name:"void"}}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""}}};const rd=(e,n)=>n.some(r=>Qt(e,r)),Df=(e,n)=>(r,t)=>{var g,m;const s=e[r.arbeidsgiverIdent],i=e[t.arbeidsgiverIdent];if(s&&i){const p=s.navn.localeCompare(i.navn);if(p!==0)return p}const l=rd(r,n),o=rd(t,n);if(l&&o){const p=(g=n.find(f=>Qt(r,f)))==null?void 0:g.motattDato,y=(m=n.find(f=>Qt(t,f)))==null?void 0:m.motattDato;return fr(y,Pe).diff(fr(p,Pe))}return l?-1:o?1:r.arbeidsgiverIdent.localeCompare(t.arbeidsgiverIdent)},tk=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const[r,t]=A.useState(),s=g=>{const m=!!g.saksbehandlersVurdering;t(m?g:void 0)},{arbeidsforhold:i,inntektsmeldinger:l}=e,o=i.toSorted(Df(n,l));return a.jsxs(a.Fragment,{children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdInfoPanel.ArbeidsforholdHeader"})}),a.jsx(rk,{selectedId:r==null?void 0:r.arbeidsgiverIdent,alleArbeidsforhold:o,selectArbeidsforholdCallback:s,arbeidsgiverOpplysningerPerId:n,inntektsmeldinger:l}),r&&a.jsx(ek,{valgtArbeidsforhold:r})]})};tk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInfoPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const wf={"ArbeidsforholdInfoPanel.ArbeidsforholdHeader":"Arbeidsforhold som er aktive ved permisjonsstart","PersonArbeidsforholdTable.Arbeidsforhold":"{br}Arbeidsforhold","PersonArbeidsforholdTable.Periode":"{br}Periode","PersonArbeidsforholdTable.Kilde":"{br}Kilde","PersonArbeidsforholdTable.Stillingsprosent":"{br}Stillingsprosent","PersonArbeidsforholdTable.MottattDato":"Inntektsmeld.{br}mottatt dato","PersonArbeidsforholdTable.ErIBruk":"Arbeidsforhold skal brukes","PersonArbeidsforholdTable.IngenArbeidsforhold":"Det finnes ingen arbeidsforhold","PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert":"Ingen arbeidsforhold registrert","PersonArbeidsforholdTable.LeggTilArbeidsforhold":"Legg til arbeidsforhold","ArbeidsforholdDetail.Header":"Detaljer","ArbeidsforholdDetail.ArbeidsforholdErAktivt":"Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.","ArbeidsforholdDetail.OppdaterArbeidsforhold":"Arbeidsforhold er manuelt opprettet av saksbehandler","ArbeidsforholdDetail.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon":"Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.","ArbeidsforholdDetail.FjernArbeidsforholdet":"Fjern arbeidsforholdet for denne behandlingen","ArbeidsforholdDetail.IMIkkeRelevant":"Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene","ArbeidsforholdDetail.ArbeidsforholdetErIkkeAktivt":"Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.ArbeidsforholdetAktivTomDato":"Arbeidsforhold aktivt tom. dato","ArbeidsforholdDetail.AvslaYtelseManglendeOpplysninger":"Ytelsen kan avslås på grunn av manglende opplysninger.","ArbeidsforholdDetail.BenyttAInntektIBeregningsgrunnlag":"Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.","ArbeidsforholdDetail.Begrunnelse":"Begrunn endringene","ArbeidsforholdDetail.SokerErIPermisjon":"Søker er i permisjon. Inntektsmelding er ikke nødvendig.","ArbeidsforholdDetail.OppdatertGittIm":"Arbeidsforholdet er opprettet basert på motatt inntektsmelding","PersonArbeidsforholdTable.Inntektsmelding":"Inntektsmelding","PersonArbeidsforholdTable.Saksbehandler":"Saksbehandler","PersonArbeidsforholdTable.AaRegisteret":"AA-Registeret","PermisjonPeriode.Permisjon":"Permisjon","PermisjonPeriode.Permisjoner":"Permisjoner"},Vf=Ke(wf),sk=e=>a.jsx(Ge,{value:Vf,children:a.jsx(tk,{...e})});sk.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const td=[de.AVKLAR_ARBEIDSFORHOLD],Mf=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),r=lr(td),{behandling:t}=A.use(Pn),s=xn(t),{data:i}=Sn(s.arbeidOgInntektOptions(t));return a.jsx(dr,{standardPanelProps:r,faktaPanelKode:ir.ARBEIDSFORHOLD,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Arbeidsforhold"}),skalPanelVisesIMeny:td.some(l=>fs(l,t.aksjonspunkt)),children:i?a.jsx(sk,{arbeidOgInntekt:i,arbeidsgiverOpplysningerPerId:e}):a.jsx(Nn,{})})};Mf.__docgenInfo={description:`ArbeidsforholdFaktaInitPanel

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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const ak="https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn";var he=(e=>(e.AVKLAR_AKTIVITETER="AVKLAR_AKTIVITETER",e.VURDER_FAKTA_FOR_ATFL_SN="VURDER_FAKTA_ATFL_SN",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="OVST_BEREGNINGSAKTIVITETER",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="OVST_INNTEKT",e))(he||{}),sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ad={exports:{}},Gr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function Gf(){if(id)return Gr;id=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Gr.Fragment=n,Gr.jsx=r,Gr.jsxs=r,Gr}var ld;function Lf(){return ld||(ld=1,ad.exports=Gf()),ad.exports}var u=Lf(),un=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(un||{}),dt=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(dt||{}),ge=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(ge||{});const rt={};rt.BA=dt.BRUKERS_ANDEL;rt.FL=dt.FRILANS;rt.SN=dt.EGEN_NÆRING;var or=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(or||{}),ik=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(ik||{});const cs=e=>e==="OPPR";var D=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(D||{}),gl=(e=>(e.JURIDISK_ENHET="JURIDISK_ENHET",e.VIRKSOMHET="VIRKSOMHET",e.KUNSTIG="KUNSTIG",e))(gl||{}),js=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(js||{});const Ds=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Gn=(e,n)=>e.erPrivatPerson?e.fødselsdato?`${e.navn} (${I(e.fødselsdato).format(te)})${Ds(n)}`:`${e.navn}${Ds(n)}`:`${e.navn} (${e.identifikator})${Ds(n)}`,tt="avklarAktiviteterForm",vn="vurderFaktaBeregningForm",Xe=(e,n)=>n.some(r=>r.definisjon===e),Kf=e=>e===ik.OPPRETTET,$f="_begrunnelseTextField_12bwv_1",Uf="_explanationTextarea_12bwv_4",Yf="_explanationTextareaReadOnly_12bwv_7",ws={begrunnelseTextField:$f,explanationTextarea:Uf,explanationTextareaReadOnly:Yf},lk={"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning":"Saksopplysninger beregning","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning":"Vurder fakta for beregningen","BeregningInfoPanel.AksjonspunktHelpText.ForSentRefusjonskrav":"{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold":"Er arbeidsforholdet i {navn} med varighet {fom} - {tom} tidsbegrenset?","BeregningInfoPanel.FormAlternativ.Ja":"Ja","BeregningInfoPanel.FormAlternativ.Nei":"Nei","BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende":"Ble søker yrkesaktiv i løpet av de siste tre årene?","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1":"En næringsdrivende er “ny i arbeidslivet” når de i løpet av de tre siste årene har begynt i arbeidslivet, og i den forbindelse startet en virksomhet. Dette kan for eksempel være en student som etter eksamen oppretter et firma.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2":"For å finne ut når søker ble yrkesaktiv, kan du se i Brønnøysundregistrene når næringsvirksomheten ble registert. Du kan også bruke A-inntekt for å se om søker har hatt annen inntekt de tre siste ferdiglignede årene.","BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3":"Hvis du velger “ja”, kan du skjønnsfastsette næringsinntekten i neste steg, selv om avviket ikke er over 25 prosent. Hvis du velger “nei”, brukes hovedregler for beregning av næringsinntekt.","BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes":"Ja (månedsinntekt må fastsettes)","BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt":"Nei (bruker A-inntekt)","BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore":"Gå til A-inntekt og sjekk at informasjon om tidsbegrenset arbeidsforhold stemmer overens med informasjonen her. Ved å velge “ja”, gir det mulighet til å skjønnsfastsette de ulike periodene i beregning.","AvklarAktivitetPanel.Overskrift":"Aktiviteter i beregningsgrunnlaget","AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt":"Skjæringstidspunkt: {skjaeringstidspunkt}","AvklarAktivitetPanel.ButtonText":"Oppdater","AvklarAktivitetPanel.OverstyrText":"Overstyr","AvklareAktiviteter.Avbryt":"Avbryt","VurderAktiviteterTabell.FullAAPKombinert.Overskrift":"Søker har full AAP sammen med andre aktiviteter","VurderAktiviteterTabell.VentelonnVartpenger.Overskrift":"Søker har ventelønn eller vartpenger som siste aktivitet. Skjæringstidspunkt for beregning {skjaeringstidspunkt}","VurderAktiviteterTabell.Overstyrt.Overskrift":"Skjæringstidspunkt for beregning {skjaeringstidspunkt}","BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL":"Startet søker som frilanser i løpet av de siste 3 månedene før skjæringstidspunktet?","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1":"Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.","BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2":"Undersøk om søker faktisk var nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge ”nei”.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans":"Fastsett frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag":"Fastsett arbeidsinntekt og samlet frilansinntekt for alle oppdrag.","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"Fastsett samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet":"Fastsett arbeidsinntekt og samlet frilansinntekt","BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt":"Fastsett arbeidsinntekt","BeregningInfoPanel.LonnsendringForm.HarSokerEndring":"Har søker hatt lønnsendring i løpet av de siste tre månedene?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette":"Hva betyr dette?","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1":"En arbeidstaker som får en varig lønnsendring i eller etter beregningsperioden, men før skjæringstidsspunktet, skal ha lønnsendringen med i beregningsgrunnlaget.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2":"Med varig lønnsendring menes alle lønnsendringer som ikke er midlertidige, og gjelder både ved lønnsøkning og lønnsreduksjon.","BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3":"Dette kan eksempelvis være endring av lønn etter lokale lønnsforhandlinger eller tariffendringer. Det kan også være en varig endring av stillingsprosent med dertil endret lønn.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans":"Mottar søker sykepenger, foreldrepenger, pleiepenger eller svangerskapspenger for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans":"Mottar søker ytelse for frilansaktivitet?","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid":"Mottar søker ytelse for arbeid i {arbeid}?","BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans":"Fastsett månedsinntekt for frilans","BeregningInfoPanel.VurderMottarYtelse.FastsettNyManedsinntekt":"Fastsett ny månedsinntekt","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge ”nei”.","BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1":"Undersøk om søker har mottatt ytelse i beregningsperioden. I noen tilfeller kan det være feilregistreringer fra andre systemer og du skal da velge “nei”.","BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2":"For å se om søker har mottatt ytelse kan du for eksempel bruke A-inntekt (filter 8-30), se på utbetalinger i Modia eller vedtaksbrev i Gosys.","BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift":"Fastsett månedsinntekt for {bedrift}","BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger":"Fastsett månedsinntekt dagpenger","BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende":"Fastsett månedsinntekt selvstendig næringsdrivende","BeregningInfoPanel.InntektInputFields.MilitærEllerSivil":"Fastsett månedsinntekt militær","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1":"Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2":"Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt, lønnslipp eller lignende.","BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3":"Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1":"Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2":"Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.","BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3":"Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1":"Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.","BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2":"Eksempel: {br} Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd = månedsinntekt.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"Trekk fra arbeidsinntekt oppgitt i inntektsmelding fra totalinntekt i A-inntekt. {br} Ta hensyn til eventuelle lønnsendringer.","BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2":"Restbeløp er frilansinntekt.","BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem":"Hvordan går jeg frem?","BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt":"Hvordan går jeg frem for å fastsette månedsinntekten for ytelsen?","BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori":"Hva betyr inntektskategori?","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1":"Undersøk i Modia om søker har full AAP.","BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2":"Ved full AAP skal arbeidsinntekten ikke benyttes.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er arbeidsinntekt og hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"<h3>Søker er arbeidstaker og frilans i samme virksomhet.</h3>Inntekter er rapportert inn på samme org. nummer, og inntektene kan ikke skilles fra hverandre. Fastsett hva som er samlet frilansinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText":"<h3>Vurder om søker har hatt lønnsendring</h3>Det er registrert lønnsendring i Aa-registeret, men ny inntekt kan ikke fastsettes av systemet. Vurder om registrert lønnsendring er riktig og fastsett ny månedsinntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans":"<h3>Vurder om søker mottar ytelse for frilansaktivitet</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker":"<h3>Vurder om søker mottar ytelse for arbeidsforhold</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men utbetalt beløp kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText":"<h3>Vurder om søker har etterlønn eller sluttvederlag i beregningsperioden</h3>Søker har oppgitt etterlønn eller sluttvederlag i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText":"<h3>Vurder om søker har vært i militær- eller siviljeneste i opptjeningsperioden</h3>Søker har oppgitt militær- eller siviltjeneste i søknaden.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText":"<h3>Søker har ytelse som eneste inntekt</h3>Det er funnet utbetaling av ytelse i beregningsperioden, men beløp og inntektskategori kan ikke hentes fra registrene.","BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText":"<h3>Vurder om frilanser er nyoppstartet</h3>Det er funnet frilansoppdrag med oppstartsdato i beregningsperioden. Vurder om frilansoppdrag er nyoppstartet, og om det skal benyttes en kortere periode for å fastsette inntekt.","BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText":"<h3>Vurder om søker ble yrkesaktiv i løpet av de siste tre årene</h3>Søker har oppgitt i søknaden at de er selvstendig næringsdrivende og ny i arbeidslivet.","BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText":"<h3>Vurder refusjonskrav som har kommet for sent</h3>{arbeidsgiverVisningsnavn} har minst ett refusjonskrav som har kommet for sent.","BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText":"<h3>Vurder om arbeidsforholdet er tidsbegrenset</h3>Det er funnet sluttdato frem i tid for {arbeidsgiverVisningsnavn} og arbeidsforholdet er kortere enn 6 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1":"Gå til A-inntekt for å finne brukerens inntekter.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2":"Du skal finne aktuell månedsinntekt etter § 8-28. Utbetalinger fra Nav ligger ikke i dette filteret. Du skal ikke hente opplysninger fra andre steder enn §8-28-filteret og legge det til beregningsgrunnlaget. Regn om aktuell månedsinntekt til årsinntekt ved å gange med 12 måneder.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3":"Bruk så filter §8-30 og regn ut den totale inntekten for de siste 12 månedene før skjæringstidspunktet.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4":"Regn ut differansen mellom aktuell månedsinntekt (§8-28 filter) og rapportert inntekt for de siste 12 månedene (§8-30 filter).","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5":"Regn ut avviket. Differansen mellom omregnet aktuell månedsinntekt (som du fant etter 8-28) og rapportert inntekt de siste 12 kalendermånedene (§ 8-30 filteret) x 100 / rapportert inntekt de siste 12 kalendermånedene = avvik i prosent.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6":"Dersom det er mer enn 25 prosent differanse i avviksberegningen skal det fastsettes ved skjønn.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7":"Når du har funnet ut hva den skjønnsmessige inntekten skal være, skal den legges inn som månedsinntekt i feltet under.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1":"Inntektskategori er den/de arbeidsaktivitetene som beregningsgrunnlaget ble fastsatt ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2":"Hvis ytelsen er beregnet fra annen ytelse, skal du ta utgangspunkt i aktivitetene den første ytelsen beregnet ut fra.","BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3":"Du finner inntektskategorien ytelsen er basert på i Modia.","BeregningInfoPanel.VurderBestebergning.HarBesteberegning":"Søker har hatt dagpenger i opptjeningsperioden. Skal dette fordeles etter besteberegning?","InntektstabellPanel.Avbryt":"Avbryt overstyring","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet":"Finn regneark på navet","BeregningInfoPanel.FordelingBG.Sum":"Sum","BeregningInfoPanel.FordelingBG.Andel":"Aktivitet","BeregningInfoPanel.FordelingBG.Arbeidsperiode":"Arbeidsperiode","BeregningInfoPanel.FordelingBG.Refusjonskrav":"Refusjonskrav","BeregningInfoPanel.FordelingBG.Fordeling":"Månedsinntekt","BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn":"Fastsett månedsinntekt for {andel}","BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn":"Inntektskategori for {andel}","BeregningInfoPanel.FordelingBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelingBG.LeggTilDagpengerAndel":"Legg til dagpenger","BeregningInfoPanel.FordelingBG.FjernDagpenger":"Fjern dagpenger","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelingBG.FjernAndel":"Fjern aktivitet","AvklareAktiviteter.OverstyrerAktivitetAdvarsel":"Overstyr hvilke aktiviteter og eventuelle inntektsmeldinger som skal benyttes i beregning.","VurderAktiviteterTabell.Header.Aktivitet":"Aktivitet","VurderAktiviteterTabell.Header.Periode":"Periode","VurderAktiviteterTabell.Header.Benytt":"Benytt","VurderAktiviteterTabell.Header.IkkeBenytt":"Ikke benytt","VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet":"Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag","BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter":"Vurder hvilke aktiviteter som skal benyttes i beregningsgrunnlaget.","BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold":"Det finnes ikke registerdata for arbeidsforholdet og det er ikke mottatt inntektsmelding. Fastsett månedsinntekt for arbeidsforholdet","KunYtelsePanel.Overskrift":"Søker har ytelse som eneste inntekt. Fastsett månedsbeløp for fordeling av beregningsgrunnlaget.","KunYtelsePanel.HarBesteberegning":"Søker har ytelse som eneste inntekt. Skal denne fordeles etter besteberegning?","KunYtelsePanel.OverskriftBesteberegning":"Fastsett månedsbeløp for brutto beregningsgrunnlag etter besteberegning","KunYtelsePanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","InntektstabellPanel.RapporterteInntekter":"Rapporterte inntekter","BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt":"Har søker etterlønn eller sluttvederlag?","BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1":"Gå til A-inntekt og se om etterlønn eller sluttvederlag er rapportert. Hvis ikke, kontakt søker og be de dokumentere etterlønn/sluttvederlag med avtale el.","BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt":"Har søker vært i militær- eller sivilforsvarstjeneste i opptjeningsperioden?","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1":"Kontakt søker og be om dokumentasjon på avtjent tjeneste i opptjeningsperioden. Vurder om tjenesten har vart eller var ment å vare mer enn 28 dager i henhold til §8-46. Denne informasjonen er ikke tilgjengelig i noen registre, og vi må derfor ha dokumentasjon fra søker.","BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2":"Svarer du ”ja” vil utbetalingen bli minst 2G (pleiepenger) / 3G (foreldrepenger). Svarer du ”nei” beregnes det etter vanlige regler.","VurderRefusjonForm.ErRefusjonskravGyldig":"Skal refusjonskrav som ikke har kommet innen fristen tas med i beregning?","VurderRefusjonForm.ReadMore":"Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).","BeregningInfoPanel.Validation.MinstEnFastsatt":"Må ha overstyrt inntekt for minst én aktivitet.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},dd=Ke(lk),Hf=bn(3),dk=4e3,Cf=cn(dk),Br=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:s=!1,name:i="begrunnelse"})=>{const l=s?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.Begrunnelse",o=t||dd.formatMessage({id:l});return u.jsx(Ge,{value:dd,children:(n||r)&&u.jsx("div",{className:ws.begrunnelseTextField,children:u.jsx(en,{name:i,label:o,validate:e?[]:[X,Hf,Cf,jn],className:e?ws.explanationTextareaReadOnly:ws.explanationTextarea,maxLength:dk,readOnly:e})})})};Br.buildInitialValues=(e,n="begrunnelse")=>({[n]:zi(e)});Br.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const{AVKLAR_AKTIVITETER:ul,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:zf}=he,Jf=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Wf=(e,n,r)=>(e||Jf(ul,n))&&r,ok=e=>e.find(n=>n.definisjon===zf||n.definisjon===ul),Zf=(e,n)=>Xe(ul,e)||n,Xf=(e,n,r)=>e&&n&&!r,Qf=(e,n)=>e.arbeidsforholdId?n+e.arbeidsforholdId:n,od=(e,n)=>e+n.fom.replace(".",""),He=e=>{if(e.arbeidsgiverIdent){const n=Qf(e,e.arbeidsgiverIdent);return od(n,e)}return od(e.arbeidsforholdType,e)},eb=(e,n)=>e||n,Ut=(e,n,r,t,s)=>!n&&!r||e.arbeidsforholdType&&e.arbeidsforholdType===or.AAP?!1:n?eb(t,s):!0,nb=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return s?Gn(s,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[un.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},rb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n)),tb=(e,n,r,t)=>Ut(e,n,r,t,!1)?e.skalBrukes===void 0||e.skalBrukes===null?void 0:e.skalBrukes.toString():e.skalBrukes===!0||e.skalBrukes===null||e.skalBrukes===void 0?"true":"false",sb=(e,n,r,t,s,i)=>({beregningAktivitetNavn:nb(e,i,n),fom:e.fom,tom:e.tom,skalBrukes:tb(e,r,t,s)}),ab=(e,n,r,t)=>{const s=rb(r,t);return n.filter(i=>e.aktiviteterValues&&(e.aktiviteterValues[He(i)].skalBrukes==="false"||e.aktiviteterValues[He(i)].tom!=null)).map(i=>({oppdragsgiverOrg:i.arbeidsgiverIdent&&i.arbeidsgiverIdent.length===9?i.arbeidsgiverIdent:void 0,arbeidsforholdRef:i.arbeidsforholdId,fom:i.fom,tom:e.aktiviteterValues&&e.aktiviteterValues[He(i)].tom!=null?e.aktiviteterValues[He(i)].tom:i.tom,opptjeningAktivitetType:i.arbeidsforholdType,arbeidsgiverIdentifikator:i.arbeidsgiverIdent,skalBrukes:s&&e.aktiviteterValues?e.aktiviteterValues[He(i)].skalBrukes==="true":!0}))},ib=(e,n,r,t,s,i)=>{const l={};return e&&e.forEach(o=>{l[He(o)]=sb(o,n,r,t,s,i)}),l},lb="_radios_4fctu_1",db="_navnKol_4fctu_10",ob="_table_4fctu_15",Cr={radios:lb,navnKol:db,table:ob},gb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n)),gd=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?n[e.arbeidsgiverIdent]:void 0;return s?Gn(s,e.eksternArbeidsforholdId):e.arbeidsforholdType&&((t=r[un.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn)||""},ub=({readOnly:e,isAvklaringsbehovClosed:n,aktivitet:r,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:p})=>{const y=W(),f=gb(o,l),b=c=>{const N=gd(r,m,t),h=`${Xl(r.fom)} til ${Xl(r.tom||"")}`;return`${c?"Benytt":"Ikke benytt"} ${N} ${h}`};return u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{className:Cr.navnKol,children:u.jsx(T,{size:"small",children:gd(r,m,t)})}),u.jsxs(j.DataCell,{className:Cr.rowalign,children:[!s&&u.jsx(T,{children:u.jsx(Ue,{size:"small",dateStringFom:r.fom,dateStringTom:r.tom})}),s&&u.jsxs("div",{children:[u.jsxs(T,{as:"span",size:"small",children:[u.jsx(Ae,{dateString:r.fom})," -"," "]}),u.jsx(Qn,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${He(r)}.tom`,validate:[X,In,ks(r.fom)],isReadOnly:e,size:"small"})]})]}),u.jsx(j.DataCell,{className:Cr.radios,children:u.jsx(Ne,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${He(r)}.skalBrukes`,label:y.formatMessage({id:"VurderAktiviteterTabell.Header.Benytt"}),validate:[X],isHorizontal:!0,isReadOnly:e||!Ut(r,s,i,f,g),radios:[{value:"true",label:b(!0)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(j.DataCell,{className:Cr.radios,children:u.jsx(Ne,{name:`avklarAktiviteterForm.${p}.aktiviteterValues.${He(r)}.skalBrukes`,label:y.formatMessage({id:"VurderAktiviteterTabell.Header.IkkeBenytt"}),validate:[X],isHorizontal:!0,isReadOnly:e||!Ut(r,s,i,f,g),radios:[{value:"false",label:b(!1)}],hideLegend:!0,hideRadioLabels:!0})}),u.jsx(j.DataCell,{children:n&&e&&Ut(r,s,i,f,g)&&u.jsx(it,{})})]},He(r))},kb=(e,n,r)=>{const t=In(r)?"":I(r).format(te);return e.some(s=>s.arbeidsforholdType&&s.arbeidsforholdType===or.VENTELØNN_VARTPENGER)?u.jsx(k,{id:"VurderAktiviteterTabell.VentelonnVartpenger.Overskrift",values:{skjaeringstidspunkt:t}}):""},mb=()=>["VurderAktiviteterTabell.Header.Aktivitet","VurderAktiviteterTabell.Header.Periode","VurderAktiviteterTabell.Header.Benytt","VurderAktiviteterTabell.Header.IkkeBenytt"],pb=({readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:r,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:p})=>u.jsxs(u.Fragment,{children:[u.jsx(F,{size:"small",children:kb(r,s,l)}),u.jsxs(j,{size:"small",className:Cr.table,children:[u.jsx(j.Header,{children:u.jsxs(j.Row,{children:[mb().map(y=>u.jsx(j.HeaderCell,{scope:"col",children:u.jsx(F,{size:"small",as:"span",children:u.jsx(k,{id:y})})},y)),u.jsx(j.HeaderCell,{})]})}),u.jsx(j.Body,{children:r.map(y=>u.jsx(ub,{aktivitet:y,readOnly:e,isAvklaringsbehovClosed:n,kodeverkSamling:t,erOverstyrt:s,harAvklaringsbehov:i,tomDatoForAktivitetGruppe:l,valgtSkjæringstidspunkt:o,ingenAktiviterErBrukt:g,arbeidsgiverOpplysningerPerId:m,fieldId:p},`${y.arbeidsgiverIdent}-${y.fom}-${y.tom}`))})]})]}),hi=(e,n)=>!!e.aktiviteter&&e.aktiviteter.find(r=>{const t=He(r);return n.aktiviteterValues&&n.aktiviteterValues[t]?n.aktiviteterValues[t].skalBrukes!=="false":r.skalBrukes})!==void 0,vb=(e,n)=>{let r=0;for(;r<e.length&&I(n).isBefore(e[r].tom===void 0?null:e[r].tom);)r+=1;return r},ud=(e,n,r)=>{const t=e.find(({tom:s})=>s===r);if(t===void 0){const s={tom:r,aktiviteter:[n]},i=vb(e,r);e.splice(i,0,s)}else{if(!t.aktiviteter)throw new Error(`Forventer å ha aktiviteter på tom ${t.tom}`);t.aktiviteter.push(n)}},yb=e=>{var n;return!!((n=e.avklarAktiviteter)!=null&&n.aktiviteterTomDatoMapping)&&e.avklarAktiviteter.aktiviteterTomDatoMapping.some(r=>r.aktiviteter&&!r.aktiviteter.some(t=>!I(t.tom).isValid()))},fb=e=>{var n;const r=e.avklarAktiviteter?e.avklarAktiviteter.aktiviteterTomDatoMapping||[]:[],t=[],s=(n=e.avklarAktiviteter)==null?void 0:n.skjæringstidspunkt;if(!s)throw new Error("Forventer skjæringstidspunkt for opptjening her!");return r.flatMap(({aktiviteter:i})=>i).forEach(i=>{if(!i)throw new Error("Må ha aktivitet i form values her!");const l={...i},o=e.aktiviteterValues?e.aktiviteterValues[He(i)].tom:void 0;o&&o!==l.tom&&(l.tom=o),I(o).isSame(I(s).subtract(1,"days"))||I(o).isAfter(I(s).subtract(1,"days"))?ud(t,l,s):ud(t,l,I(o).add(1,"days").format("YYYY-MM-DD"))}),t},kl=(e,n,r)=>{const t=n&&!yb(n)?fb(n):e;return r?t:!n||hi(t[0],n)||t.length===1?[t[0]]:[t[0],t[1]]},gk=(e,n)=>{if(!(e===void 0||n===void 0))for(let r=0;r<n.length;r+=1){const t=n[r].aktiviteter||[];for(let s=0;s<t.length;s+=1){const i=e.aktiviteterValues?e.aktiviteterValues[He(t[s])]:void 0;if((i==null?void 0:i.skalBrukes)==="true")return n[r].tom}}},bb=e=>!e||In(e)?"":I(e).format(te),gr=({readOnly:e,isAvklaringsbehovClosed:n,values:r,aktiviteterTomDatoMapping:t,erOverstyrt:s,harAvklaringsbehov:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fieldId:g})=>{const m=kl(t,r,s),p=gk(r,m);return u.jsxs(Q,{gap:"4",children:[u.jsx(T,{size:"small",children:u.jsx(k,{id:"AvklarAktivitetPanel.Overskrift.Skjaeringstidspunkt",values:{skjaeringstidspunkt:bb(p)}})}),m.map(y=>u.jsx(pb,{readOnly:e,isAvklaringsbehovClosed:n,aktiviteter:y.aktiviteter||[],erOverstyrt:s,harAvklaringsbehov:i,kodeverkSamling:l,tomDatoForAktivitetGruppe:y.tom,valgtSkjæringstidspunkt:p,ingenAktiviterErBrukt:p===void 0,arbeidsgiverOpplysningerPerId:o,fieldId:g},y.tom))]})};gr.harIngenAktiviteter=(e,n,r)=>{const t=kl(n,e,r);return hi(t[0],e)?!1:t.length>1&&t[1].aktiviteter&&t[1].aktiviteter.length>0?!hi(t[1],e):!0};const cb=(e,n)=>I(e).isSame(I(n))||I(e).isBefore(I(n));gr.transformValues=(e,n,r)=>{const t=kl(n,e,r),s=gk(e,t);if(!s)throw new Error("Finner ikke forventet skjæringstidspunkt, ugyldig tilstand");return t.flatMap(i=>ab(e,i.aktiviteter||[],s,i.tom))};const jb=e=>{if(e!==void 0)for(let n=0;n<e.length;n+=1){const r=e[n].aktiviteter||[];for(let t=0;t<r.length;t+=1)if(r[t].skalBrukes===!0||r[t].skalBrukes===null||r[t].skalBrukes===void 0)return e[n].tom}};gr.buildInitialValues=(e,n,r,t,s)=>{if(!e||e.length===0)return{};let i={};const l=jb(e);return e.forEach(o=>{i={...i,...ib(o.aktiviteter||[],n,r,t,cb(l,o.tom),s)}}),i};const hb="_avsnittOverskrift_h44z2_1",Ab={avsnittOverskrift:hb},{AVKLAR_AKTIVITETER:Yt,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:uk}=he,ml="begrunnelseAvklareAktiviteter",kk="manuellOverstyringBeregningAktiviteter",Ib=(e,n,r,t,s)=>{const i=Xe(Yt,e),l=Xe(uk,e),o=ok(e);let g;return n&&n.aktiviteterTomDatoMapping&&(g=gr.buildInitialValues(n.aktiviteterTomDatoMapping,r,l,i,t)),{[kk]:l,periode:s.periode,erTilVurdering:s.vurderesIBehandlingen&&!s.erForlengelse,avklaringsbehovListe:e,avklarAktiviteter:n,aktiviteterValues:g,...Br.buildInitialValues(o==null?void 0:o.begrunnelse,ml)}},kd=e=>{const n=e[kk],r=Wf(!!n,e.avklaringsbehovListe||[],e.erTilVurdering),{avklarAktiviteter:t}=e;return r?{beregningsaktivitetLagreDtoList:gr.transformValues(e,(t==null?void 0:t.aktiviteterTomDatoMapping)||[],!!n),periode:e.periode,begrunnelse:e[ml]}:null},Tb=(e,n,r,t,s)=>{if(!(r.length<1)&&gr.harIngenAktiviteter(e(`avklarAktiviteterForm.${n}`),r,t))return s.formatMessage({id:"VurderAktiviteterTabell.Validation.MåHaMinstEnAktivitet"})},Rb=({avklarAktiviteter:e,avklaringsbehovListe:n,erOverstyrer:r,readOnly:t,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:i,submittable:l,fieldId:o,updateOverstyring:g,submitDisabled:m})=>{var p,y;const f=W(),{resetField:b,watch:c,getValues:N,formState:{isSubmitting:h,errors:E,dirtyFields:R}}=Ie(),S=Object.keys(R).length>0,q=Xe(uk,n),B=!!N(`avklarAktiviteterForm.${o}`).manuellOverstyringBeregningAktiviteter,[w,_]=A.useState(q||B),H=ok(n),z=!!((y=(p=E.avklarAktiviteterForm)==null?void 0:p[o])!=null&&y.begrunnelseAvklareAktiviteter),O=J=>{J?_(!w):!J&&w&&_(!1),b(`avklarAktiviteterForm.${o}`,{keepDirty:!1}),b(`vurderAktiviteterSkjema.${o}`,{keepDirty:!1}),g(o,J)},L=n.filter(J=>J.definisjon===he.AVKLAR_AKTIVITETER||J.definisjon===he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER).filter(J=>Kf(J.status)).length===0,V=Tb(c,o,e.aktiviteterTomDatoMapping||[],B,f),U=`vurderAktiviteterSkjema.${o}`,re=ms(U,V);return!e.aktiviteterTomDatoMapping||e.aktiviteterTomDatoMapping.length<1?null:u.jsxs(Q,{gap:"1",children:[u.jsxs(Q,{gap:"6",children:[Xe(Yt,n)&&!L&&u.jsxs(Ee,{size:"small",variant:"warning",children:[u.jsx(se,{size:"xsmall",level:"3",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter"},"VurderFaktaForBeregningen")}),u.jsxs(Q,{gap:"2",children:[u.jsx(T,{size:"small",children:u.jsx(k,{id:"VurderAktiviteterTabell.FullAAPKombinert.Overskrift"})}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.AvklareAktiviteterField.HvordanGarJegFrem2"})})]})})]})]}),u.jsxs(C,{gap:"4",children:[u.jsx(F,{size:"small",className:Ab.avsnittOverskrift,"data-testid":"avklareAktiviteterHeading",children:u.jsx(k,{id:"AvklarAktivitetPanel.Overskrift"})}),(r||q)&&u.jsx(Ci,{onClick:()=>O(!0),erOverstyrt:w})]})]}),w&&u.jsx(F,{size:"small",children:u.jsx(k,{id:"AvklareAktiviteter.OverstyrerAktivitetAdvarsel"})}),e&&e.aktiviteterTomDatoMapping&&u.jsxs(Q,{gap:"4",children:[u.jsx(gr,{aktiviteterTomDatoMapping:e.aktiviteterTomDatoMapping,readOnly:t,isAvklaringsbehovClosed:L,erOverstyrt:w,kodeverkSamling:s,values:c(`avklarAktiviteterForm.${o}`),harAvklaringsbehov:Xe(Yt,n),arbeidsgiverOpplysningerPerId:i,fieldId:o}),re&&u.jsx(at,{children:re})]}),Zf(n,w)&&u.jsxs(Q,{gap:"6",children:[u.jsx(Br,{name:`avklarAktiviteterForm.${o}.${ml}`,isSubmittable:l,isReadOnly:t,hasBegrunnelse:!!(H!=null&&H.begrunnelse)}),u.jsx(qn,{ident:H==null?void 0:H.vurdertAv,date:H==null?void 0:H.vurdertTidspunkt}),(Xe(Yt,n)||w)&&u.jsx(u.Fragment,{children:u.jsxs(C,{gap:"4",children:[u.jsx(Bu,{text:f.formatMessage({id:w?"AvklarAktivitetPanel.OverstyrText":"AvklarAktivitetPanel.ButtonText"}),isSubmittable:Xf(l,!0,z),isDirty:S,isSubmitting:m,isReadOnly:t||L&&!S,hasErrors:z}),!!R&&S&&u.jsx(ae,{variant:"secondary",loading:h,disabled:h,onClick:()=>O(!1),size:"small",children:u.jsx(k,{id:"AvklareAktiviteter.Avbryt"})})]})})]})]})},{OVERSTYRING_AV_BEREGNINGSAKTIVITETER:mk,AVKLAR_AKTIVITETER:pk}=he,md="manuellOverstyringBeregningAktiviteter",Eb=(e,n)=>{const r=e.perioder.find(({periode:t})=>t.fom===n);if(!r)throw new Error(`Finner ikke vilkårsperiode med fom ${n}`);return r},Nb=(e,n)=>!Xe(pk,e)&&!Xe(mk,e)&&!n,Sb=e=>{const n=e[tt],r=n.filter(i=>i[md]).map(kd).filter(i=>i),t=n.filter(i=>!i[md]).map(kd).filter(i=>i),s=[];if(r.length>0){const i=r.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:mk,begrunnelse:i,grunnlag:r};s.push(l)}if(t.length>0){const i=t.map(o=>o==null?void 0:o.begrunnelse).reduce((o,g)=>o===""?g:`${o} ${g}`,""),l={kode:pk,begrunnelse:i,grunnlag:t};s.push(l)}return s},qb=(e,n,r,t)=>({[tt]:e.map(s=>{var i;return Ib(s.avklaringsbehov,(i=s.faktaOmBeregning)==null?void 0:i.avklarAktiviteter,n,r,Eb(t,s.vilkårsperiodeFom))})}),xb=(e,n)=>{var r;const t=(r=e[n].faktaOmBeregning)==null?void 0:r.avklarAktiviteter;if(!t)throw new Error("Mangler aktivteter å populere skjema med!");return t},Pb=({erOverstyrer:e,readOnly:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,submittable:s,submitCallback:i,beregningsgrunnlag:l,aktivtBeregningsgrunnlagIndeks:o,vilkår:g,setFormData:m,formData:p,setAvklarAktiviteterErEndret:y})=>{const f=Ce({defaultValues:p||qb(l,r,t,g)}),{formState:{dirtyFields:b,errors:c,isSubmitted:N},control:h,getValues:E,trigger:R,setValue:S}=f;A.useEffect(()=>{var O;(O=b.avklarAktiviteterForm)!=null&&O.some(L=>!!L)?y(!0):y(!1)},[b]),A.useEffect(()=>{var O;N&&(O=b.avklarAktiviteterForm)!=null&&O[o]&&R()},[o]);const q=l.flatMap(O=>O.avklaringsbehov),{fields:B}=nn({name:tt,control:h}),[w,_]=A.useState(!1),H=(O,L)=>{const V=E(`avklarAktiviteterForm.${O}`);S(`${tt}.${O}`,{...V,manuellOverstyringBeregningAktiviteter:L},{shouldDirty:!0})};if(Nb(q,e))return null;const z=O=>{Object.keys(c).length===0&&(_(!0),i(Sb(O)))};return u.jsx(ze,{formMethods:f,onSubmit:O=>z(O),setDataOnUnmount:m,children:B.map((O,L)=>o===L&&u.jsx(Rb,{aktivtBeregningsgrunnlagIndeks:o,fieldId:L,avklarAktiviteter:xb(l,L),avklaringsbehovListe:l[L].avklaringsbehov,erOverstyrer:e,readOnly:n,submittable:s,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,updateOverstyring:H,submitDisabled:w},O.id))})},Se=Y.createContext(0),vk=Y.createContext(0),pn=({name:e,readOnly:n,isAksjonspunktClosed:r,label:t})=>{const{resetField:s}=Ie();return A.useEffect(()=>()=>s(e),[]),u.jsx(ce,{name:e,htmlSize:8,parse:Oe,readOnly:n,isEdited:r,validate:n?[]:[X,rn(178956970)],label:t})};pn.buildInitialValues=(e,n)=>{var r;const t=(r=e==null?void 0:e.find(s=>s.aktivitetStatus===n))==null?void 0:r.fastsattBelop;if(t)return{fastsattBelop:t}};const Bb=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),Jr=({arbeidsgiver:e,readOnly:n,isAksjonspunktClosed:r,label:t,arbeidsgiverOpplysningerPerId:s})=>{var i,l;const{getValues:o}=Ie(),g=Y.useContext(Se),m=o(`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues`);if(!m)return null;const p=(i=e.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent,y=Bb(m,p),f=`vurderFaktaBeregningForm.${g}.arbeidstakerInntektValues.${y}.fastsattBelop`,b=p?(l=s[p])==null?void 0:l.navn:void 0;return u.jsx(pn,{name:f,readOnly:n,isAksjonspunktClosed:r,label:t||u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${b} (${p})`}})})};Jr.buildInitialValues=e=>{const n=[];return e==null||e.filter(r=>r.aktivitetStatus===ge.ARBEIDSTAKER&&r.arbeidsforhold).forEach(r=>{var t;const s={fastsattBelop:r.fastsattBelop,arbeidsgiverIdent:(t=r.arbeidsforhold)==null?void 0:t.arbeidsgiverIdent};n.push(s)}),n};const mn=e=>e==="true",Fb="_navetLink_15r5n_1",yk={navetLink:Fb},Ze="vurderbesteberegningField",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:_b}=he,ot=({readOnly:e,erOverstyrt:n})=>{const r=Y.useContext(Se),t=W(),s=e||n;return u.jsxs(C,{gap:"2",wrap:!1,children:[u.jsx(Ne,{label:u.jsx(k,{id:"BeregningInfoPanel.VurderBestebergning.HarBesteberegning"}),name:`vurderFaktaBeregningForm.${r}.${Ze}`,isReadOnly:s,validate:s?[]:[X],radios:[{value:"true",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:t.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:mn}),u.jsx("div",{children:u.jsx("a",{className:yk.navetLink,href:ak,target:"_blank",rel:"noopener noreferrer",children:u.jsx(k,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})})]})};ot.buildInitialValues=(e,n,r,t)=>r.includes(D.VURDER_BESTEBEREGNING)||r.includes(D.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)?n?e.find(s=>s.definisjon===_b)!==void 0||t?{[Ze]:!1}:{[Ze]:n.skalHaBesteberegning}:{}:{};const pd=e=>{if(!e)throw new Error("Påkrev verdi er undefined");return e};ot.transformValues=(e,n,r)=>{if(!n||!n.vurderBesteberegning)return{};if(!e[Ze]||!r)return{besteberegningAndeler:{besteberegningAndelListe:[]}};const t=r.filter(({nyAndel:i})=>i!==!0).map(i=>({andelsnr:i.andelsnr,nyAndel:!!i.nyAndel,lagtTilAvSaksbehandler:!!i.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:i.fastsattBelop,inntektskategori:pd(i.inntektskategori)}})),s=r.find(i=>i.nyAndel&&i.aktivitetStatus===ge.DAGPENGER);return{besteberegningAndeler:{besteberegningAndelListe:t,nyDagpengeAndel:s?{fastsatteVerdier:{fastsattBeløp:s.fastsattBelop,inntektskategori:pd(s.inntektskategori)}}:void 0}}};const Ob=e=>(n,r)=>{var t;const s=e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller:[];if(!(s.map(o=>o).includes(D.VURDER_BESTEBEREGNING)||s.map(o=>o).includes(D.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE)))return{};const i=ot.transformValues(n,e,r),l=[D.VURDER_BESTEBEREGNING];return(t=i.besteberegningAndeler)!=null&&t.besteberegningAndelListe&&i.besteberegningAndeler.besteberegningAndelListe.length>0&&l.push(D.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE),{faktaOmBeregningTilfeller:l,...i}},Db="_fadeinTabell_l1t64_1",wb={fadeinTabell:Db},Tr="manuellOverstyringRapportertInntekt",{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Vb,AVKLAR_AKTIVITETER:Mb}=he,Gb=(e,n)=>n.some(r=>r.definisjon===e),Lb=(e,n)=>e&&!n.some(r=>r.definisjon===Mb&&cs(r.status)),pl=({tabell:e,hjelpeTekstId:n=void 0,skalViseTabell:r=!0,readOnly:t,avklaringsbehov:s,updateOverstyring:i,erOverstyrer:l,erOverstyrt:o})=>{const[g,m]=A.useState(o),p=Y.useContext(Se),y=A.useMemo(()=>Lb(l,s),[l,s]),f=()=>{m(!g),i(p,!g)};return u.jsx("div",{className:wb.fadeinTabell,children:r&&u.jsxs(Q,{gap:"4",children:[u.jsxs(C,{gap:"4",children:[u.jsx(se,{level:"3",size:"xsmall",children:u.jsx(k,{id:"InntektstabellPanel.RapporterteInntekter"})}),(y||g)&&u.jsx(Ci,{onClick:f,erOverstyrt:t||g||Gb(Vb,s)})]}),n&&u.jsx(F,{size:"small",children:u.jsx(k,{id:n})}),e,g&&!t&&u.jsx(C,{children:u.jsx(ae,{size:"small",onClick:f,variant:"secondary",children:u.jsx(k,{id:"InntektstabellPanel.Avbryt"})})})]})})};pl.buildInitialValues=e=>({[Tr]:e});const fk=(e,n,r)=>{const t=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;return!r&&t?t.filter(s=>s.aktivitetStatus===ge.ARBEIDSTAKER).filter(s=>s.arbeidsforhold&&s.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId).filter(s=>s.arbeidsforhold&&s.arbeidsforhold.arbeidsforholdId).length>0:!1},Rr="lonnsendringField",gt=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HarSokerEndring"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.lonnsendringField`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],validate:[X],parse:mn})},Kb=e=>{const n=e.find(t=>t.lonnsendringIBeregningsperioden===!0)!==void 0,r=e.find(t=>t.lonnsendringIBeregningsperioden===!1)!==void 0;return n||(r?!1:void 0)};gt.buildInitialValues=e=>{const n={};if(!e||!e.beregningsgrunnlagPeriode)return n;const r=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;if(!r||r.length<1)return n;const t=r.filter(s=>s.aktivitetStatus===ge.ARBEIDSTAKER);return!t||t.length<1||(n[Rr]=Kb(t)),n};const $b=(e,n,r)=>!!r[Rr]&&!!n.arbeidsforholdMedLønnsendringUtenIM&&n.arbeidsforholdMedLønnsendringUtenIM.find(t=>t.andelsnr===e.andelsnr)!==void 0;gt.transformValues=(e,n)=>(n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(r=>r).includes(D.VURDER_LONNSENDRING)?{faktaOmBeregningTilfeller:[D.VURDER_LONNSENDRING],vurdertLonnsendring:{erLønnsendringIBeregningsperioden:!!e[Rr]}}:{};const An="NyoppstartetFLField",ut=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${An}`,validate:[X],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:mn})};ut.buildInitialValues=e=>{var n;const r={};if(e===void 0||e.beregningsgrunnlagPeriode===void 0)return r;const t=e.beregningsgrunnlagPeriode.map(s=>s.beregningsgrunnlagPrStatusOgAndel).flat().filter(s=>(s==null?void 0:s.aktivitetStatus)===ge.FRILANSER);return t.length>0&&(r[An]=(n=t[0])==null?void 0:n.erNyoppstartet),r};ut.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(D.VURDER_NYOPPSTARTET_FL))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}};const s=n.find(l=>l.aktivitetStatus===ge.FRILANSER);if(!s)return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}};if(s.andelsnr&&t.includes(s.andelsnr))return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL],vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}};s.andelsnr&&t.push(s.andelsnr);const i={fastsettMaanedsinntektFL:{maanedsinntekt:s.fastsattBelop}};return{faktaOmBeregningTilfeller:[D.VURDER_NYOPPSTARTET_FL,D.FASTSETT_MAANEDSINNTEKT_FL],...i,vurderNyoppstartetFL:{erNyoppstartetFL:!!e[An]}}};var vd={},Lr,yd;function tn(){if(yd)return Lr;yd=1;var e=function(n){return n&&n.Math===Math&&n};return Lr=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof sd=="object"&&sd)||e(typeof Lr=="object"&&Lr)||function(){return this}()||Function("return this")(),Lr}var Vs={},fd,bd;function Bn(){return bd||(bd=1,fd=function(e){try{return!!e()}catch{return!0}}),fd}var Ms,cd;function Kn(){if(cd)return Ms;cd=1;var e=Bn();return Ms=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Ms}var Gs,jd;function vl(){if(jd)return Gs;jd=1;var e=Bn();return Gs=!e(function(){var n=(function(){}).bind();return typeof n!="function"||n.hasOwnProperty("prototype")}),Gs}var Ls,hd;function yl(){if(hd)return Ls;hd=1;var e=vl(),n=Function.prototype.call;return Ls=e?n.bind(n):function(){return n.apply(n,arguments)},Ls}var Ks={},Ad;function Ub(){if(Ad)return Ks;Ad=1;var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!e.call({1:2},1);return Ks.f=r?function(t){var s=n(this,t);return!!s&&s.enumerable}:e,Ks}var Id,Td;function bk(){return Td||(Td=1,Id=function(e,n){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:n}}),Id}var $s,Rd;function sn(){if(Rd)return $s;Rd=1;var e=vl(),n=Function.prototype,r=n.call,t=e&&n.bind.bind(r,r);return $s=e?t:function(s){return function(){return r.apply(s,arguments)}},$s}var Us,Ed;function hs(){if(Ed)return Us;Ed=1;var e=sn(),n=e({}.toString),r=e("".slice);return Us=function(t){return r(n(t),8,-1)},Us}var Ys,Nd;function Yb(){if(Nd)return Ys;Nd=1;var e=sn(),n=Bn(),r=hs(),t=Object,s=e("".split);return Ys=n(function(){return!t("z").propertyIsEnumerable(0)})?function(i){return r(i)==="String"?s(i,""):t(i)}:t,Ys}var Sd,qd;function ck(){return qd||(qd=1,Sd=function(e){return e==null}),Sd}var Hs,xd;function jk(){if(xd)return Hs;xd=1;var e=ck(),n=TypeError;return Hs=function(r){if(e(r))throw new n("Can't call method on "+r);return r},Hs}var Cs,Pd;function As(){if(Pd)return Cs;Pd=1;var e=Yb(),n=jk();return Cs=function(r){return e(n(r))},Cs}var zs,Bd;function an(){if(Bd)return zs;Bd=1;var e=typeof document=="object"&&document.all;return zs=typeof e>"u"&&e!==void 0?function(n){return typeof n=="function"||n===e}:function(n){return typeof n=="function"},zs}var Js,Fd;function Fr(){if(Fd)return Js;Fd=1;var e=an();return Js=function(n){return typeof n=="object"?n!==null:e(n)},Js}var Ws,_d;function Is(){if(_d)return Ws;_d=1;var e=tn(),n=an(),r=function(t){return n(t)?t:void 0};return Ws=function(t,s){return arguments.length<2?r(e[t]):e[t]&&e[t][s]},Ws}var Zs,Od;function Hb(){if(Od)return Zs;Od=1;var e=sn();return Zs=e({}.isPrototypeOf),Zs}var Xs,Dd;function Cb(){if(Dd)return Xs;Dd=1;var e=tn(),n=e.navigator,r=n&&n.userAgent;return Xs=r?String(r):"",Xs}var Qs,wd;function zb(){if(wd)return Qs;wd=1;var e=tn(),n=Cb(),r=e.process,t=e.Deno,s=r&&r.versions||t&&t.version,i=s&&s.v8,l,o;return i&&(l=i.split("."),o=l[0]>0&&l[0]<4?1:+(l[0]+l[1])),!o&&n&&(l=n.match(/Edge\/(\d+)/),(!l||l[1]>=74)&&(l=n.match(/Chrome\/(\d+)/),l&&(o=+l[1]))),Qs=o,Qs}var ea,Vd;function hk(){if(Vd)return ea;Vd=1;var e=zb(),n=Bn(),r=tn(),t=r.String;return ea=!!Object.getOwnPropertySymbols&&!n(function(){var s=Symbol("symbol detection");return!t(s)||!(Object(s)instanceof Symbol)||!Symbol.sham&&e&&e<41}),ea}var na,Md;function Ak(){if(Md)return na;Md=1;var e=hk();return na=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",na}var ra,Gd;function Ik(){if(Gd)return ra;Gd=1;var e=Is(),n=an(),r=Hb(),t=Ak(),s=Object;return ra=t?function(i){return typeof i=="symbol"}:function(i){var l=e("Symbol");return n(l)&&r(l.prototype,s(i))},ra}var ta,Ld;function Jb(){if(Ld)return ta;Ld=1;var e=String;return ta=function(n){try{return e(n)}catch{return"Object"}},ta}var sa,Kd;function fl(){if(Kd)return sa;Kd=1;var e=an(),n=Jb(),r=TypeError;return sa=function(t){if(e(t))return t;throw new r(n(t)+" is not a function")},sa}var aa,$d;function Wb(){if($d)return aa;$d=1;var e=fl(),n=ck();return aa=function(r,t){var s=r[t];return n(s)?void 0:e(s)},aa}var ia,Ud;function Zb(){if(Ud)return ia;Ud=1;var e=yl(),n=an(),r=Fr(),t=TypeError;return ia=function(s,i){var l,o;if(i==="string"&&n(l=s.toString)&&!r(o=e(l,s))||n(l=s.valueOf)&&!r(o=e(l,s))||i!=="string"&&n(l=s.toString)&&!r(o=e(l,s)))return o;throw new t("Can't convert object to primitive value")},ia}var la={exports:{}},Yd,Hd;function Xb(){return Hd||(Hd=1,Yd=!1),Yd}var da,Cd;function bl(){if(Cd)return da;Cd=1;var e=tn(),n=Object.defineProperty;return da=function(r,t){try{n(e,r,{value:t,configurable:!0,writable:!0})}catch{e[r]=t}return t},da}var zd;function cl(){if(zd)return la.exports;zd=1;var e=Xb(),n=tn(),r=bl(),t="__core-js_shared__",s=la.exports=n[t]||r(t,{});return(s.versions||(s.versions=[])).push({version:"3.40.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),la.exports}var oa,Jd;function Tk(){if(Jd)return oa;Jd=1;var e=cl();return oa=function(n,r){return e[n]||(e[n]=r||{})},oa}var ga,Wd;function Rk(){if(Wd)return ga;Wd=1;var e=jk(),n=Object;return ga=function(r){return n(e(r))},ga}var ua,Zd;function ur(){if(Zd)return ua;Zd=1;var e=sn(),n=Rk(),r=e({}.hasOwnProperty);return ua=Object.hasOwn||function(t,s){return r(n(t),s)},ua}var ka,Xd;function Ek(){if(Xd)return ka;Xd=1;var e=sn(),n=0,r=Math.random(),t=e(1 .toString);return ka=function(s){return"Symbol("+(s===void 0?"":s)+")_"+t(++n+r,36)},ka}var ma,Qd;function kt(){if(Qd)return ma;Qd=1;var e=tn(),n=Tk(),r=ur(),t=Ek(),s=hk(),i=Ak(),l=e.Symbol,o=n("wks"),g=i?l.for||l:l&&l.withoutSetter||t;return ma=function(m){return r(o,m)||(o[m]=s&&r(l,m)?l[m]:g("Symbol."+m)),o[m]},ma}var pa,eo;function Qb(){if(eo)return pa;eo=1;var e=yl(),n=Fr(),r=Ik(),t=Wb(),s=Zb(),i=kt(),l=TypeError,o=i("toPrimitive");return pa=function(g,m){if(!n(g)||r(g))return g;var p=t(g,o),y;if(p){if(m===void 0&&(m="default"),y=e(p,g,m),!n(y)||r(y))return y;throw new l("Can't convert object to primitive value")}return m===void 0&&(m="number"),s(g,m)},pa}var va,no;function Nk(){if(no)return va;no=1;var e=Qb(),n=Ik();return va=function(r){var t=e(r,"string");return n(t)?t:t+""},va}var ya,ro;function Sk(){if(ro)return ya;ro=1;var e=tn(),n=Fr(),r=e.document,t=n(r)&&n(r.createElement);return ya=function(s){return t?r.createElement(s):{}},ya}var fa,to;function qk(){if(to)return fa;to=1;var e=Kn(),n=Bn(),r=Sk();return fa=!e&&!n(function(){return Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a!==7}),fa}var so;function xk(){if(so)return Vs;so=1;var e=Kn(),n=yl(),r=Ub(),t=bk(),s=As(),i=Nk(),l=ur(),o=qk(),g=Object.getOwnPropertyDescriptor;return Vs.f=e?g:function(m,p){if(m=s(m),p=i(p),o)try{return g(m,p)}catch{}if(l(m,p))return t(!n(r.f,m,p),m[p])},Vs}var ba={},ca,ao;function Pk(){if(ao)return ca;ao=1;var e=Kn(),n=Bn();return ca=e&&n(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),ca}var ja,io;function Ts(){if(io)return ja;io=1;var e=Fr(),n=String,r=TypeError;return ja=function(t){if(e(t))return t;throw new r(n(t)+" is not an object")},ja}var lo;function mt(){if(lo)return ba;lo=1;var e=Kn(),n=qk(),r=Pk(),t=Ts(),s=Nk(),i=TypeError,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,g="enumerable",m="configurable",p="writable";return ba.f=e?r?function(y,f,b){if(t(y),f=s(f),t(b),typeof y=="function"&&f==="prototype"&&"value"in b&&p in b&&!b[p]){var c=o(y,f);c&&c[p]&&(y[f]=b.value,b={configurable:m in b?b[m]:c[m],enumerable:g in b?b[g]:c[g],writable:!1})}return l(y,f,b)}:l:function(y,f,b){if(t(y),f=s(f),t(b),n)try{return l(y,f,b)}catch{}if("get"in b||"set"in b)throw new i("Accessors not supported");return"value"in b&&(y[f]=b.value),y},ba}var ha,oo;function Bk(){if(oo)return ha;oo=1;var e=Kn(),n=mt(),r=bk();return ha=e?function(t,s,i){return n.f(t,s,r(1,i))}:function(t,s,i){return t[s]=i,t},ha}var Aa={exports:{}},Ia,go;function ec(){if(go)return Ia;go=1;var e=Kn(),n=ur(),r=Function.prototype,t=e&&Object.getOwnPropertyDescriptor,s=n(r,"name"),i=s&&(function(){}).name==="something",l=s&&(!e||e&&t(r,"name").configurable);return Ia={EXISTS:s,PROPER:i,CONFIGURABLE:l},Ia}var Ta,uo;function Fk(){if(uo)return Ta;uo=1;var e=sn(),n=an(),r=cl(),t=e(Function.toString);return n(r.inspectSource)||(r.inspectSource=function(s){return t(s)}),Ta=r.inspectSource,Ta}var Ra,ko;function nc(){if(ko)return Ra;ko=1;var e=tn(),n=an(),r=e.WeakMap;return Ra=n(r)&&/native code/.test(String(r)),Ra}var Ea,mo;function _k(){if(mo)return Ea;mo=1;var e=Tk(),n=Ek(),r=e("keys");return Ea=function(t){return r[t]||(r[t]=n(t))},Ea}var po,vo;function jl(){return vo||(vo=1,po={}),po}var Na,yo;function rc(){if(yo)return Na;yo=1;var e=nc(),n=tn(),r=Fr(),t=Bk(),s=ur(),i=cl(),l=_k(),o=jl(),g="Object already initialized",m=n.TypeError,p=n.WeakMap,y,f,b,c=function(R){return b(R)?f(R):y(R,{})},N=function(R){return function(S){var q;if(!r(S)||(q=f(S)).type!==R)throw new m("Incompatible receiver, "+R+" required");return q}};if(e||i.state){var h=i.state||(i.state=new p);h.get=h.get,h.has=h.has,h.set=h.set,y=function(R,S){if(h.has(R))throw new m(g);return S.facade=R,h.set(R,S),S},f=function(R){return h.get(R)||{}},b=function(R){return h.has(R)}}else{var E=l("state");o[E]=!0,y=function(R,S){if(s(R,E))throw new m(g);return S.facade=R,t(R,E,S),S},f=function(R){return s(R,E)?R[E]:{}},b=function(R){return s(R,E)}}return Na={set:y,get:f,has:b,enforce:c,getterFor:N},Na}var fo;function tc(){if(fo)return Aa.exports;fo=1;var e=sn(),n=Bn(),r=an(),t=ur(),s=Kn(),i=ec().CONFIGURABLE,l=Fk(),o=rc(),g=o.enforce,m=o.get,p=String,y=Object.defineProperty,f=e("".slice),b=e("".replace),c=e([].join),N=s&&!n(function(){return y(function(){},"length",{value:8}).length!==8}),h=String(String).split("String"),E=Aa.exports=function(R,S,q){f(p(S),0,7)==="Symbol("&&(S="["+b(p(S),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),q&&q.getter&&(S="get "+S),q&&q.setter&&(S="set "+S),(!t(R,"name")||i&&R.name!==S)&&(s?y(R,"name",{value:S,configurable:!0}):R.name=S),N&&q&&t(q,"arity")&&R.length!==q.arity&&y(R,"length",{value:q.arity});try{q&&t(q,"constructor")&&q.constructor?s&&y(R,"prototype",{writable:!1}):R.prototype&&(R.prototype=void 0)}catch{}var B=g(R);return t(B,"source")||(B.source=c(h,typeof S=="string"?S:"")),R};return Function.prototype.toString=E(function(){return r(this)&&m(this).source||l(this)},"toString"),Aa.exports}var Sa,bo;function sc(){if(bo)return Sa;bo=1;var e=an(),n=mt(),r=tc(),t=bl();return Sa=function(s,i,l,o){o||(o={});var g=o.enumerable,m=o.name!==void 0?o.name:i;if(e(l)&&r(l,m,o),o.global)g?s[i]=l:t(i,l);else{try{o.unsafe?s[i]&&(g=!0):delete s[i]}catch{}g?s[i]=l:n.f(s,i,{value:l,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return s},Sa}var qa={},xa,co;function ac(){if(co)return xa;co=1;var e=Math.ceil,n=Math.floor;return xa=Math.trunc||function(r){var t=+r;return(t>0?n:e)(t)},xa}var Pa,jo;function Ok(){if(jo)return Pa;jo=1;var e=ac();return Pa=function(n){var r=+n;return r!==r||r===0?0:e(r)},Pa}var Ba,ho;function ic(){if(ho)return Ba;ho=1;var e=Ok(),n=Math.max,r=Math.min;return Ba=function(t,s){var i=e(t);return i<0?n(i+s,0):r(i,s)},Ba}var Fa,Ao;function lc(){if(Ao)return Fa;Ao=1;var e=Ok(),n=Math.min;return Fa=function(r){var t=e(r);return t>0?n(t,9007199254740991):0},Fa}var _a,Io;function hl(){if(Io)return _a;Io=1;var e=lc();return _a=function(n){return e(n.length)},_a}var Oa,To;function dc(){if(To)return Oa;To=1;var e=As(),n=ic(),r=hl(),t=function(s){return function(i,l,o){var g=e(i),m=r(g);if(m===0)return!s&&-1;var p=n(o,m),y;if(s&&l!==l){for(;m>p;)if(y=g[p++],y!==y)return!0}else for(;m>p;p++)if((s||p in g)&&g[p]===l)return s||p||0;return!s&&-1}};return Oa={includes:t(!0),indexOf:t(!1)},Oa}var Da,Ro;function Dk(){if(Ro)return Da;Ro=1;var e=sn(),n=ur(),r=As(),t=dc().indexOf,s=jl(),i=e([].push);return Da=function(l,o){var g=r(l),m=0,p=[],y;for(y in g)!n(s,y)&&n(g,y)&&i(p,y);for(;o.length>m;)n(g,y=o[m++])&&(~t(p,y)||i(p,y));return p},Da}var Eo,No;function Al(){return No||(No=1,Eo=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Eo}var So;function oc(){if(So)return qa;So=1;var e=Dk(),n=Al(),r=n.concat("length","prototype");return qa.f=Object.getOwnPropertyNames||function(t){return e(t,r)},qa}var qo={},xo;function gc(){return xo||(xo=1,qo.f=Object.getOwnPropertySymbols),qo}var wa,Po;function uc(){if(Po)return wa;Po=1;var e=Is(),n=sn(),r=oc(),t=gc(),s=Ts(),i=n([].concat);return wa=e("Reflect","ownKeys")||function(l){var o=r.f(s(l)),g=t.f;return g?i(o,g(l)):o},wa}var Va,Bo;function kc(){if(Bo)return Va;Bo=1;var e=ur(),n=uc(),r=xk(),t=mt();return Va=function(s,i,l){for(var o=n(i),g=t.f,m=r.f,p=0;p<o.length;p++){var y=o[p];!e(s,y)&&!(l&&e(l,y))&&g(s,y,m(i,y))}},Va}var Ma,Fo;function mc(){if(Fo)return Ma;Fo=1;var e=Bn(),n=an(),r=/#|\.prototype\./,t=function(g,m){var p=i[s(g)];return p===o?!0:p===l?!1:n(m)?e(m):!!m},s=t.normalize=function(g){return String(g).replace(r,".").toLowerCase()},i=t.data={},l=t.NATIVE="N",o=t.POLYFILL="P";return Ma=t,Ma}var Ga,_o;function pc(){if(_o)return Ga;_o=1;var e=tn(),n=xk().f,r=Bk(),t=sc(),s=bl(),i=kc(),l=mc();return Ga=function(o,g){var m=o.target,p=o.global,y=o.stat,f,b,c,N,h,E;if(p?b=e:y?b=e[m]||s(m,{}):b=e[m]&&e[m].prototype,b)for(c in g){if(h=g[c],o.dontCallGetSet?(E=n(b,c),N=E&&E.value):N=b[c],f=l(p?c:m+(y?".":"#")+c,o.forced),!f&&N!==void 0){if(typeof h==typeof N)continue;i(h,N)}(o.sham||N&&N.sham)&&r(h,"sham",!0),t(b,c,h,o)}},Ga}var La,Oo;function wk(){if(Oo)return La;Oo=1;var e=hs();return La=Array.isArray||function(n){return e(n)==="Array"},La}var Ka,Do;function vc(){if(Do)return Ka;Do=1;var e=TypeError,n=9007199254740991;return Ka=function(r){if(r>n)throw e("Maximum allowed index exceeded");return r},Ka}var $a,wo;function yc(){if(wo)return $a;wo=1;var e=hs(),n=sn();return $a=function(r){if(e(r)==="Function")return n(r)},$a}var Ua,Vo;function fc(){if(Vo)return Ua;Vo=1;var e=yc(),n=fl(),r=vl(),t=e(e.bind);return Ua=function(s,i){return n(s),i===void 0?s:r?t(s,i):function(){return s.apply(i,arguments)}},Ua}var Ya,Mo;function bc(){if(Mo)return Ya;Mo=1;var e=wk(),n=hl(),r=vc(),t=fc(),s=function(i,l,o,g,m,p,y,f){for(var b=m,c=0,N=y?t(y,f):!1,h,E;c<g;)c in o&&(h=N?N(o[c],c,l):o[c],p>0&&e(h)?(E=n(h),b=s(i,l,h,E,b,p-1)-1):(r(b+1),i[b]=h),b++),c++;return b};return Ya=s,Ya}var Ha,Go;function cc(){if(Go)return Ha;Go=1;var e=kt(),n=e("toStringTag"),r={};return r[n]="z",Ha=String(r)==="[object z]",Ha}var Ca,Lo;function jc(){if(Lo)return Ca;Lo=1;var e=cc(),n=an(),r=hs(),t=kt(),s=t("toStringTag"),i=Object,l=r(function(){return arguments}())==="Arguments",o=function(g,m){try{return g[m]}catch{}};return Ca=e?r:function(g){var m,p,y;return g===void 0?"Undefined":g===null?"Null":typeof(p=o(m=i(g),s))=="string"?p:l?r(m):(y=r(m))==="Object"&&n(m.callee)?"Arguments":y},Ca}var za,Ko;function hc(){if(Ko)return za;Ko=1;var e=sn(),n=Bn(),r=an(),t=jc(),s=Is(),i=Fk(),l=function(){},o=s("Reflect","construct"),g=/^\s*(?:class|function)\b/,m=e(g.exec),p=!g.test(l),y=function(b){if(!r(b))return!1;try{return o(l,[],b),!0}catch{return!1}},f=function(b){if(!r(b))return!1;switch(t(b)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!m(g,i(b))}catch{return!0}};return f.sham=!0,za=!o||n(function(){var b;return y(y.call)||!y(Object)||!y(function(){b=!0})||b})?f:y,za}var Ja,$o;function Ac(){if($o)return Ja;$o=1;var e=wk(),n=hc(),r=Fr(),t=kt(),s=t("species"),i=Array;return Ja=function(l){var o;return e(l)&&(o=l.constructor,n(o)&&(o===i||e(o.prototype))?o=void 0:r(o)&&(o=o[s],o===null&&(o=void 0))),o===void 0?i:o},Ja}var Wa,Uo;function Ic(){if(Uo)return Wa;Uo=1;var e=Ac();return Wa=function(n,r){return new(e(n))(r===0?0:r)},Wa}var Yo;function Tc(){if(Yo)return vd;Yo=1;var e=pc(),n=bc(),r=fl(),t=Rk(),s=hl(),i=Ic();return e({target:"Array",proto:!0},{flatMap:function(l){var o=t(this),g=s(o),m;return r(l),m=i(o,0),m.length=n(m,o,o,g,0,1,l,arguments.length>1?arguments[1]:void 0),m}}),vd}var Ho={},Za={},Xa,Co;function Rc(){if(Co)return Xa;Co=1;var e=Dk(),n=Al();return Xa=Object.keys||function(r){return e(r,n)},Xa}var zo;function Ec(){if(zo)return Za;zo=1;var e=Kn(),n=Pk(),r=mt(),t=Ts(),s=As(),i=Rc();return Za.f=e&&!n?Object.defineProperties:function(l,o){t(l);for(var g=s(o),m=i(o),p=m.length,y=0,f;p>y;)r.f(l,f=m[y++],g[f]);return l},Za}var Qa,Jo;function Nc(){if(Jo)return Qa;Jo=1;var e=Is();return Qa=e("document","documentElement"),Qa}var ei,Wo;function Sc(){if(Wo)return ei;Wo=1;var e=Ts(),n=Ec(),r=Al(),t=jl(),s=Nc(),i=Sk(),l=_k(),o=">",g="<",m="prototype",p="script",y=l("IE_PROTO"),f=function(){},b=function(R){return g+p+o+R+g+"/"+p+o},c=function(R){R.write(b("")),R.close();var S=R.parentWindow.Object;return R=null,S},N=function(){var R=i("iframe"),S="java"+p+":",q;return R.style.display="none",s.appendChild(R),R.src=String(S),q=R.contentWindow.document,q.open(),q.write(b("document.F=Object")),q.close(),q.F},h,E=function(){try{h=new ActiveXObject("htmlfile")}catch{}E=typeof document<"u"?document.domain&&h?c(h):N():c(h);for(var R=r.length;R--;)delete E[m][r[R]];return E()};return t[y]=!0,ei=Object.create||function(R,S){var q;return R!==null?(f[m]=e(R),q=new f,f[m]=null,q[y]=R):q=E(),S===void 0?q:n.f(q,S)},ei}var ni,Zo;function qc(){if(Zo)return ni;Zo=1;var e=kt(),n=Sc(),r=mt().f,t=e("unscopables"),s=Array.prototype;return s[t]===void 0&&r(s,t,{configurable:!0,value:n(null)}),ni=function(i){s[t][i]=!0},ni}var Xo;function xc(){if(Xo)return Ho;Xo=1;var e=qc();return e("flatMap"),Ho}var ri,Qo;function Pc(){if(Qo)return ri;Qo=1;var e=tn(),n=sn();return ri=function(r,t){return n(e[r].prototype[t])},ri}var ti,eg;function Bc(){if(eg)return ti;eg=1,Tc(),xc();var e=Pc();return ti=e("Array","flatMap"),ti}var si,ng;function Fc(){if(ng)return si;ng=1;var e=Bc();return si=e,si}var ai,rg;function _c(){if(rg)return ai;rg=1;var e=Fc();return ai=e,ai}var ii,tg;function Oc(){if(tg)return ii;tg=1;var e=_c();return ii=e,ii}var sg,ag;function Dc(){return ag||(ag=1,sg=Oc()),sg}Dc();const wn="vurderEtterlønnSluttpakke",pt=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HarSøkerInntekt"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"BeregningInfoPanel.EtterlønnSluttpakke.HvordanGarJegFrem1"})})]}),name:`vurderFaktaBeregningForm.${n}.${wn}`,validate:[X],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:mn})})};pt.buildInitialValues=(e,n)=>{var r,t,s;const i={};if(!e||!e.beregningsgrunnlagPeriode||!n)return{};const l=!cs(n.status),o=e.beregningsgrunnlagPeriode.flatMap(g=>g.beregningsgrunnlagPrStatusOgAndel).filter(g=>(g==null?void 0:g.arbeidsforhold)&&(g==null?void 0:g.arbeidsforhold.arbeidsforholdType)===or.ETTERLONN_SLUTTPAKKE);return o.length>0&&(i[wn]=l&&((r=o[0])!=null&&r.beregnetPrAar||((t=o[0])==null?void 0:t.beregnetPrAar)===0)?((s=o[0])==null?void 0:s.beregnetPrAar)>0:void 0),i};const wc=e=>{if(!e.andelerForFaktaOmBeregning)return;const n=e.andelerForFaktaOmBeregning.find(r=>r.arbeidsforhold&&r.arbeidsforhold.arbeidsforholdType&&r.arbeidsforhold.arbeidsforholdType===or.ETTERLONN_SLUTTPAKKE);return n?n.andelsnr:void 0};pt.transformValues=(e,n,r,t)=>{if(!(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).includes(D.VURDER_ETTERLONN_SLUTTPAKKE))return{};if(!n||n.length===0)return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[wn]}};const s=wc(r);if(!s)return{};const i=n.find(o=>o.andelsnr===s);if(!i)return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[wn]}};if(i.andelsnr&&t.includes(i.andelsnr))return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE],vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[wn]}};i.andelsnr&&t.push(i.andelsnr);const l={fastsettEtterlønnSluttpakke:{fastsattPrMnd:i.fastsattBelop}};return{faktaOmBeregningTilfeller:[D.VURDER_ETTERLONN_SLUTTPAKKE,D.FASTSETT_ETTERLONN_SLUTTPAKKE],...l,vurderEtterlønnSluttpakke:{erEtterlønnSluttpakke:!!e[wn]}}};const Vk="mottarYtelseField",Vc="_frilans",kr=e=>Vk+e.andelsnr,rr=()=>Vk+Vc,Mc=(e,n)=>(n&&n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).map(r=>e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[kr(r)]).find(r=>r)!==void 0,Mk=e=>e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[rr()]:void 0,Gk=(e,n,r)=>{var t;if(!n)return{};const s={};if((n.arbeidstakerAndelerUtenIM?n.arbeidstakerAndelerUtenIM:[]).forEach(l=>{const o=e.vurderMottarYtelseValues?e.vurderMottarYtelseValues[kr(l)]:void 0;l.andelsnr&&(s[l.andelsnr]=o)}),!r)return s;const i=(t=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:t.find(l=>l.aktivitetStatus===ge.FRILANSER);return i&&(s[i.andelsnr]=Mk(e)),s},Lk="inntektFieldArray",Gc=e=>e.inntektskategori&&e.inntektskategori!==js.UDEFINERT?e.inntektskategori:"",Lc=(e,n,r)=>{var t,s,i,l,o;const g=(t=e.arbeidsforhold)!=null&&t.arbeidsgiverIdent?n[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return g?Gn(g,(o=e.arbeidsforhold)==null?void 0:o.eksternArbeidsforholdId):(s=e.arbeidsforhold)!=null&&s.arbeidsforholdType?(i=r[un.OPPTJENING_AKTIVITET_TYPE].find(m=>{var p;return m.kode===((p=e.arbeidsforhold)==null?void 0:p.arbeidsforholdType)}))==null?void 0:i.navn:(l=r[un.AKTIVITET_STATUS].find(m=>m.kode===e.aktivitetStatus))==null?void 0:l.navn},Kk=(e,n,r)=>({andel:Lc(e,n,r)||"",aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,inntektskategori:Gc(e),lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0}),Kc=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,$c=(e,n)=>e?e.find(r=>r.andelsnr===n.andelsnr):void 0,Uc=(e,n)=>{const r=Kc(n.arbeidstakerOgFrilanserISammeOrganisasjonListe,e);return!!r&&(r.inntektPrMnd===null||r.inntektPrMnd===void 0)},Rs=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.ARBEIDSTAKER,Es=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.FRILANSER,$k=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.DAGPENGER,Uk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE,Yk=e=>!!e.aktivitetStatus&&e.aktivitetStatus===ge.MILITAER_ELLER_SIVIL,Yc=(e,n)=>n?Es(e)&&!!n[An]:!1,Hc=e=>!!e[Ze],Cc=(e,n,r)=>r.arbeidsforholdMedLønnsendringUtenIM&&$c(r.arbeidsforholdMedLønnsendringUtenIM,n)&&e[Rr],zc=(e,n,r)=>Rs(e)&&Cc(n,e,r),Jc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Es(e),Wc=(e,n)=>!!n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&Rs(e)&&Uc(e,n),Zc=(e,n,r,t)=>{if(!r.vurderMottarYtelse)return!1;const s=Gk(e,r.vurderMottarYtelse,t);return!!n.andelsnr&&!!s[n.andelsnr]},Xc=(e,n)=>e.arbeidsforholdType&&e.arbeidsforholdType===or.ETTERLONN_SLUTTPAKKE?!!n[wn]:!1,Hk=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.arbeidsforhold&&t.arbeidsforhold.arbeidsgiverIdent===e.arbeidsgiverId&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===gl.KUNSTIG))!==void 0},Qc=e=>!!e.faktaOmBeregningTilfeller&&e.faktaOmBeregningTilfeller.find(n=>n===D.FASTSETT_BG_KUN_YTELSE)!==void 0,ej=(e,n,r)=>t=>!!(Hc(e)||Zc(e,t,n,r)||zc(t,e,n)||Jc(t,n)||Wc(t,n)||Hk(t,r)||fk(t,r,t.arbeidsforholdId)||Xc(t,e)),nj=(e,n,r)=>t=>ej(e,n,r)(t)?!0:Yc(t,e),Tn=e=>!!e&&e[Tr]===!0,rj=e=>e&&e.some(n=>n.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),Ck=e=>Tn(e),ig=e=>e.erOverstyrtInntekt||rj(e.avklaringsbehov),zk=(e,n,r)=>t=>Qc(n)||nj(e,n,r)(t),tj=(e,n,r)=>t=>Tn(e)||zk(e,n,r)(t),Er=(e,n)=>r=>n.faktaOmBeregning?tj(e,n.faktaOmBeregning,n)(r):!1,sj=e=>n=>Hk(n,e),aj=e=>sj(e),Ai=(e,n,r)=>({...Kk(e,n,r),arbeidsforholdId:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdId:void 0,arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforhold?e.arbeidsforhold.arbeidsforholdType:void 0,aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,arbeidsgiverId:e.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent:void 0,skalKunneEndreAktivitet:e.skalKunneEndreAktivitet,fastsattBelop:e.fastsattBelop||e.fastsattBelop===0?G(e.fastsattBelop):"",belopReadOnly:e.belopReadOnly||e.belopReadOnly===0?G(e.belopReadOnly):"",refusjonskrav:e.refusjonskrav||e.refusjonskrav===0?G(e.refusjonskrav):""}),Ii=(e,n)=>e.findIndex(r=>r.arbeidsgiverIdent===n),es=(e,n)=>{var r;return(r=e==null?void 0:e.find(t=>t.arbeidsgiverIdent===n))==null?void 0:r.fastsattBelop},$n=e=>{if(!e.faktaOmBeregning)throw new Error("Mangler fakta om beregning, ugyldig tilstand");return e.faktaOmBeregning},Il=e=>{var n;return((n=$n(e))==null?void 0:n.faktaOmBeregningTilfeller)||[]},Wn=(e,n)=>n.some(r=>r.definisjon===e),Jk=e=>{const n=e.filter(r=>r.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||r.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG);return n.length===0?!1:n.some(r=>!cs(r.status))},ij=(e,n)=>e.andelsinfo===n.andelsinfo?e.inntektskategori===n.inntektskategori?0:e.inntektskategori>n.inntektskategori?1:-1:e.andelsinfo>n.andelsinfo?1:-1,lj=(e,n)=>{const{nyAndel:r,andel:t,inntektskategori:s,aktivitetStatus:i}=e,l="arbeidsforholdId"in e?e.arbeidsforholdId:void 0;if(r){if(!Number.isNaN(Number(t))){const o=n.filter(g=>g.andelsnr===parseFloat(t));if(o.length>0)return{andelsinfo:o[0].andel,inntektskategori:s}}return dt[t]?{andelsinfo:t,inntektskategori:s}:{andelsinfo:t,inntektskategori:s}}return rt[i]?{andelsinfo:rt[i],inntektskategori:s}:{andelsinfo:t,inntektskategori:s,arbeidsforholdId:l}},dj=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),oj=(e,n)=>n.andelsinfo===e.andelsinfo&&n.inntektskategori===e.inntektskategori&&e.arbeidsforholdId===n.arbeidsforholdId,Wk=(e,n,r)=>{const t=e.map(s=>n(s,e)).slice().sort((s,i)=>ij(s,i));for(let s=0;s<t.length-1;s+=1)if(oj(t[s],t[s+1]))return dj(r)},gj=(e,n)=>Wk(e,lj,n),uj=e=>e.formatMessage({id:"BeregningInfoPanel.Validation.MinstEnFastsatt"}),kj=(e,n)=>e.some(({fastsattBelop:r})=>r!==null&&r!==""&&r!==void 0)?null:uj(n),mj="_row_1hw01_1",pj="_slettIkon_1hw01_10",vj="_rightAlign_1hw01_13",yj="_addCircleIcon_1hw01_41",fj="_storBredde_1hw01_47",bj="_mediumBredde_1hw01_50",Dn={row:mj,slettIkon:pj,rightAlign:vj,addCircleIcon:yj,storBredde:fj,mediumBredde:bj},cj=(e,n)=>{var r;return{andel:(r=n[un.AKTIVITET_STATUS].find(t=>t.kode===e.filter(s=>s===ge.BRUKERS_ANDEL)[0]))==null?void 0:r.navn,fastsattBelop:"",inntektskategori:"",nyAndel:!0,lagtTilAvSaksbehandler:!0}},jj=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),hj=e=>{let n=0;return e.forEach(r=>{n+=r.fastsattBelop?ye(r.fastsattBelop):0}),n>0?G(n):""};function Aj(e,n,r){return(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r}const Ij=(e,n,r,t,s,i,l)=>e.map((o,g)=>u.jsxs(j.Row,{className:Dn.row,children:[u.jsx(j.DataCell,{children:u.jsx(T,{size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Ytelse"})})}),u.jsx(j.DataCell,{align:"right",className:Dn.rightAlign,children:u.jsx(ce,{name:`${i}.${g}.fastsattBelop`,className:Dn.mediumBredde,parse:Oe,readOnly:r,isEdited:n,validate:r?[]:[X,rn(178956970)],label:s.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:`ytelse ${g+1}`}),hideLabel:!0,size:"small"})}),u.jsx(j.DataCell,{align:"right",className:Dn.rightAlign,children:u.jsx(ps,{label:s.formatMessage({id:"BeregningInfoPanel.FordelingBG.InntektskategoriMedAndelnavn"},{andel:`ytelse ${g+1}`}),name:`${i}.${g}.inntektskategori`,className:Dn.storBredde,selectValues:jj(t),readOnly:r,validate:r?[]:[X],hideLabel:!0,size:"small"})}),u.jsx(j.DataCell,{align:"right",className:Dn.rightAlign,children:Aj(g,e,r)&&u.jsx(ae,{icon:u.jsx(Xn,{"aria-hidden":!0,className:Dn.slettIkon}),onClick:()=>l(g),type:"button",variant:"tertiary"})})]},o.id)),Tj=e=>u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{children:u.jsx(F,{as:"p",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),u.jsx(j.DataCell,{align:"right",children:u.jsx(ke,{children:e})}),u.jsx(j.DataCell,{}),u.jsx(j.DataCell,{})]},"bruttoBGSummaryRow"),Rj=()=>["BeregningInfoPanel.FordelingBG.Andel","BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"],Ej=e=>e[un.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),Nj=e=>{const{andel:n,inntektskategori:r}=e;return{andelsinfo:n,inntektskategori:r}},Sj=(e,n)=>{const r=e?Wk(e,Nj,n):void 0;if(r)return r},Zk=({name:e,readOnly:n,isAksjonspunktClosed:r,kodeverkSamling:t})=>{var s;const i=W(),{control:l}=Ie(),o=Y.useContext(Se),g=`${vn}.${o}.${e}`,{fields:m,append:p,remove:y}=nn({control:l,name:g}),f=(s=t[un.AKTIVITET_STATUS])==null?void 0:s.map(q=>q.kode),b=Ej(t),c=zr({name:g,control:l}),N=c?hj(c):"0",h=Ij(m,r,n,b,i,g,y);h.push(Tj(N));const E=Sj(c,i),R=`${g}.skjemagruppe`,S=ms(R,E);return u.jsxs(Q,{gap:"2",children:[u.jsxs(j,{size:"small",children:[u.jsx(j.Header,{children:u.jsxs(j.Row,{children:[Rj().map(q=>{const B=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(q);return u.jsx(j.HeaderCell,{scope:"col",align:B?"right":"left",children:u.jsx(F,{size:"small",as:"span",children:u.jsx(k,{id:q})})},q)}),u.jsx(j.HeaderCell,{})]})}),u.jsx(j.Body,{children:h})]}),!n&&u.jsx(C,{children:u.jsx(ae,{icon:u.jsx(Wi,{"aria-hidden":!0,className:Dn.addCircleIcon}),onClick:()=>p(cj(f,t)),type:"button",variant:"tertiary",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),S&&u.jsx(at,{children:S})]})},ns="besteberegningField",vt=({readOnly:e,isAksjonspunktClosed:n,brukersAndelFieldArrayName:r,skalViseInntektstabell:t=!0,kodeverkSamling:s})=>{const{getValues:i}=Ie(),l=Y.useContext(Se),o=i(`${vn}.${l}`),g=ns in o?o[ns]:void 0,m=W();return u.jsxs("div",{children:[u.jsx(Ne,{name:`vurderFaktaBeregningForm.${l}.besteberegningField`,isReadOnly:e,label:u.jsx(k,{id:"KunYtelsePanel.HarBesteberegning"}),radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:e?[]:[X],parse:mn,isHorizontal:!0}),g!=null&&u.jsx("div",{style:{marginTop:"10px"},children:u.jsx(Nu,{alignOffset:g?0:60,children:u.jsxs(Q,{gap:"4",children:[u.jsxs(C,{justify:"space-between",children:[u.jsx(F,{size:"small",children:u.jsx(k,{id:"KunYtelsePanel.OverskriftBesteberegning"})}),g&&u.jsx("a",{className:yk.navetLink,href:ak,target:"_blank",rel:"noopener noreferrer",children:u.jsx(k,{id:"BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet"})})]}),t&&u.jsx(Zk,{name:r,readOnly:e,isAksjonspunktClosed:n,kodeverkSamling:s})]})})})]})};vt.buildInitialValues=e=>({[ns]:e.erBesteberegning});vt.transformValues=e=>!!e[ns];const qj=({readOnly:e,brukersAndelFieldArrayName:n,kodeverkSamling:r,isAksjonspunktClosed:t})=>u.jsxs(Q,{gap:"4",children:[u.jsx(F,{size:"medium",children:u.jsx(k,{id:"KunYtelsePanel.RapporterteInntekter"})}),u.jsx(Zk,{name:n,readOnly:e,isAksjonspunktClosed:t,kodeverkSamling:r})]}),rs="brukersAndelBG",yt=({readOnly:e,faktaOmBeregning:n,isAksjonspunktClosed:r,skalViseInntektstabell:t=!0,kodeverkSamling:s})=>{const{kunYtelse:i}=n,l=i==null?void 0:i.fodendeKvinneMedDP;return u.jsxs("div",{children:[l&&u.jsx(vt,{readOnly:e,isAksjonspunktClosed:r,brukersAndelFieldArrayName:rs,skalViseInntektstabell:t,kodeverkSamling:s}),!l&&t&&u.jsx(qj,{readOnly:e,brukersAndelFieldArrayName:rs,isAksjonspunktClosed:r,kodeverkSamling:s})]})};yt.buildInitialValues=(e,n,r,t)=>{if(!e||!e.andeler||e.andeler.length===0)return{};const s=e.andeler.map(l=>{const o=n.find(m=>m.andelsnr===l.andelsnr);if(!o)throw new Error(`Finner ikke faktaAndel med andelsnr ${l.andelsnr}`);const g=l.fastsattBelopPrMnd!==null?G(l.fastsattBelopPrMnd):"";return{...Kk(o,r,t),fastsattBelop:g??""}}),i={[rs]:s};return e.fodendeKvinneMedDP?{...vt.buildInitialValues(e),...i}:i};yt.transformValues=(e,n)=>({kunYtelseFordeling:{andeler:e[rs].map(r=>({andelsnr:r.andelsnr,fastsattBeløp:ye(r.fastsattBelop),inntektskategori:r.inntektskategori,nyAndel:r.nyAndel,lagtTilAvSaksbehandler:r.lagtTilAvSaksbehandler})),skalBrukeBesteberegning:n.fodendeKvinneMedDP?vt.transformValues(e):null}});const{FASTSETT_BG_KUN_YTELSE:ts,VURDER_BESTEBEREGNING:xj}=D,Pj=(e,n,r,t,s,i,l)=>{n.includes(ts)&&e.push(u.jsxs(Q,{gap:"4",children:[u.jsx(yt,{readOnly:r,isAksjonspunktClosed:t,faktaOmBeregning:s,kodeverkSamling:i}),l()]},"FASTSETT_BG_KUN_YTELSE"))},Bj=(e,n,r)=>{if(r.includes(ts)&&n){const t=yt.transformValues(e,n),s=[ts];return n!=null&&n.fodendeKvinneMedDP&&s.push(xj),{faktaOmBeregningTilfeller:s,...t}}return{}},Fj=(e,n,r,t,s)=>n&&n.includes(ts)?yt.buildInitialValues(e,r,t,s):{},Tl="erSNNyIArbeidslivet",ft=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${Tl}`,validate:[X],isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:mn})})};ft.buildInitialValues=e=>{var n;const r={};if(!e||!e.beregningsgrunnlagPeriode)return r;const t=e.beregningsgrunnlagPeriode.map(s=>s.beregningsgrunnlagPrStatusOgAndel).flat().filter(s=>(s==null?void 0:s.aktivitetStatus)===ge.SELVSTENDIG_NAERINGSDRIVENDE);return t.length>0&&(r[Tl]=(n=t[0])==null?void 0:n.erNyIArbeidslivet),r};ft.transformValues=e=>({vurderNyIArbeidslivet:{erNyIArbeidslivet:!!e[Tl]}});const _j="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold",Rl=e=>e&&e.arbeidsforhold?`${e.arbeidsforhold.arbeidsgiverIdent}(${e.arbeidsforhold.arbeidsforholdId})(${e.andelsnr})`:"",lg=(e,n)=>{if(!e.arbeidsgiverIdent)throw new Error("Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand");const r=n[e.arbeidsgiverIdent];return Gn(r,e.eksternArbeidsforholdId)},Vt=e=>{if(!e)throw new Error("Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand");return e},bt=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=n.kortvarigeArbeidsforhold,s=Y.useContext(Se),i=W();return!t||t.length===0?null:u.jsx(Q,{gap:"6",children:t.map(l=>u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:_j,values:{navn:lg(Vt(l.arbeidsforhold),r),fom:I(Vt(l.arbeidsforhold).startdato).format(te),tom:I(Vt(l.arbeidsforhold).opphoersdato).format(te)}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${s}.tidsbegrensetValues.${Rl(l)}`,isReadOnly:e,radios:[{value:"true",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[X],parse:mn})},`fastsettTidsbegrensedeForhold_${lg(Vt(l.arbeidsforhold),r)}`))})};bt.buildInitialValues=e=>{const n={};return e&&e.forEach(r=>{r.erTidsbegrensetArbeidsforhold!==void 0&&(n[Rl(r)]=r.erTidsbegrensetArbeidsforhold)}),n};bt.transformValues=(e,n)=>{const r=[];return n.forEach(t=>{const s=Rl(t),i=!!e.tidsbegrensetValues&&e.tidsbegrensetValues[s];if(!t.andelsnr)throw new Error("Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand");const l={andelsnr:t.andelsnr,tidsbegrensetArbeidsforhold:i,opprinneligVerdi:t.erTidsbegrensetArbeidsforhold};r.push(l)}),{vurderTidsbegrensetArbeidsforhold:{fastsatteArbeidsforhold:r}}};const El="vurderMilitær",ct=({readOnly:e})=>{const n=Y.useContext(Se),r=W();return u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HarSøkerMilitærinntekt"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMilitaer.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${n}.${El}`,isReadOnly:e,radios:[{value:"true",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:r.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],validate:[X],parse:mn})})};ct.buildInitialValues=e=>{const n={};return!e||!e.vurderMilitaer||(n[El]=e.vurderMilitaer.harMilitaer),n};ct.transformValues=e=>({vurderMilitaer:{harMilitaer:!!e[El]}});const Oj=[D.VURDER_NYOPPSTARTET_FL,D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],Dj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForArbeid",wj=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:void 0;let i;return s?i=Gn(s,e.eksternArbeidsforholdId):i=e.arbeidsforholdType?(t=n[un.OPPTJENING_AKTIVITET_TYPE].find(l=>l.kode===e.arbeidsforholdType))==null?void 0:t.navn:"",u.jsx(k,{id:Dj(),values:{arbeid:i}})},Vj=(e,n,r,t,s,i)=>u.jsx("div",{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[e.arbeidsforhold&&wj(e.arbeidsforhold,r,t),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseArbeidsforhold.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${s}.vurderMottarYtelseValues.${kr(e)}`,isReadOnly:n,radios:[{value:"true",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:i.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:mn,validate:n?[]:[X]})}),Mj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilansUtenFrilans",Gj=()=>"BeregningInfoPanel.VurderMottarYtelse.MottarYtelseForFrilans",Lj=e=>e.some(n=>Oj.includes(n))?Mj():Gj(),Ti=e=>e==null?void 0:e.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),jt=({readOnly:e,beregningsgrunnlag:n,tilfeller:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s})=>{const i=Y.useContext(Se),l=n.faktaOmBeregning?n.faktaOmBeregning.vurderMottarYtelse:void 0,o=l&&l.erFrilans,g=l&&l.arbeidstakerAndelerUtenIM?l.arbeidstakerAndelerUtenIM:[],m=W();return u.jsxs(u.Fragment,{children:[o&&!Ti(r)&&u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:Lj(r)}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.Frilans.HvordanGarJegFrem2"})})]})})]}),name:`vurderFaktaBeregningForm.${i}.vurderMottarYtelseValues.${rr()}`,isReadOnly:e,radios:[{value:"true",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes"})},{value:"false",label:m.formatMessage({id:"BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt"})}],parse:mn,validate:e?[]:[X]}),u.jsx(Q,{gap:"6",children:g.map(p=>u.jsx(Y.Fragment,{children:Vj(p,e,t,s,i,m)},kr(p)))})]})},Kj=(e,n,r,t,s,i)=>{var l,o;if(n===null)return{};if(Mc(e,r.vurderMottarYtelse)){const g=[],m=Gk(e,r.vurderMottarYtelse,t);return(o=(l=r.vurderMottarYtelse)==null?void 0:l.arbeidstakerAndelerUtenIM)==null||o.forEach(p=>{var y;if(p.andelsnr&&m[p.andelsnr]&&!s.includes(p.andelsnr)){const f=(y=n.find(b=>b.andelsnr===p.andelsnr))==null?void 0:y.fastsattBelop;(f||f===0)&&(g.push({andelsnr:p.andelsnr,fastsattBeløp:ye(f)}),s.push(p.andelsnr))}}),g.length>0?(i.push(D.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING),{fastsattUtenInntektsmelding:{andelListe:g}}):{}}return{}},$j=(e,n,r,t,s)=>{var i;if(n===null)return{};if(e.vurderMottarYtelseValues&&e.vurderMottarYtelseValues[rr()]){const l=(i=r.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:i.find(o=>o.aktivitetStatus===ge.FRILANSER);if(l&&!t.includes(l.andelsnr)&&Mk(e)){const o=e.frilansInntektValues;if(!o&&o!==0)throw new Error("Har ikke fastsatt påkrevd frilansinntekt");return t.push(l.andelsnr),s.push(D.FASTSETT_MAANEDSINNTEKT_FL),{fastsettMaanedsinntektFL:{maanedsinntekt:ye(o.fastsattBelop)}}}return{}}return{}},Uj=e=>{if(!e)throw new Error("Mangler påkrevd verdi for vurderMottarYtelse");return e},Yj=(e,n,r)=>{var t;const s=(t=n.vurderMottarYtelse)!=null&&t.arbeidstakerAndelerUtenIM?n.vurderMottarYtelse.arbeidstakerAndelerUtenIM:[];return r.push(D.VURDER_MOTTAR_YTELSE),{mottarYtelse:{frilansMottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[rr()],arbeidstakerUtenIMMottarYtelse:s.map(i=>({andelsnr:Uj(i.andelsnr),mottarYtelse:!!e.vurderMottarYtelseValues&&!!e.vurderMottarYtelseValues[kr(i)]}))}}};jt.buildInitialValues=(e,n)=>{const r={};(e!=null&&e.erFrilans||Ti(n))&&(r[rr()]=Ti(n)?!0:e==null?void 0:e.frilansMottarYtelse);const t=e!=null&&e.arbeidstakerAndelerUtenIM?e.arbeidstakerAndelerUtenIM:[];return t.length<1||t.forEach(s=>{r[kr(s)]=s.mottarYtelse}),r};jt.transformValues=(e,n,r,t,s)=>{const i=[];return(r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[]).map(l=>l).includes(D.VURDER_MOTTAR_YTELSE)?{...Yj(e,r,i),...Kj(e,n,r,t,s,i),...$j(e,n,t,s,i),faktaOmBeregningTilfeller:i}:{}};const Hj="_aksjonspunktBoks_tufis_1",Cj={aksjonspunktBoks:Hj},zj=({children:e})=>u.jsx("div",{className:Cj.aksjonspunktBoks,children:e}),Jj="_slettIkon_1sqjy_1",Wj="_rightAlignInput_1sqjy_7",Zj="_readOnlyContainer_1sqjy_36",Xj="_readOnlyContent_1sqjy_39",Qj="_storBredde_1sqjy_44",eh="_mediumBredde_1sqjy_47",nh="_litenBredde_1sqjy_50",rh="_inntekt_1sqjy_53",th="_inntektNew_1sqjy_57",sh="_inntektOld_1sqjy_61",ah="_inntektOldStrikethrough_1sqjy_64",ih="_saksbehandlerIcon_1sqjy_72",De={slettIkon:Jj,rightAlignInput:Wj,readOnlyContainer:Zj,readOnlyContent:Xj,storBredde:Qj,mediumBredde:eh,litenBredde:nh,inntekt:rh,inntektNew:th,inntektOld:sh,inntektOldStrikethrough:ah,saksbehandlerIcon:ih},lh=(e,n)=>{const r=[];return r.push("BeregningInfoPanel.FordelingBG.Andel"),e&&r.push("BeregningInfoPanel.FordelingBG.Arbeidsperiode"),r.push("BeregningInfoPanel.FordelingBG.Fordeling"),n&&r.push("BeregningInfoPanel.FordelingBG.Refusjonskrav"),r.push("BeregningInfoPanel.FordelingBG.Inntektskategori"),r},dh=e=>e.map(n=>u.jsx("option",{value:n.kode,children:n.navn},n.kode)),oh=e=>e[un.INNTEKTSKATEGORI].slice().sort((n,r)=>n.navn.localeCompare(r.navn)),gh=()=>u.jsx(at,{size:"small",children:"Må fastsettes"}),uh=({field:e,skalVisePeriode:n,skalViseRefusjon:r,skalViseSletteknapp:t,readOnly:s,removeAndel:i,beregningsgrunnlag:l,kodeverkSamling:o,rowName:g,skalFastsetteInntektForAndel:m})=>{var p,y,f,b,c,N,h,E;const R=W(),{getValues:S}=Ie(),q=Y.useContext(Se),B=S(`vurderFaktaBeregningForm.${q}`),w=Es(e),_=$k(e),H=Uk(e),z=Yk(e),O=Rs(e),L=Er(B,l)(e),V=w&&L&&((p=B==null?void 0:B.frilansInntektValues)==null?void 0:p.fastsattBelop),U=O&&L&&e.arbeidsgiverId&&!!es(B==null?void 0:B.arbeidstakerInntektValues,e.arbeidsgiverId),re=_&&L&&((y=B==null?void 0:B.dagpengerInntektValues)==null?void 0:y.fastsattBelop),J=H&&L&&((f=B==null?void 0:B.selvstendigNæringsdrivendeInntektValues)==null?void 0:f.fastsattBelop),ie=z&&L&&((b=B==null?void 0:B.militærEllerSivilInntektValues)==null?void 0:b.fastsattBelop),Re=w&&L&&!((c=B==null?void 0:B.frilansInntektValues)!=null&&c.fastsattBelop)||O&&L&&e.arbeidsgiverId&&!es(B==null?void 0:B.arbeidstakerInntektValues,e.arbeidsgiverId)||_&&L&&!((N=B==null?void 0:B.dagpengerInntektValues)!=null&&N.fastsattBelop)||H&&L&&!((h=B==null?void 0:B.selvstendigNæringsdrivendeInntektValues)!=null&&h.fastsattBelop)||z&&L&&!((E=B==null?void 0:B.militærEllerSivilInntektValues)!=null&&E.fastsattBelop),Fe=V||U||re||J||ie,Je=Tn(B),We=aj(l)(e),Z=oh(o),ee=e.arbeidsperiodeFom||e.arbeidsperiodeTom,me=()=>U&&B.arbeidstakerInntektValues&&e.arbeidsgiverId?`vurderFaktaBeregningForm.${q}.arbeidstakerInntektValues.${Ii(B.arbeidstakerInntektValues,e.arbeidsgiverId)}.fastsattBelop`:V?`vurderFaktaBeregningForm.${q}.frilansInntektValues.fastsattBelop`:re?`vurderFaktaBeregningForm.${q}.dagpengerInntektValues.fastsattBelop`:J?`vurderFaktaBeregningForm.${q}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`:ie?`vurderFaktaBeregningForm.${q}.militærEllerSivilInntektValues.fastsattBelop`:"";return u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{children:u.jsx(ce,{size:"small",name:`${g}.andel`,className:De.storBredde,readOnly:!0})}),u.jsx(j.DataCell,{children:n&&ee&&e.arbeidsperiodeFom&&u.jsx(yv,{value:u.jsx(Ue,{size:"small",dateStringFom:e.arbeidsperiodeFom,dateStringTom:e.arbeidsperiodeTom})})}),!Je&&u.jsx(j.DataCell,{align:"right",children:u.jsxs("div",{className:De.inntekt,children:[u.jsx("div",{className:Fe?De.inntektOldStrikethrough:De.inntektOld,children:Re?gh():u.jsx(ce,{size:"small",name:`${g}.belopReadOnly`,className:De.mediumBredde,parse:Oe,readOnly:!0})}),Fe&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:De.inntektNew,children:u.jsx(ce,{size:"small",name:me(),className:De.mediumBredde,parse:Oe,readOnly:!0})}),u.jsx(dv,{title:"Endret av saksbehandler",className:De.saksbehandlerIcon})]})]})}),Je&&u.jsx(j.DataCell,{align:"right",className:De.rightAlignInput,children:u.jsx(ce,{size:"small",label:R.formatMessage({id:"BeregningInfoPanel.FordelingBG.FordelingMedAndelnavn"},{andel:e.andel}),name:`${g}.fastsattBelop`,parse:Oe,className:De.mediumBredde,validate:m(e)?[X,rn(178956970)]:[],hideLabel:!0})}),r&&u.jsx(j.DataCell,{align:"right",children:u.jsx(ce,{size:"small",name:`${g}.refusjonskrav`,className:De.litenBredde,readOnly:!0,parse:Oe})}),u.jsx(j.DataCell,{align:"right",children:u.jsx(ps,{label:R.formatMessage({id:"BeregningInfoPanel.FordelingBG.Inntektskategori"}),name:`${g}.inntektskategori`,className:De.storBredde,selectValues:dh(Z),validate:s?[]:[X],readOnly:s||!We,size:"small",hideLabel:!0})}),t&&u.jsx(j.DataCell,{children:u.jsx(ae,{icon:u.jsx(Xn,{"aria-hidden":!0,className:De.slettIkon}),onClick:()=>i(),type:"button",variant:"tertiary"})})]})},kh=(e,n,r)=>{let t=0;return e.forEach(s=>{var i,l,o,g,m,p;let y;if(Er(n,r)(s)){const f=Es(s),b=Rs(s),c=$k(s),N=Uk(s),h=Yk(s);s.fastsattBelop&&Tn(n)?y=s.fastsattBelop:f&&(i=n==null?void 0:n.frilansInntektValues)!=null&&i.fastsattBelop?y=n.frilansInntektValues.fastsattBelop:b&&s.arbeidsgiverId&&(o=(l=n==null?void 0:n.arbeidstakerInntektValues)==null?void 0:l[Ii(n.arbeidstakerInntektValues,s.arbeidsgiverId)])!=null&&o.fastsattBelop?y=n.arbeidstakerInntektValues[Ii(n.arbeidstakerInntektValues,s.arbeidsgiverId)].fastsattBelop:c&&(g=n==null?void 0:n.dagpengerInntektValues)!=null&&g.fastsattBelop?y=n.dagpengerInntektValues.fastsattBelop:N&&(m=n==null?void 0:n.selvstendigNæringsdrivendeInntektValues)!=null&&m.fastsattBelop?y=n.selvstendigNæringsdrivendeInntektValues.fastsattBelop:h&&(p=n==null?void 0:n.militærEllerSivilInntektValues)!=null&&p.fastsattBelop?y=n.militærEllerSivilInntektValues.fastsattBelop:s.fastsattBelop&&!Tn(n)?y=0:y=s.fastsattBelop}else y=s.belopReadOnly;t+=y?ye(y):0}),t>0?t:0},mh=({skalVisePeriode:e,skalViseRefusjon:n,readOnly:r,beregningsgrunnlag:t})=>{const{control:s,getValues:i}=Ie(),l=Y.useContext(Se),o=i(`vurderFaktaBeregningForm.${l}`),g=zr({control:s,name:`vurderFaktaBeregningForm.${l}.inntektFieldArray`}),m=g?kh(g,o,t):0;return u.jsxs(j.Row,{children:[u.jsx(j.DataCell,{children:u.jsx(F,{as:"p",size:"small",children:u.jsx(k,{id:"BeregningInfoPanel.FordelingBG.Sum"})})}),e&&u.jsx(j.DataCell,{}),u.jsx(j.DataCell,{align:"right",children:u.jsx("div",{className:De.readOnlyContainer,children:u.jsx(F,{as:"p","data-testid":"sum",className:r?De.readOnlyContent:"",size:"small",children:G(m)})})}),n&&u.jsx(j.DataCell,{}),u.jsx(j.DataCell,{})]})},Xk=(e,n)=>{var r;const t=(r=e.find(({kode:s})=>s===n))==null?void 0:r.navn;if(!t)throw new Error("Fant ikke aktivitetstatus med navn"+n);return t},ph=e=>({andel:Xk(e,ge.DAGPENGER),aktivitetStatus:ge.DAGPENGER,fastsattBelop:"",inntektskategori:js.DAGPENGER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),vh=e=>({andel:Xk(e,ge.MILITAER_ELLER_SIVIL),aktivitetStatus:ge.MILITAER_ELLER_SIVIL,fastsattBelop:"",inntektskategori:js.ARBEIDSTAKER,nyAndel:!0,skalKunneEndreAktivitet:!1,lagtTilAvSaksbehandler:!0}),yh=(e,n,r)=>n[e].skalKunneEndreAktivitet===!0&&!r,Ri=e=>{let n=!1;return e.forEach(r=>{r.refusjonskrav!==""&&r.refusjonskrav!==null&&r.refusjonskrav!==void 0&&(n=!0)}),n},Ei=e=>{let n=!1;return e.forEach(r=>{r.arbeidsgiverId!==""&&(n=!0)}),n},fh=(e,n)=>()=>{n(e)},bh=(e,n,r)=>u.jsx(mh,{readOnly:n,skalVisePeriode:Ei(e),skalViseRefusjon:Ri(e),beregningsgrunnlag:r},"summaryRow"),ch=(e,n)=>{let r=-1;return e.forEach((t,s)=>{t.aktivitetStatus===n&&(r=s)}),r},Qk=(e,n,r,t,s,i,l)=>{const o=ch(e,n);if(o!==-1){const g=e[o];t(g)&&i(o)}o===-1&&r&&l({...s})},dg=e=>e===ge.FRILANSER,og=e=>e===ge.ARBEIDSTAKER,gg=e=>e===ge.DAGPENGER,ug=e=>e===ge.SELVSTENDIG_NAERINGSDRIVENDE,kg=e=>e===ge.MILITAER_ELLER_SIVIL,jh=(e,n,r,t,s,i)=>{Qk(e,ge.DAGPENGER,n,l=>!n&&!t&&!!l.lagtTilAvSaksbehandler,ph(r),s,i)},hh=(e,n,r,t,s,i)=>{Qk(e,ge.MILITAER_ELLER_SIVIL,n===!0,()=>n===!1,vh(r),s,i)},Ah=(e,n)=>kj(e,n)??null,Ih=(e,n,r)=>{if(n&&n.length>0)return null;const t=e.inntektFieldArray;return t?gj(t,r)||(Tn(e)?Ah(t,r):null):void 0},ht=({readOnly:e,skalKunneLeggeTilDagpengerManuelt:n=!1,beregningsgrunnlag:r,kodeverkSamling:t})=>{var s,i;const{getValues:l,control:o,formState:g}=Ie(),{errors:m}=g,p=Y.useContext(Se),y=`vurderFaktaBeregningForm.${p}.inntektFieldArray`,{fields:f,remove:b,append:c,update:N}=nn({control:o,name:y}),h=zr({control:o,name:`vurderFaktaBeregningForm.${p}`}),E=zr({control:o,name:`vurderFaktaBeregningForm.${p}.vurderbesteberegningField`}),R=zr({control:o,name:`vurderFaktaBeregningForm.${p}.vurderMilitær`}),S=W(),q=A.useCallback(()=>Er(h,r),[h,r]);A.useEffect(()=>{const V=l(`vurderFaktaBeregningForm.${p}.inntektFieldArray`),U=t[un.AKTIVITET_STATUS];V&&(hh(V,!!R,U,q,b,c),jh(V,!!E,U,n,b,c))},[E,R,n]);const B=(V,U)=>{N(V,{...f[V],kanRedigereInntekt:U})};A.useEffect(()=>{f.forEach((V,U)=>{const re=V.kanRedigereInntekt,J=Er(h,r)(V);!(!E&&!n&&V.lagtTilAvSaksbehandler)&&re!==J&&B(U,J)})},[h]);const w=(i=(s=m==null?void 0:m.vurderFaktaBeregningForm)==null?void 0:s[p])==null?void 0:i.inntektFieldArray,_=Ih(h,w,S),H=`${y}.skjemagruppe`,z=ms(H,_??void 0),O=r.faktaOmBeregning;if(!O)return null;const L=f.map((V,U)=>u.jsx(uh,{field:V,skalVisePeriode:Ei(f),skalViseRefusjon:Ri(f),skalViseSletteknapp:yh(U,f,e),readOnly:e,removeAndel:fh(U,b),beregningsgrunnlag:r,kodeverkSamling:t,rowName:`${y}.${U}`,skalFastsetteInntektForAndel:zk(h,O,r)},V.id));return L.length===0?null:(L.push(bh(f,e,r)),u.jsxs(Q,{gap:"2",children:[u.jsxs(j,{size:"small",children:[u.jsx(j.Header,{children:u.jsx(j.Row,{children:lh(Ei(f),Ri(f)).map(V=>{const U=["BeregningInfoPanel.FordelingBG.Fordeling","BeregningInfoPanel.FordelingBG.Refusjonskrav","BeregningInfoPanel.FordelingBG.Inntektskategori"].includes(V);return u.jsx(j.HeaderCell,{scope:"col",align:U?"right":"left",children:u.jsx(F,{size:"small",as:"span",children:u.jsx(k,{id:V})})},V)})})}),u.jsx(j.Body,{children:L})]}),z&&u.jsx(at,{children:z})]}))};ht.transformValues=(e,n,r,t,s,i,l)=>{if(!e)return[];const o=g=>{const m=l&&g.fastsattBelop||dg(g.aktivitetStatus)&&(n==null?void 0:n.fastsattBelop)||og(g.aktivitetStatus)&&g.arbeidsgiverId&&es(r,g.arbeidsgiverId)||gg(g.aktivitetStatus)&&(t==null?void 0:t.fastsattBelop)||ug(g.aktivitetStatus)&&(s==null?void 0:s.fastsattBelop)||kg(g.aktivitetStatus)&&(i==null?void 0:i.fastsattBelop)||g.fastsattBelop;return{andelsnr:g.andelsnr,fastsattBelop:ye(m),inntektskategori:g.inntektskategori,nyAndel:g.nyAndel,lagtTilAvSaksbehandler:g.lagtTilAvSaksbehandler,aktivitetStatus:g.aktivitetStatus,arbeidsforholdId:g.arbeidsforholdId,arbeidsgiverId:g.arbeidsgiverId}};return e.filter(({kanRedigereInntekt:g})=>g).filter(({fastsattBelop:g,aktivitetStatus:m,arbeidsgiverId:p})=>g!==null&&g!==""||dg(m)&&(n==null?void 0:n.fastsattBelop)||og(m)&&p&&es(r,p)||gg(m)&&(t==null?void 0:t.fastsattBelop)||ug(m)&&(s==null?void 0:s.fastsattBelop)||kg(m)&&(i==null?void 0:i.fastsattBelop)).map(o)};ht.buildInitialValues=(e,n,r)=>!e||e.length===0?[]:e.map(t=>Ai(t,n,r));const{VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT:Th}=D,Rh="erKravGyldig_",Nl=e=>Rh+e,Eh=(e,n,r,t)=>e.map(s=>{const{arbeidsgiverIdent:i}=s,l=r[i],o=l?Gn(l):i,g=W();return u.jsx(Y.Fragment,{children:u.jsx(Ne,{label:u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"VurderRefusjonForm.ErRefusjonskravGyldig",values:{arbeidsgiverVisningsnavn:o}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsx(k,{id:"VurderRefusjonForm.ReadMore"})})]}),name:`vurderFaktaBeregningForm.${t}.vurderRefusjonValues.${Nl(i)}`,validate:[X],isReadOnly:n,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.FormAlternativ.Nei"})}],parse:mn})},i)}),At=({readOnly:e,faktaOmBeregning:n,arbeidsgiverOpplysningerPerId:r})=>{const t=Y.useContext(Se),s=n==null?void 0:n.refusjonskravSomKommerForSentListe;return s?u.jsx(u.Fragment,{children:Eh(s,e,r,t)}):null};At.transformValues=e=>n=>e.length===0?{}:{refusjonskravGyldighet:e.map(({arbeidsgiverIdent:r})=>({arbeidsgiverId:r,skalUtvideGyldighet:!!n.vurderRefusjonValues&&!!n.vurderRefusjonValues[Nl(r)]}))};At.buildInitialValues=(e,n)=>{const r={};return!e.includes(Th)||n.length===0?r:(n.forEach(({arbeidsgiverIdent:t,erRefusjonskravGyldig:s})=>{r[Nl(t)]=s}),{...r})};const Nh=(e,n)=>{var r;return((r=n.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)==null?void 0:r.find(t=>t.andelsnr===e.andelsnr&&t.arbeidsforhold&&t.arbeidsforhold.organisasjonstype&&t.arbeidsforhold.organisasjonstype===gl.KUNSTIG))!==void 0},mg=e=>{if(!e)throw new Error("Mangler andelsnr på arbeid uten inntektsmelding, ugyldig tilstand");return e},Sh=e=>{if(!e)throw new Error("Mangler inntektskategori på arbeid uten inntektsmelding, ugyldig tilstand");return e},qh=(e,n,r,t,s)=>{const i=r.faktaOmBeregningTilfeller?r.faktaOmBeregningTilfeller:[];if(!i.map(g=>g).includes(D.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING)&&!i.map(g=>g).includes(D.VURDER_LONNSENDRING))return{};if(!n)return{};const l=n.filter(g=>g.andelsnr&&!s.includes(g.andelsnr)).filter(g=>fk(g,t,g.arbeidsforholdId)||Nh(g,t)||$b(g,r,e));l.forEach(g=>s.push(mg(g.andelsnr)));const o=l.map(g=>({andelsnr:mg(g.andelsnr),fastsattBeløp:ye(g.fastsattBelop),inntektskategori:Sh(g.inntektskategori)}));return o.length>0?{faktaOmBeregningTilfeller:[D.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING],fastsattUtenInntektsmelding:{andelListe:o}}:{}},pg=e=>{if(e||e===0)return e;throw new Error("Verdi er ikke satt for atfl samme org.")},xh=(e,n,r)=>{var t;if((n.faktaOmBeregningTilfeller?n.faktaOmBeregningTilfeller:[]).map(s=>s).includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)&&e){const s=e.filter(i=>i.andelsnr&&!r.includes(i.andelsnr)).filter(i=>n.arbeidstakerOgFrilanserISammeOrganisasjonListe&&n.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({andelsnr:l})=>l).includes(i.andelsnr)).map(i=>({andelsnr:pg(i.andelsnr),arbeidsinntekt:i.fastsattBelop}));if((t=n.frilansAndel)!=null&&t.andelsnr&&!r.includes(n.frilansAndel.andelsnr)){const i=e.find(l=>{var o;return l.andelsnr===((o=n.frilansAndel)==null?void 0:o.andelsnr)});s.push({andelsnr:n.frilansAndel.andelsnr,arbeidsinntekt:pg(i==null?void 0:i.fastsattBelop)})}if(s.forEach(i=>r.push(i.andelsnr)),s.length>0)return{faktaOmBeregningTilfeller:[D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],vurderATogFLiSammeOrganisasjon:{vurderATogFLiSammeOrganisasjonAndelListe:s}}}return{faktaOmBeregningTilfeller:[]}},li=e=>e==null?void 0:e.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),vg=({beregningsgrunnlag:e,readOnly:n,isAksjonspunktClosed:r,tilfeller:t,arbeidsgiverOpplysningerPerId:s,kodeverkSamling:i})=>{var l,o,g,m,p,y,f,b,c;const{getValues:N}=Ie(),h=Y.useContext(Se),E=N(`vurderFaktaBeregningForm.${h}`),R=N([`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${rr()}`,`vurderFaktaBeregningForm.${h}.${An}`]),S=()=>{var Z;if(R.includes(!0))return!0;const ee=N([`vurderFaktaBeregningForm.${h}.${Ze}`]).includes(!0),me=(Z=e.faktaOmBeregning)==null?void 0:Z.andelerForFaktaOmBeregning.some(Te=>Te.aktivitetStatus===ge.FRILANSER);return ee&&me},q=()=>{var Z;const ee=(Z=e.faktaOmBeregning)==null?void 0:Z.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.SELVSTENDIG_NAERINGSDRIVENDE);return N([`vurderFaktaBeregningForm.${h}.${Ze}`]).includes(!0)&&ee},B=()=>{var Z;const ee=(Z=e.faktaOmBeregning)==null?void 0:Z.andelerForFaktaOmBeregning.some(me=>me.aktivitetStatus===ge.MILITAER_ELLER_SIVIL);return N([`vurderFaktaBeregningForm.${h}.${Ze}`]).includes(!0)&&ee},w=N([`vurderFaktaBeregningForm.${h}.${Rr}`,`vurderFaktaBeregningForm.${h}.${Ze}`]),_=w.includes(!0),H=N([`vurderFaktaBeregningForm.${h}.${wn}`]).includes(!0),z=(l=e.faktaOmBeregning)==null?void 0:l.arbeidstakerOgFrilanserISammeOrganisasjonListe,O=(m=(g=(o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.vurderMottarYtelse)==null?void 0:g.arbeidstakerAndelerUtenIM)==null?void 0:m.filter(Z=>{const ee=N(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues`);return ee==null?void 0:ee[kr(Z)]}),L=(y=(p=e.faktaOmBeregning)==null?void 0:p.andelerForFaktaOmBeregning.filter(Z=>Z.aktivitetStatus===ge.ARBEIDSTAKER))==null?void 0:y.filter(Z=>Er(E,e)(Ai(Z,s,i))),V=(f=li(t)&&_?z==null?void 0:z.filter(Z=>!(L!=null&&L.find(ee=>{var me,Te;return((me=ee.arbeidsforhold)==null?void 0:me.arbeidsgiverIdent)===((Te=Z.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent)}))):z)==null?void 0:f.filter(Z=>Er(E,e)(Ai({...Z,lagtTilAvSaksbehandler:!1},s,i))),U=N(`vurderFaktaBeregningForm.${h}.${Ze}`),re=`vurderFaktaBeregningForm.${h}.frilansInntektValues.fastsattBelop`,J=`vurderFaktaBeregningForm.${h}.dagpengerInntektValues.fastsattBelop`,ie=`vurderFaktaBeregningForm.${h}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`,Re=`vurderFaktaBeregningForm.${h}.militærEllerSivilInntektValues.fastsattBelop`,Fe=(c=(b=e==null?void 0:e.faktaOmBeregning)==null?void 0:b.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:c.some(Z=>!!Z.inntektPrMnd),Je=Z=>{var ee,me,Te,ln;const je=(ee=Z.arbeidsforhold)!=null&&ee.arbeidsgiverIdent?(me=s[Z.arbeidsforhold.arbeidsgiverIdent])==null?void 0:me.navn:void 0;return N(`vurderFaktaBeregningForm.${h}.${Rr}`)&&w.filter(_e=>_e===!0).length===1?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(Te=Z.arbeidsforhold)==null?void 0:Te.arbeidsgiverIdent})`}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"})})]})})]}):u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift",values:{bedrift:`${je} (${(ln=Z.arbeidsforhold)==null?void 0:ln.arbeidsgiverIdent})`}})},We=()=>{const Z=R.filter(Te=>Te===!0).length>1,ee=N([`vurderFaktaBeregningForm.${h}.${An}`]).includes(!0),me=N([`vurderFaktaBeregningForm.${h}.${Ze}`]).includes(!0);return li(t)||Z||me?u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}):N(`vurderFaktaBeregningForm.${h}.vurderMottarYtelseValues.${rr()}`)?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"})})]})})]}):ee?u.jsxs(u.Fragment,{children:[u.jsx(k,{id:"BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans"}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2",values:{br:u.jsx("br",{})}})})]})})]}):null};return u.jsxs(Q,{gap:"8",children:[li(t)&&u.jsxs(u.Fragment,{children:[u.jsxs(Q,{gap:"1",children:[u.jsx(F,{children:u.jsx(k,{id:Fe?"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans":"BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet"})}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:Fe?"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM":"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1",values:{br:u.jsx("br",{})}})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"})})]})})]}),V==null?void 0:V.map(Z=>{var ee;return u.jsx(Jr,{arbeidsgiver:Z,readOnly:n,isAksjonspunktClosed:r,arbeidsgiverOpplysningerPerId:s},(ee=Z.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)})]}),S()&&u.jsx(pn,{name:re,readOnly:n,isAksjonspunktClosed:r,label:We()}),_||H?L==null?void 0:L.filter(Z=>{var ee;return H&&!_?((ee=Z.arbeidsforhold)==null?void 0:ee.arbeidsforholdType)===or.ETTERLONN_SLUTTPAKKE:!0}).map(Z=>{var ee;return u.jsx(Jr,{arbeidsgiver:Z,readOnly:n,isAksjonspunktClosed:r,label:Je(Z),arbeidsgiverOpplysningerPerId:s},(ee=Z.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)}):O==null?void 0:O.map(Z=>{var ee;return u.jsx(Jr,{arbeidsgiver:Z,readOnly:n,isAksjonspunktClosed:r,label:Je(Z),arbeidsgiverOpplysningerPerId:s},(ee=Z.arbeidsforhold)==null?void 0:ee.arbeidsgiverIdent)}),U&&u.jsx(pn,{name:J,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger"})}),q()&&u.jsx(pn,{name:ie,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende"})}),B()&&u.jsx(pn,{name:Re,readOnly:n,isAksjonspunktClosed:r,label:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.MilitærEllerSivil"})})]})},Ph=e=>!e.includes(D.FASTSETT_BG_KUN_YTELSE),Bh=(e,n,r,t)=>u.jsx(ht,{readOnly:e,skalKunneLeggeTilDagpengerManuelt:t,beregningsgrunnlag:n,kodeverkSamling:r}),It=({readOnly:e,isAksjonspunktClosed:n,tilfeller:r,beregningsgrunnlag:t,avklaringsbehov:s,kodeverkSamling:i,erOverstyrer:l,updateOverstyring:o,renderTextFieldAndSubmitButton:g,arbeidsgiverOpplysningerPerId:m,vilkarsperiodeSkalVurderesIBehandlingen:p})=>{const{getValues:y}=Ie(),f=Y.useContext(Se),b=y(`vurderFaktaBeregningForm.${f}`),c=A.useMemo(()=>Ck(b),[b,t,s]),N=A.useMemo(()=>Ph(r),[r]),h=()=>{const E=[],R=[];let S=!1;const{faktaOmBeregning:q}=t;return!q||(r.includes(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)&&(S=!0,R.push(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),E.push(u.jsx(Y.Fragment,{children:u.jsx(bt,{readOnly:e,faktaOmBeregning:q,arbeidsgiverOpplysningerPerId:m})},D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD))),r.includes(D.VURDER_SN_NY_I_ARBEIDSLIVET)&&(S=!0,R.push(D.VURDER_SN_NY_I_ARBEIDSLIVET),E.push(u.jsx(Y.Fragment,{children:u.jsx(ft,{readOnly:e})},D.VURDER_SN_NY_I_ARBEIDSLIVET))),r.includes(D.VURDER_MILITÆR_SIVILTJENESTE)&&(S=!0,R.push(D.VURDER_MILITÆR_SIVILTJENESTE),E.push(u.jsx(Y.Fragment,{children:u.jsx(ct,{readOnly:e})},D.VURDER_MILITÆR_SIVILTJENESTE))),r.includes(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)&&(S=!0,R.push(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),E.push(u.jsx(Y.Fragment,{children:u.jsx(At,{readOnly:e,arbeidsgiverOpplysningerPerId:m,faktaOmBeregning:q})},D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT))),r.includes(D.VURDER_LONNSENDRING)&&(S=!0,R.push(D.VURDER_LONNSENDRING),E.push(u.jsx(Y.Fragment,{children:u.jsx(gt,{readOnly:e})},D.VURDER_LONNSENDRING))),r.includes(D.VURDER_ETTERLONN_SLUTTPAKKE)&&(S=!0,R.push(D.VURDER_ETTERLONN_SLUTTPAKKE),E.push(u.jsx(Y.Fragment,{children:u.jsx(pt,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e})},D.VURDER_ETTERLONN_SLUTTPAKKE))),r.includes(D.VURDER_NYOPPSTARTET_FL)&&(S=!0,R.push(D.VURDER_NYOPPSTARTET_FL),E.push(u.jsx(Y.Fragment,{children:u.jsx(ut,{readOnly:e})},D.VURDER_NYOPPSTARTET_FL))),r.includes(D.VURDER_BESTEBEREGNING)&&!r.includes(D.FASTSETT_BG_KUN_YTELSE)&&(S=!0,R.push(D.VURDER_BESTEBEREGNING),E.push(u.jsx(Y.Fragment,{children:u.jsx(ot,{readOnly:e,erOverstyrt:c})},D.VURDER_BESTEBEREGNING))),(r.includes(D.VURDER_MOTTAR_YTELSE)||r.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON))&&(S=!0,R.push(D.VURDER_MOTTAR_YTELSE),E.push(u.jsx(Y.Fragment,{children:u.jsx(jt,{readOnly:e,tilfeller:r,beregningsgrunnlag:t,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:m})},D.VURDER_MOTTAR_YTELSE))),!p)?null:S?e?u.jsxs(u.Fragment,{children:[E.map((B,w)=>u.jsx(Q,{gap:"8",children:B},R[w])),u.jsx(vg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:i}),g()]}):u.jsx(zj,{children:u.jsxs(Q,{gap:"4",children:[E.map((B,w)=>u.jsx(Q,{gap:"8",children:B},R[w])),!Tn(b)&&u.jsx(vg,{beregningsgrunnlag:t,isAksjonspunktClosed:n,readOnly:e,tilfeller:r,arbeidsgiverOpplysningerPerId:m,kodeverkSamling:i}),g()]})}):Tn(b)?g():null};return u.jsxs(Q,{gap:"8",children:[u.jsx(pl,{tabell:Bh(e,t,i,c),skalViseTabell:N,readOnly:e,erOverstyrer:l,avklaringsbehov:s,updateOverstyring:o,erOverstyrt:c},"inntektstabell"),h()]})};It.buildInitialValues=(e,n,r,t)=>{if(!e)return{};const s=e.andelerForFaktaOmBeregning;return s.length===0?{}:{[Lk]:ht.buildInitialValues(s,r,t),...pl.buildInitialValues(n)}};const Yn=(e,n)=>{var r;return{...e,...n,faktaOmBeregningTilfeller:n.faktaOmBeregningTilfeller?(r=e.faktaOmBeregningTilfeller)==null?void 0:r.concat(n.faktaOmBeregningTilfeller):e.faktaOmBeregningTilfeller}},Fh=e=>{if(!e)throw new Error("Forventer andelsnr");return e},_h=(e,n,r,t)=>{if(Tn(e)){const s=r.filter(i=>!t.includes(Fh(i.andelsnr))).filter(i=>i.fastsattBelop!=null).map(i=>({andelsnr:i.andelsnr,nyAndel:!!i.nyAndel,aktivitetStatus:i.aktivitetStatus,lagtTilAvSaksbehandler:i.lagtTilAvSaksbehandler,fastsatteVerdier:{fastsattBeløp:i.fastsattBelop,inntektskategori:i.inntektskategori}}));return{fakta:n,overstyrteAndeler:s}}return{fakta:n}},Oh=(e,n,r,t,s)=>{const i=t.faktaOmBeregningTilfeller?t.faktaOmBeregningTilfeller.map(o=>o):[];let l={faktaOmBeregningTilfeller:[]};if(i.length>0){l=Yn(l,Ob(t)(e,n));const o=e[Ze]===!0;l=Yn(l,ut.transformValues(e,o?null:n,t,r)),l=Yn(l,pt.transformValues(e,o?null:n,t,r)),l=Yn(l,gt.transformValues(e,t)),l=Yn(l,jt.transformValues(e,o?null:n,t,s,r)),l=Yn(l,xh(o?null:n,t,r)),l=Yn(l,qh(e,o?null:n,t,s,r))}return l};It.transformValues=(e,n)=>r=>{const t=ht.transformValues(r[Lk],r.frilansInntektValues,r.arbeidstakerInntektValues,r.dagpengerInntektValues,r.selvstendigNæringsdrivendeInntektValues,r.militærEllerSivilInntektValues,!!r.manuellOverstyringRapportertInntekt),s=[],i=Oh(r,t,s,e,n);return _h(r,i,t,s)};const{VURDER_FAKTA_FOR_ATFL_SN:Dh}=he,yg=e=>{var n;return((n=$n(e))==null?void 0:n.kortvarigeArbeidsforhold)||[]},fg=e=>{var n;return((n=$n(e))==null?void 0:n.kunYtelse)||void 0},bg=e=>{var n;return((n=$n(e))==null?void 0:n.vurderMottarYtelse)||void 0},wh=e=>{var n;return((n=$n(e))==null?void 0:n.vurderBesteberegning)||void 0},Vh=e=>{var n;return((n=$n(e))==null?void 0:n.refusjonskravSomKommerForSentListe)||[]},Mh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>{const{avklaringsbehov:m}=r,p=Il(r),y=$n(r),f=[];return Pj(f,p,e,n,y,t,o),f.push(u.jsx(Y.Fragment,{children:u.jsx(It,{readOnly:e,isAksjonspunktClosed:n,tilfeller:p,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,avklaringsbehov:m,updateOverstyring:l,renderTextFieldAndSubmitButton:o,arbeidsgiverOpplysningerPerId:i,vilkarsperiodeSkalVurderesIBehandlingen:g})},"VurderOgFastsettATFL")),f},Gh=({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g})=>u.jsx("div",{children:Mh({readOnly:e,isAksjonspunktClosed:n,beregningsgrunnlag:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,updateOverstyring:l,renderTextFieldAndSubmitButton:o,vilkarsperiodeSkalVurderesIBehandlingen:g}).map(m=>m)}),Lh=(e,n)=>r=>Bj(r,e.kunYtelse,n),Kh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(D.VURDER_SN_NY_I_ARBEIDSLIVET),{...e,...ft.transformValues(n)}},$h=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD),{...n,...bt.transformValues(r,e)}},Uh=(e,n)=>{if(!e.faktaOmBeregningTilfeller)throw new Error("Har ikke definert en liste med tilfeller, ugyldig tilstand");return e.faktaOmBeregningTilfeller.push(D.VURDER_MILITÆR_SIVILTJENESTE),{...e,...ct.transformValues(n)}},Yh=e=>(n,r)=>{if(!n.faktaOmBeregningTilfeller||!e.refusjonskravSomKommerForSentListe)throw new Error("Mangler tilfelle eller andeler, ugyldig tilstand");return n.faktaOmBeregningTilfeller.push(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),{...n,...At.transformValues(e.refusjonskravSomKommerForSentListe)(r)}},Hh=(e,n,r,t,s)=>(i,l)=>{let o={...i};return e.forEach(g=>{g===D.VURDER_SN_NY_I_ARBEIDSLIVET&&(o=n(o,l)),g===D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD&&(o=r(o,l)),g===D.VURDER_MILITÆR_SIVILTJENESTE&&(o=t(o,l)),g===D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT&&(o=s(o,l))}),o},Ch=(e,n,r)=>t=>e.includes(D.FASTSETT_BG_KUN_YTELSE)?{fakta:n(t)}:{...r(t)},zh=(e,n,r,t,s)=>{const i=Ch(e,Lh(t,e),It.transformValues(t,s))(n);return{fakta:Hh(e,Kh,$h(r),Uh,Yh(t))(i.fakta,n),overstyrteAndeler:i.overstyrteAndeler}},Jh=e=>{const{tilfeller:n,kortvarigeArbeidsforhold:r,faktaOmBeregning:t,beregningsgrunnlag:s}=e;return zh(n,e,r,t,s)},Wh=e=>e?e.find(n=>n.definisjon===Dh):void 0,Zh=(e,n,r)=>{const t=Il(e),s=$n(e);return{beregningsgrunnlag:e,tilfeller:t,faktaOmBeregning:s,kortvarigeArbeidsforhold:yg(e),vurderMottarYtelse:bg(e),kunYtelse:fg(e),tidsbegrensetValues:bt.buildInitialValues(yg(e)),vurderMottarYtelseValues:jt.buildInitialValues(bg(e),t),arbeidstakerInntektValues:Jr.buildInitialValues(s.andelerForFaktaOmBeregning),frilansInntektValues:pn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.FRILANSER),dagpengerInntektValues:pn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.DAGPENGER),selvstendigNæringsdrivendeInntektValues:pn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.SELVSTENDIG_NAERINGSDRIVENDE),militærEllerSivilInntektValues:pn.buildInitialValues(s.andelerForFaktaOmBeregning,ge.MILITAER_ELLER_SIVIL),vurderRefusjonValues:At.buildInitialValues(t,Vh(e)),...ct.buildInitialValues(s),...ft.buildInitialValues(e),...gt.buildInitialValues(e),...ut.buildInitialValues(e),...pt.buildInitialValues(e,Wh(e.avklaringsbehov)),...ot.buildInitialValues(e.avklaringsbehov,wh(e),t,ig(e)),...It.buildInitialValues(s,ig(e),r,n),...Fj(fg(e),t,s.andelerForFaktaOmBeregning,r,n)}},{VURDER_FAKTA_FOR_ATFL_SN:Ni,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:Si}=he,ss=(e,n)=>n.some(r=>r.definisjon===e&&r.kanLoses),Xh=(e,n)=>e||ss(Ni,n),cg=(e,n)=>{const r=e[Tr];if(n&&!r&&ss(Si,e.avklaringsbehov||[]))return{periode:e.periode,avbrutt:!0,begrunnelse:void 0};if(!Xh(!!r,e.avklaringsbehov||[]))throw new Error("Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle");return{...Jh(e),begrunnelse:e.begrunnelseFaktaTilfeller,periode:e.periode}},Qh=(e,n=!0)=>{const r=e[vn],t=r.filter(l=>l.erTilVurdering).filter(l=>l[Tr]||ss(Si,l.avklaringsbehov||[])).map(l=>cg(l,!0)).filter(l=>l),s=r.filter(l=>l.erTilVurdering).filter(l=>(!l[Tr]||n)&&ss(Ni,l.avklaringsbehov||[])).map(l=>cg(l,!1)).filter(l=>l),i=[];if(t.length>0){const l=t.filter(({begrunnelse:g})=>g!==null).map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Si,begrunnelse:l!==""?l:null,grunnlag:t};i.push(o)}if(s.length>0){const l=s.map(({begrunnelse:g})=>g).reduce((g,m)=>g===""?m:`${g} ${m}`,""),o={kode:Ni,begrunnelse:l,grunnlag:s};i.push(o)}return i},{OVERSTYRING_AV_BEREGNINGSGRUNNLAG:em,VURDER_FAKTA_FOR_ATFL_SN:qi}=he,nm="begrunnelseFaktaTilfeller",eA=(e,n,r)=>e&&n&&!r,nA=(e,n)=>Wn(qi,n)||Wn(em,n)?!e:!0,jg=(e,n)=>{const r=n(`${vn}.${e}`);return Ck(r)},hg=(e,n)=>{var r,t;return!!((t=(r=n.vurderFaktaBeregningForm)==null?void 0:r[e])!=null&&t.begrunnelseFaktaTilfeller)},rA=({beregningsgrunnlag:e,erOverstyrer:n,readOnly:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,submittable:i,updateOverstyring:l,vilkarsperiode:o,verdiForAvklarAktivitetErEndret:g,submitDisabled:m})=>{const{getValues:p,formState:{errors:y,isDirty:f}}=Ie(),b=Y.useContext(vk),c=Y.useContext(Se),N=c===b,{avklaringsbehov:h}=e,E=h.find(q=>q.definisjon===he.VURDER_FAKTA_FOR_ATFL_SN||q.definisjon===he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG),R=o.vurderesIBehandlingen,S=()=>u.jsx(u.Fragment,{children:(Wn(qi,h)||Wn(em,h)||jg(c,p))&&u.jsxs(Q,{gap:"6",children:[(Wn(qi,h)||jg(c,p))&&u.jsxs(u.Fragment,{children:[u.jsx(Br,{name:`${vn}.${c}.${nm}`,isSubmittable:i,isReadOnly:r||!R,hasBegrunnelse:!!(E!=null&&E.begrunnelse)}),u.jsx(qn,{ident:E==null?void 0:E.vurdertAv,date:E==null?void 0:E.vurdertTidspunkt})]}),u.jsx(C,{children:u.jsx(Bu,{isSubmittable:eA(i&&nA(g,h),!0,hg(c,y))&&!g,isReadOnly:r||!R,isDirty:f,isSubmitting:m,hasErrors:hg(c,y)})})]})});return u.jsx("div",{style:{display:N?"block":"none"},children:u.jsx(Gh,{readOnly:r||!R,isAksjonspunktClosed:Jk(h),beregningsgrunnlag:e,kodeverkSamling:t,erOverstyrer:n,arbeidsgiverOpplysningerPerId:s,updateOverstyring:l,renderTextFieldAndSubmitButton:()=>S(),vilkarsperiodeSkalVurderesIBehandlingen:R})},c)},{VURDER_FAKTA_FOR_ATFL_SN:rm,AVKLAR_AKTIVITETER:tA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:as,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:sA}=he,aA=e=>e.some(n=>n.definisjon===as)?e.find(n=>n.definisjon===as&&n.begrunnelse!==null):e.find(n=>n.definisjon===rm&&n.begrunnelse!==null),Ag=(e,n)=>n.some(r=>r.definisjon===e&&cs(r.status)),iA=(e,n,r,t)=>({[vn]:e.map(s=>{var i;const l=t.perioder.find(o=>o.periode.fom===s.vilkårsperiodeFom);if(!l)throw new Error(`Finner ikke vilkårsperiode med fom ${s.vilkårsperiodeFom}`);return{avklaringsbehov:s.avklaringsbehov,erTilVurdering:l.vurderesIBehandlingen&&!l.erForlengelse,periode:l.periode,...Br.buildInitialValues((i=aA(s.avklaringsbehov))==null?void 0:i.begrunnelse,nm),...Zh(s,n,r)}})}),lA=[rm,as],dA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},oA=({beregningsgrunnlag:e,submittable:n,readOnly:r,kodeverkSamling:t,erOverstyrer:s,arbeidsgiverOpplysningerPerId:i,aktivtBeregningsgrunnlagIndeks:l,submitCallback:o,setFormData:g,formData:m,vilkar:p,avklarAktiviteterErEndret:y,skalKunneAvbryteOverstyring:f})=>{const b=y,c=e.flatMap(re=>re.avklaringsbehov),N=Ce({defaultValues:m||iA(e,t,i,p)}),{control:h,formState:E,trigger:R,getValues:S,watch:q}=N,{fields:B,update:w}=nn({name:vn,control:h}),{errors:_,isSubmitted:H}=E,[z,O]=A.useState(!1),L=q(vn);A.useEffect(()=>{H&&R()},[JSON.stringify(L)]);const V=(re,J)=>{const ie=S(`${vn}.${re}`);w(re,{...ie,[Tr]:J})},U=re=>{Object.keys(_).length===0?(O(!0),o(Qh(re,f))):console.error(_)};return Ag(tA,c)||Ag(sA,c)?null:u.jsx(vk.Provider,{value:l,children:u.jsx(ze,{formMethods:N,onSubmit:re=>{U(re)},setDataOnUnmount:g,children:B.map((re,J)=>{const ie=Z=>lA.some(ee=>ee===Z.definisjon),Re=Z=>Z.kanLoses,Fe=c.filter(Z=>ie(Z)&&Re(Z)),Je=r||dA(e[J],p.perioder)||Xe(as,c)&&!s||Fe.length===0&&!s,We=p.perioder.find(Z=>Z.periode.fom===e[J].vilkårsperiodeFom);if(!We)throw new Error(`Filler ikke vilkårsperiode med fom ${e[J].vilkårsperiodeFom}`);return u.jsx(Se.Provider,{value:J,children:u.jsx(rA,{vilkarsperiode:We,beregningsgrunnlag:e[J],erOverstyrer:s,readOnly:Je,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:i,submittable:n,updateOverstyring:V,submitDisabled:z,verdiForAvklarAktivitetErEndret:b},re.id)},re.id)})})})},{VURDER_FAKTA_FOR_ATFL_SN:gA,OVERSTYRING_AV_BEREGNINGSAKTIVITETER:tm,AVKLAR_AKTIVITETER:uA}=he,kA=[tm,uA],mA=({readOnly:e,avklaringsbehov:n,submittable:r,submitCallback:t,aktivtBeregningsgrunnlagIndeks:s,beregningsgrunnlag:i,erOverstyrer:l,skalKunneOverstyreAktiviteter:o,kodeverkSamling:g,arbeidsgiverOpplysningerPerId:m,setFormData:p,formData:y,vilkar:f,skalKunneAvbryteOverstyring:b})=>{const c=n.filter(R=>kA.some(S=>S===R.definisjon)&&R.kanLoses),N=e||(c.length===0||Xe(tm,n))&&!l,[h,E]=A.useState(!1);return u.jsxs(Q,{gap:Xe(gA,n)?"0":"2",children:[u.jsx("div",{children:u.jsx(Pb,{readOnly:N,submitCallback:t,submittable:r,erOverstyrer:l&&o,kodeverkSamling:g,aktivtBeregningsgrunnlagIndeks:s,beregningsgrunnlag:i,arbeidsgiverOpplysningerPerId:m,setFormData:p,formData:y&&tt in y?y:void 0,vilkår:f,setAvklarAktiviteterErEndret:E})}),u.jsx(oA,{submitCallback:t,submittable:r,kodeverkSamling:g,beregningsgrunnlag:i,erOverstyrer:l,readOnly:e,arbeidsgiverOpplysningerPerId:m,aktivtBeregningsgrunnlagIndeks:s,setFormData:p,formData:y&&vn in y?y:void 0,vilkar:f,avklarAktiviteterErEndret:h,skalKunneAvbryteOverstyring:b})]})},pA="_tabsContainer_1yyvp_1",vA="_main_1yyvp_9",Ig={tabsContainer:pA,main:vA},yA=Ke(lk),{VURDER_FAKTA_FOR_ATFL_SN:sm,AVKLAR_AKTIVITETER:fA,OVERSTYRING_AV_BEREGNINGSGRUNNLAG:bA}=he,cA=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.vilkårsperiodeFom);return(r==null?void 0:r.erForlengelse)===!0},jA=(e,n)=>{const r=e.vilkårsperiodeFom,t=n.find(({periode:s})=>s.fom===r);if(t){const{fom:s,tom:i}=t.periode;return i!==null?`${I(s).format(te)} - ${I(i).format(te)}`:`${I(s).format(te)} - `}return`${I(r).format(te)}`},hA=e=>{if(e){const n=e.some(t=>t.definisjon===sm&&t.kanLoses),r=e.some(t=>t.definisjon===fA&&t.kanLoses);return n||r}return!1},di=(e,n)=>{const r=n.find(({periode:t})=>t.fom===e.skjaeringstidspunktBeregning);return hA(e.avklaringsbehov)&&(r==null?void 0:r.vurderesIBehandlingen)&&!r.erForlengelse},AA=(e,n)=>{var r,t,s,i,l,o;const g=Il(e),m=!!((t=(r=e==null?void 0:e.faktaOmBeregning)==null?void 0:r.vurderMottarYtelse)!=null&&t.erFrilans),p=[],y=[];if(g.includes(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)){const f=(i=(s=e==null?void 0:e.faktaOmBeregning)==null?void 0:s.arbeidstakerOgFrilanserISammeOrganisasjonListe)==null?void 0:i.some(b=>!!b.inntektPrMnd);y.push(D.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:f?"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrg":"BeregningInfoPanel.VurderFaktaBeregningField.ATFLSammeOrgUtenIM",values:{h3:(...b)=>u.jsx(se,{size:"xsmall",level:"3",children:b})}})}))}if(g.includes(D.VURDER_LONNSENDRING)&&(y.push(D.VURDER_LONNSENDRING),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderLonnsendringHelpText",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),m&&g.includes(D.VURDER_MOTTAR_YTELSE)&&(y.push(`${D.VURDER_MOTTAR_YTELSE}_frilans`),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextFrilans",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),!m&&g.includes(D.VURDER_MOTTAR_YTELSE)&&(y.push(`${D.VURDER_MOTTAR_YTELSE}_arbeidstaker`),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMottarYtelseHelpTextArbeidstaker",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),g.includes(D.VURDER_ETTERLONN_SLUTTPAKKE)&&(y.push(D.VURDER_ETTERLONN_SLUTTPAKKE),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderEtterlonnSluttpakkeHelpText",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),g.includes(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)){y.push(D.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);const f=((l=e==null?void 0:e.faktaOmBeregning)==null?void 0:l.kortvarigeArbeidsforhold)||[];let b="";f.forEach((c,N)=>{var h;const E=(h=c.arbeidsforhold)==null?void 0:h.arbeidsgiverIdent;if(!E)throw new Error("Må ha arbeidsgiverIdent på kortvarige andeler");const R=n[E],S=R?Gn(R):E;N===0?b=S:b=`${b}, ${S}`}),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.TidsbegrensetArbeidsforholdHelpText",values:{arbeidsgiverVisningsnavn:b,h3:(...c)=>u.jsx(se,{size:"xsmall",level:"3",children:c})}})}))}if(g.includes(D.VURDER_MILITÆR_SIVILTJENESTE)&&(y.push(D.VURDER_MILITÆR_SIVILTJENESTE),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderMilitaerSiviltjenesteHelpText",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),g.includes(D.FASTSETT_BG_KUN_YTELSE)&&(y.push(D.FASTSETT_BG_KUN_YTELSE),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsxs(Q,{gap:"1",children:[u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelseHelpText",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvordanGarJegFremForFastsetteManedsinntekt"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt3"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt4"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt5"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt6"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvordanGarJegFremForFastsetteManedsinntekt7"})})]})}),u.jsx(xe,{size:"small",header:u.jsx(k,{id:"BeregningInfoPanel.InntektInputFields.HvaBetyrInntektskategori"}),children:u.jsxs(ne,{size:"small",children:[u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori1"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori2"})}),u.jsx(ne.Item,{children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.FastsettBGKunYtelse.HvaBetyrInntektskategori3"})})]})})]})}))),g.includes(D.VURDER_NYOPPSTARTET_FL)&&(y.push(D.VURDER_NYOPPSTARTET_FL),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderNyoppstartetFLHelpText",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),g.includes(D.VURDER_SN_NY_I_ARBEIDSLIVET)&&(y.push(D.VURDER_SN_NY_I_ARBEIDSLIVET),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderSNNyIArbeidslivetHelpText",values:{h3:(...f)=>u.jsx(se,{size:"xsmall",level:"3",children:f})}})}))),g.includes(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)){const f=((o=e==null?void 0:e.faktaOmBeregning)==null?void 0:o.refusjonskravSomKommerForSentListe)||[];let b="";f.forEach((c,N)=>{const{arbeidsgiverIdent:h}=c,E=n[h],R=E?Gn(E):h;N===0?b=R:b=`${b}, ${R}`}),y.push(D.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT),p.push(u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.VurderFaktaBeregningField.VurderRefusjonskravKommetForSentHelpText",values:{arbeidsgiverVisningsnavn:b,h3:(...c)=>u.jsx(se,{size:"xsmall",level:"3",children:c})}})}))}return p.length>0?u.jsx(Q,{gap:"4",children:p.map((f,b)=>u.jsx(Y.Fragment,{children:f},y[b]))}):u.jsx(Ee,{size:"small",variant:"warning",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning"},"VurderFaktaForBeregningen")})},IA=({beregningsgrunnlag:e=[],kodeverkSamling:n,submitCallback:r,readOnly:t,submittable:s,erOverstyrer:i,skalKunneOverstyreAktiviteter:l=!0,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkar:p,skalKunneAvbryteOverstyring:y=!1})=>{const[f,b]=A.useState(0),c=p==null?void 0:p.perioder;if(A.useEffect(()=>{if(c){const R=e==null?void 0:e.findIndex(S=>di(S,c));R>-1&&b(R)}},[]),e.length===0||!p)return u.jsx(u.Fragment,{children:"Har ikke beregningsgrunnlag."});const N=e.length>1,h=e[f],E=h.avklaringsbehov;return u.jsx(Ge,{value:yA,children:u.jsx("div",{className:Ig.main,children:u.jsxs(Q,{gap:"4",children:[u.jsx(se,{size:"small",level:"2",children:u.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning"})}),(Wn(sm,E)||Wn(bA,E))&&!Jk(E)&&u.jsx(u.Fragment,{children:AA(h,o)}),N&&u.jsx("div",{className:Ig.tabsContainer,children:u.jsx(cr,{value:f.toString(),onChange:R=>b(Number(R)),children:u.jsx(cr.List,{children:e.map((R,S)=>u.jsx(cr.Tab,{value:S.toString(),label:jA(R,c),className:di(R,c)?"harAksjonspunkt":"",icon:di(R,c)&&u.jsx(xr,{width:20,height:20,color:"Orange"})},R.skjaeringstidspunktBeregning))})})}),u.jsx(mA,{aktivtBeregningsgrunnlagIndeks:f,beregningsgrunnlag:e,kodeverkSamling:n,avklaringsbehov:E,submitCallback:r,readOnly:t||cA(e[f],c),submittable:s,erOverstyrer:i,skalKunneOverstyreAktiviteter:l,arbeidsgiverOpplysningerPerId:o,setFormData:m,formData:g,vilkar:p,skalKunneAvbryteOverstyring:y})]})})})},TA=[de.VURDER_FAKTA_FOR_ATFL_SN,de.AVKLAR_AKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],RA=[de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG],EA=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),{behandling:r,rettigheter:t}=A.use(Pn),s=lr(TA,RA),i=xn(r),{data:l,isFetching:o}=Sn(i.beregningsgrunnlagOptions(r));return a.jsx(dr,{standardPanelProps:s,faktaPanelKode:ir.BEREGNING,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Beregning"}),skalPanelVisesIMeny:Vu(r,"BEREGNINGSGRUNNLAG"),children:o?a.jsx(Nn,{}):a.jsx(NA,{kodeverkSamling:s.alleKodeverk,vilkar:PA(r==null?void 0:r.vilkår,l),beregningsgrunnlag:BA(l),submitCallback:qA(s.submitCallback),arbeidsgiverOpplysningerPerId:e,erOverstyrer:t.kanOverstyreAccess.isEnabled,skalKunneOverstyreAktiviteter:!0,readOnly:s.readOnly,submittable:s.submittable})})},NA=e=>{const{formData:n,setFormData:r}=Ln();return a.jsx(IA,{...e,formData:n,setFormData:r})},SA=e=>{switch(e){case he.AVKLAR_AKTIVITETER:return de.AVKLAR_AKTIVITETER;case he.OVERSTYRING_AV_BEREGNINGSAKTIVITETER:return de.OVERSTYRING_AV_BEREGNINGSAKTIVITETER;case he.VURDER_FAKTA_FOR_ATFL_SN:return de.VURDER_FAKTA_FOR_ATFL_SN;case he.OVERSTYRING_AV_BEREGNINGSGRUNNLAG:return de.OVERSTYRING_AV_BEREGNINGSGRUNNLAG;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},qA=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:SA(s.kode),...s.grunnlag[0]}));return e(t)},xA=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),PA=(e,n)=>{if(!e)return null;const r=e.find(s=>s.vilkarType&&s.vilkarType===nr.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[xA(n,r)]}},BA=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];EA.__docgenInfo={description:"",methods:[],displayName:"BeregningFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Le=(e=>(e.FORDEL_BEREGNINGSGRUNNLAG="FORDEL_BG",e.VURDER_REFUSJON_BERGRUNN="VURDER_REFUSJONSKRAV",e.VURDER_NYTT_INNTKTSFRHLD="VURDER_NYTT_INNTKTSFRHLD",e))(Le||{});function am(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function FA(){if(Rg)return Kr;Rg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return Kr.Fragment=n,Kr.jsx=r,Kr.jsxs=r,Kr}var Eg;function _A(){return Eg||(Eg=1,Tg.exports=FA()),Tg.exports}var v=_A();function Tt(e,n){const r=e.find(t=>t.periode.fom===n);if(!r)throw Error(`Mangler vilkårsperiode for vilkårsperiodeFom ${n}`);return r}function mr(e,n){return Tt(e,n).vurderesIBehandlingen}var Nr=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(Nr||{}),xi=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(xi||{}),pe=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(pe||{});const Sl=e=>e==="OPPR";var st=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(st||{}),Rt=(e=>(e.ARBEIDSTAKER="ARBEIDSTAKER",e.FRILANSER="FRILANSER",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.DAGPENGER="DAGPENGER",e.ARBEIDSAVKLARINGSPENGER="ARBEIDSAVKLARINGSPENGER",e.SJØMANN="SJØMANN",e.DAGMAMMA="DAGMAMMA",e.JORDBRUKER="JORDBRUKER",e.FISKER="FISKER",e.ARBEIDSTAKER_UTEN_FERIEPENGER="ARBEIDSTAKER_UTEN_FERIEPENGER",e.UDEFINERT="-",e))(Rt||{});const OA=["SELVSTENDIG_NÆRINGSDRIVENDE","JORDBRUKER","DAGMAMMA","FISKER"],DA=e=>OA.some(n=>n===e),wA="_begrunnelseTextField_1wq9u_1",VA="_explanationTextarea_1wq9u_4",MA="_explanationTextareaReadOnly_1wq9u_7",oi={begrunnelseTextField:wA,explanationTextarea:VA,explanationTextareaReadOnly:MA},ql={"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse":"Endring i søkt ytelse for {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon":"Nytt refusjonskrav hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering":"Søkt gradering hos {arbeidsforhold}. ","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon":"Permisjon avsluttet hos {arbeidsforhold}","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp":"Fastsett årsbeløp for ny fordeling av beregningsgrunnlaget.","BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet":"<b>Tilkommet aktivitet</b> {br} Vurder om beregningsgrunnlaget skal flyttes til ny aktivitet eller fordeles mellom aktivitetene.","FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag":"Fastsatt beløp for gradert andel må være høyere enn 0.","BeregningInfoPanel.FordelingBG.LeggTilAndel":"Legg til aktivitet","BeregningInfoPanel.FordelingBG.Ytelse":"Ytelse","BeregningInfoPanel.FordelBG.PeriodeFom":"{fom} - ","BeregningInfoPanel.FordelBG.PeriodeFomOgTom":"{fom} - {tom}","BeregningInfoPanel.FordelBG.Andel":"Aktivitet","BeregningInfoPanel.FordelBG.AndelIArbeid":"Andel i arbeid","BeregningInfoPanel.FordelBG.Refusjonskrav":"Ref.krav","BeregningInfoPanel.FordelBG.Fordeling":"Ny fordeling","BeregningInfoPanel.FordelBG.Inntektskategori":"Inntektskategori","BeregningInfoPanel.FordelBG.Sum":"Sum","BeregningInfoPanel.FordelBG.Validation.LikFordeling":"Summen må være lik {fordeling}","BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige":"Total refusjon må vere lavere enn {seksG}","BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn":"Total fordeling for følgende andeler må være lavere enn {seksG}: {andelsliste}","BeregningInfoPanel.FordelBG.Validation.UlikeAndeler":"Andeler for samme aktivitet må ha ulik inntektskategori","BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding":"Total refusjon for {arbeidsgiver} kan ikke være høyere enn beløpet fra inntektsmeldingen.","BeregningInfoPanel.FordelBG.Inntekt":"Inntekt","BeregningInfoPanel.FordelBG.Beregningsgrunnlag":"Grunnlag","BeregningInfoPanel.RefusjonBG.Tittel":"Endring i refusjon","BeregningInfoPanel.RefusjonBG.Aktivitet":"Aktivitet","BeregningInfoPanel.RefusjonBG.TidligereUtb":"Tidligere utbetalinger","BeregningInfoPanel.RefusjonBG.GjeldendeFra":"Gjelder fra","BeregningInfoPanel.RefusjonBG.Direkteutbetaling":"Direkte utbetaling","BeregningInfoPanel.RefusjonBG.Periode":"{fom} - {tom}","BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}","BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"<b>{ag}</b> krever refusjon fra og med {dato}. Det er tidligere innvilget et lavere refusjonsbeløp","BeregningInfoPanel.RefusjonBG.RefusjonFra":"Refusjonsbeløpet skal gjelde fra og med","BeregningInfoPanel.RefusjonBG.Aksjonspunkt":"Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.","BeregningInfoPanel.RefusjonBG.DelvisPrMnd":"Før denne datoen skal refusjonsbeløpet per måned være","BeregningInfoPanel.TilkommetAktivitet.Aktivitet":"Aktivitet","BeregningInfoPanel.TilkommetAktivitet.Periode":"Inntektsperiode","BeregningInfoPanel.TilkommetAktivitet.Årsinntekt":"Årsinntekt","BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling":"Reduserer inntektstap","BeregningInfoPanel.TilkommetAktivitet.Ja":"Ja","BeregningInfoPanel.TilkommetAktivitet.Nei":"Nei","BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring":"Har søker inntekt fra den nye næringsaktiviteten som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans":"Har søker inntekt fra den nye frilanseraktiviteten som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid":"Har søker inntekt fra {arbeidsforhold} som reduserer søkers inntektstap?","BeregningInfoPanel.TilkommetAktivitet.Fastsett":"Fastsett årsinntekt","BeregningInfoPanel.TilkommetAktivitet.LesMer":"Hvordan fastsette årsinntekten?","BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid":"Kontakt bruker for å dokumentere inntekten i det nye arbeidsforholdet. Enten ved å be arbeidsgiver sende inn inntektsmelding eller så kan bruker selv dokumenterer inntekten med arbeidskontrakt, lønnsslipper eller lignende. {br}{br}Dersom arbeidsforholdet har vart så lenge at utbetalt lønn er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Hvis mulig,  benytt de 3 siste månedene og regn om til årsinntekt. Dersom arbeidsforholdet har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans":"Kontakt bruker for å dokumentere hva inntekten utgjør hvis det ikke er rapportert inntekt fra frilansoppdrag i a-ordningen. {br}{br}Hvis oppdraget har vart så lenge at inntekten er rapportert i a-ordningen, kan § 8-28 filtret benyttes for å fastsette årsinntekten. Benytt de 3 siste månedene hvis mulig og regn om til årsinntekt. Hvis oppdraget har vart kortere, kan du benytte en kortere periode.","BeregningInfoPanel.TilkommetAktivitet.LesMerNæring":"Benytt opplysninger oppgitt av bruker i søknaden, eller be bruker sannsynliggjøre forventet inntekt.","BeregningInfoPanel.TilkommetAktivitet.Alert":"Utgangspunktet er at all tilkommet aktivitet med inntekt skal føre til reduksjon i utbetaling. Det kan likevel være feil eller mangler i opplysningene fra AA-registeret. F. eks. internt bytte av org. nummer pga. endret lønns- og personalsystem eller manglende registrert sluttdato i gammel stilling ved overgang til ny stilling. Gjør derfor en konkret vurdering av hvorfor tilkommet aktivitet og inntekt ikke skal føre til reduksjon.","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","SubmitButton.ConfirmInformation":"Bekreft og fortsett","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","TilkommetAktivitet.AksjonspunktAlert":"Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal graderes mot den nye inntekten.","TilkommetAktivitet.AksjonspunktHelpText":"Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.","TilkommetAktivitet.Heading":"Perioder med ny aktivitet","TilkommetAktivitet.Modal.Knapp":"Del opp periode","TilkommetAktivitet.Modal.Tittel":"Del opp periode","TilkommetAktivitet.Modal.Select":"Hvilken periode ønsker du å dele opp?","TilkommetAktivitet.Modal.DatoValg":"Opprett ny vurdering fra","TilkommetAktivitet.Modal.Resultat":"Nye perioder til vurdering:","TilkommetAktivitet.Modal.Placeholder":"Velg periode","TilkommetAktivitet.Modal.Periode":"{fom} - {tom}","TilkommetAktivitet.Modal.DelOppKnapp":"Del opp periode","TilkommetAktivitet.Modal.AvbrytKnapp":"Avbryt","TilkommetAktivitet.AlertHeading.FlereStatuser":"Søker har nye aktiviteter","TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende":"Søker har opplyst om ny inntekt som selvstendig næringsdrivende.","TilkommetAktivitet.AlertHeading.Frilans":"Søker har en ny frilansaktivitet i AA-registeret.","TilkommetAktivitet.AlertHeading.Arbeidsforhold":"Søker har et nytt arbeidsforhold i AA-registeret","TilkommetAktivitet.AlertHeading.Dagpenger":"Søker har en ny periode med dagpenger","Fordeling.VurdertTidligere":"Vurdert i en tidligere behandling","BeregningInfoPanel.TilkommetAktivitet.TomTekst":" "},Ng=Ke(ql),GA=bn(3),LA=cn(1500),Et=({isReadOnly:e,isSubmittable:n,hasBegrunnelse:r,label:t,hasVurderingText:s=!1,name:i="begrunnelse"})=>{const l=s?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",o=t||Ng.formatMessage({id:l});return v.jsx(Ge,{value:Ng,children:(n||r)&&v.jsx("div",{className:oi.begrunnelseTextField,children:v.jsx(en,{name:i,label:e?"":o,validate:e?[]:[X,GA,LA,jn],className:e?oi.explanationTextareaReadOnly:oi.explanationTextarea,maxLength:1500,readOnly:e})})})},KA=e=>e&&e.begrunnelse?e.begrunnelse:"";Et.buildInitialValues=(e,n="begrunnelse")=>({[n]:zi(KA(e))});Et.transformValues=(e,n="begrunnelse")=>({begrunnelse:e[n]});const $A=Ke(ql),UA=(e,n,r)=>!r||n?!0:!e,Ns=({isReadOnly:e,isSubmittable:n,onClick:r,isSubmitting:t,isDirty:s})=>e?null:v.jsx(ae,{size:"small",loading:t,disabled:UA(s,t,n),onClick:r||Fu,type:r?"button":"submit",children:$A.formatMessage({id:"SubmitButton.ConfirmInformation"})});function Sg(e,n){return n.tom!=null&&!I(n.tom).isBefore(I(e.fom))&&(e.tom==null||!I(n.tom).isAfter(I(e.tom)))}function YA(e,n){return Sg(e,n)||Sg(n,e)}function Rn(e,n){var r;return(r=e.fordelBeregningsgrunnlagAndeler)!=null&&r.some(t=>!t.inntektskategori||t.inntektskategori===Rt.UDEFINERT)?!0:!n||n.length===0||n.some(t=>YA(t,e))}var qg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var xg;function HA(){return xg||(xg=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=s(i,t.call(this,o)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)n.call(i,o)&&i[o]&&(l=s(l,this&&this[o]||o));return l}function s(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(qg)),qg.exports}var CA=HA();const im=am(CA),zA="_vurdertIForrigeIcon_1q86k_1",JA={vurdertIForrigeIcon:zA},WA=im.bind(JA),lm=({className:e=""})=>{const n=W();return v.jsx("span",{"data-testid":"vurdertIForrigeIcon",className:WA("vurdertIForrigeIcon",e),children:v.jsx(bs,{size:"small",variant:"neutral",children:n.formatMessage({id:"Fordeling.VurdertTidligere"})})})},Wr=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Nt=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:s,identifikator:i}=e;return s?t?`${r} (${I(t).format(te)})${Wr(n)}`:r:i?`${r} (${i})${Wr(n)}`:r},Pi=(e,n)=>{var r,t;const s=((r=e.arbeidsgiver)==null?void 0:r.arbeidsgiverOrgnr)||((t=e.arbeidsgiver)==null?void 0:t.arbeidsgiverAktørId);if(!s||!n[s])return"";const i=n[s];return i.erPrivatPerson?i.fødselsdato?`${i.navn} (${I(i.fødselsdato).format(te)})${Wr(e.eksternArbeidsforholdRef)}`:`${i.navn}${Wr(e.eksternArbeidsforholdRef)}`:`${i.navn} (${s})${Wr(e.eksternArbeidsforholdRef)}`},dm=" - ",om=e=>e==null,ZA=e=>{if(e.length===0)return"";if(e.length===1)return`${parseFloat(e[0]).toFixed(2)}`;const n=Math.min(...e),r=Math.max(...e);return`${n}${dm}${r}`},XA=e=>e.inntektskategori&&e.inntektskategori!==Rt.UDEFINERT?e.inntektskategori:"",QA=(e,n,r,t)=>{var s,i;if(!e.aktivitetStatus||e.aktivitetStatus===pe.UDEFINERT)return"";if(e.aktivitetStatus===pe.ARBEIDSTAKER&&e.arbeidsforhold){const l=e.arbeidsforhold.arbeidsgiverIdent?t[e.arbeidsforhold.arbeidsgiverIdent]:void 0;return l?Nt(l,e.arbeidsforhold.eksternArbeidsforholdId):e.arbeidsforhold.arbeidsforholdType&&((s=r[Nr.OPPTJENING_AKTIVITET_TYPE].find(o=>{var g;return o.kode===((g=e.arbeidsforhold)==null?void 0:g.arbeidsforholdType)}))==null?void 0:s.kode)||""}return n&&e.aktivitetStatus===pe.BRUKERS_ANDEL?"Ytelse":((i=r[Nr.AKTIVITET_STATUS].find(l=>l.kode===e.aktivitetStatus))==null?void 0:i.navn)||""},eI=e=>om(e)?void 0:e,Pg=e=>G(e)||"",nI=(e,n,r)=>e!==void 0?Pg(e):r&&!om(n)?Pg(n):"",rI=e=>({arbeidsgiverId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent?e.arbeidsforhold.arbeidsgiverIdent:"",eksternArbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.eksternArbeidsforholdId?e.arbeidsforhold.eksternArbeidsforholdId:"",arbeidsforholdId:e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsforholdId:"",arbeidsperiodeFom:e.arbeidsforhold?e.arbeidsforhold.startdato:"",arbeidsperiodeTom:e.arbeidsforhold&&e.arbeidsforhold.opphoersdato!==null?e.arbeidsforhold.opphoersdato:"",arbeidsforholdType:e.arbeidsforholdType}),tI=(e,n,r,t)=>({andel:QA(e,n,r,t),aktivitetStatus:e.aktivitetStatus,andelsnr:e.andelsnr,nyAndel:!1,kilde:e.kilde==null?void 0:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler===!0,inntektskategori:XA(e),forrigeInntektskategori:!e.inntektskategori||e.inntektskategori===Rt.UDEFINERT?void 0:e.inntektskategori}),gm=(e,n,r,t,s)=>{if(n.skalRedigereInntekt){const i=t(`FORDEL_BEREGNING_FORM.${e}.${r}.${s}.fastsattBelop`);return i?ye(i):0}return n.readOnlyBelop?ye(n.readOnlyBelop):0},sI=(e,n)=>e.arbeidsforholdId===null?n.map(({arbeidsgiverIdent:r})=>r).includes(e.arbeidsgiverIdent):n.map(({arbeidsforholdId:r})=>r).includes(e.arbeidsforholdId),aI=(e,n)=>{var r;const t=e.find(s=>{var i,l;return!!s.arbeidsforhold&&s.arbeidsforhold.arbeidsgiverIdent===((i=n.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent)&&s.arbeidsforhold.arbeidsforholdId===((l=n.arbeidsforhold)==null?void 0:l.arbeidsforholdId)});if(!t)throw new Error(`Finner ikke forventet andel med arbeidsgiverId ${(r=n.arbeidsforhold)==null?void 0:r.arbeidsgiverIdent}`);return t},iI=(e,n)=>{const r=[];return e===void 0||e.forEach(t=>{if(t.arbeidsforhold&&!sI(t.arbeidsforhold,r)){const s=aI(n,t),i={andelsnr:t.andelsnr,nyttArbeidsforhold:t.nyttArbeidsforhold,beregningsperiodeTom:s.beregningsperiodeTom,beregningsperiodeFom:s.beregningsperiodeFom,...t.arbeidsforhold};r.push(i)}}),r},lI=e=>e.length>0?e.flatMap(n=>n.fordelBeregningsgrunnlagAndeler||[]):[],dI=e=>e.length>0?e.flatMap(n=>n.beregningsgrunnlagPrStatusOgAndel||[]):[],oI=(e,n)=>iI(lI(e),dI(n)),gI=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[],s=e.beregningsgrunnlagPeriode;return oI(t,s)},uI=e=>e?Number(ye(e)):0,kI=e=>e.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.UlikeAndeler"}),mI=(e,n)=>e.inntektskategori===n.inntektskategori&&e.arbeidsgiverIdent===n.arbeidsgiverIdent&&e.aktivitetstatus===n.aktivitetstatus&&e.arbeidsforholdId===n.arbeidsforholdId,pI=(e,n)=>e.some(r=>mI(n,r)),vI=(e,n)=>{const r=e.find(t=>t.andelsnr===n);if(!r)throw new Error(`Finner ikke field med andelsnr ${n}`);return r},yI=(e,n,r,t)=>{const s=[];return t.forEach((i,l)=>{if(i.nyAndel&&(i.andelsnrRef||i.andelsnrRef===0)){const o=vI(t,i.andelsnrRef);s.push({erNyAndel:i.nyAndel,aktivitetstatus:i.aktivitetStatus,inntektskategori:n(`FORDEL_BEREGNING_FORM.${e}.${r}.${l}.inntektskategori`),arbeidsgiverIdent:o.arbeidsgiverId,arbeidsforholdId:o.arbeidsforholdId})}else s.push({erNyAndel:i.nyAndel,aktivitetstatus:i.aktivitetStatus,inntektskategori:i.inntektskategori,arbeidsgiverIdent:i.arbeidsgiverId,arbeidsforholdId:i.arbeidsforholdId})}),s},fI=(e,n,r,t,s)=>{const i=yI(e,n,r,t),l=[];let o=!1;return i.forEach(g=>{pI(l,g)&&(o=!0),l.push(g)}),o?kI(s):void 0},bI=(e,n)=>(!!e.refusjonskravFraInntektsmelding||e.refusjonskravFraInntektsmelding===0)&&(!!n.refusjonskravFraInntektsmelding||n.refusjonskravFraInntektsmelding===0)&&n.refusjonskravFraInntektsmelding<e.refusjonskravFraInntektsmelding,cI=(e,n,r,t,s,i)=>{const l=i.findIndex(({arbeidsforholdId:g,arbeidsgiverId:m})=>g===t.arbeidsforholdId&&m===t.arbeidsgiverId),o=n(`FORDEL_BEREGNING_FORM.${e}.${r}.${s}.refusjonskrav`);if(l>=0){const g=i[l];bI(t,g)&&(g.refusjonskravFraInntektsmelding=t.refusjonskravFraInntektsmelding),o!=null&&(g.totalRefusjon+=Number(ye(o)))}else{const{refusjonskravFraInntektsmelding:g,arbeidsforholdId:m,arbeidsgiverId:p,eksternArbeidsforholdId:y}=t;let f=0;o!=null&&(f=Number(ye(o))),i.push({arbeidsforholdId:m,eksternArbeidsforholdId:y,arbeidsgiverId:p,refusjonskravFraInntektsmelding:g,totalRefusjon:f})}},jI=(e,n,r,t)=>{const s=[];return t.forEach((i,l)=>{i.arbeidsforholdId!==""&&cI(e,n,r,i,l,s)}),s},hI=(e,n)=>n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding"},{arbeidsgiver:e}),AI=(e,n,r,t,s,i)=>{const l=jI(e,t,r,n).filter(o=>(o.refusjonskravFraInntektsmelding||o.refusjonskravFraInntektsmelding===0)&&o.totalRefusjon>o.refusjonskravFraInntektsmelding);if(l.length>0){const o=l[0].arbeidsgiverId?s[l[0].arbeidsgiverId]:void 0;let g;return o?g=Nt(o,l[0].eksternArbeidsforholdId):g=l[0].arbeidsgiverId||"",hI(g,i)}},II=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.LikFordeling"},{fordeling:e}):void 0,TI=e=>e.formatMessage({id:"FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag"}),RI=(e,n)=>e?n.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige"},{seksG:e}):void 0,EI=(e,n,r)=>e>=Math.round(n)?RI(G(n),r):void 0,um=(e,n,r)=>r.formatMessage({id:"BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn"},{seksG:e,andelsliste:n}),km=(e,n,r,t,s)=>e>=Math.round(n)?t(G(n),r,s):void 0,NI=(e,n,r)=>e!==Math.round(n)?II(G(Math.round(n)),r):void 0,SI=(e,n,r,t,s,i,l)=>{if(!r.andelIArbeid)return!1;const o=s(`FORDEL_BEREGNING_FORM.${e}.${i}.${l}.fastsattBelop`),g=o?ye(o):0;return!Number.isNaN(Number(r.andelIArbeid))&&Number(r.andelIArbeid)>0&&g<=0?!0:r.andelIArbeid.split(dm).filter(m=>Number(m)>0).length>0&&g===0},qI=(e,n,r,t,s,i)=>t.some((l,o)=>SI(e,i,l,s,n,r,o))?TI(i):void 0,xI=(e,n,r,t,s,i)=>{const l=t.map((o,g)=>gm(e,o,r,n,g)).reduce((o,g)=>o+g,0);return s!=null?NI(l,s,i):void 0},Bg=(e,n,r,t,s)=>{const i=s(`FORDEL_BEREGNING_FORM.${e}.${r}.${t}.refusjonskrav`);return uI(i)},PI=(e,n,r,t,s,i)=>{const l=!!n.find((m,p)=>m.andelIArbeid!=="0.00"&&Bg(e,m,r,p,t)===0),o=n.map((m,p)=>Bg(e,m,r,p,t)).reduce((m,p)=>m+p,0),g=6*s;return l?EI(o,g,i):void 0},mm=(e,n)=>{const r=e.map(t=>{var s;return((s=n[Nr.AKTIVITET_STATUS].find(i=>i.kode===t))==null?void 0:s.navn)||""});return r.sort((t,s)=>t.localeCompare(s)),[...new Set(r)].join(", ")},pm=(e,n,r,t,s)=>t.map((i,l)=>i.aktivitetStatus&&!s.includes(i.aktivitetStatus)?0:gm(e,i,r,n,l)).reduce((i,l)=>i+l,0),BI=(e,n,r,t,s,i,l)=>{const o=[pe.ARBEIDSTAKER],g=pm(e,n,r,t,o),m=mm(o,i);return km(g,s,m,um,l)},FI=(e,n,r,t,s,i,l)=>{const o=[pe.ARBEIDSTAKER,pe.FRILANSER,pe.DAGPENGER,pe.ARBEIDSAVKLARINGSPENGER],g=t.map(y=>y.aktivitetStatus).filter(y=>!!y&&o.includes(y)),m=pm(e,n,r,t,g),p=mm(g,i);return km(m,s,p,um,l)},_I=(e,n,r,t,s,i,l)=>{const o=!!t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===pe.FRILANSER),g=6*i;if(o)return BI(e,n,r,t,g,l,s);if(t.find(m=>m.andelIArbeid!=="0.00"&&m.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE))return FI(e,n,r,t,g,l,s)},OI="_rightAlignInput_1tnrv_19",DI="_slettIkon_1tnrv_29",wI="_inntektTable_1tnrv_88",VI="_shortLeftAligned_1tnrv_137",MI="_wordwrap_1tnrv_142",GI="_litenBredde_1tnrv_145",LI="_storBredde_1tnrv_148",KI="_benyttCheckbox_1tnrv_154",Me={rightAlignInput:OI,slettIkon:DI,inntektTable:wI,shortLeftAligned:VI,wordwrap:MI,litenBredde:GI,storBredde:LI,benyttCheckbox:KI},$I=e=>({nyAndel:!0,kilde:"SAKSBEHANDLER_FORDELING",fastsattBelop:G(0),lagtTilAvSaksbehandler:!0,refusjonskravFraInntektsmelding:0,belopFraInntektsmelding:null,skalRedigereInntekt:!e}),vm=(e,n,r)=>{var t;return!e.arbeidsgiverIdent||!r[e.arbeidsgiverIdent]?e.arbeidsforholdType&&((t=n[Nr.OPPTJENING_AKTIVITET_TYPE].find(s=>s.kode===e.arbeidsforholdType))==null?void 0:t.navn)||"":Nt(r[e.arbeidsgiverIdent],e.eksternArbeidsforholdId)},UI=(e,n,r)=>e.map(t=>v.jsx("option",{value:t.andelsnr.toString(),children:vm(t,n,r)},t.andelsnr)),YI=(e,n,r,t)=>{const s=e.map(i=>v.jsx("option",{value:i.andelsnr.toString(),children:vm(i,r,t)},i.andelsnr));return s.push(v.jsx("option",{value:xi.BRUKERS_ANDEL,children:n.formatMessage({id:"BeregningInfoPanel.FordelingBG.Ytelse"})},xi.BRUKERS_ANDEL)),s},HI=e=>e.map(n=>v.jsx("option",{value:n.kode,children:n.navn},n.kode)),ym=e=>e>0&&G(e)||"",CI=(e,n,r,t)=>{let s=0,i=0;for(i;i<r.length;i+=1){const l=r[i],o=ye(t(`FORDEL_BEREGNING_FORM.${e}.${n}.${i}.fastsattBelop`));l.skalRedigereInntekt?s+=o||0:s+=l.readOnlyBelop?o:0}return ym(s)},zI=e=>{let n=0,r=0;for(r;r<e.length;r+=1){const t=e[r];t.beregningsgrunnlagPrAar&&(n+=t.beregningsgrunnlagPrAar?Number(ye(t.beregningsgrunnlagPrAar)):0)}return ym(n)},JI=e=>e.inntektskategori?DA(e.inntektskategori)||Rt.FRILANSER===e.inntektskategori:!1,WI=(e,n)=>{const r=Number(n);return e.find(t=>t.andelsnr===r)},ZI=(e,n)=>{var r;const t=Number(n);return(r=e.find(s=>s.andelsnr===t))==null?void 0:r.aktivitetStatus},XI=(e,n,r,t,s)=>{const i=e[n],l=WI(r,t);l&&(i.arbeidsforholdId=l.arbeidsforholdId,i.arbeidsgiverId=l.arbeidsgiverIdent,i.arbeidsperiodeFom=l.startdato,i.arbeidsperiodeTom=l.opphoersdato,i.andelsnrRef=l.andelsnr,i.aktivitetStatus=ZI(e,t),i.nyttArbeidsforhold=l.nyttArbeidsforhold,i.arbeidsforholdType=l.arbeidsforholdType,i.beregningsperiodeTom=l.beregningsperiodeTom,i.beregningsperiodeFom=l.beregningsperiodeFom,s(n,i))},QI=(e,n,r,t,s,i,l)=>v.jsxs(v.Fragment,{children:[!e[n].nyAndel&&v.jsx(ce,{name:`${l(n)}.andel`,className:Me.storBredde,readOnly:!0}),e[n].nyAndel&&v.jsx(ps,{name:`${l(n)}.andel`,className:Me.storBredde,label:"",selectValues:r,readOnly:t,validate:[X],onChange:o=>XI(e,n,s,o.target.value,i)})]}),eT=(e,n,r,t)=>n?v.jsx(j.DataCell,{children:v.jsx(hr,{children:v.jsx(ce,{name:`${t}.readOnlyBelop`,className:Me.litenBredde,parse:Oe,readOnly:!0,isEdited:!1})})}):v.jsx(j.DataCell,{className:Me.rightAlignInput,children:v.jsx(hr,{children:v.jsx(ce,{name:`${t}.fastsattBelop`,parse:Oe,readOnly:e,validate:[X,rn(178956970)],isEdited:r&&!n,className:Me.litenBredde})})}),nT=(e,n,r)=>(n[e].nyAndel||n[e].lagtTilAvSaksbehandler)&&!r,rT=(e,n,r,t,s,i,l)=>v.jsxs(j.DataCell,{children:[QI(e,n,r,t,s,i,l),!JI(e[n])&&v.jsx("div",{className:Me.wordwrap,children:v.jsx(ce,{name:`${l(n)}.arbeidsperiodeFom - ${l(n)}.arbeidsperiodeTom`,readOnly:!0})})]}),tT=(e,n)=>e?v.jsx(j.DataCell,{children:v.jsx(ce,{name:`${n}.andelIArbeid`,readOnly:!0,className:Me.litenBredde,normalizeOnBlur:r=>Number.isNaN(r)?r:parseFloat(r.toString()).toFixed(2)})}):null,sT=(e,n,r,t)=>v.jsx(j.DataCell,{className:e||!n[r].skalKunneEndreRefusjon?void 0:Me.rightAlignInput,children:v.jsx(hr,{children:v.jsx(ce,{name:`${t(r)}.refusjonskrav`,readOnly:e||!n[r].skalKunneEndreRefusjon,parse:Oe,className:Me.litenBredde,validate:n[r].skalKunneEndreRefusjon?[X,rn(178956970)]:[]})})}),aT=e=>v.jsx(j.DataCell,{children:v.jsx(ce,{name:`${e}.beregningsgrunnlagPrAar`,className:Me.litenBredde,readOnly:!0,parse:Oe})}),iT=(e,n,r)=>v.jsx(j.DataCell,{className:e?Me.shortLeftAligned:void 0,children:v.jsx(hr,{children:v.jsx(ps,{label:"",name:`${n}.inntektskategori`,className:Me.storBredde,validate:e?[]:[X],selectValues:HI(r),readOnly:e})})}),lT=(e,n,r,t)=>v.jsx(j.DataCell,{children:nT(n,e,r)&&v.jsx(ae,{icon:v.jsx(Xn,{"aria-hidden":!0,className:Me.slettIkon}),onClick:()=>t(n),type:"button",variant:"tertiary"})}),dT=(e,n,r)=>v.jsxs(j.Row,{children:[v.jsx(j.DataCell,{children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Sum"})}),r&&v.jsx(j.DataCell,{}),v.jsx(j.DataCell,{}),v.jsx(j.DataCell,{children:v.jsx(F,{size:"small",children:n})}),v.jsx(j.DataCell,{children:v.jsx(F,{size:"small",children:e})}),v.jsx(j.DataCell,{}),v.jsx(j.DataCell,{})]},"bruttoBGSummaryRow"),oT=e=>{var n,r;return(((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[]).some(t=>{var s;return(s=t.perioderMedGraderingEllerRefusjon)==null?void 0:s.some(i=>i.erGradering)})},gT=({fieldName:e,readOnly:n,skalIkkeRedigereInntekt:r,isAksjonspunktClosed:t,arbeidsgiverOpplysningerPerId:s,kodeverkSamling:i,beregningsgrunnlag:l,skalKunneEndreRefusjon:o,sumIPeriode:g,periodeFom:m,vilkårperiodeFieldIndex:p,setFieldArrayToRepeat:y,fieldArrayToRepeat:f})=>{const{control:b,watch:c,getValues:N}=Ie(),h=`FORDEL_BEREGNING_FORM.${p}.${e}`,{fields:E,append:R,remove:S,update:q}=nn({control:b,name:`FORDEL_BEREGNING_FORM.${p}.${e}`});A.useEffect(()=>{f&&f!==h&&!n&&!r&&N(f).forEach(ee=>{var me;const Te=E.findIndex(ln=>ln.andel===ee.andel&&(ln.inntektskategori===ee.inntektskategori||!ln.inntektskategori&&!ee.lagtTilAvSaksbehandler&&!ln.lagtTilAvSaksbehandler));if(Te>-1){const ln={...E[Te],fastsattBelop:ee.fastsattBelop,refusjonskrav:o?ee.refusjonskrav:(me=E[Te])==null?void 0:me.refusjonskrav,inntektskategori:ee.inntektskategori};q(Te,ln)}})},[f]);const B=!!l.aktivitetStatus&&l.aktivitetStatus.some(ee=>ee===pe.KUN_YTELSE),w=gI(l),_=CI(p,e,E,c),H=zI(E),z=oT(l),O=i[Nr.INNTEKTSKATEGORI],L=W(),V=B?YI(w,L,i,s):UI(w,i,s),U=ee=>`FORDEL_BEREGNING_FORM.${p}.${e}.${ee}`,re=E.map((ee,me)=>{const Te=n||r;return v.jsxs(j.Row,{children:[rT(E,me,V,Te,w,q,U),tT(z,U(me)),sT(Te,E,me,U),aT(U(me)),eT(n,r,t,U(me)),iT(Te,U(me),O),lT(E,me,Te,S)]},ee.id)});re.push(dT(_,H,z));const J=[],ie=ee=>{ee&&J.push(ee)};!n&&E.some(ee=>!!ee.skalRedigereInntekt||!!ee.skalKunneEndreRefusjon)&&(ie(fI(p,N,e,E,L)),ie(xI(p,N,e,E,g,L)),z&&(ie(qI(p,N,e,E,m,L)),ie(_I(p,N,e,E,L,l.grunnbeløp,i))),o&&(ie(PI(p,E,e,N,l.grunnbeløp,L)),ie(AI(p,E,e,N,s,L))));const Re=`FORDEL_BEREGNING_FORM.${p}.${e}.skjemagruppe`,Fe=J.filter(ee=>!!ee),Je=Fe.length>0?Fe[0]:void 0,We=ms(Re,Je),Z=()=>{y(h===f?"":h)};return v.jsxs("div",{children:[v.jsxs(j,{className:Me.inntektTable,children:[v.jsx(j.Header,{children:v.jsxs(j.Row,{children:[v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Andel"})}),z&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.AndelIArbeid"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Refusjonskrav"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Beregningsgrunnlag"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Fordeling"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.Inntektskategori"})})]})}),v.jsx(j.Body,{children:re})]}),!n&&!r&&v.jsx(ae,{icon:v.jsx(Wi,{"aria-hidden":!0}),onClick:()=>R($I(r)),type:"button",variant:"secondary",children:v.jsx(ke,{children:v.jsx(k,{id:"BeregningInfoPanel.FordelingBG.LeggTilAndel"})})}),!n&&!r&&v.jsx(Bv,{className:Me.benyttCheckbox,checked:h===f,onChange:Z,children:"Benytt for alle perioder"}),We&&v.jsx(at,{children:We})]})},uT="_statusOk_1qsx9_1",fm={statusOk:uT},kT=im.bind(fm),gi=e=>e?I(e,Pe).format(te):"-",mT=(e,n)=>n?v.jsx(F,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:gi(e),tom:gi(n)}})}):v.jsx(F,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:gi(e)}})}),pT=e=>{var n,r;return(n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr?(r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr:0},vT=e=>{const n=pT(e);return e.besteberegningPrAar!==void 0&&e.besteberegningPrAar!==null?e.besteberegningPrAar+n:e.overstyrtPrAar!==void 0&&e.overstyrtPrAar!==null?e.overstyrtPrAar+n:e.beregnetPrAar!==void 0&&e.beregnetPrAar!==null?e.beregnetPrAar+n:0},yT=(e,n)=>{var r;return(((r=e.find(t=>t.beregningsgrunnlagPeriodeFom===n))==null?void 0:r.beregningsgrunnlagPrStatusOgAndel)||[]).map(t=>vT(t)).reduce((t,s)=>t+s,0)},xl=({readOnly:e,erVurdertTidligere:n,isAksjonspunktClosed:r,open:t,showPanel:s,beregningsgrunnlag:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,fordelBGFieldArrayName:g,fordelingsperiode:m,fieldIndex:p,setFieldArrayToRepeat:y,fieldArrayToRepeat:f})=>m.fom?v.jsx(qe,{className:e?fm.statusOk:kT(`fordelBeregningsgrunnlagPeriode--${m.fom}`),children:v.jsxs(qe.Item,{open:t,children:[v.jsxs(qe.Header,{onClick:()=>s(m.fom),children:[mT(m.fom,m.tom)," ",n?v.jsx(lm,{}):""]}),v.jsx(qe.Content,{children:v.jsx(gT,{fieldName:g,readOnly:e,sumIPeriode:yT(i.beregningsgrunnlagPeriode,m.fom),skalIkkeRedigereInntekt:!m.skalRedigereInntekt,skalKunneEndreRefusjon:!!m.skalKunneEndreRefusjon,periodeFom:m.fom,isAksjonspunktClosed:r,kodeverkSamling:l,beregningsgrunnlag:i,arbeidsgiverOpplysningerPerId:o,vilkårperiodeFieldIndex:p,setFieldArrayToRepeat:y,fieldArrayToRepeat:f})})]})}):null,fT=(e,n)=>{const r=(n.beregningsgrunnlagPrStatusOgAndel||[]).find(t=>t.andelsnr===e.andelsnr);if(!r)throw Error(`Finner ikke matchende andel med andelsnr ${e.andelsnr}`);return r},bT=(e,n)=>{var r;const t=(r=e.arbeidsforhold)==null?void 0:r.startdato;return!!t&&!I(t).isBefore(I(n))},Fg=e=>{var n,r,t,s;if(!e)return;const i=((n=e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr)===null||((r=e.arbeidsforhold)==null?void 0:r.naturalytelseBortfaltPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseBortfaltPrÅr,l=((t=e.arbeidsforhold)==null?void 0:t.naturalytelseTilkommetPrÅr)===null||((s=e.arbeidsforhold)==null?void 0:s.naturalytelseTilkommetPrÅr)===void 0?0:e.arbeidsforhold.naturalytelseTilkommetPrÅr;if(e.besteberegningPrAar||e.besteberegningPrAar===0)return G(e.besteberegningPrAar+i-l);if(e.overstyrtPrAar||e.overstyrtPrAar===0)return G(e.overstyrtPrAar+i-l);if(e.beregnetPrAar||e.beregnetPrAar===0)return G(e.beregnetPrAar+i-l)},cT=e=>(e.fordelingForrigeBehandlingPrAar||e.fordelingForrigeBehandlingPrAar===0?G(e.fordelingForrigeBehandlingPrAar):"")||"";xl.buildInitialValues=(e,n,r,t,s,i)=>!e||!e.fordelBeregningsgrunnlagAndeler?[]:e.fordelBeregningsgrunnlagAndeler.map(l=>{const o=fT(l,n);return{...tI(l,t,s,i),...rI(l),andelIArbeid:ZA(l.andelIArbeid||[]),fordelingForrigeBehandling:cT(l),fastsattBelop:nI(l.fordeltPrAar,o.bruttoPrAar,!!e.skalPreutfyllesMedBeregningsgrunnlag),readOnlyBelop:Fg(o),refusjonskrav:l.refusjonskravPrAar!==null&&l.refusjonskravPrAar!==void 0?G(l.refusjonskravPrAar):"",skalKunneEndreRefusjon:e.skalKunneEndreRefusjon&&!l.lagtTilAvSaksbehandler&&l.refusjonskravFraInntektsmeldingPrAar?e.skalKunneEndreRefusjon:!1,belopFraInntektsmelding:l.belopFraInntektsmeldingPrAar,skalRedigereInntekt:!!e.skalRedigereInntekt,refusjonskravFraInntektsmelding:l.refusjonskravFraInntektsmeldingPrAar,nyttArbeidsforhold:l.nyttArbeidsforhold||bT(o,r),beregningsgrunnlagPrAar:Fg(o),forrigeRefusjonPrAar:l.refusjonskravPrAar,forrigeArbeidsinntektPrAar:eI(l.fordeltPrAar),beregningsperiodeFom:o.beregningsperiodeFom,beregningsperiodeTom:o.beregningsperiodeTom}});const bm="fordelBGPeriode",Pl=e=>bm+e,jT=e=>({refusjonPrÅr:e.skalKunneEndreRefusjon&&e.refusjonskrav?ye(e.refusjonskrav):void 0,fastsattÅrsbeløpInklNaturalytelse:ye(e.fastsattBelop),inntektskategori:e.inntektskategori||""}),is=(e,n)=>!!e.periodeAarsaker&&e.periodeAarsaker.includes(n),hT=e=>is(e,st.GRADERING)||is(e,st.GRADERING_OPPHOERER),AT=(e,n)=>{const r=n.indexOf(e);return n[r-1].bruttoPrAar===e.bruttoPrAar},cm=(e,n)=>!e.arbeidsforhold&&!n.arbeidsforhold?!0:e.arbeidsforhold&&n.arbeidsforhold?e.arbeidsforhold.arbeidsgiverIdent===n.arbeidsforhold.arbeidsgiverIdent&&e.arbeidsforhold.arbeidsforholdId===n.arbeidsforhold.arbeidsforholdId:!1;function _g(e){const n=I(e.beregningsgrunnlagPeriodeFom).day()===6,r=I(e.beregningsgrunnlagPeriodeFom).day()===0,t=I(e.beregningsgrunnlagPeriodeTom).day()===6,s=I(e.beregningsgrunnlagPeriodeTom).day()===0;return(n||r)&&(t||s)}const IT=e=>{var n;return(n=e.andelIArbeid)==null?void 0:n.some(r=>r!==100)};function TT(e){var n;return(n=e.fordelBeregningsgrunnlagAndeler)==null?void 0:n.some(r=>IT(r))}function RT(e=[],n=[]){return e.sort((r,t)=>r-t),n.sort((r,t)=>r-t),e.join("_")!==n.join("-")}const ET=(e,n)=>e.some(r=>{const t=n.find(s=>s.aktivitetStatus===r.aktivitetStatus&&s.inntektskategori===r.inntektskategori&&cm(s,r));return!!(t===void 0||RT(t.andelIArbeid,r.andelIArbeid)||t.refusjonskravPrAar!==r.refusjonskravPrAar)}),NT=(e,n,r,t)=>{const s=e.fordelBeregningsgrunnlagAndeler||[],i=n.fordelBeregningsgrunnlagAndeler||[];if(s.length!==i.length)return!1;const l=t.indexOf(r),o=t[l-1];if(r.bruttoPrAar!==o.bruttoPrAar)return!1;const g=_g(r),m=_g(o),p=e.skalKunneEndreRefusjon||n.skalKunneEndreRefusjon;return(g||m)&&!p?!0:!ET(s,i)},ST=(e,n)=>e.some(r=>{const t=n.find(s=>s.aktivitetStatus===r.aktivitetStatus&&s.inntektskategori===r.inntektskategori&&cm(s,r));return t===void 0?!0:t.refusjonskravPrAar!==r.refusjonskravPrAar}),qT=(e,n,r,t,s)=>{var i,l;const o=t[t.length-1];return((i=r.fordelBeregningsgrunnlagAndeler)==null?void 0:i.length)!==((l=o.fordelBeregningsgrunnlagAndeler)==null?void 0:l.length)||r.skalRedigereInntekt!==o.skalRedigereInntekt||hT(e)||ST(r.fordelBeregningsgrunnlagAndeler||[],o.fordelBeregningsgrunnlagAndeler||[])||Rn(r,s)&&!Rn(o,s)?!1:is(e,st.ARBEIDSFORHOLD_AVSLUTTET)?AT(e,n):is(e,st.ENDRING_I_AKTIVITETER_SØKT_FOR)?NT(r,o,e,n):!0},xT=(e,n)=>{const r={...e.pop(),tom:n.tom};e.push(r)},PT=(e,n)=>(r,t)=>{if(r.length===0)return r.push({...t}),r;const s=e.find(i=>i.beregningsgrunnlagPeriodeFom===t.fom);if(s){if(qT(s,e,t,r,n))return xT(r,t),r;r.push({...t})}return r},BT=e=>({fom:n,tom:r})=>(I(n).isSame(I(e.fom))||I(n).isAfter(e.fom))&&(e.tom===null||I(r).isSame(I(e.tom))||I(r).isBefore(I(e.tom))),FT=e=>{if(e.nyAndel&&e.andel)return e.andel;if(!e.andelsnr)throw Error(`Forventer å finne andelsnr for submit på aktivitet ${e}`);return e.andelsnr},_T=e=>({andelsnr:FT(e),aktivitetStatus:e.aktivitetStatus,arbeidsgiverId:e.arbeidsgiverId!==""?e.arbeidsgiverId:void 0,arbeidsforholdId:e.arbeidsforholdId!==""?e.arbeidsforholdId:void 0,nyAndel:e.nyAndel,kilde:e.kilde,lagtTilAvSaksbehandler:e.lagtTilAvSaksbehandler,arbeidsforholdType:e.arbeidsforholdType,beregningsperiodeTom:e.beregningsperiodeTom,beregningsperiodeFom:e.beregningsperiodeFom,forrigeArbeidsinntektPrÅr:e.forrigeArbeidsinntektPrAar,forrigeRefusjonPrÅr:e.forrigeRefusjonPrAar,forrigeInntektskategori:e.forrigeInntektskategori,fastsatteVerdier:jT(e)}),OT=e=>{if(!e)throw Error("Fant ikke påkrevd felt før submit");return e},DT=(e,n,r,t)=>t.filter(BT(r)).filter(s=>s.skalRedigereInntekt||s.skalKunneEndreRefusjon).map(s=>({andeler:e[Pl(n)].map(_T),fom:OT(s.fom),tom:s.tom})),Bl=(e,n,r)=>e.filter(t=>TT(t)).reduce(PT(n,r),[]),wT="_lessPadding_xotc9_1",VT={lessPadding:wT},MT=(e,n)=>{const r=n.find(t=>t.beregningsgrunnlagPeriodeFom===e.fom);if(!r)throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${e.fom}`);return r},GT=(e,n,r,t)=>{const s=[],i=Bl(e,r,t);for(let l=0;l<i.length;l+=1){const{skalRedigereInntekt:o}=i[l];o&&Rn(i[l])&&DT(n,l,i[l],e).forEach(g=>s.push(g))}return s};function LT(e,n){return Rn(n,e.forlengelseperioder)}function KT(e,n){var r;return!Rn(e,n.forlengelseperioder)&&e.skalRedigereInntekt===!0&&!!e.fordelBeregningsgrunnlagAndeler&&((r=e.fordelBeregningsgrunnlagAndeler)==null?void 0:r.every(t=>t.fordeltPrAar!==null&&t.fordeltPrAar!==void 0))}const St=({readOnly:e,perioder:n,isAksjonspunktClosed:r,bgPerioder:t,beregningsgrunnlag:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,fieldIndex:o})=>{const[g,m]=A.useState([]),[p,y]=A.useState("");A.useEffect(()=>{const b=n.filter(c=>LT(s,c)).filter(c=>c.skalKunneEndreRefusjon||c.skalRedigereInntekt).filter(c=>!!c.fom).map(c=>c.fom);m(b)},[n]);const f=b=>{if(g.includes(b)){const c=g.filter(N=>N!==b);m(c)}else{const c=g.map(N=>N);c.push(b),m(c)}};return v.jsx(ov,{className:VT.lessPadding,children:Bl(n,t,s.forlengelseperioder).map((b,c)=>v.jsxs(Y.Fragment,{children:[v.jsx(x,{eightPx:!0}),v.jsx(xl,{readOnly:e||!Rn(b,s.forlengelseperioder),erVurdertTidligere:KT(b,s),fordelingsperiode:b,fordelBGFieldArrayName:Pl(c),open:g?g.filter(N=>N===b.fom).length>0:!1,isAksjonspunktClosed:r,showPanel:f,beregningsgrunnlag:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,fieldIndex:o,setFieldArrayToRepeat:y,fieldArrayToRepeat:p}),v.jsx(x,{eightPx:!0})]},bm+b.fom))})};St.transformValues=(e,n,r,t)=>({endretBeregningsgrunnlagPerioder:GT(n,e,r,t)});St.buildInitialValues=(e,n,r,t)=>{const s={};if(!e)return s;const i=!!n.aktivitetStatus&&n.aktivitetStatus.some(o=>o===pe.KUN_YTELSE),l=n.beregningsgrunnlagPeriode;return Bl(e,l,n.forlengelseperioder).forEach((o,g)=>{const m=MT(o,l);s[Pl(g)]=xl.buildInitialValues(o,m,n.skjaeringstidspunktBeregning,i,r,t)}),s};const $T=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},qt=({isAksjonspunktClosed:e,readOnly:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})=>{const l=r.beregningsgrunnlagPeriode,o=$T(r);return v.jsx(St,{perioder:o,readOnly:n,isAksjonspunktClosed:e,bgPerioder:l,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})};qt.buildInitialValues=(e,n,r,t)=>St.buildInitialValues(e,n,r,t);qt.transformValues=(e,n,r,t)=>St.transformValues(e,n,r,t);const{FORDEL_BEREGNINGSGRUNNLAG:UT}=Le,YT=(e,n)=>n.some(r=>r.definisjon===e),HT=(e,n,r,t)=>{const s=[];return t.length===0&&n.length===0&&e.length===0&&r.length===0||s.push(v.jsx(k,{id:"BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet",values:{b:(...i)=>v.jsx("b",{children:i}),br:v.jsx("br",{})}},"EndringBeregningsgrunnlagFastsetÅrsbeløp")),s},CT=e=>e.map(({erRefusjon:n})=>n).includes(!0)||e.map(({erGradering:n})=>n).includes(!0),zT=e=>{const n=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erGradering:l})=>l).includes(!0)),r=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erRefusjon:l})=>l).includes(!0)),t=e.filter(({permisjon:i})=>i!=null).filter(({perioderMedGraderingEllerRefusjon:i})=>CT(i||[])),s=e.filter(({perioderMedGraderingEllerRefusjon:i})=>i==null?void 0:i.map(({erSøktYtelse:l})=>l).includes(!0));return HT(n,r,t,s)},JT=e=>{var n,r;const t=((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.arbeidsforholdTilFordeling)||[];return YT(UT,e.avklaringsbehov)?zT(t):[]},WT=({isAksjonspunktClosed:e,beregningsgrunnlag:n})=>{const r=JT(n);return e?v.jsx(v.Fragment,{}):v.jsx(ar,{children:r})},{FORDEL_BEREGNINGSGRUNNLAG:Bi}=Le,ZT=(e,n)=>n.some(r=>r.definisjon===e),jm=e=>{const n=e.find(r=>r.definisjon===Bi);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${Bi}`);return n},XT="begrunnelse",hm=e=>{var n,r;return((r=(n=e.faktaOmFordeling)==null?void 0:n.fordelBeregningsgrunnlag)==null?void 0:r.fordelBeregningsgrunnlagPerioder)||[]},QT=(e,n)=>{if(!ZT(Bi,n.avklaringsbehov))throw Error("har ikke aksjonspunkt for fordeling når transform values ble kalt");const r=n.beregningsgrunnlagPeriode;return{begrunnelse:e.begrunnelse,periode:e.periode,...qt.transformValues(e,hm(n),r,n.forlengelseperioder)}},eR=(e,n,r,t)=>{const s=hm(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,...Et.buildInitialValues(jm(e.avklaringsbehov),XT),...qt.buildInitialValues(s,e,t,r)}},nR=({readOnly:e,submittable:n,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i})=>{const l=jm(r.avklaringsbehov),o=!Sl(l.status),g=Ie(),m=g.watch(`FORDEL_BEREGNING_FORM.${i}.begrunnelse`);return v.jsxs(v.Fragment,{children:[v.jsx(WT,{isAksjonspunktClosed:o,beregningsgrunnlag:r}),v.jsx(x,{twentyPx:!0}),v.jsx(qt,{readOnly:e,isAksjonspunktClosed:o,beregningsgrunnlag:r,kodeverkSamling:t,arbeidsgiverOpplysningerPerId:s,fieldIndex:i}),v.jsx(x,{twentyPx:!0}),v.jsx(Et,{name:`FORDEL_BEREGNING_FORM.${i}.begrunnelse`,isSubmittable:n,isReadOnly:e,hasBegrunnelse:!!m}),v.jsx(qn,{ident:l.vurdertAv,date:l.vurdertTidspunkt}),v.jsx(x,{twentyPx:!0}),v.jsx(Ns,{isSubmittable:n,isReadOnly:e,isSubmitting:g.formState.isSubmitting,isDirty:g.formState.isDirty})]})},{FORDEL_BEREGNINGSGRUNNLAG:rR}=Le,ls="FORDEL_BEREGNING_FORM",tR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},sR=(e,n,r)=>{const t=e[ls].filter(s=>mr(r,s.periode.fom)).map(s=>QT(s,tR(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:rR}};function Am(e){return e.avklaringsbehov.some(n=>n.definisjon===Le.FORDEL_BEREGNINGSGRUNNLAG)}const aR=(e,n,r,t)=>({[ls]:e.filter(Am).map(s=>eR(s,Tt(n,s.vilkårsperiodeFom),r,t))}),iR=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submittable:r,submitCallback:t,beregningsgrunnlagListe:s,vilkårsperioder:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,setFordelingFormIsDirty:p})=>{const y=Ce({defaultValues:g!=null&&g.FORDEL_BEREGNING_FORM?g:aR(s,i,o,l)}),{formState:{dirtyFields:f,isSubmitted:b,errors:c,isDirty:N},control:h,trigger:E}=y;A.useEffect(()=>{p(N)},[N]),A.useEffect(()=>{var S;b&&(S=f[ls])!=null&&S[e]&&E()},[e]);const{fields:R}=nn({name:ls,control:h});return v.jsx(Ji,{errorMessage:"Noe gikk galt ved visning av fordeling",children:v.jsx(ze,{formMethods:y,onSubmit:S=>{Object.keys(c).length===0&&t(sR(S,s,i))},setDataOnUnmount:m,children:R.map(S=>{const q=s.findIndex(B=>B.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp);return v.jsx("div",{style:{display:q===e?"block":"none"},children:v.jsx(nR,{submittable:r,readOnly:n||!mr(i,s[q].vilkårsperiodeFom),beregningsgrunnlag:s[q],arbeidsgiverOpplysningerPerId:o,kodeverkSamling:l,fieldIndex:s.filter(Am).findIndex(B=>B.skjaeringstidspunktBeregning===S.beregningsgrunnlagStp)})},S.id)})})})},lR=(e,n)=>e.map(r=>v.jsx("div",{children:r&&r.erTildeltRefusjon?v.jsx(T,{children:n}):v.jsx(T,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Direkteutbetaling"})})},`${n}_(${r.fom}_(${r.erTildeltRefusjon})`)),dR=e=>{if(!e)return;const n=e.tom===Be?void 0:e.tom;return v.jsx(T,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Periode",values:{fom:Ve(e.fom),tom:n?Ve(n):""}})})},oR=e=>e.map(n=>v.jsx("div",{children:dR(n)},`${n.fom}_(${n.erTildeltRefusjon})`)),gR=({refusjonAndel:e,arbeidsgiverOpplysningerPerId:n})=>v.jsxs(j.Row,{children:[v.jsx(j.DataCell,{children:v.jsx(T,{children:Pi(e,n)})}),v.jsx(j.DataCell,{children:lR(e.tidligereUtbetalinger||[],Pi(e,n))}),v.jsx(j.DataCell,{children:oR(e.tidligereUtbetalinger||[])})]}),uR="_tabellContainer_9a5fi_1",kR={tabellContainer:uR},mR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,pR=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n})=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[];return v.jsx("div",{className:kR.tabellContainer,children:v.jsxs(j,{children:[v.jsx(j.Header,{children:v.jsxs(j.Row,{children:[v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Aktivitet"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.TidligereUtb"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.GjeldendeFra"})})]})}),v.jsx(j.Body,{children:t.map(s=>v.jsx(gR,{arbeidsgiverOpplysningerPerId:n,refusjonAndel:s},mR(s)))})]})})},vR="_bredde_1lhuf_1",yR="_tekstMidtstilt_1lhuf_4",ui={bredde:vR,tekstMidtstilt:yR},fR="REFUSJON_ENDRING_DATO",bR="DELVIS_REFUSJON_FØR_START_BELØP",Im=(e,n)=>n.arbeidsgiver?n.arbeidsgiver.arbeidsgiverOrgnr?`${e}${n.arbeidsgiver.arbeidsgiverOrgnr}${n.internArbeidsforholdRef}`:`${e}${n.arbeidsgiver.arbeidsgiverAktørId}${n.internArbeidsforholdRef}`:`${e}${n.aktivitetStatus}${n.internArbeidsforholdRef})`,ds=e=>Im(fR,e),Fl=e=>Im(bR,e),cR=(e,n)=>n?new Date(n).getTime()===new Date(e).getTime():!1,xt=({refusjonAndel:e,readOnly:n,erAksjonspunktÅpent:r,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:s,vilkårperiodeFieldIndex:i})=>{const l=Pi(e,t),o=e.skalKunneFastsetteDelvisRefusjon?"BeregningInfoPanel.RefusjonBG.TidligereRefusjon":"BeregningInfoPanel.RefusjonBG.IngenTidligereRefusjon",g=Ie().watch(`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${ds(e)}`),m=!r&&!e.fastsattDelvisRefusjonPrMnd&&e.fastsattDelvisRefusjonPrMnd!==0,p=cR(s,g),y=A.useCallback(b=>v.jsx("b",{children:b}),[]),f=e.skalKunneFastsetteDelvisRefusjon&&e.maksTillattDelvisRefusjonPrMnd;return v.jsxs(Q,{children:[v.jsx(T,{children:v.jsx(k,{id:o,values:{ag:l,dato:Ve(e.nyttRefusjonskravFom),b:y}})}),v.jsxs(C,{gap:"6",children:[v.jsx("div",{className:ui.tekstMidtstilt,children:v.jsx(T,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.RefusjonFra"})})}),v.jsx(Qn,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${ds(e)}`,isReadOnly:n,validate:n?[]:[X,In,ks(e.tidligsteMuligeRefusjonsdato)],isEdited:!!e.fastsattNyttRefusjonskravFom&&!r})]}),f&&!p&&!m&&v.jsxs(C,{gap:"6",children:[v.jsx("div",{className:ui.tekstMidtstilt,children:v.jsx(T,{children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.DelvisPrMnd"})})}),v.jsx(ce,{name:`VURDER_REFUSJON_BERGRUNN_FORM.${i}.${Fl(e)}`,className:ui.bredde,validate:n?[]:[X,rn(e.maksTillattDelvisRefusjonPrMnd)],parse:Oe,readOnly:n,isEdited:!!e.fastsattDelvisRefusjonPrMnd&&!r})]})]})};xt.buildInitialValues=e=>{const n={};return n[ds(e)]=e.fastsattNyttRefusjonskravFom||"",n[Fl(e)]=G(e.fastsattDelvisRefusjonPrMnd)||"",n};xt.transformValues=(e,n,r)=>{var t,s;const i=ds(n),l=e[i];let o;if(n.skalKunneFastsetteDelvisRefusjon&&l!==r){const g=Fl(n);o=ye(e[g])}return{arbeidsgiverOrgnr:(t=n.arbeidsgiver)==null?void 0:t.arbeidsgiverOrgnr,arbeidsgiverAktoerId:(s=n.arbeidsgiver)==null?void 0:s.arbeidsgiverAktørId,internArbeidsforholdRef:n.internArbeidsforholdRef,fastsattRefusjonFom:l,delvisRefusjonPrMndFørStart:o}};const Og="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:jR}=Le,Tm=e=>e?e.find(n=>n.definisjon===jR):void 0,hR=e=>e.arbeidsgiver?e.arbeidsgiver.arbeidsgiverAktørId?`${e.arbeidsgiver.arbeidsgiverAktørId}${e.internArbeidsforholdRef})`:`${e.arbeidsgiver.arbeidsgiverOrgnr}${e.internArbeidsforholdRef})`:`${e.aktivitetStatus}${e.internArbeidsforholdRef})`,AR=(e,n)=>{var r;const t=((r=e.refusjonTilVurdering)==null?void 0:r.andeler)||[],s=Tm(e.avklaringsbehov);let i={beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,periode:n.periode,begrunnelse:s&&s.begrunnelse?s.begrunnelse:void 0};return t.forEach(l=>{i={...i,...xt.buildInitialValues(l)}}),i},IR=(e,n)=>{var r;const t=(((r=n.refusjonTilVurdering)==null?void 0:r.andeler)||[]).map(s=>xt.transformValues(e,s,n.skjaeringstidspunktBeregning));return{periode:e.periode,begrunnelse:e.begrunnelse,fastsatteAndeler:t}},TR=({submittable:e,readOnly:n,beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t,vilkårperiodeFieldIndex:s,formSubmittes:i})=>{var l;const o=!r.avklaringsbehov.some(b=>b.definisjon===Le.VURDER_REFUSJON_BERGRUNN),g=((l=r.refusjonTilVurdering)==null?void 0:l.andeler)||[],m=Tm(r.avklaringsbehov),p=m?Sl(m.status):!1,y=Ie(),f=y.watch(`VURDER_REFUSJON_BERGRUNN_FORM.${s}.begrunnelse`);return v.jsxs(v.Fragment,{children:[p&&v.jsx(ar,{children:[v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Aksjonspunkt"},"aksjonspunktText")]}),v.jsx(x,{sixteenPx:!0}),v.jsx(se,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.RefusjonBG.Tittel"})}),v.jsx(x,{sixteenPx:!0}),v.jsx(pR,{beregningsgrunnlag:r,arbeidsgiverOpplysningerPerId:t}),v.jsx(x,{sixteenPx:!0}),g.map(b=>v.jsx(xt,{refusjonAndel:b,readOnly:o||n,erAksjonspunktÅpent:p,arbeidsgiverOpplysningerPerId:t,skjæringstidspunkt:r.skjaeringstidspunktBeregning,formName:Og,vilkårperiodeFieldIndex:s},hR(b))),v.jsx(x,{twentyPx:!0}),v.jsx(Et,{name:`${Og}.${s}.begrunnelse`,isSubmittable:e,isReadOnly:o||n,hasBegrunnelse:!!f}),v.jsx(qn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),v.jsx(x,{twentyPx:!0}),v.jsx(Ns,{isSubmittable:e,isReadOnly:o||n,isSubmitting:i,isDirty:y.formState.isDirty}),v.jsx(x,{sixteenPx:!0})]})},os="VURDER_REFUSJON_BERGRUNN_FORM",{VURDER_REFUSJON_BERGRUNN:RR}=Le,ER=(e,n)=>({[os]:e.map(r=>AR(r,Tt(n,r.vilkårsperiodeFom)))}),NR=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r},SR=(e,n)=>n.filter(r=>r.skjaeringstidspunktBeregning===e).some(r=>r.avklaringsbehov.some(t=>t.definisjon==="VURDER_REFUSJONSKRAV")),qR=(e,n,r)=>{const t=e[os].filter(s=>mr(r,s.periode.fom)).filter(s=>SR(s.beregningsgrunnlagStp,n)).map(s=>IR(s,NR(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:RR}},xR=({aktivtBeregningsgrunnlagIndeks:e,submittable:n,readOnly:r,beregningsgrunnlagListe:t,vilkarperioder:s,arbeidsgiverOpplysningerPerId:i,setFormData:l,formData:o,submitCallback:g,setRefusjonFormIsDirty:m})=>{const p=Ce({defaultValues:o!=null&&o.VURDER_REFUSJON_BERGRUNN_FORM?o:ER(t,s)}),[y,f]=A.useState(!1),{formState:{dirtyFields:b,isSubmitted:c,errors:N,isDirty:h},control:E,trigger:R}=p;A.useEffect(()=>{m(h)},[h]),A.useEffect(()=>{var q;c&&(q=b[os])!=null&&q[e]&&R()},[e]);const{fields:S}=nn({name:os,control:E});return v.jsx(Ji,{errorMessage:"Noe gikk galt ved visning av refusjon",children:v.jsx(ze,{formMethods:p,onSubmit:q=>{Object.keys(N).length===0&&(f(!0),g(qR(q,t,s)))},setDataOnUnmount:l,children:S.map(q=>{const B=t.findIndex(w=>w.skjaeringstidspunktBeregning===q.beregningsgrunnlagStp);return v.jsx("div",{style:{display:B===e?"block":"none"},children:v.jsx(TR,{submittable:n,readOnly:r||!mr(s,t[B].vilkårsperiodeFom),beregningsgrunnlag:t[B],arbeidsgiverOpplysningerPerId:i,vilkårperiodeFieldIndex:B,formSubmittes:y})},q.id)})})})};var Fi={exports:{}},PR=Fi.exports,Dg;function BR(){return Dg||(Dg=1,function(e,n){(function(r,t){e.exports=t()})(PR,function(){return function(r,t,s){t.prototype.isBetween=function(i,l,o,g){var m=s(i),p=s(l),y=(g=g||"()")[0]==="(",f=g[1]===")";return(y?this.isAfter(m,o):!this.isBefore(m,o))&&(f?this.isBefore(p,o):!this.isAfter(p,o))||(y?this.isBefore(m,o):!this.isAfter(m,o))&&(f?this.isAfter(p,o):!this.isBefore(p,o))}}})}(Fi)),Fi.exports}var FR=BR();const Rm=am(FR),wg=e=>e===Be?"":I(e).format(te),_R=({periode:e,forhåndsvisPeriodesplitt:n,setValgtDato:r})=>{const t=W(),[s,i]=A.useState(),l=A.useCallback(p=>{const y=I(p).format(Pe);if(r(y),y){const f=n(y);f.sort((b,c)=>I(b.fom).diff(I(c.fom))),i(f)}},[n]),o=[p=>!e||!I(p).isAfter(I(e.fom))||I(p).isAfter(I(e.tom))],{datepickerProps:g,inputProps:m}=bv({today:new Date(e.fom),disableWeekends:!0,disabled:o,onDateChange:l});return v.jsxs(v.Fragment,{children:[v.jsx(Ql,{...g,children:v.jsx(Ql.Input,{...m,label:t.formatMessage({id:"TilkommetAktivitet.Modal.DatoValg"}),size:"small"})}),s&&v.jsxs("div",{children:[v.jsx(F,{size:"small",children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Resultat"})}),v.jsxs("ul",{children:[v.jsx("li",{children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:I(s[0].fom).format(te),tom:wg(s[0].tom)}})}),v.jsx("li",{children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Periode",values:{fom:I(s[1].fom).format(te),tom:wg(s[1].tom)}})})]})]})]})},OR=e=>e?e.tom===Be?!0:Su(e.fom,e.tom,!0)>1:!1,DR=e=>e.map(n=>({fom:n.fom,tom:n.tom})),wR=(e,n)=>{const r=I(e).format(te);if(n&&n!==Be){const t=I(n).format(te);return r.concat(" - ",t)}return r.concat(" - ")},VR=({fields:e,forhåndsvisPeriodesplitt:n,utførPeriodesplitt:r,skalViseModal:t,lukkModal:s})=>{const i=W(),[l,o]=A.useState(void 0),[g,m]=A.useState(void 0),p=A.useMemo(()=>DR(e),[e]),y=A.useCallback(()=>{l&&g&&(r(l),s())},[e,l]),f=A.useCallback(c=>{const N=c.target.value,h=p.find(E=>E.fom===N);m(h||void 0)},[]),b=g&&OR(g);return t?v.jsxs(Ft,{width:"500px",open:t,onClose:s,"aria-label":"Del opp periode",children:[v.jsx(Ft.Header,{children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Tittel"})}),v.jsx(Ft.Body,{children:v.jsxs(Q,{gap:"4",children:[v.jsxs(fv,{label:i.formatMessage({id:"TilkommetAktivitet.Modal.Select"}),onChange:f,size:"small",children:[v.jsx("option",{value:void 0,children:"Velg periode"}),p.map(c=>v.jsx("option",{value:c.fom,children:wR(c.fom,c.tom)},c.fom))]}),b&&v.jsx(_R,{forhåndsvisPeriodesplitt:n,periode:g,setValgtDato:o})]})}),v.jsxs(Ft.Footer,{children:[v.jsx(ae,{size:"small",variant:"secondary",onClick:s,disabled:!1,autoFocus:!0,type:"button",children:v.jsx(k,{id:"TilkommetAktivitet.Modal.AvbrytKnapp"})}),v.jsx(ae,{size:"small",variant:"primary",onClick:y,disabled:!l,autoFocus:!0,type:"button",children:v.jsx(k,{id:"TilkommetAktivitet.Modal.DelOppKnapp"})})]})]}):null};I.extend(Rm);const MR="2023-05-01";function GR(){return(e,n,r)=>r.findIndex(t=>t.skalRedusereUtbetaling===e.skalRedusereUtbetaling&&t.arbeidsforholdId===e.arbeidsforholdId&&t.arbeidsgiverId===e.arbeidsgiverId&&t.aktivitetStatus===e.aktivitetStatus&&t.bruttoInntektPrÅr===e.bruttoInntektPrÅr)===n}const LR=(e,n)=>{const r=e.pop();if(!r)return;const t=r.inntektsforholdListe?[...r.inntektsforholdListe]:[];n.inntektsforholdListe.forEach(i=>t.push(i));const s={...r,inntektsforholdListe:t.filter(GR()),tom:n.tom};e.push(s)},KR=(e,n)=>{const r=e.inntektsforholdListe||[],t=n.inntektsforholdListe||[];for(let s=0;s<r.length;s+=1){const i=r[s],l=t.find(o=>o.aktivitetStatus===i.aktivitetStatus&&o.arbeidsgiverId===i.arbeidsgiverId&&o.arbeidsforholdId===i.arbeidsforholdId);if(l===void 0)return!0;if(l.bruttoInntektPrÅr!==i.bruttoInntektPrÅr||l.skalRedusereUtbetaling!==i.skalRedusereUtbetaling)return!1}return!0},Vg=(e,n)=>Su(e,n,!0)>2,$R=(e,n)=>{const r=n.tom,t=e.fom;return I(r).isBefore(I(t))?Vg(r,t):Vg(t,r)},UR=(e,n,r)=>{if(I(e.fom).isSame(I(MR)))return!1;const t=n[n.length-1],s=Rn(e,r);return s&&!Rn(t,r)||s&&$R(e,t)?!1:KR(e,t)},YR=e=>(n,r)=>n.length===0?(n.push({...r}),n):UR(r,n,e)?(LR(n,r),n):(n.push({...r}),n),Em=(e,n)=>e.reduce(YR(n),[]);function Nm(e,n){var r;return!Rn(e,n.forlengelseperioder)&&!!e.inntektsforholdListe&&((r=e.inntektsforholdListe)==null?void 0:r.every(t=>t.skalRedusereUtbetaling!==null))}const Sm=(e,n)=>{let r=null;return e.arbeidsgiverId!==null&&e.arbeidsgiverId!==void 0&&(r=n[e.arbeidsgiverId]),e.aktivitetStatus===pe.ARBEIDSTAKER?r?Nt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===pe.FRILANSER?"Frilanser":e.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":e.aktivitetStatus===pe.DAGPENGER?"Dagpenger":""},HR=(e,n)=>{let r=null;return e.arbeidsgiverIdent&&(r=n[e.arbeidsgiverIdent]),e.aktivitetStatus===pe.ARBEIDSTAKER?r?Nt(r,e.arbeidsforholdId):"Arbeidsforhold":e.aktivitetStatus===pe.FRILANSER?"Frilanser":e.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?"Selvstendig næringsdrivende":""},CR="_tilkommetAktivitet_1xjj3_1",zR="_aktivitetContainer_1xjj3_4",JR="_aktivitetTable_1xjj3_7",WR="_aksjonspunktContainer_1xjj3_16",ZR="_aksjonspunktContainerLukketAP_1xjj3_21",XR="_bruttoInntektContainer_1xjj3_26",QR="_bruttoInntektInput_1xjj3_29",eE="_bruttoInntektCurrency_1xjj3_32",nE="_inntektsmeldingTag_1xjj3_40",rE="_inntektColumn_1xjj3_43",$e={tilkommetAktivitet:CR,aktivitetContainer:zR,aktivitetTable:JR,aksjonspunktContainer:WR,aksjonspunktContainerLukketAP:ZR,bruttoInntektContainer:XR,bruttoInntektInput:QR,bruttoInntektCurrency:eE,inntektsmeldingTag:nE,inntektColumn:rE},tE=e=>{if(!e)return"";let n=e.aktivitetStatus;return e.arbeidsgiverId&&(n+=e.arbeidsgiverId),e.arbeidsforholdId&&(n+=e.arbeidsforholdId),n},sE=({formName:e,formFieldIndex:n,periodeFieldIndex:r,readOnly:t,inntektsforholdFieldIndex:s,field:i,arbeidsgiverOpplysningerPerId:l})=>{const o=Ie(),g=W(),m=o.watch(`${e}.${n}.perioder.${r}.inntektsforhold.${s}.skalRedusereUtbetaling`),p=()=>{switch(i.aktivitetStatus){case pe.ARBEIDSTAKER:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid",values:{br:v.jsx("br",{})}});case pe.FRILANSER:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerFrilans",values:{br:v.jsx("br",{})}});case pe.SELVSTENDIG_NAERINGSDRIVENDE:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerNæring"});default:return v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMerArbeid"})}},y=()=>i.aktivitetStatus===pe.SELVSTENDIG_NAERINGSDRIVENDE?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstNæring"}):i.aktivitetStatus===pe.FRILANSER?g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstFrilans"}):g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.VurderTekstArbeid"},{arbeidsforhold:HR(i,l)});return v.jsxs(v.Fragment,{children:[v.jsx(Ne,{label:y(),name:`${e}.${n}.perioder.${r}.inntektsforhold.${s}.skalRedusereUtbetaling`,radios:[{value:"true",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"})},{value:"false",label:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})}],isReadOnly:t,validate:[X],isTrueOrFalseSelection:!0}),m===!1&&v.jsxs(v.Fragment,{children:[v.jsx(x,{sixteenPx:!0}),v.jsx(Ee,{size:"small",variant:"info",children:g.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Alert"})})]}),m&&v.jsxs(v.Fragment,{children:[v.jsx(x,{sixteenPx:!0}),v.jsx(F,{size:"small",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Fastsett"})}),v.jsx(xe,{header:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.LesMer"}),children:p()}),v.jsx(x,{eightPx:!0}),v.jsxs("div",{className:$e.bruttoInntektContainer,children:[v.jsx(ce,{name:`${e}.${n}.perioder.${r}.inntektsforhold.${s}.bruttoInntektPrÅr`,label:"Fastsett årsinntekt",hideLabel:!0,readOnly:t,className:$e.bruttoInntektInput,parse:Oe,validate:[X,rn(178956970)]}),v.jsx("span",{className:$e.bruttoInntektCurrency,children:"kr"})]})]})]})},Mg=e=>!!e&&+e>0,aE=({arbeidsgiverOpplysningerPerId:e,vurderInntektsforholdPeriode:n})=>{const r=W(),t=i=>{const l=[];return i.inntektsforholdListe.forEach(o=>{const g=Mg(o.bruttoInntektPrÅr),m=Mg(o.inntektFraInntektsmeldingPrÅr);l.push(v.jsxs(j.Row,{children:[v.jsx(j.DataCell,{children:v.jsx(T,{size:"small",children:Sm(o,e)})}),v.jsx(j.DataCell,{children:v.jsx(T,{size:"small",children:o.skalRedusereUtbetaling?r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Ja"}):r.formatMessage({id:"BeregningInfoPanel.TilkommetAktivitet.Nei"})})}),(g||m)&&v.jsx(j.DataCell,{children:v.jsxs(T,{size:"small",children:[g&&v.jsxs(v.Fragment,{children:[Wt(o.bruttoInntektPrÅr||0),v.jsx(it,{})]}),m&&!g&&v.jsxs(v.Fragment,{children:[Wt(o.inntektFraInntektsmeldingPrÅr||0),v.jsx(bs,{className:$e.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})})]},tE(o)))}),l},s=n.inntektsforholdListe.some(i=>i.bruttoInntektPrÅr);return v.jsx("div",{className:$e.aktivitetContainer,children:v.jsxs(j,{className:$e.aktivitetTable,children:[v.jsx(j.Header,{children:v.jsxs(j.Row,{children:[v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.RedusererUtbetaling"})}),s&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!s&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),v.jsx(j.Body,{children:t(n)})]})})},Mt=e=>!!e&&+e>0,iE=({formName:e,vurderInntektsforholdPeriode:n,formFieldIndex:r,periodeFieldIndex:t,readOnly:s,erAksjonspunktÅpent:i,submittable:l,arbeidsgiverOpplysningerPerId:o,skalViseBegrunnelse:g,avklaringsbehov:m})=>{const{control:p,formState:y}=Ie(),{fields:f}=nn({control:p,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder.${t}.inntektsforhold`}),b=n.inntektsforholdListe.some(h=>Mt(h.bruttoInntektPrÅr)||Mt(h.inntektFraInntektsmeldingPrÅr)),c=n.inntektsforholdListe.some(h=>!!h.periode),N=h=>{const E=[],{inntektsforholdListe:R}=h;return R.forEach(S=>{const q=Mt(S.bruttoInntektPrÅr),B=Mt(S.inntektFraInntektsmeldingPrÅr);E.push(v.jsxs(j.Row,{children:[v.jsx(j.DataCell,{children:v.jsx(T,{size:"small",children:Sm(S,o)})}),(q||B||c)&&v.jsx(j.DataCell,{className:$e.inntektColumn,children:v.jsxs(T,{size:"small",children:[q&&!B&&v.jsxs(v.Fragment,{children:[Wt(S.bruttoInntektPrÅr||0),v.jsx(it,{})]}),B&&v.jsxs(v.Fragment,{children:[Wt(S.inntektFraInntektsmeldingPrÅr||0),v.jsx(bs,{className:$e.inntektsmeldingTag,variant:"neutral",size:"xsmall",children:"IM"})]})]})}),S.periode&&v.jsx(j.DataCell,{className:$e.periodeColumn,children:v.jsx(T,{size:"small",children:v.jsx(Ue,{dateStringFom:S.periode.fom,dateStringTom:S.periode.tom})})})]},S.arbeidsgiverId||S.aktivitetStatus))}),E};return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:$e.aktivitetContainer,children:v.jsxs(j,{className:$e.aktivitetTable,children:[v.jsx(j.Header,{children:v.jsxs(j.Row,{children:[v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Aktivitet"})}),b&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Årsinntekt"})}),!b&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})}),c&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.Periode"})}),!c&&v.jsx(j.HeaderCell,{scope:"col",children:v.jsx(k,{id:"BeregningInfoPanel.TilkommetAktivitet.TomTekst"})})]})}),v.jsx(j.Body,{children:N(n)})]})}),v.jsx(x,{sixteenPx:!0}),v.jsxs("div",{className:i?$e.aksjonspunktContainer:$e.aksjonspunktContainerLukketAP,children:[f.map((h,E)=>v.jsxs("div",{children:[v.jsx(sE,{formName:e,formFieldIndex:r,periodeFieldIndex:t,inntektsforholdFieldIndex:E,field:h,readOnly:s,arbeidsgiverOpplysningerPerId:o},h.id),E<n.inntektsforholdListe.length-1&&v.jsx(x,{fourtyPx:!0})]},h.id)),g&&v.jsxs(v.Fragment,{children:[v.jsx(x,{fourtyPx:!0}),v.jsx(en,{name:`${e}.${r}.begrunnelse`,label:"Begrunnelse",readOnly:s,validate:[X]}),v.jsx(qn,{ident:m==null?void 0:m.vurdertAv,date:m==null?void 0:m.vurdertTidspunkt}),v.jsx(x,{sixteenPx:!0}),v.jsx(Ns,{isSubmittable:l,isReadOnly:s,isSubmitting:y.isSubmitting,isDirty:y.isDirty})]})]})]})},lE="_statusOk_1qsx9_1",Gg={statusOk:lE},ki=e=>e?I(e,Pe).format(te):"-",Lg=(e,n)=>!n||n===Be?v.jsx(F,{size:"medium",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFom",values:{fom:ki(e)}})}):v.jsx(F,{size:"medium",children:v.jsx(k,{id:"BeregningInfoPanel.FordelBG.PeriodeFomOgTom",values:{fom:ki(e),tom:ki(n)}})}),dE=({beregningsgrunnlag:e,arbeidsgiverOpplysningerPerId:n,formName:r,formFieldIndex:t,readOnly:s,submittable:i,erAksjonspunktÅpent:l,fields:o})=>{const[g,m]=A.useState([]),[p,y]=A.useState([]),[f,b]=A.useState([]),c=Ie();A.useEffect(()=>{var q,B;const w=(B=(q=e.faktaOmFordeling)==null?void 0:q.vurderNyttInntektsforholdDto)==null?void 0:B.vurderInntektsforholdPerioder;if(w){const _=Em(w,e.forlengelseperioder);m(_);const H=p.map(O=>O),z=o.map(O=>O.fom);z.filter(O=>!f.includes(O)).forEach(O=>H.push(O)),y(H),b(z)}},[e,o.length]);const N=g.filter(q=>Nm(q,e)),h=e==null?void 0:e.avklaringsbehov.find(q=>q.definisjon===Le.VURDER_NYTT_INNTKTSFRHLD),E=q=>{if(p.includes(q)){const B=p.filter(w=>w!==q);y(B)}else{const B=p.map(w=>w);B.push(q),y(B)}},R=q=>{const B=I(q),w=g.find(_=>!I(_.fom).isAfter(B)&&!I(_.tom).isBefore(B));if(!w)throw new Error(`Finner ikke periode som overlapper med fom ${q}`);return w},S=q=>()=>E(q);return!g||g.length<1?null:v.jsxs(v.Fragment,{children:[v.jsxs(qe,{className:Gg.statusOk,children:[N.map(q=>v.jsxs(qe.Item,{open:p.filter(B=>B===q.fom).length>0,children:[v.jsxs(qe.Header,{onClick:S(q.fom),children:[Lg(q.fom,q.tom)," ",v.jsx(lm,{})]}),v.jsx(qe.Content,{children:v.jsx(aE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:q})})]},q.fom)),o.map((q,B)=>v.jsxs(qe.Item,{open:p.filter(w=>w===q.fom).length>0,children:[v.jsx(qe.Header,{onClick:S(q.fom),children:Lg(q.fom,q.tom)}),v.jsx(qe.Content,{children:v.jsx(iE,{arbeidsgiverOpplysningerPerId:n,vurderInntektsforholdPeriode:R(q.fom),formName:r,formFieldIndex:t,periodeFieldIndex:B,readOnly:s,erAksjonspunktÅpent:l,submittable:i,skalViseBegrunnelse:o.length===1,avklaringsbehov:h})})]},q.fom))]}),o.length>1&&v.jsxs("div",{className:Gg.aktivitetContainer,children:[v.jsx(x,{fourtyPx:!0}),v.jsx(en,{name:`${r}.${t}.begrunnelse`,label:"Begrunnelse for alle perioder",readOnly:s,validate:[X]}),v.jsx(qn,{ident:h==null?void 0:h.vurdertAv,date:h==null?void 0:h.vurdertTidspunkt}),v.jsx(x,{sixteenPx:!0}),v.jsx(Ns,{isSubmittable:i,isReadOnly:s,isSubmitting:c.formState.isSubmitting,isDirty:c.formState.isDirty})]})]})},mi=(e,n)=>n==null?void 0:n.some(r=>r.inntektsforholdListe.some(t=>t.aktivitetStatus===e)),oE=({formName:e,beregningsgrunnlag:n,formFieldIndex:r,readOnly:t,submittable:s,erAksjonspunktÅpent:i,arbeidsgiverOpplysningerPerId:l})=>{var o,g;const m=W(),[p,y]=A.useState(!1),{control:f,watch:b}=Ie(),{fields:c,remove:N,insert:h}=nn({control:f,name:`VURDER_TILKOMMET_AKTIVITET_FORM.${r}.perioder`});c.sort((O,L)=>I(O.fom).diff(I(L.fom)));const E=(g=(o=n.faktaOmFordeling)==null?void 0:o.vurderNyttInntektsforholdDto)==null?void 0:g.vurderInntektsforholdPerioder,R=()=>{const O=E==null?void 0:E.flatMap(L=>L.inntektsforholdListe.map(V=>V.aktivitetStatus)).reduce((L,V)=>(L.some(U=>U===V)||L.push(V),L),[]);return(O?O.length:0)>1?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.FlereStatuser"}):mi(pe.SELVSTENDIG_NAERINGSDRIVENDE,E)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende"}):mi(pe.FRILANSER,E)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Frilans"}):mi(pe.DAGPENGER,E)?m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Dagpenger"}):m.formatMessage({id:"TilkommetAktivitet.AlertHeading.Arbeidsforhold"})},S=()=>i?v.jsxs(Ee,{size:"small",variant:"warning",children:[v.jsx(se,{size:"xsmall",level:"3",children:R()}),m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})]}):v.jsxs(v.Fragment,{children:[v.jsxs(F,{size:"small",children:[m.formatMessage({id:"HelpText.Aksjonspunkt.BehandletAksjonspunkt"}),R()]}),v.jsx(T,{size:"small",children:m.formatMessage({id:"TilkommetAktivitet.AksjonspunktHelpText"})})]}),q=(O,L,V,U)=>{const re=b(`${e}.${r}.perioder.${V}.inntektsforhold.${U}.skalRedusereUtbetaling`),J=b(`${e}.${r}.perioder.${V}.inntektsforhold.${U}.bruttoInntektPrÅr`);return{aktivitetStatus:O.aktivitetStatus,arbeidsgiverIdent:O.arbeidsgiverIdent,arbeidsforholdId:O.arbeidsforholdId,bruttoInntektPrÅr:L?J:void 0,skalRedusereUtbetaling:L?re:void 0}},B=(O,L,V)=>!I(O).isAfter(I(V))&&!I(L).isBefore(I(V)),w=A.useCallback(O=>{const L=c.find(J=>B(J.fom,J.tom,O));if(!L)throw new Error(`Finner ikke field somme inneholder dato ${O}`);const V=I(O).subtract(1,"day"),U={fom:I(L.fom).format(Pe),tom:V.format(Pe)},re={fom:I(O).format(Pe),tom:L.tom};return[U,re]},[c]),_=A.useCallback(O=>{const L=c.find(Re=>B(Re.fom,Re.tom,O));if(!L)throw new Error(`Finner ikke field somme inneholder dato ${O}`);const V=w(O),U=c.indexOf(L),re=L.inntektsforhold||[],J={inntektsforhold:re.map((Re,Fe)=>q(Re,!0,U,Fe)),fom:V[0].fom,tom:V[0].tom},ie={inntektsforhold:re.map((Re,Fe)=>q(Re,!1,U,Fe)),fom:V[1].fom,tom:V[1].tom};N(U),h(U,[J,ie])},[c]),H=A.useCallback(()=>{y(!0)},[p]),z=A.useCallback(()=>{y(!1)},[p]);return v.jsxs(Q,{gap:"8",children:[S(),!!E&&i&&v.jsx(v.Fragment,{children:v.jsx(Ee,{size:"small",variant:"info",title:"",children:v.jsx(k,{id:"TilkommetAktivitet.AksjonspunktAlert"})})}),v.jsxs(Q,{gap:"0",children:[v.jsxs(C,{justify:"space-between",children:[v.jsx(se,{size:"small",level:"3",children:v.jsx(k,{id:"TilkommetAktivitet.Heading"})}),v.jsx(ae,{variant:"tertiary",loading:!1,disabled:t,onClick:H,size:"small",type:"button",icon:v.jsx(qv,{height:32,width:32}),children:v.jsx(k,{id:"TilkommetAktivitet.Modal.Knapp"})})]}),p&&v.jsx(VR,{fields:c,forhåndsvisPeriodesplitt:w,lukkModal:z,skalViseModal:p,utførPeriodesplitt:_}),v.jsx(dE,{beregningsgrunnlag:n,arbeidsgiverOpplysningerPerId:l,formName:e,fields:c,formFieldIndex:r,readOnly:t,erAksjonspunktÅpent:i,submittable:s})]})]})};I.extend(Rm);const{VURDER_NYTT_INNTKTSFRHLD:_i}=Le,Zr="VURDER_TILKOMMET_AKTIVITET_FORM",qm=e=>{const n=e.find(r=>r.definisjon===_i);if(!n)throw Error(`Fant ikke forventet avklaringsbehov ${_i}`);return n},gE=(e,n)=>{const r=n.find(t=>t.vilkårsperiodeFom===e);if(!r)throw Error(`Mangler beregningsgrunnlag for vilkårsperiodeFom ${e}`);return r};function uE(e){var n,r;const t=(r=(n=e.faktaOmFordeling)==null?void 0:n.vurderNyttInntektsforholdDto)==null?void 0:r.vurderInntektsforholdPerioder;if(!t)throw Error("vurderInntektsforholdPerioder skal være definert");return Em(t,e.forlengelseperioder).filter(s=>!Nm(s,e))}const kE=e=>({aktivitetStatus:e.aktivitetStatus,arbeidsgiverIdent:e.arbeidsgiverId,arbeidsforholdId:e.arbeidsforholdId,bruttoInntektPrÅr:G(e.bruttoInntektPrÅr),skalRedusereUtbetaling:e.skalRedusereUtbetaling}),mE=e=>({fom:e.fom,tom:e.tom,inntektsforhold:e.inntektsforholdListe.map(n=>kE(n))}),pE=(e,n)=>{const r=qm(e.avklaringsbehov),t=uE(e);return{beregningsgrunnlagStp:e.skjaeringstidspunktBeregning,begrunnelse:r&&r.begrunnelse?r.begrunnelse:"",periode:Tt(n,e.vilkårsperiodeFom).periode,perioder:t.map(s=>mE(s))}},vE=(e,n)=>({[`${Zr}`]:e.filter(r=>r.avklaringsbehov.some(t=>t.definisjon===Le.VURDER_NYTT_INNTKTSFRHLD)).map(r=>pE(r,n))}),yE=(e,n)=>{const r=I(e.fom).isBetween(n.fom,n.tom,"day","[]")||I(e.tom).isBetween(n.fom,n.tom,"day","[]"),t=I(n.fom).isBetween(e.fom,e.tom,"day","[]")||I(n.tom).isBetween(e.fom,e.tom,"day","[]");return r||t},fE=(e,n)=>n.inntektsforholdListe.some(r=>r.aktivitetStatus===e.aktivitetStatus&&r.arbeidsforholdId===e.arbeidsforholdId&&r.arbeidsgiverId===e.arbeidsgiverIdent),bE=(e,n)=>{var r,t;const s=e.perioder,i=(((t=(r=n.faktaOmFordeling)==null?void 0:r.vurderNyttInntektsforholdDto)==null?void 0:t.vurderInntektsforholdPerioder)||[]).flatMap(l=>s.filter(o=>yE(o,l)).map(o=>{const g=o.inntektsforhold.filter(m=>fE(m,l)).map(m=>{const p=!!m.skalRedusereUtbetaling,y=p?ye(m.bruttoInntektPrÅr):void 0;return{aktivitetStatus:m.aktivitetStatus,arbeidsgiverId:m.arbeidsgiverIdent,arbeidsforholdId:m.arbeidsforholdId,skalRedusereUtbetaling:p,bruttoInntektPrÅr:y}});return{fom:I(o.fom).isBefore(I(l.fom))?l.fom:o.fom,tom:I(o.tom).isAfter(I(l.tom))?l.tom:o.tom,tilkomneInntektsforhold:g}}));return{periode:e.periode,begrunnelse:e.begrunnelse,tilkomneInntektsforhold:i}},cE=(e,n,r)=>{const t=e[Zr].filter(s=>mr(r,s.periode.fom)).map(s=>bE(s,gE(s.periode.fom,n)));return{begrunnelse:t.map(s=>s.begrunnelse).reduce((s,i)=>s!==null?`${s} ${i}`:i),grunnlag:t,kode:_i}},jE=({aktivtBeregningsgrunnlagIndeks:e,formData:n,setFormData:r,beregningsgrunnlagListe:t,submitCallback:s,readOnly:i,submittable:l,vilkarperioder:o,arbeidsgiverOpplysningerPerId:g,setTilkommetAktivitetFormIsDirty:m})=>{const p=Ce({defaultValues:n!=null&&n.VURDER_TILKOMMET_AKTIVITET_FORM?n:vE(t,o)}),{formState:{dirtyFields:y,isSubmitted:f,errors:b,isDirty:c},trigger:N,control:h}=p;A.useEffect(()=>{m(c)},[c]),A.useEffect(()=>{var B;f&&(B=y[Zr])!=null&&B[e]&&N()},[e]);const{fields:E}=nn({name:Zr,control:h}),R=t[e],S=qm(R.avklaringsbehov),q=S?Sl(S.status):!1;return v.jsx(Ji,{errorMessage:"Noe gikk galt ved visning av tilkommet aktivitet",children:v.jsx("div",{className:$e.tilkommetAktivitet,children:v.jsx(ze,{formMethods:p,onSubmit:B=>{Object.keys(b).length===0&&s(cE(B,t,o))},setDataOnUnmount:r,children:E.map((B,w)=>{const _=t.findIndex(H=>H.skjaeringstidspunktBeregning===B.beregningsgrunnlagStp);return v.jsx("div",{style:{display:_===e?"block":"none"},children:v.jsx(oE,{formName:Zr,beregningsgrunnlag:t[_],formFieldIndex:w,readOnly:i||!mr(o,t[_].vilkårsperiodeFom),submittable:l,erAksjonspunktÅpent:q,arbeidsgiverOpplysningerPerId:g})},B.id)})})})})},{FORDEL_BEREGNINGSGRUNNLAG:hE,VURDER_REFUSJON_BERGRUNN:AE,VURDER_NYTT_INNTKTSFRHLD:IE}=Le,TE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.fordelBeregningsgrunnlag:!1,RE=e=>!!(e&&e.refusjonTilVurdering),EE=e=>e&&e.faktaOmFordeling?!!e.faktaOmFordeling.vurderNyttInntektsforholdDto:!1,pi=(e,n)=>e&&n?e.find(r=>r.definisjon===n):void 0,NE=({aktivtBeregningsgrunnlagIndeks:e,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,vilkarperioder:s,kodeverkSamling:i,submittable:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m})=>{const[p,y]=A.useState(!1),[f,b]=A.useState(!1),[c,N]=A.useState(!1),h=pi(t[e].avklaringsbehov,hE),E=pi(t[e].avklaringsbehov,AE),R=pi(t[e].avklaringsbehov,IE)&&EE(t[e]),S=h&&TE(t[e]),q=E&&RE(t[e]);return v.jsxs(v.Fragment,{children:[R&&v.jsxs(v.Fragment,{children:[v.jsx(jE,{aktivtBeregningsgrunnlagIndeks:e,formData:g,setFormData:m,submittable:l&&!f&&!c,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,vilkarperioder:s,setTilkommetAktivitetFormIsDirty:y}),v.jsx(x,{fourtyPx:!0})]}),q&&v.jsxs(v.Fragment,{children:[v.jsx(xR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!p&&!c,readOnly:n,submitCallback:r,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkarperioder:s,setRefusjonFormIsDirty:b}),v.jsx(x,{fourtyPx:!0})]}),S&&v.jsx(iR,{aktivtBeregningsgrunnlagIndeks:e,submittable:l&&!p&&!f,readOnly:n,submitCallback:r,kodeverkSamling:i,beregningsgrunnlagListe:t,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m,vilkårsperioder:s,setFordelingFormIsDirty:N})]})},SE=Ke(ql),{FORDEL_BEREGNINGSGRUNNLAG:qE,VURDER_REFUSJON_BERGRUNN:xE,VURDER_NYTT_INNTKTSFRHLD:PE}=Le,BE=(e,n)=>{const r=Tt(n,e.vilkårsperiodeFom);if(r){const{fom:t,tom:s}=r.periode;return s!==null?`${I(t).format(te)} - ${I(s).format(te)}`:`${I(t).format(te)} - `}return`${I(e.vilkårsperiodeFom).format(te)}`},xm=e=>e.avklaringsbehov.some(n=>n.definisjon===xE||n.definisjon===qE||n.definisjon===PE),FE=(e,n)=>xm(e)&&mr(n,e.vilkårsperiodeFom),_E=({beregningsgrunnlagVilkår:e,beregningsgrunnlagListe:n,kodeverkSamling:r,submitCallback:t,readOnly:s,submittable:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const m=n.filter(b=>xm(b)),[p,y]=A.useState(0);if(m.length===0)return null;const f=m.length>1;return v.jsxs(Ge,{value:SE,children:[f&&v.jsx(cr,{value:p.toString(),onChange:b=>y(Number(b)),children:v.jsx(cr.List,{children:m.map((b,c)=>v.jsx(cr.Tab,{value:c.toString(),label:BE(b,e.perioder),className:FE(b,e.perioder)?"harAksjonspunkt":""},b.skjaeringstidspunktBeregning))})}),v.jsx(x,{eightPx:!0}),v.jsx(NE,{aktivtBeregningsgrunnlagIndeks:p,kodeverkSamling:r,submitCallback:t,readOnly:s,beregningsgrunnlagListe:m,vilkarperioder:e.perioder,submittable:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})]})},Kg=[de.FORDEL_BEREGNINGSGRUNNLAG,de.VURDER_REFUSJON_BERGRUNN],OE=({arbeidsgiverOpplysningerPerId:e})=>{const n=lr(Kg),{behandling:r}=A.use(Pn),t=xn(r),{data:s,isFetching:i}=Sn(t.beregningsgrunnlagOptions(r));return a.jsx(dr,{standardPanelProps:n,faktaPanelKode:ir.FORDELING,faktaPanelMenyTekst:W().formatMessage({id:"FaktaInitPanel.Title.Fordeling"}),skalPanelVisesIMeny:Kg.some(l=>fs(l,r.aksjonspunkt)),children:i?a.jsx(Nn,{}):a.jsx(DE,{kodeverkSamling:n.alleKodeverk,beregningsgrunnlagVilkår:GE(n.behandling.vilkår,s),beregningsgrunnlagListe:LE(s),submitCallback:VE(n.submitCallback),arbeidsgiverOpplysningerPerId:e,readOnly:n.readOnly,submittable:n.submittable})})},DE=e=>{const{formData:n,setFormData:r}=Ln();return a.jsx(_E,{...e,formData:n,setFormData:r})},wE=e=>{switch(e){case Le.FORDEL_BEREGNINGSGRUNNLAG:return de.FORDEL_BEREGNINGSGRUNNLAG;case Le.VURDER_REFUSJON_BERGRUNN:return de.VURDER_REFUSJON_BERGRUNN;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},VE=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:wE(s.kode),...s.grunnlag[0]}));return e(t)},ME=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),GE=(e,n)=>{if(!e)return null;const r=e.find(s=>s.vilkarType&&s.vilkarType===nr.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[ME(n,r)]}},LE=e=>e?[{...e,beregningsgrunnlagId:"1",vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[];OE.__docgenInfo={description:"",methods:[],displayName:"FordelingFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Fn=({tittel:e,children:n})=>a.jsxs(Q,{children:[a.jsx(F,{size:"medium",children:e}),n]});Fn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Pm=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:n})=>{var t;const r=W();return a.jsxs(Fn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((t=e[n])==null?void 0:t.navn)??"-"]}),a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",n]})]})};Pm.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Bm=({inntektsmelding:e,behandling:n,alleBehandlinger:r,alleKodeverk:t})=>{const s=W(),i=e.tilknyttedeBehandlingIder.includes(n.uuid),l=r.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),o=(()=>{const m=l.length;return i&&m>1?a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):i?a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),g=[...l].sort((m,p)=>new Date(m.opprettet).getTime()-new Date(p.opprettet).getTime());return a.jsxs(Fn,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[o,a.jsx(ne,{children:g.map(m=>{var p;return a.jsx(ne.Item,{children:a.jsxs(Q,{children:[a.jsx("span",{children:(p=t.BehandlingType.find(({kode:y})=>y===m.type))==null?void 0:p.navn}),a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",a.jsx(Zt,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",a.jsx(Zt,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Bm.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const KE=e=>{const n=e.aktiveNaturalytelser.reduce((t,s)=>{const i=s.type;return i in t?{...t,[i]:[...t[i],s]}:{...t,[i]:[s]}},{}),r={};return Object.entries(n).forEach(([t,s])=>{const i=s.sort((l,o)=>Fv({fom:l.periode.fomDato,tom:l.periode.tomDato},{fom:o.periode.fomDato,tom:o.periode.tomDato})).reverse();r[t]=i.flatMap((l,o,g)=>{const m=g[o+1],p=l.periode.tomDato,y=m==null?void 0:m.periode.fomDato;return p===Be?[]:[{...l,periode:{fomDato:Xt(p,1),tomDato:y?Xt(y,-1):Be}}]})}),r},Fm=({inntektsmelding:e,alleKodeverk:n})=>{const r=W(),t=KE(e);return a.jsx(Fn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?a.jsx("span",{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):a.jsx(Q,{children:Object.entries(t).map(([s,i])=>{var l;return a.jsxs(Q,{children:[a.jsx("span",{children:(l=n[gn.NATURAL_YTELSE_TYPE].find(o=>o.kode===s))==null?void 0:l.navn}),a.jsx("ul",{children:i.map(o=>a.jsxs(Y.Fragment,{children:[a.jsxs("li",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",a.jsx(Ae,{dateString:o.periode.fomDato})]}),o.periode.tomDato!==Be&&a.jsxs("li",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",a.jsx(Ae,{dateString:o.periode.tomDato})]}),a.jsxs("li",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",G(o.beloepPerMnd.verdi)]})]},o.indexKey))})]},s)})})})};Fm.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const _m=({kildeSystem:e})=>{const n=W(),r=A.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[n,e]);return a.jsx(Fn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:r})};_m.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Om=({inntektsmelding:e})=>{const n=W();return a.jsxs(Fn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),a.jsxs("span",{children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Om.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Dm=({inntektsmelding:e,fagsak:n})=>a.jsx(ae,{type:"button",onClick:()=>{window.open(Xi(n.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:a.jsx(Rv,{}),children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});Dm.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const wm=({inntektsmelding:e})=>{const n=W();if(e.refusjonsperioder.length===0)return a.jsx(Fn,{tittel:n.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:a.jsx("span",{children:e.refusjonPrMnd?G(e.refusjonPrMnd):a.jsx(k,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const r=[...e.refusjonsperioder].sort((t,s)=>new Date(t.fom).getTime()-new Date(s.fom).getTime());return a.jsxs(Q,{gap:"0",children:[a.jsx("span",{children:"Krever refusjon"}),a.jsx("span",{children:G(e.refusjonPrMnd??0)}),a.jsx("span",{children:"Endringer i perioden:"}),a.jsx("ul",{children:r.map(t=>a.jsx("li",{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:G(t.refusjonsbeløp.verdi),fom:a.jsx(Ae,{dateString:t.fom})}})},t.indexKey))})]})};wm.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Vm=({startDatoPermisjon:e,ytelse:n})=>{const r=W();return e?a.jsxs(Fn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:n.toLowerCase()}),children:[a.jsx("span",{children:e?a.jsx(Ae,{dateString:e}):"-"}),a.jsx("span",{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Vm.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const $E="_behandlingCircleIngen_131kr_1",UE="_behandlingCircleDenne_131kr_5",YE="_behandlingCircleAndre_131kr_9",HE="_container_131kr_13",CE="_ingenInntektsmeldinger_131kr_19",Xr={behandlingCircleIngen:$E,behandlingCircleDenne:UE,behandlingCircleAndre:YE,container:HE,ingenInntektsmeldinger:CE},Mm=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:n,alleBehandlinger:r})=>{const{alleKodeverk:t,fagsak:s,behandling:i}=En(),l=W();return a.jsxs(Q,{gap:"4",className:Xr.container,children:[a.jsxs(C,{gap:"4",justify:"space-between",align:"start",children:[a.jsxs(se,{level:"3",size:"small",children:[a.jsx(k,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",a.jsx(Zt,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),a.jsx(Dm,{fagsak:s,inntektsmelding:e})]}),a.jsxs(_v,{columns:3,gap:"8",children:[a.jsx(Pm,{arbeidsgiverOpplysningerPerId:n,arbeidsgiverIdent:e.arbeidsgiverIdent}),a.jsx(Fn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:a.jsx("span",{children:G(e.inntektPrMnd)})}),a.jsx(Bm,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:r,behandling:i}),a.jsx(Om,{inntektsmelding:e}),a.jsx(Vm,{ytelse:Qr(t,gn.FAGSAK_YTELSE,s.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),a.jsx(_m,{kildeSystem:e.kildeSystem}),a.jsx(Fm,{inntektsmelding:e,alleKodeverk:t}),a.jsx(wm,{inntektsmelding:e})]})]})};Mm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const zE={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},$g=Ke(zE),Gm=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:n,inntektsmeldinger:r})=>{const{behandling:t}=En(),[s,i]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),l=m=>{i(s&&m===s.orderBy&&s.direction==="descending"?void 0:{orderBy:m,direction:s&&m===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},o=s?JE({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:t}):r,g=(s==null?void 0:s.direction)==="ascending"?o:o.toReversed();return g.length===0?a.jsx(Ge,{value:$g,children:a.jsxs(C,{gap:"2",justify:"center",align:"center",className:Xr.ingenInntektsmeldinger,children:[a.jsx(T,{children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.ingen"})}),a.jsx(zv,{})]})}):a.jsx(Ge,{value:$g,children:a.jsxs(j,{sort:s,onSortChange:m=>l(m),children:[a.jsx(j.Header,{children:a.jsxs(j.Row,{children:[a.jsx(j.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),a.jsx(j.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),a.jsx(j.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),a.jsx(j.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),a.jsx(j.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),a.jsx(j.HeaderCell,{})]})}),a.jsx(j.Body,{children:g.map(m=>{var p;return a.jsxs(j.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:a.jsx(Mm,{alleBehandlinger:n,arbeidsgiverOpplysningerPerId:e,inntektsmelding:m}),children:[a.jsx(j.DataCell,{children:a.jsx(Zt,{dateTimeString:m.innsendingstidspunkt,separator:"kl"})}),a.jsx(j.DataCell,{children:((p=e[m.arbeidsgiverIdent])==null?void 0:p.navn)??"-"}),a.jsx(j.DataCell,{children:m.startDatoPermisjon?a.jsx(Ae,{dateString:m.startDatoPermisjon}):"-"}),a.jsx(j.DataCell,{children:G(m.inntektPrMnd)}),a.jsx(j.DataCell,{children:a.jsx(WE,{behandling:t,inntektsmelding:m})})]},`${m.journalpostId}-${m.internArbeidsforholdId}`)})})]})})},JE=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:n,sortKey:r,behandling:t})=>r==="arbeidsgiverIdent"?e.slice().sort((s,i)=>{var g,m;const l=(g=n[s.arbeidsgiverIdent])==null?void 0:g.navn,o=(m=n[i.arbeidsgiverIdent])==null?void 0:m.navn;return vi(l,o)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((s,i)=>{const l=Oi({behandling:t,inntektsmelding:s}),o=Oi({behandling:t,inntektsmelding:i});return vi(l,o)}):e.slice().sort((s,i)=>{const l=s[r],o=i[r];return vi(l,o)}),vi=(e,n)=>e===void 0?-1:n===void 0?1:e<n?-1:e>n?1:0,WE=({behandling:e,inntektsmelding:n})=>{const r=Oi({behandling:e,inntektsmelding:n});return r==="DENNE"?a.jsxs(C,{gap:"1",align:"center",children:[a.jsx(_s,{className:Xr.behandlingCircleDenne}),a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?a.jsxs(C,{gap:"1",align:"center",children:[a.jsx(_s,{className:Xr.behandlingCircleAndre}),a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):a.jsxs(C,{gap:"1",align:"center",children:[a.jsx(_s,{className:Xr.behandlingCircleIngen}),a.jsx(k,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Oi=({behandling:e,inntektsmelding:n})=>n.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":n.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Gm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ZE=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),{behandling:r,alleBehandlinger:t}=A.use(Pn),s=lr(),i=xn(r),{data:l}=Sn(i.inntektsmeldingerOptions(r));return a.jsx(dr,{standardPanelProps:s,faktaPanelKode:ir.INNTEKTSMELDINGER,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Inntektsmelding"}),skalPanelVisesIMeny:!0,children:l?a.jsx(Gm,{inntektsmeldinger:l,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e}):a.jsx(Nn,{})})};ZE.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const XE=e=>Xt(e,1),Lm=(e,n)=>I(XE(e)).isSame(n)?n:e,Km=(e,n,r)=>{if(!(!n||!r))return I(e).isBefore(n)?n:Lm(e,r)},$m=(e,n,r)=>{if(!(!n||!r))return I(e).isAfter(r)?r:Lm(e,n)},QE=[fe.SYKEPENGER,fe.FORELDREPENGER,fe.PLEIEPENGER,fe.SVANGERSKAPSPENGER,fe.UTENLANDSK_ARBEIDSFORHOLD],Ht=(e,...n)=>!!e&&n.includes(e),eN=e=>e?I(e,Pe).format(te):"-",nN=e=>Ht(e,fe.FRILANS)?"ActivityPanel.Oppdragsgiver":"ActivityPanel.Arbeidsgiver",rN=(e,n)=>{const r=n[e];if(!e||!r)return"-";if(r.erPrivatPerson&&r.fødselsdato){const t=eN(r.fødselsdato);return`${r.navn} (${t})`}return r.identifikator?`${r.navn} (${r.identifikator})`:r.navn},tN=e=>e.length>0?"ActivityPanel.FerdiglignetNæring":"ActivityPanel.IngenFerdiglignetNæring",Um=({valgtAktivitetstype:e,arbeidsgiverReferanse:n,arbeidsgiverOpplysningerPerId:r,stillingsandel:t,naringRegistreringsdato:s,ferdiglignetNæring:i})=>a.jsxs(Q,{gap:"4",children:[Ht(e,fe.ARBEID,fe.NARING,...QE)&&a.jsxs(C,{gap:"4",children:[a.jsxs("div",{children:[a.jsx(x,{eightPx:!0}),a.jsx(F,{size:"small",children:a.jsx(k,{id:nN(e)})}),a.jsx(T,{size:"small",children:rN(n,r)})]}),Ht(e,fe.ARBEID)&&a.jsxs("div",{children:[a.jsx(x,{eightPx:!0}),a.jsx(F,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Stillingsandel"})}),a.jsx(T,{size:"small",children:t})]})]}),Ht(e,fe.NARING)&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Registreringsdato"})}),a.jsx(T,{size:"small",children:s?I(s).format(te):"-"})]}),a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:tN(i)})}),i.toSorted((l,o)=>l.år<o.år?1:l.år>o.år?-1:0).map(l=>a.jsxs(C,{gap:"5",children:[a.jsx(T,{size:"small",children:l.år}),a.jsx(T,{size:"small",children:G(l.beløp)})]},l.år))]})]})]});Um.__docgenInfo={description:`ValgtAktivitetSubForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""}}};const sN="_panel_18tdb_5",aN="_colMargin_18tdb_9",iN="_margin_18tdb_13",Gt={panel:sN,colMargin:aN,margin:iN},lN=bn(3),dN=cn(1500),Ct=(e,n,r)=>e?!!n&&!r:!0,oN=(e,n)=>{const r=gv(e,n);return r?r.months>=1?a.jsx(k,{id:"ActivityPanel.MonthsAndDays",values:{months:r.months,days:r.days}}):a.jsx(k,{id:"ActivityPanel.Days",values:{days:r.days}}):a.jsx("span",{})},gN=(e,n,r,t)=>r||Ct(t,e,n)?"ActivityPanel.Begrunnelse":"ActivityPanel.BegrunnEndringene",Ym=({readOnly:e,opptjeningAktivitetTyper:n,avbrytAktivitet:r,velgNesteAktivitet:t,velgForrigeAktivitet:s,harAksjonspunkt:i,alleMerknaderFraBeslutter:l,arbeidsgiverOpplysningerPerId:o,valgtOpptjeningAktivitet:g,ferdiglignetNæring:m,oppdaterAktivitet:p,valgteFormValues:y,fastsattOpptjening:f,lukkPeriode:b})=>{var z;const c=W(),N=Ce({defaultValues:y}),{arbeidsgiverReferanse:h,erGodkjent:E,erEndret:R,aktivitetType:S,stillingsandel:q,naringRegistreringsdato:B}=g,w=Km(g.opptjeningFom,f==null?void 0:f.opptjeningFom,f==null?void 0:f.opptjeningTom),_=$m(g.opptjeningTom,f==null?void 0:f.opptjeningFom,f==null?void 0:f.opptjeningTom),H=A.useCallback((...O)=>a.jsx("b",{children:O}),[]);return a.jsx(ze,{formMethods:N,onSubmit:O=>p(O),children:a.jsxs(Eu,{className:Gt.panel,merknaderFraBeslutter:l[de.VURDER_PERIODER_MED_OPPTJENING],children:[a.jsxs(Q,{gap:"2",children:[a.jsxs(C,{justify:"space-between",children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Details"})}),a.jsxs(C,{gap:"2",children:[a.jsx(ae,{className:Gt.margin,size:"xsmall",icon:a.jsx(vs,{"aria-hidden":!0}),onClick:s,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.prevPeriod"}),children:a.jsx(k,{id:"Timeline.prevPeriodShort"})}),a.jsx(ae,{className:Gt.margin,size:"xsmall",icon:a.jsx(ys,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:a.jsx(k,{id:"Timeline.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(Xn,{"aria-hidden":!0}),onClick:b,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),a.jsxs(C,{children:[a.jsxs("div",{className:Gt.colMargin,children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Period"})}),w&&_&&a.jsxs(C,{gap:"2",children:[a.jsx(T,{size:"small",children:`${I(w).format(te)} - ${I(_).format(te)}`}),a.jsx(T,{size:"small",children:oN(w,_)})]})]}),a.jsxs("div",{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ActivityPanel.Activity"})}),a.jsx(T,{size:"small",children:(z=n.find(O=>O.kode===S))==null?void 0:z.navn})]})]})]}),a.jsx(x,{eightPx:!0}),a.jsx(Um,{valgtAktivitetstype:S,arbeidsgiverReferanse:h,arbeidsgiverOpplysningerPerId:o,stillingsandel:q,naringRegistreringsdato:B,ferdiglignetNæring:m}),!Ct(i,E,R)&&a.jsxs(a.Fragment,{children:[a.jsx(x,{twentyPx:!0}),a.jsx(Ne,{name:"erGodkjent",hideLegend:!0,validate:[X],isReadOnly:e,isEdited:R,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{label:c.formatMessage({id:"ActivityPanel.Godkjent"}),value:"true"},{label:a.jsx(k,{id:"ActivityPanel.IkkeGodkjent",values:{b:H}}),value:"false"}]})]}),a.jsx(x,{sixteenPx:!0}),a.jsx(en,{name:"begrunnelse",label:a.jsx(k,{id:gN(E,R,e,i)}),validate:[X,lN,dN,jn],maxLength:1500,readOnly:e||Ct(i,E,R)}),!Ct(i,E,R)&&a.jsxs(a.Fragment,{children:[a.jsx(x,{sixteenPx:!0}),a.jsxs(C,{gap:"4",children:[a.jsx(ae,{size:"small",variant:"primary",disabled:!N.formState.isDirty,children:a.jsx(k,{id:"ActivityPanel.Oppdater"})}),a.jsx(ae,{size:"small",variant:"secondary",onClick:r,type:"button",children:a.jsx(k,{id:"ActivityPanel.Avbryt"})})]})]})]})})};Ym.__docgenInfo={description:`ValgtAktivitetForm

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const uN=e=>e===!1?"danger":e===!0?"success":"warning",kN={[fe.ARBEID]:a.jsx(Mr,{width:20,height:20}),[fe.AAP]:a.jsx(Vr,{width:20,height:20}),[fe.DAGPENGER]:a.jsx(Vr,{width:20,height:20}),[fe.FORELDREPENGER]:a.jsx(Ov,{width:20,height:20}),[fe.FRILANS]:a.jsx(Mr,{width:20,height:20}),[fe.MILITAR_ELLER_SIVILTJENESTE]:a.jsx(Mr,{width:20,height:20}),[fe.NARING]:a.jsx(Mr,{width:20,height:20}),[fe.OMSORGSPENGER]:a.jsx(Vr,{width:20,height:20}),[fe.OPPLARINGSPENGER]:a.jsx(Vr,{width:20,height:20}),[fe.PLEIEPENGER]:a.jsx(Vr,{width:20,height:20}),[fe.SVANGERSKAPSPENGER]:a.jsx(sy,{width:20,height:20}),[fe.SYKEPENGER]:a.jsx(ly,{width:20,height:20}),[fe.UTENLANDSK_ARBEIDSFORHOLD]:a.jsx(Xv,{width:20,height:20}),[fe.ETTERLONN_SLUTTPAKKE]:a.jsx(Mr,{width:20,height:20})},mN={danger:a.jsx(Mu,{}),success:a.jsx(el,{}),warning:a.jsx(xv,{})},pN=(e,n,r,t,s)=>e.map((i,l)=>{var o;return{id:l,start:I(Km(i.opptjeningFom,t,s)).toDate(),end:I($m(i.opptjeningTom,t,s)).toDate(),radId:(o=r.find(g=>g.aktivitetTypeKode===i.aktivitetType&&g.arbeidsforholdRef===i.arbeidsforholdRef&&g.arbeidsgiverReferanse===i.arbeidsgiverReferanse))==null?void 0:o.id,status:uN(n[l].erGodkjent)}}),vN=(e,n,r)=>e.reduce((s,i)=>(s.some(o=>o.aktivitetType===i.aktivitetType&&o.arbeidsforholdRef===i.arbeidsforholdRef&&o.arbeidsgiverReferanse===i.arbeidsgiverReferanse)||s.push(i),s),[]).map((s,i)=>{const l=n.find(g=>g.kode===s.aktivitetType),o=(l==null?void 0:l.kode)===fe.AAP?r.formatMessage({id:"OpptjeningTidslinje.Aap"}):l==null?void 0:l.navn;return{id:i+1,label:o||"",aktivitetTypeKode:s.aktivitetType,arbeidsforholdRef:s.arbeidsforholdRef,arbeidsgiverReferanse:s.arbeidsgiverReferanse}}),Hm=({opptjeningPerioder:e,formVerdierForAlleAktiviteter:n,fastsattOpptjening:r,valgtAktivitetIndex:t,opptjeningAktivitetTypes:s,setValgtAktivitetIndex:i})=>{const l=W(),o=r==null?void 0:r.opptjeningFom,g=r==null?void 0:r.opptjeningTom,m=A.useMemo(()=>vN(e,s,l),[e]),p=A.useMemo(()=>pN(e,n,m,o,g),[n]),y=A.useCallback(f=>{const b=p.find(c=>c.id===f);b&&i(b.id)},[p,i]);return!o||!g?null:a.jsxs(we,{startDate:I(o).subtract(1,"months").toDate(),endDate:I(g).add(10,"days").toDate(),children:[a.jsxs(we.Pin,{date:I(o).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"OpptjeningTidslinje.StartDato"})}),a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:o})})]}),a.jsxs(we.Pin,{date:I(g).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"OpptjeningTidslinje.SluttDato"})}),a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:g})})]}),m.map(f=>a.jsx(we.Row,{label:f.label,icon:kN[f.aktivitetTypeKode],children:p.filter(b=>b.radId===f.id).map(b=>a.jsx(we.Period,{start:b.start,end:b.end,status:b.status,icon:mN[b.status],onSelectPeriod:()=>y(b.id),isActive:t===b.id,statusLabel:f.label},b.id))},f.id))]})};Hm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTidslinje",props:{opptjeningPerioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},setValgtAktivitetIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(periodeIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"periodeIndex"}],return:{name:"void"}}},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const yN="_container_ivkzi_1",fN={container:yN},bN=e=>{const n=[];e.some(t=>t.stillingsandel===0)&&n.push(a.jsx(k,{id:"OpptjeningFaktaForm.AktivitetenErTimeAvslonnet"},"AktivitetenErTimeAvslonnet"));const r=e.filter(t=>(t.erGodkjent===void 0||t.erGodkjent===null||t.begrunnelse)&&t.stillingsandel!==0);return r.length===1?n.push(a.jsx(k,{id:"OpptjeningFaktaForm.EttArbeidKanGodkjennes"},"EttArbeidKanGodkjennes")):r.length>1&&n.push(a.jsx(k,{id:"OpptjeningFaktaForm.FlereArbeidKanGodkjennes"},"FlereArbeidKanGodkjennes")),n},cN=e=>I(e).add(1,"days").format(Pe),jN=(e,n)=>[...e].sort((r,t)=>{var l,o;const s=(l=n.find(g=>g.kode===r.aktivitetType))==null?void 0:l.navn,i=(o=n.find(g=>g.kode===t.aktivitetType))==null?void 0:o.navn;return s&&i?s.localeCompare(i):0}),Ug=e=>Xt(e,1),hN=(e,n)=>n?e.filter(r=>I(n.opptjeningFom).isBefore(Ug(r.opptjeningTom))).filter(r=>I(r.opptjeningFom).isBefore(Ug(n.opptjeningTom))):[],Cm=({opptjeningAktiviteter:e,arbeidsgiverOpplysningerPerId:n,fastsattOpptjening:r,ferdiglignetNæring:t})=>{const{aksjonspunkterForPanel:s,alleMerknaderFraBeslutter:i,harÅpneAksjonspunkter:l,submitCallback:o,isReadOnly:g,alleKodeverk:m}=En(),p=s.length>0,y=m[gn.OPPTJENING_AKTIVITET_TYPE],f=e&&r?jN(hN(e,r),y):[],b=f.map(J=>({erGodkjent:J.erGodkjent,begrunnelse:J.begrunnelse})),{formData:c,setFormData:N}=Ln(),[h,E]=A.useState(c||b),R=f.findIndex(J=>J.erGodkjent===void 0),S=f.length>0?0:void 0,[q,B]=A.useState(R!==-1?R:S),[w,_]=A.useState(!1);A.useEffect(()=>()=>{N(h)},[h]),A.useEffect(()=>{const J=h.findIndex(ie=>ie.erGodkjent===void 0);B(J!==-1?J:void 0)},[h]);const H=()=>{_(!0);const J=f.map((ie,Re)=>({arbeidsforholdRef:ie.arbeidsforholdRef,arbeidsgiverReferanse:ie.arbeidsgiverReferanse,opptjeningFom:ie.opptjeningFom,opptjeningTom:ie.opptjeningTom,aktivitetType:ie.aktivitetType,erGodkjent:h[Re].erGodkjent,begrunnelse:h[Re].begrunnelse})).filter(ie=>ie.begrunnelse);o({opptjeningsaktiviteter:J,kode:de.VURDER_PERIODER_MED_OPPTJENING}).then(()=>_(!1))},z=()=>{q!==void 0&&q<f.length-1&&B(q+1)},O=()=>{q!==void 0&&q>0&&B(q-1)},L=J=>{q!==void 0&&E(ie=>Object.assign([],ie,{[q]:J}))},V=()=>B(void 0),U=()=>{B(void 0)},re=h.some(J=>J.erGodkjent===null||J.erGodkjent===void 0);return a.jsxs("div",{className:fN.container,children:[p&&a.jsxs(a.Fragment,{children:[l&&a.jsx(ar,{children:bN(f)}),a.jsx(x,{twentyPx:!0})]}),a.jsx(F,{size:"small",children:a.jsx(k,{id:"OpptjeningFaktaForm.Skjaringstidspunkt"})}),a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:cN(r==null?void 0:r.opptjeningTom)})}),a.jsx(x,{twentyPx:!0}),a.jsx(Hm,{opptjeningPerioder:f,formVerdierForAlleAktiviteter:h,opptjeningAktivitetTypes:y,setValgtAktivitetIndex:B,valgtAktivitetIndex:q,fastsattOpptjening:r}),a.jsx(x,{fourtyPx:!0}),q!==void 0&&a.jsxs(a.Fragment,{children:[a.jsx(Ym,{valgtOpptjeningAktivitet:f[q],valgteFormValues:h[q],readOnly:g,opptjeningAktivitetTyper:y,avbrytAktivitet:V,oppdaterAktivitet:L,fastsattOpptjening:r,velgNesteAktivitet:z,velgForrigeAktivitet:O,harAksjonspunkt:p,alleMerknaderFraBeslutter:i,arbeidsgiverOpplysningerPerId:n,ferdiglignetNæring:t,lukkPeriode:U},q),a.jsx(x,{twentyPx:!0})]}),p&&f.length>0&&a.jsx(ae,{size:"small",variant:"primary",onClick:H,disabled:q!==void 0||w||g||re,loading:w,type:"button",children:a.jsx(k,{id:"OpptjeningFaktaForm.Confirm"})})]})};Cm.__docgenInfo={description:`OpptjeningFaktaPanel

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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]"},description:""},fastsattOpptjening:{required:!1,tsType:{name:"signature",raw:"Opptjening['fastsattOpptjening']"},description:""}}};const AN={"OpptjeningFaktaForm.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening","OpptjeningFaktaForm.EttArbeidKanGodkjennes":"Vurder om aktiviteten kan godkjennes","OpptjeningFaktaForm.FlereArbeidKanGodkjennes":"Vurder om aktivitetene kan godkjennes","OpptjeningFaktaForm.AktivitetenErTimeAvslonnet":"Arbeidet er timeavlønnet. Slå opp i A-ordningen for å vurdere opptjeningen","OpptjeningFaktaForm.DetErInnhentetDok":"Det er innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.DetErIkkeInnhentetDok":"Det er <b>ikke</b> innhentet dokumentasjon på opptjening i utlandet","OpptjeningFaktaForm.Confirm":"Bekreft og fortsett","ActivityPanel.Details":"Detaljer for valgt aktivitet","ActivityPanel.Period":"Periode","ActivityPanel.Activity":"Aktivitet","ActivityPanel.Godkjent":"Aktiviteten godkjennes","ActivityPanel.IkkeGodkjent":"Aktiviteten godkjennes <b>ikke</b>","ActivityPanel.BegrunnEndringene":"Begrunn endringene","ActivityPanel.Begrunnelse":"Begrunnelse","ActivityPanel.Oppdater":"Oppdater","ActivityPanel.Avbryt":"Avbryt","ActivityPanel.MonthsAndDays":"({months} mndr. {days} dager)","ActivityPanel.Days":"({days} dager)","ActivityPanel.Arbeidsgiver":"Arbeidsgiver","ActivityPanel.Oppdragsgiver":"Oppdragsgiver","ActivityPanel.Stillingsandel":"Stillingsandel","ActivityPanel.Registreringsdato":"Registreringsdato","ActivityPanel.FerdiglignetNæring":"Ferdiglignet næringsinntekt","ActivityPanel.IngenFerdiglignetNæring":"Ingen ferdiglignet næringsinntekt","OpptjeningTidslinje.StartDato":"Start opptjeningsperiode","OpptjeningTidslinje.SluttDato":"Slutt opptjeningsperiode","OpptjeningTidslinje.Aap":"AAP","Timeline.lukkPeriode":"Lukk periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.openData":"Åpne info om første periode"},IN=Ke(AN),zm=({opptjening:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e?e.fastsattOpptjening:void 0,t=e?e.opptjeningAktivitetList:void 0,s=(e==null?void 0:e.ferdiglignetNæring)||[];return a.jsx(Ge,{value:IN,children:a.jsx(Cm,{arbeidsgiverOpplysningerPerId:n,opptjeningAktiviteter:t,fastsattOpptjening:r,ferdiglignetNæring:s})})};zm.__docgenInfo={description:"",methods:[],displayName:"OpptjeningFaktaIndex",props:{opptjening:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const TN=[de.VURDER_PERIODER_MED_OPPTJENING],RN=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),{behandling:r}=A.use(Pn),t=lr(TN),s=xn(r),{data:i,isFetching:l}=Sn(s.opptjeningOptions(r));return a.jsx(dr,{standardPanelProps:t,faktaPanelKode:ir.OPPTJENINGSVILKARET,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Opptjening"}),skalPanelVisesIMeny:r.vilkår.some(o=>o.vilkarType===nr.OPPTJENINGSVILKARET)&&r.vilkår.some(o=>o.vilkarType===nr.MEDLEMSKAPSVILKARET&&o.vilkarStatus===Gu.OPPFYLT),children:l?a.jsx(Nn,{}):a.jsx(zm,{opptjening:i,arbeidsgiverOpplysningerPerId:e})})};RN.__docgenInfo={description:"",methods:[],displayName:"OpptjeningsvilkaretFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var Di=(e=>(e.BRUK_PERMISJON="BRUK_PERMISJON",e.IKKE_BRUK_PERMISJON="IKKE_BRUK_PERMISJON",e))(Di||{});const EN="_boks_kspkv_1",NN="_aksjonspunkt_kspkv_9",SN="_harBorderTop_kspkv_13",Jm={boks:EN,aksjonspunkt:NN,harBorderTop:SN},qN=_u.bind(Jm),Wm=({harÅpentAksjonspunkt:e,harBorderTop:n,children:r})=>a.jsx("div",{className:qN(Jm.boks,{aksjonspunkt:e,harBorderTop:n}),children:r});Wm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdBoks",props:{harÅpentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""},harBorderTop:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""}}};const xN="_inline_1gq7u_1",PN="_topPadding_1gq7u_5",BN="_phoneIcon_1gq7u_9",FN="_docIcon_1gq7u_15",pr={inline:xN,topPadding:PN,phoneIcon:BN,docIcon:FN},Zm=({saksnummer:e,inntektsmelding:n})=>a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),a.jsxs(on,{children:[a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})})}),a.jsx(P,{className:pr.topPadding,children:a.jsx(T,{size:"small",children:G(n.inntektPrMnd)})})]}),a.jsx(x,{eightPx:!0}),a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})})}),a.jsx(P,{className:pr.topPadding,children:a.jsx(T,{size:"small",children:a.jsx(k,{id:n.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})})]}),a.jsx(x,{eightPx:!0}),n.refusjonPrMnd&&a.jsxs(a.Fragment,{children:[a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})})}),a.jsx(P,{className:pr.topPadding,children:a.jsx(T,{size:"small",children:G(n.refusjonPrMnd)})})]}),a.jsx(x,{eightPx:!0})]}),a.jsxs(lt,{href:Xi(e,n.journalpostId,n.dokumentId),target:"_blank",children:[a.jsx("span",{children:a.jsx(T,{size:"small",className:pr.inline,children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})})}),a.jsx($u,{className:pr.docIcon})]}),a.jsx(x,{sixteenPx:!0}),a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(Uu,{className:pr.phoneIcon})}),a.jsxs(P,{children:[a.jsx(M,{children:a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})})})}),a.jsx(M,{children:a.jsx(P,{children:a.jsx(ke,{children:n.kontaktpersonNavn})})}),a.jsx(M,{children:a.jsx(P,{children:a.jsx(ke,{children:a.jsx(k,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:n.kontaktpersonNummer}})})})})]})]})]}),a.jsx(x,{thirtyTwoPx:!0})]});Zm.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const _N="_maanedBredde_pqnhm_1",ON="_aarBredde_pqnhm_5",DN="_belopBredde_pqnhm_9",wN="_inline_pqnhm_13",VN="_arrow_pqnhm_17",vr={maanedBredde:_N,aarBredde:ON,belopBredde:DN,inline:wN,arrow:VN},MN=(e,n)=>{const t=I(e).startOf("month"),s=t.subtract(12,"month"),i=[];for(let l=t;l.isAfter(s);l=l.subtract(1,"month")){const o=l.format(Pe),g=n.find(m=>I(m.fom).startOf("month").format(Pe)===o);i.push({beløp:(g==null?void 0:g.beløp)||0,fom:o})}return i},Xm=({inntektsposter:e,skjæringstidspunkt:n})=>{const[r,t]=A.useState(!1),s=A.useMemo(()=>MN(n,e),[e]);return a.jsxs(a.Fragment,{children:[e.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsposterPanel.Inntekter"})}),a.jsx(on,{children:s.filter((i,l)=>r?!0:l<3).map(i=>a.jsxs(M,{children:[a.jsx(P,{className:vr.maanedBredde,children:a.jsx(T,{size:"small",children:a.jsx(k,{id:`InntektsposterPanel.${I(i.fom).month()+1}`})})}),a.jsx(P,{className:vr.aarBredde,children:a.jsx(T,{size:"small",children:I(i.fom).year()})}),a.jsx(P,{className:vr.belopBredde,children:a.jsx(hr,{children:a.jsx(T,{size:"small",children:G(i.beløp)})})})]},i.fom))}),a.jsxs(lt,{onClick:i=>{i.preventDefault(),t(!r)},href:"",children:[a.jsx("span",{children:a.jsx(T,{size:"small",className:vr.inline,children:a.jsx(k,{id:r?"InntektsposterPanel.FaerreManeder":"InntektsposterPanel.TidligereManeder"})})}),r?a.jsx(Yi,{className:vr.arrow}):a.jsx(us,{className:vr.arrow})]})]}),e.length===0&&a.jsx(F,{size:"small",children:a.jsx(k,{id:"InntektsposterPanel.IngenInntekt"})})]})};Xm.__docgenInfo={description:"",methods:[],displayName:"InntektsposterPanel",props:{inntektsposter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"Inntektspost[]"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const GN="_body_hrlo3_1",LN="_hjelpetekst_hrlo3_5",KN="_firstCol_hrlo3_9",$N="_secCol_hrlo3_13",UN="_thirdCol_hrlo3_17",YN="_fourthCol_hrlo3_21",HN="_topPadding_hrlo3_25",CN="_image_hrlo3_29",zN="_hjelpetekstInnhold_hrlo3_33",JN="_exclamationmarkIcon_hrlo3_38",WN="_checkmarkIcon_hrlo3_45",Ye={body:GN,hjelpetekst:LN,firstCol:KN,secCol:$N,thirdCol:UN,fourthCol:YN,topPadding:HN,image:CN,hjelpetekstInnhold:zN,exclamationmarkIcon:JN,checkmarkIcon:WN},ZN="arbeidsforhold",XN=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),QN=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(t,s)=>e.slice(s*25,s*25+25)).join("-")},Qm=({index:e,fieldId:n,saksnummer:r,sorterteArbeidsforhold:t,arbeidOgInntekt:s,arbeidsgiverOpplysningerPerId:i,isReadOnly:l,harÅpentAksjonspunkt:o,skjæringstidspunkt:g,alleKodeverk:m})=>{var w;const p=W(),{inntektsmeldinger:y,inntekter:f}=s,b=t[e],c=y.find(_=>XN(b,_)),N=(w=f.find(_=>_.arbeidsgiverIdent===b.arbeidsgiverIdent))==null?void 0:w.inntekter,h=t.filter(_=>_.arbeidsgiverIdent===b.arbeidsgiverIdent).length>1,E=i[b.arbeidsgiverIdent],R=A.useRef(null),[S,q]=A.useState(!1),B=A.useCallback(()=>q(_=>!_),[]);return a.jsx(Wm,{harÅpentAksjonspunkt:o,harBorderTop:e===0,children:a.jsx(on,{children:a.jsxs(M,{children:[a.jsxs(P,{children:[!o&&a.jsx(Hi,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.Ok"}),className:Ye.checkmarkIcon}),o&&a.jsx(xr,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.Aksjonspunkt"}),className:Ye.exclamationmarkIcon})]}),a.jsxs(P,{className:Ye.body,children:[a.jsxs(on,{children:[a.jsxs(M,{children:[a.jsxs(P,{className:Ye.firstCol,children:[a.jsx(F,{size:"small",children:E.navn}),b.arbeidsgiverIdent&&a.jsxs(ke,{children:["(",E.erPrivatPerson&&E.fødselsdato?a.jsx(Ae,{dateString:E.fødselsdato}):b.arbeidsgiverIdent,")"]})]}),a.jsxs(P,{className:Ye.secCol,children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Periode"})}),a.jsxs(T,{size:"small",children:[b&&a.jsx(Ue,{dateStringFom:b.fom,dateStringTom:b.tom!==Be?b.tom:void 0}),!b&&"-"]})]}),a.jsxs(P,{className:Ye.thirdCol,children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Kilde"})}),a.jsx(T,{size:"small",children:a.jsx(k,{id:b?"ArbeidsforholdFieldArray.AaRegisteret":"ArbeidsforholdFieldArray.Inntektsmelding"})})]}),a.jsxs(P,{className:Ye.fourthCol,children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.InntektsmeldingMottatt"})}),a.jsxs(T,{size:"small",children:[(c==null?void 0:c.motattDato)&&a.jsx(Ae,{dateString:c.motattDato}),!(c!=null&&c.motattDato)&&a.jsx(k,{id:"ArbeidsforholdFieldArray.IkkeMottatt"})]})]})]}),a.jsx(x,{sixteenPx:!0}),a.jsxs(M,{children:[a.jsxs(P,{className:Ye.firstCol,children:[h&&b.eksternArbeidsforholdId&&a.jsxs(a.Fragment,{children:[a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Id"})})}),a.jsxs(P,{className:Ye.topPadding,children:[b.eksternArbeidsforholdId.length<50&&a.jsx(T,{size:"small",children:b.eksternArbeidsforholdId}),b.eksternArbeidsforholdId.length>=50&&a.jsx(Du,{content:QN(b.eksternArbeidsforholdId),placement:"bottom",children:a.jsx(T,{size:"small",children:`${b.eksternArbeidsforholdId.substring(0,50)}...`})})]})]}),a.jsx(x,{eightPx:!0})]}),b.stillingsprosent&&a.jsxs(a.Fragment,{children:[a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"ArbeidsforholdFieldArray.Stillingsprosent"})})}),a.jsx(P,{className:Ye.topPadding,children:a.jsx(T,{size:"small",children:`${b.stillingsprosent}%`})})]}),a.jsx(x,{eightPx:!0})]}),c&&a.jsx(Zm,{saksnummer:r,inntektsmelding:c}),!c&&N&&a.jsxs(a.Fragment,{children:[a.jsx(x,{thirtyTwoPx:!0}),a.jsx(Xm,{inntektsposter:N,skjæringstidspunkt:g}),a.jsx(x,{thirtyTwoPx:!0})]})]}),a.jsx(P,{children:b.permisjonOgMangel&&a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:`${Qr(m,gn.PERMISJONSBESKRIVELSE_TYPE,b.permisjonOgMangel.type)} 100%`}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:b.permisjonOgMangel.permisjonFom,dateStringTom:void 0})})]})})]})]}),a.jsx(Ne,{name:`${ZN}.${e}.permisjonStatus`,label:a.jsx(on,{children:a.jsxs(M,{children:[a.jsx(P,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed"})}),a.jsxs(P,{className:Ye.image,children:[a.jsx(ae,{ref:R,type:"button",variant:"tertiary",onClick:B,icon:a.jsx(Qi,{title:p.formatMessage({id:"ArbeidsforholdFieldArray.AltHjelpetekst"})})}),a.jsx(Ar,{open:S,onClose:B,anchorEl:R.current,className:Ye.hjelpetekst,children:a.jsxs(Ar.Content,{className:Ye.hjelpetekstInnhold,children:[a.jsx(T,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel1"})}),a.jsx(x,{eightPx:!0}),a.jsx(T,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel2"})}),a.jsx(x,{eightPx:!0}),a.jsx(T,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel3"})}),a.jsx(x,{eightPx:!0}),a.jsx(T,{children:a.jsx(k,{id:"ArbeidsforholdFieldArray.HjelpetekstDel4"})})]})})]})]})}),validate:[X],isReadOnly:l,radios:[{label:p.formatMessage({id:c?"ArbeidsforholdFieldArray.TaMedArbeidsforhold":"ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding"}),value:Di.IKKE_BRUK_PERMISJON},{label:p.formatMessage({id:"ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold"}),value:Di.BRUK_PERMISJON}]}),a.jsx(x,{fourPx:!0})]})]})})},n)};Qm.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdField",props:{index:{required:!0,tsType:{name:"number"},description:""},fieldId:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const eS="arbeidsforhold",ep=({saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:s,harÅpentAksjonspunkt:i,skjæringstidspunkt:l,alleKodeverk:o})=>{const{control:g}=Ie(),{fields:m}=nn({control:g,name:eS});return a.jsx(a.Fragment,{children:m.map((p,y)=>a.jsx(Qm,{fieldId:p.id,index:y,saksnummer:e,sorterteArbeidsforhold:n,arbeidOgInntekt:r,arbeidsgiverOpplysningerPerId:t,isReadOnly:s,harÅpentAksjonspunkt:i,skjæringstidspunkt:l,alleKodeverk:o},p.id))})};ep.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdFieldArray",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},sorterteArbeidsforhold:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const nS=bn(3),rS=cn(1500),tS=e=>(n,r)=>e[n.arbeidsgiverIdent].navn.localeCompare(e[r.arbeidsgiverIdent].navn),np=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n})=>{const{aksjonspunkterForPanel:r,fagsak:t,submitCallback:s,isReadOnly:i,alleKodeverk:l}=En(),o=A.useMemo(()=>({inntektsmeldinger:e.inntektsmeldinger,arbeidsforhold:e.arbeidsforhold.filter(N=>{var h;return(h=N.permisjonOgMangel)==null?void 0:h.årsak}),inntekter:e.inntekter,skjæringstidspunkt:e.skjæringstidspunkt}),[e]),{arbeidsforhold:g}=o,m=A.useMemo(()=>[...g].sort(tS(n)),[g,n]),p=A.useMemo(()=>({arbeidsforhold:m.map(N=>{var h;return{permisjonStatus:(h=N.permisjonOgMangel)==null?void 0:h.permisjonStatus}}),begrunnelse:r[0].begrunnelse}),[m]),{formData:y,setFormData:f}=Ln(),b=Ce({defaultValues:y||p});A.useEffect(()=>()=>{f(b.getValues())},[]);const c=r.some(N=>N.status===er.OPPRETTET);return a.jsxs(a.Fragment,{children:[a.jsx(on,{children:a.jsxs(M,{spaceBetween:!0,children:[a.jsx(P,{children:a.jsx(se,{size:"small",children:a.jsx(k,{id:"PermisjonFaktaPanel.Overskrift"})})}),a.jsx(P,{children:a.jsx(T,{size:"small",children:a.jsx(k,{id:"PermisjonFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ve(o.skjæringstidspunkt)}})})})]})}),a.jsx(x,{thirtyTwoPx:!0}),c&&a.jsx(ar,{children:a.jsx(k,{id:"PermisjonFaktaPanel.PermisjonUtenSluttdato"})}),a.jsx(x,{thirtyTwoPx:!0}),a.jsxs(ze,{formMethods:b,onSubmit:N=>s({kode:de.VURDER_ARBEIDSFORHOLD_PERMISJON,arbeidsforhold:N.arbeidsforhold.map((h,E)=>({internArbeidsforholdId:m[E].internArbeidsforholdId,arbeidsgiverIdent:m[E].arbeidsgiverIdent,permisjonStatus:h.permisjonStatus})),begrunnelse:N.begrunnelse}),children:[a.jsx(ep,{saksnummer:t.saksnummer,sorterteArbeidsforhold:m,arbeidOgInntekt:o,arbeidsgiverOpplysningerPerId:n,isReadOnly:i,harÅpentAksjonspunkt:c,skjæringstidspunkt:o.skjæringstidspunkt,alleKodeverk:l}),a.jsx(x,{thirtyTwoPx:!0}),a.jsx(en,{label:a.jsx(F,{size:"small",children:a.jsx(k,{id:"PermisjonFaktaPanel.Begrunn"})}),name:"begrunnelse",validate:[X,nS,rS,jn],maxLength:1500,readOnly:i}),a.jsx(x,{sixteenPx:!0}),!i&&a.jsx(ae,{size:"small",variant:"primary",disabled:!b.formState.isDirty||b.formState.isSubmitting,loading:b.formState.isSubmitting,children:a.jsx(k,{id:"PermisjonFaktaPanel.Bekreft"})})]})]})};np.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const sS={"PermisjonFaktaPanel.Overskrift":"Fakta om permisjon","PermisjonFaktaPanel.Arbeidsforhold":"Arbeidsforhold","PermisjonFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","PermisjonFaktaPanel.Bekreft":"Bekreft og fortsett","PermisjonFaktaPanel.PermisjonUtenSluttdato":"Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.","PermisjonFaktaPanel.Begrunn":"Begrunn valget","ArbeidsforholdFieldArray.Periode":"Periode","ArbeidsforholdFieldArray.Kilde":"Kilde","ArbeidsforholdFieldArray.InntektsmeldingMottatt":"Inntektsmelding","ArbeidsforholdFieldArray.Saksbehandler":"Saksbehandler","ArbeidsforholdFieldArray.AaRegisteret":"A-inntekt","ArbeidsforholdFieldArray.Inntektsmelding":"Inntektsmelding","ArbeidsforholdFieldArray.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdFieldArray.Ok":"Arbeidsforhold er OK","ArbeidsforholdFieldArray.HjelpetekstDel1":"Søker er registrert med permisjon eller permittering uten sluttdato fra arbeidsforholdet sitt i AA-reg. Vurder om dette arbeidsforholdet skal være med i beregningen. Dersom det fjernes vil det bli borte fra beregningen og eventuell mottatt inntektsmelding vil ikke brukes. Tas det med, vil det brukes i beregningen og bli med videre i behandlingen.","ArbeidsforholdFieldArray.HjelpetekstDel2":"Dersom arbeidsforholdet tas med og det trengs inntektsmelding, må dette innhentes.","ArbeidsforholdFieldArray.HjelpetekstDel3":"Permisjoner eller permitteringer med en sluttdato tas automatisk med. Du trenger ikke etterspørre inntektsmeldinger.","ArbeidsforholdFieldArray.HjelpetekstDel4":"Mottas det inntektsmelding med refusjonskrav vil denne brukes i behandlingen.","ArbeidsforholdFieldArray.Id":"ID","ArbeidsforholdFieldArray.Stillingsprosent":"Stillingsprosent","ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed":"Skal arbeidsforholdet tas med?","ArbeidsforholdFieldArray.TaMedArbeidsforhold":"Fjern permisjonen og ta med arbeidsforholdet","ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding":"Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes","ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold":"Ikke ta med arbeidsforholdet","ArbeidsforholdFieldArray.IkkeMottatt":"Ikke mottatt","ArbeidsforholdFieldArray.AltHjelpetekst":"Hjelpetekst","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsposterPanel.Inntekter":"Inntekter (fra A-inntekt)","InntektsposterPanel.1":"Jan","InntektsposterPanel.2":"Feb","InntektsposterPanel.3":"Mars","InntektsposterPanel.4":"Apr","InntektsposterPanel.5":"Mai","InntektsposterPanel.6":"Jun","InntektsposterPanel.7":"Jul","InntektsposterPanel.8":"Aug","InntektsposterPanel.9":"Sep","InntektsposterPanel.10":"Okt","InntektsposterPanel.11":"Nov","InntektsposterPanel.12":"Des","InntektsposterPanel.TidligereManeder":"Tidligere måneder ","InntektsposterPanel.FaerreManeder":"Siste måneder ","InntektsposterPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-inntekt"},aS=Ke(sS),rp=e=>a.jsx(Ge,{value:aS,children:a.jsx(np,{...e})});rp.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Yg=[de.VURDER_ARBEIDSFORHOLD_PERMISJON],iS=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),{behandling:r}=A.use(Pn),t=lr(Yg),s=xn(r),{data:i}=Sn(s.arbeidOgInntektOptions(r));return a.jsx(dr,{standardPanelProps:t,faktaPanelKode:ir.PERMISJON,faktaPanelMenyTekst:n.formatMessage({id:"FaktaInitPanel.Title.Permisjon"}),skalPanelVisesIMeny:Yg.some(l=>fs(l,r.aksjonspunkt)),children:i?a.jsx(rp,{arbeidOgInntekt:i,arbeidsgiverOpplysningerPerId:e}):a.jsx(Nn,{})})};iS.__docgenInfo={description:"",methods:[],displayName:"PermisjonFaktaInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};var ue=(e=>(e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="FASTSETT_BG_AT_FL",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN",e.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON="VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="FASTSETT_BG_SN",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="FASTSETT_BG_TB_ARB",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="FASTSETT_BG_SN_NY_I_ARB_LIVT",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="VURDER_GRADERING_UTEN_BG",e))(ue||{});function tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hg={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function lS(){if(Cg)return $r;Cg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(t,s,i){var l=null;if(i!==void 0&&(l=""+i),s.key!==void 0&&(l=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:e,type:t,key:l,ref:s!==void 0?s:null,props:i}}return $r.Fragment=n,$r.jsx=r,$r.jsxs=r,$r}var zg;function dS(){return zg||(zg=1,Hg.exports=lS()),Hg.exports}var d=dS(),Jg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Wg;function oS(){return Wg||(Wg=1,function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i="",l=0;l<arguments.length;l++){var o=arguments[l];o&&(i=s(i,t.call(this,o)))}return i}function t(i){if(typeof i=="string"||typeof i=="number")return this&&this[i]||i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(this,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var l="";for(var o in i)n.call(i,o)&&i[o]&&(l=s(l,this&&this[o]||o));return l}function s(i,l){return l?i?i+" "+l:i+l:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Jg)),Jg.exports}var gS=oS();const uS=tp(gS);var Ss=(e=>(e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.BEHANDLING_TYPE="BehandlingType",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.INNTEKTSKATEGORI="Inntektskategori",e.AKTIVITET_STATUS="AktivitetStatus",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.BEHANDLING_STATUS="BehandlingStatus",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.AKTSOMHET="Aktsomhet",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.HENDELSE_TYPE="HendelseType",e.HENDELSE_UNDERTYPE="HendelseUnderType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e))(Ss||{}),qs=(e=>(e.BRUKERS_ANDEL="BRUKERS_ANDEL",e.FRILANS="FRILANS",e.EGEN_NÆRING="EGEN_NÆRING",e))(qs||{}),K=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(K||{});qs.BRUKERS_ANDEL;qs.FRILANS;qs.EGEN_NÆRING;const kS=["FL","AT_FL","AT_FL_SN","FL_SN"],mS=["AT","AT_FL","AT_FL_SN","AT_SN"],pS=["SN","FL_SN","AT_FL_SN","AT_SN"],vS=["AT_FL","AT_FL_SN","FL_SN","AT_SN"],yS=["DP","SP_AV_DP","PSB_AV_DP","AAP"],fS=["KUN_YTELSE"],bS=["MS"],sp=e=>yS.some(n=>n===e),cS=e=>fS.some(n=>n===e),ap=e=>kS.some(n=>n===e),ip=e=>mS.some(n=>n===e),lp=e=>pS.some(n=>n===e),jS=e=>vS.some(n=>n===e),hS=e=>bS.some(n=>n===e);var dp=(e=>(e.OPPRETTET="OPPR",e.UTFORT="UTFO",e.AVBRUTT="AVBR",e))(dp||{});const xs=e=>e==="OPPR";var op=(e=>(e.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD="VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",e.VURDER_SN_NY_I_ARBEIDSLIVET="VURDER_SN_NY_I_ARBEIDSLIVET",e.VURDER_NYOPPSTARTET_FL="VURDER_NYOPPSTARTET_FL",e.FASTSETT_MAANEDSINNTEKT_FL="FASTSETT_MAANEDSINNTEKT_FL",e.VURDER_LONNSENDRING="VURDER_LØNNSENDRING",e.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING="FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",e.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON="VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",e.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE="FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",e.VURDER_ETTERLONN_SLUTTPAKKE="VURDER_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_ETTERLONN_SLUTTPAKKE="FASTSETT_ETTERLØNN_SLUTTPAKKE",e.FASTSETT_BG_KUN_YTELSE="FASTSETT_BG_KUN_YTELSE",e.VURDER_MOTTAR_YTELSE="VURDER_MOTTAR_YTELSE",e.VURDER_BESTEBEREGNING="VURDER_BESTEBEREGNING",e.VURDER_MILITÆR_SIVILTJENESTE="VURDER_MILITÆR_SIVILTJENESTE",e.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT="VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",e))(op||{}),yn=(e=>(e.YTELSE="YTELSEINNTEKT",e.ARBEID="ARBEIDSTAKERINNTEKT",e.FRILANS="FRILANSINNTEKT",e))(yn||{}),wi=(e=>(e.LØNN="LØNN",e.NÆRING="NÆRING",e.UDEFINERT="-",e))(wi||{}),Vi=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Vi||{}),jr=(e=>(e.NATURALYTELSE_BORTFALT="NATURALYTELSE_BORTFALT",e.ARBEIDSFORHOLD_AVSLUTTET="ARBEIDSFORHOLD_AVSLUTTET",e.NATURALYTELSE_TILKOMMER="NATURALYTELSE_TILKOMMER",e.ENDRING_I_REFUSJONSKRAV="ENDRING_I_REFUSJONSKRAV",e.ENDRING_I_AKTIVITETER_SØKT_FOR="ENDRING_I_AKTIVITETER_SØKT_FOR",e.REFUSJON_OPPHOERER="REFUSJON_OPPHØRER",e.GRADERING="GRADERING",e.GRADERING_OPPHOERER="GRADERING_OPPHØRER",e.UDEFINERT="-",e))(jr||{}),gp=(e=>(e[e.HUNDRE=100]="HUNDRE",e[e.ATTI=80]="ATTI",e))(gp||{}),_l=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e.PLEIEPENGER="PSB",e.OMSORGSPENGER="OMP",e.OMSORGSPENGER_MIDLERTIDIG_ALENE="OMP_MA",e.OMSORGSPENGER_KRONISK_SYKT_BARN="OMP_KS",e.OMSORGSPENGER_ALENE_OM_OMSORGEN="OMP_AO",e.FRISINN="FRISINN",e.PLEIEPENGER_SLUTTFASE="PPN",e))(_l||{}),ve=(e=>(e.FL="SAMMENLIGNING_FL",e.SN="SAMMENLIGNING_SN",e.AT="SAMMENLIGNING_AT",e.AT_FL="SAMMENLIGNING_AT_FL",e.ATFLSN="SAMMENLIGNING_ATFL_SN",e.MIDLERTIDIG_INAKTIV="SAMMENLIGNING_MIDL_INAKTIV",e))(ve||{}),up=(e=>(e.FEIL_I_LOVANDVENDELSE="RE-LOV",e.FEIL_REGELVERKSFORSTAELSE="RE-RGLF",e.FEIL_ELLER_ENDRET_FAKTA="RE-FEFAKTA",e.FEIL_PROSESSUELL="RE-PRSSL",e.ETTER_KLAGE="ETTER_KLAGE",e.ANNET="RE-ANNET",e.KLAGE_U_INNTK="RE-KLAG-U-INNTK",e.KLAGE_M_INNTK="RE-KLAG-M-INNTK",e.MEDLEMSKAP="RE-MDL",e.OPPTJENING="RE-OPTJ",e.FORDELING="RE-FRDLING",e.INNTEKT="RE-INNTK",e.FØDSEL="RE-FØDSEL",e.DØD="RE-DØD",e.SØKERS_RELASJON="RE-SRTB",e.SØKNADSFRIST="RE-FRIST",e.BEREEGNINGSGRUNNLAG="RE-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_INNVILGET="RE-TILST-YT-INNVIL",e.RE_ENDRING_BEREGNINGSGRUNNLAG="RE-ENDR-BER-GRUN",e.RE_TILSTØTENDE_YTELSE_OPPHØRT="RE-TILST-YT-OPPH",e.RE_ENDRING_FRA_BRUKER="RE-END-FRA-BRUKER",e.RE_ENDRET_INNTEKTSMELDING="RE-END-INNTEKTSMELD",e.RE_KLAGE_KA="RE_KLAGE_KA",e.RE_KLAGE_NFP="RE_KLAGE_NFP",e.RE_VILKÅR="RE_VILKÅR",e.RE_FORELDELSE="RE_FORELDELSE",e.RE_FEILUTBETALT_BELØP_REDUSERT="RE_FEILUTBETALT_BELØP_REDUSERT",e.REBEREGN_FERIEPENGER="REBEREGN-FERIEPENGER",e))(up||{}),hn=(e=>(e.MANUELT_BEHANDLET="MANUELT_BEHANDLET",e.DELVIS_MÅNEDSINNTEKT_SISTE_MND="DELVIS_MÅNEDSINNTEKT_SISTE_MND",e.FULL_MÅNEDSINNTEKT_EN_MND="FULL_MÅNEDSINNTEKT_EN_MND",e.FULL_MÅNEDSINNTEKT_TO_MND="FULL_MÅNEDSINNTEKT_TO_MND",e))(hn||{});const Zg=e=>e?`...${e.substring(e.length-4,e.length)}`:"",Ps=(e,n)=>{const{navn:r,fødselsdato:t,erPrivatPerson:s,identifikator:i}=e;return s?t?`${r} (${I(t).format(te)})${Zg(n)}`:r:i?`${r} (${i})${Zg(n)}`:r},Xg=(e,n)=>{var r;return e.arbeidsforhold&&e.arbeidsforhold.arbeidsforholdType&&((r=n[Ss.OPPTJENING_AKTIVITET_TYPE].find(t=>{var s;return t.kode===((s=e.arbeidsforhold)==null?void 0:s.arbeidsforholdType)}))==null?void 0:r.navn)||""},Mi=(e,n,r)=>{if(e.arbeidsforhold&&e.arbeidsforhold.arbeidsgiverIdent){const t=n[e.arbeidsforhold.arbeidsgiverIdent];return t?Ps(t,e.arbeidsforhold.eksternArbeidsforholdId):Xg(e,r)}return Xg(e,r)},AS="_aksjonspunktBehandlerBorder_13dyh_1",IS="_aksjonspunktBehandlerHeader_13dyh_10",TS="_aksjonspunktBehandlerImageCol_13dyh_18",RS="_aksjonspunktBehandlerTextCol_13dyh_24",ES="_aksjonspunktBehandlerNoBorder_13dyh_27",NS="_verticalLine_13dyh_40",SS="_verticalAlignMiddle_13dyh_47",qS="_inputPadding_13dyh_54",xS="_inntektTableTB_13dyh_65",PS="_rowSpacer_13dyh_69",BS="_textAreaWrapperHeigh_13dyh_112",FS="_dynamiskKolonne_13dyh_119",_S="_textAreaStyle_13dyh_123",OS="_atflAvvikAktivitet_13dyh_129",DS="_atflAvvikInntekt_13dyh_133",wS="_breddeInntekt_13dyh_139",VS="_warningIcon_13dyh_142",MS="_aksjonspunktWrapper_13dyh_148",oe={aksjonspunktBehandlerBorder:AS,aksjonspunktBehandlerHeader:IS,aksjonspunktBehandlerImageCol:TS,aksjonspunktBehandlerTextCol:RS,aksjonspunktBehandlerNoBorder:ES,verticalLine:NS,verticalAlignMiddle:SS,inputPadding:qS,inntektTableTB:xS,rowSpacer:PS,textAreaWrapperHeigh:BS,dynamiskKolonne:FS,textAreaStyle:_S,atflAvvikAktivitet:OS,atflAvvikInntekt:DS,breddeInntekt:wS,warningIcon:VS,aksjonspunktWrapper:MS},GS=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,kp=e=>e?e.filter(n=>n.aktivitetStatus===K.ARBEIDSTAKER).filter(n=>n.skalFastsetteGrunnlag===!0).filter(n=>GS(n)):[],LS=(e,n,r,t,s,i,l)=>e.map((o,g)=>d.jsxs(M,{className:oe.verticalAlignMiddle,children:[d.jsx(P,{className:oe.atflAvvikAktivitet,children:d.jsx(T,{size:"small",children:Mi(o,t,n)})}),d.jsx(P,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:r?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${i}.${s}.inntekt${g}`,validate:l?[X,rn(178956970)]:[],readOnly:r,parse:Oe,className:oe.breddeInntekt,isEdited:r&&(!!o.overstyrtPrAar||o.overstyrtPrAar===0)})})})]},`index${g+1}`)),Ol=({readOnly:e,alleAndelerIForstePeriode:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:s,formName:i,skalValideres:l})=>{const o=kp(n);return d.jsx(d.Fragment,{children:LS(o,r,e,t,s,i,l)})};Ol.transformValues=(e,n)=>{let r=[];return n.find(t=>t.aktivitetStatus===K.ARBEIDSTAKER)&&(r=kp(n).map(({andelsnr:t},s)=>{const i=e[`inntekt${s}`];if(!t)throw new Error("Forventer andelsnr på andeler som skal fastsettes.");return{inntekt:i===void 0||i===""?0:ye(i),andelsnr:t}})),r};const KS="_avsnittOverskrift_3qwr0_1",$S="_venstreKolonne_3qwr0_5",US="_hoyreKolonne_3qwr0_8",YS="_panelLeft_3qwr0_11",HS="_panelRight_3qwr0_21",CS="_storSpace_3qwr0_32",zS="_semiBoldText_3qwr0_35",JS="_redError_3qwr0_41",WS="_tabellAktivitet_3qwr0_44",ZS="_tabellInntekt_3qwr0_54",XS="_tagMargin_3qwr0_85",$={avsnittOverskrift:KS,venstreKolonne:$S,hoyreKolonne:US,panelLeft:YS,panelRight:HS,storSpace:CS,semiBoldText:zS,næringEndringBeskrivelse:"_næringEndringBeskrivelse_3qwr0_38",redError:JS,tabellAktivitet:WS,tabellInntekt:ZS,næringOpplysningNavn:"_næringOpplysningNavn_3qwr0_66",næringOpplysningInntekt:"_næringOpplysningInntekt_3qwr0_69",næringOpplysningOrgnr:"_næringOpplysningOrgnr_3qwr0_73",næringOpplysningDato:"_næringOpplysningDato_3qwr0_76",tagMargin:XS},Qg="inntektField",QS=e=>!!e.periodeAarsaker&&e.periodeAarsaker.map(n=>n).includes(jr.ARBEIDSFORHOLD_AVSLUTTET),Bs=e=>{const n=[];let r=0;for(;r<e.length;){const t={...e[r]};for(r+=1;r<e.length&&!QS(e[r]);)r+=1;t.beregningsgrunnlagPeriodeTom=e[r-1].beregningsgrunnlagPeriodeTom,n.push(t)}return n},Sr=(e,n)=>e.arbeidsforhold?`${Qg}_${e.arbeidsforhold.arbeidsforholdId}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`:`${Qg}_${e.andelsnr}_${n.beregningsgrunnlagPeriodeFom}`,Fs=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.filter(n=>n.aktivitetStatus===K.ARBEIDSTAKER&&n.erTilkommetAndel!==!0):[],mp=e=>{const n=e!=null&&e.arbeidsforholdId?e==null?void 0:e.arbeidsforholdId:"";return e?`${e.arbeidsgiverIdent}${n}`:""},eq=(e,n,r)=>{var t;const s=e.arbeidsgiverIdent?r[e.arbeidsgiverIdent]:null;return s?Ps(s,e.eksternArbeidsforholdId):e.arbeidsforholdType?(t=n[Ss.OPPTJENING_AKTIVITET_TYPE].find(i=>i.kode===e.arbeidsforholdType))==null?void 0:t.navn:""},pp=()=>({erTidsbegrenset:!0,isEditable:!1,tabellInnhold:"",inputfieldKey:""}),nq=(e,n,r)=>{const t=Fs(e),s={};return t.forEach(i=>{if(!i.arbeidsforhold)return;const l=mp(i.arbeidsforhold),o=pp();o.tabellInnhold=eq(i.arbeidsforhold,n,r),o.erTidsbegrenset=i.erTidsbegrensetArbeidsforhold!==void 0?i.erTidsbegrensetArbeidsforhold:!1,s[l]=[o]}),s},Dl=e=>e.sort((n,r)=>I(n.beregningsgrunnlagPeriodeFom).diff(I(r.beregningsgrunnlagPeriodeFom)))[0],vp=(e,n)=>{const r=n.beregningsgrunnlagPrStatusOgAndel;return e.aktivitetStatus===K.ARBEIDSTAKER?r==null?void 0:r.find(t=>{var s,i,l,o;return((s=t.arbeidsforhold)==null?void 0:s.arbeidsgiverIdent)===((i=e.arbeidsforhold)==null?void 0:i.arbeidsgiverIdent)&&((l=t.arbeidsforhold)==null?void 0:l.arbeidsforholdId)===((o=e.arbeidsforhold)==null?void 0:o.arbeidsforholdId)}):r==null?void 0:r.find(t=>t.aktivitetStatus===e.aktivitetStatus)},wl=(e,n)=>{var r;const t=Dl(n);return!!((r=vp(e,t))!=null&&r.erTidsbegrensetArbeidsforhold)},rq=(e,n,r)=>{const t=Bs(e),s=e[0].beregningsgrunnlagPeriodeFom,i=nq(e[0],n,r);return t.forEach(l=>{const o=l.beregningsgrunnlagPeriodeFom===s;Fs(l).forEach(g=>{const m=wl(g,e),p=mp(g.arbeidsforhold),y=pp();y.tabellInnhold=g.overstyrtPrAar!==void 0&&g.overstyrtPrAar!==null?G(g.overstyrtPrAar):"",y.erTidsbegrenset=!1,y.isEditable=m?!0:o,y.inputfieldKey=Sr(g,l),i[p].push(y)})}),i},tq=e=>d.jsxs("tr",{id:"bruttoPrPeriodeRad",children:[d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode"})})},"bruttoTittel"),e.map(n=>d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",className:$.semiBoldText,children:G(n.brutto)})},n.periodeFom))]},"bruttoPrPeriodeRad"),sq=e=>d.jsxs("tr",{children:[d.jsx("td",{}),e.map(n=>{const r=n.periodeFom;return d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:Ve(r)})},`periodeittel${r}`)}),d.jsx("td",{})]},"PeriodeHeaderRad"),aq=(e,n,r,t,s,i,l)=>{const o=[];return o.push(sq(t)),o.push(d.jsxs("tr",{children:[d.jsx("td",{colSpan:2},"ombergenetAarBlank"),t.map((g,m)=>d.jsx(Y.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"},`Tittel_${g.periodeFom}`)})},`Col_Tittel_${g.periodeFom}`)},`PeriodeWrapper${m+1}`))]},"Tabletop")),Object.keys(e).forEach(g=>{const m=e[g];o.push(d.jsx("tr",{children:m.map(p=>p.isEditable?d.jsx(Y.Fragment,{children:d.jsx("td",{colSpan:2,children:d.jsx("div",{className:r&&n?oe.adjustedField:void 0,children:d.jsx(ce,{name:`${i}.${s}.${p.inputfieldKey}`,validate:l?[X,rn(178956970)]:void 0,readOnly:n,isEdited:n&&r,parse:Oe,className:oe.breddeInntekt})})},`Col-${p.inputfieldKey}`)},`key${p.inputfieldKey}`):d.jsx("td",{colSpan:2,children:d.jsx(T,{size:"small",children:p.tabellInnhold})},p.tabellInnhold))},g))}),o.push(d.jsx("tr",{className:oe.rowSpacer,children:d.jsx("td",{})},"sdeparator")),o.push(tq(t)),o},iq=(e,n,r,t)=>{const s=[];return e.length<1||Bs(e).forEach(i=>{const l=Fs(i).map(o=>{const g=Sr(o,i),m=n.watch(`${t}.${r}.${g}`);return m===void 0||m===""?0:ye(m)}).reduce((o,g)=>o+g);s.push({brutto:l,periodeFom:i.beregningsgrunnlagPeriodeFom,periodeTom:i.beregningsgrunnlagPeriodeTom})}),s},Pt=({readOnly:e,allePerioder:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,fieldIndex:s,formName:i,skalValideres:l})=>{const o=rq(n,r,t),g=n.some(y=>{var f;return(f=y.beregningsgrunnlagPrStatusOgAndel)==null?void 0:f.some(b=>b.aktivitetStatus===K.ARBEIDSTAKER&&(!!b.overstyrtPrAar||b.overstyrtPrAar===0))}),m=Ie(),p=iq(n,m,s,i);return d.jsx("table",{className:oe.inntektTableTB,children:d.jsx("tbody",{children:aq(o,e,g,p,s,i,l)})})};Pt.buildInitialValues=e=>{const n={},r=Bs(e),t=Dl(e);return r.forEach(s=>{(s.beregningsgrunnlagPrStatusOgAndel?s.beregningsgrunnlagPrStatusOgAndel.filter(i=>i.aktivitetStatus===K.ARBEIDSTAKER):[]).forEach(i=>{if(wl(i,e)){const l=G(i.overstyrtPrAar);n[Sr(i,s)]=l||""}else{const l=vp(i,t),o=G(l==null?void 0:l.overstyrtPrAar);n[Sr(i,s)]=o||""}})}),n};Pt.transformValues=(e,n)=>{const r=[],t=Dl(n);return Bs(n).forEach(s=>{const i=Fs(s),l=[];i.forEach(o=>{if(wl(o,n)){const g=ye(e[Sr(o,s)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}else{const g=ye(e[Sr(o,t)]);l.push({andelsnr:o.andelsnr,bruttoFastsattInntekt:g})}}),r.push({periodeFom:s.beregningsgrunnlagPeriodeFom,periodeTom:s.beregningsgrunnlagPeriodeTom,fastsatteTidsbegrensedeAndeler:l})}),r};const lq="_colDevider_1att7_1",dq={colDevider:lq},fn=({prosentBredde:e})=>{const n=`${e}%`;return d.jsx(M,{children:d.jsx("div",{style:{width:n},children:d.jsx(P,{children:d.jsx("div",{className:dq.colDevider})})})})},yp=e=>!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent?"N/A":e.arbeidsforhold.arbeidsforholdId?e.arbeidsforhold.arbeidsgiverIdent+e.arbeidsforhold.arbeidsforholdId:e.arbeidsforhold.arbeidsgiverIdent,oq=(e,n)=>{if(!e.arbeidsforhold||!e.arbeidsforhold.arbeidsgiverIdent)return"Ukjent arbeidsforhold";const r=n[e.arbeidsforhold.arbeidsgiverIdent];return Ps(r,e.arbeidsforhold.eksternArbeidsforholdId)},fp=e=>e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel:[],gq=(e,n)=>{const r=oq(e,n),t=yp(e);return{visningsnavn:r,nøkkel:t,naturalytelseEndringer:[]}},uq=e=>{var n;return!!((n=e.arbeidsforhold)!=null&&n.naturalytelseBortfaltPrÅr)},kq=(e,n)=>{if(!e||e.length<1)return[];const r=[];return e.forEach(t=>{fp(t).filter(s=>uq(s)).map(s=>gq(s,n)).forEach(s=>{r.some(({nøkkel:i})=>i===s.nøkkel)||r.push(s)})}),r},mq=(e,n)=>{const r=fp(e).find(t=>yp(t)===n);return(r&&r.arbeidsforhold?r.arbeidsforhold.naturalytelseBortfaltPrÅr:0)||0},pq=(e,n)=>{const r=[];return n.forEach(t=>{const s=mq(t,e.nøkkel);s&&r.push({fom:t.beregningsgrunnlagPeriodeFom||"",tom:t.beregningsgrunnlagPeriodeTom||"",beløpPrÅr:s,beløpPrMåned:s/12})}),r},vq=e=>{if(!e||e.length<2)return e;e.sort((t,s)=>I(t.fom).diff(I(s.fom)));const n=[];let r=I(e[0].fom);return e.forEach(t=>{if(!I(t.fom).isBefore(r)){const s=e.find(i=>I(i.fom).isAfter(t.fom)&&i.beløpPrÅr!==t.beløpPrÅr);if(s){const i=I(s.fom).subtract(1,"d");n.push({tom:i.format(Pe),fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned}),r=i}else r=I(Be),n.push({tom:"",fom:t.fom,beløpPrÅr:t.beløpPrÅr,beløpPrMåned:t.beløpPrMåned})}}),n},yq=(e,n)=>{const r=kq(e,n);return r.forEach(t=>{const s=pq(t,e);vq(s).forEach(i=>t.naturalytelseEndringer.push(i))}),!r||r.length<1?void 0:{rader:r}},fq=e=>e.tom?`${Ve(e.fom)} - ${Ve(e.tom)}`:`${Ve(e.fom)} -`,bq=({allePerioder:e,arbeidsgiverOpplysningerPerId:n})=>{const r=A.useMemo(()=>yq(e,n),[e]);return r?d.jsxs("div",{children:[d.jsx(F,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2"})}),d.jsxs(Q,{gap:"0",children:[d.jsxs(C,{gap:"10",justify:"end",children:[d.jsx(ke,{style:{width:"70px"},children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{style:{width:"70px"},children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),r.rader.map(t=>d.jsxs("div",{children:[d.jsx(F,{size:"small",children:t.visningsnavn}),d.jsx(Q,{gap:"1",children:t.naturalytelseEndringer.map(s=>d.jsxs(C,{justify:"space-between",children:[d.jsx(T,{size:"small",children:fq(s)}),d.jsxs(C,{gap:"10",children:[d.jsx(T,{size:"small",style:{width:"70px"},children:G(s.beløpPrMåned)}),d.jsx(F,{size:"small",style:{width:"70px"},children:G(s.beløpPrÅr)})]})]},t.nøkkel+s.fom))})]},t.nøkkel))]})]}):null},cq=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,bp=e=>e?e.filter(n=>n.aktivitetStatus===K.ARBEIDSTAKER).filter(n=>cq(n)):[],jq=e=>{const n=[];return Object.prototype.hasOwnProperty.call(e,"startdato")&&e.startdato&&n.push(Ve(e.startdato)),Object.prototype.hasOwnProperty.call(e,"opphoersdato")&&e.opphoersdato&&(n.push("-"),n.push(Ve(e.opphoersdato))),n.join(" ")},hq=e=>{const n=[""];return Object.prototype.hasOwnProperty.call(e,"stillingsNavn")&&e.stillingsNavn&&n.push(e.stillingsNavn),Object.prototype.hasOwnProperty.call(e,"stillingsProsent")&&e.stillingsProsent&&n.push(`${e.stillingsProsent}%`),n.length!==0?n.join(" "):" "},eu=e=>e.beregnetPrAar?e.beregnetPrAar:0,Aq=(e,n,r)=>{const t=e.reduce((l,o)=>l+eu(o),0),s=t?t/12:0,i=e.map((l,o)=>d.jsxs(Y.Fragment,{children:[d.jsx(Q,{gap:"2",children:d.jsxs(C,{justify:"space-between",children:[d.jsx(F,{size:"small",className:$.semiBoldText,children:Mi(l,r,n)}),d.jsxs(C,{gap:"10",children:[d.jsx(T,{children:G(eu(l)/12)}),d.jsx(F,{children:G(l.beregnetPrAar)})]})]})}),d.jsx(Q,{gap:"2",children:d.jsxs(C,{gap:"2",children:[l.arbeidsforhold&&l.arbeidsforhold.stillingsNavn&&d.jsx(T,{children:hq(l.arbeidsforhold)}),l.arbeidsforhold&&l.arbeidsforhold.startdato&&d.jsx(ke,{children:jq(l.arbeidsforhold)}),l.erTidsbegrensetArbeidsforhold&&d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset"})})]})}),d.jsx(fn,{prosentBredde:100})]},`ArbInntektWrapper${Mi(l,r,n)}${o+1}`));if(e.length>1){const l=d.jsx(Q,{gap:"0",children:d.jsxs(C,{justify:"space-between",children:[d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt"}),d.jsxs(C,{gap:"10",justify:"end",children:[d.jsx(T,{children:G(s)}),d.jsx(F,{children:G(t)})]})]})});i.push(l)}return i},Vl=({alleAndelerIFørstePeriode:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,kodeverkSamling:t})=>{const s=bp(e);return!s||s.length===0?null:d.jsxs(Q,{gap:"8",children:[d.jsxs(Q,{gap:"2",children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt"})}),d.jsxs(Q,{gap:"1",children:[d.jsxs(C,{gap:"10",justify:"end",children:[d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})}),d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})]}),d.jsx(fn,{prosentBredde:100}),Aq(s,t,r)]})]}),d.jsx(bq,{allePerioder:n,arbeidsgiverOpplysningerPerId:r})]})};Vl.buildInitialValues=e=>{const n=bp(e),r={};return n.forEach((t,s)=>{r[`inntekt${s}`]=G(t.overstyrtPrAar)||""}),r};var Gi={exports:{}},Iq=Gi.exports,nu;function Tq(){return nu||(nu=1,function(e,n){(function(r,t){e.exports=t(I)})(Iq,function(r){function t(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var s=t(r),i={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(l){return l+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(i,null,!0),i})}(Gi)),Gi.exports}var Rq=Tq();const Li=tp(Rq),Eq=({option:e,style:n,height:r})=>{const t=A.useRef(null);return A.useEffect(()=>{let s;t.current!==null&&(s=wv(t.current));const i=()=>{s==null||s.resize()};return window.addEventListener("resize",i),()=>{s==null||s.dispose(),window.removeEventListener("resize",i)}},[]),A.useEffect(()=>{if(t.current!==null){const s=Vv(t.current);s&&(s.setOption(e),(s==null?void 0:s.getWidth())===0&&(s==null||s.resize()))}},[t.current,e]),d.jsx("div",{ref:t,style:{width:"auto",height:r,...n}})},Nq="_sammenligningGrafOppsummeringType_1dad0_4",Sq="_sammenligningGrafOppsummeringInntekt_1dad0_7",qq="_readMore_1dad0_12",zn={sammenligningGrafOppsummeringType:Nq,sammenligningGrafOppsummeringInntekt:Sq,readMore:qq},xq=[],Pq="#99bdcd",Bq="#c1b5d0",Fq="#C6C2BF",_q=(e,n)=>{const r=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===yn.ARBEID).map(({beløp:i})=>i).reduce((i,l)=>i+l,0),t=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===yn.FRILANS).map(({beløp:i})=>i).reduce((i,l)=>i+l,0),s=e.flatMap(i=>i.inntekter).filter(i=>i.inntektAktivitetType===yn.YTELSE).map(({beløp:i})=>i).reduce((i,l)=>i+l,0);return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:$.storSpace}),d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel"})})})}),n.harArbeidsinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(M,{children:[d.jsx(P,{className:zn.sammenligningGrafOppsummeringType,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"})})}),d.jsx(P,{className:zn.sammenligningGrafOppsummeringInntekt,children:d.jsx(T,{size:"small",children:G(r)})})]}),d.jsx(fn,{prosentBredde:20})]}),n.harFrilansinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(M,{children:[d.jsx(P,{className:zn.sammenligningGrafOppsummeringType,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"})})}),d.jsx(P,{className:zn.sammenligningGrafOppsummeringInntekt,children:d.jsx(T,{size:"small",children:G(t)})})]}),d.jsx(fn,{prosentBredde:20})]}),n.harYtelseinntekt&&d.jsxs(d.Fragment,{children:[d.jsxs(M,{children:[d.jsx(P,{className:zn.sammenligningGrafOppsummeringType,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"})})}),d.jsx(P,{className:zn.sammenligningGrafOppsummeringInntekt,children:d.jsx(T,{size:"small",children:G(s)})})]}),d.jsx(fn,{prosentBredde:20})]})]})},Oq=(e,n)=>!e||e.length===0?0:n?e.filter(r=>r.inntektAktivitetType===n).reduce((r,t)=>r+t.beløp,0):e.reduce((r,t)=>r+t.beløp,0),yi=(e,n,r)=>{const t=[];for(let s=0;s<12;s+=1){const i=I(n,Pe).add(s,"M").format("YYYYMM"),l=e.find(g=>I(g.fom,Pe).format("YYYYMM")===i),o=Oq((l==null?void 0:l.inntekter)||[],r);t.push([o,i])}return t},Dq=()=>d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(se,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel"})})})},"SamenenligningsGrunnlagOverskrift"),d.jsx(x,{eightPx:!0}),d.jsx(M,{children:d.jsx(P,{children:d.jsx(k,{id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress"})})})]}),fi=(e,n)=>e.flatMap(r=>r.inntekter).some(r=>r.inntektAktivitetType===n),wq=e=>({harFrilansinntekt:fi(e,yn.FRILANS),harArbeidsinntekt:fi(e,yn.ARBEID),harYtelseinntekt:fi(e,yn.YTELSE)}),Vq=({sammenligningsGrunnlagInntekter:e,sammenligningsgrunnlag:n})=>{const r=W(),t=(e==null?void 0:e.måneder)||xq,s=A.useMemo(()=>wq(t),[t]),i=n&&n.length>0?n[0].sammenligningsgrunnlagFom:void 0,l=A.useMemo(()=>s.harArbeidsinntekt&&i?yi(t,i,yn.ARBEID):[],[s.harArbeidsinntekt,t,i]),o=A.useMemo(()=>s.harFrilansinntekt&&i?yi(t,i,yn.FRILANS):[],[s.harArbeidsinntekt,t,i]),g=A.useMemo(()=>s.harYtelseinntekt&&i?yi(t,i,yn.YTELSE):[],[s.harArbeidsinntekt,t,i]),m=A.useCallback(b=>b.value[0]>5e3?G(b.value[0])||"":b.value[0]===0?"":"..",[]);if(!t||t.length===0||!n||n.length<1)return null;const p=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid"}),y=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans"}),f=r.formatMessage({id:"Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse"});return d.jsxs(d.Fragment,{children:[d.jsx(xe,{size:"medium",header:Dq(),defaultOpen:!0,className:zn.readMore,children:d.jsx(Eq,{option:{tooltip:{trigger:"axis",formatter:b=>{const c=b,N=c[0].data,h=I(N[1]),E=h.locale(Li).format("MMM"),R=h.format("YYYY"),S=`${E.charAt(0).toUpperCase()+E.slice(1)} ${R}`,q=c.reduce((B,w)=>{const _=w.data;return B.concat(`${(w.marker||"")+(w.seriesName||"")}: ${G(_[0])}`)},[]).join("<br/>");return`${S}<br />${q}`},axisPointer:{type:"shadow"}},legend:{data:[p,y,f]},grid:{left:"1%",right:"5%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{formatter:b=>G(b)||"",margin:12}},yAxis:{type:"category",boundaryGap:!1,axisLabel:{formatter:b=>{const c=I(b),N=c.format("MM")==="01"||c.format("MM")==="12",h=c.locale(Li).format("MMM"),E=c.format("YYYY"),R=h.charAt(0).toUpperCase()+h.slice(1,3);return N?`${R}
${E}`:R}}},series:[{name:p,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:l},{name:y,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:o},{name:f,type:"bar",stack:"total",label:{show:!0,fontSize:"11",formatter:m},emphasis:{focus:"series"},data:g}],color:[Pq,Bq,Fq]},height:350})}),_q(t,s)]})},Mq=({alleAndeler:e})=>{var n;const r=e.find(i=>!i.erTilkommetAndel&&i.aktivitetStatus===K.FRILANSER);if(!r)return null;const t=r.beregnetPrAar,s=(n=r.arbeidsforhold)==null?void 0:n.startdato;return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt"})}),d.jsx(x,{fourPx:!0}),d.jsxs(M,{className:$.rows,children:[d.jsx(P,{className:$.tabellAktivitet,children:s&&d.jsxs(T,{size:"small",children:[d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2"}),d.jsx("span",{className:$.semiBoldText,children:d.jsx(Ae,{dateString:s})})]})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(fn,{prosentBredde:100}),d.jsxs(M,{className:$.rows,children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:t?G(t/12):0})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(F,{size:"small",children:t?G(t):0})})]})]})},Gq=({alleAndeler:e})=>{const n=e.filter(t=>t.aktivitetStatus===K.MILITAER_ELLER_SIVIL),r=n&&n.length>0?n[0].beregnetPrAar:"";return d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Militær"})})})}),d.jsx(x,{eightPx:!0}),d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",children:G(r)})})})]})},Lq=[],Kq=(e,n,r)=>{var t,s,i;const l=r.find(y=>y.år===e),o=l&&((t=l.inntekter.find(y=>y.pgiType===wi.NÆRING))==null?void 0:t.beløp)||0,g=l&&((s=l.inntekter.find(y=>y.pgiType===wi.LØNN))==null?void 0:s.beløp)||0,m=o+g,p=(i=n.find(y=>y.årstall===e))==null?void 0:i.beløp;return d.jsxs(j.Row,{shadeOnHover:!0,children:[d.jsx(j.DataCell,{children:e}),d.jsx(j.DataCell,{align:"right",children:G(g)}),d.jsx(j.DataCell,{align:"right",children:G(o)}),d.jsx(j.DataCell,{align:"right",children:G(m)}),d.jsx(j.DataCell,{align:"right",children:G(p)})]},e)},$q=(e,n)=>e.map(r=>r.årstall).sort((r,t)=>r-t).reverse().map(r=>Kq(r,e,n)),Uq=e=>d.jsxs(j.Row,{shadeOnHover:!0,children:[d.jsx(j.DataCell,{children:d.jsx(F,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum"})})}),d.jsx(j.DataCell,{}),d.jsx(j.DataCell,{}),d.jsx(j.DataCell,{}),d.jsx(j.DataCell,{align:"right",children:d.jsx(F,{children:G(e)})})]},"PGI-Oppsumert"),Yq=({alleAndeler:e,inntektsgrunnlag:n})=>{const r=e.find(l=>l.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||l.aktivitetStatus===K.BRUKERS_ANDEL),t=(n==null?void 0:n.pgiGrunnlag)||Lq;if(!r||!r.pgiSnitt||!r.pgiVerdier)return null;const{pgiVerdier:s,pgiSnitt:i}=r;return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt"})}),d.jsxs(j,{children:[d.jsx(j.Header,{children:d.jsxs(j.Row,{children:[d.jsx(j.HeaderCell,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.ATFL"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Næring"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Sum"})}),d.jsx(j.HeaderCell,{align:"right",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert"})})]})}),d.jsxs(j.Body,{children:[$q(s,t),Uq(i)]})]})]})},Hq="_merTekstBorder_1w256_9",Cq={merTekstBorder:Hq},zq=e=>{const n=e==null?void 0:e.virksomhetType;if(!n)return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT";switch(n){case"JORDBRUK_SKOGBRUK":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK";case"DAGMAMMA":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA";case"FISKE":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE";case"FRILANSER":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER";case"ANNEN":return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN";default:return"Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT"}},ru=e=>{const{oppstartsdato:n,opphørsdato:r}=e;if(n)return r?`${Ve(n)}-${Ve(r)} `:`${Ve(n)}-`},Jq=e=>{const{regnskapsførerNavn:n,regnskapsførerTlf:r}=e;if(n)return r?`${n}-${r} `:`${n}-`},Wq=(e,n)=>{const r=n[e.orgnr];return r?r.navn:"Ukjent bedriftsnavn"},Zq=e=>{const{oppstartsdato:n,erVarigEndret:r,endringsdato:t}=e,s=r?"Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret",i=r?t:n;return i?d.jsx(F,{size:"small",className:$.semiBoldText,children:d.jsx(k,{id:s,values:{dato:Ve(i),b:l=>d.jsx("b",{children:l})}})}):null},Xq=e=>{const{erNyoppstartet:n,erVarigEndret:r}=e;return!!r||!!n},Qq=e=>e.begrunnelse&&e.begrunnelse!==""?d.jsx(T,{size:"small",className:Cq.merTekstBorder,children:e.begrunnelse}):null,ex=e=>!!e.oppgittInntekt||e.oppgittInntekt===0,nx=({alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:n})=>{const r=e.find(t=>t.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE);return r!=null&&r.næringer?d.jsxs(d.Fragment,{children:[d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift"})})}),d.jsx(P,{className:$.tabellAktivitet}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar"})})})]}),d.jsx(fn,{prosentBredde:100}),r.næringer.map(t=>d.jsxs(Y.Fragment,{children:[d.jsxs(M,{children:[d.jsx(P,{className:$.næringOpplysningNavn,children:d.jsx(F,{size:"small",className:$.semiBoldText,children:Wq(t,n)})}),d.jsx(P,{className:$.næringOpplysningInntekt,children:ex(t)&&d.jsx(F,{size:"small",children:G(t.oppgittInntekt)})})]}),d.jsxs(M,{children:[d.jsx(P,{className:$.næringOpplysningOrgnr,children:d.jsx(T,{size:"small",children:t&&t.orgnr?t.orgnr:""})}),d.jsx(P,{className:$.næringOpplysningDato,children:ru(t)&&d.jsx(T,{size:"small",children:ru(t)})})]},`NaringsDetaljer${t.orgnr}`),d.jsx(M,{children:d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:zq(t)})})})}),d.jsx(M,{children:d.jsx(P,{children:t.regnskapsførerNavn&&d.jsx(T,{size:"small",children:Jq(t)})})},`RevisorRad${t.orgnr}`),Xq(t)&&d.jsxs(d.Fragment,{children:[d.jsx(fn,{prosentBredde:100}),d.jsx(x,{twentyPx:!0}),Zq(t),d.jsx(x,{eightPx:!0}),d.jsx(M,{className:$.næringEndringBeskrivelse,children:d.jsx(P,{children:Qq(t)})})]})]},`NaringsWrapper${t.orgnr}`))]}):null},rx=e=>e.aktivitetStatus===K.DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":e.aktivitetStatus===K.SYKEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":e.aktivitetStatus===K.PLEIEPENGER_AV_DAGPENGER?"Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":e.aktivitetStatus===K.ARBEIDSAVKLARINGSPENGER?"Beregningsgrunnlag.TilstottendeYtelse.AAP":"",tx=e=>e===K.DAGPENGER,sx=({alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:r})=>{const t=e.filter(i=>sp(i.aktivitetStatus)),s=t.length>1;return d.jsxs(d.Fragment,{children:[n.isKombinasjonsstatus&&d.jsxs(d.Fragment,{children:[d.jsx(x,{eightPx:!0}),d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.TilstottendeYtelse.TittelNav"})}),d.jsx(x,{eightPx:!0})]}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsx(fn,{prosentBredde:100}),t.map(i=>d.jsxs("div",{children:[d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(F,{size:"small",children:d.jsx(k,{id:rx(i)})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(i.beregnetPrAar?i.beregnetPrAar/12:0)})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",className:s?"":$.semiBoldText,children:G(i.beregnetPrAar)})})]}),d.jsx(fn,{prosentBredde:100}),r&&tx(i.aktivitetStatus)&&d.jsx(M,{children:d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.TilstottendeYtelse.Besteberegning"})})})})]},i.aktivitetStatus))]})},ax=({bruttoPrAar:e})=>e||e===0?d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsxs(P,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2"})}),d.jsx(x,{eightPx:!0})]})}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar"})})})]}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(e/12)})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(F,{size:"small",children:G(e)})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:ix,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:lx}=ue,dx=e=>e&&e.find(n=>n.definisjon===ix||n.definisjon===lx),ox=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel||[]:[],Hn=d.jsx("div",{className:$.storSpace}),gx=(e,n,r,t,s,i,l,o)=>d.jsxs("div",{className:$.panelLeft,children:[n.isArbeidstaker&&d.jsx(Vl,{alleAndelerIFørstePeriode:e,allePerioder:r,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:i}),n.isFrilanser&&d.jsxs(d.Fragment,{children:[Hn,d.jsx(Mq,{alleAndeler:e})]}),n.harDagpengerEllerAAP&&d.jsxs("div",{children:[Hn,d.jsx(sx,{alleAndeler:e,relevanteStatuser:n,gjelderBesteberegning:t})]}),n.isMilitaer&&d.jsxs(d.Fragment,{children:[Hn,d.jsx(Gq,{alleAndeler:e})]}),n.harAndreTilstotendeYtelser&&d.jsxs(d.Fragment,{children:[Hn,d.jsx(ax,{bruttoPrAar:r[0].bruttoPrAar})]}),(n.isSelvstendigNaeringsdrivende||n.isMidlertidigInaktiv)&&d.jsxs(d.Fragment,{children:[Hn,d.jsx(Yq,{alleAndeler:e,inntektsgrunnlag:o}),Hn,d.jsx(nx,{alleAndelerIForstePeriode:e,arbeidsgiverOpplysningerPerId:i})]}),(n.isFrilanser||n.isArbeidstaker)&&o&&l&&d.jsxs(d.Fragment,{children:[Hn,d.jsx(Vq,{sammenligningsGrunnlagInntekter:o,sammenligningsgrunnlag:l})]})]}),tr=({relevanteStatuser:e,allePerioder:n=void 0,gjelderBesteberegning:r,kodeverkSamling:t,sammenligningsGrunnlagInntekter:s=void 0,arbeidsgiverOpplysningerPerId:i,sammenligningsgrunnlag:l})=>{if(!n)return null;const o=ox(n);return gx(o,e,n,r,t,i,l,s)};tr.buildInitialValues=e=>{const n=dx(e);return{ATFLVurdering:n&&n.begrunnelse?n.begrunnelse:""}};tr.transformATFLValues=(e,n)=>({begrunnelse:e.ATFLVurdering,inntektPrAndelList:Ol.transformValues(e,n),inntektFrilanser:e.inntektFrilanser!==void 0?ye(e.inntektFrilanser):null});tr.transformATFLTidsbegrensetValues=(e,n)=>({begrunnelse:e.ATFLVurdering,fastsatteTidsbegrensedePerioder:Pt.transformValues(e,n),frilansInntekt:e.inntektFrilanser!==void 0?ye(e.inntektFrilanser):null});const ux="_kolBeskrivelse_1czvx_1",kx="_kolVerdi_1czvx_4",mx="_radNoBorder_1czvx_9",px="_radDobbelLinje_1czvx_14",vx="_radEnkelLinje_1czvx_20",yx="_radTykkLinje_1czvx_24",be={kolBeskrivelse:ux,kolVerdi:kx,radNoBorder:mx,radDobbelLinje:px,radEnkelLinje:vx,radTykkLinje:yx,kolVerdiRød:"_kolVerdiRød_1czvx_28",avslåttIkon:"_avslåttIkon_1czvx_38"},fx=260,cp={[K.ARBEIDSTAKER]:{rekkefølgePri:1,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeid"},[K.FRILANSER]:{rekkefølgePri:2,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Frilans"},[K.DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Dagpenger"},[K.SYKEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger"},[K.PLEIEPENGER_AV_DAGPENGER]:{rekkefølgePri:3,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger"},[K.ARBEIDSAVKLARINGSPENGER]:{rekkefølgePri:4,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger"},[K.KUN_YTELSE]:{rekkefølgePri:5,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Ytelse"},[K.MILITAER_ELLER_SIVIL]:{rekkefølgePri:6,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Militær"},[K.BRUKERS_ANDEL]:{rekkefølgePri:7,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.BrukersAndel"},[K.SELVSTENDIG_NAERINGSDRIVENDE]:{rekkefølgePri:8,beskrivelseId:"Beregningsgrunnlag.Beregningsresultat.Næring"}},tu=e=>{var n;return((n=cp[e.status])==null?void 0:n.rekkefølgePri)||100},bx=e=>{var n;return((n=cp[e.status])==null?void 0:n.beskrivelseId)||"Ukjent andel"},cx=()=>d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet"}),jx=e=>e.reduce((n,r)=>(r.inntektPlussNaturalytelse||0)+n,0),hx=(e,n)=>(n==null?void 0:n.ytelsetype)!==_l.FORELDREPENGER&&e.avkortetPrÅr?Math.round(e.avkortetPrÅr/fx):e.dagsats||0,Jn=()=>d.jsx("div",{className:be.radEnkelLinje}),Ax=(e,n)=>d.jsxs(C,{gap:"2",children:[d.jsx(mv,{className:be.avslåttIkon}),d.jsx(T,{size:"small",className:be.avslåttIkon,children:d.jsx(k,{id:n?"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2",values:{grunnbeløp:G(e),b:r=>d.jsx("b",{children:r})}})})]}),Ix=e=>!!e.aktivitetStatus&&e.aktivitetStatus.some(n=>n===K.MIDLERTIDIG_INAKTIV),Tx=(e,n,r,t)=>{const s=e.andeler.reduce((p,y)=>(y.inntektPlussNaturalytelse||0)+p,0);if(n.vilkarStatus===Vi.IKKE_VURDERT)return null;if(n.vilkarStatus===Vi.IKKE_OPPFYLT)return Ax(r.grunnbeløp,Ix(r));const i=r.grunnbeløp*6,l=s>i,o=r.dekningsgrad!==gp.HUNDRE,g=hx(e,r.ytelsesspesifiktGrunnlag),m=t&&(l||o);return d.jsxs(on,{children:[m&&d.jsx(x,{fourtyPx:!0}),l&&d.jsxs(d.Fragment,{children:[Jn(),d.jsxs(M,{className:be.radNoBorder,children:[d.jsx(P,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Avkortet"})})}),d.jsx(P,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:G(e.avkortetPrÅr)})})]}),Jn()]}),o&&d.jsxs(d.Fragment,{children:[!l&&t&&d.jsx(d.Fragment,{children:Jn()}),d.jsxs(M,{className:be.radNoBorder,children:[d.jsx(P,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Redusert"})})}),d.jsx(P,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:G(e.redusertPrÅr)})})]}),Jn()]}),d.jsx(x,{fourtyPx:!0}),d.jsxs(M,{className:be.radNoBorder,children:[d.jsx(P,{className:be.kolBeskrivelse,children:d.jsx(F,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Dagsats"})})}),d.jsx(P,{className:be.kolVerdi,children:d.jsx(F,{size:"medium",children:g})})]}),d.jsx("div",{className:be.radDobbelLinje})]})},Rx=({tabellData:e,skalVisePeriode:n,vilkårsperiode:r,beregningsgrunnlag:t})=>{const s=e.andeler.length>1&&!e.andeler.some(o=>!o.erFerdigBeregnet);e.andeler.sort((o,g)=>tu(o)-tu(g));const i=e.andeler.length>1,l=e.andeler.every(o=>o.erFerdigBeregnet);return d.jsxs(Q,{gap:"5",children:[d.jsxs("div",{children:[n&&d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(se,{size:"xsmall",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Periode",values:{fom:I(e.fom).format(te),tom:e.tom?I(e.tom).format(te):""}})})})}),d.jsx(x,{eightPx:!0})]}),e.andeler.map((o,g)=>d.jsxs(Y.Fragment,{children:[g===0&&d.jsx(d.Fragment,{children:Jn()}),d.jsxs(M,{className:be.radNoBorder,children:[d.jsx(P,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:bx(o)})})}),d.jsx(P,{className:be.kolVerdi,children:d.jsx(T,{size:"small",className:o.erFerdigBeregnet?"":be.kolVerdiRød,children:o.erFerdigBeregnet?G(o.inntekt):cx()})})]}),!!o.bortfaltNaturalytelse&&d.jsxs(d.Fragment,{children:[Jn(),d.jsxs(M,{className:be.radNoBorder,children:[d.jsx(P,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.Naturalytelser"})})}),d.jsx(P,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:G(o.bortfaltNaturalytelse)})})]})]}),Jn()]},o.status)),s&&d.jsxs(d.Fragment,{children:[d.jsxs(M,{className:be.radNoBorder,children:[d.jsx(P,{className:be.kolBeskrivelse,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt"})})}),d.jsx(P,{className:be.kolVerdi,children:d.jsx(T,{size:"small",children:G(jx(e.andeler))})})]}),d.jsx("div",{className:be.radTykkLinje})]})]}),l&&d.jsx(d.Fragment,{children:Tx(e,r,t,i)})]})},Ex=[jr.ARBEIDSFORHOLD_AVSLUTTET,jr.NATURALYTELSE_TILKOMMER,jr.NATURALYTELSE_BORTFALT],Nx=e=>e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,Sx=e=>e.besteberegningPrAar||e.besteberegningPrAar===0?e.besteberegningPrAar:e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||0,qx=(e,n)=>{switch(e){case K.ARBEIDSTAKER:case K.FRILANSER:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS||r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);case K.SELVSTENDIG_NAERINGSDRIVENDE:return n.find(r=>r.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET||r.definisjon===ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE);case K.BRUKERS_ANDEL:return n.find(r=>r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);default:return}},xx=e=>{var n,r;const t=(n=e==null?void 0:e.arbeidsforhold)==null?void 0:n.naturalytelseBortfaltPrÅr,s=((r=e==null?void 0:e.arbeidsforhold)==null?void 0:r.naturalytelseTilkommetPrÅr)||0;return t?t-s:0},Px=e=>{const{beregnetPrAar:n,pgiSnitt:r}=e;return!!n||n===0||!!r||r===0},Bx=(e,n)=>{const r=e.filter(i=>Nx(i)),t={};r.forEach(i=>{const l=t[i.aktivitetStatus];l?l.push(i):t[i.aktivitetStatus]=[i]});const s=[];return Object.keys(t).forEach(i=>{const l=t[i],o=qx(i,n),g=l.every(c=>Px(c)),m=l.reduce((c,N)=>Sx(N)+c,0),p=l.reduce((c,N)=>xx(N)+c,0),y=(m||0)+(p||0),f=!!o&&xs(o.status),b=g&&!f;s.push({inntekt:m,bortfaltNaturalytelse:p,inntektPlussNaturalytelse:y,erFerdigBeregnet:b,status:i})}),s},Fx=e=>e.some(n=>Ex.includes(n)),_x=e=>{const{beregningsgrunnlagPeriode:n}=e,r=n.filter(s=>s.beregningsgrunnlagPeriodeFom===e.skjaeringstidspunktBeregning||!!s.periodeAarsaker&&Fx(s.periodeAarsaker)).map(s=>s.beregningsgrunnlagPeriodeFom).sort((s,i)=>new Date(s).getTime()-new Date(i).getTime()),t=[];for(let s=0;s<r.length;s+=1){const i=r[s],l=s+1<r.length?I(r[s+1]).subtract(1,"day").format(Pe).toString():void 0,o=n.find(b=>b.beregningsgrunnlagPeriodeFom===i),g=(o==null?void 0:o.periodeAarsaker)||[],m=Bx((o==null?void 0:o.beregningsgrunnlagPrStatusOgAndel)||[],e.avklaringsbehov),p=o==null?void 0:o.redusertPrAar,y=o==null?void 0:o.avkortetPrAar,f=o==null?void 0:o.dagsats;t.push({fom:i,tom:l,årsak:g,andeler:m,redusertPrÅr:p,avkortetPrÅr:y,dagsats:f})}return t},Ox=({beregningsgrunnlag:e,vilkårsperiode:n})=>{const r=A.useMemo(()=>_x(e),[e]),t=r.length>1;return d.jsxs("div",{className:$.panelRight,children:[d.jsx(se,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.BeregningTable.Tittel"})}),d.jsx(x,{eightPx:!0}),r.map(s=>d.jsxs("div",{children:[d.jsx(Rx,{tabellData:s,skalVisePeriode:t,vilkårsperiode:n,beregningsgrunnlag:e}),d.jsx(x,{fourtyPx:!0})]},s.fom))]})},Dx=e=>e.overstyrtPrAar||e.overstyrtPrAar===0?e.overstyrtPrAar:e.beregnetPrAar||e.beregnetPrAar===0?e.beregnetPrAar:0,wx=e=>e&&e.beregningsgrunnlagPrStatusOgAndel?e.beregningsgrunnlagPrStatusOgAndel.map(n=>Dx(n)).reduce((n,r)=>n+r,0):0,Vx=e=>e.flatMap(n=>n.inntekter).map(({inntekt:n})=>n).reduce((n,r)=>n+r,0)*2,su=(e,n)=>e>n,Mx=({periode:e,besteMåneder:n})=>{if(!n||n.length<1)return null;const r=wx(e),t=Vx(n);return d.jsx("div",{children:d.jsxs(Q,{gap:"4",children:[d.jsx(T,{size:"small",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning"})}),d.jsxs(j,{children:[d.jsx(j.Header,{children:d.jsxs(j.Row,{children:[d.jsx(j.HeaderCell,{scope:"col"}),d.jsx(j.HeaderCell,{scope:"col",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterKap8"})}),d.jsx(j.HeaderCell,{scope:"col",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning"})})]})}),d.jsx(j.Body,{children:d.jsxs(j.Row,{children:[d.jsx(j.DataCell,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag"})})}),d.jsx(j.DataCell,{children:d.jsx(T,{size:"small",children:G(r)})}),d.jsx(j.DataCell,{children:d.jsx(T,{size:"small",children:G(t)})})]})})]}),d.jsxs(T,{size:"small",children:[su(r,t)&&d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning"}),!su(r,t)&&d.jsx(k,{id:"Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning"})]})]})})},{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:jp,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Ml,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:hp,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Ap,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Ip}=ue,Gx=(e,n)=>{switch(e.definisjon){case jp:return n.find(r=>r.sammenligningsgrunnlagType===ve.ATFLSN||r.sammenligningsgrunnlagType===ve.SN);case Ml:return n.find(r=>r.sammenligningsgrunnlagType===ve.MIDLERTIDIG_INAKTIV);case hp:case Ap:return n.find(r=>r.sammenligningsgrunnlagType===ve.ATFLSN||r.sammenligningsgrunnlagType===ve.AT_FL||r.sammenligningsgrunnlagType===ve.AT||r.sammenligningsgrunnlagType===ve.FL);case Ip:return;default:return}},Lx=(e,n)=>{const r=Gx(e,n),t=r&&r.avvikProsent?r.avvikProsent:0;return Number(t.toFixed(1))},au=e=>e&&e.length>0,Kx=e=>e.sammenligningsgrunnlagPrStatus?e.sammenligningsgrunnlagPrStatus:[],$x={[hp]:"Beregningsgrunnlag.Helptext.Arbeidstaker",[Ap]:"Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold",[Ip]:"Beregningsgrunnlag.Helptext.NyIArbeidslivetSN",[Ml]:"Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon"},Ux=(e,n)=>e.definisjon===jp?n?"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":$x[e.definisjon],Yx=(e,n,r)=>{var t;const s=r.find(l=>l.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE),i=!!((t=s==null?void 0:s.næringer)!=null&&t.some(l=>l.erVarigEndret===!0));return d.jsxs("div",{children:[d.jsx(ar,{children:e.map(l=>d.jsx(F,{children:d.jsx(k,{id:Ux(l,i||l.definisjon===Ml),values:{verdi:Lx(l,n),b:o=>d.jsx("b",{children:o}),br:d.jsx("br",{})}})},l.definisjon))}),d.jsx(x,{thirtyTwoPx:!0})]})},Hx=({avklaringsbehov:e,beregningsgrunnlag:n})=>{const r=n.beregningsgrunnlagPeriode?n.beregningsgrunnlagPeriode[0]:void 0,t=r&&r.beregningsgrunnlagPrStatusOgAndel?r.beregningsgrunnlagPrStatusOgAndel:[],s=e.filter(l=>xs(l.status));if(!(au(s)&&au(t)))return null;const i=Kx(n);return d.jsxs(d.Fragment,{children:[d.jsx(x,{eightPx:!0}),Yx(s,i,t)]})},Cx=e=>e.some(n=>n.aktivitetStatus===K.FRILANSER&&(n.overstyrtPrAar||n.overstyrtPrAar===0)),Gl=({readOnly:e,fieldIndex:n,formName:r,alleAndelerIForstePeriode:t,skalValideres:s})=>d.jsxs(M,{className:oe.verticalAlignMiddle,children:[d.jsx(P,{className:oe.atflAvvikAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL"})})}),d.jsx(P,{className:oe.atflAvvikInntekt,children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${r}.${n}.inntektFrilanser`,validate:s?[X,rn(178956970)]:void 0,readOnly:e,parse:Oe,className:oe.breddeInntekt,isEdited:e&&Cx(t)})})})]});Gl.buildInitialValues=e=>{const n=e.length>0?G(e[0].overstyrtPrAar):void 0;return n?{inntektFrilanser:n}:{}};const Tp={"Beregningsgrunnlag.Title.Beregning":"Grunnlag for beregning","Beregningsgrunnlag.Title.Fastsettelse":"Fastsettelse","Beregningsgrunnlag.Title":"Beregning","Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Ikke tilstrekkelig inntektsgrunnlag","Beregningsgrunnlag.HarIkkeBeregningsregler":"Har ikke beregningsregler (trer i kraft 1 jan. 2019). Sak overført til Infotrygd.","Beregningsgrunnlag.Helptext.Arbeidstaker":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.Nyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt","Beregningsgrunnlag.Helptext.SelvstendigNaeringsdrivende.VarigEndring":"Søker har oppgitt varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.Helptext.VarigEndretArbeidssituasjon":"Varig endret arbeidssituasjon.","Beregningsgrunnlag.Helptext.TidsbegrensetArbeidsforhold":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold","Beregningsgrunnlag.Helptext.NyIArbeidslivetSN":"Søker er ny i arbeidslivet","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt":"Beregnet årsinntekt","Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel":"Avviksberegning for arbeidstaker og frilans","Beregningsgrunnlag.Avviksopplysninger.SN.Tittel":"Avviksberegning for næring","Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel":"Avviksberegning for midlertidig inaktiv","Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Pensjonsgivende inntekt","Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt":"Sammenligningsgrunnlag","Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Samlet inntekt","Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik":"Beregnet avvik ","Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet":"Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.","Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN":"Det regnes ikke avvik på arbeids- og frilansinntekt for kombinasjonen arbeid, frilans og selvstendig næringsdrivende i beregningsgrunnlag der skjæringstidspunkt er før 01.01.2023","Beregningsgrunnlag.Avviksopplysninger.AAP":"Det foretas ikke avviksvurdering på AAP","Beregningsgrunnlag.Avviksopplysninger.Dagpenger":"Det foretas ikke avviksvurdering på Dagpenger","Beregningsgrunnlag.Avviksopplysninger.Besteberegning":"Det foretas ingen avviksvurdering når søker har besteberegning på dagpenger","Beregningsgrunnlag.Avviksopplysninger.Miletar":"Det regnes ikke avvik ved militær- eller siviltjeneste.","Beregningsgrunnlag.Avviksopplysninger.AvvikProsent":"{avvik}%","Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning":"Skjæringstidspunkt for beregning","Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan":"Søker har hatt lønnsendring i løpet av de siste tre månedene","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet":"Bruker har hatt lønnsendring {datoer}. Inntekt er fastsatt manuelt.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned":"Bruker har hatt lønnsendring {datoer}. Dette betyr at rapportert inntekt for {måned} er en kombinasjon av ny og gammel inntekt. Ny inntekt er beregnet ved først å finne gammel inntekt fra rapportert inntekt i {forrigeMåned} og deretter regne oss fram til ny inntekt ved å bruke forholdet mellom dagene før og etter lønnsendringen.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke rapportert inntekt i {nesteMåned}.","Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned":"Bruker har hatt lønnsendring {datoer}. Ny inntekt er beregnet ved å bruke snittet av rapportert inntekt i {nesteMåned} og {sisteMåned}.","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt":"Arbeidsinntekt","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.SN.TreSisteÅr":"3 siste år fra skatt","Beregningsgrunnlag.AarsinntektPanel.SN.ATFL":"Arbeid/frilans","Beregningsgrunnlag.AarsinntektPanel.SN.Næring":"Næring","Beregningsgrunnlag.AarsinntektPanel.SN.Sum":"Sum","Beregningsgrunnlag.AarsinntektPanel.SN.Gjustert":"G-justert","Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar":"3 siste ferdigliknede år fra skatteetaten","Beregningsgrunnlag.AarsinntektPanel.SN.GsnittSum":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned":"Måned","Beregningsgrunnlag.AarsinntektPanel.Frilansinntekt":"Frilansinntekt","Beregningsgrunnlag.AarsinntektPanel.FrilansStartDato2":"Søker har vært frilans fra ","Beregningsgrunnlag.AarsinntektPanel.InnrapportertFrilans":"Innrapportert i a-ordningen siste 3 mnd","Beregningsgrunnlag.AarsinntektPanel.Militær":"Militær- eller sivilforsvarstjeneste","Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivende":"Pensjonsgivende inntekt","Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt":"Totalt","Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende":"Total","Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset":"Tidsbegrenset","Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende":"Gjennomsnittlig pensjonsgivende inntekt","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet":"Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring":"Søker har opplyst varig endring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Søker har nyoppstartet næring og det er mer enn 25% avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker","Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Fastsett årsinntekt skjønnsmessig for frilans","Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":"Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL":"Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget.","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset":"Det er mer enn 25 % avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget, og det er tidsbegrenset arbeidsforhold.","Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb":"Søker er ny i arbeidslivet, gjør en skjønnsmessig vurdering av næringsinntekten","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb":"Søker har oppgitt å være ny i arbeidslivet (blitt yrkesaktiv siste tre år).","Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid":"Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig","Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid":"Det er er mer enn 25 % avvik mellom pensjonsgivende inntekt og samlet inntekt.","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring":"Har søker hatt varig endret næring og/eller arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid":"Har søker hatt varig endret arbeidssituasjon? ","Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring":"Har søker nyoppstartet næring? ","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler":"Skjønnsmessig fastsettelse av årsinntekt ved avvik","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode":"Total årsintekt pr periode","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar":"Beregnet År","Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL":"Frilansinntekt fastsettes til","Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2":"Naturalytelser","Beregningsgrunnlag.NaeringsOpplysningsPanel.Overskrift":"Opplysninger om næring fra søknad","Beregningsgrunnlag.NaeringsOpplysningsPanel.OppgittAar":"Oppgitt år","Beregningsgrunnlag.NaeringsOpplysningsPanel.VarigEndret":"Søker har oppgitt varig endring fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.Nyoppstaret":"Søker har oppgitt nyoppstartet fra <b>{dato}</b>","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.JORDBRUK_SKOGBRUK":"Jordbruk / Skogbruk","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.DAGMAMMA":"Dagmamma i eget hjem / familiebarnehage","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FISKE":"Fiske","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.FRILANSER":"Frilanser","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.ANNEN":"Annen næringsvirksomhet","Beregningsgrunnlag.NaeringsOpplysningsPanel.VirksomhetsType.UDEFINERT":"Ikke definert","Beregningsgrunnlag.Forms.Vurdering":"Vurdering","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag":"Vurdering av fastsatt beregningsgrunnlag","Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst":"Forklar hvordan du har kommet frem til beregningsgrunnlaget og hvilke vurderinger du har gjort. Beskriv hvorfor det er avvik og hvilken inntekt som kan legges til grunn. Dette skal gjøres i henhold til lovhjemmel.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring":"Ingen varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering":"Varig endring eller nyoppstartet næring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet":"Næringsvirksomhet er ikke nyoppstartet","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring":"Ingen varig endring","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring":"Varig endring - årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet":"Nyoppstartet næring - Årsinntekt må fastsettes.","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2":"Næringsinntekt fastsettes til","Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil":"Varig endret årsinntekt fastsettes til","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.SumTittel":"Rapportert årsinntekt","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Tittel":"Sammenligningsgrunnlag fra a-ordningen","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ingress":"Inntekt og ytelser etter kap 8, 9 og 14 de 12 siste månedene","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Arbeid":"Arbeid","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Frilans":"Frilans","Beregningsgrunnlag.SammenligningsGrunnlaAOrdningen.Ytelse":"Ytelse","Beregningsgrunnlag.TilstottendeYtelse.Tittel":"Tilstøtende ytelse","Beregningsgrunnlag.TilstottendeYtelse.TittelNav":"Ytelser fra Nav","Beregningsgrunnlag.TilstottendeYtelse.Dagpenger":"Dagpenger","Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger":"Sykepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger":"Pleiepenger basert på dagpenger","Beregningsgrunnlag.TilstottendeYtelse.AAP":"Arbeidsavklaringspenger","Beregningsgrunnlag.TilstottendeYtelse.Besteberegning":"Satt ut fra besteberegning","Beregningsgrunnlag.YtelserFraInfotrygd.Ytelse2":"Ytelse fra Nav","Beregningsgrunnlag.YtelserFraInfotrygd.YtelseNavn":"Ytelse","Beregningsgrunnlag.BeregningTable.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.BeregningTable.Tittel":"Beregning av dagsats","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2":"Beløpet er under 1/2 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv":"Beløpet er under 1 G (G = {grunnbeløp}) - søker har ikke rett til ytelse","Beregningsgrunnlag.Gradering.Beskrivelse":"Saksbehandler har tidligere vurdert om fordeling av inntekt er korrekt grunnet en andel uten utbetaling som skal graderes.","Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag":"Beregnet","Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning":"§14-7, 3. ledd","Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning":"Søker omfattes av §14-7, 3. ledd.","Besteberegning.ResultatGrunnlag.BeregningEtterKap8":"§14-7, 1. ledd","Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning":"Beregning etter §14-7, 3. ledd gir beste beregning.","Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning":"Beregning etter §14-7, 1. ledd gir beste beregning.","SubmitButton.ConfirmInformation":"Bekreft og fortsett","Malform.Beskrivelse":"Foretrukket språk","HelpText.Aksjonspunkt":"Aksjonspunkt","Behandling.EditedField":"Saksbehandler har endret feltets verdi","Beregningsgrunnlag.Beregningsresultat.Periode":"Periode {fom} - {tom}","Beregningsgrunnlag.Beregningsresultat.Arbeid":"Fastsatt årsinntekt arbeid","Beregningsgrunnlag.Beregningsresultat.Frilans":"Fastsatt årsinntekt frilans","Beregningsgrunnlag.Beregningsresultat.Næring":"Fastsatt årsinntekt næring","Beregningsgrunnlag.Beregningsresultat.Dagpenger":"Fastsatt årsinntekt dagpenger","Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger":"Fastsatt årsinntekt sykepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger":"Fastsatt årsinntekt pleiepenger av dagpenger","Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger":"Fastsatt årsinntekt arbeidsavklaringspenger","Beregningsgrunnlag.Beregningsresultat.Militær":"Fastsatt årsinntekt militær","Beregningsgrunnlag.Beregningsresultat.BrukersAndel":"Fastsatt årsinntekt brukers andel","Beregningsgrunnlag.Beregningsresultat.Ytelse":"Fastsatt årsinntekt ytelse","Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet":"Ikke beregnet","Beregningsgrunnlag.Beregningsresultat.Naturalytelser":"Naturalytelser","Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt":"Total årsinntekt","Beregningsgrunnlag.Beregningsresultat.Avkortet":"Årsinntekt redusert til 6G på skjæringstidspunktet","Beregningsgrunnlag.Beregningsresultat.Redusert":"Årsinntekt redusert til 80% dekningsgrad","Beregningsgrunnlag.Beregningsresultat.Dagsats":"Dagsats (årsinntekt/260 dager)","Beregningsgrunnlag.Søknad.Tittel":"Opplysninger fra søknad","Beregningsgrunnlag.Søknad.LøpendeFL":"Oppgitt frilansinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.LøpendeSN":"Oppgitt næringsinntekt i søknadsperioden","Beregningsgrunnlag.Søknad.SøktYtelseSN":"Bruker har søkt inntektskompensasjon for næringsinntekt i perioden {fom} - {tom}","Beregningsgrunnlag.Frisinn.Resultat":"Grunnlag for dagsats","Beregningsgrunnlag.Frisinn.Inntektstak":"Inntektstak ({grenseverdi} - {annenInntekt})","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL":"Beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN":"Beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL":"Redusert til {grad}% beregningsgrunnlag frilans","Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN":"Redusert til {grad}% beregningsgrunnlag næring","Beregningsgrunnlag.Frisinn.Tittel":"FRISINN","Beregningsgrunnlag.Frisinn.InntektFL":"Frilansinntekt","Beregningsgrunnlag.Frisinn.InntektSN":"Næringsinntekt","Beregningsgrunnlag.Frisinn.InntektAT":"Arbeidstakerinntekt","Beregningsgrunnlag.Søknad.Inntektsopplysninger":"Opplysninger om inntekt","Beregningsgrunnlag.Resultat.Dagsats":"Dagsats","Beregningsgrunnlag.Frisinn.InntektstakOpplysninger":"Opplysninger om inntektstak","Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode":"Opplysninger om inntektstak i perioden {fom} - {tom}"},zx=Ke(Tp),Jx=(e,n,r,t)=>!e&&!r||n?!0:t===void 0?!e:!e&&t||t,Wx=({isReadOnly:e,isSubmittable:n,isSubmitting:r,isDirty:t,text:s,onClick:i,hasEmptyRequiredFields:l})=>e?null:d.jsx(ae,{variant:"primary",size:"small",loading:r,disabled:Jx(t,r,n,l),onClick:i||Fu,type:i?"button":"submit",children:s||zx.formatMessage({id:"SubmitButton.ConfirmInformation"})}),Rp=4e3,Zx=cn(Rp),Xx=bn(3),Ll="fastsettBeregningsgrnunnlagSNBegrunnelse",Kl="bruttoBeregningsgrunnlag",{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Qx}=ue,_r=({readOnly:e,isAksjonspunktClosed:n,erNyArbLivet:r,fieldIndex:t,formName:s,avklaringsbehov:i})=>{const l=W();return d.jsxs(d.Fragment,{children:[r&&d.jsxs(d.Fragment,{children:[d.jsxs(M,{className:oe.verticalAlignMiddle,children:[d.jsx(P,{className:oe.dynamiskKolonne,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"})})}),d.jsx(P,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${s}.${t}.${Kl}`,validate:[X,rn(178956970)],parse:Oe,className:oe.breddeInntekt,isEdited:e&&n,readOnly:e})})})]}),d.jsx(x,{eightPx:!0})]}),d.jsx(x,{sixteenPx:!0}),d.jsx(M,{children:d.jsx(P,{children:d.jsxs("div",{id:"readOnlyWrapper",className:e?oe.verticalLine:oe.textAreaWrapperHeigh,children:[d.jsx(en,{name:`${s}.${t}.${Ll}`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag"}),validate:[X,Zx,Xx,jn],isEdited:e&&n,maxLength:Rp,readOnly:e,description:l.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:o=>o.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(qn,{ident:i==null?void 0:i.vurdertAv,date:i==null?void 0:i.vurdertTidspunkt})]})})})]})};_r.buildInitialValuesNyIArbeidslivet=(e,n)=>{const r=e.find(s=>s.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE),t=n.find(s=>s.definisjon===Qx);return{[Kl]:r?G(r.overstyrtPrAar):void 0,[Ll]:t&&t.begrunnelse?t.begrunnelse:void 0}};_r.transformValuesNyIArbeidslivet=e=>({begrunnelse:e[Ll],bruttoBeregningsgrunnlag:ye(e[Kl])});const Ep=4e3,eP=cn(Ep),nP=bn(3),$l="varigEndringNyoppstartetBegrunnelse",Ul="erVarigEndret",Yl="bruttoBeregningsgrunnlag",{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:rP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:tP}=ue,sP=e=>e?d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndretInntektFastsettesTil"}):d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.BruttoBerGr2"}),Bt=({readOnly:e,erVarigEndring:n,erVarigEndretArbeidssituasjon:r,erNyoppstartet:t,fieldIndex:s,formName:i,isAksjonspunktClosed:l,avklaringsbehov:o})=>{let g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IngenEndring"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.EndretNaering"});t&&!n&&(g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeNyoppstartet"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.Nyoppstartet"})),n&&!t&&(g=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.IkkeVarigEndring"}),m=d.jsx(k,{id:"Beregningsgrunnlag.FastsettSelvstendigNaeringForm.VarigEndring"}));let p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringNæring";r&&(p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelVarigEndringArbeid"),t&&(p="Beregningsgrunnlag.AksjonspunktBehandler.RadioTittelNyoppstartetNæring");const y=W(),f=Ie().watch(i)[s].erVarigEndret,b=[{value:"false",label:g},{value:"true",label:m}];return d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(Ne,{name:`${i}.${s}.${Ul}`,validate:[X],label:y.formatMessage({id:p}),isHorizontal:!1,isReadOnly:e,isEdited:e&&l,radios:b,isTrueOrFalseSelection:!0})})}),f&&d.jsxs(d.Fragment,{children:[d.jsxs(M,{className:oe.verticalAlignMiddle,children:[d.jsx(P,{className:oe.dynamiskKolonne,children:d.jsx(T,{size:"small",children:sP(r)})}),d.jsx(P,{children:d.jsx("div",{id:"readOnlyWrapper",className:e?oe.inputPadding:void 0,children:d.jsx(ce,{name:`${i}.${s}.${Yl}`,validate:[X,rn(178956970)],parse:Oe,className:oe.breddeInntekt,readOnly:e,isEdited:e&&l})})})]}),d.jsx(x,{sixteenPx:!0})]}),d.jsxs(d.Fragment,{children:[d.jsx(x,{sixteenPx:!0}),d.jsx(M,{children:d.jsxs(P,{children:[d.jsx(en,{name:`${i}.${s}.${$l}`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[X,eP,nP,jn],maxLength:Ep,readOnly:e,description:y.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:c=>c.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(qn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})]})};Bt.buildInitialValues=(e,n)=>{const r=e.find(s=>s.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||s.aktivitetStatus===K.BRUKERS_ANDEL),t=n.find(s=>s.definisjon===rP||s.definisjon===tP);if(t){const s=xs(t.status)?void 0:e[0].overstyrtPrAar!==null&&e[0].overstyrtPrAar!==void 0;return{[Ul]:s,[$l]:t.begrunnelse?t.begrunnelse:"",[Yl]:r?G(r.overstyrtPrAar):void 0}}return{}};Bt.transformValues=e=>{const n=e[Ul];return{begrunnelse:e[$l],erVarigEndretNaering:n,erVarigEndret:n,bruttoBeregningsgrunnlag:n?ye(e[Yl]):void 0}};const{FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Hl,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:aP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:Np}=ue,Sp=(e,n)=>n.some(r=>r.definisjon===e),iP=e=>e&&(e.definisjon===aP||e.definisjon===Hl||e.definisjon===Np),Zn=({readOnly:e,avklaringsbehov:n,erNyArbLivet:r=!1,erVarigEndring:t=!1,erNyoppstartet:s=!1,fieldIndex:i,formName:l})=>{if(!iP(n))return null;const o=n?!xs(n.status):!1;return r?d.jsx(_r,{readOnly:e,isAksjonspunktClosed:o,erNyArbLivet:r,fieldIndex:i,formName:l,avklaringsbehov:n}):d.jsx(Bt,{readOnly:e,erVarigEndring:t,erVarigEndretArbeidssituasjon:n.definisjon===Np,erNyoppstartet:s,fieldIndex:i,formName:l,isAksjonspunktClosed:o,avklaringsbehov:n})};Zn.buildInitialValues=(e,n)=>Sp(Hl,n)?_r.buildInitialValuesNyIArbeidslivet(e,n):{...Bt.buildInitialValues(e,n)};Zn.transformValues=(e,n)=>Sp(Hl,n)?_r.transformValuesNyIArbeidslivet(e):Bt.transformValues(e);const{VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:qp,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:xp,FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:Pp,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:Bp,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:Fp}=ue,lP=e=>{var n;const r=(e.beregningsgrunnlagPeriode&&e.beregningsgrunnlagPeriode.length>0?e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[]:[]).find(t=>t.aktivitetStatus&&t.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE);return(n=r==null?void 0:r.næringer)!=null&&n.some(t=>t.erNyoppstartet===!0)?"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerNyoppstartet":"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndring"},dP=(e,n)=>{switch(e.definisjon){case qp:return lP(n);case Fp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerSNNyIArb";case xp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerVarigEndringArbeid";case Pp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFL";case Bp:return"Beregningsgrunnlag.AksjonspunktBehandler.DetaljerATFLTidsbegrenset";default:return"Ukjent aksjonspunkt"}},oP=e=>{const n=e.aktivitetStatus||[],r=n.some(s=>ip(s)),t=n.some(s=>ap(s));return r&&t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelATFLAvvik":t?"Beregningsgrunnlag.AksjonspunktBehandler.TittelFLAvvik":"Beregningsgrunnlag.AksjonspunktBehandler.TittelATAvvik"},gP=(e,n)=>{switch(e.definisjon){case qp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringNyoppstartet";case Fp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelSNNyIArb";case xp:return"Beregningsgrunnlag.AksjonspunktBehandler.TittelVarigEndringArbeid";case Pp:case Bp:return oP(n);default:return"Ukjent aksjonspunkt"}},uP=({avklaringsbehov:e,beregningsgrunnlag:n,readOnly:r})=>e?d.jsxs("div",{className:r?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerHeader,children:[d.jsxs(M,{children:[!r&&d.jsx(P,{className:oe.aksjonspunktBehandlerImageCol,children:d.jsx(xr,{className:oe.warningIcon})}),d.jsx(P,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(F,{children:d.jsx(k,{id:gP(e,n)})})})]}),d.jsx(x,{eightPx:!0}),d.jsxs(M,{children:[!r&&d.jsx(P,{className:oe.aksjonspunktBehandlerImageCol}),d.jsx(P,{className:oe.aksjonspunktBehandlerTextCol,children:d.jsx(T,{children:d.jsx(k,{id:dP(e,n)})})})]})]}):null,{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:kP,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:mP,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:pP,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:vP,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:yP}=ue;var sr=(e=>(e.ÅTTE_TRETTIFEM="8-35",e.ÅTTE_TRETTI="8-30",e))(sr||{});const Cl=(e,n)=>ve.SN===e||ve.MIDLERTIDIG_INAKTIV===e||ve.ATFLSN===e&&n!=null&&n.find(r=>lp(r))?"8-35":"8-30",Ki=e=>yP===e.definisjon||vP===e.definisjon||pP===e.definisjon?"8-35":kP===e.definisjon||mP===e.definisjon?"8-30":null,fP=bn(3),_p=4e3,bP=cn(_p),{FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:iu,FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:lu,FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:du,VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:ou,VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:gu}=ue,cP="BeregningForm",gs=(e,n)=>Ki(e)===n,jP=(e,n)=>!!e.find(r=>gs(r,n)),zl=e=>`${cP}_${e}`,uu=(e,n)=>{if(!e||e.length<1)return!1;const r=e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[];return r==null?void 0:r.some(t=>t.aktivitetStatus===n&&t.skalFastsetteGrunnlag)},$i=e=>e&&e.length>0?e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel:[]:[],hP=e=>e.some(({periodeAarsaker:n})=>n&&n.some(r=>r===jr.ARBEIDSFORHOLD_AVSLUTTET)),Op=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),AP=(e,n)=>{if(!e||!e.beregningsgrunnlagPeriode)return{};const r=e.beregningsgrunnlagPeriode,t=e.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel||[],s=t.filter(m=>m.aktivitetStatus===K.ARBEIDSTAKER),i=t.filter(m=>m.aktivitetStatus===K.FRILANSER),l=t.filter(m=>m.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||m.aktivitetStatus===K.BRUKERS_ANDEL),o={...tr.buildInitialValues(e.avklaringsbehov),...Pt.buildInitialValues(r),...Gl.buildInitialValues(i),...Vl.buildInitialValues(s)},g={...Zn.buildInitialValues(l,e.avklaringsbehov)};return n?n.sammenligningsgrunnlagType===ve.ATFLSN?{...o,...g}:n.sammenligningsgrunnlagType===ve.AT_FL?{...o}:n.sammenligningsgrunnlagType===ve.SN?{...g}:n.sammenligningsgrunnlagType===ve.MIDLERTIDIG_INAKTIV?{...g}:{}:{..._r.buildInitialValuesNyIArbeidslivet(l,e.avklaringsbehov)}},IP=(e,n,r,t)=>{let s={};return r&&(s=AP(e,t)),{...s,periode:n.periode,erTilVurdering:n.vurderesIBehandlingen&&!n.erForlengelse,gjeldendeAvklaringsbehov:r?[r]:[],skjæringstidspunkt:e.skjaeringstidspunktBeregning,allePerioder:e.beregningsgrunnlagPeriode}},TP=(e,n,r,t)=>({[r]:e.map(s=>{var i;return IP(s,Op(n,s.vilkårsperiodeFom),s.avklaringsbehov.find(l=>gs(l,t)),(i=s.sammenligningsgrunnlagPrStatus)==null?void 0:i.find(l=>Cl(l.sammenligningsgrunnlagType,s.aktivitetStatus)===t))})}),RP=({readOnly:e,allePerioder:n,avklaringsbehov:r,fieldIndex:t,formName:s})=>{const i=$i(n).find(m=>m.aktivitetStatus&&m.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE),l=i&&i.erNyIArbeidslivet,o=r.definisjon===ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON||i&&i.næringer&&i.næringer.some(m=>m.erVarigEndret===!0),g=i&&i.næringer&&i.næringer.some(m=>m.erNyoppstartet===!0);return!l&&!g&&!o?null:d.jsxs(d.Fragment,{children:[d.jsx(x,{eightPx:!0}),d.jsx(Zn,{readOnly:e,avklaringsbehov:r,erNyArbLivet:l,erVarigEndring:o,erNyoppstartet:g,fieldIndex:t,formName:s})]})},EP=({kodeverkSamling:e,allePerioder:n,arbeidsgiverOpplysningerPerId:r,readOnly:t,intl:s,fieldIndex:i,formName:l,avklaringsbehov:o,skalValideres:g})=>{const m=hP(n),p=uu(n,K.FRILANSER),y=uu(n,K.ARBEIDSTAKER);return d.jsxs(d.Fragment,{children:[d.jsx(x,{eightPx:!0}),m&&d.jsx(Pt,{readOnly:t,formName:l,allePerioder:n,kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:i,skalValideres:g}),!m&&y&&d.jsx(Ol,{readOnly:t,alleAndelerIForstePeriode:$i(n),kodeverkSamling:e,arbeidsgiverOpplysningerPerId:r,fieldIndex:i,formName:l,skalValideres:g}),p&&d.jsx(Gl,{readOnly:t,fieldIndex:i,formName:l,alleAndelerIForstePeriode:$i(n),skalValideres:g}),d.jsx(x,{sixteenPx:!0}),d.jsx(M,{children:d.jsxs(P,{children:[d.jsx(en,{name:`${l}.${i}.ATFLVurdering`,label:d.jsx(k,{id:"Beregningsgrunnlag.Forms.Vurdering"}),validate:[X,bP,fP,jn],maxLength:_p,readOnly:t,className:oe.textAreaStyle,description:s.formatMessage({id:"Beregningsgrunnlag.Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst"}),parse:f=>f.toString().replaceAll("‑","-").replaceAll("	"," ")}),d.jsx(qn,{ident:o==null?void 0:o.vurdertAv,date:o==null?void 0:o.vurdertTidspunkt})]})})]})},NP=(e,n)=>(n.aksjonspunkter.forEach(r=>{const t=e.find(s=>s.kode===r.kode);t!==void 0?(t.grunnlag.push({periode:n.periode,...r.aksjonspunktData}),t.begrunnelse=`${t.begrunnelse} ${r.aksjonspunktData.begrunnelse}`):e.push({kode:r.kode,begrunnelse:r.aksjonspunktData.begrunnelse,grunnlag:[{periode:n.periode,...r.aksjonspunktData}]})}),e),Ur=(e,n)=>n!=null&&n.some(r=>r.definisjon===e),SP=e=>{const{allePerioder:n}=e;if(n.length<1)throw new Error("Ingen beregningsgrunnlagperioder, ugyldig tilstand");n.sort((t,s)=>!t.beregningsgrunnlagPeriodeFom||!s.beregningsgrunnlagPeriodeFom?0:t.beregningsgrunnlagPeriodeFom.localeCompare(s.beregningsgrunnlagPeriodeFom));const r=n[0].beregningsgrunnlagPrStatusOgAndel||[];if(Ur(iu,e.gjeldendeAvklaringsbehov))return[{kode:iu,aksjonspunktData:tr.transformATFLValues(e,r)}];if(Ur(ou,e.gjeldendeAvklaringsbehov))return[{kode:ou,aksjonspunktData:Zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Ur(gu,e.gjeldendeAvklaringsbehov))return[{kode:gu,aksjonspunktData:Zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Ur(du,e.gjeldendeAvklaringsbehov))return[{kode:du,aksjonspunktData:Zn.transformValues(e,e.gjeldendeAvklaringsbehov)}];if(Ur(lu,e.gjeldendeAvklaringsbehov))return[{kode:lu,aksjonspunktData:tr.transformATFLTidsbegrensetValues(e,n)}];throw new Error("Må submitte et aksjonspunkt")},qP=(e,n)=>e[zl(n)].filter(r=>r.erTilVurdering).map(r=>({periode:r.periode,aksjonspunkter:SP(r)})).reduce(NP,[]),xP=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,arbeidsgiverOpplysningerPerId:t,beregningsgrunnlagListe:s,vilkår:i,submitCallback:l,formData:o,setFormData:g,aktivIndex:m,lovparagraf:p,finnesFormSomSubmittes:y,setSubmitting:f})=>{const b=W(),c=(V,U)=>{f(!0),l(qP(V,U))},N=V=>{const U=Op(i,V.vilkårsperiodeFom);return U.vurderesIBehandlingen&&!U.erForlengelse},h=s.filter(V=>jP(V.avklaringsbehov,p)),E=zl(p),R=Ce({defaultValues:o||TP(h,i,E,p)}),{formState:{dirtyFields:S},control:q,trigger:B}=R,{fields:w}=nn({name:E,control:q}),_=A.useRef(null);A.useEffect(()=>{var V,U;y&&(V=S[E])!=null&&V[m]&&B(),s[m].avklaringsbehov.some(re=>gs(re,p)&&re.status===dp.OPPRETTET)&&((U=_==null?void 0:_.current)==null||U.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},[m]);const H=d.jsx(M,{children:d.jsx(P,{children:d.jsx(Wx,{isReadOnly:e,isSubmittable:!n,isDirty:R.formState.isDirty,isSubmitting:y})})}),z=V=>V.find(U=>gs(U,p)),O=(V,U)=>{const re=N(h[V]),J=z(U);return p===sr.ÅTTE_TRETTI&&J?d.jsx(EP,{kodeverkSamling:r,allePerioder:h[V].beregningsgrunnlagPeriode,arbeidsgiverOpplysningerPerId:t,readOnly:e,intl:b,fieldIndex:V,formName:E,avklaringsbehov:J,skalValideres:re}):p===sr.ÅTTE_TRETTIFEM&&J?d.jsx(RP,{readOnly:e,allePerioder:h[V].beregningsgrunnlagPeriode,fieldIndex:V,formName:E,avklaringsbehov:J}):null},L=s[m].vilkårsperiodeFom;return d.jsx("div",{ref:_,children:d.jsx(ze,{formMethods:R,onSubmit:V=>c(V,p),setDataOnUnmount:g,children:w.map((V,U)=>d.jsxs("div",{style:{display:h[U].vilkårsperiodeFom===L?"block":"none"},children:[d.jsx(uP,{readOnly:e,avklaringsbehov:z(h[U].avklaringsbehov),beregningsgrunnlag:h[U]}),d.jsxs("div",{className:`${e?oe.aksjonspunktBehandlerNoBorder:oe.aksjonspunktBehandlerBorder} ${oe.aksjonspunktWrapper}`,children:[O(U,h[U].avklaringsbehov),d.jsx(x,{sixteenPx:!0}),H,d.jsx(x,{sixteenPx:!0})]})]},V.id))})})},PP=({relevanteStatuser:e,erManueltBesteberegnet:n,erNyIArbeidslivet:r,sammenligningsgrunnlag:t})=>{if(r)return d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet"})});if(!t||t.length<1)return null;const s=(e.isArbeidstaker||e.isFrilanser)&&e.isSelvstendigNaeringsdrivende,i=t.filter(o=>o.sammenligningsgrunnlagType===ve.AT_FL||o.sammenligningsgrunnlagType===ve.AT||o.sammenligningsgrunnlagType===ve.FL),l=s&&i.length===0;return n?d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Besteberegning"})}):d.jsxs(d.Fragment,{children:[e.isMilitaer&&d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Miletar"})}),e.isAAP&&d.jsxs(M,{children:[d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AAP"})})}),d.jsx(x,{eightPx:!0})]}),e.isDagpenger&&d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.Dagpenger"})})})}),d.jsx(x,{eightPx:!0})]}),l&&d.jsxs(M,{children:[d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AT.KobinasjonsStatusATFLSN"})})}),d.jsx(x,{eightPx:!0})]})]})},BP="_colLable_di1r8_1",FP="_colValue_di1r8_8",_P="_linjeSkille_di1r8_21",OP="_linjeSkilleTykk_di1r8_27",DP="_colAvvik_di1r8_36",dn={colLable:BP,colValue:FP,linjeSkille:_P,linjeSkilleTykk:OP,colAvvik:DP},ku=d.jsx(M,{children:d.jsx(P,{children:d.jsx("div",{className:dn.linjeSkille})})}),wP=({beregnetAarsinntekt:e,sammenligningsgrunnlag:n,erPGI:r})=>{const{differanseBeregnet:t,rapportertPrAar:s,avvikProsent:i}=n,l=parseFloat(i.toFixed(1)),o=r?"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt.Naring":"Beregningsgrunnlag.Avviksopplysninger.OmregnetAarsinntekt",g=r?"Beregningsgrunnlag.Avviksopplysninger.SamletInntekt":"Beregningsgrunnlag.Avviksopplysninger.RapportertAarsinntekt";return d.jsxs(d.Fragment,{children:[ku,d.jsxs(M,{children:[d.jsx(P,{className:dn.colLable,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:o})})}),d.jsx(P,{className:dn.colValue,children:d.jsx(T,{size:"small",children:e||e===0?G(e):"-"})}),d.jsx(P,{className:dn.colAvvik})]}),ku,d.jsxs(M,{children:[d.jsx(P,{className:dn.colLable,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:g})})}),d.jsx(P,{className:dn.colValue,children:d.jsx(T,{size:"small",children:G(s)})}),d.jsx(P,{className:dn.colAvvik})]}),d.jsx(M,{children:d.jsx(P,{children:d.jsx("div",{className:dn.linjeSkilleTykk})})}),d.jsxs(M,{children:[d.jsx(P,{className:dn.colLable,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.BeregnetAvvik"})})}),d.jsx(P,{className:dn.colValue,children:d.jsx(T,{size:"small",children:G(t===void 0?0:t)})}),d.jsx(P,{className:dn.colAvvik,children:d.jsx(T,{size:"small",className:`${l>25?$.redError:""} ${$.semiBoldText}`,children:d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.AvvikProsent",values:{avvik:l}})})})]})]})},VP=e=>e.overstyrtPrAar!==null&&e.overstyrtPrAar!==void 0?!0:e.erTilkommetAndel===!1&&e.lagtTilAvSaksbehandler===!1,MP=(e,n)=>e?e.filter(r=>n.includes(r.aktivitetStatus)).filter(r=>VP(r)):[],mu=e=>e||0,GP=e=>e.beregnetPrAar?e.beregnetPrAar:0,pu=(e,n)=>{const r=MP(e,n);if(r){const t=r.reduce((l,o)=>l+GP(o),0),s=r.reduce((l,o)=>{var g;return l+mu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseBortfaltPrÅr)},0),i=r.reduce((l,o)=>{var g;return l+mu((g=o==null?void 0:o.arbeidsforhold)==null?void 0:g.naturalytelseTilkommetPrÅr)},0);return t+s-i}return 0},LP=(e,n)=>{const r=d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel"}),t=d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.SN.Tittel"});switch(e.sammenligningsgrunnlagType){case ve.AT:case ve.FL:case ve.AT_FL:return r;case ve.SN:return t;case ve.ATFLSN:return n===sr.ÅTTE_TRETTIFEM?t:r;case ve.MIDLERTIDIG_INAKTIV:return d.jsx(k,{id:"Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel"});default:throw new Error(`Ukjent sammenligningstype ${e.sammenligningsgrunnlagType}`)}},vu=(e,n)=>{const r=n.find(t=>(t.aktivitetStatus===K.SELVSTENDIG_NAERINGSDRIVENDE||t.aktivitetStatus===K.BRUKERS_ANDEL)&&!t.erTilkommetAndel);return e.sammenligningsgrunnlagType===ve.SN&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===ve.MIDLERTIDIG_INAKTIV&&r?{inntekt:r.pgiSnitt||0,erPGI:!0}:e.sammenligningsgrunnlagType===ve.ATFLSN?r?{inntekt:r.pgiSnitt||0,erPGI:!0}:{inntekt:pu(n,[K.ARBEIDSTAKER,K.FRILANSER]),erPGI:!1}:{inntekt:pu(n,[K.ARBEIDSTAKER,K.FRILANSER]),erPGI:!1}};function yu(e,n,r){const t={...e};return t[n]?t[n].push(r):t[n]=[r],t}const KP=e=>e.reduce((n,r)=>{let t={...n};return r.avklaringsbehov.find(s=>s.definisjon===ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET)&&(t=yu(t,sr.ÅTTE_TRETTIFEM,r)),!r.sammenligningsgrunnlagPrStatus||r.sammenligningsgrunnlagPrStatus.length===0||r.sammenligningsgrunnlagPrStatus.forEach(s=>{const i=Cl(s.sammenligningsgrunnlagType,r.aktivitetStatus);t=yu(t,i,r)}),t},{}),$P=({readOnly:e,readOnlySubmitButton:n,kodeverkSamling:r,relevanteStatuser:t,arbeidsgiverOpplysningerPerId:s,gjelderBesteberegning:i,sammenligningsgrunnlag:l,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:p,setFormData:y,aktivIndex:f})=>{var b;const c=KP(o),[N,h]=A.useState(!1),E=d.jsx(PP,{sammenligningsgrunnlag:l,relevanteStatuser:t,erManueltBesteberegnet:i,erNyIArbeidslivet:!!((b=o[f].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)!=null&&b.find(S=>S.erNyIArbeidslivet))}),R=S=>{var q;if(c[S]&&c[S].length>0){const B=c[S],w=o[f].vilkårsperiodeFom,_=B.find(U=>U.vilkårsperiodeFom===w),H=_?(q=_.sammenligningsgrunnlagPrStatus)==null?void 0:q.find(U=>Cl(U.sammenligningsgrunnlagType,_==null?void 0:_.aktivitetStatus)===S):void 0,z=!!c[S].find(U=>!!U.avklaringsbehov.find(re=>Ki(re)===S)),O=_&&!!_.avklaringsbehov.find(U=>Ki(U)===S),L=(_==null?void 0:_.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel)||[],V=zl(S);return d.jsxs("div",{children:[!!H&&d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"xsmall",children:LP(H,S)}),d.jsx(wP,{sammenligningsgrunnlag:H,beregnetAarsinntekt:vu(H,L).inntekt,erPGI:vu(H,L).erPGI}),d.jsx("div",{className:$.storSpace})]}),z&&d.jsxs("div",{style:{display:O?"block":"none"},children:[d.jsx(xP,{readOnly:e,lovparagraf:S,kodeverkSamling:r,readOnlySubmitButton:n,arbeidsgiverOpplysningerPerId:s,beregningsgrunnlagListe:o,vilkår:g,submitCallback:m,formData:p&&V in p?p:void 0,setFormData:y,aktivIndex:f,finnesFormSomSubmittes:N,setSubmitting:h}),d.jsx("div",{className:$.storSpace})]})]})}return null};return d.jsxs("div",{className:$.panelRight,children:[E,d.jsx(x,{twentyPx:!0}),R(sr.ÅTTE_TRETTI),R(sr.ÅTTE_TRETTIFEM)]})},Yr=e=>I(e).locale(Li).format("MMMM");function Lt(e,n,r){const t=e.filter(s=>s.lønnsendringscenario===n).map(s=>`i ${Ps(r[s.arbeidsforhold.arbeidsgiverIdent],void 0)}
      ${I(s.sisteLønnsendringsdato).format(te)}`);return t.reduce((s,i,l)=>l===0?i:l<t.length-2?`${s}, ${i}`:`${s} og ${i}`,"")}const UP=(e,n,r,t)=>{switch(e){case hn.MANUELT_BEHANDLET:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet",values:{datoer:Lt(r,hn.MANUELT_BEHANDLET,t)}});case hn.DELVIS_MÅNEDSINNTEKT_SISTE_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned",values:{datoer:Lt(r,hn.DELVIS_MÅNEDSINNTEKT_SISTE_MND,t),måned:Yr(I(n).subtract(1,"month").format(wr)),forrigeMåned:Yr(I(n).subtract(2,"month").format(wr))}});case hn.FULL_MÅNEDSINNTEKT_EN_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned",values:{datoer:Lt(r,hn.FULL_MÅNEDSINNTEKT_EN_MND,t),nesteMåned:Yr(I(n).subtract(1,"month").format(wr))}});case hn.FULL_MÅNEDSINNTEKT_TO_MND:return d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned",values:{datoer:Lt(r,hn.FULL_MÅNEDSINNTEKT_TO_MND,t),sisteMåned:Yr(I(n).subtract(1,"month").format(wr)),nesteMåned:Yr(I(n).subtract(2,"month").format(wr))}});default:return null}};function YP(e,n,r){return kv(e.map(t=>t.lønnsendringscenario)).map(t=>d.jsxs(d.Fragment,{children:[UP(t,n,e,r),d.jsx("br",{}),d.jsx(x,{sixteenPx:!0})]}))}const HP=({skjeringstidspunktDato:e,saksopplysninger:n,arbeidsgiverOpplysningerPerId:r})=>{const t=[];return n&&n.lønnsendringSaksopplysning&&n.lønnsendringSaksopplysning.length>0&&t.push({textId:"Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan",readMoreContent:YP(n.lønnsendringSaksopplysning,e,r)}),d.jsx(uv,{saksopplysninger:t})},CP=e=>{switch(e){case K.SELVSTENDIG_NAERINGSDRIVENDE:return"alt2";case K.FRILANSER:return"alt1";case K.ARBEIDSTAKER:return"alt3";default:return"neutral"}},zP=(e,n)=>{const r=[];return e.filter((t,s,i)=>s===i.findIndex(l=>l===t)).forEach(t=>{var s;const i=((s=n[Ss.AKTIVITET_STATUS].find(l=>l.kode===t))==null?void 0:s.navn)||"";r.push({visningsNavn:i,kode:t,tagType:CP(t)})}),r.sort((t,s)=>t.visningsNavn>s.visningsNavn?1:-1),d.jsx(M,{children:r.map(t=>d.jsx(P,{className:$.tagRad,children:d.jsx(bs,{variant:t.tagType,title:t.visningsNavn,className:$.tagMargin,children:t.visningsNavn})},t.visningsNavn))})},JP=({skjeringstidspunktDato:e,aktivitetStatusList:n,kodeverkSamling:r,saksopplysninger:t,arbeidsgiverOpplysningerPerId:s})=>d.jsxs("div",{className:$.panelLeft,children:[zP(n,r),d.jsx(x,{sixteenPx:!0}),d.jsxs(on,{children:[d.jsxs(M,{children:[d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning"})})}),d.jsx(P,{children:d.jsx(T,{size:"small",className:$.semiBoldText,children:d.jsx(Ae,{dateString:e})})})]}),!!t&&!!t.lønnsendringSaksopplysning&&t.lønnsendringSaksopplysning.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(x,{sixteenPx:!0}),d.jsx(M,{children:d.jsx(P,{children:d.jsx(HP,{arbeidsgiverOpplysningerPerId:s,skjeringstidspunktDato:e,saksopplysninger:t})})})]})]})]}),fu=(e,n)=>{if(!e)return 0;const r=e.filter(t=>t.aktivitetStatus===n).map(({bruttoPrAar:t})=>t||0).reduce((t,s)=>t+s,0);return!r||r===0?0:r},Dp=e=>e.month()===2&&e.year()===2020,WP=e=>{const n=I(e.tom);return Dp(n)},wp=(e,n,r)=>{const{frisinnPerioder:t}=r;if(!Array.isArray(t))return null;const s=I(n.beregningsgrunnlagPeriodeFom);if(Dp(s)&&t.some(o=>WP(o))){const o=I("2020-04-30"),g=t.find(m=>I(m.tom).isSame(o,"day"));return g?g.frisinnAndeler.filter(m=>m.statusSøktFor===e):null}const i=I(n.beregningsgrunnlagPeriodeTom).endOf("month"),l=t.find(o=>!I(o.fom).isBefore(s)&&I(o.tom).isSame(i,"day"));return l?l.frisinnAndeler.filter(o=>o.statusSøktFor===e):null},qr=(e,n,r)=>{const t=wp(e,n,r);return!!t&&t.length>0},Qe=(e,n,r)=>{if(!e||!n||!r)return 0;if(qr(e,r,n.ytelsesspesifiktGrunnlag)){const t=n.beregningsgrunnlagPeriode[0];return fu(t.beregningsgrunnlagPrStatusOgAndel||[],e)}return fu(r.beregningsgrunnlagPrStatusOgAndel||[],e)},bu=(e,n,r)=>{const t=wp(e,n,r);if(!t||t.length<1)return 0;const s=t.map(({oppgittInntekt:i})=>i).reduce((i,l)=>i+l,0);return!s||s===0?0:s},Vp=e=>{const{frisinnPerioder:n,behandlingÅrsaker:r}=e;if(!Array.isArray(n))return[];if(r&&n.length>1&&r.some(t=>t===up.RE_ENDRING_FRA_BRUKER)){const t=[...n].sort((l,o)=>l.fom.localeCompare(o.fom)),s=t[t.length-1],i=I(s.tom);return i.month()===3&&i.year()===2020?t.filter(l=>I(l.fom).month()===3||I(l.fom).month()===2):t.filter(l=>I(l.fom).month()===i.month()&&I(l.fom).year()===i.year())}return n},ZP=(e,n)=>{let r=null;return n!==Be&&(r=n),d.jsx(k,{id:"Beregningsgrunnlag.BeregningTable.Periode",values:{fom:I(e).format(te),tom:r?I(r).format(te):""}},`fom-tom${e}${r}`)},Mp=(e,n)=>{const r=e.beregningsgrunnlagPeriodeFom,t=e.beregningsgrunnlagPeriodeTom,s=n.frisinnPerioder,i=Array.isArray(s)&&s.find(l=>!I(r).isBefore(l.fom)&&!I(t).isAfter(l.tom));return i?i.frisinnAndeler:[]},cu=(e,n)=>d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(k,{id:e})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(n)})})]}),ju=(e,n,r,t,s)=>{const i=s/100,l=n*i;return d.jsxs(d.Fragment,{children:[d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(k,{id:e,values:{grad:s}})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(l)})})]}),!!t||t===0&&d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(k,{id:r})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(t)})})]})]})},Kt=e=>e||e===0,XP=e=>{const n=I(e);return n.isBefore(I("2020-11-01","YYYY-MM-DD"))?80:n.isBefore(I("2022-01-01","YYYY-MM-DD"))?60:70},QP=(e,n,r,t)=>{const s=Mp(e,n);if(!s||s.length<1)return null;const i=s.some(p=>p.statusSøktFor===K.FRILANSER)?r:null,l=s.some(p=>p.statusSøktFor===K.SELVSTENDIG_NAERINGSDRIVENDE)?t:null,o=bu(K.FRILANSER,e,n),g=bu(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n),m=XP(e.beregningsgrunnlagPeriodeFom);return d.jsxs(d.Fragment,{children:[Kt(i)&&cu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagFL",i||0),Kt(i)&&ju("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertFL",i||0,"Beregningsgrunnlag.Søknad.LøpendeFL",o,m),Kt(l)&&cu("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagSN",l||0),Kt(l)&&ju("Beregningsgrunnlag.Frisinn.BeregningsgrunnlagRedusertSN",l||0,"Beregningsgrunnlag.Søknad.LøpendeSN",g,m),d.jsx(M,{children:d.jsx(P,{children:d.jsx("div",{className:$.colDevider})})}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.Resultat.Dagsats"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(e.dagsats)})})]})]})},eB=({bgperiode:e,ytelsegrunnlag:n,frilansGrunnlag:r,næringGrunnlag:t})=>{const s=Mp(e,n);if(!s||s.length<1)return null;const i=r>=0?r:0,l=t>=0?t:0;return d.jsxs("div",{children:[d.jsx(x,{eightPx:!0}),d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",children:ZP(e.beregningsgrunnlagPeriodeFom,e.beregningsgrunnlagPeriodeTom)})})}),QP(e,n,i,l)]})},Gp=e=>e.grunnbeløp?e.grunnbeløp*6:0,nB=(e,n)=>{if(!qr(K.FRILANSER,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Gp(e);const t=Qe(K.ARBEIDSTAKER,e,n);if(r-=t,!qr(K.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag)){const i=Qe(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n);r-=i}const s=Qe(K.FRILANSER,e,n);return s>r?r:s},rB=(e,n)=>{if(!qr(K.SELVSTENDIG_NAERINGSDRIVENDE,n,e.ytelsesspesifiktGrunnlag))return 0;let r=Gp(e);const t=Qe(K.ARBEIDSTAKER,e,n);r-=t;const s=Qe(K.FRILANSER,e,n);r-=s;const i=Qe(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n);return i>r?r:i},tB=(e,n)=>{const r=I(e.beregningsgrunnlagPeriodeFom),t=I(e.beregningsgrunnlagPeriodeTom);return Array.isArray(n)&&n.some(s=>!I(s.fom).isBefore(r)&&!I(s.tom).isAfter(t))},sB=({beregningsgrunnlag:e})=>{const n=Vp(e.ytelsesspesifiktGrunnlag),r=Array.isArray(e.beregningsgrunnlagPeriode)?e.beregningsgrunnlagPeriode.filter(t=>tB(t,n)):[];return d.jsxs("div",{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Resultat"})})})}),r.map(t=>d.jsx("div",{children:d.jsx(eB,{bgperiode:t,ytelsegrunnlag:e.ytelsesspesifiktGrunnlag,frilansGrunnlag:nB(e,t),næringGrunnlag:rB(e,t)},t.beregningsgrunnlagPeriodeFom)},t.beregningsgrunnlagPeriodeFom))]})},aB=I("2020-04-01"),iB=(e,n,r)=>d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Inntektstak",values:{grenseverdi:G(e),annenInntekt:G(n)}})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(T,{size:"small",children:G(r)})})]}),lB=(e,n)=>{if(!Array.isArray(n))return!1;const r=I(e.beregningsgrunnlagPeriodeFom),t=I(e.beregningsgrunnlagPeriodeTom);return n.some(s=>!I(s.fom).isBefore(r)&&!I(s.tom).isAfter(t))},dB=(e,n)=>{const r=[];return Array.isArray(e)&&e.forEach(t=>{if(lB(t,n)){const s=I(t.beregningsgrunnlagPeriodeTom),i=I(t.beregningsgrunnlagPeriodeTom).endOf("month");s.isAfter(aB)&&s.isSame(i,"day")&&t.beregningsgrunnlagPeriodeTom!==Be&&r.push(t)}}),r},oB=(e,n)=>{const r=I(n.beregningsgrunnlagPeriodeFom),t=I(e.fom);return r.year()===t.year()&&r.month()===t.month()&&t.isBefore(r)},gB=(e,n)=>{const r=e.ytelsesspesifiktGrunnlag,t=Qe(K.ARBEIDSTAKER,e,n),s=e.grunnbeløp*6;let i=t;if(!qr(K.FRILANSER,n,r)){const p=Qe(K.FRILANSER,e,n);i+=p}if(!qr(K.SELVSTENDIG_NAERINGSDRIVENDE,n,r)){const p=Qe(K.SELVSTENDIG_NAERINGSDRIVENDE,e,n);i+=p}const l=s>i?s-i:0,o=n.beregningsgrunnlagPeriodeTom,g=Array.isArray(r.frisinnPerioder)&&r.frisinnPerioder.find(p=>oB(p,n)),m=g?g.fom:n.beregningsgrunnlagPeriodeFom;return d.jsxs(d.Fragment,{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektstakOpplysningerPeriode",values:{fom:I(m).format(te),tom:o?I(o).format(te):""}},`fom-tom${m}${o}`)})})}),d.jsx(x,{eightPx:!0}),iB(s,i,l),d.jsx(x,{sixteenPx:!0})]})},uB=({beregningsgrunnlag:e})=>{const n=Vp(e.ytelsesspesifiktGrunnlag),r=dB(e.beregningsgrunnlagPeriode,n);return d.jsx(d.Fragment,{children:r.map(t=>d.jsx("div",{children:gB(e,t)},t.beregningsgrunnlagPeriodeFom))})},kB=({beregningsgrunnlag:e})=>{if(e.beregningsgrunnlagPeriode.length<2)return null;const n=e.beregningsgrunnlagPeriode.sort((l,o)=>l.beregningsgrunnlagPeriodeFom.localeCompare(o.beregningsgrunnlagPeriodeFom)),r=n[n.length-2],t=Qe(K.SELVSTENDIG_NAERINGSDRIVENDE,e,r),s=Qe(K.FRILANSER,e,r),i=Qe(K.ARBEIDSTAKER,e,r);return d.jsxs("div",{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Søknad.Inntektsopplysninger"})})})}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektAT"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(F,{size:"small",children:G(i)})})]}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektFL"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(F,{size:"small",children:G(s)})})]}),d.jsxs(M,{children:[d.jsx(P,{className:$.tabellAktivitet,children:d.jsx(T,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.InntektSN"})})}),d.jsx(P,{className:$.tabellInntekt,children:d.jsx(F,{size:"small",children:G(t)})})]})]})},hu=(e,n,r)=>d.jsx(M,{children:d.jsx(P,{children:d.jsx(T,{size:"small",children:d.jsx(k,{id:e,values:{fom:I(n).format(te),tom:I(r).format(te)}})})})}),mB=e=>{const n=e.frisinnAndeler.find(t=>t.statusSøktFor===K.SELVSTENDIG_NAERINGSDRIVENDE),r=e.frisinnAndeler.find(t=>t.statusSøktFor===K.FRILANSER);return d.jsxs("div",{children:[r&&hu("Beregningsgrunnlag.Søknad.SøktYtelseFL",e.fom,e.tom),n&&hu("Beregningsgrunnlag.Søknad.SøktYtelseSN",e.fom,e.tom)]},e.fom)},pB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag,{frisinnPerioder:r}=n;return d.jsxs("div",{children:[d.jsx(M,{children:d.jsx(P,{children:d.jsx(F,{size:"small",className:$.avsnittOverskrift,children:d.jsx(k,{id:"Beregningsgrunnlag.Søknad.Tittel"})})})}),d.jsx(x,{eightPx:!0}),Array.isArray(r)&&r.map(t=>mB(t)),d.jsx(x,{sixteenPx:!0})]})},vB="_aksjonspunktBehandlerContainer_o9hgh_6",yB={aksjonspunktBehandlerContainer:vB},fB=e=>e.beregningsgrunnlagPeriode.some(n=>n.dagsats||n.dagsats===0),bB=({beregningsgrunnlag:e})=>d.jsxs("div",{className:yB.aksjonspunktBehandlerContainer,children:[d.jsx(ke,{children:d.jsx(k,{id:"Beregningsgrunnlag.Frisinn.Tittel"})}),d.jsx(x,{sixteenPx:!0}),d.jsx(pB,{beregningsgrunnlag:e}),d.jsx(x,{sixteenPx:!0}),d.jsx(kB,{beregningsgrunnlag:e}),d.jsx(x,{sixteenPx:!0}),fB(e)&&d.jsxs(d.Fragment,{children:[d.jsx(uB,{beregningsgrunnlag:e}),d.jsx(x,{sixteenPx:!0}),d.jsx(sB,{beregningsgrunnlag:e})]})]}),cB=e=>d.jsx(bB,{beregningsgrunnlag:e}),jB=({beregningsgrunnlag:e})=>{const n=e.ytelsesspesifiktGrunnlag;return n&&n.ytelsetype===_l.FRISINN?cB(e):null},hB=e=>e&&e.faktaOmBeregningTilfeller?e.faktaOmBeregningTilfeller.some(n=>n===op.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE):!1,AB=e=>!!(e!=null&&e.besteberegninggrunnlag),IB=e=>e[0].beregningsgrunnlagPrStatusOgAndel?e[0].beregningsgrunnlagPrStatusOgAndel.filter(n=>n.erTilkommetAndel!==!0).map(n=>n.aktivitetStatus):[],TB=({readOnly:e,valgtBeregningsgrunnlag:n,relevanteStatuser:r,readOnlySubmitButton:t,kodeverkSamling:s,vilkarPeriode:i,arbeidsgiverOpplysningerPerId:l,gjeldendeAvklaringsbehov:o,alleBeregningsgrunnlag:g,vilkår:m,submitCallback:p,formData:y,setFormData:f,aktivIndex:b})=>{var c;const{skjaeringstidspunktBeregning:N,beregningsgrunnlagPeriode:h,faktaOmBeregning:E,ytelsesspesifiktGrunnlag:R}=n,S=hB(E),q=AB(R),B=d.jsx("div",{className:$.storSpace}),w=IB(h),_=o&&o.length>0;return d.jsxs(d.Fragment,{children:[_&&d.jsxs(d.Fragment,{children:[d.jsx(x,{eightPx:!0}),d.jsx(Hx,{avklaringsbehov:o,beregningsgrunnlag:n})]}),d.jsxs(M,{children:[d.jsxs(P,{className:$.venstreKolonne,children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Title.Beregning"})}),d.jsx(x,{sixteenPx:!0}),d.jsx(JP,{kodeverkSamling:s,aktivitetStatusList:w,skjeringstidspunktDato:N,saksopplysninger:n.faktaOmBeregning?n.faktaOmBeregning.saksopplysninger:void 0,arbeidsgiverOpplysningerPerId:l}),B,r.skalViseBeregningsgrunnlag&&d.jsx(tr,{relevanteStatuser:r,allePerioder:h,gjelderBesteberegning:S,kodeverkSamling:s,arbeidsgiverOpplysningerPerId:l,sammenligningsGrunnlagInntekter:n.inntektsgrunnlag,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus}),q&&d.jsxs(d.Fragment,{children:[B,d.jsx(Mx,{besteMåneder:(c=R==null?void 0:R.besteberegninggrunnlag)==null?void 0:c.besteMåneder,periode:h[0]})]})]}),d.jsxs(P,{className:$.hoyreKolonne,children:[d.jsx(se,{size:"medium",className:$.panelRight,children:d.jsx(k,{id:"Beregningsgrunnlag.Title.Fastsettelse"})}),d.jsx(x,{sixteenPx:!0}),d.jsx($P,{readOnly:e,readOnlySubmitButton:t,kodeverkSamling:s,relevanteStatuser:r,arbeidsgiverOpplysningerPerId:l,gjelderBesteberegning:S,sammenligningsgrunnlag:n.sammenligningsgrunnlagPrStatus||[],beregningsgrunnlagListe:g,vilkår:m,submitCallback:p,formData:y,setFormData:f,aktivIndex:b}),d.jsxs(d.Fragment,{children:[d.jsx(x,{sixteenPx:!0}),d.jsx(jB,{beregningsgrunnlag:n})]}),i&&d.jsx(Ox,{beregningsgrunnlag:n,vilkårsperiode:i})]})]})]})},RB="_readOnlyBlokk_3qjl7_1",EB={readOnlyBlokk:RB},NB=({avklaringsbehov:e})=>!e||!e.begrunnelse?null:d.jsxs(d.Fragment,{children:[d.jsx(F,{size:"small",children:d.jsx(k,{id:"Beregningsgrunnlag.Gradering.Beskrivelse"})}),d.jsx(x,{sixteenPx:!0}),d.jsxs(T,{size:"small",className:EB.readOnlyBlokk,children:[e.begrunnelse," ",d.jsx(it,{})]})]}),SB=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],qB=e=>e.avklaringsbehov.filter(n=>SB.some(r=>r===n.definisjon)),xB=e=>({isArbeidstaker:e.some(n=>ip(n)),isFrilanser:e.some(n=>ap(n)),isSelvstendigNaeringsdrivende:e.some(n=>lp(n)),isMidlertidigInaktiv:e.some(n=>n===K.MIDLERTIDIG_INAKTIV),harAndreTilstotendeYtelser:e.some(n=>cS(n)),harDagpengerEllerAAP:e.some(n=>sp(n)),isAAP:e.some(n=>n===K.ARBEIDSAVKLARINGSPENGER),isDagpenger:e.some(n=>n===K.DAGPENGER||n===K.SYKEPENGER_AV_DAGPENGER),skalViseBeregningsgrunnlag:e.length>0,isKombinasjonsstatus:e.some(n=>jS(n))||e.length>1,isMilitaer:e.some(n=>hS(n))}),PB=e=>e?e.find(n=>n.definisjon===ue.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG):void 0,Au=(e,n)=>e.perioder.find(({periode:r})=>r.fom===n),BB=({aktivtBeregningsgrunnlagIndeks:e,beregningsgrunnlagListe:n,submitCallback:r,readOnly:t,readOnlySubmitButton:s,vilkar:i,kodeverkSamling:l,arbeidsgiverOpplysningerPerId:o,formData:g,setFormData:m})=>{const p=n[e],y=xB(p.aktivitetStatus),f=PB(p.avklaringsbehov);function b(c){const N=Au(i,c.vilkårsperiodeFom);return N.vurderesIBehandlingen&&!N.erForlengelse}return d.jsxs(d.Fragment,{children:[d.jsx(TB,{readOnly:t||!b(n[e]),valgtBeregningsgrunnlag:n[e],gjeldendeAvklaringsbehov:qB(n[e]),relevanteStatuser:y,readOnlySubmitButton:s,kodeverkSamling:l,vilkarPeriode:Au(i,n[e].vilkårsperiodeFom),arbeidsgiverOpplysningerPerId:o,alleBeregningsgrunnlag:n,vilkår:i,submitCallback:r,formData:g,setFormData:m,aktivIndex:e}),f&&d.jsx(NB,{avklaringsbehov:f})]})},FB="_contentContainer_1ddng_1",_B="_sideMenuContainer_1ddng_4",OB="_mainContainer--withSideMenu_1ddng_7",DB="_advarselIkon_1ddng_12",zt={contentContainer:FB,sideMenuContainer:_B,"mainContainer--withSideMenu":"_mainContainer--withSideMenu_1ddng_7",mainContainerWithSideMenu:OB,advarselIkon:DB},wB=[ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,ue.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,ue.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON],VB=[],MB=uS.bind(zt),Iu=Ke(Tp),GB=e=>{var n;const r=(n=e==null?void 0:e.perioder)==null?void 0:n.some(t=>t.avslagKode==="1043");return d.jsxs(d.Fragment,{children:[d.jsx(se,{size:"medium",children:d.jsx(k,{id:"Beregningsgrunnlag.Title"})}),d.jsx(x,{eightPx:!0}),d.jsx(M,{children:d.jsx(P,{children:d.jsx(k,{id:r?"Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag":"Beregningsgrunnlag.HarIkkeBeregningsregler"})})})]})},LB=(e,n)=>{const r=n.vilkårsperiodeFom;return(e&&e.perioder?e.perioder.filter(t=>t.vurderesIBehandlingen&&!t.erForlengelse):[]).some(t=>t.periode.fom===r)},KB=e=>e.avklaringsbehov.some(n=>wB.some(r=>r===n.definisjon)&&n.kanLoses),$B=(e,n)=>e.map(r=>({skalVurderes:LB(n,r),harAvklaringsbehov:KB(r),stp:I(r.skjaeringstidspunktBeregning).format(te)})),UB=({beregningsgrunnlagListe:e,submitCallback:n,isReadOnly:r,readOnlySubmitButton:t,beregningsgrunnlagsvilkar:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,formData:o,setFormData:g})=>{const m=e||VB,p=m.length>1;m.sort((N,h)=>N.skjaeringstidspunktBeregning.localeCompare(h.skjaeringstidspunktBeregning)).reverse();const[y,f]=A.useState(0),b=$B(m,s),c=MB("mainContainer",{"mainContainer--withSideMenu":p});return A.useEffect(()=>{const N=b.findIndex(h=>h.skalVurderes&&h.harAvklaringsbehov);N>-1&&f(N)},[e]),e.length===0||e.length===1&&!e[0].aktivitetStatus?d.jsx(Ge,{value:Iu,children:GB(s)}):d.jsx(Ge,{value:Iu,children:d.jsxs("div",{className:c,children:[p&&d.jsx("div",{className:zt.sideMenuContainer,children:d.jsx(Av,{links:b.map((N,h)=>({icon:N.skalVurderes&&N.harAvklaringsbehov?d.jsx(xr,{className:zt.advarselIkon}):null,active:y===h,label:`${N.stp}`})),onClick:f})}),d.jsx("div",{className:zt.contentContainer,children:d.jsx(BB,{aktivtBeregningsgrunnlagIndeks:y,beregningsgrunnlagListe:m,submitCallback:n,readOnly:r,readOnlySubmitButton:t,vilkar:s,kodeverkSamling:i,arbeidsgiverOpplysningerPerId:l,setFormData:g,formData:o})})]})})},YB=e=>{switch(e){case ue.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:return de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;case ue.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:return de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD;case ue.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:return de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET;case ue.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:return de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;default:throw new Error(`Ukjent avklaringspunkt ${e}`)}},HB=e=>n=>{const t=(Array.isArray(n)?n:[n]).map(s=>({kode:YB(s.kode),...s.grunnlag[0]}));return e(t)},CB=(e,n)=>({avslagKode:n.avslagKode,vurderesIBehandlingen:!0,merknadParametere:{},periode:{fom:e?e.skjaeringstidspunktBeregning:"",tom:Be},vilkarStatus:n.vilkarStatus}),zB=(e,n)=>{const r=e.find(s=>s.vilkarType&&s.vilkarType===nr.BEREGNINGSGRUNNLAGVILKARET);return!r||!n?null:{...r,perioder:[CB(n,r)]}},JB=e=>e?[{...e,vilkårsperiodeFom:e.skjaeringstidspunktBeregning}]:[],WB=[de.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,de.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,de.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,de.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET],ZB=[nr.BEREGNINGSGRUNNLAGVILKARET],XB=({arbeidsgiverOpplysningerPerId:e})=>{const n=W(),r=nl(WB,ZB),{behandling:t}=A.use(Pn),s=xn(t),{data:i,isFetching:l}=Sn(s.beregningsgrunnlagOptions(t));return a.jsx(Lu,{standardPanelProps:r,prosessPanelKode:Zi.BEREGNINGSGRUNNLAG,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,children:l?a.jsx(Nn,{}):a.jsx(QB,{kodeverkSamling:r.alleKodeverk,beregningsgrunnlagsvilkar:zB(r.vilkar,i),beregningsgrunnlagListe:JB(i),arbeidsgiverOpplysningerPerId:e,submitCallback:HB(r.submitCallback),isReadOnly:r.isReadOnly,readOnlySubmitButton:r.readOnlySubmitButton})})},QB=e=>{const{formData:n,setFormData:r}=Ln();return a.jsx(UB,{...e,formData:n,setFormData:r})};XB.__docgenInfo={description:"",methods:[],displayName:"BeregningsgrunnlagProsessStegInitPanel",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const Tu=de.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,bi=[nr.MEDLEMSKAPSVILKÅRET_LØPENDE],eF=()=>{const e=W(),n=nl([Tu],bi);return a.jsx(rv,{overstyringApKode:Tu,kanOverstyreAccess:{isEnabled:!1,employeeHasAccess:!1},overrideReadOnly:!0,children:a.jsx(Mv,{standardPanelProps:n,prosessPanelKode:Zi.FORTSATTMEDLEMSKAP,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.FortsattMedlemskap"}),skalPanelVisesIMeny:wu(n.aksjonspunkter,bi,n.vilkar),children:a.jsx(Ev,{vilkar:n.vilkar,vilkarKoder:bi,panelTekstKode:"Behandlingspunkt.FortsattMedlemskap"})})})};eF.__docgenInfo={description:"",methods:[],displayName:"FortsattMedlemskapProsessStegInitPanel"};const nF="_panel_d5cml_1",rF="_hyphen_d5cml_9",tF="_marginTop_d5cml_19",sF="_marginBottom_d5cml_23",aF="_colWidth_d5cml_27",_n={panel:nF,hyphen:rF,marginTop:tF,marginBottom:sF,colWidth:aF},iF=(e,n)=>e&&n!==void 0,lF=(e,n,r)=>{const t=r==null?void 0:r.mottattDato;return{gyldigSenFremsetting:e[0].status===er.OPPRETTET?void 0:t!==n,ansesMottatt:t,...Pr.buildInitialValues(e)}},dF=e=>({harGyldigGrunn:e.gyldigSenFremsetting,ansesMottattDato:e.ansesMottatt,kode:de.VURDER_SOKNADSFRIST_FORELDREPENGER,...Pr.transformValues(e)}),Lp=({readOnlySubmitButton:e,mottattDato:n,søknadsfrist:r})=>{const{aksjonspunkterForPanel:t,isReadOnly:s,submitCallback:i,harÅpneAksjonspunkter:l}=En(),o=lF(t,n,r),{formData:g,setFormData:m}=Ln(),p=Ce({defaultValues:g||o}),y=p.watch("gyldigSenFremsetting"),f=r==null?void 0:r.søknadsperiodeStart,b=r==null?void 0:r.søknadsperiodeSlutt,c=r==null?void 0:r.utledetSøknadsfrist;return a.jsxs(ze,{formMethods:p,onSubmit:N=>i(dF(N)),setDataOnUnmount:m,children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Soknadsfrist"})}),a.jsx(x,{twentyPx:!0}),l&&a.jsx(ar,{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText",values:{numberOfDays:r==null?void 0:r.dagerOversittetFrist,soknadsfristdato:c?fr(c).format(te):""}})}),a.jsx(x,{twentyPx:!0}),a.jsx(on,{children:a.jsxs(M,{children:[a.jsx(P,{className:_n.colWidth,children:a.jsxs(Ku,{className:_n.panel,children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Vurder"})}),a.jsxs("ul",{className:_n.hyphen,children:[a.jsx("li",{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt1"})}),a.jsx("li",{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt2"})}),a.jsx("li",{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.Punkt3"})})]})]})}),a.jsx(P,{className:_n.colWidth,children:a.jsx(on,{children:a.jsxs(M,{className:_n.marginBottom,children:[a.jsxs(P,{className:_n.colWidth,children:[a.jsx(ke,{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.SoknadMottatt"})}),n&&a.jsx(T,{size:"small",children:fr(n).format(te)})]}),f&&b&&a.jsxs(P,{className:_n.colWidth,children:[a.jsx(ke,{children:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.SoknadPeriode"})}),a.jsx(T,{size:"small",children:`${fr(f).format(te)} - ${fr(b).format(te)}`})]})]})})})]})}),a.jsxs("div",{className:_n.marginTop,children:[a.jsx(Pr,{readOnly:s}),a.jsx(x,{sixteenPx:!0}),a.jsx(Ne,{name:"gyldigSenFremsetting",validate:[X],isReadOnly:s,isHorizontal:!0,isEdited:iF(t.length>0,y),isTrueOrFalseSelection:!0,radios:[{value:"true",label:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.GyldigGrunn"})},{value:"false",label:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn"})}]}),y&&a.jsxs(a.Fragment,{children:[a.jsx(x,{sixteenPx:!0}),a.jsx(Nu,{children:a.jsx(Qn,{name:"ansesMottatt",isReadOnly:s,label:a.jsx(k,{id:"VurderSoknadsfristForeldrepengerForm.NyMottattDato"}),validate:[X,In,cv]})})]}),a.jsx(x,{twentyPx:!0}),a.jsx(Gv,{isReadOnly:s,isSubmittable:!e,isSubmitting:p.formState.isSubmitting,isDirty:p.formState.isDirty})]})]})};Lp.__docgenInfo={description:`VurderSoknadsfristForeldrepengerForm

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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const oF={"VurderSoknadsfristForeldrepengerForm.Soknadsfrist":"Søknadsfrist","VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText":"Søknad ble mottatt {numberOfDays} dager etter søknadsfrist ({soknadsfristdato})","VurderSoknadsfristForeldrepengerForm.SoknadMottatt":"Søknad mottatt dato","VurderSoknadsfristForeldrepengerForm.SoknadPeriode":"Søknadsperiode","VurderSoknadsfristForeldrepengerForm.Begrunnelse":"Begrunnelse fra søknaden","VurderSoknadsfristForeldrepengerForm.Vurder":"Vurder følgende","VurderSoknadsfristForeldrepengerForm.Punkt1":"Har det vært fristavbrytende kontakt?","VurderSoknadsfristForeldrepengerForm.Punkt2":"Har Nav gitt misvisende opplysninger?","VurderSoknadsfristForeldrepengerForm.Punkt3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","VurderSoknadsfristForeldrepengerForm.GyldigGrunn":"Gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn":"Ingen gyldig grunn for sen fremsetting av søknaden","VurderSoknadsfristForeldrepengerForm.NyMottattDato":"Dato for når søknaden kan anses som mottatt"},gF=Ke(oF),Kp=({soknad:e,readOnlySubmitButton:n})=>a.jsx(Ge,{value:gF,children:a.jsx(Lp,{mottattDato:e.mottattDato,søknadsfrist:e.søknadsfrist,readOnlySubmitButton:n})});Kp.__docgenInfo={description:"",methods:[],displayName:"VurderSoknadsfristForeldrepengerIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const uF=[de.VURDER_SOKNADSFRIST_FORELDREPENGER],kF=()=>{const e=W(),n=nl(uF),{behandling:r}=A.use(Pn),t=xn(r),{data:s}=Sn(t.søknadOptions(r));return a.jsx(Lu,{standardPanelProps:n,prosessPanelKode:Zi.SOEKNADSFRIST,prosessPanelMenyTekst:e.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:wu(n.aksjonspunkter),children:s?a.jsx(Kp,{soknad:s,readOnlySubmitButton:n.readOnlySubmitButton}):a.jsx(Nn,{})})};kF.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristProsessStegInitPanel"};const Vn={BEKREFTET_GODKJENT:"BEKREFTET_GODKJENT",BEKREFTET_AVVIST:"BEKREFTET_AVVIST",ANTATT_GODKJENT:"ANTATT_GODKJENT",ANTATT_AVVIST:"ANTATT_AVVIST"},mF="_godkjentImage_1bp9b_1",pF="_avslattImage_1bp9b_7",vF="_margin_1bp9b_13",yF="_fix_1bp9b_17",Hr={godkjentImage:mF,avslattImage:pF,margin:vF,fix:yF},fF="MELLOMLIGGENDE_PERIODE",bF=e=>e===Vn.BEKREFTET_AVVIST||e===Vn.ANTATT_AVVIST?"OpptjeningVilkarView.Avslatt":"OpptjeningVilkarView.Godkjent",Ru=e=>e===Vn.BEKREFTET_GODKJENT||e===Vn.ANTATT_GODKJENT||e===fF,$p=({fastsattOpptjeningAktivitet:e,lukkPeriode:n,velgNestePeriode:r,velgForrigePeriode:t})=>{const s=W();return a.jsxs(Ku,{border:!0,children:[a.jsx(on,{children:a.jsxs(M,{spaceBetween:!0,children:[a.jsx(P,{children:a.jsx(F,{size:"small",children:a.jsx(k,{id:"OpptjeningVilkarView.DetailsForSelectedPeriod"})})}),a.jsxs(P,{className:Hr.fix,children:[a.jsx(ae,{className:Hr.margin,size:"xsmall",icon:a.jsx(vs,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.prevPeriod"}),children:a.jsx(k,{id:"TimeLineData.prevPeriodShort"})}),a.jsx(ae,{className:Hr.margin,size:"xsmall",icon:a.jsx(ys,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.nextPeriod"}),iconPosition:"right",children:a.jsx(k,{id:"TimeLineData.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(Xn,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:s.formatMessage({id:"TimeLineData.lukkPeriode"})})]})]})}),a.jsx(x,{sixteenPx:!0}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:e.fom,dateStringTom:e.tom})}),a.jsx(x,{sixteenPx:!0}),a.jsxs(C,{children:[Ru(e.klasse)&&a.jsx(Hi,{className:Hr.godkjentImage}),!Ru(e.klasse)&&a.jsx(Xn,{className:Hr.avslattImage}),a.jsx(k,{id:bF(e.klasse)})]})]})};$p.__docgenInfo={description:"",methods:[],displayName:"TimeLineData",props:{fastsattOpptjeningAktivitet:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const cF={danger:a.jsx(Mu,{}),success:a.jsx(el,{}),info:a.jsx(Wv,{})},jF=e=>e===Vn.BEKREFTET_AVVIST||e===Vn.ANTATT_AVVIST?"danger":e===Vn.BEKREFTET_GODKJENT||e===Vn.ANTATT_GODKJENT?"success":"info",hF=e=>e.map(n=>({start:I(n.fom).toDate(),end:I(n.tom).toDate(),status:jF(n.klasse),opptjeningsperiode:n})),AF=e=>e==="info"?"OpptjeningTimeLineLight.MellomliggendePeriode":e==="success"?"OpptjeningTimeLineLight.Godkjent":"OpptjeningTimeLineLight.Avslatt",Up=({opptjeningPeriods:e,opptjeningFomDate:n,opptjeningTomDate:r})=>{const t=W(),s=A.useMemo(()=>[...e].sort((f,b)=>I(f.fom).diff(I(b.fom))),[e]),i=A.useMemo(()=>hF(s),[s]),[l,o]=A.useState(),g=f=>{const b=i.find(c=>{var N;return((N=c.opptjeningsperiode)==null?void 0:N.fom)===f});b&&o(b)},m=A.useCallback(()=>{o(void 0)},[]),p=A.useCallback(()=>{if(i){const f=i.findIndex(b=>{var c,N;return((c=b.opptjeningsperiode)==null?void 0:c.fom)===((N=l==null?void 0:l.opptjeningsperiode)==null?void 0:N.fom)})+1;f<i.length&&o(i[f])}},[i,l,o]),y=A.useCallback(()=>{if(i){const f=i.findIndex(b=>{var c,N;return((c=b.opptjeningsperiode)==null?void 0:c.fom)===((N=l==null?void 0:l.opptjeningsperiode)==null?void 0:N.fom)})-1;f>=0&&o(i[f])}},[i,l,o]);return a.jsxs(a.Fragment,{children:[a.jsx(x,{twentyPx:!0}),a.jsxs(we,{startDate:I(n).subtract(1,"months").toDate(),endDate:I(r).add(10,"days").toDate(),children:[a.jsxs(we.Pin,{date:I(n).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"OpptjeningTimeLineLight.StartDato"})}),a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:n})})]}),a.jsxs(we.Pin,{date:I(r).toDate(),children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"OpptjeningTimeLineLight.SluttDato"})}),a.jsx(T,{size:"small",children:a.jsx(Ae,{dateString:r})})]}),a.jsx(we.Row,{label:"",children:i.map(f=>{var b,c,N;return a.jsx(we.Period,{start:f.start,end:f.end,status:f.status,onSelectPeriod:()=>{var h;return g((h=f.opptjeningsperiode)==null?void 0:h.fom)},isActive:((b=l==null?void 0:l.opptjeningsperiode)==null?void 0:b.fom)===((c=f.opptjeningsperiode)==null?void 0:c.fom),icon:cF[f.status],title:t.formatMessage({id:AF(f.status)})},(N=f.opptjeningsperiode)==null?void 0:N.fom)})})]}),a.jsx(x,{sixteenPx:!0}),(l==null?void 0:l.opptjeningsperiode)&&a.jsx($p,{fastsattOpptjeningAktivitet:l.opptjeningsperiode,lukkPeriode:m,velgNestePeriode:p,velgForrigePeriode:y})]})};Up.__docgenInfo={description:"",methods:[],displayName:"OpptjeningTimeLineLight",props:{opptjeningPeriods:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:""},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const Jl=({months:e,days:n,fastsattOpptjeningActivities:r=[],opptjeningFomDate:t,opptjeningTomDate:s})=>a.jsxs(a.Fragment,{children:[a.jsx(T,{size:"small",children:a.jsx(k,{id:"OpptjeningVilkarView.MonthsAndDays",values:{months:e,days:n}})}),a.jsx(x,{eightPx:!0}),a.jsx(T,{size:"small",children:a.jsx(Ue,{dateStringFom:t,dateStringTom:s})}),a.jsx(x,{sixteenPx:!0}),r.length>0&&a.jsx(Up,{opptjeningPeriods:r,opptjeningFomDate:t,opptjeningTomDate:s})]});Jl.__docgenInfo={description:`OpptjeningVilkarView

Viser resultatet av opptjeningsvilkåret.`,methods:[],displayName:"OpptjeningVilkarView",props:{months:{required:!0,tsType:{name:"number"},description:""},days:{required:!0,tsType:{name:"number"},description:""},fastsattOpptjeningActivities:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  klasse: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]"},description:"",defaultValue:{value:"[]",computed:!1}},opptjeningFomDate:{required:!0,tsType:{name:"string"},description:""},opptjeningTomDate:{required:!0,tsType:{name:"string"},description:""}}};const IF=(e,n,r)=>({...rl.buildInitialValues(e,n,r),...Pr.buildInitialValues(e)}),TF=e=>({...rl.transformValues(e),...Pr.transformValues(e),kode:de.VURDER_OPPTJENINGSVILKARET}),Yp=({readOnlySubmitButton:e,lovReferanse:n,status:r,fastsattOpptjening:t,erSvpFagsak:s})=>{const i=W(),{behandling:l,aksjonspunkterForPanel:o,submitCallback:g,harÅpneAksjonspunkter:m,isReadOnly:p,alleMerknaderFraBeslutter:y}=En(),f=o.some(_=>{var H;return(H=y[_.definisjon])==null?void 0:H.notAccepted}),b=IF(o,r,l.behandlingsresultat),{formData:c,setFormData:N}=Ln(),h=Ce({defaultValues:c||b}),R=o.some(_=>_.status===er.OPPRETTET)?void 0:Gu.OPPFYLT===r,S=A.useCallback(_=>g(TF(_)),[g]),q=A.useCallback((..._)=>a.jsx("b",{children:_}),[]),B=A.useCallback(_=>{var H;return((H=t.fastsattOpptjeningAktivitetList)==null?void 0:H.length)===0&&_===!0?i.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt"}):null},[]),w=A.useCallback(()=>a.jsxs(a.Fragment,{children:[a.jsx(x,{sixteenPx:!0}),a.jsx(Jl,{months:t.opptjeningperiode.måneder,days:t.opptjeningperiode.dager,fastsattOpptjeningActivities:t.fastsattOpptjeningAktivitetList,opptjeningFomDate:t.opptjeningFom,opptjeningTomDate:t.opptjeningTom})]}),[t]);return a.jsx(ze,{formMethods:h,onSubmit:S,setDataOnUnmount:N,children:a.jsxs(Lv,{title:i.formatMessage({id:"OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret"}),isAksjonspunktOpen:m,readOnlySubmitButton:e,readOnly:p,lovReferanse:n,originalErVilkarOk:R,erIkkeGodkjentAvBeslutter:f,isDirty:h.formState.isDirty,isSubmitting:h.formState.isSubmitting,rendreFakta:w,children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:s?"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger"})}),a.jsx(rl,{readOnly:p,customVilkarOppfyltText:a.jsx(k,{id:s?"OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErOppfylt"}),customVilkarIkkeOppfyltText:a.jsx(k,{id:s?"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt",values:{b:q}}),validatorsForRadioOptions:[B]}),a.jsx(x,{sixteenPx:!0}),a.jsx(Pr,{readOnly:p})]})})};Yp.__docgenInfo={description:`OpptjeningVilkarAksjonspunktPanel

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const Hp=({fastsattOpptjening:e,status:n,lovReferanse:r,readOnlySubmitButton:t,erSvpFagsak:s})=>{const{aksjonspunkterForPanel:i}=En();return i.length>0?a.jsx(Yp,{readOnlySubmitButton:t,status:n,lovReferanse:r,fastsattOpptjening:e,erSvpFagsak:s}):a.jsx(Jl,{months:e.opptjeningperiode.måneder,days:e.opptjeningperiode.dager,fastsattOpptjeningActivities:e.fastsattOpptjeningAktivitetList,opptjeningFomDate:e.opptjeningFom,opptjeningTomDate:e.opptjeningTom})};Hp.__docgenInfo={description:`OpptjeningVilkarForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"klasse",value:{name:"string",required:!0}}]}}],raw:"FastsattOpptjeningAktivitet[]",required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},erSvpFagsak:{required:!0,tsType:{name:"boolean"},description:""}}};const RF={"OpptjeningVilkarView.Oppfylt":"Vilkåret er oppfylt","OpptjeningVilkarView.Godkjent":"Godkjent","OpptjeningVilkarView.Avslatt":"Avslått","OpptjeningVilkarView.Months":"måneder","OpptjeningVilkarView.Weeks":"uker","OpptjeningVilkarView.Days":"dager","OpptjeningVilkarView.MonthsAndDays":"{months} måneder og {days} dager aktivitet i opptjeningsperioden","OpptjeningVilkarView.DetailsForSelectedPeriod":"Detaljer for valgt periode","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger":"Opptjent rett til foreldrepenger","OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger":"Opptjent rett til svangerskapspenger","OpptjeningVilkarAksjonspunktPanel.ErOppfylt":"Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt":"Søker har ikke oppfylt krav om 6 mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp":"Søker har oppfylt krav om 4 uker opptjening, vilkåret er oppfylt.","OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp":"Søker har ikke oppfylt krav om 4 uker mnd opptjening, vilkåret er <b>ikke</b> oppfylt.","OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret":"Opptjening","OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt":"Du kan ikke velge at opptjeningsvilkåret er oppfylt, fordi det ikke finnes noen aktiviteter å beregne inntekten fra. Kontakt bruker for å avklare om bruker har noen opptjening.","OpptjeningTimeLineLight.StartDato":"Start opptjeningsperiode","OpptjeningTimeLineLight.SluttDato":"Slutt opptjeningsperiode","OpptjeningTimeLineLight.MellomliggendePeriode":"Mellomliggende periode","OpptjeningTimeLineLight.Godkjent":"Godkjent","OpptjeningTimeLineLight.Avslatt":"Avslått","TimeLineNavigation.openData":"Åpne info om første periode","TimeLineData.nextPeriod":"Neste periode","TimeLineData.prevPeriod":"Forrige periode","Timeline.openData":"Åpne info om første periode","TimeLineData.lukkPeriode":"Lukk periode","TimeLineData.nextPeriodShort":"Neste","TimeLineData.prevPeriodShort":"Forrige","ShowVilkarStatus.Check":"Informasjonen er utfylt"},EF=Ke(RF),NF=({opptjening:e,lovReferanse:n,readOnlySubmitButton:r,status:t,erSvpFagsak:s=!1})=>a.jsx(Ge,{value:EF,children:a.jsx(Hp,{fastsattOpptjening:e.fastsattOpptjening,status:t,lovReferanse:n,readOnlySubmitButton:r,erSvpFagsak:s})});NF.__docgenInfo={description:"",methods:[],displayName:"OpptjeningVilkarProsessIndex",props:{opptjening:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"år",value:{name:"string",required:!0}},{key:"beløp",value:{name:"number",required:!0}}]}}],raw:"FerdiglignetNæring[]",required:!1}}]}},description:""},lovReferanse:{required:!1,tsType:{name:"string"},description:""},erSvpFagsak:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const SF=(e,n)=>e.filter(r=>r.opptjeningsår===n),Cp=e=>e.aktivitetStatus+e.arbeidsgiverId,qF=(e,n,r)=>{const t=e.arbeidsgiverId?n[e.arbeidsgiverId]:void 0;return t?t.erPrivatPerson?t.fødselsdato?`${t.navn} (${I(t.fødselsdato).format(te)})`:t.navn:t.identifikator?`${t.navn} (${t.identifikator})`:t.navn:e.aktivitetStatus?Ou(r)(e.aktivitetStatus,gn.AKTIVITET_STATUS):""},xF=(e,n,r)=>({identifikator:Cp(e),visningsnavn:qF(e,n,r),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),PF=(e,n,r)=>{const t=[];return e.forEach(s=>{const i=s.erBrukerMottaker?s.årsbeløp:0,l=s.erBrukerMottaker?0:s.årsbeløp,o=Cp(s),g=t.find(m=>m.identifikator===o);g?(g.utbetaltTilSøker+=i,g.utbetaltIRefusjon+=l):t.push(xF(s,n,r))}),t},zp=({alleAndeler:e,opptjeningsår:n,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const s=!e||e.length<1,i=A.useMemo(()=>s?void 0:SF(e,n),[e,n]),l=A.useMemo(()=>i?PF(i,t,r):[],[i]);return s?null:a.jsxs(a.Fragment,{children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:n}})}),a.jsxs(j,{children:[a.jsx(j.Header,{children:a.jsxs(j.Row,{children:[a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.AndelNavn"})}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.GrunnlagRefusjon"})}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.GrunnlagSøker"})})]})}),a.jsx(j.Body,{children:l.map(o=>a.jsxs(j.Row,{children:[a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:o.visningsnavn})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:o.utbetaltIRefusjon})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:o.utbetaltTilSøker})})]},o.identifikator))})]})]})};zp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrAar",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const BF=e=>{const n=e.map(r=>r.opptjeningsår).sort((r,t)=>r-t);return[...new Set(n)]},FF=()=>a.jsx(se,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.Feriepenger.Tittel"})}),Jp=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:s})=>{const{andeler:i}=e,l=!i||i.length<1,o=A.useMemo(()=>l?[]:BF(i),[i]);return l?null:a.jsx(qe,{children:a.jsxs(qe.Item,{open:t,children:[a.jsx(qe.Header,{onClick:s,children:FF()}),a.jsx(qe.Content,{children:o.map(g=>a.jsxs("div",{children:[a.jsx(x,{sixteenPx:!0},`spacer_${g}`),a.jsx(zp,{alleAndeler:i,opptjeningsår:g,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r},`tabell_${g}`)]},`div_${g}`))})]})})};Jp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},erPanelÅpent:{required:!0,tsType:{name:"boolean"},description:""},togglePanel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Wp=({feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r})=>{const[t,s]=A.useState(!1);return a.jsx(Jp,{feriepengegrunnlag:e,alleKodeverk:n,arbeidsgiverOpplysningerPerId:r,erPanelÅpent:t,togglePanel:()=>s(!t)})};Wp.__docgenInfo={description:"",methods:[],displayName:"FeriepengerIndex",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const _F="_detailsPeriode_1r02x_1",OF="_margin_1r02x_9",ci={detailsPeriode:_F,margin:OF},DF={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},wF=e=>e?`...${e.substring(e.length-4,e.length)}`:"",VF=(e,n,r)=>{const t=r[e.arbeidsgiverReferanse];return t!=null&&t.navn?t.erPrivatPerson?`${t.navn} (${t.fødselsdato})`:`${t.navn} (${t.identifikator})${wF(e.eksternArbeidsforholdId)}`:e.arbeidsforholdType?n(e.arbeidsforholdType,gn.OPPTJENING_AKTIVITET_TYPE):""},MF=(e,n,r)=>{switch(e.aktivitetStatus){case On.ARBEIDSTAKER:return VF(e,n,r);case On.FRILANSER:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Frilans"});case On.SELVSTENDIG_NAERINGSDRIVENDE:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case On.DAGPENGER:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case On.ARBEIDSAVKLARINGSPENGER:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.AAP"});case On.MILITAER_ELLER_SIVIL:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Militaer"});case On.BRUKERS_ANDEL:return a.jsx(k,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},GF=e=>{if(e===void 0)return null;const n=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return a.jsx(k,{id:n})},Zp=({selectedItemData:e,callbackForward:n,callbackBackward:r,alleKodeverk:t,isSoknadSvangerskapspenger:s,arbeidsgiverOpplysningerPerId:i,lukkPeriode:l})=>{const o=pv(e.fom,e.tom),g=W(),m=Ou(t),p=A.useCallback((...y)=>a.jsx("b",{children:y}),[]);return a.jsx(vv,{borderWidth:"1",padding:"4",children:a.jsxs(Q,{gap:"4",children:[a.jsxs(C,{justify:"space-between",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Detaljer"})}),a.jsxs(C,{gap:"2",align:"center",children:[a.jsx(ae,{className:ci.margin,size:"xsmall",icon:a.jsx(vs,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.prevPeriod"}),children:a.jsx(k,{id:"Timeline.prevPeriodShort"})}),a.jsx(ae,{className:ci.margin,size:"xsmall",icon:a.jsx(ys,{"aria-hidden":!0}),onClick:n,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:a.jsx(k,{id:"Timeline.nextPeriodShort"})}),a.jsx(ae,{size:"xsmall",icon:a.jsx(Xn,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),a.jsx("div",{className:ci.detailsPeriode,children:a.jsxs(Q,{gap:"2",children:[a.jsxs(C,{justify:"space-between",children:[a.jsx(F,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:I(e.fom).format(te).toString(),tomVerdi:I(e.tom).format(te).toString()}})}),a.jsx(T,{size:"small",children:o.formattedString})]}),a.jsx(C,{gap:"2",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:p}})})]})}),e.andeler&&e.andeler.length!==0&&a.jsxs(j,{children:[a.jsx(j.Header,{children:a.jsxs(j.Row,{children:[a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Andel"})}),!s&&a.jsxs(a.Fragment,{children:[a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.KontoType"})}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Gradering"})})]}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Utbetalingsgrad"})}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.Refusjon"})}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.TilSoker"})}),a.jsx(j.HeaderCell,{scope:"col",children:a.jsx(k,{id:"TilkjentYtelse.PeriodeData.SisteUtbDato"})})]})}),a.jsx(j.Body,{children:e.andeler.map((y,f)=>a.jsxs(j.Row,{children:[a.jsx(j.DataCell,{children:MF(y,m,i)}),!s&&a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:DF[y.uttak.stonadskontoType]})}),!s&&a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:GF(y)})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:y.utbetalingsgrad?y.utbetalingsgrad:""})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:y.aktivitetStatus===On.ARBEIDSTAKER&&y.refusjon?y.refusjon:""})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:y.tilSoker?y.tilSoker:""})}),a.jsx(j.DataCell,{children:a.jsx(T,{size:"small",children:y.sisteUtbetalingsdato?I(y.sisteUtbetalingsdato).format(te):""})})]},`index${f+1}`))})]})]})})};Zp.__docgenInfo={description:`TimeLineData

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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const LF="_space_ckypy_1",KF="_margin_ckypy_5",$F="_readOnlyBlokk_ckypy_9",yr={space:LF,margin:KF,readOnlyBlokk:$F},UF=e=>(e.andeler||[]).filter(r=>r.uttak&&r.uttak.gradering===!0).length>0,YF=e=>{const n=e.gjeldende||e.oppgitt;return n.soknadType===Nv.FODSEL?n.avklartBarn&&n.avklartBarn.length>0?{dato:n.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:n.termindato,textId:"TilkjentYtelse.Termindato"}:n.omsorgsovertakelseDato?{dato:n.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:n.adopsjonFodelsedatoer?n.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},HF=(e=[])=>e.filter(n=>{var r;return((r=n.andeler)==null?void 0:r[0])&&n.dagsats}).map((n,r)=>({erGradert:UF(n),start:I(n.fom).toDate(),end:I(n.tom).add(1,"days").toDate(),id:r,periode:n})),CF=(e,n)=>{var t;return((t=n[gn.RELASJONSROLLE_TYPE].find(s=>s.kode===e.relasjonsRolleType))==null?void 0:t.navn)||""},zF=(e,n)=>{const r=I(e);return r.isBefore(n)?n.subtract(5,"days"):r},Xp=({beregningsresultatPeriode:e,soknadDate:n,familieHendelseSamling:r,hovedsokerKjonnKode:t,alleKodeverk:s,arbeidsgiverOpplysningerPerId:i,fagsak:l})=>{const o=W(),[g,m]=A.useState(),p=A.useMemo(()=>HF(e),[e]),y=A.useCallback(()=>{m(null)},[]),f=A.useCallback(()=>{const O=p.findIndex(L=>L.id===(g==null?void 0:g.id))+1;O<p.length&&m(p[O])},[p,g,m]),b=A.useCallback(()=>{const O=p.findIndex(L=>L.id===(g==null?void 0:g.id))-1;O>=0&&m(p[O])},[p,g,m]),c=A.useCallback(O=>{m(p.find(L=>L.id===O))},[m,p]),N=I(p[0].start),h=I(p[p.length-1].end),[E,R]=A.useState(N),[S,q]=A.useState(h),B=()=>{E.subtract(1,"month").isBefore(N)||(R(E.subtract(1,"month")),q(S.subtract(1,"month")))},w=()=>{S.add(1,"month").isAfter(h)||(R(E.add(1,"month")),q(S.add(1,"month")))},_=()=>{E.add(3,"month").isAfter(S)||(R(E.add(1,"month")),q(S.subtract(1,"month")))},H=()=>{S.add(1,"month").diff(E.subtract(1,"month"),"months")<36&&(R(E.subtract(1,"month")),q(S.add(1,"month")))},z=A.useMemo(()=>YF(r),[r]);return a.jsxs("div",{children:[a.jsxs(we,{startDate:E.toDate(),endDate:S.add(1,"days").toDate(),children:[a.jsxs(we.Pin,{date:I(n).toDate(),children:[a.jsx(T,{children:a.jsx(k,{id:"TilkjentYtelse.Soknadsdato"})}),a.jsx(T,{children:a.jsx(Ae,{dateString:n})})]}),z.dato&&a.jsxs(we.Pin,{date:zF(z.dato,E).toDate(),children:[a.jsx(T,{children:a.jsx(k,{id:z.textId})}),a.jsx(T,{children:a.jsx(Ae,{dateString:z.dato})})]}),a.jsx(we.Row,{label:CF(l,s),icon:t===Kv.KVINNE?a.jsx(Iv,{width:20,height:20,color:"var(--a-red-200)"}):a.jsx(Tv,{width:20,height:20,color:"var(--a-blue-600)"}),children:p.map(O=>a.jsx(we.Period,{start:O.start,end:O.end,status:"success",onSelectPeriod:()=>c(O.id),isActive:(g==null?void 0:g.id)===O.id,icon:O.erGradert?a.jsx(ry,{"aria-hidden":!0}):a.jsx(el,{"aria-hidden":!0}),title:O.erGradert?o.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},O.id))})]}),a.jsx(x,{twentyPx:!0}),a.jsxs(hr,{children:[a.jsx(ae,{className:yr.margin,size:"small",icon:a.jsx(Dv,{"aria-hidden":!0}),onClick:_,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),a.jsx(ae,{className:yr.margin,size:"small",icon:a.jsx(Pv,{"aria-hidden":!0}),onClick:H,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),a.jsx(ae,{className:yr.margin,size:"small",icon:a.jsx(vs,{"aria-hidden":!0}),onClick:B,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),a.jsx(ae,{className:yr.margin,size:"small",icon:a.jsx(ys,{"aria-hidden":!0}),onClick:w,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),a.jsx("div",{className:yr.space}),g&&a.jsxs(a.Fragment,{children:[a.jsx(x,{eightPx:!0}),a.jsx(Zp,{alleKodeverk:s,selectedItemData:g.periode,callbackForward:f,callbackBackward:b,isSoknadSvangerskapspenger:l.fagsakYtelseType===tv.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:i,lukkPeriode:y})]})]})};Xp.__docgenInfo={description:`TilkjentYtelse

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
}>`},description:""}}};const JF=e=>{var n;return e?(n=e.find(r=>r.definisjon===de.VURDER_TILBAKETREKK))==null?void 0:n.begrunnelse:void 0},Qp=({beregningresultat:e,arbeidsgiverOpplysningerPerId:n,feriepengegrunnlag:r,familiehendelse:t,personoversikt:s,soknad:i})=>{var y,f;const{alleKodeverk:l,fagsak:o,aksjonspunkterForPanel:g}=En(),m=JF(g),p=(y=i.søknadsfrist)!=null&&y.mottattDato?(f=i.søknadsfrist)==null?void 0:f.mottattDato:i.mottattDato;return a.jsxs(Q,{gap:"4",children:[a.jsx(se,{size:"small",children:a.jsx(k,{id:"TilkjentYtelse.Title"})}),e&&a.jsx(Xp,{beregningsresultatPeriode:e.perioder,soknadDate:p,familieHendelseSamling:t,hovedsokerKjonnKode:s!=null&&s.bruker?s.bruker.kjønn:void 0,alleKodeverk:l,arbeidsgiverOpplysningerPerId:n,fagsak:o}),r&&a.jsx(Wp,{feriepengegrunnlag:r,arbeidsgiverOpplysningerPerId:n,alleKodeverk:l}),m&&a.jsxs(Q,{gap:"2",children:[a.jsx(F,{children:a.jsx(k,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),a.jsxs(T,{className:yr.readOnlyBlokk,children:[m," ",a.jsx(it,{})]})]})]})};Qp.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const WF={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},ZF=Ke(WF),XF=e=>a.jsx(Ge,{value:ZF,children:a.jsx(Qp,{...e})});XF.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{Nf as A,XB as B,eF as F,ZE as I,NF as O,iS as P,sy as S,XF as T,kF as a,Mf as b,RN as c,EA as d,OE as e,ry as f,Wv as g};
