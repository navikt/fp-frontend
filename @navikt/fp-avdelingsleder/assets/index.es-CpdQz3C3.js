import{r as k,R as u,U as _,V as p}from"./iframe-DLd_DBZs.js";import{u as j,L as w}from"./Modal-aWDwC7hB.js";var C=function(r,o){var t={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&o.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(r);n<a.length;n++)o.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(r,a[n])&&(t[a[n]]=r[a[n]]);return t};const O=k.forwardRef((r,o)=>{var{title:t,titleId:a}=r,n=C(r,["title","titleId"]);let e=j();return e=t?a||"title-"+e:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:o,"aria-labelledby":e},n),t?u.createElement("title",{id:e},t):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});function A(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var h={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function M(){if(c)return s;c=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function t(a,n,e){var i=null;if(e!==void 0&&(i=""+e),n.key!==void 0&&(i=""+n.key),"key"in n){e={};for(var l in n)l!=="key"&&(e[l]=n[l])}else e=n;return n=e.ref,{$$typeof:r,type:a,key:i,ref:n!==void 0?n:null,props:e}}return s.Fragment=o,s.jsx=t,s.jsxs=t,s}var v;function S(){return v||(v=1,h.exports=M()),h.exports}var d=S();const f={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};p(f);const g="var(--ax-bg-neutral-strong)",m=4,$=(r,o,t)=>`
  .arrowBoxTop${r} {
    background: var(--ax-bg-default);
    border: 1px solid ${g};
    border-radius: ${m}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${r}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${g};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${r}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,D=(r,o,t)=>`
  .arrowBoxLeft${r} {
    background: var(--ax-bg-default);
    border: 1px solid ${g};
    border-radius: ${m}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${r}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${g};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${r}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,P=(r,o,t,a)=>o?D(r,t,a):$(r,t,a),T=(r,o,t)=>t?"":o?`arrowBoxLeft${r}`:`arrowBoxTop${r}`,W=({children:r,alignOffset:o=0,alignLeft:t=!1,marginTop:a=0,marginLeft:n=0,hideBorder:e=!1})=>d.jsxs(d.Fragment,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:P(o,t,a,n)}}),d.jsx("div",{className:T(o,t,e),children:r})]});var x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var y;function B(){return y||(y=1,(function(r){(function(){var o={}.hasOwnProperty;function t(){for(var e="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(e=n(e,a.call(this,l)))}return e}function a(e){if(typeof e=="string"||typeof e=="number")return this&&this[e]||e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var i="";for(var l in e)o.call(e,l)&&e[l]&&(i=n(i,this&&this[l]||l));return i}function n(e,i){return i?e?e+" "+i:e+i:e}r.exports?(t.default=t,r.exports=t):window.classNames=t})()})(x)),x.exports}var L=B();const b=A(L),I="_borderbox_1a0x6_1",E="_error_1a0x6_5",F="_warning_1a0x6_8",K={borderbox:I,error:E,warning:F};b.bind(K);const H="_aksjonspunkt_11wjs_1",R="_erAksjonspunktApent_11wjs_4",G="_erIkkeGodkjentAvBeslutter_11wjs_8",J={aksjonspunkt:H,erAksjonspunktApent:R,erIkkeGodkjentAvBeslutter:G};b.bind(J);const rr=({dateString:r,year:o,month:t,day:a})=>d.jsx(d.Fragment,{children:_(r,{year:o,month:t,day:a})}),N="_container_dr0yo_1",V={container:N},er=()=>d.jsx("div",{className:V.container,children:d.jsx(w,{size:"2xlarge"})});p(f);p(f);const Q="_divider_1jpov_1",U="_dividerParagraf_1jpov_8",Z="_leftPanel_1jpov_11",Y="_rightPanel_1jpov_14",q={divider:Q,dividerParagraf:U,leftPanel:Z,rightPanel:Y};b.bind(q);const tr=()=>d.jsx("span",{"data-testid":"editedIcon",children:d.jsx(O,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});p(f);p(f);export{rr as G,W as H,er as Q,tr as o};
