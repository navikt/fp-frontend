import{r as b,u as le,_ as z,s as Z,c as se,a as y,R as v,b as Q,S as X,d as ie,j as l,P as de,e as ge,w as oe}from"./iframe-bPZmCPaR.js";import"./preload-helper-PPVm8Dsz.js";function ue(e,a){var t=e.values,n=z(e,["values"]),r=a.values,i=z(a,["values"]);return Z(r,t)&&Z(n,i)}function ee(e){var a=le(),t=a.formatMessage,n=a.textComponent,r=n===void 0?b.Fragment:n,i=e.id,s=e.description,d=e.defaultMessage,u=e.values,g=e.children,m=e.tagName,E=m===void 0?r:m,_=e.ignoreTag,N={id:i,description:s,defaultMessage:d},O=t(N,u,{ignoreTag:_});return typeof g=="function"?g(Array.isArray(O)?O:[O]):E?b.createElement(E,null,O):b.createElement(b.Fragment,null,O)}ee.displayName="FormattedMessage";var c=b.memo(ee,ue);c.displayName="MemoizedFormattedMessage";const S=e=>se({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var me=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};b.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:i,truncate:s,weight:d="regular",align:u,visuallyHidden:g,textColor:m}=e,E=me(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=y();return v.createElement(r,Object.assign({},E,{ref:a,className:_(t,"navds-body-long",`navds-body-long--${n}`,S({spacing:i,truncate:s,weight:d,align:u,visuallyHidden:g,textColor:m}))}))});var ce=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const p=b.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:i,truncate:s,weight:d="regular",align:u,visuallyHidden:g,textColor:m}=e,E=ce(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=y();return v.createElement(r,Object.assign({},E,{ref:a,className:_(t,"navds-body-short",`navds-body-short--${n}`,S({spacing:i,truncate:s,weight:d,align:u,visuallyHidden:g,textColor:m}))}))});var Ee=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};b.forwardRef((e,a)=>{var{className:t,size:n="medium",spacing:r,uppercase:i,as:s="p",truncate:d,weight:u="regular",align:g,visuallyHidden:m,textColor:E}=e,_=Ee(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:N}=y();return v.createElement(s,Object.assign({},_,{ref:a,className:N(t,"navds-detail",S({spacing:r,truncate:d,weight:u,align:g,visuallyHidden:m,textColor:E,uppercase:i}),{"navds-detail--small":n==="small"})}))});var ke=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};b.forwardRef((e,a)=>{var{children:t,className:n,size:r,spacing:i,as:s="p",showIcon:d=!1}=e,u=ke(e,["children","className","size","spacing","as","showIcon"]);const{cn:g}=y();return v.createElement(s,Object.assign({},u,{ref:a,className:g("navds-error-message","navds-label",n,S({spacing:i}),{"navds-label--small":r==="small","navds-error-message--show-icon":d})}),d&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var _e=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const w=b.forwardRef((e,a)=>{var{level:t="1",size:n,className:r,as:i,spacing:s,align:d,visuallyHidden:u,textColor:g}=e,m=_e(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:E}=y(),_=i??`h${t}`;return v.createElement(_,Object.assign({},m,{ref:a,className:E(r,"navds-heading",`navds-heading--${n}`,S({spacing:s,align:d,visuallyHidden:u,textColor:g}))}))});var be=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};b.forwardRef((e,a)=>{var{className:t,spacing:n,as:r="p"}=e,i=be(e,["className","spacing","as"]);const{cn:s}=y();return v.createElement(r,Object.assign({},i,{ref:a,className:s(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const h=b.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="label",spacing:i,visuallyHidden:s,textColor:d}=e,u=ve(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:g}=y();return v.createElement(r,Object.assign({},u,{ref:a,className:g(t,"navds-label",S({spacing:i,visuallyHidden:s,textColor:d}),{"navds-label--small":n==="small"})}))});function Oe(e,a){const t=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(t)}v.useId;function k(e,a,t,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,i])=>[`--__${e}c-${a}-${t}-${r}`,i])):{}}const fe={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},W=(e,a,t,n,r,i)=>a.split(" ").map((s,d,u)=>{var g;if(e==="margin-inline"&&s==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&s==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&s==="auto")return"auto";let m=`var(--${i}-${t}-${s})`;if(n.includes(s))m=s==="px"?"1px":s;else if(s.startsWith("space"))m=`var(--${i}-${s})`;else{const E=`--${i}-spacing-${s}`;m=`var(${(g=fe[E])!==null&&g!==void 0?g:E})`}return r?s==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function f(e,a,t,n,r,i=!1,s=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${a}-${t}-xs`]:W(t,r,n,s,i,e)};const d={};return Object.entries(r).forEach(([u,g])=>{d[`--__${e}c-${a}-${t}-${u}`]=W(t,g,n,s,i,e)}),d}const Ne=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],ye=({children:e,className:a,padding:t,paddingInline:n,paddingBlock:r,margin:i,marginInline:s,marginBlock:d,width:u,minWidth:g,maxWidth:m,height:E,minHeight:_,maxHeight:N,position:O,inset:j,top:K,right:V,left:U,bottom:H,overflow:J,overflowX:q,overflowY:F,flexBasis:Y,flexGrow:C,flexShrink:$,gridColumn:B})=>{const G=Q(!1),{cn:ae}=y(),o=G?.isDarkside?"ax":"a",te=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},f(o,"r","p","spacing",t)),f(o,"r","pi","spacing",n)),f(o,"r","pb","spacing",r)),f(o,"r","m","spacing",i)),f(o,"r","mi","spacing",s)),f(o,"r","mb","spacing",d)),k(o,"r","w",u)),k(o,"r","minw",g)),k(o,"r","maxw",m)),k(o,"r","h",E)),k(o,"r","minh",_)),k(o,"r","maxh",N)),k(o,"r","position",O)),f(o,"r","inset","spacing",j)),f(o,"r","top","spacing",K)),f(o,"r","right","spacing",V)),f(o,"r","bottom","spacing",H)),f(o,"r","left","spacing",U)),k(o,"r","overflow",J)),k(o,"r","overflowx",q)),k(o,"r","overflowy",F)),k(o,"r","flex-basis",Y)),k(o,"r","flex-grow",C)),k(o,"r","flex-shrink",$)),k(o,"r","grid-column",B));return v.createElement(X,{className:ae({className:a,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":i,"navds-r-mi":s,"navds-r-mb":d,"navds-r-w":u,"navds-r-minw":g,"navds-r-maxw":m,"navds-r-h":E,"navds-r-minh":_,"navds-r-maxh":N,"navds-r-position":O,"navds-r-inset":j,"navds-r-top":K,"navds-r-right":V,"navds-r-bottom":H,"navds-r-left":U,"navds-r-overflow":J,"navds-r-overflowx":q,"navds-r-overflowy":F,"navds-r-flex-basis":Y,"navds-r-flex-grow":C,"navds-r-flex-shrink":$,"navds-r-grid-column":B}),style:te},e)};var Ae=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const ne=b.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",align:i,justify:s,wrap:d=!0,gap:u,style:g,direction:m="row",asChild:E}=e,_=Ae(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const N=Q(!1),O=N?.isDarkside?"ax":"a",{cn:j}=y(),K=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g),f(O,"stack","gap","spacing",u)),k(O,"stack","direction",m)),k(O,"stack","align",i)),k(O,"stack","justify",s)),V=E?X:r;return v.createElement(ye,Object.assign({},_),v.createElement(V,Object.assign({},Oe(_,Ne),{ref:a,style:K,className:j("navds-stack",n,{"navds-vstack":m==="column","navds-hstack":m==="row","navds-stack-gap":u,"navds-stack-align":i,"navds-stack-justify":s,"navds-stack-direction":m,"navds-stack-wrap":d})}),t))});var pe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};b.forwardRef((e,a)=>{var{as:t="div"}=e,n=pe(e,["as"]);return v.createElement(ne,Object.assign({as:t},n,{ref:a,direction:"row"}))});var Se=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const A=b.forwardRef((e,a)=>{var{as:t="div"}=e,n=Se(e,["as"]);return v.createElement(ne,Object.assign({as:t},n,{ref:a,direction:"column",wrap:!1}))}),re=({ankeVurdering:e})=>{const a=e?.ankeVurderingResultat,t=e?.underBehandlingKabal||!1,n=e?.underBehandlingKabalTrygderett||!1,r=e?.behandletAvKabal||!1,{alleKodeverk:i}=ie(),s=i.AnkeOmgjørÅrsak;return l.jsxs(A,{gap:"space-16",children:[l.jsx(w,{size:"small",level:"2",children:l.jsx(c,{id:"Ankebehandling.Merknad.Title"})}),t&&l.jsx(w,{size:"small",level:"3",children:l.jsx(c,{id:"Ankebehandling.Merknad.SeKabalText"})}),r&&l.jsx(w,{size:"small",level:"3",children:l.jsx(c,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!t&&!n&&l.jsxs(l.Fragment,{children:[l.jsxs(A,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(c,{id:"Ankebehandling.Merknad.Merknader"})}),l.jsx(p,{size:"small",children:a?.erMerknaderMottatt?l.jsx(c,{id:"Ankebehandling.Merknad.Merknader.Ja"}):l.jsx(c,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),l.jsxs(A,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(c,{id:"Ankebehandling.Fritekst"})}),l.jsx(p,{size:"small",children:a?.merknadKommentar})]}),l.jsxs(A,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(c,{id:"Ankebehandling.Resultat"})}),l.jsxs(p,{size:"small",children:[a?.trygderettVurdering==="ANKE_OMGJOER"&&l.jsx(c,{id:"Ankebehandling.Resultat.Omgjør"}),a?.trygderettVurdering==="ANKE_OPPHEVE_OG_HJEMSENDE"&&l.jsx(c,{id:"Ankebehandling.Resultat.Opphev"}),a?.trygderettVurdering==="ANKE_HJEMSENDE_UTEN_OPPHEV"&&l.jsx(c,{id:"Ankebehandling.Resultat.Hjemsend"}),a?.trygderettVurdering==="ANKE_AVVIS"&&l.jsx(c,{id:"Ankebehandling.Resultat.Avvis"}),a?.trygderettVurdering==="ANKE_STADFESTE_YTELSESVEDTAK"&&l.jsx(c,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),a?.trygderettVurdering==="ANKE_OMGJOER"&&l.jsxs(l.Fragment,{children:[l.jsxs(A,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(c,{id:"Ankebehandling.OmgjoeringArsak"})}),l.jsx(p,{size:"small",children:s.find(d=>d.kode===a.trygderettOmgjoerArsak)?.navn})]}),l.jsx(A,{gap:"space-4",children:l.jsxs(p,{size:"small",children:[a.trygderettVurderingOmgjoer==="ANKE_TIL_GUNST"&&l.jsx(c,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),a.trygderettVurderingOmgjoer==="ANKE_TIL_UGUNST"&&l.jsx(c,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),a.trygderettVurderingOmgjoer==="ANKE_DELVIS_OMGJOERING_TIL_GUNST"&&l.jsx(c,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(a?.trygderettVurdering==="ANKE_OPPHEVE_OG_HJEMSENDE"||a?.trygderettVurdering==="ANKE_HJEMSENDE_UTEN_OPPHEV")&&!r&&l.jsxs(A,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(c,{id:"Ankebehandling.OmgjoeringArsak"})}),l.jsx(p,{size:"small",children:s.find(d=>d.kode===a.trygderettOmgjoerArsak)?.navn})]})]})};re.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: tjenester_behandling_anke_AnkeVurderingResultatDto;
  behandletAvKabal?: boolean;
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeOmgjoerArsak?: foreldrepenger_behandlingslager_behandling_anke_AnkeOmgjørÅrsak;
  ankeVurdering?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurdering;
  ankeVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurderingOmgjør;
  begrunnelse: string;
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erMerknaderMottatt?: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  påAnketKlageBehandlingUuid?: string;
  sendtTilTrygderettenDato?: string;
  trygderettOmgjoerArsak?: foreldrepenger_behandlingslager_behandling_anke_AnkeOmgjørÅrsak;
  trygderettVurdering?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurdering;
  trygderettVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurderingOmgjør;
}`,signature:{properties:[{key:"ankeOmgjoerArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:`| 'ANKE_TIL_GUNST'
| 'ANKE_DELVIS_OMGJOERING_TIL_GUNST'
| 'ANKE_TIL_UGUNST'
| '-'`,elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:`| 'ANKE_TIL_GUNST'
| 'ANKE_DELVIS_OMGJOERING_TIL_GUNST'
| 'ANKE_TIL_UGUNST'
| '-'`,elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!1}}]},required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}}]}},description:""}}};const he={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},je=ge(he),D=({ankeVurdering:e})=>l.jsx(de,{value:je,children:l.jsx(re,{ankeVurdering:e})});D.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ankeVurderingResultat?: tjenester_behandling_anke_AnkeVurderingResultatDto;
  behandletAvKabal?: boolean;
  underBehandlingKabal?: boolean;
  underBehandlingKabalTrygderett?: boolean;
}`,signature:{properties:[{key:"ankeVurderingResultat",value:{name:"signature",type:"object",raw:`{
  ankeOmgjoerArsak?: foreldrepenger_behandlingslager_behandling_anke_AnkeOmgjørÅrsak;
  ankeVurdering?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurdering;
  ankeVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurderingOmgjør;
  begrunnelse: string;
  erAnkerIkkePart: boolean;
  erFristIkkeOverholdt: boolean;
  erIkkeKonkret: boolean;
  erIkkeSignert: boolean;
  erMerknaderMottatt?: boolean;
  erSubsidiartRealitetsbehandles: boolean;
  fritekstTilBrev?: string;
  merknadKommentar?: string;
  påAnketKlageBehandlingUuid?: string;
  sendtTilTrygderettenDato?: string;
  trygderettOmgjoerArsak?: foreldrepenger_behandlingslager_behandling_anke_AnkeOmgjørÅrsak;
  trygderettVurdering?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurdering;
  trygderettVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_anke_AnkeVurderingOmgjør;
}`,signature:{properties:[{key:"ankeOmgjoerArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"ankeVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!1}},{key:"ankeVurderingOmgjoer",value:{name:"union",raw:`| 'ANKE_TIL_GUNST'
| 'ANKE_DELVIS_OMGJOERING_TIL_GUNST'
| 'ANKE_TIL_UGUNST'
| '-'`,elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erAnkerIkkePart",value:{name:"boolean",required:!0}},{key:"erFristIkkeOverholdt",value:{name:"boolean",required:!0}},{key:"erIkkeKonkret",value:{name:"boolean",required:!0}},{key:"erIkkeSignert",value:{name:"boolean",required:!0}},{key:"erMerknaderMottatt",value:{name:"boolean",required:!1}},{key:"erSubsidiartRealitetsbehandles",value:{name:"boolean",required:!0}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"merknadKommentar",value:{name:"string",required:!1}},{key:"påAnketKlageBehandlingUuid",value:{name:"string",required:!1}},{key:"sendtTilTrygderettenDato",value:{name:"string",required:!1}},{key:"trygderettOmgjoerArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"trygderettVurdering",value:{name:"union",raw:`| 'ANKE_STADFESTE_YTELSESVEDTAK'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_OMGJOER'
| 'ANKE_AVVIS'
| '-'`,elements:[{name:"literal",value:"'ANKE_STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_OMGJOER'"},{name:"literal",value:"'ANKE_AVVIS'"},{name:"literal",value:"'-'"}],required:!1}},{key:"trygderettVurderingOmgjoer",value:{name:"union",raw:`| 'ANKE_TIL_GUNST'
| 'ANKE_DELVIS_OMGJOERING_TIL_GUNST'
| 'ANKE_TIL_UGUNST'
| '-'`,elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!1}}]},required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}}]}},description:""}}};const Te={title:"prosess/anke/prosess-anke-trygderettsbehandling",component:D,decorators:[oe],render:e=>l.jsx(D,{...e})},T={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:"ANKE_OMGJOER",trygderettOmgjoerArsak:"NYE_OPPLYSNINGER",trygderettVurderingOmgjoer:"ANKE_TIL_GUNST"}}}},I={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:"ANKE_OPPHEVE_OG_HJEMSENDE",trygderettOmgjoerArsak:"NYE_OPPLYSNINGER"}}}},R={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:"ANKE_HJEMSENDE_UTEN_OPPHEV",trygderettOmgjoerArsak:"NYE_OPPLYSNINGER"}}}},x={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:"ANKE_AVVIS"}}}},L={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:"ANKE_STADFESTE_YTELSESVEDTAK"}}}},P={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:"ANKE_STADFESTE_YTELSESVEDTAK"},behandletAvKabal:!0}}},M={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:"ANKE_STADFESTE_YTELSESVEDTAK"},underBehandlingKabal:!0}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: 'ANKE_OMGJOER',
        trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER',
        trygderettVurderingOmgjoer: 'ANKE_TIL_GUNST'
      }
    } as AnkeVurdering
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: 'ANKE_OPPHEVE_OG_HJEMSENDE',
        trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER'
      }
    } as AnkeVurdering
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: 'ANKE_HJEMSENDE_UTEN_OPPHEV',
        trygderettOmgjoerArsak: 'NYE_OPPLYSNINGER'
      }
    } as AnkeVurdering
  }
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: 'ANKE_AVVIS'
      }
    } as AnkeVurdering
  }
}`,...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK'
      }
    } as AnkeVurdering
  }
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK'
      },
      behandletAvKabal: true
    } as AnkeVurdering
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: 'ANKE_STADFESTE_YTELSESVEDTAK'
      },
      underBehandlingKabal: true
    } as AnkeVurdering
  }
}`,...M.parameters?.docs?.source}}};const Ie=["ResultatVedOmgjortResultat","ResultatVedOpphevetResultat","ResultatVedHjemsendtResultat","ResultatVedAvvistResultat","ResultatVedStadfestetResultat","ErBehandletIKabel","ErUnderBehandlingIKabel"];export{P as ErBehandletIKabel,M as ErUnderBehandlingIKabel,x as ResultatVedAvvistResultat,R as ResultatVedHjemsendtResultat,T as ResultatVedOmgjortResultat,I as ResultatVedOpphevetResultat,L as ResultatVedStadfestetResultat,Ie as __namedExportsOrder,Te as default};
