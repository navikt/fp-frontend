import{r as v,u as de,_ as Q,s as X,c as ge,a as S,R as b,b as ne,S as re,d as oe,j as l,P as ue,e as Ee,w as me}from"./iframe-x0YNREZ0.js";import"./preload-helper-PPVm8Dsz.js";function ce(e,a){var t=e.values,n=Q(e,["values"]),r=a.values,i=Q(a,["values"]);return X(r,t)&&X(n,i)}function ae(e){var a=de(),t=a.formatMessage,n=a.textComponent,r=n===void 0?v.Fragment:n,i=e.id,s=e.description,d=e.defaultMessage,u=e.values,g=e.children,E=e.tagName,c=E===void 0?r:E,O=e.ignoreTag,f={id:i,description:s,defaultMessage:d},N=t(f,u,{ignoreTag:O});return typeof g=="function"?g(Array.isArray(N)?N:[N]):c?v.createElement(c,null,N):v.createElement(v.Fragment,null,N)}ae.displayName="FormattedMessage";var m=v.memo(ae,ce);m.displayName="MemoizedFormattedMessage";var D=(e=>(e.NYE_OPPLYSNINGER="NYE_OPPLYSNINGER",e.ULIK_REGELVERKSTOLKNING="ULIK_REGELVERKSTOLKNING",e.ULIK_VURDERING="ULIK_VURDERING",e.PROSESSUELL_FEIL="PROSESSUELL_FEIL",e))(D||{}),k=(e=>(e.ANKE_AVVIS="ANKE_AVVIS",e.ANKE_STADFESTE_YTELSESVEDTAK="ANKE_STADFESTE_YTELSESVEDTAK",e.ANKE_OMGJOER="ANKE_OMGJOER",e.ANKE_OPPHEVE_OG_HJEMSENDE="ANKE_OPPHEVE_OG_HJEMSENDE",e.ANKE_HJEMSENDE_UTEN_OPPHEV="ANKE_HJEMSENDE_UTEN_OPPHEV",e))(k||{}),T=(e=>(e.ANKE_DELVIS_OMGJOERING_TIL_GUNST="ANKE_DELVIS_OMGJOERING_TIL_GUNST",e.ANKE_TIL_GUNST="ANKE_TIL_GUNST",e.ANKE_TIL_UGUNST="ANKE_TIL_UGUNST",e))(T||{});const K=e=>ge({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var _e=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};v.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:i,truncate:s,weight:d="regular",align:u,visuallyHidden:g,textColor:E}=e,c=_e(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:O}=S();return b.createElement(r,Object.assign({},c,{ref:a,className:O(t,"navds-body-long",`navds-body-long--${n}`,K({spacing:i,truncate:s,weight:d,align:u,visuallyHidden:g,textColor:E}))}))});var ke=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const p=v.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="p",spacing:i,truncate:s,weight:d="regular",align:u,visuallyHidden:g,textColor:E}=e,c=ke(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:O}=S();return b.createElement(r,Object.assign({},c,{ref:a,className:O(t,"navds-body-short",`navds-body-short--${n}`,K({spacing:i,truncate:s,weight:d,align:u,visuallyHidden:g,textColor:E}))}))});var Oe=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};v.forwardRef((e,a)=>{var{className:t,size:n="medium",spacing:r,uppercase:i,as:s="p",truncate:d,weight:u="regular",align:g,visuallyHidden:E,textColor:c}=e,O=Oe(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=S();return b.createElement(s,Object.assign({},O,{ref:a,className:f(t,"navds-detail",K({spacing:r,truncate:d,weight:u,align:g,visuallyHidden:E,textColor:c,uppercase:i}),{"navds-detail--small":n==="small"})}))});var ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};v.forwardRef((e,a)=>{var{children:t,className:n,size:r,spacing:i,as:s="p",showIcon:d=!1}=e,u=ve(e,["children","className","size","spacing","as","showIcon"]);const{cn:g}=S();return b.createElement(s,Object.assign({},u,{ref:a,className:g("navds-error-message","navds-label",n,K({spacing:i}),{"navds-label--small":r==="small","navds-error-message--show-icon":d})}),d&&b.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},b.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var be=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const H=v.forwardRef((e,a)=>{var{level:t="1",size:n,className:r,as:i,spacing:s,align:d,visuallyHidden:u,textColor:g}=e,E=be(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:c}=S(),O=i??`h${t}`;return b.createElement(O,Object.assign({},E,{ref:a,className:c(r,"navds-heading",`navds-heading--${n}`,K({spacing:s,align:d,visuallyHidden:u,textColor:g}))}))});var Ne=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};v.forwardRef((e,a)=>{var{className:t,spacing:n,as:r="p"}=e,i=Ne(e,["className","spacing","as"]);const{cn:s}=S();return b.createElement(r,Object.assign({},i,{ref:a,className:s(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ae=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const h=v.forwardRef((e,a)=>{var{className:t,size:n="medium",as:r="label",spacing:i,visuallyHidden:s,textColor:d}=e,u=Ae(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:g}=S();return b.createElement(r,Object.assign({},u,{ref:a,className:g(t,"navds-label",K({spacing:i,visuallyHidden:s,textColor:d}),{"navds-label--small":n==="small"})}))});function fe(e,a){const t=Object.entries(e).filter(([n])=>!a.includes(n));return Object.fromEntries(t)}b.useId;function _(e,a,t,n){return n?typeof n=="string"?{[`--__${e}c-${a}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([r,i])=>[`--__${e}c-${a}-${t}-${r}`,i])):{}}const Se={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ee=(e,a,t,n,r,i)=>a.split(" ").map((s,d,u)=>{var g;if(e==="margin-inline"&&s==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&s==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&s==="auto")return"auto";let E=`var(--${i}-${t}-${s})`;if(n.includes(s))E=s==="px"?"1px":s;else if(s.startsWith("space"))E=`var(--${i}-${s})`;else{const c=`--${i}-spacing-${s}`;E=`var(${(g=Se[c])!==null&&g!==void 0?g:c})`}return r?s==="0"?"0":`calc(-1 * ${E})`:E}).join(" ");function A(e,a,t,n,r,i=!1,s=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${a}-${t}-xs`]:ee(t,r,n,s,i,e)};const d={};return Object.entries(r).forEach(([u,g])=>{d[`--__${e}c-${a}-${t}-${u}`]=ee(t,g,n,s,i,e)}),d}const ye=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],pe=({children:e,className:a,padding:t,paddingInline:n,paddingBlock:r,margin:i,marginInline:s,marginBlock:d,width:u,minWidth:g,maxWidth:E,height:c,minHeight:O,maxHeight:f,position:N,inset:V,top:j,right:I,left:Y,bottom:F,overflow:q,overflowX:C,overflowY:$,flexBasis:B,flexGrow:z,flexShrink:Z,gridColumn:W})=>{const w=ne(!1),{cn:se}=S(),o=w?.isDarkside?"ax":"a",ie=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},A(o,"r","p","spacing",t)),A(o,"r","pi","spacing",n)),A(o,"r","pb","spacing",r)),A(o,"r","m","spacing",i)),A(o,"r","mi","spacing",s)),A(o,"r","mb","spacing",d)),_(o,"r","w",u)),_(o,"r","minw",g)),_(o,"r","maxw",E)),_(o,"r","h",c)),_(o,"r","minh",O)),_(o,"r","maxh",f)),_(o,"r","position",N)),A(o,"r","inset","spacing",V)),A(o,"r","top","spacing",j)),A(o,"r","right","spacing",I)),A(o,"r","bottom","spacing",F)),A(o,"r","left","spacing",Y)),_(o,"r","overflow",q)),_(o,"r","overflowx",C)),_(o,"r","overflowy",$)),_(o,"r","flex-basis",B)),_(o,"r","flex-grow",z)),_(o,"r","flex-shrink",Z)),_(o,"r","grid-column",W));return b.createElement(re,{className:se({className:a,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":r,"navds-r-m":i,"navds-r-mi":s,"navds-r-mb":d,"navds-r-w":u,"navds-r-minw":g,"navds-r-maxw":E,"navds-r-h":c,"navds-r-minh":O,"navds-r-maxh":f,"navds-r-position":N,"navds-r-inset":V,"navds-r-top":j,"navds-r-right":I,"navds-r-bottom":F,"navds-r-left":Y,"navds-r-overflow":q,"navds-r-overflowx":C,"navds-r-overflowy":$,"navds-r-flex-basis":B,"navds-r-flex-grow":z,"navds-r-flex-shrink":Z,"navds-r-grid-column":W}),style:ie},e)};var Ke=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const te=v.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",align:i,justify:s,wrap:d=!0,gap:u,style:g,direction:E="row",asChild:c}=e,O=Ke(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const f=ne(!1),N=f?.isDarkside?"ax":"a",{cn:V}=S(),j=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g),A(N,"stack","gap","spacing",u)),_(N,"stack","direction",E)),_(N,"stack","align",i)),_(N,"stack","justify",s)),I=c?re:r;return b.createElement(pe,Object.assign({},O),b.createElement(I,Object.assign({},fe(O,ye),{ref:a,style:j,className:V("navds-stack",n,{"navds-vstack":E==="column","navds-hstack":E==="row","navds-stack-gap":u,"navds-stack-align":i,"navds-stack-justify":s,"navds-stack-direction":E,"navds-stack-wrap":d})}),t))});var he=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};v.forwardRef((e,a)=>{var{as:t="div"}=e,n=he(e,["as"]);return b.createElement(te,Object.assign({as:t},n,{ref:a,direction:"row"}))});var Te=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const y=v.forwardRef((e,a)=>{var{as:t="div"}=e,n=Te(e,["as"]);return b.createElement(te,Object.assign({as:t},n,{ref:a,direction:"column",wrap:!1}))}),le=({ankeVurdering:e})=>{const a=e?.ankeVurderingResultat,t=e?.underBehandlingKabal||!1,n=e?.underBehandlingKabalTrygderett||!1,r=e?.behandletAvKabal||!1,{alleKodeverk:i}=oe(),s=i.AnkeOmgjørÅrsak;return l.jsxs(y,{gap:"space-16",children:[l.jsx(H,{size:"small",level:"2",children:l.jsx(m,{id:"Ankebehandling.Merknad.Title"})}),t&&l.jsx(H,{size:"small",level:"3",children:l.jsx(m,{id:"Ankebehandling.Merknad.SeKabalText"})}),r&&l.jsx(H,{size:"small",level:"3",children:l.jsx(m,{id:"Ankebehandling.Merknad.BehandletKabal"})}),!t&&!n&&l.jsxs(l.Fragment,{children:[l.jsxs(y,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(m,{id:"Ankebehandling.Merknad.Merknader"})}),l.jsx(p,{size:"small",children:a?.erMerknaderMottatt?l.jsx(m,{id:"Ankebehandling.Merknad.Merknader.Ja"}):l.jsx(m,{id:"Ankebehandling.Merknad.Merknader.Nei"})})]}),l.jsxs(y,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(m,{id:"Ankebehandling.Fritekst"})}),l.jsx(p,{size:"small",children:a?.merknadKommentar})]}),l.jsxs(y,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(m,{id:"Ankebehandling.Resultat"})}),l.jsxs(p,{size:"small",children:[a?.trygderettVurdering===k.ANKE_OMGJOER&&l.jsx(m,{id:"Ankebehandling.Resultat.Omgjør"}),a?.trygderettVurdering===k.ANKE_OPPHEVE_OG_HJEMSENDE&&l.jsx(m,{id:"Ankebehandling.Resultat.Opphev"}),a?.trygderettVurdering===k.ANKE_HJEMSENDE_UTEN_OPPHEV&&l.jsx(m,{id:"Ankebehandling.Resultat.Hjemsend"}),a?.trygderettVurdering===k.ANKE_AVVIS&&l.jsx(m,{id:"Ankebehandling.Resultat.Avvis"}),a?.trygderettVurdering===k.ANKE_STADFESTE_YTELSESVEDTAK&&l.jsx(m,{id:"Ankebehandling.Resultat.Stadfest"})]})]})]}),k.ANKE_OMGJOER===a?.trygderettVurdering&&l.jsxs(l.Fragment,{children:[l.jsxs(y,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(m,{id:"Ankebehandling.OmgjoeringArsak"})}),l.jsx(p,{size:"small",children:s.find(d=>d.kode===a.trygderettOmgjoerArsak)?.navn})]}),l.jsx(y,{gap:"space-4",children:l.jsxs(p,{size:"small",children:[a.trygderettVurderingOmgjoer===T.ANKE_TIL_GUNST&&l.jsx(m,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),a.trygderettVurderingOmgjoer===T.ANKE_TIL_UGUNST&&l.jsx(m,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),a.trygderettVurderingOmgjoer===T.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&l.jsx(m,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})})]}),(k.ANKE_OPPHEVE_OG_HJEMSENDE===a?.trygderettVurdering||k.ANKE_HJEMSENDE_UTEN_OPPHEV===a?.trygderettVurdering)&&!r&&l.jsxs(y,{gap:"space-4",children:[l.jsx(h,{size:"small",children:l.jsx(m,{id:"Ankebehandling.OmgjoeringArsak"})}),l.jsx(p,{size:"small",children:s.find(d=>d.kode===a.trygderettOmgjoerArsak)?.navn})]})]})};le.__docgenInfo={description:"",methods:[],displayName:"TrygderettsbehandlingForm",props:{ankeVurdering:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!1}}]},required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}}]}},description:""}}};const Ve={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},je=Ee(Ve),J=({ankeVurdering:e})=>l.jsx(ue,{value:je,children:l.jsx(le,{ankeVurdering:e})});J.__docgenInfo={description:"",methods:[],displayName:"AnkeTrygderettsbehandlingProsessIndex",props:{ankeVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'ANKE_TIL_GUNST'"},{name:"literal",value:"'ANKE_DELVIS_OMGJOERING_TIL_GUNST'"},{name:"literal",value:"'ANKE_TIL_UGUNST'"},{name:"literal",value:"'-'"}],required:!1}}]},required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}},{key:"underBehandlingKabalTrygderett",value:{name:"boolean",required:!1}}]}},description:""}}};const Le={title:"prosess/anke/prosess-anke-trygderettsbehandling",component:J,decorators:[me],render:e=>l.jsx(J,{...e})},R={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:k.ANKE_OMGJOER,trygderettOmgjoerArsak:D.NYE_OPPLYSNINGER,trygderettVurderingOmgjoer:T.ANKE_TIL_GUNST}}}},L={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:k.ANKE_OPPHEVE_OG_HJEMSENDE,trygderettOmgjoerArsak:D.NYE_OPPLYSNINGER}}}},x={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:k.ANKE_HJEMSENDE_UTEN_OPPHEV,trygderettOmgjoerArsak:D.NYE_OPPLYSNINGER}}}},P={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:k.ANKE_AVVIS}}}},G={args:{ankeVurdering:{ankeVurderingResultat:{erMerknaderMottatt:!0,merknadKommentar:"Dette er en kommentar",trygderettVurdering:k.ANKE_STADFESTE_YTELSESVEDTAK}}}},M={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:k.ANKE_STADFESTE_YTELSESVEDTAK},behandletAvKabal:!0}}},U={args:{ankeVurdering:{ankeVurderingResultat:{trygderettVurdering:k.ANKE_STADFESTE_YTELSESVEDTAK},underBehandlingKabal:!0}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_OMGJOER,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER,
        trygderettVurderingOmgjoer: AnkeVurderingOmgjoer.ANKE_TIL_GUNST
      }
    } as AnkeVurdering
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER
      }
    } as AnkeVurdering
  }
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV,
        trygderettOmgjoerArsak: AnkeOmgjorArsak.NYE_OPPLYSNINGER
      }
    } as AnkeVurdering
  }
}`,...x.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_AVVIS
      }
    } as AnkeVurdering
  }
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        erMerknaderMottatt: true,
        merknadKommentar: 'Dette er en kommentar',
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      }
    } as AnkeVurdering
  }
}`,...G.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      behandletAvKabal: true
    } as AnkeVurdering
  }
}`,...M.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ankeVurdering: {
      ankeVurderingResultat: {
        trygderettVurdering: ankeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK
      },
      underBehandlingKabal: true
    } as AnkeVurdering
  }
}`,...U.parameters?.docs?.source}}};const xe=["ResultatVedOmgjortResultat","ResultatVedOpphevetResultat","ResultatVedHjemsendtResultat","ResultatVedAvvistResultat","ResultatVedStadfestetResultat","ErBehandletIKabel","ErUnderBehandlingIKabel"];export{M as ErBehandletIKabel,U as ErUnderBehandlingIKabel,P as ResultatVedAvvistResultat,x as ResultatVedHjemsendtResultat,R as ResultatVedOmgjortResultat,L as ResultatVedOpphevetResultat,G as ResultatVedStadfestetResultat,xe as __namedExportsOrder,Le as default};
