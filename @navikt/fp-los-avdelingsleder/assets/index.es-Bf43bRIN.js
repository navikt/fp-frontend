import{r as f}from"./index-mMUbb89k.js";import{i as k,r as g}from"./nb_NO-CVVmh4cd.js";import{u as _,L as w}from"./Modal-BzlnuVxp.js";var j=function(r,o){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&o.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(r);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(r,n[a])&&(t[n[a]]=r[n[a]]);return t};const C=f.forwardRef((r,o)=>{var{title:t,titleId:n}=r,a=j(r,["title","titleId"]);let e=_();return e=t?n||"title-"+e:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:o,"aria-labelledby":e},a),t?f.createElement("title",{id:e},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});function O(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var c={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b;function M(){if(b)return s;b=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function t(n,a,e){var i=null;if(e!==void 0&&(i=""+e),a.key!==void 0&&(i=""+a.key),"key"in a){e={};for(var d in a)d!=="key"&&(e[d]=a[d])}else e=a;return a=e.ref,{$$typeof:r,type:n,key:i,ref:a!==void 0?a:null,props:e}}return s.Fragment=o,s.jsx=t,s.jsxs=t,s}var v;function A(){return v||(v=1,c.exports=M()),c.exports}var l=A();const h={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre"};g(h);const p="#B7B1A9",x=4,S=(r,o,t)=>`
  .arrowBoxTop${r} {
    background: #ffffff;
    border: 1px solid ${p};
    border-radius: ${x}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${r}:before {
    background-color: #ffffff;
    border: 1px solid ${p};
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
`,$=(r,o,t)=>`
  .arrowBoxLeft${r} {
    background: #ffffff;
    border: 1px solid ${p};
    border-radius: ${x}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${r}:before {
    background-color: #ffffff;
    border: 1px solid ${p};
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
`,B=(r,o,t,n)=>o?$(r,t,n):S(r,t,n),P=(r,o,t)=>t?"":o?`arrowBoxLeft${r}`:`arrowBoxTop${r}`,W=({children:r,alignOffset:o=0,alignLeft:t=!1,marginTop:n=0,marginLeft:a=0,hideBorder:e=!1})=>l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:B(o,t,n,a)}}),l.jsx("div",{className:P(o,t,e),children:r})]});var y={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var m;function D(){return m||(m=1,function(r){(function(){var o={}.hasOwnProperty;function t(){for(var e="",i=0;i<arguments.length;i++){var d=arguments[i];d&&(e=a(e,n.call(this,d)))}return e}function n(e){if(typeof e=="string"||typeof e=="number")return this&&this[e]||e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var i="";for(var d in e)o.call(e,d)&&e[d]&&(i=a(i,this&&this[d]||d));return i}function a(e,i){return i?e?e+" "+i:e+i:e}r.exports?(t.default=t,r.exports=t):window.classNames=t})()}(y)),y.exports}var L=D();const u=O(L),T="_borderbox_1vkvn_1",I="_error_1vkvn_5",E="_warning_1vkvn_8",F={borderbox:T,error:I,warning:E};u.bind(F);const G="_aksjonspunkt_kn1hn_1",R="_erAksjonspunktApent_kn1hn_4",H="_erIkkeGodkjentAvBeslutter_kn1hn_8",J={aksjonspunkt:G,erAksjonspunktApent:R,erIkkeGodkjentAvBeslutter:H};u.bind(J);const rr=({dateString:r,year:o,month:t,day:n})=>l.jsx(l.Fragment,{children:k(r,{year:o,month:t,day:n})}),K="_container_dr0yo_1",N={container:K},er=()=>l.jsx("div",{className:N.container,children:l.jsx(w,{size:"2xlarge"})});g(h);g(h);const V="_divider_1t980_1",X="_dividerParagraf_1t980_8",Z="_leftPanel_1t980_11",U="_rightPanel_1t980_14",Y={divider:V,dividerParagraf:X,leftPanel:Z,rightPanel:U};u.bind(Y);const tr=()=>l.jsx("span",{"data-testid":"editedIcon",children:l.jsx(C,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});g(h);export{W as G,rr as X,tr as i,er as r};
