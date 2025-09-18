import"./iframe-C5MiiFGG.js";import{a as k,o as m,r as p}from"./index.es-DWjp6MuS.js";import{L as _}from"./Modal-DC8aCGhM.js";function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function w(){if(h)return s;h=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function t(d,o,r){var n=null;if(r!==void 0&&(n=""+r),o.key!==void 0&&(n=""+o.key),"key"in o){r={};for(var i in o)i!=="key"&&(r[i]=o[i])}else r=o;return o=r.ref,{$$typeof:e,type:d,key:n,ref:o!==void 0?o:null,props:r}}return s.Fragment=a,s.jsx=t,s.jsxs=t,s}var x;function C(){return x||(x=1,b.exports=w()),b.exports}var l=C();const g={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};p(g);const u="var(--ax-bg-neutral-strong)",y=4,M=(e,a,t)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${u};
    border-radius: ${y}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${t}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${u};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,A=(e,a,t)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${u};
    border-radius: ${y}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${a}px;
    margin-left: ${t}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
    border: 1px solid ${u};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,$=(e,a,t,d)=>a?A(e,t,d):M(e,t,d),S=(e,a,t)=>t?"":a?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,q=({children:e,alignOffset:a=0,alignLeft:t=!1,marginTop:d=0,marginLeft:o=0,hideBorder:r=!1})=>l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:$(a,t,d,o)}}),l.jsx("div",{className:S(a,t,r),children:e})]});var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var c;function D(){return c||(c=1,(function(e){(function(){var a={}.hasOwnProperty;function t(){for(var r="",n=0;n<arguments.length;n++){var i=arguments[n];i&&(r=o(r,d.call(this,i)))}return r}function d(r){if(typeof r=="string"||typeof r=="number")return this&&this[r]||r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(this,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var n="";for(var i in r)a.call(r,i)&&r[i]&&(n=o(n,this&&this[i]||i));return n}function o(r,n){return n?r?r+" "+n:r+n:r}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(v)),v.exports}var T=D();const f=j(T),O="_borderbox_1a0x6_1",B="_error_1a0x6_5",L="_warning_1a0x6_8",P={borderbox:O,error:B,warning:L};f.bind(P);const F="_aksjonspunkt_11wjs_1",K="_erAksjonspunktApent_11wjs_4",H="_erIkkeGodkjentAvBeslutter_11wjs_8",G={aksjonspunkt:F,erAksjonspunktApent:K,erIkkeGodkjentAvBeslutter:H};f.bind(G);const z=({dateString:e,year:a,month:t,day:d})=>l.jsx(l.Fragment,{children:m(e,{year:a,month:t,day:d})}),J="_container_dr0yo_1",N={container:J},X=()=>l.jsx("div",{className:N.container,children:l.jsx(_,{size:"2xlarge"})});p(g);p(g);const E="_divider_1jpov_1",I="_dividerParagraf_1jpov_8",V="_leftPanel_1jpov_11",Q="_rightPanel_1jpov_14",Z={divider:E,dividerParagraf:I,leftPanel:V,rightPanel:Q};f.bind(Z);const W=()=>l.jsx("span",{"data-testid":"editedIcon",children:l.jsx(k,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});p(g);p(g);export{z as G,q as H,X as Q,W as o};
